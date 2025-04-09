import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-37QHIL66.js";
import {
  AsyncHandler,
  AsyncPipe,
  AttachedResourceConfigModalComponent,
  BehaviorSubject,
  COMMA,
  CalendarEvent,
  CateringItem,
  CateringOrder,
  CommonModule,
  ComponentsModule,
  CounterComponent,
  CurrencyPipe,
  CustomTooltipComponent,
  DatePipe,
  DefaultValueAccessor,
  ENTER,
  EventEmitter,
  FormControl,
  FormControlName,
  FormFieldsModule,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  ImageListFieldComponent,
  MAT_DIALOG_DATA,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatCheckbox,
  MatCheckboxModule,
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
  MatProgressBar,
  MatProgressBarModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatRipple,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NumberValueAccessor,
  OrganisationService,
  ReactiveFormsModule,
  SPACE,
  SettingsService,
  SettingsToggleComponent,
  SimpleTableComponent,
  SpacePipe,
  TranslatePipe,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  catchError,
  cateringItemAvailable,
  combineLatest,
  csvToJson,
  currentUser,
  debounceTime,
  downloadFile,
  du,
  endOfDay,
  filter,
  first,
  flatten,
  format,
  getUnixTime,
  hu,
  i18n,
  map,
  newCalendarEventFromBooking,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  queryBookings,
  queryEvents,
  randomInt,
  shareReplay,
  showEventMetadata,
  startOfDay,
  switchMap,
  tap,
  unique,
  updateBooking,
  updateEventMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
  ɵɵpureFunctionV,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KYLZVJNU.js";

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
    fileReader.addEventListener("loadend", (e) => {
      const contents = e.target.result;
      const data = csvToJson(contents);
      const new_items = this._processData(data);
      this.loading = "";
      this.event.emit({
        reason: "done",
        metadata: new_items
      });
    });
    fileReader.readAsText(file);
  }
  _processData(list) {
    const items = [];
    const isType = (i, t) => i.type.toLowerCase() === t;
    for (const item of list) {
      if (!isType(item, "item"))
        continue;
      const opt_list = list.filter((o) => isType(o, "option") && (o.tags === item.id || o.description === item.id));
      items.push(new CateringItem(__spreadProps(__spreadValues({}, item), {
        options: opt_list.map((o) => ({
          id: o.id,
          name: o.name,
          group: o.category,
          multiple: o.multiple,
          unit_price: o.unit_price
        }))
      })));
    }
    return items;
  }
  downloadTemplate() {
    const template = `ID,Type,Name,Unit Price,Category,Caterer,Description,Tags,Multiple
item-1,item,Coffee,200,Drink,Wake Up Cafe,Wake Up,,
option-1,option,1 Sugar,20,Sugars,,,item-1,false`;
    downloadFile("import-menu-template.csv", template);
  }
  static {
    this.\u0275fac = function CateringImportMenuModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringImportMenuModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringImportMenuModalComponent, selectors: [["catering-import-menu-modal"]], outputs: { event: "event" }, standalone: false, decls: 8, vars: 6, consts: [["load_state", ""], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "mx-2", "flex", "h-[24rem]", "w-[24rem]", "cursor-pointer", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "border-4", "border-dashed", "border-base-300", "p-4", "hover:bg-base-200"], [1, "text-8xl", "opacity-30"], [1, "px-4", "text-center", "opacity-30"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "flex", "h-[24rem]", "w-[24rem]", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["diameter", "32"]], template: function CateringImportMenuModalComponent_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringImportMenuModalComponent, { className: "CateringImportMenuModalComponent", filePath: "libs/catering/src/lib/catering-import-menu-modal.component.ts", lineNumber: 67 });
})();

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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const caterer_auto_r4 = \u0275\u0275reference(13);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "CATERING.CATERER"), "");
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 5, "CATERING.CATERER"))("matAutocomplete", caterer_auto_r4);
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
    \u0275\u0275template(4, CateringItemModalComponent_form_5_div_4_Template, 13, 12, "div", 13)(5, CateringItemModalComponent_form_5_div_5_Template, 10, 7, "div", 13);
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
function CateringItemModalComponent_mat_option_14_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "CATERING.CATERER_EMPTY"));
  }
}
function CateringItemModalComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 49);
    \u0275\u0275text(1);
    \u0275\u0275template(2, CateringItemModalComponent_mat_option_14_i_2_Template, 3, 3, "i", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    \u0275\u0275property("value", option_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r11, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !option_r11);
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
      caterer: new FormControl(this.item.caterer || ""),
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemModalComponent, selectors: [["catering-item-modal"]], outputs: { event: "event" }, standalone: false, decls: 15, vars: 9, consts: [["load_state", ""], ["auto", "matAutocomplete"], ["caterer_auto", "matAutocomplete"], ["chipList", ""], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "max-h-[65vh] max-w-xl overflow-auto px-4", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex items-center justify-end border-t border-solid border-base-200 px-4 py-2", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "max-w-xl", "overflow-auto", "px-4", 3, "formGroup"], [1, "flex", "w-full", "items-center", "space-x-2"], ["class", "flex flex-1 flex-col", 4, "ngIf"], [1, "flex", "space-x-4"], [1, "flex", "flex-1", "items-center", "py-4"], ["formControlName", "accept_points", 1, "w-full", 3, "name"], [1, "mb-4", "space-y-2"], [1, "w-24", "min-w-0", "flex-1"], [1, "max-w-[calc(50%-0.5rem)]"], ["formControlName", "discount_cap", 3, "min", "max", "step", "render_fn"], ["class", "flex flex-col", 4, "ngIf"], ["list", "", 1, "-mx-2", "flex", "flex-wrap", "items-center", "pb-2"], [1, "min-w-[40%]", "flex-1", "p-2", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "w-1/2", "min-w-[40%]", "p-2", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "flex", "flex-1", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "category"], ["matInput", "", "name", "category", "formControlName", "category", 3, "placeholder", "matAutocomplete"], ["for", "caterer"], ["matInput", "", "name", "caterer", "formControlName", "caterer", 3, "placeholder", "matAutocomplete"], ["formControlName", "unit_price", 3, "min", "max", "step", "render_fn"], [1, "flex", "flex-col"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], ["for", "tags"], ["aria-label", "Item Tags"], [3, "removed", 4, "ngFor", "ngForOf"], ["name", "tags", "placeholder", "Item tags e.g. Gluten Free, Vegan etc.", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], ["matChipRemove", ""], ["for", "images"], ["name", "images", "formControlName", "images"], [1, "flex", "items-center", "justify-end", "border-t", "border-solid", "border-base-200", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], [1, "flex", "w-64", "flex-col", "items-center", "space-y-2", "p-8"], ["diameter", "32"], [3, "value"], [4, "ngIf"]], template: function CateringItemModalComponent_Template(rf, ctx) {
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
        \u0275\u0275template(14, CateringItemModalComponent_mat_option_14_Template, 3, 3, "mat-option", 9);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemModalComponent, { className: "CateringItemModalComponent", filePath: "libs/catering/src/lib/catering-item-modal.component.ts", lineNumber: 313 });
})();

// libs/catering/src/lib/catering-orders.service.ts
function checkOrder(order, filters) {
  const s = (filters.search || "").toLowerCase();
  return !!order.items.find((item) => (!filters?.caterer || filters.caterer === "<empty>" && !item.caterer || item.caterer === filters.caterer) && (item.name.toLowerCase().includes(s) || !!item.options.find((option) => option.name.toLowerCase().includes(s))));
}
var BOOKINGS = {};
var CateringOrdersService = class _CateringOrdersService extends AsyncHandler {
  /** Order filters */
  get filters() {
    return this._filters.getValue();
  }
  /** Order filters */
  set filters(filters) {
    this._filters.next(filters);
  }
  get using_bookings() {
    return this._settings.get("app.catering.use_bookings") == true;
  }
  constructor(_settings, _org) {
    super();
    this._settings = _settings;
    this._org = _org;
    this._poll = new BehaviorSubject(0);
    this._loading = new BehaviorSubject(false);
    this._space_pipe = new SpacePipe(this._org);
    this._filters = new BehaviorSubject({
      caterer: ""
    });
    this._embedded_orders = combineLatest([this._filters, this._poll]).pipe(debounceTime(300), switchMap(([{ date, zones }]) => {
      const start = getUnixTime(startOfDay(date || Date.now()));
      const end = getUnixTime(endOfDay(date || Date.now()));
      if (!zones?.length) {
        zones = this._settings.get("app.use_region") ? [this._org.region.id] : [this._org.building.id];
      }
      return queryEvents({
        zone_ids: (zones || []).join(","),
        period_start: start,
        period_end: end
      }).pipe(catchError(() => of([])), map((events) => flatten(events.map((event) => event.valid_catering.map((o) => new CateringOrder(__spreadProps(__spreadValues({}, o), { event })))))));
    }), shareReplay(1));
    this._booking_orders = combineLatest([this._filters, this._poll]).pipe(debounceTime(300), switchMap(([{ date, zones }]) => {
      const start = getUnixTime(startOfDay(date || Date.now()));
      const end = getUnixTime(endOfDay(date || Date.now()));
      if (!zones?.length) {
        zones = this._settings.get("app.use_region") ? [this._org.region.id] : [this._org.building.id];
      }
      return queryBookings({
        type: "catering-order",
        zones: (zones || []).join(","),
        period_start: start,
        period_end: end
      }).pipe(catchError(() => of([])), map((bookings) => flatten(bookings.map((bkn) => {
        BOOKINGS[bkn.asset_id] = bkn;
        const order = new CateringOrder(__spreadProps(__spreadValues({}, bkn.extension_data.details), {
          event: bkn.linked_event ? new CalendarEvent(__spreadValues({}, bkn.linked_event)) : newCalendarEventFromBooking(bkn.linked_bookings[0] || bkn)
        }));
        if (bkn.linked_event) {
          this._space_pipe.transform(bkn.linked_event.system_id).then((space) => {
            order.space = space;
            order.event.system = space;
          });
        }
        return order;
      }))));
    }), shareReplay(1));
    this.orders = combineLatest([
      this._org.active_building
    ]).pipe(filter((_) => !!_), switchMap(() => {
      this._loading.next(true);
      return this.using_bookings ? this._booking_orders : this._embedded_orders;
    }), map((orders) => {
      const start = startOfDay(this._filters.getValue().date || Date.now());
      return unique(orders.filter((o) => format(o.deliver_at, "yyyy-MM-dd") === format(start, "yyyy-MM-dd")), "id");
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
    this.filtered = combineLatest([this.orders, this._filters]).pipe(tap(([l]) => console.log("Orders:", l)), map(([list, filters]) => list.filter((order) => checkOrder(order, filters)).sort((a, b) => a.deliver_at - b.deliver_at)));
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
      updated_order._status = status;
      const catering = [
        ...(order.event.extension_data.catering || []).filter((o) => o.id !== order.id),
        updated_order
      ].map((i) => new CateringOrder(__spreadValues({}, i)).toJSON());
      const system_id = order.event?.resources[0]?.id || order.event?.system?.id;
      const extension_data = yield showEventMetadata(order.event.id, system_id).toPromise();
      const event = new CalendarEvent(__spreadProps(__spreadValues({}, __spreadProps(__spreadValues({}, order.event), { extension_data })), {
        catering
      }));
      const booking = yield updateEventMetadata(event.id, system_id, event.extension_data).toPromise();
      if (this.using_bookings) {
        const booking2 = BOOKINGS[order.id];
        yield updateBooking(booking2.id, __spreadProps(__spreadValues({}, booking2.toJSON()), {
          extension_data: __spreadProps(__spreadValues({}, booking2.extension_data), {
            details: updated_order.toJSON()
          })
        })).toPromise();
      }
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemOptionModalComponent, selectors: [["catering-option-modal"]], outputs: { event: "event" }, standalone: false, decls: 12, vars: 8, consts: [["load_state", ""], ["auto", "matAutocomplete"], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "max-h-[65vh] w-[28rem] overflow-auto px-4", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex items-center justify-end border-t border-solid border-base-200 px-4 py-2", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "w-[28rem]", "overflow-auto", "px-4", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], ["class", "mb-4 flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "group"], ["matInput", "", "name", "group", "formControlName", "group", 3, "placeholder", "matAutocomplete"], [1, "mb-4", "flex", "flex-col"], ["formControlName", "multiple", 3, "name"], ["matInput", "", "name", "unit-price", "type", "number", "formControlName", "unit_price", 3, "placeholder"], [1, "flex", "items-center", "justify-end", "border-t", "border-solid", "border-base-200", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], ["loading", "", 1, "flex", "w-64", "flex-col", "items-center", "space-y-2", "p-8"], ["diameter", "32"], [3, "value"]], template: function CateringItemOptionModalComponent_Template(rf, ctx) {
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
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, ctx.option.id ? "CATERING.ITEM_OPTION_EDIT" : "CATERING.ITEM_OPTION_NEW"), " ");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemOptionModalComponent, { className: "CateringItemOptionModalComponent", filePath: "libs/catering/src/lib/catering-option-modal.component.ts", lineNumber: 137 });
})();

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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderModalComponent, selectors: [["app-catering-order-modal"]], outputs: { event: "event" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 3, consts: [["load_state", ""], ["order_details", ""], ["order_actions", ""], ["class", "main min-w-[20rem]", 4, "ngIf", "ngIfElse"], ["class", "flex items-center justify-center space-x-2 border-t border-base-200 p-2", 4, "ngIf"], [1, "main", "min-w-[20rem]"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [3, "label", 4, "ngIf"], [3, "label"], [1, "list"], ["item", "", "class", "flex items-center border-b border-base-200 p-2", 4, "ngFor", "ngForOf"], ["item", "", 1, "flex", "items-center", "border-b", "border-base-200", "p-2"], [1, "w-1/2", "flex-1"], ["class", "text-xs no-underline", 4, "ngIf"], [1, "mx-2", "rounded", "bg-primary", "px-4", "py-2", "text-xs", "font-medium", "text-white"], ["ngDefaultControl", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "flex items-center", 4, "ngIf"], [1, "text-xs", "no-underline"], ["ngDefaultControl", "", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center"], [3, "matTooltip"], ["icon", "", "matRipple", "", 3, "disabled"], [1, "count", "flex", "h-12", "w-12", "items-center", "justify-center"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2", "border-t", "border-base-200", "p-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse"], ["confirm", "", "btn", "", "matRipple", "", "matBadgeColor", "warn", 3, "click", "disabled", "matBadge", "matBadgeHidden"], ["matRipple", "", 1, "inverse", 3, "click"], ["save", "", "btn", "", "matRipple", "", 3, "click"], [1, "flex", "w-64", "flex-col", "items-center", "space-y-2", "p-8"], ["diameter", "32"], [1, "h-[3.25rem]"], ["class", "text-xs underline", 3, "matTooltip", 4, "ngIf"], [3, "ngModelChange", "ngModel"], [1, "text-xs", "underline", 3, "matTooltip"]], template: function CateringOrderModalComponent_Template(rf, ctx) {
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderOptionsModalComponent, selectors: [["app-catering-options-modal"]], outputs: { event: "event" }, standalone: false, decls: 11, vars: 1, consts: [["multi_options", ""], ["icon", "", "mat-dialog-close", ""], [1, "overflow-auto"], ["class", "border-b border-base-200 pb-2 pt-1", 4, "ngFor", "ngForOf"], [1, "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "border-b", "border-base-200", "pb-2", "pt-1"], [1, "p-2", "font-medium", "capitalize"], [1, "flex", "flex-col", "pl-6"], [4, "ngIf", "ngIfElse"], ["aria-label", "Select an option", "ngModel", "", 1, "flex", "flex-col", 3, "ngModelChange"], ["value", "", 1, "mx-0", "my-1"], [1, "p-2", "font-medium"], ["class", "mx-0 my-1", 3, "value", 4, "ngFor", "ngForOf"], [1, "mx-0", "my-1", 3, "value"], [1, "flex", "items-center", "justify-center"], [1, "w-1/2", "flex-1", "p-2", "font-medium"], ["class", "text-xs opacity-60", 4, "ngIf"], [1, "text-xs", "opacity-60"], [3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel"]], template: function CateringOrderOptionsModalComponent_Template(rf, ctx) {
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
    ]).pipe(filter(([_]) => !!_), switchMap(([_]) => hu(_.id, "catering-settings").pipe(catchError((_2) => of({})))), map((_) => _.details || {}), tap((_) => this._settings.post("require_catering_notes", !!_?.require_notes)), shareReplay(1));
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
      }, (e) => {
        notifyError(i18n("CATERING.ITEM_REMOVE_ERROR", { error: e }));
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
      const { require_notes } = yield nextValueFrom(this.settings);
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
    return du(zone_id, {
      id: zone_id,
      name: "catering",
      details: menu,
      description: `Catering menu for ${zone_id}`
    }).toPromise();
  }
  saveSettings(settings) {
    return __async(this, null, function* () {
      const old_settings = yield nextValueFrom(this.settings);
      const result = yield du(this._org.building.id, {
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
      const menu = (yield hu(zone_id, "catering").toPromise()).details;
      return menu instanceof Array ? menu : [];
    });
  }
  getCateringConfig() {
    return __async(this, arguments, function* (zone_id = this._org.building.id) {
      const rules = (yield hu(zone_id, "catering_config").toPromise()).details;
      return rules instanceof Array ? rules : [];
    });
  }
  updateConfig(zone_id, config) {
    return du(zone_id, {
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringMenuComponent, selectors: [["catering-menu"]], standalone: false, decls: 14, vars: 38, consts: [["active_template", ""], ["price_template", ""], ["actions_template", ""], ["child_template", ""], ["menu", "matMenu"], [1, "block", "w-full", "min-w-[32rem]", "text-sm", 3, "data", "columns", "filter", "show_children", "child_template", "sortable", "empty_message"], ["matTooltipPosition", "right", 1, "mx-auto", 3, "ngModelChange", "matTooltip", "ngModel"], [1, "mx-auto", "flex", "items-center", "rounded", "bg-secondary", "px-2", "py-1", "font-mono", "text-xs", "text-secondary-content"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2", "pr-2"], [1, "text-error"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], ["class", "relative flex items-center space-x-2 border-b border-solid border-base-200 p-2", 4, "ngFor", "ngForOf"], [1, "relative", "flex", "items-center", "space-x-2", "border-b", "border-solid", "border-base-200", "p-2"], [1, "absolute", "inset-y-0", "left-0", "w-2", "bg-black", "opacity-10"], [1, "flex-1", "pl-4", "pr-2"], [1, "text"], [1, "text-xs", "opacity-60"], ["icon", "", "matRipple", "", 3, "matTooltip", "click", 4, "ngIf"], ["icon", "", "matRipple", "", "class", "!mr-1", 3, "matTooltip", "click", 4, "ngIf"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "!mr-1", 3, "click", "matTooltip"]], template: function CateringMenuComponent_Template(rf, ctx) {
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderItemComponent, selectors: [["", "catering-order-item", ""]], inputs: { order_id: "order_id", item: "item" }, standalone: false, attrs: _c04, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "relative", "h-14", "w-16", "text-right"], ["arm", "", 1, "absolute", "left-1/2", "top-1/2", "h-16", "w-4", "-translate-x-px", "-translate-y-full", "border-b-2", "border-l-2", "border-base-200"], [1, "mr-4", "w-12"], ["action", "", "icon", "", "matRipple", "", 1, "text-dark-fade", "border-2", "border-dashed", "border-base-200", "p-2", "text-xl", 3, "click"], [1, "flex", "flex-1", "items-center", "space-x-4", "border-b", "border-solid", "border-base-200", "py-4"], [1, ""], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "bg-base-300", "p-1", "font-mono", "text-sm"], [1, "flex-1"], [1, "mr-2", "flex", "space-x-2", "px-4"], [4, "ngFor", "ngForOf"], ["class", "rounded-2xl bg-warning px-2 py-1 text-xs text-warning-content shadow", 4, "ngIf"], [1, "rounded-2xl", "bg-warning", "px-2", "py-1", "text-xs", "text-warning-content", "shadow"]], template: function CateringOrderItemComponent_Template(rf, ctx) {
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
function CateringOrderListComponent_ng_template_17_span_3_Template(rf, ctx) {
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
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275template(3, CateringOrderListComponent_ng_template_17_span_3_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    const space_r5 = data_r4 == null ? null : data_r4.system;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (space_r5 == null ? null : space_r5.display_name) || (space_r5 == null ? null : space_r5.name) || "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((space_r5 == null ? null : space_r5.display_name) || (space_r5 == null ? null : space_r5.name)));
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
    const data_r6 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (data_r6 == null ? null : data_r6.organiser == null ? null : data_r6.organiser.name) || (data_r6 == null ? null : data_r6.host) || "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((data_r6 == null ? null : data_r6.organiser == null ? null : data_r6.organiser.name) || (data_r6 == null ? null : data_r6.host)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (data_r6 == null ? null : data_r6.organiser == null ? null : data_r6.organiser.email) || (data_r6 == null ? null : data_r6.host), " ");
  }
}
function CateringOrderListComponent_ng_template_21_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_21_button_8_Template_button_click_0_listener() {
      const status_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const row_r9 = \u0275\u0275nextContext().row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateStatus(row_r9, status_r8.id));
    });
    \u0275\u0275elementStart(1, "div", 24);
    \u0275\u0275element(2, "div", 25);
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const status_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", status_r8.colour);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(status_r8.name);
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
    const data_r10 = ctx.data;
    const menu_r11 = \u0275\u0275reference(7);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", (tmp_11_0 = ctx_r2.status(data_r10)) == null ? null : tmp_11_0.colour);
    \u0275\u0275property("matMenuTriggerFor", menu_r11);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_13_0 = ctx_r2.status(data_r10)) == null ? null : tmp_13_0.name, " ");
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
    const row_r13 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.NOTES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r13.notes, " ");
  }
}
function CateringOrderListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 28)(2, "app-icon");
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CateringOrderListComponent_ng_template_23_ng_template_4_Template, 6, 4, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275listener("click", function CateringOrderListComponent_ng_template_23_Template_button_click_6_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_children[row_r13.id] = !ctx_r2.show_children[row_r13.id]);
    });
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r13 = ctx.row;
    const notes_template_r14 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("hover", true)("content", notes_template_r14)("disabled", !row_r13.notes);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.show_children[row_r13.id] ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function CateringOrderListComponent_ng_template_25_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 36);
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const row_r16 = \u0275\u0275nextContext(2).row;
    \u0275\u0275property("order_id", row_r16 == null ? null : row_r16.id)("item", item_r15);
  }
}
function CateringOrderListComponent_ng_template_25_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 34);
    \u0275\u0275template(1, CateringOrderListComponent_ng_template_25_ul_0_li_1_Template, 1, 2, "li", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r16 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", row_r16.items);
  }
}
function CateringOrderListComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CateringOrderListComponent_ng_template_25_ul_0_Template, 2, 1, "ul", 33);
  }
  if (rf & 2) {
    const row_r16 = ctx.row;
    \u0275\u0275property("ngIf", row_r16 == null ? null : row_r16.items.length);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringOrderListComponent, selectors: [["catering-order-list"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 27, vars: 61, consts: [["state_template", ""], ["time_template", ""], ["location_template", ""], ["host_template", ""], ["status_template", ""], ["actions_template", ""], ["child_template", ""], ["menu", "matMenu"], ["notes_template", ""], [1, "flex", "h-full", "w-full", "flex-col", "overflow-auto"], ["mode", "indeterminate", 1, "sticky", "left-0", "top-0", "w-full"], [1, "block", "w-full", "min-w-[72rem]", "text-sm", 3, "data", "columns", "sortable", "show_children", "child_template", "empty_message"], [1, "p-2"], [1, "flex", "items-center", "justify-center", "rounded-full", "bg-base-200", "p-2", "text-2xl"], [1, "p-4"], [1, "text-xs", "opacity-30"], [1, "px-4", "py-2"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], ["status", "", "matRipple", "", 1, "flex", "h-10", "w-36", "items-center", "rounded-3xl", "border-none", "px-4", "text-base", "text-white", 3, "matMenuTriggerFor"], [1, "mx-2", "flex", "text-center", "capitalize"], [1, "pl-2"], ["mat-menu-item", "", "class", "flex items-center", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "mr-2", "h-4", "w-4", "rounded-full"], [1, "mr-2", "w-20"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", "customTooltip", "", "xPosition", "end", "yPosition", "top", 3, "hover", "content", "disabled"], ["icon", "", "matRipple", "", 3, "click"], [1, "min-w-[8rem]", "max-w-[32rem]", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2", "text-base-content", "shadow"], [1, "mb-2"], [1, "rounded", "bg-base-200", "px-4", "py-2", "text-sm"], ["class", "relative z-0 m-0 w-full list-none p-0", 4, "ngIf"], [1, "relative", "z-0", "m-0", "w-full", "list-none", "p-0"], ["catering-order-item", "", "class", "flex items-center", 3, "order_id", "item", 4, "ngFor", "ngForOf"], ["catering-order-item", "", 1, "flex", "items-center", 3, "order_id", "item"]], template: function CateringOrderListComponent_Template(rf, ctx) {
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
        \u0275\u0275template(13, CateringOrderListComponent_ng_template_13_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, CateringOrderListComponent_ng_template_15_Template, 11, 25, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(17, CateringOrderListComponent_ng_template_17_Template, 4, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(19, CateringOrderListComponent_ng_template_19_Template, 6, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(21, CateringOrderListComponent_ng_template_21_Template, 9, 5, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(23, CateringOrderListComponent_ng_template_23_Template, 9, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(25, CateringOrderListComponent_ng_template_25_Template, 1, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_9_0;
        const state_template_r17 = \u0275\u0275reference(14);
        const time_template_r18 = \u0275\u0275reference(16);
        const location_template_r19 = \u0275\u0275reference(18);
        const host_template_r20 = \u0275\u0275reference(20);
        const status_template_r21 = \u0275\u0275reference(22);
        const actions_template_r22 = \u0275\u0275reference(24);
        const child_template_r23 = \u0275\u0275reference(26);
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(2, 8, ctx.loading));
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.order_list)("columns", \u0275\u0275pureFunctionV(51, _c8, [\u0275\u0275pureFunction1(28, _c05, state_template_r17), \u0275\u0275pureFunction2(30, _c14, \u0275\u0275pipeBind1(4, 10, "CATERING.CATERER"), !(ctx.filters == null ? null : ctx.filters.caterer) && ((tmp_9_0 = \u0275\u0275pipeBind1(5, 12, ctx.caterers)) == null ? null : tmp_9_0.length) > 1), \u0275\u0275pureFunction2(33, _c22, \u0275\u0275pipeBind1(6, 14, "COMMON.TIME"), time_template_r18), \u0275\u0275pureFunction2(36, _c32, \u0275\u0275pipeBind1(7, 16, "COMMON.LOCATION"), location_template_r19), \u0275\u0275pureFunction2(39, _c32, \u0275\u0275pipeBind1(8, 18, "FORM.HOST"), host_template_r20), \u0275\u0275pureFunction1(42, _c42, \u0275\u0275pipeBind1(9, 20, "CATERING.CHARGE_CODE")), \u0275\u0275pureFunction1(44, _c52, \u0275\u0275pipeBind1(10, 22, "CATERING.INVOICE_NUMBER")), \u0275\u0275pureFunction2(46, _c62, \u0275\u0275pipeBind1(11, 24, "COMMON.STATUS"), status_template_r21), \u0275\u0275pureFunction1(49, _c7, actions_template_r22)]))("sortable", true)("show_children", ctx.show_children)("child_template", child_template_r23)("empty_message", \u0275\u0275pipeBind1(12, 26, "CATERING.ORDERS_EMPTY"));
      }
    }, dependencies: [NgForOf, NgIf, MatMenu, MatMenuItem, MatMenuTrigger, IconComponent, CustomTooltipComponent, SimpleTableComponent, MatRipple, MatProgressBar, CateringOrderItemComponent, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=catering-order-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringOrderListComponent, { className: "CateringOrderListComponent", filePath: "libs/catering/src/lib/catering-order-list.component.ts", lineNumber: 234 });
})();

// libs/catering/src/lib/charge-code-list-modal.component.ts
function ChargeCodeListModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ChargeCodeListModalComponent_main_5_ng_container_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-form-field", 11)(2, "input", 12);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ChargeCodeListModalComponent_main_5_ng_container_1_For_2_Template_input_ngModelChange_2_listener($event) {
      const \u0275$index_22_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.charge_codes[\u0275$index_22_r2], $event) || (ctx_r2.charge_codes[\u0275$index_22_r2] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_main_5_ng_container_1_For_2_Template_button_click_4_listener() {
      const \u0275$index_22_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeCode(\u0275$index_22_r2));
    });
    \u0275\u0275elementStart(6, "app-icon", 14);
    \u0275\u0275text(7, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const \u0275$index_22_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.charge_codes[\u0275$index_22_r2]);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 3, "CATERING.CHARGE_CODES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 5, "CATERING.CHARGE_CODES_REMOVE"));
  }
}
function ChargeCodeListModalComponent_main_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275repeaterCreate(1, ChargeCodeListModalComponent_main_5_ng_container_1_For_2_Template, 8, 7, "div", 10, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.charge_codes);
  }
}
function ChargeCodeListModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 8);
    \u0275\u0275template(1, ChargeCodeListModalComponent_main_5_ng_container_1_Template, 3, 0, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const empty_state_r4 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.charge_codes.length)("ngIfElse", empty_state_r4);
  }
}
function ChargeCodeListModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 15)(1, "button", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "input", 17);
    \u0275\u0275listener("change", function ChargeCodeListModalComponent_footer_6_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addCodesFromFile($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_footer_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadTemplate());
    });
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 19);
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_footer_6_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newCode());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 19);
    \u0275\u0275listener("click", function ChargeCodeListModalComponent_footer_6_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveChargeCodes());
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "CATERING.CHARGE_CODES_IMPORT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 6, "CATERING.CHARGE_CODE_DOWNLOAD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "CATERING.CHARGE_CODES_ADD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 10, "COMMON.SAVE"), " ");
  }
}
function ChargeCodeListModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 20);
    \u0275\u0275element(1, "mat-spinner", 21);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "CATERING.CHARGE_CODE_SAVE"));
  }
}
function ChargeCodeListModalComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 22)(1, "p", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CATERING.CHARGE_CODE_EMPTY"), " ");
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
      this.charge_codes = (yield nextValueFrom(this._state.charge_codes)) || [];
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
        if (file.type !== "text/csv" && file.type !== "text/tab-separated-values") {
          notifyError("Only CSV and TSV files are accepted.");
          return;
        }
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
  downloadTemplate() {
    const template = `code,description
code-1,Some Code
code-2,Another Code`;
    downloadFile("template.csv", template);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChargeCodeListModalComponent, selectors: [["charge-code-list-modal"]], standalone: false, decls: 11, vars: 7, consts: [["load_state", ""], ["empty_state", ""], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "flex max-h-[65vh] min-h-[20rem] flex-col overflow-auto", 4, "ngIf", "ngIfElse"], ["class", "flex items-center space-x-2 border-t border-base-200 p-2", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "min-h-[20rem]", "flex-col", "overflow-auto"], [4, "ngIf", "ngIfElse"], [1, "flex", "w-full", "items-center", "space-x-2", "px-2", "py-1", "hover:bg-base-200"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-error", "text-error", 3, "click", "matTooltip"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2", "border-t", "border-base-200", "p-2"], ["btn", "", "matRipple", "", 1, "inverse", "relative", "w-48"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-secondary", "text-secondary", 3, "click", "matTooltip"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-20"], ["diameter", "32"], [1, "flex", "h-full", "min-h-[20rem]", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30"]], template: function ChargeCodeListModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 2)(1, "h2", 3);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, ChargeCodeListModalComponent_button_4_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ChargeCodeListModalComponent_main_5_Template, 2, 2, "main", 5)(6, ChargeCodeListModalComponent_footer_6_Template, 15, 12, "footer", 6)(7, ChargeCodeListModalComponent_ng_template_7_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, ChargeCodeListModalComponent_ng_template_9_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const load_state_r6 = \u0275\u0275reference(8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "CATERING.CHARGE_CODES_EDIT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r6);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [NgIf, MatDialogClose, MatTooltip, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, MatFormField, MatRipple, MatInput, MatProgressSpinner, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChargeCodeListModalComponent, { className: "ChargeCodeListModalComponent", filePath: "libs/catering/src/lib/charge-code-list-modal.component.ts", lineNumber: 110 });
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

export {
  CateringOrdersService,
  CateringStateService,
  CateringMenuComponent,
  CateringOrderListComponent,
  ChargeCodeListModalComponent,
  SharedCateringModule
};
//# sourceMappingURL=chunk-OHMYK4T2.js.map
