import {
  AsyncHandler,
  BehaviorSubject,
  Booking,
  DefaultValueAccessor,
  Desk,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  IconComponent,
  ItemListFieldComponent,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatError,
  MatFormField,
  MatInput,
  MatProgressSpinner,
  MatRipple,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  OrganisationService,
  RecurrenceDays,
  SettingsService,
  SettingsToggleComponent,
  Subject,
  TranslatePipe,
  UserSearchFieldComponent,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  addHours,
  approveBooking,
  catchError,
  checkinBooking,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  endOfDay,
  first,
  getUnixTime,
  i18n,
  listChildMetadata,
  map,
  notifyError,
  notifyInfo,
  notifySuccess,
  of,
  openConfirmModal,
  queryBookings,
  queryPagedBookings,
  randomInt,
  randomString,
  rejectBooking,
  removeBooking,
  saveBooking,
  scan,
  set,
  shareReplay,
  showMetadata,
  showStaff,
  startOfDay,
  switchMap,
  take,
  tap,
  unique,
  updateMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4KZ43ZQF.js";

// apps/concierge/src/app/desks/desk-modal.component.ts
function DeskModalComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function DeskModalComponent_main_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "label", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 14);
    \u0275\u0275element(7, "input", 35);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.DESKS_ID"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 4, "FORM.ID_REQUIRED"));
  }
}
function DeskModalComponent_main_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 9);
    \u0275\u0275template(1, DeskModalComponent_main_6_div_1_Template, 11, 6, "div", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "div", 12)(4, "label", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-form-field", 14);
    \u0275\u0275element(10, "input", 15);
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 12)(15, "label", 16);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-form-field", 14);
    \u0275\u0275element(21, "input", 17);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementStart(23, "mat-error");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "label", 18);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 19);
    \u0275\u0275element(30, "a-user-search-field", 20);
    \u0275\u0275elementStart(31, "button", 21);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275listener("click", function DeskModalComponent_main_6_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ assigned_user: null, assigned_to: null, assigned_name: null }));
    });
    \u0275\u0275elementStart(33, "app-icon", 22);
    \u0275\u0275text(34, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 23);
    \u0275\u0275element(36, "settings-toggle", 24);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275element(38, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "label", 26);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "item-list-field", 27);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementStart(44, "label", 26);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "item-list-field", 28);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementStart(49, "label", 26);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "mat-form-field", 29);
    \u0275\u0275element(53, "textarea", 30);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "label", 31);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-form-field", 14);
    \u0275\u0275element(59, "input", 32);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 18, "APP.CONCIERGE.DESKS_NAME"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 20, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 22, "EXPLORE.MAP_ID"), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 24, "APP.CONCIERGE.DESKS_MAP_ID_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 26, "EXPLORE.MAP_ID_REQUIRED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 28, "APP.CONCIERGE.USER_ASSIGNED"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(32, 30, "APP.CONCIERGE.USER_CLEAR"));
    \u0275\u0275advance(5);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(37, 32, "COMMON.BOOKABLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 34, "COMMON.GROUPS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(43, 36, "BOOKINGS.GROUPS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 38, "COMMON.FEATURES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(48, 40, "COMMON.FEATURES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 42, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(54, 44, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 46, "APP.CONCIERGE.DESKS_SECURITY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(60, 48, "APP.CONCIERGE.DESKS_SECURITY"));
  }
}
function DeskModalComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 36);
    \u0275\u0275element(1, "mat-spinner", 37);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.DESKS_SAVING"));
  }
}
var CHARS = "0123456789ABCDEF";
var DeskModalComponent = class _DeskModalComponent {
  get id() {
    return this._data?.desk?.id || "";
  }
  get desk() {
    return this._data?.desk;
  }
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.event = new EventEmitter();
    this.form = new FormGroup({
      id: new FormControl(``),
      name: new FormControl("", [Validators.required]),
      map_id: new FormControl("", [Validators.required]),
      groups: new FormControl([]),
      features: new FormControl([]),
      bookable: new FormControl(false),
      notes: new FormControl(""),
      assigned_user: new FormControl(null),
      assigned_to: new FormControl(""),
      assigned_name: new FormControl(""),
      security: new FormControl("")
    });
    if (_data?.desk)
      this.form.patchValue(_data.desk);
    if (!this.form.value.id) {
      this.form.patchValue({
        id: `desk-${randomString(3, CHARS)}_${randomString(5, CHARS)}`
      });
    }
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.desk?.assigned_to) {
        const user = yield showStaff(this.desk.assigned_to).toPromise();
        if (user) {
          this.form.patchValue({
            assigned_user: user,
            assigned_to: user.email,
            assigned_name: user.name
          });
        }
      }
    });
  }
  postForm() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (!this.form.valid)
      return;
    this.loading = true;
    const value = __spreadValues({}, this.form.getRawValue());
    if (value.assigned_user) {
      value.assigned_to = value.assigned_user.email;
      value.assigned_name = value.assigned_user.name;
      delete value.assigned_user;
    } else {
      delete value.assigned_to;
      delete value.assigned_name;
    }
    this._dialog_ref.disableClose = true;
    this.event.emit({ reason: "done", metadata: value });
  }
  static {
    this.\u0275fac = function DeskModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskModalComponent, selectors: [["desk-modal"]], outputs: { event: "event" }, standalone: false, decls: 13, vars: 9, consts: [["load_state", ""], [1, "w-[32rem]"], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "flex max-h-[65vh] flex-col overflow-auto p-4", 3, "formGroup", 4, "ngIf", "ngIfElse"], [1, "flex", "items-center", "justify-end", "space-x-2", "border-t", "border-base-300", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "flex-col", "overflow-auto", "p-4", 3, "formGroup"], ["class", "w-full", 4, "ngIf"], [1, "flex", "space-x-4"], [1, "w-1/3", "flex-1"], ["for", "name"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "e.g. Office Desk"], ["for", "map-id"], ["matInput", "", "name", "map-id", "formControlName", "map_id", 3, "placeholder"], ["for", "user"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["name", "user", "formControlName", "assigned_user", 1, "flex-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "min-w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], ["className", "material-symbols-outlined"], [1, "flex", "space-x-4", "pb-4"], ["formControlName", "bookable", 1, "flex-1", 3, "name"], [1, "flex-1"], ["for", "notes"], ["formControlName", "groups", 1, "w-full", 3, "placeholder"], ["formControlName", "features", 1, "w-full", 3, "placeholder"], ["appearance", "outline"], ["matInput", "", "name", "notes", "formControlName", "notes", 3, "placeholder"], ["for", "security"], ["matInput", "", "name", "security", "formControlName", "security", 3, "placeholder"], [1, "w-full"], ["for", "id"], ["matInput", "", "name", "id", "formControlName", "id", "placeholder", "desk-10.123"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["diameter", "32"]], template: function DeskModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "h2", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, DeskModalComponent_button_5_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, DeskModalComponent_main_6_Template, 61, 50, "main", 5);
        \u0275\u0275elementStart(7, "footer", 6)(8, "button", 7);
        \u0275\u0275listener("click", function DeskModalComponent_Template_button_click_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.postForm());
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, DeskModalComponent_ng_template_11_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r4 = \u0275\u0275reference(12);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, ctx.id ? "APP.CONCIERGE.DESKS_EDIT" : "APP.CONCIERGE.DESKS_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "COMMON.SAVE"), " ");
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormField, MatError, MatInput, MatTooltip, MatProgressSpinner, MatDialogClose, MatRipple, UserSearchFieldComponent, ItemListFieldComponent, IconComponent, SettingsToggleComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskModalComponent, { className: "DeskModalComponent", filePath: "apps/concierge/src/app/desks/desk-modal.component.ts", lineNumber: 180 });
})();

// apps/concierge/src/app/desks/desks-state.service.ts
var DesksStateService = class _DesksStateService extends AsyncHandler {
  nextPage() {
    this._call_next_page.next(`NEXT_${Date.now()}`);
  }
  constructor(_org, _dialog, _settings) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._filters = new BehaviorSubject({});
    this._desk_bookings = [];
    this._loading = new BehaviorSubject(false);
    this._change = new BehaviorSubject(0);
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.desks = combineLatest([
      this._filters,
      this._change
    ]).pipe(debounceTime(500), switchMap(([filters]) => {
      const zones = filters.zones || [];
      return zones && !zones.includes("All") ? showMetadata(zones[0], "desks").pipe(map((m) => m.details instanceof Array ? m.details : []), catchError((_) => of([]))) : listChildMetadata(this._org.building?.id, {
        name: "desks"
      }).pipe(map((m) => m.map((i) => i.metadata?.desks?.details || []).reduce((c, i) => [...c, ...i], [])), catchError((_) => of([])));
    }), map((list) => {
      if (!(list instanceof Array))
        list = [];
      list.sort((a, b) => a.name?.localeCompare(b.name));
      return list.map((i) => new Desk(__spreadProps(__spreadValues({}, i), { qr_code: "" })));
    }), shareReplay(1));
    this._next_page = new Subject();
    this._call_next_page = new Subject();
    this._all_zones_keys = ["All", -1, "-1", ""];
    this.setup_paging = combineLatest([
      this._filters,
      this._org.initialised
    ]).pipe(debounceTime(500), tap(([filters, loaded]) => {
      if (!loaded)
        return;
      const date = filters.date || Date.now();
      const active_zones = (filters.zones || []).filter((_) => !this._all_zones_keys.includes(_));
      const zones = !active_zones.length ? this._settings.get("app.use_region") ? this._org.buildingsForRegion().map((_) => _.id) : [this._org.building.id] : filters.zones;
      this._next_page.next(() => queryPagedBookings({
        period_start: getUnixTime(startOfDay(date)),
        period_end: getUnixTime(endOfDay(date)),
        type: "desk",
        zones: zones.join(","),
        include_checked_out: true,
        limit: 500
      }).pipe(catchError((_) => of({ data: [], total: 0, next: null }))));
      this._call_next_page.next(`RESET_${Date.now()}`);
    }));
    this.paged_bookings = combineLatest([
      this._next_page,
      this._call_next_page
    ]).pipe(debounceTime(500), distinctUntilChanged((a, b) => a[1] === b[1]), switchMap(([next_page, action]) => {
      this._loading.next(true);
      if (!next_page) {
        return of({
          data: [],
          total: 0,
          next: null,
          reset: action.includes("RESET")
        });
      }
      if (action.includes("RESET")) {
        return next_page().pipe(map((data) => __spreadProps(__spreadValues({}, data), { reset: true })), catchError((_) => of({ data: [], total: 0, next: null })));
      }
      return next_page().pipe(map((data) => __spreadProps(__spreadValues({}, data), { reset: false })), catchError((_) => of({ data: [], total: 0, next: null })));
    }), scan((acc, { data, total, next, reset }) => {
      const list = data;
      this._next_page.next(next);
      if (reset)
        return {
          list,
          total,
          has_next: list.length < total && !!next
        };
      return {
        list: [...acc.list, ...list],
        has_next: !!next,
        total
      };
    }, { list: [], total: 0, has_next: false }), tap((_) => this._loading.next(false)), shareReplay(1));
    this.has_more_pages = this.paged_bookings.pipe(map((_) => _.has_next));
    this.bookings = combineLatest([
      this.paged_bookings,
      this._change
    ]).pipe(map(([i]) => i.list));
    this.setup_paging.subscribe();
  }
  setFilters(filters) {
    if (filters.zones?.includes("All")) {
      filters.zones = [
        "All",
        ...this._org.levelsForBuilding(this._org.building).map((lvl) => lvl.id)
      ];
    } else if (filters.zones && this._filters.getValue()?.zones?.includes("All")) {
      filters.zones = [];
    }
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), filters));
  }
  refresh() {
    this._loading.next(true);
    this.timeout("poll", () => this.setFilters(this._filters.getValue()));
  }
  addDesks(list) {
    return __async(this, null, function* () {
      const zone = this._filters.getValue().zones[0];
      const desk_list = yield this.desks.pipe(take(1)).toPromise();
      for (const desk of list) {
        const idx = desk_list.findIndex((_) => _.id === desk.id);
        if (idx >= 0)
          desk_list[idx] = desk;
        else
          desk_list.push(desk);
      }
      yield updateMetadata(zone, {
        name: "desks",
        details: desk_list,
        description: "List of available desks"
      }).toPromise();
      this._change.next(Date.now());
    });
  }
  editDesk() {
    return __async(this, arguments, function* (desk = new Desk()) {
      const ref = this._dialog.open(DeskModalComponent, { data: { desk } });
      const state = yield Promise.race([
        ref.afterClosed().toPromise(),
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise()
      ]);
      if (state?.reason !== "done")
        return;
      const zone = this._filters.getValue().zones[0];
      const new_desk = __spreadProps(__spreadValues({}, state.metadata), {
        id: state.metadata.id || `desk-${zone.slice(-3)}.${randomInt(999999)}`
      });
      const desk_list = yield this.desks.pipe(take(1)).toPromise();
      const idx = desk_list.findIndex((_) => _.id === new_desk.id);
      if (idx >= 0)
        desk_list[idx] = new_desk;
      else
        desk_list.push(new_desk);
      yield updateMetadata(zone, {
        name: "desks",
        details: desk_list,
        description: "List of available desks"
      }).toPromise().catch((e) => {
        notifyError(i18n("APP.CONCIERGE.DESKS_SAVE_ERROR", { error: e }));
        ref.componentInstance.loading = false;
        throw e;
      });
      if (desk.assigned_to && desk.assigned_to !== new_desk.assigned_to) {
        this._clearAssignedBooking(desk);
      }
      if (desk.assigned_to !== new_desk.assigned_to && new_desk.assigned_to) {
        const date = set(Date.now(), { hours: 1, minutes: 0, seconds: 0 });
        yield saveBooking(new Booking({
          user_id: new_desk.assigned_to,
          user_email: new_desk.assigned_to,
          user_name: new_desk.assigned_name,
          booking_start: getUnixTime(date),
          booking_end: getUnixTime(addHours(date, 22)),
          type: "desk",
          booking_type: "desk",
          asset_id: new_desk.id,
          asset_name: new_desk.name,
          recurrence_type: "daily",
          recurrence_days: RecurrenceDays.MONDAY | RecurrenceDays.TUESDAY | RecurrenceDays.WEDNESDAY | RecurrenceDays.THURSDAY | RecurrenceDays.FRIDAY,
          zones: unique([
            this._org.organisation.id,
            this._org.region?.id,
            this._org.building?.id,
            new_desk.zone?.id,
            new_desk.zone,
            ...new_desk?.zones || [],
            zone
          ]).filter((_) => !!_),
          extension_data: {
            asset_name: new_desk.name,
            is_assigned: true
          }
        })).toPromise();
      }
      this._change.next(Date.now());
      ref.close();
    });
  }
  checkinDesk(desk, state = true) {
    return __async(this, null, function* () {
      const status = yield checkinBooking(desk.id, state ?? true).toPromise().catch((_) => ({ failed: true, error: _ }));
      if (status.failed) {
        notifyError(i18n(state ? "APP.CONCIERGE.DESKS_CHECKIN_ERROR" : "APP.CONCIERGE.DESKS_CHECKOUT_ERROR", { error: status.error }));
        throw status.error;
      }
      notifySuccess(i18n(state ? "APP.CONCIERGE.DESKS_CHECKIN_SUCCESS" : "APP.CONCIERGE.DESKS_CHECKOUT_SUCCESS"));
    });
  }
  approveDesk(desk) {
    return __async(this, null, function* () {
      const status = yield approveBooking(desk.id).toPromise().catch((_) => ({ failed: true, error: _ }));
      if (status.failed) {
        return notifyError(i18n("APP.CONCIERGE.DESKS_APPROVE_ERROR", {
          error: status.error
        }));
      }
      notifySuccess(i18n("APP.CONCIERGE.DESKS_APPROVE_SUCCESS"));
      desk.approved = true;
      desk.rejected = false;
      this.setFilters({});
    });
  }
  rejectDesk(desk) {
    return __async(this, null, function* () {
      const status = yield rejectBooking(desk.id).toPromise().catch((_) => ({ failed: true, error: _ }));
      if (status.failed) {
        return notifyError(i18n("APP.CONCIERGE.DESKS_REJECT_ERROR", {
          error: status.error
        }));
      }
      notifySuccess(i18n("APP.CONCIERGE.DESKS_REJECT_SUCCESS"));
      desk.approved = false;
      desk.rejected = true;
      this.setFilters({});
    });
  }
  giveAccess(desk) {
    return __async(this, null, function* () {
      const status = yield saveBooking(new Booking(__spreadProps(__spreadValues({}, desk), { access: true }))).toPromise().catch((_) => ({ failed: true, error: _ }));
      if (status.failed) {
        return notifyError(i18n("APP.CONCIERGE.DESKS_ACCESS_ERROR", {
          error: status.error
        }));
      }
      notifySuccess(i18n("APP.CONCIERGE.DESKS_ACCESS_SUCCESS"));
      this._desk_bookings = [...this._desk_bookings, status];
      this.setFilters({});
    });
  }
  rejectAllDesks() {
    return __async(this, null, function* () {
      const list = this._desk_bookings || [];
      if (list.length <= 0)
        return notifyInfo("No desks to reject for the selected date");
      const resp = yield openConfirmModal({
        title: i18n("APP.CONCIERGE.DESKS_REJECT_ALL_TITLE"),
        content: i18n("APP.CONCIERGE.DESKS_REJECT_ALL_MSG"),
        icon: {
          type: "icon",
          class: "material-icons",
          content: "delete"
        }
      }, this._dialog);
      if (resp.reason !== "done")
        return;
      resp.loading(i18n("APP.CONCIERGE.DESKS_REJECT_ALL_LOADING"));
      yield Promise.all(list.map((desk) => rejectBooking(desk.id).toPromise())).catch((e) => {
        notifyError(i18n("APP.CONCIERGE.DESKS_REJECT_ALL_ERROR", { error: e }));
        throw e;
      });
      notifySuccess(i18n("APP.CONCIERGE.DESKS_REJECT_ALL_SUCCESS"));
      this.setFilters({});
      resp.close();
    });
  }
  _clearAssignedBooking(desk) {
    return __async(this, null, function* () {
      const booking_list = yield queryBookings({
        period_start: getUnixTime(startOfDay(Date.now())),
        period_end: getUnixTime(endOfDay(Date.now())),
        type: "desk",
        email: desk.assigned_to,
        include_checked_out: true
      }).toPromise();
      const filtered = booking_list.filter((_) => _.asset_id === desk.id);
      yield Promise.all(filtered.map((_) => removeBooking(_.id).toPromise()));
    });
  }
  static {
    this.\u0275fac = function DesksStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DesksStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(SettingsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DesksStateService, factory: _DesksStateService.\u0275fac, providedIn: "root" });
  }
};

export {
  DesksStateService
};
//# sourceMappingURL=chunk-BE63A6QT.js.map
