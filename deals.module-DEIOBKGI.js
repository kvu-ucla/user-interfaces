import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  CommonModule,
  Component,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  Injectable,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  OrganisationService,
  ReactiveFormsModule,
  RequiredValidator,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SimpleTableComponent,
  TranslatePipe,
  UIModule,
  UploadButtonComponent,
  Validators,
  addMonths,
  catchError,
  combineLatest,
  du,
  filter,
  firstTruthyValueFrom,
  getInvalidFields,
  hu,
  i18n,
  inject,
  lastValueFrom,
  map,
  nextValueFrom,
  notifyError,
  of,
  openConfirmModal,
  output,
  randomString,
  setClassMetadata,
  shareReplay,
  signal,
  startWith,
  switchMap,
  tap,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵgetInheritedFactory,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OARD3L5N.js";

// apps/concierge/src/app/deals/deals.component.ts
var _c0 = ["app-deals", ""];
var _DealsComponent = class _DealsComponent {
};
_DealsComponent.\u0275fac = function DealsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DealsComponent)();
};
_DealsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealsComponent, selectors: [["", "app-deals", ""]], standalone: false, attrs: _c0, decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function DealsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "router-outlet");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=deals.component.css.map */"] });
var DealsComponent = _DealsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealsComponent, [{
    type: Component,
    args: [{ selector: "[app-deals]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <router-outlet></router-outlet>
            </main>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;08c828c36224658230d6844bbbe8551e02a5c30c320aa5e48c90063783b9b8fa;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/deals/deals.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=deals.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealsComponent, { className: "DealsComponent", filePath: "apps/concierge/src/app/deals/deals.component.ts", lineNumber: 27 });
})();

// apps/concierge/src/app/deals/deal-modal.component.ts
var _c02 = (a0) => ["/deals-n-offers", "manage", a0];
function DealModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.deal.details, " ");
  }
}
var _DealModalComponent = class _DealModalComponent {
  constructor() {
    this.deal = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.remove = output();
  }
  close() {
    this._dialog_ref.close();
  }
};
_DealModalComponent.\u0275fac = function DealModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DealModalComponent)();
};
_DealModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealModalComponent, selectors: [["app-deal-modal"]], outputs: { remove: "remove" }, decls: 39, vars: 24, consts: [[1, "relative", "bg-base-100"], [1, "relative", "h-48", "w-[32rem]", "max-w-[calc(100vw-2rem)]"], ["auth", "", "alt", "Deal Image", 1, "h-full", "w-full", "object-cover", 3, "source"], [1, "absolute", "bottom-2", "left-2", "max-w-full", "truncate", "rounded", "bg-info", "px-2", "py-1", "text-xs", "text-info-content", "shadow"], [1, "flex", "space-x-2", "p-2"], [1, "w-auto", "px-2", "text-xl", "font-medium"], [1, "flex-1"], ["btn", "", "matRipple", "", 1, "space-x-2", 3, "click", "routerLink"], [1, "text-2xl"], [1, "pr-2"], ["btn", "", "matRipple", "", 1, "inverse", "error", "space-x-2", 3, "click"], [1, "text-2xl", "text-error"], [1, "space-y-2", "p-4"], [1, "font-medium"], [1, "pb-4", "text-sm"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "right-2", "top-2", "bg-base-100"]], template: function DealModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275conditionalCreate(3, DealModalComponent_Conditional_3_Template, 2, 1, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "header", 4)(5, "h3", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 6);
    \u0275\u0275elementStart(8, "a", 7);
    \u0275\u0275listener("click", function DealModalComponent_Template_a_click_8_listener() {
      return ctx.close();
    });
    \u0275\u0275elementStart(9, "icon", 8);
    \u0275\u0275text(10, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 9);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 10);
    \u0275\u0275listener("click", function DealModalComponent_Template_button_click_14_listener() {
      return ctx.remove.emit();
    });
    \u0275\u0275elementStart(15, "icon", 11);
    \u0275\u0275text(16, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 9);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 12)(21, "h4", 13);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 14);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h4", 13);
    \u0275\u0275text(27, "Validity Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 14);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "h4", 13);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 14);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "button", 15)(37, "icon");
    \u0275\u0275text(38, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("source", ctx.deal.image);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.deal.details ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.deal.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c02, ctx.deal.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "COMMON.EDIT"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "COMMON.REMOVE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 15, "COMMON.DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.deal.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 17, ctx.deal.expires_at, "mediumDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 20, "COMMON.TERMS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.deal.description);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  MatDialogModule,
  MatDialogClose,
  AuthenticatedImageDirective,
  TranslatePipe,
  IconComponent,
  RouterModule,
  RouterLink,
  MatRippleModule,
  MatRipple
], encapsulation: 2 });
var DealModalComponent = _DealModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealModalComponent, [{
    type: Component,
    args: [{ selector: "app-deal-modal", template: `
        <div class="relative bg-base-100">
            <div class="relative h-48 w-[32rem] max-w-[calc(100vw-2rem)]">
                <img
                    class="h-full w-full object-cover"
                    auth
                    [source]="deal.image"
                    alt="Deal Image"
                />
                @if (deal.details) {
                    <div
                        class="absolute bottom-2 left-2 max-w-full truncate rounded bg-info px-2 py-1 text-xs text-info-content shadow"
                    >
                        {{ deal.details }}
                    </div>
                }
            </div>
            <header class="flex space-x-2 p-2">
                <h3 class="w-auto px-2 text-xl font-medium">{{ deal.name }}</h3>
                <div class="flex-1"></div>
                <a
                    btn
                    matRipple
                    class="space-x-2"
                    [routerLink]="['/deals-n-offers', 'manage', deal.id]"
                    (click)="close()"
                >
                    <icon class="text-2xl">edit</icon>
                    <div class="pr-2">{{ 'COMMON.EDIT' | translate }}</div>
                </a>
                <button
                    btn
                    matRipple
                    class="inverse error space-x-2"
                    (click)="remove.emit()"
                >
                    <icon class="text-2xl text-error">delete</icon>
                    <div class="pr-2">{{ 'COMMON.REMOVE' | translate }}</div>
                </button>
            </header>
            <div class="space-y-2 p-4">
                <h4 class="font-medium">
                    {{ 'COMMON.DESCRIPTION' | translate }}
                </h4>
                <p class="pb-4 text-sm">{{ deal.description }}</p>
                <h4 class="font-medium">Validity Period</h4>
                <p class="pb-4 text-sm">
                    {{ deal.expires_at | date: 'mediumDate' }}
                </p>
                <h4 class="font-medium">{{ 'COMMON.TERMS' | translate }}</h4>
                <p class="pb-4 text-sm">{{ deal.description }}</p>
            </div>
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute right-2 top-2 bg-base-100"
            >
                <icon>close</icon>
            </button>
        </div>
    `, imports: [
      CommonModule,
      MatDialogModule,
      AuthenticatedImageDirective,
      TranslatePipe,
      IconComponent,
      RouterModule,
      MatRippleModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealModalComponent, { className: "DealModalComponent", filePath: "apps/concierge/src/app/deals/deal-modal.component.ts", lineNumber: 89 });
})();

// apps/concierge/src/app/deals/deals.service.ts
var _DealsService = class _DealsService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._changed = new BehaviorSubject(0);
    this.loading = signal(false);
    this.deals$ = combineLatest([
      this._org.active_building,
      this._changed
    ]).pipe(filter(([b]) => !!b?.id), switchMap(([bld]) => {
      this.loading.set(true);
      return hu(bld.id, "deals-n-offers").pipe(catchError(() => of({ details: [] })));
    }), map(({ details }) => details instanceof Array ? details : []), tap(() => this.loading.set(false)), startWith([]), shareReplay(1));
  }
  async saveDeal(deal) {
    const metadata = await lastValueFrom(hu(this._org.building.id, "deals-n-offers")).catch(() => null);
    let deals = metadata?.details instanceof Array ? metadata.details : [];
    if (deal.id) {
      deals = deals.filter((d) => d.id !== deal.id);
    } else
      deal.id = `deal-${randomString(8)}`;
    deals.push(deal);
    await lastValueFrom(du(this._org.building.id, {
      name: "deals-n-offers",
      description: "List of deals and offers",
      details: deals
    }));
    this._changed.next(Date.now());
    return deal;
  }
  async removeDeal(deal, confirm = true) {
    if (confirm) {
      const result = await openConfirmModal({
        title: i18n("APP.CONCIERGE.DEALS_REMOVE_TITLE"),
        content: i18n("APP.CONCIERGE.DEALS_REMOVE_BODY"),
        confirm_text: i18n("COMMON.REMOVE"),
        icon: { content: "delete" }
      }, this._dialog);
      if (result?.reason !== "done")
        return false;
      result.close();
    }
    const metadata = await lastValueFrom(hu(this._org.building.id, "deals-n-offers")).catch(() => null);
    let deals = metadata?.details instanceof Array ? metadata.details : [];
    deals = deals.filter((d) => d.id !== deal.id);
    await lastValueFrom(du(this._org.building.id, {
      name: "deals-n-offers",
      description: "List of deals and offers",
      details: deals
    }));
    this._changed.next(Date.now());
    return true;
  }
  viewDeal(deal) {
    const ref = this._dialog.open(DealModalComponent, { data: deal });
    this.subscription("view_remove", ref.componentInstance.remove.subscribe(() => {
      this.removeDeal(deal).then((s) => s ? ref.close() : "");
    }));
    ref.afterClosed().subscribe(() => this.unsub("view_remove"));
  }
};
_DealsService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DealsService_BaseFactory;
  return function DealsService_Factory(__ngFactoryType__) {
    return (\u0275DealsService_BaseFactory || (\u0275DealsService_BaseFactory = \u0275\u0275getInheritedFactory(_DealsService)))(__ngFactoryType__ || _DealsService);
  };
})();
_DealsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DealsService, factory: _DealsService.\u0275fac, providedIn: "root" });
var DealsService = _DealsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/deals/deals-list.component.ts
var _c03 = () => ["/deals-n-offers", "manage"];
var _c1 = (a0, a1) => ({ key: "image", name: a0, content: a1, size: "5.5rem", sortable: false });
var _c2 = (a0) => ({ key: "name", name: a0 });
var _c3 = (a0, a1) => ({ key: "description", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "expires_at", name: a0, content: a1 });
var _c5 = (a0, a1) => ({ key: "terms", name: a0, content: a1 });
var _c6 = (a0) => ({ key: "actions", name: " ", size: "3.5rem", content: a0, sortable: false });
var _c7 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _c8 = (a0) => ["/deals-n-offers", "manage", a0];
var _forTrack0 = ($index, $item) => $item.id;
function DealsListComponent_Conditional_31_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deal_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", deal_r2.details, " ");
  }
}
function DealsListComponent_Conditional_31_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 24);
    \u0275\u0275listener("click", function DealsListComponent_Conditional_31_For_2_Template_button_click_1_listener() {
      const deal_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.view(deal_r2));
    });
    \u0275\u0275elementStart(2, "div", 25);
    \u0275\u0275element(3, "img", 26);
    \u0275\u0275conditionalCreate(4, DealsListComponent_Conditional_31_For_2_Conditional_4_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28)(6, "h3", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 30);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const deal_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", deal_r2.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(deal_r2.details ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", deal_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 4, deal_r2.expires_at, "mediumDate"), " ");
  }
}
function DealsListComponent_Conditional_31_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "img", 31);
    \u0275\u0275elementStart(2, "div", 32)(3, "p", 33);
    \u0275\u0275text(4, " No Deals or Offers Available ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 30);
    \u0275\u0275text(6, " Add a new deal or offer to get started. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 8);
    \u0275\u0275text(8, " Add a Deal or Offer ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c03));
  }
}
function DealsListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, DealsListComponent_Conditional_31_For_2_Template, 11, 7, "div", null, _forTrack0);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275conditionalCreate(4, DealsListComponent_Conditional_31_Conditional_4_Template, 9, 2, "div", 23);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 1, ctx_r2.deals));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_2_0 = \u0275\u0275pipeBind1(5, 3, ctx_r2.deals)) == null ? null : tmp_2_0.length) <= 0 ? 4 : -1);
  }
}
function DealsListComponent_Conditional_32_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "img", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deal_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("alt", \u0275\u0275interpolate(deal_r4.name))("src", deal_r4.image, \u0275\u0275sanitizeUrl);
  }
}
function DealsListComponent_Conditional_32_ng_template_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "No description available");
    \u0275\u0275elementEnd();
  }
}
function DealsListComponent_Conditional_32_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, DealsListComponent_Conditional_32_ng_template_10_Conditional_2_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r5, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r5 ? 2 : -1);
  }
}
function DealsListComponent_Conditional_32_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r6 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, date_r6, "mediumDate"), " ");
  }
}
function DealsListComponent_Conditional_32_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "button", 42)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "mat-menu", null, 4)(6, "button", 43);
    \u0275\u0275listener("click", function DealsListComponent_Conditional_32_ng_template_14_Template_button_click_6_listener() {
      const deal_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.view(deal_r8));
    });
    \u0275\u0275elementStart(7, "div", 44)(8, "icon", 10);
    \u0275\u0275text(9, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "a", 45)(14, "div", 44)(15, "icon", 10);
    \u0275\u0275text(16, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 46);
    \u0275\u0275listener("click", function DealsListComponent_Conditional_32_ng_template_14_Template_button_click_20_listener() {
      const deal_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(deal_r8));
    });
    \u0275\u0275elementStart(21, "div", 44)(22, "icon", 47);
    \u0275\u0275text(23, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const deal_r8 = ctx.row;
    const menu_r9 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r9);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 5, "APP.CONCIERGE.DEALS_VIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c8, deal_r8.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 7, "APP.CONCIERGE.DEALS_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 9, "APP.CONCIERGE.DEALS_REMOVE"), " ");
  }
}
function DealsListComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "simple-table", 35);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, DealsListComponent_Conditional_32_ng_template_8_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, DealsListComponent_Conditional_32_ng_template_10_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, DealsListComponent_Conditional_32_ng_template_12_Template, 3, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(14, DealsListComponent_Conditional_32_ng_template_14_Template, 27, 13, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const image_template_r10 = \u0275\u0275reference(9);
    const description_template_r11 = \u0275\u0275reference(11);
    const valid_until_template_r12 = \u0275\u0275reference(13);
    const actions_template_r13 = \u0275\u0275reference(15);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", \u0275\u0275pipeBind1(2, 3, ctx_r2.deals))("sortable", true)("columns", \u0275\u0275pureFunction6(31, _c7, \u0275\u0275pureFunction2(15, _c1, \u0275\u0275pipeBind1(3, 5, "COMMON.IMAGE"), image_template_r10), \u0275\u0275pureFunction1(18, _c2, \u0275\u0275pipeBind1(4, 7, "FORM.NAME")), \u0275\u0275pureFunction2(20, _c3, \u0275\u0275pipeBind1(5, 9, "COMMON.DESCRIPTION"), description_template_r11), \u0275\u0275pureFunction2(23, _c4, \u0275\u0275pipeBind1(6, 11, "COMMON.VALID_UNTIL"), valid_until_template_r12), \u0275\u0275pureFunction2(26, _c5, \u0275\u0275pipeBind1(7, 13, "COMMON.TERMS"), description_template_r11), \u0275\u0275pureFunction1(29, _c6, actions_template_r13)));
  }
}
var _DealsListComponent = class _DealsListComponent {
  constructor() {
    this._deals = inject(DealsService);
    this.display = signal("list");
    this.deals = this._deals.deals$;
    this.date = Date.now();
    this.remove = (deal) => this._deals.removeDeal(deal);
    this.view = (d) => this._deals.viewDeal(d);
  }
};
_DealsListComponent.\u0275fac = function DealsListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DealsListComponent)();
};
_DealsListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealsListComponent, selectors: [["deals-list"]], decls: 33, vars: 20, consts: [["image_template", ""], ["description_template", ""], ["valid_until_template", ""], ["actions_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-8", "py-4", "pt-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "routerLink"], [1, "ml-2"], [1, "text-2xl"], ["filters", "", 1, "flex", "space-x-2", "px-8", "pb-4"], [1, "flex", "items-center"], ["btn", "", "matRipple", "", "name", "deals-list", 1, "rounded-l", "rounded-r-none", "px-2", 3, "click", "matTooltip"], ["btn", "", "matRipple", "", "name", "deals-grid", 1, "rounded-l-none", "rounded-r", "px-2", 3, "click", "matTooltip"], [1, "no-subscript", 3, "ngModelChange", "ngModel"], ["appearance", "outline", 1, "no-subscript"], ["placeholder", "All Types"], ["value", "all"], ["value", "active"], ["value", "inactive"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], [1, "grid", "grid-cols-2", "gap-4", "md:grid-cols-3", "lg:grid-cols-4", "xl:grid-cols-5"], [1, "col-span-6", "flex", "w-full", "flex-col", "items-center", "justify-center", "rounded-lg", "bg-base-200", "p-16"], [1, "mx-auto", "flex", "flex-col", "items-center", "overflow-hidden", "rounded-lg", "border", "border-base-300", "bg-base-100", "shadow", 3, "click"], [1, "relative", "h-36", "w-48", "max-w-full", "overflow-hidden", "rounded-b-lg", "bg-base-200"], ["alt", "Deal Image", 1, "h-full", "w-full", "object-cover", 3, "src"], [1, "absolute", "bottom-2", "left-2", "max-w-full", "truncate", "rounded", "bg-info", "px-2", "py-1", "text-xs", "text-info-content", "shadow"], [1, "w-full", "px-4", "py-2", "text-left"], [1, "truncate", "font-bold"], [1, "text-sm", "opacity-50"], ["src", "assets/icons/no-deals.svg", "alt", "No Deals or Offers Available", 1, "mb-8", "w-48"], [1, "flex", "flex-col", "items-center", "space-y-4", "text-center"], [1, "text-lg", "font-bold"], [1, "min-w-[56rem]"], [1, "text-sm", 3, "data", "sortable", "columns"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "p-2"], [1, "h-16", "w-16", "rounded", "bg-base-200", "object-cover", 3, "src", "alt"], [1, "flex", "px-4", "py-2", "text-sm"], [1, "opacity-30"], [1, "flex", "p-4"], [1, "flex", "h-full", "w-full", "items-center", "justify-end", "p-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 1, "min-w-48", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], [1, "text-2xl", "text-error"]], template: function DealsListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "h2", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 8)(6, "div", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "icon", 10);
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "button", 13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("click", function DealsListComponent_Template_button_click_13_listener() {
      return ctx.display.set("list");
    });
    \u0275\u0275elementStart(15, "icon", 10);
    \u0275\u0275text(16, "list");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 14);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("click", function DealsListComponent_Template_button_click_17_listener() {
      return ctx.display.set("grid");
    });
    \u0275\u0275elementStart(19, "icon", 10);
    \u0275\u0275text(20, "browse");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "a-date-field", 15);
    \u0275\u0275twoWayListener("ngModelChange", function DealsListComponent_Template_a_date_field_ngModelChange_21_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.date, $event) || (ctx.date = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-form-field", 16)(23, "mat-select", 17)(24, "mat-option", 18);
    \u0275\u0275text(25, "All Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-option", 19);
    \u0275\u0275text(27, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-option", 20);
    \u0275\u0275text(29, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 21);
    \u0275\u0275conditionalCreate(31, DealsListComponent_Conditional_31_Template, 6, 5, "div", 22)(32, DealsListComponent_Conditional_32_Template, 16, 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, "APP.CONCIERGE.DEALS_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c03));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 13, "APP.CONCIERGE.DEALS_ADD"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("inverse", ctx.display() !== "list");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 15, "COMMON.LIST"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("inverse", ctx.display() !== "grid");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(18, 17, "COMMON.GRID"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.date);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx.display() === "grid" ? 31 : 32);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  TranslatePipe,
  RouterModule,
  RouterLink,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip,
  DateFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  SimpleTableComponent,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger
], encapsulation: 2 });
var DealsListComponent = _DealsListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealsListComponent, [{
    type: Component,
    args: [{ selector: `deals-list`, template: `
        <div class="absolute inset-0 flex flex-col">
            <div class="flex items-center justify-between px-8 py-4 pt-8">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.DEALS_HEADER' | translate }}
                </h2>
                <a btn matRipple [routerLink]="['/deals-n-offers', 'manage']">
                    <div class="ml-2">
                        {{ 'APP.CONCIERGE.DEALS_ADD' | translate }}
                    </div>
                    <icon class="text-2xl">add</icon>
                </a>
            </div>
            <div filters class="flex space-x-2 px-8 pb-4">
                <div class="flex items-center">
                    <button
                        btn
                        matRipple
                        name="deals-list"
                        class="rounded-l rounded-r-none px-2"
                        [class.inverse]="display() !== 'list'"
                        (click)="display.set('list')"
                        [matTooltip]="'COMMON.LIST' | translate"
                    >
                        <icon class="text-2xl">list</icon>
                    </button>
                    <button
                        btn
                        matRipple
                        name="deals-grid"
                        class="rounded-l-none rounded-r px-2"
                        [class.inverse]="display() !== 'grid'"
                        (click)="display.set('grid')"
                        [matTooltip]="'COMMON.GRID' | translate"
                    >
                        <icon class="text-2xl">browse</icon>
                    </button>
                </div>
                <a-date-field
                    [(ngModel)]="date"
                    class="no-subscript"
                ></a-date-field>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select placeholder="All Types">
                        <mat-option value="all">All Types</mat-option>
                        <mat-option value="active">Active</mat-option>
                        <mat-option value="inactive">Inactive</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="relative h-1/2 w-full flex-1 overflow-auto px-8">
                @if (display() === 'grid') {
                    <div
                        class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                    >
                        @for (deal of deals | async; track deal.id) {
                            <div>
                                <button
                                    class="mx-auto flex flex-col items-center overflow-hidden rounded-lg border border-base-300 bg-base-100 shadow"
                                    (click)="view(deal)"
                                >
                                    <div
                                        class="relative h-36 w-48 max-w-full overflow-hidden rounded-b-lg bg-base-200"
                                    >
                                        <img
                                            [src]="deal.image"
                                            alt="Deal Image"
                                            class="h-full w-full object-cover"
                                        />
                                        @if (deal.details) {
                                            <div
                                                class="absolute bottom-2 left-2 max-w-full truncate rounded bg-info px-2 py-1 text-xs text-info-content shadow"
                                            >
                                                {{ deal.details }}
                                            </div>
                                        }
                                    </div>
                                    <div class="w-full px-4 py-2 text-left">
                                        <h3 class="truncate font-bold">
                                            {{ deal.name }}
                                        </h3>
                                        <p class="text-sm opacity-50">
                                            {{
                                                deal.expires_at
                                                    | date: 'mediumDate'
                                            }}
                                        </p>
                                    </div>
                                </button>
                            </div>
                        }
                        @if ((deals | async)?.length <= 0) {
                            <div
                                class="col-span-6 flex w-full flex-col items-center justify-center rounded-lg bg-base-200 p-16"
                            >
                                <img
                                    src="assets/icons/no-deals.svg"
                                    alt="No Deals or Offers Available"
                                    class="mb-8 w-48"
                                />
                                <div
                                    class="flex flex-col items-center space-y-4 text-center"
                                >
                                    <p class="text-lg font-bold">
                                        No Deals or Offers Available
                                    </p>
                                    <p class="text-sm opacity-50">
                                        Add a new deal or offer to get started.
                                    </p>
                                    <button
                                        btn
                                        matRipple
                                        [routerLink]="[
                                            '/deals-n-offers',
                                            'manage',
                                        ]"
                                    >
                                        Add a Deal or Offer
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                } @else {
                    <div class="min-w-[56rem]">
                        <simple-table
                            [data]="deals | async"
                            class="text-sm"
                            [sortable]="true"
                            [columns]="[
                                {
                                    key: 'image',
                                    name: 'COMMON.IMAGE' | translate,
                                    content: image_template,
                                    size: '5.5rem',
                                    sortable: false,
                                },
                                {
                                    key: 'name',
                                    name: 'FORM.NAME' | translate,
                                },
                                {
                                    key: 'description',
                                    name: 'COMMON.DESCRIPTION' | translate,
                                    content: description_template,
                                },
                                {
                                    key: 'expires_at',
                                    name: 'COMMON.VALID_UNTIL' | translate,
                                    content: valid_until_template,
                                },
                                {
                                    key: 'terms',
                                    name: 'COMMON.TERMS' | translate,
                                    content: description_template,
                                },
                                {
                                    key: 'actions',
                                    name: ' ',
                                    size: '3.5rem',
                                    content: actions_template,
                                    sortable: false,
                                },
                            ]"
                        ></simple-table>
                    </div>
                    <ng-template #image_template let-deal="row">
                        <div
                            class="flex h-full w-full items-center justify-center p-2"
                        >
                            <img
                                class="h-16 w-16 rounded bg-base-200 object-cover"
                                [src]="deal.image"
                                alt="{{ deal.name }}"
                            />
                        </div>
                    </ng-template>
                    <ng-template #description_template let-data="data">
                        <div class="flex px-4 py-2 text-sm">
                            {{ data }}
                            @if (!data) {
                                <span class="opacity-30"
                                    >No description available</span
                                >
                            }
                        </div>
                    </ng-template>
                    <ng-template #valid_until_template let-date="data">
                        <div class="flex p-4">
                            {{ date | date: 'mediumDate' }}
                        </div>
                    </ng-template>
                    <ng-template #actions_template let-deal="row">
                        <div
                            class="flex h-full w-full items-center justify-end p-1"
                        >
                            <button
                                icon
                                matRipple
                                class="h-12 w-12 rounded"
                                [matMenuTriggerFor]="menu"
                            >
                                <icon>more_vert</icon>
                            </button>
                        </div>
                        <mat-menu #menu="matMenu">
                            <button
                                mat-menu-item
                                class="min-w-48"
                                (click)="view(deal)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">visibility</icon>
                                    <div>
                                        {{
                                            'APP.CONCIERGE.DEALS_VIEW'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <a
                                mat-menu-item
                                [routerLink]="[
                                    '/deals-n-offers',
                                    'manage',
                                    deal.id,
                                ]"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">edit</icon>
                                    <div>
                                        {{
                                            'APP.CONCIERGE.DEALS_EDIT'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </a>
                            <button mat-menu-item (click)="remove(deal)">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl text-error"
                                        >delete</icon
                                    >
                                    <div>
                                        {{
                                            'APP.CONCIERGE.DEALS_REMOVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </ng-template>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      RouterModule,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      DateFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      ReactiveFormsModule,
      SimpleTableComponent,
      MatMenuModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealsListComponent, { className: "DealsListComponent", filePath: "apps/concierge/src/app/deals/deals-list.component.ts", lineNumber: 293 });
})();

// apps/concierge/src/app/deals/deals-manage.component.ts
var _c04 = () => ({ standalone: true });
var _c12 = () => ["/deals-n-offers"];
function DealsManageComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c12));
  }
}
function DealsManageComponent_Conditional_0_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 27)(1, "button", 28);
    \u0275\u0275listener("click", function DealsManageComponent_Conditional_0_Conditional_52_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.SAVE"), " ");
  }
}
function DealsManageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 2)(2, "h2", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DealsManageComponent_Conditional_0_Conditional_5_Template, 3, 2, "a", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 5)(7, "label", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "span", 7);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-form-field", 8);
    \u0275\u0275element(13, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 10);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span", 7);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 8);
    \u0275\u0275element(20, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 12);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 8);
    \u0275\u0275element(25, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "label", 14);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-form-field", 8);
    \u0275\u0275element(30, "textarea", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "label", 16);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-form-field", 8);
    \u0275\u0275element(35, "textarea", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "label", 18);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-form-field", 8);
    \u0275\u0275element(40, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "label", 20);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 21)(45, "mat-form-field", 22);
    \u0275\u0275element(46, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "upload-button", 24);
    \u0275\u0275listener("ngModelChange", function DealsManageComponent_Conditional_0_Template_upload_button_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ image: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "label", 25);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "a-date-field", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(52, DealsManageComponent_Conditional_0_Conditional_52_Template, 4, 3, "footer", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 14, ctx_r1.form.value.id ? "APP.CONCIERGE.DEALS_EDIT" : "APP.CONCIERGE.DEALS_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.loading() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 16, "FORM.NAME"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 18, "COMMON.TYPE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, "COMMON.DETAILS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 22, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 24, "COMMON.TERMS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 26, "COMMON.CODE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 28, "COMMON.IMAGE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(32, _c04))("matTooltip", "Upload Image");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 30, "FORM.EXPIRES_AT"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.loading() ? 52 : -1);
  }
}
function DealsManageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 29);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.DEALS_SAVING"));
  }
}
var _DealsManageComponent = class _DealsManageComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this._service = inject(DealsService);
    this.loading = signal("");
    this.form = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", [Validators.required]),
      type: new FormControl("", [Validators.required]),
      details: new FormControl(""),
      description: new FormControl(""),
      terms: new FormControl(""),
      code: new FormControl(""),
      image: new FormControl(""),
      expires_at: new FormControl(addMonths(Date.now(), 1).valueOf())
    });
  }
  async ngOnInit() {
    await firstTruthyValueFrom(this._org.initialised);
    this.subscription("route.params", this._route.paramMap.subscribe((params) => {
      if (params.has("id"))
        this._loadDeal(params.get("id"));
    }));
  }
  async save() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        fields: getInvalidFields(this.form)
      }));
    }
    this.loading.set("APP.CONCIERGE.DEALS_SAVING");
    await this._service.saveDeal(this.form.value).catch((e) => {
      this.loading.set("");
      notifyError(i18n("APP.CONCIERGE.DEALS_SAVE_ERROR", { error: e }));
      throw e;
    });
    this.loading.set("");
    notifyError(i18n("APP.CONCIERGE.DEALS_SAVED"));
    this._router.navigate(["/deals-n-offers"]);
  }
  async _loadDeal(id) {
    this.loading.set("APP.CONCIERGE.DEALS_LOAD_EXISTING");
    const deal_list = await nextValueFrom(this._service.deals$);
    const deal = deal_list.find((deal2) => deal2.id === id);
    if (deal)
      this.form.patchValue(deal);
    else {
      notifyError(i18n("APP.CONCIERGE.DEALS_NOT_FOUND", { id }));
      this._router.navigate(["/deals-n-offers"]);
    }
    this.loading.set("");
  }
};
_DealsManageComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DealsManageComponent_BaseFactory;
  return function DealsManageComponent_Factory(__ngFactoryType__) {
    return (\u0275DealsManageComponent_BaseFactory || (\u0275DealsManageComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DealsManageComponent)))(__ngFactoryType__ || _DealsManageComponent);
  };
})();
_DealsManageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealsManageComponent, selectors: [["deals-manage"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "absolute", "inset-0", "overflow-auto", "bg-base-100"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "bg-base-100"], [1, "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "items-center", "justify-between", "rounded", "border-none", "bg-base-200", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "mx-auto", "my-2", "flex", "w-[40rem]", "max-w-full", "flex-col", "px-4", "pb-16", 3, "formGroup"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "Name of the deal or offer", "required", ""], ["for", "type"], ["matInput", "", "name", "type", "formControlName", "type", "placeholder", "Type of the deal or offer", "required", ""], ["for", "details"], ["matInput", "", "name", "details", "formControlName", "details", "placeholder", "Summary of the deal or offer", "required", ""], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", "placeholder", "Description of the deal or offer"], ["for", "terms"], ["matInput", "", "name", "terms", "formControlName", "terms", "placeholder", "Terms and conditions of the deal or offer"], ["for", "code"], ["matInput", "", "name", "code", "formControlName", "code", "placeholder", "Deal/Offer Code"], ["for", "image"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", "name", "image", "formControlName", "image", "placeholder", "Image URL"], ["ngModel", "", 3, "ngModelChange", "ngModelOptions", "matTooltip"], ["for", "expires_at"], ["name", "expires_at", "formControlName", "expires_at"], [1, "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "-translate-x-1/2", "items-center", "justify-end", "rounded", "border-none", "bg-base-200", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["diameter", "48"]], template: function DealsManageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DealsManageComponent_Conditional_0_Template, 53, 33, "div", 0)(1, DealsManageComponent_Conditional_1_Template, 5, 3, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
  }
}, dependencies: [
  CommonModule,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  NgModel,
  TranslatePipe,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput,
  RouterModule,
  RouterLink,
  IconComponent,
  DateFieldComponent,
  UploadButtonComponent,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var DealsManageComponent = _DealsManageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealsManageComponent, [{
    type: Component,
    args: [{ selector: `deals-manage`, template: `
        @if (!loading()) {
            <div class="absolute inset-0 overflow-auto bg-base-100">
                <header
                    class="sticky top-0 z-10 mx-auto my-2 flex w-full max-w-[640px] items-center justify-between rounded border-none bg-base-200 px-4 py-2"
                >
                    <h2 class="text-xl font-medium">
                        {{
                            (form.value.id
                                ? 'APP.CONCIERGE.DEALS_EDIT'
                                : 'APP.CONCIERGE.DEALS_NEW'
                            ) | translate
                        }}
                    </h2>
                    @if (!loading()) {
                        <a icon matRipple [routerLink]="['/deals-n-offers']">
                            <icon>close</icon>
                        </a>
                    }
                </header>
                <form
                    class="mx-auto my-2 flex w-[40rem] max-w-full flex-col px-4 pb-16"
                    [formGroup]="form"
                >
                    <label for="name"
                        >{{ 'FORM.NAME' | translate }}
                        <span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="name"
                            formControlName="name"
                            placeholder="Name of the deal or offer"
                            required
                        />
                    </mat-form-field>
                    <label for="type"
                        >{{ 'COMMON.TYPE' | translate }}
                        <span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="type"
                            formControlName="type"
                            placeholder="Type of the deal or offer"
                            required
                        />
                    </mat-form-field>
                    <label for="details">{{
                        'COMMON.DETAILS' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="details"
                            formControlName="details"
                            placeholder="Summary of the deal or offer"
                            required
                        />
                    </mat-form-field>
                    <label for="description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            name="description"
                            formControlName="description"
                            placeholder="Description of the deal or offer"
                        ></textarea>
                    </mat-form-field>
                    <label for="terms">{{ 'COMMON.TERMS' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            name="terms"
                            formControlName="terms"
                            placeholder="Terms and conditions of the deal or offer"
                        ></textarea>
                    </mat-form-field>
                    <label for="code">{{ 'COMMON.CODE' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="code"
                            formControlName="code"
                            placeholder="Deal/Offer Code"
                        />
                    </mat-form-field>
                    <label for="image">{{ 'COMMON.IMAGE' | translate }}</label>
                    <div class="mb-4 flex items-center space-x-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <input
                                matInput
                                name="image"
                                formControlName="image"
                                placeholder="Image URL"
                            />
                        </mat-form-field>
                        <upload-button
                            ngModel
                            (ngModelChange)="form.patchValue({ image: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [matTooltip]="'Upload Image'"
                        />
                    </div>

                    <label for="expires_at">{{
                        'FORM.EXPIRES_AT' | translate
                    }}</label>
                    <a-date-field
                        name="expires_at"
                        formControlName="expires_at"
                    />
                </form>
                @if (!loading()) {
                    <footer
                        class="fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end rounded border-none bg-base-200 px-4 py-2"
                    >
                        <button btn matRipple class="w-32" (click)="save()">
                            {{ 'COMMON.SAVE' | translate }}
                        </button>
                    </footer>
                }
            </div>
        } @else {
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-base-100"
            >
                <mat-spinner diameter="48"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.DEALS_SAVING' | translate }}</p>
            </div>
        }
    `, imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      RouterModule,
      IconComponent,
      DateFieldComponent,
      UploadButtonComponent,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealsManageComponent, { className: "DealsManageComponent", filePath: "apps/concierge/src/app/deals/deals-manage.component.ts", lineNumber: 190 });
})();

// apps/concierge/src/app/deals/deals.module.ts
var ROUTES = [
  {
    path: "",
    component: DealsComponent,
    children: [{ path: "", component: DealsListComponent }]
  },
  { path: "manage", component: DealsManageComponent },
  { path: "manage/:id", component: DealsManageComponent },
  { path: "**", redirectTo: "" }
];
var COMPONENTS = [
  DealsListComponent,
  DealsManageComponent,
  DealModalComponent
];
var _DealsModule = class _DealsModule {
};
_DealsModule.\u0275fac = function DealsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DealsModule)();
};
_DealsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DealsModule });
_DealsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  UIModule,
  COMPONENTS,
  RouterModule.forChild(ROUTES)
] });
var DealsModule = _DealsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DealsModule, [{
    type: NgModule,
    args: [{
      declarations: [DealsComponent],
      imports: [
        CommonModule,
        UIModule,
        ...COMPONENTS,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  DealsModule
};
//# sourceMappingURL=deals.module-DEIOBKGI.js.map
