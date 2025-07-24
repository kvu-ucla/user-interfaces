import {
  ParkingStateService
} from "./chunk-LO2MOV5C.js";
import {
  InviteVisitorFormComponent,
  SharedBookingsModule
} from "./chunk-UYIE34NJ.js";
import "./chunk-IFDFNNDT.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  Booking,
  BuildingPipe,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DateOptionsComponent,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Injectable,
  LevelPipe,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatProgressBar,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatTooltip,
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  PrintableComponent,
  Router,
  RouterModule,
  SearchbarComponent,
  SettingsService,
  SimpleTableComponent,
  TranslatePipe,
  UIModule,
  User,
  UserAvatarComponent,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  addDays,
  approveBooking,
  catchError,
  checkinBooking,
  combineLatest,
  debounceTime,
  downloadFile,
  filter,
  first,
  format,
  generateQRCode,
  getTimezoneOffsetString,
  getUnixTime,
  hu,
  i18n,
  inject,
  input,
  jsonToCsv,
  lastValueFrom,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  queryBookings,
  rejectBooking,
  saveBooking,
  setClassMetadata,
  shareReplay,
  signal,
  startOfDay,
  switchMap,
  tap,
  updateBooking,
  updateBookingInductionStatus,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunctionV,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-3BLBQ6P6.js";

// libs/users/src/lib/user-label.component.ts
var _c0 = (a0) => ({ title: a0 });
var _c1 = (a0) => ({ host_name: a0 });
var _c2 = (a0) => ({ location: a0 });
function UserLabelComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const level_r1 = \u0275\u0275readContextLet(17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "APP.VISITOR_KIOSK.LABEL_LOCATION", \u0275\u0275pureFunction1(4, _c2, level_r1.display_name || level_r1.name)), " ");
  }
}
function UserLabelComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.user()) == null ? null : tmp_2_0.pass_number);
  }
}
function UserLabelComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.user().qr_code, \u0275\u0275sanitizeUrl);
  }
}
var _UserLabelComponent = class _UserLabelComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this.user = input({});
  }
  get landscape() {
    return this._settings.get("app.label_landscape");
  }
  get logo() {
    return this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light");
  }
};
_UserLabelComponent.\u0275fac = function UserLabelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserLabelComponent)();
};
_UserLabelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserLabelComponent, selectors: [["user-label"]], inputs: { user: [1, "user"] }, decls: 33, vars: 43, consts: [[1, "user-label", "portrait", "relative", "m-2", "rounded-xl", "border", "border-neutral", "bg-base-100", "p-4"], [1, "flex", "h-full", "flex-col", "leading-tight"], [1, "mb-1", "flex", "h-20", "w-20", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border", "border-base-400", "bg-base-200", "text-4xl"], [3, "user"], [1, "mb-1", "text-2xl"], [1, "opacity-60"], [1, "absolute", "bottom-4", "left-4", "mt-2", "w-32", "rounded-lg", "border", "border-black", "px-2", "py-1", "text-center", "font-medium", "uppercase", "text-black"], [1, "absolute", "right-4", "top-4", "flex", "flex-col", "items-end", "space-y-2"], ["auth", "", "alt", "Logo", 1, "h-12", "object-contain", 3, "src"], [1, "text-right", "text-xs"], [1, "text-right"], [1, "absolute", "bottom-4", "right-4", "flex", "items-end"], [1, "text-right", "font-medium", "leading-tight"], [1, "relative", "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-lg", "border", "border-base-200"], [1, "h-14", "w-14", "object-contain", "object-center", 3, "src"]], template: function UserLabelComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "a-user-avatar", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 6);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 7);
    \u0275\u0275element(16, "img", 8);
    \u0275\u0275declareLet(17);
    \u0275\u0275pipe(18, "level");
    \u0275\u0275conditionalCreate(19, UserLabelComponent_Conditional_19_Template, 3, 6, "div", 9);
    \u0275\u0275elementStart(20, "pre", 10);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, UserLabelComponent_Conditional_22_Template, 2, 1, "pre", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 11)(24, "div", 12)(25, "div");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 13);
    \u0275\u0275conditionalCreate(32, UserLabelComponent_Conditional_32_Template, 1, 1, "img", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_10_0;
    let tmp_11_0;
    \u0275\u0275classProp("landscape", ctx.landscape);
    \u0275\u0275advance(3);
    \u0275\u0275property("user", ctx.user());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.user().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 22, "APP.VISITOR_KIOSK.LABEL_FOR", \u0275\u0275pureFunction1(39, _c0, (tmp_3_0 = ctx.user()) == null ? null : tmp_3_0.title)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 25, "APP.VISITOR_KIOSK.LABEL_HOST", \u0275\u0275pureFunction1(41, _c1, (tmp_4_0 = ctx.user()) == null ? null : tmp_4_0.host)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 28, "APP.VISITOR_KIOSK.VISITOR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("max-width", ctx.landscape ? "8rem" : "");
    \u0275\u0275property("src", (ctx.logo == null ? null : ctx.logo.src) || ctx.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    const level_r3 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(18, 30, ctx.user().zones));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(level_r3 ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_10_0 = ctx.user()) == null ? null : tmp_10_0.extra_details);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx.user()) == null ? null : tmp_11_0.pass_number) ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("space-x-2", !ctx.landscape)("space-y-2", ctx.landscape)("flex-col", ctx.landscape);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 33, ctx.user().date, "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 36, ctx.user().date, "mediumDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.user().qr_code ? 32 : -1);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  UserAvatarComponent,
  TranslatePipe,
  LevelPipe,
  AuthenticatedImageDirective
], styles: ["/* angular:styles/component:css;5c04361388d35df81bba08d5f28fa26d467424d6614f6aa9de2da6eea3b253d6;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/user-label.component.ts */\n:host {\n  font-size: 1cm;\n}\n.user-label.portrait {\n  width: 25rem;\n  height: 15rem;\n}\n.user-label.landscape {\n  width: 15rem;\n  height: 25rem;\n}\n/*# sourceMappingURL=user-label.component.css.map */\n"], encapsulation: 2 });
var UserLabelComponent = _UserLabelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserLabelComponent, [{
    type: Component,
    args: [{ selector: `user-label`, template: `
        <div
            class="user-label portrait relative m-2 rounded-xl border border-neutral bg-base-100 p-4"
            [class.landscape]="landscape"
        >
            <div class="flex h-full flex-col leading-tight">
                <div
                    class="mb-1 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-base-400 bg-base-200 text-4xl"
                >
                    <a-user-avatar [user]="user()"></a-user-avatar>
                </div>
                <div class="mb-1 text-2xl">{{ user().name }}</div>
                <div>
                    {{
                        'APP.VISITOR_KIOSK.LABEL_FOR'
                            | translate: { title: user()?.title }
                    }}
                </div>
                <div class="opacity-60">
                    {{
                        'APP.VISITOR_KIOSK.LABEL_HOST'
                            | translate
                                : {
                                      host_name: user()?.host,
                                  }
                    }}
                </div>
            </div>
            <div
                class="absolute bottom-4 left-4 mt-2 w-32 rounded-lg border border-black px-2 py-1 text-center font-medium uppercase text-black"
            >
                {{ 'APP.VISITOR_KIOSK.VISITOR' | translate }}
            </div>
            <div
                class="absolute right-4 top-4 flex flex-col items-end space-y-2"
            >
                <img
                    auth
                    class="h-12 object-contain"
                    [style.max-width]="landscape ? '8rem' : ''"
                    alt="Logo"
                    [src]="logo?.src || logo"
                />
                @let level = user().zones | level;
                @if (level) {
                    <div class="text-right text-xs">
                        {{
                            'APP.VISITOR_KIOSK.LABEL_LOCATION'
                                | translate
                                    : {
                                          location:
                                              level.display_name || level.name,
                                      }
                        }}
                    </div>
                }
                <pre class="text-right">{{ user()?.extra_details }}</pre>
                @if (user()?.pass_number) {
                    <pre class="text-right text-xs">{{
                        user()?.pass_number
                    }}</pre>
                }
            </div>
            <div
                class="absolute bottom-4 right-4 flex items-end"
                [class.space-x-2]="!landscape"
                [class.space-y-2]="landscape"
                [class.flex-col]="landscape"
            >
                <div class="text-right font-medium leading-tight">
                    <div>
                        {{ user().date | date: 'shortTime' }}
                    </div>
                    <div>
                        {{ user().date | date: 'mediumDate' }}
                    </div>
                </div>
                <div
                    class="relative flex h-16 w-16 items-center justify-center rounded-lg border border-base-200"
                >
                    @if (user().qr_code) {
                        <img
                            class="h-14 w-14 object-contain object-center"
                            [src]="user().qr_code"
                        />
                    }
                </div>
            </div>
        </div>
    `, encapsulation: ViewEncapsulation.None, imports: [
      CommonModule,
      UserAvatarComponent,
      TranslatePipe,
      LevelPipe,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;5c04361388d35df81bba08d5f28fa26d467424d6614f6aa9de2da6eea3b253d6;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/user-label.component.ts */\n:host {\n  font-size: 1cm;\n}\n.user-label.portrait {\n  width: 25rem;\n  height: 15rem;\n}\n.user-label.landscape {\n  width: 15rem;\n  height: 25rem;\n}\n/*# sourceMappingURL=user-label.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserLabelComponent, { className: "UserLabelComponent", filePath: "libs/users/src/lib/user-label.component.ts", lineNumber: 141 });
})();

// apps/concierge/src/app/visitors/visitor-induction-modal.component.ts
var _VisitorInductionModalComponent = class _VisitorInductionModalComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this.agree = false;
  }
  get induction_details() {
    return this._settings.get("app.induction_details");
  }
  get is_enabled() {
    return this._settings.get("app.induction_enabled") && this._settings.get("app.induction_details");
  }
};
_VisitorInductionModalComponent.\u0275fac = function VisitorInductionModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorInductionModalComponent)();
};
_VisitorInductionModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorInductionModalComponent, selectors: [["visitor-induction-modal"]], standalone: false, decls: 12, vars: 5, consts: [[1, "relative", "flex", "w-[32rem]", "flex-col", "items-center", "overflow-hidden", "rounded", "bg-base-100", "p-4", "shadow"], [1, "my-4"], [1, "max-h-[50vh]", "w-full", "overflow-y-auto", "overflow-x-hidden", "whitespace-pre-wrap", "rounded", "border", "border-base-300", "p-4", "text-sm", "opacity-60"], [1, "my-4", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "clear", "w-32", "underline", 3, "mat-dialog-close"], ["btn", "", "matRipple", "", 1, "w-32", 3, "disabled", "mat-dialog-close"]], template: function VisitorInductionModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275text(2, " Please read the induction information below before proceeding ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-checkbox", 3);
    \u0275\u0275twoWayListener("ngModelChange", function VisitorInductionModalComponent_Template_mat_checkbox_ngModelChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.agree, $event) || (ctx.agree = $event);
      return $event;
    });
    \u0275\u0275text(6, " I agree ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
    \u0275\u0275text(9, " Decline ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 6);
    \u0275\u0275text(11, " Accept ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.induction_details, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.agree);
    \u0275\u0275advance(3);
    \u0275\u0275property("mat-dialog-close", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.agree)("mat-dialog-close", true);
  }
}, dependencies: [NgControlStatus, NgModel, MatCheckbox, MatDialogClose, MatRipple], encapsulation: 2 });
var VisitorInductionModalComponent = _VisitorInductionModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorInductionModalComponent, [{
    type: Component,
    args: [{ selector: "visitor-induction-modal", template: `
        <div
            class="relative flex w-[32rem] flex-col items-center overflow-hidden rounded bg-base-100 p-4 shadow"
        >
            <p class="my-4">
                Please read the induction information below before proceeding
            </p>
            <div
                class="max-h-[50vh] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap rounded border border-base-300 p-4 text-sm opacity-60"
            >
                {{ induction_details }}
            </div>
            <mat-checkbox [(ngModel)]="agree" class="my-4">
                I agree
            </mat-checkbox>
            <div class="flex items-center justify-center space-x-2">
                <button
                    btn
                    matRipple
                    class="clear w-32 underline"
                    [mat-dialog-close]="false"
                >
                    Decline
                </button>
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!agree"
                    [mat-dialog-close]="true"
                >
                    Accept
                </button>
            </div>
        </div>
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorInductionModalComponent, { className: "VisitorInductionModalComponent", filePath: "apps/concierge/src/app/visitors/visitor-induction-modal.component.ts", lineNumber: 45 });
})();

// apps/concierge/src/app/visitors/visitor-notes-modal.component.ts
function VisitorNotesModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 1)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function VisitorNotesModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 2)(1, "mat-form-field", 5)(2, "textarea", 6);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function VisitorNotesModalComponent_Conditional_7_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.notes, $event) || (ctx_r1.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.notes);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.VISITORS_NOTES_HEADERS"));
  }
}
function VisitorNotesModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.VISITORS_NOTES_SAVING"));
  }
}
function VisitorNotesModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 4)(1, "button", 8);
    \u0275\u0275listener("click", function VisitorNotesModalComponent_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
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
var _VisitorNotesModalComponent = class _VisitorNotesModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.item = this._data.item;
    this.notes = this.item.extension_data?.notes || "";
    this.loading = "";
    const _data = this._data;
    this.item = _data.item;
  }
  async save() {
    this.loading = "Saving...";
    this._dialog_ref.disableClose = true;
    await updateBooking(this.item.id, __spreadProps(__spreadValues({}, this.item.toJSON()), {
      extension_data: __spreadProps(__spreadValues({}, this.item.extension_data), {
        notes: this.notes
      })
    })).toPromise().catch((e) => {
      notifyError(i18n("APP.CONCIERGE.VISITORS_NOTES_ERROR", { error: e }));
      this._dialog_ref.disableClose = false;
      this.loading = "";
      throw e;
    });
    this.loading = "";
    notifySuccess(i18n("APP.CONCIERGE.VISITORS_NOTES_SUCCESS"));
    this._dialog_ref.close();
  }
};
_VisitorNotesModalComponent.\u0275fac = function VisitorNotesModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorNotesModalComponent)();
};
_VisitorNotesModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorNotesModalComponent, selectors: [["visitor-notes-modal"]], standalone: false, decls: 10, vars: 7, consts: [[1, "ml-2", "rounded", "bg-base-200", "px-2", "py-1", "text-sm", "font-medium"], ["icon", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "w-[36rem]", "overflow-auto", "p-4"], ["loading", "", 1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "bg-base-100"], [1, "flex", "justify-end", "space-x-2", "border-t", "border-base-200", "p-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 1, "h-[60vh]", "max-h-[64rem]", "resize-none", 3, "ngModelChange", "ngModel", "placeholder"], [3, "diameter"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function VisitorNotesModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 0);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, VisitorNotesModalComponent_Conditional_6_Template, 3, 0, "button", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, VisitorNotesModalComponent_Conditional_7_Template, 4, 4, "main", 2)(8, VisitorNotesModalComponent_Conditional_8_Template, 5, 4, "div", 3);
    \u0275\u0275conditionalCreate(9, VisitorNotesModalComponent_Conditional_9_Template, 4, 3, "footer", 4);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.VISITORS_NOTES_HEADERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.item == null ? null : ctx.item.asset_name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 9 : -1);
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatProgressSpinner, MatDialogClose, MatRipple, IconComponent, TranslatePipe], encapsulation: 2 });
var VisitorNotesModalComponent = _VisitorNotesModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorNotesModalComponent, [{
    type: Component,
    args: [{ selector: "visitor-notes-modal", template: `
        <header>
            <h2>
                {{ 'APP.CONCIERGE.VISITORS_NOTES_HEADERS' | translate }}
                <span
                    class="ml-2 rounded bg-base-200 px-2 py-1 text-sm font-medium"
                >
                    {{ item?.asset_name }}
                </span>
            </h2>
            @if (!loading) {
                <button icon mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main class="max-h-[65vh] w-[36rem] overflow-auto p-4">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <textarea
                        matInput
                        [(ngModel)]="notes"
                        class="h-[60vh] max-h-[64rem] resize-none"
                        [placeholder]="
                            'APP.CONCIERGE.VISITORS_NOTES_HEADERS' | translate
                        "
                    ></textarea>
                </mat-form-field>
            </main>
        } @else {
            <div
                loading
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-base-100"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.VISITORS_NOTES_SAVING' | translate }}</p>
            </div>
        }
        @if (!loading) {
            <footer
                class="flex justify-end space-x-2 border-t border-base-200 p-2"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `, standalone: false }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorNotesModalComponent, { className: "VisitorNotesModalComponent", filePath: "apps/concierge/src/app/visitors/visitor-notes-modal.component.ts", lineNumber: 62 });
})();

// apps/concierge/src/app/visitors/visitors-state.service.ts
var _VisitorsStateService = class _VisitorsStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._poll = new BehaviorSubject(0);
    this._filters = new BehaviorSubject({});
    this._search = new BehaviorSubject("");
    this._loading = new BehaviorSubject(false);
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.bookings = combineLatest([
      this._org.active_building,
      this._filters,
      this._poll
    ]).pipe(filter(([building]) => !!building), debounceTime(150), switchMap(([bld, filters]) => {
      this._loading.next(true);
      const date = filters.date ? new Date(filters.date) : /* @__PURE__ */ new Date();
      const start = startOfDay(date);
      const end = addDays(start, filters.period || 1);
      return queryBookings({
        type: "visitor",
        period_start: getUnixTime(start),
        period_end: getUnixTime(end),
        zones: (filters.zones || []).join(",") || bld.id,
        include_checked_out: true,
        limit: 1e3
      }).pipe(catchError((_) => of([])));
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.filtered_bookings = combineLatest([
      this._search,
      this.bookings
    ]).pipe(map(([search, guest_list]) => {
      const filter2 = search.toLowerCase();
      const out = guest_list.filter((_) => _.asset_name?.toLowerCase().includes(filter2) || _.user_name?.toLowerCase().includes(filter2) || _.user_email?.toLowerCase().includes(filter2) || _.asset_id?.toLowerCase().includes(filter2)).sort((a, b) => a.date - b.date);
      return out;
    }));
  }
  get search() {
    return this._search.getValue();
  }
  get time_format() {
    return this._settings.time_format;
  }
  get is_induction_enabled() {
    return this._settings.get("app.induction_enabled") && this._settings.get("app.induction_details");
  }
  setFilters(filters) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), filters));
  }
  setSearchString(search) {
    this._search.next(search);
  }
  poll() {
    this._poll.next(Date.now());
  }
  startPolling(delay = 30 * 1e3) {
    this.interval("poll", () => this._poll.next(Date.now()), delay);
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  async setExt(guest, field, value) {
    const extension_data = __spreadValues({}, guest.extension_data);
    extension_data[field] = value;
    await updateBooking(guest.id, __spreadProps(__spreadValues({}, guest.toJSON()), {
      extension_data
    })).toPromise();
    this._poll.next(Date.now());
  }
  async approveVisitor(item) {
    const details = await openConfirmModal({
      title: "Approve Visitor",
      content: `Approve attendance of ${item.asset_name || item.asset_id} to their meeting?`,
      icon: { content: "event_available" }
    }, this._dialog);
    if (details.reason !== "done")
      return details.close();
    details.loading("Updating guest details");
    await approveBooking(item.id).toPromise().catch((e) => {
      notifyError(`Error approving visitor: ${e.message || e.error || e}`);
      details.close();
      throw e;
    });
    notifySuccess(`Successfully approved visitor`);
    this._poll.next(Date.now());
    details.close();
  }
  async declineVisitor(item) {
    const details = await openConfirmModal({
      title: "Decline Visitor",
      content: `Decline attendance of ${item.asset_name || item.asset_id} to their meeting?`,
      icon: { content: "event_available" }
    }, this._dialog);
    if (details.reason !== "done")
      return details.close();
    details.loading("Updating guest details");
    await rejectBooking(item.id).toPromise().catch((e) => {
      notifyError(`Error declining visitor: ${e.message || e.error || e}`);
      details.close();
      throw e;
    });
    notifySuccess(`Successfully declining visitor`);
    this._poll.next(Date.now());
    details.close();
  }
  async requestInduction(item) {
    if (!this.is_induction_enabled)
      return true;
    const ref = this._dialog.open(VisitorInductionModalComponent, {
      data: { item }
    });
    const result = await ref.afterClosed().toPromise();
    if (result === false) {
      await updateBookingInductionStatus(item.id, "declined").toPromise();
    }
    if (!result)
      throw "User declined";
    await updateBookingInductionStatus(item.id, "accepted").toPromise();
    return true;
  }
  async setCheckinState(item, state = true) {
    if (item.rejected)
      throw "You cannot check-in a rejected meeting";
    if (state === true)
      await this.requestInduction(item);
    if (!item.approved && state === true) {
      await approveBooking(item.id).toPromise();
    }
    const new_user = await checkinBooking(item.id, state).toPromise().catch((e) => {
      notifyError(`Error checking ${state ? "in" : "out"} ${item.asset_name || item.asset_id} for ${item.user_name}'s meeting`);
      throw e;
    });
    notifySuccess(`Successfully checked ${state ? "in" : "out"} ${item.asset_name || item.asset_id} from ${item.user_name}'s meeting`);
  }
  async setCheckinStateForEvent(event_id, state = true) {
    if (!event_id)
      return;
    const bookings = await nextValueFrom(this.bookings) || [];
    const event_bookings = bookings.filter((_) => _.parent_id === event_id || _.extension_data.parent_id === event_id || _.linked_event?.id === event_id || _.linked_event?.event_id === event_id);
    if (!event_bookings.length)
      return;
    await Promise.all(event_bookings.map((_) => checkinBooking(_.id, state).toPromise().catch((e) => {
      notifyError(`Error checking ${state ? "in" : "out"} ${_.asset_name || _.asset_id} for ${_.user_name}'s meeting`);
      throw e;
    })));
    notifySuccess(`Successfully checked ${state ? "in" : "out"} all visitors from ${event_bookings[0].user_name}'s meeting`);
    this._poll.next(Date.now());
  }
  async downloadVisitorsList() {
    const bookings = await nextValueFrom(this.filtered_bookings);
    if (!bookings.length)
      return;
    const { date } = this._filters.getValue();
    const list = bookings.map((_) => ({
      Name: _.asset_name,
      Email: _.asset_id,
      "Checked In": _.checked_in,
      Host: _.user_email || "",
      Status: _.status,
      Date: format(_.date, "dd MMM " + this.time_format)
    }));
    const data = jsonToCsv(list);
    downloadFile(`visitor-list-${format(date || Date.now(), "MMM-dd")}.csv`, data);
  }
  editVisitorNotes(item) {
    const ref = this._dialog.open(VisitorNotesModalComponent, {
      data: { item }
    });
    ref.afterClosed().subscribe(() => this.poll());
  }
  async emailVisitor(item) {
    const mod = this._org.module("visitor_access", "VisitorAccess");
    if (!mod)
      return;
    await mod.execute("grant_and_notify_access", [
      item.asset_id,
      item.asset_name,
      item.booked_by_email,
      item.title,
      item.booking_start
    ]);
    notifySuccess(i18n("APP.CONCIERGE.VISITOR_EMAIL_SUCCESS"));
  }
};
_VisitorsStateService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275VisitorsStateService_BaseFactory;
  return function VisitorsStateService_Factory(__ngFactoryType__) {
    return (\u0275VisitorsStateService_BaseFactory || (\u0275VisitorsStateService_BaseFactory = \u0275\u0275getInheritedFactory(_VisitorsStateService)))(__ngFactoryType__ || _VisitorsStateService);
  };
})();
_VisitorsStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VisitorsStateService, factory: _VisitorsStateService.\u0275fac, providedIn: "root" });
var VisitorsStateService = _VisitorsStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorsStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/visitors/guest-listing.component.ts
var _c02 = (a0, a1, a2) => ({ key: "state", name: a0, content: a1, size: "6.5rem", show: a2, sortable: false });
var _c12 = (a0, a1, a2) => ({ key: "date", name: a0, content: a1, show: a2, size: "6rem" });
var _c22 = (a0, a1) => ({ key: "asset_name", name: a0, content: a1 });
var _c3 = (a0, a1, a2) => ({ key: "user_name", name: a0, content: a1, show: a2 });
var _c4 = (a0, a1, a2) => ({ key: "checked_in_at", name: a0, content: a1, show: a2, size: "6rem" });
var _c5 = (a0, a1, a2) => ({ key: "checked_out_at", name: a0, content: a1, show: a2, size: "6rem" });
var _c6 = (a0, a1, a2) => ({ key: "induction", name: a0, content: a1, show: a2, size: "5.5rem" });
var _c7 = (a0, a1, a2) => ({ key: "pass_number", name: a0, content: a1, show: a2, size: "6rem" });
var _c8 = (a0, a1, a2) => ({ key: "parking_space", name: a0, content: a1, show: a2, size: "5.5rem" });
var _c9 = (a0, a1, a2) => ({ key: "status", name: a0, content: a1, show: a2, size: "9.5rem" });
var _c10 = (a0, a1, a2) => ({ key: "notes", name: a0, content: a1, show: a2, sortable: false, size: "4.5rem" });
var _c11 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.25rem", sortable: false });
var _c122 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) => [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11];
var _c13 = (a0) => ({ time: a0 });
var _c14 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => ({ name: a0, email: a1, title: a2, host: a3, zones: a4, date: a5, extra_details: a6, pass_number: a7, qr_code: a8 });
function GuestListingComponent_ng_template_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(2, 5, "APP.CONCIERGE.VISITOR_STATUS_CHECKED_OUT", \u0275\u0275pureFunction1(8, _c13, \u0275\u0275pipeBind3(1, 1, row_r1.checked_out_at * 1e3, ctx_r1.time_format, ctx_r1.tz))));
  }
}
function GuestListingComponent_ng_template_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "question_mark");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.VISITOR_STATUS_NOT_CHECKED_IN"));
  }
}
function GuestListingComponent_ng_template_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(2, 5, "APP.CONCIERGE.VISITOR_STATUS_CHECKED_IN", \u0275\u0275pureFunction1(8, _c13, \u0275\u0275pipeBind3(1, 1, row_r1.checked_in_at * 1e3, ctx_r1.time_format, ctx_r1.tz))));
  }
}
function GuestListingComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, GuestListingComponent_ng_template_13_Conditional_0_Template, 5, 10, "div", 19);
    \u0275\u0275conditionalCreate(1, GuestListingComponent_ng_template_13_Conditional_1_Template, 4, 3, "div", 20);
    \u0275\u0275conditionalCreate(2, GuestListingComponent_ng_template_13_Conditional_2_Template, 5, 10, "div", 21);
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275conditional(!(row_r1 == null ? null : row_r1.checked_in) && row_r1.checked_out_at ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(row_r1 == null ? null : row_r1.checked_in) && !row_r1.checked_out_at ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((row_r1 == null ? null : row_r1.checked_in) ? 2 : -1);
  }
}
function GuestListingComponent_ng_template_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.asset_id, " ");
  }
}
function GuestListingComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, GuestListingComponent_ng_template_15_Conditional_3_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.asset_name || row_r3.asset_id);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.asset_name && row_r3.asset_id ? 3 : -1);
  }
}
function GuestListingComponent_ng_template_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.user_email, " ");
  }
}
function GuestListingComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, GuestListingComponent_ng_template_17_Conditional_3_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.user_name || row_r4.user_email);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r4.user_name && row_r4.user_email ? 3 : -1);
  }
}
function GuestListingComponent_ng_template_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (row_r5.extension_data == null ? null : row_r5.extension_data.id_confirmed) ? "Confirmed" : (row_r5.extension_data == null ? null : row_r5.extension_data.id_confirmed) === false ? "Rejected" : "Submitted", " ");
  }
}
function GuestListingComponent_ng_template_19_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "img", 27);
    \u0275\u0275elementStart(2, "button", 28);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_19_ng_template_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const row_r5 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setExt(row_r5, "id_confirmed", true));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_19_ng_template_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const row_r5 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setExt(row_r5, "id_confirmed", false));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275property("src", row_r5.extension_data == null ? null : row_r5.extension_data.id_data == null ? null : row_r5.extension_data.id_data.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "APP.CONCIERGE.VISITORS_ACTION_ID_APPROVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "APP.CONCIERGE.VISITORS_ACTION_ID_REJECT"), " ");
  }
}
function GuestListingComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275conditionalCreate(1, GuestListingComponent_ng_template_19_Conditional_1_Template, 2, 1, "button", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, GuestListingComponent_ng_template_19_ng_template_2_Template, 8, 7, "ng-template", null, 12, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const id_confirmation_r7 = \u0275\u0275reference(3);
    \u0275\u0275property("content", id_confirmation_r7);
    \u0275\u0275advance();
    \u0275\u0275conditional((row_r5.extension_data == null ? null : row_r5.extension_data.id_data == null ? null : row_r5.extension_data.id_data.url) ? 1 : -1);
  }
}
function GuestListingComponent_ng_template_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function GuestListingComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, GuestListingComponent_ng_template_21_Conditional_0_Template, 3, 0, "div", 30);
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    \u0275\u0275conditional(row_r8.extension_data.parking_booking_id ? 0 : -1);
  }
}
function GuestListingComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    \u0275\u0275classProp("bg-success", data_r9 === "accepted")("text-success-content", data_r9 === "accepted")("bg-warning", data_r9 !== "accepted" && data_r9 !== "declined")("text-warning-content", data_r9 !== "accepted" && data_r9 !== "declined")("bg-error", data_r9 === "declined")("text-error-content", data_r9 === "declined");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r9 === "accepted" ? "done" : data_r9 === "declined" ? "close" : "question_mark", " ");
  }
}
function GuestListingComponent_ng_template_25_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 36);
    \u0275\u0275text(1, " arrow_drop_down ");
    \u0275\u0275elementEnd();
  }
}
function GuestListingComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33)(2, "div", 34)(3, "div", 35);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, GuestListingComponent_ng_template_25_Conditional_6_Template, 2, 0, "icon", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-menu", null, 13)(9, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_25_Template_button_click_9_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approveVisitor(row_r11));
    });
    \u0275\u0275elementStart(10, "div", 38)(11, "icon", 36);
    \u0275\u0275text(12, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 39);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_25_Template_button_click_16_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.declineVisitor(row_r11));
    });
    \u0275\u0275elementStart(17, "div", 38)(18, "icon", 40);
    \u0275\u0275text(19, " event_busy ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 39);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    const menu_r12 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success-content", (row_r11 == null ? null : row_r11.status) === "approved")("bg-success", (row_r11 == null ? null : row_r11.status) === "approved")("text-error-content", (row_r11 == null ? null : row_r11.status) === "declined")("bg-error", (row_r11 == null ? null : row_r11.status) === "declined")("text-neutral-content", (row_r11 == null ? null : row_r11.status) === "ended")("bg-neutral", (row_r11 == null ? null : row_r11.status) === "ended")("text-warning-content", (row_r11 == null ? null : row_r11.status) !== "ended" && (row_r11 == null ? null : row_r11.status) !== "approved" && (row_r11 == null ? null : row_r11.status) !== "declined")("bg-warning", (row_r11 == null ? null : row_r11.status) !== "ended" && (row_r11 == null ? null : row_r11.status) !== "approved" && (row_r11 == null ? null : row_r11.status) !== "declined")("opacity-30", (row_r11 == null ? null : row_r11.status) === "ended");
    \u0275\u0275property("matMenuTriggerFor", menu_r12)("disabled", (row_r11 == null ? null : row_r11.status) === "ended" || row_r11.checked_in && !row_r11.checked_out_at);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 24, (row_r11 == null ? null : row_r11.status) === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : (row_r11 == null ? null : row_r11.status) === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : (row_r11 == null ? null : row_r11.status) === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((row_r11 == null ? null : row_r11.status) === "ended" || row_r11.checked_in && !row_r11.checked_out_at) ? 6 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 26, "APP.CONCIERGE.VISITORS_ACTION_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 28, "APP.CONCIERGE.VISITORS_ACTION_DECLINE"), " ");
  }
}
function GuestListingComponent_ng_template_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r13 = \u0275\u0275nextContext().data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, data_r13 * 1e3, "zzzz", ctx_r1.tz), " ");
  }
}
function GuestListingComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275conditionalCreate(3, GuestListingComponent_ng_template_27_Conditional_3_Template, 3, 5, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r13 = ctx.data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 2, data_r13 * 1e3, ctx_r1.time_format, ctx_r1.tz), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.timezone ? 3 : -1);
  }
}
function GuestListingComponent_ng_template_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "No Pass");
    \u0275\u0275elementEnd();
  }
}
function GuestListingComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, GuestListingComponent_ng_template_29_Conditional_2_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r14 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r14.extension_data.pass_number, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r14.extension_data.pass_number ? 2 : -1);
  }
}
function GuestListingComponent_ng_template_31_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, row_r15.date, "zzzz", ctx_r1.tz), " ");
  }
}
function GuestListingComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275conditionalCreate(4, GuestListingComponent_ng_template_31_Conditional_4_Template, 3, 5, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const row_r15 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(3, 4, row_r15.date, ((tmp_14_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.filters)) == null ? null : tmp_14_0.period) > 1 ? "MMM d, " + ctx_r1.time_format : ctx_r1.time_format, ctx_r1.tz), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.timezone ? 4 : -1);
  }
}
function GuestListingComponent_ng_template_33_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "user-label", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("user", \u0275\u0275pureFunctionV(1, _c14, [(row_r17 == null ? null : row_r17.asset_name) || (row_r17 == null ? null : row_r17.description), row_r17 == null ? null : row_r17.asset_id, row_r17 == null ? null : row_r17.title, (row_r17 == null ? null : row_r17.user_name) || row_r17.user_email, row_r17 == null ? null : row_r17.zones, (row_r17 == null ? null : row_r17.date) || ctx_r1.date, row_r17 == null ? null : row_r17.extension_data == null ? null : row_r17.extension_data.extra_details, row_r17 == null ? null : row_r17.extension_data == null ? null : row_r17.extension_data.pass_number, ctx_r1.qr_code]));
  }
}
function GuestListingComponent_ng_template_33_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_33_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reserveParking(row_r17));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "icon", 36);
    \u0275\u0275text(3, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "APP.CONCIERGE.VISITORS_ACTION_PARKING"), " ");
  }
}
function GuestListingComponent_ng_template_33_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_33_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.emailVisitor(row_r17));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "icon", 36);
    \u0275\u0275text(3, "attach_email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "APP.CONCIERGE.VISITORS_ACTION_EMAIL"), " ");
  }
}
function GuestListingComponent_ng_template_33_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    \u0275\u0275property("href", item_r20.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r20.name, " ");
  }
}
function GuestListingComponent_ng_template_33_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_33_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.printQRCode());
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "icon", 36);
    \u0275\u0275text(3, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "APP.CONCIERGE.VISITORS_ACTION_PRINT_QR"), " ");
  }
}
function GuestListingComponent_ng_template_33_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_33_Conditional_28_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printVisitorPass(row_r17, $event));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "icon", 36);
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "APP.CONCIERGE.VISITORS_ACTION_PRINT_PASS"), " ");
  }
}
function GuestListingComponent_ng_template_33_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_33_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pass_number = row_r17.extension_data.pass_number);
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "icon", 36);
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-menu", null, 15)(9, "div", 50);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_33_Conditional_36_Template_div_click_9_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(10, "mat-form-field", 51)(11, "input", 52);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function GuestListingComponent_ng_template_33_Conditional_36_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pass_number, $event) || (ctx_r1.pass_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 53);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_33_Conditional_36_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r23);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPass(row_r17, ctx_r1.pass_number));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pass_menu_r24 = \u0275\u0275reference(8);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matMenuTriggerFor", pass_menu_r24);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "APP.CONCIERGE.VISITORS_ACTION_SET_PASS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pass_number);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 8, "BOOKINGS.PASS_NUMBER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.pass_number);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 10, "COMMON.SAVE"), " ");
  }
}
function GuestListingComponent_ng_template_33_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_33_Conditional_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(row_r17.checked_in ? ctx_r1.checkout(row_r17) : ctx_r1.checkin(row_r17));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "icon", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r17.checked_in ? "event_busy" : "event_available", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, row_r17.checked_in ? "APP.CONCIERGE.VISITORS_ACTION_CHECKOUT" : "APP.CONCIERGE.VISITORS_ACTION_CHECKIN"), " ");
  }
}
function GuestListingComponent_ng_template_33_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_33_Conditional_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkinAllVisitors(row_r17));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "icon", 36);
    \u0275\u0275text(3, " event_available ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_33_Conditional_38_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r26);
      const row_r17 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkoutAllVisitors(row_r17));
    });
    \u0275\u0275elementStart(8, "div", 38)(9, "icon", 40);
    \u0275\u0275text(10, " event_busy ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "APP.CONCIERGE.VISITORS_ACTION_CHECKIN_ALL"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 4, "APP.CONCIERGE.VISITORS_ACTION_CHECKOUT_ALL"), " ");
  }
}
function GuestListingComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "button", 43)(2, "icon");
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, GuestListingComponent_ng_template_33_Conditional_4_Template, 2, 11, "div", 44);
    \u0275\u0275elementStart(5, "mat-menu", null, 14)(7, "button", 45)(8, "div", 38)(9, "icon", 36);
    \u0275\u0275text(10, "attachment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(14, GuestListingComponent_ng_template_33_Conditional_14_Template, 7, 3, "button", 46);
    \u0275\u0275conditionalCreate(15, GuestListingComponent_ng_template_33_Conditional_15_Template, 7, 3, "button", 46);
    \u0275\u0275elementStart(16, "mat-menu", null, 13);
    \u0275\u0275repeaterCreate(18, GuestListingComponent_ng_template_33_For_19_Template, 2, 2, "a", 47, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 37);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_33_Template_button_click_20_listener() {
      const row_r17 = \u0275\u0275restoreView(_r16).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setExt(row_r17, "remote", !row_r17.extension_data.remote));
    });
    \u0275\u0275elementStart(21, "div", 38)(22, "icon", 36);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(27, GuestListingComponent_ng_template_33_Conditional_27_Template, 7, 3, "button", 46);
    \u0275\u0275conditionalCreate(28, GuestListingComponent_ng_template_33_Conditional_28_Template, 7, 3, "button", 46);
    \u0275\u0275elementStart(29, "a", 47)(30, "div", 38)(31, "icon", 36);
    \u0275\u0275text(32, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(36, GuestListingComponent_ng_template_33_Conditional_36_Template, 16, 12);
    \u0275\u0275conditionalCreate(37, GuestListingComponent_ng_template_33_Conditional_37_Template, 7, 4, "button", 46);
    \u0275\u0275conditionalCreate(38, GuestListingComponent_ng_template_33_Conditional_38_Template, 14, 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r17 = ctx.row;
    const guest_menu_r27 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", guest_menu_r27);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.printing() === (row_r17 == null ? null : row_r17.id) ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !(row_r17.attachment == null ? null : row_r17.attachment.length))("matMenuTriggerFor", ctx_r1.attachment_menu);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 16, "APP.CONCIERGE.VISITORS_ACTION_ATTACHMENTS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.has_parking && !row_r17.extension_data.parking_booking_id ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_email_visitors ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(row_r17.attachments);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", row_r17.extension_data.remote ? "business" : "laptop", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 18, row_r17.extension_data.remote ? "APP.CONCIERGE.VISITORS_ACTION_ONSITE" : "APP.CONCIERGE.VISITORS_ACTION_REMOTE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_print ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_printing_label && row_r17.checked_in ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + (row_r17 == null ? null : row_r17.asset_id), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 20, (row_r17 == null ? null : row_r17.user_email) === (row_r17 == null ? null : row_r17.asset_id) ? "APP.CONCIERGE.VISITORS_ACTION_EMAIL_HOST" : "APP.CONCIERGE.VISITORS_ACTION_EMAIL_GUEST"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.pass_number_enabled ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r17.checked_out_at ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r17.linked_event ? 38 : -1);
  }
}
function GuestListingComponent_ng_template_35_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 57);
    \u0275\u0275text(3, " info_i ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.VISITORS_NOTES_AVAILABLE"));
  }
}
function GuestListingComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "button", 55);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_35_Template_button_click_1_listener() {
      const row_r29 = \u0275\u0275restoreView(_r28).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editVisitorNotes(row_r29));
    });
    \u0275\u0275elementStart(3, "icon", 36);
    \u0275\u0275text(4, "edit_square");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, GuestListingComponent_ng_template_35_Conditional_5_Template, 4, 3, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r29 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.VISITORS_NOTES_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional((row_r29.extension_data == null ? null : row_r29.extension_data.notes == null ? null : row_r29.extension_data.notes.length) ? 5 : -1);
  }
}
function GuestListingComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function GuestListingComponent_Conditional_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadVisitorList());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.VISITORS_DOWNLOAD"));
  }
}
var _GuestListingComponent = class _GuestListingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(VisitorsStateService);
    this._parking = inject(ParkingStateService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.printing = signal("");
    this.guests = this._state.filtered_bookings;
    this.search = this._state.search;
    this.filters = this._state.filters;
    this.inductions_enabled = false;
    this.qr_code = "";
    this.pass_number = "";
    this.downloadVisitorList = () => this._state.downloadVisitorsList();
    this.approveVisitor = (u) => this._state.approveVisitor(u);
    this.declineVisitor = (u) => this._state.declineVisitor(u);
    this.checkinAllVisitors = (u) => this._state.setCheckinStateForEvent(u.linked_event?.id, true);
    this.checkoutAllVisitors = (u) => this._state.setCheckinStateForEvent(u.linked_event?.id, false);
    this.setExt = (u, f, v) => this._state.setExt(u, f, v);
    this.editVisitorNotes = (u) => this._state.editVisitorNotes(u);
    this.checkin = async (item) => {
      await this._state.setCheckinState(item, true).catch((e) => {
        if (e !== "User declined")
          notifyError(e);
      });
      this._state.poll();
    };
    this.checkout = async (item) => {
      await this._state.setCheckinState(item, false).catch((_) => null);
      this._state.poll();
    };
    this.emailVisitor = (item) => this._state.emailVisitor(item);
  }
  hide_field(id) {
    return (this._settings.get("app.visitors.hide_fields") || []).includes(id);
  }
  get extra_width() {
    const hide = this._settings.get("app.visitors.hide_fields") || [];
    return Math.max(0, 3 - hide.length) * 6;
  }
  get timezone() {
    const use_tz = this._settings.get("app.bookings.use_building_timezone");
    const bld_tz = this._org.building.timezone;
    return use_tz && bld_tz !== Intl.DateTimeFormat().resolvedOptions().timeZone ? bld_tz : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    return getTimezoneOffsetString(tz);
  }
  get allow_printing_label() {
    return this._settings.get("app.visitors.allow_printing_label") !== false;
  }
  get pass_number_enabled() {
    return this._settings.get("app.visitors.allow_pass_number") !== false;
  }
  get has_parking() {
    return this._settings.get("app.features")?.includes("parking") && this._settings.get("app.visitors.has_parking");
  }
  get can_email_visitors() {
    return !!this._org.module("visitor_access", "VisitorAccess");
  }
  get time_format() {
    return this._settings.time_format;
  }
  get logo() {
    return this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light");
  }
  printVisitorPass(item) {
    this.qr_code = generateQRCode(item.asset_id);
    this.printing.set(item.id);
    this.timeout("print", () => {
      window.print();
      this.printing.set("");
    });
  }
  inducted(item) {
    if (item.checked_in)
      return true;
    return item.induction == "declined" ? false : item.induction == "accepted" ? true : null;
  }
  ngOnInit() {
    this.subscription("building", this._org.active_building.subscribe(async (bld) => {
      if (!bld)
        return;
      const visitor_kiosk_app = this._settings.get("app.visitor_kiosk_app") || "visitor-kiosk_app";
      const metadata = await lastValueFrom(hu(bld.id, visitor_kiosk_app));
      const org_metadata = await lastValueFrom(hu(this._org.organisation.id, visitor_kiosk_app));
      const data = __spreadValues(__spreadValues({}, org_metadata.details || {}), metadata.details || {});
      this.inductions_enabled = data?.induction_enabled && data?.induction_details;
    }));
  }
  async reserveParking(item) {
    const id = await this._parking.editReservation(void 0, {
      parent_id: item.id,
      user: new User({ email: item.asset_id, name: item.asset_name }),
      link_id: item.id,
      date: item.date,
      external_user: true
    });
    if (!id)
      return;
    await lastValueFrom(saveBooking(new Booking(__spreadProps(__spreadValues({}, item), { parking_booking_id: id }))));
    this._state.poll();
  }
  async setPass(row, pass = "") {
    if (!pass)
      return;
    await lastValueFrom(saveBooking(new Booking(__spreadProps(__spreadValues({}, row), { pass_number: pass }))));
    this._state.poll();
    this.pass_number = "";
    notifySuccess(i18n("APP.CONCIERGE.VISITORS_SAVED_PASS"));
  }
};
_GuestListingComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275GuestListingComponent_BaseFactory;
  return function GuestListingComponent_Factory(__ngFactoryType__) {
    return (\u0275GuestListingComponent_BaseFactory || (\u0275GuestListingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_GuestListingComponent)))(__ngFactoryType__ || _GuestListingComponent);
  };
})();
_GuestListingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GuestListingComponent, selectors: [["guest-listings"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 40, vars: 91, consts: [["state_template", ""], ["person_template", ""], ["host_template", ""], ["id_template", ""], ["parking_template", ""], ["induction_template", ""], ["status_template", ""], ["time_template", ""], ["pass_template", ""], ["date_template", ""], ["action_template", ""], ["notes_template", ""], ["id_confirmation", ""], ["menu", "matMenu"], ["guest_menu", "matMenu"], ["pass_menu", ""], [1, "z-0", "block", "text-sm", 3, "data", "columns", "filter", "sortable"], ["matTooltipPosition", "left", "icon", "", "matRipple", "", 1, "absolute", "bottom-4", "right-4", "z-20", "h-12", "w-12", "bg-secondary", "text-white", "shadow", "hover:shadow-lg", 3, "matTooltip"], [1, "h-8", "w-full"], ["matTooltipPosition", "right", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-base-400", "text-2xl", "text-neutral-content", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-warning", "text-2xl", "text-warning-content", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-success", "text-2xl", "text-success-content", 3, "matTooltip"], [1, "px-4", "py-2"], [1, "text-xs", "opacity-30"], ["customTooltip", "", 3, "content"], ["matRipple", "", 1, "rounded-3xl", "bg-success", "px-4", "py-2", "text-white"], [1, "my-2", "flex", "w-[20rem]", "flex-col", "space-y-2", "rounded", "bg-base-100", "p-2"], [1, "max-h-[20rem]", "max-w-[20rem]", "object-contain", 3, "src"], ["matRipple", "", 3, "click"], ["matRipple", "", 1, "inverse", "mt-2", 3, "click"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-success", "text-2xl", "text-success-content"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "text-2xl"], [1, "px-4"], ["matRipple", "", 1, "h-10", "w-[7.5rem]", "rounded-3xl", "border-none", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "space-x-2", "pl-4", "pr-2"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "text-2xl", "text-error"], [1, "opacity-30"], [1, "flex", "items-center", "justify-end", "px-2"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["printable", "", 1, "print-only"], ["mat-menu-item", "", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "href"], [1, "!text-base", 3, "user"], ["mat-menu-item", "", 3, "click", "matMenuTriggerFor"], [1, "w-full", "space-y-2", "px-2", 3, "click"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click", "disabled"], [1, "relative", "mx-auto", "p-4"], ["matTooltipPosition", "left", "icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "absolute", "right-1", "top-1", "flex", "h-4", "w-4", "items-center", "justify-center", "rounded-full", "bg-info", "text-info-content", 3, "matTooltip"], ["className", "material-symbols-rounded", 1, "text-sm"], ["matTooltipPosition", "left", "icon", "", "matRipple", "", 1, "absolute", "bottom-4", "right-4", "z-20", "h-12", "w-12", "bg-secondary", "text-white", "shadow", "hover:shadow-lg", 3, "click", "matTooltip"]], template: function GuestListingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "async");
    \u0275\u0275template(13, GuestListingComponent_ng_template_13_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, GuestListingComponent_ng_template_15_Template, 4, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(17, GuestListingComponent_ng_template_17_Template, 4, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(19, GuestListingComponent_ng_template_19_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(21, GuestListingComponent_ng_template_21_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(23, GuestListingComponent_ng_template_23_Template, 3, 13, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(25, GuestListingComponent_ng_template_25_Template, 23, 30, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(27, GuestListingComponent_ng_template_27_Template, 4, 6, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(29, GuestListingComponent_ng_template_29_Template, 3, 2, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(31, GuestListingComponent_ng_template_31_Template, 5, 8, "ng-template", null, 9, \u0275\u0275templateRefExtractor)(33, GuestListingComponent_ng_template_33_Template, 39, 22, "ng-template", null, 10, \u0275\u0275templateRefExtractor)(35, GuestListingComponent_ng_template_35_Template, 6, 4, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
    \u0275\u0275conditionalCreate(37, GuestListingComponent_Conditional_37_Template, 4, 3, "button", 17);
    \u0275\u0275pipe(38, "async");
    \u0275\u0275element(39, "div", 18);
  }
  if (rf & 2) {
    let tmp_17_0;
    const state_template_r31 = \u0275\u0275reference(14);
    const person_template_r32 = \u0275\u0275reference(16);
    const host_template_r33 = \u0275\u0275reference(18);
    const parking_template_r34 = \u0275\u0275reference(22);
    const induction_template_r35 = \u0275\u0275reference(24);
    const status_template_r36 = \u0275\u0275reference(26);
    const time_template_r37 = \u0275\u0275reference(28);
    const pass_template_r38 = \u0275\u0275reference(30);
    const date_template_r39 = \u0275\u0275reference(32);
    const action_template_r40 = \u0275\u0275reference(34);
    const notes_template_r41 = \u0275\u0275reference(36);
    \u0275\u0275styleProp("min-width", 68 + ctx.extra_width + "rem");
    \u0275\u0275property("data", ctx.guests)("columns", \u0275\u0275pureFunctionV(78, _c122, [\u0275\u0275pureFunction3(33, _c02, \u0275\u0275pipeBind1(1, 7, "COMMON.STATUS"), state_template_r31, !ctx.hide_field("state")), \u0275\u0275pureFunction3(37, _c12, \u0275\u0275pipeBind1(2, 9, "FORM.TIME"), date_template_r39, !ctx.hide_field("date")), \u0275\u0275pureFunction2(41, _c22, \u0275\u0275pipeBind1(3, 11, "RESOURCE.VISITOR"), person_template_r32), \u0275\u0275pureFunction3(44, _c3, \u0275\u0275pipeBind1(4, 13, "FORM.HOST"), host_template_r33, !ctx.hide_field("user_name")), \u0275\u0275pureFunction3(48, _c4, \u0275\u0275pipeBind1(5, 15, "COMMON.CHECKED_IN"), time_template_r37, !ctx.hide_field("checked_in_at")), \u0275\u0275pureFunction3(52, _c5, \u0275\u0275pipeBind1(6, 17, "COMMON.CHECKED_OUT"), time_template_r37, !ctx.hide_field("checked_out_at")), \u0275\u0275pureFunction3(56, _c6, \u0275\u0275pipeBind1(7, 19, "BOOKINGS.INDUCTED"), induction_template_r35, !!ctx.inductions_enabled), \u0275\u0275pureFunction3(60, _c7, \u0275\u0275pipeBind1(8, 21, "BOOKINGS.PASS_NUMBER"), pass_template_r38, ctx.pass_number_enabled), \u0275\u0275pureFunction3(64, _c8, \u0275\u0275pipeBind1(9, 23, "RESOURCE.PARKING"), parking_template_r34, !!ctx.has_parking), \u0275\u0275pureFunction3(68, _c9, \u0275\u0275pipeBind1(10, 25, "COMMON.STATE"), status_template_r36, !ctx.hide_field("status")), \u0275\u0275pureFunction3(72, _c10, \u0275\u0275pipeBind1(11, 27, "FORM.NOTES"), notes_template_r41, !ctx.hide_field("notes")), \u0275\u0275pureFunction1(76, _c11, action_template_r40)]))("filter", \u0275\u0275pipeBind1(12, 29, ctx.search))("sortable", true);
    \u0275\u0275advance(37);
    \u0275\u0275conditional(((tmp_17_0 = \u0275\u0275pipeBind1(38, 31, ctx.guests)) == null ? null : tmp_17_0.length) ? 37 : -1);
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, CustomTooltipComponent, SimpleTableComponent, PrintableComponent, UserLabelComponent, AsyncPipe, DatePipe, TranslatePipe], encapsulation: 2 });
var GuestListingComponent = _GuestListingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GuestListingComponent, [{
    type: Component,
    args: [{ selector: "guest-listings", template: `
        <simple-table
            class="z-0 block text-sm"
            [style.min-width]="68 + extra_width + 'rem'"
            [data]="guests"
            [columns]="[
                {
                    key: 'state',
                    name: 'COMMON.STATUS' | translate,
                    content: state_template,
                    size: '6.5rem',
                    show: !hide_field('state'),
                    sortable: false,
                },
                {
                    key: 'date',
                    name: 'FORM.TIME' | translate,
                    content: date_template,
                    show: !hide_field('date'),
                    size: '6rem',
                },
                {
                    key: 'asset_name',
                    name: 'RESOURCE.VISITOR' | translate,
                    content: person_template,
                },
                {
                    key: 'user_name',
                    name: 'FORM.HOST' | translate,
                    content: host_template,
                    show: !hide_field('user_name'),
                },
                {
                    key: 'checked_in_at',
                    name: 'COMMON.CHECKED_IN' | translate,
                    content: time_template,
                    show: !hide_field('checked_in_at'),
                    size: '6rem',
                },
                {
                    key: 'checked_out_at',
                    name: 'COMMON.CHECKED_OUT' | translate,
                    content: time_template,
                    show: !hide_field('checked_out_at'),
                    size: '6rem',
                },
                {
                    key: 'induction',
                    name: 'BOOKINGS.INDUCTED' | translate,
                    content: induction_template,
                    show: !!inductions_enabled,
                    size: '5.5rem',
                },
                {
                    key: 'pass_number',
                    name: 'BOOKINGS.PASS_NUMBER' | translate,
                    content: pass_template,
                    show: pass_number_enabled,
                    size: '6rem',
                },
                {
                    key: 'parking_space',
                    name: 'RESOURCE.PARKING' | translate,
                    content: parking_template,
                    show: !!has_parking,
                    size: '5.5rem',
                },
                {
                    key: 'status',
                    name: 'COMMON.STATE' | translate,
                    content: status_template,
                    show: !hide_field('status'),
                    size: '9.5rem',
                },
                {
                    key: 'notes',
                    name: 'FORM.NOTES' | translate,
                    content: notes_template,
                    show: !hide_field('notes'),
                    sortable: false,
                    size: '4.5rem',
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: action_template,
                    size: '3.25rem',
                    sortable: false,
                },
            ]"
            [filter]="search | async"
            [sortable]="true"
        />
        <ng-template #state_template let-row="row">
            @if (!row?.checked_in && row.checked_out_at) {
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-base-400 text-2xl text-neutral-content"
                    [matTooltip]="
                        'APP.CONCIERGE.VISITOR_STATUS_CHECKED_OUT'
                            | translate
                                : {
                                      time:
                                          (row.checked_out_at * 1000
                                          | date: time_format : tz),
                                  }
                    "
                    matTooltipPosition="right"
                >
                    <icon>done</icon>
                </div>
            }
            @if (!row?.checked_in && !row.checked_out_at) {
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-warning text-2xl text-warning-content"
                    [matTooltip]="
                        'APP.CONCIERGE.VISITOR_STATUS_NOT_CHECKED_IN'
                            | translate
                    "
                    matTooltipPosition="right"
                >
                    <icon>question_mark</icon>
                </div>
            }
            @if (row?.checked_in) {
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content"
                    [matTooltip]="
                        'APP.CONCIERGE.VISITOR_STATUS_CHECKED_IN'
                            | translate
                                : {
                                      time:
                                          (row.checked_in_at * 1000
                                          | date: time_format : tz),
                                  }
                    "
                    matTooltipPosition="right"
                >
                    <icon>done</icon>
                </div>
            }
        </ng-template>
        <ng-template #person_template let-row="row">
            <div class="px-4 py-2">
                <div>{{ row.asset_name || row.asset_id }}</div>
                @if (row.asset_name && row.asset_id) {
                    <div class="text-xs opacity-30">
                        {{ row.asset_id }}
                    </div>
                }
            </div>
        </ng-template>
        <ng-template #host_template let-row="row">
            <div class="px-4 py-2">
                <div>{{ row.user_name || row.user_email }}</div>
                @if (row.user_name && row.user_email) {
                    <div class="text-xs opacity-30">
                        {{ row.user_email }}
                    </div>
                }
            </div>
        </ng-template>
        <ng-template #id_template let-row="row">
            <div customTooltip [content]="id_confirmation">
                @if (row.extension_data?.id_data?.url) {
                    <button
                        matRipple
                        class="rounded-3xl bg-success px-4 py-2 text-white"
                    >
                        {{
                            row.extension_data?.id_confirmed
                                ? 'Confirmed'
                                : row.extension_data?.id_confirmed === false
                                  ? 'Rejected'
                                  : 'Submitted'
                        }}
                    </button>
                }
            </div>
            <ng-template #id_confirmation>
                <div
                    class="my-2 flex w-[20rem] flex-col space-y-2 rounded bg-base-100 p-2"
                >
                    <img
                        [src]="row.extension_data?.id_data?.url"
                        class="max-h-[20rem] max-w-[20rem] object-contain"
                    />
                    <button
                        matRipple
                        (click)="setExt(row, 'id_confirmed', true)"
                    >
                        {{
                            'APP.CONCIERGE.VISITORS_ACTION_ID_APPROVE'
                                | translate
                        }}
                    </button>
                    <button
                        matRipple
                        class="inverse mt-2"
                        (click)="setExt(row, 'id_confirmed', false)"
                    >
                        {{
                            'APP.CONCIERGE.VISITORS_ACTION_ID_REJECT'
                                | translate
                        }}
                    </button>
                </div>
            </ng-template>
        </ng-template>
        <ng-template #parking_template let-row="row">
            @if (row.extension_data.parking_booking_id) {
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content"
                >
                    <icon>done</icon>
                </div>
            }
        </ng-template>
        <ng-template #induction_template let-data="data">
            <div
                class="mx-auto flex h-8 w-8 items-center justify-center rounded text-2xl"
                [class.bg-success]="data === 'accepted'"
                [class.text-success-content]="data === 'accepted'"
                [class.bg-warning]="data !== 'accepted' && data !== 'declined'"
                [class.text-warning-content]="
                    data !== 'accepted' && data !== 'declined'
                "
                [class.bg-error]="data === 'declined'"
                [class.text-error-content]="data === 'declined'"
            >
                <icon>
                    {{
                        data === 'accepted'
                            ? 'done'
                            : data === 'declined'
                              ? 'close'
                              : 'question_mark'
                    }}
                </icon>
            </div>
        </ng-template>
        <ng-template #status_template let-row="row">
            <div class="px-4">
                <button
                    matRipple
                    class="h-10 w-[7.5rem] rounded-3xl border-none"
                    [class.text-success-content]="row?.status === 'approved'"
                    [class.bg-success]="row?.status === 'approved'"
                    [class.text-error-content]="row?.status === 'declined'"
                    [class.bg-error]="row?.status === 'declined'"
                    [class.text-neutral-content]="row?.status === 'ended'"
                    [class.bg-neutral]="row?.status === 'ended'"
                    [class.text-warning-content]="
                        row?.status !== 'ended' &&
                        row?.status !== 'approved' &&
                        row?.status !== 'declined'
                    "
                    [class.bg-warning]="
                        row?.status !== 'ended' &&
                        row?.status !== 'approved' &&
                        row?.status !== 'declined'
                    "
                    [class.opacity-30]="row?.status === 'ended'"
                    [matMenuTriggerFor]="menu"
                    [disabled]="
                        row?.status === 'ended' ||
                        (row.checked_in && !row.checked_out_at)
                    "
                >
                    <div class="flex items-center space-x-2 pl-4 pr-2">
                        <div class="flex-1 text-left">
                            {{
                                (row?.status === 'ended'
                                    ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
                                    : row?.status === 'approved'
                                      ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                                      : row?.status === 'declined'
                                        ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                        : 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                ) | translate
                            }}
                        </div>
                        @if (
                            !(
                                row?.status === 'ended' ||
                                (row.checked_in && !row.checked_out_at)
                            )
                        ) {
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        }
                    </div>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="approveVisitor(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_available</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.VISITORS_ACTION_APPROVE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="declineVisitor(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl text-error"> event_busy </icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.VISITORS_ACTION_DECLINE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #time_template let-data="data">
            <div class="px-4">
                {{ data * 1000 | date: time_format : tz }}
                @if (timezone) {
                    <span class="text-xs opacity-30">
                        {{ data * 1000 | date: 'zzzz' : tz }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #pass_template let-row="row">
            <div class="px-4">
                {{ row.extension_data.pass_number }}
                @if (!row.extension_data.pass_number) {
                    <span class="opacity-30">No Pass</span>
                }
            </div>
        </ng-template>
        <ng-template #date_template let-row="row">
            <div class="px-4">
                {{
                    row.date
                        | date
                            : ((filters | async)?.period > 1
                                  ? 'MMM d, ' + time_format
                                  : time_format)
                            : tz
                }}
                @if (timezone) {
                    <span class="text-xs opacity-30">
                        {{ row.date | date: 'zzzz' : tz }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex items-center justify-end px-2">
                <button icon matRipple [matMenuTriggerFor]="guest_menu">
                    <icon>more_horiz</icon>
                </button>
                @if (printing() === row?.id) {
                    <div printable class="print-only">
                        <user-label
                            [user]="{
                                name: row?.asset_name || row?.description,
                                email: row?.asset_id,
                                title: row?.title,
                                host: row?.user_name || row.user_email,
                                zones: row?.zones,
                                date: row?.date || date,
                                extra_details:
                                    row?.extension_data?.extra_details,
                                pass_number: row?.extension_data?.pass_number,
                                qr_code: qr_code,
                            }"
                            class="!text-base"
                        />
                    </div>
                }
                <mat-menu #guest_menu="matMenu">
                    <button
                        mat-menu-item
                        [disabled]="!row.attachment?.length"
                        [matMenuTriggerFor]="attachment_menu"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">attachment</icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.VISITORS_ACTION_ATTACHMENTS'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    @if (
                        has_parking && !row.extension_data.parking_booking_id
                    ) {
                        <button mat-menu-item (click)="reserveParking(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">directions_car</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_PARKING'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                    @if (can_email_visitors) {
                        <button mat-menu-item (click)="emailVisitor(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">attach_email</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_EMAIL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                    <mat-menu #menu="matMenu">
                        @for (item of row.attachments; track item) {
                            <a [href]="item.url" mat-menu-item>
                                {{ item.name }}
                            </a>
                        }
                    </mat-menu>
                    <button
                        mat-menu-item
                        (click)="
                            setExt(row, 'remote', !row.extension_data.remote)
                        "
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">
                                {{
                                    row.extension_data.remote
                                        ? 'business'
                                        : 'laptop'
                                }}
                            </icon>
                            <div>
                                {{
                                    (row.extension_data.remote
                                        ? 'APP.CONCIERGE.VISITORS_ACTION_ONSITE'
                                        : 'APP.CONCIERGE.VISITORS_ACTION_REMOTE'
                                    ) | translate
                                }}
                            </div>
                        </div>
                    </button>
                    @if (can_print) {
                        <button mat-menu-item (click)="printQRCode()">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">print</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_PRINT_QR'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                    @if (allow_printing_label && row.checked_in) {
                        <button
                            mat-menu-item
                            (click)="printVisitorPass(row, $event)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">badge</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_PRINT_PASS'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                    <a mat-menu-item [href]="'mailto:' + row?.asset_id">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">email</icon>
                            <div>
                                {{
                                    (row?.user_email === row?.asset_id
                                        ? 'APP.CONCIERGE.VISITORS_ACTION_EMAIL_HOST'
                                        : 'APP.CONCIERGE.VISITORS_ACTION_EMAIL_GUEST'
                                    ) | translate
                                }}
                            </div>
                        </div>
                    </a>
                    @if (pass_number_enabled) {
                        <button
                            mat-menu-item
                            [matMenuTriggerFor]="pass_menu"
                            (click)="
                                pass_number = row.extension_data.pass_number
                            "
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">badge</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_SET_PASS'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <mat-menu #pass_menu>
                            <div
                                class="w-full space-y-2 px-2"
                                (click)="$event.stopPropagation()"
                            >
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript"
                                >
                                    <input
                                        [(ngModel)]="pass_number"
                                        matInput
                                        [placeholder]="
                                            'BOOKINGS.PASS_NUMBER' | translate
                                        "
                                    />
                                </mat-form-field>
                                <button
                                    btn
                                    matRipple
                                    class="w-full"
                                    [disabled]="!pass_number"
                                    (click)="setPass(row, pass_number)"
                                >
                                    {{ 'COMMON.SAVE' | translate }}
                                </button>
                            </div>
                        </mat-menu>
                    }
                    @if (!row.checked_out_at) {
                        <button
                            mat-menu-item
                            (click)="
                                row.checked_in ? checkout(row) : checkin(row)
                            "
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">
                                    {{
                                        row.checked_in
                                            ? 'event_busy'
                                            : 'event_available'
                                    }}
                                </icon>
                                <div>
                                    {{
                                        (row.checked_in
                                            ? 'APP.CONCIERGE.VISITORS_ACTION_CHECKOUT'
                                            : 'APP.CONCIERGE.VISITORS_ACTION_CHECKIN'
                                        ) | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                    @if (row.linked_event) {
                        <button mat-menu-item (click)="checkinAllVisitors(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl"> event_available </icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_CHECKIN_ALL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="checkoutAllVisitors(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl text-error">
                                    event_busy
                                </icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_CHECKOUT_ALL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                </mat-menu>
            </div>
        </ng-template>
        <ng-template #notes_template let-row="row">
            <div class="relative mx-auto p-4">
                <button
                    [matTooltip]="
                        'APP.CONCIERGE.VISITORS_NOTES_EDIT' | translate
                    "
                    matTooltipPosition="left"
                    icon
                    matRipple
                    (click)="editVisitorNotes(row)"
                >
                    <icon class="text-2xl">edit_square</icon>
                </button>
                @if (row.extension_data?.notes?.length) {
                    <div
                        class="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-info text-info-content"
                        [matTooltip]="
                            'APP.CONCIERGE.VISITORS_NOTES_AVAILABLE' | translate
                        "
                    >
                        <icon
                            className="material-symbols-rounded"
                            class="text-sm"
                        >
                            info_i
                        </icon>
                    </div>
                }
            </div>
        </ng-template>
        @if ((guests | async)?.length) {
            <button
                class="absolute bottom-4 right-4 z-20 h-12 w-12 bg-secondary text-white shadow hover:shadow-lg"
                [matTooltip]="'APP.CONCIERGE.VISITORS_DOWNLOAD' | translate"
                matTooltipPosition="left"
                icon
                matRipple
                (click)="downloadVisitorList()"
            >
                <icon>download</icon>
            </button>
        }
        <div class="h-8 w-full"></div>
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GuestListingComponent, { className: "GuestListingComponent", filePath: "apps/concierge/src/app/visitors/guest-listing.component.ts", lineNumber: 668 });
})();

// apps/concierge/src/app/visitors/invite-visitor-modal.component.ts
var _InviteVisitorModalComponent = class _InviteVisitorModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.date = this._data.date;
  }
  onDone() {
    this._dialog_ref.close();
  }
};
_InviteVisitorModalComponent.\u0275fac = function InviteVisitorModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InviteVisitorModalComponent)();
};
_InviteVisitorModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InviteVisitorModalComponent, selectors: [["invite-visitor-modal"]], standalone: false, decls: 2, vars: 1, consts: [[1, "relative", "max-h-[80vh]", "min-h-[40rem]", "min-w-[40rem]"], [3, "done", "date"]], template: function InviteVisitorModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0)(1, "invite-visitor-form", 1);
    \u0275\u0275listener("done", function InviteVisitorModalComponent_Template_invite_visitor_form_done_1_listener() {
      return ctx.onDone();
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("date", ctx.date);
  }
}, dependencies: [InviteVisitorFormComponent], encapsulation: 2 });
var InviteVisitorModalComponent = _InviteVisitorModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InviteVisitorModalComponent, [{
    type: Component,
    args: [{ selector: "invite-visitor-modal", template: `
        <main class="relative max-h-[80vh] min-h-[40rem] min-w-[40rem]">
            <invite-visitor-form
                [date]="date"
                (done)="onDone()"
            ></invite-visitor-form>
        </main>
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteVisitorModalComponent, { className: "InviteVisitorModalComponent", filePath: "apps/concierge/src/app/visitors/invite-visitor-modal.component.ts", lineNumber: 17 });
})();

// apps/concierge/src/app/visitors/visitors-topbar.component.ts
function VisitorsTopbarComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 3);
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
var _VisitorsTopbarComponent = class _VisitorsTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(VisitorsStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
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
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("zone_ids")) {
        const zones = params.get("zone_ids").split(",");
        if (zones.length) {
          const level = this._org.levelWithID(zones);
          this.zones = zones;
          if (!level)
            return;
          this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
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
  }
};
_VisitorsTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275VisitorsTopbarComponent_BaseFactory;
  return function VisitorsTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275VisitorsTopbarComponent_BaseFactory || (\u0275VisitorsTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_VisitorsTopbarComponent)))(__ngFactoryType__ || _VisitorsTopbarComponent);
  };
})();
_VisitorsTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorsTopbarComponent, selectors: [["visitors-topbar"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 12, consts: [[1, "flex", "h-20", "items-center", "space-x-2", "border-b", "border-base-200", "bg-base-100", "px-4"], ["appearance", "outline"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["placeholder", "Viewing Period", 3, "ngModelChange", "ngModel"], [1, "w-2", "flex-1"], [1, "mr-2", 3, "modelChange"], [3, "dateChange"]], template: function VisitorsTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function VisitorsTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function VisitorsTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275repeaterCreate(4, VisitorsTopbarComponent_For_5_Template, 2, 2, "mat-option", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 1)(8, "mat-select", 4);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275listener("ngModelChange", function VisitorsTopbarComponent_Template_mat_select_ngModelChange_8_listener($event) {
      return ctx.setFilters({ period: $event });
    });
    \u0275\u0275elementStart(10, "mat-option", 3);
    \u0275\u0275text(11, "Show Day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 3);
    \u0275\u0275text(13, "Show Week");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-option", 3);
    \u0275\u0275text(15, "Show Month");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(16, "div", 5);
    \u0275\u0275elementStart(17, "searchbar", 6);
    \u0275\u0275listener("modelChange", function VisitorsTopbarComponent_Template_searchbar_modelChange_17_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "date-options", 7);
    \u0275\u0275listener("dateChange", function VisitorsTopbarComponent_Template_date_options_dateChange_18_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.zones);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 6, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 8, ctx.levels));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ((tmp_3_0 = \u0275\u0275pipeBind1(9, 10, ctx.filters)) == null ? null : tmp_3_0.period) || 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 7);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 30);
  }
}, dependencies: [NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, MatFormField, MatSelect, MatOption, AsyncPipe, TranslatePipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=visitors-topbar.component.css.map */"] });
var VisitorsTopbarComponent = _VisitorsTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorsTopbarComponent, [{
    type: Component,
    args: [{ selector: "visitors-topbar", template: `
        <div
            class="flex h-20 items-center space-x-2 border-b border-base-200 bg-base-100 px-4"
        >
            <mat-form-field appearance="outline">
                <mat-select
                    multiple
                    [(ngModel)]="zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                >
                    @for (level of levels | async; track level) {
                        <mat-option [value]="level.id">
                            {{ level.display_name || level.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
                <mat-select
                    [ngModel]="(filters | async)?.period || 1"
                    (ngModelChange)="setFilters({ period: $event })"
                    placeholder="Viewing Period"
                >
                    <mat-option [value]="1">Show Day</mat-option>
                    <mat-option [value]="7">Show Week</mat-option>
                    <mat-option [value]="30">Show Month</mat-option>
                </mat-select>
            </mat-form-field>
            <div class="w-2 flex-1"></div>
            <searchbar
                class="mr-2"
                (modelChange)="setSearch($event)"
            ></searchbar>
            <date-options (dateChange)="setDate($event)"></date-options>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;598beeb1039b1ab45f9544c34b6ccfd79f95c38cdc3862574ac547cac62c7acc;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/visitors/visitors-topbar.component.ts */\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=visitors-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorsTopbarComponent, { className: "VisitorsTopbarComponent", filePath: "apps/concierge/src/app/visitors/visitors-topbar.component.ts", lineNumber: 58 });
})();

// apps/concierge/src/app/visitors/visitors.component.ts
var _c03 = ["app-new-visitors", ""];
function VisitorsComponent_For_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const level_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_11_0 = \u0275\u0275pipeBind1(2, 1, level_r1.parent_id)) == null ? null : tmp_11_0.display_name, " ");
  }
}
function VisitorsComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11)(1, "div", 15);
    \u0275\u0275conditionalCreate(2, VisitorsComponent_For_20_Conditional_2_Template, 5, 3, "div", 16);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r1.display_name || level_r1.name, " ");
  }
}
function VisitorsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 14);
  }
}
var _VisitorsComponent = class _VisitorsComponent {
  constructor() {
    this._state = inject(VisitorsStateService);
    this._org = inject(OrganisationService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this.loading = this._state.loading;
    this.filters = this._state.filters;
    this.zones = [];
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this._settings.get("app.use_region") ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
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
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  async inviteVisitor() {
    this._dialog.open(InviteVisitorModalComponent, {
      data: {
        date: await nextValueFrom(this._state.filters.pipe(map((f) => f.date || Date.now())))
      }
    });
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
};
_VisitorsComponent.\u0275fac = function VisitorsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorsComponent)();
};
_VisitorsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorsComponent, selectors: [["", "app-new-visitors", ""]], standalone: false, attrs: _c03, decls: 28, vars: 17, consts: [[1, "print:hidden"], [1, "flex", "h-px", "flex-1", "print:hidden"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-2", "flex-1"], [1, "mr-2", 3, "modelChange"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "flex", "items-center", "px-8", "pb-4"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [3, "dateChange"], [1, "mx-8", "h-1/2", "flex-1", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function VisitorsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-topbar", 0);
    \u0275\u0275text(1, ">");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 1);
    \u0275\u0275element(3, "app-sidebar");
    \u0275\u0275elementStart(4, "main", 2)(5, "div", 3)(6, "h2", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 5);
    \u0275\u0275elementStart(10, "searchbar", 6);
    \u0275\u0275listener("modelChange", function VisitorsComponent_Template_searchbar_modelChange_10_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 7);
    \u0275\u0275listener("click", function VisitorsComponent_Template_button_click_11_listener() {
      return ctx.inviteVisitor();
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8)(15, "mat-form-field", 9)(16, "mat-select", 10);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("ngModelChange", function VisitorsComponent_Template_mat_select_ngModelChange_16_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275repeaterCreate(19, VisitorsComponent_For_20_Template, 5, 3, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "div", 5);
    \u0275\u0275elementStart(23, "date-options", 12);
    \u0275\u0275listener("dateChange", function VisitorsComponent_Template_date_options_dateChange_23_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 13);
    \u0275\u0275element(25, "guest-listings");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, VisitorsComponent_Conditional_26_Template, 1, 0, "mat-progress-bar", 14);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "RESOURCE.VISITORS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 7, "BOOKINGS.VISITOR_INVITE_TITLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(17, 9, ctx.filters)) == null ? null : tmp_2_0.zones)("placeholder", \u0275\u0275pipeBind1(18, 11, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(21, 13, ctx.levels));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(27, 15, ctx.loading) ? 26 : -1);
  }
}, dependencies: [NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, ApplicationTopbarComponent, ApplicationSidebarComponent, MatFormField, MatSelect, MatOption, MatProgressBar, MatRipple, GuestListingComponent, AsyncPipe, TranslatePipe, BuildingPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=visitors.component.css.map */"] });
var VisitorsComponent = _VisitorsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorsComponent, [{
    type: Component,
    args: [{ selector: "[app-new-visitors]", template: `
        <app-topbar class="print:hidden">></app-topbar>
        <div class="flex h-px flex-1 print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex items-center space-x-2 px-8 py-4">
                    <h2 class="text-2xl font-medium">
                        {{ 'RESOURCE.VISITORS' | translate }}
                    </h2>
                    <div class="w-2 flex-1"></div>
                    <searchbar
                        class="mr-2"
                        (modelChange)="setSearch($event)"
                    ></searchbar>
                    <button
                        btn
                        matRipple
                        class="w-40"
                        (click)="inviteVisitor()"
                    >
                        {{ 'BOOKINGS.VISITOR_INVITE_TITLE' | translate }}
                    </button>
                </div>
                <div class="flex items-center px-8 pb-4">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-60"
                    >
                        <mat-select
                            [ngModel]="(filters | async)?.zones"
                            (ngModelChange)="updateZones($event)"
                            [placeholder]="'COMMON.LEVEL_ALL' | translate"
                            multiple
                        >
                            @for (level of levels | async; track level) {
                                <mat-option [value]="level.id">
                                    <div class="flex flex-col-reverse">
                                        @if (use_region) {
                                            <div class="text-xs opacity-30">
                                                {{
                                                    (level.parent_id | building)
                                                        ?.display_name
                                                }}
                                                <span class="opacity-0">
                                                    -
                                                </span>
                                            </div>
                                        }
                                        <div>
                                            {{
                                                level.display_name || level.name
                                            }}
                                        </div>
                                    </div>
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <div class="w-2 flex-1"></div>
                    <date-options (dateChange)="setDate($event)"></date-options>
                </div>
                <div class="mx-8 h-1/2 flex-1 overflow-auto">
                    <guest-listings></guest-listings>
                </div>
                @if (loading | async) {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
                }
            </main>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;08c828c36224658230d6844bbbe8551e02a5c30c320aa5e48c90063783b9b8fa;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/visitors/visitors.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=visitors.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorsComponent, { className: "VisitorsComponent", filePath: "apps/concierge/src/app/visitors/visitors.component.ts", lineNumber: 99 });
})();

// apps/concierge/src/app/visitors/visitors.module.ts
var ROUTES = [{ path: "", component: VisitorsComponent }];
var _VisitorsModule = class _VisitorsModule {
};
_VisitorsModule.\u0275fac = function VisitorsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorsModule)();
};
_VisitorsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VisitorsModule });
_VisitorsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  SharedBookingsModule,
  UserLabelComponent,
  RouterModule.forChild(ROUTES)
] });
var VisitorsModule = _VisitorsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorsModule, [{
    type: NgModule,
    args: [{
      declarations: [
        VisitorsComponent,
        VisitorsTopbarComponent,
        GuestListingComponent,
        InviteVisitorModalComponent,
        VisitorInductionModalComponent,
        VisitorNotesModalComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedBookingsModule,
        UserLabelComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  VisitorsModule
};
//# sourceMappingURL=visitors.module-QSVGXBSX.js.map
