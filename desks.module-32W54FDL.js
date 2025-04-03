import {
  DesksStateService
} from "./chunk-5O45W7QM.js";
import {
  ExploreDesksService,
  ExploreZoomControlComponent,
  SharedExploreModule
} from "./chunk-YU2I27DN.js";
import {
  MatTabsModule
} from "./chunk-6D57DNK5.js";
import {
  BookingFormService,
  DeskListFieldComponent,
  SharedBookingsModule
} from "./chunk-TTUJQ7FT.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AssetListFieldComponent,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  BookingRulesModalComponent,
  BuildingPipe,
  Clipboard,
  CommonModule,
  CustomTooltipComponent,
  DateFieldComponent,
  DateOptionsComponent,
  DatePipe,
  DefaultValueAccessor,
  Desk,
  DurationFieldComponent,
  ElementRef,
  EventEmitter,
  ExploreStateService,
  FormControlName,
  FormFieldsModule,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  InteractiveMapComponent,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatProgressBar,
  MatProgressSpinner,
  MatRadioModule,
  MatRipple,
  MatSelect,
  MatTooltip,
  NavigationEnd,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  PrintableComponent,
  ReactiveFormsModule,
  RecurrenceFieldComponent,
  Router,
  RouterModule,
  RouterOutlet,
  SafePipe,
  SearchbarComponent,
  SettingsService,
  SimpleTableComponent,
  TimeFieldComponent,
  TranslatePipe,
  UIModule,
  UserListFieldComponent,
  UserSearchFieldComponent,
  __async,
  __spreadProps,
  __spreadValues,
  addDays,
  combineLatest,
  csvToJson,
  downloadFile,
  du,
  endOfDay,
  first,
  generateQRCode,
  i18n,
  jsonToCsv,
  loadTextFileFromInputEvent,
  map,
  nextValueFrom,
  notifyError,
  notifyInfo,
  notifySuccess,
  openConfirmModal,
  randomInt,
  set,
  showBooking,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction7,
  ɵɵpureFunctionV,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-CSOPKK4U.js";

// apps/concierge/src/app/desks/desk-bookings.component.ts
var _c0 = () => ["user_name", "asset_name", "user_email", "asset_id", "status", "group"];
var _c1 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "4rem", sortable: false });
var _c2 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "9rem" });
var _c3 = (a0, a1) => ({ key: "user_name", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "group", name: a0, content: a1 });
var _c5 = (a0) => ({ key: "asset_name", name: a0 });
var _c6 = (a0) => ({ key: "approver", name: a0 });
var _c7 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "8.5rem", sortable: false });
var _c8 = (a0, a1) => ({ key: "checked_in", name: a0, content: a1, size: "7rem", sortable: false });
var _c9 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c10 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
function DeskBookingsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_r1 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, date_r1, "MMM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, date_r1, "dd"));
  }
}
function DeskBookingsComponent_ng_template_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.DESKS_GROUP_EMPTY"), " ");
  }
}
function DeskBookingsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275template(2, DeskBookingsComponent_ng_template_15_span_2_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.group || (row_r2.extension_data == null ? null : row_r2.extension_data.group), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(row_r2.group || (row_r2.extension_data == null ? null : row_r2.extension_data.group)));
  }
}
function DeskBookingsComponent_ng_template_17_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext(2).row;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, row_r3.date, ctx_r3.time_format), " \u2013 ", \u0275\u0275pipeBind2(3, 5, row_r3.date_end, ctx_r3.time_format), " ");
  }
}
function DeskBookingsComponent_ng_template_17_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function DeskBookingsComponent_ng_template_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275template(2, DeskBookingsComponent_ng_template_17_ng_container_1_ng_container_2_Template, 4, 8, "ng-container", 20)(3, DeskBookingsComponent_ng_template_17_ng_container_1_ng_container_3_Template, 3, 3, "ng-container", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !row_r3.all_day && row_r3.duration <= 12 * 60);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r3.all_day || row_r3.duration > 12 * 60);
  }
}
function DeskBookingsComponent_ng_template_17_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, row_r3.deleted ? "APP.CONCIERGE.BOOKING_DELETED" : row_r3.status === "ended" ? "APP.CONCIERGE.BOOKING_ENDED" : "APP.CONCIERGE.BOOKING_EXPIRED"), " ");
  }
}
function DeskBookingsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, DeskBookingsComponent_ng_template_17_ng_container_1_Template, 4, 2, "ng-container", 20)(2, DeskBookingsComponent_ng_template_17_ng_container_2_Template, 4, 3, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r3.status !== "declined" && !row_r3.deleted && row_r3.status !== "ended");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r3.status === "declined" || row_r3.deleted || row_r3.status === "ended");
  }
}
function DeskBookingsComponent_ng_template_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.user_email, " ");
  }
}
function DeskBookingsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DeskBookingsComponent_ng_template_19_div_3_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r5.user_name || row_r5.user_email || row_r5.booked_by_name || row_r5.booked_by_email, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r5.user_name);
  }
}
function DeskBookingsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 27)(2, "div", 28)(3, "div", 29);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-icon", 30);
    \u0275\u0275text(7, " arrow_drop_down ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 7)(10, "button", 31);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_21_Template_button_click_10_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.approve(row_r7));
    });
    \u0275\u0275elementStart(11, "div", 32)(12, "app-icon", 30);
    \u0275\u0275text(13, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 33);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 31);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_21_Template_button_click_17_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.reject(row_r7));
    });
    \u0275\u0275elementStart(18, "div", 32)(19, "app-icon", 30);
    \u0275\u0275text(20, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 33);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const menu_r8 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("!text-success-content", (row_r7 == null ? null : row_r7.status) === "approved")("!bg-success", (row_r7 == null ? null : row_r7.status) === "approved")("!text-error-content", (row_r7 == null ? null : row_r7.status) === "declined")("!bg-error", (row_r7 == null ? null : row_r7.status) === "declined")("!text-neutral-content", (row_r7 == null ? null : row_r7.status) === "ended")("!bg-neutral", (row_r7 == null ? null : row_r7.status) === "ended")("opacity-30", (row_r7 == null ? null : row_r7.status) === "ended");
    \u0275\u0275property("matMenuTriggerFor", menu_r8)("disabled", (row_r7 == null ? null : row_r7.status) === "ended");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 19, (row_r7 == null ? null : row_r7.status) === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : (row_r7 == null ? null : row_r7.status) === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : (row_r7 == null ? null : row_r7.status) === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 21, "APP.CONCIERGE.DESKS_ACTION_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 23, "APP.CONCIERGE.DESKS_ACTION_DECLINE"), " ");
  }
}
function DeskBookingsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 34)(2, "div", 28)(3, "div", 29);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-icon", 30);
    \u0275\u0275text(7, " arrow_drop_down ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 8)(10, "button", 31);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_23_Template_button_click_10_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.checkin(row_r10, true));
    });
    \u0275\u0275elementStart(11, "div", 32)(12, "app-icon", 30);
    \u0275\u0275text(13, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 31);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_23_Template_button_click_17_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.checkin(row_r10, false));
    });
    \u0275\u0275elementStart(18, "div", 32)(19, "app-icon", 30);
    \u0275\u0275text(20, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r11 = ctx.data;
    const row_r10 = ctx.row;
    const checkinMenu_r12 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("!bg-neutral", !data_r11)("!text-neutral-content", !data_r11)("!bg-success", data_r11)("!text-success-content", data_r11)("opacity-30", row_r10.status === "ended");
    \u0275\u0275property("matMenuTriggerFor", checkinMenu_r12)("disabled", row_r10.status === "ended")("matTooltip", row_r10.status === "ended" ? "Desk booking has ended" : "Check-in or check-out desk");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 16, data_r11 ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 18, "COMMON.CHECK_IN"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, "COMMON.CHECK_OUT"));
  }
}
function DeskBookingsComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "button", 36)(2, "app-icon", 30);
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 9)(6, "button", 31);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_25_Template_button_click_6_listener() {
      const row_r14 = \u0275\u0275restoreView(_r13).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cancel(row_r14));
    });
    \u0275\u0275elementStart(7, "div", 32)(8, "app-icon", 30);
    \u0275\u0275text(9, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const actionMenu_r15 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", actionMenu_r15);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 2, "COMMON.CANCEL_BOOKING"), " ");
  }
}
function DeskBookingsComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function DeskBookingsComponent_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadMore());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOAD_MORE"), " ");
  }
}
var DeskBookingsComponent = class _DeskBookingsComponent {
  get columns() {
    return [
      "date",
      "period",
      "user_name",
      "group",
      "asset_name",
      "approver_name",
      "status",
      "checked_in"
    ];
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.filters = this._state.filters;
    this.has_more_pages = this._state.has_more_pages;
    this.bookings = this._state.bookings;
    this.rejectAll = () => this._state.rejectAllDesks();
    this.cancel = (b) => this._state.cancelBooking(b);
    this.loadMore = () => this._state.nextPage();
    this.checkin = (d, s) => this.runMethod("checkin", () => __async(this, null, function* () {
      yield this._state.checkinDesk(d, s);
      d.checked_in = s ?? true;
    }));
    this.approve = (d) => this.runMethod("approve", () => __async(this, null, function* () {
      return this._state.approveDesk(d);
    }));
    this.reject = (d) => this.runMethod("reject", () => __async(this, null, function* () {
      return this._state.rejectDesk(d);
    }));
  }
  runMethod(name, fn) {
    return __async(this, null, function* () {
      this.loading = name;
      yield fn().catch(() => null);
      this.loading = "";
    });
  }
  static {
    this.\u0275fac = function DeskBookingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskBookingsComponent)(\u0275\u0275directiveInject(DesksStateService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskBookingsComponent, selectors: [["desk-bookings"]], standalone: false, decls: 29, vars: 66, consts: [["date_template", ""], ["group_template", ""], ["period_template", ""], ["user_template", ""], ["status_template", ""], ["option_template", ""], ["action_template", ""], ["menu", "matMenu"], ["checkinMenu", "matMenu"], ["actionMenu", "matMenu"], [1, "h-full", "w-full", "overflow-auto", "pb-16"], [1, "block", "min-w-[72rem]", "text-sm", 3, "data", "filter", "filter_on", "columns", "empty_message", "sortable"], ["btn", "", "matRipple", "", "class", "absolute bottom-2 left-4 z-20 w-32", 3, "click", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "py-2"], [1, "opacity-60"], [1, "text-xl"], [1, "p-4", "font-mono", "text-[0.625rem]"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], [1, "p-2"], [4, "ngIf"], [1, "rounded-3xl", "bg-error", "px-4", "py-2", "text-xs", "text-white"], [1, "flex", "flex-col", "justify-center", "px-4", "py-2"], [1, "select-all"], ["class", "select-all text-xs opacity-30", 4, "ngIf"], [1, "select-all", "text-xs", "opacity-30"], [1, "px-2"], ["matRipple", "", 1, "h-10", "w-[7.5rem]", "rounded-3xl", "border-none", "bg-warning", "text-warning-content", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "space-x-2", "pl-4", "pr-2"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], ["matRipple", "", 1, "h-10", "w-[4.5rem]", "rounded-3xl", "border-none", "bg-warning", "text-warning-content", 3, "matMenuTriggerFor", "disabled", "matTooltip"], [1, "mx-auto", "flex", "items-center", "justify-end", "space-x-2"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-4", "z-20", "w-32", 3, "click"]], template: function DeskBookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 10);
        \u0275\u0275element(1, "simple-table", 11);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "async");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275template(13, DeskBookingsComponent_ng_template_13_Template, 7, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, DeskBookingsComponent_ng_template_15_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(17, DeskBookingsComponent_ng_template_17_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(19, DeskBookingsComponent_ng_template_19_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(21, DeskBookingsComponent_ng_template_21_Template, 24, 25, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(23, DeskBookingsComponent_ng_template_23_Template, 24, 22, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(25, DeskBookingsComponent_ng_template_25_Template, 13, 4, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, DeskBookingsComponent_button_27_Template, 3, 3, "button", 12);
        \u0275\u0275pipe(28, "async");
      }
      if (rf & 2) {
        let tmp_8_0;
        let tmp_11_0;
        const date_template_r17 = \u0275\u0275reference(14);
        const group_template_r18 = \u0275\u0275reference(16);
        const period_template_r19 = \u0275\u0275reference(18);
        const user_template_r20 = \u0275\u0275reference(20);
        const status_template_r21 = \u0275\u0275reference(22);
        const option_template_r22 = \u0275\u0275reference(24);
        const action_template_r23 = \u0275\u0275reference(26);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.bookings)("filter", (tmp_8_0 = \u0275\u0275pipeBind1(2, 7, ctx.filters)) == null ? null : tmp_8_0.search)("filter_on", \u0275\u0275pureFunction0(31, _c0))("columns", \u0275\u0275pureFunctionV(56, _c10, [\u0275\u0275pureFunction2(32, _c1, \u0275\u0275pipeBind1(3, 9, "FORM.DATE"), date_template_r17), \u0275\u0275pureFunction2(35, _c2, \u0275\u0275pipeBind1(4, 11, "FORM.PERIOD"), period_template_r19), \u0275\u0275pureFunction2(38, _c3, \u0275\u0275pipeBind1(5, 13, "COMMON.PERSON"), user_template_r20), \u0275\u0275pureFunction2(41, _c4, \u0275\u0275pipeBind1(6, 15, "COMMON.GROUP"), group_template_r18), \u0275\u0275pureFunction1(44, _c5, \u0275\u0275pipeBind1(7, 17, "RESOURCE.DESK")), \u0275\u0275pureFunction1(46, _c6, \u0275\u0275pipeBind1(8, 19, "APP.CONCIERGE.APPROVER")), \u0275\u0275pureFunction2(48, _c7, \u0275\u0275pipeBind1(9, 21, "COMMON.STATUS"), status_template_r21), \u0275\u0275pureFunction2(51, _c8, \u0275\u0275pipeBind1(10, 23, "COMMON.CHECKED_IN"), option_template_r22), \u0275\u0275pureFunction1(54, _c9, action_template_r23)]))("empty_message", \u0275\u0275pipeBind1(12, 27, ((tmp_11_0 = \u0275\u0275pipeBind1(11, 25, ctx.filters)) == null ? null : tmp_11_0.search) ? "APP.CONCIERGE.DESKS_BOOKINGS_SEARCH_EMPTY" : "APP.CONCIERGE.DESKS_BOOKINGS_EMPTY"))("sortable", true);
        \u0275\u0275advance(26);
        \u0275\u0275property("ngIf", !ctx.loading && \u0275\u0275pipeBind1(28, 29, ctx.has_more_pages));
      }
    }, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, SimpleTableComponent, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=desk-bookings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskBookingsComponent, { className: "DeskBookingsComponent", filePath: "apps/concierge/src/app/desks/desk-bookings.component.ts", lineNumber: 318 });
})();

// apps/concierge/src/app/desks/desk-map-view.component.ts
var DeskMapViewComponent = class _DeskMapViewComponent extends AsyncHandler {
  constructor(_state, _desk, _desks_state, _org) {
    super();
    this._state = _state;
    this._desk = _desk;
    this._desks_state = _desks_state;
    this._org = _org;
    this.url = this._state.map_url;
    this.styles = this._state.map_styles;
    this.positions = this._state.map_positions;
    this.actions = this._state.map_actions;
    this.features = this._state.map_features;
    this.setHost = (u) => this._desks_state.setOptions({ host: u });
  }
  ngOnInit() {
    this._desks_state.setOptions({ use_api: true });
    this.subscription("date", this._desk.filters.subscribe((opts) => {
      const level = this._org.levelWithID(opts.zones);
      if (level)
        this._state.setLevel(level.id);
      this._desks_state.setOptions({
        date: opts.date || Date.now(),
        all_day: true,
        zones: opts.zones
      });
    }));
  }
  static {
    this.\u0275fac = function DeskMapViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskMapViewComponent)(\u0275\u0275directiveInject(ExploreStateService), \u0275\u0275directiveInject(DesksStateService), \u0275\u0275directiveInject(ExploreDesksService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskMapViewComponent, selectors: [["desk-map-view"]], standalone: false, features: [\u0275\u0275ProvidersFeature([ExploreDesksService]), \u0275\u0275InheritDefinitionFeature], decls: 13, vars: 19, consts: [["map", "", 1, "relative", "h-full", "w-full"], [3, "src", "zoom", "center", "styles", "features", "actions"], [1, "absolute", "bottom-2", "right-2"], [1, "absolute", "left-0", "top-0", "p-2", "text-black"], ["placeholder", "User for bookings...", 1, "white", 3, "ngModelChange", "ngModel"], ["info", "", 1, "absolute", "bottom-0", "m-2", "rounded", "bg-base-100", "p-2", "text-center", "shadow"]], template: function DeskMapViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "interactive-map", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "async");
        \u0275\u0275pipe(4, "async");
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "async");
        \u0275\u0275element(8, "explore-zoom-controls", 2);
        \u0275\u0275elementStart(9, "div", 3)(10, "a-user-search-field", 4);
        \u0275\u0275listener("ngModelChange", function DeskMapViewComponent_Template_a_user_search_field_ngModelChange_10_listener($event) {
          return ctx.setHost($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275text(12, " Click or Tap an available desk to book it. ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 7, ctx.url))("zoom", \u0275\u0275pipeBind1(3, 9, ctx.positions).zoom)("center", \u0275\u0275pipeBind1(4, 11, ctx.positions).center)("styles", \u0275\u0275pipeBind1(5, 13, ctx.styles))("features", \u0275\u0275pipeBind1(6, 15, ctx.features))("actions", \u0275\u0275pipeBind1(7, 17, ctx.actions));
        \u0275\u0275advance(9);
        \u0275\u0275property("ngModel", null);
      }
    }, dependencies: [NgControlStatus, NgModel, UserSearchFieldComponent, InteractiveMapComponent, ExploreZoomControlComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n[info][_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=desk-map-view.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskMapViewComponent, { className: "DeskMapViewComponent", filePath: "apps/concierge/src/app/desks/desk-map-view.component.ts", lineNumber: 58 });
})();

// apps/concierge/src/app/desks/desks-manage.component.ts
var _c02 = (a0, a1) => ({ key: "id", name: a0, content: a1, size: "10rem" });
var _c12 = (a0) => ({ key: "name", name: a0 });
var _c22 = (a0) => ({ key: "assigned_to", name: "Assigned", content: a0 });
var _c32 = (a0, a1) => ({ key: "features", name: a0, content: a1 });
var _c42 = (a0) => ({ key: "security", name: a0 });
var _c52 = (a0, a1) => ({ key: "bookable", name: a0, content: a1, size: "5.5rem" });
var _c62 = (a0) => ({ key: "actions", name: " ", content: a0, size: "8.5rem", sortable: false });
var _c72 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function DesksManageComponent_ng_template_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.map_id, " ");
  }
}
function DesksManageComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_10_Template_button_click_0_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(row_r3.map_id || row_r3.id));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DesksManageComponent_ng_template_10_div_3_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.id || row_r3.map_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r3.id && row_r3.map_id !== row_r3.id);
  }
}
function DesksManageComponent_ng_template_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5, " ");
  }
}
function DesksManageComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, DesksManageComponent_ng_template_12_span_1_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", data_r6);
  }
}
function DesksManageComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "app-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275classProp("bg-error", !data_r7)("bg-success", data_r7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r7 ? "done" : "close");
  }
}
function DesksManageComponent_ng_template_16_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.UNASSIGNED"), " ");
  }
}
function DesksManageComponent_ng_template_16_button_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r9 = \u0275\u0275nextContext(2).data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r9, " ");
  }
}
function DesksManageComponent_ng_template_16_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_16_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const data_r9 = \u0275\u0275nextContext().data;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(data_r9, "assigned"));
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DesksManageComponent_ng_template_16_button_1_div_3_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const row_r11 = ctx_r9.row;
    const data_r9 = ctx_r9.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.assigned_name || data_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r11.assigned_name);
  }
}
function DesksManageComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DesksManageComponent_ng_template_16_div_0_Template, 3, 3, "div", 17)(1, DesksManageComponent_ng_template_16_button_1_Template, 4, 2, "button", 18);
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    \u0275\u0275property("ngIf", !data_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r9);
  }
}
function DesksManageComponent_ng_template_18_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "a", 28);
    \u0275\u0275pipe(3, "safe");
    \u0275\u0275element(4, "img", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 31);
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_18_ng_template_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.print());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r13 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(3, 4, row_r13.qr_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", row_r13.qr_code, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r13.name || row_r13.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "APP.CONCIERGE.DESKS_ACTION_PRINT_QR"), " ");
  }
}
function DesksManageComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_18_Template_button_click_1_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadQrCode(row_r13));
    });
    \u0275\u0275elementStart(3, "app-icon");
    \u0275\u0275text(4, "qr_code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_18_Template_button_click_5_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editDesk(row_r13));
    });
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 24);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_18_Template_button_click_9_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeDesk(row_r13));
    });
    \u0275\u0275elementStart(11, "app-icon", 25);
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, DesksManageComponent_ng_template_18_ng_template_13_Template, 10, 9, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qr_menu_r15 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("content", qr_menu_r15)("matTooltip", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.DESKS_ACTION_PRINT_QR"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 6, "APP.CONCIERGE.DESKS_ACTION_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 8, "APP.CONCIERGE.DESKS_ACTION_REMOVE"));
  }
}
function DesksManageComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "mat-spinner", 33);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.loading);
  }
}
function DesksManageComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 37);
    \u0275\u0275listener("change", function DesksManageComponent_div_21_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadCSVData($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.DESKS_DROP_TEMPLATE"), " ");
  }
}
var DesksManageComponent = class _DesksManageComponent extends AsyncHandler {
  constructor(_state, _org, _dialog, _settings, _element, _clipboard) {
    super();
    this._state = _state;
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._element = _element;
    this._clipboard = _clipboard;
    this.dragging = false;
    this.filters = this._state.filters;
    this.desks = this._state.desks;
    this.editDesk = (desk) => this._state.editDesk(desk);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess(i18n("APP.CONCIERGE.DESKS_ID_COPIED"));
    };
  }
  removeDesk(desk) {
    return __async(this, null, function* () {
      const resp = yield openConfirmModal({
        title: i18n("APP.CONCIERGE.DESKS_REMOVE_TITLE"),
        content: i18n("APP.CONCIERGE.DESKS_REMOVE_MSG", {
          name: desk.name
        }),
        icon: { content: "delete" }
      }, this._dialog);
      if (resp.reason !== "done")
        return;
      resp.close();
      const desks = yield nextValueFrom(this.desks);
      const updated_desks = desks.filter((_) => _.id !== desk.id);
      const filters = yield nextValueFrom(this.filters);
      const level = this._org.levelWithID(filters.zones);
      this.loading = i18n("APP.CONCIERGE.DESKS_REMOVE_LOADING");
      yield du(level.id, {
        name: "desks",
        description: "desks",
        details: updated_desks
      }).toPromise().catch((e) => {
        this.loading = "";
        notifyError(i18n("APP.CONCIERGE.DESKS_REMOVE_ERROR", {
          error: e.message || e
        }));
        throw e;
      });
      notifySuccess(i18n("APP.CONCIERGE.DESKS_REMOVE_SUCCESS"));
      this._state.setFilters({});
      this.loading = "";
    });
  }
  get kiosk_url() {
    const path = this._settings.get("app.workplace_url_path") || "/workplace";
    return `${window.location.origin}${path}`;
  }
  loadQrCode(item) {
    const link = `${this.kiosk_url}/#/book/code?asset_id=${encodeURIComponent(item.id)}`;
    item.qr_link = link;
    item.qr_code = generateQRCode(link);
  }
  print() {
    window.print();
  }
  loadCSVData(event) {
    return __async(this, null, function* () {
      this.loading = i18n("APP.CONCIERGE.DESKS_UPLOADING");
      this.dragging = false;
      const data = yield loadTextFileFromInputEvent(event).catch(([m, e]) => {
        notifyError(m);
        throw e;
      });
      try {
        const list = csvToJson(data) || [];
        this._state.addDesks(list.map((_) => new Desk(__spreadProps(__spreadValues({}, _), {
          id: _.id || `desk-${randomInt(999999)}`
        }))));
      } catch (e) {
        console.error(e);
      }
      this.loading = "";
    });
  }
  handleDrag(type, event) {
    this.dragging = type === "enter";
  }
  static {
    this.\u0275fac = function DesksManageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DesksManageComponent)(\u0275\u0275directiveInject(DesksStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Clipboard));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesksManageComponent, selectors: [["desks-manage"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 22, vars: 48, consts: [["name_template", ""], ["item_list_template", ""], ["bool_template", ""], ["assigned_template", ""], ["action_template", ""], ["qr_menu", ""], [1, "h-full", "w-full", "overflow-auto", "pb-4", 3, "dragenter", "dragend"], [1, "block", "w-full", "min-w-[72rem]", "text-sm", 3, "filter", "data", "columns", "sortable", "empty_message"], ["class", "absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-base-100 bg-opacity-60", 4, "ngIf"], ["class", "absolute inset-0 flex items-center justify-center bg-neutral", 4, "ngIf"], [1, "flex", "flex-col", "px-4", "py-2", "text-left", "leading-tight", 3, "click"], ["class", "font-mono text-[0.625rem] opacity-30", 4, "ngIf"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "flex-wrap", "p-2"], ["class", "m-1 rounded-2xl bg-info px-2 py-1 font-mono text-xs text-info-content", 4, "ngFor", "ngForOf"], [1, "m-1", "rounded-2xl", "bg-info", "px-2", "py-1", "font-mono", "text-xs", "text-info-content"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "text-2xl", "text-white"], ["class", "p-4 opacity-30", 4, "ngIf"], ["class", "px-4 py-2 text-left leading-tight", 3, "click", 4, "ngIf"], [1, "p-4", "opacity-30"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "flex", "items-center", "justify-end", "space-x-2", "p-2"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "content", "matTooltip"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"], [1, "rounded", "bg-base-100", "py-2", "shadow"], ["printable", "", 1, ""], ["target", "_blank", "ref", "noopener noreferrer", 1, "mx-4", "my-2", "block", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2", 3, "href"], [1, "w-48", 3, "src"], [1, "mx-4", "mt-2", "w-[calc(100%-2rem)]", "rounded", "bg-base-200", "p-2", "text-center", "font-mono", "text-sm"], ["btn", "", "matRipple", "", 1, "mx-4", "my-2", "w-[calc(100%-2rem)]", 3, "click"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "bg-base-100", "bg-opacity-60"], ["diameter", "32"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "bg-neutral"], [1, "rounded", "bg-base-100", "p-4", "shadow"], [1, "flex", "h-64", "w-64", "flex-col", "items-center", "justify-center", "rounded", "border-4", "border-dashed", "border-base-200"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"]], template: function DesksManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 6);
        \u0275\u0275listener("dragenter", function DesksManageComponent_Template_div_dragenter_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleDrag("enter", $event));
        })("dragend", function DesksManageComponent_Template_div_dragend_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleDrag("end", $event));
        }, false, \u0275\u0275resolveWindow);
        \u0275\u0275element(1, "simple-table", 7);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "async");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275template(10, DesksManageComponent_ng_template_10_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, DesksManageComponent_ng_template_12_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(14, DesksManageComponent_ng_template_14_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(16, DesksManageComponent_ng_template_16_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(18, DesksManageComponent_ng_template_18_Template, 15, 10, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(20, DesksManageComponent_div_20_Template, 4, 1, "div", 8)(21, DesksManageComponent_div_21_Template, 6, 3, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_9_0;
        const name_template_r17 = \u0275\u0275reference(11);
        const item_list_template_r18 = \u0275\u0275reference(13);
        const bool_template_r19 = \u0275\u0275reference(15);
        const assigned_template_r20 = \u0275\u0275reference(17);
        const action_template_r21 = \u0275\u0275reference(19);
        \u0275\u0275advance();
        \u0275\u0275property("filter", (tmp_5_0 = \u0275\u0275pipeBind1(2, 7, ctx.filters)) == null ? null : tmp_5_0.search)("data", ctx.desks)("columns", \u0275\u0275pureFunction7(40, _c72, \u0275\u0275pureFunction2(23, _c02, \u0275\u0275pipeBind1(3, 9, "APP.CONCIERGE.DESKS_ID"), name_template_r17), \u0275\u0275pureFunction1(26, _c12, \u0275\u0275pipeBind1(4, 11, "APP.CONCIERGE.DESKS_NAME")), \u0275\u0275pureFunction1(28, _c22, assigned_template_r20), \u0275\u0275pureFunction2(30, _c32, \u0275\u0275pipeBind1(5, 13, "COMMON.FEATURES"), item_list_template_r18), \u0275\u0275pureFunction1(33, _c42, \u0275\u0275pipeBind1(6, 15, "APP.CONCIERGE.DESKS_SECURITY")), \u0275\u0275pureFunction2(35, _c52, \u0275\u0275pipeBind1(7, 17, "COMMON.BOOKABLE"), bool_template_r19), \u0275\u0275pureFunction1(38, _c62, action_template_r21)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(9, 21, ((tmp_9_0 = \u0275\u0275pipeBind1(8, 19, ctx.filters)) == null ? null : tmp_9_0.search) ? "APP.CONCIERGE.DESKS_MANAGE_SEARCH_EMPTY" : "APP.CONCIERGE.DESKS_MANAGE_EMPTY"));
        \u0275\u0275advance(19);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dragging);
      }
    }, dependencies: [NgForOf, NgIf, MatTooltip, MatProgressSpinner, MatRipple, IconComponent, CustomTooltipComponent, SimpleTableComponent, PrintableComponent, AsyncPipe, SafePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesksManageComponent, { className: "DesksManageComponent", filePath: "apps/concierge/src/app/desks/desks-manage.component.ts", lineNumber: 228 });
})();

// apps/workplace/src/app/book/desk-flow/desk-form-details.component.ts
var _c03 = () => ({ standalone: true });
var _c13 = () => [];
var _c23 = (a0, a1, a2) => ({ date: a0, duration: a1, all_day: a2 });
function NewDeskFormDetailsComponent_div_0_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 20)(1, "button", 21);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("click", function NewDeskFormDetailsComponent_div_0_section_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ group: false, members: [] }));
    });
    \u0275\u0275elementStart(3, "app-icon", 22);
    \u0275\u0275text(4, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 24);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 21);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275listener("click", function NewDeskFormDetailsComponent_div_0_section_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ group: true }));
    });
    \u0275\u0275elementStart(13, "app-icon", 22);
    \u0275\u0275text(14, "group_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 23);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "div", 24);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-secondary", !((tmp_2_0 = \u0275\u0275pipeBind1(2, 14, ctx_r1.options)) == null ? null : tmp_2_0.group));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 16, "BOOKINGS.DESK_LONE"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", (tmp_4_0 = \u0275\u0275pipeBind1(9, 18, ctx_r1.options)) == null ? null : tmp_4_0.group)("bg-secondary", !((tmp_5_0 = \u0275\u0275pipeBind1(10, 20, ctx_r1.options)) == null ? null : tmp_5_0.group));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-secondary", (tmp_6_0 = \u0275\u0275pipeBind1(12, 22, ctx_r1.options)) == null ? null : tmp_6_0.group);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 24, "BOOKINGS.DESK_GROUP"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", !((tmp_8_0 = \u0275\u0275pipeBind1(19, 26, ctx_r1.options)) == null ? null : tmp_8_0.group))("bg-secondary", (tmp_9_0 = \u0275\u0275pipeBind1(20, 28, ctx_r1.options)) == null ? null : tmp_9_0.group);
  }
}
function NewDeskFormDetailsComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-search-field", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "FORM.HOST"), "");
  }
}
function NewDeskFormDetailsComponent_div_0_mat_checkbox_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function NewDeskFormDetailsComponent_div_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "label", 30);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 31);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_34_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 29)(9, "label", 32);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 12, "FORM.TIME_START"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(16, _c03))("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "FORM.TIME_END"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("time", (tmp_8_0 = ctx_r1.form.get("date")) == null ? null : tmp_8_0.value)("max", ctx_r1.max_duration)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
  }
}
function NewDeskFormDetailsComponent_div_0_div_35_mat_checkbox_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.UPDATE_FUTURE"), " ");
  }
}
function NewDeskFormDetailsComponent_div_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "label", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "recurrence-field", 36);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_35_Template_recurrence_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRecurrenceChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, NewDeskFormDetailsComponent_div_0_div_35_mat_checkbox_7_Template, 3, 3, "mat-checkbox", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.RECURRENCE"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("date", ctx_r1.form.getRawValue().date)("ngModel", ctx_r1.form.value)("ngModelOptions", \u0275\u0275pureFunction0(7, _c03));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.value.id);
  }
}
function NewDeskFormDetailsComponent_div_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "mat-checkbox", 39);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_36_Template_mat_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ secondary_resource: $event ? "locker" : "" }));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", !!ctx_r1.form.value.secondary_resource)("ngModelOptions", \u0275\u0275pureFunction0(5, _c03));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "BOOKINGS.DESK_REQUIRE_LOCKER"), " ");
  }
}
function NewDeskFormDetailsComponent_div_0_section_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3)(1, "h3", 28)(2, "div", 5);
    \u0275\u0275text(3, " 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 41)(9, "a-user-list-field", 42);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_div_0_section_37_Template_a_user_list_field_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ members: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "BOOKINGS.DESK_GROUP_MEMBERS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ((tmp_3_0 = \u0275\u0275pipeBind1(10, 5, ctx_r1.options)) == null ? null : tmp_3_0.members) || \u0275\u0275pureFunction0(7, _c13))("ngModelOptions", \u0275\u0275pureFunction0(8, _c03));
  }
}
function NewDeskFormDetailsComponent_div_0_section_39_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.DESK_GROUP_INFO"), " ");
  }
}
function NewDeskFormDetailsComponent_div_0_section_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "h3", 4)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "desk-list-field", 43);
    \u0275\u0275template(9, NewDeskFormDetailsComponent_div_0_section_39_p_9_Template, 3, 3, "p", 44);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = \u0275\u0275pipeBind1(4, 3, ctx_r1.options)) == null ? null : tmp_2_0.group) ? 3 : 2, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "RESOURCE.DESK"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_4_0 = \u0275\u0275pipeBind1(10, 7, ctx_r1.options)) == null ? null : tmp_4_0.group);
  }
}
function NewDeskFormDetailsComponent_div_0_section_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "h3", 4)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "asset-list-field", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = \u0275\u0275pipeBind1(4, 3, ctx_r1.options)) == null ? null : tmp_2_0.group) ? 4 : 3, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "RESOURCE.ASSETS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("options", \u0275\u0275pureFunction3(7, _c23, ctx_r1.form.getRawValue().date, ctx_r1.form.value.duration, ctx_r1.form.value.all_day));
  }
}
function NewDeskFormDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, NewDeskFormDetailsComponent_div_0_section_1_Template, 21, 30, "section", 2);
    \u0275\u0275elementStart(2, "section", 3)(3, "h3", 4)(4, "div", 5);
    \u0275\u0275text(5, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, NewDeskFormDetailsComponent_div_0_div_9_Template, 7, 3, "div", 7);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "label", 10);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-form-field", 11);
    \u0275\u0275element(19, "input", 12);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "mat-error");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 13)(25, "label", 14);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "a-date-field", 15);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, NewDeskFormDetailsComponent_div_0_mat_checkbox_33_Template, 3, 3, "mat-checkbox", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, NewDeskFormDetailsComponent_div_0_div_34_Template, 15, 17, "div", 17)(35, NewDeskFormDetailsComponent_div_0_div_35_Template, 8, 8, "div", 18)(36, NewDeskFormDetailsComponent_div_0_div_36_Template, 5, 6, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, NewDeskFormDetailsComponent_div_0_section_37_Template, 11, 9, "section", 19);
    \u0275\u0275pipe(38, "async");
    \u0275\u0275template(39, NewDeskFormDetailsComponent_div_0_section_39_Template, 11, 9, "section", 19)(40, NewDeskFormDetailsComponent_div_0_section_40_Template, 9, 11, "section", 19);
    \u0275\u0275pipe(41, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_17_0;
    let tmp_19_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allow_groups);
    \u0275\u0275advance();
    \u0275\u0275classProp("!border-none", ctx_r1.allow_groups);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 20, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.can_book_for_others && !((tmp_5_0 = \u0275\u0275pipeBind1(10, 22, ctx_r1.options)) == null ? null : tmp_5_0.group));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 24, "FORM.TITLE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 26, "BOOKINGS.DESK_TITLE_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 28, "FORM.TITLE_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 30, "FORM.DATE"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("to", ctx_r1.end_date)("timezone", ctx_r1.timezone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 32, "FORM.DATE_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.allow_all_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.form.value.all_day && ctx_r1.allow_time_changes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.can_recurr);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.can_book_lockers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_17_0 = \u0275\u0275pipeBind1(38, 34, ctx_r1.options)) == null ? null : tmp_17_0.group);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.contains("resources"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.has_assets && !((tmp_19_0 = \u0275\u0275pipeBind1(41, 36, ctx_r1.options)) == null ? null : tmp_19_0.group));
  }
}
var NewDeskFormDetailsComponent = class _NewDeskFormDetailsComponent extends AsyncHandler {
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get max_duration() {
    return this._settings.get("app.desks.max_duration") || this._settings.get("app.bookings.max_duration") || 8 * 60;
  }
  get can_book_for_others() {
    return this._settings.get("app.bookings.can_book_for_others") || this._settings.get("app.desks.can_book_for_others");
  }
  get can_book_lockers() {
    return this._settings.get("app.desks.can_book_lockers");
  }
  get can_recurr() {
    return this._settings.get("app.desks.allow_recurrence");
  }
  get allow_groups() {
    return this._settings.get("app.desks.allow_groups");
  }
  get has_assets() {
    return !!this._settings.get("app.bookings.has_assets") || !!this._settings.get("app.desks.has_assets");
  }
  get needs_reason() {
    return this._settings.get("app.desks.needs_reason") === true;
  }
  get allow_time_changes() {
    return this._settings.get("app.desks.allow_time_changes") !== false;
  }
  get allow_all_day() {
    return this.allow_time_changes && (!!this._settings.get("app.desks.allow_all_day") || !!this._settings.get("app.bookings.allow_all_day"));
  }
  get timezone() {
    return this._settings.get("app.bookings.use_building_timezone") || this._settings.get("app.desks.use_building_timezone") ? this._org.building.timezone : "";
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.desks.available_period") || 90)).valueOf();
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  constructor(_state, _org, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.find = new EventEmitter();
    this.buildings = this._org.building_list;
    this.levels = this._org.active_levels;
    this.options = this._state.options;
    this.features = this._state.features;
    this.force_time = set(Date.now(), {
      hours: 6,
      minutes: 0
    }).valueOf();
    this.from_id = false;
    this.recurrence_options = ["daily", "weekly", "monthly"];
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
  }
  ngOnChanges(changes) {
    if (changes.form && this.form) {
      if (this.selected_desk?.id) {
        this.form.patchValue({ resources: [this.selected_desk] });
      }
    }
  }
  onRecurrenceChange(recurrence) {
    this.form.patchValue(recurrence);
  }
  static {
    this.\u0275fac = function NewDeskFormDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskFormDetailsComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFormDetailsComponent, selectors: [["desk-form-details"]], inputs: { form: "form" }, outputs: { find: "find" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "space-y-2 divide-y divide-base-200", 3, "formGroup", 4, "ngIf"], [1, "space-y-2", "divide-y", "divide-base-200", 3, "formGroup"], ["class", "flex items-center", 4, "ngIf"], [1, "p-2"], [1, "mb-4", "flex", "items-center", "space-x-2"], [1, "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "bg-base-200"], [1, "text-xl"], ["class", "w-full", 4, "ngIf"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "title", "formControlName", "title", 3, "placeholder"], [1, "relative", "min-w-[256px]", "flex-1"], ["for", "date"], ["name", "date", "formControlName", "date", 3, "to", "timezone"], ["formControlName", "all_day", "class", "absolute -top-2 right-0", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["class", "flex flex-col", 4, "ngIf"], ["class", "p-2", 4, "ngIf"], [1, "flex", "items-center"], ["matRipple", "", 1, "relative", "flex", "h-16", "flex-1", "items-center", "justify-center", "space-x-2", 3, "click"], [1, "text-2xl"], [1, ""], [1, "absolute", "inset-x-0", "bottom-0", "!m-0", "h-1"], [1, "w-full"], ["formControlName", "user", 1, "mb-4"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], [1, "flex", "items-center", "space-x-2"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr", "timezone"], [1, "flex", "flex-col"], ["for", "recurrence"], ["name", "recurrence", 3, "ngModelChange", "date", "ngModel", "ngModelOptions"], ["formControlName", "update_master", 4, "ngIf"], ["formControlName", "update_master"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "w-px", "flex-1"], [1, "overflow-hidden"], [1, "mt-4", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["formControlName", "resources"], ["class", "rounded bg-warning px-2 py-1 text-center text-xs shadow", 4, "ngIf"], [1, "rounded", "bg-warning", "px-2", "py-1", "text-center", "text-xs", "shadow"], ["formControlName", "assets", 3, "options"]], template: function NewDeskFormDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NewDeskFormDetailsComponent_div_0_Template, 42, 38, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, MatFormField, MatError, MatInput, MatCheckbox, MatRipple, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, UserListFieldComponent, UserSearchFieldComponent, RecurrenceFieldComponent, IconComponent, AssetListFieldComponent, DeskListFieldComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFormDetailsComponent, { className: "NewDeskFormDetailsComponent", filePath: "apps/workplace/src/app/book/desk-flow/desk-form-details.component.ts", lineNumber: 260 });
})();

// apps/concierge/src/app/desks/desk-book-modal.component.ts
var DeskBookModalComponent = class _DeskBookModalComponent {
  get form() {
    return this._booking_form.form;
  }
  constructor(_booking_form, _dialog_ref, _settings) {
    this._booking_form = _booking_form;
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this.event = new EventEmitter();
    this.loading = new BehaviorSubject(false);
    if (!this.form.value.id) {
      this.form.patchValue({
        duration: this._settings.get("app.desks.default_duration") || 60
      });
    }
  }
  save() {
    return __async(this, null, function* () {
      this.loading.next(true);
      this.form.patchValue({ booking_type: "desk" });
      const event = yield this._booking_form.postForm().catch((_) => {
        notifyError(_);
        this.loading.next(false);
        throw _;
      });
      this.event.emit({ reason: "done", metadata: event });
      notifySuccess(i18n("APP.CONCIERGE.DESKS_BOOKING_SUCCESS"));
      this._dialog_ref.close();
      this.loading.next(false);
    });
  }
  static {
    this.\u0275fac = function DeskBookModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskBookModalComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskBookModalComponent, selectors: [["desk-book-modal"]], outputs: { event: "event" }, standalone: false, decls: 5, vars: 9, consts: [[3, "confirm", "heading", "loading"], [3, "form"]], template: function DeskBookModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275listener("confirm", function DeskBookModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275element(4, "desk-form-details", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 3, ctx.form.value.id ? "APP.CONCIERGE.DESKS_BOOK_EDIT" : "APP.CONCIERGE.DESKS_BOOK_NEW"))("loading", \u0275\u0275pipeBind1(2, 5, ctx.loading) ? \u0275\u0275pipeBind1(3, 7, "APP.CONCIERGE.DESKS_BOOKING_LOADING") : "");
        \u0275\u0275advance(4);
        \u0275\u0275property("form", ctx.form);
      }
    }, dependencies: [FullscreenModalShellComponent, NewDeskFormDetailsComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskBookModalComponent, { className: "DeskBookModalComponent", filePath: "apps/concierge/src/app/desks/desk-book-modal.component.ts", lineNumber: 36 });
})();

// apps/concierge/src/app/desks/desks-topbar.component.ts
function DesksTopbarComponent_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LEVEL_ALL"), " ");
  }
}
function DesksTopbarComponent_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
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
function DesksTopbarComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function DesksTopbarComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newDeskBooking());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.NEW_BOOKING"), " ");
  }
}
function DesksTopbarComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function DesksTopbarComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newDesk());
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.DESKS_NEW"));
  }
}
function DesksTopbarComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 16);
    \u0275\u0275listener("change", function DesksTopbarComponent_button_11_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadCSVData($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.DESKS_LIST_UPLOAD"));
  }
}
function DesksTopbarComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function DesksTopbarComponent_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadTemplate());
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.DESKS_LIST_DOWNLOAD"));
  }
}
function DesksTopbarComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function DesksTopbarComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.manageRestrictions());
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "lock_open");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.DESKS_BOOKING_RULES"));
  }
}
var DesksTopbarComponent = class _DesksTopbarComponent extends AsyncHandler {
  constructor(_desks, _org, _route, _router, _dialog) {
    super();
    this._desks = _desks;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    this.levels = this._org.active_levels;
    this.filters = this._desks.filters;
    this.manage = false;
    this.is_map = false;
    this.setDate = (date) => this._desks.setFilters({ date });
    this.setFilters = (o) => this._desks.setFilters(o);
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
      this._desks.setFilters({ zones });
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
        if (params.has("zone_ids")) {
          const zones = params.get("zone_ids").split(",");
          if (zones.length) {
            this.updateZones(zones);
            const level = this._org.levelWithID(zones);
            if (!level)
              return;
            this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          }
        }
        if (params.has("date")) {
          this.setDate(/* @__PURE__ */ new Date(+params.get("date")));
        }
        if (params.has("approve")) {
          this.approve(params.get("approve"));
        } else if (params.has("reject")) {
          this.reject(params.get("reject"));
        }
        this.manage = this._router.url?.includes("manage");
        this.is_map = this._router.url?.includes("map");
      }));
      this.subscription("router.events", this._router.events.subscribe(() => {
        this.manage = this._router.url?.includes("manage");
        this.is_map = this._router.url?.includes("map");
      }));
      this.subscription("levels", this._org.active_levels.subscribe((levels) => __async(this, null, function* () {
        const filters = yield nextValueFrom(this.filters);
        const zones = filters?.zones?.filter((zone) => levels.find((lvl) => lvl.id === zone) || zone === "All") || [];
        if (!zones.length && levels.length) {
          zones.push(levels[0].id);
        }
        this.updateZones(zones);
      })));
      this.manage = this._router.url?.includes("manage");
      this.is_map = this._router.url?.includes("map");
    });
  }
  newDesk() {
    const desk = new Desk({ id: `desk-${randomInt(999999)}` });
    desk.staff_name = `[NEW_DESK]`;
    this._desks.addDesks([desk]);
    notifyInfo("New desk added to local data.", void 0, () => notifyInfo("Make sure to save the new desk before using it."));
  }
  newDeskBooking() {
    this._dialog.open(DeskBookModalComponent, {});
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "desk" }
    });
  }
  loadCSVData(event) {
    return __async(this, null, function* () {
      const data = yield loadTextFileFromInputEvent(event).catch(([m, e]) => {
        notifyError(m);
        throw e;
      });
      try {
        const list = csvToJson(data) || [];
        this._desks.addDesks(list.map((_) => new Desk(__spreadProps(__spreadValues({}, _), {
          id: _.id || `desk-${randomInt(999999)}`
        }))));
      } catch (e) {
        console.error(e);
      }
    });
  }
  downloadTemplate() {
    const desk = new Desk({
      id: "desk-123",
      name: "Test Desk",
      bookable: true,
      groups: ["test-desk-group", "desk-bookers"],
      features: ["Standing Desk", "Dual Monitor"]
    }).toJSON();
    delete desk.images;
    const data = jsonToCsv([desk]);
    downloadFile("desk-template.csv", data);
  }
  /**
   * Aprrove a desk booking
   * @param id Booking ID to approve
   */
  approve(id) {
    return __async(this, null, function* () {
      const booking = yield showBooking(id).toPromise();
      if (booking) {
        this._desks.approveDesk(booking);
      }
    });
  }
  /**
   * Reject a desk booking
   * @param id Booking ID to reject
   */
  reject(id) {
    return __async(this, null, function* () {
      const booking = yield showBooking(id).toPromise();
      if (booking) {
        this._desks.rejectDesk(booking);
      }
    });
  }
  static {
    this.\u0275fac = function DesksTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DesksTopbarComponent)(\u0275\u0275directiveInject(DesksStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesksTopbarComponent, selectors: [["desks-topbar"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 18, vars: 20, consts: [[1, "flex", "h-20", "items-center", "space-x-2", "border-b", "border-base-200", "bg-base-100", "px-4"], ["appearance", "outline"], [3, "ngModelChange", "ngModel", "placeholder"], ["value", "All", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "class", "mx-2 w-40", "matTooltip", "New Desk Booking", 3, "click", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "mx-2 rounded bg-primary text-white", 3, "matTooltip", "click", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "relative rounded bg-primary text-white", 3, "matTooltip", 4, "ngIf"], [1, "w-2", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], [3, "dateChange"], ["value", "All"], [3, "value"], ["btn", "", "matRipple", "", "matTooltip", "New Desk Booking", 1, "mx-2", "w-40", 3, "click"], ["btn", "", "icon", "", "matRipple", "", 1, "mx-2", "rounded", "bg-primary", "text-white", 3, "click", "matTooltip"], ["btn", "", "icon", "", "matRipple", "", 1, "relative", "rounded", "bg-primary", "text-white", 3, "matTooltip"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"]], template: function DesksTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
        \u0275\u0275pipe(3, "async");
        \u0275\u0275pipe(4, "async");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275listener("ngModelChange", function DesksTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          return ctx.updateZones([$event]);
        });
        \u0275\u0275template(6, DesksTopbarComponent_mat_option_6_Template, 3, 3, "mat-option", 3)(7, DesksTopbarComponent_mat_option_7_Template, 2, 2, "mat-option", 4);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, DesksTopbarComponent_button_9_Template, 3, 3, "button", 5)(10, DesksTopbarComponent_button_10_Template, 4, 3, "button", 6)(11, DesksTopbarComponent_button_11_Template, 5, 3, "button", 7)(12, DesksTopbarComponent_button_12_Template, 4, 3, "button", 6)(13, DesksTopbarComponent_button_13_Template, 4, 3, "button", 6);
        \u0275\u0275element(14, "div", 8);
        \u0275\u0275elementStart(15, "searchbar", 9);
        \u0275\u0275pipe(16, "async");
        \u0275\u0275listener("modelChange", function DesksTopbarComponent_Template_searchbar_modelChange_15_listener($event) {
          return ctx.setFilters({ search: $event });
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "date-options", 10);
        \u0275\u0275listener("dateChange", function DesksTopbarComponent_Template_date_options_dateChange_17_listener($event) {
          return ctx.setDate($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_9_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(3, 10, ctx.filters).zones ? \u0275\u0275pipeBind1(4, 12, ctx.filters).zones[0] : "All")("placeholder", \u0275\u0275pipeBind1(5, 14, "COMMON.LEVEL_ALL"));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.is_map);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(8, 16, ctx.levels));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.manage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.manage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.manage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.manage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.manage);
        \u0275\u0275advance(2);
        \u0275\u0275property("model", (tmp_9_0 = \u0275\u0275pipeBind1(16, 18, ctx.filters)) == null ? null : tmp_9_0.search);
      }
    }, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, MatFormField, MatSelect, MatOption, MatTooltip, MatRipple, IconComponent, AsyncPipe, TranslatePipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=desks-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesksTopbarComponent, { className: "DesksTopbarComponent", filePath: "apps/concierge/src/app/desks/desks-topbar.component.ts", lineNumber: 127 });
})();

// apps/concierge/src/app/desks/desk-qr-code-modal.component.ts
function DeskQrCodeModalComponent_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275element(3, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const desk_r1 = ctx.$implicit;
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 3, desk_r1.qr_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", desk_r1.qr_code, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", desk_r1.name || desk_r1.id, " ");
  }
}
var DeskQrCodeModalComponent = class _DeskQrCodeModalComponent {
  get kiosk_url() {
    const path = this._settings.get("app.workplace_url_path") || "/workplace";
    return `${window.location.origin}${path}`;
  }
  constructor(_settings, _state) {
    this._settings = _settings;
    this._state = _state;
    this.print = () => window.print();
    this.desks = this._state.desks.pipe(map((list) => list.map((_) => {
      this.loadQrCode(_);
      return _;
    })));
  }
  loadQrCode(item) {
    const link = `${this.kiosk_url}/#/book/code?asset_id=${encodeURIComponent(item.id)}`;
    item.qr_link = link;
    item.qr_code = generateQRCode(link);
    return item.qr_code;
  }
  static {
    this.\u0275fac = function DeskQrCodeModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskQrCodeModalComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(DesksStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskQrCodeModalComponent, selectors: [["desk-qr-code-modal"]], standalone: false, decls: 11, vars: 6, consts: [[1, "relative", "min-h-screen", "w-screen", "rounded-none", "bg-base-100"], [1, "sticky", "top-0", "flex", "w-full", "items-center", "justify-between", "p-4", "print:hidden"], ["btn", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-[calc(100vh-5rem)]", "flex-wrap", "overflow-auto", "print:h-auto"], ["target", "_blank", "ref", "noopener noreferrer", "class", "mx-auto flex w-[28%] flex-col items-center justify-center landscape:w-[21%] print:h-[25vh] print:landscape:h-[33.33vh]", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", "ref", "noopener noreferrer", 1, "mx-auto", "flex", "w-[28%]", "flex-col", "items-center", "justify-center", "landscape:w-[21%]", "print:h-[25vh]", "print:landscape:h-[33.33vh]", 3, "href"], [1, "mx-4", "my-2", "block", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2"], [1, "w-48", 3, "src"], [1, "mx-4", "my-1", "w-[calc(100%-2rem)]", "rounded", "bg-base-200", "p-1", "text-center", "font-mono", "text-sm"]], template: function DeskQrCodeModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function DeskQrCodeModalComponent_Template_button_click_2_listener() {
          return ctx.print();
        });
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 3)(6, "app-icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275template(9, DeskQrCodeModalComponent_a_9_Template, 6, 6, "a", 5);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.DESKS_ACTION_PRINT_QR_LIST"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(10, 4, ctx.desks));
      }
    }, dependencies: [NgForOf, MatDialogClose, MatRipple, IconComponent, AsyncPipe, SafePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskQrCodeModalComponent, { className: "DeskQrCodeModalComponent", filePath: "apps/concierge/src/app/desks/desk-qr-code-modal.component.ts", lineNumber: 49 });
})();

// apps/concierge/src/app/desks/desks.component.ts
var _c04 = ["app-desks", ""];
function DesksComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function DesksComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newDeskBooking());
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-icon", 15);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.NEW_BOOKING"), " ");
  }
}
function DesksComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function DesksComponent_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editDesk());
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-icon", 15);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.DESKS_NEW"), " ");
  }
}
function DesksComponent_mat_form_field_14_mat_option_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const level_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = \u0275\u0275pipeBind1(2, 1, level_r5.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function DesksComponent_mat_form_field_14_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19)(1, "div", 20);
    \u0275\u0275template(2, DesksComponent_mat_form_field_14_mat_option_4_div_2_Template, 5, 3, "div", 21);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", level_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r5.display_name || level_r5.name, " ");
  }
}
function DesksComponent_mat_form_field_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 16)(1, "mat-select", 17);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function DesksComponent_mat_form_field_14_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateZones($event));
    });
    \u0275\u0275template(4, DesksComponent_mat_form_field_14_mat_option_4_Template, 5, 3, "mat-option", 18);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.filters)) == null ? null : tmp_1_0.zones)("placeholder", \u0275\u0275pipeBind1(3, 5, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 7, ctx_r1.levels));
  }
}
function DesksComponent_mat_form_field_15_mat_option_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const level_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = \u0275\u0275pipeBind1(2, 1, level_r7.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function DesksComponent_mat_form_field_15_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19)(1, "div", 20);
    \u0275\u0275template(2, DesksComponent_mat_form_field_15_mat_option_5_div_2_Template, 5, 3, "div", 21);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", level_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r7.display_name || level_r7.name, " ");
  }
}
function DesksComponent_mat_form_field_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 16)(1, "mat-select", 24);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("ngModelChange", function DesksComponent_mat_form_field_15_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateZones([$event]));
    });
    \u0275\u0275template(5, DesksComponent_mat_form_field_15_mat_option_5_Template, 5, 3, "mat-option", 18);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ((tmp_1_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.filters)) == null ? null : tmp_1_0.zones == null ? null : tmp_1_0.zones.length) ? (tmp_1_0 = \u0275\u0275pipeBind1(3, 5, ctx_r1.filters)) == null ? null : tmp_1_0.zones[0] : "")("placeholder", \u0275\u0275pipeBind1(4, 7, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 9, ctx_r1.levels));
  }
}
function DesksComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "date-options", 25);
    \u0275\u0275listener("dateChange", function DesksComponent_ng_container_17_Template_date_options_dateChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 26);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("click", function DesksComponent_ng_container_17_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "refresh");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 26);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "async");
    \u0275\u0275listener("click", function DesksComponent_ng_container_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectAll());
    });
    \u0275\u0275elementStart(10, "app-icon");
    \u0275\u0275text(11, "event_busy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 4, "COMMON.REFRESH"))("disabled", \u0275\u0275pipeBind1(4, 6, ctx_r1.loading));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(8, 8, "APP.CONCIERGE.REJECT_ALL"))("disabled", \u0275\u0275pipeBind1(9, 10, ctx_r1.loading));
  }
}
function DesksComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 27);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DesksComponent_ng_container_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewQRCodes());
    });
    \u0275\u0275elementStart(3, "app-icon");
    \u0275\u0275text(4, "qr_code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 29);
    \u0275\u0275listener("change", function DesksComponent_ng_container_18_Template_input_change_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadCSVData($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 27);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function DesksComponent_ng_container_18_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275elementStart(12, "app-icon");
    \u0275\u0275text(13, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 30);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("click", function DesksComponent_ng_container_18_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageRestrictions());
    });
    \u0275\u0275elementStart(16, "app-icon");
    \u0275\u0275text(17, "lock_open");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.DESKS_VIEW_QR_CODE_LIST"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 6, "APP.CONCIERGE.DESKS_LIST_UPLOAD"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 8, "APP.CONCIERGE.DESKS_LIST_DOWNLOAD"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 10, "APP.CONCIERGE.DESKS_BOOKING_RULES"));
  }
}
function DesksComponent_mat_progress_bar_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 31);
  }
}
var DesksComponent = class _DesksComponent extends AsyncHandler {
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor(_state, _router, _route, _dialog, _org, _settings) {
    super();
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this._dialog = _dialog;
    this._org = _org;
    this._settings = _settings;
    this.loading = this._state.loading;
    this.manage = false;
    this.filters = this._state.filters;
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this._settings.get("app.use_region") ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.setDate = (date) => this._state.setFilters({ date });
    this.setFilters = (o) => this._state.setFilters(o);
    this.refresh = () => this._state.refresh();
    this.rejectAll = () => this._state.rejectAllDesks();
    this.editDesk = () => this._state.editDesk();
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
    };
  }
  ngOnInit() {
    this._state.refresh();
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const url_parts = this._router.url?.split("/") || [""];
        this.path = url_parts[parts.length - 1].split("?")[0];
        this._checkManage();
      }
    }));
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("zone_ids")) {
        const zones = params.get("zone_ids").split(",");
        if (!zones.length)
          return;
        const level = this._org.levelWithID(zones);
        this._state.setFilters({ zones });
        if (!level)
          return;
        this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
      }
    }));
    const parts = this._router.url?.split("/") || [""];
    this.path = parts[parts.length - 1].split("?")[0];
    this._checkManage();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  viewQRCodes() {
    this._dialog.open(DeskQrCodeModalComponent);
  }
  newDeskBooking() {
    const ref = this._dialog.open(DeskBookModalComponent, {});
    ref.afterClosed().subscribe((_) => {
      this._state.refresh();
    });
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "desk" }
    });
  }
  downloadTemplate() {
    const desk = new Desk({
      id: "desk-123",
      name: "Test Desk",
      bookable: true,
      groups: ["test-desk-group", "desk-bookers"],
      features: ["Standing Desk", "Dual Monitor"]
    }).toJSON();
    delete desk.images;
    const data = jsonToCsv([desk]);
    downloadFile("desk-template.csv", data);
  }
  loadCSVData(event) {
    return __async(this, null, function* () {
      const data = yield loadTextFileFromInputEvent(event).catch(([m, e]) => {
        notifyError(m);
        throw e;
      });
      try {
        const list = csvToJson(data) || [];
        this._state.addDesks(list.map((_) => new Desk(__spreadProps(__spreadValues({}, _), {
          id: _.id || `desk-${randomInt(999999)}`
        }))));
      } catch (e) {
        console.error(e);
      }
    });
  }
  _checkManage() {
    this.manage = this.path.includes("manage");
    if (this.manage) {
      this.subscription("zone-changes", this._org.active_levels.subscribe((lvls) => __async(this, null, function* () {
        if (!lvls.length)
          return;
        const { zones } = yield nextValueFrom(this._state.filters);
        const levels_in_zones = zones?.length && zones.some((z) => lvls.find((lvl) => lvl.id === z));
        if (!levels_in_zones)
          this.updateZones([lvls[0].id]);
      })));
    } else
      this.unsub("zone-changes");
  }
  static {
    this.\u0275fac = function DesksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DesksComponent)(\u0275\u0275directiveInject(DesksStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesksComponent, selectors: [["", "app-desks", ""]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c04, decls: 23, vars: 15, consts: [[1, "print:hidden"], [1, "flex", "h-px", "flex-1", "print:hidden"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "w-full", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], ["btn", "", "matRipple", "", "class", "w-44 space-x-2", 3, "click", 4, "ngIf"], [1, "mb-4", "flex", "w-full", "items-center", "space-x-2", "px-8"], ["appearance", "outline", "class", "no-subscript w-60", 4, "ngIf"], [4, "ngIf"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "w-44", "space-x-2", 3, "click"], [1, "pl-2"], [1, "text-2xl"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "dateChange"], ["btn", "", "icon", "", "matRipple", "", 1, "ml-2", "rounded", "border", "border-base-200", 3, "click", "matTooltip", "disabled"], ["btn", "", "icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], ["btn", "", "icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "matTooltip"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], ["mode", "indeterminate", 1, "w-full"]], template: function DesksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar", 0);
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 2)(4, "div", 3)(5, "h2", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "div", 5);
        \u0275\u0275elementStart(9, "searchbar", 6);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275listener("modelChange", function DesksComponent_Template_searchbar_modelChange_9_listener($event) {
          return ctx.setFilters({ search: $event });
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, DesksComponent_button_11_Template, 6, 3, "button", 7)(12, DesksComponent_button_12_Template, 6, 3, "button", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8);
        \u0275\u0275template(14, DesksComponent_mat_form_field_14_Template, 6, 9, "mat-form-field", 9)(15, DesksComponent_mat_form_field_15_Template, 7, 11, "mat-form-field", 9);
        \u0275\u0275element(16, "div", 5);
        \u0275\u0275template(17, DesksComponent_ng_container_17_Template, 12, 12, "ng-container", 10)(18, DesksComponent_ng_container_18_Template, 18, 12, "ng-container", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 11);
        \u0275\u0275element(20, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, DesksComponent_mat_progress_bar_21_Template, 1, 0, "mat-progress-bar", 12);
        \u0275\u0275pipe(22, "async");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, ctx.manage ? "APP.CONCIERGE.DESKS_HEADER" : "APP.CONCIERGE.DESKS_BOOK_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("model", (tmp_1_0 = \u0275\u0275pipeBind1(10, 11, ctx.filters)) == null ? null : tmp_1_0.search);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.path !== "manage");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.path === "manage");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.manage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.manage);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.path === "events");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.path === "manage");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(22, 13, ctx.loading) && ctx.path === "events");
      }
    }, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, ApplicationTopbarComponent, ApplicationSidebarComponent, MatFormField, MatSelect, MatOption, MatTooltip, MatProgressBar, MatRipple, IconComponent, RouterOutlet, AsyncPipe, BuildingPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=desks.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesksComponent, { className: "DesksComponent", filePath: "apps/concierge/src/app/desks/desks.component.ts", lineNumber: 250 });
})();

// apps/concierge/src/app/desks/desks.module.ts
var ROUTES = [
  {
    path: "",
    component: DesksComponent,
    children: [
      { path: "events", component: DeskBookingsComponent },
      { path: "map", component: DeskMapViewComponent },
      { path: "manage", component: DesksManageComponent },
      { path: "**", redirectTo: "events" }
    ]
  }
];
var DesksModule = class _DesksModule {
  static {
    this.\u0275fac = function DesksModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DesksModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DesksModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      MatTabsModule,
      ReactiveFormsModule,
      UIModule,
      SharedExploreModule,
      SharedBookingsModule,
      FormFieldsModule,
      MatRadioModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatInputModule,
      RouterModule.forChild(ROUTES)
    ] });
  }
};
export {
  DesksModule
};
//# sourceMappingURL=desks.module-32W54FDL.js.map
