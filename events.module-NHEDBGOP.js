import {
  SharedBookingsModule
} from "./chunk-GENGLLA3.js";
import "./chunk-LCG2CJAR.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  AttendeeListComponent,
  AuthenticatedImageDirective,
  BehaviorSubject,
  BuildingPipe,
  COMMA,
  CommonModule,
  CustomTooltipComponent,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  ENTER,
  EventFormService,
  FormControlName,
  FormFieldsModule,
  FormGroupDirective,
  FormsModule,
  GroupEventCardComponent,
  GroupEventDetailsModalComponent,
  IconComponent,
  ImageListFieldComponent,
  LevelPipe,
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatDialog,
  MatError,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatPrefix,
  MatProgressBar,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  RichTextInputComponent,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SPACE,
  SettingsService,
  SettingsToggleComponent,
  SharedEventsModule,
  SharedSpacesModule,
  SimpleTableComponent,
  SlicePipe,
  Space,
  SpacePipe,
  StaffUser,
  TIMEZONES_IANA,
  TimeFieldComponent,
  TranslatePipe,
  UIModule,
  UserSearchFieldComponent,
  __async,
  __spreadProps,
  __spreadValues,
  addDays,
  addMonths,
  addWeeks,
  combineLatest,
  currentUser,
  debounceTime,
  differenceInMinutes,
  distinctUntilChanged,
  endOfDay,
  filter,
  first,
  format,
  formatDuration,
  getInvalidFields,
  getUnixTime,
  i18n,
  isSameDay,
  isSameMonth,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  openConfirmModal,
  queryEvents,
  removeEvent,
  shareReplay,
  showEvent,
  startOfDay,
  startOfMinute,
  startOfMonth,
  startOfWeek,
  startWith,
  switchMap,
  tap,
  unique,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction8,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YJBK5ISP.js";

// node_modules/date-fns/subMonths.js
function subMonths(date, amount, options) {
  return addMonths(date, -amount, options);
}

// apps/concierge/src/app/events/events.component.ts
var _c0 = ["app-events", ""];
var EventsComponent = class _EventsComponent {
  static {
    this.\u0275fac = function EventsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsComponent, selectors: [["", "app-events", ""]], standalone: false, attrs: _c0, decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function EventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1);
        \u0275\u0275element(4, "router-outlet");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=events.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsComponent, { className: "EventsComponent", filePath: "apps/concierge/src/app/events/events.component.ts", lineNumber: 27 });
})();

// apps/concierge/src/app/events/event-state.service.ts
var EventStateService = class _EventStateService extends AsyncHandler {
  changed() {
    this.timeout("changed", () => this._changed.next(Date.now()), 100);
  }
  get period() {
    return this._options.getValue()?.period;
  }
  get calendar() {
    return this._settings.get("app.group_events_calendar");
  }
  constructor(_settings, _org, _dialog, _router) {
    super();
    this._settings = _settings;
    this._org = _org;
    this._dialog = _dialog;
    this._router = _router;
    this._options = new BehaviorSubject({
      period: "week"
    });
    this._loading = new BehaviorSubject("");
    this._poll = new BehaviorSubject(0);
    this._changed = new BehaviorSubject(0);
    this.event_list = combineLatest([
      this._org.active_building,
      this._options,
      this._changed,
      this._poll
    ]).pipe(filter(([bld]) => !!bld), debounceTime(310), switchMap(([_, options]) => {
      this._loading.next(i18n("APP.CONCIERGE.EVENTS_LOADING"));
      return queryEvents({
        period_start: getUnixTime(startOfDay(options.date)),
        period_end: getUnixTime(endOfDay(options.end || options.date || Date.now())),
        calendars: this.calendar
      });
    }), map((list) => list.filter((_) => _.extension_data?.shared_event).sort((a, b) => a.date - b.date)), tap(() => this._loading.next("")), shareReplay(1));
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
  }
  startPolling(delay = 60 * 1e3) {
    this.interval("poll", () => document.hasFocus() ? this._poll.next(Date.now()) : "", delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.value), options));
  }
  viewEvent(event) {
    const ref = this._dialog.open(GroupEventDetailsModalComponent, {
      data: {
        event,
        concierge: true,
        edit_fn: (i) => this._router.navigate([
          "/entertainment",
          "events",
          "manage",
          event.id
        ]),
        remove_fn: () => __async(this, null, function* () {
          yield this.removeEvent(event);
          ref.close();
        })
      }
    });
  }
  removeEvent(event) {
    return __async(this, null, function* () {
      const result = yield openConfirmModal({
        title: i18n("APP.CONCIERGE.EVENTS_REMOVE_TITLE"),
        content: i18n("APP.CONCIERGE.EVENTS_REMOVE_MSG", {
          title: event.title
        }),
        icon: { content: "delete" },
        confirm_text: i18n("COMMON.REMOVE")
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading(i18n("APP.CONCIERGE.EVENTS_REMOVE_LOADING"));
      yield removeEvent(event.id, {
        calendar: this.calendar
      }).toPromise().catch((e) => {
        notifyError(i18n("APP.CONCIERGE.EVENTS_REMOVE_ERROR", { error: e }));
        result.close();
        throw e;
      });
      result.close();
      notifySuccess(i18n("APP.CONCIERGE.EVENTS_REMOVE_SUCCESS"));
      this._changed.next(Date.now());
    });
  }
  static {
    this.\u0275fac = function EventStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventStateService)(\u0275\u0275inject(SettingsService), \u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventStateService, factory: _EventStateService.\u0275fac, providedIn: "root" });
  }
};

// apps/concierge/src/app/events/event-manage.component.ts
var _c02 = () => ({ standalone: true });
var _c1 = () => ["/entertainment", "events"];
function EventManageComponent_div_0_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 50)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c1));
  }
}
function EventManageComponent_div_0_mat_chip_row_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 51);
    \u0275\u0275listener("removed", function EventManageComponent_div_0_mat_chip_row_32_Template_mat_chip_row_removed_0_listener() {
      const tag_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeTag(tag_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 52);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    \u0275\u0275property("selectable", true)("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r3, " ");
  }
}
function EventManageComponent_div_0_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "label", 55);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 56);
    \u0275\u0275listener("ngModelChange", function EventManageComponent_div_0_div_63_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 54)(9, "label", 57);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "a-time-field", 58);
    \u0275\u0275listener("ngModelChange", function EventManageComponent_div_0_div_63_Template_a_time_field_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ date_end: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, "FORM.TIME_START"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r3.form.getRawValue().date)("disabled", ctx_r3.form.controls.date.disabled)("ngModelOptions", \u0275\u0275pureFunction0(15, _c02))("use_24hr", ctx_r3.use_24hr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 13, "FORM.TIME_END"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r3.form.value.date_end || ctx_r3.form.value.date + ctx_r3.form.value.duration * 60 * 1e3)("ngModelOptions", \u0275\u0275pureFunction0(16, _c02))("from", (ctx_r3.form == null ? null : (tmp_13_0 = ctx_r3.form.getRawValue()) == null ? null : tmp_13_0.date) + 30 * 60 * 1e3)("use_24hr", ctx_r3.use_24hr)("extra_info_fn", ctx_r3.duration_info);
  }
}
function EventManageComponent_div_0_mat_option_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r6 = ctx.$implicit;
    \u0275\u0275property("value", tz_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tz_r6, " ");
  }
}
function EventManageComponent_div_0_mat_option_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 60);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE_EMPTY"), " ");
  }
}
function EventManageComponent_div_0_ng_container_101_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const building_r8 = ctx.$implicit;
    \u0275\u0275property("value", building_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", building_r8.display_name || building_r8.name, " ");
  }
}
function EventManageComponent_div_0_ng_container_101_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r9 = ctx.$implicit;
    \u0275\u0275property("value", level_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r9.display_name || level_r9.name, " ");
  }
}
function EventManageComponent_div_0_ng_container_101_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r10 = ctx.$implicit;
    \u0275\u0275property("value", room_r10.email);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", room_r10.display_name || room_r10.name, " ");
  }
}
function EventManageComponent_div_0_ng_container_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 61);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 34)(5, "mat-select", 62);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("ngModelChange", function EventManageComponent_div_0_ng_container_101_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setBuilding($event));
    });
    \u0275\u0275template(7, EventManageComponent_div_0_ng_container_101_mat_option_7_Template, 2, 2, "mat-option", 37);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 63)(10, "div", 64)(11, "label", 65);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 34)(15, "mat-select", 62);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("ngModelChange", function EventManageComponent_div_0_ng_container_101_Template_mat_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setLevel($event));
    });
    \u0275\u0275template(17, EventManageComponent_div_0_ng_container_101_mat_option_17_Template, 2, 2, "mat-option", 37);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 66)(20, "label", 65);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-form-field", 34)(24, "mat-select", 67);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EventManageComponent_div_0_ng_container_101_Template_mat_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.resource, $event) || (ctx_r3.resource = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "mat-option")(28, "i");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, EventManageComponent_div_0_ng_container_101_mat_option_31_Template, 2, 2, "mat-option", 37);
    \u0275\u0275pipe(32, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_18_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 17, "RESOURCE.BUILDING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r3.building_zone)("ngModelOptions", \u0275\u0275pureFunction0(39, _c02))("placeholder", \u0275\u0275pipeBind1(6, 19, "COMMON.BUILDING_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(8, 21, ctx_r3.building_list));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 23, "RESOURCE.LEVEL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r3.level_zone)("ngModelOptions", \u0275\u0275pureFunction0(40, _c02))("placeholder", \u0275\u0275pipeBind1(16, 25, "COMMON.LEVEL_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(18, 27, ctx_r3.active_levels));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 29, "RESOURCE.ROOM"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.resource);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(41, _c02))("disabled", ((tmp_18_0 = \u0275\u0275pipeBind1(25, 31, ctx_r3.available_spaces)) == null ? null : tmp_18_0.length) === 0)("placeholder", \u0275\u0275pipeBind1(26, 33, "COMMON.ROOM_SELECT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 35, "COMMON.NONE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(32, 37, ctx_r3.available_spaces));
  }
}
function EventManageComponent_div_0_footer_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 68)(1, "button", 69);
    \u0275\u0275listener("click", function EventManageComponent_div_0_footer_116_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.save());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.SAVE"), " ");
  }
}
function EventManageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "header", 5)(2, "h2", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, EventManageComponent_div_0_a_5_Template, 3, 2, "a", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 8)(7, "section", 9)(8, "label", 10);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerStart(13);
    \u0275\u0275elementStart(14, "mat-form-field", 11);
    \u0275\u0275element(15, "input", 12);
    \u0275\u0275elementStart(16, "mat-error");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label", 13);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 14);
    \u0275\u0275element(25, "a-user-search-field", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "label", 16);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-form-field", 17)(30, "mat-chip-grid", 18, 1);
    \u0275\u0275template(32, EventManageComponent_div_0_mat_chip_row_32_Template, 4, 3, "mat-chip-row", 19);
    \u0275\u0275elementStart(33, "input", 20);
    \u0275\u0275listener("matChipInputTokenEnd", function EventManageComponent_div_0_Template_input_matChipInputTokenEnd_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addTag($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 21);
    \u0275\u0275element(35, "settings-toggle", 22);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementStart(37, "settings-toggle", 23);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275listener("ngModelChange", function EventManageComponent_div_0_Template_settings_toggle_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ view_access: $event ? "OPEN" : "PRIVATE" }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275element(39, "div", 24);
    \u0275\u0275elementStart(40, "h3", 25);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(43);
    \u0275\u0275elementStart(44, "div", 26)(45, "div", 27)(46, "label", 28);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "a-date-field", 29);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 27)(55, "label", 28);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "a-date-field", 30);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(63, EventManageComponent_div_0_div_63_Template, 15, 17, "div", 31);
    \u0275\u0275elementStart(64, "div", 32)(65, "label", 33);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "mat-form-field", 34)(69, "icon", 35);
    \u0275\u0275text(70, " search ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 36);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "mat-autocomplete", null, 2);
    \u0275\u0275template(75, EventManageComponent_div_0_mat_option_75_Template, 2, 2, "mat-option", 37)(76, EventManageComponent_div_0_mat_option_76_Template, 3, 4, "mat-option", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275element(77, "div", 24);
    \u0275\u0275elementStart(78, "h3", 25);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(81);
    \u0275\u0275elementStart(82, "div", 39)(83, "button", 40);
    \u0275\u0275listener("click", function EventManageComponent_div_0_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ attendance_type: "ONSITE" }));
    });
    \u0275\u0275elementStart(84, "icon", 41);
    \u0275\u0275text(85, "domain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 42);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "button", 40);
    \u0275\u0275listener("click", function EventManageComponent_div_0_Template_button_click_89_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ attendance_type: "ONLINE" }));
    });
    \u0275\u0275elementStart(90, "icon", 41);
    \u0275\u0275text(91, "laptop_mac");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 42);
    \u0275\u0275text(93);
    \u0275\u0275pipe(94, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "button", 40);
    \u0275\u0275listener("click", function EventManageComponent_div_0_Template_button_click_95_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ attendance_type: "ANY" }));
    });
    \u0275\u0275elementStart(96, "icon", 41);
    \u0275\u0275text(97, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "div", 42);
    \u0275\u0275text(99);
    \u0275\u0275pipe(100, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(101, EventManageComponent_div_0_ng_container_101_Template, 33, 42, "ng-container", 43);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275element(102, "div", 24);
    \u0275\u0275elementStart(103, "h3", 25);
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(106);
    \u0275\u0275elementStart(107, "label", 44);
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 45);
    \u0275\u0275element(111, "rich-text-input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "label", 47);
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(115, "image-list-field", 48);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275template(116, EventManageComponent_div_0_footer_116_Template, 4, 3, "footer", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chipList_r12 = \u0275\u0275reference(31);
    const auto_r13 = \u0275\u0275reference(74);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 46, ctx_r3.form.value.id ? "APP.CONCIERGE.EVENTS_EDIT" : "APP.CONCIERGE.EVENTS_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 48, "FORM.TITLE"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 50, "FORM.TITLE_ERROR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 52, "FORM.HOST"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 54, "COMMON.TAGS"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r3.tag_list);
    \u0275\u0275advance();
    \u0275\u0275property("matChipInputFor", chipList_r12)("matChipInputSeparatorKeyCodes", ctx_r3.separators)("matChipInputAddOnBlur", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(36, 56, "CALENDAR_EVENT.GROUP_FEATURED"));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(38, 58, "APP.CONCIERGE.EVENTS_PUBLISH"))("ngModel", ctx_r3.form.value.view_access === "OPEN")("ngModelOptions", \u0275\u0275pureFunction0(88, _c02));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 60, "APP.CONCIERGE.EVENTS_DATE_TIME"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 62, "FORM.DATE"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("to", ctx_r3.end_date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 64, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 66, "FORM.DATE_END"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("from", ctx_r3.start_date)("to", ctx_r3.end_date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(62, 68, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r3.form.value.all_day);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(67, 70, "COMMON.TIMEZONE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(72, 72, "COMMON.TIMEZONE"))("matAutocomplete", auto_r13);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.filtered_timezones);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.timezones.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(80, 74, "COMMON.LOCATION"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("inverse", false)("inverse", ctx_r3.form.value.attendance_type !== "ONSITE");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(88, 76, "APP.CONCIERGE.EVENTS_LOCATION_ONSITE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx_r3.form.value.attendance_type !== "ONLINE");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(94, 78, "APP.CONCIERGE.EVENTS_LOCATION_ONLINE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx_r3.form.value.attendance_type !== "ANY");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(100, 80, "APP.CONCIERGE.EVENTS_LOCATION_BOTH"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.form.value.attendance_type !== "ONLINE");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(105, 82, "APP.CONCIERGE.EVENTS_INFO"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(109, 84, "COMMON.DESCRIPTION"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(114, 86, "COMMON.IMAGES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r3.loading);
  }
}
function EventManageComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "mat-spinner", 71);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.EVENTS_SAVING"));
  }
}
var EMPTY = [];
var EventManageComponent = class _EventManageComponent extends AsyncHandler {
  get tag_list() {
    return this.form.getRawValue().tags || EMPTY;
  }
  get max_duration() {
    return this._settings.get("app.events.max_duration") || 480;
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get building_zone() {
    const level = this.level_zone;
    const building = this._org.buildings.find((b) => b.id === level?.parent_id);
    return building || this._org.building;
  }
  get level_zone() {
    const zones = this._form_state.options.zones || [];
    const level = this._org.levelWithID(zones);
    return level;
  }
  constructor(_form_state, _state, _route, _router, _org, _settings) {
    super();
    this._form_state = _form_state;
    this._state = _state;
    this._route = _route;
    this._router = _router;
    this._org = _org;
    this._settings = _settings;
    this.loading = false;
    this.timezones = [];
    this.filtered_timezones = [];
    this.form = this._form_state.form;
    this.separators = [ENTER, COMMA, SPACE];
    this.building_list = this._org.building_list;
    this.active_levels = this._org.active_levels;
    this.available_spaces = this._form_state.available_spaces;
    this.duration_info = (time) => {
      const date = this.form.getRawValue().date;
      if (format(date, "yyyy-MM-dd") !== format(time, "yyyy-MM-dd"))
        return "";
      const diff = differenceInMinutes(time, date);
      return ` (${formatDuration({
        hours: Math.floor(diff / 60),
        minutes: diff % 60
      })})`;
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.form.patchValue({
        location: this._org.building.address || this._org.building.display_name,
        organiser: currentUser(),
        attendance_type: "ONSITE",
        shared_event: true
      });
      this.subscription("route.params", this._route.paramMap.subscribe((params) => __async(this, null, function* () {
        if (params.has("id")) {
          const booking = yield showEvent(params.get("id"), {
            calendar: this._state.calendar
          }).toPromise();
          if (!booking)
            return this._router.navigate([
              "/entertainment",
              "events"
            ]);
          this._form_state.newForm(booking);
          this.resource = booking.resources.find((_) => _.email !== this._state.calendar)?.email;
          this.form.patchValue({
            tags: booking.extension_data?.tags || [],
            organiser: new StaffUser({
              id: booking.organiser?.id,
              email: booking.host,
              name: booking.organiser?.name
            }),
            resources: booking.resources.filter((_) => _.email !== this._state.calendar)
          });
        }
      })));
      this._updateTimezoneList();
      this.subscription("tz-change", this.form.valueChanges.subscribe(() => this._updateTimezoneList()));
    });
  }
  setBuilding(bld) {
    this._org.building = bld;
  }
  setLevel(level) {
    const new_zones = unique([
      this._org.organisation.id,
      this._org.building.parent_id,
      this._org.building.id,
      level.id
    ]);
    this._form_state.setOptions({ zones: [level.id] });
  }
  /**
   * Add a feature to the list of features for the item
   * @param event Input event
   */
  addTag(event) {
    if (!this.form || !this.form.controls.tags)
      return;
    const input = event.chipInput.inputElement;
    const value = event.value;
    const feature_list = this.tag_list;
    if ((value || "").trim()) {
      feature_list.push(value);
      this.form.controls.tags.setValue(feature_list);
    }
    if (input)
      input.value = "";
  }
  /**
   * Remove tag from the list
   * @param existing_tag Feature to remove
   */
  removeTag(existing_tag) {
    if (!this.form || !this.form.controls.tags)
      return;
    const tag_list = this.tag_list;
    const index = tag_list.indexOf(existing_tag);
    if (index >= 0) {
      tag_list.splice(index, 1);
      this.form.controls.tags.setValue(tag_list);
    }
  }
  save() {
    return __async(this, null, function* () {
      this.form.markAllAsTouched();
      if (!this.form.valid) {
        return notifyError(`Some form fields are invalid. [${getInvalidFields(this.form)}]`);
      }
      this.loading = true;
      let resources = this.form.getRawValue().resources;
      const space = yield new SpacePipe().transform(this._state.calendar);
      resources.push(space || new Space({
        id: this._state.calendar,
        email: this._state.calendar
      }));
      if (this.resource) {
        const resource = yield new SpacePipe().transform(this.resource);
        resources.push(resource);
      }
      resources = unique(resources, "email");
      this.form.patchValue({ resources, host: this._state.calendar });
      const date = this.form.getRawValue().date;
      const res = yield this._form_state.postForm(false, [this._state.calendar], true).catch((e) => notifyError(e));
      this._state.changed();
      this.loading = false;
      if (res) {
        this._router.navigate(["/entertainment", "events"], {
          queryParams: { range: startOfDay(date).valueOf() }
        });
      }
    });
  }
  _updateTimezoneList() {
    const timezone = this.form?.value?.timezone || "";
    this.timezones = TIMEZONES_IANA;
    this.filtered_timezones = this.timezones.filter((_) => _.toLowerCase().includes(timezone.toLowerCase()));
  }
  static {
    this.\u0275fac = function EventManageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventManageComponent)(\u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(EventStateService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventManageComponent, selectors: [["app-event-manage"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [["load_state", ""], ["chipList", ""], ["auto", "matAutocomplete"], ["class", "absolute inset-0 overflow-auto bg-base-100", 4, "ngIf", "ngIfElse"], [1, "absolute", "inset-0", "overflow-auto", "bg-base-100"], [1, "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "items-center", "justify-between", "rounded", "border-none", "bg-base-200", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", 3, "routerLink", 4, "ngIf"], [1, "mx-auto", "my-2", "flex", "w-[40rem]", "max-w-full", "flex-col", "px-4", "pb-16", 3, "formGroup"], [1, "flex", "flex-col", "space-y-2"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "e.g. Team Meeting"], ["for", "host"], [1, "pb-4"], ["name", "host", "formControlName", "organiser"], ["for", "tags"], ["appearance", "outline", 1, "no-subscript"], ["aria-label", "Event Tags"], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Add new tags relevant to this event...", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [1, "flex", "items-center", "space-x-4", "py-4"], ["formControlName", "featured", 1, "flex-1", 3, "name"], [1, "flex-1", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "h-px", "w-full", "bg-base-200"], [1, "py-4", "text-2xl", "font-medium"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "relative", "min-w-[256px]", "flex-1"], ["for", "date"], ["name", "date", "formControlName", "date", 3, "to"], ["name", "date", "formControlName", "date_end", 3, "from", "to"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "display-name"], ["appearance", "outline"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", 3, "placeholder", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], [1, "flex", "items-center", "space-x-2", "pb-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "text-2xl"], [1, "mx-2"], [4, "ngIf"], ["for", "description"], [1, "mb-16"], ["formControlName", "body"], ["for", "images"], ["formControlName", "images"], ["class", "fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end rounded border-none bg-base-200 px-4 py-2", 4, "ngIf"], ["icon", "", "matRipple", "", 3, "routerLink"], [3, "removed", "selectable", "removable"], ["matChipRemove", ""], [1, "flex", "items-center", "space-x-2"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "disabled", "ngModelOptions", "use_24hr"], ["for", "end-time"], ["name", "end-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "from", "use_24hr", "extra_info_fn"], [3, "value"], [3, "disabled"], ["for", "location"], [3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "space-x-2"], [1, "flex", "flex-[2]", "flex-col"], ["for", "level"], [1, "flex", "flex-[3]", "flex-col"], [3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "placeholder"], [1, "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "-translate-x-1/2", "items-center", "justify-end", "rounded", "border-none", "bg-base-200", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "bg-base-100"], ["diameter", "48"]], template: function EventManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EventManageComponent_div_0_Template, 117, 89, "div", 3)(1, EventManageComponent_ng_template_1_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r14 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r14);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, MatFormField, MatError, MatPrefix, MatInput, MatSelect, MatOption, MatProgressSpinner, MatAutocomplete, MatAutocompleteTrigger, MatRipple, FormGroupDirective, FormControlName, DateFieldComponent, ImageListFieldComponent, RichTextInputComponent, TimeFieldComponent, UserSearchFieldComponent, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, IconComponent, SettingsToggleComponent, RouterLink, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventManageComponent, { className: "EventManageComponent", filePath: "apps/concierge/src/app/events/event-manage.component.ts", lineNumber: 466 });
})();

// apps/concierge/src/app/events/event-listing.component.ts
var _c03 = (a0) => ({ key: "date", name: "Event", content: a0 });
var _c12 = (a0, a1) => ({ key: "level", name: a0, content: a1, size: "8rem", sortable: false });
var _c2 = (a0, a1) => ({ key: "room", name: a0, content: a1, size: "12rem", sortable: false });
var _c3 = (a0, a1) => ({ key: "interested", name: a0, content: a1, size: "6rem", sortable: false });
var _c4 = (a0, a1) => ({ key: "attending", name: a0, content: a1, size: "6rem", sortable: false });
var _c5 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "8.5rem" });
var _c6 = (a0, a1) => ({ key: "access", name: a0, content: a1, size: "6rem", sortable: false });
var _c7 = (a0) => ({ key: "actions", name: " ", content: a0, size: "4rem", sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
var _c9 = (a0) => ["/entertainment", "events", "manage", a0];
function EventListingComponent_ng_template_10_img_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().row;
    \u0275\u0275property("source", item_r1.images[0]);
  }
}
function EventListingComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 17);
    \u0275\u0275template(9, EventListingComponent_ng_template_10_img_9_Template, 1, 1, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19)(11, "div", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 21);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 22);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "space");
    \u0275\u0275pipe(20, "async");
    \u0275\u0275pipe(21, "building");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const item_r1 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 7, item_r1.date, "MMM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 10, item_r1.date, "d"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", item_r1.images == null ? null : item_r1.images.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(15, 13, item_r1.date, "EEEE, " + ctx_r1.time_format), " \u2013 ", \u0275\u0275pipeBind2(16, 16, item_r1.date + item_r1.duration * 60 * 1e3, ctx_r1.time_format + " (z)"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (tmp_15_0 = \u0275\u0275pipeBind1(21, 23, (tmp_15_0 = \u0275\u0275pipeBind1(20, 21, \u0275\u0275pipeBind1(19, 19, item_r1.linked_event == null ? null : item_r1.linked_event.system_id))) == null ? null : tmp_15_0.zones)) == null ? null : tmp_15_0.address, " ");
  }
}
function EventListingComponent_ng_template_12_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LEVEL_EMPTY"), " ");
  }
}
function EventListingComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "space");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "level");
    \u0275\u0275template(5, EventListingComponent_ng_template_12_span_5_Template, 3, 3, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const item_r3 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_10_0 = \u0275\u0275pipeBind1(4, 6, (tmp_10_0 = \u0275\u0275pipeBind1(3, 4, \u0275\u0275pipeBind1(2, 2, (tmp_10_0 = ctx_r1.room(item_r3)) == null ? null : tmp_10_0.email))) == null ? null : tmp_10_0.zones)) == null ? null : tmp_10_0.display_name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !((tmp_11_0 = ctx_r1.room(item_r3)) == null ? null : tmp_11_0.email));
  }
}
function EventListingComponent_ng_template_14_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ROOM_EMPTY"), " ");
  }
}
function EventListingComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "space");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, EventListingComponent_ng_template_14_span_4_Template, 3, 3, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const item_r4 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_10_0 = \u0275\u0275pipeBind1(3, 4, \u0275\u0275pipeBind1(2, 2, (tmp_10_0 = ctx_r1.room(item_r4)) == null ? null : tmp_10_0.email))) == null ? null : tmp_10_0.display_name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !((tmp_11_0 = ctx_r1.room(item_r4)) == null ? null : tmp_11_0.email));
  }
}
function EventListingComponent_ng_template_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "attendee-list", 29);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275property("list", item_r5.attendees)("host", item_r5.user_email || item_r5.host)("show_host", false)("hide_close", true)("custom_title", \u0275\u0275pipeBind1(2, 5, "CALENDAR_EVENT.GROUP_INTERESTED"));
  }
}
function EventListingComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, EventListingComponent_ng_template_16_ng_template_2_Template, 3, 7, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const item_r5 = ctx.row;
    const view_attendees_r6 = \u0275\u0275reference(3);
    \u0275\u0275property("content", view_attendees_r6)("disabled", !(item_r5.attendees == null ? null : item_r5.attendees.length));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (item_r5.attendees == null ? null : item_r5.attendees.length) || 0, " ");
  }
}
function EventListingComponent_ng_template_18_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "attendee-list", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("show_host", false)("list", ctx_r1.checkedInList(item_r7.attendees))("host", item_r7.user_email || item_r7.host)("hide_close", true);
  }
}
function EventListingComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, EventListingComponent_ng_template_18_ng_template_2_Template, 2, 4, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const item_r7 = ctx.row;
    const view_attendees_r8 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("content", view_attendees_r8)("disabled", !ctx_r1.checkedInCount(item_r7.attendees));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.checkedInCount(item_r7.attendees), " ");
  }
}
function EventListingComponent_ng_template_20_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EventListingComponent_ng_template_20_div_0_Template, 3, 0, "div", 31);
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    \u0275\u0275property("ngIf", data_r9 === "OPEN" || data_r9 === "open");
  }
}
function EventListingComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", item_r10.state !== "done" && item_r10.state !== "in_progress" && item_r10.state !== "started")("text-success-content", item_r10.state !== "done" && item_r10.state !== "in_progress" && item_r10.state !== "started")("bg-warning", item_r10.state === "in_progress" || item_r10.state === "started")("text-warning-content", item_r10.state === "in_progress" || item_r10.state === "started")("bg-base-200", item_r10.state === "done")("text-base-content", item_r10.state === "done");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, item_r10.state === "done" ? "COMMON.STATE_DONE" : item_r10.state === "in_progress" || item_r10.state === "started" ? "COMMON.STATE_IN_PROGRESS" : "COMMON.STATE_ACTIVE"), " ");
  }
}
function EventListingComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34)(1, "icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 9)(5, "button", 35)(6, "div", 36)(7, "icon", 37);
    \u0275\u0275text(8, " confirmation_number ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 38);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 39);
    \u0275\u0275listener("click", function EventListingComponent_ng_template_24_Template_button_click_12_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewEvent(row_r12));
    });
    \u0275\u0275elementStart(13, "div", 36)(14, "icon", 37);
    \u0275\u0275text(15, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 38);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "a", 40)(20, "div", 36)(21, "icon", 37);
    \u0275\u0275text(22, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 38);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 35)(27, "div", 36)(28, "icon", 37);
    \u0275\u0275text(29, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 38);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "button", 39);
    \u0275\u0275listener("click", function EventListingComponent_ng_template_24_Template_button_click_33_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeEvent(row_r12));
    });
    \u0275\u0275elementStart(34, "div", 36)(35, "icon", 41);
    \u0275\u0275text(36, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 38);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    const menu_r13 = \u0275\u0275reference(4);
    \u0275\u0275property("matMenuTriggerFor", menu_r13)("disabled", row_r12.state === "done");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "APP.CONCIERGE.EVENTS_PROMOTE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 12, "APP.CONCIERGE.EVENTS_VIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c9, row_r12 == null ? null : row_r12.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 14, "APP.CONCIERGE.EVENTS_EDIT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 16, "APP.CONCIERGE.EVENTS_COPY_URL"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 18, "APP.CONCIERGE.EVENTS_REMOVE"), " ");
  }
}
var EventListingComponent = class _EventListingComponent {
  room(item) {
    return item.resources.find((_) => _.email !== this._state.calendar);
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_settings, _state) {
    this._settings = _settings;
    this._state = _state;
    this.loading = this._state.loading;
    this.event_list = this._state.event_list;
    this.viewEvent = (event) => this._state.viewEvent(event);
    this.removeEvent = (event) => this._state.removeEvent(event);
  }
  checkedInCount(attendees) {
    if (!attendees?.length)
      return 0;
    return attendees.filter((user) => user.checked_in).length;
  }
  checkedInList(attendees) {
    if (!attendees?.length)
      return [];
    return attendees.filter((user) => user.checked_in);
  }
  static {
    this.\u0275fac = function EventListingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventListingComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(EventStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventListingComponent, selectors: [["event-listing"]], standalone: false, decls: 26, vars: 50, consts: [["event_template", ""], ["level_template", ""], ["room_template", ""], ["interested_template", ""], ["attending_template", ""], ["published_template", ""], ["status_template", ""], ["actions_template", ""], ["view_attendees", ""], ["menu", "matMenu"], ["mode", "indeterminate", 1, "w-full"], ["empty_message", "No group events for selected period", 1, "block", "w-full", "min-w-[72rem]", "text-sm", 3, "data", "columns", "sortable"], [1, "h-20", "w-full"], [1, "flex", "items-center", "space-x-2", "px-3", "py-2"], ["date", "", 1, "flex", "w-8", "flex-col", "items-center", "leading-tight"], ["month", "", 1, "relative", "top-0.5", "text-sm", "font-medium", "opacity-60"], ["day", "", 1, "relative", "-top-0.5", "text-2xl", "font-light"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "overflow-hidden", "rounded", "border", "border-base-200", "bg-base-200"], ["auth", "", "class", "min-h-full min-w-full object-cover", 3, "source", 4, "ngIf"], ["details", "", 1, "flex", "flex-col"], [1, "text-sm"], [1, "text-xs", "opacity-40"], [1, "text-xs"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", 3, "source"], [1, "p-4"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], ["icon", "", "matRipple", "", "customTooltip", "", 1, "mx-auto", "h-12", "w-12", "rounded", 3, "content", "disabled"], [1, "relative", "h-[28rem]", "w-[20rem]", "overflow-auto", "rounded", "bg-white", "shadow"], [3, "list", "host", "show_host", "hide_close", "custom_title"], [3, "show_host", "list", "host", "hide_close"], ["class", "mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content", 4, "ngIf"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-success", "text-2xl", "text-success-content"], [1, "rounded-full", "px-4", "py-1"], ["icon", "", "matRipple", "", 1, "mx-2", "h-12", "w-12", "rounded", 3, "matMenuTriggerFor", "disabled"], ["mat-menu-item", "", 3, "disabled"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "mr-2"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "routerLink"], [1, "text-2xl", "text-error"]], template: function EventListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "mat-progress-bar", 10);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275element(2, "simple-table", 11);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275element(9, "div", 12);
        \u0275\u0275template(10, EventListingComponent_ng_template_10_Template, 22, 25, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, EventListingComponent_ng_template_12_Template, 6, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(14, EventListingComponent_ng_template_14_Template, 5, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(16, EventListingComponent_ng_template_16_Template, 4, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(18, EventListingComponent_ng_template_18_Template, 4, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(20, EventListingComponent_ng_template_20_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(22, EventListingComponent_ng_template_22_Template, 4, 15, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(24, EventListingComponent_ng_template_24_Template, 40, 22, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const event_template_r14 = \u0275\u0275reference(11);
        const level_template_r15 = \u0275\u0275reference(13);
        const room_template_r16 = \u0275\u0275reference(15);
        const interested_template_r17 = \u0275\u0275reference(17);
        const attending_template_r18 = \u0275\u0275reference(19);
        const published_template_r19 = \u0275\u0275reference(21);
        const status_template_r20 = \u0275\u0275reference(23);
        const actions_template_r21 = \u0275\u0275reference(25);
        \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(1, 5, ctx.loading));
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.event_list)("columns", \u0275\u0275pureFunction8(41, _c8, \u0275\u0275pureFunction1(19, _c03, event_template_r14), \u0275\u0275pureFunction2(21, _c12, \u0275\u0275pipeBind1(3, 7, "RESOURCE.LEVEL"), level_template_r15), \u0275\u0275pureFunction2(24, _c2, \u0275\u0275pipeBind1(4, 9, "RESOURCE.ROOM"), room_template_r16), \u0275\u0275pureFunction2(27, _c3, \u0275\u0275pipeBind1(5, 11, "CALENDAR_EVENT.GROUP_INTERESTED"), interested_template_r17), \u0275\u0275pureFunction2(30, _c4, \u0275\u0275pipeBind1(6, 13, "CALENDAR_EVENT.GROUP_ATTENDING_FIELD"), attending_template_r18), \u0275\u0275pureFunction2(33, _c5, \u0275\u0275pipeBind1(7, 15, "COMMON.STATUS"), status_template_r20), \u0275\u0275pureFunction2(36, _c6, \u0275\u0275pipeBind1(8, 17, "COMMON.PUBLISHED"), published_template_r19), \u0275\u0275pureFunction1(39, _c7, actions_template_r21)))("sortable", true);
      }
    }, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatProgressBar, MatRipple, IconComponent, CustomTooltipComponent, SimpleTableComponent, AuthenticatedImageDirective, AttendeeListComponent, RouterLink, AsyncPipe, DatePipe, TranslatePipe, LevelPipe, BuildingPipe, SpacePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventListingComponent, { className: "EventListingComponent", filePath: "apps/concierge/src/app/events/event-listing.component.ts", lineNumber: 294 });
})();

// apps/concierge/src/app/events/event-week-view.component.ts
var _c04 = () => [];
function EventWeekViewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hour_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", hour_r1, " ", i_r2 >= 12 ? "PM" : "AM", " ");
  }
}
function EventWeekViewComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, date_r3, "EEEE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, date_r3, "d"));
  }
}
function EventWeekViewComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
}
function EventWeekViewComponent_div_12_button_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "group-event-card", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("event", event_r5);
  }
}
function EventWeekViewComponent_div_12_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function EventWeekViewComponent_div_12_button_1_Template_button_click_0_listener() {
      const event_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.viewEvent(event_r5));
    });
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementStart(2, "div", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 23);
    \u0275\u0275template(6, EventWeekViewComponent_div_12_button_1_ng_template_6_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r5 = ctx.$implicit;
    const event_card_r7 = \u0275\u0275reference(7);
    \u0275\u0275styleProp("top", event_r5.offset * 100 + "%")("height", event_r5.length * 100 + "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(4, 8, event_r5.date, "shortTime"), " \u2014 ", event_r5.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("content", event_card_r7)("hover", true);
  }
}
function EventWeekViewComponent_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r5.now_offset * 100 + "%");
  }
}
function EventWeekViewComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, EventWeekViewComponent_div_12_button_1_Template, 8, 11, "button", 18);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, EventWeekViewComponent_div_12_div_3_Template, 2, 2, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", "translateX(" + i_r9 * 100 + "%)");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 4, ctx_r5.event_day_map)[ctx_r5.dateString(date_r8)] || \u0275\u0275pureFunction0(6, _c04));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r5.isCurrentDay(date_r8));
  }
}
var EventWeekViewComponent = class _EventWeekViewComponent extends AsyncHandler {
  dateString(date) {
    if (!date)
      return "";
    return format(date, "yyyy-MM-dd");
  }
  isCurrentDay(date) {
    if (!date)
      return false;
    return format(Date.now(), "yyyy-MM-dd") === format(date, "yyyy-MM-dd");
  }
  get now() {
    return startOfMinute(Date.now()).valueOf();
  }
  get now_offset() {
    const now = new Date(this.now);
    return (now.getHours() * 60 + now.getMinutes()) / (24 * 60);
  }
  constructor(_state) {
    super();
    this._state = _state;
    this.days = new Array(7).fill(0).map((_, idx) => idx + 1);
    this.hours = new Array(24).fill(0).map((_, idx) => idx % 12 ? idx % 12 : 12);
    this.event_list = this._state.event_list;
    this.event_day_map = this.event_list.pipe(map((list) => {
      const map2 = {};
      for (const event of list) {
        const date = format(event.date, "yyyy-MM-dd");
        if (!map2[date])
          map2[date] = [];
        const start = new Date(event.date);
        map2[date].push(__spreadProps(__spreadValues({}, event), {
          offset: (start.getHours() * 60 + start.getMinutes()) / (24 * 60),
          length: event.duration / (24 * 60)
        }));
      }
      return map2;
    }), startWith({}), shareReplay(1));
    this.viewEvent = (event) => this._state.viewEvent(event);
  }
  ngOnInit() {
    this.subscription("date", this._state.options.subscribe(({ date }) => {
      if (!date)
        return;
      this.days = this.days.map((_, idx) => addDays(date, idx).valueOf());
    }));
  }
  static {
    this.\u0275fac = function EventWeekViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventWeekViewComponent)(\u0275\u0275directiveInject(EventStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventWeekViewComponent, selectors: [["event-week-view"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 8, consts: [["event_card", ""], [1, "absolute", "inset-0", "flex", "overflow-auto"], [1, "sticky", "left-0", "z-20", "flex", "min-h-full", "w-24", "flex-col", "items-end", "bg-base-100"], ["header", "", 1, "sticky", "top-0", "z-10", "flex", "h-16", "min-h-16", "justify-end"], [1, "h-10", "bg-base-100", "pt-6"], [1, "px-2", "text-xs", "opacity-30"], ["class", "relative min-h-10 w-full flex-1 bg-base-100", 4, "ngFor", "ngForOf"], [1, "relative", "z-10", "min-h-full", "min-w-[84rem]"], ["header", "", 1, "sticky", "top-0", "z-10", "flex", "h-16", "min-h-16", "border-b", "border-base-200", "bg-base-100"], ["date", "", "class", "flex min-w-48 flex-1 flex-col items-center justify-center border-r border-base-200 p-4", 4, "ngFor", "ngForOf"], ["class", "pointer-events-none relative flex min-h-10 min-w-[84rem] flex-1 border-x border-b border-base-200", 4, "ngFor", "ngForOf"], ["date", "", "class", "pointer-events-none absolute left-0 top-16 h-[60rem] w-[calc(100%/7)] flex-1 border-r border-base-200", 3, "transform", 4, "ngFor", "ngForOf"], [1, "relative", "min-h-10", "w-full", "flex-1", "bg-base-100"], ["hour", "", 1, "absolute", "right-1", "top-0", "-translate-y-1/2", "whitespace-nowrap", "text-xs", "opacity-60"], ["date", "", 1, "flex", "min-w-48", "flex-1", "flex-col", "items-center", "justify-center", "border-r", "border-base-200", "p-4"], [1, "text-sm", "opacity-60"], [1, "pointer-events-none", "relative", "flex", "min-h-10", "min-w-[84rem]", "flex-1", "border-x", "border-b", "border-base-200"], ["date", "", 1, "pointer-events-none", "absolute", "left-0", "top-16", "h-[60rem]", "w-[calc(100%/7)]", "flex-1", "border-r", "border-base-200"], ["matRipple", "", "class", "pointer-events-auto absolute inset-x-1 overflow-hidden rounded border border-base-200 bg-base-100 py-1 pl-3 pr-2 shadow hover:border-info", 3, "top", "height", "click", 4, "ngFor", "ngForOf"], ["now", "", "class", "absolute inset-x-0 h-0 border-y-2 border-base-content", 3, "top", 4, "ngIf"], ["matRipple", "", 1, "pointer-events-auto", "absolute", "inset-x-1", "overflow-hidden", "rounded", "border", "border-base-200", "bg-base-100", "py-1", "pl-3", "pr-2", "shadow", "hover:border-info", 3, "click"], [1, "absolute", "inset-y-0", "left-0", "w-1.5", "bg-info"], [1, "h-full", "text-left", "text-sm", "opacity-60"], ["customTooltip", "", "xPosition", "center", "yPosition", "bottom", 1, "absolute", "inset-0", 3, "content", "hover"], [1, "pointer-events-none", "p-2"], [3, "event"], ["now", "", 1, "absolute", "inset-x-0", "h-0", "border-y-2", "border-base-content"], [1, "absolute", "left-0", "top-0", "h-4", "w-4", "-translate-x-1/2", "-translate-y-1/2", "rounded-full", "bg-base-content"]], template: function EventWeekViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "date");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(7, EventWeekViewComponent_div_7_Template, 3, 2, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8);
        \u0275\u0275template(10, EventWeekViewComponent_div_10_Template, 7, 8, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, EventWeekViewComponent_div_11_Template, 1, 0, "div", 10)(12, EventWeekViewComponent_div_12_Template, 4, 7, "div", 11);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 5, ctx.now, "zzzz"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.hours);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.days);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.hours);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.days);
      }
    }, dependencies: [NgForOf, NgIf, MatRipple, CustomTooltipComponent, GroupEventCardComponent, AsyncPipe, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventWeekViewComponent, { className: "EventWeekViewComponent", filePath: "apps/concierge/src/app/events/event-week-view.component.ts", lineNumber: 116 });
})();

// apps/concierge/src/app/events/event-month-view.component.ts
var _c05 = () => [];
var _c13 = (a0) => ({ count: a0 });
function EventMonthViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const weekday_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, weekday_r1, "EEEE"), " ");
  }
}
function EventMonthViewComponent_div_3_button_4_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "group-event-card", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("event", event_r3);
  }
}
function EventMonthViewComponent_div_3_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function EventMonthViewComponent_div_3_button_4_Template_button_click_0_listener() {
      const event_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewEvent(event_r3));
    });
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementStart(2, "div", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 15);
    \u0275\u0275template(6, EventMonthViewComponent_div_3_button_4_ng_template_6_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    const event_card_r5 = \u0275\u0275reference(7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(4, 4, event_r3.date, "shortTime"), " \u2014 ", event_r3.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("content", event_card_r5)("hover", true);
  }
}
function EventMonthViewComponent_div_3_button_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = \u0275\u0275nextContext().$implicit;
    const menu_r7 = \u0275\u0275reference(10);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "APP.CONCIERGE.EVENTS_MORE_COUNT", \u0275\u0275pureFunction1(8, _c13, (\u0275\u0275pipeBind1(2, 2, ctx_r3.event_day_map)[ctx_r3.dateString(day_r6.id)] || \u0275\u0275pureFunction0(7, _c05)).length - 3)), " ");
  }
}
function EventMonthViewComponent_div_3_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function EventMonthViewComponent_div_3_button_11_Template_button_click_0_listener() {
      const event_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewEvent(event_r9));
    });
    \u0275\u0275elementStart(1, "div", 20)(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 2, event_r9.date, "shortTime"), " ");
  }
}
function EventMonthViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, EventMonthViewComponent_div_3_button_4_Template, 8, 7, "button", 9);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "slice");
    \u0275\u0275template(7, EventMonthViewComponent_div_3_button_7_Template, 4, 10, "button", 10);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementStart(9, "mat-menu", null, 0);
    \u0275\u0275template(11, EventMonthViewComponent_div_3_button_11_Template, 7, 5, "button", 11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-30", !day_r6.is_month)("bg-secondary", day_r6.is_today)("text-secondary-content", day_r6.is_today);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 10, day_r6.id, "d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(6, 15, \u0275\u0275pipeBind1(5, 13, ctx_r3.event_day_map)[ctx_r3.dateString(day_r6.id)] || \u0275\u0275pureFunction0(26, _c05), 0, 3));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (\u0275\u0275pipeBind1(8, 19, ctx_r3.event_day_map)[ctx_r3.dateString(day_r6.id)] || \u0275\u0275pureFunction0(27, _c05)).length > 3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(13, 23, \u0275\u0275pipeBind1(12, 21, ctx_r3.event_day_map)[ctx_r3.dateString(day_r6.id)] || \u0275\u0275pureFunction0(28, _c05), 3));
  }
}
var EventMonthViewComponent = class _EventMonthViewComponent extends AsyncHandler {
  dateString(date) {
    if (!date)
      return "";
    return format(date, "yyyy-MM-dd");
  }
  get offset_weekday() {
    return this._settings.get("app.week_start") || 0;
  }
  constructor(_state, _settings, _dialog, _router) {
    super();
    this._state = _state;
    this._settings = _settings;
    this._dialog = _dialog;
    this._router = _router;
    this.month = startOfDay(Date.now()).valueOf();
    this.weekdays = [];
    this.month_days = [];
    this.event_list = this._state.event_list;
    this.event_day_map = this.event_list.pipe(map((list) => {
      const map2 = {};
      for (const event of list) {
        const date = format(event.date, "yyyy-MM-dd");
        if (!map2[date])
          map2[date] = [];
        const start = new Date(event.date);
        map2[date].push(__spreadProps(__spreadValues({}, event), {
          offset: (start.getHours() * 60 + start.getMinutes()) / (24 * 60),
          length: event.duration / (24 * 60)
        }));
      }
      return map2;
    }), startWith({}), shareReplay(1));
    this.viewEvent = (event) => this._state.viewEvent(event);
  }
  ngOnInit() {
    this.subscription("date", this._state.options.subscribe(({ date }) => {
      this.month = date;
      this._setMonthDays();
      this._setWeekdays();
    }));
    this._setMonthDays();
    this._setWeekdays();
  }
  _setMonthDays() {
    const start = startOfWeek(startOfMonth(this.month), {
      weekStartsOn: this.offset_weekday
    });
    this.month_days = Array.from(Array(7 * 6).keys()).map((i) => {
      const date = addDays(start, i).valueOf();
      return {
        id: date,
        is_today: isSameDay(date, Date.now()),
        is_month: isSameMonth(date, this.month)
      };
    });
  }
  _setWeekdays() {
    const start = startOfWeek(Date.now(), {
      weekStartsOn: this.offset_weekday
    });
    this.weekdays = Array.from(Array(7).keys()).map((i) => addDays(start, i));
  }
  static {
    this.\u0275fac = function EventMonthViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventMonthViewComponent)(\u0275\u0275directiveInject(EventStateService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventMonthViewComponent, selectors: [["event-month-view"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 2, consts: [["menu", "matMenu"], ["event_card", ""], [1, "absolute", "inset-0", "overflow-auto"], [1, "m-2", "grid", "h-[56rem]", "min-h-full", "w-[80rem]", "min-w-full", "grid-cols-7", "border-b", "border-base-200"], ["weekday", "", "class", "relative flex h-12 items-center justify-center p-2 text-sm opacity-60", 4, "ngFor", "ngForOf"], ["monthday", "", "class", "relative flex flex-col space-y-1 border border-base-200", 4, "ngFor", "ngForOf"], ["weekday", "", 1, "relative", "flex", "h-12", "items-center", "justify-center", "p-2", "text-sm", "opacity-60"], ["monthday", "", 1, "relative", "flex", "flex-col", "space-y-1", "border", "border-base-200"], [1, "ml-1", "mt-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full"], ["matRipple", "", "class", "relative mx-1 h-7 w-[calc(100%-0.5rem)] overflow-hidden rounded border border-base-200 bg-base-100 py-1 pl-3 pr-2 shadow hover:border-info", 3, "click", 4, "ngFor", "ngForOf"], ["matRipple", "", "matTooltip", "More events", "class", "relative mx-1 h-7 w-[calc(100%-0.5rem)] overflow-hidden rounded py-1 pl-3 pr-2 text-sm underline", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "relative", "mx-1", "h-7", "w-[calc(100%-0.5rem)]", "overflow-hidden", "rounded", "border", "border-base-200", "bg-base-100", "py-1", "pl-3", "pr-2", "shadow", "hover:border-info", 3, "click"], [1, "absolute", "inset-y-0", "left-0", "w-1.5", "bg-info"], [1, "h-full", "truncate", "text-left", "text-sm", "opacity-60"], ["customTooltip", "", "xPosition", "center", "yPosition", "bottom", 1, "absolute", "inset-0", 3, "content", "hover"], [1, "pointer-events-none", "p-2"], [3, "event"], ["matRipple", "", "matTooltip", "More events", 1, "relative", "mx-1", "h-7", "w-[calc(100%-0.5rem)]", "overflow-hidden", "rounded", "py-1", "pl-3", "pr-2", "text-sm", "underline", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1"], [1, "rounded", "bg-base-200", "px-2", "py-1", "text-xs", "text-base-content", "opacity-60"]], template: function EventMonthViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
        \u0275\u0275template(2, EventMonthViewComponent_div_2_Template, 3, 4, "div", 4)(3, EventMonthViewComponent_div_3_Template, 14, 29, "div", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.weekdays);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.month_days);
      }
    }, dependencies: [NgForOf, NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, CustomTooltipComponent, GroupEventCardComponent, AsyncPipe, SlicePipe, DatePipe, TranslatePipe], styles: ["\n\n.grid[_ngcontent-%COMP%] {\n  grid-template-rows: 3rem repeat(6, minmax(0, 1fr));\n}\n/*# sourceMappingURL=event-month-view.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventMonthViewComponent, { className: "EventMonthViewComponent", filePath: "apps/concierge/src/app/events/event-month-view.component.ts", lineNumber: 135 });
})();

// apps/concierge/src/app/events/event-calendar.component.ts
function EventCalendarComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, \u0275\u0275pipeBind1(2, 1, ctx_r1.period) === "week" ? "COMMON.WEEK_THIS" : "COMMON.MONTH_THIS"));
  }
}
function EventCalendarComponent_event_week_view_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-week-view");
  }
}
function EventCalendarComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-month-view");
  }
}
var EventCalendarComponent = class _EventCalendarComponent {
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_settings, _state, _router, _route) {
    this._settings = _settings;
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this.period = this._state.options.pipe(map((_) => _.period));
    this.options = this._state.options;
    this.is_today = this.options.pipe(map((_) => _.date <= Date.now() && _.end > Date.now()));
    this.event_list = this._state.event_list;
    this.event_day_map = this.event_list.pipe(map((list) => {
      const map2 = {};
      for (const event of list) {
        const date = format(event.date, "yyyy-MM-dd");
        if (!map2[date])
          map2[date] = [];
        map2[date].push(event);
      }
      return map2;
    }), shareReplay(1));
  }
  setPeriod(period) {
    this._state.setOptions({ period });
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { period },
      queryParamsHandling: "merge"
    });
  }
  nextPeriod() {
    return __async(this, null, function* () {
      const { date, period } = yield nextValueFrom(this.options);
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          range: period === "week" ? addWeeks(date, 1).valueOf() : addMonths(date, 1).valueOf()
        },
        queryParamsHandling: "merge"
      });
    });
  }
  previousPeriod() {
    return __async(this, null, function* () {
      const { date, period } = yield nextValueFrom(this.options);
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          range: period === "week" ? addWeeks(date, -1).valueOf() : addMonths(date, -1).valueOf()
        },
        queryParamsHandling: "merge"
      });
    });
  }
  static {
    this.\u0275fac = function EventCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventCalendarComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(EventStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventCalendarComponent, selectors: [["event-calendar"]], standalone: false, decls: 30, vars: 27, consts: [["month_calendar", ""], [1, "flex", "w-full", "items-center", "border-y", "border-base-200"], [1, "flex-1", "px-2", "py-4"], ["class", "text-xs text-info", 4, "ngIf"], [1, "flex-2", "flex", "items-center", "justify-center", "space-x-2"], [1, "pl-4", "font-medium"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex", "flex-1", "items-center", "justify-end", "space-x-2", "py-2"], ["btn", "", "matRipple", "", 1, "rounded-3xl", 3, "click"], [1, "h-4", "w-full"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto"], [4, "ngIf", "ngIfElse"], [1, "text-xs", "text-info"]], template: function EventCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275template(2, EventCalendarComponent_span_2_Template, 4, 5, "span", 3);
        \u0275\u0275pipe(3, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275pipe(8, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 6);
        \u0275\u0275listener("click", function EventCalendarComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.previousPeriod());
        });
        \u0275\u0275elementStart(10, "icon");
        \u0275\u0275text(11, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function EventCalendarComponent_Template_button_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.nextPeriod());
        });
        \u0275\u0275elementStart(13, "icon");
        \u0275\u0275text(14, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 7)(16, "button", 8);
        \u0275\u0275pipe(17, "async");
        \u0275\u0275listener("click", function EventCalendarComponent_Template_button_click_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setPeriod("week"));
        });
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 8);
        \u0275\u0275pipe(21, "async");
        \u0275\u0275listener("click", function EventCalendarComponent_Template_button_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setPeriod("month"));
        });
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(24, "div", 9);
        \u0275\u0275elementStart(25, "div", 10);
        \u0275\u0275template(26, EventCalendarComponent_event_week_view_26_Template, 1, 0, "event-week-view", 11);
        \u0275\u0275pipe(27, "async");
        \u0275\u0275template(28, EventCalendarComponent_ng_template_28_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        const month_calendar_r3 = \u0275\u0275reference(29);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 10, ctx.is_today));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 14, (tmp_2_0 = \u0275\u0275pipeBind1(7, 12, ctx.options)) == null ? null : tmp_2_0.date, "MMM yyyy"), " ");
        \u0275\u0275advance(10);
        \u0275\u0275classProp("inverse", \u0275\u0275pipeBind1(17, 17, ctx.period) !== "week");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 19, "COMMON.WEEK"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", \u0275\u0275pipeBind1(21, 21, ctx.period) !== "month");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 23, "COMMON.MONTH"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(27, 25, ctx.period) !== "month")("ngIfElse", month_calendar_r3);
      }
    }, dependencies: [NgIf, MatRipple, IconComponent, EventWeekViewComponent, EventMonthViewComponent, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=event-calendar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventCalendarComponent, { className: "EventCalendarComponent", filePath: "apps/concierge/src/app/events/event-calendar.component.ts", lineNumber: 74 });
})();

// apps/concierge/src/app/events/events-list.component.ts
var _c06 = () => ["/entertainment", "events", "manage"];
function EventsListComponent_mat_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const range_r1 = ctx.$implicit;
    \u0275\u0275property("value", range_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", range_r1.display, " ");
  }
}
function EventsListComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "event-listing", 25);
    \u0275\u0275elementEnd();
  }
}
function EventsListComponent_event_calendar_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-calendar", 26);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("period", \u0275\u0275pipeBind1(1, 1, ctx_r1.period));
  }
}
function EventsListComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "div", 28);
    \u0275\u0275elementStart(2, "p", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.EVENTS_CONFIG_ERROR"), " ");
  }
}
var EventsListComponent = class _EventsListComponent extends AsyncHandler {
  get has_calendar() {
    return this._settings.get("app.group_events_calendar");
  }
  constructor(_settings, _state, _router, _route) {
    super();
    this._settings = _settings;
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this.period = this._state.options.pipe(map((_) => _.period), distinctUntilChanged());
    this.view = "list";
    this.period_list = [];
  }
  ngOnInit() {
    this.subscription("poll_events", this._state.startPolling());
    this.subscription("period", this.period.subscribe(() => {
      this._generatePeriods();
      this._initPeriod();
    }));
    this._generatePeriods();
    this._initPeriod();
    this.subscription("route.query", this._route.queryParamMap.subscribe((q) => {
      if (q.has("view")) {
        this.view = q.get("view");
      }
      if (q.has("period") && q.get("period") !== this._state.period) {
        this.setPeriodType(q.get("period"), false);
      }
      this._generatePeriods();
      if (q.has("range")) {
        this.timeout("update", () => {
          const id = parseInt(q.get("range"), 10);
          const item = this.period_list.find((_) => id >= _.start && id < _.end) || this.period_list[0] || {
            start: id,
            end: this._state.period === "week" ? addWeeks(id, 1).valueOf() : addMonths(id, 1).valueOf()
          };
          this.selected_range = item.id || id;
          this._state.setOptions({
            date: item.start,
            end: item.end
          });
          this.setPeriod(this.selected_range);
        });
      }
    }));
  }
  setView(view) {
    this.view = view;
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { view },
      queryParamsHandling: "merge"
    });
  }
  setPeriodType(type, set_route = true) {
    this._state.setOptions({ period: type });
    if (set_route) {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { period: type },
        queryParamsHandling: "merge"
      });
    }
  }
  setPeriod(id) {
    this.timeout("set_period", () => {
      const item = this.period_list.find((_) => id >= _.start && id < _.end) || this.period_list[0];
      if (!item)
        return;
      this.selected_range = item.id;
      const { start, end } = item;
      this._state.setOptions({ date: start, end });
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { range: id },
        queryParamsHandling: "merge"
      });
    });
  }
  _generatePeriods() {
    this.timeout("generate_periods", () => __async(this, null, function* () {
      const periods = [];
      const period_type = yield nextValueFrom(this.period);
      let date = subMonths(Date.now(), 6).valueOf();
      const end_date = addMonths(Date.now(), 6).valueOf();
      const week_offset = this._settings.get("app.week_start") || 0;
      if (period_type === "month") {
        date = startOfMonth(date).valueOf();
      } else if (period_type === "week") {
        date = startOfWeek(date, {
          weekStartsOn: week_offset
        }).valueOf();
      }
      while (date < end_date) {
        if (period_type === "week") {
          const end = endOfDay(addDays(date, 6)).valueOf();
          periods.push({
            id: date,
            start: date,
            end,
            display: `${format(date, "EEE, do MMM")} \u2013 ${format(end, "do MMM")}`
          });
          date = addDays(date, 7).valueOf();
        } else if (period_type === "month") {
          const end = addDays(addMonths(date, 1), -1).valueOf();
          periods.push({
            id: date,
            start: date,
            end,
            display: `${format(date, "MMMM yyyy")}`
          });
          date = addMonths(date, 1).valueOf();
        } else
          break;
      }
      this.period_list = periods;
    }));
  }
  _initPeriod() {
    this.timeout("update", () => {
      if (this.period_list.length) {
        let index = this.period_list.findIndex((_) => _.start <= Date.now() && _.end >= Date.now());
        if (index < 0)
          index = 0;
        this.setPeriod(this.period_list[index].id);
        this.selected_range = this.period_list[index].id;
      }
    }, 350);
  }
  static {
    this.\u0275fac = function EventsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventsListComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(EventStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsListComponent, selectors: [["app-event-list"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 44, vars: 32, consts: [[1, "absolute", "inset-0", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "p-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "routerLink"], [1, "ml-2"], [1, "text-2xl"], ["filters", "", 1, "flex", "items-center", "space-x-2", "px-8", "pb-4"], ["btn", "", "matRipple", "", 1, "rounded-3xl", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], [1, "h-full", "px-2"], [1, "h-full", "w-px", "bg-base-300"], ["appearance", "outline", 1, "no-subscript", "w-32"], [3, "ngModelChange", "ngModel"], ["value", "week"], ["value", "month"], ["appearance", "outline", 1, "no-subscript", "w-64"], [3, "value", 4, "ngFor", "ngForOf"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-y-auto", "px-8"], ["class", "min-h-full w-full overflow-x-auto", 4, "ngIf"], [3, "period", 4, "ngIf"], ["class", "absolute inset-0 z-50 flex items-center justify-center", 4, "ngIf"], [3, "value"], [1, "min-h-full", "w-full", "overflow-x-auto"], [1, "block"], [3, "period"], [1, "absolute", "inset-0", "z-50", "flex", "items-center", "justify-center"], [1, "absolute", "inset-0", "bg-base-100", "opacity-80"], [1, "max-w-[32rem]", "text-lg", "opacity-60"]], template: function EventsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 3)(6, "div", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "icon", 5);
        \u0275\u0275text(10, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 6)(12, "button", 7);
        \u0275\u0275listener("click", function EventsListComponent_Template_button_click_12_listener() {
          return ctx.setView("list");
        });
        \u0275\u0275elementStart(13, "div", 8)(14, "icon", 9);
        \u0275\u0275text(15, "list");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "button", 7);
        \u0275\u0275listener("click", function EventsListComponent_Template_button_click_19_listener() {
          return ctx.setView("calendar");
        });
        \u0275\u0275elementStart(20, "div", 8)(21, "icon", 9);
        \u0275\u0275text(22, "event");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 10);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 11);
        \u0275\u0275element(27, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-form-field", 13)(29, "mat-select", 14);
        \u0275\u0275pipe(30, "async");
        \u0275\u0275listener("ngModelChange", function EventsListComponent_Template_mat_select_ngModelChange_29_listener($event) {
          return ctx.setPeriodType($event);
        });
        \u0275\u0275elementStart(31, "mat-option", 15);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-option", 16);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "mat-form-field", 17)(38, "mat-select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function EventsListComponent_Template_mat_select_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selected_range, $event) || (ctx.selected_range = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function EventsListComponent_Template_mat_select_ngModelChange_38_listener($event) {
          return ctx.setPeriod($event);
        });
        \u0275\u0275template(39, EventsListComponent_mat_option_39_Template, 2, 2, "mat-option", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "div", 19);
        \u0275\u0275template(41, EventsListComponent_div_41_Template, 2, 0, "div", 20)(42, EventsListComponent_event_calendar_42_Template, 2, 3, "event-calendar", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(43, EventsListComponent_div_43_Template, 5, 3, "div", 22);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 17, "APP.CONCIERGE.EVENTS_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(31, _c06));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 19, "APP.CONCIERGE.EVENTS_ADD"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("inverse", ctx.view !== "list");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 21, "COMMON.LIST"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.view !== "calendar");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 23, "COMMON.CALENDAR"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(30, 25, ctx.period));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 27, "COMMON.WEEK"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 29, "COMMON.MONTH"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.selected_range);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.period_list);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.view === "list");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "calendar");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.has_calendar);
      }
    }, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, MatFormField, MatSelect, MatOption, MatRipple, IconComponent, RouterLink, EventListingComponent, EventCalendarComponent, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=events-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsListComponent, { className: "EventsListComponent", filePath: "apps/concierge/src/app/events/events-list.component.ts", lineNumber: 125 });
})();

// apps/concierge/src/app/events/events.module.ts
var ROUTES = [
  {
    path: "",
    component: EventsComponent,
    children: [{ path: "", component: EventsListComponent }]
  },
  { path: "manage", component: EventManageComponent },
  { path: "manage/:id", component: EventManageComponent },
  { path: "**", redirectTo: "" }
];
var EventsModule = class _EventsModule {
  static {
    this.\u0275fac = function EventsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EventsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      UIModule,
      SharedSpacesModule,
      SharedBookingsModule,
      SharedEventsModule,
      FormFieldsModule,
      RouterModule.forChild(ROUTES)
    ] });
  }
};
export {
  EventsModule
};
//# sourceMappingURL=events.module-NHEDBGOP.js.map
