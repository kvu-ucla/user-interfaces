import "./chunk-EUYTGKXH.js";
import {
  SharedUsersModule
} from "./chunk-HFIFROFL.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  BookingRulesModalComponent,
  BuildingPipe,
  COMMA,
  Clipboard,
  CommonModule,
  DefaultValueAccessor,
  DurationFieldComponent,
  ENTER,
  EncryptionLevel,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  ImageListFieldComponent,
  LevelPipe,
  MAT_DIALOG_DATA,
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatCheckbox,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatError,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatPrefix,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NumberValueAccessor,
  OrganisationService,
  PlaceSystem,
  RequiredValidator,
  Router,
  RouterModule,
  SPACE,
  SanitizePipe,
  SearchbarComponent,
  SettingsService,
  SharedSpacesModule,
  SidebarComponent,
  SimpleTableComponent,
  TIMEZONES_IANA,
  UIModule,
  __async,
  __spreadProps,
  __spreadValues,
  addSystem,
  catchError,
  combineLatest,
  filter,
  first,
  generateSystemsFormFields,
  getInvalidFields,
  getItemWithKeys,
  map,
  notifyError,
  notifySuccess,
  notifyWarn,
  of,
  querySystems,
  queryZones,
  shareReplay,
  showMetadata,
  switchMap,
  unique,
  updateMetadata,
  updateSystem,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵi18n,
  ɵɵi18nEnd,
  ɵɵi18nStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction7,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O7AER5TS.js";

// apps/concierge/src/app/room-manager/room-modal.component.ts
function RoomModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 20)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function RoomModalComponent_main_4_form_1_div_1_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 44);
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
function RoomModalComponent_main_4_form_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "label", 42);
    \u0275\u0275i18nStart(2, 3);
    \u0275\u0275element(3, "span");
    \u0275\u0275i18nEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 37)(5, "mat-select", 43);
    \u0275\u0275template(6, RoomModalComponent_main_4_form_1_div_1_mat_option_6_Template, 2, 2, "mat-option", 40);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Level is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.zone.invalid && ctx_r1.form.controls.zone.touched);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(7, 3, ctx_r1.levels));
  }
}
function RoomModalComponent_main_4_form_1_div_3_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275i18n(1, 5);
    \u0275\u0275elementEnd();
  }
}
function RoomModalComponent_main_4_form_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "label", 46);
    \u0275\u0275i18nStart(2, 4);
    \u0275\u0275element(3, "span");
    \u0275\u0275i18nEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 37);
    \u0275\u0275element(5, "input", 47);
    \u0275\u0275template(6, RoomModalComponent_main_4_form_1_div_3_mat_error_6_Template, 2, 0, "mat-error", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.name.invalid && ctx_r1.form.controls.name.touched);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.form.controls.name.invalid);
  }
}
function RoomModalComponent_main_4_form_1_div_4_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275i18n(1, 7);
    \u0275\u0275elementEnd();
  }
}
function RoomModalComponent_main_4_form_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "label", 49);
    \u0275\u0275i18n(2, 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 37);
    \u0275\u0275element(4, "input", 50);
    \u0275\u0275template(5, RoomModalComponent_main_4_form_1_div_4_mat_error_5_Template, 2, 0, "mat-error", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.email.invalid && ctx_r1.form.controls.email.touched);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.form.controls.email.invalid);
  }
}
function RoomModalComponent_main_4_form_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "label", 51);
    \u0275\u0275i18n(2, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 37);
    \u0275\u0275element(4, "input", 52);
    \u0275\u0275elementEnd()();
  }
}
function RoomModalComponent_main_4_form_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "label", 53);
    \u0275\u0275i18n(2, 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 37);
    \u0275\u0275element(4, "input", 54);
    \u0275\u0275elementEnd()();
  }
}
function RoomModalComponent_main_4_form_1_div_22_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275i18n(1, 11);
    \u0275\u0275elementEnd();
  }
}
function RoomModalComponent_main_4_form_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "label", 55);
    \u0275\u0275i18n(2, 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 37);
    \u0275\u0275element(4, "input", 56);
    \u0275\u0275template(5, RoomModalComponent_main_4_form_1_div_22_mat_error_5_Template, 2, 0, "mat-error", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.capacity.invalid && ctx_r1.form.controls.capacity.touched);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.form.controls.capacity.invalid);
  }
}
function RoomModalComponent_main_4_form_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "mat-checkbox", 57);
    \u0275\u0275i18n(2, 12);
    \u0275\u0275elementEnd()();
  }
}
function RoomModalComponent_main_4_form_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "label", 58);
    \u0275\u0275i18n(2, 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 37);
    \u0275\u0275element(4, "textarea", 59);
    \u0275\u0275elementEnd()();
  }
}
function RoomModalComponent_main_4_form_1_div_25_mat_chip_row_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 63);
    \u0275\u0275listener("removed", function RoomModalComponent_main_4_form_1_div_25_mat_chip_row_6_Template_mat_chip_row_removed_0_listener() {
      const feature_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeFeature(feature_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "app-icon", 64);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    \u0275\u0275property("selectable", true)("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r5, " ");
  }
}
function RoomModalComponent_main_4_form_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "label");
    \u0275\u0275i18n(2, 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 37)(4, "mat-chip-grid", 60, 2);
    \u0275\u0275template(6, RoomModalComponent_main_4_form_1_div_25_mat_chip_row_6_Template, 4, 3, "mat-chip-row", 61);
    \u0275\u0275elementStart(7, "input", 62);
    \u0275\u0275listener("matChipInputTokenEnd", function RoomModalComponent_main_4_form_1_div_25_Template_input_matChipInputTokenEnd_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addFeature($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const chipList_r6 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.features.invalid && ctx_r1.form.controls.features.touched);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.feature_list);
    \u0275\u0275advance();
    \u0275\u0275property("matChipInputFor", chipList_r6)("matChipInputSeparatorKeyCodes", ctx_r1.separators)("matChipInputAddOnBlur", true);
  }
}
function RoomModalComponent_main_4_form_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "label", 65);
    \u0275\u0275i18n(2, 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 37);
    \u0275\u0275element(4, "input", 66);
    \u0275\u0275elementEnd()();
  }
}
function RoomModalComponent_main_4_form_1_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r7 = ctx.$implicit;
    \u0275\u0275property("value", tz_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r7);
  }
}
function RoomModalComponent_main_4_form_1_mat_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 67);
    \u0275\u0275text(1, " No matching timezones ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function RoomModalComponent_main_4_form_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "label", 68);
    \u0275\u0275i18n(2, 16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "image-list-field", 69);
    \u0275\u0275elementEnd();
  }
}
function RoomModalComponent_main_4_form_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 23);
    \u0275\u0275template(1, RoomModalComponent_main_4_form_1_div_1_Template, 10, 5, "div", 24);
    \u0275\u0275elementStart(2, "div", 25);
    \u0275\u0275template(3, RoomModalComponent_main_4_form_1_div_3_Template, 7, 3, "div", 26)(4, RoomModalComponent_main_4_form_1_div_4_Template, 6, 3, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25);
    \u0275\u0275template(6, RoomModalComponent_main_4_form_1_div_6_Template, 5, 0, "div", 26)(7, RoomModalComponent_main_4_form_1_div_7_Template, 5, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 27)(9, "div", 28)(10, "label", 29);
    \u0275\u0275text(11, " Default Setup Duration ");
    \u0275\u0275elementStart(12, "app-icon", 30);
    \u0275\u0275text(13, " info_outline ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 28)(16, "label", 32);
    \u0275\u0275text(17, " Default Breakdown Duration ");
    \u0275\u0275elementStart(18, "app-icon", 33);
    \u0275\u0275text(19, " info_outline ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "a-duration-field", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 25);
    \u0275\u0275template(22, RoomModalComponent_main_4_form_1_div_22_Template, 6, 3, "div", 26)(23, RoomModalComponent_main_4_form_1_div_23_Template, 3, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, RoomModalComponent_main_4_form_1_div_24_Template, 5, 0, "div", 24)(25, RoomModalComponent_main_4_form_1_div_25_Template, 8, 6, "div", 24)(26, RoomModalComponent_main_4_form_1_div_26_Template, 5, 0, "div", 24);
    \u0275\u0275elementStart(27, "div", 35)(28, "label", 36);
    \u0275\u0275text(29, "Timezone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-form-field", 37)(31, "app-icon", 38);
    \u0275\u0275text(32, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-autocomplete", null, 1);
    \u0275\u0275template(36, RoomModalComponent_main_4_form_1_mat_option_36_Template, 2, 2, "mat-option", 40)(37, RoomModalComponent_main_4_form_1_mat_option_37_Template, 2, 1, "mat-option", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, RoomModalComponent_main_4_form_1_div_38_Template, 4, 0, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const auto_r8 = \u0275\u0275reference(35);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.zone);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.controls.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.controls.display_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.display_name);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.settings_form);
    \u0275\u0275advance(6);
    \u0275\u0275property("min", 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("min", 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.controls.capacity);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.bookable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.features);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.map_id);
    \u0275\u0275advance(7);
    \u0275\u0275property("matAutocomplete", auto_r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.filtered_timezones);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.timezones.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.images);
  }
}
function RoomModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 21);
    \u0275\u0275template(1, RoomModalComponent_main_4_form_1_Template, 39, 18, "form", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form);
  }
}
function RoomModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 70)(1, "button", 71);
    \u0275\u0275listener("click", function RoomModalComponent_footer_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd()();
  }
}
function RoomModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275element(1, "mat-spinner", 73);
    \u0275\u0275elementStart(2, "p", 74);
    \u0275\u0275text(3, "Saving room...");
    \u0275\u0275elementEnd()();
  }
}
var _RoomModalComponent = class _RoomModalComponent extends AsyncHandler {
  get feature_list() {
    return this.form.controls.features.value;
  }
  constructor(_data, _dialog_ref, _org) {
    super();
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this._org = _org;
    this.loading = false;
    this.timezones = [];
    this.filtered_timezones = [];
    this.levels = this._org.active_levels;
    this.form = generateSystemsFormFields(this._data.room);
    this.settings_form = new FormGroup({
      setup: new FormControl(0),
      breakdown: new FormControl(0)
    });
    this.encryption_levels = [
      { id: EncryptionLevel.None, name: "None" },
      { id: EncryptionLevel.Support, name: "Support" },
      { id: EncryptionLevel.Admin, name: "Admin" },
      { id: EncryptionLevel.NeverDisplay, name: "Never Display" }
    ];
    this.query_fn = (_) => queryZones({ q: _ }).pipe(map((resp) => resp.data));
    this.separators = [ENTER, COMMA, SPACE];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const { details } = yield showMetadata(this._org.organisation.id, "settings").toPromise();
      const overflow = getItemWithKeys(["events", "overflow"], details) || {};
      if (this._data.room.id && overflow[this._data.room.id]) {
        this.settings_form.patchValue(overflow[this._data.room.id]);
      }
    });
  }
  ngOnChanges(changes) {
    if (changes.form) {
      this.updateTimezoneList();
      this.subscription("tz-change", this.form.valueChanges.subscribe(({ timezone }) => this.filtered_timezones = this.timezones.filter((_) => _.toLowerCase().includes(timezone.toLowerCase()))));
    }
  }
  /**
   * Add a feature to the list of features for the item
   * @param event Input event
   */
  addFeature(event) {
    if (!this.form || !this.form.controls.features)
      return;
    const input = event.input;
    const value = event.value;
    const feature_list = this.feature_list;
    if ((value || "").trim()) {
      feature_list.push(value);
      this.form.controls.features.setValue(feature_list);
    }
    if (input) {
      input.value = "";
    }
  }
  /**
   * Remove feature from the list
   * @param existing_feature Feature to remove
   */
  removeFeature(existing_feature) {
    if (!this.form || !this.form.controls.features)
      return;
    const feature_list = this.feature_list;
    const index = feature_list.indexOf(existing_feature);
    if (index >= 0) {
      feature_list.splice(index, 1);
      this.form.controls.features.setValue(feature_list);
    }
  }
  updateTimezoneList() {
    const timezone = this.form?.value?.timezone || "";
    this.timezones = TIMEZONES_IANA;
    this.filtered_timezones = this.timezones.filter((_) => _.toLowerCase().includes(timezone.toLowerCase()));
  }
  save() {
    return __async(this, null, function* () {
      if (!this.form.valid)
        return notifyError(`Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
      if (!this.form.value.id) {
        this.form.patchValue({
          display_name: this.form.value.display_name || this.form.value.name,
          zones: unique([
            this._org.organisation.id,
            this._org.building.parent_id,
            this._org.building.id,
            `${this.form.value.zone?.id || this.form.value.zone || ""}`
          ]).filter((_) => _)
        });
      }
      this.loading = true;
      this._dialog_ref.disableClose = true;
      const data = this.form.getRawValue();
      const { details } = yield showMetadata(this._org.organisation.id, "settings").toPromise();
      const overflow = getItemWithKeys(["events", "overflow"], details) || {};
      overflow[data.id] = this.settings_form.value;
      yield updateMetadata(this._org.organisation.id, {
        name: "settings",
        details: __spreadProps(__spreadValues({}, details), {
          events: __spreadProps(__spreadValues({}, details.events || {}), { overflow })
        }),
        description: ""
      }).toPromise().catch((e) => notifyWarn("Unable to save room setup and breakdown times"));
      yield (data.id ? updateSystem(data.id, data) : addSystem(data)).toPromise();
      this._dialog_ref.disableClose = false;
      this._dialog_ref.close(true);
      this.loading = false;
    });
  }
};
_RoomModalComponent.\u0275fac = function RoomModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(OrganisationService));
};
_RoomModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomModalComponent, selectors: [["room-form-modal"]], features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 8, vars: 5, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_zoneLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_0 = goog.getMsg(" Level{$startTagSpan}*{$closeTagSpan}: ", { "closeTagSpan": "\uFFFD/#3\uFFFD", "startTagSpan": "\uFFFD#3\uFFFD" }, { original_code: { "closeTagSpan": "</span>", "startTagSpan": "<span>" } });
    i18n_0 = MSG_EXTERNAL_zoneLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:@@zoneLabel␟805d5ab24c829f98df246a63541ee827ce04a4c4␟6308222021008136210: Level${"\uFFFD#3\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_SPAN:: `;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_systemNamePlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_1 = goog.getMsg("Room Name");
    i18n_1 = MSG_EXTERNAL_systemNamePlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:@@systemNamePlaceholder␟412d74982a750ad38d528a416090cad259267cf7␟3270670506078615677:Room Name`;
  }
  let i18n_2;
  if (false) {
    const MSG_EXTERNAL_nameLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_2 = goog.getMsg(" Name{$startTagSpan}*{$closeTagSpan}: ", { "closeTagSpan": "\uFFFD/#3\uFFFD", "startTagSpan": "\uFFFD#3\uFFFD" }, { original_code: { "closeTagSpan": "</span>", "startTagSpan": "<span>" } });
    i18n_2 = MSG_EXTERNAL_nameLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_2;
  } else {
    i18n_2 = $localize`:@@nameLabel␟ce22d533a3bc86b04d363cdacf055e861f719107␟253967969926135345: Name${"\uFFFD#3\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_SPAN:: `;
  }
  let i18n_3;
  if (false) {
    const MSG_EXTERNAL_systemNameError$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_3 = goog.getMsg("Room name is required");
    i18n_3 = MSG_EXTERNAL_systemNameError$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_3;
  } else {
    i18n_3 = $localize`:@@systemNameError␟a76167ad44bb224b5e970e7cdce5e03ba50bbf34␟4944106304667909261:Room name is required`;
  }
  let i18n_4;
  if (false) {
    const MSG_EXTERNAL_systemEmailPlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_4 = goog.getMsg("Room Email");
    i18n_4 = MSG_EXTERNAL_systemEmailPlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_4;
  } else {
    i18n_4 = $localize`:@@systemEmailPlaceholder␟796480f8af4a196dc6343cf00d09c7841f270f3a␟3140960526772549616:Room Email`;
  }
  let i18n_5;
  if (false) {
    const MSG_EXTERNAL_emailLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_5 = goog.getMsg(" Email: ");
    i18n_5 = MSG_EXTERNAL_emailLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_5;
  } else {
    i18n_5 = $localize`:@@emailLabel␟7e7d6d1958ec577b1f852c495aa8abb88a5a4e8c␟3680148548084285501: Email: `;
  }
  let i18n_6;
  if (false) {
    const MSG_EXTERNAL_emailError$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_6 = goog.getMsg("A valid email is required");
    i18n_6 = MSG_EXTERNAL_emailError$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_6;
  } else {
    i18n_6 = $localize`:@@emailError␟66a4553914df830f0bc1dd1f0a42c57fd85864de␟6407494155279173358:A valid email is required`;
  }
  let i18n_7;
  if (false) {
    const MSG_EXTERNAL_displayNamePlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_7 = goog.getMsg("Display Name");
    i18n_7 = MSG_EXTERNAL_displayNamePlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_7;
  } else {
    i18n_7 = $localize`:@@displayNamePlaceholder␟e438ba78cbafdb5bcbce0820bfaad995a504f222␟3013055597615607317:Display Name`;
  }
  let i18n_8;
  if (false) {
    const MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_8 = goog.getMsg("Display Name: ");
    i18n_8 = MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_8;
  } else {
    i18n_8 = $localize`:@@displayNameLabel␟e966586c3aadb81b0555b483a36f46776d9792c8␟6691873398244034720:Display Name: `;
  }
  let i18n_9;
  if (false) {
    const MSG_EXTERNAL_codeNamePlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_9 = goog.getMsg("Code");
    i18n_9 = MSG_EXTERNAL_codeNamePlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_9;
  } else {
    i18n_9 = $localize`:@@codeNamePlaceholder␟68572de01b84c678be4bf8a27b990ecac2f41ce9␟8186013988289067040:Code`;
  }
  let i18n_10;
  if (false) {
    const MSG_EXTERNAL_codeNameLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_10 = goog.getMsg("Code: ");
    i18n_10 = MSG_EXTERNAL_codeNameLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_10;
  } else {
    i18n_10 = $localize`:@@codeNameLabel␟61275d3a79a1234bf3fcb50f72d8dc798ef57e27␟7610172352109675938:Code: `;
  }
  let i18n_11;
  if (false) {
    const MSG_EXTERNAL_capacityPlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_11 = goog.getMsg("Capacity");
    i18n_11 = MSG_EXTERNAL_capacityPlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_11;
  } else {
    i18n_11 = $localize`:@@capacityPlaceholder␟ce9dfdc6dccb28dc75a78c704e09dc18fb02dcfa␟7825570888384392250:Capacity`;
  }
  let i18n_12;
  if (false) {
    const MSG_EXTERNAL_capacityLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_12 = goog.getMsg(" Capacity: ");
    i18n_12 = MSG_EXTERNAL_capacityLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_12;
  } else {
    i18n_12 = $localize`:@@capacityLabel␟4fdfe5d0bf8898e5def2c3f9d5971f5e23e753d9␟255201359546348839: Capacity: `;
  }
  let i18n_13;
  if (false) {
    const MSG_EXTERNAL_capacityError$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_13 = goog.getMsg(" A valid positive number is required ");
    i18n_13 = MSG_EXTERNAL_capacityError$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_13;
  } else {
    i18n_13 = $localize`:@@capacityError␟dedde35e8848b99432791a4326aa103b8ec774c4␟8134498951699811316: A valid positive number is required `;
  }
  let i18n_14;
  if (false) {
    const MSG_EXTERNAL_bookableLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_14 = goog.getMsg(" Bookable ");
    i18n_14 = MSG_EXTERNAL_bookableLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_14;
  } else {
    i18n_14 = $localize`:@@bookableLabel␟96462a3176e48f64fd7d25d58a6d49afe4628700␟414602767324525018: Bookable `;
  }
  let i18n_15;
  if (false) {
    const MSG_EXTERNAL_descriptionLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_15 = goog.getMsg("Description:");
    i18n_15 = MSG_EXTERNAL_descriptionLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_15;
  } else {
    i18n_15 = $localize`:@@descriptionLabel␟4a22c6843133f0b0d7dc0d28f864f2f90c1de7ad␟6996799422725544865:Description:`;
  }
  let i18n_16;
  if (false) {
    const MSG_EXTERNAL_featuresLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_16 = goog.getMsg(" Features: ");
    i18n_16 = MSG_EXTERNAL_featuresLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_16;
  } else {
    i18n_16 = $localize`:@@featuresLabel␟048b3adb78b9aabee65dbb43d9c5aadcda49015f␟1939786999396738714: Features: `;
  }
  let i18n_17;
  if (false) {
    const MSG_EXTERNAL_mapIdPlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_17 = goog.getMsg("Map SVG ID selector e.g. area-01.10-status");
    i18n_17 = MSG_EXTERNAL_mapIdPlaceholder$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_17;
  } else {
    i18n_17 = $localize`:@@mapIdPlaceholder␟8936f99965a07edd4b09a0e4120f4dd5de79604d␟609514156045819245:Map SVG ID selector e.g. area-01.10-status`;
  }
  let i18n_18;
  if (false) {
    const MSG_EXTERNAL_mapIdLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_18 = goog.getMsg("Map ID:");
    i18n_18 = MSG_EXTERNAL_mapIdLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_18;
  } else {
    i18n_18 = $localize`:@@mapIdLabel␟46a8087017d0d929ed6d398ba5d3a5ea1be7ab9b␟1613414518051599973:Map ID:`;
  }
  let i18n_19;
  if (false) {
    const MSG_EXTERNAL_imagesLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_19 = goog.getMsg("Images:");
    i18n_19 = MSG_EXTERNAL_imagesLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_MODAL_COMPONENT_TS_19;
  } else {
    i18n_19 = $localize`:@@imagesLabel␟e5d9e00faa06714d7671b164cad364b26f4c585b␟5137125764814732349:Images:`;
  }
  return [["load_state", ""], ["auto", "matAutocomplete"], ["chipList", ""], i18n_0, i18n_2, i18n_3, i18n_5, i18n_6, i18n_8, i18n_10, i18n_12, i18n_13, i18n_14, i18n_15, i18n_16, i18n_18, i18n_19, ["btn", "", "icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "max-h-[65vh] overflow-y-auto overflow-x-hidden p-4", 4, "ngIf", "ngIfElse"], ["class", "p-2 flex justify-end border-t border-base-200", 4, "ngIf"], ["btn", "", "icon", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "overflow-y-auto", "overflow-x-hidden", "p-4"], ["system", "", "class", "flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]", 3, "formGroup", 4, "ngIf"], ["system", "", 1, "flex", "flex-col", "w-[36rem]", "max-w-[calc(100vw-4rem)]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "space-x-2"], ["class", "flex flex-col flex-1", 4, "ngIf"], [1, "flex", "space-x-2", 3, "formGroup"], [1, "flex-1", "flex", "flex-col", "space-y-2"], ["for", "setup", 1, "flex", "items-center"], ["matTooltip", "Time before a meeting needed for setup and preparation for the upcoming meeting", 1, "ml-2"], ["name", "setup", "formControlName", "setup", 3, "min"], ["for", "breakdown", 1, "flex", "items-center"], ["matTooltip", "Time after a meeting needed for cleaning and preparation for next meeting", 1, "ml-2"], ["name", "breakdown", "formControlName", "breakdown", 3, "min"], [1, "flex", "flex-col"], ["for", "timezone"], ["appearance", "outline"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", "placeholder", "Room timezone", 3, "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], ["for", "zone"], ["formControlName", "zone", "placeholder", "Select Level"], [3, "value"], [1, "flex", "flex-col", "flex-1"], ["for", "system-name"], ["matInput", "", "name", "system-name", "placeholder", i18n_1, "formControlName", "name", "required", ""], [4, "ngIf"], ["for", "system-email"], ["matInput", "", "name", "system-email", "placeholder", i18n_4, "formControlName", "email"], ["for", "display-name"], ["matInput", "", "name", "display-name", "placeholder", i18n_7, "formControlName", "display_name"], ["for", "code-name"], ["matInput", "", "name", "code-name", "placeholder", i18n_9, "formControlName", "code"], ["for", "capacity"], ["matInput", "", "name", "capacity", "type", "number", "placeholder", i18n_11, "formControlName", "capacity"], ["name", "bookable", "formControlName", "bookable"], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Description", "formControlName", "description"], ["aria-label", "Room features"], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New feature...", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed", "selectable", "removable"], ["matChipRemove", ""], ["for", "map_id"], ["matInput", "", "name", "map_id", "placeholder", i18n_17, "formControlName", "map_id"], [3, "disabled"], ["for", "images"], ["name", "images", "formControlName", "images"], [1, "p-2", "flex", "justify-end", "border-t", "border-base-200"], ["btn", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["diameter", "32"], [1, "mt-4"]];
}, template: function RoomModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RoomModalComponent_button_3_Template, 3, 0, "button", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, RoomModalComponent_main_4_Template, 2, 1, "main", 18)(5, RoomModalComponent_footer_5_Template, 3, 0, "footer", 19)(6, RoomModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r10 = \u0275\u0275reference(7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.form.value.id ? "Edit" : "Add", " Room");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r10);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MatFormField, MatError, MatPrefix, MatInput, MatSelect, MatOption, MatCheckbox, MatTooltip, MatProgressSpinner, MatDialogClose, MatAutocomplete, MatAutocompleteTrigger, FormGroupDirective, FormControlName, DurationFieldComponent, ImageListFieldComponent, IconComponent, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, AsyncPipe], styles: ["\n\nmat-checkbox[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n  margin-bottom: 1.5em;\n}\n@media screen and (max-width: 640px) {\n  mat-checkbox[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=room-modal.component.css.map */"] });
var RoomModalComponent = _RoomModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomModalComponent, { className: "RoomModalComponent", filePath: "apps/concierge/src/app/room-manager/room-modal.component.ts", lineNumber: 363 });
})();

// apps/concierge/src/app/room-manager/room-alert-modal.component.ts
function RoomAlertModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function RoomAlertModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 8)(1, "label", 9);
    \u0275\u0275i18n(2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 10)(4, "mat-select", 11)(5, "mat-option", 12);
    \u0275\u0275text(6, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 13);
    \u0275\u0275text(8, "Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 14);
    \u0275\u0275text(10, "Warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 15);
    \u0275\u0275text(12, "Closed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "label", 16);
    \u0275\u0275i18n(14, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-form-field", 10);
    \u0275\u0275element(16, "textarea", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
  }
}
function RoomAlertModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 18)(1, "button", 19);
    \u0275\u0275listener("click", function RoomAlertModalComponent_footer_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd()();
  }
}
function RoomAlertModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "mat-spinner", 21);
    \u0275\u0275elementStart(2, "p", 22);
    \u0275\u0275text(3, "Saving room...");
    \u0275\u0275elementEnd()();
  }
}
var _RoomAlertModalComponent = class _RoomAlertModalComponent {
  constructor(_data, _dialog_ref, _org) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this._org = _org;
    this.loading = false;
    this.room = this._data.room;
    this.form = new FormGroup({
      status: new FormControl(""),
      message: new FormControl("")
    });
    this.form.patchValue(this.room.alert || {});
  }
  save() {
    return __async(this, null, function* () {
      this.loading = true;
      const metadata = yield showMetadata(this._org.organisation.id, "room_alerts").toPromise().catch((e) => {
        notifyError(`Error loading existing room alert details: ${e.message || e}`);
        this.loading = false;
        throw e;
      });
      const alert = this.form.getRawValue();
      if (alert.status === "") {
        delete metadata.details[this.room.id];
      } else {
        metadata.details[this.room.id] = [alert.status, alert.message];
      }
      yield updateMetadata(this._org.organisation.id, {
        name: "room_alerts",
        details: metadata.details,
        editors: metadata.editors || [],
        description: "Details for room alerts"
      }).toPromise().catch((e) => {
        notifyError(`Error saving room alert details: ${e.message || e}`);
        this.loading = false;
        throw e;
      });
      this._dialog_ref.close(true);
    });
  }
};
_RoomAlertModalComponent.\u0275fac = function RoomAlertModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomAlertModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(OrganisationService));
};
_RoomAlertModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomAlertModalComponent, selectors: [["room-alert-modal"]], decls: 8, vars: 5, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_statusLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_ALERT_MODAL_COMPONENT_TS_0 = goog.getMsg("Status");
    i18n_0 = MSG_EXTERNAL_statusLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_ALERT_MODAL_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:@@statusLabel␟81b97b8ea996ad1e4f9fca8415021850214884b1␟5611592591303869712:Status`;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_messageLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_ALERT_MODAL_COMPONENT_TS_1 = goog.getMsg("Message");
    i18n_1 = MSG_EXTERNAL_messageLabel$$APPS_CONCIERGE_SRC_APP_ROOM_MANAGER_ROOM_ALERT_MODAL_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:@@messageLabel␟ccac601bf473fa28c9ac46794f1cd40542f74347␟8066608938393600549:Message`;
  }
  return [["load_state", ""], i18n_0, i18n_1, [1, "space-x-4"], ["btn", "", "icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "max-h-[65vh] overflow-y-auto overflow-x-hidden p-4 min-w-[24rem] flex flex-col", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "p-2 flex justify-end border-t border-base-200", 4, "ngIf"], ["btn", "", "icon", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "overflow-y-auto", "overflow-x-hidden", "p-4", "min-w-[24rem]", "flex", "flex-col", 3, "formGroup"], ["for", "status"], ["appearance", "outline"], ["name", "status", "formControlName", "status"], ["value", ""], ["value", "info"], ["value", "warn"], ["value", "closed"], ["for", "message"], ["matInput", "", "name", "message", "formControlName", "message"], [1, "p-2", "flex", "justify-end", "border-t", "border-base-200"], ["btn", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["diameter", "32"], [1, "mt-4"]];
}, template: function RoomAlertModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 3)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RoomAlertModalComponent_button_3_Template, 3, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, RoomAlertModalComponent_main_4_Template, 17, 1, "main", 5)(5, RoomAlertModalComponent_footer_5_Template, 3, 0, "footer", 6)(6, RoomAlertModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r3 = \u0275\u0275reference(7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Set Alert for ", ctx.room.display_name || ctx.room.name, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatInput, MatSelect, MatOption, MatProgressSpinner, MatDialogClose, FormGroupDirective, FormControlName, IconComponent] });
var RoomAlertModalComponent = _RoomAlertModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomAlertModalComponent, { className: "RoomAlertModalComponent", filePath: "apps/concierge/src/app/room-manager/room-alert-modal.component.ts", lineNumber: 55 });
})();

// apps/concierge/src/app/room-manager/room-management.service.ts
var _RoomManagementService = class _RoomManagementService {
  constructor(_org, _dialog, _settings) {
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.room_alerts = combineLatest([
      this._change,
      this._org.active_building
    ]).pipe(switchMap(() => showMetadata(this._org.organisation.id, "room_alerts")), map((_) => _.details || {}), shareReplay(1));
    this.room_list = combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]).pipe(filter(([b, r]) => !!b?.id), switchMap(([bld, region]) => combineLatest([
      querySystems({
        zone_id: (this._settings.get("app.use_region") ? region.id : "") || bld.id,
        limit: 2500
      }).pipe(map(({ data }) => data), catchError(() => of([]))),
      this.room_alerts
    ])), map(([list, alerts]) => {
      for (const id in alerts) {
        const [status, message] = alerts[id];
        list.find((_) => _.id === id).alert = {
          status,
          message
        };
      }
      return list.filter((_) => this._org.levelWithID(_.zones)).sort((a, b) => a.name.localeCompare(b.name));
    }), shareReplay(1));
    this.filtered_rooms = combineLatest([
      this.room_list,
      this._options
    ]).pipe(map(([list, options]) => {
      if (options.zones?.length) {
        list = list.filter((_) => options.zones.find((z) => _.zones.includes(z)));
      }
      if (options.search) {
        list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
      }
      return list;
    }));
  }
  setFilters(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  setSearchString(search) {
    this._options.next(__spreadProps(__spreadValues({}, this._options.getValue()), { search }));
  }
  editRoom(room = new PlaceSystem()) {
    const ref = this._dialog.open(RoomModalComponent, { data: { room } });
    ref.afterClosed().subscribe((data) => {
      if (data)
        setTimeout(() => this._change.next(Date.now()), 300);
    });
  }
  setRoomAlert(room) {
    if (!room)
      return;
    const ref = this._dialog.open(RoomAlertModalComponent, {
      data: { room }
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        setTimeout(() => this._change.next(Date.now()), 300);
    });
  }
};
_RoomManagementService.\u0275fac = function RoomManagementService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomManagementService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(SettingsService));
};
_RoomManagementService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoomManagementService, factory: _RoomManagementService.\u0275fac, providedIn: "root" });
var RoomManagementService = _RoomManagementService;

// apps/concierge/src/app/room-manager/room-manager-topbar.component.ts
function RoomManagerTopbarComponent_mat_option_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 14);
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
function RoomManagerTopbarComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10)(1, "div", 11);
    \u0275\u0275template(2, RoomManagerTopbarComponent_mat_option_11_div_2_Template, 5, 3, "div", 12);
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
var _RoomManagerTopbarComponent = class _RoomManagerTopbarComponent extends AsyncHandler {
  get building() {
    return this._org.building;
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  get root_zone() {
    return (this.use_region ? this._org.region.id : "") || this._org.building.id;
  }
  constructor(_manager, _org, _route, _router, _dialog, _settings) {
    super();
    this._manager = _manager;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    this._settings = _settings;
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.filters = this._manager.options;
    this.setFilters = (filters) => this._manager.setFilters(filters);
    this.setSearch = (str) => this._manager.setSearchString(str);
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
    };
    this.newRoom = () => this._manager.editRoom();
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "room" }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => __async(this, null, function* () {
        if (params.has("zone_ids")) {
          const zone_list = (params.get("zone_ids") || "").split(",");
          const zones = zone_list.filter((z) => z);
          this._manager.setFilters({ zones });
        }
      })));
      this.setSearch("");
    });
  }
};
_RoomManagerTopbarComponent.\u0275fac = function RoomManagerTopbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomManagerTopbarComponent)(\u0275\u0275directiveInject(RoomManagementService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService));
};
_RoomManagerTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomManagerTopbarComponent, selectors: [["room-manager-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 6, consts: [[1, "flex", "items-center", "px-8", "pt-4", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-2"], [3, "modelChange"], ["btn", "", 1, "w-40", 3, "click"], [1, "flex", "items-center", "bg-base-100", "h-20", "px-8", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["placeholder", "All Levels", "multiple", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Room Restrictions", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function RoomManagerTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
    \u0275\u0275text(2, "Room Management");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 2);
    \u0275\u0275elementStart(4, "searchbar", 3);
    \u0275\u0275listener("modelChange", function RoomManagerTopbarComponent_Template_searchbar_modelChange_4_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function RoomManagerTopbarComponent_Template_button_click_5_listener() {
      return ctx.newRoom();
    });
    \u0275\u0275text(6, "New Room");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "mat-form-field", 6)(9, "mat-select", 7);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275listener("ngModelChange", function RoomManagerTopbarComponent_Template_mat_select_ngModelChange_9_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275template(11, RoomManagerTopbarComponent_mat_option_11_Template, 5, 3, "mat-option", 8);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "div", 2);
    \u0275\u0275elementStart(14, "button", 9);
    \u0275\u0275listener("click", function RoomManagerTopbarComponent_Template_button_click_14_listener() {
      return ctx.manageRestrictions();
    });
    \u0275\u0275elementStart(15, "app-icon");
    \u0275\u0275text(16, "lock_open");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", (tmp_0_0 = \u0275\u0275pipeBind1(10, 2, ctx.filters)) == null ? null : tmp_0_0.zones);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(12, 4, ctx.levels));
  }
}, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, SearchbarComponent, MatFormField, MatSelect, MatOption, MatTooltip, MatRipple, IconComponent, AsyncPipe, BuildingPipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=room-manager-topbar.component.css.map */"] });
var RoomManagerTopbarComponent = _RoomManagerTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomManagerTopbarComponent, { className: "RoomManagerTopbarComponent", filePath: "apps/concierge/src/app/room-manager/room-manager-topbar.component.ts", lineNumber: 65 });
})();

// apps/concierge/src/app/room-manager/room-list.component.ts
var _c0 = (a0) => ({ key: "display_name", name: "Room Name", content: a0 });
var _c1 = (a0) => ({ key: "zones", name: "Level", size: "10rem", content: a0 });
var _c2 = () => ({ key: "capacity", name: "Capacity", size: "6rem" });
var _c3 = () => ({ key: "type", name: "Room Type", size: "8rem" });
var _c4 = (a0) => ({ key: "bookable", name: "Bookable", size: "5.5rem", content: a0, sortable: false });
var _c5 = (a0) => ({ key: "alert", name: "Alert", size: "5.5rem", content: a0 });
var _c6 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function RoomListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function RoomListComponent_ng_template_3_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const data_r4 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function RoomListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "level");
    \u0275\u0275pipe(3, "level");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = \u0275\u0275pipeBind1(2, 1, data_r5)) == null ? null : tmp_7_0.display_name) || ((tmp_7_0 = \u0275\u0275pipeBind1(3, 3, data_r5)) == null ? null : tmp_7_0.name), " ");
  }
}
function RoomListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "app-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275classProp("bg-error", !data_r6)("bg-success", data_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r6 ? "done" : "close");
  }
}
function RoomListComponent_ng_template_9_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "app-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r7 = \u0275\u0275nextContext().data;
    \u0275\u0275classProp("bg-warning", data_r7.status === "warn")("bg-error", data_r7.status === "closed")("bg-info", data_r7.status === "info");
    \u0275\u0275property("matTooltip", data_r7.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r7.status === "warn" ? "warning" : data_r7.status === "info" ? "info" : "close");
  }
}
function RoomListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RoomListComponent_ng_template_9_div_0_Template, 3, 8, "div", 14);
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275property("ngIf", data_r7);
  }
}
function RoomListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 17)(2, "app-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "mat-menu", null, 5)(6, "button", 18);
    \u0275\u0275listener("click", function RoomListComponent_ng_template_11_Template_button_click_6_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editRoom(row_r9));
    });
    \u0275\u0275elementStart(7, "div", 19)(8, "app-icon", 20);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Edit Room");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 18);
    \u0275\u0275listener("click", function RoomListComponent_ng_template_11_Template_button_click_12_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setRoomAlert(row_r9));
    });
    \u0275\u0275elementStart(13, "div", 19)(14, "app-icon", 20);
    \u0275\u0275text(15, "notification_important");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Set Alert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "a", 21);
    \u0275\u0275pipe(19, "sanitize");
    \u0275\u0275elementStart(20, "div", 19)(21, "app-icon", 22);
    \u0275\u0275text(22, "tv_remote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "View Control Panel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    const menu_r10 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(17);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(19, 2, row_r9.support_url || ctx_r2.control_path + row_r9.id, "url"), \u0275\u0275sanitizeUrl);
  }
}
var _RoomListComponent = class _RoomListComponent {
  get control_path() {
    return this._settings.get("app.control_path") || "/av_control/#/tabbed/";
  }
  constructor(_manager, _clipboard, _settings) {
    this._manager = _manager;
    this._clipboard = _clipboard;
    this._settings = _settings;
    this.rooms = this._manager.filtered_rooms;
    this.editRoom = (room) => this._manager.editRoom(room);
    this.setRoomAlert = (room) => this._manager.setRoomAlert(room);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess("Room ID copied to clipboard.");
    };
  }
};
_RoomListComponent.\u0275fac = function RoomListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomListComponent)(\u0275\u0275directiveInject(RoomManagementService), \u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(SettingsService));
};
_RoomListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomListComponent, selectors: [["room-list"]], decls: 13, vars: 23, consts: [["name_template", ""], ["level_template", ""], ["bool_template", ""], ["alert_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No rooms for selected level or building", 1, "min-w-[48rem]", "block", "text-sm", 3, "data", "columns", "sortable"], [1, "w-full", "h-20"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "text-[0.625rem]", "opacity-30", "font-mono"], [1, "p-4"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "text-white", "mx-auto"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl text-white mx-auto", 3, "bg-warning", "bg-error", "bg-info", "matTooltip", 4, "ngIf"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "text-white", "mx-auto", 3, "matTooltip"], [1, "mx-auto"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["mat-menu-item", "", "target", "_blank", "ref", "noopener noreferrer", 3, "href"], ["className", "material-symbols-rounded", 1, "text-xl"]], template: function RoomListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "simple-table", 7)(2, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RoomListComponent_ng_template_3_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, RoomListComponent_ng_template_5_Template, 4, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(7, RoomListComponent_ng_template_7_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(9, RoomListComponent_ng_template_9_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(11, RoomListComponent_ng_template_11_Template, 25, 5, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const name_template_r11 = \u0275\u0275reference(4);
    const level_template_r12 = \u0275\u0275reference(6);
    const bool_template_r13 = \u0275\u0275reference(8);
    const alert_template_r14 = \u0275\u0275reference(10);
    const action_template_r15 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.rooms)("columns", \u0275\u0275pureFunction7(15, _c7, \u0275\u0275pureFunction1(3, _c0, name_template_r11), \u0275\u0275pureFunction1(5, _c1, level_template_r12), \u0275\u0275pureFunction0(7, _c2), \u0275\u0275pureFunction0(8, _c3), \u0275\u0275pureFunction1(9, _c4, bool_template_r13), \u0275\u0275pureFunction1(11, _c5, alert_template_r14), \u0275\u0275pureFunction1(13, _c6, action_template_r15)))("sortable", true);
  }
}, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, SimpleTableComponent, SanitizePipe, LevelPipe] });
var RoomListComponent = _RoomListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomListComponent, { className: "RoomListComponent", filePath: "apps/concierge/src/app/room-manager/room-list.component.ts", lineNumber: 145 });
})();

// apps/concierge/src/app/room-manager/room-manager.component.ts
var _c02 = ["app-room-manager", ""];
var _RoomManagerComponent = class _RoomManagerComponent {
};
_RoomManagerComponent.\u0275fac = function RoomManagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomManagerComponent)();
};
_RoomManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomManagerComponent, selectors: [["", "app-room-manager", ""]], attrs: _c02, decls: 4, vars: 0, consts: [[1, "relative", "overflow-hidden", "flex", "flex-col"], [1, "block", "w-full"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]], template: function RoomManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sidebar");
    \u0275\u0275elementStart(1, "main", 0);
    \u0275\u0275element(2, "room-manager-topbar", 1)(3, "room-list", 2);
    \u0275\u0275elementEnd();
  }
}, dependencies: [SidebarComponent, RoomManagerTopbarComponent, RoomListComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  background: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=room-manager.component.css.map */"] });
var RoomManagerComponent = _RoomManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomManagerComponent, { className: "RoomManagerComponent", filePath: "apps/concierge/src/app/room-manager/room-manager.component.ts", lineNumber: 35 });
})();

// apps/concierge/src/app/room-manager/new-room-manager.component.ts
var _c03 = ["app-new-room-manager", ""];
var _NewRoomManagerComponent = class _NewRoomManagerComponent {
};
_NewRoomManagerComponent.\u0275fac = function NewRoomManagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewRoomManagerComponent)();
};
_NewRoomManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewRoomManagerComponent, selectors: [["", "app-new-room-manager", ""]], attrs: _c03, decls: 6, vars: 0, consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "block", "w-full"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]], template: function NewRoomManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "room-manager-topbar", 2)(5, "room-list", 3);
    \u0275\u0275elementEnd()();
  }
}, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, RoomManagerTopbarComponent, RoomListComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=new-room-manager.component.css.map */"] });
var NewRoomManagerComponent = _NewRoomManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewRoomManagerComponent, { className: "NewRoomManagerComponent", filePath: "apps/concierge/src/app/room-manager/new-room-manager.component.ts", lineNumber: 41 });
})();

// apps/concierge/src/app/room-manager/room-manager.module.ts
var ROUTES = [
  { path: "", component: RoomManagerComponent },
  { path: "new", component: NewRoomManagerComponent }
];
var _RoomManagerModule = class _RoomManagerModule {
};
_RoomManagerModule.\u0275fac = function RoomManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomManagerModule)();
};
_RoomManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RoomManagerModule });
_RoomManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  SharedSpacesModule,
  SharedUsersModule,
  MatChipsModule,
  RouterModule.forChild(ROUTES)
] });
var RoomManagerModule = _RoomManagerModule;
export {
  RoomManagerModule
};
//# sourceMappingURL=room-manager.module-FCDYIYHT.js.map
