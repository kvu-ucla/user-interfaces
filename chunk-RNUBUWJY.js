import {
  ANIMATION_SHOW_CONTRACT_EXPAND,
  ActivatedRoute,
  AssetStateService,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  Booking,
  BuildingPipe,
  CommonModule,
  ComponentsModule,
  CustomTooltipComponent,
  DEFAULT_COLOURS,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  DeskHeightPresetsComponent,
  DurationFieldComponent,
  ElementRef,
  EventEmitter,
  EventFormService,
  FormControl,
  FormControlName,
  FormFieldsModule,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  GroupEventDetailsModalComponent,
  IconComponent,
  ImageCarouselComponent,
  InteractiveMapComponent,
  LevelPipe,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MapLocateModalComponent,
  MapPinComponent,
  MapsPeopleService,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatBottomSheet,
  MatBottomSheetRef,
  MatButtonModule,
  MatCheckbox,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOptgroup,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSlider,
  MatSliderThumb,
  MatTooltip,
  MatTooltipModule,
  NG_VALUE_ACCESSOR,
  NavigationEnd,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  PaymentsService,
  ReactiveFormsModule,
  Router,
  SafePipe,
  SanitizePipe,
  SettingsService,
  SettingsToggleComponent,
  SharedEventsModule,
  SharedSpacesModule,
  SharedUsersModule,
  StatusPillComponent,
  TimeFieldComponent,
  TranslatePipe,
  User,
  UserListFieldComponent,
  UserSearchFieldComponent,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  addDays,
  addMinutes,
  bookedResourceList,
  catchError,
  checkinBooking,
  checkinBookingInstance,
  cleanObject,
  combineLatest,
  currentUser,
  debounceTime,
  distinctUntilKeyChanged,
  endOfDay,
  filter,
  findNearbyFeature,
  first,
  flatten,
  forkJoin,
  format,
  formatDuration,
  forwardRef,
  generateBookingForm,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  getInvalidFields,
  getUnixTime,
  i18n,
  isSameDay,
  listChildMetadata,
  loadLockerBanks,
  loadLockers,
  map,
  merge,
  notifyError,
  notifySuccess,
  notifyWarn,
  of,
  openConfirmModal,
  queryBookings,
  randomString,
  rulesForResource,
  saveBooking,
  shareReplay,
  showMetadata,
  startOfDay,
  switchMap,
  take,
  tap,
  timer,
  unique,
  validateAssetRequestsForResource,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZMOZKBJD.js";

// libs/bookings/src/lib/desk-settings-modal.component.ts
function DeskSettingsModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275text(2, "Desk Height");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275text(4, " Set your desk height for the best experience ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "label");
    \u0275\u0275text(7, "Presets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "mat-form-field", 7)(10, "mat-select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function DeskSettingsModalComponent_div_0_Template_mat_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.preset, $event) || (ctx_r1.preset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DeskSettingsModalComponent_div_0_Template_mat_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPreset($event));
    });
    \u0275\u0275elementStart(11, "mat-option", 9);
    \u0275\u0275text(12, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-option", 10);
    \u0275\u0275text(14, "Standing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 11);
    \u0275\u0275text(16, "Seated");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 12);
    \u0275\u0275listener("click", function DeskSettingsModalComponent_div_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit_presets = true);
    });
    \u0275\u0275elementStart(18, "app-icon");
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "label");
    \u0275\u0275text(21, "Current Height");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 13)(23, "mat-slider", 14)(24, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function DeskSettingsModalComponent_div_0_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.height, $event) || (ctx_r1.height = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DeskSettingsModalComponent_div_0_Template_input_ngModelChange_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updatePreset(ctx_r1.height));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 16);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "button", 17);
    \u0275\u0275listener("click", function DeskSettingsModalComponent_div_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDeskHeight());
    });
    \u0275\u0275text(28, " Apply Settings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 18)(30, "app-icon");
    \u0275\u0275text(31, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.preset);
    \u0275\u0275advance(13);
    \u0275\u0275property("displayWith", ctx_r1.formatLabel);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.height);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.height.toFixed(1), "cm ");
  }
}
function DeskSettingsModalComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-height-presets", 19);
    \u0275\u0275listener("close", function DeskSettingsModalComponent_ng_template_1_Template_desk_height_presets_close_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit_presets = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("show_close", true);
  }
}
var DeskSettingsModalComponent = class _DeskSettingsModalComponent {
  constructor(_data, _org, _settings, _dialog_ref) {
    this._data = _data;
    this._org = _org;
    this._settings = _settings;
    this._dialog_ref = _dialog_ref;
    this.desk_id = this._data.id;
    this.edit_presets = false;
    this.height = 71;
  }
  ngOnInit() {
    const sitting_height = this._settings.get("desk_sitting_height");
    const standing_height = this._settings.get("desk_standing_height");
    if (!sitting_height && !standing_height) {
      this.edit_presets = true;
    }
    const last_height = parseInt(localStorage.getItem("PLACEOS.last_desk_height"), 10);
    this.height = last_height || sitting_height || 71;
    if (this.height === sitting_height) {
      this.preset = "sitting";
    } else if (this.height === standing_height) {
      this.preset = "standing";
    }
  }
  updatePreset(new_height) {
    const sitting_height = this._settings.get("desk_sitting_height") || 71;
    const standing_height = this._settings.get("desk_standing_height") || 102;
    if (new_height === sitting_height) {
      this.preset = "sitting";
    } else if (new_height === standing_height) {
      this.preset = "standing";
    } else {
      this.preset = null;
    }
  }
  setPreset(value) {
    switch (value) {
      case "standing":
        this.height = this._settings.get("desk_standing_height") || 102;
        break;
      case "sitting":
        this.height = this._settings.get("desk_sitting_height") || 71;
        break;
      default:
        this.height = 70;
        break;
    }
  }
  setDeskHeight() {
    return __async(this, null, function* () {
      const mod = this._org.module("desks", "DeskControl");
      localStorage.setItem("PLACEOS.last_desk_height", `${this.height}`);
      if (!mod)
        return this._dialog_ref.close();
      yield mod.execute("set_desk_height", [this.desk_id, this.height]).catch((_) => {
        notifyError("Error setting desk height." + _);
        throw _;
      });
      notifySuccess("Successfully set desk height");
      this._dialog_ref.close();
    });
  }
  formatLabel(value) {
    return `${value.toFixed(1)}cm`;
  }
  static {
    this.\u0275fac = function DeskSettingsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskSettingsModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskSettingsModalComponent, selectors: [["desk-settings-modal"]], standalone: false, decls: 3, vars: 2, consts: [["desk_height_tooltip", ""], ["class", "relative p-4 bg-base-100 rounded shadow w-[20rem]", 4, "ngIf", "ngIfElse"], [1, "relative", "p-4", "bg-base-100", "rounded", "shadow", "w-[20rem]"], [1, "text-lg"], [1, "text-xs", "opacity-60", "mb-4"], [1, "flex", "flex-col", "mt-2", "mb-4"], [1, "flex", "items-center", "space-x-2", "pb-4"], ["appearance", "outline", 1, "no-subscript", "flex-1", "w-1/2"], ["placeholder", "No selected preset", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "standing"], ["value", "sitting"], ["icon", "", "matRipple", "", 1, "rounded", "h-12", "w-12", "bg-secondary", "text-secondary-content", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["min", "60", "max", "120", "step", "0.5", "discrete", "", 1, "flex-1", 3, "displayWith"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"], [1, "text-sm", "w-12", "text-right"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-0", "right-0"], [3, "close", "show_close"]], template: function DeskSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DeskSettingsModalComponent_div_0_Template, 32, 4, "div", 1)(1, DeskSettingsModalComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const desk_height_tooltip_r4 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", !ctx.edit_presets)("ngIfElse", desk_height_tooltip_r4);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatDialogClose, MatOption, IconComponent, DeskHeightPresetsComponent, MatSelect, MatRipple, MatSlider, MatSliderThumb], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskSettingsModalComponent, { className: "DeskSettingsModalComponent", filePath: "libs/bookings/src/lib/desk-settings-modal.component.ts", lineNumber: 87 });
})();

// libs/bookings/src/lib/booking-details-modal.component.ts
var _c0 = (a0) => ({ time: a0 });
var _c1 = () => ({ disable_pan: true, disable_zoom: true });
function BookingDetailsModalComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function BookingDetailsModalComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "image-carousel", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("images", ctx_r1.booking == null ? null : ctx_r1.booking.extension_data == null ? null : ctx_r1.booking.extension_data.images);
  }
}
function BookingDetailsModalComponent_div_10_Conditional_1_button_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "app-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.booking.checked_in ? "done" : "arrow_back");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, ctx_r1.booking.checked_in ? "COMMON.CHECKED_IN" : "COMMON.CHECK_IN"), " ");
  }
}
function BookingDetailsModalComponent_div_10_Conditional_1_button_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 32);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function BookingDetailsModalComponent_div_10_Conditional_1_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_div_10_Conditional_1_button_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleCheckedIn());
    });
    \u0275\u0275template(1, BookingDetailsModalComponent_div_10_Conditional_1_button_0_div_1_Template, 6, 4, "div", 29)(2, BookingDetailsModalComponent_div_10_Conditional_1_button_0_ng_template_2_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loading_state_r4 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-success", ctx_r1.booking.checked_in)("text-success-content", ctx_r1.booking.checked_in);
    \u0275\u0275property("disabled", ctx_r1.checking_in);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.checking_in)("ngIfElse", loading_state_r4);
  }
}
function BookingDetailsModalComponent_div_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BookingDetailsModalComponent_div_10_Conditional_1_button_0_Template, 4, 7, "button", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r1.booking.checked_out_at && !ctx_r1.checked_out && !ctx_r1.auto_checkin && (ctx_r1.booking.state === "upcoming" || ctx_r1.booking.state === "started" || ctx_r1.booking.state === "in_progress") && ctx_r1.booking.status !== "declined");
  }
}
function BookingDetailsModalComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, BookingDetailsModalComponent_div_10_Conditional_1_Template, 1, 1, "button", 25);
    \u0275\u0275elementStart(2, "button", 26)(3, "app-icon");
    \u0275\u0275text(4, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const menu_r5 = \u0275\u0275reference(44);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_checkin ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r5);
  }
}
function BookingDetailsModalComponent_ng_container_37_div_5_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8.name || "Item");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r8.quantity, " ");
  }
}
function BookingDetailsModalComponent_ng_container_37_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "button", 38);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_ng_container_37_div_5_Template_button_click_1_listener() {
      const request_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.show_request[request_r7.id] = !ctx_r1.show_request[request_r7.id]);
    });
    \u0275\u0275elementStart(2, "div", 39)(3, "div", 40);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 41)(8, "app-icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 42)(11, "app-icon", 43);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 44);
    \u0275\u0275template(14, BookingDetailsModalComponent_ng_container_37_div_5_div_14_Template, 6, 2, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 21, "BOOKINGS.ASSETS_REQUESTED_FOR", \u0275\u0275pureFunction1(24, _c0, \u0275\u0275pipeBind2(5, 18, request_r7.deliver_at, "MMM d, " + ctx_r1.time_format))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", request_r7.state === "approved")("text-success-content", request_r7.state === "approved")("bg-warning", request_r7.state !== "approved" && request_r7.state !== "rejected")("text-warning-content", request_r7.state !== "approved" && request_r7.state !== "rejected")("bg-error", request_r7.state === "rejected")("text-error-content", request_r7.state === "rejected");
    \u0275\u0275property("matTooltip", request_r7.state || "Tentative");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", request_r7.state === "approved" ? "done" : request_r7.state === "rejected" ? "close" : "schedule", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.show_request[request_r7.id] ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.show_request[request_r7.id] ? "show" : "hide");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", request_r7.items);
  }
}
function BookingDetailsModalComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 33)(2, "h3", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275template(5, BookingDetailsModalComponent_ng_container_37_div_5_Template, 15, 26, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", "BOOKINGS.ASSETS", " (", (ctx_r1.booking.valid_assets == null ? null : ctx_r1.booking.valid_assets.length) || 0, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.booking.valid_assets);
  }
}
function BookingDetailsModalComponent_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "interactive-map", 49);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.level == null ? null : ctx_r1.level.map_id)("features", ctx_r1.features)("options", \u0275\u0275pureFunction0(3, _c1));
  }
}
function BookingDetailsModalComponent_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_button_45_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit.emit());
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "app-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_EDIT"));
  }
}
function BookingDetailsModalComponent_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_button_46_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDeskHeight());
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "app-icon", 53);
    \u0275\u0275text(3, " height ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_SET_DESK_HEIGHT"), " ");
  }
}
function BookingDetailsModalComponent_button_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_button_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove.emit());
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "app-icon", 54);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_DELETE"));
  }
}
function BookingDetailsModalComponent_button_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_button_48_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove.emit(true));
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "app-icon", 54);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_DELETE_SERIES"));
  }
}
function BookingDetailsModalComponent_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_button_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.end.emit());
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "app-icon", 54);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_END"));
  }
}
var BookingDetailsModalComponent = class _BookingDetailsModalComponent {
  get level() {
    return this._org.levelWithID(this.booking?.zones || []);
  }
  get building() {
    const building = this._org.buildings.find((bld) => (this.booking?.zones || []).includes(bld.id));
    if (this._settings.get("app.use_region")) {
      const region = this._org.regions.find((region2) => (this.booking?.zones || []).includes(region2.id) || region2.id === building?.parent_id);
      if (region)
        return region;
    }
    return building;
  }
  get can_edit() {
    return this.booking.booking_type !== "visitor" && this.booking.booking_type !== "parking" && this.booking.booking_type !== "locker";
  }
  get can_checkin() {
    return !this._settings.get(`app.${(this.booking?.type || "booking") + "s"}.hide_checkin`) && !this._settings.get(`app.${this.booking?.type || "bookings"}.hide_checkin`) && !this._settings.get("app.bookings.hide_checkin");
  }
  get auto_checkin() {
    return this._settings.get(`app.${this.booking?.type || "bookings"}.auto_checkin`);
  }
  get is_checked_in() {
    return this.booking.checked_in;
  }
  get desk_height_enabled() {
    return this.booking?.type === "desk" && this._settings.get("app.desks.height_enabled");
  }
  get is_in_progress() {
    const ts = Date.now();
    const start = this.booking?.booking_start * 1e3;
    const end = this.booking?.booking_end * 1e3;
    if (this.booking?.all_day)
      return start <= ts;
    return start <= ts && ts <= end;
  }
  get time_format() {
    return this._settings.time_format;
  }
  get booking_status() {
    if (this.booking?.is_done)
      return "neutral";
    if (this.booking?.status === "approved")
      return "success";
    if (this.booking?.status === "declined")
      return "error";
    if (this.booking?.status === "tentative")
      return "warning";
    return "warning";
  }
  constructor(_booking, _settings, _org, _dialog) {
    this._booking = _booking;
    this._settings = _settings;
    this._org = _org;
    this._dialog = _dialog;
    this.edit = new EventEmitter();
    this.remove = new EventEmitter();
    this.end = new EventEmitter();
    this.booking = this._booking;
    this.hide_map = false;
    this.show_request = {};
    this.checked_out = false;
    this.checking_in = false;
    this.features = [
      {
        location: this.booking?.extension_data?.map_id || this.booking?.asset_id,
        content: MapPinComponent
      }
    ];
    this.has_assets = !!this.booking?.valid_assets.length;
  }
  get period() {
    if (this.booking?.is_all_day)
      return i18n("COMMON.ALL_DAY");
    const start = this.booking?.date || Date.now();
    const duration = this.booking?.duration || 60;
    const end = addMinutes(start, duration);
    const dur = formatDuration({
      hours: Math.floor(duration / 60),
      minutes: duration % 60
    }).replace(" hour", "hr").replace(" minute", "min");
    return `${format(start, this.time_format)} - ${format(end, this.time_format)} (${dur})`;
  }
  toggleCheckedIn() {
    return __async(this, null, function* () {
      this.checking_in = true;
      const bkn = this.booking;
      const promise = (bkn.instance ? checkinBookingInstance(bkn.id, bkn.instance, !this.booking.checked_in) : checkinBooking(this.booking.id, !this.booking.checked_in)).toPromise().catch((_) => {
        notifyError(i18n("BOOKINGS.CHECK_IN_ERROR"));
        this.checking_in = false;
        throw _;
      });
      yield promise;
      this.booking.checked_in = !this.booking.checked_in;
      this.checked_out = !this.booking.checked_in;
      notifySuccess(i18n(this.booking.checked_in ? "BOOKINGS.CHECK_IN_SUCCESS" : "BOOKINGS.CHECK_OUT_SUCCESS"));
      this.checking_in = false;
    });
  }
  status(id) {
    const booking = this.booking.linked_bookings.find((_) => _.asset_id === id);
    if (booking.status)
      return booking.status;
    return booking ? booking.approved ? "approved" : booking.rejected ? "rejected" : "pending" : "pending";
  }
  viewLocation() {
    this.hide_map = true;
    const ref = this._dialog.open(MapLocateModalComponent, {
      maxWidth: "95vw",
      maxHeight: "95vh",
      data: {
        item: {
          id: this._booking.asset_id,
          name: this._booking.asset_name,
          map_id: this._booking.extension_data.map_id || this.booking.asset_id,
          level: this.level
        }
      }
    });
    ref.afterClosed().subscribe(() => this.hide_map = false);
  }
  setDeskHeight() {
    this._dialog.open(DeskSettingsModalComponent, {
      data: { id: this.booking.asset_ids[0] || this.booking.asset_id }
    });
  }
  static {
    this.\u0275fac = function BookingDetailsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingDetailsModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingDetailsModalComponent, selectors: [["booking-details-modal"]], outputs: { edit: "edit", remove: "remove", end: "end" }, standalone: false, decls: 50, vars: 27, consts: [["menu", "matMenu"], ["loading_state", ""], [1, "w-[100vw]", "h-[100vh]", "sm:relative", "sm:inset-auto", "sm:w-[51rem]", "sm:h-auto", "sm:max-h-[80vh]", "bg-base-100", "sm:bg-base-200", "sm:rounded", "overflow-auto", "space-y-2", "pb-2"], [1, "sm:flex", "flex-col", "items-center", "pb-4", "max-h-screen", "sm:max-h-[80vh]", "sm:px-16", "sm:border-b", "bg-base-100", "border-base-200"], ["class", "h-8 w-full sm:hidden block", 4, "ngIf"], ["class", "bg-neutral w-full h-64 sm:rounded-b overflow-hidden", 4, "ngIf"], ["title", "", 1, "px-3", "mt-2", "text-xl", "font-medium", "w-full"], [1, "sm:flex", "items-center", "justify-between", "w-full"], [1, "flex", "m-2"], [3, "status"], ["actions", "", "class", "flex items-center space-x-2 px-2", 4, "ngIf"], [1, "sm:flex", "flex-wrap", "sm:px-12"], [1, "sm:p-4", "sm:bg-base-100", "rounded", "sm:m-2", "sm:border", "border-base-200", "flex-grow-[4]", "min-w-1/3", "sm:w-[16rem]"], [1, "px-3", "mt-2", "text-lg", "font-medium", "mb-2"], [1, "flex", "items-center", "px-2", "space-x-2"], [4, "ngIf"], ["map", "", 1, "mt-4", "sm:my-2", "h-64", "sm:h-48", "relative", "border", "border-base-200", "overflow-hidden", "rounded", "sm:bg-base-100", "m-2", "flex-grow-[3]", "min-w-1/3", "w-[calc(100%-1rem)]", "p-2", "sm:w-[16rem]", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-0", "left-2", "bg-neutral", "text-white"], ["xPosition", "before"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], [1, "h-8", "w-full", "sm:hidden", "block"], [1, "bg-neutral", "w-full", "h-64", "sm:rounded-b", "overflow-hidden"], [1, "w-full", "h-64", 3, "images"], ["actions", "", 1, "flex", "items-center", "space-x-2", "px-2"], ["btn", "", "matRipple", "", 1, "flex-1", "h-10", "border-none", 3, "bg-success", "text-success-content", "disabled"], ["icon", "", "matRipple", "", 1, "bg-secondary", "rounded", "text-white", "h-12", "w-12", 3, "matMenuTriggerFor"], ["btn", "", "matRipple", "", "class", "flex-1 h-10 border-none", 3, "bg-success", "text-success-content", "disabled", "click", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "flex-1", "h-10", "border-none", 3, "click", "disabled"], ["class", "flex items-center space-x-2 justify-center", 4, "ngIf", "ngIfElse"], [1, "flex", "items-center", "space-x-2", "justify-center"], [1, "mr-4"], [1, "mx-auto", 3, "diameter"], [1, "mt-4", "sm:p-4", "sm:bg-base-100", "rounded", "sm:m-2", "sm:border", "border-base-200", "flex-grow-[3]", "min-w-1/3", "sm:w-[16rem]"], [1, "mx-3", "py-2", "text-lg", "font-medium"], [1, "flex", "flex-col", "space-y-2"], ["request", "", "class", "border border-base-300 bg-base-100 rounded-xl overflow-hidden", 4, "ngFor", "ngForOf"], ["request", "", 1, "border", "border-base-300", "bg-base-100", "rounded-xl", "overflow-hidden"], ["matRipple", "", 1, "flex", "items-center", "space-x-2", "p-3", "w-full", 3, "click"], [1, "flex-1", "text-left"], [1, "text-sm"], [1, "flex", "items-center", "justify-center", "rounded-full", "w-8", "h-8", 3, "matTooltip"], [1, "flex", "items-center", "justify-center", "rounded-full", "w-8", "h-8"], [1, "text-2xl"], [1, "flex", "flex-col", "bg-base-200", "divide-y", "divide-base-100"], ["class", "flex items-center px-3 py-1 space-x-2 hover:opacity-90", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "px-3", "py-1", "space-x-2", "hover:opacity-90"], [1, "flex", "items-center", "flex-1"], [1, "rounded", "bg-success", "text-success-content", "text-xs", "px-2", "py-1"], [1, "pointer-events-none", 3, "src", "features", "options"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click"], [1, "flex", "items-center", "space-x-2", "text-base"], ["mat-menu-item", "", 3, "click"], ["className", "material-symbols-rounded"], [1, "text-error"]], template: function BookingDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
        \u0275\u0275template(2, BookingDetailsModalComponent_div_2_Template, 1, 0, "div", 4)(3, BookingDetailsModalComponent_div_3_Template, 2, 1, "div", 5);
        \u0275\u0275elementStart(4, "h3", 6);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 7)(7, "div", 8)(8, "status-pill", 9);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, BookingDetailsModalComponent_div_10_Template, 5, 2, "div", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "h3", 13);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 14)(17, "app-icon");
        \u0275\u0275text(18, "event");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 14)(23, "app-icon");
        \u0275\u0275text(24, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div");
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 14)(28, "app-icon");
        \u0275\u0275text(29, "map");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div");
        \u0275\u0275text(31);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 14)(33, "app-icon");
        \u0275\u0275text(34, "place");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div");
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(37, BookingDetailsModalComponent_ng_container_37_Template, 6, 3, "ng-container", 15);
        \u0275\u0275elementStart(38, "button", 16);
        \u0275\u0275listener("click", function BookingDetailsModalComponent_Template_button_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.viewLocation());
        });
        \u0275\u0275template(39, BookingDetailsModalComponent_ng_container_39_Template, 2, 4, "ng-container", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "button", 17)(41, "app-icon");
        \u0275\u0275text(42, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "mat-menu", 18, 0);
        \u0275\u0275template(45, BookingDetailsModalComponent_button_45_Template, 7, 3, "button", 19)(46, BookingDetailsModalComponent_button_46_Template, 7, 3, "button", 20)(47, BookingDetailsModalComponent_button_47_Template, 7, 3, "button", 20)(48, BookingDetailsModalComponent_button_48_Template, 7, 3, "button", 20)(49, BookingDetailsModalComponent_button_49_Template, 7, 3, "button", 20);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !(ctx.booking == null ? null : ctx.booking.extension_data == null ? null : ctx.booking.extension_data.images == null ? null : ctx.booking.extension_data.images.length));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.booking == null ? null : ctx.booking.extension_data == null ? null : ctx.booking.extension_data.images == null ? null : ctx.booking.extension_data.images.length);
        \u0275\u0275advance();
        \u0275\u0275classProp("pt-4", !(ctx.booking == null ? null : ctx.booking.extension_data == null ? null : ctx.booking.extension_data.images));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.booking.title, " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("status", ctx.booking_status);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.period, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.booking.is_done);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 22, "BOOKINGS.DETAILS"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 24, ctx.booking.date, "EEEE, dd LLLL y"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.period);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" ", (ctx.level == null ? null : ctx.level.display_name) || (ctx.level == null ? null : ctx.level.name), ", ", ctx.booking.asset_name || ctx.booking.asset_id, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" ", (ctx.building == null ? null : ctx.building.display_name) || (ctx.building == null ? null : ctx.building.name), " ", (ctx.building == null ? null : ctx.building.address) ? ", " + ctx.building.address : "", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.has_assets);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.hide_map);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.can_edit);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.is_checked_in && ctx.desk_height_enabled);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.is_in_progress);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.booking.instance && ctx.booking.booking_type !== "parking" && !ctx.booking.extension_data.is_assigned);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.is_in_progress);
      }
    }, dependencies: [NgForOf, NgIf, MatDialogClose, MatProgressSpinner, IconComponent, InteractiveMapComponent, ImageCarouselComponent, StatusPillComponent, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, MatTooltip, DatePipe, TranslatePipe], encapsulation: 2, data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingDetailsModalComponent, { className: "BookingDetailsModalComponent", filePath: "libs/bookings/src/lib/booking-details-modal.component.ts", lineNumber: 355 });
})();

// libs/bookings/src/lib/parking.service.ts
var ParkingService = class _ParkingService extends AsyncHandler {
  constructor(_org, _settings) {
    super();
    this._org = _org;
    this._settings = _settings;
    this._loading = new BehaviorSubject([]);
    this.loading = this._loading.asObservable();
    this.levels = this._org.level_list.pipe(map((_) => {
      if (!this._settings.get("app.use_region")) {
        const blds = this._org.buildingsForRegion();
        const bld_ids = blds.map((bld) => bld.id);
        const list = _.filter((lvl) => bld_ids.includes(lvl.parent_id) && lvl.tags.includes("parking"));
        list.map((lvl) => __spreadProps(__spreadValues({}, lvl), {
          display_name: `${blds.find((_2) => _2.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
        }));
        return list;
      }
      return _.filter((lvl) => lvl.parent_id === this._org.building.id && lvl.tags.includes("parking"));
    }));
    this.spaces = combineLatest([this.levels]).pipe(filter(([lvls]) => !!lvls[0]?.id), switchMap(([levels]) => {
      this._loading.next([...this._loading.getValue(), "spaces"]);
      return forkJoin(levels.map((lvl) => showMetadata(lvl.id, "parking-spaces").pipe(map((d) => (d.details instanceof Array ? d.details : []).map((s) => __spreadProps(__spreadValues({}, s), {
        zone_id: lvl.id
      }))))));
    }), map((list) => flatten(list)), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "spaces"))), shareReplay(1));
    this.users = combineLatest([this._org.active_building]).pipe(filter(([bld]) => !!bld?.id), switchMap(([bld]) => {
      this._loading.next([...this._loading.getValue(), "users"]);
      return showMetadata(bld.id, "parking-users");
    }), map((metadata) => metadata.details instanceof Array ? metadata.details : []), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "users"))), shareReplay(1));
    this.has_booking = queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "parking"
    }).pipe(map((_) => _.length > 0), shareReplay(1));
    this.assigned_space = this.spaces.pipe(map((list) => list.find((_) => _.assigned_to?.toLowerCase() === currentUser().email?.toLowerCase())));
    this.user_details = this.users.pipe(map((list) => list.find((_) => _.email?.toLowerCase() === currentUser().email?.toLowerCase())));
    this.deny_parking_access = this.user_details.pipe(map((details) => !!details?.deny));
    this.booked_space = combineLatest([
      this._org.active_building,
      this.spaces
    ]).pipe(map(([_, spaces]) => queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "parking"
    }).pipe(catchError(() => of([])), map((booking_list) => booking_list.map((booking) => spaces.find((space) => space.id === booking.asset_id)).filter((space) => !!space)))), map((_) => _[0]), shareReplay(1));
    this.subscription("spaces", this.assigned_space.subscribe());
  }
  static {
    this.\u0275fac = function ParkingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParkingService, factory: _ParkingService.\u0275fac, providedIn: "root" });
  }
};

// libs/bookings/src/lib/booking-card.component.ts
var _c02 = () => ["./"];
var _c12 = (a0) => ({ booking: a0 });
function BookingCardComponent_h4_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.day, ",\xA0");
  }
}
function BookingCardComponent_h4_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 3);
    \u0275\u0275template(1, BookingCardComponent_h4_0_span_1_Template, 2, 1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.show_day);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, ctx_r0.booking == null ? null : ctx_r0.booking.date, ctx_r0.time_format), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind2(6, 6, ctx_r0.booking == null ? null : ctx_r0.booking.date, "zzzz"), ")");
  }
}
function BookingCardComponent_a_1_app_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-icon");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.type);
  }
}
function BookingCardComponent_a_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "app-icon");
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.location);
  }
}
function BookingCardComponent_a_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.ASSOCIATE"), " ");
  }
}
function BookingCardComponent_a_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.EVENT"), " ");
  }
}
function BookingCardComponent_a_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.booking.status !== "declined" ? "BOOKINGS.RESERVED" : "BOOKINGS.RELEASED"), " ");
  }
}
function BookingCardComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275listener("click", function BookingCardComponent_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewDetails());
    });
    \u0275\u0275elementStart(1, "div", 8)(2, "h4", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "status-pill", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13);
    \u0275\u0275template(9, BookingCardComponent_a_1_app_icon_9_Template, 2, 1, "app-icon", 14);
    \u0275\u0275elementStart(10, "div", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, BookingCardComponent_a_1_div_12_Template, 5, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "app-icon", 17);
    \u0275\u0275text(14, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, BookingCardComponent_a_1_div_15_Template, 3, 3, "div", 18)(16, BookingCardComponent_a_1_div_16_Template, 3, 3, "div", 18)(17, BookingCardComponent_a_1_div_17_Template, 3, 3, "div", 18);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const desk_icon_r3 = \u0275\u0275reference(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c02))("queryParams", \u0275\u0275pureFunction1(15, _c12, ctx_r0.booking == null ? null : ctx_r0.booking.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.booking == null ? null : ctx_r0.booking.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", ctx_r0.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.period);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.type !== "desk")("ngIfElse", desk_icon_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.raw_description || (ctx_r0.booking == null ? null : ctx_r0.booking.asset_name) || (ctx_r0.booking == null ? null : ctx_r0.booking.asset_id), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.location);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.for_current_user && (ctx_r0.booking == null ? null : ctx_r0.booking.booking_type) !== "group-event");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.booking == null ? null : ctx_r0.booking.booking_type) === "group-event");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(18, 12, ctx_r0.is_reserved_parking_space));
  }
}
function BookingCardComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
}
var BookingCardComponent = class _BookingCardComponent extends AsyncHandler {
  get for_current_user() {
    return this.booking?.user_email.toLowerCase() === currentUser()?.email.toLowerCase();
  }
  get time_format() {
    return this._settings.time_format;
  }
  get status() {
    if (this.booking?.is_done)
      return "neutral";
    if (this.booking?.status === "approved")
      return "success";
    if (this.booking?.status === "declined")
      return "error";
    if (this.booking?.status === "cancelled")
      return "error";
    if (this.booking?.status === "tentative")
      return "warning";
    return "warning";
  }
  constructor(_dialog, _route, _org, _settings, _parking) {
    super();
    this._dialog = _dialog;
    this._route = _route;
    this._org = _org;
    this._settings = _settings;
    this._parking = _parking;
    this.show_day = false;
    this.edit = new EventEmitter();
    this.remove = new EventEmitter();
    this.end = new EventEmitter();
    this.raw_description = "";
    this.is_reserved_parking_space = this._parking.assigned_space.pipe(map((space) => this.booking.booking_type === "parking" && space && this.booking.asset_id === space.id));
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => params.has("booking") && this.booking?.id === params.get("event") ? this.viewDetails() : ""));
  }
  ngOnChanges(changes) {
    if (changes.booking) {
      this.raw_description = this.removeHtmlTags(this.booking?.description);
    }
  }
  get type() {
    if (this.booking?.type === "desk")
      return "desk";
    if (this.booking?.type === "parking")
      return "drive_eta";
    return "book";
  }
  get day() {
    const date = this.booking?.date || Date.now();
    const is_today = isSameDay(Date.now(), date);
    return `${is_today ? i18n("COMMON.TODAY") : format(date, "EEEE")}`;
  }
  get location() {
    const level = this._org.levelWithID(this.booking?.zones || []);
    return `${level?.display_name || level?.name || ""}`;
  }
  get period() {
    if (this.booking?.is_all_day)
      return i18n("COMMON.ALL_DAY");
    const start = this.booking?.date || Date.now();
    const duration = this.booking?.duration || 60;
    const end = addMinutes(start, duration);
    const dur = formatDuration({
      hours: Math.floor(duration / 60),
      minutes: duration % 60
    }).replace(" hour", "hr").replace(" minute", "min");
    return `${format(start, this.time_format)} - ${format(end, this.time_format)} (${dur})`;
  }
  removeHtmlTags(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }
  viewDetails() {
    if (!this.booking)
      return;
    this.timeout("open", () => {
      const view_component = this.booking.booking_type === "group-event" ? GroupEventDetailsModalComponent : BookingDetailsModalComponent;
      const data = this.booking.booking_type === "group-event" ? { booking: this.booking, concierge: false } : this.booking;
      const ref = this._dialog.open(view_component, { data });
      this.subscription("edit", ref.componentInstance.edit?.subscribe(() => this.edit.emit()));
      this.subscription("remove", ref.componentInstance.remove?.subscribe((_) => this.remove.emit(_)));
      this.subscription("end", ref.componentInstance.end?.subscribe(() => this.end.emit()));
    });
  }
  static {
    this.\u0275fac = function BookingCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingCardComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ParkingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingCardComponent, selectors: [["booking-card"]], inputs: { booking: "booking", show_day: "show_day" }, outputs: { edit: "edit", remove: "remove", end: "end" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 4, vars: 2, consts: [["desk_icon", ""], ["class", "mb-2 flex items-center", 4, "ngIf"], ["name", "view-booking-details", "class", "w-full cursor-pointer overflow-hidden relative", 3, "routerLink", "queryParams", "click", 4, "ngIf"], [1, "mb-2", "flex", "items-center"], ["day", "", 4, "ngIf"], [1, "text-xs", "px-2"], ["day", ""], ["name", "view-booking-details", 1, "w-full", "cursor-pointer", "overflow-hidden", "relative", 3, "click", "routerLink", "queryParams"], [1, "w-full", "bg-base-100", "border", "border-base-300", "rounded-xl", "shadow", "py-4", "relative"], [1, "px-4", "text-lg"], [1, "flex", "mx-4", "my-2"], [3, "status"], [1, "flex", "flex-wrap", "flex-col", "sm:flex-row", "sm:divide-x", "divide-base-200-500", "py-2", "space-y-2", "sm:space-y-0"], [1, "flex", "items-center", "px-4", "max-w-[33%]"], [4, "ngIf", "ngIfElse"], [1, "mx-2", "truncate", "flex-1", "w-1/2"], ["class", "flex items-center px-4", 4, "ngIf"], [1, "absolute", "top-1/2", "right-1", "text-4xl", "-translate-y-1/2"], ["class", "absolute top-2 right-2 bg-warning/50 rounded-xl px-2 py-1 text-xs", 4, "ngIf"], [1, "flex", "items-center", "px-4"], [1, "mx-2", "truncate"], [1, "absolute", "top-2", "right-2", "bg-warning/50", "rounded-xl", "px-2", "py-1", "text-xs"], ["src", "assets/icons/desk-outline.svg", 1, "w-5", "h-5"]], template: function BookingCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BookingCardComponent_h4_0_Template, 7, 9, "h4", 1)(1, BookingCardComponent_a_1_Template, 19, 17, "a", 2)(2, BookingCardComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.booking);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.booking);
      }
    }, dependencies: [NgIf, IconComponent, StatusPillComponent, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  position: relative;\n}\n/*# sourceMappingURL=booking-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingCardComponent, { className: "BookingCardComponent", filePath: "libs/bookings/src/lib/booking-card.component.ts", lineNumber: 121 });
})();

// libs/bookings/src/lib/desk-confirm-modal.component.ts
function DeskConfirmModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 4)(1, "i", 5);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function DeskConfirmModalComponent_ng_container_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label");
    \u0275\u0275text(2, "Host");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a-user-search-field", 15);
    \u0275\u0275twoWayListener("ngModelChange", function DeskConfirmModalComponent_ng_container_5_div_2_Template_a_user_search_field_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.host, $event) || (ctx_r2.host = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.host);
  }
}
function DeskConfirmModalComponent_ng_container_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r2.date, "mediumDate"), " ");
  }
}
function DeskConfirmModalComponent_ng_container_5_a_date_field_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a-date-field", 16);
    \u0275\u0275twoWayListener("ngModelChange", function DeskConfirmModalComponent_ng_container_5_a_date_field_7_Template_a_date_field_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.date, $event) || (ctx_r2.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.date);
  }
}
function DeskConfirmModalComponent_ng_container_5_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "label");
    \u0275\u0275text(2, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 18)(4, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function DeskConfirmModalComponent_ng_container_5_div_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.reason, $event) || (ctx_r2.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.reason);
  }
}
function DeskConfirmModalComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "main", 6);
    \u0275\u0275template(2, DeskConfirmModalComponent_ng_container_5_div_2_Template, 4, 1, "div", 7);
    \u0275\u0275elementStart(3, "div", 8)(4, "label");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DeskConfirmModalComponent_ng_container_5_div_6_Template, 3, 4, "div", 9)(7, DeskConfirmModalComponent_ng_container_5_a_date_field_7_Template, 1, 1, "a-date-field", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, DeskConfirmModalComponent_ng_container_5_div_8_Template, 5, 1, "div", 11);
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "footer", 12)(12, "button", 13);
    \u0275\u0275listener("click", function DeskConfirmModalComponent_ng_container_5_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirm());
    });
    \u0275\u0275text(13, "Confirm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.can_set_host);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r2.can_set_date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.can_set_date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.hide_reason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Your desk", ctx_r2.desks.length === 1 ? "" : "s", " will be ", ctx_r2.desk_list, " on ", (ctx_r2.level == null ? null : ctx_r2.level.display_name) || (ctx_r2.level == null ? null : ctx_r2.level.name), " ");
  }
}
function DeskConfirmModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 20);
    \u0275\u0275element(1, "mat-spinner", 21);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.loading);
  }
}
var DeskConfirmModalComponent = class _DeskConfirmModalComponent {
  get desk_list() {
    return this.desks.map((_) => _.name).join(", ");
  }
  get hide_reason() {
    return !!this._settings.get("app.desks.hide_reason");
  }
  get can_set_host() {
    return !!this._settings.get("app.desks.can_book_for_others");
  }
  constructor(_data, _settings) {
    this._data = _data;
    this._settings = _settings;
    this.event = new EventEmitter();
    this.desks = this._data.desks || [];
    this.date = this._data.date;
    this.host = this._data.host;
    this.can_set_date = this._data.can_set_date;
    this.reason = this._data.reason;
    this.level = this._data.level;
  }
  confirm() {
    this.loading = "Requesting desk booking...";
    this.event.emit({ reason: "done" });
  }
  static {
    this.\u0275fac = function DeskConfirmModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskConfirmModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskConfirmModalComponent, selectors: [["desk-flow-confirm-modal-component"]], outputs: { event: "event" }, standalone: false, decls: 8, vars: 3, consts: [["load_state", ""], [1, "flex-1"], ["icon", "", "mat-dialog-close", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["icon", "", "mat-dialog-close", ""], [1, "material-icons"], [1, "p-4"], ["host", "", "class", "flex flex-col", 4, "ngIf"], ["date", "", 1, "mb-4"], [4, "ngIf"], [3, "ngModel", "ngModelChange", 4, "ngIf"], ["reason", "", "class", "flex flex-col mb-4", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["host", "", 1, "flex", "flex-col"], [1, "mb-4", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["reason", "", 1, "flex", "flex-col", "mb-4"], ["appearance", "outline"], ["matInput", "", "placeholder", "Reason", 3, "ngModelChange", "ngModel"], ["load", "", 1, "flex", "flex-col", "p-12", "items-center", "justify-center"], [1, "mb-4", 3, "diameter"]], template: function DeskConfirmModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h2");
        \u0275\u0275text(2, "Confirm Booking");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 1);
        \u0275\u0275template(4, DeskConfirmModalComponent_button_4_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, DeskConfirmModalComponent_ng_container_5_Template, 14, 7, "ng-container", 3)(6, DeskConfirmModalComponent_ng_template_6_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r6 = \u0275\u0275reference(7);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r6);
      }
    }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatInput, MatFormField, MatDialogClose, MatProgressSpinner, DateFieldComponent, UserSearchFieldComponent, MatRipple, DatePipe], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n/*# sourceMappingURL=desk-confirm-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskConfirmModalComponent, { className: "DeskConfirmModalComponent", filePath: "libs/bookings/src/lib/desk-confirm-modal.component.ts", lineNumber: 85 });
})();

// libs/bookings/src/lib/desk-questions-modal.component.ts
function DeskQuestionsModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h2", 3);
    \u0275\u0275text(2, "COVID-19 Questionnaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "main", 4)(4, "div", 5)(5, "label");
    \u0275\u0275text(6, " Have you travelled overseas within the last 14 days?");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-radio-group", 6)(10, "mat-radio-button", 7);
    \u0275\u0275text(11, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-radio-button", 7);
    \u0275\u0275text(13, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 5)(15, "label");
    \u0275\u0275text(16, " Are you unwell or experiencing any cold or flu-like symptoms?");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-radio-group", 8)(20, "mat-radio-button", 7);
    \u0275\u0275text(21, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-radio-button", 7);
    \u0275\u0275text(23, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 9)(25, "label");
    \u0275\u0275text(26, " Have you had contact with anyone with suspected COVID-19?");
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-radio-group", 10)(30, "mat-radio-button", 7);
    \u0275\u0275text(31, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-radio-button", 7);
    \u0275\u0275text(33, "No");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "footer", 11)(35, "button", 12);
    \u0275\u0275listener("click", function DeskQuestionsModalComponent_div_0_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(36, "Submit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 13)(38, "i", 14);
    \u0275\u0275text(39, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
  }
}
function DeskQuestionsModalComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 15)(1, "p", 16);
    \u0275\u0275text(2, " Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 13)(4, "i", 14);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
}
var DeskQuestionsModalComponent = class _DeskQuestionsModalComponent {
  constructor() {
    this.event = new EventEmitter();
    this.form = new FormGroup({
      travelled: new FormControl(false),
      unwell: new FormControl(false),
      contact: new FormControl(false)
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (Object.keys(this.form.value).find((key) => this.form.value[key] === true || this.form.value[key] === "true")) {
      this.failure = true;
      return;
    }
    this.event.emit({ reason: "done" });
  }
  static {
    this.\u0275fac = function DeskQuestionsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskQuestionsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskQuestionsModalComponent, selectors: [["desk-question-modal"]], outputs: { event: "event" }, standalone: false, decls: 3, vars: 2, consts: [["fail_state", ""], ["class", "relative", 4, "ngIf", "ngIfElse"], [1, "relative"], [1, "p-4", "text-xl"], [1, "p-4", 3, "formGroup"], [1, "flex", "flex-col", "mb-4"], ["formControlName", "travelled", 1, "space-x-2"], [3, "value"], ["formControlName", "unwell", 1, "space-x-2"], [1, "flex", "flex-col"], ["formControlName", "contact", 1, "space-x-2"], [1, "flex", "justify-center", "items-center", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["close", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "material-icons"], ["failure", "", 1, "pt-8", "relative"], [1, "p-4"]], template: function DeskQuestionsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DeskQuestionsModalComponent_div_0_Template, 40, 7, "div", 1)(1, DeskQuestionsModalComponent_ng_template_1_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const fail_state_r3 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", !ctx.failure)("ngIfElse", fail_state_r3);
      }
    }, dependencies: [NgIf, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatRadioGroup, MatRadioButton, MatDialogClose, MatRipple], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskQuestionsModalComponent, { className: "DeskQuestionsModalComponent", filePath: "libs/bookings/src/lib/desk-questions-modal.component.ts", lineNumber: 85 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-details.component.ts
var _c03 = () => [];
var _c13 = () => ({ disable_pan: true, disable_zoom: true });
function DeskDetailsComponent_ng_container_0_image_carousel_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "image-carousel", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("images", ctx_r1.desk.images);
  }
}
function DeskDetailsComponent_ng_container_0_section_33_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r3);
  }
}
function DeskDetailsComponent_ng_container_0_section_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19)(1, "h2", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DeskDetailsComponent_ng_container_0_section_33_div_4_Template, 3, 1, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.FEATURES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.desk.features || \u0275\u0275pureFunction0(4, _c03));
  }
}
function DeskDetailsComponent_ng_container_0_section_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 23);
    \u0275\u0275element(1, "interactive-map", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.map_url)("focus", ctx_r1.desk.map_id || ctx_r1.desk.id)("features", ctx_r1.features)("options", \u0275\u0275pureFunction0(4, _c13));
  }
}
function DeskDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 2);
    \u0275\u0275template(2, DeskDetailsComponent_ng_container_0_image_carousel_2_Template, 1, 1, "image-carousel", 3);
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function DeskDetailsComponent_ng_container_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function DeskDetailsComponent_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 6)(10, "section", 7)(11, "h2", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "section", 9)(14, "h2", 10);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 11)(18, "app-icon");
    \u0275\u0275text(19, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 11)(24, "app-icon");
    \u0275\u0275text(25, "desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 11)(29, "app-icon");
    \u0275\u0275text(30, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, DeskDetailsComponent_ng_container_0_section_33_Template, 5, 5, "section", 12)(34, DeskDetailsComponent_ng_container_0_section_34_Template, 2, 5, "section", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 14)(36, "button", 15);
    \u0275\u0275listener("click", function DeskDetailsComponent_ng_container_0_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.active = !ctx_r1.active;
      return \u0275\u0275resetView(ctx_r1.activeChange.emit(ctx_r1.active));
    });
    \u0275\u0275elementStart(37, "div", 16)(38, "app-icon", 17);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:h-64", ctx_r1.desk.images == null ? null : ctx_r1.desk.images.length)("h-40", ctx_r1.desk.images == null ? null : ctx_r1.desk.images.length)("sm:h-0", !(ctx_r1.desk.images == null ? null : ctx_r1.desk.images.length))("h-12", !(ctx_r1.desk.images == null ? null : ctx_r1.desk.images.length))("!bg-transparent", !(ctx_r1.desk.images == null ? null : ctx_r1.desk.images.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.desk.images == null ? null : ctx_r1.desk.images.length);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-info-content", ctx_r1.fav)("!bg-info", ctx_r1.fav);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fav ? "favorite" : "favorite_border");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.desk.display_name || ctx_r1.desk.name || ctx_r1.desk.id, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 27, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 29, "BOOKINGS.DESK_COUNT_LONE"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.desk.display_name || ctx_r1.desk.name || ctx_r1.desk.id, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.desk.zone == null ? null : ctx_r1.desk.zone.display_name) || (ctx_r1.desk.zone == null ? null : ctx_r1.desk.zone.name));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.desk.features == null ? null : ctx_r1.desk.features.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hide_map);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx_r1.active);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.active ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 31, ctx_r1.active ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
  }
}
function DeskDetailsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "p", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.DESK_SELECT_MSG"), " ");
  }
}
var DeskDetailsComponent = class _DeskDetailsComponent {
  constructor() {
    this.fav = false;
    this.active = false;
    this.hide_map = false;
    this.close = new EventEmitter();
    this.toggleFav = new EventEmitter();
    this.activeChange = new EventEmitter();
    this.map_url = "";
    this.features = [];
  }
  ngOnChanges(changes) {
    if (changes.desk && this.desk) {
      this.updateFeature();
    }
  }
  updateFeature() {
    this.map_url = this.desk.zone.map_id;
    this.features = [
      {
        location: this.desk.map_id || this.desk.id,
        content: MapPinComponent
      }
    ];
  }
  static {
    this.\u0275fac = function DeskDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskDetailsComponent, selectors: [["desk-details"]], inputs: { desk: "desk", fav: "fav", active: "active", hide_map: "hide_map" }, outputs: { close: "close", toggleFav: "toggleFav", activeChange: "activeChange" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 2, consts: [["emptyState", ""], [4, "ngIf", "ngIfElse"], ["image", "", 1, "relative", "w-full", "bg-base-300"], ["class", "absolute inset-0", 3, "images", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "close-desk-details", 1, "absolute", "top-2", "left-2", "bg-base-200", "sm:hidden", "text-base-content", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite-details", 1, "absolute", "top-2", "right-2", "bg-base-200", 3, "click"], [1, "p-2", "space-y-2", "flex-1", "h-[calc(100%-19.75rem)]", "overflow-auto"], ["actions", "", 1, "z-0", "pb-2", "border-b"], [1, "text-xl", "font-medium", "mb-2", "mt-4"], ["details", "", 1, "space-y-2", "pb-2", "border-b"], [1, "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["facilities", "", "class", "space-y-2 pb-2 border-b", 4, "ngIf"], ["map", "", "class", "w-full mx-auto h-64 sm:h-48 relative border border-base-200 overflow-hidden rounded", 4, "ngIf"], [1, "px-2", "pt-2", "pb-[5.5rem]", "border-t", "border-base-200", "shadow", "sm:hidden"], ["btn", "", "matRipple", "", "name", "toggle-desk-details", 1, "w-full", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "text-2xl"], [1, "absolute", "inset-0", 3, "images"], ["facilities", "", 1, "space-y-2", "pb-2", "border-b"], ["class", "flex items-center flex-wrap space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "flex-wrap", "space-x-2"], ["for", "feat", 1, "flex-1", "w-1/2"], ["map", "", 1, "w-full", "mx-auto", "h-64", "sm:h-48", "relative", "border", "border-base-200", "overflow-hidden", "rounded"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"]], template: function DeskDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DeskDetailsComponent_ng_container_0_Template, 43, 33, "ng-container", 1)(1, DeskDetailsComponent_ng_template_1_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const emptyState_r4 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.desk)("ngIfElse", emptyState_r4);
      }
    }, dependencies: [NgForOf, NgIf, IconComponent, InteractiveMapComponent, ImageCarouselComponent, MatRipple, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 20rem;\n  height: 100%;\n  min-height: 65vh;\n  background: white;\n}\n/*# sourceMappingURL=desk-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskDetailsComponent, { className: "DeskDetailsComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-details.component.ts", lineNumber: 163 });
})();

// libs/bookings/src/lib/booking-link-modal.component.ts
var BookingLinkModalComponent = class _BookingLinkModalComponent {
  constructor(_event, _settings) {
    this._event = _event;
    this._settings = _settings;
    this.outlook_link = generateMicrosoftCalendarLink(this._event);
    this.google_link = generateGoogleCalendarLink(this._event);
    this.ical_link = generateCalendarFileLink(this._event);
  }
  static {
    this.\u0275fac = function BookingLinkModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingLinkModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingLinkModalComponent, selectors: [["booking-link-modal"]], standalone: false, decls: 22, vars: 12, consts: [[1, "p-4", "w-full", "pb-2"], [1, "flex", "flex-col", "items-center", "space-y-4", "p-4", "relative"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferer", 1, "flex", "items-center", "p-2", "space-x-2", "pr-4", "w-64", "rounded", "inverse", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"], ["icon", "", "mat-dialog-close", "", 1, "absolute", "top-2", "right-0"]], template: function BookingLinkModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "Add event to your calendar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 1)(3, "a", 2);
        \u0275\u0275pipe(4, "sanitize");
        \u0275\u0275element(5, "img", 3);
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7, "Create in Outlook");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "a", 2);
        \u0275\u0275pipe(9, "sanitize");
        \u0275\u0275element(10, "img", 4);
        \u0275\u0275elementStart(11, "span");
        \u0275\u0275text(12, "Create in Google Calendar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "a", 2);
        \u0275\u0275pipe(14, "safe");
        \u0275\u0275elementStart(15, "app-icon", 5);
        \u0275\u0275text(16, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span");
        \u0275\u0275text(18, "Download iCal File");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "button", 6)(20, "app-icon");
        \u0275\u0275text(21, "close");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("href", \u0275\u0275pipeBind2(4, 3, ctx.outlook_link, "url"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(5);
        \u0275\u0275property("href", \u0275\u0275pipeBind2(9, 6, ctx.google_link, "url"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(5);
        \u0275\u0275property("href", \u0275\u0275pipeBind2(14, 9, ctx.ical_link, "url"), \u0275\u0275sanitizeUrl);
      }
    }, dependencies: [MatDialogClose, IconComponent, MatRipple, SafePipe, SanitizePipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingLinkModalComponent, { className: "BookingLinkModalComponent", filePath: "libs/bookings/src/lib/booking-link-modal.component.ts", lineNumber: 63 });
})();

// libs/bookings/src/lib/booking-form.service.ts
var BOOKING_TYPES = ["desk", "parking", "locker", "catering"];
var BookingFormService = class _BookingFormService extends AsyncHandler {
  get view() {
    return this._view.getValue();
  }
  get booking() {
    return this._booking.getValue();
  }
  resourceUserName(id) {
    return this._resource_use[id];
  }
  newForm(booking = new Booking({
    all_day: this._settings.get("app.bookings.all_day_default")
  })) {
    this.form.reset();
    this.form.patchValue(cleanObject(__spreadValues(__spreadValues({}, booking), booking.extension_data), [null, void 0, ""]));
    this.subscription("form_change", this.form.valueChanges.subscribe(() => {
      const { date, duration } = this.form.getRawValue();
      this._assets.setOptions({ date, duration });
      this.storeForm();
    }));
    this.timeout("date", () => this.form.patchValue({
      date: booking.date,
      duration: booking.duration
    }));
    this._booking.next(new Booking(booking));
    this._options.next({ type: this._options.getValue().type });
  }
  constructor(_router, _settings, _org, _dialog, _payments, _assets) {
    super();
    this._router = _router;
    this._settings = _settings;
    this._org = _org;
    this._dialog = _dialog;
    this._payments = _payments;
    this._assets = _assets;
    this._view = new BehaviorSubject("form");
    this._options = new BehaviorSubject({
      type: "desk"
    });
    this._booking = new BehaviorSubject(null);
    this._resource_use = {};
    this._loading = new BehaviorSubject("");
    this.last_success = new Booking(JSON.parse(sessionStorage.getItem("PLACEOS.last_booked_booking") || "{}"));
    this.loading = this._loading.asObservable();
    this.options = this._options.pipe(shareReplay(1));
    this.form = generateBookingForm();
    this.resources = combineLatest([
      this._org.active_building,
      this.options.pipe(distinctUntilKeyChanged("type"))
    ]).pipe(debounceTime(300), switchMap(([bld, { type }]) => {
      if (!bld)
        return of([]);
      const useRegion = () => this._settings.get("app.use_region");
      switch (type) {
        case "desk":
          this._loading.next(i18n("BOOKINGS.DESKS_LOADING"));
          return this.loadResourceList("desks");
        case "parking":
          this._loading.next(i18n("BOOKINGS.PARKING_LOADING"));
          return this.loadResourceList("parking-spaces");
        case "locker":
          this._loading.next(i18n("BOOKINGS.LOCKERS_LOADING"));
          return loadLockers(this._org, of([bld]), loadLockerBanks(this._org, of([bld]), useRegion), useRegion);
      }
      return of([]);
    }), tap(() => this._loading.next(``)), shareReplay(1));
    this.features = this.resources.pipe(map((resource) => {
      const list = [];
      for (const { features } of resource) {
        features instanceof Array ? features.forEach((_) => list.push(_)) : null;
      }
      return unique(list).sort((a, b) => a.localeCompare(b));
    }), shareReplay(1));
    this.booking_rules = combineLatest([this._org.building_list, this._options]).pipe(switchMap(([list, { type }]) => Promise.all(list.map((bld) => showMetadata(bld.id, `${type}_booking_rules`).toPromise()))), map((building_rules) => {
      const mapping = {};
      for (const rules of building_rules) {
        mapping[rules.id] = rules.details instanceof Array ? rules.details : [];
      }
      return mapping;
    }), shareReplay(1));
    this.available_resources = combineLatest([
      this.options,
      this.resources,
      this.booking_rules,
      merge(this.form.get("date").valueChanges, timer(1e3)),
      merge(this.form.get("duration").valueChanges, timer(1e3))
    ]).pipe(filter(() => this.form.getRawValue().date > 0 && this.form.getRawValue().duration > 0), debounceTime(500), tap(([{ type }]) => this._loading.next(i18n("BOOKINGS.LOADING_AVAILABILITY", { type }))), switchMap(([options, resources, restrictions]) => {
      let { all_day, date, duration, user } = this.form.getRawValue();
      if (all_day) {
        date = startOfDay(date).valueOf();
        duration = 24 * 60 - 1;
      }
      return bookedResourceList({
        period_start: getUnixTime(date),
        period_end: getUnixTime(addMinutes(date, duration)),
        type: options.type,
        zones: options.zone_id || (this._settings.get("app.use_region") ? this._org.region?.id : this._org.building?.id) || this._org.organisation.id
      }).pipe(map((booked_ids) => {
        const start = this.form.getRawValue().date;
        const end = addMinutes(start, this.form.getRawValue().duration).valueOf();
        this._resource_use = {};
        for (const id of booked_ids) {
          this._resource_use[id] = " ";
        }
        const available = resources.filter((asset) => {
          const is_restricted = rulesForResource({
            date,
            duration,
            resource: asset,
            host: user || currentUser()
          }, restrictions[asset.zone?.id] || restrictions[asset.zone?.parent_id] || restrictions[this._org.building.id] || []).hidden;
          return !is_restricted && (!asset.groups?.length || asset.groups.some((grp) => currentUser().groups.includes(grp))) && asset.bookable !== false && (!options.features || options.features?.every((_) => asset.features.includes(_))) && (!options.zone_id || options.zone_id === asset.zone?.id || options.zone_id === asset.zone?.parent_id) && !booked_ids.includes(asset.id);
        });
        console.log("Resources:", resources, available);
        return available;
      }, catchError(() => of([]))));
    }), tap(() => this._loading.next("")), shareReplay(1));
    this.grouped_availability = combineLatest([
      this.options,
      this.available_resources
    ]).pipe(map(([options, resource]) => {
      const groups = [];
      const asset_list = [...resource].sort((a, b) => a.zone?.id?.localeCompare(b.zone?.id));
      const members = options.members?.length ? options.members : [currentUser()];
      while (asset_list.length) {
        const group = [];
        let asset = asset_list.pop();
        while (group.length < members.length) {
          if (group.length && !group.find((_) => _.zone?.id === asset.zone?.id)) {
            break;
          }
          group.push(asset);
          asset = asset_list.pop();
        }
        if (group.length < members.length)
          continue;
        groups.push(group);
      }
      return groups;
    }));
    this.subscription("router.bookings", this._router.events.subscribe((booking) => {
      if (booking instanceof NavigationEnd && !booking.url.includes("book") && !BOOKING_TYPES.find((_) => booking.url.includes(_))) {
        this.clearForm();
      }
    }));
    this._org.initialised.pipe(first((_) => _)).subscribe(() => this.setOptions({}));
  }
  setView(value) {
    this._view.next(value);
  }
  setOptions(value) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), value));
  }
  setFeature(feature, enable) {
    if (!feature?.length)
      return;
    const features = this._options.getValue()?.features || [];
    if (enable && !features.includes(feature))
      features.push(feature);
    if (!enable && features.includes(feature))
      features.splice(features.findIndex((e) => e === feature), 1);
    this.setOptions({ features });
  }
  resetForm() {
    if (!sessionStorage.getItem("PLACEOS.booking_form")) {
      return this.newForm();
    }
    const booking = this._booking.getValue();
    this.form.reset({ user: currentUser(), booked_by: currentUser() });
    this.form.patchValue(cleanObject(__spreadValues(__spreadValues({}, booking || {}), booking?.extension_data || {}), [null, void 0, ""]));
    this._options.next({ type: this._options.getValue().type });
  }
  clearForm() {
    sessionStorage.removeItem("PLACEOS.booking_form");
    sessionStorage.removeItem("PLACEOS.booking_form_options");
    this.newForm();
  }
  storeForm() {
    sessionStorage.setItem("PLACEOS.booking_form", JSON.stringify(__spreadValues(__spreadValues({}, this._booking.getValue()), cleanObject(this.form.getRawValue() || {}, [
      null,
      void 0,
      ""
    ]))));
    sessionStorage.setItem("PLACEOS.booking_form_filters", JSON.stringify(this._options.getValue() || {}));
  }
  loadForm() {
    this.form.reset({ user: currentUser(), booked_by: currentUser() });
    const data = JSON.parse(sessionStorage.getItem("PLACEOS.booking_form") || "{}");
    const booking = new Booking(data);
    this._booking.next(booking);
    const booking_data = cleanObject(__spreadValues(__spreadValues(__spreadValues({}, data), booking || {}), booking?.extension_data || {}), [null, void 0, ""]);
    this.form.patchValue(booking_data);
    this.setOptions(__spreadValues({}, JSON.parse(sessionStorage.getItem("PLACEOS.booking_form_filters") || "{}")));
  }
  clearOldState() {
    sessionStorage.removeItem("PLACEOS.last_booked_booking");
    this.last_success = new Booking();
  }
  openBookingLinkModal(force = false) {
    this.form.markAllAsTouched();
    if (!this.form.valid && !force)
      return;
    const event = new Booking(__spreadValues(__spreadValues({}, this.booking), this.form.getRawValue()));
    this._dialog.open(BookingLinkModalComponent, { data: event });
  }
  confirmPost() {
    return __async(this, null, function* () {
      yield this.checkQuestions();
      const options = this._options.getValue();
      const value = this.form.getRawValue();
      const content = i18n(options.group ? "BOOKINGS.CONFIRM_MSG_GROUP" : "BOOKINGS.CONFIRM_MSG", {
        type: options.type,
        date: format(value.date, "dd MMM yyyy") + (value.duration < 12 * 60 ? " at " + format(value.date, "h:mm a") : "")
      });
      const details = yield openConfirmModal({
        title: i18n("BOOKINGS.CONFIRM_TITLE", { type: options.type }),
        content,
        icon: { content: "event_available" }
      }, this._dialog);
      if (details?.reason !== "done")
        throw "User cancelled";
      details.loading(i18n("BOOKINGS.CONFIRM_LOADING"));
      if (options.group) {
        yield this.postFormForGroup().catch((_) => {
          notifyError(JSON.stringify(_));
          details.close();
          throw _;
        });
      } else
        yield this.postForm().catch((_) => {
          notifyError(JSON.stringify(_));
          details.close();
          throw _;
        });
      details.close();
    });
  }
  postForm(ignore_check = false) {
    return __async(this, null, function* () {
      if (!this.form)
        throw "No form for booking";
      if (!this.form.valid)
        throw `Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`;
      this.form.patchValue({
        booking_type: this.form.getRawValue().booking_type || this._options.getValue().type
      });
      const value = this.form.getRawValue();
      const booking = this._booking.getValue() || new Booking();
      if (!ignore_check) {
        yield this.checkResourceAvailable(__spreadProps(__spreadValues(__spreadValues({}, booking), value), {
          user_email: value.user?.email || value.user_email || currentUser()?.email
        }), this._options.getValue().type);
      }
      if (this._payments.enabled) {
        const receipt = yield this._payments.makePayment({
          type: this._options.getValue().type,
          resource_name: value.asset_name,
          date: value.date,
          duration: value.duration,
          all_day: value.all_day
        });
        if (!receipt?.success)
          return;
        value.extension_data = {
          invoice: receipt,
          invoice_id: receipt.invoice_id
        };
      }
      value.zones = unique([
        ...value?.zones || [],
        ...this._booking.getValue()?.zones || [],
        ...value.booking_asset?.zones || []
      ].filter((_) => _));
      this._loading.next("Saving booking");
      console.log("Zones:", value.zones, __spreadValues({}, value));
      delete value.booking_asset;
      if (value.all_day) {
        value.date = startOfDay(value.date).valueOf();
        value.duration = 24 * 60 - 1;
      }
      const { event_id, parent_id } = value;
      delete value.event_id;
      const resources = value.resources || [];
      const zone = this._org.levelWithID(resources[0]?.zone_id) || resources[0]?.zone;
      const zones = zone && zone instanceof Object ? unique([
        this._org.organisation.id,
        this._org.region?.id,
        zone.parent_id,
        zone.id
      ]) : [this._org.organisation.id, this._org.region?.id];
      const q = event_id ? { ical_uid: value.ical_uid, event_id } : parent_id ? { booking_id: parent_id } : {};
      if (booking.instance && !value.update_master) {
        q.instance = true;
        q.start_time = booking.booking_start;
      }
      const result = yield saveBooking(new Booking(__spreadProps(__spreadValues(__spreadValues({}, this._options.getValue()), value), {
        description: value.asset_name || value.description,
        user_name: value.user?.name || value.user_name,
        user_email: value.user?.email || value.user_email,
        extension_data: __spreadProps(__spreadValues({}, value.extension_data || {}), {
          assets: value.assets.map((_) => _.toJSON()),
          group: value.group,
          phone: value.phone,
          department: value.user?.department || currentUser()?.department
        }),
        approved: this._settings.get("app.bookings.no_approval") === true,
        zones: unique([...zones, ...value.zones || []]).filter((_) => _)
      })), q).toPromise().catch((e) => {
        this._loading.next("");
        throw e?.error || e;
      });
      if (value.assets?.length || booking.extension_data.assets?.length) {
        const requests = yield validateAssetRequestsForResource(__spreadProps(__spreadValues({}, result), { from_booking: true }), {
          date: value.date,
          duration: value.duration,
          all_day: value.all_day,
          host: value.booked_by_email,
          zones: unique([...zones, ...value.zones || []]).filter((_) => _)
        }, value.assets).catch((e) => {
          console.error("Couldn't update asset requests", e);
          if (e?.status === 409) {
            notifyError(i18n("BOOKINGS.ASSETS_CLASH_ERROR"));
          }
          this._loading.next("");
          throw e?.error || e;
        });
        if (!requests)
          throw i18n("BOOKINGS.ASSETS_INVALID_ERROR");
        yield requests();
      }
      this._loading.next("");
      const { booking_type } = value;
      this.clearForm();
      this.form?.patchValue({ booking_type });
      this.last_success = result;
      sessionStorage.setItem("PLACEOS.last_booked_booking", JSON.stringify(result));
      this.setView("success");
      return result;
    });
  }
  postFormForGroup() {
    return __async(this, null, function* () {
      const { members, group, type } = this._options.getValue();
      if (!group)
        throw i18n("BOOKINGS.GROUP_NOT_SET");
      const extra_members = members.filter((_) => _.email !== currentUser().email);
      if (extra_members.length <= 0)
        throw i18n("BOOKINGS.GROUP_NO_MEMBERS");
      const form = this.form.getRawValue();
      const asset_list = yield this.available_resources.pipe(take(1)).toPromise();
      const active_resource = asset_list.find((_) => _.id === form.asset_id || _.map_id === form.asset_id);
      const level = this._org.levelWithID([active_resource.zone?.id]);
      const resources = [
        active_resource,
        ...yield this._getNearbyResources(level.map_id, form.asset_id, asset_list, extra_members.length)
      ];
      const group_members = unique([currentUser(), ...extra_members], "email");
      const available = yield Promise.all(group_members.map((_, idx) => this.checkResourceAvailable(__spreadProps(__spreadValues({}, form), {
        asset_id: resources[idx].map_id || resources[idx].id,
        user_email: _.email
      }), type)));
      const unavailable = group_members.filter((_, idx) => !available[idx]);
      const group_name = `${currentUser().email}[${format(Date.now(), "yyyy-MM-dd")}]`;
      let id = "";
      for (let i = 0; i < group_members.length; i++) {
        if (!available[i])
          continue;
        const user = group_members[i];
        const asset = resources[i];
        this.form.patchValue(__spreadProps(__spreadValues({}, form), {
          parent_id: id,
          user,
          user_email: user.email,
          user_id: user.id,
          asset_id: asset?.id,
          asset_name: asset.name,
          description: asset.name,
          map_id: asset?.map_id || asset?.id,
          group: group_name,
          zones: (asset.zone ? unique([
            this._org.organisation.id,
            this._org.region?.id,
            asset?.zone?.parent_id,
            asset?.zone?.id
          ]) : [this._org.organisation.id, this._org.region?.id]).filter((_) => _)
        }));
        const bkn = yield this.postForm(true);
        if (bkn.id && !id)
          id = bkn.id;
      }
      if (unavailable.length) {
        notifyWarn(i18n("BOOKINGS.GROUP_SOME_HAVE_BOOKINGS", {
          members: unavailable.map((_) => _.name || _.email)?.join(", ")
        }));
      }
    });
  }
  checkQuestions() {
    return __async(this, null, function* () {
      if (this._settings.get("app.desks.ignore_questions") !== false)
        return;
      const ref = this._dialog.open(DeskQuestionsModalComponent);
      const result = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (result?.reason !== "done")
        throw "User cancelled";
      const form = ref.componentInstance.form.getRawValue();
      for (const key in form) {
        if (form[key])
          throw "User failed questionaire";
      }
      ref.close();
    });
  }
  /** Check if the given resource is available for the selected user to book */
  checkResourceAvailable(_0, _1) {
    return __async(this, arguments, function* ({ id, asset_id, date, duration, user_email }, type) {
      if (!user_email)
        throw i18n("BOOKINGS.NO_USER");
      if (type === "group-event")
        return true;
      const bookings = yield queryBookings({
        period_start: getUnixTime(date),
        period_end: getUnixTime(date + duration * 60 * 1e3),
        type,
        email: user_email,
        limit: 1e3
      }).toPromise();
      const active_bookings = bookings.filter((_) => _.status !== "declined" && _.status !== "cancelled" && !_.rejected);
      if (active_bookings.find((_) => _.asset_id === asset_id && id !== _.id)) {
        throw i18n(asset_id.includes("@") ? "BOOKINGS.VISITOR_BOOKED" : "BOOKINGS.RESOURCE_BOOKED", { name: asset_id });
      }
      const allowed_bookings = this._settings.get(`app.bookings.allowed_daily_${type}_count`) ?? 1;
      if (allowed_bookings > 0 && active_bookings.filter((_) => _.user_email.toLowerCase() === (user_email || currentUser()?.email || "").toLowerCase() && _.id !== id).length >= allowed_bookings) {
        const current = user_email === currentUser()?.email;
        throw i18n(current ? "BOOKINGS.CLASH_CURRENT_USER" : "BOOKINGS.CLASH_OTHER_USER", { name: user_email });
      }
      return true;
    });
  }
  loadResourceList(type) {
    const use_region = this._settings.get("app.use_region");
    const map_metadata = (_) => (_?.metadata[type]?.details instanceof Array ? _.metadata[type].details : []).map((d) => __spreadProps(__spreadValues({}, d), {
      id: d.id || d.map_id,
      zone: _.zone
    }));
    const id = use_region ? this._org.building.parent_id : this._org.building.id;
    if (use_region) {
      const id2 = this._org.building.parent_id;
      const buildings = this._org.buildings.filter((_) => _.parent_id === id2);
      return forkJoin(buildings.map((_) => listChildMetadata(_.id, { name: type }).pipe(map((data) => flatten(data.map(map_metadata)))))).pipe(map((_) => flatten(_)));
    }
    return listChildMetadata(id, {
      name: type
    }).pipe(map((data) => flatten(data.map(map_metadata))));
  }
  _getNearbyResources(map_url, id, resources, count) {
    return __async(this, null, function* () {
      const nearby_resources = [];
      let asset_list = resources.filter((_) => _.id !== id && _.map_id !== id);
      for (let i = 0; i < count; i++) {
        const item = yield findNearbyFeature(map_url, id, asset_list.map((_) => _.map_id || _.id));
        if (item) {
          nearby_resources.push(resources.find((_) => _.id === item || _.map_id === item));
          asset_list = asset_list.filter((_) => _.id !== item && _.map_id !== item);
        }
      }
      return nearby_resources;
    });
  }
  static {
    this.\u0275fac = function BookingFormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingFormService)(\u0275\u0275inject(Router), \u0275\u0275inject(SettingsService), \u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(PaymentsService), \u0275\u0275inject(AssetStateService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookingFormService, factory: _BookingFormService.\u0275fac, providedIn: "root" });
  }
};

// libs/bookings/src/lib/desk-select-modal/desk-filters.component.ts
var _c04 = () => ({ standalone: true });
var _c14 = () => [];
function DeskFiltersComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function DeskFiltersComponent_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "keyboard_arrow_left");
    \u0275\u0275elementEnd()();
  }
}
function DeskFiltersComponent_mat_form_field_16_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r4 = ctx.$implicit;
    \u0275\u0275property("value", reg_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r4.display_name || reg_r4.name, " ");
  }
}
function DeskFiltersComponent_mat_form_field_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 23)(1, "mat-select", 24);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_mat_form_field_16_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275template(3, DeskFiltersComponent_mat_form_field_16_mat_option_3_Template, 2, 2, "mat-option", 25);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(8, _c04))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 6, ctx_r1.regions));
  }
}
function DeskFiltersComponent_mat_form_field_18_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r6 = ctx.$implicit;
    \u0275\u0275property("value", bld_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r6.display_name || bld_r6.name, " ");
  }
}
function DeskFiltersComponent_mat_form_field_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 23)(1, "mat-select", 27);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_mat_form_field_18_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275template(5, DeskFiltersComponent_mat_form_field_18_mat_option_5_Template, 2, 2, "mat-option", 25);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(2, 4, ctx_r1.building))("ngModelOptions", \u0275\u0275pureFunction0(12, _c04))("placeholder", ((tmp_3_0 = \u0275\u0275pipeBind1(3, 6, ctx_r1.building)) == null ? null : tmp_3_0.display_name) || ((tmp_3_0 = \u0275\u0275pipeBind1(4, 8, ctx_r1.building)) == null ? null : tmp_3_0.name));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 10, ctx_r1.buildings));
  }
}
function DeskFiltersComponent_mat_form_field_20_mat_option_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const lvl_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = \u0275\u0275pipeBind1(2, 1, lvl_r8.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function DeskFiltersComponent_mat_form_field_20_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26)(1, "div", 29);
    \u0275\u0275template(2, DeskFiltersComponent_mat_form_field_20_mat_option_4_div_2_Template, 5, 3, "div", 30);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r8.display_name || lvl_r8.name, " ");
  }
}
function DeskFiltersComponent_mat_form_field_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 23)(1, "mat-select", 28);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_mat_form_field_20_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275template(4, DeskFiltersComponent_mat_form_field_20_mat_option_4_Template, 5, 3, "mat-option", 25);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(2, 4, ctx_r1.options)) == null ? null : tmp_1_0.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(10, _c04))("placeholder", \u0275\u0275pipeBind1(3, 6, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 8, ctx_r1.levels));
  }
}
function DeskFiltersComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "mat-checkbox", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.ALL_DAY"), " ");
  }
}
function DeskFiltersComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 37);
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_div_29_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-duration-field", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(16, _c04))("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("time", (tmp_7_0 = ctx_r1.form.get("date")) == null ? null : tmp_7_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
  }
}
function DeskFiltersComponent_section_40_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-checkbox", 43);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_section_40_div_4_Template_mat_checkbox_ngModelChange_3_listener($event) {
      const feat_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r11, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const feat_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r11);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (((tmp_4_0 = \u0275\u0275pipeBind1(4, 3, ctx_r1.options)) == null ? null : tmp_4_0.features) || \u0275\u0275pureFunction0(5, _c14)).includes(feat_r11))("ngModelOptions", \u0275\u0275pureFunction0(6, _c04));
  }
}
function DeskFiltersComponent_section_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 39)(1, "h2", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DeskFiltersComponent_section_40_div_4_Template, 5, 7, "div", 40);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.TYPE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 4, ctx_r1.features));
  }
}
function DeskFiltersComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "button", 45);
    \u0275\u0275listener("click", function DeskFiltersComponent_div_42_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.APPLY"), " ");
  }
}
var DeskFiltersComponent = class _DeskFiltersComponent {
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get region() {
    return this._org.region;
  }
  set region(reg) {
    this._org.region = reg;
  }
  get allow_time_changes() {
    return !!this._settings.get("app.desks.allow_time_changes");
  }
  get allow_all_day() {
    return this.allow_time_changes && !!this._settings.get("app.desks.allow_all_day");
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.desks.available_period") || 90));
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get use_region() {
    return this._settings.get("app.use_region");
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  constructor(_bsheet_ref, _state, _org, _settings) {
    this._bsheet_ref = _bsheet_ref;
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.can_close = false;
    this.options = this._state.options;
    this.features = this._state.features;
    this.buildings = this._org.active_buildings;
    this.form = this._state.form;
    this.regions = this._org.region_list;
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking"));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.close = () => this._bsheet_ref.dismiss();
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setLevel = (l) => {
    };
    this.setRegion = (r) => this._org.region = r;
    this.can_close = !!this._bsheet_ref;
  }
  static {
    this.\u0275fac = function DeskFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskFiltersComponent)(\u0275\u0275directiveInject(MatBottomSheetRef, 8), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFiltersComponent, selectors: [["desk-filters"]], inputs: { hide_levels: "hide_levels" }, standalone: false, decls: 43, vars: 46, consts: [[1, "flex", "rounded-t-md", "items-center", "border-b", "border-base-200", "pb-2", "sm:hidden"], [1, "flex-1", "pl-2"], ["icon", "", "matRipple", "", "name", "close-desk-filters", "class", "sm:hidden", 3, "click", 4, "ngIf"], [1, "font-medium", "flex-2", "text-center"], [1, "flex-1"], [1, "max-h-[65vh]", "p-2", "overflow-y-auto", "overflow-x-hidden", "divide-y", "divide-base-200", "w-full", "max-w-[100vw]", "sm:max-w-[30vw]", 3, "formGroup"], ["details", ""], [1, "text-lg", "font-medium", "mb-1"], [1, "flex-1", "min-w-[8rem]", "flex", "flex-col"], ["for", "location"], ["appearance", "outline", "class", "w-full", 4, "ngIf"], [1, "flex-1", "min-w-[256px]"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "to", "timezone"], ["class", "flex justify-end -mt-2 mb-2", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["favs", "", 1, "space-y-2", "pb-4"], [1, "text-lg", "font-medium"], [1, "flex", "items-center"], ["for", "fav", 1, "flex-1", "w-1/2"], ["name", "fav", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "space-y-2", "features", "", 4, "ngIf"], ["class", "px-2 py-2 w-full border-t border-base-200", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "close-desk-filters", 1, "sm:hidden", 3, "click"], ["appearance", "outline", 1, "w-full"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], ["class", "opacity-30 text-xs", 4, "ngIf"], [1, "opacity-30", "text-xs"], [1, "opacity-0"], [1, "flex", "justify-end", "-mt-2", "mb-2"], ["formControlName", "all_day"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], ["formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr", "timezone"], ["features", "", 1, "space-y-2"], ["class", "flex items-center flex-wrap space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "flex-wrap", "space-x-2"], ["for", "feat", 1, "flex-1", "w-1/2"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "px-2", "py-2", "w-full", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "name", "apply-desk-filters", 1, "w-full", 3, "click"]], template: function DeskFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, DeskFiltersComponent_button_2_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h3", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "form", 5)(8, "section", 6)(9, "h2", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "label", 9);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, DeskFiltersComponent_mat_form_field_16_Template, 5, 9, "mat-form-field", 10);
        \u0275\u0275pipe(17, "async");
        \u0275\u0275template(18, DeskFiltersComponent_mat_form_field_18_Template, 7, 13, "mat-form-field", 10);
        \u0275\u0275pipe(19, "async");
        \u0275\u0275template(20, DeskFiltersComponent_mat_form_field_20_Template, 6, 11, "mat-form-field", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 11)(22, "label");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "a-date-field", 12);
        \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Template_a_date_field_ngModelChange_25_listener($event) {
          return ctx.form.patchValue({ date: $event });
        });
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, DeskFiltersComponent_div_28_Template, 4, 3, "div", 13)(29, DeskFiltersComponent_div_29_Template, 11, 17, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "section", 15)(31, "h2", 16);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 17)(35, "div", 18);
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-checkbox", 19);
        \u0275\u0275pipe(39, "async");
        \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_Template_mat_checkbox_ngModelChange_38_listener($event) {
          return ctx.setOptions({ show_fav: $event });
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(40, DeskFiltersComponent_section_40_Template, 6, 6, "section", 20);
        \u0275\u0275pipe(41, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(42, DeskFiltersComponent_div_42_Template, 4, 3, "div", 21);
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_6_0;
        let tmp_18_0;
        let tmp_20_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.can_close);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 22, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 24, "BOOKINGS.DETAILS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 26, "BOOKINGS.LOCATION"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.use_region && ((tmp_5_0 = \u0275\u0275pipeBind1(17, 28, ctx.regions)) == null ? null : tmp_5_0.length));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.use_region && ((tmp_6_0 = \u0275\u0275pipeBind1(19, 30, ctx.buildings)) == null ? null : tmp_6_0.length) > 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.hide_levels);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 32, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(44, _c04))("to", ctx.end_date)("timezone", ctx.timezone);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 34, "FORM.DATE_ERROR"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.allow_all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.form.value.all_day);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 36, "COMMON.FAVOURITES"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 38, "COMMON.FAVOURITES_ONLY"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", (tmp_18_0 = \u0275\u0275pipeBind1(39, 40, ctx.options)) == null ? null : tmp_18_0.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(45, _c04));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_20_0 = \u0275\u0275pipeBind1(41, 42, ctx.features)) == null ? null : tmp_20_0.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.can_close);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, MatFormField, MatCheckbox, MatOption, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, IconComponent, MatSelect, MatRipple, AsyncPipe, BuildingPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=desk-filters.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFiltersComponent, { className: "DeskFiltersComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-filters.component.ts", lineNumber: 244 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-filters-display.component.ts
var _c05 = () => [];
function DeskFiltersDisplayComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, ctx_r0.start, ctx_r0.time_format), " \u2014 ", \u0275\u0275pipeBind2(3, 5, ctx_r0.end, ctx_r0.time_format), " ");
  }
}
function DeskFiltersDisplayComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function DeskFiltersDisplayComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function DeskFiltersDisplayComponent_div_18_Template_button_click_3_listener() {
      const feat_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setFeature(feat_r3, false));
    });
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r3);
  }
}
function DeskFiltersDisplayComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 14);
    \u0275\u0275listener("click", function DeskFiltersDisplayComponent_div_20_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setOptions({ show_fav: false }));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.FAVOURITES_ONLY"));
  }
}
var DeskFiltersDisplayComponent = class _DeskFiltersDisplayComponent extends AsyncHandler {
  get all_day() {
    return this._state.form.value.all_day;
  }
  get start() {
    return this._state.form.value.date;
  }
  get end() {
    const { date, duration, all_day } = this._state.form.value;
    if (all_day)
      return endOfDay(date);
    return date + duration * 60 * 1e3;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_bsheet, _state, _settings) {
    super();
    this._bsheet = _bsheet;
    this._state = _state;
    this._settings = _settings;
    this.view = "list";
    this.viewChange = new EventEmitter();
    this.options = this._state.options;
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.editFilter = () => this._bsheet.open(DeskFiltersComponent);
  }
  static {
    this.\u0275fac = function DeskFiltersDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskFiltersDisplayComponent)(\u0275\u0275directiveInject(MatBottomSheet), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFiltersDisplayComponent, selectors: [["desk-filters-display"]], inputs: { view: "view" }, outputs: { viewChange: "viewChange" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 22, vars: 26, consts: [["actions", "", 1, "sm:hidden", "space-x-2", "flex", "flex-row", "items-center", "p-2"], ["btn", "", "matRipple", "", "name", "edit-desk-filters", 1, "flex-1", "w-1/2", 3, "click"], [1, "flex", "items-center"], ["btn", "", "matRipple", "", "name", "view-desk-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-desk-list", 1, "rounded-r", "rounded-l-none", 3, "click"], ["filters", "", 1, "flex", "items-center", "flex-wrap", "p-2", "w-[35rem]", "max-w-full", "sm:max-w-[35rem]"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], [4, "ngIf"], ["filter-item", "", "features", "", 4, "ngFor", "ngForOf"], ["filter-item", "", 4, "ngIf"], ["filter-item", "", "features", ""], ["icon", "", "matRipple", "", "name", "remove-desk-filter", 1, "-mr-4", 3, "click"], ["filter-item", ""], ["icon", "", "matRipple", "", "name", "remove-desk-favs-filter", 1, "-mr-4", 3, "click"]], template: function DeskFiltersDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "button", 1);
        \u0275\u0275listener("click", function DeskFiltersDisplayComponent_Template_button_click_1_listener() {
          return ctx.editFilter();
        });
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
        \u0275\u0275listener("click", function DeskFiltersDisplayComponent_Template_button_click_5_listener() {
          ctx.view = "map";
          return ctx.viewChange.emit(ctx.view);
        });
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 4);
        \u0275\u0275listener("click", function DeskFiltersDisplayComponent_Template_button_click_8_listener() {
          ctx.view = "list";
          return ctx.viewChange.emit(ctx.view);
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "section", 5)(12, "div", 6);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7);
        \u0275\u0275template(16, DeskFiltersDisplayComponent_ng_container_16_Template, 4, 8, "ng-container", 8)(17, DeskFiltersDisplayComponent_ng_container_17_Template, 3, 3, "ng-container", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, DeskFiltersDisplayComponent_div_18_Template, 6, 1, "div", 9);
        \u0275\u0275pipe(19, "async");
        \u0275\u0275template(20, DeskFiltersDisplayComponent_div_20_Template, 7, 3, "div", 10);
        \u0275\u0275pipe(21, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_8_0;
        let tmp_9_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("inverse", ctx.view !== "map");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 14, "COMMON.MAP"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.view !== "list");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 16, "COMMON.LIST"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 18, ctx.start, "mediumDate"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ((tmp_8_0 = \u0275\u0275pipeBind1(19, 21, ctx.options)) == null ? null : tmp_8_0.features) || \u0275\u0275pureFunction0(25, _c05));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_9_0 = \u0275\u0275pipeBind1(21, 23, ctx.options)) == null ? null : tmp_9_0.show_fav);
      }
    }, dependencies: [NgForOf, NgIf, IconComponent, MatRipple, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=desk-filters-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFiltersDisplayComponent, { className: "DeskFiltersDisplayComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-filters-display.component.ts", lineNumber: 118 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-list.component.ts
var _c06 = (a0) => ({ count: a0 });
function DeskListComponent_ng_container_7_ul_1_li_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "app-icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function DeskListComponent_ng_container_7_ul_1_li_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const desk_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", desk_r2.images[0]);
  }
}
function DeskListComponent_ng_container_7_ul_1_li_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
}
function DeskListComponent_ng_container_7_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "button", 10);
    \u0275\u0275listener("click", function DeskListComponent_ng_container_7_ul_1_li_1_Template_button_click_1_listener() {
      const desk_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectDesk(desk_r2));
    });
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275template(3, DeskListComponent_ng_container_7_ul_1_li_1_div_3_Template, 3, 0, "div", 12)(4, DeskListComponent_ng_container_7_ul_1_li_1_img_4_Template, 1, 1, "img", 13)(5, DeskListComponent_ng_container_7_ul_1_li_1_ng_template_5_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16)(11, "app-icon", 17);
    \u0275\u0275text(12, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 18);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "button", 19);
    \u0275\u0275listener("click", function DeskListComponent_ng_container_7_ul_1_li_1_Template_button_click_15_listener() {
      const desk_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(desk_r2));
    });
    \u0275\u0275elementStart(16, "app-icon");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const desk_r2 = ctx.$implicit;
    const placeholder_r4 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("!border-info", ctx_r2.active === desk_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.selected.includes(desk_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", desk_r2.images == null ? null : desk_r2.images.length)("ngIfElse", placeholder_r4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", desk_r2.name || desk_r2.id || "Desk", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (desk_r2.zone == null ? null : desk_r2.zone.display_name) || (desk_r2.zone == null ? null : desk_r2.zone.name) || "<No Level>", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx_r2.isFavourite(desk_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isFavourite(desk_r2.id) ? "favorite" : "favorite_border");
  }
}
function DeskListComponent_ng_container_7_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275template(1, DeskListComponent_ng_container_7_ul_1_li_1_Template, 18, 10, "li", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r2.desks));
  }
}
function DeskListComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DeskListComponent_ng_container_7_ul_1_Template, 3, 3, "ul", 6);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    const empty_state_r5 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(2, 2, ctx_r2.desks)) == null ? null : tmp_3_0.length)("ngIfElse", empty_state_r5);
  }
}
function DeskListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementStart(2, "p", 25);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.DESK_LIST_LOADING"), " ");
  }
}
function DeskListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "p", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.DESK_LIST_EMPTY"), " ");
  }
}
var DeskListComponent = class _DeskListComponent {
  constructor(_state) {
    this._state = _state;
    this.active = "";
    this.selected = "";
    this.favorites = [];
    this.onSelect = new EventEmitter();
    this.toggleFav = new EventEmitter();
    this.desks = combineLatest([
      this._state.options,
      this._state.available_resources
    ]).pipe(map(([{ show_fav }, _]) => _.filter((i) => !show_fav || this.isFavourite(i.id))));
    this.loading = this._state.loading;
  }
  isFavourite(desk_id) {
    return this.favorites.includes(desk_id);
  }
  selectDesk(desk) {
    this.onSelect.emit(desk);
  }
  static {
    this.\u0275fac = function DeskListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskListComponent)(\u0275\u0275directiveInject(BookingFormService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskListComponent, selectors: [["desk-list"]], inputs: { active: "active", selected: "selected", favorites: "favorites" }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, standalone: false, decls: 13, vars: 15, consts: [["load_state", ""], ["empty_state", ""], ["placeholder", ""], [1, "font-bold"], ["count", "", 1, "text-sm", "opacity-60", "mb-4"], [4, "ngIf", "ngIfElse"], ["class", "list-style-none space-y-2", 4, "ngIf", "ngIfElse"], [1, "list-style-none", "space-y-2"], ["desk", "", "class", "relative rounded-lg w-full shadow border bg-base-100 border-base-200 overflow-hidden", 3, "!border-info", 4, "ngFor", "ngForOf"], ["desk", "", 1, "relative", "rounded-lg", "w-full", "shadow", "border", "bg-base-100", "border-base-200", "overflow-hidden"], ["name", "select-desk", "matRipple", "", 1, "w-full", "h-full", "flex", "p-2", 3, "click"], [1, "relative", "w-20", "h-20", "rounded-xl", "bg-base-200", "mr-4", "flex", "items-center", "justify-center"], ["class", "absolute top-1 left-1 border border-neutral bg-base-200 rounded-full h-6 w-6 flex items-center justify-center text-white", 4, "ngIf"], ["auth", "", "class", "object-cover h-full", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "pt-2", "flex-1", "text-left"], [1, "font-medium"], [1, "flex", "items-center", "text-sm", "space-x-2"], [1, "text-info"], [1, "text-xs"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [1, "absolute", "top-1", "left-1", "border", "border-neutral", "bg-base-200", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center", "text-white"], ["auth", "", 1, "object-cover", "h-full", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"], ["loading", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"], [1, "opacity-30"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"]], template: function DeskListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3", 3);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, DeskListComponent_ng_container_7_Template, 3, 4, "ng-container", 5);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275template(9, DeskListComponent_ng_template_9_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(11, DeskListComponent_ng_template_11_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        const load_state_r6 = \u0275\u0275reference(10);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "COMMON.RESULTS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 8, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(13, _c06, ((tmp_3_0 = \u0275\u0275pipeBind1(5, 6, ctx.desks)) == null ? null : tmp_3_0.length) || 0)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !((tmp_4_0 = \u0275\u0275pipeBind1(8, 11, ctx.loading)) == null ? null : tmp_4_0.length))("ngIfElse", load_state_r6);
      }
    }, dependencies: [NgForOf, NgIf, MatProgressSpinner, IconComponent, AuthenticatedImageDirective, MatRipple, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  background: rgba(0, 0, 0, 0.05);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=desk-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskListComponent, { className: "DeskListComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-list.component.ts", lineNumber: 123 });
})();

// libs/explore/src/lib/explore-desk-info.component.ts
function ExploreDeskInfoComponent_ng_template_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.user);
  }
}
function ExploreDeskInfoComponent_ng_template_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.department, " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, ctx_r0.start, "shortTime"), " \u2013 ", \u0275\u0275pipeBind2(3, 5, ctx_r0.end, "shortTime"), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "div", 4)(3, "h4", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ExploreDeskInfoComponent_ng_template_1_p_5_Template, 2, 1, "p", 6)(6, ExploreDeskInfoComponent_ng_template_1_p_6_Template, 2, 1, "p", 7)(7, ExploreDeskInfoComponent_ng_template_1_p_7_Template, 4, 8, "p", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("absolute rounded bg-base-100 p-4 top-0 left-0 shadow pointer-events-none " + ctx_r0.x_pos + " " + ctx_r0.y_pos);
    \u0275\u0275property("id", ctx_r0.map_id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.name || ctx_r0.map_id || ctx_r0.id, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.user);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.user && ctx_r0.department);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.start);
  }
}
var ExploreDeskInfoComponent = class _ExploreDeskInfoComponent {
  constructor(_details, _element) {
    this._details = _details;
    this._element = _element;
    this.id = this._details.id;
    this.map_id = this._details.map_id;
    this.name = this._details.name;
    this.user = this._details.user;
    this.start = this._details.start;
    this.end = this._details.end;
    this.status = this._details.status;
    this.department = this._details.department;
  }
  ngOnInit(tries = 0) {
    if (tries > 10)
      return;
    setTimeout(() => {
      const parent = this._element.nativeElement.parentElement?.parentElement;
      if (!parent)
        return this.ngOnInit(++tries);
      const position = {
        y: parseInt(parent.style.top, 10) / 100,
        x: parseInt(parent.style.left, 10) / 100
      };
      this.y_pos = position.y >= 0.5 ? "bottom" : "top";
      this.x_pos = position.x >= 0.5 ? "right" : "left";
    }, 200);
  }
  get available_until() {
    return "";
  }
  static {
    this.\u0275fac = function ExploreDeskInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreDeskInfoComponent)(\u0275\u0275directiveInject(MAP_FEATURE_DATA), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreDeskInfoComponent, selectors: [["explore-desk-info"]], standalone: false, decls: 3, vars: 8, consts: [["desk_tooltip", ""], ["customTooltip", "", 1, "h-full", "w-full", "pointer-events-auto", "relative", "z-20", 3, "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 3, "id"], [1, "arrow"], [1, "details"], ["map-id", "", 1, "m-0", "font-medium"], ["user", "", "class", "mt-2 text-sm", 4, "ngIf"], ["user", "", "class", "mt-1 text-sm", 4, "ngIf"], ["start", "", "class", "mt-1 text-sm", 4, "ngIf"], ["user", "", 1, "mt-2", "text-sm"], ["user", "", 1, "mt-1", "text-sm"], ["start", "", 1, "mt-1", "text-sm"]], template: function ExploreDeskInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 1);
        \u0275\u0275template(1, ExploreDeskInfoComponent_ng_template_1_Template, 8, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const desk_tooltip_r2 = \u0275\u0275reference(2);
        \u0275\u0275property("content", desk_tooltip_r2)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3e3);
        \u0275\u0275attribute("id", ctx.id)("map_id", ctx.map_id);
      }
    }, dependencies: [NgIf, CustomTooltipComponent, DatePipe], styles: ["\n\n[name=space-info][_ngcontent-%COMP%] {\n  width: 16rem;\n}\n[name=status][_ngcontent-%COMP%] {\n  background-color: #43a047;\n  font-weight: 500;\n}\n[name=status].busy[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n[name=status].pending[_ngcontent-%COMP%] {\n  background-color: #ffb300;\n}\n[name=status].not-bookable[_ngcontent-%COMP%] {\n  background-color: #757575;\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreDeskInfoComponent, { className: "ExploreDeskInfoComponent", filePath: "libs/explore/src/lib/explore-desk-info.component.ts", lineNumber: 86 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-map.component.ts
var _c07 = () => ({ controls: true });
var _c15 = () => ({ standalone: true });
function DeskMapComponent_mat_form_field_1_mat_option_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const lvl_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = \u0275\u0275pipeBind1(2, 1, lvl_r3.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function DeskMapComponent_mat_form_field_1_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7)(1, "div", 8);
    \u0275\u0275template(2, DeskMapComponent_mat_form_field_1_mat_option_3_div_2_Template, 5, 3, "div", 9);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r3.display_name || lvl_r3.name, " ");
  }
}
function DeskMapComponent_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 4)(1, "mat-select", 5);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function DeskMapComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DeskMapComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_ids: [$event.id] }));
    });
    \u0275\u0275template(3, DeskMapComponent_mat_form_field_1_mat_option_3_Template, 5, 3, "mat-option", 6);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.level);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c15))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 6, ctx_r1.levels));
  }
}
var DeskMapComponent = class _DeskMapComponent extends AsyncHandler {
  get map_url() {
    return this.level?.map_id || "";
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor(_state, _settings, _org) {
    super();
    this._state = _state;
    this._settings = _settings;
    this._org = _org;
    this.is_displayed = false;
    this.active = "";
    this.onSelect = new EventEmitter();
    this.desks = this._state.available_resources;
    this.loading = this._state.loading;
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
    this.coordinates = void 0;
    this._change = new BehaviorSubject(0);
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking"));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.setOptions = (o) => this._state.setOptions(o);
    this.actions = this._state.available_resources.pipe(map((desks) => desks.map((desk) => ({
      id: desk.map_id || desk.id,
      action: ["touchend", "mouseup"],
      callback: () => this.selectDesk(desk)
    }))));
    this.features = combineLatest([
      this._state.resources,
      this._state.available_resources
    ]).pipe(map(([desks]) => {
      return this._settings.get("app.desks.hide_user") ? [] : desks.map((desk) => ({
        location: desk.id,
        content: ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: desk.map_id || desk.id,
          map_id: desk.name,
          name: desk.name || desk.map_id,
          user: this._state.resourceUserName(desk.id)
        },
        z_index: 20
      }));
    }));
    this.styles = combineLatest([
      this._state.resources,
      this._state.available_resources,
      this._change
    ]).pipe(map(([desks, free_desks]) => desks.reduce((styles, desk) => {
      const colours = this._settings.get("app.explore.colors") || {};
      const status = this.active === desk.id ? "active" : free_desks.find((_) => _.id === desk.id) ? "free" : this._state.resourceUserName(desk.id) ? "busy" : "not-bookable";
      styles[`#${desk.map_id || desk.id}`] = {
        fill: status === "active" ? "#512DA8" : colours[`desk-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
      };
      return styles;
    }, {})));
  }
  ngOnInit() {
    this.subscription("levels_update", this._state.options.subscribe(({ zone_id }) => {
      const level = this._org.levelWithID([zone_id]);
      if (level)
        this.level = level;
    }));
  }
  ngOnChanges(changes) {
    if (changes.active)
      this._change.next(Date.now());
  }
  selectDesk(desk) {
    this.onSelect.emit(desk);
  }
  setLevel(level) {
    this.setOptions({ zone_id: level?.id });
    const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
    if (bld) {
      const [latitude, longitude] = bld.location.split(",").map((_) => parseFloat(_));
      this.coordinates = { latitude, longitude };
    }
    this.level = level;
  }
  setZoom(new_zoom) {
    this.zoom = Math.max(0.5, Math.min(10, new_zoom));
  }
  resetMap() {
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
  }
  static {
    this.\u0275fac = function DeskMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskMapComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskMapComponent, selectors: [["desk-map"]], inputs: { is_displayed: "is_displayed", active: "active" }, outputs: { onSelect: "onSelect" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 8, vars: 17, consts: [[1, "bg-base-100", "p-2", "border-b", "border-base-200", "w-full"], ["levels", "", "appearance", "outline", "class", "w-full", 4, "ngIf"], [1, "relative", "flex-1", "w-full"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["levels", "", "appearance", "outline", 1, "w-full"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "opacity-30 text-xs", 4, "ngIf"], [1, "opacity-30", "text-xs"], [1, "opacity-0"]], template: function DeskMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, DeskMapComponent_mat_form_field_1_Template, 5, 9, "mat-form-field", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "interactive-map", 3);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "async");
        \u0275\u0275twoWayListener("zoomChange", function DeskMapComponent_Template_interactive_map_zoomChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
          return $event;
        })("centerChange", function DeskMapComponent_Template_interactive_map_centerChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.center, $event) || (ctx.center = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_0_0 = \u0275\u0275pipeBind1(2, 8, ctx.levels)) == null ? null : tmp_0_0.length);
        \u0275\u0275advance(3);
        \u0275\u0275property("src", ctx.map_url);
        \u0275\u0275twoWayProperty("zoom", ctx.zoom)("center", ctx.center);
        \u0275\u0275property("styles", \u0275\u0275pipeBind1(5, 10, ctx.styles))("features", \u0275\u0275pipeBind1(6, 12, ctx.features))("actions", \u0275\u0275pipeBind1(7, 14, ctx.actions))("options", \u0275\u0275pureFunction0(16, _c07));
      }
    }, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, MatFormField, MatOption, InteractiveMapComponent, MatSelect, AsyncPipe, BuildingPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n/*# sourceMappingURL=desk-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskMapComponent, { className: "DeskMapComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-map.component.ts", lineNumber: 81 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-select-modal.component.ts
var _c08 = (a0) => ({ count: a0 });
function DeskSelectModalComponent_desk_list_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-list", 24);
    \u0275\u0275listener("toggleFav", function DeskSelectModalComponent_desk_list_19_Template_desk_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFavourite($event));
    })("onSelect", function DeskSelectModalComponent_desk_list_19_Template_desk_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.displayed = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("active", ctx_r2.displayed == null ? null : ctx_r2.displayed.id)("selected", ctx_r2.selected_ids)("favorites", ctx_r2.favorites);
  }
}
function DeskSelectModalComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function DeskSelectModalComponent_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.displayed = null);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.BACK"), " ");
  }
}
function DeskSelectModalComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-map", 26);
    \u0275\u0275listener("onSelect", function DeskSelectModalComponent_ng_template_44_Template_desk_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.displayed = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("is_displayed", !!ctx_r2.displayed)("active", ctx_r2.displayed == null ? null : ctx_r2.displayed.id);
  }
}
var FAV_DESK_KEY = "favourite_desks";
var DeskSelectModalComponent = class _DeskSelectModalComponent {
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get favorites() {
    return this._settings.get(FAV_DESK_KEY) || [];
  }
  constructor(_dialog_ref, _settings, _event_form, _data) {
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this._event_form = _event_form;
    this._data = _data;
    this.selected = [];
    this.view = "list";
    this.selected = [..._data.items || []];
    this._event_form.setOptions(_data.options);
    this.view = this._settings.get("app.desks.default_select_as_map") ? "map" : "list";
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter((_) => _.id !== item.id);
    if (state)
      list.push(item);
    this.selected = list;
    if (!this._data.options.group && state) {
      this.displayed = null;
      setTimeout(() => this._dialog_ref.close([item]), 50);
    }
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_DESK_KEY, [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_DESK_KEY, fav_list.filter((_) => _ !== item.id));
    }
  }
  static {
    this.\u0275fac = function DeskSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskSelectModalComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskSelectModalComponent, selectors: [["desk-select-modal"]], standalone: false, decls: 46, vars: 49, consts: [["map_view", ""], [1, "w-[100vw]", "h-[100vh]", "sm:relative", "sm:w-auto", "sm:h-auto", "flex", "flex-col", "bg-base-100"], [1, "flex", "items-center", "space-x-4", "w-full"], ["icon", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "hidden", "sm:flex", "items-center", "justify-end", "flex-1"], ["btn", "", "matRipple", "", "name", "view-desk-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-desk-list", 1, "rounded-r", "rounded-l-none", 3, "click"], [1, "flex", "items-center", "divide-x", "divide-base-200", "h-[65vh]", "w-[calc(100vw-4rem)]", "overflow-hidden"], [1, "h-full", "hidden", "sm:flex", "max-w-[20rem]", "sm:h-[65vh]", "sm:max-h-full", 3, "hide_levels"], [1, "flex", "flex-col", "items-center", "flex-1", "w-1/2", "h-full", "sm:h-[65vh]"], [1, "w-full", "border-b", "border-base-200", 3, "viewChange", "view"], ["class", "flex-1 h-1/2 bg-base-200", 3, "active", "selected", "favorites", "toggleFav", "onSelect", 4, "ngIf", "ngIfElse"], [1, "h-full", "w-full", "sm:h-[65vh]", "absolute", "sm:relative", "sm:flex", "sm:max-w-[20rem]", "z-20", "bg-base-100", "block", 3, "activeChange", "toggleFav", "close", "desk", "active", "hide_map", "fav"], [1, "flex", "sm:hidden", "flex-col-reverse", "items-center", "justify-end", "px-2", "pt-2", "pb-[5.5rem]", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "name", "desk-return", "class", "inverse sm:hidden w-full", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "name", "save-desks", 1, "w-full", "sm:w-32", "sm:mb-0", 3, "mat-dialog-close"], [1, "hidden", "sm:flex", "items-center", "justify-between", "p-2", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "name", "desk-return", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "opacity-60", "text-sm"], ["btn", "", "matRipple", "", "name", "toggle-desk", 3, "click", "disabled"], [1, "mr-1"], [1, "flex-1", "h-1/2", "bg-base-200", 3, "toggleFav", "onSelect", "active", "selected", "favorites"], ["btn", "", "matRipple", "", "name", "desk-return", 1, "inverse", "sm:hidden", "w-full", 3, "click"], [1, "flex-1", "h-1/2", "w-full", 3, "onSelect", "is_displayed", "active"]], template: function DeskSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "button", 3)(3, "app-icon");
        \u0275\u0275text(4, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "h3");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 4)(9, "button", 5);
        \u0275\u0275listener("click", function DeskSelectModalComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.view = "map");
        });
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function DeskSelectModalComponent_Template_button_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.view = "list");
        });
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "main", 7);
        \u0275\u0275element(16, "desk-filters", 8);
        \u0275\u0275elementStart(17, "div", 9)(18, "desk-filters-display", 10);
        \u0275\u0275twoWayListener("viewChange", function DeskSelectModalComponent_Template_desk_filters_display_viewChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.view, $event) || (ctx.view = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, DeskSelectModalComponent_desk_list_19_Template, 1, 3, "desk-list", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "desk-details", 12);
        \u0275\u0275listener("activeChange", function DeskSelectModalComponent_Template_desk_details_activeChange_20_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSelected(ctx.displayed, $event));
        })("toggleFav", function DeskSelectModalComponent_Template_desk_details_toggleFav_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleFavourite(ctx.displayed));
        })("close", function DeskSelectModalComponent_Template_desk_details_close_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.displayed = null);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "footer", 13);
        \u0275\u0275template(22, DeskSelectModalComponent_button_22_Template, 3, 3, "button", 14);
        \u0275\u0275elementStart(23, "button", 15);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "footer", 16)(27, "button", 17)(28, "div", 18)(29, "app-icon", 19);
        \u0275\u0275text(30, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 20);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "p", 21);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 22);
        \u0275\u0275listener("click", function DeskSelectModalComponent_Template_button_click_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id)));
        });
        \u0275\u0275elementStart(38, "div", 18)(39, "app-icon", 19);
        \u0275\u0275text(40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 23);
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(44, DeskSelectModalComponent_ng_template_44_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const map_view_r6 = \u0275\u0275reference(45);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 32, "BOOKINGS.DESK_FIND"));
        \u0275\u0275advance(3);
        \u0275\u0275classProp("inverse", ctx.view !== "map");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 34, "COMMON.MAP"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.view !== "list");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 36, "COMMON.LIST"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("hide_levels", ctx.view !== "list");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("view", ctx.view);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "list")("ngIfElse", map_view_r6);
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", !ctx.displayed)("inset-0", ctx.displayed);
        \u0275\u0275property("desk", ctx.displayed)("active", ctx.selected_ids.includes(ctx.displayed == null ? null : ctx.displayed.id))("hide_map", ctx.view === "map")("fav", ctx.displayed && ctx.favorites.includes(ctx.displayed == null ? null : ctx.displayed.id));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.displayed);
        \u0275\u0275advance();
        \u0275\u0275classProp("mb-2", ctx.displayed);
        \u0275\u0275property("mat-dialog-close", ctx.selected);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 38, "COMMON.VIEW_LIST"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", ctx.selected);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 40, "COMMON.BACK_TO_FORM"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(36, 42, "BOOKINGS.DESK_ADDED_COUNT", \u0275\u0275pureFunction1(47, _c08, ctx.selected.length)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
        \u0275\u0275property("disabled", !ctx.displayed);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 45, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
      }
    }, dependencies: [NgIf, MatDialogClose, IconComponent, MatRipple, DeskDetailsComponent, DeskFiltersComponent, DeskFiltersDisplayComponent, DeskListComponent, DeskMapComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskSelectModalComponent, { className: "DeskSelectModalComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-select-modal.component.ts", lineNumber: 167 });
})();

// libs/bookings/src/lib/invite-visitor-form.component.ts
var _c09 = () => ({ standalone: true });
var _c16 = (a0, a1) => ({ name: a0, count: a1 });
var _c2 = (a0, a1, a2) => ({ location: a0, date: a1, time: a2 });
function InviteVisitorFormComponent_ng_container_0_div_1_form_5_div_1_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r5 = ctx.$implicit;
    \u0275\u0275property("value", bld_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r5.display_name || bld_r5.name, " ");
  }
}
function InviteVisitorFormComponent_ng_container_0_div_1_form_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "label", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 26)(7, "mat-select", 29);
    \u0275\u0275listener("ngModelChange", function InviteVisitorFormComponent_ng_container_0_div_1_form_5_div_1_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ zones: [$event] }));
    });
    \u0275\u0275template(8, InviteVisitorFormComponent_ng_container_0_div_1_form_5_div_1_mat_option_8_Template, 2, 2, "mat-option", 30);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "RESOURCE.BUILDING"), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r3.form.value.zones[0])("ngModelOptions", \u0275\u0275pureFunction0(8, _c09));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(9, 6, ctx_r3.buildings));
  }
}
function InviteVisitorFormComponent_ng_container_0_div_1_form_5_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "label", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-search-field", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "FORM.HOST"), "");
  }
}
function InviteVisitorFormComponent_ng_container_0_div_1_form_5_ng_container_25_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 41);
    \u0275\u0275listener("click", function InviteVisitorFormComponent_ng_container_0_div_1_form_5_ng_container_25_mat_option_12_Template_mat_option_click_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.setVisitor(item_r8));
    });
    \u0275\u0275elementStart(1, "div", 42)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275property("value", item_r8.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r8.email, " ", item_r8.company ? "| " + item_r8.company : "", " ");
  }
}
function InviteVisitorFormComponent_ng_container_0_div_1_form_5_ng_container_25_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 41);
    \u0275\u0275listener("click", function InviteVisitorFormComponent_ng_container_0_div_1_form_5_ng_container_25_mat_option_27_Template_mat_option_click_0_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.setVisitor(item_r10));
    });
    \u0275\u0275elementStart(1, "div", 42)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275property("value", item_r10.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r10.email, " ", item_r10.company ? "| " + item_r10.company : "", " ");
  }
}
function InviteVisitorFormComponent_ng_container_0_div_1_form_5_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15)(2, "label", 35);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 26)(8, "input", 36);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("focus", function InviteVisitorFormComponent_ng_container_0_div_1_form_5_ng_container_25_Template_input_focus_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.filterVisitors(ctx_r3.form.value.asset_name));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-autocomplete", null, 3);
    \u0275\u0275template(12, InviteVisitorFormComponent_ng_container_0_div_1_form_5_ng_container_25_mat_option_12_Template, 6, 4, "mat-option", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 15)(14, "label", 38);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 26)(20, "input", 39);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("focus", function InviteVisitorFormComponent_ng_container_0_div_1_form_5_ng_container_25_Template_input_focus_20_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.filterVisitors(ctx_r3.form.value.asset_id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-error");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "mat-autocomplete", null, 4);
    \u0275\u0275template(27, InviteVisitorFormComponent_ng_container_0_div_1_form_5_ng_container_25_mat_option_27_Template, 6, 4, "mat-option", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 15)(29, "label", 35);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-form-field", 26);
    \u0275\u0275element(33, "input", 40);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const name_auto_r11 = \u0275\u0275reference(11);
    const email_auto_r12 = \u0275\u0275reference(26);
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, "BOOKINGS.VISITOR_NAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 13, "BOOKINGS.VISITOR_NAME_PLACEHOLDER"))("matAutocomplete", name_auto_r11);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.filtered_visitors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 15, "BOOKINGS.VISITOR_EMAIL"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 17, "BOOKINGS.VISITOR_EMAIL_PLACEHOLDER"))("matAutocomplete", email_auto_r12);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 19, "FORM.EMAIL_REQUIRED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.filtered_visitors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 21, "BOOKINGS.VISITOR_COMPANY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(34, 23, "BOOKINGS.VISITOR_COMPANY"));
  }
}
function InviteVisitorFormComponent_ng_container_0_div_1_form_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 13);
    \u0275\u0275template(1, InviteVisitorFormComponent_ng_container_0_div_1_form_5_div_1_Template, 10, 9, "div", 14);
    \u0275\u0275elementStart(2, "div", 15)(3, "label", 16);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "a-date-field", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "div", 19)(11, "label", 20);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a-time-field", 21);
    \u0275\u0275listener("ngModelChange", function InviteVisitorFormComponent_ng_container_0_div_1_form_5_Template_a_time_field_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 19)(18, "label", 22);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "a-duration-field", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, InviteVisitorFormComponent_ng_container_0_div_1_form_5_div_24_Template, 7, 3, "div", 24)(25, InviteVisitorFormComponent_ng_container_0_div_1_form_5_ng_container_25_Template, 35, 25, "ng-container", 5);
    \u0275\u0275elementStart(26, "div", 15)(27, "label", 25);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-form-field", 26);
    \u0275\u0275element(31, "input", 27);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    const multi_state_r13 = \u0275\u0275reference(6);
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r3.buildings == null ? null : ctx_r3.buildings.length) > 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 16, "FORM.DATE"), "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 18, "FORM.TIME_START"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r3.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(26, _c09))("disabled", ctx_r3.form.value.all_day)("use_24hr", ctx_r3.use_24hr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 20, "FORM.TIME_END"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r3.form.value.date)("use_24hr", ctx_r3.use_24hr);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.can_book_for_others);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.multiple)("ngIfElse", multi_state_r13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 22, "BOOKINGS.VISITOR_REASON"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(32, 24, "BOOKINGS.VISITOR_REASON_PLACEHOLDER"));
  }
}
function InviteVisitorFormComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "h2", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, InviteVisitorFormComponent_ng_container_0_div_1_form_5_Template, 33, 27, "form", 10);
    \u0275\u0275elementStart(6, "div", 11)(7, "button", 12);
    \u0275\u0275listener("click", function InviteVisitorFormComponent_ng_container_0_div_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.sendInvite());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "BOOKINGS.VISITOR_INVITE_TITLE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "BOOKINGS.VISITOR_SEND"), " ");
  }
}
function InviteVisitorFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InviteVisitorFormComponent_ng_container_0_div_1_Template, 10, 7, "div", 6);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const load_state_r14 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(2, 2, ctx_r3.loading) && !ctx_r3.loading_many)("ngIfElse", load_state_r14);
  }
}
function InviteVisitorFormComponent_ng_template_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "a", 53);
    \u0275\u0275pipe(2, "sanitize");
    \u0275\u0275element(3, "img", 54);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 55);
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275element(9, "img", 56);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 57);
    \u0275\u0275pipe(14, "safe");
    \u0275\u0275elementStart(15, "app-icon", 58);
    \u0275\u0275text(16, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(2, 6, ctx_r3.outlook_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "BOOKINGS.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(8, 11, ctx_r3.google_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "BOOKINGS.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(14, 16, ctx_r3.ical_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "BOOKINGS.LINK_ICAL"));
  }
}
function InviteVisitorFormComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "h2", 46);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "img", 47);
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, InviteVisitorFormComponent_ng_template_1_div_11_Template, 20, 21, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 49)(13, "div", 50)(14, "button", 51);
    \u0275\u0275listener("click", function InviteVisitorFormComponent_ng_template_1_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDone());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 51);
    \u0275\u0275listener("click", function InviteVisitorFormComponent_ng_template_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.sent = false);
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, ctx_r3.multiple ? "BOOKINGS.VISITOR_SENT_MULTIPLE" : "BOOKINGS.VISITOR_SENT_SINGLE", \u0275\u0275pureFunction2(21, _c16, (ctx_r3.last_success == null ? null : ctx_r3.last_success.asset_name) || (ctx_r3.last_success == null ? null : ctx_r3.last_success.asset_id), ctx_r3.last_count || 1)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 14, "BOOKINGS.VISITOR_SENT_MSG", \u0275\u0275pureFunction3(24, _c2, (ctx_r3.building == null ? null : ctx_r3.building.display_name) || (ctx_r3.building == null ? null : ctx_r3.building.name), \u0275\u0275pipeBind2(8, 8, ctx_r3.last_success == null ? null : ctx_r3.last_success.date, "mediumDate"), \u0275\u0275pipeBind2(9, 11, ctx_r3.last_success == null ? null : ctx_r3.last_success.date, ctx_r3.time_format))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.show_links);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 17, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 19, "BOOKINGS.VISITOR_BOOK_ANOTHER"), " ");
  }
}
function InviteVisitorFormComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "mat-spinner", 60);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "BOOKINGS.VISITOR_SENDING"));
  }
}
function InviteVisitorFormComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "label", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-list-field", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "BOOKINGS.VISITOR_LIST"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("guests_only", true);
  }
}
var InviteVisitorFormComponent = class _InviteVisitorFormComponent extends AsyncHandler {
  get multiple() {
    return this._settings.get("app.bookings.multiple_visitors");
  }
  get can_book_for_others() {
    return this._settings.get("app.bookings.can_book_for_others");
  }
  get show_links() {
    return this._settings.get("app.visitors.show_calendar_links");
  }
  get building() {
    return this._settings.get("app.use_region") ? this._org.region : this._org.building;
  }
  get form() {
    return this._service.form;
  }
  get time_format() {
    return this._settings.time_format;
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  constructor(_service, _settings, _org) {
    super();
    this._service = _service;
    this._settings = _settings;
    this._org = _org;
    this.done = new EventEmitter();
    this.outlook_link = "";
    this.google_link = "";
    this.ical_link = "";
    this.sent = false;
    this.loading = this._service.loading;
    this.loading_many = false;
    this.buildings = this._org.active_buildings;
    this.last_success = this._service.last_success;
    this.last_count = 0;
    this.visitors = [];
    this.filtered_visitors = [];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.sent = false;
      this._service.clearOldState();
      yield this.initFormZone();
      this.form.get("asset_id").setValidators([Validators.required, Validators.email]);
      const visitors = this._settings.get("visitor-invitees") || [];
      for (const item of visitors) {
        const [email, name, company] = item.split("|");
        this.visitors.push({ email, name, company });
      }
      this.filterVisitors("");
      this.subscription("email", this.form.get("asset_id").valueChanges.subscribe((_) => this.filterVisitors(_)));
      this.subscription("name", this.form.get("asset_name").valueChanges.subscribe((_) => this.filterVisitors(_)));
      if (this.multiple)
        this.form.patchValue({ asset_id: "multiple@place.tech" });
      this.form.patchValue({ title: "Visit" });
    });
  }
  ngOnChanges(changes) {
    if (changes.date && this.date) {
      this.form.patchValue({ date: this.date });
    }
  }
  setVisitor(item) {
    this.form.patchValue({
      asset_id: item.email,
      asset_name: item.name,
      company: item.company,
      phone: item.phone
    });
  }
  filterVisitors(filter2) {
    const s = (filter2 || "").toLowerCase();
    this.filtered_visitors = this.visitors.filter(({ email, name, company }) => email.toLowerCase().includes(s) || name.toLowerCase().includes(s) || company.toLowerCase().includes(s));
  }
  onDone() {
    this.done.emit();
    this.sent = false;
  }
  sendInvite() {
    return __async(this, null, function* () {
      this.form.markAllAsTouched();
      if (!this.form.valid || this.multiple && !this.form.value.assets.length) {
        return notifyError(`Some fields are invalid. [${getInvalidFields(this.form).join(", ") || "visitors"}]`);
      }
      if (!this.form.value.user_email || !this.can_book_for_others) {
        this.form.patchValue({ user: currentUser() });
      }
      const { asset_id, asset_name, company, assets } = this.form.value;
      const visitor_details = `${asset_id}|${asset_name}|${company}`;
      const old_visitors = this._settings.get("visitor-invitees") || [];
      this._settings.saveUserSetting("visitor-invitees", [
        ...old_visitors.filter((_) => !_.includes(asset_id)),
        visitor_details
      ]);
      yield this.multiple ? this._bookForMany() : this._bookForOne();
      this.last_success = this._service.last_success;
      if (this.last_success) {
        const event = __spreadProps(__spreadValues({}, this.last_success), {
          host: this.last_success.user_email,
          organiser: {
            name: this.last_success.user_name,
            email: this.last_success.user_email
          },
          attendees: this.last_success.attendees.map((_) => _.email),
          body: this.last_success.description,
          location: this.last_success.asset_name
        });
        this.outlook_link = generateMicrosoftCalendarLink(event);
        this.google_link = generateGoogleCalendarLink(event);
        this.ical_link = generateCalendarFileLink(event);
      }
      yield this.initFormZone();
      this.sent = true;
    });
  }
  initFormZone() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this._service.setOptions({ type: "visitor" });
      this.form.patchValue({
        booking_type: "visitor",
        zones: [this._org.building?.id]
      });
      if (this.multiple)
        this.form.patchValue({ asset_id: "multiple@place.tech" });
    });
  }
  _bookForOne() {
    return __async(this, null, function* () {
      const value = this.form.value;
      this.form.patchValue({
        name: value.asset_name,
        attendees: [
          new User({
            name: value.asset_name,
            email: value.asset_id,
            organisation: value.company,
            phone: value.phone
          })
        ]
      });
      yield this._service.postForm().catch((e) => {
        notifyError(e);
        throw e;
      });
    });
  }
  _bookForMany() {
    return __async(this, null, function* () {
      this.loading_many = true;
      const group = `grp-${randomString(8)}`;
      const value = this.form.value;
      const assets = value.assets;
      this.last_count = assets.length;
      for (const user of assets) {
        if (!user.email)
          continue;
        this.form.patchValue(__spreadProps(__spreadValues({}, value), {
          booking_type: "visitor",
          asset_id: user.email,
          asset_name: user.name,
          user: currentUser(),
          description: group,
          name: user.name,
          assets: [],
          attendees: [
            new User({
              name: user.name,
              email: user.email,
              organisation: user.company || user.organisation,
              phone: user.phone
            })
          ]
        }));
        yield this._service.postForm().catch((e) => {
          notifyError(e);
          this.loading_many = false;
          throw e;
        });
      }
      this.loading_many = false;
    });
  }
  static {
    this.\u0275fac = function InviteVisitorFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InviteVisitorFormComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InviteVisitorFormComponent, selectors: [["invite-visitor-form"]], inputs: { date: "date" }, outputs: { done: "done" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 7, vars: 2, consts: [["send_state", ""], ["load_state", ""], ["multi_state", ""], ["name_auto", "matAutocomplete"], ["email_auto", "matAutocomplete"], [4, "ngIf", "ngIfElse"], ["class", "relative flex flex-col bg-base-100 overflow-auto max-h-full", 4, "ngIf", "ngIfElse"], [1, "relative", "flex", "flex-col", "bg-base-100", "overflow-auto", "max-h-full"], [1, "w-full", "border-b", "border-base-200", "sm:px-16", "px-4", "py-4"], [1, "text-2xl", "font-medium"], ["class", "sm:px-16 px-4 py-4", 3, "formGroup", 4, "ngIf"], [1, "sticky", "sm:px-16", "px-4", "py-4", "border-t", "bg-base-100", "border-base-200", "bottom-0"], ["btn", "", "matRipple", "", "send", "", 1, "w-full", "sm:w-auto", 3, "click"], [1, "sm:px-16", "px-4", "py-4", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "date"], ["name", "date", "formControlName", "date"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "flex", "flex-col", "w-1/3"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "use_24hr"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "use_24hr"], ["class", "w-full flex flex-col", 4, "ngIf"], ["for", "reason"], ["appearance", "outline"], ["name", "reason", "matInput", "", "formControlName", "title", 3, "placeholder"], ["for", "building"], ["name", "building", "placeholder", "Select building", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "w-full", "flex", "flex-col"], ["for", "host"], ["name", "host", "formControlName", "user", 1, "mb-4"], ["for", "visitor-name"], ["matInput", "", "name", "visitor-name", "formControlName", "asset_name", 3, "focus", "placeholder", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["for", "visitor-email"], ["matInput", "", "name", "visitor-email", "type", "email", "formControlName", "asset_id", 3, "focus", "placeholder", "matAutocomplete"], ["matInput", "", "name", "company", "formControlName", "company", 3, "placeholder"], [3, "click", "value"], [1, "flex", "flex-col", "leading-tight"], [1, "text-xs", "opacity-60"], ["sent", "", 1, "absolute", "inset-0", "bg-base-100", "flex", "flex-col", "items-center", "justify-center", "text-center"], [1, "w-full", "max-w-[32rem]", "flex-1", "h-1/2", "space-y-2", "m-8"], [1, "text-3xl"], ["src", "assets/icons/sent.svg", 1, "mx-auto"], ["class", "flex flex-col items-center space-y-4 p-4 relative", 4, "ngIf"], [1, "w-full", "p-2", "border-t", "border-base-200"], [1, "mx-auto", "flex", "items-center", "space-x-2", "w-full", "max-w-[32rem]"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "flex", "flex-col", "items-center", "space-y-4", "p-4", "relative"], ["btn", "", "matRipple", "", "name", "desk-outlook-link", "target", "_blank", "rel", "noopener noreferer", 1, "flex", "items-center", "p-2", "space-x-2", "pr-4", "w-64", "rounded", "inverse", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-google-link", "target", "_blank", "rel", "noopener noreferer", 1, "flex", "items-center", "p-2", "space-x-2", "pr-4", "w-64", "rounded", "inverse", 3, "href"], ["src", "assets/icons/gcal.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-ical-link", "target", "_blank", "rel", "noopener noreferer", 1, "flex", "items-center", "p-2", "space-x-2", "pr-4", "w-64", "rounded", "inverse", 3, "href"], [1, "text-xl"], ["loading", "", 1, "relative", "flex", "flex-col", "items-center", "justify-center", "rounded", "overflow-hidden", "w-full", "h-full", "min-h-[18rem]"], [3, "diameter"], [1, "flex", "flex-col", 3, "formGroup"], ["formControlName", "assets", 3, "guests_only"]], template: function InviteVisitorFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, InviteVisitorFormComponent_ng_container_0_Template, 3, 4, "ng-container", 5)(1, InviteVisitorFormComponent_ng_template_1_Template, 20, 28, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, InviteVisitorFormComponent_ng_template_3_Template, 5, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, InviteVisitorFormComponent_ng_template_5_Template, 7, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const send_state_r16 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", !ctx.sent)("ngIfElse", send_state_r16);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, MatInput, MatFormField, MatError, MatProgressSpinner, MatAutocomplete, MatOption, MatAutocompleteTrigger, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, UserListFieldComponent, UserSearchFieldComponent, IconComponent, MatSelect, MatRipple, AsyncPipe, DatePipe, SafePipe, SanitizePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteVisitorFormComponent, { className: "InviteVisitorFormComponent", filePath: "libs/bookings/src/lib/invite-visitor-form.component.ts", lineNumber: 384 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-details.component.ts
var _c010 = () => ({ disable_pan: true, disable_zoom: true });
function ParkingSpaceDetailsComponent_ng_container_0_image_carousel_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "image-carousel", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("images", ctx_r1.space.images);
  }
}
function ParkingSpaceDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 2);
    \u0275\u0275template(2, ParkingSpaceDetailsComponent_ng_container_0_image_carousel_2_Template, 1, 1, "image-carousel", 3);
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function ParkingSpaceDetailsComponent_ng_container_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function ParkingSpaceDetailsComponent_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 6)(10, "section", 7)(11, "h2", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "hr");
    \u0275\u0275elementStart(14, "section", 9)(15, "h2", 10);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 11)(19, "app-icon");
    \u0275\u0275text(20, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 11)(24, "app-icon");
    \u0275\u0275text(25, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(28, "hr");
    \u0275\u0275elementStart(29, "section", 12);
    \u0275\u0275element(30, "interactive-map", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 14)(32, "button", 15);
    \u0275\u0275listener("click", function ParkingSpaceDetailsComponent_ng_container_0_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.active = !ctx_r1.active;
      return \u0275\u0275resetView(ctx_r1.activeChange.emit(ctx_r1.active));
    });
    \u0275\u0275elementStart(33, "div", 16)(34, "app-icon", 17);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:h-40", ctx_r1.space.images == null ? null : ctx_r1.space.images.length)("h-64", ctx_r1.space.images == null ? null : ctx_r1.space.images.length)("sm:h-0", !(ctx_r1.space.images == null ? null : ctx_r1.space.images.length))("h-12", !(ctx_r1.space.images == null ? null : ctx_r1.space.images.length))("!bg-transparent", !(ctx_r1.space.images == null ? null : ctx_r1.space.images.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.space.images == null ? null : ctx_r1.space.images.length);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-info-content", ctx_r1.fav)("!bg-info", ctx_r1.fav);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fav ? "favorite" : "favorite_border");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.space.display_name || ctx_r1.space.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 28, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.level == null ? null : ctx_r1.level.display_name) || (ctx_r1.level == null ? null : ctx_r1.level.name), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.building == null ? null : ctx_r1.building.address) || (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.map_url)("focus", ctx_r1.space.map_id)("features", ctx_r1.features)("options", \u0275\u0275pureFunction0(32, _c010));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx_r1.active);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.active ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 30, ctx_r1.active ? "BOOKINGS.SPACE_REMOVE" : "BOOKINGS.SPACE_ADD_TO"), " ");
  }
}
function ParkingSpaceDetailsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.PARKING_SELECT_MSG"), " ");
  }
}
var ParkingSpaceDetailsComponent = class _ParkingSpaceDetailsComponent {
  get level() {
    return this._org.levelWithID([this.space?.zone.id]) || this.space?.zone;
  }
  get building() {
    return this._org.buildings.find((_) => this.space?.zone.id === _.id || this.space?.zone.parent_id === _.id);
  }
  constructor(_org) {
    this._org = _org;
    this.fav = false;
    this.active = false;
    this.activeChange = new EventEmitter();
    this.close = new EventEmitter();
    this.toggleFav = new EventEmitter();
    this.map_url = "";
    this.features = [];
  }
  ngOnChanges(changes) {
    if (changes.space && this.space) {
      this._updateFeature();
    }
  }
  _updateFeature() {
    this.map_url = this.level?.map_id;
    this.features = [
      {
        location: this.space?.map_id,
        content: MapPinComponent
      }
    ];
  }
  static {
    this.\u0275fac = function ParkingSpaceDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpaceDetailsComponent)(\u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceDetailsComponent, selectors: [["parking-space-details"]], inputs: { space: "space", fav: "fav", active: "active" }, outputs: { activeChange: "activeChange", close: "close", toggleFav: "toggleFav" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 2, consts: [["empty_state", ""], [4, "ngIf", "ngIfElse"], ["image", "", 1, "relative", "w-full", "bg-base-200"], ["class", "absolute inset-0", 3, "images", 4, "ngIf"], ["icon", "", "matRipple", "", "close", "", 1, "absolute", "top-2", "left-2", "bg-base-200", "sm:hidden", 3, "click"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "top-2", "right-2", "bg-base-200", 3, "click"], [1, "p-2", "space-y-2", "flex-1", "h-1/2", "overflow-auto"], ["actions", "", 1, "z-0"], [1, "text-xl", "font-medium", "mb-2", "mt-4"], ["details", "", 1, "space-y-2"], [1, "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["map", "", 1, "w-full", "mx-auto", "h-64", "sm:h-48", "relative", "border", "border-base-200", "overflow-hidden", "rounded"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], [1, "p-2", "border-t", "border-base-200", "shadow", "sm:hidden"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "text-2xl"], [1, "absolute", "inset-0", 3, "images"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"]], template: function ParkingSpaceDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ParkingSpaceDetailsComponent_ng_container_0_Template, 39, 33, "ng-container", 1)(1, ParkingSpaceDetailsComponent_ng_template_1_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const empty_state_r3 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.space)("ngIfElse", empty_state_r3);
      }
    }, dependencies: [NgIf, IconComponent, InteractiveMapComponent, ImageCarouselComponent, MatRipple, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 20rem;\n  height: 100%;\n  min-height: 65vh;\n}\n/*# sourceMappingURL=parking-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceDetailsComponent, { className: "ParkingSpaceDetailsComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-details.component.ts", lineNumber: 145 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-filters.component.ts
var _c011 = () => ({ standalone: true });
function ParkingSpaceFiltersComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ParkingSpaceFiltersComponent_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "keyboard_arrow_left");
    \u0275\u0275elementEnd()();
  }
}
function ParkingSpaceFiltersComponent_ng_container_16_mat_form_field_1_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r4 = ctx.$implicit;
    \u0275\u0275property("value", bld_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r4.display_name || bld_r4.name, " ");
  }
}
function ParkingSpaceFiltersComponent_ng_container_16_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 23)(1, "mat-select", 24);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_ng_container_16_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275template(5, ParkingSpaceFiltersComponent_ng_container_16_mat_form_field_1_mat_option_5_Template, 2, 2, "mat-option", 25);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(2, 4, ctx_r1.building))("ngModelOptions", \u0275\u0275pureFunction0(12, _c011))("placeholder", ((tmp_4_0 = \u0275\u0275pipeBind1(3, 6, ctx_r1.building)) == null ? null : tmp_4_0.display_name) || ((tmp_4_0 = \u0275\u0275pipeBind1(4, 8, ctx_r1.building)) == null ? null : tmp_4_0.name));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 10, ctx_r1.buildings));
  }
}
function ParkingSpaceFiltersComponent_ng_container_16_mat_form_field_3_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r6 = ctx.$implicit;
    \u0275\u0275property("value", lvl_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r6.display_name || lvl_r6.name, " ");
  }
}
function ParkingSpaceFiltersComponent_ng_container_16_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 23)(1, "mat-select", 27);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_ng_container_16_mat_form_field_3_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275template(4, ParkingSpaceFiltersComponent_ng_container_16_mat_form_field_3_mat_option_4_Template, 2, 2, "mat-option", 25);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(2, 4, ctx_r1.options)) == null ? null : tmp_2_0.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(10, _c011))("placeholder", \u0275\u0275pipeBind1(3, 6, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 8, ctx_r1.levels));
  }
}
function ParkingSpaceFiltersComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ParkingSpaceFiltersComponent_ng_container_16_mat_form_field_1_Template, 7, 13, "mat-form-field", 22);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, ParkingSpaceFiltersComponent_ng_container_16_mat_form_field_3_Template, 6, 11, "mat-form-field", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_1_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.buildings)) == null ? null : tmp_1_0.length) > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.hide_levels);
  }
}
function ParkingSpaceFiltersComponent_ng_container_17_mat_form_field_1_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r8 = ctx.$implicit;
    \u0275\u0275property("value", reg_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r8.display_name || reg_r8.name, " ");
  }
}
function ParkingSpaceFiltersComponent_ng_container_17_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 23)(1, "mat-select", 28);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_ng_container_17_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275template(3, ParkingSpaceFiltersComponent_ng_container_17_mat_form_field_1_mat_option_3_Template, 2, 2, "mat-option", 25);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(8, _c011))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 6, ctx_r1.regions));
  }
}
function ParkingSpaceFiltersComponent_ng_container_17_mat_form_field_3_mat_optgroup_7_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r10 = ctx.$implicit;
    \u0275\u0275property("value", level_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r10.display_name || level_r10.name, " ");
  }
}
function ParkingSpaceFiltersComponent_ng_container_17_mat_form_field_3_mat_optgroup_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-optgroup", 30);
    \u0275\u0275template(1, ParkingSpaceFiltersComponent_ng_container_17_mat_form_field_3_mat_optgroup_7_mat_option_1_Template, 2, 2, "mat-option", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r11 = ctx.$implicit;
    \u0275\u0275property("label", bld_r11.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", bld_r11.levels);
  }
}
function ParkingSpaceFiltersComponent_ng_container_17_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 23)(1, "mat-select", 27);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_ng_container_17_mat_form_field_3_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275elementStart(4, "mat-option", 26);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ParkingSpaceFiltersComponent_ng_container_17_mat_form_field_3_mat_optgroup_7_Template, 2, 2, "mat-optgroup", 29);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(2, 5, ctx_r1.options)) == null ? null : tmp_2_0.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(13, _c011))("placeholder", \u0275\u0275pipeBind1(3, 7, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 9, "COMMON.LEVEL_ANY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(8, 11, ctx_r1.region_levels));
  }
}
function ParkingSpaceFiltersComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ParkingSpaceFiltersComponent_ng_container_17_mat_form_field_1_Template, 5, 9, "mat-form-field", 22);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, ParkingSpaceFiltersComponent_ng_container_17_mat_form_field_3_Template, 9, 14, "mat-form-field", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.regions)) == null ? null : tmp_1_0.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.hide_levels);
  }
}
function ParkingSpaceFiltersComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "label", 33);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 34);
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_div_27_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 32)(9, "label", 35);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(12, _c011))("use_24hr", ctx_r1.use_24hr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r1.form == null ? null : ctx_r1.form.value == null ? null : ctx_r1.form.value.date)("max", ctx_r1.max_duration)("use_24hr", ctx_r1.use_24hr);
  }
}
function ParkingSpaceFiltersComponent_section_38_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-checkbox", 40);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_section_38_div_4_Template_mat_checkbox_ngModelChange_3_listener($event) {
      const feat_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFeature(feat_r14, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const feat_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r14);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_4_0 = \u0275\u0275pipeBind1(4, 3, ctx_r1.options)) == null ? null : tmp_4_0.features == null ? null : tmp_4_0.features.includes(feat_r14))("ngModelOptions", \u0275\u0275pureFunction0(5, _c011));
  }
}
function ParkingSpaceFiltersComponent_section_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 37)(1, "h2", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ParkingSpaceFiltersComponent_section_38_div_4_Template, 5, 6, "div", 38);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.FEATURES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 4, ctx_r1.features));
  }
}
function ParkingSpaceFiltersComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "button", 42);
    \u0275\u0275listener("click", function ParkingSpaceFiltersComponent_div_40_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.APPLY"), " ");
  }
}
var ParkingSpaceFiltersComponent = class _ParkingSpaceFiltersComponent {
  setBuilding(bld) {
    this._org.building = bld;
  }
  get bld() {
    return this._org.building;
  }
  get form() {
    return this._form.form;
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.parking.available_period") || 7));
  }
  get max_duration() {
    return this._settings.get("app.events.max_duration") || 480;
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor(_bsheet_ref, _settings, _form, _org) {
    this._bsheet_ref = _bsheet_ref;
    this._settings = _settings;
    this._form = _form;
    this._org = _org;
    this.can_close = false;
    this.options = this._form.options;
    this.levels = this._org.active_levels.pipe(map((l) => {
      for (const lvl of l) {
        const bld = this._org.buildings.find((_) => _.id === lvl.parent_id);
        lvl.bld = bld?.display_name || bld?.name || "";
      }
      return l.filter((_) => _.tags.includes("parking"));
    }));
    this.buildings = this._org.active_buildings;
    this.regions = this._org.region_list;
    this.region_levels = this._org.active_region.pipe(map((_) => {
      const region_buildings = this._org.buildings.filter((b) => !_ || b.parent_id === _.id);
      const region_levels = region_buildings.map((b) => ({
        id: b.id,
        name: b.display_name || b.name,
        levels: this._org.levels.filter((l) => l.parent_id === b.id && l.tags.includes("parking"))
      }));
      return region_levels.filter((_2) => _2.levels.length);
    }));
    this.features = this._form.features;
    this.close = () => this._bsheet_ref.dismiss();
    this.setOptions = (o) => this._form.setOptions(o);
    this.setRegion = (r) => this._org.region = r;
    this.can_close = !!this._bsheet_ref;
  }
  toggleFeature(feat, state) {
    return __async(this, null, function* () {
      const { features } = yield this.options.pipe(take(1)).toPromise();
      const new_list = (features || []).filter((_) => feat !== _);
      if (state)
        new_list.push(feat);
      this.setOptions({ features: new_list });
    });
  }
  static {
    this.\u0275fac = function ParkingSpaceFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpaceFiltersComponent)(\u0275\u0275directiveInject(MatBottomSheetRef, 8), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceFiltersComponent, selectors: [["parking-space-filters"]], inputs: { hide_levels: "hide_levels" }, standalone: false, decls: 41, vars: 39, consts: [[1, "flex", "items-center", "border-b", "border-base-200", "pb-2", "sm:hidden"], [1, "flex-1", "pl-2"], ["icon", "", "matRipple", "", "close", "", 3, "click", 4, "ngIf"], [1, "font-medium", "flex-2", "text-center"], [1, "flex-1"], [1, "max-h-[65vh]", "p-2", "overflow-y-auto", "overflow-x-hidden", "divide-y", "divide-base-200", "w-full", "max-w-[100vw]", 3, "formGroup"], ["details", ""], [1, "text-lg", "font-medium"], [1, "flex-1", "min-w-[256px]", "flex", "flex-col"], ["for", "location"], [4, "ngIf"], [1, "flex-1", "min-w-[256px]"], ["for", "date"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "to"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["favs", "", 1, "space-y-2", "pb-4"], [1, "flex", "items-center"], ["for", "fav", 1, "flex-1", "w-1/2"], ["name", "fav", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["features", "", "class", "space-y-2", 4, "ngIf"], ["class", "px-2 pt-2 w-full border-t border-base-200", 4, "ngIf"], ["icon", "", "matRipple", "", "close", "", 3, "click"], ["appearance", "outline", "class", "w-full", 4, "ngIf"], ["appearance", "outline", 1, "w-full"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "use_24hr"], ["features", "", 1, "space-y-2"], ["class", "flex items-center", 4, "ngFor", "ngForOf"], ["for", "feat", 1, "flex-1", "w-1/2"], ["name", "feat", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "px-2", "pt-2", "w-full", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "close", "", 1, "w-full", 3, "click"]], template: function ParkingSpaceFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, ParkingSpaceFiltersComponent_button_2_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h3", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "form", 5)(8, "section", 6)(9, "h2", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "label", 9);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, ParkingSpaceFiltersComponent_ng_container_16_Template, 4, 4, "ng-container", 10)(17, ParkingSpaceFiltersComponent_ng_container_17_Template, 4, 4, "ng-container", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 11)(19, "label", 12);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementStart(22, "span");
        \u0275\u0275text(23, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "a-date-field", 13);
        \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_Template_a_date_field_ngModelChange_24_listener($event) {
          return ctx.form.patchValue({ date: $event });
        });
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(27, ParkingSpaceFiltersComponent_div_27_Template, 15, 13, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "section", 15)(29, "h2", 7);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 16)(33, "div", 17);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-checkbox", 18);
        \u0275\u0275pipe(37, "async");
        \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_Template_mat_checkbox_ngModelChange_36_listener($event) {
          return ctx.setOptions({ show_fav: $event });
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(38, ParkingSpaceFiltersComponent_section_38_Template, 6, 6, "section", 19);
        \u0275\u0275pipe(39, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(40, ParkingSpaceFiltersComponent_div_40_Template, 4, 3, "div", 20);
      }
      if (rf & 2) {
        let tmp_15_0;
        let tmp_17_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.can_close);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 19, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 21, "BOOKINGS.DETAILS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 23, "BOOKINGS.LOCATION"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.use_region);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.use_region);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 25, "FORM.DATE"));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(37, _c011))("to", ctx.end_date);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 27, "FORM.DATE_REQUIRED"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", false);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 29, "COMMON.FAVOURITES"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 31, "COMMON.FAVOURITES_ONLY"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", (tmp_15_0 = \u0275\u0275pipeBind1(37, 33, ctx.options)) == null ? null : tmp_15_0.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(38, _c011));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_17_0 = \u0275\u0275pipeBind1(39, 35, ctx.features)) == null ? null : tmp_17_0.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.can_close);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, MatFormField, MatCheckbox, MatOption, MatOptgroup, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, IconComponent, MatSelect, MatRipple, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=parking-filters.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceFiltersComponent, { className: "ParkingSpaceFiltersComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-filters.component.ts", lineNumber: 245 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-filters-display.component.ts
var _c012 = (a0) => ({ count: a0 });
function ParkingSpaceFiltersDisplayComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.location, " ");
  }
}
function ParkingSpaceFiltersDisplayComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 13);
    \u0275\u0275listener("click", function ParkingSpaceFiltersDisplayComponent_div_24_Template_button_click_3_listener() {
      const feat_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeFeature(feat_r3));
    });
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r3);
  }
}
var ParkingSpaceFiltersDisplayComponent = class _ParkingSpaceFiltersDisplayComponent extends AsyncHandler {
  get start() {
    return this._event_form.form.value.date;
  }
  get end() {
    const { date, duration } = this._event_form.form.value;
    return date + duration * 60 * 1e3;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_bsheet, _event_form, _org, _settings) {
    super();
    this._bsheet = _bsheet;
    this._event_form = _event_form;
    this._org = _org;
    this._settings = _settings;
    this.view = "list";
    this.viewChange = new EventEmitter();
    this.options = this._event_form.options;
    this.location = "";
    this.editFilters = () => this._bsheet.open(ParkingSpaceFiltersComponent);
  }
  ngOnInit() {
    this.subscription("opts", this.options.subscribe(({ zone_id }) => this._updateLocation([zone_id])));
  }
  removeFeature(feat) {
    return __async(this, null, function* () {
      const value = yield this._event_form.options.pipe(take(1)).toPromise();
      this._event_form.setOptions(__spreadProps(__spreadValues({}, value), {
        features: (value.features || []).filter((_) => _ !== feat)
      }));
    });
  }
  _updateLocation(zone_ids = []) {
    const level = this._org.levelWithID(zone_ids);
    const item = level || this._org.building;
    this.location = item?.display_name || item?.name || "";
  }
  static {
    this.\u0275fac = function ParkingSpaceFiltersDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpaceFiltersDisplayComponent)(\u0275\u0275directiveInject(MatBottomSheet), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceFiltersDisplayComponent, selectors: [["parking-space-filters-display"]], inputs: { view: "view" }, outputs: { viewChange: "viewChange" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 26, vars: 37, consts: [["actions", "", 1, "sm:hidden", "space-x-2", "flex", "items-center", "p-2"], ["matRipple", "", "filters", "", 1, "flex-1", "w-1/2", 3, "click"], [1, "flex", "items-center"], ["matRipple", "", "map", "", 1, "rounded-l", "rounded-r-none", 3, "click"], ["matRipple", "", "list", "", 1, "rounded-r", "rounded-l-none", 3, "click"], ["filters", "", 1, "flex", "items-center", "flex-wrap", "p-2", "w-[35rem]", "max-w-full", "sm:max-w-[35rem]"], ["filter-item", "", "zone", "", 4, "ngIf"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "count", ""], ["filter-item", "", 4, "ngFor", "ngForOf"], ["filter-item", "", "zone", ""], ["filter-item", ""], ["icon", "", "matRipple", "", 1, "-mr-4", 3, "click"]], template: function ParkingSpaceFiltersDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "button", 1);
        \u0275\u0275listener("click", function ParkingSpaceFiltersDisplayComponent_Template_button_click_1_listener() {
          return ctx.editFilters();
        });
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
        \u0275\u0275listener("click", function ParkingSpaceFiltersDisplayComponent_Template_button_click_5_listener() {
          ctx.view = "map";
          return ctx.viewChange.emit(ctx.view);
        });
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 4);
        \u0275\u0275listener("click", function ParkingSpaceFiltersDisplayComponent_Template_button_click_8_listener() {
          ctx.view = "list";
          return ctx.viewChange.emit(ctx.view);
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "section", 5);
        \u0275\u0275template(12, ParkingSpaceFiltersDisplayComponent_div_12_Template, 2, 1, "div", 6);
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "date");
        \u0275\u0275pipe(19, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 9);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "async");
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, ParkingSpaceFiltersDisplayComponent_div_24_Template, 6, 1, "div", 10);
        \u0275\u0275pipe(25, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_8_0;
        let tmp_9_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("inverse", ctx.view !== "map");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 15, "COMMON.MAP"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.view !== "list");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 17, "COMMON.LIST"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.location);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 19, ctx.start, "mediumDate"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(18, 22, ctx.start, ctx.time_format), " \u2014 ", \u0275\u0275pipeBind2(19, 25, ctx.end, ctx.time_format), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 30, "CALENDAR_EVENT.SPACE_SELECT_SIZE_X", \u0275\u0275pureFunction1(35, _c012, ((tmp_8_0 = \u0275\u0275pipeBind1(22, 28, ctx.options)) == null ? null : tmp_8_0.capcaity) || 2)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", (tmp_9_0 = \u0275\u0275pipeBind1(25, 33, ctx.options)) == null ? null : tmp_9_0.features);
      }
    }, dependencies: [NgForOf, NgIf, IconComponent, MatRipple, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=parking-filters-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceFiltersDisplayComponent, { className: "ParkingSpaceFiltersDisplayComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-filters-display.component.ts", lineNumber: 100 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-list.component.ts
var _c013 = (a0) => ({ count: a0 });
function ParkingSpaceListComponent_ng_container_7_ul_1_li_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "app-icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function ParkingSpaceListComponent_ng_container_7_ul_1_li_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function ParkingSpaceListComponent_ng_container_7_ul_1_li_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
}
function ParkingSpaceListComponent_ng_container_7_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "button", 10);
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_container_7_ul_1_li_1_Template_button_click_1_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectSpace(space_r2));
    });
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275template(3, ParkingSpaceListComponent_ng_container_7_ul_1_li_1_div_3_Template, 3, 0, "div", 12)(4, ParkingSpaceListComponent_ng_container_7_ul_1_li_1_img_4_Template, 1, 1, "img", 13)(5, ParkingSpaceListComponent_ng_container_7_ul_1_li_1_ng_template_5_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16)(11, "app-icon", 17);
    \u0275\u0275text(12, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "button", 18);
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_container_7_ul_1_li_1_Template_button_click_15_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(space_r2));
    });
    \u0275\u0275elementStart(16, "app-icon");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    const placeholder_r4 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("!border-info", ctx_r2.active === space_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.selected.includes(space_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", space_r2.images == null ? null : space_r2.images.length)("ngIfElse", placeholder_r4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", space_r2.name || "Meeting Space", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", space_r2.location || (space_r2.level == null ? null : space_r2.level.display_name) || (space_r2.level == null ? null : space_r2.level.name) || (space_r2.zone == null ? null : space_r2.zone.display_name) || (space_r2.zone == null ? null : space_r2.zone.name), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx_r2.isFavourite(space_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isFavourite(space_r2.id) ? "favorite" : "favorite_border");
  }
}
function ParkingSpaceListComponent_ng_container_7_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275template(1, ParkingSpaceListComponent_ng_container_7_ul_1_li_1_Template, 18, 10, "li", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r2.assets));
  }
}
function ParkingSpaceListComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ParkingSpaceListComponent_ng_container_7_ul_1_Template, 3, 3, "ul", 6);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    const empty_state_r5 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(2, 2, ctx_r2.assets)) == null ? null : tmp_3_0.length)("ngIfElse", empty_state_r5);
  }
}
function ParkingSpaceListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.PARKING_LIST_EMPTY"), " ");
  }
}
function ParkingSpaceListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "mat-spinner", 25);
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.PARKING_LIST_LOADING"), " ");
  }
}
var ParkingSpaceListComponent = class _ParkingSpaceListComponent {
  constructor(_form) {
    this._form = _form;
    this.active = "";
    this.selected = "";
    this.favorites = [];
    this.onSelect = new EventEmitter();
    this.toggleFav = new EventEmitter();
    this.assets = combineLatest([
      this._form.options,
      this._form.available_resources
    ]).pipe(map(([{ show_fav }, _]) => _.filter((i) => !show_fav || this.isFavourite(i.id))));
    this.loading = this._form.loading;
  }
  isFavourite(space_id) {
    return this.favorites.includes(space_id);
  }
  selectSpace(space) {
    this.onSelect.emit(space);
  }
  static {
    this.\u0275fac = function ParkingSpaceListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpaceListComponent)(\u0275\u0275directiveInject(BookingFormService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceListComponent, selectors: [["parking-space-list"]], inputs: { active: "active", selected: "selected", favorites: "favorites" }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, standalone: false, decls: 13, vars: 15, consts: [["empty_state", ""], ["load_state", ""], ["placeholder", ""], [1, "font-bold"], ["count", "", 1, "text-sm", "opacity-60", "mb-4"], [4, "ngIf", "ngIfElse"], ["class", "list-style-none space-y-2", 4, "ngIf", "ngIfElse"], [1, "list-style-none", "space-y-2"], ["space", "", "class", "relative p-2 rounded-lg w-full shadow border bg-base-100 border-base-200", 3, "!border-info", 4, "ngFor", "ngForOf"], ["space", "", 1, "relative", "p-2", "rounded-lg", "w-full", "shadow", "border", "bg-base-100", "border-base-200"], ["matRipple", "", "select", "", 1, "w-full", "h-full", "flex", "items-center", 3, "click"], [1, "relative", "w-20", "h-20", "rounded-xl", "bg-base-200", "mr-4", "overflow-hidden", "flex", "items-center", "justify-center"], ["class", "absolute top-1 left-1 border border-neutral bg-base-200 rounded-full h-6 w-6 flex items-center justify-center text-white", 4, "ngIf"], ["auth", "", "class", "object-cover h-full", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2"], [1, "font-medium", "truncate", "mr-10"], [1, "flex", "items-center", "text-sm", "space-x-2"], [1, "text-info"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "top-1", "right-1", 3, "click"], [1, "absolute", "top-1", "left-1", "border", "border-neutral", "bg-base-200", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center", "text-white"], ["auth", "", 1, "object-cover", "h-full", 3, "source"], ["src", "assets/icons/car-placeholder.svg", 1, "m-auto"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"], ["loading", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"], [1, "opacity-30"]], template: function ParkingSpaceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3", 3);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, ParkingSpaceListComponent_ng_container_7_Template, 3, 4, "ng-container", 5);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275template(9, ParkingSpaceListComponent_ng_template_9_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(11, ParkingSpaceListComponent_ng_template_11_Template, 5, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_3_0;
        const load_state_r6 = \u0275\u0275reference(12);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "COMMON.RESULTS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 8, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(13, _c013, ((tmp_3_0 = \u0275\u0275pipeBind1(5, 6, ctx.assets)) == null ? null : tmp_3_0.length) || 0)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(8, 11, ctx.loading))("ngIfElse", load_state_r6);
      }
    }, dependencies: [NgForOf, NgIf, MatProgressSpinner, IconComponent, AuthenticatedImageDirective, MatRipple, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  overflow: auto;\n}\n/*# sourceMappingURL=parking-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceListComponent, { className: "ParkingSpaceListComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-list.component.ts", lineNumber: 125 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-location-pin.component.ts
function ParkingSpaceLocationPinComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
}
function ParkingSpaceLocationPinComponent_app_icon_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-icon", 17);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
var ParkingSpaceLocationPinComponent = class _ParkingSpaceLocationPinComponent {
  get selected() {
    return this._data.selected === true;
  }
  constructor(_data) {
    this._data = _data;
  }
  static {
    this.\u0275fac = function ParkingSpaceLocationPinComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpaceLocationPinComponent)(\u0275\u0275directiveInject(MAP_FEATURE_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceLocationPinComponent, selectors: [["parking-space-location-pin"]], standalone: false, decls: 17, vars: 2, consts: [[1, "absolute", "bottom-0", "left-1/2", "-translate-x-1/2"], ["width", "66", "height", "80", "viewBox", "0 0 66 80", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["filter", "url(#filter0_d_1065_10313)"], ["d", "M19.724 53.0408C25.0871 60.3435 30.5582 65.8583 31.0184 66.3178C31.4558 66.755 32.0489 67.0007 32.6674 67.0008H32.6678C33.2863 67.0007 33.8795 66.755 34.3169 66.3178C34.7771 65.8583 40.2481 60.3435 45.6112 53.0408C48.2928 49.3894 50.963 45.2701 52.9663 41.0957C54.9629 36.935 56.3331 32.6459 56.3342 28.6724C56.364 25.5564 55.7725 22.4657 54.5941 19.5809C53.415 16.6946 51.6722 14.0724 49.4675 11.8677C47.2629 9.66308 44.6407 7.92024 41.7544 6.74121C38.8711 5.5634 35.782 4.97184 32.6676 5.00103C29.5533 4.97184 26.4642 5.5634 23.5809 6.74121C20.6946 7.92024 18.0724 9.66308 15.8677 11.8677C13.6631 14.0724 11.9202 16.6946 10.7412 19.5809C9.56278 22.4657 8.97122 25.5565 9.00108 28.6726C9.0022 32.646 10.3724 36.9351 12.369 41.0957C14.3723 45.2701 17.0425 49.3894 19.724 53.0408Z", "fill", "#309251", "stroke", "#0B421D", "stroke-width", "2"], ["id", "filter0_d_1065_10313", "x", "0", "y", "0", "width", "65.3353", "height", "80.001", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["flood-opacity", "0", "result", "BackgroundImageFix"], ["in", "SourceAlpha", "type", "matrix", "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", "result", "hardAlpha"], ["dy", "4"], ["stdDeviation", "4"], ["in2", "hardAlpha", "operator", "out"], ["type", "matrix", "values", "0 0 0 0 0.0196078 0 0 0 0 0.109804 0 0 0 0 0.172549 0 0 0 0.2 0"], ["mode", "normal", "in2", "BackgroundImageFix", "result", "effect1_dropShadow_1065_10313"], ["mode", "normal", "in", "SourceGraphic", "in2", "effect1_dropShadow_1065_10313", "result", "shape"], [1, "absolute", "top-0", "left-0", "w-full", "h-3/4", "flex", "items-center", "justify-center"], ["class", "relative z-10 h-4 w-4 rounded-full bg-base-100 border-2 border-[#0B421D]", 4, "ngIf"], ["class", "relative text-white z-10 text-2xl", 4, "ngIf"], [1, "relative", "z-10", "h-4", "w-4", "rounded-full", "bg-base-100", "border-2", "border-[#0B421D]"], [1, "relative", "text-white", "z-10", "text-2xl"]], template: function ParkingSpaceLocationPinComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(1, "svg", 1)(2, "g", 2);
        \u0275\u0275element(3, "path", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "defs")(5, "filter", 4);
        \u0275\u0275element(6, "feFlood", 5)(7, "feColorMatrix", 6)(8, "feOffset", 7)(9, "feGaussianBlur", 8)(10, "feComposite", 9)(11, "feColorMatrix", 10)(12, "feBlend", 11)(13, "feBlend", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "div", 13);
        \u0275\u0275template(15, ParkingSpaceLocationPinComponent_div_15_Template, 1, 0, "div", 14)(16, ParkingSpaceLocationPinComponent_app_icon_16_Template, 2, 0, "app-icon", 15);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275property("ngIf", !ctx.selected);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selected);
      }
    }, dependencies: [NgIf, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceLocationPinComponent, { className: "ParkingSpaceLocationPinComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-location-pin.component.ts", lineNumber: 83 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-map.component.ts
var _c014 = () => ({ controls: true });
function ParkingSpaceSelectMapComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "interactive-map", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275twoWayListener("zoomChange", function ParkingSpaceSelectMapComponent_ng_container_0_Template_interactive_map_zoomChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.zoom, $event) || (ctx_r1.zoom = $event);
      return \u0275\u0275resetView($event);
    })("centerChange", function ParkingSpaceSelectMapComponent_ng_container_0_Template_interactive_map_centerChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.center, $event) || (ctx_r1.center = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.map_url);
    \u0275\u0275twoWayProperty("zoom", ctx_r1.zoom)("center", ctx_r1.center);
    \u0275\u0275property("styles", \u0275\u0275pipeBind1(2, 7, ctx_r1.styles))("features", \u0275\u0275pipeBind1(3, 9, ctx_r1.features))("actions", \u0275\u0275pipeBind1(4, 11, ctx_r1.actions))("options", \u0275\u0275pureFunction0(13, _c014));
  }
}
function ParkingSpaceSelectMapComponent_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275property("value", opt_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3.display_name || opt_r3.name, " ");
  }
}
var ParkingSpaceSelectMapComponent = class _ParkingSpaceSelectMapComponent extends AsyncHandler {
  get map_url() {
    return this.level?.map_id || "";
  }
  constructor(_event_form, _maps_people) {
    super();
    this._event_form = _event_form;
    this._maps_people = _maps_people;
    this.selected = [];
    this.is_displayed = false;
    this.onSelect = new EventEmitter();
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
    this._seletedSpace = (s) => () => this.onSelect.emit(s);
    this.level = null;
    this.levels = this._event_form.available_spaces.pipe(map((_) => unique(_.map(({ level }) => level))));
    this.features = this._event_form.available_spaces.pipe(debounceTime(1e3), map((l) => l.map((space) => ({
      location: space.map_id,
      content: ParkingSpaceLocationPinComponent,
      data: __spreadProps(__spreadValues({}, space), {
        selected: this.selected.includes(space.id)
      })
    }))));
    this.actions = this._event_form.available_spaces.pipe(map((l) => l.map((space) => ({
      id: space.map_id,
      action: ["touchend", "mouseup"],
      callback: this._seletedSpace(space)
    }))));
  }
  ngOnInit() {
    this.subscription("spaces", this._event_form.available_spaces.subscribe((_) => {
      if (!this.level && _.length)
        this.level = _[0].level;
    }));
  }
  setLevel(level) {
    this.level = level;
    this._maps_people.setCustomZone(level.parent_id);
  }
  setZoom(new_zoom) {
    this.zoom = Math.max(0.5, Math.min(10, new_zoom));
  }
  resetMap() {
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
  }
  static {
    this.\u0275fac = function ParkingSpaceSelectMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpaceSelectMapComponent)(\u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(MapsPeopleService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceSelectMapComponent, selectors: [["parking-space-map"]], inputs: { selected: "selected", is_displayed: "is_displayed" }, outputs: { onSelect: "onSelect" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 5, consts: [[4, "ngIf"], [1, "absolute", "inset-x-0", "top-0", "bg-base-100", "p-2", "border-b", "border-base-200"], ["levels", "", "appearance", "outline", 1, "w-full", "h-[3.25rem]"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], [3, "value"]], template: function ParkingSpaceSelectMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ParkingSpaceSelectMapComponent_ng_container_0_Template, 5, 14, "ng-container", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "mat-form-field", 2)(3, "mat-select", 3);
        \u0275\u0275twoWayListener("ngModelChange", function ParkingSpaceSelectMapComponent_Template_mat_select_ngModelChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.level, $event) || (ctx.level = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ParkingSpaceSelectMapComponent_Template_mat_select_ngModelChange_3_listener($event) {
          return ctx.setLevel($event);
        });
        \u0275\u0275template(4, ParkingSpaceSelectMapComponent_mat_option_4_Template, 2, 2, "mat-option", 4);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.is_displayed);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.level);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 3, ctx.levels));
      }
    }, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, MatFormField, MatOption, InteractiveMapComponent, MatSelect, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  padding-top: 4rem;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n/*# sourceMappingURL=parking-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceSelectMapComponent, { className: "ParkingSpaceSelectMapComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-map.component.ts", lineNumber: 61 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-select-modal.component.ts
var _c015 = (a0) => ({ count: a0 });
function ParkingSpaceSelectModalComponent_parking_space_list_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "parking-space-list", 21);
    \u0275\u0275listener("toggleFav", function ParkingSpaceSelectModalComponent_parking_space_list_12_Template_parking_space_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFavourite($event));
    })("onSelect", function ParkingSpaceSelectModalComponent_parking_space_list_12_Template_parking_space_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.displayed = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("active", ctx_r2.displayed == null ? null : ctx_r2.displayed.id)("selected", ctx_r2.selected_ids)("favorites", ctx_r2.favorites);
  }
}
function ParkingSpaceSelectModalComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ParkingSpaceSelectModalComponent_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.displayed = null);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.BACK"), " ");
  }
}
function ParkingSpaceSelectModalComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "parking-space-map", 23);
    \u0275\u0275listener("onSelect", function ParkingSpaceSelectModalComponent_ng_template_37_Template_parking_space_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.displayed = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("selected", ctx_r2.selected_ids)("is_displayed", !!ctx_r2.displayed);
  }
}
var FAV_PARKING_KEY = "favourite_parking_spaces";
var ParkingSpaceSelectModalComponent = class _ParkingSpaceSelectModalComponent {
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get favorites() {
    return this._settings.get(FAV_PARKING_KEY) || [];
  }
  constructor(_dialog_ref, _settings, _event_form, _data) {
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this._event_form = _event_form;
    this._data = _data;
    this.selected = [];
    this.view = "list";
    this.selected = [..._data.spaces || []];
    this._event_form.setOptions(_data.options);
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter((_) => _.id !== item.id);
    if (state)
      list.push(item);
    this.selected = list;
    if (!this._data.options.group && state)
      this._dialog_ref.close([item]);
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_PARKING_KEY, [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_PARKING_KEY, fav_list.filter((_) => _ !== item.id));
    }
  }
  static {
    this.\u0275fac = function ParkingSpaceSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpaceSelectModalComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceSelectModalComponent, selectors: [["parking-space-select-modal"]], standalone: false, decls: 39, vars: 38, consts: [["map_view", ""], [1, "w-[100vw]", "h-[100vh]", "sm:relative", "sm:w-auto", "sm:h-auto", "flex", "flex-col", "bg-base-100"], [1, "flex", "items-center", "space-x-4", "w-full"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "flex-1", "flex", "items-center", "divide-x", "divide-base-200", "min-h-[65vh]", "h-[65vh]", "sm:max-h-[65vh]", "sm:max-w-[95vw]", "w-full", "overflow-hidden"], [1, "h-full", "hidden", "sm:flex", "max-w-[20rem]", "sm:h-[65vh]", "sm:max-h-full", 3, "hide_levels"], [1, "flex", "flex-col", "items-center", "flex-1", "w-1/2", "h-full", "sm:h-[65vh]"], [1, "w-full", "border-b", "border-base-200", 3, "viewChange", "view"], ["class", "flex-1 h-1/2 bg-base-200", 3, "active", "selected", "favorites", "toggleFav", "onSelect", 4, "ngIf", "ngIfElse"], [1, "h-full", "w-full", "sm:h-[65vh]", "absolute", "sm:relative", "sm:flex", "sm:max-w-[20rem]", "z-20", "bg-base-100", "block", 3, "activeChange", "toggleFav", "close", "space", "active", "fav"], [1, "flex", "sm:hidden", "flex-col-reverse", "items-center", "justify-end", "p-2", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "return", "", "class", "inverse sm:hidden w-full", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "save", "", 1, "w-full", "sm:w-32", "sm:mb-0", 3, "mat-dialog-close"], [1, "hidden", "sm:flex", "items-center", "justify-between", "p-2", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "opacity-60", "text-sm"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "mr-1"], [1, "flex-1", "h-1/2", "bg-base-200", 3, "toggleFav", "onSelect", "active", "selected", "favorites"], ["btn", "", "matRipple", "", "return", "", 1, "inverse", "sm:hidden", "w-full", 3, "click"], [1, "flex-1", "h-1/2", "w-full", 3, "onSelect", "selected", "is_displayed"]], template: function ParkingSpaceSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "button", 3)(3, "app-icon");
        \u0275\u0275text(4, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "h3");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "main", 4);
        \u0275\u0275element(9, "parking-space-filters", 5);
        \u0275\u0275elementStart(10, "div", 6)(11, "parking-space-filters-display", 7);
        \u0275\u0275twoWayListener("viewChange", function ParkingSpaceSelectModalComponent_Template_parking_space_filters_display_viewChange_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.view, $event) || (ctx.view = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, ParkingSpaceSelectModalComponent_parking_space_list_12_Template, 1, 3, "parking-space-list", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "parking-space-details", 9);
        \u0275\u0275listener("activeChange", function ParkingSpaceSelectModalComponent_Template_parking_space_details_activeChange_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSelected(ctx.displayed, $event));
        })("toggleFav", function ParkingSpaceSelectModalComponent_Template_parking_space_details_toggleFav_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleFavourite(ctx.displayed));
        })("close", function ParkingSpaceSelectModalComponent_Template_parking_space_details_close_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.displayed = null);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "footer", 10);
        \u0275\u0275template(15, ParkingSpaceSelectModalComponent_button_15_Template, 3, 3, "button", 11);
        \u0275\u0275elementStart(16, "button", 12);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "footer", 13)(20, "button", 14)(21, "div", 15)(22, "app-icon", 16);
        \u0275\u0275text(23, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 17);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "p", 18);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 19);
        \u0275\u0275listener("click", function ParkingSpaceSelectModalComponent_Template_button_click_30_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id)));
        });
        \u0275\u0275elementStart(31, "div", 15)(32, "app-icon", 16);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 20);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(37, ParkingSpaceSelectModalComponent_ng_template_37_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const map_view_r6 = \u0275\u0275reference(38);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 25, "BOOKINGS.PARKING_FIND"));
        \u0275\u0275advance(3);
        \u0275\u0275property("hide_levels", ctx.view !== "list");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("view", ctx.view);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "list")("ngIfElse", map_view_r6);
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", !ctx.displayed)("inset-0", ctx.displayed);
        \u0275\u0275property("space", ctx.displayed)("active", ctx.selected_ids.includes(ctx.displayed == null ? null : ctx.displayed.id))("fav", ctx.displayed && ctx.favorites.includes(ctx.displayed == null ? null : ctx.displayed.id));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.displayed);
        \u0275\u0275advance();
        \u0275\u0275classProp("mb-2", ctx.displayed);
        \u0275\u0275property("mat-dialog-close", ctx.selected);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 27, "COMMON.VIEW_LIST"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", ctx.selected);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 29, "COMMON.BACK_TO_FORM"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 31, "BOOKINGS.PARKING_ADDED_COUNT", \u0275\u0275pureFunction1(36, _c015, ctx.selected.length)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
        \u0275\u0275property("disabled", !ctx.displayed);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 34, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
      }
    }, dependencies: [NgIf, MatDialogClose, IconComponent, MatRipple, ParkingSpaceFiltersComponent, ParkingSpaceFiltersDisplayComponent, ParkingSpaceListComponent, ParkingSpaceSelectMapComponent, ParkingSpaceDetailsComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceSelectModalComponent, { className: "ParkingSpaceSelectModalComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-select-modal.component.ts", lineNumber: 142 });
})();

// libs/bookings/src/lib/parking-space-list-field.component.ts
function ParkingSpaceListFieldComponent_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function ParkingSpaceListFieldComponent_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
}
function ParkingSpaceListFieldComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275template(2, ParkingSpaceListFieldComponent_div_1_img_2_Template, 1, 1, "img", 10)(3, ParkingSpaceListFieldComponent_div_1_ng_template_3_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "div", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13)(9, "app-icon", 14);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 15)(14, "button", 16);
    \u0275\u0275listener("click", function ParkingSpaceListFieldComponent_div_1_Template_button_click_14_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeResources(space_r2));
    });
    \u0275\u0275elementStart(15, "div", 17)(16, "app-icon", 5);
    \u0275\u0275text(17, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "button", 18);
    \u0275\u0275listener("click", function ParkingSpaceListFieldComponent_div_1_Template_button_click_21_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeResource(space_r2));
    });
    \u0275\u0275elementStart(22, "div", 17)(23, "app-icon", 5);
    \u0275\u0275text(24, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(28, "button", 19);
    \u0275\u0275listener("click", function ParkingSpaceListFieldComponent_div_1_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFavourite(ctx_r2.asset));
    });
    \u0275\u0275elementStart(29, "app-icon");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    const placeholder_r4 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", space_r2.images == null ? null : space_r2.images.length)("ngIfElse", placeholder_r4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", space_r2.name || "Meeting Resource", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", space_r2.location || (space_r2.level == null ? null : space_r2.level.display_name) || (space_r2.level == null ? null : space_r2.level.name) || (space_r2.zone == null ? null : space_r2.zone.display_name) || (space_r2.zone == null ? null : space_r2.zone.name), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 9, "COMMON.CHANGE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 11, "COMMON.REMOVE"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-info", ctx_r2.favorites.includes(ctx_r2.asset == null ? null : ctx_r2.asset.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.favorites.includes(ctx_r2.asset == null ? null : ctx_r2.asset.id) ? "favorite" : "favorite_border");
  }
}
var EMPTY_FAVS = [];
var ParkingSpaceListFieldComponent = class _ParkingSpaceListFieldComponent {
  get favorites() {
    return this._settings.get("favourite_spaces") || EMPTY_FAVS;
  }
  constructor(_settings, _dialog) {
    this._settings = _settings;
    this._dialog = _dialog;
    this.disable_date = false;
    this.room_size = 3;
    this.spaces = [];
    this.disabled = false;
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled = s;
  }
  /** Add or edit selected spaces */
  changeResources() {
    const ref = this._dialog.open(ParkingSpaceSelectModalComponent, {
      data: {
        spaces: this.spaces,
        options: {
          capacity: this.room_size,
          disable_date: this.disable_date
        }
      }
    });
    ref.afterClosed().subscribe((spaces) => {
      if (!spaces)
        return;
      this.setValue(spaces);
    });
  }
  /** Remove the selected space from the list */
  removeResource(space) {
    this.setValue(this.spaces.filter((_) => _.id !== space.id));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.spaces = new_value;
    if (this._onChange)
      this._onChange(this.spaces);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.spaces = value || [];
  }
  toggleFavourite(space) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(space.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_PARKING_KEY, [
        ...fav_list,
        space.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_PARKING_KEY, fav_list.filter((_) => _ !== space.id));
    }
  }
  static {
    this.\u0275fac = function ParkingSpaceListFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpaceListFieldComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceListFieldComponent, selectors: [["parking-space-list-field"]], inputs: { disable_date: "disable_date" }, standalone: false, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _ParkingSpaceListFieldComponent),
        multi: true
      }
    ])], decls: 11, vars: 4, consts: [["placeholder", ""], ["list", "", 1, "space-y-2"], ["space", "", "class", "relative p-2 rounded-lg w-full flex items-center shadow border border-base-200", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "add-space", "", 1, "w-full", "inverse", "mt-2", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-2xl"], [1, "flex", "items-center", "flex-wrap", "sm:space-x-2", "mb-2"], [1, "flex-1", "min-w-[256px]", "space-y-2"], ["space", "", 1, "relative", "p-2", "rounded-lg", "w-full", "flex", "items-center", "shadow", "border", "border-base-200"], [1, "w-24", "h-24", "rounded-xl", "bg-base-200", "mr-4", "overflow-hidden", "flex", "items-center", "justify-center"], ["auth", "", "class", "object-cover h-full", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "pb-4"], [1, "font-medium"], [1, "flex", "items-center", "text-sm", "space-x-2"], [1, "text-blue-500"], [1, "absolute", "bottom-0", "right-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "edit-space", "", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "remove-space", "", 1, "clear", 3, "click"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "top-1", "right-1", 3, "click"], ["auth", "", 1, "object-cover", "h-full", 3, "source"], ["src", "assets/icons/car-placeholder.svg", 1, "m-auto"]], template: function ParkingSpaceListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, ParkingSpaceListFieldComponent_div_1_Template, 31, 13, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "button", 3);
        \u0275\u0275listener("click", function ParkingSpaceListFieldComponent_Template_button_click_2_listener() {
          return ctx.changeResources();
        });
        \u0275\u0275elementStart(3, "div", 4)(4, "app-icon", 5);
        \u0275\u0275text(5, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275element(10, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.spaces);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 2, "BOOKINGS.PARKING_ADD"));
      }
    }, dependencies: [NgForOf, NgIf, IconComponent, AuthenticatedImageDirective, MatRipple, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceListFieldComponent, { className: "ParkingSpaceListFieldComponent", filePath: "libs/bookings/src/lib/parking-space-list-field.component.ts", lineNumber: 126 });
})();

// libs/bookings/src/lib/desk-list-field.component.ts
var _c016 = () => [];
var _c17 = () => ({ standalone: true });
function DeskListFieldComponent_div_1_div_1_mat_checkbox_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 24);
    \u0275\u0275listener("ngModelChange", function DeskListFieldComponent_div_1_div_1_mat_checkbox_4_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.setFeature(opt_r3, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngModel", (ctx_r3.selected_features || \u0275\u0275pureFunction0(3, _c016)).includes(opt_r3))("ngModelOptions", \u0275\u0275pureFunction0(4, _c17));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3, " ");
  }
}
function DeskListFieldComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 21);
    \u0275\u0275text(2, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275template(4, DeskListFieldComponent_div_1_div_1_mat_checkbox_4_Template, 2, 5, "mat-checkbox", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.features);
  }
}
function DeskListFieldComponent_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 25);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r5.images[0]);
  }
}
function DeskListFieldComponent_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
}
function DeskListFieldComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, DeskListFieldComponent_div_1_div_1_Template, 5, 1, "div", 8);
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275template(3, DeskListFieldComponent_div_1_img_3_Template, 1, 1, "img", 10)(4, DeskListFieldComponent_div_1_ng_template_4_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11)(7, "div", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13)(10, "app-icon", 14);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 15)(15, "button", 16);
    \u0275\u0275listener("click", function DeskListFieldComponent_div_1_Template_button_click_15_listener() {
      const item_r5 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeResources(item_r5));
    });
    \u0275\u0275elementStart(16, "div", 17)(17, "app-icon");
    \u0275\u0275text(18, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 18);
    \u0275\u0275listener("click", function DeskListFieldComponent_div_1_Template_button_click_21_listener() {
      const item_r5 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeResource(item_r5));
    });
    \u0275\u0275elementStart(22, "div", 17)(23, "app-icon");
    \u0275\u0275text(24, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "button", 19);
    \u0275\u0275listener("click", function DeskListFieldComponent_div_1_Template_button_click_27_listener() {
      const item_r5 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleFavourite(item_r5));
    });
    \u0275\u0275elementStart(28, "app-icon");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const placeholder_r6 = \u0275\u0275reference(5);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.features == null ? null : ctx_r3.features.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r5.images == null ? null : item_r5.images.length)("ngIfElse", placeholder_r6);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", item_r5.name || item_r5.id || item_r5.map_id || "Desk", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((item_r5.zone == null ? null : item_r5.zone.display_name) || (item_r5.zone == null ? null : item_r5.zone.name));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 10, "COMMON.CHANGE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 12, "COMMON.REMOVE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-info", ctx_r3.favorites.includes(item_r5 == null ? null : item_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.favorites.includes(item_r5 == null ? null : item_r5.id) ? "favorite" : "favorite_border");
  }
}
var EMPTY_FAVS2 = [];
var DeskListFieldComponent = class _DeskListFieldComponent {
  get favorites() {
    return this._settings.get(FAV_DESK_KEY) || EMPTY_FAVS2;
  }
  constructor(_settings, _dialog) {
    this._settings = _settings;
    this._dialog = _dialog;
    this.features = [];
    this.room_size = 3;
    this.items = [];
    this.disabled = false;
    this.selected_features = [];
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled = s;
  }
  /** Add or edit selected items */
  changeResources() {
    const ref = this._dialog.open(DeskSelectModalComponent, {
      data: {
        items: this.items,
        options: { capacity: this.room_size }
      }
    });
    ref.afterClosed().subscribe((items) => {
      if (!items)
        items = ref.componentInstance.selected;
      this.setValue(items);
    });
  }
  /** Remove the selected space from the list */
  removeResource(space) {
    this.setValue(this.items.filter((_) => _.id !== space.id));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.items = new_value;
    if (this._onChange)
      this._onChange(this.items);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.items = value || [];
  }
  toggleFavourite(space) {
    if (!space?.id)
      return;
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(space.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_DESK_KEY, [
        ...fav_list,
        space.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_DESK_KEY, fav_list.filter((_) => _ !== space.id));
    }
  }
  static {
    this.\u0275fac = function DeskListFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskListFieldComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskListFieldComponent, selectors: [["desk-list-field"]], inputs: { features: "features" }, standalone: false, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DeskListFieldComponent),
        multi: true
      }
    ])], decls: 11, vars: 4, consts: [["placeholder", ""], ["list", "", 1, "space-y-2"], ["desk", "", "class", "relative p-2 rounded-lg w-full flex items-center shadow border border-base-200", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "name", "add-desk", 1, "w-full", "inverse", "mt-2", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "flex", "items-center", "flex-wrap", "sm:space-x-2", "mb-2"], [1, "flex-1", "min-w-[256px]", "space-y-2"], ["desk", "", 1, "relative", "p-2", "rounded-lg", "w-full", "flex", "items-center", "shadow", "border", "border-base-200"], ["class", "flex flex-col", 4, "ngIf"], [1, "w-20", "h-20", "rounded-xl", "bg-base-200", "mr-4", "overflow-hidden", "flex", "items-center", "justify-center"], ["auth", "", "class", "min-h-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "pb-4"], [1, "font-medium"], [1, "flex", "items-center", "text-sm", "space-x-2"], [1, "text-blue-500"], [1, "absolute", "bottom-0", "right-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "name", "edit-desk", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "name", "remove-desk", 1, "clear", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [1, "flex", "flex-col"], ["for", "title"], ["features", "", 1, "flex", "items-center", "flex-wrap", "space-x-2"], [3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["auth", "", 1, "min-h-full", "object-cover", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"]], template: function DeskListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, DeskListFieldComponent_div_1_Template, 30, 14, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "button", 3);
        \u0275\u0275listener("click", function DeskListFieldComponent_Template_button_click_2_listener() {
          return ctx.changeResources();
        });
        \u0275\u0275elementStart(3, "div", 4)(4, "app-icon");
        \u0275\u0275text(5, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275element(10, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.items);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 2, "BOOKINGS.DESK_ADD"));
      }
    }, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, MatCheckbox, IconComponent, AuthenticatedImageDirective, MatRipple, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskListFieldComponent, { className: "DeskListFieldComponent", filePath: "libs/bookings/src/lib/desk-list-field.component.ts", lineNumber: 131 });
})();

// libs/bookings/src/lib/locker-grid.component.ts
var _c017 = () => [];
function LockerGridComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function LockerGridComponent_button_1_Template_button_click_0_listener() {
      const locker_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clicked.emit(locker_r2));
    });
    \u0275\u0275element(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const locker_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-column-start", locker_r2.position[0] + 1)("grid-row-start", locker_r2.position[1] + 1)("grid-column-end", locker_r2.position[0] + (locker_r2.size[0] + 1))("background-color", ctx_r2.status(locker_r2))("grid-row-end", locker_r2.position[1] + (locker_r2.size[1] + 1));
    \u0275\u0275classProp("opacity-60", ctx_r2.selected && ctx_r2.selected !== locker_r2.id);
    \u0275\u0275property("matTooltip", locker_r2.name)("disabled", locker_r2.bookable === false || (locker_r2 == null ? null : locker_r2.available) === false);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", locker_r2.name, " ");
  }
}
var LockerGridComponent = class _LockerGridComponent {
  get columns() {
    let columns = 1;
    for (const locker of this.bank?.lockers || []) {
      const x = locker.position[0] + locker.size[0];
      if (x > columns)
        columns = x;
    }
    return columns;
  }
  constructor(_settings) {
    this._settings = _settings;
    this.show_name = true;
    this.bank_status = {};
    this.selected = "";
    this.clicked = new EventEmitter();
  }
  color(status) {
    const colours = this._settings.get("app.explore.colors") || {};
    return colours[`lockers-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`];
  }
  status(locker) {
    if (!locker)
      return this.color("busy");
    let value = this.bank_status[locker.id] || "free";
    if (!this.bank_status[locker.id] && !locker?.available) {
      value = "busy";
    }
    return this.color(value);
  }
  static {
    this.\u0275fac = function LockerGridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerGridComponent)(\u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerGridComponent, selectors: [["locker-grid"]], inputs: { show_name: "show_name", bank: "bank", bank_status: "bank_status", selected: "selected" }, outputs: { clicked: "clicked" }, standalone: false, decls: 2, vars: 8, consts: [[1, "flex-1", "grid", "gap-2", "p-2"], ["matRipple", "", "class", "relative border border-base-200 rounded overflow-hidden", 3, "opacity-60", "grid-column-start", "grid-row-start", "grid-column-end", "background-color", "grid-row-end", "matTooltip", "disabled", "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "relative", "border", "border-base-200", "rounded", "overflow-hidden", 3, "click", "matTooltip", "disabled"], ["handle", "", 1, "absolute", "top-1/2", "-translate-y-1/2", "left-2", "w-1", "h-6", "bg-base-400", "rounded", "opacity-60"], ["vent", "", 1, "absolute", "left-1/2", "-translate-x-1/2", "top-2", "w-12", "h-1", "bg-base-400", "rounded-t", "opacity-60"], ["vent", "", 1, "absolute", "left-1/2", "-translate-x-1/2", "top-4", "w-12", "h-1", "bg-base-400", "rounded-t", "opacity-60"], ["vent", "", 1, "absolute", "left-1/2", "-translate-x-1/2", "top-6", "w-12", "h-1", "bg-base-400", "rounded-t", "opacity-60"], [1, "absolute", "left-1/2", "-translate-x-1/2", "top-8", "text-[0.6rem]", "font-medium", "text-base-content", "opacity-60"], [1, "absolute", "inset-0", "hover:bg-base-content", "opacity-10"]], template: function LockerGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, LockerGridComponent_button_1_Template, 8, 15, "button", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("width", ctx.columns * 2.5 + "rem")("grid-template-columns", "repeat(" + ctx.columns + ", 5rem)")("grid-template-rows", "repeat(" + (ctx.bank == null ? null : ctx.bank.height) + ", 5rem)");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", (ctx.bank == null ? null : ctx.bank.lockers) || \u0275\u0275pureFunction0(7, _c017));
      }
    }, dependencies: [NgForOf, MatRipple, MatTooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.75;\n  background-color: #ccc !important;\n}\n/*# sourceMappingURL=locker-grid.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerGridComponent, { className: "LockerGridComponent", filePath: "libs/bookings/src/lib/locker-grid.component.ts", lineNumber: 77 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-filters.component.ts
var _c018 = () => ({ standalone: true });
var _c18 = () => [];
function LockerFiltersComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function LockerFiltersComponent_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "keyboard_arrow_left");
    \u0275\u0275elementEnd()();
  }
}
function LockerFiltersComponent_div_12_mat_form_field_4_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r4 = ctx.$implicit;
    \u0275\u0275property("value", reg_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r4.display_name || reg_r4.name, " ");
  }
}
function LockerFiltersComponent_div_12_mat_form_field_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 21)(1, "mat-select", 22);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_div_12_mat_form_field_4_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275template(3, LockerFiltersComponent_div_12_mat_form_field_4_mat_option_3_Template, 2, 2, "mat-option", 23);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(8, _c018))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 6, ctx_r1.regions));
  }
}
function LockerFiltersComponent_div_12_mat_form_field_6_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r6 = ctx.$implicit;
    \u0275\u0275property("value", bld_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r6.display_name || bld_r6.name, " ");
  }
}
function LockerFiltersComponent_div_12_mat_form_field_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 21)(1, "mat-select", 25);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_div_12_mat_form_field_6_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275template(5, LockerFiltersComponent_div_12_mat_form_field_6_mat_option_5_Template, 2, 2, "mat-option", 23);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(2, 4, ctx_r1.building))("ngModelOptions", \u0275\u0275pureFunction0(12, _c018))("placeholder", ((tmp_4_0 = \u0275\u0275pipeBind1(3, 6, ctx_r1.building)) == null ? null : tmp_4_0.display_name) || ((tmp_4_0 = \u0275\u0275pipeBind1(4, 8, ctx_r1.building)) == null ? null : tmp_4_0.name));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 10, ctx_r1.buildings));
  }
}
function LockerFiltersComponent_div_12_mat_form_field_8_mat_option_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const lvl_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = \u0275\u0275pipeBind1(2, 1, lvl_r8.parent_id)) == null ? null : tmp_5_0.display_name, " ");
  }
}
function LockerFiltersComponent_div_12_mat_form_field_8_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24)(1, "div", 27);
    \u0275\u0275template(2, LockerFiltersComponent_div_12_mat_form_field_8_mat_option_4_div_2_Template, 5, 3, "div", 28);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", lvl_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r8.display_name || lvl_r8.name, " ");
  }
}
function LockerFiltersComponent_div_12_mat_form_field_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 21)(1, "mat-select", 26);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_div_12_mat_form_field_8_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275template(4, LockerFiltersComponent_div_12_mat_form_field_8_mat_option_4_Template, 5, 3, "mat-option", 23);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(2, 4, ctx_r1.options)) == null ? null : tmp_2_0.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(10, _c018))("placeholder", \u0275\u0275pipeBind1(3, 6, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 8, ctx_r1.levels));
  }
}
function LockerFiltersComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LockerFiltersComponent_div_12_mat_form_field_4_Template, 5, 9, "mat-form-field", 20);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275template(6, LockerFiltersComponent_div_12_mat_form_field_6_Template, 7, 13, "mat-form-field", 20);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, LockerFiltersComponent_div_12_mat_form_field_8_Template, 6, 11, "mat-form-field", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "BOOKINGS.LOCATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region && ((tmp_2_0 = \u0275\u0275pipeBind1(5, 6, ctx_r1.regions)) == null ? null : tmp_2_0.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(7, 8, ctx_r1.buildings)) == null ? null : tmp_3_0.length) > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.hide_levels);
  }
}
function LockerFiltersComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "mat-checkbox", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.ALL_DAY"), " ");
  }
}
function LockerFiltersComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 35);
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_div_23_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-duration-field", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 10, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(14, _c018))("use_24hr", ctx_r1.use_24hr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("time", (tmp_6_0 = ctx_r1.form.get("date")) == null ? null : tmp_6_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr);
  }
}
function LockerFiltersComponent_section_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-checkbox", 42);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_section_28_div_4_Template_mat_checkbox_ngModelChange_3_listener($event) {
      const feat_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r11, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const feat_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r11);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (((tmp_4_0 = \u0275\u0275pipeBind1(4, 3, ctx_r1.options)) == null ? null : tmp_4_0.features) || \u0275\u0275pureFunction0(5, _c18)).includes(feat_r11))("ngModelOptions", \u0275\u0275pureFunction0(6, _c018));
  }
}
function LockerFiltersComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 37)(1, "h2", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LockerFiltersComponent_section_28_div_4_Template, 5, 7, "div", 39);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.TYPE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 4, ctx_r1.features));
  }
}
function LockerFiltersComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 44);
    \u0275\u0275listener("click", function LockerFiltersComponent_div_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.APPLY"), " ");
  }
}
var LockerFiltersComponent = class _LockerFiltersComponent {
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get region() {
    return this._org.region;
  }
  set region(reg) {
    this._org.region = reg;
  }
  get allow_time_changes() {
    return !!this._settings.get("app.lockers.allow_time_changes");
  }
  get allow_all_day() {
    return this.allow_time_changes && !!this._settings.get("app.lockers.allow_all_day");
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.lockers.available_period") || 90));
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get use_region() {
    return this._settings.get("app.use_region");
  }
  constructor(_bsheet_ref, _state, _org, _settings) {
    this._bsheet_ref = _bsheet_ref;
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.can_close = false;
    this.options = this._state.options;
    this.features = this._state.features;
    this.buildings = this._org.active_buildings;
    this.form = this._state.form;
    this.regions = this._org.region_list;
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      return level_list.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.close = () => this._bsheet_ref.dismiss();
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setLevel = (l) => {
    };
    this.can_close = !!this._bsheet_ref;
  }
  static {
    this.\u0275fac = function LockerFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerFiltersComponent)(\u0275\u0275directiveInject(MatBottomSheetRef, 8), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerFiltersComponent, selectors: [["locker-filters"]], inputs: { hide_levels: "hide_levels" }, standalone: false, decls: 31, vars: 34, consts: [[1, "flex", "rounded-t-md", "items-center", "border-b", "border-base-200", "pb-2", "sm:hidden"], [1, "flex-1", "pl-2"], ["icon", "", "matRipple", "", "name", "close-locker-filters", "class", "sm:hidden", 3, "click", 4, "ngIf"], [1, "font-medium", "flex-2", "text-center"], [1, "flex-1"], [1, "max-h-[65vh]", "p-2", "overflow-y-auto", "overflow-x-hidden", "divide-y", "divide-base-200", "w-full", 3, "formGroup"], ["details", ""], [1, "text-lg", "font-medium", "mb-1"], ["class", "flex-1 min-w-[8rem] flex flex-col", 4, "ngIf"], [1, "flex-1", "min-w-[256px]"], ["name", "date", "formControlName", "date", 3, "to"], ["class", "flex justify-end -mt-2 mb-2", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["favs", "", 1, "space-y-4", "pb-4"], [3, "ngModelChange", "name", "ngModel", "ngModelOptions"], ["class", "space-y-2", "features", "", 4, "ngIf"], ["class", "px-2 py-2 w-full border-t border-base-200", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "close-locker-filters", 1, "sm:hidden", 3, "click"], [1, "flex-1", "min-w-[8rem]", "flex", "flex-col"], ["for", "location"], ["appearance", "outline", "class", "w-full", 4, "ngIf"], ["appearance", "outline", 1, "w-full"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], ["class", "opacity-30 text-xs", 4, "ngIf"], [1, "opacity-30", "text-xs"], [1, "opacity-0"], [1, "flex", "justify-end", "-mt-2", "mb-2"], ["formControlName", "all_day"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr"], ["formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr"], ["features", "", 1, "space-y-2"], [1, "text-lg", "font-medium"], ["class", "flex items-center flex-wrap space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "flex-wrap", "space-x-2"], ["for", "feat", 1, "flex-1", "w-1/2"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "px-2", "py-2", "w-full", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "name", "apply-locker-filters", 1, "w-full", 3, "click"]], template: function LockerFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, LockerFiltersComponent_button_2_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h3", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "form", 5)(8, "section", 6)(9, "h2", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, LockerFiltersComponent_div_12_Template, 9, 10, "div", 8);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275pipe(14, "async");
        \u0275\u0275elementStart(15, "div", 9)(16, "label");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a-date-field", 10);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(22, LockerFiltersComponent_div_22_Template, 4, 3, "div", 11)(23, LockerFiltersComponent_div_23_Template, 11, 15, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "section", 13)(25, "settings-toggle", 14);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275pipe(27, "async");
        \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_Template_settings_toggle_ngModelChange_25_listener($event) {
          return ctx.setOptions({ show_accessible: $event });
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, LockerFiltersComponent_section_28_Template, 6, 6, "section", 15);
        \u0275\u0275pipe(29, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, LockerFiltersComponent_div_30_Template, 4, 3, "div", 16);
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_11_0;
        let tmp_13_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.can_close);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 15, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 17, "BOOKINGS.DETAILS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.hide_levels && (!(ctx.use_region && ((tmp_4_0 = \u0275\u0275pipeBind1(13, 19, ctx.regions)) == null ? null : tmp_4_0.length)) || !(!ctx.use_region && ((tmp_4_0 = \u0275\u0275pipeBind1(14, 21, ctx.buildings)) == null ? null : tmp_4_0.length) > 1)));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 23, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("to", ctx.end_date);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 25, "FORM.DATE_ERROR"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.allow_all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.form.value.all_day);
        \u0275\u0275advance(2);
        \u0275\u0275property("name", \u0275\u0275pipeBind1(26, 27, "BOOKINGS.LOCKER_ACCESSIBLE_SHOW"))("ngModel", (tmp_11_0 = \u0275\u0275pipeBind1(27, 29, ctx.options)) == null ? null : tmp_11_0.show_accessible)("ngModelOptions", \u0275\u0275pureFunction0(33, _c018));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", (tmp_13_0 = \u0275\u0275pipeBind1(29, 31, ctx.features)) == null ? null : tmp_13_0.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.can_close);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, MatFormField, MatCheckbox, MatOption, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, IconComponent, SettingsToggleComponent, MatSelect, MatRipple, AsyncPipe, BuildingPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=locker-filters.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerFiltersComponent, { className: "LockerFiltersComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-filters.component.ts", lineNumber: 242 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-filters-display.component.ts
var _c019 = () => [];
function LockerFiltersDisplayComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function LockerFiltersDisplayComponent_div_19_Template_button_click_3_listener() {
      const feat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFeature(feat_r2, false));
    });
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r2);
  }
}
function LockerFiltersDisplayComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275listener("click", function LockerFiltersDisplayComponent_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOptions({ show_fav: false }));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.FAVOURITES_ONLY"));
  }
}
function LockerFiltersDisplayComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 14);
    \u0275\u0275listener("click", function LockerFiltersDisplayComponent_div_23_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOptions({ show_accessible: false }));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.ACCESSIBLE_ONLY"));
  }
}
var LockerFiltersDisplayComponent = class _LockerFiltersDisplayComponent extends AsyncHandler {
  get start() {
    return this._state.form.value.date;
  }
  get end() {
    const { date, duration, all_day } = this._state.form.value;
    if (all_day)
      return endOfDay(date);
    return date + duration * 60 * 1e3;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_bsheet, _state, _settings) {
    super();
    this._bsheet = _bsheet;
    this._state = _state;
    this._settings = _settings;
    this.view = "list";
    this.viewChange = new EventEmitter();
    this.options = this._state.options;
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.editFilter = () => this._bsheet.open(LockerFiltersComponent);
  }
  static {
    this.\u0275fac = function LockerFiltersDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerFiltersDisplayComponent)(\u0275\u0275directiveInject(MatBottomSheet), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerFiltersDisplayComponent, selectors: [["locker-filters-display"]], inputs: { view: "view" }, outputs: { viewChange: "viewChange" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 25, vars: 35, consts: [["actions", "", 1, "sm:hidden", "space-x-2", "flex", "flex-row", "items-center", "p-2"], ["btn", "", "matRipple", "", "name", "edit-locker-filters", 1, "flex-1", "w-1/2", 3, "click"], [1, "flex", "items-center"], ["btn", "", "matRipple", "", "name", "view-locker-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-locker-list", 1, "rounded-r", "rounded-l-none", 3, "click"], ["filters", "", 1, "flex", "items-center", "flex-wrap", "p-2", "w-[35rem]", "max-w-full", "sm:max-w-[35rem]"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "features", "", 4, "ngFor", "ngForOf"], ["filter-item", "", 4, "ngIf"], ["filter-item", "", "features", ""], ["icon", "", "matRipple", "", "name", "remove-locker-filter", 1, "-mr-4", 3, "click"], ["filter-item", ""], ["icon", "", "matRipple", "", "name", "remove-locker-favs-filter", 1, "-mr-4", 3, "click"], ["icon", "", "matRipple", "", "name", "remove-locker-accessible-filter", 1, "-mr-4", 3, "click"]], template: function LockerFiltersDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "button", 1);
        \u0275\u0275listener("click", function LockerFiltersDisplayComponent_Template_button_click_1_listener() {
          return ctx.editFilter();
        });
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
        \u0275\u0275listener("click", function LockerFiltersDisplayComponent_Template_button_click_5_listener() {
          ctx.view = "map";
          return ctx.viewChange.emit(ctx.view);
        });
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 4);
        \u0275\u0275listener("click", function LockerFiltersDisplayComponent_Template_button_click_8_listener() {
          ctx.view = "list";
          return ctx.viewChange.emit(ctx.view);
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "section", 5)(12, "div", 6);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "date");
        \u0275\u0275pipe(18, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, LockerFiltersDisplayComponent_div_19_Template, 6, 1, "div", 8);
        \u0275\u0275pipe(20, "async");
        \u0275\u0275template(21, LockerFiltersDisplayComponent_div_21_Template, 7, 3, "div", 9);
        \u0275\u0275pipe(22, "async");
        \u0275\u0275template(23, LockerFiltersDisplayComponent_div_23_Template, 7, 3, "div", 9);
        \u0275\u0275pipe(24, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("inverse", ctx.view !== "map");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 15, "COMMON.MAP"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.view !== "list");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 17, "COMMON.LIST"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 19, ctx.start, "mediumDate"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(17, 22, ctx.start, ctx.time_format), " \u2014 ", \u0275\u0275pipeBind2(18, 25, ctx.end, ctx.time_format), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ((tmp_7_0 = \u0275\u0275pipeBind1(20, 28, ctx.options)) == null ? null : tmp_7_0.features) || \u0275\u0275pureFunction0(34, _c019));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_8_0 = \u0275\u0275pipeBind1(22, 30, ctx.options)) == null ? null : tmp_8_0.show_fav);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_9_0 = \u0275\u0275pipeBind1(24, 32, ctx.options)) == null ? null : tmp_9_0.show_accessible);
      }
    }, dependencies: [NgForOf, NgIf, IconComponent, MatRipple, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=locker-filters-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerFiltersDisplayComponent, { className: "LockerFiltersDisplayComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-filters-display.component.ts", lineNumber: 125 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-bank-list.component.ts
var _c020 = (a0) => ({ count: a0 });
var _c19 = (a0, a1) => ({ count: a0, total: a1 });
function LockerBankListComponent_ng_container_7_ul_1_li_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "app-icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function LockerBankListComponent_ng_container_7_ul_1_li_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const locker_bank_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", locker_bank_r2.images[0]);
  }
}
function LockerBankListComponent_ng_container_7_ul_1_li_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
}
function LockerBankListComponent_ng_container_7_ul_1_li_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const locker_bank_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", locker_bank_r2.tags[0], " ");
  }
}
function LockerBankListComponent_ng_container_7_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "button", 10);
    \u0275\u0275listener("click", function LockerBankListComponent_ng_container_7_ul_1_li_1_Template_button_click_1_listener() {
      const locker_bank_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectLockerBank(locker_bank_r2));
    });
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275template(3, LockerBankListComponent_ng_container_7_ul_1_li_1_div_3_Template, 3, 0, "div", 12)(4, LockerBankListComponent_ng_container_7_ul_1_li_1_img_4_Template, 1, 1, "img", 13)(5, LockerBankListComponent_ng_container_7_ul_1_li_1_ng_template_5_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16)(11, "app-icon", 17);
    \u0275\u0275text(12, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 18);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "level");
    \u0275\u0275pipe(16, "level");
    \u0275\u0275pipe(17, "level");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 16)(19, "app-icon", 17);
    \u0275\u0275text(20, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 18);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(24, LockerBankListComponent_ng_container_7_ul_1_li_1_div_24_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const locker_bank_r2 = ctx.$implicit;
    const placeholder_r4 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("!border-blue-400", ctx_r2.active === locker_bank_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.selected.includes(locker_bank_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", locker_bank_r2.images == null ? null : locker_bank_r2.images.length)("ngIfElse", placeholder_r4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", locker_bank_r2.name || locker_bank_r2.id || "Locker_bank", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 9, locker_bank_r2.zones) ? ((tmp_12_0 = \u0275\u0275pipeBind1(16, 11, locker_bank_r2.zones)) == null ? null : tmp_12_0.display_name) || ((tmp_12_0 = \u0275\u0275pipeBind1(17, 13, locker_bank_r2.zones)) == null ? null : tmp_12_0.name) : "", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 15, "COMMON.AVAILABLE_COUNT", \u0275\u0275pureFunction2(18, _c19, locker_bank_r2.available || 0, locker_bank_r2.lockers.length || 1)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", locker_bank_r2.tags == null ? null : locker_bank_r2.tags.length);
  }
}
function LockerBankListComponent_ng_container_7_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275template(1, LockerBankListComponent_ng_container_7_ul_1_li_1_Template, 25, 21, "li", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r2.locker_banks));
  }
}
function LockerBankListComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LockerBankListComponent_ng_container_7_ul_1_Template, 3, 3, "ul", 6);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    const empty_state_r5 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(2, 2, ctx_r2.locker_banks)) == null ? null : tmp_3_0.length)("ngIfElse", empty_state_r5);
  }
}
function LockerBankListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "mat-spinner", 25);
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.LOCKER_LIST_LOADING"), " ");
  }
}
function LockerBankListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "p", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.LOCKER_LIST_EMPTY"), " ");
  }
}
var LockerBankListComponent = class _LockerBankListComponent {
  constructor(_state, _org, _settings) {
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.active = "";
    this.selected = "";
    this.favorites = [];
    this.onSelect = new EventEmitter();
    this.toggleFav = new EventEmitter();
    this.lockers_banks$ = loadLockerBanks(this._org, combineLatest([this._org.active_building, this._org.active_region]), () => this._settings.get("app.use_region"));
    this.lockers$ = loadLockers(this._org, combineLatest([this._org.active_building, this._org.active_region]), this.lockers_banks$, () => this._settings.get("app.use_region"));
    this.locker_banks = combineLatest([
      this._state.options,
      this._state.available_resources,
      this.lockers_banks$,
      this.lockers$
    ]).pipe(map(([{ show_fav, show_accessible }, resources, banks]) => {
      return banks.filter((i) => (!show_fav || this.isFavourite(i.id)) && (!show_accessible || i.lockers.find((_) => _.accessible)) && resources.find((_) => _.bank_id === i.id)).map((bank) => __spreadProps(__spreadValues({}, bank), {
        available: resources.filter((_) => _.bank_id === bank.id).length,
        lockers: bank.lockers.map((_) => __spreadProps(__spreadValues({}, _), {
          available: !!resources.find((lkr) => lkr.id === _.id),
          map_id: bank.map_id || bank.id,
          zone: bank.zone,
          zones: bank.zones
        }))
      }));
    }), tap((list) => console.log("Bank List:", list)));
    this.loading = this._state.loading;
  }
  isFavourite(locker_bank_id) {
    return this.favorites.includes(locker_bank_id);
  }
  selectLockerBank(locker_bank) {
    this.onSelect.emit(locker_bank);
  }
  static {
    this.\u0275fac = function LockerBankListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerBankListComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerBankListComponent, selectors: [["locker-bank-list"]], inputs: { active: "active", selected: "selected", favorites: "favorites" }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, standalone: false, decls: 13, vars: 15, consts: [["load_state", ""], ["empty_state", ""], ["placeholder", ""], [1, "font-bold"], ["count", "", 1, "text-sm", "opacity-60", "mb-4"], [4, "ngIf", "ngIfElse"], ["class", "list-style-none space-y-2 overflow-hidden", 4, "ngIf", "ngIfElse"], [1, "list-style-none", "space-y-2", "overflow-hidden"], ["locker_bank", "", "class", "relative rounded-lg w-full shadow border bg-base-100 border-base-200 overflow-hidden", 3, "!border-blue-400", 4, "ngFor", "ngForOf"], ["locker_bank", "", 1, "relative", "rounded-lg", "w-full", "shadow", "border", "bg-base-100", "border-base-200", "overflow-hidden"], ["name", "select-locker_bank", "matRipple", "", 1, "w-full", "h-full", "flex", "p-2", 3, "click"], [1, "relative", "w-20", "h-20", "rounded-xl", "bg-base-200", "mr-4", "flex", "items-center", "justify-center"], ["class", "absolute top-1 left-1 border border-neutral bg-base-200 rounded-full h-6 w-6 flex items-center justify-center text-white", 4, "ngIf"], ["auth", "", "class", "object-cover h-full", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "pt-2", "flex-1", "text-left"], [1, "font-medium"], [1, "flex", "items-center", "text-sm", "space-x-2"], [1, "text-blue-500"], [1, "text-xs"], ["class", "absolute bottom-2 right-2 bg-base-200 rounded text-xs px-2 py-1 font-mono", 4, "ngIf"], [1, "absolute", "top-1", "left-1", "border", "border-neutral", "bg-base-200", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center", "text-white"], ["auth", "", 1, "object-cover", "h-full", 3, "source"], ["src", "assets/icons/locker-placeholder.svg", 1, "m-auto"], [1, "absolute", "bottom-2", "right-2", "bg-base-200", "rounded", "text-xs", "px-2", "py-1", "font-mono"], ["loading", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"], [1, "opacity-30"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"]], template: function LockerBankListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3", 3);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, LockerBankListComponent_ng_container_7_Template, 3, 4, "ng-container", 5);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275template(9, LockerBankListComponent_ng_template_9_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(11, LockerBankListComponent_ng_template_11_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        const load_state_r6 = \u0275\u0275reference(10);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "COMMON.RESULTS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 8, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(13, _c020, ((tmp_3_0 = \u0275\u0275pipeBind1(5, 6, ctx.locker_banks)) == null ? null : tmp_3_0.length) || 0)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !((tmp_4_0 = \u0275\u0275pipeBind1(8, 11, ctx.loading)) == null ? null : tmp_4_0.length))("ngIfElse", load_state_r6);
      }
    }, dependencies: [NgForOf, NgIf, MatProgressSpinner, IconComponent, AuthenticatedImageDirective, MatRipple, AsyncPipe, LevelPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  background: rgba(0, 0, 0, 0.05);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=locker-bank-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerBankListComponent, { className: "LockerBankListComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-bank-list.component.ts", lineNumber: 161 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-map.component.ts
var _c021 = () => ({ controls: true });
var _c110 = () => ({ standalone: true });
function LockerMapComponent_mat_form_field_1_mat_option_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const lvl_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = \u0275\u0275pipeBind1(2, 1, lvl_r3.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function LockerMapComponent_mat_form_field_1_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7)(1, "div", 8);
    \u0275\u0275template(2, LockerMapComponent_mat_form_field_1_mat_option_3_div_2_Template, 5, 3, "div", 9);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r3.display_name || lvl_r3.name, " ");
  }
}
function LockerMapComponent_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 4)(1, "mat-select", 5);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function LockerMapComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function LockerMapComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_ids: [$event.id] }));
    });
    \u0275\u0275template(3, LockerMapComponent_mat_form_field_1_mat_option_3_Template, 5, 3, "mat-option", 6);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.level);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c110))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 6, ctx_r1.levels));
  }
}
var LockerMapComponent = class _LockerMapComponent extends AsyncHandler {
  get map_url() {
    return this.level?.map_id || "";
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor(_state, _settings, _org) {
    super();
    this._state = _state;
    this._settings = _settings;
    this._org = _org;
    this.is_displayed = false;
    this.active = "";
    this.onSelect = new EventEmitter();
    this.lockers_banks$ = loadLockerBanks(this._org, combineLatest([this._org.active_building, this._org.active_region]), () => this._settings.get("app.use_region"));
    this.lockers$ = loadLockers(this._org, combineLatest([this._org.active_building, this._org.active_region]), this.lockers_banks$, () => this._settings.get("app.use_region"));
    this.locker_banks = combineLatest([
      this._state.options,
      this._state.available_resources,
      this.lockers_banks$,
      this.lockers$
    ]).pipe(map(([{ show_fav, show_accessible }, resources, banks]) => {
      return banks.filter((i) => resources.find((_) => _.bank_id === i.id) && (!show_accessible || i.lockers.find((_) => _.accessible))).map((bank) => __spreadProps(__spreadValues({}, bank), {
        available: resources.filter((_) => _.bank_id === bank.id).length,
        lockers: bank.lockers.map((_) => __spreadProps(__spreadValues({}, _), {
          map_id: bank.map_id || bank.id,
          zone: bank.zone
        }))
      }));
    }));
    this.loading = this._state.loading;
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
    this.coordinates = void 0;
    this._change = new BehaviorSubject(0);
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking"));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.setOptions = (o) => this._state.setOptions(o);
    this.actions = this.locker_banks.pipe(map((banks) => banks.map((locker) => ({
      id: locker.map_id || locker.id,
      action: ["touchend", "mouseup"],
      callback: () => this.selectLocker(locker)
    }))));
    this.features = combineLatest([
      this.locker_banks,
      this._state.available_resources
    ]).pipe(map(([lockers]) => {
      return this._settings.get("app.lockers.hide_user") ? [] : lockers.map((locker) => ({
        location: locker.id,
        content: ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: locker.map_id || locker.id,
          map_id: locker.name,
          name: locker.name || locker.map_id,
          user: this._state.resourceUserName(locker.id)
        },
        z_index: 20
      }));
    }));
    this.styles = combineLatest([
      this.locker_banks,
      this._state.available_resources,
      this._change
    ]).pipe(map(([banks, free_lockers]) => banks.reduce((styles, bank) => {
      const colours = this._settings.get("app.explore.colors") || {};
      const status = this.active === bank.id ? "active" : free_lockers.find((_) => bank.lockers.find((lkr) => lkr.id === _.id)) ? "free" : this._state.resourceUserName(bank.id) ? "busy" : "not-bookable";
      styles[`#${bank.map_id || bank.id}`] = {
        fill: status === "active" ? "#512DA8" : colours[`locker-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
      };
      return styles;
    }, {})));
  }
  ngOnInit() {
    this.subscription("levels_update", this._state.options.subscribe(({ zone_id }) => {
      const level = this._org.levelWithID([zone_id]);
      if (level)
        this.level = level;
    }));
  }
  ngOnChanges(changes) {
    if (changes.active)
      this._change.next(Date.now());
  }
  selectLocker(locker) {
    this.onSelect.emit(locker);
  }
  setLevel(level) {
    this.setOptions({ zone_id: level?.id });
    const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
    if (bld) {
      const [latitude, longitude] = bld.location.split(",").map((_) => parseFloat(_));
      this.coordinates = { latitude, longitude };
    }
    this.level = level;
  }
  setZoom(new_zoom) {
    this.zoom = Math.max(0.5, Math.min(10, new_zoom));
  }
  resetMap() {
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
  }
  static {
    this.\u0275fac = function LockerMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerMapComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerMapComponent, selectors: [["locker-map"]], inputs: { is_displayed: "is_displayed", active: "active" }, outputs: { onSelect: "onSelect" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 8, vars: 17, consts: [[1, "bg-base-100", "p-2", "border-b", "border-base-200", "w-full"], ["levels", "", "appearance", "outline", "class", "w-full no-subscript", 4, "ngIf"], [1, "relative", "flex-1", "w-full"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["levels", "", "appearance", "outline", 1, "w-full", "no-subscript"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "opacity-30 text-xs", 4, "ngIf"], [1, "opacity-30", "text-xs"], [1, "opacity-0"]], template: function LockerMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, LockerMapComponent_mat_form_field_1_Template, 5, 9, "mat-form-field", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "interactive-map", 3);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "async");
        \u0275\u0275twoWayListener("zoomChange", function LockerMapComponent_Template_interactive_map_zoomChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
          return $event;
        })("centerChange", function LockerMapComponent_Template_interactive_map_centerChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.center, $event) || (ctx.center = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_0_0 = \u0275\u0275pipeBind1(2, 8, ctx.levels)) == null ? null : tmp_0_0.length);
        \u0275\u0275advance(3);
        \u0275\u0275property("src", ctx.map_url);
        \u0275\u0275twoWayProperty("zoom", ctx.zoom)("center", ctx.center);
        \u0275\u0275property("styles", \u0275\u0275pipeBind1(5, 10, ctx.styles))("features", \u0275\u0275pipeBind1(6, 12, ctx.features))("actions", \u0275\u0275pipeBind1(7, 14, ctx.actions))("options", \u0275\u0275pureFunction0(16, _c021));
      }
    }, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, MatFormField, MatOption, InteractiveMapComponent, MatSelect, AsyncPipe, BuildingPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n/*# sourceMappingURL=locker-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerMapComponent, { className: "LockerMapComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-map.component.ts", lineNumber: 83 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-select-modal.component.ts
var _c022 = (a0) => ({ count: a0 });
function LockerSelectModalComponent_ng_container_19_locker_bank_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "locker-bank-list", 26);
    \u0275\u0275listener("toggleFav", function LockerSelectModalComponent_ng_container_19_locker_bank_list_1_Template_locker_bank_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFavourite($event));
    })("onSelect", function LockerSelectModalComponent_ng_container_19_locker_bank_list_1_Template_locker_bank_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.bank = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("active", ctx_r2.displayed == null ? null : ctx_r2.displayed.id)("selected", ctx_r2.selected_ids)("favorites", ctx_r2.favorites);
  }
}
function LockerSelectModalComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LockerSelectModalComponent_ng_container_19_locker_bank_list_1_Template, 1, 3, "locker-bank-list", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const map_view_r4 = \u0275\u0275reference(46);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.view === "list")("ngIfElse", map_view_r4);
  }
}
function LockerSelectModalComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function LockerSelectModalComponent_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.displayed = null);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.BACK"), " ");
  }
}
function LockerSelectModalComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function LockerSelectModalComponent_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.bank = null;
      return \u0275\u0275resetView(ctx_r2.displayed = null);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.RETURN"), " ");
  }
}
function LockerSelectModalComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "locker-map", 29);
    \u0275\u0275listener("onSelect", function LockerSelectModalComponent_ng_template_45_Template_locker_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.bank = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("is_displayed", !!ctx_r2.displayed);
  }
}
function LockerSelectModalComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "locker-grid", 32);
    \u0275\u0275listener("clicked", function LockerSelectModalComponent_ng_template_47_Template_locker_grid_clicked_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.displayed = $event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.bank.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("bank", ctx_r2.bank)("selected", ctx_r2.displayed == null ? null : ctx_r2.displayed.id);
  }
}
var FAV_LOCKER_KEY = "favourite_lockers";
var LockerSelectModalComponent = class _LockerSelectModalComponent {
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get favorites() {
    return this._settings.get(FAV_LOCKER_KEY) || [];
  }
  constructor(_dialog_ref, _settings, _event_form, _data) {
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this._event_form = _event_form;
    this._data = _data;
    this.selected = [];
    this.view = "list";
    this.bank = null;
    this.selected = [..._data.items || []];
    this._event_form.setOptions(_data.options);
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter((_) => _.id !== item.id);
    if (state)
      list.push(item);
    this.selected = list;
    if (!this._data.options.group && state)
      this._dialog_ref.close([item]);
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_LOCKER_KEY, [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_LOCKER_KEY, fav_list.filter((_) => _ !== item.id));
    }
  }
  static {
    this.\u0275fac = function LockerSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerSelectModalComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerSelectModalComponent, selectors: [["locker-select-modal"]], standalone: false, decls: 49, vars: 42, consts: [["map_view", ""], ["bank_view", ""], [1, "w-[100vw]", "h-[100vh]", "sm:relative", "sm:w-auto", "sm:h-auto", "flex", "flex-col", "bg-base-100"], [1, "flex", "items-center", "space-x-4", "w-full"], ["icon", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "hidden", "sm:flex", "items-center", "justify-end", "flex-1"], ["btn", "", "matRipple", "", "name", "view-locker-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-locker-list", 1, "rounded-r", "rounded-l-none", 3, "click"], [1, "flex-1", "flex", "items-center", "divide-x", "divide-base-200", "min-h-[65vh]", "h-[65vh]", "sm:max-h-[65vh]", "sm:max-w-[95vw]", "w-full", "overflow-hidden"], [1, "h-full", "hidden", "sm:flex", "max-w-[20rem]", "sm:h-[65vh]", "sm:max-h-full", 3, "hide_levels"], [1, "flex", "flex-col", "items-center", "flex-1", "w-1/2", "h-full", "sm:h-[65vh]"], [1, "w-full", "border-b", "border-base-200", 3, "viewChange", "view"], [4, "ngIf", "ngIfElse"], [1, "flex", "sm:hidden", "flex-col-reverse", "items-center", "justify-end", "px-2", "pt-2", "pb-[5.5rem]", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "name", "locker-return", "class", "inverse sm:hidden w-full", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "name", "save-lockers", 1, "w-full", "sm:w-32", "sm:mb-0", 3, "mat-dialog-close"], [1, "hidden", "sm:flex", "items-center", "justify-between", "p-2", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "name", "locker-return", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "opacity-60", "text-sm", "text-center"], ["btn", "", "matRipple", "", "name", "clear-bank", "class", "inverse mr-2 w-32", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "name", "toggle-locker", 3, "click", "disabled"], [1, "mr-1"], ["class", "flex-1 h-1/2 bg-base-200", 3, "active", "selected", "favorites", "toggleFav", "onSelect", 4, "ngIf", "ngIfElse"], [1, "flex-1", "h-1/2", "bg-base-200", 3, "toggleFav", "onSelect", "active", "selected", "favorites"], ["btn", "", "matRipple", "", "name", "locker-return", 1, "inverse", "sm:hidden", "w-full", 3, "click"], ["btn", "", "matRipple", "", "name", "clear-bank", 1, "inverse", "mr-2", "w-32", 3, "click"], [1, "flex-1", "h-1/2", "w-full", 3, "onSelect", "is_displayed"], [1, "h-full", "w-full", "flex", "flex-col", "overflow-auto", "bg-base-200"], [1, "sticky", "left-0", "font-medium", "px-2", "py-2", "w-full"], [1, "w-full", "flex-1", "h-1/2", 3, "clicked", "bank", "selected"]], template: function LockerSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "header", 3)(2, "button", 4)(3, "app-icon");
        \u0275\u0275text(4, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "h3");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function LockerSelectModalComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.view = "map");
        });
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 7);
        \u0275\u0275listener("click", function LockerSelectModalComponent_Template_button_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.view = "list");
        });
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "main", 8);
        \u0275\u0275element(16, "locker-filters", 9);
        \u0275\u0275elementStart(17, "div", 10)(18, "locker-filters-display", 11);
        \u0275\u0275twoWayListener("viewChange", function LockerSelectModalComponent_Template_locker_filters_display_viewChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.view, $event) || (ctx.view = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, LockerSelectModalComponent_ng_container_19_Template, 2, 2, "ng-container", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "footer", 13);
        \u0275\u0275template(21, LockerSelectModalComponent_button_21_Template, 3, 3, "button", 14);
        \u0275\u0275elementStart(22, "button", 15);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "footer", 16)(26, "button", 17)(27, "div", 18)(28, "app-icon", 19);
        \u0275\u0275text(29, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 20);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "p", 21);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 18);
        \u0275\u0275template(37, LockerSelectModalComponent_button_37_Template, 3, 3, "button", 22);
        \u0275\u0275elementStart(38, "button", 23);
        \u0275\u0275listener("click", function LockerSelectModalComponent_Template_button_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id)));
        });
        \u0275\u0275elementStart(39, "div", 18)(40, "app-icon", 19);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 24);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(45, LockerSelectModalComponent_ng_template_45_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(47, LockerSelectModalComponent_ng_template_47_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const bank_view_r9 = \u0275\u0275reference(48);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 25, "BOOKINGS.LOCKER_FIND"));
        \u0275\u0275advance(3);
        \u0275\u0275classProp("inverse", ctx.view !== "map");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 27, "COMMON.MAP"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.view !== "list");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 29, "COMMON.LIST"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("hide_levels", ctx.view !== "list");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("view", ctx.view);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.bank)("ngIfElse", bank_view_r9);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.displayed);
        \u0275\u0275advance();
        \u0275\u0275classProp("mb-2", ctx.displayed);
        \u0275\u0275property("mat-dialog-close", ctx.selected);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 31, "COMMON.VIEW_LIST"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", ctx.selected);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 33, "COMMON.BACK_TO_FORM"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 35, "BOOKINGS.LOCKER_ADDED_COUNT", \u0275\u0275pureFunction1(40, _c022, ctx.selected.length)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.bank);
        \u0275\u0275advance();
        \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
        \u0275\u0275property("disabled", !ctx.displayed);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 38, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
      }
    }, dependencies: [NgIf, MatDialogClose, IconComponent, MatRipple, LockerGridComponent, LockerFiltersComponent, LockerFiltersDisplayComponent, LockerBankListComponent, LockerMapComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerSelectModalComponent, { className: "LockerSelectModalComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-select-modal.component.ts", lineNumber: 185 });
})();

// libs/bookings/src/lib/locker-list-field.component.ts
var _c023 = () => [];
var _c111 = () => ({ standalone: true });
function LockerListFieldComponent_div_1_div_1_mat_checkbox_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 24);
    \u0275\u0275listener("ngModelChange", function LockerListFieldComponent_div_1_div_1_mat_checkbox_5_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.setFeature(opt_r3, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngModel", (ctx_r3.selected_features || \u0275\u0275pureFunction0(3, _c023)).includes(opt_r3))("ngModelOptions", \u0275\u0275pureFunction0(4, _c111));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3, " ");
  }
}
function LockerListFieldComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22);
    \u0275\u0275template(5, LockerListFieldComponent_div_1_div_1_mat_checkbox_5_Template, 2, 5, "mat-checkbox", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "COMMON.TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.features);
  }
}
function LockerListFieldComponent_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 25);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r5.images[0]);
  }
}
function LockerListFieldComponent_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
}
function LockerListFieldComponent_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "app-icon", 14);
    \u0275\u0275text(2, "accessible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "BOOKINGS.LOCKER_ACCESSIBLE"));
  }
}
function LockerListFieldComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, LockerListFieldComponent_div_1_div_1_Template, 6, 4, "div", 8);
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275template(3, LockerListFieldComponent_div_1_img_3_Template, 1, 1, "img", 10)(4, LockerListFieldComponent_div_1_ng_template_4_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11)(7, "div", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13)(10, "app-icon", 14);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "level");
    \u0275\u0275pipe(15, "level");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, LockerListFieldComponent_div_1_div_16_Template, 6, 3, "div", 15);
    \u0275\u0275elementStart(17, "div", 16)(18, "button", 17);
    \u0275\u0275listener("click", function LockerListFieldComponent_div_1_Template_button_click_18_listener() {
      const item_r5 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeResources(item_r5));
    });
    \u0275\u0275elementStart(19, "div", 18)(20, "app-icon");
    \u0275\u0275text(21, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 19);
    \u0275\u0275listener("click", function LockerListFieldComponent_div_1_Template_button_click_24_listener() {
      const item_r5 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeResource(item_r5));
    });
    \u0275\u0275elementStart(25, "div", 18)(26, "app-icon");
    \u0275\u0275text(27, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const item_r5 = ctx.$implicit;
    const placeholder_r6 = \u0275\u0275reference(5);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.features == null ? null : ctx_r3.features.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r5.images == null ? null : item_r5.images.length)("ngIfElse", placeholder_r6);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", item_r5.name || "Locker", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = \u0275\u0275pipeBind1(14, 8, item_r5 == null ? null : item_r5.zones)) == null ? null : tmp_7_0.display_name) || ((tmp_7_0 = \u0275\u0275pipeBind1(15, 10, item_r5 == null ? null : item_r5.zones)) == null ? null : tmp_7_0.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", item_r5.accessible);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 12, "COMMON.CHANGE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 14, "COMMON.REMOVE"), " ");
  }
}
var EMPTY_FAVS3 = [];
var LockerListFieldComponent = class _LockerListFieldComponent {
  get favorites() {
    return this._settings.get(FAV_LOCKER_KEY) || EMPTY_FAVS3;
  }
  constructor(_settings, _dialog) {
    this._settings = _settings;
    this._dialog = _dialog;
    this.features = [];
    this.room_size = 3;
    this.items = [];
    this.disabled = false;
    this.selected_features = [];
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled = s;
  }
  /** Add or edit selected items */
  changeResources() {
    const ref = this._dialog.open(LockerSelectModalComponent, {
      data: {
        items: this.items,
        options: { capacity: this.room_size }
      }
    });
    ref.afterClosed().subscribe((items) => {
      if (!items)
        items = ref.componentInstance.selected;
      this.setValue(items);
    });
  }
  /** Remove the selected space from the list */
  removeResource(space) {
    this.setValue(this.items.filter((_) => _.id !== space.id));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.items = new_value;
    if (this._onChange)
      this._onChange(this.items);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.items = value || [];
  }
  toggleFavourite(space) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(space.id);
    if (new_state) {
      this._settings.saveUserSetting(FAV_LOCKER_KEY, [
        ...fav_list,
        space.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_LOCKER_KEY, fav_list.filter((_) => _ !== space.id));
    }
  }
  static {
    this.\u0275fac = function LockerListFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerListFieldComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerListFieldComponent, selectors: [["locker-list-field"]], inputs: { features: "features" }, standalone: false, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _LockerListFieldComponent),
        multi: true
      }
    ])], decls: 11, vars: 4, consts: [["placeholder", ""], ["list", "", 1, "space-y-2"], ["locker", "", "class", "relative p-2 rounded-lg w-full flex items-center shadow border border-base-200", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "name", "add-locker", 1, "w-full", "inverse", "mt-2", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "flex", "items-center", "flex-wrap", "sm:space-x-2", "mb-2"], [1, "flex-1", "min-w-[256px]", "space-y-2"], ["locker", "", 1, "relative", "p-2", "rounded-lg", "w-full", "flex", "items-center", "shadow", "border", "border-base-200"], ["class", "flex flex-col", 4, "ngIf"], [1, "w-20", "h-20", "rounded-xl", "bg-base-200", "mr-4", "overflow-hidden", "flex", "items-center", "justify-center"], ["auth", "", "class", "min-h-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "pb-4"], [1, "font-medium"], [1, "flex", "items-center", "text-sm", "space-x-2"], [1, "text-blue-500", "text-base"], ["class", "flex items-center text-sm space-x-2", 4, "ngIf"], [1, "absolute", "bottom-0", "right-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "name", "edit-locker", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "name", "remove-locker", 1, "clear", 3, "click"], [1, "flex", "flex-col"], ["for", "title"], ["features", "", 1, "flex", "items-center", "flex-wrap", "space-x-2"], [3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["auth", "", 1, "min-h-full", "object-cover", 3, "source"], ["src", "assets/icons/locker-placeholder.svg", 1, "m-auto"]], template: function LockerListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, LockerListFieldComponent_div_1_Template, 30, 16, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "button", 3);
        \u0275\u0275listener("click", function LockerListFieldComponent_Template_button_click_2_listener() {
          return ctx.changeResources();
        });
        \u0275\u0275elementStart(3, "div", 4)(4, "app-icon");
        \u0275\u0275text(5, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275element(10, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.items);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 2, "BOOKINGS.LOCKER_ADD"));
      }
    }, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, MatCheckbox, IconComponent, AuthenticatedImageDirective, MatRipple, LevelPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerListFieldComponent, { className: "LockerListFieldComponent", filePath: "libs/bookings/src/lib/locker-list-field.component.ts", lineNumber: 133 });
})();

// libs/bookings/src/lib/bookings.module.ts
var SharedBookingsModule = class _SharedBookingsModule {
  static {
    this.\u0275fac = function SharedBookingsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SharedBookingsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedBookingsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [ReactiveFormsModule], imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatRadioModule,
      MatInputModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatButtonModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatCheckboxModule,
      MatAutocompleteModule,
      FormFieldsModule,
      ComponentsModule,
      MatRippleModule,
      MatTooltipModule,
      SharedSpacesModule,
      SharedEventsModule,
      SharedUsersModule
    ] });
  }
};

// libs/bookings/src/lib/desk.service.ts
var DesksService = class _DesksService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this.can_set_date = true;
    this.error_on_host = true;
  }
  bookDesk(_0) {
    return __async(this, arguments, function* ({ desks, host, reason, attendees, date }) {
      if (this.error_on_host && !host) {
        return notifyError("You need to select a host to book a desk.");
      } else {
        host = host || currentUser();
      }
      reason = reason || "";
      const level = this._org.levelWithID(desks[0].zone instanceof Array ? desks[0].zone : [desks[0].zone?.id]);
      let ref = this._dialog.open(DeskQuestionsModalComponent);
      let success = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().pipe(map((_) => null)).toPromise()
      ]);
      if (!success)
        return;
      ref.close();
      ref = this._dialog.open(DeskConfirmModalComponent, {
        data: {
          host,
          desks,
          date: date ? new Date(date) : /* @__PURE__ */ new Date(),
          reason,
          level,
          can_set_date: this.can_set_date
        }
      });
      success = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().pipe(map((_) => null)).toPromise()
      ]);
      if (!success)
        return;
      host = ref.componentInstance.host || host;
      date = ref.componentInstance.date || date;
      reason = ref.componentInstance.reason || reason;
      if (!host) {
        ref.close();
        return notifyError("You need to select a host to book a desk. ");
      }
      ref.componentInstance.loading = "Checking for existing desk bookings...";
      const bookings = yield queryBookings({
        type: "desk",
        period_start: getUnixTime(startOfDay(date || /* @__PURE__ */ new Date())),
        period_end: getUnixTime(endOfDay(date || /* @__PURE__ */ new Date()))
      }).toPromise();
      const desk_list = bookings.filter((d) => d.user_email.toLowerCase() === host.email.toLowerCase());
      if (desk_list?.length) {
        ref.close();
        return notifyError("You currently already have a desk booked for the selected date.");
      }
      ref.componentInstance.loading = "Booking desk...";
      const users = [host, ...attendees || []];
      yield Promise.all([
        desks.map((desk, idx) => this.makeDeskBooking(desk, host, date.valueOf() || (/* @__PURE__ */ new Date()).valueOf(), reason, users[idx]))
      ]);
      notifySuccess("Successfully booked desk");
      ref.close();
      return true;
    });
  }
  makeDeskBooking(desk, host, date, reason, for_user = null) {
    return __async(this, null, function* () {
      const location = `${desk.zone?.name}-${desk.id}`;
      const level = this._org.levelWithID(desk.zone instanceof Array ? desk.zone : [desk.zone?.id]);
      const zones = desk.zone?.id ? [desk.zone?.id, level?.parent_id] : [level?.parent_id];
      const booking_data = {
        booking_start: getUnixTime(startOfDay(date)),
        user_id: for_user?.id || host.id,
        user_name: for_user?.name || host.name,
        user_email: for_user?.email || host.email,
        booking_end: Math.floor(endOfDay(date).valueOf() / 1e3),
        asset_id: desk.id,
        asset_name: desk.name,
        title: reason,
        description: location,
        zones,
        booking_type: "desk",
        extension_data: {
          map_id: desk?.map_id || desk?.id,
          groups: desk.groups,
          for_user: for_user?.email
        }
      };
      return saveBooking(booking_data).toPromise();
    });
  }
  static {
    this.\u0275fac = function DesksService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DesksService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DesksService, factory: _DesksService.\u0275fac, providedIn: "root" });
  }
};

export {
  ParkingService,
  BookingFormService,
  ExploreDeskInfoComponent,
  InviteVisitorFormComponent,
  ParkingSpaceListFieldComponent,
  DeskListFieldComponent,
  LockerGridComponent,
  LockerListFieldComponent,
  SharedBookingsModule
};
//# sourceMappingURL=chunk-RNUBUWJY.js.map
