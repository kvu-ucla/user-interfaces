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
  CounterComponent,
  DefaultValueAccessor,
  DurationFieldComponent,
  ENTER,
  EncryptionLevel,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  ImageListFieldComponent,
  LevelPipe,
  MAT_DIALOG_DATA,
  MatAutocomplete,
  MatAutocompleteTrigger,
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
  OrganisationService,
  PlaceSystem,
  RequiredValidator,
  Router,
  RouterModule,
  SPACE,
  SanitizePipe,
  SearchbarComponent,
  SettingsService,
  SettingsToggleComponent,
  SharedSpacesModule,
  SharedUsersModule,
  SidebarComponent,
  SimpleTableComponent,
  TIMEZONES_IANA,
  TranslatePipe,
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
  i18n,
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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
} from "./chunk-PFHWBA7Z.js";

// apps/concierge/src/app/room-manager/room-modal.component.ts
function RoomModalComponent_div_5_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r2 = ctx.$implicit;
    \u0275\u0275property("value", level_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r2.display_name || level_r2.name, " ");
  }
}
function RoomModalComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 18)(7, "mat-select", 24);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275template(9, RoomModalComponent_div_5_mat_option_9_Template, 2, 2, "mat-option", 21);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.form.controls.zone.invalid && ctx_r2.form.controls.zone.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "RESOURCE.LEVEL"), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "APP.CONCIERGE.ROOMS_SELECT_LEVEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(10, 10, ctx_r2.levels));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "APP.CONCIERGE.ROOMS_LEVEL_REQUIRED"));
  }
}
function RoomModalComponent_div_7_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.NAME_REQUIRED"), " ");
  }
}
function RoomModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 18);
    \u0275\u0275element(7, "input", 28);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275template(9, RoomModalComponent_div_7_mat_error_9_Template, 3, 3, "mat-error", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.form.controls.name.invalid && ctx_r2.form.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.NAME"), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "FORM.NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.form.controls.name.invalid);
  }
}
function RoomModalComponent_div_8_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.EMAIL_REQUIRED"), " ");
  }
}
function RoomModalComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 18);
    \u0275\u0275element(5, "input", 31);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275template(7, RoomModalComponent_div_8_mat_error_7_Template, 3, 3, "mat-error", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.form.controls.email.invalid && ctx_r2.form.controls.email.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.EMAIL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "FORM.EMAIL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.form.controls.email.invalid);
  }
}
function RoomModalComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "label", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 18);
    \u0275\u0275element(5, "input", 33);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "FORM.DISPLAY_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "FORM.DISPLAY_NAME"));
  }
}
function RoomModalComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "label", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 18);
    \u0275\u0275element(5, "input", 35);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.ROOMS_CODE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "APP.CONCIERGE.ROOMS_CODE"));
  }
}
function RoomModalComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "label", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-counter", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.form.controls.capacity.invalid && ctx_r2.form.controls.capacity.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.CAPACITY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("max", 256);
  }
}
function RoomModalComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "settings-toggle", 39);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 1, "COMMON.BOOKABLE"));
  }
}
function RoomModalComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 18);
    \u0275\u0275element(5, "textarea", 41);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "COMMON.DESCRIPTION"));
  }
}
function RoomModalComponent_div_33_mat_chip_row_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 45);
    \u0275\u0275listener("removed", function RoomModalComponent_div_33_mat_chip_row_8_Template_mat_chip_row_removed_0_listener() {
      const feature_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFeature(feature_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "app-icon", 46);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r6 = ctx.$implicit;
    \u0275\u0275property("selectable", true)("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r6, " ");
  }
}
function RoomModalComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 18)(5, "mat-chip-grid", 42, 1);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275template(8, RoomModalComponent_div_33_mat_chip_row_8_Template, 4, 3, "mat-chip-row", 43);
    \u0275\u0275elementStart(9, "input", 44);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function RoomModalComponent_div_33_Template_input_matChipInputTokenEnd_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addFeature($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const chipList_r7 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r2.form.controls.features.invalid && ctx_r2.form.controls.features.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "COMMON.FEATURES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("aria-label", \u0275\u0275pipeBind1(7, 11, "COMMON.FEATRUES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.feature_list);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 13, "COMMON.FEATURES"))("matChipInputFor", chipList_r7)("matChipInputSeparatorKeyCodes", ctx_r2.separators)("matChipInputAddOnBlur", true);
  }
}
function RoomModalComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 18);
    \u0275\u0275element(5, "input", 48);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "EXPLORE.MAP_ID_PLACEHOLDER"));
  }
}
function RoomModalComponent_mat_option_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r8 = ctx.$implicit;
    \u0275\u0275property("value", tz_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tz_r8, " ");
  }
}
function RoomModalComponent_mat_option_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 49);
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
function RoomModalComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "image-list-field", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.IMAGE"));
  }
}
var RoomModalComponent = class _RoomModalComponent extends AsyncHandler {
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
        return notifyError(i18n("FORM.INVALID_FIELDS", {
          field_list: getInvalidFields(this.form).join(", ")
        }));
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
  static {
    this.\u0275fac = function RoomModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomModalComponent, selectors: [["room-form-modal"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 49, vars: 44, consts: [["auto", "matAutocomplete"], ["chipList", ""], [3, "confirm", "heading", "loading"], ["system", "", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "space-x-2"], ["class", "flex flex-col flex-1", 4, "ngIf"], [1, "flex", "space-x-2", 3, "formGroup"], [1, "flex-1", "flex", "flex-col", "space-y-2"], ["for", "setup", 1, "flex", "items-center"], [1, "ml-2", 3, "matTooltip"], ["name", "setup", "formControlName", "setup", 3, "min"], ["for", "breakdown", 1, "flex", "items-center"], ["name", "breakdown", "formControlName", "breakdown", 3, "min"], [1, "flex", "space-x-2", "mb-4"], ["class", "flex flex-col pt-4 flex-1", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "timezone"], ["appearance", "outline"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", 3, "placeholder", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], ["for", "zone"], ["formControlName", "zone", 3, "placeholder"], [3, "value"], [1, "flex", "flex-col", "flex-1"], ["for", "system-name"], ["matInput", "", "name", "system-name", "formControlName", "name", "required", "", 3, "placeholder"], [4, "ngIf"], ["for", "system-email"], ["matInput", "", "name", "system-email", "formControlName", "email", 3, "placeholder"], ["for", "display-name"], ["matInput", "", "name", "display-name", "formControlName", "display_name", 3, "placeholder"], ["for", "code-name"], ["matInput", "", "name", "code-name", "formControlName", "code", 3, "placeholder"], ["for", "capacity"], ["name", "capacity", "formControlName", "capacity", 1, "w-full", 3, "min", "max"], [1, "flex", "flex-col", "pt-4", "flex-1"], ["formControlName", "bookable", 3, "name"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], [3, "aria-label"], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed", "selectable", "removable"], ["matChipRemove", ""], ["for", "map_id"], ["matInput", "", "name", "map_id", "formControlName", "map_id", 3, "placeholder"], [3, "disabled"], ["for", "images"], ["name", "images", "formControlName", "images"]], template: function RoomModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 2);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275listener("confirm", function RoomModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.save());
        });
        \u0275\u0275elementStart(4, "form", 3);
        \u0275\u0275template(5, RoomModalComponent_div_5_Template, 14, 14, "div", 4);
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275template(7, RoomModalComponent_div_7_Template, 10, 9, "div", 6)(8, RoomModalComponent_div_8_Template, 8, 9, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275template(10, RoomModalComponent_div_10_Template, 7, 6, "div", 6)(11, RoomModalComponent_div_11_Template, 7, 6, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "label", 9);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementStart(17, "app-icon", 10);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275text(19, " info_outline ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "a-duration-field", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 8)(22, "label", 12);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementStart(25, "app-icon", 10);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275text(27, " info_outline ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(28, "a-duration-field", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 14);
        \u0275\u0275template(30, RoomModalComponent_div_30_Template, 5, 7, "div", 6)(31, RoomModalComponent_div_31_Template, 3, 3, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, RoomModalComponent_div_32_Template, 7, 6, "div", 4)(33, RoomModalComponent_div_33_Template, 11, 15, "div", 4)(34, RoomModalComponent_div_34_Template, 7, 6, "div", 4);
        \u0275\u0275elementStart(35, "div", 16)(36, "label", 17);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-form-field", 18)(40, "app-icon", 19);
        \u0275\u0275text(41, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "input", 20);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-autocomplete", null, 0);
        \u0275\u0275template(46, RoomModalComponent_mat_option_46_Template, 2, 2, "mat-option", 21)(47, RoomModalComponent_mat_option_47_Template, 3, 4, "mat-option", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(48, RoomModalComponent_div_48_Template, 5, 3, "div", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const auto_r9 = \u0275\u0275reference(45);
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 26, ctx.form.value.id ? "APP.CONCIERGE.ROOMS_EDIT" : "APP.CONCIERGE.ROOMS_NEW"))("loading", \u0275\u0275pipeBind1(2, 28, ctx.loading) ? \u0275\u0275pipeBind1(3, 30, "APP.CONCIERGE.ROOMS_SAVING") : "");
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.zone);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.form.controls.name);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.email);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.form.controls.display_name);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.display_name);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.settings_form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 32, "APP.CONCIERGE.ROOMS_DEFAULT_SETUP"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(18, 34, "APP.CONCIERGE.ROOMS_SETUP_INFO"));
        \u0275\u0275advance(3);
        \u0275\u0275property("min", 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 36, "APP.CONCIERGE.ROOMS_DEFAULT_BREAKDOWN"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(26, 38, "APP.CONCIERGE.ROOMS_BREAKDOWN_INFO"));
        \u0275\u0275advance(3);
        \u0275\u0275property("min", 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.form.controls.capacity);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.bookable);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.description);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.features);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.map_id);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 40, "COMMON.TIMEZONE"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(43, 42, "COMMON.TIMEZONE"))("matAutocomplete", auto_r9);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.filtered_timezones);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.timezones.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.images);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MatFormField, MatError, MatPrefix, MatInput, MatSelect, MatOption, MatTooltip, MatAutocomplete, MatAutocompleteTrigger, FormGroupDirective, FormControlName, CounterComponent, DurationFieldComponent, ImageListFieldComponent, IconComponent, SettingsToggleComponent, FullscreenModalShellComponent, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, AsyncPipe, TranslatePipe], styles: ["\n\nmat-checkbox[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n  margin-bottom: 1.5em;\n}\n@media screen and (max-width: 640px) {\n  mat-checkbox[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=room-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomModalComponent, { className: "RoomModalComponent", filePath: "apps/concierge/src/app/room-manager/room-modal.component.ts", lineNumber: 360 });
})();

// apps/concierge/src/app/room-manager/room-alert-modal.component.ts
var _c0 = (a0) => ({ name: a0 });
function RoomAlertModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 5)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function RoomAlertModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 6)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 8)(5, "mat-select", 9)(6, "mat-option", 10);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 11);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 12);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 13);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "label", 14);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 8);
    \u0275\u0275element(22, "textarea", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "COMMON.STATUS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "APP.CONCIERGE.ROOMS_ALERT_TYPE_NONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "APP.CONCIERGE.ROOMS_ALERT_TYPE_INFO"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, "APP.CONCIERGE.ROOMS_ALERT_TYPE_WARNING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 15, "APP.CONCIERGE.ROOMS_ALERT_TYPE_CLOSED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 17, "APP.CONCIERGE.ROOMS_ALERT_MSG"));
  }
}
function RoomAlertModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 16)(1, "button", 17);
    \u0275\u0275listener("click", function RoomAlertModalComponent_footer_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
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
function RoomAlertModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-spinner", 19);
    \u0275\u0275elementStart(2, "p", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.ROOMS_SAVING"), " ");
  }
}
var RoomAlertModalComponent = class _RoomAlertModalComponent {
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
        notifyError(i18n("APP.CONCIERGE.ROOMS_ALERT_LOAD_ERROR", {
          error: e.message || e
        }));
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
        notifyError(i18n("APP.CONCIERGE.ROOMS_ALERT_SAVE_ERROR", {
          error: e.message || e
        }));
        this.loading = false;
        throw e;
      });
      notifySuccess(i18n("APP.CONCIERGE.ROOMS_ALERT_SAVE_SUCCESS"));
      this._dialog_ref.close(true);
    });
  }
  static {
    this.\u0275fac = function RoomAlertModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomAlertModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomAlertModalComponent, selectors: [["room-alert-modal"]], standalone: false, decls: 9, vars: 10, consts: [["load_state", ""], [1, "space-x-4"], ["btn", "", "icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "max-h-[65vh] overflow-y-auto overflow-x-hidden p-4 min-w-[24rem] flex flex-col", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "p-2 flex justify-end border-t border-base-200", 4, "ngIf"], ["btn", "", "icon", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "overflow-y-auto", "overflow-x-hidden", "p-4", "min-w-[24rem]", "flex", "flex-col", 3, "formGroup"], ["for", "status"], ["appearance", "outline"], ["name", "status", "formControlName", "status"], ["value", ""], ["value", "info"], ["value", "warn"], ["value", "closed"], ["for", "message"], ["matInput", "", "name", "message", "formControlName", "message"], [1, "p-2", "flex", "justify-end", "border-t", "border-base-200"], ["btn", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["diameter", "32"], [1, "mt-4"]], template: function RoomAlertModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h2");
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, RoomAlertModalComponent_button_4_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, RoomAlertModalComponent_main_5_Template, 23, 19, "main", 3)(6, RoomAlertModalComponent_footer_6_Template, 4, 3, "footer", 4)(7, RoomAlertModalComponent_ng_template_7_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r3 = \u0275\u0275reference(8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 5, "APP.CONCIERGE.ROOMS_ALERT_HEADER", \u0275\u0275pureFunction1(8, _c0, ctx.room.display_name || ctx.room.name)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatInput, MatSelect, MatOption, MatProgressSpinner, MatDialogClose, FormGroupDirective, FormControlName, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomAlertModalComponent, { className: "RoomAlertModalComponent", filePath: "apps/concierge/src/app/room-manager/room-alert-modal.component.ts", lineNumber: 75 });
})();

// apps/concierge/src/app/room-manager/room-management.service.ts
var RoomManagementService = class _RoomManagementService {
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
  static {
    this.\u0275fac = function RoomManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomManagementService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(SettingsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoomManagementService, factory: _RoomManagementService.\u0275fac, providedIn: "root" });
  }
};

// apps/concierge/src/app/room-manager/room-manager-topbar.component.ts
function RoomManagerTopbarComponent_mat_option_14_div_2_Template(rf, ctx) {
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
function RoomManagerTopbarComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10)(1, "div", 11);
    \u0275\u0275template(2, RoomManagerTopbarComponent_mat_option_14_div_2_Template, 5, 3, "div", 12);
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
var RoomManagerTopbarComponent = class _RoomManagerTopbarComponent extends AsyncHandler {
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
  static {
    this.\u0275fac = function RoomManagerTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomManagerTopbarComponent)(\u0275\u0275directiveInject(RoomManagementService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomManagerTopbarComponent, selectors: [["room-manager-topbar"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 18, consts: [[1, "flex", "items-center", "px-8", "pt-4", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-2"], [3, "modelChange"], ["btn", "", 1, "w-40", 3, "click"], [1, "flex", "items-center", "bg-base-100", "h-20", "px-8", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["btn", "", "icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "rounded", "h-12", "w-12", 3, "click", "matTooltip"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function RoomManagerTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 2);
        \u0275\u0275elementStart(5, "searchbar", 3);
        \u0275\u0275listener("modelChange", function RoomManagerTopbarComponent_Template_searchbar_modelChange_5_listener($event) {
          return ctx.setSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 4);
        \u0275\u0275listener("click", function RoomManagerTopbarComponent_Template_button_click_6_listener() {
          return ctx.newRoom();
        });
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "mat-form-field", 6)(11, "mat-select", 7);
        \u0275\u0275pipe(12, "async");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275listener("ngModelChange", function RoomManagerTopbarComponent_Template_mat_select_ngModelChange_11_listener($event) {
          return ctx.updateZones($event);
        });
        \u0275\u0275template(14, RoomManagerTopbarComponent_mat_option_14_Template, 5, 3, "mat-option", 8);
        \u0275\u0275pipe(15, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(16, "div", 2);
        \u0275\u0275elementStart(17, "button", 9);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275listener("click", function RoomManagerTopbarComponent_Template_button_click_17_listener() {
          return ctx.manageRestrictions();
        });
        \u0275\u0275elementStart(19, "app-icon");
        \u0275\u0275text(20, "lock_open");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.ROOMS_HEADER"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "APP.CONCIERGE.ROOMS_ADD"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(12, 10, ctx.filters)) == null ? null : tmp_2_0.zones)("placeholder", \u0275\u0275pipeBind1(13, 12, "COMMON.LEVEL_ALL"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(15, 14, ctx.levels));
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(18, 16, "APP.CONCIERGE.ROOMS_BOOKING_RULES"));
      }
    }, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, SearchbarComponent, MatFormField, MatSelect, MatOption, MatTooltip, MatRipple, IconComponent, AsyncPipe, BuildingPipe, TranslatePipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=room-manager-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomManagerTopbarComponent, { className: "RoomManagerTopbarComponent", filePath: "apps/concierge/src/app/room-manager/room-manager-topbar.component.ts", lineNumber: 70 });
})();

// apps/concierge/src/app/room-manager/room-list.component.ts
var _c02 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "zones", name: a0, size: "10rem", content: a1 });
var _c2 = (a0) => ({ key: "capacity", name: a0, size: "6rem" });
var _c3 = (a0) => ({ key: "type", name: a0, size: "8rem" });
var _c4 = (a0, a1) => ({ key: "bookable", name: a0, size: "5.5rem", content: a1, sortable: false });
var _c5 = (a0, a1) => ({ key: "alert", name: a0, size: "5.5rem", content: a1 });
var _c6 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function RoomListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function RoomListComponent_ng_template_9_Template_button_click_0_listener() {
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
function RoomListComponent_ng_template_11_Template(rf, ctx) {
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
function RoomListComponent_ng_template_13_Template(rf, ctx) {
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
function RoomListComponent_ng_template_15_div_0_Template(rf, ctx) {
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
function RoomListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RoomListComponent_ng_template_15_div_0_Template, 3, 8, "div", 14);
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275property("ngIf", data_r7);
  }
}
function RoomListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 17)(2, "app-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "mat-menu", null, 5)(6, "button", 18);
    \u0275\u0275listener("click", function RoomListComponent_ng_template_17_Template_button_click_6_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editRoom(row_r9));
    });
    \u0275\u0275elementStart(7, "div", 19)(8, "app-icon", 20);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 18);
    \u0275\u0275listener("click", function RoomListComponent_ng_template_17_Template_button_click_13_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setRoomAlert(row_r9));
    });
    \u0275\u0275elementStart(14, "div", 19)(15, "app-icon", 20);
    \u0275\u0275text(16, "notification_important");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "a", 21);
    \u0275\u0275pipe(21, "sanitize");
    \u0275\u0275elementStart(22, "div", 19)(23, "app-icon", 22);
    \u0275\u0275text(24, "tv_remote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    const menu_r10 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 5, "APP.CONCIERGE.ROOMS_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 7, "APP.CONCIERGE.ROOMS_SET_ALERT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(21, 9, row_r9.support_url || ctx_r2.control_path + row_r9.id, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 12, "APP.CONCIERGE.ROOMS_VIEW_CONTROL"));
  }
}
var RoomListComponent = class _RoomListComponent {
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
        notifySuccess(i18n("APP.CONCIERGE.ROOMS_COPIED_ID"));
    };
  }
  static {
    this.\u0275fac = function RoomListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomListComponent)(\u0275\u0275directiveInject(RoomManagementService), \u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomListComponent, selectors: [["room-list"]], standalone: false, decls: 19, vars: 41, consts: [["name_template", ""], ["level_template", ""], ["bool_template", ""], ["alert_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No rooms for selected level or building", 1, "min-w-[48rem]", "block", "text-sm", 3, "data", "columns", "sortable"], [1, "w-full", "h-20"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "text-[0.625rem]", "opacity-30", "font-mono"], [1, "p-4"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "text-white", "mx-auto"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl text-white mx-auto", 3, "bg-warning", "bg-error", "bg-info", "matTooltip", 4, "ngIf"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "text-white", "mx-auto", 3, "matTooltip"], [1, "mx-auto", "p-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["mat-menu-item", "", "target", "_blank", "ref", "noopener noreferrer", 3, "href"], ["className", "material-symbols-rounded", 1, "text-xl"]], template: function RoomListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 6);
        \u0275\u0275element(1, "simple-table", 7);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275element(8, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, RoomListComponent_ng_template_9_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(11, RoomListComponent_ng_template_11_Template, 4, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(13, RoomListComponent_ng_template_13_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(15, RoomListComponent_ng_template_15_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(17, RoomListComponent_ng_template_17_Template, 28, 14, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const name_template_r11 = \u0275\u0275reference(10);
        const level_template_r12 = \u0275\u0275reference(12);
        const bool_template_r13 = \u0275\u0275reference(14);
        const alert_template_r14 = \u0275\u0275reference(16);
        const action_template_r15 = \u0275\u0275reference(18);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.rooms)("columns", \u0275\u0275pureFunction7(33, _c7, \u0275\u0275pureFunction2(15, _c02, \u0275\u0275pipeBind1(2, 3, "APP.CONCIERGE.ROOMS_NAME"), name_template_r11), \u0275\u0275pureFunction2(18, _c1, \u0275\u0275pipeBind1(3, 5, "RESOURCE.LEVEL"), level_template_r12), \u0275\u0275pureFunction1(21, _c2, \u0275\u0275pipeBind1(4, 7, "COMMON.CAPACITY")), \u0275\u0275pureFunction1(23, _c3, \u0275\u0275pipeBind1(5, 9, "APP.CONCIERGE.ROOMS_TYPE")), \u0275\u0275pureFunction2(25, _c4, \u0275\u0275pipeBind1(6, 11, "COMMON.BOOKABLE"), bool_template_r13), \u0275\u0275pureFunction2(28, _c5, \u0275\u0275pipeBind1(7, 13, "APP.CONCIERGE.ROOMS_ALERT"), alert_template_r14), \u0275\u0275pureFunction1(31, _c6, action_template_r15)))("sortable", true);
      }
    }, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, SimpleTableComponent, SanitizePipe, LevelPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomListComponent, { className: "RoomListComponent", filePath: "apps/concierge/src/app/room-manager/room-list.component.ts", lineNumber: 160 });
})();

// apps/concierge/src/app/room-manager/room-manager.component.ts
var _c03 = ["app-room-manager", ""];
var RoomManagerComponent = class _RoomManagerComponent {
  static {
    this.\u0275fac = function RoomManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomManagerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomManagerComponent, selectors: [["", "app-room-manager", ""]], standalone: false, attrs: _c03, decls: 4, vars: 0, consts: [[1, "relative", "overflow-hidden", "flex", "flex-col"], [1, "block", "w-full"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]], template: function RoomManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "sidebar");
        \u0275\u0275elementStart(1, "main", 0);
        \u0275\u0275element(2, "room-manager-topbar", 1)(3, "room-list", 2);
        \u0275\u0275elementEnd();
      }
    }, dependencies: [SidebarComponent, RoomManagerTopbarComponent, RoomListComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  background: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=room-manager.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomManagerComponent, { className: "RoomManagerComponent", filePath: "apps/concierge/src/app/room-manager/room-manager.component.ts", lineNumber: 36 });
})();

// apps/concierge/src/app/room-manager/new-room-manager.component.ts
var _c04 = ["app-new-room-manager", ""];
var NewRoomManagerComponent = class _NewRoomManagerComponent {
  static {
    this.\u0275fac = function NewRoomManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewRoomManagerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewRoomManagerComponent, selectors: [["", "app-new-room-manager", ""]], standalone: false, attrs: _c04, decls: 6, vars: 0, consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "block", "w-full"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]], template: function NewRoomManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1);
        \u0275\u0275element(4, "room-manager-topbar", 2)(5, "room-list", 3);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, RoomManagerTopbarComponent, RoomListComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=new-room-manager.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewRoomManagerComponent, { className: "NewRoomManagerComponent", filePath: "apps/concierge/src/app/room-manager/new-room-manager.component.ts", lineNumber: 42 });
})();

// apps/concierge/src/app/room-manager/room-manager.module.ts
var ROUTES = [
  { path: "", component: RoomManagerComponent },
  { path: "new", component: NewRoomManagerComponent }
];
var RoomManagerModule = class _RoomManagerModule {
  static {
    this.\u0275fac = function RoomManagerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomManagerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RoomManagerModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      UIModule,
      SharedSpacesModule,
      SharedUsersModule,
      MatChipsModule,
      RouterModule.forChild(ROUTES)
    ] });
  }
};
export {
  RoomManagerModule
};
//# sourceMappingURL=room-manager.module-PTKGGNY6.js.map
