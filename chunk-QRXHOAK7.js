import {
  AssetStateService,
  AsyncHandler,
  BehaviorSubject,
  Booking,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DEFAULT_COLOURS,
  DatePipe,
  ElementRef,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  IconComponent,
  Injectable,
  Input,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatRipple,
  MatRippleModule,
  NavigationEnd,
  NgControlStatus,
  NgControlStatusGroup,
  OrganisationService,
  Output,
  PaymentsService,
  ReactiveFormsModule,
  Router,
  SafePipe,
  SanitizePipe,
  SettingsService,
  TranslatePipe,
  Vi,
  __async,
  __spreadProps,
  __spreadValues,
  addDays,
  addMinutes,
  bookedResourceList,
  catchError,
  combineLatest,
  currentUser,
  debounceTime,
  distinctUntilKeyChanged,
  endOfDay,
  filter,
  findNearbyFeature,
  first,
  flatten,
  forkJoin,
  format,
  generateBookingForm,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  getInvalidFields,
  getUnixTime,
  hu,
  i18n,
  inject,
  lastValueFrom,
  loadLockerBanks,
  loadLockers,
  map,
  merge,
  mu,
  nextValueFrom,
  notifyError,
  notifyWarn,
  of,
  openConfirmModal,
  queryBookings,
  rulesForResource,
  saveBooking,
  setClassMetadata,
  shareReplay,
  startOfDay,
  switchMap,
  tap,
  timer,
  unique,
  validateAssetRequestsForResource,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7ARVCWLO.js";

// libs/bookings/src/lib/booking-link-modal.component.ts
var _BookingLinkModalComponent = class _BookingLinkModalComponent {
  constructor() {
    this._event = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.outlook_link = generateMicrosoftCalendarLink(this._event);
    this.google_link = generateGoogleCalendarLink(this._event);
    this.ical_link = generateCalendarFileLink(this._event);
  }
};
_BookingLinkModalComponent.\u0275fac = function BookingLinkModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingLinkModalComponent)();
};
_BookingLinkModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingLinkModalComponent, selectors: [["booking-link-modal"]], decls: 26, vars: 24, consts: [[1, "w-full", "p-4", "pb-2"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "right-0", "top-2"]], template: function BookingLinkModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "a", 2);
    \u0275\u0275pipe(5, "sanitize");
    \u0275\u0275element(6, "img", 3);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 2);
    \u0275\u0275pipe(11, "sanitize");
    \u0275\u0275element(12, "img", 4);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a", 2);
    \u0275\u0275pipe(17, "safe");
    \u0275\u0275elementStart(18, "icon", 5);
    \u0275\u0275text(19, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 6)(24, "icon");
    \u0275\u0275text(25, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, "BOOKING.LINK_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(5, 9, ctx.outlook_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, "BOOKING.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(11, 14, ctx.google_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 17, "BOOKING.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(17, 19, ctx.ical_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 22, "BOOKING.LINK_ICAL"));
  }
}, dependencies: [
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  SafePipe,
  SanitizePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */"] });
var BookingLinkModalComponent = _BookingLinkModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingLinkModalComponent, [{
    type: Component,
    args: [{ selector: "booking-link-modal", template: `
        <div class="w-full p-4 pb-2">
            {{ 'BOOKING.LINK_HEADER' | translate }}
        </div>
        <div class="relative flex flex-col items-center space-y-4 p-4">
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="outlook_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/outlook.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_OUTLOOK' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="google_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/gcal.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_GOOGLE' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="ical_link | safe: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <icon class="text-xl">download</icon>
                <span>{{ 'BOOKING.LINK_ICAL' | translate }}</span>
            </a>
        </div>
        <button icon matRipple mat-dialog-close class="absolute right-0 top-2">
            <icon>close</icon>
        </button>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatDialogModule,
      SafePipe,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/booking-link-modal.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingLinkModalComponent, { className: "BookingLinkModalComponent", filePath: "libs/bookings/src/lib/booking-link-modal.component.ts", lineNumber: 77 });
})();

// libs/bookings/src/lib/desk-questions-modal.component.ts
function DeskQuestionsModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 2);
    \u0275\u0275text(2, "COVID-19 Questionnaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "main", 3)(4, "div", 4)(5, "label");
    \u0275\u0275text(6, " Have you travelled overseas within the last 14 days?");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-radio-group", 5)(10, "mat-radio-button", 6);
    \u0275\u0275text(11, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-radio-button", 6);
    \u0275\u0275text(13, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 4)(15, "label");
    \u0275\u0275text(16, " Are you unwell or experiencing any cold or flu-like symptoms?");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-radio-group", 7)(20, "mat-radio-button", 6);
    \u0275\u0275text(21, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-radio-button", 6);
    \u0275\u0275text(23, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 8)(25, "label");
    \u0275\u0275text(26, " Have you had contact with anyone with suspected COVID-19?");
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-radio-group", 9)(30, "mat-radio-button", 6);
    \u0275\u0275text(31, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-radio-button", 6);
    \u0275\u0275text(33, "No");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "footer", 10)(35, "button", 11);
    \u0275\u0275listener("click", function DeskQuestionsModalComponent_Conditional_0_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(36, "Submit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 12)(38, "icon");
    \u0275\u0275text(39, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
  }
}
function DeskQuestionsModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 1)(1, "p", 13);
    \u0275\u0275text(2, " Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 12)(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
}
var _DeskQuestionsModalComponent = class _DeskQuestionsModalComponent {
  constructor() {
    this.event = new EventEmitter();
    this.form = new FormGroup({
      travelled: new FormControl(false),
      unwell: new FormControl(false),
      contact: new FormControl(false)
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (Object.keys(this.form.value).find((key) => this.form.value[key] === true || this.form.value[key] === "true")) {
      this.failure = true;
      return;
    }
    this.event.emit({ reason: "done" });
  }
};
_DeskQuestionsModalComponent.\u0275fac = function DeskQuestionsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskQuestionsModalComponent)();
};
_DeskQuestionsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskQuestionsModalComponent, selectors: [["desk-question-modal"]], outputs: { event: "event" }, decls: 2, vars: 1, consts: [[1, "relative"], ["failure", "", 1, "relative", "pt-8"], [1, "p-4", "text-xl"], [1, "p-4", 3, "formGroup"], [1, "mb-4", "flex", "flex-col"], ["formControlName", "travelled", 1, "space-x-2"], [3, "value"], ["formControlName", "unwell", 1, "space-x-2"], [1, "flex", "flex-col"], ["formControlName", "contact", 1, "space-x-2"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["close", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4"]], template: function DeskQuestionsModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DeskQuestionsModalComponent_Conditional_0_Template, 40, 7, "div", 0)(1, DeskQuestionsModalComponent_Conditional_1_Template, 6, 0, "main", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.failure ? 0 : 1);
  }
}, dependencies: [
  IconComponent,
  MatDialogModule,
  MatDialogClose,
  MatRippleModule,
  MatRipple,
  MatRadioModule,
  MatRadioGroup,
  MatRadioButton,
  ReactiveFormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName
], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */"] });
var DeskQuestionsModalComponent = _DeskQuestionsModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskQuestionsModalComponent, [{
    type: Component,
    args: [{ selector: "desk-question-modal", template: `
        @if (!failure) {
            <div class="relative">
                <h2 class="p-4 text-xl">COVID-19 Questionnaire</h2>
                <main class="p-4" [formGroup]="form">
                    <div class="mb-4 flex flex-col">
                        <label>
                            Have you travelled overseas within the last 14
                            days?<span>*</span>
                        </label>
                        <mat-radio-group
                            formControlName="travelled"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="mb-4 flex flex-col">
                        <label>
                            Are you unwell or experiencing any cold or flu-like
                            symptoms?<span>*</span>
                        </label>
                        <mat-radio-group
                            formControlName="unwell"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="flex flex-col">
                        <label>
                            Have you had contact with anyone with suspected
                            COVID-19?<span>*</span>
                        </label>
                        <mat-radio-group
                            formControlName="contact"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                </main>
                <footer class="flex items-center justify-center p-2">
                    <button btn matRipple (click)="submit()">Submit</button>
                </footer>
                <button close icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </div>
        } @else {
            <main failure class="relative pt-8">
                <p class="p-4">
                    Your request to work from the office has been rejected based
                    on your response to the compulsory Covid-19 questions.
                    Please feel free to submit a new request when circumstances
                    change in a way that changes your answer to the questions.
                </p>
                <button close icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </main>
        }
    `, imports: [
      IconComponent,
      MatDialogModule,
      MatRippleModule,
      MatRadioModule,
      ReactiveFormsModule
    ], styles: ["/* angular:styles/component:css;c7f37c1e60a5fae4a31dda6fbae0d3cc845b39f17b3f09824fe872f6bf4e7f79;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-questions-modal.component.ts */\nmain {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskQuestionsModalComponent, { className: "DeskQuestionsModalComponent", filePath: "libs/bookings/src/lib/desk-questions-modal.component.ts", lineNumber: 111 });
})();

// libs/bookings/src/lib/booking-form.service.ts
var BOOKING_TYPES = ["desk", "parking", "locker", "catering"];
var _BookingFormService = class _BookingFormService extends AsyncHandler {
  get view() {
    return this._view.getValue();
  }
  get booking() {
    return this._booking.getValue();
  }
  resourceUserName(id) {
    return this._resource_use[id];
  }
  newForm(type, booking = new Booking({})) {
    if (type !== this._options.getValue().type)
      this.clearForm();
    this.setOptions({ type });
    if (!booking.id) {
      booking.all_day = this._settings.get(`app.${type}s.all_day_default`) ?? this._settings.get(`app.${type}.all_day_default`) ?? this._settings.get("app.bookings.all_day_default");
    }
    this.form.reset();
    this.form.patchValue(Vi(__spreadValues(__spreadValues({}, booking.extension_data), booking), [null, void 0, ""]));
    this.subscription("form_change", this.form.valueChanges.subscribe(() => {
      const { date, duration } = this.form.getRawValue();
      this._assets.setOptions({ date, duration });
      this.storeForm();
    }));
    this.timeout("date", () => __async(this, null, function* () {
      return this.form.patchValue({
        date: booking.date,
        duration: booking.duration
      });
    }));
    this._booking.next(new Booking(booking));
    this._options.next({ type: this._options.getValue().type });
    this.timeout("set-resource", () => __async(this, null, function* () {
      const resources = this.form.getRawValue().resources;
      if (!resources?.length)
        return;
      const item_list = yield nextValueFrom(this.resources);
      const new_list = resources.map((asset) => item_list.find((_) => _.id == asset.id) || asset);
      this.form.patchValue({ resources: new_list });
    }));
  }
  constructor() {
    super();
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._payments = inject(PaymentsService);
    this._assets = inject(AssetStateService);
    this._view = new BehaviorSubject("form");
    this._options = new BehaviorSubject({
      type: "desk"
    });
    this._booking = new BehaviorSubject(null);
    this._resource_use = {};
    this._loading = new BehaviorSubject("");
    this.last_success = new Booking(JSON.parse(sessionStorage.getItem("PLACEOS.last_booked_booking") || "{}"));
    this.loading = this._loading.asObservable();
    this.options = this._options.pipe(shareReplay(1));
    this.form = generateBookingForm();
    this.resources = combineLatest([
      this._org.active_building,
      this.options.pipe(distinctUntilKeyChanged("type"))
    ]).pipe(debounceTime(300), switchMap(([bld, { type }]) => {
      if (!bld)
        return of([]);
      const useRegion = () => this._settings.get("app.use_region");
      switch (type) {
        case "desk":
          this._loading.next(i18n("BOOKINGS.DESKS_LOADING"));
          return this.loadResourceList("desks");
        case "parking":
          this._loading.next(i18n("BOOKINGS.PARKING_LOADING"));
          return this.loadResourceList("parking-spaces");
        case "locker":
          this._loading.next(i18n("BOOKINGS.LOCKERS_LOADING"));
          return loadLockers(this._org, of([bld]), loadLockerBanks(this._org, of([bld]), useRegion), useRegion);
      }
      return of([]);
    }), tap(() => this._loading.next(``)), shareReplay(1));
    this.features = this.resources.pipe(map((resource) => {
      const list = [];
      for (const { features } of resource) {
        features instanceof Array ? features.forEach((_) => list.push(_)) : null;
      }
      return unique(list).sort((a, b) => a.localeCompare(b));
    }), shareReplay(1));
    this.booking_rules = combineLatest([this._org.building_list, this._options]).pipe(switchMap(([list, { type }]) => Promise.all(list.map((bld) => hu(bld.id, `${type}_booking_rules`).toPromise()))), map((building_rules) => {
      const mapping = {};
      for (const rules of building_rules) {
        mapping[rules.id] = rules.details instanceof Array ? rules.details : [];
      }
      return mapping;
    }), shareReplay(1));
    this.available_resources = combineLatest([
      this.options,
      this.resources,
      this.booking_rules,
      merge(this.form.get("user").valueChanges, timer(1e3)),
      merge(this.form.get("date").valueChanges, timer(1e3)),
      merge(this.form.get("duration").valueChanges, timer(1e3))
    ]).pipe(filter(() => this.form.getRawValue().date > 0 && this.form.getRawValue().duration > 0), debounceTime(500), tap(([{ type }]) => this._loading.next(i18n("BOOKINGS.LOADING_AVAILABILITY", { type }))), switchMap(([options, resources, restrictions]) => {
      let { all_day, date, duration, user } = this.form.getRawValue();
      if (all_day) {
        date = startOfDay(date).valueOf();
        duration = 24 * 60 - 1;
      }
      return bookedResourceList({
        period_start: getUnixTime(date),
        period_end: getUnixTime(addMinutes(date, duration)),
        type: options.type,
        zones: options.zone_id || (this._settings.get("app.use_region") ? this._org.region?.id : this._org.building?.id) || this._org.organisation.id
      }).pipe(map((booked_ids) => {
        const start = this.form.getRawValue().date;
        const end = addMinutes(start, this.form.getRawValue().duration).valueOf();
        this._resource_use = {};
        for (const id of booked_ids) {
          this._resource_use[id] = " ";
        }
        const available = resources.filter((asset) => {
          const is_restricted = rulesForResource({
            date,
            duration,
            resource: asset,
            host: user || currentUser()
          }, restrictions[asset.zone?.id] || restrictions[asset.zone?.parent_id] || restrictions[this._org.building.id] || []).hidden;
          return !is_restricted && (!asset.groups?.length || asset.groups.some((grp) => currentUser().groups.includes(grp))) && asset.bookable !== false && (!options.features || options.features?.every((_) => asset.features.includes(_))) && (!options.zone_id || options.zone_id === asset.zone?.id || options.zone_id === asset.zone?.parent_id) && !booked_ids.includes(asset.id);
        });
        console.log("Resources Available:", available);
        return available;
      }, catchError(() => of([]))));
    }), tap(() => this._loading.next("")), shareReplay(1));
    this.grouped_availability = combineLatest([
      this.options,
      this.available_resources
    ]).pipe(map(([options, resource]) => {
      const groups = [];
      const asset_list = [...resource].sort((a, b) => a.zone?.id?.localeCompare(b.zone?.id));
      const members = options.members?.length ? options.members : [currentUser()];
      while (asset_list.length) {
        const group = [];
        let asset = asset_list.pop();
        while (group.length < members.length) {
          if (group.length && !group.find((_) => _.zone?.id === asset.zone?.id)) {
            break;
          }
          group.push(asset);
          asset = asset_list.pop();
        }
        if (group.length < members.length)
          continue;
        groups.push(group);
      }
      return groups;
    }));
    this.subscription("router.bookings", this._router.events.subscribe((booking) => {
      if (booking instanceof NavigationEnd && !booking.url.includes("book") && !BOOKING_TYPES.find((_) => booking.url.includes(_))) {
        this.clearForm();
      }
    }));
    this._org.initialised.pipe(first((_) => _)).subscribe(() => this.setOptions({}));
  }
  setView(value) {
    this._view.next(value);
  }
  setOptions(value) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), value));
  }
  setFeature(feature, enable) {
    if (!feature?.length)
      return;
    const features = this._options.getValue()?.features || [];
    if (enable && !features.includes(feature))
      features.push(feature);
    if (!enable && features.includes(feature))
      features.splice(features.findIndex((e) => e === feature), 1);
    this.setOptions({ features });
  }
  resetForm() {
    if (!sessionStorage.getItem("PLACEOS.booking_form")) {
      return this.newForm(this._options.getValue().type);
    }
    const booking = this._booking.getValue();
    this.form.reset({ user: currentUser(), booked_by: currentUser() });
    this.form.patchValue(Vi(__spreadValues(__spreadValues({}, booking || {}), booking?.extension_data || {}), [null, void 0, ""]));
    this._options.next({ type: this._options.getValue().type });
  }
  clearForm() {
    sessionStorage.removeItem("PLACEOS.booking_form");
    sessionStorage.removeItem("PLACEOS.booking_form_options");
    this.newForm(this._options.getValue().type);
  }
  storeForm() {
    sessionStorage.setItem("PLACEOS.booking_form", JSON.stringify(__spreadValues(__spreadValues({}, this._booking.getValue()), Vi(this.form.getRawValue() || {}, [
      null,
      void 0,
      ""
    ]))));
    sessionStorage.setItem("PLACEOS.booking_form_filters", JSON.stringify(this._options.getValue() || {}));
  }
  loadForm() {
    this.form.reset({ user: currentUser(), booked_by: currentUser() });
    const data = JSON.parse(sessionStorage.getItem("PLACEOS.booking_form") || "{}");
    const booking = new Booking(data);
    this._booking.next(booking);
    const booking_data = Vi(__spreadValues(__spreadValues(__spreadValues({}, data), booking || {}), booking?.extension_data || {}), [null, void 0, ""]);
    this.form.patchValue(booking_data);
    this.setOptions(__spreadValues({}, JSON.parse(sessionStorage.getItem("PLACEOS.booking_form_filters") || "{}")));
  }
  clearOldState() {
    sessionStorage.removeItem("PLACEOS.last_booked_booking");
    this.last_success = new Booking();
  }
  openBookingLinkModal(force = false) {
    this.form.markAllAsTouched();
    if (!this.form.valid && !force)
      return;
    const event = new Booking(__spreadValues(__spreadValues({}, this.booking), this.form.getRawValue()));
    this._dialog.open(BookingLinkModalComponent, { data: event });
  }
  confirmPost() {
    return __async(this, null, function* () {
      yield this.checkQuestions();
      const options = this._options.getValue();
      const value = this.form.getRawValue();
      console.log("i18n:", i18n("BOOKINGS.CONFIRM_MSG"));
      const content = i18n(options.group ? "BOOKINGS.CONFIRM_MSG_GROUP" : "BOOKINGS.CONFIRM_MSG", {
        type: options.type,
        date: format(value.date, "dd MMM yyyy") + (value.duration < 12 * 60 ? " at " + format(value.date, "h:mm a") : "")
      });
      const details = yield openConfirmModal({
        title: i18n("BOOKINGS.CONFIRM_TITLE", { type: options.type }),
        content,
        icon: { content: "event_available" }
      }, this._dialog);
      if (details?.reason !== "done")
        throw "User cancelled";
      details.loading(i18n("BOOKINGS.CONFIRM_LOADING"));
      if (options.group) {
        yield this.postFormForGroup().catch((_) => {
          notifyError(JSON.stringify(_));
          details.close();
          throw _;
        });
      } else
        yield this.postForm().catch((_) => {
          notifyError(JSON.stringify(_));
          details.close();
          throw _;
        });
      details.close();
    });
  }
  postForm(ignore_check = false) {
    return __async(this, null, function* () {
      if (!this.form)
        throw "No form for booking";
      if (!this.form.valid)
        throw `Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`;
      this.form.patchValue({
        booking_type: this.form.getRawValue().booking_type || this._options.getValue().type
      });
      const value = this.form.getRawValue();
      const booking = this._booking.getValue() || new Booking();
      if (!ignore_check) {
        yield this.checkResourceAvailable(__spreadProps(__spreadValues(__spreadValues({}, booking), value), {
          user_email: value.user?.email || value.user_email || currentUser()?.email
        }), this._options.getValue().type);
      }
      if (this._payments.enabled) {
        const receipt = yield this._payments.makePayment({
          type: this._options.getValue().type,
          resource_name: value.asset_name,
          date: value.date,
          duration: value.duration,
          all_day: value.all_day
        });
        if (!receipt?.success)
          return;
        value.extension_data = {
          invoice: receipt,
          invoice_id: receipt.invoice_id
        };
      }
      value.zones = unique([
        ...value?.zones || [],
        ...this._booking.getValue()?.zones || [],
        ...value.booking_asset?.zones || []
      ].filter((_) => _));
      this._loading.next("Saving booking");
      delete value.booking_asset;
      if (value.all_day) {
        value.date = startOfDay(value.date).valueOf();
        value.duration = 24 * 60 - 1;
      }
      const { event_id, parent_id } = value;
      delete value.event_id;
      const resources = value.resources || [];
      const zone = this._org.levelWithID(resources[0]?.zone_id) || resources[0]?.zone;
      const zones = zone && zone instanceof Object ? unique([
        this._org.organisation.id,
        this._org.region?.id,
        zone.parent_id,
        zone.id
      ]) : [this._org.organisation.id, this._org.region?.id];
      const q = event_id ? { ical_uid: value.ical_uid, event_id } : parent_id ? { booking_id: parent_id } : {};
      if (booking.instance && !value.update_master) {
        q.instance = true;
        q.start_time = booking.booking_start;
      }
      if (value.recurrence_type && value.recurrence_type !== "none") {
        const available_period = getUnixTime(endOfDay(addDays(Date.now(), this._settings.get(`app.${value.booking_type}s.available_period`) || 90)));
        if (!value.recurrence_end || value.recurrence_end > available_period) {
          value.recurrence_end = available_period;
        }
      }
      const result = yield lastValueFrom(saveBooking(new Booking(__spreadProps(__spreadValues(__spreadValues({}, this._options.getValue()), value), {
        description: value.asset_name || value.description,
        user_name: value.user?.name || value.user_name,
        user_email: value.user?.email || value.user_email,
        extension_data: __spreadProps(__spreadValues({}, value.extension_data || {}), {
          assets: value.assets.map((_) => _.toJSON()),
          group: value.group,
          phone: value.phone,
          department: value.user?.department || currentUser()?.department
        }),
        approved: this._settings.get("app.bookings.no_approval") === true,
        zones: unique([...zones, ...value.zones || []]).filter((_) => _)
      })), q)).catch((e) => {
        this._loading.next("");
        throw e?.error || e;
      });
      if (value.assets?.length || booking.extension_data.assets?.length) {
        const requests = yield validateAssetRequestsForResource(__spreadProps(__spreadValues({}, result), { from_booking: true }), {
          date: value.date,
          duration: value.duration,
          all_day: value.all_day,
          host: value.booked_by_email,
          zones: unique([...zones, ...value.zones || []]).filter((_) => _)
        }, value.assets).catch((e) => {
          console.error("Couldn't update asset requests", e);
          if (e?.status === 409) {
            notifyError(i18n("BOOKINGS.ASSETS_CLASH_ERROR"));
          }
          this._loading.next("");
          throw e?.error || e;
        });
        if (!requests)
          throw i18n("BOOKINGS.ASSETS_INVALID_ERROR");
        yield requests();
      }
      this._loading.next("");
      const { booking_type } = value;
      this.clearForm();
      this.form?.patchValue({ booking_type });
      this.last_success = result;
      sessionStorage.setItem("PLACEOS.last_booked_booking", JSON.stringify(result));
      this.setView("success");
      return result;
    });
  }
  postFormForGroup() {
    return __async(this, null, function* () {
      const { members, group, type } = this._options.getValue();
      if (!group)
        throw i18n("BOOKINGS.GROUP_NOT_SET");
      const extra_members = members.filter((_) => _.email !== currentUser().email);
      if (extra_members.length <= 0)
        throw i18n("BOOKINGS.GROUP_NO_MEMBERS");
      const form = this.form.getRawValue();
      const asset_list = yield nextValueFrom(this.available_resources);
      const active_resource = asset_list.find((_) => _.id === form.asset_id || _.map_id === form.asset_id);
      const level = this._org.levelWithID([active_resource.zone?.id]);
      const resources = [
        active_resource,
        ...yield this._getNearbyResources(level.map_id, form.asset_id, asset_list, extra_members.length)
      ];
      const group_members = unique([currentUser(), ...extra_members], "email");
      const available = yield Promise.all(group_members.map((_, idx) => this.checkResourceAvailable(__spreadProps(__spreadValues({}, form), {
        asset_id: resources[idx].map_id || resources[idx].id,
        user_email: _.email
      }), type)));
      const unavailable = group_members.filter((_, idx) => !available[idx]);
      const group_name = `${currentUser().email}[${format(Date.now(), "yyyy-MM-dd")}]`;
      let id = "";
      for (let i = 0; i < group_members.length; i++) {
        if (!available[i])
          continue;
        const user = group_members[i];
        const asset = resources[i];
        const assets = user.email == currentUser().email ? form.assets : [];
        this.form.patchValue(__spreadProps(__spreadValues({}, form), {
          assets,
          parent_id: id,
          user,
          user_email: user.email,
          user_id: user.id,
          asset_id: asset?.id,
          asset_name: asset.name,
          description: asset.name,
          map_id: asset?.map_id || asset?.id,
          group: group_name,
          zones: (asset.zone ? unique([
            this._org.organisation.id,
            this._org.region?.id,
            asset?.zone?.parent_id,
            asset?.zone?.id
          ]) : [this._org.organisation.id, this._org.region?.id]).filter((_) => _)
        }));
        const bkn = yield this.postForm(true);
        if (bkn.id && !id)
          id = bkn.id;
      }
      if (unavailable.length) {
        notifyWarn(i18n("BOOKINGS.GROUP_SOME_HAVE_BOOKINGS", {
          members: unavailable.map((_) => _.name || _.email)?.join(", ")
        }));
      }
    });
  }
  checkQuestions() {
    return __async(this, null, function* () {
      if (this._settings.get("app.desks.ignore_questions") !== false)
        return;
      const ref = this._dialog.open(DeskQuestionsModalComponent);
      const result = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (result?.reason !== "done")
        throw "User cancelled";
      const form = ref.componentInstance.form.getRawValue();
      for (const key in form) {
        if (form[key])
          throw "User failed questionaire";
      }
      ref.close();
    });
  }
  /** Check if the given resource is available for the selected user to book */
  checkResourceAvailable(_0, _1) {
    return __async(this, arguments, function* ({ id, asset_id, date, duration, user_email }, type) {
      if (!user_email)
        throw i18n("BOOKINGS.NO_USER");
      if (type === "group-event")
        return true;
      const bookings = yield queryBookings({
        period_start: getUnixTime(date),
        period_end: getUnixTime(date + duration * 60 * 1e3),
        type,
        email: user_email,
        limit: 1e3
      }).toPromise();
      const active_bookings = bookings.filter((_) => _.status !== "declined" && _.status !== "cancelled" && !_.rejected);
      if (active_bookings.find((_) => _.asset_id === asset_id && id !== _.id)) {
        throw i18n(asset_id.includes("@") ? "BOOKINGS.VISITOR_BOOKED" : "BOOKINGS.RESOURCE_BOOKED", { name: asset_id });
      }
      const allowed_bookings = this._settings.get(`app.bookings.allowed_daily_${type}_count`) ?? 1;
      if (allowed_bookings > 0 && active_bookings.filter((_) => _.user_email.toLowerCase() === (user_email || currentUser()?.email || "").toLowerCase() && _.id !== id).length >= allowed_bookings) {
        const current = user_email === currentUser()?.email;
        throw i18n(current ? "BOOKINGS.CLASH_CURRENT_USER" : "BOOKINGS.CLASH_OTHER_USER", { name: user_email });
      }
      return true;
    });
  }
  loadResourceList(type) {
    const use_region = this._settings.get("app.use_region");
    const map_metadata = (_) => (_?.metadata[type]?.details instanceof Array ? _.metadata[type].details : []).map((d) => __spreadProps(__spreadValues({}, d), {
      id: d.id || d.map_id,
      zone: _.zone
    }));
    const id = use_region ? this._org.building.parent_id : this._org.building.id;
    if (use_region) {
      const id2 = this._org.building.parent_id;
      const buildings = this._org.buildings.filter((_) => _.parent_id === id2);
      return forkJoin(buildings.map((_) => mu(_.id, { name: type }).pipe(map((data) => flatten(data.map(map_metadata)))))).pipe(map((_) => flatten(_)));
    }
    return mu(id, {
      name: type
    }).pipe(map((data) => flatten(data.map(map_metadata))));
  }
  _getNearbyResources(map_url, id, resources, count) {
    return __async(this, null, function* () {
      const nearby_resources = [];
      let asset_list = resources.filter((_) => _.id !== id && _.map_id !== id);
      for (let i = 0; i < count; i++) {
        const item = yield findNearbyFeature(map_url, id, asset_list.map((_) => _.map_id || _.id));
        if (item) {
          nearby_resources.push(resources.find((_) => _.id === item || _.map_id === item));
          asset_list = asset_list.filter((_) => _.id !== item && _.map_id !== item);
        }
      }
      return nearby_resources;
    });
  }
};
_BookingFormService.\u0275fac = function BookingFormService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingFormService)();
};
_BookingFormService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookingFormService, factory: _BookingFormService.\u0275fac, providedIn: "root" });
var BookingFormService = _BookingFormService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-desk-info.component.ts
function ExploreDeskInfoComponent_ng_template_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.user);
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.department, " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, ctx_r0.start, "shortTime"), " \u2013 ", \u0275\u0275pipeBind2(3, 5, ctx_r0.end, "shortTime"), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "div", 4)(3, "h4", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ExploreDeskInfoComponent_ng_template_1_Conditional_5_Template, 2, 1, "p", 6);
    \u0275\u0275conditionalCreate(6, ExploreDeskInfoComponent_ng_template_1_Conditional_6_Template, 2, 1, "p", 7);
    \u0275\u0275conditionalCreate(7, ExploreDeskInfoComponent_ng_template_1_Conditional_7_Template, 4, 8, "p", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("pointer-events-none absolute left-0 top-0 rounded bg-base-100 p-4 shadow " + ctx_r0.x_pos + " " + ctx_r0.y_pos);
    \u0275\u0275property("id", ctx_r0.map_id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.name || ctx_r0.map_id || ctx_r0.id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.user ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.user && ctx_r0.department ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.start ? 7 : -1);
  }
}
var _ExploreDeskInfoComponent = class _ExploreDeskInfoComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this.id = this._details.id;
    this.map_id = this._details.map_id;
    this.name = this._details.name;
    this.user = this._details.user;
    this.start = this._details.start;
    this.end = this._details.end;
    this.status = this._details.status;
    this.department = this._details.department;
  }
  ngOnInit(tries = 0) {
    if (tries > 10)
      return;
    setTimeout(() => {
      const parent = this._element.nativeElement.parentElement?.parentElement;
      if (!parent)
        return this.ngOnInit(++tries);
      const position = {
        y: parseInt(parent.style.top, 10) / 100,
        x: parseInt(parent.style.left, 10) / 100
      };
      this.y_pos = position.y >= 0.5 ? "bottom" : "top";
      this.x_pos = position.x >= 0.5 ? "right" : "left";
    }, 200);
  }
  get available_until() {
    return "";
  }
};
_ExploreDeskInfoComponent.\u0275fac = function ExploreDeskInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreDeskInfoComponent)();
};
_ExploreDeskInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreDeskInfoComponent, selectors: [["explore-desk-info"]], decls: 3, vars: 8, consts: [["desk_tooltip", ""], ["customTooltip", "", 1, "pointer-events-auto", "relative", "z-20", "h-full", "w-full", 3, "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 3, "id"], [1, "arrow"], [1, "details"], ["map-id", "", 1, "m-0", "font-medium"], ["user", "", 1, "mt-2", "text-sm"], ["user", "", 1, "mt-1", "text-sm"], ["start", "", 1, "mt-1", "text-sm"]], template: function ExploreDeskInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
    \u0275\u0275template(1, ExploreDeskInfoComponent_ng_template_1_Template, 8, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const desk_tooltip_r2 = \u0275\u0275reference(2);
    \u0275\u0275property("content", desk_tooltip_r2)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3e3);
    \u0275\u0275attribute("id", ctx.id)("map_id", ctx.map_id);
  }
}, dependencies: [CommonModule, DatePipe, CustomTooltipComponent], styles: ["\n\n[name=space-info][_ngcontent-%COMP%] {\n  width: 16rem;\n}\n[name=status][_ngcontent-%COMP%] {\n  background-color: #43a047;\n  font-weight: 500;\n}\n[name=status].busy[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n[name=status].pending[_ngcontent-%COMP%] {\n  background-color: #ffb300;\n}\n[name=status].not-bookable[_ngcontent-%COMP%] {\n  background-color: #757575;\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */"] });
var ExploreDeskInfoComponent = _ExploreDeskInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDeskInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-desk-info", template: `
        <div
            customTooltip
            [content]="desk_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [delay]="3000"
            class="pointer-events-auto relative z-20 h-full w-full"
            [attr.id]="id"
            [attr.map_id]="map_id"
        ></div>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="map_id"
                [class]="
                    'pointer-events-none absolute left-0 top-0 rounded bg-base-100 p-4 shadow ' +
                    x_pos +
                    ' ' +
                    y_pos
                "
            >
                <div class="arrow"></div>
                <div class="details">
                    <h4 map-id class="m-0 font-medium">
                        {{ name || map_id || id }}
                    </h4>
                    @if (user) {
                        <p user class="mt-2 text-sm">{{ user }}</p>
                    }
                    @if (user && department) {
                        <p user class="mt-1 text-sm">
                            {{ department }}
                        </p>
                    }
                    @if (start) {
                        <p start class="mt-1 text-sm">
                            {{ start | date: 'shortTime' }} &ndash;
                            {{ end | date: 'shortTime' }}
                        </p>
                    }
                </div>
            </div>
        </ng-template>
    `, imports: [CommonModule, CustomTooltipComponent], styles: ["/* angular:styles/component:css;252788f1fd3dfe6526bef8efafd7e1f46286402468abf0b3fe478bff674c8d3f;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-desk-info.component.ts */\n[name=space-info] {\n  width: 16rem;\n}\n[name=status] {\n  background-color: #43a047;\n  font-weight: 500;\n}\n[name=status].busy {\n  background-color: #e53935;\n}\n[name=status].pending {\n  background-color: #ffb300;\n}\n[name=status].not-bookable {\n  background-color: #757575;\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreDeskInfoComponent, { className: "ExploreDeskInfoComponent", filePath: "libs/explore/src/lib/explore-desk-info.component.ts", lineNumber: 93 });
})();

// libs/bookings/src/lib/locker-grid.component.ts
var _c0 = () => [];
function LockerGridComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function LockerGridComponent_For_2_Template_button_click_0_listener() {
      const locker_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clicked.emit(locker_r2));
    });
    \u0275\u0275element(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const locker_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-column-start", locker_r2.position[0] + 1)("grid-row-start", locker_r2.position[1] + 1)("grid-column-end", locker_r2.position[0] + (locker_r2.size[0] + 1))("background-color", ctx_r2.status(locker_r2))("grid-row-end", locker_r2.position[1] + (locker_r2.size[1] + 1));
    \u0275\u0275classProp("opacity-60", ctx_r2.selected && ctx_r2.selected !== locker_r2.id);
    \u0275\u0275property("matTooltip", locker_r2.name)("disabled", locker_r2.bookable === false || (locker_r2 == null ? null : locker_r2.available) === false);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", locker_r2.name, " ");
  }
}
var _LockerGridComponent = class _LockerGridComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this.show_name = true;
    this.default_status = "busy";
    this.bank_status = {};
    this.selected = "";
    this.clicked = new EventEmitter();
  }
  get columns() {
    let columns = 1;
    for (const locker of this.bank?.lockers || []) {
      const x = locker.position[0] + locker.size[0];
      if (x > columns)
        columns = x;
    }
    return columns;
  }
  color(status) {
    const colours = this._settings.get("app.explore.colors") || {};
    return colours[`lockers-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`];
  }
  status(locker) {
    if (!locker)
      return this.color("not-bookable");
    if (this.selected && locker.id === this.selected) {
      return this.color("pending");
    }
    let value = this.bank_status[locker.id] || "free";
    if (!this.bank_status[locker.id] && !locker?.available) {
      value = this.default_status;
    }
    return this.color(value);
  }
};
_LockerGridComponent.\u0275fac = function LockerGridComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockerGridComponent)();
};
_LockerGridComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerGridComponent, selectors: [["locker-grid"]], inputs: { show_name: "show_name", default_status: "default_status", bank: "bank", bank_status: "bank_status", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 3, vars: 7, consts: [[1, "grid", "flex-1", "gap-2", "p-2"], ["matRipple", "", 1, "relative", "overflow-hidden", "rounded", "border", "border-base-200", 3, "opacity-60", "grid-column-start", "grid-row-start", "grid-column-end", "background-color", "grid-row-end", "matTooltip", "disabled"], ["matRipple", "", 1, "relative", "overflow-hidden", "rounded", "border", "border-base-200", 3, "click", "matTooltip", "disabled"], ["handle", "", 1, "absolute", "left-2", "top-1/2", "h-6", "w-1", "-translate-y-1/2", "rounded", "bg-base-400", "opacity-60"], ["vent", "", 1, "absolute", "left-1/2", "top-2", "h-1", "w-12", "-translate-x-1/2", "rounded-t", "bg-base-400", "opacity-60"], ["vent", "", 1, "absolute", "left-1/2", "top-4", "h-1", "w-12", "-translate-x-1/2", "rounded-t", "bg-base-400", "opacity-60"], ["vent", "", 1, "absolute", "left-1/2", "top-6", "h-1", "w-12", "-translate-x-1/2", "rounded-t", "bg-base-400", "opacity-60"], [1, "absolute", "left-1/2", "top-8", "-translate-x-1/2", "text-[0.6rem]", "font-medium", "text-base-content", "opacity-60"], [1, "absolute", "inset-0", "opacity-10", "hover:bg-base-content"]], template: function LockerGridComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, LockerGridComponent_For_2_Template, 8, 15, "button", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("width", ctx.columns * 2.5 + "rem")("grid-template-columns", "repeat(" + ctx.columns + ", 5rem)")("grid-template-rows", "repeat(" + (ctx.bank == null ? null : ctx.bank.height) + ", 5rem)");
    \u0275\u0275advance();
    \u0275\u0275repeater((ctx.bank == null ? null : ctx.bank.lockers) || \u0275\u0275pureFunction0(6, _c0));
  }
}, dependencies: [MatRippleModule, MatRipple], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=locker-grid.component.css.map */"] });
var LockerGridComponent = _LockerGridComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerGridComponent, [{
    type: Component,
    args: [{ selector: "locker-grid", template: `
        <div
            class="grid flex-1 gap-2 p-2"
            [style.width]="columns * 2.5 + 'rem'"
            [style.grid-template-columns]="'repeat(' + columns + ', 5rem)'"
            [style.grid-template-rows]="'repeat(' + bank?.height + ', 5rem)'"
        >
            @for (locker of bank?.lockers || []; track locker) {
                <button
                    matRipple
                    class="relative overflow-hidden rounded border border-base-200"
                    [class.opacity-60]="selected && selected !== locker.id"
                    [style.grid-column-start]="locker.position[0] + 1"
                    [style.grid-row-start]="locker.position[1] + 1"
                    [style.grid-column-end]="
                        locker.position[0] + (locker.size[0] + 1)
                    "
                    [style.background-color]="status(locker)"
                    [style.grid-row-end]="
                        locker.position[1] + (locker.size[1] + 1)
                    "
                    [matTooltip]="locker.name"
                    [disabled]="
                        locker.bookable === false || locker?.available === false
                    "
                    (click)="clicked.emit(locker)"
                >
                    <div
                        handle
                        class="absolute left-2 top-1/2 h-6 w-1 -translate-y-1/2 rounded bg-base-400 opacity-60"
                    ></div>
                    <div
                        vent
                        class="absolute left-1/2 top-2 h-1 w-12 -translate-x-1/2 rounded-t bg-base-400 opacity-60"
                    ></div>
                    <div
                        vent
                        class="absolute left-1/2 top-4 h-1 w-12 -translate-x-1/2 rounded-t bg-base-400 opacity-60"
                    ></div>
                    <div
                        vent
                        class="absolute left-1/2 top-6 h-1 w-12 -translate-x-1/2 rounded-t bg-base-400 opacity-60"
                    ></div>
                    <div
                        class="absolute left-1/2 top-8 -translate-x-1/2 text-[0.6rem] font-medium text-base-content opacity-60"
                    >
                        {{ locker.name }}
                    </div>
                    <div
                        class="absolute inset-0 opacity-10 hover:bg-base-content"
                    ></div>
                </button>
            }
        </div>
    `, imports: [MatRippleModule], styles: ["/* angular:styles/component:css;32afd79bdb50e1a260a311dcbbe42ad630e05ff005c6bd90901be0d3385e4315;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/locker-grid.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nbutton[disabled] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=locker-grid.component.css.map */\n"] }]
  }], null, { show_name: [{
    type: Input
  }], default_status: [{
    type: Input
  }], bank: [{
    type: Input
  }], bank_status: [{
    type: Input
  }], selected: [{
    type: Input
  }], clicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerGridComponent, { className: "LockerGridComponent", filePath: "libs/bookings/src/lib/locker-grid.component.ts", lineNumber: 78 });
})();

// libs/bookings/src/lib/parking.service.ts
var _ParkingService = class _ParkingService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._loading = new BehaviorSubject([]);
    this.loading = this._loading.asObservable();
    this.levels = this._org.level_list.pipe(map((_) => {
      if (!this._settings.get("app.use_region")) {
        const blds = this._org.buildingsForRegion();
        const bld_ids = blds.map((bld) => bld.id);
        const list = _.filter((lvl) => bld_ids.includes(lvl.parent_id) && lvl.tags.includes("parking"));
        list.map((lvl) => __spreadProps(__spreadValues({}, lvl), {
          display_name: `${blds.find((_2) => _2.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
        }));
        return list;
      }
      return _.filter((lvl) => lvl.parent_id === this._org.building.id && lvl.tags.includes("parking"));
    }));
    this.spaces = combineLatest([this.levels]).pipe(filter(([lvls]) => !!lvls[0]?.id), switchMap(([levels]) => {
      this._loading.next([...this._loading.getValue(), "spaces"]);
      return forkJoin(levels.map((lvl) => hu(lvl.id, "parking-spaces").pipe(map((d) => (d.details instanceof Array ? d.details : []).map((s) => __spreadProps(__spreadValues({}, s), {
        zone_id: lvl.id
      }))))));
    }), map((list) => flatten(list)), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "spaces"))), shareReplay(1));
    this.users = combineLatest([this._org.active_building]).pipe(filter(([bld]) => !!bld?.id), switchMap(([bld]) => {
      this._loading.next([...this._loading.getValue(), "users"]);
      return hu(bld.id, "parking-users");
    }), map((metadata) => metadata.details instanceof Array ? metadata.details : []), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "users"))), shareReplay(1));
    this.has_booking = queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "parking"
    }).pipe(map((_) => _.length > 0), shareReplay(1));
    this.assigned_space = this.spaces.pipe(map((list) => list.find((_) => _.assigned_to?.toLowerCase() === currentUser().email?.toLowerCase())));
    this.user_details = this.users.pipe(map((list) => list.find((_) => _.email?.toLowerCase() === currentUser().email?.toLowerCase())));
    this.deny_parking_access = this.user_details.pipe(map((details) => !!details?.deny));
    this.booked_space = combineLatest([
      this._org.active_building,
      this.spaces
    ]).pipe(map(([_, spaces]) => queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "parking"
    }).pipe(catchError(() => of([])), map((booking_list) => booking_list.map((booking) => spaces.find((space) => space.id === booking.asset_id)).filter((space) => !!space)))), map((_) => _[0]), shareReplay(1));
    this.subscription("spaces", this.assigned_space.subscribe());
  }
};
_ParkingService.\u0275fac = function ParkingService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingService)();
};
_ParkingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParkingService, factory: _ParkingService.\u0275fac, providedIn: "root" });
var ParkingService = _ParkingService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-parking-info.component.ts
function ExploreParkingInfoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "EXPLORE.PARKING_PLATE_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.plate_number || "PLATE NO 1", " ");
  }
}
var _ExploreParkingInfoComponent = class _ExploreParkingInfoComponent {
  constructor() {
    this._data = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this._settings = inject(SettingsService);
    this.status = this._data.assigned_to === this._data.user && this._data.user ? "reserved" : this._data.status;
    this.user = this._data.user;
    this.name = this._data.name;
    this.map_id = this._data.map_id;
    this.plate_number = this._data.plate_number;
  }
  get is_concierge() {
    return this._settings.app_name.toLowerCase().includes("concierge");
  }
};
_ExploreParkingInfoComponent.\u0275fac = function ExploreParkingInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreParkingInfoComponent)();
};
_ExploreParkingInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreParkingInfoComponent, selectors: [["explore-parking-info"]], decls: 9, vars: 15, consts: [[1, "absolute", "left-1/2", "top-1/2", "rounded-lg", "!rounded-tl-none", "bg-base-300", "p-2", "text-left", "shadow"], [1, "triangle", "absolute", "left-0.5", "top-0.5"], [1, "flex", "space-x-2"], [1, "flex", "min-w-24", "flex-col", "pl-1", "leading-tight"], [1, "whitespace-nowrap"], [1, "text-sm", "font-medium", "capitalize"], [1, "relative", "flex", "h-full", "flex-col", "rounded", "bg-base-100", "px-2", "leading-tight", "text-base-content", "shadow"], [1, "w-full", "whitespace-nowrap", "pt-1", "text-center", "text-[0.625rem]", "font-medium"], [1, "w-full", "pb-1", "text-center", "font-mono", "uppercase"]], template: function ExploreParkingInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, ExploreParkingInfoComponent_Conditional_8_Template, 6, 4, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("!bg-error", ctx.status === "busy")("!text-error-content", ctx.status === "busy")("!bg-warning", ctx.status === "reserved")("!text-warning-content", ctx.status === "reserved")("!bg-success", ctx.status === "free")("!text-success-content", ctx.status === "free");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.status, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.is_concierge && ctx.plate_number ? 8 : -1);
  }
}, dependencies: [TranslatePipe], styles: ["\n\n.triangle[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=explore-parking-info.component.css.map */"] });
var ExploreParkingInfoComponent = _ExploreParkingInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreParkingInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-parking-info", template: `
        <div
            class="absolute left-1/2 top-1/2 rounded-lg !rounded-tl-none bg-base-300 p-2 text-left shadow"
            [class.!bg-error]="status === 'busy'"
            [class.!text-error-content]="status === 'busy'"
            [class.!bg-warning]="status === 'reserved'"
            [class.!text-warning-content]="status === 'reserved'"
            [class.!bg-success]="status === 'free'"
            [class.!text-success-content]="status === 'free'"
        >
            <div class="triangle absolute left-0.5 top-0.5"></div>
            <div class="flex space-x-2">
                <div class="flex min-w-24 flex-col pl-1 leading-tight">
                    <div class="whitespace-nowrap">{{ name }}</div>
                    <div class="text-sm font-medium capitalize">
                        {{ status }}
                    </div>
                </div>
                @if (is_concierge && plate_number) {
                    <div
                        class="relative flex h-full flex-col rounded bg-base-100 px-2 leading-tight text-base-content shadow"
                    >
                        <div
                            class="w-full whitespace-nowrap pt-1 text-center text-[0.625rem] font-medium"
                        >
                            {{ 'EXPLORE.PARKING_PLATE_NUMBER' | translate }}
                        </div>
                        <div
                            class="w-full pb-1 text-center font-mono uppercase"
                        >
                            {{ plate_number || 'PLATE NO 1' }}
                        </div>
                    </div>
                }
            </div>
        </div>
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;186a95b4c185bcd2753f7ef9d30513d06855e35c348eb8e66dff829f779ea78f;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-parking-info.component.ts */\n.triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=explore-parking-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreParkingInfoComponent, { className: "ExploreParkingInfoComponent", filePath: "libs/explore/src/lib/explore-parking-info.component.ts", lineNumber: 66 });
})();

export {
  BookingLinkModalComponent,
  DeskQuestionsModalComponent,
  BookingFormService,
  ExploreDeskInfoComponent,
  LockerGridComponent,
  ParkingService,
  ExploreParkingInfoComponent
};
//# sourceMappingURL=chunk-QRXHOAK7.js.map
