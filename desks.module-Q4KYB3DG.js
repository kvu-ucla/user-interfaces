import {
  DeskModalComponent,
  DesksStateService
} from "./chunk-BTWF2RMH.js";
import {
  ExploreDesksService,
  ExploreZoomControlComponent,
  SharedExploreModule
} from "./chunk-HWA45MUG.js";
import {
  MatTabsModule
} from "./chunk-MTVZCVHI.js";
import {
  DeskListFieldComponent,
  SharedBookingsModule
} from "./chunk-2CSOG7N2.js";
import {
  BookingFormService
} from "./chunk-PHNOP32K.js";
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
  Component,
  CustomTooltipComponent,
  DateFieldComponent,
  DateOptionsComponent,
  DatePipe,
  DefaultValueAccessor,
  Desk,
  DurationFieldComponent,
  ElementRef,
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
  NgModel,
  NgModule,
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
  inject,
  input,
  jsonToCsv,
  loadTextFileFromInputEvent,
  map,
  nextValueFrom,
  notifyError,
  notifyInfo,
  notifySuccess,
  openConfirmModal,
  output,
  randomInt,
  set,
  setClassMetadata,
  showBooking,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction7,
  ɵɵpureFunctionV,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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
} from "./chunk-4H7O57UP.js";

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
function DeskBookingsComponent_ng_template_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
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
    \u0275\u0275conditionalCreate(2, DeskBookingsComponent_ng_template_15_Conditional_2_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.group || (row_r2.extension_data == null ? null : row_r2.extension_data.group), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(row_r2.group || (row_r2.extension_data == null ? null : row_r2.extension_data.group)) ? 2 : -1);
  }
}
function DeskBookingsComponent_ng_template_17_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext(2).row;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, row_r3.date, ctx_r3.time_format), " \u2013 ", \u0275\u0275pipeBind2(2, 5, row_r3.date_end, ctx_r3.time_format), " ");
  }
}
function DeskBookingsComponent_ng_template_17_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.ALL_DAY"), " ");
  }
}
function DeskBookingsComponent_ng_template_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275conditionalCreate(1, DeskBookingsComponent_ng_template_17_Conditional_1_Conditional_1_Template, 3, 8);
    \u0275\u0275conditionalCreate(2, DeskBookingsComponent_ng_template_17_Conditional_1_Conditional_2_Template, 2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r3.all_day && row_r3.duration <= 12 * 60 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.all_day || row_r3.duration > 12 * 60 ? 2 : -1);
  }
}
function DeskBookingsComponent_ng_template_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, row_r3.deleted ? "APP.CONCIERGE.BOOKING_DELETED" : row_r3.status === "ended" ? "APP.CONCIERGE.BOOKING_ENDED" : "APP.CONCIERGE.BOOKING_EXPIRED"), " ");
  }
}
function DeskBookingsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275conditionalCreate(1, DeskBookingsComponent_ng_template_17_Conditional_1_Template, 3, 2, "div", 18);
    \u0275\u0275conditionalCreate(2, DeskBookingsComponent_ng_template_17_Conditional_2_Template, 3, 3, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.status !== "declined" && !row_r3.deleted && row_r3.status !== "ended" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.status === "declined" || row_r3.deleted || row_r3.status === "ended" ? 2 : -1);
  }
}
function DeskBookingsComponent_ng_template_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
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
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DeskBookingsComponent_ng_template_19_Conditional_3_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r5.user_name || row_r5.user_email || row_r5.booked_by_name || row_r5.booked_by_email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r5.user_name ? 3 : -1);
  }
}
function DeskBookingsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24)(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 27);
    \u0275\u0275text(7, " arrow_drop_down ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 7)(10, "button", 28);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_21_Template_button_click_10_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.approve(row_r7));
    });
    \u0275\u0275elementStart(11, "div", 29)(12, "icon", 27);
    \u0275\u0275text(13, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 30);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 28);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_21_Template_button_click_17_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.reject(row_r7));
    });
    \u0275\u0275elementStart(18, "div", 29)(19, "icon", 27);
    \u0275\u0275text(20, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 30);
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
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 31)(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 27);
    \u0275\u0275text(7, " arrow_drop_down ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 8)(10, "button", 28);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_23_Template_button_click_10_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.checkin(row_r10, true));
    });
    \u0275\u0275elementStart(11, "div", 29)(12, "icon", 27);
    \u0275\u0275text(13, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 28);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_23_Template_button_click_17_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.checkin(row_r10, false));
    });
    \u0275\u0275elementStart(18, "div", 29)(19, "icon", 27);
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
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33)(2, "icon", 27);
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 9)(6, "button", 28);
    \u0275\u0275listener("click", function DeskBookingsComponent_ng_template_25_Template_button_click_6_listener() {
      const row_r14 = \u0275\u0275restoreView(_r13).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cancel(row_r14));
    });
    \u0275\u0275elementStart(7, "div", 29)(8, "icon", 27);
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
function DeskBookingsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function DeskBookingsComponent_Conditional_27_Template_button_click_0_listener() {
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
var _DeskBookingsComponent = class _DeskBookingsComponent {
  constructor() {
    this._state = inject(DesksStateService);
    this._settings = inject(SettingsService);
    this.filters = this._state.filters;
    this.has_more_pages = this._state.has_more_pages;
    this.bookings = this._state.bookings;
    this.rejectAll = () => this._state.rejectAllDesks();
    this.cancel = (b) => this._state.cancelBooking(b);
    this.loadMore = () => this._state.nextPage();
    this.checkin = (d, s) => this.runMethod("checkin", async () => {
      await this._state.checkinDesk(d, s);
      d.checked_in = s ?? true;
    });
    this.approve = (d) => this.runMethod("approve", async () => this._state.approveDesk(d));
    this.reject = (d) => this.runMethod("reject", async () => this._state.rejectDesk(d));
  }
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
  async runMethod(name, fn) {
    this.loading = name;
    await fn().catch(() => null);
    this.loading = "";
  }
};
_DeskBookingsComponent.\u0275fac = function DeskBookingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskBookingsComponent)();
};
_DeskBookingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskBookingsComponent, selectors: [["desk-bookings"]], standalone: false, decls: 29, vars: 66, consts: [["date_template", ""], ["group_template", ""], ["period_template", ""], ["user_template", ""], ["status_template", ""], ["option_template", ""], ["action_template", ""], ["menu", "matMenu"], ["checkinMenu", "matMenu"], ["actionMenu", "matMenu"], [1, "h-full", "w-full", "overflow-auto", "pb-16"], [1, "block", "min-w-[72rem]", "text-sm", 3, "data", "filter", "filter_on", "columns", "empty_message", "sortable"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-4", "z-20", "w-32"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "py-2"], [1, "opacity-60"], [1, "text-xl"], [1, "p-4", "font-mono", "text-[0.625rem]"], [1, "opacity-30"], [1, "p-2"], [1, "rounded-3xl", "bg-error", "px-4", "py-2", "text-xs", "text-white"], [1, "flex", "flex-col", "justify-center", "px-4", "py-2"], [1, "select-all"], [1, "select-all", "text-xs", "opacity-30"], [1, "px-2"], ["matRipple", "", 1, "h-10", "w-[7.5rem]", "rounded-3xl", "border-none", "bg-warning", "text-warning-content", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "space-x-2", "pl-4", "pr-2"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], ["matRipple", "", 1, "h-10", "w-[4.5rem]", "rounded-3xl", "border-none", "bg-warning", "text-warning-content", 3, "matMenuTriggerFor", "disabled", "matTooltip"], [1, "mx-auto", "flex", "items-center", "justify-end", "space-x-2"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-4", "z-20", "w-32", 3, "click"]], template: function DeskBookingsComponent_Template(rf, ctx) {
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
    \u0275\u0275conditionalCreate(27, DeskBookingsComponent_Conditional_27_Template, 3, 3, "button", 12);
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
    \u0275\u0275conditional(!ctx.loading && \u0275\u0275pipeBind1(28, 29, ctx.has_more_pages) ? 27 : -1);
  }
}, dependencies: [MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, SimpleTableComponent, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=desk-bookings.component.css.map */"] });
var DeskBookingsComponent = _DeskBookingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskBookingsComponent, [{
    type: Component,
    args: [{ selector: "desk-bookings", template: `
        <div class="h-full w-full overflow-auto pb-16">
            <simple-table
                class="block min-w-[72rem] text-sm"
                [data]="bookings"
                [filter]="(filters | async)?.search"
                [filter_on]="[
                    'user_name',
                    'asset_name',
                    'user_email',
                    'asset_id',
                    'status',
                    'group',
                ]"
                [columns]="[
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                        size: '4rem',
                        sortable: false,
                    },
                    {
                        key: 'date',
                        name: 'FORM.PERIOD' | translate,
                        content: period_template,
                        size: '9rem',
                    },
                    {
                        key: 'user_name',
                        name: 'COMMON.PERSON' | translate,
                        content: user_template,
                    },
                    {
                        key: 'group',
                        name: 'COMMON.GROUP' | translate,
                        content: group_template,
                    },
                    { key: 'asset_name', name: 'RESOURCE.DESK' | translate },
                    {
                        key: 'approver',
                        name: 'APP.CONCIERGE.APPROVER' | translate,
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                        content: status_template,
                        size: '8.5rem',
                        sortable: false,
                    },
                    {
                        key: 'checked_in',
                        name: 'COMMON.CHECKED_IN' | translate,
                        content: option_template,
                        size: '7rem',
                        sortable: false,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.5rem',
                        sortable: false,
                    },
                ]"
                [empty_message]="
                    ((filters | async)?.search
                        ? 'APP.CONCIERGE.DESKS_BOOKINGS_SEARCH_EMPTY'
                        : 'APP.CONCIERGE.DESKS_BOOKINGS_EMPTY'
                    ) | translate
                "
                [sortable]="true"
            ></simple-table>
            <ng-template #date_template let-date="data">
                <div
                    class="flex w-full flex-col items-center justify-center py-2"
                >
                    <div class="opacity-60">{{ date | date: 'MMM' }}</div>
                    <div class="text-xl">{{ date | date: 'dd' }}</div>
                </div>
            </ng-template>
            <ng-template #group_template let-row="row">
                <div class="p-4 font-mono text-[0.625rem]">
                    {{ row.group || row.extension_data?.group }}
                    @if (!(row.group || row.extension_data?.group)) {
                        <span class="opacity-30">
                            {{ 'APP.CONCIERGE.DESKS_GROUP_EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #period_template let-row="row">
                <div class="p-2">
                    @if (
                        row.status !== 'declined' &&
                        !row.deleted &&
                        row.status !== 'ended'
                    ) {
                        <div class="p-2">
                            @if (!row.all_day && row.duration <= 12 * 60) {
                                {{ row.date | date: time_format }} &ndash;
                                {{ row.date_end | date: time_format }}
                            }
                            @if (row.all_day || row.duration > 12 * 60) {
                                {{ 'COMMON.ALL_DAY' | translate }}
                            }
                        </div>
                    }
                    @if (
                        row.status === 'declined' ||
                        row.deleted ||
                        row.status === 'ended'
                    ) {
                        <div
                            class="rounded-3xl bg-error px-4 py-2 text-xs text-white"
                        >
                            {{
                                (row.deleted
                                    ? 'APP.CONCIERGE.BOOKING_DELETED'
                                    : row.status === 'ended'
                                      ? 'APP.CONCIERGE.BOOKING_ENDED'
                                      : 'APP.CONCIERGE.BOOKING_EXPIRED'
                                ) | translate
                            }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #user_template let-row="row">
                <div class="flex flex-col justify-center px-4 py-2">
                    <div class="select-all">
                        {{
                            row.user_name ||
                                row.user_email ||
                                row.booked_by_name ||
                                row.booked_by_email
                        }}
                    </div>
                    @if (row.user_name) {
                        <div class="select-all text-xs opacity-30">
                            {{ row.user_email }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #status_template let-row="row">
                <div class="px-2">
                    <button
                        matRipple
                        class="h-10 w-[7.5rem] rounded-3xl border-none bg-warning text-warning-content"
                        [class.!text-success-content]="
                            row?.status === 'approved'
                        "
                        [class.!bg-success]="row?.status === 'approved'"
                        [class.!text-error-content]="row?.status === 'declined'"
                        [class.!bg-error]="row?.status === 'declined'"
                        [class.!text-neutral-content]="row?.status === 'ended'"
                        [class.!bg-neutral]="row?.status === 'ended'"
                        [class.opacity-30]="row?.status === 'ended'"
                        [matMenuTriggerFor]="menu"
                        [disabled]="row?.status === 'ended'"
                    >
                        <div class="flex items-center space-x-2 pl-4 pr-2">
                            <div class="flex-1 text-left">
                                {{
                                    (row?.status === 'ended'
                                        ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
                                        : row?.status === 'approved'
                                          ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                                          : row?.status === 'declined'
                                            ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                            : 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                    ) | translate
                                }}
                            </div>
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        </div>
                    </button>
                </div>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="approve(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">event_available</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.DESKS_ACTION_APPROVE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="reject(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">event_busy</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.DESKS_ACTION_DECLINE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
            <ng-template #option_template let-data="data" let-row="row">
                <div class="px-2">
                    <button
                        matRipple
                        class="h-10 w-[4.5rem] rounded-3xl border-none bg-warning text-warning-content"
                        [matMenuTriggerFor]="checkinMenu"
                        [class.!bg-neutral]="!data"
                        [class.!text-neutral-content]="!data"
                        [class.!bg-success]="data"
                        [class.!text-success-content]="data"
                        [class.opacity-30]="row.status === 'ended'"
                        [disabled]="row.status === 'ended'"
                        [matTooltip]="
                            row.status === 'ended'
                                ? 'Desk booking has ended'
                                : 'Check-in or check-out desk'
                        "
                    >
                        <div class="flex items-center space-x-2 pl-4 pr-2">
                            <div class="flex-1 text-left">
                                {{
                                    (data ? 'COMMON.TRUE' : 'COMMON.FALSE')
                                        | translate
                                }}
                            </div>
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        </div>
                    </button>
                </div>
                <mat-menu #checkinMenu="matMenu">
                    <button mat-menu-item (click)="checkin(row, true)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">check</icon>
                            <div>{{ 'COMMON.CHECK_IN' | translate }}</div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="checkin(row, false)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">cancel</icon>
                            <div>{{ 'COMMON.CHECK_OUT' | translate }}</div>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
            <ng-template #action_template let-row="row">
                <div class="mx-auto flex items-center justify-end space-x-2">
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded"
                        [matMenuTriggerFor]="actionMenu"
                    >
                        <icon class="text-2xl">more_vert</icon>
                    </button>
                    <mat-menu #actionMenu="matMenu">
                        <button mat-menu-item (click)="cancel(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">event_busy</icon>
                                <div>
                                    {{ 'COMMON.CANCEL_BOOKING' | translate }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                </div>
            </ng-template>
        </div>
        @if (!loading && (has_more_pages | async)) {
            <button
                btn
                matRipple
                class="absolute bottom-2 left-4 z-20 w-32"
                (click)="loadMore()"
            >
                {{ 'COMMON.LOAD_MORE' | translate }}
            </button>
        }
    `, standalone: false, styles: ["/* angular:styles/component:css;50f565321ed488c261915867f2cdb2126821993bd33e062143023023a6d86219;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/desks/desk-bookings.component.ts */\n:host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=desk-bookings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskBookingsComponent, { className: "DeskBookingsComponent", filePath: "apps/concierge/src/app/desks/desk-bookings.component.ts", lineNumber: 303 });
})();

// apps/concierge/src/app/desks/desk-map-view.component.ts
var _DeskMapViewComponent = class _DeskMapViewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ExploreStateService);
    this._desk = inject(DesksStateService);
    this._desks_state = inject(ExploreDesksService);
    this._org = inject(OrganisationService);
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
};
_DeskMapViewComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DeskMapViewComponent_BaseFactory;
  return function DeskMapViewComponent_Factory(__ngFactoryType__) {
    return (\u0275DeskMapViewComponent_BaseFactory || (\u0275DeskMapViewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DeskMapViewComponent)))(__ngFactoryType__ || _DeskMapViewComponent);
  };
})();
_DeskMapViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskMapViewComponent, selectors: [["desk-map-view"]], standalone: false, features: [\u0275\u0275ProvidersFeature([ExploreDesksService]), \u0275\u0275InheritDefinitionFeature], decls: 13, vars: 19, consts: [["map", "", 1, "relative", "h-full", "w-full"], [3, "src", "zoom", "center", "styles", "features", "actions"], [1, "absolute", "bottom-2", "right-2"], [1, "absolute", "left-0", "top-0", "p-2", "text-black"], ["placeholder", "User for bookings...", 1, "white", 3, "ngModelChange", "ngModel"], ["info", "", 1, "absolute", "bottom-0", "m-2", "rounded", "bg-base-100", "p-2", "text-center", "shadow"]], template: function DeskMapViewComponent_Template(rf, ctx) {
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
var DeskMapViewComponent = _DeskMapViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskMapViewComponent, [{
    type: Component,
    args: [{ selector: "desk-map-view", template: `
        <div map class="relative h-full w-full">
            <interactive-map
                [src]="url | async"
                [zoom]="(positions | async).zoom"
                [center]="(positions | async).center"
                [styles]="styles | async"
                [features]="features | async"
                [actions]="actions | async"
            ></interactive-map>
            <explore-zoom-controls
                class="absolute bottom-2 right-2"
            ></explore-zoom-controls>
            <div class="absolute left-0 top-0 p-2 text-black">
                <a-user-search-field
                    [ngModel]="null"
                    (ngModelChange)="setHost($event)"
                    class="white"
                    placeholder="User for bookings..."
                ></a-user-search-field>
            </div>
            <div
                info
                class="absolute bottom-0 m-2 rounded bg-base-100 p-2 text-center shadow"
            >
                Click or Tap an available desk to book it.
            </div>
        </div>
    `, providers: [ExploreDesksService], standalone: false, styles: ["/* angular:styles/component:css;dd93bc8719393a35a70acaea5bd7405d99fe2e9b226de04eba8ae5416d008453;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/desks/desk-map-view.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n[info] {\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=desk-map-view.component.css.map */\n"] }]
  }], null, null);
})();
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
function DesksManageComponent_ng_template_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
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
    \u0275\u0275conditionalCreate(3, DesksManageComponent_ng_template_10_Conditional_3_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.id || row_r3.map_id);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.id && row_r3.map_id !== row_r3.id ? 3 : -1);
  }
}
function DesksManageComponent_ng_template_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
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
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, DesksManageComponent_ng_template_12_For_2_Template, 2, 1, "span", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r6);
  }
}
function DesksManageComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "icon");
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
function DesksManageComponent_ng_template_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.UNASSIGNED"), " ");
  }
}
function DesksManageComponent_ng_template_16_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r9 = \u0275\u0275nextContext(2).data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r9, " ");
  }
}
function DesksManageComponent_ng_template_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_16_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const data_r9 = \u0275\u0275nextContext().data;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(data_r9, "assigned"));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DesksManageComponent_ng_template_16_Conditional_1_Conditional_3_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const row_r11 = ctx_r9.row;
    const data_r9 = ctx_r9.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.assigned_name || data_r9);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r11.assigned_name ? 3 : -1);
  }
}
function DesksManageComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DesksManageComponent_ng_template_16_Conditional_0_Template, 3, 3, "div", 15);
    \u0275\u0275conditionalCreate(1, DesksManageComponent_ng_template_16_Conditional_1_Template, 4, 2, "button", 16);
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    \u0275\u0275conditional(!data_r9 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r9 ? 1 : -1);
  }
}
function DesksManageComponent_ng_template_18_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "a", 25);
    \u0275\u0275pipe(3, "safe");
    \u0275\u0275element(4, "img", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 28);
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
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_18_Template_button_click_1_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadQrCode(row_r13));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "qr_code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_18_Template_button_click_5_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editDesk(row_r13));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 21);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function DesksManageComponent_ng_template_18_Template_button_click_9_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeDesk(row_r13));
    });
    \u0275\u0275elementStart(11, "icon", 22);
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
function DesksManageComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 29);
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
function DesksManageComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 30)(2, "div", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 32);
    \u0275\u0275listener("change", function DesksManageComponent_Conditional_21_Template_input_change_5_listener($event) {
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
var _DesksManageComponent = class _DesksManageComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(DesksStateService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._element = inject(ElementRef);
    this._clipboard = inject(Clipboard);
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
  async removeDesk(desk) {
    const resp = await openConfirmModal({
      title: i18n("APP.CONCIERGE.DESKS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.DESKS_REMOVE_MSG", {
        name: desk.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.close();
    const desks = await nextValueFrom(this.desks);
    const updated_desks = desks.filter((_) => _.id !== desk.id);
    const filters = await nextValueFrom(this.filters);
    const level = this._org.levelWithID(filters.zones);
    this.loading = i18n("APP.CONCIERGE.DESKS_REMOVE_LOADING");
    await du(level.id, {
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
  async loadCSVData(event) {
    this.loading = i18n("APP.CONCIERGE.DESKS_UPLOADING");
    this.dragging = false;
    const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
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
  }
  handleDrag(type, event) {
    this.dragging = type === "enter";
  }
};
_DesksManageComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DesksManageComponent_BaseFactory;
  return function DesksManageComponent_Factory(__ngFactoryType__) {
    return (\u0275DesksManageComponent_BaseFactory || (\u0275DesksManageComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DesksManageComponent)))(__ngFactoryType__ || _DesksManageComponent);
  };
})();
_DesksManageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesksManageComponent, selectors: [["desks-manage"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 22, vars: 48, consts: [["name_template", ""], ["item_list_template", ""], ["bool_template", ""], ["assigned_template", ""], ["action_template", ""], ["qr_menu", ""], [1, "h-full", "w-full", "overflow-auto", "pb-4", 3, "dragenter", "dragend"], [1, "block", "w-full", "min-w-[72rem]", "text-sm", 3, "filter", "data", "columns", "sortable", "empty_message"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "bg-base-100", "bg-opacity-60"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "bg-neutral"], [1, "flex", "flex-col", "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "flex-wrap", "p-2"], [1, "m-1", "rounded-2xl", "bg-info", "px-2", "py-1", "font-mono", "text-xs", "text-info-content"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "text-2xl", "text-white"], [1, "p-4", "opacity-30"], [1, "px-4", "py-2", "text-left", "leading-tight"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "flex", "items-center", "justify-end", "space-x-2", "p-2"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "content", "matTooltip"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"], [1, "rounded", "bg-base-100", "py-2", "shadow"], ["printable", "", 1, ""], ["target", "_blank", "ref", "noopener noreferrer", 1, "mx-4", "my-2", "block", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2", 3, "href"], [1, "w-48", 3, "src"], [1, "mx-4", "mt-2", "w-[calc(100%-2rem)]", "rounded", "bg-base-200", "p-2", "text-center", "font-mono", "text-sm"], ["btn", "", "matRipple", "", 1, "mx-4", "my-2", "w-[calc(100%-2rem)]", 3, "click"], ["diameter", "32"], [1, "rounded", "bg-base-100", "p-4", "shadow"], [1, "flex", "h-64", "w-64", "flex-col", "items-center", "justify-center", "rounded", "border-4", "border-dashed", "border-base-200"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"]], template: function DesksManageComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("dragenter", function DesksManageComponent_Template_div_dragenter_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.handleDrag("enter", $event));
    })("dragend", function DesksManageComponent_Template_div_dragend_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.handleDrag("end", $event));
    }, \u0275\u0275resolveWindow);
    \u0275\u0275element(1, "simple-table", 7);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275template(10, DesksManageComponent_ng_template_10_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, DesksManageComponent_ng_template_12_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(14, DesksManageComponent_ng_template_14_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(16, DesksManageComponent_ng_template_16_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(18, DesksManageComponent_ng_template_18_Template, 15, 10, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275conditionalCreate(20, DesksManageComponent_Conditional_20_Template, 4, 1, "div", 8);
    \u0275\u0275conditionalCreate(21, DesksManageComponent_Conditional_21_Template, 6, 3, "div", 9);
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
    \u0275\u0275conditional(ctx.loading ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.dragging ? 21 : -1);
  }
}, dependencies: [MatTooltip, MatProgressSpinner, MatRipple, IconComponent, CustomTooltipComponent, SimpleTableComponent, PrintableComponent, AsyncPipe, TranslatePipe, SafePipe], encapsulation: 2 });
var DesksManageComponent = _DesksManageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesksManageComponent, [{
    type: Component,
    args: [{ selector: "desks-manage", template: `
        <div
            class="h-full w-full overflow-auto pb-4"
            (dragenter)="handleDrag('enter', $event)"
            (window:dragend)="handleDrag('end', $event)"
        >
            <simple-table
                class="block w-full min-w-[72rem] text-sm"
                [filter]="(filters | async)?.search"
                [data]="desks"
                [columns]="[
                    {
                        key: 'id',
                        name: 'APP.CONCIERGE.DESKS_ID' | translate,
                        content: name_template,
                        size: '10rem',
                    },
                    {
                        key: 'name',
                        name: 'APP.CONCIERGE.DESKS_NAME' | translate,
                    },
                    {
                        key: 'assigned_to',
                        name: 'Assigned',
                        content: assigned_template,
                    },
                    {
                        key: 'features',
                        name: 'COMMON.FEATURES' | translate,
                        content: item_list_template,
                    },
                    {
                        key: 'security',
                        name: 'APP.CONCIERGE.DESKS_SECURITY' | translate,
                    },
                    {
                        key: 'bookable',
                        name: 'COMMON.BOOKABLE' | translate,
                        content: bool_template,
                        size: '5.5rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '8.5rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
                [empty_message]="
                    ((filters | async)?.search
                        ? 'APP.CONCIERGE.DESKS_MANAGE_SEARCH_EMPTY'
                        : 'APP.CONCIERGE.DESKS_MANAGE_EMPTY'
                    ) | translate
                "
            ></simple-table>
            <ng-template #name_template let-row="row">
                <button
                    class="flex flex-col px-4 py-2 text-left leading-tight"
                    (click)="copyToClipboard(row.map_id || row.id)"
                >
                    <div>{{ row.id || row.map_id }}</div>
                    @if (row.id && row.map_id !== row.id) {
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.map_id }}
                        </div>
                    }
                </button>
            </ng-template>
            <ng-template #item_list_template let-data="data">
                <div class="flex flex-wrap p-2">
                    @for (item of data; track item) {
                        <span
                            class="m-1 rounded-2xl bg-info px-2 py-1 font-mono text-xs text-info-content"
                        >
                            {{ item }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #bool_template let-data="data">
                <div
                    [class.bg-error]="!data"
                    [class.bg-success]="data"
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded text-2xl text-white"
                >
                    <icon>{{ data ? 'done' : 'close' }}</icon>
                </div>
            </ng-template>
            <ng-template #assigned_template let-row="row" let-data="data">
                @if (!data) {
                    <div class="p-4 opacity-30">
                        {{ 'APP.CONCIERGE.UNASSIGNED' | translate }}
                    </div>
                }
                @if (data) {
                    <button
                        class="px-4 py-2 text-left leading-tight"
                        (click)="copyToClipboard(data, 'assigned')"
                    >
                        <div class="">{{ row.assigned_name || data }}</div>
                        @if (row.assigned_name) {
                            <div class="font-mono text-[0.625rem] opacity-30">
                                {{ data }}
                            </div>
                        }
                    </button>
                }
            </ng-template>
            <ng-template #action_template let-row="row">
                <div class="flex items-center justify-end space-x-2 p-2">
                    <button
                        icon
                        matRipple
                        customTooltip
                        [content]="qr_menu"
                        [matTooltip]="
                            'APP.CONCIERGE.DESKS_ACTION_PRINT_QR' | translate
                        "
                        (click)="loadQrCode(row)"
                    >
                        <icon>qr_code</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.DESKS_ACTION_EDIT' | translate
                        "
                        (click)="editDesk(row)"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.DESKS_ACTION_REMOVE' | translate
                        "
                        (click)="removeDesk(row)"
                    >
                        <icon class="text-error">delete</icon>
                    </button>
                    <ng-template #qr_menu>
                        <div class="rounded bg-base-100 py-2 shadow">
                            <div class="" printable>
                                <a
                                    [href]="row.qr_link | safe: 'url'"
                                    target="_blank"
                                    ref="noopener noreferrer"
                                    class="mx-4 my-2 block rounded-lg border border-base-200 bg-base-100 p-2"
                                >
                                    <img class="w-48" [src]="row.qr_code" />
                                </a>
                                <div
                                    class="mx-4 mt-2 w-[calc(100%-2rem)] rounded bg-base-200 p-2 text-center font-mono text-sm"
                                >
                                    {{ row.name || row.id }}
                                </div>
                            </div>
                            <button
                                btn
                                matRipple
                                class="mx-4 my-2 w-[calc(100%-2rem)]"
                                (click)="print()"
                            >
                                {{
                                    'APP.CONCIERGE.DESKS_ACTION_PRINT_QR'
                                        | translate
                                }}
                            </button>
                        </div>
                    </ng-template>
                </div>
            </ng-template>
            @if (loading) {
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-base-100 bg-opacity-60"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ loading }}</p>
                </div>
            }
            @if (dragging) {
                <div
                    class="absolute inset-0 flex items-center justify-center bg-neutral"
                >
                    <div class="rounded bg-base-100 p-4 shadow">
                        <div
                            class="flex h-64 w-64 flex-col items-center justify-center rounded border-4 border-dashed border-base-200"
                        >
                            {{
                                'APP.CONCIERGE.DESKS_DROP_TEMPLATE' | translate
                            }}
                        </div>
                    </div>
                    <input
                        type="file"
                        class="absolute inset-0 opacity-0"
                        (change)="loadCSVData($event)"
                    />
                </div>
            }
        </div>
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesksManageComponent, { className: "DesksManageComponent", filePath: "apps/concierge/src/app/desks/desks-manage.component.ts", lineNumber: 234 });
})();

// apps/workplace/src/app/book/desk-flow/desk-form-details.component.ts
var _c03 = () => ({ standalone: true });
var _c13 = () => [];
var _c23 = (a0, a1, a2) => ({ date: a0, duration: a1, all_day: a2 });
function NewDeskFormDetailsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1)(1, "button", 18);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("click", function NewDeskFormDetailsComponent_Conditional_0_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ group: false, members: [] }));
    });
    \u0275\u0275elementStart(3, "icon", 19);
    \u0275\u0275text(4, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 21);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 18);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275listener("click", function NewDeskFormDetailsComponent_Conditional_0_Conditional_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ group: true }));
    });
    \u0275\u0275elementStart(13, "icon", 19);
    \u0275\u0275text(14, "group_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 20);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "div", 21);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 16, "BOOKINGS.DESK_LONE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", (tmp_4_0 = \u0275\u0275pipeBind1(9, 18, ctx_r1.options)) == null ? null : tmp_4_0.group)("bg-secondary", !((tmp_5_0 = \u0275\u0275pipeBind1(10, 20, ctx_r1.options)) == null ? null : tmp_5_0.group));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-secondary", (tmp_6_0 = \u0275\u0275pipeBind1(12, 22, ctx_r1.options)) == null ? null : tmp_6_0.group);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 24, "BOOKINGS.DESK_GROUP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", !((tmp_8_0 = \u0275\u0275pipeBind1(19, 26, ctx_r1.options)) == null ? null : tmp_8_0.group))("bg-secondary", (tmp_9_0 = \u0275\u0275pipeBind1(20, 28, ctx_r1.options)) == null ? null : tmp_9_0.group);
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-search-field", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "FORM.HOST"));
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 23)(2, "label", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 25);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_Conditional_0_Conditional_34_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form().patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23)(9, "label", 26);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 12, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form().value.date)("ngModelOptions", \u0275\u0275pureFunction0(16, _c03))("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("time", (tmp_8_0 = ctx_r1.form().get("date")) == null ? null : tmp_8_0.value)("max", ctx_r1.max_duration)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_35_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.UPDATE_FUTURE"), " ");
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "label", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "recurrence-field", 29);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_Conditional_0_Conditional_35_Template_recurrence_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRecurrenceChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, NewDeskFormDetailsComponent_Conditional_0_Conditional_35_Conditional_7_Template, 3, 3, "mat-checkbox", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.RECURRENCE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("date", ctx_r1.form().getRawValue().date)("ngModel", ctx_r1.form().value)("ngModelOptions", \u0275\u0275pureFunction0(7, _c03));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form().value.id ? 7 : -1);
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 23)(2, "mat-checkbox", 31);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_Conditional_0_Conditional_36_Template_mat_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form().patchValue({ secondary_resource: $event ? "locker" : "" }));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", !!ctx_r1.form().value.secondary_resource)("ngModelOptions", \u0275\u0275pureFunction0(5, _c03));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "BOOKINGS.DESK_REQUIRE_LOCKER"), " ");
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 16)(2, "div", 4);
    \u0275\u0275text(3, " 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33)(9, "a-user-list-field", 34);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_Conditional_0_Conditional_37_Template_a_user_list_field_ngModelChange_9_listener($event) {
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
function NewDeskFormDetailsComponent_Conditional_0_Conditional_39_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.DESK_GROUP_INFO"), " ");
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "desk-list-field", 35);
    \u0275\u0275conditionalCreate(9, NewDeskFormDetailsComponent_Conditional_0_Conditional_39_Conditional_9_Template, 3, 3, "p", 36);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "RESOURCE.DESK"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_4_0 = \u0275\u0275pipeBind1(10, 7, ctx_r1.options)) == null ? null : tmp_4_0.group) ? 9 : -1);
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "asset-list-field", 37);
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
    \u0275\u0275property("options", \u0275\u0275pureFunction3(7, _c23, ctx_r1.form().getRawValue().date, ctx_r1.form().value.duration, ctx_r1.form().value.all_day));
  }
}
function NewDeskFormDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, NewDeskFormDetailsComponent_Conditional_0_Conditional_1_Template, 21, 30, "section", 1);
    \u0275\u0275elementStart(2, "section", 2)(3, "h3", 3)(4, "div", 4);
    \u0275\u0275text(5, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, NewDeskFormDetailsComponent_Conditional_0_Conditional_9_Template, 7, 3, "div", 6);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "label", 9);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-form-field", 10);
    \u0275\u0275element(19, "input", 11);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "mat-error");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 12)(25, "label", 13);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "a-date-field", 14);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, NewDeskFormDetailsComponent_Conditional_0_Conditional_33_Template, 3, 3, "mat-checkbox", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(34, NewDeskFormDetailsComponent_Conditional_0_Conditional_34_Template, 15, 17, "div", 16);
    \u0275\u0275conditionalCreate(35, NewDeskFormDetailsComponent_Conditional_0_Conditional_35_Template, 8, 8, "div", 17);
    \u0275\u0275conditionalCreate(36, NewDeskFormDetailsComponent_Conditional_0_Conditional_36_Template, 5, 6, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(37, NewDeskFormDetailsComponent_Conditional_0_Conditional_37_Template, 11, 9, "section", 2);
    \u0275\u0275pipe(38, "async");
    \u0275\u0275conditionalCreate(39, NewDeskFormDetailsComponent_Conditional_0_Conditional_39_Template, 11, 9, "section", 2);
    \u0275\u0275conditionalCreate(40, NewDeskFormDetailsComponent_Conditional_0_Conditional_40_Template, 9, 11, "section", 2);
    \u0275\u0275pipe(41, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_17_0;
    let tmp_19_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_groups ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("!border-none", ctx_r1.allow_groups);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 20, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_book_for_others && !((tmp_5_0 = \u0275\u0275pipeBind1(10, 22, ctx_r1.options)) == null ? null : tmp_5_0.group) ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 24, "FORM.TITLE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 26, "BOOKINGS.DESK_TITLE_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 28, "FORM.TITLE_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 30, "FORM.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("to", ctx_r1.end_date)("timezone", ctx_r1.timezone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 32, "FORM.DATE_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.allow_all_day ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.form().value.all_day && ctx_r1.allow_time_changes ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_recurr ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_book_lockers ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_17_0 = \u0275\u0275pipeBind1(38, 34, ctx_r1.options)) == null ? null : tmp_17_0.group) ? 37 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form().contains("resources") ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.has_assets && !((tmp_19_0 = \u0275\u0275pipeBind1(41, 36, ctx_r1.options)) == null ? null : tmp_19_0.group) ? 40 : -1);
  }
}
var _NewDeskFormDetailsComponent = class _NewDeskFormDetailsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.form = input(void 0);
    this.find = output();
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
  ngOnChanges(changes) {
    const form = this.form();
    if (changes.form && form) {
      if (this.selected_desk?.id) {
        form.patchValue({ resources: [this.selected_desk] });
      }
    }
  }
  onRecurrenceChange(recurrence) {
    this.form().patchValue(recurrence);
  }
};
_NewDeskFormDetailsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275NewDeskFormDetailsComponent_BaseFactory;
  return function NewDeskFormDetailsComponent_Factory(__ngFactoryType__) {
    return (\u0275NewDeskFormDetailsComponent_BaseFactory || (\u0275NewDeskFormDetailsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_NewDeskFormDetailsComponent)))(__ngFactoryType__ || _NewDeskFormDetailsComponent);
  };
})();
_NewDeskFormDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFormDetailsComponent, selectors: [["desk-form-details"]], inputs: { form: [1, "form"] }, outputs: { find: "find" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "space-y-2", "divide-y", "divide-base-200", 3, "formGroup"], [1, "flex", "items-center"], [1, "p-2"], [1, "mb-4", "flex", "items-center", "space-x-2"], [1, "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "bg-base-200"], [1, "text-xl"], [1, "w-full"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "title", "formControlName", "title", 3, "placeholder"], [1, "relative", "min-w-[256px]", "flex-1"], ["for", "date"], ["name", "date", "formControlName", "date", 3, "to", "timezone"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "flex-col"], ["matRipple", "", 1, "relative", "flex", "h-16", "flex-1", "items-center", "justify-center", "space-x-2", 3, "click"], [1, "text-2xl"], [1, ""], [1, "absolute", "inset-x-0", "bottom-0", "!m-0", "h-1"], ["formControlName", "user", 1, "mb-4"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr", "timezone"], ["for", "recurrence"], ["name", "recurrence", 3, "ngModelChange", "date", "ngModel", "ngModelOptions"], ["formControlName", "update_master"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "w-px", "flex-1"], [1, "overflow-hidden"], [1, "mt-4", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["formControlName", "resources"], [1, "rounded", "bg-warning", "px-2", "py-1", "text-center", "text-xs", "shadow"], ["formControlName", "assets", 3, "options"]], template: function NewDeskFormDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewDeskFormDetailsComponent_Conditional_0_Template, 42, 38, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.form() ? 0 : -1);
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, MatFormField, MatError, MatInput, MatCheckbox, MatRipple, DateFieldComponent, DurationFieldComponent, RecurrenceFieldComponent, TimeFieldComponent, UserListFieldComponent, UserSearchFieldComponent, IconComponent, AssetListFieldComponent, DeskListFieldComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
var NewDeskFormDetailsComponent = _NewDeskFormDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewDeskFormDetailsComponent, [{
    type: Component,
    args: [{ selector: "desk-form-details", template: `
        <!-- <div class="m-2 bg-warning p-2 text-center rounded shadow text-sm">
        The selected desk hasn't been booked. Please book the desk to be
        able to check-in.
        </div> -->
        @if (form()) {
            <div
                class="space-y-2 divide-y divide-base-200"
                [formGroup]="form()"
            >
                @if (allow_groups) {
                    <section class="flex items-center">
                        <button
                            matRipple
                            class="relative flex h-16 flex-1 items-center justify-center space-x-2"
                            [class.text-secondary]="!(options | async)?.group"
                            (click)="setOptions({ group: false, members: [] })"
                        >
                            <icon class="text-2xl">person</icon>
                            <div class="">
                                {{ 'BOOKINGS.DESK_LONE' | translate }}
                            </div>
                            <div
                                class="absolute inset-x-0 bottom-0 !m-0 h-1"
                                [class.bg-base-200]="(options | async)?.group"
                                [class.bg-secondary]="!(options | async)?.group"
                            ></div>
                        </button>
                        <button
                            matRipple
                            class="relative flex h-16 flex-1 items-center justify-center space-x-2"
                            [class.text-secondary]="(options | async)?.group"
                            (click)="setOptions({ group: true })"
                        >
                            <icon class="text-2xl">group_add</icon>
                            <div class="">
                                {{ 'BOOKINGS.DESK_GROUP' | translate }}
                            </div>
                            <div
                                class="absolute inset-x-0 bottom-0 !m-0 h-1"
                                [class.bg-base-200]="!(options | async)?.group"
                                [class.bg-secondary]="(options | async)?.group"
                            ></div>
                        </button>
                    </section>
                }
                <section class="p-2" [class.!border-none]="allow_groups">
                    <h3 class="mb-4 flex items-center space-x-2">
                        <div
                            class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                        >
                            1
                        </div>
                        <div class="text-xl">
                            {{ 'BOOKINGS.DETAILS' | translate }}
                        </div>
                    </h3>
                    @if (can_book_for_others && !(options | async)?.group) {
                        <div class="w-full">
                            <label for="title">
                                {{ 'FORM.HOST' | translate }}<span>*</span>
                            </label>
                            <a-user-search-field
                                formControlName="user"
                                class="mb-4"
                            ></a-user-search-field>
                        </div>
                    }
                    <div class="flex flex-wrap items-center sm:space-x-2">
                        <div class="min-w-[256px] flex-1">
                            <label for="title"
                                >{{ 'FORM.TITLE' | translate
                                }}<span>*</span></label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="title"
                                    formControlName="title"
                                    [placeholder]="
                                        'BOOKINGS.DESK_TITLE_PLACEHOLDER'
                                            | translate
                                    "
                                />
                                <mat-error>{{
                                    'FORM.TITLE_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                        <div class="relative min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'FORM.DATE' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                formControlName="date"
                                [to]="end_date"
                                [timezone]="timezone"
                            >
                                {{ 'FORM.DATE_REQUIRED' | translate }}
                            </a-date-field>
                            @if (allow_all_day) {
                                <mat-checkbox
                                    formControlName="all_day"
                                    class="absolute -top-2 right-0"
                                >
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    </div>
                    @if (!form().value.all_day && allow_time_changes) {
                        <div class="flex items-center space-x-2">
                            <div class="w-1/3 flex-1">
                                <label for="start-time">
                                    {{ 'FORM.TIME_START' | translate
                                    }}<span>*</span>
                                </label>
                                <a-time-field
                                    name="start-time"
                                    [ngModel]="form().value.date"
                                    (ngModelChange)="
                                        form().patchValue({ date: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [use_24hr]="use_24hr"
                                    [timezone]="timezone"
                                ></a-time-field>
                            </div>
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-duration-field
                                    name="end-time"
                                    formControlName="duration"
                                    [time]="form().get('date')?.value"
                                    [max]="max_duration"
                                    [min]="60"
                                    [step]="60"
                                    [use_24hr]="use_24hr"
                                    [timezone]="timezone"
                                >
                                </a-duration-field>
                            </div>
                        </div>
                    }
                    @if (can_recurr) {
                        <div class="flex flex-col">
                            <label for="recurrence">
                                {{ 'FORM.RECURRENCE' | translate
                                }}<span>*</span>
                            </label>
                            <recurrence-field
                                name="recurrence"
                                [date]="form().getRawValue().date"
                                [ngModel]="form().value"
                                (ngModelChange)="onRecurrenceChange($event)"
                                [ngModelOptions]="{ standalone: true }"
                            ></recurrence-field>
                            @if (form().value.id) {
                                <mat-checkbox formControlName="update_master">
                                    {{ 'FORM.UPDATE_FUTURE' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    }
                    @if (can_book_lockers) {
                        <div class="flex items-center space-x-2">
                            <div class="w-1/3 flex-1">
                                <mat-checkbox
                                    [ngModel]="
                                        !!form().value.secondary_resource
                                    "
                                    (ngModelChange)="
                                        form().patchValue({
                                            secondary_resource: $event
                                                ? 'locker'
                                                : '',
                                        })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                >
                                    {{
                                        'BOOKINGS.DESK_REQUIRE_LOCKER'
                                            | translate
                                    }}
                                </mat-checkbox>
                            </div>
                        </div>
                    }
                </section>
                @if ((options | async)?.group) {
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                            >
                                2
                            </div>
                            <div class="text-xl">
                                {{ 'BOOKINGS.DESK_GROUP_MEMBERS' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                        </h3>
                        <div class="overflow-hidden">
                            <a-user-list-field
                                class="mt-4"
                                [ngModel]="(options | async)?.members || []"
                                (ngModelChange)="
                                    setOptions({ members: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></a-user-list-field>
                        </div>
                    </section>
                }
                @if (form().contains('resources')) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                            >
                                {{ (options | async)?.group ? 3 : 2 }}
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.DESK' | translate }}
                            </div>
                        </h3>
                        <desk-list-field
                            formControlName="resources"
                        ></desk-list-field>
                        @if ((options | async)?.group) {
                            <p
                                class="rounded bg-warning px-2 py-1 text-center text-xs shadow"
                            >
                                {{ 'BOOKINGS.DESK_GROUP_INFO' | translate }}
                            </p>
                        }
                    </section>
                }
                @if (has_assets && !(options | async)?.group) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                            >
                                {{ (options | async)?.group ? 4 : 3 }}
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.ASSETS' | translate }}
                            </div>
                        </h3>
                        <asset-list-field
                            [options]="{
                                date: form().getRawValue().date,
                                duration: form().value.duration,
                                all_day: form().value.all_day,
                            }"
                            formControlName="assets"
                        ></asset-list-field>
                    </section>
                }
            </div>
        }
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFormDetailsComponent, { className: "NewDeskFormDetailsComponent", filePath: "apps/workplace/src/app/book/desk-flow/desk-form-details.component.ts", lineNumber: 292 });
})();

// apps/concierge/src/app/desks/desk-book-modal.component.ts
var _DeskBookModalComponent = class _DeskBookModalComponent {
  get form() {
    return this._booking_form.form;
  }
  constructor() {
    this._booking_form = inject(BookingFormService);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this.event = output();
    this.loading = new BehaviorSubject(false);
    if (!this.form.value.id) {
      this.form.patchValue({
        duration: this._settings.get("app.desks.default_duration") || 60
      });
    }
  }
  async save() {
    this.loading.next(true);
    this.form.patchValue({ booking_type: "desk" });
    const event = await this._booking_form.postForm().catch((_) => {
      notifyError(_);
      this.loading.next(false);
      throw _;
    });
    this.event.emit({ reason: "done", metadata: event });
    notifySuccess(i18n("APP.CONCIERGE.DESKS_BOOKING_SUCCESS"));
    this._dialog_ref.close();
    this.loading.next(false);
  }
};
_DeskBookModalComponent.\u0275fac = function DeskBookModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskBookModalComponent)();
};
_DeskBookModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskBookModalComponent, selectors: [["desk-book-modal"]], outputs: { event: "event" }, standalone: false, decls: 5, vars: 9, consts: [[3, "confirm", "heading", "loading"], [3, "form"]], template: function DeskBookModalComponent_Template(rf, ctx) {
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
var DeskBookModalComponent = _DeskBookModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskBookModalComponent, [{
    type: Component,
    args: [{ selector: "desk-book-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.DESKS_BOOK_EDIT'
                    : 'APP.CONCIERGE.DESKS_BOOK_NEW'
                ) | translate
            "
            [loading]="
                (loading | async)
                    ? ('APP.CONCIERGE.DESKS_BOOKING_LOADING' | translate)
                    : ''
            "
            (confirm)="save()"
        >
            <desk-form-details [form]="form" />
        </fullscreen-modal-shell>
    `, standalone: false }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskBookModalComponent, { className: "DeskBookModalComponent", filePath: "apps/concierge/src/app/desks/desk-book-modal.component.ts", lineNumber: 36 });
})();

// apps/concierge/src/app/desks/desks-topbar.component.ts
function DesksTopbarComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LEVEL_ALL"), " ");
  }
}
function DesksTopbarComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
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
function DesksTopbarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function DesksTopbarComponent_Conditional_10_Template_button_click_0_listener() {
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
function DesksTopbarComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function DesksTopbarComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newDesk());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.DESKS_NEW"));
  }
}
function DesksTopbarComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 13);
    \u0275\u0275listener("change", function DesksTopbarComponent_Conditional_12_Template_input_change_4_listener($event) {
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
function DesksTopbarComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function DesksTopbarComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadTemplate());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.DESKS_LIST_DOWNLOAD"));
  }
}
function DesksTopbarComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function DesksTopbarComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.manageRestrictions());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "lock_open");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.DESKS_BOOKING_RULES"));
  }
}
var _DesksTopbarComponent = class _DesksTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._desks = inject(DesksStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._dialog = inject(MatDialog);
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
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
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
    this.subscription("levels", this._org.active_levels.subscribe(async (levels) => {
      const filters = await nextValueFrom(this.filters);
      const zones = filters?.zones?.filter((zone) => levels.find((lvl) => lvl.id === zone) || zone === "All") || [];
      if (!zones.length && levels.length) {
        zones.push(levels[0].id);
      }
      this.updateZones(zones);
    }));
    this.manage = this._router.url?.includes("manage");
    this.is_map = this._router.url?.includes("map");
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
  async loadCSVData(event) {
    const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
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
  async approve(id) {
    const booking = await showBooking(id).toPromise();
    if (booking) {
      this._desks.approveDesk(booking);
    }
  }
  /**
   * Reject a desk booking
   * @param id Booking ID to reject
   */
  async reject(id) {
    const booking = await showBooking(id).toPromise();
    if (booking) {
      this._desks.rejectDesk(booking);
    }
  }
};
_DesksTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DesksTopbarComponent_BaseFactory;
  return function DesksTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275DesksTopbarComponent_BaseFactory || (\u0275DesksTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DesksTopbarComponent)))(__ngFactoryType__ || _DesksTopbarComponent);
  };
})();
_DesksTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesksTopbarComponent, selectors: [["desks-topbar"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 19, consts: [[1, "flex", "h-20", "items-center", "space-x-2", "border-b", "border-base-200", "bg-base-100", "px-4"], ["appearance", "outline"], [3, "ngModelChange", "ngModel", "placeholder"], ["value", "All"], [3, "value"], ["btn", "", "matRipple", "", "matTooltip", "New Desk Booking", 1, "mx-2", "w-40"], ["btn", "", "icon", "", "matRipple", "", 1, "mx-2", "rounded", "bg-primary", "text-white", 3, "matTooltip"], ["btn", "", "icon", "", "matRipple", "", 1, "relative", "rounded", "bg-primary", "text-white", 3, "matTooltip"], [1, "w-2", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], [3, "dateChange"], ["btn", "", "matRipple", "", "matTooltip", "New Desk Booking", 1, "mx-2", "w-40", 3, "click"], ["btn", "", "icon", "", "matRipple", "", 1, "mx-2", "rounded", "bg-primary", "text-white", 3, "click", "matTooltip"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"]], template: function DesksTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("ngModelChange", function DesksTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
      return ctx.updateZones([$event]);
    });
    \u0275\u0275conditionalCreate(6, DesksTopbarComponent_Conditional_6_Template, 3, 3, "mat-option", 3);
    \u0275\u0275repeaterCreate(7, DesksTopbarComponent_For_8_Template, 2, 2, "mat-option", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, DesksTopbarComponent_Conditional_10_Template, 3, 3, "button", 5);
    \u0275\u0275conditionalCreate(11, DesksTopbarComponent_Conditional_11_Template, 4, 3, "button", 6);
    \u0275\u0275conditionalCreate(12, DesksTopbarComponent_Conditional_12_Template, 5, 3, "button", 7);
    \u0275\u0275conditionalCreate(13, DesksTopbarComponent_Conditional_13_Template, 4, 3, "button", 6);
    \u0275\u0275conditionalCreate(14, DesksTopbarComponent_Conditional_14_Template, 4, 3, "button", 6);
    \u0275\u0275element(15, "div", 8);
    \u0275\u0275elementStart(16, "searchbar", 9);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275listener("modelChange", function DesksTopbarComponent_Template_searchbar_modelChange_16_listener($event) {
      return ctx.setFilters({ search: $event });
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "date-options", 10);
    \u0275\u0275listener("dateChange", function DesksTopbarComponent_Template_date_options_dateChange_18_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_9_0;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(3, 9, ctx.filters).zones ? \u0275\u0275pipeBind1(4, 11, ctx.filters).zones[0] : "All")("placeholder", \u0275\u0275pipeBind1(5, 13, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx.is_map ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(9, 15, ctx.levels));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.manage ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.manage ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.manage ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.manage ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.manage ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("model", (tmp_9_0 = \u0275\u0275pipeBind1(17, 17, ctx.filters)) == null ? null : tmp_9_0.search);
  }
}, dependencies: [NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, MatFormField, MatSelect, MatOption, MatTooltip, MatRipple, IconComponent, AsyncPipe, TranslatePipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=desks-topbar.component.css.map */"] });
var DesksTopbarComponent = _DesksTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesksTopbarComponent, [{
    type: Component,
    args: [{ selector: "desks-topbar", template: `
        <div
            class="flex h-20 items-center space-x-2 border-b border-base-200 bg-base-100 px-4"
        >
            <mat-form-field appearance="outline">
                <mat-select
                    [ngModel]="
                        (filters | async).zones
                            ? (filters | async).zones[0]
                            : 'All'
                    "
                    (ngModelChange)="updateZones([$event])"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                >
                    @if (!is_map) {
                        <mat-option value="All">
                            {{ 'COMMON.LEVEL_ALL' | translate }}
                        </mat-option>
                    }
                    @for (level of levels | async; track level) {
                        <mat-option [value]="level.id">
                            {{ level.display_name || level.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            @if (!manage) {
                <button
                    btn
                    matRipple
                    class="mx-2 w-40"
                    matTooltip="New Desk Booking"
                    (click)="newDeskBooking()"
                >
                    {{ 'APP.CONCIERGE.NEW_BOOKING' | translate }}
                </button>
            }
            @if (manage) {
                <button
                    btn
                    icon
                    matRipple
                    class="mx-2 rounded bg-primary text-white"
                    (click)="newDesk()"
                    [matTooltip]="'APP.CONCIERGE.DESKS_NEW' | translate"
                >
                    <icon>add</icon>
                </button>
            }
            @if (manage) {
                <button
                    btn
                    icon
                    matRipple
                    class="relative rounded bg-primary text-white"
                    [matTooltip]="'APP.CONCIERGE.DESKS_LIST_UPLOAD' | translate"
                >
                    <icon>cloud_upload</icon>
                    <input
                        type="file"
                        class="absolute inset-0 opacity-0"
                        (change)="loadCSVData($event)"
                    />
                </button>
            }
            @if (manage) {
                <button
                    btn
                    icon
                    matRipple
                    class="mx-2 rounded bg-primary text-white"
                    (click)="downloadTemplate()"
                    [matTooltip]="
                        'APP.CONCIERGE.DESKS_LIST_DOWNLOAD' | translate
                    "
                >
                    <icon>download</icon>
                </button>
            }
            @if (manage) {
                <button
                    btn
                    icon
                    matRipple
                    class="mx-2 rounded bg-primary text-white"
                    (click)="manageRestrictions()"
                    [matTooltip]="
                        'APP.CONCIERGE.DESKS_BOOKING_RULES' | translate
                    "
                >
                    <icon>lock_open</icon>
                </button>
            }
            <div class="w-2 flex-1"></div>
            <searchbar
                class="mr-2"
                [model]="(filters | async)?.search"
                (modelChange)="setFilters({ search: $event })"
            ></searchbar>
            <date-options (dateChange)="setDate($event)"></date-options>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;598beeb1039b1ab45f9544c34b6ccfd79f95c38cdc3862574ac547cac62c7acc;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/desks/desks-topbar.component.ts */\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=desks-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesksTopbarComponent, { className: "DesksTopbarComponent", filePath: "apps/concierge/src/app/desks/desks-topbar.component.ts", lineNumber: 137 });
})();

// apps/concierge/src/app/desks/desk-qr-code-modal.component.ts
function DeskQrCodeModalComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275elementStart(2, "div", 6);
    \u0275\u0275element(3, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
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
var _DeskQrCodeModalComponent = class _DeskQrCodeModalComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._state = inject(DesksStateService);
    this.print = () => window.print();
    this.desks = this._state.desks.pipe(map((list) => list.map((_) => {
      this.loadQrCode(_);
      return _;
    })));
  }
  get kiosk_url() {
    const path = this._settings.get("app.workplace_url_path") || "/workplace";
    return `${window.location.origin}${path}`;
  }
  loadQrCode(item) {
    const link = `${this.kiosk_url}/#/book/code?asset_id=${encodeURIComponent(item.id)}`;
    item.qr_link = link;
    item.qr_code = generateQRCode(link);
    return item.qr_code;
  }
};
_DeskQrCodeModalComponent.\u0275fac = function DeskQrCodeModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskQrCodeModalComponent)();
};
_DeskQrCodeModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskQrCodeModalComponent, selectors: [["desk-qr-code-modal"]], standalone: false, decls: 12, vars: 5, consts: [[1, "relative", "min-h-screen", "w-screen", "rounded-none", "bg-base-100"], [1, "sticky", "top-0", "flex", "w-full", "items-center", "justify-between", "p-4", "print:hidden"], ["btn", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-[calc(100vh-5rem)]", "flex-wrap", "overflow-auto", "print:h-auto"], ["target", "_blank", "ref", "noopener noreferrer", 1, "mx-auto", "flex", "w-[28%]", "flex-col", "items-center", "justify-center", "landscape:w-[21%]", "print:h-[25vh]", "print:landscape:h-[33.33vh]", 3, "href"], [1, "mx-4", "my-2", "block", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2"], [1, "w-48", 3, "src"], [1, "mx-4", "my-1", "w-[calc(100%-2rem)]", "rounded", "bg-base-200", "p-1", "text-center", "font-mono", "text-sm"]], template: function DeskQrCodeModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function DeskQrCodeModalComponent_Template_button_click_2_listener() {
      return ctx.print();
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3)(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275repeaterCreate(9, DeskQrCodeModalComponent_For_10_Template, 6, 6, "a", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.DESKS_ACTION_PRINT_QR_LIST"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 3, ctx.desks));
  }
}, dependencies: [MatDialogClose, MatRipple, IconComponent, AsyncPipe, TranslatePipe, SafePipe], encapsulation: 2 });
var DeskQrCodeModalComponent = _DeskQrCodeModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskQrCodeModalComponent, [{
    type: Component,
    args: [{ selector: "desk-qr-code-modal", template: `
        <div class="relative min-h-screen w-screen rounded-none bg-base-100">
            <div
                class="sticky top-0 flex w-full items-center justify-between p-4 print:hidden"
            >
                <button btn matRipple (click)="print()">
                    {{ 'APP.CONCIERGE.DESKS_ACTION_PRINT_QR_LIST' | translate }}
                </button>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </div>
            <div
                class="flex h-[calc(100vh-5rem)] flex-wrap overflow-auto print:h-auto"
            >
                @for (desk of desks | async; track desk) {
                    <a
                        [href]="desk.qr_link | safe: 'url'"
                        target="_blank"
                        ref="noopener noreferrer"
                        class="mx-auto flex w-[28%] flex-col items-center justify-center landscape:w-[21%] print:h-[25vh] print:landscape:h-[33.33vh]"
                    >
                        <div
                            class="mx-4 my-2 block rounded-lg border border-base-200 bg-base-100 p-2"
                        >
                            <img class="w-48" [src]="desk.qr_code" />
                        </div>
                        <div
                            class="mx-4 my-1 w-[calc(100%-2rem)] rounded bg-base-200 p-1 text-center font-mono text-sm"
                        >
                            {{ desk.name || desk.id }}
                        </div>
                    </a>
                }
            </div>
        </div>
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskQrCodeModalComponent, { className: "DeskQrCodeModalComponent", filePath: "apps/concierge/src/app/desks/desk-qr-code-modal.component.ts", lineNumber: 50 });
})();

// apps/concierge/src/app/desks/desks.component.ts
var _c04 = ["app-desks", ""];
function DesksComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function DesksComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newDeskBooking());
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 14);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.NEW_BOOKING"), " ");
  }
}
function DesksComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function DesksComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editDesk());
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 14);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.DESKS_NEW"), " ");
  }
}
function DesksComponent_Conditional_14_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const level_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, level_r5.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function DesksComponent_Conditional_14_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 17);
    \u0275\u0275conditionalCreate(2, DesksComponent_Conditional_14_For_5_Conditional_2_Template, 5, 3, "div", 18);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", level_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r5.display_name || level_r5.name, " ");
  }
}
function DesksComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 9)(1, "mat-select", 15);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function DesksComponent_Conditional_14_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateZones($event));
    });
    \u0275\u0275repeaterCreate(4, DesksComponent_Conditional_14_For_5_Template, 5, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.filters)) == null ? null : tmp_1_0.zones)("placeholder", \u0275\u0275pipeBind1(3, 4, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 6, ctx_r1.levels));
  }
}
function DesksComponent_Conditional_15_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const level_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, level_r7.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function DesksComponent_Conditional_15_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 17);
    \u0275\u0275conditionalCreate(2, DesksComponent_Conditional_15_For_6_Conditional_2_Template, 5, 3, "div", 18);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", level_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r7.display_name || level_r7.name, " ");
  }
}
function DesksComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 9)(1, "mat-select", 20);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("ngModelChange", function DesksComponent_Conditional_15_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateZones([$event]));
    });
    \u0275\u0275repeaterCreate(5, DesksComponent_Conditional_15_For_6_Template, 5, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ((tmp_1_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.filters)) == null ? null : tmp_1_0.zones == null ? null : tmp_1_0.zones.length) ? (tmp_1_0 = \u0275\u0275pipeBind1(3, 4, ctx_r1.filters)) == null ? null : tmp_1_0.zones[0] : "")("placeholder", \u0275\u0275pipeBind1(4, 6, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(7, 8, ctx_r1.levels));
  }
}
function DesksComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 21);
    \u0275\u0275listener("dateChange", function DesksComponent_Conditional_17_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 22);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("click", function DesksComponent_Conditional_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "refresh");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 22);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275listener("click", function DesksComponent_Conditional_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectAll());
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "event_busy");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 4, "COMMON.REFRESH"))("disabled", \u0275\u0275pipeBind1(3, 6, ctx_r1.loading));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 8, "APP.CONCIERGE.REJECT_ALL"))("disabled", \u0275\u0275pipeBind1(8, 10, ctx_r1.loading));
  }
}
function DesksComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewQRCodes());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "qr_code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 24);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 25);
    \u0275\u0275listener("change", function DesksComponent_Conditional_18_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadCSVData($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_18_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275elementStart(11, "icon");
    \u0275\u0275text(12, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 26);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_18_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageRestrictions());
    });
    \u0275\u0275elementStart(15, "icon");
    \u0275\u0275text(16, "lock_open");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 4, "APP.CONCIERGE.DESKS_VIEW_QR_CODE_LIST"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 6, "APP.CONCIERGE.DESKS_LIST_UPLOAD"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 8, "APP.CONCIERGE.DESKS_LIST_DOWNLOAD"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 10, "APP.CONCIERGE.DESKS_BOOKING_RULES"));
  }
}
function DesksComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 11);
  }
}
var _DesksComponent = class _DesksComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(DesksStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
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
  get use_region() {
    return !!this._settings.get("app.use_region");
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
  async loadCSVData(event) {
    const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
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
  }
  _checkManage() {
    this.manage = this.path.includes("manage");
    if (this.manage) {
      this.subscription("zone-changes", this._org.active_levels.subscribe(async (lvls) => {
        if (!lvls.length)
          return;
        const { zones } = await nextValueFrom(this._state.filters);
        const levels_in_zones = zones?.length && zones.some((z) => lvls.find((lvl) => lvl.id === z));
        if (!levels_in_zones)
          this.updateZones([lvls[0].id]);
      }));
    } else
      this.unsub("zone-changes");
  }
};
_DesksComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DesksComponent_BaseFactory;
  return function DesksComponent_Factory(__ngFactoryType__) {
    return (\u0275DesksComponent_BaseFactory || (\u0275DesksComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DesksComponent)))(__ngFactoryType__ || _DesksComponent);
  };
})();
_DesksComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesksComponent, selectors: [["", "app-desks", ""]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c04, decls: 23, vars: 15, consts: [[1, "print:hidden"], [1, "flex", "h-px", "flex-1", "print:hidden"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "w-full", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], ["btn", "", "matRipple", "", 1, "w-44", "space-x-2"], [1, "mb-4", "flex", "w-full", "items-center", "space-x-2", "px-8"], ["appearance", "outline", 1, "no-subscript", "w-60"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], ["mode", "indeterminate", 1, "w-full"], ["btn", "", "matRipple", "", 1, "w-44", "space-x-2", 3, "click"], [1, "pl-2"], [1, "text-2xl"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "dateChange"], ["btn", "", "icon", "", "matRipple", "", 1, "ml-2", "rounded", "border", "border-base-200", 3, "click", "matTooltip", "disabled"], ["btn", "", "icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], ["btn", "", "icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "matTooltip"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"]], template: function DesksComponent_Template(rf, ctx) {
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
    \u0275\u0275conditionalCreate(11, DesksComponent_Conditional_11_Template, 6, 3, "button", 7);
    \u0275\u0275conditionalCreate(12, DesksComponent_Conditional_12_Template, 6, 3, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 8);
    \u0275\u0275conditionalCreate(14, DesksComponent_Conditional_14_Template, 7, 8, "mat-form-field", 9);
    \u0275\u0275conditionalCreate(15, DesksComponent_Conditional_15_Template, 8, 10, "mat-form-field", 9);
    \u0275\u0275element(16, "div", 5);
    \u0275\u0275conditionalCreate(17, DesksComponent_Conditional_17_Template, 11, 12);
    \u0275\u0275conditionalCreate(18, DesksComponent_Conditional_18_Template, 17, 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10);
    \u0275\u0275element(20, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, DesksComponent_Conditional_21_Template, 1, 0, "mat-progress-bar", 11);
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
    \u0275\u0275conditional(ctx.path !== "manage" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path === "manage" ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.manage ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.manage ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.path === "events" ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path === "manage" ? 18 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(22, 13, ctx.loading) && ctx.path === "events" ? 21 : -1);
  }
}, dependencies: [NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, ApplicationTopbarComponent, ApplicationSidebarComponent, MatFormField, MatSelect, MatOption, MatTooltip, MatProgressBar, MatRipple, IconComponent, RouterOutlet, AsyncPipe, TranslatePipe, BuildingPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=desks.component.css.map */"] });
var DesksComponent = _DesksComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesksComponent, [{
    type: Component,
    args: [{ selector: "[app-desks]", template: `
        <app-topbar class="print:hidden" />
        <div class="flex h-px flex-1 print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex w-full items-center space-x-2 px-8 py-4">
                    <h2 class="text-2xl font-medium">
                        {{
                            (manage
                                ? 'APP.CONCIERGE.DESKS_HEADER'
                                : 'APP.CONCIERGE.DESKS_BOOK_HEADER'
                            ) | translate
                        }}
                    </h2>
                    <div class="w-px flex-1"></div>
                    <searchbar
                        class="mr-2"
                        [model]="(filters | async)?.search"
                        (modelChange)="setFilters({ search: $event })"
                    ></searchbar>
                    @if (path !== 'manage') {
                        <button
                            btn
                            matRipple
                            class="w-44 space-x-2"
                            (click)="newDeskBooking()"
                        >
                            <div class="pl-2">
                                {{ 'APP.CONCIERGE.NEW_BOOKING' | translate }}
                            </div>
                            <icon class="text-2xl">add</icon>
                        </button>
                    }
                    @if (path === 'manage') {
                        <button
                            btn
                            matRipple
                            class="w-44 space-x-2"
                            (click)="editDesk()"
                        >
                            <div class="pl-2">
                                {{ 'APP.CONCIERGE.DESKS_NEW' | translate }}
                            </div>
                            <icon class="text-2xl">add</icon>
                        </button>
                    }
                </div>
                <div class="mb-4 flex w-full items-center space-x-2 px-8">
                    @if (!manage) {
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-60"
                        >
                            <mat-select
                                [ngModel]="(filters | async)?.zones"
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
                                                        (
                                                            level.parent_id
                                                            | building
                                                        )?.display_name
                                                    }}
                                                    <span class="opacity-0">
                                                        -
                                                    </span>
                                                </div>
                                            }
                                            <div>
                                                {{
                                                    level.display_name ||
                                                        level.name
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (manage) {
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-60"
                        >
                            <mat-select
                                [ngModel]="
                                    (filters | async)?.zones?.length
                                        ? (filters | async)?.zones[0]
                                        : ''
                                "
                                (ngModelChange)="updateZones([$event])"
                                [placeholder]="'COMMON.LEVEL_ALL' | translate"
                            >
                                @for (level of levels | async; track level) {
                                    <mat-option [value]="level.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            level.parent_id
                                                            | building
                                                        )?.display_name
                                                    }}
                                                    <span class="opacity-0">
                                                        -
                                                    </span>
                                                </div>
                                            }
                                            <div>
                                                {{
                                                    level.display_name ||
                                                        level.name
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    <div class="w-px flex-1"></div>
                    @if (path === 'events') {
                        <date-options
                            (dateChange)="setDate($event)"
                        ></date-options>
                        <button
                            btn
                            icon
                            matRipple
                            [matTooltip]="'COMMON.REFRESH' | translate"
                            class="ml-2 rounded border border-base-200"
                            (click)="refresh()"
                            [disabled]="loading | async"
                        >
                            <icon>refresh</icon>
                        </button>
                        <button
                            btn
                            icon
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.REJECT_ALL' | translate
                            "
                            class="ml-2 rounded border border-base-200"
                            (click)="rejectAll()"
                            [disabled]="loading | async"
                        >
                            <icon>event_busy</icon>
                        </button>
                    }
                    @if (path === 'manage') {
                        <button
                            btn
                            icon
                            matRipple
                            class="h-12 w-12 rounded bg-secondary text-secondary-content"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_VIEW_QR_CODE_LIST'
                                    | translate
                            "
                            (click)="viewQRCodes()"
                        >
                            <icon>qr_code</icon>
                        </button>
                        <button
                            btn
                            icon
                            matRipple
                            class="h-12 w-12 rounded bg-secondary text-secondary-content"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_LIST_UPLOAD' | translate
                            "
                        >
                            <icon>cloud_upload</icon>
                            <input
                                type="file"
                                class="absolute inset-0 opacity-0"
                                (change)="loadCSVData($event)"
                            />
                        </button>
                        <button
                            btn
                            icon
                            matRipple
                            class="h-12 w-12 rounded bg-secondary text-secondary-content"
                            (click)="downloadTemplate()"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_LIST_DOWNLOAD' | translate
                            "
                        >
                            <icon>download</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            class="h-12 w-12 rounded bg-secondary text-secondary-content"
                            (click)="manageRestrictions()"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_BOOKING_RULES' | translate
                            "
                        >
                            <icon>lock_open</icon>
                        </button>
                    }
                </div>
                <div class="relative h-1/2 w-full flex-1 overflow-auto px-8">
                    <router-outlet></router-outlet>
                </div>
                @if ((loading | async) && path === 'events') {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
                }
            </main>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;08c828c36224658230d6844bbbe8551e02a5c30c320aa5e48c90063783b9b8fa;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/desks/desks.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=desks.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesksComponent, { className: "DesksComponent", filePath: "apps/concierge/src/app/desks/desks.component.ts", lineNumber: 265 });
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
var _DesksModule = class _DesksModule {
};
_DesksModule.\u0275fac = function DesksModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesksModule)();
};
_DesksModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DesksModule });
_DesksModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
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
var DesksModule = _DesksModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesksModule, [{
    type: NgModule,
    args: [{
      declarations: [
        DesksComponent,
        DeskBookingsComponent,
        DesksTopbarComponent,
        DeskMapViewComponent,
        DesksManageComponent,
        NewDeskFormDetailsComponent,
        DeskBookModalComponent,
        DeskModalComponent,
        DeskQrCodeModalComponent
      ],
      imports: [
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
      ]
    }]
  }], null, null);
})();
export {
  DesksModule
};
//# sourceMappingURL=desks.module-Q4KYB3DG.js.map
