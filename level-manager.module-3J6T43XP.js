import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncPipe,
  BehaviorSubject,
  BookingPanelSettingsModalComponent,
  Clipboard,
  CommonModule,
  Component,
  DefaultValueAccessor,
  Fc,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  Injectable,
  Lc,
  MAT_DIALOG_DATA,
  MatChipsModule,
  MatDialog,
  MatDialogRef,
  MatError,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatRipple,
  MatSelect,
  NgControlStatus,
  NgControlStatusGroup,
  NgModule,
  OrganisationService,
  RouterModule,
  SettingsToggleComponent,
  SharedSpacesModule,
  SharedUsersModule,
  SimpleTableComponent,
  TranslatePipe,
  UIModule,
  Validators,
  __spreadProps,
  __spreadValues,
  combineLatest,
  getInvalidFields,
  i18n,
  inject,
  mn,
  notifyError,
  notifySuccess,
  openConfirmModal,
  requestSpacesForZone,
  setClassMetadata,
  shareReplay,
  switchMap,
  ve,
  zc,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3BLBQ6P6.js";

// apps/concierge/src/app/level-manager/level-modal.component.ts
function LevelModalComponent_Conditional_5_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const building_r1 = ctx.$implicit;
    \u0275\u0275property("value", building_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", building_r1.display_name || building_r1.name, " ");
  }
}
function LevelModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5)(7, "mat-select", 6);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275repeaterCreate(9, LevelModalComponent_Conditional_5_For_10_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-error");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.parent_id.invalid && ctx_r1.form.controls.parent_id.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "RESOURCE.BUILDING"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "COMMON.BUILDING_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 9, ctx_r1.building_list));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "APP.CONCIERGE.LEVELS_BUILDING_REQUIRED"));
  }
}
function LevelModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 9);
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
function LevelModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "settings-toggle", 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.LEVELS_HAS_PARKING"));
  }
}
function LevelModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 13);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.LEVELS_MAP_URL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "APP.CONCIERGE.LEVELS_MAP_URL_PLACEHOLDER"));
  }
}
var _LevelModalComponent = class _LevelModalComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = false;
    this.building_list = this._org.building_list;
    this.form = new FormGroup({
      id: new FormControl(this._data?.id || ""),
      display_name: new FormControl(this._data?.display_name || "", [
        Validators.required
      ]),
      parent_id: new FormControl(this._data?.parent_id || "", [
        Validators.required
      ]),
      map_id: new FormControl(this._data?.map_id || "", [
        Validators.required
      ]),
      parking: new FormControl(this._data?.tags?.includes("parking") || false)
    });
  }
  async save() {
    if (!this.form.valid) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidFields(this.form).join(", ")
      }));
    }
    this.loading = true;
    const data = this.form.getRawValue();
    data.tags = data.parking ? ["level", "parking"] : ["level"];
    const resp = await (data.id ? Fc(data.id, __spreadProps(__spreadValues({}, data), {
      name: `LEVEL ${ve().description} ${data.display_name}`
    })) : zc(__spreadProps(__spreadValues({}, data), {
      name: `LEVEL ${ve().description} ${data.display_name}`
    }))).toPromise().catch();
    if (resp.id)
      this._dialog_ref.close(resp);
    this.loading = false;
  }
};
_LevelModalComponent.\u0275fac = function LevelModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LevelModalComponent)();
};
_LevelModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelModalComponent, selectors: [["level-modal"]], standalone: false, decls: 9, vars: 13, consts: [[3, "confirm", "heading", "loading"], ["system", "", 3, "formGroup"], [1, "flex", "flex-col"], [1, "flex", "space-x-4", "pb-4"], ["for", "zone"], ["appearance", "outline"], ["formControlName", "parent_id", 3, "placeholder"], [3, "value"], ["for", "display-name"], ["matInput", "", "name", "display-name", "formControlName", "display_name", 3, "placeholder"], ["formControlName", "parking", 1, "flex-1", 3, "name"], [1, "flex-1"], ["for", "map-id"], ["matInput", "", "name", "map-id", "formControlName", "map_id", 3, "placeholder"]], template: function LevelModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("confirm", function LevelModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.save();
    });
    \u0275\u0275elementStart(4, "form", 1);
    \u0275\u0275conditionalCreate(5, LevelModalComponent_Conditional_5_Template, 15, 13, "div", 2);
    \u0275\u0275conditionalCreate(6, LevelModalComponent_Conditional_6_Template, 7, 6, "div", 2);
    \u0275\u0275conditionalCreate(7, LevelModalComponent_Conditional_7_Template, 4, 3, "div", 3);
    \u0275\u0275conditionalCreate(8, LevelModalComponent_Conditional_8_Template, 7, 6, "div", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 7, ctx.form.value.id ? "APP.CONCIERGE.LEVELS_EDIT" : "APP.CONCIERGE.LEVELS_NEW"))("loading", \u0275\u0275pipeBind1(2, 9, ctx.loading) ? \u0275\u0275pipeBind1(3, 11, "APP.CONCIERGE.LEVELS_SAVING") : "");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.parent_id ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.display_name ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.parking ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.map_id ? 8 : -1);
  }
}, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatError, MatInput, MatSelect, MatOption, FormGroupDirective, FormControlName, SettingsToggleComponent, FullscreenModalShellComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
var LevelModalComponent = _LevelModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LevelModalComponent, [{
    type: Component,
    args: [{ selector: "level-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.LEVELS_EDIT'
                    : 'APP.CONCIERGE.LEVELS_NEW'
                ) | translate
            "
            [loading]="
                (loading | async)
                    ? ('APP.CONCIERGE.LEVELS_SAVING' | translate)
                    : ''
            "
            (confirm)="save()"
        >
            <form system [formGroup]="form">
                @if (form.controls.parent_id) {
                    <div class="flex flex-col">
                        <label
                            for="zone"
                            [class.error]="
                                form.controls.parent_id.invalid &&
                                form.controls.parent_id.touched
                            "
                        >
                            {{ 'RESOURCE.BUILDING' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                formControlName="parent_id"
                                [placeholder]="
                                    'COMMON.BUILDING_SELECT' | translate
                                "
                            >
                                @for (
                                    building of building_list | async;
                                    track building
                                ) {
                                    <mat-option [value]="building.id">
                                        {{
                                            building.display_name ||
                                                building.name
                                        }}
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-error>{{
                                'APP.CONCIERGE.LEVELS_BUILDING_REQUIRED'
                                    | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.display_name) {
                    <div class="flex flex-col">
                        <label for="display-name">{{
                            'FORM.DISPLAY_NAME' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="display-name"
                                [placeholder]="'FORM.DISPLAY_NAME' | translate"
                                formControlName="display_name"
                            />
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.parking) {
                    <div class="flex space-x-4 pb-4">
                        <settings-toggle
                            class="flex-1"
                            [name]="
                                'APP.CONCIERGE.LEVELS_HAS_PARKING' | translate
                            "
                            formControlName="parking"
                        >
                        </settings-toggle>
                        <div class="flex-1"></div>
                    </div>
                }
                @if (form.controls.map_id) {
                    <div class="flex flex-col">
                        <label for="map-id">{{
                            'APP.CONCIERGE.LEVELS_MAP_URL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="map-id"
                                [placeholder]="
                                    'APP.CONCIERGE.LEVELS_MAP_URL_PLACEHOLDER'
                                        | translate
                                "
                                formControlName="map_id"
                            />
                        </mat-form-field>
                    </div>
                }
            </form>
        </fullscreen-modal-shell>
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelModalComponent, { className: "LevelModalComponent", filePath: "apps/concierge/src/app/level-manager/level-modal.component.ts", lineNumber: 115 });
})();

// apps/concierge/src/app/level-manager/level-management.service.ts
var _LevelManagementService = class _LevelManagementService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.level_list = this._org.level_list;
    this.filtered_levels = combineLatest([
      this._org.building_list,
      this.level_list,
      this._options
    ]).pipe(switchMap(async ([buildings, list, options]) => {
      list = list.filter((_) => buildings.find((bld) => bld.id === _.parent_id));
      if (options.zone) {
        list = list.filter((_) => _.parent_id === options.zone);
      }
      if (options.search) {
        list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
      }
      for (const level of list) {
        const parent = this._org.buildings.find((bld) => bld.id === level.parent_id);
        if (parent) {
          level.building = parent.display_name || parent.name;
        }
        level.room_count = await requestSpacesForZone(level.id).toPromise().then((spaces) => spaces.length);
      }
      return list;
    }), shareReplay(1));
  }
  setFilters(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  setSearchString(search) {
    this._options.next(__spreadProps(__spreadValues({}, this._options.getValue()), { search }));
  }
  editLevel(level = new mn()) {
    const ref = this._dialog.open(LevelModalComponent, {
      data: level
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  async removeLevel(level) {
    const ref = await openConfirmModal({
      title: i18n("APP.CONCIERGE.LEVELS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.LEVELS_REMOVE_MSG", {
        name: level.name
      }),
      icon: { content: "delete_forever" },
      confirm_text: i18n("COMMON.REMOVE")
    }, this._dialog);
    if (ref.reason !== "done")
      return ref.close();
    ref.loading(i18n("APP.CONCIERGE.LEVELS_REMOVE_LOADING"));
    await Lc(level.id).toPromise().catch((e) => {
      notifyError(i18n("APP.CONCIERGE.LEVELS_REMOVE_ERROR", { error: e }));
      ref.close();
      throw e;
    });
    this._org.removeZone({ id: level.id, tags: ["level"] });
    notifySuccess(i18n("APP.CONCIERGE.LEVELS_REMOVE_SUCCESS"));
    ref.close();
  }
};
_LevelManagementService.\u0275fac = function LevelManagementService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LevelManagementService)();
};
_LevelManagementService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LevelManagementService, factory: _LevelManagementService.\u0275fac, providedIn: "root" });
var LevelManagementService = _LevelManagementService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LevelManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/level-manager/level-list.component.ts
var _c0 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c1 = (a0) => ({ key: "building", name: a0, size: "16rem" });
var _c2 = (a0, a1) => ({ key: "parking", name: a0, content: a1, size: "5rem", sortable: false });
var _c3 = (a0) => ({ key: "room_count", name: a0, size: "6rem" });
var _c4 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function LevelListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_8_Template_button_click_0_listener() {
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
function LevelListComponent_ng_template_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function LevelListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LevelListComponent_ng_template_10_Conditional_0_Template, 3, 0, "div", 10);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275conditional((row_r5.tags == null ? null : row_r5.tags.includes("parking")) ? 0 : -1);
  }
}
function LevelListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 12)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 3)(6, "button", 13);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_6_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editLevel(row_r7));
    });
    \u0275\u0275elementStart(7, "div", 14)(8, "icon", 15);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 13);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_13_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBookingPanelSettings(row_r7));
    });
    \u0275\u0275elementStart(14, "div", 14)(15, "icon", 16);
    \u0275\u0275text(16, " top_panel_open ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 13);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_20_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeLevel(row_r7));
    });
    \u0275\u0275elementStart(21, "div", 14)(22, "icon", 17);
    \u0275\u0275text(23, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const menu_r8 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 4, "APP.CONCIERGE.LEVELS_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 6, "APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 8, "APP.CONCIERGE.LEVELS_REMOVE"), " ");
  }
}
var _LevelListComponent = class _LevelListComponent {
  constructor() {
    this._manager = inject(LevelManagementService);
    this._clipboard = inject(Clipboard);
    this._dialog = inject(MatDialog);
    this.levels = this._manager.filtered_levels;
    this.editLevel = (level) => this._manager.editLevel(level);
    this.removeLevel = (level) => this._manager.removeLevel(level);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess(i18n("APP.CONCIERGE.LEVELS_COPIED_ID"));
    };
  }
  editBookingPanelSettings(level) {
    this._dialog.open(BookingPanelSettingsModalComponent, {
      data: { zone: level }
    });
  }
};
_LevelListComponent.\u0275fac = function LevelListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LevelListComponent)();
};
_LevelListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelListComponent, selectors: [["level-list"]], standalone: false, decls: 14, vars: 32, consts: [["name_template", ""], ["parking_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "min-w-[48rem]", "text-sm", 3, "data", "empty_message", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-success", "text-2xl", "text-success-content"], [1, "flex", "w-full", "justify-center", "space-x-2", "p-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["className", "material-symbols-rounded", 1, "text-2xl"], [1, "text-2xl", "text-error"]], template: function LevelListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "simple-table", 5);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275element(7, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, LevelListComponent_ng_template_8_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, LevelListComponent_ng_template_10_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, LevelListComponent_ng_template_12_Template, 27, 10, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const name_template_r9 = \u0275\u0275reference(9);
    const parking_template_r10 = \u0275\u0275reference(11);
    const action_template_r11 = \u0275\u0275reference(13);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.levels)("empty_message", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.LEVELS_EMPTY"))("columns", \u0275\u0275pureFunction5(26, _c5, \u0275\u0275pureFunction2(14, _c0, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.LEVELS_NAME"), name_template_r9), \u0275\u0275pureFunction1(17, _c1, \u0275\u0275pipeBind1(4, 8, "RESOURCE.BUILDING")), \u0275\u0275pureFunction2(19, _c2, \u0275\u0275pipeBind1(5, 10, "RESOURCE.PARKING"), parking_template_r10), \u0275\u0275pureFunction1(22, _c3, \u0275\u0275pipeBind1(6, 12, "APP.CONCIERGE.LEVELS_ROOMS")), \u0275\u0275pureFunction1(24, _c4, action_template_r11)))("sortable", true);
  }
}, dependencies: [MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, SimpleTableComponent, TranslatePipe], encapsulation: 2 });
var LevelListComponent = _LevelListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LevelListComponent, [{
    type: Component,
    args: [{ selector: "level-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-[48rem] text-sm"
                [data]="levels"
                [empty_message]="'APP.CONCIERGE.LEVELS_EMPTY' | translate"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'APP.CONCIERGE.LEVELS_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'building',
                        name: 'RESOURCE.BUILDING' | translate,
                        size: '16rem',
                    },
                    {
                        key: 'parking',
                        name: 'RESOURCE.PARKING' | translate,
                        content: parking_template,
                        size: '5rem',
                        sortable: false,
                    },
                    {
                        key: 'room_count',
                        name: 'APP.CONCIERGE.LEVELS_ROOMS' | translate,
                        size: '6rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.5rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-20 w-full"></div>
        </div>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                <div class="font-mono text-[0.625rem] opacity-30">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #parking_template let-row="row">
            @if (row.tags?.includes('parking')) {
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content"
                >
                    <icon>done</icon>
                </div>
            }
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex w-full justify-center space-x-2 p-1">
                <button
                    icon
                    matRipple
                    class="h-12 w-12 rounded"
                    [matMenuTriggerFor]="menu"
                >
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="editLevel(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">edit</icon>
                            <span>{{
                                'APP.CONCIERGE.LEVELS_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        (click)="editBookingPanelSettings(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon
                                className="material-symbols-rounded"
                                class="text-2xl"
                            >
                                top_panel_open
                            </icon>
                            <span>{{
                                'APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL'
                                    | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removeLevel(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl text-error"> delete </icon>
                            <span>
                                {{ 'APP.CONCIERGE.LEVELS_REMOVE' | translate }}
                            </span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelListComponent, { className: "LevelListComponent", filePath: "apps/concierge/src/app/level-manager/level-list.component.ts", lineNumber: 122 });
})();

// apps/concierge/src/app/level-manager/level-manager.component.ts
var _c02 = ["app-level-manager", ""];
var _LevelManagerComponent = class _LevelManagerComponent {
  constructor() {
    this._manager = inject(LevelManagementService);
    this.newLevel = () => this._manager.editLevel();
  }
};
_LevelManagerComponent.\u0275fac = function LevelManagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LevelManagerComponent)();
};
_LevelManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelManagerComponent, selectors: [["", "app-level-manager", ""]], standalone: false, attrs: _c02, decls: 12, vars: 6, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "mb-2", "flex", "items-center", "justify-between", "px-8", "pb-8", "pt-4"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "relative", "block", "h-1/2", "w-full", "flex-1"]], template: function LevelManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1)(4, "header", 2)(5, "h2", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 4);
    \u0275\u0275listener("click", function LevelManagerComponent_Template_button_click_8_listener() {
      return ctx.newLevel();
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "level-list", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 2, "APP.CONCIERGE.LEVELS_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 4, "APP.CONCIERGE.LEVELS_ADD"), " ");
  }
}, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, MatRipple, LevelListComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=level-manager.component.css.map */"] });
var LevelManagerComponent = _LevelManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LevelManagerComponent, [{
    type: Component,
    args: [{ selector: "[app-level-manager]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 pb-8 pt-4"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.LEVELS_HEADER' | translate }}
                    </h2>
                    <button btn matRipple (click)="newLevel()" class="w-40">
                        {{ 'APP.CONCIERGE.LEVELS_ADD' | translate }}
                    </button>
                </header>
                <level-list
                    class="relative block h-1/2 w-full flex-1"
                ></level-list>
            </main>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;dd45660a96c490516c2f2104d17b5d40ade70328f67ef5d45dcf89ed7685333a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/level-manager/level-manager.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar {\n  height: 100%;\n}\nmain {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=level-manager.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelManagerComponent, { className: "LevelManagerComponent", filePath: "apps/concierge/src/app/level-manager/level-manager.component.ts", lineNumber: 52 });
})();

// apps/concierge/src/app/level-manager/level-manager.module.ts
var ROUTES = [{ path: "", component: LevelManagerComponent }];
var _LevelManagerModule = class _LevelManagerModule {
};
_LevelManagerModule.\u0275fac = function LevelManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LevelManagerModule)();
};
_LevelManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LevelManagerModule });
_LevelManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  SharedSpacesModule,
  SharedUsersModule,
  MatChipsModule,
  RouterModule.forChild(ROUTES)
] });
var LevelManagerModule = _LevelManagerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LevelManagerModule, [{
    type: NgModule,
    args: [{
      declarations: [
        LevelManagerComponent,
        LevelListComponent,
        LevelModalComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedSpacesModule,
        SharedUsersModule,
        MatChipsModule,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  LevelManagerModule
};
//# sourceMappingURL=level-manager.module-3J6T43XP.js.map
