import {
  ParkingStateService
} from "./chunk-SUHPBXV6.js";
import {
  ExploreParkingService
} from "./chunk-TR4MVXRB.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-BEMH4LT5.js";
import {
  SharedBookingsModule
} from "./chunk-RNUBUWJY.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  BookingRulesModalComponent,
  BuildingPipe,
  Clipboard,
  CommonModule,
  DateOptionsComponent,
  DatePipe,
  ExploreStateService,
  FormFieldsModule,
  FormsModule,
  IconComponent,
  InteractiveMapComponent,
  MatDialog,
  MatFormField,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatProgressBar,
  MatProgressBarModule,
  MatRipple,
  MatSelect,
  MatTooltip,
  NavigationEnd,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SearchbarComponent,
  SettingsService,
  SidebarComponent,
  SimpleTableComponent,
  TranslatePipe,
  UIModule,
  __async,
  __spreadProps,
  __spreadValues,
  combineLatest,
  first,
  i18n,
  notifySuccess,
  take,
  timer,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵpureFunction8,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZMOZKBJD.js";

// apps/concierge/src/app/parking/parking-bookings-list.component.ts
var _c0 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "4.75rem", sortable: false });
var _c1 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c2 = (a0) => ({ key: "asset_name", name: a0 });
var _c3 = (a0, a1) => ({ key: "user_name", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "booked_by_name", name: a0, content: a1 });
var _c5 = (a0, a1) => ({ key: "plate_number", name: a0, content: a1, size: "10rem", sortable: false });
var _c6 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "9.5rem" });
var _c7 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
var _c9 = (a0) => ({ time: a0 });
function ParkingBookingsListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r1.all_day || row_r1.duration > 12 * 60 ? \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY") : \u0275\u0275pipeBind2(3, 3, row_r1.date, ctx_r1.time_format) + " - " + \u0275\u0275pipeBind2(4, 6, row_r1.date_end, ctx_r1.time_format), " ");
  }
}
function ParkingBookingsListComponent_ng_template_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.user_email, " ");
  }
}
function ParkingBookingsListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ParkingBookingsListComponent_ng_template_14_div_3_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.user_name || row_r3.user_email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r3.user_name && row_r3.user_email);
  }
}
function ParkingBookingsListComponent_ng_template_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.booked_by_email, " ");
  }
}
function ParkingBookingsListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ParkingBookingsListComponent_ng_template_16_div_3_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.booked_by_name || row_r4.booked_by_email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r4.booked_by_name && row_r4.booked_by_email);
  }
}
function ParkingBookingsListComponent_ng_template_18_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "app-icon");
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(2, 4, "APP.CONCIERGE.PARKING_CHECKED_OUT_AT", \u0275\u0275pureFunction1(7, _c9, \u0275\u0275pipeBind2(1, 1, row_r5.checked_out_at * 1e3, ctx_r1.time_format))));
  }
}
function ParkingBookingsListComponent_ng_template_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "question_mark");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.PARKING_NOT_CHECKED_IN"));
  }
}
function ParkingBookingsListComponent_ng_template_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.PARKING_CHECKED_IN"));
  }
}
function ParkingBookingsListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ParkingBookingsListComponent_ng_template_18_div_0_Template, 5, 9, "div", 14)(1, ParkingBookingsListComponent_ng_template_18_div_1_Template, 4, 3, "div", 15)(2, ParkingBookingsListComponent_ng_template_18_div_2_Template, 4, 3, "div", 16);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275property("ngIf", !(row_r5 == null ? null : row_r5.checked_in) && row_r5.checked_out_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(row_r5 == null ? null : row_r5.checked_in) && !row_r5.checked_out_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r5 == null ? null : row_r5.checked_in);
  }
}
function ParkingBookingsListComponent_ng_template_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingBookingsListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ParkingBookingsListComponent_ng_template_20_span_2_Template, 3, 3, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6 == null ? null : row_r6.extension_data == null ? null : row_r6.extension_data.plate_number, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(row_r6 == null ? null : row_r6.extension_data == null ? null : row_r6.extension_data.plate_number));
  }
}
function ParkingBookingsListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24)(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-icon", 27);
    \u0275\u0275text(7, "arrow_drop_down");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 7)(10, "button", 28);
    \u0275\u0275listener("click", function ParkingBookingsListComponent_ng_template_22_Template_button_click_10_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approve(row_r8));
    });
    \u0275\u0275elementStart(11, "div", 29)(12, "app-icon", 27);
    \u0275\u0275text(13, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 30);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 28);
    \u0275\u0275listener("click", function ParkingBookingsListComponent_ng_template_22_Template_button_click_17_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reject(row_r8));
    });
    \u0275\u0275elementStart(18, "div", 29)(19, "app-icon", 27);
    \u0275\u0275text(20, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 30);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    const menu_r9 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success-content", (row_r8 == null ? null : row_r8.status) === "approved")("bg-success", (row_r8 == null ? null : row_r8.status) === "approved")("text-error-content", (row_r8 == null ? null : row_r8.status) === "declined")("bg-error", (row_r8 == null ? null : row_r8.status) === "declined")("text-neutral-content", (row_r8 == null ? null : row_r8.status) === "ended")("bg-neutral", (row_r8 == null ? null : row_r8.status) === "ended")("opacity-30", (row_r8 == null ? null : row_r8.status) === "ended")("text-warning-content", (row_r8 == null ? null : row_r8.status) === "tentative")("bg-warning", (row_r8 == null ? null : row_r8.status) === "tentative");
    \u0275\u0275property("matMenuTriggerFor", menu_r9)("disabled", (row_r8 == null ? null : row_r8.status) === "ended");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 23, (row_r8 == null ? null : row_r8.status) === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : (row_r8 == null ? null : row_r8.status) === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : (row_r8 == null ? null : row_r8.status) === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 25, "APP.CONCIERGE.PARKING_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 27, "APP.CONCIERGE.PARKING_DECLINE"), " ");
  }
}
function ParkingBookingsListComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 32);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingBookingsListComponent_ng_template_24_Template_button_click_1_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editReservation(row_r11));
    });
    \u0275\u0275elementStart(3, "app-icon", 27);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("disabled", row_r11.checked_in || row_r11.state === "in_progress" || row_r11.status === "ended" || row_r11.instance)("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.PARKING_EDIT"));
  }
}
var ParkingBookingsListComponent = class _ParkingBookingsListComponent {
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.events = this._state.bookings;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.reject = (e) => this._state.rejectBooking(e);
    this.approve = (e) => this._state.approveBooking(e);
    this.editReservation = (e) => this._state.editReservation(e);
  }
  static {
    this.\u0275fac = function ParkingBookingsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingBookingsListComponent)(\u0275\u0275directiveInject(ParkingStateService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingBookingsListComponent, selectors: [["parking-bookings-list"]], standalone: false, decls: 27, vars: 58, consts: [["date_template", ""], ["person_template", ""], ["host_template", ""], ["state_template", ""], ["plate_template", ""], ["status_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "sticky", "left-0", "w-full"], [1, "min-w-[76rem]", "block", "text-sm", 3, "data", "columns", "filter", "sortable", "empty_message"], [1, "w-full", "h-20"], [1, "px-4", "py-2"], ["class", "opacity-30 text-xs", 4, "ngIf"], [1, "opacity-30", "text-xs"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-base-300 text-base-100 mx-auto", "matTooltipPosition", "right", 3, "matTooltip", 4, "ngIf"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto", "matTooltipPosition", "right", 3, "matTooltip", 4, "ngIf"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto", "matTooltipPosition", "right", 3, "matTooltip", 4, "ngIf"], ["matTooltipPosition", "right", 1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-base-300", "text-base-100", "mx-auto", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-warning", "text-warning-content", "mx-auto", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-success", "text-success-content", "mx-auto", 3, "matTooltip"], [1, "p-4", "font-mono", "text-sm", "uppercase"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], [1, "px-4"], ["matRipple", "", 1, "rounded-3xl", "border-none", "w-[7.5rem]", "h-10", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "pl-4", "pr-2", "space-x-2"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "flex", "items-center", "justify-end", "space-x-2", "mx-auto"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"]], template: function ParkingBookingsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "mat-progress-bar", 8);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275element(2, "simple-table", 9);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "async");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275template(12, ParkingBookingsListComponent_ng_template_12_Template, 5, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, ParkingBookingsListComponent_ng_template_14_Template, 4, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(16, ParkingBookingsListComponent_ng_template_16_Template, 4, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(18, ParkingBookingsListComponent_ng_template_18_Template, 3, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(20, ParkingBookingsListComponent_ng_template_20_Template, 3, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(22, ParkingBookingsListComponent_ng_template_22_Template, 24, 29, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(24, ParkingBookingsListComponent_ng_template_24_Template, 5, 4, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
        \u0275\u0275element(26, "div", 10);
      }
      if (rf & 2) {
        let tmp_7_0;
        let tmp_10_0;
        const date_template_r12 = \u0275\u0275reference(13);
        const person_template_r13 = \u0275\u0275reference(15);
        const host_template_r14 = \u0275\u0275reference(17);
        const state_template_r15 = \u0275\u0275reference(19);
        const plate_template_r16 = \u0275\u0275reference(21);
        const status_template_r17 = \u0275\u0275reference(23);
        const action_template_r18 = \u0275\u0275reference(25);
        \u0275\u0275classProp("opacity-0", !((tmp_7_0 = \u0275\u0275pipeBind1(1, 7, ctx.loading)) == null ? null : tmp_7_0.includes("bookings")));
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.events)("columns", \u0275\u0275pureFunction8(49, _c8, \u0275\u0275pureFunction2(27, _c0, \u0275\u0275pipeBind1(3, 9, "COMMON.STATUS_BUSY"), state_template_r15), \u0275\u0275pureFunction2(30, _c1, \u0275\u0275pipeBind1(4, 11, "FORM.TIME"), date_template_r12), \u0275\u0275pureFunction1(33, _c2, \u0275\u0275pipeBind1(5, 13, "APP.CONCIERGE.PARKING_BAY_NUMBER")), \u0275\u0275pureFunction2(35, _c3, \u0275\u0275pipeBind1(6, 15, "APP.CONCIERGE.PARKING_RESERVED_FOR"), person_template_r13), \u0275\u0275pureFunction2(38, _c4, \u0275\u0275pipeBind1(7, 17, "APP.CONCIERGE.PARKING_RESERVED_BY"), host_template_r14), \u0275\u0275pureFunction2(41, _c5, \u0275\u0275pipeBind1(8, 19, "EXPLORE.PARKING_PLATE_NUMBER"), plate_template_r16), \u0275\u0275pureFunction2(44, _c6, \u0275\u0275pipeBind1(9, 21, "COMMON.STATUS"), status_template_r17), \u0275\u0275pureFunction1(47, _c7, action_template_r18)))("filter", (tmp_10_0 = \u0275\u0275pipeBind1(10, 23, ctx.options)) == null ? null : tmp_10_0.search)("sortable", true)("empty_message", \u0275\u0275pipeBind1(11, 25, "APP.CONCIERGE.PARKING_BOOKINGS_EMPTY"));
      }
    }, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatProgressBar, MatRipple, IconComponent, SimpleTableComponent, AsyncPipe, DatePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingBookingsListComponent, { className: "ParkingBookingsListComponent", filePath: "apps/concierge/src/app/parking/parking-bookings-list.component.ts", lineNumber: 223 });
})();

// apps/concierge/src/app/parking/parking-space-list.component.ts
var _c02 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c12 = (a0) => ({ key: "assigned_to", name: "Assigned", content: a0 });
var _c22 = (a0) => ({ key: "notes", name: a0 });
var _c32 = (a0, a1) => ({ key: "status", name: a0, content: a1, sortable: false, size: "4.5rem" });
var _c42 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6.5rem" });
var _c52 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ParkingSpaceListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "app-icon", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-warning", !(ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("free")) && !(ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("busy")))("text-warning-content", !(ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("free")) && !(ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("busy")))("bg-success", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("free"))("text-success-content", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("free"))("bg-error", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("busy"))("text-error-content", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("busy"));
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 14, ctx_r1.statusTooltip(ctx_r1.space_status[row_r1.id])));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("assigned")) ? "person" : (ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("reuse")) ? "event_available" : "question_mark", " ");
  }
}
function ParkingSpaceListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_9_Template_button_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(row_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    const data_r5 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.map_id || row_r4.id, " ");
  }
}
function ParkingSpaceListComponent_ng_template_11_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.UNASSIGNED"), " ");
  }
}
function ParkingSpaceListComponent_ng_template_11_button_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r7 = \u0275\u0275nextContext(2).data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r7, " ");
  }
}
function ParkingSpaceListComponent_ng_template_11_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_11_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const data_r7 = \u0275\u0275nextContext().data;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(data_r7, "assigned"));
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ParkingSpaceListComponent_ng_template_11_button_1_div_3_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    const row_r9 = ctx_r7.row;
    const data_r7 = ctx_r7.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.assigned_name || data_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r9.assigned_name);
  }
}
function ParkingSpaceListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ParkingSpaceListComponent_ng_template_11_div_0_Template, 3, 3, "div", 12)(1, ParkingSpaceListComponent_ng_template_11_button_1_Template, 4, 2, "button", 13);
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275property("ngIf", !data_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r7);
  }
}
function ParkingSpaceListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 17);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_13_Template_button_click_1_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editSpace(row_r11));
    });
    \u0275\u0275elementStart(3, "app-icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_13_Template_button_click_5_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeSpace(row_r11));
    });
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.PARKING_SPACE_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "APP.CONCIERGE.PARKING_SPACE_REMOVE"));
  }
}
var ParkingSpaceListComponent = class _ParkingSpaceListComponent extends AsyncHandler {
  constructor(_state, _clipboard) {
    super();
    this._state = _state;
    this._clipboard = _clipboard;
    this.spaces = this._state.spaces;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.bookings = this._state.bookings;
    this.space_status = {};
    this.editSpace = (s) => this._state.editSpace(s);
    this.removeSpace = (s) => this._state.removeSpace(s);
  }
  ngOnInit() {
    this.subscription("bookings", combineLatest([this.spaces, this.bookings]).subscribe(([spaces, bookings]) => this._updateStatusList(spaces, bookings)));
  }
  copyToClipboard(id, type) {
    const success = this._clipboard.copy(id);
    if (success)
      notifySuccess(i18n(type ? "APP.CONCIERGE.PARKING_COPIED_USER" : "APP.CONCIERGE.PARKING_COPIED_ID"));
  }
  statusTooltip(status) {
    switch (status) {
      case "assigned_free":
        return "APP.CONCIERGE.PARKING_STATUS_ASSIGNED_FREE";
      case "assigned_busy":
        return "APP.CONCIERGE.PARKING_STATUS_ASSIGNED_BUSY";
      case "reuse_busy":
        return "APP.CONCIERGE.PARKING_STATUS_ASSIGNED_OTHER";
      case "busy":
        return "APP.CONCIERGE.PARKING_STATUS_BUSY";
      case "free":
        return "APP.CONCIERGE.PARKING_STATUS_FREE";
    }
    return "APP.CONCIERGE.PARKING_STATUS_FREE";
  }
  _updateStatusList(spaces, bookings) {
    for (const space of spaces) {
      const booking = bookings.find((_) => _.asset_id === space.id && _.status !== "declined" && _.status !== "cancelled" && _.status !== "ended");
      if (space.assigned_to && !booking) {
        this.space_status[space.id] = "assigned_free";
      } else if (space.assigned_to && booking && booking.user_email === space.assigned_to) {
        this.space_status[space.id] = "assigned_busy";
      } else if (space.assigned_to && booking && booking.user_email !== space.assigned_to) {
        this.space_status[space.id] = "reuse_busy";
      } else if (!space.assigned_to && booking) {
        this.space_status[space.id] = "busy";
      } else {
        this.space_status[space.id] = "free";
      }
    }
  }
  static {
    this.\u0275fac = function ParkingSpaceListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpaceListComponent)(\u0275\u0275directiveInject(ParkingStateService), \u0275\u0275directiveInject(Clipboard));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceListComponent, selectors: [["parking-space-list"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 34, consts: [["status_template", ""], ["name_template", ""], ["assigned_template", ""], ["action_template", ""], [1, "w-full"], [1, "min-w-[52rem]", "block", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "w-full", "h-20"], ["matTooltipPosition", "left", 1, "flex", "items-center", "justify-center", "h-8", "w-8", "rounded", "mx-auto", 3, "matTooltip"], [1, "text-2xl"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "text-[0.625rem]", "opacity-30", "font-mono"], ["class", "p-4 opacity-30", 4, "ngIf"], ["class", "px-4 py-2 text-left leading-tight", 3, "click", 4, "ngIf"], [1, "p-4", "opacity-30"], ["class", "text-[0.625rem] opacity-30 font-mono", 4, "ngIf"], [1, "flex", "items-center", "space-x-2", "mx-auto"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function ParkingSpaceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "mat-progress-bar", 4);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275element(2, "simple-table", 5);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, ParkingSpaceListComponent_ng_template_7_Template, 4, 16, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, ParkingSpaceListComponent_ng_template_9_Template, 5, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, ParkingSpaceListComponent_ng_template_11_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(13, ParkingSpaceListComponent_ng_template_13_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275element(15, "div", 6);
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_7_0;
        const status_template_r12 = \u0275\u0275reference(8);
        const name_template_r13 = \u0275\u0275reference(10);
        const assigned_template_r14 = \u0275\u0275reference(12);
        const action_template_r15 = \u0275\u0275reference(14);
        \u0275\u0275classProp("opacity-0", !((tmp_4_0 = \u0275\u0275pipeBind1(1, 6, ctx.loading)) == null ? null : tmp_4_0.includes("spaces")));
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.spaces)("columns", \u0275\u0275pureFunction5(28, _c52, \u0275\u0275pureFunction2(16, _c02, \u0275\u0275pipeBind1(3, 8, "APP.CONCIERGE.PARKING_BAY"), name_template_r13), \u0275\u0275pureFunction1(19, _c12, assigned_template_r14), \u0275\u0275pureFunction1(21, _c22, \u0275\u0275pipeBind1(4, 10, "FORM.NOTES")), \u0275\u0275pureFunction2(23, _c32, \u0275\u0275pipeBind1(5, 12, "COMMON.STATUS"), status_template_r12), \u0275\u0275pureFunction1(26, _c42, action_template_r15)))("filter", (tmp_7_0 = \u0275\u0275pipeBind1(6, 14, ctx.options)) == null ? null : tmp_7_0.search)("sortable", true);
      }
    }, dependencies: [NgIf, MatTooltip, MatProgressBar, MatRipple, IconComponent, SimpleTableComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceListComponent, { className: "ParkingSpaceListComponent", filePath: "apps/concierge/src/app/parking/parking-space-list.component.ts", lineNumber: 141 });
})();

// apps/concierge/src/app/parking/parking-topbar.component.ts
function ParkingTopbarComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function ParkingTopbarComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newParkingSpace());
    });
    \u0275\u0275elementStart(2, "div", 16);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !((tmp_1_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.options)) == null ? null : tmp_1_0.zones == null ? null : tmp_1_0.zones.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "APP.CONCIERGE.PARKING_SPACE_ADD"), " ");
  }
}
function ParkingTopbarComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ParkingTopbarComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newParkingUser());
    });
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.PARKING_USER_ADD"), " ");
  }
}
function ParkingTopbarComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ParkingTopbarComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newReservation());
    });
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.PARKING_ADD"), " ");
  }
}
function ParkingTopbarComponent_mat_option_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const level_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = \u0275\u0275pipeBind1(2, 1, level_r5.parent_id)) == null ? null : tmp_3_0.display_name, " ");
  }
}
function ParkingTopbarComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19)(1, "div", 20);
    \u0275\u0275template(2, ParkingTopbarComponent_mat_option_16_div_2_Template, 5, 3, "div", 21);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(level_r5.display_name || level_r5.name);
  }
}
function ParkingTopbarComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ParkingTopbarComponent_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageRestrictions());
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "lock_open");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.PARKING_BOOKING_RULES"));
  }
}
function ParkingTopbarComponent_date_options_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 25);
    \u0275\u0275listener("dateChange", function ParkingTopbarComponent_date_options_20_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
  }
}
var ParkingTopbarComponent = class _ParkingTopbarComponent extends AsyncHandler {
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "parking" }
    });
  }
  constructor(_state, _org, _route, _router, _settings, _dialog) {
    super();
    this._state = _state;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this._settings = _settings;
    this._dialog = _dialog;
    this.path = "";
    this.zones = [];
    this.levels = this._state.levels;
    this.options = this._state.options;
    this.setDate = (d) => this._state.setOptions({ date: d });
    this.setSearch = (str) => this._state.setOptions({ search: str });
    this.updateZones = (z) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setOptions({ zones: z });
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      yield timer(1e3).toPromise();
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
        if (params.has("zone_ids") && this._router.url.includes("parking")) {
          const zones = params.get("zone_ids").split(",");
          if (zones.length) {
            const level = this._org.levelWithID(zones);
            this.zones = zones;
            if (!level)
              return;
            this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
            this._state.setOptions({ zones });
          }
        }
      }));
      this.subscription("levels", this._state.levels.subscribe((levels) => {
        if (this.use_region)
          return;
        this.zones = this.zones.filter((zone) => levels.find((lvl) => lvl.id === zone));
        if (!this.zones.length && levels.length) {
          this.zones.push(levels[0].id);
        }
        this.updateZones(this.zones);
      }));
      this.subscription("router.events", this._router.events.subscribe((e) => {
        if (e instanceof NavigationEnd)
          this._updatePath();
      }));
      this._updatePath();
    });
  }
  newParkingSpace() {
    this._state.editSpace();
  }
  newParkingUser() {
    this._state.editUser();
  }
  newReservation() {
    return __async(this, null, function* () {
      const { date } = yield this.options.pipe(take(1)).toPromise();
      this._state.editReservation(void 0, {
        date: date || Date.now(),
        allow_time_changes: true
      });
    });
  }
  _updatePath() {
    this.timeout("update_path", () => {
      const parts = this._router.url?.split("/") || [""];
      this.path = parts[parts.length - 1].split("?")[0];
    }, 50);
  }
  static {
    this.\u0275fac = function ParkingTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingTopbarComponent)(\u0275\u0275directiveInject(ParkingStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingTopbarComponent, selectors: [["parking-topbar"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 21, consts: [[1, "flex", "items-center", "w-full", "py-4", "px-8", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-px"], [1, "mr-2", 3, "modelChange", "model"], [3, "matTooltip"], ["btn", "", "matRipple", "", "class", "space-x-2 w-40", 3, "disabled", "click", 4, "ngIf"], ["btn", "", "matRipple", "", "class", "space-x-2 w-40", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "class", "space-x-2 w-48", 3, "click", 4, "ngIf"], [1, "flex", "items-center", "bg-base-100", "px-8", "mb-2", "h-14"], ["appearance", "outline", 1, "w-56", "no-subscript"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex-1", "w-0"], ["icon", "", "matRipple", "", "class", "bg-secondary text-secondary-content rounded h-12 w-12", 3, "matTooltip", "click", 4, "ngIf"], [3, "dateChange", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "space-x-2", "w-40", 3, "click", "disabled"], [1, "pl-2"], ["btn", "", "matRipple", "", 1, "space-x-2", "w-40", 3, "click"], ["btn", "", "matRipple", "", 1, "space-x-2", "w-48", 3, "click"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click", "matTooltip"], [3, "dateChange"]], template: function ParkingTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 2);
        \u0275\u0275elementStart(5, "searchbar", 3);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275listener("modelChange", function ParkingTopbarComponent_Template_searchbar_modelChange_5_listener($event) {
          return ctx.setSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275template(9, ParkingTopbarComponent_button_9_Template, 7, 6, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, ParkingTopbarComponent_button_10_Template, 6, 3, "button", 6)(11, ParkingTopbarComponent_button_11_Template, 6, 3, "button", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "mat-form-field", 9)(14, "mat-select", 10);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function ParkingTopbarComponent_Template_mat_select_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ParkingTopbarComponent_Template_mat_select_ngModelChange_14_listener($event) {
          return ctx.updateZones($event);
        });
        \u0275\u0275template(16, ParkingTopbarComponent_mat_option_16_Template, 5, 3, "mat-option", 11);
        \u0275\u0275pipe(17, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(18, "div", 12);
        \u0275\u0275template(19, ParkingTopbarComponent_button_19_Template, 4, 3, "button", 13)(20, ParkingTopbarComponent_date_options_20_Template, 1, 0, "date-options", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 11, ctx.path !== "events" ? "APP.CONCIERGE.PARKING_HEADER" : "APP.CONCIERGE.PARKING_BOOK_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("model", (tmp_1_0 = \u0275\u0275pipeBind1(6, 13, ctx.options)) == null ? null : tmp_1_0.search);
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", ((tmp_2_0 = \u0275\u0275pipeBind1(8, 15, ctx.options)) == null ? null : tmp_2_0.zones == null ? null : tmp_2_0.zones.length) ? "" : "Select a level to add a space");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.path === "manage");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.path === "users");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.path === "events");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.zones);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 17, "COMMON.LEVEL_ALL"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(17, 19, ctx.levels));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.path !== "events" && ctx.path !== "map");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.path === "events" || ctx.path === "map");
      }
    }, dependencies: [NgForOf, NgIf, DateOptionsComponent, SearchbarComponent, MatFormField, MatSelect, MatOption, MatTooltip, MatRipple, NgControlStatus, NgModel, IconComponent, AsyncPipe, BuildingPipe, TranslatePipe], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=parking-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingTopbarComponent, { className: "ParkingTopbarComponent", filePath: "apps/concierge/src/app/parking/parking-topbar.component.ts", lineNumber: 131 });
})();

// apps/concierge/src/app/parking/parking.component.ts
var _c03 = () => ["/parking", "events"];
var _c13 = () => ["/parking", "spaces"];
function ParkingComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No parking floors for the currently selected building");
    \u0275\u0275elementEnd()();
  }
}
var ParkingComponent = class _ParkingComponent extends AsyncHandler {
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    this.levels = this._state.levels;
    this.path = "";
  }
  ngOnInit() {
    this.subscription("poll_bookings", () => this._state.startPolling());
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const url_parts = this._router.url?.split("/") || [""];
        this.path = url_parts[parts.length - 1].split("?")[0];
      }
    }));
    const parts = this._router.url?.split("/") || [""];
    this.path = parts[parts.length - 1].split("?")[0];
  }
  static {
    this.\u0275fac = function ParkingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingComponent)(\u0275\u0275directiveInject(ParkingStateService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingComponent, selectors: [["app-parking"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 9, consts: [[1, "relative", "overflow-hidden", "bg-base-100"], [1, "dark"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "queryParamsHandling", "merge", 3, "routerLink", "active"], [1, "flex-1", "h-1/2", "w-full", "relative", "overflow-auto", "px-4"], ["class", "absolute inset-0 flex flex-col items-center justify-center z-50", 4, "ngIf"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "z-50"], [1, "absolute", "inset-0", "bg-base-100", "opacity-50", "z-0"]], template: function ParkingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "sidebar");
        \u0275\u0275elementStart(1, "main", 0);
        \u0275\u0275element(2, "parking-topbar");
        \u0275\u0275elementStart(3, "div", 1)(4, "nav", 2)(5, "a", 3);
        \u0275\u0275text(6, " Bookings ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "a", 3);
        \u0275\u0275text(8, " Manage Spaces ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 4);
        \u0275\u0275element(10, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, ParkingComponent_div_11_Template, 4, 0, "div", 5);
        \u0275\u0275pipe(12, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c03))("active", ctx.path === "events");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c13))("active", ctx.path === "spaces");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !((tmp_4_0 = \u0275\u0275pipeBind1(12, 5, ctx.levels)) == null ? null : tmp_4_0.length));
      }
    }, dependencies: [NgIf, SidebarComponent, MatTabNav, MatTabLink, RouterOutlet, RouterLink, ParkingTopbarComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=parking.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingComponent, { className: "ParkingComponent", filePath: "apps/concierge/src/app/parking/parking.component.ts", lineNumber: 75 });
})();

// apps/concierge/src/app/parking/new-parking.component.ts
var _c04 = () => ["/book", "parking", "new", "manage"];
var _c14 = () => ["/book", "parking", "new", "manage", "users"];
var _c23 = () => ["/book", "parking", "new", "manage", "map"];
function NewParkingComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "nav", 8)(2, "a", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 9);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-tab-nav-panel", null, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tabPanel_r1 = \u0275\u0275reference(12);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("tabPanel", tabPanel_r1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c04))("active", ctx_r1.path === "manage");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, "APP.CONCIERGE.PARKING_TAB_SPACES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c14))("active", ctx_r1.path === "users");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 12, "APP.CONCIERGE.PARKING_TAB_USERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(18, _c23))("active", ctx_r1.path === "map");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 14, "APP.CONCIERGE.PARKING_TAB_MAP"), " ");
  }
}
function NewParkingComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "p", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.PARKING_UNAVAILABLE"), " ");
  }
}
var NewParkingComponent = class _NewParkingComponent extends AsyncHandler {
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    this.levels = this._state.levels;
    this.path = "";
  }
  ngOnInit() {
    this.subscription("poll_bookings", () => this._state.startPolling());
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd)
        this._updatePath();
    }));
    this._updatePath();
  }
  _updatePath() {
    this.timeout("update_path", () => {
      const parts = this._router.url?.split("/") || [""];
      this.path = parts[parts.length - 1].split("?")[0];
    }, 50);
  }
  static {
    this.\u0275fac = function NewParkingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewParkingComponent)(\u0275\u0275directiveInject(ParkingStateService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingComponent, selectors: [["app-new-parking"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 4, consts: [["tabPanel", ""], [1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full", "relative"], ["class", "px-8 pb-2", 4, "ngIf"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto", "px-8"], [1, "w-full", "h-full", "overflow-auto"], ["class", "absolute inset-0 flex flex-col items-center justify-center z-50", 4, "ngIf"], [1, "px-8", "pb-2"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "z-50"], [1, "absolute", "inset-0", "bg-base-100", "opacity-80", "z-0"], [1, "z-10", "opacity-60"]], template: function NewParkingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 2);
        \u0275\u0275element(4, "parking-topbar");
        \u0275\u0275template(5, NewParkingComponent_div_5_Template, 13, 19, "div", 3);
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
        \u0275\u0275element(8, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, NewParkingComponent_div_9_Template, 5, 3, "div", 6);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.path !== "events");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !((tmp_1_0 = \u0275\u0275pipeBind1(10, 2, ctx.levels)) == null ? null : tmp_1_0.length));
      }
    }, dependencies: [NgIf, ApplicationTopbarComponent, ApplicationSidebarComponent, MatTabNav, MatTabNavPanel, MatTabLink, RouterOutlet, RouterLink, ParkingTopbarComponent, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=new-parking.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingComponent, { className: "NewParkingComponent", filePath: "apps/concierge/src/app/parking/new-parking.component.ts", lineNumber: 96 });
})();

// apps/concierge/src/app/parking/parking-users-list.component.ts
var _c05 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c15 = (a0) => ({ key: "car_color", name: a0 });
var _c24 = (a0, a1) => ({ key: "plate_number", name: a0, content: a1 });
var _c33 = (a0) => ({ key: "notes", name: a0 });
var _c43 = (a0, a1) => ({ key: "deny", name: a0, size: "4.5rem", content: a1 });
var _c53 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6.5rem" });
var _c62 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function ParkingUsersListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function ParkingUsersListComponent_ng_template_9_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const data_r4 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.email, " ");
  }
}
function ParkingUsersListComponent_ng_template_11_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ParkingUsersListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ParkingUsersListComponent_ng_template_11_div_0_Template, 3, 0, "div", 10);
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275property("ngIf", data_r5);
  }
}
function ParkingUsersListComponent_ng_template_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingUsersListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ParkingUsersListComponent_ng_template_13_span_2_Template, 3, 3, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r6, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !data_r6);
  }
}
function ParkingUsersListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 16);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingUsersListComponent_ng_template_15_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editUser(row_r8));
    });
    \u0275\u0275elementStart(3, "app-icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ParkingUsersListComponent_ng_template_15_Template_button_click_5_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeUser(row_r8));
    });
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.PARKING_USER_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "APP.CONCIERGE.PARKING_USER_REMOVE"));
  }
}
var ParkingUsersListComponent = class _ParkingUsersListComponent {
  copyToClipboard(id) {
    const success = this._clipboard.copy(id);
    if (success)
      notifySuccess(i18n("APP.CONCIERGE.PARKING_COPIED_USER"));
  }
  constructor(_state, _clipboard) {
    this._state = _state;
    this._clipboard = _clipboard;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.new_items = new BehaviorSubject([]);
    this.user_list = this._state.users;
    this.editUser = (u) => this._state.editUser(u);
    this.removeUser = (u) => this._state.removeUser(u);
  }
  static {
    this.\u0275fac = function ParkingUsersListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingUsersListComponent)(\u0275\u0275directiveInject(ParkingStateService), \u0275\u0275directiveInject(Clipboard));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingUsersListComponent, selectors: [["parking-users-list"]], standalone: false, decls: 18, vars: 42, consts: [["name_template", ""], ["denied_template", ""], ["plate_template", ""], ["action_template", ""], [1, "w-full"], [1, "min-w-[68rem]", "block", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "w-full", "h-20"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "text-[0.625rem]", "opacity-30", "font-mono"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto", 4, "ngIf"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-error", "text-error-content", "mx-auto"], [1, "p-4", "font-mono", "text-sm", "uppercase"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], [1, "flex", "items-center", "space-x-2", "mx-auto"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", 1, "text-error", 3, "click", "matTooltip"]], template: function ParkingUsersListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "mat-progress-bar", 4);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275element(2, "simple-table", 5);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "async");
        \u0275\u0275template(9, ParkingUsersListComponent_ng_template_9_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(11, ParkingUsersListComponent_ng_template_11_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(13, ParkingUsersListComponent_ng_template_13_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(15, ParkingUsersListComponent_ng_template_15_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275element(17, "div", 6);
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_7_0;
        const name_template_r9 = \u0275\u0275reference(10);
        const denied_template_r10 = \u0275\u0275reference(12);
        const plate_template_r11 = \u0275\u0275reference(14);
        const action_template_r12 = \u0275\u0275reference(16);
        \u0275\u0275classProp("opacity-0", !((tmp_4_0 = \u0275\u0275pipeBind1(1, 6, ctx.loading)) == null ? null : tmp_4_0.includes("users")));
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.user_list)("columns", \u0275\u0275pureFunction6(35, _c62, \u0275\u0275pureFunction2(20, _c05, \u0275\u0275pipeBind1(3, 8, "APP.CONCIERGE.PARKING_USER"), name_template_r9), \u0275\u0275pureFunction1(23, _c15, \u0275\u0275pipeBind1(4, 10, "APP.CONCIERGE.PARKING_CAR_COLOUR")), \u0275\u0275pureFunction2(25, _c24, \u0275\u0275pipeBind1(5, 12, "EXPLORE.PARKING_PLATE_NUMBER"), plate_template_r11), \u0275\u0275pureFunction1(28, _c33, \u0275\u0275pipeBind1(6, 14, "FORM.NOTES")), \u0275\u0275pureFunction2(30, _c43, \u0275\u0275pipeBind1(7, 16, "APP.CONCIERGE.PARKING_USER_DENY"), denied_template_r10), \u0275\u0275pureFunction1(33, _c53, action_template_r12)))("filter", (tmp_7_0 = \u0275\u0275pipeBind1(8, 18, ctx.options)) == null ? null : tmp_7_0.search)("sortable", true);
      }
    }, dependencies: [NgIf, MatTooltip, MatProgressBar, MatRipple, IconComponent, SimpleTableComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingUsersListComponent, { className: "ParkingUsersListComponent", filePath: "apps/concierge/src/app/parking/parking-users-list.component.ts", lineNumber: 105 });
})();

// apps/concierge/src/app/parking/parking-map.component.ts
var _c06 = () => ({ controls: true });
var ParkingMapComponent = class _ParkingMapComponent extends AsyncHandler {
  constructor(_explore, _ex_parking, _parking, _org) {
    super();
    this._explore = _explore;
    this._ex_parking = _ex_parking;
    this._parking = _parking;
    this._org = _org;
    this.url = this._explore.map_url;
    this.styles = this._explore.map_styles;
    this.features = this._explore.map_features;
    this.actions = this._explore.map_actions;
    this.labels = this._explore.map_labels;
    this.locate = "";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.subscription("parking_level", this._parking.options.subscribe((_) => {
        const level_list = this._org.levelsForBuilding();
        const zone = _.zones[0] || level_list.find((_2) => _2.tags.includes("parking"))?.id;
        this._explore.setLevel(zone);
      }));
      this.subscription("parking_poll", this._ex_parking.startPolling());
      this.subscription("parking_options", this._parking.options.subscribe((_) => {
        this._ex_parking.setOptions(_);
      }));
      this._ex_parking.on_book = (space) => __async(this, null, function* () {
        const options = yield this._parking.options.pipe(take(1)).toPromise();
        yield this._parking.editReservation(void 0, {
          space: __spreadProps(__spreadValues({}, space), {
            zone: this._org.levelWithID([space.zone_id || space.zone])
          }),
          date: options.date
        });
      });
    });
  }
  static {
    this.\u0275fac = function ParkingMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingMapComponent)(\u0275\u0275directiveInject(ExploreStateService), \u0275\u0275directiveInject(ExploreParkingService), \u0275\u0275directiveInject(ParkingStateService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingMapComponent, selectors: [["parking-map"]], standalone: false, features: [\u0275\u0275ProvidersFeature([ExploreParkingService]), \u0275\u0275InheritDefinitionFeature], decls: 7, vars: 18, consts: [[1, "relative", "w-full", "h-[calc(100%-1.5rem)]", "my-2", "bg-base-200", "rounded-xl", "shadow"], [3, "src", "styles", "features", "actions", "labels", "options", "focus"]], template: function ParkingMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "interactive-map", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "async");
        \u0275\u0275pipe(4, "async");
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 7, ctx.url))("styles", \u0275\u0275pipeBind1(3, 9, ctx.styles))("features", \u0275\u0275pipeBind1(4, 11, ctx.features))("actions", \u0275\u0275pipeBind1(5, 13, ctx.actions))("labels", \u0275\u0275pipeBind1(6, 15, ctx.labels))("options", \u0275\u0275pureFunction0(17, _c06))("focus", ctx.locate);
      }
    }, dependencies: [InteractiveMapComponent, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingMapComponent, { className: "ParkingMapComponent", filePath: "apps/concierge/src/app/parking/parking-map.component.ts", lineNumber: 29 });
})();

// apps/concierge/src/app/parking/parking.module.ts
var ROUTES = [
  {
    path: "new",
    component: NewParkingComponent,
    children: [
      { path: "events", component: ParkingBookingsListComponent },
      { path: "manage/users", component: ParkingUsersListComponent },
      { path: "manage/map", component: ParkingMapComponent },
      { path: "manage", component: ParkingSpaceListComponent },
      { path: "**", redirectTo: "events" }
    ]
  },
  {
    path: "",
    component: ParkingComponent,
    children: [
      { path: "events", component: ParkingBookingsListComponent },
      { path: "users", component: ParkingUsersListComponent },
      { path: "manage", component: ParkingSpaceListComponent },
      { path: "**", redirectTo: "events" }
    ]
  },
  { path: "**", redirectTo: "" }
];
var AppParkingModule = class _AppParkingModule {
  static {
    this.\u0275fac = function AppParkingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppParkingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppParkingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      UIModule,
      FormsModule,
      ReactiveFormsModule,
      FormFieldsModule,
      MatTabsModule,
      MatProgressBarModule,
      SharedBookingsModule,
      RouterModule.forChild(ROUTES)
    ] });
  }
};
export {
  AppParkingModule
};
//# sourceMappingURL=parking.module-73UN2DHY.js.map
