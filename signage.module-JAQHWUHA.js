import {
  CdkDrag,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-N6YRE6JU.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-TH6ED5SD.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  Bo,
  Cc,
  CommonModule,
  ComponentsModule,
  DateFieldComponent,
  DefaultValueAccessor,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  Gc,
  IconComponent,
  Ir,
  Jc,
  Kc,
  LowerCasePipe,
  MAT_DIALOG_DATA,
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
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatSlider,
  MatSliderThumb,
  MatTooltip,
  MediaDurationPipe,
  NavigationEnd,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NgTemplateOutlet,
  Oc,
  OrganisationService,
  Qc,
  RequiredValidator,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  Sc,
  SettingsService,
  SettingsToggleComponent,
  TranslatePipe,
  UIModule,
  Validators,
  Vo,
  Wc,
  Zc,
  ZonePipe,
  __async,
  __spreadProps,
  __spreadValues,
  ac,
  addYears,
  catchError,
  combineLatest,
  debounceTime,
  ea,
  endOfDay,
  fc,
  filter,
  first,
  getUnixTime,
  i18n,
  jc,
  lc,
  map,
  na,
  nextValueFrom,
  notifyError,
  notifySuccess,
  oa,
  of,
  openConfirmModal,
  ra,
  sc,
  shareReplay,
  startOfDay,
  startOfMinute,
  startWith,
  switchMap,
  ta,
  tap,
  unique,
  uploadFile,
  wr,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
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
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-6ITZD6HK.js";

// apps/concierge/src/app/signage/search-overlay.component.ts
var _c0 = (a0) => ({ item: a0 });
function SearchOverlayComponent_For_9_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SearchOverlayComponent_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SearchOverlayComponent_For_9_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.result_template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, item_r2));
  }
}
function SearchOverlayComponent_For_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.name || item_r2, " ");
  }
}
function SearchOverlayComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function SearchOverlayComponent_For_9_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.next(item_r2));
    });
    \u0275\u0275template(1, SearchOverlayComponent_For_9_Conditional_1_Template, 1, 4, "ng-container")(2, SearchOverlayComponent_For_9_Conditional_2_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.result_template ? 1 : 2);
  }
}
function SearchOverlayComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function SearchOverlayComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close.next());
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.SIGNAGE_SEARCH_EMPTY"), " ");
  }
}
var SearchOverlayComponent = class _SearchOverlayComponent {
  constructor() {
    this.item_list = [];
    this.selected = new EventEmitter();
    this.close = new EventEmitter();
    this.search = new BehaviorSubject("");
    this._items = new BehaviorSubject([]);
  }
  ngOnChanges(changes) {
    if (changes.item_list) {
      this._items.next(this.item_list || []);
    }
  }
  static {
    this.\u0275fac = function SearchOverlayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchOverlayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchOverlayComponent, selectors: [["search-overlay"]], inputs: { item_list: "item_list", result_template: "result_template" }, outputs: { selected: "selected", close: "close" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 14, vars: 5, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "items-center", "p-8", 3, "click", "keydown.esc"], [1, "absolute", "inset-0", "z-0", "bg-base-content", "opacity-70"], [1, "relative", "z-10", "mx-auto", "mb-4", "w-[32rem]", "max-w-[calc(100%-2rem)]", 3, "click"], [1, "w-full", "rounded-[4rem]", "border", "border-base-300", "bg-base-100", "py-4", "pl-14", "pr-6", "text-xl", "text-base-content", "shadow", 3, "ngModelChange", "ngModel", "placeholder"], [1, "pointer-events-none", "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-3xl"], [1, "z-10", "mx-auto", "max-h-[65%]", "w-[32rem]", "max-w-[calc(100%-2rem)]", "overflow-auto", "rounded", 3, "click"], ["matRipple", "", 1, "w-full", "text-left"], ["matRipple", "", 1, "w-full", "p-4", "text-base-100"], ["icon", "", "matRipple", "", 1, "absolute", "right-8", "top-10", "h-12", "w-12", "text-xl", "text-base-100"], ["matRipple", "", 1, "w-full", "text-left", 3, "click"], [1, "w-full", "border", "border-base-300", "bg-base-100", "p-4", "hover:bg-base-200"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["matRipple", "", 1, "w-full", "p-4", "text-base-100", 3, "click"], [1, "opacity-30"]], template: function SearchOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function SearchOverlayComponent_Template_div_click_0_listener() {
          return ctx.close.next();
        })("keydown.esc", function SearchOverlayComponent_Template_div_keydown_esc_0_listener() {
          return ctx.close.next();
        }, false, \u0275\u0275resolveWindow);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275listener("click", function SearchOverlayComponent_Template_div_click_2_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(3, "input", 3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275listener("ngModelChange", function SearchOverlayComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.search.next($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "icon", 4);
        \u0275\u0275text(6, " search ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275listener("click", function SearchOverlayComponent_Template_div_click_7_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275repeaterCreate(8, SearchOverlayComponent_For_9_Template, 3, 1, "button", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275template(10, SearchOverlayComponent_Conditional_10_Template, 4, 3, "button", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 8)(12, "icon");
        \u0275\u0275text(13, "close");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.search.getValue())("placeholder", \u0275\u0275pipeBind1(4, 3, "COMMON.SEARCH"));
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.item_list);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!(ctx.item_list == null ? null : ctx.item_list.length) ? 10 : -1);
      }
    }, dependencies: [NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, NgModel, MatRipple, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchOverlayComponent, { className: "SearchOverlayComponent", filePath: "apps/concierge/src/app/signage/search-overlay.component.ts", lineNumber: 88 });
})();

// apps/concierge/src/app/signage/signage-display-modal.component.ts
var SignageDisplayModalComponent = class _SignageDisplayModalComponent {
  constructor(_data, _dialog_ref, _org) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this._org = _org;
    this.loading = false;
    this.display = this._data.display;
    this.form = new FormGroup({
      id: new FormControl(this._data.display?.id || ""),
      name: new FormControl(this._data.display?.display_name || "", [
        Validators.required
      ]),
      description: new FormControl(this._data.display?.description || ""),
      orientation: new FormControl(this._data.display?.orientation || "unspecified")
    });
  }
  save() {
    return __async(this, null, function* () {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      if (this.form.invalid)
        return;
      this.loading = true;
      const form_value = this.form.getRawValue();
      const new_display = new wr(__spreadProps(__spreadValues({}, form_value), {
        name: `SIGNAGE ${form_value.name}`,
        display_name: form_value.name,
        signage: true,
        zones: unique([
          this._org.organisation.id,
          this._org.region?.id,
          this._org.building?.id,
          ...this.display.zones
        ].filter((_) => !!_))
      }));
      const method = this.display.id ? ac(this.display.id, new_display) : lc(new_display);
      const result = yield method.toPromise();
      this._dialog_ref.close(result);
    });
  }
  static {
    this.\u0275fac = function SignageDisplayModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageDisplayModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageDisplayModalComponent, selectors: [["signage-display-modal"]], standalone: false, decls: 42, vars: 40, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], [1, "flex", "flex-col"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "name", "formControlName", "name", "required", "", 3, "placeholder"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 1, "min-h-32", 3, "placeholder"], ["for", "orientation"], ["name", "orientation", "formControlName", "orientation", 3, "placeholder"], ["value", "unspecified"], ["value", "landscape"], ["value", "portrait"], ["value", "square"]], template: function SignageDisplayModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function SignageDisplayModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "form", 1)(4, "div", 2)(5, "label", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "span", 4);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "mat-form-field", 5);
        \u0275\u0275element(11, "input", 6);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementStart(13, "mat-error");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 2)(17, "label", 7);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 5);
        \u0275\u0275element(21, "textarea", 8);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 2)(24, "label", 9);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-form-field", 5)(28, "mat-select", 10);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementStart(30, "mat-option", 11);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-option", 12);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-option", 13);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-option", 14);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 14, ctx.display.id ? "APP.CONCIERGE.SIGNAGE_DISPLAYS_EDIT" : "APP.CONCIERGE.SIGNAGE_DISPLAYS_NEW"))("loading", ctx.loading ? \u0275\u0275pipeBind1(2, 16, "APP.CONCIERGE.SIGNAGE_DISPLAYS_SAVING") : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 18, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 20, "FORM.NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 22, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 24, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 26, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 28, "APP.CONCIERGE.SIGNAGE_ORIENTATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(29, 30, "APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 32, "APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 34, "APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 36, "APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 38, "APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE"));
      }
    }, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MatFormField, MatError, MatInput, MatSelect, MatOption, FormGroupDirective, FormControlName, FullscreenModalShellComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageDisplayModalComponent, { className: "SignageDisplayModalComponent", filePath: "apps/concierge/src/app/signage/signage-display-modal.component.ts", lineNumber: 98 });
})();

// apps/concierge/src/app/signage/signage-media-modal.component.ts
function SignageMediaModalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "mediaDuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-slider", 28);
    \u0275\u0275element(8, "input", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "FORM.TIME_START"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 5, ctx_r0.form.value.start_time / 1e3, true), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("max", (ctx_r0.item.video_length || 3e5) - 1e3);
  }
}
function SignageMediaModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "mediaDuration");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.form.value.play_time / 1e3, true), " ");
  }
}
function SignageMediaModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "mediaDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.DEFAULT"), " (", ctx_r0.item.video_length ? \u0275\u0275pipeBind1(3, 4, ctx_r0.item.video_length / 1e3) : "", ") ");
  }
}
var SignageMediaModalComponent = class _SignageMediaModalComponent {
  get media_type() {
    if (!this.file)
      return this.item.media_type;
    return (this.file.type.includes("video") ? "video" : this.file.type.includes("image") ? "image" : "") || this.item.media_type;
  }
  get url() {
    if (this.item.id)
      return this.item.media_url;
    if (this._file_url)
      return this._file_url;
    this._file_url = URL.createObjectURL(this.file);
    return this._file_url;
  }
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.item = this._data.media;
    this.file = this._data.file;
    this.thumbnail = this._data.file_thumbnail || this._data.media.thumbnail_url;
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl(""),
      animation: new FormControl(Ir.Default),
      start_time: new FormControl(0),
      play_time: new FormControl(null),
      valid_from: new FormControl(startOfDay(Date.now()).valueOf()),
      valid_until: new FormControl(addYears(endOfDay(Date.now()), 10).valueOf())
    });
    this.preview = () => this._data.preview({
      media_url: this.url,
      media_type: this.media_type,
      name: this.form.value.name
    });
    this.form.patchValue(__spreadProps(__spreadValues({}, this._data.media), {
      valid_from: this._data.media.valid_from * 1e3,
      valid_until: this._data.media.valid_until * 1e3
    }));
    if (this._data.file) {
      this.form.patchValue({
        name: this._data.file.name
      });
    }
    if (this._data.file_metadata) {
      this.item.video_length = Math.floor(this._data.file_metadata[1] * 1e3);
    }
  }
  ngOnDestroy() {
    if (this._file_url)
      URL.revokeObjectURL(this._file_url);
  }
  saveMedia() {
    return __async(this, null, function* () {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      if (!this.form.valid)
        return;
      this.loading = true;
      this._dialog_ref.disableClose = true;
      const form_value = this.form.getRawValue();
      const new_media = __spreadProps(__spreadValues(__spreadValues({}, this.item), form_value), {
        valid_from: getUnixTime(new Date(form_value.valid_from)),
        valid_until: getUnixTime(form_value.valid_until)
      });
      const onError = (e) => {
        this._dialog_ref.disableClose = false;
        this.loading = false;
        notifyError(i18n("APP.CONCIERGE.SIGNAGE_MEDIA_SAVE_ERROR", { error: e }));
        throw e;
      };
      if (this.item.id) {
        yield Kc(this.item.id, new_media).toPromise().catch(onError);
      } else {
        yield this._data.onAdd(this.file, new_media).catch(onError);
      }
      this._dialog_ref.disableClose = false;
      this._dialog_ref.close();
      notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_MEDIA_SAVE_SUCCESS"));
    });
  }
  static {
    this.\u0275fac = function SignageMediaModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageMediaModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaModalComponent, selectors: [["signage-media-modal"]], standalone: false, decls: 71, vars: 69, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], [1, "flex", "flex-col"], ["matRipple", "", 1, "relative", "mx-auto", "mb-4", "h-48", "w-full", "overflow-hidden", "rounded-xl", "bg-base-300", 3, "click"], ["auth", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], [1, "absolute", "left-2", "top-2", "rounded", "bg-base-400", "px-2", "py-1", "text-xs", "capitalize"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], [1, "flex", "items-center", "space-x-4"], ["for", "play-time", 1, "m-0", "w-auto", "min-w-0"], [1, "font-mono", "text-xs"], [1, "opacity-30"], ["step", "100", 3, "min", "max"], ["name", "play-time", "matSliderThumb", "", "formControlName", "play_time"], ["for", "animation"], ["name", "animation", "formControlName", "animation", "placeholder", "Playlist Default"], [3, "value"], ["for", "description"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "description", "formControlName", "description", 1, "min-h-32", 3, "placeholder"], [1, "flex", "space-x-4"], [1, "flex-1"], ["for", "valid-from"], ["name", "valid-from", "formControlName", "valid_from"], ["for", "valid-until"], ["name", "valid-until", "formControlName", "valid_until", 3, "from"], ["for", "start-time", 1, "m-0", "w-auto", "min-w-0"], ["min", "0", "step", "100", 3, "max"], ["name", "start-time", "matSliderThumb", "", "formControlName", "start_time"]], template: function SignageMediaModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function SignageMediaModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.saveMedia();
        });
        \u0275\u0275elementStart(3, "form", 1)(4, "div", 2)(5, "button", 3);
        \u0275\u0275listener("click", function SignageMediaModalComponent_Template_button_click_5_listener() {
          return ctx.preview();
        });
        \u0275\u0275element(6, "img", 4);
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "label", 6);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-form-field", 7);
        \u0275\u0275element(13, "input", 8);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementStart(15, "mat-error");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, SignageMediaModalComponent_Conditional_18_Template, 9, 8);
        \u0275\u0275elementStart(19, "div", 9)(20, "label", 10);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 11);
        \u0275\u0275template(24, SignageMediaModalComponent_Conditional_24_Template, 2, 4)(25, SignageMediaModalComponent_Conditional_25_Template, 4, 6, "span", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "mat-slider", 13);
        \u0275\u0275element(27, "input", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "label", 15);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "mat-form-field", 7)(32, "mat-select", 16)(33, "mat-option", 17);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-option", 17);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-option", 17);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-option", 17);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "mat-option", 17);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "mat-option", 17);
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "mat-option", 17);
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "label", 18);
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "mat-form-field", 19);
        \u0275\u0275element(58, "textarea", 20);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 21)(61, "div", 22)(62, "label", 23);
        \u0275\u0275text(63);
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(65, "a-date-field", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 22)(67, "label", 25);
        \u0275\u0275text(68);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(70, "a-date-field", 26);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 33, ctx.item.id ? "APP.CONCIERGE.SIGNAGE_MEDIA_EDIT" : "APP.CONCIERGE.SIGNAGE_MEDIA_NEW"))("loading", ctx.loading ? \u0275\u0275pipeBind1(2, 35, "APP.CONCIERGE.SIGNAGE_MEDIA_SAVING") : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275property("source", ctx.thumbnail || ctx.url);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.media_type, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 37, "FORM.NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 39, "FORM.NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 41, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.media_type === "video" ? 18 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 43, "APP.CONCIERGE.SIGNAGE_MEDIA_PLAY_TIME"), "");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.form.value.play_time ? 24 : 25);
        \u0275\u0275advance(2);
        \u0275\u0275property("min", ctx.form.value.start_time)("max", ctx.item.video_length || 3e5);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 45, "APP.CONCIERGE.SIGNAGE_ANIMATION"));
        \u0275\u0275advance(4);
        \u0275\u0275property("value", 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 47, "APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 49, "APP.CONCIERGE.SIGNAGE_ANIMATION_CUT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 2);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 51, "APP.CONCIERGE.SIGNAGE_ANIMATION_CROSS_FADE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 3);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 53, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_TOP"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 4);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 55, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_LEFT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 5);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 57, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_RIGHT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 6);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 59, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_BOTTOM"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 61, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(59, 63, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 65, "APP.CONCIERGE.VALID_FROM"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 67, "APP.CONCIERGE.VALID_UNTIL"));
        \u0275\u0275advance(2);
        \u0275\u0275property("from", ctx.form.value.valid_from);
      }
    }, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatError, MatInput, MatSelect, MatOption, MatRipple, FormGroupDirective, FormControlName, DateFieldComponent, MatSlider, MatSliderThumb, FullscreenModalShellComponent, AuthenticatedImageDirective, TranslatePipe, MediaDurationPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaModalComponent, { className: "SignageMediaModalComponent", filePath: "apps/concierge/src/app/signage/signage-media-modal.component.ts", lineNumber: 200 });
})();

// apps/concierge/src/app/signage/signage-media-preview-modal.component.ts
var _c02 = (a0) => ({ name: a0 });
function SignageMediaPreviewModalComponent_main_7_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.resource.toString());
  }
}
function SignageMediaPreviewModalComponent_main_7_video_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.resource.toString());
  }
}
function SignageMediaPreviewModalComponent_main_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 6)(1, "div", 7);
    \u0275\u0275template(2, SignageMediaPreviewModalComponent_main_7_img_2_Template, 1, 1, "img", 8)(3, SignageMediaPreviewModalComponent_main_7_video_3_Template, 1, 1, "video", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.type === "image");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.type === "video");
  }
}
function SignageMediaPreviewModalComponent_footer_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 12)(1, "button", 13);
    \u0275\u0275listener("click", function SignageMediaPreviewModalComponent_footer_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save.emit());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.SIGNAGE_MEDIA_SAVE"), " ");
  }
}
function SignageMediaPreviewModalComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 14);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.loading);
  }
}
var SignageMediaPreviewModalComponent = class _SignageMediaPreviewModalComponent {
  constructor(_data) {
    this._data = _data;
    this.save = new EventEmitter();
    this.loading = "";
    this.resource = this._data.url;
    this.type = this._data.type;
    this.name = this._data.name;
    this.file = this._data.file;
    this.can_save = this._data.save !== false;
  }
  static {
    this.\u0275fac = function SignageMediaPreviewModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageMediaPreviewModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaPreviewModalComponent, selectors: [["signage-media-preview-modal"]], outputs: { save: "save" }, standalone: false, decls: 11, vars: 9, consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "border-b", "border-base-300", "p-2"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], ["class", "bg-base-200", 4, "ngIf", "ngIfElse"], ["class", "flex items-center justify-end space-x-2 border-t border-base-300 p-2", 4, "ngIf"], [1, "bg-base-200"], [1, "flex", "h-[65vh]", "max-h-[65vh]", "w-[80vw]", "max-w-[80vw]", "items-center", "justify-center"], ["class", "h-full w-full object-contain object-center", "auth", "", 3, "source", 4, "ngIf"], ["class", "h-full w-full object-contain object-center", "auth", "", "autoplay", "", "controls", "", 3, "source", 4, "ngIf"], ["auth", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], ["auth", "", "autoplay", "", "controls", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], [1, "flex", "items-center", "justify-end", "space-x-2", "border-t", "border-base-300", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "h-[20rem]", "max-h-[65vh]", "w-[28rem]", "max-w-[80vw]", "flex-col", "items-center", "justify-center", "p-8"], [3, "diameter"]], template: function SignageMediaPreviewModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h1", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(7, SignageMediaPreviewModalComponent_main_7_Template, 4, 2, "main", 4)(8, SignageMediaPreviewModalComponent_footer_8_Template, 4, 3, "footer", 5)(9, SignageMediaPreviewModalComponent_ng_template_9_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r3 = \u0275\u0275reference(10);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW_HEADER", \u0275\u0275pureFunction1(7, _c02, ctx.name)), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.can_save && !ctx.loading);
      }
    }, dependencies: [NgIf, MatProgressSpinner, MatDialogClose, MatRipple, IconComponent, AuthenticatedImageDirective, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaPreviewModalComponent, { className: "SignageMediaPreviewModalComponent", filePath: "apps/concierge/src/app/signage/signage-media-preview-modal.component.ts", lineNumber: 60 });
})();

// apps/concierge/src/app/signage/signage-playlist-modal.component.ts
var _c03 = ["search_input"];
var SignagePlaylistModalComponent = class _SignagePlaylistModalComponent {
  constructor(_data = {}, _state, _dialog, _dialog_ref) {
    this._data = _data;
    this._state = _state;
    this._dialog = _dialog;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.playlist = this._data;
    this.media = this._state.media;
    this.search = new BehaviorSubject("");
    this.form = new FormGroup({
      id: new FormControl(this.playlist.id || ""),
      name: new FormControl(this.playlist.name || "", [Validators.required]),
      description: new FormControl(this.playlist.description || ""),
      default_animation: new FormControl(this.playlist.default_animation || Ir.Cut),
      orientation: new FormControl(this.playlist.orientation || "unspecified"),
      enabled: new FormControl(this.playlist.enabled),
      random: new FormControl(this.playlist.random),
      default_duration: new FormControl(Math.max(this.playlist.default_duration || 15 * 1e3, 5e3)),
      valid_from: new FormControl(this.playlist.valid_from * 1e3),
      valid_until: new FormControl(this.playlist.valid_until * 1e3)
    });
  }
  savePlaylist() {
    return __async(this, null, function* () {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      if (this.form.invalid)
        return;
      this.loading = true;
      const form_value = this.form.getRawValue();
      const result = yield this._state.savePlaylist(__spreadProps(__spreadValues({}, form_value), {
        valid_from: getUnixTime(form_value.valid_from),
        valid_until: getUnixTime(form_value.valid_until)
      })).catch((_) => {
        notifyError("Error saving playlist");
        this.loading = false;
        throw _;
      });
      this._dialog_ref.close(result);
    });
  }
  static {
    this.\u0275fac = function SignagePlaylistModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignagePlaylistModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(SignageStateService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePlaylistModalComponent, selectors: [["signage-playlist-modal"]], viewQuery: function SignagePlaylistModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.search_input = _t.first);
      }
    }, standalone: false, decls: 96, vars: 91, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], [1, "mb-4", "flex", "items-center", "space-x-4"], ["formControlName", "enabled", 1, "flex-1", 3, "name"], ["formControlName", "random", 1, "flex-1", 3, "name"], [1, "flex", "items-center", "space-x-4"], ["for", "default-duration", 1, "m-0", "flex", "w-auto", "min-w-0", "items-center", "space-x-2"], ["matTooltip", "Default length of time to hold images on screen", 1, "text-xl"], [1, "font-mono", "text-xs"], ["min", "5000", "max", "300000", "step", "1000"], ["name", "default-duration", "matSliderThumb", "", "formControlName", "default_duration"], [1, "flex", "space-x-2"], [1, "flex-1"], ["for", "orientation"], ["name", "orientation", "formControlName", "orientation", 3, "placeholder"], ["value", "unspecified"], ["value", "landscape"], ["value", "portrait"], ["value", "square"], ["for", "animation"], ["name", "animation", "formControlName", "default_animation", 3, "placeholder"], [3, "value"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 1, "min-h-32", 3, "placeholder"], [1, "flex", "space-x-4"], ["for", "valid-from"], ["name", "valid-from", "formControlName", "valid_from", 1, "w-full"], ["for", "valid-until"], ["name", "valid-until", "formControlName", "valid_until", 1, "w-full", 3, "from", "disabled"]], template: function SignagePlaylistModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function SignagePlaylistModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.savePlaylist();
        });
        \u0275\u0275elementStart(3, "form", 1)(4, "label", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementStart(7, "span", 3);
        \u0275\u0275text(8, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "mat-form-field", 4);
        \u0275\u0275element(10, "input", 5);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementStart(12, "mat-error");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 6);
        \u0275\u0275element(16, "settings-toggle", 7);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275element(18, "settings-toggle", 8);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 9)(21, "label", 10)(22, "div");
        \u0275\u0275text(23, "Default Play Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "icon", 11);
        \u0275\u0275text(25, " info ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 12);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "mediaDuration");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "mat-slider", 13);
        \u0275\u0275element(30, "input", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 15)(32, "div", 16)(33, "label", 17);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-form-field", 4)(37, "mat-select", 18);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementStart(39, "mat-option", 19);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-option", 20);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "mat-option", 21);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "mat-option", 22);
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "div", 16)(52, "label", 23);
        \u0275\u0275text(53);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "mat-form-field", 4)(56, "mat-select", 24);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementStart(58, "mat-option", 25);
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "mat-option", 25);
        \u0275\u0275text(62);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "mat-option", 25);
        \u0275\u0275text(65);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "mat-option", 25);
        \u0275\u0275text(68);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "mat-option", 25);
        \u0275\u0275text(71);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "mat-option", 25);
        \u0275\u0275text(74);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "mat-option", 25);
        \u0275\u0275text(77);
        \u0275\u0275pipe(78, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(79, "label", 26);
        \u0275\u0275text(80);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "mat-form-field", 4);
        \u0275\u0275element(83, "textarea", 27);
        \u0275\u0275pipe(84, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div", 28)(86, "div", 16)(87, "label", 29);
        \u0275\u0275text(88);
        \u0275\u0275pipe(89, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(90, "a-date-field", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "div", 16)(92, "label", 31);
        \u0275\u0275text(93);
        \u0275\u0275pipe(94, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(95, "a-date-field", 32);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 37, ctx.playlist.id ? "APP.CONCIERGE.SIGNAGE_PLAYLISTS_EDIT" : "APP.CONCIERGE.SIGNAGE_PLAYLISTS_NEW"))("loading", ctx.loading ? \u0275\u0275pipeBind1(2, 39, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_SAVING") : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 41, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 43, "FORM.NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 45, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(3);
        \u0275\u0275property("name", \u0275\u0275pipeBind1(17, 47, "COMMON.ENABLED"));
        \u0275\u0275advance(2);
        \u0275\u0275property("name", \u0275\u0275pipeBind1(19, 49, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_SHUFFLE"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 51, ctx.form.value.default_duration / 1e3), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 53, "APP.CONCIERGE.SIGNAGE_ORIENTATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(38, 55, "APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 57, "APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 59, "APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 61, "APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 63, "APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 65, "APP.CONCIERGE.SIGNAGE_ANIMATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(57, 67, "APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 69, "APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 71, "APP.CONCIERGE.SIGNAGE_ANIMATION_CUT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 2);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 73, "APP.CONCIERGE.SIGNAGE_ANIMATION_CROSS_FADE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 3);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 75, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_TOP"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 4);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 77, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_LEFT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 5);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 79, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_RIGHT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 6);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 81, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_BOTTOM"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 83, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(84, 85, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 87, "APP.CONCIERGE.VALID_FROM"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(94, 89, "APP.CONCIERGE.VALID_UNTIL"));
        \u0275\u0275advance(2);
        \u0275\u0275property("from", ctx.form.value.valid_from)("disabled", !ctx.form.value.valid_from);
      }
    }, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatError, MatInput, MatSelect, MatOption, MatTooltip, FormGroupDirective, FormControlName, DateFieldComponent, MatSlider, MatSliderThumb, IconComponent, SettingsToggleComponent, FullscreenModalShellComponent, TranslatePipe, MediaDurationPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePlaylistModalComponent, { className: "SignagePlaylistModalComponent", filePath: "apps/concierge/src/app/signage/signage-playlist-modal.component.ts", lineNumber: 209 });
})();

// apps/concierge/src/app/signage/signage-state.service.ts
function dataURLtoFile(dataURL, filename) {
  const [prefix, data] = dataURL.split(",");
  const mimeType = prefix.split(":")[1].split(";")[0];
  const byteString = atob(data);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }
  return new File([uint8Array], filename, { type: mimeType });
}
var SignageStateService = class _SignageStateService extends AsyncHandler {
  changed() {
    this._change.next(Date.now());
  }
  constructor(_org, _dialog, _settings) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._loading = new BehaviorSubject(false);
    this._change = new BehaviorSubject(0);
    this._active_upload = new BehaviorSubject(null);
    this.loading = this._loading.asObservable();
    this.has_changed = this._change.asObservable();
    this.media = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([_]) => !!_?.id), debounceTime(300), switchMap(([bld]) => Qc({ limit: 2500 })), map((_) => _.data.sort((a, b) => b.created_at - a.created_at)), shareReplay(1));
    this.playlists = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([_]) => !!_?.id), debounceTime(300), switchMap(() => Jc({ limit: 500 })), map((_) => (_.data || []).sort((a, b) => a.name.localeCompare(b.name))), shareReplay(1));
    this.displays = combineLatest([
      this._org.active_region,
      this._org.active_building,
      this._change
    ]).pipe(filter(([region, bld]) => !!bld?.id), switchMap(([region, bld]) => sc({
      zone_id: (this._settings.get("app.use_region") ? region?.id : "") || bld?.id,
      limit: 500,
      signage: true
    }).pipe(map((_) => (_.data || []).sort((a, b) => (a.display_name || a.name).localeCompare(b.display_name || b.name)).filter((_2) => _2.signage)))), shareReplay(1));
    this.zones = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(switchMap(([bld]) => Cc({
      limit: 250
    }).pipe(catchError(() => of({ data: [] })))), map((_) => (_.data || []).sort((a, b) => (a.display_name || a.name).localeCompare(b.display_name || b.name))));
  }
  editPlaylist(playlist = new Vo({})) {
    return new Promise((resolve) => {
      const ref = this._dialog.open(SignagePlaylistModalComponent, {
        data: playlist
      });
      ref.afterClosed().subscribe((result) => {
        this.timeout("changed", () => this._change.next(Date.now()));
        resolve(result);
      });
    });
  }
  editMedia(media = new Bo({}), file, playlist_id = "") {
    return new Promise((resolve) => __async(this, null, function* () {
      const ref = this._dialog.open(SignageMediaModalComponent, {
        data: {
          media,
          file,
          file_metadata: file ? yield this._getMediaMetadata(file) : [media.orientation === "landscape", 0],
          file_thumbnail: file ? yield this._generateThumbnail(file, 1024, 720) : "",
          playlist_id,
          onAdd: (f, m) => this.addMedia(f, m),
          preview: (item) => this.previewMedia(item)
        }
      });
      ref.afterClosed().subscribe((result) => {
        this.timeout("changed", () => this._change.next(Date.now()));
        resolve(result);
      });
    }));
  }
  editDisplay() {
    return __async(this, arguments, function* (display = new wr({})) {
      console.log("Edit Display:", display);
      const ref = this._dialog.open(SignageDisplayModalComponent, {
        data: { display }
      });
      const result = yield ref.afterClosed().toPromise();
      this.timeout("changed", () => this._change.next(Date.now()));
      return result;
    });
  }
  removeDisplay(display) {
    return __async(this, null, function* () {
      const result = yield openConfirmModal({
        title: i18n("APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE"),
        content: i18n("APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE_MSG", {
          name: display.display_name
        }),
        icon: { content: "delete" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading(i18n("APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE_LOADING"));
      if (display.map_id || display.email || display.module_list.length > 0) {
        yield ac(display.id, {
          signage: false
        }).toPromise();
      } else {
        yield fc(display.id).toPromise();
      }
      this._change.next(Date.now());
      notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE_SUCCESS"));
      result.close();
    });
  }
  savePlaylist(playlist) {
    return __async(this, null, function* () {
      const call = playlist.id ? ea(playlist.id, playlist) : ta(playlist);
      const new_playlist = yield call.toPromise();
      notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_SAVE_SUCCESS"));
      this._change.next(Date.now());
    });
  }
  removePlaylist(playlist) {
    return __async(this, null, function* () {
      if (!playlist?.id)
        return;
      const result = yield openConfirmModal({
        title: i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE"),
        content: i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE_MSG", {
          name: playlist.name
        }),
        icon: { content: "delete" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      yield na(playlist.id).toPromise();
      notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE_SUCCESS"));
      this._change.next(Date.now());
      result.close();
    });
  }
  updatePlaylistMedia(playlist_id, list) {
    return __async(this, null, function* () {
      yield oa(playlist_id, list).toPromise();
      notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_MEDIA_SAVE_SUCCESS"));
    });
  }
  getPlaylistMedia(playlist_id) {
    return ra(playlist_id).toPromise().then((_) => _.items);
  }
  previewMedia(item) {
    this._dialog.open(SignageMediaPreviewModalComponent, {
      data: {
        url: item.media_url,
        type: item.media_type,
        name: item.name,
        save: false
      }
    });
  }
  previewFileFromInput(event, playlist_id = "") {
    const element = event.target;
    if (!element?.files?.length)
      return;
    const files = element.files;
    const file = files[0];
    if (file && (file.type.includes("image") || file.type.includes("video"))) {
      this.editMedia(void 0, file, playlist_id);
    } else {
      notifyError(i18n("APP.CONCIERGE.SIGNAGE_MEDIA_FILE_ERROR"));
    }
  }
  previewFileMedia(media, playlist_id = "") {
    const url = URL.createObjectURL(media);
    const type = media.type.includes("image") ? "image" : "video";
    const ref = this._dialog.open(SignageMediaPreviewModalComponent, {
      data: { url, type, name: media.name, save: true, file: media }
    });
    ref.afterClosed().subscribe(() => URL.revokeObjectURL(url));
    ref.componentInstance.save.subscribe(() => __async(this, null, function* () {
      ref.componentInstance.loading = "Saving...";
      const new_media = yield this.addMedia(media).catch((e) => {
        notifyError("Error saving media.");
        ref.componentInstance.loading = "";
        throw e;
      });
      if (playlist_id && new_media.id) {
        const media_list = yield ra(playlist_id).toPromise();
        const new_media_list = [...media_list.items, new_media.id];
        yield oa(playlist_id, new_media_list).toPromise();
      }
      ref.close();
    }));
  }
  addMedia(_0) {
    return __async(this, arguments, function* (file, media_item = new Bo({})) {
      const upload = (file2) => new Promise((resolve, reject) => {
        let state = null;
        let resolved = false;
        uploadFile(file2).subscribe((s) => {
          state = s;
          if (s.link) {
            resolved = true;
            resolve({ id: s.upload.id, link: s.link });
          }
        }, reject, () => !resolved ? resolve(state) : null);
      });
      const [is_landscape, _] = yield this._getMediaMetadata(file);
      const thumbnail_image = yield this._generateThumbnail(file, 1280, 720).catch((_2) => null);
      const media = yield upload(file);
      let thumbnail = null;
      if (thumbnail_image) {
        thumbnail = yield upload(dataURLtoFile(thumbnail_image, `thumb+${file.name}`));
      }
      const data = __spreadValues({}, new Bo(__spreadProps(__spreadValues({}, media_item), {
        name: media_item.name || file.name,
        media_id: media.id,
        media_uri: media.link,
        media_type: file.type.includes("image") ? "image" : "video",
        orientation: is_landscape ? "landscape" : "portrait",
        thumbnail_id: thumbnail.id
      })));
      for (const key in data) {
        if (!data[key])
          delete data[key];
      }
      const result = yield Zc(data).toPromise();
      this._active_upload.next(null);
      this._change.next(Date.now());
      return result;
    });
  }
  updateMedia(item) {
    return __async(this, null, function* () {
      if (!item?.id)
        return;
      yield Kc(item.id, item).toPromise();
    });
  }
  removeMedia(item) {
    return __async(this, null, function* () {
      if (!item?.id)
        return;
      const result = yield openConfirmModal({
        title: i18n("APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE"),
        content: i18n("APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE_MSG", {
          name: item.name
        }),
        icon: { content: "delete" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading(i18n("APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE_LOADING"));
      yield Gc(item.id).toPromise();
      this._change.next(Date.now());
      notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE_SUCCESS"));
      result.close();
    });
  }
  _getMediaMetadata(file) {
    return new Promise((resolve) => {
      const url = URL.createObjectURL(file);
      if (file.type.includes("video")) {
        const video = document.createElement("video");
        video.src = url.toString();
        video.addEventListener("loadedmetadata", () => {
          const { videoWidth, videoHeight } = video;
          resolve([videoWidth > videoHeight, video.duration]);
        });
        video.load();
      } else {
        const img = new Image();
        img.onload = () => resolve([img.width > img.height, 0]);
        img.src = url.toString();
      }
    });
  }
  _generateThumbnail(file, max_width, max_height) {
    return __async(this, null, function* () {
      console.log("File:", file, max_width, max_height);
      if (file.type.includes("video")) {
        return this._generateVideoThumbnail(file, max_width, max_height);
      } else {
        return this._generateImageThumbnail(file, max_width, max_height);
      }
    });
  }
  _generateImageThumbnail(file, max_width, max_height) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      console.log("Image:", img.src);
      img.onload = () => {
        const image = this._generateThumbnailFromResource(img, img.width, img.height, max_width, max_height);
        URL.revokeObjectURL(img.src);
        resolve(image);
      };
      img.onerror = reject;
    });
  }
  _generateVideoThumbnail(file, max_width, max_height) {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.autoplay = true;
      video.muted = true;
      video.src = URL.createObjectURL(file);
      video.onloadeddata = () => {
        const image = this._generateThumbnailFromResource(video, video.videoWidth, video.videoHeight, max_width, max_height);
        URL.revokeObjectURL(video.src);
        resolve(image);
      };
      video.onerror = reject;
    });
  }
  _generateThumbnailFromResource(data, source_width, source_height, max_width, max_height) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    let thumbnailWidth = source_width;
    let thumbnailHeight = source_height;
    const aspectRatio = thumbnailWidth / thumbnailHeight;
    if (thumbnailWidth > max_width) {
      thumbnailWidth = max_height;
      thumbnailHeight = thumbnailWidth / aspectRatio;
    }
    if (thumbnailHeight > max_height) {
      thumbnailHeight = max_width;
      thumbnailWidth = thumbnailHeight * aspectRatio;
    }
    canvas.width = thumbnailWidth;
    canvas.height = thumbnailHeight;
    ctx.drawImage(data, 0, 0, thumbnailWidth, thumbnailHeight);
    const dataURL = canvas.toDataURL("image/jpeg");
    return dataURL;
  }
  static {
    this.\u0275fac = function SignageStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(SettingsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignageStateService, factory: _SignageStateService.\u0275fac, providedIn: "root" });
  }
};

// apps/concierge/src/app/signage/signage-item-playlists.component.ts
var _c04 = ["*"];
var _c1 = (a0) => ({ count: a0 });
var _c2 = () => ["/signage", "media"];
var _c3 = (a0) => ({ playlist: a0 });
var _c4 = (a0) => ({ name: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function SignageItemPlaylistsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.extra, " ");
  }
}
function SignageItemPlaylistsComponent_Conditional_5_For_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function SignageItemPlaylistsComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, SignageItemPlaylistsComponent_Conditional_5_For_2_div_1_Template, 1, 0, "div", 9);
    \u0275\u0275elementStart(2, "button", 10);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "drag_handle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "div", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 14)(13, "icon");
    \u0275\u0275text(14, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-menu", null, 0)(17, "a", 15)(18, "div", 16)(19, "icon", 17);
    \u0275\u0275text(20, " visibility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "button", 19);
    \u0275\u0275listener("click", function SignageItemPlaylistsComponent_Conditional_5_For_2_Template_button_click_24_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove.next(item_r4));
    });
    \u0275\u0275elementStart(25, "div", 16)(26, "icon", 20);
    \u0275\u0275text(27, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 18);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const menu_r5 = \u0275\u0275reference(16);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 8, "APP.CONCIERGE.SIGNAGE_MEDIA_REORDER"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", item_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 10, "APP.CONCIERGE.SIGNAGE_MEDIA_COUNT", \u0275\u0275pureFunction1(17, _c1, ctx_r0.playlistCount(item_r4.id))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r5);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c2))("queryParams", \u0275\u0275pureFunction1(20, _c3, item_r4.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 13, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_VIEW"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 15, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE"), " ");
  }
}
function SignageItemPlaylistsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("cdkDropListDropped", function SignageItemPlaylistsComponent_Conditional_5_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.ondrop.next($event));
    });
    \u0275\u0275repeaterCreate(1, SignageItemPlaylistsComponent_Conditional_5_For_2_Template, 31, 22, "div", 7, _forTrack0);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function SignageItemPlaylistsComponent_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.add.emit());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 1, ctx_r0.active_playlists));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD"), " ");
  }
}
function SignageItemPlaylistsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 22)(2, "icon", 23);
    \u0275\u0275text(3, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function SignageItemPlaylistsComponent_Conditional_7_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.add.emit());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 2, "APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLISTS_EMPTY", \u0275\u0275pureFunction1(7, _c4, ctx_r0.name)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD"), " ");
  }
}
var PLAYLIST_ITEM_COUNTS = {};
var SignageItemPlaylistsComponent = class _SignageItemPlaylistsComponent {
  playlistCount(id) {
    return PLAYLIST_ITEM_COUNTS[id]?.count || 0;
  }
  constructor(_state) {
    this._state = _state;
    this.name = "zone";
    this.extra = "";
    this.add = new EventEmitter();
    this.remove = new EventEmitter();
    this.ondrop = new EventEmitter();
    this._playlist_ids = new BehaviorSubject([]);
    this.active_playlists = combineLatest([
      this._state.playlists,
      this._playlist_ids,
      this._state.has_changed
    ]).pipe(map(([playlists, ids]) => ids.map((id) => playlists.find((_) => _.id === id))), tap((playlists) => {
      for (const item of playlists) {
        const old_counts = PLAYLIST_ITEM_COUNTS[item.id];
        if (old_counts && old_counts.last_updated > item.updated_at * 1e3) {
          continue;
        }
        this._state.getPlaylistMedia(item.id).then((media) => {
          PLAYLIST_ITEM_COUNTS[item.id] = {
            count: media.length,
            last_updated: Date.now()
          };
        });
      }
    }), startWith([]));
  }
  ngOnChanges(changes) {
    if (changes.item) {
      this._playlist_ids.next(this.item?.playlists || []);
    }
  }
  static {
    this.\u0275fac = function SignageItemPlaylistsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageItemPlaylistsComponent)(\u0275\u0275directiveInject(SignageStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageItemPlaylistsComponent, selectors: [["signage-item-playlists"]], inputs: { item: "item", name: "name", extra: "extra" }, outputs: { add: "add", remove: "remove", ondrop: "ondrop" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c04, decls: 8, vars: 5, consts: [["menu", "matMenu"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-xl", "font-medium"], ["class", "rounded-lg bg-base-200 px-2 py-1 font-mono text-xs uppercase", 4, "ngIf"], [1, "mx-auto", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "rounded-lg", "bg-base-200", "px-2", "py-1", "font-mono", "text-xs", "uppercase"], ["cdkDropList", "", 1, "mt-4", "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "flex", "h-20", "w-full", "items-center", "space-x-2", "rounded-lg", "border", "border-base-300", "bg-base-100", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["class", "h-20 w-full rounded-xl border-4 border-dashed border-base-400 bg-base-300", 4, "cdkDragPlaceholder"], ["matRipple", "", "cdkDragHandle", "", 1, "flex", "h-full", "w-6", "items-center", "justify-center", "rounded", "hover:bg-base-200", 3, "matTooltip"], [1, "w-1/2", "flex-1", "text-base-content"], [1, "truncate"], [1, "truncate", "text-sm", "opacity-30"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink", "queryParams"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "click"], [1, "text-2xl", "text-error"], [1, "h-20", "w-full", "rounded-xl", "border-4", "border-dashed", "border-base-400", "bg-base-300"], [1, "flex", "flex-col", "items-center", "justify-center", "opacity-30"], [1, "text-6xl"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"]], template: function SignageItemPlaylistsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1)(1, "h3", 2);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, SignageItemPlaylistsComponent_div_3_Template, 2, 1, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(4);
        \u0275\u0275template(5, SignageItemPlaylistsComponent_Conditional_5_Template, 7, 5);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, SignageItemPlaylistsComponent_Conditional_7_Template, 10, 9, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", (ctx.item == null ? null : ctx.item.display_name) || (ctx.item == null ? null : ctx.item.name), " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.extra);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(6, 3, ctx.active_playlists).length > 0 && ctx.item ? 5 : 7);
      }
    }, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, RouterLink, CdkDropList, CdkDrag, CdkDragHandle, CdkDragPlaceholder, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-item-playlists.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageItemPlaylistsComponent, { className: "SignageItemPlaylistsComponent", filePath: "apps/concierge/src/app/signage/signage-item-playlists.component.ts", lineNumber: 146 });
})();

// apps/concierge/src/app/signage/signage-displays.component.ts
var _c05 = () => [];
var _c12 = (a0) => ({ display: a0 });
var _c22 = (a0, a1) => ({ display: a0, trigger: a1 });
var _c32 = () => ["/signage", "zones"];
var _c42 = (a0) => ({ zone: a0 });
var _forTrack02 = ($index, $item) => $item.id;
function SignageDisplaysComponent_Conditional_8_For_2_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275element(2, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 16)(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const trigger_r1 = ctx.$implicit;
    const display_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("!bg-secondary", ctx_r2.selected_trigger.getValue() === (trigger_r1 == null ? null : trigger_r1.id))("text-secondary-content", ctx_r2.selected_trigger.getValue() === (trigger_r1 == null ? null : trigger_r1.id));
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c05))("queryParams", \u0275\u0275pureFunction2(8, _c22, display_r2.id, trigger_r1 == null ? null : trigger_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((trigger_r1 == null ? null : trigger_r1.display_name) || (trigger_r1 == null ? null : trigger_r1.name) || "Trigger");
  }
}
function SignageDisplaysComponent_Conditional_8_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageDisplaysComponent_Conditional_8_For_2_Conditional_2_For_1_Template, 6, 11, "div", 13, _forTrack02);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r2.triggers));
  }
}
function SignageDisplaysComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, SignageDisplaysComponent_Conditional_8_For_2_Conditional_2_Template, 3, 2);
    \u0275\u0275pipe(3, "async");
  }
  if (rf & 2) {
    let tmp_16_0;
    const display_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("!bg-secondary", ctx_r2.selected.getValue() === display_r2.id)("text-secondary-content", ctx_r2.selected.getValue() === display_r2.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c05))("queryParams", \u0275\u0275pureFunction1(11, _c12, display_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", display_r2.display_name || display_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_16_0 = \u0275\u0275pipeBind1(3, 8, ctx_r2.active_display)) == null ? null : tmp_16_0.id) === display_r2.id && !ctx_r2.switching ? 2 : -1);
  }
}
function SignageDisplaysComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, SignageDisplaysComponent_Conditional_8_For_2_Template, 4, 13, null, null, _forTrack02);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r2.displays));
  }
}
function SignageDisplaysComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 18);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, ctx_r2.search.getValue() ? "APP.CONCIERGE.SIGNAGE_DISPLAYS_SEARCH_EMPTY" : "APP.CONCIERGE.SIGNAGE_DISPLAYS_EMPTY"), " ");
  }
}
function SignageDisplaysComponent_Conditional_12_div_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "zone");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "zone");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const zone_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c32))("queryParams", \u0275\u0275pureFunction1(12, _c42, zone_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_15_0 = \u0275\u0275pipeBind1(3, 5, \u0275\u0275pipeBind1(2, 3, zone_r5))) == null ? null : tmp_15_0.display_name) || ((tmp_15_0 = \u0275\u0275pipeBind1(5, 9, \u0275\u0275pipeBind1(4, 7, zone_r5))) == null ? null : tmp_15_0.name), " ");
  }
}
function SignageDisplaysComponent_Conditional_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, SignageDisplaysComponent_Conditional_12_div_6_For_2_Template, 6, 14, "a", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater((tmp_3_0 = \u0275\u0275pipeBind1(3, 1, ctx_r2.active_display)) == null ? null : tmp_3_0.zones);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "APP.CONCIERGE.SIGNAGE_DISPLAYS_ZONE_ADD"), " ");
  }
}
function SignageDisplaysComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "signage-item-playlists", 20);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275listener("add", function SignageDisplaysComponent_Conditional_12_Template_signage_item_playlists_add_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adding = true);
    })("remove", function SignageDisplaysComponent_Conditional_12_Template_signage_item_playlists_remove_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removePlaylist($event));
    })("ondrop", function SignageDisplaysComponent_Conditional_12_Template_signage_item_playlists_ondrop_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.drop($event));
    });
    \u0275\u0275template(6, SignageDisplaysComponent_Conditional_12_div_6_Template, 7, 5, "div", 21);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementStart(8, "button", 22)(9, "icon");
    \u0275\u0275text(10, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-menu", null, 0)(13, "a", 23);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementStart(15, "div", 24)(16, "icon", 25);
    \u0275\u0275text(17, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 26);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "button", 27);
    \u0275\u0275listener("click", function SignageDisplaysComponent_Conditional_12_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeDisplay());
    });
    \u0275\u0275elementStart(22, "div", 24)(23, "icon", 28);
    \u0275\u0275text(24, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 26);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_7_0;
    const menu_r6 = \u0275\u0275reference(12);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item", \u0275\u0275pipeBind1(1, 8, ctx_r2.active_trigger) || \u0275\u0275pipeBind1(2, 10, ctx_r2.active_display))("name", \u0275\u0275pipeBind1(3, 12, ctx_r2.active_trigger) ? "trigger" : "display")("extra", \u0275\u0275pipeBind1(4, 14, ctx_r2.active_trigger) ? "" : (tmp_4_0 = \u0275\u0275pipeBind1(5, 16, ctx_r2.active_display)) == null ? null : tmp_4_0.orientation);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(7, 18, ctx_r2.active_trigger));
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r6);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r2.signage_path + "/#/signage/" + ((tmp_7_0 = \u0275\u0275pipeBind1(14, 20, ctx_r2.active_display)) == null ? null : tmp_7_0.id), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 22, "APP.CONCIERGE.SIGNAGE_DISPLAYS_OPEN_PLAYER"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 24, "APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE"), " ");
  }
}
function SignageDisplaysComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon", 18);
    \u0275\u0275text(2, "desktop_windows");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "APP.CONCIERGE.SIGNAGE_DISPLAYS_SELECT"), " ");
  }
}
function SignageDisplaysComponent_search_overlay_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "search-overlay", 32);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("selected", function SignageDisplaysComponent_search_overlay_15_Template_search_overlay_selected_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addPlaylist($event));
    })("close", function SignageDisplaysComponent_search_overlay_15_Template_search_overlay_close_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adding = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item_list", \u0275\u0275pipeBind1(1, 1, ctx_r2.playlists));
  }
}
var SignageDisplaysComponent = class _SignageDisplaysComponent extends AsyncHandler {
  get signage_path() {
    return this._settings.get("app.signage_path") || "/signage";
  }
  constructor(_state, _route, _settings) {
    super();
    this._state = _state;
    this._route = _route;
    this._settings = _settings;
    this.adding = false;
    this.switching = false;
    this.search = new BehaviorSubject("");
    this.loading = this._state.loading;
    this.displays = combineLatest([
      this.search,
      this._state.displays
    ]).pipe(map(([search, list]) => list.filter((_) => _.name.toLowerCase().includes(search.toLowerCase()))));
    this.selected = new BehaviorSubject("");
    this.selected_trigger = new BehaviorSubject("");
    this.active_display = combineLatest([
      this.displays,
      this.selected
    ]).pipe(map(([displays, id]) => displays.find((item) => item.id === id)));
    this.triggers = this.selected.pipe(switchMap((id) => Sc(id)), map((_) => _.data), tap((_) => setTimeout(() => this.switching = false, 200)), shareReplay(1));
    this.active_trigger = combineLatest([
      this.triggers,
      this.selected_trigger,
      this.selected
    ]).pipe(map(([list, id, sys_id]) => list.find((item) => item.id === id && item.control_system_id === sys_id)));
    this.playlists = combineLatest([
      this.active_display,
      this.active_trigger,
      this._state.playlists,
      this._state.has_changed
    ]).pipe(map(([display, trigger, playlists]) => playlists.filter((_) => !(trigger || display)?.playlists.find((id) => _.id === id))));
    this.removeDisplay = () => __async(this, null, function* () {
      return this._state.removeDisplay(yield nextValueFrom(this.active_display));
    });
  }
  ngOnInit() {
    this.subscription("route.params", this._route.queryParamMap.subscribe((params) => {
      this.switching = params.get("display") !== this.selected.getValue();
      this.selected.next(params.get("display") || "");
      this.selected_trigger.next(params.get("trigger") || "");
    }));
  }
  addPlaylist(playlist) {
    return __async(this, null, function* () {
      const display = yield nextValueFrom(this.active_display);
      const trigger = yield nextValueFrom(this.active_trigger);
      const item = trigger || display;
      const playlists = [...item.playlists, playlist.id];
      const method = trigger ? Oc : ac;
      yield method(item.id, { playlists, version: display.version }, "patch").toPromise();
      notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_ADDED" : "APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLIST_ADDED"));
      this._state.changed();
      this.adding = false;
    });
  }
  removePlaylist(playlist) {
    return __async(this, null, function* () {
      const display = yield nextValueFrom(this.active_display);
      const trigger = yield nextValueFrom(this.active_trigger);
      const item = trigger || display;
      const playlists = item.playlists.filter((id) => playlist.id !== id);
      const method = trigger ? Oc : ac;
      yield method(item.id, { playlists, version: display.version }, "patch").toPromise();
      notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REMOVED" : "APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLIST_REMOVED"));
      this._state.changed();
      this.adding = false;
    });
  }
  drop(event) {
    return __async(this, null, function* () {
      const display = yield nextValueFrom(this.active_display);
      const trigger = yield nextValueFrom(this.active_trigger);
      const item = trigger || display;
      const old_playlist = item.playlists;
      const playlists = [...old_playlist];
      moveItemInArray(playlists, event.previousIndex, event.currentIndex);
      item.playlists = playlists;
      this._state.changed();
      const method = trigger ? Oc : ac;
      yield method(item.id, { playlists, version: display.version }, "patch").toPromise().catch((e) => {
        item.playlists = old_playlist;
        this._state.changed();
        throw e;
      });
      notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REORDER" : "APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLIST_REORDER"));
      this._state.changed();
    });
  }
  static {
    this.\u0275fac = function SignageDisplaysComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageDisplaysComponent)(\u0275\u0275directiveInject(SignageStateService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageDisplaysComponent, selectors: [["signage-displays"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 14, consts: [["menu", "matMenu"], [1, "relative", "flex", "h-full", "w-full", "space-x-4", "overflow-visible"], ["sidebar", "", 1, "flex", "h-full", "w-64", "flex-col", "space-y-4", "py-4"], [1, "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "h-1/2", "w-full", "flex-1", "space-y-2", "overflow-auto"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col", "space-y-4", "overflow-auto", "rounded-lg", "border", "border-base-300", "p-4", "shadow"], [1, "flex", "flex-1", "flex-col", 3, "item", "name", "extra"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], [3, "item_list", "selected", "close", 4, "ngIf"], ["matRipple", "", 1, "z-10", "flex", "min-h-12", "w-full", "items-center", "truncate", "rounded-3xl", "px-6", "hover:bg-base-200", 3, "routerLink", "queryParams"], [1, "relative", "z-0", "flex", "items-center", "space-x-2"], [1, "w-6"], [1, "absolute", "left-6", "top-1/2", "h-16", "w-4", "-translate-y-full", "border-b-2", "border-l-2", "border-base-300"], ["matRipple", "", 1, "flex", "min-h-12", "w-1/2", "flex-1", "items-center", "truncate", "rounded-3xl", "px-6", "hover:bg-base-200", 3, "routerLink", "queryParams"], [1, "max-w-full", "truncate"], [1, "text-6xl"], [1, "text-center"], [1, "flex", "flex-1", "flex-col", 3, "add", "remove", "ondrop", "item", "name", "extra"], ["class", "mt-4 flex flex-wrap items-center overflow-auto", 4, "ngIf"], ["icon", "", "matRipple", "", 1, "absolute", "right-2", "top-2", "!m-0", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "target", "_blank", "ref", "noopener noreferrer", 3, "href"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "click"], [1, "text-2xl", "text-error"], [1, "mt-4", "flex", "flex-wrap", "items-center", "overflow-auto"], ["matRipple", "", 1, "m-1", "whitespace-nowrap", "rounded", "bg-base-200", "px-2", "py-1", "font-mono", "text-xs", 3, "routerLink", "queryParams"], ["matRipple", "", 1, "m-1", "rounded", "px-2", "py-1", "font-mono", "text-xs", "underline"], [3, "selected", "close", "item_list"]], template: function SignageDisplaysComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-form-field", 4)(6, "input", 5);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("ngModelChange", function SignageDisplaysComponent_Template_input_ngModelChange_6_listener($event) {
          return ctx.search.next($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, SignageDisplaysComponent_Conditional_8_Template, 4, 2, "div", 6);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275template(10, SignageDisplaysComponent_Conditional_10_Template, 6, 3, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275template(12, SignageDisplaysComponent_Conditional_12_Template, 28, 26, "signage-item-playlists", 9);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275template(14, SignageDisplaysComponent_Conditional_14_Template, 6, 3, "div", 10)(15, SignageDisplaysComponent_search_overlay_15_Template, 2, 3, "search-overlay", 11);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.SIGNAGE_DISPLAYS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "COMMON.SEARCH"))("ngModel", ctx.search.getValue());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_3_0 = \u0275\u0275pipeBind1(9, 10, ctx.displays)) == null ? null : tmp_3_0.length) > 0 ? 8 : 10);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(13, 12, ctx.active_display) ? 12 : 14);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.adding);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, RouterLink, SearchOverlayComponent, SignageItemPlaylistsComponent, AsyncPipe, TranslatePipe, ZonePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageDisplaysComponent, { className: "SignageDisplaysComponent", filePath: "apps/concierge/src/app/signage/signage-displays.component.ts", lineNumber: 237 });
})();

// apps/concierge/src/app/signage/signage-media-list.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function SignageMediaListComponent_Conditional_12_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
}
function SignageMediaListComponent_Conditional_12_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
  }
}
function SignageMediaListComponent_Conditional_12_For_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "icon", 33);
    \u0275\u0275text(2, " add ");
    \u0275\u0275elementEnd()();
  }
}
function SignageMediaListComponent_Conditional_12_For_3_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
  if (rf & 2) {
    const media_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", media_r4.thumbnail_url);
  }
}
function SignageMediaListComponent_Conditional_12_For_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "mediaDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, media_r4.play_time / 1e3), " ");
  }
}
function SignageMediaListComponent_Conditional_12_For_3_button_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_EMPTY"), " ");
  }
}
function SignageMediaListComponent_Conditional_12_For_3_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_12_For_3_button_24_Template_button_click_0_listener() {
      const playlist_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const media_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToPlaylist(media_r4.id, playlist_r6));
    });
    \u0275\u0275elementStart(1, "div", 27)(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const playlist_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", playlist_r6.name, " ");
  }
}
function SignageMediaListComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, SignageMediaListComponent_Conditional_12_For_3_Conditional_1_Template, 1, 0, "div", 12)(2, SignageMediaListComponent_Conditional_12_For_3_Conditional_2_Template, 1, 0, "div", 13)(3, SignageMediaListComponent_Conditional_12_For_3_div_3_Template, 3, 0, "div", 14);
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275template(5, SignageMediaListComponent_Conditional_12_For_3_img_5_Template, 1, 1, "img", 16);
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SignageMediaListComponent_Conditional_12_For_3_div_9_Template, 3, 3, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19)(11, "div", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 21)(14, "icon");
    \u0275\u0275text(15, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-menu", null, 0)(18, "div", 22)(19, "mat-form-field", 23);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_12_For_3_Template_mat_form_field_click_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(20, "input", 5);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("ngModelChange", function SignageMediaListComponent_Conditional_12_For_3_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.playlist_search.next($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, SignageMediaListComponent_Conditional_12_For_3_button_22_Template, 3, 4, "button", 24);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275template(24, SignageMediaListComponent_Conditional_12_For_3_button_24_Template, 4, 1, "button", 25);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-menu", null, 1)(28, "button", 26);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_12_For_3_Template_button_click_28_listener() {
      const media_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editItem(media_r4));
    });
    \u0275\u0275elementStart(29, "div", 27)(30, "icon", 28);
    \u0275\u0275text(31, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 29);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "button", 30)(36, "div", 27)(37, "icon", 28);
    \u0275\u0275text(38, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 29);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "button", 26);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_12_For_3_Template_button_click_42_listener() {
      const media_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previewItem(media_r4));
    });
    \u0275\u0275elementStart(43, "div", 27)(44, "icon", 28);
    \u0275\u0275text(45, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 29);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "button", 26);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_12_For_3_Template_button_click_49_listener() {
      const media_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeItem(media_r4));
    });
    \u0275\u0275elementStart(50, "div", 27)(51, "icon", 31);
    \u0275\u0275text(52, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 29);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_26_0;
    const media_r4 = ctx.$implicit;
    const playlist_menu_r7 = \u0275\u0275reference(17);
    const menu_r8 = \u0275\u0275reference(27);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(media_r4.valid_from && ctx_r1.now < media_r4.valid_from ? 1 : media_r4.valid_until && ctx_r1.now > media_r4.valid_until ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", media_r4.thumbnail_url);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-info", media_r4.media_type === "video")("text-info-content", media_r4.media_type === "video")("bg-warning", media_r4.media_type === "image")("text-warning-content", media_r4.media_type === "image");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 24, media_r4.media_type === "image" ? "COMMON.IMAGE" : "COMMON.VIDEO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", media_r4.play_time);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", media_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", media_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(7);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 26, "COMMON.SEARCH"))("ngModel", ctx_r1.playlist_search.getValue());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(((tmp_26_0 = \u0275\u0275pipeBind1(23, 28, ctx_r1.playlists)) == null ? null : tmp_26_0.length) > 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(25, 30, ctx_r1.playlists));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 32, "APP.CONCIERGE.SIGNAGE_MEDIA_EDIT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", playlist_menu_r7);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 34, "APP.CONCIERGE.SIGNAGE_MEDIA_ADD_PLAYLIST"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 36, "APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 38, "APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE"), " ");
  }
}
function SignageMediaListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("cdkDropListDropped", function SignageMediaListComponent_Conditional_12_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.drop($event));
    });
    \u0275\u0275repeaterCreate(2, SignageMediaListComponent_Conditional_12_For_3_Template, 56, 40, "div", 11, _forTrack03);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("cdkDropListData", \u0275\u0275pipeBind1(1, 2, ctx_r1.media))("cdkDropListConnectedTo", ctx_r1.playlist_ids);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 4, ctx_r1.media));
  }
}
function SignageMediaListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 37);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "APP.CONCIERGE.SIGNAGE_MEDIA_EMPTY"));
  }
}
var SignageMediaListComponent = class _SignageMediaListComponent {
  get now() {
    return getUnixTime(startOfMinute(Date.now()));
  }
  constructor(_state) {
    this._state = _state;
    this.playlist_count = 0;
    this.search = new BehaviorSubject("");
    this.playlist_search = new BehaviorSubject("");
    this.playlists = combineLatest([
      this.playlist_search,
      this._state.playlists
    ]).pipe(map(([search, list]) => list.filter((_) => _.name.toLowerCase().includes(search.toLowerCase()))));
    this.media = combineLatest([
      this.search,
      this._state.media
    ]).pipe(map(([search, media]) => media.filter((_) => _.name.toLowerCase().includes(search.toLowerCase()))));
    this.previewFile = (event) => this._state.previewFileFromInput(event);
    this.playlist_ids = [];
    this.previewItem = (item) => this._state.previewMedia(item);
    this.editItem = (item) => this._state.editMedia(item);
    this.removeItem = (item) => __async(this, null, function* () {
      return this._state.removeMedia(item);
    });
  }
  ngOnChanges(changes) {
    if (changes.playlist_count) {
      this.playlist_ids = new Array(this.playlist_count).fill(0).map((_, idx) => `playlist-${idx}`);
    }
  }
  // public drop(event) {}
  addToPlaylist(media_id, playlist) {
    return __async(this, null, function* () {
      const media_list = yield ra(playlist.id).toPromise();
      const new_media_list = [...media_list.items, media_id];
      yield this._state.updatePlaylistMedia(playlist.id, new_media_list);
    });
  }
  static {
    this.\u0275fac = function SignageMediaListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageMediaListComponent)(\u0275\u0275directiveInject(SignageStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaListComponent, selectors: [["signage-media-list"]], inputs: { playlist_count: "playlist_count" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 15, vars: 13, consts: [["playlist_menu", "matMenu"], ["menu", "matMenu"], [1, "relative", "p-4"], [1, "mb-4", "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["icon", "", "matRipple", "", "matTooltipPosition", "left", 1, "absolute", "right-2", "top-2", "border", "border-base-300", 3, "matTooltip"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["cdkDropList", "", "id", "media-list", 1, "grid", "w-full", "gap-4", "p-4", "md:grid-cols-2", "lg:grid-cols-3", 3, "cdkDropListData", "cdkDropListConnectedTo"], [1, "mx-auto", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], ["cdkDropList", "", "id", "media-list", 1, "grid", "w-full", "gap-4", "p-4", "md:grid-cols-2", "lg:grid-cols-3", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", 1, "relative", "flex", "flex-col", "items-center", "justify-center", "rounded-lg", "border", "border-base-300", "bg-base-100", "p-3", "hover:opacity-80"], [1, "absolute", "inset-0", "z-0", "rounded-lg", "bg-warning", "opacity-10"], [1, "absolute", "inset-0", "z-0", "rounded-lg", "bg-error", "opacity-10"], ["class", "flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed border-base-400 bg-base-300", 4, "cdkDragPlaceholder"], ["preview", "", 1, "relative", "h-36", "w-full", "overflow-hidden", "rounded-lg", "bg-base-200"], ["auth", "", "class", "h-full w-full rounded-lg object-contain", 3, "source", 4, "ngIf"], [1, "absolute", "left-1", "top-1", "rounded-lg", "px-2", "py-1", "font-mono", "text-xs", "capitalize"], ["class", "absolute bottom-1 right-1 rounded-lg bg-info px-2 py-1 font-mono text-xs capitalize text-info-content", 4, "ngIf"], [1, "relative", "top-1", "flex", "w-full", "items-center", "justify-between"], [1, "w-1/2", "flex-1", "truncate", "text-base-content", 3, "matTooltip"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], [1, "px-2"], ["appearance", "outline", 1, "no-subscript", "w-full", 3, "click"], ["mat-menu-item", "", 3, "disabled", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "text-2xl", "text-error"], [1, "flex", "min-h-10", "min-w-10", "items-center", "justify-center", "rounded-2xl", "border-4", "border-dashed", "border-base-400", "bg-base-300"], [1, "text-2xl", "text-base-100"], ["auth", "", 1, "h-full", "w-full", "rounded-lg", "object-contain", 3, "source"], [1, "absolute", "bottom-1", "right-1", "rounded-lg", "bg-info", "px-2", "py-1", "font-mono", "text-xs", "capitalize", "text-info-content"], ["mat-menu-item", "", 3, "disabled"], [1, "text-6xl"]], template: function SignageMediaListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "h3", 3);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-form-field", 4)(5, "input", 5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275listener("ngModelChange", function SignageMediaListComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.search.next($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 6);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementStart(9, "icon");
        \u0275\u0275text(10, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 7);
        \u0275\u0275listener("change", function SignageMediaListComponent_Template_input_change_11_listener($event) {
          return ctx.previewFile($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, SignageMediaListComponent_Conditional_12_Template, 5, 6, "div", 8);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275template(14, SignageMediaListComponent_Conditional_14_Template, 6, 3, "div", 9);
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.SIGNAGE_MEDIA"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "COMMON.SEARCH"))("ngModel", ctx.search.getValue());
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(8, 9, "APP.CONCIERGE.SIGNAGE_MEDIA_UPLOAD"));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(((tmp_4_0 = \u0275\u0275pipeBind1(13, 11, ctx.media)) == null ? null : tmp_4_0.length) > 0 ? 12 : 14);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, AuthenticatedImageDirective, CdkDropList, CdkDrag, CdkDragPlaceholder, AsyncPipe, TranslatePipe, MediaDurationPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=signage-media-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaListComponent, { className: "SignageMediaListComponent", filePath: "apps/concierge/src/app/signage/signage-media-list.component.ts", lineNumber: 256 });
})();

// apps/concierge/src/app/signage/signage-playlist-media-list.component.ts
function SignagePlaylistMediaListComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.SIGNAGE_SHUFFLE"), " ");
  }
}
function SignagePlaylistMediaListComponent_Conditional_53_ng_container_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 23);
  }
}
function SignagePlaylistMediaListComponent_Conditional_53_ng_container_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 24);
  }
}
function SignagePlaylistMediaListComponent_Conditional_53_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "icon", 32);
    \u0275\u0275text(2, " add ");
    \u0275\u0275elementEnd()();
  }
}
function SignagePlaylistMediaListComponent_Conditional_53_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275template(2, SignagePlaylistMediaListComponent_Conditional_53_ng_container_2_Conditional_2_Template, 1, 0, "div", 23)(3, SignagePlaylistMediaListComponent_Conditional_53_ng_container_2_Conditional_3_Template, 1, 0, "div", 24)(4, SignagePlaylistMediaListComponent_Conditional_53_ng_container_2_div_4_Template, 3, 0, "div", 25);
    \u0275\u0275elementStart(5, "button", 26)(6, "icon");
    \u0275\u0275text(7, "drag_handle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 27);
    \u0275\u0275element(9, "img", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 29);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 30)(13, "icon");
    \u0275\u0275text(14, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-menu", null, 0)(17, "button", 4);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Conditional_53_ng_container_2_Template_button_click_17_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editItem(item_r5));
    });
    \u0275\u0275elementStart(18, "div", 5)(19, "icon", 6);
    \u0275\u0275text(20, " edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 7);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "button", 4);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Conditional_53_ng_container_2_Template_button_click_24_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.previewItem(item_r5));
    });
    \u0275\u0275elementStart(25, "div", 5)(26, "icon", 6);
    \u0275\u0275text(27, " visibility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 7);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "button", 4);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Conditional_53_ng_container_2_Template_button_click_31_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeItem(item_r5));
    });
    \u0275\u0275elementStart(32, "div", 5)(33, "icon", 8);
    \u0275\u0275text(34, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 7);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const menu_r6 = \u0275\u0275reference(16);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r5.valid_from && ctx_r2.now < item_r5.valid_from ? 2 : item_r5.valid_until && ctx_r2.now > item_r5.valid_until ? 3 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("source", item_r5.thumbnail_url);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r6);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 7, "APP.CONCIERGE.SIGNAGE_MEDIA_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 9, "APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 11, "APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE"), " ");
  }
}
function SignagePlaylistMediaListComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("cdkDropListDropped", function SignagePlaylistMediaListComponent_Conditional_53_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.drop($event));
    });
    \u0275\u0275template(2, SignagePlaylistMediaListComponent_Conditional_53_ng_container_2_Template, 38, 13, "ng-container", 21);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("cdkDropListData", \u0275\u0275pipeBind1(1, 3, ctx_r2.media))("cdkDropListConnectedTo", ctx_r2.playlist_ids);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(3, 5, ctx_r2.media));
  }
}
function SignagePlaylistMediaListComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "icon", 33);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "APP.CONCIERGE.SIGNAGE_PLAYLIST_MEDIA_EMPTY"), " ");
  }
}
var SignagePlaylistMediaListComponent = class _SignagePlaylistMediaListComponent {
  get now() {
    return getUnixTime(startOfMinute(Date.now()));
  }
  constructor(_state, _router) {
    this._state = _state;
    this._router = _router;
    this.playlist = "";
    this.playlist_count = 0;
    this.playlist_ids = [];
    this._playlist = new BehaviorSubject("");
    this.editPlaylist = () => __async(this, null, function* () {
      const playlist = yield nextValueFrom(this.selected_playlist);
      this._state.editPlaylist(playlist);
    });
    this.removeItem = (item) => __async(this, null, function* () {
      const playlist = yield nextValueFrom(this._playlist_media);
      const list = playlist.items.filter((_) => _ !== item.id);
      yield this._state.updatePlaylistMedia(this.playlist, list);
      this._playlist.next(this.playlist);
    });
    this.previewItem = (item) => this._state.previewMedia(item);
    this.editItem = (item) => this._state.editMedia(item);
    this.removePlaylist = () => __async(this, null, function* () {
      this._state.removePlaylist(yield nextValueFrom(this.selected_playlist));
      this._router.navigate(["/signage/media", {}]);
    });
    this.selected_playlist = combineLatest([
      this._playlist,
      this._state.playlists
    ]).pipe(map(([playlist, list]) => {
      const item = list.find((_) => _.id === playlist);
      if (!item)
        this._router.navigate(["/signage/media", {}]);
      return item;
    }));
    this._playlist_media = this._playlist.pipe(filter((playlist) => !!playlist), debounceTime(300), switchMap((playlist) => ra(playlist).pipe(catchError(() => of({ id: "", items: [] })))), shareReplay(1));
    this.media = combineLatest([
      this._playlist_media,
      this._state.media
    ]).pipe(map(([playlist, media]) => playlist.items.map((_) => media.find((m) => m.id === _)).filter((_) => _)), startWith([]));
  }
  ngOnChanges(changes) {
    if (changes.playlist) {
      this._playlist.next(this.playlist);
    }
    if (changes.playlist_count) {
      this.playlist_ids = new Array(this.playlist_count).fill(0).map((_, idx) => `playlist-${idx}`);
    }
  }
  animation_name(value) {
    switch (value) {
      case Ir.Cut:
        return "Cut";
      case Ir.CrossFade:
        return "Cross Fade";
      case Ir.SlideBottom:
        return "Slide Bottom";
      case Ir.SlideLeft:
        return "Slide Left";
      case Ir.SlideRight:
        return "Slide Right";
      case Ir.SlideTop:
        return "Slide Top";
    }
    return "Default";
  }
  drop(event) {
    return __async(this, null, function* () {
      if (event.previousIndex === event.currentIndex)
        return;
      const id = yield nextValueFrom(this._playlist);
      const playlist = yield nextValueFrom(this._playlist_media);
      if (!id && playlist)
        return;
      const list = [...playlist.items];
      moveItemInArray(list, event.previousIndex, event.currentIndex);
      yield this._state.updatePlaylistMedia(id, list);
      this._playlist.next(this.playlist);
    });
  }
  static {
    this.\u0275fac = function SignagePlaylistMediaListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignagePlaylistMediaListComponent)(\u0275\u0275directiveInject(SignageStateService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePlaylistMediaListComponent, selectors: [["signage-playlist-media-list"]], inputs: { playlist: "playlist", playlist_count: "playlist_count" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 56, vars: 57, consts: [["menu", "matMenu"], [1, "relative", "flex", "h-full", "w-full", "flex-col", "space-y-4", "p-4"], [1, "text-center", "text-xl", "font-medium"], ["icon", "", "matRipple", "", 1, "absolute", "right-2", "top-2", "!m-0", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], [1, "text-2xl", "text-error"], ["details", "", 1, "flex", "flex-wrap", "items-center"], [1, "m-1", "ml-2", "rounded", "px-2", "py-1", "text-xs"], ["class", "m-1 ml-2 rounded bg-secondary px-2 py-1 text-xs text-secondary-content", 4, "ngIf"], ["matTooltip", "Default Transition Animation", 1, "m-1", "rounded", "bg-base-200", "px-2", "py-2", "text-xs"], [1, "ml-1", "rounded", "bg-base-300", "px-2", "py-1", "uppercase"], ["matTooltip", "Default Playback Duration", 1, "m-1", "rounded", "bg-base-200", "px-2", "py-2", "text-xs"], [1, "ml-1", "rounded", "bg-base-300", "px-2", "py-1", "font-mono"], ["matTooltip", "Prefered Orientation", 1, "m-1", "rounded", "bg-base-200", "px-2", "py-2", "text-xs"], ["cdkDropList", "", "id", "playlist-list", 1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", 3, "cdkDropListData", "cdkDropListConnectedTo"], [1, "mx-auto", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "m-1", "ml-2", "rounded", "bg-secondary", "px-2", "py-1", "text-xs", "text-secondary-content"], ["cdkDropList", "", "id", "playlist-list", 1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], [4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "relative", "flex", "h-20", "w-full", "items-center", "space-x-2", "rounded-lg", "border", "border-base-300", "bg-base-100", "p-2"], [1, "absolute", "inset-0", "z-0", "rounded-lg", "bg-warning", "opacity-10"], [1, "absolute", "inset-0", "z-0", "rounded-lg", "bg-error", "opacity-10"], ["class", "flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed border-base-400 bg-base-300", 4, "cdkDragPlaceholder"], ["matRipple", "", "cdkDragHandle", "", "matTooltip", "Drag to reorder", 1, "flex", "h-full", "w-6", "items-center", "justify-center", "rounded", "hover:bg-base-200"], ["preview", "", 1, "h-16", "w-[4.5rem]", "overflow-hidden", "rounded-lg", "bg-base-200"], ["auth", "", 1, "h-full", "w-full", "object-contain", 3, "source"], [1, "w-1/2", "flex-1", "truncate", "text-base-content"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], [1, "flex", "min-h-10", "min-w-10", "items-center", "justify-center", "rounded-2xl", "border-4", "border-dashed", "border-base-400", "bg-base-300"], [1, "text-2xl", "text-base-100"], [1, "text-6xl"]], template: function SignagePlaylistMediaListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "h3", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3)(5, "icon");
        \u0275\u0275text(6, "more_vert");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "mat-menu", null, 0)(9, "button", 4);
        \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.editPlaylist());
        });
        \u0275\u0275elementStart(10, "div", 5)(11, "icon", 6);
        \u0275\u0275text(12, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "button", 4);
        \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Template_button_click_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.removePlaylist());
        });
        \u0275\u0275elementStart(17, "div", 5)(18, "icon", 8);
        \u0275\u0275text(19, "delete");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 7);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 9)(24, "div", 10);
        \u0275\u0275pipe(25, "async");
        \u0275\u0275pipe(26, "async");
        \u0275\u0275pipe(27, "async");
        \u0275\u0275pipe(28, "async");
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "async");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, SignagePlaylistMediaListComponent_div_32_Template, 3, 3, "div", 11);
        \u0275\u0275pipe(33, "async");
        \u0275\u0275elementStart(34, "div", 12);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementStart(37, "span", 13);
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 14);
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementStart(43, "span", 15);
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "async");
        \u0275\u0275pipe(46, "mediaDuration");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 16);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementStart(50, "span", 13);
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(53, SignagePlaylistMediaListComponent_Conditional_53_Template, 4, 7, "div", 17);
        \u0275\u0275pipe(54, "async");
        \u0275\u0275template(55, SignagePlaylistMediaListComponent_Conditional_55_Template, 6, 3, "div", 18);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_12_0;
        let tmp_14_0;
        let tmp_16_0;
        const menu_r7 = \u0275\u0275reference(8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" Playlist - ", (tmp_1_0 = \u0275\u0275pipeBind1(3, 21, ctx.selected_playlist)) == null ? null : tmp_1_0.name, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matMenuTriggerFor", menu_r7);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 23, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_EDIT"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 25, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("bg-success", (tmp_5_0 = \u0275\u0275pipeBind1(25, 27, ctx.selected_playlist)) == null ? null : tmp_5_0.enabled)("text-success-content", (tmp_6_0 = \u0275\u0275pipeBind1(26, 29, ctx.selected_playlist)) == null ? null : tmp_6_0.enabled)("bg-error", !((tmp_7_0 = \u0275\u0275pipeBind1(27, 31, ctx.selected_playlist)) == null ? null : tmp_7_0.enabled))("text-error-content", !((tmp_8_0 = \u0275\u0275pipeBind1(28, 33, ctx.selected_playlist)) == null ? null : tmp_8_0.enabled));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 37, ((tmp_9_0 = \u0275\u0275pipeBind1(30, 35, ctx.selected_playlist)) == null ? null : tmp_9_0.enabled) ? "COMMON.ENABLED" : "COMMON.DISABLED"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", (tmp_10_0 = \u0275\u0275pipeBind1(33, 39, ctx.selected_playlist)) == null ? null : tmp_10_0.random);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 41, "APP.CONCIERGE.SIGNAGE_ANIMATION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.animation_name((tmp_12_0 = \u0275\u0275pipeBind1(39, 43, ctx.selected_playlist)) == null ? null : tmp_12_0.default_animation));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 45, "APP.CONCIERGE.SIGNAGE_DURATION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 49, ((tmp_14_0 = \u0275\u0275pipeBind1(45, 47, ctx.selected_playlist)) == null ? null : tmp_14_0.default_duration) / 1e3));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 51, "APP.CONCIERGE.SIGNAGE_ORIENTATION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_16_0 = \u0275\u0275pipeBind1(52, 53, ctx.selected_playlist)) == null ? null : tmp_16_0.orientation);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(54, 55, ctx.media).length > 0 ? 53 : 55);
      }
    }, dependencies: [NgForOf, NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, AuthenticatedImageDirective, CdkDropList, CdkDrag, CdkDragHandle, CdkDragPlaceholder, AsyncPipe, TranslatePipe, MediaDurationPipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=signage-playlist-media-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePlaylistMediaListComponent, { className: "SignagePlaylistMediaListComponent", filePath: "apps/concierge/src/app/signage/signage-playlist-media-list.component.ts", lineNumber: 261 });
})();

// apps/concierge/src/app/signage/signage-media.component.ts
var _c06 = () => [];
var _c13 = () => ({ playlist: "" });
var _c23 = (a0) => ({ playlist: a0 });
var _c33 = () => ["media-list", "playlist-list"];
var _forTrack04 = ($index, $item) => $item.id;
function SignageMediaComponent_Conditional_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275listener("cdkDropListDropped", function SignageMediaComponent_Conditional_12_For_1_Template_a_cdkDropListDropped_0_listener($event) {
      const playlist_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selected_playlist === playlist_r2.id ? "" : ctx_r2.drop(playlist_r2, $event));
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const playlist_r2 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("!bg-secondary", ctx_r2.selected_playlist === playlist_r2.id)("text-secondary-content", ctx_r2.selected_playlist === playlist_r2.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c06))("queryParams", \u0275\u0275pureFunction1(10, _c23, playlist_r2.id))("id", "playlist-" + $index_r4)("cdkDropListConnectedTo", \u0275\u0275pureFunction0(12, _c33));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", playlist_r2.name, " ");
  }
}
function SignageMediaComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageMediaComponent_Conditional_12_For_1_Template, 3, 13, "a", 12, _forTrack04);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r2.playlists));
  }
}
function SignageMediaComponent_Conditional_14_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function SignageMediaComponent_Conditional_14_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addPlaylist());
    });
    \u0275\u0275elementStart(1, "div", 20)(2, "icon", 21);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD"));
  }
}
function SignageMediaComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon", 16);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, SignageMediaComponent_Conditional_14_button_6_Template, 7, 3, "button", 18);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, ctx_r2.search.getValue() ? "APP.CONCIERGE.SIGNAGE_PLAYLISTS_SEARCH_EMPTY" : "APP.CONCIERGE.SIGNAGE_PLAYLISTS_EMPTY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.search.getValue());
  }
}
function SignageMediaComponent_signage_media_list_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "signage-media-list", 23);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("playlist_count", (tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.playlists)) == null ? null : tmp_1_0.length);
  }
}
function SignageMediaComponent_signage_playlist_media_list_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "signage-playlist-media-list", 24);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("playlist", ctx_r2.selected_playlist)("playlist_count", (tmp_2_0 = \u0275\u0275pipeBind1(1, 2, ctx_r2.playlists)) == null ? null : tmp_2_0.length);
  }
}
function SignageMediaComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("dragleave", function SignageMediaComponent_div_19_Template_div_dragleave_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideOverlay($event));
    })("drop", function SignageMediaComponent_div_19_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previewFile($event));
    });
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "div", 27)(3, "icon", 16);
    \u0275\u0275text(4, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 28);
    \u0275\u0275listener("change", function SignageMediaComponent_div_19_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previewFile($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 1, "APP.CONCIERGE.SIGNAGE_MEDIA_DROP_UPLOAD"), " ");
  }
}
var SignageMediaComponent = class _SignageMediaComponent extends AsyncHandler {
  onEnter(e) {
    this.clearTimeout("hide_overlay");
    this.show_dropzone = e?.dataTransfer?.types.includes("Files");
  }
  hideOverlay(e) {
    if (!this.show_dropzone)
      return;
    if (!(e.target instanceof HTMLInputElement)) {
      e.preventDefault();
    }
    this.timeout("hide_overlay", () => this.show_dropzone = false);
  }
  constructor(_state, _router, _route) {
    super();
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this.search = new BehaviorSubject("");
    this.loading = this._state.loading;
    this.playlists = combineLatest([
      this.search,
      this._state.playlists
    ]).pipe(map(([search, list]) => list.filter((_) => _.name.toLowerCase().includes(search.toLowerCase()))));
    this.selected_playlist = "";
    this.show_dropzone = false;
    this.addPlaylist = () => __async(this, null, function* () {
      const result = yield this._state.editPlaylist();
      if (result) {
        this._router.navigate([
          "/signage/media",
          { query: { playlist: result.id } }
        ]);
      }
    });
    this.previewMedia = (item) => this._state.previewMedia(item);
    this.previewFile = (event) => this._state.previewFileFromInput(event, this.selected_playlist);
  }
  ngOnInit() {
    this.subscription("route.params", this._route.queryParamMap.subscribe((params) => {
      if (params.has("playlist")) {
        this.selected_playlist = params.get("playlist");
      }
    }));
  }
  drop(playlist, event) {
    return __async(this, null, function* () {
      const media = event.previousContainer.data[event.previousIndex];
      const media_list = yield ra(playlist.id).toPromise();
      const new_media_list = [...media_list.items, media.id];
      yield this._state.updatePlaylistMedia(playlist.id, new_media_list);
    });
  }
  static {
    this.\u0275fac = function SignageMediaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageMediaComponent)(\u0275\u0275directiveInject(SignageStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaComponent, selectors: [["signage-media"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 24, consts: [[1, "relative", "flex", "h-full", "w-full", "space-x-4", "overflow-visible"], ["sidebar", "", 1, "flex", "h-full", "w-64", "flex-col", "space-y-4", "overflow-auto", "py-4"], [1, "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["matRipple", "", 1, "flex", "min-h-12", "w-full", "items-center", "rounded-3xl", "px-6", "hover:bg-base-200", 3, "routerLink", "queryParams"], [1, "w-full"], [1, "relative", "h-full", "w-1/2", "flex-1", "overflow-hidden", "rounded-lg", "border", "border-base-300", "shadow", 3, "dragover", "dragenter", "drop"], [1, "h-full", "w-full", "overflow-auto"], [3, "playlist_count", 4, "ngIf"], [3, "playlist", "playlist_count", 4, "ngIf"], ["class", "absolute inset-0", 3, "dragleave", "drop", 4, "ngIf"], ["matRipple", "", "cdkDropList", "", 1, "flex", "h-12", "min-h-12", "w-full", "items-center", "rounded-3xl", "px-6", "hover:bg-base-200", 3, "!bg-secondary", "text-secondary-content", "routerLink", "queryParams", "id", "cdkDropListConnectedTo"], ["matRipple", "", "cdkDropList", "", 1, "flex", "h-12", "min-h-12", "w-full", "items-center", "rounded-3xl", "px-6", "hover:bg-base-200", 3, "cdkDropListDropped", "routerLink", "queryParams", "id", "cdkDropListConnectedTo"], [1, "flex-1"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "text-6xl"], [1, "text-center"], ["btn", "", "matRipple", "", "class", "inverse", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click"], [1, "flex", "w-full", "items-center", "justify-center"], [1, "text-2xl"], [1, "ml-2", "mr-4"], [3, "playlist_count"], [3, "playlist", "playlist_count"], [1, "absolute", "inset-0", 3, "dragleave", "drop"], [1, "absolute", "inset-0", "bg-base-content", "opacity-60"], [1, "absolute", "inset-4", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-2xl", "border-4", "border-dashed", "border-base-300", "text-base-100"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"]], template: function SignageMediaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-form-field", 3)(6, "input", 4);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("ngModelChange", function SignageMediaComponent_Template_input_ngModelChange_6_listener($event) {
          return ctx.search.next($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "a", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "hr", 6);
        \u0275\u0275template(12, SignageMediaComponent_Conditional_12_Template, 3, 2);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275template(14, SignageMediaComponent_Conditional_14_Template, 7, 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7);
        \u0275\u0275listener("dragover", function SignageMediaComponent_Template_div_dragover_15_listener($event) {
          return ctx.onEnter($event);
        })("dragenter", function SignageMediaComponent_Template_div_dragenter_15_listener($event) {
          return ctx.onEnter($event);
        })("drop", function SignageMediaComponent_Template_div_drop_15_listener($event) {
          return ctx.hideOverlay($event);
        }, false, \u0275\u0275resolveWindow);
        \u0275\u0275elementStart(16, "div", 8);
        \u0275\u0275template(17, SignageMediaComponent_signage_media_list_17_Template, 2, 3, "signage-media-list", 9)(18, SignageMediaComponent_signage_playlist_media_list_18_Template, 2, 4, "signage-playlist-media-list", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, SignageMediaComponent_div_19_Template, 9, 3, "div", 11);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_8_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 14, "APP.CONCIERGE.SIGNAGE_PLAYLISTS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 16, "COMMON.SEARCH"))("ngModel", ctx.search.getValue());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("!bg-secondary", !ctx.selected_playlist)("text-secondary-content", !ctx.selected_playlist);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(22, _c06))("queryParams", \u0275\u0275pureFunction0(23, _c13));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 18, "APP.CONCIERGE.SIGNAGE_MEDIA_ALL"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(((tmp_8_0 = \u0275\u0275pipeBind1(13, 20, ctx.playlists)) == null ? null : tmp_8_0.length) > 0 ? 12 : 14);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.selected_playlist);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selected_playlist);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.show_dropzone);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatRipple, IconComponent, RouterLink, CdkDropList, SignageMediaListComponent, SignagePlaylistMediaListComponent, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  min-height: 100%;\n}\n/*# sourceMappingURL=signage-media.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaComponent, { className: "SignageMediaComponent", filePath: "apps/concierge/src/app/signage/signage-media.component.ts", lineNumber: 160 });
})();

// apps/concierge/src/app/signage/signage-topbar.component.ts
var SignageTopbarComponent = class _SignageTopbarComponent extends AsyncHandler {
  // public readonly filters = this._state.filters;
  // /** Set filtered date */
  // public readonly setDate = (date) => this._state.setFilters({ date });
  // /** Set filtered date */
  // public readonly setFilters = (filters) => this._state.setFilters(filters);
  // /** Set filter string */
  // public readonly setSearch = (str) => this._state.setSearchString(str);
  // /** Update active zones for desks */
  // public readonly updateZones = (zones) => {
  //     this._router.navigate([], {
  //         relativeTo: this._route,
  //         queryParams: { zone_ids: zones.join(',') },
  //     });
  //     this._state.setFilters({ zones });
  // };
  constructor(_state, _org, _route, _router) {
    super();
    this._state = _state;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this.zones = [];
    this.levels = this._org.active_levels;
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
      }));
    });
  }
  static {
    this.\u0275fac = function SignageTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageTopbarComponent)(\u0275\u0275directiveInject(SignageStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageTopbarComponent, selectors: [["signage-topbar"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "flex", "h-20", "items-center", "space-x-2", "border-b", "border-base-200", "bg-base-100", "px-4"]], template: function SignageTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 0);
      }
    }, styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=signage-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageTopbarComponent, { className: "SignageTopbarComponent", filePath: "apps/concierge/src/app/signage/signage-topbar.component.ts", lineNumber: 53 });
})();

// apps/concierge/src/app/signage/signage-zones.component.ts
var _c07 = () => [];
var _c14 = (a0) => ({ zone: a0 });
var _c24 = (a0, a1) => ({ zone: a0, trigger: a1 });
var _forTrack05 = ($index, $item) => $item.id;
function SignageZonesComponent_Conditional_8_For_2_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275element(2, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const trigger_r1 = ctx.$implicit;
    const zone_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("!bg-secondary", ctx_r2.selected_trigger.getValue() === (trigger_r1 == null ? null : trigger_r1.id))("text-secondary-content", ctx_r2.selected_trigger.getValue() === (trigger_r1 == null ? null : trigger_r1.id));
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c07))("queryParams", \u0275\u0275pureFunction2(8, _c24, zone_r2.id, trigger_r1 == null ? null : trigger_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (trigger_r1 == null ? null : trigger_r1.display_name) || (trigger_r1 == null ? null : trigger_r1.name) || "Trigger", " ");
  }
}
function SignageZonesComponent_Conditional_8_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageZonesComponent_Conditional_8_For_2_Conditional_2_For_1_Template, 5, 11, "div", 12, _forTrack05);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r2.triggers));
  }
}
function SignageZonesComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, SignageZonesComponent_Conditional_8_For_2_Conditional_2_Template, 3, 2);
    \u0275\u0275pipe(3, "async");
  }
  if (rf & 2) {
    let tmp_16_0;
    const zone_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("!bg-secondary", ctx_r2.selected.getValue() === zone_r2.id)("text-secondary-content", ctx_r2.selected.getValue() === zone_r2.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c07))("queryParams", \u0275\u0275pureFunction1(11, _c14, zone_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", zone_r2.display_name || zone_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_16_0 = \u0275\u0275pipeBind1(3, 8, ctx_r2.active_zone)) == null ? null : tmp_16_0.id) === zone_r2.id && !ctx_r2.switching ? 2 : -1);
  }
}
function SignageZonesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, SignageZonesComponent_Conditional_8_For_2_Template, 4, 13, null, null, _forTrack05);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r2.zones));
  }
}
function SignageZonesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "icon", 16);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, ctx_r2.search.getValue() ? "APP.CONCIERGE.SIGNAGE_ZONES_SEARCH_EMPTY" : "APP.CONCIERGE.SIGNAGE_ZONES_EMPTY"), " ");
  }
}
function SignageZonesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "signage-item-playlists", 18);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("add", function SignageZonesComponent_Conditional_12_Template_signage_item_playlists_add_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adding = true);
    })("remove", function SignageZonesComponent_Conditional_12_Template_signage_item_playlists_remove_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removePlaylist($event));
    })("ondrop", function SignageZonesComponent_Conditional_12_Template_signage_item_playlists_ondrop_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.drop($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item", \u0275\u0275pipeBind1(1, 2, ctx_r2.active_trigger) || \u0275\u0275pipeBind1(2, 4, ctx_r2.active_zone))("name", \u0275\u0275pipeBind1(3, 6, ctx_r2.active_trigger) ? "trigger" : "zone");
  }
}
function SignageZonesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 16);
    \u0275\u0275text(2, "desktop_windows");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "APP.CONCIERGE.SIGNAGE_ZONES_SELECT"), " ");
  }
}
function SignageZonesComponent_search_overlay_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "search-overlay", 19);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("selected", function SignageZonesComponent_search_overlay_15_Template_search_overlay_selected_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addPlaylist($event));
    })("close", function SignageZonesComponent_search_overlay_15_Template_search_overlay_close_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adding = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item_list", \u0275\u0275pipeBind1(1, 1, ctx_r2.playlists));
  }
}
var SignageZonesComponent = class _SignageZonesComponent extends AsyncHandler {
  constructor(_state, _route) {
    super();
    this._state = _state;
    this._route = _route;
    this.adding = false;
    this.switching = false;
    this.search = new BehaviorSubject("");
    this.loading = this._state.loading;
    this.zones = combineLatest([
      this.search,
      this._state.zones
    ]).pipe(map(([search, list]) => list.filter((_) => _.name.toLowerCase().includes(search.toLowerCase()))));
    this.selected = new BehaviorSubject("");
    this.selected_trigger = new BehaviorSubject("");
    this.active_zone = combineLatest([
      this.zones,
      this.selected
    ]).pipe(map(([zones, id]) => zones.find((item) => item.id === id)));
    this.triggers = this.selected.pipe(switchMap((id) => Wc(id)), map((_) => _.data), tap((_) => setTimeout(() => this.switching = false, 100)), shareReplay(1));
    this.active_trigger = combineLatest([
      this.triggers,
      this.selected_trigger
    ]).pipe(map(([list, id]) => list.find((item) => item.id === id)));
    this.playlists = combineLatest([
      this.active_zone,
      this.active_trigger,
      this._state.playlists,
      this._state.has_changed
    ]).pipe(map(([zone, trigger, playlists]) => playlists.filter((_) => !(trigger || zone)?.playlists.find((id) => _.id === id))));
  }
  ngOnInit() {
    this.subscription("route.params", this._route.queryParamMap.subscribe((params) => {
      this.switching = params.get("zone") !== this.selected.getValue();
      this.selected.next(params.get("zone") || "");
      this.selected_trigger.next(params.get("trigger") || "");
    }));
  }
  addPlaylist(playlist) {
    return __async(this, null, function* () {
      const zone = yield nextValueFrom(this.active_zone);
      const trigger = yield nextValueFrom(this.active_trigger);
      const item = trigger || zone;
      const playlists = [...item.playlists, playlist.id];
      const method = trigger ? Oc : jc;
      yield method(item.id, { playlists, version: zone.version }, "patch").toPromise();
      notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_ADDED" : "APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_ADDED"));
      this._state.changed();
      this.adding = false;
    });
  }
  removePlaylist(playlist) {
    return __async(this, null, function* () {
      const zone = yield nextValueFrom(this.active_zone);
      const trigger = yield nextValueFrom(this.active_trigger);
      const item = trigger || zone;
      const playlists = item.filter((id) => playlist.id !== id);
      const method = trigger ? Oc : jc;
      yield method(item.id, { playlists, version: zone.version }, "patch").toPromise();
      notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REMOVE" : "APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_REMOVE"));
      this._state.changed();
      this.adding = false;
    });
  }
  drop(event) {
    return __async(this, null, function* () {
      const zone = yield nextValueFrom(this.active_zone);
      const trigger = yield nextValueFrom(this.active_trigger);
      const item = trigger || zone;
      const old_playlist = item.playlists;
      const playlists = [...old_playlist];
      moveItemInArray(playlists, event.previousIndex, event.currentIndex);
      item.playlists = playlists;
      this._state.changed();
      const method = trigger ? Oc : jc;
      yield method(item.id, { playlists, version: zone.version }, "patch").toPromise().catch((e) => {
        item.playlists = old_playlist;
        this._state.changed();
        throw e;
      });
      notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REORDER" : "APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_REORDER"));
      this._state.changed();
    });
  }
  static {
    this.\u0275fac = function SignageZonesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageZonesComponent)(\u0275\u0275directiveInject(SignageStateService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageZonesComponent, selectors: [["signage-zones"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 14, consts: [[1, "relative", "flex", "h-full", "w-full", "space-x-4", "overflow-visible"], ["sidebar", "", 1, "flex", "h-full", "w-64", "flex-col", "space-y-4", "py-4"], [1, "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "h-1/2", "w-full", "flex-1", "space-y-2", "overflow-auto"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col", "space-y-4", "overflow-auto", "rounded-lg", "border", "border-base-300", "p-4", "shadow"], [1, "flex", "flex-1", "flex-col", 3, "item", "name"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], [3, "item_list", "selected", "close", 4, "ngIf"], ["matRipple", "", 1, "z-10", "flex", "min-h-12", "w-full", "items-center", "truncate", "rounded-3xl", "px-6", "hover:bg-base-200", 3, "routerLink", "queryParams"], [1, "relative", "z-0", "flex", "items-center", "space-x-2"], [1, "w-6"], [1, "absolute", "left-6", "top-1/2", "h-16", "w-4", "-translate-y-full", "border-b-2", "border-l-2", "border-base-300"], ["matRipple", "", 1, "flex", "min-h-12", "w-full", "items-center", "truncate", "rounded-3xl", "px-6", "hover:bg-base-200", 3, "routerLink", "queryParams"], [1, "text-6xl"], [1, "text-center"], [1, "flex", "flex-1", "flex-col", 3, "add", "remove", "ondrop", "item", "name"], [3, "selected", "close", "item_list"]], template: function SignageZonesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-form-field", 3)(6, "input", 4);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("ngModelChange", function SignageZonesComponent_Template_input_ngModelChange_6_listener($event) {
          return ctx.search.next($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, SignageZonesComponent_Conditional_8_Template, 4, 2, "div", 5);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275template(10, SignageZonesComponent_Conditional_10_Template, 6, 3, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7);
        \u0275\u0275template(12, SignageZonesComponent_Conditional_12_Template, 4, 8, "signage-item-playlists", 8);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275template(14, SignageZonesComponent_Conditional_14_Template, 6, 3, "div", 9)(15, SignageZonesComponent_search_overlay_15_Template, 2, 3, "search-overlay", 10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.SIGNAGE_ZONES"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "COMMON.SEARCH"))("ngModel", ctx.search.getValue());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_3_0 = \u0275\u0275pipeBind1(9, 10, ctx.zones)) == null ? null : tmp_3_0.length) > 0 ? 8 : 10);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(13, 12, ctx.active_zone) ? 12 : 14);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.adding);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatRipple, IconComponent, RouterLink, SearchOverlayComponent, SignageItemPlaylistsComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageZonesComponent, { className: "SignageZonesComponent", filePath: "apps/concierge/src/app/signage/signage-zones.component.ts", lineNumber: 154 });
})();

// apps/concierge/src/app/signage/signage.component.ts
var _c08 = ["app-new-staff", ""];
function SignageComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function SignageComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newItem(ctx_r1.active_link));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.active_link === "Displays" ? "APP.CONCIERGE.SIGNAGE_DISPLAYS_ADD" : "APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD"), " ");
  }
}
function SignageComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275pipe(1, "lowercase");
    \u0275\u0275listener("click", function SignageComponent_For_12_Template_a_click_0_listener() {
      const link_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active_link = link_r4.id);
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", "/signage/" + \u0275\u0275pipeBind1(1, 3, link_r4.id))("active", ctx_r1.active_link == link_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", link_r4.name, " ");
  }
}
var SignageComponent = class _SignageComponent extends AsyncHandler {
  newItem(name) {
    return __async(this, null, function* () {
      let result = null;
      switch (name) {
        case "Media":
        case "Playlists":
          result = yield this._state.editPlaylist();
          if (result) {
            this._router.navigate(["/signage/media"], {
              queryParams: { playlist: result.id }
            });
          }
          break;
        case "Displays":
          result = yield this._state.editDisplay();
          if (!result)
            return;
          this._router.navigate(["/signage/displays"], {
            queryParams: { display: result.id }
          });
          break;
      }
    });
  }
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    this.loading = this._state.loading;
    this.links = [];
    this.active_link = this.links[0];
    this.previewFile = (event) => this._state.previewFileFromInput(event);
  }
  ngOnInit() {
    this.links = [
      { id: "Media", name: i18n("APP.CONCIERGE.SIGNAGE_MEDIA") },
      { id: "Displays", name: i18n("APP.CONCIERGE.SIGNAGE_DISPLAYS") },
      { id: "Zones", name: i18n("APP.CONCIERGE.SIGNAGE_ZONES") }
    ];
    this.active_link = this.links[0].id;
    this.subscription("route.query", this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.active_link = this.links.find((_) => this._router.url.includes(_.toLowerCase()));
      }
    }));
    this.active_link = this.links.find((_) => this._router.url.includes(_.toLowerCase()));
  }
  static {
    this.\u0275fac = function SignageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageComponent)(\u0275\u0275directiveInject(SignageStateService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageComponent, selectors: [["", "app-new-staff", ""]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c08, decls: 16, vars: 5, consts: [["tabPanel", ""], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "h-28", "items-center", "justify-between", "p-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", "class", "w-40", 3, "click", 4, "ngIf"], [1, "px-8"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "h-1/2", "flex-1", "overflow-auto", "px-8", "py-4"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], ["mat-tab-link", "", 3, "click", "routerLink", "active"]], template: function SignageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 2)(4, "div", 3)(5, "h2", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, SignageComponent_button_8_Template, 3, 3, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6)(10, "nav", 7);
        \u0275\u0275repeaterCreate(11, SignageComponent_For_12_Template, 3, 5, "a", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-tab-nav-panel", 9, 0);
        \u0275\u0275element(15, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const tabPanel_r5 = \u0275\u0275reference(14);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "APP.CONCIERGE.SIGNAGE_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.active_link === "Media" || ctx.active_link === "Displays");
        \u0275\u0275advance(2);
        \u0275\u0275property("tabPanel", tabPanel_r5);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.links);
      }
    }, dependencies: [NgIf, ApplicationTopbarComponent, ApplicationSidebarComponent, MatRipple, RouterOutlet, RouterLink, MatTabNav, MatTabNavPanel, MatTabLink, LowerCasePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=signage.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageComponent, { className: "SignageComponent", filePath: "apps/concierge/src/app/signage/signage.component.ts", lineNumber: 74 });
})();

// apps/concierge/src/app/signage/signage.module.ts
var ROUTES = [
  {
    path: "",
    component: SignageComponent,
    children: [
      { path: "", redirectTo: "media", pathMatch: "full" },
      { path: "media", component: SignageMediaComponent },
      { path: "displays", component: SignageDisplaysComponent },
      { path: "zones", component: SignageZonesComponent },
      { path: "*", redirectTo: "media", pathMatch: "full" }
    ]
  }
];
var COMPONENTS = [
  SignageComponent,
  SignageTopbarComponent,
  SignageMediaComponent,
  SignageMediaModalComponent,
  SignageMediaPreviewModalComponent,
  SignagePlaylistModalComponent,
  SignageMediaListComponent,
  SignagePlaylistMediaListComponent,
  SignageDisplaysComponent,
  SignageDisplayModalComponent,
  SignageZonesComponent,
  SearchOverlayComponent,
  SignageItemPlaylistsComponent
];
var SignageModule = class _SignageModule {
  static {
    this.\u0275fac = function SignageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SignageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      UIModule,
      ComponentsModule,
      RouterModule.forChild(ROUTES),
      MatTabsModule,
      DragDropModule
    ] });
  }
};
export {
  COMPONENTS,
  SignageModule
};
//# sourceMappingURL=signage.module-JAQHWUHA.js.map
