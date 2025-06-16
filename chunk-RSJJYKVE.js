import {
  BookingFormService,
  BookingLinkModalComponent,
  DeskQuestionsModalComponent,
  ExploreDeskInfoComponent,
  ExploreParkingInfoComponent,
  LockerGridComponent,
  ParkingService
} from "./chunk-GVZSGNB4.js";
import {
  ANIMATION_SHOW_CONTRACT_EXPAND,
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  CommonModule,
  DEFAULT_COLOURS,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  DeskHeightPresetsComponent,
  DurationFieldComponent,
  EventEmitter,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  GroupEventDetailsModalComponent,
  IconComponent,
  ImageCarouselComponent,
  InteractiveMapComponent,
  LevelPipe,
  MAT_DIALOG_DATA,
  MapLocateModalComponent,
  MapPinComponent,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatBottomSheet,
  MatBottomSheetRef,
  MatCheckbox,
  MatCheckboxModule,
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
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  ReactiveFormsModule,
  RouterLink,
  RouterModule,
  SafePipe,
  SanitizePipe,
  SettingsService,
  SettingsToggleComponent,
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
  checkinBooking,
  checkinBookingInstance,
  combineLatest,
  currentUser,
  endOfDay,
  first,
  format,
  formatDuration,
  formatRecurrence,
  forwardRef,
  fromBookingRecurrence,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  getInvalidFields,
  getUnixTime,
  i18n,
  isSameDay,
  loadLockerBanks,
  loadLockers,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  queryBookings,
  randomString,
  saveBooking,
  startOfDay,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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
} from "./chunk-PRUD57NM.js";

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
    \u0275\u0275elementStart(18, "icon");
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
    \u0275\u0275elementStart(29, "button", 18)(30, "icon");
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskSettingsModalComponent, selectors: [["desk-settings-modal"]], decls: 3, vars: 2, consts: [["desk_height_tooltip", ""], ["class", "relative w-[20rem] rounded bg-base-100 p-4 shadow", 4, "ngIf", "ngIfElse"], [1, "relative", "w-[20rem]", "rounded", "bg-base-100", "p-4", "shadow"], [1, "text-lg"], [1, "mb-4", "text-xs", "opacity-60"], [1, "mb-4", "mt-2", "flex", "flex-col"], [1, "flex", "items-center", "space-x-2", "pb-4"], ["appearance", "outline", 1, "no-subscript", "w-1/2", "flex-1"], ["placeholder", "No selected preset", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "standing"], ["value", "sitting"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["min", "60", "max", "120", "step", "0.5", "discrete", "", 1, "flex-1", 3, "displayWith"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"], [1, "w-12", "text-right", "text-sm"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "right-0", "top-0"], [3, "close", "show_close"]], template: function DeskSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DeskSettingsModalComponent_div_0_Template, 32, 4, "div", 1)(1, DeskSettingsModalComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const desk_height_tooltip_r4 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", !ctx.edit_presets)("ngIfElse", desk_height_tooltip_r4);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      DeskHeightPresetsComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskSettingsModalComponent, { className: "DeskSettingsModalComponent", filePath: "libs/bookings/src/lib/desk-settings-modal.component.ts", lineNumber: 104 });
})();

// libs/bookings/src/lib/booking-details-modal.component.ts
var _c0 = (a0) => ({ time: a0 });
var _c1 = () => ({ disable_pan: true, disable_zoom: true });
function BookingDetailsModalComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
}
function BookingDetailsModalComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "image-carousel", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("images", ctx_r0.booking == null ? null : ctx_r0.booking.extension_data == null ? null : ctx_r0.booking.extension_data.images);
  }
}
function BookingDetailsModalComponent_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 25);
    \u0275\u0275text(1, "event_repeat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r0.recurr_tooltip);
  }
}
function BookingDetailsModalComponent_div_11_Conditional_1_button_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.booking.checked_in ? "done" : "arrow_back");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, ctx_r0.booking.checked_in ? "COMMON.CHECKED_IN" : "COMMON.CHECK_IN"), " ");
  }
}
function BookingDetailsModalComponent_div_11_Conditional_1_button_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 34);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function BookingDetailsModalComponent_div_11_Conditional_1_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_div_11_Conditional_1_button_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleCheckedIn());
    });
    \u0275\u0275template(1, BookingDetailsModalComponent_div_11_Conditional_1_button_0_div_1_Template, 6, 4, "div", 31)(2, BookingDetailsModalComponent_div_11_Conditional_1_button_0_ng_template_2_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loading_state_r3 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-success", ctx_r0.booking.checked_in)("text-success-content", ctx_r0.booking.checked_in);
    \u0275\u0275property("disabled", ctx_r0.checking_in);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.checking_in)("ngIfElse", loading_state_r3);
  }
}
function BookingDetailsModalComponent_div_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BookingDetailsModalComponent_div_11_Conditional_1_button_0_Template, 4, 7, "button", 29);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r0.booking.checked_out_at && !ctx_r0.checked_out && !ctx_r0.auto_checkin && (ctx_r0.booking.state === "upcoming" || ctx_r0.booking.state === "started" || ctx_r0.booking.state === "in_progress") && ctx_r0.booking.status !== "declined");
  }
}
function BookingDetailsModalComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, BookingDetailsModalComponent_div_11_Conditional_1_Template, 1, 1, "button", 27);
    \u0275\u0275elementStart(2, "button", 28)(3, "icon");
    \u0275\u0275text(4, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const menu_r4 = \u0275\u0275reference(44);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.can_checkin ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r4);
  }
}
function BookingDetailsModalComponent_ng_container_38_div_6_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.name || "Item");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r7.quantity, " ");
  }
}
function BookingDetailsModalComponent_ng_container_38_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 40);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_ng_container_38_div_6_Template_button_click_1_listener() {
      const request_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.show_request[request_r6.id] = !ctx_r0.show_request[request_r6.id]);
    });
    \u0275\u0275elementStart(2, "div", 41)(3, "div", 42);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 43)(8, "icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 44)(11, "icon", 45);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 46);
    \u0275\u0275template(14, BookingDetailsModalComponent_ng_container_38_div_6_div_14_Template, 6, 2, "div", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 21, "BOOKINGS.ASSETS_REQUESTED_FOR", \u0275\u0275pureFunction1(24, _c0, \u0275\u0275pipeBind2(5, 18, request_r6.deliver_at, "MMM d, " + ctx_r0.time_format))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", request_r6.state === "approved")("text-success-content", request_r6.state === "approved")("bg-warning", request_r6.state !== "approved" && request_r6.state !== "rejected")("text-warning-content", request_r6.state !== "approved" && request_r6.state !== "rejected")("bg-error", request_r6.state === "rejected")("text-error-content", request_r6.state === "rejected");
    \u0275\u0275property("matTooltip", request_r6.state || "Tentative");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", request_r6.state === "approved" ? "done" : request_r6.state === "rejected" ? "close" : "schedule", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.show_request[request_r6.id] ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r0.show_request[request_r6.id] ? "show" : "hide");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", request_r6.items);
  }
}
function BookingDetailsModalComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 35)(2, "h3", 36);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275template(6, BookingDetailsModalComponent_ng_container_38_div_6_Template, 15, 26, "div", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(4, 3, "RESOURCE.ASSETS"), " (", (ctx_r0.booking.valid_assets == null ? null : ctx_r0.booking.valid_assets.length) || 0, ") ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.booking.valid_assets);
  }
}
function BookingDetailsModalComponent_button_39_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "interactive-map", 52);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.level == null ? null : ctx_r0.level.map_id)("features", ctx_r0.features)("options", \u0275\u0275pureFunction0(3, _c1));
  }
}
function BookingDetailsModalComponent_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewLocation());
    });
    \u0275\u0275template(1, BookingDetailsModalComponent_button_39_ng_container_1_Template, 2, 4, "ng-container", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hide_map);
  }
}
function BookingDetailsModalComponent_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_button_45_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.edit(ctx_r0.booking));
    });
    \u0275\u0275elementStart(1, "div", 54)(2, "icon");
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
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_button_46_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setDeskHeight());
    });
    \u0275\u0275elementStart(1, "div", 54)(2, "icon", 56);
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
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_button_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove(ctx_r0.booking, false));
    });
    \u0275\u0275elementStart(1, "div", 54)(2, "icon", 57);
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
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_button_48_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove(ctx_r0.booking, true));
    });
    \u0275\u0275elementStart(1, "div", 54)(2, "icon", 57);
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
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_button_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.end(ctx_r0.booking));
    });
    \u0275\u0275elementStart(1, "div", 54)(2, "icon", 57);
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
    return !this.booking.is_done && !this.booking.checked_in && this.booking.booking_type !== "visitor";
  }
  get can_checkin() {
    return !this._settings.get(`app.${(this.booking?.type || "booking") + "s"}.hide_checkin`) && !this._settings.get(`app.${this.booking?.type || "bookings"}.hide_checkin`) && !this._settings.get("app.bookings.hide_checkin");
  }
  get allow_series_delete() {
    const is_assigned = this.booking.extension_data.is_assigned;
    const check_list = [
      `${this.booking?.type}s`,
      this.booking?.type,
      "bookings"
    ];
    const key = is_assigned ? `app.{v}.allow_assigned_series_delete` : `app.{v}.allow_series_delete`;
    for (const check of check_list) {
      const check_key = key.replace("{v}", check);
      const value = this._settings.get(check_key);
      if (value != null)
        return !!value;
    }
    return false;
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
  constructor(_data, _settings, _org, _dialog) {
    this._data = _data;
    this._settings = _settings;
    this._org = _org;
    this._dialog = _dialog;
    this.edit = this._data.edit_fn;
    this.remove = this._data.remove_fn;
    this.end = this._data.end_fn;
    this.booking = this._data.booking;
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
  get recurr_tooltip() {
    return formatRecurrence(fromBookingRecurrence(this.booking)) || i18n("CALENDAR_EVENT.RECURRING_TOOLTIP");
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
          id: this.booking.asset_id,
          name: this.booking.asset_name,
          map_id: this.booking.extension_data.map_id || this.booking.asset_id,
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingDetailsModalComponent, selectors: [["booking-details-modal"]], decls: 50, vars: 28, consts: [["menu", "matMenu"], ["loading_state", ""], [1, "h-[100vh]", "w-[100vw]", "space-y-2", "overflow-auto", "bg-base-100", "pb-2", "sm:relative", "sm:inset-auto", "sm:h-auto", "sm:max-h-[80vh]", "sm:w-[51rem]", "sm:rounded", "sm:bg-base-200"], [1, "max-h-screen", "flex-col", "items-center", "border-base-200", "bg-base-100", "pb-4", "sm:flex", "sm:max-h-[80vh]", "sm:border-b", "sm:px-16"], ["class", "block h-8 w-full sm:hidden", 4, "ngIf"], ["class", "h-64 w-full overflow-hidden bg-neutral sm:rounded-b", 4, "ngIf"], ["title", "", 1, "mt-2", "w-full", "px-3", "text-xl", "font-medium"], [1, "w-full", "items-center", "justify-between", "sm:flex"], [1, "m-2", "flex", "items-center", "space-x-2"], [3, "status"], ["class", "text-2xl", 3, "matTooltip", 4, "ngIf"], ["actions", "", "class", "flex items-center space-x-2 px-2", 4, "ngIf"], [1, "flex-wrap", "sm:flex", "sm:px-12"], [1, "min-w-1/3", "flex-grow-[4]", "rounded", "border-base-200", "sm:m-2", "sm:w-[16rem]", "sm:border", "sm:bg-base-100", "sm:p-4"], [1, "mb-2", "mt-2", "px-3", "text-lg", "font-medium"], [1, "flex", "items-center", "space-x-2", "px-2"], [4, "ngIf"], ["map", "", "class", "min-w-1/3 relative m-2 mt-4 h-64 w-[calc(100%-1rem)] flex-grow-[3] overflow-hidden rounded border border-base-200 p-2 sm:my-2 sm:h-48 sm:w-[16rem] sm:bg-base-100", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "left-2", "top-0", "bg-neutral", "text-white"], ["xPosition", "before"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], [1, "block", "h-8", "w-full", "sm:hidden"], [1, "h-64", "w-full", "overflow-hidden", "bg-neutral", "sm:rounded-b"], [1, "h-64", "w-full", 3, "images"], [1, "text-2xl", 3, "matTooltip"], ["actions", "", 1, "flex", "items-center", "space-x-2", "px-2"], ["btn", "", "matRipple", "", 1, "h-10", "flex-1", "border-none", 3, "bg-success", "text-success-content", "disabled"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-white", 3, "matMenuTriggerFor"], ["btn", "", "matRipple", "", "class", "h-10 flex-1 border-none", 3, "bg-success", "text-success-content", "disabled", "click", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "h-10", "flex-1", "border-none", 3, "click", "disabled"], ["class", "flex items-center justify-center space-x-2", 4, "ngIf", "ngIfElse"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "mr-4"], [1, "mx-auto", 3, "diameter"], [1, "min-w-1/3", "mt-4", "flex-grow-[3]", "rounded", "border-base-200", "sm:m-2", "sm:w-[16rem]", "sm:border", "sm:bg-base-100", "sm:p-4"], [1, "mx-3", "py-2", "text-lg", "font-medium"], [1, "flex", "flex-col", "space-y-2"], ["request", "", "class", "overflow-hidden rounded-xl border border-base-300 bg-base-100", 4, "ngFor", "ngForOf"], ["request", "", 1, "overflow-hidden", "rounded-xl", "border", "border-base-300", "bg-base-100"], ["matRipple", "", 1, "flex", "w-full", "items-center", "space-x-2", "p-3", 3, "click"], [1, "flex-1", "text-left"], [1, "text-sm"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", 3, "matTooltip"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full"], [1, "text-2xl"], [1, "flex", "flex-col", "divide-y", "divide-base-100", "bg-base-200"], ["class", "flex items-center space-x-2 px-3 py-1 hover:opacity-90", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "space-x-2", "px-3", "py-1", "hover:opacity-90"], [1, "flex", "flex-1", "items-center"], [1, "rounded", "bg-success", "px-2", "py-1", "text-xs", "text-success-content"], ["map", "", 1, "min-w-1/3", "relative", "m-2", "mt-4", "h-64", "w-[calc(100%-1rem)]", "flex-grow-[3]", "overflow-hidden", "rounded", "border", "border-base-200", "p-2", "sm:my-2", "sm:h-48", "sm:w-[16rem]", "sm:bg-base-100", 3, "click"], [1, "pointer-events-none", 3, "src", "features", "options"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click"], [1, "flex", "items-center", "space-x-2", "text-base"], ["mat-menu-item", "", 3, "click"], ["className", "material-symbols-rounded"], [1, "text-error"]], template: function BookingDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
        \u0275\u0275template(2, BookingDetailsModalComponent_div_2_Template, 1, 0, "div", 4)(3, BookingDetailsModalComponent_div_3_Template, 2, 1, "div", 5);
        \u0275\u0275elementStart(4, "h3", 6);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 7)(7, "div", 8)(8, "status-pill", 9);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, BookingDetailsModalComponent_icon_10_Template, 2, 1, "icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, BookingDetailsModalComponent_div_11_Template, 5, 2, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "h3", 14);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 15)(18, "icon");
        \u0275\u0275text(19, "event");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 15)(24, "icon");
        \u0275\u0275text(25, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div");
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 15)(29, "icon");
        \u0275\u0275text(30, "map");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div");
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 15)(34, "icon");
        \u0275\u0275text(35, "place");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div");
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(38, BookingDetailsModalComponent_ng_container_38_Template, 7, 5, "ng-container", 16)(39, BookingDetailsModalComponent_button_39_Template, 2, 1, "button", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 18)(41, "icon");
        \u0275\u0275text(42, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "mat-menu", 19, 0);
        \u0275\u0275template(45, BookingDetailsModalComponent_button_45_Template, 7, 3, "button", 20)(46, BookingDetailsModalComponent_button_46_Template, 7, 3, "button", 21)(47, BookingDetailsModalComponent_button_47_Template, 7, 3, "button", 21)(48, BookingDetailsModalComponent_button_48_Template, 7, 3, "button", 21)(49, BookingDetailsModalComponent_button_49_Template, 7, 3, "button", 21);
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
        \u0275\u0275property("ngIf", ctx.booking.instance);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.booking.is_done);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 23, "BOOKINGS.DETAILS"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 25, ctx.booking.date, "EEEE, dd LLLL y"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.period);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" ", (ctx.level == null ? null : ctx.level.display_name) || (ctx.level == null ? null : ctx.level.name), ", ", ctx.booking.asset_name || ctx.booking.asset_id, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" ", (ctx.building == null ? null : ctx.building.display_name) || (ctx.building == null ? null : ctx.building.name), " ", (ctx.building == null ? null : ctx.building.address) ? ", " + ctx.building.address : "", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.has_assets);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.level == null ? null : ctx.level.map_id);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.can_edit);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.is_checked_in && ctx.desk_height_enabled);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.is_in_progress);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.booking.instance && ctx.allow_series_delete);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.is_in_progress);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      DatePipe,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      TranslatePipe,
      IconComponent,
      InteractiveMapComponent,
      MatDialogModule,
      MatDialogClose,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      StatusPillComponent,
      ImageCarouselComponent,
      MatRippleModule,
      MatRipple
    ], encapsulation: 2, data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingDetailsModalComponent, { className: "BookingDetailsModalComponent", filePath: "libs/bookings/src/lib/booking-details-modal.component.ts", lineNumber: 382 });
})();

// libs/bookings/src/lib/booking-card.component.ts
var _c02 = () => ["./"];
var _c12 = (a0) => ({ booking: a0 });
function BookingCardComponent_h4_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
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
    \u0275\u0275elementStart(0, "h4", 2);
    \u0275\u0275template(1, BookingCardComponent_h4_0_span_1_Template, 2, 1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementStart(4, "span", 4);
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
function BookingCardComponent_a_1_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 19);
    \u0275\u0275text(1, "event_repeat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r0.recurr_tooltip);
  }
}
function BookingCardComponent_a_1_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, "desk");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "RESOURCE.DESK"));
  }
}
function BookingCardComponent_a_1_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "RESOURCE.LOCKER"));
  }
}
function BookingCardComponent_a_1_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, "drive_eta");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "RESOURCE.PARKING"));
  }
}
function BookingCardComponent_a_1_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, "people");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "RESOURCE.VISITOR"));
  }
}
function BookingCardComponent_a_1_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon");
    \u0275\u0275text(1, "book");
    \u0275\u0275elementEnd();
  }
}
function BookingCardComponent_a_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "icon");
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.location);
  }
}
function BookingCardComponent_a_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.ASSOCIATE"), " ");
  }
}
function BookingCardComponent_a_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.EVENT"), " ");
  }
}
function BookingCardComponent_a_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
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
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275listener("click", function BookingCardComponent_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewDetails());
    });
    \u0275\u0275elementStart(1, "div", 7)(2, "h4", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "status-pill", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BookingCardComponent_a_1_icon_7_Template, 2, 1, "icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12)(9, "div", 13);
    \u0275\u0275template(10, BookingCardComponent_a_1_Case_10_Template, 3, 3, "icon", 14)(11, BookingCardComponent_a_1_Case_11_Template, 3, 3, "icon", 14)(12, BookingCardComponent_a_1_Case_12_Template, 3, 3, "icon", 14)(13, BookingCardComponent_a_1_Case_13_Template, 3, 3, "icon", 14)(14, BookingCardComponent_a_1_Case_14_Template, 2, 0, "icon");
    \u0275\u0275elementStart(15, "div", 15);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, BookingCardComponent_a_1_div_17_Template, 5, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "icon", 17);
    \u0275\u0275text(19, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, BookingCardComponent_a_1_div_20_Template, 3, 3, "div", 18)(21, BookingCardComponent_a_1_div_21_Template, 3, 3, "div", 18)(22, BookingCardComponent_a_1_div_22_Template, 3, 3, "div", 18);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c02))("queryParams", \u0275\u0275pureFunction1(15, _c12, ctx_r0.booking == null ? null : ctx_r0.booking.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.booking == null ? null : ctx_r0.booking.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", ctx_r0.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.period);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.booking.instance);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_7_0 = ctx_r0.type) === "desk" ? 10 : tmp_7_0 === "locker" ? 11 : tmp_7_0 === "parking" ? 12 : tmp_7_0 === "visitor" ? 13 : 14);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.raw_description || (ctx_r0.booking == null ? null : ctx_r0.booking.asset_name) || (ctx_r0.booking == null ? null : ctx_r0.booking.asset_id), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.location);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.for_current_user && (ctx_r0.booking == null ? null : ctx_r0.booking.booking_type) !== "group-event");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.booking == null ? null : ctx_r0.booking.booking_type) === "group-event");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(23, 12, ctx_r0.is_reserved_parking_space));
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
  get recurr_tooltip() {
    return formatRecurrence(fromBookingRecurrence(this.booking)) || i18n("CALENDAR_EVENT.RECURRING_TOOLTIP");
  }
  constructor(_dialog, _route, _org, _settings, _parking) {
    super();
    this._dialog = _dialog;
    this._route = _route;
    this._org = _org;
    this._settings = _settings;
    this._parking = _parking;
    this.show_day = false;
    this.edit_fn = (i) => null;
    this.remove_fn = (i, s) => null;
    this.end_fn = (i) => null;
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
    return this.booking.type;
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
      this._dialog.closeAll();
      const view_component = this.booking.booking_type === "group-event" ? GroupEventDetailsModalComponent : BookingDetailsModalComponent;
      const data = {
        booking: this.booking.booking_type === "group-event" ? { booking: this.booking, concierge: false } : this.booking,
        edit_fn: this.edit_fn,
        remove_fn: this.remove_fn,
        end_fn: this.end_fn
      };
      this._dialog.open(view_component, { data });
    });
  }
  static {
    this.\u0275fac = function BookingCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingCardComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ParkingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingCardComponent, selectors: [["booking-card"]], inputs: { booking: "booking", show_day: "show_day", edit_fn: "edit_fn", remove_fn: "remove_fn", end_fn: "end_fn" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [["class", "mb-2 flex items-center", 4, "ngIf"], ["name", "view-booking-details", "class", "relative w-full cursor-pointer overflow-hidden", 3, "routerLink", "queryParams", "click", 4, "ngIf"], [1, "mb-2", "flex", "items-center"], ["day", "", 4, "ngIf"], [1, "px-2", "text-xs"], ["day", ""], ["name", "view-booking-details", 1, "relative", "w-full", "cursor-pointer", "overflow-hidden", 3, "click", "routerLink", "queryParams"], [1, "relative", "w-full", "rounded-xl", "border", "border-base-300", "bg-base-100", "py-4", "shadow"], [1, "px-4", "text-lg"], [1, "mx-4", "my-2", "flex", "items-center", "space-x-2"], [3, "status"], ["class", "text-2xl", 3, "matTooltip", 4, "ngIf"], [1, "divide-base-200-500", "flex", "flex-col", "flex-wrap", "space-y-2", "py-2", "sm:flex-row", "sm:space-y-0", "sm:divide-x"], [1, "flex", "max-w-[33%]", "items-center", "px-4"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "mx-2", "w-1/2", "flex-1", "truncate"], ["class", "flex items-center px-4", 4, "ngIf"], [1, "absolute", "right-1", "top-1/2", "-translate-y-1/2", "text-4xl"], ["class", "bg-warning/50 absolute right-2 top-2 rounded-xl px-2 py-1 text-xs", 4, "ngIf"], [1, "text-2xl", 3, "matTooltip"], [1, "flex", "items-center", "px-4"], [1, "mx-2", "truncate"], [1, "bg-warning/50", "absolute", "right-2", "top-2", "rounded-xl", "px-2", "py-1", "text-xs"]], template: function BookingCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BookingCardComponent_h4_0_Template, 7, 9, "h4", 0)(1, BookingCardComponent_a_1_Template, 24, 17, "a", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.booking);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.booking);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      AsyncPipe,
      DatePipe,
      TranslatePipe,
      IconComponent,
      StatusPillComponent,
      RouterModule,
      RouterLink,
      MatTooltipModule,
      MatTooltip
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  position: relative;\n}\n/*# sourceMappingURL=booking-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingCardComponent, { className: "BookingCardComponent", filePath: "libs/bookings/src/lib/booking-card.component.ts", lineNumber: 170 });
})();

// libs/bookings/src/lib/desk-confirm-modal.component.ts
function DeskConfirmModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 4)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function DeskConfirmModalComponent_ng_container_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-user-search-field", 14);
    \u0275\u0275twoWayListener("ngModelChange", function DeskConfirmModalComponent_ng_container_5_div_2_Template_a_user_search_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.host, $event) || (ctx_r2.host = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "FORM.HOST"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.host);
  }
}
function DeskConfirmModalComponent_ng_container_5_div_7_Template(rf, ctx) {
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
function DeskConfirmModalComponent_ng_container_5_a_date_field_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a-date-field", 15);
    \u0275\u0275twoWayListener("ngModelChange", function DeskConfirmModalComponent_ng_container_5_a_date_field_8_Template_a_date_field_ngModelChange_0_listener($event) {
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
function DeskConfirmModalComponent_ng_container_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "label");
    \u0275\u0275text(2, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 17)(4, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function DeskConfirmModalComponent_ng_container_5_div_9_Template_input_ngModelChange_4_listener($event) {
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
    \u0275\u0275elementStart(1, "main", 5);
    \u0275\u0275template(2, DeskConfirmModalComponent_ng_container_5_div_2_Template, 5, 4, "div", 6);
    \u0275\u0275elementStart(3, "div", 7)(4, "label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, DeskConfirmModalComponent_ng_container_5_div_7_Template, 3, 4, "div", 8)(8, DeskConfirmModalComponent_ng_container_5_a_date_field_8_Template, 1, 1, "a-date-field", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, DeskConfirmModalComponent_ng_container_5_div_9_Template, 5, 1, "div", 10);
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "footer", 11)(13, "button", 12);
    \u0275\u0275listener("click", function DeskConfirmModalComponent_ng_container_5_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirm());
    });
    \u0275\u0275text(14, "Confirm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.can_set_host);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "FORM.DATE"));
    \u0275\u0275advance(2);
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
    \u0275\u0275elementStart(0, "main", 19);
    \u0275\u0275element(1, "mat-spinner", 20);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskConfirmModalComponent, selectors: [["desk-flow-confirm-modal-component"]], outputs: { event: "event" }, decls: 8, vars: 3, consts: [["load_state", ""], [1, "flex-1"], ["icon", "", "mat-dialog-close", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["icon", "", "mat-dialog-close", ""], [1, "p-4"], ["host", "", "class", "flex flex-col", 4, "ngIf"], ["date", "", 1, "mb-4"], [4, "ngIf"], [3, "ngModel", "ngModelChange", 4, "ngIf"], ["reason", "", "class", "mb-4 flex flex-col", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["host", "", 1, "flex", "flex-col"], [1, "mb-4", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["reason", "", 1, "mb-4", "flex", "flex-col"], ["appearance", "outline"], ["matInput", "", "placeholder", "Reason", 3, "ngModelChange", "ngModel"], ["load", "", 1, "flex", "flex-col", "items-center", "justify-center", "p-12"], [1, "mb-4", 3, "diameter"]], template: function DeskConfirmModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h2");
        \u0275\u0275text(2, "Confirm Booking");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 1);
        \u0275\u0275template(4, DeskConfirmModalComponent_button_4_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, DeskConfirmModalComponent_ng_container_5_Template, 15, 10, "ng-container", 3)(6, DeskConfirmModalComponent_ng_template_6_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r6 = \u0275\u0275reference(7);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r6);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      DatePipe,
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      DateFieldComponent,
      UserSearchFieldComponent,
      MatDialogModule,
      MatDialogClose
    ], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n/*# sourceMappingURL=desk-confirm-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskConfirmModalComponent, { className: "DeskConfirmModalComponent", filePath: "libs/bookings/src/lib/desk-confirm-modal.component.ts", lineNumber: 105 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-details.component.ts
var _c03 = () => [];
var _c13 = () => ({ disable_pan: true, disable_zoom: true });
function DeskDetailsComponent_ng_container_0_image_carousel_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "image-carousel", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("images", ctx_r1.desk.images);
  }
}
function DeskDetailsComponent_ng_container_0_section_33_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
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
    \u0275\u0275elementStart(0, "section", 20)(1, "h2", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DeskDetailsComponent_ng_container_0_section_33_div_4_Template, 3, 1, "div", 21);
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
    \u0275\u0275elementStart(0, "section", 24);
    \u0275\u0275element(1, "interactive-map", 25);
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
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function DeskDetailsComponent_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(7, "icon", 6);
    \u0275\u0275text(8, "favorite");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7)(10, "section", 8)(11, "h2", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "section", 10)(14, "h2", 11);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12)(18, "icon");
    \u0275\u0275text(19, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 12)(24, "icon");
    \u0275\u0275text(25, "desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 12)(29, "icon");
    \u0275\u0275text(30, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, DeskDetailsComponent_ng_container_0_section_33_Template, 5, 5, "section", 13)(34, DeskDetailsComponent_ng_container_0_section_34_Template, 2, 5, "section", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 15)(36, "button", 16);
    \u0275\u0275listener("click", function DeskDetailsComponent_ng_container_0_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.active = !ctx_r1.active;
      return \u0275\u0275resetView(ctx_r1.activeChange.emit(ctx_r1.active));
    });
    \u0275\u0275elementStart(37, "div", 17)(38, "icon", 18);
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
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r1.fav ? "material-symbols-rounded" : "material-symbols-outlined");
    \u0275\u0275advance(5);
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
    \u0275\u0275elementStart(0, "div", 26)(1, "p", 27);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskDetailsComponent, selectors: [["desk-details"]], inputs: { desk: "desk", fav: "fav", active: "active", hide_map: "hide_map" }, outputs: { close: "close", toggleFav: "toggleFav", activeChange: "activeChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 2, consts: [["emptyState", ""], [4, "ngIf", "ngIfElse"], ["image", "", 1, "relative", "w-full", "bg-base-300"], ["class", "absolute inset-0", 3, "images", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "close-desk-details", 1, "absolute", "left-2", "top-2", "bg-base-200", "text-base-content", "sm:hidden", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite-details", 1, "absolute", "right-2", "top-2", "bg-base-200", 3, "click"], [3, "className"], [1, "h-[calc(100%-19.75rem)]", "flex-1", "space-y-2", "overflow-auto", "p-2"], ["actions", "", 1, "z-0", "border-b", "pb-2"], [1, "mb-2", "mt-4", "text-xl", "font-medium"], ["details", "", 1, "space-y-2", "border-b", "pb-2"], [1, "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["facilities", "", "class", "space-y-2 border-b pb-2", 4, "ngIf"], ["map", "", "class", "relative mx-auto h-64 w-full overflow-hidden rounded border border-base-200 sm:h-48", 4, "ngIf"], [1, "border-t", "border-base-200", "px-2", "pb-[5.5rem]", "pt-2", "shadow", "sm:hidden"], ["btn", "", "matRipple", "", "name", "toggle-desk-details", 1, "w-full", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "text-2xl"], [1, "absolute", "inset-0", 3, "images"], ["facilities", "", 1, "space-y-2", "border-b", "pb-2"], ["class", "flex flex-wrap items-center space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], ["for", "feat", 1, "w-1/2", "flex-1"], ["map", "", 1, "relative", "mx-auto", "h-64", "w-full", "overflow-hidden", "rounded", "border", "border-base-200", "sm:h-48"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "text-center", "opacity-30"]], template: function DeskDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DeskDetailsComponent_ng_container_0_Template, 43, 33, "ng-container", 1)(1, DeskDetailsComponent_ng_template_1_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const emptyState_r4 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.desk)("ngIfElse", emptyState_r4);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      TranslatePipe,
      IconComponent,
      InteractiveMapComponent,
      ImageCarouselComponent,
      MatRippleModule,
      MatRipple
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 20rem;\n  height: 100%;\n  min-height: 65vh;\n  background: white;\n}\n/*# sourceMappingURL=desk-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskDetailsComponent, { className: "DeskDetailsComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-details.component.ts", lineNumber: 181 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-filters.component.ts
var _c04 = () => ({ standalone: true });
var _c14 = () => [];
function DeskFiltersComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function DeskFiltersComponent_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "keyboard_arrow_left");
    \u0275\u0275elementEnd()();
  }
}
function DeskFiltersComponent_mat_form_field_16_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
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
    \u0275\u0275elementStart(0, "mat-form-field", 19)(1, "mat-select", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_mat_form_field_16_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275template(3, DeskFiltersComponent_mat_form_field_16_mat_option_3_Template, 2, 2, "mat-option", 21);
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
    \u0275\u0275elementStart(0, "mat-option", 22);
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
    \u0275\u0275elementStart(0, "mat-form-field", 19)(1, "mat-select", 23);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_mat_form_field_18_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275template(5, DeskFiltersComponent_mat_form_field_18_mat_option_5_Template, 2, 2, "mat-option", 21);
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
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 28);
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
    \u0275\u0275elementStart(0, "mat-option", 22)(1, "div", 25);
    \u0275\u0275template(2, DeskFiltersComponent_mat_form_field_20_mat_option_4_div_2_Template, 5, 3, "div", 26);
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
    \u0275\u0275elementStart(0, "mat-form-field", 19)(1, "mat-select", 24);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_mat_form_field_20_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275template(4, DeskFiltersComponent_mat_form_field_20_mat_option_4_Template, 5, 3, "mat-option", 21);
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
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-checkbox", 30);
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
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 33);
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_div_29_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 32)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-duration-field", 34);
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
function DeskFiltersComponent_section_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 35)(1, "h2", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 37)(5, "settings-toggle", 38);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_section_30_Template_settings_toggle_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_fav: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.FAVOURITES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(6, 6, "COMMON.FAVOURITES_ONLY"))("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(7, 8, ctx_r1.options)) == null ? null : tmp_3_0.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(10, _c04));
  }
}
function DeskFiltersComponent_section_31_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "settings-toggle", 42);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function DeskFiltersComponent_section_31_div_4_Template_settings_toggle_ngModelChange_1_listener($event) {
      const feat_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r12, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const feat_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", feat_r12)("ngModel", (((tmp_4_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.options)) == null ? null : tmp_4_0.features) || \u0275\u0275pureFunction0(5, _c14)).includes(feat_r12))("ngModelOptions", \u0275\u0275pureFunction0(6, _c04));
  }
}
function DeskFiltersComponent_section_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 39)(1, "h2", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DeskFiltersComponent_section_31_div_4_Template, 3, 7, "div", 40);
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
function DeskFiltersComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 44);
    \u0275\u0275listener("click", function DeskFiltersComponent_div_33_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFiltersComponent, selectors: [["desk-filters"]], inputs: { hide_levels: "hide_levels" }, decls: 34, vars: 36, consts: [[1, "flex", "items-center", "rounded-t-md", "border-b", "border-base-200", "pb-2", "sm:hidden"], [1, "flex-1", "pl-2"], ["icon", "", "matRipple", "", "name", "close-desk-filters", "class", "sm:hidden", 3, "click", 4, "ngIf"], [1, "flex-2", "text-center", "font-medium"], [1, "flex-1"], [1, "max-h-[65vh]", "w-full", "max-w-[100vw]", "divide-y", "divide-base-200", "overflow-y-auto", "overflow-x-hidden", "p-2", "sm:max-w-[30vw]", 3, "formGroup"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-[8rem]", "flex-1", "flex-col"], ["for", "location"], ["appearance", "outline", "class", "w-full", 4, "ngIf"], [1, "min-w-[256px]", "flex-1"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "to", "timezone"], ["class", "-mt-2 mb-2 flex justify-end", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["favs", "", "class", "space-y-2 pb-4", 4, "ngIf"], ["class", "space-y-2", "features", "", 4, "ngIf"], ["class", "w-full border-t border-base-200 px-2 py-2", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "close-desk-filters", 1, "sm:hidden", 3, "click"], ["appearance", "outline", 1, "w-full"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [1, "-mt-2", "mb-2", "flex", "justify-end"], ["formControlName", "all_day"], [1, "flex", "items-center", "space-x-2"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], ["formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr", "timezone"], ["favs", "", 1, "space-y-2", "pb-4"], [1, "mt-2", "text-lg", "font-medium"], [1, "flex", "w-full", "items-center"], [1, "w-full", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], ["features", "", 1, "space-y-2"], ["class", "flex flex-wrap items-center space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], [1, "w-full", "capitalize", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "w-full", "border-t", "border-base-200", "px-2", "py-2"], ["btn", "", "matRipple", "", "name", "apply-desk-filters", 1, "w-full", 3, "click"]], template: function DeskFiltersComponent_Template(rf, ctx) {
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
        \u0275\u0275template(30, DeskFiltersComponent_section_30_Template, 8, 11, "section", 15)(31, DeskFiltersComponent_section_31_Template, 6, 6, "section", 16);
        \u0275\u0275pipe(32, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, DeskFiltersComponent_div_33_Template, 4, 3, "div", 17);
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_6_0;
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
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 23, "BOOKINGS.LOCATION"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.use_region && ((tmp_5_0 = \u0275\u0275pipeBind1(17, 25, ctx.regions)) == null ? null : tmp_5_0.length));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.use_region && ((tmp_6_0 = \u0275\u0275pipeBind1(19, 27, ctx.buildings)) == null ? null : tmp_6_0.length) > 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.hide_levels);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 29, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(35, _c04))("to", ctx.end_date)("timezone", ctx.timezone);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 31, "FORM.DATE_ERROR"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.allow_all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.form.value.all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.hide_levels);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_17_0 = \u0275\u0275pipeBind1(32, 33, ctx.features)) == null ? null : tmp_17_0.length) && !ctx.hide_levels);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.can_close);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      TranslatePipe,
      MatRippleModule,
      MatRipple,
      IconComponent,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatCheckboxModule,
      MatCheckbox,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=desk-filters.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFiltersComponent, { className: "DeskFiltersComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-filters.component.ts", lineNumber: 267 });
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
    \u0275\u0275elementStart(4, "icon");
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
    \u0275\u0275elementStart(5, "icon");
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFiltersDisplayComponent, selectors: [["desk-filters-display"]], inputs: { view: "view" }, outputs: { viewChange: "viewChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 22, vars: 26, consts: [["actions", "", 1, "flex", "flex-row", "items-center", "space-x-2", "p-2", "sm:hidden"], ["btn", "", "matRipple", "", "name", "edit-desk-filters", 1, "w-1/2", "flex-1", 3, "click"], [1, "flex", "items-center"], ["btn", "", "matRipple", "", "name", "view-desk-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-desk-list", 1, "rounded-l-none", "rounded-r", 3, "click"], ["filters", "", 1, "flex", "w-[35rem]", "max-w-full", "flex-wrap", "items-center", "p-2", "sm:max-w-[35rem]"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], [4, "ngIf"], ["filter-item", "", "features", "", 4, "ngFor", "ngForOf"], ["filter-item", "", 4, "ngIf"], ["filter-item", "", "features", ""], ["icon", "", "matRipple", "", "name", "remove-desk-filter", 1, "-mr-4", 3, "click"], ["filter-item", ""], ["icon", "", "matRipple", "", "name", "remove-desk-favs-filter", 1, "-mr-4", 3, "click"]], template: function DeskFiltersDisplayComponent_Template(rf, ctx) {
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
    }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, DatePipe, IconComponent, TranslatePipe, MatRippleModule, MatRipple], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=desk-filters-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFiltersDisplayComponent, { className: "DeskFiltersDisplayComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-filters-display.component.ts", lineNumber: 122 });
})();

// libs/bookings/src/lib/desk-select-modal/desk-list.component.ts
var _c06 = (a0) => ({ count: a0 });
function DeskListComponent_ng_container_7_ul_1_li_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function DeskListComponent_ng_container_7_ul_1_li_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const desk_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", desk_r2.images[0]);
  }
}
function DeskListComponent_ng_container_7_ul_1_li_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
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
    \u0275\u0275elementStart(10, "div", 16)(11, "icon", 17);
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
    \u0275\u0275elementStart(16, "icon", 20);
    \u0275\u0275text(17, "favorite");
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
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.isFavourite(desk_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.DESK_LIST_LOADING"), " ");
  }
}
function DeskListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "p", 28);
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
    ]).pipe(map(([{ show_fav }, _]) => _.filter((i) => !show_fav || this.isFavourite(i.id)).sort((a, b) => {
      const a_fav = this.isFavourite(a.id) ? 1 : 0;
      const b_fav = this.isFavourite(b.id) ? 1 : 0;
      return b_fav - a_fav;
    })));
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskListComponent, selectors: [["desk-list"]], inputs: { active: "active", selected: "selected", favorites: "favorites" }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 13, vars: 15, consts: [["load_state", ""], ["empty_state", ""], ["placeholder", ""], [1, "font-bold"], ["count", "", 1, "mb-4", "text-sm", "opacity-60"], [4, "ngIf", "ngIfElse"], ["class", "list-style-none space-y-2", 4, "ngIf", "ngIfElse"], [1, "list-style-none", "space-y-2"], ["desk", "", "class", "relative w-full overflow-hidden rounded-lg border border-base-200 bg-base-100 shadow", 3, "!border-info", 4, "ngFor", "ngForOf"], ["desk", "", 1, "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "border-base-200", "bg-base-100", "shadow"], ["name", "select-desk", "matRipple", "", 1, "flex", "h-full", "w-full", "p-2", 3, "click"], [1, "relative", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-xl", "bg-base-200"], ["class", "absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-neutral bg-base-200 text-white", 4, "ngIf"], ["auth", "", "class", "h-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "flex-1", "space-y-2", "pt-2", "text-left"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], [1, "text-xs"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite", 1, "absolute", "right-1", "top-1", 3, "click"], [3, "className"], [1, "absolute", "left-1", "top-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "border-neutral", "bg-base-200", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [3, "diameter"], [1, "opacity-30"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "text-center", "opacity-30"]], template: function DeskListComponent_Template(rf, ctx) {
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
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      TranslatePipe,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      AuthenticatedImageDirective
    ], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  background: rgba(0, 0, 0, 0.05);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=desk-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskListComponent, { className: "DeskListComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-list.component.ts", lineNumber: 139 });
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
      if (!this.level && viewable_levels.length) {
        this.level = viewable_levels[0];
      }
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskMapComponent, selectors: [["desk-map"]], inputs: { is_displayed: "is_displayed", active: "active" }, outputs: { onSelect: "onSelect" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 8, vars: 17, consts: [[1, "w-full", "border-b", "border-base-200", "bg-base-100", "p-2"], ["levels", "", "appearance", "outline", "class", "no-subscript w-full", 4, "ngIf"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["levels", "", "appearance", "outline", 1, "no-subscript", "w-full"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function DeskMapComponent_Template(rf, ctx) {
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
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      InteractiveMapComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      TranslatePipe,
      FormsModule,
      NgControlStatus,
      NgModel
    ], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n/*# sourceMappingURL=desk-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskMapComponent, { className: "DeskMapComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-map.component.ts", lineNumber: 94 });
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskSelectModalComponent, selectors: [["desk-select-modal"]], decls: 46, vars: 49, consts: [["map_view", ""], [1, "flex", "h-[100vh]", "w-[100vw]", "flex-col", "bg-base-100", "sm:relative", "sm:h-auto", "sm:w-auto"], [1, "flex", "w-full", "items-center", "space-x-4"], ["icon", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "hidden", "flex-1", "items-center", "justify-end", "sm:flex"], ["btn", "", "matRipple", "", "name", "view-desk-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-desk-list", 1, "rounded-l-none", "rounded-r", 3, "click"], [1, "flex", "h-[65vh]", "w-[calc(100vw-4rem)]", "items-center", "divide-x", "divide-base-200", "overflow-hidden"], [1, "hidden", "h-full", "max-w-[20rem]", "sm:flex", "sm:h-[65vh]", "sm:max-h-full", 3, "hide_levels"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col", "items-center", "sm:h-[65vh]"], [1, "w-full", "border-b", "border-base-200", 3, "viewChange", "view"], ["class", "h-1/2 flex-1 bg-base-200", 3, "active", "selected", "favorites", "toggleFav", "onSelect", 4, "ngIf", "ngIfElse"], [1, "absolute", "z-20", "block", "h-full", "w-full", "bg-base-100", "sm:relative", "sm:flex", "sm:h-[65vh]", "sm:max-w-[20rem]", 3, "activeChange", "toggleFav", "close", "desk", "active", "hide_map", "fav"], [1, "flex", "w-full", "flex-col-reverse", "items-center", "justify-end", "border-t", "border-base-200", "px-2", "pb-[5.5rem]", "pt-2", "sm:hidden"], ["btn", "", "matRipple", "", "name", "desk-return", "class", "inverse w-full sm:hidden", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "name", "save-desks", 1, "w-full", "sm:mb-0", "sm:w-32", 3, "mat-dialog-close"], [1, "hidden", "w-full", "items-center", "justify-between", "border-t", "border-base-200", "p-2", "sm:flex"], ["btn", "", "matRipple", "", "name", "desk-return", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "text-sm", "opacity-60"], ["btn", "", "matRipple", "", "name", "toggle-desk", 3, "click", "disabled"], [1, "mr-1"], [1, "h-1/2", "flex-1", "bg-base-200", 3, "toggleFav", "onSelect", "active", "selected", "favorites"], ["btn", "", "matRipple", "", "name", "desk-return", 1, "inverse", "w-full", "sm:hidden", 3, "click"], [1, "h-1/2", "w-full", "flex-1", 3, "onSelect", "is_displayed", "active"]], template: function DeskSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "button", 3)(3, "icon");
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
        \u0275\u0275elementStart(26, "footer", 16)(27, "button", 17)(28, "div", 18)(29, "icon", 19);
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
        \u0275\u0275elementStart(38, "div", 18)(39, "icon", 19);
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
    }, dependencies: [
      CommonModule,
      NgIf,
      DeskMapComponent,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      DeskDetailsComponent,
      DeskListComponent,
      DeskFiltersComponent,
      DeskFiltersDisplayComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskSelectModalComponent, { className: "DeskSelectModalComponent", filePath: "libs/bookings/src/lib/desk-select-modal/desk-select-modal.component.ts", lineNumber: 191 });
})();

// libs/bookings/src/lib/new-desk-select-modal/new-desk-details.component.ts
var _c09 = () => [];
var _c16 = () => ({ disable_pan: true, disable_zoom: true });
function NewDeskDetailsComponent_ng_container_0_Conditional_1_image_carousel_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "image-carousel", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("images", ctx_r1.desk.images);
  }
}
function NewDeskDetailsComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2);
    \u0275\u0275template(1, NewDeskDetailsComponent_ng_container_0_Conditional_1_image_carousel_1_Template, 1, 1, "image-carousel", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.desk.images == null ? null : ctx_r1.desk.images.length);
  }
}
function NewDeskDetailsComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "section", 3);
  }
}
function NewDeskDetailsComponent_ng_container_0_section_33_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", feat_r3, " ");
  }
}
function NewDeskDetailsComponent_ng_container_0_section_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 17)(1, "h2", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, NewDeskDetailsComponent_ng_container_0_section_33_div_4_Template, 3, 1, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.FEATURES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.desk.features || \u0275\u0275pureFunction0(4, _c09));
  }
}
function NewDeskDetailsComponent_ng_container_0_section_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21);
    \u0275\u0275element(1, "interactive-map", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.map_url)("focus", ctx_r1.desk.map_id || ctx_r1.desk.id)("features", ctx_r1.features)("options", \u0275\u0275pureFunction0(4, _c16));
  }
}
function NewDeskDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NewDeskDetailsComponent_ng_container_0_Conditional_1_Template, 2, 1, "section", 2)(2, NewDeskDetailsComponent_ng_container_0_Conditional_2_Template, 1, 0, "section", 3);
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function NewDeskDetailsComponent_ng_container_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function NewDeskDetailsComponent_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(7, "icon", 6);
    \u0275\u0275text(8, "favorite");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "section", 8)(11, "h2", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "section", 10)(14, "h2", 11);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12)(18, "icon");
    \u0275\u0275text(19, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 12)(24, "icon");
    \u0275\u0275text(25, "desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 12)(29, "icon");
    \u0275\u0275text(30, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, NewDeskDetailsComponent_ng_container_0_section_33_Template, 5, 5, "section", 13)(34, NewDeskDetailsComponent_ng_container_0_section_34_Template, 2, 5, "section", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.desk.images == null ? null : ctx_r1.desk.images.length) ? 1 : 2);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("text-info-content", ctx_r1.fav)("!bg-info", ctx_r1.fav);
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r1.fav ? "material-symbols-rounded" : "material-symbols-outlined");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.desk.display_name || ctx_r1.desk.name || ctx_r1.desk.id, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 13, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 15, "BOOKINGS.DESK_COUNT_LONE"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.desk.display_name || ctx_r1.desk.name || ctx_r1.desk.id, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.desk.zone == null ? null : ctx_r1.desk.zone.display_name) || (ctx_r1.desk.zone == null ? null : ctx_r1.desk.zone.name));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.desk.features == null ? null : ctx_r1.desk.features.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hide_map);
  }
}
function NewDeskDetailsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "p", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.DESK_SELECT_MSG"), " ");
  }
}
var NewDeskDetailsComponent = class _NewDeskDetailsComponent {
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
    this.\u0275fac = function NewDeskDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskDetailsComponent, selectors: [["new-desk-details"]], inputs: { desk: "desk", fav: "fav", active: "active", hide_map: "hide_map" }, outputs: { close: "close", toggleFav: "toggleFav", activeChange: "activeChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 2, consts: [["emptyState", ""], [4, "ngIf", "ngIfElse"], [1, "relative", "h-40", "w-full"], [1, "h-10", "w-full", "lg:hidden"], ["icon", "", "matRipple", "", "name", "close-desk-details", 1, "absolute", "left-2", "top-2", "z-20", "bg-base-200", "text-base-content", "lg:hidden", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite-details", 1, "absolute", "right-2", "top-2", "z-20", "bg-base-200", 3, "click"], [3, "className"], [1, "space-y-2", "px-2", "pb-2", "pt-0"], ["actions", "", 1, "z-0", "p-2"], [1, "mb-2", "mt-4", "text-2xl", "font-medium"], ["details", "", 1, "relative", "space-y-2", "rounded", "border", "border-base-400", "px-3", "pb-2", "pt-4"], [1, "absolute", "left-2", "top-0", "-translate-y-1/2", "bg-base-100", "px-2", "text-lg", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["facilities", "", "class", "relative !mt-4 space-y-2 rounded border border-base-400 px-2 pb-1 pt-1", 4, "ngIf"], ["map", "", "class", "relative mx-auto h-64 w-full overflow-hidden rounded bg-base-200 sm:h-48", 4, "ngIf"], ["class", "absolute inset-0", 3, "images", 4, "ngIf"], [1, "absolute", "inset-0", 3, "images"], ["facilities", "", 1, "relative", "!mt-4", "space-y-2", "rounded", "border", "border-base-400", "px-2", "pb-1", "pt-1"], ["class", "flex flex-wrap items-center", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center"], ["for", "feat", 1, "m-1", "rounded-full", "border", "border-base-300", "px-4", "py-2", "text-sm", "capitalize"], ["map", "", 1, "relative", "mx-auto", "h-64", "w-full", "overflow-hidden", "rounded", "bg-base-200", "sm:h-48"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], ["empty", "", 1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "text-center", "opacity-30"]], template: function NewDeskDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NewDeskDetailsComponent_ng_container_0_Template, 35, 17, "ng-container", 1)(1, NewDeskDetailsComponent_ng_template_1_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const emptyState_r4 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.desk)("ngIfElse", emptyState_r4);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      TranslatePipe,
      IconComponent,
      InteractiveMapComponent,
      ImageCarouselComponent,
      MatRippleModule,
      MatRipple
    ], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=new-desk-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskDetailsComponent, { className: "NewDeskDetailsComponent", filePath: "libs/bookings/src/lib/new-desk-select-modal/new-desk-details.component.ts", lineNumber: 156 });
})();

// libs/bookings/src/lib/new-desk-select-modal/new-desk-filters-display.component.ts
var _c010 = () => [];
function NewDeskFiltersDisplayComponent_ng_container_5_Template(rf, ctx) {
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
function NewDeskFiltersDisplayComponent_ng_container_6_Template(rf, ctx) {
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
function NewDeskFiltersDisplayComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 7);
    \u0275\u0275listener("click", function NewDeskFiltersDisplayComponent_div_7_Template_button_click_3_listener() {
      const feat_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setFeature(feat_r3, false));
    });
    \u0275\u0275elementStart(4, "icon", 8);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r3);
  }
}
function NewDeskFiltersDisplayComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 10);
    \u0275\u0275listener("click", function NewDeskFiltersDisplayComponent_div_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setOptions({ show_fav: false }));
    });
    \u0275\u0275elementStart(5, "icon", 8);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.FAVOURITES_ONLY"));
  }
}
var NewDeskFiltersDisplayComponent = class _NewDeskFiltersDisplayComponent extends AsyncHandler {
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
  constructor(_state, _settings) {
    super();
    this._state = _state;
    this._settings = _settings;
    this.view = "list";
    this.viewChange = new EventEmitter();
    this.options = this._state.options;
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
  }
  static {
    this.\u0275fac = function NewDeskFiltersDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskFiltersDisplayComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFiltersDisplayComponent, selectors: [["new-desk-filters-display"]], inputs: { view: "view" }, outputs: { viewChange: "viewChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 13, consts: [["filters", "", 1, "sticky", "-top-1", "z-20", "-mx-1", "!mb-4", "flex", "w-[calc(100%+0.5rem)]", "flex-wrap", "items-center", "rounded", "border", "border-base-300", "bg-base-100", "p-1", "!pr-10", "sm:!pr-1"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], [4, "ngIf"], ["filter-item", "", "features", "", 4, "ngFor", "ngForOf"], ["filter-item", "", 4, "ngIf"], ["filter-item", "", "features", ""], ["icon", "", "matRipple", "", "name", "remove-desk-filter", 1, "-mr-4", 3, "click"], [1, "text-base"], ["filter-item", ""], ["icon", "", "matRipple", "", "name", "remove-desk-favs-filter", 1, "-mr-4", 3, "click"]], template: function NewDeskFiltersDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275template(5, NewDeskFiltersDisplayComponent_ng_container_5_Template, 4, 8, "ng-container", 3)(6, NewDeskFiltersDisplayComponent_ng_container_6_Template, 3, 3, "ng-container", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, NewDeskFiltersDisplayComponent_div_7_Template, 6, 1, "div", 4);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275template(9, NewDeskFiltersDisplayComponent_div_9_Template, 7, 3, "div", 5);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, ctx.start, "mediumDate"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ((tmp_3_0 = \u0275\u0275pipeBind1(8, 8, ctx.options)) == null ? null : tmp_3_0.features) || \u0275\u0275pureFunction0(12, _c010));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_4_0 = \u0275\u0275pipeBind1(10, 10, ctx.options)) == null ? null : tmp_4_0.show_fav);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, DatePipe, IconComponent, TranslatePipe, MatRippleModule, MatRipple], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n  background-color: var(--b1);\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=new-desk-filters-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFiltersDisplayComponent, { className: "NewDeskFiltersDisplayComponent", filePath: "libs/bookings/src/lib/new-desk-select-modal/new-desk-filters-display.component.ts", lineNumber: 84 });
})();

// libs/bookings/src/lib/new-desk-select-modal/new-desk-filters.component.ts
var _c011 = () => ({ standalone: true });
var _c17 = () => [];
function NewDeskFiltersComponent_label_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.LOCATION"), " ");
  }
}
function NewDeskFiltersComponent_mat_form_field_13_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r3 = ctx.$implicit;
    \u0275\u0275property("value", reg_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r3.display_name || reg_r3.name, " ");
  }
}
function NewDeskFiltersComponent_mat_form_field_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 15)(1, "mat-select", 16);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function NewDeskFiltersComponent_mat_form_field_13_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275template(3, NewDeskFiltersComponent_mat_form_field_13_mat_option_3_Template, 2, 2, "mat-option", 17);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(8, _c011))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 6, ctx_r1.regions));
  }
}
function NewDeskFiltersComponent_mat_form_field_15_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r5 = ctx.$implicit;
    \u0275\u0275property("value", bld_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r5.display_name || bld_r5.name, " ");
  }
}
function NewDeskFiltersComponent_mat_form_field_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 15)(1, "mat-select", 19);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function NewDeskFiltersComponent_mat_form_field_15_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275template(5, NewDeskFiltersComponent_mat_form_field_15_mat_option_5_Template, 2, 2, "mat-option", 17);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(2, 4, ctx_r1.building))("ngModelOptions", \u0275\u0275pureFunction0(12, _c011))("placeholder", ((tmp_3_0 = \u0275\u0275pipeBind1(3, 6, ctx_r1.building)) == null ? null : tmp_3_0.display_name) || ((tmp_3_0 = \u0275\u0275pipeBind1(4, 8, ctx_r1.building)) == null ? null : tmp_3_0.name));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 10, ctx_r1.buildings));
  }
}
function NewDeskFiltersComponent_mat_form_field_17_mat_option_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const lvl_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = \u0275\u0275pipeBind1(2, 1, lvl_r7.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function NewDeskFiltersComponent_mat_form_field_17_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18)(1, "div", 21);
    \u0275\u0275template(2, NewDeskFiltersComponent_mat_form_field_17_mat_option_4_div_2_Template, 5, 3, "div", 22);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r7.display_name || lvl_r7.name, " ");
  }
}
function NewDeskFiltersComponent_mat_form_field_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 15)(1, "mat-select", 20);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function NewDeskFiltersComponent_mat_form_field_17_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275template(4, NewDeskFiltersComponent_mat_form_field_17_mat_option_4_Template, 5, 3, "mat-option", 17);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(2, 4, ctx_r1.options)) == null ? null : tmp_1_0.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(10, _c011))("placeholder", \u0275\u0275pipeBind1(3, 6, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 8, ctx_r1.levels));
  }
}
function NewDeskFiltersComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-checkbox", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.ALL_DAY"), " ");
  }
}
function NewDeskFiltersComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 29);
    \u0275\u0275listener("ngModelChange", function NewDeskFiltersComponent_div_26_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 28)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-duration-field", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(16, _c011))("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("time", (tmp_7_0 = ctx_r1.form.get("date")) == null ? null : tmp_7_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
  }
}
function NewDeskFiltersComponent_section_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 31)(1, "h2", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "settings-toggle", 34);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function NewDeskFiltersComponent_section_27_Template_settings_toggle_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_fav: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.FAVOURITES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(6, 6, "COMMON.FAVOURITES_ONLY"))("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(7, 8, ctx_r1.options)) == null ? null : tmp_3_0.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(10, _c011));
  }
}
function NewDeskFiltersComponent_section_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "settings-toggle", 38);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function NewDeskFiltersComponent_section_28_div_4_Template_settings_toggle_ngModelChange_1_listener($event) {
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
    \u0275\u0275advance();
    \u0275\u0275property("name", feat_r11)("ngModel", (((tmp_4_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.options)) == null ? null : tmp_4_0.features) || \u0275\u0275pureFunction0(5, _c17)).includes(feat_r11))("ngModelOptions", \u0275\u0275pureFunction0(6, _c011));
  }
}
function NewDeskFiltersComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 35)(1, "h2", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, NewDeskFiltersComponent_section_28_div_4_Template, 3, 7, "div", 36);
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
var NewDeskFiltersComponent = class _NewDeskFiltersComponent {
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
  constructor(_state, _org, _settings) {
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
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setLevel = (l) => {
    };
    this.setRegion = (r) => this._org.region = r;
  }
  static {
    this.\u0275fac = function NewDeskFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskFiltersComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFiltersComponent, selectors: [["new-desk-filters"]], inputs: { hide_levels: "hide_levels" }, decls: 30, vars: 36, consts: [[1, "sticky", "top-0", "z-10", "flex", "items-center", "border-b", "border-base-300", "bg-base-100", "px-4", "py-4"], [1, "text-xl", "font-medium"], [1, "relative", "z-0", "w-full", "divide-y", "divide-base-200", "p-2", 3, "formGroup"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-[8rem]", "flex-1", "flex-col"], ["for", "location", 4, "ngIf"], ["appearance", "outline", "class", "w-full", 4, "ngIf"], [1, "flex-1"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "to", "timezone"], ["class", "-mt-2 mb-2 flex justify-end", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["favs", "", "class", "space-y-2 pb-4", 4, "ngIf"], ["class", "space-y-2", "features", "", 4, "ngIf"], ["for", "location"], ["appearance", "outline", 1, "w-full"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [1, "-mt-2", "mb-2", "flex", "justify-end"], ["formControlName", "all_day"], [1, "flex", "items-center", "space-x-2"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], ["formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr", "timezone"], ["favs", "", 1, "space-y-2", "pb-4"], [1, "mt-2", "text-lg", "font-medium"], [1, "flex", "w-full", "items-center"], [1, "w-full", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], ["features", "", 1, "space-y-2"], ["class", "flex flex-wrap items-center space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], [1, "w-full", "capitalize", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"]], template: function NewDeskFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "form", 2)(5, "section", 3)(6, "h2", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275template(10, NewDeskFiltersComponent_label_10_Template, 3, 3, "label", 6);
        \u0275\u0275pipe(11, "async");
        \u0275\u0275pipe(12, "async");
        \u0275\u0275template(13, NewDeskFiltersComponent_mat_form_field_13_Template, 5, 9, "mat-form-field", 7);
        \u0275\u0275pipe(14, "async");
        \u0275\u0275template(15, NewDeskFiltersComponent_mat_form_field_15_Template, 7, 13, "mat-form-field", 7);
        \u0275\u0275pipe(16, "async");
        \u0275\u0275template(17, NewDeskFiltersComponent_mat_form_field_17_Template, 6, 11, "mat-form-field", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 8)(19, "label");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "a-date-field", 9);
        \u0275\u0275listener("ngModelChange", function NewDeskFiltersComponent_Template_a_date_field_ngModelChange_22_listener($event) {
          return ctx.form.patchValue({ date: $event });
        });
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, NewDeskFiltersComponent_div_25_Template, 4, 3, "div", 10)(26, NewDeskFiltersComponent_div_26_Template, 11, 17, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, NewDeskFiltersComponent_section_27_Template, 8, 11, "section", 12)(28, NewDeskFiltersComponent_section_28_Template, 6, 6, "section", 13);
        \u0275\u0275pipe(29, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_16_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 17, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 19, "BOOKINGS.DETAILS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.hide_levels && !(ctx.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(11, 21, ctx.regions)) == null ? null : tmp_3_0.length)) && !(!ctx.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(12, 23, ctx.buildings)) == null ? null : tmp_3_0.length) > 1));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.use_region && ((tmp_4_0 = \u0275\u0275pipeBind1(14, 25, ctx.regions)) == null ? null : tmp_4_0.length));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.use_region && ((tmp_5_0 = \u0275\u0275pipeBind1(16, 27, ctx.buildings)) == null ? null : tmp_5_0.length) > 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.hide_levels);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 29, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(35, _c011))("to", ctx.end_date)("timezone", ctx.timezone);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 31, "FORM.DATE_ERROR"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.allow_all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.form.value.all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.hide_levels);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_16_0 = \u0275\u0275pipeBind1(29, 33, ctx.features)) == null ? null : tmp_16_0.length) && !ctx.hide_levels);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      TranslatePipe,
      MatRippleModule,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatCheckboxModule,
      MatCheckbox,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFiltersComponent, { className: "NewDeskFiltersComponent", filePath: "libs/bookings/src/lib/new-desk-select-modal/new-desk-filters.component.ts", lineNumber: 235 });
})();

// libs/bookings/src/lib/new-desk-select-modal/new-desk-list.component.ts
var _c012 = (a0) => ({ count: a0 });
function NewDeskListComponent_ng_container_8_ul_1_li_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function NewDeskListComponent_ng_container_8_ul_1_li_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const desk_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", desk_r2.images[0]);
  }
}
function NewDeskListComponent_ng_container_8_ul_1_li_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 24);
  }
}
function NewDeskListComponent_ng_container_8_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10)(1, "button", 11);
    \u0275\u0275listener("click", function NewDeskListComponent_ng_container_8_ul_1_li_1_Template_button_click_1_listener() {
      const desk_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectDesk(desk_r2));
    });
    \u0275\u0275elementStart(2, "div", 12);
    \u0275\u0275template(3, NewDeskListComponent_ng_container_8_ul_1_li_1_div_3_Template, 3, 0, "div", 13)(4, NewDeskListComponent_ng_container_8_ul_1_li_1_img_4_Template, 1, 1, "img", 14)(5, NewDeskListComponent_ng_container_8_ul_1_li_1_ng_template_5_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15)(8, "span", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 17)(11, "icon", 18);
    \u0275\u0275text(12, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 19);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "button", 20);
    \u0275\u0275listener("click", function NewDeskListComponent_ng_container_8_ul_1_li_1_Template_button_click_15_listener() {
      const desk_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(desk_r2));
    });
    \u0275\u0275elementStart(16, "icon", 21);
    \u0275\u0275text(17, "favorite");
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
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.isFavourite(desk_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
function NewDeskListComponent_ng_container_8_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275template(1, NewDeskListComponent_ng_container_8_ul_1_li_1_Template, 18, 10, "li", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "li", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 2, ctx_r2.desks));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "COMMON.END_OF_LIST"), " ");
  }
}
function NewDeskListComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NewDeskListComponent_ng_container_8_ul_1_Template, 6, 6, "ul", 6);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    const empty_state_r5 = \u0275\u0275reference(13);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(2, 2, ctx_r2.desks)) == null ? null : tmp_3_0.length)("ngIfElse", empty_state_r5);
  }
}
function NewDeskListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "mat-spinner", 26);
    \u0275\u0275elementStart(2, "p", 27);
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
function NewDeskListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "p", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.DESK_LIST_EMPTY"), " ");
  }
}
var NewDeskListComponent = class _NewDeskListComponent {
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
    ]).pipe(map(([{ show_fav }, _]) => _.filter((i) => !show_fav || this.isFavourite(i.id)).sort((a, b) => {
      const a_fav = this.isFavourite(a.id) ? 1 : 0;
      const b_fav = this.isFavourite(b.id) ? 1 : 0;
      return b_fav - a_fav;
    })));
    this.loading = this._state.loading;
  }
  isFavourite(desk_id) {
    return this.favorites.includes(desk_id);
  }
  selectDesk(desk) {
    this.onSelect.emit(desk);
  }
  static {
    this.\u0275fac = function NewDeskListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskListComponent)(\u0275\u0275directiveInject(BookingFormService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskListComponent, selectors: [["new-desk-list"]], inputs: { active: "active", selected: "selected", favorites: "favorites" }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 14, vars: 18, consts: [["load_state", ""], ["empty_state", ""], ["placeholder", ""], [1, "px-2", "font-bold"], ["count", "", 1, "mb-4", "px-2", "text-sm", "opacity-60"], [4, "ngIf", "ngIfElse"], ["class", "list-style-none space-y-2", 4, "ngIf", "ngIfElse"], [1, "list-style-none", "space-y-2"], ["desk", "", "class", "relative w-full overflow-hidden rounded-lg border border-base-200 bg-base-100 shadow", 3, "!border-info", 4, "ngFor", "ngForOf"], [1, "rounded", "bg-base-400", "p-2", "text-center", "text-sm", "opacity-30"], ["desk", "", 1, "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "border-base-200", "bg-base-100", "shadow"], ["name", "select-desk", "matRipple", "", 1, "flex", "h-full", "w-full", "p-2", 3, "click"], [1, "relative", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-xl", "bg-base-200"], ["class", "absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-neutral bg-base-200 text-white", 4, "ngIf"], ["auth", "", "class", "h-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "flex-1", "space-y-2", "pt-2", "text-left"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], [1, "text-xs"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite", 1, "absolute", "right-1", "top-1", 3, "click"], [3, "className"], [1, "absolute", "left-1", "top-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "border-neutral", "bg-base-200", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [3, "diameter"], [1, "opacity-30"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "text-center", "opacity-30"]], template: function NewDeskListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3", 3);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, NewDeskListComponent_ng_container_8_Template, 3, 4, "ng-container", 5);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275template(10, NewDeskListComponent_ng_template_10_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, NewDeskListComponent_ng_template_12_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        const load_state_r6 = \u0275\u0275reference(11);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "COMMON.RESULTS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(7, 10, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(16, _c012, ((tmp_3_0 = \u0275\u0275pipeBind1(5, 6, ctx.desks)) == null ? null : tmp_3_0.length) || 0), ((tmp_3_0 = \u0275\u0275pipeBind1(6, 8, ctx.desks)) == null ? null : tmp_3_0.length) || 0), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !((tmp_4_0 = \u0275\u0275pipeBind1(9, 14, ctx.loading)) == null ? null : tmp_4_0.length))("ngIfElse", load_state_r6);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      TranslatePipe,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      AuthenticatedImageDirective
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskListComponent, { className: "NewDeskListComponent", filePath: "libs/bookings/src/lib/new-desk-select-modal/new-desk-list.component.ts", lineNumber: 136 });
})();

// libs/bookings/src/lib/new-desk-select-modal/new-desk-map.component.ts
var _c013 = () => ({ controls: true });
var _c18 = () => ({ standalone: true });
function NewDeskMapComponent_mat_form_field_1_mat_option_3_div_2_Template(rf, ctx) {
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
function NewDeskMapComponent_mat_form_field_1_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7)(1, "div", 8);
    \u0275\u0275template(2, NewDeskMapComponent_mat_form_field_1_mat_option_3_div_2_Template, 5, 3, "div", 9);
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
function NewDeskMapComponent_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 4)(1, "mat-select", 5);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function NewDeskMapComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NewDeskMapComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_ids: [$event.id] }));
    });
    \u0275\u0275template(3, NewDeskMapComponent_mat_form_field_1_mat_option_3_Template, 5, 3, "mat-option", 6);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.level);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c18))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 6, ctx_r1.levels));
  }
}
var NewDeskMapComponent = class _NewDeskMapComponent extends AsyncHandler {
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
      if (!this.level && viewable_levels.length) {
        this.level = viewable_levels[0];
      }
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
    this.\u0275fac = function NewDeskMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskMapComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskMapComponent, selectors: [["new-desk-map"]], inputs: { is_displayed: "is_displayed", active: "active" }, outputs: { onSelect: "onSelect" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 8, vars: 17, consts: [[1, "w-full", "border-b", "border-base-200", "bg-base-100", "p-2"], ["levels", "", "appearance", "outline", "class", "no-subscript w-full", 4, "ngIf"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["levels", "", "appearance", "outline", 1, "no-subscript", "w-full"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function NewDeskMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, NewDeskMapComponent_mat_form_field_1_Template, 5, 9, "mat-form-field", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "interactive-map", 3);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "async");
        \u0275\u0275twoWayListener("zoomChange", function NewDeskMapComponent_Template_interactive_map_zoomChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
          return $event;
        })("centerChange", function NewDeskMapComponent_Template_interactive_map_centerChange_4_listener($event) {
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
        \u0275\u0275property("styles", \u0275\u0275pipeBind1(5, 10, ctx.styles))("features", \u0275\u0275pipeBind1(6, 12, ctx.features))("actions", \u0275\u0275pipeBind1(7, 14, ctx.actions))("options", \u0275\u0275pureFunction0(16, _c013));
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      InteractiveMapComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      TranslatePipe,
      FormsModule,
      NgControlStatus,
      NgModel
    ], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n/*# sourceMappingURL=new-desk-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskMapComponent, { className: "NewDeskMapComponent", filePath: "libs/bookings/src/lib/new-desk-select-modal/new-desk-map.component.ts", lineNumber: 94 });
})();

// libs/bookings/src/lib/new-desk-select-modal/new-desk-select-modal.component.ts
function NewDeskSelectModalComponent_new_desk_filters_display_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-desk-filters-display", 25);
    \u0275\u0275twoWayListener("viewChange", function NewDeskSelectModalComponent_new_desk_filters_display_21_Template_new_desk_filters_display_viewChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.view, $event) || (ctx_r2.view = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("view", ctx_r2.view);
  }
}
function NewDeskSelectModalComponent_new_desk_list_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-desk-list", 26);
    \u0275\u0275listener("toggleFav", function NewDeskSelectModalComponent_new_desk_list_22_Template_new_desk_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFavourite($event));
    })("onSelect", function NewDeskSelectModalComponent_new_desk_list_22_Template_new_desk_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r4);
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
function NewDeskSelectModalComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function NewDeskSelectModalComponent_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_filters = !ctx_r2.show_filters);
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.show_filters ? "close" : "filter_list");
  }
}
function NewDeskSelectModalComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-desk-map", 28);
    \u0275\u0275listener("onSelect", function NewDeskSelectModalComponent_ng_template_41_Template_new_desk_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r6);
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
var FAV_DESK_KEY2 = "favourite_desks";
var NewDeskSelectModalComponent = class _NewDeskSelectModalComponent {
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get favorites() {
    return this._settings.get(FAV_DESK_KEY2) || [];
  }
  constructor(_data, _settings, _dialog_ref) {
    this._data = _data;
    this._settings = _settings;
    this._dialog_ref = _dialog_ref;
    this.selected = [];
    this.displayed = null;
    this.view = "list";
    this.show_filters = false;
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
      this._settings.saveUserSetting(FAV_DESK_KEY2, [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_DESK_KEY2, fav_list.filter((_) => _ !== item.id));
    }
  }
  static {
    this.\u0275fac = function NewDeskSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskSelectModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskSelectModalComponent, selectors: [["new-desk-select-modal"]], decls: 43, vars: 57, consts: [["map_view", ""], [1, "flex", "h-screen", "w-screen", "flex-col", "space-y-2", "overflow-hidden", "bg-base-100", "p-2", "sm:h-auto", "sm:w-auto"], [1, "flex", "h-14", "w-full", "items-center", "space-x-2", "rounded", "border-none", "bg-base-200", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], [1, "flex", "divide-x", "divide-secondary", "rounded", "border", "border-secondary"], ["icon", "", "matRipple", "", 1, "rounded-l", "rounded-r-none", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "rounded-l-none", "rounded-r", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "h-1/2", "flex-1", "sm:h-[65vh]", "sm:flex-none", "sm:space-x-2"], [1, "h-full", "w-full", "overflow-y-auto", "overflow-x-hidden", "rounded", "border", "border-base-300", "shadow", "sm:block", "sm:w-[20rem]"], [3, "hide_levels"], [1, "h-full", "w-full", "overflow-auto", "rounded", "border", "border-base-300", "bg-base-200", "sm:w-[20rem]", "lg:block"], [3, "view", "viewChange", 4, "ngIf"], [3, "active", "selected", "favorites", "toggleFav", "onSelect", 4, "ngIf", "ngIfElse"], [1, "h-full", "w-full", "overflow-auto", "rounded", "border", "border-base-300", "shadow", "sm:w-[20rem]", "lg:block"], [3, "activeChange", "toggleFav", "close", "desk", "active", "hide_map", "fav"], ["icon", "", "matRipple", "", "class", "absolute right-2 top-3 z-20 border border-base-200 bg-base-100 sm:hidden", 3, "click", 4, "ngIf"], [1, "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded", "border-none", "bg-base-200", "p-2"], ["btn", "", "matRipple", "", "name", "desk-return", 1, "inverse", "bg-base-100", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", "name", "toggle-desk", 3, "click", "disabled"], [1, "flex", "items-center"], [1, "mr-1"], [3, "viewChange", "view"], [3, "toggleFav", "onSelect", "active", "selected", "favorites"], ["icon", "", "matRipple", "", 1, "absolute", "right-2", "top-3", "z-20", "border", "border-base-200", "bg-base-100", "sm:hidden", 3, "click"], [1, "h-full", "w-full", 3, "onSelect", "is_displayed", "active"]], template: function NewDeskSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "h2", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("click", function NewDeskSelectModalComponent_Template_button_click_6_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.view = "list");
        });
        \u0275\u0275elementStart(8, "icon");
        \u0275\u0275text(9, "list");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "button", 6);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275listener("click", function NewDeskSelectModalComponent_Template_button_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.view = "map");
        });
        \u0275\u0275elementStart(12, "icon");
        \u0275\u0275text(13, "map");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "button", 7)(15, "icon");
        \u0275\u0275text(16, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "main", 8)(18, "div", 9);
        \u0275\u0275element(19, "new-desk-filters", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 11);
        \u0275\u0275template(21, NewDeskSelectModalComponent_new_desk_filters_display_21_Template, 1, 1, "new-desk-filters-display", 12)(22, NewDeskSelectModalComponent_new_desk_list_22_Template, 1, 3, "new-desk-list", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 14)(24, "new-desk-details", 15);
        \u0275\u0275listener("activeChange", function NewDeskSelectModalComponent_Template_new_desk_details_activeChange_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSelected(ctx.displayed, $event));
        })("toggleFav", function NewDeskSelectModalComponent_Template_new_desk_details_toggleFav_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleFavourite(ctx.displayed));
        })("close", function NewDeskSelectModalComponent_Template_new_desk_details_close_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.displayed = null);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, NewDeskSelectModalComponent_button_25_Template, 3, 1, "button", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "footer", 17)(27, "button", 18)(28, "div", 19)(29, "icon", 20);
        \u0275\u0275text(30, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 21);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "button", 22);
        \u0275\u0275listener("click", function NewDeskSelectModalComponent_Template_button_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id)));
        });
        \u0275\u0275elementStart(35, "div", 23)(36, "icon", 20);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 24);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(41, NewDeskSelectModalComponent_ng_template_41_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const map_view_r7 = \u0275\u0275reference(42);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 47, "BOOKINGS.DESK_FIND"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("bg-base-100", ctx.view !== "list")("bg-secondary", ctx.view === "list")("text-secondary-content", ctx.view === "list");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 49, "COMMON.LIST"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("bg-base-100", ctx.view !== "map")("bg-secondary", ctx.view === "map")("text-secondary-content", ctx.view === "map");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 51, "COMMON.MAP"));
        \u0275\u0275advance(8);
        \u0275\u0275classProp("hidden", !ctx.show_filters);
        \u0275\u0275advance();
        \u0275\u0275property("hide_levels", ctx.view !== "list");
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.show_filters || ctx.displayed)("sm:hidden", ctx.displayed)("md:block", !ctx.displayed)("p-2", ctx.view === "list");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "list");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "list")("ngIfElse", map_view_r7);
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.show_filters || !ctx.displayed)("sm:hidden", !ctx.displayed)("md:block", ctx.displayed);
        \u0275\u0275advance();
        \u0275\u0275property("desk", ctx.displayed)("active", ctx.selected_ids.includes(ctx.displayed == null ? null : ctx.displayed.id))("hide_map", ctx.view === "map")("fav", ctx.displayed && ctx.favorites.includes(ctx.displayed == null ? null : ctx.displayed.id));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.displayed);
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", ctx.selected);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 53, "COMMON.BACK_TO_FORM"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
        \u0275\u0275property("disabled", !ctx.displayed);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 55, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatTooltipModule,
      MatTooltip,
      NewDeskListComponent,
      NewDeskDetailsComponent,
      NewDeskFiltersComponent,
      NewDeskMapComponent,
      NewDeskFiltersDisplayComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskSelectModalComponent, { className: "NewDeskSelectModalComponent", filePath: "libs/bookings/src/lib/new-desk-select-modal/new-desk-select-modal.component.ts", lineNumber: 193 });
})();

// libs/bookings/src/lib/desk-list-field.component.ts
var _c014 = () => [];
var _c19 = () => ({ standalone: true });
function DeskListFieldComponent_div_1_div_1_mat_checkbox_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 25);
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
    \u0275\u0275property("ngModel", (ctx_r3.selected_features || \u0275\u0275pureFunction0(3, _c014)).includes(opt_r3))("ngModelOptions", \u0275\u0275pureFunction0(4, _c19));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3, " ");
  }
}
function DeskListFieldComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "label", 22);
    \u0275\u0275text(2, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275template(4, DeskListFieldComponent_div_1_div_1_mat_checkbox_4_Template, 2, 5, "mat-checkbox", 24);
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
    \u0275\u0275element(0, "img", 26);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r5.images[0]);
  }
}
function DeskListFieldComponent_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
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
    \u0275\u0275elementStart(9, "div", 13)(10, "icon", 14);
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
    \u0275\u0275elementStart(16, "div", 17)(17, "icon");
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
    \u0275\u0275elementStart(22, "div", 17)(23, "icon");
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
    \u0275\u0275elementStart(28, "icon", 20);
    \u0275\u0275text(29, "favorite");
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
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r3.favorites.includes(item_r5 == null ? null : item_r5.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
var EMPTY_FAVS = [];
var DeskListFieldComponent = class _DeskListFieldComponent {
  get favorites() {
    return this._settings.get(FAV_DESK_KEY) || EMPTY_FAVS;
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
    const ref = this._dialog.open(NewDeskSelectModalComponent, {
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskListFieldComponent, selectors: [["desk-list-field"]], inputs: { features: "features" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DeskListFieldComponent),
        multi: true
      }
    ])], decls: 11, vars: 4, consts: [["placeholder", ""], ["list", "", 1, "space-y-2"], ["desk", "", "class", "relative flex w-full items-center rounded-lg border border-base-200 p-2 shadow", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "name", "add-desk", 1, "inverse", "mt-2", "w-full", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "mb-2", "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1", "space-y-2"], ["desk", "", 1, "relative", "flex", "w-full", "items-center", "rounded-lg", "border", "border-base-200", "p-2", "shadow"], ["class", "flex flex-col", 4, "ngIf"], [1, "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "bg-base-200"], ["auth", "", "class", "min-h-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "pb-4"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-blue-500"], [1, "absolute", "bottom-0", "right-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "name", "edit-desk", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "name", "remove-desk", 1, "clear", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-desk-favourite", 1, "absolute", "right-1", "top-1", 3, "click"], [3, "className"], [1, "flex", "flex-col"], ["for", "title"], ["features", "", 1, "flex", "flex-wrap", "items-center", "space-x-2"], [3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["auth", "", 1, "min-h-full", "object-cover", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"]], template: function DeskListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, DeskListFieldComponent_div_1_Template, 30, 14, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "button", 3);
        \u0275\u0275listener("click", function DeskListFieldComponent_Template_button_click_2_listener() {
          return ctx.changeResources();
        });
        \u0275\u0275elementStart(3, "div", 4)(4, "icon");
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
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatRipple,
      MatCheckboxModule,
      MatCheckbox
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskListFieldComponent, { className: "DeskListFieldComponent", filePath: "libs/bookings/src/lib/desk-list-field.component.ts", lineNumber: 143 });
})();

// libs/bookings/src/lib/invite-visitor-form.component.ts
var _c015 = () => ({ standalone: true });
var _c110 = (a0, a1) => ({ name: a0, count: a1 });
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
    \u0275\u0275property("ngModel", ctx_r3.form.value.zones[0])("ngModelOptions", \u0275\u0275pureFunction0(8, _c015));
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 17, "FORM.DATE"), "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 19, "FORM.TIME_START"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r3.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(27, _c015))("disabled", ctx_r3.form.value.all_day)("use_24hr", ctx_r3.use_24hr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 21, "FORM.TIME_END"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r3.form.value.date)("max", ctx_r3.max_duration)("use_24hr", ctx_r3.use_24hr);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.can_book_for_others);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.multiple)("ngIfElse", multi_state_r13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 23, "BOOKINGS.VISITOR_REASON"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(32, 25, "BOOKINGS.VISITOR_REASON_PLACEHOLDER"));
  }
}
function InviteVisitorFormComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "h2", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, InviteVisitorFormComponent_ng_container_0_div_1_form_5_Template, 33, 28, "form", 10);
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
    \u0275\u0275elementStart(15, "icon", 58);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, ctx_r3.multiple ? "BOOKINGS.VISITOR_SENT_MULTIPLE" : "BOOKINGS.VISITOR_SENT_SINGLE", \u0275\u0275pureFunction2(21, _c110, (ctx_r3.last_success == null ? null : ctx_r3.last_success.asset_name) || (ctx_r3.last_success == null ? null : ctx_r3.last_success.asset_id), ctx_r3.last_count || 1)), " ");
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
  get max_duration() {
    return this._settings.get("app.visitors.max_duration") || this._settings.get("app.bookings.max_duration") || 4 * 60;
  }
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
  filterVisitors(filter) {
    const s = (filter || "").toLowerCase();
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
      if (this.last_success)
        this._generateLinks();
      yield this.initFormZone();
      this.sent = true;
    });
  }
  initFormZone() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this._service.loadForm();
      this._service.setOptions({ type: "visitor" });
      if (!this.form.value.id)
        this._service.newForm("visitor");
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
  _generateLinks() {
    const event = __spreadProps(__spreadValues({}, this.last_success), {
      host: this.last_success.user_email,
      organiser: {
        name: this.last_success.user_name,
        email: this.last_success.user_email
      },
      attendees: this.last_success.attendees.map((_) => _.email),
      body: this.last_success.description,
      location: this._org.building.display_name || this._org.building.name
    });
    event.attendees.push(this.last_success.asset_id);
    console.log("Event:", event);
    this.outlook_link = generateMicrosoftCalendarLink(event);
    this.google_link = generateGoogleCalendarLink(event);
    this.ical_link = generateCalendarFileLink(event);
  }
  static {
    this.\u0275fac = function InviteVisitorFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InviteVisitorFormComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InviteVisitorFormComponent, selectors: [["invite-visitor-form"]], inputs: { date: "date" }, outputs: { done: "done" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 7, vars: 2, consts: [["send_state", ""], ["load_state", ""], ["multi_state", ""], ["name_auto", "matAutocomplete"], ["email_auto", "matAutocomplete"], [4, "ngIf", "ngIfElse"], ["class", "relative flex max-h-full flex-col overflow-auto bg-base-100", 4, "ngIf", "ngIfElse"], [1, "relative", "flex", "max-h-full", "flex-col", "overflow-auto", "bg-base-100"], [1, "w-full", "border-b", "border-base-200", "px-4", "py-4", "sm:px-16"], [1, "text-2xl", "font-medium"], ["class", "px-4 py-4 sm:px-16", 3, "formGroup", 4, "ngIf"], [1, "sticky", "bottom-0", "border-t", "border-base-200", "bg-base-100", "px-4", "py-4", "sm:px-16"], ["btn", "", "matRipple", "", "send", "", 1, "w-full", "sm:w-auto", 3, "click"], [1, "px-4", "py-4", "sm:px-16", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "date"], ["name", "date", "formControlName", "date"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "w-1/3", "flex-1", "flex-col"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "use_24hr"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "use_24hr"], ["class", "flex w-full flex-col", 4, "ngIf"], ["for", "reason"], ["appearance", "outline"], ["name", "reason", "matInput", "", "formControlName", "title", 3, "placeholder"], ["for", "building"], ["name", "building", "placeholder", "Select building", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "w-full", "flex-col"], ["for", "host"], ["name", "host", "formControlName", "user", 1, "mb-4"], ["for", "visitor-name"], ["matInput", "", "name", "visitor-name", "formControlName", "asset_name", 3, "focus", "placeholder", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["for", "visitor-email"], ["matInput", "", "name", "visitor-email", "type", "email", "formControlName", "asset_id", 3, "focus", "placeholder", "matAutocomplete"], ["matInput", "", "name", "company", "formControlName", "company", 3, "placeholder"], [3, "click", "value"], [1, "flex", "flex-col", "leading-tight"], [1, "text-xs", "opacity-60"], ["sent", "", 1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "bg-base-100", "text-center"], [1, "z-0", "m-8", "h-1/2", "w-full", "max-w-[32rem]", "flex-1", "space-y-2", "overflow-auto"], [1, "text-3xl"], ["src", "assets/icons/sent.svg", 1, "mx-auto"], ["class", "relative flex flex-col items-center space-y-4 p-4", 4, "ngIf"], [1, "z-10", "w-full", "border-t", "border-base-200", "bg-base-100", "p-2"], [1, "mx-auto", "flex", "w-full", "max-w-[32rem]", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], ["btn", "", "matRipple", "", "name", "desk-outlook-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-google-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/gcal.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-ical-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded", "p-2", "pr-4", 3, "href"], [1, "text-xl"], ["loading", "", 1, "relative", "flex", "h-full", "min-h-[18rem]", "w-full", "flex-col", "items-center", "justify-center", "overflow-hidden", "rounded"], [3, "diameter"], [1, "flex", "flex-col", 3, "formGroup"], ["formControlName", "assets", 3, "guests_only"]], template: function InviteVisitorFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, InviteVisitorFormComponent_ng_container_0_Template, 3, 4, "ng-container", 5)(1, InviteVisitorFormComponent_ng_template_1_Template, 20, 28, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, InviteVisitorFormComponent_ng_template_3_Template, 5, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, InviteVisitorFormComponent_ng_template_5_Template, 7, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const send_state_r16 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", !ctx.sent)("ngIfElse", send_state_r16);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      DatePipe,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatRipple,
      UserListFieldComponent,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      UserSearchFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatSelectModule,
      MatSelect,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      FormsModule,
      NgModel,
      SanitizePipe,
      SafePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteVisitorFormComponent, { className: "InviteVisitorFormComponent", filePath: "libs/bookings/src/lib/invite-visitor-form.component.ts", lineNumber: 424 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-bank-list.component.ts
var _c016 = (a0) => ({ count: a0 });
var _c111 = (a0, a1) => ({ count: a0, total: a1 });
function LockerBankListComponent_ng_container_7_ul_1_li_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "icon");
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
    \u0275\u0275elementStart(10, "div", 16)(11, "icon", 17);
    \u0275\u0275text(12, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 18);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "level");
    \u0275\u0275pipe(16, "level");
    \u0275\u0275pipe(17, "level");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 16)(19, "icon", 17);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 15, "COMMON.AVAILABLE_COUNT", \u0275\u0275pureFunction2(18, _c111, locker_bank_r2.available || 0, locker_bank_r2.lockers.length || 1)), " ");
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
      return banks.filter((i) => (!show_fav || this.isFavourite(i.id)) && (!show_accessible || i.lockers.find((_) => _.accessible)) && resources.find((_) => _.bank_id === i.id)).map((bank) => {
        const locker_list = bank.lockers.map((_) => __spreadProps(__spreadValues({}, _), {
          available: !!resources.find((lkr) => lkr.id === _.id) && (!show_accessible || _.accessible),
          map_id: bank.map_id || bank.id,
          zone: bank.zone,
          zones: bank.zones
        }));
        return __spreadProps(__spreadValues({}, bank), {
          available: locker_list.reduce((c, l) => c + (l.available ? 1 : 0), 0),
          lockers: locker_list
        });
      });
    }));
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerBankListComponent, selectors: [["locker-bank-list"]], inputs: { active: "active", selected: "selected", favorites: "favorites" }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 13, vars: 15, consts: [["load_state", ""], ["empty_state", ""], ["placeholder", ""], [1, "font-bold"], ["count", "", 1, "mb-4", "text-sm", "opacity-60"], [4, "ngIf", "ngIfElse"], ["class", "list-style-none space-y-2 overflow-hidden", 4, "ngIf", "ngIfElse"], [1, "list-style-none", "space-y-2", "overflow-hidden"], ["locker_bank", "", "class", "relative w-full overflow-hidden rounded-lg border border-base-200 bg-base-100 shadow", 3, "!border-blue-400", 4, "ngFor", "ngForOf"], ["locker_bank", "", 1, "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "border-base-200", "bg-base-100", "shadow"], ["name", "select-locker_bank", "matRipple", "", 1, "flex", "h-full", "w-full", "p-2", 3, "click"], [1, "relative", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-xl", "bg-base-200"], ["class", "absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-neutral bg-base-200 text-white", 4, "ngIf"], ["auth", "", "class", "h-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "flex-1", "space-y-2", "pt-2", "text-left"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-blue-500"], [1, "text-xs"], ["class", "absolute bottom-2 right-2 rounded bg-base-200 px-2 py-1 font-mono text-xs", 4, "ngIf"], [1, "absolute", "left-1", "top-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "border-neutral", "bg-base-200", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/locker-placeholder.svg", 1, "m-auto"], [1, "absolute", "bottom-2", "right-2", "rounded", "bg-base-200", "px-2", "py-1", "font-mono", "text-xs"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [3, "diameter"], [1, "opacity-30"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "text-center", "opacity-30"]], template: function LockerBankListComponent_Template(rf, ctx) {
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
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 8, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(13, _c016, ((tmp_3_0 = \u0275\u0275pipeBind1(5, 6, ctx.locker_banks)) == null ? null : tmp_3_0.length) || 0)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !((tmp_4_0 = \u0275\u0275pipeBind1(8, 11, ctx.loading)) == null ? null : tmp_4_0.length))("ngIfElse", load_state_r6);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      AuthenticatedImageDirective,
      LevelPipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  background: rgba(0, 0, 0, 0.05);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=locker-bank-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerBankListComponent, { className: "LockerBankListComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-bank-list.component.ts", lineNumber: 175 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-filters.component.ts
var _c017 = () => ({ standalone: true });
var _c112 = () => [];
function LockerFiltersComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function LockerFiltersComponent_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "keyboard_arrow_left");
    \u0275\u0275elementEnd()();
  }
}
function LockerFiltersComponent_div_12_mat_form_field_4_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
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
    \u0275\u0275elementStart(0, "mat-form-field", 20)(1, "mat-select", 21);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_div_12_mat_form_field_4_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275template(3, LockerFiltersComponent_div_12_mat_form_field_4_mat_option_3_Template, 2, 2, "mat-option", 22);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(8, _c017))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 6, ctx_r1.regions));
  }
}
function LockerFiltersComponent_div_12_mat_form_field_6_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
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
    \u0275\u0275elementStart(0, "mat-form-field", 20)(1, "mat-select", 24);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_div_12_mat_form_field_6_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275template(5, LockerFiltersComponent_div_12_mat_form_field_6_mat_option_5_Template, 2, 2, "mat-option", 22);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(2, 4, ctx_r1.building))("ngModelOptions", \u0275\u0275pureFunction0(12, _c017))("placeholder", ((tmp_4_0 = \u0275\u0275pipeBind1(3, 6, ctx_r1.building)) == null ? null : tmp_4_0.display_name) || ((tmp_4_0 = \u0275\u0275pipeBind1(4, 8, ctx_r1.building)) == null ? null : tmp_4_0.name));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 10, ctx_r1.buildings));
  }
}
function LockerFiltersComponent_div_12_mat_form_field_8_mat_option_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 29);
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
    \u0275\u0275elementStart(0, "mat-option", 23)(1, "div", 26);
    \u0275\u0275template(2, LockerFiltersComponent_div_12_mat_form_field_8_mat_option_4_div_2_Template, 5, 3, "div", 27);
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
    \u0275\u0275elementStart(0, "mat-form-field", 20)(1, "mat-select", 25);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_div_12_mat_form_field_8_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275template(4, LockerFiltersComponent_div_12_mat_form_field_8_mat_option_4_Template, 5, 3, "mat-option", 22);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(2, 4, ctx_r1.options)) == null ? null : tmp_2_0.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(10, _c017))("placeholder", \u0275\u0275pipeBind1(3, 6, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 8, ctx_r1.levels));
  }
}
function LockerFiltersComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LockerFiltersComponent_div_12_mat_form_field_4_Template, 5, 9, "mat-form-field", 19);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275template(6, LockerFiltersComponent_div_12_mat_form_field_6_Template, 7, 13, "mat-form-field", 19);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, LockerFiltersComponent_div_12_mat_form_field_8_Template, 6, 11, "mat-form-field", 19);
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
    \u0275\u0275elementStart(0, "div", 30)(1, "mat-checkbox", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.ALL_DAY"), " ");
  }
}
function LockerFiltersComponent_div_23_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-duration-field", 36);
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_div_23_div_6_Template_a_duration_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ duration: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.duration)("ngModelOptions", \u0275\u0275pureFunction0(10, _c017))("time", (tmp_5_0 = ctx_r1.form.get("date")) == null ? null : tmp_5_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr);
  }
}
function LockerFiltersComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 34);
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_div_23_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, LockerFiltersComponent_div_23_div_6_Template, 5, 11, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(8, _c017))("use_24hr", ctx_r1.use_24hr)("disabled", ctx_r1.disable_start);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hide_end);
  }
}
function LockerFiltersComponent_section_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 37)(1, "settings-toggle", 38);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_section_24_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_accessible: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 3, "BOOKINGS.LOCKER_ACCESSIBLE_SHOW"))("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(3, 5, ctx_r1.options)) == null ? null : tmp_2_0.show_accessible)("ngModelOptions", \u0275\u0275pureFunction0(7, _c017));
  }
}
function LockerFiltersComponent_section_25_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "settings-toggle", 43);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function LockerFiltersComponent_section_25_div_4_Template_settings_toggle_ngModelChange_1_listener($event) {
      const feat_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r13, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const feat_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", feat_r13)("ngModel", (((tmp_4_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.options)) == null ? null : tmp_4_0.features) || \u0275\u0275pureFunction0(5, _c112)).includes(feat_r13))("ngModelOptions", \u0275\u0275pureFunction0(6, _c017));
  }
}
function LockerFiltersComponent_section_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 39)(1, "h2", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LockerFiltersComponent_section_25_div_4_Template, 3, 7, "div", 41);
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
function LockerFiltersComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "button", 45);
    \u0275\u0275listener("click", function LockerFiltersComponent_div_27_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
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
var LockerFiltersComponent = class _LockerFiltersComponent extends AsyncHandler {
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
  get disable_date() {
    return this._settings.get("app.lockers.disabled_date_select");
  }
  get disable_start() {
    return this._settings.get("app.lockers.disabled_start_time");
  }
  get hide_end() {
    return this._settings.get("app.lockers.hide_end_time");
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
    super();
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
  ngOnInit() {
    this.subscription("bld", combineLatest([
      this._org.active_building,
      this.form.controls.duration.valueChanges
    ]).subscribe(() => {
      this.timeout("disable", () => {
        if (this.disable_date) {
          this.form.controls.date.disable();
        }
      }, 50);
    }));
    this.timeout("disable", () => {
      if (this.disable_date) {
        this.form.controls.date.disable();
      }
    }, 50);
  }
  static {
    this.\u0275fac = function LockerFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerFiltersComponent)(\u0275\u0275directiveInject(MatBottomSheetRef, 8), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerFiltersComponent, selectors: [["locker-filters"]], inputs: { hide_levels: "hide_levels" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 28, vars: 27, consts: [[1, "flex", "items-center", "rounded-t-md", "border-b", "border-base-200", "pb-2", "sm:hidden"], [1, "flex-1", "pl-2"], ["icon", "", "matRipple", "", "name", "close-locker-filters", "class", "sm:hidden", 3, "click", 4, "ngIf"], [1, "flex-2", "text-center", "font-medium"], [1, "flex-1"], [1, "max-h-[65vh]", "w-full", "divide-y", "divide-base-200", "overflow-y-auto", "overflow-x-hidden", "p-2", 3, "formGroup"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], ["class", "flex min-w-[8rem] flex-1 flex-col", 4, "ngIf"], [1, "min-w-[256px]", "flex-1"], ["name", "date", "formControlName", "date", 3, "to"], ["class", "-mt-2 mb-2 flex justify-end", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["favs", "", "class", "space-y-4 pb-4", 4, "ngIf"], ["class", "space-y-2", "features", "", 4, "ngIf"], ["class", "w-full border-t border-base-200 px-2 py-2", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "close-locker-filters", 1, "sm:hidden", 3, "click"], [1, "flex", "min-w-[8rem]", "flex-1", "flex-col"], ["for", "location"], ["appearance", "outline", "class", "w-full", 4, "ngIf"], ["appearance", "outline", 1, "w-full"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [1, "-mt-2", "mb-2", "flex", "justify-end"], ["formControlName", "all_day"], [1, "flex", "items-center", "space-x-2"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "disabled"], ["class", "w-1/3 flex-1", 4, "ngIf"], [3, "ngModelChange", "ngModel", "ngModelOptions", "time", "max", "min", "step", "use_24hr"], ["favs", "", 1, "space-y-4", "pb-4"], [3, "ngModelChange", "name", "ngModel", "ngModelOptions"], ["features", "", 1, "space-y-2"], [1, "mt-2", "text-lg", "font-medium"], ["class", "flex flex-wrap items-center space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], [1, "w-full", "capitalize", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "w-full", "border-t", "border-base-200", "px-2", "py-2"], ["btn", "", "matRipple", "", "name", "apply-locker-filters", 1, "w-full", 3, "click"]], template: function LockerFiltersComponent_Template(rf, ctx) {
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
        \u0275\u0275template(22, LockerFiltersComponent_div_22_Template, 4, 3, "div", 11)(23, LockerFiltersComponent_div_23_Template, 7, 9, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, LockerFiltersComponent_section_24_Template, 4, 8, "section", 13)(25, LockerFiltersComponent_section_25_Template, 6, 6, "section", 14);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, LockerFiltersComponent_div_27_Template, 4, 3, "div", 15);
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_11_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.can_close);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 13, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 15, "BOOKINGS.DETAILS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.hide_levels && (!(ctx.use_region && ((tmp_4_0 = \u0275\u0275pipeBind1(13, 17, ctx.regions)) == null ? null : tmp_4_0.length)) || !(!ctx.use_region && ((tmp_4_0 = \u0275\u0275pipeBind1(14, 19, ctx.buildings)) == null ? null : tmp_4_0.length) > 1)));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 21, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("to", ctx.end_date);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 23, "FORM.DATE_ERROR"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.allow_all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.form.value.all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.hide_levels);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_11_0 = \u0275\u0275pipeBind1(26, 25, ctx.features)) == null ? null : tmp_11_0.length) && !ctx.hide_levels);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.can_close);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      TranslatePipe,
      MatRippleModule,
      MatRipple,
      IconComponent,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      FormsModule,
      NgModel,
      MatCheckboxModule,
      MatCheckbox
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=locker-filters.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerFiltersComponent, { className: "LockerFiltersComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-filters.component.ts", lineNumber: 274 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-filters-display.component.ts
var _c018 = () => [];
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
    \u0275\u0275elementStart(4, "icon");
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
    \u0275\u0275elementStart(5, "icon");
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
    \u0275\u0275elementStart(5, "icon");
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerFiltersDisplayComponent, selectors: [["locker-filters-display"]], inputs: { view: "view" }, outputs: { viewChange: "viewChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 25, vars: 35, consts: [["actions", "", 1, "flex", "flex-row", "items-center", "space-x-2", "p-2", "sm:hidden"], ["btn", "", "matRipple", "", "name", "edit-locker-filters", 1, "w-1/2", "flex-1", 3, "click"], [1, "flex", "items-center"], ["btn", "", "matRipple", "", "name", "view-locker-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-locker-list", 1, "rounded-l-none", "rounded-r", 3, "click"], ["filters", "", 1, "flex", "w-[35rem]", "max-w-full", "flex-wrap", "items-center", "p-2", "sm:max-w-[35rem]"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "features", "", 4, "ngFor", "ngForOf"], ["filter-item", "", 4, "ngIf"], ["filter-item", "", "features", ""], ["icon", "", "matRipple", "", "name", "remove-locker-filter", 1, "-mr-4", 3, "click"], ["filter-item", ""], ["icon", "", "matRipple", "", "name", "remove-locker-favs-filter", 1, "-mr-4", 3, "click"], ["icon", "", "matRipple", "", "name", "remove-locker-accessible-filter", 1, "-mr-4", 3, "click"]], template: function LockerFiltersDisplayComponent_Template(rf, ctx) {
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
        \u0275\u0275property("ngForOf", ((tmp_7_0 = \u0275\u0275pipeBind1(20, 28, ctx.options)) == null ? null : tmp_7_0.features) || \u0275\u0275pureFunction0(34, _c018));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_8_0 = \u0275\u0275pipeBind1(22, 30, ctx.options)) == null ? null : tmp_8_0.show_fav);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_9_0 = \u0275\u0275pipeBind1(24, 32, ctx.options)) == null ? null : tmp_9_0.show_accessible);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, DatePipe, TranslatePipe, IconComponent, MatRippleModule, MatRipple], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=locker-filters-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerFiltersDisplayComponent, { className: "LockerFiltersDisplayComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-filters-display.component.ts", lineNumber: 129 });
})();

// libs/bookings/src/lib/locker-select-modal/locker-select-modal.component.ts
var _c019 = (a0) => ({ count: a0 });
function LockerSelectModalComponent_ng_container_12_locker_bank_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "locker-bank-list", 23);
    \u0275\u0275listener("toggleFav", function LockerSelectModalComponent_ng_container_12_locker_bank_list_1_Template_locker_bank_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFavourite($event));
    })("onSelect", function LockerSelectModalComponent_ng_container_12_locker_bank_list_1_Template_locker_bank_list_onSelect_0_listener($event) {
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
function LockerSelectModalComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LockerSelectModalComponent_ng_container_12_locker_bank_list_1_Template, 1, 3, "locker-bank-list", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const map_view_r4 = \u0275\u0275reference(39);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.view === "list")("ngIfElse", map_view_r4);
  }
}
function LockerSelectModalComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function LockerSelectModalComponent_button_14_Template_button_click_0_listener() {
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
function LockerSelectModalComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function LockerSelectModalComponent_button_30_Template_button_click_0_listener() {
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
function LockerSelectModalComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "locker-map", 26);
    \u0275\u0275listener("onSelect", function LockerSelectModalComponent_ng_template_38_Template_locker_map_onSelect_0_listener($event) {
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
function LockerSelectModalComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "locker-grid", 29);
    \u0275\u0275listener("clicked", function LockerSelectModalComponent_ng_template_40_Template_locker_grid_clicked_3_listener($event) {
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
var LockerSelectModalComponent = class _LockerSelectModalComponent extends AsyncHandler {
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get favorites() {
    return this._settings.get(FAV_LOCKER_KEY) || [];
  }
  constructor(_dialog_ref, _settings, _event_form, _data) {
    super();
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
  ngOnInit() {
    this._event_form.options.subscribe(() => {
      this.displayed = null;
      this.bank = null;
    });
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerSelectModalComponent, selectors: [["locker-select-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 42, vars: 32, consts: [["map_view", ""], ["bank_view", ""], [1, "flex", "h-[100vh]", "w-[100vw]", "flex-col", "bg-base-100", "sm:relative", "sm:h-auto", "sm:w-auto"], [1, "flex", "w-full", "items-center", "space-x-4"], ["icon", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "flex", "h-[65vh]", "min-h-[65vh]", "w-full", "flex-1", "items-center", "divide-x", "divide-base-200", "overflow-hidden", "sm:max-h-[65vh]", "sm:max-w-[95vw]"], [1, "hidden", "h-full", "max-w-[20rem]", "sm:flex", "sm:h-[65vh]", "sm:max-h-full", 3, "hide_levels"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col", "items-center", "sm:h-[65vh]"], [1, "w-full", "border-b", "border-base-200", 3, "viewChange", "view"], [4, "ngIf", "ngIfElse"], [1, "flex", "w-full", "flex-col-reverse", "items-center", "justify-end", "border-t", "border-base-200", "px-2", "pb-[5.5rem]", "pt-2", "sm:hidden"], ["btn", "", "matRipple", "", "name", "locker-return", "class", "inverse w-full sm:hidden", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "name", "save-lockers", 1, "w-full", "sm:mb-0", "sm:w-32", 3, "mat-dialog-close"], [1, "hidden", "w-full", "items-center", "justify-between", "border-t", "border-base-200", "p-2", "sm:flex"], ["btn", "", "matRipple", "", "name", "locker-return", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "text-center", "text-sm", "opacity-60"], ["btn", "", "matRipple", "", "name", "clear-bank", "class", "inverse mr-2 w-32", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "name", "toggle-locker", 3, "click", "disabled"], [1, "mr-1"], ["class", "h-1/2 flex-1 bg-base-200", 3, "active", "selected", "favorites", "toggleFav", "onSelect", 4, "ngIf", "ngIfElse"], [1, "h-1/2", "flex-1", "bg-base-200", 3, "toggleFav", "onSelect", "active", "selected", "favorites"], ["btn", "", "matRipple", "", "name", "locker-return", 1, "inverse", "w-full", "sm:hidden", 3, "click"], ["btn", "", "matRipple", "", "name", "clear-bank", 1, "inverse", "mr-2", "w-32", 3, "click"], [1, "h-1/2", "w-full", "flex-1", 3, "onSelect", "is_displayed"], [1, "flex", "h-full", "w-full", "flex-col", "overflow-auto", "bg-base-200"], [1, "sticky", "left-0", "w-full", "px-2", "py-2", "font-medium"], [1, "h-1/2", "w-full", "flex-1", 3, "clicked", "bank", "selected"]], template: function LockerSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "header", 3)(2, "button", 4)(3, "icon");
        \u0275\u0275text(4, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "h3");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "main", 5);
        \u0275\u0275element(9, "locker-filters", 6);
        \u0275\u0275elementStart(10, "div", 7)(11, "locker-filters-display", 8);
        \u0275\u0275twoWayListener("viewChange", function LockerSelectModalComponent_Template_locker_filters_display_viewChange_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.view, $event) || (ctx.view = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, LockerSelectModalComponent_ng_container_12_Template, 2, 2, "ng-container", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "footer", 10);
        \u0275\u0275template(14, LockerSelectModalComponent_button_14_Template, 3, 3, "button", 11);
        \u0275\u0275elementStart(15, "button", 12);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "footer", 13)(19, "button", 14)(20, "div", 15)(21, "icon", 16);
        \u0275\u0275text(22, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 17);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "p", 18);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 15);
        \u0275\u0275template(30, LockerSelectModalComponent_button_30_Template, 3, 3, "button", 19);
        \u0275\u0275elementStart(31, "button", 20);
        \u0275\u0275listener("click", function LockerSelectModalComponent_Template_button_click_31_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id)));
        });
        \u0275\u0275elementStart(32, "div", 15)(33, "icon", 16);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 21);
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(38, LockerSelectModalComponent_ng_template_38_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(40, LockerSelectModalComponent_ng_template_40_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const bank_view_r9 = \u0275\u0275reference(41);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 19, "BOOKINGS.LOCKER_FIND"));
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
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 21, "COMMON.VIEW_LIST"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", ctx.selected);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 23, "COMMON.BACK_TO_FORM"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 25, "BOOKINGS.LOCKER_ADDED_COUNT", \u0275\u0275pureFunction1(30, _c019, ctx.selected.length)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.bank);
        \u0275\u0275advance();
        \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
        \u0275\u0275property("disabled", !ctx.displayed);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 28, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      LockerGridComponent,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      LockerBankListComponent,
      LockerFiltersComponent,
      LockerFiltersDisplayComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerSelectModalComponent, { className: "LockerSelectModalComponent", filePath: "libs/bookings/src/lib/locker-select-modal/locker-select-modal.component.ts", lineNumber: 207 });
})();

// libs/bookings/src/lib/new-locker-select-modal/new-locker-bank-list.component.ts
var _c020 = (a0) => ({ count: a0 });
var _c113 = (a0, a1) => ({ count: a0, total: a1 });
function NewLockerBankListComponent_ng_container_7_ul_1_li_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function NewLockerBankListComponent_ng_container_7_ul_1_li_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const locker_bank_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", locker_bank_r2.images[0]);
  }
}
function NewLockerBankListComponent_ng_container_7_ul_1_li_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
}
function NewLockerBankListComponent_ng_container_7_ul_1_li_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const locker_bank_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", locker_bank_r2.tags[0], " ");
  }
}
function NewLockerBankListComponent_ng_container_7_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "button", 10);
    \u0275\u0275listener("click", function NewLockerBankListComponent_ng_container_7_ul_1_li_1_Template_button_click_1_listener() {
      const locker_bank_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectLockerBank(locker_bank_r2));
    });
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275template(3, NewLockerBankListComponent_ng_container_7_ul_1_li_1_div_3_Template, 3, 0, "div", 12)(4, NewLockerBankListComponent_ng_container_7_ul_1_li_1_img_4_Template, 1, 1, "img", 13)(5, NewLockerBankListComponent_ng_container_7_ul_1_li_1_ng_template_5_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "h3", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16)(11, "icon", 17);
    \u0275\u0275text(12, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 18);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "level");
    \u0275\u0275pipe(16, "level");
    \u0275\u0275pipe(17, "level");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 19)(19, "icon", 17);
    \u0275\u0275text(20, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 18);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(24, NewLockerBankListComponent_ng_container_7_ul_1_li_1_div_24_Template, 2, 1, "div", 20);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 15, "COMMON.AVAILABLE_COUNT", \u0275\u0275pureFunction2(18, _c113, locker_bank_r2.available || 0, locker_bank_r2.lockers.length || 1)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", locker_bank_r2.tags == null ? null : locker_bank_r2.tags.length);
  }
}
function NewLockerBankListComponent_ng_container_7_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275template(1, NewLockerBankListComponent_ng_container_7_ul_1_li_1_Template, 25, 21, "li", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r2.locker_banks));
  }
}
function NewLockerBankListComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NewLockerBankListComponent_ng_container_7_ul_1_Template, 3, 3, "ul", 6);
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
function NewLockerBankListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "mat-spinner", 26);
    \u0275\u0275elementStart(2, "p", 27);
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
function NewLockerBankListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "p", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.LOCKER_LIST_EMPTY"), " ");
  }
}
var NewLockerBankListComponent = class _NewLockerBankListComponent {
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
      return banks.filter((i) => (!show_fav || this.isFavourite(i.id)) && (!show_accessible || i.lockers.find((_) => _.accessible)) && resources.find((_) => _.bank_id === i.id)).map((bank) => {
        const locker_list = bank.lockers.map((_) => __spreadProps(__spreadValues({}, _), {
          available: !!resources.find((lkr) => lkr.id === _.id) && (!show_accessible || _.accessible),
          map_id: bank.map_id || bank.id,
          zone: bank.zone,
          zones: bank.zones
        }));
        return __spreadProps(__spreadValues({}, bank), {
          available: locker_list.reduce((c, l) => c + (l.available ? 1 : 0), 0),
          lockers: locker_list
        });
      });
    }));
    this.loading = this._state.loading;
  }
  isFavourite(locker_bank_id) {
    return this.favorites.includes(locker_bank_id);
  }
  selectLockerBank(locker_bank) {
    this.onSelect.emit(locker_bank);
  }
  static {
    this.\u0275fac = function NewLockerBankListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewLockerBankListComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewLockerBankListComponent, selectors: [["new-locker-bank-list"]], inputs: { active: "active", selected: "selected", favorites: "favorites" }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 13, vars: 15, consts: [["load_state", ""], ["empty_state", ""], ["placeholder", ""], [1, "font-bold"], ["count", "", 1, "mb-4", "text-sm", "opacity-60"], [4, "ngIf", "ngIfElse"], ["class", "list-style-none space-y-2 overflow-hidden", 4, "ngIf", "ngIfElse"], [1, "list-style-none", "space-y-2", "overflow-hidden"], ["locker_bank", "", "class", "relative w-full overflow-hidden rounded-lg border border-base-200 bg-base-100 shadow", 3, "!border-blue-400", 4, "ngFor", "ngForOf"], ["locker_bank", "", 1, "relative", "w-full", "overflow-hidden", "rounded-lg", "border", "border-base-200", "bg-base-100", "shadow"], ["name", "select-locker_bank", "matRipple", "", 1, "flex", "h-full", "w-full", "p-2", 3, "click"], [1, "relative", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-xl", "bg-base-200"], ["class", "absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-neutral bg-base-200 text-white", 4, "ngIf"], ["auth", "", "class", "h-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "flex-1pt-2", "text-left"], [1, "mb-2", "font-medium"], [1, "mb-1", "flex", "items-center", "space-x-2", "text-sm"], [1, "text-blue-500"], [1, "text-xs"], [1, "flex", "items-center", "space-x-2", "text-sm"], ["class", "absolute bottom-2 right-2 rounded bg-base-200 px-2 py-1 font-mono text-xs", 4, "ngIf"], [1, "absolute", "left-1", "top-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "border-neutral", "bg-base-200", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/locker-placeholder.svg", 1, "m-auto"], [1, "absolute", "bottom-2", "right-2", "rounded", "bg-base-200", "px-2", "py-1", "font-mono", "text-xs"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [3, "diameter"], [1, "opacity-30"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "text-center", "opacity-30"]], template: function NewLockerBankListComponent_Template(rf, ctx) {
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
        \u0275\u0275template(7, NewLockerBankListComponent_ng_container_7_Template, 3, 4, "ng-container", 5);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275template(9, NewLockerBankListComponent_ng_template_9_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(11, NewLockerBankListComponent_ng_template_11_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
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
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      AuthenticatedImageDirective,
      LevelPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewLockerBankListComponent, { className: "NewLockerBankListComponent", filePath: "libs/bookings/src/lib/new-locker-select-modal/new-locker-bank-list.component.ts", lineNumber: 167 });
})();

// libs/bookings/src/lib/new-locker-select-modal/new-locker-filters-display.component.ts
var _c021 = () => [];
function NewLockerFiltersDisplayComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 6);
    \u0275\u0275listener("click", function NewLockerFiltersDisplayComponent_div_8_Template_button_click_3_listener() {
      const feat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFeature(feat_r2, false));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r2);
  }
}
function NewLockerFiltersDisplayComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function NewLockerFiltersDisplayComponent_div_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOptions({ show_fav: false }));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.FAVOURITES_ONLY"));
  }
}
function NewLockerFiltersDisplayComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275listener("click", function NewLockerFiltersDisplayComponent_div_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOptions({ show_accessible: false }));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.ACCESSIBLE_ONLY"));
  }
}
var NewLockerFiltersDisplayComponent = class _NewLockerFiltersDisplayComponent extends AsyncHandler {
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
  constructor(_state, _settings) {
    super();
    this._state = _state;
    this._settings = _settings;
    this.view = "list";
    this.viewChange = new EventEmitter();
    this.options = this._state.options;
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
  }
  static {
    this.\u0275fac = function NewLockerFiltersDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewLockerFiltersDisplayComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewLockerFiltersDisplayComponent, selectors: [["new-locker-filters-display"]], inputs: { view: "view" }, outputs: { viewChange: "viewChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 22, consts: [["filters", "", 1, "sticky", "-top-1", "z-20", "-mx-1", "!mb-4", "flex", "w-[calc(100%+0.5rem)]", "flex-wrap", "items-center", "rounded", "border", "border-base-300", "bg-base-100", "p-1", "!pr-10", "sm:!pr-1"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "features", "", 4, "ngFor", "ngForOf"], ["filter-item", "", 4, "ngIf"], ["filter-item", "", "features", ""], ["icon", "", "matRipple", "", "name", "remove-locker-filter", 1, "-mr-4", 3, "click"], ["filter-item", ""], ["icon", "", "matRipple", "", "name", "remove-locker-favs-filter", 1, "-mr-4", 3, "click"], ["icon", "", "matRipple", "", "name", "remove-locker-accessible-filter", 1, "-mr-4", 3, "click"]], template: function NewLockerFiltersDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "date");
        \u0275\u0275pipe(7, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, NewLockerFiltersDisplayComponent_div_8_Template, 6, 1, "div", 3);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275template(10, NewLockerFiltersDisplayComponent_div_10_Template, 7, 3, "div", 4);
        \u0275\u0275pipe(11, "async");
        \u0275\u0275template(12, NewLockerFiltersDisplayComponent_div_12_Template, 7, 3, "div", 4);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, ctx.start, "mediumDate"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 9, ctx.start, ctx.time_format), " \u2014 ", \u0275\u0275pipeBind2(7, 12, ctx.end, ctx.time_format), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ((tmp_2_0 = \u0275\u0275pipeBind1(9, 15, ctx.options)) == null ? null : tmp_2_0.features) || \u0275\u0275pureFunction0(21, _c021));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(11, 17, ctx.options)) == null ? null : tmp_3_0.show_fav);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (tmp_4_0 = \u0275\u0275pipeBind1(13, 19, ctx.options)) == null ? null : tmp_4_0.show_accessible);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, DatePipe, TranslatePipe, IconComponent, MatRippleModule, MatRipple], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=new-locker-filters-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewLockerFiltersDisplayComponent, { className: "NewLockerFiltersDisplayComponent", filePath: "libs/bookings/src/lib/new-locker-select-modal/new-locker-filters-display.component.ts", lineNumber: 90 });
})();

// libs/bookings/src/lib/new-locker-select-modal/new-locker-filters.component.ts
var _c022 = () => ({ standalone: true });
var _c114 = () => [];
function NewLockerFiltersComponent_div_9_mat_form_field_4_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r3 = ctx.$implicit;
    \u0275\u0275property("value", reg_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r3.display_name || reg_r3.name, " ");
  }
}
function NewLockerFiltersComponent_div_9_mat_form_field_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 16)(1, "mat-select", 17);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function NewLockerFiltersComponent_div_9_mat_form_field_4_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275template(3, NewLockerFiltersComponent_div_9_mat_form_field_4_mat_option_3_Template, 2, 2, "mat-option", 18);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(8, _c022))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 6, ctx_r1.regions));
  }
}
function NewLockerFiltersComponent_div_9_mat_form_field_6_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r5 = ctx.$implicit;
    \u0275\u0275property("value", bld_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r5.display_name || bld_r5.name, " ");
  }
}
function NewLockerFiltersComponent_div_9_mat_form_field_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 16)(1, "mat-select", 20);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function NewLockerFiltersComponent_div_9_mat_form_field_6_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275template(5, NewLockerFiltersComponent_div_9_mat_form_field_6_mat_option_5_Template, 2, 2, "mat-option", 18);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(2, 4, ctx_r1.building))("ngModelOptions", \u0275\u0275pureFunction0(12, _c022))("placeholder", ((tmp_4_0 = \u0275\u0275pipeBind1(3, 6, ctx_r1.building)) == null ? null : tmp_4_0.display_name) || ((tmp_4_0 = \u0275\u0275pipeBind1(4, 8, ctx_r1.building)) == null ? null : tmp_4_0.name));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 10, ctx_r1.buildings));
  }
}
function NewLockerFiltersComponent_div_9_mat_form_field_8_mat_option_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const lvl_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = \u0275\u0275pipeBind1(2, 1, lvl_r7.parent_id)) == null ? null : tmp_5_0.display_name, " ");
  }
}
function NewLockerFiltersComponent_div_9_mat_form_field_8_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19)(1, "div", 22);
    \u0275\u0275template(2, NewLockerFiltersComponent_div_9_mat_form_field_8_mat_option_4_div_2_Template, 5, 3, "div", 23);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", lvl_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r7.display_name || lvl_r7.name, " ");
  }
}
function NewLockerFiltersComponent_div_9_mat_form_field_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 16)(1, "mat-select", 21);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function NewLockerFiltersComponent_div_9_mat_form_field_8_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275template(4, NewLockerFiltersComponent_div_9_mat_form_field_8_mat_option_4_Template, 5, 3, "mat-option", 18);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(2, 4, ctx_r1.options)) == null ? null : tmp_2_0.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(10, _c022))("placeholder", \u0275\u0275pipeBind1(3, 6, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 8, ctx_r1.levels));
  }
}
function NewLockerFiltersComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, NewLockerFiltersComponent_div_9_mat_form_field_4_Template, 5, 9, "mat-form-field", 15);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275template(6, NewLockerFiltersComponent_div_9_mat_form_field_6_Template, 7, 13, "mat-form-field", 15);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, NewLockerFiltersComponent_div_9_mat_form_field_8_Template, 6, 11, "mat-form-field", 15);
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
function NewLockerFiltersComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "mat-checkbox", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.ALL_DAY"), " ");
  }
}
function NewLockerFiltersComponent_div_20_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-duration-field", 32);
    \u0275\u0275listener("ngModelChange", function NewLockerFiltersComponent_div_20_div_6_Template_a_duration_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ duration: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.duration)("ngModelOptions", \u0275\u0275pureFunction0(10, _c022))("time", (tmp_5_0 = ctx_r1.form.get("date")) == null ? null : tmp_5_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr);
  }
}
function NewLockerFiltersComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 30);
    \u0275\u0275listener("ngModelChange", function NewLockerFiltersComponent_div_20_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, NewLockerFiltersComponent_div_20_div_6_Template, 5, 11, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(8, _c022))("use_24hr", ctx_r1.use_24hr)("disabled", ctx_r1.disable_start);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hide_end);
  }
}
function NewLockerFiltersComponent_section_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 33)(1, "settings-toggle", 34);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function NewLockerFiltersComponent_section_21_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_accessible: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 3, "BOOKINGS.LOCKER_ACCESSIBLE_SHOW"))("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(3, 5, ctx_r1.options)) == null ? null : tmp_2_0.show_accessible)("ngModelOptions", \u0275\u0275pureFunction0(7, _c022));
  }
}
function NewLockerFiltersComponent_section_22_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "settings-toggle", 39);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function NewLockerFiltersComponent_section_22_div_4_Template_settings_toggle_ngModelChange_1_listener($event) {
      const feat_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r12, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const feat_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", feat_r12)("ngModel", (((tmp_4_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.options)) == null ? null : tmp_4_0.features) || \u0275\u0275pureFunction0(5, _c114)).includes(feat_r12))("ngModelOptions", \u0275\u0275pureFunction0(6, _c022));
  }
}
function NewLockerFiltersComponent_section_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 35)(1, "h2", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, NewLockerFiltersComponent_section_22_div_4_Template, 3, 7, "div", 37);
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
function NewLockerFiltersComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "button", 41);
    \u0275\u0275listener("click", function NewLockerFiltersComponent_div_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
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
var NewLockerFiltersComponent = class _NewLockerFiltersComponent extends AsyncHandler {
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
  get disable_date() {
    return this._settings.get("app.lockers.disabled_date_select");
  }
  get disable_start() {
    return this._settings.get("app.lockers.disabled_start_time");
  }
  get hide_end() {
    return this._settings.get("app.lockers.hide_end_time");
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
  constructor(_state, _org, _settings) {
    super();
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
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setLevel = (l) => {
    };
  }
  ngOnInit() {
    this.subscription("bld", combineLatest([
      this._org.active_building,
      this.form.controls.duration.valueChanges
    ]).subscribe(() => {
      this.timeout("disable", () => {
        if (this.disable_date) {
          this.form.controls.date.disable();
        }
      }, 50);
    }));
    this.timeout("disable", () => {
      if (this.disable_date) {
        this.form.controls.date.disable();
      }
    }, 50);
  }
  static {
    this.\u0275fac = function NewLockerFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewLockerFiltersComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewLockerFiltersComponent, selectors: [["new-locker-filters"]], inputs: { hide_levels: "hide_levels" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 25, vars: 26, consts: [[1, "sticky", "top-0", "z-10", "flex", "items-center", "border-b", "border-base-300", "bg-base-100", "px-4", "py-4"], [1, "text-xl", "font-medium"], [1, "relative", "z-0", "w-full", "divide-y", "divide-base-200", "p-2", 3, "formGroup"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], ["class", "flex min-w-[8rem] flex-1 flex-col", 4, "ngIf"], [1, "min-w-[256px]", "flex-1"], ["name", "date", "formControlName", "date", 3, "to"], ["class", "-mt-2 mb-2 flex justify-end", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["favs", "", "class", "space-y-4 pb-4", 4, "ngIf"], ["class", "space-y-2", "features", "", 4, "ngIf"], ["class", "w-full border-t border-base-200 px-2 py-2", 4, "ngIf"], [1, "flex", "min-w-[8rem]", "flex-1", "flex-col"], ["for", "location"], ["appearance", "outline", "class", "w-full", 4, "ngIf"], ["appearance", "outline", 1, "w-full"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [1, "-mt-2", "mb-2", "flex", "justify-end"], ["formControlName", "all_day"], [1, "flex", "items-center", "space-x-2"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "disabled"], ["class", "w-1/3 flex-1", 4, "ngIf"], [3, "ngModelChange", "ngModel", "ngModelOptions", "time", "max", "min", "step", "use_24hr"], ["favs", "", 1, "space-y-4", "pb-4"], [3, "ngModelChange", "name", "ngModel", "ngModelOptions"], ["features", "", 1, "space-y-2"], [1, "mt-2", "text-lg", "font-medium"], ["class", "flex flex-wrap items-center space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], [1, "w-full", "capitalize", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "w-full", "border-t", "border-base-200", "px-2", "py-2"], ["btn", "", "matRipple", "", "name", "apply-locker-filters", 1, "w-full", 3, "click"]], template: function NewLockerFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "form", 2)(5, "section", 3)(6, "h2", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, NewLockerFiltersComponent_div_9_Template, 9, 10, "div", 5);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275pipe(11, "async");
        \u0275\u0275elementStart(12, "div", 6)(13, "label");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a-date-field", 7);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(19, NewLockerFiltersComponent_div_19_Template, 4, 3, "div", 8)(20, NewLockerFiltersComponent_div_20_Template, 7, 9, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, NewLockerFiltersComponent_section_21_Template, 4, 8, "section", 10)(22, NewLockerFiltersComponent_section_22_Template, 6, 6, "section", 11);
        \u0275\u0275pipe(23, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, NewLockerFiltersComponent_div_24_Template, 4, 3, "div", 12);
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_10_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 14, "BOOKINGS.DETAILS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.hide_levels && (!(ctx.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(10, 16, ctx.regions)) == null ? null : tmp_3_0.length)) || !(!ctx.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(11, 18, ctx.buildings)) == null ? null : tmp_3_0.length) > 1)));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 20, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("to", ctx.end_date);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 22, "FORM.DATE_ERROR"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.allow_all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.form.value.all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.hide_levels);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_10_0 = \u0275\u0275pipeBind1(23, 24, ctx.features)) == null ? null : tmp_10_0.length) && !ctx.hide_levels);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.can_close);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      TranslatePipe,
      MatRippleModule,
      MatRipple,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      FormsModule,
      NgModel,
      MatCheckboxModule,
      MatCheckbox
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=new-locker-filters.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewLockerFiltersComponent, { className: "NewLockerFiltersComponent", filePath: "libs/bookings/src/lib/new-locker-select-modal/new-locker-filters.component.ts", lineNumber: 258 });
})();

// libs/bookings/src/lib/new-locker-select-modal/new-locker-map.component.ts
var _c023 = () => ({ controls: true });
var _c115 = () => ({ standalone: true });
function NewLockerMapComponent_mat_form_field_1_mat_option_3_div_2_Template(rf, ctx) {
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
function NewLockerMapComponent_mat_form_field_1_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7)(1, "div", 8);
    \u0275\u0275template(2, NewLockerMapComponent_mat_form_field_1_mat_option_3_div_2_Template, 5, 3, "div", 9);
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
function NewLockerMapComponent_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 4)(1, "mat-select", 5);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function NewLockerMapComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NewLockerMapComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_ids: [$event.id] }));
    });
    \u0275\u0275template(3, NewLockerMapComponent_mat_form_field_1_mat_option_3_Template, 5, 3, "mat-option", 6);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.level);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c115))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 6, ctx_r1.levels));
  }
}
var NewLockerMapComponent = class _NewLockerMapComponent extends AsyncHandler {
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
    this.\u0275fac = function NewLockerMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewLockerMapComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewLockerMapComponent, selectors: [["new-locker-map"]], inputs: { is_displayed: "is_displayed", active: "active" }, outputs: { onSelect: "onSelect" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 8, vars: 17, consts: [[1, "w-full", "border-b", "border-base-200", "bg-base-100", "p-2"], ["levels", "", "appearance", "outline", "class", "no-subscript w-full", 4, "ngIf"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["levels", "", "appearance", "outline", 1, "no-subscript", "w-full"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function NewLockerMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, NewLockerMapComponent_mat_form_field_1_Template, 5, 9, "mat-form-field", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "interactive-map", 3);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "async");
        \u0275\u0275twoWayListener("zoomChange", function NewLockerMapComponent_Template_interactive_map_zoomChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
          return $event;
        })("centerChange", function NewLockerMapComponent_Template_interactive_map_centerChange_4_listener($event) {
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
        \u0275\u0275property("styles", \u0275\u0275pipeBind1(5, 10, ctx.styles))("features", \u0275\u0275pipeBind1(6, 12, ctx.features))("actions", \u0275\u0275pipeBind1(7, 14, ctx.actions))("options", \u0275\u0275pureFunction0(16, _c023));
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      InteractiveMapComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      NgControlStatus,
      NgModel,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=new-locker-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewLockerMapComponent, { className: "NewLockerMapComponent", filePath: "libs/bookings/src/lib/new-locker-select-modal/new-locker-map.component.ts", lineNumber: 92 });
})();

// libs/bookings/src/lib/new-locker-select-modal/new-locker-select-modal.component.ts
function NewLockerSelectModalComponent_ng_container_21_new_locker_filters_display_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-locker-filters-display", 25);
    \u0275\u0275twoWayListener("viewChange", function NewLockerSelectModalComponent_ng_container_21_new_locker_filters_display_1_Template_new_locker_filters_display_viewChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.view, $event) || (ctx_r2.view = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("view", ctx_r2.view);
  }
}
function NewLockerSelectModalComponent_ng_container_21_new_locker_bank_list_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-locker-bank-list", 26);
    \u0275\u0275listener("toggleFav", function NewLockerSelectModalComponent_ng_container_21_new_locker_bank_list_2_Template_new_locker_bank_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFavourite($event));
    })("onSelect", function NewLockerSelectModalComponent_ng_container_21_new_locker_bank_list_2_Template_new_locker_bank_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r4);
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
function NewLockerSelectModalComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NewLockerSelectModalComponent_ng_container_21_new_locker_filters_display_1_Template, 1, 1, "new-locker-filters-display", 23)(2, NewLockerSelectModalComponent_ng_container_21_new_locker_bank_list_2_Template, 1, 3, "new-locker-bank-list", 24);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const map_view_r5 = \u0275\u0275reference(39);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.view === "list");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.view === "list")("ngIfElse", map_view_r5);
  }
}
function NewLockerSelectModalComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function NewLockerSelectModalComponent_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_filters = !ctx_r2.show_filters);
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.show_filters ? "close" : "filter_list");
  }
}
function NewLockerSelectModalComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-locker-map", 28);
    \u0275\u0275listener("onSelect", function NewLockerSelectModalComponent_ng_template_38_Template_new_locker_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r7);
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
function NewLockerSelectModalComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "button", 31);
    \u0275\u0275listener("click", function NewLockerSelectModalComponent_ng_template_40_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.bank = null);
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "locker-grid", 33);
    \u0275\u0275listener("clicked", function NewLockerSelectModalComponent_ng_template_40_Template_locker_grid_clicked_7_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.displayed = $event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.bank.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("bank", ctx_r2.bank)("selected", ctx_r2.displayed == null ? null : ctx_r2.displayed.id);
  }
}
var FAV_LOCKER_KEY2 = "favourite_lockers";
var NewLockerSelectModalComponent = class _NewLockerSelectModalComponent extends AsyncHandler {
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get favorites() {
    return this._settings.get(FAV_LOCKER_KEY2) || [];
  }
  constructor(_dialog_ref, _settings, _event_form, _data) {
    super();
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this._event_form = _event_form;
    this._data = _data;
    this.show_filters = false;
    this.selected = [];
    this.view = "list";
    this.bank = null;
    this.selected = [..._data.items || []];
    this._event_form.setOptions(_data.options);
  }
  ngOnInit() {
    this._event_form.options.subscribe(() => {
      this.displayed = null;
      this.bank = null;
    });
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
      this._settings.saveUserSetting(FAV_LOCKER_KEY2, [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_LOCKER_KEY2, fav_list.filter((_) => _ !== item.id));
    }
  }
  static {
    this.\u0275fac = function NewLockerSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewLockerSelectModalComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewLockerSelectModalComponent, selectors: [["new-locker-select-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 42, vars: 42, consts: [["map_view", ""], ["bank_view", ""], [1, "flex", "h-screen", "w-screen", "flex-col", "space-y-2", "overflow-hidden", "bg-base-100", "p-2", "sm:h-auto", "sm:w-auto"], [1, "flex", "h-14", "w-full", "items-center", "space-x-2", "rounded", "border-none", "bg-base-200", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], [1, "flex", "divide-x", "divide-secondary", "rounded", "border", "border-secondary"], ["icon", "", "matRipple", "", 1, "rounded-l", "rounded-r-none", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "rounded-l-none", "rounded-r", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "h-1/2", "flex-1", "sm:h-[65vh]", "sm:flex-none", "sm:space-x-2"], [1, "h-full", "w-full", "overflow-y-auto", "overflow-x-hidden", "rounded", "border", "border-base-300", "shadow", "sm:block", "sm:w-[20rem]"], [3, "hide_levels"], [1, "h-full", "w-full", "overflow-auto", "rounded", "border", "border-base-300", "bg-base-200", "sm:w-[20rem]", "md:w-[40rem]", "lg:block"], [4, "ngIf", "ngIfElse"], ["icon", "", "matRipple", "", "class", "absolute right-2 top-3 z-20 border border-base-200 bg-base-100 sm:hidden", 3, "click", 4, "ngIf"], [1, "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded", "border-none", "bg-base-200", "p-2"], ["btn", "", "matRipple", "", "name", "locker-return", 1, "inverse", "bg-base-100", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", "name", "toggle-locker", 3, "click", "disabled"], [1, "flex", "items-center"], [1, "mr-1"], [3, "view", "viewChange", 4, "ngIf"], [3, "active", "selected", "favorites", "toggleFav", "onSelect", 4, "ngIf", "ngIfElse"], [3, "viewChange", "view"], [3, "toggleFav", "onSelect", "active", "selected", "favorites"], ["icon", "", "matRipple", "", 1, "absolute", "right-2", "top-3", "z-20", "border", "border-base-200", "bg-base-100", "sm:hidden", 3, "click"], [1, "h-full", "w-full", 3, "onSelect", "is_displayed", "active"], [1, "flex", "h-full", "w-full", "flex-col", "overflow-auto", "bg-base-200"], [1, "sticky", "left-0", "flex", "w-full", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 1, "border", "border-base-300", "bg-base-100", 3, "click"], [1, "px-2", "py-2", "font-medium"], [1, "h-1/2", "w-full", "flex-1", 3, "clicked", "bank", "selected"]], template: function NewLockerSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "header", 3)(2, "h2", 4);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("click", function NewLockerSelectModalComponent_Template_button_click_6_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.view = "list");
        });
        \u0275\u0275elementStart(8, "icon");
        \u0275\u0275text(9, "list");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "button", 7);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275listener("click", function NewLockerSelectModalComponent_Template_button_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.view = "map");
        });
        \u0275\u0275elementStart(12, "icon");
        \u0275\u0275text(13, "map");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "button", 8)(15, "icon");
        \u0275\u0275text(16, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "main", 9)(18, "div", 10);
        \u0275\u0275element(19, "new-locker-filters", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12);
        \u0275\u0275template(21, NewLockerSelectModalComponent_ng_container_21_Template, 3, 3, "ng-container", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, NewLockerSelectModalComponent_button_22_Template, 3, 1, "button", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "footer", 15)(24, "button", 16)(25, "div", 17)(26, "icon", 18);
        \u0275\u0275text(27, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 19);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "button", 20);
        \u0275\u0275listener("click", function NewLockerSelectModalComponent_Template_button_click_31_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id)));
        });
        \u0275\u0275elementStart(32, "div", 21)(33, "icon", 18);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 22);
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(38, NewLockerSelectModalComponent_ng_template_38_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(40, NewLockerSelectModalComponent_ng_template_40_Template, 8, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const bank_view_r9 = \u0275\u0275reference(41);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 32, "BOOKINGS.DESK_FIND"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("bg-base-100", ctx.view !== "list")("bg-secondary", ctx.view === "list")("text-secondary-content", ctx.view === "list");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 34, "COMMON.LIST"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("bg-base-100", ctx.view !== "map")("bg-secondary", ctx.view === "map")("text-secondary-content", ctx.view === "map");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 36, "COMMON.MAP"));
        \u0275\u0275advance(8);
        \u0275\u0275classProp("hidden", !ctx.show_filters);
        \u0275\u0275advance();
        \u0275\u0275property("hide_levels", ctx.view !== "list");
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.show_filters)("p-2", ctx.view === "list");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.bank)("ngIfElse", bank_view_r9);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.displayed);
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", ctx.selected);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 38, "COMMON.BACK_TO_FORM"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
        \u0275\u0275property("disabled", !ctx.displayed);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 40, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatTooltipModule,
      MatTooltip,
      NewLockerBankListComponent,
      NewLockerFiltersComponent,
      NewLockerMapComponent,
      NewLockerFiltersDisplayComponent,
      LockerGridComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewLockerSelectModalComponent, { className: "NewLockerSelectModalComponent", filePath: "libs/bookings/src/lib/new-locker-select-modal/new-locker-select-modal.component.ts", lineNumber: 204 });
})();

// libs/bookings/src/lib/locker-list-field.component.ts
var _c024 = () => [];
var _c116 = () => ({ standalone: true });
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
    \u0275\u0275property("ngModel", (ctx_r3.selected_features || \u0275\u0275pureFunction0(3, _c024)).includes(opt_r3))("ngModelOptions", \u0275\u0275pureFunction0(4, _c116));
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
    \u0275\u0275elementStart(0, "div", 13)(1, "icon", 27);
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
    \u0275\u0275elementStart(9, "div", 13)(10, "icon", 14);
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
    \u0275\u0275elementStart(19, "div", 18)(20, "icon");
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
    \u0275\u0275elementStart(25, "div", 18)(26, "icon");
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
var EMPTY_FAVS2 = [];
var LockerListFieldComponent = class _LockerListFieldComponent {
  get favorites() {
    return this._settings.get(FAV_LOCKER_KEY) || EMPTY_FAVS2;
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
    const ref = this._dialog.open(NewLockerSelectModalComponent, {
      data: {
        items: this.items,
        options: { capacity: this.room_size }
      }
    });
    ref.afterClosed().subscribe((items) => {
      if (!items)
        items = ref.componentInstance.selected;
      console.log("Items:", items);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerListFieldComponent, selectors: [["locker-list-field"]], inputs: { features: "features" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _LockerListFieldComponent),
        multi: true
      }
    ])], decls: 11, vars: 4, consts: [["placeholder", ""], ["list", "", 1, "space-y-2"], ["locker", "", "class", "relative flex w-full items-center rounded-lg border border-base-200 p-2 shadow", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "name", "add-locker", 1, "inverse", "mt-2", "w-full", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "mb-2", "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1", "space-y-2"], ["locker", "", 1, "relative", "flex", "w-full", "items-center", "rounded-lg", "border", "border-base-200", "p-2", "shadow"], ["class", "flex flex-col", 4, "ngIf"], [1, "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "bg-base-200"], ["auth", "", "class", "min-h-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "pb-4"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-blue-500", "text-base"], ["class", "flex items-center space-x-2 text-sm", 4, "ngIf"], [1, "absolute", "bottom-0", "right-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "name", "edit-locker", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "name", "remove-locker", 1, "clear", 3, "click"], [1, "flex", "flex-col"], ["for", "title"], ["features", "", 1, "flex", "flex-wrap", "items-center", "space-x-2"], [3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["auth", "", 1, "min-h-full", "object-cover", 3, "source"], ["src", "assets/icons/locker-placeholder.svg", 1, "m-auto"], [1, "text-base", "text-info"]], template: function LockerListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, LockerListFieldComponent_div_1_Template, 30, 16, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "button", 3);
        \u0275\u0275listener("click", function LockerListFieldComponent_Template_button_click_2_listener() {
          return ctx.changeResources();
        });
        \u0275\u0275elementStart(3, "div", 4)(4, "icon");
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
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatRipple,
      AuthenticatedImageDirective,
      MatCheckboxModule,
      MatCheckbox,
      LevelPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerListFieldComponent, { className: "LockerListFieldComponent", filePath: "libs/bookings/src/lib/locker-list-field.component.ts", lineNumber: 142 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-details.component.ts
var _c025 = () => ({ disable_pan: true, disable_zoom: true });
function ParkingSpaceDetailsComponent_ng_container_0_image_carousel_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "image-carousel", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("images", ctx_r1.space.images);
  }
}
function ParkingSpaceDetailsComponent_ng_container_0_section_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18);
    \u0275\u0275element(1, "interactive-map", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.map_url)("focus", ctx_r1.space.map_id)("features", ctx_r1.features)("options", \u0275\u0275pureFunction0(4, _c025));
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
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function ParkingSpaceDetailsComponent_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(7, "icon");
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
    \u0275\u0275elementStart(18, "div", 11)(19, "icon");
    \u0275\u0275text(20, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 11)(24, "icon");
    \u0275\u0275text(25, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(28, "hr");
    \u0275\u0275template(29, ParkingSpaceDetailsComponent_ng_container_0_section_29_Template, 2, 5, "section", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 13)(31, "button", 14);
    \u0275\u0275listener("click", function ParkingSpaceDetailsComponent_ng_container_0_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.active = !ctx_r1.active;
      return \u0275\u0275resetView(ctx_r1.activeChange.emit(ctx_r1.active));
    });
    \u0275\u0275elementStart(32, "div", 15)(33, "icon", 16);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 25, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.level == null ? null : ctx_r1.level.display_name) || (ctx_r1.level == null ? null : ctx_r1.level.name), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.building == null ? null : ctx_r1.building.address) || (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.map_open);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx_r1.active);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.active ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 27, ctx_r1.active ? "BOOKINGS.SPACE_REMOVE" : "BOOKINGS.SPACE_ADD_TO"), " ");
  }
}
function ParkingSpaceDetailsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "p", 21);
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
    this.map_open = false;
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceDetailsComponent, selectors: [["parking-space-details"]], inputs: { map_open: "map_open", space: "space", fav: "fav", active: "active" }, outputs: { activeChange: "activeChange", close: "close", toggleFav: "toggleFav" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 2, consts: [["empty_state", ""], [4, "ngIf", "ngIfElse"], ["image", "", 1, "relative", "w-full", "bg-base-200"], ["class", "absolute inset-0", 3, "images", 4, "ngIf"], ["icon", "", "matRipple", "", "close", "", 1, "absolute", "left-2", "top-2", "bg-base-200", "sm:hidden", 3, "click"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "right-2", "top-2", "bg-base-200", 3, "click"], [1, "h-1/2", "flex-1", "space-y-2", "overflow-auto", "p-2"], ["actions", "", 1, "z-0"], [1, "mb-2", "mt-4", "text-xl", "font-medium"], ["details", "", 1, "space-y-2"], [1, "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["map", "", "class", "relative mx-auto h-64 w-full overflow-hidden rounded border border-base-200 sm:h-48", 4, "ngIf"], [1, "border-t", "border-base-200", "p-2", "shadow", "sm:hidden"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "text-2xl"], [1, "absolute", "inset-0", 3, "images"], ["map", "", 1, "relative", "mx-auto", "h-64", "w-full", "overflow-hidden", "rounded", "border", "border-base-200", "sm:h-48"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "text-center", "opacity-30"]], template: function ParkingSpaceDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ParkingSpaceDetailsComponent_ng_container_0_Template, 38, 29, "ng-container", 1)(1, ParkingSpaceDetailsComponent_ng_template_1_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const empty_state_r3 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.space)("ngIfElse", empty_state_r3);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      TranslatePipe,
      MatRippleModule,
      MatRipple,
      InteractiveMapComponent,
      IconComponent,
      ImageCarouselComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 20rem;\n  height: 100%;\n  min-height: 65vh;\n}\n/*# sourceMappingURL=parking-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceDetailsComponent, { className: "ParkingSpaceDetailsComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-details.component.ts", lineNumber: 157 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-filters.component.ts
var _c026 = () => ({ standalone: true });
var _c117 = () => [];
function ParkingSpaceFiltersComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ParkingSpaceFiltersComponent_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "keyboard_arrow_left");
    \u0275\u0275elementEnd()();
  }
}
function ParkingSpaceFiltersComponent_mat_form_field_16_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
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
function ParkingSpaceFiltersComponent_mat_form_field_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 19)(1, "mat-select", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_mat_form_field_16_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275template(3, ParkingSpaceFiltersComponent_mat_form_field_16_mat_option_3_Template, 2, 2, "mat-option", 21);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(8, _c026))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 6, ctx_r1.regions));
  }
}
function ParkingSpaceFiltersComponent_mat_form_field_18_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
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
function ParkingSpaceFiltersComponent_mat_form_field_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 19)(1, "mat-select", 23);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_mat_form_field_18_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275template(5, ParkingSpaceFiltersComponent_mat_form_field_18_mat_option_5_Template, 2, 2, "mat-option", 21);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(2, 4, ctx_r1.building))("ngModelOptions", \u0275\u0275pureFunction0(12, _c026))("placeholder", ((tmp_3_0 = \u0275\u0275pipeBind1(3, 6, ctx_r1.building)) == null ? null : tmp_3_0.display_name) || ((tmp_3_0 = \u0275\u0275pipeBind1(4, 8, ctx_r1.building)) == null ? null : tmp_3_0.name));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 10, ctx_r1.buildings));
  }
}
function ParkingSpaceFiltersComponent_mat_form_field_20_mat_option_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 28);
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
function ParkingSpaceFiltersComponent_mat_form_field_20_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22)(1, "div", 25);
    \u0275\u0275template(2, ParkingSpaceFiltersComponent_mat_form_field_20_mat_option_4_div_2_Template, 5, 3, "div", 26);
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
function ParkingSpaceFiltersComponent_mat_form_field_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 19)(1, "mat-select", 24);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_mat_form_field_20_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275template(4, ParkingSpaceFiltersComponent_mat_form_field_20_mat_option_4_Template, 5, 3, "mat-option", 21);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(2, 4, ctx_r1.options)) == null ? null : tmp_1_0.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(10, _c026))("placeholder", \u0275\u0275pipeBind1(3, 6, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 8, ctx_r1.levels));
  }
}
function ParkingSpaceFiltersComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-checkbox", 30);
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_div_28_Template_mat_checkbox_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ all_day: $event }));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.form.value.all_day)("ngModelOptions", \u0275\u0275pureFunction0(5, _c026));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "COMMON.ALL_DAY"), " ");
  }
}
function ParkingSpaceFiltersComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 33);
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_div_29_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 32)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a-duration-field", 34);
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_div_29_Template_a_duration_field_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ duration: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 14, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(18, _c026))("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 16, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.duration)("ngModelOptions", \u0275\u0275pureFunction0(19, _c026))("time", (tmp_9_0 = ctx_r1.form.get("date")) == null ? null : tmp_9_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
  }
}
function ParkingSpaceFiltersComponent_section_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 35)(1, "h2", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 37)(5, "settings-toggle", 38);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_section_30_Template_settings_toggle_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_fav: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.FAVOURITES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(6, 6, "COMMON.FAVOURITES_ONLY"))("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(7, 8, ctx_r1.options)) == null ? null : tmp_3_0.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(10, _c026));
  }
}
function ParkingSpaceFiltersComponent_section_31_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-checkbox", 30);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_section_31_div_4_Template_mat_checkbox_ngModelChange_3_listener($event) {
      const feat_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r13, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const feat_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r13);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (((tmp_4_0 = \u0275\u0275pipeBind1(4, 3, ctx_r1.options)) == null ? null : tmp_4_0.features) || \u0275\u0275pureFunction0(5, _c117)).includes(feat_r13))("ngModelOptions", \u0275\u0275pureFunction0(6, _c026));
  }
}
function ParkingSpaceFiltersComponent_section_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 39)(1, "h2", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ParkingSpaceFiltersComponent_section_31_div_4_Template, 5, 7, "div", 40);
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
function ParkingSpaceFiltersComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 44);
    \u0275\u0275listener("click", function ParkingSpaceFiltersComponent_div_33_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
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
  get allow_all_day() {
    return !!this._settings.get("app.parking.allow_all_day") || !!this._settings.get("app.bookings.allow_all_day");
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.parking.available_period") || 90));
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
      const viewable_levels = level_list.filter((lvl) => lvl.tags.includes("parking"));
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
    this.\u0275fac = function ParkingSpaceFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpaceFiltersComponent)(\u0275\u0275directiveInject(MatBottomSheetRef, 8), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceFiltersComponent, selectors: [["parking-space-filters"]], inputs: { hide_levels: "hide_levels" }, decls: 34, vars: 37, consts: [[1, "flex", "items-center", "rounded-t-md", "border-b", "border-base-200", "pb-2", "sm:hidden"], [1, "flex-1", "pl-2"], ["icon", "", "matRipple", "", "name", "close-parking-filters", "class", "sm:hidden", 3, "click", 4, "ngIf"], [1, "flex-2", "text-center", "font-medium"], [1, "flex-1"], [1, "max-h-[65vh]", "w-full", "max-w-[100vw]", "divide-y", "divide-base-200", "overflow-y-auto", "overflow-x-hidden", "p-2", "sm:max-w-[30vw]", 3, "formGroup"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-[8rem]", "flex-1", "flex-col"], ["for", "location"], ["appearance", "outline", "class", "w-full", 4, "ngIf"], [1, "min-w-[256px]", "flex-1"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "to", "timezone"], ["class", "-mt-2 mb-2 flex justify-end", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["favs", "", "class", "space-y-2 pb-4", 4, "ngIf"], ["class", "space-y-2", "features", "", 4, "ngIf"], ["class", "w-full border-t border-base-200 px-2 py-2", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "close-parking-filters", 1, "sm:hidden", 3, "click"], ["appearance", "outline", 1, "w-full"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [1, "-mt-2", "mb-2", "flex", "justify-end"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "items-center", "space-x-2"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], [3, "ngModelChange", "ngModel", "ngModelOptions", "time", "max", "min", "step", "use_24hr", "timezone"], ["favs", "", 1, "space-y-2", "pb-4"], [1, "text-lg", "font-medium"], [1, "flex", "w-full", "items-center"], [1, "w-full", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], ["features", "", 1, "space-y-2"], ["class", "flex flex-wrap items-center space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], ["for", "feat", 1, "w-1/2", "flex-1"], [1, "w-full", "border-t", "border-base-200", "px-2", "py-2"], ["btn", "", "matRipple", "", "name", "apply-parking-filters", 1, "w-full", 3, "click"]], template: function ParkingSpaceFiltersComponent_Template(rf, ctx) {
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
        \u0275\u0275template(16, ParkingSpaceFiltersComponent_mat_form_field_16_Template, 5, 9, "mat-form-field", 10);
        \u0275\u0275pipe(17, "async");
        \u0275\u0275template(18, ParkingSpaceFiltersComponent_mat_form_field_18_Template, 7, 13, "mat-form-field", 10);
        \u0275\u0275pipe(19, "async");
        \u0275\u0275template(20, ParkingSpaceFiltersComponent_mat_form_field_20_Template, 6, 11, "mat-form-field", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 11)(22, "label");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "a-date-field", 12);
        \u0275\u0275listener("ngModelChange", function ParkingSpaceFiltersComponent_Template_a_date_field_ngModelChange_25_listener($event) {
          return ctx.form.patchValue({ date: $event });
        });
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, ParkingSpaceFiltersComponent_div_28_Template, 4, 6, "div", 13)(29, ParkingSpaceFiltersComponent_div_29_Template, 11, 20, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, ParkingSpaceFiltersComponent_section_30_Template, 8, 11, "section", 15)(31, ParkingSpaceFiltersComponent_section_31_Template, 6, 6, "section", 16);
        \u0275\u0275pipe(32, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, ParkingSpaceFiltersComponent_div_33_Template, 4, 3, "div", 17);
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_6_0;
        let tmp_18_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.can_close);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 20, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 22, "BOOKINGS.DETAILS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 24, "BOOKINGS.LOCATION"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.use_region && ((tmp_5_0 = \u0275\u0275pipeBind1(17, 26, ctx.regions)) == null ? null : tmp_5_0.length));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.use_region && ((tmp_6_0 = \u0275\u0275pipeBind1(19, 28, ctx.buildings)) == null ? null : tmp_6_0.length) > 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.hide_levels);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 30, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.form.getRawValue().date)("ngModelOptions", \u0275\u0275pureFunction0(36, _c026))("disabled", ctx.form.controls.date.disabled)("to", ctx.end_date)("timezone", ctx.timezone);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 32, "FORM.DATE_ERROR"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.allow_all_day && !ctx.form.controls.date.disabled);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.form.value.all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.hide_levels);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_18_0 = \u0275\u0275pipeBind1(32, 34, ctx.features)) == null ? null : tmp_18_0.length) && !ctx.hide_levels);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.can_close);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      MatRippleModule,
      MatRipple,
      TranslatePipe,
      MatCheckboxModule,
      MatCheckbox,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormsModule,
      NgModel
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=parking-filters.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceFiltersComponent, { className: "ParkingSpaceFiltersComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-filters.component.ts", lineNumber: 276 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-filters-display.component.ts
var _c027 = (a0) => ({ count: a0 });
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
    \u0275\u0275elementStart(4, "icon");
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
      const value = yield nextValueFrom(this._event_form.options);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceFiltersDisplayComponent, selectors: [["parking-space-filters-display"]], inputs: { view: "view" }, outputs: { viewChange: "viewChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 26, vars: 37, consts: [["actions", "", 1, "flex", "items-center", "space-x-2", "p-2", "sm:hidden"], ["matRipple", "", "filters", "", 1, "w-1/2", "flex-1", 3, "click"], [1, "flex", "items-center"], ["matRipple", "", "map", "", 1, "rounded-l", "rounded-r-none", 3, "click"], ["matRipple", "", "list", "", 1, "rounded-l-none", "rounded-r", 3, "click"], ["filters", "", 1, "flex", "w-[35rem]", "max-w-full", "flex-wrap", "items-center", "p-2", "sm:max-w-[35rem]"], ["filter-item", "", "zone", "", 4, "ngIf"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "count", ""], ["filter-item", "", 4, "ngFor", "ngForOf"], ["filter-item", "", "zone", ""], ["filter-item", ""], ["icon", "", "matRipple", "", 1, "-mr-4", 3, "click"]], template: function ParkingSpaceFiltersDisplayComponent_Template(rf, ctx) {
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
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 30, "CALENDAR_EVENT.SPACE_SELECT_SIZE_X", \u0275\u0275pureFunction1(35, _c027, ((tmp_8_0 = \u0275\u0275pipeBind1(22, 28, ctx.options)) == null ? null : tmp_8_0.capcaity) || 2)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", (tmp_9_0 = \u0275\u0275pipeBind1(25, 33, ctx.options)) == null ? null : tmp_9_0.features);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, DatePipe, IconComponent, TranslatePipe, MatRippleModule, MatRipple], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=parking-filters-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceFiltersDisplayComponent, { className: "ParkingSpaceFiltersDisplayComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-filters-display.component.ts", lineNumber: 103 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-list.component.ts
var _c028 = (a0) => ({ count: a0 });
function ParkingSpaceListComponent_ng_container_7_ul_1_li_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function ParkingSpaceListComponent_ng_container_7_ul_1_li_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function ParkingSpaceListComponent_ng_container_7_ul_1_li_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
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
    \u0275\u0275elementStart(10, "div", 16)(11, "icon", 17);
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
    \u0275\u0275elementStart(16, "icon", 19);
    \u0275\u0275text(17, "favorite");
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
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.isFavourite(space_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
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
    \u0275\u0275elementStart(0, "div", 23)(1, "p", 24);
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
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "mat-spinner", 26);
    \u0275\u0275elementStart(2, "p", 27);
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
    ]).pipe(map(([{ show_fav }, _]) => _.filter((i) => !show_fav || this.isFavourite(i.id)).sort((a, b) => {
      const a_fav = this.isFavourite(a.id) ? 1 : 0;
      const b_fav = this.isFavourite(b.id) ? 1 : 0;
      return b_fav - a_fav;
    })));
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceListComponent, selectors: [["parking-space-list"]], inputs: { active: "active", selected: "selected", favorites: "favorites" }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 13, vars: 15, consts: [["empty_state", ""], ["load_state", ""], ["placeholder", ""], [1, "font-bold"], ["count", "", 1, "mb-4", "text-sm", "opacity-60"], [4, "ngIf", "ngIfElse"], ["class", "list-style-none space-y-2", 4, "ngIf", "ngIfElse"], [1, "list-style-none", "space-y-2"], ["space", "", "class", "relative w-full rounded-lg border border-base-200 bg-base-100 p-2 shadow", 3, "!border-info", 4, "ngFor", "ngForOf"], ["space", "", 1, "relative", "w-full", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2", "shadow"], ["matRipple", "", "select", "", 1, "flex", "h-full", "w-full", "items-center", 3, "click"], [1, "relative", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "bg-base-200"], ["class", "absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-neutral bg-base-200 text-white", 4, "ngIf"], ["auth", "", "class", "h-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2"], [1, "mr-10", "truncate", "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "right-1", "top-1", 3, "click"], [3, "className"], [1, "absolute", "left-1", "top-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "border-neutral", "bg-base-200", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/car-placeholder.svg", 1, "m-auto"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "text-center", "opacity-30"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [3, "diameter"], [1, "opacity-30"]], template: function ParkingSpaceListComponent_Template(rf, ctx) {
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
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 8, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(13, _c028, ((tmp_3_0 = \u0275\u0275pipeBind1(5, 6, ctx.assets)) == null ? null : tmp_3_0.length) || 0)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(8, 11, ctx.loading))("ngIfElse", load_state_r6);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      AuthenticatedImageDirective
    ], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  overflow: auto;\n}\n/*# sourceMappingURL=parking-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceListComponent, { className: "ParkingSpaceListComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-list.component.ts", lineNumber: 141 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-map.component.ts
var _c029 = () => ({ controls: true });
var _c118 = () => ({ standalone: true });
function ParkingSpaceMapComponent_mat_form_field_1_mat_option_3_div_2_Template(rf, ctx) {
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
function ParkingSpaceMapComponent_mat_form_field_1_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7)(1, "div", 8);
    \u0275\u0275template(2, ParkingSpaceMapComponent_mat_form_field_1_mat_option_3_div_2_Template, 5, 3, "div", 9);
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
function ParkingSpaceMapComponent_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 4)(1, "mat-select", 5);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ParkingSpaceMapComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ParkingSpaceMapComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_ids: [$event.id] }));
    });
    \u0275\u0275template(3, ParkingSpaceMapComponent_mat_form_field_1_mat_option_3_Template, 5, 3, "mat-option", 6);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.level);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c118))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 6, ctx_r1.levels));
  }
}
var ParkingSpaceMapComponent = class _ParkingSpaceMapComponent extends AsyncHandler {
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
    this.parkings = this._state.available_resources;
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
      const viewable_levels = level_list.filter((lvl) => lvl.tags.includes("parking"));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.setOptions = (o) => this._state.setOptions(o);
    this.actions = this._state.available_resources.pipe(map((parkings) => parkings.map((parking) => ({
      id: parking.map_id || parking.id,
      action: ["touchend", "mouseup"],
      callback: () => this.selectParking(parking)
    }))));
    this.features = combineLatest([
      this._state.resources,
      this._state.available_resources
    ]).pipe(map(([space_list, available]) => {
      console.log("Parking:", space_list);
      return this._settings.get("app.parkings.hide_user") ? [] : space_list.map((space) => {
        const status = available.find((_) => _.id === space.id) ? "free" : this._state.resourceUserName(space.id) ? "busy" : "not-bookable";
        return {
          location: space.map_id,
          content: ExploreParkingInfoComponent,
          hover: true,
          data: __spreadProps(__spreadValues({}, space), {
            status
          })
        };
      });
    }));
    this.styles = combineLatest([
      this._state.resources,
      this._state.available_resources,
      this._change
    ]).pipe(map(([parkings, free_parkings]) => parkings.reduce((styles, parking) => {
      const colours = this._settings.get("app.explore.colors") || {};
      const status = this.active === parking.id ? "pending" : free_parkings.find((_) => _.id === parking.id) ? "free" : this._state.resourceUserName(parking.id) ? "busy" : "not-bookable";
      styles[`#${parking.map_id || parking.id}`] = {
        fill: colours[`parking-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
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
    this.timeout("check_level", () => __async(this, null, function* () {
      if (!this.level) {
        const list = yield nextValueFrom(this.levels);
        this._state.setOptions({ zone_id: list[0].id });
      }
    }));
  }
  ngOnChanges(changes) {
    if (changes.active)
      this._change.next(Date.now());
  }
  selectParking(parking) {
    this.onSelect.emit(parking);
    this.active = parking.id;
    this._change.next(Date.now());
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
    this.\u0275fac = function ParkingSpaceMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpaceMapComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceMapComponent, selectors: [["parking-space-map"]], inputs: { is_displayed: "is_displayed", active: "active" }, outputs: { onSelect: "onSelect" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 8, vars: 17, consts: [[1, "w-full", "border-b", "border-base-200", "bg-base-100", "p-2"], ["levels", "", "appearance", "outline", "class", "w-full", 4, "ngIf"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["levels", "", "appearance", "outline", 1, "w-full"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function ParkingSpaceMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ParkingSpaceMapComponent_mat_form_field_1_Template, 5, 9, "mat-form-field", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "interactive-map", 3);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "async");
        \u0275\u0275twoWayListener("zoomChange", function ParkingSpaceMapComponent_Template_interactive_map_zoomChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
          return $event;
        })("centerChange", function ParkingSpaceMapComponent_Template_interactive_map_centerChange_4_listener($event) {
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
        \u0275\u0275property("styles", \u0275\u0275pipeBind1(5, 10, ctx.styles))("features", \u0275\u0275pipeBind1(6, 12, ctx.features))("actions", \u0275\u0275pipeBind1(7, 14, ctx.actions))("options", \u0275\u0275pureFunction0(16, _c029));
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      InteractiveMapComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      NgControlStatus,
      NgModel
    ], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n/*# sourceMappingURL=parking-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceMapComponent, { className: "ParkingSpaceMapComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-map.component.ts", lineNumber: 93 });
})();

// libs/bookings/src/lib/parking-select-modal/parking-select-modal.component.ts
var _c030 = (a0) => ({ count: a0 });
function ParkingSpaceSelectModalComponent_parking_space_list_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "parking-space-list", 24);
    \u0275\u0275listener("toggleFav", function ParkingSpaceSelectModalComponent_parking_space_list_19_Template_parking_space_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFavourite($event));
    })("onSelect", function ParkingSpaceSelectModalComponent_parking_space_list_19_Template_parking_space_list_onSelect_0_listener($event) {
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
function ParkingSpaceSelectModalComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ParkingSpaceSelectModalComponent_button_22_Template_button_click_0_listener() {
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
function ParkingSpaceSelectModalComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "parking-space-map", 26);
    \u0275\u0275listener("onSelect", function ParkingSpaceSelectModalComponent_ng_template_44_Template_parking_space_map_onSelect_0_listener($event) {
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceSelectModalComponent, selectors: [["parking-space-select-modal"]], decls: 46, vars: 49, consts: [["map_view", ""], [1, "flex", "h-[100vh]", "w-[100vw]", "flex-col", "bg-base-100", "sm:relative", "sm:h-auto", "sm:w-auto"], [1, "flex", "w-full", "items-center", "space-x-4"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "hidden", "flex-1", "items-center", "justify-end", "sm:flex"], ["btn", "", "matRipple", "", "name", "view-desk-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-desk-list", 1, "rounded-l-none", "rounded-r", 3, "click"], [1, "flex", "h-[65vh]", "min-h-[65vh]", "w-full", "flex-1", "items-center", "divide-x", "divide-base-200", "overflow-hidden", "sm:max-h-[65vh]", "sm:max-w-[95vw]"], [1, "hidden", "h-full", "max-w-[20rem]", "sm:flex", "sm:h-[65vh]", "sm:max-h-full", 3, "hide_levels"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col", "items-center", "sm:h-[65vh]"], [1, "w-full", "border-b", "border-base-200", 3, "viewChange", "view"], ["class", "h-1/2 flex-1 bg-base-200", 3, "active", "selected", "favorites", "toggleFav", "onSelect", 4, "ngIf", "ngIfElse"], [1, "absolute", "z-20", "block", "h-full", "w-full", "bg-base-100", "sm:relative", "sm:flex", "sm:h-[65vh]", "sm:max-w-[20rem]", 3, "activeChange", "toggleFav", "close", "space", "active", "fav", "map_open"], [1, "flex", "w-full", "flex-col-reverse", "items-center", "justify-end", "border-t", "border-base-200", "p-2", "sm:hidden"], ["btn", "", "matRipple", "", "return", "", "class", "inverse w-full sm:hidden", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "save", "", 1, "w-full", "sm:mb-0", "sm:w-32", 3, "mat-dialog-close"], [1, "hidden", "w-full", "items-center", "justify-between", "border-t", "border-base-200", "p-2", "sm:flex"], ["btn", "", "matRipple", "", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "text-sm", "opacity-60"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "mr-1"], [1, "h-1/2", "flex-1", "bg-base-200", 3, "toggleFav", "onSelect", "active", "selected", "favorites"], ["btn", "", "matRipple", "", "return", "", 1, "inverse", "w-full", "sm:hidden", 3, "click"], [1, "h-1/2", "w-full", "flex-1", 3, "onSelect", "selected", "is_displayed"]], template: function ParkingSpaceSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "button", 3)(3, "icon");
        \u0275\u0275text(4, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "h3");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 4)(9, "button", 5);
        \u0275\u0275listener("click", function ParkingSpaceSelectModalComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.view = "map");
        });
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function ParkingSpaceSelectModalComponent_Template_button_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.view = "list");
        });
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "main", 7);
        \u0275\u0275element(16, "parking-space-filters", 8);
        \u0275\u0275elementStart(17, "div", 9)(18, "parking-space-filters-display", 10);
        \u0275\u0275twoWayListener("viewChange", function ParkingSpaceSelectModalComponent_Template_parking_space_filters_display_viewChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.view, $event) || (ctx.view = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, ParkingSpaceSelectModalComponent_parking_space_list_19_Template, 1, 3, "parking-space-list", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "parking-space-details", 12);
        \u0275\u0275listener("activeChange", function ParkingSpaceSelectModalComponent_Template_parking_space_details_activeChange_20_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSelected(ctx.displayed, $event));
        })("toggleFav", function ParkingSpaceSelectModalComponent_Template_parking_space_details_toggleFav_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleFavourite(ctx.displayed));
        })("close", function ParkingSpaceSelectModalComponent_Template_parking_space_details_close_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.displayed = null);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "footer", 13);
        \u0275\u0275template(22, ParkingSpaceSelectModalComponent_button_22_Template, 3, 3, "button", 14);
        \u0275\u0275elementStart(23, "button", 15);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "footer", 16)(27, "button", 17)(28, "div", 18)(29, "icon", 19);
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
        \u0275\u0275listener("click", function ParkingSpaceSelectModalComponent_Template_button_click_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id)));
        });
        \u0275\u0275elementStart(38, "div", 18)(39, "icon", 19);
        \u0275\u0275text(40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 23);
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(44, ParkingSpaceSelectModalComponent_ng_template_44_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const map_view_r6 = \u0275\u0275reference(45);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 32, "BOOKINGS.PARKING_FIND"));
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
        \u0275\u0275property("space", ctx.displayed)("active", ctx.selected_ids.includes(ctx.displayed == null ? null : ctx.displayed.id))("fav", ctx.displayed && ctx.favorites.includes(ctx.displayed == null ? null : ctx.displayed.id))("map_open", ctx.view === "map");
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
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(36, 42, "BOOKINGS.PARKING_ADDED_COUNT", \u0275\u0275pureFunction1(47, _c030, ctx.selected.length)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
        \u0275\u0275property("disabled", !ctx.displayed);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 45, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      ParkingSpaceMapComponent,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      ParkingSpaceDetailsComponent,
      ParkingSpaceListComponent,
      ParkingSpaceFiltersComponent,
      ParkingSpaceFiltersDisplayComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceSelectModalComponent, { className: "ParkingSpaceSelectModalComponent", filePath: "libs/bookings/src/lib/parking-select-modal/parking-select-modal.component.ts", lineNumber: 189 });
})();

// libs/bookings/src/lib/new-parking-select-modal/new-parking-details.component.ts
var _c031 = () => ({ disable_pan: true, disable_zoom: true });
function NewParkingDetailsComponent_ng_container_0_image_carousel_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "image-carousel", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("images", ctx_r1.space.images);
  }
}
function NewParkingDetailsComponent_ng_container_0_section_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14);
    \u0275\u0275element(1, "interactive-map", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.map_url)("focus", ctx_r1.space.map_id)("features", ctx_r1.features)("options", \u0275\u0275pureFunction0(4, _c031));
  }
}
function NewParkingDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 2);
    \u0275\u0275template(2, NewParkingDetailsComponent_ng_container_0_image_carousel_2_Template, 1, 1, "image-carousel", 3);
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function NewParkingDetailsComponent_ng_container_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function NewParkingDetailsComponent_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(7, "icon");
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
    \u0275\u0275elementStart(18, "div", 11)(19, "icon");
    \u0275\u0275text(20, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 11)(24, "icon");
    \u0275\u0275text(25, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(28, "hr");
    \u0275\u0275template(29, NewParkingDetailsComponent_ng_container_0_section_29_Template, 2, 5, "section", 12);
    \u0275\u0275elementEnd();
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 21, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.level == null ? null : ctx_r1.level.display_name) || (ctx_r1.level == null ? null : ctx_r1.level.name), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.building == null ? null : ctx_r1.building.address) || (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.hide_map);
  }
}
function NewParkingDetailsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "p", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.PARKING_SELECT_MSG"), " ");
  }
}
var NewParkingDetailsComponent = class _NewParkingDetailsComponent {
  get level() {
    return this._org.levelWithID([this.space?.zone.id]) || this.space?.zone;
  }
  get building() {
    return this._org.buildings.find((_) => this.space?.zone.id === _.id || this.space?.zone.parent_id === _.id);
  }
  constructor(_org) {
    this._org = _org;
    this.hide_map = false;
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
    this.\u0275fac = function NewParkingDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewParkingDetailsComponent)(\u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingDetailsComponent, selectors: [["new-parking-space-details"]], inputs: { hide_map: "hide_map", space: "space", fav: "fav", active: "active" }, outputs: { activeChange: "activeChange", close: "close", toggleFav: "toggleFav" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 2, consts: [["empty_state", ""], [4, "ngIf", "ngIfElse"], ["image", "", 1, "relative", "w-full", "bg-base-200"], ["class", "absolute inset-0", 3, "images", 4, "ngIf"], ["icon", "", "matRipple", "", "close", "", 1, "absolute", "left-2", "top-2", "bg-base-200", "sm:hidden", 3, "click"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "right-2", "top-2", "bg-base-200", 3, "click"], [1, "h-1/2", "flex-1", "space-y-2", "p-2"], ["actions", "", 1, "z-0"], [1, "mb-2", "mt-4", "text-xl", "font-medium"], ["details", "", 1, "space-y-2"], [1, "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["map", "", "class", "relative mx-auto h-64 w-full overflow-hidden rounded border border-base-200 sm:h-48", 4, "ngIf"], [1, "absolute", "inset-0", 3, "images"], ["map", "", 1, "relative", "mx-auto", "h-64", "w-full", "overflow-hidden", "rounded", "border", "border-base-200", "sm:h-48"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], ["empty", "", 1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "text-center", "opacity-30"]], template: function NewParkingDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NewParkingDetailsComponent_ng_container_0_Template, 30, 23, "ng-container", 1)(1, NewParkingDetailsComponent_ng_template_1_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const empty_state_r3 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.space)("ngIfElse", empty_state_r3);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      TranslatePipe,
      MatRippleModule,
      MatRipple,
      InteractiveMapComponent,
      IconComponent,
      ImageCarouselComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingDetailsComponent, { className: "NewParkingDetailsComponent", filePath: "libs/bookings/src/lib/new-parking-select-modal/new-parking-details.component.ts", lineNumber: 123 });
})();

// libs/bookings/src/lib/new-parking-select-modal/new-parking-filters-display.component.ts
var _c032 = (a0) => ({ count: a0 });
function NewParkingFiltersDisplayComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.location, " ");
  }
}
function NewParkingFiltersDisplayComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 8);
    \u0275\u0275listener("click", function NewParkingFiltersDisplayComponent_div_13_Template_button_click_3_listener() {
      const feat_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeFeature(feat_r3));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r3);
  }
}
var NewParkingFiltersDisplayComponent = class _NewParkingFiltersDisplayComponent extends AsyncHandler {
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
  constructor(_event_form, _org, _settings) {
    super();
    this._event_form = _event_form;
    this._org = _org;
    this._settings = _settings;
    this.view = "list";
    this.viewChange = new EventEmitter();
    this.options = this._event_form.options;
    this.location = "";
  }
  ngOnInit() {
    this.subscription("opts", this.options.subscribe(({ zone_id }) => this._updateLocation([zone_id])));
  }
  removeFeature(feat) {
    return __async(this, null, function* () {
      const value = yield nextValueFrom(this._event_form.options);
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
    this.\u0275fac = function NewParkingFiltersDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewParkingFiltersDisplayComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingFiltersDisplayComponent, selectors: [["new-parking-space-filters-display"]], inputs: { view: "view" }, outputs: { viewChange: "viewChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 15, vars: 24, consts: [["filters", "", 1, "sticky", "-top-1", "z-20", "-mx-1", "!mb-4", "flex", "w-[calc(100%+0.5rem)]", "flex-wrap", "items-center", "rounded", "border", "border-base-300", "bg-base-100", "p-1", "!pr-10", "sm:!pr-1"], ["filter-item", "", "zone", "", 4, "ngIf"], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "count", ""], ["filter-item", "", 4, "ngFor", "ngForOf"], ["filter-item", "", "zone", ""], ["filter-item", ""], ["icon", "", "matRipple", "", 1, "-mr-4", 3, "click"]], template: function NewParkingFiltersDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275template(1, NewParkingFiltersDisplayComponent_div_1_Template, 2, 1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "date");
        \u0275\u0275pipe(8, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 4);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "async");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, NewParkingFiltersDisplayComponent_div_13_Template, 6, 1, "div", 5);
        \u0275\u0275pipe(14, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.location);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 6, ctx.start, "mediumDate"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(7, 9, ctx.start, ctx.time_format), " \u2014 ", \u0275\u0275pipeBind2(8, 12, ctx.end, ctx.time_format), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 17, "CALENDAR_EVENT.SPACE_SELECT_SIZE_X", \u0275\u0275pureFunction1(22, _c032, ((tmp_3_0 = \u0275\u0275pipeBind1(11, 15, ctx.options)) == null ? null : tmp_3_0.capcaity) || 2)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", (tmp_4_0 = \u0275\u0275pipeBind1(14, 20, ctx.options)) == null ? null : tmp_4_0.features);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, DatePipe, IconComponent, TranslatePipe, MatRippleModule, MatRipple], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=new-parking-filters-display.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingFiltersDisplayComponent, { className: "NewParkingFiltersDisplayComponent", filePath: "libs/bookings/src/lib/new-parking-select-modal/new-parking-filters-display.component.ts", lineNumber: 70 });
})();

// libs/bookings/src/lib/new-parking-select-modal/new-parking-filters.component.ts
var _c033 = () => ({ standalone: true });
var _c119 = () => [];
function NewParkingFiltersComponent_mat_form_field_13_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r3 = ctx.$implicit;
    \u0275\u0275property("value", reg_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r3.display_name || reg_r3.name, " ");
  }
}
function NewParkingFiltersComponent_mat_form_field_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 15)(1, "mat-select", 16);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_mat_form_field_13_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275template(3, NewParkingFiltersComponent_mat_form_field_13_mat_option_3_Template, 2, 2, "mat-option", 17);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region)("ngModelOptions", \u0275\u0275pureFunction0(8, _c033))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 6, ctx_r1.regions));
  }
}
function NewParkingFiltersComponent_mat_form_field_15_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r5 = ctx.$implicit;
    \u0275\u0275property("value", bld_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r5.display_name || bld_r5.name, " ");
  }
}
function NewParkingFiltersComponent_mat_form_field_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 15)(1, "mat-select", 19);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_mat_form_field_15_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275template(5, NewParkingFiltersComponent_mat_form_field_15_mat_option_5_Template, 2, 2, "mat-option", 17);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(2, 4, ctx_r1.building))("ngModelOptions", \u0275\u0275pureFunction0(12, _c033))("placeholder", ((tmp_3_0 = \u0275\u0275pipeBind1(3, 6, ctx_r1.building)) == null ? null : tmp_3_0.display_name) || ((tmp_3_0 = \u0275\u0275pipeBind1(4, 8, ctx_r1.building)) == null ? null : tmp_3_0.name));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 10, ctx_r1.buildings));
  }
}
function NewParkingFiltersComponent_mat_form_field_17_mat_option_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const lvl_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = \u0275\u0275pipeBind1(2, 1, lvl_r7.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function NewParkingFiltersComponent_mat_form_field_17_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18)(1, "div", 21);
    \u0275\u0275template(2, NewParkingFiltersComponent_mat_form_field_17_mat_option_4_div_2_Template, 5, 3, "div", 22);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r7.display_name || lvl_r7.name, " ");
  }
}
function NewParkingFiltersComponent_mat_form_field_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 15)(1, "mat-select", 20);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_mat_form_field_17_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event }));
    });
    \u0275\u0275template(4, NewParkingFiltersComponent_mat_form_field_17_mat_option_4_Template, 5, 3, "mat-option", 17);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(2, 4, ctx_r1.options)) == null ? null : tmp_1_0.zone_id)("ngModelOptions", \u0275\u0275pureFunction0(10, _c033))("placeholder", \u0275\u0275pipeBind1(3, 6, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 8, ctx_r1.levels));
  }
}
function NewParkingFiltersComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-checkbox", 26);
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_div_25_Template_mat_checkbox_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ all_day: $event }));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.form.value.all_day)("ngModelOptions", \u0275\u0275pureFunction0(5, _c033));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "COMMON.ALL_DAY"), " ");
  }
}
function NewParkingFiltersComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 29);
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_div_26_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 28)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a-duration-field", 30);
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_div_26_Template_a_duration_field_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ duration: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 14, "FORM.TIME_START"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(18, _c033))("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 16, "FORM.TIME_END"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.duration)("ngModelOptions", \u0275\u0275pureFunction0(19, _c033))("time", (tmp_9_0 = ctx_r1.form.get("date")) == null ? null : tmp_9_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
  }
}
function NewParkingFiltersComponent_section_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 31)(1, "h2", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "settings-toggle", 34);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_section_27_Template_settings_toggle_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_fav: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.FAVOURITES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(6, 6, "COMMON.FAVOURITES_ONLY"))("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(7, 8, ctx_r1.options)) == null ? null : tmp_3_0.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(10, _c033));
  }
}
function NewParkingFiltersComponent_section_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-checkbox", 26);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_section_28_div_4_Template_mat_checkbox_ngModelChange_3_listener($event) {
      const feat_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFeature(feat_r12, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const feat_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (((tmp_4_0 = \u0275\u0275pipeBind1(4, 3, ctx_r1.options)) == null ? null : tmp_4_0.features) || \u0275\u0275pureFunction0(5, _c119)).includes(feat_r12))("ngModelOptions", \u0275\u0275pureFunction0(6, _c033));
  }
}
function NewParkingFiltersComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 35)(1, "h2", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, NewParkingFiltersComponent_section_28_div_4_Template, 5, 7, "div", 36);
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
function NewParkingFiltersComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 40);
    \u0275\u0275listener("click", function NewParkingFiltersComponent_div_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
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
var NewParkingFiltersComponent = class _NewParkingFiltersComponent {
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
  get allow_all_day() {
    return !!this._settings.get("app.parking.allow_all_day") || !!this._settings.get("app.bookings.allow_all_day");
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.parking.available_period") || 90));
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
  constructor(_state, _org, _settings) {
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
      const viewable_levels = level_list.filter((lvl) => lvl.tags.includes("parking"));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e) => this._state.setFeature(f, e);
    this.setLevel = (l) => {
    };
    this.setRegion = (r) => this._org.region = r;
  }
  static {
    this.\u0275fac = function NewParkingFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewParkingFiltersComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingFiltersComponent, selectors: [["new-parking-space-filters"]], inputs: { hide_levels: "hide_levels" }, decls: 31, vars: 36, consts: [[1, "sticky", "top-0", "z-10", "flex", "items-center", "border-b", "border-base-300", "bg-base-100", "px-4", "py-4"], [1, "text-xl", "font-medium"], [1, "relative", "z-0", "w-full", "divide-y", "divide-base-200", "p-2", 3, "formGroup"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-[8rem]", "flex-1", "flex-col"], ["for", "location"], ["appearance", "outline", "class", "w-full", 4, "ngIf"], [1, "min-w-[256px]", "flex-1"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "to", "timezone"], ["class", "-mt-2 mb-2 flex justify-end", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["favs", "", "class", "space-y-2 pb-4", 4, "ngIf"], ["class", "space-y-2", "features", "", 4, "ngIf"], ["class", "w-full border-t border-base-200 px-2 py-2", 4, "ngIf"], ["appearance", "outline", 1, "w-full"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [1, "-mt-2", "mb-2", "flex", "justify-end"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "items-center", "space-x-2"], [1, "w-1/3", "flex-1"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], [3, "ngModelChange", "ngModel", "ngModelOptions", "time", "max", "min", "step", "use_24hr", "timezone"], ["favs", "", 1, "space-y-2", "pb-4"], [1, "text-lg", "font-medium"], [1, "flex", "w-full", "items-center"], [1, "w-full", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], ["features", "", 1, "space-y-2"], ["class", "flex flex-wrap items-center space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "space-x-2"], ["for", "feat", 1, "w-1/2", "flex-1"], [1, "w-full", "border-t", "border-base-200", "px-2", "py-2"], ["btn", "", "matRipple", "", "name", "apply-parking-filters", 1, "w-full", 3, "click"]], template: function NewParkingFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "form", 2)(5, "section", 3)(6, "h2", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5)(10, "label", 6);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, NewParkingFiltersComponent_mat_form_field_13_Template, 5, 9, "mat-form-field", 7);
        \u0275\u0275pipe(14, "async");
        \u0275\u0275template(15, NewParkingFiltersComponent_mat_form_field_15_Template, 7, 13, "mat-form-field", 7);
        \u0275\u0275pipe(16, "async");
        \u0275\u0275template(17, NewParkingFiltersComponent_mat_form_field_17_Template, 6, 11, "mat-form-field", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 8)(19, "label");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "a-date-field", 9);
        \u0275\u0275listener("ngModelChange", function NewParkingFiltersComponent_Template_a_date_field_ngModelChange_22_listener($event) {
          return ctx.form.patchValue({ date: $event });
        });
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, NewParkingFiltersComponent_div_25_Template, 4, 6, "div", 10)(26, NewParkingFiltersComponent_div_26_Template, 11, 20, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, NewParkingFiltersComponent_section_27_Template, 8, 11, "section", 12)(28, NewParkingFiltersComponent_section_28_Template, 6, 6, "section", 13);
        \u0275\u0275pipe(29, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, NewParkingFiltersComponent_div_30_Template, 4, 3, "div", 14);
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        let tmp_17_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 19, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 21, "BOOKINGS.DETAILS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 23, "BOOKINGS.LOCATION"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.use_region && ((tmp_4_0 = \u0275\u0275pipeBind1(14, 25, ctx.regions)) == null ? null : tmp_4_0.length));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.use_region && ((tmp_5_0 = \u0275\u0275pipeBind1(16, 27, ctx.buildings)) == null ? null : tmp_5_0.length) > 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.hide_levels);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 29, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.form.getRawValue().date)("ngModelOptions", \u0275\u0275pureFunction0(35, _c033))("disabled", ctx.form.controls.date.disabled)("to", ctx.end_date)("timezone", ctx.timezone);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 31, "FORM.DATE_ERROR"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.allow_all_day && !ctx.form.controls.date.disabled);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.form.value.all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.hide_levels);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_17_0 = \u0275\u0275pipeBind1(29, 33, ctx.features)) == null ? null : tmp_17_0.length) && !ctx.hide_levels);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.can_close);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      MatRippleModule,
      MatRipple,
      TranslatePipe,
      MatCheckboxModule,
      MatCheckbox,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormsModule,
      NgModel
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=new-parking-filters.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingFiltersComponent, { className: "NewParkingFiltersComponent", filePath: "libs/bookings/src/lib/new-parking-select-modal/new-parking-filters.component.ts", lineNumber: 262 });
})();

// libs/bookings/src/lib/new-parking-select-modal/new-parking-list.component.ts
var _c034 = (a0) => ({ count: a0 });
function NewParkingListComponent_ng_container_8_ul_1_li_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function NewParkingListComponent_ng_container_8_ul_1_li_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function NewParkingListComponent_ng_container_8_ul_1_li_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
}
function NewParkingListComponent_ng_container_8_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "button", 10);
    \u0275\u0275listener("click", function NewParkingListComponent_ng_container_8_ul_1_li_1_Template_button_click_1_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectSpace(space_r2));
    });
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275template(3, NewParkingListComponent_ng_container_8_ul_1_li_1_div_3_Template, 3, 0, "div", 12)(4, NewParkingListComponent_ng_container_8_ul_1_li_1_img_4_Template, 1, 1, "img", 13)(5, NewParkingListComponent_ng_container_8_ul_1_li_1_ng_template_5_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16)(11, "icon", 17);
    \u0275\u0275text(12, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "button", 18);
    \u0275\u0275listener("click", function NewParkingListComponent_ng_container_8_ul_1_li_1_Template_button_click_15_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(space_r2));
    });
    \u0275\u0275elementStart(16, "icon", 19);
    \u0275\u0275text(17, "favorite");
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
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.isFavourite(space_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
function NewParkingListComponent_ng_container_8_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275template(1, NewParkingListComponent_ng_container_8_ul_1_li_1_Template, 18, 10, "li", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r2.assets));
  }
}
function NewParkingListComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NewParkingListComponent_ng_container_8_ul_1_Template, 3, 3, "ul", 6);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    const empty_state_r5 = \u0275\u0275reference(11);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(2, 2, ctx_r2.assets)) == null ? null : tmp_3_0.length)("ngIfElse", empty_state_r5);
  }
}
function NewParkingListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "p", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.PARKING_LIST_EMPTY"), " ");
  }
}
function NewParkingListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "mat-spinner", 26);
    \u0275\u0275elementStart(2, "p", 27);
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
var NewParkingListComponent = class _NewParkingListComponent {
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
    ]).pipe(map(([{ show_fav }, _]) => _.filter((i) => !show_fav || this.isFavourite(i.id)).sort((a, b) => {
      const a_fav = this.isFavourite(a.id) ? 1 : 0;
      const b_fav = this.isFavourite(b.id) ? 1 : 0;
      return b_fav - a_fav;
    })));
    this.loading = this._form.loading;
  }
  isFavourite(space_id) {
    return this.favorites.includes(space_id);
  }
  selectSpace(space) {
    this.onSelect.emit(space);
  }
  static {
    this.\u0275fac = function NewParkingListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewParkingListComponent)(\u0275\u0275directiveInject(BookingFormService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingListComponent, selectors: [["new-parking-space-list"]], inputs: { active: "active", selected: "selected", favorites: "favorites" }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 14, vars: 18, consts: [["empty_state", ""], ["load_state", ""], ["placeholder", ""], [1, "px-2", "font-bold"], ["count", "", 1, "mb-4", "px-2", "text-sm", "opacity-60"], [4, "ngIf", "ngIfElse"], ["class", "list-style-none space-y-2", 4, "ngIf", "ngIfElse"], [1, "list-style-none", "space-y-2"], ["space", "", "class", "relative w-full rounded-lg border border-base-200 bg-base-100 p-2 shadow", 3, "!border-info", 4, "ngFor", "ngForOf"], ["space", "", 1, "relative", "w-full", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2", "shadow"], ["matRipple", "", "select", "", 1, "flex", "h-full", "w-full", "items-center", 3, "click"], [1, "relative", "mr-4", "flex", "h-20", "w-20", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "bg-base-200"], ["class", "absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-neutral bg-base-200 text-white", 4, "ngIf"], ["auth", "", "class", "h-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2"], [1, "mr-10", "truncate", "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "right-1", "top-1", 3, "click"], [3, "className"], [1, "absolute", "left-1", "top-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "border-neutral", "bg-base-200", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/car-placeholder.svg", 1, "m-auto"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "text-center", "opacity-30"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [3, "diameter"], [1, "opacity-30"]], template: function NewParkingListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3", 3);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, NewParkingListComponent_ng_container_8_Template, 3, 4, "ng-container", 5);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275template(10, NewParkingListComponent_ng_template_10_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, NewParkingListComponent_ng_template_12_Template, 5, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_3_0;
        const load_state_r6 = \u0275\u0275reference(13);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "COMMON.RESULTS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(7, 10, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(16, _c034, ((tmp_3_0 = \u0275\u0275pipeBind1(5, 6, ctx.assets)) == null ? null : tmp_3_0.length) || 0), ((tmp_3_0 = \u0275\u0275pipeBind1(6, 8, ctx.assets)) == null ? null : tmp_3_0.length) || 0), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(9, 14, ctx.loading))("ngIfElse", load_state_r6);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      AuthenticatedImageDirective
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingListComponent, { className: "NewParkingListComponent", filePath: "libs/bookings/src/lib/new-parking-select-modal/new-parking-list.component.ts", lineNumber: 134 });
})();

// libs/bookings/src/lib/new-parking-select-modal/new-parking-map.component.ts
var _c035 = () => ({ controls: true });
var _c120 = () => ({ standalone: true });
function NewParkingMapComponent_div_0_mat_option_4_div_2_Template(rf, ctx) {
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
function NewParkingMapComponent_div_0_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7)(1, "div", 8);
    \u0275\u0275template(2, NewParkingMapComponent_div_0_mat_option_4_div_2_Template, 5, 3, "div", 9);
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
function NewParkingMapComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-form-field", 4)(2, "mat-select", 5);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function NewParkingMapComponent_div_0_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NewParkingMapComponent_div_0_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_ids: [$event.id] }));
    });
    \u0275\u0275template(4, NewParkingMapComponent_div_0_mat_option_4_Template, 5, 3, "mat-option", 6);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.level);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c120))("placeholder", \u0275\u0275pipeBind1(3, 4, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 6, ctx_r1.levels));
  }
}
var NewParkingMapComponent = class _NewParkingMapComponent extends AsyncHandler {
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
    this.parkings = this._state.available_resources;
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
      const viewable_levels = level_list.filter((lvl) => lvl.tags.includes("parking"));
      if (!this.level && viewable_levels.length) {
        this.level = viewable_levels[0];
      }
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.setOptions = (o) => this._state.setOptions(o);
    this.actions = this._state.available_resources.pipe(map((parkings) => parkings.map((parking) => ({
      id: parking.map_id || parking.id,
      action: ["touchend", "mouseup"],
      callback: () => this.selectParking(parking)
    }))));
    this.features = combineLatest([
      this._state.resources,
      this._state.available_resources
    ]).pipe(map(([space_list, available]) => {
      console.log("Parking:", space_list);
      return this._settings.get("app.parkings.hide_user") ? [] : space_list.map((space) => {
        const status = available.find((_) => _.id === space.id) ? "free" : this._state.resourceUserName(space.id) ? "busy" : "not-bookable";
        return {
          location: space.map_id,
          content: ExploreParkingInfoComponent,
          hover: true,
          data: __spreadProps(__spreadValues({}, space), {
            status
          })
        };
      });
    }));
    this.styles = combineLatest([
      this._state.resources,
      this._state.available_resources,
      this._change
    ]).pipe(map(([parkings, free_parkings]) => parkings.reduce((styles, parking) => {
      const colours = this._settings.get("app.explore.colors") || {};
      const status = this.active === parking.id ? "pending" : free_parkings.find((_) => _.id === parking.id) ? "free" : this._state.resourceUserName(parking.id) ? "busy" : "not-bookable";
      styles[`#${parking.map_id || parking.id}`] = {
        fill: colours[`parking-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
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
    this.timeout("check_level", () => __async(this, null, function* () {
      if (!this.level) {
        const list = yield nextValueFrom(this.levels);
        if (list.length <= 0)
          return;
        this._state.setOptions({ zone_id: list[0].id });
      }
    }));
  }
  ngOnChanges(changes) {
    if (changes.active)
      this._change.next(Date.now());
  }
  selectParking(parking) {
    this.onSelect.emit(parking);
    this.active = parking.id;
    this._change.next(Date.now());
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
    this.\u0275fac = function NewParkingMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewParkingMapComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingMapComponent, selectors: [["new-parking-space-map"]], inputs: { is_displayed: "is_displayed", active: "active" }, outputs: { onSelect: "onSelect" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 7, vars: 17, consts: [["class", "w-full border-b border-base-200 bg-base-100 p-2", 4, "ngIf"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], [1, "w-full", "border-b", "border-base-200", "bg-base-100", "p-2"], ["levels", "", "appearance", "outline", 1, "no-subscript", "w-full"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function NewParkingMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NewParkingMapComponent_div_0_Template, 6, 9, "div", 0);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275elementStart(2, "div", 1)(3, "interactive-map", 2);
        \u0275\u0275pipe(4, "async");
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275twoWayListener("zoomChange", function NewParkingMapComponent_Template_interactive_map_zoomChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
          return $event;
        })("centerChange", function NewParkingMapComponent_Template_interactive_map_centerChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.center, $event) || (ctx.center = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275property("ngIf", (tmp_0_0 = \u0275\u0275pipeBind1(1, 8, ctx.levels)) == null ? null : tmp_0_0.length);
        \u0275\u0275advance(3);
        \u0275\u0275property("src", ctx.map_url);
        \u0275\u0275twoWayProperty("zoom", ctx.zoom)("center", ctx.center);
        \u0275\u0275property("styles", \u0275\u0275pipeBind1(4, 10, ctx.styles))("features", \u0275\u0275pipeBind1(5, 12, ctx.features))("actions", \u0275\u0275pipeBind1(6, 14, ctx.actions))("options", \u0275\u0275pureFunction0(16, _c035));
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      AsyncPipe,
      InteractiveMapComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      NgControlStatus,
      NgModel
    ], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=new-parking-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingMapComponent, { className: "NewParkingMapComponent", filePath: "libs/bookings/src/lib/new-parking-select-modal/new-parking-map.component.ts", lineNumber: 91 });
})();

// libs/bookings/src/lib/new-parking-select-modal/new-parking-select-modal.component.ts
function NewParkingSelectModalComponent_new_parking_space_filters_display_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-parking-space-filters-display", 25);
    \u0275\u0275twoWayListener("viewChange", function NewParkingSelectModalComponent_new_parking_space_filters_display_21_Template_new_parking_space_filters_display_viewChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.view, $event) || (ctx_r2.view = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("view", ctx_r2.view);
  }
}
function NewParkingSelectModalComponent_new_parking_space_list_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-parking-space-list", 26);
    \u0275\u0275listener("toggleFav", function NewParkingSelectModalComponent_new_parking_space_list_22_Template_new_parking_space_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFavourite($event));
    })("onSelect", function NewParkingSelectModalComponent_new_parking_space_list_22_Template_new_parking_space_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r4);
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
function NewParkingSelectModalComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function NewParkingSelectModalComponent_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_filters = !ctx_r2.show_filters);
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.show_filters ? "close" : "filter_list");
  }
}
function NewParkingSelectModalComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "new-parking-space-map", 28);
    \u0275\u0275listener("onSelect", function NewParkingSelectModalComponent_ng_template_41_Template_new_parking_space_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r6);
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
var FAV_PARKING_KEY2 = "favourite_parking_spaces";
var NewParkingSelectModalComponent = class _NewParkingSelectModalComponent {
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get favorites() {
    return this._settings.get(FAV_PARKING_KEY2) || [];
  }
  constructor(_dialog_ref, _settings, _event_form, _data) {
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this._event_form = _event_form;
    this._data = _data;
    this.show_filters = false;
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
      this._settings.saveUserSetting(FAV_PARKING_KEY2, [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_PARKING_KEY2, fav_list.filter((_) => _ !== item.id));
    }
  }
  static {
    this.\u0275fac = function NewParkingSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewParkingSelectModalComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingSelectModalComponent, selectors: [["new-parking-select-modal"]], decls: 43, vars: 57, consts: [["map_view", ""], [1, "flex", "h-screen", "w-screen", "flex-col", "space-y-2", "overflow-hidden", "bg-base-100", "p-2", "sm:h-auto", "sm:w-auto"], [1, "flex", "h-14", "w-full", "items-center", "space-x-2", "rounded", "border-none", "bg-base-200", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], [1, "flex", "divide-x", "divide-secondary", "rounded", "border", "border-secondary"], ["icon", "", "matRipple", "", 1, "rounded-l", "rounded-r-none", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "rounded-l-none", "rounded-r", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "h-1/2", "flex-1", "sm:h-[65vh]", "sm:flex-none", "sm:space-x-2"], [1, "h-full", "w-full", "overflow-y-auto", "overflow-x-hidden", "rounded", "border", "border-base-300", "shadow", "sm:block", "sm:w-[20rem]"], [3, "hide_levels"], [1, "h-full", "w-full", "overflow-auto", "rounded", "border", "border-base-300", "bg-base-200", "sm:w-[20rem]", "lg:block"], [3, "view", "viewChange", 4, "ngIf"], [3, "active", "selected", "favorites", "toggleFav", "onSelect", 4, "ngIf", "ngIfElse"], [1, "h-full", "w-full", "overflow-auto", "rounded", "border", "border-base-300", "shadow", "sm:w-[20rem]", "lg:block"], [3, "activeChange", "toggleFav", "close", "space", "active", "hide_map", "fav"], ["icon", "", "matRipple", "", "class", "absolute right-2 top-3 z-20 border border-base-200 bg-base-100 sm:hidden", 3, "click", 4, "ngIf"], [1, "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded", "border-none", "bg-base-200", "p-2"], ["btn", "", "matRipple", "", "name", "parking-return", 1, "inverse", "bg-base-100", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", "name", "toggle-parking", 3, "click", "disabled"], [1, "flex", "items-center"], [1, "mr-1"], [3, "viewChange", "view"], [3, "toggleFav", "onSelect", "active", "selected", "favorites"], ["icon", "", "matRipple", "", 1, "absolute", "right-2", "top-3", "z-20", "border", "border-base-200", "bg-base-100", "sm:hidden", 3, "click"], [1, "h-full", "w-full", 3, "onSelect", "is_displayed", "active"]], template: function NewParkingSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "h2", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("click", function NewParkingSelectModalComponent_Template_button_click_6_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.view = "list");
        });
        \u0275\u0275elementStart(8, "icon");
        \u0275\u0275text(9, "list");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "button", 6);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275listener("click", function NewParkingSelectModalComponent_Template_button_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.view = "map");
        });
        \u0275\u0275elementStart(12, "icon");
        \u0275\u0275text(13, "map");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "button", 7)(15, "icon");
        \u0275\u0275text(16, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "main", 8)(18, "div", 9);
        \u0275\u0275element(19, "new-parking-space-filters", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 11);
        \u0275\u0275template(21, NewParkingSelectModalComponent_new_parking_space_filters_display_21_Template, 1, 1, "new-parking-space-filters-display", 12)(22, NewParkingSelectModalComponent_new_parking_space_list_22_Template, 1, 3, "new-parking-space-list", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 14)(24, "new-parking-space-details", 15);
        \u0275\u0275listener("activeChange", function NewParkingSelectModalComponent_Template_new_parking_space_details_activeChange_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSelected(ctx.displayed, $event));
        })("toggleFav", function NewParkingSelectModalComponent_Template_new_parking_space_details_toggleFav_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleFavourite(ctx.displayed));
        })("close", function NewParkingSelectModalComponent_Template_new_parking_space_details_close_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.displayed = null);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, NewParkingSelectModalComponent_button_25_Template, 3, 1, "button", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "footer", 17)(27, "button", 18)(28, "div", 19)(29, "icon", 20);
        \u0275\u0275text(30, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 21);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "button", 22);
        \u0275\u0275listener("click", function NewParkingSelectModalComponent_Template_button_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id)));
        });
        \u0275\u0275elementStart(35, "div", 23)(36, "icon", 20);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 24);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(41, NewParkingSelectModalComponent_ng_template_41_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const map_view_r7 = \u0275\u0275reference(42);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 47, "BOOKINGS.PARKING_FIND"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("bg-base-100", ctx.view !== "list")("bg-secondary", ctx.view === "list")("text-secondary-content", ctx.view === "list");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 49, "COMMON.LIST"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("bg-base-100", ctx.view !== "map")("bg-secondary", ctx.view === "map")("text-secondary-content", ctx.view === "map");
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 51, "COMMON.MAP"));
        \u0275\u0275advance(8);
        \u0275\u0275classProp("hidden", !ctx.show_filters);
        \u0275\u0275advance();
        \u0275\u0275property("hide_levels", ctx.view !== "list");
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.show_filters || ctx.displayed)("sm:hidden", ctx.displayed)("md:block", !ctx.displayed)("p-2", ctx.view === "list");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "list");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "list")("ngIfElse", map_view_r7);
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.show_filters || !ctx.displayed)("sm:hidden", !ctx.displayed)("md:block", ctx.displayed);
        \u0275\u0275advance();
        \u0275\u0275property("space", ctx.displayed)("active", ctx.selected_ids.includes(ctx.displayed == null ? null : ctx.displayed.id))("hide_map", ctx.view === "map")("fav", ctx.displayed && ctx.favorites.includes(ctx.displayed == null ? null : ctx.displayed.id));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.displayed);
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", ctx.selected);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 53, "COMMON.BACK_TO_FORM"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
        \u0275\u0275property("disabled", !ctx.displayed);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 55, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatTooltipModule,
      MatTooltip,
      NewParkingListComponent,
      NewParkingDetailsComponent,
      NewParkingFiltersComponent,
      NewParkingMapComponent,
      NewParkingFiltersDisplayComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingSelectModalComponent, { className: "NewParkingSelectModalComponent", filePath: "libs/bookings/src/lib/new-parking-select-modal/new-parking-select-modal.component.ts", lineNumber: 198 });
})();

// libs/bookings/src/lib/parking-space-list-field.component.ts
function ParkingSpaceListFieldComponent_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function ParkingSpaceListFieldComponent_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
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
    \u0275\u0275elementStart(8, "div", 13)(9, "icon", 14);
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
    \u0275\u0275elementStart(15, "div", 17)(16, "icon", 5);
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
    \u0275\u0275elementStart(22, "div", 17)(23, "icon", 5);
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
    \u0275\u0275elementStart(29, "icon", 20);
    \u0275\u0275text(30, "favorite");
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
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.favorites.includes(ctx_r2.asset == null ? null : ctx_r2.asset.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
var EMPTY_FAVS3 = [];
var ParkingSpaceListFieldComponent = class _ParkingSpaceListFieldComponent {
  get favorites() {
    return this._settings.get("favourite_spaces") || EMPTY_FAVS3;
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
    const ref = this._dialog.open(NewParkingSelectModalComponent, {
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
      this._settings.saveUserSetting(FAV_PARKING_KEY2, [
        ...fav_list,
        space.id
      ]);
    } else {
      this._settings.saveUserSetting(FAV_PARKING_KEY2, fav_list.filter((_) => _ !== space.id));
    }
  }
  static {
    this.\u0275fac = function ParkingSpaceListFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpaceListFieldComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceListFieldComponent, selectors: [["parking-space-list-field"]], inputs: { disable_date: "disable_date" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _ParkingSpaceListFieldComponent),
        multi: true
      }
    ])], decls: 11, vars: 4, consts: [["placeholder", ""], ["list", "", 1, "space-y-2"], ["space", "", "class", "relative flex w-full items-center rounded-lg border border-base-200 p-2 shadow", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "add-space", "", 1, "inverse", "mt-2", "w-full", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-2xl"], [1, "mb-2", "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-[256px]", "flex-1", "space-y-2"], ["space", "", 1, "relative", "flex", "w-full", "items-center", "rounded-lg", "border", "border-base-200", "p-2", "shadow"], [1, "mr-4", "flex", "h-24", "w-24", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "bg-base-200"], ["auth", "", "class", "h-full object-cover", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "pb-4"], [1, "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-blue-500"], [1, "absolute", "bottom-0", "right-0", "flex", "items-center", "justify-end", "text-xs"], ["btn", "", "matRipple", "", "edit-space", "", 1, "clear", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "remove-space", "", 1, "clear", 3, "click"], ["icon", "", "matRipple", "", "fav", "", 1, "absolute", "right-1", "top-1", 3, "click"], [3, "className"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/car-placeholder.svg", 1, "m-auto"]], template: function ParkingSpaceListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, ParkingSpaceListFieldComponent_div_1_Template, 31, 13, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "button", 3);
        \u0275\u0275listener("click", function ParkingSpaceListFieldComponent_Template_button_click_2_listener() {
          return ctx.changeResources();
        });
        \u0275\u0275elementStart(3, "div", 4)(4, "icon", 5);
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
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatRipple,
      AuthenticatedImageDirective
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceListFieldComponent, { className: "ParkingSpaceListFieldComponent", filePath: "libs/bookings/src/lib/parking-space-list-field.component.ts", lineNumber: 140 });
})();

// libs/bookings/src/lib/bookings.module.ts
var STANDALONE_COMPONENTS = [
  LockerGridComponent,
  DeskQuestionsModalComponent,
  DeskConfirmModalComponent,
  InviteVisitorFormComponent,
  BookingDetailsModalComponent,
  BookingCardComponent,
  BookingLinkModalComponent,
  ParkingSpaceSelectModalComponent,
  ParkingSpaceListFieldComponent,
  DeskSelectModalComponent,
  DeskListFieldComponent,
  DeskSettingsModalComponent,
  LockerListFieldComponent,
  LockerSelectModalComponent
];
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
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [STANDALONE_COMPONENTS] });
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
  DeskListFieldComponent,
  InviteVisitorFormComponent,
  LockerListFieldComponent,
  ParkingSpaceListFieldComponent,
  SharedBookingsModule
};
//# sourceMappingURL=chunk-RSJJYKVE.js.map
