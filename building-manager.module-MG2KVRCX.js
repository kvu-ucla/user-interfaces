import {
  AppSettingsModalComponent,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  BookingPanelSettingsModalComponent,
  Clipboard,
  CommonModule,
  ConciergeSettingsFormModalComponent,
  DefaultValueAccessor,
  DurationFieldComponent,
  EncryptionLevel,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  LevelPipe,
  MAT_DIALOG_DATA,
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatCheckbox,
  MatChipsModule,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
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
  PlaceSettings,
  PlaceZone,
  RouterModule,
  SettingsService,
  SharedSpacesModule,
  SharedUsersModule,
  SimpleTableComponent,
  TIMEZONES_IANA,
  TranslatePipe,
  UIModule,
  Validators,
  VisitorKioskSettingsFormModalComponent,
  WorkplaceSettingsFormModalComponent,
  __async,
  __spreadProps,
  __spreadValues,
  addSettings,
  addZone,
  authority,
  combineLatest,
  dump,
  getInvalidFields,
  i18n,
  load,
  map,
  notifyError,
  notifySuccess,
  openConfirmModal,
  querySettings,
  removeZone,
  showMetadata,
  updateMetadata,
  updateSettings,
  updateZone,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
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
} from "./chunk-6EJKW75I.js";

// apps/concierge/src/app/building-manager/building-form.component.ts
function BuildingFormComponent_form_0_div_1_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const region_r1 = ctx.$implicit;
    \u0275\u0275property("value", region_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", region_r1.display_name || region_r1.name, " ");
  }
}
function BuildingFormComponent_form_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 15);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-option", 16);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, BuildingFormComponent_form_0_div_1_mat_option_10_Template, 2, 2, "mat-option", 10);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "RESOURCE.REGION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "COMMON.REGION_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.default_parent);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "COMMON.NONE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(11, 11, ctx_r1.region_list));
  }
}
function BuildingFormComponent_form_0_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r3 = ctx.$implicit;
    \u0275\u0275property("value", tz_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r3);
  }
}
function BuildingFormComponent_form_0_mat_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
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
function BuildingFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275template(1, BuildingFormComponent_form_0_div_1_Template, 12, 13, "div", 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 4)(4, "label", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 6);
    \u0275\u0275element(8, "input", 7);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 4)(11, "label", 5);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 6)(15, "app-icon", 8);
    \u0275\u0275text(16, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 9);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-autocomplete", null, 0);
    \u0275\u0275template(21, BuildingFormComponent_form_0_mat_option_21_Template, 2, 2, "mat-option", 10)(22, BuildingFormComponent_form_0_mat_option_22_Template, 3, 4, "mat-option", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 4)(24, "label", 12);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-form-field", 6);
    \u0275\u0275element(28, "input", 13);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const auto_r4 = \u0275\u0275reference(20);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(2, 11, ctx_r1.region_list)) == null ? null : tmp_3_0.length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 13, "FORM.DISPLAY_NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 15, "FORM.DISPLAY_NAME"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 17, "COMMON.TIMEZONE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(18, 19, "COMMON.TIMEZONE"))("matAutocomplete", auto_r4);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.filtered_timezones);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.timezones.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 21, "COMMON.LOCATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(29, 23, "COMMON.LOCATION"));
  }
}
var BuildingFormComponent = class _BuildingFormComponent extends AsyncHandler {
  get default_parent() {
    return this._org.organisation.id;
  }
  constructor(_org) {
    super();
    this._org = _org;
    this.building = null;
    this.save = 0;
    this.loading = false;
    this.loadingChange = new EventEmitter();
    this.done = new EventEmitter();
    this.timezones = [];
    this.filtered_timezones = [];
    this.region_list = this._org.region_list;
    this.form = new FormGroup({
      id: new FormControl(""),
      parent_id: new FormControl(this._org.organisation.id, [
        Validators.required
      ]),
      display_name: new FormControl("", [Validators.required]),
      timezone: new FormControl(Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || ""),
      location: new FormControl("")
    });
  }
  ngOnInit() {
    this._updateTimezoneList();
    this.subscription("tz-change", this.form.valueChanges.subscribe(() => this._updateTimezoneList()));
    if (this.building)
      this.form.patchValue(this.building);
  }
  ngOnChanges(changes) {
    if (changes.building && this.building) {
      this.form.patchValue(this.building);
    }
    if (changes.save && this.save)
      this.saveChanges();
  }
  saveChanges() {
    return __async(this, null, function* () {
      this.form.patchValue({
        parent_id: this.form.value.parent_id || this._org.organisation.id
      });
      if (!this.form.valid) {
        return notifyError(i18n("FORM.INVALID_FIELDS", {
          field_list: getInvalidFields(this.form).join(", ")
        }));
      }
      const data = this.form.getRawValue();
      this.loading = true;
      this.loadingChange.emit(true);
      const body = __spreadProps(__spreadValues({}, data), {
        tags: ["building"],
        name: `BLD ${authority().description} ${data.display_name}`
      });
      const building = yield (data.id ? updateZone(data.id, body) : addZone(body)).toPromise().catch((e) => {
        notifyError(i18n("APP.CONCIERGE.BUILDINGS_SAVE_ERROR", {
          error: e.message || e.error || e
        }));
        this.loading = false;
        this.loadingChange.emit(false);
        throw e;
      });
      notifySuccess(i18n("APP.CONCIERGE.BUILDINGS_SAVE_SUCCESS"));
      this.loading = false;
      this.loadingChange.emit(false);
      this.done.emit(building);
    });
  }
  _updateTimezoneList() {
    const timezone = this.form?.value?.timezone || "";
    this.timezones = TIMEZONES_IANA;
    this.filtered_timezones = this.timezones.filter((_) => _.toLowerCase().includes(timezone.toLowerCase()));
  }
  static {
    this.\u0275fac = function BuildingFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingFormComponent)(\u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingFormComponent, selectors: [["building-form"]], inputs: { building: "building", save: "save", loading: "loading" }, outputs: { loadingChange: "loadingChange", done: "done" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["auto", "matAutocomplete"], ["building", "", 3, "formGroup", 4, "ngIf"], ["building", "", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "display-name"], ["appearance", "outline"], ["matInput", "", "name", "display-name", "formControlName", "display_name", 3, "placeholder"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", 3, "placeholder", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], ["for", "address"], ["matInput", "", "name", "address", "formControlName", "location", 3, "placeholder"], ["for", "region"], ["name", "region", "formControlName", "parent_id", 3, "placeholder"], [3, "value"], [3, "disabled"]], template: function BuildingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BuildingFormComponent_form_0_Template, 30, 25, "form", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatPrefix, MatInput, MatSelect, MatOption, MatAutocomplete, MatAutocompleteTrigger, FormGroupDirective, FormControlName, IconComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingFormComponent, { className: "BuildingFormComponent", filePath: "apps/concierge/src/app/building-manager/building-form.component.ts", lineNumber: 103 });
})();

// apps/concierge/src/app/building-manager/building-modal.component.ts
var BuildingModalComponent = class _BuildingModalComponent {
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.save_state = 0;
    this.building = this._data;
    this.close = (d) => this._dialog_ref.close(d);
    this.save = () => this.save_state = Date.now();
  }
  static {
    this.\u0275fac = function BuildingModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingModalComponent, selectors: [["building-modal"]], standalone: false, decls: 5, vars: 11, consts: [[3, "confirm", "heading", "loading"], [3, "loadingChange", "done", "building", "save", "loading"]], template: function BuildingModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275listener("confirm", function BuildingModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(4, "building-form", 1);
        \u0275\u0275twoWayListener("loadingChange", function BuildingModalComponent_Template_building_form_loadingChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.loading, $event) || (ctx.loading = $event);
          return $event;
        });
        \u0275\u0275listener("done", function BuildingModalComponent_Template_building_form_done_4_listener($event) {
          return ctx.close($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 5, ctx.building.id ? "APP.CONCIERGE.BUILDINGS_EDIT" : "APP.CONCIERGE.BUILDINGS_NEW"))("loading", \u0275\u0275pipeBind1(2, 7, ctx.loading) ? \u0275\u0275pipeBind1(3, 9, "APP.CONCIERGE.BUILDINGS_SAVING") : "");
        \u0275\u0275advance(4);
        \u0275\u0275property("building", ctx.building)("save", ctx.save_state);
        \u0275\u0275twoWayProperty("loading", ctx.loading);
      }
    }, dependencies: [FullscreenModalShellComponent, BuildingFormComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingModalComponent, { className: "BuildingModalComponent", filePath: "apps/concierge/src/app/building-manager/building-modal.component.ts", lineNumber: 33 });
})();

// apps/concierge/src/app/building-manager/auto-release-settings-modal.component.ts
function AutoReleaseSettingsModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "app-icon", 7);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AutoReleaseSettingsModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 8)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-duration-field", 9);
    \u0275\u0275twoWayListener("ngModelChange", function AutoReleaseSettingsModalComponent_main_5_Template_a_duration_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.time_before, $event) || (ctx_r1.settings.time_before = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a-duration-field", 9);
    \u0275\u0275twoWayListener("ngModelChange", function AutoReleaseSettingsModalComponent_main_5_Template_a_duration_field_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.time_after, $event) || (ctx_r1.settings.time_after = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 10)(13, "mat-select", 11);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AutoReleaseSettingsModalComponent_main_5_Template_mat_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.resources, $event) || (ctx_r1.settings.resources = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "mat-option", 12);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-option", 13);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-option", 14);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 16, "APP.CONCIERGE.AUTO_RELEASE_NOTIFY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("max", 60)("step", 5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.time_before);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 18, "APP.CONCIERGE.AUTO_RELEASE_CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("max", 60)("step", 5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.time_after);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 20, "APP.CONCIERGE.AUTO_RELEASE_TYPES"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.resources);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 22, "APP.CONCIERGE.AUTO_RELEASE_TYPES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 24, "RESORUCE.DESKS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 26, "RESOURCE.VISITORS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 28, "RESOURCE.PARKING"), " ");
  }
}
function AutoReleaseSettingsModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 15)(1, "button", 16);
    \u0275\u0275listener("click", function AutoReleaseSettingsModalComponent_footer_6_Template_button_click_1_listener() {
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
function AutoReleaseSettingsModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 17);
    \u0275\u0275element(1, "mat-spinner", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading);
  }
}
var AutoReleaseSettingsModalComponent = class _AutoReleaseSettingsModalComponent {
  constructor(_id, _dialog_ref, _settings) {
    this._id = _id;
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this.loading = "";
    this.id = this._id;
    this.settings = {};
  }
  ngOnInit() {
    this.loadSettings(this.id);
  }
  loadSettings(id) {
    return __async(this, null, function* () {
      this.loading = i18n("APP.CONCIERGE.AUTO_RELEASE_LOADING");
      this.settings = {};
      const settings = yield querySettings({ parent_id: id }).pipe(map((_) => _.data)).toPromise();
      const unencrypted = settings.find((_) => _.encryption_level === EncryptionLevel.None);
      if (!unencrypted)
        return;
      try {
        this.settings = load(unencrypted.settings_string)?.auto_release || {};
      } catch {
      }
      this.loading = "";
    });
  }
  save() {
    return __async(this, null, function* () {
      this.loading = i18n("APP.CONCIERGE.AUTO_RELEASE_SAVING");
      const settings = yield querySettings({ parent_id: this.id }).pipe(map((_) => _.data)).toPromise();
      let unencrypted = settings.find((_) => _.encryption_level === EncryptionLevel.None);
      if (!unencrypted) {
        unencrypted = new PlaceSettings({
          parent_id: this.id,
          encryption_level: EncryptionLevel.None,
          settings_string: ""
        });
      }
      let old_settings = {};
      try {
        old_settings = load(unencrypted.settings_string) || {};
      } catch {
      }
      unencrypted.settings_string = dump(__spreadProps(__spreadValues({}, old_settings), {
        auto_release: this.settings
      }));
      const on_error = (e) => {
        notifyError(i18n("APP.CONCIERGE.AUTO_RELEASE_ERROR", { error: e }));
        throw e;
      };
      unencrypted.id ? yield updateSettings(unencrypted.id, unencrypted).toPromise().catch(on_error) : yield addSettings(unencrypted).toPromise().catch(on_error);
      const metadata_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
      const metadata = yield showMetadata(this.id, metadata_key).toPromise();
      const details = metadata.details || {};
      details.auto_release = this.settings;
      yield updateMetadata(this.id, {
        name: metadata_key,
        details,
        description: ""
      }).toPromise().catch(on_error);
      notifySuccess(i18n("APP.CONCIERGE.AUTO_RELEASE_SUCCESS"));
      this.loading = "";
      this._dialog_ref.close();
    });
  }
  static {
    this.\u0275fac = function AutoReleaseSettingsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AutoReleaseSettingsModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutoReleaseSettingsModalComponent, selectors: [["auto-release-modal"]], standalone: false, decls: 9, vars: 7, consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-300", "p-4"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "px-2 w-[20rem]", 4, "ngIf", "ngIfElse"], ["class", "p-4 flex justify-end", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "text-2xl"], [1, "px-2", "w-[20rem]"], [3, "ngModelChange", "min", "max", "step", "ngModel"], ["appearance", "outline", 1, "w-full"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], ["value", "desk"], ["value", "visitor"], ["value", "parking"], [1, "p-4", "flex", "justify-end"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-32", "space-y-2"], [3, "diameter"]], template: function AutoReleaseSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h3", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, AutoReleaseSettingsModalComponent_button_4_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, AutoReleaseSettingsModalComponent_main_5_Template, 24, 30, "main", 4)(6, AutoReleaseSettingsModalComponent_footer_6_Template, 4, 3, "footer", 5)(7, AutoReleaseSettingsModalComponent_ng_template_7_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r4 = \u0275\u0275reference(8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.AUTO_RELEASE_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [NgIf, NgControlStatus, NgModel, MatFormField, MatSelect, MatOption, MatProgressSpinner, MatDialogClose, MatRipple, DurationFieldComponent, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoReleaseSettingsModalComponent, { className: "AutoReleaseSettingsModalComponent", filePath: "apps/concierge/src/app/building-manager/auto-release-settings-modal.component.ts", lineNumber: 92 });
})();

// apps/concierge/src/app/building-manager/induction-settings-modal.component.ts
function InductionSettingsModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "app-icon", 7);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function InductionSettingsModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 8)(1, "mat-form-field", 9)(2, "textarea", 10);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function InductionSettingsModalComponent_main_5_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.induction_details, $event) || (ctx_r1.induction_details = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-checkbox", 11);
    \u0275\u0275twoWayListener("ngModelChange", function InductionSettingsModalComponent_main_5_Template_mat_checkbox_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.is_enabled, $event) || (ctx_r1.is_enabled = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.induction_details);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 4, "APP.CONCIERGE.INDUCTION_DETAILS"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.is_enabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "APP.CONCIERGE.INDUCTION_ENABLE"), " ");
  }
}
function InductionSettingsModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 12)(1, "button", 13);
    \u0275\u0275listener("click", function InductionSettingsModalComponent_footer_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd()();
  }
}
function InductionSettingsModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 14);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading);
  }
}
var InductionSettingsModalComponent = class _InductionSettingsModalComponent {
  constructor(_zone_id, _settings, _org, _dialog_ref) {
    this._zone_id = _zone_id;
    this._settings = _settings;
    this._org = _org;
    this._dialog_ref = _dialog_ref;
    this.loading = "";
    this.induction_details = "";
    this.is_enabled = false;
    this.settings = {};
  }
  ngOnInit() {
    if (!this._zone_id)
      return;
    this.loadSettings();
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.loading = i18n("APP.CONCIERGE.INDUCTION_LOADING");
      const visitor_kiosk_app = this._settings.get("app.visitor_kiosk_app") || "visitor-kiosk_app";
      this.settings = {};
      const [bld_metadata, org_metadata, org_settings] = yield Promise.all([
        yield showMetadata(this._zone_id, visitor_kiosk_app).toPromise(),
        yield showMetadata(this._org.organisation.id, visitor_kiosk_app).toPromise(),
        yield showMetadata(this._org.organisation.id, "settings").toPromise()
      ]);
      this.settings = __spreadValues(__spreadValues(__spreadValues({}, org_settings.details), org_metadata.details), bld_metadata.details);
      this.induction_details = this.settings.induction_details || "";
      this.is_enabled = this.settings.induction_enabled ?? false;
      this.loading = "";
    });
  }
  save() {
    return __async(this, null, function* () {
      this.loading = i18n("APP.CONCIERGE.INDUCTION_SAVING");
      const visitor_kiosk_app = this._settings.get("app.visitor_kiosk_app") || "visitor-kiosk_app";
      const concierge_app = this._settings.get("app.concierge_app") || "concierge_app";
      this._dialog_ref.disableClose = true;
      const metadata = yield showMetadata(this._zone_id, visitor_kiosk_app).toPromise();
      const con_metadata = yield showMetadata(this._zone_id, concierge_app).toPromise();
      const visitor_metadata = __spreadProps(__spreadValues({}, metadata.details), {
        induction_details: this.induction_details,
        induction_enabled: this.is_enabled
      });
      const concierge_metadata = __spreadProps(__spreadValues({}, metadata.details), {
        induction_details: this.induction_details,
        induction_enabled: this.is_enabled
      });
      const result = yield updateMetadata(this._zone_id, {
        name: metadata.name || visitor_kiosk_app,
        description: metadata.description || "",
        details: visitor_metadata
      }).toPromise().catch((err) => {
        console.error(err);
        notifyError(i18n("APP.CONCIERGE.INDUCTION_ERROR", { error: err }));
      });
      const result2 = yield updateMetadata(this._zone_id, {
        name: con_metadata.name || concierge_app,
        description: con_metadata.description || "",
        details: concierge_metadata
      }).toPromise().catch((err) => {
        console.error(err);
        notifyError(i18n("APP.CONCIERGE.INDUCTION_ERROR", { error: err }));
      });
      this.loading = "";
      if (result) {
        notifySuccess(i18n("APP.CONCIERGE.INDUCTION_SUCCESS"));
        this._dialog_ref.close();
      }
    });
  }
  static {
    this.\u0275fac = function InductionSettingsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InductionSettingsModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InductionSettingsModalComponent, selectors: [["induction-settings-modal"]], standalone: false, decls: 9, vars: 7, consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-300", "p-4"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col space-y-2", 4, "ngIf", "ngIfElse"], ["class", "px-4 pb-4 flex justify-end", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "text-2xl"], [1, "p-4", "flex", "flex-col", "space-y-2"], ["appearance", "outline", 1, "w-[36rem]", "max-w-[80vw]", "h-[50vh]"], ["matInput", "", 1, "w-[34rem]", "max-w-[calc(80vw-2rem)]", "h-[calc(50vh-2rem)]", "resize-none", 3, "ngModelChange", "ngModel", "placeholder"], [3, "ngModelChange", "ngModel"], [1, "px-4", "pb-4", "flex", "justify-end"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-32", "space-y-2"], [3, "diameter"]], template: function InductionSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h3", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, InductionSettingsModalComponent_button_4_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, InductionSettingsModalComponent_main_5_Template, 7, 8, "main", 4)(6, InductionSettingsModalComponent_footer_6_Template, 3, 0, "footer", 5)(7, InductionSettingsModalComponent_ng_template_7_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r4 = \u0275\u0275reference(8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.INDUCTION_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatCheckbox, MatProgressSpinner, MatDialogClose, MatRipple, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InductionSettingsModalComponent, { className: "InductionSettingsModalComponent", filePath: "apps/concierge/src/app/building-manager/induction-settings-modal.component.ts", lineNumber: 65 });
})();

// apps/concierge/src/app/building-manager/item-list-modal.component.ts
function ItemListModalComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "input", 7);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ItemListModalComponent_div_11_Template_input_ngModelChange_1_listener($event) {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.item_list[i_r2].name, $event) || (ctx_r2.item_list[i_r2].name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 8);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ItemListModalComponent_div_11_Template_input_ngModelChange_3_listener($event) {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.item_list[i_r2].email, $event) || (ctx_r2.item_list[i_r2].email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ItemListModalComponent_div_11_Template_button_click_5_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.item_list.splice(i_r2, 1));
    });
    \u0275\u0275elementStart(7, "app-icon", 10);
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 5, "APP.CONCIERGE.SUPPORT_TYPES_NAME"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.item_list[i_r2].name);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.SUPPORT_TYPES_EMAIL"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.item_list[i_r2].email);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 9, "APP.CONCIERGE.SUPPORT_TYPES_REMOVE"));
  }
}
var ItemListModalComponent = class _ItemListModalComponent {
  constructor(_bld_id, _settings, _dialog_ref) {
    this._bld_id = _bld_id;
    this._settings = _settings;
    this._dialog_ref = _dialog_ref;
    this.item_list = [];
    this.loading = false;
    this.identify = (index, item) => index;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const metadata_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
      const metadata = yield showMetadata(this._bld_id, metadata_key).toPromise();
      const items = metadata?.details?.support_issue_types || [];
      this.item_list = items;
    });
  }
  save() {
    return __async(this, null, function* () {
      const metadata_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
      const concierge_key = this._settings.get("app.concierge_metadata_key") || "concierge_app";
      this.loading = true;
      const items = this.item_list.filter((_) => _);
      const metadata = yield showMetadata(this._bld_id, metadata_key).toPromise();
      metadata.details.support_issue_types = items;
      let resp = yield updateMetadata(this._bld_id, {
        name: metadata_key,
        details: metadata.details,
        description: metadata.description || ""
      }).toPromise().catch((_) => {
        notifyError(`Failed to save issue types. ${_}`);
      });
      if (!resp) {
        this.loading = false;
        return;
      }
      const concierge_metadata = yield showMetadata(this._bld_id, metadata_key).toPromise();
      concierge_metadata.details.support_issue_types = items;
      resp = yield updateMetadata(this._bld_id, {
        name: concierge_key,
        details: concierge_metadata.details,
        description: concierge_metadata.description || ""
      }).toPromise().catch((_) => {
        notifyError(`Failed to save issue types. ${_}`);
      });
      this.loading = false;
      if (resp)
        this._dialog_ref.close();
    });
  }
  static {
    this.\u0275fac = function ItemListModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemListModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemListModalComponent, selectors: [["item-list-modal"]], standalone: false, decls: 15, vars: 8, consts: [["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-[36rem]", "overflow-auto", "h-[50vh]", "p-2", "space-y-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], ["class", "w-full flex items-center space-x-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "items-center", "justify-end", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "w-full", "flex", "items-center", "space-x-2"], ["type", "text", 1, "flex-1", "border", "border-base-200", "px-4", "py-3", "rounded", 3, "ngModelChange", "placeholder", "ngModel"], ["type", "email", 1, "flex-[2]", "border", "border-base-200", "px-4", "py-3", "rounded", 3, "ngModelChange", "placeholder", "ngModel"], ["icon", "", "matRipple", "", 1, "text-error", "border", "border-error", "rounded", "h-12", "w-12", 3, "click", "matTooltip"], [1, "text-2xl"]], template: function ItemListModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h2");
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 0)(5, "app-icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main", 1)(8, "button", 2);
        \u0275\u0275listener("click", function ItemListModalComponent_Template_button_click_8_listener() {
          return ctx.item_list.push({ name: "", email: "" });
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, ItemListModalComponent_div_11_Template, 9, 11, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "footer", 4)(13, "button", 5);
        \u0275\u0275listener("click", function ItemListModalComponent_Template_button_click_13_listener() {
          return ctx.save();
        });
        \u0275\u0275text(14, "Save");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "APP.CONCIERGE.SUPPORT_TYPES_HEADER"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "APP.CONCIERGE.SUPPORT_TYPES_ADD"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.item_list)("ngForTrackBy", ctx.identify);
      }
    }, dependencies: [NgForOf, DefaultValueAccessor, NgControlStatus, NgModel, MatTooltip, MatDialogClose, MatRipple, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemListModalComponent, { className: "ItemListModalComponent", filePath: "apps/concierge/src/app/building-manager/item-list-modal.component.ts", lineNumber: 67 });
})();

// apps/concierge/src/app/building-manager/building-management.service.ts
var BuildingManagementService = class _BuildingManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.filtered_buildings = combineLatest([
      this._org.region_list,
      this._org.building_list,
      this._options,
      this._org.initialised
    ]).pipe(map(([regions, list, options]) => {
      if (options.zone) {
        list = list.filter((_) => _.parent_id === options.zone);
      }
      if (options.search) {
        list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
      }
      for (const bld of list) {
        const parent = regions.find((_) => _.id === bld.parent_id);
        if (parent) {
          bld.region = parent.display_name || parent.name;
        }
        bld.level_count = this._org.levelsForBuilding(bld)?.length || 0;
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
  editBuilding(building = new PlaceZone()) {
    const ref = this._dialog.open(BuildingModalComponent, {
      data: building
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  editBuildingMetadata(zone = new PlaceZone()) {
    const ref = this._dialog.open(AppSettingsModalComponent, {
      data: { zone }
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        setTimeout(() => location.reload(), 300);
    });
  }
  setAutoRelease(building) {
    if (!building?.id)
      return;
    this._dialog.open(AutoReleaseSettingsModalComponent, {
      data: building.id
    });
  }
  setInduction(building) {
    if (!building?.id)
      return;
    this._dialog.open(InductionSettingsModalComponent, {
      data: building.id
    });
  }
  setSupportIssueTypes(building) {
    if (!building?.id)
      return;
    this._dialog.open(ItemListModalComponent, {
      data: building.id
    });
  }
  removeBuilding(building) {
    return __async(this, null, function* () {
      const ref = yield openConfirmModal({
        title: i18n("APP.CONCIERGE.BUILDINGS_REMOVE_TITLE"),
        content: i18n("APP.CONCIERGE.BUILDINGS_REMOVE_MSG", {
          name: building.name
        }),
        icon: { content: "delete_forever" },
        confirm_text: i18n("COMMON.REMOVE")
      }, this._dialog);
      if (ref.reason !== "done")
        return ref.close();
      ref.loading(i18n("APP.CONCIERGE.BUILDINGS_REMOVE_LOADING"));
      yield removeZone(building.id).toPromise().catch((e) => {
        notifyError(i18n("APP.CONCIERGE.BUILDINGS_REMOVE_ERROR", { error: e }));
        throw e;
      });
      this._org.removeZone({ id: building.id, tags: ["building"] });
      notifySuccess(i18n("APP.CONCIERGE.BUILDINGS_REMOVE_SUCCESS"));
      ref.close();
    });
  }
  static {
    this.\u0275fac = function BuildingManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingManagementService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuildingManagementService, factory: _BuildingManagementService.\u0275fac, providedIn: "root" });
  }
};

// apps/concierge/src/app/building-manager/building-list.component.ts
var _c0 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c1 = () => ({ key: "location", name: "Location", size: "16rem" });
var _c2 = (a0, a1) => ({ key: "timezone", name: a0, size: "14rem", content: a1 });
var _c3 = (a0) => ({ key: "region", name: a0, size: "11rem", sortable: false });
var _c4 = (a0) => ({ key: "level_count", name: a0, size: "6rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function BuildingListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_8_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
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
function BuildingListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r5);
  }
}
function BuildingListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "level");
    \u0275\u0275pipe(2, "level");
  }
  if (rf & 2) {
    let tmp_7_0;
    const data_r6 = ctx.data;
    \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = \u0275\u0275pipeBind1(1, 1, data_r6)) == null ? null : tmp_7_0.display_name) || ((tmp_7_0 = \u0275\u0275pipeBind1(2, 3, data_r6)) == null ? null : tmp_7_0.name), " ");
  }
}
function BuildingListComponent_ng_template_14_img_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const data_r7 = \u0275\u0275nextContext().data;
    \u0275\u0275property("source", data_r7[0]);
  }
}
function BuildingListComponent_ng_template_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.IMAGES_EMPTY"));
  }
}
function BuildingListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BuildingListComponent_ng_template_14_img_0_Template, 1, 1, "img", 14)(1, BuildingListComponent_ng_template_14_span_1_Template, 3, 3, "span", 15);
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275property("ngIf", data_r7.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !data_r7.length);
  }
}
function BuildingListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19)(2, "app-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 5)(6, "button", 20)(7, "div", 21)(8, "app-icon", 22);
    \u0275\u0275text(9, "edit_square");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "mat-menu", null, 6)(15, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_15_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editWorkplaceSettings(row_r9));
    });
    \u0275\u0275elementStart(16, "div", 21)(17, "app-icon", 22);
    \u0275\u0275text(18, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_22_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editConciergeSettings(row_r9));
    });
    \u0275\u0275elementStart(23, "div", 21)(24, "app-icon", 22);
    \u0275\u0275text(25, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_29_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBookingPanelSettings(row_r9));
    });
    \u0275\u0275elementStart(30, "div", 21)(31, "app-icon", 22);
    \u0275\u0275text(32, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_36_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editVisitorKioskSettings(row_r9));
    });
    \u0275\u0275elementStart(37, "div", 21)(38, "app-icon", 22);
    \u0275\u0275text(39, "qr_code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_43_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBuilding(row_r9));
    });
    \u0275\u0275elementStart(44, "div", 21)(45, "app-icon", 22);
    \u0275\u0275text(46, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_50_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAutoRelease(row_r9));
    });
    \u0275\u0275elementStart(51, "div", 21)(52, "app-icon", 24);
    \u0275\u0275text(53, " release_alert ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_57_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setInduction(row_r9));
    });
    \u0275\u0275elementStart(58, "div", 21)(59, "app-icon", 24);
    \u0275\u0275text(60, " badge ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div");
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_64_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSupportIssueTypes(row_r9));
    });
    \u0275\u0275elementStart(65, "div", 21)(66, "app-icon", 24);
    \u0275\u0275text(67, " support_agent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div");
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_71_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeBuilding(row_r9));
    });
    \u0275\u0275elementStart(72, "div", 25)(73, "app-icon", 26);
    \u0275\u0275text(74, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div");
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const menu_r10 = \u0275\u0275reference(5);
    const app_settings_menu_r11 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", app_settings_menu_r11);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, "APP.CONCIERGE.APP_SETTINGS"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 14, "APP.CONCIERGE.APP_SETTINGS_WORKPLACE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 16, "APP.CONCIERGE.APP_SETTINGS_CONCIERGE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 18, "APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 20, "APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 22, "APP.CONCIERGE.BUILDINGS_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 24, "APP.CONCIERGE.BUILDINGS_AUTO_RELEASE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 26, "APP.CONCIERGE.BUILDINGS_INDUCTION"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 28, "APP.CONCIERGE.BUILDINGS_SUPPORT_TYPES"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 30, "APP.CONCIERGE.BUILDINGS_REMOVE"), " ");
  }
}
var BuildingListComponent = class _BuildingListComponent {
  editWorkplaceSettings(zone) {
    this._dialog.open(WorkplaceSettingsFormModalComponent, {
      data: { zone }
    });
  }
  editConciergeSettings(zone) {
    this._dialog.open(ConciergeSettingsFormModalComponent, {
      data: { zone }
    });
  }
  editBookingPanelSettings(zone) {
    this._dialog.open(BookingPanelSettingsModalComponent, {
      data: { zone }
    });
  }
  editVisitorKioskSettings(zone) {
    this._dialog.open(VisitorKioskSettingsFormModalComponent, {
      data: { zone }
    });
  }
  constructor(_manager, _clipboard, _dialog) {
    this._manager = _manager;
    this._clipboard = _clipboard;
    this._dialog = _dialog;
    this.buildings = this._manager.filtered_buildings;
    this.settings = {};
    this.editBuilding = (building) => this._manager.editBuilding(building);
    this.editBuildingMetadata = (building) => this._manager.editBuildingMetadata(building);
    this.removeBuilding = (building) => this._manager.removeBuilding(building);
    this.setAutoRelease = (building) => this._manager.setAutoRelease(building);
    this.setInduction = (building) => this._manager.setInduction(building);
    this.setSupportIssueTypes = (building) => this._manager.setSupportIssueTypes(building);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess(i18n("APP.CONCIERGE.BUILDINGS_COPIED_ID"));
    };
  }
  static {
    this.\u0275fac = function BuildingListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingListComponent)(\u0275\u0275directiveInject(BuildingManagementService), \u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingListComponent, selectors: [["building-list"]], standalone: false, decls: 18, vars: 34, consts: [["name_template", ""], ["timezone_template", ""], ["level_template", ""], ["image_template", ""], ["action_template", ""], ["menu", "matMenu"], ["app_settings_menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "min-w-[62rem]", "w-full", "block", "text-sm", 3, "data", "empty_message", "columns", "sortable"], [1, "w-full", "h-20"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "text-[0.625rem]", "opacity-30", "font-mono"], [1, "p-4", "font-mono", "text-sm"], ["auth", "", "class", "max-h-[3rem] max-w-[8rem]", 3, "source", 4, "ngIf"], ["class", "opacity-30", 4, "ngIf"], ["auth", "", 1, "max-h-[3rem]", "max-w-[8rem]", 3, "source"], [1, "opacity-30"], [1, "w-full", "flex", "justify-center", "space-x-2", "p-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["mat-menu-item", "", 3, "click"], ["className", "material-symbols-rounded", 1, "text-xl"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error", "text-xl"]], template: function BuildingListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 7);
        \u0275\u0275element(1, "simple-table", 8);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275element(7, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, BuildingListComponent_ng_template_8_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, BuildingListComponent_ng_template_10_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, BuildingListComponent_ng_template_12_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(14, BuildingListComponent_ng_template_14_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(16, BuildingListComponent_ng_template_16_Template, 78, 32, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const name_template_r12 = \u0275\u0275reference(9);
        const timezone_template_r13 = \u0275\u0275reference(11);
        const action_template_r14 = \u0275\u0275reference(17);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.buildings)("empty_message", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.BUILDINGS_EMPTY"))("columns", \u0275\u0275pureFunction6(27, _c6, \u0275\u0275pureFunction2(14, _c0, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.BUILDINGS_NAME"), name_template_r12), \u0275\u0275pureFunction0(17, _c1), \u0275\u0275pureFunction2(18, _c2, \u0275\u0275pipeBind1(4, 8, "COMMON.TIMEZONE"), timezone_template_r13), \u0275\u0275pureFunction1(21, _c3, \u0275\u0275pipeBind1(5, 10, "RESOURCE.REGION")), \u0275\u0275pureFunction1(23, _c4, \u0275\u0275pipeBind1(6, 12, "APP.CONCIERGE.BUILDINGS_LEVELS")), \u0275\u0275pureFunction1(25, _c5, action_template_r14)))("sortable", true);
      }
    }, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, SimpleTableComponent, AuthenticatedImageDirective, LevelPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingListComponent, { className: "BuildingListComponent", filePath: "apps/concierge/src/app/building-manager/building-list.component.ts", lineNumber: 247 });
})();

// apps/concierge/src/app/building-manager/building-manager.component.ts
var _c02 = ["app-building-manager", ""];
var BuildingManagerComponent = class _BuildingManagerComponent {
  constructor(_state) {
    this._state = _state;
    this.newBuilding = () => this._state.editBuilding();
  }
  static {
    this.\u0275fac = function BuildingManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingManagerComponent)(\u0275\u0275directiveInject(BuildingManagementService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingManagerComponent, selectors: [["", "app-building-manager", ""]], standalone: false, attrs: _c02, decls: 12, vars: 6, consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "justify-between", "mb-2", "px-8", "pt-4", "pb-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]], template: function BuildingManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1)(4, "header", 2)(5, "h2", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 4);
        \u0275\u0275listener("click", function BuildingManagerComponent_Template_button_click_8_listener() {
          return ctx.newBuilding();
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(11, "building-list", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 2, "APP.CONCIERGE.BUILDINGS_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 4, "APP.CONCIERGE.BUILDINGS_ADD"), " ");
      }
    }, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, MatRipple, BuildingListComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=building-manager.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingManagerComponent, { className: "BuildingManagerComponent", filePath: "apps/concierge/src/app/building-manager/building-manager.component.ts", lineNumber: 53 });
})();

// apps/concierge/src/app/building-manager/building-manager.module.ts
var ROUTES = [
  { path: "", component: BuildingManagerComponent },
  { path: "new", component: BuildingManagerComponent }
];
var BuildingManagerModule = class _BuildingManagerModule {
  static {
    this.\u0275fac = function BuildingManagerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingManagerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BuildingManagerModule });
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
  BuildingManagerModule
};
//# sourceMappingURL=building-manager.module-MG2KVRCX.js.map
