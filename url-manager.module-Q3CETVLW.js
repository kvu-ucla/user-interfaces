import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  BehaviorSubject,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  Injectable,
  MAT_DIALOG_DATA,
  MatChipsModule,
  MatDialog,
  MatDialogRef,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatRipple,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  OrganisationService,
  PrintableComponent,
  RichTextInputComponent,
  RouterModule,
  SafePipe,
  SettingsService,
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
  debounceTime,
  deleteShortURL,
  getInvalidFields,
  getShortUrlQRCode,
  i18n,
  inject,
  notifyError,
  notifySuccess,
  openConfirmModal,
  queryShortURLs,
  saveShortURL,
  setClassMetadata,
  shareReplay,
  switchMap,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4H7O57UP.js";

// apps/concierge/src/app/url-management/url-modal.component.ts
function ShortUrlModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5);
    \u0275\u0275element(7, "input", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "FORM.NAME"));
  }
}
function ShortUrlModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 5);
    \u0275\u0275element(7, "input", 8);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.URLS_URI"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 4, "APP.CONCIERGE.URLS_URI"));
  }
}
function ShortUrlModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "rich-text-input", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.DESCRIPTION"), " ");
  }
}
function ShortUrlModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "settings-toggle", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.URLS_ENABLED"));
  }
}
var _ShortUrlModalComponent = class _ShortUrlModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = false;
    this.form = new FormGroup({
      id: new FormControl(this._data?.id || ""),
      name: new FormControl(this._data?.name || "", [Validators.required]),
      description: new FormControl(this._data?.description || "", []),
      uri: new FormControl(this._data?.uri || "", [Validators.required]),
      enabled: new FormControl(this._data?.enabled ?? true, [])
      // valid_from: new FormControl(
      //     this._data?.valid_from || startOfDay(Date.now()).valueOf(),
      //     []
      // ),
      // valid_to: new FormControl(
      //     this._data?.valid_to ||
      //         addYears(startOfDay(Date.now()).valueOf(), 10),
      //     []
      // ),
    });
  }
  async save() {
    if (!this.form.valid) {
      return notifyError(`Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
    }
    const data = this.form.getRawValue();
    this.loading = true;
    const resp = await saveShortURL(data).toPromise().catch((e) => notifyError(`Error saving Short URL: ${e.message}`));
    if (resp.id)
      this._dialog_ref.close(resp);
    this.loading = false;
  }
};
_ShortUrlModalComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ShortUrlModalComponent_BaseFactory;
  return function ShortUrlModalComponent_Factory(__ngFactoryType__) {
    return (\u0275ShortUrlModalComponent_BaseFactory || (\u0275ShortUrlModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ShortUrlModalComponent)))(__ngFactoryType__ || _ShortUrlModalComponent);
  };
})();
_ShortUrlModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShortUrlModalComponent, selectors: [["short-url-modal"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 11, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], [1, "flex", "flex-col"], [1, "item-center", "flex", "space-x-4", "pb-4"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Name", "formControlName", "name"], ["for", "uri"], ["matInput", "", "name", "uri", "formControlName", "uri", 3, "placeholder"], ["for", "description"], ["name", "description", "formControlName", "description"], ["formControlName", "enabled", 1, "flex-1", 3, "name"], [1, "flex-1"]], template: function ShortUrlModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("confirm", function ShortUrlModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.save();
    });
    \u0275\u0275elementStart(3, "form", 1);
    \u0275\u0275conditionalCreate(4, ShortUrlModalComponent_Conditional_4_Template, 8, 3, "div", 2);
    \u0275\u0275conditionalCreate(5, ShortUrlModalComponent_Conditional_5_Template, 9, 6, "div", 2);
    \u0275\u0275conditionalCreate(6, ShortUrlModalComponent_Conditional_6_Template, 5, 3, "div", 2);
    \u0275\u0275conditionalCreate(7, ShortUrlModalComponent_Conditional_7_Template, 4, 3, "div", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 7, ctx.form.value.id ? "APP.CONCIERGE.URLS_EDIT" : "APP.CONCIERGE.URLS_ADD"))("loading", ctx.loading ? \u0275\u0275pipeBind1(2, 9, "APP.CONCIERGE.URLS_SAVING") : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.name ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.uri ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.description ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.enabled ? 7 : -1);
  }
}, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatInput, FormGroupDirective, FormControlName, RichTextInputComponent, SettingsToggleComponent, FullscreenModalShellComponent, TranslatePipe], encapsulation: 2 });
var ShortUrlModalComponent = _ShortUrlModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShortUrlModalComponent, [{
    type: Component,
    args: [{ selector: "short-url-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.URLS_EDIT'
                    : 'APP.CONCIERGE.URLS_ADD'
                ) | translate
            "
            (confirm)="save()"
            [loading]="loading ? ('APP.CONCIERGE.URLS_SAVING' | translate) : ''"
        >
            <form [formGroup]="form">
                @if (form.controls.name) {
                    <div class="flex flex-col">
                        <label for="name">
                            {{ 'FORM.NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="name"
                                placeholder="Name"
                                formControlName="name"
                            />
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.uri) {
                    <div class="flex flex-col">
                        <label for="uri">
                            {{ 'APP.CONCIERGE.URLS_URI' | translate
                            }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="uri"
                                [placeholder]="
                                    'APP.CONCIERGE.URLS_URI' | translate
                                "
                                formControlName="uri"
                            />
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.description) {
                    <div class="flex flex-col">
                        <label for="description">
                            {{ 'COMMON.DESCRIPTION' | translate }}
                        </label>
                        <rich-text-input
                            name="description"
                            formControlName="description"
                        ></rich-text-input>
                    </div>
                }
                @if (form.controls.enabled) {
                    <div class="item-center flex space-x-4 pb-4">
                        <settings-toggle
                            class="flex-1"
                            [name]="'APP.CONCIERGE.URLS_ENABLED' | translate"
                            formControlName="enabled"
                        >
                        </settings-toggle>
                        <div class="flex-1"></div>
                    </div>
                }
                <!-- <div class="flex flex-col" *ngIf="form.controls.valid_from">
            <label for="uri" >{{ 'APP.CONCIERGE.VALID_FROM' | translate }}</label>
            <a-date-field formControlName="valid_from"></a-date-field>
          </div>
          <div class="flex flex-col" *ngIf="form.controls.valid_to">
            <label for="uri" >
              {{'APP.CONCIERGE.VALID_UNTIL' | translate}}<span>*</span>
            </label>
            <a-date-field
              formControlName="valid_until"
              [from]="form.value.valid_from"
            ></a-date-field>
          </div> -->
            </form>
        </fullscreen-modal-shell>
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShortUrlModalComponent, { className: "ShortUrlModalComponent", filePath: "apps/concierge/src/app/url-management/url-modal.component.ts", lineNumber: 100 });
})();

// apps/concierge/src/app/url-management/url-management.service.ts
var _UrlManagementService = class _UrlManagementService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.url_list = combineLatest([
      this._org.active_building,
      this._options,
      this._change
    ]).pipe(debounceTime(300), switchMap(([bld, { search }]) => queryShortURLs({ q: search, limit: 1e3 })), shareReplay(1));
  }
  setFilters(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  setSearchString(search) {
    this._options.next(__spreadProps(__spreadValues({}, this._options.getValue()), { search }));
  }
  editURL(url) {
    const ref = this._dialog.open(ShortUrlModalComponent, {
      data: url
    });
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
  }
  async removeURL(url) {
    const ref = await openConfirmModal({
      title: i18n("APP.CONCIERGE.URLS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.URLS_REMOVE_MSG", {
        name: url.name
      }),
      icon: { content: "delete_forever" },
      confirm_text: i18n("COMMON.REMOVE")
    }, this._dialog);
    if (ref.reason !== "done")
      return ref.close();
    ref.loading(i18n("APP.CONCIERGE.URLS_REMOVE_LOADING"));
    await deleteShortURL(url.id).toPromise().catch((e) => {
      notifyError(i18n("APP.CONCIERGE.URLS_REMOVE_ERROR", {
        error: e.message || e
      }));
      ref.close();
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.URLS_REMOVE_SUCCESS"));
    ref.close();
    this._change.next(Date.now());
  }
};
_UrlManagementService.\u0275fac = function UrlManagementService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UrlManagementService)();
};
_UrlManagementService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UrlManagementService, factory: _UrlManagementService.\u0275fac, providedIn: "root" });
var UrlManagementService = _UrlManagementService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/url-management/url-list.component.ts
var _c0 = (a0) => ({ key: "name", name: a0 });
var _c1 = (a0, a1) => ({ key: "uri", name: a0, content: a1, size: "24rem" });
var _c2 = (a0) => ({ key: "user_name", name: a0 });
var _c3 = (a0, a1) => ({ key: "description", name: a0, content: a1 });
var _c4 = (a0) => ({ key: "actions", name: " ", content: a0, size: "7rem", sortable: false });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function UrlListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275property("href", data_r1, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1, " ");
  }
}
function UrlListComponent_ng_template_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DESCRIPTION_EMPTY"), " ");
  }
}
function UrlListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, UrlListComponent_ng_template_9_Conditional_2_Template, 3, 3, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r2 ? 2 : -1);
  }
}
function UrlListComponent_ng_template_11_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "a", 20);
    \u0275\u0275pipe(3, "safe");
    \u0275\u0275element(4, "img", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 23);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_11_ng_template_4_Template_button_click_7_listener() {
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
    \u0275\u0275property("href", \u0275\u0275pipeBind2(3, 4, "/r/" + row_r4.id.split("-")[1], "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", row_r4.qr_code, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.name || row_r4.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "APP.CONCIERGE.URLS_PRINT_QR"), " ");
  }
}
function UrlListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 12);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_11_Template_button_click_1_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.loadQrCode(row_r4));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "qr_code");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, UrlListComponent_ng_template_11_ng_template_4_Template, 10, 9, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(6, "button", 13)(7, "icon");
    \u0275\u0275text(8, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-menu", null, 4)(11, "button", 14);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_11_Template_button_click_11_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.edit(row_r4));
    });
    \u0275\u0275elementStart(12, "div", 15)(13, "icon");
    \u0275\u0275text(14, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "button", 14);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_11_Template_button_click_18_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.remove(row_r4));
    });
    \u0275\u0275elementStart(19, "div", 16)(20, "icon", 17);
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const qr_menu_r7 = \u0275\u0275reference(5);
    const menu_r8 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("content", qr_menu_r7);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 4, "APP.CONCIERGE.URLS_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 6, "APP.CONCIERGE.URLS_REMOVE"));
  }
}
var _UrlListComponent = class _UrlListComponent {
  constructor() {
    this._manager = inject(UrlManagementService);
    this._settings = inject(SettingsService);
    this.features = this._manager.url_list;
    this.edit = (region) => this._manager.editURL(region);
    this.remove = (region) => this._manager.removeURL(region);
  }
  get kiosk_url() {
    const path = this._settings.get("app.kiosk_url_path") || "/map-kiosk";
    return `${window.location.origin}${path}`;
  }
  async loadQrCode(item) {
    item.qr_code = await getShortUrlQRCode(item.id);
  }
  print() {
    window.print();
  }
};
_UrlListComponent.\u0275fac = function UrlListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UrlListComponent)();
};
_UrlListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UrlListComponent, selectors: [["short-url-list"]], standalone: false, decls: 13, vars: 29, consts: [["url_template", ""], ["desc_template", ""], ["action_template", ""], ["qr_menu", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No Points of Interest found.", 1, "block", "min-w-[64rem]", "text-sm", 3, "data", "columns", "sortable"], [1, "h-12", "w-full"], ["link", "", 1, "w-full", "overflow-hidden", "break-words", "p-4", "text-xs", 3, "href"], [1, "p-4", "text-xs"], [1, "opacity-30"], [1, "mx-auto", "flex", "w-full", "justify-end", "space-x-2", "px-4", "py-2"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "content"], ["btn", "", "icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-red-500", "flex", "items-center", "space-x-2"], [1, "text-error"], [1, "rounded", "bg-base-100", "py-2", "shadow"], ["printable", "", 1, ""], ["target", "_blank", "ref", "noopener noreferrer", 1, "mx-4", "my-2", "block", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2", 3, "href"], [1, "mx-auto", "w-48", 3, "src"], [1, "mx-4", "mt-2", "w-[calc(100%-2rem)]", "rounded", "bg-base-200", "p-2", "text-center", "font-mono", "text-sm"], ["btn", "", "matRipple", "", 1, "mx-4", "my-2", "w-[calc(100%-2rem)]", 3, "click"]], template: function UrlListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "simple-table", 6);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275element(6, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, UrlListComponent_ng_template_7_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, UrlListComponent_ng_template_9_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, UrlListComponent_ng_template_11_Template, 25, 8, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const url_template_r9 = \u0275\u0275reference(8);
    const desc_template_r10 = \u0275\u0275reference(10);
    const action_template_r11 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.features)("columns", \u0275\u0275pureFunction5(23, _c5, \u0275\u0275pureFunction1(11, _c0, \u0275\u0275pipeBind1(2, 3, "FORM.NAME")), \u0275\u0275pureFunction2(13, _c1, \u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.URLS_URI"), url_template_r9), \u0275\u0275pureFunction1(16, _c2, \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.URLS_USER_NAME")), \u0275\u0275pureFunction2(18, _c3, \u0275\u0275pipeBind1(5, 9, "COMMON.DESCRIPTION"), desc_template_r10), \u0275\u0275pureFunction1(21, _c4, action_template_r11)))("sortable", true);
  }
}, dependencies: [MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, CustomTooltipComponent, SimpleTableComponent, PrintableComponent, TranslatePipe, SafePipe], encapsulation: 2 });
var UrlListComponent = _UrlListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlListComponent, [{
    type: Component,
    args: [{ selector: "short-url-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-[64rem] text-sm"
                [data]="features"
                empty_message="No Points of Interest found."
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'uri',
                        name: 'APP.CONCIERGE.URLS_URI' | translate,
                        content: url_template,
                        size: '24rem',
                    },
                    {
                        key: 'user_name',
                        name: 'APP.CONCIERGE.URLS_USER_NAME' | translate,
                    },
                    {
                        key: 'description',
                        name: 'COMMON.DESCRIPTION' | translate,
                        content: desc_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '7rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-12 w-full"></div>
        </div>
        <ng-template #url_template let-data="data">
            <a
                link
                [href]="data"
                class="w-full overflow-hidden break-words p-4 text-xs"
            >
                {{ data }}
            </a>
        </ng-template>
        <ng-template #desc_template let-data="data">
            <div class="p-4 text-xs">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">
                        {{ 'COMMON.DESCRIPTION_EMPTY' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex w-full justify-end space-x-2 px-4 py-2">
                <button
                    icon
                    matRipple
                    customTooltip
                    [content]="qr_menu"
                    (click)="loadQrCode(row)"
                >
                    <icon>qr_code</icon>
                </button>
                <ng-template #qr_menu>
                    <div class="rounded bg-base-100 py-2 shadow">
                        <div class="" printable>
                            <a
                                [href]="
                                    '/r/' + row.id.split('-')[1] | safe: 'url'
                                "
                                target="_blank"
                                ref="noopener noreferrer"
                                class="mx-4 my-2 block rounded-lg border border-base-200 bg-base-100 p-2"
                            >
                                <img class="mx-auto w-48" [src]="row.qr_code" />
                            </a>
                            <div
                                class="mx-4 mt-2 w-[calc(100%-2rem)] rounded bg-base-200 p-2 text-center font-mono text-sm"
                            >
                                {{ row.name || row.id }}
                            </div>
                        </div>
                        <button
                            btn
                            matRipple
                            class="mx-4 my-2 w-[calc(100%-2rem)]"
                            (click)="print()"
                        >
                            {{ 'APP.CONCIERGE.URLS_PRINT_QR' | translate }}
                        </button>
                    </div>
                </ng-template>
                <button btn icon matRipple [matMenuTriggerFor]="menu">
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="edit(row)">
                        <div class="flex items-center space-x-2">
                            <icon>edit</icon>
                            <span>{{
                                'APP.CONCIERGE.URLS_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="remove(row)">
                        <div class="text-red-500 flex items-center space-x-2">
                            <icon class="text-error">delete</icon>
                            <span>{{
                                'APP.CONCIERGE.URLS_REMOVE' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UrlListComponent, { className: "UrlListComponent", filePath: "apps/concierge/src/app/url-management/url-list.component.ts", lineNumber: 128 });
})();

// apps/concierge/src/app/url-management/url-manager.component.ts
var _c02 = ["app-short-url-manager", ""];
var _UrlManagerComponent = class _UrlManagerComponent {
  constructor() {
    this._state = inject(UrlManagementService);
    this.search_term = "";
    this.new = () => this._state.editURL();
  }
  updateSearch(value) {
    this._state.setSearchString(value);
  }
};
_UrlManagerComponent.\u0275fac = function UrlManagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UrlManagerComponent)();
};
_UrlManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UrlManagerComponent, selectors: [["", "app-short-url-manager", ""]], standalone: false, attrs: _c02, decls: 15, vars: 7, consts: [[1, "print:hidden"], [1, "flex", "h-px", "flex-1", "print:hidden"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "mb-2", "flex", "items-center", "justify-between", "px-8", "pb-2", "pt-4"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "click"], [1, "flex", "justify-end", "px-8", "pb-4"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", "placeholder", "Search", 3, "ngModelChange", "ngModel"], [1, "relative", "block", "h-1/2", "w-full", "flex-1"]], template: function UrlManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 2)(4, "header", 3)(5, "h2", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 5);
    \u0275\u0275listener("click", function UrlManagerComponent_Template_button_click_8_listener() {
      return ctx.new();
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 6)(12, "mat-form-field", 7)(13, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function UrlManagerComponent_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.search_term, $event) || (ctx.search_term = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function UrlManagerComponent_Template_input_ngModelChange_13_listener($event) {
      return ctx.updateSearch($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(14, "short-url-list", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "APP.CONCIERGE.URLS_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "APP.CONCIERGE.URLS_ADD"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.search_term);
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, ApplicationTopbarComponent, ApplicationSidebarComponent, MatFormField, MatInput, MatRipple, UrlListComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=url-manager.component.css.map */"] });
var UrlManagerComponent = _UrlManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlManagerComponent, [{
    type: Component,
    args: [{ selector: "[app-short-url-manager]", template: `
        <app-topbar class="print:hidden" />
        <div class="flex h-px flex-1 print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 pb-2 pt-4"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.URLS_HEADER' | translate }}
                    </h2>
                    <button btn matRipple (click)="new()">
                        {{ 'APP.CONCIERGE.URLS_ADD' | translate }}
                    </button>
                </header>
                <div class="flex justify-end px-8 pb-4">
                    <mat-form-field appearance="outline" class="no-subscript">
                        <input
                            matInput
                            placeholder="Search"
                            [(ngModel)]="search_term"
                            (ngModelChange)="updateSearch($event)"
                        />
                    </mat-form-field>
                </div>
                <short-url-list
                    class="relative block h-1/2 w-full flex-1"
                ></short-url-list>
            </main>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;dd45660a96c490516c2f2104d17b5d40ade70328f67ef5d45dcf89ed7685333a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/url-management/url-manager.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar {\n  height: 100%;\n}\nmain {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=url-manager.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UrlManagerComponent, { className: "UrlManagerComponent", filePath: "apps/concierge/src/app/url-management/url-manager.component.ts", lineNumber: 62 });
})();

// apps/concierge/src/app/url-management/url-manager.module.ts
var ROUTES = [{ path: "", component: UrlManagerComponent }];
var _UrlManagerModule = class _UrlManagerModule {
};
_UrlManagerModule.\u0275fac = function UrlManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UrlManagerModule)();
};
_UrlManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UrlManagerModule });
_UrlManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  SharedSpacesModule,
  SharedUsersModule,
  MatChipsModule,
  RouterModule.forChild(ROUTES)
] });
var UrlManagerModule = _UrlManagerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlManagerModule, [{
    type: NgModule,
    args: [{
      declarations: [
        UrlManagerComponent,
        UrlListComponent,
        ShortUrlModalComponent
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
  UrlManagerModule
};
//# sourceMappingURL=url-manager.module-Q3CETVLW.js.map
