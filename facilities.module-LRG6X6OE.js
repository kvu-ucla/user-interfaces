import {
  ExploreZoomControlComponent,
  SharedExploreModule
} from "./chunk-XIXVO7AP.js";
import "./chunk-B4FXTOP4.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  CommonModule,
  EventsStateService,
  ExploreStateService,
  FormsModule,
  IconComponent,
  InteractiveMapComponent,
  MatFormField,
  MatOption,
  MatSelect,
  MatSelectTrigger,
  NgControlStatus,
  NgForOf,
  NgModel,
  OrganisationService,
  Router,
  RouterModule,
  SearchbarComponent,
  TranslatePipe,
  UIModule,
  __async,
  first,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QKOOFFWV.js";

// apps/concierge/src/app/facilities/facilities-map.component.ts
var FacilitiesMapComponent = class _FacilitiesMapComponent extends AsyncHandler {
  constructor(_explore, _state) {
    super();
    this._explore = _explore;
    this._state = _state;
    this.url = this._explore.map_url;
    this.styles = this._explore.map_styles;
    this.positions = this._explore.map_positions;
    this.features = this._explore.map_features;
    this.actions = this._explore.map_actions;
  }
  ngOnInit() {
    this.subscription("active_zone", this._state.zones.subscribe((z) => this._explore.setLevel(z[0])));
  }
  static {
    this.\u0275fac = function FacilitiesMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FacilitiesMapComponent)(\u0275\u0275directiveInject(ExploreStateService), \u0275\u0275directiveInject(EventsStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesMapComponent, selectors: [["facilities-map"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 18, consts: [[3, "src", "zoom", "center", "styles", "features", "actions"], [1, "absolute", "bottom-2", "right-2"]], template: function FacilitiesMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "interactive-map", 0);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "async");
        \u0275\u0275pipe(4, "async");
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275element(7, "explore-zoom-controls", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("src", \u0275\u0275pipeBind1(1, 6, ctx.url))("zoom", \u0275\u0275pipeBind1(2, 8, ctx.positions).zoom)("center", \u0275\u0275pipeBind1(3, 10, ctx.positions).center)("styles", \u0275\u0275pipeBind1(4, 12, ctx.styles))("features", \u0275\u0275pipeBind1(5, 14, ctx.features))("actions", \u0275\u0275pipeBind1(6, 16, ctx.actions));
      }
    }, dependencies: [InteractiveMapComponent, ExploreZoomControlComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=facilities-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesMapComponent, { className: "FacilitiesMapComponent", filePath: "apps/concierge/src/app/facilities/facilities-map.component.ts", lineNumber: 33 });
})();

// apps/concierge/src/app/facilities/facilities-status.component.ts
var _c0 = () => ({ class: "material-symbols-rounded", content: "sentiment_very_satisfied" });
var FacilitiesStatusComponent = class _FacilitiesStatusComponent {
  static {
    this.\u0275fac = function FacilitiesStatusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FacilitiesStatusComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesStatusComponent, selectors: [["facilities-status"]], standalone: false, decls: 24, vars: 6, consts: [[1, "w-full", "flex-1", "rounded-lg", "bg-base-100", "p-6", "shadow-sm"], [1, "mb-4", "mt-0"], [1, "mb-2", "flex", "w-full", "items-center", "rounded-lg", "border", "border-base-200"], ["name", "status", 1, "rounded-full"], [1, "text-bold", "flex-1", "text-xs"], [1, "text-bold", "p-4"], [1, "text-bold", "mr-4", "text-right"], [1, "w-full", "rounded", "bg-base-100", "p-6", "shadow-sm"], [1, "mb-2", "mt-0"], ["name", "mood", 1, "flex", "w-full", "items-center", "overflow-hidden", "rounded-lg", "border", "border-base-200"], [1, "bg-light", "px-1", "text-2xl", 3, "icon"], [1, "text-bold", "px-4", "text-sm"]], template: function FacilitiesStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2, "People Count");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "icon");
        \u0275\u0275text(6, "account_circle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 7)(14, "h3", 8);
        \u0275\u0275text(15, "Mood");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 9);
        \u0275\u0275element(17, "icon", 10);
        \u0275\u0275elementStart(18, "div", 11);
        \u0275\u0275text(19, "4/5 Satisfied");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "h4");
        \u0275\u0275text(21, "Feedback:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p");
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", "Admin Services", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate("24");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Total: ", ctx.total || 0, "");
        \u0275\u0275advance(5);
        \u0275\u0275property("icon", \u0275\u0275pureFunction0(5, _c0));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.feedback);
      }
    }, dependencies: [IconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20em;\n  padding: 2em;\n}\n.bg-light[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n[name=mood][_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n}\n[name=status][_ngcontent-%COMP%] {\n  margin: 0.5em;\n  border: 4px solid #21a453;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=facilities-status.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesStatusComponent, { className: "FacilitiesStatusComponent", filePath: "apps/concierge/src/app/facilities/facilities-status.component.ts", lineNumber: 66 });
})();

// apps/concierge/src/app/facilities/facilities-topbar.component.ts
function FacilitiesTopbarComponent_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
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
function FacilitiesTopbarComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    \u0275\u0275property("value", type_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r2.name, " ");
  }
}
var FacilitiesTopbarComponent = class _FacilitiesTopbarComponent extends AsyncHandler {
  constructor(_state, _org, _route, _router) {
    super();
    this._state = _state;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this.zones = [];
    this.types = [
      { id: "internal", name: "Internal" },
      { id: "external", name: "External" },
      { id: "cancelled", name: "Cancelled" }
    ];
    this.type_list = this.types.map((i) => `${i.id}`);
    this.setDate = (d) => this._state.setDate(d);
    this.levels = this._org.active_levels;
    this.updateZones = (z) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setZones(z);
    };
    this.updateTypes = (types) => this._state.setFilters({
      hide_type: this.types.reduce((list, item) => {
        !types.includes(item.id) ? list.push(item) : "";
        return list;
      }, [])
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
        if (params.has("zone_ids")) {
          const zones = params.get("zone_ids").split(",");
          if (zones.length) {
            const level = this._org.levelWithID(zones);
            if (!level) {
              return;
            }
            this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
            this.zones = zones;
          }
        }
      }));
      this.subscription("levels", this._org.active_levels.subscribe((levels) => {
        this.zones = this.zones.filter((zone) => levels.find((lvl) => lvl.id === zone));
        if (!this.zones.length && levels.length) {
          this.zones.push(levels[0].id);
        }
        this.updateZones(this.zones);
      }));
      this.updateTypes(this.type_list);
    });
  }
  static {
    this.\u0275fac = function FacilitiesTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FacilitiesTopbarComponent)(\u0275\u0275directiveInject(EventsStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesTopbarComponent, selectors: [["facilities-topbar"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 9, consts: [[1, "flex", "h-20", "items-center", "space-x-2", "border-b", "border-base-200", "bg-base-100", "px-4"], ["appearance", "outline"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", "placeholder", "No Events", 3, "ngModelChange", "ngModel"], [1, "flex-full"], [1, "mr-2"], [3, "value"]], template: function FacilitiesTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function FacilitiesTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function FacilitiesTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          return ctx.updateZones($event);
        });
        \u0275\u0275template(4, FacilitiesTopbarComponent_mat_option_4_Template, 2, 2, "mat-option", 3);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "mat-form-field", 1)(7, "mat-select", 4);
        \u0275\u0275twoWayListener("ngModelChange", function FacilitiesTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.type_list, $event) || (ctx.type_list = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function FacilitiesTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
          return ctx.updateTypes($event);
        });
        \u0275\u0275elementStart(8, "mat-select-trigger");
        \u0275\u0275text(9, "Legend");
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, FacilitiesTopbarComponent_mat_option_10_Template, 2, 2, "mat-option", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(11, "div", 5)(12, "searchbar", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.zones);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 5, "COMMON.LEVEL_ALL"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 7, ctx.levels));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.type_list);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.types);
      }
    }, dependencies: [NgForOf, NgControlStatus, NgModel, SearchbarComponent, MatFormField, MatSelect, MatSelectTrigger, MatOption, AsyncPipe, TranslatePipe], styles: ["\n\n.flex-full[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 0.5em;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n  margin-left: 1em;\n}\n/*# sourceMappingURL=facilities-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesTopbarComponent, { className: "FacilitiesTopbarComponent", filePath: "apps/concierge/src/app/facilities/facilities-topbar.component.ts", lineNumber: 63 });
})();

// apps/concierge/src/app/facilities/facilities.component.ts
var _c02 = ["app-new-facilities", ""];
var FacilitiesComponent = class _FacilitiesComponent {
  static {
    this.\u0275fac = function FacilitiesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FacilitiesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesComponent, selectors: [["", "app-new-facilities", ""]], standalone: false, attrs: _c02, decls: 8, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "flex-1"], [1, "h-full", "flex-1"], [1, "h-full", "space-y-4"]], template: function FacilitiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1);
        \u0275\u0275element(4, "facilities-topbar");
        \u0275\u0275elementStart(5, "div", 2);
        \u0275\u0275element(6, "facilities-map", 3)(7, "facilities-status", 4);
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, FacilitiesTopbarComponent, FacilitiesStatusComponent, FacilitiesMapComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nfacilities-map[_ngcontent-%COMP%] {\n  min-width: 50%;\n}\n/*# sourceMappingURL=facilities.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesComponent, { className: "FacilitiesComponent", filePath: "apps/concierge/src/app/facilities/facilities.component.ts", lineNumber: 37 });
})();

// apps/concierge/src/app/facilities/facilities.module.ts
var ROUTES = [{ path: "", component: FacilitiesComponent }];
var FacilitiesModule = class _FacilitiesModule {
  static {
    this.\u0275fac = function FacilitiesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FacilitiesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FacilitiesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      UIModule,
      SharedExploreModule,
      RouterModule.forChild(ROUTES)
    ] });
  }
};
export {
  FacilitiesModule
};
//# sourceMappingURL=facilities.module-LRG6X6OE.js.map
