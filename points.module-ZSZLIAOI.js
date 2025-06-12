import {
  DesksStateService
} from "./chunk-KDJTFIHA.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-3KCXHLFO.js";
import "./chunk-AAJNSREL.js";
import "./chunk-FTGOAU2Z.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  CounterComponent,
  CurrencyPipe,
  DateOptionsComponent,
  DefaultValueAccessor,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  MAT_DIALOG_DATA,
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatChipsModule,
  MatDialog,
  MatDialogClose,
  MatFormField,
  MatInput,
  MatOption,
  MatPrefix,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatSuffix,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SettingsToggleComponent,
  SimpleTableComponent,
  SpacesService,
  TimeFieldComponent,
  TranslatePipe,
  UIModule,
  __async,
  __spreadProps,
  __spreadValues,
  addHours,
  combineLatest,
  first,
  map,
  randomInt,
  shareReplay,
  tap,
  toDate,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
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
} from "./chunk-IWPNQ5LR.js";

// node_modules/date-fns/startOfHour.js
function startOfHour(date, options) {
  const _date = toDate(date, options?.in);
  _date.setMinutes(0, 0, 0);
  return _date;
}

// apps/concierge/src/app/points/asset-modal.component.ts
var _c0 = () => [];
var _c1 = () => ({ standalone: true });
function PointsAssetModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function PointsAssetModalComponent_main_5_mat_spinner_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 31);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function PointsAssetModalComponent_main_5_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275property("value", (option_r2 == null ? null : option_r2.display_name) || (option_r2 == null ? null : option_r2.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (option_r2 == null ? null : option_r2.display_name) || (option_r2 == null ? null : option_r2.name), " ");
  }
}
function PointsAssetModalComponent_main_5_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.POINTS_ASSETS_SEARCH_EMPTY"), " ");
  }
}
function PointsAssetModalComponent_main_5_div_48_a_time_field_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a-time-field", 45);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_main_5_div_48_a_time_field_14_Template_a_time_field_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const rule_r4 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(rule_r4.second, $event) || (rule_r4.second = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rule_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", rule_r4.second);
    \u0275\u0275property("from", rule_r4.first)("ngModelOptions", \u0275\u0275pureFunction0(3, _c1));
  }
}
function PointsAssetModalComponent_main_5_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "mat-form-field", 36)(3, "mat-select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_main_5_div_48_Template_mat_select_ngModelChange_3_listener($event) {
      const rule_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r4.type, $event) || (rule_r4.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "mat-option", 38);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 39);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-option", 40);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "a-time-field", 41);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_main_5_div_48_Template_a_time_field_ngModelChange_13_listener($event) {
      const rule_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r4.first, $event) || (rule_r4.first = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PointsAssetModalComponent_main_5_div_48_a_time_field_14_Template, 1, 4, "a-time-field", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 43);
    \u0275\u0275text(16, "@");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a-counter", 44);
    \u0275\u0275twoWayListener("ngModelChange", function PointsAssetModalComponent_main_5_div_48_Template_a_counter_ngModelChange_17_listener($event) {
      const rule_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r4.rate, $event) || (rule_r4.rate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rule_r4 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", rule_r4.type);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(20, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 14, "APP.CONCIERGE.POINTS_RATE_RULES_BEFORE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 16, "APP.CONCIERGE.POINTS_RATE_RULES_BETWEEN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 18, "APP.CONCIERGE.POINTS_RATE_RULES_AFTER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", rule_r4.first);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(21, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", rule_r4.type === "between");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", rule_r4.rate);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(22, _c1))("min", 0)("max", 300)("step", 5)("render_fn", ctx_r5.renderPercent);
  }
}
function PointsAssetModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 8)(1, "div", 9)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 10)(6, "mat-select", 11)(7, "mat-option", 12);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-option", 13);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 9)(14, "label");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 10)(18, "icon", 14);
    \u0275\u0275text(19, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 15);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275template(22, PointsAssetModalComponent_main_5_mat_spinner_22_Template, 1, 1, "mat-spinner", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-autocomplete", null, 0);
    \u0275\u0275template(25, PointsAssetModalComponent_main_5_mat_option_25_Template, 2, 2, "mat-option", 17);
    \u0275\u0275pipe(26, "async");
    \u0275\u0275template(27, PointsAssetModalComponent_main_5_mat_option_27_Template, 3, 4, "mat-option", 18);
    \u0275\u0275pipe(28, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 19);
    \u0275\u0275element(30, "settings-toggle", 20);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 21)(33, "div", 22)(34, "label");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "a-counter", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 22)(39, "label");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "a-counter", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 25)(44, "label");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div");
    \u0275\u0275template(48, PointsAssetModalComponent_main_5_div_48_Template, 18, 23, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 27);
    \u0275\u0275listener("click", function PointsAssetModalComponent_main_5_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.newRule());
    });
    \u0275\u0275elementStart(50, "div", 28)(51, "icon", 29);
    \u0275\u0275text(52, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 30);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_25_0;
    const auto_r7 = \u0275\u0275reference(24);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r5.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 26, "APP.CONCIERGE.POINTS_TYPE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 28, "RESOURCE.ROOM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 30, "RESOURCE.DESK"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 32, "RESOURCE.ASSET"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("opacity-30", !ctx_r5.form.get("type").value);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 34, "APP.CONCIERGE.POINTS_ASSETS_SEARCH"))("matAutocomplete", auto_r7);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r5.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(26, 36, ctx_r5.asset_options));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_12_0 = \u0275\u0275pipeBind1(28, 38, ctx_r5.asset_options)) == null ? null : tmp_12_0.length));
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(31, 40, "APP.CONCIERGE.POINTS_ACCEPT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 42, "APP.CONCIERGE.POINTS_STANDARD_RATE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 500)("max", 8e4)("step", 500)("render_fn", ctx_r5.renderPrice);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 44, "APP.CONCIERGE.POINTS_DISCOUNT_CAP"));
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("max", 100)("step", 5)("render_fn", ctx_r5.renderPercent);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 46, "APP.CONCIERGE.POINTS_RATE_RULES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ((tmp_25_0 = ctx_r5.form.get("custom_rates")) == null ? null : tmp_25_0.value) || \u0275\u0275pureFunction0(50, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 48, "APP.CONCIERGE.POINTS_RATE_RULES_NEW"));
  }
}
var PointsAssetModalComponent = class _PointsAssetModalComponent extends AsyncHandler {
  constructor(_spaces, _desks, _data) {
    super();
    this._spaces = _spaces;
    this._desks = _desks;
    this._data = _data;
    this.event = new EventEmitter();
    this.form = new FormGroup({
      id: new FormControl(this._data.asset?.id || ""),
      asset_id: new FormControl(this._data.asset?.asset_id || ""),
      name: new FormControl(this._data.asset?.name || ""),
      type: new FormControl(this._data.asset?.type || ""),
      accept_points: new FormControl(this._data.asset?.accept_points ?? false),
      discount_cap: new FormControl(this._data.asset?.discount_cap || 50),
      unit_price: new FormControl(this._data.asset?.unit_price || 1e3),
      custom_rates: new FormControl(this._data.asset?.custom_rates || [])
    });
    this.asset_options = combineLatest([
      this.form.valueChanges,
      this._spaces.list,
      this._desks.desks
    ]).pipe(map(([{ type, name }, spaces, desks]) => {
      this.loading = true;
      const search = (name || "").toLowerCase();
      return !type ? [] : type === "space" ? spaces.filter((_) => _.name.toLowerCase().includes(search)) : desks.filter((_) => _.name.toLowerCase().includes(search));
    }), tap(() => this.loading = false), shareReplay(1));
    this._desks.setFilters({ zones: ["All"] });
    this.subscription("type_change", this.form.get("type").valueChanges.subscribe((v) => {
      const field = this.form.get("name");
      v ? field.enable() : field.disable();
    }));
  }
  renderPrice(value = 0) {
    return `$${(value / 100)?.toFixed(2)}`;
  }
  renderPercent(value = 0) {
    return `${value}%`;
  }
  newRule() {
    this.form.get("custom_rates").setValue([
      ...this.form.get("custom_rates").value,
      {
        type: "before",
        first: startOfHour(/* @__PURE__ */ new Date()),
        second: addHours(startOfHour(/* @__PURE__ */ new Date()), 1),
        rate: 100
      }
    ]);
  }
  save() {
    this.event.emit({ reason: "done", metadata: __spreadValues({}, this.form.value) });
  }
  static {
    this.\u0275fac = function PointsAssetModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointsAssetModalComponent)(\u0275\u0275directiveInject(SpacesService), \u0275\u0275directiveInject(DesksStateService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsAssetModalComponent, selectors: [["points-asset-modal"]], outputs: { event: "event" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 9, consts: [["auto", "matAutocomplete"], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "min-w-[28rem] overflow-hidden px-4 py-2", 3, "formGroup", 4, "ngIf"], [1, "flex", "items-center", "justify-end", "space-x-2", "border-t", "border-base-200", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "min-w-[28rem]", "overflow-hidden", "px-4", "py-2", 3, "formGroup"], [1, "flex", "flex-col"], ["appearance", "outline", 1, "h-[3.25rem]", "flex-1"], ["formControlName", "type", "placeholder", "Select asset type"], ["value", "space"], ["value", "desk"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "name", 3, "placeholder", "matAutocomplete"], ["matSuffix", "", 3, "diameter", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], [1, "mb-4", "flex", "items-center"], ["formControlName", "accept_points", 1, "w-full", 3, "name"], [1, "mb-4", "flex", "space-x-4"], [1, "flex", "flex-1", "flex-col"], ["formControlName", "unit_price", 1, "w-full", 3, "min", "max", "step", "render_fn"], ["formControlName", "discount_cap", 1, "w-full", 3, "min", "max", "step", "render_fn"], [1, ""], ["rule", "", "class", "flex items-center", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", 1, "clear", "w-full", 3, "click"], [1, "flex", "w-full", "items-center", "justify-center"], [1, "text-lg"], [1, "underline"], ["matSuffix", "", 3, "diameter"], [3, "value"], [3, "disabled"], ["rule", "", 1, "flex", "items-center"], [1, "flex", "w-1/2", "flex-1", "items-center", "space-x-2"], ["appearance", "outline", 1, "flex-2", "h-[3.25rem]", "w-32"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "before"], ["value", "between"], ["value", "after"], [1, "mt-2", "w-40", "flex-1", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "mt-2 w-40 flex-1", 3, "ngModel", "from", "ngModelOptions", "ngModelChange", 4, "ngIf"], [1, "mx-2"], [1, "rounded", "border", "border-base-200", 3, "ngModelChange", "ngModel", "ngModelOptions", "min", "max", "step", "render_fn"], [1, "mt-2", "w-40", "flex-1", 3, "ngModelChange", "ngModel", "from", "ngModelOptions"]], template: function PointsAssetModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, PointsAssetModalComponent_button_4_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, PointsAssetModalComponent_main_5_Template, 56, 51, "main", 4);
        \u0275\u0275elementStart(6, "footer", 5)(7, "button", 6);
        \u0275\u0275listener("click", function PointsAssetModalComponent_Template_button_click_7_listener() {
          return ctx.save();
        });
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, (ctx.form == null ? null : ctx.form.value == null ? null : ctx.form.value.id) ? "APP.CONCIERGE.POINTS_ASSETS_EDIT" : "APP.CONCIERGE.POINTS_ASSETS_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.form.value.name);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "COMMON.SAVE"), " ");
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, MatFormField, MatPrefix, MatSuffix, MatInput, MatSelect, MatOption, MatProgressSpinner, MatDialogClose, MatAutocomplete, MatAutocompleteTrigger, MatRipple, CounterComponent, TimeFieldComponent, IconComponent, SettingsToggleComponent, AsyncPipe, TranslatePipe], styles: ["\n\nlabel[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 0;\n  margin: 0 1rem 0 0;\n}\n/*# sourceMappingURL=asset-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsAssetModalComponent, { className: "PointsAssetModalComponent", filePath: "apps/concierge/src/app/points/asset-modal.component.ts", lineNumber: 227 });
})();

// apps/concierge/src/app/points/points-state.service.ts
var PointsStateService = class _PointsStateService {
  constructor(_dialog) {
    this._dialog = _dialog;
    this._assets = new BehaviorSubject([]);
    this.assets = this._assets.asObservable();
    this._assets.next(JSON.parse(localStorage.getItem("PLACEOS.point_assets") || "[]"));
    this.assets.subscribe((list) => {
      localStorage.setItem("PLACEOS.point_assets", JSON.stringify(list));
    });
  }
  newAsset(asset) {
    return __async(this, null, function* () {
      const ref = this._dialog.open(PointsAssetModalComponent, {
        data: { asset }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details.reason !== "done")
        return ref.close();
      this._assets.next([
        ...this._assets.getValue().filter((_) => _.id !== asset?.id),
        __spreadProps(__spreadValues({}, details.metadata), {
          id: details.metadata.id || `PA-${randomInt(999999999)}`
        })
      ]);
      ref.close();
    });
  }
  removeAsset(asset_id) {
    this._assets.next(this._assets.getValue().filter((_) => _.id !== asset_id));
  }
  static {
    this.\u0275fac = function PointsStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointsStateService)(\u0275\u0275inject(MatDialog));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PointsStateService, factory: _PointsStateService.\u0275fac, providedIn: "root" });
  }
};

// apps/concierge/src/app/points/points-assets.component.ts
var _c02 = (a0) => ({ key: "name", name: a0 });
var _c12 = (a0, a1) => ({ key: "type", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "unit_price", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "accept_points", name: a0, content: a1, size: "5.5rem" });
var _c4 = (a0, a1) => ({ key: "discount_cap", name: a0, content: a1, size: "9rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6.5rem" });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function PointsAssetsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r1, " ");
  }
}
function PointsAssetsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, data_r2 / 100, ctx_r2.code), " p/h ");
  }
}
function PointsAssetsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275classProp("bg-error", !data_r4)("bg-success", data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4 ? "done" : "close");
  }
}
function PointsAssetsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r5, "%");
  }
}
function PointsAssetsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 12);
    \u0275\u0275listener("click", function PointsAssetsComponent_ng_template_15_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(row_r7));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function PointsAssetsComponent_ng_template_15_Template_button_click_4_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(row_r7));
    });
    \u0275\u0275elementStart(5, "icon", 13);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
var PointsAssetsComponent = class _PointsAssetsComponent {
  get code() {
    return this._org.currency_code;
  }
  constructor(_state, _org) {
    this._state = _state;
    this._org = _org;
    this.asset_list = this._state.assets;
    this.edit = (d) => this._state.newAsset(d);
    this.remove = (d) => this._state.removeAsset(d?.id);
  }
  static {
    this.\u0275fac = function PointsAssetsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointsAssetsComponent)(\u0275\u0275directiveInject(PointsStateService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsAssetsComponent, selectors: [["points-assets"]], standalone: false, decls: 17, vars: 39, consts: [["type_template", ""], ["price_template", ""], ["bool_template", ""], ["discount_template", ""], ["action_template", ""], [1, "block", "w-full", "min-w-[32rem]", 3, "data", "columns", "sortable", "empty_message"], [1, "p-2"], [1, "rounded", "bg-base-200", "px-2", "py-1", "text-sm", "capitalize"], [1, "p-4", "font-mono", "text-xs"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "text-2xl", "text-white"], [1, "p-4", "text-right"], [1, "mx-auto", "flex", "items-center", "justify-end", "p-2"], ["icon", "", "matRipple", "", 3, "click"], [1, "text-error"]], template: function PointsAssetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "simple-table", 5);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275template(7, PointsAssetsComponent_ng_template_7_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, PointsAssetsComponent_ng_template_9_Template, 3, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, PointsAssetsComponent_ng_template_11_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(13, PointsAssetsComponent_ng_template_13_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(15, PointsAssetsComponent_ng_template_15_Template, 7, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const type_template_r8 = \u0275\u0275reference(8);
        const price_template_r9 = \u0275\u0275reference(10);
        const bool_template_r10 = \u0275\u0275reference(12);
        const discount_template_r11 = \u0275\u0275reference(14);
        const action_template_r12 = \u0275\u0275reference(16);
        \u0275\u0275property("data", ctx.asset_list)("columns", \u0275\u0275pureFunction6(32, _c6, \u0275\u0275pureFunction1(16, _c02, \u0275\u0275pipeBind1(1, 4, "FORM.NAME")), \u0275\u0275pureFunction2(18, _c12, \u0275\u0275pipeBind1(2, 6, "COMMON.TYPE"), type_template_r8), \u0275\u0275pureFunction2(21, _c2, \u0275\u0275pipeBind1(3, 8, "APP.CONCIERGE.POINTS_PRICE"), price_template_r9), \u0275\u0275pureFunction2(24, _c3, \u0275\u0275pipeBind1(4, 10, "APP.CONCIERGE.POINTS_LABEL"), bool_template_r10), \u0275\u0275pureFunction2(27, _c4, \u0275\u0275pipeBind1(5, 12, "APP.CONCIERGE.POINTS_DISCOUNT"), discount_template_r11), \u0275\u0275pureFunction1(30, _c5, action_template_r12)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(6, 14, "APP.CONCIERGE.POINTS_ASSETS_EMPTY"));
      }
    }, dependencies: [MatRipple, IconComponent, SimpleTableComponent, CurrencyPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=points-assets.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsAssetsComponent, { className: "PointsAssetsComponent", filePath: "apps/concierge/src/app/points/points-assets.component.ts", lineNumber: 108 });
})();

// apps/concierge/src/app/points/points-overview.component.ts
var PointsOverviewComponent = class _PointsOverviewComponent {
  constructor() {
    this.points = {
      value: 0.1,
      desk_checkin: 2,
      room_checkin: 2,
      booking_cancel: 3,
      wellness_card: 1
    };
  }
  ngOnInit() {
    this.loadPoints();
  }
  renderPrice(value = 0) {
    return `$${value?.toFixed(2)}`;
  }
  loadPoints() {
    this.points = __spreadValues(__spreadValues({}, this.points), JSON.parse(localStorage.getItem("PLACEOS.point_details") || "{}"));
  }
  storePoints() {
    localStorage.setItem("PLACEOS.point_details", JSON.stringify(this.points));
  }
  static {
    this.\u0275fac = function PointsOverviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointsOverviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsOverviewComponent, selectors: [["points-overview"]], standalone: false, decls: 40, vars: 34, consts: [[1, "w-full", "rounded", "bg-secondary", "px-4", "py-3", "text-lg", "font-medium", "text-white", "shadow"], [1, "w-full", "bg-base-100"], [1, "p-2", "text-lg", "font-medium", "underline"], [1, "mb-4", "flex", "items-center", "space-x-2", "p-4"], [1, "font-mono"], [1, "w-48", 3, "ngModelChange", "step", "ngModel", "render_fn"], [1, "text-2xl", 3, "matTooltip"], [1, "w-full", "flex-1", "bg-base-100"], [1, "p-4"], [1, "flex", "items-center", "space-x-4", "border-b", "border-base-200", "p-2"], [3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "space-x-4", "p-2"]], template: function PointsOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "section", 1)(4, "h2", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 3)(8, "span", 4);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a-counter", 5);
        \u0275\u0275twoWayListener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.points.value, $event) || (ctx.points.value = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_11_listener() {
          return ctx.storePoints();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "icon", 6);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275text(14, " info ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "section", 7)(16, "h2", 2);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 8)(20, "div", 9)(21, "a-counter", 10);
        \u0275\u0275twoWayListener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.points.desk_checkin, $event) || (ctx.points.desk_checkin = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_21_listener() {
          return ctx.storePoints();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 9)(26, "a-counter", 10);
        \u0275\u0275twoWayListener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.points.room_checkin, $event) || (ctx.points.room_checkin = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_26_listener() {
          return ctx.storePoints();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 9)(31, "a-counter", 10);
        \u0275\u0275twoWayListener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.points.booking_cancel, $event) || (ctx.points.booking_cancel = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_31_listener() {
          return ctx.storePoints();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span");
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 11)(36, "a-counter", 10);
        \u0275\u0275twoWayListener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_36_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.points.wellness_card, $event) || (ctx.points.wellness_card = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function PointsOverviewComponent_Template_a_counter_ngModelChange_36_listener() {
          return ctx.storePoints();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span");
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 16, "APP.CONCIERGE.POINTS_OVERVIEW_HEADER"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 18, "APP.CONCIERGE.POINTS_VALUE_HEADER"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 20, "APP.CONCIERGE.POINTS_ONE_POINT"), " =");
        \u0275\u0275advance(2);
        \u0275\u0275property("step", 0.1);
        \u0275\u0275twoWayProperty("ngModel", ctx.points.value);
        \u0275\u0275property("render_fn", ctx.renderPrice);
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(13, 22, "APP.CONCIERGE.POINTS_VALUE_INFO"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 24, "APP.CONCIERGE.POINTS_AUTO_REWARDS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.points.desk_checkin);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 26, "APP.CONCIERGE.POINTS_REWARD_DESK"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.points.room_checkin);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 28, "APP.CONCIERGE.POINTS_REWARD_ROOM"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.points.booking_cancel);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 30, "APP.CONCIERGE.POINTS_REWARD_CANCEL"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.points.wellness_card);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 32, "APP.CONCIERGE.POINTS_REWARD_WELLNESS"));
      }
    }, dependencies: [NgControlStatus, NgModel, MatTooltip, CounterComponent, IconComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=points-overview.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsOverviewComponent, { className: "PointsOverviewComponent", filePath: "apps/concierge/src/app/points/points-overview.component.ts", lineNumber: 94 });
})();

// apps/concierge/src/app/points/points-topbar.component.ts
var _c03 = ["*"];
var PointsTopbarComponent = class _PointsTopbarComponent extends AsyncHandler {
  constructor(_org) {
    super();
    this._org = _org;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
    });
  }
  static {
    this.\u0275fac = function PointsTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointsTopbarComponent)(\u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsTopbarComponent, selectors: [["points-topbar"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c03, decls: 8, vars: 3, consts: [[1, "flex", "h-20", "items-center", "space-x-2", "bg-base-100", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "pl-2"]], template: function PointsTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 2)(5, "date-options");
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275projection(7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.POINTS_HEADER"), " ");
      }
    }, dependencies: [DateOptionsComponent, TranslatePipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=points-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsTopbarComponent, { className: "PointsTopbarComponent", filePath: "apps/concierge/src/app/points/points-topbar.component.ts", lineNumber: 31 });
})();

// apps/concierge/src/app/points/points.component.ts
var _c04 = () => ["/points-management", "overview"];
var _c13 = () => ["/points-management", "assets"];
function PointsComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function PointsComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newAsset());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.POINTS_ASSETS_ADD"), " ");
  }
}
var PointsComponent = class _PointsComponent extends AsyncHandler {
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    this.newAsset = () => this._state.newAsset();
  }
  ngOnInit() {
    this.subscription("route.params", this._router.events.subscribe(() => {
      const url_parts = this._router.url?.split("/") || [""];
      this.page = url_parts[url_parts.length - 1];
    }));
    const parts = this._router.url?.split("/") || [""];
    this.page = parts[parts.length - 1];
  }
  static {
    this.\u0275fac = function PointsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointsComponent)(\u0275\u0275directiveInject(PointsStateService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointsComponent, selectors: [["placeos-new-points"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 14, consts: [["tabPanel", ""], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "relative", "z-10"], ["btn", "", "matRipple", "", "class", "w-40", 3, "click", 4, "ngIf"], [1, "mb-4", "px-8"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"]], template: function PointsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 2)(4, "points-topbar", 3);
        \u0275\u0275template(5, PointsComponent_button_5_Template, 3, 3, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "nav", 6)(8, "a", 7);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a", 7);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "mat-tab-nav-panel", 8, 0);
        \u0275\u0275element(16, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const tabPanel_r3 = \u0275\u0275reference(15);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.page === "assets");
        \u0275\u0275advance(2);
        \u0275\u0275property("tabPanel", tabPanel_r3);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c04))("active", ctx.page === "overview");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, "APP.CONCIERGE.POINTS_TAB_OVERVIEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c13))("active", ctx.page === "assets");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 10, "APP.CONCIERGE.POINTS_TAB_ASSETS"), " ");
      }
    }, dependencies: [NgIf, ApplicationTopbarComponent, ApplicationSidebarComponent, MatRipple, MatTabNav, MatTabNavPanel, MatTabLink, RouterOutlet, RouterLink, PointsTopbarComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=points.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointsComponent, { className: "PointsComponent", filePath: "apps/concierge/src/app/points/points.component.ts", lineNumber: 66 });
})();

// apps/concierge/src/app/points/points.module.ts
var ROUTES = [
  {
    path: "",
    component: PointsComponent,
    children: [
      { path: "assets", component: PointsAssetsComponent },
      { path: "overview", component: PointsOverviewComponent },
      { path: "**", redirectTo: "overview", pathMatch: "full" }
    ]
  }
];
var PointsModule = class _PointsModule {
  static {
    this.\u0275fac = function PointsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PointsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      UIModule,
      MatTabsModule,
      MatChipsModule,
      RouterModule.forChild(ROUTES)
    ] });
  }
};
export {
  PointsModule
};
//# sourceMappingURL=points.module-ZSZLIAOI.js.map
