import {
  SharedCateringModule
} from "./chunk-EEMW4P66.js";
import "./chunk-PQSXXSEM.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AssetListFieldComponent,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  BuildingPipe,
  CateringListFieldComponent,
  CateringOrderStateService,
  CommonModule,
  Component,
  DateFieldComponent,
  DateOptionsComponent,
  DatePipe,
  DefaultValueAccessor,
  DurationFieldComponent,
  EventBookModalComponent,
  EventDetailsModalComponent,
  EventEmitter,
  EventFormService,
  EventsStateService,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  Input,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatError,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuTrigger,
  MatOption,
  MatProgressBar,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatSelectTrigger,
  MatSlideToggle,
  MatTooltip,
  MeetingFormDetailsComponent,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  OrganisationService,
  Output,
  Router,
  RouterModule,
  SettingsService,
  SetupBreakdownModalComponent,
  SharedSpacesModule,
  SharedUsersModule,
  Space,
  SpaceListFieldComponent,
  SpacePipe,
  TimeFieldComponent,
  TranslatePipe,
  UIModule,
  UserListFieldComponent,
  UserPipe,
  UserSearchFieldComponent,
  ViewEventDetailsComponent,
  __async,
  __spreadProps,
  __spreadValues,
  addDays,
  addHours,
  addMinutes,
  catchError,
  combineLatest,
  currentUser,
  debounceTime,
  declineEvent,
  differenceInMinutes,
  filter,
  first,
  format,
  getTimezoneDifferenceInHours,
  getTimezoneOffsetInMinutes,
  getTimezoneOffsetString,
  i18n,
  inject,
  isSameDay,
  map,
  nextValueFrom,
  normalizeDates,
  notifyError,
  notifySuccess,
  oc,
  of,
  openConfirmModal,
  queryEvents,
  setClassMetadata,
  setHours,
  shareReplay,
  startOfDay,
  startOfMinute,
  startOfWeek,
  startWith,
  switchMap,
  tap,
  viewChild,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-CXHU3K3W.js";

// node_modules/date-fns/isSameWeek.js
function isSameWeek(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return +startOfWeek(laterDate_, options) === +startOfWeek(earlierDate_, options);
}

// apps/concierge/src/app/day-view/dayview-event.component.ts
function DayviewEventComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("overflow-block absolute w-full overflow-hidden rounded " + ctx_r0.type);
    \u0275\u0275styleProp("top", ctx_r0.overflow_top * 100 + "%")("height", ctx_r0.overflow_height * 100 + "%");
  }
}
function DayviewEventComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 6);
    \u0275\u0275text(2, "title");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.event.title, " ");
  }
}
function DayviewEventComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 6);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.time, " ");
  }
}
function DayviewEventComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 6);
    \u0275\u0275text(2, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.event.attendees.length, " Attendee", ctx_r0.event.attendees.length === 1 ? "" : "s", " ");
  }
}
function DayviewEventComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function DayviewEventComponent_Conditional_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.view(ctx_r0.event));
    });
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DayviewEventComponent_Conditional_2_Conditional_3_Template, 4, 1, "div", 5);
    \u0275\u0275conditionalCreate(4, DayviewEventComponent_Conditional_2_Conditional_4_Template, 4, 1, "div", 5);
    \u0275\u0275conditionalCreate(5, DayviewEventComponent_Conditional_2_Conditional_5_Template, 4, 2, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("absolute z-10 overflow-hidden rounded border border-base-200 text-sm shadow-sm hover:z-30 " + ctx_r0.type);
    \u0275\u0275styleProp("top", ctx_r0.top * 100 + "%")("height", ctx_r0.height * 100 + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.event.organiser == null ? null : ctx_r0.event.organiser.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.event.duration > 30 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.event.duration > 60 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.event.duration > 90 ? 5 : -1);
  }
}
function DayviewEventComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div")(2, "icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r0.top * 100 + "%")("height", ctx_r0.height * 100 + "%");
    \u0275\u0275advance();
    \u0275\u0275classMap("icon text-pending mr-2 flex h-12 w-12 items-center justify-center rounded text-3xl " + ctx_r0.event.ext("cleaning_status"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.event.ext("cleaning_status") === "done" ? "done" : "warning");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.event.ext("cleaning_status") === "done" ? "Finished" : "Scheduled to", " clean at ", \u0275\u0275pipeBind2(6, 9, ctx_r0.event.ext("cleaning_time") || ctx_r0.event.event_end * 1e3, ctx_r0.time_format), " ");
  }
}
var DAY_IN_MINUTES = 24 * 60;
var _DayviewEventComponent = class _DayviewEventComponent {
  constructor() {
    this._state = inject(EventsStateService);
    this._settings = inject(SettingsService);
    this.top = -999;
    this.height = 0;
    this.overflow_top = -999;
    this.overflow_height = 0;
    this.ui_options = this._state.options;
    this.view = (e) => this._state.setEvent(e);
  }
  get time() {
    const date = new Date(this.event.date);
    return format(date, this.time_format) + " - " + format(addMinutes(date, this.event.duration), this.time_format);
  }
  get type() {
    return this.event.guests.length ? "external" : this.event.status === "declined" ? "cancelled" : "internal";
  }
  get time_format() {
    return this._settings.time_format;
  }
  ngOnChanges(changes) {
    if (changes.event && this.event) {
      const start = startOfDay(new Date(this.event.date));
      const diff = differenceInMinutes(new Date(this.event.date), start);
      this.top = diff / DAY_IN_MINUTES;
      this.height = this.event.duration / DAY_IN_MINUTES;
      this.overflow_top = (diff - (this.event.setup_time || 0)) / DAY_IN_MINUTES;
      this.overflow_height = (this.event.duration + (this.event.setup_time || 0) + (this.event.breakdown_time || 0)) / DAY_IN_MINUTES;
    }
  }
};
_DayviewEventComponent.\u0275fac = function DayviewEventComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DayviewEventComponent)();
};
_DayviewEventComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DayviewEventComponent, selectors: [["dayview-event"]], inputs: { event: "event" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 5, vars: 7, consts: [[3, "class", "top", "height"], ["event", "", "matRipple", "", 3, "class", "top", "height"], ["cleaning", "", 1, "absolute", "z-20", "flex", "w-full", "overflow-hidden", "rounded", "bg-base-100", "p-2", "shadow", "hover:!h-48", 3, "top", "height"], ["event", "", "matRipple", "", 3, "click"], [1, "px-2", "py-1", "font-medium"], [1, "flex", "items-center", "py-1"], [1, "mx-2"], ["cleaning", "", 1, "absolute", "z-20", "flex", "w-full", "overflow-hidden", "rounded", "bg-base-100", "p-2", "shadow", "hover:!h-48"], [1, "w-1/2", "flex-1"]], template: function DayviewEventComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DayviewEventComponent_Conditional_0_Template, 1, 6, "div", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalCreate(2, DayviewEventComponent_Conditional_2_Template, 6, 10, "div", 1);
    \u0275\u0275conditionalCreate(3, DayviewEventComponent_Conditional_3_Template, 7, 12, "div", 2);
    \u0275\u0275pipe(4, "async");
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_2_0;
    \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(1, 3, ctx.ui_options)) == null ? null : tmp_0_0.show_overflow) ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.event ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.event && ((tmp_2_0 = \u0275\u0275pipeBind1(4, 5, ctx.ui_options)) == null ? null : tmp_2_0.show_cleaning) ? 3 : -1);
  }
}, dependencies: [MatRipple, IconComponent, AsyncPipe, DatePipe], styles: ["\n\n[event][_ngcontent-%COMP%] {\n  background-color: #ccc;\n  width: 12rem;\n  z-index: 100;\n  transition: box-shadow 200ms;\n}\n[event][_ngcontent-%COMP%]:hover {\n  box-shadow:\n    0 1px 3px 1px rgba(0, 0, 0, 0.2),\n    0 1px 1px 0 rgba(0, 0, 0, 0.14),\n    0 2px 1px -1px rgba(0, 0, 0, 0.12) !important;\n  cursor: pointer;\n}\n.overflow-block[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  width: 12rem;\n}\n.internal[_ngcontent-%COMP%] {\n  background-color: #1565c0;\n  color: #fff;\n}\n.icon[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n}\n.icon.done[_ngcontent-%COMP%] {\n  color: #21a453;\n}\n.external[_ngcontent-%COMP%] {\n  background-color: #ad1457;\n  color: #fff;\n}\n.cancelled[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n/*# sourceMappingURL=dayview-event.component.css.map */"] });
var DayviewEventComponent = _DayviewEventComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayviewEventComponent, [{
    type: Component,
    args: [{ selector: "dayview-event", template: `
        @if ((ui_options | async)?.show_overflow) {
            <div
                [class]="
                    'overflow-block absolute w-full overflow-hidden rounded ' +
                    type
                "
                [style.top]="overflow_top * 100 + '%'"
                [style.height]="overflow_height * 100 + '%'"
            ></div>
        }
        @if (event) {
            <div
                event
                matRipple
                [class]="
                    'absolute z-10 overflow-hidden rounded border border-base-200 text-sm shadow-sm hover:z-30 ' +
                    type
                "
                [style.top]="top * 100 + '%'"
                [style.height]="height * 100 + '%'"
                (click)="view(event)"
            >
                <div class="px-2 py-1 font-medium">
                    {{ event.organiser?.name }}
                </div>
                @if (event.duration > 30) {
                    <div class="flex items-center py-1">
                        <icon class="mx-2">title</icon>
                        {{ event.title }}
                    </div>
                }
                @if (event.duration > 60) {
                    <div class="flex items-center py-1">
                        <icon class="mx-2">schedule</icon>
                        {{ time }}
                    </div>
                }
                @if (event.duration > 90) {
                    <div class="flex items-center py-1">
                        <icon class="mx-2">people</icon>
                        {{ event.attendees.length }} Attendee{{
                            event.attendees.length === 1 ? '' : 's'
                        }}
                    </div>
                }
            </div>
        }
        @if (event && (ui_options | async)?.show_cleaning) {
            <div
                cleaning
                class="absolute z-20 flex w-full overflow-hidden rounded bg-base-100 p-2 shadow hover:!h-48"
                [style.top]="top * 100 + '%'"
                [style.height]="height * 100 + '%'"
            >
                <div
                    [class]="
                        'icon text-pending mr-2 flex h-12 w-12 items-center justify-center rounded text-3xl ' +
                        event.ext('cleaning_status')
                    "
                >
                    <icon>{{
                        event.ext('cleaning_status') === 'done'
                            ? 'done'
                            : 'warning'
                    }}</icon>
                </div>
                <div class="w-1/2 flex-1">
                    {{
                        event.ext('cleaning_status') === 'done'
                            ? 'Finished'
                            : 'Scheduled to'
                    }}
                    clean at
                    {{
                        event.ext('cleaning_time') || event.event_end * 1000
                            | date: time_format
                    }}
                </div>
            </div>
        }
    `, standalone: false, styles: ["/* angular:styles/component:css;1569f14833343675762f38937ae0e2e035172f6d0cbd8d2b3aabcd0ef49dcafb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/dayview-event.component.ts */\n[event] {\n  background-color: #ccc;\n  width: 12rem;\n  z-index: 100;\n  transition: box-shadow 200ms;\n}\n[event]:hover {\n  box-shadow:\n    0 1px 3px 1px rgba(0, 0, 0, 0.2),\n    0 1px 1px 0 rgba(0, 0, 0, 0.14),\n    0 2px 1px -1px rgba(0, 0, 0, 0.12) !important;\n  cursor: pointer;\n}\n.overflow-block {\n  opacity: 0.3;\n  width: 12rem;\n}\n.internal {\n  background-color: #1565c0;\n  color: #fff;\n}\n.icon {\n  background-color: #f0f0f0;\n}\n.icon.done {\n  color: #21a453;\n}\n.external {\n  background-color: #ad1457;\n  color: #fff;\n}\n.cancelled {\n  background-color: #ccc;\n}\n/*# sourceMappingURL=dayview-event.component.css.map */\n"] }]
  }], null, { event: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DayviewEventComponent, { className: "DayviewEventComponent", filePath: "apps/concierge/src/app/day-view/dayview-event.component.ts", lineNumber: 141 });
})();

// apps/concierge/src/app/day-view/dayview-space.component.ts
function DayviewSpaceComponent_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "dayview-event", 0);
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    \u0275\u0275property("event", event_r1);
  }
}
function DayviewSpaceComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DayviewSpaceComponent_Conditional_0_For_1_Template, 1, 1, "dayview-event", 0, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r1.events));
  }
}
var _DayviewSpaceComponent = class _DayviewSpaceComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(EventsStateService);
    this.events = this._state.filtered.pipe(map((bookings) => {
      return bookings.filter((bkn) => bkn.resources.find((space) => this.space.email === space.email));
    }));
  }
  ngOnInit() {
    this.subscription("events", this._state.filtered.subscribe());
  }
};
_DayviewSpaceComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DayviewSpaceComponent_BaseFactory;
  return function DayviewSpaceComponent_Factory(__ngFactoryType__) {
    return (\u0275DayviewSpaceComponent_BaseFactory || (\u0275DayviewSpaceComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DayviewSpaceComponent)))(__ngFactoryType__ || _DayviewSpaceComponent);
  };
})();
_DayviewSpaceComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DayviewSpaceComponent, selectors: [["dayview-space"]], inputs: { space: "space" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "event"]], template: function DayviewSpaceComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DayviewSpaceComponent_Conditional_0_Template, 3, 2);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.space ? 0 : -1);
  }
}, dependencies: [DayviewEventComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=dayview-space.component.css.map */"] });
var DayviewSpaceComponent = _DayviewSpaceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayviewSpaceComponent, [{
    type: Component,
    args: [{ selector: "dayview-space", template: `
        @if (space) {
            @for (event of events | async; track event) {
                <dayview-event [event]="event" />
            }
        }
    `, standalone: false, styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/dayview-space.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=dayview-space.component.css.map */\n"] }]
  }], null, { space: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DayviewSpaceComponent, { className: "DayviewSpaceComponent", filePath: "apps/concierge/src/app/day-view/dayview-space.component.ts", lineNumber: 27 });
})();

// apps/concierge/src/app/day-view/dayview-timeline.component.ts
function DayviewTimelineComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const time_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", "translateY(-" + ctx_r2.scroll.y + "px)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", time_r2, " ");
  }
}
function DayviewTimelineComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementStart(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const space_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", "translateX(-" + ctx_r2.scroll.x + "px)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", space_r4.display_name || space_r4.name, " ");
  }
}
function DayviewTimelineComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "dayview-space", 11);
  }
  if (rf & 2) {
    const space_r5 = ctx.$implicit;
    \u0275\u0275property("space", space_r5);
  }
}
function DayviewTimelineComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_12_0;
    const \u0275$index_38_r6 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ((tmp_12_0 = \u0275\u0275pipeBind1(1, 4, ctx_r2.space_list)) == null ? null : tmp_12_0.length) * 12 + "rem")("top", \u0275$index_38_r6 * 4 + "rem");
  }
}
function DayviewTimelineComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 13);
  }
}
function DayviewTimelineComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "view-event-details", 14);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("event", \u0275\u0275pipeBind1(1, 1, ctx_r2.event));
  }
}
var HOUR_BLOCKS = new Array(24).fill(0).map((_, idx) => {
  return (idx % 12 === 0 ? 12 : idx % 12) + (idx >= 12 ? " PM" : " AM");
});
var _DayviewTimelineComponent = class _DayviewTimelineComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._state = inject(EventsStateService);
    this.blocks = HOUR_BLOCKS;
    this.scroll = { x: 0, y: 0 };
    this.loading = this._state.loading;
    this.event = this._state.event;
    this.spaces = this._org.active_building.pipe(filter((_) => !!_), switchMap(({ id }) => oc({ zone_id: id, limit: 1e3 }).pipe(catchError(() => of({ data: [] })))), map(({ data }) => data.map((_) => new Space(__spreadProps(__spreadValues({}, _), {
      level: this._org.levelWithID(_.zones)
    })))), shareReplay(1));
    this.space_list = combineLatest([
      this.spaces,
      this._state.zones
    ]).pipe(map(([spaces, zones]) => spaces.filter((space) => !zones?.length || space.zones.find((z) => zones.includes(z))) || []));
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
  onScroll(e) {
    requestAnimationFrame(() => this.scroll = {
      x: e.srcElement.scrollLeft,
      y: e.srcElement.scrollTop
    });
  }
};
_DayviewTimelineComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DayviewTimelineComponent_BaseFactory;
  return function DayviewTimelineComponent_Factory(__ngFactoryType__) {
    return (\u0275DayviewTimelineComponent_BaseFactory || (\u0275DayviewTimelineComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DayviewTimelineComponent)))(__ngFactoryType__ || _DayviewTimelineComponent);
  };
})();
_DayviewTimelineComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DayviewTimelineComponent, selectors: [["dayview-timeline"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 23, vars: 10, consts: [["scroll_el", ""], [1, "absolute", "inset-0", "flex"], [1, "time", "relative", "h-full", "w-24", "overflow-hidden", "bg-base-100"], ["header", "", 1, "relative", "z-50", "h-16"], [1, "absolute", "bottom-8", "left-0", "right-0", "top-0", "bg-base-100"], ["change-transform", "", 1, "relative", "z-10", "h-16", "border-r", "border-base-300", 3, "transform"], [1, "absolute", "right-0", "top-8", "h-8", "w-px", "bg-base-300"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], ["header", "", 1, "relative", "flex", "h-16", "w-full", "overflow-hidden", "border-b", "border-base-300", "border-opacity-50", "bg-base-100"], ["change-transform", "", 1, "relative", "h-16", "w-48", "min-w-[12rem]", 3, "transform"], ["content", "", 1, "relative", "flex", "flex-1", "overflow-auto", 3, "scroll"], [1, "h-[96rem]", "w-48", "min-w-[12rem]", "border-r", "border-base-300", 3, "space"], [1, "absolute", "left-0", "h-px", "min-w-full", "bg-base-300", 3, "width", "top"], ["mode", "indeterminate", 1, "absolute", "bottom-0", "left-0", "right-0"], [3, "event"], ["change-transform", "", 1, "relative", "z-10", "h-16", "border-r", "border-base-300"], [1, "absolute", "top-0", "w-full", "-translate-y-1/2", "transform", "text-center", "text-xs", "opacity-40"], [1, "absolute", "right-0", "top-0", "h-px", "w-2", "bg-base-300"], ["change-transform", "", 1, "relative", "h-16", "w-48", "min-w-[12rem]"], ["bar", "", 1, "absolute", "-left-px", "bottom-0", "h-8", "w-px", "bg-base-300"], [1, "name", "m-2", "text-center"], [1, "absolute", "left-0", "h-px", "min-w-full", "bg-base-300"]], template: function DayviewTimelineComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, DayviewTimelineComponent_For_5_Template, 4, 3, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275element(6, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 8);
    \u0275\u0275repeaterCreate(9, DayviewTimelineComponent_For_10_Template, 4, 3, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10, 0);
    \u0275\u0275listener("scroll", function DayviewTimelineComponent_Template_div_scroll_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onScroll($event));
    });
    \u0275\u0275repeaterCreate(14, DayviewTimelineComponent_For_15_Template, 1, 1, "dayview-space", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275repeaterCreate(17, DayviewTimelineComponent_For_18_Template, 2, 6, "div", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, DayviewTimelineComponent_Conditional_19_Template, 1, 0, "mat-progress-bar", 13);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275conditionalCreate(21, DayviewTimelineComponent_Conditional_21_Template, 2, 3, "view-event-details", 14);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.blocks);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 2, ctx.space_list));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(16, 4, ctx.space_list));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.blocks);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(20, 6, ctx.loading) ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(22, 8, ctx.event) ? 21 : -1);
  }
}, dependencies: [ViewEventDetailsComponent, MatProgressBar, DayviewSpaceComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n[change-transform][_ngcontent-%COMP%] {\n  will-change: transform;\n}\n/*# sourceMappingURL=dayview-timeline.component.css.map */"] });
var DayviewTimelineComponent = _DayviewTimelineComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayviewTimelineComponent, [{
    type: Component,
    args: [{ selector: "dayview-timeline", template: `
        <div class="absolute inset-0 flex">
            <div class="time relative h-full w-24 overflow-hidden bg-base-100">
                <div header class="relative z-50 h-16">
                    <div
                        class="absolute bottom-8 left-0 right-0 top-0 bg-base-100"
                    ></div>
                </div>
                @for (time of blocks; track time) {
                    <div
                        change-transform
                        class="relative z-10 h-16 border-r border-base-300"
                        [style.transform]="'translateY(-' + scroll.y + 'px)'"
                    >
                        <div
                            class="absolute top-0 w-full -translate-y-1/2 transform text-center text-xs opacity-40"
                        >
                            {{ time }}
                        </div>
                        <div
                            class="absolute right-0 top-0 h-px w-2 bg-base-300"
                        ></div>
                    </div>
                }
                <div class="absolute right-0 top-8 h-8 w-px bg-base-300"></div>
            </div>
            <div class="flex h-full w-1/2 flex-1 flex-col">
                <div
                    header
                    class="relative flex h-16 w-full overflow-hidden border-b border-base-300 border-opacity-50 bg-base-100"
                >
                    @for (space of space_list | async; track space) {
                        <div
                            change-transform
                            class="relative h-16 w-48 min-w-[12rem]"
                            [style.transform]="
                                'translateX(-' + scroll.x + 'px)'
                            "
                        >
                            <div
                                bar
                                class="absolute -left-px bottom-0 h-8 w-px bg-base-300"
                            ></div>
                            <div class="name m-2 text-center">
                                {{ space.display_name || space.name }}
                            </div>
                        </div>
                    }
                </div>
                <div
                    #scroll_el
                    content
                    class="relative flex flex-1 overflow-auto"
                    (scroll)="onScroll($event)"
                >
                    @for (space of space_list | async; track space) {
                        <dayview-space
                            [space]="space"
                            class="h-[96rem] w-48 min-w-[12rem] border-r border-base-300"
                        ></dayview-space>
                    }
                    @for (time of blocks; track time; let i = $index) {
                        <div
                            class="absolute left-0 h-px min-w-full bg-base-300"
                            [style.width]="
                                (space_list | async)?.length * 12 + 'rem'
                            "
                            [style.top]="i * 4 + 'rem'"
                        ></div>
                    }
                </div>
            </div>
            @if (loading | async) {
                <mat-progress-bar
                    mode="indeterminate"
                    class="absolute bottom-0 left-0 right-0"
                ></mat-progress-bar>
            }
            @if (event | async) {
                <view-event-details
                    [event]="event | async"
                ></view-event-details>
            }
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;5bfac2f076fa45ac4c4881d53e16010834e55ae38bb9d3556c0c8f1a9a9fb25d;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/dayview-timeline.component.ts */\n:host {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n[change-transform] {\n  will-change: transform;\n}\n/*# sourceMappingURL=dayview-timeline.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DayviewTimelineComponent, { className: "DayviewTimelineComponent", filePath: "apps/concierge/src/app/day-view/dayview-timeline.component.ts", lineNumber: 123 });
})();

// apps/concierge/src/app/day-view/dayview-topbar.component.ts
var _c0 = () => ({ class: "material-symbols-rounded", content: "add" });
function DayviewTopbarComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    \u0275\u0275property("value", level_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r1.display_name || level_r1.name, " ");
  }
}
function DayviewTopbarComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    \u0275\u0275property("value", type_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r2.name, " ");
  }
}
function DayviewTopbarComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-slide-toggle", 12);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("ngModelChange", function DayviewTopbarComponent_Conditional_18_Template_mat_slide_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateUIOptions({ show_overflow: $event }));
    });
    \u0275\u0275elementStart(2, "div", 13);
    \u0275\u0275text(3, "Setup / Breakdown");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r3.ui_options)) == null ? null : tmp_1_0.show_overflow);
  }
}
var _DayviewTopbarComponent = class _DayviewTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(EventsStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this.zones = [];
    this.types = [
      { id: "internal", name: "Internal" },
      { id: "external", name: "External" },
      { id: "cancelled", name: "Cancelled" }
    ];
    this.type_list = this.types.map((i) => `${i.id}`);
    this.levels = this._org.active_levels;
    this.ui_options = this._state.options;
    this.setDate = (d) => this._state.setDate(d);
    this.newBooking = (d) => this._state.newBooking(d);
    this.updateZones = (z) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
    };
    this.updateTypes = (types) => this._state.setFilters({
      hide_type: this.types.reduce((list, item) => {
        !types.includes(item.id) ? list.push(item) : "";
        return list;
      }, [])
    });
  }
  updateUIOptions(options) {
    this._state.setUIOptions(options);
  }
  get allow_setup_breakdown() {
    return this._settings.get("app.events.allow_setup_breakdown");
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
        if (params.has("zone_ids")) {
          const zones = params.get("zone_ids").split(",");
          if (zones.length) {
            this.zones = zones;
            const level = this._org.levelWithID(zones);
            if (!level)
              return;
            this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          }
        }
      }));
      this.updateTypes(this.type_list);
    });
  }
};
_DayviewTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DayviewTopbarComponent_BaseFactory;
  return function DayviewTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275DayviewTopbarComponent_BaseFactory || (\u0275DayviewTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DayviewTopbarComponent)))(__ngFactoryType__ || _DayviewTopbarComponent);
  };
})();
_DayviewTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DayviewTopbarComponent, selectors: [["dayview-topbar"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 10, consts: [[1, "flex", "h-20", "items-center", "border-b", "border-base-200", "bg-base-100", "px-4"], ["btn", "", "matRipple", "", "new", "", 1, "w-12", "overflow-hidden", "xl:w-auto", 3, "click"], [1, "flex", "items-center"], [1, "mr-2", 3, "icon"], [1, "hidden", "xl:block"], ["appearance", "outline"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["multiple", "", "placeholder", "No Events", 3, "ngModelChange", "ngModel"], [1, "m-2", 3, "ngModel"], [1, "w-0", "flex-1"], [3, "dateChange"], [1, "m-2", 3, "ngModelChange", "ngModel"], [1, "text-xs"]], template: function DayviewTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function DayviewTopbarComponent_Template_button_click_1_listener() {
      return ctx.newBooking();
    });
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275element(3, "icon", 3);
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5, "New Booking");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "mat-form-field", 5)(7, "mat-select", 6);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275repeaterCreate(9, DayviewTopbarComponent_For_10_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-form-field", 5)(13, "mat-select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.type_list, $event) || (ctx.type_list = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_13_listener($event) {
      return ctx.updateTypes($event);
    });
    \u0275\u0275elementStart(14, "mat-select-trigger");
    \u0275\u0275text(15, "Legend");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, DayviewTopbarComponent_For_17_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, DayviewTopbarComponent_Conditional_18_Template, 4, 3, "mat-slide-toggle", 9);
    \u0275\u0275element(19, "div", 10);
    \u0275\u0275elementStart(20, "date-options", 11);
    \u0275\u0275listener("dateChange", function DayviewTopbarComponent_Template_date_options_dateChange_20_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.zones);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 5, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 7, ctx.levels));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.type_list);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.types);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.allow_setup_breakdown ? 18 : -1);
  }
}, dependencies: [NgControlStatus, NgModel, DateOptionsComponent, MatFormField, MatSelect, MatSelectTrigger, MatOption, MatSlideToggle, MatRipple, IconComponent, AsyncPipe, TranslatePipe], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n  margin-left: 1em;\n}\nmat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 5.5em;\n  white-space: initial;\n  line-height: 1.2em;\n}\n/*# sourceMappingURL=dayview-topbar.component.css.map */"] });
var DayviewTopbarComponent = _DayviewTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayviewTopbarComponent, [{
    type: Component,
    args: [{ selector: "dayview-topbar", template: `
        <div
            class="flex h-20 items-center border-b border-base-200 bg-base-100 px-4"
        >
            <button
                btn
                matRipple
                new
                class="w-12 overflow-hidden xl:w-auto"
                (click)="newBooking()"
            >
                <div class="flex items-center">
                    <icon
                        class="mr-2"
                        [icon]="{
                            class: 'material-symbols-rounded',
                            content: 'add',
                        }"
                    ></icon>
                    <div class="hidden xl:block">New Booking</div>
                </div>
            </button>
            <mat-form-field appearance="outline">
                <mat-select
                    multiple
                    [(ngModel)]="zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                >
                    @for (level of levels | async; track level) {
                        <mat-option [value]="level.id">
                            {{ level.display_name || level.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
                <mat-select
                    multiple
                    [(ngModel)]="type_list"
                    (ngModelChange)="updateTypes($event)"
                    placeholder="No Events"
                >
                    <mat-select-trigger>Legend</mat-select-trigger>
                    @for (type of types; track type) {
                        <mat-option [value]="type.id">
                            {{ type.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            @if (allow_setup_breakdown) {
                <mat-slide-toggle
                    class="m-2"
                    [ngModel]="(ui_options | async)?.show_overflow"
                    (ngModelChange)="updateUIOptions({ show_overflow: $event })"
                >
                    <div class="text-xs">Setup / Breakdown</div>
                </mat-slide-toggle>
            }
            <div class="w-0 flex-1"></div>
            <!-- <searchbar class="mr-2"></searchbar> -->
            <date-options (dateChange)="setDate($event)"></date-options>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;32e0d558f713ae5ab80cbd7890c2cc26db255330854defb57d1e6f3bc23dc80d;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/dayview-topbar.component.ts */\nbutton {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n  margin-left: 1em;\n}\nmat-slide-toggle div {\n  width: 5.5em;\n  white-space: initial;\n  line-height: 1.2em;\n}\n/*# sourceMappingURL=dayview-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DayviewTopbarComponent, { className: "DayviewTopbarComponent", filePath: "apps/concierge/src/app/day-view/dayview-topbar.component.ts", lineNumber: 98 });
})();

// apps/concierge/src/app/day-view/event-form.component.ts
var _c02 = () => [5, 10];
var _c1 = () => ({ standalone: true });
var _c2 = (a0, a1, a2, a3) => ({ date: a0, duration: a1, all_day: a2, zone_id: a3 });
function EventFormComponent_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.ALL_DAY"), " ");
  }
}
function EventFormComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "label", 25);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a-time-field", 26);
    \u0275\u0275listener("ngModelChange", function EventFormComponent_Conditional_0_Conditional_22_Template_a_time_field_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 11)(10, "label", 27);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "a-duration-field", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "FORM.TIME_START"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.form.get("date").value)("ngModelOptions", \u0275\u0275pureFunction0(11, _c1))("use_24hr", ctx_r1.use_24hr_time);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, "FORM.DURATION"));
    \u0275\u0275advance(5);
    \u0275\u0275property("time", ctx_r1.form.controls == null ? null : ctx_r1.form.controls.date == null ? null : ctx_r1.form.controls.date.value)("use_24hr", ctx_r1.use_24hr_time);
  }
}
function EventFormComponent_Conditional_0_Conditional_46_Conditional_4_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const code_r4 = ctx.$implicit;
    \u0275\u0275property("value", code_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", code_r4, " ");
  }
}
function EventFormComponent_Conditional_0_Conditional_46_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 33);
    \u0275\u0275listener("openedChange", function EventFormComponent_Conditional_0_Conditional_46_Conditional_4_Template_mat_form_field_openedChange_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.focusInput());
    });
    \u0275\u0275elementStart(1, "mat-select", 34)(2, "input", 35, 0);
    \u0275\u0275listener("ngModelChange", function EventFormComponent_Conditional_0_Conditional_46_Conditional_4_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.code_filter.next($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "mat-option", 36);
    \u0275\u0275repeaterCreate(5, EventFormComponent_Conditional_0_Conditional_46_Conditional_4_For_6_Template, 2, 2, "mat-option", 37, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, " Catering charge code is required ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.code_filter.getValue())("ngModelOptions", \u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(7, 2, ctx_r1.filtered_codes));
  }
}
function EventFormComponent_Conditional_0_Conditional_46_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 38);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275element(2, "textarea", 39);
    \u0275\u0275elementStart(3, "mat-error");
    \u0275\u0275text(4, " Catering Order notes are required ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("mt-2", !\u0275\u0275pipeBind1(1, 2, (ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length) && ctx_r1.has_codes));
  }
}
function EventFormComponent_Conditional_0_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 29);
    \u0275\u0275text(2, "Catering:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "catering-list-field", 30);
    \u0275\u0275conditionalCreate(4, EventFormComponent_Conditional_0_Conditional_46_Conditional_4_Template, 10, 5, "mat-form-field", 31);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275conditionalCreate(6, EventFormComponent_Conditional_0_Conditional_46_Conditional_6_Template, 5, 4, "mat-form-field", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("options", \u0275\u0275pureFunction4(5, _c2, ctx_r1.form.value.date, ctx_r1.form.value.duration, ctx_r1.form.value.all_day, ctx_r1.form.value.resources[0] == null ? null : ctx_r1.form.value.resources[0].level == null ? null : ctx_r1.form.value.resources[0].level.parent_id));
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(5, 3, (ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length) && ctx_r1.has_codes) ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length) ? 6 : -1);
  }
}
function EventFormComponent_Conditional_0_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 16);
    \u0275\u0275text(2, "Assets:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "asset-list-field", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("date", ctx_r1.form.value.date)("duration", ctx_r1.form.value.duration);
  }
}
function EventFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 1)(1, "div", 2)(2, "label", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 4);
    \u0275\u0275element(9, "input", 5);
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 6)(14, "label", 7);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "a-date-field", 8);
    \u0275\u0275conditionalCreate(21, EventFormComponent_Conditional_0_Conditional_21_Template, 3, 3, "mat-checkbox", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, EventFormComponent_Conditional_0_Conditional_22_Template, 17, 12, "div", 10);
    \u0275\u0275elementStart(23, "div", 11)(24, "label", 12);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "a-user-search-field", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 11)(32, "label", 14);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "a-user-list-field", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 11)(40, "label", 16);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "space-list-field", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(46, EventFormComponent_Conditional_0_Conditional_46_Template, 7, 10, "div", 18);
    \u0275\u0275pipe(47, "async");
    \u0275\u0275conditionalCreate(48, EventFormComponent_Conditional_0_Conditional_48_Template, 4, 2, "div", 19);
    \u0275\u0275elementStart(49, "div", 10)(50, "div", 20)(51, "label", 21);
    \u0275\u0275text(52, "Setup Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "a-duration-field", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 20)(55, "label", 23);
    \u0275\u0275text(56, "Breakdown Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "a-duration-field", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 15, "FORM.TITLE"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 17, "FORM.TITLE_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 19, "FORM.DATE"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.allow_all_day ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.form.value.all_day ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 21, "FORM.HOST"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 23, "CALENDAR_EVENT.ATTENDEES"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 25, "RESOURCE.ROOM"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(47, 27, ctx_r1.has_catering) && ctx_r1.form.contains("catering") ? 46 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.has_assets ? 48 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("min", 0)("custom_options", \u0275\u0275pureFunction0(29, _c02));
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("custom_options", \u0275\u0275pureFunction0(30, _c02));
  }
}
var _EventFormComponent = class _EventFormComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._catering = inject(CateringOrderStateService);
    this.code_filter = new BehaviorSubject("");
    this.has_catering = this._catering.available_menu.pipe(map((l) => l.length > 0));
    this.has_codes = this._catering.charge_codes.pipe(map((l) => l.length > 0), tap((has_codes) => {
      if (!has_codes) {
        this.form.get("catering_charge_code").setValidators([]);
        this.form.updateValueAndValidity();
      }
    }));
    this.filtered_codes = combineLatest([
      this.code_filter,
      this._catering.charge_codes
    ]).pipe(map(([s, l]) => l.filter((_) => _.toLowerCase().includes(s.toLowerCase()))));
  }
  get allow_all_day() {
    return !!this._settings.get("app.events.allow_all_day");
  }
  get has_assets() {
    return !!this._settings.get("app.events.has_assets");
  }
  get use_24hr_time() {
    return this._settings.get("app.use_24_hour_time");
  }
};
_EventFormComponent.\u0275fac = function EventFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventFormComponent)();
};
_EventFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventFormComponent, selectors: [["event-form"]], inputs: { form: "form" }, standalone: false, decls: 1, vars: 1, consts: [["input", ""], [3, "formGroup"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "Meeting Title"], [1, "relative", "flex", "flex-col"], ["for", "date"], ["name", "date", "formControlName", "date"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], [1, "flex", "space-x-2"], [1, "flex", "flex-1", "flex-col"], ["for", "organiser"], ["name", "organiser", "formControlName", "organiser", 1, "mb-4"], ["for", "attendees"], ["name", "attendees", "formControlName", "attendees"], ["for", "space"], ["formControlName", "resources", 1, "w-full"], [1, "py-2"], [1, "mb-4", "flex", "flex-1", "flex-col"], [1, "flex", "flex-1", "flex-col", "space-y-2"], ["for", "setup"], ["name", "setup", "formControlName", "setup_time", 3, "min", "custom_options"], ["for", "breakdown"], ["name", "breakdown", "formControlName", "breakdown_time", 3, "min", "custom_options"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr"], ["for", "duration"], ["name", "duration", "formControlName", "duration", 3, "time", "use_24hr"], ["for", "catering"], ["name", "catering", "formControlName", "catering", 3, "options"], ["appearance", "outline", 1, "mt-2", "w-full"], ["appearance", "outline", 1, "w-full", 3, "mt-2"], ["appearance", "outline", 1, "mt-2", "w-full", 3, "openedChange"], ["formControlName", "catering_charge_code", "placeholder", "Charge Code"], ["placeholder", "Search charge codes...", 1, "sticky", "top-0", "z-50", "w-full", "rounded-none", "border-x-0", "border-b", "border-t-0", "border-base-200", "bg-base-100", "px-4", "py-3", "text-base", "focus:border-b", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "hidden"], [3, "value"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "catering_notes", "placeholder", "Extra catering details..."], ["formControlName", "assets", 3, "date", "duration"]], template: function EventFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventFormComponent_Conditional_0_Template, 58, 31, "form", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.form ? 0 : -1);
  }
}, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, MatFormField, MatError, MatInput, MatSelect, MatOption, MatCheckbox, FormGroupDirective, FormControlName, DateFieldComponent, DurationFieldComponent, SpaceListFieldComponent, TimeFieldComponent, UserListFieldComponent, UserSearchFieldComponent, AssetListFieldComponent, CateringListFieldComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
var EventFormComponent = _EventFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventFormComponent, [{
    type: Component,
    args: [{ selector: "event-form", template: `
        @if (form) {
            <form [formGroup]="form">
                <div class="flex flex-col">
                    <label for="title"
                        >{{ 'FORM.TITLE' | translate }}<span>*</span>:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="title"
                            formControlName="title"
                            placeholder="Meeting Title"
                        />
                        <mat-error>{{
                            'FORM.TITLE_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="relative flex flex-col">
                    <label for="date"
                        >{{ 'FORM.DATE' | translate }}<span>*</span>:</label
                    >
                    <a-date-field
                        name="date"
                        formControlName="date"
                    ></a-date-field>
                    @if (allow_all_day) {
                        <mat-checkbox
                            formControlName="all_day"
                            class="absolute -top-2 right-0"
                        >
                            {{ 'FORM.ALL_DAY' | translate }}
                        </mat-checkbox>
                    }
                </div>
                @if (!form.value.all_day) {
                    <div class="flex space-x-2">
                        <div class="flex flex-1 flex-col">
                            <label for="start-time"
                                >{{ 'FORM.TIME_START' | translate
                                }}<span>*</span>:</label
                            >
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.get('date').value"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr_time"
                            ></a-time-field>
                        </div>
                        <div class="flex flex-1 flex-col">
                            <label for="duration"
                                >{{ 'FORM.DURATION' | translate
                                }}<span>*</span>:</label
                            >
                            <a-duration-field
                                name="duration"
                                [time]="form.controls?.date?.value"
                                formControlName="duration"
                                [use_24hr]="use_24hr_time"
                            ></a-duration-field>
                        </div>
                    </div>
                }
                <div class="flex flex-1 flex-col">
                    <label for="organiser"
                        >{{ 'FORM.HOST' | translate }}<span>*</span>:</label
                    >
                    <a-user-search-field
                        name="organiser"
                        formControlName="organiser"
                        class="mb-4"
                    ></a-user-search-field>
                </div>
                <div class="flex flex-1 flex-col">
                    <label for="attendees">
                        {{ 'CALENDAR_EVENT.ATTENDEES' | translate
                        }}<span>*</span>:</label
                    >
                    <a-user-list-field
                        name="attendees"
                        formControlName="attendees"
                    ></a-user-list-field>
                </div>
                <div class="flex flex-1 flex-col">
                    <label for="space">
                        {{ 'RESOURCE.ROOM' | translate }}<span>*</span>
                    </label>
                    <space-list-field
                        class="w-full"
                        formControlName="resources"
                    ></space-list-field>
                </div>
                @if ((has_catering | async) && form.contains('catering')) {
                    <div class="py-2">
                        <label for="catering">Catering:</label>
                        <catering-list-field
                            name="catering"
                            formControlName="catering"
                            [options]="{
                                date: form.value.date,
                                duration: form.value.duration,
                                all_day: form.value.all_day,
                                zone_id:
                                    form.value.resources[0]?.level?.parent_id,
                            }"
                        ></catering-list-field>
                        @if (form.value.catering?.length && has_codes | async) {
                            <mat-form-field
                                appearance="outline"
                                class="mt-2 w-full"
                                (openedChange)="focusInput()"
                            >
                                <mat-select
                                    formControlName="catering_charge_code"
                                    placeholder="Charge Code"
                                >
                                    <input
                                        #input
                                        class="sticky top-0 z-50 w-full rounded-none border-x-0 border-b border-t-0 border-base-200 bg-base-100 px-4 py-3 text-base focus:border-b"
                                        [ngModel]="code_filter.getValue()"
                                        (ngModelChange)="
                                            code_filter.next($event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                        placeholder="Search charge codes..."
                                    />
                                    <mat-option class="hidden"></mat-option>
                                    @for (
                                        code of filtered_codes | async;
                                        track code
                                    ) {
                                        <mat-option [value]="code">
                                            {{ code }}
                                        </mat-option>
                                    }
                                </mat-select>
                                <mat-error>
                                    Catering charge code is required
                                </mat-error>
                            </mat-form-field>
                        }
                        @if (form.value.catering?.length) {
                            <mat-form-field
                                appearance="outline"
                                class="w-full"
                                [class.mt-2]="
                                    !(
                                        form.value.catering?.length && has_codes
                                        | async
                                    )
                                "
                            >
                                <textarea
                                    matInput
                                    formControlName="catering_notes"
                                    placeholder="Extra catering details..."
                                ></textarea>
                                <mat-error>
                                    Catering Order notes are required
                                </mat-error>
                            </mat-form-field>
                        }
                    </div>
                }
                @if (has_assets) {
                    <div class="mb-4 flex flex-1 flex-col">
                        <label for="space">Assets:</label>
                        <asset-list-field
                            [date]="form.value.date"
                            [duration]="form.value.duration"
                            formControlName="assets"
                        ></asset-list-field>
                    </div>
                }
                <div class="flex space-x-2">
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="setup">Setup Duration</label>
                        <a-duration-field
                            name="setup"
                            formControlName="setup_time"
                            [min]="0"
                            [custom_options]="[5, 10]"
                        ></a-duration-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="breakdown">Breakdown Duration</label>
                        <a-duration-field
                            name="breakdown"
                            [min]="0"
                            formControlName="breakdown_time"
                            [custom_options]="[5, 10]"
                        ></a-duration-field>
                    </div>
                </div>
            </form>
        }
    `, standalone: false }]
  }], null, { form: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventFormComponent, { className: "EventFormComponent", filePath: "apps/concierge/src/app/day-view/event-form.component.ts", lineNumber: 215 });
})();

// apps/concierge/src/app/day-view/booking-modal.component.ts
function BookingModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, ctx_r0.loading));
  }
}
function BookingModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 7);
    \u0275\u0275listener("click", function BookingModalComponent_Conditional_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275text(2, " Save ");
    \u0275\u0275elementEnd()();
  }
}
var _BookingModalComponent = class _BookingModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._service = inject(EventFormService);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this.event = new EventEmitter();
    this.loading = this._service.loading$;
  }
  get form() {
    return this._service.form;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      let event = this._data.event;
      if (event?.creator !== event?.mailbox) {
        event = (yield queryEvents({
          period_start: event.event_start,
          period_end: event.event_end,
          ical_uid: event.ical_uid
        }).toPromise()).find((_) => _.ical_uid === event.ical_uid) || event;
      }
      if (event && !event.id) {
        event.all_day = this._settings.get("app.events.all_day_default") ?? event.all_day;
      }
      this._service.newForm(event);
      this.form.patchValue({
        organiser: currentUser(),
        host: currentUser().email
      });
    });
  }
  save() {
    return __async(this, null, function* () {
      if (!this.form.value.host) {
        this.form.patchValue({
          host: currentUser().email
        });
      }
      const event = yield this._service.postForm().catch((_) => {
        notifyError(_);
        throw _;
      });
      this.event.emit({ reason: "done", metadata: event });
      notifySuccess("Successfully created booking");
      this._dialog_ref.close();
    });
  }
};
_BookingModalComponent.\u0275fac = function BookingModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingModalComponent)();
};
_BookingModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingModalComponent, selectors: [["booking-modal"]], outputs: { event: "event" }, standalone: false, decls: 15, vars: 16, consts: [[1, "w-0", "flex-1"], ["icon", "", "mat-dialog-close", ""], [1, "relative", "p-4"], [3, "form"], ["loading", "", 1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], [1, "flex", "items-center", "justify-center", "border-t", "border-base-200", "p-2"], [1, "mb-4", 3, "diameter"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function BookingModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 0);
    \u0275\u0275elementStart(4, "button", 1)(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "main", 2);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275element(9, "event-form", 3);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275conditionalCreate(11, BookingModalComponent_Conditional_11_Template, 5, 4, "div", 4);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, BookingModalComponent_Conditional_13_Template, 3, 0, "footer", 5);
    \u0275\u0275pipe(14, "async");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx.form == null ? null : ctx.form.value.id) ? "Edit" : "New", " Booking");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("overflow-auto", !\u0275\u0275pipeBind1(8, 8, ctx.loading));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pointer-events-none", \u0275\u0275pipeBind1(10, 10, ctx.loading));
    \u0275\u0275property("form", ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(12, 12, ctx.loading) ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(14, 14, ctx.loading) ? 13 : -1);
  }
}, dependencies: [MatProgressSpinner, MatDialogClose, MatRipple, IconComponent, EventFormComponent, AsyncPipe], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  width: 32rem;\n  max-height: 65vh;\n  max-width: calc(100vw - 4rem);\n}\n/*# sourceMappingURL=booking-modal.component.css.map */"] });
var BookingModalComponent = _BookingModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingModalComponent, [{
    type: Component,
    args: [{ selector: "booking-modal", template: `
        <header>
            <h2>{{ form?.value.id ? 'Edit' : 'New' }} Booking</h2>
            <div class="w-0 flex-1"></div>
            <button icon mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="relative p-4" [class.overflow-auto]="!(loading | async)">
            <event-form
                [class.pointer-events-none]="loading | async"
                [form]="form"
            ></event-form>
            @if (loading | async) {
                <div
                    loading
                    class="absolute inset-0 flex flex-col items-center justify-center"
                >
                    <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                    <p>{{ loading | async }}</p>
                </div>
            }
        </main>
        @if (!(loading | async)) {
            <footer
                class="flex items-center justify-center border-t border-base-200 p-2"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    Save
                </button>
            </footer>
        }
    `, standalone: false, styles: ["/* angular:styles/component:css;7fcf6a88305ab3370390caa495501603983c1c1baa6acf3a55b6150bad31ba4a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/booking-modal.component.ts */\nmain {\n  width: 32rem;\n  max-height: 65vh;\n  max-width: calc(100vw - 4rem);\n}\n/*# sourceMappingURL=booking-modal.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingModalComponent, { className: "BookingModalComponent", filePath: "apps/concierge/src/app/day-view/booking-modal.component.ts", lineNumber: 63 });
})();

// apps/concierge/src/app/day-view/room-booking-search.component.ts
var _c03 = ["input_el"];
var _c12 = (a0, a1) => ({ count: a0, total: a1 });
function RoomBookingSearchComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 4);
    \u0275\u0275text(1, " search ");
    \u0275\u0275elementEnd();
  }
}
function RoomBookingSearchComponent_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, \u0275\u0275pipeBind1(2, 1, ctx_r1.events).length ? "APP.CONCIERGE.ROOMS_SEARCH_EMPTY" : "APP.CONCIERGE.ROOMS_EMPTY"), " ");
  }
}
function RoomBookingSearchComponent_Conditional_8_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function RoomBookingSearchComponent_Conditional_8_For_11_Template_button_click_0_listener() {
      const event_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selected.next(event_r4));
    });
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "div", 13)(3, "div", 14);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 16)(10, "div", 17)(11, "div", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 7);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 19);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 19);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "user");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const event_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.typeColor(event_r4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 11, event_r4.date, "dd"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 14, event_r4.date, "MMM"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("line-through", event_r4.state === "done");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r4.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(15, 17, event_r4.date, ctx_r1.time_format), " \u2013 ", \u0275\u0275pipeBind2(16, 20, event_r4.date_end, ctx_r1.time_format), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", event_r4.system == null ? null : event_r4.system.display_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_19_0 = \u0275\u0275pipeBind1(21, 23, event_r4.host)) == null ? null : tmp_19_0.name) || event_r4.host, " ");
  }
}
function RoomBookingSearchComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, RoomBookingSearchComponent_Conditional_8_Conditional_7_Template, 4, 5, "div", 8);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275repeaterCreate(10, RoomBookingSearchComponent_Conditional_8_For_11_Template, 22, 25, "button", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, "APP.CONCIERGE.ROOMS_SEARCH_COUNT", \u0275\u0275pureFunction2(13, _c12, (tmp_2_0 = \u0275\u0275pipeBind1(4, 2, ctx_r1.filtered)) == null ? null : tmp_2_0.length, (tmp_2_0 = \u0275\u0275pipeBind1(5, 4, ctx_r1.events)) == null ? null : tmp_2_0.length)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(8, 9, ctx_r1.filtered).length ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(12, 11, ctx_r1.filtered));
  }
}
var _RoomBookingSearchComponent = class _RoomBookingSearchComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(EventsStateService);
    this._settings = inject(SettingsService);
    this.selected = new EventEmitter();
    this.show = false;
    this.search = new BehaviorSubject("");
    this.events = this._state.filtered;
    this.types = [
      { id: "internal", name: "Internal", color: "#D81B60" },
      { id: "external", name: "External", color: "#1E88E5" },
      { id: "cancelled", name: "Cancelled", color: "#eeeeee" }
    ];
    this.filtered = combineLatest([this.search, this.events]).pipe(map(([search, event_list]) => {
      search = search.toLowerCase();
      return event_list.filter((e) => {
        return !e.is_system_event && (e.title.toLowerCase().includes(search) || e.organiser?.name.toLowerCase().includes(search) || e.host.toLowerCase().includes(search) || e.system?.display_name.toLowerCase().includes(search) || e.system?.name.toLowerCase().includes(search) || e.resources[0]?.display_name.toLowerCase()?.includes(search) || e.resources[0]?.name.toLowerCase()?.includes(search) || e.resources[0]?.email.toLowerCase()?.includes(search));
      });
    }));
    this._input_element = viewChild("input_el");
  }
  get time_format() {
    return this._settings.time_format;
  }
  typeColor(event) {
    const type = this.types.find((_) => _.id === event.type);
    return type?.color || "#EEE";
  }
  ngOnInit() {
    this.types = [
      {
        id: "internal",
        name: i18n("COMMON.TYPE_INTERNAL"),
        color: "#D81B60"
      },
      {
        id: "external",
        name: i18n("COMMON.TYPE_EXTERNAL"),
        color: "#1E88E5"
      },
      {
        id: "cancelled",
        name: i18n("COMMON.TYPE_CANCELLED"),
        color: "#eeeeee"
      }
    ];
  }
  showSearch() {
    this.show = true;
    this._input_element().nativeElement.focus();
  }
  hideSearch() {
    if (!this.show)
      return;
    this.timeout("hide", () => this.show = false);
  }
};
_RoomBookingSearchComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RoomBookingSearchComponent_BaseFactory;
  return function RoomBookingSearchComponent_Factory(__ngFactoryType__) {
    return (\u0275RoomBookingSearchComponent_BaseFactory || (\u0275RoomBookingSearchComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomBookingSearchComponent)))(__ngFactoryType__ || _RoomBookingSearchComponent);
  };
})();
_RoomBookingSearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingSearchComponent, selectors: [["room-booking-search"]], viewQuery: function RoomBookingSearchComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._input_element, _c03, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, outputs: { selected: "selected" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 10, consts: [["input_el", ""], [1, "relative"], ["icon", "", "matRipple", "", 3, "click"], [1, "absolute", "right-0", "top-1/2", "w-[20rem]", "-translate-y-1/2", "rounded-full", "border", "border-base-300", "bg-base-100", "py-3", "pl-10", "pr-4", "shadow", 3, "ngModelChange", "blur", "ngModel", "placeholder"], [1, "absolute", "right-[17.5rem]", "top-1/2", "-translate-y-1/2", "text-2xl"], [1, "absolute", "right-4", "top-full", "max-h-[65vh]", "w-[18rem]", "translate-y-2", "overflow-auto", "rounded", "border", "border-base-300", "bg-base-100", "shadow"], [1, "sticky", "top-0", "z-10", "rounded", "bg-base-100", "p-4"], [1, "text-xs", "opacity-60"], [1, "flex", "items-center", "justify-center", "p-4", "text-center", "text-sm", "opacity-30"], [1, "-mt-2", "px-2", "pb-2"], ["matRipple", "", 1, "relative", "z-0", "flex", "w-full", "items-center", "space-x-2", "rounded", "p-2", "text-left", "hover:bg-base-200"], ["matRipple", "", 1, "relative", "z-0", "flex", "w-full", "items-center", "space-x-2", "rounded", "p-2", "text-left", "hover:bg-base-200", 3, "click"], [1, "h-10", "w-1", "rounded-full"], ["date", "", 1, "leading-tight"], [1, "mx-auto", "text-2xl"], [1, "mx-auto", "-mt-1", "text-sm", "font-medium", "uppercase"], [1, "w-1/2", "flex-1"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "flex-1", "truncate", "text-sm"], [1, "truncate", "text-xs", "opacity-30"]], template: function RoomBookingSearchComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
    \u0275\u0275listener("click", function RoomBookingSearchComponent_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showSearch());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "input", 3, 0);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("ngModelChange", function RoomBookingSearchComponent_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search.next($event));
    })("blur", function RoomBookingSearchComponent_Template_input_blur_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.hideSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, RoomBookingSearchComponent_Conditional_7_Template, 2, 0, "icon", 4);
    \u0275\u0275conditionalCreate(8, RoomBookingSearchComponent_Conditional_8_Template, 13, 16, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275classProp("opacity-0", !ctx.show)("pointer-events-none", !ctx.show);
    \u0275\u0275property("ngModel", ctx.search.getValue())("placeholder", \u0275\u0275pipeBind1(6, 8, "APP.CONCIERGE.ROOMS_SEARCH"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.show ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show ? 8 : -1);
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, MatRipple, IconComponent, AsyncPipe, DatePipe, TranslatePipe, UserPipe], encapsulation: 2 });
var RoomBookingSearchComponent = _RoomBookingSearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomBookingSearchComponent, [{
    type: Component,
    args: [{ selector: "room-booking-search", template: `
        <div class="relative">
            <button icon matRipple (click)="showSearch()">
                <icon>search</icon>
            </button>
            <input
                #input_el
                [class.opacity-0]="!show"
                [class.pointer-events-none]="!show"
                class="absolute right-0 top-1/2 w-[20rem] -translate-y-1/2 rounded-full border border-base-300 bg-base-100 py-3 pl-10 pr-4 shadow"
                [ngModel]="search.getValue()"
                (ngModelChange)="search.next($event)"
                (blur)="hideSearch()"
                [placeholder]="'APP.CONCIERGE.ROOMS_SEARCH' | translate"
            />
            @if (show) {
                <icon
                    class="absolute right-[17.5rem] top-1/2 -translate-y-1/2 text-2xl"
                >
                    search
                </icon>
            }
            @if (show) {
                <div
                    class="absolute right-4 top-full max-h-[65vh] w-[18rem] translate-y-2 overflow-auto rounded border border-base-300 bg-base-100 shadow"
                >
                    <div class="sticky top-0 z-10 rounded bg-base-100 p-4">
                        <div class="text-xs opacity-60">
                            {{
                                'APP.CONCIERGE.ROOMS_SEARCH_COUNT'
                                    | translate
                                        : {
                                              count: (filtered | async)?.length,
                                              total: (events | async)?.length,
                                          }
                            }}
                        </div>
                    </div>
                    @if (!(filtered | async).length) {
                        <div
                            class="flex items-center justify-center p-4 text-center text-sm opacity-30"
                        >
                            {{
                                ((events | async).length
                                    ? 'APP.CONCIERGE.ROOMS_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.ROOMS_EMPTY'
                                ) | translate
                            }}
                        </div>
                    }
                    <div class="-mt-2 px-2 pb-2">
                        @for (event of filtered | async; track event) {
                            <button
                                matRipple
                                class="relative z-0 flex w-full items-center space-x-2 rounded p-2 text-left hover:bg-base-200"
                                (click)="selected.next(event)"
                            >
                                <div
                                    class="h-10 w-1 rounded-full"
                                    [style.background-color]="typeColor(event)"
                                ></div>
                                <div date class="leading-tight">
                                    <div class="mx-auto text-2xl">
                                        {{ event.date | date: 'dd' }}
                                    </div>
                                    <div
                                        class="mx-auto -mt-1 text-sm font-medium uppercase"
                                    >
                                        {{ event.date | date: 'MMM' }}
                                    </div>
                                </div>
                                <div class="w-1/2 flex-1">
                                    <div
                                        class="flex w-full items-center space-x-2"
                                    >
                                        <div
                                            class="flex-1 truncate text-sm"
                                            [class.line-through]="
                                                event.state === 'done'
                                            "
                                        >
                                            {{ event.title }}
                                        </div>
                                        <div class="text-xs opacity-60">
                                            {{ event.date | date: time_format }}
                                            &ndash;
                                            {{
                                                event.date_end
                                                    | date: time_format
                                            }}
                                        </div>
                                    </div>
                                    <div class="truncate text-xs opacity-30">
                                        {{ event.system?.display_name }}
                                    </div>
                                    <div class="truncate text-xs opacity-30">
                                        {{
                                            (event.host | user)?.name ||
                                                event.host
                                        }}
                                    </div>
                                </div>
                            </button>
                        }
                    </div>
                </div>
            }
        </div>
    `, standalone: false }]
  }], null, { selected: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingSearchComponent, { className: "RoomBookingSearchComponent", filePath: "apps/concierge/src/app/day-view/room-booking-search.component.ts", lineNumber: 122 });
})();

// apps/concierge/src/app/day-view/room-timeline.component.ts
var _c04 = () => [];
function RoomBookingsTimelineComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.TIMEZONE_DIFF"), " ");
  }
}
function RoomBookingsTimelineComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TODAY"), " ");
  }
}
function RoomBookingsTimelineComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const space_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", space_r1.display_name || space_r1.name, " ");
  }
}
function RoomBookingsTimelineComponent_For_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hour_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatHour(hour_r2), " ");
  }
}
function RoomBookingsTimelineComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275conditionalCreate(2, RoomBookingsTimelineComponent_For_23_Conditional_2_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_48_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r2.block_height + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_48_r4 !== 0 ? 2 : -1);
  }
}
function RoomBookingsTimelineComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", "calc(" + ctx_r2.timeToOffset(ctx_r2.now) + "% + 1px)");
  }
}
function RoomBookingsTimelineComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 26);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r2.block_height + "rem");
  }
}
function RoomBookingsTimelineComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
  if (rf & 2) {
    const \u0275$index_66_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", "calc(" + \u0275$index_66_r5 * ctx_r2.block_width + "rem - 1px)");
  }
}
function RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
}
function RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 32);
    \u0275\u0275elementStart(1, "p", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-secondary", event_r7.status !== "cancelled")("bg-error", event_r7.status === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", event_r7.status === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", event_r7.all_day ? "All Day" : \u0275\u0275pipeBind3(3, 11, event_r7.date, ctx_r2.time_format, ctx_r2.tz), " \u2013 ", event_r7.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-60", event_r7.status === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (event_r7.organiser == null ? null : event_r7.organiser.name) || event_r7.host, " ");
  }
}
function RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const event_r7 = \u0275\u0275nextContext().$implicit;
      const space_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewEvent(event_r7, space_r8.id));
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275conditionalCreate(2, RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Conditional_2_Template, 1, 0, "div", 31);
    \u0275\u0275conditionalCreate(3, RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Conditional_3_Template, 6, 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext().$implicit;
    const \u0275$index_70_r9 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", \u0275$index_70_r9 * ctx_r2.block_width + 0.25 + "rem")("top", ctx_r2.timeToOffset(event_r7.date) + "%")("height", ctx_r2.endToOffset(event_r7.duration) + "%");
    \u0275\u0275property("matTooltip", ctx_r2.eventTooltip(event_r7));
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", event_r7.state === "done")("!rounded-none", event_r7.is_system_event)("!border-secondary", event_r7.is_system_event);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r7.is_system_event ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!event_r7.is_system_event ? 3 : -1);
  }
}
function RoomBookingsTimelineComponent_For_33_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomBookingsTimelineComponent_For_33_For_1_Conditional_0_Template, 4, 15, "button", 28);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!event_r7.is_system_event || \u0275\u0275pipeBind1(1, 1, ctx_r2.ui_options).show_overflow ? 0 : -1);
  }
}
function RoomBookingsTimelineComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RoomBookingsTimelineComponent_For_33_For_1_Template, 2, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const space_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r2.events)[space_r8.id] || \u0275\u0275pureFunction0(2, _c04));
  }
}
function RoomBookingsTimelineComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r2.timeToOffset(ctx_r2.now) + "%");
  }
}
var _RoomBookingsTimelineComponent = class _RoomBookingsTimelineComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(EventsStateService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.block_width = 14;
    this.ui_options = this._state.options;
    this.spaces = this._state.spaces;
    this.date = this._state.date;
    this.is_today = this.date.pipe(map((d) => isSameDay(d, Date.now())));
    this.show_time = combineLatest([
      this.date,
      this._org.active_building
    ]).pipe(map(([d]) => {
      const today = isSameDay(d, Date.now());
      const offset = this.timezone ? getTimezoneDifferenceInHours(this.timezone) : 0;
      const start = addHours(setHours(startOfDay(Date.now()), this.block_start), -offset).valueOf();
      const end = addHours(setHours(startOfDay(Date.now()), this.block_end), -offset).valueOf();
      return today && Date.now() >= start && Date.now() <= end;
    }));
    this.events = combineLatest([
      this._state.spaces,
      this._state.filtered,
      this.date
    ]).pipe(debounceTime(300), map(([spaces, events, date]) => {
      const map2 = {};
      const offset = this.timezone ? getTimezoneDifferenceInHours(this.timezone) : 0;
      const start = addHours(setHours(startOfDay(date), this.block_start), -offset).valueOf();
      const end = addHours(setHours(startOfDay(date), this.block_end), -offset).valueOf();
      for (const space of spaces) {
        map2[space.id] = events.filter((event) => event.resources.find((item) => item.id === space.id || item.email === space.email) || event.system?.id === space.id || event.system?.email === space.email).filter((event) => event.date_end >= start && event.date <= end);
      }
      return map2;
    }), startWith({}), shareReplay(1));
    this._hour_list = Array.from({ length: 24 }, (_, i) => i);
    this.hours = [];
    this.edit = (e) => this._state.newBooking(e);
    this.setDate = (d) => this._state.setDate(d);
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this._date_pipe = new DatePipe("en");
  }
  get now() {
    return startOfMinute(Date.now()).valueOf();
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  get block_start() {
    return +this._settings.get("app.events.block_start") || 0;
  }
  get block_end() {
    return +this._settings.get("app.events.block_end") || 24;
  }
  get block_range() {
    return Math.min(24, Math.max(this.block_end - this.block_start, 1));
  }
  get block_height() {
    return +this._settings.get("app.events.block_height") || 3;
  }
  get time_format() {
    return this._settings.time_format;
  }
  formatHour(hour) {
    const date = setHours(Date.now(), hour);
    return this._settings.get("app.use_24_hour_time") ? format(date, "HH:00") : format(date, "h a");
  }
  eventTooltip(event) {
    const tooltip = `Start: ${event.all_day ? "All Day" : this._date_pipe.transform(event.date, this.time_format)}
Title:  ${event.title}
Host:  ${event.organiser?.name || event.host}`;
    return tooltip;
  }
  ngOnInit() {
    this.subscription("poll", this._state.startPolling());
    this.subscription("hour_list", this._org.active_building.subscribe(() => {
      this.hours = this._hour_list.filter((h) => h >= this.block_start && h < this.block_end);
    }));
    this.hours = this._hour_list.filter((h) => h >= this.block_start && h < this.block_end);
    const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = !this.timezone ? 0 : getTimezoneDifferenceInHours(current_tz, this.timezone);
  }
  timeToOffset(date) {
    const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = !this.timezone ? 0 : getTimezoneDifferenceInHours(this.timezone, current_tz);
    const start_time = setHours(startOfDay(this._state.getDate()), this.block_start - offset);
    const diff = differenceInMinutes(date, start_time);
    return +(Math.max(0, diff / 60) / this.block_range * 100).toFixed(2);
  }
  endToOffset(duration) {
    return +(Math.min(this.block_range, duration / 60) / this.block_range * 100).toFixed(2);
  }
  viewEvent(event, space_id, scroll_to = false) {
    if (event.is_system_event)
      return;
    const ref = this._dialog.open(EventDetailsModalComponent, {
      data: {
        event,
        edit_fn: (e) => this.edit(e),
        remove_fn: (e) => this.remove(e, space_id)
      }
    });
    ref.componentInstance.hide_edit = !this._settings.get("app.events.allow_edit");
    this.subscription("actions", ref.componentInstance.action.subscribe((action) => __async(this, null, function* () {
      if (!action.includes("breakdown"))
        return;
      const ref2 = this._dialog.open(SetupBreakdownModalComponent, {
        data: event
      });
      const data = yield ref2.afterClosed().toPromise();
      if (data)
        this._state.replace(data);
    })));
  }
  remove(item, space_id) {
    return __async(this, null, function* () {
      const time = `${format(item.date, "dd MMM yyyy " + this.time_format)}`;
      const resource_name = item.space?.display_name;
      const content = `Delete the booking for ${resource_name} at ${time}`;
      const resp = yield openConfirmModal({ title: `Delete booking`, content, icon: { content: "delete" } }, this._dialog);
      if (resp.reason !== "done")
        return;
      resp.loading("Requesting booking deletion...");
      yield declineEvent(item.id, {
        calendar: item.calendar || item.mailbox || item.host,
        system_id: space_id
      }).toPromise().catch((e) => {
        notifyError(`Unable to delete booking. ${e}`);
        resp.close();
        throw e;
      });
      notifySuccess("Successfully deleted booking.");
      this._dialog.closeAll();
    });
  }
};
_RoomBookingsTimelineComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RoomBookingsTimelineComponent_BaseFactory;
  return function RoomBookingsTimelineComponent_Factory(__ngFactoryType__) {
    return (\u0275RoomBookingsTimelineComponent_BaseFactory || (\u0275RoomBookingsTimelineComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomBookingsTimelineComponent)))(__ngFactoryType__ || _RoomBookingsTimelineComponent);
  };
})();
_RoomBookingsTimelineComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingsTimelineComponent, selectors: [["room-bookings-timeline"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 37, vars: 34, consts: [[1, "mx-2", "mt-2", "w-[calc(100%-1rem)]", "rounded-lg", "bg-info", "p-2", "text-center", "text-xs", "text-info-content"], [1, "relative", "z-20", "flex", "items-center", "justify-center", "space-x-2", "border-b", "border-base-200", "p-2"], [3, "dateChange", "date", "is_new", "hide_today"], [1, "absolute", "left-4", "top-1/2", "-translate-y-1/2", "text-sm", "text-info"], [1, "absolute", "right-8", "top-1/2", "-translate-y-1/2"], [3, "selected"], ["timeline", "", 1, "z-0", "grid", "h-1/2", "w-full", "flex-1", "overflow-auto"], ["timezone", "", 1, "sticky", "left-0", "top-0", "z-30", "flex", "items-center", "justify-center", "bg-base-100"], [1, "text-xs", "opacity-30"], [1, "absolute", "bottom-0", "right-0", "h-2", "w-px", "bg-base-300"], [1, "absolute", "bottom-0", "right-0", "h-px", "w-2", "bg-base-300"], ["space-headers", "", 1, "sticky", "top-0", "z-20", "flex", "items-center", "border-b", "border-base-300", "bg-base-100"], [1, "relative", "flex", "h-full", "w-56", "items-center", "justify-center"], ["hour-blocks", "", 1, "sticky", "left-0", "z-10", "overflow-visible", "border-r", "border-base-300", "bg-base-100"], [1, "relative", "w-full", 3, "height"], [1, "absolute", "right-0", "h-2", "w-2", "-translate-y-1/2", "translate-x-1/2", "rounded-full", "bg-secondary", 3, "top"], ["space-blocks", "", 1, "relative", "overflow-hidden"], [1, "relative", "w-full", "border-b", "border-base-200", 3, "height"], [1, "absolute", "top-0", "h-full", "w-px", "bg-base-200", 3, "left"], [1, "absolute", "inset-x-0", "h-[2px]", "bg-secondary", 3, "top"], [1, "truncate"], [1, "absolute", "-left-px", "bottom-0", "h-2", "w-px", "bg-base-300"], [1, "relative", "w-full"], [1, "absolute", "-top-px", "right-0", "h-px", "w-2", "bg-base-300"], [1, "absolute", "-top-px", "right-3", "-translate-y-1/2", "text-xs", "opacity-60"], [1, "absolute", "right-0", "h-2", "w-2", "-translate-y-1/2", "translate-x-1/2", "rounded-full", "bg-secondary"], [1, "relative", "w-full", "border-b", "border-base-200"], [1, "absolute", "top-0", "h-full", "w-px", "bg-base-200"], ["event", "", "matRipple", "", 1, "absolute", "w-52", "text-left", "hover:opacity-90", 3, "left", "top", "height", "matTooltip"], ["event", "", "matRipple", "", 1, "absolute", "w-52", "text-left", "hover:opacity-90", 3, "click", "matTooltip"], [1, "relative", "h-full", "w-full", "overflow-hidden", "rounded-lg", "border", "border-base-200", "bg-base-100", "px-3", "py-1", "text-xs", "shadow", "hover:bg-base-200"], [1, "absolute", "-inset-px", "bg-secondary", "opacity-30"], [1, "absolute", "inset-y-0", "left-0", "w-1"], [1, "absolute", "inset-x-0", "h-[2px]", "bg-secondary"]], template: function RoomBookingsTimelineComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomBookingsTimelineComponent_Conditional_0_Template, 3, 3, "div", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "date-options", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("dateChange", function RoomBookingsTimelineComponent_Template_date_options_dateChange_2_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, RoomBookingsTimelineComponent_Conditional_4_Template, 3, 3, "div", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "div", 4)(7, "room-booking-search", 5);
    \u0275\u0275listener("selected", function RoomBookingsTimelineComponent_Template_room_booking_search_selected_7_listener($event) {
      return ctx.viewEvent($event, $event.system == null ? null : $event.system.id, true);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "div", 9)(15, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275repeaterCreate(18, RoomBookingsTimelineComponent_For_19_Template, 4, 1, "div", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 13);
    \u0275\u0275repeaterCreate(22, RoomBookingsTimelineComponent_For_23_Template, 3, 3, "div", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(24, RoomBookingsTimelineComponent_Conditional_24_Template, 1, 2, "div", 15);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 16);
    \u0275\u0275repeaterCreate(27, RoomBookingsTimelineComponent_For_28_Template, 1, 2, "div", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(29, RoomBookingsTimelineComponent_For_30_Template, 1, 2, "div", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(31, "async");
    \u0275\u0275repeaterCreate(32, RoomBookingsTimelineComponent_For_33_Template, 3, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(34, "async");
    \u0275\u0275conditionalCreate(35, RoomBookingsTimelineComponent_Conditional_35_Template, 1, 2, "div", 19);
    \u0275\u0275pipe(36, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    \u0275\u0275conditional(ctx.timezone && ctx.tz ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("date", \u0275\u0275pipeBind1(3, 12, ctx.date))("is_new", true)("hide_today", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(5, 14, ctx.is_today) ? 4 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(13, 18, \u0275\u0275pipeBind1(12, 16, ctx.date), "zzzz", ctx.tz), " ");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ((tmp_6_0 = \u0275\u0275pipeBind1(17, 22, ctx.spaces)) == null ? null : tmp_6_0.length) * ctx.block_width + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(20, 24, ctx.spaces));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("height", ctx.block_range * ctx.block_height + "rem");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(25, 26, ctx.show_time) && ctx.timeToOffset(ctx.now) < 100 ? 24 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(31, 28, ctx.spaces));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(34, 30, ctx.spaces));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(36, 32, ctx.show_time) ? 35 : -1);
  }
}, dependencies: [DateOptionsComponent, MatTooltip, MatRipple, RoomBookingSearchComponent, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[timeline][_ngcontent-%COMP%] {\n  grid-template-columns: 4rem auto;\n  grid-template-rows: 3.5rem auto;\n}\n/*# sourceMappingURL=room-timeline.component.css.map */"] });
var RoomBookingsTimelineComponent = _RoomBookingsTimelineComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomBookingsTimelineComponent, [{
    type: Component,
    args: [{ selector: "room-bookings-timeline", template: `
        @if (timezone && tz) {
            <div
                class="mx-2 mt-2 w-[calc(100%-1rem)] rounded-lg bg-info p-2 text-center text-xs text-info-content"
            >
                {{ 'APP.CONCIERGE.TIMEZONE_DIFF' | translate }}
            </div>
        }
        <div
            class="relative z-20 flex items-center justify-center space-x-2 border-b border-base-200 p-2"
        >
            <date-options
                [date]="date | async"
                (dateChange)="setDate($event)"
                [is_new]="true"
                [hide_today]="true"
            ></date-options>
            @if (is_today | async) {
                <div
                    class="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-info"
                >
                    {{ 'COMMON.TODAY' | translate }}
                </div>
            }
            <div class="absolute right-8 top-1/2 -translate-y-1/2">
                <room-booking-search
                    (selected)="viewEvent($event, $event.system?.id, true)"
                ></room-booking-search>
            </div>
        </div>
        <div timeline class="z-0 grid h-1/2 w-full flex-1 overflow-auto">
            <div
                timezone
                class="sticky left-0 top-0 z-30 flex items-center justify-center bg-base-100"
            >
                <div class="text-xs opacity-30">
                    {{ date | async | date: 'zzzz' : tz }}
                </div>
                <div
                    class="absolute bottom-0 right-0 h-2 w-px bg-base-300"
                ></div>
                <div
                    class="absolute bottom-0 right-0 h-px w-2 bg-base-300"
                ></div>
            </div>
            <div
                space-headers
                class="sticky top-0 z-20 flex items-center border-b border-base-300 bg-base-100"
                [style.width]="(spaces | async)?.length * block_width + 'rem'"
            >
                @for (space of spaces | async; track space) {
                    <div
                        class="relative flex h-full w-56 items-center justify-center"
                    >
                        <div class="truncate">
                            {{ space.display_name || space.name }}
                        </div>
                        <div
                            class="absolute -left-px bottom-0 h-2 w-px bg-base-300"
                        ></div>
                    </div>
                }
            </div>
            <div
                hour-blocks
                class="sticky left-0 z-10 overflow-visible border-r border-base-300 bg-base-100"
                [style.height]="block_range * block_height + 'rem'"
            >
                @for (hour of hours; track hour; let i = $index) {
                    <div
                        class="relative w-full"
                        [style.height]="block_height + 'rem'"
                    >
                        <div
                            class="absolute -top-px right-0 h-px w-2 bg-base-300"
                        ></div>
                        @if (i !== 0) {
                            <div
                                class="absolute -top-px right-3 -translate-y-1/2 text-xs opacity-60"
                            >
                                {{ formatHour(hour) }}
                            </div>
                        }
                    </div>
                }
                @if ((show_time | async) && timeToOffset(now) < 100) {
                    <div
                        class="absolute right-0 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-secondary"
                        [style.top]="'calc(' + timeToOffset(now) + '% + 1px)'"
                    ></div>
                }
            </div>
            <div space-blocks class="relative overflow-hidden">
                @for (hour of hours; track hour; let i = $index) {
                    <div
                        class="relative w-full border-b border-base-200"
                        [style.height]="block_height + 'rem'"
                    ></div>
                }
                @for (space of spaces | async; track space; let i = $index) {
                    <div
                        class="absolute top-0 h-full w-px bg-base-200"
                        [style.left]="'calc(' + i * block_width + 'rem - 1px)'"
                    ></div>
                }

                @for (space of spaces | async; track space; let i = $index) {
                    @for (
                        event of (events | async)[space.id] || [];
                        track event
                    ) {
                        @if (
                            !event.is_system_event ||
                            (ui_options | async).show_overflow
                        ) {
                            <button
                                event
                                matRipple
                                class="absolute w-52 text-left hover:opacity-90"
                                [style.left]="i * block_width + 0.25 + 'rem'"
                                [style.top]="timeToOffset(event.date) + '%'"
                                [style.height]="
                                    endToOffset(event.duration) + '%'
                                "
                                (click)="viewEvent(event, space.id)"
                                [matTooltip]="eventTooltip(event)"
                            >
                                <div
                                    class="relative h-full w-full overflow-hidden rounded-lg border border-base-200 bg-base-100 px-3 py-1 text-xs shadow hover:bg-base-200"
                                    [class.opacity-60]="event.state === 'done'"
                                    [class.!rounded-none]="
                                        event.is_system_event
                                    "
                                    [class.!border-secondary]="
                                        event.is_system_event
                                    "
                                >
                                    @if (event.is_system_event) {
                                        <div
                                            class="absolute -inset-px bg-secondary opacity-30"
                                        ></div>
                                    }
                                    @if (!event.is_system_event) {
                                        <div
                                            class="absolute inset-y-0 left-0 w-1"
                                            [class.bg-secondary]="
                                                event.status !== 'cancelled'
                                            "
                                            [class.bg-error]="
                                                event.status === 'cancelled'
                                            "
                                        ></div>
                                        <p
                                            class="truncate"
                                            [class.opacity-60]="
                                                event.status === 'cancelled'
                                            "
                                        >
                                            {{
                                                event.all_day
                                                    ? 'All Day'
                                                    : (event.date
                                                      | date: time_format : tz)
                                            }}
                                            &ndash;
                                            {{ event.title }}
                                        </p>
                                        <p
                                            class="truncate"
                                            [class.opacity-60]="
                                                event.status === 'cancelled'
                                            "
                                        >
                                            {{
                                                event.organiser?.name ||
                                                    event.host
                                            }}
                                        </p>
                                    }
                                </div>
                            </button>
                        }
                    }
                }
                @if (show_time | async) {
                    <div
                        class="absolute inset-x-0 h-[2px] bg-secondary"
                        [style.top]="timeToOffset(now) + '%'"
                    ></div>
                }
            </div>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;2b342a13930d0056fd89d140b272ede9f36f097f9a82416d172d995bdca2d966;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/room-timeline.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[timeline] {\n  grid-template-columns: 4rem auto;\n  grid-template-rows: 3.5rem auto;\n}\n/*# sourceMappingURL=room-timeline.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingsTimelineComponent, { className: "RoomBookingsTimelineComponent", filePath: "apps/concierge/src/app/day-view/room-timeline.component.ts", lineNumber: 244 });
})();

// apps/concierge/src/app/day-view/room-approvals.component.ts
var _c05 = (a0, a1) => ({ count: a0, total: a1 });
function RoomBookingsApprovalsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 12);
    \u0275\u0275elementStart(2, "p", 13);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.ROOMS_PENDING_EMPTY"), " ");
  }
}
function RoomBookingsApprovalsComponent_For_21_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(2, 1, event_r2.date, "zzzz", ctx_r2.tz));
  }
}
function RoomBookingsApprovalsComponent_For_21_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const space_r4 = \u0275\u0275readContextLet(1);
    \u0275\u0275property("source", space_r4 == null ? null : space_r4.images[0]);
  }
}
function RoomBookingsApprovalsComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275declareLet(1);
    \u0275\u0275pipe(2, "space");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "space");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 14);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275pipe(11, "date");
    \u0275\u0275conditionalCreate(12, RoomBookingsApprovalsComponent_For_21_Conditional_12_Template, 3, 5, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15);
    \u0275\u0275conditionalCreate(14, RoomBookingsApprovalsComponent_For_21_Conditional_14_Template, 1, 1, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 17)(16, "div", 18)(17, "icon", 19);
    \u0275\u0275text(18, "place");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 20);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 17)(22, "div", 18)(23, "icon", 19);
    \u0275\u0275text(24, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 20);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 21)(28, "button", 22);
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_For_21_Template_button_click_28_listener() {
      const event_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.approve(event_r2));
    });
    \u0275\u0275elementStart(29, "div");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "icon", 23);
    \u0275\u0275text(33, "done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "button", 24);
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_For_21_Template_button_click_34_listener() {
      const event_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reject(event_r2));
    });
    \u0275\u0275elementStart(35, "div");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "icon", 25);
    \u0275\u0275text(39, "close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    const space_r5 = \u0275\u0275storeLet((event_r2.resources.length ? \u0275\u0275pipeBind1(3, 13, \u0275\u0275pipeBind1(2, 11, event_r2.resources[0] == null ? null : event_r2.resources[0].email)) : \u0275\u0275pipeBind1(5, 17, \u0275\u0275pipeBind1(4, 15, event_r2.mailbox))) || event_r2.system);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(event_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(10, 20, event_r2.date, "mediumDate", ctx_r2.tz), " ", \u0275\u0275pipeBind3(11, 24, event_r2.date, ctx_r2.time_format, ctx_r2.tz), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.tz ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(space_r5 ? 14 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (space_r5 == null ? null : space_r5.display_name) || (space_r5 == null ? null : space_r5.name) || "No Location", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (event_r2.organiser == null ? null : event_r2.organiser.name) || event_r2.host, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.status[event_r2.id] === "accept");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 28, ctx_r2.status[event_r2.id] === "accept" ? "COMMON.APPROVED" : "COMMON.APPROVE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.status[event_r2.id] === "decline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 30, ctx_r2.status[event_r2.id] === "decline" ? "COMMON.DECLINED" : "COMMON.DECLINE"), " ");
  }
}
function RoomBookingsApprovalsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 26)(2, "mat-spinner", 27);
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "APP.CONCIERGE.ROOMS_PENDING_LOADING"), " ");
  }
}
function RoomBookingsApprovalsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show = !ctx_r2.show);
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.ROOMS_PENDING_SHOW"));
  }
}
var _RoomBookingsApprovalsComponent = class _RoomBookingsApprovalsComponent {
  constructor() {
    this._state = inject(EventsStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._show = true;
    this.loading = false;
    this.status = {};
    this.search = new BehaviorSubject("");
    this.pending = this._state.pending;
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.filtered_pending = combineLatest([
      this._state.pending,
      this.search
    ]).pipe(map(([list, search]) => list.filter((event) => event.title.toLowerCase().includes(search.toLowerCase()) || event.host.toLowerCase().includes(search.toLowerCase()) || event.organiser?.name.toLowerCase().includes(search.toLowerCase()))));
  }
  get time_format() {
    return this._settings.time_format;
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  set show(value) {
    this._show = value;
    sessionStorage.setItem("PlaceOS.Concierge.show_room_approvals", `${value}`);
  }
  get show() {
    return this._show;
  }
  ngOnInit() {
    this._show = sessionStorage.getItem("PlaceOS.Concierge.show_room_approvals") !== "false";
  }
  approve(event) {
    return __async(this, null, function* () {
      const mod = this._org.module("approvals", "RoomBookingApproval");
      if (!mod)
        return;
      this.loading = true;
      yield mod.execute("accept_event", [event.mailbox, event.id]).catch();
      this.loading = false;
      this.status[event.id] = "accept";
    });
  }
  reject(event) {
    return __async(this, null, function* () {
      const mod = this._org.module("approvals", "RoomBookingApproval");
      if (!mod)
        return;
      this.loading = true;
      yield mod.execute("decline_event", [event.mailbox, event.id]).catch();
      this.loading = false;
      this.status[event.id] = "decline";
    });
  }
};
_RoomBookingsApprovalsComponent.\u0275fac = function RoomBookingsApprovalsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomBookingsApprovalsComponent)();
};
_RoomBookingsApprovalsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingsApprovalsComponent, selectors: [["room-bookings-approvals"]], standalone: false, decls: 25, vars: 29, consts: [[1, "flex", "h-full", "w-[20rem]", "flex-col", "overflow-hidden", "border-l", "border-base-200"], [1, "relative", "flex", "items-center", "justify-center", "space-x-2", "border-b", "border-base-200", "p-2"], ["btn", "", "icon", "", "matRipple", "", "matTooltipPosition", "left", 1, "absolute", "left-2", "top-3", "bg-base-200", 3, "click", "matTooltip"], [1, "flex-1", "py-3", "text-center"], [1, "relative", "-mt-px", "border-b", "border-base-200"], ["type", "text", 1, "w-full", "py-4", "pl-10", "pr-4", 3, "ngModelChange", "placeholder", "ngModel"], [1, "pointer-events-none", "absolute", "left-2", "top-1/2", "-translate-y-1/2", "text-2xl"], [1, "flex-1", "space-y-2", "overflow-auto", "p-3"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "relative", "w-full", "rounded", "border", "border-base-300", "p-2"], [1, "absolute", "bottom-0", "left-0", "right-0", "top-14", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-2"], ["btn", "", "icon", "", "matRipple", "", "matTooltipPosition", "left", 1, "absolute", "-left-8", "top-3", "bg-warning", "text-warning-content", "shadow", 3, "matTooltip"], ["src", "assets/icons/no-pending.svg"], [1, "opacity-30"], [1, "mb-2", "text-xs", "opacity-30"], [1, "mb-2", "h-32", "w-64", "overflow-hidden", "bg-base-200"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", 3, "source"], [1, "mb-2", "flex", "items-center", "space-x-2"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "bg-base-200"], [1, "text-xl"], [1, "flex-1", "text-xs"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "flex", "flex-1", "items-center", "space-x-2", "border-success", "bg-success-light", "text-black", 3, "click", "disabled"], [1, "text-success"], ["btn", "", "matRipple", "", 1, "flex", "flex-1", "items-center", "space-x-2", "border-error", "bg-error-light", "text-black", 3, "click", "disabled"], [1, "text-error"], [1, "absolute", "inset-0", "z-0", "bg-base-100", "opacity-80"], ["diameter", "32"], [1, "relative", "z-10"], ["btn", "", "icon", "", "matRipple", "", "matTooltipPosition", "left", 1, "absolute", "-left-8", "top-3", "bg-warning", "text-warning-content", "shadow", 3, "click", "matTooltip"]], template: function RoomBookingsApprovalsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_Template_button_click_2_listener() {
      return ctx.show = !ctx.show;
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 3);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "async");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 4)(12, "input", 5);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275pipe(14, "async");
    \u0275\u0275listener("ngModelChange", function RoomBookingsApprovalsComponent_Template_input_ngModelChange_12_listener($event) {
      return ctx.search.next($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "icon", 6);
    \u0275\u0275text(16, " search ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 7);
    \u0275\u0275conditionalCreate(18, RoomBookingsApprovalsComponent_Conditional_18_Template, 5, 3, "div", 8);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275repeaterCreate(20, RoomBookingsApprovalsComponent_For_21_Template, 40, 32, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, RoomBookingsApprovalsComponent_Conditional_23_Template, 6, 3, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, RoomBookingsApprovalsComponent_Conditional_24_Template, 4, 3, "button", 11);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    \u0275\u0275styleProp("width", ctx.show ? "" : "0px");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 9, "APP.CONCIERGE.ROOMS_PENDING_HIDE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 15, "APP.CONCIERGE.ROOMS_PENDING_HEADER", \u0275\u0275pureFunction2(26, _c05, ((tmp_2_0 = \u0275\u0275pipeBind1(8, 11, ctx.filtered_pending)) == null ? null : tmp_2_0.length) || "0", ((tmp_2_0 = \u0275\u0275pipeBind1(9, 13, ctx.pending)) == null ? null : tmp_2_0.length) || "0")), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 18, "COMMON.SEARCH"))("ngModel", \u0275\u0275pipeBind1(14, 20, ctx.search));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!((tmp_5_0 = \u0275\u0275pipeBind1(19, 22, ctx.filtered_pending)) == null ? null : tmp_5_0.length) ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(22, 24, ctx.filtered_pending));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.loading ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.show ? 24 : -1);
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, MatTooltip, MatProgressSpinner, MatRipple, IconComponent, AuthenticatedImageDirective, AsyncPipe, DatePipe, TranslatePipe, SpacePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n/*# sourceMappingURL=room-approvals.component.css.map */"] });
var RoomBookingsApprovalsComponent = _RoomBookingsApprovalsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomBookingsApprovalsComponent, [{
    type: Component,
    args: [{ selector: "room-bookings-approvals", template: `
        <div
            class="flex h-full w-[20rem] flex-col overflow-hidden border-l border-base-200"
            [style.width]="show ? '' : '0px'"
        >
            <div
                class="relative flex items-center justify-center space-x-2 border-b border-base-200 p-2"
            >
                <button
                    btn
                    icon
                    matRipple
                    class="absolute left-2 top-3 bg-base-200"
                    [matTooltip]="
                        'APP.CONCIERGE.ROOMS_PENDING_HIDE' | translate
                    "
                    matTooltipPosition="left"
                    (click)="show = !show"
                >
                    <icon>chevron_right</icon>
                </button>
                <h3 class="flex-1 py-3 text-center">
                    {{
                        'APP.CONCIERGE.ROOMS_PENDING_HEADER'
                            | translate
                                : {
                                      count:
                                          (filtered_pending | async)?.length ||
                                          '0',
                                      total: (pending | async)?.length || '0',
                                  }
                    }}
                </h3>
            </div>
            <div class="relative -mt-px border-b border-base-200">
                <input
                    type="text"
                    [placeholder]="'COMMON.SEARCH' | translate"
                    class="w-full py-4 pl-10 pr-4"
                    [ngModel]="search | async"
                    (ngModelChange)="search.next($event)"
                />
                <icon
                    class="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-2xl"
                >
                    search
                </icon>
            </div>
            <div class="flex-1 space-y-2 overflow-auto p-3">
                @if (!(filtered_pending | async)?.length) {
                    <div
                        class="flex h-full w-full flex-col items-center justify-center space-y-2"
                    >
                        <img src="assets/icons/no-pending.svg" />
                        <p class="opacity-30">
                            {{
                                'APP.CONCIERGE.ROOMS_PENDING_EMPTY' | translate
                            }}
                        </p>
                    </div>
                }
                @for (event of filtered_pending | async; track event) {
                    <div
                        class="relative w-full rounded border border-base-300 p-2"
                    >
                        @let space =
                            (event.resources.length
                                ? (event.resources[0]?.email | space | async)
                                : (event.mailbox | space | async)) ||
                            event.system;
                        <h3>{{ event.title }}</h3>
                        <p class="mb-2 text-xs opacity-30">
                            {{ event.date | date: 'mediumDate' : tz }}
                            {{ event.date | date: time_format : tz }}
                            @if (tz) {
                                <span>{{
                                    event.date | date: 'zzzz' : tz
                                }}</span>
                            }
                        </p>
                        <div class="mb-2 h-32 w-64 overflow-hidden bg-base-200">
                            @if (space) {
                                <img
                                    auth
                                    class="min-h-full min-w-full object-cover"
                                    [source]="space?.images[0]"
                                />
                            }
                        </div>
                        <div class="mb-2 flex items-center space-x-2">
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                            >
                                <icon class="text-xl">place</icon>
                            </div>
                            <div class="flex-1 text-xs">
                                {{
                                    space?.display_name ||
                                        space?.name ||
                                        'No Location'
                                }}
                            </div>
                        </div>
                        <div class="mb-2 flex items-center space-x-2">
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                            >
                                <icon class="text-xl">person</icon>
                            </div>
                            <div class="flex-1 text-xs">
                                {{ event.organiser?.name || event.host }}
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <button
                                btn
                                matRipple
                                class="flex flex-1 items-center space-x-2 border-success bg-success-light text-black"
                                [disabled]="status[event.id] === 'accept'"
                                (click)="approve(event)"
                            >
                                <div>
                                    {{
                                        (status[event.id] === 'accept'
                                            ? 'COMMON.APPROVED'
                                            : 'COMMON.APPROVE'
                                        ) | translate
                                    }}
                                </div>
                                <icon class="text-success">done</icon>
                            </button>
                            <button
                                btn
                                matRipple
                                class="flex flex-1 items-center space-x-2 border-error bg-error-light text-black"
                                [disabled]="status[event.id] === 'decline'"
                                (click)="reject(event)"
                            >
                                <div>
                                    {{
                                        (status[event.id] === 'decline'
                                            ? 'COMMON.DECLINED'
                                            : 'COMMON.DECLINE'
                                        ) | translate
                                    }}
                                </div>
                                <icon class="text-error">close</icon>
                            </button>
                        </div>
                    </div>
                }
            </div>
            @if (loading) {
                <div
                    class="absolute bottom-0 left-0 right-0 top-14 flex flex-col items-center justify-center space-y-2 p-2"
                >
                    <div
                        class="absolute inset-0 z-0 bg-base-100 opacity-80"
                    ></div>
                    <mat-spinner diameter="32"></mat-spinner>
                    <p class="relative z-10">
                        {{ 'APP.CONCIERGE.ROOMS_PENDING_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
        @if (!show) {
            <button
                btn
                icon
                matRipple
                class="absolute -left-8 top-3 bg-warning text-warning-content shadow"
                (click)="show = !show"
                [matTooltip]="'APP.CONCIERGE.ROOMS_PENDING_SHOW' | translate"
                matTooltipPosition="left"
            >
                <icon>chevron_left</icon>
            </button>
        }
    `, standalone: false, styles: ["/* angular:styles/component:css;5e50b7209e2af39a3705caff73713505f998945b6103484863b7ebc0a5eb9d61;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/room-approvals.component.ts */\n:host {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n/*# sourceMappingURL=room-approvals.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingsApprovalsComponent, { className: "RoomBookingsApprovalsComponent", filePath: "apps/concierge/src/app/day-view/room-approvals.component.ts", lineNumber: 203 });
})();

// apps/concierge/src/app/day-view/room-week-timeline.component.ts
var _c06 = () => [];
function RoomWeekBookingsTimelineComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.TIMEZONE_DIFF"), " ");
  }
}
function RoomWeekBookingsTimelineComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.WEEK_THIS"), " ");
  }
}
function RoomWeekBookingsTimelineComponent_For_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TODAY"), " ");
  }
}
function RoomWeekBookingsTimelineComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, RoomWeekBookingsTimelineComponent_For_19_Conditional_4_Template, 3, 3, "div", 17);
    \u0275\u0275element(5, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(3, 2, date_r1, "EEE, MMM d", ctx_r1.tz), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isToday(date_r1) ? 4 : -1);
  }
}
function RoomWeekBookingsTimelineComponent_For_27_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(2, 1, event_r4.date_end, "zzzz", ctx_r1.tz));
  }
}
function RoomWeekBookingsTimelineComponent_For_27_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function RoomWeekBookingsTimelineComponent_For_27_For_2_Template_button_click_0_listener() {
      const event_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewEvent(event_r4));
    });
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementStart(2, "div", 22)(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275conditionalCreate(9, RoomWeekBookingsTimelineComponent_For_27_For_2_Conditional_9_Template, 3, 5, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 25);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 25);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "user");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_27_0;
    const event_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.typeColor(event_r4.type));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("line-through", event_r4.state === "done");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r4.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(7, 10, event_r4.date, ctx_r1.time_format, ctx_r1.tz), " \u2013 ", \u0275\u0275pipeBind3(8, 14, event_r4.date_end, ctx_r1.time_format, ctx_r1.tz), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.tz ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r4.system == null ? null : event_r4.system.display_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_27_0 = \u0275\u0275pipeBind1(14, 18, event_r4.host)) == null ? null : tmp_27_0.name) || event_r4.host, " ");
  }
}
function RoomWeekBookingsTimelineComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, RoomWeekBookingsTimelineComponent_For_27_For_2_Template, 15, 20, "button", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r1.events)[date_r5] || \u0275\u0275pureFunction0(2, _c06));
  }
}
var _RoomWeekBookingsTimelineComponent = class _RoomWeekBookingsTimelineComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(EventsStateService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.hours = Array.from({ length: 24 }, (_, i) => i);
    this.ui_options = this._state.options;
    this.date = this._state.date;
    this.remove = this._state.removeBooking;
    this.types = [
      { id: "internal", name: "Internal", color: "#D81B60" },
      { id: "external", name: "External", color: "#1E88E5" },
      { id: "cancelled", name: "Cancelled", color: "#eeeeee" }
    ];
    this.days = combineLatest([
      this.date,
      this._org.active_building
    ]).pipe(map(([d]) => new Array(7).fill(0).map((_, idx) => addDays(setHours(startOfWeek(d, { weekStartsOn: this._week_start }), 12 - Math.floor(this.timezone_offset / 60)), idx).valueOf())));
    this.this_week = this.date.pipe(map((d) => isSameWeek(d, Date.now())));
    this._data_pipe = new DatePipe("en");
    this.events = combineLatest([
      this.days,
      this._state.filtered,
      this._state.zones
    ]).pipe(map(([day_list, events, zones]) => {
      if (zones.length) {
        events = events.filter((_) => _.system?.zones.find((_2) => zones.includes(_2)));
      }
      const map2 = {};
      for (const date of day_list) {
        const date_value = this._data_pipe.transform(date, "yyyy-MM-dd", this.tz);
        map2[date] = events.filter((event) => {
          const event_date_value = this._data_pipe.transform(event.date, "yyyy-MM-dd", this.tz);
          return date_value === event_date_value && !event.is_system_event;
        });
      }
      return map2;
    }), startWith({}), shareReplay(1));
    this.event_max_count = this.events.pipe(map((e) => {
      let length = 0;
      for (const date in e) {
        if (e[date].length > length)
          length = e[date].length;
      }
      return length;
    }));
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.edit = (e) => this._state.newBooking(e);
    this.setDate = (d) => this._state.setDate(d);
  }
  get _week_start() {
    return this._settings.get("app.week_start");
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  get timezone_offset() {
    return getTimezoneOffsetInMinutes(this.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone);
  }
  get now() {
    return startOfMinute(Date.now()).valueOf();
  }
  isToday(date) {
    return isSameDay(date, Date.now());
  }
  get time_format() {
    return this._settings.time_format;
  }
  ngOnInit() {
    this.subscription("poll", this._state.poll());
    this.types = [
      {
        id: "internal",
        name: i18n("COMMON.TYPE_INTERNAL"),
        color: "#D81B60"
      },
      {
        id: "external",
        name: i18n("COMMON.TYPE_EXTERNAL"),
        color: "#1E88E5"
      },
      {
        id: "cancelled",
        name: i18n("COMMON.TYPE_CANCELLED"),
        color: "#eeeeee"
      }
    ];
  }
  typeColor(type) {
    return this.types.find((_) => _.id === type)?.color || "#EEE";
  }
  viewEvent(event, space_id, scroll_to = false) {
    if (event.is_system_event)
      return;
    const ref = this._dialog.open(EventDetailsModalComponent, {
      data: {
        event,
        edit_fn: (e) => this.edit(e),
        remove_fn: (e) => this.remove(e)
      }
    });
    ref.componentInstance.hide_edit = !this._settings.get("app.events.allow_edit");
    this.subscription("actions", ref.componentInstance.action.subscribe((action) => __async(this, null, function* () {
      if (!action.includes("breakdown"))
        return;
      const ref2 = this._dialog.open(SetupBreakdownModalComponent, {
        data: event
      });
      const data = yield ref2.afterClosed().toPromise();
      if (data)
        this._state.replace(data);
    })));
  }
};
_RoomWeekBookingsTimelineComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RoomWeekBookingsTimelineComponent_BaseFactory;
  return function RoomWeekBookingsTimelineComponent_Factory(__ngFactoryType__) {
    return (\u0275RoomWeekBookingsTimelineComponent_BaseFactory || (\u0275RoomWeekBookingsTimelineComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomWeekBookingsTimelineComponent)))(__ngFactoryType__ || _RoomWeekBookingsTimelineComponent);
  };
})();
_RoomWeekBookingsTimelineComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomWeekBookingsTimelineComponent, selectors: [["room-week-bookings-timeline"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 29, vars: 35, consts: [[1, "mx-2", "mt-2", "w-[calc(100%-1rem)]", "rounded-lg", "bg-info", "p-2", "text-center", "text-xs", "text-info-content"], [1, "relative", "z-20", "flex", "items-center", "justify-center", "space-x-2", "border-b", "border-base-200", "p-2"], [3, "dateChange", "date", "step", "is_new", "hide_today"], [1, "absolute", "left-4", "top-1/2", "-translate-y-1/2", "text-sm", "text-info"], [1, "absolute", "right-8", "top-1/2", "-translate-y-1/2"], [3, "selected"], ["timeline", "", 1, "z-0", "grid", "h-1/2", "w-full", "flex-1", "overflow-auto"], ["timezone", "", 1, "sticky", "left-0", "top-0", "z-30", "flex", "items-center", "justify-center", "bg-base-100"], [1, "text-xs", "opacity-30"], [1, "absolute", "bottom-0", "right-0", "h-2", "w-px", "bg-base-300"], [1, "absolute", "bottom-0", "right-0", "h-px", "w-2", "bg-base-300"], ["day-headers", "", 1, "sticky", "top-0", "z-20", "flex", "min-w-[calc(100%-3rem)]", "items-center", "border-b", "border-base-300", "bg-base-100"], [1, "relative", "flex", "h-full", "min-w-48", "flex-1", "flex-col", "items-center", "justify-center", "leading-tight"], ["empty-block", "", 1, "sticky", "left-0", "z-10", "min-h-full", "border-r", "border-base-300", "bg-base-100"], ["date-blocks", "", 1, "relative", "flex", "min-w-[calc(100%-3rem)]", "overflow-hidden"], [1, "min-w-48", "flex-1", "overflow-hidden", "border-r", "border-base-200", "p-2"], [1, "truncate"], [1, "absolute", "bottom-1", "left-1/2", "-translate-x-1/2", "text-xs", "text-info"], [1, "absolute", "-left-px", "bottom-0", "h-2", "w-px", "bg-base-300"], ["matRipple", "", 1, "flex", "w-full", "space-x-2", "rounded", "p-2", "text-left", "hover:bg-base-200"], ["matRipple", "", 1, "flex", "w-full", "space-x-2", "rounded", "p-2", "text-left", "hover:bg-base-200", 3, "click"], [1, "my-1.5", "h-2", "w-2", "rounded-full"], [1, "w-1/2", "flex-1"], [1, "truncate", "text-sm"], [1, "flex-1", "text-xs", "opacity-60"], [1, "truncate", "text-xs", "opacity-30"]], template: function RoomWeekBookingsTimelineComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomWeekBookingsTimelineComponent_Conditional_0_Template, 3, 3, "div", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "date-options", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("dateChange", function RoomWeekBookingsTimelineComponent_Template_date_options_dateChange_2_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, RoomWeekBookingsTimelineComponent_Conditional_4_Template, 3, 3, "div", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "div", 4)(7, "room-booking-search", 5);
    \u0275\u0275listener("selected", function RoomWeekBookingsTimelineComponent_Template_room_booking_search_selected_7_listener($event) {
      return ctx.viewEvent($event, $event.system == null ? null : $event.system.id, true);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "div", 9)(15, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275repeaterCreate(18, RoomWeekBookingsTimelineComponent_For_19_Template, 6, 6, "div", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "div", 13);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementStart(24, "div", 14);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275repeaterCreate(26, RoomWeekBookingsTimelineComponent_For_27_Template, 4, 3, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(28, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_10_0;
    \u0275\u0275conditional(ctx.timezone && ctx.tz ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("date", \u0275\u0275pipeBind1(3, 13, ctx.date))("step", 7)("is_new", true)("hide_today", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(5, 15, ctx.this_week) ? 4 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(13, 19, \u0275\u0275pipeBind1(12, 17, ctx.date), "zzzz", ctx.tz), " ");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ((tmp_7_0 = \u0275\u0275pipeBind1(17, 23, ctx.days)) == null ? null : tmp_7_0.length) * 12 + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(20, 25, ctx.days));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("height", \u0275\u0275pipeBind1(22, 27, ctx.event_max_count) ? \u0275\u0275pipeBind1(23, 29, ctx.event_max_count) * 5.375 + "rem" : "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ((tmp_10_0 = \u0275\u0275pipeBind1(25, 31, ctx.days)) == null ? null : tmp_10_0.length) * 12 + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(28, 33, ctx.days));
  }
}, dependencies: [DateOptionsComponent, MatRipple, RoomBookingSearchComponent, AsyncPipe, DatePipe, TranslatePipe, UserPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[timeline][_ngcontent-%COMP%] {\n  grid-template-columns: 4rem auto;\n  grid-template-rows: 3.5rem auto;\n}\n/*# sourceMappingURL=room-week-timeline.component.css.map */"] });
var RoomWeekBookingsTimelineComponent = _RoomWeekBookingsTimelineComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomWeekBookingsTimelineComponent, [{
    type: Component,
    args: [{ selector: "room-week-bookings-timeline", template: `
        @if (timezone && tz) {
            <div
                class="mx-2 mt-2 w-[calc(100%-1rem)] rounded-lg bg-info p-2 text-center text-xs text-info-content"
            >
                {{ 'APP.CONCIERGE.TIMEZONE_DIFF' | translate }}
            </div>
        }
        <div
            class="relative z-20 flex items-center justify-center space-x-2 border-b border-base-200 p-2"
        >
            <date-options
                [date]="date | async"
                [step]="7"
                (dateChange)="setDate($event)"
                [is_new]="true"
                [hide_today]="true"
            ></date-options>
            @if (this_week | async) {
                <div
                    class="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-info"
                >
                    {{ 'COMMON.WEEK_THIS' | translate }}
                </div>
            }
            <div class="absolute right-8 top-1/2 -translate-y-1/2">
                <room-booking-search
                    (selected)="viewEvent($event, $event.system?.id, true)"
                ></room-booking-search>
            </div>
        </div>
        <div timeline class="z-0 grid h-1/2 w-full flex-1 overflow-auto">
            <div
                timezone
                class="sticky left-0 top-0 z-30 flex items-center justify-center bg-base-100"
            >
                <div class="text-xs opacity-30">
                    {{ date | async | date: 'zzzz' : tz }}
                </div>
                <div
                    class="absolute bottom-0 right-0 h-2 w-px bg-base-300"
                ></div>
                <div
                    class="absolute bottom-0 right-0 h-px w-2 bg-base-300"
                ></div>
            </div>
            <div
                day-headers
                class="sticky top-0 z-20 flex min-w-[calc(100%-3rem)] items-center border-b border-base-300 bg-base-100"
                [style.width]="(days | async)?.length * 12 + 'rem'"
            >
                @for (date of days | async; track date) {
                    <div
                        class="relative flex h-full min-w-48 flex-1 flex-col items-center justify-center leading-tight"
                    >
                        <div class="truncate">
                            {{ date | date: 'EEE, MMM d' : tz }}
                        </div>
                        @if (isToday(date)) {
                            <div
                                class="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs text-info"
                            >
                                {{ 'COMMON.TODAY' | translate }}
                            </div>
                        }
                        <div
                            class="absolute -left-px bottom-0 h-2 w-px bg-base-300"
                        ></div>
                    </div>
                }
            </div>
            <div
                empty-block
                class="sticky left-0 z-10 min-h-full border-r border-base-300 bg-base-100"
                [style.height]="
                    (event_max_count | async)
                        ? (event_max_count | async) * 5.375 + 'rem'
                        : ''
                "
            ></div>
            <div
                date-blocks
                class="relative flex min-w-[calc(100%-3rem)] overflow-hidden"
                [style.width]="(days | async)?.length * 12 + 'rem'"
            >
                @for (date of days | async; track date; let i = $index) {
                    <div
                        class="min-w-48 flex-1 overflow-hidden border-r border-base-200 p-2"
                    >
                        @for (
                            event of (events | async)[date] || [];
                            track event
                        ) {
                            <button
                                matRipple
                                class="flex w-full space-x-2 rounded p-2 text-left hover:bg-base-200"
                                (click)="viewEvent(event)"
                            >
                                <div
                                    class="my-1.5 h-2 w-2 rounded-full"
                                    [style.background-color]="
                                        typeColor(event.type)
                                    "
                                ></div>
                                <div class="w-1/2 flex-1">
                                    <div
                                        class="truncate text-sm"
                                        [class.line-through]="
                                            event.state === 'done'
                                        "
                                    >
                                        {{ event.title }}
                                    </div>
                                    <div class="flex-1 text-xs opacity-60">
                                        {{
                                            event.date | date: time_format : tz
                                        }}
                                        &ndash;
                                        {{
                                            event.date_end
                                                | date: time_format : tz
                                        }}
                                        @if (tz) {
                                            <span>{{
                                                event.date_end
                                                    | date: 'zzzz' : tz
                                            }}</span>
                                        }
                                    </div>
                                    <div class="truncate text-xs opacity-30">
                                        {{ event.system?.display_name }}
                                    </div>
                                    <div class="truncate text-xs opacity-30">
                                        {{
                                            (event.host | user)?.name ||
                                                event.host
                                        }}
                                    </div>
                                </div>
                            </button>
                        }
                    </div>
                }
            </div>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;2b342a13930d0056fd89d140b272ede9f36f097f9a82416d172d995bdca2d966;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/room-week-timeline.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[timeline] {\n  grid-template-columns: 4rem auto;\n  grid-template-rows: 3.5rem auto;\n}\n/*# sourceMappingURL=room-week-timeline.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomWeekBookingsTimelineComponent, { className: "RoomWeekBookingsTimelineComponent", filePath: "apps/concierge/src/app/day-view/room-week-timeline.component.ts", lineNumber: 193 });
})();

// apps/concierge/src/app/day-view/room-bookings.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function RoomBookingsComponent_For_27_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const level_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, level_r2.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function RoomBookingsComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15)(1, "div", 27);
    \u0275\u0275conditionalCreate(2, RoomBookingsComponent_For_27_Conditional_2_Template, 5, 3, "div", 28);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r2.display_name || level_r2.name, " ");
  }
}
function RoomBookingsComponent_Conditional_29_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
}
function RoomBookingsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, RoomBookingsComponent_Conditional_29_Conditional_0_Template, 1, 0, "div", 16);
    \u0275\u0275elementStart(1, "mat-slide-toggle", 30);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function RoomBookingsComponent_Conditional_29_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateUIOptions({ show_overflow: $event }));
    });
    \u0275\u0275elementStart(3, "div", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.use_region ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.ui_options)) == null ? null : tmp_3_0.show_overflow);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "APP.CONCIERGE.SETUP_BREAKDOWN"), " ");
  }
}
function RoomBookingsComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 6);
    \u0275\u0275listener("ngModelChange", function RoomBookingsComponent_For_42_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const type_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(type_r6.id, !$event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", !ctx_r2.type_list.includes(type_r6.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r6.name, " ");
  }
}
function RoomBookingsComponent_For_45_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275elementStart(2, "div", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function RoomBookingsComponent_For_45_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const type_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(type_r8.id, true));
    });
    \u0275\u0275elementStart(5, "icon", 36);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const type_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", type_r8.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", type_r8.name, " ");
  }
}
function RoomBookingsComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomBookingsComponent_For_45_Conditional_0_Template, 7, 3, "div", 32);
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.type_list.includes(type_r8.id) ? 0 : -1);
  }
}
function RoomBookingsComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-bookings-timeline", 25);
  }
}
function RoomBookingsComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-week-bookings-timeline", 25);
  }
}
function RoomBookingsComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-bookings-approvals", 26);
  }
}
var EMPTY = [];
var _RoomBookingsComponent = class _RoomBookingsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._state = inject(EventsStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._settings = inject(SettingsService);
    this.zones = this._state.zones;
    this.period = this._state.period;
    this.ui_options = this._state.options;
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.updateZones = (z) => {
      console.warn("Update Zones:", z);
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setZones(z);
    };
    this.updateUIOptions = (o) => this._state.setUIOptions(o);
    this.setPeriod = (p) => {
      console.warn("Set Period:", p);
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { period: p },
        queryParamsHandling: "merge"
      });
      this._state.setPeriod(p);
    };
    this.newBooking = (d) => this._state.newBooking(d);
    this.types = [
      { id: "internal", name: "Internal", color: "#D81B60" },
      { id: "external", name: "External", color: "#1E88E5" },
      { id: "cancelled", name: "Cancelled", color: "#eeeeee" }
    ];
  }
  get type_list() {
    return this._state.filters.hide_type || EMPTY;
  }
  get has_approvals() {
    return this._org.binding("approvals");
  }
  get allow_setup_breakdown() {
    return this._settings.get("app.events.allow_setup_breakdown");
  }
  get use_region() {
    return this._settings.get("app.use_region");
  }
  ngOnInit() {
    this.types = [
      {
        id: "internal",
        name: i18n("COMMON.TYPE_INTERNAL"),
        color: "#D81B60"
      },
      {
        id: "external",
        name: i18n("COMMON.TYPE_EXTERNAL"),
        color: "#1E88E5"
      },
      {
        id: "cancelled",
        name: i18n("COMMON.TYPE_CANCELLED"),
        color: "#eeeeee"
      }
    ];
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("period")) {
        this._state.setPeriod(params.get("period") === "day" ? "day" : "week");
      }
      if (this.use_region)
        return;
      if (params.has("zone_ids")) {
        const zones = params.get("zone_ids").split(",");
        if (zones.length) {
          const level = this._org.levelWithID(zones);
          if (!level)
            return;
          this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          this.updateZones(zones);
        }
      }
    }));
    this.subscription("levels", this._org.active_levels.pipe(debounceTime(300)).subscribe((levels) => __async(this, null, function* () {
      if (this.use_region)
        return;
      const zones = (yield nextValueFrom(this.zones)).filter((zone) => levels.find((lvl) => lvl.id === zone));
      if (!zones.length && levels.length) {
        zones.push(levels[0].id);
      }
      this.updateZones(zones);
    })));
    this.subscription("region", this._org.active_region.pipe(filter((_) => !!_)).subscribe((_) => __async(this, null, function* () {
      const zones = yield nextValueFrom(this.zones);
      if (zones.length)
        return;
      this.updateZones([_.id]);
    })));
  }
  setFilter(id, value) {
    const filters = this._state.filters;
    let hide_type = filters.hide_type || [];
    hide_type = hide_type.filter((i) => i !== id);
    if (value)
      hide_type.push(id);
    this._state.setFilters({ hide_type });
  }
};
_RoomBookingsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RoomBookingsComponent_BaseFactory;
  return function RoomBookingsComponent_Factory(__ngFactoryType__) {
    return (\u0275RoomBookingsComponent_BaseFactory || (\u0275RoomBookingsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RoomBookingsComponent)))(__ngFactoryType__ || _RoomBookingsComponent);
  };
})();
_RoomBookingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingsComponent, selectors: [["room-bookings"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 52, vars: 35, consts: [["menu", "matMenu"], [1, "absolute", "inset-0", "flex", "flex-col", "overflow-hidden", "pl-8"], [1, "flex", "w-full", "items-center", "space-x-4", "py-4", "pr-8"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], ["appearance", "outline", 1, "no-subscript", "w-32"], [3, "ngModelChange", "ngModel"], ["value", "day"], ["value", "week"], ["btn", "", "matRipple", "", 1, "space-x-2", 3, "click"], [1, "pl-2"], [1, "text-2xl"], [1, "flex", "w-full", "items-center"], ["appearance", "outline", 1, "no-subscript", "w-52"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "ml-8", "mr-4", "h-full", "border-l"], [1, "flex", "max-w-[calc(100%-16rem)]", "flex-1", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "inverse", 3, "matMenuTriggerFor"], [1, "mx-2"], [1, ""], [1, "flex", "w-48", "flex-col", "space-y-2", "overflow-hidden"], [3, "ngModel"], [1, "flex", "w-px", "flex-1", "items-center", "space-x-2", "overflow-x-auto", "px-2"], [1, "mt-4", "flex", "h-px", "w-full", "flex-1", "border-t", "border-base-200"], [1, "relative", "z-0", "w-1/2", "flex-1"], [1, "relative", "z-10"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [1, "m-2", 3, "ngModelChange", "ngModel"], [1, "text-xs"], [1, "flex", "items-center", "rounded-3xl", "border", "border-base-200"], [1, "m-2", "h-4", "w-4", "rounded-full"], [1, "truncate"], ["icon", "", "matRipple", "", 3, "click"], [1, "text-xl"]], template: function RoomBookingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 4);
    \u0275\u0275elementStart(6, "mat-form-field", 5)(7, "mat-select", 6);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275listener("ngModelChange", function RoomBookingsComponent_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setPeriod($event));
    });
    \u0275\u0275elementStart(9, "mat-option", 7);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 8);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "button", 9);
    \u0275\u0275listener("click", function RoomBookingsComponent_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.newBooking());
    });
    \u0275\u0275elementStart(16, "div", 10);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "icon", 11);
    \u0275\u0275text(20, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 12)(22, "mat-form-field", 13)(23, "mat-select", 14);
    \u0275\u0275pipe(24, "async");
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("ngModelChange", function RoomBookingsComponent_Template_mat_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateZones($event));
    });
    \u0275\u0275repeaterCreate(26, RoomBookingsComponent_For_27_Template, 5, 3, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(28, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, RoomBookingsComponent_Conditional_29_Template, 6, 7);
    \u0275\u0275element(30, "div", 16);
    \u0275\u0275elementStart(31, "div", 17)(32, "button", 18)(33, "icon");
    \u0275\u0275text(34, "filter_list");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 19);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "mat-menu", 20, 0)(40, "div", 21);
    \u0275\u0275repeaterCreate(41, RoomBookingsComponent_For_42_Template, 2, 2, "mat-checkbox", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 23);
    \u0275\u0275repeaterCreate(44, RoomBookingsComponent_For_45_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 24);
    \u0275\u0275conditionalCreate(47, RoomBookingsComponent_Conditional_47_Template, 1, 0, "room-bookings-timeline", 25);
    \u0275\u0275pipe(48, "async");
    \u0275\u0275conditionalCreate(49, RoomBookingsComponent_Conditional_49_Template, 1, 0, "room-week-bookings-timeline", 25);
    \u0275\u0275pipe(50, "async");
    \u0275\u0275conditionalCreate(51, RoomBookingsComponent_Conditional_51_Template, 1, 0, "room-bookings-approvals", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r9 = \u0275\u0275reference(39);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 13, "APP.CONCIERGE.ROOM_BOOKINGS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(8, 15, ctx.period));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 17, "COMMON.DAY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 19, "COMMON.WEEK"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 21, "APP.CONCIERGE.ROOMS_BOOK_ADD"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(24, 23, ctx.zones))("placeholder", \u0275\u0275pipeBind1(25, 25, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(28, 27, ctx.levels));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.allow_setup_breakdown ? 29 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("matMenuTriggerFor", menu_r9);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 29, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.types);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.types);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(48, 31, ctx.period) === "day" ? 47 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(50, 33, ctx.period) === "week" ? 49 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.has_approvals ? 51 : -1);
  }
}, dependencies: [NgControlStatus, NgModel, MatFormField, MatSelect, MatOption, MatCheckbox, MatSlideToggle, MatMenu, MatMenuTrigger, MatRipple, IconComponent, RoomBookingsTimelineComponent, RoomBookingsApprovalsComponent, RoomWeekBookingsTimelineComponent, AsyncPipe, TranslatePipe, BuildingPipe], encapsulation: 2 });
var RoomBookingsComponent = _RoomBookingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomBookingsComponent, [{
    type: Component,
    args: [{ selector: "room-bookings", template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden pl-8">
            <div class="flex w-full items-center space-x-4 py-4 pr-8">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.ROOM_BOOKINGS' | translate }}
                </h2>
                <div class="w-px flex-1"></div>
                <mat-form-field appearance="outline" class="no-subscript w-32">
                    <mat-select
                        [ngModel]="period | async"
                        (ngModelChange)="setPeriod($event)"
                    >
                        <mat-option value="day">
                            {{ 'COMMON.DAY' | translate }}
                        </mat-option>
                        <mat-option value="week">
                            {{ 'COMMON.WEEK' | translate }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
                <button btn matRipple class="space-x-2" (click)="newBooking()">
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.ROOMS_BOOK_ADD' | translate }}
                    </div>
                    <icon class="text-2xl">add</icon>
                </button>
            </div>
            <div class="flex w-full items-center">
                <mat-form-field appearance="outline" class="no-subscript w-52">
                    <mat-select
                        [ngModel]="zones | async"
                        (ngModelChange)="updateZones($event)"
                        [placeholder]="'COMMON.LEVEL_ALL' | translate"
                        multiple
                    >
                        @for (level of levels | async; track level) {
                            <mat-option [value]="level.id">
                                <div class="flex flex-col-reverse">
                                    @if (use_region) {
                                        <div class="text-xs opacity-30">
                                            {{
                                                (level.parent_id | building)
                                                    ?.display_name
                                            }}
                                            <span class="opacity-0"> - </span>
                                        </div>
                                    }
                                    <div>
                                        {{ level.display_name || level.name }}
                                    </div>
                                </div>
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                @if (allow_setup_breakdown) {
                    @if (!use_region) {
                        <div class="ml-8 mr-4 h-full border-l"></div>
                    }
                    <mat-slide-toggle
                        class="m-2"
                        [ngModel]="(ui_options | async)?.show_overflow"
                        (ngModelChange)="
                            updateUIOptions({ show_overflow: $event })
                        "
                    >
                        <div class="text-xs">
                            {{ 'APP.CONCIERGE.SETUP_BREAKDOWN' | translate }}
                        </div>
                    </mat-slide-toggle>
                }
                <div class="ml-8 mr-4 h-full border-l"></div>
                <div
                    class="flex max-w-[calc(100%-16rem)] flex-1 items-center space-x-2"
                >
                    <button
                        btn
                        matRipple
                        class="inverse"
                        [matMenuTriggerFor]="menu"
                    >
                        <icon>filter_list</icon>
                        <div class="mx-2">
                            {{ 'COMMON.FILTERS' | translate }}
                        </div>
                    </button>
                    <mat-menu #menu="matMenu" class="">
                        <div
                            class="flex w-48 flex-col space-y-2 overflow-hidden"
                        >
                            @for (type of types; track type) {
                                <mat-checkbox
                                    [ngModel]="!type_list.includes(type.id)"
                                    (ngModelChange)="
                                        setFilter(type.id, !$event)
                                    "
                                >
                                    {{ type.name }}
                                </mat-checkbox>
                            }
                        </div>
                    </mat-menu>
                    <div
                        class="flex w-px flex-1 items-center space-x-2 overflow-x-auto px-2"
                    >
                        @for (type of types; track type.id) {
                            @if (!type_list.includes(type.id)) {
                                <div
                                    class="flex items-center rounded-3xl border border-base-200"
                                >
                                    <div
                                        class="m-2 h-4 w-4 rounded-full"
                                        [style.background-color]="type.color"
                                    ></div>
                                    <div class="truncate">
                                        {{ type.name }}
                                    </div>
                                    <button
                                        icon
                                        matRipple
                                        (click)="setFilter(type.id, true)"
                                    >
                                        <icon class="text-xl">close</icon>
                                    </button>
                                </div>
                            }
                        }
                    </div>
                </div>
            </div>
            <div class="mt-4 flex h-px w-full flex-1 border-t border-base-200">
                @if ((period | async) === 'day') {
                    <room-bookings-timeline class="relative z-0 w-1/2 flex-1" />
                }
                @if ((period | async) === 'week') {
                    <room-week-bookings-timeline
                        class="relative z-0 w-1/2 flex-1"
                    />
                }
                @if (has_approvals) {
                    <room-bookings-approvals class="relative z-10" />
                }
            </div>
        </div>
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingsComponent, { className: "RoomBookingsComponent", filePath: "apps/concierge/src/app/day-view/room-bookings.component.ts", lineNumber: 165 });
})();

// apps/concierge/src/app/day-view/day-view.component.ts
var _c07 = ["app-new-dayview", ""];
var _DayViewComponent = class _DayViewComponent {
};
_DayViewComponent.\u0275fac = function DayViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DayViewComponent)();
};
_DayViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DayViewComponent, selectors: [["", "app-new-dayview", ""]], standalone: false, attrs: _c07, decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function DayViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "room-bookings");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, RoomBookingsComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n@media print {\n  [_nghost-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=day-view.component.css.map */"] });
var DayViewComponent = _DayViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayViewComponent, [{
    type: Component,
    args: [{ selector: "[app-new-dayview]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <room-bookings></room-bookings>
            </main>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;a601cbb7d699676f3f7a2e48e4300694049c302c7b799a2ae7a0b3ce185e7eef;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/day-view/day-view.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n@media print {\n  :host {\n    display: none;\n  }\n}\n/*# sourceMappingURL=day-view.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DayViewComponent, { className: "DayViewComponent", filePath: "apps/concierge/src/app/day-view/day-view.component.ts", lineNumber: 33 });
})();

// apps/concierge/src/app/day-view/day-view.module.ts
var ROUTES = [
  { path: "", component: DayViewComponent },
  { path: "**", redirectTo: "" }
];
var _DayViewModule = class _DayViewModule {
};
_DayViewModule.\u0275fac = function DayViewModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DayViewModule)();
};
_DayViewModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DayViewModule });
_DayViewModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  SharedSpacesModule,
  SharedUsersModule,
  SharedCateringModule,
  RouterModule.forChild(ROUTES)
] });
var DayViewModule = _DayViewModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayViewModule, [{
    type: NgModule,
    args: [{
      declarations: [
        DayviewTopbarComponent,
        DayviewTimelineComponent,
        DayviewSpaceComponent,
        DayviewEventComponent,
        DayViewComponent,
        BookingModalComponent,
        EventFormComponent,
        RoomBookingsComponent,
        RoomBookingsTimelineComponent,
        RoomBookingsApprovalsComponent,
        RoomBookingSearchComponent,
        EventBookModalComponent,
        MeetingFormDetailsComponent,
        RoomWeekBookingsTimelineComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedSpacesModule,
        SharedUsersModule,
        SharedCateringModule,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  DayViewModule
};
//# sourceMappingURL=day-view.module-P6UMZ3FC.js.map
