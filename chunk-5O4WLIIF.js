import {
  ActiveDescendantKeyManager,
  Ar,
  AssetRequest,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Bi,
  Booking,
  BreakpointObserver,
  Breakpoints,
  CdkPortal,
  CdkScrollableModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  CurrencyPipe,
  DOWN_ARROW,
  DatePipe,
  DefaultValueAccessor,
  Directionality,
  Directive,
  ENTER,
  ESCAPE,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  HostListener,
  IconComponent,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  MAT_DIALOG_DATA,
  MAT_FORM_FIELD,
  MAT_OPTGROUP,
  MAT_OPTION_PARENT_COMPONENT,
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
  MatOption,
  MatOptionModule,
  MatOptionSelectionChange,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatSuffix,
  MaxLengthValidator,
  NG_VALUE_ACCESSOR,
  NavigationEnd,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  NgZone,
  Observable,
  OrganisationService,
  Output,
  Overlay,
  OverlayConfig,
  OverlayModule,
  Pc,
  Pipe,
  Platform,
  PortalModule,
  ReactiveFormsModule,
  Renderer2,
  Router,
  SafePipe,
  SanitizePipe,
  SettingsService,
  Space,
  StaffUser,
  Subject,
  Subscription,
  TAB,
  TemplatePortal,
  TemplatePortalDirective,
  TemplateRef,
  TranslatePipe,
  UP_ARROW,
  USER_DOMAIN,
  User,
  Validators,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  ViewportRuler,
  _IdGenerator,
  _animationsDisabled,
  _countGroupLabelsBeforeOption,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  _getOptionScrollPosition,
  _u,
  addAriaReferencedId,
  addDays,
  addHours,
  addMinutes,
  addYears,
  afterNextRender,
  bookedResourceList,
  booleanAttribute,
  bt,
  catchError,
  coerceArray,
  combineLatest,
  createBooking,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  currentUser,
  current_user,
  debounceTime,
  defer,
  delay,
  differenceInMinutes,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  ee,
  endOfDay,
  filter,
  first,
  flatten,
  forkJoin,
  format,
  forwardRef,
  fu,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  getInvalidFields,
  getUnixTime,
  hasModifierKey,
  i18n,
  inject,
  isAfter,
  isBefore,
  lastValueFrom,
  map,
  merge,
  nextValueFrom,
  notifyError,
  notifyWarn,
  oc,
  of,
  predictableRandomInt,
  queryBookings,
  removeAriaReferencedId,
  removeBooking,
  roundToNearestMinutes,
  rulesForResource,
  saveBooking,
  searchGuests,
  setClassMetadata,
  setMonth,
  shareReplay,
  startOfDay,
  startOfMinute,
  startWith,
  stringToMinutes,
  switchMap,
  take,
  tap,
  timer,
  toDate,
  toQueryString,
  unique,
  updateSpaceList,
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
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-267XGI7B.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

// node_modules/date-fns/endOfMinute.js
function endOfMinute(date, options) {
  const _date = toDate(date, options?.in);
  _date.setSeconds(59, 999);
  return _date;
}

// node_modules/date-fns/setHours.js
function setHours(date, hours, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(hours);
  return _date;
}

// node_modules/date-fns/subHours.js
function subHours(date, amount, options) {
  return addHours(date, -amount, options);
}

// libs/components/src/lib/virtual-keyboard.component.ts
var _c0 = ["keyboard", ""];
var _c1 = ["*"];
var _forTrack0 = ($index, $item) => $item[0];
function VirtualKeyboardComponent_ng_template_1_For_2_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("bg-success", ctx_r1.state === "shift");
  }
}
function VirtualKeyboardComponent_ng_template_1_For_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("focus", function VirtualKeyboardComponent_ng_template_1_For_2_For_2_Template_button_focus_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.focusInput());
    })("click", function VirtualKeyboardComponent_ng_template_1_For_2_For_2_Template_button_click_0_listener() {
      const key_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleKeyPress(key_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, VirtualKeyboardComponent_ng_template_1_For_2_For_2_Conditional_2_Template, 1, 2, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r3 = ctx.$implicit;
    \u0275\u0275classProp("special", key_r3[0] === "{" && key_r3.length > 1)("space", key_r3 === "{space}");
    \u0275\u0275attribute("key", key_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", key_r3 === "{space}" ? "Space" : key_r3 === "{caps}" ? "Caps Lock" : key_r3 === "{backspace}" ? "Backspace" : key_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(key_r3 === "{caps}" ? 2 : -1);
  }
}
function VirtualKeyboardComponent_ng_template_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, VirtualKeyboardComponent_ng_template_1_For_2_For_2_Template, 3, 7, "button", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r4);
  }
}
function VirtualKeyboardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275repeaterCreate(1, VirtualKeyboardComponent_ng_template_1_For_2_Template, 3, 0, "div", 2, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.keyset);
  }
}
var DEFAULT_KEYS = [
  "0123456789".split(""),
  "qwertyuiop".split(""),
  "asdfghjkl".split(""),
  "zxcvbnm".split(""),
  ["{caps}", "{space}", "{backspace}"]
];
var _VirtualKeyboardComponent = class _VirtualKeyboardComponent extends AsyncHandler {
  constructor() {
    super();
    this._element = inject(ElementRef);
    this._overlay = inject(Overlay);
    this.keyset = DEFAULT_KEYS;
    this.state = "normal";
    this._overlay_ref = null;
    this.onFocus = () => {
      if (!_VirtualKeyboardComponent.enabled)
        return;
      this.open();
      this.clearTimeout("blur");
    };
    this.onBlur = () => this.timeout("blur", () => this.close());
  }
  ngOnChanges(changes) {
    if (changes.keyset) {
      if (!this.keyset)
        this.keyset = DEFAULT_KEYS;
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.close();
  }
  focusInput() {
    this._element?.nativeElement?.blur();
    this._element?.nativeElement?.focus();
  }
  open() {
    if (this._overlay_ref)
      return;
    if (!this._portal)
      return;
    this._overlay_ref = this._overlay.create({
      positionStrategy: this._overlay.position().global().bottom().centerHorizontally()
    });
    this._overlay_ref.attach(this._portal);
  }
  close() {
    if (this._overlay_ref) {
      this._overlay_ref.dispose();
      this._overlay_ref = null;
    }
  }
  handleKeyPress(key) {
    let cursor_pos = this._element.nativeElement.selectionStart;
    const str = this._element.nativeElement.value || "";
    switch (key.toLowerCase()) {
      case "{caps}":
      case "{shift}":
        this.state = "shift";
        break;
      case "{backspace}":
        this._element.nativeElement.value = `${str.substr(0, cursor_pos - 1)}${str.substr(cursor_pos, str.length)}`;
        cursor_pos = Math.max(0, cursor_pos - 1);
        break;
      case "{space}":
        this._element.nativeElement.value = `${str.substr(0, cursor_pos)}${" "}${str.substr(cursor_pos, str.length)}`;
        cursor_pos += 1;
        break;
      default:
        if (this.state === "shift")
          this.state = "normal";
        this._element.nativeElement.value = `${str.substr(0, cursor_pos)}${key}${str.substr(cursor_pos, str.length)}`;
        cursor_pos += 1;
    }
    this._element.nativeElement.dispatchEvent(new InputEvent("input"));
    this.updateKeyState();
    this.timeout("focus", () => {
      this.focusInput();
      this._element.nativeElement.selectionStart = cursor_pos;
      this._element.nativeElement.selectionEnd = cursor_pos;
    }, 50);
  }
  updateKeyState() {
    this.keyset = this.keyset.map((_2) => _2.map((k2) => k2.length > 1 ? k2 : k2[this.state !== "normal" ? "toUpperCase" : "toLowerCase"]()));
  }
};
_VirtualKeyboardComponent.\u0275fac = function VirtualKeyboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VirtualKeyboardComponent)();
};
_VirtualKeyboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VirtualKeyboardComponent, selectors: [["input", "keyboard", ""], ["textarea", "keyboard", ""]], viewQuery: function VirtualKeyboardComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(CdkPortal, 5);
  }
  if (rf & 2) {
    let _t2;
    \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._portal = _t2.first);
  }
}, hostBindings: function VirtualKeyboardComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("focus", function VirtualKeyboardComponent_focus_HostBindingHandler() {
      return ctx.onFocus();
    })("blur", function VirtualKeyboardComponent_blur_HostBindingHandler() {
      return ctx.onBlur();
    });
  }
}, inputs: { keyset: "keyset" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["cdk-portal", ""], ["keyboard-view", "", 1, "flex", "w-screen", "flex-col", "space-y-4", "border-t", "border-base-200", "bg-base-200", "p-2"], ["row", "", 1, "flex", "items-center", "justify-center", "space-x-2"], ["matRipple", "", "tabindex", "0", 1, "relative", "cursor-pointer", "rounded-xl", "border", "border-base-200", "bg-base-100", "p-2", 3, "special", "space"], ["matRipple", "", "tabindex", "0", 1, "relative", "cursor-pointer", "rounded-xl", "border", "border-base-200", "bg-base-100", "p-2", 3, "focus", "click"], ["dot", "", 1, "absolute", "right-2", "top-2", "h-2", "w-2", "rounded-full", "bg-base-200", 3, "bg-success"], ["dot", "", 1, "absolute", "right-2", "top-2", "h-2", "w-2", "rounded-full", "bg-base-200"]], template: function VirtualKeyboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275projection(0);
    \u0275\u0275template(1, VirtualKeyboardComponent_ng_template_1_Template, 3, 0, "ng-template", 0);
  }
}, dependencies: [MatRippleModule, MatRipple, PortalModule, TemplatePortalDirective], styles: ["\n\n[key][_ngcontent-%COMP%] {\n  height: 3.5rem;\n  width: 4rem;\n  transition: box-shadow 200ms, top 200ms;\n  box-shadow: 0 4px 0 0.04px rgba(0, 0, 0, 0.1);\n}\n[key].special[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n[key].space[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 10rem;\n  max-width: 25rem;\n}\n[key][_ngcontent-%COMP%]:hover {\n  top: 2px;\n  box-shadow: 0 2px 0 0.04px rgba(0, 0, 0, 0.1);\n}\n[key][_ngcontent-%COMP%]:active {\n  top: 4px;\n  box-shadow: 0 0 0 0.04px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=virtual-keyboard.component.css.map */"] });
var VirtualKeyboardComponent = _VirtualKeyboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VirtualKeyboardComponent, [{
    type: Component,
    args: [{ selector: "input[keyboard],textarea[keyboard]", template: `
        <ng-content />
        <ng-template cdk-portal>
            <div
                keyboard-view
                class="flex w-screen flex-col space-y-4 border-t border-base-200 bg-base-200 p-2"
            >
                @for (row of keyset; track row[0]) {
                    <div row class="flex items-center justify-center space-x-2">
                        @for (key of row; track key) {
                            <button
                                matRipple
                                [attr.key]="key"
                                tabindex="0"
                                class="relative cursor-pointer rounded-xl border border-base-200 bg-base-100 p-2"
                                [class.special]="
                                    key[0] === '{' && key.length > 1
                                "
                                [class.space]="key === '{space}'"
                                (focus)="focusInput()"
                                (click)="handleKeyPress(key)"
                            >
                                {{
                                    key === '{space}'
                                        ? 'Space'
                                        : key === '{caps}'
                                          ? 'Caps Lock'
                                          : key === '{backspace}'
                                            ? 'Backspace'
                                            : key
                                }}
                                @if (key === '{caps}') {
                                    <div
                                        dot
                                        class="absolute right-2 top-2 h-2 w-2 rounded-full bg-base-200"
                                        [class.bg-success]="state === 'shift'"
                                    ></div>
                                }
                            </button>
                        }
                    </div>
                }
            </div>
        </ng-template>
    `, imports: [MatRippleModule, PortalModule], styles: ["/* angular:styles/component:css;7121e8e0f3a6ec31112fa4330c36a57119d4007e4a28e0345816f9f8d2c8ff0e;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/virtual-keyboard.component.ts */\n[key] {\n  height: 3.5rem;\n  width: 4rem;\n  transition: box-shadow 200ms, top 200ms;\n  box-shadow: 0 4px 0 0.04px rgba(0, 0, 0, 0.1);\n}\n[key].special {\n  width: 10rem;\n}\n[key].space {\n  flex: 1;\n  min-width: 10rem;\n  max-width: 25rem;\n}\n[key]:hover {\n  top: 2px;\n  box-shadow: 0 2px 0 0.04px rgba(0, 0, 0, 0.1);\n}\n[key]:active {\n  top: 4px;\n  box-shadow: 0 0 0 0.04px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=virtual-keyboard.component.css.map */\n"] }]
  }], () => [], { keyset: [{
    type: Input
  }], _portal: [{
    type: ViewChild,
    args: [CdkPortal]
  }], onFocus: [{
    type: HostListener,
    args: ["focus"]
  }], onBlur: [{
    type: HostListener,
    args: ["blur"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VirtualKeyboardComponent, { className: "VirtualKeyboardComponent", filePath: "libs/components/src/lib/virtual-keyboard.component.ts", lineNumber: 106 });
})();

// libs/users/src/lib/staff.fn.ts
var STAFF_ENDPOINT = "/api/staff/v1/people";
function searchStaff(q2) {
  const query = toQueryString({
    q: q2,
    fields: [
      "id",
      "name",
      "email",
      "username",
      "organisation",
      "department"
    ].join(",")
  });
  return ee(`${STAFF_ENDPOINT}${q2 ? "?" + query : ""}`).pipe(map((list) => list.map((item) => new StaffUser(item))));
}
function showStaff(id) {
  return ee(`${STAFF_ENDPOINT}/${encodeURIComponent(id)}`).pipe(map((item) => new StaffUser(item)));
}

// node_modules/@angular/material/fesm2022/autocomplete.mjs
var _c02 = ["panel"];
var _c12 = ["*"];
function MatAutocomplete_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1, 0);
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formFieldId_r1 = ctx.id;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1._classList);
    \u0275\u0275classProp("mat-mdc-autocomplete-visible", ctx_r1.showPanel)("mat-mdc-autocomplete-hidden", !ctx_r1.showPanel)("mat-autocomplete-panel-animations-enabled", !ctx_r1._animationsDisabled)("mat-primary", ctx_r1._color === "primary")("mat-accent", ctx_r1._color === "accent")("mat-warn", ctx_r1._color === "warn");
    \u0275\u0275property("id", ctx_r1.id);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1._getPanelAriaLabelledby(formFieldId_r1));
  }
}
var MatAutocompleteSelectedEvent = class {
  source;
  option;
  constructor(source, option) {
    this.source = source;
    this.option = option;
  }
};
var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new InjectionToken("mat-autocomplete-default-options", {
  providedIn: "root",
  factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
});
function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
  return {
    autoActiveFirstOption: false,
    autoSelectActiveOption: false,
    hideSingleSelectionIndicator: false,
    requireSelection: false,
    hasBackdrop: false
  };
}
var MatAutocomplete = class _MatAutocomplete {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS);
  _animationsDisabled = _animationsDisabled();
  _activeOptionChanges = Subscription.EMPTY;
  /** Manages active item in option list based on key events. */
  _keyManager;
  /** Whether the autocomplete panel should be visible, depending on option length. */
  showPanel = false;
  /** Whether the autocomplete panel is open. */
  get isOpen() {
    return this._isOpen && this.showPanel;
  }
  _isOpen = false;
  /** Latest trigger that opened the autocomplete. */
  _latestOpeningTrigger;
  /** @docs-private Sets the theme color of the panel. */
  _setColor(value) {
    this._color = value;
    this._changeDetectorRef.markForCheck();
  }
  /** @docs-private theme color of the panel */
  _color;
  // The @ViewChild query for TemplateRef here needs to be static because some code paths
  // lead to the overlay being created before change detection has finished for this component.
  // Notably, another component may trigger `focus` on the autocomplete-trigger.
  /** @docs-private */
  template;
  /** Element for the panel containing the autocomplete options. */
  panel;
  /** Reference to all options within the autocomplete. */
  options;
  /** Reference to all option groups within the autocomplete. */
  optionGroups;
  /** Aria label of the autocomplete. */
  ariaLabel;
  /** Input that can be used to specify the `aria-labelledby` attribute. */
  ariaLabelledby;
  /** Function that maps an option's control value to its display value in the trigger. */
  displayWith = null;
  /**
   * Whether the first option should be highlighted when the autocomplete panel is opened.
   * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
   */
  autoActiveFirstOption;
  /** Whether the active option should be selected as the user is navigating. */
  autoSelectActiveOption;
  /**
   * Whether the user is required to make a selection when they're interacting with the
   * autocomplete. If the user moves away from the autocomplete without selecting an option from
   * the list, the value will be reset. If the user opens the panel and closes it without
   * interacting or selecting a value, the initial value will be kept.
   */
  requireSelection;
  /**
   * Specify the width of the autocomplete panel.  Can be any CSS sizing value, otherwise it will
   * match the width of its host.
   */
  panelWidth;
  /** Whether ripples are disabled within the autocomplete panel. */
  disableRipple;
  /** Event that is emitted whenever an option from the list is selected. */
  optionSelected = new EventEmitter();
  /** Event that is emitted when the autocomplete panel is opened. */
  opened = new EventEmitter();
  /** Event that is emitted when the autocomplete panel is closed. */
  closed = new EventEmitter();
  /** Emits whenever an option is activated. */
  optionActivated = new EventEmitter();
  /**
   * Takes classes set on the host mat-autocomplete element and applies them to the panel
   * inside the overlay container to allow for easy styling.
   */
  set classList(value) {
    this._classList = value;
    this._elementRef.nativeElement.className = "";
  }
  _classList;
  /** Whether checkmark indicator for single-selection options is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._syncParentProperties();
  }
  _hideSingleSelectionIndicator;
  /** Syncs the parent state with the individual options. */
  _syncParentProperties() {
    if (this.options) {
      for (const option of this.options) {
        option._changeDetectorRef.markForCheck();
      }
    }
  }
  /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */
  id = inject(_IdGenerator).getId("mat-autocomplete-");
  /**
   * Tells any descendant `mat-optgroup` to use the inert a11y pattern.
   * @docs-private
   */
  inertGroups;
  constructor() {
    const platform = inject(Platform);
    this.inertGroups = platform?.SAFARI || false;
    this.autoActiveFirstOption = !!this._defaults.autoActiveFirstOption;
    this.autoSelectActiveOption = !!this._defaults.autoSelectActiveOption;
    this.requireSelection = !!this._defaults.requireSelection;
    this._hideSingleSelectionIndicator = this._defaults.hideSingleSelectionIndicator ?? false;
  }
  ngAfterContentInit() {
    this._keyManager = new ActiveDescendantKeyManager(this.options).withWrap().skipPredicate(this._skipPredicate);
    this._activeOptionChanges = this._keyManager.change.subscribe((index) => {
      if (this.isOpen) {
        this.optionActivated.emit({
          source: this,
          option: this.options.toArray()[index] || null
        });
      }
    });
    this._setVisibility();
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._activeOptionChanges.unsubscribe();
  }
  /**
   * Sets the panel scrollTop. This allows us to manually scroll to display options
   * above or below the fold, as they are not actually being focused when active.
   */
  _setScrollTop(scrollTop) {
    if (this.panel) {
      this.panel.nativeElement.scrollTop = scrollTop;
    }
  }
  /** Returns the panel's scrollTop. */
  _getScrollTop() {
    return this.panel ? this.panel.nativeElement.scrollTop : 0;
  }
  /** Panel should hide itself when the option list is empty. */
  _setVisibility() {
    this.showPanel = !!this.options?.length;
    this._changeDetectorRef.markForCheck();
  }
  /** Emits the `select` event. */
  _emitSelectEvent(option) {
    const event = new MatAutocompleteSelectedEvent(this, option);
    this.optionSelected.emit(event);
  }
  /** Gets the aria-labelledby for the autocomplete panel. */
  _getPanelAriaLabelledby(labelId) {
    if (this.ariaLabel) {
      return null;
    }
    const labelExpression = labelId ? labelId + " " : "";
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  // `skipPredicate` determines if key manager should avoid putting a given option in the tab
  // order. Allow disabled list items to receive focus via keyboard to align with WAI ARIA
  // recommendation.
  //
  // Normally WAI ARIA's instructions are to exclude disabled items from the tab order, but it
  // makes a few exceptions for compound widgets.
  //
  // From [Developing a Keyboard Interface](
  // https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
  //   "For the following composite widget elements, keep them focusable when disabled: Options in a
  //   Listbox..."
  //
  // The user can focus disabled options using the keyboard, but the user cannot click disabled
  // options.
  _skipPredicate() {
    return false;
  }
  static \u0275fac = function MatAutocomplete_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocomplete)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatAutocomplete,
    selectors: [["mat-autocomplete"]],
    contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatOption, 5);
        \u0275\u0275contentQuery(dirIndex, MAT_OPTGROUP, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.options = _t2);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.optionGroups = _t2);
      }
    },
    viewQuery: function MatAutocomplete_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.template = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.panel = _t2.first);
      }
    },
    hostAttrs: [1, "mat-mdc-autocomplete"],
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      displayWith: "displayWith",
      autoActiveFirstOption: [2, "autoActiveFirstOption", "autoActiveFirstOption", booleanAttribute],
      autoSelectActiveOption: [2, "autoSelectActiveOption", "autoSelectActiveOption", booleanAttribute],
      requireSelection: [2, "requireSelection", "requireSelection", booleanAttribute],
      panelWidth: "panelWidth",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      classList: [0, "class", "classList"],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute]
    },
    outputs: {
      optionSelected: "optionSelected",
      opened: "opened",
      closed: "closed",
      optionActivated: "optionActivated"
    },
    exportAs: ["matAutocomplete"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_OPTION_PARENT_COMPONENT,
      useExisting: _MatAutocomplete
    }])],
    ngContentSelectors: _c12,
    decls: 1,
    vars: 0,
    consts: [["panel", ""], ["role", "listbox", 1, "mat-mdc-autocomplete-panel", "mdc-menu-surface", "mdc-menu-surface--open", 3, "id"]],
    template: function MatAutocomplete_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, MatAutocomplete_ng_template_0_Template, 3, 17, "ng-template");
      }
    },
    styles: ["div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:relative;border-radius:var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));background-color:var(--mat-autocomplete-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-autocomplete-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}@keyframes _mat-autocomplete-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}.mat-autocomplete-panel-animations-enabled{animation:_mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1)}mat-autocomplete{display:none}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocomplete, [{
    type: Component,
    args: [{
      selector: "mat-autocomplete",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "matAutocomplete",
      host: {
        "class": "mat-mdc-autocomplete"
      },
      providers: [{
        provide: MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatAutocomplete
      }],
      template: `<ng-template let-formFieldId="id">
  <div
    class="mat-mdc-autocomplete-panel mdc-menu-surface mdc-menu-surface--open"
    role="listbox"
    [id]="id"
    [class]="_classList"
    [class.mat-mdc-autocomplete-visible]="showPanel"
    [class.mat-mdc-autocomplete-hidden]="!showPanel"
    [class.mat-autocomplete-panel-animations-enabled]="!_animationsDisabled"
    [class.mat-primary]="_color === 'primary'"
    [class.mat-accent]="_color === 'accent'"
    [class.mat-warn]="_color === 'warn'"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby(formFieldId)"
    #panel>
    <ng-content></ng-content>
  </div>
</ng-template>
`,
      styles: ["div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:relative;border-radius:var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));background-color:var(--mat-autocomplete-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-autocomplete-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}@keyframes _mat-autocomplete-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}.mat-autocomplete-panel-animations-enabled{animation:_mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1)}mat-autocomplete{display:none}\n"]
    }]
  }], () => [], {
    template: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    panel: [{
      type: ViewChild,
      args: ["panel"]
    }],
    options: [{
      type: ContentChildren,
      args: [MatOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    displayWith: [{
      type: Input
    }],
    autoActiveFirstOption: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoSelectActiveOption: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    requireSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    panelWidth: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optionSelected: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    optionActivated: [{
      type: Output
    }],
    classList: [{
      type: Input,
      args: ["class"]
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatAutocompleteOrigin = class _MatAutocompleteOrigin {
  elementRef = inject(ElementRef);
  constructor() {
  }
  static \u0275fac = function MatAutocompleteOrigin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteOrigin)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAutocompleteOrigin,
    selectors: [["", "matAutocompleteOrigin", ""]],
    exportAs: ["matAutocompleteOrigin"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteOrigin, [{
    type: Directive,
    args: [{
      selector: "[matAutocompleteOrigin]",
      exportAs: "matAutocompleteOrigin"
    }]
  }], () => [], null);
})();
var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatAutocompleteTrigger),
  multi: true
};
function getMatAutocompleteMissingPanelError() {
  return Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");
}
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new InjectionToken("mat-autocomplete-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
  deps: [],
  useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
};
var MatAutocompleteTrigger = class _MatAutocompleteTrigger {
  _environmentInjector = inject(EnvironmentInjector);
  _element = inject(ElementRef);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _zone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _formField = inject(MAT_FORM_FIELD, {
    optional: true,
    host: true
  });
  _viewportRuler = inject(ViewportRuler);
  _scrollStrategy = inject(MAT_AUTOCOMPLETE_SCROLL_STRATEGY);
  _renderer = inject(Renderer2);
  _animationsDisabled = _animationsDisabled();
  _defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, {
    optional: true
  });
  _overlayRef;
  _portal;
  _componentDestroyed = false;
  _initialized = new Subject();
  _keydownSubscription;
  _outsideClickSubscription;
  _cleanupWindowBlur;
  /** Old value of the native input. Used to work around issues with the `input` event on IE. */
  _previousValue;
  /** Value of the input element when the panel was attached (even if there are no options). */
  _valueOnAttach;
  /** Value on the previous keydown event. */
  _valueOnLastKeydown;
  /** Strategy that is used to position the panel. */
  _positionStrategy;
  /** Whether or not the label state is being overridden. */
  _manuallyFloatingLabel = false;
  /** The subscription for closing actions (some are bound to document). */
  _closingActionsSubscription;
  /** Subscription to viewport size changes. */
  _viewportSubscription = Subscription.EMPTY;
  /** Implements BreakpointObserver to be used to detect handset landscape */
  _breakpointObserver = inject(BreakpointObserver);
  _handsetLandscapeSubscription = Subscription.EMPTY;
  /**
   * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
   * closed autocomplete from being reopened if the user switches to another browser tab and then
   * comes back.
   */
  _canOpenOnNextFocus = true;
  /** Value inside the input before we auto-selected an option. */
  _valueBeforeAutoSelection;
  /**
   * Current option that we have auto-selected as the user is navigating,
   * but which hasn't been propagated to the model value yet.
   */
  _pendingAutoselectedOption;
  /** Stream of keyboard events that can close the panel. */
  _closeKeyEventStream = new Subject();
  /** Classes to apply to the panel. Exposed as a public property for internal usage. */
  _overlayPanelClass = coerceArray(this._defaults?.overlayPanelClass || []);
  /**
   * Event handler for when the window is blurred. Needs to be an
   * arrow function in order to preserve the context.
   */
  _windowBlurHandler = () => {
    this._canOpenOnNextFocus = this.panelOpen || !this._hasFocus();
  };
  /** `View -> model callback called when value changes` */
  _onChange = () => {
  };
  /** `View -> model callback called when autocomplete has been touched` */
  _onTouched = () => {
  };
  /** The autocomplete panel to be attached to this trigger. */
  autocomplete;
  /**
   * Position of the autocomplete panel relative to the trigger element. A position of `auto`
   * will render the panel underneath the trigger if there is enough space for it to fit in
   * the viewport, otherwise the panel will be shown above it. If the position is set to
   * `above` or `below`, the panel will always be shown above or below the trigger. no matter
   * whether it fits completely in the viewport.
   */
  position = "auto";
  /**
   * Reference relative to which to position the autocomplete panel.
   * Defaults to the autocomplete trigger element.
   */
  connectedTo;
  /**
   * `autocomplete` attribute to be set on the input element.
   * @docs-private
   */
  autocompleteAttribute = "off";
  /**
   * Whether the autocomplete is disabled. When disabled, the element will
   * act as a regular input and the user won't be able to open the panel.
   */
  autocompleteDisabled;
  constructor() {
  }
  /** Class to apply to the panel when it's above the input. */
  _aboveClass = "mat-mdc-autocomplete-panel-above";
  ngAfterViewInit() {
    this._initialized.next();
    this._initialized.complete();
    this._cleanupWindowBlur = this._renderer.listen("window", "blur", this._windowBlurHandler);
  }
  ngOnChanges(changes) {
    if (changes["position"] && this._positionStrategy) {
      this._setStrategyPositions(this._positionStrategy);
      if (this.panelOpen) {
        this._overlayRef.updatePosition();
      }
    }
  }
  ngOnDestroy() {
    this._cleanupWindowBlur?.();
    this._handsetLandscapeSubscription.unsubscribe();
    this._viewportSubscription.unsubscribe();
    this._componentDestroyed = true;
    this._destroyPanel();
    this._closeKeyEventStream.complete();
    this._clearFromModal();
  }
  /** Whether or not the autocomplete panel is open. */
  get panelOpen() {
    return this._overlayAttached && this.autocomplete.showPanel;
  }
  _overlayAttached = false;
  /** Opens the autocomplete suggestion panel. */
  openPanel() {
    this._openPanelInternal();
  }
  /** Closes the autocomplete suggestion panel. */
  closePanel() {
    this._resetLabel();
    if (!this._overlayAttached) {
      return;
    }
    if (this.panelOpen) {
      this._zone.run(() => {
        this.autocomplete.closed.emit();
      });
    }
    if (this.autocomplete._latestOpeningTrigger === this) {
      this.autocomplete._isOpen = false;
      this.autocomplete._latestOpeningTrigger = null;
    }
    this._overlayAttached = false;
    this._pendingAutoselectedOption = null;
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
      this._closingActionsSubscription.unsubscribe();
    }
    this._updatePanelState();
    if (!this._componentDestroyed) {
      this._changeDetectorRef.detectChanges();
    }
    if (this._trackedModal) {
      removeAriaReferencedId(this._trackedModal, "aria-owns", this.autocomplete.id);
    }
  }
  /**
   * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
   * within the viewport.
   */
  updatePosition() {
    if (this._overlayAttached) {
      this._overlayRef.updatePosition();
    }
  }
  /**
   * A stream of actions that should close the autocomplete panel, including
   * when an option is selected, on blur, and when TAB is pressed.
   */
  get panelClosingActions() {
    return merge(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(filter(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(filter(() => this._overlayAttached)) : of()).pipe(
      // Normalize the output so we return a consistent type.
      map((event) => event instanceof MatOptionSelectionChange ? event : null)
    );
  }
  /** Stream of changes to the selection state of the autocomplete options. */
  optionSelections = defer(() => {
    const options = this.autocomplete ? this.autocomplete.options : null;
    if (options) {
      return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
    }
    return this._initialized.pipe(switchMap(() => this.optionSelections));
  });
  /** The currently active option, coerced to MatOption type. */
  get activeOption() {
    if (this.autocomplete && this.autocomplete._keyManager) {
      return this.autocomplete._keyManager.activeItem;
    }
    return null;
  }
  /** Stream of clicks outside of the autocomplete panel. */
  _getOutsideClickStream() {
    return new Observable((observer) => {
      const listener = (event) => {
        const clickTarget = _getEventTarget(event);
        const formField = this._formField ? this._formField.getConnectedOverlayOrigin().nativeElement : null;
        const customOrigin = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null;
        if (this._overlayAttached && clickTarget !== this._element.nativeElement && // Normally focus moves inside `mousedown` so this condition will almost always be
        // true. Its main purpose is to handle the case where the input is focused from an
        // outside click which propagates up to the `body` listener within the same sequence
        // and causes the panel to close immediately (see #3106).
        !this._hasFocus() && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!this._overlayRef && !this._overlayRef.overlayElement.contains(clickTarget)) {
          observer.next(event);
        }
      };
      const cleanups = [this._renderer.listen("document", "click", listener), this._renderer.listen("document", "auxclick", listener), this._renderer.listen("document", "touchend", listener)];
      return () => {
        cleanups.forEach((current) => current());
      };
    });
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    Promise.resolve(null).then(() => this._assignOptionValue(value));
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn2) {
    this._onChange = fn2;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn2) {
    this._onTouched = fn2;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this._element.nativeElement.disabled = isDisabled;
  }
  _handleKeydown(e) {
    const event = e;
    const keyCode = event.keyCode;
    const hasModifier = hasModifierKey(event);
    if (keyCode === ESCAPE && !hasModifier) {
      event.preventDefault();
    }
    this._valueOnLastKeydown = this._element.nativeElement.value;
    if (this.activeOption && keyCode === ENTER && this.panelOpen && !hasModifier) {
      this.activeOption._selectViaInteraction();
      this._resetActiveItem();
      event.preventDefault();
    } else if (this.autocomplete) {
      const prevActiveItem = this.autocomplete._keyManager.activeItem;
      const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
      if (keyCode === TAB || isArrowKey && !hasModifier && this.panelOpen) {
        this.autocomplete._keyManager.onKeydown(event);
      } else if (isArrowKey && this._canOpen()) {
        this._openPanelInternal(this._valueOnLastKeydown);
      }
      if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
        this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
        if (this.autocomplete.autoSelectActiveOption && this.activeOption) {
          if (!this._pendingAutoselectedOption) {
            this._valueBeforeAutoSelection = this._valueOnLastKeydown;
          }
          this._pendingAutoselectedOption = this.activeOption;
          this._assignOptionValue(this.activeOption.value);
        }
      }
    }
  }
  _handleInput(event) {
    let target = event.target;
    let value = target.value;
    if (target.type === "number") {
      value = value == "" ? null : parseFloat(value);
    }
    if (this._previousValue !== value) {
      this._previousValue = value;
      this._pendingAutoselectedOption = null;
      if (!this.autocomplete || !this.autocomplete.requireSelection) {
        this._onChange(value);
      }
      if (!value) {
        this._clearPreviousSelectedOption(null, false);
      } else if (this.panelOpen && !this.autocomplete.requireSelection) {
        const selectedOption = this.autocomplete.options?.find((option) => option.selected);
        if (selectedOption) {
          const display = this._getDisplayValue(selectedOption.value);
          if (value !== display) {
            selectedOption.deselect(false);
          }
        }
      }
      if (this._canOpen() && this._hasFocus()) {
        const valueOnAttach = this._valueOnLastKeydown ?? this._element.nativeElement.value;
        this._valueOnLastKeydown = null;
        this._openPanelInternal(valueOnAttach);
      }
    }
  }
  _handleFocus() {
    if (!this._canOpenOnNextFocus) {
      this._canOpenOnNextFocus = true;
    } else if (this._canOpen()) {
      this._previousValue = this._element.nativeElement.value;
      this._attachOverlay(this._previousValue);
      this._floatLabel(true);
    }
  }
  _handleClick() {
    if (this._canOpen() && !this.panelOpen) {
      this._openPanelInternal();
    }
  }
  /** Whether the input currently has focus. */
  _hasFocus() {
    return _getFocusedElementPierceShadowDom() === this._element.nativeElement;
  }
  /**
   * In "auto" mode, the label will animate down as soon as focus is lost.
   * This causes the value to jump when selecting an option with the mouse.
   * This method manually floats the label until the panel can be closed.
   * @param shouldAnimate Whether the label should be animated when it is floated.
   */
  _floatLabel(shouldAnimate = false) {
    if (this._formField && this._formField.floatLabel === "auto") {
      if (shouldAnimate) {
        this._formField._animateAndLockLabel();
      } else {
        this._formField.floatLabel = "always";
      }
      this._manuallyFloatingLabel = true;
    }
  }
  /** If the label has been manually elevated, return it to its normal state. */
  _resetLabel() {
    if (this._manuallyFloatingLabel) {
      if (this._formField) {
        this._formField.floatLabel = "auto";
      }
      this._manuallyFloatingLabel = false;
    }
  }
  /**
   * This method listens to a stream of panel closing actions and resets the
   * stream every time the option list changes.
   */
  _subscribeToClosingActions() {
    const initialRender = new Observable((subscriber) => {
      afterNextRender(() => {
        subscriber.next();
      }, {
        injector: this._environmentInjector
      });
    });
    const optionChanges = this.autocomplete.options?.changes.pipe(
      tap(() => this._positionStrategy.reapplyLastPosition()),
      // Defer emitting to the stream until the next tick, because changing
      // bindings in here will cause "changed after checked" errors.
      delay(0)
    ) ?? of();
    return merge(initialRender, optionChanges).pipe(
      // create a new stream of panelClosingActions, replacing any previous streams
      // that were created, and flatten it so our stream only emits closing events...
      switchMap(() => this._zone.run(() => {
        const wasOpen = this.panelOpen;
        this._resetActiveItem();
        this._updatePanelState();
        this._changeDetectorRef.detectChanges();
        if (this.panelOpen) {
          this._overlayRef.updatePosition();
        }
        if (wasOpen !== this.panelOpen) {
          if (this.panelOpen) {
            this._emitOpened();
          } else {
            this.autocomplete.closed.emit();
          }
        }
        return this.panelClosingActions;
      })),
      // when the first closing event occurs...
      take(1)
    ).subscribe((event) => this._setValueAndClose(event));
  }
  /**
   * Emits the opened event once it's known that the panel will be shown and stores
   * the state of the trigger right before the opening sequence was finished.
   */
  _emitOpened() {
    this.autocomplete.opened.emit();
  }
  /** Destroys the autocomplete suggestion panel. */
  _destroyPanel() {
    if (this._overlayRef) {
      this.closePanel();
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  /** Given a value, returns the string that should be shown within the input. */
  _getDisplayValue(value) {
    const autocomplete = this.autocomplete;
    return autocomplete && autocomplete.displayWith ? autocomplete.displayWith(value) : value;
  }
  _assignOptionValue(value) {
    const toDisplay = this._getDisplayValue(value);
    if (value == null) {
      this._clearPreviousSelectedOption(null, false);
    }
    this._updateNativeInputValue(toDisplay != null ? toDisplay : "");
  }
  _updateNativeInputValue(value) {
    if (this._formField) {
      this._formField._control.value = value;
    } else {
      this._element.nativeElement.value = value;
    }
    this._previousValue = value;
  }
  /**
   * This method closes the panel, and if a value is specified, also sets the associated
   * control to that value. It will also mark the control as dirty if this interaction
   * stemmed from the user.
   */
  _setValueAndClose(event) {
    const panel = this.autocomplete;
    const toSelect = event ? event.source : this._pendingAutoselectedOption;
    if (toSelect) {
      this._clearPreviousSelectedOption(toSelect);
      this._assignOptionValue(toSelect.value);
      this._onChange(toSelect.value);
      panel._emitSelectEvent(toSelect);
      this._element.nativeElement.focus();
    } else if (panel.requireSelection && this._element.nativeElement.value !== this._valueOnAttach) {
      this._clearPreviousSelectedOption(null);
      this._assignOptionValue(null);
      this._onChange(null);
    }
    this.closePanel();
  }
  /**
   * Clear any previous selected option and emit a selection change event for this option
   */
  _clearPreviousSelectedOption(skip, emitEvent) {
    this.autocomplete?.options?.forEach((option) => {
      if (option !== skip && option.selected) {
        option.deselect(emitEvent);
      }
    });
  }
  _openPanelInternal(valueOnAttach = this._element.nativeElement.value) {
    this._attachOverlay(valueOnAttach);
    this._floatLabel();
    if (this._trackedModal) {
      const panelId = this.autocomplete.id;
      addAriaReferencedId(this._trackedModal, "aria-owns", panelId);
    }
  }
  _attachOverlay(valueOnAttach) {
    if (!this.autocomplete && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatAutocompleteMissingPanelError();
    }
    let overlayRef = this._overlayRef;
    if (!overlayRef) {
      this._portal = new TemplatePortal(this.autocomplete.template, this._viewContainerRef, {
        id: this._formField?.getLabelId()
      });
      overlayRef = createOverlayRef(this._injector, this._getOverlayConfig());
      this._overlayRef = overlayRef;
      this._viewportSubscription = this._viewportRuler.change().subscribe(() => {
        if (this.panelOpen && overlayRef) {
          overlayRef.updateSize({
            width: this._getPanelWidth()
          });
        }
      });
      this._handsetLandscapeSubscription = this._breakpointObserver.observe(Breakpoints.HandsetLandscape).subscribe((result) => {
        const isHandsetLandscape = result.matches;
        if (isHandsetLandscape) {
          this._positionStrategy.withFlexibleDimensions(true).withGrowAfterOpen(true).withViewportMargin(8);
        } else {
          this._positionStrategy.withFlexibleDimensions(false).withGrowAfterOpen(false).withViewportMargin(0);
        }
      });
    } else {
      this._positionStrategy.setOrigin(this._getConnectedElement());
      overlayRef.updateSize({
        width: this._getPanelWidth()
      });
    }
    if (overlayRef && !overlayRef.hasAttached()) {
      overlayRef.attach(this._portal);
      this._valueOnAttach = valueOnAttach;
      this._valueOnLastKeydown = null;
      this._closingActionsSubscription = this._subscribeToClosingActions();
    }
    const wasOpen = this.panelOpen;
    this.autocomplete._isOpen = this._overlayAttached = true;
    this.autocomplete._latestOpeningTrigger = this;
    this.autocomplete._setColor(this._formField?.color);
    this._updatePanelState();
    this._applyModalPanelOwnership();
    if (this.panelOpen && wasOpen !== this.panelOpen) {
      this._emitOpened();
    }
  }
  /** Handles keyboard events coming from the overlay panel. */
  _handlePanelKeydown = (event) => {
    if (event.keyCode === ESCAPE && !hasModifierKey(event) || event.keyCode === UP_ARROW && hasModifierKey(event, "altKey")) {
      if (this._pendingAutoselectedOption) {
        this._updateNativeInputValue(this._valueBeforeAutoSelection ?? "");
        this._pendingAutoselectedOption = null;
      }
      this._closeKeyEventStream.next();
      this._resetActiveItem();
      event.stopPropagation();
      event.preventDefault();
    }
  };
  /** Updates the panel's visibility state and any trigger state tied to id. */
  _updatePanelState() {
    this.autocomplete._setVisibility();
    if (this.panelOpen) {
      const overlayRef = this._overlayRef;
      if (!this._keydownSubscription) {
        this._keydownSubscription = overlayRef.keydownEvents().subscribe(this._handlePanelKeydown);
      }
      if (!this._outsideClickSubscription) {
        this._outsideClickSubscription = overlayRef.outsidePointerEvents().subscribe();
      }
    } else {
      this._keydownSubscription?.unsubscribe();
      this._outsideClickSubscription?.unsubscribe();
      this._keydownSubscription = this._outsideClickSubscription = null;
    }
  }
  _getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this._getOverlayPosition(),
      scrollStrategy: this._scrollStrategy(),
      width: this._getPanelWidth(),
      direction: this._dir ?? void 0,
      hasBackdrop: this._defaults?.hasBackdrop,
      backdropClass: this._defaults?.backdropClass,
      panelClass: this._overlayPanelClass,
      disableAnimations: this._animationsDisabled
    });
  }
  _getOverlayPosition() {
    const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);
    this._setStrategyPositions(strategy);
    this._positionStrategy = strategy;
    return strategy;
  }
  /** Sets the positions on a position strategy based on the directive's input state. */
  _setStrategyPositions(positionStrategy) {
    const belowPositions = [{
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top"
    }, {
      originX: "end",
      originY: "bottom",
      overlayX: "end",
      overlayY: "top"
    }];
    const panelClass = this._aboveClass;
    const abovePositions = [{
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom",
      panelClass
    }, {
      originX: "end",
      originY: "top",
      overlayX: "end",
      overlayY: "bottom",
      panelClass
    }];
    let positions;
    if (this.position === "above") {
      positions = abovePositions;
    } else if (this.position === "below") {
      positions = belowPositions;
    } else {
      positions = [...belowPositions, ...abovePositions];
    }
    positionStrategy.withPositions(positions);
  }
  _getConnectedElement() {
    if (this.connectedTo) {
      return this.connectedTo.elementRef;
    }
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
  }
  _getPanelWidth() {
    return this.autocomplete.panelWidth || this._getHostWidth();
  }
  /** Returns the width of the input element, so the panel width can match it. */
  _getHostWidth() {
    return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
  }
  /**
   * Reset the active item to -1. This is so that pressing arrow keys will activate the correct
   * option.
   *
   * If the consumer opted-in to automatically activatating the first option, activate the first
   * *enabled* option.
   */
  _resetActiveItem() {
    const autocomplete = this.autocomplete;
    if (autocomplete.autoActiveFirstOption) {
      let firstEnabledOptionIndex = -1;
      for (let index = 0; index < autocomplete.options.length; index++) {
        const option = autocomplete.options.get(index);
        if (!option.disabled) {
          firstEnabledOptionIndex = index;
          break;
        }
      }
      autocomplete._keyManager.setActiveItem(firstEnabledOptionIndex);
    } else {
      autocomplete._keyManager.setActiveItem(-1);
    }
  }
  /** Determines whether the panel can be opened. */
  _canOpen() {
    const element = this._element.nativeElement;
    return !element.readOnly && !element.disabled && !this.autocompleteDisabled;
  }
  /** Scrolls to a particular option in the list. */
  _scrollToOption(index) {
    const autocomplete = this.autocomplete;
    const labelCount = _countGroupLabelsBeforeOption(index, autocomplete.options, autocomplete.optionGroups);
    if (index === 0 && labelCount === 1) {
      autocomplete._setScrollTop(0);
    } else if (autocomplete.panel) {
      const option = autocomplete.options.toArray()[index];
      if (option) {
        const element = option._getHostElement();
        const newScrollPosition = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);
        autocomplete._setScrollTop(newScrollPosition);
      }
    }
  }
  /**
   * Track which modal we have modified the `aria-owns` attribute of. When the combobox trigger is
   * inside an aria-modal, we apply aria-owns to the parent modal with the `id` of the options
   * panel. Track the modal we have changed so we can undo the changes on destroy.
   */
  _trackedModal = null;
  /**
   * If the autocomplete trigger is inside of an `aria-modal` element, connect
   * that modal to the options panel with `aria-owns`.
   *
   * For some browser + screen reader combinations, when navigation is inside
   * of an `aria-modal` element, the screen reader treats everything outside
   * of that modal as hidden or invisible.
   *
   * This causes a problem when the combobox trigger is _inside_ of a modal, because the
   * options panel is rendered _outside_ of that modal, preventing screen reader navigation
   * from reaching the panel.
   *
   * We can work around this issue by applying `aria-owns` to the modal with the `id` of
   * the options panel. This effectively communicates to assistive technology that the
   * options panel is part of the same interaction as the modal.
   *
   * At time of this writing, this issue is present in VoiceOver.
   * See https://github.com/angular/components/issues/20694
   */
  _applyModalPanelOwnership() {
    const modal = this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');
    if (!modal) {
      return;
    }
    const panelId = this.autocomplete.id;
    if (this._trackedModal) {
      removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
    }
    addAriaReferencedId(modal, "aria-owns", panelId);
    this._trackedModal = modal;
  }
  /** Clears the references to the listbox overlay element from the modal it was added to. */
  _clearFromModal() {
    if (this._trackedModal) {
      const panelId = this.autocomplete.id;
      removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
      this._trackedModal = null;
    }
  }
  static \u0275fac = function MatAutocompleteTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAutocompleteTrigger,
    selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
    hostAttrs: [1, "mat-mdc-autocomplete-trigger"],
    hostVars: 7,
    hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
          return ctx._handleFocus();
        })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
          return ctx._onTouched();
        })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
          return ctx._handleInput($event);
        })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("click", function MatAutocompleteTrigger_click_HostBindingHandler() {
          return ctx._handleClick();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-controls", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", ctx.autocompleteDisabled ? null : "listbox");
      }
    },
    inputs: {
      autocomplete: [0, "matAutocomplete", "autocomplete"],
      position: [0, "matAutocompletePosition", "position"],
      connectedTo: [0, "matAutocompleteConnectedTo", "connectedTo"],
      autocompleteAttribute: [0, "autocomplete", "autocompleteAttribute"],
      autocompleteDisabled: [2, "matAutocompleteDisabled", "autocompleteDisabled", booleanAttribute]
    },
    exportAs: ["matAutocompleteTrigger"],
    features: [\u0275\u0275ProvidersFeature([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteTrigger, [{
    type: Directive,
    args: [{
      selector: `input[matAutocomplete], textarea[matAutocomplete]`,
      host: {
        "class": "mat-mdc-autocomplete-trigger",
        "[attr.autocomplete]": "autocompleteAttribute",
        "[attr.role]": 'autocompleteDisabled ? null : "combobox"',
        "[attr.aria-autocomplete]": 'autocompleteDisabled ? null : "list"',
        "[attr.aria-activedescendant]": "(panelOpen && activeOption) ? activeOption.id : null",
        "[attr.aria-expanded]": "autocompleteDisabled ? null : panelOpen.toString()",
        "[attr.aria-controls]": "(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id",
        "[attr.aria-haspopup]": 'autocompleteDisabled ? null : "listbox"',
        // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
        // a little earlier. This avoids issues where IE delays the focusing of the input.
        "(focusin)": "_handleFocus()",
        "(blur)": "_onTouched()",
        "(input)": "_handleInput($event)",
        "(keydown)": "_handleKeydown($event)",
        "(click)": "_handleClick()"
      },
      exportAs: "matAutocompleteTrigger",
      providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
    }]
  }], () => [], {
    autocomplete: [{
      type: Input,
      args: ["matAutocomplete"]
    }],
    position: [{
      type: Input,
      args: ["matAutocompletePosition"]
    }],
    connectedTo: [{
      type: Input,
      args: ["matAutocompleteConnectedTo"]
    }],
    autocompleteAttribute: [{
      type: Input,
      args: ["autocomplete"]
    }],
    autocompleteDisabled: [{
      type: Input,
      args: [{
        alias: "matAutocompleteDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatAutocompleteModule = class _MatAutocompleteModule {
  static \u0275fac = function MatAutocompleteModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatAutocompleteModule,
    imports: [OverlayModule, MatOptionModule, MatCommonModule, MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
    exports: [CdkScrollableModule, MatAutocomplete, MatOptionModule, MatCommonModule, MatAutocompleteTrigger, MatAutocompleteOrigin]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [OverlayModule, MatOptionModule, MatCommonModule, CdkScrollableModule, MatOptionModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, MatOptionModule, MatCommonModule, MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
      exports: [CdkScrollableModule, MatAutocomplete, MatOptionModule, MatCommonModule, MatAutocompleteTrigger, MatAutocompleteOrigin],
      providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

// libs/form-fields/src/lib/user-search-field.component.ts
var _c03 = ["input"];
var _c13 = (a0) => ({ name: a0 });
function UserSearchFieldComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 5);
  }
}
function UserSearchFieldComponent_For_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " (");
    \u0275\u0275elementStart(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ") ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(option_r3.username);
  }
}
function UserSearchFieldComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275listener("click", function UserSearchFieldComponent_For_10_Template_mat_option_click_0_listener() {
      const option_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.setValue(option_r3);
      return \u0275\u0275resetView(ctx_r3.blurInput());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, UserSearchFieldComponent_For_10_Conditional_5_Template, 5, 1, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r3.username && option_r3.username !== option_r3.email ? 5 : -1);
  }
}
function UserSearchFieldComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 7)(1, "div", 13);
    \u0275\u0275listener("mousedown", function UserSearchFieldComponent_Conditional_11_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      $event.stopPropagation();
      return \u0275\u0275resetView($event.preventDefault());
    })("touchstart", function UserSearchFieldComponent_Conditional_11_Template_div_touchstart_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      $event.stopPropagation();
      return \u0275\u0275resetView($event.preventDefault());
    })("click", function UserSearchFieldComponent_Conditional_11_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.setValue(ctx_r3.search_str);
      $event.stopPropagation();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(2, "div", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "FORM.USER_ADD_EXTERNAL", \u0275\u0275pureFunction1(4, _c13, ctx_r3.search_str)), " ");
  }
}
function UserSearchFieldComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275listener("click", function UserSearchFieldComponent_Conditional_12_Template_mat_option_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.empty_fn());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r3.empty_fn);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 3, ctx_r3.search_str ? "FORM.USER_EMPTY" : ""), " ", ctx_r3.error, " ");
  }
}
var _UserSearchFieldComponent = class _UserSearchFieldComponent extends AsyncHandler {
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this.error = "";
    this.query_fn = (q2) => this._settings.get("app.basic_user_search") ? Pc({ q: q2, authority_id: bt()?.id }).pipe(map((_2) => _2.data.map((_3) => new User(_3))), catchError(() => of([]))) : searchStaff(q2).pipe(catchError(() => of([])));
    this.search$ = new Subject();
    this.search_results$ = this.search$.pipe(debounceTime(400), distinctUntilChanged(), switchMap((query) => {
      this.loading = true;
      return this.options && this.options.length > 0 ? of(this.options) : query.length >= 3 ? !this.guests ? this.query_fn(query) : forkJoin([
        searchStaff(query).pipe(catchError(() => of([]))),
        searchGuests(query).pipe(catchError(() => of([])))
      ]) : of([]);
    }), catchError(() => of([])), map((list) => {
      this.loading = false;
      list = flatten(list);
      const search = (this.search_str || "").toLowerCase();
      return list.filter((item) => !this.filter || this.filter(item, search));
    }));
    this.registerOnChange = (fn2) => this._onChange = fn2;
    this.registerOnTouched = (fn2) => this._onTouch = fn2;
    this.cancelReset = () => this.clearTimeout("reset");
    this.blurInput = () => {
      this.timeout("blur", () => this._input_el?.nativeElement?.blur());
    };
  }
  ngOnInit() {
    this.subscription("search_results", this.search_results$.subscribe((list) => this.user_list = list));
    this.resetSearchString();
  }
  /**
   * Reset the search string back to the name of the active user
   */
  resetSearchString() {
    this.timeout("reset", () => this.search_str = this.active_user?.name || "", 100);
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value, email) {
    if (!new_value)
      return;
    if (typeof new_value === "string" && new_value === this.search_str) {
      new_value = new User({
        name: (this.search_str || email || "").split("@")[0],
        email: this.search_str || email || ""
      });
    }
    const user = new_value;
    if (!("name" in user) && !("email" in user))
      return;
    this.active_user = user;
    if (this._onChange)
      this._onChange(user);
    this.resetSearchString();
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.active_user = value;
    this.resetSearchString();
  }
  setDisabledState(disabled) {
    this.disabled = disabled;
  }
};
_UserSearchFieldComponent.\u0275fac = function UserSearchFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserSearchFieldComponent)();
};
_UserSearchFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserSearchFieldComponent, selectors: [["a-user-search-field"]], viewQuery: function UserSearchFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 5, ElementRef);
  }
  if (rf & 2) {
    let _t2;
    \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._input_el = _t2.first);
  }
}, inputs: { disabled: "disabled", placeholder: "placeholder", options: "options", guests: "guests", error: "error", validate: "validate", empty_fn: "empty_fn", filter: "filter", query_fn: "query_fn" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _UserSearchFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature], decls: 13, vars: 9, consts: [["input", ""], ["auto", "matAutocomplete"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", "keyboard", "", "name", "user-search", 3, "ngModelChange", "keyup.enter", "blur", "focus", "ngModel", "disabled", "placeholder", "matAutocomplete"], ["matPrefix", "", 1, "relative", "text-2xl"], ["matSuffix", "", "diameter", "16"], [3, "optionSelected"], [1, "pointer-events-none", "relative"], [3, "disabled"], [3, "click"], [1, "leading-tight"], [1, "w-full", "text-xs", "opacity-60"], [1, "truncate"], [1, "pointer-events-auto", "absolute", "inset-0", "px-4", 3, "mousedown", "touchstart", "click"], [1, "pointer-events-none"], [3, "click", "disabled"]], template: function UserSearchFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 2)(1, "input", 3, 0);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function UserSearchFieldComponent_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.search_str, $event) || (ctx.search_str = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UserSearchFieldComponent_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search$.next($event || ""));
    })("keyup.enter", function UserSearchFieldComponent_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.validate && ctx.validate(ctx.search_str) ? ctx.setValue(ctx.search_str) : "");
    })("blur", function UserSearchFieldComponent_Template_input_blur_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.resetSearchString());
    })("focus", function UserSearchFieldComponent_Template_input_focus_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cancelReset());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 4);
    \u0275\u0275text(5, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, UserSearchFieldComponent_Conditional_6_Template, 1, 0, "mat-spinner", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-autocomplete", 6, 1);
    \u0275\u0275listener("optionSelected", function UserSearchFieldComponent_Template_mat_autocomplete_optionSelected_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setValue($event.option.value));
    });
    \u0275\u0275repeaterCreate(9, UserSearchFieldComponent_For_10_Template, 6, 3, "mat-option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(11, UserSearchFieldComponent_Conditional_11_Template, 5, 6, "mat-option", 7);
    \u0275\u0275conditionalCreate(12, UserSearchFieldComponent_Conditional_12_Template, 3, 5, "mat-option", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const auto_r7 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.search_str);
    \u0275\u0275property("disabled", ctx.disabled)("placeholder", ctx.placeholder || \u0275\u0275pipeBind1(3, 7, "FORM.USER_SEARCH"))("matAutocomplete", auto_r7);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.loading ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.user_list);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.search_str && ctx.validate && ctx.validate(ctx.search_str) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(ctx.user_list == null ? null : ctx.user_list.length) && (ctx.search_str || ctx.error) ? 12 : -1);
  }
}, dependencies: [
  MatFormFieldModule,
  MatFormField,
  MatPrefix,
  MatSuffix,
  MatInputModule,
  MatInput,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatAutocompleteModule,
  MatAutocomplete,
  MatOption,
  MatAutocompleteTrigger,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  IconComponent,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\nicon[_ngcontent-%COMP%] {\n  top: 0.15em;\n  left: -0.15em;\n}\n/*# sourceMappingURL=user-search-field.component.css.map */"] });
var UserSearchFieldComponent = _UserSearchFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserSearchFieldComponent, [{
    type: Component,
    args: [{ selector: "a-user-search-field", template: `
        <mat-form-field appearance="outline" class="no-subscript w-full">
            <input
                #input
                matInput
                keyboard
                name="user-search"
                [(ngModel)]="search_str"
                (ngModelChange)="search$.next($event || '')"
                [disabled]="disabled"
                [placeholder]="placeholder || ('FORM.USER_SEARCH' | translate)"
                [matAutocomplete]="auto"
                (keyup.enter)="
                    validate && validate(search_str) ? setValue(search_str) : ''
                "
                (blur)="resetSearchString()"
                (focus)="cancelReset()"
            />
            <icon matPrefix class="relative text-2xl">search</icon>
            @if (loading) {
                <mat-spinner matSuffix diameter="16" />
            }
        </mat-form-field>
        <mat-autocomplete
            #auto="matAutocomplete"
            (optionSelected)="setValue($event.option.value)"
        >
            @for (option of user_list; track option) {
                <mat-option (click)="setValue(option); blurInput()">
                    <div class="leading-tight">{{ option.name }}</div>
                    <div class="w-full text-xs opacity-60">
                        {{ option.email }}
                        @if (
                            option.username && option.username !== option.email
                        ) {
                            <span>
                                (<span class="truncate">{{
                                    option.username
                                }}</span
                                >)
                            </span>
                        }
                    </div>
                </mat-option>
            }
            @if (search_str && validate && validate(search_str)) {
                <mat-option class="pointer-events-none relative">
                    <div
                        class="pointer-events-auto absolute inset-0 px-4"
                        (mousedown)="
                            $event.stopPropagation(); $event.preventDefault()
                        "
                        (touchstart)="
                            $event.stopPropagation(); $event.preventDefault()
                        "
                        (click)="
                            setValue(search_str);
                            $event.stopPropagation();
                            $event.preventDefault()
                        "
                    >
                        <div class="pointer-events-none">
                            {{
                                'FORM.USER_ADD_EXTERNAL'
                                    | translate: { name: search_str }
                            }}
                        </div>
                    </div>
                </mat-option>
            }
            @if (!user_list?.length && (search_str || error)) {
                <mat-option [disabled]="!empty_fn" (click)="empty_fn()">
                    {{ (search_str ? 'FORM.USER_EMPTY' : '') | translate }}
                    {{ error }}
                </mat-option>
            }
        </mat-autocomplete>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => UserSearchFieldComponent),
        multi: true
      }
    ], imports: [
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatAutocompleteModule,
      FormsModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;d84628be6394a4ab204c469dc548d2d04b7c619d7a49b10690a47d4a374a3d83;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/user-search-field.component.ts */\n:host {\n  display: block;\n}\nicon {\n  top: 0.15em;\n  left: -0.15em;\n}\n/*# sourceMappingURL=user-search-field.component.css.map */\n"] }]
  }], () => [], { disabled: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], options: [{
    type: Input
  }], guests: [{
    type: Input
  }], error: [{
    type: Input
  }], validate: [{
    type: Input
  }], empty_fn: [{
    type: Input
  }], filter: [{
    type: Input
  }], query_fn: [{
    type: Input
  }], _input_el: [{
    type: ViewChild,
    args: ["input", { read: ElementRef }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserSearchFieldComponent, { className: "UserSearchFieldComponent", filePath: "libs/form-fields/src/lib/user-search-field.component.ts", lineNumber: 145 });
})();

// node_modules/@placeos/svg-viewer/dist/index.es.js
var ue = function(e, n) {
  return ue = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, ue(e, n);
};
function R(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  ue(e, n);
  function t() {
    this.constructor = e;
  }
  e.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
}
function pt(e, n, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function c(u) {
      try {
        l(r.next(u));
      } catch (p) {
        s(p);
      }
    }
    function a(u) {
      try {
        l(r.throw(u));
      } catch (p) {
        s(p);
      }
    }
    function l(u) {
      u.done ? i(u.value) : o(u.value).then(c, a);
    }
    l((r = r.apply(e, n || [])).next());
  });
}
function Ve(e, n) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = c(0), s.throw = c(1), s.return = c(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function c(l) {
    return function(u) {
      return a([l, u]);
    };
  }
  function a(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, l[0] && (t = 0)), t; ) try {
      if (r = 1, o && (i = l[0] & 2 ? o.return : l[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, l[1])).done) return i;
      switch (o = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
        case 0:
        case 1:
          i = l;
          break;
        case 4:
          return t.label++, { value: l[1], done: false };
        case 5:
          t.label++, o = l[1], l = [0];
          continue;
        case 7:
          l = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            t = 0;
            continue;
          }
          if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
            t.label = l[1];
            break;
          }
          if (l[0] === 6 && t.label < i[1]) {
            t.label = i[1], i = l;
            break;
          }
          if (i && t.label < i[2]) {
            t.label = i[2], t.ops.push(l);
            break;
          }
          i[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      l = n.call(e, t);
    } catch (u) {
      l = [6, u], o = 0;
    } finally {
      r = i = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: true };
  }
}
function I(e) {
  var n = typeof Symbol == "function" && Symbol.iterator, t = n && e[n], r = 0;
  if (t) return t.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function D(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), o, i = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(o = r.next()).done; ) i.push(o.value);
  } catch (c) {
    s = { error: c };
  } finally {
    try {
      o && !o.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}
function ne(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
function P(e) {
  return this instanceof P ? (this.v = e, this) : new P(e);
}
function mt(e, n, t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = t.apply(e, n || []), o, i = [];
  return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", s), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function s(f) {
    return function(m) {
      return Promise.resolve(m).then(f, p);
    };
  }
  function c(f, m) {
    r[f] && (o[f] = function(y) {
      return new Promise(function(S, w) {
        i.push([f, y, S, w]) > 1 || a(f, y);
      });
    }, m && (o[f] = m(o[f])));
  }
  function a(f, m) {
    try {
      l(r[f](m));
    } catch (y) {
      d(i[0][3], y);
    }
  }
  function l(f) {
    f.value instanceof P ? Promise.resolve(f.value.v).then(u, p) : d(i[0][2], f);
  }
  function u(f) {
    a("next", f);
  }
  function p(f) {
    a("throw", f);
  }
  function d(f, m) {
    f(m), i.shift(), i.length && a(i[0][0], i[0][1]);
  }
}
function gt(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = e[Symbol.asyncIterator], t;
  return n ? n.call(e) : (e = typeof I == "function" ? I(e) : e[Symbol.iterator](), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function r(i) {
    t[i] = e[i] && function(s) {
      return new Promise(function(c, a) {
        s = e[i](s), o(c, a, s.done, s.value);
      });
    };
  }
  function o(i, s, c, a) {
    Promise.resolve(a).then(function(l) {
      i({ value: l, done: c });
    }, s);
  }
}
function h(e) {
  return typeof e == "function";
}
function je(e) {
  var n = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, t = e(n);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var ae = je(function(e) {
  return function(t) {
    e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(r, o) {
      return o + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function fe(e, n) {
  if (e) {
    var t = e.indexOf(n);
    0 <= t && e.splice(t, 1);
  }
}
var J = function() {
  function e(n) {
    this.initialTeardown = n, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var n, t, r, o, i;
    if (!this.closed) {
      this.closed = true;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var c = I(s), a = c.next(); !a.done; a = c.next()) {
              var l = a.value;
              l.remove(this);
            }
          } catch (y) {
            n = { error: y };
          } finally {
            try {
              a && !a.done && (t = c.return) && t.call(c);
            } finally {
              if (n) throw n.error;
            }
          }
        else
          s.remove(this);
      var u = this.initialTeardown;
      if (h(u))
        try {
          u();
        } catch (y) {
          i = y instanceof ae ? y.errors : [y];
        }
      var p = this._finalizers;
      if (p) {
        this._finalizers = null;
        try {
          for (var d = I(p), f = d.next(); !f.done; f = d.next()) {
            var m = f.value;
            try {
              Ce(m);
            } catch (y) {
              i = i ?? [], y instanceof ae ? i = ne(ne([], D(i)), D(y.errors)) : i.push(y);
            }
          }
        } catch (y) {
          r = { error: y };
        } finally {
          try {
            f && !f.done && (o = d.return) && o.call(d);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (i)
        throw new ae(i);
    }
  }, e.prototype.add = function(n) {
    var t;
    if (n && n !== this)
      if (this.closed)
        Ce(n);
      else {
        if (n instanceof e) {
          if (n.closed || n._hasParent(this))
            return;
          n._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(n);
      }
  }, e.prototype._hasParent = function(n) {
    var t = this._parentage;
    return t === n || Array.isArray(t) && t.includes(n);
  }, e.prototype._addParent = function(n) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(n), t) : t ? [t, n] : n;
  }, e.prototype._removeParent = function(n) {
    var t = this._parentage;
    t === n ? this._parentage = null : Array.isArray(t) && fe(t, n);
  }, e.prototype.remove = function(n) {
    var t = this._finalizers;
    t && fe(t, n), n instanceof e && n._removeParent(this);
  }, e.EMPTY = function() {
    var n = new e();
    return n.closed = true, n;
  }(), e;
}();
var Be = J.EMPTY;
function Ne(e) {
  return e instanceof J || e && "closed" in e && h(e.remove) && h(e.add) && h(e.unsubscribe);
}
function Ce(e) {
  h(e) ? e() : e.unsubscribe();
}
var _t = {
  Promise: void 0
};
var bt2 = {
  setTimeout: function(e, n) {
    for (var t = [], r = 2; r < arguments.length; r++)
      t[r - 2] = arguments[r];
    return setTimeout.apply(void 0, ne([e, n], D(t)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function Ue(e) {
  bt2.setTimeout(function() {
    throw e;
  });
}
function he() {
}
function ee2(e) {
  e();
}
var be = function(e) {
  R(n, e);
  function n(t) {
    var r = e.call(this) || this;
    return r.isStopped = false, t ? (r.destination = t, Ne(t) && t.add(r)) : r.destination = St, r;
  }
  return n.create = function(t, r, o) {
    return new de(t, r, o);
  }, n.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, n.prototype.error = function(t) {
    this.isStopped || (this.isStopped = true, this._error(t));
  }, n.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, n.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, e.prototype.unsubscribe.call(this), this.destination = null);
  }, n.prototype._next = function(t) {
    this.destination.next(t);
  }, n.prototype._error = function(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }, n.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, n;
}(J);
var wt = function() {
  function e(n) {
    this.partialObserver = n;
  }
  return e.prototype.next = function(n) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(n);
      } catch (r) {
        K(r);
      }
  }, e.prototype.error = function(n) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(n);
      } catch (r) {
        K(r);
      }
    else
      K(n);
  }, e.prototype.complete = function() {
    var n = this.partialObserver;
    if (n.complete)
      try {
        n.complete();
      } catch (t) {
        K(t);
      }
  }, e;
}();
var de = function(e) {
  R(n, e);
  function n(t, r, o) {
    var i = e.call(this) || this, s;
    return h(t) || !t ? s = {
      next: t ?? void 0,
      error: r ?? void 0,
      complete: o ?? void 0
    } : s = t, i.destination = new wt(s), i;
  }
  return n;
}(be);
function K(e) {
  Ue(e);
}
function xt(e) {
  throw e;
}
var St = {
  closed: true,
  next: he,
  error: xt,
  complete: he
};
var we = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Ye(e) {
  return e;
}
function Et(e) {
  return e.length === 0 ? Ye : e.length === 1 ? e[0] : function(t) {
    return e.reduce(function(r, o) {
      return o(r);
    }, t);
  };
}
var g = function() {
  function e(n) {
    n && (this._subscribe = n);
  }
  return e.prototype.lift = function(n) {
    var t = new e();
    return t.source = this, t.operator = n, t;
  }, e.prototype.subscribe = function(n, t, r) {
    var o = this, i = At(n) ? n : new de(n, t, r);
    return ee2(function() {
      var s = o, c = s.operator, a = s.source;
      i.add(c ? c.call(i, a) : a ? o._subscribe(i) : o._trySubscribe(i));
    }), i;
  }, e.prototype._trySubscribe = function(n) {
    try {
      return this._subscribe(n);
    } catch (t) {
      n.error(t);
    }
  }, e.prototype.forEach = function(n, t) {
    var r = this;
    return t = Oe(t), new t(function(o, i) {
      var s = new de({
        next: function(c) {
          try {
            n(c);
          } catch (a) {
            i(a), s.unsubscribe();
          }
        },
        error: i,
        complete: o
      });
      r.subscribe(s);
    });
  }, e.prototype._subscribe = function(n) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(n);
  }, e.prototype[we] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var n = [], t = 0; t < arguments.length; t++)
      n[t] = arguments[t];
    return Et(n)(this);
  }, e.prototype.toPromise = function(n) {
    var t = this;
    return n = Oe(n), new n(function(r, o) {
      var i;
      t.subscribe(function(s) {
        return i = s;
      }, function(s) {
        return o(s);
      }, function() {
        return r(i);
      });
    });
  }, e.create = function(n) {
    return new e(n);
  }, e;
}();
function Oe(e) {
  var n;
  return (n = e ?? _t.Promise) !== null && n !== void 0 ? n : Promise;
}
function Lt(e) {
  return e && h(e.next) && h(e.error) && h(e.complete);
}
function At(e) {
  return e && e instanceof be || Lt(e) && Ne(e);
}
function $t(e) {
  return h(e?.lift);
}
function V(e) {
  return function(n) {
    if ($t(n))
      return n.lift(function(t) {
        try {
          return e(t, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function O(e, n, t, r, o) {
  return new zt(e, n, t, r, o);
}
var zt = function(e) {
  R(n, e);
  function n(t, r, o, i, s, c) {
    var a = e.call(this, t) || this;
    return a.onFinalize = s, a.shouldUnsubscribe = c, a._next = r ? function(l) {
      try {
        r(l);
      } catch (u) {
        t.error(u);
      }
    } : e.prototype._next, a._error = i ? function(l) {
      try {
        i(l);
      } catch (u) {
        t.error(u);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, a._complete = o ? function() {
      try {
        o();
      } catch (l) {
        t.error(l);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, a;
  }
  return n.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      e.prototype.unsubscribe.call(this), !r && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, n;
}(be);
var Ct = je(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
});
var xe = function(e) {
  R(n, e);
  function n() {
    var t = e.call(this) || this;
    return t.closed = false, t.currentObservers = null, t.observers = [], t.isStopped = false, t.hasError = false, t.thrownError = null, t;
  }
  return n.prototype.lift = function(t) {
    var r = new Te(this, this);
    return r.operator = t, r;
  }, n.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Ct();
  }, n.prototype.next = function(t) {
    var r = this;
    ee2(function() {
      var o, i;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = I(r.currentObservers), c = s.next(); !c.done; c = s.next()) {
            var a = c.value;
            a.next(t);
          }
        } catch (l) {
          o = { error: l };
        } finally {
          try {
            c && !c.done && (i = s.return) && i.call(s);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    });
  }, n.prototype.error = function(t) {
    var r = this;
    ee2(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = true, r.thrownError = t;
        for (var o = r.observers; o.length; )
          o.shift().error(t);
      }
    });
  }, n.prototype.complete = function() {
    var t = this;
    ee2(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = true;
        for (var r = t.observers; r.length; )
          r.shift().complete();
      }
    });
  }, n.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(n.prototype, "observed", {
    get: function() {
      var t;
      return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
    },
    enumerable: false,
    configurable: true
  }), n.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
  }, n.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, n.prototype._innerSubscribe = function(t) {
    var r = this, o = this, i = o.hasError, s = o.isStopped, c = o.observers;
    return i || s ? Be : (this.currentObservers = null, c.push(t), new J(function() {
      r.currentObservers = null, fe(c, t);
    }));
  }, n.prototype._checkFinalizedStatuses = function(t) {
    var r = this, o = r.hasError, i = r.thrownError, s = r.isStopped;
    o ? t.error(i) : s && t.complete();
  }, n.prototype.asObservable = function() {
    var t = new g();
    return t.source = this, t;
  }, n.create = function(t, r) {
    return new Te(t, r);
  }, n;
}(g);
var Te = function(e) {
  R(n, e);
  function n(t, r) {
    var o = e.call(this) || this;
    return o.destination = t, o.source = r, o;
  }
  return n.prototype.next = function(t) {
    var r, o;
    (o = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || o === void 0 || o.call(r, t);
  }, n.prototype.error = function(t) {
    var r, o;
    (o = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || o === void 0 || o.call(r, t);
  }, n.prototype.complete = function() {
    var t, r;
    (r = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || r === void 0 || r.call(t);
  }, n.prototype._subscribe = function(t) {
    var r, o;
    return (o = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t)) !== null && o !== void 0 ? o : Be;
  }, n;
}(xe);
var De = function(e) {
  R(n, e);
  function n(t) {
    var r = e.call(this) || this;
    return r._value = t, r;
  }
  return Object.defineProperty(n.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  }), n.prototype._subscribe = function(t) {
    var r = e.prototype._subscribe.call(this, t);
    return !r.closed && t.next(this._value), r;
  }, n.prototype.getValue = function() {
    var t = this, r = t.hasError, o = t.thrownError, i = t._value;
    if (r)
      throw o;
    return this._throwIfClosed(), i;
  }, n.prototype.next = function(t) {
    e.prototype.next.call(this, this._value = t);
  }, n;
}(xe);
var Ot = new g(function(e) {
  return e.complete();
});
function Tt(e) {
  return e && h(e.schedule);
}
function He(e) {
  return e[e.length - 1];
}
function Pt(e) {
  return Tt(He(e)) ? e.pop() : void 0;
}
function Ft(e, n) {
  return typeof He(e) == "number" ? e.pop() : n;
}
var Se = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function Ge(e) {
  return h(e?.then);
}
function Je(e) {
  return h(e[we]);
}
function We(e) {
  return Symbol.asyncIterator && h(e?.[Symbol.asyncIterator]);
}
function Xe(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Mt() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Ze = Mt();
function Ke(e) {
  return h(e?.[Ze]);
}
function Qe(e) {
  return mt(this, arguments, function() {
    var t, r, o, i;
    return Ve(this, function(s) {
      switch (s.label) {
        case 0:
          t = e.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, P(t.read())];
        case 3:
          return r = s.sent(), o = r.value, i = r.done, i ? [4, P(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, P(o)];
        case 6:
          return [4, s.sent()];
        case 7:
          return s.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function ke(e) {
  return h(e?.getReader);
}
function A(e) {
  if (e instanceof g)
    return e;
  if (e != null) {
    if (Je(e))
      return qt(e);
    if (Se(e))
      return It(e);
    if (Ge(e))
      return Rt(e);
    if (We(e))
      return et(e);
    if (Ke(e))
      return Vt(e);
    if (ke(e))
      return jt(e);
  }
  throw Xe(e);
}
function qt(e) {
  return new g(function(n) {
    var t = e[we]();
    if (h(t.subscribe))
      return t.subscribe(n);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function It(e) {
  return new g(function(n) {
    for (var t = 0; t < e.length && !n.closed; t++)
      n.next(e[t]);
    n.complete();
  });
}
function Rt(e) {
  return new g(function(n) {
    e.then(function(t) {
      n.closed || (n.next(t), n.complete());
    }, function(t) {
      return n.error(t);
    }).then(null, Ue);
  });
}
function Vt(e) {
  return new g(function(n) {
    var t, r;
    try {
      for (var o = I(e), i = o.next(); !i.done; i = o.next()) {
        var s = i.value;
        if (n.next(s), n.closed)
          return;
      }
    } catch (c) {
      t = { error: c };
    } finally {
      try {
        i && !i.done && (r = o.return) && r.call(o);
      } finally {
        if (t) throw t.error;
      }
    }
    n.complete();
  });
}
function et(e) {
  return new g(function(n) {
    Bt(e, n).catch(function(t) {
      return n.error(t);
    });
  });
}
function jt(e) {
  return et(Qe(e));
}
function Bt(e, n) {
  var t, r, o, i;
  return pt(this, void 0, void 0, function() {
    var s, c;
    return Ve(this, function(a) {
      switch (a.label) {
        case 0:
          a.trys.push([0, 5, 6, 11]), t = gt(e), a.label = 1;
        case 1:
          return [4, t.next()];
        case 2:
          if (r = a.sent(), !!r.done) return [3, 4];
          if (s = r.value, n.next(s), n.closed)
            return [2];
          a.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return c = a.sent(), o = { error: c }, [3, 11];
        case 6:
          return a.trys.push([6, , 9, 10]), r && !r.done && (i = t.return) ? [4, i.call(t)] : [3, 8];
        case 7:
          a.sent(), a.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (o) throw o.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return n.complete(), [2];
      }
    });
  });
}
function C(e, n, t, r, o) {
  r === void 0 && (r = 0), o === void 0 && (o = false);
  var i = n.schedule(function() {
    t(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (e.add(i), !o)
    return i;
}
function tt(e, n) {
  return n === void 0 && (n = 0), V(function(t, r) {
    t.subscribe(O(r, function(o) {
      return C(r, e, function() {
        return r.next(o);
      }, n);
    }, function() {
      return C(r, e, function() {
        return r.complete();
      }, n);
    }, function(o) {
      return C(r, e, function() {
        return r.error(o);
      }, n);
    }));
  });
}
function nt(e, n) {
  return n === void 0 && (n = 0), V(function(t, r) {
    r.add(e.schedule(function() {
      return t.subscribe(r);
    }, n));
  });
}
function Nt(e, n) {
  return A(e).pipe(nt(n), tt(n));
}
function Ut(e, n) {
  return A(e).pipe(nt(n), tt(n));
}
function Yt(e, n) {
  return new g(function(t) {
    var r = 0;
    return n.schedule(function() {
      r === e.length ? t.complete() : (t.next(e[r++]), t.closed || this.schedule());
    });
  });
}
function Dt(e, n) {
  return new g(function(t) {
    var r;
    return C(t, n, function() {
      r = e[Ze](), C(t, n, function() {
        var o, i, s;
        try {
          o = r.next(), i = o.value, s = o.done;
        } catch (c) {
          t.error(c);
          return;
        }
        s ? t.complete() : t.next(i);
      }, 0, true);
    }), function() {
      return h(r?.return) && r.return();
    };
  });
}
function rt(e, n) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new g(function(t) {
    C(t, n, function() {
      var r = e[Symbol.asyncIterator]();
      C(t, n, function() {
        r.next().then(function(o) {
          o.done ? t.complete() : t.next(o.value);
        });
      }, 0, true);
    });
  });
}
function Ht(e, n) {
  return rt(Qe(e), n);
}
function Gt(e, n) {
  if (e != null) {
    if (Je(e))
      return Nt(e, n);
    if (Se(e))
      return Yt(e, n);
    if (Ge(e))
      return Ut(e, n);
    if (We(e))
      return rt(e, n);
    if (Ke(e))
      return Dt(e, n);
    if (ke(e))
      return Ht(e, n);
  }
  throw Xe(e);
}
function Jt(e, n) {
  return n ? Gt(e, n) : A(e);
}
function oe(e, n) {
  return V(function(t, r) {
    var o = 0;
    t.subscribe(O(r, function(i) {
      r.next(e.call(n, i, o++));
    }));
  });
}
var Wt = Array.isArray;
function Xt(e, n) {
  return Wt(n) ? e.apply(void 0, ne([], D(n))) : e(n);
}
function Zt(e) {
  return oe(function(n) {
    return Xt(e, n);
  });
}
function Kt(e, n, t, r, o, i, s, c) {
  var a = [], l = 0, u = 0, p = false, d = function() {
    p && !a.length && !l && n.complete();
  }, f = function(y) {
    return l < r ? m(y) : a.push(y);
  }, m = function(y) {
    l++;
    var S = false;
    A(t(y, u++)).subscribe(O(n, function(w) {
      n.next(w);
    }, function() {
      S = true;
    }, void 0, function() {
      if (S)
        try {
          l--;
          for (var w = function() {
            var z = a.shift();
            s || m(z);
          }; a.length && l < r; )
            w();
          d();
        } catch (z) {
          n.error(z);
        }
    }));
  };
  return e.subscribe(O(n, f, function() {
    p = true, d();
  })), function() {
  };
}
function Ee(e, n, t) {
  return t === void 0 && (t = 1 / 0), h(n) ? Ee(function(r, o) {
    return oe(function(i, s) {
      return n(r, i, o, s);
    })(A(e(r, o)));
  }, t) : (typeof n == "number" && (t = n), V(function(r, o) {
    return Kt(r, o, e, t);
  }));
}
function Qt(e) {
  return e === void 0 && (e = 1 / 0), Ee(Ye, e);
}
var kt = ["addListener", "removeListener"];
var en = ["addEventListener", "removeEventListener"];
var tn = ["on", "off"];
function ye(e, n, t, r) {
  if (h(t) && (r = t, t = void 0), r)
    return ye(e, n, t).pipe(Zt(r));
  var o = D(on(e) ? en.map(function(c) {
    return function(a) {
      return e[c](n, a, t);
    };
  }) : nn(e) ? kt.map(Pe(e, n)) : rn(e) ? tn.map(Pe(e, n)) : [], 2), i = o[0], s = o[1];
  if (!i && Se(e))
    return Ee(function(c) {
      return ye(c, n, t);
    })(A(e));
  if (!i)
    throw new TypeError("Invalid event target");
  return new g(function(c) {
    var a = function() {
      for (var l = [], u = 0; u < arguments.length; u++)
        l[u] = arguments[u];
      return c.next(1 < l.length ? l : l[0]);
    };
    return i(a), function() {
      return s(a);
    };
  });
}
function Pe(e, n) {
  return function(t) {
    return function(r) {
      return e[t](n, r);
    };
  };
}
function nn(e) {
  return h(e.addListener) && h(e.removeListener);
}
function rn(e) {
  return h(e.on) && h(e.off);
}
function on(e) {
  return h(e.addEventListener) && h(e.removeEventListener);
}
function sn() {
  for (var e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  var t = Pt(e), r = Ft(e, 1 / 0), o = e;
  return o.length ? o.length === 1 ? A(o[0]) : Qt(r)(Jt(o, t)) : Ot;
}
function ot(e, n) {
  return V(function(t, r) {
    var o = 0;
    t.subscribe(O(r, function(i) {
      return e.call(n, i, o++) && r.next(i);
    }));
  });
}
function cn(e, n) {
  return V(function(t, r) {
    var o = /* @__PURE__ */ new Set();
    t.subscribe(O(r, function(i) {
      var s = e ? e(i) : i;
      o.has(s) || (o.add(s), r.next(i));
    })), n && A(n).subscribe(O(r, function() {
      return o.clear();
    }, he));
  });
}
var U = {};
var E = {};
function T(e, n, t = 300) {
  if (e && n && n instanceof Function)
    it(e), U[e] = setTimeout(() => {
      n(), delete U[e];
    }, t);
  else
    throw new Error(
      e ? "Cannot create named timeout without a name" : "Cannot create a timeout without a callback"
    );
}
function it(e) {
  U[e] && (clearTimeout(U[e]), delete U[e]);
}
function st(e, n) {
  ct(e), E[e] = n;
}
function ct(e) {
  E && E[e] && (E[e] instanceof J ? E[e].unsubscribe() : E[e](), delete E[e]);
}
function an(e) {
  Object.keys(E).filter((n) => n.includes(e)).forEach((n) => ct(n));
}
function b(e, n, t, r = "debug", o = false, i = "SVG VIEWER") {
  if (window.debug || o) {
    const s = ["color: #E91E63", "color: #ffb300", "color: default"];
    t ? console[r](`%c[${i}]%c[${e}] %c${n}`, ...s, t) : console[r](`%c[${i}]%c[${e}] %c${n}`, ...s);
  }
}
function Le(e) {
  let n = e.replace(/[!"#$%&'()*+,.\/;<=>?@[\\\]^`{|}~]/g, "\\$&");
  const t = n.split(" ");
  for (const r of t)
    t.splice(t.indexOf(r), 1, [r.replace(/^\\/g, "")]);
  return n = t.join(" "), n;
}
function W(e) {
  return e ? e instanceof MouseEvent ? { x: e.clientX, y: e.clientY } : e.touches && e.touches.length > 0 ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: -1, y: -1 } : { x: -1, y: -1 };
}
function ln(e) {
  if (!e) return {};
  let n = {};
  const t = e?.getBoundingClientRect() || {}, r = e.querySelectorAll("[id]");
  e.id = "svg-viewer-root";
  const o = (i) => {
    const s = i?.getBoundingClientRect() || {};
    n[i.id] = {
      x: Math.floor((s.left + s.width / 2 - t.left) / t.width * 1e5) / 1e5,
      y: Math.floor((s.top + s.height / 2 - t.top) / t.height * 1e5) / 1e5,
      w: Math.floor(s.width / t.width * 1e5) / 1e5,
      h: Math.floor(s.height / t.height * 1e5) / 1e5
    };
  };
  return n["svg-viewer-root"] = {
    x: 0.5,
    y: 0.5,
    w: 1,
    h: 1
  }, r.forEach(o), n;
}
function un(e, n, t) {
  const r = e.element?.querySelector(".svg-viewer__svg-overlays"), o = e.element?.querySelector("svg"), i = o?.querySelector(`#${Le(n)}`);
  if (i && o && r) {
    const s = t || r?.getBoundingClientRect() || {}, c = i?.getBoundingClientRect() || {};
    return {
      x: (c.left + c.width / 2 - s.left) / s.width,
      y: (c.top + c.height / 2 - s.top) / s.height
    };
  } else
    b("DOM", `Unable to find element with ID ${n}`, void 0, "warn");
  return { x: -1, y: -1 };
}
function ie(e, n, t, r = 1) {
  const o = e.element?.querySelector(".svg-viewer__svg-overlays");
  if (e.element?.querySelector("svg") && o) {
    const s = o?.getBoundingClientRect() || {};
    return {
      x: Math.max(0, Math.min(1, (n.x - s.left) / s.width * r)),
      y: Math.max(0, Math.min(1, (n.y - s.top) / s.height * r))
    };
  } else
    b("DOM", "Unable to find SVG element", void 0, "warn");
  return { x: -1, y: -1 };
}
function at(e, n) {
  return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
}
function lt(e, n, t) {
  return {
    x: e.x + (n.x - e.x) * t,
    y: e.y + (n.y - e.y) * t
  };
}
function fn(e) {
  if (!e) return "";
  const n = __spreadValues({}, e);
  for (const t in n)
    n[t] instanceof Object && (n[t] = `${n[t]}`);
  return n;
}
function Q(e) {
  return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e === 62 ? 43 : e === 63 ? 47 : 65;
}
function hn(e) {
  for (var n = 2, t = "", r = e.length, o = 0, i = 0; i < r; i++)
    n = i % 3, i > 0 && i * 4 / 3 % 76 === 0 && (t += `\r
`), o |= e[i] << (16 >>> n & 24), (n === 2 || e.length - i === 1) && (t += String.fromCodePoint(
      Q(o >>> 18 & 63),
      Q(o >>> 12 & 63),
      Q(o >>> 6 & 63),
      Q(o & 63)
    ), o = 0);
  return t.substr(0, t.length - 2 + n) + (n === 2 ? "" : n === 1 ? "=" : "==");
}
function dn(e) {
  for (var n, t, r = e.length, o = 0, i = 0; i < r; i++)
    t = e.codePointAt(i) ?? 0, t > 65536 && i++, o += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : t < 2097152 ? 4 : t < 67108864 ? 5 : 6;
  n = new Uint8Array(o);
  for (var s = 0, c = 0; s < o; c++)
    t = e.codePointAt(c) ?? 0, t < 128 ? n[s++] = t : t < 2048 ? (n[s++] = 192 + (t >>> 6), n[s++] = 128 + (t & 63)) : t < 65536 ? (n[s++] = 224 + (t >>> 12), n[s++] = 128 + (t >>> 6 & 63), n[s++] = 128 + (t & 63)) : t < 2097152 ? (n[s++] = 240 + (t >>> 18), n[s++] = 128 + (t >>> 12 & 63), n[s++] = 128 + (t >>> 6 & 63), n[s++] = 128 + (t & 63), c++) : t < 67108864 ? (n[s++] = 248 + (t >>> 24), n[s++] = 128 + (t >>> 18 & 63), n[s++] = 128 + (t >>> 12 & 63), n[s++] = 128 + (t >>> 6 & 63), n[s++] = 128 + (t & 63), c++) : (n[s++] = 252 + (t >>> 30), n[s++] = 128 + (t >>> 24 & 63), n[s++] = 128 + (t >>> 18 & 63), n[s++] = 128 + (t >>> 12 & 63), n[s++] = 128 + (t >>> 6 & 63), n[s++] = 128 + (t & 63), c++);
  return n;
}
function yn(e) {
  return hn(dn(e));
}
var v = class _v {
  constructor() {
    this._dataLength = 0, this._bufferLength = 0, this._state = new Int32Array(4), this._buffer = new ArrayBuffer(68), this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
  }
  static hashStr(n, t = false) {
    return this.onePassHasher.start().appendStr(n).end(t);
  }
  static hashAsciiStr(n, t = false) {
    return this.onePassHasher.start().appendAsciiStr(n).end(t);
  }
  static _hex(n) {
    const t = _v.hexChars, r = _v.hexOut;
    let o, i, s, c;
    for (c = 0; c < 4; c += 1)
      for (i = c * 8, o = n[c], s = 0; s < 8; s += 2)
        r[i + 1 + s] = t.charAt(o & 15), o >>>= 4, r[i + 0 + s] = t.charAt(o & 15), o >>>= 4;
    return r.join("");
  }
  static _md5cycle(n, t) {
    let r = n[0], o = n[1], i = n[2], s = n[3];
    r += (o & i | ~o & s) + t[0] - 680876936 | 0, r = (r << 7 | r >>> 25) + o | 0, s += (r & o | ~r & i) + t[1] - 389564586 | 0, s = (s << 12 | s >>> 20) + r | 0, i += (s & r | ~s & o) + t[2] + 606105819 | 0, i = (i << 17 | i >>> 15) + s | 0, o += (i & s | ~i & r) + t[3] - 1044525330 | 0, o = (o << 22 | o >>> 10) + i | 0, r += (o & i | ~o & s) + t[4] - 176418897 | 0, r = (r << 7 | r >>> 25) + o | 0, s += (r & o | ~r & i) + t[5] + 1200080426 | 0, s = (s << 12 | s >>> 20) + r | 0, i += (s & r | ~s & o) + t[6] - 1473231341 | 0, i = (i << 17 | i >>> 15) + s | 0, o += (i & s | ~i & r) + t[7] - 45705983 | 0, o = (o << 22 | o >>> 10) + i | 0, r += (o & i | ~o & s) + t[8] + 1770035416 | 0, r = (r << 7 | r >>> 25) + o | 0, s += (r & o | ~r & i) + t[9] - 1958414417 | 0, s = (s << 12 | s >>> 20) + r | 0, i += (s & r | ~s & o) + t[10] - 42063 | 0, i = (i << 17 | i >>> 15) + s | 0, o += (i & s | ~i & r) + t[11] - 1990404162 | 0, o = (o << 22 | o >>> 10) + i | 0, r += (o & i | ~o & s) + t[12] + 1804603682 | 0, r = (r << 7 | r >>> 25) + o | 0, s += (r & o | ~r & i) + t[13] - 40341101 | 0, s = (s << 12 | s >>> 20) + r | 0, i += (s & r | ~s & o) + t[14] - 1502002290 | 0, i = (i << 17 | i >>> 15) + s | 0, o += (i & s | ~i & r) + t[15] + 1236535329 | 0, o = (o << 22 | o >>> 10) + i | 0, r += (o & s | i & ~s) + t[1] - 165796510 | 0, r = (r << 5 | r >>> 27) + o | 0, s += (r & i | o & ~i) + t[6] - 1069501632 | 0, s = (s << 9 | s >>> 23) + r | 0, i += (s & o | r & ~o) + t[11] + 643717713 | 0, i = (i << 14 | i >>> 18) + s | 0, o += (i & r | s & ~r) + t[0] - 373897302 | 0, o = (o << 20 | o >>> 12) + i | 0, r += (o & s | i & ~s) + t[5] - 701558691 | 0, r = (r << 5 | r >>> 27) + o | 0, s += (r & i | o & ~i) + t[10] + 38016083 | 0, s = (s << 9 | s >>> 23) + r | 0, i += (s & o | r & ~o) + t[15] - 660478335 | 0, i = (i << 14 | i >>> 18) + s | 0, o += (i & r | s & ~r) + t[4] - 405537848 | 0, o = (o << 20 | o >>> 12) + i | 0, r += (o & s | i & ~s) + t[9] + 568446438 | 0, r = (r << 5 | r >>> 27) + o | 0, s += (r & i | o & ~i) + t[14] - 1019803690 | 0, s = (s << 9 | s >>> 23) + r | 0, i += (s & o | r & ~o) + t[3] - 187363961 | 0, i = (i << 14 | i >>> 18) + s | 0, o += (i & r | s & ~r) + t[8] + 1163531501 | 0, o = (o << 20 | o >>> 12) + i | 0, r += (o & s | i & ~s) + t[13] - 1444681467 | 0, r = (r << 5 | r >>> 27) + o | 0, s += (r & i | o & ~i) + t[2] - 51403784 | 0, s = (s << 9 | s >>> 23) + r | 0, i += (s & o | r & ~o) + t[7] + 1735328473 | 0, i = (i << 14 | i >>> 18) + s | 0, o += (i & r | s & ~r) + t[12] - 1926607734 | 0, o = (o << 20 | o >>> 12) + i | 0, r += (o ^ i ^ s) + t[5] - 378558 | 0, r = (r << 4 | r >>> 28) + o | 0, s += (r ^ o ^ i) + t[8] - 2022574463 | 0, s = (s << 11 | s >>> 21) + r | 0, i += (s ^ r ^ o) + t[11] + 1839030562 | 0, i = (i << 16 | i >>> 16) + s | 0, o += (i ^ s ^ r) + t[14] - 35309556 | 0, o = (o << 23 | o >>> 9) + i | 0, r += (o ^ i ^ s) + t[1] - 1530992060 | 0, r = (r << 4 | r >>> 28) + o | 0, s += (r ^ o ^ i) + t[4] + 1272893353 | 0, s = (s << 11 | s >>> 21) + r | 0, i += (s ^ r ^ o) + t[7] - 155497632 | 0, i = (i << 16 | i >>> 16) + s | 0, o += (i ^ s ^ r) + t[10] - 1094730640 | 0, o = (o << 23 | o >>> 9) + i | 0, r += (o ^ i ^ s) + t[13] + 681279174 | 0, r = (r << 4 | r >>> 28) + o | 0, s += (r ^ o ^ i) + t[0] - 358537222 | 0, s = (s << 11 | s >>> 21) + r | 0, i += (s ^ r ^ o) + t[3] - 722521979 | 0, i = (i << 16 | i >>> 16) + s | 0, o += (i ^ s ^ r) + t[6] + 76029189 | 0, o = (o << 23 | o >>> 9) + i | 0, r += (o ^ i ^ s) + t[9] - 640364487 | 0, r = (r << 4 | r >>> 28) + o | 0, s += (r ^ o ^ i) + t[12] - 421815835 | 0, s = (s << 11 | s >>> 21) + r | 0, i += (s ^ r ^ o) + t[15] + 530742520 | 0, i = (i << 16 | i >>> 16) + s | 0, o += (i ^ s ^ r) + t[2] - 995338651 | 0, o = (o << 23 | o >>> 9) + i | 0, r += (i ^ (o | ~s)) + t[0] - 198630844 | 0, r = (r << 6 | r >>> 26) + o | 0, s += (o ^ (r | ~i)) + t[7] + 1126891415 | 0, s = (s << 10 | s >>> 22) + r | 0, i += (r ^ (s | ~o)) + t[14] - 1416354905 | 0, i = (i << 15 | i >>> 17) + s | 0, o += (s ^ (i | ~r)) + t[5] - 57434055 | 0, o = (o << 21 | o >>> 11) + i | 0, r += (i ^ (o | ~s)) + t[12] + 1700485571 | 0, r = (r << 6 | r >>> 26) + o | 0, s += (o ^ (r | ~i)) + t[3] - 1894986606 | 0, s = (s << 10 | s >>> 22) + r | 0, i += (r ^ (s | ~o)) + t[10] - 1051523 | 0, i = (i << 15 | i >>> 17) + s | 0, o += (s ^ (i | ~r)) + t[1] - 2054922799 | 0, o = (o << 21 | o >>> 11) + i | 0, r += (i ^ (o | ~s)) + t[8] + 1873313359 | 0, r = (r << 6 | r >>> 26) + o | 0, s += (o ^ (r | ~i)) + t[15] - 30611744 | 0, s = (s << 10 | s >>> 22) + r | 0, i += (r ^ (s | ~o)) + t[6] - 1560198380 | 0, i = (i << 15 | i >>> 17) + s | 0, o += (s ^ (i | ~r)) + t[13] + 1309151649 | 0, o = (o << 21 | o >>> 11) + i | 0, r += (i ^ (o | ~s)) + t[4] - 145523070 | 0, r = (r << 6 | r >>> 26) + o | 0, s += (o ^ (r | ~i)) + t[11] - 1120210379 | 0, s = (s << 10 | s >>> 22) + r | 0, i += (r ^ (s | ~o)) + t[2] + 718787259 | 0, i = (i << 15 | i >>> 17) + s | 0, o += (s ^ (i | ~r)) + t[9] - 343485551 | 0, o = (o << 21 | o >>> 11) + i | 0, n[0] = r + n[0] | 0, n[1] = o + n[1] | 0, n[2] = i + n[2] | 0, n[3] = s + n[3] | 0;
  }
  /**
   * Initialise buffer to be hashed
   */
  start() {
    return this._dataLength = 0, this._bufferLength = 0, this._state.set(_v.stateIdentity), this;
  }
  // Char to code point to to array conversion:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
  /**
   * Append a UTF-8 string to the hash buffer
   * @param str String to append
   */
  appendStr(n) {
    const t = this._buffer8, r = this._buffer32;
    let o = this._bufferLength, i, s;
    for (s = 0; s < n.length; s += 1) {
      if (i = n.charCodeAt(s), i < 128)
        t[o++] = i;
      else if (i < 2048)
        t[o++] = (i >>> 6) + 192, t[o++] = i & 63 | 128;
      else if (i < 55296 || i > 56319)
        t[o++] = (i >>> 12) + 224, t[o++] = i >>> 6 & 63 | 128, t[o++] = i & 63 | 128;
      else {
        if (i = (i - 55296) * 1024 + (n.charCodeAt(++s) - 56320) + 65536, i > 1114111)
          throw new Error("Unicode standard supports code points up to U+10FFFF");
        t[o++] = (i >>> 18) + 240, t[o++] = i >>> 12 & 63 | 128, t[o++] = i >>> 6 & 63 | 128, t[o++] = i & 63 | 128;
      }
      o >= 64 && (this._dataLength += 64, _v._md5cycle(this._state, r), o -= 64, r[0] = r[16]);
    }
    return this._bufferLength = o, this;
  }
  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  appendAsciiStr(n) {
    const t = this._buffer8, r = this._buffer32;
    let o = this._bufferLength, i, s = 0;
    for (; ; ) {
      for (i = Math.min(n.length - s, 64 - o); i--; )
        t[o++] = n.charCodeAt(s++);
      if (o < 64)
        break;
      this._dataLength += 64, _v._md5cycle(this._state, r), o = 0;
    }
    return this._bufferLength = o, this;
  }
  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  appendByteArray(n) {
    const t = this._buffer8, r = this._buffer32;
    let o = this._bufferLength, i, s = 0;
    for (; ; ) {
      for (i = Math.min(n.length - s, 64 - o); i--; )
        t[o++] = n[s++];
      if (o < 64)
        break;
      this._dataLength += 64, _v._md5cycle(this._state, r), o = 0;
    }
    return this._bufferLength = o, this;
  }
  /**
   * Get the state of the hash buffer
   */
  getState() {
    const n = this._state;
    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [n[0], n[1], n[2], n[3]]
    };
  }
  /**
   * Override the current state of the hash buffer
   * @param state New hash buffer state
   */
  setState(n) {
    const t = n.buffer, r = n.state, o = this._state;
    let i;
    for (this._dataLength = n.length, this._bufferLength = n.buflen, o[0] = r[0], o[1] = r[1], o[2] = r[2], o[3] = r[3], i = 0; i < t.length; i += 1)
      this._buffer8[i] = t.charCodeAt(i);
  }
  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  end(n = false) {
    const t = this._bufferLength, r = this._buffer8, o = this._buffer32, i = (t >> 2) + 1;
    this._dataLength += t;
    const s = this._dataLength * 8;
    if (r[t] = 128, r[t + 1] = r[t + 2] = r[t + 3] = 0, o.set(_v.buffer32Identity.subarray(i), i), t > 55 && (_v._md5cycle(this._state, o), o.set(_v.buffer32Identity)), s <= 4294967295)
      o[14] = s;
    else {
      const c = s.toString(16).match(/(.*?)(.{0,8})$/);
      if (c === null)
        return;
      const a = parseInt(c[2], 16), l = parseInt(c[1], 16) || 0;
      o[14] = a, o[15] = l;
    }
    return _v._md5cycle(this._state, o), n ? this._state : _v._hex(this._state);
  }
};
v.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
v.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
v.hexChars = "0123456789abcdef";
v.hexOut = [];
v.onePassHasher = new v();
if (v.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");
var k = { top: 0, left: 0, height: 0, width: 0 };
var te = class {
  /** Unique Identifier for the Viewer */
  id;
  /** URL associated with the map data */
  url;
  /** Element the SVG is attached */
  element;
  /** Labels to render over the SVG */
  labels;
  /** Features to render over the SVG */
  features;
  /** Actions to listen for on the SVG */
  actions;
  /** Point or Element to focus on in the viewer */
  focus;
  /** Styles to apply the SVG */
  styles;
  /** Raw SVG data */
  svg_data;
  /** Zoom level of the SVG. Number from 1 - 10 */
  zoom;
  /** Center point of the SVG on the view */
  center;
  /** Rotation angle of the SVG on the view */
  rotate;
  /** Ratio that the height to width of the SVG is */
  ratio;
  /** Ratio that the height to width of the SVG is */
  svg_ratio;
  /** Box dimensions for the root element of the viewer */
  box;
  /** Zoom level of the SVG. Number from 1 - 10 */
  desired_zoom;
  /** Center point of the SVG on the view */
  desired_center;
  /** Whether zoom and center still need updating */
  needs_update;
  /**  */
  options;
  /** Max resolution for the render iframe image */
  max_resolution;
  /**  */
  updated_count;
  /** Mapping of element positions to their IDs */
  mappings;
  /** Whether to use GPU for rendering map view changes */
  use_gpu;
  /** Ratio of the map rendered to the container element */
  content_ratio;
  contains(n) {
    this.svg_data.includes(`id="${n}"`);
  }
  constructor(n) {
    if (this.id = n.id || `map-${Math.floor(Math.random() * 999999)}`, this.url = n.url || `local-${v.hashAsciiStr(n.svg_data || "")}`, this.element = n.element || null, this.labels = n.labels || [], this.features = n.features || [], this.actions = n.actions || [], this.styles = n.styles || {}, this.svg_data = n.svg_data || "", this.content_ratio = n.content_ratio || { x: 1, y: 1 }, this.zoom = n.zoom || 1, this.center = { x: n.center?.x ?? 0.5, y: n.center?.y ?? 0.5 }, this.rotate = n.rotate || 0, this.ratio = n.ratio || 1, this.svg_ratio = n.svg_ratio || 1, this.max_resolution = n.max_resolution || window.innerWidth * window.innerHeight * 10, this.focus = n.focus || null, this.options = n.options || {}, this.mappings = n.mappings || {}, this.box = {
      top: (n.box || k).top,
      left: (n.box || k).left,
      height: (n.box || k).height,
      width: (n.box || k).width
    }, this.desired_zoom = n.desired_zoom || n.zoom || this.zoom, this.desired_center = {
      x: n.desired_center?.x || this.center.x,
      y: n.desired_center?.y || this.center.y
    }, this.updated_count = (n.updated_count || 0) + 1, this.zoom !== this.desired_zoom) {
      const t = this.desired_zoom - this.zoom >= 0 ? 1 : -1, r = Math.min(0.05, Math.abs(this.desired_zoom - this.zoom)), o = Math.round(r / Math.abs(this.desired_zoom - this.zoom) * 1e3) / 1e3;
      this.zoom = r === 0.05 ? this.zoom + t * r : this.desired_zoom, this.center = {
        x: this.center.x + (this.desired_center.x - this.center.x) * o,
        y: this.center.y + (this.desired_center.y - this.center.y) * o
      };
    } else if (this.desired_center.x !== this.center.x || this.desired_center.y !== this.center.y) {
      const t = this.desired_center.x - this.center.x >= 0 ? 1 : -1, r = this.desired_center.y - this.center.y >= 0 ? 1 : -1, o = Math.min(0.01, Math.abs(this.desired_center.x - this.center.x)), s = o / Math.abs(this.desired_center.x - this.center.x) * Math.abs(this.desired_center.y - this.center.y);
      this.center = {
        x: this.center.x + t * o,
        y: this.center.y + r * s
      };
    }
    this.needs_update = this.desired_zoom !== this.zoom || this.desired_center.x !== this.center.x || this.desired_center.y !== this.center.y, this.use_gpu = n?.use_gpu ?? true;
  }
};
var j = new De([]);
var ut = new xe();
var vn = ut.pipe(ot((e) => e === "resize"));
function pn(e) {
  ut.next(e);
}
function $(e) {
  return j.getValue().find((n) => n.id === e);
}
function x(e, n) {
  if (e = X().find((o) => o.id === (e instanceof te ? e.id : e)), !(e instanceof te)) return null;
  delete n.url;
  const r = new te(__spreadValues(__spreadValues({}, e), n));
  return ft(r), r.needs_update && T(`${e.id}_updating`, () => x(r, {}), 16), r;
}
function mn(e) {
  return j.pipe(
    ot((n) => !!n.find((t) => t.id === e)),
    oe((n) => n.find((t) => t.id === e)),
    cn()
  );
}
function ft(e) {
  const n = X().filter((t) => t.id !== e.id);
  n.push(e), j.next(n);
}
function gn(e) {
  const n = X().filter((t) => t.id !== e.id);
  j.next(n);
}
function X() {
  return j.getValue();
}
var Fe = new De({});
var Me = {};
var Z = false;
var se = false;
var Y;
var F;
var re;
var L;
var M;
var _;
var q;
var _n = [
  "click",
  "mousedown",
  "mousemove",
  "mouseup",
  "touchstart",
  "touchmove",
  "touchend",
  "mousewheel",
  "wheel"
];
var bn = [
  "mousedown",
  "mousemove",
  "mousewheel",
  "wheel",
  "touchstart",
  "touchmove"
];
var qe = false;
window.addEventListener("blur", () => H());
function wn(e) {
  const n = JSON.stringify(e.focus);
  if (e.focus && n !== Me[e.id]) {
    let t = { x: 0, y: 0 };
    const r = Math.max(0.5, Math.min(10, e.focus.zoom_level || 1));
    typeof e.focus.location == "string" ? t = un(e, e.focus.location) : t = e.focus.location, Me[e.id] = n;
    const o = { x: 1 - t.x, y: 1 - t.y };
    x(e, {
      center: o,
      desired_center: o,
      zoom: r,
      desired_zoom: r
    });
  }
}
function xn() {
  qe || (window.addEventListener("resize", () => pn("resize")), window.addEventListener("blur", () => H()), qe = true);
}
function Sn(e, n = _n) {
  const t = Fe.getValue(), r = e.element;
  t[e.id] && t[e.id].unsubscribe();
  const o = [];
  for (const i of n)
    o.push(
      ye(r, i).pipe(oe((s) => ({ id: e.id, type: i, event: s })))
    );
  t[e.id] = sn(...o).subscribe((i) => {
    const { id: s, type: c, event: a } = i, l = a;
    switch (bn.includes(c) && l.preventDefault(), Cn(i), c) {
      case "touchstart":
      case "mousedown":
        l.touches?.length >= 2 ? An(s, l) : Ln(s, l);
        break;
      case "touchend":
      case "mouseup":
        !se && !Z && En(s, l), H();
        break;
      case "mousewheel":
      case "wheel":
        zn(s, l);
        break;
    }
  }), Fe.next(t);
}
function En(e, n) {
  const t = $(e);
  t && b("INPUT", "Clicked:", ie(t, W(n)));
}
function Ln(e, n) {
  if (Z) return;
  b("INPUT", "Starting panning...");
  const t = $(e);
  L && window.removeEventListener("mousemove", L), L && window.removeEventListener("mouseup", M), _ && window.removeEventListener("touchmove", _), _ && window.removeEventListener("touchend", q), t && !t.options.disable_pan && (Y = W(n), n instanceof MouseEvent ? (L = (r) => Ie(e, r, Y), M = () => H(), window.addEventListener("mousemove", L), window.addEventListener("mouseup", M)) : (_ = (r) => Ie(e, r, Y), q = () => H(), window.addEventListener("touchmove", _), window.addEventListener("touchend", q)), T("pan_start", () => se = true, 200));
}
function Ie(e, n, t = Y) {
  if (Z) return;
  se = true;
  const r = $(e);
  if (r) {
    const o = W(n), i = {
      x: Math.max(
        0,
        Math.min(
          1,
          (o.x - t.x) / r.box.width / r.desired_zoom / r.svg_ratio + r.center.x
        )
      ),
      y: Math.max(
        0,
        Math.min(
          1,
          (o.y - t.y) / r.box.height / r.desired_zoom / r.svg_ratio + r.center.y
        )
      )
    };
    Y = o, x(r, { center: i, desired_center: i });
  }
}
function An(e, n) {
  b("INPUT", "Starting pinching..."), _ && window.removeEventListener("touchmove", _);
  const t = $(e);
  if (Z = true, t && !t.options.disable_zoom) {
    const r = [
      { x: n.touches[0].clientX, y: n.touches[0].clientY },
      { x: n.touches[1].clientX, y: n.touches[1].clientY }
    ], o = r.map((c) => ie(t, c)), { x: i, y: s } = {
      x: (o[0].x + o[1].x) / 2,
      y: (o[0].y + o[1].y) / 2
    };
    F = { x: 1 - i, y: 1 - s }, re = at(r[0], r[1]), n instanceof MouseEvent || (_ = (c) => c.touches.length >= 2 ? $n(e, c, re) : "", window.addEventListener("touchmove", _));
  }
}
function $n(e, n, t = re) {
  const r = $(e);
  if (r && !r.options.disable_zoom) {
    const o = [
      { x: n.touches[0].clientX, y: n.touches[0].clientY },
      { x: n.touches[1].clientX, y: n.touches[1].clientY }
    ], i = at(o[0], o[1]), s = Math.max(0.5, Math.min(10, r.zoom * i / t)), c = 1 - r.zoom / s, a = s != r.zoom ? lt(r.center, F, c) : r.center;
    re = i, x(r, {
      zoom: s,
      center: a,
      desired_zoom: s,
      desired_center: a
    });
  }
}
function H() {
  b("INPUT", "Ending pinch/pan..."), it("pan_start"), Z = false, se = false, L && window.removeEventListener("mousemove", L), M && window.removeEventListener("mouseup", M), _ && window.removeEventListener("touchmove", _), q && window.removeEventListener("touchend", q), L = M = _ = q = F = null;
}
function zn(e, n) {
  const t = $(e);
  if (t) {
    const r = n.deltaY >= 0 ? -0.02 : 0.02, o = Math.min(10, Math.max(0.5, t.zoom * (1 + r))), { x: i, y: s } = ie(t, W(n));
    F = { x: 1 - i, y: 1 - s }, T("clear_action_start", () => F = null);
    const c = 1 - t.zoom / o, a = o != t.zoom ? lt(t.center, F, c) : t.center;
    x(t, {
      zoom: o,
      center: a,
      desired_zoom: o,
      desired_center: a
    });
  }
}
function Cn(e) {
  const { id: n, type: t, event: r } = e, o = $(n);
  if (!o || !o.actions?.length) return;
  const s = o.actions.sort((c, a) => (a.priority || 0) - (c.priority || 0)).find(
    (c) => c.action.includes(t) && (c.id === "*" || c.id === r.target?.id)
  );
  s && s.callback(r, ie(o, W(r)));
}
var B = {};
var Re = {};
var ve = {};
var pe = {};
var me = {};
var G = {};
var N = {};
st(
  "on_resize",
  vn.subscribe(() => {
    const e = X();
    for (const n of e)
      try {
        T(`resize-${n.id}`, () => yt(n));
      } catch (t) {
        console.warn(t);
      }
  })
);
function On(e) {
  return __async(this, null, function* () {
    const n = e.element;
    if (!n) throw new Error("No element set on viewer");
    const t = document.createElement("div"), r = document.createElement("style"), o = document.createElement("div"), i = document.createElement("div"), s = document.createElement("div"), c = document.createElement("div"), a = document.createElement("iframe");
    i.appendChild(s), i.appendChild(c), t.appendChild(r), t.appendChild(o), o.appendChild(i), t.classList.add("svg-viewer"), t.id = e.id, r.id = e.id, a.id = "svg-display", a.classList.add("svg-viewer__iframe"), o.classList.add("svg-viewer__view-container"), i.classList.add("svg-viewer__render-container"), c.classList.add("svg-viewer__svg-overlays"), s.classList.add("svg-viewer__svg-output"), s.id = "svg-output", s.innerHTML = e.svg_data;
    const l = s.firstElementChild?.viewBox?.baseVal || {};
    o.style.width = `${l.width}px`, o.style.height = `${l.height}px`, c.style.width = `${l.width}px`, c.style.height = `${l.height}px`, c.appendChild(a), n.appendChild(t);
    const u = o?.getBoundingClientRect() || {}, p = x(e, { box: u });
    p && (e = p, yield ht(e), Sn(e), xn(), yt(e));
  });
}
function ht(e) {
  return new Promise((n) => {
    requestAnimationFrame(() => {
      const t = e.element?.querySelector("svg");
      if (!t || !t.clientWidth)
        return T(
          `${e.id}-setup`,
          () => ht(e).then((o) => n()),
          100
        );
      const r = Re[e.url] || ln(t);
      Re[e.url] = r, x(e, { mappings: r }), t.style.display = "none", Tn(e), Ae(e), n();
    });
  });
}
function dt(e) {
  return B[e.id] || (B[e.id] = new Promise((n) => {
    const t = requestAnimationFrame(() => {
      if (!B[e.id]) return;
      const r = e.element;
      if (!r) throw new Error("No element set on viewer");
      const o = r.querySelector("style");
      let i = "";
      const s = r.querySelector(
        ".svg-viewer__render-container"
      ), c = `scale(${e.zoom * e.svg_ratio})`;
      if (!s || !o) throw new Error("Viewer is not setup yet.");
      const a = (e.center.x - 0.5) * (100 * e.zoom * e.svg_ratio), l = (e.center.y - 0.5) * (100 * e.zoom * e.svg_ratio), u = e.use_gpu ? `translate3d(${a}%, ${l}%, 0)` : `translate(${a}%, ${l}%)`;
      s.style.transform = `${u} ${c} rotate(${e.rotate}deg)`, i += `#${e.id} .svg-viewer__svg-overlay-item > *:not([no-scale="true"]) { transform: rotate(-${e.rotate}deg) scale(${1 / e.zoom * (1 / e.svg_ratio)}); }`, i += `#${e.id} .svg-viewer__svg-overlay-item > * { transform: rotate(-${e.rotate}deg); height: 100%; width: 100%; }`, o.innerHTML = i, ge(e), wn(e), Ae(e), delete B[e.id], cancelAnimationFrame(t), n();
    });
  })), B[e.id];
}
function Tn(e) {
  return __async(this, null, function* () {
    const n = JSON.stringify(__spreadValues({}, e.styles)) || "";
    if (n.localeCompare(G[e.id])) {
      const t = e.element;
      if (!t) throw new Error("No element set on viewer");
      const r = t.querySelector(".svg-viewer__iframe"), o = t.querySelector(".svg-viewer__svg-output");
      if (!r) throw new Error("No iframe created for viewer");
      const i = o.firstElementChild?.viewBox?.baseVal || {};
      let s = `${e.svg_data}`;
      s = /<svg[^>]*width="[^>]*>/.test(s) ? s : s.replace(
        "<svg",
        `<svg width="${i.width}" height="${i.height}" `
      );
      const c = `
<script>
    function updateStyles(evt) {
        try {
            var message = JSON.parse(evt.data);
            if (message.id === 'svg-styles') {
                const style_el = document.getElementById('style');
                style_el.innerHTML = message.content;
            }
        } catch(e) {}
    }

    if (window.addEventListener) {
        window.addEventListener("message", updateStyles, false);
    } else {
        window.attachEvent("onmessage", updateStyles);
    }
<\/script>`, a = {}, l = vt(__spreadValues(__spreadValues({}, e.styles), a)), d = "data:text/html;base64," + yn(
        `<html><head><style>*{overflow:hidden;}html,body{padding:0;margin:0;}</style><style id="style">${l}</style>${c}</head><body>${s}</body></html>`
      );
      r.src = d, G[e.id] = n;
    }
  });
}
function ge(e) {
  return __async(this, null, function* () {
    if ((JSON.stringify(__spreadValues({}, e.styles)) || "").localeCompare(G[e.id])) {
      const t = e.element;
      if (!t) throw new Error("No element set on viewer");
      const r = t.querySelector(".svg-viewer__iframe");
      if (!r) throw new Error("No iframe created for viewer");
      if (!r.contentWindow) {
        r.onload = () => {
          setTimeout(() => ge(e), 50), setTimeout(() => ge(e), 500);
        };
        return;
      }
      const o = {};
      o[`[empty${Math.floor(Math.random() * 999999)}]`] = {};
      const i = vt(__spreadValues(__spreadValues({}, e.styles), o));
      r.contentWindow.postMessage(
        JSON.stringify({ id: "svg-styles", content: i }),
        "*"
      );
    }
  });
}
function yt(e) {
  return __async(this, null, function* () {
    return new Promise((n) => {
      N[e.id] || (N[e.id] = []), N[e.id].push(n), T(
        `resize-${e.id}`,
        () => {
          const t = e.element;
          if (!t) throw new Error("No element set on viewer");
          const r = t.querySelector(
            ".svg-viewer__view-container"
          ), o = t.querySelector(
            ".svg-viewer__svg-overlays"
          ), i = t.querySelector(`#${e.id}`), s = t.querySelector(".svg-viewer"), c = t.querySelector(".svg-viewer__svg-output"), a = t.querySelector("iframe"), l = s?.getBoundingClientRect() || {}, u = r?.getBoundingClientRect() || {};
          if (!o || !c || !a || !r)
            throw new Error("Viewer elements not ready yet.");
          requestAnimationFrame(() => __async(null, null, function* () {
            const p = l.height / l.width, d = c.firstElementChild?.viewBox?.baseVal || {}, f = d.height / d.width;
            c.firstElementChild && (c.firstElementChild.style.width = "200%");
            const m = (l.width - 32) * Math.min(1, p / f), y = { width: m, height: m * f };
            o.style.width = d.width + "px", o.style.height = d.height + "px", r.style.width = d.width + "px", r.style.height = d.height + "px", a.style.width = d.width + "px", a.style.height = d.height + "px", a.width = `${d.width}`, a.height = `${d.height}`;
            const S = Math.min(
              l.height / d.height,
              l.width / d.width
            ), w = i?.getBoundingClientRect(), z = o?.getBoundingClientRect();
            let $e = { x: 1, y: 1 };
            w && z && ($e = {
              x: z.width * S * 0.975 / w.width,
              y: z.height * S * 0.975 / w.height
            }), G[e.id] = "";
            let ze = x(e, {
              ratio: y.height / y.width,
              svg_ratio: S,
              box: u,
              content_ratio: $e
            });
            !ze || (e = ze, !(yield dt(e).catch((ce) => (console.warn(ce), false)))) || (N[e.id].forEach((ce) => ce()), N[e.id] = []);
          }));
        },
        100
      );
    });
  });
}
function Ae(e) {
  const n = e.element?.querySelector("svg");
  if (!Object.keys(e.mappings || {}).length) return;
  const t = e.element?.querySelector(".svg-viewer__svg-overlays");
  if (!t || !n) return;
  if (!t.getBoundingClientRect().width)
    return T(`${e.id}|render-overlays`, () => Ae(e), 50);
  requestAnimationFrame(() => {
    Pn(e), Mn(e), Fn(e);
  });
}
function Pn(e) {
  const n = e.labels.filter((r) => !r.zoom_level || r.zoom_level <= e.zoom), t = JSON.stringify(n);
  if (t !== ve[e.id]) {
    const r = e.element?.querySelector(".svg-viewer__svg-overlays");
    if (!r) return;
    Array.from(r.querySelectorAll("[label]")).filter((i) => i.parentNode).forEach((i) => r.removeChild(i));
    for (const i of n) {
      let s = { x: 0, y: 0 }, c = "~Nothing~";
      typeof i.location == "string" ? (s = e.mappings[i.location] || s, c = `#${i.location}`) : (i.location?.y || i.location?.x) && (s = i.location, c = `loc-${s.x}-${s.y}`);
      const a = document.createElement("div");
      a.setAttribute("label", "true"), a.classList.add("svg-viewer__svg-overlay-item"), a.classList.add("label"), a.style.top = `${s.y * 100}%`, a.style.left = `${s.x * 100}%`;
      const l = document.createElement("div"), u = document.createElement("label");
      u.classList.add("svg-viewer__label"), u.setAttribute("for", c), i.css_class?.length && u.classList.add(...i.css_class), i.z_index && (a.style.zIndex = `${i.z_index}`), u.textContent = i.content, l.appendChild(u), a.appendChild(l), r.appendChild(a);
    }
    b("RENDER", `Added ${e.labels.length} labels to view.`), ve[e.id] = t;
  }
}
function Fn(e) {
  const n = JSON.stringify(
    e.features.map((t) => __spreadProps(__spreadValues({}, t), {
      content: "",
      data: fn(t.data)
    }))
  );
  if (n !== pe[e.id]) {
    const t = e.element?.querySelector(".svg-viewer__svg-overlays");
    if (!t) return console.log("Unable to get overlay element.");
    const r = t.querySelectorAll(".feature"), o = [];
    window.overlay_el = t, r.forEach((i) => {
      if (!i.parentNode) return;
      const s = i.getAttribute("track-id");
      s === "none" || !e.features.find((c) => c.track_id === s) ? t.removeChild(i) : o.push(i);
    });
    for (const i of e.features) {
      if (!i.content || o.includes(i.content)) continue;
      let s = { x: 0, y: 0 }, c = { w: 0, h: 0 };
      const a = document.createElement("button");
      typeof i.location == "string" ? (a.id = `${i.location}`, s = e.mappings[i.location] || s, (i.hover || i.full_size) && (c = e.mappings[i.location] || c)) : (i.location?.y || i.location?.x) && (s = i.location), !(!s.x && !s.y) && (a.classList.add("svg-viewer__svg-overlay-item"), a.setAttribute("feature", "true"), a.setAttribute("track-id", `${i.track_id || "none"}`), a.classList.add("feature"), i.z_index && (a.style.zIndex = `${i.z_index}`), i.hover && a.classList.add("svg-viewer__svg-overlay-item__hover"), a.style.top = `${s.y * 100}%`, a.style.left = `${s.x * 100}%`, c.w || c.h ? (a.style.width = `${c.w * 100}%`, a.style.height = `${c.h * 100}%`) : (a.style.width = "1%", a.style.height = `${1 / e.ratio}%`), a.style.transform = "translate(-50%, -50%)", i.content instanceof Node && a.appendChild(i.content), t.appendChild(a));
    }
    b("RENDER", `Added ${e.features.length} features to view.`), pe[e.id] = n;
  }
}
function Mn(e) {
  const n = JSON.stringify(e.actions.map((t) => __spreadProps(__spreadValues({}, t), { callback: "" })));
  if (n !== me[e.id]) {
    const t = e.element?.querySelector(".svg-viewer__svg-overlays");
    if (!t) return;
    Array.from(t.querySelectorAll(".action-zone")).filter((o) => o.parentNode && t.contains(o.parentNode)).forEach((o) => t.removeChild(o));
    for (const o of e.actions) {
      if (!o.action || !o.id || o.id === "*" || o.zone === false) continue;
      const i = document.createElement("button");
      i.id = `${o.id}`;
      const s = e.mappings[o.id] || { x: 0, y: 0 }, c = e.mappings[o.id] || { w: 0, h: 0 };
      i.classList.add("svg-viewer__svg-overlay-item"), i.classList.add("action-zone"), i.style.top = `${s.y * 100}%`, i.style.left = `${s.x * 100}%`, (c.w || c.h) && (i.style.width = `${c.w * 100}%`, i.style.height = `${c.h * 100}%`, i.style.transform = "translate(-50%, -50%)"), t.appendChild(i);
    }
    me[e.id] = n;
  }
}
function vt(e) {
  let n = "";
  for (const t in e) {
    if (!e[t])
      continue;
    let r = "";
    for (const o in e[t])
      e[t][o] && (r += `${o}: ${e[t][o]}; `);
    n += `svg ${t.split(" ").map((o) => Le(o)).join(" ")} { ${r} } `;
  }
  return n;
}
var le = {};
var _e = {};
function Nn(e) {
  for (const n in e)
    _e[n.toLowerCase()] = e[n];
}
function Un(e) {
  return __async(this, null, function* () {
    let t = X().find((o) => o.url === e.url);
    if (t) return t.id;
    const r = e.svg_data || (yield qn(e.url));
    return t = new te(__spreadProps(__spreadValues({}, e), { svg_data: r })), st(
      `${t.id}-render`,
      mn(t.id).subscribe(
        (o) => dt(o).catch((i) => console.warn(i))
      )
    ), ft(t), yield On(t), t.id;
  });
}
function Yn(e, n) {
  return x(e, n);
}
function Dn(e) {
  const n = $(e);
  if (!n) return;
  const t = n.element?.querySelector(".svg-viewer");
  t && (n.element.removeChild(t), gn(n), an(`${e}`));
}
function qn(e = "") {
  return __async(this, null, function* () {
    const n = new Headers();
    if (e.startsWith(location.origin) || e.startsWith("/"))
      for (const o in _e)
        n.append(o, _e[o]);
    if (le[e]) return le[e];
    const r = yield (yield fetch(e, { headers: n }).catch((o) => (b("SVG VIEWER", "Failed to load map", o, "error"), { text: () => __async(null, null, function* () {
      return "";
    }) }))).text();
    return le[e] = r, r;
  });
}
function Hn() {
  let e = document.getElementById("svg-viewer-global");
  e || (e = document.createElement("style"), e.id = "svg-viewer-global", e.innerHTML = In, document.head.appendChild(e), b("Styles", "Added global viewer styles to document"));
}
var In = `
    .svg-viewer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
    }
    .svg-viewer__view-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .svg-viewer__render-container {
        position: absolute;
        top: 0%;
        left: 0%;
        right: 0%;
        bottom: 0%;
        transform-box: fill-box;
    }

    .svg-viewer__svg-output {
        position: absolute;
        top: -100%;
        left: -100%;
        right: -100%;
        bottom: -100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateZ(0);
        pointer-events: none;
    }

    .svg-viewer__svg-output svg {
        opacity: 0;
        height: auto;
        max-width: 200%;
        max-height: 200%;
        width: 2000px;
    }

    .svg-viewer__svg-overlays {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }

    .svg-viewer__label {
        text-shadow: black 1px 1px;
        color: white;
        white-space: pre-line;
        text-align: center;
        min-width: 10em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1
    }

    .svg-viewer__svg-overlay-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 0.1%;
        width: 0.1%;
        position: absolute;
        transform-origin: center;
    }

    .svg-viewer__svg-overlay-item > * {
        will-change: transform;
    }

    .svg-viewer__svg-overlay-item__hover {
        pointer-events: auto;
    }

    .svg-viewer__svg-overlay-item__hover > * {
        display: none;
    }

    .svg-viewer__svg-overlay-item__hover:hover > * {
        display: initial;
    }

    .svg-viewer__svg-overlay-item.action-zone {
        pointer-events: auto;
        background: none;
        outline: none;
        border: none;
    }
`;

// libs/events/src/lib/validators.ts
var endInFuture = (control) => {
  const date = control.parent?.get("date");
  if (date && isAfter(Date.now(), addMinutes(date.value, control.value))) {
    return { duration: true };
  }
  return null;
};

// libs/bookings/src/lib/booking.utilities.ts
function setBookingAsset(form, resource) {
  if (!resource)
    return form.patchValue({ asset_id: void 0 });
  form.patchValue({
    asset_id: resource.id,
    asset_name: resource.name,
    map_id: resource.map_id || resource.id,
    description: resource.name,
    zones: resource.zone ? [resource.zone?.parent_id, resource.zone?.id] : [],
    booking_asset: resource
  }, { emitEvent: false });
}
function generateBookingForm(booking = new Booking()) {
  const form = new FormGroup({
    id: new FormControl(booking.id || ""),
    parent_id: new FormControl(booking.parent_id || ""),
    event_id: new FormControl(booking.event_id || ""),
    ical_uid: new FormControl(booking.extension_data.ical_uid || ""),
    date: new FormControl(booking.date, [Validators.required]),
    date_end: new FormControl(booking.date_end),
    all_day: new FormControl(booking.all_day ?? false),
    name: new FormControl(booking.extension_data.name || booking.asset_name || ""),
    duration: new FormControl(booking.duration, [endInFuture]),
    booking_type: new FormControl(booking.booking_type),
    zones: new FormControl(booking.zones),
    title: new FormControl(booking.title),
    description: new FormControl(booking.description),
    booking_asset: new FormControl(null),
    resources: new FormControl([]),
    company: new FormControl(""),
    asset_id: new FormControl(booking.asset_id, [Validators.required]),
    asset_name: new FormControl(booking.description),
    assets: new FormControl(booking.extension_data?.assets || []),
    attendees: new FormControl(booking.attendees || []),
    map_id: new FormControl(booking.extension_data?.map_id),
    featured: new FormControl(booking.extension_data?.featured || false),
    user: new FormControl(currentUser()),
    user_id: new FormControl(booking.user_id),
    group: new FormControl(booking.group),
    user_email: new FormControl(booking.user_email),
    user_name: new FormControl(booking.user_name),
    timezone: new FormControl(booking.timezone || ""),
    booked_by: new FormControl(currentUser()),
    booked_by_id: new FormControl(booking.booked_by_id),
    booked_by_email: new FormControl(booking.booked_by_email),
    secondary_resource: new FormControl(booking.extension_data?.other_asset_type || booking.extension_data?.secondary_resource),
    location: new FormControl(booking.extension_data.location || ""),
    attendance_type: new FormControl(booking.extension_data.attendance_type || "ANY"),
    phone: new FormControl(booking.extension_data.phone || ""),
    permission: new FormControl(booking.permission || "PRIVATE"),
    images: new FormControl(booking.images || []),
    tags: new FormControl(booking?.tags || []),
    plate_number: new FormControl(booking.extension_data.plate_number || ""),
    recurrence_custom: new FormControl(booking.extension_data.recurrence_custom ?? false),
    recurrence_type: new FormControl(booking.recurrence_type || "none"),
    recurrence_days: new FormControl(booking.recurrence_days),
    recurrence_nth_of_month: new FormControl(booking.recurrence_nth_of_month),
    recurrence_interval: new FormControl(booking.recurrence_interval),
    recurrence_end: new FormControl(booking.recurrence_end),
    notes: new FormControl(booking.extension_data.notes || ""),
    update_master: new FormControl(false),
    self_registered: new FormControl(false),
    is_assgined: new FormControl(false)
  });
  form.valueChanges.subscribe(() => {
    if (form.getRawValue().date < Date.now() && form.value.id) {
      form.get("date")?.disable({ emitEvent: false });
    } else {
      form.get("date")?.enable({ emitEvent: false });
    }
  });
  form.controls.user.valueChanges.subscribe((user) => {
    if (!user)
      return;
    form.patchValue({
      user,
      user_id: user?.id,
      user_email: user?.email,
      user_name: user?.name
    }, { emitEvent: false });
  });
  current_user.subscribe((user) => {
    if (!user)
      return;
    form.patchValue({
      booked_by: user,
      booked_by_id: user?.id,
      booked_by_email: user?.email,
      name: user?.name
    }, { emitEvent: false });
  });
  form.controls.resources.valueChanges.subscribe((resources) => setBookingAsset(form, (resources || [])[0]));
  form.controls.duration.valueChanges.subscribe((duration) => {
    form.patchValue({
      date_end: roundToNearestMinutes(addMinutes(form.getRawValue().date, duration), { nearestTo: 5, roundingMethod: "ceil" }).valueOf()
    }, { emitEvent: false });
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
  });
  if (booking.state === "started")
    form.get("date").disable();
  return form;
}
function findNearbyFeature(_0, _1) {
  return __async(this, arguments, function* (map_url, centered_at, desk_ids = []) {
    const element = document.createElement("div");
    element.style.position = "absolute";
    element.style.top = "-9999px";
    element.style.width = "1000px";
    element.style.height = "1000px";
    document.body.appendChild(element);
    const id = yield Un({
      url: map_url,
      element
    });
    const viewer = $(id);
    const point = (typeof centered_at === "string" ? viewer.mappings[centered_at] : centered_at) || { x: 0.5, y: 0.5 };
    let dist = 10;
    let closest = "";
    for (const desk of desk_ids) {
      const { x: x2, y } = viewer.mappings[desk] || { x: 2, y: 2 };
      const d = Math.sqrt((x2 - point.x) * (x2 - point.x) + (y - point.y) * (y - point.y));
      if (d < dist) {
        dist = d;
        closest = desk;
      }
    }
    document.body.removeChild(element);
    Dn(id);
    return closest;
  });
}
function newBookingFromCalendarEvent(event) {
  return new Booking({
    id: event.id,
    user_email: event.host,
    asset_id: event.system?.id,
    asset_name: event.system?.display_name || event.system?.name,
    booking_type: "room",
    approved: event.status === "approved",
    extension_data: __spreadValues({}, event)
  });
}
function loadLockerBanks(org, obs, useRegion) {
  return obs.pipe(filter(([bld]) => !!bld), switchMap(([bld]) => useRegion() ? forkJoin(org.buildingsForRegion().map((building) => fu(building.id, "locker_banks").pipe(catchError(() => of(new Ar())), map((_2) => _2.details instanceof Array ? _2.details : [])))).pipe(map((_2) => flatten(_2))) : fu(bld.id, "locker_banks").pipe(catchError(() => of(new Ar())), map((_2) => _2.details instanceof Array ? _2.details : []))), shareReplay(1));
}
function loadLockers(org, obs, banks$, useRegion) {
  return obs.pipe(filter(([bld]) => !!bld), switchMap(([bld]) => combineLatest([
    useRegion() ? forkJoin(org.buildingsForRegion().map((building) => fu(building.id, "lockers").pipe(catchError(() => of(new Ar())), map((_2) => _2.details instanceof Array ? _2.details : [])))).pipe(map((_2) => flatten(_2))) : fu(bld.id, "lockers").pipe(catchError(() => of(new Ar())), map((_2) => _2.details instanceof Array ? _2.details : [])),
    banks$
  ])), map(([lockers, banks]) => {
    const locker_list = lockers;
    for (const bank of banks) {
      bank.lockers = lockers.filter((_2) => _2.bank_id === bank.id).map((_2) => __spreadValues({}, _2));
    }
    for (const locker of locker_list) {
      const bank = banks.find((b2) => b2.id === locker.bank_id);
      locker.bank = bank;
      locker.tags = bank?.tags || [];
      locker.zone = org.levelWithID(bank?.zones || []);
    }
    return lockers.filter((_2) => _2.bank);
  }), shareReplay(1));
}

// libs/bookings/src/lib/booking-link-modal.component.ts
var _BookingLinkModalComponent = class _BookingLinkModalComponent {
  constructor() {
    this._event = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.outlook_link = generateMicrosoftCalendarLink(this._event);
    this.google_link = generateGoogleCalendarLink(this._event);
    this.ical_link = generateCalendarFileLink(this._event);
  }
};
_BookingLinkModalComponent.\u0275fac = function BookingLinkModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingLinkModalComponent)();
};
_BookingLinkModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingLinkModalComponent, selectors: [["booking-link-modal"]], decls: 26, vars: 24, consts: [[1, "w-full", "p-4", "pb-2"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "right-0", "top-2"]], template: function BookingLinkModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "a", 2);
    \u0275\u0275pipe(5, "sanitize");
    \u0275\u0275element(6, "img", 3);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 2);
    \u0275\u0275pipe(11, "sanitize");
    \u0275\u0275element(12, "img", 4);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a", 2);
    \u0275\u0275pipe(17, "safe");
    \u0275\u0275elementStart(18, "icon", 5);
    \u0275\u0275text(19, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 6)(24, "icon");
    \u0275\u0275text(25, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, "BOOKING.LINK_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(5, 9, ctx.outlook_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, "BOOKING.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(11, 14, ctx.google_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 17, "BOOKING.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(17, 19, ctx.ical_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 22, "BOOKING.LINK_ICAL"));
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
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */"] });
var BookingLinkModalComponent = _BookingLinkModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingLinkModalComponent, [{
    type: Component,
    args: [{ selector: "booking-link-modal", template: `
        <div class="w-full p-4 pb-2">
            {{ 'BOOKING.LINK_HEADER' | translate }}
        </div>
        <div class="relative flex flex-col items-center space-y-4 p-4">
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="outlook_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/outlook.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_OUTLOOK' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="google_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/gcal.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_GOOGLE' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="ical_link | safe: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <icon class="text-xl">download</icon>
                <span>{{ 'BOOKING.LINK_ICAL' | translate }}</span>
            </a>
        </div>
        <button icon matRipple mat-dialog-close class="absolute right-0 top-2">
            <icon>close</icon>
        </button>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatDialogModule,
      SafePipe,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/booking-link-modal.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingLinkModalComponent, { className: "BookingLinkModalComponent", filePath: "libs/bookings/src/lib/booking-link-modal.component.ts", lineNumber: 77 });
})();

// libs/bookings/src/lib/desk-questions-modal.component.ts
function DeskQuestionsModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 2);
    \u0275\u0275text(2, "COVID-19 Questionnaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "main", 3)(4, "div", 4)(5, "label");
    \u0275\u0275text(6, " Have you travelled overseas within the last 14 days?");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-radio-group", 5)(10, "mat-radio-button", 6);
    \u0275\u0275text(11, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-radio-button", 6);
    \u0275\u0275text(13, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 4)(15, "label");
    \u0275\u0275text(16, " Are you unwell or experiencing any cold or flu-like symptoms?");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-radio-group", 7)(20, "mat-radio-button", 6);
    \u0275\u0275text(21, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-radio-button", 6);
    \u0275\u0275text(23, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 8)(25, "label");
    \u0275\u0275text(26, " Have you had contact with anyone with suspected COVID-19?");
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-radio-group", 9)(30, "mat-radio-button", 6);
    \u0275\u0275text(31, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-radio-button", 6);
    \u0275\u0275text(33, "No");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "footer", 10)(35, "button", 11);
    \u0275\u0275listener("click", function DeskQuestionsModalComponent_Conditional_0_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(36, "Submit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 12)(38, "icon");
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
function DeskQuestionsModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 1)(1, "p", 13);
    \u0275\u0275text(2, " Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 12)(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
}
var _DeskQuestionsModalComponent = class _DeskQuestionsModalComponent {
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
};
_DeskQuestionsModalComponent.\u0275fac = function DeskQuestionsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskQuestionsModalComponent)();
};
_DeskQuestionsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskQuestionsModalComponent, selectors: [["desk-question-modal"]], outputs: { event: "event" }, decls: 2, vars: 1, consts: [[1, "relative"], ["failure", "", 1, "relative", "pt-8"], [1, "p-4", "text-xl"], [1, "p-4", 3, "formGroup"], [1, "mb-4", "flex", "flex-col"], ["formControlName", "travelled", 1, "space-x-2"], [3, "value"], ["formControlName", "unwell", 1, "space-x-2"], [1, "flex", "flex-col"], ["formControlName", "contact", 1, "space-x-2"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["close", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4"]], template: function DeskQuestionsModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DeskQuestionsModalComponent_Conditional_0_Template, 40, 7, "div", 0)(1, DeskQuestionsModalComponent_Conditional_1_Template, 6, 0, "main", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.failure ? 0 : 1);
  }
}, dependencies: [
  IconComponent,
  MatDialogModule,
  MatDialogClose,
  MatRippleModule,
  MatRipple,
  MatRadioModule,
  MatRadioGroup,
  MatRadioButton,
  ReactiveFormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName
], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */"] });
var DeskQuestionsModalComponent = _DeskQuestionsModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskQuestionsModalComponent, [{
    type: Component,
    args: [{ selector: "desk-question-modal", template: `
        @if (!failure) {
            <div class="relative">
                <h2 class="p-4 text-xl">COVID-19 Questionnaire</h2>
                <main class="p-4" [formGroup]="form">
                    <div class="mb-4 flex flex-col">
                        <label>
                            Have you travelled overseas within the last 14
                            days?<span>*</span>
                        </label>
                        <mat-radio-group
                            formControlName="travelled"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="mb-4 flex flex-col">
                        <label>
                            Are you unwell or experiencing any cold or flu-like
                            symptoms?<span>*</span>
                        </label>
                        <mat-radio-group
                            formControlName="unwell"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="flex flex-col">
                        <label>
                            Have you had contact with anyone with suspected
                            COVID-19?<span>*</span>
                        </label>
                        <mat-radio-group
                            formControlName="contact"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                </main>
                <footer class="flex items-center justify-center p-2">
                    <button btn matRipple (click)="submit()">Submit</button>
                </footer>
                <button close icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </div>
        } @else {
            <main failure class="relative pt-8">
                <p class="p-4">
                    Your request to work from the office has been rejected based
                    on your response to the compulsory Covid-19 questions.
                    Please feel free to submit a new request when circumstances
                    change in a way that changes your answer to the questions.
                </p>
                <button close icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </main>
        }
    `, imports: [
      IconComponent,
      MatDialogModule,
      MatRippleModule,
      MatRadioModule,
      ReactiveFormsModule
    ], styles: ["/* angular:styles/component:css;c7f37c1e60a5fae4a31dda6fbae0d3cc845b39f17b3f09824fe872f6bf4e7f79;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-questions-modal.component.ts */\nmain {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskQuestionsModalComponent, { className: "DeskQuestionsModalComponent", filePath: "libs/bookings/src/lib/desk-questions-modal.component.ts", lineNumber: 111 });
})();

// libs/assets/src/lib/asset.class.ts
var AssetGroup = class {
  constructor(data) {
    this.images = [];
    Object.assign(this, data);
  }
};

// libs/assets/src/lib/assets.fn.ts
var BASE_ENDPOINT = "/api/engine/v2";
function queryAssetCategories(query = {}) {
  const q2 = toQueryString(query);
  return ee(`${BASE_ENDPOINT}/asset_categories${q2 ? "?" + q2 : ""}`).pipe(map((_2) => _2));
}
var groups_cache = /* @__PURE__ */ new Map();
function queryAssetGroupsExtended(query = {}) {
  const q2 = toQueryString(query);
  if (groups_cache.has(query.zones)) {
    return of(groups_cache.get(query.zones));
  }
  return ee(`${BASE_ENDPOINT}/asset_types${q2 ? "?" + q2 : ""}`).pipe(map((_2) => _2), switchMap((list) => forkJoin(list.map((group) => queryAssets(__spreadProps(__spreadValues({
    limit: 200
  }, query), {
    type_id: group.id
  })).pipe(map((assets) => __spreadProps(__spreadValues({}, group), { assets })))))), tap((_2) => {
    groups_cache.set(query.zones, _2);
    setTimeout(() => groups_cache.delete(query.zones), 5 * 60 * 1e3);
  }));
}
function showAssetGroup(id) {
  return ee(`${BASE_ENDPOINT}/asset_types/${id}`).pipe(map((_2) => _2));
}
function queryAssets(query = {}) {
  const q2 = toQueryString(query);
  return ee(`${BASE_ENDPOINT}/assets${q2 ? "?" + q2 : ""}`).pipe(map((_2) => _2));
}
function queryGroupAvailability(query, ignore = []) {
  query.type = "asset-request";
  return combineLatest([
    queryAssetGroupsExtended(query),
    queryBookings(query)
  ]).pipe(map(([products, bookings]) => {
    bookings = bookings.filter((_2) => _2.status !== "declined" && _2.status !== "cancelled");
    return products.map((product) => __spreadProps(__spreadValues({}, product), {
      assets: product.assets.filter((asset) => ignore?.includes(asset.id) || !bookings.find((booking) => !ignore.includes(booking.id) && (booking.asset_id === asset.id || booking.asset_ids?.includes(asset.id))))
    }));
  }));
}
function differenceBetweenAssetRequests(new_assets, old_assets, reset_state = false) {
  if ((!new_assets || new_assets?.length <= 0) && old_assets?.length)
    return [];
  if (!old_assets)
    return [];
  const changed = [];
  for (const request of new_assets) {
    const match = old_assets.find((_2) => _2.id === request.id);
    if (!match || match.ref_id !== request.ref_id) {
      changed.push(request.id);
    }
  }
  return changed;
}
function validateAssetRequestsForResource(_0, _1) {
  return __async(this, arguments, function* ({ id, ical_uid, from_booking }, { date, duration, all_day, host, location_name, location_id, zones, reset_state }, new_assets = [], force_create = false) {
    const requests = yield queryBookings({
      period_start: getUnixTime(all_day ? startOfDay(date) : date),
      period_end: getUnixTime(all_day ? endOfDay(addMinutes(date, duration)) : addMinutes(date, duration)),
      type: "asset-request",
      zones: zones.join(",")
    }).toPromise();
    const bookings = id && ical_uid ? yield queryBookings({
      period_start: getUnixTime(startOfDay(date)),
      period_end: getUnixTime(endOfDay(date)),
      type: "asset-request",
      email: host,
      event_id: from_booking ? "" : id,
      booking_id: from_booking ? id : "",
      ical_uid
    }).toPromise() : [];
    const booking_list = bookings.map((_2) => [
      _2.id,
      new AssetRequest(_2.extension_data.request)
    ]);
    new_assets?.forEach((_2) => _2.conflict = false);
    let changed = force_create ? new_assets.map((_2) => _2.id) : differenceBetweenAssetRequests(new_assets, booking_list.map(([_2, r]) => r), reset_state);
    if (reset_state) {
      const has_state = bookings.filter((_2) => _2.approved || _2.rejected);
      changed = unique([
        ...changed,
        ...has_state.map((_2) => _2.extension_data.request_id)
      ]);
    }
    const unchanged = booking_list.filter(([_2, request]) => !changed.includes(request.id));
    const changed_requests = booking_list.filter(([_2, { id: id2 }]) => changed.includes(id2));
    const changed_assets = new_assets.filter(({ id: id2 }) => changed.includes(id2));
    const filtered = requests.filter((req) => !req.rejected && (!bookings.find((b2) => b2.id === req.id) || unchanged.find(([id2]) => req.event_id === id2)));
    let used_ids = flatten(filtered.map((_2) => _2.asset_ids));
    for (const [_2, request] of unchanged) {
      used_ids = [
        ...used_ids,
        ...flatten(request.items.map((_3) => _3.item_ids))
      ];
    }
    const available_groups = yield queryGroupAvailability({
      period_start: getUnixTime(all_day ? startOfDay(date) : date),
      period_end: getUnixTime(all_day ? endOfDay(addMinutes(date, duration)) : addMinutes(date, duration)),
      type: "asset-request"
    }, bookings.map((_2) => _2.id)).toPromise();
    const processed_requests = changed_assets.map((request) => {
      let asset_ids = flatten(request.items.map(({ id: id2, item_ids, quantity }) => {
        const assets = available_groups.find((_2) => _2.id === id2)?.assets;
        if (!assets)
          return item_ids;
        const list = [];
        return new Array(quantity).fill(0).map((_2, idx) => {
          const item = used_ids.includes(item_ids[idx]) || list.includes(item_ids[idx]) || !item_ids[idx] ? assets?.find(({ id: id3 }) => {
            return !used_ids.includes(id3) && !list.includes(id3);
          })?.id : item_ids[idx];
          if (!item) {
            request.conflict = true;
            throw "Unable to find available asset for request";
          }
          list.push(item);
          return item;
        });
      }));
      const booking = bookings.find((_2) => _2.asset_ids.find((id2) => request.items?.find((i) => i.item_ids.includes(id2))));
      used_ids = [...used_ids, ...asset_ids];
      const asset_data = {
        type: "asset-request",
        booking_type: "asset-request",
        date,
        duration,
        all_day,
        description: location_name,
        user_email: host,
        asset_id: asset_ids[0],
        asset_ids,
        asset_name: request.items.map((_2) => _2.name).join(", "),
        title: request.items.map((_2) => _2.name).join(", "),
        approved: !reset_state && booking?.approved && !request._changed,
        rejected: !reset_state && booking?.rejected && !request._changed,
        extension_data: {
          parent_id: id,
          request_id: request.id,
          location_id,
          request: new AssetRequest(__spreadProps(__spreadValues({}, request), { event: null }))
        },
        zones: zones || []
      };
      if (from_booking)
        asset_data.parent_id = id;
      return createBooking(new Booking(asset_data), {
        ical_uid,
        event_id: from_booking ? "" : id
      });
    });
    return () => __async(null, null, function* () {
      yield Promise.all(changed_requests.map(([id2]) => removeBooking(id2).toPromise()));
      yield Promise.all(processed_requests.map((r) => r.toPromise()));
    });
  });
}

// libs/assets/src/lib/asset-group.pipe.ts
var ASSET_GROUP_LIST = [];
var EMPTY_ASSET_GROUP = new AssetGroup();
function updateAssetGroupList(assetgroup_list) {
  for (const assetgroup of assetgroup_list) {
    if (!ASSET_GROUP_LIST.find(({ id }) => id === assetgroup.id)) {
      ASSET_GROUP_LIST.push(assetgroup);
    }
  }
}
var _AssetGroupPipe = class _AssetGroupPipe {
  /**
   * Get details of the assetgroup with the given ID
   * @param assetgroup_id ID or Email of the assetgroup
   */
  transform(group_id) {
    return __async(this, null, function* () {
      if (!group_id)
        return EMPTY_ASSET_GROUP;
      let asset_group = ASSET_GROUP_LIST.find(({ id }) => id === group_id);
      if (asset_group)
        return asset_group;
      const group = yield lastValueFrom(showAssetGroup(group_id)).catch(() => null);
      if (group) {
        asset_group = __spreadValues({}, group);
        ASSET_GROUP_LIST.push(asset_group);
        return asset_group;
      }
      return EMPTY_ASSET_GROUP;
    });
  }
  updateAssetGroupList(assetgroup_list) {
    updateAssetGroupList(assetgroup_list);
  }
};
_AssetGroupPipe.\u0275fac = function AssetGroupPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetGroupPipe)();
};
_AssetGroupPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "assetgroup", type: _AssetGroupPipe, pure: true });
var AssetGroupPipe = _AssetGroupPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetGroupPipe, [{
    type: Pipe,
    args: [{
      name: "assetgroup"
    }]
  }], null, null);
})();

// libs/assets/src/lib/asset.utilities.ts
var RULE_REQUESTS = {};
function getAssetRulesForZone(zone_id, fresh = false) {
  if (!zone_id)
    return of([]);
  if (!RULE_REQUESTS[zone_id] || fresh)
    RULE_REQUESTS[zone_id] = fu(zone_id, "assets_config").pipe(map((_2) => _2.details instanceof Array ? _2.details : []), catchError((e) => of([])));
  return RULE_REQUESTS[zone_id];
}
function assetAvailable(item, rules, event) {
  const current_date = Date.now();
  const event_date = new Date(event.date);
  const isRuleMatch = (rule) => item.name === rule.name || item.category?.name.includes(rule.name) || event.resources?.some((resource) => resource.zones?.includes(rule.name)) || event.space?.zones?.includes(rule.name) || rule.name === "*";
  const countMatches = (rule) => rule.rules.reduce((matches, condition) => {
    switch (condition[0]) {
      case "is_before":
        return matches + (isBefore(current_date, subHours(event_date, condition[1])) ? 1 : 0);
      case "within_hours":
        return matches + (isAfter(current_date, subHours(event_date, condition[1])) ? 1 : 0);
      case "after_hour":
        return matches + (isAfter(event_date, setHours(event_date, condition[1])) ? 1 : 0);
      case "before_hour":
        return matches + (isBefore(event_date, setHours(event_date, condition[1])) ? 1 : 0);
      case "min_length":
        return matches + (event.duration >= stringToMinutes(condition[1]) ? 1 : 0);
      case "max_length":
        return matches + (event.duration <= stringToMinutes(condition[1]) ? 1 : 0);
      case "visitor_type":
        return matches + (event.ext("visitor_type") === condition[1] ? 1 : 0);
      default:
        return matches + 1;
    }
  }, 0);
  for (const rule of rules) {
    if (isRuleMatch(rule)) {
      if (countMatches(rule) < rule.rules.length) {
        return false;
      }
    }
  }
  return true;
}

// libs/assets/src/lib/asset-state.service.ts
var _AssetStateService = class _AssetStateService {
  constructor() {
    this._org = inject(OrganisationService);
    this._options = new BehaviorSubject({ date: Date.now() });
    this._search = new BehaviorSubject("");
    this._category = new BehaviorSubject([]);
    this._loading = new BehaviorSubject("");
    this.search = this._search.asObservable();
    this.category = this._category.asObservable();
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
    this.rules = combineLatest([
      this._options,
      this._org.active_building
    ]).pipe(filter(([_2, bld]) => !!bld), debounceTime(300), switchMap(([options, bld]) => {
      this._loading.next(this._loading.getValue() + "[Rules]");
      return getAssetRulesForZone(bld.id || options.zone || "");
    }), tap((_2) => this._loading.next(this._loading.getValue().replace(/\[Rules\]/g, ""))), shareReplay(1));
    this.asset_list = of(0).pipe(switchMap(() => {
      this._loading.next(this._loading.getValue() + "[Assets]");
      return queryAssets();
    }), tap((_2) => this._loading.next(this._loading.getValue().replace(/\[Assets\]/g, ""))), shareReplay(1));
    this.asset_bookings = this._options.pipe(debounceTime(300), switchMap(({ zone, date }) => {
      this._loading.next(this._loading.getValue() + "[Bookings]");
      return queryBookings({
        zones: zone || "",
        period_start: getUnixTime(startOfDay(date)),
        period_end: getUnixTime(endOfDay(date)),
        type: "asset-request"
      });
    }), tap((_2) => this._loading.next(this._loading.getValue().replace(/\[Bookings\]/g, ""))), shareReplay(1));
    this.available_groups = combineLatest([
      this._options,
      this._org.active_building
    ]).pipe(debounceTime(300), switchMap(([{ zone, date, duration, ignore }, bld]) => {
      return queryGroupAvailability({
        zones: bld.id || zone || "",
        period_start: getUnixTime(startOfMinute(date)),
        period_end: getUnixTime(endOfMinute(addMinutes(date, duration || 30))),
        type: "asset-request",
        rejected: false
      }, ignore).pipe(catchError(() => of([])));
    }), map((list) => list.sort((a, b2) => a.name.localeCompare(b2.name))), tap((_2) => updateAssetGroupList(_2)), shareReplay(1));
    this.category_list = this._org.active_building.pipe(switchMap((bld) => queryAssetCategories({ zone_id: bld.id })), map((_2) => _2.sort((a, b2) => a.name.localeCompare(b2.name))), shareReplay(1));
    this.filtered_assets = combineLatest([
      this._search,
      this._category,
      this.available_groups,
      this.rules
    ]).pipe(map(([search, category, assets, rules]) => {
      const s = search.toLowerCase();
      console.log("Rules:", rules);
      const list = assets.filter((_2) => _2.assets?.length && (!category.length || category.includes(_2.category_id)) && (_2.name.toLowerCase().includes(s) || _2.description.toLowerCase().includes(s)) && assetAvailable(_2, rules, this._options.getValue()));
      return list;
    }), shareReplay(1));
    this.settings = combineLatest([this._org.active_building]).pipe(filter(([_2]) => !!_2), switchMap(([_2]) => fu(_2.id, "assets-settings").pipe(catchError((_3) => of({})))), map((_2) => _2.details || {}), shareReplay(1));
    this.disabled_rooms = this.settings.pipe(map((_2) => _2.disabled_rooms || []));
  }
  setSearch(value) {
    this._search.next(`${value}`);
  }
  toggleCategory(value) {
    const categories = this._category.getValue();
    if (categories.includes(value)) {
      this._category.next(categories.filter((_2) => _2 !== value));
    } else {
      this._category.next([...categories, value]);
    }
  }
  getOptions() {
    return this._options.getValue();
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.value), options));
  }
};
_AssetStateService.\u0275fac = function AssetStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetStateService)();
};
_AssetStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetStateService, factory: _AssetStateService.\u0275fac, providedIn: "root" });
var AssetStateService = _AssetStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/components/src/lib/confirm-modal.component.ts
function ConfirmModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 2);
    \u0275\u0275element(1, "icon", 5)(2, "p", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icon);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.content, \u0275\u0275sanitizeHtml);
  }
}
function ConfirmModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 7);
    \u0275\u0275element(2, "mat-spinner", 8);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.loading);
  }
}
function ConfirmModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 4)(1, "button", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 10);
    \u0275\u0275listener("click", function ConfirmModalComponent_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onConfirm());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r0.cancel_text), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, ctx_r0.confirm_text), " ");
  }
}
var CONFIRM_METADATA = {
  height: "auto"
};
function openConfirmModal(data, dialog) {
  return __async(this, null, function* () {
    const ref = dialog.open(ConfirmModalComponent, __spreadProps(__spreadValues({}, CONFIRM_METADATA), {
      data
    }));
    return __spreadProps(__spreadValues({}, yield Promise.race([
      ref.componentInstance.event.pipe(first((_2) => _2.reason === "done")).toPromise(),
      ref.afterClosed().toPromise()
    ])), {
      loading: (s) => ref.componentInstance.loading = s,
      close: () => ref.close()
    });
  });
}
var _ConfirmModalComponent = class _ConfirmModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._dialog_ref = inject(MatDialogRef);
    this._data = inject(MAT_DIALOG_DATA);
    this.event = new EventEmitter();
    this.title = this._data.title || "COMMON.CONFIRM";
    this.content = this._data.content || "Are you sure?";
    this.confirm_text = this._data.confirm_text || "COMMON.ACCEPT";
    this.cancel_text = this._data.cancel_text || "COMMON.CANCEL";
    this.icon = this._data.icon || {
      class: "material-symbols-rounded",
      content: "done"
    };
    this.disableClose = () => this._dialog_ref.disableClose = true;
    this.enableClose = () => this._dialog_ref.disableClose = false;
  }
  ngOnInit() {
    if (this._data.close_delay) {
      this.timeout("close", () => this._dialog_ref.close(), this._data.close_delay);
    }
  }
  /** User confirmation of the content of the modal */
  onConfirm() {
    this.event.emit({ reason: "done" });
  }
};
_ConfirmModalComponent.\u0275fac = function ConfirmModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmModalComponent)();
};
_ConfirmModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmModalComponent, selectors: [["confirm-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 3, consts: [[1, "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex", "w-[28rem]", "max-w-[85vw]", "flex-col", "items-center", "space-y-4", "p-4", "sm:h-auto"], ["loading", ""], [1, "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded", "border-none", "bg-base-200", "p-2"], [1, "text-5xl", 3, "icon"], ["content", "", 1, "text-center", 3, "innerHTML"], [1, "flex", "h-48", "w-full", "flex-col", "items-center", "justify-center", "space-y-4"], ["diameter", "32"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "flex-1", "bg-base-100"], ["btn", "", "matRipple", "", "name", "accept", 1, "flex-1", 3, "click"]], template: function ConfirmModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(3, ConfirmModalComponent_Conditional_3_Template, 3, 2, "main", 2)(4, ConfirmModalComponent_Conditional_4_Template, 5, 1, "main", 3);
    \u0275\u0275conditionalCreate(5, ConfirmModalComponent_Conditional_5_Template, 7, 6, "footer", 4);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 5 : -1);
  }
}, dependencies: [
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose
], encapsulation: 2 });
var ConfirmModalComponent = _ConfirmModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmModalComponent, [{
    type: Component,
    args: [{ selector: "confirm-modal", template: `
        <header
            class="sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">{{ title }}</h2>
        </header>
        @if (!loading) {
            <main
                class="flex w-[28rem] max-w-[85vw] flex-col items-center space-y-4 p-4 sm:h-auto"
            >
                <icon [icon]="icon" class="text-5xl"></icon>
                <p content class="text-center" [innerHTML]="content"></p>
            </main>
        } @else {
            <main loading>
                <div
                    class="flex h-48 w-full flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ loading }}</p>
                </div>
            </main>
        }
        @if (!loading) {
            <footer
                class="sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded border-none bg-base-200 p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse flex-1 bg-base-100"
                    mat-dialog-close
                >
                    {{ cancel_text | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="accept"
                    class="flex-1"
                    (click)="onConfirm()"
                >
                    {{ confirm_text | translate }}
                </button>
            </footer>
        }
    `, imports: [
      MatProgressSpinnerModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatDialogModule
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmModalComponent, { className: "ConfirmModalComponent", filePath: "libs/components/src/lib/confirm-modal.component.ts", lineNumber: 123 });
})();

// libs/payments/src/lib/card-input-field.component.ts
var _c04 = ["input"];
function CardInputFieldComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", "assets/icons/" + ctx_r1.card_type + ".svg", \u0275\u0275sanitizeUrl);
  }
}
function CardInputFieldComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("value", item_r3[0]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r3[1], " (", item_r3[0], ") ");
  }
}
function CardInputFieldComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4);
  }
}
var BLANK_CARD = { card_number: "                ", cardholder: "", cvv: "" };
var DATE_PIPE = new DatePipe("en-us", "");
var _CardInputFieldComponent = class _CardInputFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.details = new FormGroup({
      card_number: new FormControl(Array(16).fill("X").join()),
      cardholder: new FormControl(""),
      exp_month: new FormControl(""),
      exp_year: new FormControl(""),
      cvv: new FormControl("", [
        Validators.minLength(3),
        Validators.maxLength(4)
      ])
    });
    this.disabled = false;
    this.months = Array(12).fill(0).map((_2, idx) => [
      DATE_PIPE.transform(setMonth(Date.now(), idx), "MM"),
      DATE_PIPE.transform(setMonth(Date.now(), idx), "MMM")
    ]);
    this.years = Array(12).fill(0).map((_2, idx) => DATE_PIPE.transform(addYears(Date.now(), idx), "yyyy"));
    this.digits = Array(16).fill(0);
    this._index = 0;
    this.registerOnChange = (fn2) => this._onChange = fn2;
    this.registerOnTouched = (fn2) => this._onTouch = fn2;
    this.setDisabledState = (s) => this.disabled = s;
  }
  get is_amex() {
    const no = this.details.value?.card_number || "";
    return no.startsWith("3");
  }
  get card_type() {
    const no = this.details.value?.card_number || "";
    if (no.startsWith("3"))
      return "amex";
    if (no.startsWith("4"))
      return "visa";
    if (no.startsWith("5"))
      return "mastercard";
    return "";
  }
  get card_display() {
    let no = this.details.value?.card_number || "";
    if (this.card_focused)
      no = no.substring(0, this._index) + "\u2BD0" + no.substring(this._index + 1);
    return this.is_amex ? `${no.substring(0, 4)}-${no.substring(4, 10)}-${no.substring(10)}` : `${no.substring(0, 4)}-${no.substring(4, 8)}-${no.substring(8, 12)}-${no.substring(12)}`;
  }
  get card_focused() {
    return document.activeElement === this._input_el.nativeElement || document.activeElement === this._input_el.nativeElement.parentElement;
  }
  ngOnInit() {
    this.subscription("changes", this.details.valueChanges.subscribe((v2) => this.timeout("update", () => this.setValue(this.details.getRawValue()))));
  }
  focusInput() {
    this._input_el.nativeElement.focus();
    this._index = this._input_el.nativeElement.selectionStart || 0;
  }
  onInput(event) {
    if (!event || !this.card_focused)
      return;
    const idx = this._index;
    if (idx < 0 || idx > 16)
      return;
    let card_number = this.details.value.card_number;
    if ((event.code.startsWith("Digit") || event.code.startsWith("Numpad")) && idx < (this.is_amex ? 15 : 16)) {
      card_number = card_number.substring(0, idx) + event.key + card_number.substring(idx + 1);
      this.details.patchValue({ card_number });
      this._focusChange(idx, 1);
    } else if (event.code === "Backspace" && idx > 0) {
      let card_number2 = this.details.value.card_number;
      card_number2 = card_number2.substring(0, idx) + " " + card_number2.substring(idx + 1);
      this.details.patchValue({ card_number: card_number2 });
      this._focusChange(idx, -1);
    } else if (event.code === "ArrowLeft") {
      this._focusChange(idx, -1);
    } else if (event.code === "ArrowRight" && card_number[idx] !== " ") {
      this._focusChange(idx, 1);
    }
  }
  _focusChange(idx, dir) {
    this._index = Math.min(16, Math.max(0, idx + dir));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (this._onChange)
      this._onChange(new_value);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.details.patchValue(value || BLANK_CARD);
  }
};
_CardInputFieldComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CardInputFieldComponent_BaseFactory;
  return function CardInputFieldComponent_Factory(__ngFactoryType__) {
    return (\u0275CardInputFieldComponent_BaseFactory || (\u0275CardInputFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CardInputFieldComponent)))(__ngFactoryType__ || _CardInputFieldComponent);
  };
})();
_CardInputFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardInputFieldComponent, selectors: [["card-input-field"]], viewQuery: function CardInputFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c04, 7);
  }
  if (rf & 2) {
    let _t2;
    \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._input_el = _t2.first);
  }
}, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    /* istanbul ignore next */
    useExisting: forwardRef(() => _CardInputFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature], decls: 43, vars: 4, consts: [["input", ""], [3, "keyup", "formGroup"], [1, "flex", "flex-col"], ["for", "card-number"], ["tabindex", "0", 1, "relative", "mb-4", "flex", "h-12", "w-full", "items-center", "rounded", "border", "border-base-200", "p-2", "font-mono", "focus-within:border-base-200", "focus-within:shadow", 3, "focus"], [1, "flex-1"], ["type", "tel", "maxlength", "17", 1, "absolute", "hidden", 3, "keydown", "value"], [1, "h-8", 3, "src"], [1, "flex", "flex-1", "flex-col"], ["for", "cardholder"], ["appearance", "outline"], ["name", "cardholder", "matInput", "", "placeholder", "Mr John Smith", "formControlName", "cardholder"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "w-1/4", "flex-1", "flex-col"], ["placeholder", "MM", "formControlName", "exp_month"], [3, "value"], ["placeholder", "YYYY", "formControlName", "exp_year"], ["for", "cvv"], ["appearance", "outline", 1, "w-20"], ["name", "cvv", "matInput", "", "formControlName", "cvv", "maxlength", "4"]], template: function CardInputFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("keyup", function CardInputFieldComponent_Template_form_keyup_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onInput($event));
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(1, "div", 2)(2, "label", 3);
    \u0275\u0275text(3, "Card Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275listener("focus", function CardInputFieldComponent_Template_div_focus_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.focusInput());
    });
    \u0275\u0275elementStart(5, "pre", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 6, 0);
    \u0275\u0275listener("keydown", function CardInputFieldComponent_Template_input_keydown_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, CardInputFieldComponent_Conditional_9_Template, 1, 1, "img", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
    \u0275\u0275text(12, "Name on Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 10);
    \u0275\u0275element(14, "input", 11);
    \u0275\u0275elementStart(15, "mat-error");
    \u0275\u0275text(16, "Cardholder name is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "label", 9);
    \u0275\u0275text(20, "Expiry Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 10)(22, "mat-select", 14);
    \u0275\u0275repeaterCreate(23, CardInputFieldComponent_For_24_Template, 2, 3, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-error");
    \u0275\u0275text(26, "Expiry month is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 13)(28, "label", 9);
    \u0275\u0275text(29, "Expiry Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-form-field", 10)(31, "mat-select", 16);
    \u0275\u0275repeaterCreate(32, CardInputFieldComponent_For_33_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-error");
    \u0275\u0275text(35, "Expiry year is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 2)(37, "label", 17);
    \u0275\u0275text(38, "CVV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-form-field", 18);
    \u0275\u0275element(40, "input", 19);
    \u0275\u0275elementStart(41, "mat-error");
    \u0275\u0275text(42, "Invalid security code");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.details);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.card_display);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx.details.value.card_number == null ? null : ctx.details.value.card_number.trim());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.card_type ? 9 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx.months);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx.years);
  }
}, dependencies: [MatFormFieldModule, MatFormField, MatError, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=card-input-field.component.css.map */"] });
var CardInputFieldComponent = _CardInputFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardInputFieldComponent, [{
    type: Component,
    args: [{ selector: "card-input-field", template: `
        <form [formGroup]="details" (window:keyup)="onInput($event)">
            <div class="flex flex-col">
                <label for="card-number">Card Number</label>
                <div
                    tabindex="0"
                    class="relative mb-4 flex h-12 w-full items-center rounded border border-base-200 p-2 font-mono focus-within:border-base-200 focus-within:shadow"
                    (focus)="focusInput()"
                >
                    <pre class="flex-1">{{ card_display }}</pre>
                    <input
                        #input
                        class="absolute hidden"
                        type="tel"
                        [value]="details.value.card_number?.trim()"
                        (keydown)="(false)"
                        maxlength="17"
                    />
                    @if (card_type) {
                        <img
                            [src]="'assets/icons/' + card_type + '.svg'"
                            class="h-8"
                        />
                    }
                </div>
            </div>
            <div class="flex flex-1 flex-col">
                <label for="cardholder">Name on Card</label>
                <mat-form-field appearance="outline">
                    <input
                        name="cardholder"
                        matInput
                        placeholder="Mr John Smith"
                        formControlName="cardholder"
                    />
                    <mat-error>Cardholder name is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex items-center space-x-2">
                <div class="flex w-1/4 flex-1 flex-col">
                    <label for="cardholder">Expiry Month</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            placeholder="MM"
                            formControlName="exp_month"
                        >
                            @for (item of months; track item) {
                                <mat-option [value]="item[0]">
                                    {{ item[1] }} ({{ item[0] }})
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>Expiry month is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex w-1/4 flex-1 flex-col">
                    <label for="cardholder">Expiry Year</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            placeholder="YYYY"
                            formControlName="exp_year"
                        >
                            @for (item of years; track item) {
                                <mat-option [value]="item">{{
                                    item
                                }}</mat-option>
                            }
                        </mat-select>
                        <mat-error>Expiry year is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="cvv">CVV</label>
                    <mat-form-field appearance="outline" class="w-20">
                        <input
                            name="cvv"
                            matInput
                            formControlName="cvv"
                            maxlength="4"
                        />
                        <mat-error>Invalid security code</mat-error>
                    </mat-form-field>
                </div>
            </div>
        </form>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => CardInputFieldComponent),
        multi: true
      }
    ], imports: [
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule
    ], styles: ["/* angular:styles/component:css;2bc8ca7aace10e46f51053cb2cf4127500bd9fcd06c7c0d1d5dc88d70d997800;/home/runner/work/user-interfaces/user-interfaces/libs/payments/src/lib/card-input-field.component.ts */\nmat-form-field {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=card-input-field.component.css.map */\n"] }]
  }], null, { _input_el: [{
    type: ViewChild,
    args: ["input", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardInputFieldComponent, { className: "CardInputFieldComponent", filePath: "libs/payments/src/lib/card-input-field.component.ts", lineNumber: 138 });
})();

// libs/payments/src/lib/payment-modal.component.ts
function PaymentModalComponent_Conditional_0_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" between ", \u0275\u0275pipeBind2(1, 2, ctx_r1.details.date, "shortTime"), " and ", \u0275\u0275pipeBind2(2, 5, ctx_r1.details.date + ctx_r1.details.duration * 60 * 1e3, "shortTime"), " ");
  }
}
function PaymentModalComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 2)(1, "h2", 3);
    \u0275\u0275text(2, "Booking Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 4);
    \u0275\u0275elementStart(4, "p", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275conditionalCreate(7, PaymentModalComponent_Conditional_0_Conditional_1_Conditional_7_Template, 3, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9, "You booking will cost:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 7)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "card-input-field", 8);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentModalComponent_Conditional_0_Conditional_1_Template_card_input_field_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.card_details, $event) || (ctx_r1.card_details = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "footer", 9)(16, "button", 10);
    \u0275\u0275listener("click", function PaymentModalComponent_Conditional_0_Conditional_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.processPayment());
    });
    \u0275\u0275text(17, " Make Payment ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 11)(19, "i", 12);
    \u0275\u0275text(20, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3(" You are requesting a ", ctx_r1.details.type, " booking in ", ctx_r1.details.resource_name, " for ", \u0275\u0275pipeBind2(6, 6, ctx_r1.details.date, "mediumDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.details.all_day ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 9, ctx_r1.details.amount / 100, ctx_r1.code));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.card_details);
  }
}
function PaymentModalComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 13)(1, "h2", 3);
    \u0275\u0275text(2, "Payment Successful");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "img", 15);
    \u0275\u0275elementStart(18, "footer", 16)(19, "button", 17);
    \u0275\u0275text(20, " Great, thanks. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Ref #", ctx_r1.transaction_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 6, ctx_r1.details.amount / 100, ctx_r1.code), " paid.");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.details.resource_name, " booked.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 9, ctx_r1.details.date, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(15, 12, ctx_r1.details.date, "shortTime"), " and ", \u0275\u0275pipeBind2(16, 15, ctx_r1.details.date + ctx_r1.details.duration * 60 * 1e3, "shortTime"), " ");
  }
}
function PaymentModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, PaymentModalComponent_Conditional_0_Conditional_1_Template, 21, 12)(2, PaymentModalComponent_Conditional_0_Conditional_2_Template, 21, 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.success ? 1 : 2);
  }
}
function PaymentModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r1.loading));
  }
}
var _PaymentModalComponent = class _PaymentModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this.event = new EventEmitter();
    this.details = this._data;
    this.loading = this._data.loading;
    this.success = false;
    this.transaction_id = "12345678";
  }
  get code() {
    return this._org.currency_code;
  }
  processPayment() {
    return __async(this, null, function* () {
      if (!this.card_details || !this._validCardDetails())
        return;
      this.event.emit(this.card_details);
      yield this._data.makePayment(this.card_details);
      this.success = true;
    });
  }
  _validCardDetails() {
    return (this.card_details?.cardholder.length || 0) > 0 && (this.card_details?.cvv.length || 0) >= 3;
  }
};
_PaymentModalComponent.\u0275fac = function PaymentModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentModalComponent)();
};
_PaymentModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentModalComponent, selectors: [["payment-modal"]], outputs: { event: "event" }, decls: 3, vars: 3, consts: [[1, "relative", "max-h-[100vh]", "overflow-auto"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "p-8"], [1, "relative", "flex", "w-[24rem]", "flex-col", "items-center", "space-y-2", "px-4", "pt-8"], [1, "text-2xl", "font-medium"], ["src", "assets/icons/cost.svg", 1, "w-1/2"], [1, "pb-2", "text-center", "text-sm"], [1, "text-sm"], [1, "text-center", "text-lg", "font-medium"], [1, "w-full", 3, "ngModelChange", "ngModel"], [1, "p-4"], ["matRipple", "", 1, "w-full", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "left-1", "top-1"], [1, "material-symbols-rounded", "text-2xl"], [1, "relative", "flex", "w-[24rem]", "flex-col", "px-8", "pt-8"], [1, "mb-2", "text-xl", "font-medium"], ["src", "assets/icons/payment-confirmed.svg", 1, "w-full"], [1, "border-t", "border-base-200", "p-4"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "w-full"], ["diameter", "32"]], template: function PaymentModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PaymentModalComponent_Conditional_0_Template, 3, 1, "div", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, PaymentModalComponent_Conditional_2_Template, 5, 3, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(1, 1, ctx.loading) ? 0 : 2);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  CardInputFieldComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple
], encapsulation: 2 });
var PaymentModalComponent = _PaymentModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentModalComponent, [{
    type: Component,
    args: [{ selector: "payment-modal", template: `
        @if (!(loading | async)) {
            <div class="relative max-h-[100vh] overflow-auto">
                @if (!success) {
                    <main
                        class="relative flex w-[24rem] flex-col items-center space-y-2 px-4 pt-8"
                    >
                        <h2 class="text-2xl font-medium">Booking Payment</h2>
                        <img src="assets/icons/cost.svg" class="w-1/2" />
                        <p class="pb-2 text-center text-sm">
                            You are requesting a {{ details.type }} booking in
                            {{ details.resource_name }} for
                            {{ details.date | date: 'mediumDate' }}
                            @if (!details.all_day) {
                                between
                                {{ details.date | date: 'shortTime' }} and
                                {{
                                    details.date + details.duration * 60 * 1000
                                        | date: 'shortTime'
                                }}
                            }
                        </p>
                        <p class="text-sm">You booking will cost:</p>
                        <p class="text-center text-lg font-medium">
                            <strong>{{
                                details.amount / 100 | currency: code
                            }}</strong>
                        </p>
                        <card-input-field
                            class="w-full"
                            [(ngModel)]="card_details"
                        ></card-input-field>
                    </main>
                    <footer class="p-4">
                        <button
                            matRipple
                            class="w-full"
                            (click)="processPayment()"
                        >
                            Make Payment
                        </button>
                    </footer>
                    <button
                        icon
                        matRipple
                        mat-dialog-close
                        class="absolute left-1 top-1"
                    >
                        <i class="material-symbols-rounded text-2xl">close</i>
                    </button>
                } @else {
                    <main class="relative flex w-[24rem] flex-col px-8 pt-8">
                        <h2 class="text-2xl font-medium">Payment Successful</h2>
                        <h3 class="mb-2 text-xl font-medium">
                            Ref #{{ transaction_id }}
                        </h3>
                        <p>{{ details.amount / 100 | currency: code }} paid.</p>
                        <p>{{ details.resource_name }} booked.</p>
                        <p>{{ details.date | date: 'mediumDate' }}</p>
                        <p>
                            {{ details.date | date: 'shortTime' }} and
                            {{
                                details.date + details.duration * 60 * 1000
                                    | date: 'shortTime'
                            }}
                        </p>
                    </main>
                    <img
                        src="assets/icons/payment-confirmed.svg"
                        class="w-full"
                    />
                    <footer class="border-t border-base-200 p-4">
                        <button btn matRipple mat-dialog-close class="w-full">
                            Great, thanks.
                        </button>
                    </footer>
                }
            </div>
        } @else {
            <div
                class="flex h-full w-full flex-col items-center justify-center p-8"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading | async }}</p>
            </div>
        }
    `, imports: [
      CommonModule,
      CardInputFieldComponent,
      MatProgressSpinnerModule,
      MatRippleModule
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentModalComponent, { className: "PaymentModalComponent", filePath: "libs/payments/src/lib/payment-modal.component.ts", lineNumber: 125 });
})();

// libs/payments/src/lib/payments.service.ts
var STRIPE_MODULE = "Payment";
var _PaymentsService = class _PaymentsService {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this._loading = new BehaviorSubject("");
    this._active_card = new BehaviorSubject("");
    this.loading = this._loading.asObservable();
    this.payment_sources = of(1).pipe(switchMap(() => {
      const mod = this._org.module("payments", STRIPE_MODULE);
      if (!mod)
        return of([]);
      return mod.execute("list_payment_methods", ["card"]);
    }), tap((_2) => _2[0] ? this._active_card.next(_2[0].id) : ""), shareReplay(1));
  }
  get enabled() {
    return !!this._org.module("payments", STRIPE_MODULE);
  }
  makePayment(details) {
    return __async(this, null, function* () {
      if (!this._org.module("payments", STRIPE_MODULE))
        throw "Payments not enabled";
      const [cost, period] = yield this._getCostOfProduct(details?.type).catch((_2) => [0, 60]);
      console.log("Cost:", cost, period);
      if (cost <= 0)
        return;
      let customer_id = this._settings.get("STRIPE_Customer_ID");
      if (!customer_id)
        customer_id = yield this._newCustomerID();
      this._settings.saveUserSetting("STRIPE_Customer_ID", customer_id);
      const amount = cost * (details.duration / period);
      let result = void 0;
      const makePayment = (c) => __async(this, null, function* () {
        result = yield this._processPayment(amount, customer_id, c).catch((e) => {
          this._loading.next("");
          throw e;
        });
      });
      const data = __spreadProps(__spreadValues({}, details), {
        rate: `$${(cost / 100).toFixed(2)} per hour`,
        amount,
        makePayment,
        loading: this.loading
      });
      const ref = this._dialog.open(PaymentModalComponent, { data });
      yield ref.afterClosed().toPromise();
      return result;
    });
  }
  _addPaymentMethod(card) {
    return __async(this, null, function* () {
      const mod = this._org.module("payments", STRIPE_MODULE);
      if (!mod)
        throw "Unable to load module";
      const payment_method = yield mod.execute("add_payment_method", [
        "card",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        card
      ]);
      return payment_method.id || payment_method;
    });
  }
  _getCostOfProduct(type) {
    return __async(this, null, function* () {
      const price = [0, 60];
      const mod = this._org.module("payments", STRIPE_MODULE);
      if (!mod)
        return price;
      const product_list = yield mod.execute("get_product_prices", [
        null,
        null,
        type
      ]);
      if (!product_list.length)
        return price;
      return product_list;
    });
  }
  _processPayment(amount, customer_id, card_details) {
    return __async(this, null, function* () {
      this._loading.next("Checking payment method...");
      console.log("Getting payment method...");
      const source = card_details ? yield this._addPaymentMethod(card_details) : this._active_card.getValue();
      if (!source)
        throw "No payment source selected";
      this._loading.next("Processing payment...");
      console.log("Processing payment...");
      const mod = this._org.module("payments", STRIPE_MODULE);
      if (!mod)
        throw "Unable to load module";
      const id = yield mod.execute("create_payment_intent", [
        amount,
        this._org.building.currency || "USD",
        null,
        null,
        customer_id,
        null,
        null,
        null,
        currentUser()?.email
      ]);
      if (!id)
        throw "Failed to create payment";
      console.log("Confirming payment...");
      yield mod.execute("confirm_payment_intent", [id, source]);
      this._loading.next("");
      return {
        success: true,
        state: "approved",
        invoice_id: id,
        amount,
        created_at: Date.now(),
        updated_at: Date.now()
      };
    });
  }
  _newCustomerID() {
    return __async(this, null, function* () {
      const mod = this._org.module("payments", STRIPE_MODULE);
      if (!mod)
        throw "Unable to load module";
      const user = currentUser();
      const id = yield mod.execute("create_customer", [
        0,
        null,
        null,
        null,
        `${user.id}|${user.name}|FromPlaceOS`,
        user.email
      ]);
      return id;
    });
  }
};
_PaymentsService.\u0275fac = function PaymentsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentsService)();
};
_PaymentsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentsService, factory: _PaymentsService.\u0275fac, providedIn: "root" });
var PaymentsService = _PaymentsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/bookings/src/lib/booking-form.service.ts
var BOOKING_TYPES = ["desk", "parking", "locker", "catering"];
var _BookingFormService = class _BookingFormService extends AsyncHandler {
  get view() {
    return this._view.getValue();
  }
  get booking() {
    return this._booking.getValue();
  }
  resourceUserName(id) {
    return this._resource_use[id];
  }
  newForm(type, booking = new Booking({})) {
    if (type !== this._options.getValue().type)
      this.clearForm();
    this.setOptions({ type });
    if (!booking.id) {
      booking.all_day = this._settings.get(`app.${type}s.all_day_default`) ?? this._settings.get(`app.${type}.all_day_default`) ?? this._settings.get("app.bookings.all_day_default");
    }
    this.form.reset();
    this.form.patchValue(Bi(__spreadValues(__spreadValues({}, booking), booking.extension_data), [null, void 0, ""]));
    this.subscription("form_change", this.form.valueChanges.subscribe(() => {
      const { date, duration } = this.form.getRawValue();
      this._assets.setOptions({ date, duration });
      this.storeForm();
    }));
    this.timeout("date", () => __async(this, null, function* () {
      return this.form.patchValue({
        date: booking.date,
        duration: booking.duration
      });
    }));
    this._booking.next(new Booking(booking));
    this._options.next({ type: this._options.getValue().type });
    this.timeout("set-resource", () => __async(this, null, function* () {
      const resources = this.form.getRawValue().resources;
      if (!resources?.length)
        return;
      const item_list = yield nextValueFrom(this.resources);
      const new_list = resources.map((asset) => item_list.find((_2) => _2.id == asset.id) || asset);
      this.form.patchValue({ resources: new_list });
    }));
  }
  constructor() {
    super();
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._payments = inject(PaymentsService);
    this._assets = inject(AssetStateService);
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
        features instanceof Array ? features.forEach((_2) => list.push(_2)) : null;
      }
      return unique(list).sort((a, b2) => a.localeCompare(b2));
    }), shareReplay(1));
    this.booking_rules = combineLatest([this._org.building_list, this._options]).pipe(switchMap(([list, { type }]) => Promise.all(list.map((bld) => fu(bld.id, `${type}_booking_rules`).toPromise()))), map((building_rules) => {
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
      merge(this.form.get("user").valueChanges, timer(1e3)),
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
          return !is_restricted && (!asset.groups?.length || asset.groups.some((grp) => currentUser().groups.includes(grp))) && asset.bookable !== false && (!options.features || options.features?.every((_2) => asset.features.includes(_2))) && (!options.zone_id || options.zone_id === asset.zone?.id || options.zone_id === asset.zone?.parent_id) && !booked_ids.includes(asset.id);
        });
        console.log("Resources Available:", available);
        return available;
      }, catchError(() => of([]))));
    }), tap(() => this._loading.next("")), shareReplay(1));
    this.grouped_availability = combineLatest([
      this.options,
      this.available_resources
    ]).pipe(map(([options, resource]) => {
      const groups = [];
      const asset_list = [...resource].sort((a, b2) => a.zone?.id?.localeCompare(b2.zone?.id));
      const members = options.members?.length ? options.members : [currentUser()];
      while (asset_list.length) {
        const group = [];
        let asset = asset_list.pop();
        while (group.length < members.length) {
          if (group.length && !group.find((_2) => _2.zone?.id === asset.zone?.id)) {
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
      if (booking instanceof NavigationEnd && !booking.url.includes("book") && !BOOKING_TYPES.find((_2) => booking.url.includes(_2))) {
        this.clearForm();
      }
    }));
    this._org.initialised.pipe(first((_2) => _2)).subscribe(() => this.setOptions({}));
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
      return this.newForm(this._options.getValue().type);
    }
    const booking = this._booking.getValue();
    this.form.reset({ user: currentUser(), booked_by: currentUser() });
    this.form.patchValue(Bi(__spreadValues(__spreadValues({}, booking || {}), booking?.extension_data || {}), [null, void 0, ""]));
    this._options.next({ type: this._options.getValue().type });
  }
  clearForm() {
    sessionStorage.removeItem("PLACEOS.booking_form");
    sessionStorage.removeItem("PLACEOS.booking_form_options");
    this.newForm(this._options.getValue().type);
  }
  storeForm() {
    sessionStorage.setItem("PLACEOS.booking_form", JSON.stringify(__spreadValues(__spreadValues({}, this._booking.getValue()), Bi(this.form.getRawValue() || {}, [
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
    const booking_data = Bi(__spreadValues(__spreadValues(__spreadValues({}, data), booking || {}), booking?.extension_data || {}), [null, void 0, ""]);
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
      console.log("i18n:", i18n("BOOKINGS.CONFIRM_MSG"));
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
        yield this.postFormForGroup().catch((_2) => {
          notifyError(JSON.stringify(_2));
          details.close();
          throw _2;
        });
      } else
        yield this.postForm().catch((_2) => {
          notifyError(JSON.stringify(_2));
          details.close();
          throw _2;
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
      ].filter((_2) => _2));
      this._loading.next("Saving booking");
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
      const q2 = event_id ? { ical_uid: value.ical_uid, event_id } : parent_id ? { booking_id: parent_id } : {};
      if (booking.instance && !value.update_master) {
        q2.instance = true;
        q2.start_time = booking.booking_start;
      }
      if (value.recurrence_type && value.recurrence_type !== "none") {
        const available_period = getUnixTime(endOfDay(addDays(Date.now(), this._settings.get(`app.${value.booking_type}s.available_period`) || 90)));
        if (!value.recurrence_end || value.recurrence_end > available_period) {
          value.recurrence_end = available_period;
        }
      }
      const result = yield lastValueFrom(saveBooking(new Booking(__spreadProps(__spreadValues(__spreadValues({}, this._options.getValue()), value), {
        description: value.asset_name || value.description,
        user_name: value.user?.name || value.user_name,
        user_email: value.user?.email || value.user_email,
        extension_data: __spreadProps(__spreadValues({}, value.extension_data || {}), {
          assets: value.assets.map((_2) => _2.toJSON()),
          group: value.group,
          phone: value.phone,
          department: value.user?.department || currentUser()?.department
        }),
        approved: this._settings.get("app.bookings.no_approval") === true,
        zones: unique([...zones, ...value.zones || []]).filter((_2) => _2)
      })), q2)).catch((e) => {
        this._loading.next("");
        throw e?.error || e;
      });
      if (value.assets?.length || booking.extension_data.assets?.length) {
        const requests = yield validateAssetRequestsForResource(__spreadProps(__spreadValues({}, result), { from_booking: true }), {
          date: value.date,
          duration: value.duration,
          all_day: value.all_day,
          host: value.booked_by_email,
          zones: unique([...zones, ...value.zones || []]).filter((_2) => _2)
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
      const extra_members = members.filter((_2) => _2.email !== currentUser().email);
      if (extra_members.length <= 0)
        throw i18n("BOOKINGS.GROUP_NO_MEMBERS");
      const form = this.form.getRawValue();
      const asset_list = yield nextValueFrom(this.available_resources);
      const active_resource = asset_list.find((_2) => _2.id === form.asset_id || _2.map_id === form.asset_id);
      const level = this._org.levelWithID([active_resource.zone?.id]);
      const resources = [
        active_resource,
        ...yield this._getNearbyResources(level.map_id, form.asset_id, asset_list, extra_members.length)
      ];
      const group_members = unique([currentUser(), ...extra_members], "email");
      const available = yield Promise.all(group_members.map((_2, idx) => this.checkResourceAvailable(__spreadProps(__spreadValues({}, form), {
        asset_id: resources[idx].map_id || resources[idx].id,
        user_email: _2.email
      }), type)));
      const unavailable = group_members.filter((_2, idx) => !available[idx]);
      const group_name = `${currentUser().email}[${format(Date.now(), "yyyy-MM-dd")}]`;
      let id = "";
      for (let i = 0; i < group_members.length; i++) {
        if (!available[i])
          continue;
        const user = group_members[i];
        const asset = resources[i];
        const assets = user.email == currentUser().email ? form.assets : [];
        this.form.patchValue(__spreadProps(__spreadValues({}, form), {
          assets,
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
          ]) : [this._org.organisation.id, this._org.region?.id]).filter((_2) => _2)
        }));
        const bkn = yield this.postForm(true);
        if (bkn.id && !id)
          id = bkn.id;
      }
      if (unavailable.length) {
        notifyWarn(i18n("BOOKINGS.GROUP_SOME_HAVE_BOOKINGS", {
          members: unavailable.map((_2) => _2.name || _2.email)?.join(", ")
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
        ref.componentInstance.event.pipe(first((_2) => _2.reason === "done")).toPromise(),
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
      const active_bookings = bookings.filter((_2) => _2.status !== "declined" && _2.status !== "cancelled" && !_2.rejected);
      if (active_bookings.find((_2) => _2.asset_id === asset_id && id !== _2.id)) {
        throw i18n(asset_id.includes("@") ? "BOOKINGS.VISITOR_BOOKED" : "BOOKINGS.RESOURCE_BOOKED", { name: asset_id });
      }
      const allowed_bookings = this._settings.get(`app.bookings.allowed_daily_${type}_count`) ?? 1;
      if (allowed_bookings > 0 && active_bookings.filter((_2) => _2.user_email.toLowerCase() === (user_email || currentUser()?.email || "").toLowerCase() && _2.id !== id).length >= allowed_bookings) {
        const current = user_email === currentUser()?.email;
        throw i18n(current ? "BOOKINGS.CLASH_CURRENT_USER" : "BOOKINGS.CLASH_OTHER_USER", { name: user_email });
      }
      return true;
    });
  }
  loadResourceList(type) {
    const use_region = this._settings.get("app.use_region");
    const map_metadata = (_2) => (_2?.metadata[type]?.details instanceof Array ? _2.metadata[type].details : []).map((d) => __spreadProps(__spreadValues({}, d), {
      id: d.id || d.map_id,
      zone: _2.zone
    }));
    const id = use_region ? this._org.building.parent_id : this._org.building.id;
    if (use_region) {
      const id2 = this._org.building.parent_id;
      const buildings = this._org.buildings.filter((_2) => _2.parent_id === id2);
      return forkJoin(buildings.map((_2) => _u(_2.id, { name: type }).pipe(map((data) => flatten(data.map(map_metadata)))))).pipe(map((_2) => flatten(_2)));
    }
    return _u(id, {
      name: type
    }).pipe(map((data) => flatten(data.map(map_metadata))));
  }
  _getNearbyResources(map_url, id, resources, count) {
    return __async(this, null, function* () {
      const nearby_resources = [];
      let asset_list = resources.filter((_2) => _2.id !== id && _2.map_id !== id);
      for (let i = 0; i < count; i++) {
        const item = yield findNearbyFeature(map_url, id, asset_list.map((_2) => _2.map_id || _2.id));
        if (item) {
          nearby_resources.push(resources.find((_2) => _2.id === item || _2.map_id === item));
          asset_list = asset_list.filter((_2) => _2.id !== item && _2.map_id !== item);
        }
      }
      return nearby_resources;
    });
  }
};
_BookingFormService.\u0275fac = function BookingFormService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingFormService)();
};
_BookingFormService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookingFormService, factory: _BookingFormService.\u0275fac, providedIn: "root" });
var BookingFormService = _BookingFormService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/spaces/src/lib/space.utilities.ts
var SPACE_LIST_REQUESTS = {};
function requestSpacesForZone(id) {
  if (!id)
    return of([]);
  if (SPACE_LIST_REQUESTS[id])
    return SPACE_LIST_REQUESTS[id];
  SPACE_LIST_REQUESTS[id] = oc({
    zone_id: id,
    limit: 500,
    signage: false
  }).pipe(map((_2) => (_2.data || []).map((_3) => new Space(_3))), tap((_2) => updateSpaceList(_2)), shareReplay(1));
  return SPACE_LIST_REQUESTS[id];
}
var SPACE_COUNT = 0;
function generateMockSpace(overrides = {}) {
  const id = `space-${SPACE_COUNT++}`;
  const name = `Test Space ${SPACE_COUNT}`;
  const linked = predictableRandomInt(99999) % 2 === 0 && SPACE_COUNT > 1;
  const space = __spreadValues({
    id,
    name,
    long_name: `${name} with an long name`,
    map_id: `${SPACE_COUNT}`,
    capacity: predictableRandomInt(21, 1) * 2,
    email: `${name.toLowerCase().split(" ").join(".")}@${USER_DOMAIN}`,
    type: "",
    searchable: predictableRandomInt(99999) % 2 === 0,
    controlable: predictableRandomInt(99999) % 2 === 0,
    bookable: predictableRandomInt(99999) % 2 === 0,
    cost_hour: predictableRandomInt(300) * 100,
    setup: predictableRandomInt(6) * 5,
    breakdown: predictableRandomInt(6) * 5,
    zones: ["zone_lvl-0"],
    support_url: `/control/#/panel/${id}`,
    bookings: [],
    //Array(10).fill(0).map(i => generateMockBooking()),
    linked_rooms: linked ? [`space-${predictableRandomInt(SPACE_COUNT - 1)}`] : [],
    image: ""
  }, overrides);
  if (space["configurations"] && space["configurations"].length > 0) {
    space["configurations"].forEach((config) => config.capacity = predictableRandomInt(space.capacity) + 1);
    space["configurations"][0].capacity = space.capacity;
  }
  return space;
}

export {
  endOfMinute,
  setHours,
  requestSpacesForZone,
  generateMockSpace,
  $,
  mn,
  Nn,
  Un,
  Yn,
  Dn,
  Hn,
  VirtualKeyboardComponent,
  endInFuture,
  newBookingFromCalendarEvent,
  loadLockerBanks,
  loadLockers,
  validateAssetRequestsForResource,
  AssetStateService,
  BookingFormService,
  MatAutocomplete,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger,
  MatAutocompleteModule,
  searchStaff,
  showStaff,
  UserSearchFieldComponent
};
//# sourceMappingURL=chunk-5O4WLIIF.js.map
