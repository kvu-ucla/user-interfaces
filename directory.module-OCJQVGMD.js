import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  DefaultValueAccessor,
  FooterMenuComponent,
  FormsModule,
  IconComponent,
  MatFormField,
  MatInput,
  MatPrefix,
  MatProgressSpinner,
  MatRipple,
  MatSuffix,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  RouterLink,
  RouterModule,
  SafePipe,
  SettingsService,
  SharedComponentModule,
  TopbarComponent,
  UserAvatarComponent,
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  of,
  searchStaff,
  shareReplay,
  startWith,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4LW2ZPSH.js";
import "./chunk-4MWRP73S.js";

// apps/workplace/src/app/directory/user-list.component.ts
var _c0 = ["a-directory-user-list", ""];
var _c1 = () => ["/explore"];
var _c2 = (a0) => ({ user: a0 });
function DirectoryUserListComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 10);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function DirectoryUserListComponent_ng_container_14_ng_container_1_ng_container_1_div_3_a_user_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-user-avatar", 23);
  }
  if (rf & 2) {
    const user_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("user", user_r2);
  }
}
function DirectoryUserListComponent_ng_container_14_ng_container_1_ng_container_1_div_3_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275text(2, " Call ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 1, "tel:" + user_r2.phone, "url"), \u0275\u0275sanitizeUrl);
  }
}
function DirectoryUserListComponent_ng_container_14_ng_container_1_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, DirectoryUserListComponent_ng_container_14_ng_container_1_ng_container_1_div_3_a_user_avatar_1_Template, 1, 1, "a-user-avatar", 16);
    \u0275\u0275elementStart(2, "div", 17)(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 19);
    \u0275\u0275pipe(6, "safe");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 20)(9, "a", 21);
    \u0275\u0275text(10, " Locate ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, DirectoryUserListComponent_ng_container_14_ng_container_1_ng_container_1_div_3_a_11_Template, 3, 4, "a", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("with-image", ctx_r2.show_image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.show_image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r2.name);
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(6, 9, "mailto:" + user_r2.email, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r2.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c1))("queryParams", \u0275\u0275pureFunction1(13, _c2, user_r2.email));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", user_r2.phone);
  }
}
function DirectoryUserListComponent_ng_container_14_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DirectoryUserListComponent_ng_container_14_ng_container_1_ng_container_1_div_3_Template, 12, 15, "div", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const letter_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(2);
    const grouped_users_r5 = \u0275\u0275readContextLet(12);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", letter_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", grouped_users_r5[letter_r4]);
  }
}
function DirectoryUserListComponent_ng_container_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DirectoryUserListComponent_ng_container_14_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const letter_r4 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const grouped_users_r5 = \u0275\u0275readContextLet(12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", grouped_users_r5[letter_r4] == null ? null : grouped_users_r5[letter_r4].length);
  }
}
function DirectoryUserListComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DirectoryUserListComponent_ng_container_14_ng_container_1_Template, 2, 1, "ng-container", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.letters);
  }
}
function DirectoryUserListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "div", 25)(3, "app-icon", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const search_str_r6 = \u0275\u0275pipeBind1(1, 2, ctx_r2.search$);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((search_str_r6 == null ? null : search_str_r6.length) >= ctx_r2.min_search_length ? "close" : "arrow_upward");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (search_str_r6 == null ? null : search_str_r6.length) >= ctx_r2.min_search_length ? ' No matches for "' + search_str_r6 + '"' : "Type above to search for users", " ");
  }
}
var LETTERS = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split("");
var DirectoryUserListComponent = class _DirectoryUserListComponent extends AsyncHandler {
  /** Minimum length of the search string needed to initial a search */
  get min_search_length() {
    const length = this._settings.get("app.users.min_search_length");
    return typeof length === "number" && length >= 0 ? length : 3;
  }
  get show_image() {
    return this._settings.get("app.users.show_avatars");
  }
  constructor(_settings) {
    super();
    this._settings = _settings;
    this.letters = LETTERS;
    this.search$ = new BehaviorSubject("");
    this.search_results$ = this.search$.pipe(debounceTime(400), distinctUntilChanged(), switchMap((query) => {
      this.loading = true;
      return query.length >= this.min_search_length ? searchStaff(query).pipe(catchError(() => of([]))) : of([]);
    }), tap((l) => {
      console.log("Results:", l);
      this.loading = false;
    }), startWith([]), shareReplay(1));
    this.grouped_results$ = this.search_results$.pipe(map((list) => this.buildGroups(list)));
  }
  buildGroups(users) {
    const grouped_users = {};
    const sorted = users.sort((a, b) => a.name.localeCompare(b.name));
    for (const letter of this.letters) {
      grouped_users[letter] = sorted.filter((f) => f.name.startsWith(letter));
    }
    return grouped_users;
  }
  static {
    this.\u0275fac = function DirectoryUserListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DirectoryUserListComponent)(\u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DirectoryUserListComponent, selectors: [["", "a-directory-user-list", ""]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c0, decls: 18, vars: 9, consts: [["empty_state", ""], [1, "flex", "h-1/2", "flex-1", "flex-col-reverse", "sm:flex-row"], [1, "relative", "z-0", "flex", "h-1/2", "flex-1", "flex-col", "overflow-hidden", "sm:h-auto"], [1, "flex", "w-full", "items-center", "justify-center", "p-2"], ["overlay", "", "appearance", "outline", 1, "rounded"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", "placeholder", "Search for a person...", 3, "ngModelChange", "ngModel"], ["matSuffix", "", "class", "top-2", 3, "diameter", 4, "ngIf"], [1, "h-1/2", "w-full", "flex-1"], [4, "ngIf", "ngIfElse"], ["matSuffix", "", 1, "top-2", 3, "diameter"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "px-4", "py-2", "font-medium"], ["user", "", "class", "mb-2 flex flex-wrap items-center overflow-hidden bg-base-100 p-4 hover:bg-base-200 sm:space-x-4", 3, "with-image", 4, "ngFor", "ngForOf"], ["user", "", 1, "mb-2", "flex", "flex-wrap", "items-center", "overflow-hidden", "bg-base-100", "p-4", "hover:bg-base-200", "sm:space-x-4"], [3, "user", 4, "ngIf"], [1, "ml-4", "flex", "w-1/2", "flex-1", "flex-col", "sm:ml-0"], [1, "name"], ["name", "email", 1, "text-sm", "underline", 3, "href"], [1, "mt-4", "flex", "w-full", "items-center", "space-x-2", "sm:mt-0", "sm:w-auto", "sm:flex-col", "sm:space-x-0", "sm:space-y-2"], ["btn", "", "matRipple", "", 1, "w-32", "flex-1", "sm:flex-none", 3, "routerLink", "queryParams"], ["btn", "", "matRipple", "", "class", "sm:flex-nones w-32 flex-1", 3, "href", 4, "ngIf"], [3, "user"], ["btn", "", "matRipple", "", 1, "sm:flex-nones", "w-32", "flex-1", 3, "href"], [1, "flex", "flex-col", "items-center", "p-8"], [1, "text-5xl"], [1, "text"]], template: function DirectoryUserListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "topbar");
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-form-field", 4)(5, "app-icon", 5);
        \u0275\u0275text(6, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 6);
        \u0275\u0275listener("ngModelChange", function DirectoryUserListComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.search$.next($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, DirectoryUserListComponent_mat_spinner_8_Template, 1, 1, "mat-spinner", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "main", 8);
        \u0275\u0275declareLet(10);
        \u0275\u0275pipe(11, "async");
        \u0275\u0275declareLet(12);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275template(14, DirectoryUserListComponent_ng_container_14_Template, 2, 1, "ng-container", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(15, "footer-menu");
        \u0275\u0275template(16, DirectoryUserListComponent_ng_template_16_Template, 7, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const empty_state_r7 = \u0275\u0275reference(17);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngModel", ctx.search$.getValue());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        const user_list_r8 = \u0275\u0275pipeBind1(11, 4, ctx.search_results$);
        \u0275\u0275advance(4);
        \u0275\u0275storeLet(\u0275\u0275pipeBind1(13, 6, ctx.grouped_results$));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", user_list_r8.length)("ngIfElse", empty_state_r7);
      }
    }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, TopbarComponent, FooterMenuComponent, IconComponent, UserAvatarComponent, MatFormField, MatPrefix, MatSuffix, MatRipple, MatInput, MatProgressSpinner, AsyncPipe, SafePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: #f0f0f0;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 48rem;\n  max-width: calc(100% - 2rem);\n}\n/*# sourceMappingURL=user-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DirectoryUserListComponent, { className: "DirectoryUserListComponent", filePath: "apps/workplace/src/app/directory/user-list.component.ts", lineNumber: 151 });
})();

// apps/workplace/src/app/directory/directory.module.ts
var ROUTES = [{ path: "", component: DirectoryUserListComponent }];
var DirectoryModule = class _DirectoryModule {
  static {
    this.\u0275fac = function DirectoryModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DirectoryModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DirectoryModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(ROUTES),
      SharedComponentModule
    ] });
  }
};
export {
  DirectoryModule
};
//# sourceMappingURL=directory.module-OCJQVGMD.js.map
