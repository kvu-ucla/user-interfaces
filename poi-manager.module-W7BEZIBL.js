import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  BuildingLevel,
  CommonModule,
  CustomTooltipComponent,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  InteractiveMapComponent,
  LevelPipe,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MapsPeopleService,
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
  MatRipple,
  MatSelect,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  PrintableComponent,
  RouterModule,
  SafePipe,
  SettingsService,
  SettingsToggleComponent,
  SharedSpacesModule,
  SharedUsersModule,
  SimpleTableComponent,
  SlicePipe,
  TranslatePipe,
  UIModule,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  createShortURL,
  debounceTime,
  flatten,
  generateQRCode,
  getInvalidFields,
  map,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  randomString,
  shareReplay,
  showMetadata,
  switchMap,
  take,
  tap,
  unique,
  updateMetadata,
  updateShortURL,
  ɵNgNoValidate,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-GB3WUCWS.js";

// apps/concierge/src/app/poi-manager/map-show-element.component.ts
var MapShowElementComponent = class _MapShowElementComponent {
  constructor(_data) {
    this._data = _data;
  }
  get hover() {
    return !!this._data?.hover;
  }
  static {
    this.\u0275fac = function MapShowElementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapShowElementComponent)(\u0275\u0275directiveInject(MAP_FEATURE_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapShowElementComponent, selectors: [["map-show-element"]], standalone: false, decls: 2, vars: 8, consts: [[1, "relative", "w-full", "h-full", "border-4"], [1, "opacity-40", "absolute", "inset-0"]], template: function MapShowElementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("border-warning", ctx.hover)("border-success", !ctx.hover);
        \u0275\u0275advance();
        \u0275\u0275classProp("bg-warning", ctx.hover)("bg-success", !ctx.hover);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapShowElementComponent, { className: "MapShowElementComponent", filePath: "apps/concierge/src/app/poi-manager/map-show-element.component.ts", lineNumber: 22 });
})();

// apps/concierge/src/app/poi-manager/select-poi-map-modal.component.ts
var _c0 = () => ({ controls: true });
var _c1 = (a0) => ({ count: a0 });
function SelectPOIMapModalComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r2 = ctx.$implicit;
    \u0275\u0275property("value", lvl_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r2.display_name || lvl_r2.name, " ");
  }
}
function SelectPOIMapModalComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.page * 100 + 1, " - ", ((tmp_2_0 = \u0275\u0275pipeBind1(2, 2, ctx_r2.search_results)) == null ? null : tmp_2_0.length) > ctx_r2.page * 100 + 100 ? ctx_r2.page * 100 + 100 : (tmp_2_0 = \u0275\u0275pipeBind1(3, 4, ctx_r2.search_results)) == null ? null : tmp_2_0.length, " ");
  }
}
function SelectPOIMapModalComponent_ng_container_28_button_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const poi_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", poi_r5.location, " ");
  }
}
function SelectPOIMapModalComponent_ng_container_28_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function SelectPOIMapModalComponent_ng_container_28_button_1_Template_button_click_0_listener() {
      const poi_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selected.next(poi_r5.id));
    })("mouseover", function SelectPOIMapModalComponent_ng_container_28_button_1_Template_button_mouseover_0_listener() {
      const poi_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.hovered.next(poi_r5.id));
    });
    \u0275\u0275elementStart(1, "div", 23)(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SelectPOIMapModalComponent_ng_container_28_button_1_div_4_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const poi_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("!bg-primary", poi_r5.id === ctx_r2.selected.value)("!text-primary-content", poi_r5.id === ctx_r2.selected.value);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(poi_r5.name || poi_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", poi_r5.location);
  }
}
function SelectPOIMapModalComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SelectPOIMapModalComponent_ng_container_28_button_1_Template, 5, 6, "button", 21);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(3, 3, \u0275\u0275pipeBind1(2, 1, ctx_r2.search_results), ctx_r2.page * 100, ctx_r2.page * 100 + 100));
  }
}
function SelectPOIMapModalComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 28);
    \u0275\u0275listener("click", function SelectPOIMapModalComponent_div_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.page = ctx_r2.page - 1);
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 29);
    \u0275\u0275listener("click", function SelectPOIMapModalComponent_div_30_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.page = 0);
    });
    \u0275\u0275text(5, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 30)(7, "app-icon");
    \u0275\u0275text(8, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 31);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 30)(12, "app-icon");
    \u0275\u0275text(13, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 32);
    \u0275\u0275listener("click", function SelectPOIMapModalComponent_div_30_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.page = ctx_r2.last_page);
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 28);
    \u0275\u0275listener("click", function SelectPOIMapModalComponent_div_30_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.page = ctx_r2.page + 1);
    });
    \u0275\u0275elementStart(17, "app-icon");
    \u0275\u0275text(18, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.page === 0);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("!bg-secondary", ctx_r2.page === 0)("text-secondary-content", ctx_r2.page === 0)("!rounded-full", ctx_r2.page === 0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-0", ctx_r2.page < 2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("opacity-0", ctx_r2.page == 0 || ctx_r2.page == ctx_r2.last_page);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.page + 1, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", ctx_r2.page > ctx_r2.last_page - 2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("!bg-secondary", ctx_r2.page === ctx_r2.last_page)("text-secondary-content", ctx_r2.page === ctx_r2.last_page)("!rounded-full", ctx_r2.page === ctx_r2.last_page);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.last_page + 1, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.page === ctx_r2.last_page);
  }
}
function SelectPOIMapModalComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "img", 34);
    \u0275\u0275elementStart(2, "div", 35);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.POI_MAP_SELECT_RESULTS_EMPTY"), " ");
  }
}
var SelectPOIMapModalComponent = class _SelectPOIMapModalComponent extends AsyncHandler {
  poiItemFromMapsIndoorsItem(item) {
    return {
      id: item.properties.externalId || item.properties.roomId || item.id,
      name: item.properties.name,
      location: item.properties.building ? `${item.properties.building}, Level ${item.properties.floorName}` : "",
      area: Math.abs(item.geometry.bbox[0] - item.geometry.bbox[2]) * Math.abs(item.geometry.bbox[1] - item.geometry.bbox[3])
    };
  }
  constructor(_data, _org, _maps_people) {
    super();
    this._data = _data;
    this._org = _org;
    this._maps_people = _maps_people;
    this.level = new BuildingLevel();
    this.map_info = {};
    this.page = 0;
    this.last_page = 0;
    this.selected = new BehaviorSubject("");
    this.hovered = new BehaviorSubject("");
    this.search = new BehaviorSubject("");
    this.changed = new BehaviorSubject(0);
    this.level_list = this._org.active_levels;
    this.actions = [
      { id: "*", action: "click", callback: (e, p) => this.selectID(p || e) }
    ];
    this.features = combineLatest([
      this.selected,
      this.hovered
    ]).pipe(map(([s_id, h_id]) => unique([
      {
        location: s_id,
        content: MapShowElementComponent,
        full_size: true,
        no_scale: true
      },
      {
        location: h_id,
        content: MapShowElementComponent,
        data: { hover: true },
        full_size: true,
        no_scale: true
      }
    ].filter((_) => _.location), "location")));
    this.search_results = combineLatest([
      this.search,
      this._maps_people.available$,
      this.changed
    ]).pipe(debounceTime(300), switchMap(([q, available]) => {
      return available ? q.length > 2 ? mapsindoors?.services.LocationsService.getLocations({
        q
      }).then((l) => {
        const list = l.map((i) => this.poiItemFromMapsIndoorsItem(i));
        if (this.selected_item) {
          list.unshift(this.poiItemFromMapsIndoorsItem(this.selected_item));
        }
        return list;
      }) : of(this.selected_item ? [
        this.poiItemFromMapsIndoorsItem(this.selected_item)
      ] : []) : of(Object.entries(this.map_info).map(([id, bbox]) => ({
        id,
        area: bbox.w * bbox.h
      })).filter(({ id, area }) => id.toLowerCase().includes(q.toLowerCase()) && area < 0.5).sort((a, b) => b.area - a.area));
    }), tap((l) => {
      this.page = 0;
      this.last_page = Math.floor(l.length / 100);
    }), shareReplay(1));
    this.setMapInfo = (info) => this.map_info = info;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this._data?.location && typeof this._data.location === "string") {
        this.selected.next(this._data.location);
      }
      const levels = yield this.level_list.pipe(take(1)).toPromise();
      if (levels.length) {
        let level = levels[0];
        if (this._data?.level_id) {
          level = levels.find((_) => _.id === this._data.level_id) || level;
        }
        this.level = level;
      }
    });
  }
  onChange() {
    this.changed.next(Date.now());
  }
  selectID(e) {
    this.timeout("select_id", () => __async(this, null, function* () {
      const use_maps_indoors = yield this._maps_people.available$.pipe(take(1)).toPromise();
      if (!use_maps_indoors) {
        const pos = e;
        const short_list = [];
        for (const [id, bbox] of Object.entries(this.map_info)) {
          if (bbox.x <= pos.x && pos.x <= bbox.x + bbox.w && bbox.y <= pos.y && pos.y <= bbox.y + bbox.h) {
            short_list.push([id, bbox.h * bbox.w]);
          }
        }
        short_list.sort((a, b) => a[1] - b[1]);
        short_list.filter(([_, a]) => a <= 0.5);
        if (short_list.length) {
          this.selected.next(short_list[0][0]);
        }
      } else {
        const id = e.properties?.externalId || e.properties?.roomId || e.id;
        this.selected_item = e;
        if (id)
          this.selected.next(id);
        this.changed.next(Date.now());
      }
    }));
  }
  static {
    this.\u0275fac = function SelectPOIMapModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectPOIMapModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MapsPeopleService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectPOIMapModalComponent, selectors: [["select-poi-map-modal"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 37, vars: 37, consts: [["empty_state", ""], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "min-w-[80vw]", "max-w-[calc(100vw-2rem)]", "sm:max-w-[64rem]", "max-h-[75vh]", "h-[75vh]", "overflow-hidden"], ["map", "", 1, "relative", "h-full", "flex-1", "w-1/2", "bg-base-200"], [3, "mapInfo", "src", "actions", "features", "options", "focus"], ["poi-list", "", 1, "relative", "flex", "flex-col", "h-full", "w-[20rem]", "border-l", "border-base-300", "shadow"], ["search", "", 1, "flex", "flex-col", "border-b", "border-base-200", "p-2"], ["appearance", "outline", 1, "w-full", "no-subscript", "mb-2"], ["name", "level", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "w-full", "no-subscript"], ["matInput", "", "name", "search", "placeholder", "Search", 3, "ngModelChange", "ngModel"], ["matPrefix", "", 1, "text-2xl"], ["list", "", 1, "flex", "flex-col", "flex-1", "h-1/2", "overflow-auto", "space-y-2", "px-2"], [1, "sticky", "top-0", "w-full", "bg-base-100", "px-1", "py-3", "z-10"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["pagination", "", "class", "sticky flex items-center justify-center bottom-0 w-full bg-base-100 p-2 z-10 space-x-1", 4, "ngIf"], ["actions", "", 1, "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-full", 3, "disabled", "mat-dialog-close"], [3, "value"], ["btn", "", "matRipple", "", "class", "clear flex items-center text-left w-full hover:bg-base-200 rounded", 3, "!bg-primary", "!text-primary-content", "click", "mouseover", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", 1, "clear", "flex", "items-center", "text-left", "w-full", "hover:bg-base-200", "rounded", 3, "click", "mouseover"], [1, "flex", "flex-col", "w-full"], [1, ""], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], ["pagination", "", 1, "sticky", "flex", "items-center", "justify-center", "bottom-0", "w-full", "bg-base-100", "p-2", "z-10", "space-x-1"], ["icon", "", "matRipple", "", 1, "border", "border-base-200", "rounded", 3, "click", "disabled"], ["icon", "", "matRipple", "", 3, "click"], ["icon", ""], ["icon", "", "matRipple", "", 1, "!bg-secondary", "text-secondary-content"], ["icon", "", "matRipple", "", 1, "border", "border-base-200", "rounded", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "h-full", "flex-1", "space-y-4"], ["src", "assets/icons/no-results.svg", 1, "w-36"], [1, "text-center", "opacity-30"]], template: function SelectPOIMapModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "header")(1, "h2");
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 1)(5, "app-icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main", 2)(8, "div", 3)(9, "interactive-map", 4);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275listener("mapInfo", function SelectPOIMapModalComponent_Template_interactive_map_mapInfo_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setMapInfo($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5)(12, "div", 6)(13, "mat-form-field", 7)(14, "mat-select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function SelectPOIMapModalComponent_Template_mat_select_ngModelChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.level, $event) || (ctx.level = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function SelectPOIMapModalComponent_Template_mat_select_ngModelChange_14_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onChange());
        });
        \u0275\u0275template(15, SelectPOIMapModalComponent_mat_option_15_Template, 2, 2, "mat-option", 9);
        \u0275\u0275pipe(16, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "mat-form-field", 10)(18, "input", 11);
        \u0275\u0275pipe(19, "async");
        \u0275\u0275listener("ngModelChange", function SelectPOIMapModalComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.search.next($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "app-icon", 12);
        \u0275\u0275text(21, "search");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 13)(23, "div", 14);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "async");
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275template(27, SelectPOIMapModalComponent_span_27_Template, 4, 6, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, SelectPOIMapModalComponent_ng_container_28_Template, 4, 7, "ng-container", 16);
        \u0275\u0275pipe(29, "async");
        \u0275\u0275template(30, SelectPOIMapModalComponent_div_30_Template, 19, 22, "div", 17)(31, SelectPOIMapModalComponent_ng_template_31_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 18)(34, "button", 19);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_10_0;
        let tmp_12_0;
        const empty_state_r7 = \u0275\u0275reference(32);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 17, "APP.CONCIERGE.POI_MAP_SELECT_HEADER"));
        \u0275\u0275advance(7);
        \u0275\u0275property("src", ctx.level == null ? null : ctx.level.map_id)("actions", ctx.actions)("features", \u0275\u0275pipeBind1(10, 19, ctx.features))("options", \u0275\u0275pureFunction0(34, _c0))("focus", ctx.selected.value);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.level);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(16, 21, ctx.level_list));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(19, 23, ctx.search));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 27, "APP.CONCIERGE.POI_MAP_SELECT_RESULTS", \u0275\u0275pureFunction1(35, _c1, ((tmp_10_0 = \u0275\u0275pipeBind1(25, 25, ctx.search_results)) == null ? null : tmp_10_0.length) || 0)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.last_page);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_12_0 = \u0275\u0275pipeBind1(29, 30, ctx.search_results)) == null ? null : tmp_12_0.length)("ngIfElse", empty_state_r7);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.last_page > 0);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.selected.value)("mat-dialog-close", ctx.selected.value);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 32, "COMMON.SAVE"), " ");
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatPrefix, MatInput, MatSelect, MatOption, MatDialogClose, MatRipple, IconComponent, InteractiveMapComponent, AsyncPipe, SlicePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectPOIMapModalComponent, { className: "SelectPOIMapModalComponent", filePath: "apps/concierge/src/app/poi-manager/select-poi-map-modal.component.ts", lineNumber: 230 });
})();

// apps/concierge/src/app/poi-manager/poi-modal.component.ts
var _c02 = () => ({ standalone: true });
function POIModalComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5);
    \u0275\u0275element(7, "input", 15);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.NAME"), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 4, "FORM.NAME"));
  }
}
function POIModalComponent_div_5_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r3 = ctx.$implicit;
    \u0275\u0275property("value", bld_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r3.display_name, " ");
  }
}
function POIModalComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5)(7, "mat-select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function POIModalComponent_div_5_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.building, $event) || (ctx_r1.building = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(8, POIModalComponent_div_5_mat_option_8_Template, 2, 2, "mat-option", 18);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "RESOURCE.BUILDING"), "");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.building);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(9, 6, ctx_r1.building_list));
  }
}
function POIModalComponent_div_7_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r4 = ctx.$implicit;
    \u0275\u0275property("value", level_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r4.display_name, " ");
  }
}
function POIModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5)(7, "mat-select", 21);
    \u0275\u0275template(8, POIModalComponent_div_7_mat_option_8_Template, 2, 2, "mat-option", 18);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "RESOURCE.LEVEL"), "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(9, 4, ctx_r1.level_list));
  }
}
function POIModalComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "mat-form-field", 23);
    \u0275\u0275element(2, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 25);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("click", function POIModalComponent_div_22_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectPOIfromMap());
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "place");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.POI_MAP_SELECT"));
  }
}
function POIModalComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "mat-form-field", 27)(2, "input", 28);
    \u0275\u0275listener("ngModelChange", function POIModalComponent_div_23_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ location: [$event, ctx_r1.form.value.location[1]] }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-form-field", 27)(4, "input", 29);
    \u0275\u0275listener("ngModelChange", function POIModalComponent_div_23_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ location: [ctx_r1.form.value.location[0], $event] }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.location[0])("ngModelOptions", \u0275\u0275pureFunction0(4, _c02));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.location[1])("ngModelOptions", \u0275\u0275pureFunction0(5, _c02));
  }
}
var POIModalComponent = class _POIModalComponent extends AsyncHandler {
  get building() {
    return this._org.building;
  }
  set building(value) {
    this._org.building = value;
  }
  constructor(_org, _data, _dialog_ref, _settings, _dialog) {
    super();
    this._org = _org;
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this._dialog = _dialog;
    this.loading = false;
    this.location_type = this._data?.location instanceof Array ? "coordinates" : "map_id";
    this.building_list = this._org.building_list;
    this.level_list = this._org.active_levels;
    this.form = new FormGroup({
      id: new FormControl(this._data?.id || ""),
      name: new FormControl(this._data?.name || "", [Validators.required]),
      level_id: new FormControl(this._data?.level_id || "", [
        Validators.required
      ]),
      location: new FormControl(this._data?.location || "", [
        Validators.required
      ]),
      can_search: new FormControl(this._data?.can_search ?? false)
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (!this.form.value.level_id) {
        const levels = yield this.level_list.pipe(take(1)).toPromise();
        if (levels.length)
          this.form.patchValue({ level_id: levels[0].id });
      }
    });
  }
  selectPOIfromMap() {
    const ref = this._dialog.open(SelectPOIMapModalComponent, {
      data: __spreadValues(__spreadValues({}, this._data), this.form.getRawValue())
    });
    ref.afterClosed().subscribe((d) => {
      if (!d)
        return;
      this.form.patchValue({
        location: d,
        level_id: ref.componentInstance.level?.id
      });
    });
  }
  save() {
    return __async(this, null, function* () {
      if (!this.form.valid) {
        return notifyError(`Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
      }
      const data = this.form.getRawValue();
      if (!data.id)
        data.id = `POI-${randomString(8)}`;
      data.short_link_id = this._data?.short_link_id;
      const path = this._settings.get("app.kiosk_url_path") || "/map-kiosk";
      const public_key = this._settings.get("app.short_url_public_key");
      const location2 = typeof data.location === "string" ? data.location : data.location.join(",");
      let uri = `${path}/#/explore?level=${data.level_id}&locate=${location2}&public=true`;
      if (public_key)
        uri += `&x-api-key=${public_key}`;
      if (!data.short_link_id) {
        const { id } = yield createShortURL({
          name: data.name,
          description: `Point of Interest: ${data.name}`,
          uri: `${window.location.origin}/auth/login?continue=${encodeURIComponent(uri)}`
        }).toPromise();
        data.short_link_id = id;
      } else {
        yield updateShortURL(data.short_link_id, {
          id: data.short_link_id,
          name: data.name,
          description: `Point of Interest: ${data.name}`,
          uri: `${window.location.origin}/auth/login?continue=${encodeURIComponent(uri)}`
        }).toPromise();
      }
      this.loading = true;
      const old_metadata = yield showMetadata(this._org.organisation.id, "points-of-interest", {}).toPromise();
      const metadata = old_metadata.details || {};
      if (!metadata[data.level_id])
        metadata[data.level_id] = [];
      if (this._data?.id) {
        for (const lvl in metadata) {
          if (metadata[lvl])
            metadata[lvl] = metadata[lvl].filter((_) => _.id !== data.id);
        }
      }
      metadata[data.level_id] = [
        ...metadata[data.level_id].filter((_) => _.id !== data.id),
        data
      ].sort((a, b) => a.name.localeCompare(b.name));
      const resp = yield updateMetadata(this._org.organisation.id, {
        name: "points-of-interest",
        details: metadata,
        description: "Point of Interests for maps"
      }).toPromise().catch((e) => notifyError(e));
      if (resp.id)
        this._dialog_ref.close(resp);
      this.loading = false;
    });
  }
  static {
    this.\u0275fac = function POIModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _POIModalComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _POIModalComponent, selectors: [["poi-modal"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 28, vars: 29, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "location"], ["appearance", "outline"], ["placeholder", "Location Type", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "map_id"], ["value", "coordinates"], ["class", "flex items-center space-x-4 pb-2", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "flex", "items-center", "space-x-4", "pt-2"], ["formControlName", "can_search", 1, "flex-1", 3, "name"], [1, "flex-1"], ["for", "name"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "building"], ["placeholder", "Select Building", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "level"], ["formControlName", "level_id", "placeholder", "Select Level"], [1, "flex", "items-center", "space-x-4", "pb-2"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", "name", "location", "placeholder", "Location", "formControlName", "location"], ["icon", "", "matRipple", "", 1, "rounded", "border", "border-secondary", "text-secondary", "h-12", "w-12", 3, "click", "matTooltip"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "flex-1"], ["matInput", "", "name", "latitude", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matInput", "", "name", "longitude", 3, "ngModelChange", "ngModel", "ngModelOptions"]], template: function POIModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function POIModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "form", 1);
        \u0275\u0275template(4, POIModalComponent_div_4_Template, 9, 6, "div", 2)(5, POIModalComponent_div_5_Template, 10, 9, "div", 2);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, POIModalComponent_div_7_Template, 10, 6, "div", 2);
        \u0275\u0275elementStart(8, "div", 3)(9, "label", 4);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementStart(12, "span");
        \u0275\u0275text(13, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "mat-form-field", 5)(15, "mat-select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function POIModalComponent_Template_mat_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.location_type, $event) || (ctx.location_type = $event);
          return $event;
        });
        \u0275\u0275elementStart(16, "mat-option", 7);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-option", 8);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(22, POIModalComponent_div_22_Template, 7, 3, "div", 9)(23, POIModalComponent_div_23_Template, 5, 6, "div", 10);
        \u0275\u0275elementStart(24, "div", 11);
        \u0275\u0275element(25, "settings-toggle", 12);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275element(27, "div", 13);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 14, ctx.form.value.id ? "APP.CONCIERGE.POI_EDIT" : "APP.CONCIERGE.POI_NEW"))("loading", ctx.loading ? \u0275\u0275pipeBind1(2, 16, "APP.CONCIERGE.POI_SAVING") : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.name);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_4_0 = \u0275\u0275pipeBind1(6, 18, ctx.building_list)) == null ? null : tmp_4_0.length) > 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.form.controls.level_id);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 20, "COMMON.LOCATION"), "");
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.location_type);
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(28, _c02));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 22, "EXPLORE.MAP_ID"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 24, "EXPLORE.COORDINATES"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.location_type === "map_id");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.location_type === "coordinates");
        \u0275\u0275advance(2);
        \u0275\u0275property("name", \u0275\u0275pipeBind1(26, 26, "APP.CONCIERGE.POI_SEARCHABLE"));
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, MatFormField, MatInput, MatSelect, MatOption, MatTooltip, MatRipple, FormGroupDirective, FormControlName, IconComponent, SettingsToggleComponent, FullscreenModalShellComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(POIModalComponent, { className: "POIModalComponent", filePath: "apps/concierge/src/app/poi-manager/poi-modal.component.ts", lineNumber: 188 });
})();

// apps/concierge/src/app/poi-manager/poi-management.service.ts
var POIManagementService = class _POIManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this._features = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(switchMap(() => showMetadata(this._org.organisation.id, "points-of-interest").pipe(catchError((_) => of({ details: {} })))), map((_) => {
      const mapping = _.details || {};
      const levels = this._org.levelsForBuilding(this._org.building);
      const list = flatten(levels.map((lvl) => mapping[lvl.id] || []));
      return list;
    }), shareReplay(1));
    this.filtered_features = combineLatest([
      this._features,
      this._options
    ]).pipe(map(([list, options]) => {
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
  editPointOfInterest(poi) {
    const ref = this._dialog.open(POIModalComponent, {
      data: poi
    });
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
  }
  removePointOfInterest(poi) {
    return __async(this, null, function* () {
      const ref = yield openConfirmModal({
        title: "Remove Point of Interest",
        content: `Are you sure you want to remove the point of interest "${poi.name}"?`,
        icon: { content: "delete_forever" },
        confirm_text: "Remove"
      }, this._dialog);
      if (ref.reason !== "done")
        return ref.close();
      ref.loading("Removing point of interest...");
      const old_metadata = yield showMetadata(this._org.organisation.id, "points-of-interest").toPromise();
      const metadata = old_metadata.details || {};
      for (const lvl in metadata) {
        if (metadata[lvl])
          metadata[lvl] = metadata[lvl].filter((_) => _.id !== poi.id);
      }
      yield updateMetadata(this._org.organisation.id, {
        name: "points-of-interest",
        details: metadata,
        description: ""
      }).toPromise().catch((e) => {
        notifyError(e);
        ref.close();
        throw e;
      });
      notifySuccess("Successfully removed point of interest.");
      ref.close();
      this._change.next(Date.now());
    });
  }
  static {
    this.\u0275fac = function POIManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _POIManagementService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _POIManagementService, factory: _POIManagementService.\u0275fac, providedIn: "root" });
  }
};

// apps/concierge/src/app/poi-manager/poi-list.component.ts
var _c03 = (a0) => ({ key: "name", name: a0 });
var _c12 = (a0, a1) => ({ key: "level_id", name: a0, content: a1, size: "12rem", sortable: false });
var _c2 = (a0) => ({ key: "location", name: a0, size: "10rem" });
var _c3 = (a0, a1) => ({ key: "can_search", name: a0, size: "7rem", content: a1 });
var _c4 = (a0) => ({ key: "actions", name: " ", content: a0, size: "9.5rem", sortable: false });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function POIListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "level");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const row_r1 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = \u0275\u0275pipeBind1(2, 1, row_r1.level_id)) == null ? null : tmp_5_0.display_name) || "Unknown", " ");
  }
}
function POIListComponent_ng_template_9_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "app-icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function POIListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, POIListComponent_ng_template_9_div_0_Template, 3, 0, "div", 9);
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275property("ngIf", data_r2);
  }
}
function POIListComponent_ng_template_11_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "a", 22);
    \u0275\u0275pipe(3, "safe");
    \u0275\u0275element(4, "img", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 25);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_ng_template_11_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.print());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(3, 4, row_r4.qr_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", row_r4.qr_code, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.name || row_r4.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "APP.CONCIERGE.POI_PRINT_QR"), " ");
  }
}
function POIListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "button", 13);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_Template_button_click_3_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.loadQrCode(row_r4));
    });
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "qr_code");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "button", 14);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_Template_button_click_8_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.loadPublicQrCode(row_r4));
    });
    \u0275\u0275elementStart(9, "app-icon");
    \u0275\u0275text(10, "qr_code");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, POIListComponent_ng_template_11_ng_template_11_Template, 10, 9, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(13, "button", 15)(14, "app-icon");
    \u0275\u0275text(15, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-menu", null, 4)(18, "button", 16);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_Template_button_click_18_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.edit(row_r4));
    });
    \u0275\u0275elementStart(19, "div", 17)(20, "app-icon");
    \u0275\u0275text(21, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "button", 16);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_Template_button_click_25_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.remove(row_r4));
    });
    \u0275\u0275elementStart(26, "div", 18)(27, "app-icon", 19);
    \u0275\u0275text(28, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    const qr_menu_r7 = \u0275\u0275reference(12);
    const menu_r8 = \u0275\u0275reference(17);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 8, "APP.CONCIERGE.POI_PRIVATE_QR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("content", qr_menu_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 10, "APP.CONCIERGE.POI_PUBLIC_QR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !row_r4.short_link_id)("content", qr_menu_r7);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 12, "APP.CONCIERGE.POI_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 14, "APP.CONCIERGE.POI_REMOVE"));
  }
}
var POIListComponent = class _POIListComponent {
  get kiosk_url() {
    const path = this._settings.get("app.kiosk_url_path") || "/map-kiosk";
    return `${window.location.origin}${path}`;
  }
  constructor(_manager, _settings) {
    this._manager = _manager;
    this._settings = _settings;
    this.features = this._manager.filtered_features;
    this.edit = (region) => this._manager.editPointOfInterest(region);
    this.remove = (region) => this._manager.removePointOfInterest(region);
  }
  loadQrCode(item) {
    const location2 = typeof item.location === "string" ? item.location : item.location.join(",");
    const link = `${this.kiosk_url}/#/explore?level=${encodeURIComponent(item.level_id)}&locate=${encodeURIComponent(location2)}`;
    item.qr_link = link;
    item.qr_code = generateQRCode(link);
  }
  loadPublicQrCode(item) {
    const link = `${location.origin}/r/${item.short_link_id.split("-")[1]}`;
    item.qr_link = link;
    item.qr_code = generateQRCode(link);
  }
  print() {
    window.print();
  }
  static {
    this.\u0275fac = function POIListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _POIListComponent)(\u0275\u0275directiveInject(POIManagementService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _POIListComponent, selectors: [["poi-list"]], standalone: false, decls: 13, vars: 29, consts: [["level_template", ""], ["bool_template", ""], ["action_template", ""], ["qr_menu", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No Points of Interest found.", 1, "min-w-[48rem]", "block", "text-sm", 3, "data", "columns", "sortable"], [1, "w-full", "h-12"], [1, "p-4"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto", 4, "ngIf"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-success", "text-success-content", "mx-auto"], [1, "w-full", "flex", "justify-end", "space-x-2", "px-4", "py-2", "mx-auto"], [3, "matTooltip"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "content"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "disabled", "content"], ["btn", "", "icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error"], [1, "bg-base-100", "py-2", "shadow", "rounded"], ["printable", "", 1, ""], ["target", "_blank", "ref", "noopener noreferrer", 1, "block", "p-2", "mx-4", "my-2", "rounded-lg", "border", "border-base-200", "bg-base-100", 3, "href"], [1, "w-48", 3, "src"], [1, "w-[calc(100%-2rem)]", "text-center", "mt-2", "font-mono", "text-sm", "bg-base-200", "rounded", "p-2", "mx-4"], ["btn", "", "matRipple", "", 1, "w-[calc(100%-2rem)]", "mx-4", "my-2", 3, "click"]], template: function POIListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 5);
        \u0275\u0275element(1, "simple-table", 6);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275element(6, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, POIListComponent_ng_template_7_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, POIListComponent_ng_template_9_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, POIListComponent_ng_template_11_Template, 32, 16, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const level_template_r9 = \u0275\u0275reference(8);
        const bool_template_r10 = \u0275\u0275reference(10);
        const action_template_r11 = \u0275\u0275reference(12);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.features)("columns", \u0275\u0275pureFunction5(23, _c5, \u0275\u0275pureFunction1(11, _c03, \u0275\u0275pipeBind1(2, 3, "FORM.NAME")), \u0275\u0275pureFunction2(13, _c12, \u0275\u0275pipeBind1(3, 5, "RESOURCE.LEVEL"), level_template_r9), \u0275\u0275pureFunction1(16, _c2, \u0275\u0275pipeBind1(4, 7, "COMMON.LOCATION")), \u0275\u0275pureFunction2(18, _c3, \u0275\u0275pipeBind1(5, 9, "APP.CONCIERGE.POI_SEARCHABLE"), bool_template_r10), \u0275\u0275pureFunction1(21, _c4, action_template_r11)))("sortable", true);
      }
    }, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, CustomTooltipComponent, SimpleTableComponent, PrintableComponent, SafePipe, LevelPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(POIListComponent, { className: "POIListComponent", filePath: "apps/concierge/src/app/poi-manager/poi-list.component.ts", lineNumber: 141 });
})();

// apps/concierge/src/app/poi-manager/poi-manager.component.ts
var _c04 = ["app-poi-manager", ""];
var _c13 = () => ({ standalone: true });
function POIManagerComponent_div_12_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r3 = ctx.$implicit;
    \u0275\u0275property("value", bld_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r3.display_name || bld_r3.name, " ");
  }
}
function POIManagerComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-form-field", 8)(2, "mat-select", 9);
    \u0275\u0275listener("ngModelChange", function POIManagerComponent_div_12_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.building = $event);
    });
    \u0275\u0275template(3, POIManagerComponent_div_12_mat_option_3_Template, 2, 2, "mat-option", 10);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.building)("ngModelOptions", \u0275\u0275pureFunction0(6, _c13))("placeholder", (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 4, ctx_r1.buildings));
  }
}
var POIManagerComponent = class _POIManagerComponent {
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor(_org, _state, _settings) {
    this._org = _org;
    this._state = _state;
    this._settings = _settings;
    this.new = () => this._state.editPointOfInterest();
    this.buildings = this._org.active_buildings;
  }
  static {
    this.\u0275fac = function POIManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _POIManagerComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(POIManagementService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _POIManagerComponent, selectors: [["", "app-poi-manager", ""]], standalone: false, attrs: _c04, decls: 15, vars: 13, consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "justify-between", "px-8", "py-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "click"], ["class", "flex items-center justify-between mb-2 px-8", 4, "ngIf"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"], [1, "flex", "items-center", "justify-between", "mb-2", "px-8"], ["appearance", "outline", 1, "w-64"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function POIManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1)(4, "header", 2);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275elementStart(6, "h2", 3);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 4);
        \u0275\u0275listener("click", function POIManagerComponent_Template_button_click_9_listener() {
          return ctx.new();
        });
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, POIManagerComponent_div_12_Template, 5, 7, "div", 5);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275element(14, "poi-list", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_3_0;
        \u0275\u0275advance(4);
        \u0275\u0275classProp("mb-2", !ctx.use_region || ((tmp_0_0 = \u0275\u0275pipeBind1(5, 5, ctx.buildings)) == null ? null : tmp_0_0.length) <= 1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "APP.CONCIERGE.POI_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "APP.CONCIERGE.POI_ADD"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(13, 11, ctx.buildings)) == null ? null : tmp_3_0.length) > 1);
      }
    }, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, ApplicationTopbarComponent, ApplicationSidebarComponent, MatFormField, MatSelect, MatOption, MatRipple, POIListComponent, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=poi-manager.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(POIManagerComponent, { className: "POIManagerComponent", filePath: "apps/concierge/src/app/poi-manager/poi-manager.component.ts", lineNumber: 78 });
})();

// apps/concierge/src/app/poi-manager/poi-manager.module.ts
var ROUTES = [
  { path: "", component: POIManagerComponent },
  { path: "new", component: POIManagerComponent }
];
var POIManagerModule = class _POIManagerModule {
  static {
    this.\u0275fac = function POIManagerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _POIManagerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _POIManagerModule });
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
  POIManagerModule
};
//# sourceMappingURL=poi-manager.module-W7BEZIBL.js.map
