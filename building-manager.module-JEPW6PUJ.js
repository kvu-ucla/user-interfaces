import {
  AppSettingsModalComponent,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  BookingPanelSettingsModalComponent,
  Clipboard,
  CommonModule,
  ConciergeSettingsFormModalComponent,
  DatePipe,
  DefaultValueAccessor,
  DurationFieldComponent,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  Lc,
  LevelPipe,
  MAT_DIALOG_DATA,
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatChipsModule,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
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
  NgModel,
  OrganisationService,
  Pe,
  RouterModule,
  SettingsService,
  SettingsToggleComponent,
  SharedSpacesModule,
  SharedUsersModule,
  SimpleTableComponent,
  TIMEZONES_IANA,
  TimeFieldComponent,
  TranslatePipe,
  UIModule,
  Validators,
  VisitorKioskSettingsFormModalComponent,
  WFHSettingsModalComponent,
  WorkplaceSettingsFormModalComponent,
  __async,
  __spreadProps,
  __spreadValues,
  bt,
  combineLatest,
  du,
  dump,
  ec,
  getInvalidFields,
  hu,
  i18n,
  jc,
  lastValueFrom,
  load,
  map,
  mn,
  nc,
  nextValueFrom,
  notifyError,
  notifySuccess,
  openConfirmModal,
  rc,
  set,
  setDay,
  setHours,
  setMinutes,
  startOfDay,
  startOfMinute,
  xe,
  zc,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵconditional,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-I7B6MMYP.js";

// apps/concierge/src/app/building-manager/auto-release-settings-modal.component.ts
var _forTrack0 = ($index, $item) => $item.date;
var _forTrack1 = ($index, $item) => $item.i;
function AutoReleaseSettingsModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "icon", 7);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AutoReleaseSettingsModalComponent_main_5_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.AUTO_RELEASE_DEFAULT_HOURS_EMPTY"), " ");
  }
}
function AutoReleaseSettingsModalComponent_main_5_Conditional_25_For_1_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(2, 3, block_r3.start, "shortTime"), " - ", \u0275\u0275pipeBind2(3, 6, block_r3.end, "shortTime"), " | ", block_r3.location, " ");
  }
}
function AutoReleaseSettingsModalComponent_main_5_Conditional_25_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, AutoReleaseSettingsModalComponent_main_5_Conditional_25_For_1_Conditional_0_For_6_Template, 4, 9, "div", 27, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pref_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 1, pref_r4.date, "EEEE"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(pref_r4.blocks);
  }
}
function AutoReleaseSettingsModalComponent_main_5_Conditional_25_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoReleaseSettingsModalComponent_main_5_Conditional_25_For_1_Conditional_0_Template, 7, 4, "div", 24);
  }
  if (rf & 2) {
    const pref_r4 = ctx.$implicit;
    \u0275\u0275conditional(pref_r4.blocks.length ? 0 : -1);
  }
}
function AutoReleaseSettingsModalComponent_main_5_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AutoReleaseSettingsModalComponent_main_5_Conditional_25_For_1_Template, 1, 1, null, null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.default_work_preferences);
  }
}
function AutoReleaseSettingsModalComponent_main_5_For_48_Conditional_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "a-duration-field", 11);
    \u0275\u0275twoWayListener("ngModelChange", function AutoReleaseSettingsModalComponent_main_5_For_48_Conditional_0_div_3_Template_a_duration_field_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const name_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.settings[name_r6 + "_time_before"], $event) || (ctx_r1.settings[name_r6 + "_time_before"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a-duration-field", 11);
    \u0275\u0275twoWayListener("ngModelChange", function AutoReleaseSettingsModalComponent_main_5_For_48_Conditional_0_div_3_Template_a_duration_field_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const name_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.settings[name_r6 + "_time_after"], $event) || (ctx_r1.settings[name_r6 + "_time_after"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const name_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("min", -15)("max", 60)("step", 5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings[name_r6 + "_time_before"]);
    \u0275\u0275advance();
    \u0275\u0275property("min", 0)("max", 60)("step", 5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings[name_r6 + "_time_after"]);
  }
}
function AutoReleaseSettingsModalComponent_main_5_For_48_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "settings-toggle", 29);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function AutoReleaseSettingsModalComponent_main_5_For_48_Conditional_0_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const name_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCustom(name_r6, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AutoReleaseSettingsModalComponent_main_5_For_48_Conditional_0_div_3_Template, 3, 8, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const name_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 3, "APP.CONCIERGE.AUTO_RELEASE_" + name_r6.toUpperCase()))("ngModel", ctx_r1.settings.custom == null ? null : ctx_r1.settings.custom.includes(name_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.settings.custom == null ? null : ctx_r1.settings.custom.includes(name_r6));
  }
}
function AutoReleaseSettingsModalComponent_main_5_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoReleaseSettingsModalComponent_main_5_For_48_Conditional_0_Template, 4, 5, "div", 28);
  }
  if (rf & 2) {
    const name_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.settings.resources.includes(name_r6) ? 0 : -1);
  }
}
function AutoReleaseSettingsModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 8)(1, "div", 9)(2, "div", 10)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a-duration-field", 11);
    \u0275\u0275twoWayListener("ngModelChange", function AutoReleaseSettingsModalComponent_main_5_Template_a_duration_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.time_before, $event) || (ctx_r1.settings.time_before = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 10)(8, "label");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a-duration-field", 11);
    \u0275\u0275twoWayListener("ngModelChange", function AutoReleaseSettingsModalComponent_main_5_Template_a_duration_field_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.time_after, $event) || (ctx_r1.settings.time_after = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "div", 10)(14, "label");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a-time-field", 13);
    \u0275\u0275listener("ngModelChange", function AutoReleaseSettingsModalComponent_main_5_Template_a_time_field_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStartHour($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "settings-toggle", 14);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AutoReleaseSettingsModalComponent_main_5_Template_settings_toggle_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.release_outside_hours, $event) || (ctx_r1.settings.release_outside_hours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "label");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 15);
    \u0275\u0275template(24, AutoReleaseSettingsModalComponent_main_5_Conditional_24_Template, 3, 3, "div", 16)(25, AutoReleaseSettingsModalComponent_main_5_Conditional_25_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 17);
    \u0275\u0275listener("click", function AutoReleaseSettingsModalComponent_main_5_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDefaultWorkHourPreferences());
    });
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "label");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-form-field", 18)(33, "mat-select", 19);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AutoReleaseSettingsModalComponent_main_5_Template_mat_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.resources, $event) || (ctx_r1.settings.resources = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(35, "mat-option", 20);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "mat-option", 21);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-option", 22);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-option", 23);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(47, AutoReleaseSettingsModalComponent_main_5_For_48_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 25, "APP.CONCIERGE.AUTO_RELEASE_NOTIFY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", -15)("max", 60)("step", 5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.time_before);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 27, "APP.CONCIERGE.AUTO_RELEASE_CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("max", 60)("step", 5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.time_after);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 29, "APP.CONCIERGE.AUTO_RELEASE_ALL_DAY_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("no_past_times", false)("ngModel", ctx_r1.start_hour);
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(19, 31, "APP.CONCIERGE.AUTO_RELEASE_OUTSIDE_HOURS"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.release_outside_hours);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 33, "APP.CONCIERGE.AUTO_RELEASE_DEFAULT_HOURS"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!(ctx_r1.settings.default_work_preferences == null ? null : ctx_r1.settings.default_work_preferences.length) ? 24 : 25);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 35, "APP.CONCIERGE.AUTO_RELEASE_DEFAULT_HOURS_SET"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 37, "APP.CONCIERGE.AUTO_RELEASE_TYPES"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.resources);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(34, 39, "APP.CONCIERGE.AUTO_RELEASE_TYPES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 41, "RESOURCE.DESKS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 43, "RESOURCE.VISITORS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 45, "RESOURCE.PARKING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 47, "RESOURCE.LOCKERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.types);
  }
}
function AutoReleaseSettingsModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 32)(1, "button", 33);
    \u0275\u0275listener("click", function AutoReleaseSettingsModalComponent_footer_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
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
function AutoReleaseSettingsModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 34);
    \u0275\u0275element(1, "mat-spinner", 35);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading);
  }
}
var AutoReleaseSettingsModalComponent = class _AutoReleaseSettingsModalComponent {
  get start_hour() {
    return startOfMinute(set(Date.now(), {
      hours: Math.floor(this.settings.all_day_start || 8),
      minutes: Math.floor((this.settings.all_day_start || 0) * 60) % 60
    })).valueOf();
  }
  get default_work_preferences() {
    return (this.settings.default_work_preferences || []).map((pref) => ({
      date: startOfDay(setDay(Date.now(), pref.day_of_week)).valueOf(),
      blocks: pref.blocks.map((block, idx) => ({
        i: idx,
        start: startOfMinute(setHours(setMinutes(Date.now(), Math.floor(block.start_time * 60) % 60), block.start_time)),
        end: startOfMinute(setHours(setMinutes(Date.now(), Math.floor(block.end_time * 60) % 60), block.end_time)),
        location: block.location ? i18n(`COMMON.${block.location.toUpperCase()}`) : ""
      }))
    }));
  }
  constructor(_id, _dialog, _dialog_ref, _settings) {
    this._id = _id;
    this._dialog = _dialog;
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this.types = ["desk", "parking", "locker", "visitor"];
    this.loading = "";
    this.id = this._id;
    this.settings = {
      custom: []
    };
    this.setStartHour = (t) => {
      const d = new Date(t);
      this.settings.all_day_start = d.getHours() + d.getMinutes() / 60;
    };
  }
  ngOnInit() {
    "".toUpperCase;
    this.loadSettings(this.id);
  }
  toggleCustom(name, state = true) {
    if (!this.settings.custom)
      this.settings.custom = [];
    this.settings.custom = this.settings.custom.filter((_) => _ != name);
    if (state) {
      this.settings.custom.push(name);
      this.settings[name + "_time_before"] = this.settings.time_before;
      this.settings[name + "_time_after"] = this.settings.time_after;
    } else {
      delete this.settings[name + "_time_before"];
      delete this.settings[name + "_time_after"];
    }
  }
  setDefaultWorkHourPreferences() {
    return __async(this, null, function* () {
      const ref = this._dialog.open(WFHSettingsModalComponent, {
        data: {
          local: true,
          preferences: this.settings.default_work_preferences || []
        }
      });
      const result = yield lastValueFrom(ref.afterClosed());
      if (!result)
        return;
      this.settings.default_work_preferences = result;
    });
  }
  loadSettings(id) {
    return __async(this, null, function* () {
      this.loading = i18n("APP.CONCIERGE.AUTO_RELEASE_LOADING");
      this.settings = { custom: [] };
      const settings = yield nextValueFrom(ec({ parent_id: id }).pipe(map((_) => _.data)));
      const unencrypted = settings.find((_) => _.encryption_level === Pe.None);
      if (!unencrypted)
        return;
      try {
        this.settings = load(unencrypted.settings_string)?.auto_release || {};
      } catch {
      }
      if (!this.settings.custom)
        this.settings.custom = [];
      for (const name of this.types) {
        const key = name + "_time_before";
        if (key in this.settings)
          this.settings.custom.push(name);
      }
      this.loading = "";
      console.log("START HOUR:", this.start_hour);
      setTimeout(() => console.log("START HOUR:", this.start_hour), 1e3);
    });
  }
  save() {
    return __async(this, null, function* () {
      this.loading = i18n("APP.CONCIERGE.AUTO_RELEASE_SAVING");
      const settings = yield ec({ parent_id: this.id }).pipe(map((_) => _.data)).toPromise();
      let unencrypted = settings.find((_) => _.encryption_level === Pe.None);
      if (!unencrypted) {
        unencrypted = new xe({
          parent_id: this.id,
          encryption_level: Pe.None,
          settings_string: ""
        });
      }
      const new_settings = __spreadValues({}, this.settings);
      delete new_settings.custom;
      let old_settings = {};
      try {
        old_settings = load(unencrypted.settings_string) || {};
      } catch {
      }
      unencrypted.settings_string = dump(__spreadProps(__spreadValues({}, old_settings), {
        auto_release: new_settings
      }));
      const on_error = (e) => {
        notifyError(i18n("APP.CONCIERGE.AUTO_RELEASE_ERROR", { error: e }));
        throw e;
      };
      unencrypted.id ? yield nc(unencrypted.id, unencrypted).toPromise().catch(on_error) : yield rc(unencrypted).toPromise().catch(on_error);
      const metadata_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
      const metadata = yield hu(this.id, metadata_key).toPromise();
      const details = metadata.details || {};
      details.auto_release = new_settings;
      yield nextValueFrom(du(this.id, {
        name: metadata_key,
        details,
        description: ""
      })).catch(on_error);
      notifySuccess(i18n("APP.CONCIERGE.AUTO_RELEASE_SUCCESS"));
      this.loading = "";
      this._dialog_ref.close();
    });
  }
  static {
    this.\u0275fac = function AutoReleaseSettingsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AutoReleaseSettingsModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutoReleaseSettingsModalComponent, selectors: [["auto-release-modal"]], standalone: false, decls: 9, vars: 7, consts: [["load_state", ""], [1, "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded", "border-none", "bg-base-200", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "w-[32rem] overflow-auto px-4", 4, "ngIf", "ngIfElse"], ["class", "flex justify-end border-t border-base-200 px-4 py-2", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "text-2xl"], [1, "w-[32rem]", "overflow-auto", "px-4"], [1, "flex", "space-x-2"], [1, "flex-1"], [3, "ngModelChange", "min", "max", "step", "ngModel"], [1, "flex", "items-end", "space-x-2"], [3, "ngModelChange", "no_past_times", "ngModel"], [1, "mb-4", "flex-1", 3, "ngModelChange", "name", "ngModel"], [1, "my-2", "grid", "grid-cols-2", "gap-2"], [1, "col-span-2", "mb-2", "flex", "w-full", "items-center", "justify-center", "rounded", "bg-base-200", "py-4", "opacity-30"], ["btn", "", "matRipple", "", 1, "mb-4", "w-full", 3, "click"], ["appearance", "outline", 1, "w-full"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], ["value", "desk"], ["value", "visitor"], ["value", "parking"], ["value", "locker"], [1, "relative", "rounded", "border", "border-base-300", "px-2", "pb-2", "pt-4"], [1, "absolute", "-top-2", "left-2", "rounded", "bg-base-100", "px-2", "text-sm"], [1, "relative", "-top-0.5"], [1, "mb-1", "text-xs", "opacity-60"], [1, "mb-4", "space-y-4", "rounded-lg", "border", "border-base-200"], [3, "ngModelChange", "name", "ngModel"], ["class", "flex h-14 space-x-2 px-2", 4, "ngIf"], [1, "flex", "h-14", "space-x-2", "px-2"], [1, "flex", "justify-end", "border-t", "border-base-200", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-32"], [3, "diameter"]], template: function AutoReleaseSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h3", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, AutoReleaseSettingsModalComponent_button_4_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, AutoReleaseSettingsModalComponent_main_5_Template, 49, 49, "main", 4)(6, AutoReleaseSettingsModalComponent_footer_6_Template, 4, 3, "footer", 5)(7, AutoReleaseSettingsModalComponent_ng_template_7_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r9 = \u0275\u0275reference(8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.AUTO_RELEASE_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r9);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [NgIf, NgControlStatus, NgModel, MatFormField, MatSelect, MatOption, MatProgressSpinner, MatDialogClose, MatRipple, DurationFieldComponent, TimeFieldComponent, IconComponent, SettingsToggleComponent, DatePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoReleaseSettingsModalComponent, { className: "AutoReleaseSettingsModalComponent", filePath: "apps/concierge/src/app/building-manager/auto-release-settings-modal.component.ts", lineNumber: 223 });
})();

// apps/concierge/src/app/building-manager/building-form.component.ts
function BuildingFormComponent_form_0_div_1_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const region_r1 = ctx.$implicit;
    \u0275\u0275property("value", region_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", region_r1.display_name || region_r1.name, " ");
  }
}
function BuildingFormComponent_form_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 15);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-option", 16);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, BuildingFormComponent_form_0_div_1_mat_option_10_Template, 2, 2, "mat-option", 10);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "RESOURCE.REGION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "COMMON.REGION_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.default_parent);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "COMMON.NONE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(11, 11, ctx_r1.region_list));
  }
}
function BuildingFormComponent_form_0_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r3 = ctx.$implicit;
    \u0275\u0275property("value", tz_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r3);
  }
}
function BuildingFormComponent_form_0_mat_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE_EMPTY"), " ");
  }
}
function BuildingFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275template(1, BuildingFormComponent_form_0_div_1_Template, 12, 13, "div", 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 4)(4, "label", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 6);
    \u0275\u0275element(8, "input", 7);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 4)(11, "label", 5);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 6)(15, "icon", 8);
    \u0275\u0275text(16, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 9);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-autocomplete", null, 0);
    \u0275\u0275template(21, BuildingFormComponent_form_0_mat_option_21_Template, 2, 2, "mat-option", 10)(22, BuildingFormComponent_form_0_mat_option_22_Template, 3, 4, "mat-option", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 4)(24, "label", 12);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-form-field", 6);
    \u0275\u0275element(28, "input", 13);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const auto_r4 = \u0275\u0275reference(20);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(2, 11, ctx_r1.region_list)) == null ? null : tmp_3_0.length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 13, "FORM.DISPLAY_NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 15, "FORM.DISPLAY_NAME"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 17, "COMMON.TIMEZONE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(18, 19, "COMMON.TIMEZONE"))("matAutocomplete", auto_r4);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.filtered_timezones);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.timezones.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 21, "COMMON.LOCATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(29, 23, "COMMON.LOCATION"));
  }
}
var BuildingFormComponent = class _BuildingFormComponent extends AsyncHandler {
  get default_parent() {
    return this._org.organisation.id;
  }
  constructor(_org) {
    super();
    this._org = _org;
    this.building = null;
    this.save = 0;
    this.loading = false;
    this.loadingChange = new EventEmitter();
    this.done = new EventEmitter();
    this.timezones = [];
    this.filtered_timezones = [];
    this.region_list = this._org.region_list;
    this.form = new FormGroup({
      id: new FormControl(""),
      parent_id: new FormControl(this._org.organisation.id, [
        Validators.required
      ]),
      display_name: new FormControl("", [Validators.required]),
      timezone: new FormControl(Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || ""),
      location: new FormControl("")
    });
  }
  ngOnInit() {
    this._updateTimezoneList();
    this.subscription("tz-change", this.form.valueChanges.subscribe(() => this._updateTimezoneList()));
    if (this.building)
      this.form.patchValue(this.building);
  }
  ngOnChanges(changes) {
    if (changes.building && this.building) {
      this.form.patchValue(this.building);
    }
    if (changes.save && this.save)
      this.saveChanges();
  }
  saveChanges() {
    return __async(this, null, function* () {
      this.form.patchValue({
        parent_id: this.form.value.parent_id || this._org.organisation.id
      });
      if (!this.form.valid) {
        return notifyError(i18n("FORM.INVALID_FIELDS", {
          field_list: getInvalidFields(this.form).join(", ")
        }));
      }
      const data = this.form.getRawValue();
      this.loading = true;
      this.loadingChange.emit(true);
      const body = __spreadProps(__spreadValues({}, data), {
        tags: ["building"],
        name: `BLD ${bt().description} ${data.display_name}`
      });
      const building = yield (data.id ? jc(data.id, body) : zc(body)).toPromise().catch((e) => {
        notifyError(i18n("APP.CONCIERGE.BUILDINGS_SAVE_ERROR", {
          error: e.message || e.error || e
        }));
        this.loading = false;
        this.loadingChange.emit(false);
        throw e;
      });
      notifySuccess(i18n("APP.CONCIERGE.BUILDINGS_SAVE_SUCCESS"));
      this.loading = false;
      this.loadingChange.emit(false);
      this.done.emit(building);
    });
  }
  _updateTimezoneList() {
    const timezone = this.form?.value?.timezone || "";
    this.timezones = TIMEZONES_IANA;
    this.filtered_timezones = this.timezones.filter((_) => _.toLowerCase().includes(timezone.toLowerCase()));
  }
  static {
    this.\u0275fac = function BuildingFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingFormComponent)(\u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingFormComponent, selectors: [["building-form"]], inputs: { building: "building", save: "save", loading: "loading" }, outputs: { loadingChange: "loadingChange", done: "done" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["auto", "matAutocomplete"], ["building", "", 3, "formGroup", 4, "ngIf"], ["building", "", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "display-name"], ["appearance", "outline"], ["matInput", "", "name", "display-name", "formControlName", "display_name", 3, "placeholder"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", 3, "placeholder", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], ["for", "address"], ["matInput", "", "name", "address", "formControlName", "location", 3, "placeholder"], ["for", "region"], ["name", "region", "formControlName", "parent_id", 3, "placeholder"], [3, "value"], [3, "disabled"]], template: function BuildingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BuildingFormComponent_form_0_Template, 30, 25, "form", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatPrefix, MatInput, MatSelect, MatOption, MatAutocomplete, MatAutocompleteTrigger, FormGroupDirective, FormControlName, IconComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingFormComponent, { className: "BuildingFormComponent", filePath: "apps/concierge/src/app/building-manager/building-form.component.ts", lineNumber: 103 });
})();

// apps/concierge/src/app/building-manager/building-modal.component.ts
var BuildingModalComponent = class _BuildingModalComponent {
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.save_state = 0;
    this.building = this._data;
    this.close = (d) => this._dialog_ref.close(d);
    this.save = () => this.save_state = Date.now();
  }
  static {
    this.\u0275fac = function BuildingModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingModalComponent, selectors: [["building-modal"]], standalone: false, decls: 5, vars: 11, consts: [[3, "confirm", "heading", "loading"], [3, "loadingChange", "done", "building", "save", "loading"]], template: function BuildingModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275listener("confirm", function BuildingModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(4, "building-form", 1);
        \u0275\u0275twoWayListener("loadingChange", function BuildingModalComponent_Template_building_form_loadingChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.loading, $event) || (ctx.loading = $event);
          return $event;
        });
        \u0275\u0275listener("done", function BuildingModalComponent_Template_building_form_done_4_listener($event) {
          return ctx.close($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 5, ctx.building.id ? "APP.CONCIERGE.BUILDINGS_EDIT" : "APP.CONCIERGE.BUILDINGS_NEW"))("loading", \u0275\u0275pipeBind1(2, 7, ctx.loading) ? \u0275\u0275pipeBind1(3, 9, "APP.CONCIERGE.BUILDINGS_SAVING") : "");
        \u0275\u0275advance(4);
        \u0275\u0275property("building", ctx.building)("save", ctx.save_state);
        \u0275\u0275twoWayProperty("loading", ctx.loading);
      }
    }, dependencies: [FullscreenModalShellComponent, BuildingFormComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingModalComponent, { className: "BuildingModalComponent", filePath: "apps/concierge/src/app/building-manager/building-modal.component.ts", lineNumber: 33 });
})();

// apps/concierge/src/app/building-manager/induction-settings-modal.component.ts
function InductionSettingsModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "icon", 7);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function InductionSettingsModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 8)(1, "settings-toggle", 9);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function InductionSettingsModalComponent_main_5_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.is_enabled, $event) || (ctx_r1.is_enabled = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 10)(4, "textarea", 11);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function InductionSettingsModalComponent_main_5_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.induction_details, $event) || (ctx_r1.induction_details = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.is_enabled);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.INDUCTION_ENABLE"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.induction_details);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 6, "APP.CONCIERGE.INDUCTION_DETAILS"));
  }
}
function InductionSettingsModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 12)(1, "button", 13);
    \u0275\u0275listener("click", function InductionSettingsModalComponent_footer_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd()();
  }
}
function InductionSettingsModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 14);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading);
  }
}
var InductionSettingsModalComponent = class _InductionSettingsModalComponent {
  constructor(_zone_id, _settings, _org, _dialog_ref) {
    this._zone_id = _zone_id;
    this._settings = _settings;
    this._org = _org;
    this._dialog_ref = _dialog_ref;
    this.loading = "";
    this.induction_details = "";
    this.is_enabled = false;
    this.settings = {};
  }
  ngOnInit() {
    if (!this._zone_id)
      return;
    this.loadSettings();
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.loading = i18n("APP.CONCIERGE.INDUCTION_LOADING");
      const visitor_kiosk_app = this._settings.get("app.visitor_kiosk_app") || "visitor-kiosk_app";
      this.settings = {};
      const [bld_metadata, org_metadata, org_settings] = yield Promise.all([
        yield hu(this._zone_id, visitor_kiosk_app).toPromise(),
        yield hu(this._org.organisation.id, visitor_kiosk_app).toPromise(),
        yield hu(this._org.organisation.id, "settings").toPromise()
      ]);
      this.settings = __spreadValues(__spreadValues(__spreadValues({}, org_settings.details), org_metadata.details), bld_metadata.details);
      this.induction_details = this.settings.induction_details || "";
      this.is_enabled = this.settings.induction_enabled ?? false;
      this.loading = "";
    });
  }
  save() {
    return __async(this, null, function* () {
      this.loading = i18n("APP.CONCIERGE.INDUCTION_SAVING");
      const visitor_kiosk_app = this._settings.get("app.visitor_kiosk_app") || "visitor-kiosk_app";
      const concierge_app = this._settings.get("app.concierge_app") || "concierge_app";
      this._dialog_ref.disableClose = true;
      const metadata = yield hu(this._zone_id, visitor_kiosk_app).toPromise();
      const con_metadata = yield hu(this._zone_id, concierge_app).toPromise();
      const visitor_metadata = __spreadProps(__spreadValues({}, metadata.details), {
        induction_details: this.induction_details,
        induction_enabled: this.is_enabled
      });
      const concierge_metadata = __spreadProps(__spreadValues({}, metadata.details), {
        induction_details: this.induction_details,
        induction_enabled: this.is_enabled
      });
      const result = yield du(this._zone_id, {
        name: metadata.name || visitor_kiosk_app,
        description: metadata.description || "",
        details: visitor_metadata
      }).toPromise().catch((err) => {
        console.error(err);
        notifyError(i18n("APP.CONCIERGE.INDUCTION_ERROR", { error: err }));
      });
      const result2 = yield du(this._zone_id, {
        name: con_metadata.name || concierge_app,
        description: con_metadata.description || "",
        details: concierge_metadata
      }).toPromise().catch((err) => {
        console.error(err);
        notifyError(i18n("APP.CONCIERGE.INDUCTION_ERROR", { error: err }));
      });
      this.loading = "";
      if (result) {
        notifySuccess(i18n("APP.CONCIERGE.INDUCTION_SUCCESS"));
        this._dialog_ref.close();
      }
    });
  }
  static {
    this.\u0275fac = function InductionSettingsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InductionSettingsModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InductionSettingsModalComponent, selectors: [["induction-settings-modal"]], standalone: false, decls: 9, vars: 7, consts: [["load_state", ""], [1, "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded", "border-none", "bg-base-200", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "flex flex-col space-y-2 px-4", 4, "ngIf", "ngIfElse"], ["class", "mt-2 flex justify-end border-t border-base-200 px-4 py-2", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "text-2xl"], [1, "flex", "flex-col", "space-y-2", "px-4"], [3, "ngModelChange", "ngModel", "name"], ["appearance", "outline", 1, "h-[50vh]", "w-[36rem]", "max-w-[80vw]"], ["matInput", "", 1, "h-[calc(50vh-2rem)]", "w-[34rem]", "max-w-[calc(80vw-2rem)]", "resize-none", 3, "ngModelChange", "ngModel", "placeholder"], [1, "mt-2", "flex", "justify-end", "border-t", "border-base-200", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-32"], [3, "diameter"]], template: function InductionSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h3", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, InductionSettingsModalComponent_button_4_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, InductionSettingsModalComponent_main_5_Template, 6, 8, "main", 4)(6, InductionSettingsModalComponent_footer_6_Template, 3, 0, "footer", 5)(7, InductionSettingsModalComponent_ng_template_7_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r4 = \u0275\u0275reference(8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.INDUCTION_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatProgressSpinner, MatDialogClose, MatRipple, IconComponent, SettingsToggleComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InductionSettingsModalComponent, { className: "InductionSettingsModalComponent", filePath: "apps/concierge/src/app/building-manager/induction-settings-modal.component.ts", lineNumber: 65 });
})();

// apps/concierge/src/app/building-manager/item-list-modal.component.ts
function ItemListModalComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "input", 7);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ItemListModalComponent_div_11_Template_input_ngModelChange_1_listener($event) {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.item_list[i_r2].name, $event) || (ctx_r2.item_list[i_r2].name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 8);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ItemListModalComponent_div_11_Template_input_ngModelChange_3_listener($event) {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.item_list[i_r2].email, $event) || (ctx_r2.item_list[i_r2].email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ItemListModalComponent_div_11_Template_button_click_5_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.item_list.splice(i_r2, 1));
    });
    \u0275\u0275elementStart(7, "icon", 10);
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 5, "APP.CONCIERGE.SUPPORT_TYPES_NAME"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.item_list[i_r2].name);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.SUPPORT_TYPES_EMAIL"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.item_list[i_r2].email);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 9, "APP.CONCIERGE.SUPPORT_TYPES_REMOVE"));
  }
}
var ItemListModalComponent = class _ItemListModalComponent {
  constructor(_bld_id, _settings, _dialog_ref) {
    this._bld_id = _bld_id;
    this._settings = _settings;
    this._dialog_ref = _dialog_ref;
    this.item_list = [];
    this.loading = false;
    this.identify = (index, item) => index;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const metadata_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
      const metadata = yield hu(this._bld_id, metadata_key).toPromise();
      const items = metadata?.details?.support_issue_types || [];
      this.item_list = items;
    });
  }
  save() {
    return __async(this, null, function* () {
      const metadata_key = this._settings.get("app.workplace_metadata_key") || "workplace_app";
      const concierge_key = this._settings.get("app.concierge_metadata_key") || "concierge_app";
      this.loading = true;
      const items = this.item_list.filter((_) => _);
      const metadata = yield hu(this._bld_id, metadata_key).toPromise();
      metadata.details.support_issue_types = items;
      let resp = yield du(this._bld_id, {
        name: metadata_key,
        details: metadata.details,
        description: metadata.description || ""
      }).toPromise().catch((_) => {
        notifyError(`Failed to save issue types. ${_}`);
      });
      if (!resp) {
        this.loading = false;
        return;
      }
      const concierge_metadata = yield hu(this._bld_id, metadata_key).toPromise();
      concierge_metadata.details.support_issue_types = items;
      resp = yield du(this._bld_id, {
        name: concierge_key,
        details: concierge_metadata.details,
        description: concierge_metadata.description || ""
      }).toPromise().catch((_) => {
        notifyError(`Failed to save issue types. ${_}`);
      });
      this.loading = false;
      if (resp)
        this._dialog_ref.close();
    });
  }
  static {
    this.\u0275fac = function ItemListModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemListModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemListModalComponent, selectors: [["item-list-modal"]], standalone: false, decls: 15, vars: 8, consts: [["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[50vh]", "w-[36rem]", "space-y-2", "overflow-auto", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], ["class", "flex w-full items-center space-x-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "items-center", "justify-end", "border-t", "border-base-200", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "w-full", "items-center", "space-x-2"], ["type", "text", 1, "flex-1", "rounded", "border", "border-base-200", "px-4", "py-3", 3, "ngModelChange", "placeholder", "ngModel"], ["type", "email", 1, "flex-[2]", "rounded", "border", "border-base-200", "px-4", "py-3", 3, "ngModelChange", "placeholder", "ngModel"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-error", "text-error", 3, "click", "matTooltip"], [1, "text-2xl"]], template: function ItemListModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h2");
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 0)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main", 1)(8, "button", 2);
        \u0275\u0275listener("click", function ItemListModalComponent_Template_button_click_8_listener() {
          return ctx.item_list.push({ name: "", email: "" });
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, ItemListModalComponent_div_11_Template, 9, 11, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "footer", 4)(13, "button", 5);
        \u0275\u0275listener("click", function ItemListModalComponent_Template_button_click_13_listener() {
          return ctx.save();
        });
        \u0275\u0275text(14, "Save");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "APP.CONCIERGE.SUPPORT_TYPES_HEADER"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "APP.CONCIERGE.SUPPORT_TYPES_ADD"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.item_list)("ngForTrackBy", ctx.identify);
      }
    }, dependencies: [NgForOf, DefaultValueAccessor, NgControlStatus, NgModel, MatTooltip, MatDialogClose, MatRipple, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemListModalComponent, { className: "ItemListModalComponent", filePath: "apps/concierge/src/app/building-manager/item-list-modal.component.ts", lineNumber: 66 });
})();

// apps/concierge/src/app/building-manager/building-management.service.ts
var BuildingManagementService = class _BuildingManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.filtered_buildings = combineLatest([
      this._org.region_list,
      this._org.building_list,
      this._options,
      this._org.initialised
    ]).pipe(map(([regions, list, options]) => {
      if (options.zone) {
        list = list.filter((_) => _.parent_id === options.zone);
      }
      if (options.search) {
        list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
      }
      for (const bld of list) {
        const parent = regions.find((_) => _.id === bld.parent_id);
        if (parent) {
          bld.region = parent.display_name || parent.name;
        }
        bld.level_count = this._org.levelsForBuilding(bld)?.length || 0;
      }
      return list;
    }));
  }
  setFilters(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  setSearchString(search) {
    this._options.next(__spreadProps(__spreadValues({}, this._options.getValue()), { search }));
  }
  editBuilding(building = new mn()) {
    const ref = this._dialog.open(BuildingModalComponent, {
      data: building
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        this._org.addZone(data);
    });
  }
  editBuildingMetadata(zone = new mn()) {
    const ref = this._dialog.open(AppSettingsModalComponent, {
      data: { zone }
    });
    ref.afterClosed().subscribe((data) => {
      if (data)
        setTimeout(() => location.reload(), 300);
    });
  }
  setAutoRelease(building) {
    if (!building?.id)
      return;
    this._dialog.open(AutoReleaseSettingsModalComponent, {
      data: building.id
    });
  }
  setInduction(building) {
    if (!building?.id)
      return;
    this._dialog.open(InductionSettingsModalComponent, {
      data: building.id
    });
  }
  setSupportIssueTypes(building) {
    if (!building?.id)
      return;
    this._dialog.open(ItemListModalComponent, {
      data: building.id
    });
  }
  removeBuilding(building) {
    return __async(this, null, function* () {
      const ref = yield openConfirmModal({
        title: i18n("APP.CONCIERGE.BUILDINGS_REMOVE_TITLE"),
        content: i18n("APP.CONCIERGE.BUILDINGS_REMOVE_MSG", {
          name: building.name
        }),
        icon: { content: "delete_forever" },
        confirm_text: i18n("COMMON.REMOVE")
      }, this._dialog);
      if (ref.reason !== "done")
        return ref.close();
      ref.loading(i18n("APP.CONCIERGE.BUILDINGS_REMOVE_LOADING"));
      yield Lc(building.id).toPromise().catch((e) => {
        notifyError(i18n("APP.CONCIERGE.BUILDINGS_REMOVE_ERROR", { error: e }));
        throw e;
      });
      this._org.removeZone({ id: building.id, tags: ["building"] });
      notifySuccess(i18n("APP.CONCIERGE.BUILDINGS_REMOVE_SUCCESS"));
      ref.close();
    });
  }
  static {
    this.\u0275fac = function BuildingManagementService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingManagementService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuildingManagementService, factory: _BuildingManagementService.\u0275fac, providedIn: "root" });
  }
};

// apps/concierge/src/app/building-manager/building-list.component.ts
var _c0 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c1 = () => ({ key: "location", name: "Location", size: "13.5rem" });
var _c2 = (a0, a1) => ({ key: "timezone", name: a0, size: "12rem", content: a1 });
var _c3 = (a0) => ({ key: "region", name: a0, size: "11rem", sortable: false });
var _c4 = (a0) => ({ key: "level_count", name: a0, size: "5.5rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function BuildingListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_8_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const data_r4 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function BuildingListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r5);
  }
}
function BuildingListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "level");
    \u0275\u0275pipe(2, "level");
  }
  if (rf & 2) {
    let tmp_7_0;
    const data_r6 = ctx.data;
    \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = \u0275\u0275pipeBind1(1, 1, data_r6)) == null ? null : tmp_7_0.display_name) || ((tmp_7_0 = \u0275\u0275pipeBind1(2, 3, data_r6)) == null ? null : tmp_7_0.name), " ");
  }
}
function BuildingListComponent_ng_template_14_img_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const data_r7 = \u0275\u0275nextContext().data;
    \u0275\u0275property("source", data_r7[0]);
  }
}
function BuildingListComponent_ng_template_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.IMAGES_EMPTY"));
  }
}
function BuildingListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BuildingListComponent_ng_template_14_img_0_Template, 1, 1, "img", 14)(1, BuildingListComponent_ng_template_14_span_1_Template, 3, 3, "span", 15);
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275property("ngIf", data_r7.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !data_r7.length);
  }
}
function BuildingListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 5)(6, "button", 20)(7, "div", 21)(8, "icon", 22);
    \u0275\u0275text(9, "edit_square");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "mat-menu", null, 6)(15, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_15_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editWorkplaceSettings(row_r9));
    });
    \u0275\u0275elementStart(16, "div", 21)(17, "icon", 22);
    \u0275\u0275text(18, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_22_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editConciergeSettings(row_r9));
    });
    \u0275\u0275elementStart(23, "div", 21)(24, "icon", 22);
    \u0275\u0275text(25, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_29_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBookingPanelSettings(row_r9));
    });
    \u0275\u0275elementStart(30, "div", 21)(31, "icon", 22);
    \u0275\u0275text(32, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_36_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editVisitorKioskSettings(row_r9));
    });
    \u0275\u0275elementStart(37, "div", 21)(38, "icon", 22);
    \u0275\u0275text(39, "qr_code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_43_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBuilding(row_r9));
    });
    \u0275\u0275elementStart(44, "div", 21)(45, "icon", 22);
    \u0275\u0275text(46, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_50_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setAutoRelease(row_r9));
    });
    \u0275\u0275elementStart(51, "div", 21)(52, "icon", 24);
    \u0275\u0275text(53, " release_alert ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_57_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setInduction(row_r9));
    });
    \u0275\u0275elementStart(58, "div", 21)(59, "icon", 24);
    \u0275\u0275text(60, " badge ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div");
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_64_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSupportIssueTypes(row_r9));
    });
    \u0275\u0275elementStart(65, "div", 21)(66, "icon", 24);
    \u0275\u0275text(67, " support_agent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div");
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "button", 23);
    \u0275\u0275listener("click", function BuildingListComponent_ng_template_16_Template_button_click_71_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeBuilding(row_r9));
    });
    \u0275\u0275elementStart(72, "div", 25)(73, "icon", 26);
    \u0275\u0275text(74, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div");
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const menu_r10 = \u0275\u0275reference(5);
    const app_settings_menu_r11 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", app_settings_menu_r11);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, "APP.CONCIERGE.APP_SETTINGS"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 14, "APP.CONCIERGE.APP_SETTINGS_WORKPLACE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 16, "APP.CONCIERGE.APP_SETTINGS_CONCIERGE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 18, "APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 20, "APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 22, "APP.CONCIERGE.BUILDINGS_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 24, "APP.CONCIERGE.BUILDINGS_AUTO_RELEASE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 26, "APP.CONCIERGE.BUILDINGS_INDUCTION"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 28, "APP.CONCIERGE.BUILDINGS_SUPPORT_TYPES"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 30, "APP.CONCIERGE.BUILDINGS_REMOVE"), " ");
  }
}
var BuildingListComponent = class _BuildingListComponent {
  editWorkplaceSettings(zone) {
    this._dialog.open(WorkplaceSettingsFormModalComponent, {
      data: { zone }
    });
  }
  editConciergeSettings(zone) {
    this._dialog.open(ConciergeSettingsFormModalComponent, {
      data: { zone }
    });
  }
  editBookingPanelSettings(zone) {
    this._dialog.open(BookingPanelSettingsModalComponent, {
      data: { zone }
    });
  }
  editVisitorKioskSettings(zone) {
    this._dialog.open(VisitorKioskSettingsFormModalComponent, {
      data: { zone }
    });
  }
  constructor(_manager, _clipboard, _dialog) {
    this._manager = _manager;
    this._clipboard = _clipboard;
    this._dialog = _dialog;
    this.buildings = this._manager.filtered_buildings;
    this.settings = {};
    this.editBuilding = (building) => this._manager.editBuilding(building);
    this.editBuildingMetadata = (building) => this._manager.editBuildingMetadata(building);
    this.removeBuilding = (building) => this._manager.removeBuilding(building);
    this.setAutoRelease = (building) => this._manager.setAutoRelease(building);
    this.setInduction = (building) => this._manager.setInduction(building);
    this.setSupportIssueTypes = (building) => this._manager.setSupportIssueTypes(building);
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess(i18n("APP.CONCIERGE.BUILDINGS_COPIED_ID"));
    };
  }
  static {
    this.\u0275fac = function BuildingListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingListComponent)(\u0275\u0275directiveInject(BuildingManagementService), \u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingListComponent, selectors: [["building-list"]], standalone: false, decls: 18, vars: 34, consts: [["name_template", ""], ["timezone_template", ""], ["level_template", ""], ["image_template", ""], ["action_template", ""], ["menu", "matMenu"], ["app_settings_menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "block", "w-full", "min-w-[62rem]", "text-sm", 3, "data", "empty_message", "columns", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "p-4", "font-mono", "text-xs"], ["auth", "", "class", "max-h-[3rem] max-w-[8rem]", 3, "source", 4, "ngIf"], ["class", "opacity-30", 4, "ngIf"], ["auth", "", 1, "max-h-[3rem]", "max-w-[8rem]", 3, "source"], [1, "opacity-30"], [1, "flex", "w-full", "justify-center", "space-x-2", "p-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["mat-menu-item", "", 3, "click"], ["className", "material-symbols-rounded", 1, "text-xl"], [1, "text-red-500", "flex", "items-center", "space-x-2"], [1, "text-xl", "text-error"]], template: function BuildingListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 7);
        \u0275\u0275element(1, "simple-table", 8);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275element(7, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, BuildingListComponent_ng_template_8_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, BuildingListComponent_ng_template_10_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, BuildingListComponent_ng_template_12_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(14, BuildingListComponent_ng_template_14_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(16, BuildingListComponent_ng_template_16_Template, 78, 32, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const name_template_r12 = \u0275\u0275reference(9);
        const timezone_template_r13 = \u0275\u0275reference(11);
        const action_template_r14 = \u0275\u0275reference(17);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.buildings)("empty_message", \u0275\u0275pipeBind1(2, 4, "APP.CONCIERGE.BUILDINGS_EMPTY"))("columns", \u0275\u0275pureFunction6(27, _c6, \u0275\u0275pureFunction2(14, _c0, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.BUILDINGS_NAME"), name_template_r12), \u0275\u0275pureFunction0(17, _c1), \u0275\u0275pureFunction2(18, _c2, \u0275\u0275pipeBind1(4, 8, "COMMON.TIMEZONE"), timezone_template_r13), \u0275\u0275pureFunction1(21, _c3, \u0275\u0275pipeBind1(5, 10, "RESOURCE.REGION")), \u0275\u0275pureFunction1(23, _c4, \u0275\u0275pipeBind1(6, 12, "APP.CONCIERGE.BUILDINGS_LEVELS")), \u0275\u0275pureFunction1(25, _c5, action_template_r14)))("sortable", true);
      }
    }, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, SimpleTableComponent, AuthenticatedImageDirective, TranslatePipe, LevelPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingListComponent, { className: "BuildingListComponent", filePath: "apps/concierge/src/app/building-manager/building-list.component.ts", lineNumber: 247 });
})();

// apps/concierge/src/app/building-manager/building-manager.component.ts
var _c02 = ["app-building-manager", ""];
var BuildingManagerComponent = class _BuildingManagerComponent {
  constructor(_state) {
    this._state = _state;
    this.newBuilding = () => this._state.editBuilding();
  }
  static {
    this.\u0275fac = function BuildingManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingManagerComponent)(\u0275\u0275directiveInject(BuildingManagementService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingManagerComponent, selectors: [["", "app-building-manager", ""]], standalone: false, attrs: _c02, decls: 12, vars: 6, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "mb-2", "flex", "items-center", "justify-between", "px-8", "pb-8", "pt-4"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "relative", "block", "h-1/2", "w-full", "flex-1"]], template: function BuildingManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1)(4, "header", 2)(5, "h2", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 4);
        \u0275\u0275listener("click", function BuildingManagerComponent_Template_button_click_8_listener() {
          return ctx.newBuilding();
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(11, "building-list", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 2, "APP.CONCIERGE.BUILDINGS_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 4, "APP.CONCIERGE.BUILDINGS_ADD"), " ");
      }
    }, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, MatRipple, BuildingListComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=building-manager.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingManagerComponent, { className: "BuildingManagerComponent", filePath: "apps/concierge/src/app/building-manager/building-manager.component.ts", lineNumber: 52 });
})();

// apps/concierge/src/app/building-manager/building-manager.module.ts
var ROUTES = [{ path: "", component: BuildingManagerComponent }];
var BuildingManagerModule = class _BuildingManagerModule {
  static {
    this.\u0275fac = function BuildingManagerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BuildingManagerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BuildingManagerModule });
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
  BuildingManagerModule
};
//# sourceMappingURL=building-manager.module-JEPW6PUJ.js.map
