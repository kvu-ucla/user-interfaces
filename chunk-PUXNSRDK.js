import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  DurationPipe,
  FormsModule,
  IconComponent,
  Input,
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
  NgModel,
  NgModule,
  Pipe,
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
  inject,
  isSameDay,
  map,
  of,
  queryUserFreeBusy,
  setClassMetadata,
  setHours,
  shareReplay,
  showGuest,
  showStaff,
  startOfDay,
  startWith,
  switchMap,
  toDate,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
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
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-O3SGNDMG.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

// node_modules/date-fns/fromUnixTime.js
function fromUnixTime(unixTime, options) {
  return toDate(unixTime * 1e3, options?.in);
}

// libs/users/src/lib/find-availability-modal/user-availability.component.ts
function UserAvailabilityComponent_For_2_Template(rf, ctx) {
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
var _UserAvailabilityComponent = class _UserAvailabilityComponent {
  constructor() {
    this.availability = [];
    this.date = Date.now();
  }
};
_UserAvailabilityComponent.\u0275fac = function UserAvailabilityComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserAvailabilityComponent)();
};
_UserAvailabilityComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvailabilityComponent, selectors: [["user-availability-list"]], inputs: { user: "user", availability: "availability", date: "date" }, decls: 3, vars: 0, consts: [[1, "relative", "inset-y-0", "h-32", "w-[120rem]", "border-b", "border-base-200"], ["event", "", 1, "border-red-700", "absolute", "inset-y-0", "overflow-hidden", "rounded", "border", "bg-error", "p-2", "text-white", 3, "left", "width"], ["event", "", 1, "border-red-700", "absolute", "inset-y-0", "overflow-hidden", "rounded", "border", "bg-error", "p-2", "text-white"], [1, "max-w-full", "text-xs"]], template: function UserAvailabilityComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, UserAvailabilityComponent_For_2_Template, 5, 12, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.availability);
  }
}, dependencies: [CommonModule, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=user-availability.component.css.map */"] });
var UserAvailabilityComponent = _UserAvailabilityComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAvailabilityComponent, [{
    type: Component,
    args: [{ selector: "user-availability-list", template: `
        <div
            class="relative inset-y-0 h-32 w-[120rem] border-b border-base-200"
        >
            @for (event of availability; track event) {
                <div
                    event
                    class="border-red-700 absolute inset-y-0 overflow-hidden rounded border bg-error p-2 text-white"
                    [style.left]="event.start + '%'"
                    [style.width]="event.size + '%'"
                >
                    <div class="max-w-full text-xs">
                        {{ event.date | date: 'shortTime' }} -
                        {{
                            event.date.valueOf() + event.duration * 60 * 1000
                                | date: 'shortTime'
                        }}
                    </div>
                </div>
            }
        </div>
    `, imports: [CommonModule], styles: ["/* angular:styles/component:css;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/find-availability-modal/user-availability.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=user-availability.component.css.map */\n"] }]
  }], null, { user: [{
    type: Input
  }], availability: [{
    type: Input
  }], date: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvailabilityComponent, { className: "UserAvailabilityComponent", filePath: "libs/users/src/lib/find-availability-modal/user-availability.component.ts", lineNumber: 46 });
})();

// libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts
var _c0 = ["container"];
var _c1 = () => [];
function FindAvailabilityModalComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hr_r2 = ctx.$implicit;
    const \u0275$index_26_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", -ctx_r3.offset_x + "px");
    \u0275\u0275attribute("disabled", ctx_r3.today && ctx_r3.current_hour > \u0275$index_26_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, hr_r2, "haa"));
  }
}
function FindAvailabilityModalComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "a-user-avatar", 13);
    \u0275\u0275elementStart(2, "div", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function FindAvailabilityModalComponent_For_22_Template_button_click_4_listener() {
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
function FindAvailabilityModalComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 35);
  }
  if (rf & 2) {
    const \u0275$index_60_r7 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", -(ctx_r3.offset_x + 1) + "px");
    \u0275\u0275attribute("disabled", ctx_r3.today && ctx_r3.current_hour > \u0275$index_60_r7);
  }
}
function FindAvailabilityModalComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
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
function FindAvailabilityModalComponent_For_42_Template(rf, ctx) {
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
var _FindAvailabilityModalComponent = class _FindAvailabilityModalComponent extends AsyncHandler {
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
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this._renderer = inject(Renderer2);
    this._dialog_ref = inject(MatDialogRef);
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
    this._container_el = viewChild.required("container");
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
      const el = this._container_el().nativeElement.querySelector(`[hour="${date.getHours()}"]`);
      if (el) {
        const rect = this._container_el().nativeElement.getBoundingClientRect();
        const el_rect = el.getBoundingClientRect();
        this._container_el().nativeElement.scrollTo(el_rect.left - 128 - rect.left, 0);
      }
      this.onScroll();
    }, 300);
  }
  onScroll() {
    this.offset_x = this._container_el().nativeElement.scrollLeft;
    this.offset_y = this._container_el().nativeElement.scrollTop;
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
};
_FindAvailabilityModalComponent.\u0275fac = function FindAvailabilityModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FindAvailabilityModalComponent)();
};
_FindAvailabilityModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindAvailabilityModalComponent, selectors: [["find-availability-modal"]], viewQuery: function FindAvailabilityModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._container_el, _c0, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 52, vars: 33, consts: [["container", ""], [1, "flex", "flex-col", "space-y-2", "p-2"], [1, "flex", "h-14", "w-full", "items-center", "justify-between", "space-x-2", "rounded", "border-none", "bg-base-200", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-[calc(100vh-9rem)]", "flex-col", "overflow-hidden", "rounded", "border", "border-base-300", "sm:h-[65vh]"], [1, "flex", "w-full", "flex-col", "space-y-2", "p-2", "sm:flex-row", "sm:space-x-2", "sm:space-y-0"], [1, "max-h-[3.25rem]", "flex-1", 3, "ngModelChange", "ngModel"], [1, "relative", "grid", "h-1/2", "w-full", "max-w-[100vw]", "flex-1", "divide-x", "divide-y", "divide-base-200", "overflow-hidden", "border-t", "border-base-200", "sm:max-w-[80vw]"], ["times", "", 1, "col-start-2", "flex", "h-10", "overflow-hidden", "border-l", "border-base-200"], ["hour", "", 1, "relative", "h-10", "min-w-[5rem]", "border-r", "border-base-200", "p-2", "text-sm", 3, "left"], ["users", "", 1, "row-start-2", "w-24", "overflow-hidden"], ["host", "", 1, "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "border-base-200", "py-2"], [1, "text-2xl", 3, "user"], [1, "max-w-full", "overflow-hidden", "break-words", "px-2", "text-center", "text-xs"], ["person", "", 1, "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "border-base-200", "py-2", 3, "top"], ["blocks", "", 1, "relative", "row-start-2", "overflow-hidden"], ["fixed", "", 1, "absolute", "inset-0", "flex", "overflow-hidden"], ["divider", "", 1, "relative", "h-full", "min-w-[5rem]", "border-l", "border-base-200", 3, "left"], ["selection", "", 1, "absolute", "inset-y-0", "z-20", "cursor-grab", "!border-x-2", "!border-info", "active:cursor-grabbing", 3, "mousedown", "touchstart"], [1, "absolute", "inset-0", "bg-info", "opacity-30"], ["handle", "", 1, "absolute", "-left-px", "top-1/2", "h-3", "w-3", "-translate-x-1/2", "-translate-y-1/2", "rounded-full", "bg-info"], ["handle", "", 1, "absolute", "-right-px", "top-1/2", "h-3", "w-3", "-translate-y-1/2", "translate-x-1/2", "rounded-full", "bg-info", "hover:h-4", "hover:w-4", "active:bg-secondary", 3, "mousedown", "touchstart"], [1, "absolute", "left-1/2", "top-2", "-translate-x-1/2", "whitespace-nowrap", "rounded", "border", "border-base-200", "bg-base-100", "p-2", "text-xs", "shadow"], [1, "absolute", "left-1/2", "top-12", "-translate-x-1/2", "whitespace-nowrap", "rounded", "border", "border-base-200", "bg-base-100", "p-2", "text-xs", "shadow"], ["scroll", "", 1, "absolute", "inset-0", "overflow-auto", 3, "scroll"], [1, "pointer-events-none", 3, "user", "date", "availability"], ["btn", "", "matRipple", "", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], ["hour", "", 1, "relative", "h-10", "min-w-[5rem]", "border-r", "border-base-200", "p-2", "text-sm"], ["person", "", 1, "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "border-base-200", "py-2"], [1, "max-w-full", "break-words", "px-2", "text-center", "text-xs"], ["icon", "", 1, "absolute", "-left-1", "-top-1", 3, "click"], ["divider", "", 1, "relative", "h-full", "min-w-[5rem]", "border-l", "border-base-200"]], template: function FindAvailabilityModalComponent_Template(rf, ctx) {
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
    \u0275\u0275repeaterCreate(14, FindAvailabilityModalComponent_For_15_Template, 4, 7, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11)(17, "div", 12);
    \u0275\u0275element(18, "a-user-avatar", 13);
    \u0275\u0275elementStart(19, "div", 14);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(21, FindAvailabilityModalComponent_For_22_Template, 7, 4, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 16)(25, "div", 17);
    \u0275\u0275repeaterCreate(26, FindAvailabilityModalComponent_For_27_Template, 1, 3, "div", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(28, "div", 19);
    \u0275\u0275listener("mousedown", function FindAvailabilityModalComponent_Template_div_mousedown_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMovePeriod($event));
    })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMovePeriod($event));
    });
    \u0275\u0275element(29, "div", 20)(30, "div", 21);
    \u0275\u0275elementStart(31, "div", 22);
    \u0275\u0275listener("mousedown", function FindAvailabilityModalComponent_Template_div_mousedown_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMoveDuration($event));
    })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMoveDuration($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 23);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "duration");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, FindAvailabilityModalComponent_Conditional_35_Template, 3, 4, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 25, 0);
    \u0275\u0275listener("scroll", function FindAvailabilityModalComponent_Template_div_scroll_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onScroll());
    });
    \u0275\u0275element(38, "user-availability-list", 26);
    \u0275\u0275pipe(39, "async");
    \u0275\u0275pipe(40, "async");
    \u0275\u0275repeaterCreate(41, FindAvailabilityModalComponent_For_42_Template, 3, 8, "user-availability-list", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(43, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "footer", 2)(45, "button", 27)(46, "div", 28)(47, "icon", 29);
    \u0275\u0275text(48, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 30);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 18, "CALENDAR_EVENT.FIND_AVAILABILITY"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.date);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.user);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("top", -ctx.offset_y + "px");
    \u0275\u0275advance();
    \u0275\u0275property("user", ctx.host);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.host.name || ctx.host.email, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(23, 20, ctx.users));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("left", "calc(" + ctx.selection_left + "rem - " + ctx.offset_x + "px)")("width", ctx.selection_width + "rem");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 22, ctx.duration), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.move_time ? 35 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("user", ctx.host)("date", ctx.date)("availability", \u0275\u0275pipeBind1(39, 24, ctx.availability) ? \u0275\u0275pipeBind1(40, 26, ctx.availability)[ctx.host.email] : \u0275\u0275pureFunction0(32, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(43, 28, ctx.users));
    \u0275\u0275advance(4);
    \u0275\u0275property("mat-dialog-close", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 30, "COMMON.BACK_TO_FORM"), " ");
  }
}, dependencies: [
  CommonModule,
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
var FindAvailabilityModalComponent = _FindAvailabilityModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FindAvailabilityModalComponent, [{
    type: Component,
    args: [{ selector: "find-availability-modal", template: `
        <div class="flex flex-col space-y-2 p-2">
            <header
                class="flex h-14 w-full items-center justify-between space-x-2 rounded border-none bg-base-200 p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'CALENDAR_EVENT.FIND_AVAILABILITY' | translate }}
                </h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="flex h-[calc(100vh-9rem)] flex-col overflow-hidden rounded border border-base-300 sm:h-[65vh]"
            >
                <div
                    class="flex w-full flex-col space-y-2 p-2 sm:flex-row sm:space-x-2 sm:space-y-0"
                >
                    <a-date-field
                        [(ngModel)]="date"
                        class="max-h-[3.25rem] flex-1"
                        (ngModelChange)="
                            on_change.next(on_change.getValue() + 1)
                        "
                    ></a-date-field>
                    <a-user-search-field
                        [(ngModel)]="user"
                        (ngModelChange)="addUser($event)"
                        class="max-h-[3.25rem] flex-1"
                    ></a-user-search-field>
                </div>
                <div
                    class="relative grid h-1/2 w-full max-w-[100vw] flex-1 divide-x divide-y divide-base-200 overflow-hidden border-t border-base-200 sm:max-w-[80vw]"
                >
                    <div
                        times
                        class="col-start-2 flex h-10 overflow-hidden border-l border-base-200"
                    >
                        @for (hr of hours; track hr; let hour = $index) {
                            <div
                                hour
                                class="relative h-10 min-w-[5rem] border-r border-base-200 p-2 text-sm"
                                [attr.disabled]="today && current_hour > hour"
                                [style.left]="-offset_x + 'px'"
                            >
                                <span>{{ hr | date: 'haa' }}</span>
                            </div>
                        }
                    </div>
                    <div users class="row-start-2 w-24 overflow-hidden">
                        <div
                            host
                            class="relative flex h-32 w-24 flex-col items-center justify-center border-b border-base-200 py-2"
                            [style.top]="-offset_y + 'px'"
                        >
                            <a-user-avatar
                                class="text-2xl"
                                [user]="host"
                            ></a-user-avatar>
                            <div
                                class="max-w-full overflow-hidden break-words px-2 text-center text-xs"
                            >
                                {{ host.name || host.email }}
                            </div>
                        </div>
                        @for (user of users | async; track user) {
                            <div
                                person
                                class="relative flex h-32 w-24 flex-col items-center justify-center border-b border-base-200 py-2"
                                [style.top]="-offset_y + 'px'"
                            >
                                <a-user-avatar
                                    class="text-2xl"
                                    [user]="user"
                                ></a-user-avatar>
                                <div
                                    class="max-w-full break-words px-2 text-center text-xs"
                                >
                                    {{ user.name || host.email }}
                                </div>
                                <button
                                    icon
                                    class="absolute -left-1 -top-1"
                                    (click)="removeUser(user)"
                                >
                                    <icon>close</icon>
                                </button>
                            </div>
                        }
                    </div>
                    <div blocks class="relative row-start-2 overflow-hidden">
                        <div
                            fixed
                            class="absolute inset-0 flex overflow-hidden"
                        >
                            @for (_ of hours; track _; let h = $index) {
                                <div
                                    divider
                                    class="relative h-full min-w-[5rem] border-l border-base-200"
                                    [style.left]="-(offset_x + 1) + 'px'"
                                    [attr.disabled]="today && current_hour > h"
                                ></div>
                            }
                            <div
                                selection
                                class="absolute inset-y-0 z-20 cursor-grab !border-x-2 !border-info active:cursor-grabbing"
                                [style.left]="
                                    'calc(' +
                                    selection_left +
                                    'rem - ' +
                                    offset_x +
                                    'px)'
                                "
                                [style.width]="selection_width + 'rem'"
                                (mousedown)="startMovePeriod($event)"
                                (touchstart)="startMovePeriod($event)"
                            >
                                <div
                                    class="absolute inset-0 bg-info opacity-30"
                                ></div>
                                <div
                                    handle
                                    class="absolute -left-px top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-info"
                                ></div>
                                <div
                                    handle
                                    class="absolute -right-px top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-info hover:h-4 hover:w-4 active:bg-secondary"
                                    (mousedown)="startMoveDuration($event)"
                                    (touchstart)="startMoveDuration($event)"
                                ></div>
                                <div
                                    class="absolute left-1/2 top-2 -translate-x-1/2 whitespace-nowrap rounded border border-base-200 bg-base-100 p-2 text-xs shadow"
                                >
                                    {{ duration | duration }}
                                </div>
                                @if (move_time) {
                                    <div
                                        class="absolute left-1/2 top-12 -translate-x-1/2 whitespace-nowrap rounded border border-base-200 bg-base-100 p-2 text-xs shadow"
                                    >
                                        {{ date | date: 'shortTime' }}
                                    </div>
                                }
                            </div>
                        </div>
                        <div
                            scroll
                            #container
                            class="absolute inset-0 overflow-auto"
                            (scroll)="onScroll()"
                        >
                            <user-availability-list
                                class="pointer-events-none"
                                [user]="host"
                                [date]="date"
                                [availability]="
                                    (availability | async)
                                        ? (availability | async)[host.email]
                                        : []
                                "
                            ></user-availability-list>
                            @for (user of users | async; track user) {
                                <user-availability-list
                                    class="pointer-events-none"
                                    [user]="user"
                                    [date]="date"
                                    [availability]="
                                        (availability | async)
                                            ? (availability | async)[
                                                  user.email.toLowerCase()
                                              ]
                                            : []
                                    "
                                ></user-availability-list>
                            }
                        </div>
                    </div>
                </div>
            </main>
            <footer
                class="flex h-14 w-full items-center justify-between space-x-2 rounded border-none bg-base-200 p-2"
            >
                <button
                    btn
                    matRipple
                    [mat-dialog-close]="true"
                    class="clear text-secondary"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">arrow_back</icon>
                        <div class="mr-1 underline">
                            {{ 'COMMON.BACK_TO_FORM' | translate }}
                        </div>
                    </div>
                </button>
            </footer>
        </div>
    `, imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      UserAvailabilityComponent,
      UserAvatarComponent,
      UserSearchFieldComponent,
      DateFieldComponent,
      IconComponent,
      MatDialogModule,
      DurationPipe,
      FormsModule
    ], styles: ["/* angular:styles/component:css;76b970ea1fbd22f261c4ae1d7362a2a4be952fddab9217461619407a5e9eb6ef;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts */\n.grid {\n  grid-template-columns: 6rem 1fr;\n  grid-template-rows: 2.5rem minmax(0, 1fr);\n}\n[disabled=true],\n[disabled=true] [header] {\n  background: var(--b3) !important;\n  pointer-events: none;\n}\n[disabled=true] > * {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=find-availability-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindAvailabilityModalComponent, { className: "FindAvailabilityModalComponent", filePath: "libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts", lineNumber: 286 });
})();

// libs/users/src/lib/select-user-modal.component.ts
function SelectUserModalComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function SelectUserModalComponent_For_16_Template_button_click_0_listener() {
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
function SelectUserModalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
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
var _SelectUserModalComponent = class _SelectUserModalComponent {
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this.search = new BehaviorSubject("");
    this.users = this.search.pipe(debounceTime(300), switchMap((s) => Tc({ q: s }).pipe(map((o) => o.data), catchError(() => of([])))), startWith([]));
  }
  select(user) {
    this._dialog_ref.close(user);
  }
};
_SelectUserModalComponent.\u0275fac = function SelectUserModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectUserModalComponent)();
};
_SelectUserModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectUserModalComponent, selectors: [["select-user-modal"]], decls: 20, vars: 12, consts: [[1, "w-[28rem]"], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[60vh]", "overflow-auto", "px-2", "pb-2"], ["appearance", "outline", 1, "no-subscript", "sticky", "top-0", "z-10", "mb-2", "w-full", "bg-base-100"], ["matPrefix", "", 1, "relative", "-left-2", "text-2xl"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "relative", "z-0", "w-full", "space-y-2"], ["matRipple", "", 1, "w-full", "rounded", "border", "border-base-300", "p-2", "text-left", "hover:bg-base-200"], [1, "flex", "h-32", "w-full", "items-center", "justify-center", "p-8", "opacity-30"], ["matRipple", "", 1, "w-full", "rounded", "border", "border-base-300", "p-2", "text-left", "hover:bg-base-200", 3, "click"], [1, "text-xs", "opacity-30"]], template: function SelectUserModalComponent_Template(rf, ctx) {
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
    \u0275\u0275repeaterCreate(15, SelectUserModalComponent_For_16_Template, 5, 2, "button", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275conditionalCreate(18, SelectUserModalComponent_Conditional_18_Template, 3, 3, "div", 10);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "COMMON.SELECT_USER_TITLE"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 6, "COMMON.SELECT_USER_SEARCH"))("ngModel", ctx.search.value);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(17, 8, ctx.users));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(19, 10, ctx.users).length ? 18 : -1);
  }
}, dependencies: [
  CommonModule,
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
var SelectUserModalComponent = _SelectUserModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectUserModalComponent, [{
    type: Component,
    args: [{ selector: `select-user-modal`, template: ` <div class="w-[28rem]">
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'COMMON.SELECT_USER_TITLE' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[60vh] overflow-auto px-2 pb-2">
            <mat-form-field
                class="no-subscript sticky top-0 z-10 mb-2 w-full bg-base-100"
                appearance="outline"
            >
                <icon class="relative -left-2 text-2xl" matPrefix>search</icon>
                <input
                    matInput
                    [placeholder]="'COMMON.SELECT_USER_SEARCH' | translate"
                    [ngModel]="search.value"
                    (ngModelChange)="search.next($event)"
                />
            </mat-form-field>
            <div class="relative z-0 w-full space-y-2">
                @for (user of users | async; track user) {
                    <button
                        class="w-full rounded border border-base-300 p-2 text-left hover:bg-base-200"
                        matRipple
                        (click)="select(user)"
                    >
                        <div>{{ user.name }}</div>
                        <div class="text-xs opacity-30">{{ user.email }}</div>
                    </button>
                }
                @if (!(users | async).length) {
                    <div
                        class="flex h-32 w-full items-center justify-center p-8 opacity-30"
                    >
                        {{
                            (search.value
                                ? 'COMMON.SELECT_USER_EMPTY_MATCHES'
                                : 'COMMON.SELECT_USER_EMPTY'
                            ) | translate
                        }}
                    </div>
                }
            </div>
        </main>
    </div>`, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatDialogModule,
      FormsModule,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectUserModalComponent, { className: "SelectUserModalComponent", filePath: "libs/users/src/lib/select-user-modal.component.ts", lineNumber: 85 });
})();

// libs/users/src/lib/user.pipe.ts
var USER_LIST = [];
var EMPTY_USER = new User();
var _UserPipe = class _UserPipe {
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
};
_UserPipe.\u0275fac = function UserPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserPipe)();
};
_UserPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "user", type: _UserPipe, pure: true });
var UserPipe = _UserPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPipe, [{
    type: Pipe,
    args: [{
      name: "user"
    }]
  }], null, null);
})();

// libs/users/src/lib/users.module.ts
var STANDALONE_COMPONENTS = [
  NewUserModalComponent,
  UserFormComponent,
  WFHSettingsModalComponent,
  UserPipe,
  FindAvailabilityModalComponent,
  UserAvailabilityComponent,
  SelectUserModalComponent
];
var _SharedUsersModule = class _SharedUsersModule {
};
_SharedUsersModule.\u0275fac = function SharedUsersModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SharedUsersModule)();
};
_SharedUsersModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedUsersModule });
_SharedUsersModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  NewUserModalComponent,
  UserFormComponent,
  WFHSettingsModalComponent,
  FindAvailabilityModalComponent,
  UserAvailabilityComponent,
  SelectUserModalComponent
] });
var SharedUsersModule = _SharedUsersModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedUsersModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [...STANDALONE_COMPONENTS],
      exports: [...STANDALONE_COMPONENTS]
    }]
  }], null, null);
})();

export {
  FindAvailabilityModalComponent
};
//# sourceMappingURL=chunk-PUXNSRDK.js.map
