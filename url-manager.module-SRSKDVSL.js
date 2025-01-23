import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  BehaviorSubject,
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
  NgIf,
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
  __async,
  __spreadProps,
  __spreadValues,
  combineLatest,
  deleteShortURL,
  getInvalidFields,
  getShortUrlQRCode,
  i18n,
  map,
  notifyError,
  notifySuccess,
  openConfirmModal,
  queryShortURLs,
  saveShortURL,
  shareReplay,
  switchMap,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵtextInterpolate1
} from "./chunk-YNNHOFFY.js";

// apps/concierge/src/app/url-management/url-modal.component.ts
function ShortUrlModalComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 6);
    \u0275\u0275element(7, "input", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "FORM.NAME"), "");
  }
}
function ShortUrlModalComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 6);
    \u0275\u0275element(7, "input", 9);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.URLS_URI"), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 4, "APP.CONCIERGE.URLS_URI"));
  }
}
function ShortUrlModalComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "rich-text-input", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.DESCRIPTION"), " ");
  }
}
function ShortUrlModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "settings-toggle", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.URLS_ENABLED"));
  }
}
var ShortUrlModalComponent = class _ShortUrlModalComponent extends AsyncHandler {
  constructor(_data, _dialog_ref) {
    super();
    this._data = _data;
    this._dialog_ref = _dialog_ref;
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
  save() {
    return __async(this, null, function* () {
      if (!this.form.valid) {
        return notifyError(`Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
      }
      const data = this.form.getRawValue();
      this.loading = true;
      const resp = yield saveShortURL(data).toPromise().catch((e) => notifyError(`Error saving Short URL: ${e.message}`));
      if (resp.id)
        this._dialog_ref.close(resp);
      this.loading = false;
    });
  }
  static {
    this.\u0275fac = function ShortUrlModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShortUrlModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShortUrlModalComponent, selectors: [["short-url-modal"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 11, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], ["class", "flex item-center space-x-4 pb-4", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Name", "formControlName", "name"], ["for", "uri"], ["matInput", "", "name", "uri", "formControlName", "uri", 3, "placeholder"], ["for", "description"], ["name", "description", "formControlName", "description"], [1, "flex", "item-center", "space-x-4", "pb-4"], ["formControlName", "enabled", 1, "flex-1", 3, "name"], [1, "flex-1"]], template: function ShortUrlModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function ShortUrlModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "form", 1);
        \u0275\u0275template(4, ShortUrlModalComponent_div_4_Template, 8, 3, "div", 2)(5, ShortUrlModalComponent_div_5_Template, 9, 6, "div", 2)(6, ShortUrlModalComponent_div_6_Template, 5, 3, "div", 2)(7, ShortUrlModalComponent_div_7_Template, 4, 3, "div", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 7, ctx.form.value.id ? "APP.CONCIERGE.URLS_EDIT" : "APP.CONCIERGE.URLS_ADD"))("loading", ctx.loading ? \u0275\u0275pipeBind1(2, 9, "APP.CONCIERGE.URLS_SAVING") : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.name);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.uri);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.description);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.controls.enabled);
      }
    }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatInput, FormGroupDirective, FormControlName, RichTextInputComponent, SettingsToggleComponent, FullscreenModalShellComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShortUrlModalComponent, { className: "ShortUrlModalComponent", filePath: "apps/concierge/src/app/url-management/url-modal.component.ts", lineNumber: 92 });
})();

// apps/concierge/src/app/url-management/url-management.service.ts
var UrlManagementService = class _UrlManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this._url_list = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(switchMap(([bld]) => queryShortURLs({})), shareReplay(1));
    this.filtered_urls = combineLatest([
      this._url_list,
      this._options
    ]).pipe(map(([list, options]) => list.filter((i) => !options.search || i.name.toLowerCase().includes(options.search.toLowerCase()))));
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
  removeURL(url) {
    return __async(this, null, function* () {
      const ref = yield openConfirmModal({
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
      yield deleteShortURL(url.id).toPromise().catch((e) => {
        notifyError(i18n("APP.CONCIERGE.URLS_REMOVE_ERROR", {
          error: e.message || e
        }));
        ref.close();
        throw e;
      });
      notifySuccess(i18n("APP.CONCIERGE.URLS_REMOVE_SUCCESS"));
      ref.close();
      this._change.next(Date.now());
    });
  }
  static {
    this.\u0275fac = function UrlManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlManagementService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UrlManagementService, factory: _UrlManagementService.\u0275fac, providedIn: "root" });
  }
};

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
function UrlListComponent_ng_template_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
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
    \u0275\u0275template(2, UrlListComponent_ng_template_9_span_2_Template, 3, 3, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !data_r2);
  }
}
function UrlListComponent_ng_template_11_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "a", 21);
    \u0275\u0275pipe(3, "safe");
    \u0275\u0275element(4, "img", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 24);
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
    \u0275\u0275property("href", \u0275\u0275pipeBind2(3, 4, row_r4.uri, "url"), \u0275\u0275sanitizeUrl);
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
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 13);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_11_Template_button_click_1_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.loadQrCode(row_r4));
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "qr_code");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, UrlListComponent_ng_template_11_ng_template_4_Template, 10, 9, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(6, "button", 14)(7, "app-icon");
    \u0275\u0275text(8, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-menu", null, 4)(11, "button", 15);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_11_Template_button_click_11_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.edit(row_r4));
    });
    \u0275\u0275elementStart(12, "div", 16)(13, "app-icon");
    \u0275\u0275text(14, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "button", 15);
    \u0275\u0275listener("click", function UrlListComponent_ng_template_11_Template_button_click_18_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.remove(row_r4));
    });
    \u0275\u0275elementStart(19, "div", 17)(20, "app-icon", 18);
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
var UrlListComponent = class _UrlListComponent {
  get kiosk_url() {
    const path = this._settings.get("app.kiosk_url_path") || "/map-kiosk";
    return `${window.location.origin}${path}`;
  }
  loadQrCode(item) {
    return __async(this, null, function* () {
      item.qr_code = yield getShortUrlQRCode(item.id);
    });
  }
  constructor(_manager, _settings) {
    this._manager = _manager;
    this._settings = _settings;
    this.features = this._manager.filtered_urls;
    this.edit = (region) => this._manager.editURL(region);
    this.remove = (region) => this._manager.removeURL(region);
  }
  static {
    this.\u0275fac = function UrlListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlListComponent)(\u0275\u0275directiveInject(UrlManagementService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UrlListComponent, selectors: [["short-url-list"]], standalone: false, decls: 13, vars: 29, consts: [["url_template", ""], ["desc_template", ""], ["action_template", ""], ["qr_menu", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No Points of Interest found.", 1, "min-w-[64rem]", "block", "text-sm", 3, "data", "columns", "sortable"], [1, "w-full", "h-12"], ["link", "", 1, "p-4", "break-words", "w-full", "overflow-hidden", "text-xs", 3, "href"], [1, "p-4", "text-xs"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], [1, "w-full", "flex", "justify-end", "space-x-2", "px-4", "py-2", "mx-auto"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "content"], ["btn", "", "icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error"], [1, "bg-base-100", "py-2", "shadow", "rounded"], ["printable", "", 1, ""], ["target", "_blank", "ref", "noopener noreferrer", 1, "block", "p-2", "mx-4", "my-2", "rounded-lg", "border", "border-base-200", "bg-base-100", 3, "href"], [1, "w-48", "mx-auto", 3, "src"], [1, "w-[calc(100%-2rem)]", "text-center", "mt-2", "font-mono", "text-sm", "bg-base-200", "rounded", "p-2", "mx-4"], ["btn", "", "matRipple", "", 1, "w-[calc(100%-2rem)]", "mx-4", "my-2", 3, "click"]], template: function UrlListComponent_Template(rf, ctx) {
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
    }, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, CustomTooltipComponent, SimpleTableComponent, PrintableComponent, SafePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UrlListComponent, { className: "UrlListComponent", filePath: "apps/concierge/src/app/url-management/url-list.component.ts", lineNumber: 124 });
})();

// apps/concierge/src/app/url-management/url-manager.component.ts
var _c02 = ["app-short-url-manager", ""];
var UrlManagerComponent = class _UrlManagerComponent {
  constructor(_state) {
    this._state = _state;
    this.new = () => this._state.editURL();
  }
  static {
    this.\u0275fac = function UrlManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlManagerComponent)(\u0275\u0275directiveInject(UrlManagementService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UrlManagerComponent, selectors: [["", "app-short-url-manager", ""]], standalone: false, attrs: _c02, decls: 12, vars: 6, consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "justify-between", "mb-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "click"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]], template: function UrlManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1)(4, "header", 2)(5, "h2", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 4);
        \u0275\u0275listener("click", function UrlManagerComponent_Template_button_click_8_listener() {
          return ctx.new();
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(11, "short-url-list", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 2, "APP.CONCIERGE.URLS_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 4, "APP.CONCIERGE.URLS_ADD"), " ");
      }
    }, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, MatRipple, UrlListComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=url-manager.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UrlManagerComponent, { className: "UrlManagerComponent", filePath: "apps/concierge/src/app/url-management/url-manager.component.ts", lineNumber: 52 });
})();

// apps/concierge/src/app/url-management/url-manager.module.ts
var ROUTES = [
  { path: "", component: UrlManagerComponent },
  { path: "new", component: UrlManagerComponent }
];
var UrlManagerModule = class _UrlManagerModule {
  static {
    this.\u0275fac = function UrlManagerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlManagerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UrlManagerModule });
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
  UrlManagerModule
};
//# sourceMappingURL=url-manager.module-SRSKDVSL.js.map
