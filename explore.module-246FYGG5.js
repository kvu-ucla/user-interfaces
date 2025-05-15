import {
  CommonModule,
  DesksService,
  ExploreMapViewComponent,
  FooterMenuComponent,
  FormsModule,
  MAP_FEATURE_DATA,
  NgIf,
  RouterModule,
  SharedComponentModule,
  SharedExploreModule,
  TopbarComponent,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-D5JLLHYP.js";
import "./chunk-4MWRP73S.js";

// apps/workplace/src/app/explore/explore.component.ts
function ExploreComponent_topbar_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
  }
}
function ExploreComponent_footer_menu_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer-menu");
  }
}
var ExploreComponent = class _ExploreComponent {
  get hide_nav() {
    return localStorage.getItem("PlaceOS.hide_nav") === "true";
  }
  constructor(_desks) {
    this._desks = _desks;
  }
  ngOnInit() {
    this._desks.error_on_host = false;
  }
  static {
    this.\u0275fac = function ExploreComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreComponent)(\u0275\u0275directiveInject(DesksService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreComponent, selectors: [["app-explore"]], standalone: false, decls: 5, vars: 2, consts: [[4, "ngIf"], [1, "flex", "h-1/2", "flex-1", "flex-col-reverse", "bg-base-200", "sm:flex-row"], [1, "relative", "z-0", "flex", "h-1/2", "flex-1", "flex-col", "overflow-hidden", "sm:h-auto"]], template: function ExploreComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ExploreComponent_topbar_0_Template, 1, 0, "topbar", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "main", 2);
        \u0275\u0275element(3, "explore-map-view");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, ExploreComponent_footer_menu_4_Template, 1, 0, "footer-menu", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.hide_nav);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.hide_nav);
      }
    }, dependencies: [NgIf, TopbarComponent, FooterMenuComponent, ExploreMapViewComponent], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=explore.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreComponent, { className: "ExploreComponent", filePath: "apps/workplace/src/app/explore/explore.component.ts", lineNumber: 34 });
})();

// apps/workplace/src/app/explore/explore.module.ts
var ROUTES = [
  { path: "", component: ExploreComponent },
  { path: ":search_type", component: ExploreComponent }
];
var ExploreModule = class _ExploreModule {
  static {
    this.\u0275fac = function ExploreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ExploreModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }], imports: [
      CommonModule,
      RouterModule.forChild(ROUTES),
      SharedComponentModule,
      SharedExploreModule,
      FormsModule
    ] });
  }
};
export {
  ExploreModule
};
//# sourceMappingURL=explore.module-246FYGG5.js.map
