import {
  BookingFormService,
  ParkingSpaceListFieldComponent
} from "./chunk-RNUBUWJY.js";
import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Booking,
  DateFieldComponent,
  DefaultValueAccessor,
  DurationFieldComponent,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FullscreenModalShellComponent,
  IconComponent,
  MAT_DIALOG_DATA,
  MatCheckbox,
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
  NgModel,
  OrganisationService,
  RecurrenceDays,
  SettingsService,
  SettingsToggleComponent,
  TimeFieldComponent,
  TranslatePipe,
  UserSearchFieldComponent,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  addDays,
  addHours,
  approveBooking,
  approveBookingInstance,
  checkinBooking,
  checkinBookingInstance,
  combineLatest,
  currentUser,
  debounceTime,
  endOfDay,
  filter,
  first,
  getInvalidFields,
  getUnixTime,
  i18n,
  map,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  queryBookings,
  randomInt,
  rejectBooking,
  rejectBookingInstance,
  removeBooking,
  saveBooking,
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
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZMOZKBJD.js";

// apps/concierge/src/app/parking/parking-space-modal.component.ts
function ParkingSpaceModalComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ParkingSpaceModalComponent_main_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 9)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 11);
    \u0275\u0275element(5, "input", 12);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 13);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 11);
    \u0275\u0275element(14, "input", 14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "mat-error");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label", 15);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 16);
    \u0275\u0275element(23, "a-user-search-field", 17);
    \u0275\u0275elementStart(24, "button", 18);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("click", function ParkingSpaceModalComponent_main_6_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ assigned_user: null, assigned_to: null, assigned_name: null }));
    });
    \u0275\u0275elementStart(26, "app-icon", 19);
    \u0275\u0275text(27, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "label", 20);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-form-field", 11);
    \u0275\u0275element(32, "textarea", 21);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 11, "APP.CONCIERGE.PARKING_SPACE_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 13, "APP.CONCIERGE.PARKING_SPACE_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 15, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 17, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 19, "EXPLORE.MAP_ID_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 21, "EXPLORE.MAP_ID_REQUIRED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 23, "APP.CONCIERGE.USER_ASSIGNED"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(25, 25, "APP.CONCIERGE.USER_CLEAR"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 27, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(33, 29, "FORM.NOTES"));
  }
}
function ParkingSpaceModalComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 22);
    \u0275\u0275element(1, "mat-spinner", 23);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.PARKING_SPACE_SAVE"));
  }
}
var ParkingSpaceModalComponent = class _ParkingSpaceModalComponent {
  get id() {
    return this._data?.id || "";
  }
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.event = new EventEmitter();
    this.form = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", [Validators.required]),
      map_id: new FormControl("", [Validators.required]),
      assigned_user: new FormControl(null),
      assigned_to: new FormControl(""),
      assigned_name: new FormControl(""),
      notes: new FormControl(""),
      map_rotation: new FormControl(0)
    });
    if (_data)
      this.form.patchValue(_data);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this._data.assigned_to) {
        const user = yield showStaff(this._data.assigned_to).toPromise();
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
    if (!this.form.valid)
      return;
    this.loading = true;
    const value = __spreadValues({}, this.form.getRawValue());
    if (value.assigned_user) {
      value.assigned_to = value.assigned_user.email;
      value.assigned_name = value.assigned_user.name;
      delete value.assigned_user;
    }
    this._dialog_ref.disableClose = true;
    this.event.emit({ reason: "done", metadata: value });
  }
  static {
    this.\u0275fac = function ParkingSpaceModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpaceModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceModalComponent, selectors: [["parking-space-modal"]], outputs: { event: "event" }, standalone: false, decls: 13, vars: 9, consts: [["load_state", ""], [1, "w-[28rem]"], [1, "sticky", "top-0", "p-2", "m-2", "w-[calc(100%-1rem)]", "border-none", "z-10", "bg-base-200", "rounded"], [1, "text-xl", "font-medium", "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col", 3, "formGroup", 4, "ngIf", "ngIfElse"], [1, "flex", "items-center", "justify-end", "space-x-2", "px-4", "py-2", "border-t", "border-base-300"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", 3, "formGroup"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "map-id"], ["matInput", "", "name", "map-id", "formControlName", "map_id", 3, "placeholder"], ["for", "user"], [1, "flex", "items-center", "space-x-2", "mb-4"], ["name", "user", "formControlName", "assigned_user", 1, "flex-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "min-w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], ["className", "material-symbols-outlined"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes", 3, "placeholder"], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["diameter", "32"]], template: function ParkingSpaceModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "h2", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ParkingSpaceModalComponent_button_5_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, ParkingSpaceModalComponent_main_6_Template, 34, 31, "main", 5);
        \u0275\u0275elementStart(7, "footer", 6)(8, "button", 7);
        \u0275\u0275listener("click", function ParkingSpaceModalComponent_Template_button_click_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.postForm());
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, ParkingSpaceModalComponent_ng_template_11_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r4 = \u0275\u0275reference(12);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, ctx.id ? "APP.CONCIERGE.PARKING_SPACE_EDIT" : "APP.CONCIERGE.PARKING_SPACE_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "COMMON.SAVE"), " ");
      }
    }, dependencies: [NgIf, MatFormField, MatError, MatInput, MatTooltip, MatProgressSpinner, MatDialogClose, MatRipple, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, UserSearchFieldComponent, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceModalComponent, { className: "ParkingSpaceModalComponent", filePath: "apps/concierge/src/app/parking/parking-space-modal.component.ts", lineNumber: 125 });
})();

// apps/concierge/src/app/parking/parking-user-modal.component.ts
function ParkingUserModalComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ParkingUserModalComponent_main_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 8)(1, "div", 9);
    \u0275\u0275element(2, "a-user-search-field", 10);
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function ParkingUserModalComponent_main_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ user: null, email: null, name: null, phone: null }));
    });
    \u0275\u0275elementStart(4, "app-icon", 12);
    \u0275\u0275text(5, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "label", 13);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 14);
    \u0275\u0275element(10, "input", 15);
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 16);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 14);
    \u0275\u0275element(18, "input", 17);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementStart(20, "mat-error");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 18)(24, "div", 19)(25, "label", 20);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 21);
    \u0275\u0275element(29, "input", 22);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 19)(32, "label", 23);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 21);
    \u0275\u0275element(36, "input", 24);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "label", 25);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-form-field", 14);
    \u0275\u0275element(42, "textarea", 26);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 27);
    \u0275\u0275element(45, "settings-toggle", 28);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 13, "FORM.NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 15, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 17, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(19, 19, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 21, "FORM.EMAIL_REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 23, "EXPLORE.PARKING_PLATE_NUMBER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(30, 25, "EXPLORE.PARKING_PLATE_NUMBER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 27, "APP.CONCIERGE.PARKING_CAR_COLOUR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(37, 29, "APP.CONCIERGE.PARKING_CAR_COLOUR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 31, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(43, 33, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(46, 35, "APP.CONCIERGE.PARKING_USER_DENY_PLACEHOLER"));
  }
}
function ParkingUserModalComponent_footer_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 29)(1, "button", 30);
    \u0275\u0275listener("click", function ParkingUserModalComponent_footer_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.postForm());
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
function ParkingUserModalComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 31);
    \u0275\u0275element(1, "mat-spinner", 32);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.PARKING_USER_SAVE"));
  }
}
var ParkingUserModalComponent = class _ParkingUserModalComponent extends AsyncHandler {
  get id() {
    return this._data?.id || "";
  }
  constructor(_data, _dialog_ref) {
    super();
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.event = new EventEmitter();
    this.loading = false;
    this.form = new FormGroup({
      id: new FormControl(""),
      user: new FormControl(null),
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      plate_number: new FormControl(""),
      car_color: new FormControl(""),
      notes: new FormControl(""),
      deny: new FormControl(false)
    });
    if (_data)
      this.form.patchValue(_data);
  }
  ngOnInit() {
    this.subscription("user", this.form.valueChanges.subscribe((value) => {
      if (value.user) {
        this.form.patchValue({
          email: value.user.email,
          name: value.user.name
        });
      }
    }));
  }
  postForm() {
    if (!this.form.valid)
      return;
    this.loading = true;
    const value = this.form.value;
    if (value.user) {
      value.email = value.user.email;
      value.name = value.user.name;
    }
    this._dialog_ref.disableClose = true;
    this.event.emit({ reason: "done", metadata: value });
  }
  static {
    this.\u0275fac = function ParkingUserModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingUserModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingUserModalComponent, selectors: [["parking-user-modal"]], outputs: { event: "event" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 7, consts: [["load_state", ""], [1, "w-[28rem]"], [1, "flex", "items-center", "justify-between", "px-2", "w-full"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col max-h-[65vh] overflow-auto", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex items-center justify-end space-x-2 p-2 border-t border-base-200", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", "max-h-[65vh]", "overflow-auto", 3, "formGroup"], [1, "flex", "items-center", "space-x-2", "mb-4"], ["name", "user", "formControlName", "user", 1, "flex-1"], ["icon", "", "matRipple", "", "matTooltip", "Clear Selected User", 1, "h-12", "w-12", "min-w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click"], ["className", "material-symbols-outlined"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "Name"], ["for", "email"], ["matInput", "", "name", "email", "formControlName", "email", 3, "placeholder"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["for", "plate-number"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "plate-number", "formControlName", "plate_number", 3, "placeholder"], ["for", "car-color"], ["matInput", "", "name", "car-color", "formControlName", "car_color", 3, "placeholder"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes", 3, "placeholder"], [1, "flex", "items-center", "mb-4"], ["formControlName", "deny", 1, "flex-1", 3, "name"], [1, "flex", "items-center", "justify-end", "space-x-2", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "user-y-2"], ["diameter", "32"]], template: function ParkingUserModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "h2", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ParkingUserModalComponent_button_5_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, ParkingUserModalComponent_main_6_Template, 47, 37, "main", 5)(7, ParkingUserModalComponent_footer_7_Template, 4, 3, "footer", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, ParkingUserModalComponent_ng_template_8_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r4 = \u0275\u0275reference(9);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, ctx.id ? "APP.CONCIERGE.PARKING_USER_EDIT" : "APP.CONCIERGE.PARKING_USER_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [NgIf, MatFormField, MatError, MatInput, MatTooltip, MatProgressSpinner, MatDialogClose, MatRipple, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, UserSearchFieldComponent, IconComponent, SettingsToggleComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingUserModalComponent, { className: "ParkingUserModalComponent", filePath: "apps/concierge/src/app/parking/parking-user-modal.component.ts", lineNumber: 154 });
})();

// apps/concierge/src/app/parking/parking-booking-modal.component.ts
var _c0 = () => ({ standalone: true });
function ParkingBookingModalComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "a-user-search-field", 21);
    \u0275\u0275elementEnd();
  }
}
function ParkingBookingModalComponent_mat_checkbox_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function ParkingBookingModalComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 23)(2, "label", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 25);
    \u0275\u0275listener("ngModelChange", function ParkingBookingModalComponent_div_33_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 26)(9, "label", 27);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 9, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(13, _c0))("disabled", ctx_r1.form.controls.date.disabled)("use_24hr", ctx_r1.use_24hr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r1.form == null ? null : (tmp_7_0 = ctx_r1.form.getRawValue()) == null ? null : tmp_7_0.date)("max", ctx_r1.max_duration)("use_24hr", ctx_r1.use_24hr);
  }
}
function ParkingBookingModalComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
var ParkingBookingModalComponent = class _ParkingBookingModalComponent extends AsyncHandler {
  get id() {
    return this.form.value.id;
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.parking.available_period") || this._settings.get("app.bookings.available_period") || 7));
  }
  get max_duration() {
    return this._settings.get("app.parking.max_duration") || this._settings.get("app.bookings.max_duration") || 480;
  }
  get allow_all_day() {
    return this._settings.get("app.parking.allow_all_day") ?? true;
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  constructor(_data, _booking_form, _dialog_ref, _settings) {
    super();
    this._data = _data;
    this._booking_form = _booking_form;
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this.loading = false;
    this.user = this._data.user;
    this.date = this._data.date;
    this.allow_time_changes = this._data.allow_time_changes;
    this.form = this._booking_form.form;
  }
  ngOnInit() {
    this._booking_form.newForm(this._data.booking);
    this._booking_form.setOptions({ type: "parking" });
    this.subscription("user_changes", this.form.controls.user.valueChanges.subscribe((user) => {
      if (!user)
        return;
      this.form.patchValue({
        user_name: user.name,
        user_email: user.email,
        attendees: [user]
      });
    }));
    this.form.patchValue({
      booking_type: "parking",
      all_day: this._data.booking ? this._data.booking.duration > 12 * 60 : true
    });
    if (!this.form.value.user) {
      this.form.patchValue({
        user: this._data.booking?.attendees[0] || currentUser()
      });
    }
    if (this._data.parent_id) {
      this.form.patchValue({
        parent_id: this._data.parent_id
      });
    }
    if (this._data.user) {
      this.form.patchValue({
        user: this._data.user,
        user_email: this._data.user.email,
        user_name: this._data.user.name,
        attendees: [this._data.user]
      });
      this.form.controls.plate_number.setValidators([
        Validators.required
      ]);
      this.form.controls.user_name.disable();
      this.form.controls.user_email.disable();
    }
    if (this._data.booking?.id) {
      this.form.controls.user.disable();
      this.form.controls.user_name.disable();
      this.form.controls.user_email.disable();
    }
    if (this._data.level) {
      this._booking_form.setOptions({ zone_id: this._data.level.id });
    }
    if (this._data.link_id) {
      this.form.patchValue({ parent_id: this._data.link_id });
    }
    if (this._data.space) {
      this.form.patchValue({ resources: [this._data.space] });
    }
    if (this._data.date) {
      this.timeout("init_date", () => {
        this.form.patchValue({ date: this._data.date });
        if (!this._data.allow_time_changes) {
          this.form.get("date").disable();
          this.form.get("duration").disable();
        }
      }, 300);
      if (!this._data.allow_time_changes) {
        this.subscription("form_change", this.form.valueChanges.subscribe((v) => {
          this.timeout("disable_date", () => {
            this.form.get("date").disable({ emitEvent: false });
            this.form.get("duration").disable({ emitEvent: false });
          }, 50);
        }));
      }
    }
  }
  postForm() {
    return __async(this, null, function* () {
      if (!this.form.value.all_day && this.form.value.duration > this.max_duration) {
        this.form.patchValue({ duration: 30 });
      }
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      if (this.form.invalid) {
        return notifyError(i18n("FORM.INVALID_FIELDS", {
          field_list: getInvalidFields(this.form).join(", ")
        }));
      }
      this.loading = true;
      this.form.patchValue({ user_id: void 0, booking_type: "parking" });
      const result = yield this._booking_form.postForm().catch((e) => {
        this.loading = false;
        this.form.controls.plate_number.setValidators([]);
        notifyError(e);
        throw e;
      });
      this.form.controls.plate_number.setValidators([]);
      notifySuccess(i18n("APP.CONCIERGE.PARKING_SAVE"));
      this.form.get("date").enable();
      this.form.get("duration").enable();
      this.form.controls.user.disable();
      this.form.controls.user_name.disable();
      this.form.controls.user_email.disable();
      this._dialog_ref.close(result.id);
    });
  }
  static {
    this.\u0275fac = function ParkingBookingModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingBookingModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingBookingModalComponent, selectors: [["parking-booking-modal"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 48, vars: 46, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], ["class", "flex items-center space-x-2 mb-4", 4, "ngIf"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1"], ["for", "user-name"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "user-name", "formControlName", "user_name", 3, "placeholder"], ["for", "email"], ["matInput", "", "name", "email", "formControlName", "user_email", 3, "placeholder"], [1, "relative"], ["for", "date"], ["formControlName", "date"], ["formControlName", "all_day", "class", "absolute -top-2 right-0", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["for", "parking-space"], ["name", "parking-space", "formControlName", "resources", 1, "mb-2"], ["for", "plate-number"], [4, "ngIf"], ["matInput", "", "name", "plate-number", "formControlName", "plate_number", 3, "placeholder"], [1, "flex", "items-center", "space-x-2", "mb-4"], ["name", "user", "formControlName", "user", 1, "flex-1"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], [1, "flex-1", "w-1/3"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "use_24hr"], [1, "flex-1", "w-1/3", "relative"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "use_24hr"]], template: function ParkingBookingModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275listener("confirm", function ParkingBookingModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.postForm();
        });
        \u0275\u0275elementStart(4, "form", 1);
        \u0275\u0275template(5, ParkingBookingModalComponent_div_5_Template, 2, 0, "div", 2);
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "label", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-form-field", 6);
        \u0275\u0275element(12, "input", 7);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementStart(14, "mat-error");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 4)(18, "label", 8);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-form-field", 6);
        \u0275\u0275element(22, "input", 9);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementStart(24, "mat-error");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "div", 10)(28, "label", 11);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "a-date-field", 12);
        \u0275\u0275template(32, ParkingBookingModalComponent_mat_checkbox_32_Template, 3, 3, "mat-checkbox", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, ParkingBookingModalComponent_div_33_Template, 15, 14, "div", 14);
        \u0275\u0275elementStart(34, "label", 15);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "parking-space-list-field", 16);
        \u0275\u0275elementStart(38, "label", 17);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275template(41, ParkingBookingModalComponent_span_41_Template, 2, 0, "span", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-form-field", 6);
        \u0275\u0275element(43, "input", 19);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementStart(45, "mat-error");
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 18, ctx.id ? "APP.CONCIERGE.PARKING_EDIT" : "APP.CONCIERGE.PARKING_NEW"))("loading", \u0275\u0275pipeBind1(2, 20, ctx.loading) ? \u0275\u0275pipeBind1(3, 22, "APP.CONCIERGE.PARKING_SAVING") : "");
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.user);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 24, "FORM.NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 26, "FORM.NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 28, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 30, "FORM.EMAIL"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 32, "FORM.EMAIL"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 34, "FORM.EMAIL_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 36, "FORM.DATE"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.allow_all_day && !ctx.form.controls.duration.disabled);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.form.value.all_day);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 38, "APP.CONCIERGE.PARKING_SPACE"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 40, "EXPLORE.PARKING_PLATE_NUMBER"), "");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.user);
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(44, 42, "EXPLORE.PARKING_PLATE_NUMBER"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 44, "BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED"));
      }
    }, dependencies: [NgIf, MatFormField, MatError, MatInput, MatCheckbox, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, UserSearchFieldComponent, FullscreenModalShellComponent, ParkingSpaceListFieldComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingBookingModalComponent, { className: "ParkingBookingModalComponent", filePath: "apps/concierge/src/app/parking/parking-booking-modal.component.ts", lineNumber: 154 });
})();

// apps/concierge/src/app/parking/parking-state.service.ts
var ParkingStateService = class _ParkingStateService extends AsyncHandler {
  constructor(_org, _dialog, _settings) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._poll = new BehaviorSubject(0);
    this._change = new BehaviorSubject(0);
    this._options = new BehaviorSubject({
      date: Date.now(),
      search: "",
      zones: []
    });
    this._loading = new BehaviorSubject([]);
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([_, bld]) => {
      const levels = this._org.levels.filter((_2) => _2.tags.includes("parking"));
      if (this._settings.get("app.use_region")) {
        const blds = this._org.buildingsForRegion();
        const bld_ids = blds.map((bld2) => bld2.id);
        const list = levels.filter((lvl) => bld_ids.includes(lvl.parent_id));
        list.map((lvl) => __spreadProps(__spreadValues({}, lvl), {
          display_name: `${blds.find((_2) => _2.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
        }));
        return list;
      }
      return levels.filter((lvl) => lvl.parent_id === bld.id);
    }));
    this.spaces = combineLatest([
      this.levels,
      this._options,
      this._change
    ]).pipe(switchMap(([levels, options]) => {
      if (!(options.zones[0] || levels[0]?.id)) {
        return of([]);
      }
      this._loading.next([...this._loading.getValue(), "spaces"]);
      return showMetadata(options.zones[0] || levels[0]?.id, "parking-spaces").pipe(map(({ details }) => (details instanceof Array ? details : []).map((space) => __spreadProps(__spreadValues({}, space), {
        zone_id: options.zones[0] || levels[0]?.id
      }))));
    }), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "spaces"))), shareReplay(1));
    this.users = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([bld]) => !!bld?.id), switchMap(([bld]) => {
      this._loading.next([...this._loading.getValue(), "users"]);
      return showMetadata(bld.id, "parking-users");
    }), map((metadata) => metadata.details instanceof Array ? metadata.details : []), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "users"))), shareReplay(1));
    this.bookings = combineLatest([
      this._org.active_building,
      this._options,
      this.users,
      this._poll,
      this._change
    ]).pipe(debounceTime(500), switchMap(([bld, options, users]) => {
      this._loading.next([...this._loading.getValue(), "[BOOKINGS]"]);
      return queryBookings({
        period_start: getUnixTime(startOfDay(options.date)),
        period_end: getUnixTime(endOfDay(options.date)),
        type: "parking",
        zones: options.zones?.length ? options.zones.join(",") : (this._settings.get("app.use_region") ? this._org.region?.id : "") || bld?.id,
        include_checked_out: true
      }).pipe(map((list) => {
        for (const booking of list) {
          const user = users.find((_) => _.email.toLowerCase() === booking.user_email.toLowerCase());
          if (user) {
            booking.extension_data.plate_number = booking.extension_data.plate_number || user.plate_number;
          }
        }
        return list;
      }));
    }), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "[BOOKINGS]"))), shareReplay(1));
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  startPolling(delay = 2 * 60 * 1e3) {
    this._poll.next(Date.now());
    this.interval("poll", () => this._poll.next(Date.now()), delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  /** Add or update a space in the available list */
  editSpace() {
    return __async(this, arguments, function* (space = {}) {
      const ref = this._dialog.open(ParkingSpaceModalComponent, {
        data: space
      });
      const state = yield Promise.race([
        ref.afterClosed().toPromise(),
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise()
      ]);
      if (state?.reason !== "done")
        return;
      const zone = this._options.getValue().zones[0] || space.zone_id || this._org.levelsForBuilding()[0]?.id;
      const new_space = __spreadProps(__spreadValues({}, state.metadata), {
        zone,
        id: state.metadata.id || `parking-${zone}.${randomInt(999999)}`
      });
      const spaces = yield this.spaces.pipe(take(1)).toPromise();
      const idx = spaces.findIndex((_) => _.id === new_space.id);
      if (space.assigned_to && space.assigned_to !== new_space.assigned_to) {
        this._clearAssignedBooking(space);
      }
      if (space.assigned_to !== new_space.assigned_to && new_space.assigned_to) {
        const date = set(Date.now(), { hours: 1, minutes: 0, seconds: 0 });
        yield saveBooking(new Booking({
          user_id: new_space.assigned_to,
          user_email: new_space.assigned_to,
          booking_start: getUnixTime(date),
          booking_end: getUnixTime(addHours(date, 22)),
          type: "parking",
          booking_type: "parking",
          asset_id: new_space.id,
          asset_name: new_space.name,
          recurrence_type: "daily",
          recurrence_days: RecurrenceDays.MONDAY | RecurrenceDays.TUESDAY | RecurrenceDays.WEDNESDAY | RecurrenceDays.THURSDAY | RecurrenceDays.FRIDAY,
          zones: unique([
            this._org.organisation.id,
            this._org.region?.id,
            this._org.building?.id,
            new_space.zone_id || new_space.zone?.id || new_space.zone
          ]),
          extension_data: {
            asset_name: new_space.name,
            is_assigned: true
          }
        })).toPromise();
      }
      if (idx >= 0)
        spaces[idx] = new_space;
      else
        spaces.push(new_space);
      const new_space_list = spaces;
      yield updateMetadata(zone, {
        name: "parking-spaces",
        details: new_space_list,
        description: "List of available parking spaces"
      }).toPromise();
      this._change.next(Date.now());
      ref.close();
    });
  }
  /** Remove the given space from the available list */
  removeSpace(space) {
    return __async(this, null, function* () {
      const state = yield openConfirmModal({
        title: "Remove Parking Space",
        content: `Are you sure you wish to remove the parking space "${space.name}"?`,
        icon: { content: "delete" }
      }, this._dialog);
      if (state?.reason !== "done")
        return;
      state.loading("Removing parking space...");
      const zone = this._options.getValue().zones[0];
      const spaces = yield this.spaces.pipe(take(1)).toPromise();
      this._clearAssignedBooking(space);
      yield updateMetadata(zone, {
        name: "parking-spaces",
        details: spaces.filter((_) => _.id !== space.id),
        description: "List of available parking spaces"
      }).toPromise();
      state.close();
    });
  }
  /** Add or update a space in the available list */
  editUser(user) {
    return __async(this, null, function* () {
      const ref = this._dialog.open(ParkingUserModalComponent, {
        data: user
      });
      const state = yield Promise.race([
        ref.afterClosed().toPromise(),
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise()
      ]);
      if (state?.reason !== "done")
        return;
      const zone = this._org.building.id;
      const new_user = __spreadProps(__spreadValues({}, state.metadata), {
        id: state.metadata.id || `P:USR-${randomInt(999999)}`
      });
      if ("user" in new_user)
        delete new_user.user;
      const users = yield this.users.pipe(take(1)).toPromise();
      const idx = users.findIndex((_) => _.id === new_user.id);
      if (idx >= 0)
        users[idx] = new_user;
      else
        users.push(new_user);
      yield updateMetadata(zone, {
        name: "parking-users",
        details: users,
        description: "List of available parking users"
      }).toPromise();
      this._change.next(Date.now());
      ref.close();
    });
  }
  /** Remove the given space from the available list */
  removeUser(user) {
    return __async(this, null, function* () {
      const state = yield openConfirmModal({
        title: i18n("APP.CONCIERGE.PARKING_USER_REMOVE"),
        content: i18n("APP.CONCIERGE.PARKING_USER_REMOVE_MSG", {
          name: user.name
        }),
        icon: { content: "delete" }
      }, this._dialog);
      if (state?.reason !== "done")
        return;
      state.loading(i18n("APP.CONCIERGE.PARKING_USER_REMOVE_LOADING"));
      const zone = this._org.building.id;
      const users = yield this.users.pipe(take(1)).toPromise();
      yield updateMetadata(zone, {
        name: "parking-users",
        details: users.filter((_) => _.id !== user.id),
        description: "List of available parking users"
      }).toPromise().catch((e) => {
        notifyError(i18n("APP.CONCIERGE.PARKING_USER_REMOVE_ERROR", {
          error: e
        }));
        throw e;
      });
      state.close();
      notifySuccess(i18n("APP.CONCIERGE.PARKING_USER_REMOVE_SUCCESS"));
      this._change.next(Date.now());
    });
  }
  editReservation(reservation, { parent_id, user, link_id, date, space, allow_time_changes, external_user } = {}) {
    return new Promise((resolve) => __async(this, null, function* () {
      const levels = yield this.levels.pipe(take(1)).toPromise();
      const spaces = yield this.spaces.pipe(take(1)).toPromise();
      if (!space && reservation?.asset_id) {
        space = spaces.find((_) => _.id === reservation.asset_id);
      }
      const ref = this._dialog.open(ParkingBookingModalComponent, {
        data: {
          parent_id,
          booking: reservation,
          user,
          link_id,
          date,
          level: levels[0],
          space,
          allow_time_changes,
          external_user
        }
      });
      ref.afterClosed().subscribe((id) => {
        resolve(id);
        this._poll.next(Date.now());
      });
    }));
  }
  setBookingCheckinState(booking, state = true) {
    return __async(this, null, function* () {
      const promise = (booking.instance ? checkinBookingInstance(booking.id, booking.instance, state) : checkinBooking(booking.id, state)).toPromise().catch((_) => ({ state: "failed", error: _ }));
      const success = yield promise;
      success.state === "failed" ? notifyError(i18n(state ? "APP.CONCIERGE.PARKING_CHECKIN_ERROR" : "APP.CONCIERGE.PARKING_CHECKOUT_ERROR", { error: success.error })) : notifySuccess(i18n(state ? "APP.CONCIERGE.PARKING_CHECKIN_SUCCESS" : "APP.CONCIERGE.PARKING_CHECKOUT_SUCCESS"));
      if (success.state !== "failed")
        this._change.next(Date.now());
    });
  }
  approveBooking(booking) {
    return __async(this, null, function* () {
      const promise = (booking.instance ? approveBookingInstance(booking.id, booking.instance) : approveBooking(booking.id)).toPromise().catch((_) => ({ state: "failed", error: _ }));
      const success = yield promise;
      success.state === "failed" ? notifyError(i18n("APP.CONCIERGE.PARKING_APPROVE_ERROR", {
        error: success.error
      })) : notifySuccess(i18n("APP.CONCIERGE.PARKING_APPROVE_SUCCESS"));
      if (success.state !== "failed")
        this._change.next(Date.now());
    });
  }
  rejectBooking(booking) {
    return __async(this, null, function* () {
      const promise = (booking.instance ? rejectBookingInstance(booking.id, booking.instance) : rejectBooking(booking.id)).toPromise().catch((_) => ({ state: "failed", error: _ }));
      const success = yield promise;
      success.state === "failed" ? notifyError(i18n("APP.CONCIERGE.PARKING_DECLINE_ERROR", {
        error: success.error
      })) : notifySuccess(i18n("APP.CONCIERGE.PARKING_DECLINE_SUCCESS"));
      if (success.state !== "failed")
        this._change.next(Date.now());
    });
  }
  _clearAssignedBooking(space) {
    return __async(this, null, function* () {
      const booking_list = yield queryBookings({
        period_start: getUnixTime(startOfDay(Date.now())),
        period_end: getUnixTime(endOfDay(Date.now())),
        type: "parking",
        email: space.assigned_to,
        include_checked_out: true
      }).toPromise();
      const filtered = booking_list.filter((_) => _.asset_id === space.id);
      yield Promise.all(filtered.map((_) => removeBooking(_.id).toPromise()));
    });
  }
  static {
    this.\u0275fac = function ParkingStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(SettingsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParkingStateService, factory: _ParkingStateService.\u0275fac, providedIn: "root" });
  }
};

export {
  ParkingStateService
};
//# sourceMappingURL=chunk-SUHPBXV6.js.map
