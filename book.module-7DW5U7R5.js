import {
  ANIMATION_SHOW_CONTRACT_EXPAND,
  ActionFieldComponent,
  ActivatedRoute,
  AssetListFieldComponent,
  AssetRequest,
  AssetStateService,
  AsyncHandler,
  AsyncPipe,
  AttachedResourceConfigModalComponent,
  AuthenticatedImageDirective,
  BehaviorSubject,
  Booking,
  BookingFormService,
  COMMA,
  CalendarEvent,
  CateringItem,
  CateringOrder,
  CommonModule,
  ComponentsModule,
  CounterComponent,
  CurrencyPipe,
  CustomTooltipComponent,
  DAYS_OF_WEEK_INDEX,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  Desk,
  DeskListFieldComponent,
  DurationFieldComponent,
  DurationPipe,
  ENTER,
  EventEmitter,
  EventFormService,
  ExploreParkingService,
  ExploreStateService,
  ExploreZoomControlComponent,
  FindAvailabilityModalComponent,
  FooterMenuComponent,
  FormControl,
  FormControlName,
  FormFieldsModule,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  HostSelectFieldComponent,
  IconComponent,
  ImageCarouselComponent,
  ImageListFieldComponent,
  InteractiveMapComponent,
  InviteVisitorFormComponent,
  LockerListFieldComponent,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MapLocateModalComponent,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule,
  MatCheckbox,
  MatCheckboxModule,
  MatChip,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatPrefix,
  MatProgressBar,
  MatProgressBarModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatRipple,
  MatSelect,
  MatTab,
  MatTabGroup,
  MatTabsModule,
  MatTooltip,
  MatTooltipModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NumberValueAccessor,
  OrganisationService,
  ParkingService,
  ParkingSpaceListFieldComponent,
  ReactiveFormsModule,
  RecurrenceDays,
  RecurrenceFieldComponent,
  RichTextInputComponent,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SPACE,
  SafePipe,
  SanitizePipe,
  SettingsService,
  SettingsToggleComponent,
  SharedBookingsModule,
  SharedComponentModule,
  SharedExploreModule,
  SimpleTableComponent,
  SpaceListFieldComponent,
  SpacePipe,
  TimeFieldComponent,
  TopbarComponent,
  TranslatePipe,
  UserAvatarComponent,
  UserIdleTimeService,
  UserListFieldComponent,
  UserSearchFieldComponent,
  Validators,
  addDays,
  addHours,
  addMinutes,
  catchError,
  checkinBooking,
  checkinEventGuest,
  combineLatest,
  csvToJson,
  currentUser,
  debounceTime,
  differenceInMinutes,
  downloadFile,
  endOfDay,
  filter,
  findNearbyFeature,
  first,
  flatten,
  format,
  formatDuration,
  formatRecurrence,
  formatRecurrence2,
  forwardRef,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  getInvalidFields,
  getTimezoneOffsetString,
  getUnixTime,
  i18n,
  isAfter,
  isBefore,
  loadLockerBanks,
  loadLockers,
  map,
  notifyError,
  notifyInfo,
  notifySuccess,
  notifyWarn,
  of,
  openConfirmModal,
  queryBookings,
  queryEvents,
  randomInt,
  randomString,
  roundToNearestMinutes,
  set,
  setHours,
  shareReplay,
  showMetadata,
  showSystem,
  startOfDay,
  startOfMinute,
  startWith,
  stringToMinutes,
  subHours,
  switchMap,
  take,
  tap,
  unique,
  updateEventMetadata,
  updateMetadata,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction6,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BDQVL3CS.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// libs/catering/src/lib/catering-item-modal.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ item: a0 });
function CateringItemModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 10)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CateringItemModalComponent_form_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 27);
    \u0275\u0275element(8, "input", 28);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.name.invalid && ctx_r1.form.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.NAME"), "");
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, "FORM.NAME_REQUIRED"));
  }
}
function CateringItemModalComponent_form_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 27);
    \u0275\u0275element(8, "input", 30);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const auto_r3 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.category.invalid && ctx_r1.form.controls.category.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.CATEGORY"), "");
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 8, "COMMON.CATEGORY"))("matAutocomplete", auto_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "COMMON.CATEGORY_REQUIRED"));
  }
}
function CateringItemModalComponent_form_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 27);
    \u0275\u0275element(8, "input", 32);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11, "Caterer is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const caterer_auto_r4 = \u0275\u0275reference(13);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.caterer.invalid && ctx_r1.form.controls.caterer.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "CATERING.CATERER"), "");
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "CATERING.CATERER"))("matAutocomplete", caterer_auto_r4);
  }
}
function CateringItemModalComponent_form_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-counter", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.unit_price.invalid && ctx_r1.form.controls.unit_price.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "CATERING.ITEM_PRICE"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("max", 1e5)("step", 10)("render_fn", ctx_r1.renderPrice);
  }
}
function CateringItemModalComponent_form_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "label", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 27);
    \u0275\u0275element(5, "textarea", 36);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "COMMON.DESCRIPTION"));
  }
}
function CateringItemModalComponent_form_5_div_18_mat_chip_row_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 41);
    \u0275\u0275listener("removed", function CateringItemModalComponent_form_5_div_18_mat_chip_row_7_Template_mat_chip_row_removed_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeTag(item_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 42);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(3, 2, "COMMON.REMOVE_ITEM", \u0275\u0275pureFunction1(5, _c1, item_r7)));
  }
}
function CateringItemModalComponent_form_5_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "label", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 27)(5, "mat-chip-grid", 38, 3);
    \u0275\u0275template(7, CateringItemModalComponent_form_5_div_18_mat_chip_row_7_Template, 6, 7, "mat-chip-row", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 40);
    \u0275\u0275listener("matChipInputTokenEnd", function CateringItemModalComponent_form_5_div_18_Template_input_matChipInputTokenEnd_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addTag($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r8 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.controls.tags.invalid && ctx_r1.form.controls.tags.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "COMMON.TAGS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.tag_list);
    \u0275\u0275advance();
    \u0275\u0275property("matChipInputFor", chipList_r8)("matChipInputSeparatorKeyCodes", ctx_r1.separators)("matChipInputAddOnBlur", true);
  }
}
function CateringItemModalComponent_form_5_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "label", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "image-list-field", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.IMAGES"));
  }
}
function CateringItemModalComponent_form_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11)(1, "div", 12);
    \u0275\u0275template(2, CateringItemModalComponent_form_5_div_2_Template, 13, 11, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275template(4, CateringItemModalComponent_form_5_div_4_Template, 13, 12, "div", 13)(5, CateringItemModalComponent_form_5_div_5_Template, 12, 9, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275template(7, CateringItemModalComponent_form_5_div_7_Template, 7, 9, "div", 13);
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275element(9, "settings-toggle", 16);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 17)(12, "label", 18);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19);
    \u0275\u0275element(16, "a-counter", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, CateringItemModalComponent_form_5_div_17_Template, 7, 6, "div", 21)(18, CateringItemModalComponent_form_5_div_18_Template, 9, 9, "div", 21);
    \u0275\u0275elementStart(19, "label");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 22)(23, "settings-toggle", 23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_form_5_Template_settings_toggle_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Gluten Free" }) : ctx_r1.removeTag("Gluten Free"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "settings-toggle", 23);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_form_5_Template_settings_toggle_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Vegan" }) : ctx_r1.removeTag("Vegan"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "settings-toggle", 23);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_form_5_Template_settings_toggle_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Vegetarian" }) : ctx_r1.removeTag("Vegetarian"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "settings-toggle", 23);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_form_5_Template_settings_toggle_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Contains Dairy" }) : ctx_r1.removeTag("Contains Dairy"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "settings-toggle", 24);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275listener("ngModelChange", function CateringItemModalComponent_form_5_Template_settings_toggle_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.addTag({ value: "Contains Nuts" }) : ctx_r1.removeTag("Contains Nuts"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, CateringItemModalComponent_form_5_div_33_Template, 5, 3, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.controls.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.controls.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.caterer);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.controls.unit_price);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(10, 30, "CATERING.ITEM_POINTS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 32, "CATERING.ITEM_DISCOUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("min", 0)("max", 100)("step", 5)("render_fn", ctx_r1.renderPercent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.controls.tags);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 34, "CATERING.TAGS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(24, 36, "CATERING.TAG_GLUTEN_FREE"))("ngModel", ctx_r1.hasTag("Gluten Free"))("ngModelOptions", \u0275\u0275pureFunction0(46, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(26, 38, "CATERING.TAG_VEGAN"))("ngModel", ctx_r1.hasTag("Vegan"))("ngModelOptions", \u0275\u0275pureFunction0(47, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(28, 40, "CATERING.TAG_VEGETARIAN"))("ngModel", ctx_r1.hasTag("Vegetarian"))("ngModelOptions", \u0275\u0275pureFunction0(48, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(30, 42, "CATERING.TAG_DAIRY"))("ngModel", ctx_r1.hasTag("Contains Dairy"))("ngModelOptions", \u0275\u0275pureFunction0(49, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(32, 44, "CATERING.TAG_NUTS"))("ngModel", ctx_r1.hasTag("Contains Nuts"))("ngModelOptions", \u0275\u0275pureFunction0(50, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.controls.images);
  }
}
function CateringItemModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 45)(1, "button", 46);
    \u0275\u0275listener("click", function CateringItemModalComponent_footer_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveChanges());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.form.dirty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.SAVE"), " ");
  }
}
function CateringItemModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "mat-spinner", 48);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "CATERING.ITEM_SAVING"));
  }
}
function CateringItemModalComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    \u0275\u0275property("value", option_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r10, " ");
  }
}
function CateringItemModalComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    \u0275\u0275property("value", option_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r11, " ");
  }
}
var CateringItemModalComponent = class _CateringItemModalComponent {
  /** Current item details */
  get item() {
    return this._data.item || new CateringItem();
  }
  /** List of available categories */
  get categories() {
    return this._data.categories || [];
  }
  /** List of available caterers */
  get caterers() {
    return this._data.caterers || [];
  }
  get tag_list() {
    return this.form.controls.tags.value;
  }
  renderPercent(value = 0) {
    return `${value}%`;
  }
  _renderPrice(value = 0) {
    return this._currency_pipe?.transform(value / 100, this._org.currency_code) || value;
  }
  hasTag(tag) {
    return this.tag_list.includes(tag);
  }
  constructor(_data, _org) {
    this._data = _data;
    this._org = _org;
    this.event = new EventEmitter();
    this.form = new FormGroup({
      name: new FormControl(this.item.name || "", [Validators.required]),
      description: new FormControl(this.item.description || ""),
      category: new FormControl(this.item.category || "", [
        Validators.required
      ]),
      caterer: new FormControl(this.item.caterer || "", [
        Validators.required
      ]),
      unit_price: new FormControl(this.item.unit_price, [
        Validators.required
      ]),
      tags: new FormControl(this.item.tags || []),
      accept_points: new FormControl(this.item.accept_points || false),
      discount_cap: new FormControl(this.item.discount_cap || 0),
      images: new FormControl(this.item.images || [])
    });
    this.loading = false;
    this.separators = [ENTER, COMMA, SPACE];
    this._currency_pipe = new CurrencyPipe("en");
    this.renderPrice = (v) => this._renderPrice(v);
  }
  /**
   * Add a tag to the list of tags for the item
   * @param event Input event
   */
  addTag(event) {
    if (!this.form || !this.form.controls.tags)
      return;
    this.form.controls.tags.markAsDirty();
    const input = event.input;
    const value = event.value;
    const tag_list = this.tag_list;
    if ((value || "").trim()) {
      tag_list.push(value);
      this.form.controls.tags.setValue(tag_list);
    }
    if (input)
      input.value = "";
  }
  /**
   * Remove tag from the list
   * @param existing_tag Tag to remove
   */
  removeTag(existing_tag) {
    if (!this.form || !this.form.controls.tags)
      return;
    const tag_list = this.tag_list;
    this.form.controls.tags.markAsDirty();
    const index = tag_list.indexOf(existing_tag);
    if (index >= 0) {
      tag_list.splice(index, 1);
      this.form.controls.tags.setValue(tag_list);
    }
  }
  saveChanges() {
    this.loading = true;
    this.event.emit({
      reason: "done",
      metadata: {
        item: new CateringItem(__spreadValues(__spreadProps(__spreadValues({}, this.item), {
          id: this.item.id || `item-${randomInt(99999999)}`
        }), this.form.value))
      }
    });
  }
  static {
    this.\u0275fac = function CateringItemModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringItemModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemModalComponent, selectors: [["catering-item-modal"]], outputs: { event: "event" }, standalone: false, decls: 15, vars: 9, consts: [["load_state", ""], ["auto", "matAutocomplete"], ["caterer_auto", "matAutocomplete"], ["chipList", ""], [1, "sticky", "top-0", "p-2", "m-2", "w-[calc(100%-1rem)]", "border-none", "z-10", "bg-base-200", "rounded"], [1, "text-xl", "font-medium", "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "px-4 overflow-auto max-h-[65vh] max-w-xl", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex px-4 py-2 items-center justify-end border-t border-solid border-base-200", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "px-4", "overflow-auto", "max-h-[65vh]", "max-w-xl", 3, "formGroup"], [1, "flex", "items-center", "space-x-2", "w-full"], ["class", "flex flex-col flex-1", 4, "ngIf"], [1, "flex", "space-x-4"], [1, "flex", "items-center", "py-4", "flex-1"], ["formControlName", "accept_points", 1, "w-full", 3, "name"], [1, "mb-4", "space-y-2"], [1, "flex-1", "w-24", "min-w-0"], [1, "max-w-[calc(50%-0.5rem)]"], ["formControlName", "discount_cap", 3, "min", "max", "step", "render_fn"], ["class", "flex flex-col", 4, "ngIf"], ["list", "", 1, "flex", "items-center", "flex-wrap", "-mx-2", "pb-2"], [1, "min-w-[40%]", "flex-1", "p-2", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "min-w-[40%]", "p-2", "w-1/2", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "flex", "flex-col", "flex-1"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "category"], ["matInput", "", "name", "category", "formControlName", "category", 3, "placeholder", "matAutocomplete"], ["for", "caterer"], ["matInput", "", "name", "caterer", "formControlName", "caterer", 3, "placeholder", "matAutocomplete"], ["formControlName", "unit_price", 3, "min", "max", "step", "render_fn"], [1, "flex", "flex-col"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], ["for", "tags"], ["aria-label", "Item Tags"], [3, "removed", 4, "ngFor", "ngForOf"], ["name", "tags", "placeholder", "Item tags e.g. Gluten Free, Vegan etc.", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], ["matChipRemove", ""], ["for", "images"], ["name", "images", "formControlName", "images"], [1, "flex", "px-4", "py-2", "items-center", "justify-end", "border-t", "border-solid", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], [1, "flex", "flex-col", "items-center", "p-8", "space-y-2", "w-64"], ["diameter", "32"], [3, "value"]], template: function CateringItemModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 4)(1, "h2", 5);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, CateringItemModalComponent_button_4_Template, 3, 0, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, CateringItemModalComponent_form_5_Template, 34, 51, "form", 7)(6, CateringItemModalComponent_footer_6_Template, 4, 4, "footer", 8)(7, CateringItemModalComponent_ng_template_7_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(9, "mat-autocomplete", null, 1);
        \u0275\u0275template(11, CateringItemModalComponent_mat_option_11_Template, 2, 2, "mat-option", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-autocomplete", null, 2);
        \u0275\u0275template(14, CateringItemModalComponent_mat_option_14_Template, 2, 2, "mat-option", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const load_state_r12 = \u0275\u0275reference(8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, ctx.item.id ? "CATERING.ITEM_EDIT" : "CATERING.ITEM_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form && !ctx.loading)("ngIfElse", load_state_r12);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.caterers);
      }
    }, dependencies: [NgForOf, NgIf, MatAutocomplete, MatOption, MatAutocompleteTrigger, MatDialogClose, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, IconComponent, SettingsToggleComponent, MatFormField, MatError, MatRipple, MatInput, MatProgressSpinner, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, CounterComponent, ImageListFieldComponent, TranslatePipe], styles: ["\n\n[list][_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=catering-item-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemModalComponent, { className: "CateringItemModalComponent", filePath: "libs/catering/src/lib/catering-item-modal.component.ts", lineNumber: 317 });
})();

// libs/catering/src/lib/catering-option-modal.component.ts
function CateringItemOptionModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CateringItemOptionModalComponent_form_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 14);
    \u0275\u0275element(8, "input", 15);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.controls.name.invalid && ctx_r0.form.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.NAME"), "");
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, "FORM.NAME_REQUIRED"));
  }
}
function CateringItemOptionModalComponent_form_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 14);
    \u0275\u0275element(8, "input", 17);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const auto_r2 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.controls.group.invalid && ctx_r0.form.controls.group.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.TYPE"), "");
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 8, "CATERING.ITEM_OPTION_TYPE_PLACEHOLDER"))("matAutocomplete", auto_r2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "CATERING.ITEM_OPTION_TYPE_REQUIRED"));
  }
}
function CateringItemOptionModalComponent_form_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "settings-toggle", 19);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 1, "CATERING.ITEM_OPTION_SELECT_MULTIPLE"));
  }
}
function CateringItemOptionModalComponent_form_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 14);
    \u0275\u0275element(5, "input", 20);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "CATERING.ITEM_PRICE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "CATERING.ITEM_PRICE"));
  }
}
function CateringItemOptionModalComponent_form_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 9);
    \u0275\u0275template(1, CateringItemOptionModalComponent_form_5_div_1_Template, 13, 11, "div", 10)(2, CateringItemOptionModalComponent_form_5_div_2_Template, 13, 12, "div", 10)(3, CateringItemOptionModalComponent_form_5_div_3_Template, 3, 3, "div", 11)(4, CateringItemOptionModalComponent_form_5_div_4_Template, 7, 6, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.group);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.multiple);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.controls.unit_price);
  }
}
function CateringItemOptionModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 21)(1, "button", 22);
    \u0275\u0275listener("click", function CateringItemOptionModalComponent_footer_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveChanges());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.form.dirty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.SAVE"), " ");
  }
}
function CateringItemOptionModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "CATREING.ITEM_OPTION_SAVING"));
  }
}
function CateringItemOptionModalComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r4, " ");
  }
}
var CateringItemOptionModalComponent = class _CateringItemOptionModalComponent {
  /** Current item details */
  get option() {
    return this._data.option;
  }
  /** List of available categories */
  get types() {
    return this._data.types || [];
  }
  constructor(_data) {
    this._data = _data;
    this.event = new EventEmitter();
    this.form = new FormGroup({
      name: new FormControl(this.option.name || "", [Validators.required]),
      group: new FormControl(this.option.group || "", [Validators.required]),
      unit_price: new FormControl(this.option.unit_price),
      multiple: new FormControl(!!this.option.multiple, [])
    });
    this.loading = false;
  }
  saveChanges() {
    this.loading = true;
    const new_option = __spreadValues(__spreadProps(__spreadValues({}, this.option), {
      id: this.option.id || `option-${randomInt(99999999)}`
    }), this.form.value);
    this.event.emit({
      reason: "done",
      metadata: {
        item: new CateringItem(__spreadProps(__spreadValues({}, this._data.parent), {
          options: this._data.parent.options.filter((i) => i.id !== new_option.id).concat([new_option])
        }))
      }
    });
  }
  static {
    this.\u0275fac = function CateringItemOptionModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringItemOptionModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemOptionModalComponent, selectors: [["catering-option-modal"]], outputs: { event: "event" }, standalone: false, decls: 12, vars: 8, consts: [["load_state", ""], ["auto", "matAutocomplete"], [1, "sticky", "top-0", "p-2", "m-2", "w-[calc(100%-1rem)]", "border-none", "z-10", "bg-base-200", "rounded"], [1, "text-xl", "font-medium", "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "px-4 overflow-auto max-h-[65vh] w-[28rem]", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex px-4 py-2 items-center justify-end border-t border-solid border-base-200", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "px-4", "overflow-auto", "max-h-[65vh]", "w-[28rem]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], ["class", "flex flex-col mb-4", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "group"], ["matInput", "", "name", "group", "formControlName", "group", 3, "placeholder", "matAutocomplete"], [1, "flex", "flex-col", "mb-4"], ["formControlName", "multiple", 3, "name"], ["matInput", "", "name", "unit-price", "type", "number", "formControlName", "unit_price", 3, "placeholder"], [1, "flex", "px-4", "py-2", "items-center", "justify-end", "border-t", "border-solid", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], ["loading", "", 1, "flex", "flex-col", "items-center", "p-8", "space-y-2", "w-64"], ["diameter", "32"], [3, "value"]], template: function CateringItemOptionModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 2)(1, "h2", 3);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, CateringItemOptionModalComponent_button_4_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, CateringItemOptionModalComponent_form_5_Template, 5, 5, "form", 5)(6, CateringItemOptionModalComponent_footer_6_Template, 4, 4, "footer", 6)(7, CateringItemOptionModalComponent_ng_template_7_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(9, "mat-autocomplete", null, 1);
        \u0275\u0275template(11, CateringItemOptionModalComponent_mat_option_11_Template, 2, 2, "mat-option", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const load_state_r5 = \u0275\u0275reference(8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.option.id ? "CATERING.ITEM_OPTION_EDIT" : \u0275\u0275pipeBind1(3, 6, "CATERING.ITEM_OPTION_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form && !ctx.loading)("ngIfElse", load_state_r5);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.types);
      }
    }, dependencies: [NgForOf, NgIf, MatAutocomplete, MatOption, MatAutocompleteTrigger, MatDialogClose, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, IconComponent, SettingsToggleComponent, MatFormField, MatError, MatRipple, MatInput, MatProgressSpinner, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemOptionModalComponent, { className: "CateringItemOptionModalComponent", filePath: "libs/catering/src/lib/catering-option-modal.component.ts", lineNumber: 136 });
})();

// libs/catering/src/lib/utilities.ts
var RULE_REQUESTS = {};
function getCateringRulesForZone(zone_id, fresh = false) {
  if (!zone_id)
    return of([]);
  if (!RULE_REQUESTS[zone_id] || fresh)
    RULE_REQUESTS[zone_id] = showMetadata(zone_id, "catering_config").pipe(map((_) => _.details instanceof Array ? _.details : []), catchError((e2) => of([])));
  return RULE_REQUESTS[zone_id];
}
function cateringItemAvailable(item, rules, event) {
  let is_available = true;
  for (const rule of rules) {
    if (item.category === rule.name || item.tags.includes(rule.name) || event.resources.find((_) => _.zones.includes(rule.name)) || event.space?.zones.includes(rule.name) || rule.name === "*") {
      let matches = 0;
      for (const condition of rule.rules) {
        const date = new Date(event.date);
        switch (condition[0]) {
          case "is_before":
            matches += isBefore(Date.now(), subHours(date, condition[1])) ? 1 : 0;
            break;
          case "within_hours":
            matches += isAfter(Date.now(), subHours(date, condition[1])) ? 1 : 0;
            break;
          case "after_hour":
            matches += isAfter(date, setHours(date, condition[1])) ? 1 : 0;
            break;
          case "before_hour":
            matches += isBefore(date, setHours(date, condition[1])) ? 1 : 0;
            break;
          case "min_length":
            matches += event.duration >= stringToMinutes(condition[1]) ? 1 : 0;
            break;
          case "max_length":
            matches += event.duration <= stringToMinutes(condition[1]) ? 1 : 0;
            break;
          case "visitor_type":
            matches += event.ext("visitor_type") === condition[1] ? 1 : 0;
            break;
          default:
            matches += 1;
        }
      }
      is_available = matches >= rule.rules.length;
    }
  }
  return is_available;
}

// libs/catering/src/lib/catering-order-modal.component.ts
var _c02 = () => ({});
var _c12 = (a0) => ({ count: a0 });
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CATERING.ITEM_OPTION_AVAILABLE"), " ");
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_a_counter_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a-counter", 19);
    \u0275\u0275listener("ngModelChange", function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_a_counter_8_Template_a_counter_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateItemQuantity(item_r2, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngModel", item_r2.quantity);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "button", 22)(3, "app-icon");
    \u0275\u0275text(4, "remove");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.addItem(item_r2));
    });
    \u0275\u0275elementStart(8, "app-icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", item_r2.quantity ? "Items with options must be removed from order confirmation page" : "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r2.quantity, " ");
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_4_Template, 3, 3, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_a_counter_8_Template, 1, 1, "a-counter", 16)(9, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_9_Template, 10, 3, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.options.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, item_r2.unit_price / 100, ctx_r2.code), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !item_r2.options.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.options.length);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 9)(1, "div", 10);
    \u0275\u0275template(2, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_Template, 10, 8, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", cat_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (ctx_r2.menu_items || \u0275\u0275pureFunction0(2, _c02))[cat_r5]);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_Template, 3, 3, "mat-tab", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.menu_items || \u0275\u0275pureFunction0(1, _c02))[cat_r5].length);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-tab-group");
    \u0275\u0275template(2, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.categories);
  }
}
function CateringOrderModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, CateringOrderModalComponent_div_0_ng_container_1_Template, 3, 1, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const order_details_r6 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.show_order_details)("ngIfElse", order_details_r6);
  }
}
function CateringOrderModalComponent_footer_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 27);
    \u0275\u0275listener("click", function CateringOrderModalComponent_footer_1_ng_container_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.show_order_details = true);
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.order.item_count)("matBadge", ctx_r2.order.item_count)("matBadgeHidden", !ctx_r2.order.item_count);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "COMMON.CONFIRM"), " ");
  }
}
function CateringOrderModalComponent_footer_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function CateringOrderModalComponent_footer_1_ng_template_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.show_order_details = false);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 29);
    \u0275\u0275listener("click", function CateringOrderModalComponent_footer_1_ng_template_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveOrder());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.BACK"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "CATERING.ORDERS_SAVE"), " ");
  }
}
function CateringOrderModalComponent_footer_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 25);
    \u0275\u0275template(1, CateringOrderModalComponent_footer_1_ng_container_1_Template, 7, 9, "ng-container", 6)(2, CateringOrderModalComponent_footer_1_ng_template_2_Template, 6, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_actions_r9 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.show_order_details)("ngIfElse", order_actions_r9);
  }
}
function CateringOrderModalComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "mat-spinner", 31);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.loading);
  }
}
function CateringOrderModalComponent_ng_template_4_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r2.optionsFor(item_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "CATERING.ORDERS_SELECTED", \u0275\u0275pureFunction1(5, _c12, item_r11.options.length)), " ");
  }
}
function CateringOrderModalComponent_ng_template_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringOrderModalComponent_ng_template_4_div_5_div_4_Template, 3, 7, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a-counter", 34);
    \u0275\u0275listener("ngModelChange", function CateringOrderModalComponent_ng_template_4_div_5_Template_a_counter_ngModelChange_8_listener($event) {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateItemQuantity(item_r11, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r11.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r11.options.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 4, item_r11.total_cost / 100, ctx_r2.code), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", item_r11.quantity);
  }
}
function CateringOrderModalComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 32)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275template(5, CateringOrderModalComponent_ng_template_4_div_5_Template, 9, 7, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "CATERING.ORDERS_CONFIRM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.order.items);
  }
}
var CateringOrderModalComponent = class _CateringOrderModalComponent extends AsyncHandler {
  get code() {
    return this._org.currency_code;
  }
  constructor(_org, _data) {
    super();
    this._org = _org;
    this._data = _data;
    this.event = new EventEmitter();
    this.loading = "";
    this.menu_items = {};
    this.categories = [];
    this.loading = i18n("CATERING.MENU_LOADING");
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.loading = i18n("CATERING.MENU_LOADING");
      this.order = new CateringOrder(this._data.order);
      this.rules = yield this._data.getCateringConfig(this.order.event?.space?.level?.parent_id);
      this._data.menu.subscribe((list) => {
        this.loading = "Loading menu...";
        const categories = unique(list.map((item) => item.category));
        const map2 = {};
        for (const cat of categories) {
          map2[cat] = list.filter((item) => {
            return item.category === cat && cateringItemAvailable(item, this.rules, this.order.event);
          });
        }
        this.categories = categories;
        this.menu_items = map2;
        this.updateMenuQuantities();
        this.timeout("clear_loading", () => this.loading = "", 1e3);
      });
    });
  }
  addItem(item, choose_options = true) {
    const old_item = this.order.items.find((itm) => itm.id === item.id && itm.options.length === itm.options.reduce((c, o) => c + (item.options.find((opt) => o.id === opt.id) ? 1 : 0), 0));
    if (choose_options && item.options?.length) {
      this._data.selectOptions(item.options).then((options) => {
        const new_item = new CateringItem(__spreadProps(__spreadValues({}, item), { options }));
        this.addItem(new_item, false);
      });
    } else if (old_item) {
      this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
        items: this.order.items.filter((i) => !(i.id === item.id && i.options_string === item.options_string)).concat([
          new CateringItem(__spreadProps(__spreadValues({}, item), {
            quantity: old_item.quantity + 1
          }))
        ])
      }));
    } else {
      this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
        items: this.order.items.concat([
          new CateringItem(__spreadProps(__spreadValues({}, item), { quantity: 1 }))
        ])
      }));
    }
    this.updateMenuQuantities();
  }
  removeItem(item) {
    this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
      items: this.order.items.filter((_) => _.id !== item.id && _.options_string === item.options_string)
    }));
    this.updateMenuQuantities();
  }
  updateItemQuantity(item, amount) {
    const old_item = this.order.items.find((itm) => itm.id === item.id && itm.options_string === item.options_string);
    let items = [...this.order.items];
    if (old_item) {
      items = this.order.items.filter((i) => !(i.id === item.id && i.options_string === item.options_string)).concat([new CateringItem(__spreadProps(__spreadValues({}, item), { quantity: amount }))]);
    } else {
      items = this.order.items.concat([
        new CateringItem(__spreadProps(__spreadValues({}, item), { quantity: amount }))
      ]);
    }
    items.sort((a, b) => a.name.localeCompare(b.name));
    this.order = new CateringOrder(__spreadProps(__spreadValues({}, this.order), {
      items
    }));
    this.updateMenuQuantities();
  }
  updateMenuQuantities() {
    for (const cat in this.menu_items) {
      for (const item of this.menu_items[cat]) {
        item.quantity = this.order.items.reduce((c, i) => i.id === item.id ? c + i.quantity : c, 0);
      }
    }
  }
  optionsFor(item) {
    return item.options.map((i) => i.name).join("\n");
  }
  saveOrder() {
    this.event.emit({
      reason: "done",
      metadata: { order: this.order }
    });
  }
  confirmOrder() {
    this.show_order_details = true;
  }
  static {
    this.\u0275fac = function CateringOrderModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringOrderModalComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderModalComponent, selectors: [["app-catering-order-modal"]], outputs: { event: "event" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 3, consts: [["load_state", ""], ["order_details", ""], ["order_actions", ""], ["class", "main min-w-[20rem]", 4, "ngIf", "ngIfElse"], ["class", "flex items-center justify-center space-x-2 p-2 border-t border-base-200", 4, "ngIf"], [1, "main", "min-w-[20rem]"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [3, "label", 4, "ngIf"], [3, "label"], [1, "list"], ["item", "", "class", "flex items-center p-2 border-b border-base-200", 4, "ngFor", "ngForOf"], ["item", "", 1, "flex", "items-center", "p-2", "border-b", "border-base-200"], [1, "flex-1", "w-1/2"], ["class", "text-xs no-underline", 4, "ngIf"], [1, "bg-primary", "text-xs", "rounded", "px-4", "py-2", "mx-2", "text-white", "font-medium"], ["ngDefaultControl", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "flex items-center", 4, "ngIf"], [1, "text-xs", "no-underline"], ["ngDefaultControl", "", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center"], [3, "matTooltip"], ["icon", "", "matRipple", "", 3, "disabled"], [1, "count", "h-12", "w-12", "flex", "items-center", "justify-center"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse"], ["confirm", "", "btn", "", "matRipple", "", "matBadgeColor", "warn", 3, "click", "disabled", "matBadge", "matBadgeHidden"], ["matRipple", "", 1, "inverse", 3, "click"], ["save", "", "btn", "", "matRipple", "", 3, "click"], [1, "flex", "flex-col", "w-64", "p-8", "items-center", "space-y-2"], ["diameter", "32"], [1, "h-[3.25rem]"], ["class", "text-xs underline", 3, "matTooltip", 4, "ngIf"], [3, "ngModelChange", "ngModel"], [1, "text-xs", "underline", 3, "matTooltip"]], template: function CateringOrderModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CateringOrderModalComponent_div_0_Template, 2, 2, "div", 3)(1, CateringOrderModalComponent_footer_1_Template, 4, 2, "footer", 4)(2, CateringOrderModalComponent_ng_template_2_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, CateringOrderModalComponent_ng_template_4_Template, 6, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r12 = \u0275\u0275reference(3);
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r12);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [NgForOf, NgIf, MatTab, MatTabGroup, MatDialogClose, MatTooltip, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, MatRipple, MatProgressSpinner, CounterComponent, CurrencyPipe, TranslatePipe], styles: ["\n\n.list[_ngcontent-%COMP%] {\n  height: 24em;\n  min-width: 32em;\n  max-width: calc(100vw - 1em);\n}\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 12em;\n}\ninput[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 1em;\n  border: none;\n  border-radius: 0 !important;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  outline: none;\n  font-size: 1em;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border: none;\n  border-top: 2px solid var(--s);\n  border-bottom: 2px solid var(--s);\n  box-shadow: none;\n}\ninput.error[_ngcontent-%COMP%]::placeholder {\n  color: rgba(var(--error), 0.45);\n}\n/*# sourceMappingURL=catering-order-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderModalComponent, { className: "CateringOrderModalComponent", filePath: "libs/catering/src/lib/catering-order-modal.component.ts", lineNumber: 233 });
})();

// libs/catering/src/lib/catering-order-options-modal.component.ts
function CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r4.unit_price / 100, ctx_r2.code), " ");
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 14)(1, "div", 15)(2, "div", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_div_4_Template, 3, 4, "div", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    \u0275\u0275property("value", opt_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r4.unit_price);
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-radio-group", 10);
    \u0275\u0275listener("ngModelChange", function CateringOrderOptionsModalComponent_div_7_ng_container_4_Template_mat_radio_group_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const group_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateGroupOption(group_r2, $event));
    });
    \u0275\u0275elementStart(2, "mat-radio-button", 11)(3, "span", 12);
    \u0275\u0275text(4, "None");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_Template, 5, 3, "mat-radio-button", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", group_r2 == null ? null : group_r2.options);
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r6.unit_price / 100, ctx_r2.code), " ");
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.option_state[opt_r6.id], $event) || (ctx_r2.option_state[opt_r6.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "div", 15)(2, "div", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_div_4_Template, 3, 4, "div", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.option_state[opt_r6.id]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r6.unit_price);
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template, 5, 3, "mat-checkbox", 19);
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngForOf", group_r2 == null ? null : group_r2.options);
  }
}
function CateringOrderOptionsModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275template(4, CateringOrderOptionsModalComponent_div_7_ng_container_4_Template, 6, 1, "ng-container", 9)(5, CateringOrderOptionsModalComponent_div_7_ng_template_5_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const multi_options_r7 = \u0275\u0275reference(6);
    \u0275\u0275attribute("group", group_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !group_r2.multiple)("ngIfElse", multi_options_r7);
  }
}
var CateringOrderOptionsModalComponent = class _CateringOrderOptionsModalComponent {
  constructor(_data) {
    this._data = _data;
    this.event = new EventEmitter();
    this.option_state = {};
    this.code = this._data.code;
    const groups = unique(this._data.options.map((i) => i.group || "Other"));
    const group_list = [];
    for (const group of groups) {
      const options = this._data.options.filter((i) => i.group === group);
      group_list.push({
        name: group,
        multiple: !!options.find((i) => i.multiple),
        options
      });
    }
    this.groups = group_list;
  }
  updateGroupOption(group, id) {
    for (const option of group.options) {
      this.option_state[option.id] = option.id === id;
    }
  }
  saveOptions() {
    const options = this._data.options.filter((opt) => this.option_state[opt.id]);
    this.event.emit({ reason: "done", metadata: { options } });
  }
  static {
    this.\u0275fac = function CateringOrderOptionsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringOrderOptionsModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderOptionsModalComponent, selectors: [["app-catering-options-modal"]], outputs: { event: "event" }, standalone: false, decls: 11, vars: 1, consts: [["multi_options", ""], ["icon", "", "mat-dialog-close", ""], [1, "overflow-auto"], ["class", "pt-1 pb-2 border-b border-base-200", 4, "ngFor", "ngForOf"], [1, "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "pt-1", "pb-2", "border-b", "border-base-200"], [1, "font-medium", "p-2", "capitalize"], [1, "flex", "flex-col", "pl-6"], [4, "ngIf", "ngIfElse"], ["aria-label", "Select an option", "ngModel", "", 1, "flex", "flex-col", 3, "ngModelChange"], ["value", "", 1, "my-1", "mx-0"], [1, "font-medium", "p-2"], ["class", "my-1 mx-0", 3, "value", 4, "ngFor", "ngForOf"], [1, "my-1", "mx-0", 3, "value"], [1, "flex", "items-center", "justify-center"], [1, "font-medium", "p-2", "flex-1", "w-1/2"], ["class", "opacity-60 text-xs", 4, "ngIf"], [1, "opacity-60", "text-xs"], [3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel"]], template: function CateringOrderOptionsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h3");
        \u0275\u0275text(2, "Select options");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 1)(4, "app-icon");
        \u0275\u0275text(5, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "main", 2);
        \u0275\u0275template(7, CateringOrderOptionsModalComponent_div_7_Template, 7, 4, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "footer", 4)(9, "button", 5);
        \u0275\u0275listener("click", function CateringOrderOptionsModalComponent_Template_button_click_9_listener() {
          return ctx.saveOptions();
        });
        \u0275\u0275text(10, " Save ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.groups);
      }
    }, dependencies: [NgForOf, NgIf, MatDialogClose, MatCheckbox, MatRadioGroup, MatRadioButton, NgControlStatus, NgModel, IconComponent, MatRipple, CurrencyPipe], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  min-height: 24em;\n  width: 24rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=catering-order-options-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderOptionsModalComponent, { className: "CateringOrderOptionsModalComponent", filePath: "libs/catering/src/lib/catering-order-options-modal.component.ts", lineNumber: 101 });
})();

// libs/catering/src/lib/catering-import-menu-modal.component.ts
function CateringImportMenuModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 5)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CateringImportMenuModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main")(1, "div", 6)(2, "app-icon", 7);
    \u0275\u0275text(3, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 9);
    \u0275\u0275listener("change", function CateringImportMenuModalComponent_main_5_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleFileEvent($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "button", 11);
    \u0275\u0275listener("click", function CateringImportMenuModalComponent_main_5_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "CATERING.MENU_IMPORT_FILE_SELECT"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 4, "CATERING.MENU_IMPORT_TEMPLATE"), " ");
  }
}
function CateringImportMenuModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 12);
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.loading);
  }
}
var CateringImportMenuModalComponent = class _CateringImportMenuModalComponent {
  constructor() {
    this.event = new EventEmitter();
  }
  /** Upload the image to the cloud */
  handleFileEvent(event) {
    this.loading = "Processing menu data...";
    const element = event.target;
    if (!element?.files)
      return this.loading = "";
    const files = element.files;
    if (!files.length)
      return this.loading = "";
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener("loadend", (e2) => {
      const contents = e2.target.result;
      const data = csvToJson(contents);
      this.loading = "";
      this.event.emit({
        reason: "done",
        metadata: data.filter((_) => (_.type || "").toLowerCase() === "item").map((i) => new CateringItem(__spreadProps(__spreadValues({}, i), {
          options: data.filter((_) => (_.type || "").toLowerCase() === "option" && _.tags === i.id).map((_) => ({
            id: _.id,
            name: _.name,
            group: _.category,
            multiple: _.multiple,
            unit_price: _.unit_price
          }))
        })))
      });
    });
    fileReader.readAsText(file);
  }
  downloadTemplate() {
    const template = `ID,Type,Name,Unit Price,Category,Caterer,Description,Tags,Multiple
item-1,item,Coffee,200,Drink,Wake Up Cafe,Wake Up,,
option-1,option,1 Sugar,20,Sugars,,item-1,false`;
    downloadFile("import-menu-template.csv", template);
  }
  static {
    this.\u0275fac = function CateringImportMenuModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringImportMenuModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringImportMenuModalComponent, selectors: [["catering-import-menu-modal"]], outputs: { event: "event" }, standalone: false, decls: 8, vars: 6, consts: [["load_state", ""], [1, "sticky", "top-0", "p-2", "m-2", "w-[calc(100%-1rem)]", "border-none", "z-10", "bg-base-200", "rounded"], [1, "text-xl", "font-medium", "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "h-[24rem]", "w-[24rem]", "border-4", "border-base-300", "border-dashed", "rounded-xl", "hover:bg-base-200", "mx-2", "p-4", "cursor-pointer"], [1, "text-8xl", "opacity-30"], [1, "opacity-30", "text-center", "px-4"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "h-[24rem]", "w-[24rem]"], ["diameter", "32"]], template: function CateringImportMenuModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, CateringImportMenuModalComponent_button_4_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, CateringImportMenuModalComponent_main_5_Template, 12, 6, "main", 4)(6, CateringImportMenuModalComponent_ng_template_6_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r3 = \u0275\u0275reference(7);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "CATERING.MENU_IMPORT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
      }
    }, dependencies: [NgIf, MatDialogClose, IconComponent, MatRipple, MatProgressSpinner, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringImportMenuModalComponent, { className: "CateringImportMenuModalComponent", filePath: "libs/catering/src/lib/catering-import-menu-modal.component.ts", lineNumber: 55 });
})();

// libs/catering/src/lib/catering-orders.service.ts
function checkOrder(order, filters) {
  const s = (filters.search || "").toLowerCase();
  return !!order.items.find((item) => (!filters?.caterer || filters.caterer === "<empty>" && !item.caterer || item.caterer === filters.caterer) && (item.name.toLowerCase().includes(s) || !!item.options.find((option) => option.name.toLowerCase().includes(s))));
}
var CateringOrdersService = class _CateringOrdersService extends AsyncHandler {
  /** Order filters */
  get filters() {
    return this._filters.getValue();
  }
  /** Order filters */
  set filters(filters) {
    this._filters.next(filters);
  }
  constructor(_settings, _org) {
    super();
    this._settings = _settings;
    this._org = _org;
    this._poll = new BehaviorSubject(0);
    this._loading = new BehaviorSubject(false);
    this._filters = new BehaviorSubject({
      caterer: ""
    });
    this.orders = combineLatest([
      this._filters,
      this._poll,
      this._org.initialised.pipe(first((_) => _))
    ]).pipe(debounceTime(300), switchMap(([{ date, zones }]) => {
      this._loading.next(true);
      const start = getUnixTime(startOfDay(date || Date.now()));
      const end = getUnixTime(endOfDay(date || Date.now()));
      if (!zones?.length) {
        zones = this._settings.get("app.use_region") ? [this._org.region.id] : [this._org.building.id];
      }
      return queryEvents({
        zone_ids: (zones || []).join(","),
        period_start: start,
        period_end: end
      }).pipe(catchError(() => of([])), map((events) => flatten(events.map((event) => event.valid_catering.map((o) => new CateringOrder(__spreadProps(__spreadValues({}, o), { event })))))), map((orders) => orders.filter((o) => format(o.deliver_at, "yyyy-MM-dd") === format(start * 1e3, "yyyy-MM-dd"))));
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.loading = this._loading.asObservable();
    this.order_filters = this._filters.asObservable();
    this.caterers = this.orders.pipe(map((_) => {
      const provider_groups = this._settings.get("app.catering_provider_groups") || {};
      let provider_list = Object.keys(provider_groups);
      const is_admin = currentUser().groups.includes("placeos_admin") || currentUser().groups.includes("placeos_support");
      if (!provider_list.length || is_admin)
        return unique(_.map((i) => i.caterer));
      provider_list = provider_list.filter((caterer) => provider_groups[caterer].find((group) => currentUser().groups.includes(group)));
      if (provider_list.length <= 1 && this._filters.getValue()?.caterer !== provider_list[0]) {
        this._filters.next(__spreadProps(__spreadValues({}, this._filters.getValue()), {
          caterer: provider_list[0]
        }));
      }
      return unique(provider_list);
    }), shareReplay(1));
    this.filtered = this.orders.pipe(map((list) => list.filter((order) => checkOrder(order, this._filters.getValue())).sort((a, b) => a.deliver_at - b.deliver_at)));
    this.subscription("changes", this.orders.subscribe());
  }
  /** Start polling for catering orders */
  startPolling(delay = 15 * 1e3) {
    this.interval("polling", () => this._poll.next((/* @__PURE__ */ new Date()).valueOf()), delay);
    return () => this.stopPolling();
  }
  /** Stop polling for new catering orders */
  stopPolling() {
    this.clearInterval("polling");
  }
  /**
   * Update the status of the order
   * @param order Order to update
   * @param status New order status
   */
  updateStatus(order, status) {
    return __async(this, null, function* () {
      order.status = status;
      const updated_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
        status,
        event: null
      }));
      const catering = [
        ...(order.event.extension_data.catering || []).filter((o) => o.id !== order.id),
        updated_order
      ].map((i) => new CateringOrder(__spreadValues({}, i)));
      const event = new CalendarEvent(__spreadProps(__spreadValues({}, order.event), {
        catering
      }));
      const system_id = event?.resources[0]?.id || event?.system?.id;
      const booking = yield updateEventMetadata(event.id, system_id, event.extension_data).toPromise();
      this.timeout("refresh-list", () => this._poll.next(Date.now()), 1e3);
      order.status = status;
      return booking;
    });
  }
  static {
    this.\u0275fac = function CateringOrdersService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringOrdersService)(\u0275\u0275inject(SettingsService), \u0275\u0275inject(OrganisationService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringOrdersService, factory: _CateringOrdersService.\u0275fac, providedIn: "root" });
  }
};

// libs/catering/src/lib/catering-state.service.ts
var CateringStateService = class _CateringStateService extends AsyncHandler {
  get is_editable() {
    return !this.zone || this.zone === this._org.building?.id;
  }
  get categories() {
    const menu = this._menu.getValue();
    return unique(menu.map((i) => i.category));
  }
  get caterer_list() {
    const menu = this._menu.getValue();
    return unique(menu.map((i) => i.caterer));
  }
  constructor(_org, _dialog, _settings, _orders) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._orders = _orders;
    this._updated = new BehaviorSubject(0);
    this._menu = new BehaviorSubject([]);
    this._loading = new BehaviorSubject(false);
    this._currency = new BehaviorSubject("USD");
    this._change = new BehaviorSubject(0);
    this.menu = this._menu.asObservable();
    this.loading = this._loading.asObservable();
    this.currency = this._currency.asObservable();
    this.settings = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([_]) => !!_), switchMap(([_]) => showMetadata(_.id, "catering-settings").pipe(catchError((_2) => of({})))), map((_) => _.details || {}), tap((_) => this._settings.post("require_catering_notes", !!_?.require_notes)), shareReplay(1));
    this.charge_codes = this.settings.pipe(map((_) => _.charge_codes || []));
    this.availability = this.settings.pipe(map((_) => _.disabled_rooms || []));
    this.caterers = combineLatest([
      this._menu,
      this._orders.caterers
    ]).pipe(map(([menu_items]) => {
      const provider_groups = this._settings.get("app.catering_provider_groups") || {};
      let provider_list = Object.keys(provider_groups);
      if (!provider_list.length) {
        return unique(menu_items.map((i) => i.caterer)).sort((a, b) => `${a}`.localeCompare(b));
      }
      provider_list = provider_list.filter((caterer) => provider_groups[caterer].find((group) => currentUser().groups.includes(group)));
      provider_list = unique(provider_list);
      provider_list = provider_list.sort((a, b) => `${a}`.localeCompare(b));
      return provider_list;
    }), shareReplay(1));
    this.zone = "";
    this.subscription("building", this._org.active_building.subscribe((bld) => __async(this, null, function* () {
      if (bld) {
        this._loading.next(true);
        this._menu.next([]);
        const menu = (yield this.getCateringForZone(bld.id).catch(() => [])).map((i) => new CateringItem(i));
        this._currency.next(this._settings.get("app.currency") || bld.currency || "USD");
        this._loading.next(false);
        this.timeout("loaded", () => this._menu.next(menu), 1e3);
      }
    })));
  }
  /**
   * Create/Edit catering order
   * @param order Order to manipulate
   */
  manageCateringOrder(order) {
    return __async(this, null, function* () {
      const ref = this._dialog.open(CateringOrderModalComponent, {
        data: {
          code: this._currency.getValue(),
          order,
          menu: this.menu,
          loading: this.loading,
          getCateringConfig: (_) => this.getCateringConfig(_),
          selectOptions: (_) => this.selectOptions(_)
        }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      ref.close();
      return details?.metadata?.order || order;
    });
  }
  addItem() {
    return __async(this, arguments, function* (item = new CateringItem()) {
      const ref = this._dialog.open(CateringItemModalComponent, {
        data: {
          item,
          categories: this.categories,
          caterers: this.caterer_list
        }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details?.reason !== "done")
        return;
      const menu = this._menu.getValue();
      const index = menu.findIndex((itm) => itm.id === item.id);
      if (index >= 0) {
        menu.splice(index, 1, details.metadata.item);
      } else {
        menu.push(details.metadata.item);
      }
      this.updateMenu(this._org.building.id, menu).then(() => {
        this._menu.next([...menu]);
        ref.close();
      }, () => ref.componentInstance.loading = false);
    });
  }
  updateItem(item) {
    const menu = this._menu.getValue();
    const index = menu.findIndex((itm) => itm.id === item.id);
    if (index >= 0)
      menu.splice(index, 1, item);
    else
      menu.push(item);
    this.updateMenu(this._org.building.id, menu).then(() => this._menu.next([...menu]));
  }
  addOption(_0) {
    return __async(this, arguments, function* (item, option = {}) {
      const types = unique(item.options.map((i) => i.group));
      const ref = this._dialog.open(CateringItemOptionModalComponent, {
        data: {
          parent: item,
          option,
          types
        }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details?.reason !== "done")
        return;
      const menu = this._menu.getValue();
      const index = menu.findIndex((itm) => itm.id === item.id);
      if (index >= 0) {
        menu.splice(index, 1, details.metadata.item);
      } else {
        menu.push(details.metadata.item);
      }
      this.updateMenu(this._org.building.id, menu).then(() => {
        this._menu.next([...menu]);
        ref.close();
      }, () => ref.componentInstance.loading = false);
    });
  }
  selectOptions(options) {
    return __async(this, null, function* () {
      const ref = this._dialog.open(CateringOrderOptionsModalComponent, {
        data: {
          code: this._currency.getValue(),
          options
        }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details?.reason !== "done")
        return [];
      ref.close();
      return details.metadata.options;
    });
  }
  deleteItem(item) {
    return __async(this, null, function* () {
      const details = yield openConfirmModal({
        title: i18n("CATERING.ITEM_REMOVE"),
        content: i18n("CATERING.ITEM_REMOVE_MSG", { name: item.name }),
        icon: {
          type: "icon",
          class: "material-icons",
          content: "delete"
        }
      }, this._dialog);
      if (details.reason !== "done")
        return;
      details.loading(i18n("CATERING.ITEM_REMOVE_LOADING"));
      const menu = this._menu.getValue().filter((itm) => item.id !== itm.id);
      this.updateMenu(this._org.building.id, menu).then(() => {
        this._menu.next([...menu]);
        notifySuccess(i18n("CATERING.ITEM_REMOVE_SUCCESS"));
        details.close();
      }, (e2) => {
        notifyError(i18n("CATERING.ITEM_REMOVE_ERROR", { error: e2 }));
        details.loading("");
      });
    });
  }
  deleteOption(item, option) {
    return __async(this, null, function* () {
      const details = yield openConfirmModal({
        title: i18n("CATERING.ITEM_OPTION_REMOVE"),
        content: i18n("CATERING.ITEM_OPTION_REMOVE", {
          name: option.name,
          item: item.name
        }),
        icon: {
          type: "icon",
          class: "material-icons",
          content: "delete"
        }
      }, this._dialog);
      if (details.reason !== "done")
        return;
      details.loading(i18n("CATERING.ITEM_OPTION_REMOVE_LOADING"));
      const menu = this._menu.getValue();
      menu.splice(menu.findIndex((itm) => itm.id === item.id), 1, new CateringItem(__spreadProps(__spreadValues({}, item), {
        options: item.options.filter((opt) => opt.id !== option.id)
      })));
      this.updateMenu(this._org.building.id, menu).then(() => {
        this._menu.next([...menu]);
        notifySuccess(i18n("CATERING.ITEM_OPTION_REMOVE_SUCCESS", {
          item: item.name
        }));
        details.close();
      }, () => {
        notifySuccess(i18n("CATERING.ITEM_OPTION_REMOVE_ERROR", {
          item: item.name
        }));
        details.loading("");
      });
    });
  }
  editConfig() {
    return __async(this, null, function* () {
      const config = yield this.getCateringConfig(this._org.building.id);
      const { require_notes } = yield this.settings.pipe(take(1)).toPromise();
      const menu = this._menu.getValue();
      const types = unique(flatten(menu.map((i) => [i.category, ...i.tags])));
      const ref = this._dialog.open(AttachedResourceConfigModalComponent, {
        data: {
          config,
          types,
          require_notes,
          saveNotes: (b) => this.saveSettings({ require_notes: b })
        }
      });
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details?.reason !== "done")
        return;
      this.updateConfig(this._org.building.id, details.metadata).then(() => ref.close(), () => ref.componentInstance.loading = false);
    });
  }
  importMenu() {
    return __async(this, null, function* () {
      const ref = this._dialog.open(CateringImportMenuModalComponent);
      const details = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details?.reason !== "done")
        return;
      ref.componentInstance.loading = i18n("CATERING.MENU_IMPORT_LOADING");
      const menu = this._menu.getValue();
      const bld = this._org.building;
      const updated_menu = unique(details.metadata.concat(menu), "id");
      yield this.updateMenu(bld.id, updated_menu).catch((_) => {
        notifyError(i18n("CATERING.MENU_IMPORT_ERROR"));
        ref.close();
        throw _;
      });
      notifySuccess(i18n("CATERING.MENU_IMPORT_SUCCESS", {
        count: details.metadata.length
      }));
      ref.close();
    });
  }
  updateMenu(zone_id, menu) {
    return updateMetadata(zone_id, {
      id: zone_id,
      name: "catering",
      details: menu,
      description: `Catering menu for ${zone_id}`
    }).toPromise();
  }
  saveSettings(settings) {
    return __async(this, null, function* () {
      const old_settings = yield this.settings.pipe(take(1)).toPromise();
      const result = yield updateMetadata(this._org.building.id, {
        id: this._org.building.id,
        name: "catering-settings",
        details: __spreadValues(__spreadValues({}, old_settings), settings),
        description: `Catering settings for ${this._org.building.id}`
      }).toPromise();
      this._change.next(Date.now());
      return result;
    });
  }
  getCateringForZone(zone_id) {
    return __async(this, null, function* () {
      const menu = (yield showMetadata(zone_id, "catering").toPromise()).details;
      return menu instanceof Array ? menu : [];
    });
  }
  getCateringConfig() {
    return __async(this, arguments, function* (zone_id = this._org.building.id) {
      const rules = (yield showMetadata(zone_id, "catering_config").toPromise()).details;
      return rules instanceof Array ? rules : [];
    });
  }
  updateConfig(zone_id, config) {
    return updateMetadata(zone_id, {
      id: zone_id,
      name: "catering_config",
      details: config,
      description: `Catering menu config for ${zone_id}`
    }).toPromise();
  }
  addItemToOrder(order, new_item) {
    let items = order.items;
    const match = items.find((item) => item.id === new_item.id && new_item.options?.length === item.options?.reduce((c, o) => c + (new_item.options.find((opt) => o.id === opt.id) ? 1 : 0), 0));
    match ? match.quantity += 1 : items = items.concat([
      new CateringItem(__spreadProps(__spreadValues({}, new_item), { quantity: 1 }))
    ]);
    const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
      items,
      event: null
    }));
    return new_order;
  }
  static {
    this.\u0275fac = function CateringStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(SettingsService), \u0275\u0275inject(CateringOrdersService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringStateService, factory: _CateringStateService.\u0275fac, providedIn: "root" });
  }
};

// libs/catering/src/lib/catering-menu.component.ts
var _c03 = (a0) => ({ key: "active", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c13 = (a0) => ({ key: "name", name: a0 });
var _c2 = (a0) => ({ key: "category", name: a0 });
var _c3 = (a0, a1) => ({ key: "caterer", name: a0, show: a1 });
var _c4 = (a0, a1) => ({ key: "unit_price", name: a0, content: a1, size: "6rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6.5rem", sortable: false });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function CateringMenuComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("ngModelChange", function CateringMenuComponent_ng_template_6_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setEnabled(row_r2, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "CATERING.ORDER_ALLOW"))("ngModel", ctx_r2.isEnabled(row_r2));
  }
}
function CateringMenuComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, data_r4 / 100, \u0275\u0275pipeBind1(2, 1, ctx_r2.symbol)), " ");
  }
}
function CateringMenuComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 9)(2, "app-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 4)(6, "button", 10);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_10_Template_button_click_6_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addOption(row_r6));
    });
    \u0275\u0275elementStart(7, "div", 11)(8, "app-icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 10);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_10_Template_button_click_13_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editItem(row_r6));
    });
    \u0275\u0275elementStart(14, "div", 11)(15, "app-icon");
    \u0275\u0275text(16, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 10);
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_10_Template_button_click_20_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeItem(row_r6));
    });
    \u0275\u0275elementStart(21, "div", 11)(22, "app-icon", 12);
    \u0275\u0275text(23, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "button", 13);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_10_Template_button_click_27_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_children[row_r6.id] = !ctx_r2.show_children[row_r6.id]);
    });
    \u0275\u0275elementStart(29, "app-icon");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const menu_r7 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", !ctx_r2.can_edit);
    \u0275\u0275property("disabled", !ctx_r2.can_edit)("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "CATERING.ITEM_OPTION_ADD"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 12, "CATERING.ITEM_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 14, "CATERING.ITEM_REMOVE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !(row_r6.options == null ? null : row_r6.options.length))("matTooltip", (row_r6.options == null ? null : row_r6.options.length) ? \u0275\u0275pipeBind1(28, 16, ctx_r2.show_children[row_r6.id] ? "CATERING.ITEM_OPTION_HIDE" : "CATERING.ITEM_OPTION_SHOW") : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.show_children[row_r6.id] ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function CateringMenuComponent_ng_template_12_div_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_12_div_0_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const option_r9 = \u0275\u0275nextContext().$implicit;
      const row_r10 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editOption(row_r10, option_r9));
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.ITEM_OPTION_EDIT"));
  }
}
function CateringMenuComponent_ng_template_12_div_0_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringMenuComponent_ng_template_12_div_0_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const option_r9 = \u0275\u0275nextContext().$implicit;
      const row_r10 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeOption(row_r10, option_r9));
    });
    \u0275\u0275elementStart(2, "app-icon", 12);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CATERING.ITEM_OPTION_REMOVE"));
  }
}
function CateringMenuComponent_ng_template_12_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "div", 17)(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CateringMenuComponent_ng_template_12_div_0_button_7_Template, 4, 3, "button", 20)(8, CateringMenuComponent_ng_template_12_div_0_button_8_Template, 4, 3, "button", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r9.group, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.can_edit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.can_edit);
  }
}
function CateringMenuComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringMenuComponent_ng_template_12_div_0_Template, 9, 4, "div", 14);
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    \u0275\u0275property("ngForOf", row_r10.options);
  }
}
var CateringMenuComponent = class _CateringMenuComponent {
  get filters() {
    return this._orders.filters;
  }
  get can_edit() {
    return this._catering.is_editable;
  }
  get categories() {
    return this._catering.categories;
  }
  get caterers() {
    return this._catering.caterer_list;
  }
  constructor(_catering, _orders) {
    this._catering = _catering;
    this._orders = _orders;
    this.show_children = {};
    this.menu = combineLatest([
      this._catering.menu,
      this._orders.order_filters
    ]).pipe(map(([menu, filters]) => menu.filter((item) => !filters?.caterer || filters.caterer === "<empty>" && !item.caterer || item.caterer === filters.caterer)));
    this.addOption = (item) => this._catering.addOption(item);
    this.editOption = (item, option) => this._catering.addOption(item, option);
    this.removeOption = (item, option) => this._catering.deleteOption(item, option);
    this.editItem = (item) => this._catering.addItem(item);
    this.removeItem = (item) => this._catering.deleteItem(item);
  }
  isEnabled(item) {
    return !item.hide_for_zones.includes(this._catering.zone);
  }
  setEnabled(item, state) {
    let list = item.hide_for_zones;
    if (!state)
      list = unique([...list, this._catering.zone]);
    else
      list = list.filter((_) => _ !== this._catering.zone);
    this._catering.updateItem(new CateringItem(__spreadProps(__spreadValues({}, item), { hide_for_zones: list })));
  }
  static {
    this.\u0275fac = function CateringMenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringMenuComponent)(\u0275\u0275directiveInject(CateringStateService), \u0275\u0275directiveInject(CateringOrdersService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringMenuComponent, selectors: [["catering-menu"]], standalone: false, decls: 14, vars: 38, consts: [["active_template", ""], ["price_template", ""], ["actions_template", ""], ["child_template", ""], ["menu", "matMenu"], [1, "w-full", "min-w-[32rem]", "block", "text-sm", 3, "data", "columns", "filter", "show_children", "child_template", "sortable", "empty_message"], ["matTooltipPosition", "right", 1, "mx-auto", 3, "ngModelChange", "matTooltip", "ngModel"], [1, "px-2", "py-1", "font-mono", "text-xs", "flex", "items-center", "mx-auto", "bg-secondary", "text-secondary-content", "rounded"], [1, "p-2", "flex", "items-center", "mx-auto", "space-x-2"], ["icon", "", "matRipple", "", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2", "pr-2"], [1, "text-error"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], ["class", "flex p-2 items-center border-b border-solid border-base-200 relative space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "p-2", "items-center", "border-b", "border-solid", "border-base-200", "relative", "space-x-2"], [1, "absolute", "inset-y-0", "left-0", "w-2", "bg-black", "opacity-10"], [1, "flex-1", "pl-4", "pr-2"], [1, "text"], [1, "text-xs", "opacity-60"], ["icon", "", "matRipple", "", 3, "matTooltip", "click", 4, "ngIf"], ["icon", "", "matRipple", "", "class", "!mr-1", 3, "matTooltip", "click", 4, "ngIf"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "!mr-1", 3, "click", "matTooltip"]], template: function CateringMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "simple-table", 5);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275template(6, CateringMenuComponent_ng_template_6_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, CateringMenuComponent_ng_template_8_Template, 4, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(10, CateringMenuComponent_ng_template_10_Template, 31, 18, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(12, CateringMenuComponent_ng_template_12_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const active_template_r12 = \u0275\u0275reference(7);
        const price_template_r13 = \u0275\u0275reference(9);
        const actions_template_r14 = \u0275\u0275reference(11);
        const child_template_r15 = \u0275\u0275reference(13);
        \u0275\u0275property("data", ctx.menu)("columns", \u0275\u0275pureFunction6(31, _c6, \u0275\u0275pureFunction1(17, _c03, active_template_r12), \u0275\u0275pureFunction1(19, _c13, \u0275\u0275pipeBind1(1, 7, "FORM.NAME")), \u0275\u0275pureFunction1(21, _c2, \u0275\u0275pipeBind1(2, 9, "COMMON.CATEGORY")), \u0275\u0275pureFunction2(23, _c3, \u0275\u0275pipeBind1(3, 11, "CATERING.CATERER"), !(ctx.filters == null ? null : ctx.filters.caterer) && ctx.caterers.length > 1), \u0275\u0275pureFunction2(26, _c4, \u0275\u0275pipeBind1(4, 13, "CATERING.ITEM_PRICE"), price_template_r13), \u0275\u0275pureFunction1(29, _c5, actions_template_r14)))("filter", ctx.filters == null ? null : ctx.filters.search)("show_children", ctx.show_children)("child_template", child_template_r15)("sortable", true)("empty_message", \u0275\u0275pipeBind1(5, 15, "CATERING.ITEM_LIST_EMPTY"));
      }
    }, dependencies: [NgForOf, NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatCheckbox, MatTooltip, NgControlStatus, NgModel, IconComponent, SimpleTableComponent, MatRipple, AsyncPipe, CurrencyPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 90%;\n  width: 100%;\n}\n/*# sourceMappingURL=catering-menu.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringMenuComponent, { className: "CateringMenuComponent", filePath: "libs/catering/src/lib/catering-menu.component.ts", lineNumber: 184 });
})();

// libs/catering/src/lib/catering-order-item.component.ts
var _c04 = ["catering-order-item", ""];
function CateringOrderItemComponent_ng_container_0_ng_container_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3.name, " ");
  }
}
function CateringOrderItemComponent_ng_container_0_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CateringOrderItemComponent_ng_container_0_ng_container_14_div_1_Template, 2, 1, "div", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r3);
  }
}
function CateringOrderItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "button", 4);
    \u0275\u0275listener("click", function CateringOrderItemComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggle());
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275template(14, CateringOrderItemComponent_ng_container_0_ng_container_14_Template, 2, 1, "ng-container", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-success", ctx_r1.active)("text-white", ctx_r1.active)("border-solid", ctx_r1.active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.active ? "done" : "local_pizza");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.item == null ? null : ctx_r1.item.amount) || (ctx_r1.item == null ? null : ctx_r1.item.quantity) || 1, "\xD7 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.item == null ? null : ctx_r1.item.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.item.option_list);
  }
}
var ACTIVE_ITEMS = /* @__PURE__ */ new Set();
var CateringOrderItemComponent = class _CateringOrderItemComponent {
  constructor() {
    this.active = false;
  }
  get item_key() {
    return `${this.order_id}|${this.item?.id}`;
  }
  ngOnInit() {
    this.active = ACTIVE_ITEMS.has(this.item_key);
  }
  toggle() {
    if (ACTIVE_ITEMS.has(this.item_key)) {
      ACTIVE_ITEMS.delete(this.item_key);
      this.active = false;
    } else {
      ACTIVE_ITEMS.add(this.item_key);
      this.active = true;
    }
  }
  static {
    this.\u0275fac = function CateringOrderItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringOrderItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderItemComponent, selectors: [["", "catering-order-item", ""]], inputs: { order_id: "order_id", item: "item" }, standalone: false, attrs: _c04, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "w-16", "text-right", "h-14", "relative"], ["arm", "", 1, "border-b-2", "border-l-2", "border-base-200", "w-4", "h-16", "absolute", "top-1/2", "left-1/2", "-translate-y-full", "-translate-x-px"], [1, "w-12", "mr-4"], ["action", "", "icon", "", "matRipple", "", 1, "border-2", "border-base-200", "border-dashed", "text-xl", "text-dark-fade", "p-2", 3, "click"], [1, "flex", "flex-1", "items-center", "border-b", "border-base-200", "border-solid", "py-4", "space-x-4"], [1, ""], [1, "p-1", "rounded-full", "bg-base-300", "w-10", "h-10", "flex", "items-center", "justify-center", "font-mono", "text-sm"], [1, "flex-1"], [1, "flex", "space-x-2", "mr-2", "px-4"], [4, "ngFor", "ngForOf"], ["class", "text-xs py-1 px-2 bg-warning text-warning-content rounded-2xl shadow", 4, "ngIf"], [1, "text-xs", "py-1", "px-2", "bg-warning", "text-warning-content", "rounded-2xl", "shadow"]], template: function CateringOrderItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CateringOrderItemComponent_ng_container_0_Template, 15, 10, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.item);
      }
    }, dependencies: [NgForOf, NgIf, IconComponent, MatRipple], styles: ["\n\n[_nghost-%COMP%]:last-child    > div[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=catering-order-item.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderItemComponent, { className: "CateringOrderItemComponent", filePath: "libs/catering/src/lib/catering-order-item.component.ts", lineNumber: 64 });
})();

// libs/catering/src/lib/catering.vars.ts
function statusList() {
  return [
    {
      id: "pending",
      name: i18n("CATERING.STATUS_PENDING"),
      icon: { class: "custom-pending" },
      colour: "#ccc"
    },
    {
      id: "accepted",
      name: i18n("CATERING.STATUS_ACCEPTED"),
      icon: { class: "custom-accepted" },
      colour: "#3996B6"
    },
    {
      id: "preparing",
      name: i18n("CATERING.STATUS_PREPARING"),
      icon: { class: "custom-preparing" },
      colour: "#E7536B"
    },
    {
      id: "ready",
      name: i18n("CATERING.STATUS_READY"),
      icon: { class: "custom-ready" },
      colour: "#FFD028"
    },
    {
      id: "delivered",
      name: i18n("CATERING.STATUS_DELIVERED"),
      icon: { class: "custom-delivered" },
      colour: "#75BB43"
    },
    {
      id: "cancelled",
      name: i18n("CATERING.STATUS_CANCELLED"),
      icon: { class: "custom-cancelled" },
      colour: "#747474"
    }
  ];
}
var CATERING_STATUSES = statusList();

// libs/catering/src/lib/catering-order-list.component.ts
var _c05 = (a0) => ({ key: "state", name: " ", size: "4rem", sortable: false, content: a0 });
var _c14 = (a0, a1) => ({ key: "caterer", name: a0, show: a1 });
var _c22 = (a0, a1) => ({ key: "deliver_at", name: a0, content: a1 });
var _c32 = (a0, a1) => ({ key: "event", name: a0, content: a1, sortable: false });
var _c42 = (a0) => ({ key: "charge_code", name: a0 });
var _c52 = (a0) => ({ key: "invoice_number", name: a0, empty: "No Invoice" });
var _c62 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "11rem" });
var _c7 = (a0) => ({ key: "actions", name: " ", size: "6.5rem", content: a0, sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
var _c9 = (a0) => ({ time: a0 });
function CateringOrderListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "app-icon");
    \u0275\u0275text(3, "room_service");
    \u0275\u0275elementEnd()()();
  }
}
function CateringOrderListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    const row_r2 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 8, "CATERING.ORDERS_DELIVER_TIME", \u0275\u0275pureFunction1(23, _c9, \u0275\u0275pipeBind2(3, 5, data_r1, ctx_r2.time_format))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate4(" ", \u0275\u0275pipeBind2(7, 11, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date, "MMM d"), ", ", \u0275\u0275pipeBind2(8, 14, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date, ctx_r2.time_format), " - ", \u0275\u0275pipeBind2(9, 17, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date_end, "MMM d"), ", ", \u0275\u0275pipeBind2(10, 20, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date_end, ctx_r2.time_format), " ");
  }
}
function CateringOrderListComponent_ng_template_17_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CATERING.ORDERS_LOCATION_EMPTY"), " ");
  }
}
function CateringOrderListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275template(2, CateringOrderListComponent_ng_template_17_span_2_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.display_name) || (data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.name) || "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.display_name) || (data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.name)));
  }
}
function CateringOrderListComponent_ng_template_19_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, " Unknown Host ");
    \u0275\u0275elementEnd();
  }
}
function CateringOrderListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275template(3, CateringOrderListComponent_ng_template_19_span_3_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (data_r5 == null ? null : data_r5.organiser == null ? null : data_r5.organiser.name) || (data_r5 == null ? null : data_r5.host) || "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((data_r5 == null ? null : data_r5.organiser == null ? null : data_r5.organiser.name) || (data_r5 == null ? null : data_r5.host)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (data_r5 == null ? null : data_r5.organiser == null ? null : data_r5.organiser.email) || (data_r5 == null ? null : data_r5.host), " ");
  }
}
function CateringOrderListComponent_ng_template_21_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_21_button_8_Template_button_click_0_listener() {
      const status_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const row_r8 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateStatus(row_r8, status_r7.id));
    });
    \u0275\u0275elementStart(1, "div", 24);
    \u0275\u0275element(2, "div", 25);
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const status_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", status_r7.colour);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(status_r7.name);
  }
}
function CateringOrderListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 19)(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-icon", 21);
    \u0275\u0275text(5, "arrow_drop_down");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "mat-menu", null, 7);
    \u0275\u0275template(8, CateringOrderListComponent_ng_template_21_button_8_Template, 5, 3, "button", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_13_0;
    const data_r9 = ctx.data;
    const menu_r10 = \u0275\u0275reference(7);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", (tmp_11_0 = ctx_r2.status(data_r9)) == null ? null : tmp_11_0.colour);
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_13_0 = ctx_r2.status(data_r9)) == null ? null : tmp_13_0.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.statuses);
  }
}
function CateringOrderListComponent_ng_template_23_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r12 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.NOTES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r12.notes, " ");
  }
}
function CateringOrderListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 28)(2, "app-icon");
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CateringOrderListComponent_ng_template_23_ng_template_4_Template, 6, 4, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_23_Template_button_click_6_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_children[row_r12.id] = !ctx_r2.show_children[row_r12.id]);
    });
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    const notes_template_r13 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("hover", true)("content", notes_template_r13)("disabled", !row_r12.notes);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.show_children[row_r12.id] ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function CateringOrderListComponent_ng_template_25_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 36);
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const row_r15 = \u0275\u0275nextContext(2).row;
    \u0275\u0275property("order_id", row_r15 == null ? null : row_r15.id)("item", item_r14);
  }
}
function CateringOrderListComponent_ng_template_25_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 34);
    \u0275\u0275template(1, CateringOrderListComponent_ng_template_25_ul_0_li_1_Template, 1, 2, "li", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", row_r15.items);
  }
}
function CateringOrderListComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringOrderListComponent_ng_template_25_ul_0_Template, 2, 1, "ul", 33);
  }
  if (rf & 2) {
    const row_r15 = ctx.row;
    \u0275\u0275property("ngIf", row_r15 == null ? null : row_r15.items.length);
  }
}
var CateringOrderListComponent = class _CateringOrderListComponent extends AsyncHandler {
  get filters() {
    return this._orders.filters;
  }
  get time_format() {
    return this._settings.time_format;
  }
  status(value) {
    return this.statuses.find((i) => i.id === value);
  }
  constructor(_orders, _settings) {
    super();
    this._orders = _orders;
    this._settings = _settings;
    this.order_list = this._orders.filtered;
    this.loading = this._orders.loading;
    this.caterers = this._orders.caterers;
    this.statuses = [];
    this.show_children = {};
    this.updateStatus = (order, s) => __async(this, null, function* () {
      yield this._orders.updateStatus(order, s);
      this.timeout("status-change", () => order.status = s);
    });
  }
  ngOnInit() {
    this.statuses = statusList();
    this.subscription("polling", this._orders.startPolling());
  }
  static {
    this.\u0275fac = function CateringOrderListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringOrderListComponent)(\u0275\u0275directiveInject(CateringOrdersService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderListComponent, selectors: [["catering-order-list"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 27, vars: 61, consts: [["state_template", ""], ["time_template", ""], ["location_template", ""], ["host_template", ""], ["status_template", ""], ["actions_template", ""], ["child_template", ""], ["menu", "matMenu"], ["notes_template", ""], [1, "flex", "flex-col", "h-full", "w-full", "overflow-auto"], ["mode", "indeterminate", 1, "sticky", "top-0", "left-0", "w-full"], [1, "min-w-[72rem]", "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "show_children", "child_template", "empty_message"], [1, "p-2"], [1, "rounded-full", "bg-base-200", "p-2", "text-2xl", "flex", "items-center", "justify-center"], [1, "p-4"], [1, "text-xs", "opacity-30"], [1, "px-4", "py-2"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], ["status", "", "matRipple", "", 1, "rounded-3xl", "text-base", "border-none", "h-10", "px-4", "flex", "items-center", "text-white", "w-36", 3, "matMenuTriggerFor"], [1, "flex", "text-center", "capitalize", "mx-2"], [1, "pl-2"], ["mat-menu-item", "", "class", "flex items-center", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "rounded-full", "h-4", "w-4", "mr-2"], [1, "mr-2", "w-20"], [1, "flex", "items-center", "space-x-2", "p-2", "mx-auto"], ["icon", "", "matRipple", "", "customTooltip", "", "xPosition", "end", "yPosition", "top", 3, "hover", "content", "disabled"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-2", "rounded-lg", "bg-base-100", "text-base-content", "max-w-[32rem]", "min-w-[8rem]", "shadow", "border", "border-base-200"], [1, "mb-2"], [1, "text-sm", "px-4", "py-2", "bg-base-200", "rounded"], ["class", "list-none p-0 m-0 w-full relative z-0", 4, "ngIf"], [1, "list-none", "p-0", "m-0", "w-full", "relative", "z-0"], ["catering-order-item", "", "class", "flex items-center", 3, "order_id", "item", 4, "ngFor", "ngForOf"], ["catering-order-item", "", 1, "flex", "items-center", 3, "order_id", "item"]], template: function CateringOrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 9);
        \u0275\u0275element(1, "mat-progress-bar", 10);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275element(3, "simple-table", 11);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275template(13, CateringOrderListComponent_ng_template_13_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, CateringOrderListComponent_ng_template_15_Template, 11, 25, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(17, CateringOrderListComponent_ng_template_17_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(19, CateringOrderListComponent_ng_template_19_Template, 6, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(21, CateringOrderListComponent_ng_template_21_Template, 9, 5, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(23, CateringOrderListComponent_ng_template_23_Template, 9, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(25, CateringOrderListComponent_ng_template_25_Template, 1, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_9_0;
        const state_template_r16 = \u0275\u0275reference(14);
        const time_template_r17 = \u0275\u0275reference(16);
        const location_template_r18 = \u0275\u0275reference(18);
        const host_template_r19 = \u0275\u0275reference(20);
        const status_template_r20 = \u0275\u0275reference(22);
        const actions_template_r21 = \u0275\u0275reference(24);
        const child_template_r22 = \u0275\u0275reference(26);
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(2, 8, ctx.loading));
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.order_list)("columns", \u0275\u0275pureFunctionV(51, _c8, [\u0275\u0275pureFunction1(28, _c05, state_template_r16), \u0275\u0275pureFunction2(30, _c14, \u0275\u0275pipeBind1(4, 10, "CATERING.CATERER"), !(ctx.filters == null ? null : ctx.filters.caterer) && ((tmp_9_0 = \u0275\u0275pipeBind1(5, 12, ctx.caterers)) == null ? null : tmp_9_0.length) > 1), \u0275\u0275pureFunction2(33, _c22, \u0275\u0275pipeBind1(6, 14, "COMMON.TIME"), time_template_r17), \u0275\u0275pureFunction2(36, _c32, \u0275\u0275pipeBind1(7, 16, "COMMON.LOCATION"), location_template_r18), \u0275\u0275pureFunction2(39, _c32, \u0275\u0275pipeBind1(8, 18, "FORM.HOST"), host_template_r19), \u0275\u0275pureFunction1(42, _c42, \u0275\u0275pipeBind1(9, 20, "CATERING.CHARGE_CODE")), \u0275\u0275pureFunction1(44, _c52, \u0275\u0275pipeBind1(10, 22, "CATERING.INVOICE_NUMBER")), \u0275\u0275pureFunction2(46, _c62, \u0275\u0275pipeBind1(11, 24, "COMMON.STATUS"), status_template_r20), \u0275\u0275pureFunction1(49, _c7, actions_template_r21)]))("sortable", true)("show_children", ctx.show_children)("child_template", child_template_r22)("empty_message", \u0275\u0275pipeBind1(12, 26, "CATERING.ORDERS_EMPTY"));
      }
    }, dependencies: [NgForOf, NgIf, MatMenu, MatMenuItem, MatMenuTrigger, IconComponent, CustomTooltipComponent, SimpleTableComponent, MatRipple, MatProgressBar, CateringOrderItemComponent, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=catering-order-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderListComponent, { className: "CateringOrderListComponent", filePath: "libs/catering/src/lib/catering-order-list.component.ts", lineNumber: 235 });
})();

// libs/catering/src/lib/catering-order-modal/catering-order-state.service.ts
var CateringOrderStateService = class _CateringOrderStateService {
  get currency_code() {
    return this._org.currency_code;
  }
  constructor(_org, _settings) {
    this._org = _org;
    this._settings = _settings;
    this._options = new BehaviorSubject({});
    this._filters = new BehaviorSubject({
      search: "",
      tags: [],
      categories: [],
      caterer: ""
    });
    this._loading = new BehaviorSubject("");
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.settings = this._org.active_building.pipe(filter((_) => !!_), switchMap((_) => showMetadata(_.id, "catering-settings").pipe(catchError((_2) => of({})))), map((_) => _.details), tap((_) => this._settings.post("require_catering_notes", !!_?.require_notes)), shareReplay(1));
    this.charge_codes = this.settings.pipe(map((_) => _.charge_codes || []));
    this.availability = this.settings.pipe(map((_) => _.disabled_rooms || []));
    this.available_menu = combineLatest([
      this._options,
      this._org.active_building
    ]).pipe(filter(([_, bld]) => !!bld), switchMap(([{ zone }, bld]) => {
      this._loading.next("[MENU]");
      return showMetadata(zone || bld.id, "catering").pipe(map((d) => (d.details instanceof Array ? d.details : []).map((_) => new CateringItem(_))), catchError((_) => []));
    }), tap((items) => {
      this._loading.next(this._loading.getValue().replace("[MENU]", ""));
      if (this._settings.get("app.catering_provider")) {
        this.setFilters({
          caterer: this._settings.get("app.catering_provider")
        });
      } else {
        const caterer_list = unique(items.map((i) => i.caterer).filter((_) => !!_));
        if (caterer_list.length <= 1)
          return;
        this.setFilters({ caterer: caterer_list[0] || "" });
      }
    }), shareReplay(1));
    this.categories = this.available_menu.pipe(map((_) => unique(_.map((i) => i.category))));
    this.caterers = this.available_menu.pipe(map((_) => {
      return this._settings.get("app.catering_provider") ? [] : unique(_.map((i) => i.caterer));
    }));
    this.filtered_menu = combineLatest([
      this._filters,
      this.available_menu
    ]).pipe(debounceTime(300), switchMap((_0) => __async(this, [_0], function* ([{ search, tags, categories, zone_id, date, duration, resources, caterer }, l]) {
      const rules = yield getCateringRulesForZone(zone_id).toPromise();
      search = search.toLowerCase();
      let list = search ? l.filter((_) => _.name.toLowerCase().includes(search)) : l;
      list = tags.length ? list.filter((_) => tags.every((t) => _.tags.includes(t))) : list;
      list = categories.length ? list.filter((_) => categories.includes(_.category)) : list;
      list = caterer ? list.filter((_) => caterer === "<empty>" && !_.caterer || _.caterer === caterer) : list;
      list = list.filter((_) => cateringItemAvailable(_, rules, {
        date,
        duration,
        resources
      }));
      return list;
    })), shareReplay(1));
  }
  setOptions(opts) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), opts));
  }
  setFilters(opts) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), opts));
  }
  getFilters() {
    return __spreadValues({}, this._filters.getValue());
  }
  static {
    this.\u0275fac = function CateringOrderStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringOrderStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringOrderStateService, factory: _CateringOrderStateService.\u0275fac, providedIn: "root" });
  }
};

// libs/catering/src/lib/catering-order-modal/catering-item-list-item.component.ts
function CateringItemListItemComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.item.quantity || "1", " ");
  }
}
function CateringItemListItemComponent_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r1.item.images[0]);
  }
}
function CateringItemListItemComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
  }
}
function CateringItemListItemComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r1.item.unit_price / 100, ctx_r1.code), " ");
  }
}
function CateringItemListItemComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.options, " ");
  }
}
function CateringItemListItemComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, " GF ");
    \u0275\u0275elementEnd();
  }
}
function CateringItemListItemComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, " VG ");
    \u0275\u0275elementEnd();
  }
}
function CateringItemListItemComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, " V ");
    \u0275\u0275elementEnd();
  }
}
function CateringItemListItemComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, " D ");
    \u0275\u0275elementEnd();
  }
}
function CateringItemListItemComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, " N ");
    \u0275\u0275elementEnd();
  }
}
var CateringItemListItemComponent = class _CateringItemListItemComponent {
  constructor() {
    this.active = false;
    this.selected = false;
    this.favourite = false;
    this.code = "USD";
    this.toggleFav = new EventEmitter();
    this.select = new EventEmitter();
  }
  get options() {
    return this.item.option_list?.map((_) => _.name).join(", ");
  }
  static {
    this.\u0275fac = function CateringItemListItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringItemListItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemListItemComponent, selectors: [["catering-item-list-item"]], inputs: { item: "item", active: "active", selected: "selected", favourite: "favourite", code: "code" }, outputs: { toggleFav: "toggleFav", select: "select" }, standalone: false, decls: 24, vars: 17, consts: [["placeholder", ""], ["item", "", "matRipple", "", 1, "relative", "p-2", "rounded-lg", "w-full", "shadow", "border", "bg-base-100", "border-base-200", "sm:w-[20rem]"], ["name", "select-catering-item", 1, "w-full", "h-full", "flex", "items-center", "z-0", 3, "click"], [1, "relative", "w-16", "h-16", "rounded-xl", "bg-neutral", "mr-4", "overflow-hidden", "border", "border-base-200", "flex", "items-center", "justify-center"], ["class", "absolute top-1 left-1 border border-white bg-neutral rounded-full h-6 w-6 flex items-center justify-center text-white text-xs", 4, "ngIf"], ["auth", "", "class", "object-cover min-h-full min-w-full", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "text-left", "flex-1"], [1, "font-medium", "flex", "flex-col", "pr-10"], [1, "opacity-60", "text-xs"], [1, "flex", "items-center", "text-sm", "space-x-1"], ["class", "flex-1 w-px bg-base-100 rounded", 4, "ngIf"], ["class", "text-xs px-2 py-1 rounded-2xl shadow border border-base-200", 4, "ngIf"], ["class", "text-xs h-5 w-7 rounded-xl shadow bg-success flex items-center justify-center", 4, "ngIf"], ["class", "text-xs h-5 w-7 rounded-xl shadow bg-info flex items-center justify-center", 4, "ngIf"], ["class", "text-xs h-5 w-7 rounded-xl shadow bg-warning flex items-center justify-center", 4, "ngIf"], ["class", "text-xs h-5 w-7 rounded-xl shadow bg-orange-600 flex items-center justify-center", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [1, "absolute", "top-1", "left-1", "border", "border-white", "bg-neutral", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center", "text-white", "text-xs"], ["auth", "", 1, "object-cover", "min-h-full", "min-w-full", 3, "source"], ["src", "assets/icons/catering-placeholder.svg", 1, "m-auto"], [1, "flex-1", "w-px", "bg-base-100", "rounded"], [1, "text-xs", "px-2", "py-1", "rounded-2xl", "shadow", "border", "border-base-200"], [1, "text-xs", "h-5", "w-7", "rounded-xl", "shadow", "bg-success", "flex", "items-center", "justify-center"], [1, "text-xs", "h-5", "w-7", "rounded-xl", "shadow", "bg-info", "flex", "items-center", "justify-center"], [1, "text-xs", "h-5", "w-7", "rounded-xl", "shadow", "bg-warning", "flex", "items-center", "justify-center"], [1, "text-xs", "h-5", "w-7", "rounded-xl", "shadow", "bg-orange-600", "flex", "items-center", "justify-center"]], template: function CateringItemListItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "li", 1)(1, "button", 2);
        \u0275\u0275listener("click", function CateringItemListItemComponent_Template_button_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.select.emit());
        });
        \u0275\u0275elementStart(2, "div", 3);
        \u0275\u0275template(3, CateringItemListItemComponent_div_3_Template, 2, 1, "div", 4)(4, CateringItemListItemComponent_img_4_Template, 1, 1, "img", 5)(5, CateringItemListItemComponent_ng_template_5_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275template(14, CateringItemListItemComponent_p_14_Template, 3, 4, "p", 10)(15, CateringItemListItemComponent_div_15_Template, 2, 1, "div", 11)(16, CateringItemListItemComponent_div_16_Template, 2, 0, "div", 12)(17, CateringItemListItemComponent_div_17_Template, 2, 0, "div", 13)(18, CateringItemListItemComponent_div_18_Template, 2, 0, "div", 13)(19, CateringItemListItemComponent_div_19_Template, 2, 0, "div", 14)(20, CateringItemListItemComponent_div_20_Template, 2, 0, "div", 15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "button", 16);
        \u0275\u0275listener("click", function CateringItemListItemComponent_Template_button_click_21_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleFav.emit());
        });
        \u0275\u0275elementStart(22, "app-icon");
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const placeholder_r3 = \u0275\u0275reference(6);
        \u0275\u0275classProp("!border-base-200", ctx.active);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.item.quantity && ctx.selected);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.item.images == null ? null : ctx.item.images.length)("ngIfElse", placeholder_r3);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.item.name || "Item");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.item.category, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.unit_price);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.item.option_list == null ? null : ctx.item.option_list.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.item.tags == null ? null : ctx.item.tags.includes("Gluten Free"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.item.tags == null ? null : ctx.item.tags.includes("Vegan"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.item.tags == null ? null : ctx.item.tags.includes("Vegetarian"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.item.tags == null ? null : ctx.item.tags.includes("Contains Dairy"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.item.tags == null ? null : ctx.item.tags.includes("Contains Nuts"));
        \u0275\u0275advance();
        \u0275\u0275classProp("text-info", ctx.favourite);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.favourite ? "favorite" : "favorite_border");
      }
    }, dependencies: [NgIf, IconComponent, AuthenticatedImageDirective, MatRipple, CurrencyPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemListItemComponent, { className: "CateringItemListItemComponent", filePath: "libs/catering/src/lib/catering-order-modal/catering-item-list-item.component.ts", lineNumber: 110 });
})();

// libs/catering/src/lib/catering-order-modal/catering-item-list.component.ts
var _c06 = (a0) => ({ count: a0 });
function CateringItemListComponent_ng_container_1_catering_item_list_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "catering-item-list-item", 9);
    \u0275\u0275listener("toggleFav", function CateringItemListComponent_ng_container_1_catering_item_list_item_9_Template_catering_item_list_item_toggleFav_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(item_r2.id));
    })("select", function CateringItemListComponent_ng_container_1_catering_item_list_item_9_Template_catering_item_list_item_select_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectItem(item_r2, true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", item_r2)("active", ctx_r2.active === item_r2.custom_id)("selected", true)("favourite", ctx_r2.isFavourite(item_r2.id));
  }
}
function CateringItemListComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h3", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ul", 7);
    \u0275\u0275template(9, CateringItemListComponent_ng_container_1_catering_item_list_item_9_Template, 1, 4, "catering-item-list-item", 8);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "CATERING.ORDER_SELECTED_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 7, "CATERING.ORDER_SELECTED_COUNT", \u0275\u0275pureFunction1(12, _c06, ((tmp_4_0 = \u0275\u0275pipeBind1(6, 5, ctx_r2.list)) == null ? null : tmp_4_0.length) || 0)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(10, 10, ctx_r2.list));
  }
}
function CateringItemListComponent_ng_container_10_ul_1_catering_item_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "catering-item-list-item", 12);
    \u0275\u0275listener("toggleFav", function CateringItemListComponent_ng_container_10_ul_1_catering_item_list_item_1_Template_catering_item_list_item_toggleFav_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav(item_r5.id));
    })("select", function CateringItemListComponent_ng_container_10_ul_1_catering_item_list_item_1_Template_catering_item_list_item_select_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectItem(item_r5, true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("item", item_r5)("active", ctx_r2.active === item_r5.custom_id)("selected", ctx_r2.selected.includes(item_r5.custom_id))("favourite", ctx_r2.isFavourite(item_r5.id))("code", ctx_r2.code);
  }
}
function CateringItemListComponent_ng_container_10_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 7);
    \u0275\u0275template(1, CateringItemListComponent_ng_container_10_ul_1_catering_item_list_item_1_Template, 1, 5, "catering-item-list-item", 11);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r2.item_list));
  }
}
function CateringItemListComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CateringItemListComponent_ng_container_10_ul_1_Template, 3, 3, "ul", 10);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    const empty_state_r6 = \u0275\u0275reference(13);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(2, 2, ctx_r2.item_list)) == null ? null : tmp_3_0.length)("ngIfElse", empty_state_r6);
  }
}
function CateringItemListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CATERING.ORDER_ITEMS_EMPTY"), " ");
  }
}
function CateringItemListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "mat-spinner", 16);
    \u0275\u0275elementStart(2, "p", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "CATERING.ORDER_ITEMS_LOADING"), " ");
  }
}
var CateringItemListComponent = class _CateringItemListComponent {
  get code() {
    return this._state.currency_code;
  }
  constructor(_state) {
    this._state = _state;
    this.active = "";
    this.selected = "";
    this.selected_items = [];
    this.favorites = [];
    this.toggleFav = new EventEmitter();
    this.onSelect = new EventEmitter();
    this.list = new BehaviorSubject([]);
    this.loading = this._state.loading;
    this.item_list = this._state.filtered_menu;
  }
  ngOnChanges(changes) {
    if (changes.selected_items) {
      this.list.next(this.selected_items || []);
    }
  }
  isFavourite(item_id) {
    return this.favorites?.includes(item_id);
  }
  selectItem(item, clear_state = false) {
    this.onSelect.emit(item);
    if (clear_state) {
      item.options?.forEach((_) => delete _.active);
    }
  }
  static {
    this.\u0275fac = function CateringItemListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringItemListComponent)(\u0275\u0275directiveInject(CateringOrderStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemListComponent, selectors: [["catering-item-list"]], inputs: { active: "active", selected: "selected", selected_items: "selected_items", favorites: "favorites" }, outputs: { toggleFav: "toggleFav", onSelect: "onSelect" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 16, vars: 18, consts: [["empty_state", ""], ["load_state", ""], [1, "w-full", "h-full", "overflow-auto", "py-2"], [4, "ngIf"], [1, "font-bold", "px-2"], ["count", "", 1, "text-sm", "opacity-60", "mb-2", "px-2"], [4, "ngIf", "ngIfElse"], [1, "list-style-none", "space-y-2", "p-2"], ["class", "block", 3, "item", "active", "selected", "favourite", "toggleFav", "select", 4, "ngFor", "ngForOf"], [1, "block", 3, "toggleFav", "select", "item", "active", "selected", "favourite"], ["class", "list-style-none space-y-2 p-2", 4, "ngIf", "ngIfElse"], ["class", "block", 3, "item", "active", "selected", "favourite", "code", "toggleFav", "select", 4, "ngFor", "ngForOf"], [1, "block", 3, "toggleFav", "select", "item", "active", "selected", "favourite", "code"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"], ["loading", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"], [1, "opacity-30"]], template: function CateringItemListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275template(1, CateringItemListComponent_ng_container_1_Template, 11, 14, "ng-container", 3);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275elementStart(3, "h3", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, CateringItemListComponent_ng_container_10_Template, 3, 4, "ng-container", 6);
        \u0275\u0275pipe(11, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, CateringItemListComponent_ng_template_12_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, CateringItemListComponent_ng_template_14_Template, 5, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        const load_state_r7 = \u0275\u0275reference(15);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_2_0 = \u0275\u0275pipeBind1(2, 5, ctx.list)) == null ? null : tmp_2_0.length);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, "COMMON.RESULTS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 11, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(16, _c06, ((tmp_4_0 = \u0275\u0275pipeBind1(8, 9, ctx.item_list)) == null ? null : tmp_4_0.length) || 0)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(11, 14, ctx.loading))("ngIfElse", load_state_r7);
      }
    }, dependencies: [NgForOf, NgIf, MatProgressSpinner, CateringItemListItemComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemListComponent, { className: "CateringItemListComponent", filePath: "libs/catering/src/lib/catering-order-modal/catering-item-list.component.ts", lineNumber: 92 });
})();

// libs/catering/src/lib/catering-order-modal/catering-item-details.component.ts
function CateringItemDetailsComponent_ng_container_0_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r1.item.unit_price / 100, ctx_r1.code), " ");
  }
}
function CateringItemDetailsComponent_ng_container_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r3, " ");
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_mat_radio_button_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r6.unit_price / 100, ctx_r1.code), " ");
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_mat_radio_button_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 29)(1, "div", 30)(2, "div", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_mat_radio_button_6_div_4_Template, 3, 4, "div", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    \u0275\u0275property("value", opt_r6.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r6.unit_price);
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-radio-group", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_Template_mat_radio_group_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const group_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.group_state[group_r5.name], $event) || (ctx_r1.group_state[group_r5.name] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_Template_mat_radio_group_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const group_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateGroupOption(group_r5, $event));
    });
    \u0275\u0275elementStart(2, "mat-radio-button", 26)(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_mat_radio_button_6_Template, 5, 3, "mat-radio-button", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.group_state[group_r5.name]);
    \u0275\u0275property("disabled", ctx_r1.item == null ? null : ctx_r1.item.in_order);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "COMMON.NONE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", group_r5 == null ? null : group_r5.options);
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r8.unit_price / 100, ctx_r1.code), " ");
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 35);
    \u0275\u0275twoWayListener("ngModelChange", function CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.option_state[opt_r8.id], $event) || (ctx_r1.option_state[opt_r8.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateCheckedState(opt_r8.id, $event));
    });
    \u0275\u0275elementStart(1, "div", 19)(2, "div", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_div_4_Template, 3, 4, "div", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.option_state[opt_r8.id]);
    \u0275\u0275property("disabled", ctx_r1.item == null ? null : ctx_r1.item.in_order);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r8.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r8.unit_price);
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_Template, 5, 4, "mat-checkbox", 34);
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngForOf", group_r5 == null ? null : group_r5.options);
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275template(4, CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_Template, 7, 6, "ng-container", 2)(5, CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const multi_options_r9 = \u0275\u0275reference(6);
    \u0275\u0275attribute("group", group_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", group_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !group_r5.multiple)("ngIfElse", multi_options_r9);
  }
}
function CateringItemDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 3);
    \u0275\u0275element(2, "image-carousel", 4);
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function CateringItemDetailsComponent_ng_container_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 6);
    \u0275\u0275listener("click", function CateringItemDetailsComponent_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7)(10, "section", 8)(11, "div")(12, "h2", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CateringItemDetailsComponent_ng_container_0_p_14_Template, 3, 4, "p", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a-counter", 11);
    \u0275\u0275twoWayListener("ngModelChange", function CateringItemDetailsComponent_ng_container_0_Template_a_counter_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.item.quantity, $event) || (ctx_r1.item.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CateringItemDetailsComponent_ng_container_0_Template_a_counter_ngModelChange_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active ? ctx_r1.activeChange.emit(ctx_r1.active) : "");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "section", 12);
    \u0275\u0275template(17, CateringItemDetailsComponent_ng_container_0_div_17_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "hr");
    \u0275\u0275elementStart(19, "section", 14)(20, "div", 15);
    \u0275\u0275template(21, CateringItemDetailsComponent_ng_container_0_div_21_Template, 7, 4, "div", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 17)(23, "button", 18);
    \u0275\u0275listener("click", function CateringItemDetailsComponent_ng_container_0_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.active = !ctx_r1.active;
      return \u0275\u0275resetView(ctx_r1.activeChange.emit(ctx_r1.active));
    });
    \u0275\u0275elementStart(24, "div", 19)(25, "app-icon", 20);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("images", ctx_r1.item.images);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-white", !ctx_r1.fav)("text-info", ctx_r1.fav);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fav ? "favorite" : "favorite_border");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.item.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.item.unit_price);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.item.quantity);
    \u0275\u0275property("min", 1)("max", ctx_r1.item.count || 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.item.tags);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.groups);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx_r1.active);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.active ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 17, ctx_r1.active ? "CATERING.ORDER_ITEM_REMOVE" : "CATERING.ORDER_ITEM_ADD"), " ");
  }
}
function CateringItemDetailsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "p", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CATERING.ORDER_ITEM_SELECT"), " ");
  }
}
var CateringItemDetailsComponent = class _CateringItemDetailsComponent {
  constructor() {
    this.active = false;
    this.fav = false;
    this.code = "USD";
    this.toggleFav = new EventEmitter();
    this.activeChange = new EventEmitter();
    this.close = new EventEmitter();
    this.option_state = {};
    this.group_state = {};
  }
  ngOnChanges(changes) {
    if (changes.item && this.item) {
      this._update();
    }
  }
  updateGroupOption(group, id) {
    if (!group)
      return;
    this.group_state[group.name] = id;
    for (const option of group.options) {
      option.active = option.id === id;
    }
  }
  updateCheckedState(id, state) {
    const option = this.item?.options.find((_) => _.id === id);
    if (option)
      option.active = state;
  }
  _update() {
    if (!this.item)
      return;
    if (!this.item.quantity) {
      this.item.quantity = 1;
    }
    this.option_state = {};
    this.group_state = {};
    const groups = unique(this.item.options.map((i) => i.group || "Other"));
    const group_list = [];
    for (const group of groups) {
      const options = this.item.options.filter((i) => i.group === group);
      group_list.push({
        name: group,
        multiple: !!options.find((i) => i.multiple),
        options
      });
    }
    this.groups = group_list;
    if (this.item.option_list) {
      for (const opt of this.item.option_list) {
        const option = this.item.options.find((_) => _.id === opt.id);
        if (option) {
          option.active = true;
          this.option_state[opt.id] = true;
          this.updateGroupOption(this.groups.find((g) => g.name === option.group), option.id);
        }
      }
    }
  }
  static {
    this.\u0275fac = function CateringItemDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringItemDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemDetailsComponent, selectors: [["catering-item-details"]], inputs: { item: "item", active: "active", fav: "fav", code: "code" }, outputs: { toggleFav: "toggleFav", activeChange: "activeChange", close: "close" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 2, consts: [["empty_state", ""], ["multi_options", ""], [4, "ngIf", "ngIfElse"], ["image", "", 1, "relative", "w-full", "h-64", "sm:h-40", "bg-base-200"], [1, "absolute", "inset-0", 3, "images"], ["icon", "", "matRipple", "", "name", "close-catering-item-details", 1, "absolute", "top-2", "left-2", "bg-neutral", "sm:hidden", "text-white", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite-details", 1, "absolute", "top-2", "right-2", 3, "click"], [1, "p-2", "space-y-2", "flex-1", "h-1/2", "overflow-auto"], ["actions", "", 1, "z-0", "flex", "items-center", "justify-between"], [1, "text-xl", "font-medium", "mb-2", "mt-4"], [4, "ngIf"], [3, "ngModelChange", "ngModel", "min", "max"], [1, "flex", "items-center", "flex-wrap"], ["class", "px-2 py-1 rounded-2xl bg-base-200 text-sm capitalize m-1", 4, "ngFor", "ngForOf"], ["details", "", 1, "space-y-2"], [1, "flex", "flex-col", "flex-wrap"], ["class", "min-w-1/2 flex-1", 4, "ngFor", "ngForOf"], [1, "px-2", "pt-2", "pb-[5.5rem]", "border-t", "border-base-200", "shadow", "sm:hidden"], ["btn", "", "matRipple", "", "name", "select-catering-item-details", 1, "w-full", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "text-2xl"], [1, "px-2", "py-1", "rounded-2xl", "bg-base-200", "text-sm", "capitalize", "m-1"], [1, "min-w-1/2", "flex-1"], [1, "font-medium", "p-2", "capitalize"], [1, "flex", "flex-col", "pl-4"], ["aria-label", "Select an option", 1, "flex", "flex-col", 3, "ngModelChange", "ngModel", "disabled"], ["value", "", 1, "m-0"], [1, "font-medium", "p-2", "opacity-60"], ["class", "m-0", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-0", 3, "value"], [1, "flex", "items-center", "justify-center", "max-w-[calc(100vw-4rem)]", "sm:max-w-[15rem]"], [1, "font-medium", "p-2", "flex-1", "w-1/2", "whitespace-normal", "capitalize"], ["class", "opacity-60 text-xs", 4, "ngIf"], [1, "opacity-60", "text-xs"], [3, "ngModel", "disabled", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel", "disabled"], [1, "font-medium", "p-2", "flex-1", "w-1/2"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"]], template: function CateringItemDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CateringItemDetailsComponent_ng_container_0_Template, 30, 19, "ng-container", 2)(1, CateringItemDetailsComponent_ng_template_1_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const empty_state_r10 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.item)("ngIfElse", empty_state_r10);
      }
    }, dependencies: [NgForOf, NgIf, MatCheckbox, MatRadioGroup, MatRadioButton, NgControlStatus, NgModel, IconComponent, ImageCarouselComponent, MatRipple, CounterComponent, CurrencyPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 20rem;\n  height: 100%;\n  min-height: 65vh;\n}\n/*# sourceMappingURL=catering-item-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemDetailsComponent, { className: "CateringItemDetailsComponent", filePath: "libs/catering/src/lib/catering-order-modal/catering-item-details.component.ts", lineNumber: 221 });
})();

// libs/catering/src/lib/catering-order-modal/catering-item-filters.component.ts
function CateringItemFiltersComponent_div_7_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caterer_r3 = ctx.$implicit;
    \u0275\u0275property("value", caterer_r3 || "<empty>");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", caterer_r3 || "[No caterer]", " ");
  }
}
function CateringItemFiltersComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 1)(5, "mat-select", 11);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_div_7_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilters({ caterer: $event }));
    });
    \u0275\u0275template(8, CateringItemFiltersComponent_div_7_mat_option_8_Template, 2, 2, "mat-option", 12);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "CATERING.CATERER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ((tmp_2_0 = \u0275\u0275pipeBind1(6, 5, ctx_r1.filters)) == null ? null : tmp_2_0.caterer) || \u0275\u0275pipeBind1(7, 7, ctx_r1.caterers)[0]);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(9, 9, ctx_r1.caterers));
  }
}
function CateringItemFiltersComponent_h3_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.FILTERS"), " ");
  }
}
function CateringItemFiltersComponent_div_10_ng_container_4_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    \u0275\u0275property("value", day_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, day_r6.value, "mediumDate"), " ");
  }
}
function CateringItemFiltersComponent_div_10_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 19)(5, "mat-select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function CateringItemFiltersComponent_div_10_ng_container_4_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.offset_day, $event) || (ctx_r1.offset_day = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_div_10_ng_container_4_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.offset_dayChange.next($event));
    });
    \u0275\u0275template(6, CateringItemFiltersComponent_div_10_ng_container_4_mat_option_6_Template, 3, 5, "mat-option", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "CATERING.ORDERS_DELIVER_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.offset_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.day_options);
  }
}
function CateringItemFiltersComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "mat-checkbox", 16);
    \u0275\u0275twoWayListener("ngModelChange", function CateringItemFiltersComponent_div_10_Template_mat_checkbox_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.at_time, $event) || (ctx_r1.at_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_div_10_Template_mat_checkbox_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.at_timeChange.next($event));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CateringItemFiltersComponent_div_10_ng_container_4_Template, 7, 5, "ng-container", 17);
    \u0275\u0275elementStart(5, "label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a-duration-field", 18);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275twoWayListener("ngModelChange", function CateringItemFiltersComponent_div_10_Template_a_duration_field_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.offset, $event) || (ctx_r1.offset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_div_10_Template_a_duration_field_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.offsetChange.next($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.at_time);
    \u0275\u0275property("matTooltip", ctx_r1.exact_tooltip);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 11, "CATERING.ORDERS_DELIVER_EXACT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.day_options.length > 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 13, "CATERING.ORDERS_DELIVER_AFTER"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.offset);
    \u0275\u0275property("time", ctx_r1.offset_day > 0 ? ctx_r1.start_of_date : (tmp_7_0 = \u0275\u0275pipeBind1(9, 15, ctx_r1.filters)) == null ? null : tmp_7_0.date)("step", ctx_r1.step_interval)("min", ctx_r1.min_offset)("max", ctx_r1.max_offset)("use_24hr", ctx_r1.use_24hr);
  }
}
function CateringItemFiltersComponent_h3_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CATEGORIES"), " ");
  }
}
function CateringItemFiltersComponent_mat_checkbox_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 11);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_mat_checkbox_13_Template_mat_checkbox_ngModelChange_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCategory(item_r8));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(1, 3, ctx_r1.filters)) == null ? null : tmp_2_0.categories == null ? null : tmp_2_0.categories.includes(item_r8));
    \u0275\u0275attribute("name", item_r8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r8, " ");
  }
}
var ICONS = {
  coffee: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_605_8664)">
    <path d="M38.388 21.2474C37.8243 20.7996 37.1598 20.4847 36.4474 20.3278C35.735 20.1708 34.9944 20.1762 34.2846 20.3434C34.2476 19.7774 34.2049 19.2037 34.1483 18.6155C34.1243 18.3664 34.0043 18.1349 33.8119 17.9668C33.6195 17.7986 33.3687 17.706 33.1088 17.707H1.26151C1.00166 17.706 0.750839 17.7986 0.558442 17.9668C0.366045 18.1349 0.246035 18.3664 0.222073 18.6155C-0.42931 25.3581 0.106585 30.5307 4.80024 35.4799C8.88062 39.7819 15.7271 39.9998 17.0599 39.9998H17.3047C18.6375 39.9998 25.4863 39.7774 29.5643 35.4799C30.5412 34.4597 31.3937 33.3353 32.1052 32.1286C32.2481 32.1199 32.3875 32.0819 32.514 32.0174C34.0959 31.2139 35.6169 30.3039 37.0656 29.2943C38.3815 28.4227 39.3664 27.1618 39.871 25.7028C40.0702 24.9006 40.0372 24.0612 39.7758 23.2757C39.5144 22.4902 39.0344 21.7887 38.388 21.2474ZM28.0329 34.13C24.4699 37.8905 18.0323 37.9984 17.3093 37.9984H17.0645C16.3426 37.9984 9.90389 37.8872 6.34092 34.13C2.37257 29.9436 1.75351 25.466 2.21549 19.7085H32.1583C32.6214 25.4649 32.0024 29.9425 28.0329 34.13ZM37.8498 25.2091C37.4485 26.2369 36.7212 27.117 35.771 27.7243C35.024 28.2636 34.2434 28.7582 33.4334 29.2053C34.1268 27.0036 34.4428 24.7078 34.3689 22.4082C34.3839 22.4027 34.3989 22.4082 34.4139 22.3982C34.8447 22.2182 35.3192 22.1579 35.7837 22.2242C36.2482 22.2905 36.6841 22.4808 37.0421 22.7733C37.4001 23.0659 37.6658 23.4491 37.8092 23.8796C37.9525 24.3101 37.9678 24.7707 37.8533 25.2091H37.8498Z" fill="currentcolor"/>
    <path d="M9.43243 8.16274C9.85735 8.48322 10.2069 8.88673 10.4582 9.34669C10.7094 9.80666 10.8565 10.3126 10.89 10.8313C10.7939 11.9569 10.2754 13.0103 9.43128 13.7946C9.32937 13.883 9.24664 13.9899 9.18786 14.1092C9.12907 14.2286 9.0954 14.3579 9.08878 14.4898C9.08216 14.6217 9.10275 14.7536 9.14931 14.8778C9.19588 15.002 9.26753 15.1161 9.36012 15.2136C9.45271 15.311 9.56442 15.3898 9.6888 15.4455C9.81319 15.5012 9.9478 15.5326 10.0849 15.538C10.2219 15.5433 10.3587 15.5225 10.4874 15.4767C10.6161 15.4309 10.734 15.3611 10.8345 15.2712C12.1048 14.1093 12.8679 12.5254 12.9688 10.8413C12.9432 10.042 12.7392 9.25727 12.3708 8.5405C12.0023 7.82373 11.478 7.19166 10.8334 6.68722C10.4067 6.38353 10.055 5.99283 9.80341 5.54303C9.55184 5.09323 9.40662 4.59547 9.37815 4.08534C9.51392 3.18283 10.0073 2.36595 10.7548 1.80591C10.9718 1.64618 11.1147 1.41065 11.1528 1.15024C11.1908 0.889843 11.1208 0.625512 10.958 0.414392C10.7951 0.203272 10.5525 0.062327 10.2826 0.0220596C10.0127 -0.0182078 9.73715 0.0454338 9.51559 0.199206C8.90219 0.651996 8.39004 1.21933 8.0098 1.86721C7.62956 2.5151 7.38907 3.2302 7.30273 3.9697C7.30292 4.77855 7.49485 5.5767 7.86392 6.30333C8.23298 7.02996 8.76944 7.66592 9.43243 8.16274Z" fill="currentcolor"/>
    <path d="M23.0984 8.16274C23.5234 8.48322 23.8729 8.88673 24.1242 9.34669C24.3754 9.80666 24.5225 10.3126 24.556 10.8313C24.4599 11.9569 23.9414 13.0103 23.0973 13.7946C22.9954 13.883 22.9126 13.9899 22.8539 14.1092C22.7951 14.2286 22.7614 14.3579 22.7548 14.4898C22.7482 14.6217 22.7687 14.7536 22.8153 14.8778C22.8619 15.002 22.9335 15.1161 23.0261 15.2136C23.1187 15.311 23.2304 15.3898 23.3548 15.4455C23.4792 15.5012 23.6138 15.5326 23.7509 15.538C23.8879 15.5433 24.0247 15.5225 24.1534 15.4767C24.2821 15.4309 24.4 15.3611 24.5005 15.2712C25.7708 14.1093 26.5339 12.5254 26.6348 10.8413C26.6092 10.042 26.4052 9.25727 26.0368 8.5405C25.6683 7.82373 25.144 7.19166 24.4994 6.68722C24.0727 6.38353 23.721 5.99283 23.4694 5.54303C23.2178 5.09323 23.0726 4.59547 23.0442 4.08534C23.1799 3.18283 23.6733 2.36595 24.4208 1.80591C24.6378 1.64618 24.7807 1.41065 24.8188 1.15024C24.8568 0.889843 24.7868 0.625512 24.624 0.414392C24.4611 0.203272 24.2185 0.062327 23.9486 0.0220596C23.6787 -0.0182078 23.4032 0.0454338 23.1816 0.199206C22.5682 0.651996 22.0561 1.21933 21.6758 1.86721C21.2956 2.5151 21.0551 3.2302 20.9688 3.9697C20.9689 4.77855 21.1609 5.5767 21.5299 6.30333C21.899 7.02996 22.4355 7.66592 23.0984 8.16274Z" fill="currentcolor"/>
    <path d="M16.2645 8.16274C16.6894 8.48322 17.039 8.88673 17.2902 9.34669C17.5414 9.80666 17.6886 10.3126 17.722 10.8313C17.626 11.9569 17.1074 13.0103 16.2633 13.7946C16.1614 13.883 16.0787 13.9899 16.0199 14.1092C15.9611 14.2286 15.9274 14.3579 15.9208 14.4898C15.9142 14.6217 15.9348 14.7536 15.9813 14.8778C16.0279 15.002 16.0996 15.1161 16.1922 15.2136C16.2847 15.311 16.3964 15.3898 16.5208 15.4455C16.6452 15.5012 16.7798 15.5326 16.9169 15.538C17.054 15.5433 17.1908 15.5225 17.3194 15.4767C17.4481 15.4309 17.5661 15.3611 17.6666 15.2712C18.9368 14.1093 19.6999 12.5254 19.8009 10.8413C19.7752 10.042 19.5713 9.25727 19.2028 8.5405C18.8343 7.82373 18.31 7.19166 17.6654 6.68722C17.2387 6.38353 16.887 5.99283 16.6354 5.54303C16.3839 5.09323 16.2386 4.59547 16.2102 4.08534C16.346 3.18283 16.8393 2.36595 17.5869 1.80591C17.8038 1.64618 17.9468 1.41065 17.9848 1.15024C18.0228 0.889843 17.9528 0.625512 17.79 0.414392C17.6271 0.203272 17.3845 0.062327 17.1146 0.0220596C16.8447 -0.0182078 16.5692 0.0454338 16.3476 0.199206C15.7342 0.651996 15.2221 1.21933 14.8418 1.86721C14.4616 2.5151 14.2211 3.2302 14.1348 3.9697C14.1349 4.77855 14.3269 5.5767 14.6959 6.30333C15.065 7.02996 15.6015 7.66592 16.2645 8.16274Z" fill="currentcolor"/>
    <path d="M7.16328 29.7138C5.86597 27.7051 5.17938 25.3866 5.18141 23.0212C5.18141 22.7558 5.07191 22.5013 4.87697 22.3136C4.68204 22.1259 4.41765 22.0205 4.14198 22.0205C3.8663 22.0205 3.60191 22.1259 3.40698 22.3136C3.21204 22.5013 3.10254 22.7558 3.10254 23.0212C3.10081 25.7653 3.89738 28.4551 5.40201 30.7857C5.55001 31.0072 5.78275 31.1637 6.04976 31.2211C6.31677 31.2784 6.59652 31.2322 6.82832 31.0923C7.06012 30.9524 7.22529 30.7301 7.288 30.4737C7.35071 30.2174 7.30588 29.9475 7.16328 29.7227V29.7138Z" fill="currentcolor"/>
    <path d="M9.06498 32.7103C8.94112 32.6482 8.84235 32.548 8.78434 32.4257C8.73082 32.3026 8.65227 32.1911 8.55334 32.0977C8.45441 32.0043 8.33708 31.9309 8.20825 31.8818C8.07942 31.8327 7.9417 31.8089 7.80317 31.8118C7.66464 31.8146 7.5281 31.8441 7.40159 31.8986C7.27508 31.953 7.16115 32.0312 7.06649 32.1286C6.97184 32.226 6.89837 32.3407 6.8504 32.4658C6.80244 32.591 6.78094 32.7241 6.78719 32.8574C6.79344 32.9906 6.8273 33.1213 6.88678 33.2418C7.13536 33.7758 7.56332 34.2136 8.10177 34.4849C8.34682 34.6079 8.63256 34.6321 8.89616 34.5523C9.15975 34.4724 9.37959 34.295 9.50732 34.0591C9.63505 33.8232 9.6602 33.5481 9.57725 33.2943C9.49429 33.0405 9.31003 32.8289 9.06498 32.7059V32.7103Z" fill="currentcolor"/>
    </g>
    <defs>
    <clipPath id="clip0_605_8664">
    <rect width="40" height="40" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
  drinks: `<svg width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_598_8203)">
    <path d="M0 0L0.662157 8.11078C0.662157 8.12619 0.653028 8.1394 0.653028 8.15481C0.658117 8.18851 0.664982 8.22193 0.673584 8.25496L3.1852 39H25.1048L28.0034 0H0ZM25.7932 1.98093L25.4085 7.16985C25.3982 7.16985 25.3902 7.16985 25.3799 7.16985H2.64519L2.22279 1.98642L25.7932 1.98093ZM23.1948 37.0191H5.08147L2.80846 9.14527H25.2612L23.1948 37.0191Z" fill="currentcolor"/>
    <path d="M6.24983 23.3122C6.28864 23.3122 6.32861 23.3122 6.364 23.3122C6.49825 23.2972 6.6281 23.2567 6.74613 23.1933C6.86415 23.1298 6.96804 23.0445 7.05181 22.9423C7.13559 22.8401 7.19762 22.7229 7.23436 22.5975C7.2711 22.4722 7.28181 22.341 7.26589 22.2117C7.0661 20.5444 6.86517 18.8155 6.66538 17.0855C6.4576 15.2861 6.24869 13.4846 6.03862 11.7502C5.99894 11.4962 5.85848 11.267 5.64686 11.111C5.43525 10.955 5.16904 10.8843 4.90438 10.9138C4.63973 10.9434 4.39731 11.0708 4.22831 11.2694C4.0593 11.4679 3.9769 11.722 3.9985 11.978C4.20628 13.7091 4.41522 15.5084 4.623 17.3056C4.82392 19.0378 5.02485 20.77 5.22578 22.4395C5.25574 22.6807 5.37661 22.9029 5.56542 23.0638C5.75424 23.2247 5.99781 23.3131 6.24983 23.3122Z" fill="currentcolor"/>
    <path d="M6.05485 24.414C5.9204 24.4288 5.79029 24.469 5.67201 24.5323C5.55372 24.5957 5.44958 24.6809 5.36557 24.7832C5.28156 24.8854 5.21933 25.0027 5.18245 25.1282C5.14557 25.2537 5.13477 25.385 5.15067 25.5145L5.31392 26.8857C5.34197 27.1276 5.46141 27.351 5.64945 27.5134C5.83748 27.6758 6.08096 27.7658 6.33341 27.7662C6.37223 27.7662 6.41105 27.7662 6.44759 27.7607C6.5817 27.7462 6.71152 27.7063 6.82966 27.6434C6.9478 27.5806 7.05194 27.4959 7.13612 27.3942C7.22029 27.2925 7.28287 27.1758 7.32027 27.0508C7.35766 26.9258 7.36913 26.7949 7.35404 26.6656L7.1908 25.2889C7.15839 25.0286 7.02114 24.791 6.80864 24.6273C6.59614 24.4636 6.32541 24.387 6.05485 24.414Z" fill="currentcolor"/>
    </g>
    <defs>
    <clipPath id="clip0_598_8203">
    <rect width="28" height="39" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
  snacks: `<svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.9739 12.3839H39.9673C39.8416 11.3068 39.529 10.2613 39.0441 9.29623C38.2937 7.89066 37.2396 6.67826 35.9616 5.75118C34.6837 4.82411 33.2156 4.20677 31.669 3.94605C31.658 3.94605 31.6471 3.94605 31.635 3.94605C29.7116 1.41671 26.4577 0.0219894 22.162 0.00292969C17.7851 0.0287164 14.3819 1.44362 12.4015 3.94605C12.3773 3.94605 12.3553 3.94605 12.3312 3.94605C10.7845 4.20721 9.31631 4.82484 8.03823 5.75207C6.76016 6.6793 5.70574 7.89174 4.95505 9.29734C4.47112 10.2623 4.15888 11.3074 4.03289 12.3839H4.02631C2.34137 14.0479 1.12087 16.1402 0.490328 18.4457C-0.140217 20.7512 -0.15805 23.1866 0.438675 25.5015C1.16762 28.1328 2.30494 29.6228 3.81991 29.9323C4.02143 29.975 4.22667 29.9968 4.43249 29.9973C5.03503 29.925 5.61546 29.722 6.13483 29.4017C6.6542 29.0815 7.1005 28.6516 7.44377 28.1407C8.13563 27.3077 8.96125 26.601 9.88529 26.0508C10.6588 25.658 11.4715 25.3513 12.3092 25.136C12.7407 25.007 13.2105 24.8624 13.7122 24.6875C14.2182 24.7717 14.7299 24.8148 15.2426 24.8164C16.5191 24.8132 17.7827 24.5561 18.963 24.0597C19.2243 24.1678 19.4915 24.2603 19.7633 24.3366C20.4624 24.5255 21.1737 24.6634 21.892 24.7492C21.9649 24.7584 22.0386 24.7584 22.1115 24.7492C22.8298 24.6634 23.5411 24.5255 24.2402 24.3366C24.5121 24.2602 24.7794 24.1674 25.0405 24.0585C26.6985 24.7663 28.5179 24.9843 30.2913 24.6875C30.7941 24.8568 31.2639 25.0014 31.6954 25.136C32.5326 25.3518 33.3449 25.6585 34.1182 26.0508C35.0422 26.6006 35.8675 27.3074 36.5586 28.1407C36.9021 28.6516 37.3486 29.0816 37.8682 29.4018C38.3877 29.722 38.9683 29.925 39.571 29.9973C39.7765 29.9968 39.9813 29.975 40.1825 29.9323C41.6986 29.6228 42.8359 28.1317 43.5648 25.5015C44.1604 23.1863 44.1418 20.7509 43.5107 18.4455C42.8796 16.1401 41.6588 14.0479 39.9739 12.3839ZM8.94886 24.276C7.83296 24.927 6.83512 25.7694 5.99906 26.7661C5.09447 27.7561 4.76074 28.07 4.20854 27.9568C3.49936 27.8111 2.83628 26.7459 2.34227 24.9543C1.92223 23.3112 1.86627 21.5932 2.17848 19.9252C2.4907 18.2572 3.16322 16.6814 4.14706 15.3124C4.29059 16.0686 4.52165 16.8048 4.83539 17.5054C6.01506 20.1182 8.00316 22.2624 10.4935 23.6078C9.96108 23.7857 9.44437 24.0092 8.94886 24.276ZM14.1514 22.7266C13.9962 22.6555 13.8256 22.6265 13.6562 22.6425C12.1235 22.2411 10.6976 21.4958 9.48221 20.461C8.26685 19.4261 7.2926 18.1277 6.63029 16.66C6.16216 15.6502 5.92631 14.5445 5.94077 13.4274C5.95523 12.3102 6.21962 11.2112 6.71373 10.2145C7.64306 8.45293 9.17618 7.10357 11.0193 6.42493C9.99726 9.36013 10.6472 13.6553 12.7165 17.6365C13.6785 19.5654 15.0132 21.2752 16.6401 22.6627C15.8195 22.8232 14.9787 22.8448 14.1514 22.7266ZM23.7451 22.3903C23.1716 22.5448 22.5889 22.6613 22.0007 22.7389C21.4117 22.6614 20.8283 22.5449 20.254 22.3903C18.2033 21.8521 16.0374 19.7219 14.462 16.6925C12.6704 13.2438 12.0469 9.47672 12.8834 7.09538C14.473 2.55356 19.9093 2.03223 22.1653 2.01765C25.4445 2.03783 29.66 2.93475 31.1157 7.09538C31.9501 9.4756 31.3353 13.2427 29.5393 16.6903C27.9628 19.7197 25.798 21.851 23.7451 22.3891V22.3903ZM27.3579 22.6649C28.9873 21.2782 30.3233 19.5673 31.2848 17.6365C33.353 13.6542 34.0019 9.36013 32.9798 6.42493C34.8231 7.1032 36.3564 8.45266 37.2854 10.2145C37.7798 11.2111 38.0446 12.31 38.0594 13.4271C38.0743 14.5442 37.8388 15.6501 37.371 16.66C36.7089 18.1267 35.7356 19.4246 34.5215 20.4595C33.3074 21.4945 31.883 22.2405 30.3517 22.6436C30.1773 22.6248 30.0013 22.6546 29.8423 22.73C29.0162 22.8474 28.1769 22.825 27.3579 22.6638V22.6649ZM41.6601 24.9555C41.165 26.7493 40.5009 27.8122 39.7939 27.9579C39.2516 28.07 38.9156 27.7595 38.0033 26.7673C37.1671 25.7707 36.1693 24.9284 35.0536 24.2772C34.5589 24.0089 34.0429 23.7839 33.5111 23.6045C36.0014 22.2591 37.9895 20.1148 39.1692 17.502C39.4825 16.8016 39.7135 16.0659 39.8575 15.3101C40.8408 16.6799 41.5127 18.2562 41.8245 19.9245C42.1364 21.5927 42.0802 23.311 41.6601 24.9543V24.9555Z" fill="currentColor"/>
    <path d="M17.3428 15.7782C16.1626 13.048 15.7674 10.0313 16.2032 7.08028C16.2231 6.94931 16.2174 6.81565 16.1867 6.68691C16.1559 6.55816 16.1006 6.43686 16.024 6.32994C15.9473 6.22302 15.8508 6.13257 15.7399 6.06375C15.629 5.99493 15.5059 5.94908 15.3777 5.92884C15.2495 5.90859 15.1186 5.91434 14.9925 5.94576C14.8665 5.97717 14.7477 6.03365 14.643 6.11194C14.5383 6.19023 14.4497 6.2888 14.3824 6.40205C14.315 6.5153 14.2701 6.641 14.2503 6.77197C13.7579 10.1061 14.2045 13.5144 15.538 16.5989C15.5889 16.7227 15.6636 16.8349 15.7575 16.9289C15.8515 17.0229 15.9628 17.0967 16.0851 17.1462C16.2074 17.1956 16.3381 17.2197 16.4695 17.2168C16.601 17.214 16.7306 17.1844 16.8507 17.1298C16.9709 17.0752 17.0791 16.9966 17.1691 16.8987C17.2591 16.8008 17.3291 16.6855 17.3749 16.5597C17.4208 16.4338 17.4415 16.2998 17.436 16.1656C17.4305 16.0315 17.3988 15.8997 17.3428 15.7782Z" fill="currentColor"/>
    <path d="M19.696 19.2067C19.2865 18.9533 18.9569 18.5852 18.7464 18.146C18.6921 18.023 18.6143 17.9124 18.5174 17.8206C18.4206 17.7288 18.3067 17.6578 18.1825 17.6118C18.0583 17.5658 17.9263 17.5456 17.7944 17.5526C17.6625 17.5596 17.5333 17.5935 17.4144 17.6524C17.2955 17.7112 17.1894 17.7939 17.1023 17.8953C17.0153 17.9968 16.949 18.1151 16.9075 18.2432C16.866 18.3712 16.85 18.5065 16.8606 18.641C16.8712 18.7755 16.908 18.9065 16.969 19.0262C17.3477 19.8156 17.9407 20.4772 18.6772 20.9321C18.7884 21.0004 18.9117 21.0457 19.0401 21.0654C19.1684 21.085 19.2993 21.0786 19.4253 21.0466C19.5512 21.0146 19.6698 20.9576 19.7741 20.8788C19.8785 20.8 19.9666 20.701 20.0335 20.5874C20.1004 20.4738 20.1448 20.3478 20.164 20.2168C20.1832 20.0857 20.177 19.952 20.1456 19.8234C20.1143 19.6947 20.0585 19.5737 19.9813 19.4671C19.9041 19.3605 19.8072 19.2705 19.696 19.2022V19.2067Z" fill="currentColor"/>
    </svg>
    `,
  meals: `<svg width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_598_8219)">
    <path d="M42.941 2.11595C42.7415 1.9851 42.4981 1.93888 42.2644 1.98745C42.0307 2.03602 41.8259 2.1754 41.695 2.37496L34.006 14.102C33.3796 13.6496 32.7178 13.2483 32.027 12.902C32.0551 12.8557 32.0786 12.8068 32.097 12.756L35.4431 1.14795C35.5094 0.91841 35.4818 0.671927 35.3663 0.46273C35.2509 0.253533 35.0571 0.098759 34.8275 0.0324549C34.598 -0.0338492 34.3515 -0.0062506 34.1423 0.109178C33.9331 0.224607 33.7783 0.41841 33.712 0.647954L30.382 12.202C28.8498 11.6558 27.2357 11.3751 25.609 11.372C23.5868 11.3208 21.5789 11.7248 19.7337 12.5541C17.8886 13.3834 16.2534 14.6167 14.949 16.163C13.472 15.5617 11.8698 15.3326 10.2834 15.4959C8.69704 15.6593 7.17511 16.21 5.85156 17.0996C4.528 17.9893 3.44339 19.1906 2.69314 20.5978C1.94289 22.0051 1.54999 23.5752 1.54904 25.17H0.900049C0.781014 25.1699 0.663159 25.1936 0.553309 25.2394C0.443459 25.2853 0.343801 25.3524 0.260096 25.4371C0.176391 25.5217 0.110305 25.6221 0.0656684 25.7325C0.0210317 25.8428 -0.00126705 25.9609 5.5571e-05 26.08C0.0892682 29.5951 1.16582 33.0142 3.10662 35.9464C5.04743 38.8786 7.77413 41.2054 10.975 42.661V45.147C10.975 45.3856 11.0699 45.6146 11.2386 45.7834C11.4074 45.9521 11.6364 46.047 11.8751 46.047H29.692C29.9307 46.047 30.1596 45.9521 30.3284 45.7834C30.4972 45.6146 30.592 45.3856 30.592 45.147V42.665C33.7927 41.2092 36.5191 38.8822 38.4597 35.9501C40.4004 33.018 41.4768 29.599 41.566 26.084C41.5674 25.9649 41.5451 25.8468 41.5004 25.7365C41.4558 25.6261 41.3897 25.5257 41.306 25.4411C41.2223 25.3565 41.1226 25.2893 41.0128 25.2434C40.9029 25.1976 40.7851 25.1739 40.666 25.174H39.976C39.82 21.3924 38.1759 17.8258 35.402 15.251L43.197 3.36196C43.3282 3.16274 43.3749 2.91961 43.3269 2.68598C43.2789 2.45235 43.1401 2.24733 42.941 2.11595ZM11.292 17.249C13.3949 17.2513 15.4113 18.0864 16.9 19.5716C18.3887 21.0568 19.2286 23.0711 19.236 25.174H18.476C18.4537 23.2835 17.6871 21.4779 16.3423 20.149C14.9976 18.82 13.1832 18.0747 11.2925 18.0747C9.4019 18.0747 7.58747 18.82 6.24273 20.149C4.89799 21.4779 4.13134 23.2835 4.10903 25.174H3.34905C3.35619 23.0712 4.1959 21.0569 5.68447 19.5717C7.17304 18.0865 9.18928 17.2513 11.292 17.249ZM30.46 25.174C30.3295 24.0738 29.829 23.0506 29.0406 22.2723C28.2521 21.494 27.2226 21.0067 26.1208 20.8904C25.019 20.7742 23.9104 21.0358 22.9769 21.6324C22.0433 22.2291 21.3403 23.1252 20.983 24.174C20.8976 23.3879 20.7156 22.6154 20.441 21.874C21.2275 20.8287 22.312 20.0461 23.5519 19.6292C24.7917 19.2124 26.1287 19.1807 27.3869 19.5384C28.6451 19.8962 29.7655 20.6265 30.6005 21.6334C31.4356 22.6402 31.9461 23.8763 32.065 25.179L30.46 25.174ZM28.66 25.174H22.555C22.6942 24.4666 23.0746 23.8296 23.6314 23.3717C24.1882 22.9138 24.8867 22.6634 25.6075 22.6634C26.3284 22.6634 27.0269 22.9138 27.5837 23.3717C28.1404 23.8296 28.5209 24.4666 28.66 25.174ZM33.8661 25.174C33.7524 23.5697 33.1734 22.0335 32.1999 20.7533C31.2265 19.4731 29.9008 18.5046 28.3853 17.9663C26.8698 17.428 25.2303 17.3434 23.6674 17.7227C22.1045 18.102 20.6862 18.9288 19.5861 20.102C19.3425 19.7013 19.0704 19.3187 18.772 18.957C19.6483 18.0285 20.7095 17.2942 21.8871 16.8014C23.0648 16.3086 24.3327 16.0683 25.609 16.096C28.0701 16.1 30.4374 17.0409 32.2298 18.7275C34.0222 20.414 35.1053 22.7196 35.259 25.176L33.8661 25.174ZM15.376 25.174C15.376 24.0911 14.9459 23.0525 14.1802 22.2868C13.4145 21.5211 12.3759 21.091 11.2931 21.091C10.2102 21.091 9.17165 21.5211 8.40594 22.2868C7.64023 23.0525 7.21005 24.0911 7.21005 25.174H5.91003C5.92931 23.7594 6.5048 22.4093 7.51193 21.4158C8.51906 20.4223 9.87684 19.8653 11.2915 19.8653C12.7062 19.8653 14.064 20.4223 15.0712 21.4158C16.0783 22.4093 16.6537 23.7594 16.673 25.174H15.376ZM13.576 25.174H9.01205C9.02455 24.5769 9.27051 24.0085 9.6972 23.5906C10.1239 23.1728 10.6973 22.9387 11.2945 22.9387C11.8918 22.9387 12.4652 23.1728 12.8919 23.5906C13.3186 24.0085 13.5646 24.5769 13.5771 25.174H13.576ZM12.7761 44.251V43.132H28.792V44.251H12.7761ZM29.136 41.332H12.436C9.52258 40.1406 6.99281 38.1712 5.12332 35.6389C3.25383 33.1066 2.11663 30.109 1.83605 26.974H39.7281C39.4482 30.1081 38.3122 33.1051 36.4441 35.6373C34.5761 38.1695 32.048 40.1395 29.136 41.332ZM38.178 25.174H37.0601C36.9048 22.2401 35.6312 19.4773 33.5013 17.4538C31.3713 15.4303 28.547 14.2998 25.609 14.295C24.0957 14.2643 22.5927 14.55 21.1962 15.1338C19.7996 15.7176 18.5404 16.5865 17.499 17.685C17.2087 17.4481 16.9052 17.2277 16.5901 17.025C17.7218 15.7645 19.1155 14.7668 20.6734 14.1017C22.2314 13.4367 23.9159 13.1204 25.609 13.175C28.8438 13.1792 31.9531 14.4275 34.2929 16.6611C36.6327 18.8948 38.0237 21.9428 38.178 25.174Z" fill="currentColor"/>
    <path d="M3.39209 30.1722C4.045 32.6025 5.31628 34.8222 7.08209 36.6152C7.16443 36.7021 7.26327 36.7717 7.37286 36.8199C7.48244 36.8682 7.60056 36.8941 7.72027 36.8961C7.83999 36.8981 7.95888 36.8762 8.07003 36.8317C8.18118 36.7872 8.28235 36.7209 8.36758 36.6368C8.45281 36.5528 8.52038 36.4525 8.56637 36.342C8.61237 36.2314 8.63585 36.1128 8.63543 35.9931C8.63501 35.8733 8.6107 35.7549 8.56393 35.6447C8.51716 35.5344 8.44888 35.4347 8.36306 35.3512C6.81633 33.7796 5.70257 31.8346 5.13006 29.7052C5.1013 29.589 5.04966 29.4797 4.97815 29.3837C4.90663 29.2878 4.81669 29.207 4.71359 29.1462C4.61049 29.0854 4.49631 29.0458 4.37771 29.0297C4.25912 29.0136 4.1385 29.0213 4.02291 29.0523C3.90733 29.0834 3.7991 29.1372 3.70456 29.2106C3.61001 29.284 3.53106 29.3755 3.47232 29.4798C3.41357 29.584 3.3762 29.699 3.36242 29.8179C3.34865 29.9368 3.35875 30.0572 3.39209 30.1722Z" fill="#323232"/>
    <path d="M10.5356 39.5502C10.7282 39.6767 10.962 39.7245 11.1889 39.6838C11.4157 39.643 11.6182 39.5168 11.7547 39.3312C11.8913 39.1456 11.9514 38.9146 11.9227 38.6859C11.8941 38.4573 11.7788 38.2483 11.6006 38.1022L10.3336 37.1752C10.1407 37.0392 9.90209 36.9844 9.66918 37.0226C9.43627 37.0609 9.2277 37.1891 9.08843 37.3797C8.94915 37.5702 8.89031 37.8079 8.92458 38.0414C8.95884 38.2749 9.08345 38.4857 9.27159 38.6282L10.5356 39.5502Z" fill="#323232"/>
    </g>
    <defs>
    <clipPath id="clip0_598_8219">
    <rect width="43.348" height="46.051" fill="white"/>
    </clipPath>
    </defs>
    </svg>`
};
var CateringItemFiltersComponent = class _CateringItemFiltersComponent extends AsyncHandler {
  get start_of_date() {
    return startOfDay(addDays(this._state.getFilters().date, this.offset_day)).valueOf();
  }
  get min_offset() {
    return this.offset_day > 0 ? 0 : this._min_offset;
  }
  get step_interval() {
    return this._settings.get("app.catering.step_interval") || 5;
  }
  get max_offset() {
    const end = Math.min(endOfDay(addDays(this._state.getFilters().date, this.offset_day)).valueOf(), addMinutes(this._state.getFilters().date, this._state.getFilters().duration).valueOf());
    const diff = differenceInMinutes(end, this._state.getFilters().date);
    return Math.min(diff, Math.min(24 * 60 - 1, this._max_offset));
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  constructor(_state, _settings) {
    super();
    this._state = _state;
    this._settings = _settings;
    this.search = false;
    this.at_time = false;
    this.at_timeChange = new EventEmitter();
    this.offset = 0;
    this.offsetChange = new EventEmitter();
    this.offset_day = 0;
    this.offset_dayChange = new EventEmitter();
    this._min_offset = 0;
    this._max_offset = 60;
    this.icons = ICONS;
    this.filters = this._state.filters;
    this.setFilters = (f) => this._state.setFilters(f);
    this.categories = this._state.categories;
    this.caterers = this._state.caterers;
    this.exact_tooltip = "";
    this.day_options = [];
  }
  ngOnInit() {
    this._min_offset = Math.max(this._settings.get("app.catering.min_offset"), 0);
    this.exact_tooltip = i18n("CATERING.ORDERS_DELIVER_EXACT_INFO");
    this.subscription("filters", this._state.filters.subscribe(() => {
      this._max_offset = Math.max(15, (this._state.getFilters().duration || 60) - this._settings.get("app.catering.end_offset"));
      this._updateDayOptions();
    }));
    this._updateDayOptions();
  }
  toggleCategory(name) {
    return __async(this, null, function* () {
      const { categories } = yield this.filters.pipe(take(1)).toPromise();
      if (categories.includes(name))
        this.setFilters({
          categories: categories.filter((_) => _ !== name)
        });
      else
        this.setFilters({ categories: [...categories, name] });
    });
  }
  toggleTag(tag) {
    return __async(this, null, function* () {
      const { tags } = yield this.filters.pipe(take(1)).toPromise();
      if (tags.includes(tag))
        this.setFilters({ tags: tags.filter((_) => _ !== tag) });
      else
        this.setFilters({ tags: [...tags, tag] });
    });
  }
  _updateDayOptions() {
    const { date, duration } = this._state.getFilters();
    if (duration <= 24 * 60)
      return this.day_options = [];
    let day = startOfDay(date);
    let count = 0;
    const end = endOfDay(addMinutes(date, duration)).valueOf();
    const options = [];
    while (day.valueOf() <= end) {
      options.push({ id: count, value: day.valueOf() });
      day = addDays(day, 1);
      count++;
    }
    this.day_options = options;
  }
  static {
    this.\u0275fac = function CateringItemFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringItemFiltersComponent)(\u0275\u0275directiveInject(CateringOrderStateService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemFiltersComponent, selectors: [["catering-item-filters"]], inputs: { search: "search", at_time: "at_time", offset: "offset", offset_day: "offset_day" }, outputs: { at_timeChange: "at_timeChange", offsetChange: "offsetChange", offset_dayChange: "offset_dayChange" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 15, vars: 21, consts: [[1, "px-2", "mt-2", "mb-2"], ["appearance", "outline", 1, "w-full", "h-14"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "hidden sm:block px-2 py-2", 4, "ngIf"], ["class", "hidden sm:block font-medium px-2 py-2", 4, "ngIf"], ["class", "flex flex-col px-2", 4, "ngIf"], ["class", "hidden sm:block font-medium px-2 py-4", 4, "ngIf"], [1, "flex", "flex-col", "px-2", "space-y-2"], [3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "hidden", "sm:block", "px-2", "py-2"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "hidden", "sm:block", "font-medium", "px-2", "py-2"], [1, "flex", "flex-col", "px-2"], [3, "ngModelChange", "ngModel", "matTooltip"], [4, "ngIf"], [3, "ngModelChange", "ngModel", "time", "step", "min", "max", "use_24hr"], ["appearance", "outline", 1, "w-full", "no-subscript", "mb-4"], [1, "hidden", "sm:block", "font-medium", "px-2", "py-4"]], template: function CateringItemFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "app-icon", 2);
        \u0275\u0275text(3, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 3);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_Template_input_ngModelChange_4_listener($event) {
          return ctx.setFilters({ search: $event });
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(7, CateringItemFiltersComponent_div_7_Template, 10, 11, "div", 4);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275template(9, CateringItemFiltersComponent_h3_9_Template, 3, 3, "h3", 5)(10, CateringItemFiltersComponent_div_10_Template, 10, 17, "div", 6)(11, CateringItemFiltersComponent_h3_11_Template, 3, 3, "h3", 7);
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275template(13, CateringItemFiltersComponent_mat_checkbox_13_Template, 3, 5, "mat-checkbox", 9);
        \u0275\u0275pipe(14, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_3_0;
        \u0275\u0275classProp("sm:hidden", !ctx.search);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(5, 13, ctx.filters)) == null ? null : tmp_1_0.search)("placeholder", \u0275\u0275pipeBind1(6, 15, "CATERING.MENU_SEARCH"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.search && ((tmp_3_0 = \u0275\u0275pipeBind1(8, 17, ctx.caterers)) == null ? null : tmp_3_0.length) > 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.search);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.search);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.search);
        \u0275\u0275advance();
        \u0275\u0275classProp("sm:hidden", ctx.search)("sm:pt-1", !ctx.search);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(14, 19, ctx.categories));
      }
    }, dependencies: [NgForOf, NgIf, MatOption, MatCheckbox, MatTooltip, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, MatFormField, MatPrefix, MatSelect, MatInput, DurationFieldComponent, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  min-width: 16rem;\n  overflow: auto;\n}\n/*# sourceMappingURL=catering-item-filters.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemFiltersComponent, { className: "CateringItemFiltersComponent", filePath: "libs/catering/src/lib/catering-order-modal/catering-item-filters.component.ts", lineNumber: 169 });
})();

// libs/catering/src/lib/catering-order-modal/new-catering-order-modal.component.ts
var _c07 = (a0) => ({ count: a0 });
function NewCateringOrderModalComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function NewCateringOrderModalComponent_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = null);
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
var EMPTY_FAVS = [];
var NewCateringOrderModalComponent = class _NewCateringOrderModalComponent {
  get favorites() {
    return this._settings.get("favourite_menu_items") || EMPTY_FAVS;
  }
  get selected_ids() {
    return this.selected.map((_) => _.custom_id).join(",");
  }
  get count() {
    return this.selected.reduce((t, i) => t + i.quantity, 0);
  }
  get code() {
    return this._org.currency_code;
  }
  constructor(_settings, _order, _org, _data) {
    this._settings = _settings;
    this._order = _order;
    this._org = _org;
    this._data = _data;
    this.displayed = null;
    this.selected = [...this._data.items || []];
    this.exact_time = this._data.exact_time ?? false;
    const { duration } = this._data.details;
    this._order.setFilters(this._data.details);
    this.offset = Math.min(Math.max(this._settings.get("app.catering.min_offset"), this._data.offset || 0), (duration || 60) - this._settings.get("app.catering.end_offset"));
    this.offset_day = this._data.offset_day || 0;
    if (this._data.caterer) {
      this._order.setFilters({ caterer: this._data.caterer });
    }
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter((_) => _.custom_id !== item.custom_id && (!item.caterer || item.caterer === _.caterer));
    if (state) {
      const new_item = new CateringItem(__spreadProps(__spreadValues({}, item), { in_order: true }));
      list.push(new_item);
      this.displayed = new_item;
    }
    this.selected = list;
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting("favourite_menu_items", [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting("favourite_menu_items", fav_list.filter((_) => _ !== item.id));
    }
  }
  static {
    this.\u0275fac = function NewCateringOrderModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewCateringOrderModalComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(CateringOrderStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewCateringOrderModalComponent, selectors: [["new-catering-order-modal"]], standalone: false, decls: 37, vars: 44, consts: [[1, "w-[100vw]", "h-[100vh]", "sm:relative", "sm:w-auto", "sm:h-auto", "flex", "flex-col", "bg-base-100"], [1, "flex", "items-center", "justify-between", "space-x-4", "w-full"], ["icon", "", "matRipple", "", 3, "mat-dialog-close"], [1, "flex-1", "flex", "items-center", "divide-x", "divide-base-200", "min-h-[65vh]", "h-[65vh]", "sm:max-h-[65vh]", "sm:max-w-[95vw]", "w-full", "overflow-hidden"], [1, "h-full", "hidden", "sm:block", "sm:max-w-[12rem]", "sm:h-[65vh]", "sm:max-h-full", 3, "at_timeChange", "offsetChange", "offset_dayChange", "at_time", "offset", "offset_day"], [1, "flex", "flex-col", "items-center", "flex-1", "w-1/2", "h-full", "sm:h-[65vh]"], [1, "w-full", "border-b", "border-base-200", 3, "search"], [1, "flex-1", "h-1/2", "w-full", "overflow-hidden", 3, "toggleFav", "onSelect", "active", "selected", "selected_items", "favorites"], [1, "h-full", "w-full", "sm:h-[65vh]", "absolute", "sm:relative", "sm:flex", "sm:max-w-[16rem]", "z-20", "bg-base-100", 3, "activeChange", "toggleFav", "close", "item", "active", "code", "fav"], [1, "flex", "sm:hidden", "flex-col-reverse", "items-center", "justify-end", "px-2", "pt-2", "pb-[5.5rem]", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "name", "catering-item-return", "class", "inverse sm:hidden w-full sm:w-auto", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "name", "save-catering-item", 1, "w-full", "sm:w-auto", "sm:mb-0", 3, "mat-dialog-close"], [1, "hidden", "sm:flex", "items-center", "justify-between", "p-2", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "name", "catering-item-return", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "opacity-60", "text-sm"], ["btn", "", "matRipple", "", "name", "toggle-catering-item", 3, "click", "disabled"], [1, "mr-1"], ["btn", "", "matRipple", "", "name", "catering-item-return", 1, "inverse", "sm:hidden", "w-full", "sm:w-auto", 3, "click"]], template: function NewCateringOrderModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h3");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 2)(6, "app-icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 3)(9, "catering-item-filters", 4);
        \u0275\u0275twoWayListener("at_timeChange", function NewCateringOrderModalComponent_Template_catering_item_filters_at_timeChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.exact_time, $event) || (ctx.exact_time = $event);
          return $event;
        })("offsetChange", function NewCateringOrderModalComponent_Template_catering_item_filters_offsetChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.offset, $event) || (ctx.offset = $event);
          return $event;
        })("offset_dayChange", function NewCateringOrderModalComponent_Template_catering_item_filters_offset_dayChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.offset_day, $event) || (ctx.offset_day = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275element(11, "catering-item-filters", 6);
        \u0275\u0275elementStart(12, "catering-item-list", 7);
        \u0275\u0275listener("toggleFav", function NewCateringOrderModalComponent_Template_catering_item_list_toggleFav_12_listener($event) {
          return ctx.toggleFavourite($event);
        })("onSelect", function NewCateringOrderModalComponent_Template_catering_item_list_onSelect_12_listener($event) {
          return ctx.displayed = $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "catering-item-details", 8);
        \u0275\u0275listener("activeChange", function NewCateringOrderModalComponent_Template_catering_item_details_activeChange_13_listener($event) {
          return ctx.setSelected(ctx.displayed, $event);
        })("toggleFav", function NewCateringOrderModalComponent_Template_catering_item_details_toggleFav_13_listener() {
          return ctx.toggleFavourite(ctx.displayed);
        })("close", function NewCateringOrderModalComponent_Template_catering_item_details_close_13_listener() {
          return ctx.displayed = null;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "footer", 9);
        \u0275\u0275template(15, NewCateringOrderModalComponent_button_15_Template, 3, 3, "button", 10);
        \u0275\u0275elementStart(16, "button", 11);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "footer", 12)(20, "button", 13)(21, "div", 14)(22, "app-icon", 15);
        \u0275\u0275text(23, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 16);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "p", 17);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 18);
        \u0275\u0275listener("click", function NewCateringOrderModalComponent_Template_button_click_30_listener() {
          return ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.custom_id));
        });
        \u0275\u0275elementStart(31, "div", 14)(32, "app-icon", 15);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 19);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 31, "CATERING.ORDER"));
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", ctx.selected);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("at_time", ctx.exact_time)("offset", ctx.offset)("offset_day", ctx.offset_day);
        \u0275\u0275advance(2);
        \u0275\u0275property("search", true);
        \u0275\u0275advance();
        \u0275\u0275property("active", ctx.displayed == null ? null : ctx.displayed.custom_id)("selected", ctx.selected_ids)("selected_items", ctx.selected)("favorites", ctx.favorites);
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", !ctx.displayed)("inset-0", ctx.displayed);
        \u0275\u0275property("item", ctx.displayed)("active", ctx.selected_ids.includes((ctx.displayed == null ? null : ctx.displayed.custom_id) || ""))("code", ctx.code)("fav", !!ctx.displayed && ctx.favorites.includes((ctx.displayed == null ? null : ctx.displayed.id) || ""));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.displayed);
        \u0275\u0275advance();
        \u0275\u0275classProp("mb-2", ctx.displayed);
        \u0275\u0275property("mat-dialog-close", ctx.selected);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 33, "COMMON.VIEW_LIST"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", ctx.selected);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 35, "COMMON.BACK_TO_FORM"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 37, "CATERING.ORDER_ITEM_COUNT", \u0275\u0275pureFunction1(42, _c07, ctx.count)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.custom_id));
        \u0275\u0275property("disabled", !ctx.displayed);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.custom_id) ? "remove" : "add");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 40, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.custom_id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
      }
    }, dependencies: [NgIf, MatDialogClose, IconComponent, MatRipple, CateringItemListComponent, CateringItemDetailsComponent, CateringItemFiltersComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewCateringOrderModalComponent, { className: "NewCateringOrderModalComponent", filePath: "libs/catering/src/lib/catering-order-modal/new-catering-order-modal.component.ts", lineNumber: 144 });
})();

// libs/catering/src/lib/catering-list-field.component.ts
var _c08 = (a0, a1) => ({ date: a0, time: a1 });
var _c15 = (a0, a1) => ({ count: a0, cost: a1 });
var _c23 = (a0) => ({ count: a0 });
function CateringListFieldComponent_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "app-icon");
    \u0275\u0275text(2, "priority_high");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r1.err_tooltip);
  }
}
function CateringListFieldComponent_div_1_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringListFieldComponent_div_1_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.duplicateOrder(order_r4));
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "content_copy");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CALENDAR_EVENT.CATERING_ORDER_DUPLICATE"));
  }
}
function CateringListFieldComponent_div_1_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringListFieldComponent_div_1_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editOrder(order_r4));
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CALENDAR_EVENT.CATERING_ORDER_EDIT"));
  }
}
function CateringListFieldComponent_div_1_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function CateringListFieldComponent_div_1_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeOrder(order_r4));
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function CateringListFieldComponent_div_1_div_22_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r1.optionList(item_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "CALENDAR_EVENT.CATERING_ORDER_OPTION_COUNT", \u0275\u0275pureFunction1(5, _c23, (item_r8.option_list == null ? null : item_r8.option_list.length) || "0")), " ");
  }
}
function CateringListFieldComponent_div_1_div_22_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function CateringListFieldComponent_div_1_div_22_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r8 = \u0275\u0275nextContext().$implicit;
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeOrderItem(order_r4, item_r8));
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function CateringListFieldComponent_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275template(3, CateringListFieldComponent_div_1_div_22_span_3_Template, 3, 7, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CateringListFieldComponent_div_1_div_22_button_9_Template, 3, 0, "button", 22);
    \u0275\u0275elementStart(10, "button", 23);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function CateringListFieldComponent_div_1_div_22_Template_button_click_10_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFavourite(item_r8));
    });
    \u0275\u0275elementStart(12, "app-icon");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r8.name || "Item", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r8.option_list == null ? null : item_r8.option_list.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r8.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 9, item_r8.unit_price_with_options / 100, ctx_r1.currency_code), " ea ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx_r1.favorites.includes(item_r8.id));
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 12, ctx_r1.favorites.includes(item_r8.id) ? "COMMON.FAVOURITES_REMOVE" : "COMMON.FAVOURITES_ADD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.favorites.includes(item_r8.id) ? "favorite" : "favorite_border");
  }
}
function CateringListFieldComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CateringListFieldComponent_div_1_div_9_Template, 3, 1, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, CateringListFieldComponent_div_1_button_14_Template, 4, 3, "button", 10)(15, CateringListFieldComponent_div_1_button_15_Template, 4, 3, "button", 10)(16, CateringListFieldComponent_div_1_button_16_Template, 3, 0, "button", 11);
    \u0275\u0275elementStart(17, "button", 12);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("click", function CateringListFieldComponent_div_1_Template_button_click_17_listener() {
      const order_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_order[order_r4.id] = !ctx_r1.show_order[order_r4.id]);
    });
    \u0275\u0275elementStart(19, "app-icon");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 13);
    \u0275\u0275template(22, CateringListFieldComponent_div_1_div_22_Template, 14, 14, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-error", ctx_r1.end_time < order_r4.deliver_at)("border-base-300", ctx_r1.end_time >= order_r4.deliver_at);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 20, "CALEDAR_EVENT.CATERING_ORDER_AT_DATE", \u0275\u0275pureFunction2(31, _c08, \u0275\u0275pipeBind2(6, 14, order_r4.deliver_at_time, "mediumDate"), \u0275\u0275pipeBind2(7, 17, order_r4.deliver_at_time, ctx_r1.time_format))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.end_time < order_r4.deliver_at);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 26, "CALEDAR_EVENT.CATERING_ORDER_DETAILS", \u0275\u0275pureFunction2(34, _c15, order_r4.item_count, \u0275\u0275pipeBind2(12, 23, order_r4.total_cost / 100, ctx_r1.currency_code))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(18, 29, ctx_r1.show_order[order_r4.id] ? "CALENDAR_EVENT.CATERING_ORDER_HIDE" : "CALENDAR_EVENT.CATERING_ORDER_SHOW"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.show_order[order_r4.id] ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.show_order[order_r4.id] ? "show" : "hide");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", order_r4.items);
  }
}
var EMPTY_FAVS2 = [];
var CateringListFieldComponent = class _CateringListFieldComponent {
  get favorites() {
    return this._settings.get("favourite_menu_items") || EMPTY_FAVS2;
  }
  get end_time() {
    const time = (this.options.date || Date.now()) + (this.options.duration || 30) * 60 * 1e3;
    return this.options.all_day ? endOfDay(time).valueOf() : time;
  }
  get time_format() {
    return this._settings.time_format || "shortTime";
  }
  get currency_code() {
    return this._org.building?.currency || "USD";
  }
  constructor(_settings, _org, _dialog) {
    this._settings = _settings;
    this._org = _org;
    this._dialog = _dialog;
    this.options = {};
    this.orders = [];
    this.show_order = {};
    this.disabled = false;
    this.err_tooltip = "";
    this.selected = [];
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled = s;
  }
  ngOnInit() {
    this.err_tooltip = i18n("CALENDAR_EVENT.CATERING_ORDER_ERROR");
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.orders = new_value;
    if (this._onChange)
      this._onChange(this.orders);
  }
  ngOnChanges(changes) {
    if (changes.options) {
      this.orders = (this.orders || []).map((_) => new CateringOrder(__spreadProps(__spreadValues({}, _), { event: this.options })));
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.orders = (value || []).map((_) => new CateringOrder(__spreadProps(__spreadValues({}, _), { event: this.options })));
  }
  removeOrder(order) {
    const updated_list = this.orders.filter((_) => _.id !== order.id);
    this.setValue(updated_list);
  }
  duplicateOrder(order) {
    const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
      id: `order-${randomString(8)}`
    }));
    this.setValue([...this.orders, new_order]);
  }
  removeOrderItem(order, item) {
    const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
      items: order.items.filter((_) => _.custom_id !== item.custom_id)
    }));
    const updated_list = this.orders.filter((_) => _.id !== order.id);
    if (new_order.items.length > 0) {
      this.setValue([...updated_list, new_order]);
    } else
      this.setValue(updated_list);
  }
  editOrder(order = new CateringOrder()) {
    const ref = this._dialog.open(NewCateringOrderModalComponent, {
      data: {
        caterer: order.items[0]?.caterer,
        items: order.items,
        details: __spreadProps(__spreadValues({}, this.options), {
          date: this.options.all_day ? startOfDay(this.options.date).valueOf() : this.options.date,
          duration: this.options.all_day ? Math.max(24 * 60, this.options.duration) : this.options.duration
        }),
        exact_time: !!order.deliver_time,
        offset: order.deliver_offset,
        offset_day: order.deliver_day_offset
      }
    });
    ref.afterClosed().subscribe((items) => {
      const orders = this.orders.filter((_) => _.id !== order.id);
      if (!items?.length)
        return;
      const time = new Date(this.options.date);
      for (const item of items) {
        item.options = [
          ...item.options.map((_) => __spreadValues({}, _))
        ];
        for (const option of item.options) {
          const opt = item.option_list.find((_) => _.id === option.id);
          option.active = !!opt;
        }
      }
      const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
        items,
        caterer: items[0].caterer,
        event: this.options,
        deliver_offset: ref.componentInstance.offset,
        deliver_time: ref.componentInstance.exact_time ? time.getHours() + time.getMinutes() / 60 : null,
        deliver_day_offset: ref.componentInstance.offset_day || 0
      }));
      if (new_order.item_count <= 0)
        return;
      this.setValue([...orders, new_order]);
    });
  }
  optionList(item) {
    return item.option_list?.map((_) => _.name).join("\n");
  }
  toggleFavourite(cateringitem) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(cateringitem.id);
    if (new_state) {
      this._settings.saveUserSetting("favourite_menu_items", [
        ...fav_list,
        cateringitem.id
      ]);
    } else {
      this._settings.saveUserSetting("favourite_menu_items", fav_list.filter((_) => _ !== cateringitem.id));
    }
  }
  static {
    this.\u0275fac = function CateringListFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringListFieldComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringListFieldComponent, selectors: [["catering-list-field"]], inputs: { options: "options" }, standalone: false, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => _CateringListFieldComponent),
        multi: true
      }
    ]), \u0275\u0275NgOnChangesFeature], decls: 9, vars: 5, consts: [["list", "", 1, "space-y-2"], ["order", "", "class", "border shadow bg-base-100 rounded-xl overflow-hidden", 3, "border-error", "border-base-300", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "name", "add-catering-item", 1, "w-full", "inverse", "mt-2", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["order", "", 1, "border", "shadow", "bg-base-100", "rounded-xl", "overflow-hidden"], [1, "flex", "items-center", "space-x-2", "p-4"], [1, "flex-1"], [1, "flex", "items-center", "space-x-4"], ["class", "flex items-center justify-center h-6 w-6 rounded-full bg-error text-error-content", 3, "matTooltip", 4, "ngIf"], [1, "text-xs", "opacity-60"], ["icon", "", "matRipple", "", 3, "matTooltip", "click", 4, "ngIf"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order", "class", "text-error", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "flex", "flex-col", "bg-base-200", "divide-y", "divide-base-100"], ["class", "flex items-center px-4 py-1 space-x-2 hover:opacity-90", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-center", "h-6", "w-6", "rounded-full", "bg-error", "text-error-content", 3, "matTooltip"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order", 1, "text-error", 3, "click"], [1, "flex", "items-center", "px-4", "py-1", "space-x-2", "hover:opacity-90"], [1, "flex", "items-center", "flex-1"], ["class", "text-xs opacity-60 ml-4 font-normal", 3, "matTooltip", 4, "ngIf"], [1, "rounded", "bg-success", "text-success-content", "text-xs", "px-2", "py-1"], [1, "rounded", "bg-info", "text-info-content", "text-xs", "px-2", "py-1"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order Item", "class", "text-error", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite", 3, "click", "matTooltip"], [1, "text-xs", "opacity-60", "ml-4", "font-normal", 3, "matTooltip"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order Item", 1, "text-error", 3, "click"]], template: function CateringListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, CateringListFieldComponent_div_1_Template, 23, 37, "div", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "button", 2);
        \u0275\u0275listener("click", function CateringListFieldComponent_Template_button_click_2_listener() {
          return ctx.editOrder();
        });
        \u0275\u0275elementStart(3, "div", 3)(4, "app-icon");
        \u0275\u0275text(5, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.orders);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.disabled);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 3, "CALENDAR_EVENT.CATERING_ORDER_ADD"), " ");
      }
    }, dependencies: [NgForOf, NgIf, MatTooltip, IconComponent, MatRipple, CurrencyPipe, DatePipe, TranslatePipe], encapsulation: 2, data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringListFieldComponent, { className: "CateringListFieldComponent", filePath: "libs/catering/src/lib/catering-list-field.component.ts", lineNumber: 229 });
})();

// libs/catering/src/lib/charge-code-list-modal.component.ts
function ChargeCodeListModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ChargeCodeListModalComponent_main_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-form-field", 9)(2, "input", 10);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ChargeCodeListModalComponent_main_5_For_2_Template_input_ngModelChange_2_listener($event) {
      const \u0275$index_18_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.charge_codes[\u0275$index_18_r2], $event) || (ctx_r2.charge_codes[\u0275$index_18_r2] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_main_5_For_2_Template_button_click_4_listener() {
      const \u0275$index_18_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeCode(\u0275$index_18_r2));
    });
    \u0275\u0275elementStart(6, "app-icon", 12);
    \u0275\u0275text(7, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const \u0275$index_18_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.charge_codes[\u0275$index_18_r2]);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 3, "CATERING.CHARGE_CODES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 5, "CATERING.CHARGE_CODES_REMOVE"));
  }
}
function ChargeCodeListModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 7);
    \u0275\u0275repeaterCreate(1, ChargeCodeListModalComponent_main_5_For_2_Template, 8, 7, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.charge_codes);
  }
}
function ChargeCodeListModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 13)(1, "button", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "input", 15);
    \u0275\u0275listener("change", function ChargeCodeListModalComponent_footer_6_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addCodesFromFile($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_footer_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newCode());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 16);
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_footer_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveChargeCodes());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "CATERING.CHARGE_CODES_IMPORT"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "CATERING.CHARGE_CODES_ADD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "COMMON.SAVE"), " ");
  }
}
function ChargeCodeListModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 17);
    \u0275\u0275element(1, "mat-spinner", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving changes to charge codes...");
    \u0275\u0275elementEnd()();
  }
}
var ChargeCodeListModalComponent = class _ChargeCodeListModalComponent {
  constructor(_state, _dialog_ref) {
    this._state = _state;
    this._dialog_ref = _dialog_ref;
    this.charge_codes = [];
    this.loading = false;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.charge_codes = (yield this._state.charge_codes.pipe(take(1)).toPromise()) || [];
    });
  }
  newCode() {
    this.charge_codes.push("");
  }
  removeCode(index) {
    this.charge_codes.splice(index, 1);
  }
  /**
   * Load CSV file and populate the code list with the contents
   * @param event File input field event
   */
  addCodesFromFile(event) {
    if (event.target) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.addEventListener("load", (evt) => {
          const list = csvToJson(evt.srcElement.result) || [];
          for (const { code, description } of list) {
            this.charge_codes.push(code);
          }
          this.charge_codes = unique(this.charge_codes);
          event.target.value = "";
        });
        reader.addEventListener("error", (_) => notifyError("Error reading file."));
      }
    }
  }
  saveChargeCodes() {
    return __async(this, null, function* () {
      this.loading = true;
      const cleaned_codes = this.charge_codes.filter((_) => _ && _.trim());
      yield this._state.saveSettings({ charge_codes: cleaned_codes });
      this._dialog_ref.close();
    });
  }
  static {
    this.\u0275fac = function ChargeCodeListModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChargeCodeListModalComponent)(\u0275\u0275directiveInject(CateringStateService), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChargeCodeListModalComponent, selectors: [["charge-code-list-modal"]], standalone: false, decls: 9, vars: 7, consts: [["load_state", ""], [1, "sticky", "top-0", "p-2", "m-2", "w-[calc(100%-1rem)]", "border-none", "z-10", "bg-base-200", "rounded"], [1, "text-xl", "font-medium", "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "overflow-auto max-h-[65vh] min-h-[20rem] flex flex-col", 4, "ngIf", "ngIfElse"], ["class", "flex items-center p-2 space-x-2 border-t border-base-200", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "overflow-auto", "max-h-[65vh]", "min-h-[20rem]", "flex", "flex-col"], [1, "flex", "items-center", "space-x-2", "w-full", "hover:bg-base-200", "px-2", "py-1"], ["appearance", "outline", 1, "flex-1", "no-subscript"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-error", "text-error", 3, "click", "matTooltip"], [1, "text-2xl"], [1, "flex", "items-center", "p-2", "space-x-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-48", "inverse", "relative"], ["type", "file", 1, "opacity-0", "absolute", "inset-0", 3, "change"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-20", "space-y-2"], ["diameter", "32"]], template: function ChargeCodeListModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, ChargeCodeListModalComponent_button_4_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ChargeCodeListModalComponent_main_5_Template, 3, 0, "main", 4)(6, ChargeCodeListModalComponent_footer_6_Template, 11, 9, "footer", 5)(7, ChargeCodeListModalComponent_ng_template_7_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r5 = \u0275\u0275reference(8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "CATERING.CHARGE_CODES_EDIT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r5);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [NgIf, MatDialogClose, MatTooltip, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, MatFormField, MatRipple, MatInput, MatProgressSpinner, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChargeCodeListModalComponent, { className: "ChargeCodeListModalComponent", filePath: "libs/catering/src/lib/charge-code-list-modal.component.ts", lineNumber: 83 });
})();

// libs/catering/src/lib/catering.module.ts
var SharedCateringModule = class _SharedCateringModule {
  static {
    this.\u0275fac = function SharedCateringModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SharedCateringModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedCateringModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      MatMenuModule,
      MatTabsModule,
      MatAutocompleteModule,
      MatDialogModule,
      MatCheckboxModule,
      MatRadioModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule,
      ComponentsModule,
      MatFormFieldModule,
      FormFieldsModule,
      MatProgressSpinnerModule,
      MatProgressBarModule
    ] });
  }
};

// apps/workplace/src/app/book/book.component.ts
function BookComponent_topbar_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
  }
}
function BookComponent_footer_menu_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer-menu", 4);
  }
}
var BookComponent = class _BookComponent {
  get hide_nav() {
    return localStorage.getItem("PlaceOS.hide_nav") === "true";
  }
  static {
    this.\u0275fac = function BookComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookComponent, selectors: [["placeos-book"]], standalone: false, decls: 5, vars: 2, consts: [[4, "ngIf"], [1, "flex-1", "flex", "sm:flex-row", "flex-col-reverse", "h-1/2"], [1, "flex", "flex-col", "flex-1", "h-1/2", "sm:h-auto", "overflow-hidden"], ["class", "z-10", 4, "ngIf"], [1, "z-10"]], template: function BookComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BookComponent_topbar_0_Template, 1, 0, "topbar", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "main", 2);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, BookComponent_footer_menu_4_Template, 1, 0, "footer-menu", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.hide_nav);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.hide_nav);
      }
    }, dependencies: [NgIf, TopbarComponent, FooterMenuComponent, RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=book.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookComponent, { className: "BookComponent", filePath: "apps/workplace/src/app/book/book.component.ts", lineNumber: 28 });
})();

// node_modules/qr-scanner/qr-scanner.min.js
var e = class _e {
  constructor(a, b, c, d, f) {
    this._legacyCanvasSize = _e.DEFAULT_CANVAS_SIZE;
    this._preferredCamera = "environment";
    this._maxScansPerSecond = 25;
    this._lastScanTimestamp = -1;
    this._destroyed = this._flashOn = this._paused = this._active = false;
    this.$video = a;
    this.$canvas = document.createElement("canvas");
    c && "object" === typeof c ? this._onDecode = b : (c || d || f ? console.warn("You're using a deprecated version of the QrScanner constructor which will be removed in the future") : console.warn("Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."), this._legacyOnDecode = b);
    b = "object" === typeof c ? c : {};
    this._onDecodeError = b.onDecodeError || ("function" === typeof c ? c : this._onDecodeError);
    this._calculateScanRegion = b.calculateScanRegion || ("function" === typeof d ? d : this._calculateScanRegion);
    this._preferredCamera = b.preferredCamera || f || this._preferredCamera;
    this._legacyCanvasSize = "number" === typeof c ? c : "number" === typeof d ? d : this._legacyCanvasSize;
    this._maxScansPerSecond = b.maxScansPerSecond || this._maxScansPerSecond;
    this._onPlay = this._onPlay.bind(this);
    this._onLoadedMetaData = this._onLoadedMetaData.bind(this);
    this._onVisibilityChange = this._onVisibilityChange.bind(this);
    this._updateOverlay = this._updateOverlay.bind(this);
    a.disablePictureInPicture = true;
    a.playsInline = true;
    a.muted = true;
    let h = false;
    a.hidden && (a.hidden = false, h = true);
    document.body.contains(a) || (document.body.appendChild(a), h = true);
    c = a.parentElement;
    if (b.highlightScanRegion || b.highlightCodeOutline) {
      d = !!b.overlay;
      this.$overlay = b.overlay || document.createElement("div");
      f = this.$overlay.style;
      f.position = "absolute";
      f.display = "none";
      f.pointerEvents = "none";
      this.$overlay.classList.add("scan-region-highlight");
      if (!d && b.highlightScanRegion) {
        this.$overlay.innerHTML = '<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';
        try {
          this.$overlay.firstElementChild.animate({
            transform: ["scale(.98)", "scale(1.01)"]
          }, {
            duration: 400,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out"
          });
        } catch (m) {
        }
        c.insertBefore(this.$overlay, this.$video.nextSibling);
      }
      b.highlightCodeOutline && (this.$overlay.insertAdjacentHTML("beforeend", '<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'), this.$codeOutlineHighlight = this.$overlay.lastElementChild);
    }
    this._scanRegion = this._calculateScanRegion(a);
    requestAnimationFrame(() => {
      let m = window.getComputedStyle(a);
      "none" === m.display && (a.style.setProperty("display", "block", "important"), h = true);
      "visible" !== m.visibility && (a.style.setProperty("visibility", "visible", "important"), h = true);
      h && (console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."), a.style.opacity = "0", a.style.width = "0", a.style.height = "0", this.$overlay && this.$overlay.parentElement && this.$overlay.parentElement.removeChild(this.$overlay), delete this.$overlay, delete this.$codeOutlineHighlight);
      this.$overlay && this._updateOverlay();
    });
    a.addEventListener("play", this._onPlay);
    a.addEventListener("loadedmetadata", this._onLoadedMetaData);
    document.addEventListener("visibilitychange", this._onVisibilityChange);
    window.addEventListener("resize", this._updateOverlay);
    this._qrEnginePromise = _e.createQrEngine();
  }
  static set WORKER_PATH(a) {
    console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.");
  }
  static hasCamera() {
    return __async(this, null, function* () {
      try {
        return !!(yield _e.listCameras(false)).length;
      } catch (a) {
        return false;
      }
    });
  }
  static listCameras(a = false) {
    return __async(this, null, function* () {
      if (!navigator.mediaDevices) return [];
      let b = () => __async(this, null, function* () {
        return (yield navigator.mediaDevices.enumerateDevices()).filter((d) => "videoinput" === d.kind);
      }), c;
      try {
        a && (yield b()).every((d) => !d.label) && (c = yield navigator.mediaDevices.getUserMedia({
          audio: false,
          video: true
        }));
      } catch (d) {
      }
      try {
        return (yield b()).map((d, f) => ({
          id: d.deviceId,
          label: d.label || (0 === f ? "Default Camera" : `Camera ${f + 1}`)
        }));
      } finally {
        c && (console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"), _e._stopVideoStream(c));
      }
    });
  }
  hasFlash() {
    return __async(this, null, function* () {
      let a;
      try {
        if (this.$video.srcObject) {
          if (!(this.$video.srcObject instanceof MediaStream)) return false;
          a = this.$video.srcObject;
        } else a = (yield this._getCameraStream()).stream;
        return "torch" in a.getVideoTracks()[0].getSettings();
      } catch (b) {
        return false;
      } finally {
        a && a !== this.$video.srcObject && (console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"), _e._stopVideoStream(a));
      }
    });
  }
  isFlashOn() {
    return this._flashOn;
  }
  toggleFlash() {
    return __async(this, null, function* () {
      this._flashOn ? yield this.turnFlashOff() : yield this.turnFlashOn();
    });
  }
  turnFlashOn() {
    return __async(this, null, function* () {
      if (!this._flashOn && !this._destroyed && (this._flashOn = true, this._active && !this._paused)) try {
        if (!(yield this.hasFlash())) throw "No flash available";
        yield this.$video.srcObject.getVideoTracks()[0].applyConstraints({
          advanced: [{
            torch: true
          }]
        });
      } catch (a) {
        throw this._flashOn = false, a;
      }
    });
  }
  turnFlashOff() {
    return __async(this, null, function* () {
      this._flashOn && (this._flashOn = false, yield this._restartVideoStream());
    });
  }
  destroy() {
    this.$video.removeEventListener("loadedmetadata", this._onLoadedMetaData);
    this.$video.removeEventListener("play", this._onPlay);
    document.removeEventListener("visibilitychange", this._onVisibilityChange);
    window.removeEventListener("resize", this._updateOverlay);
    this._destroyed = true;
    this._flashOn = false;
    this.stop();
    _e._postWorkerMessage(this._qrEnginePromise, "close");
  }
  start() {
    return __async(this, null, function* () {
      if (this._destroyed) throw Error("The QR scanner can not be started as it had been destroyed.");
      if (!this._active || this._paused) {
        if ("https:" !== window.location.protocol && console.warn("The camera stream is only accessible if the page is transferred via https."), this._active = true, !document.hidden) if (this._paused = false, this.$video.srcObject) yield this.$video.play();
        else try {
          let {
            stream: a,
            facingMode: b
          } = yield this._getCameraStream();
          !this._active || this._paused ? _e._stopVideoStream(a) : (this._setVideoMirror(b), this.$video.srcObject = a, yield this.$video.play(), this._flashOn && (this._flashOn = false, this.turnFlashOn().catch(() => {
          })));
        } catch (a) {
          if (!this._paused) throw this._active = false, a;
        }
      }
    });
  }
  stop() {
    this.pause();
    this._active = false;
  }
  pause(a = false) {
    return __async(this, null, function* () {
      this._paused = true;
      if (!this._active) return true;
      this.$video.pause();
      this.$overlay && (this.$overlay.style.display = "none");
      let b = () => {
        this.$video.srcObject instanceof MediaStream && (_e._stopVideoStream(this.$video.srcObject), this.$video.srcObject = null);
      };
      if (a) return b(), true;
      yield new Promise((c) => setTimeout(c, 300));
      if (!this._paused) return false;
      b();
      return true;
    });
  }
  setCamera(a) {
    return __async(this, null, function* () {
      a !== this._preferredCamera && (this._preferredCamera = a, yield this._restartVideoStream());
    });
  }
  static scanImage(a, b, c, d, f = false, h = false) {
    return __async(this, null, function* () {
      let m, n = false;
      b && ("scanRegion" in b || "qrEngine" in b || "canvas" in b || "disallowCanvasResizing" in b || "alsoTryWithoutScanRegion" in b || "returnDetailedScanResult" in b) ? (m = b.scanRegion, c = b.qrEngine, d = b.canvas, f = b.disallowCanvasResizing || false, h = b.alsoTryWithoutScanRegion || false, n = true) : b || c || d || f || h ? console.warn("You're using a deprecated api for scanImage which will be removed in the future.") : console.warn("Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true.");
      b = !!c;
      try {
        let p, k;
        [c, p] = yield Promise.all([c || _e.createQrEngine(), _e._loadImage(a)]);
        [d, k] = _e._drawToCanvas(p, m, d, f);
        let q;
        if (c instanceof Worker) {
          let g = c;
          b || _e._postWorkerMessageSync(g, "inversionMode", "both");
          q = yield new Promise((l, v) => {
            let w, u, r, y = -1;
            u = (t) => {
              t.data.id === y && (g.removeEventListener("message", u), g.removeEventListener("error", r), clearTimeout(w), null !== t.data.data ? l({
                data: t.data.data,
                cornerPoints: _e._convertPoints(t.data.cornerPoints, m)
              }) : v(_e.NO_QR_CODE_FOUND));
            };
            r = (t) => {
              g.removeEventListener("message", u);
              g.removeEventListener("error", r);
              clearTimeout(w);
              v("Scanner error: " + (t ? t.message || t : "Unknown Error"));
            };
            g.addEventListener("message", u);
            g.addEventListener("error", r);
            w = setTimeout(() => r("timeout"), 1e4);
            let x = k.getImageData(0, 0, d.width, d.height);
            y = _e._postWorkerMessageSync(g, "decode", x, [x.data.buffer]);
          });
        } else q = yield Promise.race([new Promise((g, l) => window.setTimeout(() => l("Scanner error: timeout"), 1e4)), (() => __async(this, null, function* () {
          try {
            var [g] = yield c.detect(d);
            if (!g) throw _e.NO_QR_CODE_FOUND;
            return {
              data: g.rawValue,
              cornerPoints: _e._convertPoints(g.cornerPoints, m)
            };
          } catch (l) {
            g = l.message || l;
            if (/not implemented|service unavailable/.test(g)) return _e._disableBarcodeDetector = true, _e.scanImage(a, {
              scanRegion: m,
              canvas: d,
              disallowCanvasResizing: f,
              alsoTryWithoutScanRegion: h
            });
            throw `Scanner error: ${g}`;
          }
        }))()]);
        return n ? q : q.data;
      } catch (p) {
        if (!m || !h) throw p;
        let k = yield _e.scanImage(a, {
          qrEngine: c,
          canvas: d,
          disallowCanvasResizing: f
        });
        return n ? k : k.data;
      } finally {
        b || _e._postWorkerMessage(c, "close");
      }
    });
  }
  setGrayscaleWeights(a, b, c, d = true) {
    _e._postWorkerMessage(this._qrEnginePromise, "grayscaleWeights", {
      red: a,
      green: b,
      blue: c,
      useIntegerApproximation: d
    });
  }
  setInversionMode(a) {
    _e._postWorkerMessage(this._qrEnginePromise, "inversionMode", a);
  }
  static createQrEngine(a) {
    return __async(this, null, function* () {
      a && console.warn("Specifying a worker path is not required and not supported anymore.");
      a = () => import("./qr-scanner-worker.min-H3WCJTOX.js").then((c) => c.createWorker());
      if (!(!_e._disableBarcodeDetector && "BarcodeDetector" in window && BarcodeDetector.getSupportedFormats && (yield BarcodeDetector.getSupportedFormats()).includes("qr_code"))) return a();
      let b = navigator.userAgentData;
      return b && b.brands.some(({
        brand: c
      }) => /Chromium/i.test(c)) && /mac ?OS/i.test(b.platform) && (yield b.getHighEntropyValues(["architecture", "platformVersion"]).then(({
        architecture: c,
        platformVersion: d
      }) => /arm/i.test(c || "arm") && 13 <= parseInt(d || "13")).catch(() => true)) ? a() : new BarcodeDetector({
        formats: ["qr_code"]
      });
    });
  }
  _onPlay() {
    this._scanRegion = this._calculateScanRegion(this.$video);
    this._updateOverlay();
    this.$overlay && (this.$overlay.style.display = "");
    this._scanFrame();
  }
  _onLoadedMetaData() {
    this._scanRegion = this._calculateScanRegion(this.$video);
    this._updateOverlay();
  }
  _onVisibilityChange() {
    document.hidden ? this.pause() : this._active && this.start();
  }
  _calculateScanRegion(a) {
    let b = Math.round(2 / 3 * Math.min(a.videoWidth, a.videoHeight));
    return {
      x: Math.round((a.videoWidth - b) / 2),
      y: Math.round((a.videoHeight - b) / 2),
      width: b,
      height: b,
      downScaledWidth: this._legacyCanvasSize,
      downScaledHeight: this._legacyCanvasSize
    };
  }
  _updateOverlay() {
    requestAnimationFrame(() => {
      if (this.$overlay) {
        var a = this.$video, b = a.videoWidth, c = a.videoHeight, d = a.offsetWidth, f = a.offsetHeight, h = a.offsetLeft, m = a.offsetTop, n = window.getComputedStyle(a), p = n.objectFit, k = b / c, q = d / f;
        switch (p) {
          case "none":
            var g = b;
            var l = c;
            break;
          case "fill":
            g = d;
            l = f;
            break;
          default:
            ("cover" === p ? k > q : k < q) ? (l = f, g = l * k) : (g = d, l = g / k), "scale-down" === p && (g = Math.min(g, b), l = Math.min(l, c));
        }
        var [v, w] = n.objectPosition.split(" ").map((r, y) => {
          const x = parseFloat(r);
          return r.endsWith("%") ? (y ? f - l : d - g) * x / 100 : x;
        });
        n = this._scanRegion.width || b;
        q = this._scanRegion.height || c;
        p = this._scanRegion.x || 0;
        var u = this._scanRegion.y || 0;
        k = this.$overlay.style;
        k.width = `${n / b * g}px`;
        k.height = `${q / c * l}px`;
        k.top = `${m + w + u / c * l}px`;
        c = /scaleX\(-1\)/.test(a.style.transform);
        k.left = `${h + (c ? d - v - g : v) + (c ? b - p - n : p) / b * g}px`;
        k.transform = a.style.transform;
      }
    });
  }
  static _convertPoints(a, b) {
    if (!b) return a;
    let c = b.x || 0, d = b.y || 0, f = b.width && b.downScaledWidth ? b.width / b.downScaledWidth : 1;
    b = b.height && b.downScaledHeight ? b.height / b.downScaledHeight : 1;
    for (let h of a) h.x = h.x * f + c, h.y = h.y * b + d;
    return a;
  }
  _scanFrame() {
    !this._active || this.$video.paused || this.$video.ended || ("requestVideoFrameCallback" in this.$video ? this.$video.requestVideoFrameCallback.bind(this.$video) : requestAnimationFrame)(() => __async(this, null, function* () {
      if (!(1 >= this.$video.readyState)) {
        var a = Date.now() - this._lastScanTimestamp, b = 1e3 / this._maxScansPerSecond;
        a < b && (yield new Promise((d) => setTimeout(d, b - a)));
        this._lastScanTimestamp = Date.now();
        try {
          var c = yield _e.scanImage(this.$video, {
            scanRegion: this._scanRegion,
            qrEngine: this._qrEnginePromise,
            canvas: this.$canvas
          });
        } catch (d) {
          if (!this._active) return;
          this._onDecodeError(d);
        }
        !_e._disableBarcodeDetector || (yield this._qrEnginePromise) instanceof Worker || (this._qrEnginePromise = _e.createQrEngine());
        c ? (this._onDecode ? this._onDecode(c) : this._legacyOnDecode && this._legacyOnDecode(c.data), this.$codeOutlineHighlight && (clearTimeout(this._codeOutlineHighlightRemovalTimeout), this._codeOutlineHighlightRemovalTimeout = void 0, this.$codeOutlineHighlight.setAttribute("viewBox", `${this._scanRegion.x || 0} ${this._scanRegion.y || 0} ${this._scanRegion.width || this.$video.videoWidth} ${this._scanRegion.height || this.$video.videoHeight}`), this.$codeOutlineHighlight.firstElementChild.setAttribute("points", c.cornerPoints.map(({
          x: d,
          y: f
        }) => `${d},${f}`).join(" ")), this.$codeOutlineHighlight.style.display = "")) : this.$codeOutlineHighlight && !this._codeOutlineHighlightRemovalTimeout && (this._codeOutlineHighlightRemovalTimeout = setTimeout(() => this.$codeOutlineHighlight.style.display = "none", 100));
      }
      this._scanFrame();
    }));
  }
  _onDecodeError(a) {
    a !== _e.NO_QR_CODE_FOUND && console.log(a);
  }
  _getCameraStream() {
    return __async(this, null, function* () {
      if (!navigator.mediaDevices) throw "Camera not found.";
      let a = /^(environment|user)$/.test(this._preferredCamera) ? "facingMode" : "deviceId", b = [{
        width: {
          min: 1024
        }
      }, {
        width: {
          min: 768
        }
      }, {}], c = b.map((d) => Object.assign({}, d, {
        [a]: {
          exact: this._preferredCamera
        }
      }));
      for (let d of [...c, ...b]) try {
        let f = yield navigator.mediaDevices.getUserMedia({
          video: d,
          audio: false
        }), h = this._getFacingMode(f) || (d.facingMode ? this._preferredCamera : "environment" === this._preferredCamera ? "user" : "environment");
        return {
          stream: f,
          facingMode: h
        };
      } catch (f) {
      }
      throw "Camera not found.";
    });
  }
  _restartVideoStream() {
    return __async(this, null, function* () {
      let a = this._paused;
      (yield this.pause(true)) && !a && this._active && (yield this.start());
    });
  }
  static _stopVideoStream(a) {
    for (let b of a.getTracks()) b.stop(), a.removeTrack(b);
  }
  _setVideoMirror(a) {
    this.$video.style.transform = "scaleX(" + ("user" === a ? -1 : 1) + ")";
  }
  _getFacingMode(a) {
    return (a = a.getVideoTracks()[0]) ? /rear|back|environment/i.test(a.label) ? "environment" : /front|user|face/i.test(a.label) ? "user" : null : null;
  }
  static _drawToCanvas(a, b, c, d = false) {
    c = c || document.createElement("canvas");
    let f = b && b.x ? b.x : 0, h = b && b.y ? b.y : 0, m = b && b.width ? b.width : a.videoWidth || a.width, n = b && b.height ? b.height : a.videoHeight || a.height;
    d || (d = b && b.downScaledWidth ? b.downScaledWidth : m, b = b && b.downScaledHeight ? b.downScaledHeight : n, c.width !== d && (c.width = d), c.height !== b && (c.height = b));
    b = c.getContext("2d", {
      alpha: false
    });
    b.imageSmoothingEnabled = false;
    b.drawImage(a, f, h, m, n, 0, 0, c.width, c.height);
    return [c, b];
  }
  static _loadImage(a) {
    return __async(this, null, function* () {
      if (a instanceof Image) return yield _e._awaitImageLoad(a), a;
      if (a instanceof HTMLVideoElement || a instanceof HTMLCanvasElement || a instanceof SVGImageElement || "OffscreenCanvas" in window && a instanceof OffscreenCanvas || "ImageBitmap" in window && a instanceof ImageBitmap) return a;
      if (a instanceof File || a instanceof Blob || a instanceof URL || "string" === typeof a) {
        let b = new Image();
        b.src = a instanceof File || a instanceof Blob ? URL.createObjectURL(a) : a.toString();
        try {
          return yield _e._awaitImageLoad(b), b;
        } finally {
          (a instanceof File || a instanceof Blob) && URL.revokeObjectURL(b.src);
        }
      } else throw "Unsupported image type.";
    });
  }
  static _awaitImageLoad(a) {
    return __async(this, null, function* () {
      a.complete && 0 !== a.naturalWidth || (yield new Promise((b, c) => {
        let d = (f) => {
          a.removeEventListener("load", d);
          a.removeEventListener("error", d);
          f instanceof ErrorEvent ? c("Image load error") : b();
        };
        a.addEventListener("load", d);
        a.addEventListener("error", d);
      }));
    });
  }
  static _postWorkerMessage(a, b, c, d) {
    return __async(this, null, function* () {
      return _e._postWorkerMessageSync(yield a, b, c, d);
    });
  }
  static _postWorkerMessageSync(a, b, c, d) {
    if (!(a instanceof Worker)) return -1;
    let f = _e._workerMessageId++;
    a.postMessage({
      id: f,
      type: b,
      data: c
    }, d);
    return f;
  }
};
e.DEFAULT_CANVAS_SIZE = 400;
e.NO_QR_CODE_FOUND = "No QR code found";
e._disableBarcodeDetector = false;
e._workerMessageId = 0;
var qr_scanner_min_default = e;

// apps/workplace/src/app/book/code-flow.component.ts
var _c09 = ["video"];
function BookCodeFlowComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h2", 14);
    \u0275\u0275text(2, " Scan QR Code ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4, " Scan the QR code outisde a PlaceOS room or space. ");
    \u0275\u0275elementEnd()();
  }
}
function BookCodeFlowComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h2", 14);
    \u0275\u0275text(2, " Enter Room ID ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4, " Enter the room ID number outisde a PlaceOS room or space. ");
    \u0275\u0275elementEnd()();
  }
}
function BookCodeFlowComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "video", 4, 1);
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275template(4, BookCodeFlowComponent_div_0_div_4_Template, 5, 0, "div", 6)(5, BookCodeFlowComponent_div_0_div_5_Template, 5, 0, "div", 6);
    \u0275\u0275elementStart(6, "div", 7)(7, "div", 8)(8, "span", 9);
    \u0275\u0275text(9, "Booking ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function BookCodeFlowComponent_div_0_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.room_code, $event) || (ctx_r1.room_code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 11)(12, "button", 12);
    \u0275\u0275listener("click", function BookCodeFlowComponent_div_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.is_scanning = true);
    });
    \u0275\u0275text(13, " Scan Code ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 12);
    \u0275\u0275listener("click", function BookCodeFlowComponent_div_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.is_scanning = false);
    });
    \u0275\u0275text(15, " Enter Code ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.is_scanning);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.is_scanning);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("input", !ctx_r1.is_scanning);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.room_code);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("flex-1 text-black border-none w-40 " + (ctx_r1.is_scanning ? "bg-base-100" : "bg-transparent hover:bg-base-100 bg-opacity-50"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("flex-1 text-black border-none w-40 " + (!ctx_r1.is_scanning ? "bg-base-100" : "bg-transparent hover:bg-base-100 bg-opacity-50"));
  }
}
function BookCodeFlowComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "mat-spinner", 17);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Checking in booking...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
var BookCodeFlowComponent = class _BookCodeFlowComponent extends AsyncHandler {
  constructor(_router, _route, _event_form, _booking_form) {
    super();
    this._router = _router;
    this._route = _route;
    this._event_form = _event_form;
    this._booking_form = _booking_form;
    this.menu = new EventEmitter(false);
    this.is_scanning = true;
    this.loading = false;
  }
  ngOnDestroy() {
    if (this._video_el?.nativeElement?.srcObject) {
      this._video_el.nativeElement.srcObject.getTracks().forEach((track) => track?.stop());
    }
    this._qr_scanner?.stop();
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("asset_id"))
        this._checkinBooking(params.get("asset_id"));
      if (params.has("space_id"))
        this._checkinEvent(params.get("space_id"), params.get("email"));
    }));
  }
  ngAfterViewInit() {
    if (!navigator.mediaDevices?.getUserMedia || this.loading)
      return;
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => this._video_el.nativeElement.srcObject = stream).catch((e2) => console.error("Unable to fetch media devices!", e2));
    this._qr_scanner = new qr_scanner_min_default(this._video_el.nativeElement, (r) => this.handleQrCode(r));
    this._qr_scanner.start();
  }
  handleQrCode(result) {
    const url = result;
    const hashindex = url.indexOf("/#/");
    if (hashindex > 0) {
      const regex = /[?&]([^=#]+)=([^&#]*)/g;
      const params = {};
      let match;
      while (match = regex.exec(url)) {
        params[match[1]] = match[2];
      }
      this._router.navigate([url.split("/#")[1].split("?")[0]], params);
    }
  }
  _checkinBooking(asset_id, type = "desk") {
    return __async(this, null, function* () {
      this.loading = true;
      let bookings = yield queryBookings({
        period_start: getUnixTime(Date.now()),
        period_end: getUnixTime(addMinutes(Date.now(), 5)),
        type,
        email: currentUser().email
      }).toPromise().catch((_) => []);
      const item = bookings.find((_) => _.asset_id === asset_id);
      if (item) {
        yield checkinBooking(item.id, true).toPromise().catch((_) => {
          notifyError(`Unable to checkin booking with resource "${asset_id}"`);
          this.loading = false;
          throw _;
        });
        this._router.navigate(["/book", "code", "success"]);
      } else {
        bookings = yield queryBookings({
          period_start: getUnixTime(Date.now()),
          period_end: getUnixTime(endOfDay(Date.now())),
          type
        }).toPromise().catch((_) => []);
        let item2 = bookings.find((_) => _.asset_id === asset_id);
        if (item2) {
          this._router.navigate(["/book", "code", "error"], {
            queryParams: { type: "not_started", asset_id }
          });
          return;
        }
        bookings = yield queryBookings({
          period_start: getUnixTime(Date.now()),
          period_end: getUnixTime(addMinutes(Date.now(), 5)),
          type
        }).toPromise().catch((_) => []);
        item2 = bookings.find((_) => _.asset_id === asset_id);
        if (item2) {
          this._router.navigate(["/book", "code", "error"], {
            queryParams: { type: "wrong_resource", asset_id }
          });
          return;
        }
        this._router.navigate(["/book", "code", "error"], {
          queryParams: { type: "no_booking", asset_id }
        });
        this._booking_form.newForm(new Booking({ asset_id, type }));
        this._booking_form.setOptions({ type });
      }
      this.loading = false;
    });
  }
  _checkinEvent(space_id, email) {
    return __async(this, null, function* () {
      if (!email)
        email = currentUser().email;
      this.loading = true;
      const bookings = yield queryEvents({
        period_start: getUnixTime(Date.now()),
        period_end: getUnixTime(Date.now() + 5 * 60 * 1e3)
      }).toPromise().catch((_) => []);
      const item = bookings.find((_) => _.resources.find((s) => s.id === space_id || s.email === space_id));
      if (item) {
        yield checkinEventGuest(item.id, email, true).toPromise().catch((_) => {
          notifyError(`Unable to checkin event with resource "${space_id}"`);
          this.loading = false;
          throw _;
        });
        this._router.navigate(["/book", "code", "success"]);
        this.loading = false;
      } else {
        const space = yield showSystem(space_id).toPromise();
        if (space) {
          this._event_form.newForm(new CalendarEvent({ system: space }));
        }
        this._router.navigate(["/book", "meeting"]);
      }
      this.loading = false;
    });
  }
  static {
    this.\u0275fac = function BookCodeFlowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookCodeFlowComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(BookingFormService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookCodeFlowComponent, selectors: [["book-code-flow"]], viewQuery: function BookCodeFlowComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c09, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._video_el = _t.first);
      }
    }, outputs: { menu: "menu" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [["load_state", ""], ["video", ""], ["class", "flex-1 overflow-hidden flex items-center justify-center bg-neutral relative", 4, "ngIf", "ngIfElse"], [1, "flex-1", "overflow-hidden", "flex", "items-center", "justify-center", "bg-neutral", "relative"], ["id", "video", 1, "min-w-full", "min-h-full", "object-cover"], [1, "absolute", "text-white", "text-center", "inset-0", "flex", "flex-col", "items-center", "justify-center"], ["class", "flex flex-col z-10 justify-end items-center relative", 4, "ngIf"], [1, "flex", "items-center", "justify-center"], ["box", "", 1, "rounded-2xl", "h-64", "w-64", "transition-all", "flex", "items-center", "justify-center", "p-8", "m-8", "space-x-2"], [1, "uppercase"], ["matInput", "", "name", "booking-id", "placeholder", "e.g. 12102910", 1, "border-none", "bg-none", "w-full", "text-3xl", "text-left", 3, "ngModelChange", "ngModel"], [1, "m-4", "p-2", "flex", "items-center", "space-x-2", "bg-base-100", "bg-opacity-50", "rounded"], ["matRipple", "", 3, "click"], [1, "flex", "flex-col", "z-10", "justify-end", "items-center", "relative"], [1, "text-3xl", "mb-1", "uppercase", "subpixel-antialiased"], [1, "mb-4"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]], template: function BookCodeFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BookCodeFlowComponent_div_0_Template, 16, 9, "div", 2)(1, BookCodeFlowComponent_ng_template_1_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r3 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
      }
    }, dependencies: [NgIf, MatRipple, MatInput, MatProgressSpinner, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #f0f0f0;\n}\n[box][_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.5);\n}\n[box][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: none;\n}\n[box].input[_ngcontent-%COMP%] {\n  width: 32rem !important;\n  max-width: calc(100% - 2rem) !important;\n  padding: 1rem !important;\n  height: 4rem !important;\n  color: black !important;\n  background: white;\n  box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.8);\n}\n[box].input[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: initial;\n}\n[box][_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--heading-font);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n/*# sourceMappingURL=code-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookCodeFlowComponent, { className: "BookCodeFlowComponent", filePath: "apps/workplace/src/app/book/code-flow.component.ts", lineNumber: 165 });
})();

// apps/workplace/src/app/book/desk-flow/detailed-form.component.ts
var _c010 = () => ({ standalone: true });
var _c16 = () => [];
function DeskFlowDetailedFormComponent_form_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-button-toggle-group", 12);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function DeskFlowDetailedFormComponent_form_0_div_1_Template_mat_button_toggle_group_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ group: $event === "group" }));
    });
    \u0275\u0275elementStart(3, "mat-button-toggle", 13);
    \u0275\u0275text(4, " Single ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-button-toggle", 14);
    \u0275\u0275text(6, " Group ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ((tmp_2_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.options)) == null ? null : tmp_2_0.group) ? "group" : "single")("ngModelOptions", \u0275\u0275pureFunction0(4, _c010));
  }
}
function DeskFlowDetailedFormComponent_form_0_div_8_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
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
function DeskFlowDetailedFormComponent_form_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label");
    \u0275\u0275text(2, "Building");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 15)(4, "mat-select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function DeskFlowDetailedFormComponent_form_0_div_8_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.building, $event) || (ctx_r1.building = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DeskFlowDetailedFormComponent_form_0_div_8_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event == null ? null : $event.id }));
    });
    \u0275\u0275template(5, DeskFlowDetailedFormComponent_form_0_div_8_mat_option_5_Template, 2, 2, "mat-option", 17);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.building);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c010));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 3, ctx_r1.buildings));
  }
}
function DeskFlowDetailedFormComponent_form_0_div_10_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
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
function DeskFlowDetailedFormComponent_form_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label");
    \u0275\u0275text(2, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 15)(4, "mat-select", 19);
    \u0275\u0275listener("ngModelChange", function DeskFlowDetailedFormComponent_form_0_div_10_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_id: $event || ctx_r1.building.id }));
    });
    \u0275\u0275template(5, DeskFlowDetailedFormComponent_form_0_div_10_mat_option_5_Template, 2, 2, "mat-option", 17);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.building)("ngModelOptions", \u0275\u0275pureFunction0(5, _c010));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 3, ctx_r1.levels));
  }
}
function DeskFlowDetailedFormComponent_form_0_div_12_mat_checkbox_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 25);
    \u0275\u0275text(1, " All Day ");
    \u0275\u0275elementEnd();
  }
}
function DeskFlowDetailedFormComponent_form_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 20)(2, "label");
    \u0275\u0275text(3, "Start Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-time-field", 21);
    \u0275\u0275listener("ngModelChange", function DeskFlowDetailedFormComponent_form_0_div_12_Template_a_time_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 22)(6, "label");
    \u0275\u0275text(7, "End Time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "a-duration-field", 23);
    \u0275\u0275template(9, DeskFlowDetailedFormComponent_form_0_div_12_mat_checkbox_9_Template, 2, 0, "mat-checkbox", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(8, _c010));
    \u0275\u0275advance(4);
    \u0275\u0275property("time", (tmp_4_0 = ctx_r1.form.get("date")) == null ? null : tmp_4_0.value)("max", 10 * 60)("min", 60)("step", 60)("disabled", ctx_r1.form.value.all_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allow_all_day);
  }
}
function DeskFlowDetailedFormComponent_form_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "label");
    \u0275\u0275text(2, "Host");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "a-user-search-field", 27);
    \u0275\u0275elementEnd();
  }
}
function DeskFlowDetailedFormComponent_form_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "label");
    \u0275\u0275text(2, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 29);
    \u0275\u0275element(4, "input", 30);
    \u0275\u0275elementEnd()();
  }
}
function DeskFlowDetailedFormComponent_form_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "label");
    \u0275\u0275text(2, "Group Members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a-user-list-field", 31);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function DeskFlowDetailedFormComponent_form_0_div_15_Template_a_user_list_field_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ members: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("simple", true)("ngModel", ((tmp_3_0 = \u0275\u0275pipeBind1(4, 3, ctx_r1.options)) == null ? null : tmp_3_0.members) || \u0275\u0275pureFunction0(5, _c16))("ngModelOptions", \u0275\u0275pureFunction0(6, _c010));
  }
}
function DeskFlowDetailedFormComponent_form_0_div_17_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    \u0275\u0275property("value", opt_r10);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r10);
  }
}
function DeskFlowDetailedFormComponent_form_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 20)(2, "label");
    \u0275\u0275text(3, "Recurrence Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15)(5, "mat-select", 32);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("ngModelChange", function DeskFlowDetailedFormComponent_form_0_div_17_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ pattern: $event }));
    });
    \u0275\u0275elementStart(7, "mat-option", 33);
    \u0275\u0275text(8, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, DeskFlowDetailedFormComponent_form_0_div_17_mat_option_9_Template, 3, 2, "mat-option", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 20)(11, "label");
    \u0275\u0275text(12, "Recurrence End");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a-date-field", 34);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275pipe(15, "async");
    \u0275\u0275pipe(16, "async");
    \u0275\u0275listener("ngModelChange", function DeskFlowDetailedFormComponent_form_0_div_17_Template_a_date_field_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ recurr_end: $event }));
    });
    \u0275\u0275text(17, " Date and time must be in the future ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(6, 7, ctx_r1.options)) == null ? null : tmp_2_0.recurrence_pattern)("ngModelOptions", \u0275\u0275pureFunction0(15, _c010));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.recurrence_options);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !((tmp_5_0 = \u0275\u0275pipeBind1(14, 9, ctx_r1.options)) == null ? null : tmp_5_0.pattern) || ((tmp_5_0 = \u0275\u0275pipeBind1(15, 11, ctx_r1.options)) == null ? null : tmp_5_0.pattern) === "none")("ngModel", ((tmp_6_0 = \u0275\u0275pipeBind1(16, 13, ctx_r1.options)) == null ? null : tmp_6_0.recurr_end) || (ctx_r1.form == null ? null : ctx_r1.form.value == null ? null : ctx_r1.form.value.date))("ngModelOptions", \u0275\u0275pureFunction0(16, _c010))("to", ctx_r1.book_until);
  }
}
function DeskFlowDetailedFormComponent_form_0_div_18_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r12 = ctx.$implicit;
    \u0275\u0275property("value", opt_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r12, " ");
  }
}
function DeskFlowDetailedFormComponent_form_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "label");
    \u0275\u0275text(2, "Desk Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 29)(4, "mat-select", 36);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275listener("ngModelChange", function DeskFlowDetailedFormComponent_form_0_div_18_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ features: $event || [] }));
    });
    \u0275\u0275template(6, DeskFlowDetailedFormComponent_form_0_div_18_mat_option_6_Template, 2, 2, "mat-option", 37);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ((tmp_2_0 = \u0275\u0275pipeBind1(5, 3, ctx_r1.options)) == null ? null : tmp_2_0.features) || \u0275\u0275pureFunction0(7, _c16))("ngModelOptions", \u0275\u0275pureFunction0(8, _c010));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(7, 5, ctx_r1.features));
  }
}
function DeskFlowDetailedFormComponent_form_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "mat-checkbox", 21);
    \u0275\u0275listener("ngModelChange", function DeskFlowDetailedFormComponent_form_0_div_20_Template_mat_checkbox_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ secondary_resource: $event ? "locker" : "" }));
    });
    \u0275\u0275text(2, " Require locker ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", !!ctx_r1.form.value.secondary_resource)("ngModelOptions", \u0275\u0275pureFunction0(2, _c010));
  }
}
function DeskFlowDetailedFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275template(1, DeskFlowDetailedFormComponent_form_0_div_1_Template, 7, 5, "div", 2);
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "label");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a-date-field", 5);
    \u0275\u0275text(7, " Date and time must be in the future ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, DeskFlowDetailedFormComponent_form_0_div_8_Template, 7, 6, "div", 6);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275template(10, DeskFlowDetailedFormComponent_form_0_div_10_Template, 7, 6, "div", 6);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, DeskFlowDetailedFormComponent_form_0_div_12_Template, 10, 9, "div", 7)(13, DeskFlowDetailedFormComponent_form_0_div_13_Template, 4, 0, "div", 8)(14, DeskFlowDetailedFormComponent_form_0_div_14_Template, 5, 0, "div", 9)(15, DeskFlowDetailedFormComponent_form_0_div_15_Template, 5, 7, "div", 9);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275template(17, DeskFlowDetailedFormComponent_form_0_div_17_Template, 18, 17, "div", 7)(18, DeskFlowDetailedFormComponent_form_0_div_18_Template, 8, 9, "div", 9);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275template(20, DeskFlowDetailedFormComponent_form_0_div_20_Template, 3, 3, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_9_0;
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allow_groups);
    \u0275\u0275advance(5);
    \u0275\u0275property("to", ctx_r1.book_until);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_4_0 = \u0275\u0275pipeBind1(9, 12, ctx_r1.buildings)) == null ? null : tmp_4_0.length) > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_5_0 = \u0275\u0275pipeBind1(11, 14, ctx_r1.levels)) == null ? null : tmp_5_0.length) > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.allow_time_changes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.can_book_for_others);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.needs_reason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_9_0 = \u0275\u0275pipeBind1(16, 16, ctx_r1.options)) == null ? null : tmp_9_0.group);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.can_recurr);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_11_0 = \u0275\u0275pipeBind1(19, 18, ctx_r1.features)) == null ? null : tmp_11_0.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.can_book_lockers);
  }
}
var DeskFlowDetailedFormComponent = class _DeskFlowDetailedFormComponent {
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get can_book_lockers() {
    return this._settings.get("app.desks.can_book_lockers");
  }
  get can_book_for_others() {
    return this._settings.get("app.desks.can_book_for_others");
  }
  get can_recurr() {
    return this._settings.get("app.desks.recurrence_allowed");
  }
  get allow_groups() {
    return this._settings.get("app.desks.allow_groups");
  }
  get needs_reason() {
    return this._settings.get("app.desks.needs_reason") === true;
  }
  get allow_time_changes() {
    return !!this._settings.get("app.desks.allow_time_changes");
  }
  get allow_all_day() {
    return this.allow_time_changes && !!this._settings.get("app.desks.allow_all_day");
  }
  get book_until() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.desks.available_period") || 90));
  }
  constructor(_state, _org, _settings) {
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.buildings = this._org.building_list;
    this.levels = this._org.active_levels;
    this.options = this._state.options;
    this.features = this._state.features;
    this.recurrence_options = ["daily", "weekly", "monthly"];
    this.setOptions = (o) => this._state.setOptions(o);
  }
  static {
    this.\u0275fac = function DeskFlowDetailedFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskFlowDetailedFormComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFlowDetailedFormComponent, selectors: [["detailed-book-desks-form"]], inputs: { form: "form" }, standalone: false, decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["class", "w-[640px] max-w-[calc(100%-2rem)] mx-auto mb-4", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "space-x-0", "sm:space-x-2", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto"], [1, "flex", "flex-col", "flex-1", "w-full", "sm:w-1/4"], ["formControlName", "date", 3, "to"], ["class", "flex flex-col flex-1 w-full sm:w-1/4", 4, "ngIf"], ["class", "flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto", 4, "ngIf"], ["class", "flex flex-col w-[640px] max-w-[calc(100%-2rem)] mx-auto", 4, "ngIf"], ["class", "flex flex-col flex-1 w-[640px] max-w-[calc(100%-2rem)] mx-auto", 4, "ngIf"], ["class", "flex flex-col flex-1 w-[640px] max-w-[calc(100%-2rem)] mx-auto mb-4", 4, "ngIf"], [1, "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto", "mb-4"], [1, "w-full", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "single", 1, "w-1/2"], ["value", "group", 1, "w-1/2"], ["appearance", "outline"], ["placeholder", "Select building", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["placeholder", "Any Level", "ngModel", "", 3, "ngModelChange", "disabled", "ngModelOptions"], [1, "flex", "flex-col", "flex-1", "w-full", "sm:w-1/3"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "flex-col", "flex-1", "w-full", "sm:w-1/3", "relative"], ["formControlName", "duration", 3, "time", "max", "min", "step", "disabled"], ["formControlName", "all_day", "class", "absolute top-0 right-0", 4, "ngIf"], ["formControlName", "all_day", 1, "absolute", "top-0", "right-0"], [1, "flex", "flex-col", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto"], ["formControlName", "user", 1, "mb-4"], [1, "flex", "flex-col", "flex-1", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "description", "placeholder", "Reason for booking..."], [3, "ngModelChange", "simple", "ngModel", "ngModelOptions"], ["placeholder", "None", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "none"], [3, "ngModelChange", "disabled", "ngModel", "ngModelOptions", "to"], [1, "capitalize"], ["multiple", "", "placeholder", "Any Feature", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "capitalize", 3, "value", 4, "ngFor", "ngForOf"], [1, "capitalize", 3, "value"], [1, "flex", "flex-col", "flex-1", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto", "mb-4"]], template: function DeskFlowDetailedFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DeskFlowDetailedFormComponent_form_0_Template, 21, 20, "form", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [NgForOf, NgIf, MatOption, MatFormField, MatSelect, MatInput, MatCheckbox, MatButtonToggleGroup, MatButtonToggle, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, UserListFieldComponent, UserSearchFieldComponent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFlowDetailedFormComponent, { className: "DeskFlowDetailedFormComponent", filePath: "apps/workplace/src/app/book/desk-flow/detailed-form.component.ts", lineNumber: 255 });
})();

// apps/workplace/src/app/book/desk-flow/form.component.ts
function DeskFlowFormComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function DeskFlowFormComponent_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.findDesk());
    });
    \u0275\u0275elementStart(1, "div", 7)(2, "app-icon", 8);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.is_edit ? "Update Desk" : "Find Desk");
  }
}
function DeskFlowFormComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function DeskFlowFormComponent_ng_template_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.allocateDesk());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.is_edit ? "Update Desk" : "Book Desk", " ");
  }
}
var DeskFlowFormComponent = class _DeskFlowFormComponent {
  get is_edit() {
    return !!this.form?.get("id")?.value;
  }
  get auto_allocation() {
    return !!this._settings.get("app.desks.auto_allocation");
  }
  get form() {
    return this._state.form;
  }
  constructor(_state, _router, _org, _settings) {
    this._state = _state;
    this._router = _router;
    this._org = _org;
    this._settings = _settings;
    this.time = 0;
    this.level = "";
    this.quick_times = [
      { name: "Now", value: 0 },
      {
        name: "Tomorrow",
        value: setHours(addDays(/* @__PURE__ */ new Date(), 1), 9).valueOf()
      }
    ];
    this.levels = [];
    this.clearForm = () => {
      this.time = 0;
      this.level = this._org.building.id;
      this._state.clearForm();
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _));
      yield this._org.active_levels.pipe(first((_) => _?.length > 0));
      this.level = this._org.building?.id;
      this.levels = [
        { id: this._org.building?.id, name: "Any Level" },
        ...this._org.levelsForBuilding(this._org.building)
      ];
    });
  }
  quickBook() {
    this.form.patchValue({
      date: (this.time < 24 * 60 ? addMinutes(roundToNearestMinutes(/* @__PURE__ */ new Date(), { nearestTo: 5 }), this.time) : setHours(addDays(/* @__PURE__ */ new Date(), 1), 8)).valueOf(),
      title: "Ad-hoc Desk Booking"
    });
    this.findDesk();
  }
  findDesk() {
    this.form.markAllAsTouched();
    this.form.patchValue({ asset_id: " " });
    if (!this.form.valid)
      return;
    this.form.patchValue({ asset_id: "" });
    this._router.navigate(["/book", "desks", "map"]);
  }
  allocateDesk() {
    return __async(this, null, function* () {
      this.form.markAllAsTouched();
      this.form.patchValue({ asset_id: " " });
      if (!this.form.valid)
        return notifyError(`Some fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
      const settings = this._settings.get("app.departments") || {
        "*": {
          level: this._org.levelsForBuilding()[0]?.id,
          centered_at: { x: 0.5, y: 0.5 }
        }
      };
      const group = currentUser().groups.find((_) => _ in settings) ?? "*";
      if (!settings[group]) {
        this._router.navigate(["/book", "desks", "map"]);
        return;
      }
      const { level, centered_at } = settings[group];
      const lvl = this._org.levelWithID([level]);
      if (!lvl) {
        this._router.navigate(["/book", "desks", "map"]);
        return;
      }
      const desk_list = yield this._state.available_resources.pipe(take(1)).toPromise();
      const desk_id = level.map_id ? yield findNearbyFeature(lvl.map_id, centered_at, desk_list.map((_) => _?.map_id || _?.id || "")) : desk_list[randomInt(desk_list.length)].id;
      const desk = desk_list.find((_) => _.map_id === desk_id || _.id === desk_id);
      if (!desk) {
        this._router.navigate(["/book", "desks", "map"]);
        return;
      }
      this._state.form.patchValue({
        asset_id: desk?.id,
        asset_name: desk.name || desk.id,
        map_id: desk?.map_id || desk?.id,
        description: desk.name || desk.id,
        booking_type: "desk",
        zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : []
      });
      yield this._state.confirmPost().catch((_) => console.error(_));
    });
  }
  static {
    this.\u0275fac = function DeskFlowFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskFlowFormComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFlowFormComponent, selectors: [["desk-flow-form"]], standalone: false, decls: 15, vars: 5, consts: [["alloc_button", ""], ["form", "", 1, "flex-1", "min-h-[50%]"], [1, "text-xl", "uppercase", "font-medium", "mb-2", "mt-4", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto"], [3, "form"], [1, "mb-4", "border-b", "border-base-200", "w-full"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-center", "space-x-0", "space-y-2", "sm:space-y-0", "sm:space-x-2", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto", "mb-4"], ["btn", "", "matRipple", "", "clear", "", 1, "sm:flex-1", "w-full", "sm:w-auto", "h-[2.75rem]", "inverse", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "text-xl"], [1, "ml-2", "mx-4"], ["class", "sm:flex-1 w-full sm:w-auto h-[2.75rem]", "find", "", "btn", "", "matRipple", "", 3, "click", 4, "ngIf", "ngIfElse"], ["find", "", "btn", "", "matRipple", "", 1, "sm:flex-1", "w-full", "sm:w-auto", "h-[2.75rem]", 3, "click"]], template: function DeskFlowFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 1)(1, "h2", 2);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "detailed-book-desks-form", 3)(4, "div", 4);
        \u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
        \u0275\u0275listener("click", function DeskFlowFormComponent_Template_button_click_6_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.clearForm());
        });
        \u0275\u0275elementStart(7, "div", 7)(8, "app-icon", 8);
        \u0275\u0275text(9, "clear");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span", 9);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, DeskFlowFormComponent_button_12_Template, 6, 1, "button", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, DeskFlowFormComponent_ng_template_13_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const alloc_button_r5 = \u0275\u0275reference(14);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.is_edit ? "Edit" : "Detailed", " Desk Booking ");
        \u0275\u0275advance();
        \u0275\u0275property("form", ctx.form);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.is_edit ? "Cancel Edit" : "Clear Form");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.auto_allocation)("ngIfElse", alloc_button_r5);
      }
    }, dependencies: [NgIf, IconComponent, MatRipple, DeskFlowDetailedFormComponent], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n[quick][_ngcontent-%COMP%] {\n  background-color: #007ac8;\n}\n/*# sourceMappingURL=form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFlowFormComponent, { className: "DeskFlowFormComponent", filePath: "apps/workplace/src/app/book/desk-flow/form.component.ts", lineNumber: 89 });
})();

// apps/workplace/src/app/book/desk-flow/map.component.ts
var _c011 = () => ["/book", "desks", "form"];
var _c17 = () => [];
function DeskFlowMapComponent_li_22_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feat_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feat_r5, " ");
  }
}
function DeskFlowMapComponent_li_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275listener("click", function DeskFlowMapComponent_li_22_Template_li_click_0_listener() {
      const desk_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setActiveDesk(desk_r3));
    });
    \u0275\u0275elementStart(1, "app-icon", 19);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 23);
    \u0275\u0275template(9, DeskFlowMapComponent_li_22_div_9_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const desk_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-primary", (ctx_r3.active_desk == null ? null : ctx_r3.active_desk.id) === desk_r3.id);
    \u0275\u0275attribute("desk-id", desk_r3.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(desk_r3.name || desk_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (desk_r3.zone == null ? null : desk_r3.zone.display_name) || (desk_r3.zone == null ? null : desk_r3.zone.name) || "<No Level>", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", desk_r3.features || \u0275\u0275pureFunction0(6, _c17));
  }
}
function DeskFlowMapComponent_div_24_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = \u0275\u0275pipeBind1(2, 1, ctx_r3.level)) == null ? null : tmp_3_0.display_name) || ((tmp_3_0 = \u0275\u0275pipeBind1(3, 3, ctx_r3.level)) == null ? null : tmp_3_0.name), " ");
  }
}
function DeskFlowMapComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "interactive-map", 27);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275template(9, DeskFlowMapComponent_div_24_div_9_Template, 4, 5, "div", 28);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 9, ctx_r3.url))("zoom", (tmp_3_0 = \u0275\u0275pipeBind1(3, 11, ctx_r3.positions)) == null ? null : tmp_3_0.zoom)("center", (tmp_4_0 = \u0275\u0275pipeBind1(4, 13, ctx_r3.positions)) == null ? null : tmp_4_0.center)("styles", \u0275\u0275pipeBind1(5, 15, ctx_r3.styles))("features", \u0275\u0275pipeBind1(6, 17, ctx_r3.features))("actions", \u0275\u0275pipeBind1(7, 19, ctx_r3.actions))("labels", \u0275\u0275pipeBind1(8, 21, ctx_r3.labels))("focus", (ctx_r3.active_desk == null ? null : ctx_r3.active_desk.map_id) || (ctx_r3.active_desk == null ? null : ctx_r3.active_desk.id));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(10, 23, ctx_r3.level));
  }
}
function DeskFlowMapComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "mat-spinner", 31);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, ctx_r3.loading));
  }
}
function DeskFlowMapComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34)(7, "button", 35);
    \u0275\u0275listener("click", function DeskFlowMapComponent_div_27_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setActiveDesk(null));
    });
    \u0275\u0275text(8, " Clear ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 36);
    \u0275\u0275listener("click", function DeskFlowMapComponent_div_27_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.makeBooking());
    });
    \u0275\u0275text(10, " Book ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.active_desk.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r3.active_desk.zone == null ? null : ctx_r3.active_desk.zone.display_name) || ctx_r3.active_desk.zone.name || "<No Level>", " ");
  }
}
var DeskFlowMapComponent = class _DeskFlowMapComponent extends AsyncHandler {
  get active_desk() {
    return this._active_desk.getValue();
  }
  get hide_map() {
    return !!this._settings.get("app.desks.hide_map");
  }
  constructor(_state, _settings, _explore) {
    super();
    this._state = _state;
    this._settings = _settings;
    this._explore = _explore;
    this.url = this._explore.map_url;
    this.styles = this._explore.map_styles;
    this.positions = this._explore.map_positions;
    this.features = this._explore.map_features;
    this.actions = this._explore.map_actions;
    this.labels = this._explore.map_labels;
    this.level = this._explore.level;
    this.desks = this._state.available_resources;
    this.loading = this._state.loading;
    this.form = this._state.form;
    this.option_details = combineLatest([
      this._state.options,
      this.form.valueChanges.pipe(startWith({}))
    ]).pipe(map(([options]) => {
      const form = this._state.form;
      const recurrence = formatRecurrence({
        pattern: options.pattern,
        end: options.recurr_end,
        start: form.value.date,
        interval: 1,
        days_of_week: []
      });
      const details = `${format(form.value.date, "dd MMM yyyy")}${options.pattern && options.pattern !== "none" ? ", " + recurrence : ""}${options.group ? ", " + options.group : ""}, ${options.features?.length || "Any"} Feature${(options.features?.length || 0) < 2 ? "" : "s"}`;
      if (options.zone_id)
        this._explore.setLevel(options.zone_id);
      return details;
    }));
    this._active_desk = new BehaviorSubject(null);
    this.makeBooking = () => this._state.confirmPost();
  }
  ngOnInit() {
    this.subscription("assets-statue", combineLatest([
      this._state.resources,
      this._state.available_resources,
      this._active_desk
    ]).pipe(debounceTime(200)).subscribe(([assets, available]) => {
      const status = {};
      const actions = [];
      for (const desk of assets) {
        const active = desk.bookable && available.find((d) => d.id === desk.id);
        status[`#${desk.map_id || desk.id}`] = {
          fill: desk.bookable ? available.find((d) => d.id === desk.id) ? "#43a047" : "#e53935" : "#999",
          opacity: 0.6
        };
        if (active)
          actions.push({
            id: desk.map_id || desk.id,
            action: "click",
            callback: () => this.setActiveDesk(desk)
          });
      }
      this._explore.setStyles("desks", status);
      this._explore.setActions("desks", actions);
      this._explore.setFeatures("desks", this.active_desk ? [
        {
          location: this.active_desk.map_id || this.active_desk.id,
          content: `
                    <span class="flex h-4 w-4 rounded-full absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 border-[3px] border-white\xE500 shadow" >
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-full w-full bg-primary"></span>
                    </span>`
        }
      ] : []);
    }));
  }
  setActiveDesk(desk) {
    this._explore.setLevel(desk?.zone?.id);
    this._active_desk.next(desk);
    this._state.form.patchValue({
      asset_id: desk?.id,
      asset_name: desk.name,
      map_id: desk?.map_id || desk?.id,
      description: desk.name,
      booking_type: "desk",
      zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : []
    });
  }
  static {
    this.\u0275fac = function DeskFlowMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskFlowMapComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ExploreStateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFlowMapComponent, selectors: [["desk-flow-map"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 28, vars: 22, consts: [["menu", "matMenu"], ["topbar", "", 1, ""], ["btn", "", "matRipple", "", 1, "clear", "h-[2.75rem]", "text-white", 3, "routerLink"], [1, "flex", "items-center", "justify-center", "h-full"], [1, "text-xl"], [1, "ml-2", "mx-4"], [1, "flex", "flex-col", "flex-1", "h-1/2", "w-full"], [1, "text-2xl", "px-4", "pt-4", "text-center"], [1, "my-4", "mx-auto", "w-[640px]", "max-w-[calc(100vw-2rem)]", 3, "matMenuTriggerFor"], [1, "pt-4", "max-h-[65vh]", "overflow-auto", 3, "click"], [3, "form"], ["listing", "", 1, "flex", "flex-1", "h-1/2", "relative", "space-x-2"], [1, "list-style-none", "w-full", "sm:w-[20rem]", "max-w-[48rem]", "mx-auto", "bg-base-200", "pb-32", "overflow-auto", "h-full", "rounded-tr-lg", "space-y-2"], [1, "py-2", "px-4", "sticky", "top-0", "inset-x-0", "bg-base-200", "border-b", "border-base-200", "z-10"], ["matRipple", "", "class", "flex items-center p-2 mx-2 bg-base-100 rounded shadow cursor-pointer space-x-2 min-h-[5rem] border", 3, "border-primary", "click", 4, "ngFor", "ngForOf"], ["class", "hidden sm:block flex-1 bg-base-200 rounded-tl-lg border-l border-t border-base-200 relative overflow-hidden h-full", 4, "ngIf"], ["class", "absolute inset-0 bg-base-100 bg-opacity-60 flex flex-col items-center justify-center space-y-2 !m-0 z-20", 4, "ngIf"], ["selection", "", "class", "absolute bottom-2 left-1/2 transform -translate-x-1/2 p-2 bg-base-100 shadow rounded w-[24rem] max-w-[calc(100vw-1rem)] space-y-2 !m-0 border border-base-200", 4, "ngIf"], ["matRipple", "", 1, "flex", "items-center", "p-2", "mx-2", "bg-base-100", "rounded", "shadow", "cursor-pointer", "space-x-2", "min-h-[5rem]", "border", 3, "click"], [1, "text-2xl"], [1, "flex", "flex-col", "w-1/2", "flex-1"], ["name", "", 1, ""], ["level", "", 1, "text-xs"], ["features", "", 1, "w-full", "flex", "flex-wrap"], ["class", "text-xs bg-primary text-white rounded-xl px-2 py-1 mt-1 mr-2", 4, "ngFor", "ngForOf"], [1, "text-xs", "bg-primary", "text-white", "rounded-xl", "px-2", "py-1", "mt-1", "mr-2"], [1, "hidden", "sm:block", "flex-1", "bg-base-200", "rounded-tl-lg", "border-l", "border-t", "border-base-200", "relative", "overflow-hidden", "h-full"], [3, "src", "zoom", "center", "styles", "features", "actions", "labels", "focus"], ["class", "absolute top-2 left-2 bg-base-100 rounded-3xl h-10 px-3 flex items-center border border-base-200", 4, "ngIf"], [1, "absolute", "top-2", "left-2", "bg-base-100", "rounded-3xl", "h-10", "px-3", "flex", "items-center", "border", "border-base-200"], [1, "absolute", "inset-0", "bg-base-100", "bg-opacity-60", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "!m-0", "z-20"], [3, "diameter"], ["selection", "", 1, "absolute", "bottom-2", "left-1/2", "transform", "-translate-x-1/2", "p-2", "bg-base-100", "shadow", "rounded", "w-[24rem]", "max-w-[calc(100vw-1rem)]", "space-y-2", "!m-0", "border", "border-base-200"], [1, ""], [1, "flex", "items-center", "space-x-2"], ["matRipple", "", 1, "inverse", "flex-1", 3, "click"], ["matRipple", "", 1, "flex-1", 3, "click"]], template: function DeskFlowMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "a", 2)(2, "div", 3)(3, "app-icon", 4);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 5);
        \u0275\u0275text(6, "Back");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(7, "div", 6)(8, "h2", 7);
        \u0275\u0275text(9, "Available Desks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "an-action-field", 8);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-menu", null, 0)(15, "div", 9);
        \u0275\u0275listener("click", function DeskFlowMapComponent_Template_div_click_15_listener($event) {
          \u0275\u0275restoreView(_r1);
          $event.stopPropagation();
          return \u0275\u0275resetView($event.preventDefault);
        });
        \u0275\u0275element(16, "detailed-book-desks-form", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 11)(18, "ul", 12)(19, "div", 13);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, DeskFlowMapComponent_li_22_Template, 10, 7, "li", 14);
        \u0275\u0275pipe(23, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, DeskFlowMapComponent_div_24_Template, 11, 25, "div", 15)(25, DeskFlowMapComponent_div_25_Template, 5, 4, "div", 16);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275template(27, DeskFlowMapComponent_div_27_Template, 11, 2, "div", 17);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_7_0;
        const menu_r7 = \u0275\u0275reference(14);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c011));
        \u0275\u0275advance(9);
        \u0275\u0275property("matMenuTriggerFor", menu_r7);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 13, ctx.option_details) || "No Filters", " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("form", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("!w-full", ctx.hide_map)("rounded-tl-lg", ctx.hide_map);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = \u0275\u0275pipeBind1(21, 15, ctx.desks)) == null ? null : tmp_7_0.length) || "0", " matches available ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(23, 17, ctx.desks));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.hide_map);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(26, 19, ctx.loading));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.active_desk);
      }
    }, dependencies: [NgForOf, NgIf, IconComponent, InteractiveMapComponent, MatMenu, MatMenuTrigger, MatRipple, MatProgressSpinner, ActionFieldComponent, RouterLink, DeskFlowDetailedFormComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[topbar][_ngcontent-%COMP%] {\n  background-color: #00539f;\n}\n/*# sourceMappingURL=map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFlowMapComponent, { className: "DeskFlowMapComponent", filePath: "apps/workplace/src/app/book/desk-flow/map.component.ts", lineNumber: 170 });
})();

// apps/workplace/src/app/book/desk-flow/confirm.component.ts
var _c012 = () => ["/book", "desks", "map"];
var DeskFlowConfirmComponent = class _DeskFlowConfirmComponent {
  static {
    this.\u0275fac = function DeskFlowConfirmComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskFlowConfirmComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFlowConfirmComponent, selectors: [["desk-flow-confirm"]], standalone: false, decls: 7, vars: 2, consts: [["topbar", "", 1, ""], ["btn", "", "matRipple", "", 1, "clear", "h-[2.75rem]", "text-white", 3, "routerLink"], [1, "flex", "items-center", "justify-center", "h-full"], [1, "text-xl"], [1, "ml-2", "mx-4"]], template: function DeskFlowConfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1)(2, "div", 2)(3, "app-icon", 3);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Back");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c012));
      }
    }, dependencies: [IconComponent, MatRipple, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[topbar][_ngcontent-%COMP%] {\n  background-color: #00539f;\n}\n/*# sourceMappingURL=confirm.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFlowConfirmComponent, { className: "DeskFlowConfirmComponent", filePath: "apps/workplace/src/app/book/desk-flow/confirm.component.ts", lineNumber: 36 });
})();

// apps/workplace/src/app/book/flow-success.component.ts
var _c013 = (a0) => ["/book", a0];
var _c18 = () => ({});
var _c24 = () => ["/schedule"];
var _c33 = (a0) => ({ email: a0 });
function FlowSuccessComponent_br_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "br");
  }
}
var FlowSuccessComponent = class _FlowSuccessComponent {
  constructor() {
    this.extra = "";
    this.route = "spaces";
    this.type = "space";
  }
  get is_host() {
    return this.calendar === currentUser()?.email;
  }
  get title() {
    return this.is_host ? "your" : "the host'";
  }
  static {
    this.\u0275fac = function FlowSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlowSuccessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlowSuccessComponent, selectors: [["flow-success"]], inputs: { calendar: "calendar", extra: "extra", route: "route", type: "type" }, standalone: false, decls: 15, vars: 14, consts: [["name", "success", 1, "fixed", "inset-0", "flex", "flex-col", "bg-indigo-900", "items-center", "justify-center", "z-50"], [1, "text-7xl", "rounded-full", "bg-base-100", "text-success", "mb-4"], [1, "text-center", "text-lg", "text-white", "mb-4", "leading-10"], [4, "ngIf"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "w-32", "border", "border-white", 3, "routerLink", "queryParams"]], template: function FlowSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-icon");
        \u0275\u0275text(3, "done");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275text(5);
        \u0275\u0275element(6, "br");
        \u0275\u0275text(7);
        \u0275\u0275template(8, FlowSuccessComponent_br_8_Template, 1, 0, "br", 3);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 4)(11, "a", 5);
        \u0275\u0275text(12, " New Booking ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 5);
        \u0275\u0275text(14, " Your Bookings ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" Thank you, your ", ctx.type, " booking was successful!");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.extra, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.extra);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" An event has been added to ", ctx.title, " calendar ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c013, ctx.route))("queryParams", \u0275\u0275pureFunction0(10, _c18));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c24))("queryParams", \u0275\u0275pureFunction1(12, _c33, ctx.calendar));
      }
    }, dependencies: [NgIf, IconComponent, MatRipple, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlowSuccessComponent, { className: "FlowSuccessComponent", filePath: "apps/workplace/src/app/book/flow-success.component.ts", lineNumber: 44 });
})();

// apps/workplace/src/app/book/desk-flow.component.ts
function BookDeskFlowComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "desk-flow-map");
    \u0275\u0275elementContainerEnd();
  }
}
function BookDeskFlowComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "desk-flow-confirm");
    \u0275\u0275elementContainerEnd();
  }
}
function BookDeskFlowComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "flow-success", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("calendar", ctx_r0.last_success == null ? null : ctx_r0.last_success.user_email)("extra", (ctx_r0.last_success == null ? null : ctx_r0.last_success.extension_data == null ? null : ctx_r0.last_success.extension_data.secondary_resource) ? "Locker E-093 has been allocated for this booking." : "");
  }
}
function BookDeskFlowComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "desk-flow-form");
    \u0275\u0275elementContainerEnd();
  }
}
var BookDeskFlowComponent = class _BookDeskFlowComponent extends AsyncHandler {
  get view() {
    return this._state.view;
  }
  get last_success() {
    return this._state.last_success;
  }
  constructor(_state, _route, _org) {
    super();
    this._state = _state;
    this._route = _route;
    this._org = _org;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this._state.loadForm();
      if (!this._state.form)
        this._state.newForm();
      this._state.form.patchValue({ booking_type: "desk" });
      this.subscription("route.params", this._route.paramMap.subscribe((param) => {
        if (param.has("step"))
          this._state.setView(param.get("step"));
      }));
      this.subscription("route.query", this._route.queryParamMap.subscribe((param) => {
        if (param.has("success"))
          this._state.setView(param.get("success"));
      }));
    });
  }
  static {
    this.\u0275fac = function BookDeskFlowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookDeskFlowComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookDeskFlowComponent, selectors: [["placeos-book-desk-flow"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 4, consts: [[1, "bg-base-100", "h-full", "w-full"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["type", "desk", "route", "desks", 3, "calendar", "extra"]], template: function BookDeskFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275elementContainerStart(1, 1);
        \u0275\u0275template(2, BookDeskFlowComponent_ng_container_2_Template, 2, 0, "ng-container", 2)(3, BookDeskFlowComponent_ng_container_3_Template, 2, 0, "ng-container", 2)(4, BookDeskFlowComponent_ng_container_4_Template, 2, 2, "ng-container", 2)(5, BookDeskFlowComponent_ng_container_5_Template, 2, 0, "ng-container", 3);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitch", ctx.view);
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "map");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "confirm");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "success");
      }
    }, dependencies: [NgSwitch, NgSwitchCase, NgSwitchDefault, DeskFlowFormComponent, DeskFlowMapComponent, DeskFlowConfirmComponent, FlowSuccessComponent], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=desk-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookDeskFlowComponent, { className: "BookDeskFlowComponent", filePath: "apps/workplace/src/app/book/desk-flow.component.ts", lineNumber: 48 });
})();

// apps/workplace/src/app/book/space-flow/detailed-form.component.ts
var _c014 = () => ({ standalone: true });
function DetailBookSpaceFormComponent_form_0_mat_checkbox_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 22);
    \u0275\u0275text(1, " All Day ");
    \u0275\u0275elementEnd();
  }
}
function DetailBookSpaceFormComponent_form_0_div_18_mat_form_field_3_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 29);
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
function DetailBookSpaceFormComponent_form_0_div_18_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 26)(1, "mat-select", 27);
    \u0275\u0275listener("ngModelChange", function DetailBookSpaceFormComponent_form_0_div_18_mat_form_field_3_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275template(2, DetailBookSpaceFormComponent_form_0_div_18_mat_form_field_3_mat_option_2_Template, 2, 2, "mat-option", 28);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building)("ngModelOptions", \u0275\u0275pureFunction0(5, _c014));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(3, 3, ctx_r1.buildings));
  }
}
function DetailBookSpaceFormComponent_form_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "label", 24);
    \u0275\u0275text(2, "Building");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DetailBookSpaceFormComponent_form_0_div_18_mat_form_field_3_Template, 4, 6, "mat-form-field", 25);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_2_0 = \u0275\u0275pipeBind1(4, 1, ctx_r1.buildings)) == null ? null : tmp_2_0.length) > 1);
  }
}
function DetailBookSpaceFormComponent_form_0_div_19_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275property("value", item_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r6, " ");
  }
}
function DetailBookSpaceFormComponent_form_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "label", 30);
    \u0275\u0275text(2, "Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 31)(4, "mat-select", 32);
    \u0275\u0275listener("ngModelChange", function DetailBookSpaceFormComponent_form_0_div_19_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.optionsChange.emit({ features: $event }));
    });
    \u0275\u0275template(5, DetailBookSpaceFormComponent_form_0_div_19_mat_option_5_Template, 2, 2, "mat-option", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", "Any " + ctx_r1.features_label)("ngModel", ctx_r1.options == null ? null : ctx_r1.options.features)("ngModelOptions", \u0275\u0275pureFunction0(4, _c014));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.features);
  }
}
function DetailBookSpaceFormComponent_form_0_section_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "label", 36);
    \u0275\u0275text(2, "Host");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "host-select-field", 37);
    \u0275\u0275elementEnd();
  }
}
function DetailBookSpaceFormComponent_form_0_section_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "label", 39);
    \u0275\u0275text(2, "Attendees");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "a-user-list-field", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("hide_actions", ctx_r1.hide_actions);
  }
}
function DetailBookSpaceFormComponent_form_0_section_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2);
    \u0275\u0275template(1, DetailBookSpaceFormComponent_form_0_section_20_div_1_Template, 6, 0, "div", 33)(2, DetailBookSpaceFormComponent_form_0_section_20_div_2_Template, 4, 1, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.can_book_for_others);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hide_attendees);
  }
}
function DetailBookSpaceFormComponent_form_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "label", 42);
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "rich-text-input", 43);
    \u0275\u0275elementEnd();
  }
}
function DetailBookSpaceFormComponent_form_0_div_33_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " Add catering ");
    \u0275\u0275elementEnd();
  }
}
function DetailBookSpaceFormComponent_form_0_div_33_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.form == null ? null : ctx_r1.form.value.catering[0].item_count, " item(s) ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 2, (ctx_r1.form == null ? null : ctx_r1.form.value.catering[0].total_cost) / 100, ctx_r1.code), " ");
  }
}
function DetailBookSpaceFormComponent_form_0_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "label");
    \u0275\u0275text(2, "Catering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "an-action-field", 45);
    \u0275\u0275listener("onAction", function DetailBookSpaceFormComponent_form_0_div_33_Template_an_action_field_onAction_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editCatering());
    });
    \u0275\u0275template(4, DetailBookSpaceFormComponent_form_0_div_33_div_4_Template, 2, 0, "div", 46)(5, DetailBookSpaceFormComponent_form_0_div_33_div_5_Template, 6, 5, "div", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !(ctx_r1.form == null ? null : ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form == null ? null : ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length);
  }
}
function DetailBookSpaceFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1)(1, "section", 2)(2, "div", 3)(3, "div", 4)(4, "label", 5);
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a-date-field", 6);
    \u0275\u0275text(7, " Date and time must be in the future ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 4)(9, "label", 7);
    \u0275\u0275text(10, "Start Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a-time-field", 8);
    \u0275\u0275listener("ngModelChange", function DetailBookSpaceFormComponent_form_0_Template_a_time_field_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9)(13, "label", 10);
    \u0275\u0275text(14, "End Time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "a-duration-field", 11);
    \u0275\u0275template(16, DetailBookSpaceFormComponent_form_0_mat_checkbox_16_Template, 2, 0, "mat-checkbox", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 3);
    \u0275\u0275template(18, DetailBookSpaceFormComponent_form_0_div_18_Template, 5, 3, "div", 13)(19, DetailBookSpaceFormComponent_form_0_div_19_Template, 6, 5, "div", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, DetailBookSpaceFormComponent_form_0_section_20_Template, 3, 2, "section", 14);
    \u0275\u0275elementStart(21, "section", 2)(22, "div", 15)(23, "div", 16)(24, "label", 17);
    \u0275\u0275text(25, "Meeting Subject ");
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "mat-form-field", 18);
    \u0275\u0275element(29, "input", 19);
    \u0275\u0275elementStart(30, "mat-error");
    \u0275\u0275text(31, "Meeting Subject is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(32, DetailBookSpaceFormComponent_form_0_div_32_Template, 4, 0, "div", 20)(33, DetailBookSpaceFormComponent_form_0_div_33_Template, 6, 2, "div", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(11, _c014));
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r1.form.value.date)("max", ctx_r1.max_duration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allow_all_day);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.show_features && (ctx_r1.features == null ? null : ctx_r1.features.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.show_features && (ctx_r1.features == null ? null : ctx_r1.features.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.can_book_for_others || !ctx_r1.hide_attendees);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", !ctx_r1.hide_notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.has_catering);
  }
}
var DetailBookSpaceFormComponent = class _DetailBookSpaceFormComponent {
  get building() {
    return this._org.building;
  }
  get has_catering() {
    return !!this._settings.get("app.events.has_catering");
  }
  get hide_actions() {
    return !!this._settings.get("app.events.hide_user_actions");
  }
  get hide_notes() {
    return !!this._settings.get("app.events.hide_notes");
  }
  get hide_attendees() {
    return !!this._settings.get("app.events.hide_attendees");
  }
  get can_book_for_others() {
    return this._settings.get("app.events.can_book_for_others");
  }
  get allow_all_day() {
    return this._settings.get("app.events.allow_all_day");
  }
  get max_duration() {
    return this._settings.get("app.events.max_duration") || 4 * 60;
  }
  get show_features() {
    return !!this._settings.get("app.events.features_on_form");
  }
  get features_label() {
    return this._settings.get("app.events.features_label") || "feature";
  }
  get code() {
    return this._org.currency_code;
  }
  constructor(_catering, _org, _settings) {
    this._catering = _catering;
    this._org = _org;
    this._settings = _settings;
    this.features = [];
    this.optionsChange = new EventEmitter();
    this.buildings = this._org.building_list;
    this.setBuilding = (b) => this._org.building = b;
    this.editCatering = () => __async(this, null, function* () {
      return this.form.patchValue({
        catering: [
          yield this._catering.manageCateringOrder((this.form.value.catering ? this.form.value.catering[0] : null) || new CateringOrder())
        ]
      });
    });
  }
  static {
    this.\u0275fac = function DetailBookSpaceFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DetailBookSpaceFormComponent)(\u0275\u0275directiveInject(CateringStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailBookSpaceFormComponent, selectors: [["detailed-book-space-form"]], inputs: { form: "form", options: "options", features: "features" }, outputs: { optionsChange: "optionsChange" }, standalone: false, decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "mb-4", "border-b", "border-base-200"], [1, "flex", "flex-col", "sm:flex-row", "space-x-0", "sm:space-x-2", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto"], [1, "flex", "flex-col", "flex-1", "w-full", "sm:w-1/3"], ["for", "date"], ["name", "date", "formControlName", "date"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "flex-col", "flex-1", "w-full", "sm:w-1/3", "relative"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max"], ["formControlName", "all_day", "class", "absolute top-0 right-0", 4, "ngIf"], ["class", "flex flex-col flex-1 w-full", 4, "ngIf"], ["class", "mb-4 border-b border-base-200", 4, "ngIf"], [1, "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["name", "title", "matInput", "", "formControlName", "title", "placeholder", "Meeting title"], ["class", "flex flex-col resize-y mb-4", 4, "ngIf"], ["class", "flex flex-col mb-4", 4, "ngIf"], ["formControlName", "all_day", 1, "absolute", "top-0", "right-0"], [1, "flex", "flex-col", "flex-1", "w-full"], ["for", "building"], ["overlay", "", "buildings", "", "class", "w-full h-[3.25rem]", "appearance", "outline", 4, "ngIf"], ["overlay", "", "buildings", "", "appearance", "outline", 1, "w-full", "h-[3.25rem]"], ["placeholder", "Select Building...", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "features"], ["overlay", "", "appearance", "outline", 1, "w-full", "h-[3.25rem]"], ["multiple", "", 3, "ngModelChange", "placeholder", "ngModel", "ngModelOptions"], ["class", "flex flex-col w-[640px] max-w-[calc(100%-2rem)] mx-auto", 4, "ngIf"], ["class", "flex flex-col w-[640px] max-w-[calc(100%-2rem)] mx-auto mb-2", 4, "ngIf"], [1, "flex", "flex-col", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto"], ["for", "host"], ["name", "host", "formControlName", "organiser"], [1, "flex", "flex-col", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto", "mb-2"], ["for", "attendees"], ["name", "attendees", "formControlName", "attendees", 3, "hide_actions"], [1, "flex", "flex-col", "resize-y", "mb-4"], ["for", "notes"], ["name", "notes", "formControlName", "body", "placeholder", "Add meeting notes here..."], [1, "flex", "flex-col", "mb-4"], [3, "onAction"], ["class", "opacity-40", 4, "ngIf"], ["class", "flex items-center", 4, "ngIf"], [1, "opacity-40"], [1, "flex", "items-center"], [1, "flex-1", "w-1/2"], [1, "text-xs", "opacity-60", "px-4"]], template: function DetailBookSpaceFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DetailBookSpaceFormComponent_form_0_Template, 34, 12, "form", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [NgForOf, NgIf, MatOption, MatFormField, MatError, MatSelect, MatInput, MatCheckbox, ActionFieldComponent, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, UserListFieldComponent, RichTextInputComponent, HostSelectFieldComponent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, AsyncPipe, CurrencyPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailBookSpaceFormComponent, { className: "DetailBookSpaceFormComponent", filePath: "apps/workplace/src/app/book/space-flow/detailed-form.component.ts", lineNumber: 195 });
})();

// apps/workplace/src/app/book/space-flow/form.component.ts
function SpaceFlowFormComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function SpaceFlowFormComponent_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmBooking());
    });
    \u0275\u0275elementStart(1, "div", 5)(2, "app-icon", 6);
    \u0275\u0275text(3, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.is_edit ? "Confirm changes" : "Book without Space");
  }
}
var SpaceFlowFormComponent = class _SpaceFlowFormComponent {
  get is_edit() {
    return !!this.form?.value?.id;
  }
  get form() {
    return this._state.form;
  }
  get allow_standalone_bookings() {
    return this._settings.get("app.events.allow_standalone_bookings");
  }
  constructor(_state, _settings, _router) {
    this._state = _state;
    this._settings = _settings;
    this._router = _router;
    this.time = 0;
    this.capacity = 0;
    this.quick_times = [
      { name: "Now", value: 0 },
      { name: "Later Today", value: 120 },
      {
        name: "Tomorrow",
        value: setHours(addDays(/* @__PURE__ */ new Date(), 1), 9).valueOf()
      }
    ];
    this.quick_capacities = [
      { name: "Any Capacity", value: 0 },
      { name: "Small (1 - 4)", value: 1 },
      { name: "Medium (5 - 12)", value: 5 },
      { name: "Large (13 - 32)", value: 13 },
      { name: "Huge (32+)", value: 33 }
    ];
    this.options = this._state.options;
    this.features = this._state.features;
    this.setOptions = (o) => this._state.setOptions(o);
    this.clearForm = () => {
      this.time = this.capacity = 0;
      this._state.clearForm();
    };
  }
  quickBook() {
    if (!this.form.value.host)
      this.form.patchValue({ host: currentUser()?.email });
    this.form.patchValue({
      date: (this.time < 24 * 60 ? addMinutes(roundToNearestMinutes(/* @__PURE__ */ new Date(), { nearestTo: 5 }), this.time) : setHours(addDays(/* @__PURE__ */ new Date(), 1), 8)).valueOf(),
      title: "Ad-hoc Meeting"
    });
    this._state.setOptions({ capacity: this.capacity });
    this._router.navigate(["/book", "spaces", "find"]);
  }
  findSpace() {
    this.form.markAllAsTouched();
    if (!this.form.value.host)
      this.form.patchValue({ host: currentUser()?.email });
    if (!this.form.valid)
      return notifyError(`Some fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
    this._router.navigate(["/book", "spaces", "find"]);
  }
  confirmBooking() {
    if (!this.form.value.host)
      this.form.patchValue({ host: currentUser()?.email });
    this.form.markAllAsTouched();
    if (!this.form.valid)
      return notifyError(`Some fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
    this._router.navigate(["/book", "spaces", "confirm"]);
  }
  static {
    this.\u0275fac = function SpaceFlowFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SpaceFlowFormComponent)(\u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpaceFlowFormComponent, selectors: [["space-flow-form"]], standalone: false, decls: 20, vars: 11, consts: [["form", "", 1, "flex-1", "min-h-[50%]"], [1, "text-xl", "uppercase", "font-medium", "mb-2", "mt-4", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto"], [3, "optionsChange", "form", "options", "features"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-center", "space-x-0", "space-y-2", "sm:space-y-0", "sm:space-x-2", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto", "mb-4"], ["btn", "", "matRipple", "", "clear", "", 1, "sm:flex-1", "w-full", "sm:w-auto", "h-[2.75rem]", "inverse", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "text-xl"], [1, "ml-2", "mx-4"], ["btn", "", "matRipple", "", "find-space", "", 1, "sm:flex-1", "w-full", "sm:w-auto", "h-[2.75rem]", 3, "click"], ["class", "sm:flex-1 w-full sm:w-auto h-[2.75rem]", "btn", "", "matRipple", "", "standalone", "", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "standalone", "", 1, "sm:flex-1", "w-full", "sm:w-auto", "h-[2.75rem]", 3, "click"]], template: function SpaceFlowFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "detailed-book-space-form", 2);
        \u0275\u0275pipe(4, "async");
        \u0275\u0275pipe(5, "async");
        \u0275\u0275listener("optionsChange", function SpaceFlowFormComponent_Template_detailed_book_space_form_optionsChange_3_listener($event) {
          return ctx.setOptions($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 3)(7, "button", 4);
        \u0275\u0275listener("click", function SpaceFlowFormComponent_Template_button_click_7_listener() {
          return ctx.clearForm();
        });
        \u0275\u0275elementStart(8, "div", 5)(9, "app-icon", 6);
        \u0275\u0275text(10, "clear");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 7);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "button", 8);
        \u0275\u0275listener("click", function SpaceFlowFormComponent_Template_button_click_13_listener() {
          return ctx.findSpace();
        });
        \u0275\u0275elementStart(14, "div", 5)(15, "app-icon", 6);
        \u0275\u0275text(16, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 7);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(19, SpaceFlowFormComponent_button_19_Template, 6, 1, "button", 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.is_edit ? "Edit" : "Detailed", " Space Booking ");
        \u0275\u0275advance();
        \u0275\u0275property("form", ctx.form)("options", \u0275\u0275pipeBind1(4, 7, ctx.options))("features", \u0275\u0275pipeBind1(5, 9, ctx.features));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.is_edit ? "Cancel Edit" : "Clear Form");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.is_edit ? "Update Spaces" : "Find Space");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.is_edit || ctx.allow_standalone_bookings);
      }
    }, dependencies: [NgIf, IconComponent, MatRipple, DetailBookSpaceFormComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n[quick][_ngcontent-%COMP%] {\n  background-color: #007ac8;\n}\n/*# sourceMappingURL=form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpaceFlowFormComponent, { className: "SpaceFlowFormComponent", filePath: "apps/workplace/src/app/book/space-flow/form.component.ts", lineNumber: 93 });
})();

// apps/workplace/src/app/book/space-flow/find-item.component.ts
var SpaceFlowFindItemComponent = class _SpaceFlowFindItemComponent {
  constructor(_dialog) {
    this._dialog = _dialog;
    this.bookChange = new EventEmitter();
  }
  bookSpace() {
    this.book = this.multiple ? !this.book : true;
    this.bookChange.emit(this.book);
  }
  viewLocation() {
    this._dialog.open(MapLocateModalComponent, {
      maxWidth: "95vw",
      maxHeight: "95vh",
      data: { item: this.space }
    });
  }
  static {
    this.\u0275fac = function SpaceFlowFindItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SpaceFlowFindItemComponent)(\u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpaceFlowFindItemComponent, selectors: [["space-flow-find-item"]], inputs: { space: "space", multiple: "multiple", book: "book" }, outputs: { bookChange: "bookChange" }, standalone: false, decls: 19, vars: 8, consts: [[1, "flex", "items-center", "bg-base-100", "p-2", "my-2", "shadow", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto", "rounded"], [1, "flex", "flex-col", "flex-1", "space-y-2"], [1, "flex", "items-center"], [1, "p-2", "rounded-full", "bg-base-200", "mr-2"], [1, "flex", "flex-col", "space-y-2", "ml-2"], ["matRipple", "", "book", "", 3, "click"], ["locate", "", "btn", "", "matRipple", "", 1, "inverse", 3, "click"]], template: function SpaceFlowFindItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "app-icon");
        \u0275\u0275text(5, "place");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 2)(9, "div", 3)(10, "app-icon");
        \u0275\u0275text(11, "group");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "span");
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 4)(15, "button", 5);
        \u0275\u0275listener("click", function SpaceFlowFindItemComponent_Template_button_click_15_listener() {
          return ctx.bookSpace();
        });
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 6);
        \u0275\u0275listener("click", function SpaceFlowFindItemComponent_Template_button_click_17_listener() {
          return ctx.viewLocation();
        });
        \u0275\u0275text(18, " Map ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate2("", (ctx.space == null ? null : ctx.space.level == null ? null : ctx.space.level.display_name) || (ctx.space == null ? null : ctx.space.level == null ? null : ctx.space.level.name), ", ", (ctx.space == null ? null : ctx.space.display_name) || (ctx.space == null ? null : ctx.space.name), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", (ctx.space == null ? null : ctx.space.capacity) || 0, " People");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("bg-warning", ctx.multiple && ctx.book)("border-pending", ctx.multiple && ctx.book);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.multiple ? ctx.book ? "Remove" : "Select" : "Book", " ");
      }
    }, dependencies: [IconComponent, MatRipple], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n/*# sourceMappingURL=find-item.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpaceFlowFindItemComponent, { className: "SpaceFlowFindItemComponent", filePath: "apps/workplace/src/app/book/space-flow/find-item.component.ts", lineNumber: 60 });
})();

// apps/workplace/src/app/book/space-flow/find.component.ts
var _c015 = () => ["/book", "spaces", "form"];
function SpaceFlowFindComponent_mat_form_field_12_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
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
function SpaceFlowFindComponent_mat_form_field_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 21)(1, "mat-select", 22);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function SpaceFlowFindComponent_mat_form_field_12_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setBuilding($event));
    });
    \u0275\u0275template(3, SpaceFlowFindComponent_mat_form_field_12_mat_option_3_Template, 2, 2, "mat-option", 16);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(2, 2, ctx_r2.building));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 4, ctx_r2.buildings));
  }
}
function SpaceFlowFindComponent_mat_form_field_14_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275property("value", item_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r6.display_name || item_r6.name, " ");
  }
}
function SpaceFlowFindComponent_mat_form_field_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 24)(1, "mat-select", 25);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function SpaceFlowFindComponent_mat_form_field_14_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOptions({ zone_ids: [$event] }));
    });
    \u0275\u0275template(4, SpaceFlowFindComponent_mat_form_field_14_mat_option_4_Template, 2, 2, "mat-option", 16);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ((tmp_3_0 = \u0275\u0275pipeBind1(2, 2, ctx_r2.options)) == null ? null : tmp_3_0.zone_ids == null ? null : tmp_3_0.zone_ids.length) ? (tmp_3_0 = \u0275\u0275pipeBind1(3, 4, ctx_r2.options)) == null ? null : tmp_3_0.zone_ids[0] : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 6, ctx_r2.levels));
  }
}
function SpaceFlowFindComponent_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275property("value", item_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7.name, " ");
  }
}
function SpaceFlowFindComponent_mat_form_field_20_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275property("value", item_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9, " ");
  }
}
function SpaceFlowFindComponent_mat_form_field_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-select", 26);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function SpaceFlowFindComponent_mat_form_field_20_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOptions({ features: $event }));
    });
    \u0275\u0275template(3, SpaceFlowFindComponent_mat_form_field_20_mat_option_3_Template, 2, 2, "mat-option", 16);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", "Any " + ctx_r2.features_label)("ngModel", (tmp_4_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.options)) == null ? null : tmp_4_0.features);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 5, ctx_r2.features));
  }
}
function SpaceFlowFindComponent_ng_container_23_ng_container_1_space_flow_find_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "space-flow-find-item", 29);
    \u0275\u0275listener("bookChange", function SpaceFlowFindComponent_ng_container_23_ng_container_1_space_flow_find_item_1_Template_space_flow_find_item_bookChange_0_listener($event) {
      const space_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.handleBookEvent(space_r11, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const space_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("space", space_r11)("multiple", ctx_r2.multiple)("book", ctx_r2.book_space[space_r11.id]);
  }
}
function SpaceFlowFindComponent_ng_container_23_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SpaceFlowFindComponent_ng_container_23_ng_container_1_space_flow_find_item_1_Template, 1, 3, "space-flow-find-item", 27);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, " End of available spaces list ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r2.spaces));
  }
}
function SpaceFlowFindComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SpaceFlowFindComponent_ng_container_23_ng_container_1_Template, 5, 3, "ng-container", 19);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    const empty_state_r12 = \u0275\u0275reference(29);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = \u0275\u0275pipeBind1(2, 2, ctx_r2.spaces)) == null ? null : tmp_3_0.length) > 0)("ngIfElse", empty_state_r12);
  }
}
function SpaceFlowFindComponent_div_25_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 40);
    \u0275\u0275listener("click", function SpaceFlowFindComponent_div_25_div_8_Template_button_click_6_listener($event) {
      const space_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.handleBookEvent(space_r15, false);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const space_r15 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(space_r15.display_name || space_r15.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (space_r15.level == null ? null : space_r15.level.display_name) || (space_r15.level == null ? null : space_r15.level.name), " ~ ", space_r15.capacity || "2+", " People ");
  }
}
function SpaceFlowFindComponent_div_25_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, " No selected spaces ");
    \u0275\u0275elementEnd();
  }
}
function SpaceFlowFindComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 33);
    \u0275\u0275listener("click", function SpaceFlowFindComponent_div_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmBooking());
    });
    \u0275\u0275text(5, " Book ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-menu", 34, 2);
    \u0275\u0275template(8, SpaceFlowFindComponent_div_25_div_8_Template, 9, 3, "div", 35)(9, SpaceFlowFindComponent_div_25_div_9_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r16 = \u0275\u0275reference(7);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.space_list == null ? null : ctx_r2.space_list.length, " space(s) selected ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !(ctx_r2.space_list == null ? null : ctx_r2.space_list.length));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.space_list);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r2.space_list == null ? null : ctx_r2.space_list.length));
  }
}
function SpaceFlowFindComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "mat-spinner", 43);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Retrieving available spaces...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
function SpaceFlowFindComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "p");
    \u0275\u0275text(2, " No available spaces for selected time, capacity or level(s) ");
    \u0275\u0275elementEnd()();
  }
}
var SpaceFlowFindComponent = class _SpaceFlowFindComponent {
  setBuilding(bld) {
    return __async(this, null, function* () {
      const opts = yield this.options.pipe(take(1)).toPromise();
      if (bld)
        this._org.building = bld;
      const levels = this._org.levelsForBuilding(this._org.building);
      const lvl = levels.find((_) => opts.zone_ids?.includes(_.id));
      if (!lvl && levels.length) {
        this.setOptions({ zone_ids: [levels[0].id] });
      }
    });
  }
  get multiple() {
    return this._settings.get("app.events.multiple_spaces") ?? false;
  }
  get features_label() {
    return this._settings.get("app.events.features_label") || "feature";
  }
  constructor(_org, _state, _settings, _router, _space_pipe) {
    this._org = _org;
    this._state = _state;
    this._settings = _settings;
    this._router = _router;
    this._space_pipe = _space_pipe;
    this.book_space = {};
    this.quick_capacities = [
      { name: "Any Capacity", value: 0 },
      { name: "Small (1 - 4)", value: 1 },
      { name: "Medium (5 - 12)", value: 5 },
      { name: "Large (13 - 32)", value: 13 },
      { name: "Huge (32+)", value: 33 }
    ];
    this.space_list = [];
    this.buildings = this._org.building_list;
    this.building = this._org.active_building;
    this.levels = combineLatest([
      this.building,
      this._state.options
    ]).pipe(filter(([_]) => !!_), map(([bld]) => [
      {
        id: this._org.building.id,
        name: i18n("COMMON.LEVEL_ALL")
      },
      ...this._org.levelsForBuilding(bld)
    ]));
    this.loading = this._state.loading;
    this.options = this._state.options;
    this.spaces = this._state.available_spaces;
    this.features = this._state.features;
    this.setOptions = (o) => this._state.setOptions(o);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => !!_)).toPromise();
      this.setBuilding(this._org.building);
      this.book_space = {};
      const resources = this._state.form?.get("resources")?.value || [];
      resources.forEach((_) => this.book_space[_.id] = true);
      this.space_list = yield this._getSpaceList();
    });
  }
  handleBookEvent(space, book = true) {
    return __async(this, null, function* () {
      if (this.multiple) {
        this.book_space[space.id] = book;
      } else {
        this.book_space = {};
        this.book_space[space.id] = book;
        this.confirmBooking();
      }
      this.space_list = yield this._getSpaceList();
    });
  }
  confirmBooking() {
    return __async(this, null, function* () {
      const spaces = yield this._getSpaceList();
      this._state.form.patchValue({
        resources: spaces,
        system: spaces[0]
      });
      this._router.navigate(["/book", "spaces", "confirm"]);
    });
  }
  _getSpaceList() {
    const id_list = Object.keys(this.book_space).filter((k) => this.book_space[k]);
    return id_list.length ? Promise.all(id_list.map((_) => this._space_pipe.transform(_))) : Promise.resolve([]);
  }
  static {
    this.\u0275fac = function SpaceFlowFindComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SpaceFlowFindComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SpacePipe));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpaceFlowFindComponent, selectors: [["space-flow-find"]], standalone: false, features: [\u0275\u0275ProvidersFeature([SpacePipe])], decls: 30, vars: 20, consts: [["load_state", ""], ["empty_state", ""], ["menu", "matMenu"], ["topbar", "", 1, ""], ["btn", "", "matRipple", "", 1, "clear", "h-[2.75rem]", "text-white", 3, "routerLink"], [1, "flex", "items-center", "justify-center", "h-full"], [1, "text-xl"], [1, "ml-2", "mx-4"], ["filters", ""], [1, "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto", "py-4"], [1, "text-xl", "uppercase", "font-medium", "text-white"], [1, "flex", "flex-col", "items-center", "sm:flex-row", "space-x-0", "sm:space-x-2"], ["overlay", "", "buildings", "", "class", "w-full sm:w-px sm:flex-1 h-[3.25rem]", "appearance", "outline", 4, "ngIf"], ["class", "w-full sm:w-px sm:flex-1 h-[3.25rem]", "overlay", "", "appearance", "outline", 4, "ngIf"], ["overlay", "", "appearance", "outline", 1, "w-full", "sm:w-px", "sm:flex-1", "h-[3.25rem]", "hidden", "sm:block"], ["placeholder", "Any Capacity", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "w-full sm:w-px sm:flex-1 h-[3.25rem] hidden sm:block", "overlay", "", "appearance", "outline", 4, "ngIf"], [1, "flex-1", "w-full", "bg-base-200", "overflow-auto"], [4, "ngIf", "ngIfElse"], ["class", "bg-base-100 border-t border-base-200", 4, "ngIf"], ["overlay", "", "buildings", "", "appearance", "outline", 1, "w-full", "sm:w-px", "sm:flex-1", "h-[3.25rem]"], ["placeholder", "Select Building...", 3, "ngModelChange", "ngModel"], [3, "value"], ["overlay", "", "appearance", "outline", 1, "w-full", "sm:w-px", "sm:flex-1", "h-[3.25rem]"], ["placeholder", "Level", 3, "ngModelChange", "ngModel"], ["multiple", "", 3, "ngModelChange", "placeholder", "ngModel"], ["class", "w-[640px] max-w-[calc(100%-2rem)] mx-auto ", 3, "space", "multiple", "book", "bookChange", 4, "ngFor", "ngForOf"], [1, "p-4", "text-center", "opacity-60"], [1, "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto", 3, "bookChange", "space", "multiple", "book"], [1, "bg-base-100", "border-t", "border-base-200"], [1, "flex", "items-center", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto", "p-2"], [1, "flex-1", "underline", 3, "matMenuTriggerFor"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], ["yPosition", "above"], ["class", "flex items-center pointer-events-none leading-tight", "mat-menu-item", "", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", "class", " opacity-60", 4, "ngIf"], ["mat-menu-item", "", 1, "flex", "items-center", "pointer-events-none", "leading-tight"], [1, "flex", "flex-col", "mr-4"], [1, "text-xs", "opacity-70"], ["icon", "", "matRipple", "", 1, "pointer-events-auto", 3, "click"], ["mat-menu-item", "", 1, "opacity-60"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "text-center"]], template: function SpaceFlowFindComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "a", 4)(2, "div", 5)(3, "app-icon", 6);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 7);
        \u0275\u0275text(6, "Back");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(7, "div", 8)(8, "div", 9)(9, "h2", 10);
        \u0275\u0275text(10, " Available Spaces ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 11);
        \u0275\u0275template(12, SpaceFlowFindComponent_mat_form_field_12_Template, 5, 6, "mat-form-field", 12);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275template(14, SpaceFlowFindComponent_mat_form_field_14_Template, 6, 8, "mat-form-field", 13);
        \u0275\u0275pipe(15, "async");
        \u0275\u0275elementStart(16, "mat-form-field", 14)(17, "mat-select", 15);
        \u0275\u0275pipe(18, "async");
        \u0275\u0275listener("ngModelChange", function SpaceFlowFindComponent_Template_mat_select_ngModelChange_17_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setOptions({ capacity: $event }));
        });
        \u0275\u0275template(19, SpaceFlowFindComponent_mat_option_19_Template, 2, 2, "mat-option", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, SpaceFlowFindComponent_mat_form_field_20_Template, 5, 7, "mat-form-field", 17);
        \u0275\u0275pipe(21, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 18);
        \u0275\u0275template(23, SpaceFlowFindComponent_ng_container_23_Template, 3, 4, "ng-container", 19);
        \u0275\u0275pipe(24, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, SpaceFlowFindComponent_div_25_Template, 10, 5, "div", 20)(26, SpaceFlowFindComponent_ng_template_26_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(28, SpaceFlowFindComponent_ng_template_28_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_7_0;
        const load_state_r17 = \u0275\u0275reference(27);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c015));
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ((tmp_3_0 = \u0275\u0275pipeBind1(13, 9, ctx.buildings)) == null ? null : tmp_3_0.length) > 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ((tmp_4_0 = \u0275\u0275pipeBind1(15, 11, ctx.levels)) == null ? null : tmp_4_0.length) > 0);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", (tmp_5_0 = \u0275\u0275pipeBind1(18, 13, ctx.options)) == null ? null : tmp_5_0.capacity);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.quick_capacities);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_7_0 = \u0275\u0275pipeBind1(21, 15, ctx.features)) == null ? null : tmp_7_0.length);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(24, 17, ctx.loading))("ngIfElse", load_state_r17);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.multiple);
      }
    }, dependencies: [NgForOf, NgIf, IconComponent, MatOption, MatMenu, MatMenuItem, MatMenuTrigger, MatFormField, MatSelect, MatRipple, MatProgressSpinner, NgControlStatus, NgModel, RouterLink, SpaceFlowFindItemComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[topbar][_ngcontent-%COMP%] {\n  background-color: var(--secondary-dark);\n}\n[filters][_ngcontent-%COMP%] {\n  background-color: var(--p);\n}\n/*# sourceMappingURL=find.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpaceFlowFindComponent, { className: "SpaceFlowFindComponent", filePath: "apps/workplace/src/app/book/space-flow/find.component.ts", lineNumber: 228 });
})();

// apps/workplace/src/app/book/space-flow/confirm.component.ts
var _c016 = () => ["/book", "spaces", "find"];
var _c19 = () => ["/book", "spaces", "form"];
function SpaceFlowConfirmComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" at ", \u0275\u0275pipeBind2(2, 2, ctx_r0.form.value.date, "shortTime"), " ~ ", \u0275\u0275pipeBind2(3, 5, ctx_r0.form.value.date + ctx_r0.form.value.duration * 60 * 1e3, "shortTime"), " ");
  }
}
function SpaceFlowConfirmComponent_div_41_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275text(1, " Map ");
    \u0275\u0275elementEnd();
  }
}
function SpaceFlowConfirmComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SpaceFlowConfirmComponent_div_41_button_3_Template, 2, 0, "button", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", space_r2.display_name || space_r2.name, " [", (space_r2.level == null ? null : space_r2.level.display_name) || (space_r2.level == null ? null : space_r2.level.name), "]");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.can_view_location);
  }
}
function SpaceFlowConfirmComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "a-user-avatar", 25);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.name || user_r3.email);
  }
}
function SpaceFlowConfirmComponent_div_55_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r0.optionsFor(item_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r6.options.length, " option", item_r6.options.length === 1 ? "" : "s", " selected ");
  }
}
function SpaceFlowConfirmComponent_div_55_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 27)(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SpaceFlowConfirmComponent_div_55_div_12_div_4_Template, 2, 3, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a-counter", 30);
    \u0275\u0275twoWayListener("ngModelChange", function SpaceFlowConfirmComponent_div_55_div_12_Template_a_counter_ngModelChange_8_listener($event) {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(item_r6.quantity, $event) || (item_r6.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r6.options.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 4, item_r6.total_cost / 100, ctx_r0.code), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r6.quantity);
  }
}
function SpaceFlowConfirmComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 8)(3, "app-icon");
    \u0275\u0275text(4, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 26);
    \u0275\u0275listener("click", function SpaceFlowConfirmComponent_div_55_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.show_catering = !ctx_r0.show_catering);
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 11);
    \u0275\u0275text(10, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275template(12, SpaceFlowConfirmComponent_div_55_div_12_Template, 9, 7, "div", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.form.value.catering[0] == null ? null : ctx_r0.form.value.catering[0].item_count) || 0, " Catering Item(s) ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.show_people ? "Hide" : "Show", " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c19));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", !ctx_r0.show_catering ? "0" : (ctx_r0.form.value.catering[0] == null ? null : ctx_r0.form.value.catering[0].items.length) * 3 + "rem");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.form.value.catering[0] == null ? null : ctx_r0.form.value.catering[0].items);
  }
}
function SpaceFlowConfirmComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Confirm");
    \u0275\u0275elementEnd();
  }
}
function SpaceFlowConfirmComponent_mat_spinner_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 32);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 24);
  }
}
var SpaceFlowConfirmComponent = class _SpaceFlowConfirmComponent {
  optionsFor(item) {
    return item.options.map((i) => i.name).join("\n");
  }
  get can_view_location() {
    return !this._settings.get("app.no_maps");
  }
  get form() {
    return this._state.form;
  }
  get code() {
    return this._org.currency_code;
  }
  constructor(_org, _state, _settings) {
    this._org = _org;
    this._state = _state;
    this._settings = _settings;
    this.show_spaces = false;
    this.show_people = false;
    this.show_catering = false;
    this.loading = false;
    this.postForm = () => __async(this, null, function* () {
      this.loading = true;
      yield this._state.postForm().catch((_) => notifyError(_ instanceof Object ? _.message || "Bad Request" : _));
      this.loading = false;
    });
  }
  static {
    this.\u0275fac = function SpaceFlowConfirmComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SpaceFlowConfirmComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpaceFlowConfirmComponent, selectors: [["space-flow-confirm"]], standalone: false, decls: 60, vars: 34, consts: [["topbar", "", 1, ""], ["button", "", "btn", "", "matRipple", "", 1, "clear", "h-[2.75rem]", "text-white", 3, "routerLink"], [1, "flex", "items-center", "justify-center", "h-full"], [1, "text-xl"], [1, "ml-2", "mx-4"], [1, "flex", "flex-col", "items-center", "space-y-2", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto", "mb-4"], [1, "text-xl", "uppercase", "font-medium", "w-full", "my-4"], [1, "flex", "items-center", "py-2", "space-x-2", "border-b", "border-base-200", "w-full"], [1, "p-2", "rounded-full", "bg-base-200", "mr-2"], [1, "flex-1", "truncate"], [4, "ngIf"], ["btn", "", "matRipple", "", 1, "clear", "underline", 3, "routerLink"], [1, "border-b", "border-base-200", "w-full"], [1, "flex", "items-center", "py-2", "space-x-2"], ["matRipple", "", 1, "clear", "bg-transparent", "border-none", "underline", 3, "click", "disabled"], ["list", "", 1, "overflow-hidden"], ["class", "flex items-center h-10 pl-12", 4, "ngFor", "ngForOf"], ["class", "flex items-center h-12 pl-12 space-x-2", 4, "ngFor", "ngForOf"], ["class", "border-b border-base-200 w-full", 4, "ngIf"], ["matRipple", "", "confirm", "", 1, "w-32", 3, "click", "disabled"], ["class", "mx-auto", 3, "diameter", 4, "ngIf"], [1, "flex", "items-center", "h-10", "pl-12"], ["matRipple", "", "class", "bg-transparent border-none underline", 4, "ngIf"], ["matRipple", "", 1, "bg-transparent", "border-none", "underline"], [1, "flex", "items-center", "h-12", "pl-12", "space-x-2"], [1, "text-sm", 3, "user"], ["matRipple", "", 1, "clear", "bg-transparent", "border-none", "underline", 3, "click"], [1, "flex-1", "w-1/2"], ["class", "text-xs underline", 3, "matTooltip", 4, "ngIf"], [1, "bg-primary", "text-xs", "rounded", "px-4", "py-2", "mx-2", "text-white", "font-medium"], [3, "ngModelChange", "ngModel"], [1, "text-xs", "underline", 3, "matTooltip"], [1, "mx-auto", 3, "diameter"]], template: function SpaceFlowConfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1)(2, "div", 2)(3, "app-icon", 3);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Back");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "h2", 6);
        \u0275\u0275text(9, " Your meeting details ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "app-icon");
        \u0275\u0275text(13, "event");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 9);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "date");
        \u0275\u0275template(17, SpaceFlowConfirmComponent_span_17_Template, 4, 8, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 11);
        \u0275\u0275text(19, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 7)(21, "div", 8)(22, "app-icon");
        \u0275\u0275text(23, "schedule");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 9);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "duration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "a", 11);
        \u0275\u0275text(28, " Edit ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 12)(30, "div", 13)(31, "div", 8)(32, "app-icon");
        \u0275\u0275text(33, "place");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 9);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "button", 14);
        \u0275\u0275listener("click", function SpaceFlowConfirmComponent_Template_button_click_36_listener() {
          return ctx.show_spaces = !ctx.show_spaces;
        });
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "a", 11);
        \u0275\u0275text(39, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 15);
        \u0275\u0275template(41, SpaceFlowConfirmComponent_div_41_Template, 4, 3, "div", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 12)(43, "div", 13)(44, "div", 8)(45, "app-icon");
        \u0275\u0275text(46, "group");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 9);
        \u0275\u0275text(48);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "button", 14);
        \u0275\u0275listener("click", function SpaceFlowConfirmComponent_Template_button_click_49_listener() {
          return ctx.show_people = !ctx.show_people;
        });
        \u0275\u0275text(50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "a", 11);
        \u0275\u0275text(52, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 15);
        \u0275\u0275template(54, SpaceFlowConfirmComponent_div_54_Template, 4, 2, "div", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(55, SpaceFlowConfirmComponent_div_55_Template, 13, 7, "div", 18);
        \u0275\u0275elementStart(56, "button", 19);
        \u0275\u0275listener("click", function SpaceFlowConfirmComponent_Template_button_click_56_listener() {
          return ctx.postForm();
        });
        \u0275\u0275template(57, SpaceFlowConfirmComponent_span_57_Template, 2, 0, "span", 10)(58, SpaceFlowConfirmComponent_mat_spinner_58_Template, 1, 1, "mat-spinner", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275text(59, " < ");
      }
      if (rf & 2) {
        let tmp_6_0;
        let tmp_7_0;
        let tmp_10_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_13_0;
        let tmp_16_0;
        let tmp_17_0;
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(29, _c016));
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 24, ctx.form.value.date, "longDate"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.form.value.all_day);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(30, _c19));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.form.value.all_day ? "All Day" : \u0275\u0275pipeBind1(26, 27, ctx.form.value.duration), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(31, _c19));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", (tmp_6_0 = ctx.form.get("resources")) == null ? null : tmp_6_0.value == null ? null : tmp_6_0.value.length, " Space(s) ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !((tmp_7_0 = ctx.form.get("resources")) == null ? null : tmp_7_0.value == null ? null : tmp_7_0.value.length));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.show_spaces ? "Hide" : "Show", " ");
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(32, _c016));
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("height", !ctx.show_spaces ? "0" : ((tmp_10_0 = ctx.form.get("resources")) == null ? null : tmp_10_0.value == null ? null : tmp_10_0.value.length) * 2.5 + "rem");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", (tmp_11_0 = ctx.form.get("resources")) == null ? null : tmp_11_0.value);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ((tmp_12_0 = ctx.form.get("attendees")) == null ? null : tmp_12_0.value == null ? null : tmp_12_0.value.length) || 0, " Attendee(s) ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !((tmp_13_0 = ctx.form.get("attendees")) == null ? null : tmp_13_0.value == null ? null : tmp_13_0.value.length));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.show_people ? "Hide" : "Show", " ");
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(33, _c19));
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("height", !ctx.show_people ? "0" : ((tmp_16_0 = ctx.form.get("attendees")) == null ? null : tmp_16_0.value == null ? null : tmp_16_0.value.length) * 3 + "rem");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", (tmp_17_0 = ctx.form.get("attendees")) == null ? null : tmp_17_0.value);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.value.catering == null ? null : ctx.form.value.catering.length);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
      }
    }, dependencies: [NgForOf, NgIf, IconComponent, UserAvatarComponent, MatRipple, MatProgressSpinner, MatTooltip, CounterComponent, NgControlStatus, NgModel, RouterLink, CurrencyPipe, DatePipe, DurationPipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[topbar][_ngcontent-%COMP%] {\n  background-color: #00539f;\n}\n[list][_ngcontent-%COMP%] {\n  transition: height 200ms;\n}\n/*# sourceMappingURL=confirm.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpaceFlowConfirmComponent, { className: "SpaceFlowConfirmComponent", filePath: "apps/workplace/src/app/book/space-flow/confirm.component.ts", lineNumber: 274 });
})();

// apps/workplace/src/app/book/space-flow.component.ts
function BookSpaceFlowComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "space-flow-find");
    \u0275\u0275elementContainerEnd();
  }
}
function BookSpaceFlowComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "space-flow-confirm");
    \u0275\u0275elementContainerEnd();
  }
}
function BookSpaceFlowComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "flow-success", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("calendar", ctx_r0.last_success == null ? null : ctx_r0.last_success.host);
  }
}
function BookSpaceFlowComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "space-flow-form");
    \u0275\u0275elementContainerEnd();
  }
}
var BookSpaceFlowComponent = class _BookSpaceFlowComponent extends AsyncHandler {
  get view() {
    return this._state.view;
  }
  get last_success() {
    return this._state.last_success;
  }
  constructor(_state, _route) {
    super();
    this._state = _state;
    this._route = _route;
  }
  ngOnInit() {
    this._state.loadForm();
    this.subscription("route.params", this._route.paramMap.subscribe((param) => {
      if (param.has("step"))
        this._state.setView(param.get("step"));
    }));
    this.subscription("route.query", this._route.queryParamMap.subscribe((param) => {
      if (param.has("success"))
        this._state.setView(param.get("success"));
    }));
  }
  static {
    this.\u0275fac = function BookSpaceFlowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookSpaceFlowComponent)(\u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookSpaceFlowComponent, selectors: [["placeos-book-space-flow"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 4, consts: [[1, "bg-base-100", "h-full", "w-full"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "calendar"]], template: function BookSpaceFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275elementContainerStart(1, 1);
        \u0275\u0275template(2, BookSpaceFlowComponent_ng_container_2_Template, 2, 0, "ng-container", 2)(3, BookSpaceFlowComponent_ng_container_3_Template, 2, 0, "ng-container", 2)(4, BookSpaceFlowComponent_ng_container_4_Template, 2, 1, "ng-container", 2)(5, BookSpaceFlowComponent_ng_container_5_Template, 2, 0, "ng-container", 3);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitch", ctx.view);
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "find");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "confirm");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "success");
      }
    }, dependencies: [NgSwitch, NgSwitchCase, NgSwitchDefault, SpaceFlowFormComponent, SpaceFlowFindComponent, SpaceFlowConfirmComponent, FlowSuccessComponent], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=space-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookSpaceFlowComponent, { className: "BookSpaceFlowComponent", filePath: "apps/workplace/src/app/book/space-flow.component.ts", lineNumber: 39 });
})();

// apps/workplace/src/app/book/parking-flow/parking-flow-map.component.ts
var _c017 = () => ({});
function ParkingFlowMapComponent_div_0_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function ParkingFlowMapComponent_div_0_button_2_Template_button_click_0_listener() {
      const date_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setDate(date_r2.id));
    });
    \u0275\u0275elementStart(2, "p", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 16);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 17);
    \u0275\u0275text(8, "Available");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const date_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", date_r2.id === ((tmp_4_0 = \u0275\u0275pipeBind1(1, 4, ctx_r2.options)) == null ? null : tmp_4_0.date));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(date_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (\u0275\u0275pipeBind1(6, 6, ctx_r2.counts) || \u0275\u0275pureFunction0(8, _c017))[date_r2.id] || "0", " ");
  }
}
function ParkingFlowMapComponent_div_0_div_5_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
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
function ParkingFlowMapComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-form-field", 19)(2, "mat-select", 20);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function ParkingFlowMapComponent_div_0_div_5_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setLevel($event == null ? null : $event.id));
    });
    \u0275\u0275template(4, ParkingFlowMapComponent_div_0_div_5_mat_option_4_Template, 2, 2, "mat-option", 21);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(3, 2, ctx_r2.level));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 4, ctx_r2.levels));
  }
}
function ParkingFlowMapComponent_div_0_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function ParkingFlowMapComponent_div_0_button_10_Template_button_click_0_listener() {
      const space_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActive(space_r7));
    });
    \u0275\u0275elementStart(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const space_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ((tmp_4_0 = \u0275\u0275pipeBind1(1, 4, ctx_r2.active_space)) == null ? null : tmp_4_0.id) === space_r7.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Bay No. ", space_r7.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.levelName(space_r7.zone_id), " ");
  }
}
function ParkingFlowMapComponent_div_0_div_22_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, " Note that your existing parking space reservation will be replaced ");
    \u0275\u0275elementEnd();
  }
}
function ParkingFlowMapComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ParkingFlowMapComponent_div_0_div_22_p_4_Template, 2, 0, "p", 27);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "button", 28);
    \u0275\u0275listener("click", function ParkingFlowMapComponent_div_0_div_22_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.reserveSpace());
    });
    \u0275\u0275text(7, " Reserve Space ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Parking Bay No. ", \u0275\u0275pipeBind1(3, 2, ctx_r2.active_space).name, " selected. ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_4_0 = \u0275\u0275pipeBind1(5, 4, ctx_r2.existing)) == null ? null : tmp_4_0.length);
  }
}
function ParkingFlowMapComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Parking is not available for ", ((tmp_3_0 = \u0275\u0275pipeBind1(3, 1, ctx_r2.building)) == null ? null : tmp_3_0.display_name) || ((tmp_3_0 = \u0275\u0275pipeBind1(4, 3, ctx_r2.building)) == null ? null : tmp_3_0.name), " ");
  }
}
function ParkingFlowMapComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275template(2, ParkingFlowMapComponent_div_0_button_2_Template, 9, 9, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6);
    \u0275\u0275template(5, ParkingFlowMapComponent_div_0_div_5_Template, 6, 6, "div", 7);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ParkingFlowMapComponent_div_0_button_10_Template, 6, 6, "button", 8);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275element(13, "interactive-map", 10);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275pipe(15, "async");
    \u0275\u0275pipe(16, "async");
    \u0275\u0275pipe(17, "async");
    \u0275\u0275pipe(18, "async");
    \u0275\u0275pipe(19, "async");
    \u0275\u0275pipe(20, "async");
    \u0275\u0275element(21, "explore-zoom-controls", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ParkingFlowMapComponent_div_0_div_22_Template, 8, 6, "div", 12);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275template(24, ParkingFlowMapComponent_div_0_div_24_Template, 5, 5, "div", 13);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_14_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.dates);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_3_0 = \u0275\u0275pipeBind1(6, 13, ctx_r2.levels)) == null ? null : tmp_3_0.length) > 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (tmp_4_0 = \u0275\u0275pipeBind1(9, 15, ctx_r2.available)) == null ? null : tmp_4_0.length, " space(s) available");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(11, 17, ctx_r2.available));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", \u0275\u0275pipeBind1(14, 19, ctx_r2.url))("zoom", (tmp_7_0 = \u0275\u0275pipeBind1(15, 21, ctx_r2.positions)) == null ? null : tmp_7_0.zoom)("center", (tmp_8_0 = \u0275\u0275pipeBind1(16, 23, ctx_r2.positions)) == null ? null : tmp_8_0.center)("styles", \u0275\u0275pipeBind1(17, 25, ctx_r2.styles))("features", \u0275\u0275pipeBind1(18, 27, ctx_r2.features))("actions", \u0275\u0275pipeBind1(19, 29, ctx_r2.actions))("labels", \u0275\u0275pipeBind1(20, 31, ctx_r2.labels));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(23, 33, ctx_r2.active_space));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_14_0 = \u0275\u0275pipeBind1(25, 35, ctx_r2.levels)) == null ? null : tmp_14_0.length));
  }
}
function ParkingFlowMapComponent_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "mat-spinner", 33);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Reserving parking space...");
    \u0275\u0275elementEnd()();
  }
}
function ParkingFlowMapComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ParkingFlowMapComponent_ng_template_2_div_0_Template, 4, 0, "div", 31);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !((tmp_2_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.levels)) == null ? null : tmp_2_0.length));
  }
}
var SpacePingComponent = class _SpacePingComponent extends AsyncHandler {
  constructor(_details) {
    super();
    this._details = _details;
    this.zoom = 1;
    this.ratio = 1;
    this.subscription("zoom", this._details.zoom$?.subscribe((_) => this.zoom = _));
    this.subscription("ratio", this._details.ratio$?.subscribe((_) => this.ratio = _));
  }
  static {
    this.\u0275fac = function SpacePingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SpacePingComponent)(\u0275\u0275directiveInject(MAP_FEATURE_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpacePingComponent, selectors: [["space-ping"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 2, consts: [[1, "absolute", "inset-0", "pointer-events-auto"], [1, "absolute", "inset-0", "animate-ping", "border-4", "border-green-600"]], template: function SpacePingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("transform", "scale(" + ctx.zoom * ctx.ratio + ")");
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpacePingComponent, { className: "SpacePingComponent", filePath: "apps/workplace/src/app/book/parking-flow/parking-flow-map.component.ts", lineNumber: 26 });
})();
var ParkingFlowMapComponent = class _ParkingFlowMapComponent extends AsyncHandler {
  levelName(zone_id) {
    const lvl = this._org.levelWithID([zone_id]);
    return lvl?.display_name || lvl?.name || "";
  }
  setActive(space) {
    if (space === this.active_space.getValue())
      this.active_space.next(null);
    else {
      this._booking.form.patchValue({
        asset_id: space.id,
        asset_name: space.name
      });
      this.active_space.next(space);
    }
  }
  constructor(_state, _parking, _org, _booking, _router) {
    super();
    this._state = _state;
    this._parking = _parking;
    this._org = _org;
    this._booking = _booking;
    this._router = _router;
    this.url = this._state.map_url;
    this.styles = this._state.map_styles;
    this.positions = this._state.map_positions;
    this.features = this._state.map_features;
    this.actions = this._state.map_actions;
    this.labels = this._state.map_labels;
    this.building = this._org.active_building;
    this.level = this._state.level;
    this.levels = this._parking.levels;
    this.available = this._parking.available_spaces;
    this.options = this._parking.options;
    this.loading = this._booking.loading;
    this.active_space = new BehaviorSubject(null);
    this.dates = new Array(7).fill(0).map((_, idx) => ({
      id: startOfDay(addDays(Date.now(), idx)).valueOf(),
      name: format(addDays(Date.now(), idx), "EEE, dd MMM"),
      available: 0
    }));
    this.setDate = (d) => this._parking.setOptions({ date: d });
    this.setLevel = (l) => this._state.setLevel(l);
    this.reserveSpace = () => __async(this, null, function* () {
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this._state.reset();
      this.subscription("levels", this._parking.levels.subscribe((levels) => {
        this._state.setLevel(levels[0]?.id);
      }));
      this.subscription("spaces", this._parking.available_spaces.subscribe((spaces) => {
        this._state.setActions("parking_spaces", (spaces || []).map((_) => ({
          id: _.map_id,
          action: "click",
          callback: () => this.setActive(_)
        })));
      }));
      this.subscription("active_space", this.active_space.subscribe((space) => {
        if (!space)
          return this._state.setFeatures("parking_space", []);
        this._state.setFeatures("parking_space", [
          {
            location: space.map_id,
            content: SpacePingComponent,
            full_size: true,
            z_index: 0
          }
        ]);
      }));
    });
  }
  static {
    this.\u0275fac = function ParkingFlowMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingFlowMapComponent)(\u0275\u0275directiveInject(ExploreStateService), \u0275\u0275directiveInject(ExploreParkingService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingFlowMapComponent, selectors: [["parking-flow-map"]], standalone: false, features: [\u0275\u0275ProvidersFeature([ExploreParkingService]), \u0275\u0275InheritDefinitionFeature], decls: 4, vars: 4, consts: [["load_state", ""], ["class", "w-full h-full flex flex-col items-center relative", 4, "ngIf", "ngIfElse"], [1, "w-full", "h-full", "flex", "flex-col", "items-center", "relative"], [1, "p-4", "flex", "items-center", "justify-center", "bg-secondary", "w-full", "shadow", "z-10", "text-white", "space-x-2"], ["matRipple", "", "class", "border border-white flex flex-col items-center justify-center h-24 w-28 rounded", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "flex", "w-full", "h-1/2", "flex-1", "z-0"], [1, "p-2", "sm:w-[18rem]", "w-full", "h-full", "bg-base-200", "shadow", "border-r", "border-base-200", "z-10", "overflow-auto", "space-y-2"], ["class", "bg-base-100 sticky top-0 w-full z-10", 4, "ngIf"], ["matRipple", "", "class", "flex items-center justify-between bg-base-100 rounded-lg border border-base-200 p-2 w-full", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "bg-base-200", "flex-1", "w-1/2", "h-full", "z-0", "relative", "hidden", "sm:block"], [3, "src", "zoom", "center", "styles", "features", "actions", "labels"], [1, "absolute", "bottom-0", "right-0"], ["class", "absolute left-1/2 bottom-2 -translate-x-1/2 bg-base-100 shadow rounded p-4 flex flex-col space-y-2", 4, "ngIf"], ["class", "absolute inset-0 bg-base-100/80 flex flex-col items-center justify-center z-50", 4, "ngIf"], ["matRipple", "", 1, "border", "border-white", "flex", "flex-col", "items-center", "justify-center", "h-24", "w-28", "rounded", 3, "click"], [1, "mb-2", "font-medium"], [1, "text-2xl"], [1, "text-sm"], [1, "bg-base-100", "sticky", "top-0", "w-full", "z-10"], ["appearance", "outline", 1, "w-full", "h-[3.25rem]"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matRipple", "", 1, "flex", "items-center", "justify-between", "bg-base-100", "rounded-lg", "border", "border-base-200", "p-2", "w-full", 3, "click"], [1, "text-lg"], [1, "opacity-60"], [1, "absolute", "left-1/2", "bottom-2", "-translate-x-1/2", "bg-base-100", "shadow", "rounded", "p-4", "flex", "flex-col", "space-y-2"], ["class", "p-2 rounded text-sm max-w-[20rem] text-center text-pending leading-tight", 4, "ngIf"], ["btn", "", "matRipple", "", 3, "click"], [1, "p-2", "rounded", "text-sm", "max-w-[20rem]", "text-center", "text-pending", "leading-tight"], [1, "absolute", "inset-0", "bg-base-100/80", "flex", "flex-col", "items-center", "justify-center", "z-50"], ["class", "absolute inset-0 bg-base-100/80 flex flex-col items-center justify-center z-50 space-y-2", 4, "ngIf"], [1, "absolute", "inset-0", "bg-base-100/80", "flex", "flex-col", "items-center", "justify-center", "z-50", "space-y-2"], ["diameter", "32"]], template: function ParkingFlowMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ParkingFlowMapComponent_div_0_Template, 26, 37, "div", 1);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275template(2, ParkingFlowMapComponent_ng_template_2_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r9 = \u0275\u0275reference(3);
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(1, 2, ctx.loading))("ngIfElse", load_state_r9);
      }
    }, dependencies: [NgForOf, NgIf, InteractiveMapComponent, MatOption, MatFormField, MatSelect, MatRipple, MatProgressSpinner, NgControlStatus, NgModel, ExploreZoomControlComponent, AsyncPipe], styles: ["\n\n.active[_ngcontent-%COMP%] {\n  background-color: var(--s) !important;\n  color: #fff;\n}\n.selected[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n  color: #000d;\n}\n/*# sourceMappingURL=parking-flow-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingFlowMapComponent, { className: "ParkingFlowMapComponent", filePath: "apps/workplace/src/app/book/parking-flow/parking-flow-map.component.ts", lineNumber: 180 });
})();

// apps/workplace/src/app/book/parking-flow/parking-flow-confirm.component.ts
var ParkingFlowConfirmComponent = class _ParkingFlowConfirmComponent {
  static {
    this.\u0275fac = function ParkingFlowConfirmComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingFlowConfirmComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingFlowConfirmComponent, selectors: [["parking-flow-confirm"]], standalone: false, decls: 0, vars: 0, template: function ParkingFlowConfirmComponent_Template(rf, ctx) {
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingFlowConfirmComponent, { className: "ParkingFlowConfirmComponent", filePath: "apps/workplace/src/app/book/parking-flow/parking-flow-confirm.component.ts", lineNumber: 9 });
})();

// apps/workplace/src/app/book/parking-flow.component.ts
function BookParkingFlowComponent_parking_flow_confirm_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-flow-confirm");
  }
}
function BookParkingFlowComponent_flow_success_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "flow-success", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("calendar", ctx_r0.last_success == null ? null : ctx_r0.last_success.host);
  }
}
function BookParkingFlowComponent_parking_flow_map_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-flow-map");
  }
}
var BookParkingFlowComponent = class _BookParkingFlowComponent extends AsyncHandler {
  get view() {
    return this._state.view;
  }
  get last_success() {
    return this._state.last_success;
  }
  constructor(_state, _route) {
    super();
    this._state = _state;
    this._route = _route;
  }
  ngOnInit() {
    this._state.setOptions({ type: "parking" });
    this._state.loadForm();
    if (!this._state.form)
      this._state.newForm();
    this.subscription("route.params", this._route.paramMap.subscribe((param) => {
      if (param.has("step"))
        this._state.setView(param.get("step"));
    }));
    this.subscription("route.query", this._route.queryParamMap.subscribe((param) => {
      if (param.has("success"))
        this._state.setView(param.get("success"));
    }));
  }
  static {
    this.\u0275fac = function BookParkingFlowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookParkingFlowComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookParkingFlowComponent, selectors: [["placeos-book-parking-flow"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 3, consts: [[1, "bg-base-100", "h-full", "w-full"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["route", "parking", "type", "parking", 3, "calendar", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["route", "parking", "type", "parking", 3, "calendar"]], template: function BookParkingFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275elementContainerStart(1, 1);
        \u0275\u0275template(2, BookParkingFlowComponent_parking_flow_confirm_2_Template, 1, 0, "parking-flow-confirm", 2)(3, BookParkingFlowComponent_flow_success_3_Template, 1, 1, "flow-success", 3)(4, BookParkingFlowComponent_parking_flow_map_4_Template, 1, 0, "parking-flow-map", 4);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitch", ctx.view);
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "confirm");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "success");
      }
    }, dependencies: [NgSwitch, NgSwitchCase, NgSwitchDefault, ParkingFlowMapComponent, ParkingFlowConfirmComponent, FlowSuccessComponent], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=parking-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookParkingFlowComponent, { className: "BookParkingFlowComponent", filePath: "apps/workplace/src/app/book/parking-flow.component.ts", lineNumber: 35 });
})();

// apps/workplace/src/app/book/meeting-flow/meeting-flow-confirm-modal.component.ts
var _c018 = (a0) => ({ count: a0 });
var _c110 = (a0) => ({ time: a0 });
function MeetingFlowConfirmModalComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 21)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function MeetingFlowConfirmModalComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "app-icon", 11);
    \u0275\u0275text(2, "update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatted_recurrence);
  }
}
function MeetingFlowConfirmModalComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formattedTime(ctx_r0.tz), " ");
  }
}
function MeetingFlowConfirmModalComponent_div_29_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "app-icon", 11);
    \u0275\u0275text(3, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", (ctx_r0.level == null ? null : ctx_r0.level.display_name) || (ctx_r0.level == null ? null : ctx_r0.level.name), ", ", s_r2.display_name || s_r2.name, " ");
  }
}
function MeetingFlowConfirmModalComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "app-icon");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MeetingFlowConfirmModalComponent_div_29_ng_container_7_Template, 6, 2, "ng-container", 23);
    \u0275\u0275elementStart(8, "div", 10)(9, "app-icon", 11);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "APP.WORKPLACE.MEETING_BOOKED_ROOM"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.event.resources);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.location);
  }
}
function MeetingFlowConfirmModalComponent_div_30_mat_chip_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip")(1, "div", 27)(2, "app-icon", 28);
    \u0275\u0275text(3, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", user_r3.name || user_r3.email, " ");
  }
}
function MeetingFlowConfirmModalComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 8)(2, "app-icon");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 25)(8, "mat-chip-list", 26, 0);
    \u0275\u0275template(10, MeetingFlowConfirmModalComponent_div_30_mat_chip_10_Template, 5, 1, "mat-chip", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 2, "CALENDAR_EVENT.ATTENDEE_COUNT", \u0275\u0275pureFunction1(5, _c018, ctx_r0.event.attendees.length)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.event.attendees);
  }
}
function MeetingFlowConfirmModalComponent_div_31_div_1_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "app-icon");
    \u0275\u0275text(2, "priority_high");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("matTooltip", ctx_r0.err_tooltip);
  }
}
function MeetingFlowConfirmModalComponent_div_31_div_1_div_8_div_16_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("matTooltip", ctx_r0.optionList(item_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "CALENDAR_EVENT.CATERING_ORDER_OPTION_COUNT", \u0275\u0275pureFunction1(5, _c018, (item_r4.option_list == null ? null : item_r4.option_list.length) || "0")), " ");
  }
}
function MeetingFlowConfirmModalComponent_div_31_div_1_div_8_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MeetingFlowConfirmModalComponent_div_31_div_1_div_8_div_16_span_4_Template, 3, 7, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 46);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 46);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.name || "Item");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r4.option_list == null ? null : item_r4.option_list.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r4.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 5, item_r4.unit_price_with_options / 100, ctx_r0.currency_code), " ea ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 8, item_r4.total_cost / 100, ctx_r0.currency_code), " ");
  }
}
function MeetingFlowConfirmModalComponent_div_31_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33)(3, "div", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MeetingFlowConfirmModalComponent_div_31_div_1_div_8_div_7_Template, 3, 1, "div", 35);
    \u0275\u0275element(8, "div", 36);
    \u0275\u0275elementStart(9, "div", 37);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 38);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 39);
    \u0275\u0275template(16, MeetingFlowConfirmModalComponent_div_31_div_1_div_8_div_16_Template, 13, 11, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-error", ctx_r0.end_time < order_r5.deliver_at)("border-base-300", ctx_r0.end_time >= order_r5.deliver_at);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 12, "CALENDAR_EVENT.CATERING_ORDER_AT", \u0275\u0275pureFunction1(21, _c110, \u0275\u0275pipeBind2(5, 9, order_r5.deliver_at, "MMM d, " + ctx_r0.time_format))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.end_time < order_r5.deliver_at);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 15, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(23, _c018, order_r5.item_count)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Total: ", \u0275\u0275pipeBind2(14, 18, order_r5.total_cost / 100, ctx_r0.currency_code), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", order_r5.items);
  }
}
function MeetingFlowConfirmModalComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "app-icon");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 29);
    \u0275\u0275template(8, MeetingFlowConfirmModalComponent_div_31_div_1_div_8_Template, 17, 25, "div", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "RESOURCE.CATERING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.catering_orders);
  }
}
function MeetingFlowConfirmModalComponent_div_31_div_2_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "app-icon");
    \u0275\u0275text(2, "priority_high");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", ctx_r0.err_tooltip(request_r6));
  }
}
function MeetingFlowConfirmModalComponent_div_31_div_2_div_6_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 45);
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
function MeetingFlowConfirmModalComponent_div_31_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 32)(2, "div", 33)(3, "div", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MeetingFlowConfirmModalComponent_div_31_div_2_div_6_div_7_Template, 3, 1, "div", 35);
    \u0275\u0275element(8, "div", 36);
    \u0275\u0275elementStart(9, "div", 37);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 39);
    \u0275\u0275template(13, MeetingFlowConfirmModalComponent_div_31_div_2_div_6_div_13_Template, 6, 2, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-error", ctx_r0.end_time < request_r6.deliver_at)("border-base-300", ctx_r0.end_time >= request_r6.deliver_at);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 11, "CALENDAR_EVENT.ASSETS_REQUESTED_FOR", \u0275\u0275pureFunction1(17, _c110, \u0275\u0275pipeBind2(5, 8, request_r6.deliver_at_time, "MMM d, " + ctx_r0.time_format))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.end_time < request_r6.deliver_at || request_r6.conflict);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 14, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(19, _c018, request_r6.item_count)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", request_r6.items);
  }
}
function MeetingFlowConfirmModalComponent_div_31_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "app-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, MeetingFlowConfirmModalComponent_div_31_div_2_div_6_Template, 14, 21, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("!border-error", ctx_r0.has_conflict)("!text-error", ctx_r0.has_conflict);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.has_conflict ? "close" : "done");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("RESOURCE.ASSETS");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.assets);
  }
}
function MeetingFlowConfirmModalComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, MeetingFlowConfirmModalComponent_div_31_div_1_Template, 9, 4, "div", 17)(2, MeetingFlowConfirmModalComponent_div_31_div_2_Template, 7, 7, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.event.catering == null ? null : ctx_r0.event.catering.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.assets == null ? null : ctx_r0.assets.length);
  }
}
function MeetingFlowConfirmModalComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 8)(2, "app-icon");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 50);
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "CALENDAR_EVENTS.NOTES_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(8, 4, ctx_r0.event.body), \u0275\u0275sanitizeHtml);
  }
}
function MeetingFlowConfirmModalComponent_footer_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 51)(1, "button", 52);
    \u0275\u0275listener("click", function MeetingFlowConfirmModalComponent_footer_33_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.postForm());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.CONFIRM"), " ");
  }
}
var MeetingFlowConfirmModalComponent = class _MeetingFlowConfirmModalComponent extends AsyncHandler {
  err_tooltip(request) {
    return request.conflict ? i18n("FORM.ASSETS_CLASH_ERROR") : i18n("FORM.ASSETS_TIME_ERROR");
  }
  get has_assets() {
    return !!this._settings.get("app.events.has_assets");
  }
  get has_conflict() {
    return this.assets?.some((_) => _.conflict);
  }
  formattedTime(tz) {
    const date = this.event.date;
    const date_end = this.event.date_end;
    const all_day = this.event.all_day;
    const tz_format = this._date.transform(date, "zzzz", tz);
    const start_date = this._date.transform(date, "MMM d", tz);
    const start_time = this._date.transform(date, this.time_format, tz);
    const end_date = this._date.transform(date_end, "MMM d", tz);
    const end_time = this._date.transform(date_end, this.time_format, tz);
    if (this.is_multiday) {
      return `${start_date}${all_day ? "" : ", " + start_time} - ${end_date}${all_day ? "" : ", " + end_time}`;
    } else if (all_day) {
      return "All Day";
    }
    return `${start_time} - ${end_time} ${"(" + tz_format + ")"}`;
  }
  get is_multiday() {
    return this.event.duration > 24 * 60;
  }
  get time_format() {
    return this._settings.time_format;
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    return getTimezoneOffsetString(tz);
  }
  get end_time() {
    return this.event.all_day ? endOfDay(this.event.date_end).valueOf() : this.event.date_end;
  }
  get event() {
    return this._event_form.form.getRawValue();
  }
  get space() {
    return this.event.resources[0];
  }
  get level() {
    return this._org.levelWithID(this.space.zones);
  }
  get location() {
    const building = this._org.buildings.find((_) => this.space.zones.includes(_.id));
    return building?.address || building?.display_name || building?.name;
  }
  get code() {
    return this._org.currency_code;
  }
  get formatted_recurrence() {
    return formatRecurrence2(__spreadProps(__spreadValues({}, this.event.recurrence), {
      start: this.event.date || this.event.recurrence.start
    }));
  }
  constructor(_event_form, _org, _space_pipe, _dialog_ref, _dialog, _settings) {
    super();
    this._event_form = _event_form;
    this._org = _org;
    this._space_pipe = _space_pipe;
    this._dialog_ref = _dialog_ref;
    this._dialog = _dialog;
    this._settings = _settings;
    this.show_close = false;
    this._loading = new BehaviorSubject(false);
    this._date = new DatePipe("en");
    this.loading = combineLatest([
      this._event_form.loading,
      this._loading
    ]).pipe(map(([a, b]) => a || b));
    this.postForm = () => __async(this, null, function* () {
      if (!this.space) {
        const result = yield openConfirmModal({
          title: i18n("APP.WORKPLACE.MEETING_WITHOUT_ROOM_TITLE"),
          content: i18n("APP.WORKPLACE.MEETING_WITHOUT_ROOM_MSG"),
          icon: { content: "event_available" }
        }, this._dialog);
        if (result.reason !== "done")
          return;
        result.close();
      }
      const resp = yield this._event_form.postForm().catch((_) => {
        notifyError(_);
        return false;
      });
      if (resp)
        this.dismiss(true);
    });
    this.cancelPost = () => this._event_form.cancelPostForm();
    this.dismiss = (e2) => this._dialog_ref?.close(e2);
    this._space = this.event.resources[0];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const date = this.event.all_day ? startOfDay(this.event.date).valueOf() : this.event.date;
      this.catering_orders = this.event.catering?.map((order) => new CateringOrder(__spreadProps(__spreadValues({}, order), {
        event: __spreadProps(__spreadValues({}, this.event), {
          date,
          date_end: addMinutes(date, this.event.duration).valueOf()
        })
      })));
      this.assets = this.event.assets?.map((_) => new AssetRequest(__spreadProps(__spreadValues({}, _), { event: this.event })));
      this._space = (yield this._space_pipe.transform(this.event.resources[0]?.email)) || this._space;
      const changed_spaces = !this._event_form.event || this.event.resources[0]?.id !== this._event_form.event?.space?.id;
      const changed_times = !this._event_form.event || this.event.date !== this._event_form.event.date || this.event.date_end !== this._event_form.event.date_end;
      const event = this._event_form.form.value;
      this._loading.next(true);
      if (this.has_assets && event.assets.length) {
        yield validateAssetRequestsForResource(this._event_form.event || {}, {
          date: this.event.date,
          duration: this.event.duration,
          host: this.event.host,
          all_day: this.event.all_day,
          location_name: this._space?.display_name || this._space?.name || "",
          location_id: this._space?.id || "",
          zones: this._space?.level?.parent_id ? [this._space?.level?.parent_id] : [this._org.building?.id],
          reset_state: changed_times
        }, event.assets, changed_spaces || changed_times).catch((e2) => notifyError(e2));
        this.timeout("update_assets", () => {
          this.assets = event.assets?.map((_) => new AssetRequest(__spreadProps(__spreadValues({}, _), { event })));
          this._event_form.form.patchValue({ assets: event.assets });
        }, 100);
      }
      this._loading.next(false);
    });
  }
  optionList(item) {
    return item.option_list?.map((_) => _.name).join("\n");
  }
  static {
    this.\u0275fac = function MeetingFlowConfirmModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingFlowConfirmModalComponent)(\u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SpacePipe), \u0275\u0275directiveInject(MatDialogRef, 8), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingFlowConfirmModalComponent, selectors: [["meeting-flow-confirm-modal"]], inputs: { show_close: "show_close" }, standalone: false, features: [\u0275\u0275ProvidersFeature([SpacePipe]), \u0275\u0275InheritDefinitionFeature], decls: 35, vars: 23, consts: [["chipList", ""], ["header", "", 1, "p-4", "flex", "items-center", "justify-center", "border-b", "border-base-200", "relative"], ["icon", "", "name", "close-meeting-confirm", "matRipple", "", "mat-dialog-close", "", "class", "absolute left-2 top-1/2 -translate-y-1/2", 4, "ngIf"], [1, "text-xl", "font-medium"], ["diameter", "32", 1, "absolute", "right-2", "top-1/2", "-translate-y-1/2"], [1, "flex-1", "min-w-[48rem]", "divide-y", "divide-base-200", "p-4", "space-y-4", "max-h-[65vh]", "overflow-auto"], [1, "flex", "divide-x", "divide-base-200"], [1, "pr-4", "py-4", "pl-16", "relative", "space-y-2", "flex-1"], [1, "absolute", "top-4", "left-4", "flex", "items-center", "justify-center", "rounded-full", "border", "border-success", "text-success", "text-2xl"], [1, "text-xl", "!mt-0"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["date", ""], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "flex", "flex-col", "leading-tight"], ["time", ""], ["class", "text-xs opacity-30", 4, "ngIf"], ["class", "pr-4 py-4 pl-16 relative space-y-2 flex-1", 4, "ngIf"], ["class", "pr-4 py-4 pl-16 relative space-y-2", 4, "ngIf"], ["class", "flex divide-x divide-base-200", 4, "ngIf"], ["class", "p-2 border-t border-base-200 flex items-center justify-end", 4, "ngIf"], ["icon", "", "name", "close-meeting-confirm", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "left-2", "top-1/2", "-translate-y-1/2"], [1, "text-xs", "opacity-30"], [4, "ngFor", "ngForOf"], [1, "pr-4", "py-4", "pl-16", "relative", "space-y-2"], ["attendee-list", ""], ["aria-label", "User selection"], [1, "flex", "items-center"], [1, "mr-2"], [1, "flex", "flex-col", "space-y-2"], ["order", "", "class", "border bg-base-100 rounded-xl overflow-hidden", 3, "border-error", "border-base-300", 4, "ngFor", "ngForOf"], ["order", "", 1, "border", "bg-base-100", "rounded-xl", "overflow-hidden"], [1, "flex", "items-center", "space-x-2", "p-3"], [1, "flex-1", "flex", "items-center", "space-x-2"], [1, "text-sm"], ["class", "flex items-center justify-center h-6 w-6 rounded-full bg-error text-error-content", 3, "matTooltip", 4, "ngIf"], [1, "flex-1"], [1, "text-xs", "bg-success", "text-success-content", "px-2", "py-1", "rounded"], [1, "text-xs", "bg-info", "text-info-content", "px-2", "py-1", "rounded"], [1, "flex", "flex-col", "bg-base-200", "divide-y", "divide-base-100"], ["class", "flex items-center px-3 py-1 space-x-2 hover:opacity-90", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-center", "h-6", "w-6", "rounded-full", "bg-error", "text-error-content", 3, "matTooltip"], [1, "flex", "items-center", "px-3", "py-1", "space-x-2", "hover:opacity-90"], [1, "flex", "items-center", "flex-1"], ["class", "text-xs opacity-60 ml-4 font-normal", 3, "matTooltip", 4, "ngIf"], [1, "rounded", "bg-success", "text-success-content", "text-xs", "px-2", "py-1"], [1, "rounded", "bg-info", "text-info-content", "text-xs", "px-2", "py-1"], [1, "text-xs", "opacity-60", "ml-4", "font-normal", 3, "matTooltip"], ["request", "", "class", "border bg-base-100 rounded-xl overflow-hidden", 3, "border-error", "border-base-300", 4, "ngFor", "ngForOf"], ["request", "", 1, "border", "bg-base-100", "rounded-xl", "overflow-hidden"], [3, "innerHTML"], [1, "p-2", "border-t", "border-base-200", "flex", "items-center", "justify-end"], ["btn", "", "name", "confirm-meeting", "matRipple", "", 1, "w-32", 3, "click"]], template: function MeetingFlowConfirmModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, MeetingFlowConfirmModalComponent_button_1_Template, 3, 0, "button", 2);
        \u0275\u0275elementStart(2, "h2", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "mat-spinner", 4);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "main", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "app-icon");
        \u0275\u0275text(12, "done");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "h3", 9);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 10)(16, "app-icon", 11);
        \u0275\u0275text(17, "today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 12);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(21, MeetingFlowConfirmModalComponent_div_21_Template, 5, 1, "div", 13);
        \u0275\u0275elementStart(22, "div", 10)(23, "app-icon", 11);
        \u0275\u0275text(24, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 14)(26, "div", 15);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, MeetingFlowConfirmModalComponent_div_28_Template, 2, 1, "div", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(29, MeetingFlowConfirmModalComponent_div_29_Template, 13, 5, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, MeetingFlowConfirmModalComponent_div_30_Template, 11, 7, "div", 18)(31, MeetingFlowConfirmModalComponent_div_31_Template, 3, 2, "div", 19)(32, MeetingFlowConfirmModalComponent_div_32_Template, 9, 6, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, MeetingFlowConfirmModalComponent_footer_33_Template, 4, 3, "footer", 20);
        \u0275\u0275pipe(34, "async");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.show_close);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 14, "APP.WORKPLACE.MEETING_CONFIRM"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(6, 16, ctx.loading));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", ctx.event.title || "Meeting Details", " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 18, ctx.event.date, "fullDate"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.event.recurrence == null ? null : ctx.event.recurrence.pattern);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.formattedTime());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.timezone);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.event.resources.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.event.attendees.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.event.catering == null ? null : ctx.event.catering.length) || (ctx.event.assets == null ? null : ctx.event.assets.length));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.event.body);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(34, 21, ctx.loading));
      }
    }, dependencies: [NgForOf, NgIf, IconComponent, MatRipple, MatDialogClose, MatProgressSpinner, MatChip, MatTooltip, AsyncPipe, CurrencyPipe, DatePipe, SanitizePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingFlowConfirmModalComponent, { className: "MeetingFlowConfirmModalComponent", filePath: "apps/workplace/src/app/book/meeting-flow/meeting-flow-confirm-modal.component.ts", lineNumber: 376 });
})();

// apps/workplace/src/app/book/meeting-flow/meeting-flow-confirm.component.ts
var _c019 = (a0) => ({ count: a0 });
function MeetingFlowConfirmComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function MeetingFlowConfirmComponent_button_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function MeetingFlowConfirmComponent_mat_spinner_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 19);
  }
}
function MeetingFlowConfirmComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "app-icon", 8);
    \u0275\u0275text(2, "update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatted_recurrence);
  }
}
function MeetingFlowConfirmComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formattedTime(ctx_r1.tz), " ");
  }
}
function MeetingFlowConfirmComponent_section_27_mat_chip_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip")(1, "div", 25)(2, "app-icon", 26);
    \u0275\u0275text(3, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", user_r3.name || user_r3.email, " ");
  }
}
function MeetingFlowConfirmComponent_section_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21)(1, "app-icon", 5);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 22)(8, "mat-chip-list", 23, 0);
    \u0275\u0275template(10, MeetingFlowConfirmComponent_section_27_mat_chip_10_Template, 5, 1, "mat-chip", 24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 2, "CALENDAR_EVENT.ATTENDEE_COUNT", \u0275\u0275pureFunction1(5, _c019, ctx_r1.event.attendees.length)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.event.attendees);
  }
}
function MeetingFlowConfirmComponent_section_28_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7)(2, "app-icon", 8);
    \u0275\u0275text(3, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", (ctx_r1.level == null ? null : ctx_r1.level.display_name) || (ctx_r1.level == null ? null : ctx_r1.level.name), ", ", s_r4.display_name || s_r4.name, " ");
  }
}
function MeetingFlowConfirmComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 27)(1, "app-icon", 5);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MeetingFlowConfirmComponent_section_28_ng_container_7_Template, 6, 2, "ng-container", 24);
    \u0275\u0275elementStart(8, "div", 7)(9, "app-icon", 8);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "APP.WORKPLACE.MEETING_BOOKED_ROOM"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.event.resources);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.location);
  }
}
function MeetingFlowConfirmComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function MeetingFlowConfirmComponent_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.postForm());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CONFIRM"), " ");
  }
}
var MeetingFlowConfirmComponent = class _MeetingFlowConfirmComponent extends AsyncHandler {
  formattedTime(tz) {
    const date = this.event.date;
    const date_end = this.event.date_end;
    const all_day = this.event.all_day;
    const tz_format = this._date.transform(date, "zzzz", tz);
    const start_date = this._date.transform(date, "MMM d", tz);
    const start_time = this._date.transform(date, this.time_format, tz);
    const end_date = this._date.transform(date_end, "MMM d", tz);
    const end_time = this._date.transform(date_end, this.time_format, tz);
    if (this.is_multiday) {
      return `${start_date}${all_day ? "" : ", " + start_time} - ${end_date}${all_day ? "" : ", " + end_time}`;
    } else if (all_day) {
      return i18n("COMMON.ALL_DAY");
    }
    return `${start_time} - ${end_time} ${"(" + tz_format + ")"}`;
  }
  get is_multiday() {
    return this.event.duration > 24 * 60;
  }
  get time_format() {
    return this._settings.time_format;
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    return getTimezoneOffsetString(tz);
  }
  get formatted_recurrence() {
    return formatRecurrence2(__spreadProps(__spreadValues({}, this.event.recurrence), {
      start: this.event.date || this.event.recurrence.start
    }));
  }
  get event() {
    return this._event_form.form.getRawValue();
  }
  get space() {
    return this._space;
  }
  get level() {
    return this._org.levelWithID(this.space.zones);
  }
  get location() {
    const building = this._org.buildings.find((_) => this.space.zones.includes(_.id));
    return building?.address || building?.display_name || building?.name;
  }
  constructor(_sheet_ref, _event_form, _org, _space_pipe, _dialog, _settings) {
    super();
    this._sheet_ref = _sheet_ref;
    this._event_form = _event_form;
    this._org = _org;
    this._space_pipe = _space_pipe;
    this._dialog = _dialog;
    this._settings = _settings;
    this.show_close = false;
    this._date = new DatePipe("en");
    this.loading = this._event_form.loading;
    this.postForm = () => __async(this, null, function* () {
      if (!this.space) {
        const result = yield openConfirmModal({
          title: i18n("APP.WORKPLACE.MEETING_WITHOUT_ROOM_TITLE"),
          content: i18n("APP.WORKPLACE.MEETING_WITHOUT_ROOM_MSG"),
          icon: { content: "event_available" }
        }, this._dialog);
        if (result.reason !== "done")
          return;
      }
      yield this._event_form.postForm().catch((_) => {
        notifyError(_);
        throw _;
      });
      this.dismiss(true);
    });
    this.cancelPost = () => this._event_form.cancelPostForm();
    this.dismiss = (e2) => this._sheet_ref?.dismiss(e2);
    this._space = this.event.resources[0];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this._space = (yield this._space_pipe.transform(this.event.resources[0].email)) || this._space;
    });
  }
  optionList(item) {
    return item.option_list?.map((_) => _.name).join("\n");
  }
  static {
    this.\u0275fac = function MeetingFlowConfirmComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingFlowConfirmComponent)(\u0275\u0275directiveInject(MatBottomSheetRef, 8), \u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SpacePipe), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingFlowConfirmComponent, selectors: [["meeting-flow-confirm"]], inputs: { show_close: "show_close" }, standalone: false, features: [\u0275\u0275ProvidersFeature([SpacePipe]), \u0275\u0275InheritDefinitionFeature], decls: 32, vars: 20, consts: [["chipList", ""], ["icon", "", "matRipple", "", "name", "close-meeting-confirm", 3, "click", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "px-2"], ["diameter", "32", 4, "ngIf"], ["period", "", 1, "flex", "space-x-1", "px-2"], [1, "text-success", "mt-1"], ["details", "", 1, "leading-6"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["date", ""], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "flex", "flex-col", "leading-tight"], ["time", ""], ["class", "text-xs opacity-30", 4, "ngIf"], ["attendees", "", "class", "flex space-x-1 px-2", 4, "ngIf"], ["spaces", "", "class", "flex space-x-1 px-2", 4, "ngIf"], [1, "p-2", "w-full", "border-t", "border-base-200", "mt-4"], ["btn", "", "name", "confirm-meeting", "matRipple", "", "class", "w-full", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "close-meeting-confirm", 3, "click"], ["diameter", "32"], [1, "text-xs", "opacity-30"], ["attendees", "", 1, "flex", "space-x-1", "px-2"], ["attendee-list", ""], ["aria-label", "User selection"], [4, "ngFor", "ngForOf"], [1, "flex", "items-center"], [1, "mr-2"], ["spaces", "", 1, "flex", "space-x-1", "px-2"], ["btn", "", "name", "confirm-meeting", "matRipple", "", 1, "w-full", 3, "click"]], template: function MeetingFlowConfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MeetingFlowConfirmComponent_button_0_Template, 3, 0, "button", 1);
        \u0275\u0275elementStart(1, "header", 2)(2, "h2");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, MeetingFlowConfirmComponent_mat_spinner_5_Template, 1, 0, "mat-spinner", 3);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "section", 4)(8, "app-icon", 5);
        \u0275\u0275text(9, "done");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 6)(11, "h3");
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7)(14, "app-icon", 8);
        \u0275\u0275text(15, "today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 9);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(19, MeetingFlowConfirmComponent_div_19_Template, 5, 1, "div", 10);
        \u0275\u0275elementStart(20, "div", 7)(21, "app-icon", 8);
        \u0275\u0275text(22, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 11)(24, "div", 12);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, MeetingFlowConfirmComponent_div_26_Template, 2, 1, "div", 13);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(27, MeetingFlowConfirmComponent_section_27_Template, 11, 7, "section", 14)(28, MeetingFlowConfirmComponent_section_28_Template, 13, 5, "section", 15);
        \u0275\u0275elementStart(29, "footer", 16);
        \u0275\u0275template(30, MeetingFlowConfirmComponent_button_30_Template, 3, 3, "button", 17);
        \u0275\u0275pipe(31, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.show_close);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 11, "APP.WORKPLACE.MEETING_CONFIRM"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(6, 13, ctx.loading));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.event.title || "Meeting Details");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 15, ctx.event.date, "fullDate"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.event.recurrence == null ? null : ctx.event.recurrence.pattern);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.formattedTime());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.timezone);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.event.attendees.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.space == null ? null : ctx.space.id);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(31, 18, ctx.loading));
      }
    }, dependencies: [NgForOf, NgIf, IconComponent, MatRipple, MatProgressSpinner, MatChip, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\nsection[_ngcontent-%COMP%]    > app-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: medium;\n  margin-bottom: 0.5rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: medium;\n  margin: 0.5rem 0;\n}\n/*# sourceMappingURL=meeting-flow-confirm.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingFlowConfirmComponent, { className: "MeetingFlowConfirmComponent", filePath: "apps/workplace/src/app/book/meeting-flow/meeting-flow-confirm.component.ts", lineNumber: 154 });
})();

// apps/workplace/src/app/book/meeting-flow/meeting-form-details.component.ts
var _c020 = () => ({ standalone: true });
function MeetingFormDetailsComponent_div_0_div_12_mat_checkbox_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function MeetingFormDetailsComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a-date-field", 13);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MeetingFormDetailsComponent_div_0_div_12_mat_checkbox_9_Template, 3, 3, "mat-checkbox", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.DATE"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("to", ctx_r0.end_date)("use_24hr", ctx_r0.use_24hr)("timezone", ctx_r0.timezone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.allow_all_day);
  }
}
function MeetingFormDetailsComponent_div_0_div_13_mat_checkbox_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function MeetingFormDetailsComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 11)(2, "label", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-date-field", 16);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, MeetingFormDetailsComponent_div_0_div_13_mat_checkbox_10_Template, 3, 3, "mat-checkbox", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11)(12, "label", 12);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "a-date-field", 17);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 14, "FORM.DATE"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("to", ctx_r0.end_date)("use_24hr", ctx_r0.use_24hr)("timezone", ctx_r0.timezone)("range", 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 16, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.allow_all_day);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 18, "FORM.DATE_END"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("from", ctx_r0.start_date)("to", ctx_r0.end_date)("use_24hr", ctx_r0.use_24hr)("timezone", ctx_r0.timezone)("range", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 20, "FORM.DATE_ERROR"), " ");
  }
}
function MeetingFormDetailsComponent_div_0_div_14_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a-time-field", 24);
    \u0275\u0275listener("ngModelChange", function MeetingFormDetailsComponent_div_0_div_14_div_8_Template_a_time_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.form.patchValue({ date_end: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "FORM.TIME_END"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.form.value.date_end)("ngModelOptions", \u0275\u0275pureFunction0(9, _c020))("from", (ctx_r0.form == null ? null : (tmp_6_0 = ctx_r0.form.getRawValue()) == null ? null : tmp_6_0.date) + 30 * 60 * 1e3)("use_24hr", ctx_r0.use_24hr)("extra_info_fn", ctx_r0.duration_info)("timezone", ctx_r0.timezone);
  }
}
function MeetingFormDetailsComponent_div_0_div_14_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-duration-field", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.TIME_END"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r0.form == null ? null : (tmp_4_0 = ctx_r0.form.getRawValue()) == null ? null : tmp_4_0.date)("max", ctx_r0.max_duration)("use_24hr", ctx_r0.use_24hr)("timezone", ctx_r0.timezone);
  }
}
function MeetingFormDetailsComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "label", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 21);
    \u0275\u0275listener("ngModelChange", function MeetingFormDetailsComponent_div_0_div_14_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, MeetingFormDetailsComponent_div_0_div_14_div_8_Template, 7, 10, "div", 22)(9, MeetingFormDetailsComponent_div_0_div_14_div_9_Template, 7, 7, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "FORM.TIME_START"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.form.getRawValue().date)("ngModelOptions", \u0275\u0275pureFunction0(9, _c020))("use_24hr", ctx_r0.use_24hr)("timezone", ctx_r0.timezone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.allow_multiday);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.allow_multiday);
  }
}
function MeetingFormDetailsComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "host-select-field", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "FORM.HOST"), "");
  }
}
function MeetingFormDetailsComponent_div_0_div_16_mat_checkbox_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.UPDATE_FUTURE"), " ");
  }
}
function MeetingFormDetailsComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "recurrence-field", 30);
    \u0275\u0275template(7, MeetingFormDetailsComponent_div_0_div_16_mat_checkbox_7_Template, 3, 3, "mat-checkbox", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "FORM.RECURRENCE"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("date", ctx_r0.form.getRawValue().date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.value.id);
  }
}
function MeetingFormDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "label", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 5);
    \u0275\u0275element(7, "input", 6);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, MeetingFormDetailsComponent_div_0_div_12_Template, 10, 10, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, MeetingFormDetailsComponent_div_0_div_13_Template, 20, 22, "div", 8)(14, MeetingFormDetailsComponent_div_0_div_14_Template, 10, 10, "div", 9)(15, MeetingFormDetailsComponent_div_0_div_15_Template, 7, 3, "div", 10)(16, MeetingFormDetailsComponent_div_0_div_16_Template, 8, 5, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "FORM.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 11, "CALENDAR_EVENT.TITLE_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 13, "FORM.TITLE_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.allow_multiday);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.allow_multiday);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.form.value.all_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.can_book_for_others);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.allow_recurrence);
  }
}
var MeetingFormDetailsComponent = class _MeetingFormDetailsComponent {
  get max_duration() {
    return this._settings.get("app.events.max_duration") || 480;
  }
  get can_book_for_others() {
    return this._settings.get("app.events.can_book_for_others");
  }
  get allow_all_day() {
    return this._settings.get("app.events.allow_all_day");
  }
  get allow_recurrence() {
    return this._settings.get("app.events.allow_recurrence") && this.form.value.duration <= 24 * 60;
  }
  get allow_multiday() {
    return this._settings.get("app.events.allow_multiday") || this._event_form.is_multiday;
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get start_date() {
    const date = this.form.getRawValue().date;
    const date_end = this.form.getRawValue().date_end;
    const is_next_day = format(date, "yyyy-MM-dd") !== format(date_end, "yyyy-MM-dd");
    return is_next_day ? startOfDay(date).valueOf() : addMinutes(date, 30).valueOf();
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.events.allowed_future_days") || 180)).valueOf();
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  constructor(_settings, _event_form, _org) {
    this._settings = _settings;
    this._event_form = _event_form;
    this._org = _org;
    this.force_time = set(Date.now(), {
      hours: 6,
      minutes: 0
    }).valueOf();
    this.duration_info = (time) => {
      const date = this.form.getRawValue().date;
      if (format(date, "yyyy-MM-dd") !== format(time, "yyyy-MM-dd"))
        return "";
      const diff = differenceInMinutes(time, date);
      return ` (${formatDuration({
        hours: Math.floor(diff / 60),
        minutes: diff % 60
      })})`;
    };
  }
  static {
    this.\u0275fac = function MeetingFormDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingFormDetailsComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingFormDetailsComponent, selectors: [["meeting-form-details"]], inputs: { form: "form" }, standalone: false, decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "flex", "items-center", "flex-wrap", "sm:space-x-2"], [1, "flex-1", "min-w-[256px]"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "title", "formControlName", "title", 3, "placeholder"], ["class", "flex-1 min-w-[256px] relative", 4, "ngIf"], ["class", "flex items-center flex-wrap sm:space-x-2", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["class", "w-full flex flex-col", 4, "ngIf"], [1, "flex-1", "min-w-[256px]", "relative"], ["for", "date"], ["name", "date", "formControlName", "date", 3, "to", "use_24hr", "timezone"], ["formControlName", "all_day", "class", "absolute -top-2 right-2", 4, "ngIf"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-2"], ["name", "date", "formControlName", "date", 3, "to", "use_24hr", "timezone", "range"], ["name", "date", "formControlName", "date_end", 3, "from", "to", "use_24hr", "timezone", "range"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], ["class", "flex-1 w-1/3", 4, "ngIf"], ["for", "end-time"], ["name", "end-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "from", "use_24hr", "extra_info_fn", "timezone"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "use_24hr", "timezone"], [1, "w-full", "flex", "flex-col"], ["for", "host"], ["name", "host", "formControlName", "organiser"], ["for", "recurrence"], ["name", "recurrence", "formControlName", "recurrence", 3, "date"], ["formControlName", "update_master", 4, "ngIf"], ["formControlName", "update_master"]], template: function MeetingFormDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MeetingFormDetailsComponent_div_0_Template, 17, 15, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [NgIf, MatFormField, MatError, MatInput, MatCheckbox, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, HostSelectFieldComponent, RecurrenceFieldComponent, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingFormDetailsComponent, { className: "MeetingFormDetailsComponent", filePath: "apps/workplace/src/app/book/meeting-flow/meeting-form-details.component.ts", lineNumber: 182 });
})();

// apps/workplace/src/app/book/meeting-flow/meeting-flow-form.component.ts
var _c021 = ["confirm_ref"];
var _c111 = ["input"];
var _c25 = (a0, a1, a2, a3) => ({ date: a0, duration: a1, all_day: a2, zone_id: a3 });
var _c34 = () => ({ standalone: true });
function MeetingFlowFormComponent_form_5_section_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 7)(2, "div", 8);
    \u0275\u0275text(3, " 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 10);
    \u0275\u0275elementStart(8, "button", 22);
    \u0275\u0275listener("click", function MeetingFlowFormComponent_form_5_section_14_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.findAvailableTime());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 23);
    \u0275\u0275listener("click", function MeetingFlowFormComponent_form_5_section_14_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hide_block.attendees = !ctx_r1.hide_block.attendees);
    });
    \u0275\u0275elementStart(12, "app-icon");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 12);
    \u0275\u0275element(15, "a-user-list-field", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "CALENDAR_EVENT.ATTENDEES"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, "COMMON.AVAILABILITY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.hide_block.attendees ? "expand_more" : "expand_less");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.hide_block.attendees ? "hide" : "show");
    \u0275\u0275advance();
    \u0275\u0275property("time", ctx_r1.form.value.date)("guests", ctx_r1.allow_externals);
  }
}
function MeetingFlowFormComponent_form_5_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.CAPACITY_WARNING"), " ");
  }
}
function MeetingFlowFormComponent_form_5_section_29_mat_form_field_13_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const code_r6 = ctx.$implicit;
    \u0275\u0275property("value", code_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", code_r6, " ");
  }
}
function MeetingFlowFormComponent_form_5_section_29_mat_form_field_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 30);
    \u0275\u0275listener("openedChange", function MeetingFlowFormComponent_form_5_section_29_mat_form_field_13_Template_mat_form_field_openedChange_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.focusInput());
    });
    \u0275\u0275elementStart(1, "mat-select", 31);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "input", 32, 0);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("ngModelChange", function MeetingFlowFormComponent_form_5_section_29_mat_form_field_13_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.code_filter.next($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "mat-option", 33);
    \u0275\u0275template(7, MeetingFlowFormComponent_form_5_section_29_mat_form_field_13_mat_option_7_Template, 2, 2, "mat-option", 34);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 6, "CALENDAR_EVENT.CATERING_CHARGE_CODE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.code_filter.getValue())("ngModelOptions", \u0275\u0275pureFunction0(14, _c34))("placeholder", \u0275\u0275pipeBind1(5, 8, "CALENDAR_EVENT.CATERING_CHARGE_CODE_SEACH"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(8, 10, ctx_r1.filtered_codes));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 12, "CALENDAR_EVENT.CATERING_CHARGE_CODE_REQUIRED"), " ");
  }
}
function MeetingFlowFormComponent_form_5_section_29_mat_form_field_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 36);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275element(2, "textarea", 37);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "mat-error");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("mt-2", !\u0275\u0275pipeBind1(1, 4, (ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length) && ctx_r1.has_codes));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 6, "CALENDAR_EVENT.CATERING_NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, "CALENDAR_EVENT.CATERING_NOTES_REQUIRED"), " ");
  }
}
function MeetingFlowFormComponent_form_5_section_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 7)(2, "div", 8);
    \u0275\u0275text(3, " 4 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 10);
    \u0275\u0275elementStart(8, "button", 26);
    \u0275\u0275listener("click", function MeetingFlowFormComponent_form_5_section_29_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hide_block.catering = !ctx_r1.hide_block.catering);
    });
    \u0275\u0275elementStart(9, "app-icon");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 12);
    \u0275\u0275element(12, "catering-list-field", 27);
    \u0275\u0275template(13, MeetingFlowFormComponent_form_5_section_29_mat_form_field_13_Template, 12, 15, "mat-form-field", 28);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275template(15, MeetingFlowFormComponent_form_5_section_29_mat_form_field_15_Template, 7, 10, "mat-form-field", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "CALENDAR_EVENT.CATERING"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.hide_block.catering ? "expand_more" : "expand_less");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.hide_block.catering ? "hide" : "show");
    \u0275\u0275advance();
    \u0275\u0275property("options", \u0275\u0275pureFunction4(10, _c25, ctx_r1.form.getRawValue().date, ctx_r1.form.value.duration, ctx_r1.form.value.all_day, (ctx_r1.form.value == null ? null : ctx_r1.form.value.resources == null ? null : ctx_r1.form.value.resources.length) ? ctx_r1.form.value == null ? null : ctx_r1.form.value.resources[0] == null ? null : ctx_r1.form.value.resources[0].level == null ? null : ctx_r1.form.value.resources[0].level.parent_id : ""));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(14, 8, (ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length) && ctx_r1.has_codes));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length);
  }
}
function MeetingFlowFormComponent_form_5_section_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 7)(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 10);
    \u0275\u0275elementStart(9, "button", 38);
    \u0275\u0275listener("click", function MeetingFlowFormComponent_form_5_section_31_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hide_block.assets = !ctx_r1.hide_block.assets);
    });
    \u0275\u0275elementStart(10, "app-icon");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12);
    \u0275\u0275element(13, "asset-list-field", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", !\u0275\u0275pipeBind1(4, 6, ctx_r1.has_catering) ? "4" : "5", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "RESOURCE.ASSETS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.hide_block.assets ? "expand_more" : "expand_less");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.hide_block.assets ? "hide" : "show");
    \u0275\u0275advance();
    \u0275\u0275property("options", \u0275\u0275pureFunction4(10, _c25, ctx_r1.form.getRawValue().date, ctx_r1.form.value.duration, ctx_r1.form.value.all_day, (ctx_r1.form.value == null ? null : ctx_r1.form.value.resources == null ? null : ctx_r1.form.value.resources.length) ? ctx_r1.form.value == null ? null : ctx_r1.form.value.resources[0] == null ? null : ctx_r1.form.value.resources[0].level == null ? null : ctx_r1.form.value.resources[0].level.parent_id : ""))("rejected_ids", ctx_r1.invalid_assets);
  }
}
function MeetingFlowFormComponent_form_5_section_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 40)(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 41)(10, "label", 42);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "rich-text-input", 43);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", !\u0275\u0275pipeBind1(4, 4, ctx_r1.has_catering) || !ctx_r1.has_assets ? !\u0275\u0275pipeBind1(5, 6, ctx_r1.has_catering) && !ctx_r1.has_assets ? "4" : "5" : "6", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "CALENDAR_EVENT.NOTES_HEADER"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "CALENDAR_EVENT.NOTES_INFO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 12, "CALENDAR_EVENT.NOTES_INFO"));
  }
}
function MeetingFlowFormComponent_form_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 5)(1, "section", 6)(2, "h3", 7)(3, "div", 8);
    \u0275\u0275text(4, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 10);
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function MeetingFlowFormComponent_form_5_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hide_block.details = !ctx_r1.hide_block.details);
    });
    \u0275\u0275elementStart(10, "app-icon");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12);
    \u0275\u0275element(13, "meeting-form-details", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, MeetingFlowFormComponent_form_5_section_14_Template, 16, 10, "section", 14);
    \u0275\u0275elementStart(15, "section", 6)(16, "h3", 7)(17, "div", 8);
    \u0275\u0275text(18, " 3 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 9);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "div", 10);
    \u0275\u0275elementStart(23, "button", 15);
    \u0275\u0275listener("click", function MeetingFlowFormComponent_form_5_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hide_block.resources = !ctx_r1.hide_block.resources);
    });
    \u0275\u0275elementStart(24, "app-icon");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 16);
    \u0275\u0275template(27, MeetingFlowFormComponent_form_5_div_27_Template, 3, 3, "div", 17);
    \u0275\u0275element(28, "space-list-field", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, MeetingFlowFormComponent_form_5_section_29_Template, 16, 15, "section", 14);
    \u0275\u0275pipe(30, "async");
    \u0275\u0275template(31, MeetingFlowFormComponent_form_5_section_31_Template, 14, 15, "section", 14)(32, MeetingFlowFormComponent_form_5_section_32_Template, 15, 14, "section", 14);
    \u0275\u0275elementStart(33, "section", 19)(34, "button", 20);
    \u0275\u0275listener("click", function MeetingFlowFormComponent_form_5_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewConfirm());
    });
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 21);
    \u0275\u0275listener("click", function MeetingFlowFormComponent_form_5_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearForm());
    });
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 16, "CALENDAR_EVENT.DETAILS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.hide_block.details ? "expand_more" : "expand_less");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.hide_block.details ? "hide" : "show");
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hide_attendees);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 18, "RESOURCE.ROOM"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.hide_block.resources ? "expand_more" : "expand_less");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.hide_block.resources ? "hide" : "show");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.strict_capacity_check && ctx_r1.total_capacity && ctx_r1.total_capacity <= (ctx_r1.form.value.attendees == null ? null : ctx_r1.form.value.attendees.length));
    \u0275\u0275advance();
    \u0275\u0275property("multiday", ctx_r1.allow_multiday);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(30, 20, ctx_r1.has_catering));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.has_assets);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hide_notes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 22, "CALENDAR_EVENT.CONFIRM_DETAILS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", !!ctx_r1.form.value.id ? "FORM.RESET" : \u0275\u0275pipeBind1(39, 24, "FORM.CLEAR"), " ");
  }
}
var MeetingFlowFormComponent = class _MeetingFlowFormComponent extends AsyncHandler {
  get form() {
    return this._state.form;
  }
  get event() {
    return this._state.event;
  }
  get has_assets() {
    return !!this._settings.get("app.events.has_assets");
  }
  get hide_notes() {
    return !!this._settings.get("app.events.hide_notes");
  }
  get hide_attendees() {
    return !!this._settings.get("app.events.hide_attendees");
  }
  get allow_externals() {
    return this._settings.get("app.events.allow_externals");
  }
  get strict_capacity_check() {
    return this._settings.get("app.events.strict_capacity_check");
  }
  get total_capacity() {
    return this.form.value.resources?.reduce((c, i) => c + i.capacity, 0) || 0;
  }
  get allow_multiday() {
    return this._settings.get("app.events.allow_multiday") || this._state.is_multiday;
  }
  get attendee_count() {
    const user = currentUser();
    let count = this.form.value.attendees?.length || 0;
    if (!this.form.value.attendees.find((_) => _.email.toLowerCase() === user.email.toLowerCase())) {
      count += 1;
    }
    return count;
  }
  get allow_daily_allday_recurrence() {
    return this._settings.get("app.events.allow_daily_allday_recurrence");
  }
  constructor(_state, _catering, _assets, _settings, _router, _dialog, _bottom_sheet, _org, _idle) {
    super();
    this._state = _state;
    this._catering = _catering;
    this._assets = _assets;
    this._settings = _settings;
    this._router = _router;
    this._dialog = _dialog;
    this._bottom_sheet = _bottom_sheet;
    this._org = _org;
    this._idle = _idle;
    this.hide_block = {};
    this.code_filter = new BehaviorSubject("");
    this.invalid_assets = [];
    this.has_catering = this._catering.available_menu.pipe(map((l) => l.length > 0));
    this.has_codes = this._catering.charge_codes.pipe(map((l) => l.length > 0), tap((has_codes) => {
      if (!has_codes) {
        this.form.get("catering_charge_code").setValidators([]);
        this.form.updateValueAndValidity();
      }
    }));
    this.filtered_codes = combineLatest([
      this.code_filter,
      this._catering.charge_codes
    ]).pipe(map(([s, l]) => l.filter((_) => _.toLowerCase().includes(s.toLowerCase()))));
    this._space_list = new BehaviorSubject([]);
    this._assets_available = this._space_list.pipe(debounceTime(300), switchMap((space_list) => {
      if (!space_list?.length || !this.has_assets)
        return of(false);
      const value = this.form.getRawValue();
      this._assets.setOptions({
        date: value.date,
        duration: value.duration,
        resources: space_list,
        zone_id: this._org.levelWithID(space_list[0].zones)?.parent_id,
        tags: [],
        categories: []
      });
      return combineLatest([
        this._assets.filtered_assets,
        this._assets.disabled_rooms
      ]).pipe(map(([items, disabled_rooms]) => {
        const assets_available = space_list.every((s) => items.filter((_) => !_.hide_for_zones?.find((z) => s.zones.includes(z))).length > 0);
        if (assets_available && !disabled_rooms.find((_) => space_list.find((i) => i.id === _)))
          return true;
        const event = this._state.event;
        const { id, assets, date, date_end } = this.form.getRawValue();
        const time_changed = !id || assets?.length && (date !== event.date || date_end !== event.date_end);
        if (time_changed) {
          this.form.patchValue({ assets: [] });
          notifyWarn(i18n("CALENDAR_EVENT.ASSETS_UNAVAILABLE"));
        }
        return false;
      }));
    }));
    this._catering_available = combineLatest([
      this._space_list,
      this.has_catering
    ]).pipe(debounceTime(300), switchMap(([space_list, has_catering]) => {
      if (!space_list?.length || !has_catering)
        return of(false);
      const value = this.form.getRawValue();
      this._catering.setFilters({
        search: "",
        date: value.date,
        duration: value.duration,
        resources: space_list,
        zone_id: this._org.levelWithID(space_list[0].zones)?.parent_id,
        tags: [],
        categories: []
      });
      return combineLatest([
        this._catering.filtered_menu,
        this._catering.availability
      ]).pipe(map(([menu, disabled_rooms]) => {
        const can_cater = space_list.every((s) => menu.filter((_) => !_.hide_for_zones.find((z) => s.zones.includes(z))).length > 0);
        if (can_cater && !disabled_rooms.find((_) => space_list.find((i) => i.id === _)))
          return true;
        const event = this._state.event;
        const { id, catering, date, date_end } = this.form.getRawValue();
        const time_changed = !id || catering?.length && (date !== event.date || date_end !== event.date_end);
        if (time_changed) {
          this.form.patchValue({ catering: [] });
          notifyWarn(i18n("CALENDAR_EVENT.CATERING_UNAVAILABLE"));
        }
        return false;
      }));
    }));
    this.clearForm = () => this._state.resetForm();
    this.viewConfirm = () => {
      if (!this.form.value.host)
        this.form.patchValue({ host: currentUser()?.email });
      if (this.strict_capacity_check && this.attendee_count > this.total_capacity) {
        return notifyError(i18n("CALENDAR_EVENT.CAPACITY_ERROR"));
      }
      if (!this.allow_daily_allday_recurrence && this.form.value.all_day && this.form.value.recurrence?.pattern === "daily") {
        return notifyError(i18n("CALENDAR_EVENT.DAILY_RECURR_ERROR"));
      }
      this.form.markAllAsTouched();
      if (!this.form.valid)
        return notifyError(i18n("FORM.INVALID_FIELDS", {
          field_list: getInvalidFields(this.form).join(", ")
        }));
      if (this._settings.get("app.events.no_standalone") && !this.form.value.resources.length)
        return notifyError(i18n("CALENDAR_EVENT.ROOM_REQUIRED"));
      if (this._settings.get("app.events.booking_unavailable"))
        return this._state.openEventLinkModal();
      if (window.innerWidth >= 768) {
        this.dialog_ref = this._dialog.open(MeetingFlowConfirmModalComponent);
        this.dialog_ref.componentInstance.show_close = true;
        this.dialog_ref.afterClosed().subscribe((value) => {
          if (value) {
            this.unsubWith("idle");
            this._router.navigate(["/book", "meeting", "success"]);
            this._state.setView("success");
          }
        });
      } else {
        this.sheet_ref = this._bottom_sheet.open(MeetingFlowConfirmComponent);
        this.sheet_ref.instance.show_close = true;
        this.sheet_ref.afterDismissed().subscribe((value) => {
          if (value) {
            this.unsubWith("idle");
            this._router.navigate(["/book", "meeting", "success"]);
            this._state.setView("success");
          }
        });
      }
    };
  }
  _updateValidAssets() {
    this.invalid_assets = [];
    if (!this.event?.id)
      return;
    const requested_assets = this.form.value.assets || [];
    const linked_bookings = this.event?.linked_bookings || [];
    this.invalid_assets = requested_assets.filter((_) => !_._changed && !linked_bookings.find((bkn) => bkn.extension_data?.request_id === _.id)).map((_) => _.id);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.subscription("asset_changes", this.form.controls.assets.valueChanges.subscribe(() => this._updateValidAssets()));
      for (const key of ["resources", "date", "duration", "date_end"]) {
        this.subscription(`${key}_changes`, this.form.controls[key].valueChanges.subscribe(() => this.timeout("check_resources", () => this._space_list.next(this.form.value.resources || []))));
      }
      this._catering.setOptions({ zone: "" });
      this._space_list.next(this.form.value.resources || []);
      this.subscription("assets_available", this._assets_available.subscribe((a) => {
        if (!a)
          this.form.controls.assets.disable();
        else
          this.form.controls.assets.enable();
      }));
      this.subscription("catering_available", this._catering_available.subscribe((a) => {
        if (!a)
          this.form.controls.catering.disable();
        else
          this.form.controls.catering.enable();
      }));
      this.subscription("idle-listen", this._idle.idleFor((this._settings.get("app.idle_timeout") || 5) * 60 * 1e3).subscribe(() => __async(this, null, function* () {
        this.unsub("idle");
        yield openConfirmModal({
          title: i18n("APP.WORKPLACE.MEETING_IDLE_TITLE"),
          content: i18n("APP.WORKPLACE.MEETING_IDLE_MSG"),
          icon: { content: "update" },
          confirm_text: i18n("COMMON.REFRESH")
        }, this._dialog);
        this._state.newForm();
        location.reload();
      })));
      this.timeout("init_valid_assets", () => this._updateValidAssets(), 1e3);
    });
  }
  focusInput() {
    this.timeout("input-focus", () => {
      this._input_el.nativeElement.value = "";
      this._input_el?.nativeElement?.focus();
    }, 300);
  }
  findAvailableTime() {
    const { attendees, organiser, date, duration } = this.form.value;
    const ref = this._dialog.open(FindAvailabilityModalComponent, {
      data: {
        users: attendees,
        host: organiser || currentUser(),
        date,
        duration
      }
    });
    ref.afterClosed().subscribe((d) => {
      if (!d)
        return;
      this.form.patchValue({
        date: ref.componentInstance.date,
        attendees: ref.componentInstance.users.getValue(),
        duration: ref.componentInstance.duration
      });
    });
  }
  static {
    this.\u0275fac = function MeetingFlowFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingFlowFormComponent)(\u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(CateringOrderStateService), \u0275\u0275directiveInject(AssetStateService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MatBottomSheet), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(UserIdleTimeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingFlowFormComponent, selectors: [["meeting-flow-form"]], viewQuery: function MeetingFlowFormComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c021, 5);
        \u0275\u0275viewQuery(_c111, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._confirm_ref = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input_el = _t.first);
      }
    }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 4, consts: [["input", ""], [1, "h-full", "w-full", "bg-base-200", "overflow-auto"], [1, "max-w-full", "w-[48rem]", "mx-auto", "sm:my-4", "bg-base-100", "border", "border-base-300"], [1, "w-full", "p-4", "sm:py-4", "sm:px-16", "text-2xl", "font-medium", "border-b", "border-base-300"], ["class", "p-0 sm:py-4 sm:px-16 divide-y divide-base-200 space-y-2", 3, "formGroup", 4, "ngIf"], [1, "p-0", "sm:py-4", "sm:px-16", "divide-y", "divide-base-200", "space-y-2", 3, "formGroup"], [1, "p-2"], [1, "space-x-2", "flex", "items-center"], [1, "bg-base-200", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center"], [1, "text-xl"], [1, "flex-1", "w-px"], ["icon", "", "name", "toggle-details-meeting", "matRipple", "", 3, "click"], [1, "overflow-hidden"], [1, "mt-4", 3, "form"], ["class", "p-2", 4, "ngIf"], ["icon", "", "name", "toggle-spaces-meeting", "matRipple", "", 3, "click"], [1, "overflow-hidden", "flex", "flex-col", "items-center"], ["class", "bg-warning text-warning-content rounded shadow p-2 text-xs mx-auto my-2 inline-flex", 4, "ngIf"], ["formControlName", "resources", 1, "w-full", 3, "multiday"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "sm:space-x-2", "p-2"], ["btn", "", "name", "open-meeting-confirm", "matRipple", "", "confirm", "", 1, "mb-2", "sm:mb-0", "w-full", "sm:w-auto", 3, "click"], ["btn", "", "name", "clear-form-meeting", "matRipple", "", "clear-form", "", 1, "inverse", "w-full", "sm:w-auto", 3, "click"], ["matRipple", "", "name", "find-attendee-availability", 1, "bg-none", "underline", "text-xs", "text-info", 3, "click"], ["icon", "", "name", "toggle-attendees-meeting", "matRipple", "", 3, "click"], ["formControlName", "attendees", 1, "mt-4", 3, "time", "guests"], [1, "bg-warning", "text-warning-content", "rounded", "shadow", "p-2", "text-xs", "mx-auto", "my-2", "inline-flex"], ["icon", "", "name", "toggle-catering-meeting", "matRipple", "", 3, "click"], ["formControlName", "catering", 3, "options"], ["appearance", "outline", "class", "w-full mt-2", 3, "openedChange", 4, "ngIf"], ["appearance", "outline", "class", "w-full", 3, "mt-2", 4, "ngIf"], ["appearance", "outline", 1, "w-full", "mt-2", 3, "openedChange"], ["formControlName", "catering_charge_code", 3, "placeholder"], [1, "sticky", "top-0", "bg-base-100", "px-4", "py-3", "text-base", "border-x-0", "border-t-0", "border-b", "focus:border-b", "border-base-200", "w-full", "rounded-none", "z-50", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "hidden"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "catering_notes", 3, "placeholder"], ["icon", "", "name", "toggle-assets-meeting", "matRipple", "", 3, "click"], ["formControlName", "assets", 3, "options", "rejected_ids"], [1, "space-x-2", "flex", "items-center", "mb-4"], [1, "w-full", "flex", "flex-col"], ["for", "notes"], ["name", "notes", "formControlName", "body", 3, "placeholder"]], template: function MeetingFlowFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, MeetingFlowFormComponent_form_5_Template, 40, 26, "form", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, !!ctx.form.value.id ? "APP.WORKPLACE.MEETING_BOOK_EDIT_HEADER" : "APP.WORKPLACE.MEETING_BOOK_NEW_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [NgForOf, NgIf, IconComponent, MatOption, MatFormField, MatError, MatSelect, MatRipple, MatInput, UserListFieldComponent, SpaceListFieldComponent, RichTextInputComponent, AssetListFieldComponent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, CateringListFieldComponent, FormGroupDirective, FormControlName, MeetingFormDetailsComponent, AsyncPipe, TranslatePipe], encapsulation: 2, data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingFlowFormComponent, { className: "MeetingFlowFormComponent", filePath: "apps/workplace/src/app/book/meeting-flow/meeting-flow-form.component.ts", lineNumber: 417 });
})();

// apps/workplace/src/app/book/meeting-flow/meeting-flow-success.component.ts
var _c022 = (a0, a1, a2, a3) => ({ level: a0, space: a1, date: a2, time: a3 });
var _c112 = () => ["/"];
function MeetingFlowSuccessComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const details_r2 = \u0275\u0275readContextLet(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.space ? "CALENDAR_EVENT.SUCCESS_WITH_SPACE_ALLDAY" : "CALENDAR_EVENT.SUCCESS_WITHOUT_SPACE_ALLDAY", details_r2), " ");
  }
}
function MeetingFlowSuccessComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const details_r2 = \u0275\u0275readContextLet(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.space ? "CALENDAR_EVENT.SUCCESS_WITH_SPACE" : "CALENDAR_EVENT.SUCCESS_WITHOUT_SPACE", details_r2), " ");
  }
}
function MeetingFlowSuccessComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.SUCCESS_WAIT_APPROVED"), " ");
  }
}
function MeetingFlowSuccessComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function MeetingFlowSuccessComponent_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startDeskBooking());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.BOOK_NEARBY_DESK"), " ");
  }
}
var MeetingFlowSuccessComponent = class _MeetingFlowSuccessComponent {
  get allow_desk_booking() {
    return this._settings.get("app.features").includes("desks");
  }
  get last_event() {
    return this._event_form.last_success;
  }
  get space() {
    return this.last_event.space;
  }
  get level() {
    return this._org.levelWithID(this.space?.zones);
  }
  get time_format() {
    return this._settings.time_format;
  }
  startDeskBooking() {
    this._router.navigate(["/book", "new-desks", "form"]);
    setTimeout(() => __async(this, null, function* () {
      this._booking_form.newForm();
      const space = yield this._space_pipe.transform(this.space.id || this.space.email);
      const level = this._org.levelWithID(space?.zones);
      this._booking_form.setOptions({ type: "desk", zone_id: level?.id });
      this._booking_form.form.patchValue({
        date: set(this.last_event.date, {
          hours: 8,
          minutes: 0
        }).valueOf(),
        duration: 10 * 60,
        all_day: this.last_event.all_day,
        booking_type: "desk",
        user: currentUser()
      });
      const resources = yield this._booking_form.available_resources.pipe(take(1)).toPromise();
      const bookable_desks = resources.map((_) => _.map_id || _.id).filter((i) => i);
      const nearby = yield findNearbyFeature(level.map_id, space?.map_id, bookable_desks);
      if (!nearby)
        return notifyError(i18n("APP.WORKPLACE.MEETING_DESK_ERROR"));
      const resource = resources.find((_) => _.map_id === nearby);
      this._booking_form.form.patchValue({
        date: set(this.last_event.date, {
          hours: 8,
          minutes: 0
        }).valueOf(),
        duration: 10 * 60,
        all_day: this.last_event.all_day,
        booking_type: "desk",
        asset_id: nearby,
        asset_name: resource.name,
        resources: [resource]
      });
    }), 50);
  }
  constructor(_event_form, _org, _settings, _booking_form, _router) {
    this._event_form = _event_form;
    this._org = _org;
    this._settings = _settings;
    this._booking_form = _booking_form;
    this._router = _router;
    this._space_pipe = new SpacePipe(this._org);
  }
  static {
    this.\u0275fac = function MeetingFlowSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingFlowSuccessComponent)(\u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingFlowSuccessComponent, selectors: [["meeting-flow-success"]], standalone: false, decls: 20, vars: 27, consts: [[1, "absolute", "inset-0", "bg-base-100", "flex", "flex-col", "z-50", "overflow-auto"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "text-2xl", "font-medium"], ["src", "assets/icons/success.svg"], [1, "text-center", "max-w-[32rem]"], [4, "ngIf"], [1, "h-4"], ["btn", "", "matRipple", "", "class", "w-48", 3, "click", 4, "ngIf"], [1, "sticky", "bottom-0", "bg-base-100", "p-2", "w-full", "border-t", "border-base-200", "mt-4", "flex", "items-center", "justify-center"], ["btn", "", "name", "meeting-created-continue", "matRipple", "", 1, "w-full", "max-w-[32rem]", 3, "routerLink"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"]], template: function MeetingFlowSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "img", 3);
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275declareLet(7);
        \u0275\u0275pipe(8, "date");
        \u0275\u0275pipe(9, "date");
        \u0275\u0275pipe(10, "date");
        \u0275\u0275template(11, MeetingFlowSuccessComponent_ng_container_11_Template, 3, 4, "ng-container", 5)(12, MeetingFlowSuccessComponent_ng_container_12_Template, 3, 4, "ng-container", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, MeetingFlowSuccessComponent_p_13_Template, 3, 3, "p", 5);
        \u0275\u0275element(14, "div", 6);
        \u0275\u0275template(15, MeetingFlowSuccessComponent_button_15_Template, 3, 3, "button", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "footer", 8)(17, "a", 9);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "WPA.BOOKING_CONFIRMED"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275storeLet(\u0275\u0275pureFunction4(21, _c022, (ctx.level == null ? null : ctx.level.display_name) || (ctx.level == null ? null : ctx.level.name), (ctx.space == null ? null : ctx.space.display_name) || (ctx.space == null ? null : ctx.space.name), \u0275\u0275pipeBind2(8, 9, ctx.last_event.date, "mediumDate"), \u0275\u0275pipeBind2(10, 15, \u0275\u0275pipeBind2(9, 12, ctx.last_event.date, ctx.time_format + "-" + ctx.last_event.date + ctx.last_event.duration * 60 * 1e3), ctx.time_format)));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.last_event == null ? null : ctx.last_event.all_day);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !(ctx.last_event == null ? null : ctx.last_event.all_day));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.space == null ? null : ctx.space.email) && ctx.allow_desk_booking);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(26, _c112));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 19, "APP.WORKPLACE.MEETING_FINISHED"), " ");
      }
    }, dependencies: [NgIf, MatRipple, RouterLink, DatePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingFlowSuccessComponent, { className: "MeetingFlowSuccessComponent", filePath: "apps/workplace/src/app/book/meeting-flow/meeting-flow-success.component.ts", lineNumber: 93 });
})();

// apps/workplace/src/app/book/meeting-flow.component.ts
function BookMeetingFlowComponent_meeting_flow_success_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "meeting-flow-success");
  }
}
function BookMeetingFlowComponent_meeting_flow_confirm_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "meeting-flow-confirm");
  }
}
function BookMeetingFlowComponent_meeting_flow_form_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "meeting-flow-form");
  }
}
var BookMeetingFlowComponent = class _BookMeetingFlowComponent extends AsyncHandler {
  get view() {
    return this._state.view;
  }
  get last_success() {
    return this._state.last_success;
  }
  constructor(_state, _route) {
    super();
    this._state = _state;
    this._route = _route;
  }
  ngOnInit() {
    this._state.loadForm();
    this._state.listenForStatusChanges();
    this.subscription("route.params", this._route.paramMap.subscribe((param) => {
      if (param.has("step"))
        this._state.setView(param.get("step"));
    }));
    this.subscription("route.query", this._route.queryParamMap.subscribe((param) => {
      if (param.has("success"))
        this._state.setView("success");
    }));
  }
  static {
    this.\u0275fac = function BookMeetingFlowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookMeetingFlowComponent)(\u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookMeetingFlowComponent, selectors: [["placeos-book-meeting-flow"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 3, consts: [[1, "bg-base-100", "h-full", "w-full", "z-50", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]], template: function BookMeetingFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, BookMeetingFlowComponent_meeting_flow_success_1_Template, 1, 0, "meeting-flow-success", 1)(2, BookMeetingFlowComponent_meeting_flow_confirm_2_Template, 1, 0, "meeting-flow-confirm", 1)(3, BookMeetingFlowComponent_meeting_flow_form_3_Template, 1, 0, "meeting-flow-form", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngSwitch", ctx.view);
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "success");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "confirm");
      }
    }, dependencies: [NgSwitch, NgSwitchCase, NgSwitchDefault, MeetingFlowFormComponent, MeetingFlowConfirmComponent, MeetingFlowSuccessComponent], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=meeting-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookMeetingFlowComponent, { className: "BookMeetingFlowComponent", filePath: "apps/workplace/src/app/book/meeting-flow.component.ts", lineNumber: 27 });
})();

// apps/workplace/src/app/book/new-desk-flow/new-desk-flow-confirm.component.ts
var _c023 = (a0) => ({ time: a0 });
var _c113 = (a0) => ({ count: a0 });
function NewDeskFlowConfirmComponent_mat_spinner_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 19);
  }
}
function NewDeskFlowConfirmComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function NewDeskFlowConfirmComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss());
    });
    \u0275\u0275elementStart(1, "app-icon", 21);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function NewDeskFlowConfirmComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "app-icon", 8);
    \u0275\u0275text(2, "update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatted_recurrence);
  }
}
function NewDeskFlowConfirmComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formattedTime(ctx_r1.tz), " ");
  }
}
function NewDeskFlowConfirmComponent_section_28_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 25)(2, "app-icon");
    \u0275\u0275text(3, "arrow_upward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(feat_r3);
  }
}
function NewDeskFlowConfirmComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 23)(1, "app-icon", 6);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "h3", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "app-icon");
    \u0275\u0275text(8, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 9)(14, "app-icon");
    \u0275\u0275text(15, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, NewDeskFlowConfirmComponent_section_28_ng_container_18_Template, 6, 1, "ng-container", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.booking_asset == null ? null : ctx_r1.booking_asset.name) || (ctx_r1.booking_asset == null ? null : ctx_r1.booking_asset.id) || "", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 6, \u0275\u0275pipeBind1(11, 4, ctx_r1.is_group) ? "BOOKINGS.DESK_COUNT_GROUP" : "BOOKINGS.DESK_COUNT_LONE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.booking_asset.features);
  }
}
function NewDeskFlowConfirmComponent_section_29_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "app-icon");
    \u0275\u0275text(2, "priority_high");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", ctx_r1.err_tooltip);
  }
}
function NewDeskFlowConfirmComponent_section_29_div_7_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.name || "Item");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r4.quantity, " ");
  }
}
function NewDeskFlowConfirmComponent_section_29_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32)(3, "div", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, NewDeskFlowConfirmComponent_section_29_div_7_div_7_Template, 3, 1, "div", 34);
    \u0275\u0275element(8, "div", 35);
    \u0275\u0275elementStart(9, "div", 36);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 37);
    \u0275\u0275template(13, NewDeskFlowConfirmComponent_section_29_div_7_div_13_Template, 6, 2, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-error", ctx_r1.end_time < request_r5.deliver_at)("border-base-300", ctx_r1.end_time >= request_r5.deliver_at);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 11, "FORM.ASSETS_REQUESTED_FOR", \u0275\u0275pureFunction1(17, _c023, \u0275\u0275pipeBind2(5, 8, request_r5.deliver_at_time, "MMM d, " + ctx_r1.time_format))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.end_time < request_r5.deliver_at);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 14, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(19, _c113, request_r5.item_count)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", request_r5.items);
  }
}
function NewDeskFlowConfirmComponent_section_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 26)(1, "app-icon", 27);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, NewDeskFlowConfirmComponent_section_29_div_7_Template, 14, 21, "div", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "BOOKINGS.DESK_ASSETS_REQUESTED"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.assets);
  }
}
function NewDeskFlowConfirmComponent_section_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 43)(1, "app-icon", 27);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 45)(8, "span");
    \u0275\u0275text(9, "Locker E-043");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.DESK_LOCKER_REQUESTED"));
  }
}
function NewDeskFlowConfirmComponent_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function NewDeskFlowConfirmComponent_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.postForm());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CONFIRM"), " ");
  }
}
var NewDeskFlowConfirmComponent = class _NewDeskFlowConfirmComponent extends AsyncHandler {
  formattedTime(tz) {
    const date = this.booking.date;
    const date_end = this.booking.date_end;
    const all_day = this.booking.all_day;
    const tz_format = this._date.transform(date, "zzzz", tz);
    const start_date = this._date.transform(date, "MMM d", tz);
    const start_time = this._date.transform(date, this.time_format, tz);
    const end_date = this._date.transform(date_end, "MMM d", tz);
    const end_time = this._date.transform(date_end, this.time_format, tz);
    if (this.is_multiday) {
      return `${start_date}${all_day ? "" : ", " + start_time} - ${end_date}${all_day ? "" : ", " + end_time}`;
    } else if (all_day) {
      return i18n("COMMON.ALL_DAY");
    }
    return `${start_time} - ${end_time} ${"(" + tz_format + ")"}`;
  }
  get end_time() {
    const end = addMinutes(this.booking.date, this.booking.duration).valueOf();
    return this.booking.all_day ? endOfDay(end).valueOf() : end;
  }
  get booking() {
    return this._state.form.value;
  }
  get is_multiday() {
    return this.booking.duration > 24 * 60;
  }
  get time_format() {
    return this._settings.time_format;
  }
  get timezone() {
    return this._settings.get("app.desks.use_building_timezone") ? this._org.building.timezone : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    return getTimezoneOffsetString(tz);
  }
  get assets() {
    return this.booking.assets || null;
  }
  get needs_locker() {
    return !!this.booking.secondary_resource;
  }
  get assets_count() {
    return this.assets?.length ? this.assets.reduce((a, b) => a + b.amount, 0) : 0;
  }
  get booking_asset() {
    return this.booking.booking_asset;
  }
  get location() {
    const building = this._org.buildings.find((b) => b.id === this.booking_asset?.zone?.parent_id);
    const level = this._org.levels.find((l) => l.id === this.booking_asset?.zone?.id);
    return `${level?.display_name || level?.name}${building ? "," : ""} ${building?.address || building?.display_name || building?.name || ""}`;
  }
  get formatted_recurrence() {
    return formatRecurrence2({
      pattern: this.booking.recurrence_type,
      start: this.booking.date,
      end: this.booking.recurrence_end * 1e3,
      interval: this.booking.recurrence_interval,
      days_of_week: new Array(7).fill(0).map((_, i) => i).filter((i) => this.booking.recurrence_days & DAYS_OF_WEEK_INDEX[i])
    });
  }
  constructor(_state, _org, _sheet_ref, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._sheet_ref = _sheet_ref;
    this._settings = _settings;
    this.show_close = false;
    this._date = new DatePipe("en");
    this.loading = this._state.loading;
    this.is_group = this._state.options.pipe(map((_) => _.group));
    this.postForm = () => __async(this, null, function* () {
      try {
        if ((yield this._state.options.pipe(take(1)).toPromise())?.group) {
          yield this._state.postFormForGroup();
        } else {
          yield this._state.postForm();
        }
        this.dismiss(true);
      } catch (e2) {
        notifyError(typeof e2 === "string" ? e2 : i18n(`BOOKINGS.DESK_AVAILABLE_ERROR`));
      }
    });
    this.dismiss = (e2) => this._sheet_ref?.dismiss(e2);
  }
  static {
    this.\u0275fac = function NewDeskFlowConfirmComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskFlowConfirmComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatBottomSheetRef, 8), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFlowConfirmComponent, selectors: [["new-desk-flow-confirm"]], inputs: { show_close: "show_close" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 34, vars: 21, consts: [[1, "flex", "items-center", "justify-between", "p-2", "h-12", "m-2", "rounded", "bg-base-200"], [1, "text-xl", "font-medium", "px-2"], [1, ""], ["diameter", "32", 4, "ngIf"], ["icon", "", "name", "close-desk-confirm", "matRipple", "", 3, "click", 4, "ngIf"], ["period", "", 1, "flex", "space-x-1", "py-4", "px-2", "text-base"], [1, "text-success", "text-2xl"], ["details", "", 1, "space-y-2"], [1, "text-xl"], [1, "flex", "items-center", "space-x-2"], ["date", ""], ["class", "flex items-center space-x-2", 4, "ngIf"], ["time", ""], ["class", "text-xs opacity-30", 4, "ngIf"], ["desk", "", "class", "text-base flex space-x-1 py-4 px-2 border-t border-neutral", 4, "ngIf"], ["assets", "", "class", "flex space-x-1 py-4 px-2 border-t max-h-[50vh] overflow-auto", 4, "ngIf"], ["locker", "", "class", "flex space-x-1 py-4 px-2 border-t", 4, "ngIf"], [1, "p-2", "w-full", "border-t", "border-base-200", "mt-4"], ["name", "confirm-desk", "btn", "", "matRipple", "", "class", "w-full", 3, "click", 4, "ngIf"], ["diameter", "32"], ["icon", "", "name", "close-desk-confirm", "matRipple", "", 3, "click"], [1, "text-2xl"], [1, "text-xs", "opacity-30"], ["desk", "", 1, "text-base", "flex", "space-x-1", "py-4", "px-2", "border-t", "border-neutral"], [4, "ngFor", "ngForOf"], ["features", "", 1, "flex", "items-center", "space-x-2"], ["assets", "", 1, "flex", "space-x-1", "py-4", "px-2", "border-t", "max-h-[50vh]", "overflow-auto"], [1, "text-success"], ["details", "", 1, "flex-1", "leading-6", "w-1/2", "pr-2"], ["request", "", "class", "border bg-base-100 rounded-xl overflow-hidden", 3, "border-error", "border-base-300", 4, "ngFor", "ngForOf"], ["request", "", 1, "border", "bg-base-100", "rounded-xl", "overflow-hidden"], [1, "flex", "items-center", "space-x-2", "p-3"], [1, "flex-1", "flex", "items-center", "space-x-2"], [1, "text-sm"], ["class", "flex items-center justify-center h-6 w-6 rounded-full bg-error text-error-content", 3, "matTooltip", 4, "ngIf"], [1, "flex-1"], [1, "text-xs", "bg-success", "text-success-content", "px-2", "py-1", "rounded"], [1, "flex", "flex-col", "bg-base-200", "divide-y", "divide-base-100"], ["class", "flex items-center px-3 py-1 space-x-2 hover:opacity-90", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-center", "h-6", "w-6", "rounded-full", "bg-error", "text-error-content", 3, "matTooltip"], [1, "flex", "items-center", "px-3", "py-1", "space-x-2", "hover:opacity-90"], [1, "flex", "items-center", "flex-1"], [1, "rounded", "bg-success", "text-success-content", "text-xs", "px-2", "py-1"], ["locker", "", 1, "flex", "space-x-1", "py-4", "px-2", "border-t"], ["details", "", 1, "leading-6"], [1, "flex", "space-x-2"], ["name", "confirm-desk", "btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function NewDeskFlowConfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275template(5, NewDeskFlowConfirmComponent_mat_spinner_5_Template, 1, 0, "mat-spinner", 3);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, NewDeskFlowConfirmComponent_button_7_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "section", 5)(9, "app-icon", 6);
        \u0275\u0275text(10, "done");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "h3", 8);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "app-icon", 8);
        \u0275\u0275text(16, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, NewDeskFlowConfirmComponent_div_20_Template, 5, 1, "div", 11);
        \u0275\u0275elementStart(21, "div", 9)(22, "app-icon", 8);
        \u0275\u0275text(23, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 12)(25, "div", 12);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, NewDeskFlowConfirmComponent_div_27_Template, 2, 1, "div", 13);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(28, NewDeskFlowConfirmComponent_section_28_Template, 19, 8, "section", 14)(29, NewDeskFlowConfirmComponent_section_29_Template, 8, 4, "section", 15)(30, NewDeskFlowConfirmComponent_section_30_Template, 10, 3, "section", 16);
        \u0275\u0275elementStart(31, "footer", 17);
        \u0275\u0275template(32, NewDeskFlowConfirmComponent_button_32_Template, 3, 3, "button", 18);
        \u0275\u0275pipe(33, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, "APP.WORKPLACE.DESK_CONFIRM_TITLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(6, 14, ctx.loading));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.show_close);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.booking.title || "~Untitled~");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 16, ctx.booking.date, "fullDate"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.booking.recurrence_type && ctx.booking.recurrence_type !== "none");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.formattedTime());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.timezone);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.booking_asset == null ? null : ctx.booking_asset.id);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.assets.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.needs_locker);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(33, 19, ctx.loading));
      }
    }, dependencies: [NgForOf, NgIf, IconComponent, MatRipple, MatProgressSpinner, MatTooltip, AsyncPipe, DatePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFlowConfirmComponent, { className: "NewDeskFlowConfirmComponent", filePath: "apps/workplace/src/app/book/new-desk-flow/new-desk-flow-confirm.component.ts", lineNumber: 204 });
})();

// apps/workplace/src/app/book/new-desk-flow/new-desk-form-details.component.ts
var _c024 = () => ({ standalone: true });
var _c114 = () => [];
var _c26 = (a0, a1, a2) => ({ date: a0, duration: a1, all_day: a2 });
function NewDeskFormDetailsComponent_div_0_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 20)(1, "button", 21);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("click", function NewDeskFormDetailsComponent_div_0_section_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ group: false, members: [] }));
    });
    \u0275\u0275elementStart(3, "app-icon", 22);
    \u0275\u0275text(4, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 24);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 21);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275listener("click", function NewDeskFormDetailsComponent_div_0_section_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ group: true }));
    });
    \u0275\u0275elementStart(13, "app-icon", 22);
    \u0275\u0275text(14, "group_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 23);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "div", 24);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-secondary", !((tmp_2_0 = \u0275\u0275pipeBind1(2, 14, ctx_r1.options)) == null ? null : tmp_2_0.group));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 16, "BOOKINGS.DESK_LONE"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", (tmp_4_0 = \u0275\u0275pipeBind1(9, 18, ctx_r1.options)) == null ? null : tmp_4_0.group)("bg-secondary", !((tmp_5_0 = \u0275\u0275pipeBind1(10, 20, ctx_r1.options)) == null ? null : tmp_5_0.group));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-secondary", (tmp_6_0 = \u0275\u0275pipeBind1(12, 22, ctx_r1.options)) == null ? null : tmp_6_0.group);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 24, "BOOKINGS.DESK_GROUP"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", !((tmp_8_0 = \u0275\u0275pipeBind1(19, 26, ctx_r1.options)) == null ? null : tmp_8_0.group))("bg-secondary", (tmp_9_0 = \u0275\u0275pipeBind1(20, 28, ctx_r1.options)) == null ? null : tmp_9_0.group);
  }
}
function NewDeskFormDetailsComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-search-field", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "FORM.HOST"), "");
  }
}
function NewDeskFormDetailsComponent_div_0_mat_checkbox_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function NewDeskFormDetailsComponent_div_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "label", 30);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 31);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_34_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 29)(9, "label", 32);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 12, "FORM.TIME_START"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(16, _c024))("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "FORM.TIME_END"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("time", (tmp_8_0 = ctx_r1.form.get("date")) == null ? null : tmp_8_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr)("timezone", ctx_r1.timezone);
  }
}
function NewDeskFormDetailsComponent_div_0_div_35_mat_checkbox_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.UPDATE_FUTURE"), " ");
  }
}
function NewDeskFormDetailsComponent_div_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "label", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "recurrence-field", 36);
    \u0275\u0275twoWayListener("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_35_Template_recurrence_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.recurrence, $event) || (ctx_r1.recurrence = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_35_Template_recurrence_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRecurrenceChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, NewDeskFormDetailsComponent_div_0_div_35_mat_checkbox_7_Template, 3, 3, "mat-checkbox", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.RECURRENCE"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("date", ctx_r1.form.getRawValue().date);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.recurrence);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c024));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.value.id);
  }
}
function NewDeskFormDetailsComponent_div_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "mat-checkbox", 39);
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_div_0_div_36_Template_mat_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ secondary_resource: $event ? "locker" : "" }));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", !!ctx_r1.form.value.secondary_resource)("ngModelOptions", \u0275\u0275pureFunction0(5, _c024));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "BOOKINGS.DESK_REQUIRE_LOCKER"), " ");
  }
}
function NewDeskFormDetailsComponent_div_0_section_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3)(1, "h3", 40)(2, "div", 5);
    \u0275\u0275text(3, " 2 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 42)(9, "a-user-list-field", 43);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275listener("ngModelChange", function NewDeskFormDetailsComponent_div_0_section_37_Template_a_user_list_field_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOptions({ members: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "BOOKINGS.DESK_GROUP_MEMBERS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ((tmp_3_0 = \u0275\u0275pipeBind1(10, 5, ctx_r1.options)) == null ? null : tmp_3_0.members) || \u0275\u0275pureFunction0(7, _c114))("ngModelOptions", \u0275\u0275pureFunction0(8, _c024));
  }
}
function NewDeskFormDetailsComponent_div_0_section_39_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.DESK_GROUP_INFO"), " ");
  }
}
function NewDeskFormDetailsComponent_div_0_section_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "h3", 4)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "desk-list-field", 44);
    \u0275\u0275template(9, NewDeskFormDetailsComponent_div_0_section_39_p_9_Template, 3, 3, "p", 45);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = \u0275\u0275pipeBind1(4, 3, ctx_r1.options)) == null ? null : tmp_2_0.group) ? 3 : 2, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "RESOURCE.DESK"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_4_0 = \u0275\u0275pipeBind1(10, 7, ctx_r1.options)) == null ? null : tmp_4_0.group);
  }
}
function NewDeskFormDetailsComponent_div_0_section_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "h3", 4)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "asset-list-field", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = \u0275\u0275pipeBind1(4, 3, ctx_r1.options)) == null ? null : tmp_2_0.group) ? 4 : 3, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "RESOURCE.ASSETS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("options", \u0275\u0275pureFunction3(7, _c26, ctx_r1.form.getRawValue().date, ctx_r1.form.value.duration, ctx_r1.form.value.all_day));
  }
}
function NewDeskFormDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, NewDeskFormDetailsComponent_div_0_section_1_Template, 21, 30, "section", 2);
    \u0275\u0275elementStart(2, "section", 3)(3, "h3", 4)(4, "div", 5);
    \u0275\u0275text(5, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, NewDeskFormDetailsComponent_div_0_div_9_Template, 7, 3, "div", 7);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "label", 10);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-form-field", 11);
    \u0275\u0275element(19, "input", 12);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "mat-error");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 13)(25, "label", 14);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "a-date-field", 15);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, NewDeskFormDetailsComponent_div_0_mat_checkbox_33_Template, 3, 3, "mat-checkbox", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, NewDeskFormDetailsComponent_div_0_div_34_Template, 15, 17, "div", 17)(35, NewDeskFormDetailsComponent_div_0_div_35_Template, 8, 8, "div", 18)(36, NewDeskFormDetailsComponent_div_0_div_36_Template, 5, 6, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, NewDeskFormDetailsComponent_div_0_section_37_Template, 11, 9, "section", 19);
    \u0275\u0275pipe(38, "async");
    \u0275\u0275template(39, NewDeskFormDetailsComponent_div_0_section_39_Template, 11, 9, "section", 19)(40, NewDeskFormDetailsComponent_div_0_section_40_Template, 9, 11, "section", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_17_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allow_groups);
    \u0275\u0275advance();
    \u0275\u0275classProp("!border-none", ctx_r1.allow_groups);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 20, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.can_book_for_others && !((tmp_5_0 = \u0275\u0275pipeBind1(10, 22, ctx_r1.options)) == null ? null : tmp_5_0.group));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 24, "FORM.TITLE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 26, "BOOKINGS.DESK_TITLE_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 28, "FORM.TITLE_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 30, "FORM.DATE"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("to", ctx_r1.end_date)("timezone", ctx_r1.timezone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 32, "FORM.DATE_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.allow_all_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.form.value.all_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.can_recurr);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.can_book_lockers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_17_0 = \u0275\u0275pipeBind1(38, 34, ctx_r1.options)) == null ? null : tmp_17_0.group);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.contains("resources"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.has_assets);
  }
}
var NewDeskFormDetailsComponent = class _NewDeskFormDetailsComponent extends AsyncHandler {
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get can_book_for_others() {
    return this._settings.get("app.desks.can_book_for_others");
  }
  get can_book_lockers() {
    return this._settings.get("app.desks.can_book_lockers");
  }
  get can_recurr() {
    return this._settings.get("app.desks.allow_recurrence");
  }
  get allow_groups() {
    return this._settings.get("app.desks.allow_groups");
  }
  get has_assets() {
    return !!this._settings.get("app.desks.has_assets");
  }
  get needs_reason() {
    return this._settings.get("app.desks.needs_reason") === true;
  }
  get allow_time_changes() {
    return !!this._settings.get("app.desks.allow_time_changes");
  }
  get allow_all_day() {
    return this.allow_time_changes && !!this._settings.get("app.desks.allow_all_day");
  }
  get timezone() {
    return this._settings.get("app.desks.use_building_timezone") ? this._org.building.timezone : "";
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.desks.available_period") || 90)).valueOf();
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  constructor(_state, _org, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.find = new EventEmitter();
    this.buildings = this._org.building_list;
    this.levels = this._org.active_levels;
    this.options = this._state.options;
    this.features = this._state.features;
    this.force_time = set(Date.now(), {
      hours: 6,
      minutes: 0
    }).valueOf();
    this.from_id = false;
    this.recurrence_options = ["daily", "weekly", "monthly"];
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e2) => this._state.setFeature(f, e2);
  }
  ngOnChanges(changes) {
    if (changes.form && this.form) {
      if (this.selected_desk?.id) {
        this.form.patchValue({ resources: [this.selected_desk] });
      }
      this.initialiseRecurrence();
    }
  }
  initialiseRecurrence() {
    const { recurrence_type, recurrence_days, recurrence_interval, recurrence_end, date } = this.form.value;
    if (!this.can_recurr)
      return;
    this.recurrence = {
      pattern: recurrence_type,
      days_of_week: new Array(7).fill(0).map((_, i) => i).filter((i) => recurrence_days & DAYS_OF_WEEK_INDEX[i]),
      interval: recurrence_interval,
      start: date,
      end: recurrence_end
    };
  }
  onRecurrenceChange(recurrence) {
    if (!recurrence.pattern) {
      this.form.patchValue({ recurrence_type: "none" });
    } else if (recurrence.pattern === "daily") {
      this.form.patchValue({
        recurrence_type: "daily",
        recurrence_days: RecurrenceDays.MONDAY | RecurrenceDays.TUESDAY | RecurrenceDays.WEDNESDAY | RecurrenceDays.THURSDAY | RecurrenceDays.FRIDAY,
        recurrence_interval: recurrence.interval,
        recurrence_end: getUnixTime(recurrence.end)
      });
    } else if (recurrence.pattern === "weekly") {
      this.form.patchValue({
        recurrence_type: "weekly",
        recurrence_days: recurrence.days_of_week.reduce((d, i) => d | DAYS_OF_WEEK_INDEX[i], 0),
        recurrence_interval: recurrence.interval,
        recurrence_end: getUnixTime(recurrence.end)
      });
    } else if (recurrence.pattern === "monthly" || recurrence.pattern === "month_day") {
      const date = new Date(this.form.value.date).getDate();
      let instance = Math.floor(date / 7) + (date % 7 ? 1 : 0);
      if (instance === 4 && date >= 25 || instance === 5)
        instance = -1;
      this.form.patchValue({
        recurrence_type: "monthly",
        recurrence_interval: recurrence.interval,
        recurrence_nth_of_month: instance,
        recurrence_end: getUnixTime(recurrence.end)
      });
    } else {
      this.form.patchValue({ recurrence_type: "none" });
    }
  }
  static {
    this.\u0275fac = function NewDeskFormDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskFormDetailsComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFormDetailsComponent, selectors: [["new-desk-form-details"]], inputs: { form: "form" }, outputs: { find: "find" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "divide-y divide-base-200 space-y-2", 3, "formGroup", 4, "ngIf"], [1, "divide-y", "divide-base-200", "space-y-2", 3, "formGroup"], ["class", "flex items-center", 4, "ngIf"], [1, "p-2"], [1, "space-x-2", "flex", "items-center", "mb-4"], [1, "bg-base-200", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center"], [1, "text-xl"], ["class", "w-full", 4, "ngIf"], [1, "flex", "items-center", "flex-wrap", "sm:space-x-2"], [1, "flex-1", "min-w-[256px]"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "title", "formControlName", "title", 3, "placeholder"], [1, "flex-1", "min-w-[256px]", "relative"], ["for", "date"], ["name", "date", "formControlName", "date", 3, "to", "timezone"], ["formControlName", "all_day", "class", "absolute -top-2 right-0", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["class", "flex flex-col", 4, "ngIf"], ["class", "p-2", 4, "ngIf"], [1, "flex", "items-center"], ["matRipple", "", 1, "relative", "h-16", "flex", "items-center", "justify-center", "flex-1", "space-x-2", 3, "click"], [1, "text-2xl"], [1, ""], [1, "absolute", "h-1", "inset-x-0", "bottom-0", "!m-0"], [1, "w-full"], ["formControlName", "user", 1, "mb-4"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr", "timezone"], [1, "flex", "flex-col"], ["for", "recurrence"], ["name", "recurrence", 3, "ngModelChange", "date", "ngModel", "ngModelOptions"], ["formControlName", "update_master", 4, "ngIf"], ["formControlName", "update_master"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "space-x-2", "flex", "items-center"], [1, "flex-1", "w-px"], [1, "overflow-hidden"], [1, "mt-4", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["formControlName", "resources"], ["class", "text-center rounded px-2 py-1 bg-warning shadow text-xs", 4, "ngIf"], [1, "text-center", "rounded", "px-2", "py-1", "bg-warning", "shadow", "text-xs"], ["formControlName", "assets", 3, "options"]], template: function NewDeskFormDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NewDeskFormDetailsComponent_div_0_Template, 41, 36, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [NgIf, IconComponent, MatFormField, MatError, MatRipple, MatInput, MatCheckbox, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, UserListFieldComponent, UserSearchFieldComponent, RecurrenceFieldComponent, DeskListFieldComponent, AssetListFieldComponent, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFormDetailsComponent, { className: "NewDeskFormDetailsComponent", filePath: "apps/workplace/src/app/book/new-desk-flow/new-desk-form-details.component.ts", lineNumber: 259 });
})();

// apps/workplace/src/app/book/new-desk-flow/new-desk-flow-form.component.ts
var NewDeskFlowFormComponent = class _NewDeskFlowFormComponent {
  get form() {
    return this._state.form;
  }
  constructor(_state, _router, _org, _bottom_sheet, _settings) {
    this._state = _state;
    this._router = _router;
    this._org = _org;
    this._bottom_sheet = _bottom_sheet;
    this._settings = _settings;
    this.level = "";
    this.levels = [];
    this.clearForm = () => {
      this.level = this._org.building.id;
      this._state.clearForm();
    };
    this.viewConfirm = () => {
      const { asset_id, resources } = this.form.getRawValue();
      if (resources?.length && !asset_id) {
        this.form.patchValue({ asset_id: resources[0].id });
      }
      if (!this.form.valid)
        return notifyError(i18n("FORM.INVALID_FIELDS", {
          field_list: getInvalidFields(this.form).join(", ")
        }));
      this.sheet_ref = this._bottom_sheet.open(NewDeskFlowConfirmComponent);
      this.sheet_ref.instance.show_close = true;
      this.sheet_ref.afterDismissed().subscribe((value) => {
        if (value) {
          this._state.setView("success");
          this._router.navigate(["/book", "new-desks", "success"]);
        }
      });
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _));
      yield this._org.active_levels.pipe(first((_) => _?.length > 0));
      this._state.setOptions({ type: "desk" });
      this.level = this._org.building?.id;
      this.levels = [
        { id: this._org.building?.id, name: "Any Level" },
        ...this._org.levelsForBuilding(this._org.building)
      ];
      if (isBefore(this.form.value.date, Date.now())) {
        this.form.patchValue({ date: startOfMinute(Date.now()).valueOf() });
      }
      if (!this.form.value.id) {
        this.form.patchValue({
          duration: this._settings.get("app.desks.default_duration") || 60
        });
      }
    });
  }
  static {
    this.\u0275fac = function NewDeskFlowFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskFlowFormComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatBottomSheet), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFlowFormComponent, selectors: [["new-desk-flow-form"]], standalone: false, decls: 11, vars: 7, consts: [[1, "h-full", "w-full", "bg-base-200", "overflow-auto"], [1, "max-w-full", "w-[48rem]", "mx-auto", "sm:my-4", "bg-base-100", "border", "border-base-200"], [1, "w-full", "p-4", "sm:py-4", "sm:px-16", "text-2xl", "font-medium", "border-b", "border-base-200"], [1, "p-0", "sm:py-4", "sm:px-16", "block", 3, "form"], [1, "sm:mb-2", "border-b", "border-base-200", "w-full"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "sm:space-x-2", "p-2", "sm:px-16", "sm:mb-2"], ["btn", "", "name", "open-desk-confirm", "matRipple", "", "confirm", "", 1, "w-full", "sm:w-auto", 3, "click"]], template: function NewDeskFlowFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "new-desk-form-details", 3)(6, "div", 4);
        \u0275\u0275elementStart(7, "section", 5)(8, "button", 6);
        \u0275\u0275listener("click", function NewDeskFlowFormComponent_Template_button_click_8_listener() {
          return ctx.viewConfirm();
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "BOOKINGS.DESK_TITLE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("form", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "BOOKINGS.DESK_CONFIRM"), " ");
      }
    }, dependencies: [MatRipple, NewDeskFormDetailsComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFlowFormComponent, { className: "NewDeskFlowFormComponent", filePath: "apps/workplace/src/app/book/new-desk-flow/new-desk-flow-form.component.ts", lineNumber: 56 });
})();

// apps/workplace/src/app/book/new-desk-flow/new-desk-flow-success.component.ts
var _c025 = (a0) => ({ name: a0 });
var _c115 = () => ["/"];
var _c27 = (a0, a1, a2) => ({ date: a0, time: a1, size: a2 });
var _c35 = (a0) => ({ count: a0 });
function NewDeskFlowSuccessComponent_p_6_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r1 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_GROUP_ALLDAY", details_r1), " ");
  }
}
function NewDeskFlowSuccessComponent_p_6_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r1 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_GROUP", details_r1), " ");
  }
}
function NewDeskFlowSuccessComponent_p_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NewDeskFlowSuccessComponent_p_6_Conditional_5_Conditional_0_Template, 2, 4)(1, NewDeskFlowSuccessComponent_p_6_Conditional_5_Conditional_1_Template, 2, 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((ctx_r1.last_event == null ? null : ctx_r1.last_event.all_day) ? 0 : 1);
  }
}
function NewDeskFlowSuccessComponent_p_6_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r1 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_LONE_ALLDAY", details_r1), " ");
  }
}
function NewDeskFlowSuccessComponent_p_6_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r1 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_LONE", details_r1), " ");
  }
}
function NewDeskFlowSuccessComponent_p_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NewDeskFlowSuccessComponent_p_6_Conditional_6_Conditional_0_Template, 2, 4)(1, NewDeskFlowSuccessComponent_p_6_Conditional_6_Conditional_1_Template, 2, 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((ctx_r1.last_event == null ? null : ctx_r1.last_event.all_day) ? 0 : 1);
  }
}
function NewDeskFlowSuccessComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275declareLet(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275template(5, NewDeskFlowSuccessComponent_p_6_Conditional_5_Template, 2, 1)(6, NewDeskFlowSuccessComponent_p_6_Conditional_6_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275storeLet(\u0275\u0275pureFunction3(11, _c27, \u0275\u0275pipeBind2(2, 1, (ctx_r1.last_event == null ? null : ctx_r1.last_event.date) || 0, "mediumDate"), \u0275\u0275pipeBind2(3, 4, (ctx_r1.last_event == null ? null : ctx_r1.last_event.date) || 0, ctx_r1.time_format) + " - " + \u0275\u0275pipeBind2(4, 7, ctx_r1.last_event.date + ctx_r1.last_event.duration * 60 * 1e3, ctx_r1.time_format), ctx_r1.group_size));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.is_group ? 5 : 6);
  }
}
function NewDeskFlowSuccessComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "BOOKINGS.ASSETS_BOOKED", \u0275\u0275pureFunction1(4, _c35, ctx_r1.last_event == null ? null : ctx_r1.last_event.extension_data == null ? null : ctx_r1.last_event.extension_data.assets == null ? null : ctx_r1.last_event.extension_data.assets.length)), " ");
  }
}
function NewDeskFlowSuccessComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.SUCCESS_WAIT_APPROVED"), " ");
  }
}
function NewDeskFlowSuccessComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "a", 13);
    \u0275\u0275pipe(2, "sanitize");
    \u0275\u0275element(3, "img", 14);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 15);
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275element(9, "img", 16);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 17);
    \u0275\u0275pipe(14, "safe");
    \u0275\u0275elementStart(15, "app-icon", 18);
    \u0275\u0275text(16, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(2, 6, ctx_r1.outlook_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "BOOKINGS.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(8, 11, ctx_r1.google_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "BOOKINGS.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(14, 16, ctx_r1.ical_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "BOOKINGS.LINK_ICAL"));
  }
}
var NewDeskFlowSuccessComponent = class _NewDeskFlowSuccessComponent {
  get location() {
    const desk = this.last_event?.extension_data?.booking_asset;
    if (!desk)
      return "";
    return desk.zone ? `, ${desk.zone.display_name || desk.zone.name || desk.zone.id}` : "";
  }
  get is_group() {
    return this.group_size > 1;
  }
  get group_size() {
    return (this.last_event?.attendees?.length || 0) + 1;
  }
  get last_event() {
    return this._state.last_success;
  }
  get show_links() {
    return this._settings.get("app.desks.show_calendar_links");
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.outlook_link = "";
    this.google_link = "";
    this.ical_link = "";
    this.viewCalendarLinks = () => this._state.openBookingLinkModal();
  }
  ngOnInit() {
    const event = __spreadProps(__spreadValues({}, this.last_event), {
      location: `${this.location}, ${this.last_event.asset_name || ""}`
    });
    this.outlook_link = generateMicrosoftCalendarLink(event);
    this.google_link = generateGoogleCalendarLink(event);
    this.ical_link = generateCalendarFileLink(event);
  }
  static {
    this.\u0275fac = function NewDeskFlowSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskFlowSuccessComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFlowSuccessComponent, selectors: [["new-desk-flow-success"]], standalone: false, decls: 14, vars: 15, consts: [[1, "absolute", "inset-0", "bg-base-100", "flex", "flex-col", "z-50", "overflow-auto"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "text-2xl", "font-medium", "text-center"], ["src", "assets/icons/success.svg"], ["class", "text-center", 4, "ngIf"], ["assets", "", 4, "ngIf"], [4, "ngIf"], ["class", "flex flex-col items-center space-y-4 p-4 relative", 4, "ngIf"], [1, "sticky", "bottom-0", "p-2", "w-full", "border-t", "bg-base-100", "border-base-200", "mt-4", "flex", "items-center", "justify-center"], ["btn", "", "name", "desk-confirm-continue", "matRipple", "", 1, "w-full", "max-w-[32rem]", "mx-auto", 3, "routerLink"], [1, "text-center"], ["assets", ""], [1, "flex", "flex-col", "items-center", "space-y-4", "p-4", "relative"], ["btn", "", "matRipple", "", "name", "desk-outlook-link", "target", "_blank", "rel", "noopener noreferer", 1, "flex", "items-center", "p-2", "space-x-2", "pr-4", "w-64", "rounded", "inverse", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-google-link", "target", "_blank", "rel", "noopener noreferer", 1, "flex", "items-center", "p-2", "space-x-2", "pr-4", "w-64", "rounded", "inverse", 3, "href"], ["src", "assets/icons/gcal.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-ical-link", "target", "_blank", "rel", "noopener noreferer", 1, "flex", "items-center", "p-2", "space-x-2", "pr-4", "w-64", "rounded", "inverse", 3, "href"], [1, "text-xl"]], template: function NewDeskFlowSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "img", 3);
        \u0275\u0275template(6, NewDeskFlowSuccessComponent_p_6_Template, 7, 15, "p", 4)(7, NewDeskFlowSuccessComponent_p_7_Template, 3, 6, "p", 5)(8, NewDeskFlowSuccessComponent_p_8_Template, 3, 3, "p", 6)(9, NewDeskFlowSuccessComponent_div_9_Template, 20, 21, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "footer", 8)(11, "a", 9);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 7, "BOOKINGS.ITEM_BOOKED", \u0275\u0275pureFunction1(12, _c025, (ctx.last_event.asset_name || ctx.last_event.asset_id) + ctx.location)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.last_event);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.last_event == null ? null : ctx.last_event.extension_data == null ? null : ctx.last_event.extension_data.assets == null ? null : ctx.last_event.extension_data.assets.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", true);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.show_links);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c115));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 10, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
      }
    }, dependencies: [NgIf, IconComponent, MatRipple, RouterLink, DatePipe, SafePipe, SanitizePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFlowSuccessComponent, { className: "NewDeskFlowSuccessComponent", filePath: "apps/workplace/src/app/book/new-desk-flow/new-desk-flow-success.component.ts", lineNumber: 142 });
})();

// apps/workplace/src/app/book/new-desk-flow.component.ts
function NewDeskFlowComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "new-desk-flow-success");
    \u0275\u0275elementContainerEnd();
  }
}
function NewDeskFlowComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "new-desk-flow-form");
    \u0275\u0275elementContainerEnd();
  }
}
var NewDeskFlowComponent = class _NewDeskFlowComponent extends AsyncHandler {
  get view() {
    return this._state.view;
  }
  get last_success() {
    return this._state.last_success;
  }
  constructor(_state, _route, _org) {
    super();
    this._state = _state;
    this._route = _route;
    this._org = _org;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this._state.loadForm();
      this._state.setOptions({ type: "desk" });
      this._state.form.patchValue({ booking_type: "desk" });
      this.subscription("route.params", this._route.paramMap.subscribe((param) => {
        if (param.has("step"))
          this._state.setView(param.get("step"));
      }));
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => __async(this, null, function* () {
        if (params.has("success")) {
          this._state.setView(params.get("success"));
        }
        if (params.has("asset_id")) {
          const id = params.get("asset_id");
          const resources = yield this._state.resources.pipe(take(1)).toPromise();
          let asset = resources.find((_) => _.id === id);
          if (!asset) {
            return notifyInfo("Unable to find desk with given asset ID.");
          }
          this._state.form.patchValue({
            resources: [
              new Desk({
                id: asset.id,
                name: asset.name || asset.id
              })
            ]
          });
        }
      })));
    });
  }
  static {
    this.\u0275fac = function NewDeskFlowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskFlowComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFlowComponent, selectors: [["placeos-new-book-desk-flow"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 2, consts: [[1, "bg-base-100", "h-full", "w-full", "z-50"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]], template: function NewDeskFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275elementContainerStart(1, 1);
        \u0275\u0275template(2, NewDeskFlowComponent_ng_container_2_Template, 2, 0, "ng-container", 2)(3, NewDeskFlowComponent_ng_container_3_Template, 2, 0, "ng-container", 3);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitch", ctx.view);
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "success");
      }
    }, dependencies: [NgSwitch, NgSwitchCase, NgSwitchDefault, NewDeskFlowFormComponent, NewDeskFlowSuccessComponent], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=new-desk-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFlowComponent, { className: "NewDeskFlowComponent", filePath: "apps/workplace/src/app/book/new-desk-flow.component.ts", lineNumber: 32 });
})();

// apps/workplace/src/app/book/visitor-flow.component.ts
var VisitorFlowComponent = class _VisitorFlowComponent {
  constructor(_router) {
    this._router = _router;
  }
  onDone() {
    this._router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function VisitorFlowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorFlowComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorFlowComponent, selectors: [["placeos-book-space-flow"]], standalone: false, decls: 3, vars: 0, consts: [[1, "bg-base-200", "h-full", "w-full", "overflow-auto"], [1, "w-full", "h-full", "sm:h-auto", "max-w-[48rem]", "mx-auto", "sm:my-4", "bg-base-100", "shadow", "border", "border-base-200", "overflow-hidden"], [3, "done"]], template: function VisitorFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "invite-visitor-form", 2);
        \u0275\u0275listener("done", function VisitorFlowComponent_Template_invite_visitor_form_done_2_listener() {
          return ctx.onDone();
        });
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [InviteVisitorFormComponent], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=visitor-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorFlowComponent, { className: "VisitorFlowComponent", filePath: "apps/workplace/src/app/book/visitor-flow.component.ts", lineNumber: 26 });
})();

// apps/workplace/src/app/book/new-parking-flow/parking-flow-confirm.component.ts
function NewParkingFlowConfirmComponent_mat_spinner_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 15);
  }
}
function NewParkingFlowConfirmComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function NewParkingFlowConfirmComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss());
    });
    \u0275\u0275elementStart(1, "app-icon", 17);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function NewParkingFlowConfirmComponent_section_28_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 20)(2, "app-icon");
    \u0275\u0275text(3, "arrow_upward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(feat_r3);
  }
}
function NewParkingFlowConfirmComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18)(1, "app-icon", 6);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "h3", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "app-icon");
    \u0275\u0275text(8, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9)(13, "app-icon");
    \u0275\u0275text(14, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, NewParkingFlowConfirmComponent_section_28_ng_container_17_Template, 6, 1, "ng-container", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.booking_asset == null ? null : ctx_r1.booking_asset.name) || (ctx_r1.booking_asset == null ? null : ctx_r1.booking_asset.id) || "", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 4, "RESOURCE.PARKING_SPACE"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.booking_asset.features);
  }
}
function NewParkingFlowConfirmComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function NewParkingFlowConfirmComponent_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.postForm());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CONFIRM"), " ");
  }
}
var NewParkingFlowConfirmComponent = class _NewParkingFlowConfirmComponent extends AsyncHandler {
  get time_format() {
    return this._settings.time_format;
  }
  get booking() {
    return this._state.form.value;
  }
  get assets() {
    return this.booking.assets || null;
  }
  get assets_count() {
    return this.assets?.length ? this.assets.reduce((a, b) => a + b.amount, 0) : 0;
  }
  get booking_asset() {
    return this.booking.booking_asset;
  }
  get location() {
    const building = this._org.buildings.find((b) => b.id === this.booking_asset?.zone?.parent_id);
    const level = this._org.levels.find((l) => l.id === this.booking_asset?.zone?.id);
    return `${level?.display_name || level?.name}${building ? "," : ""} ${building?.address || building?.display_name || building?.name || ""}`;
  }
  constructor(_state, _org, _sheet_ref, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._sheet_ref = _sheet_ref;
    this._settings = _settings;
    this.show_close = false;
    this.loading = this._state.loading;
    this.postForm = () => __async(this, null, function* () {
      const r = yield this._state.postForm().catch((_) => {
        notifyError(`Unable to complete booking. ${_}`);
      });
      if (!r)
        return;
      this.dismiss(true);
    });
    this.dismiss = (e2) => this._sheet_ref?.dismiss(e2);
  }
  static {
    this.\u0275fac = function NewParkingFlowConfirmComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewParkingFlowConfirmComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatBottomSheetRef, 8), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingFlowConfirmComponent, selectors: [["new-parking-flow-confirm"]], inputs: { show_close: "show_close" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 32, vars: 25, consts: [[1, "flex", "items-center", "justify-between", "p-2", "h-12", "m-2", "rounded", "bg-base-200"], [1, "text-xl", "font-medium", "px-2"], [1, ""], ["diameter", "32", 4, "ngIf"], ["icon", "", "name", "close-locker-confirm", "matRipple", "", 3, "click", 4, "ngIf"], ["period", "", 1, "flex", "space-x-1", "py-4", "px-2", "text-base"], [1, "text-success", "text-2xl"], ["details", "", 1, "text-base", "space-y-2"], [1, "text-xl"], [1, "flex", "items-center", "space-x-2"], ["date", ""], ["time", ""], ["resource", "", "class", "flex space-x-1 py-4 px-2 border-t text-base", 4, "ngIf"], [1, "p-2", "w-full", "border-t", "border-base-200", "mt-4"], ["confirm", "", "btn", "", "matRipple", "", "class", "w-full", 3, "click", 4, "ngIf"], ["diameter", "32"], ["icon", "", "name", "close-locker-confirm", "matRipple", "", 3, "click"], [1, "text-2xl"], ["resource", "", 1, "flex", "space-x-1", "py-4", "px-2", "border-t", "text-base"], [4, "ngFor", "ngForOf"], ["features", "", 1, "flex", "items-center", "space-x-2"], ["confirm", "", "btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function NewParkingFlowConfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275template(5, NewParkingFlowConfirmComponent_mat_spinner_5_Template, 1, 0, "mat-spinner", 3);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, NewParkingFlowConfirmComponent_button_7_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "section", 5)(9, "app-icon", 6);
        \u0275\u0275text(10, "done");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "h3", 8);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "app-icon");
        \u0275\u0275text(16, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 9)(21, "app-icon");
        \u0275\u0275text(22, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 11);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275pipe(26, "date");
        \u0275\u0275pipe(27, "date");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(28, NewParkingFlowConfirmComponent_section_28_Template, 18, 6, "section", 12);
        \u0275\u0275elementStart(29, "footer", 13);
        \u0275\u0275template(30, NewParkingFlowConfirmComponent_button_30_Template, 3, 3, "button", 14);
        \u0275\u0275pipe(31, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "APP.WORKPLACE.PARKING_CONFIRM_TITLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(6, 10, ctx.loading));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.show_close);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.booking.title || "~Untitled~");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 12, ctx.booking.date, "fullDate"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.booking.all_day ? \u0275\u0275pipeBind1(25, 15, "COMMON.ALL_DAY") : \u0275\u0275pipeBind2(26, 17, ctx.booking.date, ctx.time_format) + " - " + \u0275\u0275pipeBind2(27, 20, ctx.booking.date + ctx.booking.duration * 60 * 1e3, ctx.time_format + " (z)"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.booking_asset == null ? null : ctx.booking_asset.id);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(31, 23, ctx.loading));
      }
    }, dependencies: [NgForOf, NgIf, IconComponent, MatRipple, MatProgressSpinner, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\nsection[_ngcontent-%COMP%]    > app-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-top: 0.3rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: medium;\n  margin: 0.5rem 0;\n}\n/*# sourceMappingURL=parking-flow-confirm.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingFlowConfirmComponent, { className: "NewParkingFlowConfirmComponent", filePath: "apps/workplace/src/app/book/new-parking-flow/parking-flow-confirm.component.ts", lineNumber: 108 });
})();

// apps/workplace/src/app/book/new-parking-flow/parking-form-details.component.ts
var _c026 = () => ({ standalone: true });
function ParkingFormDetailsComponent_div_0_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
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
function ParkingFormDetailsComponent_div_0_mat_checkbox_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function ParkingFormDetailsComponent_div_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "label", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 23);
    \u0275\u0275listener("ngModelChange", function ParkingFormDetailsComponent_div_0_div_37_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 24)(9, "label", 25);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(12, _c026))("use_24hr", ctx_r1.use_24hr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "FORM.TIME_START"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r1.form == null ? null : ctx_r1.form.value == null ? null : ctx_r1.form.value.date)("max", ctx_r1.max_duration)("use_24hr", ctx_r1.use_24hr);
  }
}
function ParkingFormDetailsComponent_div_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "label", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "host-select-field", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "FORM.HOST"), "");
  }
}
function ParkingFormDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "label", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-form-field", 5)(9, "mat-select", 6);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275listener("ngModelChange", function ParkingFormDetailsComponent_div_0_Template_mat_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275template(11, ParkingFormDetailsComponent_div_0_mat_option_11_Template, 2, 2, "mat-option", 7);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-error");
    \u0275\u0275text(14, "Building is required");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 2)(16, "div", 3)(17, "label", 4);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-form-field", 5);
    \u0275\u0275element(23, "input", 8);
    \u0275\u0275elementStart(24, "mat-error");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 9)(28, "label", 10);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "a-date-field", 11);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, ParkingFormDetailsComponent_div_0_mat_checkbox_36_Template, 3, 3, "mat-checkbox", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, ParkingFormDetailsComponent_div_0_div_37_Template, 15, 13, "div", 13)(38, ParkingFormDetailsComponent_div_0_div_38_Template, 7, 3, "div", 14);
    \u0275\u0275elementStart(39, "div", 15)(40, "label", 16);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "mat-form-field", 5);
    \u0275\u0275element(44, "input", 17);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementStart(46, "mat-error");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 16, "RESOURCE.BUILDING"), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(10, 18, ctx_r1.building))("ngModelOptions", \u0275\u0275pureFunction0(36, _c026));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(12, 20, ctx_r1.building_list));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 22, "FORM.TITLE"), "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 24, "FORM.TITLE_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 26, "FORM.DATE"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("to", ctx_r1.end_date);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 28, "FORM.DATE_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.allow_all_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.form.value.all_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.can_book_for_others);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 30, "BOOKINGS.PARKING_PLATE_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(45, 32, "BOOKINGS.PARKING_PLATE_NUMBER_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 34, "BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED"), " ");
  }
}
var ParkingFormDetailsComponent = class _ParkingFormDetailsComponent extends AsyncHandler {
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.parking.available_period") || 7));
  }
  get max_duration() {
    return this._settings.get("app.parking.max_duration") || this._settings.get("app.bookings.max_duration") || 480;
  }
  get allow_all_day() {
    return this._settings.get("app.parking.allow_all_day") || true;
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get can_book_for_others() {
    return this._settings.get("app.parking.can_book_for_others");
  }
  constructor(_settings, _org) {
    super();
    this._settings = _settings;
    this._org = _org;
    this.building = this._org.active_building;
    this.building_list = this._org.building_list;
    this.setBuilding = (bld) => this._org.building = bld;
  }
  static {
    this.\u0275fac = function ParkingFormDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingFormDetailsComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingFormDetailsComponent, selectors: [["parking-form-details"]], inputs: { form: "form" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "flex", "items-center", "flex-wrap", "sm:space-x-2"], [1, "flex-1", "min-w-[256px]"], ["for", "title"], ["appearance", "outline", 1, "w-full"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "e.g. Team Meeting"], [1, "flex-1", "min-w-[256px]", "relative"], ["for", "date"], ["name", "date", "formControlName", "date", 3, "to"], ["formControlName", "all_day", "class", "absolute -top-2 right-0", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["class", "w-full flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "plate-number"], ["matInput", "", "name", "plate-number", "formControlName", "plate_number", 3, "placeholder"], [3, "value"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr"], [1, "flex-1", "w-1/3", "relative"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "use_24hr"], [1, "w-full", "flex", "flex-col"], ["for", "host"], ["name", "host", "formControlName", "organiser"]], template: function ParkingFormDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ParkingFormDetailsComponent_div_0_Template, 49, 37, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [NgForOf, NgIf, MatOption, MatFormField, MatError, MatSelect, MatInput, MatCheckbox, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, HostSelectFieldComponent, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingFormDetailsComponent, { className: "ParkingFormDetailsComponent", filePath: "apps/workplace/src/app/book/new-parking-flow/parking-form-details.component.ts", lineNumber: 136 });
})();

// apps/workplace/src/app/book/new-parking-flow/parking-flow-form.component.ts
var ParkingFlowFormComponent = class _ParkingFlowFormComponent extends AsyncHandler {
  get form() {
    return this._state.form;
  }
  constructor(_state, _settings, _router, _bottom_sheet, _parking) {
    super();
    this._state = _state;
    this._settings = _settings;
    this._router = _router;
    this._bottom_sheet = _bottom_sheet;
    this._parking = _parking;
    this.hide_block = {};
    this.clearForm = () => this._state.resetForm();
    this.viewConfirm = () => {
      const { asset_id, resources } = this.form.getRawValue();
      if (resources?.length && !asset_id) {
        this.form.patchValue({ asset_id: resources[0].id });
      }
      if (!this.form.valid)
        return notifyError(`Some fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
      this.sheet_ref = this._bottom_sheet.open(NewParkingFlowConfirmComponent);
      this.sheet_ref.instance.show_close = true;
      this.sheet_ref.afterDismissed().subscribe((value) => {
        if (value) {
          this._router.navigate(["/book", "new-parking", "success"]);
          this._state.setView("success");
        }
      });
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this._state.setOptions({ type: "parking" });
      this.form.patchValue({ all_day: true, user: currentUser() });
      const user = yield this._parking.user_details.pipe(take(1)).toPromise();
      if (user?.email) {
        this.form.patchValue({ plate_number: user.plate_number });
      }
    });
  }
  static {
    this.\u0275fac = function ParkingFlowFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingFlowFormComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatBottomSheet), \u0275\u0275directiveInject(ParkingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingFlowFormComponent, selectors: [["parking-flow-form"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 39, vars: 21, consts: [[1, "h-full", "w-full", "bg-base-200", "overflow-auto"], [1, "max-w-full", "w-[48rem]", "mx-auto", "sm:my-4", "bg-base-100", "border", "border-base-200"], [1, "w-full", "p-4", "sm:py-4", "sm:px-16", "text-2xl", "font-medium", "border-b", "border-base-200"], [1, "p-0", "sm:py-4", "sm:px-16", "divide-y", "divide-base-200", "space-y-2", 3, "formGroup"], [1, "p-2"], [1, "space-x-2", "flex", "items-center"], [1, "bg-base-200", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center"], [1, "text-xl"], [1, "flex-1", "w-px"], ["icon", "", "matRipple", "", 3, "click"], [1, "overflow-hidden"], [1, "mt-4", 3, "form"], ["formControlName", "resources"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "sm:space-x-2", "p-2"], ["btn", "", "matRipple", "", "confirm", "", 1, "mb-2", "sm:mb-0", "w-full", "sm:w-auto", 3, "click"], ["btn", "", "matRipple", "", "clear-form", "", 1, "inverse", "w-full", "sm:w-auto", 3, "click"]], template: function ParkingFlowFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "form", 3)(6, "section", 4)(7, "h3", 5)(8, "div", 6);
        \u0275\u0275text(9, " 1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "div", 8);
        \u0275\u0275elementStart(14, "button", 9);
        \u0275\u0275listener("click", function ParkingFlowFormComponent_Template_button_click_14_listener() {
          return ctx.hide_block.details = !ctx.hide_block.details;
        });
        \u0275\u0275elementStart(15, "app-icon");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275element(18, "parking-form-details", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "section", 4)(20, "h3", 5)(21, "div", 6);
        \u0275\u0275text(22, " 2 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 7);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "div", 8);
        \u0275\u0275elementStart(27, "button", 9);
        \u0275\u0275listener("click", function ParkingFlowFormComponent_Template_button_click_27_listener() {
          return ctx.hide_block.space = !ctx.hide_block.space;
        });
        \u0275\u0275elementStart(28, "app-icon");
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 10);
        \u0275\u0275element(31, "parking-space-list-field", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "section", 13)(33, "button", 14);
        \u0275\u0275listener("click", function ParkingFlowFormComponent_Template_button_click_33_listener() {
          return ctx.viewConfirm();
        });
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "button", 15);
        \u0275\u0275listener("click", function ParkingFlowFormComponent_Template_button_click_36_listener() {
          return ctx.clearForm();
        });
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, ctx.form.value.id ? "APP.WORKPLACE.PARKING_EDIT_HEADER" : "APP.WORKPLACE.PARKING_NEW_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 13, "BOOKINGS.DETAILS"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hide_block.details ? "expand_more" : "expand_less");
        \u0275\u0275advance();
        \u0275\u0275property("@show", ctx.hide_block.details ? "hide" : "show");
        \u0275\u0275advance();
        \u0275\u0275property("form", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 15, "RESOURCE.PARKING_SPACE"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hide_block.space ? "expand_more" : "expand_less");
        \u0275\u0275advance();
        \u0275\u0275property("@show", ctx.hide_block.space ? "hide" : "show");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 17, "BOOKINGS.PARKING_CONFIRM"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 19, ctx.form.value.id ? "FORM.RESET" : "FORM.CLEAR"), " ");
      }
    }, dependencies: [IconComponent, MatRipple, ParkingSpaceListFieldComponent, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ParkingFormDetailsComponent, TranslatePipe], encapsulation: 2, data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingFlowFormComponent, { className: "ParkingFlowFormComponent", filePath: "apps/workplace/src/app/book/new-parking-flow/parking-flow-form.component.ts", lineNumber: 137 });
})();

// apps/workplace/src/app/book/new-parking-flow/parking-flow-success.component.ts
var _c027 = (a0, a1, a2, a3) => ({ name: a0, place: a1, date: a2, time: a3 });
var _c116 = () => ["/"];
function ParkingFlowSuccessComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "a", 9);
    \u0275\u0275pipe(2, "sanitize");
    \u0275\u0275element(3, "img", 10);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 11);
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275element(9, "img", 12);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 13);
    \u0275\u0275pipe(14, "safe");
    \u0275\u0275elementStart(15, "app-icon", 14);
    \u0275\u0275text(16, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(2, 6, ctx_r0.outlook_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "BOOKINGS.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(8, 11, ctx_r0.google_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "BOOKINGS.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(14, 16, ctx_r0.ical_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "BOOKINGS.LINK_ICAL"));
  }
}
var ParkingFlowSuccessComponent = class _ParkingFlowSuccessComponent {
  get location() {
    const resource = this.last_event?.extension_data?.booking_asset;
    if (!resource)
      return "";
    return resource.zone ? `, ${resource.zone.display_name || resource.zone.name || resource.zone.id}` : "";
  }
  get last_event() {
    return this._state.last_success;
  }
  get time_format() {
    return this._settings.time_format;
  }
  get show_links() {
    return this._settings.get("app.parking.show_calendar_links");
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.outlook_link = "";
    this.google_link = "";
    this.ical_link = "";
  }
  ngOnInit() {
    const event = __spreadProps(__spreadValues({}, this.last_event), {
      location: `${this.location}, ${this.last_event.asset_name || ""}`
    });
    this.outlook_link = generateMicrosoftCalendarLink(event);
    this.google_link = generateGoogleCalendarLink(event);
    this.ical_link = generateCalendarFileLink(event);
  }
  static {
    this.\u0275fac = function ParkingFlowSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingFlowSuccessComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingFlowSuccessComponent, selectors: [["parking-flow-success"]], standalone: false, decls: 15, vars: 24, consts: [[1, "absolute", "inset-0", "bg-base-100", "flex", "flex-col", "z-50", "overflow-auto"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "text-2xl", "font-medium"], [1, "text-center", "max-w-[32rem]"], ["src", "assets/icons/parking-success.svg"], ["class", "flex flex-col items-center space-y-4 p-4 relative", 4, "ngIf"], [1, "sticky", "bottom-0", "bg-base-100", "p-2", "w-full", "border-t", "border-base-200", "mt-4", "flex", "items-center", "justify-center"], ["btn", "", "matRipple", "", 1, "w-full", "max-w-[32rem]", 3, "routerLink"], [1, "flex", "flex-col", "items-center", "space-y-4", "p-4", "relative"], ["btn", "", "matRipple", "", "name", "desk-outlook-link", "target", "_blank", "rel", "noopener noreferer", 1, "flex", "items-center", "p-2", "space-x-2", "pr-4", "w-64", "rounded", "inverse", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-google-link", "target", "_blank", "rel", "noopener noreferer", 1, "flex", "items-center", "p-2", "space-x-2", "pr-4", "w-64", "rounded", "inverse", 3, "href"], ["src", "assets/icons/gcal.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-ical-link", "target", "_blank", "rel", "noopener noreferer", 1, "flex", "items-center", "p-2", "space-x-2", "pr-4", "w-64", "rounded", "inverse", 3, "href"], [1, "text-xl"]], template: function ParkingFlowSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1);
        \u0275\u0275element(2, "h2", 2);
        \u0275\u0275elementStart(3, "p", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "date");
        \u0275\u0275pipe(6, "date");
        \u0275\u0275pipe(7, "date");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "img", 4);
        \u0275\u0275template(10, ParkingFlowSuccessComponent_div_10_Template, 20, 21, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "footer", 6)(12, "a", 7);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 13, "APP.WORKPLACE.PARKING_SUCCESS_MSG", \u0275\u0275pureFunction4(18, _c027, ctx.last_event.asset_name, ctx.location, \u0275\u0275pipeBind2(5, 4, ctx.last_event.date, "mediumDate"), \u0275\u0275pipeBind2(7, 10, \u0275\u0275pipeBind2(6, 7, ctx.last_event.date, ctx.time_format + " - " + ctx.last_event.date + ctx.last_event.duration * 60 * 1e3), ctx.time_format))), " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.show_links);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(23, _c116));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 16, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
      }
    }, dependencies: [NgIf, IconComponent, MatRipple, RouterLink, DatePipe, SafePipe, SanitizePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingFlowSuccessComponent, { className: "ParkingFlowSuccessComponent", filePath: "apps/workplace/src/app/book/new-parking-flow/parking-flow-success.component.ts", lineNumber: 102 });
})();

// apps/workplace/src/app/book/new-parking-flow.component.ts
var _c028 = (a0) => ({ name: a0 });
var _c117 = () => ["/your-bookings"];
function NewParkingFlowComponent_ng_container_0_ng_container_1_parking_flow_success_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-flow-success");
  }
}
function NewParkingFlowComponent_ng_container_0_ng_container_1_parking_flow_confirm_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-flow-confirm");
  }
}
function NewParkingFlowComponent_ng_container_0_ng_container_1_parking_flow_form_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-flow-form");
  }
}
function NewParkingFlowComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275template(2, NewParkingFlowComponent_ng_container_0_ng_container_1_parking_flow_success_2_Template, 1, 0, "parking-flow-success", 4)(3, NewParkingFlowComponent_ng_container_0_ng_container_1_parking_flow_confirm_3_Template, 1, 0, "parking-flow-confirm", 4)(4, NewParkingFlowComponent_ng_container_0_ng_container_1_parking_flow_form_4_Template, 1, 0, "parking-flow-form", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", ctx_r0.view);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "confirm");
  }
}
function NewParkingFlowComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NewParkingFlowComponent_ng_container_0_ng_container_1_Template, 5, 3, "ng-container", 2);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const assigned_state_r2 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(2, 2, ctx_r0.assigned_space) || !\u0275\u0275pipeBind1(3, 4, ctx_r0.has_booking))("ngIfElse", assigned_state_r2);
  }
}
function NewParkingFlowComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "img", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 5, "APP.WORKPLACE.PARKING_ASSIGNED", \u0275\u0275pureFunction1(10, _c028, (tmp_3_0 = \u0275\u0275pipeBind1(4, 3, ctx_r0.assigned_space)) == null ? null : tmp_3_0.name)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c117));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "APP.WORKPLACE.VIEW_SCHEDULE"), " ");
  }
}
function NewParkingFlowComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, " Your user account is not allowed to book parking in this building. ");
    \u0275\u0275elementEnd()();
  }
}
var NewParkingFlowComponent = class _NewParkingFlowComponent extends AsyncHandler {
  get view() {
    return this._state.view;
  }
  get last_success() {
    return this._state.last_success;
  }
  constructor(_state, _route, _parking) {
    super();
    this._state = _state;
    this._route = _route;
    this._parking = _parking;
    this.deny_parking_access = this._parking.deny_parking_access;
    this.assigned_space = this._parking.assigned_space;
    this.has_booking = this._parking.has_booking;
  }
  ngOnInit() {
    this._state.loadForm();
    if (!this._state.form)
      this._state.newForm();
    this._state.setOptions({ type: "parking" });
    this._state.form.patchValue({ booking_type: "parking" });
    this.subscription("route.params", this._route.paramMap.subscribe((param) => {
      if (param.has("step"))
        this._state.setView(param.get("step"));
    }));
    this.subscription("route.query", this._route.queryParamMap.subscribe((param) => {
      if (param.has("success"))
        this._state.setView("success");
    }));
  }
  static {
    this.\u0275fac = function NewParkingFlowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewParkingFlowComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ParkingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewParkingFlowComponent, selectors: [["placeos-new-parking-flow"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 4, consts: [["assigned_state", ""], ["deny_state", ""], [4, "ngIf", "ngIfElse"], [1, "bg-base-100", "h-full", "w-full", "z-50", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "bg-base-100", "flex", "flex-col", "items-center", "justify-center", "h-full", "w-full", "z-50", "space-y-4"], ["src", "assets/icons/parking-success.svg", 1, "w-64", "h-64"], ["btn", "", "matRipple", "", 1, "w-48", 3, "routerLink"], ["src", "assets/img/parking-space.svg", 1, "w-64", "h-64"]], template: function NewParkingFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NewParkingFlowComponent_ng_container_0_Template, 4, 6, "ng-container", 2);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275template(2, NewParkingFlowComponent_ng_template_2_Template, 9, 13, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, NewParkingFlowComponent_ng_template_4_Template, 4, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const deny_state_r3 = \u0275\u0275reference(5);
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(1, 2, ctx.deny_parking_access))("ngIfElse", deny_state_r3);
      }
    }, dependencies: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, MatRipple, RouterLink, ParkingFlowConfirmComponent, ParkingFlowFormComponent, ParkingFlowSuccessComponent, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=new-parking-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewParkingFlowComponent, { className: "NewParkingFlowComponent", filePath: "apps/workplace/src/app/book/new-parking-flow.component.ts", lineNumber: 64 });
})();

// apps/workplace/src/app/book/code-flow-success.component.ts
var _c029 = () => ["/"];
var CodeFlowSuccessComponent = class _CodeFlowSuccessComponent {
  static {
    this.\u0275fac = function CodeFlowSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CodeFlowSuccessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeFlowSuccessComponent, selectors: [["code-flow-success"]], standalone: false, decls: 13, vars: 11, consts: [[1, "absolute", "inset-0", "bg-base-100", "flex", "flex-col", "z-50"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "text-2xl", "font-medium"], ["src", "assets/icons/success.svg"], [1, "text-center", "max-w-[32rem]"], [1, "p-2", "w-full", "border-t", "border-base-200", "mt-4", "flex", "items-center", "justify-center"], ["btn", "", "matRipple", "", 1, "w-full", "max-w-[32rem]", 3, "routerLink"]], template: function CodeFlowSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "img", 3);
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "footer", 5)(10, "a", 6);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "WPA.RESOURCE_CHECKED_IN"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, "WPA.CHECKED_IN"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c029));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, "WPA.BOOKING_DONE_CONTINUE"), " ");
      }
    }, dependencies: [MatRipple, RouterLink, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeFlowSuccessComponent, { className: "CodeFlowSuccessComponent", filePath: "apps/workplace/src/app/book/code-flow-success.component.ts", lineNumber: 35 });
})();

// apps/workplace/src/app/book/code-flow-error.component.ts
var _c030 = () => ["/"];
var _c118 = () => ["/book", "code"];
var _c28 = (a0) => ({ asset_id: a0 });
var _c36 = () => ["/book", "new-desk"];
function CodeFlowErrorComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " Booking has not started yet. Please try again once the booking has commenced. ");
    \u0275\u0275elementContainerEnd();
  }
}
function CodeFlowErrorComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " You have booking with a difference resource. ");
    \u0275\u0275elementContainerEnd();
  }
}
function CodeFlowErrorComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " You do not have a booking. Would you like to book the set resource? ");
    \u0275\u0275elementContainerEnd();
  }
}
function CodeFlowErrorComponent_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c118))("queryParams", \u0275\u0275pureFunction1(6, _c28, ctx_r0.asset_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "WPA.TRY_AGAIN"), " ");
  }
}
function CodeFlowErrorComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c36))("queryParams", \u0275\u0275pureFunction1(6, _c28, ctx_r0.asset_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "WPA.BOOK"), " ");
  }
}
var CodeFlowErrorComponent = class _CodeFlowErrorComponent extends AsyncHandler {
  constructor(_route, _state) {
    super();
    this._route = _route;
    this._state = _state;
    this.type = "other";
    this.asset = null;
    this.asset_id = "";
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      this.type = params.get("type");
      this.asset_id = params.get("asset_id");
    }));
  }
  static {
    this.\u0275fac = function CodeFlowErrorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CodeFlowErrorComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(BookingFormService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeFlowErrorComponent, selectors: [["code-flow-success"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 13, consts: [[1, "absolute", "inset-0", "bg-base-100", "flex", "flex-col", "z-50"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "text-2xl", "font-medium"], [1, "py-4"], ["src", "assets/icons/not-found.svg", 1, "h-64"], [1, "text-center", "max-w-[32rem]", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "p-2", "w-full", "border-t", "border-base-200", "mt-4", "flex", "items-center", "justify-center", "space-x-2"], ["btn", "", "matRipple", "", "class", "w-full max-w-[32rem]", 3, "routerLink", "queryParams", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "w-full", "max-w-[32rem]", "inverse", 3, "routerLink"], ["btn", "", "matRipple", "", 1, "w-full", "max-w-[32rem]", 3, "routerLink", "queryParams"]], template: function CodeFlowErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275element(6, "img", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275template(8, CodeFlowErrorComponent_ng_container_8_Template, 2, 0, "ng-container", 6)(9, CodeFlowErrorComponent_ng_container_9_Template, 2, 0, "ng-container", 6)(10, CodeFlowErrorComponent_ng_container_10_Template, 2, 0, "ng-container", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "footer", 8);
        \u0275\u0275template(12, CodeFlowErrorComponent_a_12_Template, 3, 8, "a", 9)(13, CodeFlowErrorComponent_a_13_Template, 3, 8, "a", 9);
        \u0275\u0275elementStart(14, "a", 10);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "WPA.RESOURCE_CHECKED_IN_FAILED"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngSwitch", ctx.type);
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "not_started");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "wrong_resource");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.type === "not_started");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.type === "no_booking");
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c030));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 10, "COMMON.CONTINUE"), " ");
      }
    }, dependencies: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, MatRipple, RouterLink, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeFlowErrorComponent, { className: "CodeFlowErrorComponent", filePath: "apps/workplace/src/app/book/code-flow-error.component.ts", lineNumber: 72 });
})();

// apps/workplace/src/app/book/locker-flow/locker-flow-confirm.component.ts
function BookLockerFlowConfirmComponent_mat_spinner_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 15);
  }
}
function BookLockerFlowConfirmComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function BookLockerFlowConfirmComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss());
    });
    \u0275\u0275elementStart(1, "app-icon", 17);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function BookLockerFlowConfirmComponent_section_28_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 20)(2, "app-icon");
    \u0275\u0275text(3, "arrow_upward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const feat_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(feat_r3);
  }
}
function BookLockerFlowConfirmComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18)(1, "app-icon", 6);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "h3", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "app-icon");
    \u0275\u0275text(8, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9)(13, "app-icon");
    \u0275\u0275text(14, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, BookLockerFlowConfirmComponent_section_28_ng_container_17_Template, 6, 1, "ng-container", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.booking_asset == null ? null : ctx_r1.booking_asset.name) || (ctx_r1.booking_asset == null ? null : ctx_r1.booking_asset.id) || "", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 4, "RESOURCE.LOCKER"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.booking_asset.features);
  }
}
function BookLockerFlowConfirmComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function BookLockerFlowConfirmComponent_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.postForm());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CONFIRM"), " ");
  }
}
var BookLockerFlowConfirmComponent = class _BookLockerFlowConfirmComponent extends AsyncHandler {
  get time_format() {
    return this._settings.time_format;
  }
  get booking() {
    return this._state.form.value;
  }
  get assets() {
    return this.booking.assets || null;
  }
  get assets_count() {
    return this.assets?.length ? this.assets.reduce((a, b) => a + b.amount, 0) : 0;
  }
  get booking_asset() {
    return this.booking.booking_asset;
  }
  get location() {
    const building = this._org.buildings.find((b) => this.booking.zones.includes(b.id));
    const level = this._org.levelWithID(this.booking_asset.zones);
    return `${level?.display_name || level?.name}${building ? "," : ""} ${building?.address || building?.display_name || building?.name || ""}`;
  }
  constructor(_state, _org, _sheet_ref, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._sheet_ref = _sheet_ref;
    this._settings = _settings;
    this.show_close = false;
    this.loading = this._state.loading;
    this.postForm = () => __async(this, null, function* () {
      try {
        if ((yield this._state.options.pipe(take(1)).toPromise())?.group) {
          yield this._state.postFormForGroup();
        } else {
          yield this._state.postForm();
        }
        this.dismiss(true);
      } catch (e2) {
        notifyError(e2);
      }
    });
    this.dismiss = (e2) => this._sheet_ref?.dismiss(e2);
    console.log("State:", this.booking);
  }
  static {
    this.\u0275fac = function BookLockerFlowConfirmComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookLockerFlowConfirmComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatBottomSheetRef, 8), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookLockerFlowConfirmComponent, selectors: [["locker-flow-confirm"]], inputs: { show_close: "show_close" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 32, vars: 25, consts: [[1, "flex", "items-center", "justify-between", "p-2", "h-12", "m-2", "rounded", "bg-base-200"], [1, "text-xl", "font-medium", "px-2"], [1, ""], ["diameter", "32", 4, "ngIf"], ["icon", "", "name", "close-locker-confirm", "matRipple", "", 3, "click", 4, "ngIf"], ["period", "", 1, "flex", "space-x-1", "py-4", "px-2"], [1, "text-success", "text-2xl"], ["details", "", 1, "text-base", "space-y-2"], [1, "text-xl"], [1, "flex", "items-center", "space-x-2"], ["date", ""], ["time", ""], ["resource", "", "class", "flex space-x-1 py-4 px-2 border-t text-base", 4, "ngIf"], [1, "p-2", "w-full", "border-t", "border-base-200", "mt-4"], ["name", "confirm-locker", "btn", "", "matRipple", "", "class", "w-full", 3, "click", 4, "ngIf"], ["diameter", "32"], ["icon", "", "name", "close-locker-confirm", "matRipple", "", 3, "click"], [1, "text-2xl"], ["resource", "", 1, "flex", "space-x-1", "py-4", "px-2", "border-t", "text-base"], [4, "ngFor", "ngForOf"], ["features", "", 1, "flex", "items-center", "space-x-2"], ["name", "confirm-locker", "btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function BookLockerFlowConfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275template(5, BookLockerFlowConfirmComponent_mat_spinner_5_Template, 1, 0, "mat-spinner", 3);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, BookLockerFlowConfirmComponent_button_7_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "section", 5)(9, "app-icon", 6);
        \u0275\u0275text(10, "done");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "h3", 8);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "app-icon", 8);
        \u0275\u0275text(16, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 9)(21, "app-icon", 8);
        \u0275\u0275text(22, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 11);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275pipe(26, "date");
        \u0275\u0275pipe(27, "date");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(28, BookLockerFlowConfirmComponent_section_28_Template, 18, 6, "section", 12);
        \u0275\u0275elementStart(29, "footer", 13);
        \u0275\u0275template(30, BookLockerFlowConfirmComponent_button_30_Template, 3, 3, "button", 14);
        \u0275\u0275pipe(31, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "APP.WORKPLACE.PARKING_CONFIRM_TITLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(6, 10, ctx.loading));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.show_close);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.booking.title || "~Untitled~");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 12, ctx.booking.date, "fullDate"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.booking.all_day ? \u0275\u0275pipeBind1(25, 15, "COMMON.ALL_DAY") : \u0275\u0275pipeBind2(26, 17, ctx.booking.date, ctx.time_format) + " - " + \u0275\u0275pipeBind2(27, 20, ctx.booking.date + ctx.booking.duration * 60 * 1e3, ctx.time_format + " (z)"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.booking_asset == null ? null : ctx.booking_asset.id);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(31, 23, ctx.loading));
      }
    }, dependencies: [NgForOf, NgIf, IconComponent, MatRipple, MatProgressSpinner, AsyncPipe, DatePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookLockerFlowConfirmComponent, { className: "BookLockerFlowConfirmComponent", filePath: "apps/workplace/src/app/book/locker-flow/locker-flow-confirm.component.ts", lineNumber: 98 });
})();

// apps/workplace/src/app/book/locker-flow/locker-form-details.component.ts
var _c031 = () => ({ standalone: true });
function LockerFormDetailsComponent_div_0_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r3 = ctx.$implicit;
    \u0275\u0275property("value", b_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r3.display_name || b_r3.name, " ");
  }
}
function LockerFormDetailsComponent_div_0_mat_checkbox_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY"), " ");
  }
}
function LockerFormDetailsComponent_div_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "label", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 22);
    \u0275\u0275listener("ngModelChange", function LockerFormDetailsComponent_div_0_div_29_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23)(9, "label", 24);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 12, "FORM.TIME_START"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(16, _c031))("use_24hr", ctx_r1.use_24hr)("disabled", ctx_r1.form.value.duration > 24 * 60 - 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "FORM.TIME_END"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("time", (tmp_8_0 = ctx_r1.form.get("date")) == null ? null : tmp_8_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr)("custom_options", ctx_r1.custom_durations);
  }
}
function LockerFormDetailsComponent_div_0_section_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "locker-list-field", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = \u0275\u0275pipeBind1(4, 2, ctx_r1.options)) == null ? null : tmp_2_0.group) ? 3 : 2, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "RESOURCE.LOCKER"), " ");
  }
}
function LockerFormDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "section", 2)(2, "h3", 3)(3, "div", 4);
    \u0275\u0275text(4, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "label", 8);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 9)(16, "mat-select", 10);
    \u0275\u0275twoWayListener("ngModelChange", function LockerFormDetailsComponent_div_0_Template_mat_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.building, $event) || (ctx_r1.building = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(17, LockerFormDetailsComponent_div_0_mat_option_17_Template, 2, 2, "mat-option", 11);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 12)(20, "label", 8);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "a-date-field", 13);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, LockerFormDetailsComponent_div_0_mat_checkbox_28_Template, 3, 3, "mat-checkbox", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, LockerFormDetailsComponent_div_0_div_29_Template, 15, 17, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, LockerFormDetailsComponent_div_0_section_30_Template, 9, 6, "section", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("!border-none", ctx_r1.allow_groups);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 13, "BOOKINGS.DETAILS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 15, "RESOURCE.BUILDING"), "");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.building);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(23, _c031));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(18, 17, ctx_r1.buildings));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 19, "FORM.DATE"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 21, "FORM.DATE_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.allow_all_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.form.value.all_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.contains("resources"));
  }
}
var LockerFormDetailsComponent = class _LockerFormDetailsComponent extends AsyncHandler {
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get allow_all_day() {
    return this._settings.get("app.lockers.allow_all_day") || this._settings.get("app.bookings.allow_all_day") || true;
  }
  constructor(_state, _org, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.find = new EventEmitter();
    this.buildings = this._org.building_list;
    this.levels = this._org.active_levels;
    this.options = this._state.options;
    this.features = this._state.features;
    this.from_id = false;
    this.custom_durations = [];
    this.recurrence_options = ["daily", "weekly", "monthly"];
    this.setOptions = (o) => this._state.setOptions(o);
    this.setFeature = (f, e2) => this._state.setFeature(f, e2);
  }
  ngOnChanges(changes) {
    if (changes.form && this.form) {
      this.subscription("change", this.form.get("resources")?.valueChanges?.subscribe((list) => list?.length ? this.setBookingAsset(list[0]) : ""));
      this.subscription("date", this.form.get("date")?.valueChanges?.subscribe(() => this._setCustomDateOptions()));
      this._setCustomDateOptions();
    }
  }
  _setCustomDateOptions() {
    for (const i of [1, 2, 3, 4, 5, 6, 7]) {
      this.custom_durations.push(i * 24 * 60);
    }
  }
  setBookingAsset(locker) {
    this._state.form.patchValue({ asset_id: void 0 });
    if (!locker)
      return;
    this.selected_locker = locker;
    this._state.form.patchValue({
      asset_id: locker?.id,
      asset_name: locker.name,
      map_id: locker.map_id || locker?.bank_id || locker?.id,
      description: locker.name,
      booking_type: "locker",
      zones: [this.building.id],
      booking_asset: locker,
      tags: locker.bank?.tags || []
    });
  }
  static {
    this.\u0275fac = function LockerFormDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerFormDetailsComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerFormDetailsComponent, selectors: [["new-locker-form-details"]], inputs: { form: "form" }, outputs: { find: "find" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "p-0 sm:py-4 sm:px-16 divide-y divide-base-200 space-y-2", 3, "formGroup", 4, "ngIf"], [1, "p-0", "sm:py-4", "sm:px-16", "divide-y", "divide-base-200", "space-y-2", 3, "formGroup"], [1, "p-2"], [1, "space-x-2", "flex", "items-center", "mb-4"], [1, "bg-base-200", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center"], [1, "text-xl"], [1, "flex", "items-center", "flex-wrap", "sm:space-x-2"], [1, "flex-1", "min-w-[256px]"], ["for", "date"], ["appearance", "outline", 1, "w-full"], ["placeholder", "Select Building", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value", 4, "ngFor", "ngForOf"], [1, "relative", "flex-1", "min-w-[256px]"], ["name", "date", "formControlName", "date"], ["formControlName", "all_day", "class", "absolute -top-2 right-0", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["class", "p-2", 4, "ngIf"], [3, "value"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "disabled"], [1, "flex-1", "w-1/3", "relative"], ["for", "end-time"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr", "custom_options"], ["formControlName", "resources"]], template: function LockerFormDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, LockerFormDetailsComponent_div_0_Template, 31, 24, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.form);
      }
    }, dependencies: [NgForOf, NgIf, MatOption, MatFormField, MatSelect, MatCheckbox, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, LockerListFieldComponent, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, AsyncPipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerFormDetailsComponent, { className: "LockerFormDetailsComponent", filePath: "apps/workplace/src/app/book/locker-flow/locker-form-details.component.ts", lineNumber: 124 });
})();

// apps/workplace/src/app/book/locker-flow/locker-flow-form.component.ts
var BookLockerFlowFormComponent = class _BookLockerFlowFormComponent {
  get form() {
    return this._state.form;
  }
  constructor(_state, _router, _org, _bottom_sheet) {
    this._state = _state;
    this._router = _router;
    this._org = _org;
    this._bottom_sheet = _bottom_sheet;
    this.level = "";
    this.levels = [];
    this.clearForm = () => {
      this.level = this._org.building.id;
      this._state.clearForm();
    };
    this.viewConfirm = () => {
      if (!this.form.valid)
        return notifyError(i18n("FORM.INVALID_FIELDS", {
          field_list: getInvalidFields(this.form).join(", ")
        }));
      this.sheet_ref = this._bottom_sheet.open(BookLockerFlowConfirmComponent);
      this.sheet_ref.instance.show_close = true;
      this.sheet_ref.afterDismissed().subscribe((value) => {
        if (value) {
          this._router.navigate(["/book", "locker", "success"]);
          this._state.setView("success");
        }
      });
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _));
      yield this._org.active_levels.pipe(first((_) => _?.length > 0));
      this._state.setOptions({ type: "locker" });
      this.level = this._org.building?.id;
      this.levels = [
        { id: this._org.building?.id, name: "Any Level" },
        ...this._org.levelsForBuilding(this._org.building)
      ];
      if (isBefore(this.form.value.date, Date.now())) {
        this.form.patchValue({ date: startOfMinute(Date.now()).valueOf() });
      }
    });
  }
  static {
    this.\u0275fac = function BookLockerFlowFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookLockerFlowFormComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatBottomSheet));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookLockerFlowFormComponent, selectors: [["locker-flow-form"]], standalone: false, decls: 11, vars: 7, consts: [[1, "h-full", "w-full", "bg-base-200", "overflow-auto"], [1, "max-w-full", "w-[48rem]", "mx-auto", "sm:my-4", "bg-base-100", "border", "border-base-200"], [1, "w-full", "p-4", "sm:py-4", "sm:px-16", "text-2xl", "font-medium", "border-b", "border-base-200"], [3, "form"], [1, "sm:mb-2", "border-b", "border-base-200", "w-full"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "sm:space-x-2", "p-2", "sm:px-16", "sm:mb-2"], ["btn", "", "name", "open-locker-confirm", "matRipple", "", "confirm", "", 1, "w-full", "sm:w-auto", 3, "click"]], template: function BookLockerFlowFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "new-locker-form-details", 3)(6, "div", 4);
        \u0275\u0275elementStart(7, "section", 5)(8, "button", 6);
        \u0275\u0275listener("click", function BookLockerFlowFormComponent_Template_button_click_8_listener() {
          return ctx.viewConfirm();
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "BOOKINGS.LOCKER_TITLE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("form", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "BOOKINGS.LOCKER_CONFIRM"), " ");
      }
    }, dependencies: [MatRipple, LockerFormDetailsComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookLockerFlowFormComponent, { className: "BookLockerFlowFormComponent", filePath: "apps/workplace/src/app/book/locker-flow/locker-flow-form.component.ts", lineNumber: 55 });
})();

// apps/workplace/src/app/book/locker-flow/locker-flow-success.component.ts
var _c032 = (a0) => ({ name: a0 });
var _c119 = (a0, a1, a2, a3) => ({ name: a0, place: a1, date: a2, time: a3 });
var _c29 = () => ["/"];
function BookLockerFlowSuccessComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "a", 9);
    \u0275\u0275pipe(2, "sanitize");
    \u0275\u0275element(3, "img", 10);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 11);
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275element(9, "img", 12);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 13);
    \u0275\u0275pipe(14, "safe");
    \u0275\u0275elementStart(15, "app-icon", 14);
    \u0275\u0275text(16, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(2, 6, ctx_r0.outlook_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "BOOKINGS.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(8, 11, ctx_r0.google_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "BOOKINGS.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(14, 16, ctx_r0.ical_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "BOOKINGS.LINK_ICAL"));
  }
}
var BookLockerFlowSuccessComponent = class _BookLockerFlowSuccessComponent {
  get location() {
    const locker = this.last_event?.extension_data?.booking_asset;
    if (!locker)
      return "";
    return locker.zone ? `, ${locker.zone.display_name || locker.zone.name || locker.zone.id}` : "";
  }
  get last_event() {
    return this._state.last_success;
  }
  get show_links() {
    return this._settings.get("app.lockers.show_calendar_links");
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.outlook_link = "";
    this.google_link = "";
    this.ical_link = "";
    this.viewCalendarLinks = () => this._state.openBookingLinkModal();
  }
  ngOnInit() {
    this.outlook_link = generateMicrosoftCalendarLink(this.last_event);
    this.google_link = generateGoogleCalendarLink(this.last_event);
    this.ical_link = generateCalendarFileLink(this.last_event);
  }
  static {
    this.\u0275fac = function BookLockerFlowSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookLockerFlowSuccessComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookLockerFlowSuccessComponent, selectors: [["locker-flow-success"]], standalone: false, decls: 17, vars: 30, consts: [[1, "absolute", "inset-0", "bg-base-100", "flex", "flex-col", "z-50", "overflow-auto"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "text-2xl", "font-medium", "text-center"], ["src", "assets/icons/locker-success.svg"], [1, "text-center"], ["class", "flex flex-col items-center space-y-4 p-4 relative", 4, "ngIf"], [1, "sticky", "bottom-0", "bg-base-100", "p-2", "w-full", "border-t", "border-base-200", "mt-4", "flex", "items-center", "justify-center"], ["btn", "", "name", "locker-confirm-continue", "matRipple", "", 1, "w-full", "max-w-[32rem]", "mx-auto", 3, "routerLink"], [1, "flex", "flex-col", "items-center", "space-y-4", "p-4", "relative"], ["btn", "", "matRipple", "", "name", "locker-outlook-link", "target", "_blank", "rel", "noopener noreferer", 1, "flex", "items-center", "p-2", "space-x-2", "pr-4", "w-64", "rounded", "inverse", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "locker-google-link", "target", "_blank", "rel", "noopener noreferer", 1, "flex", "items-center", "p-2", "space-x-2", "pr-4", "w-64", "rounded", "inverse", 3, "href"], ["src", "assets/icons/gcal.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "locker-ical-link", "target", "_blank", "rel", "noopener noreferer", 1, "flex", "items-center", "p-2", "space-x-2", "pr-4", "w-64", "rounded", "inverse", 3, "href"], [1, "text-xl"]], template: function BookLockerFlowSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "img", 3);
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "date");
        \u0275\u0275pipe(9, "date");
        \u0275\u0275pipe(10, "date");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, BookLockerFlowSuccessComponent_div_12_Template, 20, 21, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "footer", 6)(14, "a", 7);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, "BOOKINGS.ITEM_BOOKED", \u0275\u0275pureFunction1(22, _c032, (ctx.last_event.asset_name || ctx.last_event.asset_id) + ctx.location)), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 17, "APP.WORKPLACE.LOCKER_SUCCESS_MSG", \u0275\u0275pureFunction4(24, _c119, ctx.last_event.asset_name, ctx.location, \u0275\u0275pipeBind2(8, 8, ctx.last_event.date, "mediumDate"), \u0275\u0275pipeBind2(10, 14, \u0275\u0275pipeBind2(9, 11, ctx.last_event.date, ctx.time_format + " - " + ctx.last_event.date + ctx.last_event.duration * 60 * 1e3), ctx.time_format))), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.show_links);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(29, _c29));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 20, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
      }
    }, dependencies: [NgIf, IconComponent, MatRipple, RouterLink, DatePipe, SafePipe, SanitizePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookLockerFlowSuccessComponent, { className: "BookLockerFlowSuccessComponent", filePath: "apps/workplace/src/app/book/locker-flow/locker-flow-success.component.ts", lineNumber: 113 });
})();

// apps/workplace/src/app/book/locker-flow.component.ts
var _c033 = (a0) => ({ name: a0 });
var _c120 = () => ["/your-bookings"];
function BookLockerFlowComponent_ng_container_0_locker_flow_success_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "locker-flow-success");
  }
}
function BookLockerFlowComponent_ng_container_0_locker_flow_confirm_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "locker-flow-confirm");
  }
}
function BookLockerFlowComponent_ng_container_0_locker_flow_form_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "locker-flow-form");
  }
}
function BookLockerFlowComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275template(2, BookLockerFlowComponent_ng_container_0_locker_flow_success_2_Template, 1, 0, "locker-flow-success", 3)(3, BookLockerFlowComponent_ng_container_0_locker_flow_confirm_3_Template, 1, 0, "locker-flow-confirm", 3)(4, BookLockerFlowComponent_ng_container_0_locker_flow_form_4_Template, 1, 0, "locker-flow-form", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", ctx_r0.view);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "confirm");
  }
}
function BookLockerFlowComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 7);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 5, "APP.WORKPLACE.LOCKER_ASSIGNED", \u0275\u0275pureFunction1(10, _c033, (tmp_2_0 = \u0275\u0275pipeBind1(4, 3, ctx_r0.assigned_space)) == null ? null : tmp_2_0.name)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c120));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "APP.WORKPLACE.VIEW_SCHEDULE"), " ");
  }
}
var BookLockerFlowComponent = class _BookLockerFlowComponent extends AsyncHandler {
  get view() {
    return this._state.view;
  }
  get last_success() {
    return this._state.last_success;
  }
  constructor(_state, _route, _org, _settings) {
    super();
    this._state = _state;
    this._route = _route;
    this._org = _org;
    this._settings = _settings;
    this._lockers_banks = loadLockerBanks(this._org, combineLatest([this._org.active_building, this._org.active_region]), () => this._settings.get("app.use_region"));
    this._lockers = loadLockers(this._org, combineLatest([this._org.active_building, this._org.active_region]), this._lockers_banks, () => this._settings.get("app.use_region"));
    this.assigned_space = this._lockers.pipe(map((list) => list.find((_) => _.assigned_to?.toLowerCase() === currentUser().email?.toLowerCase())));
    this.has_booking = queryBookings({
      period_start: getUnixTime(addHours(startOfDay(Date.now()), 1)),
      period_end: getUnixTime(addHours(endOfDay(Date.now()), -1)),
      type: "locker"
    }).pipe(map((_) => _.length > 0), shareReplay(1));
  }
  ngOnInit() {
    this._state.loadForm();
    this.subscription("route.params", this._route.paramMap.subscribe((param) => {
      if (param.has("step"))
        this._state.setView(param.get("step"));
    }));
    this.subscription("route.query", this._route.queryParamMap.subscribe((param) => {
      if (param.has("success"))
        this._state.setView("success");
    }));
  }
  static {
    this.\u0275fac = function BookLockerFlowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookLockerFlowComponent)(\u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookLockerFlowComponent, selectors: [["placeos-book-locker-flow"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 6, consts: [["assigned_state", ""], [4, "ngIf", "ngIfElse"], [1, "bg-base-100", "h-full", "w-full", "z-50", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "bg-base-100", "flex", "flex-col", "items-center", "justify-center", "h-full", "w-full", "z-50", "space-y-4"], ["src", "assets/icons/parking-success.svg", 1, "w-64", "h-64"], ["btn", "", "matRipple", "", 1, "w-48", 3, "routerLink"]], template: function BookLockerFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BookLockerFlowComponent_ng_container_0_Template, 5, 3, "ng-container", 1);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275pipe(2, "async");
        \u0275\u0275template(3, BookLockerFlowComponent_ng_template_3_Template, 9, 13, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const assigned_state_r2 = \u0275\u0275reference(4);
        \u0275\u0275property("ngIf", !(\u0275\u0275pipeBind1(1, 2, ctx.assigned_space) && \u0275\u0275pipeBind1(2, 4, ctx.has_booking)))("ngIfElse", assigned_state_r2);
      }
    }, dependencies: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, MatRipple, RouterLink, BookLockerFlowFormComponent, BookLockerFlowConfirmComponent, BookLockerFlowSuccessComponent, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=locker-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookLockerFlowComponent, { className: "BookLockerFlowComponent", filePath: "apps/workplace/src/app/book/locker-flow.component.ts", lineNumber: 61 });
})();

// apps/workplace/src/app/book/book.module.ts
var ROUTES = [
  {
    path: "",
    component: BookComponent,
    children: [
      { path: "code", component: BookCodeFlowComponent },
      { path: "code/success", component: CodeFlowSuccessComponent },
      { path: "code/error", component: CodeFlowErrorComponent },
      { path: "new-desk", redirectTo: "new-desks/form" },
      { path: "new-desks", redirectTo: "new-desks/form" },
      { path: "new-desks/:step", component: NewDeskFlowComponent },
      { path: "new-desk", redirectTo: "new-desks/form" },
      { path: "desks", redirectTo: "desks/form" },
      { path: "desks/:step", component: BookDeskFlowComponent },
      { path: "spaces", redirectTo: "spaces/form" },
      { path: "spaces/:step", component: BookSpaceFlowComponent },
      { path: "meeting", redirectTo: "meeting/form" },
      { path: "meeting/:step", component: BookMeetingFlowComponent },
      { path: "parking", redirectTo: "parking/form" },
      { path: "parking/:step", component: BookParkingFlowComponent },
      { path: "new-parking", redirectTo: "new-parking/form" },
      { path: "new-parking/:step", component: NewParkingFlowComponent },
      { path: "visitor", redirectTo: "visitor/form" },
      { path: "visitor/:step", component: VisitorFlowComponent },
      { path: "locker", redirectTo: "locker/form" },
      { path: "locker/:step", component: BookLockerFlowComponent },
      { path: "*", redirectTo: "spaces/form" }
    ]
  },
  { path: "*", redirectTo: "spaces/form" }
];
var BookModule = class _BookModule {
  static {
    this.\u0275fac = function BookModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BookModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      SharedComponentModule,
      FormsModule,
      SharedCateringModule,
      SharedExploreModule,
      ReactiveFormsModule,
      MatButtonToggleModule,
      MatBottomSheetModule,
      SharedBookingsModule,
      RouterModule.forChild(ROUTES)
    ] });
  }
};
export {
  BookModule
};
//# sourceMappingURL=book.module-7DW5U7R5.js.map
