import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncPipe,
  BehaviorSubject,
  BookingPanelSettingsModalComponent,
  Clipboard,
  CommonModule,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
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
  NgForOf,
  NgIf,
  OrganisationService,
  PlaceZone,
  RouterModule,
  SettingsToggleComponent,
  SharedSpacesModule,
  SharedUsersModule,
  SimpleTableComponent,
  TranslatePipe,
  UIModule,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  addZone,
  authority,
  combineLatest,
  getInvalidFields,
  i18n,
  notifyError,
  notifySuccess,
  openConfirmModal,
  removeZone,
  requestSpacesForZone,
  shareReplay,
  switchMap,
  updateZone,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4KZ43ZQF.js";

// apps/concierge/src/app/level-manager/level-modal.component.ts
function LevelModalComponent_div_5_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
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
function LevelModalComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 6)(7, "mat-select", 7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275template(9, LevelModalComponent_div_5_mat_option_9_Template, 2, 2, "mat-option", 8);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.parent_id.invalid && ctx_r1.form.controls.parent_id.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "RESOURCE.BUILDING"), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "COMMON.BUILDING_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(10, 10, ctx_r1.building_list));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "APP.CONCIERGE.LEVELS_BUILDING_REQUIRED"));
  }
}
function LevelModalComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 10);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "FORM.DISPLAY_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "FORM.DISPLAY_NAME"));
  }
}
function LevelModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "settings-toggle", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.LEVELS_HAS_PARKING"));
  }
}
function LevelModalComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 16);
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
var LevelModalComponent = class _LevelModalComponent {
  constructor(_org, _data, _dialog_ref) {
    this._org = _org;
    this._data = _data;
    this._dialog_ref = _dialog_ref;
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
  save() {
    return __async(this, null, function* () {
      if (!this.form.valid) {
        return notifyError(i18n("FORM.INVALID_FIELDS", {
          field_list: getInvalidFields(this.form).join(", ")
        }));
      }
      this.loading = true;
      const data = this.form.getRawValue();
      data.tags = data.parking ? ["level", "parking"] : ["level"];
      const resp = yield (data.id ? updateZone(data.id, __spreadProps(__spreadValues({}, data), {
        name: `LEVEL ${authority().description} ${data.display_name}`
      })) : addZone(__spreadProps(__spreadValues({}, data), {
        name: `LEVEL ${authority().description} ${data.display_name}`
      }))).toPromise().catch();
      if (resp.id)
        this._dialog_ref.close(resp);
      this.loading = false;
    });
  }
  static {
    this.\u0275fac = function LevelModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelModalComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelModalComponent, selectors: [["level-modal"]], standalone: false, decls: 9, vars: 13, consts: [[3, "confirm", "heading", "loading"], ["system", "", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], ["class", "flex space-x-4 pb-4", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "zone"], ["appearance", "outline"], ["formControlName", "parent_id", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "display-name"], ["matInput", "", "name", "display-name", "formControlName", "display_name", 3, "placeholder"], [1, "flex", "space-x-4", "pb-4"], ["formControlName", "parking", 1, "flex-1", 3, "name"], [1, "flex-1"], ["for", "map-id"], ["matInput", "", "name", "map-id", "formControlName", "map_id", 3, "placeholder"]], template: function LevelModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275listener("confirm", function LevelModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(4, "form", 1);
        \u0275\u0275template(5, LevelModalComponent_div_5_Template, 14, 14, "div", 2)(6, LevelModalComponent_div_6_Template, 7, 6, "div", 2)(7, LevelModalComponent_div_7_Template, 4, 3, "div", 3)(8, LevelModalComponent_div_8_Template, 7, 6, "div", 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 7, ctx.form.value.id ? "APP.CONCIERGE.LEVELS_EDIT" : "APP.CONCIERGE.LEVELS_NEW"))("loading", \u0275\u0275pipeBind1(2, 9, ctx.loading) ? \u0275\u0275pipeBind1(3, 11, "APP.CONCIERGE.LEVELS_SAVING") : "");
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.parent_id);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.display_name);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.parking);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.map_id);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatError, MatInput, MatSelect, MatOption, FormGroupDirective, FormControlName, SettingsToggleComponent, FullscreenModalShellComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelModalComponent, { className: "LevelModalComponent", filePath: "apps/concierge/src/app/level-manager/level-modal.component.ts", lineNumber: 97 });
})();

// apps/concierge/src/app/level-manager/level-management.service.ts
var LevelManagementService = class _LevelManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.level_list = this._org.level_list;
    this.filtered_levels = combineLatest([
      this._org.building_list,
      this.level_list,
      this._options
    ]).pipe(switchMap((_0) => __async(this, [_0], function* ([buildings, list, options]) {
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
        level.room_count = yield requestSpacesForZone(level.id).toPromise().then((spaces) => spaces.length);
      }
      return list;
    })), shareReplay(1));
  }
  setFilters(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  setSearchString(search) {
    this._options.next(__spreadProps(__spreadValues({}, this._options.getValue()), { search }));
  }
  editLevel(level = new PlaceZone()) {
    const ref = this._dialog.open(LevelModalComponent, {
      data: level
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  removeLevel(level) {
    return __async(this, null, function* () {
      const ref = yield openConfirmModal({
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
      yield removeZone(level.id).toPromise().catch((e) => {
        notifyError(i18n("APP.CONCIERGE.LEVELS_REMOVE_ERROR", { error: e }));
        ref.close();
        throw e;
      });
      this._org.removeZone({ id: level.id, tags: ["level"] });
      notifySuccess(i18n("APP.CONCIERGE.LEVELS_REMOVE_SUCCESS"));
      ref.close();
    });
  }
  static {
    this.\u0275fac = function LevelManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelManagementService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LevelManagementService, factory: _LevelManagementService.\u0275fac, providedIn: "root" });
  }
};

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
function LevelListComponent_ng_template_10_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "app-icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function LevelListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LevelListComponent_ng_template_10_div_0_Template, 3, 0, "div", 10);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275property("ngIf", row_r5.tags == null ? null : row_r5.tags.includes("parking"));
  }
}
function LevelListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 13)(2, "app-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 3)(6, "button", 14);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_6_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editLevel(row_r7));
    });
    \u0275\u0275elementStart(7, "div", 15)(8, "app-icon", 16);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 14);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_13_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBookingPanelSettings(row_r7));
    });
    \u0275\u0275elementStart(14, "div", 15)(15, "app-icon", 17);
    \u0275\u0275text(16, " top_panel_open ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 14);
    \u0275\u0275listener("click", function LevelListComponent_ng_template_12_Template_button_click_20_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeLevel(row_r7));
    });
    \u0275\u0275elementStart(21, "div", 15)(22, "app-icon", 18);
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
var LevelListComponent = class _LevelListComponent {
  constructor(_manager, _clipboard, _dialog) {
    this._manager = _manager;
    this._clipboard = _clipboard;
    this._dialog = _dialog;
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
  static {
    this.\u0275fac = function LevelListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelListComponent)(\u0275\u0275directiveInject(LevelManagementService), \u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelListComponent, selectors: [["level-list"]], standalone: false, decls: 14, vars: 32, consts: [["name_template", ""], ["parking_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "min-w-[48rem]", "text-sm", 3, "data", "empty_message", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], ["class", "mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content", 4, "ngIf"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-success", "text-2xl", "text-success-content"], [1, "flex", "w-full", "justify-center", "space-x-2", "p-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["className", "material-symbols-rounded", 1, "text-2xl"], [1, "text-2xl", "text-error"]], template: function LevelListComponent_Template(rf, ctx) {
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
    }, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, SimpleTableComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelListComponent, { className: "LevelListComponent", filePath: "apps/concierge/src/app/level-manager/level-list.component.ts", lineNumber: 123 });
})();

// apps/concierge/src/app/level-manager/level-manager.component.ts
var _c02 = ["app-level-manager", ""];
var LevelManagerComponent = class _LevelManagerComponent {
  constructor(_manager) {
    this._manager = _manager;
    this.newLevel = () => this._manager.editLevel();
  }
  static {
    this.\u0275fac = function LevelManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelManagerComponent)(\u0275\u0275directiveInject(LevelManagementService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LevelManagerComponent, selectors: [["", "app-level-manager", ""]], standalone: false, attrs: _c02, decls: 12, vars: 6, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "mb-2", "flex", "items-center", "justify-between", "px-8", "pb-8", "pt-4"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "relative", "block", "h-1/2", "w-full", "flex-1"]], template: function LevelManagerComponent_Template(rf, ctx) {
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
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LevelManagerComponent, { className: "LevelManagerComponent", filePath: "apps/concierge/src/app/level-manager/level-manager.component.ts", lineNumber: 52 });
})();

// apps/concierge/src/app/level-manager/level-manager.module.ts
var ROUTES = [
  { path: "", component: LevelManagerComponent },
  { path: "new", component: LevelManagerComponent }
];
var LevelManagerModule = class _LevelManagerModule {
  static {
    this.\u0275fac = function LevelManagerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelManagerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LevelManagerModule });
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
  LevelManagerModule
};
//# sourceMappingURL=level-manager.module-CWSUWVX6.js.map
