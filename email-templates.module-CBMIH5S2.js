import {
  SharedBookingsModule
} from "./chunk-KPP2WGKW.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  BuildingPipe,
  Clipboard,
  CommonModule,
  DatePipe,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormFieldsModule,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  MatError,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatPrefix,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  OrganisationService,
  RichTextInputComponent,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SettingsService,
  SharedSpacesModule,
  SimpleTableComponent,
  TranslatePipe,
  UIModule,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  currentUser,
  du,
  extractTextFromHTML,
  filter,
  forkJoin,
  getUnixTime,
  hu,
  i18n,
  lastValueFrom,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  randomString,
  shareReplay,
  switchMap,
  tap,
  unique,
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
  ɵɵtextInterpolate1
} from "./chunk-TER32GTZ.js";

// apps/concierge/src/app/email-templates/email-templates-state.service.ts
var EmailTemplatesStateService = class _EmailTemplatesStateService extends AsyncHandler {
  _processTemplates(metadata, zone_id) {
    const data = metadata.details;
    return ((data instanceof Array ? data : "") || []).map((template) => __spreadProps(__spreadValues({}, template), { zone_id }));
  }
  constructor(_org, _settings) {
    super();
    this._org = _org;
    this._settings = _settings;
    this._filters = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.template_definitions = combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]).pipe(filter(([bld]) => !!bld), switchMap(() => hu(this._org.organisation.id, "email_template_fields").pipe(map((_) => {
      const definitions = _?.details || {};
      return Object.keys(definitions).map((key) => ({
        id: key,
        name: definitions[key].name,
        module_name: definitions[key].module_name,
        name_details: definitions[key].name.split(":"),
        description: definitions[key].description || "",
        fields: definitions[key].fields.map((field) => ({
          name: field.name,
          description: field.description || ""
        }))
      }));
    })).pipe(catchError(() => of([])))), tap((_) => console.log("Templates:", _)), shareReplay(1));
    this.template_groups = this.template_definitions.pipe(map((defs) => {
      const groups = unique(defs.map((_) => _.module_name));
      if (!groups.length)
        return [{ name: "", items: defs }];
      return groups.map((name) => ({
        name,
        items: defs.filter((_) => _.module_name === name)
      }));
    }));
    this.templates = combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]).pipe(filter(([bld]) => !!bld), switchMap(([bld, region]) => forkJoin([
      hu(this._org.organisation.id, "email_templates").pipe(map((_) => this._processTemplates(_, this._org.organisation.id)), catchError(() => of([]))),
      hu(bld.id, "email_templates").pipe(map((_) => this._processTemplates(_, bld.id)), catchError(() => of([]))),
      region ? hu(region.id, "email_templates").pipe(map((_) => this._processTemplates(_, region.id)), catchError(() => of([]))) : of([])
    ])), map(([org_templates, bld_templates, region_templates]) => org_templates.concat(bld_templates).concat(region_templates)), shareReplay(1));
    this.filters = this._filters.asObservable();
    this.filtered_templates = combineLatest([
      this.templates,
      this.filters
    ]).pipe(map(([templates, filters]) => {
      const category = filters.category || "";
      return templates.filter((_) => _.category === category || category === "");
    }));
  }
  loadTemplate(id) {
    return __async(this, null, function* () {
      const template_list = yield nextValueFrom(this.templates);
      return template_list.find((_) => _.id === id);
    });
  }
  saveTemplate(template, old_zone = "") {
    return __async(this, null, function* () {
      if (!template.zone_id)
        return;
      if (template.id && old_zone) {
        const old_metadata = yield lastValueFrom(hu(old_zone, "email_templates"));
        if (old_metadata.details instanceof Array) {
          yield lastValueFrom(du(old_zone, {
            name: "email_templates",
            details: old_metadata.details.filter((_) => _.id !== template.id),
            description: old_metadata.description
          }));
        }
      }
      if (!template.id) {
        template.id = `template-${randomString(8)}`;
        template.created_at = getUnixTime(Date.now());
      }
      template.updated_at = getUnixTime(Date.now());
      const metadata = yield lastValueFrom(hu(template.zone_id, "email_templates"));
      const template_list = metadata.details instanceof Array ? metadata.details : [];
      const zone_templates = template_list.filter((_) => _.zone_id === template.zone_id);
      const new_template_list = [
        ...zone_templates.filter((_) => _.id !== template.id),
        template
      ];
      yield lastValueFrom(du(template.zone_id, {
        name: `email_templates`,
        details: new_template_list,
        description: "Email Templates for Zone"
      })).catch((e) => {
        notifyError(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_SAVE_ERROR", {
          error: e
        }));
        throw e;
      });
      notifySuccess(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_SAVE_SUCCESS"));
      this.timeout("changed", () => this._change.next(Date.now()));
    });
  }
  removeTemplate(template) {
    return __async(this, null, function* () {
      const template_list = yield nextValueFrom(this.templates);
      const zone_templates = template_list.filter((_) => _.zone_id === template.zone_id);
      const new_template_list = zone_templates.filter((_) => _.id !== template.id);
      yield du(template.zone_id, {
        name: `email_templates`,
        details: new_template_list,
        description: "Email Templates for Zone"
      }).toPromise().catch((e) => {
        notifyError(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_REMOVE_ERROR", {
          error: e
        }));
        throw e;
      });
      notifySuccess(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_REMOVE_SUCCESS"));
      this.timeout("changed", () => this._change.next(Date.now()));
    });
  }
  setFilters(filters) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), filters));
  }
  static {
    this.\u0275fac = function EmailTemplatesStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailTemplatesStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmailTemplatesStateService, factory: _EmailTemplatesStateService.\u0275fac, providedIn: "root" });
  }
};

// apps/concierge/src/app/email-templates/email-template-manage.component.ts
var _c0 = () => [];
var _c1 = () => ["/email-templates"];
function EmailTemplateManageComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 36)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c1));
  }
}
function EmailTemplateManageComponent_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r2 = ctx.$implicit;
    \u0275\u0275property("value", bld_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r2.display_name || bld_r2.name, " ");
  }
}
function EmailTemplateManageComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TRIGGER_SELECT"), " ");
  }
}
function EmailTemplateManageComponent_ng_container_39_button_3_app_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-icon", 21);
    \u0275\u0275text(1, "done");
    \u0275\u0275elementEnd();
  }
}
function EmailTemplateManageComponent_ng_container_39_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_ng_container_39_button_3_Template_button_click_0_listener() {
      const tmpl_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.form.patchValue({ trigger: tmpl_r4.id }));
    });
    \u0275\u0275elementStart(1, "div", 40)(2, "div", 41)(3, "div", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 44);
    \u0275\u0275text(8, ":");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, EmailTemplateManageComponent_ng_container_39_button_3_app_icon_9_Template, 2, 0, "app-icon", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tmpl_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", tmpl_r4.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", tmpl_r4.name || tmpl_r4.module_name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r4.form.value.trigger === tmpl_r4.id);
  }
}
function EmailTemplateManageComponent_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EmailTemplateManageComponent_ng_container_39_button_3_Template, 10, 3, "button", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r6.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r6.items);
  }
}
function EmailTemplateManageComponent_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_button_46_Template_button_click_0_listener() {
      const field_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.copyField(field_r8.name));
    });
    \u0275\u0275elementStart(1, "div", 46)(2, "div", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const field_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", field_r8.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", field_r8.description, " ");
  }
}
function EmailTemplateManageComponent_button_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.EMAIL_TEMPLATES_PLACEHOLDERS_EMPTY"), " ");
  }
}
function EmailTemplateManageComponent_footer_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 49)(1, "button", 50);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_footer_70_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.save());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.EMAIL_TEMPLATES_SAVE"), " ");
  }
}
function EmailTemplateManageComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52);
    \u0275\u0275element(2, "mat-spinner", 53);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.loading);
  }
}
var EmailTemplateManageComponent = class _EmailTemplateManageComponent extends AsyncHandler {
  constructor(_org, _state, _route, _router, _clipboard) {
    super();
    this._org = _org;
    this._state = _state;
    this._route = _route;
    this._router = _router;
    this._clipboard = _clipboard;
    this.loading = "";
    this.definitions = this._state.template_groups;
    this.buildings = this._org.building_list;
    this.form = new FormGroup({
      id: new FormControl(""),
      reply_to: new FormControl(""),
      from: new FormControl(""),
      subject: new FormControl("", [Validators.required]),
      category: new FormControl("internal"),
      trigger: new FormControl(""),
      html: new FormControl("", [Validators.required]),
      zone_id: new FormControl("")
    });
    this.active_trigger = null;
  }
  ngOnInit() {
    this.subscription("route.params", this._route.paramMap.subscribe((params) => __async(this, null, function* () {
      if (params.has("id")) {
        this.loading = i18n("APP.CONCIERGE.EMAIL_TEMPLATES_LOADING");
        this.template = yield this._state.loadTemplate(params.get("id"));
        this.loading = "";
        console.log("Template:", this.template);
        if (!this.template) {
          this._router.navigate(["/email-templates", "manage"]);
        } else {
          this.form.patchValue(this.template);
        }
      }
    })));
    this.subscription("trigger", this.form.valueChanges.subscribe((value) => __async(this, null, function* () {
      if (value.trigger) {
        const trigger_list = yield nextValueFrom(this._state.template_definitions);
        this.active_trigger = trigger_list.find((_) => _.id === value.trigger);
      }
    })));
  }
  copyField(field) {
    this._clipboard.copy(`%{${field}}`);
    notifySuccess(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_COPIED_FIELD", { field }));
  }
  save() {
    return __async(this, null, function* () {
      this.loading = i18n("APP.CONCIERGE.EMAIL_TEMPLATES_SAVING");
      const zone = this.template?.zone_id !== this.form.value.zone_id ? this.template?.zone_id : "";
      yield this._state.saveTemplate(__spreadProps(__spreadValues(__spreadValues({}, this.template || {}), this.form.getRawValue()), {
        text: extractTextFromHTML(this.form.getRawValue().html || "")
      }), zone).catch((e) => {
        this.loading = "";
        throw e;
      });
      this.loading = "";
      this._router.navigate(["/email-templates"]);
    });
  }
  static {
    this.\u0275fac = function EmailTemplateManageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailTemplateManageComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(EmailTemplatesStateService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Clipboard));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplateManageComponent, selectors: [["email-template-manage"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 73, vars: 61, consts: [["trigger_menu", "matMenu"], ["tracking_menu", "matMenu"], ["load_state", ""], [1, "absolute", "inset-0", "overflow-auto", "bg-base-100"], [1, "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[40rem]", "items-center", "justify-between", "rounded", "border-none", "bg-base-200", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", 3, "routerLink", 4, "ngIf"], [1, "z-0", "mx-auto", "my-2", "w-full", "max-w-[40rem]", "overflow-visible", "p-4", 3, "formGroup"], [1, "flex", "items-center", "space-x-4"], [1, "w-1/4", "flex-1", "space-y-2"], ["for", "zone"], ["appearance", "outline", 1, "w-full"], ["name", "zone", "formControlName", "zone_id", 3, "placeholder"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "w-1/4", "flex-1", "space-y-2", "pb-6"], ["for", "trigger"], ["duration-field", "", "matRipple", "", 1, "flex", "h-12", "w-full", "items-center", "justify-between", "rounded", "border", "border-neutral", "px-2", 3, "click", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], ["class", "truncate opacity-30", 4, "ngIf"], [1, "text-2xl"], [1, "max-h-[24rem]"], ["mat-menu-item", "", 3, "click"], [4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "matTooltip", "Values that get replaced in the email template when sent", 1, "mt-2", "flex-1", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "disabled", 4, "ngIf"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "flex-1"], ["matInput", "", "formControlName", "reply_to", 3, "placeholder"], ["matInput", "", "formControlName", "from", 3, "placeholder"], ["matPrefix", "", 1, "relative", "-left-1", "text-2xl"], ["matInput", "", "placeholder", "Template Subject", "formControlName", "subject"], ["formControlName", "html", 1, "block", "min-h-[calc(100vh-32rem)]", 3, "placeholder", "images_allowed"], ["class", "fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end rounded border-none bg-base-200 px-4 py-2", 4, "ngIf"], ["icon", "", "matRipple", "", 3, "routerLink"], [3, "value"], [1, "truncate", "opacity-30"], [1, "p-4"], [1, "flex", "items-center", "space-x-2", "pl-2"], [1, "my-2", "flex", "flex-1", "flex-col-reverse", "leading-tight"], [1, "text-xs", "opacity-30"], [1, "text-sm"], [1, "opacity-0"], ["class", "text-2xl", 4, "ngIf"], [1, "flex", "flex-col", "leading-tight"], [1, "font-mono", "text-sm"], ["mat-menu-item", "", 3, "disabled"], [1, "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "-translate-x-1/2", "items-center", "justify-end", "rounded", "border-none", "bg-base-200", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "absolute", "inset-0", "bg-base-100"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]], template: function EmailTemplateManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "header", 4)(2, "h2", 5);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, EmailTemplateManageComponent_a_5_Template, 3, 2, "a", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "form", 7)(7, "div", 8)(8, "div", 9)(9, "label", 10);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-form-field", 11)(13, "mat-select", 12);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementStart(15, "mat-option", 13);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, EmailTemplateManageComponent_mat_option_18_Template, 2, 2, "mat-option", 14);
        \u0275\u0275pipe(19, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-error");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 15)(24, "label", 16);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 17);
        \u0275\u0275listener("click", function EmailTemplateManageComponent_Template_button_click_27_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.form.controls.trigger.markAsTouched());
        });
        \u0275\u0275elementStart(28, "div", 18)(29, "div", 19);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, EmailTemplateManageComponent_div_31_Template, 3, 3, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "app-icon", 21);
        \u0275\u0275text(33, " arrow_drop_down ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "mat-menu", 22, 0)(36, "button", 23);
        \u0275\u0275listener("click", function EmailTemplateManageComponent_Template_button_click_36_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.form.patchValue({ trigger: "" }));
        });
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(39, EmailTemplateManageComponent_ng_container_39_Template, 4, 2, "ng-container", 24);
        \u0275\u0275pipe(40, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "button", 25);
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-menu", 22, 1);
        \u0275\u0275template(46, EmailTemplateManageComponent_button_46_Template, 6, 2, "button", 26)(47, EmailTemplateManageComponent_button_47_Template, 3, 4, "button", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 28)(49, "mat-form-field", 29);
        \u0275\u0275element(50, "input", 30);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementStart(52, "mat-error");
        \u0275\u0275text(53);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "mat-form-field", 29);
        \u0275\u0275element(56, "input", 31);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementStart(58, "mat-error");
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "mat-form-field", 11)(62, "app-icon", 32);
        \u0275\u0275text(63, " description ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(64, "input", 33);
        \u0275\u0275elementStart(65, "mat-error");
        \u0275\u0275text(66);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(68, "rich-text-input", 34);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(70, EmailTemplateManageComponent_footer_70_Template, 4, 3, "footer", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275template(71, EmailTemplateManageComponent_ng_template_71_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const trigger_menu_r10 = \u0275\u0275reference(35);
        const tracking_menu_r11 = \u0275\u0275reference(45);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 27, (ctx.template == null ? null : ctx.template.id) ? "APP.CONCIERGE.EMAIL_TEMPLATES_EDIT" : "APP.CONCIERGE.EMAIL_TEMPLATES_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 29, "RESOURCE.BUILDING"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 31, "COMMON.BUILDING_SELECT"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 33, "COMMON.BUILDING_EMPTY"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(19, 35, ctx.buildings));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 37, "COMMON.BUILDING_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 39, "COMMON.TRIGGER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matMenuTriggerFor", trigger_menu_r10);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", (ctx.active_trigger == null ? null : ctx.active_trigger.name) || (ctx.active_trigger == null ? null : ctx.active_trigger.module_name), " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.active_trigger);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 41, "COMMON.NONE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(40, 43, ctx.definitions));
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.form.value.trigger)("matMenuTriggerFor", tracking_menu_r11);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 45, "APP.CONCIERGE.EMAIL_TEMPLATES_PLACEHOLDERS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", (ctx.active_trigger == null ? null : ctx.active_trigger.fields) || \u0275\u0275pureFunction0(59, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !((ctx.active_trigger == null ? null : ctx.active_trigger.fields) || \u0275\u0275pureFunction0(60, _c0)).length);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(51, 47, "APP.CONCIERGE.EMAIL_TEMPLATES_REPLY_TO"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 49, "APP.CONCIERGE.EMAIL_TEMPLATES_REPLY_TO_REQUIRED"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(57, 51, "APP.CONCIERGE.EMAIL_TEMPLATES_FROM"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 53, "APP.CONCIERGE.EMAIL_TEMPLATES_FROM_REQUIRED"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 55, "APP.CONCIERGE.EMAIL_TEMPLATES_SUBJECT_REQUIRED"));
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(69, 57, "APP.CONCIERGE.EMAIL_TEMPLATES_BODY"))("images_allowed", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatError, MatPrefix, MatInput, MatSelect, MatOption, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatProgressSpinner, MatRipple, FormGroupDirective, FormControlName, RichTextInputComponent, IconComponent, RouterLink, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplateManageComponent, { className: "EmailTemplateManageComponent", filePath: "apps/concierge/src/app/email-templates/email-template-manage.component.ts", lineNumber: 285 });
})();

// apps/concierge/src/app/email-templates/email-templates-list.component.ts
var _c02 = () => ["/email-templates", "manage"];
var _c12 = (a0) => ({ key: "subject", name: a0 });
var _c2 = (a0, a1) => ({ key: "category", name: a0, show: a1 });
var _c3 = (a0, a1) => ({ key: "trigger", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "zone_id", name: a0, content: a1 });
var _c5 = (a0, a1) => ({ key: "created_at", name: a0, size: "8rem", content: a1 });
var _c6 = (a0) => ({ key: "actions", name: " ", size: "3.5rem", content: a0, sortable: false });
var _c7 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _c8 = (a0) => ["/email-templates", "manage", a0];
function EmailTemplatesListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, data_r1 * 1e3, "mediumDate"), " ");
  }
}
function EmailTemplatesListComponent_ng_template_23_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "RESOURCE.BUILDING_EMPTY"), " ");
  }
}
function EmailTemplatesListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275template(3, EmailTemplatesListComponent_ng_template_23_span_3_Template, 3, 3, "span", 17);
    \u0275\u0275pipe(4, "building");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_6_0 = \u0275\u0275pipeBind1(2, 2, data_r2)) == null ? null : tmp_6_0.display_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(4, 4, data_r2));
  }
}
function EmailTemplatesListComponent_ng_template_25_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TRIGGER_EMPTY"), " ");
  }
}
function EmailTemplatesListComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275template(2, EmailTemplatesListComponent_ng_template_25_span_2_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !data_r3);
  }
}
function EmailTemplatesListComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20)(1, "app-icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 4)(5, "button", 21);
    \u0275\u0275listener("click", function EmailTemplatesListComponent_ng_template_27_Template_button_click_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.sendTestEmail(row_r5));
    });
    \u0275\u0275elementStart(6, "div", 22)(7, "app-icon", 11);
    \u0275\u0275text(8, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "a", 23)(13, "div", 22)(14, "app-icon", 11);
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "button", 21);
    \u0275\u0275listener("click", function EmailTemplatesListComponent_ng_template_27_Template_button_click_19_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeTemplate(row_r5));
    });
    \u0275\u0275elementStart(20, "div", 22)(21, "app-icon", 24);
    \u0275\u0275text(22, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const menu_r7 = \u0275\u0275reference(4);
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 5, "APP.CONCIERGE.EMAIL_TEMPLATES_SEND_TEST"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c8, row_r5.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 7, "APP.CONCIERGE.EMAIL_TEMPLATES_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 9, "APP.CONCIERGE.EMAIL_TEMPLATES_REMOVE"), " ");
  }
}
var EmailTemplatesListComponent = class _EmailTemplatesListComponent {
  constructor(_state, _org) {
    this._state = _state;
    this._org = _org;
    this.filters = this._state.filters;
    this.templates = this._state.filtered_templates;
    this.removeTemplate = (t) => this._state.removeTemplate(t);
  }
  setFilters(filters) {
    this._state.setFilters(filters);
  }
  sendTestEmail(template) {
    return __async(this, null, function* () {
      this.sending_email = template.id;
      const mod = this._org.module("smtp", "Mailer");
      if (!mod) {
        return notifyError(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_CONFIG_ERROR"));
      }
      yield mod.execute("send_mail", [
        currentUser()?.email,
        template.subject,
        template.text,
        template.html,
        [],
        // resource attachments
        [],
        // attachments
        [],
        // cc
        [],
        // bcc
        template.reply_to || null,
        // reply_to
        template.from || currentUser()?.email
        // from
      ]);
      notifySuccess(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_SEND_TEST"));
      this.sending_email = null;
    });
  }
  static {
    this.\u0275fac = function EmailTemplatesListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailTemplatesListComponent)(\u0275\u0275directiveInject(EmailTemplatesStateService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplatesListComponent, selectors: [["email-templates-list"]], standalone: false, decls: 29, vars: 46, consts: [["date_template", ""], ["bld_template", ""], ["trigger_template", ""], ["actions_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "space-x-2", "p-8"], [1, "text-2xl", "font-medium"], [1, "flex-1"], ["btn", "", "matRipple", "", 3, "routerLink"], [1, "ml-2"], [1, "text-2xl"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-y-auto", "px-8"], [1, "min-h-full", "w-full", "overflow-x-auto"], ["empty_message", "No group events for selected period", 1, "block", "w-full", "min-w-[56rem]", "text-sm", 3, "data", "columns", "sortable"], [1, "p-4", "opacity-60"], [1, "p-4"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], [1, "p-4", "font-mono", "text-xs"], ["icon", "", "matRipple", "", 1, "mx-auto", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["mat-menu-item", "", 3, "routerLink"], [1, "text-2xl", "text-error"]], template: function EmailTemplatesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "h2", 7);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "div", 8);
        \u0275\u0275elementStart(6, "a", 9)(7, "div", 10);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "app-icon", 11);
        \u0275\u0275text(11, "add");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 12)(13, "div", 13);
        \u0275\u0275element(14, "simple-table", 14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275pipe(17, "async");
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275template(21, EmailTemplatesListComponent_ng_template_21_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(23, EmailTemplatesListComponent_ng_template_23_Template, 5, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(25, EmailTemplatesListComponent_ng_template_25_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(27, EmailTemplatesListComponent_ng_template_27_Template, 26, 13, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_8_0;
        const date_template_r8 = \u0275\u0275reference(22);
        const bld_template_r9 = \u0275\u0275reference(24);
        const trigger_template_r10 = \u0275\u0275reference(26);
        const actions_template_r11 = \u0275\u0275reference(28);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.EMAIL_TEMPLATES_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(22, _c02));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "APP.CONCIERGE.EMAIL_TEMPLATES_ADD"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("data", ctx.templates)("columns", \u0275\u0275pureFunction6(39, _c7, \u0275\u0275pureFunction1(23, _c12, \u0275\u0275pipeBind1(15, 10, "FORM.TITLE")), \u0275\u0275pureFunction2(25, _c2, \u0275\u0275pipeBind1(16, 12, "COMMON.CATEGORY"), !((tmp_8_0 = \u0275\u0275pipeBind1(17, 14, ctx.filters)) == null ? null : tmp_8_0.category) && false), \u0275\u0275pureFunction2(28, _c3, \u0275\u0275pipeBind1(18, 16, "COMMON.TRIGGER"), trigger_template_r10), \u0275\u0275pureFunction2(31, _c4, \u0275\u0275pipeBind1(19, 18, "RESOURCE.BUILDING"), bld_template_r9), \u0275\u0275pureFunction2(34, _c5, \u0275\u0275pipeBind1(20, 20, "COMMON.CREATED_AT"), date_template_r8), \u0275\u0275pureFunction1(37, _c6, actions_template_r11)))("sortable", true);
      }
    }, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, SimpleTableComponent, RouterLink, AsyncPipe, DatePipe, BuildingPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplatesListComponent, { className: "EmailTemplatesListComponent", filePath: "apps/concierge/src/app/email-templates/email-templates-list.component.ts", lineNumber: 157 });
})();

// apps/concierge/src/app/email-templates/email-templates.component.ts
var _c03 = ["app-email-templates", ""];
var EmailTemplatesComponent = class _EmailTemplatesComponent {
  static {
    this.\u0275fac = function EmailTemplatesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailTemplatesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplatesComponent, selectors: [["", "app-email-templates", ""]], standalone: false, attrs: _c03, decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function EmailTemplatesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1);
        \u0275\u0275element(4, "router-outlet");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=email-templates.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplatesComponent, { className: "EmailTemplatesComponent", filePath: "apps/concierge/src/app/email-templates/email-templates.component.ts", lineNumber: 27 });
})();

// apps/concierge/src/app/email-templates/email-templates.module.ts
var ROUTES = [
  {
    path: "",
    component: EmailTemplatesComponent,
    children: [{ path: "", component: EmailTemplatesListComponent }]
  },
  { path: "manage", component: EmailTemplateManageComponent },
  { path: "manage/:id", component: EmailTemplateManageComponent },
  { path: "**", redirectTo: "" }
];
var EmailTemplatesModule = class _EmailTemplatesModule {
  static {
    this.\u0275fac = function EmailTemplatesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailTemplatesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EmailTemplatesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      UIModule,
      SharedSpacesModule,
      SharedBookingsModule,
      FormFieldsModule,
      RouterModule.forChild(ROUTES)
    ] });
  }
};
export {
  EmailTemplatesModule
};
//# sourceMappingURL=email-templates.module-CBMIH5S2.js.map
