import {
  CateringMenuComponent,
  CateringOrderListComponent,
  CateringOrdersService,
  CateringStateService,
  ChargeCodeListModalComponent,
  SharedCateringModule
} from "./chunk-LTUZR2LI.js";
import {
  MatTabsModule
} from "./chunk-YEGAMUFN.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  AvailableRoomsStateModalComponent,
  BuildingPipe,
  CommonModule,
  DateOptionsComponent,
  FormsModule,
  IconComponent,
  MatChipsModule,
  MatDialog,
  MatFormField,
  MatOption,
  MatRipple,
  MatSelect,
  MatTooltip,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  OrganisationService,
  Router,
  RouterLink,
  RouterModule,
  SearchbarComponent,
  SettingsService,
  TranslatePipe,
  UIModule,
  __async,
  __spreadProps,
  __spreadValues,
  combineLatest,
  first,
  map,
  nextValueFrom,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-B4JECCWY.js";

// apps/concierge/src/app/catering/catering-topbar.component.ts
function CateringTopbarComponent_mat_option_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 16);
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
function CateringTopbarComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12)(1, "div", 13);
    \u0275\u0275template(2, CateringTopbarComponent_mat_option_10_div_2_Template, 5, 3, "div", 14);
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
function CateringTopbarComponent_mat_form_field_12_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caterer_r4 = ctx.$implicit;
    \u0275\u0275property("value", caterer_r4 || "<empty>");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", caterer_r4 || "[" + \u0275\u0275pipeBind1(2, 2, "CATERING.CATERER_EMPTY") + "]", " ");
  }
}
function CateringTopbarComponent_mat_form_field_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 5)(1, "mat-select", 17);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function CateringTopbarComponent_mat_form_field_12_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCaterer($event));
    });
    \u0275\u0275elementStart(3, "mat-option", 18);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CateringTopbarComponent_mat_form_field_12_mat_option_6_Template, 3, 4, "mat-option", 7);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.filters == null ? null : ctx_r1.filters.caterer)("placeholder", \u0275\u0275pipeBind1(2, 4, "CATERING.CATERERS_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "CATERING.CATERERS_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(7, 8, ctx_r1.caterers));
  }
}
function CateringTopbarComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 19);
  }
}
function CateringTopbarComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addItem());
    });
    \u0275\u0275elementStart(2, "icon", 21);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.MENU_ADD"));
  }
}
function CateringTopbarComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editConfig());
    });
    \u0275\u0275elementStart(2, "icon", 21);
    \u0275\u0275text(3, "menu_book");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.BOOKING_RULES"));
  }
}
function CateringTopbarComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.importMenu());
    });
    \u0275\u0275elementStart(2, "icon", 21);
    \u0275\u0275text(3, "cloud_upload");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.MENU_IMPORT"));
  }
}
function CateringTopbarComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRoomAvailability());
    });
    \u0275\u0275elementStart(2, "icon", 21);
    \u0275\u0275text(3, "event_available");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.ROOM_AVAILABILITY"));
  }
}
function CateringTopbarComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringTopbarComponent_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setChargeCodes());
    });
    \u0275\u0275elementStart(2, "icon", 21);
    \u0275\u0275text(3, "payments");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.CHARGE_CODES"));
  }
}
function CateringTopbarComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 19);
  }
}
function CateringTopbarComponent_date_options_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 22);
    \u0275\u0275listener("dateChange", function CateringTopbarComponent_date_options_21_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
  }
}
var CateringTopbarComponent = class _CateringTopbarComponent extends AsyncHandler {
  get building() {
    return this._org.building;
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor(_orders, _catering, _org, _route, _router, _dialog, _settings) {
    super();
    this._orders = _orders;
    this._catering = _catering;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    this._settings = _settings;
    this.zones = [];
    this.filters = this._orders.filters;
    this.caterers = this._catering.caterers;
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this._settings.get("app.use_region") ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.setDate = (date) => this._orders.filters = __spreadProps(__spreadValues({}, this._orders.filters), { date });
    this.setCaterer = (caterer) => this._orders.filters = __spreadProps(__spreadValues({}, this._orders.filters), { caterer });
    this.setSearch = (str) => this._orders.filters = __spreadProps(__spreadValues({}, this._orders.filters), { search: str });
    this.updateZones = (z) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._orders.filters = __spreadProps(__spreadValues({}, this._orders.filters), { zones: [z] });
      this._catering.zone = z[0];
    };
    this.addItem = () => this._catering.addItem();
    this.editConfig = () => this._catering.editConfig();
    this.importMenu = () => this._catering.importMenu();
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this._catering.zone = (this._orders.filters?.zones || [])[0] || this._org.building?.id;
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
        if (params.has("zone_ids")) {
          const zones = params.get("zone_ids").split(",");
          if (!zones.length)
            return;
          const level = this._org.levelWithID(zones);
          this.zones = zones;
          if (!level)
            return;
          this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
        }
      }));
      this.subscription("route.params", this._route.paramMap.subscribe((params) => this.page = params.has("view") ? params.get("view") : ""));
    });
  }
  setRoomAvailability() {
    return __async(this, null, function* () {
      const ref = this._dialog.open(AvailableRoomsStateModalComponent, {
        data: {
          type: "Catering",
          disabled_rooms: yield nextValueFrom(this._catering.availability)
        }
      });
      this.subscription("room-availability", ref.componentInstance.change.subscribe((list) => __async(this, null, function* () {
        yield this._catering.saveSettings({ disabled_rooms: list }).catch();
        ref.componentInstance.loading = false;
      })));
    });
  }
  setChargeCodes() {
    this._dialog.open(ChargeCodeListModalComponent);
  }
  static {
    this.\u0275fac = function CateringTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringTopbarComponent)(\u0275\u0275directiveInject(CateringOrdersService), \u0275\u0275directiveInject(CateringStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringTopbarComponent, selectors: [["catering-topbar"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 22, vars: 22, consts: [[1, "flex", "w-full", "items-center", "space-x-2", "px-8", "pb-2", "pt-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], [1, "flex", "h-20", "items-center", "space-x-2", "bg-base-100", "px-8"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", "class", "no-subscript w-60", 4, "ngIf"], ["class", "w-2 flex-1", 4, "ngIf"], ["icon", "", "matRipple", "", "class", "h-12 w-12 rounded bg-secondary text-secondary-content", 3, "matTooltip", "click", 4, "ngIf"], [3, "dateChange", 4, "ngIf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "ngModelChange", "ngModel", "placeholder"], ["value", ""], [1, "w-2", "flex-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], [1, "text-2xl"], [3, "dateChange"]], template: function CateringTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 2);
        \u0275\u0275elementStart(5, "searchbar", 3);
        \u0275\u0275listener("modelChange", function CateringTopbarComponent_Template_searchbar_modelChange_5_listener($event) {
          return ctx.setSearch($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "mat-form-field", 5)(8, "mat-select", 6);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275listener("ngModelChange", function CateringTopbarComponent_Template_mat_select_ngModelChange_8_listener($event) {
          return ctx.updateZones($event);
        });
        \u0275\u0275template(10, CateringTopbarComponent_mat_option_10_Template, 5, 3, "mat-option", 7);
        \u0275\u0275pipe(11, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, CateringTopbarComponent_mat_form_field_12_Template, 8, 10, "mat-form-field", 8);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275template(14, CateringTopbarComponent_div_14_Template, 1, 0, "div", 9)(15, CateringTopbarComponent_button_15_Template, 4, 3, "button", 10)(16, CateringTopbarComponent_button_16_Template, 4, 3, "button", 10)(17, CateringTopbarComponent_button_17_Template, 4, 3, "button", 10)(18, CateringTopbarComponent_button_18_Template, 4, 3, "button", 10)(19, CateringTopbarComponent_button_19_Template, 4, 3, "button", 10)(20, CateringTopbarComponent_div_20_Template, 1, 0, "div", 9)(21, CateringTopbarComponent_date_options_21_Template, 1, 0, "date-options", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_5_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 14, ctx.page === "menu" ? "CATERING.MENU" : "CATERING.ORDER_LIST"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("model", ctx.filters == null ? null : ctx.filters.search);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.filters == null ? null : ctx.filters.zones)("placeholder", \u0275\u0275pipeBind1(9, 16, "COMMON.LEVEL_ALL"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(11, 18, ctx.levels));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ((tmp_5_0 = \u0275\u0275pipeBind1(13, 20, ctx.caterers)) == null ? null : tmp_5_0.length) > 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.page === "menu");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.page === "menu" && (!ctx.zones[0] || ctx.zones[0] === (ctx.building == null ? null : ctx.building.id)));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.page === "menu");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.page === "menu");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.page === "menu");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.page === "menu");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.page !== "menu");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.page !== "menu");
      }
    }, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, MatFormField, MatSelect, MatOption, MatTooltip, MatRipple, IconComponent, AsyncPipe, TranslatePipe, BuildingPipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=catering-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringTopbarComponent, { className: "CateringTopbarComponent", filePath: "apps/concierge/src/app/catering/catering-topbar.component.ts", lineNumber: 154 });
})();

// apps/concierge/src/app/catering/catering.component.ts
var _c0 = ["app-new-catering", ""];
var _c1 = () => ["/catering", "menu"];
var _c2 = () => ["/catering", "orders"];
function CateringComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CATERING.MENU_EDIT_INFO"), " ");
  }
}
function CateringComponent_catering_order_list_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "catering-order-list", 10);
  }
}
function CateringComponent_catering_menu_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "catering-menu", 10);
  }
}
function CateringComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "a", 12)(2, "div", 13);
    \u0275\u0275element(3, "div", 14);
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5, "Menus and Pricing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 16);
    \u0275\u0275text(7, " View and Edit Menus and Pricing ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 12)(9, "div", 13);
    \u0275\u0275element(10, "div", 14);
    \u0275\u0275elementStart(11, "span", 15);
    \u0275\u0275text(12, "Today's Orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 16);
    \u0275\u0275text(14, " View Catering Orders and their statuses upon arrival ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c1));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(assets/menus.jpg)");
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c2));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(assets/orders.jpg)");
  }
}
var CateringComponent = class _CateringComponent extends AsyncHandler {
  constructor(_route) {
    super();
    this._route = _route;
  }
  ngOnInit() {
    this.subscription("route.params", this._route.paramMap.subscribe((params) => this.page = params.has("view") ? params.get("view") : ""));
  }
  static {
    this.\u0275fac = function CateringComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringComponent)(\u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringComponent, selectors: [["", "app-new-catering", ""]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c0, decls: 12, vars: 4, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "relative", "z-10"], [1, "flex", "h-1/2", "flex-1", "flex-col", "px-8"], ["class", "mb-4 flex items-center justify-center rounded bg-info p-2 text-sm text-white", 4, "ngIf"], [1, "flex", "h-1/2", "w-full", "flex-1", "overflow-auto"], [3, "ngSwitch"], ["class", "flex-1", 4, "ngSwitchCase"], ["class", "flex flex-1 flex-wrap items-center justify-center", 4, "ngSwitchDefault"], [1, "mb-4", "flex", "items-center", "justify-center", "rounded", "bg-info", "p-2", "text-sm", "text-white"], [1, "flex-1"], [1, "flex", "flex-1", "flex-wrap", "items-center", "justify-center"], ["matRipple", "", 1, "flex", "flex-col", "items-center", "rounded", "bg-base-100", "text-black", "shadow", 3, "routerLink"], ["name", "img", 1, "relative", "flex", "w-full", "flex-1", "items-center", "justify-center", "bg-cover", "bg-center", "text-2xl", "text-white"], [1, "absolute", "inset-0", "z-0", "bg-neutral", "opacity-60"], [1, "z-10"], [1, "flex", "h-14", "w-full", "items-center", "justify-center", "p-2", "text-center", "text-sm"]], template: function CateringComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1);
        \u0275\u0275element(4, "catering-topbar", 2);
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275template(6, CateringComponent_div_6_Template, 3, 3, "div", 4);
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275elementContainerStart(8, 6);
        \u0275\u0275template(9, CateringComponent_catering_order_list_9_Template, 1, 0, "catering-order-list", 7)(10, CateringComponent_catering_menu_10_Template, 1, 0, "catering-menu", 7)(11, CateringComponent_div_11_Template, 15, 8, "div", 8);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.page === "menu");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngSwitch", ctx.page);
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "orders");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "menu");
      }
    }, dependencies: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, ApplicationTopbarComponent, ApplicationSidebarComponent, MatRipple, CateringMenuComponent, CateringOrderListComponent, RouterLink, CateringTopbarComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\na[_ngcontent-%COMP%] {\n  width: 28rem;\n  height: 16rem;\n  margin-left: 0.5rem;\n  text-decoration: none;\n  transition: background 200ms;\n}\na[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\na[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n/*# sourceMappingURL=catering.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringComponent, { className: "CateringComponent", filePath: "apps/concierge/src/app/catering/catering.component.ts", lineNumber: 119 });
})();

// apps/concierge/src/app/catering/catering.module.ts
var ROUTES = [
  { path: "", component: CateringComponent },
  { path: ":view", component: CateringComponent }
];
var CateringModule = class _CateringModule {
  static {
    this.\u0275fac = function CateringModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CateringModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      UIModule,
      MatTabsModule,
      MatChipsModule,
      SharedCateringModule,
      RouterModule.forChild(ROUTES)
    ] });
  }
};
export {
  CateringModule
};
//# sourceMappingURL=catering.module-NBMDPYKN.js.map
