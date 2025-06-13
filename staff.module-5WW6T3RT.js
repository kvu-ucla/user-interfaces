import "./chunk-WMMHWD4R.js";
import "./chunk-XJVHDQBX.js";
import {
  ActionIconComponent,
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Clipboard,
  CommonModule,
  CustomTooltipComponent,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  LevelPipe,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatFormField,
  MatInput,
  MatOption,
  MatPrefix,
  MatProgressBar,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatSlideToggle,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  Router,
  RouterModule,
  SearchbarComponent,
  SimpleTableComponent,
  TranslatePipe,
  UIModule,
  UserAvatarComponent,
  UserSearchFieldComponent,
  __async,
  __spreadProps,
  __spreadValues,
  checkinBooking,
  combineLatest,
  du,
  endOfDay,
  filter,
  first,
  getUnixTime,
  hu,
  i18n,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  openConfirmModal,
  queryBookings,
  randomString,
  saveBooking,
  searchStaff,
  shareReplay,
  startOfDay,
  switchMap,
  timePeriodsIntersect,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-6ITZD6HK.js";

// apps/concierge/src/app/staff/emergency-contact-modal.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => [];
function EmergencyContactModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function EmergencyContactModalComponent_main_5_mat_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r3 = ctx.$implicit;
    \u0275\u0275property("value", level_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r3.display_name || level_r3.name, " ");
  }
}
function EmergencyContactModalComponent_main_5_ng_container_44_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", role_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r4, " ");
  }
}
function EmergencyContactModalComponent_main_5_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EmergencyContactModalComponent_main_5_ng_container_44_mat_option_1_Template, 2, 2, "mat-option", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", role_r4);
  }
}
function EmergencyContactModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 8)(1, "form", 9)(2, "a-user-search-field", 10);
    \u0275\u0275listener("ngModelChange", function EmergencyContactModalComponent_main_5_Template_a_user_search_field_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setUser($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "label", 12);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 13);
    \u0275\u0275element(8, "input", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 15)(10, "div", 16)(11, "label", 17);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 13);
    \u0275\u0275element(15, "input", 18);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 16)(18, "label", 17);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 13);
    \u0275\u0275element(22, "input", 19);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 11)(25, "label", 12);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 13)(29, "mat-select", 20);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementStart(31, "mat-option", 21);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, EmergencyContactModalComponent_main_5_mat_option_34_Template, 2, 2, "mat-option", 22);
    \u0275\u0275pipe(35, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 11)(37, "label", 17);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 15)(41, "mat-form-field", 23)(42, "mat-select", 24);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275template(44, EmergencyContactModalComponent_main_5_ng_container_44_Template, 2, 1, "ng-container", 25);
    \u0275\u0275pipe(45, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "button", 26)(47, "icon");
    \u0275\u0275text(48, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 27);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const ctx_r1 = \u0275\u0275nextContext();
    const role_form_r5 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(42, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 16, "FORM.NAME"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 18, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 20, "FORM.EMAIL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 22, "FORM.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 24, "APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 26, "RESOURCE.LEVEL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(30, 28, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 30, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(35, 32, ctx_r1.levels));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 34, "APP.CONCIERGE.CONTACTS_ROLES"));
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(43, 36, "APP.CONCIERGE.CONTACTS_ROLES_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ((tmp_16_0 = \u0275\u0275pipeBind1(45, 38, ctx_r1.data)) == null ? null : tmp_16_0.roles) || \u0275\u0275pureFunction0(43, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("content", role_form_r5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 40, "APP.CONCIERGE.CONTACTS_ROLES_ADD"), " ");
  }
}
function EmergencyContactModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 30)(1, "button", 31);
    \u0275\u0275listener("click", function EmergencyContactModalComponent_footer_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
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
function EmergencyContactModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 32);
    \u0275\u0275element(1, "mat-spinner", 33);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.CONTACTS_SAVING"));
  }
}
function EmergencyContactModalComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "mat-form-field", 13)(2, "input", 35);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyContactModalComponent_ng_template_9_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.role_name, $event) || (ctx_r1.role_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 36);
    \u0275\u0275listener("click", function EmergencyContactModalComponent_ng_template_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addRole());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.role_name);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 3, "APP.CONCIERGE.CONTACTS_ROLES_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "APP.CONCIERGE.CONTACTS_ROLES_SAVE"), " ");
  }
}
var EmergencyContactModalComponent = class _EmergencyContactModalComponent {
  constructor(_data, _dialog_ref, _org) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this._org = _org;
    this._changes = new BehaviorSubject(0);
    this.loading = false;
    this.contact = this._data;
    this.data = combineLatest([
      this._org.active_building,
      this._changes
    ]).pipe(filter(([bld]) => !!bld), switchMap(([bld]) => hu(bld.id, "emergency_contacts")), map(({ details }) => details || { roles: [], contacts: [] }), shareReplay(1));
    this.form = new FormGroup({
      id: new FormControl(this._data?.id || `contact-${randomString(8)}`),
      name: new FormControl(this._data?.name || ""),
      email: new FormControl(this._data?.email || ""),
      phone: new FormControl(this._data?.phone || ""),
      zone: new FormControl(this._data?.zone || ""),
      roles: new FormControl(this._data?.roles || [])
    });
    this.levels = this._org.active_levels;
  }
  addRole() {
    return __async(this, null, function* () {
      if (!this.role_name)
        return;
      this._tooltip.close();
      this.loading = true;
      this._dialog_ref.disableClose = true;
      const data = yield nextValueFrom(this.data);
      yield du(this._org.building.id, {
        name: "emergency_contacts",
        description: "Emergency Contacts",
        details: {
          roles: [...data.roles || [], this.role_name].filter((_) => !!_),
          contacts: data.contacts
        }
      }).toPromise();
      this._changes.next(0);
      this.form.patchValue({
        roles: [...this.form.value.roles || [], this.role_name]
      });
      this.role_name = "";
      this.loading = false;
      this._dialog_ref.disableClose = false;
    });
  }
  setUser(user) {
    this.form.patchValue({
      name: user?.name,
      email: user?.email,
      phone: user?.phone
    });
  }
  save() {
    return __async(this, null, function* () {
      this.loading = true;
      this._dialog_ref.disableClose = true;
      const data = yield nextValueFrom(this.data);
      const contacts = data?.contacts || [];
      const new_contacts = [
        ...contacts.filter((_) => _.id !== this.contact?.id),
        this.form.value
      ].sort((a, b) => a.name.localeCompare(b.name));
      yield du(this._org.building.id, {
        name: "emergency_contacts",
        description: "Emergency Contacts",
        details: { roles: data.roles || [], contacts: new_contacts }
      }).toPromise().catch((e) => {
        this._dialog_ref.disableClose = false;
        this.loading = false;
        notifyError(i18n("APP.CONCIERGE.CONTACTS_SAVE_ERROR", { error: e }));
        throw e;
      });
      this._dialog_ref.disableClose = false;
      notifySuccess(i18n("APP.CONCIERGE.CONTACTS_SAVE_SUCCESS"));
      this.loading = false;
      this._dialog_ref.close();
    });
  }
  static {
    this.\u0275fac = function EmergencyContactModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmergencyContactModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmergencyContactModalComponent, selectors: [["emergency-contact-modal"]], viewQuery: function EmergencyContactModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CustomTooltipComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tooltip = _t.first);
      }
    }, standalone: false, decls: 11, vars: 7, consts: [["load_state", ""], ["role_form", ""], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "w-[36rem] p-4", 4, "ngIf", "ngIfElse"], ["class", "flex items-center justify-end border-t border-base-200 px-4 py-2", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-[36rem]", "p-4"], [3, "formGroup"], ["ngModel", "", 1, "mb-4", 3, "ngModelChange", "ngModelOptions"], [1, "flex", "flex-col"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", "placeholder", "Full name"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "flex-1", "flex-col"], ["for", "email"], ["matInput", "", "formControlName", "email", "type", "email", 3, "placeholder"], ["matInput", "", "formControlName", "phone", "type", "tel", 3, "placeholder"], ["formControlName", "zone", 3, "placeholder"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["multiple", "", "formControlName", "roles", 3, "placeholder"], [4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "customTooltip", "", 1, "space-x-2", 3, "content"], [1, "pr-2"], [3, "value"], [3, "value", 4, "ngIf"], [1, "flex", "items-center", "justify-end", "border-t", "border-base-200", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["loading", "", 1, "flex", "h-64", "flex-col", "items-center", "justify-center"], [1, "mb-4", 3, "diameter"], [1, "rounded", "bg-base-100", "p-4"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function EmergencyContactModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 2)(1, "h2", 3);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, EmergencyContactModalComponent_button_4_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, EmergencyContactModalComponent_main_5_Template, 52, 44, "main", 5)(6, EmergencyContactModalComponent_footer_6_Template, 4, 3, "footer", 6)(7, EmergencyContactModalComponent_ng_template_7_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, EmergencyContactModalComponent_ng_template_9_Template, 7, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r8 = \u0275\u0275reference(8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, ctx.contact ? "APP.CONCIERGE.CONTACTS_EDIT" : "APP.CONCIERGE.CONTACTS_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r8);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, MatFormField, MatInput, MatSelect, MatOption, MatProgressSpinner, MatDialogClose, MatRipple, FormGroupDirective, FormControlName, UserSearchFieldComponent, IconComponent, CustomTooltipComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmergencyContactModalComponent, { className: "EmergencyContactModalComponent", filePath: "apps/concierge/src/app/staff/emergency-contact-modal.component.ts", lineNumber: 188 });
})();

// apps/concierge/src/app/staff/role-management-modal.component.ts
function RoleManagementModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 10)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function RoleManagementModalComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275listener("click", function RoleManagementModalComponent_ng_container_6_Template_button_click_4_listener() {
      const role_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.active = role_r3;
      return \u0275\u0275resetView(ctx_r3.role_name = role_r3);
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 14);
    \u0275\u0275listener("click", function RoleManagementModalComponent_ng_container_6_Template_button_click_7_listener() {
      const role_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeRole(role_r3));
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    \u0275\u0275nextContext();
    const role_form_r5 = \u0275\u0275reference(16);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(role_r3);
    \u0275\u0275advance();
    \u0275\u0275property("content", role_form_r5);
  }
}
function RoleManagementModalComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "mat-form-field", 16)(2, "input", 17);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RoleManagementModalComponent_ng_template_15_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.role_name, $event) || (ctx_r3.role_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 18);
    \u0275\u0275listener("click", function RoleManagementModalComponent_ng_template_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateRoles());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.role_name);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 3, "APP.CONCIERGE.CONTACTS_ROLES_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "APP.CONCIERGE.CONTACTS_ROLES_SAVE"), " ");
  }
}
var RoleManagementModalComponent = class _RoleManagementModalComponent {
  removeRole(role) {
    return __async(this, null, function* () {
      if (!role)
        return;
      this.loading = true;
      this._dialog_ref.disableClose = true;
      const data = yield nextValueFrom(this.data);
      yield du(this._org.building.id, {
        name: "emergency_contacts",
        description: "Emergency Contacts",
        details: {
          roles: [...data.roles.filter((_) => _ !== role)].filter((_) => !!_).sort((a, b) => a.localeCompare(b)),
          contacts: data.contacts.map((_) => __spreadProps(__spreadValues({}, _), {
            roles: _.roles.filter((r) => r !== role)
          }))
        }
      }).toPromise();
      this._changes.next(0);
      this.loading = false;
      this._dialog_ref.disableClose = false;
    });
  }
  updateRoles() {
    return __async(this, null, function* () {
      if (!this.role_name)
        return;
      this.loading = true;
      this._tooltip.close();
      this._dialog_ref.disableClose = true;
      const data = yield nextValueFrom(this.data);
      yield du(this._org.building.id, {
        name: "emergency_contacts",
        description: "Emergency Contacts",
        details: {
          roles: [
            ...data.roles.filter((_) => _ !== this.active),
            this.role_name
          ].filter((_) => !!_).sort((a, b) => a.localeCompare(b)),
          contacts: data.contacts
        }
      }).toPromise();
      this._changes.next(0);
      this.role_name = "";
      this.active = "";
      this.loading = false;
      this._dialog_ref.disableClose = false;
    });
  }
  constructor(_org, _dialog_ref) {
    this._org = _org;
    this._dialog_ref = _dialog_ref;
    this._changes = new BehaviorSubject(0);
    this.loading = false;
    this.data = combineLatest([
      this._org.active_building,
      this._changes
    ]).pipe(filter(([bld]) => !!bld), switchMap(([bld]) => hu(bld.id, "emergency_contacts")), map(({ details }) => {
      const value = details || { roles: [], contacts: [] };
      if (!value.roles)
        value.roles = [];
      if (!value.contacts)
        value.contacts = [];
      return value;
    }), shareReplay(1));
    this.roles = this.data.pipe(map((_) => _.roles));
  }
  static {
    this.\u0275fac = function RoleManagementModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoleManagementModalComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleManagementModalComponent, selectors: [["role-management-modal"]], viewQuery: function RoleManagementModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CustomTooltipComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tooltip = _t.first);
      }
    }, standalone: false, decls: 17, vars: 11, consts: [["role_form", ""], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], [1, "h-[32rem]", "max-h-[65vh]", "min-w-[28rem]", "overflow-y-auto"], [4, "ngFor", "ngForOf"], [1, "border-t", "border-base-200"], ["btn", "", "matRipple", "", "customTooltip", "", 1, "m-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-center", "space-x-2", 3, "click", "content"], [1, "truncate", "pl-2"], [1, "text-2xl"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "hover:bg-base-200:bg-base-300", "m-2", "flex", "items-center", "space-x-2", "rounded", "border", "border-base-200", "p-2"], [1, "flex-1", "truncate", "px-2"], ["icon", "", "matRipple", "", "customTooltip", "", 1, "h-12", "w-12", "rounded", "border", "border-secondary", "text-secondary", 3, "click", "content"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-error", "text-error", 3, "click"], [1, "rounded", "bg-base-100", "p-4"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function RoleManagementModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, RoleManagementModalComponent_button_4_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "main", 4);
        \u0275\u0275template(6, RoleManagementModalComponent_ng_container_6_Template, 10, 2, "ng-container", 5);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "footer", 6)(9, "button", 7);
        \u0275\u0275listener("click", function RoleManagementModalComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          ctx.active = "";
          return \u0275\u0275resetView(ctx.role_name = "");
        });
        \u0275\u0275elementStart(10, "div", 8);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "icon", 9);
        \u0275\u0275text(14, "add");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(15, RoleManagementModalComponent_ng_template_15_Template, 7, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const role_form_r5 = \u0275\u0275reference(16);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.CONTACTS_ROLES_MANAGE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(7, 7, ctx.roles));
        \u0275\u0275advance(3);
        \u0275\u0275property("content", role_form_r5);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 9, "APP.CONCIERGE.CONTACTS_ROLES_ADD"), " ");
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatDialogClose, MatRipple, IconComponent, CustomTooltipComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleManagementModalComponent, { className: "RoleManagementModalComponent", filePath: "apps/concierge/src/app/staff/role-management-modal.component.ts", lineNumber: 85 });
})();

// apps/concierge/src/app/staff/emergency-contacts.component.ts
var _c02 = ["app-emergency-contacts", ""];
var _c12 = () => [];
var _c2 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "roles", name: a0, content: a1, sortable: false });
var _c4 = (a0, a1) => ({ key: "zone", name: a0, content: a1, size: "8rem", sortable: false });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6rem", sortable: false });
var _c6 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function EmergencyContactsComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    \u0275\u0275property("value", role_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r2, " ");
  }
}
function EmergencyContactsComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function EmergencyContactsComponent_ng_template_42_Template_button_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.copyToClipboard(row_r4.email));
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.email, " ");
  }
}
function EmergencyContactsComponent_ng_template_44_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r6, " ");
  }
}
function EmergencyContactsComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, EmergencyContactsComponent_ng_template_44_span_1_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", data_r7);
  }
}
function EmergencyContactsComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "level");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const data_r8 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r8 ? (tmp_6_0 = \u0275\u0275pipeBind1(2, 1, data_r8)) == null ? null : tmp_6_0.display_name : "All", " ");
  }
}
function EmergencyContactsComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function EmergencyContactsComponent_ng_template_48_Template_button_click_1_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.editContact(row_r10));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 34);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function EmergencyContactsComponent_ng_template_48_Template_button_click_5_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeContact(row_r10));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.CONTACTS_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "APP.CONCIERGE.CONTACTS_REMOVE"));
  }
}
var EmergencyContactsComponent = class _EmergencyContactsComponent {
  constructor(_org, _dialog, _clipboard) {
    this._org = _org;
    this._dialog = _dialog;
    this._clipboard = _clipboard;
    this._change = new BehaviorSubject(0);
    this.search = "";
    this.role_filter = new BehaviorSubject("");
    this.data = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([bld]) => !!bld), switchMap(([bld]) => hu(bld.id, "emergency_contacts")), map(({ details }) => details || { roles: [], contacts: [] }), shareReplay(1));
    this.roles = this.data.pipe(map((_) => _?.roles || []));
    this.contacts = this.data.pipe(map((_) => _?.contacts || []));
    this.filtered_contacts = combineLatest([
      this.contacts,
      this.role_filter
    ]).pipe(map(([list, role]) => list.filter((_) => !role || _.roles.includes(role))));
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess("User's email copied to clipboard.");
    };
  }
  ngOnInit() {
  }
  manageRoles() {
    const ref = this._dialog.open(RoleManagementModalComponent, {});
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
  }
  editContact(contact) {
    const ref = this._dialog.open(EmergencyContactModalComponent, {
      data: contact
    });
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
  }
  removeContact(contact) {
    return __async(this, null, function* () {
      const result = yield openConfirmModal({
        title: "Remove Emergency Contact",
        content: `Are you sure you want to remove ${contact.name} from the emergency contacts?`,
        icon: { content: "delete" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading("Removing contact...");
      const data = yield nextValueFrom(this.data);
      const new_contacts = (data?.contacts || []).filter((_) => _.id !== contact.id);
      yield du(this._org.building.id, {
        name: "emergency_contacts",
        description: "Emergency Contacts",
        details: { roles: data.roles, contacts: new_contacts }
      }).toPromise();
      result.close();
      this._change.next(Date.now());
      notifySuccess("Successfully removed emergency contact.");
    });
  }
  static {
    this.\u0275fac = function EmergencyContactsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmergencyContactsComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(Clipboard));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmergencyContactsComponent, selectors: [["", "app-emergency-contacts", ""]], standalone: false, attrs: _c02, decls: 50, vars: 53, consts: [["person_template", ""], ["roles_template", ""], ["zone_template", ""], ["actions_template", ""], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], ["topbar", "", 1, "flex", "flex-col", "px-8", "py-4"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "space-x-2", 3, "click"], [1, "text-2xl"], [1, "pr-2"], [1, "mt-2", "flex", "items-center", "justify-between", "py-2"], [3, "ngModelChange", "ngModel", "placeholder"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], [1, "block", "min-w-[52rem]", "text-sm", 3, "data", "filter", "empty_message", "columns", "sortable"], [1, "h-12", "w-full"], [3, "value"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "flex-wrap", "p-2"], ["class", "m-1 rounded-2xl bg-info px-2 py-1 font-mono text-xs text-info-content", 4, "ngFor", "ngForOf"], [1, "m-1", "rounded-2xl", "bg-info", "px-2", "py-1", "font-mono", "text-xs", "text-info-content"], [1, "p-4"], [1, "flex", "w-full", "items-center", "justify-end", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function EmergencyContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 4);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 5)(4, "section", 6)(5, "div", 7)(6, "h2", 8);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 9)(10, "mat-form-field", 10)(11, "icon", 11);
        \u0275\u0275text(12, " search ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 12);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function EmergencyContactsComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "button", 13);
        \u0275\u0275listener("click", function EmergencyContactsComponent_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.editContact());
        });
        \u0275\u0275elementStart(16, "icon", 14);
        \u0275\u0275text(17, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 15);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 16)(22, "mat-form-field", 10)(23, "mat-select", 17);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275listener("ngModelChange", function EmergencyContactsComponent_Template_mat_select_ngModelChange_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.role_filter.next($event));
        });
        \u0275\u0275elementStart(25, "mat-option", 18);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, EmergencyContactsComponent_mat_option_28_Template, 2, 2, "mat-option", 19);
        \u0275\u0275pipe(29, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 9)(31, "button", 20);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275listener("click", function EmergencyContactsComponent_Template_button_click_31_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.manageRoles());
        });
        \u0275\u0275elementStart(33, "icon");
        \u0275\u0275text(34, "list_alt");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(35, "section", 21);
        \u0275\u0275element(36, "simple-table", 22);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275element(41, "div", 23);
        \u0275\u0275template(42, EmergencyContactsComponent_ng_template_42_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(44, EmergencyContactsComponent_ng_template_44_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(46, EmergencyContactsComponent_ng_template_46_Template, 3, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(48, EmergencyContactsComponent_ng_template_48_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const person_template_r11 = \u0275\u0275reference(43);
        const roles_template_r12 = \u0275\u0275reference(45);
        const zone_template_r13 = \u0275\u0275reference(47);
        const actions_template_r14 = \u0275\u0275reference(49);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 14, "APP.CONCIERGE.CONTACTS_HEADER"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 16, "APP.CONCIERGE.CONTACTS_FILTER"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 18, "APP.CONCIERGE.CONTACTS_ADD"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.role_filter.getValue())("placeholder", \u0275\u0275pipeBind1(24, 20, "APP.CONCIERGE.CONTACTS_ROLES_ALL"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 22, "APP.CONCIERGE.CONTACTS_ROLES_ALL"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(29, 24, ctx.roles) || \u0275\u0275pureFunction0(36, _c12));
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(32, 26, "APP.CONCIERGE.CONTACTS_ROLES_MANAGE"));
        \u0275\u0275advance(5);
        \u0275\u0275property("data", ctx.filtered_contacts)("filter", ctx.search)("empty_message", \u0275\u0275pipeBind1(37, 28, ctx.search ? "APP.CONCIERGE.CONTACTS_SEARCH_EMPTY" : "APP.CONCIERGE.CONTACTS_EMPTY"))("columns", \u0275\u0275pureFunction4(48, _c6, \u0275\u0275pureFunction2(37, _c2, \u0275\u0275pipeBind1(38, 30, "COMMON.PERSON"), person_template_r11), \u0275\u0275pureFunction2(40, _c3, \u0275\u0275pipeBind1(39, 32, "APP.CONCIERGE.CONTACTS_ROLES"), roles_template_r12), \u0275\u0275pureFunction2(43, _c4, \u0275\u0275pipeBind1(40, 34, "COMMON.ZONE"), zone_template_r13), \u0275\u0275pureFunction1(46, _c5, actions_template_r14)))("sortable", true);
      }
    }, dependencies: [NgForOf, DefaultValueAccessor, NgControlStatus, NgModel, ApplicationTopbarComponent, ApplicationSidebarComponent, MatFormField, MatPrefix, MatInput, MatSelect, MatOption, MatTooltip, MatRipple, IconComponent, SimpleTableComponent, AsyncPipe, TranslatePipe, LevelPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=emergency-contacts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmergencyContactsComponent, { className: "EmergencyContactsComponent", filePath: "apps/concierge/src/app/staff/emergency-contacts.component.ts", lineNumber: 222 });
})();

// apps/concierge/src/app/staff/staff-state.service.ts
var StaffStateService = class _StaffStateService extends AsyncHandler {
  constructor(_org) {
    super();
    this._org = _org;
    this._onsite = {};
    this._events = {};
    this._filters = new BehaviorSubject({});
    this._search = new BehaviorSubject("");
    this._loading = new BehaviorSubject(false);
    this._users = new BehaviorSubject([]);
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.users = this._filters.asObservable();
    this.filtered_users = combineLatest([
      this._search,
      this._users,
      this._filters
    ]).pipe(map((details) => {
      const [filter2, users, options] = details;
      return users.filter((i) => (!filter2 || i.name.toLowerCase().includes(filter2) || i.email.toLowerCase().includes(filter2)) && (!options.only_onsite || this._onsite[i.email]));
    }));
    this.user_events = combineLatest([this._filters]).pipe(switchMap((_) => __async(this, null, function* () {
      this._loading.next(true);
      const bookings = yield queryBookings({
        period_start: getUnixTime(startOfDay(Date.now())),
        period_end: getUnixTime(endOfDay(Date.now())),
        type: "staff"
      }).toPromise();
      const checkin_map = {};
      const now = (/* @__PURE__ */ new Date()).valueOf();
      for (const bkn of bookings) {
        if (timePeriodsIntersect(now, now, bkn.date, bkn.date + bkn.duration * 60 * 1e3)) {
          checkin_map[bkn.asset_id] = bkn.checked_in;
          this._events[bkn.asset_id] = bkn;
        }
      }
      this._onsite = checkin_map;
      this._loading.next(false);
      return checkin_map;
    })), shareReplay(1));
    this.loadUsers();
    this.user_events.subscribe();
  }
  setFilters(filters) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), filters));
  }
  setSearchString(search) {
    this._search.next(search);
  }
  startPolling(delay = 30 * 1e3) {
    this.setFilters(this._filters.getValue());
    this.interval("poll", () => this.setFilters(this._filters.getValue()), delay);
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  checkin(user) {
    return __async(this, null, function* () {
      const result = yield saveBooking({
        booking_start: Math.floor((/* @__PURE__ */ new Date()).valueOf() / 1e3),
        booking_end: Math.floor(endOfDay(/* @__PURE__ */ new Date()).valueOf() / 1e3),
        asset_id: user.email,
        title: "Checked-in Onsite",
        description: this._org.building.display_name || this._org.building.name,
        zones: [this._org.building.id],
        booking_type: "staff"
      }).toPromise();
      yield checkinBooking(result.id, true).toPromise();
      this._events[user.email] = result;
      this._onsite[user.email] = true;
    });
  }
  checkout(user) {
    return __async(this, null, function* () {
      const event = this._events[user.email];
      if (event) {
        const result = yield saveBooking(__spreadProps(__spreadValues({}, event.toJSON()), {
          booking_end: Math.floor((/* @__PURE__ */ new Date()).valueOf() / 1e3)
        })).toPromise();
        yield checkinBooking(result.id, false).toPromise();
        this._events[user.email] = result;
        this._onsite[user.email] = false;
      }
    });
  }
  loadUsers() {
    return __async(this, null, function* () {
      const user_list = yield searchStaff("").toPromise();
      user_list.sort((a, b) => a.name.localeCompare(b.name));
      this._users.next(user_list);
    });
  }
  static {
    this.\u0275fac = function StaffStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StaffStateService)(\u0275\u0275inject(OrganisationService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StaffStateService, factory: _StaffStateService.\u0275fac, providedIn: "root" });
  }
};

// apps/concierge/src/app/staff/staff-details.component.ts
function StaffDetailsComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.DIRECTORY_ONSITE"), " ");
  }
}
function StaffDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "a-user-avatar", 2);
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, StaffDetailsComponent_div_0_div_7_Template, 3, 3, "div", 6);
    \u0275\u0275elementStart(8, "div", 7)(9, "action-icon", 8);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function StaffDetailsComponent_div_0_Template_action_icon_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onsite ? ctx_r1.checkout() : ctx_r1.checkin());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 9);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "icon");
    \u0275\u0275text(14, "email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "a", 9);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "icon");
    \u0275\u0275text(18, "call");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("user", ctx_r1.user);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.user == null ? null : ctx_r1.user.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.user == null ? null : ctx_r1.user.email, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.onsite);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 13, ctx_r1.onsite ? "COMMON.CHECK_IN" : "COMMON.CHECK_OUT"))("loading", ctx_r1.loading)("content", ctx_r1.onsite ? "event_busy" : "event_available");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(12, 15, "APP.CONCIERGE.DIRECTORY_EMAIL"))("href", "mailto:" + (ctx_r1.user == null ? null : ctx_r1.user.email), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("disabled", !(ctx_r1.user == null ? null : ctx_r1.user.email));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 17, "APP.CONCIERGE.DIRECTORY_PHONE"))("href", "tel:" + (ctx_r1.user == null ? null : ctx_r1.user.phone), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("disabled", !(ctx_r1.user == null ? null : ctx_r1.user.phone));
  }
}
var StaffDetailsComponent = class _StaffDetailsComponent {
  constructor(_state) {
    this._state = _state;
    this.checkin = () => __async(this, null, function* () {
      this.loading = true;
      yield this._state.checkin(this.user).catch((e) => notifyError(i18n("APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR", { error: e })));
      this.loading = false;
    });
    this.checkout = () => __async(this, null, function* () {
      this.loading = true;
      yield this._state.checkout(this.user).catch((e) => i18n("APP.CONCIERGE.DIRECTORY_CHECKOUT_ERROR", { error: e }));
      this.loading = false;
    });
  }
  static {
    this.\u0275fac = function StaffDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StaffDetailsComponent)(\u0275\u0275directiveInject(StaffStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffDetailsComponent, selectors: [["staff-details"]], inputs: { user: "user", onsite: "onsite" }, standalone: false, decls: 1, vars: 1, consts: [["class", "flex w-full items-center border-b border-base-200 bg-base-100 px-4 py-2 hover:opacity-80", "details", "", 4, "ngIf"], ["details", "", 1, "flex", "w-full", "items-center", "border-b", "border-base-200", "bg-base-100", "px-4", "py-2", "hover:opacity-80"], [3, "user"], [1, "flex", "flex-1", "flex-col"], [1, "px-2"], [1, "px-2", "text-xs", "text-opacity-50"], ["class", "px-4 text-xs opacity-50", 4, "ngIf"], [1, "flex", "items-center"], [3, "click", "matTooltip", "loading", "content"], ["icon", "", "matRipple", "", 3, "matTooltip", "href"], [1, "px-4", "text-xs", "opacity-50"]], template: function StaffDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, StaffDetailsComponent_div_0_Template, 19, 19, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.user);
      }
    }, dependencies: [NgIf, MatTooltip, MatRipple, ActionIconComponent, IconComponent, UserAvatarComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffDetailsComponent, { className: "StaffDetailsComponent", filePath: "apps/concierge/src/app/staff/staff-details.component.ts", lineNumber: 60 });
})();

// apps/concierge/src/app/staff/staff-listing.component.ts
var _c03 = ["container"];
function StaffListingComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function StaffListingComponent_div_1_Template_div_click_0_listener() {
      const group_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.scrollTo(group_r3));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("disabled", \u0275\u0275pipeBind1(1, 5, ctx_r3.user_list)[group_r3].length <= 0)("active", group_r3 === ctx_r3.active_group);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", group_r3, " ");
  }
}
function StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_staff_details_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "staff-details", 12);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const group_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", "letter-" + group_r7 + "-" + i_r6)("user", user_r5)("onsite", \u0275\u0275pipeBind1(1, 3, ctx_r3.events) ? \u0275\u0275pipeBind1(2, 5, ctx_r3.events)[user_r5.email] : false);
  }
}
function StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_staff_details_3_Template, 3, 7, "staff-details", 11);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", "letter-" + (group_r7 === "#" ? "0" : group_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r7, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 3, ctx_r3.user_list)[group_r7]);
  }
}
function StaffListingComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_Template, 5, 5, "ng-container", 9);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r3.user_list)[group_r7].length);
  }
}
function StaffListingComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StaffListingComponent_ng_container_4_ng_container_1_Template, 3, 3, "ng-container", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.groups);
  }
}
function StaffListingComponent_mat_progress_bar_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 13);
  }
}
function StaffListingComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY"));
  }
}
var CHARS = "#abcdefghijklmnopqrstuvwxyz".split("");
var StaffListingComponent = class _StaffListingComponent extends AsyncHandler {
  constructor(_state) {
    super();
    this._state = _state;
    this.active_group = "#";
    this.groups = CHARS;
    this.events = this._state.user_events;
    this.loading = this._state.loading;
    this.user_count = this._state.filtered_users.pipe(map((list) => list.length));
    this.user_list = this._state.filtered_users.pipe(map((list) => {
      const user_map = {};
      for (const char of CHARS) {
        user_map[char] = (list || []).filter((user) => user.name.toLowerCase()[0].startsWith(char) || char === "#" && !CHARS.includes(user.name.toLowerCase()[0]));
      }
      this.timeout("scroll", () => this.onScroll({}), 30);
      return user_map;
    }));
  }
  onScroll(_) {
    const scroll_top = this._el.nativeElement.scrollTop;
    for (const group of CHARS) {
      const el = document.querySelector(`#letter-${group === "#" ? "0" : group}`);
      if (el) {
        if (el.offsetTop - scroll_top > 0) {
          break;
        }
        this.active_group = group;
      }
    }
  }
  scrollTo(group) {
    const el = document.querySelector(`#letter-${group}-0`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      this.active_group = group;
    }
  }
  static {
    this.\u0275fac = function StaffListingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StaffListingComponent)(\u0275\u0275directiveInject(StaffStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffListingComponent, selectors: [["staff-listings"]], viewQuery: function StaffListingComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._el = _t.first);
      }
    }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 8, consts: [["container", ""], ["empty_state", ""], [1, "flex", "w-full", "items-center", "justify-center", "p-2"], ["letter", "", "class", "flex h-6 w-6 cursor-pointer items-center justify-center text-xs capitalize", 3, "disabled", "active", "click", 4, "ngFor", "ngForOf"], [1, "relative", "w-full", "flex-1", "overflow-auto", "bg-base-200", 2, "height", "50%", 3, "scroll"], [4, "ngIf", "ngIfElse"], ["mode", "indeterminate", 4, "ngIf"], ["letter", "", 1, "flex", "h-6", "w-6", "cursor-pointer", "items-center", "justify-center", "text-xs", "capitalize", 3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["group", "", 1, "sticky", "top-0", "z-10", "border-b", "bg-base-200", "text-sm", "font-medium", "capitalize", 3, "id"], [3, "id", "user", "onsite", 4, "ngFor", "ngForOf"], [3, "id", "user", "onsite"], ["mode", "indeterminate"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"]], template: function StaffListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275template(1, StaffListingComponent_div_1_Template, 3, 7, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 4, 0);
        \u0275\u0275listener("scroll", function StaffListingComponent_Template_div_scroll_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onScroll($event));
        });
        \u0275\u0275template(4, StaffListingComponent_ng_container_4_Template, 2, 1, "ng-container", 5);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, StaffListingComponent_mat_progress_bar_6_Template, 1, 0, "mat-progress-bar", 6);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275template(8, StaffListingComponent_ng_template_8_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const empty_state_r8 = \u0275\u0275reference(9);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.groups);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(5, 4, ctx.user_count))("ngIfElse", empty_state_r8);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 6, ctx.loading));
      }
    }, dependencies: [NgForOf, NgIf, MatProgressBar, StaffDetailsComponent, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 50%;\n}\n[letter][_ngcontent-%COMP%] {\n  transition: font-size 200ms, color 200ms;\n}\n[group][_ngcontent-%COMP%] {\n  border-color: #ccc;\n  padding: 0.5rem 1.65rem;\n}\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.2;\n  pointer-events: none;\n}\n.active[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  opacity: 1;\n  color: #d81b60;\n}\n/*# sourceMappingURL=staff-listing.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffListingComponent, { className: "StaffListingComponent", filePath: "apps/concierge/src/app/staff/staff-listing.component.ts", lineNumber: 103 });
})();

// apps/concierge/src/app/staff/staff-topbar.component.ts
function StaffTopbarComponent_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
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
var StaffTopbarComponent = class _StaffTopbarComponent extends AsyncHandler {
  constructor(_state, _org, _route, _router) {
    super();
    this._state = _state;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this.zones = [];
    this.levels = this._org.active_levels;
    this.filters = this._state.filters;
    this.setDate = (date) => this._state.setFilters({ date });
    this.setFilters = (filters) => this._state.setFilters(filters);
    this.setSearch = (str) => this._state.setSearchString(str);
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setFilters({ zones });
    };
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
      this.setSearch("");
    });
  }
  static {
    this.\u0275fac = function StaffTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StaffTopbarComponent)(\u0275\u0275directiveInject(StaffStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffTopbarComponent, selectors: [["staff-topbar"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 13, consts: [[1, "flex", "h-20", "items-center", "space-x-2", "border-b", "border-base-200", "bg-base-100", "px-4"], ["appearance", "outline"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [1, "m-2", 3, "ngModelChange", "ngModel"], [1, "text-xs"], [1, "w-2", "flex-1"], [1, "mr-2", 3, "modelChange"], [3, "value"]], template: function StaffTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function StaffTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function StaffTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          return ctx.updateZones($event);
        });
        \u0275\u0275template(4, StaffTopbarComponent_mat_option_4_Template, 2, 2, "mat-option", 3);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "mat-slide-toggle", 4);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275listener("ngModelChange", function StaffTopbarComponent_Template_mat_slide_toggle_ngModelChange_6_listener($event) {
          return ctx.setFilters({ only_onsite: $event });
        });
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(11, "div", 6);
        \u0275\u0275elementStart(12, "searchbar", 7);
        \u0275\u0275listener("modelChange", function StaffTopbarComponent_Template_searchbar_modelChange_12_listener($event) {
          return ctx.setSearch($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.zones);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 5, "COMMON.LEVEL_ALL"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 7, ctx.levels));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(7, 9, ctx.filters)) == null ? null : tmp_3_0.only_onsite);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "APP.CONCIERGE.DIRECTORY_ONSITE_ONLY"), " ");
      }
    }, dependencies: [NgForOf, NgControlStatus, NgModel, SearchbarComponent, MatFormField, MatSelect, MatOption, MatSlideToggle, AsyncPipe, TranslatePipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=staff-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffTopbarComponent, { className: "StaffTopbarComponent", filePath: "apps/concierge/src/app/staff/staff-topbar.component.ts", lineNumber: 55 });
})();

// apps/concierge/src/app/staff/staff.component.ts
var _c04 = ["app-new-staff", ""];
function StaffComponent_mat_progress_bar_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 5);
  }
}
var StaffComponent = class _StaffComponent {
  constructor(_state) {
    this._state = _state;
    this.loading = this._state.loading;
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
  static {
    this.\u0275fac = function StaffComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StaffComponent)(\u0275\u0275directiveInject(StaffStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffComponent, selectors: [["", "app-new-staff", ""]], standalone: false, attrs: _c04, decls: 8, vars: 3, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "w-full"], [1, "h-0", "w-full", "flex-1"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]], template: function StaffComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1);
        \u0275\u0275element(4, "staff-topbar", 2)(5, "staff-listings", 3);
        \u0275\u0275template(6, StaffComponent_mat_progress_bar_6_Template, 1, 0, "mat-progress-bar", 4);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 1, ctx.loading));
      }
    }, dependencies: [NgIf, ApplicationTopbarComponent, ApplicationSidebarComponent, MatProgressBar, StaffTopbarComponent, StaffListingComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=staff.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffComponent, { className: "StaffComponent", filePath: "apps/concierge/src/app/staff/staff.component.ts", lineNumber: 35 });
})();

// apps/concierge/src/app/staff/staff.module.ts
var ROUTES = [
  { path: "", component: StaffComponent },
  { path: "emergency-contacts", component: EmergencyContactsComponent }
];
var COMPONENTS = [
  StaffComponent,
  StaffTopbarComponent,
  StaffListingComponent,
  StaffDetailsComponent,
  EmergencyContactsComponent,
  EmergencyContactModalComponent,
  RoleManagementModalComponent
];
var StaffModule = class _StaffModule {
  static {
    this.\u0275fac = function StaffModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StaffModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _StaffModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      UIModule,
      RouterModule.forChild(ROUTES)
    ] });
  }
};
export {
  COMPONENTS,
  StaffModule
};
//# sourceMappingURL=staff.module-5WW6T3RT.js.map
