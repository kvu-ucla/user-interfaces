import {Component, inject, NgModule, OnInit, Pipe, PipeTransform} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { startOfMinute } from 'date-fns';
import { catchError, debounceTime, map, startWith, switchMap } from 'rxjs/operators';

import {
    AsyncHandler,
    firstTruthyValueFrom,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { generateQRCode } from 'libs/common/src/lib/qr-code';
import { CalendarEvent } from 'libs/events/src/lib/event.class';
import { PanelStateService } from './panel-state.service';
import { combineLatest, of, timer } from "rxjs";
import { showMetadata } from '@placeos/ts-client';

declare const Crestron: any;

const DEFAULT_LED_BRIGHTNESS = 100;

/** Crestron USB LED signal names used to show room occupancy status */
const STATUS_LED_SIGNALS = {
    red: { state: 'USB_RED_LED_CONTROL', brightness: 'USB_RED_LED_BRIGHTNESS' },
    green: { state: 'USB_GREEN_LED_CONTROL', brightness: 'USB_GREEN_LED_BRIGHTNESS' },
    blue: { state: 'USB_BLUE_LED_CONTROL', brightness: 'USB_BLUE_LED_BRIGHTNESS' },
} as const;

type StatusLEDColor = keyof typeof STATUS_LED_SIGNALS;

@Component({
    selector: 'event-panel',
    template: `
        <div class="absolute inset-0 flex flex-col items-center bg-base-100">
            <header class="flex w-full items-center justify-between p-[64px] pt-[128px]">
                <h1 class="text-3xl font-medium">{{ space_name | async }}</h1>
                <div class="flex items-center space-x-4 portrait:hidden">
                    <p class="text-2xl">
                        {{ time | date: 'shortTime' }}
                    </p>
                    <img
                        auth
                        class="h-10"
                        alt="Logo"
                        [src]="logo | async"
                    />
                </div>
            </header>
            <main
                class="bg-[#2774AE] relative flex h-1/2 w-full flex-1 justify-between space-x-8 overflow-hidden bg-cover p-8 portrait:flex-col portrait:space-x-0 portrait:space-y-4"
                [style.color]="text_color | safe"
                [style.background-image]="
                    'url(' + background_image + ')' | safe
                "
            >
                <div class="flex-1 overflow-hidden">
                    @let current_bkn = current | async;
                    @if (current_bkn) {
                        <h2 class="line-clamp-5 text-2xl font-medium">
                            {{ current_bkn?.title }}
                        </h2>
                        <p class="mb-4 text-2xl lowercase">
                            ending &#64;
                            {{ current_bkn?.event_end * 1000 | date: 'h:mma' }}
                        </p>
<!--                        @if (!hide_meeting_details) {-->
<!--                            <p class="text-xl">-->
<!--                                {{ 'APP.BOOKING_PANEL.HOST' | translate }}-->
<!--                                {{-->
<!--                                    current_bkn?.organiser?.name ||-->
<!--                                        current_bkn?.host-->
<!--                                }}-->
<!--                            </p>-->
<!--                        }-->
<!--                        <p-->
<!--                            class="line-clamp-6 text-base portrait:line-clamp-8"-->
<!--                            [innerHTML]="current_bkn?.body | sanitize: 'html'"-->
<!--                        ></p>-->
                    } @else {
                        <p class="text-2xl font-medium opacity-60">
                            {{ 'APP.BOOKING_PANEL.NO_CURRENT' | translate }}
                        </p>
                    }
                </div>
                <div class="min-w-[40%] flex-1">
                    <h2 class="text-2xl font-medium uppercase">
                        {{ 'APP.BOOKING_PANEL.NEXT' | translate }}
                    </h2>
                    <hr class="mb-8" />
                    @let raw = bookings | async;
                    @let now = now$ | async;
                    @let upcoming = (raw | upcoming: now | slice:0:3);

                    @if (upcoming?.length) {
                        @for (b of upcoming; track b.id) {
                            <h2 class="mt-2 line-clamp-4 text-2xl font-medium">
                                {{ b.title }}
                            </h2>
                            <p class="text-2xl lowercase">
                                starting &#64; {{ b.event_start * 1000 | date:'h:mma' }}
                            </p>
                        }
                    } @else {
                        <p class="text-2xl font-medium opacity-60">
                            {{ 'APP.BOOKING_PANEL.NO_UPCOMING' | translate }}
                        </p>
                    }
                </div>
            </main>
            <footer
                class="flex w-full items-center justify-between bg-base-100 px-8 py-3 landscape:hidden"
            >
                <img
                    auth
                    class="h-10"
                    alt="Logo"
                    [src]="logo | async"
                />
                <p class="text-2xl">
                    {{ time | date: 'shortTime' }}
                </p>
            </footer>
            @if (!hide_qr && checkin) {
                <div class="absolute -right-[2px] top-1/2 -translate-y-1/2">
<!--                    <button-->
<!--                        book-tag-->
<!--                        matRipple-->
<!--                        (click)="toggleQRShow()"-->
<!--                        class="absolute left-px top-1/2 z-20 -translate-x-full -translate-y-1/2 rounded-l-lg border-y border-l border-base-300 bg-base-100 px-1 py-4 uppercase"-->
<!--                    >-->
<!--                        {{ 'COMMON.BOOK' | translate }}-->
<!--                    </button>-->
                    <div
                        qr-code-out
                        class="z-10 overflow-hidden rounded-l-lg border border-base-300 bg-base-100 shadow"
                        [class.w-0]="!show_qr"
                        [class.w-56]="show_qr"
                    >
                        <div qr-checkin class="z-50 w-56 p-3">
                            <img class="w-full" [src]="qr_code" />
                        </div>
                    </div>
                </div>
            }
        </div>
    `,
    styles: [
        `
            [book-tag] {
                writing-mode: vertical-rl;
                text-orientation: upright;
            }

            [qr-code-out] {
                transition: width 300ms;
            }
        `,
    ],
    standalone: false,
})
export class EventPanelComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _state = inject(PanelStateService);
    private _org = inject(OrganisationService);

    now$ = timer(0, 60_000).pipe(map(() => Date.now()));



    public system_id = '';
    public show_qr = false;
    public room_name: string | null = '';
    public current = this._state.current;
    public next = this._state.next;
    public bookings = this._state.bookings;
    public qr_code: any;
    public hide_qr = false;
    public readonly space_name = this._state.space.pipe(
        map((_) => _?.display_name || _?.name || ''),
    );

    public get time() {
        return startOfMinute(Date.now());
    }

    public get text_color() {
        return this._settings.get('app.text_color') || '#FFFFFF';
    }

    public get background_color() {
        return this._settings.get('app.background_color') || '#483285';
    }

    public get background_image() {
        return this._settings.get('app.background_image');
    }

    public get led_brightness() {
        return this._settings.get('app.led_brightness') || DEFAULT_LED_BRIGHTNESS;
    }

    public get hide_meeting_details() {
        return this._state.setting('hide_meeting_details');
    }

    /** System id from the active route */
    private readonly _system_id = this._route.paramMap.pipe(
        map((params) => params.get('system_id') || ''),
        startWith(''),
    );

    public readonly logo = combineLatest([
        this._org.active_building,
        this._system_id,
    ]).pipe(
        debounceTime(500),
        // Read the per-system metadata block (`bookings_app`), if any
        switchMap(([_, system_id]) =>
            system_id
                ? showMetadata(system_id, this._org.app_key).pipe(
                      map((metadata) => metadata?.details || {}),
                      catchError(() => of({})),
                  )
                : of({}),
        ),
        map((system_settings: any) => {
            const key =
                this._settings.theme === 'dark' ? 'logo_dark' : 'logo_light';
            return (
                // 1. Per-system metadata override
                system_settings[key] ||
                // 2. Building / region / org / default chain
                this._settings.get(`app.${key}`) ||
                // 3. Hard fallback
                'assets/logo_dts.svg'
            );
        }),
    );

    public get checkin() {
        return this._state.setting('show_qr_code') !== false;
    }

    public get custom_qr() {
        return !!this._state.setting('custom_qr_url');
    }

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                this.system_id = params.get('system_id') || '';
                this._state.system = this.system_id;
            }),
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                this.hide_qr = !!params.get('hide_qr_code');
            }),
        );
        this.timeout(
            'size',
            () =>
                this._settings.overrideCssVariable(
                    'font-size',
                    '3.5vmin',
                    true,
                ),
            1000,
        );
        this.setStatusLEDBrightness('red', this.led_brightness);
        this.setStatusLEDBrightness('green', this.led_brightness);
        this.setStatusLEDBrightness('blue', this.led_brightness);
        this.subscription(
            'status_led',
            this.current.subscribe((booking) =>
                this.updateOccupancyLED(!!booking),
            ),
        );
        this._state.settings.subscribe(({ custom_qr_url, custom_qr_color }) => {
            if (custom_qr_url) {
                this.qr_code = generateQRCode(
                    custom_qr_url,
                    '#0000',
                    custom_qr_color || '#000',
                );
            } else if (!this.qr_code) {
                const url = `${location.origin}${location.pathname}#/checkin/${this._state.system}?user=true`;
                this.qr_code = generateQRCode(
                    url,
                    '#0000',
                    custom_qr_color || '#000',
                );
            }
        });
    }

    public toggleQRShow() {
        this.show_qr = !this.show_qr;
        this.timeout('close', () => (this.show_qr = false), 60 * 1000);
    }

    public asCalendarEvent(data: any) {
        return data ? new CalendarEvent(data) : null;
    }

    /** Toggle the room status LED: red while occupied, green while free */
    private updateOccupancyLED(occupied: boolean) {
        this.setStatusLED('red', occupied);
        this.setStatusLED('green', !occupied);
        this.setStatusLED('blue', false);
    }

    private setStatusLED(color: StatusLEDColor, on: boolean) {
        if (typeof Crestron === 'undefined') return;
        Crestron.sendBooleanSignal(STATUS_LED_SIGNALS[color].state, on);
    }

    private setStatusLEDBrightness(color: StatusLEDColor, value: number) {
        if (typeof Crestron === 'undefined') return;
        Crestron.sendIntegerSignal(STATUS_LED_SIGNALS[color].brightness, value);
    }
}
