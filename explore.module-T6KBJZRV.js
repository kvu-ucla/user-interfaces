import {
  $,
  AssetStateService,
  BookingFormService,
  Dn,
  Hn,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger,
  Un,
  UserSearchFieldComponent,
  VirtualKeyboardComponent,
  Yn,
  endInFuture,
  endOfMinute,
  gn,
  loadLockerBanks,
  loadLockers,
  newBookingFromCalendarEvent,
  requestSpacesForZone,
  searchStaff,
  setHours,
  showStaff,
  validateAssetRequestsForResource
} from "./chunk-F53EOGM4.js";
import {
  generateQRCode,
  querySpaceAvailability,
  removeEvent,
  saveEvent
} from "./chunk-QAPSCS4G.js";
import {
  A11yModule,
  ANIMATION_SHOW_CONTRACT_EXPAND,
  ActivatedRoute,
  AriaDescriber,
  AssetRequest,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  CalendarEvent,
  CdkPortal,
  CdkScrollableModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentPortal,
  DOCUMENT,
  DatePipe,
  DefaultValueAccessor,
  Desk,
  Directionality,
  Directive,
  ESCAPE,
  Ea,
  ElementRef,
  EventEmitter,
  FocusMonitor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  HostAttributeToken,
  HostListener,
  IconComponent,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCAL_TIMEZONE,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MapService,
  MapsPeopleService,
  MatCommonModule,
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
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NavigationEnd,
  NgClass,
  NgComponentOutlet,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Oe,
  OrganisationService,
  Output,
  Overlay,
  OverlayModule,
  Platform,
  PortalModule,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  SafePipe,
  SanitizePipe,
  ScrollDispatcher,
  SettingsService,
  SlicePipe,
  Space,
  SpacePipe,
  Subject,
  Tc,
  TemplatePortalDirective,
  TemplateRef,
  TranslatePipe,
  UpperCasePipe,
  User,
  Validators,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  Y,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _MatInternalFormField,
  _StructuralStylesLoader,
  _animationsDisabled,
  add,
  addDays,
  addMinutes,
  addMonths,
  addYears,
  afterNextRender,
  booleanAttribute,
  calculateDistance,
  catchError,
  cc,
  coerceBooleanProperty,
  coerceNumberProperty,
  combineLatest,
  computed,
  constructFrom,
  createBookingsForEvent,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  currentUser,
  current_user,
  debounceTime,
  differenceInMilliseconds,
  differenceInMinutes,
  distinctUntilKeyChanged,
  enUS,
  endOfDay,
  endOfMonth,
  filter,
  filterResourcesFromRules,
  first,
  flatten,
  forkJoin,
  format,
  formatDuration,
  forwardRef,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  getDefaultOptions,
  getInvalidFields,
  getRoundingMethod,
  getTimezoneOffsetInMilliseconds,
  getTimezoneOffsetString,
  getUnixTime,
  hasModifierKey,
  hu,
  i18n,
  inject,
  input,
  isAfter,
  isBefore,
  isSameDay,
  lastValueFrom,
  log,
  map,
  minutesInDay,
  minutesInMonth,
  model,
  mu,
  nextValueFrom,
  normalizeDates,
  normalizePassiveListenerOptions,
  notifyError,
  notifySuccess,
  notifyWarn,
  numberAttribute,
  of,
  output,
  queryBookings,
  queryResourceAvailability,
  randomString,
  roundToNearestMinutes,
  rulesForResource,
  saveBooking,
  sc,
  set,
  setClassMetadata,
  setDefaultCreator,
  shareReplay,
  shiftColorTowards,
  startOfDay,
  startOfMinute,
  startOfWeek,
  startWith,
  switchMap,
  takeUntil,
  tap,
  timer,
  toDate,
  unique,
  ve,
  viewChild,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-QSANQ2D4.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

// node_modules/@angular/material/fesm2022/slide-toggle.mjs
var _c0 = ["switch"];
var _c1 = ["*"];
function MatSlideToggle_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "path", 15);
    \u0275\u0275elementEnd()();
  }
}
var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("mat-slide-toggle-default-options", {
  providedIn: "root",
  factory: () => ({
    disableToggleValue: false,
    hideIcon: false,
    disabledInteractive: false
  })
});
var MatSlideToggleChange = class {
  source;
  checked;
  constructor(source, checked) {
    this.source = source;
    this.checked = checked;
  }
};
var MatSlideToggle = class _MatSlideToggle {
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  defaults = inject(MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS);
  _onChange = (_) => {
  };
  _onTouched = () => {
  };
  _validatorOnChange = () => {
  };
  _uniqueId;
  _checked = false;
  _createChangeEvent(isChecked) {
    return new MatSlideToggleChange(this, isChecked);
  }
  /** Unique ID for the label element. */
  _labelId;
  /** Returns the unique id for the visual hidden button. */
  get buttonId() {
    return `${this.id || this._uniqueId}-button`;
  }
  /** Reference to the MDC switch element. */
  _switchElement;
  /** Focuses the slide-toggle. */
  focus() {
    this._switchElement.nativeElement.focus();
  }
  /** Whether noop animations are enabled. */
  _noopAnimations = _animationsDisabled();
  /** Whether the slide toggle is currently focused. */
  _focused;
  /** Name value will be applied to the input element if present. */
  name = null;
  /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
  id;
  /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */
  labelPosition = "after";
  /** Used to set the aria-label attribute on the underlying input element. */
  ariaLabel = null;
  /** Used to set the aria-labelledby attribute on the underlying input element. */
  ariaLabelledby = null;
  /** Used to set the aria-describedby attribute on the underlying input element. */
  ariaDescribedby;
  /** Whether the slide-toggle is required. */
  required;
  // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
  // the lack of type checking previously and assigning random strings.
  /**
   * Theme color of the slide toggle. This API is supported in M2 themes only,
   * it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/slide-toggle/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether the slide toggle is disabled. */
  disabled = false;
  /** Whether the slide toggle has a ripple. */
  disableRipple = false;
  /** Tabindex of slide toggle. */
  tabIndex = 0;
  /** Whether the slide-toggle element is checked or not. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
    this._changeDetectorRef.markForCheck();
  }
  /** Whether to hide the icon inside of the slide toggle. */
  hideIcon;
  /** Whether the slide toggle should remain interactive when it is disabled. */
  disabledInteractive;
  /** An event will be dispatched each time the slide-toggle changes its value. */
  change = new EventEmitter();
  /**
   * An event will be dispatched each time the slide-toggle input is toggled.
   * This event is always emitted when the user toggles the slide toggle, but this does not mean
   * the slide toggle's value has changed.
   */
  toggleChange = new EventEmitter();
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const defaults = this.defaults;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.color = defaults.color || "accent";
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-slide-toggle-");
    this.hideIcon = defaults.hideIcon ?? false;
    this.disabledInteractive = defaults.disabledInteractive ?? false;
    this._labelId = this._uniqueId + "-label";
  }
  ngAfterContentInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (focusOrigin === "keyboard" || focusOrigin === "program") {
        this._focused = true;
        this._changeDetectorRef.markForCheck();
      } else if (!focusOrigin) {
        Promise.resolve().then(() => {
          this._focused = false;
          this._onTouched();
          this._changeDetectorRef.markForCheck();
        });
      }
    });
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorOnChange();
    }
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Implemented as part of ControlValueAccessor. */
  writeValue(value) {
    this.checked = !!value;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Implemented as a part of Validator. */
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  /** Implemented as a part of Validator. */
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  /** Implemented as a part of ControlValueAccessor. */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
  /** Toggles the checked state of the slide-toggle. */
  toggle() {
    this.checked = !this.checked;
    this._onChange(this.checked);
  }
  /**
   * Emits a change event on the `change` output. Also notifies the FormControl about the change.
   */
  _emitChangeEvent() {
    this._onChange(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
  }
  /** Method being called whenever the underlying button is clicked. */
  _handleClick() {
    if (!this.disabled) {
      this.toggleChange.emit();
      if (!this.defaults.disableToggleValue) {
        this.checked = !this.checked;
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
      }
    }
  }
  _getAriaLabelledBy() {
    if (this.ariaLabelledby) {
      return this.ariaLabelledby;
    }
    return this.ariaLabel ? null : this._labelId;
  }
  static \u0275fac = function MatSlideToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlideToggle,
    selectors: [["mat-slide-toggle"]],
    viewQuery: function MatSlideToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._switchElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-slide-toggle"],
    hostVars: 13,
    hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("name", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-mdc-slide-toggle-focused", ctx._focused)("mat-mdc-slide-toggle-checked", ctx.checked)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      name: "name",
      id: "id",
      labelPosition: "labelPosition",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      required: [2, "required", "required", booleanAttribute],
      color: "color",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      checked: [2, "checked", "checked", booleanAttribute],
      hideIcon: [2, "hideIcon", "hideIcon", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change",
      toggleChange: "toggleChange"
    },
    exportAs: ["matSlideToggle"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MatSlideToggle),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatSlideToggle,
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c1,
    decls: 13,
    vars: 27,
    consts: [["switch", ""], ["mat-internal-form-field", "", 3, "labelPosition"], ["role", "switch", "type", "button", 1, "mdc-switch", 3, "click", "tabIndex", "disabled"], [1, "mdc-switch__track"], [1, "mdc-switch__handle-track"], [1, "mdc-switch__handle"], [1, "mdc-switch__shadow"], [1, "mdc-elevation-overlay"], [1, "mdc-switch__ripple"], ["mat-ripple", "", 1, "mat-mdc-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-switch__icons"], [1, "mdc-label", 3, "click", "for"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--on"], ["d", "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--off"], ["d", "M20 13H4v-2h16v2z"]],
    template: function MatSlideToggle_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2, 0);
        \u0275\u0275listener("click", function MatSlideToggle_Template_button_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handleClick());
        });
        \u0275\u0275element(3, "span", 3);
        \u0275\u0275elementStart(4, "span", 4)(5, "span", 5)(6, "span", 6);
        \u0275\u0275element(7, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 8);
        \u0275\u0275element(9, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, MatSlideToggle_Conditional_10_Template, 5, 0, "span", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "label", 11);
        \u0275\u0275listener("click", function MatSlideToggle_Template_label_click_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275projection(12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const switch_r2 = \u0275\u0275reference(2);
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance();
        \u0275\u0275classProp("mdc-switch--selected", ctx.checked)("mdc-switch--unselected", !ctx.checked)("mdc-switch--checked", ctx.checked)("mdc-switch--disabled", ctx.disabled)("mat-mdc-slide-toggle-disabled-interactive", ctx.disabledInteractive);
        \u0275\u0275property("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("disabled", ctx.disabled && !ctx.disabledInteractive);
        \u0275\u0275attribute("id", ctx.buttonId)("name", ctx.name)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx._getAriaLabelledBy())("aria-describedby", ctx.ariaDescribedby)("aria-required", ctx.required || null)("aria-checked", ctx.checked)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(8);
        \u0275\u0275property("matRippleTrigger", switch_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hideIcon ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("for", ctx.buttonId);
        \u0275\u0275attribute("id", ctx._labelId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mat-slide-toggle-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mat-slide-toggle-track-height, 32px);border-radius:var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mat-slide-toggle-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-slide-toggle-track-outline-width, 2px);border-color:var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-slide-toggle-selected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mat-slide-toggle-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mat-slide-toggle-handle-width);height:var(--mat-slide-toggle-handle-height);border-radius:var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-slide-toggle-unselected-handle-size, 16px);height:var(--mat-slide-toggle-unselected-handle-size, 16px);margin:var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-slide-toggle-selected-handle-size, 24px);height:var(--mat-slide-toggle-selected-handle-size, 24px);margin:var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-slide-toggle-with-icon-handle-size, 24px);height:var(--mat-slide-toggle-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-slide-toggle-pressed-handle-size, 28px);height:var(--mat-slide-toggle-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mat-slide-toggle-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mat-slide-toggle-state-layer-size, 40px);height:var(--mat-slide-toggle-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mat-slide-toggle-unselected-icon-size, 16px);height:var(--mat-slide-toggle-unselected-icon-size, 16px);fill:var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mat-slide-toggle-selected-icon-size, 16px);height:var(--mat-slide-toggle-selected-icon-size, 16px);fill:var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mat-slide-toggle-disabled-label-text-color)}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggle, [{
    type: Component,
    args: [{
      selector: "mat-slide-toggle",
      host: {
        "class": "mat-mdc-slide-toggle",
        "[id]": "id",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.name]": "null",
        "[attr.aria-labelledby]": "null",
        "[class.mat-mdc-slide-toggle-focused]": "_focused",
        "[class.mat-mdc-slide-toggle-checked]": "checked",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[class]": 'color ? "mat-" + color : ""'
      },
      exportAs: "matSlideToggle",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatSlideToggle),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatSlideToggle,
        multi: true
      }],
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition">
  <button
    class="mdc-switch"
    role="switch"
    type="button"
    [class.mdc-switch--selected]="checked"
    [class.mdc-switch--unselected]="!checked"
    [class.mdc-switch--checked]="checked"
    [class.mdc-switch--disabled]="disabled"
    [class.mat-mdc-slide-toggle-disabled-interactive]="disabledInteractive"
    [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
    [disabled]="disabled && !disabledInteractive"
    [attr.id]="buttonId"
    [attr.name]="name"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="_getAriaLabelledBy()"
    [attr.aria-describedby]="ariaDescribedby"
    [attr.aria-required]="required || null"
    [attr.aria-checked]="checked"
    [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
    (click)="_handleClick()"
    #switch>
    <span class="mdc-switch__track"></span>
    <span class="mdc-switch__handle-track">
      <span class="mdc-switch__handle">
        <span class="mdc-switch__shadow">
          <span class="mdc-elevation-overlay"></span>
        </span>
        <span class="mdc-switch__ripple">
          <span class="mat-mdc-slide-toggle-ripple mat-focus-indicator" mat-ripple
            [matRippleTrigger]="switch"
            [matRippleDisabled]="disableRipple || disabled"
            [matRippleCentered]="true"></span>
        </span>
        @if (!hideIcon) {
          <span class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </span>
        }
      </span>
    </span>
  </button>

  <!--
    Clicking on the label will trigger another click event from the button.
    Stop propagation here so other listeners further up in the DOM don't execute twice.
  -->
  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mat-slide-toggle-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mat-slide-toggle-track-height, 32px);border-radius:var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mat-slide-toggle-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-slide-toggle-track-outline-width, 2px);border-color:var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-slide-toggle-selected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-visible-track-opacity, 1);transition:var(--mat-slide-toggle-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-slide-toggle-hidden-track-opacity, 0);transition:var(--mat-slide-toggle-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mat-slide-toggle-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mat-slide-toggle-handle-width);height:var(--mat-slide-toggle-handle-height);border-radius:var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-slide-toggle-unselected-handle-size, 16px);height:var(--mat-slide-toggle-unselected-handle-size, 16px);margin:var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-slide-toggle-selected-handle-size, 24px);height:var(--mat-slide-toggle-selected-handle-size, 24px);margin:var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-slide-toggle-with-icon-handle-size, 24px);height:var(--mat-slide-toggle-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-slide-toggle-pressed-handle-size, 28px);height:var(--mat-slide-toggle-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mat-slide-toggle-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mat-slide-toggle-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mat-slide-toggle-state-layer-size, 40px);height:var(--mat-slide-toggle-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mat-slide-toggle-unselected-icon-size, 16px);height:var(--mat-slide-toggle-unselected-icon-size, 16px);fill:var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mat-slide-toggle-selected-icon-size, 16px);height:var(--mat-slide-toggle-selected-icon-size, 16px);fill:var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mat-slide-toggle-disabled-label-text-color)}\n']
    }]
  }], () => [], {
    _switchElement: [{
      type: ViewChild,
      args: ["switch"]
    }],
    name: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    toggleChange: [{
      type: Output
    }]
  });
})();
var MatSlideToggleModule = class _MatSlideToggleModule {
  static \u0275fac = function MatSlideToggleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSlideToggleModule,
    imports: [MatSlideToggle, MatCommonModule],
    exports: [MatSlideToggle, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatSlideToggle, MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatSlideToggle, MatCommonModule],
      exports: [MatSlideToggle, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/date-fns/compareAsc.js
function compareAsc(dateLeft, dateRight) {
  const diff = +toDate(dateLeft) - +toDate(dateRight);
  if (diff < 0) return -1;
  else if (diff > 0) return 1;
  return diff;
}

// node_modules/date-fns/constructNow.js
function constructNow(date) {
  return constructFrom(date, Date.now());
}

// node_modules/date-fns/differenceInCalendarMonths.js
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
  return yearsDiff * 12 + monthsDiff;
}

// node_modules/date-fns/isLastDayOfMonth.js
function isLastDayOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  return +endOfDay(_date, options) === +endOfMonth(_date, options);
}

// node_modules/date-fns/differenceInMonths.js
function differenceInMonths(laterDate, earlierDate, options) {
  const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    laterDate,
    earlierDate
  );
  const sign = compareAsc(workingLaterDate, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarMonths(workingLaterDate, earlierDate_)
  );
  if (difference < 1) return 0;
  if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27)
    workingLaterDate.setDate(30);
  workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
  let isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;
  if (isLastDayOfMonth(laterDate_) && difference === 1 && compareAsc(laterDate_, earlierDate_) === 1) {
    isLastMonthNotFull = false;
  }
  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}

// node_modules/date-fns/differenceInSeconds.js
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// node_modules/date-fns/startOfMonth.js
function startOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/formatDistance.js
function formatDistance(laterDate, earlierDate, options) {
  const defaultOptions = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions.locale ?? enUS;
  const minutesInAlmostTwoDays = 2520;
  const comparison = compareAsc(laterDate, earlierDate);
  if (isNaN(comparison)) throw new RangeError("Invalid time value");
  const localizeOptions = Object.assign({}, options, {
    addSuffix: options?.addSuffix,
    comparison
  });
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    ...comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]
  );
  const seconds = differenceInSeconds(earlierDate_, laterDate_);
  const offsetInSeconds = (getTimezoneOffsetInMilliseconds(earlierDate_) - getTimezoneOffsetInMilliseconds(laterDate_)) / 1e3;
  const minutes = Math.round((seconds - offsetInSeconds) / 60);
  let months;
  if (minutes < 2) {
    if (options?.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance("halfAMinute", 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
      }
    }
  } else if (minutes < 45) {
    return locale.formatDistance("xMinutes", minutes, localizeOptions);
  } else if (minutes < 90) {
    return locale.formatDistance("aboutXHours", 1, localizeOptions);
  } else if (minutes < minutesInDay) {
    const hours = Math.round(minutes / 60);
    return locale.formatDistance("aboutXHours", hours, localizeOptions);
  } else if (minutes < minutesInAlmostTwoDays) {
    return locale.formatDistance("xDays", 1, localizeOptions);
  } else if (minutes < minutesInMonth) {
    const days = Math.round(minutes / minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);
  } else if (minutes < minutesInMonth * 2) {
    months = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("aboutXMonths", months, localizeOptions);
  }
  months = differenceInMonths(earlierDate_, laterDate_);
  if (months < 12) {
    const nearestMonth = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
  } else {
    const monthsSinceStartOfYear = months % 12;
    const years = Math.trunc(months / 12);
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance("aboutXYears", years, localizeOptions);
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance("overXYears", years, localizeOptions);
    } else {
      return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
  }
}

// node_modules/date-fns/formatDistanceToNow.js
function formatDistanceToNow(date, options) {
  return formatDistance(date, constructNow(date), options);
}

// node_modules/date-fns/isSameMonth.js
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}

// node_modules/date-fns/setMinutes.js
function setMinutes(date, minutes, options) {
  const date_ = toDate(date, options?.in);
  date_.setMinutes(minutes);
  return date_;
}

// libs/components/src/lib/custom-tooltip.component.ts
var _c02 = ["customTooltip", ""];
var _c12 = ["*"];
function CustomTooltipComponent_ng_template_1_Case_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CustomTooltipComponent_ng_template_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomTooltipComponent_ng_template_1_Case_1_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", ctx_r0.content)("ngComponentOutletInjector", ctx_r0.injector);
  }
}
function CustomTooltipComponent_ng_template_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.content), \u0275\u0275sanitizeHtml);
  }
}
function CustomTooltipComponent_ng_template_1_Case_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CustomTooltipComponent_ng_template_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomTooltipComponent_ng_template_1_Case_3_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.content)("ngTemplateOutletContext", ctx_r0.data);
  }
}
function CustomTooltipComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, CustomTooltipComponent_ng_template_1_Case_1_Template, 1, 2, "ng-container")(2, CustomTooltipComponent_ng_template_1_Case_2_Template, 2, 3, "div", 2)(3, CustomTooltipComponent_ng_template_1_Case_3_Template, 1, 2, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.type) === "component" ? 1 : tmp_1_0 === "html" ? 2 : 3);
  }
}
var _CustomTooltipData = class _CustomTooltipData {
  constructor(d) {
    this.data = d.data;
    this.close = d.close || (() => null);
  }
};
_CustomTooltipData.\u0275fac = function CustomTooltipData_Factory(__ngFactoryType__) {
  \u0275\u0275invalidFactory();
};
_CustomTooltipData.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomTooltipData, factory: _CustomTooltipData.\u0275fac });
var CustomTooltipData = _CustomTooltipData;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomTooltipData, [{
    type: Injectable
  }], () => [{ type: void 0 }], null);
})();
var _CustomTooltipComponent = class _CustomTooltipComponent extends AsyncHandler {
  constructor() {
    super();
    this._element = inject(ElementRef);
    this._overlay = inject(Overlay);
    this._injector = inject(Injector);
    this.x_pos = "end";
    this.y_pos = "top";
    this.backdrop = true;
    this.hover = false;
    this.delay = 0;
    this.type = "template";
    this._overlay_ref = null;
    this._portal = viewChild(CdkPortal);
    this.onClick = () => this.open();
    this.onTouch = () => this.open();
    this.onEnter = () => this.hover ? this.open() : "";
    this.onLeave = () => this.hover ? this.close() : "";
  }
  ngOnChanges(changes) {
    this._updateInjector();
    if (this._overlay_ref && (changes.x_pos || changes.y_pos || changes.content)) {
      this.open();
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.close();
  }
  open() {
    if (!this.content)
      return;
    this.timeout("open", () => {
      if (this.hover && this.delay) {
        this.timeout("onclose", () => this.close(), this.delay);
      }
      this._updateType();
      if (this._overlay_ref)
        this.close();
      const _portal = this._portal();
      if (!_portal)
        return;
      const pos = this._element.nativeElement.getBoundingClientRect();
      const default_x = "end";
      const default_y = "top";
      this._overlay_ref = this._overlay.create({
        hasBackdrop: !!this.backdrop && !this.hover,
        positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withPositions([
          {
            originX: this.x_pos || default_x,
            originY: (this.y_pos === "top" ? "bottom" : this.y_pos == "bottom" ? "top" : this.y_pos) || default_y,
            overlayX: this.x_pos || default_x,
            overlayY: this.y_pos || default_y
          }
        ])
      });
      this._overlay_ref.attach(_portal);
      if (this.backdrop) {
        this.subscription("backdrop", this._overlay_ref.backdropClick().subscribe(() => this.close()));
      }
    }, 50);
  }
  close() {
    this.clearTimeout("open");
    if (this._overlay_ref) {
      this._overlay_ref.dispose();
      this._overlay_ref = null;
    }
  }
  _updateType() {
    this.type = typeof this.content === "string" ? "html" : this.content instanceof TemplateRef ? "template" : "component";
  }
  _updateInjector() {
    this.injector = Injector.create({
      providers: [
        {
          provide: CustomTooltipData,
          useValue: { data: this.data, close: () => this.close() }
        }
      ],
      parent: this._injector
    });
  }
};
_CustomTooltipComponent.\u0275fac = function CustomTooltipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CustomTooltipComponent)();
};
_CustomTooltipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomTooltipComponent, selectors: [["", "customTooltip", ""]], viewQuery: function CustomTooltipComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._portal, CdkPortal, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, hostBindings: function CustomTooltipComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function CustomTooltipComponent_click_HostBindingHandler() {
      return ctx.onClick();
    })("touchend", function CustomTooltipComponent_touchend_HostBindingHandler() {
      return ctx.onTouch();
    })("mouseenter", function CustomTooltipComponent_mouseenter_HostBindingHandler() {
      return ctx.onEnter();
    })("mouseleave", function CustomTooltipComponent_mouseleave_HostBindingHandler() {
      return ctx.onLeave();
    });
  }
}, inputs: { x_pos: [0, "xPosition", "x_pos"], y_pos: [0, "yPosition", "y_pos"], content: "content", data: "data", backdrop: "backdrop", hover: "hover", delay: "delay" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], attrs: _c02, ngContentSelectors: _c12, decls: 2, vars: 0, consts: [["cdk-portal", ""], ["custom-tooltip", "", 1, "relative", "print:hidden"], [3, "innerHTML"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function CustomTooltipComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275projection(0);
    \u0275\u0275template(1, CustomTooltipComponent_ng_template_1_Template, 4, 1, "ng-template", 0);
  }
}, dependencies: [CommonModule, NgComponentOutlet, NgTemplateOutlet, PortalModule, TemplatePortalDirective, SanitizePipe], encapsulation: 2 });
var CustomTooltipComponent = _CustomTooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomTooltipComponent, [{
    type: Component,
    args: [{
      selector: "[customTooltip]",
      template: `
        <ng-content />

        <ng-template cdk-portal>
            <div custom-tooltip class="relative print:hidden">
                @switch (type) {
                    @case ('component') {
                        <ng-container
                            *ngComponentOutlet="content; injector: injector"
                        ></ng-container>
                    }
                    @case ('html') {
                        <div [innerHTML]="content | sanitize"></div>
                    }
                    @default {
                        <ng-container
                            *ngTemplateOutlet="content; context: data"
                        ></ng-container>
                    }
                }
            </div>
        </ng-template>
    `,
      imports: [CommonModule, PortalModule, SanitizePipe]
    }]
  }], () => [], { x_pos: [{
    type: Input,
    args: ["xPosition"]
  }], y_pos: [{
    type: Input,
    args: ["yPosition"]
  }], content: [{
    type: Input
  }], data: [{
    type: Input
  }], backdrop: [{
    type: Input
  }], hover: [{
    type: Input
  }], delay: [{
    type: Input
  }], onClick: [{
    type: HostListener,
    args: ["click"]
  }], onTouch: [{
    type: HostListener,
    args: ["touchend"]
  }], onEnter: [{
    type: HostListener,
    args: ["mouseenter"]
  }], onLeave: [{
    type: HostListener,
    args: ["mouseleave"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomTooltipComponent, { className: "CustomTooltipComponent", filePath: "libs/components/src/lib/custom-tooltip.component.ts", lineNumber: 59 });
})();

// libs/form-fields/src/lib/date-calendar.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DateCalendarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, day_r1 == null ? null : day_r1.id, "EE"), " ");
  }
}
function DateCalendarComponent_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function DateCalendarComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function DateCalendarComponent_For_18_Template_button_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setValue(day_r3.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275conditionalCreate(3, DateCalendarComponent_For_18_Conditional_3_Template, 1, 0, "div", 11);
    \u0275\u0275element(4, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hover:bg-base-100", day_r3.id !== ctx_r3.active_date)("!text-base-300", !day_r3.is_month)("text-secondary-content", day_r3.id === ctx_r3.active_date)("text-base-content", day_r3.id !== ctx_r3.active_date)("bg-secondary", day_r3.id === ctx_r3.active_date)("font-normal", day_r3.id !== ctx_r3.active_date);
    \u0275\u0275property("disabled", day_r3.id < ctx_r3.from || day_r3.id > ctx_r3.to);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 15, day_r3.id, "d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.today === day_r3.id ? 3 : -1);
  }
}
var _DateCalendarComponent = class _DateCalendarComponent extends AsyncHandler {
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this.from = 0;
    this.to = Date.now() * 10;
    this.offset_weekday = 0;
    this.today = startOfDay(Date.now()).valueOf();
    this.date = Date.now();
    this.active_date = startOfDay(Date.now()).valueOf();
    this.offset = 0;
    this.date_list = [];
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
  }
  ngOnInit() {
    this.generateDates();
  }
  ngOnChanges(changes) {
    if (changes.offset_weekday) {
      this.generateDates();
    }
  }
  setValue(new_value) {
    if (new_value < this.from || new_value >= this.to)
      return;
    const date = new Date(new_value);
    this.date = set(this.date, {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    }).valueOf();
    this.active_date = startOfDay(this.date).valueOf();
    if (this._onChange)
      this._onChange(new_value);
  }
  writeValue(value) {
    this.date = value;
    this.active_date = startOfDay(value).valueOf();
    this.offset = 0;
    this.generateDates();
  }
  changeMonth(change) {
    this.offset += change;
    this.generateDates();
  }
  generateDates() {
    const offset = this._settings.get("app.week_start") || this.offset_weekday;
    const date = addMonths(this.date, this.offset);
    let start = startOfWeek(startOfMonth(date), {
      weekStartsOn: offset
    });
    const now = startOfDay(Date.now());
    const list = [];
    while (list.length < 42) {
      list.push({
        id: start.valueOf(),
        is_past: isBefore(start, now),
        is_month: isSameMonth(start, date)
      });
      start = addDays(start, 1);
    }
    this.date_list = list;
  }
};
_DateCalendarComponent.\u0275fac = function DateCalendarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DateCalendarComponent)();
};
_DateCalendarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateCalendarComponent, selectors: [["date-calendar"]], inputs: { from: "from", to: "to", offset_weekday: "offset_weekday" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _DateCalendarComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 19, vars: 10, consts: [[1, "p-2"], [1, "flex", "items-center", "justify-between"], [1, "pl-1.5", "pr-2", "font-medium"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", "name", "schedule-next-month", 3, "click", "disabled"], ["icon", "", "matRipple", "", "name", "schedule-previous-month", 3, "click", "disabled"], [1, "mb-2", "flex", "items-center", "border-b", "border-base-200", "pb-2", "text-sm"], [1, "flex-1", "text-center", "opacity-60"], [1, "flex", "flex-wrap", "items-center", "justify-between"], ["icon", "", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "hover:bg-base-100", "!text-base-300", "text-secondary-content", "text-base-content", "bg-secondary", "font-normal", "disabled"], ["icon", "", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "click", "disabled"], ["matRipple", "", 1, "absolute", "-inset-[2px]", "overflow-hidden", "rounded-full", "border", "border-secondary"], ["matRipple", "", 1, "absolute", "inset-0", "overflow-hidden", "rounded-full"]], template: function DateCalendarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
    \u0275\u0275listener("click", function DateCalendarComponent_Template_button_click_6_listener() {
      return ctx.changeMonth(-1);
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function DateCalendarComponent_Template_button_click_9_listener() {
      return ctx.changeMonth(1);
    });
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "chevron_right");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 6);
    \u0275\u0275repeaterCreate(13, DateCalendarComponent_For_14_Template, 3, 4, "div", 7, _forTrack0);
    \u0275\u0275pipe(15, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 8);
    \u0275\u0275repeaterCreate(17, DateCalendarComponent_For_18_Template, 5, 18, "button", 9, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 3, (ctx.date_list[6] == null ? null : ctx.date_list[6].id) || ctx.date, "LLLL yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", (ctx.date_list[0] == null ? null : ctx.date_list[0].id) < ctx.from);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", (ctx.date_list[34] == null ? null : ctx.date_list[34].id) > ctx.to);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(15, 6, ctx.date_list, 0, 7));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.date_list);
  }
}, dependencies: [CommonModule, SlicePipe, DatePipe, IconComponent], encapsulation: 2 });
var DateCalendarComponent = _DateCalendarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateCalendarComponent, [{
    type: Component,
    args: [{ selector: "date-calendar", template: `
        <div class="p-2">
            <div class="flex items-center justify-between">
                <div class="pl-1.5 pr-2 font-medium">
                    {{ date_list[6]?.id || date | date: 'LLLL yyyy' }}
                </div>
                <div class="flex items-center">
                    <button
                        icon
                        matRipple
                        name="schedule-next-month"
                        [disabled]="date_list[0]?.id < from"
                        (click)="changeMonth(-1)"
                    >
                        <icon>chevron_left</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        name="schedule-previous-month"
                        [disabled]="date_list[34]?.id > to"
                        (click)="changeMonth(1)"
                    >
                        <icon>chevron_right</icon>
                    </button>
                </div>
            </div>
            <div
                class="mb-2 flex items-center border-b border-base-200 pb-2 text-sm"
            >
                @for (day of date_list | slice: 0 : 7; track day.id) {
                    <div class="flex-1 text-center opacity-60">
                        {{ day?.id | date: 'EE' }}
                    </div>
                }
            </div>
            <div class="flex flex-wrap items-center justify-between">
                @for (day of date_list; track day.id) {
                    <button
                        icon
                        name="schedule-set-date"
                        class="relative my-0.5 h-9 w-9 min-w-[14%] overflow-visible"
                        [class.hover:bg-base-100]="day.id !== active_date"
                        [class.!text-base-300]="!day.is_month"
                        [class.text-secondary-content]="day.id === active_date"
                        [class.text-base-content]="day.id !== active_date"
                        [class.bg-secondary]="day.id === active_date"
                        [class.font-normal]="day.id !== active_date"
                        (click)="setValue(day.id)"
                        [disabled]="day.id < from || day.id > to"
                    >
                        {{ day.id | date: 'd' }}
                        @if (today === day.id) {
                            <div
                                class="absolute -inset-[2px] overflow-hidden rounded-full border border-secondary"
                                matRipple
                            ></div>
                        }
                        <div
                            class="absolute inset-0 overflow-hidden rounded-full"
                            matRipple
                        ></div>
                    </button>
                }
            </div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateCalendarComponent),
        multi: true
      }
    ], imports: [CommonModule, IconComponent] }]
  }], () => [], { from: [{
    type: Input
  }], to: [{
    type: Input
  }], offset_weekday: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateCalendarComponent, { className: "DateCalendarComponent", filePath: "libs/form-fields/src/lib/date-calendar.component.ts", lineNumber: 109 });
})();

// libs/form-fields/src/lib/date-field.component.ts
var _c03 = ["*"];
function DateFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.date, ctx_r0.date_format), " ");
  }
}
function DateFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "FORM.DATE_EMPTY"));
  }
}
function DateFieldComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.start_of_day);
  }
}
function DateFieldComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " - ");
    \u0275\u0275elementEnd();
  }
}
function DateFieldComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.end_of_day);
  }
}
function DateFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, DateFieldComponent_Conditional_5_Conditional_1_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(2, DateFieldComponent_Conditional_5_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(3, DateFieldComponent_Conditional_5_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range !== 2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range === 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range !== 1 ? 3 : -1);
  }
}
function DateFieldComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function DateFieldComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "date-calendar", 9);
    \u0275\u0275listener("ngModelChange", function DateFieldComponent_ng_template_11_Template_date_calendar_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.date || ctx_r0.now)("from", ctx_r0.from)("to", ctx_r0.until)("offset_weekday", ctx_r0.week_start);
  }
}
var TimezoneDiffRange;
(function(TimezoneDiffRange2) {
  TimezoneDiffRange2[TimezoneDiffRange2["Both"] = 0] = "Both";
  TimezoneDiffRange2[TimezoneDiffRange2["Start"] = 1] = "Start";
  TimezoneDiffRange2[TimezoneDiffRange2["End"] = 2] = "End";
})(TimezoneDiffRange || (TimezoneDiffRange = {}));
var _DateFieldComponent = class _DateFieldComponent extends AsyncHandler {
  get date_format() {
    return this.short ? "MMM d, yyyy" : "MMMM d, yyyy";
  }
  get time_format() {
    return this.use_24hr ? "HH : mm" : "h : mm a";
  }
  get start_of_day() {
    const start = startOfDay(this.date).valueOf();
    const format2 = `MMM d, ${this.time_format}${this.range === 1 ? " (z)" : ""}`;
    return this._date_pipe.transform(start, format2, this.tz);
  }
  get end_of_day() {
    const end = endOfDay(this.date).valueOf();
    const format2 = `MMM d, ${this.time_format}${this.range === 1 ? " (z)" : ""}`;
    return this._date_pipe.transform(end, format2, this.tz);
  }
  get has_error() {
    return this._control?.invalid && this._control?.touched;
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  constructor() {
    super();
    this._injector = inject(Injector);
    this.from_date = startOfDay(Date.now()).valueOf();
    this.week_start = 0;
    this.use_24hr = false;
    this.short = false;
    this.timezone = "";
    this.range = TimezoneDiffRange.Both;
    this.now = Date.now();
    this._date_pipe = new DatePipe("en");
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this._tooltip = viewChild(CustomTooltipComponent);
  }
  /** First allowed date on the calendar */
  get from() {
    return new Date(this.from_date) || startOfDay(/* @__PURE__ */ new Date());
  }
  /** Current date value */
  get until() {
    return new Date(this.to_date) || addYears(endOfDay(/* @__PURE__ */ new Date()), 1);
  }
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this.date = Date.now();
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    const old_date = new Date(this.date);
    let new_date = set(new_value, {
      hours: old_date.getHours(),
      minutes: old_date.getMinutes()
    }).valueOf();
    if (new_date < this.from.valueOf()) {
      new_date = this.from.valueOf();
    }
    this.date = new_date;
    if (this._onChange) {
      this._onChange(new_date);
    }
    this._tooltip()?.close();
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.date = value;
    this._tooltip()?.close();
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  setDisabledState(disabled) {
    this.disabled = disabled;
  }
};
_DateFieldComponent.\u0275fac = function DateFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DateFieldComponent)();
};
_DateFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateFieldComponent, selectors: [["a-date-field"]], viewQuery: function DateFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._tooltip, CustomTooltipComponent, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { from_date: [0, "from", "from_date"], to_date: [0, "to", "to_date"], week_start: "week_start", use_24hr: "use_24hr", disabled: "disabled", short: "short", timezone: "timezone", range: "range" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _DateFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c03, decls: 13, vars: 7, consts: [["calendar_picker", ""], ["customTooltip", "", "yPosition", "top", "matRipple", "", 1, "flex", "h-12", "w-full", "items-center", "justify-between", "rounded", "border", "border-neutral", 3, "content", "disabled"], [1, "flex", "w-1/2", "flex-1", "flex-col", "truncate", "px-4", "py-2", "text-left", "leading-tight"], [1, "text-base", "font-normal"], [1, "opacity-30"], [1, "truncate", "text-xs", "opacity-30"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "text-2xl"], [1, "error", "h-5", "p-1", "text-xs", "text-error"], [1, "relative", "w-[18rem]", "rounded", "bg-base-100", "px-2", "py-4"], [3, "ngModelChange", "ngModel", "from", "to", "offset_weekday"]], template: function DateFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "button", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275conditionalCreate(3, DateFieldComponent_Conditional_3_Template, 2, 4)(4, DateFieldComponent_Conditional_4_Template, 3, 3, "span", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DateFieldComponent_Conditional_5_Template, 4, 3, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "icon");
    \u0275\u0275text(8, "today");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7);
    \u0275\u0275conditionalCreate(10, DateFieldComponent_Conditional_10_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, DateFieldComponent_ng_template_11_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const calendar_picker_r3 = \u0275\u0275reference(12);
    \u0275\u0275classProp("opacity-30", ctx.disabled);
    \u0275\u0275property("content", calendar_picker_r3)("disabled", ctx.disabled);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.date ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.timezone && ctx.tz ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.has_error ? 10 : -1);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  FormsModule,
  NgControlStatus,
  NgModel,
  DateCalendarComponent,
  IconComponent,
  CustomTooltipComponent,
  TranslatePipe
], encapsulation: 2 });
var DateFieldComponent = _DateFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateFieldComponent, [{
    type: Component,
    args: [{ selector: "a-date-field", template: `
        <button
            class="flex h-12 w-full items-center justify-between rounded border border-neutral"
            customTooltip
            [content]="calendar_picker"
            yPosition="top"
            [disabled]="disabled"
            [class.opacity-30]="disabled"
            matRipple
        >
            <div
                class="flex w-1/2 flex-1 flex-col truncate px-4 py-2 text-left leading-tight"
            >
                <div class="text-base font-normal">
                    @if (date) {
                        {{ date | date: date_format }}
                    } @else {
                        <span class="opacity-30">{{
                            'FORM.DATE_EMPTY' | translate
                        }}</span>
                    }
                </div>
                @if (timezone && tz) {
                    <div class="truncate text-xs opacity-30">
                        @if (range !== 2) {
                            <span>{{ start_of_day }}</span>
                        }
                        @if (range === 0) {
                            <span> - </span>
                        }
                        @if (range !== 1) {
                            <span>{{ end_of_day }}</span>
                        }
                    </div>
                }
            </div>
            <div class="flex h-10 w-10 items-center justify-center text-2xl">
                <icon>today</icon>
            </div>
        </button>
        <div class="error h-5 p-1 text-xs text-error">
            @if (has_error) {
                <span><ng-content></ng-content></span>
            }
        </div>
        <ng-template #calendar_picker>
            <div class="relative w-[18rem] rounded bg-base-100 px-2 py-4">
                <date-calendar
                    [ngModel]="date || now"
                    [from]="from"
                    [to]="until"
                    [offset_weekday]="week_start"
                    (ngModelChange)="setValue($event)"
                ></date-calendar>
            </div>
        </ng-template>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      FormsModule,
      DateCalendarComponent,
      IconComponent,
      CustomTooltipComponent,
      TranslatePipe
    ] }]
  }], () => [], { from_date: [{
    type: Input,
    args: ["from"]
  }], to_date: [{
    type: Input,
    args: ["to"]
  }], week_start: [{
    type: Input
  }], use_24hr: [{
    type: Input
  }], disabled: [{
    type: Input
  }], short: [{
    type: Input
  }], timezone: [{
    type: Input
  }], range: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateFieldComponent, { className: "DateFieldComponent", filePath: "libs/form-fields/src/lib/date-field.component.ts", lineNumber: 107 });
})();

// libs/form-fields/src/lib/duration-field.component.ts
var _c04 = ["*"];
var _forTrack02 = ($index, $item) => $item.id;
function DurationFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r0.selected == null ? null : ctx_r0.selected.date, ctx_r0.time_format + " (z)", ctx_r0.tz), " ");
  }
}
function DurationFieldComponent_For_11_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, option_r3.date, ctx_r0.time_format + " (z)", ctx_r0.tz), " ");
  }
}
function DurationFieldComponent_For_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DurationFieldComponent_For_11_Conditional_2_Conditional_4_Template, 3, 5, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", option_r3.date ? \u0275\u0275pipeBind2(3, 4, option_r3.date, option_r3.id >= 24 * 60 ? "mediumDate" : ctx_r0.time_format) + " (" : "", "", option_r3.name, "", option_r3.date ? ")" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.timezone && ctx_r0.tz ? 4 : -1);
  }
}
function DurationFieldComponent_For_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 11);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
function DurationFieldComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function DurationFieldComponent_For_11_Template_button_click_0_listener() {
      const option_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue(option_r3.id));
    });
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275conditionalCreate(2, DurationFieldComponent_For_11_Conditional_2_Template, 5, 7, "div", 10);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DurationFieldComponent_For_11_Conditional_5_Template, 2, 0, "icon", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.force ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.force);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.selected == null ? null : ctx_r0.selected.id) === option_r3.id ? 5 : -1);
  }
}
var _DurationFieldComponent = class _DurationFieldComponent {
  constructor() {
    this.max = 240;
    this.min = 30;
    this.step = 15;
    this.custom_options = [];
    this.use_24hr = false;
    this.timezone = "";
    this.duration = 60;
    this.duration_options = [];
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }
  get time_format() {
    return this.use_24hr ? "HH : mm" : "h : mm a";
  }
  get selected() {
    return this.duration_options.find((_) => _.id === this.duration);
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  ngOnInit() {
    this.duration_options = this.generateDurationOptions(this.max, this.min, this.step);
    this._updateOption();
  }
  ngOnChanges(changes) {
    if (changes.max || changes.min || changes.step || changes.time || changes.custom_options) {
      this.duration_options = this.generateDurationOptions(this.max, this.min, this.step);
      this._updateOption();
    }
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.duration = new_value;
    if (this._onChange) {
      this._onChange(+new_value);
    }
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.duration = value;
    this._updateOption();
  }
  setDisabledState(disabled) {
    this.disabled = disabled;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  generateDurationOptions(max, min, step) {
    const blocks = [];
    let time = min;
    const date = this.time ? this.time : null;
    for (const option of this.custom_options) {
      blocks.push({
        id: option,
        date: date ? addMinutes(date, option).valueOf() : void 0,
        name: option >= 24 * 60 ? `${formatDuration({
          days: Math.floor(option / (24 * 60))
        })}` : `${formatDuration({
          hours: Math.floor(option / 60),
          minutes: option % 60
        })}`
      });
    }
    while (time <= max) {
      blocks.push({
        id: time,
        date: date ? addMinutes(date, time).valueOf() : void 0,
        name: time === 0 ? formatDuration({ minutes: 0 }, { zero: true }) : time >= 24 * 60 ? `${formatDuration({
          days: Math.floor(time / (24 * 60))
        })}` : `${formatDuration({
          hours: Math.floor(Math.abs(time) / 60),
          minutes: time % 60
        })}`
      });
      time += step;
    }
    blocks.sort((a, b) => a.id - b.id);
    return blocks;
  }
  _updateOption() {
    if (!this.duration_options?.length)
      return;
    const idx = this.duration_options.findIndex((_) => _.id === this.duration);
    if (idx < 0)
      this.setValue(this.min);
  }
};
_DurationFieldComponent.\u0275fac = function DurationFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DurationFieldComponent)();
};
_DurationFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DurationFieldComponent, selectors: [["a-duration-field"]], inputs: { max: "max", min: "min", step: "step", time: "time", disabled: "disabled", custom_options: "custom_options", force: "force", use_24hr: "use_24hr", timezone: "timezone" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _DurationFieldComponent),
    multi: true
  }
]), \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c04, decls: 14, vars: 11, consts: [["menu", "matMenu"], ["duration-field", "", "matRipple", "", 1, "flex", "h-12", "w-full", "items-center", "justify-between", "rounded", "border", "border-neutral", "px-2", 3, "disabled", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-30"], [1, "text-2xl"], [1, "max-h-[15rem]", "min-w-[18rem]"], ["mat-menu-item", "", 1, "text-left"], ["mat-menu-item", "", 1, "text-left", 3, "click"], [1, "flex", "items-center", "justify-between"], [1, "flex", "flex-col", "leading-tight"], [1, "ml-2", "text-2xl"]], template: function DurationFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "button", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DurationFieldComponent_Conditional_5_Template, 3, 5, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 5);
    \u0275\u0275text(7, "arrow_drop_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-menu", 6, 0);
    \u0275\u0275repeaterCreate(10, DurationFieldComponent_For_11_Template, 6, 3, "button", 7, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-error");
    \u0275\u0275projection(13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r4 = \u0275\u0275reference(9);
    \u0275\u0275classProp("opacity-30", ctx.disabled);
    \u0275\u0275property("disabled", ctx.disabled)("matMenuTriggerFor", menu_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", (ctx.selected == null ? null : ctx.selected.date) ? \u0275\u0275pipeBind2(4, 8, ctx.selected == null ? null : ctx.selected.date, ctx.selected.id >= 24 * 60 ? "mediumDate" : ctx.time_format) + " (" : "", "", ctx.selected == null ? null : ctx.selected.name, "", (ctx.selected == null ? null : ctx.selected.date) ? ")" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.timezone && ctx.tz ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.duration_options);
  }
}, dependencies: [MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatFormFieldModule, MatError, CommonModule, DatePipe, IconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=duration-field.component.css.map */"] });
var DurationFieldComponent = _DurationFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DurationFieldComponent, [{
    type: Component,
    args: [{ selector: "a-duration-field", template: `
        <button
            duration-field
            class="flex h-12 w-full items-center justify-between rounded border border-neutral px-2"
            [disabled]="disabled"
            [class.opacity-30]="disabled"
            matRipple
            [matMenuTriggerFor]="menu"
        >
            <div
                class="flex w-1/2 flex-1 flex-col px-2 text-left leading-tight"
            >
                <div class="truncate">
                    {{
                        selected?.date
                            ? (selected?.date
                                  | date
                                      : (selected.id >= 24 * 60
                                            ? 'mediumDate'
                                            : time_format)) + ' ('
                            : ''
                    }}{{ selected?.name }}{{ selected?.date ? ')' : '' }}
                </div>
                @if (timezone && tz) {
                    <div class="truncate text-xs opacity-30">
                        {{ selected?.date | date: time_format + ' (z)' : tz }}
                    </div>
                }
            </div>
            <icon class="text-2xl">arrow_drop_down</icon>
        </button>
        <mat-menu #menu="matMenu" class="max-h-[15rem] min-w-[18rem]">
            @for (option of duration_options; track option.id) {
                <button
                    mat-menu-item
                    class="text-left"
                    (click)="setValue(option.id)"
                >
                    <div class="flex items-center justify-between">
                        @if (!force) {
                            <div class="flex flex-col leading-tight">
                                <div class="truncate">
                                    {{
                                        option.date
                                            ? (option.date
                                                  | date
                                                      : (option.id >= 24 * 60
                                                            ? 'mediumDate'
                                                            : time_format)) +
                                              ' ('
                                            : ''
                                    }}{{ option.name
                                    }}{{ option.date ? ')' : '' }}
                                </div>
                                @if (timezone && tz) {
                                    <div class="truncate text-xs opacity-30">
                                        {{
                                            option.date
                                                | date
                                                    : time_format + ' (z)'
                                                    : tz
                                        }}
                                    </div>
                                }
                            </div>
                        }
                        <div>{{ force }}</div>
                        @if (selected?.id === option.id) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            }
        </mat-menu>
        <mat-error><ng-content /></mat-error>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DurationFieldComponent),
        multi: true
      }
    ], imports: [MatMenuModule, MatFormFieldModule, CommonModule, IconComponent], styles: ["/* angular:styles/component:css;82179a093a1237a0219e0de14f115a8c6a107062508b871f4aa73c902619b2f8;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/duration-field.component.ts */\n:host {\n  width: 100%;\n}\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=duration-field.component.css.map */\n"] }]
  }], null, { max: [{
    type: Input
  }], min: [{
    type: Input
  }], step: [{
    type: Input
  }], time: [{
    type: Input
  }], disabled: [{
    type: Input
  }], custom_options: [{
    type: Input
  }], force: [{
    type: Input
  }], use_24hr: [{
    type: Input
  }], timezone: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DurationFieldComponent, { className: "DurationFieldComponent", filePath: "libs/form-fields/src/lib/duration-field.component.ts", lineNumber: 121 });
})();

// libs/form-fields/src/lib/time-field.component.ts
var _c05 = ["select"];
var _c13 = ["*"];
var _forTrack03 = ($index, $item) => $item.id;
function TimeFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r0.active_time, ctx_r0.time_format + " (z)", ctx_r0.tz), " ");
  }
}
function TimeFieldComponent_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r0.force_time, ctx_r0.time_format + " (z)", ctx_r0.tz), " ");
  }
}
function TimeFieldComponent_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 13);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
function TimeFieldComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function TimeFieldComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue(ctx_r0.force_time));
    });
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10)(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TimeFieldComponent_Conditional_10_Conditional_6_Template, 3, 5, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TimeFieldComponent_Conditional_10_Conditional_7_Template, 2, 0, "icon", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.force_time);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, ctx_r0.force_time, ctx_r0.time_format), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.timezone && ctx_r0.tz ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.active_time === ctx_r0.force_time ? 7 : -1);
  }
}
function TimeFieldComponent_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, option_r4.date, ctx_r0.time_format + " (z)", ctx_r0.tz), " ");
  }
}
function TimeFieldComponent_For_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 13);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
function TimeFieldComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function TimeFieldComponent_For_12_Template_button_click_0_listener() {
      const option_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue(option_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10)(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TimeFieldComponent_For_12_Conditional_6_Template, 3, 5, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TimeFieldComponent_For_12_Conditional_7_Template, 2, 0, "icon", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", option_r4.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(5, 5, option_r4.date, ctx_r0.time_format), " ", ctx_r0.extra_info_fn(option_r4.date), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.timezone && ctx_r0.tz ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.active_time === option_r4.date ? 7 : -1);
  }
}
function TimeFieldComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
var _TimeFieldComponent = class _TimeFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.step = 15;
    this.no_past_times = true;
    this.use_24hr = false;
    this.extra_info_fn = (t) => "";
    this.from = startOfDay(Date.now()).valueOf();
    this.timezone = "";
    this.date = (/* @__PURE__ */ new Date()).valueOf();
    this.time = format(/* @__PURE__ */ new Date(), "HH:mm");
    this.active_time = Date.now();
    this.select_field = viewChild("select");
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }
  get time_format() {
    return this.use_24hr ? "HH : mm" : "h : mm a";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  ngOnInit() {
    this.show_select = true;
    this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times, this.step);
    this.timeout("hide", () => this.show_select = false);
    this.active_time = this._time_options.find((_) => _.id === format(this.date, "HH:mm"))?.date || this.active_time;
  }
  ngOnChanges(changes) {
    if (changes.no_past_times || changes.step || changes.from) {
      this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times, this.step);
    }
  }
  /** Available time blocks for the selected date */
  get time_options() {
    const time = (this.time || "00:00").split(":");
    const date = set(this.date, { hours: +time[0], minutes: +time[1] });
    if (date.getMinutes() % 15 !== 0 && !this._time_options.find((time2) => time2.id === format(date, "HH:mm"))) {
      this._time_options.push({
        date,
        id: format(date, "HH:mm")
      });
      this._time_options.sort((a, b) => `${a.id}`.localeCompare(`${b.id}`));
    }
    return this._time_options;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.time = new_value;
    if (this._onChange) {
      const time2 = (this.time || "00:00").split(":");
      const date2 = startOfMinute(set(this.date, { hours: +time2[0], minutes: +time2[1] }));
      this._onChange(date2.valueOf());
    }
    const time = this.force_time || this.time;
    const date = startOfMinute(set(this.date, { hours: +time[0], minutes: +time[1] }));
    this.active_time = this._time_options.find((_) => _.id === time)?.date || date;
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.date = value || this.date;
    let date = startOfMinute(this.date);
    date = roundToNearestMinutes(date, { nearestTo: 5 });
    this.time = format(date, "HH:mm");
    this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times, this.step);
    const time = this.force_time || this.time;
    this.active_time = this._time_options.find((_) => _.id === time)?.date || date;
  }
  setDisabledState(disabled) {
    this.disabled = disabled;
    this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times || disabled, this.step);
  }
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  /**
   * Show select field for time options
   */
  showSelect() {
    this.show_select = true;
    this.timeout("on_shown", () => {
      const select_field = this.select_field();
      if (select_field) {
        select_field.focus();
        select_field.open();
        this.subscription("listen_close", select_field.openedChange.subscribe((state) => {
          if (!state) {
            this.show_select = false;
          }
        }));
      }
    });
  }
  /**
   * Generate a list of time options for the given date
   * @param datestamp Date to generate options for
   * @param show_past Whether past times should be options
   */
  generateAvailableTimes(datestamp, show_past, step = 15) {
    const now = new Date(Math.max(this.from, Date.now()));
    let date = new Date(datestamp);
    const blocks = [];
    if (show_past || !isSameDay(date, now) && isAfter(date, now)) {
      date = startOfDay(date);
    } else if (isAfter(date, now)) {
      date = new Date(now);
    }
    date = roundToNearestMinutes(date, { nearestTo: step });
    const end = endOfDay(date);
    while (isAfter(end, date)) {
      blocks.push({
        date: date.valueOf(),
        id: format(date, "HH:mm")
      });
      date = addMinutes(date, step);
    }
    return blocks;
  }
};
_TimeFieldComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TimeFieldComponent_BaseFactory;
  return function TimeFieldComponent_Factory(__ngFactoryType__) {
    return (\u0275TimeFieldComponent_BaseFactory || (\u0275TimeFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TimeFieldComponent)))(__ngFactoryType__ || _TimeFieldComponent);
  };
})();
_TimeFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimeFieldComponent, selectors: [["a-time-field"]], viewQuery: function TimeFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.select_field, _c05, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { step: "step", disabled: "disabled", no_past_times: "no_past_times", use_24hr: "use_24hr", force_time: "force_time", no_error: "no_error", extra_info_fn: "extra_info_fn", from: "from", timezone: "timezone" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _TimeFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c13, decls: 14, vars: 11, consts: [["menu", "matMenu"], ["time-field", "", "matRipple", "", 1, "flex", "h-12", "w-full", "items-center", "justify-between", "rounded", "border", "border-neutral", "px-2", 3, "disabled", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-30"], [1, "text-2xl"], [1, "max-h-[15rem]", "min-w-[18rem]"], ["mat-menu-item", "", 1, "text-left", 3, "value"], ["mat-menu-item", "", 1, "text-left", 3, "click", "value"], [1, "flex", "items-center", "justify-between"], [1, "flex", "flex-col", "leading-tight"], [1, ""], [1, "text-xs", "opacity-30"], [1, "ml-2", "text-2xl"]], template: function TimeFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "button", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, TimeFieldComponent_Conditional_5_Template, 3, 5, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 5);
    \u0275\u0275text(7, "arrow_drop_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-menu", 6, 0);
    \u0275\u0275conditionalCreate(10, TimeFieldComponent_Conditional_10_Template, 8, 7, "button", 7);
    \u0275\u0275repeaterCreate(11, TimeFieldComponent_For_12_Template, 8, 8, "button", 7, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, TimeFieldComponent_Conditional_13_Template, 2, 0, "mat-error");
  }
  if (rf & 2) {
    const menu_r5 = \u0275\u0275reference(9);
    \u0275\u0275classProp("opacity-30", ctx.disabled);
    \u0275\u0275property("disabled", ctx.disabled)("matMenuTriggerFor", menu_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 8, ctx.active_time, ctx.time_format), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.timezone && ctx.tz ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.force_time ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.time_options);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.no_error ? 13 : -1);
  }
}, dependencies: [CommonModule, DatePipe, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatFormFieldModule, MatError, IconComponent], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=time-field.component.css.map */"] });
var TimeFieldComponent = _TimeFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeFieldComponent, [{
    type: Component,
    args: [{ selector: "a-time-field", template: `
        <button
            time-field
            matRipple
            class="flex h-12 w-full items-center justify-between rounded border border-neutral px-2"
            [disabled]="disabled"
            [class.opacity-30]="disabled"
            [matMenuTriggerFor]="menu"
        >
            <div
                class="flex w-1/2 flex-1 flex-col px-2 text-left leading-tight"
            >
                <div class="truncate">
                    {{ active_time | date: time_format }}
                </div>
                @if (timezone && tz) {
                    <div class="truncate text-xs opacity-30">
                        {{ active_time | date: time_format + ' (z)' : tz }}
                    </div>
                }
            </div>
            <icon class="text-2xl">arrow_drop_down</icon>
        </button>
        <mat-menu #menu="matMenu" class="max-h-[15rem] min-w-[18rem]">
            @if (force_time) {
                <button
                    mat-menu-item
                    [value]="force_time"
                    class="text-left"
                    (click)="setValue(force_time)"
                >
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col leading-tight">
                            <div class="">
                                {{ force_time | date: time_format }}
                            </div>
                            @if (timezone && tz) {
                                <div class="text-xs opacity-30">
                                    {{
                                        force_time
                                            | date: time_format + ' (z)' : tz
                                    }}
                                </div>
                            }
                        </div>
                        @if (active_time === force_time) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            }
            @for (option of time_options; track option.id) {
                <button
                    mat-menu-item
                    [value]="option.id"
                    class="text-left"
                    (click)="setValue(option.id)"
                >
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col leading-tight">
                            <div class="">
                                {{ option.date | date: time_format }}
                                {{ extra_info_fn(option.date) }}
                            </div>
                            @if (timezone && tz) {
                                <div class="text-xs opacity-30">
                                    {{
                                        option.date
                                            | date: time_format + ' (z)' : tz
                                    }}
                                </div>
                            }
                        </div>
                        @if (active_time === option.date) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            }
        </mat-menu>
        @if (!no_error) {
            <mat-error><ng-content /></mat-error>
        }
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TimeFieldComponent),
        multi: true
      }
    ], imports: [CommonModule, MatMenuModule, MatFormFieldModule, IconComponent], styles: ["/* angular:styles/component:css;5a9d4ad78fbd733d6bae3e98235b5cff9293f47e8579cab48bc92b1fef278e28;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/time-field.component.ts */\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=time-field.component.css.map */\n"] }]
  }], null, { step: [{
    type: Input
  }], disabled: [{
    type: Input
  }], no_past_times: [{
    type: Input
  }], use_24hr: [{
    type: Input
  }], force_time: [{
    type: Input
  }], no_error: [{
    type: Input
  }], extra_info_fn: [{
    type: Input
  }], from: [{
    type: Input
  }], timezone: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimeFieldComponent, { className: "TimeFieldComponent", filePath: "libs/form-fields/src/lib/time-field.component.ts", lineNumber: 135 });
})();

// libs/explore/src/lib/set-datetime-modal.component.ts
var _c06 = () => ({ standalone: true });
function SetDatetimeModalComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 11)(2, "label");
    \u0275\u0275text(3, "Resource:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resource.name || ctx_r1.resource.map_id || "Unknown Resource", " ");
  }
}
function SetDatetimeModalComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "label");
    \u0275\u0275text(3, "Host");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-user-search-field", 13);
    \u0275\u0275elementEnd()();
  }
}
function SetDatetimeModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 2);
    \u0275\u0275conditionalCreate(1, SetDatetimeModalComponent_Conditional_6_Conditional_1_Template, 6, 1, "div", 5);
    \u0275\u0275conditionalCreate(2, SetDatetimeModalComponent_Conditional_6_Conditional_2_Template, 5, 0, "div", 5);
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "label");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a-date-field", 7);
    \u0275\u0275text(8, " Date and time must be in the future ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 5)(10, "div", 8)(11, "label");
    \u0275\u0275text(12, "Start Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a-time-field", 9);
    \u0275\u0275listener("ngModelChange", function SetDatetimeModalComponent_Conditional_6_Template_a_time_field_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8)(15, "label");
    \u0275\u0275text(16, "End Time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "a-duration-field", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.resource ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.host ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("to", ctx_r1.book_until);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(12, _c06))("use_24hr", ctx_r1.use_24hr_time);
    \u0275\u0275advance(4);
    \u0275\u0275property("time", (tmp_8_0 = ctx_r1.form.get("date")) == null ? null : tmp_8_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr_time);
  }
}
var _SetDatetimeModalComponent = class _SetDatetimeModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.host = this._data.host;
    this.form = new FormGroup({
      user: new FormControl(this._data.user),
      date: new FormControl(this._data.date),
      duration: new FormControl(this._data.duration)
    });
    this.book_until = this._data.until;
    this.resource = this._data.resource;
  }
  get use_24hr_time() {
    return this._settings.get("app.use_24_hour_time");
  }
};
_SetDatetimeModalComponent.\u0275fac = function SetDatetimeModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SetDatetimeModalComponent)();
};
_SetDatetimeModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetDatetimeModalComponent, selectors: [["set-datetime-modal"]], decls: 11, vars: 5, consts: [["classs", "flex items-center justify-between"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-[24rem]", "max-w-[85vw]", "pt-4", 3, "formGroup"], [1, "flex", "w-full", "items-center", "justify-center", "border-t", "border-base-200", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "mat-dialog-close"], [1, "mx-auto", "flex", "w-[640px]", "max-w-[calc(100%-2rem)]", "flex-col", "space-x-0", "sm:flex-row", "sm:space-x-2"], [1, "flex", "w-full", "flex-1", "flex-col", "sm:w-1/4"], ["formControlName", "date", 3, "to"], [1, "flex", "w-full", "flex-1", "flex-col", "sm:w-1/3"], [3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr"], ["formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr"], [1, "mb-2", "flex", "w-full", "flex-1", "flex-col", "sm:w-1/4"], [1, "mb-4", "w-full", "rounded", "border", "border-base-200", "px-4", "py-3"], ["formControlName", "user", 1, "mb-4"]], template: function SetDatetimeModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2");
    \u0275\u0275text(2, "Set date and time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 1)(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(6, SetDatetimeModalComponent_Conditional_6_Template, 18, 13, "main", 2);
    \u0275\u0275elementStart(7, "footer", 3)(8, "button", 4);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.form ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-dialog-close", ctx.form.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 3, "COMMON.CONTINUE"), " ");
  }
}, dependencies: [
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  IconComponent,
  DurationFieldComponent,
  TimeFieldComponent,
  DateFieldComponent,
  UserSearchFieldComponent,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  TranslatePipe
], encapsulation: 2 });
var SetDatetimeModalComponent = _SetDatetimeModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetDatetimeModalComponent, [{
    type: Component,
    args: [{ selector: "set-datetime-modal", template: `
        <header classs="flex items-center justify-between">
            <h2>Set date and time</h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        @if (form) {
            <main [formGroup]="form" class="w-[24rem] max-w-[85vw] pt-4">
                @if (resource) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                    >
                        <div class="mb-2 flex w-full flex-1 flex-col sm:w-1/4">
                            <label>Resource:</label>
                            <div
                                class="mb-4 w-full rounded border border-base-200 px-4 py-3"
                            >
                                {{
                                    resource.name ||
                                        resource.map_id ||
                                        'Unknown Resource'
                                }}
                            </div>
                        </div>
                    </div>
                }
                @if (host) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                    >
                        <div class="flex w-full flex-1 flex-col sm:w-1/4">
                            <label>Host</label>
                            <a-user-search-field
                                formControlName="user"
                                class="mb-4"
                            ></a-user-search-field>
                        </div>
                    </div>
                }
                <div
                    class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                >
                    <div class="flex w-full flex-1 flex-col sm:w-1/4">
                        <label>Date</label>
                        <a-date-field [to]="book_until" formControlName="date">
                            Date and time must be in the future
                        </a-date-field>
                    </div>
                </div>
                <div
                    class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                >
                    <div class="flex w-full flex-1 flex-col sm:w-1/3">
                        <label>Start Time</label>
                        <a-time-field
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [use_24hr]="use_24hr_time"
                        ></a-time-field>
                    </div>
                    <div class="flex w-full flex-1 flex-col sm:w-1/3">
                        <label>End Time</label>
                        <a-duration-field
                            formControlName="duration"
                            [time]="form.get('date')?.value"
                            [max]="10 * 60"
                            [min]="60"
                            [step]="60"
                            [use_24hr]="use_24hr_time"
                        >
                        </a-duration-field>
                    </div>
                </div>
            </main>
        }
        <footer
            class="flex w-full items-center justify-center border-t border-base-200 p-2"
        >
            <button btn matRipple [mat-dialog-close]="form.value" class="w-32">
                {{ 'COMMON.CONTINUE' | translate }}
            </button>
        </footer>
    `, imports: [
      MatRippleModule,
      MatDialogModule,
      IconComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      UserSearchFieldComponent,
      FormsModule,
      ReactiveFormsModule,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetDatetimeModalComponent, { className: "SetDatetimeModalComponent", filePath: "libs/explore/src/lib/set-datetime-modal.component.ts", lineNumber: 121 });
})();

// libs/explore/src/lib/explore-desk-info.component.ts
function ExploreDeskInfoComponent_ng_template_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.user);
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.department, " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
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
    \u0275\u0275conditionalCreate(5, ExploreDeskInfoComponent_ng_template_1_Conditional_5_Template, 2, 1, "p", 6);
    \u0275\u0275conditionalCreate(6, ExploreDeskInfoComponent_ng_template_1_Conditional_6_Template, 2, 1, "p", 7);
    \u0275\u0275conditionalCreate(7, ExploreDeskInfoComponent_ng_template_1_Conditional_7_Template, 4, 8, "p", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("pointer-events-none absolute left-0 top-0 rounded bg-base-100 p-4 shadow " + ctx_r0.x_pos + " " + ctx_r0.y_pos);
    \u0275\u0275property("id", ctx_r0.map_id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.name || ctx_r0.map_id || ctx_r0.id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.user ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.user && ctx_r0.department ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.start ? 7 : -1);
  }
}
var _ExploreDeskInfoComponent = class _ExploreDeskInfoComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
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
};
_ExploreDeskInfoComponent.\u0275fac = function ExploreDeskInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreDeskInfoComponent)();
};
_ExploreDeskInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreDeskInfoComponent, selectors: [["explore-desk-info"]], decls: 3, vars: 8, consts: [["desk_tooltip", ""], ["customTooltip", "", 1, "pointer-events-auto", "relative", "z-20", "h-full", "w-full", 3, "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 3, "id"], [1, "arrow"], [1, "details"], ["map-id", "", 1, "m-0", "font-medium"], ["user", "", 1, "mt-2", "text-sm"], ["user", "", 1, "mt-1", "text-sm"], ["start", "", 1, "mt-1", "text-sm"]], template: function ExploreDeskInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
    \u0275\u0275template(1, ExploreDeskInfoComponent_ng_template_1_Template, 8, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const desk_tooltip_r2 = \u0275\u0275reference(2);
    \u0275\u0275property("content", desk_tooltip_r2)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3e3);
    \u0275\u0275attribute("id", ctx.id)("map_id", ctx.map_id);
  }
}, dependencies: [CommonModule, DatePipe, CustomTooltipComponent], styles: ["\n\n[name=space-info][_ngcontent-%COMP%] {\n  width: 16rem;\n}\n[name=status][_ngcontent-%COMP%] {\n  background-color: #43a047;\n  font-weight: 500;\n}\n[name=status].busy[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n[name=status].pending[_ngcontent-%COMP%] {\n  background-color: #ffb300;\n}\n[name=status].not-bookable[_ngcontent-%COMP%] {\n  background-color: #757575;\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */"] });
var ExploreDeskInfoComponent = _ExploreDeskInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDeskInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-desk-info", template: `
        <div
            customTooltip
            [content]="desk_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [delay]="3000"
            class="pointer-events-auto relative z-20 h-full w-full"
            [attr.id]="id"
            [attr.map_id]="map_id"
        ></div>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="map_id"
                [class]="
                    'pointer-events-none absolute left-0 top-0 rounded bg-base-100 p-4 shadow ' +
                    x_pos +
                    ' ' +
                    y_pos
                "
            >
                <div class="arrow"></div>
                <div class="details">
                    <h4 map-id class="m-0 font-medium">
                        {{ name || map_id || id }}
                    </h4>
                    @if (user) {
                        <p user class="mt-2 text-sm">{{ user }}</p>
                    }
                    @if (user && department) {
                        <p user class="mt-1 text-sm">
                            {{ department }}
                        </p>
                    }
                    @if (start) {
                        <p start class="mt-1 text-sm">
                            {{ start | date: 'shortTime' }} &ndash;
                            {{ end | date: 'shortTime' }}
                        </p>
                    }
                </div>
            </div>
        </ng-template>
    `, imports: [CommonModule, CustomTooltipComponent], styles: ["/* angular:styles/component:css;252788f1fd3dfe6526bef8efafd7e1f46286402468abf0b3fe478bff674c8d3f;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-desk-info.component.ts */\n[name=space-info] {\n  width: 16rem;\n}\n[name=status] {\n  background-color: #43a047;\n  font-weight: 500;\n}\n[name=status].busy {\n  background-color: #e53935;\n}\n[name=status].pending {\n  background-color: #ffb300;\n}\n[name=status].not-bookable {\n  background-color: #757575;\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreDeskInfoComponent, { className: "ExploreDeskInfoComponent", filePath: "libs/explore/src/lib/explore-desk-info.component.ts", lineNumber: 93 });
})();

// libs/explore/src/lib/explore-device-info.component.ts
var _c07 = ["explore-device-info", ""];
function ExploreDeviceInfoComponent_ng_template_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_MAC"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.mac, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_MANUFACTURER"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.manufacturer, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_OS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.os, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_SSID"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.ssid, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_USERNAME"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.user == null ? null : ctx_r2.user.name) || (ctx_r2.user == null ? null : ctx_r2.user.username) || ctx_r2.username, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_TYPE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.user.type, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("mouseleave", function ExploreDeviceInfoComponent_ng_template_5_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275conditionalCreate(3, ExploreDeviceInfoComponent_ng_template_5_Conditional_3_Template, 5, 4, "p", 9);
    \u0275\u0275elementStart(4, "p")(5, "label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p")(10, "label");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, ExploreDeviceInfoComponent_ng_template_5_Conditional_14_Template, 5, 4, "p", 10);
    \u0275\u0275conditionalCreate(15, ExploreDeviceInfoComponent_ng_template_5_Conditional_15_Template, 5, 4, "p", 11);
    \u0275\u0275conditionalCreate(16, ExploreDeviceInfoComponent_ng_template_5_Conditional_16_Template, 5, 4, "p", 12);
    \u0275\u0275conditionalCreate(17, ExploreDeviceInfoComponent_ng_template_5_Conditional_17_Template, 5, 4, "p", 13);
    \u0275\u0275conditionalCreate(18, ExploreDeviceInfoComponent_ng_template_5_Conditional_18_Template, 5, 4, "p", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.mac && !ctx_r2.hide_fields.includes("mac") ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 10, "EXPLORE.DEVICE_ACCURACY"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.variance, "m ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 12, "EXPLORE.DEVICE_LAST_SEEN"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.last_seen, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.manufacturer && !ctx_r2.hide_fields.includes("manufacturer") ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.os && !ctx_r2.hide_fields.includes("os") ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.ssid && !ctx_r2.hide_fields.includes("ssid") ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.username && !ctx_r2.hide_fields.includes("username") ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.user && !ctx_r2.hide_fields.includes("user") ? 18 : -1);
  }
}
var EMPTY = [];
var _ExploreDeviceInfoComponent = class _ExploreDeviceInfoComponent extends AsyncHandler {
  get hide_fields() {
    return this._settings.get("app.explore.hide_device_fields") || EMPTY;
  }
  /** Time of the last update */
  get last_seen() {
    return formatDistanceToNow((this._details.last_seen || 0) * 1e3, {
      addSuffix: true
    });
  }
  /** Diameter of the radius circle */
  get diameter() {
    return this._details.variance * 100 * this.zoom;
  }
  get distance() {
    return Math.abs(differenceInMinutes((this._details.last_seen || 0) * 1e3, /* @__PURE__ */ new Date()));
  }
  get distance_color() {
    return this.distance < 10 ? "#43a047" : this.distance < 20 ? "#ffb300" : "#e53935";
  }
  constructor() {
    super();
    this._details = inject(MAP_FEATURE_DATA);
    this._settings = inject(SettingsService);
    this._element = inject(ElementRef);
    this.username = "";
    this.user = this._details.user;
    this.mac = this._details.mac;
    this.manufacturer = this._details.manufacturer;
    this.os = this._details.os;
    this.ssid = this._details.ssid;
    this.variance = this._details.variance?.toFixed(2);
    this.bg_color = this._details.bg_color || this.distance_color;
    this.zoom = 1;
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
      this.x_pos = position.x >= 0.5 ? "end" : "start";
      this.subscription("zoom", this._details.zoom$.subscribe((_) => this.zoom = _));
    }, 200);
  }
  loadUser() {
    return __async(this, null, function* () {
      if (this.username)
        return;
      const mod = Ea(this._details.system, "LocationServices");
      if (!mod)
        return;
      this.username = "Loading...";
      const details = yield mod.execute("check_ownership_of", [this.mac]).catch(() => null);
      this.username = details && details.assigned_to ? details.assigned_to : "";
    });
  }
};
_ExploreDeviceInfoComponent.\u0275fac = function ExploreDeviceInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreDeviceInfoComponent)();
};
_ExploreDeviceInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreDeviceInfoComponent, selectors: [["", "explore-device-info", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c07, decls: 7, vars: 9, consts: [["dot", ""], ["device_tooltip", ""], ["name", "radius", 1, "radius", "center", "border-blue-600", "absolute", "rounded-full", "border-8", "border-dashed", "bg-info", "bg-opacity-25"], ["shadow", "", 1, "center", "absolute", "h-8", "w-8", "rounded-full", "bg-neutral"], ["name", "dot", 1, "center", "absolute", "h-3", "w-3", "rounded-full", "border-2", "border-white", "shadow"], ["customTooltip", "", 1, "pointer-events-auto", "absolute", "inset-0", 3, "mouseenter", "content", "backdrop", "xPosition", "yPosition", "hover"], ["name", "device-info", 1, "pointer-events-none", "left-0", "top-0", "mx-2", "w-64", "rounded", "bg-base-100", "p-4", "shadow", 3, "mouseleave"], [1, "arrow"], [1, "details"], [1, "break-words"], ["type", ""], ["os", ""], ["ssid", ""], ["username", ""], ["user", ""]], template: function ExploreDeviceInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 2)(1, "div", 3)(2, "div", 4, 0);
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275listener("mouseenter", function ExploreDeviceInfoComponent_Template_div_mouseenter_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.loadUser());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ExploreDeviceInfoComponent_ng_template_5_Template, 19, 14, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const device_tooltip_r4 = \u0275\u0275reference(6);
    \u0275\u0275styleMap("height: " + ctx.diameter + "%; width: " + ctx.diameter + "%;");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx.bg_color);
    \u0275\u0275advance(2);
    \u0275\u0275property("content", device_tooltip_r4)("backdrop", false)("xPosition", ctx.x_pos)("yPosition", ctx.y_pos)("hover", true);
  }
}, dependencies: [TranslatePipe, CustomTooltipComponent], styles: ["\n\n[_nghost-%COMP%] {\n  pointer-events: auto;\n}\n[_nghost-%COMP%]    > [name=dot][_ngcontent-%COMP%] {\n  background-color: #616161;\n}\n[_nghost-%COMP%]:hover    > [name=radius][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[name=radius][_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n  pointer-events: none;\n}\n/*# sourceMappingURL=explore-device-info.component.css.map */"] });
var ExploreDeviceInfoComponent = _ExploreDeviceInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDeviceInfoComponent, [{
    type: Component,
    args: [{ selector: "[explore-device-info]", template: `
        <div
            name="radius"
            class="radius center border-blue-600 absolute rounded-full border-8 border-dashed bg-info bg-opacity-25"
            [style]="'height: ' + diameter + '%; width: ' + diameter + '%;'"
        ></div>
        <div
            shadow
            class="center absolute h-8 w-8 rounded-full bg-neutral"
        ></div>
        <div
            name="dot"
            #dot
            class="center absolute h-3 w-3 rounded-full border-2 border-white shadow"
            [style.background-color]="bg_color"
        ></div>
        <div
            customTooltip
            [content]="device_tooltip"
            [backdrop]="false"
            [xPosition]="x_pos"
            [yPosition]="y_pos"
            [hover]="true"
            (mouseenter)="loadUser()"
            class="pointer-events-auto absolute inset-0"
        ></div>

        <ng-template #device_tooltip>
            <div
                name="device-info"
                class="pointer-events-none left-0 top-0 mx-2 w-64 rounded bg-base-100 p-4 shadow"
                (mouseleave)="close()"
            >
                <div class="arrow"></div>
                <div class="details">
                    @if (mac && !hide_fields.includes('mac')) {
                        <p class="break-words">
                            <label
                                >{{ 'EXPLORE.DEVICE_MAC' | translate }}:</label
                            >
                            {{ mac }}
                        </p>
                    }
                    <p>
                        <label
                            >{{ 'EXPLORE.DEVICE_ACCURACY' | translate }}:</label
                        >
                        {{ variance }}m
                    </p>
                    <p>
                        <label
                            >{{
                                'EXPLORE.DEVICE_LAST_SEEN' | translate
                            }}:</label
                        >
                        {{ last_seen }}
                    </p>
                    @if (
                        manufacturer && !hide_fields.includes('manufacturer')
                    ) {
                        <p type>
                            <label
                                >{{
                                    'EXPLORE.DEVICE_MANUFACTURER' | translate
                                }}:</label
                            >
                            {{ manufacturer }}
                        </p>
                    }
                    @if (os && !hide_fields.includes('os')) {
                        <p os>
                            <label
                                >{{ 'EXPLORE.DEVICE_OS' | translate }}:</label
                            >
                            {{ os }}
                        </p>
                    }
                    @if (ssid && !hide_fields.includes('ssid')) {
                        <p ssid>
                            <label
                                >{{ 'EXPLORE.DEVICE_SSID' | translate }}:</label
                            >
                            {{ ssid }}
                        </p>
                    }
                    @if (username && !hide_fields.includes('username')) {
                        <p username>
                            <label
                                >{{
                                    'EXPLORE.DEVICE_USERNAME' | translate
                                }}:</label
                            >
                            {{ user?.name || user?.username || username }}
                        </p>
                    }
                    @if (user && !hide_fields.includes('user')) {
                        <p user>
                            <label
                                >{{ 'EXPLORE.DEVICE_TYPE' | translate }}:</label
                            >
                            {{ user.type }}
                        </p>
                    }
                </div>
            </div>
        </ng-template>
    `, imports: [TranslatePipe, CustomTooltipComponent], styles: ["/* angular:styles/component:css;9939b96a3826add6f4c5b0fbbef0c7444ff148d81d00a9d87a90d1a088d1447c;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-device-info.component.ts */\n:host {\n  pointer-events: auto;\n}\n:host > [name=dot] {\n  background-color: #616161;\n}\n:host:hover > [name=radius] {\n  opacity: 1;\n}\n[name=radius] {\n  opacity: 0;\n  transition: opacity 200ms;\n  pointer-events: none;\n}\n/*# sourceMappingURL=explore-device-info.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreDeviceInfoComponent, { className: "ExploreDeviceInfoComponent", filePath: "libs/explore/src/lib/explore-device-info.component.ts", lineNumber: 158 });
})();

// libs/events/src/lib/event-link-modal.component.ts
var _EventLinkModalComponent = class _EventLinkModalComponent {
  constructor() {
    this._event = inject(MAT_DIALOG_DATA);
    this._dialog = inject(MatDialogRef);
    this.outlook_link = generateMicrosoftCalendarLink(this._event);
    this.google_link = generateGoogleCalendarLink(this._event);
    this.ical_link = generateCalendarFileLink(this._event);
    this.has_actioned = false;
  }
  close() {
    if (!this.has_actioned) {
      return notifyError("You need to select a calendar option to finish creating this booking");
    }
    this._dialog.close(true);
  }
};
_EventLinkModalComponent.\u0275fac = function EventLinkModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventLinkModalComponent)();
};
_EventLinkModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventLinkModalComponent, selectors: [["event-link-modal"]], decls: 29, vars: 28, consts: [[1, "w-full", "p-4", "pb-2"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded", "p-2", "pr-4", 3, "click", "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"], ["btn", "", "matRipple", "", 1, "w-64", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "right-0", "top-2", 3, "mat-dialog-close"]], template: function EventLinkModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "a", 2);
    \u0275\u0275pipe(5, "sanitize");
    \u0275\u0275listener("click", function EventLinkModalComponent_Template_a_click_4_listener() {
      return ctx.has_actioned = true;
    });
    \u0275\u0275element(6, "img", 3);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 2);
    \u0275\u0275pipe(11, "sanitize");
    \u0275\u0275listener("click", function EventLinkModalComponent_Template_a_click_10_listener() {
      return ctx.has_actioned = true;
    });
    \u0275\u0275element(12, "img", 4);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a", 2);
    \u0275\u0275pipe(17, "safe");
    \u0275\u0275listener("click", function EventLinkModalComponent_Template_a_click_16_listener() {
      return ctx.has_actioned = true;
    });
    \u0275\u0275elementStart(18, "icon", 5);
    \u0275\u0275text(19, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 6);
    \u0275\u0275listener("click", function EventLinkModalComponent_Template_button_click_23_listener() {
      return ctx.close();
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 7)(27, "icon");
    \u0275\u0275text(28, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 9, "BOOKINGS.LINK_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(5, 11, ctx.outlook_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "BOOKINGS.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(11, 16, ctx.google_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 19, "BOOKINGS.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(17, 21, ctx.ical_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 24, "BOOKINGS.LINK_ICAL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 26, "COMMON.CLOSE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-dialog-close", ctx.has_actioned);
  }
}, dependencies: [
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  SafePipe,
  SanitizePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=event-link-modal.component.css.map */"] });
var EventLinkModalComponent = _EventLinkModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventLinkModalComponent, [{
    type: Component,
    args: [{ selector: "event-link-modal", template: `
        <div class="w-full p-4 pb-2">
            {{ 'BOOKINGS.LINK_HEADER' | translate }}
        </div>
        <div class="relative flex flex-col items-center space-y-4 p-4">
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="outlook_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
                (click)="has_actioned = true"
            >
                <img src="assets/icons/outlook.svg" class="w-6" />
                <span>{{ 'BOOKINGS.LINK_OUTLOOK' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="google_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
                (click)="has_actioned = true"
            >
                <img src="assets/icons/gcal.svg" class="w-6" />
                <span>{{ 'BOOKINGS.LINK_GOOGLE' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="ical_link | safe: 'url'"
                target="_blank"
                rel="noopener noreferer"
                (click)="has_actioned = true"
            >
                <icon class="text-xl">download</icon>
                <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
            </a>
            <button class="w-64" btn matRipple (click)="close()">
                {{ 'COMMON.CLOSE' | translate }}
            </button>
        </div>
        <button
            icon
            matRipple
            [mat-dialog-close]="has_actioned"
            class="absolute right-0 top-2"
        >
            <icon>close</icon>
        </button>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatDialogModule,
      SafePipe,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/event-link-modal.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=event-link-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventLinkModalComponent, { className: "EventLinkModalComponent", filePath: "libs/events/src/lib/event-link-modal.component.ts", lineNumber: 92 });
})();

// libs/events/src/lib/utilities.ts
var BOOKING_DATE = add(setMinutes(setHours(/* @__PURE__ */ new Date(), 6), 0), { days: -1 });
var validateCateringField = (catering_control) => (control) => {
  if (catering_control.value?.length && !control.value) {
    return { catering_field: "Catering sub-fields are required" };
  }
  return null;
};
function generateEventForm(event = new CalendarEvent(), settings) {
  if (!event)
    event = new CalendarEvent();
  const form = new FormGroup({
    id: new FormControl(event.id),
    ical_uid: new FormControl(event.ical_uid),
    host: new FormControl(event.host || event.organiser?.email || currentUser()?.email || "", [Validators.required]),
    organiser: new FormControl(event.organiser || new User({ email: event.host || "" })),
    creator: new FormControl(event.creator || currentUser()?.email),
    calendar: new FormControl(event.calendar),
    attendees: new FormControl(event.attendees || []),
    resources: new FormControl(event.resources || []),
    title: new FormControl(event.title),
    body: new FormControl(event.body),
    private: new FormControl(event.private),
    date: new FormControl(event.date, [Validators.required]),
    duration: new FormControl(event.duration, [endInFuture]),
    all_day: new FormControl(event.all_day),
    date_end: new FormControl(event.date_end),
    recurring: new FormControl(event.recurring),
    recurrence: new FormControl(event.recurrence),
    recurring_event_id: new FormControl(event.recurring_event_id),
    master: new FormControl(event.master),
    attachments: new FormControl(event.attachments),
    catering: new FormControl(event.extension_data?.catering),
    catering_notes: new FormControl(event.extension_data?.catering[0]?.notes || ""),
    catering_charge_code: new FormControl(event.extension_data?.catering[0]?.charge_code || ""),
    setup_time: new FormControl(event.setup_time || 0),
    breakdown_time: new FormControl(event.breakdown_time || 0),
    assets: new FormControl(event.extension_data?.assets),
    // has_catering: new FormControl(event.has_catering || false),
    visitor_type: new FormControl(event.extension_data?.visitor_type),
    location: new FormControl(event.location),
    needs_space: new FormControl(true),
    needs_parking: new FormControl(event.extension_data?.needs_parking || false),
    event_type: new FormControl(event.extension_data?.event_type || ""),
    category: new FormControl(event.extension_data?.category || ""),
    tags: new FormControl(event.extension_data?.tags || []),
    update_master: new FormControl(false),
    system: new FormControl(event.system),
    attendance_type: new FormControl(event.extension_data?.attendance_type || "ONSITE"),
    timezone: new FormControl(event.timezone || LOCAL_TIMEZONE),
    shared_event: new FormControl(event.extension_data?.shared_event || false),
    view_access: new FormControl(event.extension_data?.view_access || "OPEN"),
    images: new FormControl(event.extension_data?.images || []),
    featured: new FormControl(event.extension_data?.featured || false)
  });
  form.get("organiser").valueChanges.subscribe((o) => form.controls.host.setValue(o?.email));
  form.get("resources").valueChanges.subscribe((l) => {
    form.controls.system.setValue(l?.length ? l[0] : null);
    form.controls.assets[l?.length ? "enable" : "disable"]();
  });
  const setCateringTime = () => {
    if (!form.value.catering?.length || !form.getRawValue().date)
      return;
    form.patchValue({
      catering: form.value.catering.map((order) => __spreadProps(__spreadValues({}, order), {
        event: {
          date: form.value.all_day ? startOfDay(form.getRawValue().date) : form.getRawValue().date,
          duration: form.value.all_day ? 24 * 60 : form.value.duration
        }
      }))
    }, { emitEvent: false });
  };
  form.valueChanges.subscribe((v) => {
    if (form.getRawValue().date < Date.now() && form.value.id) {
      form.get("date")?.disable({ emitEvent: false });
    } else {
      form.get("date")?.enable({ emitEvent: false });
    }
    if (v.date || v.duration || v.all_day)
      setCateringTime();
  });
  form.controls.duration.valueChanges.subscribe((duration) => {
    form.patchValue({
      date_end: roundToNearestMinutes(addMinutes(form.getRawValue().date, duration), { nearestTo: 5, roundingMethod: "ceil" }).valueOf()
    }, { emitEvent: false });
    setCateringTime();
  });
  form.controls.date_end.valueChanges.subscribe((date) => {
    if (date < addMinutes(form.getRawValue().date, 30).valueOf()) {
      form.patchValue({
        date_end: roundToNearestMinutes(addMinutes(form.getRawValue().date, 30), { nearestTo: 5, roundingMethod: "ceil" }).valueOf(),
        duration: 30
      }, { emitEvent: false });
    } else {
      form.patchValue({
        duration: differenceInMinutes(date, form.getRawValue().date)
      }, { emitEvent: false });
    }
    setCateringTime();
  });
  form.controls.date.valueChanges.subscribe((date) => {
    form.patchValue({
      date_end: roundToNearestMinutes(addMinutes(date, form.value.duration), { nearestTo: 5, roundingMethod: "ceil" }).valueOf()
    }, { emitEvent: false });
    if (date < Date.now() && !form.value.id) {
      form.patchValue({
        date: roundToNearestMinutes(Date.now(), {
          nearestTo: 5,
          roundingMethod: "ceil"
        }).valueOf()
      }, { emitEvent: false });
    }
    if (form.value.recurrence?._pattern !== "custom_display" && form.value.recurrence?._pattern !== "none") {
      form.patchValue({
        recurrence: __spreadProps(__spreadValues({}, form.value.recurrence), {
          days_of_week: [new Date(date).getDay()]
        })
      });
    }
    setCateringTime();
  });
  form.controls.catering.valueChanges.subscribe((_) => {
    const catering = form.getRawValue().catering || [];
    if (catering?.length && (settings?.get("app.events.catering_notes_required") || settings.value("require_catering_notes"))) {
      form.get("catering_notes")?.setValidators([Validators.required]);
      form.get("catering_notes").patchValue(form.value.catering_notes);
    } else {
      form.get("catering_notes")?.clearValidators();
      form.get("catering_notes").setErrors(null);
    }
    form.updateValueAndValidity();
  });
  form.get("catering_charge_code").setValidators([
    validateCateringField(form.get("catering"))
  ]);
  if (event.id) {
    form.get("host").disable();
    form.get("organiser").disable();
  }
  if (event.state === "started")
    form.get("date").disable();
  return form;
}
function newCalendarEventFromBooking(booking) {
  let attendees = [
    {
      id: booking.user_id,
      name: booking.user_name,
      email: booking.user_email,
      organizer: true
    }
  ];
  if (booking.booking_type === "visitor") {
    attendees.push(new User({
      name: booking.asset_name || booking.description,
      email: booking.asset_id,
      checked_in: booking.checked_in
    }));
  }
  attendees = attendees.concat(booking.attendees);
  return new CalendarEvent(__spreadProps(__spreadValues(__spreadValues({}, booking), booking.extension_data), {
    attendees,
    id: booking.id || booking.extension_data.id,
    host: booking.user_email,
    from_bookings: true
  }));
}

// libs/events/src/lib/new-event-form.service.ts
var BOOKING_URLS = [
  "book/rooms",
  "book/spaces",
  "book/meeting",
  "schedule/view",
  "confirm/success",
  "upcoming"
];
var Tags;
(function(Tags2) {
  Tags2["Availability"] = "AVAILABILITY";
  Tags2["BookingRules"] = "BOOKING_RULES";
  Tags2["ListingRooms"] = "LIST_ROOMS";
  Tags2["PostBooking"] = "MAKING_BOOKING";
})(Tags || (Tags = {}));
var _EventFormService = class _EventFormService extends AsyncHandler {
  get last_success() {
    const event = new CalendarEvent(JSON.parse(sessionStorage?.getItem("PLACEOS.last_modified_event") || "{}"));
    if (this._last_event?.date === event.date)
      return this._last_event;
    this._last_event = event;
    return event;
  }
  get form() {
    return this._form;
  }
  get view() {
    return this._view.getValue();
  }
  get options() {
    return this._options.getValue();
  }
  get filters() {
    return this._filters.getValue();
  }
  get event() {
    return this._event.getValue();
  }
  get is_multiday() {
    return this._event.getValue()?.duration > 24 * 60;
  }
  get favorite_spaces() {
    return this._settings.get("favourite_spaces") || [];
  }
  get book_internal() {
    return this._settings.get("app.events.use_bookings") === true;
  }
  get lone_space() {
    return this._settings.get("app.events.no_space_resource");
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._assets = inject(AssetStateService);
    this._dialog = inject(MatDialog);
    this._view = new BehaviorSubject("form");
    this._options = new BehaviorSubject({
      date: Date.now(),
      zones: []
    });
    this._filters = new BehaviorSubject({
      capacity: -1,
      features: []
    });
    this._loading = new BehaviorSubject("");
    this._changed = new BehaviorSubject(0);
    this._event = new BehaviorSubject(new CalendarEvent());
    this._form = generateEventForm(void 0, this._settings);
    this._space_pipe = new SpacePipe();
    this.removeLoadingTag = (t) => this._loading.next(this._loading.getValue().replace(`[${t}]`, "").trim());
    this.addLoadingTag = (t) => t ? this._loading.next(`${this._loading.getValue().replace(`[${t}]`, "")}[${t}]`.trim()) : "";
    this._overflow = (id = "") => id ? this._settings.get(`app.events.overflow.${id}`) || {} : {
      setup: this._settings.get(`app.events.setup`) || 0,
      breakdown: this._settings.get(`app.events.breakdown`) || 0
    };
    this._host = (host, space) => this._settings.get("app.events.force_host") || (this._settings.get("app.events.room_as_host") ? space : "") || host;
    this.options$ = this._options.asObservable();
    this.filters$ = this._filters.asObservable();
    this.loading$ = this._loading.asObservable();
    this.booking_rules$ = this._org.building_list.pipe(switchMap((list) => {
      this.addLoadingTag(Tags.BookingRules);
      return forkJoin(list.map((bld) => hu(bld.id, "room_booking_rules").pipe(map((_) => ({
        id: bld.id,
        details: _.details instanceof Array ? _.details : []
      })), catchError(() => of({ id: bld.id, details: [] })))));
    }), map((building_rules) => {
      const mapping = {};
      for (const rules of building_rules) {
        mapping[rules.id] = rules?.details;
      }
      return mapping;
    }), tap(() => this.removeLoadingTag(Tags.BookingRules)), shareReplay(1));
    this.spaces$ = this._org.active_building.pipe(switchMap(() => this._settings.get("app.use_region") ? this._org.active_region.pipe(filter((_) => !!_)) : this._org.active_building.pipe(filter((_) => !!_))), distinctUntilKeyChanged("id"), switchMap((zone) => {
      if (!zone)
        return of([]);
      this.addLoadingTag(Tags.ListingRooms);
      return requestSpacesForZone(zone.id).pipe(catchError(() => of([])));
    }), map((list) => list.filter((_) => _.bookable && _.email)), tap(() => this.removeLoadingTag(Tags.ListingRooms)), startWith([]), shareReplay(1));
    this.features = this.spaces$.pipe(map((l) => unique(flatten(l.map((_) => _.features)))));
    this.room_alerts = this._changed.pipe(switchMap(() => hu(this._org.organisation.id, "room_alerts")), map((r) => r.details), startWith({}), shareReplay(1));
    this.filtered_spaces = combineLatest([
      this.spaces$,
      this._options,
      this._filters,
      this._org.initialised.pipe(filter((_) => _))
    ]).pipe(map(([list, { zones }, filters]) => {
      if (!list.length)
        return list;
      if (!zones?.length) {
        zones = this._settings.get("app.use_region") ? [this._org.region.id] : [this._org.building.id];
      }
      if (zones.length) {
        list = list.filter((space) => zones.find((id) => space.zones.includes(id)));
      }
      if (filters.show_fav) {
        list = list.filter(({ id }) => this.favorite_spaces.includes(id));
      }
      if (filters.capacity > 0) {
        list = list.filter(({ capacity }) => filters.capacity <= capacity || capacity < 0);
      }
      if (filters.features) {
        list = list.filter(({ features }) => filters.features.every((f) => features.includes(f)));
      }
      return list;
    }));
    this.available_spaces = combineLatest([
      this.filtered_spaces,
      this.booking_rules$,
      this._event,
      this._options
    ]).pipe(debounceTime(300), switchMap(([spaces, rules, event, { date, duration, all_day }]) => {
      this.addLoadingTag(Tags.Availability);
      const method = this.book_internal ? queryResourceAvailability : querySpaceAvailability;
      spaces = filterResourcesFromRules(spaces, { date, duration, resource: null, host: currentUser() }, rules[this._org.building?.id] || []);
      return method(spaces.map(({ id }) => id), (all_day ? startOfDay(date).valueOf() : date) || 60, (all_day ? Math.max(24 * 60, duration) : duration) || 60, event?.resources[0]?.id || event?.system?.id || event?.id, void 0, [event?.date, event?.duration]).pipe(map((availability) => {
        let list = spaces.filter((_, i) => availability[i]);
        list = filterResourcesFromRules(list, {
          date,
          duration,
          resource: null,
          host: currentUser()
        }, rules[this._org.building?.id] || []);
        return list;
      }), catchError(() => of([])));
    }), tap(() => this.removeLoadingTag(Tags.Availability)), startWith([]), shareReplay(1));
    this._space_pipe.org = this._org;
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      yield current_user.pipe(first((_) => !!_)).toPromise();
      setDefaultCreator(currentUser());
      this.form.controls.date.valueChanges.subscribe((date) => this.setOptions({ date }));
      this.form.controls.duration.valueChanges.subscribe((duration) => this.setOptions({ duration }));
      this.subscription("router.events", this._router.events.subscribe((event) => {
        if (event instanceof NavigationEnd && !BOOKING_URLS.some((_) => event.url.includes(_))) {
          this.clearForm();
        }
      }));
      const previous = {};
      this.form.valueChanges.subscribe(({ date, duration }) => {
        if (date && date !== previous["date"] || duration && duration !== previous["duration"]) {
          this._assets.setOptions({
            date: this.form.value.date,
            duration: this.form.value.duration
          });
          previous["date"] = date;
          previous["duration"] = duration;
        }
        this.storeForm();
      });
    });
  }
  setView(value) {
    this.timeout("set_view", () => this._view.next(value), 50);
  }
  setFilters(filters) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), filters));
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  newForm(event = new CalendarEvent()) {
    this._loading.next("");
    this._form.reset(__spreadProps(__spreadValues({}, event), {
      catering: event.extension_data.catering,
      catering_charge_code: event.extension_data.catering?.[0]?.charge_code,
      catering_notes: event.extension_data.catering?.[0]?.notes
    }));
    if (!event.id)
      return;
    sessionStorage.setItem("PLACEOS.event", JSON.stringify(event.toJSON()));
    this._event.next(event);
  }
  resetForm() {
    this._form.reset(this._event.getValue() || {});
  }
  storeForm() {
    this.timeout("store", () => {
      sessionStorage.setItem("PLACEOS.event_form", JSON.stringify(this._form.getRawValue() || {}));
    });
  }
  loadForm() {
    const event_data = JSON.parse(sessionStorage.getItem("PLACEOS.event") || "{}");
    const event = new CalendarEvent(event_data);
    this._event.next(event);
    const form_data = JSON.parse(sessionStorage.getItem("PLACEOS.event_form") || "{}");
    this._form.patchValue(__spreadValues(__spreadValues({}, event), form_data));
  }
  clearForm() {
    sessionStorage.removeItem("PLACEOS.event");
    sessionStorage.removeItem("PLACEOS.event_form");
    this.newForm();
  }
  openEventLinkModal(force = false) {
    const form = this._form;
    form.markAllAsTouched();
    if (!form.valid && !force)
      return;
    const event = new CalendarEvent(__spreadProps(__spreadValues({}, form.getRawValue()), { assets: [] }));
    const ref = this._dialog.open(EventLinkModalComponent, { data: event });
    ref.afterClosed().subscribe((d) => d ? this._router.navigate(["/"]) : "");
  }
  cancelPostForm() {
  }
  postForm() {
    return __async(this, arguments, function* (force = false, ignore_space_check = [], ignore_owner = false) {
      this.form.markAllAsTouched();
      if (this.form.invalid && !force) {
        throw i18n("FORM.INVALID_FIELDS", {
          field_list: getInvalidFields(this.form).join(", ")
        });
      }
      const on_error = (e) => {
        this.removeLoadingTag(Tags.PostBooking);
        throw e;
      };
      this.addLoadingTag(Tags.PostBooking);
      const event = this._event.getValue();
      const space_list = this.form.value.resources || [];
      let spaces = space_list.filter((_) => !ignore_space_check.includes(_.id));
      const recurr = this.form.value.recurrence;
      this.form.patchValue({
        recurring: recurr?._pattern && recurr?._pattern !== "none"
      });
      if (!this.form.value.recurring) {
        this.form.patchValue({ recurrence: null });
      }
      const changed_spaces = spaces.filter((_) => !event.resources.find((s) => s.id === _.id));
      const has_time_changed = !event.id || event.date !== this.form.value.date || event.duration !== this.form.value.duration;
      if (spaces.length && has_time_changed) {
        const space_list2 = yield Promise.all(changed_spaces.map((_) => this._space_pipe.transform(_.email)));
        yield this._checkResourcesAvailable(space_list2, this.form.value.all_day ? startOfDay(this.form.value.date).valueOf() : this.form.value.date, this.form.value.all_day ? Math.max(24 * 60, this.form.value.duration) : this.form.value.duration, event.ical_uid || event.id || "").catch(on_error);
      } else if (!space_list.length && this.lone_space) {
        spaces = [yield this._space_pipe.transform(this.lone_space)];
        this.form.patchValue({ resources: spaces });
      }
      this.form.patchValue({
        attendees: unique([
          ...this.form.value.attendees,
          this.form.value.organiser || currentUser()
        ], "email")
      });
      if (!spaces.length && this.form.value.attendees.find((_) => _.is_external)) {
        this.removeLoadingTag(Tags.PostBooking);
        throw i18n("CALENDAR_EVENT.SPACE_EXTERNALS_ERROR");
      }
      const default_oflow = this._overflow();
      let [setup, breakdown] = [
        this.form.value.setup_time || default_oflow.setup,
        this.form.value.breakdown_time || default_oflow.breakdown
      ];
      for (const space of spaces) {
        const overflow = this._overflow(space.id);
        setup = Math.max(overflow.setup || 0, setup);
        breakdown = Math.max(overflow.breakdown || 0, breakdown);
      }
      this.form.patchValue({ setup_time: setup, breakdown_time: breakdown });
      for (const order of this.form.value.catering || []) {
        order.notes = this.form.value.catering_notes;
        order.charge_code = this.form.value.catering_charge_code;
      }
      const query = event.id ? {
        system_id: event?.resources[0]?.id || event?.system?.id || spaces[0]?.id
      } : {};
      const is_owner = this.form.value.host === currentUser()?.email || this.form.value.creator === currentUser()?.email;
      if (is_owner && !ignore_owner)
        query.calendar = this.form.value.host || this.form.value.creator;
      const processed_assets = (this.form.value.assets || []).map((_) => new AssetRequest(_).toJSON());
      const host = this._host(this.form.value.host, spaces[0]?.email);
      const ext = {
        department: this.form.value.organiser?.department || currentUser()?.department
      };
      if (this.form.value.host !== host)
        ext.host_override = this.form.value.host;
      const value = this.form.getRawValue();
      const created_event = yield this._performBooking(new CalendarEvent(__spreadProps(__spreadValues({}, this.form.getRawValue()), {
        old_system: event?.system,
        host,
        title: this.form.value.title || "Space Booking",
        attendees: this.form.value.attendees.map((_) => {
          const v = __spreadValues({}, _);
          delete v.visit_expected;
          return v;
        }),
        assets: processed_assets,
        extension_data: ext
      })), query).catch(on_error);
      const domain = (currentUser()?.email || "@").split("@")[1];
      const visitors = this.form.value.attendees.filter((user) => user.is_external && user.email !== event.host && !user.email.includes(domain) && user.visit_expected);
      if (visitors.length) {
        yield createBookingsForEvent(created_event, "visitor", visitors).catch((e) => this._removeBookingAfterError(!event.id, created_event, false, e));
      }
      if (this.form.value.catering?.length) {
        yield createBookingsForEvent(created_event, "catering-order", this.form.value.catering).catch((e) => this._removeBookingAfterError(!event.id, created_event, false, e));
      }
      const assets = this.form.value.assets || event.extension_data.assets || [];
      if (assets.length) {
        const requests = yield validateAssetRequestsForResource(created_event, {
          date: value.date,
          duration: value.duration,
          host: value.host,
          all_day: value.all_day,
          location_name: spaces[0]?.display_name || spaces[0]?.name || "",
          location_id: spaces[0]?.id || "",
          zones: unique([
            this._org.organisation.id,
            this._org.region?.id,
            this._org.building?.id,
            ...spaces[0]?.zones || []
          ]).filter((_) => !!_),
          reset_state: has_time_changed
        }, assets, changed_spaces.length > 0 || has_time_changed).catch((e) => this._removeBookingAfterError(!event.id, created_event, true, e));
        if (!requests)
          throw i18n("CALENDAR_EVENT.ASSETS_INVALID_ERROR");
        yield requests();
      }
      this.clearForm();
      sessionStorage.setItem("PLACEOS.last_modified_event", JSON.stringify(created_event.toJSON()));
      return true;
    });
  }
  _handlePayments() {
    return __async(this, null, function* () {
      return "INV-000_001";
    });
  }
  _checkResourcesAvailable(spaces, date, duration, ignore) {
    return __async(this, null, function* () {
      if (!spaces?.length)
        return true;
      const event = this._event.getValue();
      const id_list = spaces.map((_) => _.id);
      const response = yield lastValueFrom(this.book_internal ? queryResourceAvailability(id_list, date, duration, ignore) : querySpaceAvailability(id_list, date, duration, event?.resources[0]?.id || event?.system?.id || event?.id || void 0, void 0, [event?.date, event?.duration]));
      if (!response.every((_) => _)) {
        throw i18n(spaces.length > 1 ? "CALENDAR_EVENT.SPACES_UNAVAILABLE" : "CALENDAR_EVENT.SPACE_UNAVAILABLE");
      }
      return true;
    });
  }
  _performBooking(event, query) {
    return __async(this, null, function* () {
      this._updateVisitorList(event.attendees);
      const old_system = event.old_system?.id || event.old_system?.email || event.resources[0]?.email;
      const system_id = event.system?.id || event.system?.email || event.resources[0]?.email;
      if (old_system !== system_id) {
        event.attendees = event.attendees.filter((_) => _.email !== old_system || _.id !== old_system);
      }
      return (this.book_internal ? saveBooking(newBookingFromCalendarEvent(__spreadProps(__spreadValues({}, event.toJSON()), {
        status: this._settings.get("app.bookings.no_approval") === true ? "approved" : "tentative"
      }))).pipe(map((_) => newCalendarEventFromBooking(_))) : saveEvent(event, query))?.toPromise();
    });
  }
  _removeBookingAfterError(is_new, event, assets = false, e) {
    return __async(this, null, function* () {
      if (is_new) {
        yield removeEvent(event.id, event.resources.length ? {
          calendar: this.form.value.host || currentUser()?.email,
          system_id: event.resources[0].id
        } : {})?.toPromise();
        throw e?.status === 409 ? i18n("CALENDAR_EVENT.ASSETS_CLASH_ERROR") : i18n("CALENDAR_EVENT.ASSETS_ERROR");
      } else if (assets) {
        throw i18n("CALENDAR_EVENT.ASSETS_PARTIAL_ERROR", {
          error: e
        });
      }
      this.removeLoadingTag(Tags.PostBooking);
      throw e;
    });
  }
  _updateVisitorList(attendees) {
    const visitors = attendees.filter((user) => user.is_external);
    if (!visitors?.length)
      return;
    const old_visitors = this._settings.get("visitor-invitees") || [];
    this._settings.saveUserSetting("visitor-invitees", unique([
      ...old_visitors.filter((_) => !_.includes(_.email)),
      ...visitors.map((_) => `${_.email}|${_.name}|${_.organisation}`)
    ]));
  }
};
_EventFormService.\u0275fac = function EventFormService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventFormService)();
};
_EventFormService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventFormService, factory: _EventFormService.\u0275fac, providedIn: "root" });
var EventFormService = _EventFormService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-book-qr.component.ts
var _c08 = (a0) => ({ name: a0 });
var DEFAULT_PATH = `workplace/#/explore?space={{id}}`;
var _ExploreBookQrComponent = class _ExploreBookQrComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.space = this._data.space;
    this.qr_code = generateQRCode(`${location.origin}${(this._settings.get("app.booking_qr_path") || DEFAULT_PATH).replace("{{id}}", this._data.space?.email)}`);
  }
};
_ExploreBookQrComponent.\u0275fac = function ExploreBookQrComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreBookQrComponent)();
};
_ExploreBookQrComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreBookQrComponent, selectors: [["explore-book-qr"]], decls: 10, vars: 7, consts: [[1, "truncate"], [1, "flex-1"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4"], [1, "m-auto", "h-64", "w-64", 3, "src"]], template: function ExploreBookQrComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2", 0);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 1);
    \u0275\u0275elementStart(5, "button", 2)(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "main", 3);
    \u0275\u0275element(9, "img", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "EXPLORE.BOOK_RESOURCE", \u0275\u0275pureFunction1(5, _c08, ctx.space == null ? null : ctx.space.name)), " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx.qr_code, \u0275\u0275sanitizeUrl);
  }
}, dependencies: [TranslatePipe, MatRippleModule, MatRipple, IconComponent], encapsulation: 2 });
var ExploreBookQrComponent = _ExploreBookQrComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreBookQrComponent, [{
    type: Component,
    args: [{ selector: "explore-book-qr", template: `
        <header>
            <h2 class="truncate">
                {{ 'EXPLORE.BOOK_RESOURCE' | translate: { name: space?.name } }}
            </h2>
            <div class="flex-1"></div>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="p-4">
            <img class="m-auto h-64 w-64" [src]="qr_code" />
        </main>
    `, imports: [TranslatePipe, MatRippleModule, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreBookQrComponent, { className: "ExploreBookQrComponent", filePath: "libs/explore/src/lib/explore-book-qr.component.ts", lineNumber: 32 });
})();

// libs/explore/src/lib/explore-booking-modal.component.ts
function ExploreBookingModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 1)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "a-user-search-field", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "FORM.HOST"));
  }
}
function ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-info", ctx_r1.alert[0] === "info")("text-info-content", ctx_r1.alert[0] === "info")("bg-warning", ctx_r1.alert[0] === "warn")("text-warning-content", ctx_r1.alert[0] === "warn")("bg-error", ctx_r1.alert[0] === "closed")("text-error-content", ctx_r1.alert[0] === "closed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert[1], " ");
  }
}
function ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "FORM.DATE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 5, ctx_r1.form.value.date, "mediumDate"), " at ", \u0275\u0275pipeBind2(7, 8, ctx_r1.form.value.date, ctx_r1.time_format), " ");
  }
}
function ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-duration-field", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "FORM.DURATION"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("time", ctx_r1.form.value.date)("max", ctx_r1.max_duration)("use_24hr", ctx_r1.use_24hr_time);
  }
}
function ExploreBookingModalComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 6)(2, "label", 7);
    \u0275\u0275text(3, "Title");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 8);
    \u0275\u0275element(8, "input", 9);
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(12, ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_12_Template, 8, 3, "div", 6);
    \u0275\u0275elementStart(13, "div", 6)(14, "label");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_19_Template, 2, 13, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 12);
    \u0275\u0275conditionalCreate(21, ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_21_Template, 8, 11, "div", 13);
    \u0275\u0275conditionalCreate(22, ExploreBookingModalComponent_Conditional_7_Conditional_0_Conditional_22_Template, 5, 6, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "EXPLORE.BOOKING_TITLE_REQUIRED"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_book_for_others ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 10, "EXPLORE.BOOKING_SPACE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.form.controls.resources == null ? null : ctx_r1.form.controls.resources.value[0] == null ? null : ctx_r1.form.controls.resources.value[0].display_name) || (ctx_r1.form.controls.resources == null ? null : ctx_r1.form.controls.resources.value[0] == null ? null : ctx_r1.form.controls.resources.value[0].name), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.alert ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.date ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.duration ? 22 : -1);
  }
}
function ExploreBookingModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ExploreBookingModalComponent_Conditional_7_Conditional_0_Template, 23, 12, "main", 3);
    \u0275\u0275elementStart(1, "footer", 4)(2, "button", 5);
    \u0275\u0275listener("click", function ExploreBookingModalComponent_Conditional_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.form ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.SAVE"), " ");
  }
}
function ExploreBookingModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, ctx_r1.loading));
  }
}
var _ExploreBookingModalComponent = class _ExploreBookingModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._dialog_ref = inject(MatDialogRef);
    this._router = inject(Router);
    this.loading = this._event_form.loading$;
    this.alert = this._data.alert;
  }
  get form() {
    return this._event_form.form;
  }
  get max_duration() {
    return this._settings.get("app.events.max_duration") || 4 * 60;
  }
  get can_book_for_others() {
    return this._settings.get("app.events.can_book_for_others");
  }
  get use_24hr_time() {
    return this._settings.get("app.use_24_hour_time");
  }
  get time_format() {
    return this._settings.time_format;
  }
  ngOnInit() {
    this._event_form.newForm();
    this.form.patchValue({
      resources: [this._data.space],
      host: currentUser().email,
      organiser: currentUser()
    });
  }
  save() {
    return __async(this, null, function* () {
      yield this._event_form.postForm().catch((_) => {
        notifyError(_);
        throw _;
      });
      if (this._settings.app_name.toLowerCase().includes("workplace")) {
        this._router.navigate(["/book", "meeting", "success"]);
      } else {
        notifySuccess(i18n("EXPLORE.BOOKING_SUCCESS"));
      }
      this._dialog_ref.close();
    });
  }
};
_ExploreBookingModalComponent.\u0275fac = function ExploreBookingModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreBookingModalComponent)();
};
_ExploreBookingModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreBookingModalComponent, selectors: [["explore-booking-modal"]], decls: 10, vars: 9, consts: [[1, "flex-1"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], ["load", "", 1, "flex", "h-64", "flex-col", "items-center", "justify-center"], [1, "max-w-[85vw]", "p-4", 3, "formGroup"], [1, "flex", "justify-center", "border-t", "border-base-200", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "Booking Title"], ["name", "space", 1, "mb-4", "w-full", "rounded", "border", "border-base-200", "px-4", "py-3"], [1, "-mt-2", "mb-4", "rounded", "px-2", "py-1", "text-xs", 3, "bg-info", "text-info-content", "bg-warning", "text-warning-content", "bg-error", "text-error-content"], [1, "flex", "flex-wrap", "sm:space-x-4"], [1, "flex", "w-full", "flex-1", "flex-col", "sm:w-auto"], [1, "flex", "w-full", "flex-col", "sm:w-auto"], ["for", "host"], ["name", "host", "formControlName", "organiser", 1, "mb-4"], [1, "-mt-2", "mb-4", "rounded", "px-2", "py-1", "text-xs"], [1, "mb-4", "w-full", "rounded", "border", "border-base-200", "px-4", "py-3"], ["formControlName", "duration", 1, "w-full", 3, "time", "max", "use_24hr"], [1, "m-4", 3, "diameter"]], template: function ExploreBookingModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 0);
    \u0275\u0275conditionalCreate(5, ExploreBookingModalComponent_Conditional_5_Template, 3, 0, "button", 1);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ExploreBookingModalComponent_Conditional_7_Template, 5, 4);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275conditionalBranchCreate(9, ExploreBookingModalComponent_Conditional_9_Template, 5, 4, "div", 2);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "EXPLORE.BOOKING_HEADER"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(6, 5, ctx.loading) ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(8, 7, ctx.loading) ? 7 : 9);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  DurationFieldComponent,
  UserSearchFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatInputModule,
  MatInput,
  ReactiveFormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  IconComponent,
  MatDialogModule,
  MatDialogClose
], styles: ["\n\nheader[_ngcontent-%COMP%] {\n  max-width: calc(100vw + 100%);\n}\n[load][_ngcontent-%COMP%] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=explore-booking-modal.component.css.map */"] });
var ExploreBookingModalComponent = _ExploreBookingModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreBookingModalComponent, [{
    type: Component,
    args: [{ selector: "explore-booking-modal", template: `
        <header>
            <h2>{{ 'EXPLORE.BOOKING_HEADER' | translate }}</h2>
            <div class="flex-1"></div>
            @if (!(loading | async)) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!(loading | async)) {
            @if (form) {
                <main [formGroup]="form" class="max-w-[85vw] p-4">
                    <div class="flex flex-col">
                        <label for="title">Title<span>*</span>:</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="title"
                                formControlName="title"
                                placeholder="Booking Title"
                            />
                            <mat-error>{{
                                'EXPLORE.BOOKING_TITLE_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    @if (can_book_for_others) {
                        <div class="flex flex-col">
                            <label for="host"
                                >{{ 'FORM.HOST' | translate
                                }}<span>*</span>:</label
                            >
                            <a-user-search-field
                                name="host"
                                formControlName="organiser"
                                class="mb-4"
                            ></a-user-search-field>
                        </div>
                    }
                    <div class="flex flex-col">
                        <label
                            >{{ 'EXPLORE.BOOKING_SPACE' | translate }}:</label
                        >
                        <div
                            name="space"
                            class="mb-4 w-full rounded border border-base-200 px-4 py-3"
                        >
                            {{
                                form.controls.resources?.value[0]
                                    ?.display_name ||
                                    form.controls.resources?.value[0]?.name
                            }}
                        </div>
                        @if (alert) {
                            <div
                                class="-mt-2 mb-4 rounded px-2 py-1 text-xs"
                                [class.bg-info]="alert[0] === 'info'"
                                [class.text-info-content]="alert[0] === 'info'"
                                [class.bg-warning]="alert[0] === 'warn'"
                                [class.text-warning-content]="
                                    alert[0] === 'warn'
                                "
                                [class.bg-error]="alert[0] === 'closed'"
                                [class.text-error-content]="
                                    alert[0] === 'closed'
                                "
                            >
                                {{ alert[1] }}
                            </div>
                        }
                    </div>
                    <div class="flex flex-wrap sm:space-x-4">
                        @if (form.controls.date) {
                            <div class="flex w-full flex-1 flex-col sm:w-auto">
                                <label>{{ 'FORM.DATE' | translate }}:</label>
                                <div
                                    class="mb-4 w-full rounded border border-base-200 px-4 py-3"
                                >
                                    {{ form.value.date | date: 'mediumDate' }}
                                    at
                                    {{ form.value.date | date: time_format }}
                                </div>
                            </div>
                        }
                        @if (form.controls.duration) {
                            <div class="flex w-full flex-col sm:w-auto">
                                <label
                                    >{{ 'FORM.DURATION' | translate }}:</label
                                >
                                <a-duration-field
                                    formControlName="duration"
                                    [time]="form.value.date"
                                    [max]="max_duration"
                                    class="w-full"
                                    [use_24hr]="use_24hr_time"
                                ></a-duration-field>
                            </div>
                        }
                    </div>
                </main>
            }
            <footer class="flex justify-center border-t border-base-200 p-2">
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        } @else {
            <div load class="flex h-64 flex-col items-center justify-center">
                <mat-spinner class="m-4" [diameter]="48"></mat-spinner>
                <p>{{ loading | async }}</p>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      DurationFieldComponent,
      UserSearchFieldComponent,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      IconComponent,
      MatDialogModule
    ], styles: ["/* angular:styles/component:css;92dc203883c2e157fe6d9f315fef4a02ef7ca3572d438813349331b81da507b4;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-booking-modal.component.ts */\nheader {\n  max-width: calc(100vw + 100%);\n}\n[load] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=explore-booking-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreBookingModalComponent, { className: "ExploreBookingModalComponent", filePath: "libs/explore/src/lib/explore-booking-modal.component.ts", lineNumber: 176 });
})();

// libs/explore/src/lib/explore-icon.component.ts
var _ExploreIconComponent = class _ExploreIconComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this.icon = this._details.icon || { content: "done" };
    this.color = this._details.color || "var(--in)";
    this.text_color = this._details.text_color || "var(--inc)";
  }
};
_ExploreIconComponent.\u0275fac = function ExploreIconComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreIconComponent)();
};
_ExploreIconComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreIconComponent, selectors: [["explore-icon"]], decls: 2, vars: 5, consts: [[1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "border", "border-base-200", "shadow"], [1, "text-xl", 3, "icon"]], template: function ExploreIconComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "icon", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("background-color", ctx.color)("color", ctx.text_color);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx.icon);
  }
}, dependencies: [IconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  align-items: end;\n  justify-content: end;\n}\n/*# sourceMappingURL=explore-icon.component.css.map */"] });
var ExploreIconComponent = _ExploreIconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreIconComponent, [{
    type: Component,
    args: [{ selector: `explore-icon`, template: `
        <div
            class="flex h-8 w-8 items-center justify-center rounded-full border border-base-200 shadow"
            [style.background-color]="color"
            [style.color]="text_color"
        >
            <icon [icon]="icon" class="text-xl"></icon>
        </div>
    `, imports: [IconComponent], styles: ["/* angular:styles/component:css;8d603d396af10dde7f45bddce919375913a5c5b09729ee8e6482881d125d62c7;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-icon.component.ts */\n:host {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  align-items: end;\n  justify-content: end;\n}\n/*# sourceMappingURL=explore-icon.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreIconComponent, { className: "ExploreIconComponent", filePath: "libs/explore/src/lib/explore-icon.component.ts", lineNumber: 30 });
})();

// libs/explore/src/lib/explore-space-info.component.ts
function ExploreSpaceInfoComponent_ng_template_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r1.space.images[0]);
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.available_until, " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "COMMON.CAPACITY"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.space.capacity, " ", ctx_r1.space.capacity === 1 ? "person" : "people", " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r3, " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 15);
    \u0275\u0275repeaterCreate(1, ExploreSpaceInfoComponent_ng_template_2_Conditional_16_For_2_Template, 2, 1, "li", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.space.features);
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "div", 5)(3, "div", 6);
    \u0275\u0275conditionalCreate(4, ExploreSpaceInfoComponent_ng_template_2_Conditional_4_Template, 1, 1, "img", 7);
    \u0275\u0275conditionalCreate(5, ExploreSpaceInfoComponent_ng_template_2_Conditional_5_Template, 1, 0, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "div", 10);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "uppercase");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ExploreSpaceInfoComponent_ng_template_2_Conditional_11_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 12)(13, "h4", 13);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, ExploreSpaceInfoComponent_ng_template_2_Conditional_15_Template, 5, 5, "div", 14);
    \u0275\u0275conditionalCreate(16, ExploreSpaceInfoComponent_ng_template_2_Conditional_16_Template, 3, 0, "ul", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("-translate-x-full", ctx_r1.x_pos === "end")("-translate-y-full", ctx_r1.y_pos === "bottom");
    \u0275\u0275property("id", ctx_r1.space == null ? null : ctx_r1.space.id);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-neutral", ctx_r1.space.images[0])("h-32", ctx_r1.space.images[0])("h-8", !ctx_r1.space.images[0]);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.space.images[0] ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.space.images[0] ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("text-light rounded border border-white p-1 px-2 capitalize shadow " + ctx_r1.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 22, ctx_r1.status === "not-bookable" ? "COMMON.STATUS_NOT_BOOKABLE" : "COMMON.STATUS_" + \u0275\u0275pipeBind1(9, 20, ctx_r1.status)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.status !== "not-bookable" ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.space.display_name || ctx_r1.space.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.space.capacity >= 0 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.space.features == null ? null : ctx_r1.space.features.length) > 0 && ctx_r1.show_features ? 16 : -1);
  }
}
var _ExploreSpaceInfoComponent = class _ExploreSpaceInfoComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this._settings = inject(SettingsService);
    this._element = inject(ElementRef);
    this.space = this._details.space;
    this.events = this._details.events;
    this.status = this._details.status;
  }
  get show_features() {
    return !this._settings.get("app.spaces.hide_features");
  }
  ngOnInit() {
    setTimeout(() => this.updateOffset(), 200);
  }
  updateOffset() {
    const pos = this._element.nativeElement.getBoundingClientRect();
    this.x_pos = pos.x < document.body.clientWidth / 2 ? "start" : "end";
    this.y_pos = pos.y < document.body.clientHeight / 2 ? "top" : "bottom";
  }
  get available_until() {
    return "";
  }
};
_ExploreSpaceInfoComponent.\u0275fac = function ExploreSpaceInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreSpaceInfoComponent)();
};
_ExploreSpaceInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSpaceInfoComponent, selectors: [["explore-space-info"]], decls: 4, vars: 7, consts: [["tooltip", ""], ["space_tooltip", ""], ["customTooltip", "", 1, "pointer-events-auto", "relative", "hidden", "h-full", "w-full", "cursor-pointer", "sm:block", 3, "mouseenter", "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 1, "pointer-events-none", "absolute", "left-0", "top-0", "transform", "overflow-hidden", "rounded", "bg-base-100", "shadow", 3, "id"], [1, "arrow"], [1, "relative"], [1, "relative", "flex", "w-full", "items-center", "justify-center", "overflow-hidden", "bg-opacity-20"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", 3, "source"], [1, "absolute", "inset-0", "bg-neutral", "opacity-30"], [1, "absolute", "left-2", "top-2", "flex", "flex-wrap", "text-sm"], ["status", ""], ["available-until", ""], [1, "flex", "flex-col", "px-2", "py-4"], [1, "mb-2", "px-2", "text-xl", "font-medium"], ["capacity", "", 1, "mb-2", "px-2", "text-base"], [1, "flex", "flex-wrap"], [1, "m-1", "rounded-2xl", "bg-base-200", "px-2", "py-1", "text-xs", "font-medium"]], template: function ExploreSpaceInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2, 0);
    \u0275\u0275listener("mouseenter", function ExploreSpaceInfoComponent_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateOffset());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ExploreSpaceInfoComponent_ng_template_2_Template, 17, 24, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const space_tooltip_r4 = \u0275\u0275reference(3);
    \u0275\u0275property("content", space_tooltip_r4)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3e3);
    \u0275\u0275attribute("id", (ctx.space == null ? null : ctx.space.map_id) || (ctx.space == null ? null : ctx.space.id));
  }
}, dependencies: [CommonModule, UpperCasePipe, CustomTooltipComponent, TranslatePipe], styles: ["\n\n[name=space-info][_ngcontent-%COMP%] {\n  width: 16rem;\n}\n[status][_ngcontent-%COMP%] {\n  background-color: #43a047;\n  font-weight: 500;\n}\n[status].busy[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n[status].pending[_ngcontent-%COMP%] {\n  background-color: #ffb300;\n}\n[status].not-bookable[_ngcontent-%COMP%] {\n  background-color: #757575;\n}\n/*# sourceMappingURL=explore-space-info.component.css.map */"] });
var ExploreSpaceInfoComponent = _ExploreSpaceInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSpaceInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-space-info", template: `
        <div
            #tooltip
            customTooltip
            [content]="space_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [delay]="3000"
            [attr.id]="space?.map_id || space?.id"
            (mouseenter)="updateOffset()"
            class="pointer-events-auto relative hidden h-full w-full cursor-pointer sm:block"
        ></div>
        <ng-template #space_tooltip>
            <div
                name="space-info"
                [id]="space?.id"
                class="pointer-events-none absolute left-0 top-0 transform overflow-hidden rounded bg-base-100 shadow"
                [class.-translate-x-full]="x_pos === 'end'"
                [class.-translate-y-full]="y_pos === 'bottom'"
            >
                <div class="arrow"></div>
                <div class="relative">
                    <div
                        class="relative flex w-full items-center justify-center overflow-hidden bg-opacity-20"
                        [class.bg-neutral]="space.images[0]"
                        [class.h-32]="space.images[0]"
                        [class.h-8]="!space.images[0]"
                    >
                        @if (space.images[0]) {
                            <img
                                auth
                                [source]="space.images[0]"
                                class="min-h-full min-w-full object-cover"
                            />
                        }
                        @if (space.images[0]) {
                            <div
                                class="absolute inset-0 bg-neutral opacity-30"
                            ></div>
                        }
                    </div>
                    <div class="absolute left-2 top-2 flex flex-wrap text-sm">
                        <div
                            status
                            [class]="
                                'text-light rounded border border-white p-1 px-2 capitalize shadow ' +
                                status
                            "
                        >
                            {{
                                (status === 'not-bookable'
                                    ? 'COMMON.STATUS_NOT_BOOKABLE'
                                    : 'COMMON.STATUS_' + (status | uppercase)
                                ) | translate
                            }}
                        </div>
                        @if (status !== 'not-bookable') {
                            <div available-until>
                                {{ available_until }}
                            </div>
                        }
                    </div>
                    <div class="flex flex-col px-2 py-4">
                        <h4 class="mb-2 px-2 text-xl font-medium">
                            {{ space.display_name || space.name }}
                        </h4>
                        @if (space.capacity >= 0) {
                            <div capacity class="mb-2 px-2 text-base">
                                <span
                                    >{{ 'COMMON.CAPACITY' | translate }}: </span
                                >{{ space.capacity }}
                                {{ space.capacity === 1 ? 'person' : 'people' }}
                            </div>
                        }
                        @if (space.features?.length > 0 && show_features) {
                            <ul class="flex flex-wrap">
                                @for (
                                    feature of space.features;
                                    track feature
                                ) {
                                    <li
                                        class="m-1 rounded-2xl bg-base-200 px-2 py-1 text-xs font-medium"
                                    >
                                        {{ feature }}
                                    </li>
                                }
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </ng-template>
    `, imports: [CommonModule, CustomTooltipComponent, TranslatePipe], styles: ["/* angular:styles/component:css;4f3e5464bee94c924a883f86a6b5ca8ac727cb844904db7b9de35fd4337d48ca;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-space-info.component.ts */\n[name=space-info] {\n  width: 16rem;\n}\n[status] {\n  background-color: #43a047;\n  font-weight: 500;\n}\n[status].busy {\n  background-color: #e53935;\n}\n[status].pending {\n  background-color: #ffb300;\n}\n[status].not-bookable {\n  background-color: #757575;\n}\n/*# sourceMappingURL=explore-space-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSpaceInfoComponent, { className: "ExploreSpaceInfoComponent", filePath: "libs/explore/src/lib/explore-space-info.component.ts", lineNumber: 147 });
})();

// libs/spaces/src/lib/spaces.service.ts
var SPACE_PIPE;
var _SpacesService = class _SpacesService {
  /** List of available spaces */
  get space_list() {
    return this._all_spaces.getValue().filter((s) => s.map_id);
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._all_spaces = new BehaviorSubject([]);
    this._initialised = new BehaviorSubject(false);
    this.initialised = this._initialised.asObservable();
    this.all_spaces = this._all_spaces.asObservable();
    this.list = this._all_spaces.pipe(map((spaces) => spaces.filter((space) => space.map_id)), shareReplay(1));
    this.features = this.list.pipe(map((_) => unique(flatten(_.map((i) => i.features)))));
    this._compare = (space) => space.zones.includes(this._org.building.id);
    SPACE_PIPE = new SpacePipe();
    if (!SPACE_PIPE.org)
      SPACE_PIPE.org = this._org;
    this._init();
  }
  _init() {
    return __async(this, null, function* () {
      yield lastValueFrom(this._org.initialised.pipe(first((_) => _)));
      if (!this._settings.get("app.prevent_space_init"))
        this.loadSpaces();
      else
        this._initialised.next(true);
    });
  }
  /**
   * Get a filtered list of the available spaces
   * @param predicate Predicate for filtering spaces
   */
  filter(predicate = this._compare) {
    return this.space_list.filter((_) => predicate(_));
  }
  loadSpace(space_id) {
    return __async(this, null, function* () {
      const system = yield lastValueFrom(cc(space_id));
      const space = new Space(__spreadProps(__spreadValues({}, system), {
        level: this._org.levelWithID([...system.zones])
      }));
      SPACE_PIPE.updateSpaceList([space]);
    });
  }
  /**
   * Find space with given id/email
   * @param space_id ID/Email address associated with the space
   */
  find(space_id) {
    return this.space_list.find(({ id }) => space_id === id);
  }
  loadSpaces() {
    return __async(this, null, function* () {
      const systems = yield lastValueFrom(sc({
        zone_id: this._org.organisation.id,
        limit: 5e3
      })?.pipe(map((i) => i.data)));
      const space_list = systems.map((sys) => new Space(__spreadProps(__spreadValues({}, sys), {
        level: this._org.levelWithID([...sys.zones])
      })));
      this._all_spaces.next(space_list);
      SPACE_PIPE.updateSpaceList(this.space_list);
      this._initialised.next(true);
    });
  }
};
_SpacesService.\u0275fac = function SpacesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpacesService)();
};
_SpacesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SpacesService, factory: _SpacesService.\u0275fac, providedIn: "root" });
var SpacesService = _SpacesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpacesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-state.service.ts
var _ExploreStateService = class _ExploreStateService extends AsyncHandler {
  get positions() {
    return this._positions.getValue();
  }
  get active_level() {
    return this._level.getValue();
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._spaces = inject(SpacesService);
    this._settings = inject(SettingsService);
    this._level = new BehaviorSubject(null);
    this._positions = new BehaviorSubject({
      zoom: 1,
      center: { x: 0.5, y: 0.5 }
    });
    this._styles = new BehaviorSubject({});
    this._features = new BehaviorSubject({});
    this._actions = new BehaviorSubject({});
    this._labels = new BehaviorSubject({});
    this._options = new BehaviorSubject({
      is_public: false,
      disable: ["zones", "devices"]
    });
    this._message = new BehaviorSubject("");
    this.level = this._level.asObservable();
    this.message = this._message.asObservable();
    this.spaces = combineLatest([
      this._level,
      this._org.initialised
    ]).pipe(filter(([_, initialised]) => initialised), switchMap(([level]) => sc({
      zone_id: level?.id || this._org.organisation.id,
      limit: 50
    }).pipe(map(({ data }) => data.map((_) => new Space(_))), catchError((_) => of([])))), shareReplay(1));
    this.map_url = this._level.pipe(map((lvl) => (lvl ? lvl.map_id : "") || ""));
    this.map_positions = this._positions.asObservable();
    this.map_features = combineLatest([
      this._features,
      this._options
    ]).pipe(debounceTime(200), map(([features, options]) => {
      let list = [];
      for (const key in features) {
        if (options.disable?.includes(key) || options.disable_features?.includes(key) || key === "zones-canvas" && options.disable?.includes("zones"))
          continue;
        list = list.concat(features[key]);
      }
      return list;
    }));
    this.map_actions = combineLatest([
      this._actions,
      this._options
    ]).pipe(debounceTime(200), map(([actions, options]) => {
      let list = [];
      for (const key in actions) {
        if (options.disable?.includes(key) || options.disable_actions?.includes(key))
          continue;
        list = list.concat(actions[key]);
      }
      return list;
    }));
    this.map_labels = combineLatest([
      this._labels,
      this._options
    ]).pipe(debounceTime(200), map(([labels, options]) => {
      let list = [];
      for (const key in labels) {
        if (options.disable?.includes(key) || options.disable_labels?.includes(key))
          continue;
        list = list.concat(labels[key]);
      }
      return list;
    }));
    this.map_styles = combineLatest([
      this._styles,
      this._options
    ]).pipe(debounceTime(200), map(([styles, options]) => {
      let style_mappings = { text: { display: "none" } };
      for (const key in styles) {
        if (options.disable?.includes(key) || options.disable_styles?.includes(key))
          continue;
        style_mappings = __spreadValues(__spreadValues({}, style_mappings), styles[key]);
      }
      if (options.disable?.includes("zones")) {
        style_mappings["#zones"] = { display: "none" };
        style_mappings["#Zones"] = { display: "none" };
      }
      return style_mappings;
    }));
    this.options = this._options.asObservable();
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this._org.active_levels.pipe(filter((_) => !!_)).subscribe((level_list) => {
        const level = this._level.getValue();
        const has_level = level_list.find((lvl) => level?.id === lvl.id);
        if (!has_level && level_list.length) {
          this.setLevel(level_list[0].id);
        }
        if (this._settings.get("app.explore.disable_actions")) {
          this.setOptions({
            disable_actions: this._settings.get("app.explore.disable_actions")
          });
        }
        if (this._settings.get("app.explore.disable_labels")) {
          this.setOptions({
            disable_labels: this._settings.get("app.explore.disable_labels")
          });
        }
        if (this._settings.get("app.explore.disable_features")) {
          this.setOptions({
            disable_features: this._settings.get("app.explore.disable_features")
          });
        }
        if (this._settings.get("app.explore.disable_styles")) {
          this.setOptions({
            disable_styles: this._settings.get("app.explore.disable_styles")
          });
        }
      });
    });
  }
  setOptions(options) {
    const old_options = this._options.getValue();
    const disable = unique([
      ...options.disable || old_options.disable,
      ...this._settings.get("app.explore.disable") || []
    ]);
    this._options.next(__spreadProps(__spreadValues(__spreadValues({}, this._options.getValue()), options), {
      disable
    }));
  }
  reset() {
    this._styles.next({});
    this._features.next({});
    this._labels.next({});
    this._actions.next({});
    this._options.next({
      is_public: false,
      disable: ["zones", "devices"]
    });
    this.setPositions(1, { x: 0.5, y: 0.5 });
  }
  setLevel(zone_id) {
    const lvl = this._org.levelWithID([zone_id]);
    if (lvl)
      this._level.next(lvl);
  }
  setStyles(name, styles) {
    const style_map = this._styles.getValue();
    style_map[name] = styles;
    this._styles.next(style_map);
  }
  setFeatures(name, features) {
    const feature_map = this._features.getValue();
    feature_map[name] = features;
    this._features.next(feature_map);
  }
  setActions(name, actions) {
    const actions_map = this._actions.getValue();
    actions_map[name] = actions;
    this._actions.next(actions_map);
  }
  setLabels(name, labels) {
    const labels_map = this._labels.getValue();
    labels_map[name] = labels;
    this._labels.next(labels_map);
  }
  setPositions(zoom, center) {
    this._positions.next({ zoom, center });
  }
  has(type, id, exclude = []) {
    if (type === "style") {
      const styles_map = this._styles.getValue();
      for (const group in styles_map) {
        if (exclude.includes(group))
          continue;
        const styles = styles_map[group];
        if (id in styles || `#${id}` in styles)
          return true;
      }
    } else if (type === "feature") {
      const feature_map = this._features.getValue();
      for (const group in feature_map) {
        if (exclude.includes(group))
          continue;
        for (const feature of feature_map[group]) {
          if (feature.location === id)
            return true;
        }
      }
    } else if (type === "action") {
      const actions_map = this._actions.getValue();
      for (const group in actions_map) {
        if (exclude.includes(group))
          continue;
        for (const feature of actions_map[group]) {
          if (feature.id === id)
            return true;
        }
      }
    } else if (type === "label") {
      const labels_map = this._labels.getValue();
      for (const group in labels_map) {
        if (exclude.includes(group))
          continue;
        for (const feature of labels_map[group]) {
          if (feature.location === id)
            return true;
        }
      }
    }
    return false;
  }
};
_ExploreStateService.\u0275fac = function ExploreStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreStateService)();
};
_ExploreStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreStateService, factory: _ExploreStateService.\u0275fac, providedIn: "root" });
var ExploreStateService = _ExploreStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-spaces.service.ts
var DEFAULT_COLOURS = {
  free: "#43a047",
  pending: "#ffb300",
  reserved: "#e65100",
  busy: "#e53935",
  "signs-of-life": "#1565c0",
  "not-bookable": "#757575",
  unknown: "#757575"
};
var _ExploreSpacesService = class _ExploreSpacesService extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._bookings = {};
    this._statuses = {};
    this._presence = {};
    this._panning = true;
    this._last_action = "";
    this.booking_rules = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => hu(bld.id, `room_booking_rules`).pipe(catchError(() => of({ details: [] })))), map((_) => _?.details instanceof Array ? _.details : []), shareReplay(1));
    this.room_alerts = this._org.active_building.pipe(filter((bld) => !!bld), switchMap(() => hu(this._org.organisation.id, `room_alerts`).pipe(catchError(() => of({ details: {} })))), map((_) => _.details || {}), shareReplay(1));
    this._bind = combineLatest([
      this._state.spaces,
      this._state.options
    ]).pipe(filter(([_, { is_public }]) => !is_public), map(([list]) => {
      this.unsubWith("b-");
      this.unsubWith("s-");
      this.unsubWith("c-");
      this._statuses = {};
      if (!list?.length)
        return;
      for (const space of list) {
        const mod = Ea(space.id, "Bookings");
        let binding = mod.binding("bookings");
        this.subscription(`b-${space.id}`, binding.listen().subscribe((d) => this.handleBookingsChange(list, space, d)));
        this.subscription(`b-bind-${space.id}`, binding.bind());
        binding = mod.binding("status");
        this.subscription(`s-${space.id}`, binding.listen().subscribe((d) => this.handleStatusChange(list, space, d)));
        this.subscription(`s-bind-${space.id}`, binding.bind());
        binding = mod.binding("presence");
        this.subscription(`c-${space.id}`, binding.listen().subscribe((d) => this.handlePresenceChange(list, space, d)));
        this.subscription(`c-bind-${space.id}`, binding.bind());
      }
      this.updateActions(list);
      this._updateHoverElements(list);
    }));
    this.subscription("spaces", this._bind.subscribe());
  }
  bookSpace(space, force = false) {
    return __async(this, null, function* () {
      if (this._panning && this._last_action === "down")
        return;
      const booking_rules = yield nextValueFrom(this.booking_rules);
      const room_alerts = yield nextValueFrom(this.room_alerts);
      const { hidden } = rulesForResource({
        date: Date.now(),
        duration: 60,
        resource: space,
        host: currentUser()
      }, booking_rules) || {};
      if (hidden) {
        return notifyError(i18n("EXPLORE.SPACES_PERMISSIONS_ERROR"));
      }
      if (this._statuses[space.id] !== "free" && !force || !space.bookable) {
        return notifyError(i18n("EXPLORE.SPACES_UNAVAILABLE_ERROR", {
          name: space.display_name || space.name
        }));
      }
      this._event_form.newForm();
      this._event_form.form.patchValue({
        host: currentUser()?.email,
        resources: [space]
      });
      if (room_alerts[space.id]?.[0] === "closed") {
        return notifyError(`${room_alerts[space.id][1]}`);
      }
      if (this._settings.get("app.events.booking_unavailable")) {
        return this._event_form.openEventLinkModal();
      }
      this._dialog.open(this._settings.get("app.explore.show_booking_qr") ? ExploreBookQrComponent : ExploreBookingModalComponent, {
        data: { space, alert: room_alerts[space.id] }
      });
    });
  }
  handleBookingsChange(spaces, space, bookings) {
    if (!bookings)
      return;
    this._bookings[space.id] = bookings.map((i) => new CalendarEvent(i));
    this.timeout("update_hover_els", () => this._updateHoverElements(spaces), 100);
  }
  handleStatusChange(spaces, space, status) {
    if (space.bookable)
      this._statuses[space.id] = status || "free";
    else
      delete this._statuses[space.id];
    this.timeout("update_statuses", () => {
      this.clearTimeout("update_hover_els");
      this._updateStatus(spaces);
      this._updateHoverElements(spaces);
    }, 100);
  }
  handlePresenceChange(spaces, space, presence) {
    this._presence[space.id] = presence;
    this.timeout("update_icons", () => this._updateIcons(spaces), 100);
  }
  _updateStatus(spaces) {
    return __async(this, null, function* () {
      const style_map = {};
      const colours = this._settings.get("app.explore.colors") || {};
      for (const space of spaces) {
        if (!this._statuses[space.id])
          continue;
        const status = this._statuses[space.id];
        style_map[`#${space.map_id}`] = {
          fill: colours[`space-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`],
          opacity: 0.6
        };
      }
      this._state.setStyles("spaces", style_map);
    });
  }
  _updateHoverElements(spaces) {
    const features = [];
    for (const space of spaces) {
      if (!space.map_id)
        continue;
      features.push({
        location: space.map_id,
        full_size: true,
        no_scale: true,
        content: ExploreSpaceInfoComponent,
        z_index: 10,
        data: {
          space: new Space(space),
          events: this._bookings[space.id],
          status: this._statuses[space.id] || "not-bookable"
        }
      });
    }
    this._state.setFeatures("spaces", features);
  }
  _updateIcons(spaces) {
    if (!this._settings.get("app.show_presence_indicators"))
      return;
    const features = [];
    for (const space of spaces) {
      if (!space.map_id)
        continue;
      features.push({
        location: space.map_id,
        content: ExploreIconComponent,
        data: {
          icon: {
            class: "material-symbols-rounded",
            content: "sensor_occupied"
          },
          color: this._presence[space.id] ? "var(--su)" : "var(--bc)",
          text_color: this._presence[space.id] ? "var(--suc)" : "var(--b1)"
        },
        z_index: 98
      });
    }
    this._state.setFeatures("spaces-presence", features);
  }
  updateActions(spaces) {
    const actions = [];
    for (const space of spaces) {
      if (!space.map_id)
        continue;
      for (const action of ["mousedown", "touchstart"]) {
        actions.push({
          id: space.map_id,
          action,
          priority: 5,
          callback: () => {
            this._panning = false;
            this.timeout("panning", () => this._panning = true, 300);
            this._last_action = "down";
          }
        });
      }
      for (const action of ["mouseup", "touchend"]) {
        actions.push({
          id: space.map_id,
          action,
          priority: 5,
          callback: () => {
            this.bookSpace(space);
            this._last_action = "up";
          }
        });
      }
    }
    this.timeout("set-actions", () => this._state.setActions("spaces", actions), 50);
  }
};
_ExploreSpacesService.\u0275fac = function ExploreSpacesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreSpacesService)();
};
_ExploreSpacesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreSpacesService, factory: _ExploreSpacesService.\u0275fac });
var ExploreSpacesService = _ExploreSpacesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSpacesService, [{
    type: Injectable
  }], () => [], null);
})();

// libs/explore/src/lib/explore-desks.service.ts
var _ExploreDesksService = class _ExploreDesksService extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._bookings = inject(BookingFormService);
    this._dialog = inject(MatDialog);
    this._in_use = new BehaviorSubject([]);
    this._options = new BehaviorSubject({});
    this._presence = new BehaviorSubject([]);
    this._signs_of_life = new BehaviorSubject([]);
    this._statuses = {};
    this._users = {};
    this._departments = {};
    this._checked_in = new BehaviorSubject([]);
    this.booking_rules = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => hu(bld.id, `desk_booking_rules`).pipe(catchError(() => of({ details: [] })))), map((_) => _?.details instanceof Array ? _.details : []), shareReplay(1));
    this.desk_list = this._state.level.pipe(debounceTime(50), switchMap((lvl) => hu(lvl.id, "desks").pipe(catchError(() => of({ details: [] })), map((i) => (i?.details instanceof Array ? i.details : []).map((j) => new Desk(__spreadProps(__spreadValues({}, j), { zone: lvl })))))), catchError((e) => []), shareReplay(1));
    this._bind = combineLatest([
      this._state.level,
      this._state.options
    ]).pipe(debounceTime(300), filter(([_, { is_public }]) => !!_ && !is_public), map(([lvl]) => {
      this._statuses = {};
      const mod = this._org.module("area_management", "AreaManagement");
      if (!mod)
        return;
      const binding = mod.binding(lvl.id);
      if (!binding)
        return;
      this.subscription(`lvl-in_use`, binding.listen().subscribe((d) => this.processBindingChange(d || {}, mod.id)));
      this.subscription("lvl-in_use_bind", binding.bind());
    }));
    this._booking_list = combineLatest([
      this._options,
      this._state.level
    ]).pipe(filter(([_, lvl]) => (_.use_api || _.date > endOfDay(Date.now()).valueOf()) && !!lvl), switchMap(([_, level]) => {
      return queryBookings({
        type: "desk",
        period_start: getUnixTime(startOfDay(_.date || Date.now())),
        period_end: getUnixTime(endOfDay(_.date || Date.now())),
        zones: level.id
      });
    }), debounceTime(200), tap((bookings) => {
      this._in_use.next(bookings.map((_) => _.asset_id));
      this._checked_in.next(bookings.filter((_) => _.checked_in).map((_) => _.asset_id));
    }), shareReplay(1));
    this._state_change = combineLatest([
      this.desk_list,
      this._in_use,
      this._presence,
      this._checked_in,
      this._signs_of_life,
      this.booking_rules,
      this._options
    ]).pipe(debounceTime(50), map((_0) => __async(this, [_0], function* ([desks, in_use, presence, checked_in, signs, restrictions]) {
      this._statuses = {};
      const level = yield nextValueFrom(this._state.level);
      for (const { id, bookable, map_id } of desks) {
        const d_id = map_id || id;
        const is_used = in_use.some((i) => d_id === i);
        const has_presence = presence.some((i) => d_id === i);
        const has_signs = signs.some((i) => d_id === i);
        const is_checked_in = checked_in.some((i) => d_id === i) || is_used && this._settings.get(`app.desks.auto_checkin`);
        const is_restricted = rulesForResource({
          date: Date.now(),
          duration: 60,
          host: currentUser(),
          resource: {
            id,
            zones: [level.parent_id, level.id]
          }
        }, restrictions)?.hidden;
        this._statuses[d_id] = bookable && !is_restricted ? !is_used && !has_presence && !is_checked_in ? has_signs ? "signs-of-life" : "free" : !has_presence && !is_checked_in ? "pending" : "busy" : "not-bookable";
      }
      this.processDesks(desks);
    })));
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.setOptions({
        enable_booking: this._settings.get("app.desks.enable_maps") !== false
      });
      this.subscription("bookings", this._booking_list.subscribe());
      this.subscription("bind", this._bind.subscribe());
      this.subscription("booking_rules", this.booking_rules.subscribe());
      this.subscription("changes", this._state_change.subscribe());
      this.subscription("desks", this.desk_list.subscribe((desks) => this.processDesks(desks)));
    });
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  processBindingChange({ value }, system_id) {
    const devices = (value || []).filter((v) => !["desk", "booking"].includes(v.location));
    const desks = (value || []).filter((v) => v.location === "desk" || v.location === "booking" && v.type === "desk");
    const date = this._options.getValue().date || Date.now();
    if (date <= endOfDay(Date.now()).valueOf() && !this._options.getValue().use_api) {
      this._in_use.next(desks.filter((v) => v.location === "booking").map((v) => v.map_id || v.asset_id));
      this._checked_in.next(desks.filter((v) => v.location === "booking" && v.checked_in).map((v) => v.map_id || v.asset_id));
      this._presence.next(desks.filter((v) => v.at_location).map((v) => v.map_id || v.asset_id));
      this._signs_of_life.next(desks.filter((v) => v.signs_of_life).map((v) => v.map_id || v.asset_id));
    }
    const departments = this._settings.get("app.department_map") || {};
    for (const desk of desks) {
      this._users[desk.map_id || desk.asset_id] = desk.staff_name;
      this._departments[desk.map_id || desk.asset_id] = departments[desk.department] || "";
    }
    this.processDevices(devices, system_id);
    this.timeout("update", () => this.updateStatus(), 100);
  }
  updateStatus() {
    const style_map = {};
    const colours = this._settings.get("app.explore.colors") || {};
    for (const desk_id in this._statuses) {
      if (!this._statuses[desk_id])
        continue;
      style_map[`#${desk_id}`] = {
        fill: colours[`desk-${this._statuses[desk_id]}`] || colours[`${this._statuses[desk_id]}`] || DEFAULT_COLOURS[`${this._statuses[desk_id]}`]
      };
    }
    this._state.setStyles("desks", style_map);
  }
  processDevices(devices, system_id) {
    const list = [];
    for (const device of devices) {
      const x = device.x / device.map_width;
      const y = device.y / device.map_height;
      list.push({
        track_id: `device:hover:${x},${y}`,
        location: {
          x: device.coordinates_from?.includes("right") ? 1 - x : x,
          y: device.coordinates_from?.includes("bottom") ? 1 - y : y
        },
        content: ExploreDeviceInfoComponent,
        z_index: 20,
        data: __spreadProps(__spreadValues({}, device), { system: system_id })
      });
    }
    this._state.setFeatures("devices", list);
  }
  processDesks(desks) {
    const list = [];
    const actions = [];
    const options = this._options.getValue();
    const show_desk_users = this._settings.get("app.desks.show_users") ?? true;
    for (const desk of desks) {
      list.push({
        track_id: `desk:hover:${desk.map_id || desk.id}`,
        location: desk.map_id || desk.id,
        content: ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: desk.map_id || desk.id,
          map_id: desk.name,
          name: desk.name || desk.map_id,
          user: show_desk_users ? this._users[desk.map_id] || desk.staff_name : "",
          status: this._statuses[desk.map_id],
          department: this._departments[desk.map_id] || ""
        },
        z_index: 20
      });
      if (!desk.bookable)
        continue;
      let can_book = true;
      const book_fn = () => __async(this, null, function* () {
        if (!can_book)
          return;
        yield this._bookDesk(desk, options);
      });
      ["mousedown", "touchstart"].forEach((event) => actions.push({
        id: desk.map_id || desk.id,
        action: event,
        priority: 10,
        callback: () => {
          can_book = true;
          this.timeout("booking", () => can_book = false);
        }
      }));
      ["mouseup", "touchend"].forEach((event) => actions.push({
        id: desk.map_id || desk.id,
        action: event,
        priority: 10,
        callback: book_fn
      }));
    }
    this._state.setActions("desks", this._options.getValue().enable_booking ? actions : []);
    this._state.setFeatures("desks", list);
    this.timeout("update", () => this.updateStatus(), 100);
  }
  _setBookingTime(date, duration, host = false, resource = null) {
    return __async(this, null, function* () {
      let user = null;
      if (!!this._settings.get("app.desks.allow_time_changes")) {
        const until = endOfDay(addDays(Date.now(), this._settings.get("app.desks.available_period") || 90));
        const ref = this._dialog.open(SetDatetimeModalComponent, {
          data: { date, duration, until, host, resource }
        });
        const details = yield ref.afterClosed().toPromise();
        if (!details)
          throw "User cancelled";
        date = details.date;
        duration = details.duration;
        user = details.user;
      }
      return { date, duration, user };
    });
  }
  _bookDesk(desk, options) {
    return __async(this, null, function* () {
      if (this._statuses[desk.id] !== "free") {
        return notifyError(i18n("EXPLORE.DESK_AVAILABLE_ERROR", {
          name: desk.name || "Desk"
        }));
      }
      if (desk.groups?.length && !desk.groups.find((_) => currentUser().groups.includes(_))) {
        return notifyError(i18n("EXPLORE.DESK_GROUP_ERROR", { name: desk.name || "Desk" }));
      }
      this._bookings.newForm("desk");
      this._bookings.setOptions({ type: "desk" });
      if (options.date) {
        this._bookings.form.patchValue({
          date: options.date
        });
        this._bookings.form.patchValue({
          all_day: !!options.all_day
        });
      }
      let { date, duration, user } = yield this._setBookingTime(this._bookings.form.value.date, this._bookings.form.value.duration, this._options.getValue()?.custom ?? false, desk);
      user = user || options.host || currentUser();
      const user_email = user?.email;
      this._bookings.form.patchValue({
        resources: [desk],
        asset_id: desk.id,
        asset_name: desk.name,
        date,
        duration: options.all_day ? 12 * 60 : duration,
        map_id: desk?.map_id || desk?.id,
        description: desk.name,
        user,
        user_email,
        booking_type: "desk",
        zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : []
      });
      const restrictions = yield nextValueFrom(this.booking_rules);
      const is_restricted = rulesForResource({
        date,
        duration,
        host: currentUser(),
        resource: {
          id: desk.id,
          zones: [desk.zone?.parent_id, desk.zone?.id]
        }
      }, restrictions)?.hidden;
      if (is_restricted) {
        return notifyError(i18n("EXPLORE.DESK_RESTRICTION_ERROR", {
          name: desk.name || "Desk"
        }));
      }
      yield this._bookings.confirmPost().catch((e) => {
        console.log(e);
        notifyError(i18n("EXPLORE.DESK_BOOKING_ERROR", {
          name: desk.name || "Desk",
          error: e.message || e.error || e
        }));
        throw e;
      });
      this._users[desk.map_id] = (options.host || currentUser())?.name;
      notifySuccess(i18n("EXPLORE.DESK_BOOKING_SUCCESS", { name: desk.name || "Desk" }));
    });
  }
};
_ExploreDesksService.\u0275fac = function ExploreDesksService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreDesksService)();
};
_ExploreDesksService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreDesksService, factory: _ExploreDesksService.\u0275fac });
var ExploreDesksService = _ExploreDesksService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDesksService, [{
    type: Injectable
  }], () => [], null);
})();

// libs/explore/src/lib/explore-map-control.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function ExploreMapControlComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r3 = ctx.$implicit;
    \u0275\u0275property("value", bld_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r3.display_name || bld_r3.name, " ");
  }
}
function ExploreMapControlComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-select", 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function ExploreMapControlComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(3, ExploreMapControlComponent_Conditional_1_For_4_Template, 2, 2, "mat-option", 4, _forTrack04);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(2, 1, ctx_r1.building));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 3, ctx_r1.buildings));
  }
}
function ExploreMapControlComponent_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r5 = ctx.$implicit;
    \u0275\u0275property("value", lvl_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r5.display_name || lvl_r5.name, " ");
  }
}
function ExploreMapControlComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "mat-select", 5);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function ExploreMapControlComponent_Conditional_3_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLevel($event));
    });
    \u0275\u0275repeaterCreate(4, ExploreMapControlComponent_Conditional_3_For_5_Template, 2, 2, "mat-option", 4, _forTrack04);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("has-bld", ((tmp_1_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.buildings)) == null ? null : tmp_1_0.length) > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(3, 4, ctx_r1.level));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 6, ctx_r1.levels));
  }
}
var _ExploreMapControlComponent = class _ExploreMapControlComponent extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._state = inject(ExploreStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.buildings = this._org.active_buildings;
    this.building = this._org.active_building;
    this.levels = this._org.active_levels;
    this.level = this._state.level;
    this.setLevel = (lvl) => {
      this._state.setFeatures("_located", []);
      this.timeout("set_level", () => this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone: lvl.id }
      }), 201);
    };
    this.setBuilding = (bld) => this._org.building = bld;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => params.has("zone") ? this._state.setLevel(params.get("zone")) : ""));
    });
  }
};
_ExploreMapControlComponent.\u0275fac = function ExploreMapControlComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreMapControlComponent)();
};
_ExploreMapControlComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreMapControlComponent, selectors: [["explore-map-controls"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 6, consts: [[1, "flex", "w-full", "space-x-2"], ["overlay", "", "buildings", "", "has-bld", "true", "appearance", "outline", 1, "no-subscript", "min-w-[10.5rem]", "flex-1"], ["overlay", "", "levels", "", "appearance", "outline", 1, "no-subscript", "min-w-[10.25rem]", "flex-1"], ["placeholder", "Select Building...", 3, "ngModelChange", "ngModel"], [3, "value"], ["placeholder", "Select Level...", 3, "ngModelChange", "ngModel"]], template: function ExploreMapControlComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, ExploreMapControlComponent_Conditional_1_Template, 6, 5, "mat-form-field", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, ExploreMapControlComponent_Conditional_3_Template, 7, 8, "mat-form-field", 2);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(2, 2, ctx.buildings)) == null ? null : tmp_0_0.length) > 1 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(4, 4, ctx.levels)) == null ? null : tmp_1_0.length) ? 3 : -1);
  }
}, dependencies: [CommonModule, AsyncPipe, MatFormFieldModule, MatFormField, MatSelectModule, MatSelect, MatOption, FormsModule, NgControlStatus, NgModel], styles: ["\n\nmat-form-field[has-bld=true][_ngcontent-%COMP%] {\n  max-width: calc(50vw - 2.5rem);\n}\n[full][_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  max-width: calc(50% - 2.5rem);\n}\n/*# sourceMappingURL=explore-map-control.component.css.map */"] });
var ExploreMapControlComponent = _ExploreMapControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreMapControlComponent, [{
    type: Component,
    args: [{ selector: "explore-map-controls", template: `
        <div class="flex w-full space-x-2">
            @if ((buildings | async)?.length > 1) {
                <mat-form-field
                    overlay
                    buildings
                    class="no-subscript min-w-[10.5rem] flex-1"
                    has-bld="true"
                    appearance="outline"
                >
                    <mat-select
                        placeholder="Select Building..."
                        [ngModel]="building | async"
                        (ngModelChange)="setBuilding($event)"
                    >
                        @for (bld of buildings | async; track bld.id) {
                            <mat-option [value]="bld">
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if ((levels | async)?.length) {
                <mat-form-field
                    overlay
                    levels
                    class="no-subscript min-w-[10.25rem] flex-1"
                    [attr.has-bld]="(buildings | async)?.length > 1"
                    appearance="outline"
                >
                    <mat-select
                        placeholder="Select Level..."
                        [ngModel]="level | async"
                        (ngModelChange)="setLevel($event)"
                    >
                        @for (lvl of levels | async; track lvl.id) {
                            <mat-option [value]="lvl">
                                {{ lvl.display_name || lvl.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
        </div>
    `, imports: [CommonModule, MatFormFieldModule, MatSelectModule, FormsModule], styles: ["/* angular:styles/component:css;09806d4e56396268b721c1e6773559de8fe2445d8858101e567dcb2c1dd21cd7;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-map-control.component.ts */\nmat-form-field[has-bld=true] {\n  max-width: calc(50vw - 2.5rem);\n}\n:host[full] mat-form-field {\n  max-width: calc(50% - 2.5rem);\n}\n/*# sourceMappingURL=explore-map-control.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreMapControlComponent, { className: "ExploreMapControlComponent", filePath: "libs/explore/src/lib/explore-map-control.component.ts", lineNumber: 74 });
})();

// libs/components/src/lib/cisco-map.component.ts
var _c09 = ["map_container"];
var DEFAULT_ZOOM = 18.5;
var _CiscoMapComponent = class _CiscoMapComponent extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.zoom = DEFAULT_ZOOM;
    this.zoomChange = new EventEmitter();
    this.zoneChange = new EventEmitter();
    this._mapContainer = viewChild.required("map_container");
  }
  ngOnInit() {
    this._injectScript();
    this.timeout("init", () => this._initialiseMap());
  }
  _injectScript() {
    if (document.getElementById("cisco-spaces-rich-maps-script"))
      return;
    const script = document.createElement("script");
    script.id = "cisco-spaces-rich-maps-script";
    script.src = "https://maps.ciscospaces.io/js/spaces-rich-maps-2.0-beta.min.js";
    document.body.appendChild(script);
  }
  _initialiseMap() {
    if (!SpacesRichMap) {
      console.error("Cisco Spaces Rich Map is not defined");
      return;
    }
    const config = this._settings.get("app.explore.cisco_maps");
    this._map = new SpacesRichMap({
      mapContainer: "cisco-map-container",
      token: config.token,
      tenantId: config.tenant_id,
      locationId: config.location_id,
      defaultFloor: 0,
      initialPos: [0, 0],
      initialZoom: 20,
      initialPitch: 65,
      initialBearing: 118,
      poiLegendHolder: "poi-switch",
      hideNavigationControls: true
    });
    console.log("Map initialized", this._map);
  }
};
_CiscoMapComponent.\u0275fac = function CiscoMapComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CiscoMapComponent)();
};
_CiscoMapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CiscoMapComponent, selectors: [["cisco-map"]], viewQuery: function CiscoMapComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._mapContainer, _c09, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { zone: "zone", metadata: "metadata", options: "options", focus: "focus", zoom: "zoom", reset: "reset" }, outputs: { zoomChange: "zoomChange", zoneChange: "zoneChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 0, consts: [["map_container", ""], ["id", "cisco-map-container", 1, "absolute", "inset-0", "z-0"]], template: function CiscoMapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1, 0);
  }
}, encapsulation: 2 });
var CiscoMapComponent = _CiscoMapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CiscoMapComponent, [{
    type: Component,
    args: [{ selector: "cisco-map", template: `
        <div
            #map_container
            id="cisco-map-container"
            class="absolute inset-0 z-0"
        ></div>
    ` }]
  }], () => [], { zone: [{
    type: Input
  }], metadata: [{
    type: Input
  }], options: [{
    type: Input
  }], focus: [{
    type: Input
  }], zoom: [{
    type: Input
  }], reset: [{
    type: Input
  }], zoomChange: [{
    type: Output
  }], zoneChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CiscoMapComponent, { className: "CiscoMapComponent", filePath: "libs/components/src/lib/cisco-map.component.ts", lineNumber: 30 });
})();

// libs/components/src/lib/map-renderer.component.ts
var _c010 = ["outlet"];
var _c14 = ["feature"];
var _forTrack05 = ($index, $item) => $item.track_id || $index;
function MapRendererComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 48);
  }
}
function MapRendererComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MapRendererComponent_Conditional_2_Conditional_0_Template, 1, 1, "mat-spinner", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.viewer || ctx_r0.loading ? 0 : -1);
  }
}
function MapRendererComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "EXPLORE.MAP_EMPTY"), " ");
  }
}
function MapRendererComponent_Conditional_4_For_2_Conditional_0_Case_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MapRendererComponent_Conditional_4_For_2_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MapRendererComponent_Conditional_4_For_2_Conditional_0_Case_3_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const element_r3 = ctx_r1.$implicit;
    const \u0275$index_17_r4 = ctx_r1.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", element_r3.content)("ngComponentOutletInjector", ctx_r0.injectors[\u0275$index_17_r4]);
  }
}
function MapRendererComponent_Conditional_4_For_2_Conditional_0_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    const element_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, element_r3.content), \u0275\u0275sanitizeHtml);
  }
}
function MapRendererComponent_Conditional_4_For_2_Conditional_0_Case_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MapRendererComponent_Conditional_4_For_2_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MapRendererComponent_Conditional_4_For_2_Conditional_0_Case_5_ng_container_0_Template, 1, 0, "ng-container", 10);
  }
  if (rf & 2) {
    const element_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngTemplateOutlet", element_r3.content)("ngTemplateOutletContext", element_r3.data);
  }
}
function MapRendererComponent_Conditional_4_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7, 1);
    \u0275\u0275conditionalCreate(3, MapRendererComponent_Conditional_4_For_2_Conditional_0_Case_3_Template, 1, 2, "ng-container")(4, MapRendererComponent_Conditional_4_For_2_Conditional_0_Case_4_Template, 2, 3, "div", 8)(5, MapRendererComponent_Conditional_4_For_2_Conditional_0_Case_5_Template, 1, 2, "ng-container");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const element_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("no-scale", element_r3.no_scale)("el-id", element_r3.location)("track-id", element_r3.track_id)("view-id", ctx_r0.viewer);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_19_0 = ctx_r0.type(element_r3.content)) === "component" ? 3 : tmp_19_0 === "html" ? 4 : 5);
  }
}
function MapRendererComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MapRendererComponent_Conditional_4_For_2_Conditional_0_Template, 6, 5, "div");
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275conditional(element_r3 ? 0 : -1);
  }
}
function MapRendererComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, MapRendererComponent_Conditional_4_For_2_Template, 1, 1, null, null, _forTrack05);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.features);
  }
}
function isSamePoint(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}
var _MapRendererComponent = class _MapRendererComponent extends AsyncHandler {
  onResize() {
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
    this.updateDisplay();
  }
  type(content) {
    return typeof content === "string" ? "html" : content instanceof TemplateRef ? "template" : "component";
  }
  constructor() {
    super();
    this._injector = inject(Injector);
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
    this.reset = 0;
    this.zoomChange = new EventEmitter();
    this.centerChange = new EventEmitter();
    this.mapInfo = new EventEmitter();
    this.injectors = [];
    this.feature_list = [];
    this._on_changes = new BehaviorSubject(null);
    this._extra_data = {
      ratio$: this._on_changes.pipe(map((_) => _.ratio)),
      svg_ratio$: this._on_changes.pipe(map((_) => _.svg_ratio)),
      zoom$: this._on_changes.pipe(map((_) => _.zoom)),
      position: this._on_changes.pipe(map((_) => _.center))
    };
    this._outlet_el = viewChild("outlet");
    this._feature_list = viewChildren("feature");
  }
  ngOnInit() {
    Dn();
  }
  ngOnDestroy() {
    if (this.viewer) {
      Hn(this.viewer);
    }
  }
  ngOnChanges(changes) {
    if (changes.src && this.src) {
      this.createView().catch((e) => console.warn(e));
    }
    if (changes.features) {
      this.updateInjectors();
    }
    if (this.viewer) {
      if (changes.focus && this.focus) {
        this.focusOn(this.focus);
      } else if (changes.zoom && changes.zoom.previousValue != changes.zoom.currentValue || changes.center && !isSamePoint(changes.center.previousValue, changes.center.currentValue)) {
        this.updateDisplay();
      }
      if (changes.styles || changes.features || changes.labels || changes.actions) {
        this.timeout("update_view", () => this.updateView());
      }
    }
    if (changes.reset && changes.reset.currentValue !== changes.reset.previousValue) {
      this.zoom = 1;
      this.center = { x: 0.5, y: 0.5 };
      this.updateDisplay();
    }
  }
  ngAfterViewInit() {
    this.createView().catch((e) => console.warn(e));
  }
  /** Update overlays, styles and actions of viewer */
  updateView() {
    try {
      if (!$(this.viewer) || this.loading) {
        return this.timeout("update_view", () => this.updateView());
      }
      this.updateFeatureList();
      Yn(this.viewer, {
        styles: this.styles,
        features: this.feature_list,
        labels: this.labels,
        actions: this.actions,
        options: this.options
      });
    } catch (e) {
      console.warn("[MAP] Update viewer error.", e);
      return this.timeout("update_view", () => this.updateView());
    }
  }
  /** Update zoom and center position of viewer */
  updateDisplay() {
    try {
      Yn(this.viewer, {
        zoom: this.zoom,
        desired_zoom: this.zoom,
        center: this.center,
        desired_center: this.center,
        options: this.options
      });
    } catch (e) {
      console.warn("[MAP] Update view display error.", e);
      return this.timeout("update_display", () => this.updateDisplay());
    }
  }
  createView() {
    return __async(this, null, function* () {
      if (!ve()) {
        return this.timeout("create_view", () => this.createView().catch((e) => console.warn(e)), 300);
      }
      const simp_url = this.src?.toLowerCase() || "";
      if (!simp_url.includes("svg") && !simp_url.includes("upload"))
        return;
      const _outlet_el = this._outlet_el();
      if (this.src && _outlet_el?.nativeElement && !this.loading) {
        this.loading = true;
        if (this.viewer) {
          try {
            Yn(this.viewer, {
              styles: this.styles,
              features: [],
              labels: this.labels,
              actions: this.actions,
              options: this.options
            });
            Hn(this.viewer);
          } catch (e) {
            console.warn(e);
            return;
          }
        }
        this.updateFeatureList();
        const tkn = Y();
        document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(Oe()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
        this.viewer = yield Un({
          element: _outlet_el?.nativeElement,
          url: this.src,
          styles: this.styles,
          zoom: this.zoom,
          desired_zoom: this.zoom,
          center: this.center,
          features: this.feature_list,
          labels: this.labels,
          actions: this.actions,
          options: this.options
        }).catch((e) => {
          console.warn(e);
          return "";
        });
        this.loading = false;
        if (!this.viewer)
          return;
        this.loading = false;
        this.subscription("view_changes", gn(this.viewer)?.subscribe((v) => {
          this._on_changes.next(__spreadValues({}, v));
          this.zoomChange.emit(v.zoom);
          this.zoom = v.zoom;
          this.centerChange.emit(v.center);
          this.center = v.center;
        }));
        const viewer = $(this.viewer);
        this.mapInfo.emit(viewer.mappings);
        if (this.focus)
          this.focusOn(this.focus);
      } else if (this.src && !_outlet_el?.nativeElement || this.loading) {
        this.timeout("create_view", () => this.createView().catch((e) => console.warn(e)));
      }
    });
  }
  focusOn(id) {
    if (!id || !this.viewer)
      return;
    const viewer = $(this.viewer);
    if (!viewer)
      return;
    const rect = viewer.mappings[id];
    if (!rect)
      return;
    this.center = {
      x: 1 - (rect.x + rect.w / 2),
      y: 1 - (rect.y + rect.h / 4)
    };
    this.updateDisplay();
  }
  /* istanbul ignore next */
  trackByFn(index, feature) {
    return feature?.track_id;
  }
  updateFeatureList() {
    this.feature_list = (this.features || []).map((f, idx) => __spreadProps(__spreadValues({}, f), {
      content: this._feature_list[idx]?.nativeElement
    })).filter((f) => f.content);
  }
  updateInjectors() {
    const old_injectors = this.injectors || [];
    this.injectors = (this.features || []).map((f) => old_injectors.find((_) => _.get(MAP_FEATURE_DATA)?.track_id && _.get(MAP_FEATURE_DATA)?.track_id === f.track_id) || Injector.create({
      providers: [
        {
          provide: MAP_FEATURE_DATA,
          useValue: __spreadValues(__spreadValues({
            track_id: f.track_id
          }, f.data), this._extra_data)
        }
      ],
      parent: this._injector
    }));
  }
};
_MapRendererComponent.\u0275fac = function MapRendererComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapRendererComponent)();
};
_MapRendererComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapRendererComponent, selectors: [["map-renderer"]], viewQuery: function MapRendererComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._outlet_el, _c010, 5);
    \u0275\u0275viewQuerySignal(ctx._feature_list, _c14, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance(2);
  }
}, hostBindings: function MapRendererComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function MapRendererComponent_resize_HostBindingHandler() {
      return ctx.onResize();
    }, \u0275\u0275resolveWindow);
  }
}, inputs: { src: "src", styles: "styles", zoom: "zoom", center: "center", features: "features", labels: "labels", actions: "actions", reset: "reset", options: "options", focus: "focus" }, outputs: { zoomChange: "zoomChange", centerChange: "centerChange", mapInfo: "mapInfo" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 5, vars: 4, consts: [["outlet", ""], ["feature", ""], ["tabindex", "0", "role", "map", 1, "absolute", "inset-0"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], ["hidden", ""], [1, "absolute", 3, "diameter"], [1, "opacity-30"], [1, "pointer-events-none"], [3, "innerHTML"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function MapRendererComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2, 0);
    \u0275\u0275conditionalCreate(2, MapRendererComponent_Conditional_2_Template, 1, 1)(3, MapRendererComponent_Conditional_3_Template, 4, 3, "div", 3);
    \u0275\u0275conditionalCreate(4, MapRendererComponent_Conditional_4_Template, 3, 0, "div", 4);
  }
  if (rf & 2) {
    \u0275\u0275classProp("hidden", !ctx.src);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.src ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx.injectors == null ? null : ctx.injectors.length) ? 4 : -1);
  }
}, dependencies: [CommonModule, NgComponentOutlet, NgTemplateOutlet, TranslatePipe, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\nmat-spinner[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=map-renderer.component.css.map */"] });
var MapRendererComponent = _MapRendererComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapRendererComponent, [{
    type: Component,
    args: [{ selector: `map-renderer`, template: `
        <div
            #outlet
            tabindex="0"
            role="map"
            class="absolute inset-0"
            [class.hidden]="!src"
        ></div>
        @if (src) {
            @if (!viewer || loading) {
                <mat-spinner class="absolute" [diameter]="48" />
            }
        } @else {
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="opacity-30">
                    {{ 'EXPLORE.MAP_EMPTY' | translate }}
                </div>
            </div>
        }
        @if (injectors?.length) {
            <div hidden>
                @for (
                    element of features;
                    track element.track_id || $index;
                    let i = $index
                ) {
                    @if (element) {
                        <div>
                            <div
                                #feature
                                class="pointer-events-none"
                                [attr.no-scale]="element.no_scale"
                                [attr.el-id]="element.location"
                                [attr.track-id]="element.track_id"
                                [attr.view-id]="viewer"
                            >
                                @switch (type(element.content)) {
                                    @case ('component') {
                                        <ng-container
                                            *ngComponentOutlet="
                                                element.content;
                                                injector: injectors[i]
                                            "
                                        ></ng-container>
                                    }
                                    @case ('html') {
                                        <div
                                            [innerHTML]="
                                                element.content | sanitize
                                            "
                                        ></div>
                                    }
                                    @default {
                                        <ng-container
                                            *ngTemplateOutlet="
                                                element.content;
                                                context: element.data
                                            "
                                        ></ng-container>
                                    }
                                }
                            </div>
                        </div>
                    }
                }
            </div>
        }
    `, imports: [CommonModule, TranslatePipe, MatProgressSpinnerModule], styles: ["/* angular:styles/component:css;3e4635dffa25bbb5509b5ad5ed62f87c396dd7f6fe919adad84e303cefc25ff3;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/map-renderer.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\nmat-spinner {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=map-renderer.component.css.map */\n"] }]
  }], () => [], { src: [{
    type: Input
  }], styles: [{
    type: Input
  }], zoom: [{
    type: Input
  }], center: [{
    type: Input
  }], features: [{
    type: Input
  }], labels: [{
    type: Input
  }], actions: [{
    type: Input
  }], reset: [{
    type: Input
  }], options: [{
    type: Input
  }], focus: [{
    type: Input
  }], zoomChange: [{
    type: Output
  }], centerChange: [{
    type: Output
  }], mapInfo: [{
    type: Output
  }], onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapRendererComponent, { className: "MapRendererComponent", filePath: "libs/components/src/lib/map-renderer.component.ts", lineNumber: 134 });
})();

// libs/components/src/lib/maps-indoors.component.ts
var _c011 = ["map_container"];
function MapsIndoorsComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 5);
  }
}
function MapsIndoorsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function MapsIndoorsComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDirections());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, MapsIndoorsComponent_Conditional_2_Conditional_5_Template, 1, 0, "mat-spinner", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.viewing_directions ? "Hide" : "Show", " Directions ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading_directions ? 5 : -1);
  }
}
var DEFAULT_ZOOM2 = 18.5;
var RESOURCE_MAP = {};
var _MapsIndoorsComponent = class _MapsIndoorsComponent extends AsyncHandler {
  constructor() {
    super();
    this._maps_people = inject(MapsPeopleService);
    this._org = inject(OrganisationService);
    this.zoom = DEFAULT_ZOOM2;
    this.zoomChange = new EventEmitter();
    this.zoneChange = new EventEmitter();
    this.show_directions = false;
    this.viewing_directions = false;
    this.loading_directions = false;
    this.ignore_zoom = false;
    this._floor_list = [];
    this._container = viewChild("map_container");
    this._added_floor_selector = false;
    const data = sessionStorage.getItem("PLACEOS.mapsindoors.resources") || "{}";
    const value = JSON.parse(data);
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        RESOURCE_MAP[key] = value[key];
      }
    }
  }
  ngOnInit() {
    this.id = randomString(8);
    this._initialised.next(false);
    this._initialiseServices();
  }
  ngOnChanges(changes) {
    if (!this.is_initialised) {
      return this.timeout("on_changes", () => this.ngOnChanges(changes));
    }
    if (changes.zone && this.zone) {
      this._centerOnZone();
    }
    if (changes.focus && this.focus) {
      this._focusOnLocation();
    }
    if (changes.metadata) {
      this._updateMapStyling();
    }
    if (changes.zoom && this.zoom && !this.ignore_zoom) {
      this._services?.map?.setZoom(this.zoom);
    }
    if (changes.reset) {
      this._services?.map?.setZoom(DEFAULT_ZOOM2);
      this._centerOnZone();
    }
    if (changes.options) {
      this._addFloorSelector();
    }
  }
  _setResource(id, resource) {
    RESOURCE_MAP[id] = resource;
    this.timeout("set_resource", () => {
      sessionStorage.setItem("PLACEOS.mapsindoors.resources", JSON.stringify(RESOURCE_MAP));
    });
  }
  _initialiseServices() {
    if (!this._maps_people.is_ready || !window.mapsindoors) {
      this.timeout("init", () => this._initialiseServices(), 1e3);
      return;
    }
    const [lat, long] = (this._org.building?.location || `-33.8567844,151.2152967`).split(",");
    const view_options = {
      element: this._container().nativeElement,
      center: { lat: parseFloat(lat), lng: parseFloat(long) },
      zoom: DEFAULT_ZOOM2,
      maxZoom: 24
    };
    let view_instance = null;
    switch (this._maps_people.map_service) {
      case MapService.GoogleMaps:
        log("MapsIndoors", "Using Google Maps API");
        view_instance = new mapsindoors.mapView.GoogleMapsView(view_options);
        break;
      case MapService.Mapbox:
        view_options.accessToken = this._maps_people.map_token;
        log("MapsIndoors", "Using Mapbox API");
        view_instance = new mapsindoors.mapView.MapboxView(view_options);
        break;
    }
    if (!view_instance) {
      notifyWarn(i18n("EXPLORE.MAPSINDOORS_INIT_FAILED"));
      return;
    }
    const provider = this._maps_people.map_service === MapService.GoogleMaps ? new mapsindoors.directions.GoogleMapsProvider() : new mapsindoors.directions.MapboxProvider(this._maps_people.map_token);
    const maps_indoors = new mapsindoors.MapsIndoors({
      mapView: view_instance
    });
    this._services = {
      mapsindoors: maps_indoors,
      view: view_instance,
      map: view_instance.getMap(),
      directions: new mapsindoors.services.DirectionsService(provider),
      directions_renderer: new mapsindoors.directions.DirectionsRenderer({
        mapsIndoors: maps_indoors
      })
    };
    this._initialised.next(true);
    if (this.zone) {
      this._services.map.setZoom(DEFAULT_ZOOM2);
      this._centerOnZone();
    }
    this._addFloorSelector();
    this._services.mapsindoors.addListener("building_changed", (e) => this._handleBuildingChange(e));
    this._services.mapsindoors.addListener("floor_changed", (e) => this._handleLevelChange(e));
    this._services.mapsindoors.addListener("zoom_changed", (e) => this._handleZoomChange(e));
    this._services.mapsindoors.addListener("click", (e) => this._handleUserClick(e));
    this.timeout("resize", () => window.dispatchEvent(new Event("resize")), 100);
    window.maps_indoors = this._services;
    this.timeout("focus", () => this._focusOnLocation());
    this.timeout("init_zoom", () => this._handleZoomChange(DEFAULT_ZOOM2));
  }
  clearDirections() {
    this._services.directions_renderer.setRoute(null);
    this.viewing_directions = false;
  }
  toggleDirections() {
    return __async(this, null, function* () {
      if (this.viewing_directions) {
        this.clearDirections();
        this._focusOnLocation();
        return;
      }
      if (!this.focus)
        return;
      const items = yield this._search(this.focus);
      if (!items?.length) {
        notifyError(i18n("EXPLORE.LOCATE_FAILED", { name: this.focus }));
        return;
      }
      this.loading_directions = true;
      const item = items[0];
      const bld = this._org.buildings.find((bld2) => bld2.id === this.zone.parent_id);
      const [d_lng, d_lat] = item.properties?.anchor?.coordinates || bld?.location.split(",") || [37.8136, 144.9631];
      const options = { timeout: 1e4, enableHighAccuracy: true };
      navigator.geolocation.getCurrentPosition((position) => __async(this, null, function* () {
        this._last_position = position;
        this.setDirectionsFromLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }, { lat: d_lat, lng: d_lng });
      }), () => {
        if (this._last_position) {
          this.setDirectionsFromLocation({
            lat: this._last_position.coords.latitude,
            lng: this._last_position.coords.longitude
          }, { lat: d_lat, lng: d_lng });
        } else
          notifyError(i18n("EXPLORE.LOCATE_CURRENT_FAILED"));
      }, options);
    });
  }
  setDirectionsFromLocation(from, to) {
    return __async(this, null, function* () {
      const distance = calculateDistance(to.lat, to.lng, from.lat, from.lng);
      const routeParameters = {
        origin: {
          lat: from.lat,
          lng: from.lng
        },
        destination: { lat: to.lat, lng: to.lng },
        travelMode: distance < 2 ? "WALKING" : "DRIVING"
      };
      const result = yield this._services.directions.getRoute(routeParameters).catch((e) => {
        log("MapsIndoors", "Error fetching route: ", e.message || e, "warn");
        const origin_error = e instanceof TypeError && e.message?.includes("origin");
        this.loading_directions = false;
        if (!origin_error)
          return;
        notifyError(i18n("EXPLORE.LOCATE_ROUTE_FAILED", {
          error: i18n("EXPLORE.LOCATE_ORIGIN_ERROR")
        }));
      });
      if (!result)
        return;
      this._services.directions_renderer.setRoute(result);
      this.viewing_directions = true;
      this.loading_directions = false;
    });
  }
  _handleZoomChange(level) {
    this.timeout("zoom_change", () => {
      this.ignore_zoom = true;
      this.zoom = level;
      this.zoomChange.emit(level);
      this.timeout("reset_ignore_zoom", () => this.ignore_zoom = false, 50);
    }, 100);
  }
  _handleBuildingChange(building) {
    const id = building.externalId || building.id;
    log("MapsIndoors", `Building switched to "${id}"`);
    const floors = building.floors || {};
    this._floor_list = Object.keys(floors).map((key) => __spreadValues({
      index: key
    }, floors[key]));
    log("MapsIndoors", "Floor List:", this._floor_list);
    if (!this._services)
      return;
    const bld = this._org.buildings.find((_) => _.id === id || _.map_id === id);
    this.timeout("set_floor", () => {
      const has_set_floor = this._setFloorFromZone();
      if (!has_set_floor && building.defaultFloor) {
        this._handleLevelChange(building.defaultFloor);
      }
    });
    if (!bld)
      return;
    this._org.building = bld;
    this._last_building = bld.id;
  }
  _handleLevelChange(index) {
    return __async(this, null, function* () {
      log("MapsIndoors", `Level switched to "${index}"`);
      const floor = this._floor_list.find((_) => _.index === index);
      const id = floor?.externalId || floor?.id;
      if (!this._services)
        return;
      const levels = yield nextValueFrom(this._org.active_levels);
      if (!levels)
        return;
      const new_level = levels.find((_) => _.map_id === id || _.id === id);
      if (!new_level)
        return;
      this.zone = new_level;
      this.zoneChange.emit(new_level);
    });
  }
  _handleUserClick(event) {
    log("MapsIndoors", `Click occurred`, event);
    const id = event.properties?.externalId || event.properties?.roomId || event.id;
    const actions = this.metadata?.actions || [];
    log("MapsIndoors", `Registered Actions`, actions);
    const ignore_actions = ["mousedown", "touchstart", "enter", "leave"];
    for (const action of actions) {
      if ((action.id === id || action.id === "*") && !ignore_actions.includes(action.action)) {
        action.callback(event);
        break;
      }
    }
  }
  _search(query) {
    return __async(this, null, function* () {
      if (!this._services)
        return;
      return mapsindoors?.services.LocationsService.getLocations({
        q: query
      });
    });
  }
  _updateMapStyling() {
    return __async(this, null, function* () {
      if (!this._services)
        return;
      const styles = this.metadata?.styles || {};
      for (const id in styles) {
        if (!styles[id].fill)
          continue;
        let resource = RESOURCE_MAP[id];
        if (!resource) {
          const id_simple = id.replace(/#/, "");
          const list = yield this._search(id_simple);
          if (!list.length)
            continue;
          resource = list.find((_) => _.properties?.externalId === id_simple || _.properties?.roomId === id_simple || _.id === id_simple);
          if (resource)
            this._setResource(id, resource);
        }
        if (!resource)
          continue;
        const value = {
          extrusionHeight: 0,
          extrusionVisible: false,
          polygonVisible: true,
          polygonFillColor: styles[id].fill
        };
        this._services.mapsindoors.setDisplayRule(resource.id, value);
      }
    });
  }
  _focusOnLocation() {
    return __async(this, null, function* () {
      if (!this.focus)
        return;
      const items = yield this._search(this.focus);
      this.clearDirections();
      if (!items?.length) {
        notifyError(i18n("EXPLORE.LOCATE_FAILED", { name: this.focus }));
        return;
      }
      const item = items.find((_) => _.properties?.externalId === this.focus) || items[0];
      const bld = this._org.buildings.find((bld2) => bld2.id === this.zone.parent_id);
      const [lng, lat] = item.properties?.anchor?.coordinates || bld?.location.split(",") || [37.8136, 144.9631];
      this._services.map.setZoom(DEFAULT_ZOOM2);
      this._services.map.setCenter({ lat, lng });
      this._services.mapsindoors.setFloor(item.properties?.floor);
      this._services.mapsindoors.highlight([item.id]);
    });
  }
  _centerOnZone() {
    if (!this._services || !this.zone || this.zone.parent_id === this._last_building || this.zone.id === this._last_building)
      return;
    this.timeout("set_center", () => {
      const bld = this._org.buildings.find((bld2) => bld2.id === this.zone.parent_id);
      if (!bld)
        return;
      const [lat, long] = bld?.location.split(",") || ["0", "0"];
      if (!this.focus) {
        this._services.map.setCenter({
          lat: parseFloat(lat),
          lng: parseFloat(long)
        });
      }
      this._setFloorFromZone();
      this._last_building = this.zone.id;
    });
  }
  _setFloorFromZone() {
    if (!this.zone.map_id || !this._services)
      return false;
    const map_id = this.zone.map_id;
    const floor = this._floor_list.find((_) => _.index === map_id || _.externalId === map_id || _.id === map_id);
    if (!floor)
      return false;
    this._services.mapsindoors.setFloor(floor.index);
    return true;
  }
  _addFloorSelector() {
    if (!this.options?.controls || this._added_floor_selector)
      return;
    const element = document.createElement("div");
    new mapsindoors.FloorSelector(element, this._services.mapsindoors);
    if (this._maps_people.map_service === MapService.GoogleMaps) {
      this._services.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(element);
    } else {
      this._services.map.addControl({
        onAdd: () => element,
        onRemove: () => null
      });
    }
    this._added_floor_selector = true;
  }
};
_MapsIndoorsComponent.\u0275fac = function MapsIndoorsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapsIndoorsComponent)();
};
_MapsIndoorsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapsIndoorsComponent, selectors: [["maps-indoors"]], viewQuery: function MapsIndoorsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._container, _c011, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { zone: "zone", metadata: "metadata", options: "options", focus: "focus", zoom: "zoom", reset: "reset" }, outputs: { zoomChange: "zoomChange", zoneChange: "zoneChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 3, vars: 1, consts: [["map_container", ""], [1, "absolute", "inset-0", "z-0"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "z-10", "space-x-2", "border-base-200", "bg-base-100", "text-base-content", "shadow"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "z-10", "space-x-2", "border-base-200", "bg-base-100", "text-base-content", "shadow", 3, "click"], [1, "pr-2"], ["diameter", "24"]], template: function MapsIndoorsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1, 0);
    \u0275\u0275conditionalCreate(2, MapsIndoorsComponent_Conditional_2_Template, 6, 2, "button", 2);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.focus && !ctx.show_directions && (ctx.options == null ? null : ctx.options.controls) ? 2 : -1);
  }
}, dependencies: [MatRippleModule, MatRipple, MatProgressSpinnerModule, MatProgressSpinner], encapsulation: 2 });
var MapsIndoorsComponent = _MapsIndoorsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapsIndoorsComponent, [{
    type: Component,
    args: [{ selector: "maps-indoors", template: `
        <div #map_container class="absolute inset-0 z-0"></div>
        @if (focus && !show_directions && options?.controls) {
            <button
                btn
                matRipple
                class="absolute bottom-2 left-2 z-10 space-x-2 border-base-200 bg-base-100 text-base-content shadow"
                (click)="toggleDirections()"
            >
                <icon>place</icon>
                <div class="pr-2">
                    {{ viewing_directions ? 'Hide' : 'Show' }} Directions
                </div>
                @if (loading_directions) {
                    <mat-spinner diameter="24"></mat-spinner>
                }
            </button>
        }
    `, imports: [MatRippleModule, MatProgressSpinnerModule] }]
  }], () => [], { zone: [{
    type: Input
  }], metadata: [{
    type: Input
  }], options: [{
    type: Input
  }], focus: [{
    type: Input
  }], zoom: [{
    type: Input
  }], reset: [{
    type: Input
  }], zoomChange: [{
    type: Output
  }], zoneChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapsIndoorsComponent, { className: "MapsIndoorsComponent", filePath: "libs/components/src/lib/maps-indoors.component.ts", lineNumber: 69 });
})();

// libs/components/src/lib/interactive-map.component.ts
var _c012 = ["*", "*", "*"];
function InteractiveMapComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "maps-indoors", 3);
    \u0275\u0275listener("zoneChange", function InteractiveMapComponent_Conditional_0_Template_maps_indoors_zoneChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLevelChange($event));
    })("zoomChange", function InteractiveMapComponent_Conditional_0_Template_maps_indoors_zoomChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoom.set($event));
    });
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("zone", ctx_r1.location)("zoom", ctx_r1.zoom())("options", ctx_r1.options())("reset", ctx_r1.reset())("focus", ctx_r1.focus())("metadata", ctx_r1.metadata());
  }
}
function InteractiveMapComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cisco-map");
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
function InteractiveMapComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "map-renderer", 4);
    \u0275\u0275listener("zoomChange", function InteractiveMapComponent_Conditional_3_Template_map_renderer_zoomChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoom.set($event));
    })("mapInfo", function InteractiveMapComponent_Conditional_3_Template_map_renderer_mapInfo_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mapInfo.emit($event));
    });
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.src())("zoom", ctx_r1.zoom())("reset", ctx_r1.reset())("styles", ctx_r1.styles() || ((tmp_4_0 = ctx_r1.metadata()) == null ? null : tmp_4_0.styles))("features", ctx_r1.features() || ((tmp_5_0 = ctx_r1.metadata()) == null ? null : tmp_5_0.features))("actions", ctx_r1.actions() || ((tmp_6_0 = ctx_r1.metadata()) == null ? null : tmp_6_0.actions))("labels", ctx_r1.labels() || ((tmp_7_0 = ctx_r1.metadata()) == null ? null : tmp_7_0.labels));
  }
}
function InteractiveMapComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 5);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function InteractiveMapComponent_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoom.set(ctx_r1.zoom() * 1.1));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function InteractiveMapComponent_Conditional_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoom.set(ctx_r1.zoom() * (10 / 11)));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function InteractiveMapComponent_Conditional_4_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset.set(ctx_r1.reset() + 1));
    });
    \u0275\u0275elementStart(11, "icon");
    \u0275\u0275text(12, "refresh");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 3, "EXPLORE.ZOOM_IN"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 5, "EXPLORE.ZOOM_OUT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 7, "EXPLORE.ZOOM_RESET"));
  }
}
var _InteractiveMapComponent = class _InteractiveMapComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._mapspeople = inject(MapsPeopleService);
    this._org = inject(OrganisationService);
    this._explore = inject(ExploreStateService);
    this.src = input("");
    this.zoom = model(1);
    this.center = model({ x: 0.5, y: 0.5 });
    this.reset = model(0);
    this.metadata = model({});
    this.styles = input({});
    this.features = input([]);
    this.labels = input([]);
    this.actions = input([]);
    this.options = input({});
    this.focus = input("");
    this.mapInfo = output();
    this.use_mapsindoors$ = this._mapspeople.available$;
    this.location = computed(() => this._org.levels.find((_) => _.map_id === this.src()));
  }
  get use_cisco_maps() {
    return this._settings.get("app.explore.use_cisco_maps");
  }
  ngOnChanges(changes) {
    if (changes.actions || changes.labels || changes.styles || changes.features) {
      this.metadata.set({
        actions: this.actions() || [],
        labels: this.labels() || [],
        styles: this.styles() || {},
        features: this.features() || []
      });
    }
  }
  onLevelChange(zone) {
    log("Map", "Level changed to:", zone?.display_name || zone?.name || zone);
    this._explore.setLevel(zone.id);
  }
};
_InteractiveMapComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275InteractiveMapComponent_BaseFactory;
  return function InteractiveMapComponent_Factory(__ngFactoryType__) {
    return (\u0275InteractiveMapComponent_BaseFactory || (\u0275InteractiveMapComponent_BaseFactory = \u0275\u0275getInheritedFactory(_InteractiveMapComponent)))(__ngFactoryType__ || _InteractiveMapComponent);
  };
})();
_InteractiveMapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InteractiveMapComponent, selectors: [["interactive-map"]], inputs: { src: [1, "src"], zoom: [1, "zoom"], center: [1, "center"], reset: [1, "reset"], metadata: [1, "metadata"], styles: [1, "styles"], features: [1, "features"], labels: [1, "labels"], actions: [1, "actions"], options: [1, "options"], focus: [1, "focus"] }, outputs: { zoom: "zoomChange", center: "centerChange", reset: "resetChange", metadata: "metadataChange", mapInfo: "mapInfo" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c012, decls: 5, vars: 4, consts: [[3, "zone", "zoom", "options", "reset", "focus", "metadata"], [3, "src", "zoom", "reset", "styles", "features", "actions", "labels"], ["zoom", "", 1, "absolute", "bottom-16", "right-1", "flex", "flex-col", "divide-y", "divide-base-200", "overflow-hidden", "rounded", "border", "border-base-200", "bg-base-100", "text-base-content", "shadow"], [3, "zoneChange", "zoomChange", "zone", "zoom", "options", "reset", "focus", "metadata"], [3, "zoomChange", "mapInfo", "src", "zoom", "reset", "styles", "features", "actions", "labels"], ["icon", "", "matRipple", "", "matTooltipPosition", "left", 1, "rounded-none", 3, "click", "matTooltip"]], template: function InteractiveMapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef(_c012);
    \u0275\u0275conditionalCreate(0, InteractiveMapComponent_Conditional_0_Template, 2, 6, "maps-indoors", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, InteractiveMapComponent_Conditional_2_Template, 2, 0, "cisco-map")(3, InteractiveMapComponent_Conditional_3_Template, 2, 7, "map-renderer", 1);
    \u0275\u0275conditionalCreate(4, InteractiveMapComponent_Conditional_4_Template, 13, 9, "div", 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 2, ctx.use_mapsindoors$) ? 0 : ctx.use_cisco_maps ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_1_0 = ctx.options()) == null ? null : tmp_1_0.controls) ? 4 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MapsIndoorsComponent,
  MapRendererComponent,
  CiscoMapComponent
], encapsulation: 2 });
var InteractiveMapComponent = _InteractiveMapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InteractiveMapComponent, [{
    type: Component,
    args: [{ selector: "interactive-map", template: `
        @if (use_mapsindoors$ | async) {
            <maps-indoors
                [zone]="location"
                (zoneChange)="onLevelChange($event)"
                [zoom]="zoom()"
                (zoomChange)="zoom.set($event)"
                [options]="options()"
                [reset]="reset()"
                [focus]="focus()"
                [metadata]="metadata()"
            >
                <ng-content />
            </maps-indoors>
        } @else if (use_cisco_maps) {
            <cisco-map>
                <ng-content />
            </cisco-map>
        } @else {
            <map-renderer
                [src]="src()"
                [zoom]="zoom()"
                (zoomChange)="zoom.set($event)"
                [reset]="reset()"
                [styles]="styles() || metadata()?.styles"
                [features]="features() || metadata()?.features"
                [actions]="actions() || metadata()?.actions"
                [labels]="labels() || metadata()?.labels"
                (mapInfo)="mapInfo.emit($event)"
            >
                <ng-content />
            </map-renderer>
        }
        @if (options()?.controls) {
            <div
                zoom
                class="absolute bottom-16 right-1 flex flex-col divide-y divide-base-200 overflow-hidden rounded border border-base-200 bg-base-100 text-base-content shadow"
            >
                <button
                    icon
                    matRipple
                    [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
                    matTooltipPosition="left"
                    class="rounded-none"
                    (click)="zoom.set(zoom() * 1.1)"
                >
                    <icon>add</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
                    matTooltipPosition="left"
                    class="rounded-none"
                    (click)="zoom.set(zoom() * (10 / 11))"
                >
                    <icon>remove</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
                    matTooltipPosition="left"
                    class="rounded-none"
                    (click)="reset.set(reset() + 1)"
                >
                    <icon>refresh</icon>
                </button>
            </div>
        }
    `, imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MapsIndoorsComponent,
      MapRendererComponent,
      CiscoMapComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InteractiveMapComponent, { className: "InteractiveMapComponent", filePath: "libs/components/src/lib/interactive-map.component.ts", lineNumber: 129 });
})();

// libs/components/src/lib/map-pin.component.ts
var _c013 = ["map-pin", ""];
function MapPinComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.message, " ");
  }
}
function MapPinComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275listener("click", function MapPinComponent_Conditional_2_Template_svg_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.action());
    });
    \u0275\u0275elementStart(1, "g");
    \u0275\u0275element(2, "path", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pointer-events-auto", ctx_r0.action);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("fill", ctx_r0.fill)("stroke", ctx_r0.stroke);
  }
}
var _MapPinComponent = class _MapPinComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this.message = this._details.message;
    this.fill = this._details.fill || "#e53935";
    this.stroke = this._details.stroke || "#fff";
    this.action = this._details.action || null;
  }
  ngOnInit() {
    setTimeout(() => this.show = true, 300);
    setTimeout(() => this.show_message = true, 1e3);
  }
};
_MapPinComponent.\u0275fac = function MapPinComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapPinComponent)();
};
_MapPinComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapPinComponent, selectors: [["", "map-pin", ""]], standalone: false, attrs: _c013, decls: 3, vars: 2, consts: [[1, "-z-1", "absolute", "bottom-1/2", "left-1/2", "flex", "w-[24rem]", "-translate-x-1/2", "flex-col", "items-center"], ["name", "message", 1, "text-gray-700", "m-2", "rounded", "bg-base-100", "p-2", "shadow"], ["name", "pin", "viewBox", "0 0 380 560", 1, "w-8", 3, "pointer-events-auto"], ["name", "pin", "viewBox", "0 0 380 560", 1, "w-8", 3, "click"], ["stroke-width", "25", "d", "M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9\n            C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8\n            c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z"]], template: function MapPinComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, MapPinComponent_Conditional_1_Template, 2, 1, "div", 1);
    \u0275\u0275conditionalCreate(2, MapPinComponent_Conditional_2_Template, 3, 6, ":svg:svg", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.message && ctx.show_message ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show ? 2 : -1);
  }
}, styles: ["\n\n[name=message][_ngcontent-%COMP%], \n[name=pin][_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fade-in-top 1s;\n}\n@keyframes _ngcontent-%COMP%_fade-in-top {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n}\n/*# sourceMappingURL=map-pin.component.css.map */"] });
var MapPinComponent = _MapPinComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapPinComponent, [{
    type: Component,
    args: [{ selector: "[map-pin]", template: `
        <div
            class="-z-1 absolute bottom-1/2 left-1/2 flex w-[24rem] -translate-x-1/2 flex-col items-center"
        >
            @if (message && show_message) {
                <div
                    name="message"
                    class="text-gray-700 m-2 rounded bg-base-100 p-2 shadow"
                >
                    {{ message }}
                </div>
            }
            @if (show) {
                <svg
                    name="pin"
                    viewBox="0 0 380 560"
                    class="w-8"
                    [class.pointer-events-auto]="action"
                    (click)="action()"
                >
                    <g>
                        <path
                            [style.fill]="fill"
                            [style.stroke]="stroke"
                            stroke-width="25"
                            d="M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9
            C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8
            c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z"
                        />
                    </g>
                </svg>
            }
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;a9cdc3eadab8bc3e96e10ae34e252be907dc13bc9405d57b9245726773f7c391;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/map-pin.component.ts */\n[name=message],\n[name=pin] {\n  animation: fade-in-top 1s;\n}\n@keyframes fade-in-top {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n}\n/*# sourceMappingURL=map-pin.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapPinComponent, { className: "MapPinComponent", filePath: "libs/components/src/lib/map-pin.component.ts", lineNumber: 69 });
})();

// libs/components/src/lib/map-radius.component.ts
var _c014 = ["map-radius", ""];
function MapRadiusComponent_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.LAST_UPDATE"), ": ", ctx_r1.last_seen_at, " ");
  }
}
function MapRadiusComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, MapRadiusComponent_Conditional_0_Conditional_2_Conditional_2_Template, 3, 4, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", "-" + ctx_r1.radius / 2 * ctx_r1.zoom + "px");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.message, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.last_seen ? 2 : -1);
  }
}
function MapRadiusComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0, 0);
    \u0275\u0275listener("resize", function MapRadiusComponent_Conditional_0_Template_ng_container_resize_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateRadius());
    }, \u0275\u0275resolveWindow);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275conditionalCreate(2, MapRadiusComponent_Conditional_0_Conditional_2_Template, 3, 4, "div", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r1.stroke)("background-color", ctx_r1.fill + "40")("width", ctx_r1.radius * ctx_r1.zoom + "px")("height", ctx_r1.radius * ctx_r1.zoom + "px");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.message && ctx_r1.show_message ? 2 : -1);
  }
}
var _MapRadiusComponent = class _MapRadiusComponent {
  get last_seen_at() {
    return formatDistanceToNow(this.last_seen * 1e3) + " ago";
  }
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this._el = inject(ElementRef);
    this.zoom = 1;
    this.radius = this._details.radius || 10;
    this.message = this._details.message;
    this.fill = this._details.fill || "#e53935";
    this.stroke = this._details.stroke || "#e53935";
    this.last_seen = this._details.last_seen || 0;
    this._details.zoom$?.subscribe((v) => Math.max(0.5, this.zoom = v || 1));
  }
  ngOnInit() {
    setTimeout(() => this.show = true, 300);
    setTimeout(() => this.show_message = true, 1e3);
  }
  ngAfterViewInit() {
    this.updateRadius();
  }
  updateRadius() {
    const box = this._el.nativeElement.getBoundingClientRect();
    if (!box.width)
      return setTimeout(() => this.updateRadius(), 300);
    this.radius = Math.max(64, (this._details.radius || 10) * (box.width || 10));
  }
};
_MapRadiusComponent.\u0275fac = function MapRadiusComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapRadiusComponent)();
};
_MapRadiusComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapRadiusComponent, selectors: [["", "map-radius", ""]], standalone: false, attrs: _c014, decls: 1, vars: 1, consts: [[3, "resize"], ["radius", "", 1, "center", "rounded-full", "border-4", "border-dashed"], ["message", "", 1, "text-gray-700", "whitespace-no-wrap", "absolute", "top-0", "m-2", "flex", "w-64", "flex-col", "rounded", "bg-base-100", "p-2", "shadow", 3, "top"], ["message", "", 1, "text-gray-700", "whitespace-no-wrap", "absolute", "top-0", "m-2", "flex", "w-64", "flex-col", "rounded", "bg-base-100", "p-2", "shadow"], [1, "text-xs"]], template: function MapRadiusComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MapRadiusComponent_Conditional_0_Template, 3, 9, "ng-container");
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.show && ctx.radius ? 0 : -1);
  }
}, dependencies: [TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n[message][_ngcontent-%COMP%] {\n  transform: translate(-50%, -120%);\n  animation: _ngcontent-%COMP%_fade-in-top 1s;\n}\n@keyframes _ngcontent-%COMP%_fade-in-top {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, -220%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -120%);\n  }\n}\n/*# sourceMappingURL=map-radius.component.css.map */"] });
var MapRadiusComponent = _MapRadiusComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapRadiusComponent, [{
    type: Component,
    args: [{ selector: "[map-radius]", template: `
        @if (show && radius) {
            <ng-container (window:resize)="updateRadius()">
                <div
                    radius
                    class="center rounded-full border-4 border-dashed"
                    [style.border-color]="stroke"
                    [style.background-color]="fill + '40'"
                    [style.width]="radius * zoom + 'px'"
                    [style.height]="radius * zoom + 'px'"
                ></div>
                @if (message && show_message) {
                    <div
                        message
                        [style.top]="'-' + (radius / 2) * zoom + 'px'"
                        class="text-gray-700 whitespace-no-wrap absolute top-0 m-2 flex w-64 flex-col rounded bg-base-100 p-2 shadow"
                    >
                        {{ message }}
                        @if (last_seen) {
                            <span class="text-xs">
                                {{ 'COMMON.LAST_UPDATE' | translate }}:
                                {{ last_seen_at }}
                            </span>
                        }
                    </div>
                }
            </ng-container>
        }
    `, standalone: false, styles: ["/* angular:styles/component:css;4855ae5ebbe5e29c3b096322f2acb33633beeb2b058ec42ea10cb0748328f4b1;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/map-radius.component.ts */\n:host {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n[message] {\n  transform: translate(-50%, -120%);\n  animation: fade-in-top 1s;\n}\n@keyframes fade-in-top {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, -220%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -120%);\n  }\n}\n/*# sourceMappingURL=map-radius.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapRadiusComponent, { className: "MapRadiusComponent", filePath: "libs/components/src/lib/map-radius.component.ts", lineNumber: 73 });
})();

// libs/users/src/lib/location.class.ts
var MapLocation = class {
  constructor(_data = {}) {
    this.type = _data.type || _data.location || "other";
    this.position = _data.position || _data.map_id || _data.asset_id || {
      x: _data.x / _data.map_width || 0,
      y: _data.y / _data.map_height || 0
    };
    this.variance = _data.variance || 0;
    this.last_seen = _data.last_seen || getUnixTime(/* @__PURE__ */ new Date());
    this.level = _data.level;
    this.building = _data.building;
    this.at_location = !!_data.at_location;
    this.coordinates_from = _data.coordinates_from || "top-left";
  }
};

// libs/bookings/src/lib/locker-grid.component.ts
var _c015 = () => [];
function LockerGridComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function LockerGridComponent_For_2_Template_button_click_0_listener() {
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
var _LockerGridComponent = class _LockerGridComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this.show_name = true;
    this.default_status = "busy";
    this.bank_status = {};
    this.selected = "";
    this.clicked = new EventEmitter();
  }
  get columns() {
    let columns = 1;
    for (const locker of this.bank?.lockers || []) {
      const x = locker.position[0] + locker.size[0];
      if (x > columns)
        columns = x;
    }
    return columns;
  }
  color(status) {
    const colours = this._settings.get("app.explore.colors") || {};
    return colours[`lockers-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`];
  }
  status(locker) {
    if (!locker)
      return this.color("not-bookable");
    if (this.selected && locker.id === this.selected) {
      return this.color("pending");
    }
    let value = this.bank_status[locker.id] || "free";
    if (!this.bank_status[locker.id] && !locker?.available) {
      value = this.default_status;
    }
    return this.color(value);
  }
};
_LockerGridComponent.\u0275fac = function LockerGridComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockerGridComponent)();
};
_LockerGridComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerGridComponent, selectors: [["locker-grid"]], inputs: { show_name: "show_name", default_status: "default_status", bank: "bank", bank_status: "bank_status", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 3, vars: 7, consts: [[1, "grid", "flex-1", "gap-2", "p-2"], ["matRipple", "", 1, "relative", "overflow-hidden", "rounded", "border", "border-base-200", 3, "opacity-60", "grid-column-start", "grid-row-start", "grid-column-end", "background-color", "grid-row-end", "matTooltip", "disabled"], ["matRipple", "", 1, "relative", "overflow-hidden", "rounded", "border", "border-base-200", 3, "click", "matTooltip", "disabled"], ["handle", "", 1, "absolute", "left-2", "top-1/2", "h-6", "w-1", "-translate-y-1/2", "rounded", "bg-base-400", "opacity-60"], ["vent", "", 1, "absolute", "left-1/2", "top-2", "h-1", "w-12", "-translate-x-1/2", "rounded-t", "bg-base-400", "opacity-60"], ["vent", "", 1, "absolute", "left-1/2", "top-4", "h-1", "w-12", "-translate-x-1/2", "rounded-t", "bg-base-400", "opacity-60"], ["vent", "", 1, "absolute", "left-1/2", "top-6", "h-1", "w-12", "-translate-x-1/2", "rounded-t", "bg-base-400", "opacity-60"], [1, "absolute", "left-1/2", "top-8", "-translate-x-1/2", "text-[0.6rem]", "font-medium", "text-base-content", "opacity-60"], [1, "absolute", "inset-0", "opacity-10", "hover:bg-base-content"]], template: function LockerGridComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, LockerGridComponent_For_2_Template, 8, 15, "button", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("width", ctx.columns * 2.5 + "rem")("grid-template-columns", "repeat(" + ctx.columns + ", 5rem)")("grid-template-rows", "repeat(" + (ctx.bank == null ? null : ctx.bank.height) + ", 5rem)");
    \u0275\u0275advance();
    \u0275\u0275repeater((ctx.bank == null ? null : ctx.bank.lockers) || \u0275\u0275pureFunction0(6, _c015));
  }
}, dependencies: [MatRippleModule, MatRipple], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=locker-grid.component.css.map */"] });
var LockerGridComponent = _LockerGridComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerGridComponent, [{
    type: Component,
    args: [{ selector: "locker-grid", template: `
        <div
            class="grid flex-1 gap-2 p-2"
            [style.width]="columns * 2.5 + 'rem'"
            [style.grid-template-columns]="'repeat(' + columns + ', 5rem)'"
            [style.grid-template-rows]="'repeat(' + bank?.height + ', 5rem)'"
        >
            @for (locker of bank?.lockers || []; track locker) {
                <button
                    matRipple
                    class="relative overflow-hidden rounded border border-base-200"
                    [class.opacity-60]="selected && selected !== locker.id"
                    [style.grid-column-start]="locker.position[0] + 1"
                    [style.grid-row-start]="locker.position[1] + 1"
                    [style.grid-column-end]="
                        locker.position[0] + (locker.size[0] + 1)
                    "
                    [style.background-color]="status(locker)"
                    [style.grid-row-end]="
                        locker.position[1] + (locker.size[1] + 1)
                    "
                    [matTooltip]="locker.name"
                    [disabled]="
                        locker.bookable === false || locker?.available === false
                    "
                    (click)="clicked.emit(locker)"
                >
                    <div
                        handle
                        class="absolute left-2 top-1/2 h-6 w-1 -translate-y-1/2 rounded bg-base-400 opacity-60"
                    ></div>
                    <div
                        vent
                        class="absolute left-1/2 top-2 h-1 w-12 -translate-x-1/2 rounded-t bg-base-400 opacity-60"
                    ></div>
                    <div
                        vent
                        class="absolute left-1/2 top-4 h-1 w-12 -translate-x-1/2 rounded-t bg-base-400 opacity-60"
                    ></div>
                    <div
                        vent
                        class="absolute left-1/2 top-6 h-1 w-12 -translate-x-1/2 rounded-t bg-base-400 opacity-60"
                    ></div>
                    <div
                        class="absolute left-1/2 top-8 -translate-x-1/2 text-[0.6rem] font-medium text-base-content opacity-60"
                    >
                        {{ locker.name }}
                    </div>
                    <div
                        class="absolute inset-0 opacity-10 hover:bg-base-content"
                    ></div>
                </button>
            }
        </div>
    `, imports: [MatRippleModule], styles: ["/* angular:styles/component:css;32afd79bdb50e1a260a311dcbbe42ad630e05ff005c6bd90901be0d3385e4315;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/locker-grid.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nbutton[disabled] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=locker-grid.component.css.map */\n"] }]
  }], null, { show_name: [{
    type: Input
  }], default_status: [{
    type: Input
  }], bank: [{
    type: Input
  }], bank_status: [{
    type: Input
  }], selected: [{
    type: Input
  }], clicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerGridComponent, { className: "LockerGridComponent", filePath: "libs/bookings/src/lib/locker-grid.component.ts", lineNumber: 78 });
})();

// libs/explore/src/lib/explore-locker-bank-modal.component.ts
var _ExploreLockerBankModalComponent = class _ExploreLockerBankModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.bank = this._data.bank;
    this.lockers = this._data.lockers.reduce((map2, l) => {
      map2[l.id] = "busy";
      return map2;
    }, {});
  }
};
_ExploreLockerBankModalComponent.\u0275fac = function ExploreLockerBankModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreLockerBankModalComponent)();
};
_ExploreLockerBankModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreLockerBankModalComponent, selectors: [["explore-locker-bank-modal"]], decls: 8, vars: 3, consts: [[1, "text-xl", "font-medium"], ["btn", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "overflow-hidden"], [3, "bank", "bank_status"]], template: function ExploreLockerBankModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2", 0);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 1)(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "main", 2);
    \u0275\u0275element(7, "locker-grid", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.bank.name);
    \u0275\u0275advance(5);
    \u0275\u0275property("bank", ctx.bank)("bank_status", ctx.lockers);
  }
}, dependencies: [MatRippleModule, MatRipple, LockerGridComponent, IconComponent], encapsulation: 2 });
var ExploreLockerBankModalComponent = _ExploreLockerBankModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLockerBankModalComponent, [{
    type: Component,
    args: [{ selector: "explore-locker-bank-modal", template: `
        <header>
            <h2 class="text-xl font-medium">{{ bank.name }}</h2>
            <button btn icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[65vh] overflow-hidden">
            <locker-grid [bank]="bank" [bank_status]="lockers"></locker-grid>
        </main>
    `, imports: [MatRippleModule, LockerGridComponent, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreLockerBankModalComponent, { className: "ExploreLockerBankModalComponent", filePath: "libs/explore/src/lib/explore-locker-bank-modal.component.ts", lineNumber: 29 });
})();

// libs/explore/src/lib/explore-locker-bank-info.component.ts
var _c016 = (a0, a1) => ({ used: a0, count: a1 });
function ExploreLockerBankInfoComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "h3", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("pointer-events-none absolute left-0 top-0 rounded bg-base-100 p-4 shadow " + ctx_r1.x_pos + " " + ctx_r1.y_pos);
    \u0275\u0275property("id", ctx_r1.map_id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.bank.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 5, "EXPLORE.LOCKERS_USE", \u0275\u0275pureFunction2(8, _c016, ctx_r1.in_use_count, ctx_r1.bank.lockers.length || 1)), " ");
  }
}
var _ExploreLockerBankInfoComponent = class _ExploreLockerBankInfoComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this._dialog = inject(MatDialog);
    this.bank = this._details.bank;
    this.in_use_count = this._details.in_use_count;
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
  openBankModal() {
    this._dialog.open(ExploreLockerBankModalComponent, {
      data: __spreadValues({}, this._details)
    });
  }
};
_ExploreLockerBankInfoComponent.\u0275fac = function ExploreLockerBankInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreLockerBankInfoComponent)();
};
_ExploreLockerBankInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreLockerBankInfoComponent, selectors: [["explore-locker-bank-info"]], decls: 4, vars: 6, consts: [["desk_tooltip", ""], [1, "pointer-events-auto", "relative", "h-full", "w-full", 3, "click"], ["customTooltip", "", 1, "pointer-events-auto", "relative", "h-full", "w-full", 3, "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 3, "id"], [1, "font-medium"], [1, "whitespace-nowrap", "text-sm"]], template: function ExploreLockerBankInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275listener("click", function ExploreLockerBankInfoComponent_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openBankModal());
    });
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ExploreLockerBankInfoComponent_ng_template_2_Template, 6, 11, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const desk_tooltip_r3 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("content", desk_tooltip_r3)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3e3);
  }
}, dependencies: [TranslatePipe, CustomTooltipComponent], encapsulation: 2 });
var ExploreLockerBankInfoComponent = _ExploreLockerBankInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLockerBankInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-locker-bank-info", template: `
        <button
            class="pointer-events-auto relative h-full w-full"
            (click)="openBankModal()"
        >
            <div
                customTooltip
                [content]="desk_tooltip"
                [backdrop]="false"
                [xPosition]="'center'"
                [yPosition]="'center'"
                [hover]="true"
                [delay]="3000"
                class="pointer-events-auto relative h-full w-full"
            ></div>
        </button>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="map_id"
                [class]="
                    'pointer-events-none absolute left-0 top-0 rounded bg-base-100 p-4 shadow ' +
                    x_pos +
                    ' ' +
                    y_pos
                "
            >
                <h3 class="font-medium">{{ bank.name }}</h3>
                <p class="whitespace-nowrap text-sm">
                    {{
                        'EXPLORE.LOCKERS_USE'
                            | translate
                                : {
                                      used: in_use_count,
                                      count: bank.lockers.length || 1,
                                  }
                    }}
                </p>
            </div></ng-template
        >
    `, imports: [TranslatePipe, CustomTooltipComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreLockerBankInfoComponent, { className: "ExploreLockerBankInfoComponent", filePath: "libs/explore/src/lib/explore-locker-bank-info.component.ts", lineNumber: 64 });
})();

// libs/explore/src/lib/explore-lockers.service.ts
var _ExploreLockersService = class _ExploreLockersService extends AsyncHandler {
  constructor() {
    super();
    this._explore = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._status = new BehaviorSubject([]);
    this._change = new BehaviorSubject(0);
    this.lockers_banks$ = loadLockerBanks(this._org, combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]), () => this._settings.get("app.use_region"));
    this.lockers$ = loadLockers(this._org, combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]), this.lockers_banks$, () => this._settings.get("app.use_region"));
    this.filtered_lockers = combineLatest([
      this._explore.level,
      this.lockers$
    ]).pipe(map(([level, list]) => list.filter((item) => !level || (item.zones || item.bank?.zones || []).includes(level.id))));
    this.filtered_banks = combineLatest([
      this._explore.level,
      this.lockers_banks$
    ]).pipe(map(([level, list]) => list.filter((item) => !level || item.zones.includes(level.id))));
    this.status = combineLatest([
      this._explore.level,
      this._explore.options,
      this._org.active_building
    ]).pipe(map(([lvl, { is_public }]) => {
      if (!lvl || is_public)
        return [];
      const mod = this._org.module("area_management", "AreaManagement");
      if (!mod)
        return of({});
      const binding = mod.binding(lvl.id);
      this.subscription(`lvl-in_use`, binding.listen().subscribe((data) => this._status.next(data?.value?.filter((_) => _.location === "locker") || [])));
      this.subscription("lvl-in_use_bind", binding.bind());
    }));
    this.locker_status = combineLatest([
      this._explore.level,
      this.lockers_banks$,
      this.lockers$,
      this._status
    ]).pipe(map(([lvl, locker_banks, lockers, status]) => {
      if (!lvl)
        return [];
      const features = [];
      const map_status = {};
      const colours = this._settings.get("app.explore.colors") || {};
      const banks = unique(locker_banks.filter((_) => _.level_id === lvl.id).map((_) => _.id));
      for (const bank of banks) {
        const bank_lockers = lockers.filter((_) => _.bank_id === bank);
        let in_use_count = 0;
        for (const locker of bank_lockers) {
          const in_use = status.find((_) => _.locker_id === locker.id && _.allocated);
          in_use_count += in_use ? 1 : 0;
        }
        const bank_info = locker_banks.find((_) => _.id === bank);
        features.push({
          location: bank_info.map_id,
          content: ExploreLockerBankInfoComponent,
          full_size: true,
          no_scale: true,
          z_index: 20,
          data: {
            bank: bank_info,
            lockers,
            in_use_count,
            locker_count: bank_lockers.length,
            system: this._org.binding("area_management")
          }
        });
        const in_use_percent = in_use_count / bank_lockers.length;
        const value = in_use_percent > 0.8 ? "busy" : in_use_percent > 0.3 ? "pending" : "free";
        map_status[`#${bank_info.map_id}`] = {
          fill: colours[`lockers-${value}`] || colours[`${value}`] || DEFAULT_COLOURS[`${value}`]
        };
      }
      this._explore.setStyles("lockers", map_status);
      this._explore.setFeatures("lockers", features);
    }));
    this.subscription("status", this.status.subscribe());
    this.subscription("locker_status", this.locker_status.subscribe());
  }
};
_ExploreLockersService.\u0275fac = function ExploreLockersService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreLockersService)();
};
_ExploreLockersService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreLockersService, factory: _ExploreLockersService.\u0275fac, providedIn: "root" });
var ExploreLockersService = _ExploreLockersService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLockersService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/bookings/src/lib/parking.service.ts
var _ParkingService = class _ParkingService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
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
      return forkJoin(levels.map((lvl) => hu(lvl.id, "parking-spaces").pipe(map((d) => (d.details instanceof Array ? d.details : []).map((s) => __spreadProps(__spreadValues({}, s), {
        zone_id: lvl.id
      }))))));
    }), map((list) => flatten(list)), tap(() => this._loading.next(this._loading.getValue().filter((_) => _ !== "spaces"))), shareReplay(1));
    this.users = combineLatest([this._org.active_building]).pipe(filter(([bld]) => !!bld?.id), switchMap(([bld]) => {
      this._loading.next([...this._loading.getValue(), "users"]);
      return hu(bld.id, "parking-users");
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
};
_ParkingService.\u0275fac = function ParkingService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingService)();
};
_ParkingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParkingService, factory: _ParkingService.\u0275fac, providedIn: "root" });
var ParkingService = _ParkingService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-parking-info.component.ts
function ExploreParkingInfoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "EXPLORE.PARKING_PLATE_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.plate_number || "PLATE NO 1", " ");
  }
}
var _ExploreParkingInfoComponent = class _ExploreParkingInfoComponent {
  constructor() {
    this._data = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this._settings = inject(SettingsService);
    this.status = this._data.assigned_to === this._data.user && this._data.user ? "reserved" : this._data.status;
    this.user = this._data.user;
    this.name = this._data.name;
    this.map_id = this._data.map_id;
    this.plate_number = this._data.plate_number;
  }
  get is_concierge() {
    return this._settings.app_name.toLowerCase().includes("concierge");
  }
};
_ExploreParkingInfoComponent.\u0275fac = function ExploreParkingInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreParkingInfoComponent)();
};
_ExploreParkingInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreParkingInfoComponent, selectors: [["explore-parking-info"]], decls: 9, vars: 15, consts: [[1, "absolute", "left-1/2", "top-1/2", "rounded-lg", "!rounded-tl-none", "bg-base-300", "p-2", "text-left", "shadow"], [1, "triangle", "absolute", "left-0.5", "top-0.5"], [1, "flex", "space-x-2"], [1, "flex", "min-w-24", "flex-col", "pl-1", "leading-tight"], [1, "whitespace-nowrap"], [1, "text-sm", "font-medium", "capitalize"], [1, "relative", "flex", "h-full", "flex-col", "rounded", "bg-base-100", "px-2", "leading-tight", "text-base-content", "shadow"], [1, "w-full", "whitespace-nowrap", "pt-1", "text-center", "text-[0.625rem]", "font-medium"], [1, "w-full", "pb-1", "text-center", "font-mono", "uppercase"]], template: function ExploreParkingInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, ExploreParkingInfoComponent_Conditional_8_Template, 6, 4, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("!bg-error", ctx.status === "busy")("!text-error-content", ctx.status === "busy")("!bg-warning", ctx.status === "reserved")("!text-warning-content", ctx.status === "reserved")("!bg-success", ctx.status === "free")("!text-success-content", ctx.status === "free");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.status, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.is_concierge && ctx.plate_number ? 8 : -1);
  }
}, dependencies: [TranslatePipe], styles: ["\n\n.triangle[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=explore-parking-info.component.css.map */"] });
var ExploreParkingInfoComponent = _ExploreParkingInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreParkingInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-parking-info", template: `
        <div
            class="absolute left-1/2 top-1/2 rounded-lg !rounded-tl-none bg-base-300 p-2 text-left shadow"
            [class.!bg-error]="status === 'busy'"
            [class.!text-error-content]="status === 'busy'"
            [class.!bg-warning]="status === 'reserved'"
            [class.!text-warning-content]="status === 'reserved'"
            [class.!bg-success]="status === 'free'"
            [class.!text-success-content]="status === 'free'"
        >
            <div class="triangle absolute left-0.5 top-0.5"></div>
            <div class="flex space-x-2">
                <div class="flex min-w-24 flex-col pl-1 leading-tight">
                    <div class="whitespace-nowrap">{{ name }}</div>
                    <div class="text-sm font-medium capitalize">
                        {{ status }}
                    </div>
                </div>
                @if (is_concierge && plate_number) {
                    <div
                        class="relative flex h-full flex-col rounded bg-base-100 px-2 leading-tight text-base-content shadow"
                    >
                        <div
                            class="w-full whitespace-nowrap pt-1 text-center text-[0.625rem] font-medium"
                        >
                            {{ 'EXPLORE.PARKING_PLATE_NUMBER' | translate }}
                        </div>
                        <div
                            class="w-full pb-1 text-center font-mono uppercase"
                        >
                            {{ plate_number || 'PLATE NO 1' }}
                        </div>
                    </div>
                }
            </div>
        </div>
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;186a95b4c185bcd2753f7ef9d30513d06855e35c348eb8e66dff829f779ea78f;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-parking-info.component.ts */\n.triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=explore-parking-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreParkingInfoComponent, { className: "ExploreParkingInfoComponent", filePath: "libs/explore/src/lib/explore-parking-info.component.ts", lineNumber: 66 });
})();

// libs/explore/src/lib/explore-parking.service.ts
var _ExploreParkingService = class _ExploreParkingService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._state = inject(ExploreStateService);
    this._settings = inject(SettingsService);
    this._bookings = inject(BookingFormService);
    this._parking = inject(ParkingService);
    this._dialog = inject(MatDialog);
    this._options = new BehaviorSubject({});
    this._poll = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.on_book = null;
    this.levels = this._org.active_levels.pipe(map((l) => l.filter((_) => _.tags.includes("parking"))));
    this.booking_rules = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => hu(bld.id, `parking_booking_rules`).pipe(catchError(() => of({ details: [] })))), map((_) => _?.details instanceof Array ? _.details : []), shareReplay(1));
    this.events = combineLatest([
      this._org.active_building,
      this._state.options,
      this._options,
      this._poll
    ]).pipe(debounceTime(300), switchMap(([bld, { is_public }, opts]) => is_public ? of([]) : queryBookings({
      period_start: getUnixTime(startOfMinute(opts.date || Date.now())),
      period_end: getUnixTime(endOfMinute(opts.date || Date.now())),
      type: "parking",
      zones: this._settings.get("app.use_region") ? bld?.parent_id : bld?.id,
      rejected: false
    })), shareReplay(1));
    this.user_events = combineLatest([this._options]).pipe(switchMap(([_]) => queryBookings({
      period_start: getUnixTime(startOfDay(_.date || Date.now())),
      period_end: getUnixTime(endOfDay(_.date || Date.now())),
      type: "parking",
      email: _?.user || currentUser()?.email
    })), shareReplay(1));
    this.spaces = this.levels.pipe(switchMap((_) => forkJoin(_.map((l) => hu(l.id, "parking-spaces").pipe(map((d) => (d.details instanceof Array ? d.details : []).map((s) => __spreadProps(__spreadValues({}, s), { zone_id: l.id }))))))), map((_) => flatten(_)), shareReplay(1));
    this.active_spaces = combineLatest([
      this.spaces,
      this._state.level
    ]).pipe(map(([spaces, level]) => spaces.filter((_) => _.zone_id === level.id)));
    this._users = {};
    this._plate_numbers = {};
    this.available_spaces = combineLatest([
      this.events,
      this.active_spaces,
      this._parking.users,
      this.booking_rules,
      this._options
    ]).pipe(map(([events, spaces, users, rules, { date }]) => {
      const available = spaces.filter((space) => {
        const event = events.find((e) => e.asset_id === space.id && !e.rejected);
        const level = this._org.levelWithID([space.zone_id]);
        const assigned = `${event?.user_email || space.assigned_to || ""}`.toLowerCase();
        const user = users.find((u) => u.email.toLowerCase() === assigned.toLowerCase());
        const is_restricted = rulesForResource({
          date: date || Date.now(),
          duration: 60,
          host: currentUser(),
          resource: {
            id: space.id,
            zones: [level.parent_id, level.id]
          }
        }, rules)?.hidden;
        this._users[space.id] = assigned;
        this._plate_numbers[space.id] = event?.extension_data?.plate_number || user?.plate_number || void 0;
        return !event && !is_restricted;
      });
      this._updateParkingSpaces(spaces, available);
      return available;
    }));
    this.subscription("spaces", this.available_spaces.subscribe());
    this.setOptions({
      enable_booking: this._settings.get("app.parking.enable_maps") !== false
    });
  }
  startPolling() {
    this.interval("poll", () => this._poll.next(Date.now()), 10 * 1e3);
    this._poll.next(Date.now());
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  _updateParkingSpaces(spaces, available) {
    return __async(this, null, function* () {
      const styles = {};
      const features = [];
      const actions = [];
      const colours = this._settings.get("app.explore.colors") || {};
      let options = this._options.getValue();
      const assigned_space = yield nextValueFrom(this._parking.assigned_space);
      const deny_parking_access = yield nextValueFrom(this._parking.deny_parking_access);
      const booked_space = yield nextValueFrom(this._parking.booked_space);
      for (const space of spaces) {
        const can_book = !!available.find((_) => _.id === space.id);
        const is_workplace = this._settings.app_name.toLowerCase().includes("workplace") || this._settings.app_name.toLowerCase().includes("staff");
        const is_assigned = is_workplace ? false : !!space.assigned_to;
        const id = space.map_id || space.id;
        const status = is_assigned ? can_book ? "pending" : "busy" : can_book ? "free" : "busy";
        styles[`#${id}`] = {
          fill: colours[`parking-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`],
          opacity: 0.6
        };
        features.push({
          location: `${id}`,
          content: ExploreParkingInfoComponent,
          z_index: 20,
          hover: true,
          data: __spreadProps(__spreadValues({}, space), {
            user: this._users[space.id],
            plate_number: this._plate_numbers[space.id],
            status: status === "pending" && is_assigned ? "reserved" : status
          })
        });
        if (!can_book)
          continue;
        const book_fn = () => __async(this, null, function* () {
          if (this.on_book) {
            yield this.on_book(space);
            this._poll.next(Date.now());
            return;
          }
          if (deny_parking_access) {
            return notifyError(i18n("EXPLORE.PARKING_PERMISSIONS_ERROR", {
              name: space.zone?.display_name || space.zone?.name
            }));
          }
          console.log("Booked Space:", booked_space);
          if (assigned_space && booked_space) {
            return notifyError(i18n("EXPLORE.PARKING_ASSIGNED_ERROR", {
              name: space.name || space.id
            }));
          }
          if (booked_space) {
            return notifyError(i18n("EXPLORE.PARKING_EXISTING_ERROR"));
          }
          if (status !== "free") {
            return notifyError(i18n("EXPLORE.PARKING_AVAILABLE_ERROR", {
              name: space.name || "Parking Space"
            }));
          }
          if (space.groups?.length && !space.groups.find((_) => currentUser().groups.includes(_))) {
            return notifyError(i18n("EXPLORE.PARKING_GROUP_ERROR", {
              name: space.name
            }));
          }
          this._bookings.newForm("parking");
          this._bookings.setOptions({ type: "parking" });
          options = this._options.getValue();
          let user = options.host || currentUser();
          const user_email = user?.email;
          const zone = this._org.levelWithID([
            space.zone_id || space.zone
          ]) || this._state.active_level;
          const date = !options.date || isSameDay(options.date, Date.now()) ? startOfMinute(Date.now()).valueOf() : setHours(options.date, 8).valueOf();
          this._bookings.form.patchValue({
            resources: [space],
            asset_id: space.id,
            asset_name: space.name,
            date,
            duration: 11 * 60,
            all_day: true,
            map_id: space?.map_id || space?.id,
            description: space.name,
            user,
            user_email,
            booking_type: "parking",
            zones: [
              this._org.organisation.id,
              this._org.region?.id,
              zone.parent_id,
              zone.id
            ]
          });
          yield this._bookings.confirmPost().catch((e) => {
            if (e === "User cancelled")
              throw e;
            notifyError(i18n("EXPLORE.PARKING_BOOKING_ERROR", {
              name: space.name || space.id,
              error: e.message || e.error || e
            }));
            throw e;
          });
          notifySuccess(i18n("EXPLORE.PARKING_BOOKING_SUCCESS", {
            name: space.name || space.id
          }));
          this.timeout("poll", () => this._poll.next(Date.now()), 1e3);
        });
        actions.push({
          id,
          action: "click",
          priority: 10,
          callback: book_fn
        });
      }
      this._state.setActions("parking", options.enable_booking ? actions : []);
      this._state.setStyles("parking", styles);
      this._state.setFeatures("parking", features);
    });
  }
  _setBookingTime(date, duration, host = false, resource = null) {
    return __async(this, null, function* () {
      let user = null;
      if (!!this._settings.get("app.parking.allow_time_changes")) {
        const until = endOfDay(addDays(Date.now(), this._settings.get("app.parking.available_period") || 90));
        const ref = this._dialog.open(SetDatetimeModalComponent, {
          data: { date, duration, until, host, resource }
        });
        const details = yield ref.afterClosed().toPromise();
        if (!details)
          throw "User cancelled";
        date = details.date;
        duration = details.duration;
        user = details.user;
      }
      return { date, duration, user };
    });
  }
};
_ExploreParkingService.\u0275fac = function ExploreParkingService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreParkingService)();
};
_ExploreParkingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreParkingService, factory: _ExploreParkingService.\u0275fac });
var ExploreParkingService = _ExploreParkingService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreParkingService, [{
    type: Injectable
  }], () => [], null);
})();

// libs/components/src/lib/map-canvas.component.ts
var _c017 = ["canvas"];
var _c15 = ["map-canvas", ""];
var _MapCanvasComponent = class _MapCanvasComponent extends AsyncHandler {
  get ratioed_height() {
    return +(this.width * this.ratio).toFixed(2);
  }
  constructor() {
    super();
    this._data = inject(MAP_FEATURE_DATA);
    this.zoom = 1;
    this.ratio = 1;
    this.svg_ratio = 1;
    this.width = 1e4;
    this.canvas_element = viewChild("canvas");
  }
  ngOnInit() {
    this.subscription("state", combineLatest([
      this._data.ratio$,
      this._data.zoom$,
      this._data.svg_ratio$
    ]).subscribe(([ratio, zoom, sr]) => this._handleMapChange(ratio, zoom, sr)));
    this.subscription("polygons", this._data.polygons$.subscribe((list) => this._handleStateChange(list)));
  }
  _handleMapChange(ratio, zoom, svg_ratio) {
    return __async(this, null, function* () {
      const old_ratio = this.ratio;
      this.zoom = zoom;
      this.ratio = ratio;
      this.svg_ratio = svg_ratio;
      const width = this.width / 10;
      const height = this.width * this.ratio / 10;
      if (old_ratio === ratio)
        return;
      const canvas = this.canvas_element().nativeElement;
      canvas.width = width;
      canvas.height = height;
      const polygons = yield nextValueFrom(this._data.polygons$);
      this._handleStateChange(polygons);
    });
  }
  _handleStateChange(polygon_list) {
    const canvas = this.canvas_element().nativeElement;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    polygon_list.forEach((poly) => this._drawPolygon(poly));
  }
  _drawPolygon(polygon) {
    const points = polygon.points;
    if (!points?.length)
      return;
    const canvas = this.canvas_element().nativeElement;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    ctx.fillStyle = polygon.color + "80";
    ctx.beginPath();
    ctx.moveTo(points[0][0] * width, points[0][1] * height);
    points.forEach(([x, y]) => ctx.lineTo(x * width, y * height));
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = shiftColorTowards(polygon.color, "#888888", 0.5);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(points[0][0] * width, points[0][1] * height);
    points.forEach(([x, y]) => ctx.lineTo(x * width, y * height));
    ctx.closePath();
    ctx.stroke();
    if (this._data.draw_points !== false) {
      ctx.fillStyle = "#fff";
      ctx.strokeStyle = polygon.color;
      ctx.lineWidth = 4;
      points.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x * width, y * height, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    }
    if (this._data.draw_labels !== false) {
      const center = points.reduce((acc, [x, y]) => [acc[0] + x, acc[1] + y], [0, 0]);
      center[0] /= points.length;
      center[1] /= points.length;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#FFF";
      ctx.font = "32px sans-serif";
      ctx.fillText(polygon.name, center[0] * width + 1, center[1] * height + 2);
      ctx.fillStyle = "#000";
      ctx.fillText(polygon.name, center[0] * width, center[1] * height);
    }
  }
};
_MapCanvasComponent.\u0275fac = function MapCanvasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapCanvasComponent)();
};
_MapCanvasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapCanvasComponent, selectors: [["", "map-canvas", ""]], viewQuery: function MapCanvasComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.canvas_element, _c017, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c15, decls: 2, vars: 4, consts: [["canvas", ""], [1, "absolute", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2"]], template: function MapCanvasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "canvas", 1, 0);
  }
  if (rf & 2) {
    \u0275\u0275styleProp("width", ctx.width * ctx.svg_ratio * ctx.zoom + "%")("height", ctx.width * ctx.svg_ratio * ctx.ratio * ctx.zoom + "%");
  }
}, encapsulation: 2 });
var MapCanvasComponent = _MapCanvasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapCanvasComponent, [{
    type: Component,
    args: [{ selector: "[map-canvas]", template: `
        <canvas
            #canvas
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            [style.width]="width * svg_ratio * zoom + '%'"
            [style.height]="width * svg_ratio * ratio * zoom + '%'"
        ></canvas>
    `, standalone: false }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapCanvasComponent, { className: "MapCanvasComponent", filePath: "libs/components/src/lib/map-canvas.component.ts", lineNumber: 49 });
})();

// libs/explore/src/lib/explore-sensor-info.component.ts
function ExploreSensorInfoComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "icon");
    \u0275\u0275text(2, "thermostat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.temp, "\u02DA", ctx_r0.temp_unit);
  }
}
function ExploreSensorInfoComponent_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "icon");
    \u0275\u0275text(2, "opacity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.humidity, "%");
  }
}
function ExploreSensorInfoComponent_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "icon", 6);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd()();
  }
}
function ExploreSensorInfoComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, ExploreSensorInfoComponent_ng_template_3_Conditional_1_Template, 5, 2, "div", 3);
    \u0275\u0275conditionalCreate(2, ExploreSensorInfoComponent_ng_template_3_Conditional_2_Template, 5, 1, "div", 3);
    \u0275\u0275conditionalCreate(3, ExploreSensorInfoComponent_ng_template_3_Conditional_3_Template, 3, 0, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.temp ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.humidity ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.temp > 82 ? 3 : -1);
  }
}
var shown_id = "";
var _ExploreSensorInfoComponent = class _ExploreSensorInfoComponent extends AsyncHandler {
  get show() {
    return shown_id === this._details.id;
  }
  set show(value) {
    this.timeout("show", () => shown_id = value ? this._details.id : "");
  }
  constructor() {
    super();
    this._details = inject(MAP_FEATURE_DATA);
    this.temp = this._details.temp || 0;
    this.temp_unit = this._details.temp_unit || "C";
    this.humidity = this._details.humidity || 0;
  }
};
_ExploreSensorInfoComponent.\u0275fac = function ExploreSensorInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreSensorInfoComponent)();
};
_ExploreSensorInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSensorInfoComponent, selectors: [["explore-sensor-info"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 1, consts: [["stats", ""], ["icon", "", "matRipple", "", "customTooltip", "", "yPosition", "center", "xPosition", "center", 1, "pointer-events-auto", "absolute", "left-1/2", "top-1/2", "h-7", "w-7", "min-w-0", "-translate-x-1/2", "-translate-y-1/2", "bg-base-100", "shadow", 3, "content"], [1, "absolute", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2", "text-xl"], [1, "flex", "items-center", "space-x-2", "whitespace-nowrap", "pr-2"], [1, "absolute", "right-0", "top-0", "-translate-y-1/2", "translate-x-1/2", "rounded-full", "border", "border-base-200", "bg-base-100"], [1, ""], [1, "text-xl", "text-error"]], template: function ExploreSensorInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 1)(1, "icon");
    \u0275\u0275text(2, " visibility ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ExploreSensorInfoComponent_ng_template_3_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const stats_r2 = \u0275\u0275reference(4);
    \u0275\u0275property("content", stats_r2);
  }
}, dependencies: [CustomTooltipComponent, IconComponent], encapsulation: 2 });
var ExploreSensorInfoComponent = _ExploreSensorInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSensorInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-sensor-info", template: `
        <button
            icon
            matRipple
            customTooltip
            [content]="stats"
            yPosition="center"
            xPosition="center"
            class="pointer-events-auto absolute left-1/2 top-1/2 h-7 w-7 min-w-0 -translate-x-1/2 -translate-y-1/2 bg-base-100 shadow"
        >
            <icon> visibility </icon>
        </button>
        <ng-template #stats>
            <div
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-base-200 bg-base-100 p-2 text-xl"
            >
                @if (temp) {
                    <div
                        class="flex items-center space-x-2 whitespace-nowrap pr-2"
                    >
                        <icon>thermostat</icon>
                        <div class="">{{ temp }}\u02DA{{ temp_unit }}</div>
                    </div>
                }
                @if (humidity) {
                    <div
                        class="flex items-center space-x-2 whitespace-nowrap pr-2"
                    >
                        <icon>opacity</icon>
                        <div class="">{{ humidity }}%</div>
                    </div>
                }
                @if (temp > 82) {
                    <div
                        class="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rounded-full border border-base-200 bg-base-100"
                    >
                        <icon class="text-xl text-error">error</icon>
                    </div>
                }
            </div>
        </ng-template>
    `, imports: [CustomTooltipComponent, IconComponent] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSensorInfoComponent, { className: "ExploreSensorInfoComponent", filePath: "libs/explore/src/lib/explore-sensor-info.component.ts", lineNumber: 63 });
})();

// libs/explore/src/lib/explore-zones.service.ts
var _ExploreZonesService = class _ExploreZonesService extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._area_list = [];
    this._statuses = {};
    this._count_key = {};
    this._location = {};
    this._label_location = {};
    this._capacity = {};
    this._draw = {};
    this._points = {};
    this._features = [];
    this._polygons$ = new BehaviorSubject([]);
    this._bind = combineLatest([
      this._org.active_building,
      this._state.level,
      this._state.options
    ]).pipe(filter(([bld, lvl, { is_public }]) => !!bld && !!lvl && !is_public), map(([_, lvl]) => {
      this._statuses = {};
      const system_id = this._org.binding("area_management");
      const mod = this._org.module("area_management", "AreaManagement");
      if (!mod)
        return;
      const bind_areas = mod.binding(`${lvl.id}:areas`);
      const bind_zone = mod.binding(`${lvl.id}`);
      const zones = combineLatest([
        bind_areas.listen(),
        bind_zone.listen()
      ]).pipe(debounceTime(100), map(([a, z]) => [
        ...a?.value || [],
        ...(z?.value || []).filter((_2) => _2.location === "area")
      ]));
      this.subscription(`zones-status`, zones.subscribe((l) => this.parseData(l)));
      this.subscription("binding", bind_areas.bind());
      this.subscription("zone-binding", bind_zone.bind());
    }));
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      const zone_metadata = yield Promise.all(this._org.levels.map((bld) => hu(bld.id, "map_regions").toPromise()));
      this._area_list = [];
      for (const zone of zone_metadata) {
        const areas = zone?.details?.areas;
        if (!areas)
          continue;
        for (const area of areas) {
          const { capacity, hide_label, label_location, draw_polygon, area_count_key } = area.properties || {};
          const { coordinates } = area.geometry || {};
          this._capacity[area.id] = capacity || 100;
          this._count_key[area.id] = area_count_key || "";
          this._location[area.id] = coordinates?.length ? getCenterPoint(coordinates) : null;
          this._label_location[area.id] = hide_label === false ? label_location || this._location[area.id] : null;
          this._draw[area.id] = !!draw_polygon || this._settings.get("app.explore.use_zone_polygons");
          this._points[area.id] = coordinates || [];
          this._area_list.push(area.map_id || area.id);
        }
      }
      this._state.setFeatures("zones-canvas", [
        {
          track_id: "zones-canvas",
          location: { x: 0.5, y: 0.5 },
          content: MapCanvasComponent,
          data: {
            polygons$: this._polygons$,
            draw_points: false,
            draw_labels: false
          }
        }
      ]);
      this.updateStatus();
      this.subscription("bind", this._bind.subscribe());
    });
  }
  parseData(value = []) {
    const labels = [];
    const features = [];
    const temp_unit = this._settings.get("app.use_imperial_units") ? "F" : "C";
    for (const zone of value) {
      const id = zone.map_id || zone.area_id;
      const capacity = zone.capacity || this._capacity[id] || 100;
      const count = zone[this._count_key[id] || this._settings.get("app.explore.area_count_key") || "count"] || 0;
      const filled = count / capacity;
      this._statuses[id] = zone.at_location ? "busy" : filled < 0.4 ? "free" : filled < 0.75 ? "pending" : "busy";
      if (!this._location[id])
        continue;
      let content = "";
      if (zone.count) {
        content += i18n("EXPLORE.DEVICE_COUNT", { count: zone.count }) + "\n";
      }
      if (zone.temperature)
        content += i18n("EXPLORE.SENSORS_TEMP", {
          value: `${zone.temperature} \xB0${temp_unit}
`
        });
      if (zone.people_count > 0)
        content += i18n("EXPLORE.SENSORS_PEOPLE", {
          count: `${zone.people_count_sum}
`
        });
      if (zone.humidity)
        content += i18n("EXPLORE.SENSORS_HUMIDITY", {
          value: `${zone.humidity}
`
        });
      if (zone.queue_size)
        content += i18n("EXPLORE.SENSORS_QUEUE", {
          value: `${zone.humidity}
`
        });
      if (zone.counter)
        content += i18n("EXPLORE.SENSORS_COUNT", {
          value: `${zone.humidity}
`
        });
      if (this._label_location[id] && !this._settings.get("app.explore.show_zone_labels")) {
        labels.push({
          location: this._label_location[id],
          content,
          z_index: 100
        });
      }
      if (this._settings.get("app.explore.show_zone_sensor_info") && (zone.temperature || zone.humidity)) {
        features.push({
          track_id: `sensors:${id}`,
          location: this._location[id],
          content: ExploreSensorInfoComponent,
          data: {
            id,
            temp: zone.temperature || 10,
            temp_unit,
            humidity: zone.humidity || 10
          },
          z_index: 98
        });
      }
    }
    this._features = features;
    this._state.setLabels("zones", labels);
    this.updateStatus();
  }
  updateStatus() {
    const style_map = {};
    const features = [];
    const colours = this._settings.get("app.explore.colors") || {};
    const polygons = [];
    for (const zone_id in this._statuses) {
      const colour = colours[`zone-${this._statuses[zone_id]}`] || colours[`${this._statuses[zone_id]}`] || DEFAULT_COLOURS[`${this._statuses[zone_id]}`];
      if (this._draw[zone_id]) {
        polygons.push({
          name: zone_id,
          points: this._points[zone_id],
          color: colour
        });
      } else {
        if (this._state.has("style", zone_id, ["zones", "zones-styles"])) {
          features.push({
            location: zone_id,
            content: ExploreIconComponent,
            data: {
              icon: { content: "pin_drop" }
            },
            full_size: true,
            z_index: 98
          });
        } else {
          style_map[`#${zone_id}`] = {
            fill: colour,
            opacity: 0.6
          };
        }
      }
    }
    this._polygons$.next(polygons);
    this._state.setFeatures("zones", [...features, ...this._features]);
    this._state.setStyles("zones-styles", style_map);
  }
};
_ExploreZonesService.\u0275fac = function ExploreZonesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreZonesService)();
};
_ExploreZonesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreZonesService, factory: _ExploreZonesService.\u0275fac });
var ExploreZonesService = _ExploreZonesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreZonesService, [{
    type: Injectable
  }], () => [], null);
})();
function getCenterPoint(points) {
  const diff = (points || []).reduce((m, [x, y]) => ({
    x_min: x < m.x_min ? x : m.x_min,
    x_max: x > m.x_max ? x : m.x_max,
    y_min: y < m.y_min ? y : m.y_min,
    y_max: y > m.y_max ? y : m.y_max
  }), {
    x_min: 100,
    x_max: -100,
    y_min: 100,
    y_max: -100
  });
  return {
    x: diff.x_min + (diff.x_max - diff.x_min) / 2,
    y: diff.y_min + (diff.y_max - diff.y_min) / 2
  };
}

// libs/explore/src/lib/explore-map-view.component.ts
var _c018 = () => ({ controls: true });
function ExploreMapViewComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-slide-toggle", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function ExploreMapViewComponent_Conditional_6_Conditional_2_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleZones($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", !((tmp_2_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.options)) == null ? null : tmp_2_0.disable == null ? null : tmp_2_0.disable.includes("zones")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "EXPLORE.AREAS"));
  }
}
function ExploreMapViewComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "explore-map-controls");
    \u0275\u0275conditionalCreate(2, ExploreMapViewComponent_Conditional_6_Conditional_2_Template, 6, 6, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.hide_zones ? 2 : -1);
  }
}
function ExploreMapViewComponent_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pair_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", pair_r3[1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pair_r3[0]);
  }
}
function ExploreMapViewComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h3", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ExploreMapViewComponent_Conditional_8_For_5_Template, 4, 3, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "EXPLORE.LEGEND"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.legend);
  }
}
function ExploreMapViewComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ExploreMapViewComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearLocate());
    });
    \u0275\u0275text(1, " Clear Pin ");
    \u0275\u0275elementEnd();
  }
}
var EMPTY2 = [];
var _ExploreMapViewComponent = class _ExploreMapViewComponent extends AsyncHandler {
  toggleZones(enabled) {
    return __async(this, null, function* () {
      const options = yield nextValueFrom(this.options);
      const disable = !enabled ? unique([...options?.disable || [], "zones", "devices"]) : options?.disable?.filter((_) => _ !== "zones" && _ !== "devices") || [];
      this.setOptions({ disable });
    });
  }
  get show_legend() {
    return !!this._settings.get("app.explore.show_legend");
  }
  get hide_zones() {
    return !!this._settings.get("app.explore.hide_zones");
  }
  get legend() {
    return this._settings.get("app.explore.legend") || EMPTY2;
  }
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._s = inject(ExploreSpacesService);
    this._desks = inject(ExploreDesksService);
    this._zones = inject(ExploreZonesService);
    this._parking = inject(ExploreParkingService);
    this._lockers = inject(ExploreLockersService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._spaces = inject(SpacesService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._space_pipe = inject(SpacePipe);
    this._maps = inject(MapsPeopleService);
    this.url = this._state.map_url;
    this.styles = this._state.map_styles;
    this.positions = this._state.map_positions;
    this.features = this._state.map_features;
    this.actions = this._state.map_actions;
    this.labels = this._state.map_labels;
    this.options = this._state.options;
    this.message = this._state.message;
    this.setOptions = (o) => this._state.setOptions(o);
    this.locate = "";
    this.map_info = {};
    this.use_mapsindoors$ = this._maps.available$;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this._state.reset();
      yield this._spaces.initialised.pipe(first((_) => _)).toPromise();
      this.toggleZones(false);
      this.subscription("parking_poll", this._parking.startPolling());
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => __async(this, null, function* () {
        if (params.has("level") || params.has("zone")) {
          this._state.setLevel(params.get("level") || params.get("zone"));
        }
        this._state.setFeatures("_located", []);
        if (params.has("space")) {
          this.locateSpace(params.get("space"));
        } else if (params.has("user")) {
          let user = this._settings.value("last_search");
          if (!user || params.get("user") !== user.email) {
            user = null;
            user = yield showStaff(params.get("user")).toPromise();
          }
          if (!user)
            return notifyError(i18n("EXPLORE.LOCATE_USER_FAILED", {
              name: params.get("user")
            }));
          this.locateUser(user instanceof Array ? user[0] : user).catch((e) => {
            notifyError(e);
            this._router.navigate([], {
              relativeTo: this._route,
              queryParams: { user: "" },
              queryParamsHandling: "preserve"
            });
          });
        } else if (params.has("locate")) {
          this._locateFeature(params.get("locate"), params.get("name"));
        } else {
          this.timeout("update_location", () => {
            this._state.setFeatures("_located", []);
          });
        }
      })));
    });
  }
  updateZoom(zoom) {
    this._state.setPositions(zoom, this._state.positions.center);
  }
  updateCenter(center) {
    this._state.setPositions(this._state.positions.zoom, center);
  }
  clearLocate() {
    this.locate = "";
    this._state.setFeatures("_located", []);
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        user: void 0,
        space: void 0,
        locate: void 0,
        name: void 0
      },
      queryParamsHandling: "merge"
    });
  }
  _locateFeature(id, name = "") {
    const has_coordinates = id.includes(",");
    const parts = id.split(",");
    const feature = {
      track_id: `locate-${id}`,
      location: has_coordinates ? { x: parseFloat(parts[0]), y: parseFloat(parts[1]) } : id,
      content: MapPinComponent,
      z_index: 99,
      data: { message: name }
    };
    this.timeout("update_location", () => {
      this.locate = id;
      this._state.setFeatures("_located", [feature]);
    });
  }
  locateSpace(id) {
    return __async(this, null, function* () {
      const space = yield this._space_pipe.transform(id);
      if (!space)
        return notifyError(i18n("EXPLORE.LOCATE_SPACE_DETAILS_FAILED"));
      this._state.setLevel(this._org.levelWithID(space.zones)?.id);
      const feature = {
        track_id: `locate-${space.id}`,
        location: space.map_id,
        content: MapPinComponent,
        z_index: 99,
        data: {
          message: `${space.display_name || space.name} is here`
        }
      };
      this.timeout("update_location", () => {
        this.locate = id;
        this._state.setFeatures("_located", [feature]);
      });
    });
  }
  locateUser(user) {
    return __async(this, null, function* () {
      const binding = this._org.binding("location_services");
      const mod = this._org.module("location_services", "LocationServices");
      if (!mod)
        throw i18n("EXPLORE.LOCATE_SERVICE_UNAVAILABLE");
      const priority = binding?.priority || [];
      const locations = (yield mod.execute("locate_user", [
        user.email,
        user.username || user.id
      ])).map((i) => new MapLocation(i));
      locations.sort((a, b) => (priority.includes(a.type) ? priority.indexOf(a.type) : 999) - (priority.includes(b.type) ? priority.indexOf(b.type) : 999));
      if (!locations?.length)
        throw i18n("EXPLORE.LOCATE_USER_NOT_FOUND");
      let loc = locations.find(({ position }) => typeof position !== "string" || position in this.map_info);
      if (!loc) {
        loc = locations[0];
        notifyWarn(i18n(`EXPLORE.LOCATE_USER_FOUND_NO_PIN`));
      }
      this._state.setLevel(this._org.levelWithID([locations[0]?.level])?.id);
      const pos = loc.position;
      const { coordinates_from } = loc;
      const feature = {
        track_id: `locate-${user.id}`,
        location: locations[0].type === "wireless" ? {
          x: coordinates_from?.includes("right") ? 1 - pos.x : pos.x,
          y: coordinates_from?.includes("bottom") ? 1 - pos.y : pos.y
        } : pos,
        content: loc.type === "wireless" ? MapRadiusComponent : MapPinComponent,
        z_index: 99,
        data: {
          message: i18n("EXPLORE.LOCATE_USER", { name: user.name }),
          radius: loc.variance,
          last_seen: loc.last_seen
        }
      };
      this.timeout("update_location", () => {
        this.locate = user.id || user.email;
        this._state.setFeatures("_located", [feature]);
      });
    });
  }
};
_ExploreMapViewComponent.\u0275fac = function ExploreMapViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreMapViewComponent)();
};
_ExploreMapViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreMapViewComponent, selectors: [["explore-map-view"]], features: [\u0275\u0275ProvidersFeature([
  ExploreDesksService,
  ExploreSpacesService,
  ExploreZonesService,
  ExploreParkingService,
  ExploreLockersService,
  SpacePipe
]), \u0275\u0275InheritDefinitionFeature], decls: 10, vars: 23, consts: [[3, "mapInfo", "src", "styles", "features", "actions", "labels", "focus", "options"], ["controls", "", 1, "absolute", "left-2", "top-2", "max-w-[calc(100vw-1rem)]", "space-y-2", "overflow-hidden", "rounded", "border", "border-base-200", "bg-base-100", "p-2"], ["legend", "", 1, "absolute", "bottom-2", "left-2", "rounded", "border", "border-base-200", "bg-base-100", "p-2"], ["matRipple", "", 1, "absolute", "right-2", "top-2", "h-12", "min-w-32", "rounded-lg", "border", "border-base-300", "bg-base-100", "px-4", "shadow"], [1, "flex", "items-center", "space-x-2"], ["name", "zones", 1, "ml-2", 3, "ngModelChange", "ngModel"], ["for", "zones", 1, "mb-0"], [1, "mb-2", "font-medium"], [1, "h-3", "w-3", "rounded-full", "border", "border-base-200"], [1, "text-sm"], ["matRipple", "", 1, "absolute", "right-2", "top-2", "h-12", "min-w-32", "rounded-lg", "border", "border-base-300", "bg-base-100", "px-4", "shadow", 3, "click"]], template: function ExploreMapViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "interactive-map", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275listener("mapInfo", function ExploreMapViewComponent_Template_interactive_map_mapInfo_0_listener($event) {
      return ctx.map_info = $event || {};
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ExploreMapViewComponent_Conditional_6_Template, 3, 1, "div", 1);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275conditionalCreate(8, ExploreMapViewComponent_Conditional_8_Template, 6, 3, "div", 2);
    \u0275\u0275conditionalCreate(9, ExploreMapViewComponent_Conditional_9_Template, 2, 0, "button", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("src", \u0275\u0275pipeBind1(1, 10, ctx.url))("styles", \u0275\u0275pipeBind1(2, 12, ctx.styles))("features", \u0275\u0275pipeBind1(3, 14, ctx.features))("actions", \u0275\u0275pipeBind1(4, 16, ctx.actions))("labels", \u0275\u0275pipeBind1(5, 18, ctx.labels))("focus", ctx.locate)("options", \u0275\u0275pureFunction0(22, _c018));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(7, 20, ctx.use_mapsindoors$) ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.show_legend && ctx.legend.length ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.locate ? 9 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  InteractiveMapComponent,
  MatSlideToggle,
  MatRippleModule,
  MatRipple,
  ExploreMapControlComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[zones][_ngcontent-%COMP%] {\n  top: 3.5rem;\n}\n/*# sourceMappingURL=explore-map-view.component.css.map */"] });
var ExploreMapViewComponent = _ExploreMapViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreMapViewComponent, [{
    type: Component,
    args: [{ selector: "explore-map-view", template: `
        <interactive-map [src]="url | async"
            [styles]="styles | async"
            [features]="features | async"
            [actions]="actions | async"
            [labels]="labels | async"
            [focus]="locate"
            [options]="{ controls: true }"
            (mapInfo)="map_info = $event || {}"
         />
        @if (!(use_mapsindoors$ | async)) {
            <div
                controls
                class="absolute left-2 top-2 max-w-[calc(100vw-1rem)] space-y-2 overflow-hidden rounded border border-base-200 bg-base-100 p-2"
            >
                <explore-map-controls></explore-map-controls>
                @if (!hide_zones) {
                    <div class="flex items-center space-x-2">
                        <mat-slide-toggle
                            name="zones"
                            class="ml-2"
                            [ngModel]="
                                !(options | async)?.disable?.includes('zones')
                            "
                            (ngModelChange)="toggleZones($event)"
                        ></mat-slide-toggle>
                        <label for="zones" class="mb-0">{{
                            'EXPLORE.AREAS' | translate
                        }}</label>
                    </div>
                }
            </div>
        }
        @if (show_legend && legend.length) {
            <div
                legend
                class="absolute bottom-2 left-2 rounded border border-base-200 bg-base-100 p-2"
            >
                <h3 class="mb-2 font-medium">
                    {{ 'EXPLORE.LEGEND' | translate }}
                </h3>
                @for (pair of legend; track pair) {
                    <div class="flex items-center space-x-2">
                        <div
                            class="h-3 w-3 rounded-full border border-base-200"
                            [style.background-color]="pair[1]"
                        ></div>
                        <div class="text-sm">{{ pair[0] }}</div>
                    </div>
                }
            </div>
        }
        @if (locate) {
            <button
                class="absolute right-2 top-2 h-12 min-w-32 rounded-lg border border-base-300 bg-base-100 px-4 shadow"
                matRipple
                (click)="clearLocate()"
            >
                Clear Pin
            </button>
        }
    `, providers: [
      ExploreDesksService,
      ExploreSpacesService,
      ExploreZonesService,
      ExploreParkingService,
      ExploreLockersService,
      SpacePipe
    ], imports: [
      CommonModule,
      TranslatePipe,
      InteractiveMapComponent,
      MatSlideToggle,
      MatRippleModule,
      ExploreMapControlComponent
    ], styles: ["/* angular:styles/component:css;f0dd04a674d5d39d9f19b967c64f941cbd15e6ed17e75f4055e915dd830afa8d;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-map-view.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[zones] {\n  top: 3.5rem;\n}\n/*# sourceMappingURL=explore-map-view.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreMapViewComponent, { className: "ExploreMapViewComponent", filePath: "libs/explore/src/lib/explore-map-view.component.ts", lineNumber: 137 });
})();

// libs/explore/src/lib/explore-search.service.ts
var TYPES = ["space", "contact", "feature", "user"];
function typeIndex(item) {
  return TYPES.indexOf(item.is_role ? "contact" : item.type);
}
var _ExploreSearchService = class _ExploreSearchService {
  hideItem(name) {
    const hide_items = this._settings.get("app.hide_global_search_items") || [];
    return hide_items.includes(name);
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._maps_people = inject(MapsPeopleService);
    this._state = inject(ExploreStateService);
    this._emergency_contacts = new BehaviorSubject([]);
    this._filter = new BehaviorSubject("");
    this._loading = new BehaviorSubject(false);
    this.emergency_contacts = this._emergency_contacts.asObservable();
    this._role_assigned_contacts = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => hu(bld.id, "emergency_contacts")), map(({ details }) => details?.contacts || []), shareReplay(1));
    this._user_search = this._filter.pipe(debounceTime(400), tap(() => this._loading.next(true)), switchMap((q) => q?.length > 2 ? this.search_fn(q).pipe(catchError(() => of([]))) : of([])), shareReplay(1));
    this._space_search = this._filter.pipe(debounceTime(400), tap(() => this._loading.next(true)), switchMap((q) => q?.length > 2 ? sc({ q, zone_id: this._org.organisation.id }).pipe(map(({ data }) => data.filter((_) => _.map_id).map((_) => new Space(__spreadProps(__spreadValues({}, _), {
      level: this._org.levelWithID(_.zones)
    }))))) : of([])), catchError(() => []));
    this._desk_search = combineLatest([
      this._org.active_building
    ]).pipe(debounceTime(400), tap(() => this._loading.next(true)), switchMap(([bld]) => bld ? mu(bld.id, { name: "desks" }).pipe(catchError(() => of([])), map((i) => flatten(i.map((j) => (j.metadata.desks?.details || []).map((k) => new Desk(__spreadProps(__spreadValues({}, k), { zone: j.zone }))))))) : of([])), catchError(() => []));
    this._maps_people_search = combineLatest([
      this._maps_people.available$,
      this._filter,
      this._org.active_building
    ]).pipe(debounceTime(1e3), switchMap(([available, q]) => available && q.length > 2 ? mapsindoors?.services.LocationsService.getLocations({ q }) : of([])), map((list) => {
      return list.map((_) => ({
        id: _.properties?.externalId || _.properties?.roomId || _.roomId || _.id,
        map_id: _.properties?.externalId || _.properties?.roomId || _.roomId || "",
        type: "feature",
        name: _.properties?.name || "",
        description: `${_.properties?.roomId} , Level ${_.properties?.floorName}`
      }));
    }), shareReplay(1));
    this._map_features = this._org.active_building.pipe(filter((bld) => !!bld), switchMap(() => mu(this._org.building.id, {
      name: "map_features"
    }).pipe(catchError(() => of({ details: [] })))), map((data) => {
      const list = [];
      for (const item of data) {
        const metadata = item.metadata.map_features;
        if (!metadata)
          continue;
        const feature_list = metadata.details instanceof Array ? metadata.details : [];
        for (const feature of feature_list) {
          list.push({
            id: feature.id,
            type: "feature",
            name: feature.name,
            description: "",
            zone: item.zone
          });
        }
      }
      return list;
    }));
    this._poi_metadata = this._org.initialised.pipe(filter((_) => _), switchMap(() => hu(this._org.organisation.id, "points-of-interest").pipe(catchError((_) => of({ details: {} })))), shareReplay(1));
    this._poi_list = combineLatest([
      this._org.active_building,
      this._poi_metadata
    ]).pipe(filter(([bld]) => !!bld.id), map(([bld, metadata]) => {
      const mapping = metadata.details || {};
      const levels = this._org.levelsForBuilding(bld);
      const list = flatten(levels.map((lvl) => mapping[lvl.id] || []));
      return list.filter((_) => _.can_search);
    }));
    this._points_of_interest = this._poi_list.pipe(map((poi_list) => {
      return poi_list.map((item) => ({
        id: item.location || item.id,
        type: "feature",
        name: item.name,
        description: "",
        zone: item.level_id
      }));
    }));
    this.search_results = combineLatest([
      this._filter,
      this._space_search,
      this._desk_search,
      this._user_search,
      this._emergency_contacts,
      this._role_assigned_contacts,
      this._map_features,
      this._maps_people_search,
      this._points_of_interest
    ]).pipe(map(([filter2, spaces, desks, users, contacts, roled_contacts, features, mapspeople_items, points_of_interest]) => {
      const search = filter2.toLowerCase();
      let results = [];
      if (!this.hideItem("mapspeople"))
        results = results.concat(mapspeople_items);
      if (!this.hideItem("spaces")) {
        results = results.concat(spaces.map((s) => ({
          id: s.id,
          type: "space",
          email: s.email,
          name: s.display_name || s.name,
          description: `Capacity: ${s.capacity} `
        })));
      }
      if (!this.hideItem("desks")) {
        results = results.concat(desks.map((s) => ({
          id: s.id,
          type: "feature",
          email: s.assigned_to,
          description: s.id,
          name: s.name || s.id,
          zone: s.zone?.id || ""
        })));
      }
      if (!this.hideItem("emergency_contacts")) {
        results = results.concat(flatten(roled_contacts.map((u) => u.roles.map((role) => ({
          id: u.email,
          type: role || "contact",
          is_role: true,
          name: u.name,
          email: u.email,
          description: u.email
        })))));
      }
      if (!this.hideItem("features")) {
        results = results.concat(features.filter((_) => _.name.toLowerCase().includes(search)).map((s) => ({
          id: s.id,
          type: "feature",
          name: s.name,
          description: "",
          zone: s.zone?.id
        })));
      }
      if (!this.hideItem("points_of_interest"))
        results = results.concat(points_of_interest);
      if (!this.hideItem("contacts")) {
        results = results.concat(contacts.map((u) => ({
          id: u.email,
          type: u.type || "contact",
          is_role: true,
          name: u.name,
          email: u.email,
          description: u.email
        })));
      }
      if (!this.hideItem("users")) {
        results = results.concat(users.map((u) => ({
          id: u.email,
          type: "user",
          name: u.name,
          email: u.email,
          description: u.email
        })));
      }
      results = results.filter((_) => _.name.toLowerCase().includes(search) || _.description.toLowerCase().includes(search) || (_.email || "").toLowerCase().includes(search) || _.type.toLowerCase().includes(search));
      results.sort((a, b) => typeIndex(a) - typeIndex(b) || a.name.localeCompare(b.name));
      return results;
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.loading = this._loading.asObservable();
    this.search_fn = (q) => this._settings.get("app.basic_user_search") ? Tc({ q, authority_id: ve()?.id }).pipe(map((_) => _.data)) : searchStaff(q);
    this.search_results.subscribe();
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      yield timer(500).toPromise();
      const { is_public } = yield nextValueFrom(this._state.options);
      if (is_public)
        return;
      const mod = this._org.module("location_services", "LocationServices");
      if (mod) {
        const binding = mod.binding("emergency_contacts");
        binding.listen().subscribe((contacts_map) => {
          const list = [];
          for (const type in contacts_map) {
            for (const user of contacts_map[type]) {
              list.push(__spreadProps(__spreadValues({}, user), { type }));
            }
          }
          this._emergency_contacts.next(list);
        });
        binding.bind();
      }
    });
  }
  setFilter(str) {
    this._filter.next(str);
  }
};
_ExploreSearchService.\u0275fac = function ExploreSearchService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreSearchService)();
};
_ExploreSearchService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreSearchService, factory: _ExploreSearchService.\u0275fac, providedIn: "root" });
var ExploreSearchService = _ExploreSearchService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSearchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-search.component.ts
var _c019 = ["input"];
var _c16 = ["button"];
var _forTrack06 = ($index, $item) => $item.name;
function ExploreSearchComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function ExploreSearchComponent_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SEARCH_EMPTY"), " ");
  }
}
function ExploreSearchComponent_Conditional_13_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275listener("click", function ExploreSearchComponent_Conditional_13_For_3_Template_mat_option_click_0_listener() {
      const option_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.select(option_r3));
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", option_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.type, " ");
  }
}
function ExploreSearchComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ExploreSearchComponent_Conditional_13_Conditional_0_Template, 3, 3, "mat-option", 8);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275repeaterCreate(2, ExploreSearchComponent_Conditional_13_For_3_Template, 9, 4, "mat-option", 9, _forTrack06);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "slice");
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!((tmp_5_0 = \u0275\u0275pipeBind1(1, 1, ctx_r3.results)) == null ? null : tmp_5_0.length) ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(5, 5, \u0275\u0275pipeBind1(4, 3, ctx_r3.results), 0, 5));
  }
}
var _ExploreSearchComponent = class _ExploreSearchComponent extends AsyncHandler {
  constructor() {
    super();
    this._el = inject(ElementRef);
    this._search = inject(ExploreSearchService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.show = false;
    this.search_str = "";
    this.right_size = false;
    this.results = this._search.search_results;
    this.loading = this._search.loading;
    this.setFilter = (s) => this._search.setFilter(s);
    this._input_el = viewChild("input");
    this._button_el = viewChild("button");
  }
  ngOnInit() {
    this.checkButtonPosition();
  }
  clear() {
    this.timeout("clear", () => {
      this.show = false;
      this.search_str = "";
      this.setFilter("");
    });
  }
  cancelClear() {
    this.clearTimeout("clear");
  }
  focusInput() {
    if (this._input_el()?.nativeElement) {
      this.timeout("focus", () => this._input_el().nativeElement.focus(), 300);
    }
  }
  showSearch() {
    this.show = true;
    this.focusInput();
  }
  closeSearch(e) {
    this.show = false;
    this.search_str = "";
    this.setFilter("");
    const _input_el = this._input_el();
    if (_input_el?.nativeElement) {
      _input_el.nativeElement.focus();
      _input_el.nativeElement.blur();
    }
  }
  select(item) {
    this.search_str = item.name;
    const query = {};
    const type = item.type === "space" ? "space" : item.type === "feature" ? "locate" : "user";
    query[type] = item.id;
    if (type === "locate") {
      query.name = item.name;
      query.zone = item.zone;
    }
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: query
    });
    this.focusInput();
  }
  checkButtonPosition() {
    const window_width = window.innerWidth;
    const button_rect = this._button_el().nativeElement.getBoundingClientRect();
    const x_center = button_rect.left + button_rect.width / 2;
    this.right_size = x_center > window_width / 2;
  }
};
_ExploreSearchComponent.\u0275fac = function ExploreSearchComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreSearchComponent)();
};
_ExploreSearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSearchComponent, selectors: [["explore-search"]], viewQuery: function ExploreSearchComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._input_el, _c019, 5);
    \u0275\u0275viewQuerySignal(ctx._button_el, _c16, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance(2);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 15, vars: 23, consts: [["button", ""], ["origin", "matAutocompleteOrigin"], ["input", ""], ["auto", "matAutocomplete"], ["icon", "", "matRipple", "", 1, "m-2", "bg-base-200", 3, "resize", "click"], ["role", "search", "tabindex", "0", "matRipple", "", "matAutocompleteOrigin", "", 1, "absolute", "top-1/2", "z-10", "flex", "max-w-[calc(100vw-7rem)]", "-translate-y-1/2", "items-center", "overflow-hidden", "bg-base-100", "px-4", "outline-none", 3, "click"], ["keyboard", "", 1, "flex-1", "border-none", "text-base", "outline-none", 3, "ngModelChange", "focus", "blur", "ngModel", "placeholder", "matAutocomplete", "matAutocompleteConnectedTo"], [1, "mr-2", 3, "diameter"], [1, "pointer-events-none"], [3, "value"], [3, "click", "value"], [1, "flex", "w-[22rem]", "max-w-[calc(100vw-2rem)]", "items-center", "leading-tight"], [1, "w-1/2", "flex-1", "overflow-hidden"], [1, "w-full", "truncate"], [1, "text-xs"], [1, "rounded", "bg-base-300", "p-2", "text-xs", "font-bold", "capitalize", "text-white"]], template: function ExploreSearchComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4, 0);
    \u0275\u0275listener("resize", function ExploreSearchComponent_Template_button_resize_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.checkButtonPosition());
    }, \u0275\u0275resolveWindow)("click", function ExploreSearchComponent_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show ? ctx.closeSearch($event) : ctx.showSearch());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 5, 1);
    \u0275\u0275listener("click", function ExploreSearchComponent_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.focusInput());
    });
    \u0275\u0275elementStart(6, "input", 6, 2);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ExploreSearchComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.search_str, $event) || (ctx.search_str = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExploreSearchComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setFilter($event));
    })("focus", function ExploreSearchComponent_Template_input_focus_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cancelClear());
    })("blur", function ExploreSearchComponent_Template_input_blur_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.clear());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ExploreSearchComponent_Conditional_9_Template, 1, 1, "mat-spinner", 7);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-autocomplete", null, 3);
    \u0275\u0275conditionalCreate(13, ExploreSearchComponent_Conditional_13_Template, 6, 9);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const origin_r5 = \u0275\u0275reference(5);
    const auto_r6 = \u0275\u0275reference(12);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.show || ctx.search_str ? "close" : "search");
    \u0275\u0275advance();
    \u0275\u0275classProp("right-0", ctx.right_size)("-translate-x-14", ctx.right_size)("left-0", !ctx.right_size)("translate-x-14", !ctx.right_size)("show", ctx.show || ctx.search_str);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.search_str);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 17, "COMMON.SEARCH"))("matAutocomplete", auto_r6)("matAutocompleteConnectedTo", origin_r5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(10, 19, ctx.loading) ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(14, 21, ctx.loading) !== true && (ctx.show || ctx.search_str) ? 13 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  SlicePipe,
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatAutocompleteModule,
  MatAutocomplete,
  MatOption,
  MatAutocompleteTrigger,
  MatAutocompleteOrigin,
  VirtualKeyboardComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], styles: ["\n\n[_nghost-%COMP%] {\n  z-index: 99;\n  position: relative;\n}\n[role=search][_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 0;\n  border-radius: 1.5rem;\n  border: 1px solid var(--b3);\n  transition: width 200ms opacity 200ms;\n  opacity: 0;\n  pointer-events: none;\n}\n[role=search].show[_ngcontent-%COMP%] {\n  width: 24rem;\n  opacity: 1;\n  pointer-events: auto;\n}\n/*# sourceMappingURL=explore-search.component.css.map */"] });
var ExploreSearchComponent = _ExploreSearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSearchComponent, [{
    type: Component,
    args: [{ selector: "explore-search", template: `
        <button
            #button
            icon
            matRipple
            class="m-2 bg-base-200"
            (window:resize)="checkButtonPosition()"
            (click)="show ? closeSearch($event) : showSearch()"
        >
            <icon>{{ show || search_str ? 'close' : 'search' }}</icon>
        </button>
        <div
            role="search"
            tabindex="0"
            matRipple
            class="absolute top-1/2 z-10 flex max-w-[calc(100vw-7rem)] -translate-y-1/2 items-center overflow-hidden bg-base-100 px-4 outline-none"
            [class.right-0]="right_size"
            [class.-translate-x-14]="right_size"
            [class.left-0]="!right_size"
            [class.translate-x-14]="!right_size"
            [class.show]="show || search_str"
            (click)="focusInput()"
            matAutocompleteOrigin
            #origin="matAutocompleteOrigin"
        >
            <input
                #input
                keyboard
                class="flex-1 border-none text-base outline-none"
                [(ngModel)]="search_str"
                (ngModelChange)="setFilter($event)"
                [placeholder]="'COMMON.SEARCH' | translate"
                (focus)="cancelClear()"
                (blur)="clear()"
                [matAutocomplete]="auto"
                [matAutocompleteConnectedTo]="origin"
            />
            @if (loading | async) {
                <mat-spinner class="mr-2" [diameter]="32"></mat-spinner>
            }
        </div>
        <mat-autocomplete #auto="matAutocomplete">
            @if ((loading | async) !== true && (show || search_str)) {
                @if (!(results | async)?.length) {
                    <mat-option class="pointer-events-none">
                        {{ 'COMMON.SEARCH_EMPTY' | translate }}
                    </mat-option>
                }
                @for (
                    option of results | async | slice: 0 : 5;
                    track option.name
                ) {
                    <mat-option [value]="option.name" (click)="select(option)">
                        <div
                            class="flex w-[22rem] max-w-[calc(100vw-2rem)] items-center leading-tight"
                        >
                            <div class="w-1/2 flex-1 overflow-hidden">
                                <div class="w-full truncate">
                                    {{ option.name }}
                                </div>
                                <div class="text-xs">
                                    {{ option.description }}
                                </div>
                            </div>
                            <div
                                class="rounded bg-base-300 p-2 text-xs font-bold capitalize text-white"
                            >
                                {{ option.type }}
                            </div>
                        </div>
                    </mat-option>
                }
            }
        </mat-autocomplete>
    `, imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatAutocompleteModule,
      VirtualKeyboardComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;4c21f033af2ef90561f15b32cccfcf54d8d96bf853a89d381116293bc1ac0ac7;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-search.component.ts */\n:host {\n  z-index: 99;\n  position: relative;\n}\n[role=search] {\n  height: 3rem;\n  width: 0;\n  border-radius: 1.5rem;\n  border: 1px solid var(--b3);\n  transition: width 200ms opacity 200ms;\n  opacity: 0;\n  pointer-events: none;\n}\n[role=search].show {\n  width: 24rem;\n  opacity: 1;\n  pointer-events: auto;\n}\n/*# sourceMappingURL=explore-search.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSearchComponent, { className: "ExploreSearchComponent", filePath: "libs/explore/src/lib/explore-search.component.ts", lineNumber: 133 });
})();

// node_modules/@angular/material/fesm2022/module-CWxMD37a.mjs
var _c020 = ["tooltip"];
var SCROLL_THROTTLE_MS = 20;
function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
var MAT_TOOLTIP_SCROLL_STRATEGY = new InjectionToken("mat-tooltip-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector, {
      scrollThrottle: SCROLL_THROTTLE_MS
    });
  }
});
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector, {
    scrollThrottle: SCROLL_THROTTLE_MS
  });
}
var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_TOOLTIP_SCROLL_STRATEGY,
  deps: [],
  useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
};
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
var MAT_TOOLTIP_DEFAULT_OPTIONS = new InjectionToken("mat-tooltip-default-options", {
  providedIn: "root",
  factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
var PANEL_CLASS = "tooltip-panel";
var passiveListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var MIN_VIEWPORT_TOOLTIP_THRESHOLD = 8;
var UNBOUNDED_ANCHOR_GAP = 8;
var MIN_HEIGHT = 24;
var MAX_WIDTH = 200;
var MatTooltip = class _MatTooltip {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _ariaDescriber = inject(AriaDescriber);
  _focusMonitor = inject(FocusMonitor);
  _dir = inject(Directionality);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _animationsDisabled = _animationsDisabled();
  _defaultOptions = inject(MAT_TOOLTIP_DEFAULT_OPTIONS, {
    optional: true
  });
  _overlayRef;
  _tooltipInstance;
  _overlayPanelClass;
  // Used for styling internally.
  _portal;
  _position = "below";
  _positionAtOrigin = false;
  _disabled = false;
  _tooltipClass;
  _viewInitialized = false;
  _pointerExitEventsInitialized = false;
  _tooltipComponent = TooltipComponent;
  _viewportMargin = 8;
  _currentPosition;
  _cssClassPrefix = "mat-mdc";
  _ariaDescriptionPending;
  _dirSubscribed = false;
  /** Allows the user to define the position of the tooltip relative to the parent element */
  get position() {
    return this._position;
  }
  set position(value) {
    if (value !== this._position) {
      this._position = value;
      if (this._overlayRef) {
        this._updatePosition(this._overlayRef);
        this._tooltipInstance?.show(0);
        this._overlayRef.updatePosition();
      }
    }
  }
  /**
   * Whether tooltip should be relative to the click or touch origin
   * instead of outside the element bounding box.
   */
  get positionAtOrigin() {
    return this._positionAtOrigin;
  }
  set positionAtOrigin(value) {
    this._positionAtOrigin = coerceBooleanProperty(value);
    this._detach();
    this._overlayRef = null;
  }
  /** Disables the display of the tooltip. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    const isDisabled = coerceBooleanProperty(value);
    if (this._disabled !== isDisabled) {
      this._disabled = isDisabled;
      if (isDisabled) {
        this.hide(0);
      } else {
        this._setupPointerEnterEventsIfNeeded();
      }
      this._syncAriaDescription(this.message);
    }
  }
  /** The default delay in ms before showing the tooltip after show is called */
  get showDelay() {
    return this._showDelay;
  }
  set showDelay(value) {
    this._showDelay = coerceNumberProperty(value);
  }
  _showDelay;
  /** The default delay in ms before hiding the tooltip after hide is called */
  get hideDelay() {
    return this._hideDelay;
  }
  set hideDelay(value) {
    this._hideDelay = coerceNumberProperty(value);
    if (this._tooltipInstance) {
      this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
    }
  }
  _hideDelay;
  /**
   * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
   * uses a long press gesture to show and hide, however it can conflict with the native browser
   * gestures. To work around the conflict, Angular Material disables native gestures on the
   * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
   * elements). The different values for this option configure the touch event handling as follows:
   * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
   *   browser gestures on particular elements. In particular, it allows text selection on inputs
   *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
   * - `on` - Enables touch gestures for all elements and disables native
   *   browser gestures with no exceptions.
   * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
   *   showing on touch devices.
   */
  touchGestures = "auto";
  /** The message to be displayed in the tooltip */
  get message() {
    return this._message;
  }
  set message(value) {
    const oldMessage = this._message;
    this._message = value != null ? String(value).trim() : "";
    if (!this._message && this._isTooltipVisible()) {
      this.hide(0);
    } else {
      this._setupPointerEnterEventsIfNeeded();
      this._updateTooltipMessage();
    }
    this._syncAriaDescription(oldMessage);
  }
  _message = "";
  /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
  get tooltipClass() {
    return this._tooltipClass;
  }
  set tooltipClass(value) {
    this._tooltipClass = value;
    if (this._tooltipInstance) {
      this._setTooltipClass(this._tooltipClass);
    }
  }
  /** Manually-bound passive event listeners. */
  _passiveListeners = [];
  /** Timer started at the last `touchstart` event. */
  _touchstartTimeout = null;
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Whether ngOnDestroyed has been called. */
  _isDestroyed = false;
  constructor() {
    const defaultOptions = this._defaultOptions;
    if (defaultOptions) {
      this._showDelay = defaultOptions.showDelay;
      this._hideDelay = defaultOptions.hideDelay;
      if (defaultOptions.position) {
        this.position = defaultOptions.position;
      }
      if (defaultOptions.positionAtOrigin) {
        this.positionAtOrigin = defaultOptions.positionAtOrigin;
      }
      if (defaultOptions.touchGestures) {
        this.touchGestures = defaultOptions.touchGestures;
      }
      if (defaultOptions.tooltipClass) {
        this.tooltipClass = defaultOptions.tooltipClass;
      }
    }
    this._viewportMargin = MIN_VIEWPORT_TOOLTIP_THRESHOLD;
  }
  ngAfterViewInit() {
    this._viewInitialized = true;
    this._setupPointerEnterEventsIfNeeded();
    this._focusMonitor.monitor(this._elementRef).pipe(takeUntil(this._destroyed)).subscribe((origin) => {
      if (!origin) {
        this._ngZone.run(() => this.hide(0));
      } else if (origin === "keyboard") {
        this._ngZone.run(() => this.show());
      }
    });
  }
  /**
   * Dispose the tooltip when destroyed.
   */
  ngOnDestroy() {
    const nativeElement = this._elementRef.nativeElement;
    if (this._touchstartTimeout) {
      clearTimeout(this._touchstartTimeout);
    }
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._tooltipInstance = null;
    }
    this._passiveListeners.forEach(([event, listener]) => {
      nativeElement.removeEventListener(event, listener, passiveListenerOptions);
    });
    this._passiveListeners.length = 0;
    this._destroyed.next();
    this._destroyed.complete();
    this._isDestroyed = true;
    this._ariaDescriber.removeDescription(nativeElement, this.message, "tooltip");
    this._focusMonitor.stopMonitoring(nativeElement);
  }
  /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
  show(delay = this.showDelay, origin) {
    if (this.disabled || !this.message || this._isTooltipVisible()) {
      this._tooltipInstance?._cancelPendingAnimations();
      return;
    }
    const overlayRef = this._createOverlay(origin);
    this._detach();
    this._portal = this._portal || new ComponentPortal(this._tooltipComponent, this._viewContainerRef);
    const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
    instance._triggerElement = this._elementRef.nativeElement;
    instance._mouseLeaveHideDelay = this._hideDelay;
    instance.afterHidden().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
    this._setTooltipClass(this._tooltipClass);
    this._updateTooltipMessage();
    instance.show(delay);
  }
  /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
  hide(delay = this.hideDelay) {
    const instance = this._tooltipInstance;
    if (instance) {
      if (instance.isVisible()) {
        instance.hide(delay);
      } else {
        instance._cancelPendingAnimations();
        this._detach();
      }
    }
  }
  /** Shows/hides the tooltip */
  toggle(origin) {
    this._isTooltipVisible() ? this.hide() : this.show(void 0, origin);
  }
  /** Returns true if the tooltip is currently visible to the user */
  _isTooltipVisible() {
    return !!this._tooltipInstance && this._tooltipInstance.isVisible();
  }
  /** Create the overlay config and position strategy */
  _createOverlay(origin) {
    if (this._overlayRef) {
      const existingStrategy = this._overlayRef.getConfig().positionStrategy;
      if ((!this.positionAtOrigin || !origin) && existingStrategy._origin instanceof ElementRef) {
        return this._overlayRef;
      }
      this._detach();
    }
    const scrollableAncestors = this._injector.get(ScrollDispatcher).getAncestorScrollContainers(this._elementRef);
    const panelClass = `${this._cssClassPrefix}-${PANEL_CLASS}`;
    const strategy = createFlexibleConnectedPositionStrategy(this._injector, this.positionAtOrigin ? origin || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);
    strategy.positionChanges.pipe(takeUntil(this._destroyed)).subscribe((change) => {
      this._updateCurrentPositionClass(change.connectionPair);
      if (this._tooltipInstance) {
        if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
          this._ngZone.run(() => this.hide(0));
        }
      }
    });
    this._overlayRef = createOverlayRef(this._injector, {
      direction: this._dir,
      positionStrategy: strategy,
      panelClass: this._overlayPanelClass ? [...this._overlayPanelClass, panelClass] : panelClass,
      scrollStrategy: this._injector.get(MAT_TOOLTIP_SCROLL_STRATEGY)(),
      disableAnimations: this._animationsDisabled
    });
    this._updatePosition(this._overlayRef);
    this._overlayRef.detachments().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
    this._overlayRef.outsidePointerEvents().pipe(takeUntil(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
    this._overlayRef.keydownEvents().pipe(takeUntil(this._destroyed)).subscribe((event) => {
      if (this._isTooltipVisible() && event.keyCode === ESCAPE && !hasModifierKey(event)) {
        event.preventDefault();
        event.stopPropagation();
        this._ngZone.run(() => this.hide(0));
      }
    });
    if (this._defaultOptions?.disableTooltipInteractivity) {
      this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
    }
    if (!this._dirSubscribed) {
      this._dirSubscribed = true;
      this._dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
        if (this._overlayRef) {
          this._updatePosition(this._overlayRef);
        }
      });
    }
    return this._overlayRef;
  }
  /** Detaches the currently-attached tooltip. */
  _detach() {
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
    }
    this._tooltipInstance = null;
  }
  /** Updates the position of the current tooltip. */
  _updatePosition(overlayRef) {
    const position = overlayRef.getConfig().positionStrategy;
    const origin = this._getOrigin();
    const overlay = this._getOverlayPosition();
    position.withPositions([this._addOffset(__spreadValues(__spreadValues({}, origin.main), overlay.main)), this._addOffset(__spreadValues(__spreadValues({}, origin.fallback), overlay.fallback))]);
  }
  /** Adds the configured offset to a position. Used as a hook for child classes. */
  _addOffset(position) {
    const offset = UNBOUNDED_ANCHOR_GAP;
    const isLtr = !this._dir || this._dir.value == "ltr";
    if (position.originY === "top") {
      position.offsetY = -offset;
    } else if (position.originY === "bottom") {
      position.offsetY = offset;
    } else if (position.originX === "start") {
      position.offsetX = isLtr ? -offset : offset;
    } else if (position.originX === "end") {
      position.offsetX = isLtr ? offset : -offset;
    }
    return position;
  }
  /**
   * Returns the origin position and a fallback position based on the user's position preference.
   * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
   */
  _getOrigin() {
    const isLtr = !this._dir || this._dir.value == "ltr";
    const position = this.position;
    let originPosition;
    if (position == "above" || position == "below") {
      originPosition = {
        originX: "center",
        originY: position == "above" ? "top" : "bottom"
      };
    } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
      originPosition = {
        originX: "start",
        originY: "center"
      };
    } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
      originPosition = {
        originX: "end",
        originY: "center"
      };
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(originPosition.originX, originPosition.originY);
    return {
      main: originPosition,
      fallback: {
        originX: x,
        originY: y
      }
    };
  }
  /** Returns the overlay position and a fallback position based on the user's preference */
  _getOverlayPosition() {
    const isLtr = !this._dir || this._dir.value == "ltr";
    const position = this.position;
    let overlayPosition;
    if (position == "above") {
      overlayPosition = {
        overlayX: "center",
        overlayY: "bottom"
      };
    } else if (position == "below") {
      overlayPosition = {
        overlayX: "center",
        overlayY: "top"
      };
    } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
      overlayPosition = {
        overlayX: "end",
        overlayY: "center"
      };
    } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
      overlayPosition = {
        overlayX: "start",
        overlayY: "center"
      };
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
    return {
      main: overlayPosition,
      fallback: {
        overlayX: x,
        overlayY: y
      }
    };
  }
  /** Updates the tooltip message and repositions the overlay according to the new message length */
  _updateTooltipMessage() {
    if (this._tooltipInstance) {
      this._tooltipInstance.message = this.message;
      this._tooltipInstance._markForCheck();
      afterNextRender(() => {
        if (this._tooltipInstance) {
          this._overlayRef.updatePosition();
        }
      }, {
        injector: this._injector
      });
    }
  }
  /** Updates the tooltip class */
  _setTooltipClass(tooltipClass) {
    if (this._tooltipInstance) {
      this._tooltipInstance.tooltipClass = tooltipClass;
      this._tooltipInstance._markForCheck();
    }
  }
  /** Inverts an overlay position. */
  _invertPosition(x, y) {
    if (this.position === "above" || this.position === "below") {
      if (y === "top") {
        y = "bottom";
      } else if (y === "bottom") {
        y = "top";
      }
    } else {
      if (x === "end") {
        x = "start";
      } else if (x === "start") {
        x = "end";
      }
    }
    return {
      x,
      y
    };
  }
  /** Updates the class on the overlay panel based on the current position of the tooltip. */
  _updateCurrentPositionClass(connectionPair) {
    const {
      overlayY,
      originX,
      originY
    } = connectionPair;
    let newPosition;
    if (overlayY === "center") {
      if (this._dir && this._dir.value === "rtl") {
        newPosition = originX === "end" ? "left" : "right";
      } else {
        newPosition = originX === "start" ? "left" : "right";
      }
    } else {
      newPosition = overlayY === "bottom" && originY === "top" ? "above" : "below";
    }
    if (newPosition !== this._currentPosition) {
      const overlayRef = this._overlayRef;
      if (overlayRef) {
        const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
        overlayRef.removePanelClass(classPrefix + this._currentPosition);
        overlayRef.addPanelClass(classPrefix + newPosition);
      }
      this._currentPosition = newPosition;
    }
  }
  /** Binds the pointer events to the tooltip trigger. */
  _setupPointerEnterEventsIfNeeded() {
    if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
      return;
    }
    if (this._platformSupportsMouseEvents()) {
      this._passiveListeners.push(["mouseenter", (event) => {
        this._setupPointerExitEventsIfNeeded();
        let point = void 0;
        if (event.x !== void 0 && event.y !== void 0) {
          point = event;
        }
        this.show(void 0, point);
      }]);
    } else if (this.touchGestures !== "off") {
      this._disableNativeGesturesIfNecessary();
      this._passiveListeners.push(["touchstart", (event) => {
        const touch = event.targetTouches?.[0];
        const origin = touch ? {
          x: touch.clientX,
          y: touch.clientY
        } : void 0;
        this._setupPointerExitEventsIfNeeded();
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        const DEFAULT_LONGPRESS_DELAY = 500;
        this._touchstartTimeout = setTimeout(() => {
          this._touchstartTimeout = null;
          this.show(void 0, origin);
        }, this._defaultOptions?.touchLongPressShowDelay ?? DEFAULT_LONGPRESS_DELAY);
      }]);
    }
    this._addListeners(this._passiveListeners);
  }
  _setupPointerExitEventsIfNeeded() {
    if (this._pointerExitEventsInitialized) {
      return;
    }
    this._pointerExitEventsInitialized = true;
    const exitListeners = [];
    if (this._platformSupportsMouseEvents()) {
      exitListeners.push(["mouseleave", (event) => {
        const newTarget = event.relatedTarget;
        if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
          this.hide();
        }
      }], ["wheel", (event) => this._wheelListener(event)]);
    } else if (this.touchGestures !== "off") {
      this._disableNativeGesturesIfNecessary();
      const touchendListener = () => {
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        this.hide(this._defaultOptions?.touchendHideDelay);
      };
      exitListeners.push(["touchend", touchendListener], ["touchcancel", touchendListener]);
    }
    this._addListeners(exitListeners);
    this._passiveListeners.push(...exitListeners);
  }
  _addListeners(listeners) {
    listeners.forEach(([event, listener]) => {
      this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
    });
  }
  _platformSupportsMouseEvents() {
    return !this._platform.IOS && !this._platform.ANDROID;
  }
  /** Listener for the `wheel` event on the element. */
  _wheelListener(event) {
    if (this._isTooltipVisible()) {
      const elementUnderPointer = this._injector.get(DOCUMENT).elementFromPoint(event.clientX, event.clientY);
      const element = this._elementRef.nativeElement;
      if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
        this.hide();
      }
    }
  }
  /** Disables the native browser gestures, based on how the tooltip has been configured. */
  _disableNativeGesturesIfNecessary() {
    const gestures = this.touchGestures;
    if (gestures !== "off") {
      const element = this._elementRef.nativeElement;
      const style = element.style;
      if (gestures === "on" || element.nodeName !== "INPUT" && element.nodeName !== "TEXTAREA") {
        style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = "none";
      }
      if (gestures === "on" || !element.draggable) {
        style.webkitUserDrag = "none";
      }
      style.touchAction = "none";
      style.webkitTapHighlightColor = "transparent";
    }
  }
  /** Updates the tooltip's ARIA description based on it current state. */
  _syncAriaDescription(oldMessage) {
    if (this._ariaDescriptionPending) {
      return;
    }
    this._ariaDescriptionPending = true;
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, oldMessage, "tooltip");
    if (!this._isDestroyed) {
      afterNextRender({
        write: () => {
          this._ariaDescriptionPending = false;
          if (this.message && !this.disabled) {
            this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, "tooltip");
          }
        }
      }, {
        injector: this._injector
      });
    }
  }
  static \u0275fac = function MatTooltip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTooltip)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTooltip,
    selectors: [["", "matTooltip", ""]],
    hostAttrs: [1, "mat-mdc-tooltip-trigger"],
    hostVars: 2,
    hostBindings: function MatTooltip_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-tooltip-disabled", ctx.disabled);
      }
    },
    inputs: {
      position: [0, "matTooltipPosition", "position"],
      positionAtOrigin: [0, "matTooltipPositionAtOrigin", "positionAtOrigin"],
      disabled: [0, "matTooltipDisabled", "disabled"],
      showDelay: [0, "matTooltipShowDelay", "showDelay"],
      hideDelay: [0, "matTooltipHideDelay", "hideDelay"],
      touchGestures: [0, "matTooltipTouchGestures", "touchGestures"],
      message: [0, "matTooltip", "message"],
      tooltipClass: [0, "matTooltipClass", "tooltipClass"]
    },
    exportAs: ["matTooltip"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltip, [{
    type: Directive,
    args: [{
      selector: "[matTooltip]",
      exportAs: "matTooltip",
      host: {
        "class": "mat-mdc-tooltip-trigger",
        "[class.mat-mdc-tooltip-disabled]": "disabled"
      }
    }]
  }], () => [], {
    position: [{
      type: Input,
      args: ["matTooltipPosition"]
    }],
    positionAtOrigin: [{
      type: Input,
      args: ["matTooltipPositionAtOrigin"]
    }],
    disabled: [{
      type: Input,
      args: ["matTooltipDisabled"]
    }],
    showDelay: [{
      type: Input,
      args: ["matTooltipShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["matTooltipHideDelay"]
    }],
    touchGestures: [{
      type: Input,
      args: ["matTooltipTouchGestures"]
    }],
    message: [{
      type: Input,
      args: ["matTooltip"]
    }],
    tooltipClass: [{
      type: Input,
      args: ["matTooltipClass"]
    }]
  });
})();
var TooltipComponent = class _TooltipComponent {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  /* Whether the tooltip text overflows to multiple lines */
  _isMultiline = false;
  /** Message to display in the tooltip */
  message;
  /** Classes to be added to the tooltip. Supports the same syntax as `ngClass`. */
  tooltipClass;
  /** The timeout ID of any current timer set to show the tooltip */
  _showTimeoutId;
  /** The timeout ID of any current timer set to hide the tooltip */
  _hideTimeoutId;
  /** Element that caused the tooltip to open. */
  _triggerElement;
  /** Amount of milliseconds to delay the closing sequence. */
  _mouseLeaveHideDelay;
  /** Whether animations are currently disabled. */
  _animationsDisabled = _animationsDisabled();
  /** Reference to the internal tooltip element. */
  _tooltip;
  /** Whether interactions on the page should close the tooltip */
  _closeOnInteraction = false;
  /** Whether the tooltip is currently visible. */
  _isVisible = false;
  /** Subject for notifying that the tooltip has been hidden from the view */
  _onHide = new Subject();
  /** Name of the show animation and the class that toggles it. */
  _showAnimation = "mat-mdc-tooltip-show";
  /** Name of the hide animation and the class that toggles it. */
  _hideAnimation = "mat-mdc-tooltip-hide";
  constructor() {
  }
  /**
   * Shows the tooltip with an animation originating from the provided origin
   * @param delay Amount of milliseconds to the delay showing the tooltip.
   */
  show(delay) {
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = setTimeout(() => {
      this._toggleVisibility(true);
      this._showTimeoutId = void 0;
    }, delay);
  }
  /**
   * Begins the animation to hide the tooltip after the provided delay in ms.
   * @param delay Amount of milliseconds to delay showing the tooltip.
   */
  hide(delay) {
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    this._hideTimeoutId = setTimeout(() => {
      this._toggleVisibility(false);
      this._hideTimeoutId = void 0;
    }, delay);
  }
  /** Returns an observable that notifies when the tooltip has been hidden from view. */
  afterHidden() {
    return this._onHide;
  }
  /** Whether the tooltip is being displayed. */
  isVisible() {
    return this._isVisible;
  }
  ngOnDestroy() {
    this._cancelPendingAnimations();
    this._onHide.complete();
    this._triggerElement = null;
  }
  /**
   * Interactions on the HTML body should close the tooltip immediately as defined in the
   * material design spec.
   * https://material.io/design/components/tooltips.html#behavior
   */
  _handleBodyInteraction() {
    if (this._closeOnInteraction) {
      this.hide(0);
    }
  }
  /**
   * Marks that the tooltip needs to be checked in the next change detection run.
   * Mainly used for rendering the initial text before positioning a tooltip, which
   * can be problematic in components with OnPush change detection.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  _handleMouseLeave({
    relatedTarget
  }) {
    if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
      if (this.isVisible()) {
        this.hide(this._mouseLeaveHideDelay);
      } else {
        this._finalizeAnimation(false);
      }
    }
  }
  /**
   * Callback for when the timeout in this.show() gets completed.
   * This method is only needed by the mdc-tooltip, and so it is only implemented
   * in the mdc-tooltip, not here.
   */
  _onShow() {
    this._isMultiline = this._isTooltipMultiline();
    this._markForCheck();
  }
  /** Whether the tooltip text has overflown to the next line */
  _isTooltipMultiline() {
    const rect = this._elementRef.nativeElement.getBoundingClientRect();
    return rect.height > MIN_HEIGHT && rect.width >= MAX_WIDTH;
  }
  /** Event listener dispatched when an animation on the tooltip finishes. */
  _handleAnimationEnd({
    animationName
  }) {
    if (animationName === this._showAnimation || animationName === this._hideAnimation) {
      this._finalizeAnimation(animationName === this._showAnimation);
    }
  }
  /** Cancels any pending animation sequences. */
  _cancelPendingAnimations() {
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = this._hideTimeoutId = void 0;
  }
  /** Handles the cleanup after an animation has finished. */
  _finalizeAnimation(toVisible) {
    if (toVisible) {
      this._closeOnInteraction = true;
    } else if (!this.isVisible()) {
      this._onHide.next();
    }
  }
  /** Toggles the visibility of the tooltip element. */
  _toggleVisibility(isVisible) {
    const tooltip = this._tooltip.nativeElement;
    const showClass = this._showAnimation;
    const hideClass = this._hideAnimation;
    tooltip.classList.remove(isVisible ? hideClass : showClass);
    tooltip.classList.add(isVisible ? showClass : hideClass);
    if (this._isVisible !== isVisible) {
      this._isVisible = isVisible;
      this._changeDetectorRef.markForCheck();
    }
    if (isVisible && !this._animationsDisabled && typeof getComputedStyle === "function") {
      const styles = getComputedStyle(tooltip);
      if (styles.getPropertyValue("animation-duration") === "0s" || styles.getPropertyValue("animation-name") === "none") {
        this._animationsDisabled = true;
      }
    }
    if (isVisible) {
      this._onShow();
    }
    if (this._animationsDisabled) {
      tooltip.classList.add("_mat-animation-noopable");
      this._finalizeAnimation(isVisible);
    }
  }
  static \u0275fac = function TooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TooltipComponent,
    selectors: [["mat-tooltip-component"]],
    viewQuery: function TooltipComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c020, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tooltip = _t.first);
      }
    },
    hostAttrs: ["aria-hidden", "true"],
    hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mouseleave", function TooltipComponent_mouseleave_HostBindingHandler($event) {
          return ctx._handleMouseLeave($event);
        });
      }
    },
    decls: 4,
    vars: 4,
    consts: [["tooltip", ""], [1, "mdc-tooltip", "mat-mdc-tooltip", 3, "animationend", "ngClass"], [1, "mat-mdc-tooltip-surface", "mdc-tooltip__surface"]],
    template: function TooltipComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275listener("animationend", function TooltipComponent_Template_div_animationend_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handleAnimationEnd($event));
        });
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mdc-tooltip--multiline", ctx._isMultiline);
        \u0275\u0275property("ngClass", ctx.tooltipClass);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.message);
      }
    },
    dependencies: [NgClass],
    styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipComponent, [{
    type: Component,
    args: [{
      selector: "mat-tooltip-component",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(mouseleave)": "_handleMouseLeave($event)",
        "aria-hidden": "true"
      },
      imports: [NgClass],
      template: '<div\n  #tooltip\n  class="mdc-tooltip mat-mdc-tooltip"\n  [ngClass]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mat-mdc-tooltip-surface mdc-tooltip__surface">{{message}}</div>\n</div>\n',
      styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n']
    }]
  }], () => [], {
    _tooltip: [{
      type: ViewChild,
      args: ["tooltip", {
        // Use a static query here since we interact directly with
        // the DOM which can happen before `ngAfterViewInit`.
        static: true
      }]
    }]
  });
})();
var MatTooltipModule = class _MatTooltipModule {
  static \u0275fac = function MatTooltipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTooltipModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatTooltipModule,
    imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
    exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [A11yModule, OverlayModule, MatCommonModule, MatCommonModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
      exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule],
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

// libs/explore/src/lib/explore-zoom-control.component.ts
var _ExploreZoomControlComponent = class _ExploreZoomControlComponent {
  constructor() {
    this._state = inject(ExploreStateService);
    this.zoomIn = () => this._state.setPositions(Math.min(10, this._state.positions.zoom * 1.2), this._state.positions.center);
    this.zoomOut = () => this._state.setPositions(Math.max(1, this._state.positions.zoom * (1 / 1.2)), this._state.positions.center);
    this.reset = () => this._state.setPositions(1, { x: 0.5, y: 0.5 });
  }
};
_ExploreZoomControlComponent.\u0275fac = function ExploreZoomControlComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreZoomControlComponent)();
};
_ExploreZoomControlComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreZoomControlComponent, selectors: [["explore-zoom-controls"]], decls: 12, vars: 9, consts: [["z-in", "", "icon", "", "matRipple", "", 1, "bg-base-100", 3, "click", "matTooltip"], ["z-out", "", "icon", "", "matRipple", "", 1, "bg-base-100", 3, "click", "matTooltip"], ["reset", "", "icon", "", "matRipple", "", 1, "bg-base-100", 3, "click", "matTooltip"]], template: function ExploreZoomControlComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_0_listener() {
      return ctx.zoomIn();
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 1);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_4_listener() {
      return ctx.zoomOut();
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 2);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_8_listener() {
      return ctx.reset();
    });
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "autorenew");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 3, "EXPLORE.ZOOM_IN"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 5, "EXPLORE.ZOOM_OUT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(9, 7, "EXPLORE.ZOOM_RESET"));
  }
}, dependencies: [MatRippleModule, MatRipple, TranslatePipe, IconComponent, MatTooltipModule, MatTooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid #9998;\n  border-radius: 0;\n}\nbutton[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n  border-bottom: none;\n}\nbutton[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n  border-top: none;\n}\n/*# sourceMappingURL=explore-zoom-control.component.css.map */"] });
var ExploreZoomControlComponent = _ExploreZoomControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreZoomControlComponent, [{
    type: Component,
    args: [{ selector: `explore-zoom-controls`, template: `
        <button
            z-in
            icon
            matRipple
            class="bg-base-100"
            (click)="zoomIn()"
            [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
        >
            <icon>add</icon>
        </button>
        <button
            z-out
            icon
            matRipple
            class="bg-base-100"
            (click)="zoomOut()"
            [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
        >
            <icon>remove</icon>
        </button>
        <button
            reset
            icon
            matRipple
            class="bg-base-100"
            (click)="reset()"
            [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
        >
            <icon>autorenew</icon>
        </button>
    `, imports: [MatRippleModule, TranslatePipe, IconComponent, MatTooltipModule], styles: ["/* angular:styles/component:css;3d42ea289b866ee23d2075663b931fa5501aa5a1e18f8af721ddfffbd945ad48;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-zoom-control.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n}\nbutton {\n  border: 1px solid #9998;\n  border-radius: 0;\n}\nbutton:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n  border-bottom: none;\n}\nbutton:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n  border-top: none;\n}\n/*# sourceMappingURL=explore-zoom-control.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreZoomControlComponent, { className: "ExploreZoomControlComponent", filePath: "libs/explore/src/lib/explore-zoom-control.component.ts", lineNumber: 67 });
})();

// libs/explore/src/lib/explore.module.ts
var STANDALONE_COMPONENTS = [
  ExploreMapControlComponent,
  ExploreMapViewComponent,
  ExploreSearchComponent,
  ExploreSpaceInfoComponent,
  ExploreDeviceInfoComponent,
  ExploreDeskInfoComponent,
  ExploreZoomControlComponent,
  ExploreBookingModalComponent,
  SetDatetimeModalComponent,
  ExploreBookQrComponent,
  ExploreSensorInfoComponent,
  ExploreLockerBankInfoComponent,
  ExploreLockerBankModalComponent,
  ExploreParkingInfoComponent
];
var _SharedExploreModule = class _SharedExploreModule {
};
_SharedExploreModule.\u0275fac = function SharedExploreModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SharedExploreModule)();
};
_SharedExploreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedExploreModule });
_SharedExploreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  ExploreMapControlComponent,
  ExploreMapViewComponent,
  ExploreSearchComponent,
  ExploreSpaceInfoComponent,
  ExploreDeviceInfoComponent,
  ExploreDeskInfoComponent,
  ExploreZoomControlComponent,
  ExploreBookingModalComponent,
  SetDatetimeModalComponent,
  ExploreBookQrComponent,
  ExploreSensorInfoComponent,
  ExploreLockerBankInfoComponent,
  ExploreLockerBankModalComponent
] });
var SharedExploreModule = _SharedExploreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedExploreModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [...STANDALONE_COMPONENTS],
      exports: [...STANDALONE_COMPONENTS]
    }]
  }], null, null);
})();

// apps/map-kiosk/src/app/accessibility-controls.component.ts
var _AccessibilityControlsComponent = class _AccessibilityControlsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this.applySetting = (n, v) => this.timeout("apply_setting", () => this._settings.saveUserSetting(n, v), 1e3);
  }
  get dark_mode() {
    return this.can_change_dark_mode && this._settings.theme === "dark";
  }
  get can_change_dark_mode() {
    return !!this._settings.get("app.allow_dark_mode");
  }
  get accessible() {
    return !!this._settings.get("accessible");
  }
  get font_size() {
    return this._settings.get("font_size") || 16;
  }
  setDarkMode(state) {
    this.timeout("dark_mode", () => {
      const theme = this._settings.theme;
      if (state && theme !== "dark")
        this._settings.setTheme("dark");
      else if (!state && theme === "dark")
        this._settings.setTheme("light");
    }, 100);
  }
};
_AccessibilityControlsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AccessibilityControlsComponent_BaseFactory;
  return function AccessibilityControlsComponent_Factory(__ngFactoryType__) {
    return (\u0275AccessibilityControlsComponent_BaseFactory || (\u0275AccessibilityControlsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AccessibilityControlsComponent)))(__ngFactoryType__ || _AccessibilityControlsComponent);
  };
})();
_AccessibilityControlsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessibilityControlsComponent, selectors: [["accessibility-controls"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 1, consts: [["matRipple", "", 1, "flex", "w-full", "items-center", "justify-between", "rounded", "p-2", "hover:bg-base-200", 3, "click"], [3, "ngModelChange", "ngModel"]], template: function AccessibilityControlsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function AccessibilityControlsComponent_Template_button_click_0_listener() {
      return ctx.setDarkMode(!ctx.dark_mode);
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2, "Dark Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-slide-toggle", 1);
    \u0275\u0275listener("ngModelChange", function AccessibilityControlsComponent_Template_mat_slide_toggle_ngModelChange_3_listener($event) {
      return ctx.setDarkMode($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.dark_mode);
  }
}, dependencies: [NgControlStatus, NgModel, MatSlideToggle], encapsulation: 2 });
var AccessibilityControlsComponent = _AccessibilityControlsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessibilityControlsComponent, [{
    type: Component,
    args: [{ selector: "accessibility-controls", template: `
        <button
            matRipple
            class="flex w-full items-center justify-between rounded p-2 hover:bg-base-200"
            (click)="setDarkMode(!dark_mode)"
        >
            <div>Dark Mode</div>
            <mat-slide-toggle
                [ngModel]="dark_mode"
                (ngModelChange)="setDarkMode($event)"
            ></mat-slide-toggle>
        </button>
        <!-- <button
            matRipple
            class="flex items-center justify-between hover:bg-base-200 w-full p-2 rounded"
            (click)="applySetting('accessible', !accessible)"
        >
            <div>Text Size</div>
            <mat-slide-toggle
                [ngModel]="accessible"
                (ngModelChange)="applySetting('accessible', $event)"
            ></mat-slide-toggle>
        </button>
        <div class="flex items-center pl-2 space-x-4" *ngIf="accessible">
            <div class="text-sm">A</div>
            <mat-slider
                class="flex-1 w-px min-w-0 text-[16px]"
                [min]="10"
                [max]="24"
                [step]="2"
            >
                <input
                    matSliderThumb
                    class="text-[16px]"
                    [ngModel]="font_size"
                    (ngModelChange)="applySetting('font_size', $event)"
                />
            </mat-slider>
            <div class="text-2xl">A</div>
            <div
                class="text-base py-1 px-2 rounded bg-base-300 text-base-content my-2"
            >
                {{ font_size }}px
            </div>
        </div> -->
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessibilityControlsComponent, { className: "AccessibilityControlsComponent", filePath: "apps/map-kiosk/src/app/accessibility-controls.component.ts", lineNumber: 55 });
})();

// apps/map-kiosk/src/app/explore-level-select.component.ts
function ExploreLevelSelectComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function ExploreLevelSelectComponent_For_2_Template_button_click_0_listener() {
      const lvl_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setLevel(lvl_r2));
    });
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const lvl_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", lvl_r2.id === ((tmp_10_0 = \u0275\u0275pipeBind1(1, 4, ctx_r2.level)) == null ? null : tmp_10_0.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lvl_r2.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r2.display_name || lvl_r2.name, " ");
  }
}
var _ExploreLevelSelectComponent = class _ExploreLevelSelectComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._state = inject(ExploreStateService);
    this.levels = this._org.active_levels;
    this.level = this._state.level;
    this.setLevel = (lvl) => this._state.setLevel(lvl.id);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      const levels = yield nextValueFrom(this._org.active_levels);
    });
  }
};
_ExploreLevelSelectComponent.\u0275fac = function ExploreLevelSelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreLevelSelectComponent)();
};
_ExploreLevelSelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreLevelSelectComponent, selectors: [["explore-level-select"]], standalone: false, decls: 4, vars: 2, consts: [[1, "m-2", "overflow-hidden", "rounded", "border", "border-solid", "border-base-300", "bg-base-100", "shadow"], ["matRipple", "", 1, "flex", "h-16", "w-16", "flex-col", "items-center", "justify-center", "border-none", "p-2", 3, "active"], ["matRipple", "", 1, "flex", "h-16", "w-16", "flex-col", "items-center", "justify-center", "border-none", "p-2", 3, "click"], [1, "text-2xl"], [1, "m-0", "whitespace-nowrap", "text-sm"]], template: function ExploreLevelSelectComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, ExploreLevelSelectComponent_For_2_Template, 6, 6, "button", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx.levels));
  }
}, dependencies: [AsyncPipe], styles: ["\n\n.active[_ngcontent-%COMP%] {\n  background: var(--s) !important;\n  color: #fff !important;\n}\nbutton[_ngcontent-%COMP%]:not(:first-child) {\n  border-top: 1px solid var(--b3) !important;\n}\n/*# sourceMappingURL=explore-level-select.component.css.map */"] });
var ExploreLevelSelectComponent = _ExploreLevelSelectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLevelSelectComponent, [{
    type: Component,
    args: [{ selector: "explore-level-select", template: `
        <div
            class="m-2 overflow-hidden rounded border border-solid border-base-300 bg-base-100 shadow"
        >
            @for (lvl of levels | async; track lvl) {
                <button
                    class="flex h-16 w-16 flex-col items-center justify-center border-none p-2"
                    [class.active]="lvl.id === (level | async)?.id"
                    (click)="setLevel(lvl)"
                    matRipple
                >
                    <div class="text-2xl">{{ lvl.number }}</div>
                    <p class="m-0 whitespace-nowrap text-sm">
                        {{ lvl.display_name || lvl.name }}
                    </p>
                </button>
            }
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;9dc613e822670b6892e532a4fb58c590f8b1ea98aa6165dbcb2128676839d028;/home/runner/work/user-interfaces/user-interfaces/apps/map-kiosk/src/app/explore-level-select.component.ts */\n.active {\n  background: var(--s) !important;\n  color: #fff !important;\n}\nbutton:not(:first-child) {\n  border-top: 1px solid var(--b3) !important;\n}\n/*# sourceMappingURL=explore-level-select.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreLevelSelectComponent, { className: "ExploreLevelSelectComponent", filePath: "apps/map-kiosk/src/app/explore-level-select.component.ts", lineNumber: 42 });
})();

// apps/map-kiosk/src/app/explore.component.ts
var _c021 = ["app-explore", ""];
var _c17 = () => ({ controls: true });
function ExploreComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "explore-search");
  }
}
function ExploreComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "accessibility-controls");
    \u0275\u0275elementEnd();
  }
}
function ExploreComponent_Conditional_10_Conditional_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ExploreComponent_Conditional_10_Conditional_1_For_8_Template_button_click_0_listener() {
      const lvl_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.setLevel(lvl_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r3.display_name || lvl_r3.name, " ");
  }
}
function ExploreComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 20)(1, "div", 13);
    \u0275\u0275text(2, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 12);
    \u0275\u0275text(4, "keyboard_arrow_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-menu", null, 1);
    \u0275\u0275repeaterCreate(7, ExploreComponent_Conditional_10_Conditional_1_For_8_Template, 2, 1, "button", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const levelMenu_r5 = \u0275\u0275reference(6);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matMenuTriggerFor", levelMenu_r5);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(9, 1, ctx_r3.levels));
  }
}
function ExploreComponent_Conditional_10_Conditional_3_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementStart(2, "div", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", value_r6.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", value_r6.name, " ");
  }
}
function ExploreComponent_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 20)(1, "div", 13);
    \u0275\u0275text(2, "Legend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 12);
    \u0275\u0275text(4, "keyboard_arrow_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-menu", null, 2);
    \u0275\u0275repeaterCreate(7, ExploreComponent_Conditional_10_Conditional_3_For_8_Template, 4, 3, "div", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const legendMenu_r7 = \u0275\u0275reference(6);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matMenuTriggerFor", legendMenu_r7);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r3.legend);
  }
}
function ExploreComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, ExploreComponent_Conditional_10_Conditional_1_Template, 10, 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, ExploreComponent_Conditional_10_Conditional_3_Template, 9, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = \u0275\u0275pipeBind1(2, 2, ctx_r3.levels)) == null ? null : tmp_2_0.length) ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.legend.length ? 3 : -1);
  }
}
function ExploreComponent_Conditional_14_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function ExploreComponent_Conditional_14_For_10_Template_button_click_0_listener() {
      const lvl_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setLevel(lvl_r10));
    });
    \u0275\u0275elementStart(2, "div", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const lvl_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-30", lvl_r10.id !== ((tmp_12_0 = \u0275\u0275pipeBind1(1, 3, ctx_r3.level)) == null ? null : tmp_12_0.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", lvl_r10.display_name || lvl_r10.name, " ");
  }
}
function ExploreComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ExploreComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.show_levels = !ctx_r3.show_levels);
    });
    \u0275\u0275elementStart(1, "icon", 12);
    \u0275\u0275text(2, "corporate_fare");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15);
    \u0275\u0275repeaterCreate(9, ExploreComponent_Conditional_14_For_10_Template, 4, 5, "button", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "hr", 16);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.show_levels ? "keyboard_arrow_up" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r3.show_levels ? "show" : "hide");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 2, ctx_r3.levels));
  }
}
function ExploreComponent_Conditional_16_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementStart(2, "div", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", value_r12.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", value_r12.name, " ");
  }
}
function ExploreComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ExploreComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.show_legend = !ctx_r3.show_legend);
    });
    \u0275\u0275elementStart(1, "icon", 12);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4, "Legend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15);
    \u0275\u0275repeaterCreate(9, ExploreComponent_Conditional_16_For_10_Template, 4, 3, "div", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "hr", 16);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.show_legend ? "keyboard_arrow_up" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r3.show_legend ? "show" : "hide");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.legend);
  }
}
var _ExploreComponent = class _ExploreComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ExploreStateService);
    this._s = inject(ExploreSpacesService);
    this._desks = inject(ExploreDesksService);
    this._zones = inject(ExploreZonesService);
    this._parking = inject(ExploreParkingService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._spaces = inject(SpacesService);
    this._dialog = inject(MatDialog);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._space_pipe = inject(SpacePipe);
    this._maps = inject(MapsPeopleService);
    this.reset_delay = 180;
    this.show_levels = true;
    this.show_legend = false;
    this.show_accessibility = false;
    this.legend = [
      { id: "free", name: "Space Available", color: "#43a047" },
      { id: "busy", name: "Space In Use", color: "#e53935" },
      { id: "pending", name: "Space Pending", color: "#ffb300" },
      { id: "not-bookable", name: "Space Not-bookable", color: "#ccc" }
    ];
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, building]) => {
      return (this._settings.get("app.use_region") ? flatten(this._org.buildings.filter((bld) => region.id === bld.parent_id).map((bld) => this._org.levelsForBuilding(bld).map((_) => __spreadProps(__spreadValues({}, _), {
        display_name: `${bld.display_name} - ${_.display_name}`
      })))) : this._org.levelsForBuilding(building)) || [];
    }));
    this.level = this._state.level;
    this.url = this._state.map_url;
    this.styles = this._state.map_styles;
    this.positions = this._state.map_positions;
    this.features = this._state.map_features;
    this.actions = this._state.map_actions;
    this.labels = this._state.map_labels;
    this.options = this._state.options;
    this.locate = "";
    this.onMouse = () => this.timeout("reset", () => this.resetKiosk(), this.reset_delay * 1e3);
    this.onTouch = () => this.timeout("reset", () => this.resetKiosk(), this.reset_delay * 1e3);
    this.setOptions = (o) => this._state.setOptions(o);
    this.setLevel = (lvl) => this._state.setLevel(lvl.id);
    this.use_mapsindoors$ = this._maps.available$;
  }
  get logo() {
    return this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light");
  }
  get time() {
    return startOfMinute(Date.now());
  }
  get legend_visible() {
    return this._settings.get("app.explore.show_legend") !== false;
  }
  get hide_zones() {
    return this._settings.get("app.explore.hide_zones");
  }
  updateZoom(zoom) {
    this._state.setPositions(zoom, this._state.positions.center);
  }
  updateCenter(center) {
    this._state.setPositions(this._state.positions.zoom, center);
  }
  toggleZones(enabled) {
    return __async(this, null, function* () {
      const options = yield nextValueFrom(this.options);
      const disable = !enabled ? unique([...options.disable || [], "zones", "devices"]) : options.disable.filter((_) => _ !== "zones" && _ !== "devices") || [];
      this.setOptions({ disable });
    });
  }
  get can_search() {
    return !!this._settings.get("app.explore.search_enabled");
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (location.hash.includes("public=true") || location.search.includes("public=true")) {
        this._state.setOptions({ is_public: true });
      }
      yield this._spaces.initialised.pipe(first((_) => _)).toPromise();
      this._desks.setOptions({ custom: true });
      this.reset_delay = this._settings.get("app.inactivity_timeout_secs") || 180;
      this.resetKiosk(false);
      VirtualKeyboardComponent.enabled = localStorage.getItem("OSK.enabled") === "true";
      this.subscription("level", this._state.level.subscribe(() => this.timeout("update_location", () => {
        this._state.setFeatures("_located", []);
      })));
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => __async(this, null, function* () {
        if (params.has("level")) {
          log("Explore", "Level changed to:", params.get("level"));
          this._state.setLevel(params.get("level"));
          const level = this._org.levelWithID([params.get("level")]);
          if (!level)
            return;
          const bld = this._org.buildings.find((_) => level.parent_id === _.id);
          if (!bld)
            return;
          this._org.building = bld;
        }
        this._state.setFeatures("_located", []);
        if (params.has("space")) {
          log("Explore", "Focusing on space:", params.get("space"));
          this.locateSpace(params.get("space"));
        } else if (params.has("user")) {
          log("Explore", "Focusing on user:", params.get("user"));
          let user = this._settings.value("last_search");
          if (!user || params.get("user") !== user.email) {
            user = null;
            user = yield showStaff(params.get("user")).toPromise();
          }
          if (!user)
            return notifyError(`Unable to user details for ${params.get("user")}`);
          this.locateUser(user instanceof Array ? user[0] : user).catch((_) => {
            notifyError(`Unable to locate ${params.get("user")}`);
            this._router.navigate([], {
              relativeTo: this._route,
              queryParams: {}
            });
          });
        } else if (params.has("feature")) {
          log("Explore", "Focusing on feature:", params.get("feature"));
          this.timeout("update_location", () => {
            this._state.setFeatures("_located", [
              {
                location: params.get("feature"),
                content: MapPinComponent,
                data: {}
              }
            ]);
          });
        } else if (params.has("locate")) {
          log("Explore", "Focusing on location:", params.get("locate"));
          this.locate = params.get("locate");
          this.timeout("update_location", () => {
            this._state.setFeatures("_located", [
              {
                location: params.get("locate"),
                content: MapPinComponent,
                data: {}
              }
            ]);
          });
        } else {
          this.timeout("update_location", () => {
            this._state.setFeatures("_located", []);
          });
        }
      })));
    });
  }
  locateSpace(id) {
    return __async(this, null, function* () {
      const space = yield this._space_pipe.transform(id);
      if (!space)
        return;
      this._state.setLevel(this._org.levelWithID(space.zones)?.id);
      const feature = {
        location: space.map_id,
        content: MapPinComponent,
        data: {
          message: `${space.display_name || space.name} is here`
        }
      };
      this.timeout("update_location", () => this._state.setFeatures("_located", [feature]));
    });
  }
  locateUser(user) {
    return __async(this, null, function* () {
      let locate_details = this._org.binding("location_services");
      if (!locate_details)
        return;
      if (typeof locate_details === "string") {
        locate_details = {
          system_id: locate_details,
          module: "LocationServices"
        };
      }
      const mod = Ea(locate_details.system_id, locate_details.module);
      const locations = (yield mod.execute("locate_user", [
        user.email,
        user.username || user.id
      ])).map((i) => new MapLocation(i));
      locations.sort((a, b) => locate_details.priority.indexOf(a.type) - locate_details.priority.indexOf(b.type));
      if (!locations?.length) {
        throw "No locations for the given user";
      }
      this._state.setLevel(this._org.levelWithID([locations[0]?.level])?.id);
      const pos = locations[0].position;
      const { coordinates_from } = locations[0];
      const feature = {
        location: locations[0].type === "wireless" ? {
          x: coordinates_from?.includes("right") ? 1 - pos.x : pos.x,
          y: coordinates_from?.includes("bottom") ? 1 - pos.y : pos.y
        } : pos,
        content: locations[0].type === "wireless" ? MapRadiusComponent : MapPinComponent,
        z_index: 99,
        data: {
          message: `${user.name} is here`,
          radius: locations[0].variance,
          last_seen: locations[0].last_seen
        }
      };
      this.timeout("update_location", () => {
        this._state.setFeatures("_located", [feature]);
      });
    });
  }
  resetKiosk(navigate = true) {
    if (document.activeElement?.blur)
      document.activeElement?.blur();
    const level = localStorage.getItem("KIOSK.level");
    this._state.setPositions(1, { x: 0.5, y: 0.5 });
    if (level)
      this._state.setLevel(level);
    this._dialog.closeAll();
    if (navigate)
      this._router.navigate(["/"]);
  }
};
_ExploreComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ExploreComponent_BaseFactory;
  return function ExploreComponent_Factory(__ngFactoryType__) {
    return (\u0275ExploreComponent_BaseFactory || (\u0275ExploreComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ExploreComponent)))(__ngFactoryType__ || _ExploreComponent);
  };
})();
_ExploreComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreComponent, selectors: [["", "app-explore", ""]], hostBindings: function ExploreComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("mousedown", function ExploreComponent_mousedown_HostBindingHandler() {
      return ctx.onMouse();
    }, \u0275\u0275resolveWindow)("touchstart", function ExploreComponent_touchstart_HostBindingHandler() {
      return ctx.onTouch();
    }, \u0275\u0275resolveWindow);
  }
}, standalone: false, features: [\u0275\u0275ProvidersFeature([
  ExploreSpacesService,
  ExploreDesksService,
  ExploreZonesService,
  ExploreParkingService,
  SpacePipe
]), \u0275\u0275InheritDefinitionFeature], attrs: _c021, decls: 37, vars: 36, consts: [["accessibility_controls", ""], ["levelMenu", "matMenu"], ["legendMenu", "matMenu"], ["topbar", "", 1, "relative", "flex", "items-center", "justify-between", "border-b", "border-base-300", "bg-base-100", "px-4", "py-2", "text-base-content"], ["matRipple", "", "routerLink", "/", 1, "rounded", "p-2", "text-2xl"], ["auth", "", "alt", "Logo", 1, "h-12", 3, "source"], [1, "absolute", "right-2", "top-1/2", "flex", "-translate-y-1/2", "items-center"], ["icon", "", "matRipple", "", "customTooltip", "", 1, "flex", "bg-base-200", "sm:hidden", 3, "content"], ["options", "", 1, "flex", "items-center", "space-x-2", "bg-base-content", "p-2", "text-base-100", "sm:hidden"], [1, "flex", "h-1/2", "flex-1"], ["sidebar", "", 1, "hidden", "w-[20rem]", "border-r", "border-base-300", "bg-base-100", "px-2", "py-4", "text-base-content", "sm:block"], ["btn", "", "matRipple", "", 1, "items", "clear", "flex", "w-full", "space-x-4", "hover:bg-base-200", 3, "click"], [1, "text-2xl"], [1, "flex-1", "text-left", "font-medium"], [1, "px-8"], [1, "space-y-2", "py-4"], [1, "mx-auto", "w-[calc(100%-4rem)]"], [1, "relative", "h-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "labels", "options", "focus"], [1, "w-[18rem]", "rounded", "bg-base-100", "p-2"], ["btn", "", "matRipple", "", 1, "clear", "text-base-100", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "flex", "w-full", "items-center", "space-x-4", "rounded", "px-4", "py-2", "hover:bg-base-200"], [1, "h-3", "w-3", "rounded-full"], [1, "text-left", "opacity-60"], ["btn", "", "matRipple", "", 1, "clear", "w-full", "hover:bg-base-200", "hover:opacity-100", 3, "opacity-30"], ["btn", "", "matRipple", "", 1, "clear", "w-full", "hover:bg-base-200", "hover:opacity-100", 3, "click"], [1, "w-full", "text-left"]], template: function ExploreComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "a", 4);
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275conditionalCreate(4, ExploreComponent_Conditional_4_Template, 1, 0, "explore-search");
    \u0275\u0275elementStart(5, "button", 7)(6, "icon");
    \u0275\u0275text(7, "accessible");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ExploreComponent_ng_template_8_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, ExploreComponent_Conditional_10_Template, 4, 4, "div", 8);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementStart(12, "div", 9)(13, "div", 10);
    \u0275\u0275conditionalCreate(14, ExploreComponent_Conditional_14_Template, 13, 4);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275conditionalCreate(16, ExploreComponent_Conditional_16_Template, 12, 2);
    \u0275\u0275elementStart(17, "button", 11);
    \u0275\u0275listener("click", function ExploreComponent_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show_accessibility = !ctx.show_accessibility);
    });
    \u0275\u0275elementStart(18, "icon", 12);
    \u0275\u0275text(19, "accessible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 13);
    \u0275\u0275text(21, " Accessibility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "icon", 12);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 14)(25, "div", 15);
    \u0275\u0275element(26, "accessibility-controls");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "hr", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 17)(29, "interactive-map", 18);
    \u0275\u0275pipe(30, "async");
    \u0275\u0275pipe(31, "async");
    \u0275\u0275pipe(32, "async");
    \u0275\u0275pipe(33, "async");
    \u0275\u0275pipe(34, "async");
    \u0275\u0275pipe(35, "async");
    \u0275\u0275pipe(36, "async");
    \u0275\u0275listener("zoomChange", function ExploreComponent_Template_interactive_map_zoomChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateZoom($event));
    })("centerChange", function ExploreComponent_Template_interactive_map_centerChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateCenter($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_10_0;
    let tmp_11_0;
    const accessibility_controls_r13 = \u0275\u0275reference(9);
    \u0275\u0275advance(2);
    \u0275\u0275property("source", (ctx.logo == null ? null : ctx.logo.src) || ctx.logo);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.can_search ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("content", accessibility_controls_r13);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_4_0 = \u0275\u0275pipeBind1(11, 17, ctx.levels)) == null ? null : tmp_4_0.length) || ctx.legend.length ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_5_0 = \u0275\u0275pipeBind1(15, 19, ctx.levels)) == null ? null : tmp_5_0.length) ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.legend.length && ctx.legend_visible ? 16 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.show_accessibility ? "keyboard_arrow_up" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx.show_accessibility ? "show" : "hide");
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275pipeBind1(30, 21, ctx.url))("zoom", (tmp_10_0 = \u0275\u0275pipeBind1(31, 23, ctx.positions)) == null ? null : tmp_10_0.zoom)("center", (tmp_11_0 = \u0275\u0275pipeBind1(32, 25, ctx.positions)) == null ? null : tmp_11_0.center)("styles", \u0275\u0275pipeBind1(33, 27, ctx.styles))("features", \u0275\u0275pipeBind1(34, 29, ctx.features))("actions", \u0275\u0275pipeBind1(35, 31, ctx.actions))("labels", \u0275\u0275pipeBind1(36, 33, ctx.labels))("options", \u0275\u0275pureFunction0(35, _c17))("focus", ctx.locate);
  }
}, dependencies: [RouterLink, ExploreSearchComponent, InteractiveMapComponent, IconComponent, CustomTooltipComponent, AuthenticatedImageDirective, AccessibilityControlsComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--b2);\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n/*# sourceMappingURL=explore.component.css.map */"], data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
var ExploreComponent = _ExploreComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreComponent, [{
    type: Component,
    args: [{ selector: "[app-explore]", template: `
        <div
            topbar
            class="relative flex items-center justify-between border-b border-base-300 bg-base-100 px-4 py-2 text-base-content"
        >
            <a matRipple routerLink="/" class="rounded p-2 text-2xl">
                <img
                    auth
                    class="h-12"
                    alt="Logo"
                    [source]="logo?.src || logo"
                />
            </a>
            <div
                class="absolute right-2 top-1/2 flex -translate-y-1/2 items-center"
            >
                @if (can_search) {
                    <explore-search></explore-search>
                }
                <button
                    icon
                    matRipple
                    customTooltip
                    [content]="accessibility_controls"
                    class="flex bg-base-200 sm:hidden"
                >
                    <icon>accessible</icon>
                </button>
                <ng-template #accessibility_controls>
                    <div class="w-[18rem] rounded bg-base-100 p-2">
                        <accessibility-controls></accessibility-controls>
                    </div>
                </ng-template>
            </div>
        </div>
        @if ((levels | async)?.length || legend.length) {
            <div
                options
                class="flex items-center space-x-2 bg-base-content p-2 text-base-100 sm:hidden"
            >
                @if ((levels | async)?.length) {
                    <button
                        btn
                        matRipple
                        class="clear text-base-100"
                        [matMenuTriggerFor]="levelMenu"
                    >
                        <div class="flex-1 text-left font-medium">Level</div>
                        <icon class="text-2xl">keyboard_arrow_down</icon>
                    </button>
                    <mat-menu #levelMenu="matMenu">
                        @for (lvl of levels | async; track lvl) {
                            <button mat-menu-item (click)="setLevel(lvl)">
                                {{ lvl.display_name || lvl.name }}
                            </button>
                        }
                    </mat-menu>
                }
                @if (legend.length) {
                    <button
                        btn
                        matRipple
                        class="clear text-base-100"
                        [matMenuTriggerFor]="legendMenu"
                    >
                        <div class="flex-1 text-left font-medium">Legend</div>
                        <icon class="text-2xl">keyboard_arrow_down</icon>
                    </button>
                    <mat-menu #legendMenu="matMenu">
                        @for (value of legend; track value) {
                            <div
                                class="flex w-full items-center space-x-4 rounded px-4 py-2 hover:bg-base-200"
                            >
                                <div
                                    class="h-3 w-3 rounded-full"
                                    [style.background-color]="value.color"
                                ></div>
                                <div class="text-left opacity-60">
                                    {{ value.name }}
                                </div>
                            </div>
                        }
                    </mat-menu>
                }
            </div>
        }
        <div class="flex h-1/2 flex-1">
            <div
                sidebar
                class="hidden w-[20rem] border-r border-base-300 bg-base-100 px-2 py-4 text-base-content sm:block"
            >
                @if ((levels | async)?.length) {
                    <button
                        btn
                        matRipple
                        class="items clear flex w-full space-x-4 hover:bg-base-200"
                        (click)="show_levels = !show_levels"
                    >
                        <icon class="text-2xl">corporate_fare</icon>
                        <div class="flex-1 text-left font-medium">Level</div>
                        <icon class="text-2xl">{{
                            show_levels
                                ? 'keyboard_arrow_up'
                                : 'keyboard_arrow_down'
                        }}</icon>
                    </button>
                    <div class="px-8" [@show]="show_levels ? 'show' : 'hide'">
                        <div class="space-y-2 py-4">
                            @for (lvl of levels | async; track lvl) {
                                <button
                                    btn
                                    matRipple
                                    class="clear w-full hover:bg-base-200 hover:opacity-100"
                                    [class.opacity-30]="
                                        lvl.id !== (level | async)?.id
                                    "
                                    (click)="setLevel(lvl)"
                                >
                                    <div class="w-full text-left">
                                        {{ lvl.display_name || lvl.name }}
                                    </div>
                                </button>
                            }
                        </div>
                    </div>
                    <hr class="mx-auto w-[calc(100%-4rem)]" />
                }
                @if (legend.length && legend_visible) {
                    <button
                        btn
                        matRipple
                        class="items clear flex w-full space-x-4 hover:bg-base-200"
                        (click)="show_legend = !show_legend"
                    >
                        <icon class="text-2xl">place</icon>
                        <div class="flex-1 text-left font-medium">Legend</div>
                        <icon class="text-2xl">{{
                            show_legend
                                ? 'keyboard_arrow_up'
                                : 'keyboard_arrow_down'
                        }}</icon>
                    </button>
                    <div class="px-8" [@show]="show_legend ? 'show' : 'hide'">
                        <div class="space-y-2 py-4">
                            @for (value of legend; track value) {
                                <div
                                    class="flex w-full items-center space-x-4 rounded px-4 py-2 hover:bg-base-200"
                                >
                                    <div
                                        class="h-3 w-3 rounded-full"
                                        [style.background-color]="value.color"
                                    ></div>
                                    <div class="text-left opacity-60">
                                        {{ value.name }}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <hr class="mx-auto w-[calc(100%-4rem)]" />
                }
                <button
                    btn
                    matRipple
                    class="items clear flex w-full space-x-4 hover:bg-base-200"
                    (click)="show_accessibility = !show_accessibility"
                >
                    <icon class="text-2xl">accessible</icon>
                    <div class="flex-1 text-left font-medium">
                        Accessibility
                    </div>
                    <icon class="text-2xl">{{
                        show_accessibility
                            ? 'keyboard_arrow_up'
                            : 'keyboard_arrow_down'
                    }}</icon>
                </button>
                <div
                    class="px-8"
                    [@show]="show_accessibility ? 'show' : 'hide'"
                >
                    <div class="space-y-2 py-4">
                        <accessibility-controls></accessibility-controls>
                    </div>
                </div>
                <hr class="mx-auto w-[calc(100%-4rem)]" />
            </div>
            <div class="relative h-full flex-1">
                <interactive-map
                    [src]="url | async"
                    [zoom]="(positions | async)?.zoom"
                    [center]="(positions | async)?.center"
                    (zoomChange)="updateZoom($event)"
                    (centerChange)="updateCenter($event)"
                    [styles]="styles | async"
                    [features]="features | async"
                    [actions]="actions | async"
                    [labels]="labels | async"
                    [options]="{ controls: true }"
                    [focus]="locate"
                ></interactive-map>
            </div>
        </div>
    `, providers: [
      ExploreSpacesService,
      ExploreDesksService,
      ExploreZonesService,
      ExploreParkingService,
      SpacePipe
    ], animations: [ANIMATION_SHOW_CONTRACT_EXPAND], standalone: false, styles: ["/* angular:styles/component:css;0efb63fb3533e4684cb691887ccc42ac31ccb02329247af79741317828cefb66;/home/runner/work/user-interfaces/user-interfaces/apps/map-kiosk/src/app/explore.component.ts */\n:host {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--b2);\n}\nhr {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n/*# sourceMappingURL=explore.component.css.map */\n"] }]
  }], null, { onMouse: [{
    type: HostListener,
    args: ["window:mousedown"]
  }], onTouch: [{
    type: HostListener,
    args: ["window:touchstart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreComponent, { className: "ExploreComponent", filePath: "apps/map-kiosk/src/app/explore.component.ts", lineNumber: 272 });
})();

// apps/visitor-kiosk/src/app/explore.module.ts
var ROUTES = [
  { path: "", component: ExploreComponent },
  { path: ":search_type", component: ExploreComponent }
];
var STANDALONE_COMPONENTS2 = [
  InteractiveMapComponent,
  IconComponent,
  CustomTooltipComponent,
  AuthenticatedImageDirective
];
var _AppExploreModule = class _AppExploreModule {
};
_AppExploreModule.\u0275fac = function AppExploreModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppExploreModule)();
};
_AppExploreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppExploreModule });
_AppExploreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  RouterModule.forChild(ROUTES),
  SharedExploreModule,
  FormsModule,
  MatSlideToggleModule,
  InteractiveMapComponent,
  CustomTooltipComponent
] });
var AppExploreModule = _AppExploreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppExploreModule, [{
    type: NgModule,
    args: [{
      declarations: [
        ExploreComponent,
        ExploreLevelSelectComponent,
        AccessibilityControlsComponent
      ],
      imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedExploreModule,
        FormsModule,
        MatSlideToggleModule,
        ...STANDALONE_COMPONENTS2
      ]
    }]
  }], null, null);
})();
export {
  AppExploreModule
};
//# sourceMappingURL=explore.module-T6KBJZRV.js.map
