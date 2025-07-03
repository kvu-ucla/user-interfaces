import {
  CdkDrag,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-VHLJX7E7.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-IWSN22SL.js";
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
  Component,
  ComponentsModule,
  DateFieldComponent,
  DefaultValueAccessor,
  EventEmitter,
  Fc,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  Gc,
  IconComponent,
  Injectable,
  Input,
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
  NgModel,
  NgModule,
  NgTemplateOutlet,
  Oc,
  OrganisationService,
  Output,
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
  inject,
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
  setClassMetadata,
  shareReplay,
  startOfDay,
  startOfMinute,
  startWith,
  switchMap,
  ta,
  tap,
  unique,
  uploadFile,
  viewChild,
  wr,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
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
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-7ARVCWLO.js";

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
    \u0275\u0275conditionalCreate(1, SearchOverlayComponent_For_9_Conditional_1_Template, 1, 4, "ng-container")(2, SearchOverlayComponent_For_9_Conditional_2_Template, 2, 1, "div", 10);
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
var _SearchOverlayComponent = class _SearchOverlayComponent {
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
};
_SearchOverlayComponent.\u0275fac = function SearchOverlayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchOverlayComponent)();
};
_SearchOverlayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchOverlayComponent, selectors: [["search-overlay"]], inputs: { item_list: "item_list", result_template: "result_template" }, outputs: { selected: "selected", close: "close" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 14, vars: 5, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "items-center", "p-8", 3, "click", "keydown.esc"], [1, "absolute", "inset-0", "z-0", "bg-base-content", "opacity-70"], [1, "relative", "z-10", "mx-auto", "mb-4", "w-[32rem]", "max-w-[calc(100%-2rem)]", 3, "click"], [1, "w-full", "rounded-[4rem]", "border", "border-base-300", "bg-base-100", "py-4", "pl-14", "pr-6", "text-xl", "text-base-content", "shadow", 3, "ngModelChange", "ngModel", "placeholder"], [1, "pointer-events-none", "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-3xl"], [1, "z-10", "mx-auto", "max-h-[65%]", "w-[32rem]", "max-w-[calc(100%-2rem)]", "overflow-auto", "rounded", 3, "click"], ["matRipple", "", 1, "w-full", "text-left"], ["matRipple", "", 1, "w-full", "p-4", "text-base-100"], ["icon", "", "matRipple", "", 1, "absolute", "right-8", "top-10", "h-12", "w-12", "text-xl", "text-base-100"], ["matRipple", "", 1, "w-full", "text-left", 3, "click"], [1, "w-full", "border", "border-base-300", "bg-base-100", "p-4", "hover:bg-base-200"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["matRipple", "", 1, "w-full", "p-4", "text-base-100", 3, "click"], [1, "opacity-30"]], template: function SearchOverlayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function SearchOverlayComponent_Template_div_click_0_listener() {
      return ctx.close.next();
    })("keydown.esc", function SearchOverlayComponent_Template_div_keydown_esc_0_listener() {
      return ctx.close.next();
    }, \u0275\u0275resolveWindow);
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
    \u0275\u0275conditionalCreate(10, SearchOverlayComponent_Conditional_10_Template, 4, 3, "button", 7);
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
var SearchOverlayComponent = _SearchOverlayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchOverlayComponent, [{
    type: Component,
    args: [{ selector: "search-overlay", template: `
        <div
            class="absolute inset-0 flex flex-col items-center p-8"
            (click)="close.next()"
            (window:keydown.esc)="close.next()"
        >
            <div class="absolute inset-0 z-0 bg-base-content opacity-70"></div>
            <div
                class="relative z-10 mx-auto mb-4 w-[32rem] max-w-[calc(100%-2rem)]"
                (click)="$event.stopPropagation()"
            >
                <input
                    class="w-full rounded-[4rem] border border-base-300 bg-base-100 py-4 pl-14 pr-6 text-xl text-base-content shadow"
                    [ngModel]="search.getValue()"
                    (ngModelChange)="search.next($event)"
                    [placeholder]="'COMMON.SEARCH' | translate"
                />
                <icon
                    class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-3xl"
                >
                    search
                </icon>
            </div>
            <div
                class="z-10 mx-auto max-h-[65%] w-[32rem] max-w-[calc(100%-2rem)] overflow-auto rounded"
                (click)="$event.stopPropagation()"
            >
                @for (item of item_list; track item) {
                    <button
                        matRipple
                        class="w-full text-left"
                        (click)="selected.next(item)"
                    >
                        @if (result_template) {
                            <ng-container
                                *ngTemplateOutlet="
                                    result_template;
                                    context: { item: item }
                                "
                            ></ng-container>
                        } @else {
                            <div
                                class="w-full border border-base-300 bg-base-100 p-4 hover:bg-base-200"
                            >
                                {{ item.name || item }}
                            </div>
                        }
                    </button>
                }
                @if (!item_list?.length) {
                    <button
                        matRipple
                        class="w-full p-4 text-base-100"
                        (click)="close.next()"
                    >
                        <div class="opacity-30">
                            {{
                                'APP.CONCIERGE.SIGNAGE_SEARCH_EMPTY' | translate
                            }}
                        </div>
                    </button>
                }
            </div>
            <button
                icon
                matRipple
                class="absolute right-8 top-10 h-12 w-12 text-xl text-base-100"
            >
                <icon>close</icon>
            </button>
        </div>
    `, standalone: false }]
  }], null, { item_list: [{
    type: Input
  }], result_template: [{
    type: Input
  }], selected: [{
    type: Output
  }], close: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchOverlayComponent, { className: "SearchOverlayComponent", filePath: "apps/concierge/src/app/signage/search-overlay.component.ts", lineNumber: 88 });
})();

// apps/concierge/src/app/signage/signage-display-modal.component.ts
var _SignageDisplayModalComponent = class _SignageDisplayModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
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
};
_SignageDisplayModalComponent.\u0275fac = function SignageDisplayModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageDisplayModalComponent)();
};
_SignageDisplayModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageDisplayModalComponent, selectors: [["signage-display-modal"]], standalone: false, decls: 42, vars: 40, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], [1, "flex", "flex-col"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "name", "formControlName", "name", "required", "", 3, "placeholder"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 1, "min-h-32", 3, "placeholder"], ["for", "orientation"], ["name", "orientation", "formControlName", "orientation", 3, "placeholder"], ["value", "unspecified"], ["value", "landscape"], ["value", "portrait"], ["value", "square"]], template: function SignageDisplayModalComponent_Template(rf, ctx) {
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
var SignageDisplayModalComponent = _SignageDisplayModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageDisplayModalComponent, [{
    type: Component,
    args: [{ selector: "signage-display-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (display.id
                    ? 'APP.CONCIERGE.SIGNAGE_DISPLAYS_EDIT'
                    : 'APP.CONCIERGE.SIGNAGE_DISPLAYS_NEW'
                ) | translate
            "
            (confirm)="save()"
            [loading]="
                loading
                    ? ('APP.CONCIERGE.SIGNAGE_DISPLAYS_SAVING' | translate)
                    : ''
            "
        >
            <form [formGroup]="form">
                <div class="flex flex-col">
                    <label for="name"
                        >{{ 'FORM.NAME' | translate
                        }}<span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="name"
                            [placeholder]="'FORM.NAME' | translate"
                            formControlName="name"
                            required
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            name="description"
                            [placeholder]="'COMMON.DESCRIPTION' | translate"
                            formControlName="description"
                            class="min-h-32"
                        ></textarea>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="orientation">{{
                        'APP.CONCIERGE.SIGNAGE_ORIENTATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            name="orientation"
                            formControlName="orientation"
                            [placeholder]="
                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                    | translate
                            "
                        >
                            <mat-option value="unspecified">
                                {{
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                        | translate
                                }}
                            </mat-option>
                            <mat-option value="landscape">{{
                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE'
                                    | translate
                            }}</mat-option>
                            <mat-option value="portrait">{{
                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT'
                                    | translate
                            }}</mat-option>
                            <mat-option value="square">{{
                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE'
                                    | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, standalone: false }]
  }], null, null);
})();
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
var _SignageMediaModalComponent = class _SignageMediaModalComponent {
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
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
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
        yield Jc(this.item.id, new_media).toPromise().catch(onError);
      } else {
        yield this._data.onAdd(this.file, new_media).catch(onError);
      }
      this._dialog_ref.disableClose = false;
      this._dialog_ref.close();
      notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_MEDIA_SAVE_SUCCESS"));
    });
  }
};
_SignageMediaModalComponent.\u0275fac = function SignageMediaModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageMediaModalComponent)();
};
_SignageMediaModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaModalComponent, selectors: [["signage-media-modal"]], standalone: false, decls: 71, vars: 69, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], [1, "flex", "flex-col"], ["matRipple", "", 1, "relative", "mx-auto", "mb-4", "h-48", "w-full", "overflow-hidden", "rounded-xl", "bg-base-300", 3, "click"], ["auth", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], [1, "absolute", "left-2", "top-2", "rounded", "bg-base-400", "px-2", "py-1", "text-xs", "capitalize"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], [1, "flex", "items-center", "space-x-4"], ["for", "play-time", 1, "m-0", "w-auto", "min-w-0"], [1, "font-mono", "text-xs"], [1, "opacity-30"], ["step", "100", 3, "min", "max"], ["name", "play-time", "matSliderThumb", "", "formControlName", "play_time"], ["for", "animation"], ["name", "animation", "formControlName", "animation", "placeholder", "Playlist Default"], [3, "value"], ["for", "description"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "description", "formControlName", "description", 1, "min-h-32", 3, "placeholder"], [1, "flex", "space-x-4"], [1, "flex-1"], ["for", "valid-from"], ["name", "valid-from", "formControlName", "valid_from"], ["for", "valid-until"], ["name", "valid-until", "formControlName", "valid_until", 3, "from"], ["for", "start-time", 1, "m-0", "w-auto", "min-w-0"], ["min", "0", "step", "100", 3, "max"], ["name", "start-time", "matSliderThumb", "", "formControlName", "start_time"]], template: function SignageMediaModalComponent_Template(rf, ctx) {
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
    \u0275\u0275conditionalCreate(18, SignageMediaModalComponent_Conditional_18_Template, 9, 8);
    \u0275\u0275elementStart(19, "div", 9)(20, "label", 10);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 11);
    \u0275\u0275conditionalCreate(24, SignageMediaModalComponent_Conditional_24_Template, 2, 4)(25, SignageMediaModalComponent_Conditional_25_Template, 4, 6, "span", 12);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 43, "APP.CONCIERGE.SIGNAGE_MEDIA_PLAY_TIME"));
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
var SignageMediaModalComponent = _SignageMediaModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageMediaModalComponent, [{
    type: Component,
    args: [{ selector: "signage-media-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (item.id
                    ? 'APP.CONCIERGE.SIGNAGE_MEDIA_EDIT'
                    : 'APP.CONCIERGE.SIGNAGE_MEDIA_NEW'
                ) | translate
            "
            (confirm)="saveMedia()"
            [loading]="
                loading
                    ? ('APP.CONCIERGE.SIGNAGE_MEDIA_SAVING' | translate)
                    : ''
            "
        >
            <form [formGroup]="form">
                <div class="flex flex-col">
                    <button
                        matRipple
                        class="relative mx-auto mb-4 h-48 w-full overflow-hidden rounded-xl bg-base-300"
                        (click)="preview()"
                    >
                        <img
                            class="h-full w-full object-contain object-center"
                            auth
                            [source]="thumbnail || url"
                        />
                        <div
                            class="absolute left-2 top-2 rounded bg-base-400 px-2 py-1 text-xs capitalize"
                        >
                            {{ media_type }}
                        </div>
                    </button>
                    <label for="name">{{ 'FORM.NAME' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            formControlName="name"
                            [placeholder]="'FORM.NAME' | translate"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    @if (media_type === 'video') {
                        <div class="flex items-center space-x-4">
                            <label
                                for="start-time"
                                class="m-0 w-auto min-w-0"
                                >{{ 'FORM.TIME_START' | translate }}</label
                            >
                            <div class="font-mono text-xs">
                                {{
                                    form.value.start_time / 1000
                                        | mediaDuration: true
                                }}
                            </div>
                        </div>
                        <mat-slider
                            min="0"
                            [max]="(item.video_length || 300000) - 1000"
                            step="100"
                        >
                            <input
                                name="start-time"
                                matSliderThumb
                                formControlName="start_time"
                            />
                        </mat-slider>
                    }
                    <div class="flex items-center space-x-4">
                        <label for="play-time" class="m-0 w-auto min-w-0">
                            {{
                                'APP.CONCIERGE.SIGNAGE_MEDIA_PLAY_TIME'
                                    | translate
                            }}</label
                        >
                        <div class="font-mono text-xs">
                            @if (form.value.play_time) {
                                {{
                                    form.value.play_time / 1000
                                        | mediaDuration: true
                                }}
                            } @else {
                                <span class="opacity-30">
                                    {{ 'COMMON.DEFAULT' | translate }} ({{
                                        item.video_length
                                            ? (item.video_length / 1000
                                              | mediaDuration)
                                            : ''
                                    }})
                                </span>
                            }
                        </div>
                    </div>
                    <mat-slider
                        [min]="form.value.start_time"
                        [max]="item.video_length || 300000"
                        step="100"
                    >
                        <input
                            name="play-time"
                            matSliderThumb
                            formControlName="play_time"
                        />
                    </mat-slider>
                    <label for="animation">{{
                        'APP.CONCIERGE.SIGNAGE_ANIMATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="animation"
                            formControlName="animation"
                            placeholder="Playlist Default"
                        >
                            <mat-option [value]="0">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="1">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_CUT'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="2">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_CROSS_FADE'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="3">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_TOP'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="4">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_LEFT'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="5">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_RIGHT'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="6">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_BOTTOM'
                                    | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                    <label for="description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            name="description"
                            [placeholder]="'COMMON.DESCRIPTION' | translate"
                            formControlName="description"
                            class="min-h-32"
                        ></textarea>
                    </mat-form-field>
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <label for="valid-from">{{
                                'APP.CONCIERGE.VALID_FROM' | translate
                            }}</label>
                            <a-date-field
                                name="valid-from"
                                formControlName="valid_from"
                            ></a-date-field>
                        </div>
                        <div class="flex-1">
                            <label for="valid-until">{{
                                'APP.CONCIERGE.VALID_UNTIL' | translate
                            }}</label>
                            <a-date-field
                                name="valid-until"
                                [from]="form.value.valid_from"
                                formControlName="valid_until"
                            ></a-date-field>
                        </div>
                    </div>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, standalone: false }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaModalComponent, { className: "SignageMediaModalComponent", filePath: "apps/concierge/src/app/signage/signage-media-modal.component.ts", lineNumber: 200 });
})();

// apps/concierge/src/app/signage/signage-media-preview-modal.component.ts
var _c02 = (a0) => ({ name: a0 });
function SignageMediaPreviewModalComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.resource.toString());
  }
}
function SignageMediaPreviewModalComponent_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.resource.toString());
  }
}
function SignageMediaPreviewModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 6);
    \u0275\u0275conditionalCreate(2, SignageMediaPreviewModalComponent_Conditional_7_Conditional_2_Template, 1, 1, "img", 7);
    \u0275\u0275conditionalCreate(3, SignageMediaPreviewModalComponent_Conditional_7_Conditional_3_Template, 1, 1, "video", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.type === "image" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type === "video" ? 3 : -1);
  }
}
function SignageMediaPreviewModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275element(1, "mat-spinner", 9);
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
function SignageMediaPreviewModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 10);
    \u0275\u0275listener("click", function SignageMediaPreviewModalComponent_Conditional_9_Template_button_click_1_listener() {
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
var _SignageMediaPreviewModalComponent = class _SignageMediaPreviewModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.save = new EventEmitter();
    this.loading = "";
    this.resource = this._data.url;
    this.type = this._data.type;
    this.name = this._data.name;
    this.file = this._data.file;
    this.can_save = this._data.save !== false;
  }
};
_SignageMediaPreviewModalComponent.\u0275fac = function SignageMediaPreviewModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageMediaPreviewModalComponent)();
};
_SignageMediaPreviewModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaPreviewModalComponent, selectors: [["signage-media-preview-modal"]], outputs: { save: "save" }, standalone: false, decls: 10, vars: 8, consts: [[1, "flex", "items-center", "justify-between", "border-b", "border-base-300", "p-2"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "bg-base-200"], [1, "flex", "h-[20rem]", "max-h-[65vh]", "w-[28rem]", "max-w-[80vw]", "flex-col", "items-center", "justify-center", "p-8"], [1, "flex", "items-center", "justify-end", "space-x-2", "border-t", "border-base-300", "p-2"], [1, "flex", "h-[65vh]", "max-h-[65vh]", "w-[80vw]", "max-w-[80vw]", "items-center", "justify-center"], ["auth", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], ["auth", "", "autoplay", "", "controls", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], [3, "diameter"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function SignageMediaPreviewModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h1", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 2)(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(7, SignageMediaPreviewModalComponent_Conditional_7_Template, 4, 2, "main", 3)(8, SignageMediaPreviewModalComponent_Conditional_8_Template, 4, 2, "main", 4);
    \u0275\u0275conditionalCreate(9, SignageMediaPreviewModalComponent_Conditional_9_Template, 4, 3, "footer", 5);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW_HEADER", \u0275\u0275pureFunction1(6, _c02, ctx.name)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx.loading ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.can_save && !ctx.loading ? 9 : -1);
  }
}, dependencies: [MatProgressSpinner, MatDialogClose, MatRipple, IconComponent, AuthenticatedImageDirective, TranslatePipe], encapsulation: 2 });
var SignageMediaPreviewModalComponent = _SignageMediaPreviewModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageMediaPreviewModalComponent, [{
    type: Component,
    args: [{ selector: "signage-media-preview-modal", template: `
        <header
            class="flex items-center justify-between border-b border-base-300 p-2"
        >
            <h1 class="px-2">
                {{
                    'APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW_HEADER'
                        | translate: { name: name }
                }}
            </h1>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        @if (!loading) {
            <main class="bg-base-200">
                <div
                    class="flex h-[65vh] max-h-[65vh] w-[80vw] max-w-[80vw] items-center justify-center"
                >
                    @if (type === 'image') {
                        <img
                            class="h-full w-full object-contain object-center"
                            auth
                            [source]="resource.toString()"
                        />
                    }
                    @if (type === 'video') {
                        <video
                            class="h-full w-full object-contain object-center"
                            auth
                            [source]="resource.toString()"
                            autoplay
                            controls
                        ></video>
                    }
                </div>
            </main>
        } @else {
            <main
                class="flex h-[20rem] max-h-[65vh] w-[28rem] max-w-[80vw] flex-col items-center justify-center p-8"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        }
        @if (can_save && !loading) {
            <footer
                class="flex items-center justify-end space-x-2 border-t border-base-300 p-2"
            >
                <button btn matRipple class="w-32" (click)="save.emit()">
                    {{ 'APP.CONCIERGE.SIGNAGE_MEDIA_SAVE' | translate }}
                </button>
            </footer>
        }
    `, standalone: false }]
  }], null, { save: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaPreviewModalComponent, { className: "SignageMediaPreviewModalComponent", filePath: "apps/concierge/src/app/signage/signage-media-preview-modal.component.ts", lineNumber: 64 });
})();

// apps/concierge/src/app/signage/signage-playlist-modal.component.ts
var _c03 = ["search_input"];
var _SignagePlaylistModalComponent = class _SignagePlaylistModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA) ?? {};
    this._state = inject(SignageStateService);
    this._dialog = inject(MatDialog);
    this._dialog_ref = inject(MatDialogRef);
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
    this.search_input = viewChild("search_input");
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
};
_SignagePlaylistModalComponent.\u0275fac = function SignagePlaylistModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignagePlaylistModalComponent)();
};
_SignagePlaylistModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePlaylistModalComponent, selectors: [["signage-playlist-modal"]], viewQuery: function SignagePlaylistModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.search_input, _c03, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
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
var SignagePlaylistModalComponent = _SignagePlaylistModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignagePlaylistModalComponent, [{
    type: Component,
    args: [{ selector: "signage-playlist-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (playlist.id
                    ? 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EDIT'
                    : 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_NEW'
                ) | translate
            "
            (confirm)="savePlaylist()"
            [loading]="
                loading
                    ? ('APP.CONCIERGE.SIGNAGE_PLAYLISTS_SAVING' | translate)
                    : ''
            "
        >
            <form [formGroup]="form">
                <label for="name"
                    >{{ 'FORM.NAME' | translate }}<span required>*</span></label
                >
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        name="name"
                        [placeholder]="'FORM.NAME' | translate"
                        formControlName="name"
                    />
                    <mat-error>{{
                        'FORM.NAME_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
                <div class="mb-4 flex items-center space-x-4">
                    <settings-toggle
                        class="flex-1"
                        [name]="'COMMON.ENABLED' | translate"
                        formControlName="enabled"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="flex-1"
                        [name]="
                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_SHUFFLE'
                                | translate
                        "
                        formControlName="random"
                    >
                    </settings-toggle>
                </div>
                <div class="flex items-center space-x-4">
                    <label
                        for="default-duration"
                        class="m-0 flex w-auto min-w-0 items-center space-x-2"
                    >
                        <div>Default Play Time</div>
                        <icon
                            class="text-xl"
                            matTooltip="Default length of time to hold images on screen"
                        >
                            info
                        </icon>
                    </label>
                    <div class="font-mono text-xs">
                        {{ form.value.default_duration / 1000 | mediaDuration }}
                    </div>
                </div>
                <mat-slider min="5000" max="300000" step="1000">
                    <input
                        name="default-duration"
                        matSliderThumb
                        formControlName="default_duration"
                    />
                </mat-slider>
                <div class="flex space-x-2">
                    <div class="flex-1">
                        <label for="orientation">{{
                            'APP.CONCIERGE.SIGNAGE_ORIENTATION' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="orientation"
                                formControlName="orientation"
                                [placeholder]="
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                        | translate
                                "
                            >
                                <mat-option value="unspecified">
                                    {{
                                        'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                            | translate
                                    }}
                                </mat-option>
                                <mat-option value="landscape">{{
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE'
                                        | translate
                                }}</mat-option>
                                <mat-option value="portrait">{{
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="square">{{
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="flex-1">
                        <label for="animation">{{
                            'APP.CONCIERGE.SIGNAGE_ANIMATION' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="animation"
                                formControlName="default_animation"
                                [placeholder]="
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT'
                                        | translate
                                "
                            >
                                <mat-option [value]="0">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="1">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_CUT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="2">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_CROSS_FADE'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="3">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_TOP'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="4">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_LEFT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="5">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_RIGHT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="6">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_BOTTOM'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
                <label for="description">{{
                    'COMMON.DESCRIPTION' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <textarea
                        matInput
                        name="description"
                        [placeholder]="'COMMON.DESCRIPTION' | translate"
                        formControlName="description"
                        class="min-h-32"
                    ></textarea>
                </mat-form-field>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="valid-from">{{
                            'APP.CONCIERGE.VALID_FROM' | translate
                        }}</label>
                        <a-date-field
                            name="valid-from"
                            class="w-full"
                            formControlName="valid_from"
                        ></a-date-field>
                    </div>
                    <div class="flex-1">
                        <label for="valid-until">{{
                            'APP.CONCIERGE.VALID_UNTIL' | translate
                        }}</label>
                        <a-date-field
                            name="valid-until"
                            class="w-full"
                            [from]="form.value.valid_from"
                            formControlName="valid_until"
                            [disabled]="!form.value.valid_from"
                        ></a-date-field>
                    </div>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, standalone: false }]
  }], null, null);
})();
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
var _SignageStateService = class _SignageStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
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
    ]).pipe(filter(([_]) => !!_?.id), debounceTime(300), switchMap(() => Gc({ limit: 500 })), map((_) => (_.data || []).sort((a, b) => a.name.localeCompare(b.name))), shareReplay(1));
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
  changed() {
    this._change.next(Date.now());
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
      const call = playlist.id ? ta(playlist.id, playlist) : ea(playlist);
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
      const result = yield Kc(data).toPromise();
      this._active_upload.next(null);
      this._change.next(Date.now());
      return result;
    });
  }
  updateMedia(item) {
    return __async(this, null, function* () {
      if (!item?.id)
        return;
      yield Jc(item.id, item).toPromise();
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
      yield Zc(item.id).toPromise();
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
};
_SignageStateService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SignageStateService_BaseFactory;
  return function SignageStateService_Factory(__ngFactoryType__) {
    return (\u0275SignageStateService_BaseFactory || (\u0275SignageStateService_BaseFactory = \u0275\u0275getInheritedFactory(_SignageStateService)))(__ngFactoryType__ || _SignageStateService);
  };
})();
_SignageStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignageStateService, factory: _SignageStateService.\u0275fac, providedIn: "root" });
var SignageStateService = _SignageStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/signage/signage-item-playlists.component.ts
var _c04 = ["*"];
var _c1 = (a0) => ({ count: a0 });
var _c2 = () => ["/signage", "media"];
var _c3 = (a0) => ({ playlist: a0 });
var _c4 = (a0) => ({ name: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function SignageItemPlaylistsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
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
    \u0275\u0275element(0, "div", 20);
  }
}
function SignageItemPlaylistsComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, SignageItemPlaylistsComponent_Conditional_5_For_2_div_1_Template, 1, 0, "div", 8);
    \u0275\u0275elementStart(2, "button", 9);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "drag_handle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10)(7, "div", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 12);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 13)(13, "icon");
    \u0275\u0275text(14, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-menu", null, 0)(17, "a", 14)(18, "div", 15)(19, "icon", 16);
    \u0275\u0275text(20, " visibility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "button", 18);
    \u0275\u0275listener("click", function SignageItemPlaylistsComponent_Conditional_5_For_2_Template_button_click_24_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove.next(item_r4));
    });
    \u0275\u0275elementStart(25, "div", 15)(26, "icon", 19);
    \u0275\u0275text(27, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 17);
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
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("cdkDropListDropped", function SignageItemPlaylistsComponent_Conditional_5_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.ondrop.next($event));
    });
    \u0275\u0275repeaterCreate(1, SignageItemPlaylistsComponent_Conditional_5_For_2_Template, 31, 22, "div", 6, _forTrack0);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 7);
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
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 21)(2, "icon", 22);
    \u0275\u0275text(3, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 23);
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
var _SignageItemPlaylistsComponent = class _SignageItemPlaylistsComponent {
  constructor() {
    this._state = inject(SignageStateService);
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
  playlistCount(id) {
    return PLAYLIST_ITEM_COUNTS[id]?.count || 0;
  }
  ngOnChanges(changes) {
    if (changes.item) {
      this._playlist_ids.next(this.item?.playlists || []);
    }
  }
};
_SignageItemPlaylistsComponent.\u0275fac = function SignageItemPlaylistsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageItemPlaylistsComponent)();
};
_SignageItemPlaylistsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageItemPlaylistsComponent, selectors: [["signage-item-playlists"]], inputs: { item: "item", name: "name", extra: "extra" }, outputs: { add: "add", remove: "remove", ondrop: "ondrop" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c04, decls: 8, vars: 5, consts: [["menu", "matMenu"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-xl", "font-medium"], [1, "rounded-lg", "bg-base-200", "px-2", "py-1", "font-mono", "text-xs", "uppercase"], [1, "mx-auto", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["cdkDropList", "", 1, "mt-4", "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "flex", "h-20", "w-full", "items-center", "space-x-2", "rounded-lg", "border", "border-base-300", "bg-base-100", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["class", "h-20 w-full rounded-xl border-4 border-dashed border-base-400 bg-base-300", 4, "cdkDragPlaceholder"], ["matRipple", "", "cdkDragHandle", "", 1, "flex", "h-full", "w-6", "items-center", "justify-center", "rounded", "hover:bg-base-200", 3, "matTooltip"], [1, "w-1/2", "flex-1", "text-base-content"], [1, "truncate"], [1, "truncate", "text-sm", "opacity-30"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink", "queryParams"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "click"], [1, "text-2xl", "text-error"], [1, "h-20", "w-full", "rounded-xl", "border-4", "border-dashed", "border-base-400", "bg-base-300"], [1, "flex", "flex-col", "items-center", "justify-center", "opacity-30"], [1, "text-6xl"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"]], template: function SignageItemPlaylistsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 1)(1, "h3", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, SignageItemPlaylistsComponent_Conditional_3_Template, 2, 1, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(4);
    \u0275\u0275conditionalCreate(5, SignageItemPlaylistsComponent_Conditional_5_Template, 7, 5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275conditionalBranchCreate(7, SignageItemPlaylistsComponent_Conditional_7_Template, 10, 9, "div", 4);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx.item == null ? null : ctx.item.display_name) || (ctx.item == null ? null : ctx.item.name), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.extra ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(6, 3, ctx.active_playlists).length > 0 && ctx.item ? 5 : 7);
  }
}, dependencies: [MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, RouterLink, CdkDropList, CdkDrag, CdkDragHandle, CdkDragPlaceholder, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-item-playlists.component.css.map */"] });
var SignageItemPlaylistsComponent = _SignageItemPlaylistsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageItemPlaylistsComponent, [{
    type: Component,
    args: [{ selector: `signage-item-playlists`, template: `
        <div class="flex items-center justify-center space-x-2">
            <h3 class="text-xl font-medium">
                {{ item?.display_name || item?.name }}
            </h3>
            @if (extra) {
                <div
                    class="rounded-lg bg-base-200 px-2 py-1 font-mono text-xs uppercase"
                >
                    {{ extra }}
                </div>
            }
        </div>
        <ng-content />
        @if ((active_playlists | async).length > 0 && item) {
            <div
                cdkDropList
                class="mt-4 flex h-1/2 flex-1 flex-col space-y-2 overflow-auto"
                (cdkDropListDropped)="ondrop.next($event)"
            >
                @for (item of active_playlists | async; track item.id) {
                    <div
                        cdkDrag
                        class="flex h-20 w-full items-center space-x-2 rounded-lg border border-base-300 bg-base-100 p-2"
                    >
                        <div
                            class="h-20 w-full rounded-xl border-4 border-dashed border-base-400 bg-base-300"
                            *cdkDragPlaceholder
                        ></div>
                        <button
                            matRipple
                            cdkDragHandle
                            class="flex h-full w-6 items-center justify-center rounded hover:bg-base-200"
                            [matTooltip]="
                                'APP.CONCIERGE.SIGNAGE_MEDIA_REORDER'
                                    | translate
                            "
                        >
                            <icon>drag_handle</icon>
                        </button>
                        <div class="w-1/2 flex-1 text-base-content">
                            <div class="truncate">
                                {{ item.name }}
                            </div>
                            <div class="truncate text-sm opacity-30">
                                {{
                                    'APP.CONCIERGE.SIGNAGE_MEDIA_COUNT'
                                        | translate
                                            : { count: playlistCount(item.id) }
                                }}
                            </div>
                        </div>
                        <button
                            icon
                            matRipple
                            aria-label="Media Actions"
                            [matMenuTriggerFor]="menu"
                        >
                            <icon>more_vert</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <a
                                mat-menu-item
                                [routerLink]="['/signage', 'media']"
                                [queryParams]="{
                                    playlist: item.id,
                                }"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl"> visibility </icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_VIEW'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </a>
                            <button mat-menu-item (click)="remove.next(item)">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl text-error">
                                        delete
                                    </icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </div>
                }
            </div>
            <button btn matRipple (click)="add.emit()">
                {{ 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD' | translate }}
            </button>
        } @else {
            <div
                class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <div
                    class="flex flex-col items-center justify-center opacity-30"
                >
                    <icon class="text-6xl">hide_image</icon>
                    <p>
                        {{
                            'APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLISTS_EMPTY'
                                | translate: { name: name }
                        }}
                    </p>
                </div>
                <button btn matRipple (click)="add.emit()" class="w-40">
                    {{ 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD' | translate }}
                </button>
            </div>
        }
    `, standalone: false, styles: ["/* angular:styles/component:css;988165d096528c7b51347b92b4b6dc221c4aacfd0a189d7585a5c637e136471a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/signage/signage-item-playlists.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-item-playlists.component.css.map */\n"] }]
  }], null, { item: [{
    type: Input
  }], name: [{
    type: Input
  }], extra: [{
    type: Input
  }], add: [{
    type: Output
  }], remove: [{
    type: Output
  }], ondrop: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageItemPlaylistsComponent, { className: "SignageItemPlaylistsComponent", filePath: "apps/concierge/src/app/signage/signage-item-playlists.component.ts", lineNumber: 140 });
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
    \u0275\u0275conditionalCreate(2, SignageDisplaysComponent_Conditional_8_For_2_Conditional_2_Template, 3, 2);
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
function SignageDisplaysComponent_Conditional_12_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
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
function SignageDisplaysComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, SignageDisplaysComponent_Conditional_12_Conditional_6_For_2_Template, 6, 14, "a", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "button", 30);
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
    \u0275\u0275conditionalCreate(6, SignageDisplaysComponent_Conditional_12_Conditional_6_Template, 7, 5, "div", 21);
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
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(7, 18, ctx_r2.active_trigger) ? 6 : -1);
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
function SignageDisplaysComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "search-overlay", 31);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("selected", function SignageDisplaysComponent_Conditional_15_Template_search_overlay_selected_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addPlaylist($event));
    })("close", function SignageDisplaysComponent_Conditional_15_Template_search_overlay_close_0_listener() {
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
var _SignageDisplaysComponent = class _SignageDisplaysComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(SignageStateService);
    this._route = inject(ActivatedRoute);
    this._settings = inject(SettingsService);
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
  get signage_path() {
    return this._settings.get("app.signage_path") || "/signage";
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
};
_SignageDisplaysComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SignageDisplaysComponent_BaseFactory;
  return function SignageDisplaysComponent_Factory(__ngFactoryType__) {
    return (\u0275SignageDisplaysComponent_BaseFactory || (\u0275SignageDisplaysComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SignageDisplaysComponent)))(__ngFactoryType__ || _SignageDisplaysComponent);
  };
})();
_SignageDisplaysComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageDisplaysComponent, selectors: [["signage-displays"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 14, consts: [["menu", "matMenu"], [1, "relative", "flex", "h-full", "w-full", "space-x-4", "overflow-visible"], ["sidebar", "", 1, "flex", "h-full", "w-64", "flex-col", "space-y-4", "py-4"], [1, "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "h-1/2", "w-full", "flex-1", "space-y-2", "overflow-auto"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col", "space-y-4", "overflow-auto", "rounded-lg", "border", "border-base-300", "p-4", "shadow"], [1, "flex", "flex-1", "flex-col", 3, "item", "name", "extra"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], [3, "item_list"], ["matRipple", "", 1, "z-10", "flex", "min-h-12", "w-full", "items-center", "truncate", "rounded-3xl", "px-6", "hover:bg-base-200", 3, "routerLink", "queryParams"], [1, "relative", "z-0", "flex", "items-center", "space-x-2"], [1, "w-6"], [1, "absolute", "left-6", "top-1/2", "h-16", "w-4", "-translate-y-full", "border-b-2", "border-l-2", "border-base-300"], ["matRipple", "", 1, "flex", "min-h-12", "w-1/2", "flex-1", "items-center", "truncate", "rounded-3xl", "px-6", "hover:bg-base-200", 3, "routerLink", "queryParams"], [1, "max-w-full", "truncate"], [1, "text-6xl"], [1, "text-center"], [1, "flex", "flex-1", "flex-col", 3, "add", "remove", "ondrop", "item", "name", "extra"], [1, "mt-4", "flex", "flex-wrap", "items-center", "overflow-auto"], ["icon", "", "matRipple", "", 1, "absolute", "right-2", "top-2", "!m-0", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "target", "_blank", "ref", "noopener noreferrer", 3, "href"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "click"], [1, "text-2xl", "text-error"], ["matRipple", "", 1, "m-1", "whitespace-nowrap", "rounded", "bg-base-200", "px-2", "py-1", "font-mono", "text-xs", 3, "routerLink", "queryParams"], ["matRipple", "", 1, "m-1", "rounded", "px-2", "py-1", "font-mono", "text-xs", "underline"], [3, "selected", "close", "item_list"]], template: function SignageDisplaysComponent_Template(rf, ctx) {
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
    \u0275\u0275conditionalCreate(8, SignageDisplaysComponent_Conditional_8_Template, 4, 2, "div", 6);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275conditionalBranchCreate(10, SignageDisplaysComponent_Conditional_10_Template, 6, 3, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275conditionalCreate(12, SignageDisplaysComponent_Conditional_12_Template, 28, 26, "signage-item-playlists", 9);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275conditionalBranchCreate(14, SignageDisplaysComponent_Conditional_14_Template, 6, 3, "div", 10);
    \u0275\u0275conditionalCreate(15, SignageDisplaysComponent_Conditional_15_Template, 2, 3, "search-overlay", 11);
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
    \u0275\u0275conditional(ctx.adding ? 15 : -1);
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, RouterLink, SearchOverlayComponent, SignageItemPlaylistsComponent, AsyncPipe, TranslatePipe, ZonePipe], encapsulation: 2 });
var SignageDisplaysComponent = _SignageDisplaysComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageDisplaysComponent, [{
    type: Component,
    args: [{ selector: "signage-displays", template: `
        <div class="relative flex h-full w-full space-x-4 overflow-visible">
            <div sidebar class="flex h-full w-64 flex-col space-y-4 py-4">
                <h3 class="text-center text-xl font-medium">
                    {{ 'APP.CONCIERGE.SIGNAGE_DISPLAYS' | translate }}
                </h3>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="'COMMON.SEARCH' | translate"
                        [ngModel]="search.getValue()"
                        (ngModelChange)="search.next($event)"
                    />
                </mat-form-field>
                @if ((displays | async)?.length > 0) {
                    <div class="h-1/2 w-full flex-1 space-y-2 overflow-auto">
                        @for (display of displays | async; track display.id) {
                            <a
                                matRipple
                                class="z-10 flex min-h-12 w-full items-center truncate rounded-3xl px-6 hover:bg-base-200"
                                [class.!bg-secondary]="
                                    selected.getValue() === display.id
                                "
                                [class.text-secondary-content]="
                                    selected.getValue() === display.id
                                "
                                [routerLink]="[]"
                                [queryParams]="{ display: display.id }"
                            >
                                {{ display.display_name || display.name }}
                            </a>
                            @if (
                                (active_display | async)?.id === display.id &&
                                !switching
                            ) {
                                @for (
                                    trigger of triggers | async;
                                    track trigger.id
                                ) {
                                    <div
                                        class="relative z-0 flex items-center space-x-2"
                                    >
                                        <div class="w-6">
                                            <div
                                                class="absolute left-6 top-1/2 h-16 w-4 -translate-y-full border-b-2 border-l-2 border-base-300"
                                            ></div>
                                        </div>
                                        <a
                                            matRipple
                                            class="flex min-h-12 w-1/2 flex-1 items-center truncate rounded-3xl px-6 hover:bg-base-200"
                                            [class.!bg-secondary]="
                                                selected_trigger.getValue() ===
                                                trigger?.id
                                            "
                                            [class.text-secondary-content]="
                                                selected_trigger.getValue() ===
                                                trigger?.id
                                            "
                                            [routerLink]="[]"
                                            [queryParams]="{
                                                display: display.id,
                                                trigger: trigger?.id,
                                            }"
                                        >
                                            <span class="max-w-full truncate">{{
                                                trigger?.display_name ||
                                                    trigger?.name ||
                                                    'Trigger'
                                            }}</span>
                                        </a>
                                    </div>
                                }
                            }
                        }
                    </div>
                } @else {
                    <div
                        class="flex flex-col items-center justify-center space-y-2 p-8 opacity-30"
                    >
                        <icon class="text-6xl">hide_image</icon>
                        <p class="text-center">
                            {{
                                (search.getValue()
                                    ? 'APP.CONCIERGE.SIGNAGE_DISPLAYS_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.SIGNAGE_DISPLAYS_EMPTY'
                                ) | translate
                            }}
                        </p>
                    </div>
                }
            </div>
            <div
                class="relative flex h-full w-1/2 flex-1 flex-col space-y-4 overflow-auto rounded-lg border border-base-300 p-4 shadow"
            >
                @if (active_display | async) {
                    <signage-item-playlists
                        class="flex flex-1 flex-col"
                        [item]="
                            (active_trigger | async) || (active_display | async)
                        "
                        [name]="
                            (active_trigger | async) ? 'trigger' : 'display'
                        "
                        [extra]="
                            (active_trigger | async)
                                ? ''
                                : (active_display | async)?.orientation
                        "
                        (add)="this.adding = true"
                        (remove)="removePlaylist($event)"
                        (ondrop)="drop($event)"
                    >
                        @if (!(active_trigger | async)) {
                            <div
                                class="mt-4 flex flex-wrap items-center overflow-auto"
                            >
                                @for (
                                    zone of (active_display | async)?.zones;
                                    track zone
                                ) {
                                    <a
                                        class="m-1 whitespace-nowrap rounded bg-base-200 px-2 py-1 font-mono text-xs"
                                        matRipple
                                        [routerLink]="['/signage', 'zones']"
                                        [queryParams]="{ zone: zone }"
                                    >
                                        {{
                                            (zone | zone | async)
                                                ?.display_name ||
                                                (zone | zone | async)?.name
                                        }}
                                    </a>
                                }
                                <button
                                    class="m-1 rounded px-2 py-1 font-mono text-xs underline"
                                    matRipple
                                >
                                    {{
                                        'APP.CONCIERGE.SIGNAGE_DISPLAYS_ZONE_ADD'
                                            | translate
                                    }}
                                </button>
                            </div>
                        }
                        <button
                            icon
                            matRipple
                            [matMenuTriggerFor]="menu"
                            class="absolute right-2 top-2 !m-0"
                        >
                            <icon>more_vert</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <a
                                mat-menu-item
                                [href]="
                                    signage_path +
                                    '/#/signage/' +
                                    (active_display | async)?.id
                                "
                                target="_blank"
                                ref="noopener noreferrer"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">open_in_new</icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_DISPLAYS_OPEN_PLAYER'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </a>
                            <button mat-menu-item (click)="removeDisplay()">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl text-error"
                                        >delete</icon
                                    >
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </signage-item-playlists>
                } @else {
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center space-y-2 opacity-30"
                    >
                        <icon class="text-6xl">desktop_windows</icon>
                        <p>
                            {{
                                'APP.CONCIERGE.SIGNAGE_DISPLAYS_SELECT'
                                    | translate
                            }}
                        </p>
                    </div>
                }
                @if (adding) {
                    <search-overlay
                        [item_list]="playlists | async"
                        (selected)="addPlaylist($event)"
                        (close)="adding = false"
                    ></search-overlay>
                }
            </div>
        </div>
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageDisplaysComponent, { className: "SignageDisplaysComponent", filePath: "apps/concierge/src/app/signage/signage-displays.component.ts", lineNumber: 240 });
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
function SignageMediaListComponent_Conditional_12_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const media_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", media_r4.thumbnail_url);
  }
}
function SignageMediaListComponent_Conditional_12_For_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
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
function SignageMediaListComponent_Conditional_12_For_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 24);
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
function SignageMediaListComponent_Conditional_12_For_3_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_12_For_3_For_25_Template_button_click_0_listener() {
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
    \u0275\u0275conditionalCreate(1, SignageMediaListComponent_Conditional_12_For_3_Conditional_1_Template, 1, 0, "div", 12)(2, SignageMediaListComponent_Conditional_12_For_3_Conditional_2_Template, 1, 0, "div", 13);
    \u0275\u0275template(3, SignageMediaListComponent_Conditional_12_For_3_div_3_Template, 3, 0, "div", 14);
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275conditionalCreate(5, SignageMediaListComponent_Conditional_12_For_3_Conditional_5_Template, 1, 1, "img", 16);
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, SignageMediaListComponent_Conditional_12_For_3_Conditional_9_Template, 3, 3, "div", 18);
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
    \u0275\u0275conditionalCreate(22, SignageMediaListComponent_Conditional_12_For_3_Conditional_22_Template, 3, 4, "button", 24);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275repeaterCreate(24, SignageMediaListComponent_Conditional_12_For_3_For_25_Template, 4, 1, "button", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(26, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-menu", null, 1)(29, "button", 26);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_12_For_3_Template_button_click_29_listener() {
      const media_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editItem(media_r4));
    });
    \u0275\u0275elementStart(30, "div", 27)(31, "icon", 28);
    \u0275\u0275text(32, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 29);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "button", 30)(37, "div", 27)(38, "icon", 28);
    \u0275\u0275text(39, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 29);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "button", 26);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_12_For_3_Template_button_click_43_listener() {
      const media_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previewItem(media_r4));
    });
    \u0275\u0275elementStart(44, "div", 27)(45, "icon", 28);
    \u0275\u0275text(46, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 29);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "button", 26);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_12_For_3_Template_button_click_50_listener() {
      const media_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeItem(media_r4));
    });
    \u0275\u0275elementStart(51, "div", 27)(52, "icon", 31);
    \u0275\u0275text(53, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 29);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_26_0;
    const media_r4 = ctx.$implicit;
    const playlist_menu_r7 = \u0275\u0275reference(17);
    const menu_r8 = \u0275\u0275reference(28);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(media_r4.valid_from && ctx_r1.now < media_r4.valid_from ? 1 : media_r4.valid_until && ctx_r1.now > media_r4.valid_until ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(media_r4.thumbnail_url ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-info", media_r4.media_type === "video")("text-info-content", media_r4.media_type === "video")("bg-warning", media_r4.media_type === "image")("text-warning-content", media_r4.media_type === "image");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 23, media_r4.media_type === "image" ? "COMMON.IMAGE" : "COMMON.VIDEO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(media_r4.play_time ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", media_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", media_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(7);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 25, "COMMON.SEARCH"))("ngModel", ctx_r1.playlist_search.getValue());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(((tmp_26_0 = \u0275\u0275pipeBind1(23, 27, ctx_r1.playlists)) == null ? null : tmp_26_0.length) > 0) ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(26, 29, ctx_r1.playlists));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 31, "APP.CONCIERGE.SIGNAGE_MEDIA_EDIT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", playlist_menu_r7);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 33, "APP.CONCIERGE.SIGNAGE_MEDIA_ADD_PLAYLIST"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 35, "APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 37, "APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE"), " ");
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
    \u0275\u0275repeaterCreate(2, SignageMediaListComponent_Conditional_12_For_3_Template, 57, 39, "div", 11, _forTrack03);
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
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 34);
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
var _SignageMediaListComponent = class _SignageMediaListComponent {
  constructor() {
    this._state = inject(SignageStateService);
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
  get now() {
    return getUnixTime(startOfMinute(Date.now()));
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
};
_SignageMediaListComponent.\u0275fac = function SignageMediaListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageMediaListComponent)();
};
_SignageMediaListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaListComponent, selectors: [["signage-media-list"]], inputs: { playlist_count: "playlist_count" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 15, vars: 13, consts: [["playlist_menu", "matMenu"], ["menu", "matMenu"], [1, "relative", "p-4"], [1, "mb-4", "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["icon", "", "matRipple", "", "matTooltipPosition", "left", 1, "absolute", "right-2", "top-2", "border", "border-base-300", 3, "matTooltip"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["cdkDropList", "", "id", "media-list", 1, "grid", "w-full", "gap-4", "p-4", "md:grid-cols-2", "lg:grid-cols-3", 3, "cdkDropListData", "cdkDropListConnectedTo"], [1, "mx-auto", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], ["cdkDropList", "", "id", "media-list", 1, "grid", "w-full", "gap-4", "p-4", "md:grid-cols-2", "lg:grid-cols-3", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", 1, "relative", "flex", "flex-col", "items-center", "justify-center", "rounded-lg", "border", "border-base-300", "bg-base-100", "p-3", "hover:opacity-80"], [1, "absolute", "inset-0", "z-0", "rounded-lg", "bg-warning", "opacity-10"], [1, "absolute", "inset-0", "z-0", "rounded-lg", "bg-error", "opacity-10"], ["class", "flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed border-base-400 bg-base-300", 4, "cdkDragPlaceholder"], ["preview", "", 1, "relative", "h-36", "w-full", "overflow-hidden", "rounded-lg", "bg-base-200"], ["auth", "", 1, "h-full", "w-full", "rounded-lg", "object-contain", 3, "source"], [1, "absolute", "left-1", "top-1", "rounded-lg", "px-2", "py-1", "font-mono", "text-xs", "capitalize"], [1, "absolute", "bottom-1", "right-1", "rounded-lg", "bg-info", "px-2", "py-1", "font-mono", "text-xs", "capitalize", "text-info-content"], [1, "relative", "top-1", "flex", "w-full", "items-center", "justify-between"], [1, "w-1/2", "flex-1", "truncate", "text-base-content", 3, "matTooltip"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], [1, "px-2"], ["appearance", "outline", 1, "no-subscript", "w-full", 3, "click"], ["mat-menu-item", "", 3, "disabled"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "text-2xl", "text-error"], [1, "flex", "min-h-10", "min-w-10", "items-center", "justify-center", "rounded-2xl", "border-4", "border-dashed", "border-base-400", "bg-base-300"], [1, "text-2xl", "text-base-100"], [1, "text-6xl"]], template: function SignageMediaListComponent_Template(rf, ctx) {
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
    \u0275\u0275conditionalCreate(12, SignageMediaListComponent_Conditional_12_Template, 5, 6, "div", 8);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275conditionalBranchCreate(14, SignageMediaListComponent_Conditional_14_Template, 6, 3, "div", 9);
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
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, AuthenticatedImageDirective, CdkDropList, CdkDrag, CdkDragPlaceholder, AsyncPipe, TranslatePipe, MediaDurationPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=signage-media-list.component.css.map */"] });
var SignageMediaListComponent = _SignageMediaListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageMediaListComponent, [{
    type: Component,
    args: [{ selector: "signage-media-list", template: `
        <div class="relative p-4">
            <h3 class="mb-4 text-center text-xl font-medium">
                {{ 'APP.CONCIERGE.SIGNAGE_MEDIA' | translate }}
            </h3>
            <mat-form-field appearance="outline" class="no-subscript w-full">
                <input
                    matInput
                    [placeholder]="'COMMON.SEARCH' | translate"
                    [ngModel]="search.getValue()"
                    (ngModelChange)="search.next($event)"
                />
            </mat-form-field>
            <button
                icon
                matRipple
                class="absolute right-2 top-2 border border-base-300"
                [matTooltip]="'APP.CONCIERGE.SIGNAGE_MEDIA_UPLOAD' | translate"
                matTooltipPosition="left"
            >
                <icon>add</icon>
                <input
                    type="file"
                    class="absolute inset-0 opacity-0"
                    (change)="previewFile($event)"
                />
            </button>
        </div>
        @if ((media | async)?.length > 0) {
            <div
                class="grid w-full gap-4 p-4 md:grid-cols-2 lg:grid-cols-3"
                cdkDropList
                id="media-list"
                [cdkDropListData]="media | async"
                [cdkDropListConnectedTo]="playlist_ids"
                (cdkDropListDropped)="drop($event)"
            >
                @for (media of media | async; track media.id) {
                    <div
                        class="relative flex flex-col items-center justify-center rounded-lg border border-base-300 bg-base-100 p-3 hover:opacity-80"
                        cdkDrag
                    >
                        @if (media.valid_from && now < media.valid_from) {
                            <div
                                class="absolute inset-0 z-0 rounded-lg bg-warning opacity-10"
                            ></div>
                        } @else if (
                            media.valid_until && now > media.valid_until
                        ) {
                            <div
                                class="absolute inset-0 z-0 rounded-lg bg-error opacity-10"
                            ></div>
                        }
                        <div
                            class="flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed border-base-400 bg-base-300"
                            *cdkDragPlaceholder
                        >
                            <icon class="text-2xl text-base-100"> add </icon>
                        </div>
                        <div
                            preview
                            class="relative h-36 w-full overflow-hidden rounded-lg bg-base-200"
                        >
                            @if (media.thumbnail_url) {
                                <img
                                    auth
                                    [source]="media.thumbnail_url"
                                    class="h-full w-full rounded-lg object-contain"
                                />
                            }
                            <div
                                class="absolute left-1 top-1 rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                [class.bg-info]="media.media_type === 'video'"
                                [class.text-info-content]="
                                    media.media_type === 'video'
                                "
                                [class.bg-warning]="
                                    media.media_type === 'image'
                                "
                                [class.text-warning-content]="
                                    media.media_type === 'image'
                                "
                            >
                                {{
                                    (media.media_type === 'image'
                                        ? 'COMMON.IMAGE'
                                        : 'COMMON.VIDEO'
                                    ) | translate
                                }}
                            </div>
                            @if (media.play_time) {
                                <div
                                    class="absolute bottom-1 right-1 rounded-lg bg-info px-2 py-1 font-mono text-xs capitalize text-info-content"
                                >
                                    {{ media.play_time / 1000 | mediaDuration }}
                                </div>
                            }
                        </div>
                        <div
                            class="relative top-1 flex w-full items-center justify-between"
                        >
                            <div
                                class="w-1/2 flex-1 truncate text-base-content"
                                [matTooltip]="media.name"
                            >
                                {{ media.name }}
                            </div>
                            <button
                                icon
                                matRipple
                                [matMenuTriggerFor]="menu"
                                aria-label="Media Actions"
                            >
                                <icon>more_vert</icon>
                            </button>
                            <mat-menu #playlist_menu="matMenu">
                                <div class="px-2">
                                    <mat-form-field
                                        appearance="outline"
                                        class="no-subscript w-full"
                                        (click)="$event.stopPropagation()"
                                    >
                                        <input
                                            matInput
                                            [placeholder]="
                                                'COMMON.SEARCH' | translate
                                            "
                                            [ngModel]="
                                                playlist_search.getValue()
                                            "
                                            (ngModelChange)="
                                                playlist_search.next($event)
                                            "
                                        />
                                    </mat-form-field>
                                </div>
                                @if (!((playlists | async)?.length > 0)) {
                                    <button mat-menu-item [disabled]="true">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EMPTY'
                                                | translate
                                        }}
                                    </button>
                                }

                                @for (
                                    playlist of playlists | async;
                                    track playlist
                                ) {
                                    <button
                                        mat-menu-item
                                        (click)="
                                            addToPlaylist(media.id, playlist)
                                        "
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <div class="pr-2">
                                                {{ playlist.name }}
                                            </div>
                                        </div>
                                    </button>
                                }
                            </mat-menu>
                            <mat-menu #menu="matMenu">
                                <button mat-menu-item (click)="editItem(media)">
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">edit</icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_EDIT'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    [matMenuTriggerFor]="playlist_menu"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">add</icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_ADD_PLAYLIST'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="previewItem(media)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">visibility</icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="removeItem(media)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl text-error">
                                            delete
                                        </icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                        </div>
                    </div>
                }
            </div>
        } @else {
            <div
                class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
            >
                <icon class="text-6xl">hide_image</icon>
                <p>{{ 'APP.CONCIERGE.SIGNAGE_MEDIA_EMPTY' | translate }}</p>
            </div>
        }
    `, standalone: false, styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/signage/signage-media-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=signage-media-list.component.css.map */\n"] }]
  }], null, { playlist_count: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaListComponent, { className: "SignageMediaListComponent", filePath: "apps/concierge/src/app/signage/signage-media-list.component.ts", lineNumber: 256 });
})();

// apps/concierge/src/app/signage/signage-playlist-media-list.component.ts
function SignagePlaylistMediaListComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.SIGNAGE_SHUFFLE"), " ");
  }
}
function SignagePlaylistMediaListComponent_Conditional_53_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function SignagePlaylistMediaListComponent_Conditional_53_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
}
function SignagePlaylistMediaListComponent_Conditional_53_For_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "icon", 30);
    \u0275\u0275text(2, " add ");
    \u0275\u0275elementEnd()();
  }
}
function SignagePlaylistMediaListComponent_Conditional_53_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275conditionalCreate(1, SignagePlaylistMediaListComponent_Conditional_53_For_3_Conditional_1_Template, 1, 0, "div", 21)(2, SignagePlaylistMediaListComponent_Conditional_53_For_3_Conditional_2_Template, 1, 0, "div", 22);
    \u0275\u0275template(3, SignagePlaylistMediaListComponent_Conditional_53_For_3_div_3_Template, 3, 0, "div", 23);
    \u0275\u0275elementStart(4, "button", 24)(5, "icon");
    \u0275\u0275text(6, "drag_handle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 25);
    \u0275\u0275element(8, "img", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 28)(12, "icon");
    \u0275\u0275text(13, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-menu", null, 0)(16, "button", 4);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Conditional_53_For_3_Template_button_click_16_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editItem(item_r5));
    });
    \u0275\u0275elementStart(17, "div", 5)(18, "icon", 6);
    \u0275\u0275text(19, " edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 7);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 4);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Conditional_53_For_3_Template_button_click_23_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.previewItem(item_r5));
    });
    \u0275\u0275elementStart(24, "div", 5)(25, "icon", 6);
    \u0275\u0275text(26, " visibility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 7);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "button", 4);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Conditional_53_For_3_Template_button_click_30_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeItem(item_r5));
    });
    \u0275\u0275elementStart(31, "div", 5)(32, "icon", 8);
    \u0275\u0275text(33, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 7);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const menu_r6 = \u0275\u0275reference(15);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.valid_from && ctx_r2.now < item_r5.valid_from ? 1 : item_r5.valid_until && ctx_r2.now > item_r5.valid_until ? 2 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("source", item_r5.thumbnail_url);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r6);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 7, "APP.CONCIERGE.SIGNAGE_MEDIA_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 9, "APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 11, "APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE"), " ");
  }
}
function SignagePlaylistMediaListComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("cdkDropListDropped", function SignagePlaylistMediaListComponent_Conditional_53_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.drop($event));
    });
    \u0275\u0275repeaterCreate(2, SignagePlaylistMediaListComponent_Conditional_53_For_3_Template, 37, 13, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("cdkDropListData", \u0275\u0275pipeBind1(1, 2, ctx_r2.media))("cdkDropListConnectedTo", ctx_r2.playlist_ids);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 4, ctx_r2.media));
  }
}
function SignagePlaylistMediaListComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "icon", 31);
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
var _SignagePlaylistMediaListComponent = class _SignagePlaylistMediaListComponent {
  constructor() {
    this._state = inject(SignageStateService);
    this._router = inject(Router);
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
  get now() {
    return getUnixTime(startOfMinute(Date.now()));
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
};
_SignagePlaylistMediaListComponent.\u0275fac = function SignagePlaylistMediaListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignagePlaylistMediaListComponent)();
};
_SignagePlaylistMediaListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePlaylistMediaListComponent, selectors: [["signage-playlist-media-list"]], inputs: { playlist: "playlist", playlist_count: "playlist_count" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 56, vars: 57, consts: [["menu", "matMenu"], [1, "relative", "flex", "h-full", "w-full", "flex-col", "space-y-4", "p-4"], [1, "text-center", "text-xl", "font-medium"], ["icon", "", "matRipple", "", 1, "absolute", "right-2", "top-2", "!m-0", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], [1, "text-2xl", "text-error"], ["details", "", 1, "flex", "flex-wrap", "items-center"], [1, "m-1", "ml-2", "rounded", "px-2", "py-1", "text-xs"], [1, "m-1", "ml-2", "rounded", "bg-secondary", "px-2", "py-1", "text-xs", "text-secondary-content"], ["matTooltip", "Default Transition Animation", 1, "m-1", "rounded", "bg-base-200", "px-2", "py-2", "text-xs"], [1, "ml-1", "rounded", "bg-base-300", "px-2", "py-1", "uppercase"], ["matTooltip", "Default Playback Duration", 1, "m-1", "rounded", "bg-base-200", "px-2", "py-2", "text-xs"], [1, "ml-1", "rounded", "bg-base-300", "px-2", "py-1", "font-mono"], ["matTooltip", "Prefered Orientation", 1, "m-1", "rounded", "bg-base-200", "px-2", "py-2", "text-xs"], ["cdkDropList", "", "id", "playlist-list", 1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", 3, "cdkDropListData", "cdkDropListConnectedTo"], [1, "mx-auto", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], ["cdkDropList", "", "id", "playlist-list", 1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", 1, "relative", "flex", "h-20", "w-full", "items-center", "space-x-2", "rounded-lg", "border", "border-base-300", "bg-base-100", "p-2"], [1, "absolute", "inset-0", "z-0", "rounded-lg", "bg-warning", "opacity-10"], [1, "absolute", "inset-0", "z-0", "rounded-lg", "bg-error", "opacity-10"], ["class", "flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed border-base-400 bg-base-300", 4, "cdkDragPlaceholder"], ["matRipple", "", "cdkDragHandle", "", "matTooltip", "Drag to reorder", 1, "flex", "h-full", "w-6", "items-center", "justify-center", "rounded", "hover:bg-base-200"], ["preview", "", 1, "h-16", "w-[4.5rem]", "overflow-hidden", "rounded-lg", "bg-base-200"], ["auth", "", 1, "h-full", "w-full", "object-contain", 3, "source"], [1, "w-1/2", "flex-1", "truncate", "text-base-content"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], [1, "flex", "min-h-10", "min-w-10", "items-center", "justify-center", "rounded-2xl", "border-4", "border-dashed", "border-base-400", "bg-base-300"], [1, "text-2xl", "text-base-100"], [1, "text-6xl"]], template: function SignagePlaylistMediaListComponent_Template(rf, ctx) {
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
    \u0275\u0275conditionalCreate(32, SignagePlaylistMediaListComponent_Conditional_32_Template, 3, 3, "div", 11);
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
    \u0275\u0275conditionalCreate(53, SignagePlaylistMediaListComponent_Conditional_53_Template, 5, 6, "div", 17);
    \u0275\u0275pipe(54, "async");
    \u0275\u0275conditionalBranchCreate(55, SignagePlaylistMediaListComponent_Conditional_55_Template, 6, 3, "div", 18);
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
    \u0275\u0275conditional(((tmp_10_0 = \u0275\u0275pipeBind1(33, 39, ctx.selected_playlist)) == null ? null : tmp_10_0.random) ? 32 : -1);
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
}, dependencies: [MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, AuthenticatedImageDirective, CdkDropList, CdkDrag, CdkDragHandle, CdkDragPlaceholder, AsyncPipe, TranslatePipe, MediaDurationPipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=signage-playlist-media-list.component.css.map */"] });
var SignagePlaylistMediaListComponent = _SignagePlaylistMediaListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignagePlaylistMediaListComponent, [{
    type: Component,
    args: [{ selector: "signage-playlist-media-list", template: `
        <div class="relative flex h-full w-full flex-col space-y-4 p-4">
            <h3 class="text-center text-xl font-medium">
                Playlist - {{ (selected_playlist | async)?.name }}
            </h3>
            <button
                icon
                matRipple
                [matMenuTriggerFor]="menu"
                class="absolute right-2 top-2 !m-0"
            >
                <icon>more_vert</icon>
            </button>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="editPlaylist()">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">edit</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EDIT'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="removePlaylist()">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl text-error">delete</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
            </mat-menu>
            <div details class="flex flex-wrap items-center">
                <div
                    class="m-1 ml-2 rounded px-2 py-1 text-xs"
                    [class.bg-success]="(selected_playlist | async)?.enabled"
                    [class.text-success-content]="
                        (selected_playlist | async)?.enabled
                    "
                    [class.bg-error]="!(selected_playlist | async)?.enabled"
                    [class.text-error-content]="
                        !(selected_playlist | async)?.enabled
                    "
                >
                    {{
                        ((selected_playlist | async)?.enabled
                            ? 'COMMON.ENABLED'
                            : 'COMMON.DISABLED'
                        ) | translate
                    }}
                </div>
                @if ((selected_playlist | async)?.random) {
                    <div
                        class="m-1 ml-2 rounded bg-secondary px-2 py-1 text-xs text-secondary-content"
                    >
                        {{ 'APP.CONCIERGE.SIGNAGE_SHUFFLE' | translate }}
                    </div>
                }
                <div
                    class="m-1 rounded bg-base-200 px-2 py-2 text-xs"
                    matTooltip="Default Transition Animation"
                >
                    {{ 'APP.CONCIERGE.SIGNAGE_ANIMATION' | translate }}
                    <span
                        class="ml-1 rounded bg-base-300 px-2 py-1 uppercase"
                        >{{
                            animation_name(
                                (selected_playlist | async)?.default_animation
                            )
                        }}</span
                    >
                </div>
                <div
                    class="m-1 rounded bg-base-200 px-2 py-2 text-xs"
                    matTooltip="Default Playback Duration"
                >
                    {{ 'APP.CONCIERGE.SIGNAGE_DURATION' | translate }}
                    <span
                        class="ml-1 rounded bg-base-300 px-2 py-1 font-mono"
                        >{{
                            (selected_playlist | async)?.default_duration / 1000
                                | mediaDuration
                        }}</span
                    >
                </div>
                <div
                    class="m-1 rounded bg-base-200 px-2 py-2 text-xs"
                    matTooltip="Prefered Orientation"
                >
                    {{ 'APP.CONCIERGE.SIGNAGE_ORIENTATION' | translate }}
                    <span
                        class="ml-1 rounded bg-base-300 px-2 py-1 uppercase"
                        >{{ (selected_playlist | async)?.orientation }}</span
                    >
                </div>
            </div>
            @if ((media | async).length > 0) {
                <div
                    cdkDropList
                    class="flex h-1/2 flex-1 flex-col space-y-2 overflow-auto"
                    id="playlist-list"
                    [cdkDropListData]="media | async"
                    [cdkDropListConnectedTo]="playlist_ids"
                    (cdkDropListDropped)="drop($event)"
                >
                    @for (item of media | async; track item) {
                        <div
                            cdkDrag
                            class="relative flex h-20 w-full items-center space-x-2 rounded-lg border border-base-300 bg-base-100 p-2"
                        >
                            @if (item.valid_from && now < item.valid_from) {
                                <div
                                    class="absolute inset-0 z-0 rounded-lg bg-warning opacity-10"
                                ></div>
                            } @else if (
                                item.valid_until && now > item.valid_until
                            ) {
                                <div
                                    class="absolute inset-0 z-0 rounded-lg bg-error opacity-10"
                                ></div>
                            }
                            <div
                                class="flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed border-base-400 bg-base-300"
                                *cdkDragPlaceholder
                            >
                                <icon class="text-2xl text-base-100">
                                    add
                                </icon>
                            </div>
                            <button
                                matRipple
                                cdkDragHandle
                                class="flex h-full w-6 items-center justify-center rounded hover:bg-base-200"
                                matTooltip="Drag to reorder"
                            >
                                <icon>drag_handle</icon>
                            </button>
                            <div
                                preview
                                class="h-16 w-[4.5rem] overflow-hidden rounded-lg bg-base-200"
                            >
                                <img
                                    auth
                                    [source]="item.thumbnail_url"
                                    class="h-full w-full object-contain"
                                />
                            </div>
                            <div
                                class="w-1/2 flex-1 truncate text-base-content"
                            >
                                {{ item.name }}
                            </div>
                            <button
                                icon
                                matRipple
                                aria-label="Media Actions"
                                [matMenuTriggerFor]="menu"
                            >
                                <icon>more_vert</icon>
                            </button>
                            <mat-menu #menu="matMenu">
                                <button mat-menu-item (click)="editItem(item)">
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl"> edit </icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_EDIT'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="previewItem(item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">
                                            visibility
                                        </icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="removeItem(item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl text-error">
                                            delete
                                        </icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
                >
                    <icon class="text-6xl">hide_image</icon>
                    <p>
                        {{
                            'APP.CONCIERGE.SIGNAGE_PLAYLIST_MEDIA_EMPTY'
                                | translate
                        }}
                    </p>
                </div>
            }
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;53020ecd9eec6f24fc2e7595a27ffc73aeee295082b36352e0ab4548108a08a2;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/signage/signage-playlist-media-list.component.ts */\n:host {\n  height: 100%;\n}\n/*# sourceMappingURL=signage-playlist-media-list.component.css.map */\n"] }]
  }], null, { playlist: [{
    type: Input
  }], playlist_count: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePlaylistMediaListComponent, { className: "SignagePlaylistMediaListComponent", filePath: "apps/concierge/src/app/signage/signage-playlist-media-list.component.ts", lineNumber: 262 });
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
function SignageMediaComponent_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function SignageMediaComponent_Conditional_14_Conditional_6_Template_button_click_0_listener() {
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
    \u0275\u0275conditionalCreate(6, SignageMediaComponent_Conditional_14_Conditional_6_Template, 7, 3, "button", 18);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, ctx_r2.search.getValue() ? "APP.CONCIERGE.SIGNAGE_PLAYLISTS_SEARCH_EMPTY" : "APP.CONCIERGE.SIGNAGE_PLAYLISTS_EMPTY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.search.getValue() ? 6 : -1);
  }
}
function SignageMediaComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "signage-media-list", 9);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("playlist_count", (tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.playlists)) == null ? null : tmp_1_0.length);
  }
}
function SignageMediaComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "signage-playlist-media-list", 10);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("playlist", ctx_r2.selected_playlist)("playlist_count", (tmp_2_0 = \u0275\u0275pipeBind1(1, 2, ctx_r2.playlists)) == null ? null : tmp_2_0.length);
  }
}
function SignageMediaComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("dragleave", function SignageMediaComponent_Conditional_19_Template_div_dragleave_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideOverlay($event));
    })("drop", function SignageMediaComponent_Conditional_19_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previewFile($event));
    });
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementStart(2, "div", 25)(3, "icon", 16);
    \u0275\u0275text(4, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 26);
    \u0275\u0275listener("change", function SignageMediaComponent_Conditional_19_Template_input_change_8_listener($event) {
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
var _SignageMediaComponent = class _SignageMediaComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(SignageStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
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
};
_SignageMediaComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SignageMediaComponent_BaseFactory;
  return function SignageMediaComponent_Factory(__ngFactoryType__) {
    return (\u0275SignageMediaComponent_BaseFactory || (\u0275SignageMediaComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SignageMediaComponent)))(__ngFactoryType__ || _SignageMediaComponent);
  };
})();
_SignageMediaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaComponent, selectors: [["signage-media"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 24, consts: [[1, "relative", "flex", "h-full", "w-full", "space-x-4", "overflow-visible"], ["sidebar", "", 1, "flex", "h-full", "w-64", "flex-col", "space-y-4", "overflow-auto", "py-4"], [1, "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["matRipple", "", 1, "flex", "min-h-12", "w-full", "items-center", "rounded-3xl", "px-6", "hover:bg-base-200", 3, "routerLink", "queryParams"], [1, "w-full"], [1, "relative", "h-full", "w-1/2", "flex-1", "overflow-hidden", "rounded-lg", "border", "border-base-300", "shadow", 3, "dragover", "dragenter", "drop"], [1, "h-full", "w-full", "overflow-auto"], [3, "playlist_count"], [3, "playlist", "playlist_count"], [1, "absolute", "inset-0"], ["matRipple", "", "cdkDropList", "", 1, "flex", "h-12", "min-h-12", "w-full", "items-center", "rounded-3xl", "px-6", "hover:bg-base-200", 3, "!bg-secondary", "text-secondary-content", "routerLink", "queryParams", "id", "cdkDropListConnectedTo"], ["matRipple", "", "cdkDropList", "", 1, "flex", "h-12", "min-h-12", "w-full", "items-center", "rounded-3xl", "px-6", "hover:bg-base-200", 3, "cdkDropListDropped", "routerLink", "queryParams", "id", "cdkDropListConnectedTo"], [1, "flex-1"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "text-6xl"], [1, "text-center"], ["btn", "", "matRipple", "", 1, "inverse"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click"], [1, "flex", "w-full", "items-center", "justify-center"], [1, "text-2xl"], [1, "ml-2", "mr-4"], [1, "absolute", "inset-0", 3, "dragleave", "drop"], [1, "absolute", "inset-0", "bg-base-content", "opacity-60"], [1, "absolute", "inset-4", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-2xl", "border-4", "border-dashed", "border-base-300", "text-base-100"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"]], template: function SignageMediaComponent_Template(rf, ctx) {
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
    \u0275\u0275conditionalCreate(12, SignageMediaComponent_Conditional_12_Template, 3, 2);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275conditionalBranchCreate(14, SignageMediaComponent_Conditional_14_Template, 7, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 7);
    \u0275\u0275listener("dragover", function SignageMediaComponent_Template_div_dragover_15_listener($event) {
      return ctx.onEnter($event);
    })("dragenter", function SignageMediaComponent_Template_div_dragenter_15_listener($event) {
      return ctx.onEnter($event);
    })("drop", function SignageMediaComponent_Template_div_drop_15_listener($event) {
      return ctx.hideOverlay($event);
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(16, "div", 8);
    \u0275\u0275conditionalCreate(17, SignageMediaComponent_Conditional_17_Template, 2, 3, "signage-media-list", 9);
    \u0275\u0275conditionalCreate(18, SignageMediaComponent_Conditional_18_Template, 2, 4, "signage-playlist-media-list", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, SignageMediaComponent_Conditional_19_Template, 9, 3, "div", 11);
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
    \u0275\u0275conditional(!ctx.selected_playlist ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.selected_playlist ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_dropzone ? 19 : -1);
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatRipple, IconComponent, RouterLink, CdkDropList, SignageMediaListComponent, SignagePlaylistMediaListComponent, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  min-height: 100%;\n}\n/*# sourceMappingURL=signage-media.component.css.map */"] });
var SignageMediaComponent = _SignageMediaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageMediaComponent, [{
    type: Component,
    args: [{ selector: "signage-media", template: `
        <div class="relative flex h-full w-full space-x-4 overflow-visible">
            <div
                sidebar
                class="flex h-full w-64 flex-col space-y-4 overflow-auto py-4"
            >
                <h3 class="text-center text-xl font-medium">
                    {{ 'APP.CONCIERGE.SIGNAGE_PLAYLISTS' | translate }}
                </h3>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="'COMMON.SEARCH' | translate"
                        [ngModel]="search.getValue()"
                        (ngModelChange)="search.next($event)"
                    />
                </mat-form-field>
                <a
                    matRipple
                    class="flex min-h-12 w-full items-center rounded-3xl px-6 hover:bg-base-200"
                    [class.!bg-secondary]="!selected_playlist"
                    [class.text-secondary-content]="!selected_playlist"
                    [routerLink]="[]"
                    [queryParams]="{ playlist: '' }"
                >
                    {{ 'APP.CONCIERGE.SIGNAGE_MEDIA_ALL' | translate }}
                </a>
                <hr class="w-full" />
                @if ((playlists | async)?.length > 0) {
                    @for (playlist of playlists | async; track playlist.id) {
                        <a
                            matRipple
                            class="flex h-12 min-h-12 w-full items-center rounded-3xl px-6 hover:bg-base-200"
                            [class.!bg-secondary]="
                                selected_playlist === playlist.id
                            "
                            [class.text-secondary-content]="
                                selected_playlist === playlist.id
                            "
                            [routerLink]="[]"
                            [queryParams]="{ playlist: playlist.id }"
                            cdkDropList
                            [id]="'playlist-' + $index"
                            [cdkDropListConnectedTo]="[
                                'media-list',
                                'playlist-list',
                            ]"
                            (cdkDropListDropped)="
                                selected_playlist === playlist.id
                                    ? ''
                                    : drop(playlist, $event)
                            "
                        >
                            <div class="flex-1">
                                {{ playlist.name }}
                            </div>
                        </a>
                    }
                } @else {
                    <div
                        class="flex flex-col items-center justify-center space-y-2 p-8 opacity-30"
                    >
                        <icon class="text-6xl">hide_image</icon>
                        <p class="text-center">
                            {{
                                (search.getValue()
                                    ? 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EMPTY'
                                ) | translate
                            }}
                        </p>
                    </div>
                    @if (!search.getValue()) {
                        <button
                            btn
                            matRipple
                            class="inverse"
                            (click)="addPlaylist()"
                        >
                            <div
                                class="flex w-full items-center justify-center"
                            >
                                <icon class="text-2xl">add</icon>
                                <span class="ml-2 mr-4">{{
                                    'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD'
                                        | translate
                                }}</span>
                            </div>
                        </button>
                    }
                }
            </div>
            <div
                class="relative h-full w-1/2 flex-1 overflow-hidden rounded-lg border border-base-300 shadow"
                (dragover)="onEnter($event)"
                (dragenter)="onEnter($event)"
                (window:drop)="hideOverlay($event)"
            >
                <div class="h-full w-full overflow-auto">
                    @if (!selected_playlist) {
                        <signage-media-list
                            [playlist_count]="(playlists | async)?.length"
                        ></signage-media-list>
                    }
                    @if (selected_playlist) {
                        <signage-playlist-media-list
                            [playlist]="selected_playlist"
                            [playlist_count]="(playlists | async)?.length"
                        ></signage-playlist-media-list>
                    }
                </div>
                @if (show_dropzone) {
                    <div
                        class="absolute inset-0"
                        (dragleave)="hideOverlay($event)"
                        (drop)="previewFile($event)"
                    >
                        <div
                            class="absolute inset-0 bg-base-content opacity-60"
                        ></div>
                        <div
                            class="absolute inset-4 flex flex-col items-center justify-center space-y-4 rounded-2xl border-4 border-dashed border-base-300 text-base-100"
                        >
                            <icon class="text-6xl">cloud_upload</icon>
                            <p>
                                {{
                                    'APP.CONCIERGE.SIGNAGE_MEDIA_DROP_UPLOAD'
                                        | translate
                                }}
                            </p>
                        </div>
                        <input
                            type="file"
                            (change)="previewFile($event)"
                            class="absolute inset-0 opacity-0"
                        />
                    </div>
                }
            </div>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;a948d1e278a7b95fd5dfd86e884f488f14cbb62f9cb471baf2ad93a52383c4aa;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/signage/signage-media.component.ts */\n:host {\n  min-height: 100%;\n}\n/*# sourceMappingURL=signage-media.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaComponent, { className: "SignageMediaComponent", filePath: "apps/concierge/src/app/signage/signage-media.component.ts", lineNumber: 166 });
})();

// apps/concierge/src/app/signage/signage-topbar.component.ts
var _SignageTopbarComponent = class _SignageTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(SignageStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
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
};
_SignageTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SignageTopbarComponent_BaseFactory;
  return function SignageTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275SignageTopbarComponent_BaseFactory || (\u0275SignageTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SignageTopbarComponent)))(__ngFactoryType__ || _SignageTopbarComponent);
  };
})();
_SignageTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageTopbarComponent, selectors: [["signage-topbar"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "flex", "h-20", "items-center", "space-x-2", "border-b", "border-base-200", "bg-base-100", "px-4"]], template: function SignageTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 0);
  }
}, styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=signage-topbar.component.css.map */"] });
var SignageTopbarComponent = _SignageTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageTopbarComponent, [{
    type: Component,
    args: [{ selector: "signage-topbar", template: `
        <div
            class="flex h-20 items-center space-x-2 border-b border-base-200 bg-base-100 px-4"
        >
            <!-- <mat-form-field appearance="outline">
                <mat-select
                    multiple
                    [(ngModel)]="zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                >
                    <mat-option
                        *ngFor="let level of levels | async"
                        [value]="level.id"
                    >
                        {{ level.display_name || level.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-slide-toggle
                class="m-2"
                [ngModel]="(filters | async)?.only_onsite"
                (ngModelChange)="setFilters({ only_onsite: $event })"
                ><div class="text-xs">Onsite Only</div></mat-slide-toggle
            >
            <div class="flex-1 w-2"></div>
            <searchbar
                class="mr-2"
                (modelChange)="setSearch($event)"
            ></searchbar> -->
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;598beeb1039b1ab45f9544c34b6ccfd79f95c38cdc3862574ac547cac62c7acc;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/signage/signage-topbar.component.ts */\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=signage-topbar.component.css.map */\n"] }]
  }], null, null);
})();
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
    \u0275\u0275conditionalCreate(2, SignageZonesComponent_Conditional_8_For_2_Conditional_2_Template, 3, 2);
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
function SignageZonesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "search-overlay", 19);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("selected", function SignageZonesComponent_Conditional_15_Template_search_overlay_selected_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addPlaylist($event));
    })("close", function SignageZonesComponent_Conditional_15_Template_search_overlay_close_0_listener() {
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
var _SignageZonesComponent = class _SignageZonesComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(SignageStateService);
    this._route = inject(ActivatedRoute);
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
      const method = trigger ? Oc : Fc;
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
      const method = trigger ? Oc : Fc;
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
      const method = trigger ? Oc : Fc;
      yield method(item.id, { playlists, version: zone.version }, "patch").toPromise().catch((e) => {
        item.playlists = old_playlist;
        this._state.changed();
        throw e;
      });
      notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REORDER" : "APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_REORDER"));
      this._state.changed();
    });
  }
};
_SignageZonesComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SignageZonesComponent_BaseFactory;
  return function SignageZonesComponent_Factory(__ngFactoryType__) {
    return (\u0275SignageZonesComponent_BaseFactory || (\u0275SignageZonesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SignageZonesComponent)))(__ngFactoryType__ || _SignageZonesComponent);
  };
})();
_SignageZonesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageZonesComponent, selectors: [["signage-zones"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 14, consts: [[1, "relative", "flex", "h-full", "w-full", "space-x-4", "overflow-visible"], ["sidebar", "", 1, "flex", "h-full", "w-64", "flex-col", "space-y-4", "py-4"], [1, "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "h-1/2", "w-full", "flex-1", "space-y-2", "overflow-auto"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col", "space-y-4", "overflow-auto", "rounded-lg", "border", "border-base-300", "p-4", "shadow"], [1, "flex", "flex-1", "flex-col", 3, "item", "name"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], [3, "item_list"], ["matRipple", "", 1, "z-10", "flex", "min-h-12", "w-full", "items-center", "truncate", "rounded-3xl", "px-6", "hover:bg-base-200", 3, "routerLink", "queryParams"], [1, "relative", "z-0", "flex", "items-center", "space-x-2"], [1, "w-6"], [1, "absolute", "left-6", "top-1/2", "h-16", "w-4", "-translate-y-full", "border-b-2", "border-l-2", "border-base-300"], ["matRipple", "", 1, "flex", "min-h-12", "w-full", "items-center", "truncate", "rounded-3xl", "px-6", "hover:bg-base-200", 3, "routerLink", "queryParams"], [1, "text-6xl"], [1, "text-center"], [1, "flex", "flex-1", "flex-col", 3, "add", "remove", "ondrop", "item", "name"], [3, "selected", "close", "item_list"]], template: function SignageZonesComponent_Template(rf, ctx) {
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
    \u0275\u0275conditionalCreate(8, SignageZonesComponent_Conditional_8_Template, 4, 2, "div", 5);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275conditionalBranchCreate(10, SignageZonesComponent_Conditional_10_Template, 6, 3, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 7);
    \u0275\u0275conditionalCreate(12, SignageZonesComponent_Conditional_12_Template, 4, 8, "signage-item-playlists", 8);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275conditionalBranchCreate(14, SignageZonesComponent_Conditional_14_Template, 6, 3, "div", 9);
    \u0275\u0275conditionalCreate(15, SignageZonesComponent_Conditional_15_Template, 2, 3, "search-overlay", 10);
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
    \u0275\u0275conditional(ctx.adding ? 15 : -1);
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatRipple, IconComponent, RouterLink, SearchOverlayComponent, SignageItemPlaylistsComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
var SignageZonesComponent = _SignageZonesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageZonesComponent, [{
    type: Component,
    args: [{ selector: "signage-zones", template: `
        <div class="relative flex h-full w-full space-x-4 overflow-visible">
            <div sidebar class="flex h-full w-64 flex-col space-y-4 py-4">
                <h3 class="text-center text-xl font-medium">
                    {{ 'APP.CONCIERGE.SIGNAGE_ZONES' | translate }}
                </h3>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="'COMMON.SEARCH' | translate"
                        [ngModel]="search.getValue()"
                        (ngModelChange)="search.next($event)"
                    />
                </mat-form-field>
                @if ((zones | async)?.length > 0) {
                    <div class="h-1/2 w-full flex-1 space-y-2 overflow-auto">
                        @for (zone of zones | async; track zone.id) {
                            <a
                                matRipple
                                class="z-10 flex min-h-12 w-full items-center truncate rounded-3xl px-6 hover:bg-base-200"
                                [class.!bg-secondary]="
                                    selected.getValue() === zone.id
                                "
                                [class.text-secondary-content]="
                                    selected.getValue() === zone.id
                                "
                                [routerLink]="[]"
                                [queryParams]="{ zone: zone.id }"
                            >
                                {{ zone.display_name || zone.name }}
                            </a>
                            @if (
                                (active_zone | async)?.id === zone.id &&
                                !switching
                            ) {
                                @for (
                                    trigger of triggers | async;
                                    track trigger.id
                                ) {
                                    <div
                                        class="relative z-0 flex items-center space-x-2"
                                    >
                                        <div class="w-6">
                                            <div
                                                class="absolute left-6 top-1/2 h-16 w-4 -translate-y-full border-b-2 border-l-2 border-base-300"
                                            ></div>
                                        </div>
                                        <a
                                            matRipple
                                            class="flex min-h-12 w-full items-center truncate rounded-3xl px-6 hover:bg-base-200"
                                            [class.!bg-secondary]="
                                                selected_trigger.getValue() ===
                                                trigger?.id
                                            "
                                            [class.text-secondary-content]="
                                                selected_trigger.getValue() ===
                                                trigger?.id
                                            "
                                            [routerLink]="[]"
                                            [queryParams]="{
                                                zone: zone.id,
                                                trigger: trigger?.id,
                                            }"
                                        >
                                            {{
                                                trigger?.display_name ||
                                                    trigger?.name ||
                                                    'Trigger'
                                            }}
                                        </a>
                                    </div>
                                }
                            }
                        }
                    </div>
                } @else {
                    <div
                        class="flex flex-col items-center justify-center space-y-2 p-8 opacity-30"
                    >
                        <icon class="text-6xl">hide_image</icon>
                        <p class="text-center">
                            {{
                                (search.getValue()
                                    ? 'APP.CONCIERGE.SIGNAGE_ZONES_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.SIGNAGE_ZONES_EMPTY'
                                ) | translate
                            }}
                        </p>
                    </div>
                }
            </div>
            <div
                class="relative flex h-full w-1/2 flex-1 flex-col space-y-4 overflow-auto rounded-lg border border-base-300 p-4 shadow"
            >
                @if (active_zone | async) {
                    <signage-item-playlists
                        class="flex flex-1 flex-col"
                        [item]="
                            (active_trigger | async) || (active_zone | async)
                        "
                        [name]="(active_trigger | async) ? 'trigger' : 'zone'"
                        (add)="this.adding = true"
                        (remove)="removePlaylist($event)"
                        (ondrop)="drop($event)"
                    ></signage-item-playlists>
                } @else {
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center space-y-2 opacity-30"
                    >
                        <icon class="text-6xl">desktop_windows</icon>
                        <p>
                            {{
                                'APP.CONCIERGE.SIGNAGE_ZONES_SELECT' | translate
                            }}
                        </p>
                    </div>
                }
                @if (adding) {
                    <search-overlay
                        [item_list]="playlists | async"
                        (selected)="addPlaylist($event)"
                        (close)="adding = false"
                    ></search-overlay>
                }
            </div>
        </div>
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageZonesComponent, { className: "SignageZonesComponent", filePath: "apps/concierge/src/app/signage/signage-zones.component.ts", lineNumber: 155 });
})();

// apps/concierge/src/app/signage/signage.component.ts
var _c08 = ["app-new-staff", ""];
var _forTrack06 = ($index, $item) => $item.id;
function SignageComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function SignageComponent_Conditional_8_Template_button_click_0_listener() {
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
var _SignageComponent = class _SignageComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(SignageStateService);
    this._router = inject(Router);
    this.loading = this._state.loading;
    this.links = [];
    this.active_link = this.links[0]?.id;
    this.previewFile = (event) => this._state.previewFileFromInput(event);
  }
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
  ngOnInit() {
    this.links = [
      { id: "Media", name: i18n("APP.CONCIERGE.SIGNAGE_MEDIA") },
      { id: "Displays", name: i18n("APP.CONCIERGE.SIGNAGE_DISPLAYS") },
      { id: "Zones", name: i18n("APP.CONCIERGE.SIGNAGE_ZONES") }
    ];
    this.active_link = this.links[0].id;
    this.subscription("route.query", this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.active_link = this.links.find((_) => this._router.url.includes(_.id.toLowerCase()))?.id || this.active_link;
      }
    }));
    this.active_link = this.links.find((_) => this._router.url.includes(_.id.toLowerCase()))?.id || this.active_link;
  }
};
_SignageComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SignageComponent_BaseFactory;
  return function SignageComponent_Factory(__ngFactoryType__) {
    return (\u0275SignageComponent_BaseFactory || (\u0275SignageComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SignageComponent)))(__ngFactoryType__ || _SignageComponent);
  };
})();
_SignageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageComponent, selectors: [["", "app-new-staff", ""]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c08, decls: 16, vars: 5, consts: [["tabPanel", ""], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "h-28", "items-center", "justify-between", "p-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 1, "w-40"], [1, "px-8"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "h-1/2", "flex-1", "overflow-auto", "px-8", "py-4"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], ["mat-tab-link", "", 3, "click", "routerLink", "active"]], template: function SignageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 2)(4, "div", 3)(5, "h2", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SignageComponent_Conditional_8_Template, 3, 3, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6)(10, "nav", 7);
    \u0275\u0275repeaterCreate(11, SignageComponent_For_12_Template, 3, 5, "a", 8, _forTrack06);
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
    \u0275\u0275conditional(ctx.active_link === "Media" || ctx.active_link === "Displays" ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("tabPanel", tabPanel_r5);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.links);
  }
}, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, MatRipple, RouterOutlet, RouterLink, MatTabNav, MatTabNavPanel, MatTabLink, LowerCasePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=signage.component.css.map */"] });
var SignageComponent = _SignageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageComponent, [{
    type: Component,
    args: [{ selector: "[app-new-staff]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex h-28 items-center justify-between p-8">
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.SIGNAGE_HEADER' | translate }}
                    </h2>
                    @if (
                        active_link === 'Media' || active_link === 'Displays'
                    ) {
                        <button
                            btn
                            matRipple
                            class="w-40"
                            (click)="newItem(active_link)"
                        >
                            {{
                                (active_link === 'Displays'
                                    ? 'APP.CONCIERGE.SIGNAGE_DISPLAYS_ADD'
                                    : 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD'
                                ) | translate
                            }}
                        </button>
                    }
                </div>
                <div class="px-8">
                    <nav mat-tab-nav-bar [tabPanel]="tabPanel">
                        @for (link of links; track link.id) {
                            <a
                                mat-tab-link
                                [routerLink]="
                                    '/signage/' + (link.id | lowercase)
                                "
                                (click)="active_link = link.id"
                                [active]="active_link == link.id"
                            >
                                {{ link.name }}
                            </a>
                        }
                    </nav>
                </div>
                <mat-tab-nav-panel
                    class="h-1/2 flex-1 overflow-auto px-8 py-4"
                    #tabPanel
                >
                    <router-outlet></router-outlet>
                </mat-tab-nav-panel>
            </main>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;08c828c36224658230d6844bbbe8551e02a5c30c320aa5e48c90063783b9b8fa;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/signage/signage.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=signage.component.css.map */\n"] }]
  }], null, null);
})();
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
var _SignageModule = class _SignageModule {
};
_SignageModule.\u0275fac = function SignageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageModule)();
};
_SignageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SignageModule });
_SignageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  ComponentsModule,
  RouterModule.forChild(ROUTES),
  MatTabsModule,
  DragDropModule
] });
var SignageModule = _SignageModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageModule, [{
    type: NgModule,
    args: [{
      declarations: [...COMPONENTS],
      imports: [
        CommonModule,
        FormsModule,
        UIModule,
        ComponentsModule,
        RouterModule.forChild(ROUTES),
        MatTabsModule,
        DragDropModule
      ]
    }]
  }], null, null);
})();
export {
  COMPONENTS,
  SignageModule
};
//# sourceMappingURL=signage.module-AI5DPZOQ.js.map
