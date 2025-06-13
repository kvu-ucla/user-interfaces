import "./chunk-GPXENRZA.js";
import {
  ScheduleStateService
} from "./chunk-2SGWX24Q.js";
import {
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  Booking,
  BookingCardComponent,
  BookingFormService,
  CalendarEvent,
  CommonModule,
  DatePipe,
  DefaultValueAccessor,
  Ea,
  EventCardComponent,
  EventFormService,
  ExploreSpacesService,
  FAV_DESK_KEY,
  FAV_LOCKER_KEY,
  FAV_PARKING_KEY,
  FooterMenuComponent,
  FormsModule,
  IconComponent,
  MatDialog,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatProgressSpinner,
  MatRipple,
  MatTooltip,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSwitch,
  NgSwitchCase,
  OrganisationService,
  Rc,
  Router,
  RouterLink,
  RouterModule,
  SettingsService,
  SharedComponentModule,
  SlicePipe,
  SpacePipe,
  StaffUser,
  Tc,
  TopbarComponent,
  TranslatePipe,
  UserAvatarComponent,
  addMinutes,
  bt,
  catchError,
  checkinBooking,
  combineLatest,
  currentUser,
  debounceTime,
  du,
  endOfDay,
  filter,
  filterResourcesFromRules,
  first,
  format,
  getUnixTime,
  hu,
  i18n,
  isSameDay,
  map,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  queryCalendarAvailability,
  queryCalendars,
  queryEvents,
  querySpaceFreeBusy,
  removeBooking,
  removeEvent,
  requestSpacesForZone,
  searchStaff,
  shareReplay,
  startOfDay,
  startOfMinute,
  switchMap,
  tap,
  unique,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdeclareLet,
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
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
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
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JIZRN2WB.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// libs/calendar/src/lib/calendar.service.ts
var CalendarService = class _CalendarService extends AsyncHandler {
  constructor(_org, _settings) {
    super();
    this._org = _org;
    this._settings = _settings;
    this._calendars = new BehaviorSubject([]);
    this.calendar_list = queryCalendars().pipe(tap((l) => this._calendars.next(l)), shareReplay(1));
    this.query = () => queryCalendars();
    this.freeBusy = (q) => querySpaceFreeBusy(q, this._org);
    this.availability = (q) => queryCalendarAvailability(q);
    this._org.initialised.pipe(first((_) => _)).subscribe(() => this.init());
  }
  init() {
    return __async(this, null, function* () {
      if (this._settings.get("app.events.use_bookings"))
        return;
      this._initialised.next(true);
    });
  }
  get calendars() {
    return this._calendars.getValue();
  }
  /** Get Free busy for the selected day
   * @param calendars User calendar
   * @param date Selected day
   */
  getFreeBusyDate(date, calendars) {
    return querySpaceFreeBusy({
      period_start: getUnixTime(startOfDay(date)),
      period_end: getUnixTime(endOfDay(date)),
      calendars
    }, this._org);
  }
  /** Check rooms availability */
  checkSpacesAvailability(system_ids, period_start, period_end, old_booking) {
    return __async(this, null, function* () {
      const result = yield queryCalendarAvailability({
        period_start,
        period_end,
        system_ids: system_ids.join(",")
      }).toPromise();
      const start = new Date(old_booking?.date).valueOf();
      const end = addMinutes(start, old_booking?.duration).valueOf();
      const available = result.every((i) => {
        const availability = i.availability;
        if (old_booking && i.id === old_booking.system?.email) {
          const index = availability.findIndex((block) => {
            return block.date >= start && addMinutes(block.date, block.duration).valueOf() <= end;
          });
          if (index !== -1) {
            availability.splice(index, 1);
          }
        }
        return !availability.length;
      });
      return !!available;
    });
  }
  static {
    this.\u0275fac = function CalendarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CalendarService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarService, factory: _CalendarService.\u0275fac, providedIn: "root" });
  }
};

// apps/workplace/src/app/landing/landing-state.service.ts
var LandingStateService = class _LandingStateService extends AsyncHandler {
  constructor(_calendar, _schedule, _org, _settings) {
    super();
    this._calendar = _calendar;
    this._schedule = _schedule;
    this._org = _org;
    this._settings = _settings;
    this._options = new BehaviorSubject({});
    this._loading = new BehaviorSubject("");
    this._loading_spaces = new BehaviorSubject(false);
    this._contacts = new BehaviorSubject([]);
    this._level_occupancy = new BehaviorSubject([]);
    this._booking_rules = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => hu(bld.id, `room_booking_rules`).pipe(catchError(() => of({ details: [] })))), map((_) => _?.details instanceof Array ? _.details : []), shareReplay(1));
    this._space_list = this._org.active_building.pipe(filter((_) => !!_), switchMap((bld) => requestSpacesForZone(bld.id)), map((_) => _.filter((s) => s.bookable)), shareReplay(1));
    this._filtered_spaces = combineLatest([
      this._space_list,
      this._booking_rules
    ]).pipe(map(([list, rules]) => filterResourcesFromRules(list, {
      date: Date.now(),
      duration: 60,
      host: currentUser(),
      resource: null
    }, rules)));
    this._space_statuses = this._filtered_spaces.pipe(tap((_) => this.unsubWith("bind:")), switchMap((list) => combineLatest((list || []).map((_) => {
      const binding = Ea(_.id, "Bookings").binding("status");
      const obs = binding.listen();
      this.subscription(`bind:${_.id}`, binding.bind());
      return obs;
    }))), shareReplay(1));
    this.free_space_list = combineLatest([
      this._space_list,
      this._space_statuses
    ]).pipe(map(([list, statuses]) => (list || []).filter((_, idx) => statuses[idx] === "free").sort((a, b) => a.capacity - b.capacity)), shareReplay(1));
    this.upcoming_events = this._schedule.filtered_bookings.pipe(map((_) => _.filter((i) => i.state !== "done" && isSameDay(i.date, Date.now()))));
    this.contacts = this._contacts.asObservable();
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
    this.loading_spaces = this._loading_spaces.asObservable();
    this.search_fn = (q) => this._settings.get("app.basic_user_search") || this._settings.get("app.colleagues_require_auth") !== false ? Tc({ q, authority_id: bt()?.id }).pipe(map(({ data }) => data.map((_) => new StaffUser(_)))) : searchStaff(q);
    this.search_results = this._options.pipe(debounceTime(500), switchMap(({ search }) => {
      this._loading.next("Loading users...");
      return search ? this.search_fn(search).pipe(catchError(() => of([]))) : of([]);
    }), tap(() => this._loading.next("")), shareReplay(1));
    this.level_occupancy = this._level_occupancy.asObservable();
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.updateContacts();
      this.subscription("building", this._org.active_building.pipe(filter((bld) => !!bld)).subscribe(() => {
        this.updateBuildingMetadata();
        this.updateOccupancy({});
      }));
      const mod = this._org.module("area_management", "AreaManagement");
      if (!mod)
        return;
      const binding = mod.binding("overview");
      binding.listen().subscribe((d) => this.updateOccupancy(d || {}));
      binding.bind();
    });
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  pollUpcomingEvents(delay = 2 * 60 * 1e3) {
    this._schedule.setDate(Date.now());
    this._schedule.triggerPoll();
    return this._schedule.startPolling(delay);
  }
  stopPollingUpcomingEvents() {
    this._schedule.stopPolling();
  }
  refreshUpcomingEvents() {
    this._schedule.setDate(Date.now());
    this._schedule.triggerPoll();
  }
  updateContacts() {
    return __async(this, null, function* () {
      const metadata = yield hu(currentUser().id, "contacts").toPromise();
      const list = metadata.details instanceof Array ? metadata.details : [];
      const users = yield Promise.all(list.map((_) => Rc(_.email).pipe(catchError(() => of(_))).toPromise()));
      this._contacts.next(users.map((i) => new StaffUser(i)));
    });
  }
  addContact(user) {
    return __async(this, null, function* () {
      let users = [...this._contacts.getValue()];
      users.push(user);
      users = unique(users, "email");
      yield du(currentUser().id, {
        name: "contacts",
        description: "Contacts for the User",
        details: users
      }).toPromise();
      this.updateContacts();
    });
  }
  removeContact(user) {
    return __async(this, null, function* () {
      let users = [...this._contacts.getValue()];
      users = users.filter((u) => u.email !== user.email);
      yield du(currentUser().id, {
        name: "contacts",
        description: "Contacts for the User",
        details: users
      }).toPromise();
      this.updateContacts();
    });
  }
  updateOccupancy(map2) {
    return __async(this, null, function* () {
      const levels = this._org.levelsForBuilding() || [];
      levels.sort((a, b) => map2[a.id]?.recommendation - map2[b.id]?.recommendation);
      this._level_occupancy.next(levels);
    });
  }
  updateBuildingMetadata() {
    return __async(this, null, function* () {
      this._level_occupancy.next([]);
      const occupancy = this._org.binding("occupancy");
      if (!occupancy)
        return;
      const { sys, module, index } = occupancy;
      const mod = Ea(sys, module, index);
      if (!mod)
        return;
      if (this._occupancy_binding) {
        this._occupancy_binding.unbind();
      }
      this._occupancy_binding = mod.binding("occupancy");
      this._occupancy_binding.bind();
      this.subscription("occupancy_binding", this._occupancy_binding.listen().subscribe((value) => {
        const levels = Object.keys(value).map((key) => __spreadValues({
          id: key
        }, value[key]));
        levels.sort((a, b) => a.recommendation_factor - b.recommendation_factor);
        this._level_occupancy.next(levels.map((i) => this._org.levelWithID([i.id])));
      }));
    });
  }
  static {
    this.\u0275fac = function LandingStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingStateService)(\u0275\u0275inject(CalendarService), \u0275\u0275inject(ScheduleStateService), \u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LandingStateService, factory: _LandingStateService.\u0275fac, providedIn: "root" });
  }
};

// apps/workplace/src/app/landing/landing-availability.component.ts
var _c0 = () => ["/explore"];
var _c1 = (a0) => ({ level: a0 });
function LandingAvailabilityComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.WORKPLACE.AVAILABLE_LIST_HEADER"), " ");
  }
}
function LandingAvailabilityComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.WORKPLACE.AVAILABLE_LIST_SPACES"), " ");
  }
}
function LandingAvailabilityComponent_div_3_button_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
  }
  if (rf & 2) {
    const lvl_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", lvl_r1 == null ? null : lvl_r1.images[0]);
  }
}
function LandingAvailabilityComponent_div_3_button_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
  }
}
function LandingAvailabilityComponent_div_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 12)(1, "div", 13);
    \u0275\u0275template(2, LandingAvailabilityComponent_div_3_button_1_img_2_Template, 1, 1, "img", 14)(3, LandingAvailabilityComponent_div_3_button_1_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "div", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 17)(9, "icon", 18);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const lvl_r1 = ctx.$implicit;
    const placeholder_r2 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0))("queryParams", \u0275\u0275pureFunction1(7, _c1, lvl_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", lvl_r1 == null ? null : lvl_r1.images == null ? null : lvl_r1.images.length)("ngIfElse", placeholder_r2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", lvl_r1.display_name || lvl_r1.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_10_0 = ctx_r2.building(lvl_r1.parent_id)) == null ? null : tmp_10_0.display_name) || ((tmp_10_0 = ctx_r2.building(lvl_r1.parent_id)) == null ? null : tmp_10_0.name));
  }
}
function LandingAvailabilityComponent_div_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.WORKPLACE.AVAILABLE_LIST_SPACES_EMPTY"), " ");
  }
}
function LandingAvailabilityComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, LandingAvailabilityComponent_div_3_button_1_Template, 13, 9, "button", 10);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, LandingAvailabilityComponent_div_3_span_3_Template, 3, 3, "span", 11);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mb-4", !ctx_r2.hide_rooms);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 4, ctx_r2.levels_free));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(4, 6, ctx_r2.levels_free).length);
  }
}
function LandingAvailabilityComponent_div_4_mat_spinner_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 23);
  }
}
function LandingAvailabilityComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LandingAvailabilityComponent_div_4_mat_spinner_4_Template, 1, 0, "mat-spinner", 22);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.WORKPLACE.AVAILABLE_LIST_ROOMS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(5, 4, ctx_r2.loading_spaces));
  }
}
function LandingAvailabilityComponent_div_5_button_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
    \u0275\u0275pipe(1, "space");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    let tmp_5_0;
    const space_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", (tmp_5_0 = \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, space_r5.id))) == null ? null : tmp_5_0.images[0]);
  }
}
function LandingAvailabilityComponent_div_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function LandingAvailabilityComponent_div_5_button_1_Template_button_click_0_listener() {
      const space_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.book(space_r5));
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275template(2, LandingAvailabilityComponent_div_5_button_1_img_2_Template, 3, 5, "img", 14);
    \u0275\u0275pipe(3, "space");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "div", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 17)(9, "icon", 18);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_7_0;
    const space_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    const space_placeholder_r6 = \u0275\u0275reference(7);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_4_0 = \u0275\u0275pipeBind1(4, 6, \u0275\u0275pipeBind1(3, 4, space_r5.id))) == null ? null : tmp_4_0.images == null ? null : tmp_4_0.images.length)("ngIfElse", space_placeholder_r6);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", space_r5.display_name || space_r5.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_7_0 = ctx_r2.level(space_r5.zones)) == null ? null : tmp_7_0.display_name) || ((tmp_7_0 = ctx_r2.level(space_r5.zones)) == null ? null : tmp_7_0.name));
  }
}
function LandingAvailabilityComponent_div_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.WORKPLACE.AVAILABLE_LIST_ROOMS_EMPTY"), " ");
  }
}
function LandingAvailabilityComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, LandingAvailabilityComponent_div_5_button_1_Template, 13, 8, "button", 24);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, LandingAvailabilityComponent_div_5_span_3_Template, 3, 3, "span", 11);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 3, ctx_r2.space_list))("ngForTrackBy", ctx_r2.trackBySpaceId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_4_0 = \u0275\u0275pipeBind1(4, 5, ctx_r2.space_list)) == null ? null : tmp_4_0.length));
  }
}
function LandingAvailabilityComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
}
var LandingAvailabilityComponent = class _LandingAvailabilityComponent {
  trackBySpaceId(index, space) {
    return space.id;
  }
  level(zones) {
    return this._org.levelWithID(zones);
  }
  building(id) {
    return this._org.buildings.find((bld) => bld.id === id);
  }
  get hide_spaces() {
    return this._settings.get("app.hide_landing_spaces");
  }
  get hide_rooms() {
    return this._settings.get("app.hide_landing_rooms");
  }
  constructor(_state, _org, _settings, _explore) {
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this._explore = _explore;
    this.space_list = this._state.free_space_list;
    this.loading_spaces = this._state.loading_spaces;
    this.levels_free = this._state.level_occupancy;
    this.book = (s) => this._explore.bookSpace(s, true);
  }
  static {
    this.\u0275fac = function LandingAvailabilityComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingAvailabilityComponent)(\u0275\u0275directiveInject(LandingStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ExploreSpacesService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingAvailabilityComponent, selectors: [["landing-availability"]], standalone: false, features: [\u0275\u0275ProvidersFeature([ExploreSpacesService])], decls: 8, vars: 5, consts: [["space_placeholder", ""], ["placeholder", ""], [1, "py-2"], ["class", "mb-2 px-4 font-medium sm:mb-4 sm:text-lg", 4, "ngIf"], ["class", "flex items-center space-x-2 px-4 text-sm sm:text-base", 4, "ngIf"], ["class", "mx-4 flex w-[calc(100%-2rem)] snap-x items-center space-x-2 overflow-auto py-2", 3, "mb-4", 4, "ngIf"], ["class", "mx-4 flex w-[calc(100%-2rem)] snap-x items-center space-x-2 overflow-auto py-2", 4, "ngIf"], [1, "mb-2", "px-4", "font-medium", "sm:mb-4", "sm:text-lg"], [1, "flex", "items-center", "space-x-2", "px-4", "text-sm", "sm:text-base"], [1, "mx-4", "flex", "w-[calc(100%-2rem)]", "snap-x", "items-center", "space-x-2", "overflow-auto", "py-2"], ["name", "landing-view-space", "matRipple", "", "class", "flex w-64 snap-start items-center space-x-4 rounded border border-base-200 bg-base-100 p-2 shadow", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], ["class", "mb-2 text-sm opacity-60", 4, "ngIf"], ["name", "landing-view-space", "matRipple", "", 1, "flex", "w-64", "snap-start", "items-center", "space-x-4", "rounded", "border", "border-base-200", "bg-base-100", "p-2", "shadow", 3, "routerLink", "queryParams"], [1, "flex", "h-16", "w-16", "min-w-[4rem]", "items-center", "justify-center", "overflow-hidden", "rounded", "bg-base-200"], ["auth", "", "class", "h-full w-full object-cover object-center", 3, "source", 4, "ngIf", "ngIfElse"], [1, "text-left"], [1, "max-w-full", "truncate", "px-1.5", "font-medium"], [1, "flex", "max-w-full", "items-center", "truncate", "text-sm", "opacity-60"], [1, "text-blue-500", "text-lg"], ["auth", "", 1, "h-full", "w-full", "object-cover", "object-center", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"], [1, "mb-2", "text-sm", "opacity-60"], ["diameter", "24", 4, "ngIf"], ["diameter", "24"], ["name", "landing-book-room", "matRipple", "", "class", "flex w-64 snap-start items-center space-x-4 rounded border border-base-200 bg-base-100 p-2 shadow", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["name", "landing-book-room", "matRipple", "", 1, "flex", "w-64", "snap-start", "items-center", "space-x-4", "rounded", "border", "border-base-200", "bg-base-100", "p-2", "shadow", 3, "click"], ["src", "assets/icons/room-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"]], template: function LandingAvailabilityComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275template(1, LandingAvailabilityComponent_div_1_Template, 3, 3, "div", 3)(2, LandingAvailabilityComponent_div_2_Template, 4, 3, "div", 4)(3, LandingAvailabilityComponent_div_3_Template, 5, 8, "div", 5)(4, LandingAvailabilityComponent_div_4_Template, 6, 6, "div", 4)(5, LandingAvailabilityComponent_div_5_Template, 5, 7, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, LandingAvailabilityComponent_ng_template_6_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.hide_rooms || !ctx.hide_spaces);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.hide_spaces);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.hide_spaces);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.hide_rooms);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.hide_rooms);
      }
    }, dependencies: [NgForOf, NgIf, MatRipple, MatProgressSpinner, IconComponent, AuthenticatedImageDirective, RouterLink, AsyncPipe, TranslatePipe, SpacePipe], styles: ["\n\n*[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=landing-availability.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingAvailabilityComponent, { className: "LandingAvailabilityComponent", filePath: "apps/workplace/src/app/landing/landing-availability.component.ts", lineNumber: 162 });
})();

// apps/workplace/src/app/landing/landing-colleagues.component.ts
var _c02 = ["search_input"];
var _c12 = (a0) => ({ count: a0 });
var _c2 = (a0) => ({ text: a0 });
function LandingColleaguesComponent_ng_container_6_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 28);
  }
  if (rf & 2) {
    const user_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("bg-error", user_r3.location === "aol" || user_r3.location === "ooo")("bg-success", user_r3.location === "wfo")("bg-warning", user_r3.location === "wfh")("bg-neutral", !user_r3.location);
    \u0275\u0275property("matTooltip", user_r3.location_name);
  }
}
function LandingColleaguesComponent_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275element(2, "a-user-avatar", 16);
    \u0275\u0275template(3, LandingColleaguesComponent_ng_container_6_div_1_div_3_Template, 1, 9, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18)(5, "div", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 22)(12, "icon");
    \u0275\u0275text(13, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-menu", 23, 4)(16, "button", 24);
    \u0275\u0275listener("click", function LandingColleaguesComponent_ng_container_6_div_1_Template_button_click_16_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.newMeeting(user_r3));
    });
    \u0275\u0275elementStart(17, "div", 25)(18, "icon", 26);
    \u0275\u0275text(19, "today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 27);
    \u0275\u0275listener("click", function LandingColleaguesComponent_ng_container_6_div_1_Template_button_click_23_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeUser(user_r3));
    });
    \u0275\u0275elementStart(24, "div", 25)(25, "icon", 26);
    \u0275\u0275text(26, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const menu_r5 = \u0275\u0275reference(15);
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !user_r3.outsideHours());
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", user_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r3.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", user_r3.organisation);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r3.organisation, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r3.location_name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r5);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 10, "APP.WORKPLACE.COLLEAGUE_NEW_MEETING"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 12, "APP.WORKPLACE.COLLEAGUE_REMOVE"), " ");
  }
}
function LandingColleaguesComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LandingColleaguesComponent_ng_container_6_div_1_Template, 30, 14, "div", 13);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r3.contacts));
  }
}
function LandingColleaguesComponent_div_19_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function LandingColleaguesComponent_div_19_ng_container_1_button_1_Template_button_click_0_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.addUser(user_r7));
    });
    \u0275\u0275elementStart(1, "div", 32);
    \u0275\u0275element(2, "a-user-avatar", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "div", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r7.organisation || user_r7.email, " ");
  }
}
function LandingColleaguesComponent_div_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LandingColleaguesComponent_div_19_ng_container_1_button_1_Template, 8, 3, "button", 30);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r3.search_results));
  }
}
function LandingColleaguesComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, LandingColleaguesComponent_div_19_ng_container_1_Template, 3, 3, "ng-container", 7);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext();
    const search_empty_r8 = \u0275\u0275reference(24);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = \u0275\u0275pipeBind1(2, 2, ctx_r3.search_results)) == null ? null : tmp_5_0.length)("ngIfElse", search_empty_r8);
  }
}
function LandingColleaguesComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "img", 36);
    \u0275\u0275elementStart(2, "p", 37);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.WORKPLACE.COLLEAGUES_EMPTY"), " ");
  }
}
function LandingColleaguesComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "p", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", !((tmp_5_0 = \u0275\u0275pipeBind1(3, 1, ctx_r3.options)) == null ? null : tmp_5_0.search) ? \u0275\u0275pipeBind1(4, 3, "APP.WORKPLACE.COLLEAGUE_SEARCH_EMPTY") : \u0275\u0275pipeBind2(6, 7, "APP.WORKPLACE.COLLEAGUE_SEARCH_EMPTY", \u0275\u0275pureFunction1(10, _c2, (tmp_5_0 = \u0275\u0275pipeBind1(5, 5, ctx_r3.options)) == null ? null : tmp_5_0.search)), " ");
  }
}
function LandingColleaguesComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "mat-spinner", 38);
    \u0275\u0275elementStart(2, "p", 37);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.WORKPLACE.COLLEAGUE_SEARCH_LOADING"), " ");
  }
}
var LandingColleaguesComponent = class _LandingColleaguesComponent extends AsyncHandler {
  constructor(_state, _settings, _event_form, _router) {
    super();
    this._state = _state;
    this._settings = _settings;
    this._event_form = _event_form;
    this._router = _router;
    this.show_search = false;
    this.contacts = this._state.contacts;
    this.search_results = combineLatest([
      this._state.search_results,
      this._state.contacts
    ]).pipe(map(([list, contacts]) => list.filter((_) => !contacts.find((user) => user.id === _.id || user.email === _.email))));
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.addUser = (u) => __async(this, null, function* () {
      yield this._state.addContact(u);
      notifySuccess(i18n("APP.WORKPLACE.COLLEAGUE_ADDED", { name: u.name }));
      this.show_search = false;
    });
    this.removeUser = (u) => __async(this, null, function* () {
      yield this._state.removeContact(u);
      notifySuccess(i18n("APP.WORKPLACE.COLLEAGUE_REMOVED", { name: u.name }));
    });
    this.updateSearch = (s) => this._state.setOptions({ search: s });
  }
  newMeeting(user) {
    this._event_form.newForm();
    this._event_form.form.patchValue({ attendees: [user] });
    if (this._settings.get("app.new_features")) {
      this._router.navigate(["/book", "meeting"]);
    } else {
      this._router.navigate(["/book", "spaces"]);
    }
  }
  openSearch() {
    this.updateSearch("");
    this.show_search = true;
    this.timeout("open", () => this._input_el.nativeElement.focus(), 100);
  }
  static {
    this.\u0275fac = function LandingColleaguesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingColleaguesComponent)(\u0275\u0275directiveInject(LandingStateService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingColleaguesComponent, selectors: [["landing-colleagues"]], viewQuery: function LandingColleaguesComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input_el = _t.first);
      }
    }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 27, vars: 27, consts: [["search_input", ""], ["empty_state", ""], ["search_empty", ""], ["load_state", ""], ["menu", "matMenu"], [1, "mx-2", "flex", "items-center", "justify-between", "rounded", "bg-base-200", "p-2", "text-sm"], [1, "h-1/2", "w-full", "flex-1", "space-y-4", "overflow-auto", "pt-4"], [4, "ngIf", "ngIfElse"], ["btn", "", "name", "open-colleague-search", "matRipple", "", 1, "inverse", "m-2", "w-[calc(100%-1rem)]", 3, "click"], ["search", "", 1, "absolute", "inset-x-2", "bottom-16", "top-2", "flex", "flex-col", "overflow-hidden", "rounded", "border", "border-base-200", "bg-base-100"], [1, "w-full", "border-b", "border-base-200", "p-2", 3, "ngModelChange", "ngModel", "placeholder"], ["icon", "", "name", "close-colleague-search", 1, "absolute", "right-0", "top-0", 3, "click"], ["class", "flex h-1/2 flex-1 flex-col space-y-2 overflow-auto", 4, "ngIf", "ngIfElse"], ["class", "relative flex items-center space-x-2 px-2", "user", "", 4, "ngFor", "ngForOf"], ["user", "", 1, "relative", "flex", "items-center", "space-x-2", "px-2"], [1, "relative", "text-xl"], [3, "user"], ["class", "absolute bottom-1 right-1 h-3 w-3 rounded-full border border-white", 3, "bg-error", "bg-success", "bg-warning", "bg-neutral", "matTooltip", 4, "ngIf"], [1, "w-1/2", "flex-1", "leading-tight"], [1, "truncate", 3, "matTooltip"], [1, "truncate", "text-sm", 3, "matTooltip"], [1, "truncate", "text-xs", "opacity-60"], ["icon", "", "name", "colleague-more", 1, "!rounded", "bg-base-200", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["mat-menu-item", "", "name", "meeting-with-colleague", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["name", "remove-colleague", "mat-menu-item", "", 3, "click"], [1, "absolute", "bottom-1", "right-1", "h-3", "w-3", "rounded-full", "border", "border-white", 3, "matTooltip"], [1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto"], ["matRipple", "", "name", "add-colleague", "class", "flex min-h-12 w-full items-center space-x-2 p-1 text-left", 3, "click", 4, "ngFor", "ngForOf"], ["matRipple", "", "name", "add-colleague", 1, "flex", "min-h-12", "w-full", "items-center", "space-x-2", "p-1", "text-left", 3, "click"], [1, "relative", "text-base"], [1, "flex-1", "leading-tight"], [1, "truncate"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["src", "assets/icons/no-contacts.svg"], [1, "text-center", "text-sm", "opacity-60"], ["diameter", "32"]], template: function LandingColleaguesComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "h2");
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "async");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 6);
        \u0275\u0275template(6, LandingColleaguesComponent_ng_container_6_Template, 3, 3, "ng-container", 7);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 8);
        \u0275\u0275listener("click", function LandingColleaguesComponent_Template_button_click_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openSearch());
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9)(12, "input", 10, 0);
        \u0275\u0275pipe(14, "async");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275listener("ngModelChange", function LandingColleaguesComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateSearch($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 11);
        \u0275\u0275listener("click", function LandingColleaguesComponent_Template_button_click_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.show_search = false);
        });
        \u0275\u0275elementStart(17, "icon");
        \u0275\u0275text(18, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(19, LandingColleaguesComponent_div_19_Template, 3, 4, "div", 12);
        \u0275\u0275pipe(20, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, LandingColleaguesComponent_ng_template_21_Template, 5, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(23, LandingColleaguesComponent_ng_template_23_Template, 7, 12, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(25, LandingColleaguesComponent_ng_template_25_Template, 5, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        let tmp_9_0;
        const empty_state_r9 = \u0275\u0275reference(22);
        const load_state_r10 = \u0275\u0275reference(26);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 12, "APP.WORKPLACE.COLLEAGUES_COUNT", \u0275\u0275pureFunction1(25, _c12, ((tmp_4_0 = \u0275\u0275pipeBind1(3, 10, ctx.contacts)) == null ? null : tmp_4_0.length) || 0)), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", (tmp_5_0 = \u0275\u0275pipeBind1(7, 15, ctx.contacts)) == null ? null : tmp_5_0.length)("ngIfElse", empty_state_r9);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 17, "APP.WORKPLACE.COLLEAGUE_ADD"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("hidden", !ctx.show_search);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", (tmp_9_0 = \u0275\u0275pipeBind1(14, 19, ctx.options)) == null ? null : tmp_9_0.search)("placeholder", \u0275\u0275pipeBind1(15, 21, "FORM.USER_SEARCH"));
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(20, 23, ctx.loading))("ngIfElse", load_state_r10);
      }
    }, dependencies: [NgForOf, NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, MatProgressSpinner, MatTooltip, IconComponent, UserAvatarComponent, DefaultValueAccessor, NgControlStatus, NgModel, AsyncPipe, TranslatePipe], styles: ["\n\n[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=landing-colleagues.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingColleaguesComponent, { className: "LandingColleaguesComponent", filePath: "apps/workplace/src/app/landing/landing-colleagues.component.ts", lineNumber: 220 });
})();

// apps/workplace/src/app/landing/landing-favourites.component.ts
var _c03 = (a0) => ({ count: a0 });
function LandingFavouritesComponent_ng_container_6_ng_container_1_div_4_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const space_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function LandingFavouritesComponent_ng_container_6_ng_container_1_div_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
  }
}
function LandingFavouritesComponent_ng_container_6_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275template(3, LandingFavouritesComponent_ng_container_6_ng_container_1_div_4_img_3_Template, 1, 1, "img", 13)(4, LandingFavouritesComponent_ng_container_6_ng_container_1_div_4_ng_template_4_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14)(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16)(10, "icon", 17);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 19)(15, "icon", 17);
    \u0275\u0275text(16, " people ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "button", 20);
    \u0275\u0275listener("click", function LandingFavouritesComponent_ng_container_6_ng_container_1_div_4_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.newSpaceMeeting(item_r3));
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 21)(24, "icon");
    \u0275\u0275text(25, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-menu", 22, 2)(28, "button", 23);
    \u0275\u0275listener("click", function LandingFavouritesComponent_ng_container_6_ng_container_1_div_4_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeFavourite("space", item_r3));
    });
    \u0275\u0275elementStart(29, "div", 24)(30, "icon", 25);
    \u0275\u0275text(31, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const space_placeholder_r5 = \u0275\u0275reference(5);
    const menu_r6 = \u0275\u0275reference(27);
    const item_r3 = \u0275\u0275nextContext().$implicit;
    const space_r2 = \u0275\u0275readContextLet(1);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", space_r2.images.length)("ngIfElse", space_placeholder_r5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", space_r2.display_name || space_r2.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (tmp_11_0 = ctx_r3.level(space_r2)) == null ? null : tmp_11_0.display_name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 9, "APP.WORKPLACE.CAPACITY", \u0275\u0275pureFunction1(16, _c03, space_r2.capacity || 2)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isClosed(item_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 12, "COMMON.BOOK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r6);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 14, "APP.WORKPLACE.FAVOURITES_REMOVE"), " ");
  }
}
function LandingFavouritesComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275declareLet(1);
    \u0275\u0275pipe(2, "space");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, LandingFavouritesComponent_ng_container_6_ng_container_1_div_4_Template, 35, 18, "div", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    const space_r7 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(3, 3, \u0275\u0275pipeBind1(2, 1, item_r3)));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", space_r7 == null ? null : space_r7.id);
  }
}
function LandingFavouritesComponent_ng_container_6_div_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r9 == null ? null : item_r9.images[0]);
  }
}
function LandingFavouritesComponent_ng_container_6_div_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 32);
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", "assets/icons/" + (item_r9.type === "desk" ? "desk" : "car") + "-placeholder.svg", \u0275\u0275sanitizeUrl);
  }
}
function LandingFavouritesComponent_ng_container_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275template(3, LandingFavouritesComponent_ng_container_6_div_2_img_3_Template, 1, 1, "img", 13)(4, LandingFavouritesComponent_ng_container_6_div_2_ng_template_4_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14)(7, "div", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16)(10, "icon", 17);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "button", 29);
    \u0275\u0275listener("click", function LandingFavouritesComponent_ng_container_6_div_2_Template_button_click_14_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.newBooking(item_r9.type, item_r9));
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 30)(18, "icon");
    \u0275\u0275text(19, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-menu", 22, 2)(22, "button", 23);
    \u0275\u0275listener("click", function LandingFavouritesComponent_ng_container_6_div_2_Template_button_click_22_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeFavourite(item_r9.type, item_r9.id));
    });
    \u0275\u0275elementStart(23, "div", 24)(24, "icon", 25);
    \u0275\u0275text(25, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 31);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const asset_placeholder_r10 = \u0275\u0275reference(5);
    const menu_r11 = \u0275\u0275reference(21);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", item_r9 == null ? null : item_r9.images == null ? null : item_r9.images.length)("ngIfElse", asset_placeholder_r10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (item_r9 == null ? null : item_r9.display_name) || (item_r9 == null ? null : item_r9.name) || (item_r9 == null ? null : item_r9.id), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", item_r9 == null ? null : item_r9.zone == null ? null : item_r9.zone.display_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 7, "COMMON.BOOK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r11);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 9, "APP.WORKPLACE.FAVOURITES_REMOVE"), " ");
  }
}
function LandingFavouritesComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LandingFavouritesComponent_ng_container_6_ng_container_1_Template, 5, 6, "ng-container", 7)(2, LandingFavouritesComponent_ng_container_6_div_2_Template, 29, 11, "div", 8);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.spaces);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(3, 2, ctx_r3.assets));
  }
}
function LandingFavouritesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "img", 34);
    \u0275\u0275elementStart(2, "p", 35);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.WORKPLACE.FAVOURITES_EMPTY"), " ");
  }
}
var EMPTY = [];
var LandingFavouritesComponent = class _LandingFavouritesComponent extends AsyncHandler {
  get spaces() {
    return this._settings.get("favourite_spaces") || EMPTY;
  }
  get desks() {
    return this._settings.get(FAV_DESK_KEY) || EMPTY;
  }
  get parking_spaces() {
    return this._settings.get(FAV_PARKING_KEY) || EMPTY;
  }
  get locker_banks() {
    return this._settings.get(FAV_LOCKER_KEY) || EMPTY;
  }
  level(space) {
    return this._org.levelWithID(space?.zones || []);
  }
  isClosed(id) {
    if (!this._room_alerts)
      return false;
    return this._room_alerts[id] ? this._room_alerts[id][0] === "closed" : false;
  }
  constructor(_org, _settings, _space_pipe, _event_form, _booking_form, _router) {
    super();
    this._org = _org;
    this._settings = _settings;
    this._space_pipe = _space_pipe;
    this._event_form = _event_form;
    this._booking_form = _booking_form;
    this._router = _router;
    this._change = new BehaviorSubject(0);
    this.assets = combineLatest([
      this._booking_form.loadResourceList("desks"),
      this._booking_form.loadResourceList("parking-spaces"),
      this._change
    ]).pipe(map(([desks, parking]) => {
      return [
        ...desks.filter(({ id }) => this.desks.includes(id)).map((_) => __spreadProps(__spreadValues({}, _), { type: "desk" })),
        ...parking.filter(({ id }) => this.parking_spaces.includes(id)).map((_) => __spreadProps(__spreadValues({}, _), { type: "parking" }))
      ];
    }), tap((_) => console.log(_)), shareReplay(1));
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this._room_alerts = yield hu(this._org.organisation.id, "room_alerts").pipe(map((v) => v.details)).toPromise();
    });
  }
  removeFavourite(type, id) {
    let fav_list = this.spaces;
    let key = "favourite_spaces";
    switch (type) {
      case "desk":
        fav_list = this.desks;
        key = FAV_DESK_KEY;
        break;
      case "parking":
        fav_list = this.parking_spaces;
        key = FAV_PARKING_KEY;
        break;
      case "locker":
        fav_list = this.locker_banks;
        key = FAV_LOCKER_KEY;
        break;
    }
    this._settings.saveUserSetting(key, fav_list.filter((_) => _ !== id));
    this._change.next(Date.now());
  }
  newSpaceMeeting(id) {
    return __async(this, null, function* () {
      const space = yield this._space_pipe.transform(id);
      if (!space)
        return;
      this._event_form.newForm();
      this._event_form.form.patchValue({ resources: [space] });
      if (this._settings.get("app.new_features")) {
        this._router.navigate(["/book", "meeting"]);
      } else {
        this._router.navigate(["/book", "spaces"]);
      }
    });
  }
  newBooking(type, item) {
    return __async(this, null, function* () {
      if (!item)
        return;
      if (this._settings.get("app.new_features")) {
        this._router.navigate([
          "/book",
          type === "desk" ? "desk" : type === "locker" ? "locker" : "parking"
        ]);
      } else {
        this._router.navigate([
          "/book",
          type === "desk" ? "desks" : type === "locker" ? "locker" : "parking"
        ]);
      }
      setTimeout(() => {
        this._booking_form.newForm(type);
        this._booking_form.setOptions({ type });
        this._booking_form.form.patchValue({
          resources: [item],
          asset_id: item.id,
          booking_type: type
        });
      }, 100);
    });
  }
  static {
    this.\u0275fac = function LandingFavouritesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingFavouritesComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(SpacePipe), \u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingFavouritesComponent, selectors: [["landing-favourites"]], standalone: false, features: [\u0275\u0275ProvidersFeature([SpacePipe]), \u0275\u0275InheritDefinitionFeature], decls: 10, vars: 12, consts: [["empty_state", ""], ["space_placeholder", ""], ["menu", "matMenu"], ["asset_placeholder", ""], [1, "mx-2", "flex", "items-center", "justify-between", "rounded", "bg-base-200", "p-2", "text-sm"], [1, "h-1/2", "w-full", "flex-1", "space-y-2", "divide-y", "divide-base-200", "overflow-auto", "pt-4"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["class", "relative mx-2 flex flex-col items-center space-y-2 pt-2", "item", "", 4, "ngFor", "ngForOf"], ["class", "relative mx-2 flex flex-col items-center space-y-2 pt-2", "item", "", 4, "ngIf"], ["item", "", 1, "relative", "mx-2", "flex", "flex-col", "items-center", "space-y-2", "pt-2"], [1, "relative", "flex", "w-full", "items-center", "space-x-2"], [1, "relative", "flex", "h-16", "w-16", "items-center", "justify-center", "overflow-hidden", "rounded", "bg-base-300"], ["auth", "", "class", "absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "flex", "h-16", "w-1/2", "flex-1", "flex-col", "justify-center", "space-y-1"], [1, "w-full", "truncate", "pr-12"], [1, "flex", "items-center", "space-x-1", "text-xs", "opacity-60"], [1, "text-blue-500"], [1, "w-1/2", "flex-1", "truncate"], [1, "flex", "items-center", "space-x-2", "truncate", "text-xs", "opacity-60"], ["btn", "", "name", "book-favourite", "matRipple", "", 1, "inverse", "w-full", 3, "click", "disabled"], ["icon", "", "name", "favourite-more", 1, "absolute", "right-0", "top-2", "!m-0", "!rounded", "bg-base-200", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["name", "landing-remove-favourite", "mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl", "text-error"], ["auth", "", 1, "absolute", "left-1/2", "top-1/2", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", "object-cover", 3, "source"], ["src", "assets/icons/room-placeholder.svg", 1, "m-auto"], [1, "truncate"], ["btn", "", "name", "book-favourite", "matRipple", "", 1, "inverse", "w-full", 3, "click"], ["icon", "", "name", "favourite-more", 1, "top-22", "absolute", "right-0", "!m-0", "!rounded", "bg-base-200", 3, "matMenuTriggerFor"], [1, "pr-4"], [1, "m-auto", 3, "src"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["src", "assets/icons/no-favourites.svg"], [1, "text-center", "text-sm", "opacity-60"]], template: function LandingFavouritesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4)(1, "h2");
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "async");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275template(6, LandingFavouritesComponent_ng_container_6_Template, 4, 4, "ng-container", 6);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, LandingFavouritesComponent_ng_template_8_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        const empty_state_r12 = \u0275\u0275reference(9);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, "APP.WORKPLACE.FAVOURITES_COUNT", \u0275\u0275pureFunction1(10, _c03, ((ctx.spaces == null ? null : ctx.spaces.length) || 0) + ((tmp_1_0 = \u0275\u0275pipeBind1(3, 3, ctx.assets)) == null ? null : tmp_1_0.length))), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", (ctx.spaces == null ? null : ctx.spaces.length) || ((tmp_2_0 = \u0275\u0275pipeBind1(7, 8, ctx.assets)) == null ? null : tmp_2_0.length))("ngIfElse", empty_state_r12);
      }
    }, dependencies: [NgForOf, NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, AuthenticatedImageDirective, AsyncPipe, TranslatePipe, SpacePipe], styles: ["\n\n[user][_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=landing-favourites.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingFavouritesComponent, { className: "LandingFavouritesComponent", filePath: "apps/workplace/src/app/landing/landing-favourites.component.ts", lineNumber: 286 });
})();

// apps/workplace/src/app/landing/landing-quick-links.component.ts
var _c04 = () => ["/book", "meeting"];
var _c13 = () => ["/book", "desk"];
var _c22 = () => ["/book", "parking"];
var _c3 = () => ["/book", "locker"];
function LandingQuickLinksComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3)(1, "div", 4);
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c04));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.QUICK_LINK_ROOMS"), " ");
  }
}
function LandingQuickLinksComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3)(1, "div", 4);
    \u0275\u0275element(2, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c13));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.QUICK_LINK_DESKS"), " ");
  }
}
function LandingQuickLinksComponent_a_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3)(1, "div", 4);
    \u0275\u0275element(2, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c22));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.QUICK_LINK_PARKING"), " ");
  }
}
function LandingQuickLinksComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3)(1, "div", 4);
    \u0275\u0275element(2, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.WORKPLACE.QUICK_LINK_LOCKERS"), " ");
  }
}
var LandingQuickLinksComponent = class _LandingQuickLinksComponent {
  get features() {
    return this._settings.get("app.features") || [];
  }
  constructor(_settings) {
    this._settings = _settings;
  }
  static {
    this.\u0275fac = function LandingQuickLinksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingQuickLinksComponent)(\u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingQuickLinksComponent, selectors: [["landing-quick-links"]], standalone: false, decls: 8, vars: 7, consts: [[1, "mb-2", "px-4", "font-medium", "sm:mb-4", "sm:text-lg"], [1, "mx-4", "mb-4", "flex", "w-[calc(100%-2rem)]", "snap-x", "space-x-2", "overflow-auto"], ["matRipple", "", "class", "flex w-64 min-w-64 snap-start items-center space-x-4 rounded border border-base-200 bg-base-100 p-2 shadow", 3, "routerLink", 4, "ngIf"], ["matRipple", "", 1, "flex", "w-64", "min-w-64", "snap-start", "items-center", "space-x-4", "rounded", "border", "border-base-200", "bg-base-100", "p-2", "shadow", 3, "routerLink"], [1, "flex", "h-16", "min-w-[4rem]", "items-center", "justify-center", "rounded", "bg-base-200"], ["src", "assets/icons/room-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"], [1, "text-xl"], ["src", "assets/icons/desk-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"], ["src", "assets/icons/car-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"], ["src", "assets/icons/locker-placeholder.svg", 1, "h-1/2", "w-1/2", "object-contain", "object-center"]], template: function LandingQuickLinksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275template(4, LandingQuickLinksComponent_a_4_Template, 6, 5, "a", 2)(5, LandingQuickLinksComponent_a_5_Template, 6, 5, "a", 2)(6, LandingQuickLinksComponent_a_6_Template, 6, 5, "a", 2)(7, LandingQuickLinksComponent_a_7_Template, 6, 5, "a", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "APP.WORKPLACE.QUICK_LINKS_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.features.includes("spaces"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.features.includes("desks"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.features.includes("parking"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.features.includes("parking"));
      }
    }, dependencies: [NgIf, MatRipple, RouterLink, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingQuickLinksComponent, { className: "LandingQuickLinksComponent", filePath: "apps/workplace/src/app/landing/landing-quick-links.component.ts", lineNumber: 90 });
})();

// apps/workplace/src/app/landing/landing-upcoming.component.ts
var _c05 = () => ["/your-bookings"];
function LandingUpcomingComponent_ng_container_12_ng_container_1_event_card_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-card", 12);
  }
  if (rf & 2) {
    const event_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("event", event_r1)("show_day", true)("edit_fn", ctx_r1.edit_fn)("remove_fn", ctx_r1.remove_fn);
  }
}
function LandingUpcomingComponent_ng_container_12_ng_container_1_booking_card_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "booking-card", 13);
  }
  if (rf & 2) {
    const event_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("booking", event_r1)("show_day", true)("edit_fn", ctx_r1.edit_booking_fn)("remove_fn", ctx_r1.remove_fn)("end_fn", ctx_r1.end_fn);
  }
}
function LandingUpcomingComponent_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0)(1, 9);
    \u0275\u0275template(2, LandingUpcomingComponent_ng_container_12_ng_container_1_event_card_2_Template, 1, 4, "event-card", 10)(3, LandingUpcomingComponent_ng_container_12_ng_container_1_booking_card_3_Template, 1, 5, "booking-card", 11);
    \u0275\u0275elementContainerEnd()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", ctx_r1.type(event_r1));
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "event");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "booking");
  }
}
function LandingUpcomingComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LandingUpcomingComponent_ng_container_12_ng_container_1_Template, 4, 3, "ng-container", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(3, 4, \u0275\u0275pipeBind1(2, 2, ctx_r1.upcoming_events), 0, 5))("ngForTrackBy", ctx_r1.trackByFn);
  }
}
function LandingUpcomingComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "img", 15);
    \u0275\u0275elementStart(2, "p", 16);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.WORKPLACE.UPCOMING_EMPTY"), " ");
  }
}
var LandingUpcomingComponent = class _LandingUpcomingComponent extends AsyncHandler {
  type(event) {
    return event instanceof Booking ? "booking" : "event";
  }
  constructor(_state, _event_form, _booking_form, _router, _dialog, _settings) {
    super();
    this._state = _state;
    this._event_form = _event_form;
    this._booking_form = _booking_form;
    this._router = _router;
    this._dialog = _dialog;
    this._settings = _settings;
    this.upcoming_events = this._state.upcoming_events;
    this.edit_fn = (i) => this.edit(i);
    this.edit_booking_fn = (i) => this.editBooking(i);
    this.remove_fn = (i, s) => this.remove(i, s);
    this.end_fn = (i) => this.end(i);
  }
  ngOnInit() {
    this.subscription("poll", this._state.pollUpcomingEvents());
  }
  trackByFn(_, item) {
    return item?.id;
  }
  edit(event) {
    return __async(this, null, function* () {
      console.log("Edit Event:", event);
      this._router.navigate(["/book", "meeting", "form"]);
      if (event.creator !== event.mailbox) {
        event = (yield queryEvents({
          period_start: event.event_start,
          period_end: event.event_end,
          ical_uid: event.ical_uid
        }).toPromise()).find((_) => _.ical_uid === event.ical_uid) || event;
      }
      setTimeout(() => this._event_form.newForm(event), 300);
    });
  }
  editBooking(event) {
    this._router.navigate(["/book", `${event.type}`]);
    this._booking_form.newForm(event.booking_type, event);
    setTimeout(() => {
      this._booking_form.form.patchValue({
        resources: [
          {
            id: event.asset_id,
            name: event.asset_name || event.description
          }
        ],
        asset_id: event.asset_id
      });
    }, 100);
  }
  remove(item, remove_series = false) {
    return __async(this, null, function* () {
      const time = `${format(item.date, "dd MMM yyyy h:mma")}`;
      const resource_name = item instanceof CalendarEvent ? item.space?.display_name : item.asset_name || item.asset_id;
      const resp = yield openConfirmModal({
        title: i18n("APP.WORKPLACE.SCHEDULE_REMOVE_TITLE"),
        content: i18n("APP.WORKPLACE.SCHEDULE_REMOVE_MSG", {
          name: resource_name,
          time
        }),
        icon: { content: "delete" }
      }, this._dialog);
      if (resp.reason !== "done")
        return;
      resp.loading(i18n("APP.WORKPLACE.SCHEDULE_REMOVE_LOADING"));
      yield (item instanceof CalendarEvent ? removeEvent : removeBooking)(item.id, {
        calendar: this._settings.get("app.events.use_bookings") ? null : currentUser()?.email,
        system_id: item.system?.id,
        instance: remove_series ? void 0 : !!item.instance,
        start_time: item.instance ? item.booking_start : void 0
      }).toPromise().catch((e) => {
        notifyError(i18n("APP.WORKPLACE.SCHEDULE_REMOVE_ERROR", { error: e }));
        resp.close();
        throw e;
      });
      notifySuccess(i18n("APP.WORKPLACE.SCHEDULE_REMOVE_SUCCESS"));
      this._state.refreshUpcomingEvents();
      this._dialog.closeAll();
    });
  }
  end(item) {
    return __async(this, null, function* () {
      const time = `${format(item.date, "dd MMM yyyy h:mma")}`;
      const resource_name = item.asset_name || item.asset_id;
      const resp = yield openConfirmModal({
        title: i18n("APP.WORKPLACE.SCHEDULE_END_TITLE"),
        content: i18n("APP.WORKPLACE.SCHEDULE_END_MSG", {
          name: resource_name,
          time
        }),
        icon: { content: "event_busy" }
      }, this._dialog);
      if (resp.reason !== "done")
        return;
      resp.loading(i18n("APP.WORKPLACE.SCHEDULE_END_LOADING"));
      yield checkinBooking(item.id, false).toPromise().catch((e) => {
        notifyError(i18n("APP.WORKPLACE.SCHEDULE_END_ERROR", { error: e }));
        resp.close();
        throw e;
      });
      notifySuccess(i18n("APP.WORKPLACE.SCHEDULE_END_SUCCESS"));
      this._state.refreshUpcomingEvents();
      this._dialog.closeAll();
    });
  }
  static {
    this.\u0275fac = function LandingUpcomingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingUpcomingComponent)(\u0275\u0275directiveInject(LandingStateService), \u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingUpcomingComponent, selectors: [["landing-upcoming"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 17, consts: [["empty_state", ""], [1, "py-2"], [1, "mb-2", "flex", "items-center", "justify-between", "px-4", "sm:mb-4"], [1, "font-medium", "sm:text-lg"], ["btn", "", "name", "upcoming-view-all", 1, "inverse", "hidden", "sm:flex", 3, "routerLink"], ["name", "upcoming-view-all-mobile", 1, "inverse", "text-blue-500", "relative", "top-8", "flex", "underline", "sm:hidden", 3, "routerLink"], [1, "space-y-4", "px-4"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngSwitch"], [3, "event", "show_day", "edit_fn", "remove_fn", 4, "ngSwitchCase"], [3, "booking", "show_day", "edit_fn", "remove_fn", "end_fn", 4, "ngSwitchCase"], [3, "event", "show_day", "edit_fn", "remove_fn"], [3, "booking", "show_day", "edit_fn", "remove_fn", "end_fn"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "p-8"], ["src", "assets/img/no-events.svg", 1, "mr-4"], [1, "opacity-30"]], template: function LandingUpcomingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "a", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6);
        \u0275\u0275template(12, LandingUpcomingComponent_ng_container_12_Template, 4, 8, "ng-container", 7);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, LandingUpcomingComponent_ng_template_14_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_6_0;
        const empty_state_r3 = \u0275\u0275reference(15);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.WORKPLACE.UPCOMING"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c05));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "APP.WORKPLACE.UPCOMING_VIEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c05));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "APP.WORKPLACE.UPCOMING_VIEW"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", (tmp_6_0 = \u0275\u0275pipeBind1(13, 13, ctx.upcoming_events)) == null ? null : tmp_6_0.length)("ngIfElse", empty_state_r3);
      }
    }, dependencies: [NgForOf, NgIf, NgSwitch, NgSwitchCase, EventCardComponent, BookingCardComponent, RouterLink, AsyncPipe, SlicePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingUpcomingComponent, { className: "LandingUpcomingComponent", filePath: "apps/workplace/src/app/landing/landing-upcoming.component.ts", lineNumber: 97 });
})();

// apps/workplace/src/app/landing/landing.component.ts
var _c06 = (a0) => ({ name: a0 });
function LandingComponent_topbar_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar", 13);
  }
}
function LandingComponent_div_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function LandingComponent_div_2_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.tab = "people");
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "icon");
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("inverse", ctx_r2.tab !== "people");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "APP.WORKPLACE.COLLEAGUES"), " ");
  }
}
function LandingComponent_div_2_landing_colleagues_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "landing-colleagues");
  }
}
function LandingComponent_div_2_landing_favourites_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "landing-favourites");
  }
}
function LandingComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275template(2, LandingComponent_div_2_button_2_Template, 7, 5, "button", 16);
    \u0275\u0275elementStart(3, "button", 17);
    \u0275\u0275listener("click", function LandingComponent_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tab = "fav");
    });
    \u0275\u0275elementStart(4, "div", 18)(5, "icon");
    \u0275\u0275text(6, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 20);
    \u0275\u0275template(11, LandingComponent_div_2_landing_colleagues_11_Template, 1, 0, "landing-colleagues", 11)(12, LandingComponent_div_2_landing_favourites_12_Template, 1, 0, "landing-favourites", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.hide_colleagues);
    \u0275\u0275advance();
    \u0275\u0275classProp("inverse", ctx_r2.tab !== "fav");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "COMMON.FAVOURITES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.tab === "people" && !ctx_r2.hide_colleagues);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tab === "fav" || ctx_r2.hide_colleagues);
  }
}
function LandingComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.building.address || ctx_r2.building.display_name || ctx_r2.building.name, " ");
  }
}
function LandingComponent_landing_quick_links_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "landing-quick-links");
  }
}
function LandingComponent_footer_menu_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer-menu");
  }
}
var LandingComponent = class _LandingComponent {
  get hide_nav() {
    return localStorage.getItem("PlaceOS.hide_nav") === "true";
  }
  get date() {
    return startOfMinute(this.time || Date.now());
  }
  get user() {
    return currentUser();
  }
  get building() {
    return this._org.building;
  }
  get hide_landing_sidebar() {
    return this._settings.get("app.hide_landing_sidebar");
  }
  get hide_colleagues() {
    return this._settings.get("app.hide_colleagues");
  }
  get show_quick_links() {
    return this._settings.get("app.show_quick_links");
  }
  constructor(_org, _settings) {
    this._org = _org;
    this._settings = _settings;
    this.tab = "people";
  }
  static {
    this.\u0275fac = function LandingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], standalone: false, decls: 20, vars: 15, consts: [["class", "z-10", 4, "ngIf"], [1, "flex", "h-1/2", "flex-1", "bg-base-200"], ["class", "relative hidden h-full w-[18rem] flex-col overflow-hidden border-r border-base-300 bg-base-100 sm:flex", 4, "ngIf"], [1, "z-0", "h-full", "w-1/2", "flex-1", "overflow-auto", "sm:px-4"], [1, "sticky", "top-0", "z-50", "mb-4", "flex", "items-center", "justify-between", "overflow-hidden", "bg-ternary", "px-4", "sm:rounded-b"], [1, ""], [1, "font-medium", "sm:text-xl"], ["date", "", 1, "text-sm", "sm:text-base"], ["class", "text-sm sm:text-base", 4, "ngIf"], [1, "h-32", "pt-4"], ["src", "assets/img/landing.svg"], [4, "ngIf"], [1, "mx-4", "mb-2", "h-px", "w-[calc(100%-2rem)]", "bg-base-200"], [1, "z-10"], [1, "relative", "hidden", "h-full", "w-[18rem]", "flex-col", "overflow-hidden", "border-r", "border-base-300", "bg-base-100", "sm:flex"], [1, "flex", "items-center", "space-x-2", "p-2"], ["btn", "", "matRipple", "", "class", "flex-1", 3, "inverse", "click", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "flex", "items-center", "space-x-2", "capitalize"], [1, "pr-2"], [1, "h-1/2", "w-full", "flex-1"], [1, "text-sm", "sm:text-base"]], template: function LandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, LandingComponent_topbar_0_Template, 1, 0, "topbar", 0);
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275template(2, LandingComponent_div_2_Template, 13, 8, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "header", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, LandingComponent_div_12_Template, 2, 1, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275element(14, "img", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(15, LandingComponent_landing_quick_links_15_Template, 1, 0, "landing-quick-links", 11);
        \u0275\u0275element(16, "landing-availability")(17, "div", 12)(18, "landing-upcoming");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(19, LandingComponent_footer_menu_19_Template, 1, 0, "footer-menu", 11);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.hide_nav);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.hide_landing_sidebar);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 7, "APP.WORKPLACE.WELCOME_MESSAGE", \u0275\u0275pureFunction1(13, _c06, ctx.user == null ? null : ctx.user.name)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 10, ctx.date, "fullDate"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.building == null ? null : ctx.building.address) || (ctx.building == null ? null : ctx.building.name));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.show_quick_links);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.hide_nav);
      }
    }, dependencies: [NgIf, TopbarComponent, FooterMenuComponent, MatRipple, IconComponent, LandingColleaguesComponent, LandingAvailabilityComponent, LandingUpcomingComponent, LandingFavouritesComponent, LandingQuickLinksComponent, DatePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 50%;\n}\n/*# sourceMappingURL=landing.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "apps/workplace/src/app/landing/landing.component.ts", lineNumber: 116 });
})();

// apps/workplace/src/app/landing/landing.module.ts
var ROUTES = [{ path: "", component: LandingComponent }];
var AppLandingModule = class _AppLandingModule {
  static {
    this.\u0275fac = function AppLandingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppLandingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppLandingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      SharedComponentModule,
      FormsModule,
      RouterModule.forChild(ROUTES)
    ] });
  }
};
export {
  AppLandingModule
};
//# sourceMappingURL=landing.module-MK5RHMWX.js.map
