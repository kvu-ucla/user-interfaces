import {
  ParkingStateService
} from "./chunk-J667T6QC.js";
import {
  InviteVisitorFormComponent,
  SharedBookingsModule
} from "./chunk-AAJNSREL.js";
import "./chunk-FTGOAU2Z.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  Booking,
  BuildingPipe,
  CommonModule,
  CustomTooltipComponent,
  DateOptionsComponent,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  LevelPipe,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatProgressBar,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatTooltip,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  PrintableComponent,
  Router,
  RouterModule,
  SearchbarComponent,
  SettingsService,
  SimpleTableComponent,
  TranslatePipe,
  UIModule,
  User,
  UserAvatarComponent,
  __async,
  __spreadProps,
  __spreadValues,
  addDays,
  approveBooking,
  catchError,
  checkinBooking,
  combineLatest,
  debounceTime,
  downloadFile,
  filter,
  first,
  format,
  generateQRCode,
  getTimezoneOffsetString,
  getUnixTime,
  hu,
  i18n,
  jsonToCsv,
  lastValueFrom,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  queryBookings,
  rejectBooking,
  saveBooking,
  shareReplay,
  startOfDay,
  switchMap,
  tap,
  updateBooking,
  updateBookingInductionStatus,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunctionV,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IWPNQ5LR.js";

// apps/concierge/src/app/visitors/visitor-induction-modal.component.ts
var VisitorInductionModalComponent = class _VisitorInductionModalComponent {
  get induction_details() {
    return this._settings.get("app.induction_details");
  }
  get is_enabled() {
    return this._settings.get("app.induction_enabled") && this._settings.get("app.induction_details");
  }
  constructor(_settings) {
    this._settings = _settings;
    this.agree = false;
  }
  static {
    this.\u0275fac = function VisitorInductionModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorInductionModalComponent)(\u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorInductionModalComponent, selectors: [["visitor-induction-modal"]], standalone: false, decls: 12, vars: 5, consts: [[1, "relative", "flex", "w-[32rem]", "flex-col", "items-center", "overflow-hidden", "rounded", "bg-base-100", "p-4", "shadow"], [1, "my-4"], [1, "max-h-[50vh]", "w-full", "overflow-y-auto", "overflow-x-hidden", "whitespace-pre-wrap", "rounded", "border", "border-base-300", "p-4", "text-sm", "opacity-60"], [1, "my-4", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "clear", "w-32", "underline", 3, "mat-dialog-close"], ["btn", "", "matRipple", "", 1, "w-32", 3, "disabled", "mat-dialog-close"]], template: function VisitorInductionModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
        \u0275\u0275text(2, " Please read the induction information below before proceeding ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-checkbox", 3);
        \u0275\u0275twoWayListener("ngModelChange", function VisitorInductionModalComponent_Template_mat_checkbox_ngModelChange_5_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.agree, $event) || (ctx.agree = $event);
          return $event;
        });
        \u0275\u0275text(6, " I agree ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275text(9, " Decline ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 6);
        \u0275\u0275text(11, " Accept ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.induction_details, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.agree);
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.agree)("mat-dialog-close", true);
      }
    }, dependencies: [NgControlStatus, NgModel, MatCheckbox, MatDialogClose, MatRipple], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorInductionModalComponent, { className: "VisitorInductionModalComponent", filePath: "apps/concierge/src/app/visitors/visitor-induction-modal.component.ts", lineNumber: 45 });
})();

// apps/concierge/src/app/visitors/visitor-notes-modal.component.ts
function VisitorNotesModalComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 5)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function VisitorNotesModalComponent_main_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 6)(1, "mat-form-field", 7)(2, "textarea", 8);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function VisitorNotesModalComponent_main_7_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.notes, $event) || (ctx_r1.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.notes);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.VISITORS_NOTES_HEADERS"));
  }
}
function VisitorNotesModalComponent_footer_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 9)(1, "button", 10);
    \u0275\u0275listener("click", function VisitorNotesModalComponent_footer_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
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
function VisitorNotesModalComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.VISITORS_NOTES_SAVING"));
  }
}
var VisitorNotesModalComponent = class _VisitorNotesModalComponent {
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.item = this._data.item;
    this.notes = this.item.extension_data?.notes || "";
    this.loading = "";
    this.item = _data.item;
  }
  save() {
    return __async(this, null, function* () {
      this.loading = "Saving...";
      this._dialog_ref.disableClose = true;
      yield updateBooking(this.item.id, __spreadProps(__spreadValues({}, this.item.toJSON()), {
        extension_data: __spreadProps(__spreadValues({}, this.item.extension_data), {
          notes: this.notes
        })
      })).toPromise().catch((e) => {
        notifyError(i18n("APP.CONCIERGE.VISITORS_NOTES_ERROR", { error: e }));
        this._dialog_ref.disableClose = false;
        this.loading = "";
        throw e;
      });
      this.loading = "";
      notifySuccess(i18n("APP.CONCIERGE.VISITORS_NOTES_SUCCESS"));
      this._dialog_ref.close();
    });
  }
  static {
    this.\u0275fac = function VisitorNotesModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorNotesModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorNotesModalComponent, selectors: [["visitor-notes-modal"]], standalone: false, decls: 11, vars: 8, consts: [["loading_template", ""], [1, "ml-2", "rounded", "bg-base-200", "px-2", "py-1", "text-sm", "font-medium"], ["icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "max-h-[65vh] w-[36rem] overflow-auto p-4", 4, "ngIf", "ngIfElse"], ["class", "flex justify-end space-x-2 border-t border-base-200 p-2", 4, "ngIf"], ["icon", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "w-[36rem]", "overflow-auto", "p-4"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 1, "h-[60vh]", "max-h-[64rem]", "resize-none", 3, "ngModelChange", "ngModel", "placeholder"], [1, "flex", "justify-end", "space-x-2", "border-t", "border-base-200", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["loading", "", 1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "bg-base-100"], [3, "diameter"]], template: function VisitorNotesModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h2");
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "span", 1);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, VisitorNotesModalComponent_button_6_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, VisitorNotesModalComponent_main_7_Template, 4, 4, "main", 3)(8, VisitorNotesModalComponent_footer_8_Template, 4, 3, "footer", 4)(9, VisitorNotesModalComponent_ng_template_9_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const loading_template_r4 = \u0275\u0275reference(10);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.VISITORS_NOTES_HEADERS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.item == null ? null : ctx.item.asset_name, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", loading_template_r4);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatProgressSpinner, MatDialogClose, MatRipple, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorNotesModalComponent, { className: "VisitorNotesModalComponent", filePath: "apps/concierge/src/app/visitors/visitor-notes-modal.component.ts", lineNumber: 58 });
})();

// apps/concierge/src/app/visitors/visitors-state.service.ts
var VisitorsStateService = class _VisitorsStateService extends AsyncHandler {
  get search() {
    return this._search.getValue();
  }
  get time_format() {
    return this._settings.time_format;
  }
  get is_induction_enabled() {
    return this._settings.get("app.induction_enabled") && this._settings.get("app.induction_details");
  }
  constructor(_dialog, _org, _settings) {
    super();
    this._dialog = _dialog;
    this._org = _org;
    this._settings = _settings;
    this._poll = new BehaviorSubject(0);
    this._filters = new BehaviorSubject({});
    this._search = new BehaviorSubject("");
    this._loading = new BehaviorSubject(false);
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.bookings = combineLatest([
      this._org.active_building,
      this._filters,
      this._poll
    ]).pipe(filter(([building]) => !!building), debounceTime(150), switchMap(([bld, filters]) => {
      this._loading.next(true);
      const date = filters.date ? new Date(filters.date) : /* @__PURE__ */ new Date();
      const start = startOfDay(date);
      const end = addDays(start, filters.period || 1);
      return queryBookings({
        type: "visitor",
        period_start: getUnixTime(start),
        period_end: getUnixTime(end),
        zones: (filters.zones || []).join(",") || bld.id,
        include_checked_out: true,
        limit: 1e3
      }).pipe(catchError((_) => of([])));
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.filtered_bookings = combineLatest([
      this._search,
      this.bookings
    ]).pipe(map(([search, guest_list]) => {
      const filter2 = search.toLowerCase();
      const out = guest_list.filter((_) => _.asset_name?.toLowerCase().includes(filter2) || _.user_name?.toLowerCase().includes(filter2) || _.user_email?.toLowerCase().includes(filter2) || _.asset_id?.toLowerCase().includes(filter2)).sort((a, b) => a.date - b.date);
      return out;
    }));
  }
  setFilters(filters) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), filters));
  }
  setSearchString(search) {
    this._search.next(search);
  }
  poll() {
    this._poll.next(Date.now());
  }
  startPolling(delay = 30 * 1e3) {
    this.interval("poll", () => this._poll.next(Date.now()), delay);
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setExt(guest, field, value) {
    return __async(this, null, function* () {
      const extension_data = __spreadValues({}, guest.extension_data);
      extension_data[field] = value;
      yield updateBooking(guest.id, __spreadProps(__spreadValues({}, guest.toJSON()), {
        extension_data
      })).toPromise();
      this._poll.next(Date.now());
    });
  }
  approveVisitor(item) {
    return __async(this, null, function* () {
      const details = yield openConfirmModal({
        title: "Approve Visitor",
        content: `Approve attendance of ${item.asset_name || item.asset_id} to their meeting?`,
        icon: { content: "event_available" }
      }, this._dialog);
      if (details.reason !== "done")
        return details.close();
      details.loading("Updating guest details");
      yield approveBooking(item.id).toPromise().catch((e) => {
        notifyError(`Error approving visitor: ${e.message || e.error || e}`);
        details.close();
        throw e;
      });
      notifySuccess(`Successfully approved visitor`);
      this._poll.next(Date.now());
      details.close();
    });
  }
  declineVisitor(item) {
    return __async(this, null, function* () {
      const details = yield openConfirmModal({
        title: "Decline Visitor",
        content: `Decline attendance of ${item.asset_name || item.asset_id} to their meeting?`,
        icon: { content: "event_available" }
      }, this._dialog);
      if (details.reason !== "done")
        return details.close();
      details.loading("Updating guest details");
      yield rejectBooking(item.id).toPromise().catch((e) => {
        notifyError(`Error declining visitor: ${e.message || e.error || e}`);
        details.close();
        throw e;
      });
      notifySuccess(`Successfully declining visitor`);
      this._poll.next(Date.now());
      details.close();
    });
  }
  requestInduction(item) {
    return __async(this, null, function* () {
      if (!this.is_induction_enabled)
        return true;
      const ref = this._dialog.open(VisitorInductionModalComponent, {
        data: { item }
      });
      const result = yield ref.afterClosed().toPromise();
      if (result === false) {
        yield updateBookingInductionStatus(item.id, "declined").toPromise();
      }
      if (!result)
        throw "User declined";
      yield updateBookingInductionStatus(item.id, "accepted").toPromise();
      return true;
    });
  }
  setCheckinState(item, state = true) {
    return __async(this, null, function* () {
      if (item.rejected)
        throw "You cannot check-in a rejected meeting";
      if (state === true)
        yield this.requestInduction(item);
      if (!item.approved && state === true) {
        yield approveBooking(item.id).toPromise();
      }
      const new_user = yield checkinBooking(item.id, state).toPromise().catch((e) => {
        notifyError(`Error checking ${state ? "in" : "out"} ${item.asset_name || item.asset_id} for ${item.user_name}'s meeting`);
        throw e;
      });
      notifySuccess(`Successfully checked ${state ? "in" : "out"} ${item.asset_name || item.asset_id} from ${item.user_name}'s meeting`);
    });
  }
  setCheckinStateForEvent(event_id, state = true) {
    return __async(this, null, function* () {
      if (!event_id)
        return;
      const bookings = (yield nextValueFrom(this.bookings)) || [];
      const event_bookings = bookings.filter((_) => _.parent_id === event_id || _.extension_data.parent_id === event_id || _.linked_event?.id === event_id || _.linked_event?.event_id === event_id);
      if (!event_bookings.length)
        return;
      yield Promise.all(event_bookings.map((_) => checkinBooking(_.id, state).toPromise().catch((e) => {
        notifyError(`Error checking ${state ? "in" : "out"} ${_.asset_name || _.asset_id} for ${_.user_name}'s meeting`);
        throw e;
      })));
      notifySuccess(`Successfully checked ${state ? "in" : "out"} all visitors from ${event_bookings[0].user_name}'s meeting`);
      this._poll.next(Date.now());
    });
  }
  downloadVisitorsList() {
    return __async(this, null, function* () {
      const bookings = yield nextValueFrom(this.filtered_bookings);
      if (!bookings.length)
        return;
      const { date } = this._filters.getValue();
      const list = bookings.map((_) => ({
        Name: _.asset_name,
        Email: _.asset_id,
        "Checked In": _.checked_in,
        Host: _.user_email || "",
        Status: _.status,
        Date: format(_.date, "dd MMM " + this.time_format)
      }));
      const data = jsonToCsv(list);
      downloadFile(`visitor-list-${format(date || Date.now(), "MMM-dd")}.csv`, data);
    });
  }
  editVisitorNotes(item) {
    const ref = this._dialog.open(VisitorNotesModalComponent, {
      data: { item }
    });
    ref.afterClosed().subscribe(() => this.poll());
  }
  emailVisitor(item) {
    return __async(this, null, function* () {
      const mod = this._org.module("visitor_access", "VisitorAccess");
      if (!mod)
        return;
      yield mod.execute("grant_and_notify_access", [
        item.asset_id,
        item.asset_name,
        item.booked_by_email,
        item.title,
        item.booking_start
      ]);
      notifySuccess(i18n("APP.CONCIERGE.VISITOR_EMAIL_SUCCESS"));
    });
  }
  static {
    this.\u0275fac = function VisitorsStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorsStateService)(\u0275\u0275inject(MatDialog), \u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VisitorsStateService, factory: _VisitorsStateService.\u0275fac, providedIn: "root" });
  }
};

// apps/concierge/src/app/visitors/guest-listing.component.ts
var _c0 = (a0, a1, a2) => ({ key: "state", name: a0, content: a1, size: "6.5rem", show: a2, sortable: false });
var _c1 = (a0, a1, a2) => ({ key: "date", name: a0, content: a1, show: a2, size: "6rem" });
var _c2 = (a0, a1) => ({ key: "asset_name", name: a0, content: a1 });
var _c3 = (a0, a1, a2) => ({ key: "user_name", name: a0, content: a1, show: a2 });
var _c4 = (a0, a1, a2) => ({ key: "checked_in_at", name: a0, content: a1, show: a2, size: "6rem" });
var _c5 = (a0, a1, a2) => ({ key: "checked_out_at", name: a0, content: a1, show: a2, size: "6rem" });
var _c6 = (a0, a1, a2) => ({ key: "status", name: a0, content: a1, show: a2, size: "9.5rem" });
var _c7 = (a0, a1, a2) => ({ key: "induction", name: a0, content: a1, show: a2, size: "5.5rem" });
var _c8 = (a0, a1, a2) => ({ key: "parking_space", name: a0, content: a1, show: a2, size: "5.5rem" });
var _c9 = (a0, a1, a2) => ({ key: "notes", name: a0, content: a1, show: a2, sortable: false, size: "4.5rem" });
var _c10 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.25rem", sortable: false });
var _c11 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
var _c12 = (a0) => ({ time: a0 });
var _c13 = (a0, a1, a2) => ({ name: a0, email: a1, photo: a2 });
var _c14 = (a0) => ({ title: a0 });
var _c15 = (a0) => ({ host_name: a0 });
var _c16 = (a0) => ({ location: a0 });
function GuestListingComponent_ng_template_12_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(2, 5, "APP.CONCIERGE.VISITOR_STATUS_CHECKED_OUT", \u0275\u0275pureFunction1(8, _c12, \u0275\u0275pipeBind3(1, 1, row_r1.checked_out_at * 1e3, ctx_r1.time_format, ctx_r1.tz))));
  }
}
function GuestListingComponent_ng_template_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "question_mark");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.VISITOR_STATUS_NOT_CHECKED_IN"));
  }
}
function GuestListingComponent_ng_template_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(2, 5, "APP.CONCIERGE.VISITOR_STATUS_CHECKED_IN", \u0275\u0275pureFunction1(8, _c12, \u0275\u0275pipeBind3(1, 1, row_r1.checked_in_at * 1e3, ctx_r1.time_format, ctx_r1.tz))));
  }
}
function GuestListingComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GuestListingComponent_ng_template_12_div_0_Template, 5, 10, "div", 17)(1, GuestListingComponent_ng_template_12_div_1_Template, 4, 3, "div", 18)(2, GuestListingComponent_ng_template_12_div_2_Template, 5, 10, "div", 19);
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275property("ngIf", !(row_r1 == null ? null : row_r1.checked_in) && row_r1.checked_out_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(row_r1 == null ? null : row_r1.checked_in) && !row_r1.checked_out_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r1 == null ? null : row_r1.checked_in);
  }
}
function GuestListingComponent_ng_template_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.asset_id, " ");
  }
}
function GuestListingComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, GuestListingComponent_ng_template_14_div_3_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.asset_name || row_r3.asset_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r3.asset_name && row_r3.asset_id);
  }
}
function GuestListingComponent_ng_template_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.user_email, " ");
  }
}
function GuestListingComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, GuestListingComponent_ng_template_16_div_3_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.user_name || row_r4.user_email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r4.user_name && row_r4.user_email);
  }
}
function GuestListingComponent_ng_template_18_button_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (row_r5.extension_data == null ? null : row_r5.extension_data.id_confirmed) ? "Confirmed" : (row_r5.extension_data == null ? null : row_r5.extension_data.id_confirmed) === false ? "Rejected" : "Submitted", " ");
  }
}
function GuestListingComponent_ng_template_18_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_18_ng_template_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const row_r5 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setExt(row_r5, "id_confirmed", true));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 32);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_18_ng_template_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const row_r5 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setExt(row_r5, "id_confirmed", false));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275property("src", row_r5.extension_data == null ? null : row_r5.extension_data.id_data == null ? null : row_r5.extension_data.id_data.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "APP.CONCIERGE.VISITORS_ACTION_ID_APPROVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "APP.CONCIERGE.VISITORS_ACTION_ID_REJECT"), " ");
  }
}
function GuestListingComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, GuestListingComponent_ng_template_18_button_1_Template, 2, 1, "button", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, GuestListingComponent_ng_template_18_ng_template_2_Template, 8, 7, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const id_confirmation_r7 = \u0275\u0275reference(3);
    \u0275\u0275property("content", id_confirmation_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r5.extension_data == null ? null : row_r5.extension_data.id_data == null ? null : row_r5.extension_data.id_data.url);
  }
}
function GuestListingComponent_ng_template_20_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function GuestListingComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GuestListingComponent_ng_template_20_div_0_Template, 3, 0, "div", 33);
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    \u0275\u0275property("ngIf", row_r8.extension_data.parking_booking_id);
  }
}
function GuestListingComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    \u0275\u0275classProp("bg-success", data_r9 === "accepted")("text-success-content", data_r9 === "accepted")("bg-warning", data_r9 !== "accepted" && data_r9 !== "declined")("text-warning-content", data_r9 !== "accepted" && data_r9 !== "declined")("bg-error", data_r9 === "declined")("text-error-content", data_r9 === "declined");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r9 === "accepted" ? "done" : data_r9 === "declined" ? "close" : "question_mark", " ");
  }
}
function GuestListingComponent_ng_template_24_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 43);
    \u0275\u0275text(1, " arrow_drop_down ");
    \u0275\u0275elementEnd();
  }
}
function GuestListingComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "button", 37)(2, "div", 38)(3, "div", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, GuestListingComponent_ng_template_24_icon_6_Template, 2, 0, "icon", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-menu", null, 12)(9, "button", 41);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_24_Template_button_click_9_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approveVisitor(row_r11));
    });
    \u0275\u0275elementStart(10, "div", 42)(11, "icon", 43);
    \u0275\u0275text(12, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 44);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 41);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_24_Template_button_click_16_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.declineVisitor(row_r11));
    });
    \u0275\u0275elementStart(17, "div", 42)(18, "icon", 45);
    \u0275\u0275text(19, " event_busy ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 44);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    const menu_r12 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success-content", (row_r11 == null ? null : row_r11.status) === "approved")("bg-success", (row_r11 == null ? null : row_r11.status) === "approved")("text-error-content", (row_r11 == null ? null : row_r11.status) === "declined")("bg-error", (row_r11 == null ? null : row_r11.status) === "declined")("text-neutral-content", (row_r11 == null ? null : row_r11.status) === "ended")("bg-neutral", (row_r11 == null ? null : row_r11.status) === "ended")("text-warning-content", (row_r11 == null ? null : row_r11.status) !== "ended" && (row_r11 == null ? null : row_r11.status) !== "approved" && (row_r11 == null ? null : row_r11.status) !== "declined")("bg-warning", (row_r11 == null ? null : row_r11.status) !== "ended" && (row_r11 == null ? null : row_r11.status) !== "approved" && (row_r11 == null ? null : row_r11.status) !== "declined")("opacity-30", (row_r11 == null ? null : row_r11.status) === "ended");
    \u0275\u0275property("matMenuTriggerFor", menu_r12)("disabled", (row_r11 == null ? null : row_r11.status) === "ended" || row_r11.checked_in && !row_r11.checked_out_at);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 24, (row_r11 == null ? null : row_r11.status) === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : (row_r11 == null ? null : row_r11.status) === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : (row_r11 == null ? null : row_r11.status) === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((row_r11 == null ? null : row_r11.status) === "ended" || row_r11.checked_in && !row_r11.checked_out_at));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 26, "APP.CONCIERGE.VISITORS_ACTION_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 28, "APP.CONCIERGE.VISITORS_ACTION_DECLINE"), " ");
  }
}
function GuestListingComponent_ng_template_26_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r13 = \u0275\u0275nextContext().data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, data_r13 * 1e3, "zzzz", ctx_r1.tz), " ");
  }
}
function GuestListingComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275template(3, GuestListingComponent_ng_template_26_span_3_Template, 3, 5, "span", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r13 = ctx.data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 2, data_r13 * 1e3, ctx_r1.time_format, ctx_r1.tz), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.timezone);
  }
}
function GuestListingComponent_ng_template_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r14 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, row_r14.date, "zzzz", ctx_r1.tz), " ");
  }
}
function GuestListingComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275template(4, GuestListingComponent_ng_template_28_span_4_Template, 3, 5, "span", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const row_r14 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(3, 4, row_r14.date, ((tmp_13_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.filters)) == null ? null : tmp_13_0.period) > 1 ? "MMM d, " + ctx_r1.time_format : ctx_r1.time_format, ctx_r1.tz), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.timezone);
  }
}
function GuestListingComponent_ng_template_30_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "level");
    \u0275\u0275pipe(3, "level");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, "APP.VISITOR_KIOSK.LABEL_LOCATION", \u0275\u0275pureFunction1(8, _c16, ((tmp_16_0 = \u0275\u0275pipeBind1(2, 1, ctx_r1.zones)) == null ? null : tmp_16_0.display_name) || ((tmp_16_0 = \u0275\u0275pipeBind1(3, 3, ctx_r1.zones)) == null ? null : tmp_16_0.name))), " ");
  }
}
function GuestListingComponent_ng_template_30_img_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 69);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.qr_code, \u0275\u0275sanitizeUrl);
  }
}
function GuestListingComponent_ng_template_30_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_30_button_44_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reserveParking(row_r17));
    });
    \u0275\u0275elementStart(1, "div", 42)(2, "icon", 43);
    \u0275\u0275text(3, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "APP.CONCIERGE.VISITORS_ACTION_PARKING"), " ");
  }
}
function GuestListingComponent_ng_template_30_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_30_button_45_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.emailVisitor(row_r17));
    });
    \u0275\u0275elementStart(1, "div", 42)(2, "icon", 43);
    \u0275\u0275text(3, "attach_email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "APP.CONCIERGE.VISITORS_ACTION_EMAIL"), " ");
  }
}
function GuestListingComponent_ng_template_30_a_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    \u0275\u0275property("href", item_r19.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r19.name, " ");
  }
}
function GuestListingComponent_ng_template_30_button_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_30_button_56_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.printQRCode());
    });
    \u0275\u0275elementStart(1, "div", 42)(2, "icon", 43);
    \u0275\u0275text(3, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "APP.CONCIERGE.VISITORS_ACTION_PRINT_QR"), " ");
  }
}
function GuestListingComponent_ng_template_30_button_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_30_button_57_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printVisitorPass(row_r17, $event));
    });
    \u0275\u0275elementStart(1, "div", 42)(2, "icon", 43);
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "APP.CONCIERGE.VISITORS_ACTION_PRINT_PASS"), " ");
  }
}
function GuestListingComponent_ng_template_30_button_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_30_button_65_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(row_r17.checked_in ? ctx_r1.checkout(row_r17) : ctx_r1.checkin(row_r17));
    });
    \u0275\u0275elementStart(1, "div", 42)(2, "icon", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r17.checked_in ? "event_busy" : "event_available", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, row_r17.checked_in ? "APP.CONCIERGE.VISITORS_ACTION_CHECKOUT" : "APP.CONCIERGE.VISITORS_ACTION_CHECKIN"), " ");
  }
}
function GuestListingComponent_ng_template_30_ng_container_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 41);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_30_ng_container_66_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r23);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkinAllVisitors(row_r17));
    });
    \u0275\u0275elementStart(2, "div", 42)(3, "icon", 43);
    \u0275\u0275text(4, " event_available ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "button", 41);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_30_ng_container_66_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r23);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkoutAllVisitors(row_r17));
    });
    \u0275\u0275elementStart(9, "div", 42)(10, "icon", 45);
    \u0275\u0275text(11, " event_busy ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 2, "APP.CONCIERGE.VISITORS_ACTION_CHECKIN_ALL"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 4, "APP.CONCIERGE.VISITORS_ACTION_CHECKOUT_ALL"), " ");
  }
}
function GuestListingComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "button", 47)(2, "icon");
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 48)(5, "div", 49)(6, "div", 50);
    \u0275\u0275element(7, "a-user-avatar", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 43);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 52);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 53);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 54);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 55);
    \u0275\u0275element(20, "img", 56);
    \u0275\u0275template(21, GuestListingComponent_ng_template_30_div_21_Template, 5, 10, "div", 57);
    \u0275\u0275pipe(22, "level");
    \u0275\u0275elementStart(23, "pre", 58);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 59)(26, "div", 60)(27, "div");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 61);
    \u0275\u0275template(34, GuestListingComponent_ng_template_30_img_34_Template, 1, 1, "img", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "mat-menu", null, 13)(37, "button", 63)(38, "div", 42)(39, "icon", 43);
    \u0275\u0275text(40, "attachment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(44, GuestListingComponent_ng_template_30_button_44_Template, 7, 3, "button", 64)(45, GuestListingComponent_ng_template_30_button_45_Template, 7, 3, "button", 64);
    \u0275\u0275elementStart(46, "mat-menu", null, 12);
    \u0275\u0275template(48, GuestListingComponent_ng_template_30_a_48_Template, 2, 2, "a", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 41);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_30_Template_button_click_49_listener() {
      const row_r17 = \u0275\u0275restoreView(_r15).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setExt(row_r17, "remote", !row_r17.extension_data.remote));
    });
    \u0275\u0275elementStart(50, "div", 42)(51, "icon", 43);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div");
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(56, GuestListingComponent_ng_template_30_button_56_Template, 7, 3, "button", 64)(57, GuestListingComponent_ng_template_30_button_57_Template, 7, 3, "button", 64);
    \u0275\u0275elementStart(58, "a", 66)(59, "div", 42)(60, "icon", 43);
    \u0275\u0275text(61, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div");
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(65, GuestListingComponent_ng_template_30_button_65_Template, 7, 4, "button", 64)(66, GuestListingComponent_ng_template_30_ng_container_66_Template, 15, 6, "ng-container", 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r17 = ctx.row;
    const guest_menu_r24 = \u0275\u0275reference(36);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", guest_menu_r24);
    \u0275\u0275advance(6);
    \u0275\u0275property("user", \u0275\u0275pureFunction3(48, _c13, (row_r17 == null ? null : row_r17.asset_name) || (row_r17 == null ? null : row_r17.description), row_r17 == null ? null : row_r17.asset_id, row_r17.photo));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (row_r17 == null ? null : row_r17.asset_name) || (row_r17 == null ? null : row_r17.description), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 26, "APP.VISITOR_KIOSK.LABEL_FOR", \u0275\u0275pureFunction1(52, _c14, row_r17 == null ? null : row_r17.title)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 29, "APP.VISITOR_KIOSK.LABEL_HOST", \u0275\u0275pureFunction1(54, _c15, row_r17 == null ? null : row_r17.user_name)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 32, "APP.VISITOR_KIOSK.VISITOR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("src", (ctx_r1.logo == null ? null : ctx_r1.logo.src) || ctx_r1.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(22, 34, ctx_r1.zones));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("                            ", row_r17 == null ? null : row_r17.extension_data == null ? null : row_r17.extension_data.extra_details, "\n                        ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 36, (row_r17 == null ? null : row_r17.date) || ctx_r1.date, "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(32, 39, (row_r17 == null ? null : row_r17.date) || ctx_r1.date, "mediumDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.qr_code);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !(row_r17.attachment == null ? null : row_r17.attachment.length))("matMenuTriggerFor", ctx_r1.attachment_menu);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 42, "APP.CONCIERGE.VISITORS_ACTION_ATTACHMENTS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.has_parking && !row_r17.extension_data.parking_booking_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.can_email_visitors);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", row_r17.attachments);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", row_r17.extension_data.remote ? "business" : "laptop", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 44, row_r17.extension_data.remote ? "APP.CONCIERGE.VISITORS_ACTION_ONSITE" : "APP.CONCIERGE.VISITORS_ACTION_REMOTE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.can_print);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allow_printing_label && row_r17.checked_in);
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + (row_r17 == null ? null : row_r17.asset_id), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(64, 46, (row_r17 == null ? null : row_r17.user_email) === (row_r17 == null ? null : row_r17.asset_id) ? "APP.CONCIERGE.VISITORS_ACTION_EMAIL_HOST" : "APP.CONCIERGE.VISITORS_ACTION_EMAIL_GUEST"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !row_r17.checked_out_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r17.linked_event);
  }
}
function GuestListingComponent_ng_template_32_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 74);
    \u0275\u0275text(3, " info_i ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.VISITORS_NOTES_AVAILABLE"));
  }
}
function GuestListingComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "button", 71);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_32_Template_button_click_1_listener() {
      const row_r26 = \u0275\u0275restoreView(_r25).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editVisitorNotes(row_r26));
    });
    \u0275\u0275elementStart(3, "icon", 43);
    \u0275\u0275text(4, "edit_square");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, GuestListingComponent_ng_template_32_div_5_Template, 4, 3, "div", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r26 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.VISITORS_NOTES_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r26.extension_data == null ? null : row_r26.extension_data.notes == null ? null : row_r26.extension_data.notes.length);
  }
}
function GuestListingComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function GuestListingComponent_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadVisitorList());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.VISITORS_DOWNLOAD"));
  }
}
var GuestListingComponent = class _GuestListingComponent extends AsyncHandler {
  hide_field(id) {
    return (this._settings.get("app.visitors.hide_fields") || []).includes(id);
  }
  get extra_width() {
    const hide = this._settings.get("app.visitors.hide_fields") || [];
    return Math.max(0, 3 - hide.length) * 6;
  }
  get timezone() {
    const use_tz = this._settings.get("app.bookings.use_building_timezone");
    const bld_tz = this._org.building.timezone;
    return use_tz && bld_tz !== Intl.DateTimeFormat().resolvedOptions().timeZone ? bld_tz : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    return getTimezoneOffsetString(tz);
  }
  get allow_printing_label() {
    return this._settings.get("app.visitors.allow_printing_label") !== false;
  }
  get has_parking() {
    return this._settings.get("app.features")?.includes("parking") && this._settings.get("app.visitors.has_parking");
  }
  get can_email_visitors() {
    return !!this._org.module("visitor_access", "VisitorAccess");
  }
  get time_format() {
    return this._settings.time_format;
  }
  get logo() {
    return this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light");
  }
  printVisitorPass(item) {
    this.qr_code = generateQRCode(item.asset_id);
    this.timeout("print", () => window.print());
  }
  inducted(item) {
    if (item.checked_in)
      return true;
    return item.induction == "declined" ? false : item.induction == "accepted" ? true : null;
  }
  constructor(_state, _parking, _settings, _org) {
    super();
    this._state = _state;
    this._parking = _parking;
    this._settings = _settings;
    this._org = _org;
    this.guests = this._state.filtered_bookings;
    this.search = this._state.search;
    this.filters = this._state.filters;
    this.inductions_enabled = false;
    this.qr_code = "";
    this.downloadVisitorList = () => this._state.downloadVisitorsList();
    this.approveVisitor = (u) => this._state.approveVisitor(u);
    this.declineVisitor = (u) => this._state.declineVisitor(u);
    this.checkinAllVisitors = (u) => this._state.setCheckinStateForEvent(u.linked_event?.id, true);
    this.checkoutAllVisitors = (u) => this._state.setCheckinStateForEvent(u.linked_event?.id, false);
    this.setExt = (u, f, v) => this._state.setExt(u, f, v);
    this.editVisitorNotes = (u) => this._state.editVisitorNotes(u);
    this.checkin = (item) => __async(this, null, function* () {
      yield this._state.setCheckinState(item, true).catch((e) => {
        if (e !== "User declined")
          notifyError(e);
      });
      this._state.poll();
    });
    this.checkout = (item) => __async(this, null, function* () {
      yield this._state.setCheckinState(item, false).catch((_) => null);
      this._state.poll();
    });
    this.emailVisitor = (item) => this._state.emailVisitor(item);
  }
  ngOnInit() {
    this.subscription("building", this._org.active_building.subscribe((bld) => __async(this, null, function* () {
      if (!bld)
        return;
      const visitor_kiosk_app = this._settings.get("app.visitor_kiosk_app") || "visitor-kiosk_app";
      const metadata = yield lastValueFrom(hu(bld.id, visitor_kiosk_app));
      const org_metadata = yield lastValueFrom(hu(this._org.organisation.id, visitor_kiosk_app));
      const data = __spreadValues(__spreadValues({}, org_metadata.details || {}), metadata.details || {});
      this.inductions_enabled = data?.induction_enabled && data?.induction_details;
    })));
  }
  reserveParking(item) {
    return __async(this, null, function* () {
      const id = yield this._parking.editReservation(void 0, {
        parent_id: item.id,
        user: new User({ email: item.asset_id, name: item.asset_name }),
        link_id: item.id,
        date: item.date,
        external_user: true
      });
      if (!id)
        return;
      yield lastValueFrom(saveBooking(new Booking(__spreadProps(__spreadValues({}, item), { parking_booking_id: id }))));
      this._state.poll();
    });
  }
  static {
    this.\u0275fac = function GuestListingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GuestListingComponent)(\u0275\u0275directiveInject(VisitorsStateService), \u0275\u0275directiveInject(ParkingStateService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GuestListingComponent, selectors: [["guest-listings"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 37, vars: 84, consts: [["state_template", ""], ["person_template", ""], ["host_template", ""], ["id_template", ""], ["parking_template", ""], ["induction_template", ""], ["status_template", ""], ["time_template", ""], ["date_template", ""], ["action_template", ""], ["notes_template", ""], ["id_confirmation", ""], ["menu", "matMenu"], ["guest_menu", "matMenu"], [1, "z-0", "block", "text-sm", 3, "data", "columns", "filter", "sortable"], ["class", "absolute bottom-4 right-4 z-20 h-12 w-12 bg-secondary text-white shadow hover:shadow-lg", "matTooltipPosition", "left", "icon", "", "matRipple", "", 3, "matTooltip", "click", 4, "ngIf"], [1, "h-8", "w-full"], ["class", "mx-auto flex h-8 w-8 items-center justify-center rounded bg-base-400 text-2xl text-neutral-content", "matTooltipPosition", "right", 3, "matTooltip", 4, "ngIf"], ["class", "mx-auto flex h-8 w-8 items-center justify-center rounded bg-warning text-2xl text-warning-content", "matTooltipPosition", "right", 3, "matTooltip", 4, "ngIf"], ["class", "mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content", "matTooltipPosition", "right", 3, "matTooltip", 4, "ngIf"], ["matTooltipPosition", "right", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-base-400", "text-2xl", "text-neutral-content", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-warning", "text-2xl", "text-warning-content", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-success", "text-2xl", "text-success-content", 3, "matTooltip"], [1, "px-4", "py-2"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], ["customTooltip", "", 3, "content"], ["matRipple", "", "class", "rounded-3xl bg-success px-4 py-2 text-white", 4, "ngIf"], ["matRipple", "", 1, "rounded-3xl", "bg-success", "px-4", "py-2", "text-white"], [1, "my-2", "flex", "w-[20rem]", "flex-col", "space-y-2", "rounded", "bg-base-100", "p-2"], [1, "max-h-[20rem]", "max-w-[20rem]", "object-contain", 3, "src"], ["matRipple", "", 3, "click"], ["matRipple", "", 1, "inverse", "mt-2", 3, "click"], ["class", "mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content", 4, "ngIf"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-success", "text-2xl", "text-success-content"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "text-2xl"], [1, "px-4"], ["matRipple", "", 1, "h-10", "w-[7.5rem]", "rounded-3xl", "border-none", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "space-x-2", "pl-4", "pr-2"], [1, "flex-1", "text-left"], ["class", "text-2xl", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], [1, "text-2xl", "text-error"], [1, "flex", "items-center", "justify-end", "px-2"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["printable", "", 1, "print-only", "relative", "m-4", "h-[14rem]", "w-[24rem]", "rounded-xl", "border", "border-neutral", "bg-base-100", "p-4"], [1, "flex", "h-full", "flex-col", "leading-tight"], [1, "mb-2", "flex", "h-[4.75rem]", "w-[4.75rem]", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border-base-400", "bg-base-200", "text-3xl", "print:border-2"], [3, "user"], [1, "text-sm"], [1, "text-sm", "opacity-60"], [1, "absolute", "bottom-4", "left-4", "mt-2", "w-32", "rounded-lg", "border", "border-black", "px-2", "py-1", "text-center", "text-sm", "font-medium", "uppercase", "text-black"], [1, "absolute", "right-4", "top-4", "flex", "flex-col", "items-end"], ["auth", "", "alt", "Logo", 1, "h-10", 3, "src"], ["class", "text-right text-xs", 4, "ngIf"], [1, "text-right"], [1, "absolute", "bottom-4", "right-4", "flex", "items-end", "space-x-2"], [1, "text-right", "font-medium", "leading-tight"], [1, "relative", "h-16", "w-16", "rounded-lg", "border", "border-base-200", "p-2"], ["class", "h-12 w-12 object-contain object-center", 3, "src", 4, "ngIf"], ["mat-menu-item", "", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "href", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "href"], [4, "ngIf"], [1, "text-right", "text-xs"], [1, "h-12", "w-12", "object-contain", "object-center", 3, "src"], [1, "relative", "mx-auto", "p-4"], ["matTooltipPosition", "left", "icon", "", "matRipple", "", 3, "click", "matTooltip"], ["class", "absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-info text-info-content", 3, "matTooltip", 4, "ngIf"], [1, "absolute", "right-1", "top-1", "flex", "h-4", "w-4", "items-center", "justify-center", "rounded-full", "bg-info", "text-info-content", 3, "matTooltip"], ["className", "material-symbols-rounded", 1, "text-sm"], ["matTooltipPosition", "left", "icon", "", "matRipple", "", 1, "absolute", "bottom-4", "right-4", "z-20", "h-12", "w-12", "bg-secondary", "text-white", "shadow", "hover:shadow-lg", 3, "click", "matTooltip"]], template: function GuestListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "simple-table", 14);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "async");
        \u0275\u0275template(12, GuestListingComponent_ng_template_12_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, GuestListingComponent_ng_template_14_Template, 4, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(16, GuestListingComponent_ng_template_16_Template, 4, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(18, GuestListingComponent_ng_template_18_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(20, GuestListingComponent_ng_template_20_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(22, GuestListingComponent_ng_template_22_Template, 3, 13, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(24, GuestListingComponent_ng_template_24_Template, 23, 30, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(26, GuestListingComponent_ng_template_26_Template, 4, 6, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(28, GuestListingComponent_ng_template_28_Template, 5, 8, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(30, GuestListingComponent_ng_template_30_Template, 67, 56, "ng-template", null, 9, \u0275\u0275templateRefExtractor)(32, GuestListingComponent_ng_template_32_Template, 6, 4, "ng-template", null, 10, \u0275\u0275templateRefExtractor)(34, GuestListingComponent_button_34_Template, 4, 3, "button", 15);
        \u0275\u0275pipe(35, "async");
        \u0275\u0275element(36, "div", 16);
      }
      if (rf & 2) {
        let tmp_16_0;
        const state_template_r28 = \u0275\u0275reference(13);
        const person_template_r29 = \u0275\u0275reference(15);
        const host_template_r30 = \u0275\u0275reference(17);
        const parking_template_r31 = \u0275\u0275reference(21);
        const induction_template_r32 = \u0275\u0275reference(23);
        const status_template_r33 = \u0275\u0275reference(25);
        const time_template_r34 = \u0275\u0275reference(27);
        const date_template_r35 = \u0275\u0275reference(29);
        const action_template_r36 = \u0275\u0275reference(31);
        const notes_template_r37 = \u0275\u0275reference(33);
        \u0275\u0275styleProp("min-width", 64 + ctx.extra_width + "rem");
        \u0275\u0275property("data", ctx.guests)("columns", \u0275\u0275pureFunctionV(72, _c11, [\u0275\u0275pureFunction3(31, _c0, \u0275\u0275pipeBind1(1, 7, "COMMON.STATUS"), state_template_r28, !ctx.hide_field("state")), \u0275\u0275pureFunction3(35, _c1, \u0275\u0275pipeBind1(2, 9, "FORM.TIME"), date_template_r35, !ctx.hide_field("date")), \u0275\u0275pureFunction2(39, _c2, \u0275\u0275pipeBind1(3, 11, "RESOURCE.VISITOR"), person_template_r29), \u0275\u0275pureFunction3(42, _c3, \u0275\u0275pipeBind1(4, 13, "FORM.HOST"), host_template_r30, !ctx.hide_field("user_name")), \u0275\u0275pureFunction3(46, _c4, \u0275\u0275pipeBind1(5, 15, "COMMON.CHECKED_IN"), time_template_r34, !ctx.hide_field("checked_in_at")), \u0275\u0275pureFunction3(50, _c5, \u0275\u0275pipeBind1(6, 17, "COMMON.CHECKED_OUT"), time_template_r34, !ctx.hide_field("checked_out_at")), \u0275\u0275pureFunction3(54, _c6, \u0275\u0275pipeBind1(7, 19, "COMMON.STATE"), status_template_r33, !ctx.hide_field("status")), \u0275\u0275pureFunction3(58, _c7, \u0275\u0275pipeBind1(8, 21, "BOOKINGS.INDUCTED"), induction_template_r32, !!ctx.inductions_enabled), \u0275\u0275pureFunction3(62, _c8, \u0275\u0275pipeBind1(9, 23, "RESOURCE.PARKING"), parking_template_r31, !!ctx.has_parking), \u0275\u0275pureFunction3(66, _c9, \u0275\u0275pipeBind1(10, 25, "FORM.NOTES"), notes_template_r37, !ctx.hide_field("notes")), \u0275\u0275pureFunction1(70, _c10, action_template_r36)]))("filter", \u0275\u0275pipeBind1(11, 27, ctx.search))("sortable", true);
        \u0275\u0275advance(34);
        \u0275\u0275property("ngIf", (tmp_16_0 = \u0275\u0275pipeBind1(35, 29, ctx.guests)) == null ? null : tmp_16_0.length);
      }
    }, dependencies: [NgForOf, NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, CustomTooltipComponent, SimpleTableComponent, UserAvatarComponent, PrintableComponent, AuthenticatedImageDirective, AsyncPipe, DatePipe, TranslatePipe, LevelPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GuestListingComponent, { className: "GuestListingComponent", filePath: "apps/concierge/src/app/visitors/guest-listing.component.ts", lineNumber: 661 });
})();

// apps/concierge/src/app/visitors/invite-visitor-modal.component.ts
var InviteVisitorModalComponent = class _InviteVisitorModalComponent {
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.date = this._data.date;
  }
  onDone() {
    this._dialog_ref.close();
  }
  static {
    this.\u0275fac = function InviteVisitorModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InviteVisitorModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InviteVisitorModalComponent, selectors: [["invite-visitor-modal"]], standalone: false, decls: 2, vars: 1, consts: [[1, "relative", "min-h-[40rem]", "min-w-[40rem]"], [3, "done", "date"]], template: function InviteVisitorModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "main", 0)(1, "invite-visitor-form", 1);
        \u0275\u0275listener("done", function InviteVisitorModalComponent_Template_invite_visitor_form_done_1_listener() {
          return ctx.onDone();
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("date", ctx.date);
      }
    }, dependencies: [InviteVisitorFormComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteVisitorModalComponent, { className: "InviteVisitorModalComponent", filePath: "apps/concierge/src/app/visitors/invite-visitor-modal.component.ts", lineNumber: 17 });
})();

// apps/concierge/src/app/visitors/visitors-topbar.component.ts
function VisitorsTopbarComponent_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5);
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
var VisitorsTopbarComponent = class _VisitorsTopbarComponent extends AsyncHandler {
  constructor(_state, _org, _route, _router) {
    super();
    this._state = _state;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this.zones = [];
    this.levels = this._org.active_levels;
    this.filters = this._state.filters;
    this.setDate = (date) => this._state.setFilters({ date });
    this.setFilters = (filters) => this._state.setFilters(filters);
    this.setSearch = (str) => this._state.setSearchString(str);
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setFilters({ zones });
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
        if (params.has("zone_ids")) {
          const zones = params.get("zone_ids").split(",");
          if (zones.length) {
            const level = this._org.levelWithID(zones);
            this.zones = zones;
            if (!level)
              return;
            this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          }
        }
      }));
      this.subscription("levels", this._org.active_levels.subscribe((levels) => {
        this.zones = this.zones.filter((zone) => levels.find((lvl) => lvl.id === zone));
        if (!this.zones.length && levels.length) {
          this.zones.push(levels[0].id);
        }
        this.updateZones(this.zones);
      }));
      this.setSearch("");
    });
  }
  static {
    this.\u0275fac = function VisitorsTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorsTopbarComponent)(\u0275\u0275directiveInject(VisitorsStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorsTopbarComponent, selectors: [["visitors-topbar"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 18, vars: 13, consts: [[1, "flex", "h-20", "items-center", "space-x-2", "border-b", "border-base-200", "bg-base-100", "px-4"], ["appearance", "outline"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Viewing Period", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "w-2", "flex-1"], [1, "mr-2", 3, "modelChange"], [3, "dateChange"]], template: function VisitorsTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function VisitorsTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function VisitorsTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          return ctx.updateZones($event);
        });
        \u0275\u0275template(4, VisitorsTopbarComponent_mat_option_4_Template, 2, 2, "mat-option", 3);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "mat-form-field", 1)(7, "mat-select", 4);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275listener("ngModelChange", function VisitorsTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
          return ctx.setFilters({ period: $event });
        });
        \u0275\u0275elementStart(9, "mat-option", 5);
        \u0275\u0275text(10, "Show Day");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-option", 5);
        \u0275\u0275text(12, "Show Week");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-option", 5);
        \u0275\u0275text(14, "Show Month");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(15, "div", 6);
        \u0275\u0275elementStart(16, "searchbar", 7);
        \u0275\u0275listener("modelChange", function VisitorsTopbarComponent_Template_searchbar_modelChange_16_listener($event) {
          return ctx.setSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "date-options", 8);
        \u0275\u0275listener("dateChange", function VisitorsTopbarComponent_Template_date_options_dateChange_17_listener($event) {
          return ctx.setDate($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.zones);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 7, "COMMON.LEVEL_ALL"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 9, ctx.levels));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ((tmp_3_0 = \u0275\u0275pipeBind1(8, 11, ctx.filters)) == null ? null : tmp_3_0.period) || 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 7);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 30);
      }
    }, dependencies: [NgForOf, NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, MatFormField, MatSelect, MatOption, AsyncPipe, TranslatePipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=visitors-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorsTopbarComponent, { className: "VisitorsTopbarComponent", filePath: "apps/concierge/src/app/visitors/visitors-topbar.component.ts", lineNumber: 59 });
})();

// apps/concierge/src/app/visitors/visitors.component.ts
var _c02 = ["app-new-visitors", ""];
function VisitorsComponent_mat_option_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const level_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = \u0275\u0275pipeBind1(2, 1, level_r1.parent_id)) == null ? null : tmp_3_0.display_name, " ");
  }
}
function VisitorsComponent_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15)(1, "div", 16);
    \u0275\u0275template(2, VisitorsComponent_mat_option_19_div_2_Template, 5, 3, "div", 17);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r1.display_name || level_r1.name, " ");
  }
}
function VisitorsComponent_mat_progress_bar_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 20);
  }
}
var VisitorsComponent = class _VisitorsComponent {
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor(_state, _org, _router, _route, _dialog, _settings) {
    this._state = _state;
    this._org = _org;
    this._router = _router;
    this._route = _route;
    this._dialog = _dialog;
    this._settings = _settings;
    this.loading = this._state.loading;
    this.filters = this._state.filters;
    this.zones = [];
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this._settings.get("app.use_region") ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.setDate = (date) => this._state.setFilters({ date });
    this.setFilters = (filters) => this._state.setFilters(filters);
    this.setSearch = (str) => this._state.setSearchString(str);
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setFilters({ zones });
    };
  }
  inviteVisitor() {
    return __async(this, null, function* () {
      this._dialog.open(InviteVisitorModalComponent, {
        data: {
          date: yield nextValueFrom(this._state.filters.pipe(map((f) => f.date || Date.now())))
        }
      });
    });
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
  static {
    this.\u0275fac = function VisitorsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorsComponent)(\u0275\u0275directiveInject(VisitorsStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorsComponent, selectors: [["", "app-new-visitors", ""]], standalone: false, attrs: _c02, decls: 27, vars: 18, consts: [[1, "print:hidden"], [1, "flex", "h-px", "flex-1", "print:hidden"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-2", "flex-1"], [1, "mr-2", 3, "modelChange"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "flex", "items-center", "px-8", "pb-4"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "dateChange"], [1, "mx-8", "h-1/2", "flex-1", "overflow-auto"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["mode", "indeterminate", 1, "w-full"]], template: function VisitorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-topbar", 0);
        \u0275\u0275text(1, ">");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275element(3, "app-sidebar");
        \u0275\u0275elementStart(4, "main", 2)(5, "div", 3)(6, "h2", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "div", 5);
        \u0275\u0275elementStart(10, "searchbar", 6);
        \u0275\u0275listener("modelChange", function VisitorsComponent_Template_searchbar_modelChange_10_listener($event) {
          return ctx.setSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 7);
        \u0275\u0275listener("click", function VisitorsComponent_Template_button_click_11_listener() {
          return ctx.inviteVisitor();
        });
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8)(15, "mat-form-field", 9)(16, "mat-select", 10);
        \u0275\u0275pipe(17, "async");
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275listener("ngModelChange", function VisitorsComponent_Template_mat_select_ngModelChange_16_listener($event) {
          return ctx.updateZones($event);
        });
        \u0275\u0275template(19, VisitorsComponent_mat_option_19_Template, 5, 3, "mat-option", 11);
        \u0275\u0275pipe(20, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(21, "div", 5);
        \u0275\u0275elementStart(22, "date-options", 12);
        \u0275\u0275listener("dateChange", function VisitorsComponent_Template_date_options_dateChange_22_listener($event) {
          return ctx.setDate($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 13);
        \u0275\u0275element(24, "guest-listings");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, VisitorsComponent_mat_progress_bar_25_Template, 1, 0, "mat-progress-bar", 14);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, "RESOURCE.VISITORS"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 8, "BOOKINGS.VISITOR_INVITE_TITLE"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(17, 10, ctx.filters)) == null ? null : tmp_2_0.zones)("placeholder", \u0275\u0275pipeBind1(18, 12, "COMMON.LEVEL_ALL"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(20, 14, ctx.levels));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(26, 16, ctx.loading));
      }
    }, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, ApplicationTopbarComponent, ApplicationSidebarComponent, MatFormField, MatSelect, MatOption, MatProgressBar, MatRipple, GuestListingComponent, AsyncPipe, TranslatePipe, BuildingPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=visitors.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorsComponent, { className: "VisitorsComponent", filePath: "apps/concierge/src/app/visitors/visitors.component.ts", lineNumber: 96 });
})();

// apps/concierge/src/app/visitors/visitors.module.ts
var ROUTES = [{ path: "", component: VisitorsComponent }];
var VisitorsModule = class _VisitorsModule {
  static {
    this.\u0275fac = function VisitorsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VisitorsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      UIModule,
      SharedBookingsModule,
      RouterModule.forChild(ROUTES)
    ] });
  }
};
export {
  VisitorsModule
};
//# sourceMappingURL=visitors.module-YFGGQXAQ.js.map
