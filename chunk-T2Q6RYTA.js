import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  DurationPipe,
  FormsModule,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatRipple,
  MatRippleModule,
  NewUserModalComponent,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Renderer2,
  Tc,
  TranslatePipe,
  User,
  UserAvatarComponent,
  UserFormComponent,
  UserSearchFieldComponent,
  WFHSettingsModalComponent,
  addMinutes,
  catchError,
  combineLatest,
  debounceTime,
  defaultIfEmpty,
  differenceInMinutes,
  endOfDay,
  getUnixTime,
  isSameDay,
  map,
  of,
  queryUserFreeBusy,
  setHours,
  shareReplay,
  showGuest,
  showStaff,
  startOfDay,
  startWith,
  switchMap,
  toDate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-WRFKOJTY.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

// node_modules/date-fns/fromUnixTime.js
function fromUnixTime(unixTime, options) {
  return toDate(unixTime * 1e3, options?.in);
}

// libs/users/src/lib/find-availability-modal/user-availability.component.ts
function UserAvailabilityComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    \u0275\u0275styleProp("left", event_r1.start + "%")("width", event_r1.size + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 6, event_r1.date, "shortTime"), " - ", \u0275\u0275pipeBind2(4, 9, event_r1.date.valueOf() + event_r1.duration * 60 * 1e3, "shortTime"), " ");
  }
}
var UserAvailabilityComponent = class _UserAvailabilityComponent {
  constructor() {
    this.availability = [];
    this.date = Date.now();
  }
  static {
    this.\u0275fac = function UserAvailabilityComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAvailabilityComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvailabilityComponent, selectors: [["user-availability-list"]], inputs: { user: "user", availability: "availability", date: "date" }, decls: 2, vars: 1, consts: [[1, "relative", "inset-y-0", "h-32", "w-[120rem]", "border-b", "border-base-200"], ["event", "", "class", "border-red-700 absolute inset-y-0 overflow-hidden rounded border bg-error p-2 text-white", 3, "left", "width", 4, "ngFor", "ngForOf"], ["event", "", 1, "border-red-700", "absolute", "inset-y-0", "overflow-hidden", "rounded", "border", "bg-error", "p-2", "text-white"], [1, "max-w-full", "text-xs"]], template: function UserAvailabilityComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, UserAvailabilityComponent_div_1_Template, 5, 12, "div", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.availability);
      }
    }, dependencies: [CommonModule, NgForOf, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=user-availability.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvailabilityComponent, { className: "UserAvailabilityComponent", filePath: "libs/users/src/lib/find-availability-modal/user-availability.component.ts", lineNumber: 45 });
})();

// libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts
var _c0 = ["container"];
var _c1 = () => [];
function FindAvailabilityModalComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hr_r2 = ctx.$implicit;
    const hour_r3 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", -ctx_r3.offset_x + "px");
    \u0275\u0275attribute("disabled", ctx_r3.today && ctx_r3.current_hour > hour_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, hr_r2, "haa"));
  }
}
function FindAvailabilityModalComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "a-user-avatar", 13);
    \u0275\u0275elementStart(2, "div", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function FindAvailabilityModalComponent_div_20_Template_button_click_4_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeUser(user_r6));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", -ctx_r3.offset_y + "px");
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r6.name || ctx_r3.host.email, " ");
  }
}
function FindAvailabilityModalComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 36);
  }
  if (rf & 2) {
    const h_r7 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", -(ctx_r3.offset_x + 1) + "px");
    \u0275\u0275attribute("disabled", ctx_r3.today && ctx_r3.current_hour > h_r7);
  }
}
function FindAvailabilityModalComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r3.date, "shortTime"), " ");
  }
}
function FindAvailabilityModalComponent_user_availability_list_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "user-availability-list", 26);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("user", user_r8)("date", ctx_r3.date)("availability", \u0275\u0275pipeBind1(1, 3, ctx_r3.availability) ? \u0275\u0275pipeBind1(2, 5, ctx_r3.availability)[user_r8.email.toLowerCase()] : \u0275\u0275pureFunction0(7, _c1));
  }
}
var FindAvailabilityModalComponent = class _FindAvailabilityModalComponent extends AsyncHandler {
  get today() {
    return isSameDay(this.date, Date.now());
  }
  get current_hour() {
    return (/* @__PURE__ */ new Date()).getHours();
  }
  get selection_left() {
    const date = new Date(this.date);
    return (date.getHours() + date.getMinutes() / 60) * 5;
  }
  get selection_width() {
    return this.duration / 60 * 5;
  }
  constructor(_data, _renderer, _dialog_ref) {
    super();
    this._data = _data;
    this._renderer = _renderer;
    this._dialog_ref = _dialog_ref;
    this.users = new BehaviorSubject([]);
    this.search = "";
    this.date = this._data.date || Date.now();
    this.duration = this._data.duration || 60;
    this.offset_y = 0;
    this.offset_x = 0;
    this.host = this._data.host;
    this.hours = new Array(24).fill(0).map((_, idx) => setHours(startOfDay(Date.now()), idx).valueOf());
    this.on_change = new BehaviorSubject(0);
    this.availability = combineLatest([
      this.users,
      this.on_change
    ]).pipe(debounceTime(300), switchMap(([users]) => {
      return queryUserFreeBusy({
        calendars: [
          this.host.email,
          ...users.map((_) => _.email.toLowerCase())
        ].join(","),
        period_start: getUnixTime(startOfDay(this.date)),
        period_end: getUnixTime(endOfDay(this.date))
      }).pipe(catchError(() => of([])));
    }), map((availability_list) => {
      const availability_map = {};
      for (const item of availability_list) {
        availability_map[item.id.toLowerCase()] = item.availability.filter((_) => _.status === "busy").map((block) => {
          const date = fromUnixTime(block.starts_at);
          const duration = differenceInMinutes(fromUnixTime(block.ends_at), fromUnixTime(block.starts_at));
          return {
            date,
            duration,
            start: (date.getHours() + date.getMinutes() / 60) / 24 * 100,
            size: duration / 60 / 24 * 100
          };
        });
      }
      return availability_map;
    }), defaultIfEmpty({}), shareReplay(1));
    this.move_time = false;
    this._start_time = 0;
    this._move_last = 0;
    this._move_size = 80 * 24;
    this.users.next([...this._data.users]);
  }
  addUser(user) {
    this.users.next([
      ...this.users.getValue().filter((u) => u.email !== user.email),
      user
    ]);
    this.user = null;
  }
  removeUser(user) {
    this.users.next(this.users.getValue().filter((u) => u.email !== user.email));
    this.user = null;
  }
  closeAndUpdate() {
    this._dialog_ref.close(true);
  }
  ngAfterViewInit() {
    const date = new Date(this.date);
    this.timeout("init", () => {
      const el = this._container_el.nativeElement.querySelector(`[hour="${date.getHours()}"]`);
      if (el) {
        const rect = this._container_el.nativeElement.getBoundingClientRect();
        const el_rect = el.getBoundingClientRect();
        this._container_el.nativeElement.scrollTo(el_rect.left - 128 - rect.left, 0);
      }
      this.onScroll();
    }, 300);
  }
  onScroll() {
    this.offset_x = this._container_el.nativeElement.scrollLeft;
    this.offset_y = this._container_el.nativeElement.scrollTop;
  }
  startMovePeriod(event) {
    event.preventDefault();
    event.stopPropagation();
    this._move_last = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    this.move_time = true;
    this._start_time = this.date;
    event instanceof MouseEvent ? this.subscription("on_move", this._renderer.listen("window", "mousemove", (e) => this._onMovePeriod(e))) : this.subscription("on_move", this._renderer.listen("window", "touchmove", (e) => this._onMovePeriod(e)));
    event instanceof MouseEvent ? this.subscription("on_move_end", this._renderer.listen("window", "mouseup", () => this._onMoveEnd())) : this.subscription("on_move_end", this._renderer.listen("window", "touchend", () => this._onMoveEnd()));
  }
  startMoveDuration(event) {
    event.preventDefault();
    event.stopPropagation();
    this._move_last = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    this._start_time = this.duration;
    event instanceof MouseEvent ? this.subscription("on_move", this._renderer.listen("window", "mousemove", (e) => this._onMoveDuration(e))) : this.subscription("on_move", this._renderer.listen("window", "touchmove", (e) => this._onMoveDuration(e)));
    event instanceof MouseEvent ? this.subscription("on_move_end", this._renderer.listen("window", "mouseup", () => this._onMoveEnd())) : this.subscription("on_move_end", this._renderer.listen("window", "touchend", () => this._onMoveEnd()));
  }
  _onMovePeriod(event) {
    const change_px = this._move_last - (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX);
    const dir = change_px > 0 ? -1 : 1;
    const change_min = dir * Math.floor(Math.abs(change_px / this._move_size * 24 * 60) / 5) * 5;
    if (change_min) {
      const old_date = this.date;
      this.date = addMinutes(this._start_time, change_min).valueOf();
      if (this.date < Date.now())
        this.date = old_date;
    }
  }
  _onMoveDuration(event) {
    const change_px = this._move_last - (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX);
    const dir = change_px > 0 ? -1 : 1;
    const change_min = dir * Math.floor(Math.abs(change_px / this._move_size * 24 * 60) / 5) * 5;
    if (change_min) {
      this.duration = Math.max(30, this._start_time + change_min);
    }
  }
  _onMoveEnd() {
    this.unsub("on_move");
    this.unsub("on_move_end");
    this._move_last = 0;
    this.move_time = false;
  }
  static {
    this.\u0275fac = function FindAvailabilityModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FindAvailabilityModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindAvailabilityModalComponent, selectors: [["find-availability-modal"]], viewQuery: function FindAvailabilityModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._container_el = _t.first);
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 48, vars: 37, consts: [["container", ""], [1, "flex", "flex-col", "space-y-2", "p-2"], [1, "flex", "h-14", "w-full", "items-center", "justify-between", "space-x-2", "rounded", "border-none", "bg-base-200", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-[calc(100vh-9rem)]", "flex-col", "overflow-hidden", "rounded", "border", "border-base-300", "sm:h-[65vh]"], [1, "flex", "w-full", "flex-col", "space-y-2", "p-2", "sm:flex-row", "sm:space-x-2", "sm:space-y-0"], [1, "max-h-[3.25rem]", "flex-1", 3, "ngModelChange", "ngModel"], [1, "relative", "grid", "h-1/2", "w-full", "max-w-[100vw]", "flex-1", "divide-x", "divide-y", "divide-base-200", "overflow-hidden", "border-t", "border-base-200", "sm:max-w-[80vw]"], ["times", "", 1, "col-start-2", "flex", "h-10", "overflow-hidden", "border-l", "border-base-200"], ["hour", "", "class", "relative h-10 min-w-[5rem] border-r border-base-200 p-2 text-sm", 3, "left", 4, "ngFor", "ngForOf"], ["users", "", 1, "row-start-2", "w-24", "overflow-hidden"], ["host", "", 1, "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "border-base-200", "py-2"], [1, "text-2xl", 3, "user"], [1, "max-w-full", "overflow-hidden", "break-words", "px-2", "text-center", "text-xs"], ["person", "", "class", "relative flex h-32 w-24 flex-col items-center justify-center border-b border-base-200 py-2", 3, "top", 4, "ngFor", "ngForOf"], ["blocks", "", 1, "relative", "row-start-2", "overflow-hidden"], ["fixed", "", 1, "absolute", "inset-0", "flex", "overflow-hidden"], ["divider", "", "class", "relative h-full min-w-[5rem] border-l border-base-200", 3, "left", 4, "ngFor", "ngForOf"], ["selection", "", 1, "absolute", "inset-y-0", "z-20", "cursor-grab", "!border-x-2", "!border-info", "active:cursor-grabbing", 3, "mousedown", "touchstart"], [1, "absolute", "inset-0", "bg-info", "opacity-30"], ["handle", "", 1, "absolute", "-left-px", "top-1/2", "h-3", "w-3", "-translate-x-1/2", "-translate-y-1/2", "rounded-full", "bg-info"], ["handle", "", 1, "absolute", "-right-px", "top-1/2", "h-3", "w-3", "-translate-y-1/2", "translate-x-1/2", "rounded-full", "bg-info", "hover:h-4", "hover:w-4", "active:bg-secondary", 3, "mousedown", "touchstart"], [1, "absolute", "left-1/2", "top-2", "-translate-x-1/2", "whitespace-nowrap", "rounded", "border", "border-base-200", "bg-base-100", "p-2", "text-xs", "shadow"], ["class", "absolute left-1/2 top-12 -translate-x-1/2 whitespace-nowrap rounded border border-base-200 bg-base-100 p-2 text-xs shadow", 4, "ngIf"], ["scroll", "", 1, "absolute", "inset-0", "overflow-auto", 3, "scroll"], [1, "pointer-events-none", 3, "user", "date", "availability"], ["class", "pointer-events-none", 3, "user", "date", "availability", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], ["hour", "", 1, "relative", "h-10", "min-w-[5rem]", "border-r", "border-base-200", "p-2", "text-sm"], ["person", "", 1, "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "border-base-200", "py-2"], [1, "max-w-full", "break-words", "px-2", "text-center", "text-xs"], ["icon", "", 1, "absolute", "-left-1", "-top-1", 3, "click"], ["divider", "", 1, "relative", "h-full", "min-w-[5rem]", "border-l", "border-base-200"], [1, "absolute", "left-1/2", "top-12", "-translate-x-1/2", "whitespace-nowrap", "rounded", "border", "border-base-200", "bg-base-100", "p-2", "text-xs", "shadow"]], template: function FindAvailabilityModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "h2", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 4)(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 5)(9, "div", 6)(10, "a-date-field", 7);
        \u0275\u0275twoWayListener("ngModelChange", function FindAvailabilityModalComponent_Template_a_date_field_ngModelChange_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.date, $event) || (ctx.date = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function FindAvailabilityModalComponent_Template_a_date_field_ngModelChange_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.on_change.next(ctx.on_change.getValue() + 1));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a-user-search-field", 7);
        \u0275\u0275twoWayListener("ngModelChange", function FindAvailabilityModalComponent_Template_a_user_search_field_ngModelChange_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.user, $event) || (ctx.user = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function FindAvailabilityModalComponent_Template_a_user_search_field_ngModelChange_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addUser($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9);
        \u0275\u0275template(14, FindAvailabilityModalComponent_div_14_Template, 4, 7, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 11)(16, "div", 12);
        \u0275\u0275element(17, "a-user-avatar", 13);
        \u0275\u0275elementStart(18, "div", 14);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, FindAvailabilityModalComponent_div_20_Template, 7, 4, "div", 15);
        \u0275\u0275pipe(21, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 16)(23, "div", 17);
        \u0275\u0275template(24, FindAvailabilityModalComponent_div_24_Template, 1, 3, "div", 18);
        \u0275\u0275elementStart(25, "div", 19);
        \u0275\u0275listener("mousedown", function FindAvailabilityModalComponent_Template_div_mousedown_25_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startMovePeriod($event));
        })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_25_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startMovePeriod($event));
        });
        \u0275\u0275element(26, "div", 20)(27, "div", 21);
        \u0275\u0275elementStart(28, "div", 22);
        \u0275\u0275listener("mousedown", function FindAvailabilityModalComponent_Template_div_mousedown_28_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startMoveDuration($event));
        })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_28_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startMoveDuration($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 23);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "duration");
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, FindAvailabilityModalComponent_div_32_Template, 3, 4, "div", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 25, 0);
        \u0275\u0275listener("scroll", function FindAvailabilityModalComponent_Template_div_scroll_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onScroll());
        });
        \u0275\u0275element(35, "user-availability-list", 26);
        \u0275\u0275pipe(36, "async");
        \u0275\u0275pipe(37, "async");
        \u0275\u0275template(38, FindAvailabilityModalComponent_user_availability_list_38_Template, 3, 8, "user-availability-list", 27);
        \u0275\u0275pipe(39, "async");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(40, "footer", 2)(41, "button", 28)(42, "div", 29)(43, "icon", 30);
        \u0275\u0275text(44, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 31);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 22, "CALENDAR_EVENT.FIND_AVAILABILITY"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.date);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.user);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.hours);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("top", -ctx.offset_y + "px");
        \u0275\u0275advance();
        \u0275\u0275property("user", ctx.host);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.host.name || ctx.host.email, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(21, 24, ctx.users));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.hours);
        \u0275\u0275advance();
        \u0275\u0275styleProp("left", "calc(" + ctx.selection_left + "rem - " + ctx.offset_x + "px)")("width", ctx.selection_width + "rem");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 26, ctx.duration), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.move_time);
        \u0275\u0275advance(3);
        \u0275\u0275property("user", ctx.host)("date", ctx.date)("availability", \u0275\u0275pipeBind1(36, 28, ctx.availability) ? \u0275\u0275pipeBind1(37, 30, ctx.availability)[ctx.host.email] : \u0275\u0275pureFunction0(36, _c1));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(39, 32, ctx.users));
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", true);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 34, "COMMON.BACK_TO_FORM"), " ");
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      DatePipe,
      MatRippleModule,
      MatRipple,
      TranslatePipe,
      UserAvailabilityComponent,
      UserAvatarComponent,
      UserSearchFieldComponent,
      DateFieldComponent,
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      DurationPipe,
      FormsModule,
      NgControlStatus,
      NgModel
    ], styles: ["\n\n.grid[_ngcontent-%COMP%] {\n  grid-template-columns: 6rem 1fr;\n  grid-template-rows: 2.5rem minmax(0, 1fr);\n}\n[disabled=true][_ngcontent-%COMP%], \n[disabled=true][_ngcontent-%COMP%]   [header][_ngcontent-%COMP%] {\n  background: var(--b3) !important;\n  pointer-events: none;\n}\n[disabled=true][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=find-availability-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindAvailabilityModalComponent, { className: "FindAvailabilityModalComponent", filePath: "libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts", lineNumber: 281 });
})();

// libs/users/src/lib/select-user-modal.component.ts
function SelectUserModalComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function SelectUserModalComponent_button_15_Template_button_click_0_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(user_r2));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.email);
  }
}
function SelectUserModalComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r2.search.value ? "COMMON.SELECT_USER_EMPTY_MATCHES" : "COMMON.SELECT_USER_EMPTY"), " ");
  }
}
var SelectUserModalComponent = class _SelectUserModalComponent {
  constructor(_dialog_ref) {
    this._dialog_ref = _dialog_ref;
    this.search = new BehaviorSubject("");
    this.users = this.search.pipe(debounceTime(300), switchMap((s) => Tc({ q: s }).pipe(map((o) => o.data), catchError(() => of([])))), startWith([]));
  }
  select(user) {
    this._dialog_ref.close(user);
  }
  static {
    this.\u0275fac = function SelectUserModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectUserModalComponent)(\u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectUserModalComponent, selectors: [["select-user-modal"]], decls: 19, vars: 13, consts: [[1, "w-[28rem]"], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[60vh]", "overflow-auto", "px-2", "pb-2"], ["appearance", "outline", 1, "no-subscript", "sticky", "top-0", "z-10", "mb-2", "w-full", "bg-base-100"], ["matPrefix", "", 1, "relative", "-left-2", "text-2xl"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "relative", "z-0", "w-full", "space-y-2"], ["class", "w-full rounded border border-base-300 p-2 text-left hover:bg-base-200", "matRipple", "", 3, "click", 4, "ngFor", "ngForOf"], ["class", "flex h-32 w-full items-center justify-center p-8 opacity-30", 4, "ngIf"], ["matRipple", "", 1, "w-full", "rounded", "border", "border-base-300", "p-2", "text-left", "hover:bg-base-200", 3, "click"], [1, "text-xs", "opacity-30"], [1, "flex", "h-32", "w-full", "items-center", "justify-center", "p-8", "opacity-30"]], template: function SelectUserModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 3)(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 4)(9, "mat-form-field", 5)(10, "icon", 6);
        \u0275\u0275text(11, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 7);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275listener("ngModelChange", function SelectUserModalComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.search.next($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8);
        \u0275\u0275template(15, SelectUserModalComponent_button_15_Template, 5, 2, "button", 9);
        \u0275\u0275pipe(16, "async");
        \u0275\u0275template(17, SelectUserModalComponent_div_17_Template, 3, 3, "div", 10);
        \u0275\u0275pipe(18, "async");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "COMMON.SELECT_USER_TITLE"), " ");
        \u0275\u0275advance(9);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 7, "COMMON.SELECT_USER_SEARCH"))("ngModel", ctx.search.value);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(16, 9, ctx.users));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(18, 11, ctx.users).length);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      TranslatePipe,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatDialogModule,
      MatDialogClose,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectUserModalComponent, { className: "SelectUserModalComponent", filePath: "libs/users/src/lib/select-user-modal.component.ts", lineNumber: 83 });
})();

// libs/users/src/lib/user.pipe.ts
var USER_LIST = [];
var EMPTY_USER = new User();
var UserPipe = class _UserPipe {
  /**
   * Get details of the user with the given ID
   * @param user_id ID or Email of the user
   */
  transform(user_id) {
    return __async(this, null, function* () {
      if (!user_id)
        return EMPTY_USER;
      let user = USER_LIST.find(({ id, email }) => id === user_id || email === user_id);
      if (user)
        return user;
      user = yield showStaff(user_id).toPromise().catch(() => null);
      if (user) {
        USER_LIST.push(user);
        return user;
      }
      user = yield showGuest(user_id).toPromise().catch(() => null);
      if (user) {
        USER_LIST.push(user);
        return user;
      }
      return EMPTY_USER;
    });
  }
  static {
    this.\u0275fac = function UserPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "user", type: _UserPipe, pure: true });
  }
};

// libs/users/src/lib/users.module.ts
var SharedUsersModule = class _SharedUsersModule {
  static {
    this.\u0275fac = function SharedUsersModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SharedUsersModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedUsersModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      NewUserModalComponent,
      UserFormComponent,
      WFHSettingsModalComponent,
      FindAvailabilityModalComponent,
      UserAvailabilityComponent,
      SelectUserModalComponent
    ] });
  }
};

export {
  FindAvailabilityModalComponent
};
//# sourceMappingURL=chunk-T2Q6RYTA.js.map
