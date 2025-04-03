import {
  AppSettingsModalComponent,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  BookingPanelSettingsModalComponent,
  Clipboard,
  CommonModule,
  ConciergeSettingsFormModalComponent,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  MAT_DIALOG_DATA,
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatChipsModule,
  MatDialog,
  MatDialogRef,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatPrefix,
  MatRipple,
  MatTooltip,
  Nc,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  OrganisationService,
  RouterModule,
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
  bt,
  combineLatest,
  getInvalidFields,
  i18n,
  jc,
  map,
  mn,
  notifyError,
  notifySuccess,
  openConfirmModal,
  zc,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CSOPKK4U.js";

// apps/concierge/src/app/region-manager/region-modal.component.ts
function RegionModalComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 11);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.DISPLAY_NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "FORM.DISPLAY_NAME"));
  }
}
function RegionModalComponent_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r2 = ctx.$implicit;
    \u0275\u0275property("value", tz_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r2);
  }
}
function RegionModalComponent_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
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
var RegionModalComponent = class _RegionModalComponent extends AsyncHandler {
  constructor(_org, _data, _dialog_ref) {
    super();
    this._org = _org;
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.building_list = this._org.building_list;
    this.timezones = [];
    this.filtered_timezones = [];
    this.form = new FormGroup({
      id: new FormControl(this._data?.id || ""),
      display_name: new FormControl(this._data?.display_name || "", [
        Validators.required
      ]),
      timezone: new FormControl(Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || ""),
      parent_id: new FormControl(this._org.organisation.id)
    });
  }
  ngOnInit() {
    this._updateTimezoneList();
    this.subscription("tz-change", this.form.valueChanges.subscribe(() => this._updateTimezoneList()));
  }
  save() {
    return __async(this, null, function* () {
      if (!this.form.valid) {
        return notifyError(`Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
      }
      const data = this.form.getRawValue();
      data.tags = ["region"];
      this.loading = true;
      const resp = yield (data.id ? Nc(data.id, __spreadProps(__spreadValues({}, data), {
        name: `REGION ${bt().description} ${data.display_name}`
      })) : jc(__spreadProps(__spreadValues({}, data), {
        name: `REGION ${bt().description} ${data.display_name}`
      }))).toPromise().catch();
      if (resp.id)
        this._dialog_ref.close(resp);
      this.loading = false;
    });
  }
  _updateTimezoneList() {
    const timezone = this.form?.value?.timezone || "";
    this.timezones = TIMEZONES_IANA;
    this.filtered_timezones = this.timezones.filter((_) => _.toLowerCase().includes(timezone.toLowerCase()));
  }
  static {
    this.\u0275fac = function RegionModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegionModalComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegionModalComponent, selectors: [["region-modal"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 19, consts: [["auto", "matAutocomplete"], [3, "confirm", "heading", "loading"], [3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "display-name"], ["appearance", "outline"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", 3, "placeholder", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], ["matInput", "", "name", "display-name", "formControlName", "display_name", 3, "placeholder"], [3, "value"], [3, "disabled"]], template: function RegionModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275listener("confirm", function RegionModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.save());
        });
        \u0275\u0275elementStart(4, "form", 2);
        \u0275\u0275template(5, RegionModalComponent_div_5_Template, 7, 6, "div", 3);
        \u0275\u0275elementStart(6, "div", 4)(7, "label", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-form-field", 6)(11, "app-icon", 7);
        \u0275\u0275text(12, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 8);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-autocomplete", null, 0);
        \u0275\u0275template(17, RegionModalComponent_mat_option_17_Template, 2, 2, "mat-option", 9)(18, RegionModalComponent_mat_option_18_Template, 3, 4, "mat-option", 10);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const auto_r3 = \u0275\u0275reference(16);
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 9, ctx.form.value.id ? "APP.CONCIERGE.REGIONS_EDIT" : "APP.CONCIERGE.REGIONS_NEW"))("loading", \u0275\u0275pipeBind1(2, 11, ctx.loading) ? \u0275\u0275pipeBind1(3, 13, "APP.CONCIERGE.REGION_SAVING") : "");
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.display_name);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 15, "COMMON.TIMEZONE"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 17, "COMMON.TIMEZONE"))("matAutocomplete", auto_r3);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.filtered_timezones);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.timezones.length);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatPrefix, MatInput, MatOption, MatAutocomplete, MatAutocompleteTrigger, FormGroupDirective, FormControlName, IconComponent, FullscreenModalShellComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegionModalComponent, { className: "RegionModalComponent", filePath: "apps/concierge/src/app/region-manager/region-modal.component.ts", lineNumber: 74 });
})();

// apps/concierge/src/app/region-manager/region-management.service.ts
var RegionManagementService = class _RegionManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.filtered_regions = combineLatest([
      this._org.building_list,
      this._org.region_list,
      this._options
    ]).pipe(map(([buildings, list, options]) => {
      if (options.search) {
        list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
      }
      for (const region of list) {
        region.building_count = buildings.filter((bld) => bld.parent_id === region.id).length;
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
  editRegion(region = new mn()) {
    const ref = this._dialog.open(RegionModalComponent, {
      data: region
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  editRegionMetadata(region = new mn()) {
    const ref = this._dialog.open(AppSettingsModalComponent, {
      data: { zone: region }
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        setTimeout(() => location.reload(), 300);
    });
  }
  removeRegion(region) {
    return __async(this, null, function* () {
      const ref = yield openConfirmModal({
        title: i18n("APP.CONCIERGE.REGIONS_REMOVE_TITLE"),
        content: i18n("APP.CONCIERGE.REGIONS_REMOVE_MSG", {
          name: region.name
        }),
        icon: { content: "delete_forever" },
        confirm_text: i18n("COMMON.REMOVE")
      }, this._dialog);
      if (ref.reason !== "done")
        return ref.close();
      ref.loading(i18n("APP.CONCIERGE.REGIONS_REMOVE_LOADING"));
      yield zc(region.id).toPromise().catch((e) => {
        notifyError(i18n("APP.CONCIERGE.REGIONS_REMOVE_ERROR", { error: e }));
        throw e;
      });
      this._org.removeZone({ id: region.id, tags: ["region"] });
      notifySuccess(i18n("APP.CONCIERGE.REGIONS_REMOVE_SUCCESS"));
      ref.close();
    });
  }
  static {
    this.\u0275fac = function RegionManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegionManagementService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RegionManagementService, factory: _RegionManagementService.\u0275fac, providedIn: "root" });
  }
};

// apps/concierge/src/app/region-manager/region-list.component.ts
var _c0 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c1 = (a0) => ({ key: "building_count", name: a0, size: "8rem" });
var _c2 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
function RegionListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_6_Template_button_click_0_listener() {
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
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function RegionListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11)(2, "app-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 2)(6, "button", 12)(7, "div", 13)(8, "app-icon", 14);
    \u0275\u0275text(9, "edit_square");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "mat-menu", null, 3)(15, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_15_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editWorkplaceSettings(row_r6));
    });
    \u0275\u0275elementStart(16, "div", 13)(17, "app-icon", 14);
    \u0275\u0275text(18, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_22_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editConciergeSettings(row_r6));
    });
    \u0275\u0275elementStart(23, "div", 13)(24, "app-icon", 14);
    \u0275\u0275text(25, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_29_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBookingPanelSettings(row_r6));
    });
    \u0275\u0275elementStart(30, "div", 13)(31, "app-icon", 14);
    \u0275\u0275text(32, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_36_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editVisitorKioskSettings(row_r6));
    });
    \u0275\u0275elementStart(37, "div", 13)(38, "app-icon", 14);
    \u0275\u0275text(39, "qr_code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_43_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editRegion(row_r6));
    });
    \u0275\u0275elementStart(44, "div", 13)(45, "app-icon", 14);
    \u0275\u0275text(46, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "button", 15);
    \u0275\u0275listener("click", function RegionListComponent_ng_template_8_Template_button_click_50_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRegion(row_r6));
    });
    \u0275\u0275elementStart(51, "div", 16)(52, "app-icon", 17);
    \u0275\u0275text(53, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const menu_r7 = \u0275\u0275reference(5);
    const app_settings_menu_r8 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", app_settings_menu_r8);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 9, "APP.CONCIERGE.APP_SETTINGS"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 11, "APP.CONCIERGE.APP_SETTINGS_WORKPLACE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 13, "APP.CONCIERGE.APP_SETTINGS_CONCIERGE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 15, "APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 17, "APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 19, "APP.CONCIERGE.REGIONS_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 21, "APP.CONCIERGE.REGIONS_REMOVE"), " ");
  }
}
var RegionListComponent = class _RegionListComponent {
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
    this.regions = this._manager.filtered_regions;
    this.editRegion = (region) => this._manager.editRegion(region);
    this.removeRegion = (region) => this._manager.removeRegion(region);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess("Region ID copied to clipboard.");
    };
  }
  static {
    this.\u0275fac = function RegionListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegionListComponent)(\u0275\u0275directiveInject(RegionManagementService), \u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegionListComponent, selectors: [["region-list"]], standalone: false, decls: 10, vars: 21, consts: [["name_template", ""], ["action_template", ""], ["menu", "matMenu"], ["app_settings_menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "min-w-[32rem]", "text-sm", 3, "data", "empty_message", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "w-full", "justify-end", "space-x-2", "p-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["mat-menu-item", "", 3, "click"], [1, "text-red-500", "flex", "items-center", "space-x-2"], [1, "text-xl", "text-error"]], template: function RegionListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4);
        \u0275\u0275element(1, "simple-table", 5);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275element(5, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, RegionListComponent_ng_template_6_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, RegionListComponent_ng_template_8_Template, 57, 23, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const name_template_r9 = \u0275\u0275reference(7);
        const action_template_r10 = \u0275\u0275reference(9);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.regions)("empty_message", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.REGIONS_EMPTY"))("columns", \u0275\u0275pureFunction3(17, _c3, \u0275\u0275pureFunction2(10, _c0, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.REGIONS_NAME"), name_template_r9), \u0275\u0275pureFunction1(13, _c1, \u0275\u0275pipeBind1(4, 8, "APP.CONCIERGE.REGIONS_BUILDINGS")), \u0275\u0275pureFunction1(15, _c2, action_template_r10)))("sortable", true);
      }
    }, dependencies: [MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, SimpleTableComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegionListComponent, { className: "RegionListComponent", filePath: "apps/concierge/src/app/region-manager/region-list.component.ts", lineNumber: 164 });
})();

// apps/concierge/src/app/region-manager/region-manager.component.ts
var _c02 = ["app-region-manager", ""];
var RegionManagerComponent = class _RegionManagerComponent {
  get org() {
    return this._org.organisation;
  }
  constructor(_state, _dialog, _org) {
    this._state = _state;
    this._dialog = _dialog;
    this._org = _org;
    this.newRegion = () => this._state.editRegion();
  }
  editWorkplaceSettings(zone) {
    console.log("Zone:", zone);
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
  static {
    this.\u0275fac = function RegionManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegionManagerComponent)(\u0275\u0275directiveInject(RegionManagementService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegionManagerComponent, selectors: [["", "app-region-manager", ""]], standalone: false, attrs: _c02, decls: 46, vars: 20, consts: [["app_settings_menu", "matMenu"], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "mb-2", "flex", "items-center", "justify-between", "px-8", "pb-2", "pt-4"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "flex", "justify-end", "px-8", "pb-8"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor", "matTooltip"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "relative", "block", "h-1/2", "w-full", "flex-1"]], template: function RegionManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 2)(4, "header", 3)(5, "h2", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 5);
        \u0275\u0275listener("click", function RegionManagerComponent_Template_button_click_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.newRegion());
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6)(12, "button", 7)(13, "app-icon");
        \u0275\u0275text(14, "more_vert");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "mat-menu", null, 0)(17, "button", 8);
        \u0275\u0275listener("click", function RegionManagerComponent_Template_button_click_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.editWorkplaceSettings(ctx.org));
        });
        \u0275\u0275elementStart(18, "div", 9)(19, "app-icon", 10);
        \u0275\u0275text(20, "meeting_room");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "button", 8);
        \u0275\u0275listener("click", function RegionManagerComponent_Template_button_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.editConciergeSettings(ctx.org));
        });
        \u0275\u0275elementStart(25, "div", 9)(26, "app-icon", 10);
        \u0275\u0275text(27, "support_agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div");
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "button", 8);
        \u0275\u0275listener("click", function RegionManagerComponent_Template_button_click_31_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.editBookingPanelSettings(ctx.org));
        });
        \u0275\u0275elementStart(32, "div", 9)(33, "app-icon", 10);
        \u0275\u0275text(34, "event_busy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div");
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "button", 8);
        \u0275\u0275listener("click", function RegionManagerComponent_Template_button_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.editVisitorKioskSettings(ctx.org));
        });
        \u0275\u0275elementStart(39, "div", 9)(40, "app-icon", 10);
        \u0275\u0275text(41, "qr_code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div");
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(45, "region-list", 11);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const app_settings_menu_r2 = \u0275\u0275reference(16);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "APP.CONCIERGE.REGIONS_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "APP.CONCIERGE.REGIONS_ADD"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("matMenuTriggerFor", app_settings_menu_r2)("matTooltip", "Organisation App Settings");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 12, "APP.CONCIERGE.APP_SETTINGS_WORKPLACE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 14, "APP.CONCIERGE.APP_SETTINGS_CONCIERGE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 16, "APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 18, "APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK"), " ");
      }
    }, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, RegionListComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=region-manager.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegionManagerComponent, { className: "RegionManagerComponent", filePath: "apps/concierge/src/app/region-manager/region-manager.component.ts", lineNumber: 130 });
})();

// apps/concierge/src/app/region-manager/region-manager.module.ts
var ROUTES = [{ path: "", component: RegionManagerComponent }];
var RegionManagerModule = class _RegionManagerModule {
  static {
    this.\u0275fac = function RegionManagerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegionManagerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RegionManagerModule });
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
  RegionManagerModule
};
//# sourceMappingURL=region-manager.module-4HTGRLYE.js.map
