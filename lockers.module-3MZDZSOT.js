import {
  SharedExploreModule
} from "./chunk-TR4MVXRB.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabsModule
} from "./chunk-BEMH4LT5.js";
import {
  BookingFormService,
  LockerGridComponent,
  LockerListFieldComponent,
  SharedBookingsModule
} from "./chunk-RNUBUWJY.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Booking,
  BookingRulesModalComponent,
  BuildingPipe,
  COMMA,
  Clipboard,
  CommonModule,
  CounterComponent,
  DateFieldComponent,
  DateOptionsComponent,
  DatePipe,
  DefaultValueAccessor,
  DurationFieldComponent,
  ENTER,
  EventEmitter,
  FormControl,
  FormControlName,
  FormFieldsModule,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatCheckboxModule,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
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
  ReactiveFormsModule,
  RecurrenceDays,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SPACE,
  SearchbarComponent,
  SelectUserModalComponent,
  SettingsService,
  SettingsToggleComponent,
  SidebarComponent,
  SimpleTableComponent,
  Subject,
  TimeFieldComponent,
  TranslatePipe,
  UIModule,
  UserSearchFieldComponent,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  addChipItem,
  addDays,
  addHours,
  approveBooking,
  checkinBooking,
  combineLatest,
  currentUser,
  debounceTime,
  distinctUntilChanged,
  endOfDay,
  first,
  getInvalidFields,
  getUnixTime,
  i18n,
  loadLockerBanks,
  loadLockers,
  map,
  notifyError,
  notifyInfo,
  notifySuccess,
  of,
  openConfirmModal,
  queryBookings,
  queryPagedBookings,
  randomInt,
  rejectBooking,
  removeBooking,
  removeChipItem,
  saveBooking,
  scan,
  set,
  shareReplay,
  showStaff,
  startOfDay,
  switchMap,
  take,
  tap,
  timer,
  unique,
  updateMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdeclareLet,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵpureFunction7,
  ɵɵpureFunction8,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZMOZKBJD.js";

// apps/concierge/src/app/lockers/locker-modal.component.ts
var _c0 = () => ({ standalone: true });
function LockerModalComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 9)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function LockerModalComponent_main_6_mat_chip_row_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 36);
    \u0275\u0275listener("removed", function LockerModalComponent_main_6_mat_chip_row_62_Template_mat_chip_row_removed_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeTag(item_r5));
    });
    \u0275\u0275elementStart(1, "div", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 38);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 2, "COMMON.ITEM_REMOVE"));
  }
}
function LockerModalComponent_main_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 10)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12);
    \u0275\u0275element(5, "input", 13);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 14);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15);
    \u0275\u0275element(14, "a-user-search-field", 16);
    \u0275\u0275elementStart(15, "button", 17);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("click", function LockerModalComponent_main_6_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ assigned_user: null, assigned_to: null, assigned_name: null }));
    });
    \u0275\u0275elementStart(17, "app-icon", 18);
    \u0275\u0275text(18, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 19);
    \u0275\u0275element(20, "settings-toggle", 20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275element(22, "settings-toggle", 21);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 22)(25, "div", 23)(26, "label", 24);
    \u0275\u0275text(27, "Start Column");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a-counter", 25);
    \u0275\u0275listener("ngModelChange", function LockerModalComponent_main_6_Template_a_counter_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ position: [$event - 1, ctx_r2.form.value.position[1]] }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 23)(30, "label", 26);
    \u0275\u0275text(31, "Start Row");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "a-counter", 25);
    \u0275\u0275listener("ngModelChange", function LockerModalComponent_main_6_Template_a_counter_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ position: [ctx_r2.form.value.position[0], $event - 1] }));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 27);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 22)(37, "div", 23)(38, "label", 24);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "a-counter", 28);
    \u0275\u0275listener("ngModelChange", function LockerModalComponent_main_6_Template_a_counter_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ size: [$event, ctx_r2.form.value.size[1]] }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 23)(43, "label", 26);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "a-counter", 28);
    \u0275\u0275listener("ngModelChange", function LockerModalComponent_main_6_Template_a_counter_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ size: [ctx_r2.form.value.size[0], $event] }));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 27);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "label", 29);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "mat-form-field", 12);
    \u0275\u0275element(54, "textarea", 30);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "label", 31);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "mat-form-field", 32)(60, "mat-chip-grid", 33, 1);
    \u0275\u0275template(62, LockerModalComponent_main_6_mat_chip_row_62_Template, 7, 4, "mat-chip-row", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "input", 35);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function LockerModalComponent_main_6_Template_input_matChipInputTokenEnd_63_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addTag($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r6 = \u0275\u0275reference(61);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 46, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 48, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 50, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 52, "APP.CONCIERGE.USER_ASSIGNED"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 54, "APP.CONCIERGE.USER_CLEAR"));
    \u0275\u0275advance(5);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(21, 56, "APP.CONCIERGE.LOCKERS_ACCESSIBLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(23, 58, "COMMON.BOOKABLE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r2.form.value.position[0] + 1)("ngModelOptions", \u0275\u0275pureFunction0(76, _c0))("min", 1)("max", 255);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.form.value.position[1] + 1)("ngModelOptions", \u0275\u0275pureFunction0(77, _c0))("min", 1)("max", ctx_r2.bank == null ? null : ctx_r2.bank.height);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-100", ctx_r2.form.get("position").invalid)("opacity-0", !ctx_r2.form.get("position").invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 60, "APP.CONCIERGE.LOCKERS_POSITION_INVALID"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 62, "COMMON.WIDTH"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.form.value.size[0])("ngModelOptions", \u0275\u0275pureFunction0(78, _c0))("min", 1)("max", 10)("render_fn", ctx_r2.render_fn);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 64, "COMMON.HEIGHT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.form.value.size[1])("ngModelOptions", \u0275\u0275pureFunction0(79, _c0))("min", 1)("max", ((ctx_r2.bank == null ? null : ctx_r2.bank.height) || 10) - ctx_r2.form.value.position[1])("render_fn", ctx_r2.render_fn);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-100", ctx_r2.form.get("size").invalid)("opacity-0", !ctx_r2.form.get("size").invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 66, "APP.CONCIERGE.LOCKERS_SIZE_INVALID"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 68, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(55, 70, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 72, "COMMON.FEATURES"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.tag_list);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(64, 74, "COMMON.FEATURES"))("matChipInputFor", chipList_r6)("matChipInputSeparatorKeyCodes", ctx_r2.separators)("matChipInputAddOnBlur", true);
  }
}
function LockerModalComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 39);
    \u0275\u0275element(1, "mat-spinner", 40);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.LOCKERS_SAVING"));
  }
}
function boxesOverlap([a_x, a_y, a_w, a_h], [b_x, b_y, b_w, b_h]) {
  return a_x < b_x + b_w && a_x + a_w > b_x && a_y < b_y + b_h && a_y + a_h > b_y;
}
function validateNoOverlap(box, check_boxes) {
  return !check_boxes.find((check) => boxesOverlap(box, check));
}
var LockerModalComponent = class _LockerModalComponent extends AsyncHandler {
  get bank() {
    return this._data.bank;
  }
  get locker() {
    return this._data.locker;
  }
  get id() {
    return this.locker?.id || "";
  }
  get tag_list() {
    return this.form.controls.features.value;
  }
  constructor(_data, _dialog_ref) {
    super();
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.event = new EventEmitter();
    this.render_fn = (v) => `${v}u`;
    this._locker_bounds = [];
    this.addTag = (e) => addChipItem(this.form.controls.features, e);
    this.removeTag = (i) => removeChipItem(this.form.controls.features, i);
    this.form = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", [Validators.required]),
      assigned_user: new FormControl(null),
      assigned_to: new FormControl(""),
      assigned_name: new FormControl(""),
      position: new FormControl([0, 0], [(e) => this.validatePosition(e)]),
      size: new FormControl([1, 1], [(e) => this.validateSize(e)]),
      notes: new FormControl(""),
      accessible: new FormControl(false),
      bookable: new FormControl(false),
      features: new FormControl([])
    });
    this._locker_bounds = this._lockerBounds();
    if (_data.locker)
      this.form.patchValue(_data.locker);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.subscription("pos_change", this.form.controls.position.valueChanges.subscribe(() => {
        this.timeout("changed", () => this.form.controls.size.patchValue(this.form.controls.size.value), 50);
      }));
      if (this.locker?.assigned_to) {
        const user = yield showStaff(this.locker.assigned_to).toPromise();
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
  validatePosition(control) {
    const [x, y] = control.value;
    return validateNoOverlap([x, y, 1, 1], this._locker_bounds) ? null : { position: true };
  }
  validateSize(control) {
    const [x, y] = this.form?.value?.position || [0, 0];
    const [w, h] = control.value;
    return validateNoOverlap([x, y, w, h], this._locker_bounds) ? null : { position: true };
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
    } else {
      delete value.assigned_to;
      delete value.assigned_name;
    }
    this._dialog_ref.disableClose = true;
    this.event.emit({ reason: "done", metadata: value });
  }
  _lockerBounds() {
    const list = [];
    for (const locker of this.bank.lockers || []) {
      if (locker.id !== this.locker?.id) {
        list.push([
          locker.position[0],
          locker.position[1],
          locker.size[0],
          locker.size[1]
        ]);
      }
    }
    return list;
  }
  static {
    this.\u0275fac = function LockerModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerModalComponent, selectors: [["locker-modal"]], outputs: { event: "event" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 9, consts: [["load_state", ""], ["chipList", ""], [1, "w-[32rem]"], [1, "sticky", "top-0", "p-2", "m-2", "w-[calc(100%-1rem)]", "border-none", "z-10", "bg-base-200", "rounded"], [1, "text-xl", "font-medium", "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col max-h-[65vh] overflow-auto", 3, "formGroup", 4, "ngIf", "ngIfElse"], [1, "flex", "items-center", "justify-end", "space-x-2", "px-4", "py-2", "border-t", "border-base-300"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", "max-h-[65vh]", "overflow-auto", 3, "formGroup"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "user"], [1, "flex", "items-center", "space-x-2", "mb-4"], ["name", "user", "formControlName", "assigned_user", 1, "flex-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "min-w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], ["className", "material-symbols-outlined"], [1, "flex", "space-x-4", "mb-4"], ["formControlName", "accessible", 1, "flex-1", 3, "name"], ["formControlName", "bookable", 1, "flex-1", 3, "name"], [1, "flex", "space-x-4", "mb-1"], [1, "flex-1"], ["for", "row"], [3, "ngModelChange", "ngModel", "ngModelOptions", "min", "max"], ["for", "column"], [1, "text-xs", "text-error", "mb-4"], [3, "ngModelChange", "ngModel", "ngModelOptions", "min", "max", "render_fn"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes", 3, "placeholder"], ["for", "features"], ["appearance", "outline", 1, "w-full"], ["name", "features", "aria-label", "Tag List"], [3, "removed", 4, "ngFor", "ngForOf"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], [1, "truncate", "max-w-md"], ["matChipRemove", ""], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["diameter", "32"]], template: function LockerModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "header", 3)(2, "h2", 4);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, LockerModalComponent_button_5_Template, 3, 0, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, LockerModalComponent_main_6_Template, 65, 80, "main", 6);
        \u0275\u0275elementStart(7, "footer", 7)(8, "button", 8);
        \u0275\u0275listener("click", function LockerModalComponent_Template_button_click_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.postForm());
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, LockerModalComponent_ng_template_11_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r7 = \u0275\u0275reference(12);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, ctx.id ? "APP.CONCIERGE.LOCKERS_EDIT" : "APP.CONCIERGE.LOCKERS_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r7);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "COMMON.SAVE"), " ");
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, MatFormField, MatError, MatInput, MatTooltip, MatProgressSpinner, MatDialogClose, MatRipple, CounterComponent, UserSearchFieldComponent, IconComponent, SettingsToggleComponent, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerModalComponent, { className: "LockerModalComponent", filePath: "apps/concierge/src/app/lockers/locker-modal.component.ts", lineNumber: 257 });
})();

// apps/concierge/src/app/lockers/locker-booking-modal.component.ts
var _c02 = () => ({ standalone: true });
function LockerBookingModalComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "a-user-search-field", 18);
    \u0275\u0275elementEnd();
  }
}
function LockerBookingModalComponent_mat_checkbox_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function LockerBookingModalComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 20)(2, "label", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 22);
    \u0275\u0275listener("ngModelChange", function LockerBookingModalComponent_div_33_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23)(9, "label", 24);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "FORM.TIME_START"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(13, _c02))("disabled", ctx_r1.form.controls.date.disabled)("use_24hr", ctx_r1.use_24hr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 11, "FORM.TIME_END"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r1.form == null ? null : (tmp_7_0 = ctx_r1.form.getRawValue()) == null ? null : tmp_7_0.date)("max", ctx_r1.max_duration)("use_24hr", ctx_r1.use_24hr);
  }
}
var LockerBookingModalComponent = class _LockerBookingModalComponent extends AsyncHandler {
  get id() {
    return this.form.value.id;
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.lockers.available_period") || this._settings.get("app.bookings.available_period") || 7));
  }
  get max_duration() {
    return this._settings.get("app.lockers.max_duration") || this._settings.get("app.bookings.max_duration") || 480;
  }
  get allow_all_day() {
    return this._settings.get("app.lockers.allow_all_day") ?? true;
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
    this._booking_form.setOptions({ type: "locker" });
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
      booking_type: "locker",
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
      this.form.patchValue({ user_id: void 0, booking_type: "locker" });
      const result = yield this._booking_form.postForm().catch((e) => {
        this.loading = false;
        notifyError(i18n("APP.CONCIERGE.LOCKERS_BOOK_ERROR", { error: e }));
        throw e;
      });
      notifySuccess(i18n("APP.CONCIERGE.LOCKERS_BOOK_SUCCESS"));
      this.form.get("date").enable();
      this.form.get("duration").enable();
      this.form.controls.user.disable();
      this.form.controls.user_name.disable();
      this.form.controls.user_email.disable();
      this._dialog_ref.close(result.id);
    });
  }
  static {
    this.\u0275fac = function LockerBookingModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerBookingModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerBookingModalComponent, selectors: [["locker-booking-modal"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 38, vars: 36, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], ["class", "flex items-center space-x-2 mb-4", 4, "ngIf"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1"], ["for", "user-name"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "user-name", "formControlName", "user_name", 3, "placeholder"], ["for", "email"], ["matInput", "", "name", "email", "formControlName", "user_email", 3, "placeholder"], [1, "relative"], ["for", "date"], ["formControlName", "date"], ["formControlName", "all_day", "class", "absolute -top-2 right-0", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["for", "locker"], ["name", "locker", "formControlName", "resources", 1, "mb-2"], [1, "flex", "items-center", "space-x-2", "mb-4"], ["name", "user", "formControlName", "user", 1, "flex-1"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], [1, "flex-1", "w-1/3"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "use_24hr"], [1, "flex-1", "w-1/3", "relative"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "use_24hr"]], template: function LockerBookingModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275listener("confirm", function LockerBookingModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.postForm();
        });
        \u0275\u0275elementStart(4, "form", 1);
        \u0275\u0275template(5, LockerBookingModalComponent_div_5_Template, 2, 0, "div", 2);
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
        \u0275\u0275template(32, LockerBookingModalComponent_mat_checkbox_32_Template, 3, 3, "mat-checkbox", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, LockerBookingModalComponent_div_33_Template, 15, 14, "div", 14);
        \u0275\u0275elementStart(34, "label", 15);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "locker-list-field", 16);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 14, ctx.id ? "APP.CONCIERGE.LOCKERS_BOOK_EDIT" : "APP.CONCIERGE.LOCKERS_BOOK_NEW"))("loading", \u0275\u0275pipeBind1(2, 16, ctx.loading) ? \u0275\u0275pipeBind1(3, 18, "APP.CONCIERGE.LOCKERS_BOOK_SAVING") : "");
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.user);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 20, "FORM.NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 22, "FORM.NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 24, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 26, "FORM.EMAIL"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 28, "FORM.EMAIL"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 30, "FORM.EMAIL_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 32, "FORM.DATE"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.allow_all_day && !ctx.form.controls.duration.disabled);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.form.value.all_day);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 34, "RESOURCE.LOCKER"));
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, MatFormField, MatError, MatInput, MatCheckbox, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, UserSearchFieldComponent, FullscreenModalShellComponent, LockerListFieldComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerBookingModalComponent, { className: "LockerBookingModalComponent", filePath: "apps/concierge/src/app/lockers/locker-booking-modal.component.ts", lineNumber: 133 });
})();

// apps/concierge/src/app/lockers/locker-bank-modal.component.ts
var _c03 = () => ({ standalone: true });
function LockerBankModalComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 9)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function LockerBankModalComponent_main_6_mat_option_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const level_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_6_0 = \u0275\u0275pipeBind1(2, 1, level_r4.parent_id)) == null ? null : tmp_6_0.display_name, " ");
  }
}
function LockerBankModalComponent_main_6_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 29)(1, "div", 30);
    \u0275\u0275template(2, LockerBankModalComponent_main_6_mat_option_6_div_2_Template, 5, 3, "div", 31);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", level_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r4.display_name || level_r4.name, " ");
  }
}
function LockerBankModalComponent_main_6_mat_chip_row_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 34);
    \u0275\u0275listener("removed", function LockerBankModalComponent_main_6_mat_chip_row_45_Template_mat_chip_row_removed_0_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeTag(item_r6));
    });
    \u0275\u0275elementStart(1, "div", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 36);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 2, "COMMON.ITEM_REMOVE"));
  }
}
function LockerBankModalComponent_main_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 10)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12)(5, "mat-select", 13);
    \u0275\u0275listener("ngModelChange", function LockerBankModalComponent_main_6_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ zones: [$event] }));
    });
    \u0275\u0275template(6, LockerBankModalComponent_main_6_mat_option_6_Template, 5, 3, "mat-option", 14);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 15)(9, "div", 16)(10, "label", 11);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 17);
    \u0275\u0275element(14, "input", 18);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "mat-error");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 16)(20, "label", 19);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-form-field", 17);
    \u0275\u0275element(24, "input", 20);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementStart(26, "mat-error");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "label", 21);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "a-counter", 22);
    \u0275\u0275elementStart(33, "label", 23);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-form-field", 17);
    \u0275\u0275element(37, "textarea", 24);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "label", 25);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-form-field", 12)(43, "mat-chip-grid", 26, 1);
    \u0275\u0275template(45, LockerBankModalComponent_main_6_mat_chip_row_45_Template, 7, 4, "mat-chip-row", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 28);
    \u0275\u0275listener("matChipInputTokenEnd", function LockerBankModalComponent_main_6_Template_input_matChipInputTokenEnd_46_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addTag($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r7 = \u0275\u0275reference(44);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 22, "RESOURCE.LEVEL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r2.form.value.zones[0])("ngModelOptions", \u0275\u0275pureFunction0(46, _c03));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(7, 24, ctx_r2.levels));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 26, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 28, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 30, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 32, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(25, 34, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 36, "EXPLORE.MAP_ID_REQUIRED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 38, "COMMON.HEIGHT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 1)("max", 16)("render_fn", ctx_r2.render_fn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 40, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(38, 42, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 44, "COMMON.TAGS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.tag_list);
    \u0275\u0275advance();
    \u0275\u0275property("matChipInputFor", chipList_r7)("matChipInputSeparatorKeyCodes", ctx_r2.separators)("matChipInputAddOnBlur", true);
  }
}
function LockerBankModalComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 37);
    \u0275\u0275element(1, "mat-spinner", 38);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.LOCKERS_BANK_SAVING"));
  }
}
var LockerBankModalComponent = class _LockerBankModalComponent {
  get tag_list() {
    return this.form.controls.tags.value;
  }
  get id() {
    return this._data?.id || "";
  }
  constructor(_data, _dialog_ref, _org, _settings) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this._org = _org;
    this._settings = _settings;
    this.event = new EventEmitter();
    this.render_fn = (v) => `${v}u`;
    this.separators = [ENTER, COMMA, SPACE];
    this.levels = this._org.level_list.pipe(map((_) => {
      if (!this._settings.get("app.use_region")) {
        const blds = this._org.buildingsForRegion();
        const bld_ids = blds.map((bld) => bld.id);
        const list = _.filter((lvl) => bld_ids.includes(lvl.parent_id));
        list.map((lvl) => __spreadProps(__spreadValues({}, lvl), {
          display_name: `${blds.find((_2) => _2.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
        }));
        if (!this.form.value.zones?.length) {
          this.form.patchValue({ zones: [list[0].id] });
        }
        return list;
      }
      return _.filter((lvl) => lvl.parent_id === this._org.building.id);
    }));
    this.addTag = (e) => addChipItem(this.form.controls.tags, e);
    this.removeTag = (i) => removeChipItem(this.form.controls.tags, i);
    this.form = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", [Validators.required]),
      map_id: new FormControl("", [Validators.required]),
      notes: new FormControl(""),
      height: new FormControl(3),
      zones: new FormControl([]),
      tags: new FormControl([])
    });
    if (_data)
      this.form.patchValue(_data);
  }
  postForm() {
    if (!this.form.valid)
      return;
    this.loading = true;
    const value = __spreadValues({}, this.form.getRawValue());
    const level = this._org.levelWithID(value.zones);
    value.zones = unique([
      level.id,
      this._org.organisation.id,
      this._org.region.id,
      level.parent_id
    ].filter((_) => _));
    this._dialog_ref.disableClose = true;
    this.event.emit({ reason: "done", metadata: value });
  }
  static {
    this.\u0275fac = function LockerBankModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerBankModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerBankModalComponent, selectors: [["locker-bank-modal"]], outputs: { event: "event" }, standalone: false, decls: 13, vars: 9, consts: [["load_state", ""], ["chipList", ""], [1, "w-[32rem]"], [1, "sticky", "top-0", "p-2", "m-2", "w-[calc(100%-1rem)]", "border-none", "z-10", "bg-base-200", "rounded"], [1, "text-xl", "font-medium", "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col max-h-[65vh] overflow-auto", 3, "formGroup", 4, "ngIf", "ngIfElse"], [1, "flex", "items-center", "justify-end", "space-x-2", "px-4", "py-2", "border-t", "border-base-300"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", "max-h-[65vh]", "overflow-auto", 3, "formGroup"], ["for", "name"], ["appearance", "outline", 1, "w-full"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "space-x-4"], [1, "flex-1", "flex", "flex-col"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "map-id"], ["matInput", "", "name", "map-id", "formControlName", "map_id", 3, "placeholder"], ["for", "row"], ["formControlName", "height", 1, "mb-4", 3, "min", "max", "render_fn"], ["for", "notes"], ["matInput", "", "name", "notes", "formControlName", "notes", 3, "placeholder"], ["for", "tags"], ["name", "tags", "aria-label", "Tag List"], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Tags...", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "removed"], [1, "truncate", "max-w-md"], ["matChipRemove", ""], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["diameter", "32"]], template: function LockerBankModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "header", 3)(2, "h2", 4);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, LockerBankModalComponent_button_5_Template, 3, 0, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, LockerBankModalComponent_main_6_Template, 47, 47, "main", 6);
        \u0275\u0275elementStart(7, "footer", 7)(8, "button", 8);
        \u0275\u0275listener("click", function LockerBankModalComponent_Template_button_click_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.postForm());
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, LockerBankModalComponent_ng_template_11_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r8 = \u0275\u0275reference(12);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, ctx.id ? "APP.CONCIERGE.LOCKERS_BANK_EDIT" : "APP.CONCIERGE.LOCKERS_BANK_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r8);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "COMMON.SAVE"), " ");
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, MatFormField, MatError, MatInput, MatSelect, MatOption, MatProgressSpinner, MatDialogClose, MatRipple, CounterComponent, IconComponent, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, AsyncPipe, BuildingPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerBankModalComponent, { className: "LockerBankModalComponent", filePath: "apps/concierge/src/app/lockers/locker-bank-modal.component.ts", lineNumber: 163 });
})();

// apps/concierge/src/app/lockers/view-locker-bank-modal.component.ts
var ViewLockerBankModalComponent = class _ViewLockerBankModalComponent {
  constructor(_data) {
    this._data = _data;
    this.bank = this._data.bank;
  }
  static {
    this.\u0275fac = function ViewLockerBankModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ViewLockerBankModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewLockerBankModalComponent, selectors: [["view-locker-bank-modal"]], standalone: false, decls: 8, vars: 2, consts: [[1, "sticky", "top-0", "px-4", "py-2", "mx-4", "mt-4", "mb-2", "w-[calc(100%-2rem)]", "border-none", "z-10", "bg-base-200", "rounded"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-[65vw]", "h-[65vh]", "px-2", "pb-2", "overflow-auto"], [3, "bank"]], template: function ViewLockerBankModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2)(4, "app-icon");
        \u0275\u0275text(5, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "main", 3);
        \u0275\u0275element(7, "locker-grid", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" View Locker Bank - ", ctx.bank.name, " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("bank", ctx.bank);
      }
    }, dependencies: [MatDialogClose, MatRipple, IconComponent, LockerGridComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewLockerBankModalComponent, { className: "ViewLockerBankModalComponent", filePath: "apps/concierge/src/app/lockers/view-locker-bank-modal.component.ts", lineNumber: 24 });
})();

// apps/concierge/src/app/lockers/locker-state.service.ts
var addToken = (l, t) => l.replace(t, "") + t;
var removeToken = (l, t) => l.replace(t, "");
var LockerStateService = class _LockerStateService extends AsyncHandler {
  nextPage() {
    this._call_next_page.next(`NEXT_${Date.now()}`);
  }
  constructor(_org, _dialog, _settings) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._search = new BehaviorSubject("");
    this._filters = new BehaviorSubject({});
    this._locker_bookings = [];
    this._loading = new BehaviorSubject("");
    this._change = new BehaviorSubject(0);
    this.levels = this._org.level_list.pipe(map((_) => {
      if (!this._settings.get("app.use_region")) {
        const blds = this._org.buildingsForRegion();
        const bld_ids = blds.map((bld) => bld.id);
        const list = _.filter((lvl) => bld_ids.includes(lvl.parent_id));
        list.map((lvl) => __spreadProps(__spreadValues({}, lvl), {
          display_name: `${blds.find((_2) => _2.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
        }));
        return list;
      }
      return _.filter((lvl) => lvl.parent_id === this._org.building.id);
    }));
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.lockers_banks$ = loadLockerBanks(this._org, combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]), () => this._settings.get("app.use_region"));
    this.lockers$ = loadLockers(this._org, combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]), this.lockers_banks$, () => this._settings.get("app.use_region"));
    this.filtered_lockers = combineLatest([
      this.filters,
      this._search,
      this.lockers$
    ]).pipe(map(([{ zones }, search, list]) => {
      search = (search || "").toLowerCase();
      return list.filter((item) => {
        if (!zones?.length && !search)
          return;
        let match = true;
        if (search) {
          match = item.name.toLowerCase().includes(search) || item.bank.name.toLowerCase().includes(search);
        }
        if (zones?.length) {
          match = !!zones.find((zone) => (item.zones || item.bank.zones || []).includes(zone));
        }
        return match;
      });
    }));
    this.filtered_banks = combineLatest([
      this.filters,
      this._search,
      this.lockers_banks$
    ]).pipe(map(([{ zones }, search, list]) => {
      search = (search || "").toLowerCase();
      return list.filter((item) => {
        if (!zones?.length && !search)
          return;
        let match = true;
        if (search) {
          match = item.name.toLowerCase().includes(search);
        }
        if (zones?.length) {
          match = !!zones.find((zone) => (item.zones || []).includes(zone));
        }
        return match;
      });
    }));
    this._next_page = new Subject();
    this._call_next_page = new Subject();
    this._all_zones_keys = ["All", -1, "-1"];
    this.setup_paging = combineLatest([
      this._filters,
      this._org.initialised
    ]).pipe(debounceTime(500), tap(([filters, loaded]) => {
      if (!loaded)
        return;
      const date = filters.date || Date.now();
      const zones = !filters.zones || filters.zones.some((z) => this._all_zones_keys.includes(z)) ? this._settings.get("app.use_region") ? [this._org.region.id] : [this._org.building.id] : filters.zones;
      this._next_page.next(() => queryPagedBookings({
        period_start: getUnixTime(startOfDay(date)),
        period_end: getUnixTime(endOfDay(date)),
        type: "locker",
        zones: zones.join(","),
        include_checked_out: true,
        limit: 1e3
      }));
      this._call_next_page.next(`RESET_${Date.now()}`);
    }));
    this.paged_bookings = combineLatest([
      this._next_page,
      this._call_next_page
    ]).pipe(distinctUntilChanged((a, b) => a[1] === b[1]), switchMap(([next_page, action]) => {
      this._loading.next(addToken(this._loading.getValue(), "[BOOKINGS]"));
      if (!next_page) {
        return of({
          data: [],
          total: 0,
          next: null,
          reset: action.includes("RESET")
        });
      }
      if (action.includes("RESET")) {
        return next_page().pipe(map((data) => __spreadProps(__spreadValues({}, data), { reset: true })));
      }
      return next_page().pipe(map((data) => __spreadProps(__spreadValues({}, data), { reset: false })));
    }), scan((acc, { data, total, next, reset }) => {
      const list = data;
      this._next_page.next(next);
      if (reset)
        return { list, total, has_next: !!next };
      return {
        list: [...acc.list, ...list],
        has_next: !!next,
        total
      };
    }, { list: [], total: 0, has_next: false }), tap(() => this.timeout("stop-loading", () => this._loading.next(removeToken(this._loading.getValue(), "[BOOKINGS]")), 1e3)), shareReplay(1));
    this.has_more_pages = this.paged_bookings.pipe(map((_) => _.has_next));
    this.bookings = this.paged_bookings.pipe(map((i) => i.list));
    this.filtered_bookings = combineLatest([
      this.bookings,
      this._search
    ]).pipe(map(([l, search]) => l.filter((_) => _.title.toLowerCase().includes(search.toLowerCase()) || _.user_name.toLowerCase().includes(search.toLowerCase()) || _.user_email.toLowerCase().includes(search.toLowerCase()) || _.description.toLowerCase().includes(search.toLowerCase()) || _.asset_name.toLowerCase().includes(search.toLowerCase()))));
    this.setup_paging.subscribe();
  }
  setSearch(value) {
    this._search.next(value);
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
    this._loading.next(addToken(this._loading.getValue(), "[BOOKINGS]"));
    this.timeout("poll", () => this.setFilters(this._filters.getValue()));
  }
  viewLockerBank(bank) {
    this._dialog.open(ViewLockerBankModalComponent, {
      data: { bank }
    });
  }
  allocateLocker(locker, notify = true) {
    return __async(this, null, function* () {
      const mod = this._org.module("lockers", "Lockers");
      if (!mod)
        return notifyError(i18n("APP.CONCIERGE.LOCKERS_NO_DRIVER"));
      yield mod.execute("locker_allocate_me", [locker.bank_id, locker.id]).catch((e) => {
        notifyError(e);
        throw e;
      });
      if (notify)
        notifySuccess(`Successfully allocated locker "${locker.name}"`);
    });
  }
  get has_driver() {
    return !!this._org.binding("lockers");
  }
  shareLocker(locker, user) {
    return __async(this, null, function* () {
      const mod = this._org.module("lockers", "Lockers");
      if (!mod)
        return notifyError(i18n("APP.CONCIERGE.LOCKERS_NO_DRIVER"));
      if (!user) {
        const ref = this._dialog.open(SelectUserModalComponent, {});
        const value = yield ref.afterClosed().toPromise();
        if (!value)
          return;
        user = value;
      }
      console.log("User:", user);
      yield this.allocateLocker(locker, false);
      yield mod.execute("locker_share_mine", [locker.bank_id, locker.id, user.id]).catch((e) => {
        console.log("err", e);
        notifyError(i18n(`APP.CONCIERGE.LOCKERS_SHARE_ERROR`, {
          error: `${e?.msg || e}`
        }));
        throw e;
      });
      notifySuccess(i18n(`APP.CONCIERGE.LOCKERS_SHARE_SUCCESS`, {
        name: locker.name,
        user: user.name
      }));
    });
  }
  releaseLocker(locker, confirm = false) {
    return __async(this, null, function* () {
      const mod = this._org.module("lockers", "Lockers");
      if (!mod)
        return notifyError(i18n("APP.CONCIERGE.LOCKERS_NO_DRIVER"));
      let close;
      if (confirm) {
        const result = yield openConfirmModal({
          title: i18n("APP.CONCIERGE.LOCKERS_RELEASE_TITLE"),
          content: i18n("APP.CONCIERGE.LOCKERS_RELEASE_MSG"),
          icon: { content: "event_busy" }
        }, this._dialog);
        if (result.reason !== "done")
          return;
        result.loading(i18n("APP.CONCIERGE.LOCKERS_RELEASE_LOADING"));
        close = result.close;
      }
      yield mod.execute("locker_release", [locker.bank_id, locker.id]).catch((e) => {
        notifyError(i18n("APP.CONCIERGE.LOCKERS_RELEASE_ERROR", { error: e }));
        if (close)
          close();
        throw e;
      });
      notifySuccess(i18n(`APP.CONCIERGE.LOCKERS_RELEASE_SUCCESS`, {
        name: locker.name
      }));
      if (close)
        close();
    });
  }
  openLocker(locker, confirm = false) {
    return __async(this, null, function* () {
      const mod = this._org.module("lockers", "Lockers");
      if (!mod)
        return notifyError(i18n("APP.CONCIERGE.LOCKERS_NO_DRIVER"));
      let close;
      if (confirm) {
        const result = yield openConfirmModal({
          title: i18n("APP.CONCIERGE.LOCKERS_OPEN_TITLE"),
          content: i18n("APP.CONCIERGE.LOCKERS_OPEN_MSG"),
          icon: { content: "event_busy" }
        }, this._dialog);
        if (result.reason !== "done")
          return;
        result.loading(i18n("APP.CONCIERGE.LOCKERS_OPEN_LOADING"));
        close = result.close;
      }
      yield mod.execute("locker_unlock_mine", [locker.bank_id, locker.id]).catch((e) => {
        notifyError(i18n(`APP.CONCIERGE.LOCKERS_OPEN_ERROR`, { error: e }));
        throw e;
      });
      notifySuccess(i18n(`APP.CONCIERGE.LOCKERS_OPEN_SUCCESS`));
      if (close)
        close();
    });
  }
  /** Add or update a space in the available list */
  editLockerBank() {
    return __async(this, arguments, function* (bank = {}) {
      const ref = this._dialog.open(LockerBankModalComponent, {
        data: bank
      });
      const state = yield Promise.race([
        ref.afterClosed().toPromise(),
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise()
      ]);
      if (state?.reason !== "done")
        return;
      const zone = this._org.building.id;
      const new_bank = __spreadProps(__spreadValues({}, state.metadata), {
        zone,
        id: bank.id || `locker-bank-${randomInt(999999)}`
      });
      const banks = yield this.lockers_banks$.pipe(take(1)).toPromise();
      const idx = banks.findIndex((_) => _.id === new_bank.id);
      if (idx >= 0)
        banks[idx] = new_bank;
      else
        banks.push(new_bank);
      const new_locker_list = banks.map((_) => __spreadValues({}, _));
      for (const bank2 of new_locker_list) {
        delete bank2.lockers;
      }
      yield updateMetadata(zone, {
        name: "locker_banks",
        details: new_locker_list,
        description: "List of available locker banks"
      }).toPromise();
      this._change.next(Date.now());
      ref.close();
    });
  }
  /** Add or update a space in the available list */
  editLocker(_0) {
    return __async(this, arguments, function* (bank, locker = {}) {
      const ref = this._dialog.open(LockerModalComponent, {
        data: { locker, bank }
      });
      const state = yield Promise.race([
        ref.afterClosed().toPromise(),
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise()
      ]);
      if (state?.reason !== "done")
        return;
      const zone = this._org.building.id;
      const new_locker = __spreadProps(__spreadValues({}, state.metadata), {
        bank_id: bank.id,
        zone,
        id: locker.id || `locker-${zone}.${randomInt(999999)}`
      });
      const lockers = yield this.lockers$.pipe(take(1)).toPromise();
      const idx = lockers.findIndex((_) => _.id === new_locker.id);
      if (locker.assigned_to && locker.assigned_to !== new_locker.assigned_to) {
        this._clearAssignedBooking(locker);
      }
      if (locker.assigned_to !== new_locker.assigned_to && new_locker.assigned_to) {
        const date = set(Date.now(), { hours: 2, minutes: 0, seconds: 0 });
        yield saveBooking(new Booking({
          user_id: new_locker.assigned_to,
          user_email: new_locker.assigned_to,
          user_name: new_locker?.assigned_name,
          booking_start: getUnixTime(date),
          booking_end: getUnixTime(addHours(date, 20)),
          type: "locker",
          booking_type: "locker",
          asset_id: new_locker.id,
          asset_name: new_locker.name,
          recurrence_type: "daily",
          recurrence_days: RecurrenceDays.MONDAY | RecurrenceDays.TUESDAY | RecurrenceDays.WEDNESDAY | RecurrenceDays.THURSDAY | RecurrenceDays.FRIDAY,
          zones: unique([
            this._org.organisation.id,
            this._org.region?.id,
            this._org.building?.id,
            new_locker.zone?.id,
            new_locker.zone,
            ...bank?.zones || []
          ]).filter((_) => !!_),
          tags: bank?.tags || [],
          extension_data: {
            asset_name: new_locker.name,
            tags: bank.tags || []
          }
        })).toPromise();
      }
      if (idx >= 0)
        lockers[idx] = new_locker;
      else
        lockers.push(new_locker);
      const new_locker_list = lockers;
      for (const locker2 of new_locker_list) {
        if (locker2.bank)
          delete locker2.bank;
        if (locker2.zone)
          delete locker2.zone;
      }
      yield updateMetadata(zone, {
        name: "lockers",
        details: new_locker_list,
        description: "List of available lockers"
      }).toPromise();
      this._change.next(Date.now());
      ref.close();
    });
  }
  removeLockerBank(bank) {
    return __async(this, null, function* () {
      const state = yield openConfirmModal({
        title: i18n("APP.CONCIERGE.LOCKERS_BANK_REMOVE_TITLE"),
        content: i18n("APP.CONCIERGE.LOCKERS_BANK_REMOVE_TITLE", {
          name: bank.name
        }),
        icon: { content: "delete" }
      }, this._dialog);
      if (state?.reason !== "done")
        return;
      state.loading(i18n("APP.CONCIERGE.LOCKERS_BANK_REMOVE_LOADING"));
      const zone = this._org.building.id;
      const banks = yield this.lockers_banks$.pipe(take(1)).toPromise();
      yield updateMetadata(zone, {
        name: "locker_banks",
        details: banks.filter((_) => _.id !== bank.id),
        description: "List of available locker banks"
      }).toPromise().catch((e) => {
        notifyError(i18n("APP.CONCIERGE.LOCKERS_BANK_REMOVE_ERROR", {
          error: e
        }));
        throw e;
      });
      state.close();
      notifySuccess(i18n("APP.CONCIERGE.LOCKERS_BANK_REMOVE_SUCCESS"));
      this._change.next(Date.now());
    });
  }
  removeLocker(locker) {
    return __async(this, null, function* () {
      const state = yield openConfirmModal({
        title: i18n("APP.CONCIERGE.LOCKERS_REMOVE_TITLE"),
        content: i18n("APP.CONCIERGE.LOCKERS_REMOVE_TITLE", {
          name: locker.name
        }),
        icon: { content: "delete" }
      }, this._dialog);
      if (state?.reason !== "done")
        return;
      state.loading(i18n("APP.CONCIERGE.LOCKERS_REMOVE_LOADING"));
      const zone = this._org.building.id;
      const lockers = yield this.lockers$.pipe(take(1)).toPromise();
      this._clearAssignedBooking(locker);
      yield updateMetadata(zone, {
        name: "lockers",
        details: lockers.filter((_) => _.id !== locker.id),
        description: "List of available lockers"
      }).toPromise().catch((e) => {
        notifyError(i18n("APP.CONCIERGE.LOCKERS_REMOVE_ERROR", { error: e }));
        throw e;
      });
      state.close();
      notifySuccess(i18n("APP.CONCIERGE.LOCKERS_REMOVE_SUCCESS"));
      this._change.next(Date.now());
    });
  }
  editBooking(_0) {
    return __async(this, arguments, function* (booking, { parent_id, user, link_id, date, space, allow_time_changes, external_user } = {}) {
      const levels = yield this.levels.pipe(take(1)).toPromise();
      const spaces = yield this.lockers$.pipe(take(1)).toPromise();
      if (!space && booking?.asset_id) {
        space = spaces.find((_) => _.id === booking.asset_id);
      }
      const ref = this._dialog.open(LockerBookingModalComponent, {
        data: {
          parent_id,
          booking,
          user,
          link_id,
          date,
          level: levels[0],
          space,
          allow_time_changes,
          external_user
        }
      });
      const id = yield ref.afterClosed().toPromise();
      if (id)
        this._change.next(Date.now());
      return id;
    });
  }
  checkinLocker(locker, state = true) {
    return __async(this, null, function* () {
      const status = yield checkinBooking(locker.id, state ?? true).toPromise().catch((_) => ({ failed: true, error: _ }));
      if (status.failed) {
        notifyError(i18n(state ? "BOOKINGS.CHECK_IN_ERROR" : "BOOKINGS_CHECK_OUT_ERROR"));
        throw status.error;
      }
      notifySuccess(i18n(state ? "BOOKINGS.CHECK_IN_SUCCESS" : "BOOKINGS_CHECK_OUT_SUCCESS"));
    });
  }
  approveLocker(locker) {
    return __async(this, null, function* () {
      const success = yield approveBooking(locker.id).toPromise().catch((_) => "failed");
      if (success === "failed") {
        return notifyError(i18n("APP.CONCIERGE.LOCKERS_APPROVE_ERROR"));
      }
      notifySuccess(i18n("APP.CONCIERGE.LOCKERS_APPROVE_SUCCESS", {
        name: locker.user_name
      }));
      locker.approved = true;
      locker.rejected = false;
    });
  }
  rejectLocker(locker) {
    return __async(this, null, function* () {
      const success = yield rejectBooking(locker.id).toPromise().catch((_) => "failed");
      if (success === "failed") {
        return notifyError(i18n("APP.CONCIERGE.LOCKERS_REJECT_ERROR"));
      }
      notifySuccess(i18n("APP.CONCIERGE.LOCKERS_REJECT_SUCCESS", {
        name: locker.user_name
      }));
      locker.approved = false;
      locker.rejected = true;
    });
  }
  giveAccess(locker) {
    return __async(this, null, function* () {
      const success = yield saveBooking(new Booking(__spreadProps(__spreadValues({}, locker), { access: true }))).toPromise().catch((_) => "failed");
      if (success === "failed")
        return notifyError("Error giving building access booking host");
      notifySuccess(`Successfully gave building access to ${locker.user_name} for locker booking.`);
      this._locker_bookings = [...this._locker_bookings, success];
    });
  }
  rejectAllLockers() {
    return __async(this, null, function* () {
      const list = this._locker_bookings || [];
      if (list.length <= 0)
        return notifyInfo("No lockers to reject for the selected date");
      const resp = yield openConfirmModal({
        title: i18n("APP.CONCIERGE.LOCKERS_REJECT_ALL_TITLE"),
        content: i18n("APP.CONCIERGE.LOCKERS_REJECT_ALL_MSG"),
        icon: {
          type: "icon",
          class: "material-icons",
          content: "delete"
        }
      }, this._dialog);
      if (resp.reason !== "done")
        return;
      resp.loading(i18n("APP.CONCIERGE.LOCKERS_REJECT_ALL_LOADING"));
      yield Promise.all(list.map((locker) => rejectBooking(locker.id).toPromise())).catch((e) => {
        notifyError(i18n("APP.CONCIERGE.LOCKERS_REJECT_ALL_ERROR"));
        throw e;
      });
      notifySuccess(i18n("APP.CONCIERGE.LOCKERS_REJECT_ALL_SUCCESS"));
      resp.close();
    });
  }
  _clearAssignedBooking(locker) {
    return __async(this, null, function* () {
      const booking_list = yield queryBookings({
        period_start: getUnixTime(startOfDay(Date.now())),
        period_end: getUnixTime(endOfDay(Date.now())),
        type: "locker",
        email: locker.assigned_to,
        include_checked_out: true
      }).toPromise();
      const filtered = booking_list.filter((_) => _.asset_id === locker.id);
      yield Promise.all(filtered.map((_) => removeBooking(_.id).toPromise()));
    });
  }
  static {
    this.\u0275fac = function LockerStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(SettingsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LockerStateService, factory: _LockerStateService.\u0275fac, providedIn: "root" });
  }
};

// apps/concierge/src/app/lockers/locker-topbar.component.ts
function LockersTopbarComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function LockersTopbarComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newLockerBank());
    });
    \u0275\u0275elementStart(2, "div", 15);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-icon", 16);
    \u0275\u0275text(6, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !((tmp_1_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.options)) == null ? null : tmp_1_0.zones == null ? null : tmp_1_0.zones.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "APP.CONCIERGE.LOCKERS_BANK_ADD"), " ");
  }
}
function LockersTopbarComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function LockersTopbarComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newBooking());
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-icon", 16);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.NEW_BOOKING"), " ");
  }
}
function LockersTopbarComponent_mat_option_16_div_2_Template(rf, ctx) {
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
    const level_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = \u0275\u0275pipeBind1(2, 1, level_r4.parent_id)) == null ? null : tmp_3_0.display_name, " ");
  }
}
function LockersTopbarComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19)(1, "div", 20);
    \u0275\u0275template(2, LockersTopbarComponent_mat_option_16_div_2_Template, 5, 3, "div", 21);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(level_r4.display_name || level_r4.name);
  }
}
function LockersTopbarComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function LockersTopbarComponent_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageRestrictions());
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "lock_open");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.LOCKERS_BOOKING_RULES"));
  }
}
function LockersTopbarComponent_date_options_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 25);
    \u0275\u0275listener("dateChange", function LockersTopbarComponent_date_options_20_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
  }
}
var LockersTopbarComponent = class _LockersTopbarComponent extends AsyncHandler {
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "locker" }
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
    this.options = this._state.filters;
    this.setDate = (d) => this._state.setFilters({ date: d });
    this.setSearch = (str) => this._state.setSearch(str);
    this.newLockerBank = () => this._state.editLockerBank();
    this.updateZones = (z) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setFilters({ zones: z });
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      yield timer(1e3).toPromise();
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
        if (params.has("zone_ids") && this._router.url.includes("locker")) {
          const zones = params.get("zone_ids").split(",");
          if (zones.length) {
            const level = this._org.levelWithID(zones);
            this.zones = zones;
            if (!level)
              return;
            this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
            this._state.setFilters({ zones });
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
  newBooking() {
    return __async(this, null, function* () {
      const { date } = yield this.options.pipe(take(1)).toPromise();
      this._state.editBooking(void 0, {
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
    this.\u0275fac = function LockersTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockersTopbarComponent)(\u0275\u0275directiveInject(LockerStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersTopbarComponent, selectors: [["lockers-topbar"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 22, consts: [[1, "flex", "items-center", "w-full", "py-4", "px-8", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-px"], [1, "mr-2", 3, "modelChange", "model"], [3, "matTooltip"], ["btn", "", "matRipple", "", "class", "space-x-2 w-40", 3, "disabled", "click", 4, "ngIf"], ["btn", "", "matRipple", "", "class", "space-x-2 w-48", 3, "click", 4, "ngIf"], [1, "flex", "items-center", "bg-base-100", "px-8", "mb-2", "h-14"], ["appearance", "outline", 1, "w-56", "no-subscript"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex-1", "w-0"], ["icon", "", "matRipple", "", "class", "bg-secondary text-secondary-content rounded h-12 w-12", 3, "matTooltip", "click", 4, "ngIf"], [3, "dateChange", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "space-x-2", "w-40", 3, "click", "disabled"], [1, "pl-4"], [1, "text-2xl"], ["btn", "", "matRipple", "", 1, "space-x-2", "w-48", 3, "click"], [1, "pl-2"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click", "matTooltip"], [3, "dateChange"]], template: function LockersTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 2);
        \u0275\u0275elementStart(5, "searchbar", 3);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275listener("modelChange", function LockersTopbarComponent_Template_searchbar_modelChange_5_listener($event) {
          return ctx.setSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275template(10, LockersTopbarComponent_button_10_Template, 7, 6, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, LockersTopbarComponent_button_11_Template, 6, 3, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 7)(13, "mat-form-field", 8)(14, "mat-select", 9);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function LockersTopbarComponent_Template_mat_select_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function LockersTopbarComponent_Template_mat_select_ngModelChange_14_listener($event) {
          return ctx.updateZones($event);
        });
        \u0275\u0275template(16, LockersTopbarComponent_mat_option_16_Template, 5, 3, "mat-option", 10);
        \u0275\u0275pipe(17, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(18, "div", 11);
        \u0275\u0275template(19, LockersTopbarComponent_button_19_Template, 4, 3, "button", 12)(20, LockersTopbarComponent_date_options_20_Template, 1, 0, "date-options", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 10, ctx.path !== "events" ? "APP.CONCIERGE.LOCKERS_HEADER" : "APP.CONCIERGE.LOCKERS_BOOK_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("model", (tmp_1_0 = \u0275\u0275pipeBind1(6, 12, ctx.options)) == null ? null : tmp_1_0.search);
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(9, 16, ((tmp_2_0 = \u0275\u0275pipeBind1(8, 14, ctx.options)) == null ? null : tmp_2_0.zones == null ? null : tmp_2_0.zones.length) ? "" : "APP.CONCIERGE.LOCKERS_LEVEL_SELECT"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.path === "manage");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.path === "events");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.zones);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 18, "COMMON.LEVEL_ALL"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(17, 20, ctx.levels));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.path !== "events" && ctx.path !== "map");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.path === "events" || ctx.path === "map");
      }
    }, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, MatFormField, MatSelect, MatOption, MatTooltip, MatRipple, IconComponent, AsyncPipe, BuildingPipe, TranslatePipe], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=locker-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersTopbarComponent, { className: "LockersTopbarComponent", filePath: "apps/concierge/src/app/lockers/locker-topbar.component.ts", lineNumber: 120 });
})();

// apps/concierge/src/app/lockers/lockers.component.ts
var _c04 = ["app-lockers", ""];
var _c1 = () => ["/book", "lockers", "events"];
var _c2 = () => ["/book", "lockers", "map"];
var _c3 = () => ["/book", "lockers", "manage"];
function LockersComponent_mat_progress_bar_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 7);
  }
}
var LockersComponent = class _LockersComponent extends AsyncHandler {
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    this.loading = this._state.loading;
  }
  ngOnInit() {
    this._state.refresh();
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const url_parts = this._router.url?.split("/") || [""];
        this.path = url_parts[parts.length - 1].split("?")[0];
      }
    }));
    const parts = this._router.url?.split("/") || [""];
    this.path = parts[parts.length - 1].split("?")[0];
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static {
    this.\u0275fac = function LockersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockersComponent)(\u0275\u0275directiveInject(LockerStateService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersComponent, selectors: [["", "app-lockers", ""]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c04, decls: 15, vars: 12, consts: [[1, "flex-1", "relative", "w-1/2", "flex", "flex-col", "bg-base-200", "overflow-hidden"], [1, "w-full"], [1, "dark"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "queryParamsHandling", "merge", 3, "routerLink", "active"], [1, "flex-1", "h-1/2", "w-full", "relative", "overflow-auto"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]], template: function LockersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "sidebar");
        \u0275\u0275elementStart(1, "main", 0);
        \u0275\u0275element(2, "lockers-topbar", 1);
        \u0275\u0275elementStart(3, "div", 2)(4, "nav", 3)(5, "a", 4);
        \u0275\u0275text(6, " Bookings ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275text(8, " Map View ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "a", 4);
        \u0275\u0275text(10, " Manage Lockers ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, LockersComponent_mat_progress_bar_13_Template, 1, 0, "mat-progress-bar", 6);
        \u0275\u0275pipe(14, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c1))("active", ctx.path === "events");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c2))("active", ctx.path === "map");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c3))("active", ctx.path === "manage");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(14, 7, ctx.loading));
      }
    }, dependencies: [NgIf, MatTabNav, MatTabLink, SidebarComponent, MatProgressBar, RouterOutlet, RouterLink, LockersTopbarComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=lockers.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersComponent, { className: "LockersComponent", filePath: "apps/concierge/src/app/lockers/lockers.component.ts", lineNumber: 63 });
})();

// apps/concierge/src/app/lockers/locker-bookings.component.ts
var _c05 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "4rem" });
var _c12 = (a0, a1) => ({ key: "period", name: a0, content: a1, size: "9rem" });
var _c22 = (a0, a1) => ({ key: "user_name", name: a0, content: a1 });
var _c32 = (a0) => ({ key: "group", name: a0 });
var _c4 = (a0, a1) => ({ key: "asset_name", name: a0, content: a1 });
var _c5 = (a0) => ({ key: "approver_name", name: a0 });
var _c6 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "11rem" });
var _c7 = (a0, a1) => ({ key: "checked_in", name: a0, content: a1, size: "7rem", sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function LockerBookingsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
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
function LockerBookingsComponent_ng_template_17_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext(2).row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, row_r2.date, ctx_r2.time_format), " \u2013 ", \u0275\u0275pipeBind2(3, 5, row_r2.date_end, ctx_r2.time_format), " ");
  }
}
function LockerBookingsComponent_ng_template_17_ng_container_1_ng_container_3_Template(rf, ctx) {
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
function LockerBookingsComponent_ng_template_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275template(2, LockerBookingsComponent_ng_template_17_ng_container_1_ng_container_2_Template, 4, 8, "ng-container", 16)(3, LockerBookingsComponent_ng_template_17_ng_container_1_ng_container_3_Template, 3, 3, "ng-container", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(row_r2.all_day || row_r2.duration > 12 * 60));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r2.all_day || row_r2.duration > 12 * 60);
  }
}
function LockerBookingsComponent_ng_template_17_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, row_r2.status === "ended" ? "APP.CONCIERGE.BOOKING_ENDED" : "APP.CONCIERGE.BOOKING_EXPIRED"), " ");
  }
}
function LockerBookingsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, LockerBookingsComponent_ng_template_17_ng_container_1_Template, 4, 2, "ng-container", 16)(2, LockerBookingsComponent_ng_template_17_ng_container_2_Template, 4, 3, "ng-container", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r2.status !== "declined" && !row_r2.deleted && row_r2.status !== "ended");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r2.status === "declined" || row_r2.deleted || row_r2.status === "ended");
  }
}
function LockerBookingsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.asset_name || row_r4.asset_id, " ");
  }
}
function LockerBookingsComponent_ng_template_21_div_3_Template(rf, ctx) {
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
function LockerBookingsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LockerBookingsComponent_ng_template_21_div_3_Template, 2, 1, "div", 21);
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
function LockerBookingsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24)(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-icon", 27);
    \u0275\u0275text(7, " arrow_drop_down ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 6)(10, "button", 28);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_23_Template_button_click_10_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.approve(row_r7));
    });
    \u0275\u0275elementStart(11, "div", 29)(12, "app-icon", 27);
    \u0275\u0275text(13, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 30);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 28);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_23_Template_button_click_17_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reject(row_r7));
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
    const row_r7 = ctx.row;
    const menu_r8 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("!text-success-content", (row_r7 == null ? null : row_r7.status) === "approved")("!bg-success", (row_r7 == null ? null : row_r7.status) === "approved")("!text-error-content", (row_r7 == null ? null : row_r7.status) === "declined")("!bg-error", (row_r7 == null ? null : row_r7.status) === "declined")("!text-neutral-content", (row_r7 == null ? null : row_r7.status) === "ended")("!bg-neutral", (row_r7 == null ? null : row_r7.status) === "ended")("opacity-30", (row_r7 == null ? null : row_r7.status) === "ended");
    \u0275\u0275property("matMenuTriggerFor", menu_r8)("disabled", (row_r7 == null ? null : row_r7.status) === "ended");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 19, (row_r7 == null ? null : row_r7.status) === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : (row_r7 == null ? null : row_r7.status) === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : (row_r7 == null ? null : row_r7.status) === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 21, "APP.CONCIERGE.LOCKERS_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 23, "APP.CONCIERGE.LOCKERS_DECLINE"), " ");
  }
}
function LockerBookingsComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 31)(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-icon", 27);
    \u0275\u0275text(7, " arrow_drop_down ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 7)(10, "button", 28);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_25_Template_button_click_10_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.checkin(row_r10, true));
    });
    \u0275\u0275elementStart(11, "div", 29)(12, "app-icon", 27);
    \u0275\u0275text(13, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 28);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_25_Template_button_click_17_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.checkin(row_r10, false));
    });
    \u0275\u0275elementStart(18, "div", 29)(19, "app-icon", 27);
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
    \u0275\u0275property("matMenuTriggerFor", checkinMenu_r12)("disabled", row_r10.status === "ended")("matTooltip", row_r10.status === "ended" ? "Locker booking has ended" : "Check-in or check-out locker");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 16, data_r11 ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 18, "COMMON.CHECK_IN"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, "COMMON.CHECK_OUT"));
  }
}
function LockerBookingsComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function LockerBookingsComponent_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadMore());
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
var LockerBookingsComponent = class _LockerBookingsComponent {
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.filters = this._state.filters;
    this.has_more_pages = this._state.has_more_pages;
    this.bookings = this._state.filtered_bookings.pipe(map((i) => i.map((booking) => __spreadProps(__spreadValues({}, booking), {
      end: booking.date + booking.duration * 60 * 1e3
    }))));
    this.loadMore = () => this._state.nextPage();
    this.checkin = (d, s) => this.runMethod("checkin", () => __async(this, null, function* () {
      yield this._state.checkinLocker(d, s);
      d.checked_in = s ?? true;
    }));
    this.approve = (d) => this.runMethod("approve", () => __async(this, null, function* () {
      return this._state.approveLocker(d);
    }));
    this.reject = (d) => this.runMethod("reject", () => __async(this, null, function* () {
      return this._state.rejectLocker(d);
    }));
  }
  runMethod(name, fn) {
    return __async(this, null, function* () {
      this.loading = name;
      yield fn().catch((i) => null);
      this.loading = "";
    });
  }
  static {
    this.\u0275fac = function LockerBookingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerBookingsComponent)(\u0275\u0275directiveInject(LockerStateService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerBookingsComponent, selectors: [["locker-bookings"]], standalone: false, decls: 28, vars: 63, consts: [["date_template", ""], ["period_template", ""], ["locker_template", ""], ["user_template", ""], ["status_template", ""], ["option_template", ""], ["menu", "matMenu"], ["checkinMenu", "matMenu"], [1, "w-full", "h-4"], [1, "flex", "flex-col", "h-full", "w-full", "pt-4"], [1, "min-w-[76rem]", "block", "text-sm", "w-full", "flex-1", "overflow-auto", "mr-4", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["btn", "", "matRipple", "", "class", "absolute bottom-2 left-4 w-32 z-20", 3, "click", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "w-full", "py-2"], [1, "opacity-60"], [1, "text-xl"], [1, "p-2"], [4, "ngIf"], [1, "text-xs", "py-2", "px-4", "bg-error", "rounded-3xl", "text-white"], [1, "p-4"], [1, "flex", "flex-col", "justify-center", "px-4", "py-2"], [1, "select-all"], ["class", "text-xs opacity-30 select-all", 4, "ngIf"], [1, "text-xs", "opacity-30", "select-all"], [1, "px-2"], ["matRipple", "", 1, "rounded-3xl", "bg-warning", "text-warning-content", "border-none", "w-[7.5rem]", "h-10", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "pl-4", "pr-2", "space-x-2"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], ["matRipple", "", 1, "rounded-3xl", "bg-warning", "text-warning-content", "border-none", "w-24", "h-10", 3, "matMenuTriggerFor", "disabled", "matTooltip"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-4", "w-32", "z-20", 3, "click"]], template: function LockerBookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275element(2, "div", 8);
        \u0275\u0275elementStart(3, "div", 9);
        \u0275\u0275element(4, "simple-table", 10);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "async");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275template(15, LockerBookingsComponent_ng_template_15_Template, 7, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(17, LockerBookingsComponent_ng_template_17_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(19, LockerBookingsComponent_ng_template_19_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(21, LockerBookingsComponent_ng_template_21_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(23, LockerBookingsComponent_ng_template_23_Template, 24, 25, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(25, LockerBookingsComponent_ng_template_25_Template, 24, 22, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, LockerBookingsComponent_button_27_Template, 3, 3, "button", 11);
      }
      if (rf & 2) {
        let tmp_13_0;
        const date_template_r14 = \u0275\u0275reference(16);
        const period_template_r15 = \u0275\u0275reference(18);
        const locker_template_r16 = \u0275\u0275reference(20);
        const user_template_r17 = \u0275\u0275reference(22);
        const status_template_r18 = \u0275\u0275reference(24);
        const option_template_r19 = \u0275\u0275reference(26);
        const more_pages_r20 = \u0275\u0275pipeBind1(1, 10, ctx.has_more_pages);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("pb-16", !ctx.loading && more_pages_r20)("pb-4", !(!ctx.loading && more_pages_r20));
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.bookings)("columns", \u0275\u0275pureFunction8(54, _c8, \u0275\u0275pureFunction2(32, _c05, \u0275\u0275pipeBind1(5, 12, "FORM.DATE"), date_template_r14), \u0275\u0275pureFunction2(35, _c12, \u0275\u0275pipeBind1(6, 14, "FORM.PERIOD"), period_template_r15), \u0275\u0275pureFunction2(38, _c22, \u0275\u0275pipeBind1(7, 16, "COMMON.PERSON"), user_template_r17), \u0275\u0275pureFunction1(41, _c32, \u0275\u0275pipeBind1(8, 18, "COMMON.GROUP")), \u0275\u0275pureFunction2(43, _c4, \u0275\u0275pipeBind1(9, 20, "RESOURCE.LOCKER"), locker_template_r16), \u0275\u0275pureFunction1(46, _c5, \u0275\u0275pipeBind1(10, 22, "APP.CONCIERGE.APPROVER")), \u0275\u0275pureFunction2(48, _c6, \u0275\u0275pipeBind1(11, 24, "COMMON.STATUS"), status_template_r18), \u0275\u0275pureFunction2(51, _c7, \u0275\u0275pipeBind1(12, 26, "COMMON.CHECKED_IN"), option_template_r19)))("sortable", true)("page_size", 100)("empty_message", \u0275\u0275pipeBind1(14, 30, ((tmp_13_0 = \u0275\u0275pipeBind1(13, 28, ctx.filters)) == null ? null : tmp_13_0.search) ? "APP.CONCIERGE.LOCKERS_BOOK_SEARCH_EMPTY" : "APP.CONCIERGE.LOCKERS_BOOK_EMPTY"));
        \u0275\u0275advance(23);
        \u0275\u0275property("ngIf", !ctx.loading && more_pages_r20);
      }
    }, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, SimpleTableComponent, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=locker-bookings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerBookingsComponent, { className: "LockerBookingsComponent", filePath: "apps/concierge/src/app/lockers/locker-bookings.component.ts", lineNumber: 276 });
})();

// apps/concierge/src/app/lockers/new-lockers.component.ts
var _c06 = ["app-new-lockers", ""];
function NewLockersComponent_mat_progress_bar_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 6);
  }
}
var NewLockersComponent = class _NewLockersComponent extends AsyncHandler {
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor(_state, _router, _route, _dialog, _settings) {
    super();
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this._dialog = _dialog;
    this._settings = _settings;
    this.loading = this._state.loading;
    this.filters = this._state.filters;
    this.levels = this._state.levels;
    this.setDate = (date) => this._state.setFilters({ date });
    this.setFilters = (o) => this._state.setFilters(o);
    this.refresh = () => this._state.refresh();
    this.rejectAll = () => this._state.rejectAllLockers();
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
    this._state.refresh();
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const url_parts = this._router.url?.split("/") || [""];
        this.path = url_parts[parts.length - 1].split("?")[0];
      }
    }));
    const parts = this._router.url?.split("/") || [""];
    this.path = parts[parts.length - 1].split("?")[0];
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "locker" }
    });
  }
  static {
    this.\u0275fac = function NewLockersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewLockersComponent)(\u0275\u0275directiveInject(LockerStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewLockersComponent, selectors: [["", "app-new-lockers", ""]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c06, decls: 10, vars: 3, consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full", "relative"], [1, "w-full"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto", "px-8"], [1, "w-full", "h-full", "overflow-auto"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]], template: function NewLockersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1);
        \u0275\u0275element(4, "lockers-topbar", 2);
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
        \u0275\u0275element(7, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, NewLockersComponent_mat_progress_bar_8_Template, 1, 0, "mat-progress-bar", 5);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(9, 1, ctx.loading) && ctx.path === "events");
      }
    }, dependencies: [NgIf, ApplicationTopbarComponent, ApplicationSidebarComponent, MatProgressBar, RouterOutlet, LockersTopbarComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=new-lockers.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewLockersComponent, { className: "NewLockersComponent", filePath: "apps/concierge/src/app/lockers/new-lockers.component.ts", lineNumber: 43 });
})();

// apps/concierge/src/app/lockers/locker-list.component.ts
var _c07 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c13 = (a0, a1) => ({ key: "map_id", name: a0, content: a1 });
var _c23 = (a0, a1) => ({ key: "height", name: a0, size: "6rem", content: a1 });
var _c33 = (a0) => ({ key: "tags", name: a0, size: "8rem" });
var _c42 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6rem" });
var _c52 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _c62 = () => ({ key: "name", name: "Locker" });
var _c72 = (a0) => ({ key: "assigned_to", name: "Assigned", content: a0 });
var _c82 = (a0) => ({ key: "position", name: "Position", content: a0, size: "7.5rem" });
var _c9 = (a0) => ({ key: "size", name: "Size", content: a0, size: "7.5rem" });
var _c10 = (a0) => ({ key: "accessible", name: "Accessible", content: a0, size: "4rem" });
var _c11 = (a0) => ({ key: "bookable", name: "Bookable", content: a0, size: "4rem" });
var _c122 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "5.9rem" });
var _c132 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function LockerListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r1 || 1, "u");
  }
}
function LockerListComponent_ng_template_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "EXPLORE.MAP_ID_EMPTY"));
  }
}
function LockerListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_12_Template_button_click_0_listener() {
      const data_r3 = \u0275\u0275restoreView(_r2).data;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(data_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, LockerListComponent_ng_template_12_span_2_Template, 3, 3, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !data_r3);
  }
}
function LockerListComponent_ng_template_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.id, " ");
  }
}
function LockerListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_14_Template_button_click_0_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(row_r6.id));
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LockerListComponent_ng_template_14_div_3_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const data_r7 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r6.id !== row_r6.map_id);
  }
}
function LockerListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "button", 25)(2, "app-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 5)(6, "button", 26);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_16_Template_button_click_6_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editLocker(row_r9));
    });
    \u0275\u0275elementStart(7, "div", 27)(8, "app-icon", 28);
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 26);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_16_Template_button_click_13_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewBank(row_r9));
    });
    \u0275\u0275elementStart(14, "div", 27)(15, "app-icon", 28);
    \u0275\u0275text(16, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "View Locker Bank Layout");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "button", 26);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_16_Template_button_click_19_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editLockerBank(row_r9));
    });
    \u0275\u0275elementStart(20, "div", 27)(21, "app-icon", 28);
    \u0275\u0275text(22, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 29)(27, "div", 27)(28, "app-icon", 30);
    \u0275\u0275text(29, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "button", 31);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_16_Template_button_click_33_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.show_children[row_r9.id] = !ctx_r3.show_children[row_r9.id]);
    });
    \u0275\u0275elementStart(34, "app-icon", 32);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(36, "mat-menu");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    const menu_r10 = \u0275\u0275reference(5);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 6, "APP.CONCIERGE.LOCKERS_ADD"));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 8, "APP.CONCIERGE.LOCKERS_BANK_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 10, "APP.CONCIERGE.LOCKERS_BANK_REMOVE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !(row_r9.lockers == null ? null : row_r9.lockers.length));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.show_children[row_r9.id] ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function LockerListComponent_ng_template_18_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.UNASSIGNED"), " ");
  }
}
function LockerListComponent_ng_template_18_ng_template_2_button_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r12 = \u0275\u0275nextContext(2).data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r12, " ");
  }
}
function LockerListComponent_ng_template_18_ng_template_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_18_ng_template_2_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const data_r12 = \u0275\u0275nextContext().data;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(data_r12, "assigned"));
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LockerListComponent_ng_template_18_ng_template_2_button_1_div_3_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext();
    const row_r14 = ctx_r12.row;
    const data_r12 = ctx_r12.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.assigned_name || data_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r14.assigned_name);
  }
}
function LockerListComponent_ng_template_18_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LockerListComponent_ng_template_18_ng_template_2_div_0_Template, 3, 3, "div", 34)(1, LockerListComponent_ng_template_18_ng_template_2_button_1_Template, 4, 2, "button", 35);
  }
  if (rf & 2) {
    const data_r12 = ctx.data;
    \u0275\u0275property("ngIf", !data_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r12);
  }
}
function LockerListComponent_ng_template_18_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div", 39);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38)(8, "div", 39);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r15 = ctx.data;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "COMMON.COLUMN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r15[0] + 1, "u ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "COMMON.ROW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r15[1] + 1, "u ");
  }
}
function LockerListComponent_ng_template_18_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div", 39);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38)(8, "div", 39);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r16 = ctx.data;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "COMMON.WIDTH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r16[0], "u ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "COMMON.HEIGHT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r16[1], "u ");
  }
}
function LockerListComponent_ng_template_18_ng_template_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "app-icon", 32);
    \u0275\u0275text(2, "accessible");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", "APP.CONCIERGE.LOCKERS_ACCESSIBLE_INFO");
  }
}
function LockerListComponent_ng_template_18_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, LockerListComponent_ng_template_18_ng_template_8_div_1_Template, 3, 1, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r17 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r17);
  }
}
function LockerListComponent_ng_template_18_ng_template_10_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "COMMON.BOOKABLE"));
  }
}
function LockerListComponent_ng_template_18_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LockerListComponent_ng_template_18_ng_template_10_div_0_Template, 4, 3, "div", 44);
  }
  if (rf & 2) {
    const data_r18 = ctx.data;
    \u0275\u0275property("ngIf", data_r18);
  }
}
function LockerListComponent_ng_template_18_ng_template_12_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_18_ng_template_12_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const row_r20 = \u0275\u0275nextContext().row;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openLocker(row_r20));
    });
    \u0275\u0275elementStart(1, "div", 27)(2, "app-icon", 28);
    \u0275\u0275text(3, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 26);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_18_ng_template_12_Conditional_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r22);
      const row_r20 = \u0275\u0275nextContext().row;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.shareLocker(row_r20));
    });
    \u0275\u0275elementStart(8, "div", 27)(9, "app-icon", 28);
    \u0275\u0275text(10, "share");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 26);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_18_ng_template_12_Conditional_13_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r22);
      const row_r20 = \u0275\u0275nextContext().row;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.releaseLocker(row_r20));
    });
    \u0275\u0275elementStart(15, "div", 27)(16, "app-icon", 28);
    \u0275\u0275text(17, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "APP.CONCIERGE.LOCKERS_OPEN"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 5, "APP.CONCIERGE.LOCKERS_SHARE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 7, "APP.CONCIERGE.LOCKERS_RELEASE"));
  }
}
function LockerListComponent_ng_template_18_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "button", 25)(2, "app-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "mat-menu", null, 12)(6, "button", 26);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_18_ng_template_12_Template_button_click_6_listener() {
      const row_r20 = \u0275\u0275restoreView(_r19).row;
      const bank_r21 = \u0275\u0275nextContext().row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editLocker(bank_r21, row_r20));
    });
    \u0275\u0275elementStart(7, "div", 27)(8, "app-icon", 28);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, LockerListComponent_ng_template_18_ng_template_12_Conditional_13_Template, 21, 9);
    \u0275\u0275elementStart(14, "button", 26);
    \u0275\u0275listener("click", function LockerListComponent_ng_template_18_ng_template_12_Template_button_click_14_listener() {
      const row_r20 = \u0275\u0275restoreView(_r19).row;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeLocker(row_r20));
    });
    \u0275\u0275elementStart(15, "div", 27)(16, "app-icon", 30);
    \u0275\u0275text(17, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const locker_menu_r23 = \u0275\u0275reference(5);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", locker_menu_r23);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 4, "APP.CONCIERGE.LOCKERS_EDIT"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.has_driver ? 13 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 6, "APP.CONCIERGE.LOCKERS_REMOVE"));
  }
}
function LockerListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 33);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275template(2, LockerListComponent_ng_template_18_ng_template_2_Template, 2, 2, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(4, LockerListComponent_ng_template_18_ng_template_4_Template, 13, 8, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(6, LockerListComponent_ng_template_18_ng_template_6_Template, 13, 8, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(8, LockerListComponent_ng_template_18_ng_template_8_Template, 2, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor)(10, LockerListComponent_ng_template_18_ng_template_10_Template, 1, 1, "ng-template", null, 10, \u0275\u0275templateRefExtractor)(12, LockerListComponent_ng_template_18_ng_template_12_Template, 21, 8, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const bank_r21 = ctx.row;
    const assigned_template_r24 = \u0275\u0275reference(3);
    const pos_template_r25 = \u0275\u0275reference(5);
    const size_template_r26 = \u0275\u0275reference(7);
    const accessible_template_r27 = \u0275\u0275reference(9);
    const bool_template_r28 = \u0275\u0275reference(11);
    const locker_action_template_r29 = \u0275\u0275reference(13);
    \u0275\u0275property("data", bank_r21.lockers)("show_header", false)("columns", \u0275\u0275pureFunction7(19, _c132, \u0275\u0275pureFunction0(6, _c62), \u0275\u0275pureFunction1(7, _c72, assigned_template_r24), \u0275\u0275pureFunction1(9, _c82, pos_template_r25), \u0275\u0275pureFunction1(11, _c9, size_template_r26), \u0275\u0275pureFunction1(13, _c10, accessible_template_r27), \u0275\u0275pureFunction1(15, _c11, bool_template_r28), \u0275\u0275pureFunction1(17, _c122, locker_action_template_r29)))("empty_message", \u0275\u0275pipeBind1(1, 4, "APP.CONCIERGE.LOCKERS_EMPTY"));
  }
}
var LockerListComponent = class _LockerListComponent extends AsyncHandler {
  get has_driver() {
    return this._state.has_driver;
  }
  constructor(_state, _clipboard) {
    super();
    this._state = _state;
    this._clipboard = _clipboard;
    this.show_children = {};
    this.locker_banks = this._state.filtered_banks;
    this.lockers = this._state.filtered_lockers;
    this.options = this._state.filters;
    this.loading = this._state.loading;
    this.bookings = this._state.bookings;
    this.locker_status = {};
    this.viewBank = (b) => this._state.viewLockerBank(b);
    this.editLocker = (bid, s) => this._state.editLocker(bid, s);
    this.editLockerBank = (b) => this._state.editLockerBank(b);
    this.removeLocker = (s) => this._state.removeLocker(s);
    this.removeLockerBank = (b) => this._state.removeLockerBank(b);
    this.shareLocker = (l) => this._state.shareLocker(l);
    this.releaseLocker = (l) => this._state.releaseLocker(l, true);
    this.openLocker = (l) => this._state.openLocker(l, true);
  }
  ngOnInit() {
    this.subscription("bookings", combineLatest([this.lockers, this.bookings]).subscribe(([lockers, bookings]) => this._updateStatusList(lockers, bookings)));
  }
  copyToClipboard(id, type) {
    const success = this._clipboard.copy(id);
    if (success)
      notifySuccess(i18n(type ? "APP.CONCIERGE.LOCKERS_COPIED_USER" : "APP.CONCIERGE.LOCKERS_COPIED_ID"));
  }
  statusTooltip(status) {
    switch (status) {
      case "assigned_free":
        return "APP.CONCIERGE.LOCKERS_STATUS_ASSIGNED_FREE";
      case "assigned_busy":
        return "APP.CONCIERGE.LOCKERS_STATUS_ASSIGNED_BUSY";
      case "reuse_busy":
        return "APP.CONCIERGE.LOCKERS_STATUS_ASSIGNED_OTHER";
      case "busy":
        return "APP.CONCIERGE.LOCKERS_STATUS_BUSY";
      case "free":
        return "APP.CONCIERGE.LOCKERS_STATUS_FREE";
    }
    return "APP.CONCIERGE.LOCKERS_STATUS_FREE";
  }
  _updateStatusList(lockers, bookings) {
    for (const locker of lockers) {
      const booking = bookings.find((_) => _.asset_id === locker.id && _.status !== "declined" && _.status !== "cancelled" && _.status !== "ended");
      if (locker.assigned_to && !booking) {
        this.locker_status[locker.id] = "assigned_free";
      } else if (locker.assigned_to && booking && booking.user_email === locker.assigned_to) {
        this.locker_status[locker.id] = "assigned_busy";
      } else if (locker.assigned_to && booking && booking.user_email !== locker.assigned_to) {
        this.locker_status[locker.id] = "reuse_busy";
      } else if (!locker.assigned_to && booking) {
        this.locker_status[locker.id] = "busy";
      } else {
        this.locker_status[locker.id] = "free";
      }
    }
  }
  static {
    this.\u0275fac = function LockerListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerListComponent)(\u0275\u0275directiveInject(LockerStateService), \u0275\u0275directiveInject(Clipboard));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerListComponent, selectors: [["locker-list"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 42, consts: [["height_template", ""], ["id_template", ""], ["name_template", ""], ["action_template", ""], ["locker_list_template", ""], ["menu", "matMenu"], ["assigned_template", ""], ["pos_template", ""], ["size_template", ""], ["accessible_template", ""], ["bool_template", ""], ["locker_action_template", ""], ["locker_menu", "matMenu"], [1, "w-full"], [1, "min-w-[52rem]", "block", "text-sm", 3, "data", "columns", "filter", "show_children", "child_template", "sortable", "empty_message"], [1, "w-full", "h-20"], [1, "px-4", "font-mono"], [1, "px-4", "py-2", "text-left", "leading-tight", "font-mono", 3, "click"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], ["class", "text-[0.625rem] opacity-30 font-mono", 4, "ngIf"], [1, "text-[0.625rem]", "opacity-30", "font-mono"], [1, "flex", "items-center", "justify-end", "space-x-2", "w-full", "px-2"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["mat-menu-item", ""], [1, "text-xl", "text-error"], ["icon", "", "matRipple", "", 3, "click", "disabled"], [1, "text-2xl"], [3, "data", "show_header", "columns", "empty_message"], ["class", "p-4 opacity-30", 4, "ngIf"], ["class", "px-4 py-2 text-left leading-tight", 3, "click", 4, "ngIf"], [1, "p-4", "opacity-30"], [1, "w-full", "flex", "space-x-2", "p-2"], [1, "flex", "flex-col"], [1, "opacity-30", "text-xs"], [1, "bg-base-200", "rounded", "px-2", "py-1", "w-12", "text-center"], [1, "w-full", "flex", "items-center", "justify-center", "p-2"], ["class", "flex items-center justify-center h-8 w-8 rounded bg-info text-info-content", 3, "matTooltip", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "h-8", "w-8", "rounded", "bg-info", "text-info-content", 3, "matTooltip"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto", 3, "matTooltip", 4, "ngIf"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-success", "text-success-content", "mx-auto", 3, "matTooltip"]], template: function LockerListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "mat-progress-bar", 13);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275element(2, "simple-table", 14);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "async");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275element(9, "div", 15);
        \u0275\u0275template(10, LockerListComponent_ng_template_10_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, LockerListComponent_ng_template_12_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(14, LockerListComponent_ng_template_14_Template, 4, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(16, LockerListComponent_ng_template_16_Template, 37, 12, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(18, LockerListComponent_ng_template_18_Template, 14, 27, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_8_0;
        const height_template_r30 = \u0275\u0275reference(11);
        const id_template_r31 = \u0275\u0275reference(13);
        const name_template_r32 = \u0275\u0275reference(15);
        const action_template_r33 = \u0275\u0275reference(17);
        const locker_list_template_r34 = \u0275\u0275reference(19);
        \u0275\u0275classProp("opacity-0", !((tmp_5_0 = \u0275\u0275pipeBind1(1, 9, ctx.loading)) == null ? null : tmp_5_0.includes("lockers")));
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.locker_banks)("columns", \u0275\u0275pureFunction5(36, _c52, \u0275\u0275pureFunction2(23, _c07, \u0275\u0275pipeBind1(3, 11, "APP.CONCIERGE.LOCKERS_BANK"), name_template_r32), \u0275\u0275pureFunction2(26, _c13, \u0275\u0275pipeBind1(4, 13, "EXPLORE.MAP_ID"), id_template_r31), \u0275\u0275pureFunction2(29, _c23, \u0275\u0275pipeBind1(5, 15, "COMMON.HEIGHT"), height_template_r30), \u0275\u0275pureFunction1(32, _c33, \u0275\u0275pipeBind1(6, 17, "COMMON.TAGS")), \u0275\u0275pureFunction1(34, _c42, action_template_r33)))("filter", (tmp_8_0 = \u0275\u0275pipeBind1(7, 19, ctx.options)) == null ? null : tmp_8_0.search)("show_children", ctx.show_children)("child_template", locker_list_template_r34)("sortable", true)("empty_message", \u0275\u0275pipeBind1(8, 21, "APP.CONCIERGE.LOCKERS_BANK_EMPTY"));
      }
    }, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatProgressBar, MatRipple, IconComponent, SimpleTableComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerListComponent, { className: "LockerListComponent", filePath: "apps/concierge/src/app/lockers/locker-list.component.ts", lineNumber: 328 });
})();

// apps/concierge/src/app/lockers/lockers.module.ts
var ROUTES = [
  {
    path: "new",
    component: NewLockersComponent,
    children: [
      { path: "events", component: LockerBookingsComponent },
      { path: "manage", component: LockerListComponent },
      { path: "**", redirectTo: "events" }
    ]
  },
  {
    path: "",
    component: LockersComponent,
    children: [
      { path: "events", component: LockerBookingsComponent },
      { path: "manage", component: LockerListComponent },
      { path: "**", redirectTo: "events" }
    ]
  }
];
var LockersModule = class _LockersModule {
  static {
    this.\u0275fac = function LockersModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockersModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LockersModule });
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
  LockersModule
};
//# sourceMappingURL=lockers.module-3MZDZSOT.js.map
