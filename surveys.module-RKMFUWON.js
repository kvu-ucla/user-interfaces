import {
  CdkDrag,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-SFMA3UFS.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-AY3IHIXA.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentsModule,
  ContentChild,
  ContentChildren,
  CounterComponent,
  DOCUMENT,
  DateRangeFieldComponent,
  DecimalPipe,
  DefaultValueAccessor,
  Directionality,
  Directive,
  ElementRef,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  HostAttributeToken,
  IconComponent,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  LevelPipe,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatCheckboxModule,
  MatCommonModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
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
  MatSlideToggleModule,
  MatTooltip,
  MatTooltipModule,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NgModule,
  NgStyle,
  OrganisationService,
  Output,
  PercentPipe,
  Pipe,
  Platform,
  ReactiveFormsModule,
  RequiredValidator,
  RouterLink,
  RouterModule,
  RouterOutlet,
  Sa,
  ScrollingModule,
  SettingsService,
  SettingsToggleComponent,
  SimpleTableComponent,
  Subject,
  TemplateRef,
  TranslatePipe,
  UIModule,
  Validators,
  Ve,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  ViewportRuler,
  _DisposeViewRepeaterStrategy,
  _RecycleViewRepeaterStrategy,
  _VIEW_REPEATER_STRATEGY,
  _ViewRepeaterOperation,
  __spreadProps,
  __spreadValues,
  _a,
  addStringKey,
  afterNextRender,
  ba,
  booleanAttribute,
  catchError,
  combineLatest,
  computed,
  da,
  endOfDay,
  filter,
  first,
  flatten,
  forkJoin,
  ga,
  getUnixTime,
  inject,
  input,
  isDataSource,
  isObservable,
  ka,
  lastValueFrom,
  ma,
  map,
  model,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  output,
  pa,
  removeStringKey,
  sa,
  setClassMetadata,
  shareReplay,
  signal,
  startOfDay,
  startWith,
  switchMap,
  takeUntil,
  tap,
  ua,
  va,
  viewChild,
  ya,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction7,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-OARD3L5N.js";

// node_modules/@angular/cdk/fesm2022/table.mjs
var _c0 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c1 = ["caption", "colgroup, col", "*"];
function CdkTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function CdkTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead", 0);
    \u0275\u0275elementContainer(1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tbody", 0);
    \u0275\u0275elementContainer(3, 2)(4, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tfoot", 0);
    \u0275\u0275elementContainer(6, 4);
    \u0275\u0275elementEnd();
  }
}
function CdkTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1)(1, 2)(2, 3)(3, 4);
  }
}
function CdkTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function CdkTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
var CDK_TABLE = new InjectionToken("CDK_TABLE");
var TEXT_COLUMN_OPTIONS = new InjectionToken("text-column-options");
var CdkCellDef = class _CdkCellDef {
  /** @docs-private */
  template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function CdkCellDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCellDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCellDef,
    selectors: [["", "cdkCellDef", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkCellDef]"
    }]
  }], () => [], null);
})();
var CdkHeaderCellDef = class _CdkHeaderCellDef {
  /** @docs-private */
  template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function CdkHeaderCellDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkHeaderCellDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkHeaderCellDef,
    selectors: [["", "cdkHeaderCellDef", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderCellDef]"
    }]
  }], () => [], null);
})();
var CdkFooterCellDef = class _CdkFooterCellDef {
  /** @docs-private */
  template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function CdkFooterCellDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFooterCellDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFooterCellDef,
    selectors: [["", "cdkFooterCellDef", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterCellDef]"
    }]
  }], () => [], null);
})();
var CdkColumnDef = class _CdkColumnDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  _hasStickyChanged = false;
  /** Unique name for this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  _name;
  /** Whether the cell is sticky. */
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  _sticky = false;
  /**
   * Whether this column should be sticky positioned on the end of the row. Should make sure
   * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
   * has been changed.
   */
  get stickyEnd() {
    return this._stickyEnd;
  }
  set stickyEnd(value) {
    if (value !== this._stickyEnd) {
      this._stickyEnd = value;
      this._hasStickyChanged = true;
    }
  }
  _stickyEnd = false;
  /** @docs-private */
  cell;
  /** @docs-private */
  headerCell;
  /** @docs-private */
  footerCell;
  /**
   * Transformed version of the column name that can be used as part of a CSS classname. Excludes
   * all non-alphanumeric characters and the special characters '-' and '_'. Any characters that
   * do not match are replaced by the '-' character.
   */
  cssClassFriendlyName;
  /**
   * Class name for cells in this column.
   * @docs-private
   */
  _columnCssClassName;
  constructor() {
  }
  /** Whether the sticky state has changed. */
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  /** Resets the sticky changed state. */
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  /**
   * Overridable method that sets the css classes that will be added to every cell in this
   * column.
   * In the future, columnCssClassName will change from type string[] to string and this
   * will set a single string value.
   * @docs-private
   */
  _updateColumnCssClassName() {
    this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setNameInput(value) {
    if (value) {
      this._name = value;
      this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/gi, "-");
      this._updateColumnCssClassName();
    }
  }
  static \u0275fac = function CdkColumnDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkColumnDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkColumnDef,
    selectors: [["", "cdkColumnDef", ""]],
    contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkCellDef, 5);
        \u0275\u0275contentQuery(dirIndex, CdkHeaderCellDef, 5);
        \u0275\u0275contentQuery(dirIndex, CdkFooterCellDef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cell = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCell = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerCell = _t.first);
      }
    },
    inputs: {
      name: [0, "cdkColumnDef", "name"],
      sticky: [2, "sticky", "sticky", booleanAttribute],
      stickyEnd: [2, "stickyEnd", "stickyEnd", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: "MAT_SORT_HEADER_COLUMN_DEF",
      useExisting: _CdkColumnDef
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkColumnDef, [{
    type: Directive,
    args: [{
      selector: "[cdkColumnDef]",
      providers: [{
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: CdkColumnDef
      }]
    }]
  }], () => [], {
    name: [{
      type: Input,
      args: ["cdkColumnDef"]
    }],
    sticky: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stickyEnd: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    cell: [{
      type: ContentChild,
      args: [CdkCellDef]
    }],
    headerCell: [{
      type: ContentChild,
      args: [CdkHeaderCellDef]
    }],
    footerCell: [{
      type: ContentChild,
      args: [CdkFooterCellDef]
    }]
  });
})();
var BaseCdkCell = class {
  constructor(columnDef, elementRef) {
    elementRef.nativeElement.classList.add(...columnDef._columnCssClassName);
  }
};
var CdkHeaderCell = class _CdkHeaderCell extends BaseCdkCell {
  constructor() {
    super(inject(CdkColumnDef), inject(ElementRef));
  }
  static \u0275fac = function CdkHeaderCell_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkHeaderCell)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkHeaderCell,
    selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
    hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCell, [{
    type: Directive,
    args: [{
      selector: "cdk-header-cell, th[cdk-header-cell]",
      host: {
        "class": "cdk-header-cell",
        "role": "columnheader"
      }
    }]
  }], () => [], null);
})();
var CdkFooterCell = class _CdkFooterCell extends BaseCdkCell {
  constructor() {
    const columnDef = inject(CdkColumnDef);
    const elementRef = inject(ElementRef);
    super(columnDef, elementRef);
    const role = columnDef._table?._getCellRole();
    if (role) {
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
  static \u0275fac = function CdkFooterCell_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFooterCell)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFooterCell,
    selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
    hostAttrs: [1, "cdk-footer-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCell, [{
    type: Directive,
    args: [{
      selector: "cdk-footer-cell, td[cdk-footer-cell]",
      host: {
        "class": "cdk-footer-cell"
      }
    }]
  }], () => [], null);
})();
var CdkCell = class _CdkCell extends BaseCdkCell {
  constructor() {
    const columnDef = inject(CdkColumnDef);
    const elementRef = inject(ElementRef);
    super(columnDef, elementRef);
    const role = columnDef._table?._getCellRole();
    if (role) {
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
  static \u0275fac = function CdkCell_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCell)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCell,
    selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
    hostAttrs: [1, "cdk-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCell, [{
    type: Directive,
    args: [{
      selector: "cdk-cell, td[cdk-cell]",
      host: {
        "class": "cdk-cell"
      }
    }]
  }], () => [], null);
})();
var CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var BaseRowDef = class _BaseRowDef {
  template = inject(TemplateRef);
  _differs = inject(IterableDiffers);
  /** The columns to be displayed on this row. */
  columns;
  /** Differ used to check if any changes were made to the columns. */
  _columnsDiffer;
  constructor() {
  }
  ngOnChanges(changes) {
    if (!this._columnsDiffer) {
      const columns = changes["columns"] && changes["columns"].currentValue || [];
      this._columnsDiffer = this._differs.find(columns).create();
      this._columnsDiffer.diff(columns);
    }
  }
  /**
   * Returns the difference between the current columns and the columns from the last diff, or null
   * if there is no difference.
   */
  getColumnsDiff() {
    return this._columnsDiffer.diff(this.columns);
  }
  /** Gets this row def's relevant cell template from the provided column def. */
  extractCellTemplate(column) {
    if (this instanceof CdkHeaderRowDef) {
      return column.headerCell.template;
    }
    if (this instanceof CdkFooterRowDef) {
      return column.footerCell.template;
    } else {
      return column.cell.template;
    }
  }
  static \u0275fac = function BaseRowDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseRowDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseRowDef,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseRowDef, [{
    type: Directive
  }], () => [], null);
})();
var CdkHeaderRowDef = class _CdkHeaderRowDef extends BaseRowDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  _hasStickyChanged = false;
  /** Whether the row is sticky. */
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  _sticky = false;
  constructor() {
    super(inject(TemplateRef), inject(IterableDiffers));
  }
  // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  /** Whether the sticky state has changed. */
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  /** Resets the sticky changed state. */
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  static \u0275fac = function CdkHeaderRowDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkHeaderRowDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkHeaderRowDef,
    selectors: [["", "cdkHeaderRowDef", ""]],
    inputs: {
      columns: [0, "cdkHeaderRowDef", "columns"],
      sticky: [2, "cdkHeaderRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkHeaderRowDef"
      }]
    }]
  }], () => [], {
    sticky: [{
      type: Input,
      args: [{
        alias: "cdkHeaderRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkFooterRowDef = class _CdkFooterRowDef extends BaseRowDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  _hasStickyChanged = false;
  /** Whether the row is sticky. */
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  _sticky = false;
  constructor() {
    super(inject(TemplateRef), inject(IterableDiffers));
  }
  // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  /** Whether the sticky state has changed. */
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  /** Resets the sticky changed state. */
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  static \u0275fac = function CdkFooterRowDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFooterRowDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFooterRowDef,
    selectors: [["", "cdkFooterRowDef", ""]],
    inputs: {
      columns: [0, "cdkFooterRowDef", "columns"],
      sticky: [2, "cdkFooterRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkFooterRowDef"
      }]
    }]
  }], () => [], {
    sticky: [{
      type: Input,
      args: [{
        alias: "cdkFooterRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkRowDef = class _CdkRowDef extends BaseRowDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  /**
   * Function that should return true if this row template should be used for the provided index
   * and row data. If left undefined, this row will be considered the default row template to use
   * when no other when functions return true for the data.
   * For every row, there must be at least one when function that passes or an undefined to default.
   */
  when;
  constructor() {
    super(inject(TemplateRef), inject(IterableDiffers));
  }
  static \u0275fac = function CdkRowDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkRowDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkRowDef,
    selectors: [["", "cdkRowDef", ""]],
    inputs: {
      columns: [0, "cdkRowDefColumns", "columns"],
      when: [0, "cdkRowDefWhen", "when"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkRowDefColumns"
      }, {
        name: "when",
        alias: "cdkRowDefWhen"
      }]
    }]
  }], () => [], null);
})();
var CdkCellOutlet = class _CdkCellOutlet {
  _viewContainer = inject(ViewContainerRef);
  /** The ordered list of cells to render within this outlet's view container */
  cells;
  /** The data context to be provided to each cell */
  context;
  /**
   * Static property containing the latest constructed instance of this class.
   * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
   * createEmbeddedView. After one of these components are created, this property will provide
   * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
   * construct the cells with the provided context.
   */
  static mostRecentCellOutlet = null;
  constructor() {
    _CdkCellOutlet.mostRecentCellOutlet = this;
  }
  ngOnDestroy() {
    if (_CdkCellOutlet.mostRecentCellOutlet === this) {
      _CdkCellOutlet.mostRecentCellOutlet = null;
    }
  }
  static \u0275fac = function CdkCellOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCellOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCellOutlet,
    selectors: [["", "cdkCellOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkCellOutlet]"
    }]
  }], () => [], null);
})();
var CdkHeaderRow = class _CdkHeaderRow {
  static \u0275fac = function CdkHeaderRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkHeaderRow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkHeaderRow,
    selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-header-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkHeaderRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRow, [{
    type: Component,
    args: [{
      selector: "cdk-header-row, tr[cdk-header-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-header-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var CdkFooterRow = class _CdkFooterRow {
  static \u0275fac = function CdkFooterRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFooterRow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkFooterRow,
    selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-footer-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkFooterRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRow, [{
    type: Component,
    args: [{
      selector: "cdk-footer-row, tr[cdk-footer-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-footer-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var CdkRow = class _CdkRow {
  static \u0275fac = function CdkRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkRow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkRow,
    selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRow, [{
    type: Component,
    args: [{
      selector: "cdk-row, tr[cdk-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var CdkNoDataRow = class _CdkNoDataRow {
  templateRef = inject(TemplateRef);
  _contentClassName = "cdk-no-data-row";
  constructor() {
  }
  static \u0275fac = function CdkNoDataRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkNoDataRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkNoDataRow,
    selectors: [["ng-template", "cdkNoDataRow", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkNoDataRow]"
    }]
  }], () => [], null);
})();
var STICKY_DIRECTIONS = ["top", "bottom", "left", "right"];
var StickyStyler = class {
  _isNativeHtmlTable;
  _stickCellCss;
  _isBrowser;
  _needsPositionStickyOnElement;
  direction;
  _positionListener;
  _tableInjector;
  _elemSizeCache = /* @__PURE__ */ new WeakMap();
  _resizeObserver = globalThis?.ResizeObserver ? new globalThis.ResizeObserver((entries) => this._updateCachedSizes(entries)) : null;
  _updatedStickyColumnsParamsToReplay = [];
  _stickyColumnsReplayTimeout = null;
  _cachedCellWidths = [];
  _borderCellCss;
  _destroyed = false;
  /**
   * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
   *     that uses the native `<table>` element.
   * @param _stickCellCss The CSS class that will be applied to every row/cell that has
   *     sticky positioning applied.
   * @param direction The directionality context of the table (ltr/rtl); affects column positioning
   *     by reversing left/right positions.
   * @param _isBrowser Whether the table is currently being rendered on the server or the client.
   * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
   *     using inline styles. If false, it is assumed that position: sticky is included in
   *     the component stylesheet for _stickCellCss.
   * @param _positionListener A listener that is notified of changes to sticky rows/columns
   *     and their dimensions.
   * @param _tableInjector The table's Injector.
   */
  constructor(_isNativeHtmlTable, _stickCellCss, _isBrowser = true, _needsPositionStickyOnElement = true, direction, _positionListener, _tableInjector) {
    this._isNativeHtmlTable = _isNativeHtmlTable;
    this._stickCellCss = _stickCellCss;
    this._isBrowser = _isBrowser;
    this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    this.direction = direction;
    this._positionListener = _positionListener;
    this._tableInjector = _tableInjector;
    this._borderCellCss = {
      "top": `${_stickCellCss}-border-elem-top`,
      "bottom": `${_stickCellCss}-border-elem-bottom`,
      "left": `${_stickCellCss}-border-elem-left`,
      "right": `${_stickCellCss}-border-elem-right`
    };
  }
  /**
   * Clears the sticky positioning styles from the row and its cells by resetting the `position`
   * style, setting the zIndex to 0, and unsetting each provided sticky direction.
   * @param rows The list of rows that should be cleared from sticking in the provided directions
   * @param stickyDirections The directions that should no longer be set as sticky on the rows.
   */
  clearStickyPositioning(rows, stickyDirections) {
    if (stickyDirections.includes("left") || stickyDirections.includes("right")) {
      this._removeFromStickyColumnReplayQueue(rows);
    }
    const elementsToClear = [];
    for (const row of rows) {
      if (row.nodeType !== row.ELEMENT_NODE) {
        continue;
      }
      elementsToClear.push(row, ...Array.from(row.children));
    }
    afterNextRender({
      write: () => {
        for (const element of elementsToClear) {
          this._removeStickyStyle(element, stickyDirections);
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  /**
   * Applies sticky left and right positions to the cells of each row according to the sticky
   * states of the rendered column definitions.
   * @param rows The rows that should have its set of cells stuck according to the sticky states.
   * @param stickyStartStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the start of the row.
   * @param stickyEndStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the end of the row.
   * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
   *     column cell. If `false` cached widths will be used instead.
   * @param replay Whether to enqueue this call for replay after a ResizeObserver update.
   */
  updateStickyColumns(rows, stickyStartStates, stickyEndStates, recalculateCellWidths = true, replay = true) {
    if (!rows.length || !this._isBrowser || !(stickyStartStates.some((state) => state) || stickyEndStates.some((state) => state))) {
      this._positionListener?.stickyColumnsUpdated({
        sizes: []
      });
      this._positionListener?.stickyEndColumnsUpdated({
        sizes: []
      });
      return;
    }
    const firstRow = rows[0];
    const numCells = firstRow.children.length;
    const isRtl = this.direction === "rtl";
    const start = isRtl ? "right" : "left";
    const end = isRtl ? "left" : "right";
    const lastStickyStart = stickyStartStates.lastIndexOf(true);
    const firstStickyEnd = stickyEndStates.indexOf(true);
    let cellWidths;
    let startPositions;
    let endPositions;
    if (replay) {
      this._updateStickyColumnReplayQueue({
        rows: [...rows],
        stickyStartStates: [...stickyStartStates],
        stickyEndStates: [...stickyEndStates]
      });
    }
    afterNextRender({
      earlyRead: () => {
        cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);
        startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
      },
      write: () => {
        for (const row of rows) {
          for (let i = 0; i < numCells; i++) {
            const cell = row.children[i];
            if (stickyStartStates[i]) {
              this._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
            }
            if (stickyEndStates[i]) {
              this._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
            }
          }
        }
        if (this._positionListener && cellWidths.some((w) => !!w)) {
          this._positionListener.stickyColumnsUpdated({
            sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map((width, index) => stickyStartStates[index] ? width : null)
          });
          this._positionListener.stickyEndColumnsUpdated({
            sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map((width, index) => stickyEndStates[index + firstStickyEnd] ? width : null).reverse()
          });
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  /**
   * Applies sticky positioning to the row's cells if using the native table layout, and to the
   * row itself otherwise.
   * @param rowsToStick The list of rows that should be stuck according to their corresponding
   *     sticky state and to the provided top or bottom position.
   * @param stickyStates A list of boolean states where each state represents whether the row
   *     should be stuck in the particular top or bottom position.
   * @param position The position direction in which the row should be stuck if that row should be
   *     sticky.
   *
   */
  stickRows(rowsToStick, stickyStates, position) {
    if (!this._isBrowser) {
      return;
    }
    const rows = position === "bottom" ? rowsToStick.slice().reverse() : rowsToStick;
    const states = position === "bottom" ? stickyStates.slice().reverse() : stickyStates;
    const stickyOffsets = [];
    const stickyCellHeights = [];
    const elementsToStick = [];
    afterNextRender({
      earlyRead: () => {
        for (let rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
          if (!states[rowIndex]) {
            continue;
          }
          stickyOffsets[rowIndex] = stickyOffset;
          const row = rows[rowIndex];
          elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
          const height = this._retrieveElementSize(row).height;
          stickyOffset += height;
          stickyCellHeights[rowIndex] = height;
        }
      },
      write: () => {
        const borderedRowIndex = states.lastIndexOf(true);
        for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
          if (!states[rowIndex]) {
            continue;
          }
          const offset = stickyOffsets[rowIndex];
          const isBorderedRowIndex = rowIndex === borderedRowIndex;
          for (const element of elementsToStick[rowIndex]) {
            this._addStickyStyle(element, position, offset, isBorderedRowIndex);
          }
        }
        if (position === "top") {
          this._positionListener?.stickyHeaderRowsUpdated({
            sizes: stickyCellHeights,
            offsets: stickyOffsets,
            elements: elementsToStick
          });
        } else {
          this._positionListener?.stickyFooterRowsUpdated({
            sizes: stickyCellHeights,
            offsets: stickyOffsets,
            elements: elementsToStick
          });
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  /**
   * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
   * footer rows is to apply sticky styling to the tfoot container. This should only be done if
   * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
   * the tfoot element.
   */
  updateStickyFooterContainer(tableElement, stickyStates) {
    if (!this._isNativeHtmlTable) {
      return;
    }
    afterNextRender({
      write: () => {
        const tfoot = tableElement.querySelector("tfoot");
        if (tfoot) {
          if (stickyStates.some((state) => !state)) {
            this._removeStickyStyle(tfoot, ["bottom"]);
          } else {
            this._addStickyStyle(tfoot, "bottom", 0, false);
          }
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  /** Triggered by the table's OnDestroy hook. */
  destroy() {
    if (this._stickyColumnsReplayTimeout) {
      clearTimeout(this._stickyColumnsReplayTimeout);
    }
    this._resizeObserver?.disconnect();
    this._destroyed = true;
  }
  /**
   * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
   * the zIndex, removing each of the provided sticky directions, and removing the
   * sticky position if there are no more directions.
   */
  _removeStickyStyle(element, stickyDirections) {
    if (!element.classList.contains(this._stickCellCss)) {
      return;
    }
    for (const dir of stickyDirections) {
      element.style[dir] = "";
      element.classList.remove(this._borderCellCss[dir]);
    }
    const hasDirection = STICKY_DIRECTIONS.some((dir) => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
    if (hasDirection) {
      element.style.zIndex = this._getCalculatedZIndex(element);
    } else {
      element.style.zIndex = "";
      if (this._needsPositionStickyOnElement) {
        element.style.position = "";
      }
      element.classList.remove(this._stickCellCss);
    }
  }
  /**
   * Adds the sticky styling to the element by adding the sticky style class, changing position
   * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
   * direction and value.
   */
  _addStickyStyle(element, dir, dirValue, isBorderElement) {
    element.classList.add(this._stickCellCss);
    if (isBorderElement) {
      element.classList.add(this._borderCellCss[dir]);
    }
    element.style[dir] = `${dirValue}px`;
    element.style.zIndex = this._getCalculatedZIndex(element);
    if (this._needsPositionStickyOnElement) {
      element.style.cssText += "position: -webkit-sticky; position: sticky; ";
    }
  }
  /**
   * Calculate what the z-index should be for the element, depending on what directions (top,
   * bottom, left, right) have been set. It should be true that elements with a top direction
   * should have the highest index since these are elements like a table header. If any of those
   * elements are also sticky in another direction, then they should appear above other elements
   * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
   * (e.g. footer rows) should then be next in the ordering such that they are below the header
   * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
   * should minimally increment so that they are above non-sticky elements but below top and bottom
   * elements.
   */
  _getCalculatedZIndex(element) {
    const zIndexIncrements = {
      top: 100,
      bottom: 10,
      left: 1,
      right: 1
    };
    let zIndex = 0;
    for (const dir of STICKY_DIRECTIONS) {
      if (element.style[dir]) {
        zIndex += zIndexIncrements[dir];
      }
    }
    return zIndex ? `${zIndex}` : "";
  }
  /** Gets the widths for each cell in the provided row. */
  _getCellWidths(row, recalculateCellWidths = true) {
    if (!recalculateCellWidths && this._cachedCellWidths.length) {
      return this._cachedCellWidths;
    }
    const cellWidths = [];
    const firstRowCells = row.children;
    for (let i = 0; i < firstRowCells.length; i++) {
      const cell = firstRowCells[i];
      cellWidths.push(this._retrieveElementSize(cell).width);
    }
    this._cachedCellWidths = cellWidths;
    return cellWidths;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyStartColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = 0; i < widths.length; i++) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyEndColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = widths.length; i > 0; i--) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  /**
   * Retreives the most recently observed size of the specified element from the cache, or
   * meaures it directly if not yet cached.
   */
  _retrieveElementSize(element) {
    const cachedSize = this._elemSizeCache.get(element);
    if (cachedSize) {
      return cachedSize;
    }
    const clientRect = element.getBoundingClientRect();
    const size = {
      width: clientRect.width,
      height: clientRect.height
    };
    if (!this._resizeObserver) {
      return size;
    }
    this._elemSizeCache.set(element, size);
    this._resizeObserver.observe(element, {
      box: "border-box"
    });
    return size;
  }
  /**
   * Conditionally enqueue the requested sticky update and clear previously queued updates
   * for the same rows.
   */
  _updateStickyColumnReplayQueue(params) {
    this._removeFromStickyColumnReplayQueue(params.rows);
    if (!this._stickyColumnsReplayTimeout) {
      this._updatedStickyColumnsParamsToReplay.push(params);
    }
  }
  /** Remove updates for the specified rows from the queue. */
  _removeFromStickyColumnReplayQueue(rows) {
    const rowsSet = new Set(rows);
    for (const update of this._updatedStickyColumnsParamsToReplay) {
      update.rows = update.rows.filter((row) => !rowsSet.has(row));
    }
    this._updatedStickyColumnsParamsToReplay = this._updatedStickyColumnsParamsToReplay.filter((update) => !!update.rows.length);
  }
  /** Update _elemSizeCache with the observed sizes. */
  _updateCachedSizes(entries) {
    let needsColumnUpdate = false;
    for (const entry of entries) {
      const newEntry = entry.borderBoxSize?.length ? {
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize
      } : {
        width: entry.contentRect.width,
        height: entry.contentRect.height
      };
      if (newEntry.width !== this._elemSizeCache.get(entry.target)?.width && isCell(entry.target)) {
        needsColumnUpdate = true;
      }
      this._elemSizeCache.set(entry.target, newEntry);
    }
    if (needsColumnUpdate && this._updatedStickyColumnsParamsToReplay.length) {
      if (this._stickyColumnsReplayTimeout) {
        clearTimeout(this._stickyColumnsReplayTimeout);
      }
      this._stickyColumnsReplayTimeout = setTimeout(() => {
        if (this._destroyed) {
          return;
        }
        for (const update of this._updatedStickyColumnsParamsToReplay) {
          this.updateStickyColumns(update.rows, update.stickyStartStates, update.stickyEndStates, true, false);
        }
        this._updatedStickyColumnsParamsToReplay = [];
        this._stickyColumnsReplayTimeout = null;
      }, 0);
    }
  }
};
function isCell(element) {
  return ["cdk-cell", "cdk-header-cell", "cdk-footer-cell"].some((klass) => element.classList.contains(klass));
}
function getTableUnknownColumnError(id) {
  return Error(`Could not find column with id "${id}".`);
}
function getTableDuplicateColumnNameError(name) {
  return Error(`Duplicate column definition name provided: "${name}".`);
}
function getTableMultipleDefaultRowDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
function getTableMissingMatchingRowDefError(data) {
  return Error(`Could not find a matching row definition for theprovided row data: ${JSON.stringify(data)}`);
}
function getTableMissingRowDefsError() {
  return Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");
}
function getTableUnknownDataSourceError() {
  return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
function getTableTextColumnMissingParentTableError() {
  return Error(`Text column could not find a parent table for registration.`);
}
function getTableTextColumnMissingNameError() {
  return Error(`Table text column must have a name.`);
}
var STICKY_POSITIONING_LISTENER = new InjectionToken("CDK_SPL");
var CdkRecycleRows = class _CdkRecycleRows {
  static \u0275fac = function CdkRecycleRows_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkRecycleRows)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkRecycleRows,
    selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _RecycleViewRepeaterStrategy
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRecycleRows, [{
    type: Directive,
    args: [{
      selector: "cdk-table[recycleRows], table[cdk-table][recycleRows]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }]
    }]
  }], null, null);
})();
var DataRowOutlet = class _DataRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._rowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function DataRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DataRowOutlet,
    selectors: [["", "rowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[rowOutlet]"
    }]
  }], () => [], null);
})();
var HeaderRowOutlet = class _HeaderRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._headerRowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function HeaderRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _HeaderRowOutlet,
    selectors: [["", "headerRowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[headerRowOutlet]"
    }]
  }], () => [], null);
})();
var FooterRowOutlet = class _FooterRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._footerRowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function FooterRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FooterRowOutlet,
    selectors: [["", "footerRowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[footerRowOutlet]"
    }]
  }], () => [], null);
})();
var NoDataRowOutlet = class _NoDataRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._noDataRowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function NoDataRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoDataRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NoDataRowOutlet,
    selectors: [["", "noDataRowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoDataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[noDataRowOutlet]"
    }]
  }], () => [], null);
})();
var CdkTable = class _CdkTable {
  _differs = inject(IterableDiffers);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _platform = inject(Platform);
  _viewRepeater = inject(_VIEW_REPEATER_STRATEGY);
  _viewportRuler = inject(ViewportRuler);
  _stickyPositioningListener = inject(STICKY_POSITIONING_LISTENER, {
    optional: true,
    skipSelf: true
  });
  _document = inject(DOCUMENT);
  /** Latest data provided by the data source. */
  _data;
  /** Subject that emits when the component has been destroyed. */
  _onDestroy = new Subject();
  /** List of the rendered rows as identified by their `RenderRow` object. */
  _renderRows;
  /** Subscription that listens for the data provided by the data source. */
  _renderChangeSubscription;
  /**
   * Map of all the user's defined columns (header, data, and footer cell template) identified by
   * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
   * any custom column definitions added to `_customColumnDefs`.
   */
  _columnDefsByName = /* @__PURE__ */ new Map();
  /**
   * Set of all row definitions that can be used by this table. Populated by the rows gathered by
   * using `ContentChildren` as well as any custom row definitions added to `_customRowDefs`.
   */
  _rowDefs;
  /**
   * Set of all header row definitions that can be used by this table. Populated by the rows
   * gathered by using `ContentChildren` as well as any custom row definitions added to
   * `_customHeaderRowDefs`.
   */
  _headerRowDefs;
  /**
   * Set of all row definitions that can be used by this table. Populated by the rows gathered by
   * using `ContentChildren` as well as any custom row definitions added to
   * `_customFooterRowDefs`.
   */
  _footerRowDefs;
  /** Differ used to find the changes in the data provided by the data source. */
  _dataDiffer;
  /** Stores the row definition that does not have a when predicate. */
  _defaultRowDef;
  /**
   * Column definitions that were defined outside of the direct content children of the table.
   * These will be defined when, e.g., creating a wrapper around the cdkTable that has
   * column definitions as *its* content child.
   */
  _customColumnDefs = /* @__PURE__ */ new Set();
  /**
   * Data row definitions that were defined outside of the direct content children of the table.
   * These will be defined when, e.g., creating a wrapper around the cdkTable that has
   * built-in data rows as *its* content child.
   */
  _customRowDefs = /* @__PURE__ */ new Set();
  /**
   * Header row definitions that were defined outside of the direct content children of the table.
   * These will be defined when, e.g., creating a wrapper around the cdkTable that has
   * built-in header rows as *its* content child.
   */
  _customHeaderRowDefs = /* @__PURE__ */ new Set();
  /**
   * Footer row definitions that were defined outside of the direct content children of the table.
   * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
   * built-in footer row as *its* content child.
   */
  _customFooterRowDefs = /* @__PURE__ */ new Set();
  /** No data row that was defined outside of the direct content children of the table. */
  _customNoDataRow;
  /**
   * Whether the header row definition has been changed. Triggers an update to the header row after
   * content is checked. Initialized as true so that the table renders the initial set of rows.
   */
  _headerRowDefChanged = true;
  /**
   * Whether the footer row definition has been changed. Triggers an update to the footer row after
   * content is checked. Initialized as true so that the table renders the initial set of rows.
   */
  _footerRowDefChanged = true;
  /**
   * Whether the sticky column styles need to be updated. Set to `true` when the visible columns
   * change.
   */
  _stickyColumnStylesNeedReset = true;
  /**
   * Whether the sticky styler should recalculate cell widths when applying sticky styles. If
   * `false`, cached values will be used instead. This is only applicable to tables with
   * `_fixedLayout` enabled. For other tables, cell widths will always be recalculated.
   */
  _forceRecalculateCellWidths = true;
  /**
   * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
   * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
   * the cached `RenderRow` objects when possible, the row identity is preserved when the data
   * and row template matches, which allows the `IterableDiffer` to check rows by reference
   * and understand which rows are added/moved/removed.
   *
   * Implemented as a map of maps where the first key is the `data: T` object and the second is the
   * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
   * contains an array of created pairs. The array is necessary to handle cases where the data
   * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
   * stored.
   */
  _cachedRenderRowsMap = /* @__PURE__ */ new Map();
  /** Whether the table is applied to a native `<table>`. */
  _isNativeHtmlTable;
  /**
   * Utility class that is responsible for applying the appropriate sticky positioning styles to
   * the table's rows and cells.
   */
  _stickyStyler;
  /**
   * CSS class added to any row or cell that has sticky positioning applied. May be overridden by
   * table subclasses.
   */
  stickyCssClass = "cdk-table-sticky";
  /**
   * Whether to manually add position: sticky to all sticky cell elements. Not needed if
   * the position is set in a selector associated with the value of stickyCssClass. May be
   * overridden by table subclasses
   */
  needsPositionStickyOnElement = true;
  /** Whether the component is being rendered on the server. */
  _isServer;
  /** Whether the no data row is currently showing anything. */
  _isShowingNoDataRow = false;
  /** Whether the table has rendered out all the outlets for the first time. */
  _hasAllOutlets = false;
  /** Whether the table is done initializing. */
  _hasInitialized = false;
  /** Aria role to apply to the table's cells based on the table's own role. */
  _getCellRole() {
    if (this._cellRoleInternal === void 0) {
      const tableRole = this._elementRef.nativeElement.getAttribute("role");
      return tableRole === "grid" || tableRole === "treegrid" ? "gridcell" : "cell";
    }
    return this._cellRoleInternal;
  }
  _cellRoleInternal = void 0;
  /**
   * Tracking function that will be used to check the differences in data changes. Used similarly
   * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
   * relative to the function to know if a row should be added/removed/moved.
   * Accepts a function that takes two parameters, `index` and `item`.
   */
  get trackBy() {
    return this._trackByFn;
  }
  set trackBy(fn) {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && fn != null && typeof fn !== "function") {
      console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this._trackByFn = fn;
  }
  _trackByFn;
  /**
   * The table's source of data, which can be provided in three ways (in order of complexity):
   *   - Simple data array (each object represents one table row)
   *   - Stream that emits a data array each time the array changes
   *   - `DataSource` object that implements the connect/disconnect interface.
   *
   * If a data array is provided, the table must be notified when the array's objects are
   * added, removed, or moved. This can be done by calling the `renderRows()` function which will
   * render the diff since the last table render. If the data array reference is changed, the table
   * will automatically trigger an update to the rows.
   *
   * When providing an Observable stream, the table will trigger an update automatically when the
   * stream emits a new array of data.
   *
   * Finally, when providing a `DataSource` object, the table will use the Observable stream
   * provided by the connect function and trigger updates when that stream emits new data array
   * values. During the table's ngOnDestroy or when the data source is removed from the table, the
   * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
   * subscriptions registered during the connect process).
   */
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
    }
  }
  _dataSource;
  /**
   * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
   * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
   * dataobject will render the first row that evaluates its when predicate to true, in the order
   * defined in the table, or otherwise the default row which does not have a when predicate.
   */
  get multiTemplateDataRows() {
    return this._multiTemplateDataRows;
  }
  set multiTemplateDataRows(value) {
    this._multiTemplateDataRows = value;
    if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
      this._forceRenderDataRows();
      this.updateStickyColumnStyles();
    }
  }
  _multiTemplateDataRows = false;
  /**
   * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
   * and optimize rendering sticky styles for native tables. No-op for flex tables.
   */
  get fixedLayout() {
    return this._fixedLayout;
  }
  set fixedLayout(value) {
    this._fixedLayout = value;
    this._forceRecalculateCellWidths = true;
    this._stickyColumnStylesNeedReset = true;
  }
  _fixedLayout = false;
  /**
   * Emits when the table completes rendering a set of data rows based on the latest data from the
   * data source, even if the set of rows is empty.
   */
  contentChanged = new EventEmitter();
  // TODO(andrewseguin): Remove max value as the end index
  //   and instead calculate the view on init and scroll.
  /**
   * Stream containing the latest information on what rows are being displayed on screen.
   * Can be used by the data source to as a heuristic of what data should be provided.
   *
   * @docs-private
   */
  viewChange = new BehaviorSubject({
    start: 0,
    end: Number.MAX_VALUE
  });
  // Outlets in the table's template where the header, data rows, and footer will be inserted.
  _rowOutlet;
  _headerRowOutlet;
  _footerRowOutlet;
  _noDataRowOutlet;
  /**
   * The column definitions provided by the user that contain what the header, data, and footer
   * cells should render for each column.
   */
  _contentColumnDefs;
  /** Set of data row definitions that were provided to the table as content children. */
  _contentRowDefs;
  /** Set of header row definitions that were provided to the table as content children. */
  _contentHeaderRowDefs;
  /** Set of footer row definitions that were provided to the table as content children. */
  _contentFooterRowDefs;
  /** Row definition that will only be rendered if there's no data in the table. */
  _noDataRow;
  _injector = inject(Injector);
  constructor() {
    const role = inject(new HostAttributeToken("role"), {
      optional: true
    });
    if (!role) {
      this._elementRef.nativeElement.setAttribute("role", "table");
    }
    this._isServer = !this._platform.isBrowser;
    this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === "TABLE";
    this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
      return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
    });
  }
  ngOnInit() {
    this._setupStickyStyler();
    this._viewportRuler.change().pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this._forceRecalculateCellWidths = true;
    });
  }
  ngAfterContentInit() {
    this._hasInitialized = true;
  }
  ngAfterContentChecked() {
    if (this._canRender()) {
      this._render();
    }
  }
  ngOnDestroy() {
    this._stickyStyler?.destroy();
    [this._rowOutlet?.viewContainer, this._headerRowOutlet?.viewContainer, this._footerRowOutlet?.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach((def) => {
      def?.clear();
    });
    this._headerRowDefs = [];
    this._footerRowDefs = [];
    this._defaultRowDef = null;
    this._onDestroy.next();
    this._onDestroy.complete();
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
  }
  /**
   * Renders rows based on the table's latest set of data, which was either provided directly as an
   * input or retrieved through an Observable stream (directly or from a DataSource).
   * Checks for differences in the data since the last diff to perform only the necessary
   * changes (add/remove/move rows).
   *
   * If the table's data source is a DataSource or Observable, this will be invoked automatically
   * each time the provided Observable stream emits a new data array. Otherwise if your data is
   * an array, this function will need to be called to render any changes.
   */
  renderRows() {
    this._renderRows = this._getAllRenderRows();
    const changes = this._dataDiffer.diff(this._renderRows);
    if (!changes) {
      this._updateNoDataRow();
      this.contentChanged.next();
      return;
    }
    const viewContainer = this._rowOutlet.viewContainer;
    this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), (record) => record.item.data, (change) => {
      if (change.operation === _ViewRepeaterOperation.INSERTED && change.context) {
        this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
      }
    });
    this._updateRowIndexContext();
    changes.forEachIdentityChange((record) => {
      const rowView = viewContainer.get(record.currentIndex);
      rowView.context.$implicit = record.item.data;
    });
    this._updateNoDataRow();
    this.contentChanged.next();
    this.updateStickyColumnStyles();
  }
  /** Adds a column definition that was not included as part of the content children. */
  addColumnDef(columnDef) {
    this._customColumnDefs.add(columnDef);
  }
  /** Removes a column definition that was not included as part of the content children. */
  removeColumnDef(columnDef) {
    this._customColumnDefs.delete(columnDef);
  }
  /** Adds a row definition that was not included as part of the content children. */
  addRowDef(rowDef) {
    this._customRowDefs.add(rowDef);
  }
  /** Removes a row definition that was not included as part of the content children. */
  removeRowDef(rowDef) {
    this._customRowDefs.delete(rowDef);
  }
  /** Adds a header row definition that was not included as part of the content children. */
  addHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.add(headerRowDef);
    this._headerRowDefChanged = true;
  }
  /** Removes a header row definition that was not included as part of the content children. */
  removeHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.delete(headerRowDef);
    this._headerRowDefChanged = true;
  }
  /** Adds a footer row definition that was not included as part of the content children. */
  addFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.add(footerRowDef);
    this._footerRowDefChanged = true;
  }
  /** Removes a footer row definition that was not included as part of the content children. */
  removeFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.delete(footerRowDef);
    this._footerRowDefChanged = true;
  }
  /** Sets a no data row definition that was not included as a part of the content children. */
  setNoDataRow(noDataRow) {
    this._customNoDataRow = noDataRow;
  }
  /**
   * Updates the header sticky styles. First resets all applied styles with respect to the cells
   * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
   * automatically called when the header row changes its displayed set of columns, or if its
   * sticky input changes. May be called manually for cases where the cell content changes outside
   * of these events.
   */
  updateStickyHeaderRowStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    if (this._isNativeHtmlTable) {
      const thead = closestTableSection(this._headerRowOutlet, "thead");
      if (thead) {
        thead.style.display = headerRows.length ? "" : "none";
      }
    }
    const stickyStates = this._headerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(headerRows, ["top"]);
    this._stickyStyler.stickRows(headerRows, stickyStates, "top");
    this._headerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  /**
   * Updates the footer sticky styles. First resets all applied styles with respect to the cells
   * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
   * automatically called when the footer row changes its displayed set of columns, or if its
   * sticky input changes. May be called manually for cases where the cell content changes outside
   * of these events.
   */
  updateStickyFooterRowStyles() {
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    if (this._isNativeHtmlTable) {
      const tfoot = closestTableSection(this._footerRowOutlet, "tfoot");
      if (tfoot) {
        tfoot.style.display = footerRows.length ? "" : "none";
      }
    }
    const stickyStates = this._footerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(footerRows, ["bottom"]);
    this._stickyStyler.stickRows(footerRows, stickyStates, "bottom");
    this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
    this._footerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  /**
   * Updates the column sticky styles. First resets all applied styles with respect to the cells
   * sticking to the left and right. Then sticky styles are added for the left and right according
   * to the column definitions for each cell in each row. This is automatically called when
   * the data source provides a new set of data or when a column definition changes its sticky
   * input. May be called manually for cases where the cell content changes outside of these events.
   */
  updateStickyColumnStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    const dataRows = this._getRenderedRows(this._rowOutlet);
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    if (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) {
      this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ["left", "right"]);
      this._stickyColumnStylesNeedReset = false;
    }
    headerRows.forEach((headerRow, i) => {
      this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
    });
    this._rowDefs.forEach((rowDef) => {
      const rows = [];
      for (let i = 0; i < dataRows.length; i++) {
        if (this._renderRows[i].rowDef === rowDef) {
          rows.push(dataRows[i]);
        }
      }
      this._addStickyColumnStyles(rows, rowDef);
    });
    footerRows.forEach((footerRow, i) => {
      this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
    });
    Array.from(this._columnDefsByName.values()).forEach((def) => def.resetStickyChanged());
  }
  /** Invoked whenever an outlet is created and has been assigned to the table. */
  _outletAssigned() {
    if (!this._hasAllOutlets && this._rowOutlet && this._headerRowOutlet && this._footerRowOutlet && this._noDataRowOutlet) {
      this._hasAllOutlets = true;
      if (this._canRender()) {
        this._render();
      }
    }
  }
  /** Whether the table has all the information to start rendering. */
  _canRender() {
    return this._hasAllOutlets && this._hasInitialized;
  }
  /** Renders the table if its state has changed. */
  _render() {
    this._cacheRowDefs();
    this._cacheColumnDefs();
    if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingRowDefsError();
    }
    const columnsChanged = this._renderUpdatedColumns();
    const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
    this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
    this._forceRecalculateCellWidths = rowDefsChanged;
    if (this._headerRowDefChanged) {
      this._forceRenderHeaderRows();
      this._headerRowDefChanged = false;
    }
    if (this._footerRowDefChanged) {
      this._forceRenderFooterRows();
      this._footerRowDefChanged = false;
    }
    if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
      this._observeRenderChanges();
    } else if (this._stickyColumnStylesNeedReset) {
      this.updateStickyColumnStyles();
    }
    this._checkStickyStates();
  }
  /**
   * Get the list of RenderRow objects to render according to the current list of data and defined
   * row definitions. If the previous list already contained a particular pair, it should be reused
   * so that the differ equates their references.
   */
  _getAllRenderRows() {
    const renderRows = [];
    const prevCachedRenderRows = this._cachedRenderRowsMap;
    this._cachedRenderRowsMap = /* @__PURE__ */ new Map();
    if (!this._data) {
      return renderRows;
    }
    for (let i = 0; i < this._data.length; i++) {
      let data = this._data[i];
      const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
      if (!this._cachedRenderRowsMap.has(data)) {
        this._cachedRenderRowsMap.set(data, /* @__PURE__ */ new WeakMap());
      }
      for (let j = 0; j < renderRowsForData.length; j++) {
        let renderRow = renderRowsForData[j];
        const cache = this._cachedRenderRowsMap.get(renderRow.data);
        if (cache.has(renderRow.rowDef)) {
          cache.get(renderRow.rowDef).push(renderRow);
        } else {
          cache.set(renderRow.rowDef, [renderRow]);
        }
        renderRows.push(renderRow);
      }
    }
    return renderRows;
  }
  /**
   * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
   * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
   * `(T, CdkRowDef)` pair.
   */
  _getRenderRowsForData(data, dataIndex, cache) {
    const rowDefs = this._getRowDefs(data, dataIndex);
    return rowDefs.map((rowDef) => {
      const cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];
      if (cachedRenderRows.length) {
        const dataRow = cachedRenderRows.shift();
        dataRow.dataIndex = dataIndex;
        return dataRow;
      } else {
        return {
          data,
          rowDef,
          dataIndex
        };
      }
    });
  }
  /** Update the map containing the content's column definitions. */
  _cacheColumnDefs() {
    this._columnDefsByName.clear();
    const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
    columnDefs.forEach((columnDef) => {
      if (this._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableDuplicateColumnNameError(columnDef.name);
      }
      this._columnDefsByName.set(columnDef.name, columnDef);
    });
  }
  /** Update the list of all available row definitions that can be used. */
  _cacheRowDefs() {
    this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
    this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
    this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
    const defaultRowDefs = this._rowDefs.filter((def) => !def.when);
    if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMultipleDefaultRowDefsError();
    }
    this._defaultRowDef = defaultRowDefs[0];
  }
  /**
   * Check if the header, data, or footer rows have changed what columns they want to display or
   * whether the sticky states have changed for the header or footer. If there is a diff, then
   * re-render that section.
   */
  _renderUpdatedColumns() {
    const columnsDiffReducer = (acc, def) => {
      const diff = !!def.getColumnsDiff();
      return acc || diff;
    };
    const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
    if (dataColumnsChanged) {
      this._forceRenderDataRows();
    }
    const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
    if (headerColumnsChanged) {
      this._forceRenderHeaderRows();
    }
    const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
    if (footerColumnsChanged) {
      this._forceRenderFooterRows();
    }
    return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
  }
  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current
   * render change subscription if one exists. If the data source is null, interpret this by
   * clearing the row outlet. Otherwise start listening for new data.
   */
  _switchDataSource(dataSource) {
    this._data = [];
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
    if (this._renderChangeSubscription) {
      this._renderChangeSubscription.unsubscribe();
      this._renderChangeSubscription = null;
    }
    if (!dataSource) {
      if (this._dataDiffer) {
        this._dataDiffer.diff([]);
      }
      if (this._rowOutlet) {
        this._rowOutlet.viewContainer.clear();
      }
    }
    this._dataSource = dataSource;
  }
  /** Set up a subscription for the data provided by the data source. */
  _observeRenderChanges() {
    if (!this.dataSource) {
      return;
    }
    let dataStream;
    if (isDataSource(this.dataSource)) {
      dataStream = this.dataSource.connect(this);
    } else if (isObservable(this.dataSource)) {
      dataStream = this.dataSource;
    } else if (Array.isArray(this.dataSource)) {
      dataStream = of(this.dataSource);
    }
    if (dataStream === void 0 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableUnknownDataSourceError();
    }
    this._renderChangeSubscription = dataStream.pipe(takeUntil(this._onDestroy)).subscribe((data) => {
      this._data = data || [];
      this.renderRows();
    });
  }
  /**
   * Clears any existing content in the header row outlet and creates a new embedded view
   * in the outlet using the header row definition.
   */
  _forceRenderHeaderRows() {
    if (this._headerRowOutlet.viewContainer.length > 0) {
      this._headerRowOutlet.viewContainer.clear();
    }
    this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
    this.updateStickyHeaderRowStyles();
  }
  /**
   * Clears any existing content in the footer row outlet and creates a new embedded view
   * in the outlet using the footer row definition.
   */
  _forceRenderFooterRows() {
    if (this._footerRowOutlet.viewContainer.length > 0) {
      this._footerRowOutlet.viewContainer.clear();
    }
    this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
    this.updateStickyFooterRowStyles();
  }
  /** Adds the sticky column styles for the rows according to the columns' stick states. */
  _addStickyColumnStyles(rows, rowDef) {
    const columnDefs = Array.from(rowDef?.columns || []).map((columnName) => {
      const columnDef = this._columnDefsByName.get(columnName);
      if (!columnDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnName);
      }
      return columnDef;
    });
    const stickyStartStates = columnDefs.map((columnDef) => columnDef.sticky);
    const stickyEndStates = columnDefs.map((columnDef) => columnDef.stickyEnd);
    this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
  }
  /** Gets the list of rows that have been rendered in the row outlet. */
  _getRenderedRows(rowOutlet) {
    const renderedRows = [];
    for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
      const viewRef = rowOutlet.viewContainer.get(i);
      renderedRows.push(viewRef.rootNodes[0]);
    }
    return renderedRows;
  }
  /**
   * Get the matching row definitions that should be used for this row data. If there is only
   * one row definition, it is returned. Otherwise, find the row definitions that has a when
   * predicate that returns true with the data. If none return true, return the default row
   * definition.
   */
  _getRowDefs(data, dataIndex) {
    if (this._rowDefs.length == 1) {
      return [this._rowDefs[0]];
    }
    let rowDefs = [];
    if (this.multiTemplateDataRows) {
      rowDefs = this._rowDefs.filter((def) => !def.when || def.when(dataIndex, data));
    } else {
      let rowDef = this._rowDefs.find((def) => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
      if (rowDef) {
        rowDefs.push(rowDef);
      }
    }
    if (!rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingMatchingRowDefError(data);
    }
    return rowDefs;
  }
  _getEmbeddedViewArgs(renderRow, index) {
    const rowDef = renderRow.rowDef;
    const context = {
      $implicit: renderRow.data
    };
    return {
      templateRef: rowDef.template,
      context,
      index
    };
  }
  /**
   * Creates a new row template in the outlet and fills it with the set of cell templates.
   * Optionally takes a context to provide to the row and cells, as well as an optional index
   * of where to place the new row template in the outlet.
   */
  _renderRow(outlet, rowDef, index, context = {}) {
    const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
    this._renderCellTemplateForItem(rowDef, context);
    return view;
  }
  _renderCellTemplateForItem(rowDef, context) {
    for (let cellTemplate of this._getCellTemplates(rowDef)) {
      if (CdkCellOutlet.mostRecentCellOutlet) {
        CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Updates the index-related context for each row to reflect any changes in the index of the rows,
   * e.g. first/last/even/odd.
   */
  _updateRowIndexContext() {
    const viewContainer = this._rowOutlet.viewContainer;
    for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
      const viewRef = viewContainer.get(renderIndex);
      const context = viewRef.context;
      context.count = count;
      context.first = renderIndex === 0;
      context.last = renderIndex === count - 1;
      context.even = renderIndex % 2 === 0;
      context.odd = !context.even;
      if (this.multiTemplateDataRows) {
        context.dataIndex = this._renderRows[renderIndex].dataIndex;
        context.renderIndex = renderIndex;
      } else {
        context.index = this._renderRows[renderIndex].dataIndex;
      }
    }
  }
  /** Gets the column definitions for the provided row def. */
  _getCellTemplates(rowDef) {
    if (!rowDef || !rowDef.columns) {
      return [];
    }
    return Array.from(rowDef.columns, (columnId) => {
      const column = this._columnDefsByName.get(columnId);
      if (!column && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnId);
      }
      return rowDef.extractCellTemplate(column);
    });
  }
  /**
   * Forces a re-render of the data rows. Should be called in cases where there has been an input
   * change that affects the evaluation of which rows should be rendered, e.g. toggling
   * `multiTemplateDataRows` or adding/removing row definitions.
   */
  _forceRenderDataRows() {
    this._dataDiffer.diff([]);
    this._rowOutlet.viewContainer.clear();
    this.renderRows();
  }
  /**
   * Checks if there has been a change in sticky states since last check and applies the correct
   * sticky styles. Since checking resets the "dirty" state, this should only be performed once
   * during a change detection and after the inputs are settled (after content check).
   */
  _checkStickyStates() {
    const stickyCheckReducer = (acc, d) => {
      return acc || d.hasStickyChanged();
    };
    if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyHeaderRowStyles();
    }
    if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyFooterRowStyles();
    }
    if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
      this._stickyColumnStylesNeedReset = true;
      this.updateStickyColumnStyles();
    }
  }
  /**
   * Creates the sticky styler that will be used for sticky rows and columns. Listens
   * for directionality changes and provides the latest direction to the styler. Re-applies column
   * stickiness when directionality changes.
   */
  _setupStickyStyler() {
    const direction = this._dir ? this._dir.value : "ltr";
    this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, this._platform.isBrowser, this.needsPositionStickyOnElement, direction, this._stickyPositioningListener, this._injector);
    (this._dir ? this._dir.change : of()).pipe(takeUntil(this._onDestroy)).subscribe((value) => {
      this._stickyStyler.direction = value;
      this.updateStickyColumnStyles();
    });
  }
  /** Filters definitions that belong to this table from a QueryList. */
  _getOwnDefs(items) {
    return items.filter((item) => !item._table || item._table === this);
  }
  /** Creates or removes the no data row, depending on whether any data is being shown. */
  _updateNoDataRow() {
    const noDataRow = this._customNoDataRow || this._noDataRow;
    if (!noDataRow) {
      return;
    }
    const shouldShow = this._rowOutlet.viewContainer.length === 0;
    if (shouldShow === this._isShowingNoDataRow) {
      return;
    }
    const container = this._noDataRowOutlet.viewContainer;
    if (shouldShow) {
      const view = container.createEmbeddedView(noDataRow.templateRef);
      const rootNode = view.rootNodes[0];
      if (view.rootNodes.length === 1 && rootNode?.nodeType === this._document.ELEMENT_NODE) {
        rootNode.setAttribute("role", "row");
        rootNode.classList.add(noDataRow._contentClassName);
      }
    } else {
      container.clear();
    }
    this._isShowingNoDataRow = shouldShow;
    this._changeDetectorRef.markForCheck();
  }
  static \u0275fac = function CdkTable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTable)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkTable,
    selectors: [["cdk-table"], ["table", "cdk-table", ""]],
    contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkNoDataRow, 5);
        \u0275\u0275contentQuery(dirIndex, CdkColumnDef, 5);
        \u0275\u0275contentQuery(dirIndex, CdkRowDef, 5);
        \u0275\u0275contentQuery(dirIndex, CdkHeaderRowDef, 5);
        \u0275\u0275contentQuery(dirIndex, CdkFooterRowDef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._noDataRow = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentColumnDefs = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentRowDefs = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentHeaderRowDefs = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentFooterRowDefs = _t);
      }
    },
    hostAttrs: [1, "cdk-table"],
    hostVars: 2,
    hostBindings: function CdkTable_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-table-fixed-layout", ctx.fixedLayout);
      }
    },
    inputs: {
      trackBy: "trackBy",
      dataSource: "dataSource",
      multiTemplateDataRows: [2, "multiTemplateDataRows", "multiTemplateDataRows", booleanAttribute],
      fixedLayout: [2, "fixedLayout", "fixedLayout", booleanAttribute]
    },
    outputs: {
      contentChanged: "contentChanged"
    },
    exportAs: ["cdkTable"],
    features: [\u0275\u0275ProvidersFeature([
      {
        provide: CDK_TABLE,
        useExisting: _CdkTable
      },
      {
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _DisposeViewRepeaterStrategy
      },
      // Prevent nested tables from seeing this table's StickyPositioningListener.
      {
        provide: STICKY_POSITIONING_LISTENER,
        useValue: null
      }
    ])],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 2,
    consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
    template: function CdkTable_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275projection(0);
        \u0275\u0275projection(1, 1);
        \u0275\u0275conditionalCreate(2, CdkTable_Conditional_2_Template, 1, 0);
        \u0275\u0275conditionalCreate(3, CdkTable_Conditional_3_Template, 7, 0)(4, CdkTable_Conditional_4_Template, 4, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._isServer ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isNativeHtmlTable ? 3 : 4);
      }
    },
    dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
    styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTable, [{
    type: Component,
    args: [{
      selector: "cdk-table, table[cdk-table]",
      exportAs: "cdkTable",
      template: `
    <ng-content select="caption"/>
    <ng-content select="colgroup, col"/>

    <!--
      Unprojected content throws a hydration error so we need this to capture it.
      It gets removed on the client so it doesn't affect the layout.
    -->
    @if (_isServer) {
      <ng-content/>
    }

    @if (_isNativeHtmlTable) {
      <thead role="rowgroup">
        <ng-container headerRowOutlet/>
      </thead>
      <tbody role="rowgroup">
        <ng-container rowOutlet/>
        <ng-container noDataRowOutlet/>
      </tbody>
      <tfoot role="rowgroup">
        <ng-container footerRowOutlet/>
      </tfoot>
    } @else {
      <ng-container headerRowOutlet/>
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
      <ng-container footerRowOutlet/>
    }
  `,
      host: {
        "class": "cdk-table",
        "[class.cdk-table-fixed-layout]": "fixedLayout"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [
        {
          provide: CDK_TABLE,
          useExisting: CdkTable
        },
        {
          provide: _VIEW_REPEATER_STRATEGY,
          useClass: _DisposeViewRepeaterStrategy
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }
      ],
      imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"]
    }]
  }], () => [], {
    trackBy: [{
      type: Input
    }],
    dataSource: [{
      type: Input
    }],
    multiTemplateDataRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fixedLayout: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contentChanged: [{
      type: Output
    }],
    _contentColumnDefs: [{
      type: ContentChildren,
      args: [CdkColumnDef, {
        descendants: true
      }]
    }],
    _contentRowDefs: [{
      type: ContentChildren,
      args: [CdkRowDef, {
        descendants: true
      }]
    }],
    _contentHeaderRowDefs: [{
      type: ContentChildren,
      args: [CdkHeaderRowDef, {
        descendants: true
      }]
    }],
    _contentFooterRowDefs: [{
      type: ContentChildren,
      args: [CdkFooterRowDef, {
        descendants: true
      }]
    }],
    _noDataRow: [{
      type: ContentChild,
      args: [CdkNoDataRow]
    }]
  });
})();
function mergeArrayAndSet(array, set) {
  return array.concat(Array.from(set));
}
function closestTableSection(outlet, section) {
  const uppercaseSection = section.toUpperCase();
  let current = outlet.viewContainer.element.nativeElement;
  while (current) {
    const nodeName = current.nodeType === 1 ? current.nodeName : null;
    if (nodeName === uppercaseSection) {
      return current;
    } else if (nodeName === "TABLE") {
      break;
    }
    current = current.parentNode;
  }
  return null;
}
var CdkTextColumn = class _CdkTextColumn {
  _table = inject(CdkTable, {
    optional: true
  });
  _options = inject(TEXT_COLUMN_OPTIONS, {
    optional: true
  });
  /** Column name that should be used to reference this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
    this._syncColumnDefName();
  }
  _name;
  /**
   * Text label that should be used for the column header. If this property is not
   * set, the header text will default to the column name with its first letter capitalized.
   */
  headerText;
  /**
   * Accessor function to retrieve the data rendered for each cell. If this
   * property is not set, the data cells will render the value found in the data's property matching
   * the column's name. For example, if the column is named `id`, then the rendered value will be
   * value defined by the data's `id` property.
   */
  dataAccessor;
  /** Alignment of the cell values. */
  justify = "start";
  /** @docs-private */
  columnDef;
  /**
   * The column cell is provided to the column during `ngOnInit` with a static query.
   * Normally, this will be retrieved by the column using `ContentChild`, but that assumes the
   * column definition was provided in the same view as the table, which is not the case with this
   * component.
   * @docs-private
   */
  cell;
  /**
   * The column headerCell is provided to the column during `ngOnInit` with a static query.
   * Normally, this will be retrieved by the column using `ContentChild`, but that assumes the
   * column definition was provided in the same view as the table, which is not the case with this
   * component.
   * @docs-private
   */
  headerCell;
  constructor() {
    this._options = this._options || {};
  }
  ngOnInit() {
    this._syncColumnDefName();
    if (this.headerText === void 0) {
      this.headerText = this._createDefaultHeaderText();
    }
    if (!this.dataAccessor) {
      this.dataAccessor = this._options.defaultDataAccessor || ((data, name) => data[name]);
    }
    if (this._table) {
      this.columnDef.cell = this.cell;
      this.columnDef.headerCell = this.headerCell;
      this._table.addColumnDef(this.columnDef);
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getTableTextColumnMissingParentTableError();
    }
  }
  ngOnDestroy() {
    if (this._table) {
      this._table.removeColumnDef(this.columnDef);
    }
  }
  /**
   * Creates a default header text. Use the options' header text transformation function if one
   * has been provided. Otherwise simply capitalize the column name.
   */
  _createDefaultHeaderText() {
    const name = this.name;
    if (!name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableTextColumnMissingNameError();
    }
    if (this._options && this._options.defaultHeaderTextTransform) {
      return this._options.defaultHeaderTextTransform(name);
    }
    return name[0].toUpperCase() + name.slice(1);
  }
  /** Synchronizes the column definition name with the text column name. */
  _syncColumnDefName() {
    if (this.columnDef) {
      this.columnDef.name = this.name;
    }
  }
  static \u0275fac = function CdkTextColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTextColumn)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkTextColumn,
    selectors: [["cdk-text-column"]],
    viewQuery: function CdkTextColumn_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkColumnDef, 7);
        \u0275\u0275viewQuery(CdkCellDef, 7);
        \u0275\u0275viewQuery(CdkHeaderCellDef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.columnDef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cell = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCell = _t.first);
      }
    },
    inputs: {
      name: "name",
      headerText: "headerText",
      dataAccessor: "dataAccessor",
      justify: "justify"
    },
    decls: 3,
    vars: 0,
    consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
    template: function CdkTextColumn_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainerStart(0, 0);
        \u0275\u0275template(1, CdkTextColumn_th_1_Template, 2, 3, "th", 1)(2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
        \u0275\u0275elementContainerEnd();
      }
    },
    dependencies: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextColumn, [{
    type: Component,
    args: [{
      selector: "cdk-text-column",
      template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell]
    }]
  }], () => [], {
    name: [{
      type: Input
    }],
    headerText: [{
      type: Input
    }],
    dataAccessor: [{
      type: Input
    }],
    justify: [{
      type: Input
    }],
    columnDef: [{
      type: ViewChild,
      args: [CdkColumnDef, {
        static: true
      }]
    }],
    cell: [{
      type: ViewChild,
      args: [CdkCellDef, {
        static: true
      }]
    }],
    headerCell: [{
      type: ViewChild,
      args: [CdkHeaderCellDef, {
        static: true
      }]
    }]
  });
})();
var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];
var CdkTableModule = class _CdkTableModule {
  static \u0275fac = function CdkTableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkTableModule,
    imports: [ScrollingModule, CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet],
    exports: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ScrollingModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTableModule, [{
    type: NgModule,
    args: [{
      exports: EXPORTED_DECLARATIONS,
      imports: [ScrollingModule, ...EXPORTED_DECLARATIONS]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/table.mjs
var _c02 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c12 = ["caption", "colgroup, col", "*"];
function MatTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function MatTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead", 0);
    \u0275\u0275elementContainer(1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tbody", 2);
    \u0275\u0275elementContainer(3, 3)(4, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tfoot", 0);
    \u0275\u0275elementContainer(6, 5);
    \u0275\u0275elementEnd();
  }
}
function MatTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1)(1, 3)(2, 4)(3, 5);
  }
}
function MatTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function MatTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
var MatRecycleRows = class _MatRecycleRows {
  static \u0275fac = function MatRecycleRows_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRecycleRows)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatRecycleRows,
    selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _RecycleViewRepeaterStrategy
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRecycleRows, [{
    type: Directive,
    args: [{
      selector: "mat-table[recycleRows], table[mat-table][recycleRows]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }]
    }]
  }], null, null);
})();
var MatTable = class _MatTable extends CdkTable {
  /** Overrides the sticky CSS class set by the `CdkTable`. */
  stickyCssClass = "mat-mdc-table-sticky";
  /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
  needsPositionStickyOnElement = false;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTable_BaseFactory;
    return function MatTable_Factory(__ngFactoryType__) {
      return (\u0275MatTable_BaseFactory || (\u0275MatTable_BaseFactory = \u0275\u0275getInheritedFactory(_MatTable)))(__ngFactoryType__ || _MatTable);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTable,
    selectors: [["mat-table"], ["table", "mat-table", ""]],
    hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"],
    hostVars: 2,
    hostBindings: function MatTable_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mdc-table-fixed-layout", ctx.fixedLayout);
      }
    },
    exportAs: ["matTable"],
    features: [\u0275\u0275ProvidersFeature([
      {
        provide: CdkTable,
        useExisting: _MatTable
      },
      {
        provide: CDK_TABLE,
        useExisting: _MatTable
      },
      // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
      //  is only included in the build if used.
      {
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _DisposeViewRepeaterStrategy
      },
      // Prevent nested tables from seeing this table's StickyPositioningListener.
      {
        provide: STICKY_POSITIONING_LISTENER,
        useValue: null
      }
    ]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c12,
    decls: 5,
    vars: 2,
    consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["role", "rowgroup", 1, "mdc-data-table__content"], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
    template: function MatTable_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275projection(0);
        \u0275\u0275projection(1, 1);
        \u0275\u0275conditionalCreate(2, MatTable_Conditional_2_Template, 1, 0);
        \u0275\u0275conditionalCreate(3, MatTable_Conditional_3_Template, 7, 0)(4, MatTable_Conditional_4_Template, 4, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._isServer ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isNativeHtmlTable ? 3 : 4);
      }
    },
    dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
    styles: [".mat-mdc-table-sticky{position:sticky !important}mat-table{display:block}mat-header-row{min-height:var(--mat-table-header-container-height, 56px)}mat-row{min-height:var(--mat-table-row-item-container-height, 52px)}mat-footer-row{min-height:var(--mat-table-footer-container-height, 52px)}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color, var(--mat-sys-surface))}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell{text-align:right}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));line-height:var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));font-weight:var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500))}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mat-mdc-header-cell{text-align:right}.mdc-data-table__row:last-child>.mat-mdc-header-cell{border-bottom:none}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));line-height:inherit}.mdc-data-table__row:last-child>.mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking))}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTable, [{
    type: Component,
    args: [{
      selector: "mat-table, table[mat-table]",
      exportAs: "matTable",
      template: `
    <ng-content select="caption"/>
    <ng-content select="colgroup, col"/>

    <!--
      Unprojected content throws a hydration error so we need this to capture it.
      It gets removed on the client so it doesn't affect the layout.
    -->
    @if (_isServer) {
      <ng-content/>
    }

    @if (_isNativeHtmlTable) {
      <thead role="rowgroup">
        <ng-container headerRowOutlet/>
      </thead>
      <tbody class="mdc-data-table__content" role="rowgroup">
        <ng-container rowOutlet/>
        <ng-container noDataRowOutlet/>
      </tbody>
      <tfoot role="rowgroup">
        <ng-container footerRowOutlet/>
      </tfoot>
    } @else {
      <ng-container headerRowOutlet/>
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
      <ng-container footerRowOutlet/>
    }
  `,
      host: {
        "class": "mat-mdc-table mdc-data-table__table",
        "[class.mdc-table-fixed-layout]": "fixedLayout"
      },
      providers: [
        {
          provide: CdkTable,
          useExisting: MatTable
        },
        {
          provide: CDK_TABLE,
          useExisting: MatTable
        },
        // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
        //  is only included in the build if used.
        {
          provide: _VIEW_REPEATER_STRATEGY,
          useClass: _DisposeViewRepeaterStrategy
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }
      ],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".mat-mdc-table-sticky{position:sticky !important}mat-table{display:block}mat-header-row{min-height:var(--mat-table-header-container-height, 56px)}mat-row{min-height:var(--mat-table-row-item-container-height, 52px)}mat-footer-row{min-height:var(--mat-table-footer-container-height, 52px)}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color, var(--mat-sys-surface))}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell{text-align:right}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));line-height:var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));font-weight:var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500))}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mat-mdc-header-cell{text-align:right}.mdc-data-table__row:last-child>.mat-mdc-header-cell{border-bottom:none}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));line-height:inherit}.mdc-data-table__row:last-child>.mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking))}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}\n"]
    }]
  }], null, null);
})();
var MatCellDef = class _MatCellDef extends CdkCellDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatCellDef_BaseFactory;
    return function MatCellDef_Factory(__ngFactoryType__) {
      return (\u0275MatCellDef_BaseFactory || (\u0275MatCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatCellDef)))(__ngFactoryType__ || _MatCellDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCellDef,
    selectors: [["", "matCellDef", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkCellDef,
      useExisting: _MatCellDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCellDef, [{
    type: Directive,
    args: [{
      selector: "[matCellDef]",
      providers: [{
        provide: CdkCellDef,
        useExisting: MatCellDef
      }]
    }]
  }], null, null);
})();
var MatHeaderCellDef = class _MatHeaderCellDef extends CdkHeaderCellDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderCellDef_BaseFactory;
    return function MatHeaderCellDef_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderCellDef_BaseFactory || (\u0275MatHeaderCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderCellDef)))(__ngFactoryType__ || _MatHeaderCellDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatHeaderCellDef,
    selectors: [["", "matHeaderCellDef", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkHeaderCellDef,
      useExisting: _MatHeaderCellDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderCellDef]",
      providers: [{
        provide: CdkHeaderCellDef,
        useExisting: MatHeaderCellDef
      }]
    }]
  }], null, null);
})();
var MatFooterCellDef = class _MatFooterCellDef extends CdkFooterCellDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterCellDef_BaseFactory;
    return function MatFooterCellDef_Factory(__ngFactoryType__) {
      return (\u0275MatFooterCellDef_BaseFactory || (\u0275MatFooterCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterCellDef)))(__ngFactoryType__ || _MatFooterCellDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFooterCellDef,
    selectors: [["", "matFooterCellDef", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkFooterCellDef,
      useExisting: _MatFooterCellDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterCellDef]",
      providers: [{
        provide: CdkFooterCellDef,
        useExisting: MatFooterCellDef
      }]
    }]
  }], null, null);
})();
var MatColumnDef = class _MatColumnDef extends CdkColumnDef {
  /** Unique name for this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  /**
   * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
   * In the future, this will only add "mat-column-" and columnCssClassName
   * will change from type string[] to string.
   * @docs-private
   */
  _updateColumnCssClassName() {
    super._updateColumnCssClassName();
    this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatColumnDef_BaseFactory;
    return function MatColumnDef_Factory(__ngFactoryType__) {
      return (\u0275MatColumnDef_BaseFactory || (\u0275MatColumnDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatColumnDef)))(__ngFactoryType__ || _MatColumnDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatColumnDef,
    selectors: [["", "matColumnDef", ""]],
    inputs: {
      name: [0, "matColumnDef", "name"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkColumnDef,
      useExisting: _MatColumnDef
    }, {
      provide: "MAT_SORT_HEADER_COLUMN_DEF",
      useExisting: _MatColumnDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatColumnDef, [{
    type: Directive,
    args: [{
      selector: "[matColumnDef]",
      providers: [{
        provide: CdkColumnDef,
        useExisting: MatColumnDef
      }, {
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: MatColumnDef
      }]
    }]
  }], null, {
    name: [{
      type: Input,
      args: ["matColumnDef"]
    }]
  });
})();
var MatHeaderCell = class _MatHeaderCell extends CdkHeaderCell {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderCell_BaseFactory;
    return function MatHeaderCell_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderCell_BaseFactory || (\u0275MatHeaderCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderCell)))(__ngFactoryType__ || _MatHeaderCell);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatHeaderCell,
    selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
    hostAttrs: ["role", "columnheader", 1, "mat-mdc-header-cell", "mdc-data-table__header-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCell, [{
    type: Directive,
    args: [{
      selector: "mat-header-cell, th[mat-header-cell]",
      host: {
        "class": "mat-mdc-header-cell mdc-data-table__header-cell",
        "role": "columnheader"
      }
    }]
  }], null, null);
})();
var MatFooterCell = class _MatFooterCell extends CdkFooterCell {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterCell_BaseFactory;
    return function MatFooterCell_Factory(__ngFactoryType__) {
      return (\u0275MatFooterCell_BaseFactory || (\u0275MatFooterCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterCell)))(__ngFactoryType__ || _MatFooterCell);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFooterCell,
    selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
    hostAttrs: [1, "mat-mdc-footer-cell", "mdc-data-table__cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCell, [{
    type: Directive,
    args: [{
      selector: "mat-footer-cell, td[mat-footer-cell]",
      host: {
        "class": "mat-mdc-footer-cell mdc-data-table__cell"
      }
    }]
  }], null, null);
})();
var MatCell = class _MatCell extends CdkCell {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatCell_BaseFactory;
    return function MatCell_Factory(__ngFactoryType__) {
      return (\u0275MatCell_BaseFactory || (\u0275MatCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatCell)))(__ngFactoryType__ || _MatCell);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCell,
    selectors: [["mat-cell"], ["td", "mat-cell", ""]],
    hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCell, [{
    type: Directive,
    args: [{
      selector: "mat-cell, td[mat-cell]",
      host: {
        "class": "mat-mdc-cell mdc-data-table__cell"
      }
    }]
  }], null, null);
})();
var ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var MatHeaderRowDef = class _MatHeaderRowDef extends CdkHeaderRowDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderRowDef_BaseFactory;
    return function MatHeaderRowDef_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderRowDef_BaseFactory || (\u0275MatHeaderRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderRowDef)))(__ngFactoryType__ || _MatHeaderRowDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatHeaderRowDef,
    selectors: [["", "matHeaderRowDef", ""]],
    inputs: {
      columns: [0, "matHeaderRowDef", "columns"],
      sticky: [2, "matHeaderRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkHeaderRowDef,
      useExisting: _MatHeaderRowDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderRowDef]",
      providers: [{
        provide: CdkHeaderRowDef,
        useExisting: MatHeaderRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matHeaderRowDef"
      }, {
        name: "sticky",
        alias: "matHeaderRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  }], null, null);
})();
var MatFooterRowDef = class _MatFooterRowDef extends CdkFooterRowDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterRowDef_BaseFactory;
    return function MatFooterRowDef_Factory(__ngFactoryType__) {
      return (\u0275MatFooterRowDef_BaseFactory || (\u0275MatFooterRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterRowDef)))(__ngFactoryType__ || _MatFooterRowDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFooterRowDef,
    selectors: [["", "matFooterRowDef", ""]],
    inputs: {
      columns: [0, "matFooterRowDef", "columns"],
      sticky: [2, "matFooterRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkFooterRowDef,
      useExisting: _MatFooterRowDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterRowDef]",
      providers: [{
        provide: CdkFooterRowDef,
        useExisting: MatFooterRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matFooterRowDef"
      }, {
        name: "sticky",
        alias: "matFooterRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  }], null, null);
})();
var MatRowDef = class _MatRowDef extends CdkRowDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatRowDef_BaseFactory;
    return function MatRowDef_Factory(__ngFactoryType__) {
      return (\u0275MatRowDef_BaseFactory || (\u0275MatRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatRowDef)))(__ngFactoryType__ || _MatRowDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatRowDef,
    selectors: [["", "matRowDef", ""]],
    inputs: {
      columns: [0, "matRowDefColumns", "columns"],
      when: [0, "matRowDefWhen", "when"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkRowDef,
      useExisting: _MatRowDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRowDef, [{
    type: Directive,
    args: [{
      selector: "[matRowDef]",
      providers: [{
        provide: CdkRowDef,
        useExisting: MatRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matRowDefColumns"
      }, {
        name: "when",
        alias: "matRowDefWhen"
      }]
    }]
  }], null, null);
})();
var MatHeaderRow = class _MatHeaderRow extends CdkHeaderRow {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderRow_BaseFactory;
    return function MatHeaderRow_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderRow_BaseFactory || (\u0275MatHeaderRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderRow)))(__ngFactoryType__ || _MatHeaderRow);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatHeaderRow,
    selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-mdc-header-row", "mdc-data-table__header-row"],
    exportAs: ["matHeaderRow"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkHeaderRow,
      useExisting: _MatHeaderRow
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatHeaderRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRow, [{
    type: Component,
    args: [{
      selector: "mat-header-row, tr[mat-header-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-header-row mdc-data-table__header-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matHeaderRow",
      providers: [{
        provide: CdkHeaderRow,
        useExisting: MatHeaderRow
      }],
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var MatFooterRow = class _MatFooterRow extends CdkFooterRow {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterRow_BaseFactory;
    return function MatFooterRow_Factory(__ngFactoryType__) {
      return (\u0275MatFooterRow_BaseFactory || (\u0275MatFooterRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterRow)))(__ngFactoryType__ || _MatFooterRow);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatFooterRow,
    selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-mdc-footer-row", "mdc-data-table__row"],
    exportAs: ["matFooterRow"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkFooterRow,
      useExisting: _MatFooterRow
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatFooterRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRow, [{
    type: Component,
    args: [{
      selector: "mat-footer-row, tr[mat-footer-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-footer-row mdc-data-table__row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matFooterRow",
      providers: [{
        provide: CdkFooterRow,
        useExisting: MatFooterRow
      }],
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var MatRow = class _MatRow extends CdkRow {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatRow_BaseFactory;
    return function MatRow_Factory(__ngFactoryType__) {
      return (\u0275MatRow_BaseFactory || (\u0275MatRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatRow)))(__ngFactoryType__ || _MatRow);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatRow,
    selectors: [["mat-row"], ["tr", "mat-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
    exportAs: ["matRow"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkRow,
      useExisting: _MatRow
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRow, [{
    type: Component,
    args: [{
      selector: "mat-row, tr[mat-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-row mdc-data-table__row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matRow",
      providers: [{
        provide: CdkRow,
        useExisting: MatRow
      }],
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var MatNoDataRow = class _MatNoDataRow extends CdkNoDataRow {
  _contentClassName = "mat-mdc-no-data-row";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatNoDataRow_BaseFactory;
    return function MatNoDataRow_Factory(__ngFactoryType__) {
      return (\u0275MatNoDataRow_BaseFactory || (\u0275MatNoDataRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatNoDataRow)))(__ngFactoryType__ || _MatNoDataRow);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatNoDataRow,
    selectors: [["ng-template", "matNoDataRow", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkNoDataRow,
      useExisting: _MatNoDataRow
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[matNoDataRow]",
      providers: [{
        provide: CdkNoDataRow,
        useExisting: MatNoDataRow
      }]
    }]
  }], null, null);
})();
var MatTextColumn = class _MatTextColumn extends CdkTextColumn {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTextColumn_BaseFactory;
    return function MatTextColumn_Factory(__ngFactoryType__) {
      return (\u0275MatTextColumn_BaseFactory || (\u0275MatTextColumn_BaseFactory = \u0275\u0275getInheritedFactory(_MatTextColumn)))(__ngFactoryType__ || _MatTextColumn);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTextColumn,
    selectors: [["mat-text-column"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 0,
    consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
    template: function MatTextColumn_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainerStart(0, 0);
        \u0275\u0275template(1, MatTextColumn_th_1_Template, 2, 3, "th", 1)(2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
        \u0275\u0275elementContainerEnd();
      }
    },
    dependencies: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTextColumn, [{
    type: Component,
    args: [{
      selector: "mat-text-column",
      template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell]
    }]
  }], null, null);
})();
var EXPORTED_DECLARATIONS2 = [
  // Table
  MatTable,
  MatRecycleRows,
  // Template defs
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatColumnDef,
  MatCellDef,
  MatRowDef,
  MatFooterCellDef,
  MatFooterRowDef,
  // Cell directives
  MatHeaderCell,
  MatCell,
  MatFooterCell,
  // Row directives
  MatHeaderRow,
  MatRow,
  MatFooterRow,
  MatNoDataRow,
  MatTextColumn
];
var MatTableModule = class _MatTableModule {
  static \u0275fac = function MatTableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatTableModule,
    imports: [
      MatCommonModule,
      CdkTableModule,
      // Table
      MatTable,
      MatRecycleRows,
      // Template defs
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatFooterCellDef,
      MatFooterRowDef,
      // Cell directives
      MatHeaderCell,
      MatCell,
      MatFooterCell,
      // Row directives
      MatHeaderRow,
      MatRow,
      MatFooterRow,
      MatNoDataRow,
      MatTextColumn
    ],
    exports: [
      MatCommonModule,
      // Table
      MatTable,
      MatRecycleRows,
      // Template defs
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatFooterCellDef,
      MatFooterRowDef,
      // Cell directives
      MatHeaderCell,
      MatCell,
      MatFooterCell,
      // Row directives
      MatHeaderRow,
      MatRow,
      MatFooterRow,
      MatNoDataRow,
      MatTextColumn
    ]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, CdkTableModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTableModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkTableModule, ...EXPORTED_DECLARATIONS2],
      exports: [MatCommonModule, EXPORTED_DECLARATIONS2]
    }]
  }], null, null);
})();

// apps/concierge/src/app/surveys/question.component.ts
var _c03 = ["container_el"];
function QuestionComponent_Conditional_2_Conditional_4_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", item_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.name, " ");
  }
}
function QuestionComponent_Conditional_2_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, QuestionComponent_Conditional_2_Conditional_4_For_3_Conditional_0_Template, 2, 2, "mat-option", 10);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275conditional(item_r4.id[0] !== "0" ? 0 : -1);
  }
}
function QuestionComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 8)(1, "mat-select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function QuestionComponent_Conditional_2_Conditional_4_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.question().type, $event) || (ctx_r1.question().type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(2, QuestionComponent_Conditional_2_Conditional_4_For_3_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "settings-toggle", 6);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function QuestionComponent_Conditional_2_Conditional_4_Template_settings_toggle_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.question().required, $event) || (ctx_r1.question().required = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.question().type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.type_options);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.question().required);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(5, 3, "COMMON.REQUIRED"));
  }
}
function QuestionComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "settings-toggle", 6);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function QuestionComponent_Conditional_2_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.preview.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 7);
    \u0275\u0275conditionalCreate(4, QuestionComponent_Conditional_2_Conditional_4_Template, 6, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.preview())("name", \u0275\u0275pipeBind1(2, 3, "COMMON.PREVIEW"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.preview() ? 4 : -1);
  }
}
function QuestionComponent_Conditional_4_mat_error_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.SURVEY_QUESTION_ENTER_ERROR"), " ");
  }
}
function QuestionComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 4)(1, "input", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function QuestionComponent_Conditional_4_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.question().title, $event) || (ctx_r1.question().title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, QuestionComponent_Conditional_4_mat_error_3_Template, 3, 3, "mat-error", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 3, "APP.CONCIERGE.SURVEY_QUESTION_ENTER"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.question().title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_4_0 = ctx_r1.question()) == null ? null : tmp_4_0.title));
  }
}
function QuestionComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate("Untitled Question");
  }
}
function QuestionComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, QuestionComponent_Conditional_5_Conditional_2_Template, 2, 1, "span", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.question().title);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.question().title ? 2 : -1);
  }
}
function QuestionComponent_Conditional_6_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-form-field", 17);
    \u0275\u0275element(2, "textarea", 18);
    \u0275\u0275elementStart(3, "mat-hint");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "APP.CONCIERGE.SURVEY_QUESTION_HINT_MULTILINE"));
  }
}
function QuestionComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, QuestionComponent_Conditional_6_div_0_Template, 6, 3, "div", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.preview());
  }
}
function QuestionComponent_Conditional_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-form-field", 17);
    \u0275\u0275element(2, "input", 19);
    \u0275\u0275elementStart(3, "mat-hint");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "APP.CONCIERGE.SURVEY_QUESTION_HINT_LINE"));
  }
}
function QuestionComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, QuestionComponent_Conditional_7_div_0_Template, 6, 3, "div", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.preview());
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 26)(4, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function QuestionComponent_Conditional_8_Conditional_0_Conditional_1_div_1_Template_input_ngModelChange_4_listener($event) {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(item_r8.text, $event) || (item_r8.text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function QuestionComponent_Conditional_8_Conditional_0_Conditional_1_div_1_Template_button_click_5_listener() {
      const i_r9 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteOption(i_r9));
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, " delete_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", i_r9 + 1, ". ");
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275interpolate1("item", i_r9));
    \u0275\u0275twoWayProperty("ngModel", item_r8.text);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, QuestionComponent_Conditional_8_Conditional_0_Conditional_1_div_1_Template, 8, 4, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 22);
    \u0275\u0275listener("click", function QuestionComponent_Conditional_8_Conditional_0_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addOption());
    });
    \u0275\u0275elementStart(3, "div", 23)(4, "icon");
    \u0275\u0275text(5, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Add option");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.question().choices);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_0_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275property("value", item_r10.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r10.text);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 17)(1, "mat-select", 31);
    \u0275\u0275template(2, QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_0_mat_option_2_Template, 2, 2, "mat-option", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.question().choices);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const choice_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(choice_r11.text);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_1_For_2_Template, 2, 1, "mat-checkbox", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.question().choices);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const choice_r12 = ctx.$implicit;
    \u0275\u0275property("value", choice_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(choice_r12.text);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "mat-radio-group")(2, "div", 29);
    \u0275\u0275repeaterCreate(3, QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_2_For_4_Template, 2, 2, "mat-radio-button", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.question().choices);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_0_Template, 3, 1, "mat-form-field", 17)(1, QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_1_Template, 3, 0, "div", 29)(2, QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_2_Template, 5, 0, "div", 30);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.is_dropdown ? 0 : ctx_r1.is_checkbox ? 1 : 2);
  }
}
function QuestionComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, QuestionComponent_Conditional_8_Conditional_0_Conditional_1_Template, 8, 1)(2, QuestionComponent_Conditional_8_Conditional_0_Conditional_2_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.preview() ? 1 : 2);
  }
}
function QuestionComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, QuestionComponent_Conditional_8_Conditional_0_Template, 3, 1, "div", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.question ? 0 : -1);
  }
}
function QuestionComponent_Conditional_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const idx_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", idx_r13, " ");
  }
}
function QuestionComponent_Conditional_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "a-counter", 37);
    \u0275\u0275twoWayListener("ngModelChange", function QuestionComponent_Conditional_9_div_4_Template_a_counter_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.question().max_rating, $event) || (ctx_r1.question().max_rating = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function QuestionComponent_Conditional_9_div_4_Template_a_counter_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rating_options = ctx_r1.generateArray($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("max", 10)("min", 3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.question().max_rating);
  }
}
function QuestionComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 33);
    \u0275\u0275repeaterCreate(2, QuestionComponent_Conditional_9_For_3_Template, 2, 1, "button", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, QuestionComponent_Conditional_9_div_4_Template, 2, 3, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.rating_options);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.preview());
  }
}
var _QuestionComponent = class _QuestionComponent {
  constructor() {
    this.is_card = input(true);
    this.preview = model(false);
    this.question = model(new Ve({ title: "", type: QuestionType.Single_Line_Text }));
    this.QuestionType = QuestionType;
    this.type_options = QuestionTypeOptions;
    this.rating_options = [1, 2, 3];
    this._container_el = viewChild("container_el");
  }
  get valid() {
    const q = this.question();
    if (!q?.title)
      return false;
    let is_valid = true;
    switch (q.type) {
      case QuestionType.Check_Box:
      case QuestionType.Radio_Group:
      case QuestionType.Drop_Down:
        const checkop = q.choices?.map((e) => !!e?.text?.length);
        is_valid = !!checkop?.length && checkop.reduce((acc, val) => acc && val);
        break;
      case QuestionType.Rating:
        is_valid = q.max_rating >= 3;
    }
    return is_valid;
  }
  get is_dropdown() {
    return this.question()?.type === QuestionType.Drop_Down;
  }
  get is_checkbox() {
    return this.question()?.type === QuestionType.Check_Box;
  }
  ngOnInit() {
    const q = this.question();
    if (!q?.choices)
      q.choices = [];
    if (!q.max_rating)
      q.max_rating = 3;
    this.rating_options = this.generateArray(q.max_rating);
  }
  ngAfterViewInit() {
    if (this.is_card()) {
      this._container_el().nativeElement.classList.add("border", "border-base-400", "bg-base-100", "shadow");
    }
  }
  addOption() {
    this.question.update((q) => {
      q.choices.push({ text: "" });
      return q;
    });
  }
  deleteOption(index) {
    this.question.update((q) => {
      q.choices.splice(index, 1);
      return q;
    });
  }
  generateArray(max) {
    return Array.from({ length: max }, (_, index) => index + 1);
  }
};
_QuestionComponent.\u0275fac = function QuestionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _QuestionComponent)();
};
_QuestionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionComponent, selectors: [["placeos-question"]], viewQuery: function QuestionComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._container_el, _c03, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { is_card: [1, "is_card"], preview: [1, "preview"], question: [1, "question"] }, outputs: { preview: "previewChange", question: "questionChange" }, decls: 10, vars: 7, consts: [["container_el", ""], [1, "flex", "w-full", "flex-col", "items-center", "justify-between", "px-4", "py-2"], [1, "flex", "w-full", "flex-row", "items-center", "justify-end", "space-x-4", "pb-2"], [1, "my-2", "flex", "w-full", "flex-col", "rounded", "border-base-200"], ["appearance", "outline", 1, "no-subscript", "mb-2", "w-full"], [1, "flex", "w-full", "flex-col"], [3, "ngModelChange", "ngModel", "name"], [1, "flex-1"], ["appearance", "outline", 1, "no-subscript"], [3, "ngModelChange", "ngModel"], [3, "value"], ["matInput", "", "type", "text", 3, "ngModelChange", "placeholder", "ngModel"], ["class", "input-error", 4, "ngIf"], [1, "input-error"], [1, "mb-4", "w-full", "text-xl"], [1, "mb-4", "w-full", "text-xl", "opacity-30"], ["class", "flex w-full flex-col", 4, "ngIf"], ["appearance", "outline"], ["matInput", "", "cols", "30", "rows", "5", "placeholder", "Enter option text"], ["matInput", "", "type", "text", "placeholder", "Enter option text"], [1, "mb-4", "flex", "w-full", "flex-col", "space-y-2", "pl-2"], ["class", "flex w-full flex-row items-center space-x-2", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "text-gray-800", "flex", "flex-row", "items-center"], [1, "flex", "w-full", "flex-row", "items-center", "space-x-2"], [1, "p-2", "font-mono"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", "type", "text", "placeholder", "Enter option text", 3, "ngModelChange", "ngModel", "name"], ["icon", "", "matRipple", "", 1, "h-12", "min-w-12", "rounded", "border", "border-error", "text-error", 3, "click"], [1, "grid", "grid-cols-1", "sm:grid-cols-2"], [1, "flex", "w-full", "flex-col", "pl-2"], ["placeholder", "Select an option"], [3, "value", 4, "ngFor", "ngForOf"], ["btn-grp", "", 1, "divide-x", "divide-secondary"], ["matRipple", "", 1, "h-12", "w-12", "border-y", "border-secondary", "first:rounded-l", "first:border-l", "last:rounded-r", "last:!border-r"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], [1, "mb-1", "w-40", 3, "ngModelChange", "max", "min", "ngModel"]], template: function QuestionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1, 0);
    \u0275\u0275conditionalCreate(2, QuestionComponent_Conditional_2_Template, 5, 5, "div", 2);
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275conditionalCreate(4, QuestionComponent_Conditional_4_Template, 4, 5, "mat-form-field", 4)(5, QuestionComponent_Conditional_5_Template, 3, 2);
    \u0275\u0275conditionalCreate(6, QuestionComponent_Conditional_6_Template, 1, 1, "div", 5)(7, QuestionComponent_Conditional_7_Template, 1, 1, "div", 5)(8, QuestionComponent_Conditional_8_Template, 1, 1)(9, QuestionComponent_Conditional_9_Template, 5, 1, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.is_card() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border", !ctx.is_card())("p-4", !ctx.is_card());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.preview() ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.question().type === ctx.QuestionType.Comment_Box ? 6 : ctx.question().type === ctx.QuestionType.Single_Line_Text ? 7 : ctx.question().type === ctx.QuestionType.Check_Box || ctx.question().type === ctx.QuestionType.Radio_Group || ctx.question().type === ctx.QuestionType.Drop_Down ? 8 : ctx.question().type === ctx.QuestionType.Rating ? 9 : -1);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  MatFormFieldModule,
  MatFormField,
  MatHint,
  MatError,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatInputModule,
  MatInput,
  MatRadioModule,
  MatRadioGroup,
  MatRadioButton,
  MatCheckboxModule,
  MatCheckbox,
  MatRippleModule,
  MatRipple,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  TranslatePipe,
  SettingsToggleComponent,
  IconComponent,
  CounterComponent
], encapsulation: 2 });
var QuestionComponent = _QuestionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionComponent, [{
    type: Component,
    args: [{ selector: "placeos-question", template: `
        <div
            #container_el
            class="flex w-full flex-col items-center justify-between px-4 py-2"
        >
            @if (!is_card()) {
                <div
                    class="flex w-full flex-row items-center justify-end space-x-4 pb-2"
                >
                    <settings-toggle
                        [ngModel]="preview()"
                        (ngModelChange)="preview.set($event)"
                        [name]="'COMMON.PREVIEW' | translate"
                    ></settings-toggle>
                    <div class="flex-1"></div>
                    @if (!preview()) {
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select [(ngModel)]="question().type">
                                @for (item of type_options; track item) {
                                    @if (item.id[0] !== '0') {
                                        <mat-option [value]="item.id">
                                            {{ item.name }}
                                        </mat-option>
                                    }
                                }
                            </mat-select>
                        </mat-form-field>

                        <settings-toggle
                            [(ngModel)]="question().required"
                            [name]="'COMMON.REQUIRED' | translate"
                        ></settings-toggle>
                    }
                </div>
            }

            <div
                class="my-2 flex w-full flex-col rounded border-base-200"
                [class.border]="!is_card()"
                [class.p-4]="!is_card()"
            >
                @if (!preview()) {
                    <mat-form-field
                        class="no-subscript mb-2 w-full"
                        appearance="outline"
                    >
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.SURVEY_QUESTION_ENTER'
                                    | translate
                            "
                            type="text"
                            [(ngModel)]="question().title"
                        />
                        <mat-error
                            class="input-error"
                            *ngIf="!question()?.title"
                        >
                            {{
                                'APP.CONCIERGE.SURVEY_QUESTION_ENTER_ERROR'
                                    | translate
                            }}
                        </mat-error>
                    </mat-form-field>
                } @else {
                    <span class="mb-4 w-full text-xl">{{
                        question().title
                    }}</span>
                    @if (!question().title) {
                        <span class="mb-4 w-full text-xl opacity-30">{{
                            'Untitled Question'
                        }}</span>
                    }
                }
                @if (question().type === QuestionType.Comment_Box) {
                    <div class="flex w-full flex-col" *ngIf="preview()">
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                cols="30"
                                rows="5"
                                placeholder="Enter option text"
                            ></textarea>
                            <mat-hint>{{
                                'APP.CONCIERGE.SURVEY_QUESTION_HINT_MULTILINE'
                                    | translate
                            }}</mat-hint>
                        </mat-form-field>
                    </div>
                } @else if (question().type === QuestionType.Single_Line_Text) {
                    <div class="flex w-full flex-col" *ngIf="preview()">
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                type="text"
                                placeholder="Enter option text"
                            />
                            <mat-hint>{{
                                'APP.CONCIERGE.SURVEY_QUESTION_HINT_LINE'
                                    | translate
                            }}</mat-hint>
                        </mat-form-field>
                    </div>
                } @else if (
                    question().type === QuestionType.Check_Box ||
                    question().type === QuestionType.Radio_Group ||
                    question().type === QuestionType.Drop_Down
                ) {
                    @if (question) {
                        <div class="flex w-full flex-col">
                            @if (!preview()) {
                                <div
                                    class="mb-4 flex w-full flex-col space-y-2 pl-2"
                                >
                                    <div
                                        *ngFor="
                                            let item of question().choices;
                                            let i = index
                                        "
                                        class="flex w-full flex-row items-center space-x-2"
                                    >
                                        <span class="p-2 font-mono"
                                            >{{ i + 1 }}.
                                        </span>
                                        <mat-form-field
                                            class="no-subscript w-full"
                                            appearance="outline"
                                        >
                                            <input
                                                matInput
                                                type="text"
                                                [(ngModel)]="item.text"
                                                placeholder="Enter option text"
                                                name="item{{ i }}"
                                            />
                                        </mat-form-field>
                                        <button
                                            icon
                                            matRipple
                                            class="h-12 min-w-12 rounded border border-error text-error"
                                            (click)="deleteOption(i)"
                                        >
                                            <icon> delete_outline</icon>
                                        </button>
                                    </div>
                                </div>
                                <button
                                    btn
                                    matRipple
                                    class="w-full"
                                    (click)="addOption()"
                                >
                                    <div
                                        class="text-gray-800 flex flex-row items-center"
                                    >
                                        <icon>add_circle</icon>
                                        <span>Add option</span>
                                    </div>
                                </button>
                            } @else {
                                @if (is_dropdown) {
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            placeholder="Select an option"
                                        >
                                            <mat-option
                                                *ngFor="
                                                    let item of question()
                                                        .choices
                                                "
                                                [value]="item.value"
                                                >{{ item.text }}</mat-option
                                            >
                                        </mat-select>
                                    </mat-form-field>
                                } @else if (is_checkbox) {
                                    <div
                                        class="grid grid-cols-1 sm:grid-cols-2"
                                    >
                                        @for (
                                            choice of question().choices;
                                            track choice
                                        ) {
                                            <mat-checkbox>{{
                                                choice.text
                                            }}</mat-checkbox>
                                        }
                                    </div>
                                } @else {
                                    <div class="flex w-full flex-col pl-2">
                                        <mat-radio-group>
                                            <div
                                                class="grid grid-cols-1 sm:grid-cols-2"
                                            >
                                                @for (
                                                    choice of question()
                                                        .choices;
                                                    track choice
                                                ) {
                                                    <mat-radio-button
                                                        [value]="choice"
                                                        >{{
                                                            choice.text
                                                        }}</mat-radio-button
                                                    >
                                                }
                                            </div>
                                        </mat-radio-group>
                                    </div>
                                }
                            }
                        </div>
                    }
                } @else if (question().type === QuestionType.Rating) {
                    <div class="flex w-full flex-col">
                        <div btn-grp class="divide-x divide-secondary">
                            @for (idx of rating_options; track idx) {
                                <button
                                    matRipple
                                    class="h-12 w-12 border-y border-secondary first:rounded-l first:border-l last:rounded-r last:!border-r"
                                >
                                    {{ idx }}
                                </button>
                            }
                        </div>
                        <div class="flex flex-col" *ngIf="!preview()">
                            <a-counter
                                [max]="10"
                                [min]="3"
                                [(ngModel)]="question().max_rating"
                                (ngModelChange)="
                                    rating_options = generateArray($event)
                                "
                                class="mb-1 w-40"
                            ></a-counter>
                        </div>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatRadioModule,
      MatCheckboxModule,
      MatRippleModule,
      FormsModule,
      TranslatePipe,
      SettingsToggleComponent,
      IconComponent,
      CounterComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionComponent, { className: "QuestionComponent", filePath: "apps/concierge/src/app/surveys/question.component.ts", lineNumber: 290 });
})();

// apps/concierge/src/app/surveys/question-modal.component.ts
var _c04 = ["question_el"];
var _QuestionModalComponent = class _QuestionModalComponent {
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.question_el = viewChild("question_el");
    this.is_edit = false;
    this.loading = false;
    this.is_edit = !!(this._data?.id > 0);
    this.question = this._data || new Ve({ type: "text" });
    console.log("Data", this._data, this.question);
  }
  async save() {
    const question_el = this.question_el();
    if (!question_el.valid)
      return;
    this.loading = true;
    const call = this.is_edit ? ma(`${this.question.id}`, question_el.question()) : _a(question_el.question());
    await lastValueFrom(call);
    this._dialog_ref.close(true);
    notifySuccess("Successfully updated question bank.");
  }
};
_QuestionModalComponent.\u0275fac = function QuestionModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _QuestionModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
};
_QuestionModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionModalComponent, selectors: [["question-modal"]], viewQuery: function QuestionModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.question_el, _c04, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, decls: 13, vars: 7, consts: [["question_el", ""], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "min-w-[40rem]", "overflow-x-hidden"], [3, "is_card", "question"], [1, "flex", "flex-row", "justify-end", "space-x-2", "px-4", "py-2"], ["btn", "", "matRipple", "", 3, "click", "disabled"]], template: function QuestionModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 3)(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "main", 4);
    \u0275\u0275element(8, "placeos-question", 5, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "footer", 6)(11, "button", 7);
    \u0275\u0275listener("click", function QuestionModalComponent_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.save());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const question_el_r2 = \u0275\u0275reference(9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, ctx.is_edit ? "APP.CONCIERGE.SURVEY_QUESTION_EDIT" : "APP.CONCIERGE.SURVEY_QUESTION_NEW"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("is_card", false)("question", ctx.question);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !(question_el_r2 == null ? null : question_el_r2.valid));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.is_edit ? "Update" : "Add to bank", " ");
  }
}, dependencies: [
  CommonModule,
  QuestionComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  IconComponent,
  MatDialogModule,
  MatDialogClose
], encapsulation: 2 });
var QuestionModalComponent = _QuestionModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionModalComponent, [{
    type: Component,
    args: [{ selector: "question-modal", template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (is_edit
                        ? 'APP.CONCIERGE.SURVEY_QUESTION_EDIT'
                        : 'APP.CONCIERGE.SURVEY_QUESTION_NEW'
                    ) | translate
                }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="min-w-[40rem] overflow-x-hidden">
            <placeos-question
                #question_el
                [is_card]="false"
                [question]="question"
            ></placeos-question>
        </main>
        <footer class="flex flex-row justify-end space-x-2 px-4 py-2">
            <button
                btn
                matRipple
                [disabled]="!question_el?.valid"
                (click)="save()"
            >
                {{ is_edit ? 'Update' : 'Add to bank' }}
            </button>
        </footer>
    `, imports: [
      CommonModule,
      QuestionComponent,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      MatDialogModule
    ] }]
  }], () => [{ type: Ve, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionModalComponent, { className: "QuestionModalComponent", filePath: "apps/concierge/src/app/surveys/question-modal.component.ts", lineNumber: 66 });
})();

// apps/concierge/src/app/surveys/question.pipe.ts
var QUESTION_MAP = {};
function updateQuestionMap(list) {
  list.forEach((question) => QUESTION_MAP[question.id] = question);
}
var _QuestionPipe = class _QuestionPipe extends AsyncHandler {
  transform(id) {
    if (!QUESTION_MAP[id]) {
      this.subscription(id, pa(id).subscribe((question) => QUESTION_MAP[id] = question));
    }
    return QUESTION_MAP[id];
  }
};
_QuestionPipe.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275QuestionPipe_BaseFactory;
  return function QuestionPipe_Factory(__ngFactoryType__) {
    return (\u0275QuestionPipe_BaseFactory || (\u0275QuestionPipe_BaseFactory = \u0275\u0275getInheritedFactory(_QuestionPipe)))(__ngFactoryType__ || _QuestionPipe);
  };
})();
_QuestionPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "question", type: _QuestionPipe, pure: true });
var QuestionPipe = _QuestionPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionPipe, [{
    type: Pipe,
    args: [{
      name: "question"
    }]
  }], null, null);
})();

// apps/concierge/src/app/surveys/new-survey.service.ts
var TriggerEnum;
(function(TriggerEnum2) {
  TriggerEnum2["None"] = "NONE";
  TriggerEnum2["Reserved"] = "RESERVED";
  TriggerEnum2["Checked_In"] = "CHECKEDIN";
  TriggerEnum2["Checked_Out"] = "CHECKEDOUT";
  TriggerEnum2["Rejected"] = "REJECTED";
  TriggerEnum2["Cancelled"] = "CANCELLED";
  TriggerEnum2["Visitor"] = "VISITOR";
})(TriggerEnum || (TriggerEnum = {}));
var QuestionType;
(function(QuestionType2) {
  QuestionType2["Single_Line_Text"] = "text";
  QuestionType2["Comment_Box"] = "comment";
  QuestionType2["Radio_Group"] = "radiogroup";
  QuestionType2["Drop_Down"] = "dropdown";
  QuestionType2["Check_Box"] = "checkbox";
  QuestionType2["Rating"] = "rating";
  QuestionType2["Empty"] = "0[EMPTY]";
})(QuestionType || (QuestionType = {}));
var TriggerOptions = getEnumOptions(TriggerEnum);
var QuestionTypeOptions = getEnumOptions(QuestionType);
var QuestionTypeMap = getEnumMap(QuestionType);
function getEnumOptions(targetEnum) {
  return Object.entries(targetEnum).filter((e) => isNaN(Number(e[0]))).map((e) => ({
    name: e[0].replace(/_/g, " "),
    id: e[1]
  }));
}
function getEnumMap(targetEnum) {
  const enum_map = {};
  Object.entries(targetEnum).filter((e) => isNaN(Number(e[0]))).forEach((e) => enum_map[e[1]] = e[0].replace(/_/g, " "));
  return enum_map;
}
var _NewSurveyService = class _NewSurveyService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._survey_id = new BehaviorSubject("");
    this._bld_id = new BehaviorSubject("");
    this._change = new BehaviorSubject(0);
    this._loading = new BehaviorSubject(false);
    this._question_filters = new BehaviorSubject({});
    this.survey_list$ = combineLatest([
      this._org.building_list,
      this._change
    ]).pipe(tap(() => this._loading.next(true)), switchMap(([list]) => forkJoin(list.map((bld) => ga({ building_id: bld.id })))), map((data) => flatten(data)), shareReplay(1));
    this.answer_list$ = this.survey_list$.pipe(switchMap((surveys) => forkJoin(surveys.map((survey) => sa({ survey_id: survey.id })))), map((answers) => flatten(answers)), tap(() => this._loading.next(false)), shareReplay(1));
    this.building_surveys$ = combineLatest([
      this._bld_id,
      this.survey_list$
    ]).pipe(map(([bld_id, list]) => list.filter((s) => s.building_id === bld_id)));
    this.building_answers$ = combineLatest([
      this.building_surveys$,
      this.answer_list$
    ]).pipe(map(([surveys, list]) => list.filter((s) => surveys.find((survey) => survey.id === s.survey_id))));
    this.survey$ = this._survey_id.pipe(switchMap((id) => !id ? of(null) : va(id)), shareReplay(1));
    this.questions$ = da({
      limit: 1e3
    }).pipe(tap((l) => updateQuestionMap(l)), shareReplay(1));
    this.survey_questions$ = combineLatest([
      this.survey$,
      this.questions$
    ]).pipe(map(([survey, questions]) => {
      if (!survey)
        return [];
      const q_list = [];
      for (const page of survey.pages) {
        for (const q_id of page.question_order) {
          q_list.push(questions.find((q) => q.id === q_id));
        }
      }
      return q_list;
    }), shareReplay(1));
    this.filtered_questions$ = combineLatest([
      this.questions$,
      this._question_filters
    ]).pipe(map(([questions, filters]) => questions.filter((q) => (!filters.type || q.type === filters.type) && (!filters.search_text || q.title.includes(filters.search_text)))));
    this.loading$ = this._loading.asObservable();
  }
  get building() {
    return this._org.buildings.find((bld) => bld.id === this._bld_id.getValue());
  }
  setSurvey(id) {
    this._survey_id.next(id);
  }
  setBuilding(id) {
    this._bld_id.next(id);
  }
  setQuestionFilters(filters) {
    this._question_filters.next(filters);
  }
  async removeSurvey(survey, confirm = true) {
    if (confirm) {
      const result = await openConfirmModal({
        title: "Remove Survey",
        content: "Are you sure you want to remove this survey?",
        icon: { content: "warning" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading("Removing survey...");
      await lastValueFrom(ka(`${survey.id}`));
      result.close();
    } else {
      await lastValueFrom(ka(`${survey.id}`));
    }
    notifySuccess("Successfully removed survey.");
    this._change.next(Date.now());
  }
  editQuestion(question = new Ve({ type: "text" })) {
    const ref = this._dialog.open(QuestionModalComponent, {
      data: question
    });
    ref.afterClosed().subscribe((result) => {
      if (result)
        this._change.next(Date.now());
    });
  }
  async removeQuestion(question, confirm = true) {
    if (confirm) {
      const result = await openConfirmModal({
        title: "Remove Survey Question",
        content: "Are you sure you want to remove this survey question?",
        icon: { content: "warning" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading("Removing survey question...");
      await lastValueFrom(ya(`${question.id}`));
      result.close();
    } else {
      await lastValueFrom(ya(`${question.id}`));
    }
    notifySuccess("Successfully removed survey question.");
    this._change.next(Date.now());
  }
};
_NewSurveyService.\u0275fac = function NewSurveyService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewSurveyService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog));
};
_NewSurveyService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NewSurveyService, factory: _NewSurveyService.\u0275fac, providedIn: "root" });
var NewSurveyService = _NewSurveyService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewSurveyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: OrganisationService }, { type: MatDialog }], null);
})();

// apps/concierge/src/app/surveys/building-list.component.ts
var _c05 = (a0) => ({ count: a0 });
var _c13 = (a0) => ["/surveys", "list", a0];
var _forTrack0 = ($index, $item) => $item.id;
function BuildingListComponent_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const building_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", building_r1.images[0]);
  }
}
function BuildingListComponent_For_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 8);
    \u0275\u0275text(1, "domain");
    \u0275\u0275elementEnd();
  }
}
function BuildingListComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "a", 5)(3, "div", 6);
    \u0275\u0275conditionalCreate(4, BuildingListComponent_For_11_Conditional_4_Template, 1, 1, "img", 7);
    \u0275\u0275conditionalCreate(5, BuildingListComponent_For_11_Conditional_5_Template, 2, 0, "icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "h3", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 11)(10, "div", 12)(11, "div", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 14);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 14);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 12)(23, "div", 13);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 14);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "icon", 15);
    \u0275\u0275text(29, " chevron_right ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const building_r1 = ctx.$implicit;
    const stats_r2 = \u0275\u0275pipeBind1(1, 10, \u0275\u0275nextContext().stats$)[building_r1.id];
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c13, building_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((building_r1.images == null ? null : building_r1.images.length) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(building_r1.images == null ? null : building_r1.images.length) ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", building_r1.display_name || building_r1.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (stats_r2 == null ? null : stats_r2.live) || 0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 12, "APP.CONCIERGE.SURVEY_BLD_LIVE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (stats_r2 == null ? null : stats_r2.drafts) || 0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 14, "APP.CONCIERGE.SURVEY_BLD_DRAFTS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (stats_r2 == null ? null : stats_r2.answers) || 0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 16, "APP.CONCIERGE.SURVEY_BLD_ANSWERS"), " ");
  }
}
var _BuildingListComponent = class _BuildingListComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._survey = inject(NewSurveyService);
    this.buildings$ = this._org.building_list;
    this.surveys$ = this._survey.survey_list$;
    this.answers$ = this._survey.answer_list$;
    this.stats$ = combineLatest([
      this.buildings$,
      this.surveys$,
      this.answers$
    ]).pipe(map(([bld_list, surveys, answers]) => {
      const mapping = {};
      const answers_list = flatten(answers);
      for (let i = 0; i < bld_list.length; i++) {
        const bld = bld_list[i];
        const survey_list = surveys.filter((_) => _.building_id === bld.id);
        mapping[bld.id] = {
          live: survey_list.filter((_) => `${_.trigger}`.toLowerCase() !== "none").length,
          drafts: survey_list.filter((_) => `${_.trigger}`.toLowerCase() === "none").length,
          answers: answers_list.filter((resp) => survey_list.find((_) => _.id === resp.survey_id)).length
        };
      }
      return mapping;
    }), startWith({}), shareReplay(1));
  }
};
_BuildingListComponent.\u0275fac = function BuildingListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuildingListComponent)();
};
_BuildingListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuildingListComponent, selectors: [["building-list"]], standalone: false, decls: 13, vars: 13, consts: [[1, "flex", "h-full", "w-full", "flex-col"], [1, "flex", "items-center", "justify-between", "px-8", "pb-2", "pt-8"], [1, "text-2xl", "font-medium"], [1, "mb-8", "px-8"], [1, "h-1/2", "w-full", "flex-1", "space-y-4", "overflow-auto", "px-8"], ["matRipple", "", 1, "relative", "flex", "space-x-4", "overflow-hidden", "rounded-xl", "border", "border-base-300", "bg-base-100", "shadow", "hover:border-info", 3, "routerLink"], [1, "flex", "h-40", "w-32", "items-center", "justify-center", "bg-base-300"], ["auth", "", 1, "h-full", "w-full", "object-cover", "object-center", 3, "source"], [1, "text-6xl", "text-base-100"], [1, "flex-1", "py-4"], [1, "mb-4", "text-2xl", "font-medium"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "h-20", "w-24", "flex-col", "items-center", "justify-center", "space-y-2", "rounded-xl", "border", "border-base-200"], [1, "text-4xl"], [1, "text-xs", "font-medium"], [1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "text-4xl"]], template: function BuildingListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 4);
    \u0275\u0275repeaterCreate(10, BuildingListComponent_For_11_Template, 30, 20, "a", 5, _forTrack0);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.SURVEY_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 6, "APP.CONCIERGE.SURVEY_BUILDING_COUNT", \u0275\u0275pureFunction1(11, _c05, (tmp_1_0 = \u0275\u0275pipeBind1(7, 4, ctx.buildings$)) == null ? null : tmp_1_0.length)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(12, 9, ctx.buildings$));
  }
}, dependencies: [RouterLink, MatRipple, IconComponent, AuthenticatedImageDirective, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=building-list.component.css.map */"] });
var BuildingListComponent = _BuildingListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuildingListComponent, [{
    type: Component,
    args: [{ selector: "building-list", template: `
        <div class="flex h-full w-full flex-col">
            <header class="flex items-center justify-between px-8 pb-2 pt-8">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.SURVEY_HEADER' | translate }}
                </h2>
            </header>
            <div class="mb-8 px-8">
                {{
                    'APP.CONCIERGE.SURVEY_BUILDING_COUNT'
                        | translate: { count: (buildings$ | async)?.length }
                }}
            </div>
            <div class="h-1/2 w-full flex-1 space-y-4 overflow-auto px-8">
                @for (building of buildings$ | async; track building.id) {
                    @let stats = (stats$ | async)[building.id];
                    <a
                        matRipple
                        class="relative flex space-x-4 overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow hover:border-info"
                        [routerLink]="['/surveys', 'list', building.id]"
                    >
                        <div
                            class="flex h-40 w-32 items-center justify-center bg-base-300"
                        >
                            @if (building.images?.length) {
                                <img
                                    auth
                                    class="h-full w-full object-cover object-center"
                                    [source]="building.images[0]"
                                />
                            }
                            @if (!building.images?.length) {
                                <icon class="text-6xl text-base-100"
                                    >domain</icon
                                >
                            }
                        </div>
                        <div class="flex-1 py-4">
                            <h3 class="mb-4 text-2xl font-medium">
                                {{ building.display_name || building.name }}
                            </h3>
                            <div class="flex items-center space-x-4">
                                <div
                                    class="flex h-20 w-24 flex-col items-center justify-center space-y-2 rounded-xl border border-base-200"
                                >
                                    <div class="text-4xl">
                                        {{ stats?.live || 0 }}
                                    </div>
                                    <div class="text-xs font-medium">
                                        {{
                                            'APP.CONCIERGE.SURVEY_BLD_LIVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                                <div
                                    class="flex h-20 w-24 flex-col items-center justify-center space-y-2 rounded-xl border border-base-200"
                                >
                                    <div class="text-4xl">
                                        {{ stats?.drafts || 0 }}
                                    </div>
                                    <div class="text-xs font-medium">
                                        {{
                                            'APP.CONCIERGE.SURVEY_BLD_DRAFTS'
                                                | translate
                                        }}
                                    </div>
                                </div>
                                <div
                                    class="flex h-20 w-24 flex-col items-center justify-center space-y-2 rounded-xl border border-base-200"
                                >
                                    <div class="text-4xl">
                                        {{ stats?.answers || 0 }}
                                    </div>
                                    <div class="text-xs font-medium">
                                        {{
                                            'APP.CONCIERGE.SURVEY_BLD_ANSWERS'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <icon
                            class="absolute right-2 top-1/2 -translate-y-1/2 text-4xl"
                        >
                            chevron_right
                        </icon>
                    </a>
                }
            </div>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;577e594e7d75fa908f630c2823b2efac7227123c8145b7063544239e182719b7;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/surveys/building-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=building-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuildingListComponent, { className: "BuildingListComponent", filePath: "apps/concierge/src/app/surveys/building-list.component.ts", lineNumber: 117 });
})();

// libs/components/src/lib/survey-outlet.component.ts
var _c06 = () => ({ standalone: true });
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.SURVEY_COMPLETE"), " ");
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.REQUIRED"));
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_5_For_2_Template_button_click_0_listener() {
      const idx_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275nextContext(3);
      const question_r3 = \u0275\u0275readContextLet(0);
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.setRating(question_r3.id, idx_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const idx_r2 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const question_r3 = \u0275\u0275readContextLet(0);
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("bg-secondary", ctx_r3.form.value[question_r3.id] === idx_r2)("text-secondary-content", ctx_r3.form.value[question_r3.id] === idx_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", idx_r2, " ");
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_5_For_2_Template, 2, 5, "button", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const question_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275repeater(question_r3.options);
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 16);
    \u0275\u0275element(1, "input", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const question_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", question_r3.id)("placeholder", question_r3.description || question_r3.title);
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 16);
    \u0275\u0275element(1, "textarea", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const question_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", question_r3.id)("placeholder", question_r3.description || question_r3.title);
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_8_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const choice_r5 = ctx.$implicit;
    \u0275\u0275property("value", choice_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(choice_r5.text);
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 16)(1, "mat-select", 22);
    \u0275\u0275repeaterCreate(2, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_8_For_3_Template, 2, 2, "mat-option", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const question_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", question_r3.id)("placeholder", question_r3.description || question_r3.title);
    \u0275\u0275advance();
    \u0275\u0275repeater(question_r3.choices);
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const choice_r6 = ctx.$implicit;
    \u0275\u0275property("value", choice_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(choice_r6.text);
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-group", 17)(1, "div", 18);
    \u0275\u0275repeaterCreate(2, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_9_For_3_Template, 2, 2, "mat-radio-button", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const question_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("formControlName", question_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(question_r3.choices);
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 25);
    \u0275\u0275listener("ngModelChanges", function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_10_For_2_Template_mat_checkbox_ngModelChanges_0_listener($event) {
      const choice_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275nextContext(3);
      const question_r3 = \u0275\u0275readContextLet(0);
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.toggleOption(question_r3.id, choice_r8.text, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const choice_r8 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const question_r3 = \u0275\u0275readContextLet(0);
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngModel", ctx_r3.form.value[question_r3.id].includes(choice_r8.text))("ngModelOptions", \u0275\u0275pureFunction0(3, _c06));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(choice_r8.text);
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_10_For_2_Template, 2, 4, "mat-checkbox", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const question_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275repeater(question_r3.choices);
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_11_Template(rf, ctx) {
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "h4", 12)(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Conditional_4_Template, 3, 3, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_5_Template, 3, 0, "div", 15)(6, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_6_Template, 2, 2, "mat-form-field", 16)(7, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_7_Template, 2, 2, "mat-form-field", 16)(8, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_8_Template, 4, 2, "mat-form-field", 16)(9, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_9_Template, 4, 1, "mat-radio-group", 17)(10, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_10_Template, 3, 0, "div", 18)(11, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Case_11_Template, 0, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_19_0;
    \u0275\u0275nextContext();
    const question_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", question_r3.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(question_r3.required ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_19_0 = question_r3.type) === "rating" ? 5 : tmp_19_0 === "text" ? 6 : tmp_19_0 === "comment" ? 7 : tmp_19_0 === "dropdown" ? 8 : tmp_19_0 === "radiogroup" ? 9 : tmp_19_0 === "checkbox" ? 10 : 11);
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275conditionalCreate(1, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Conditional_1_Template, 12, 3, "div", 11);
  }
  if (rf & 2) {
    const q_id_r9 = ctx.$implicit;
    const question_r10 = \u0275\u0275storeLet(\u0275\u0275nextContext(5).questions[q_id_r9]);
    \u0275\u0275advance();
    \u0275\u0275conditional(question_r10 ? 1 : -1);
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.previousPage());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.PREVIOUS"), " ");
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.submitSurvey());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275property("disabled", ctx_r3.preview());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.SUBMIT"), " ");
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.nextPage());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.NEXT"), " ");
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5)(1, "h3", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_For_4_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "footer", 7);
    \u0275\u0275conditionalCreate(6, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_Conditional_6_Template, 3, 3, "button", 8);
    \u0275\u0275conditionalCreate(7, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_Conditional_7_Template, 3, 4, "button", 9)(8, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_Conditional_8_Template, 3, 3, "button", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("formGroup", ctx_r3.form);
    const page_r14 = ctx_r3.survey().pages[ctx_r3.active_page()];
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", page_r14.title, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(page_r14.question_order);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.active_page() > 0 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.active_page() >= ctx_r3.survey().pages.length - 1 ? 7 : 8);
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Conditional_0_Template, 9, 4);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r3.form ? 0 : -1);
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_0_Template, 4, 3, "main", 4)(1, SurveyOutletComponent_Conditional_0_Conditional_5_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.success() ? 0 : 1);
  }
}
function SurveyOutletComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275element(1, "mat-spinner", 29);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.loading());
  }
}
function SurveyOutletComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "img", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SurveyOutletComponent_Conditional_0_Conditional_5_Template, 2, 1)(6, SurveyOutletComponent_Conditional_0_Conditional_6_Template, 4, 1, "main", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.survey().title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("source", (ctx_r3.logo == null ? null : ctx_r3.logo.src) || ctx_r3.logo);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.loading() ? 5 : 6);
  }
}
var _SurveyOutletComponent = class _SurveyOutletComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._route = inject(ActivatedRoute);
    this._settings = inject(SettingsService);
    this.preview = input(false);
    this.not_found = output();
    this.survey_id = model("");
    this.active_page = signal(0);
    this.loading = signal("");
    this.success = signal(false);
    this.survey = model(null);
    this.questions = {};
  }
  get logo() {
    return (this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {};
  }
  ngOnInit() {
    this.subscription("route.params", this._route.paramMap.subscribe((params) => {
      if (params.has("id")) {
        this.survey_id.set(params.get("id"));
        this._updateSurvey();
      }
    }));
  }
  async ngOnChanges(changes) {
    if (changes.survey_id)
      this._updateSurvey();
    if (changes.survey)
      this._loadQuestions();
  }
  nextPage() {
    this.active_page.update((p) => p + 1);
  }
  previousPage() {
    this.active_page.update((p) => p - 1);
  }
  setRating(question_id, rating) {
    this.form.patchValue({ [question_id]: rating });
  }
  toggleOption(question_id, value, state) {
    let list = this.form.value[question_id];
    list = list.filter((_) => _ !== value);
    if (state)
      list.push(value);
    this.form.patchValue({ [question_id]: list });
  }
  async submitSurvey() {
    this.form.markAllAsTouched();
    this.loading.set("Submitting survey answers...");
    if (!this.form.valid)
      return;
    this.loading.set("Saving survey answers...");
    const answers = [];
    for (const q_id in this.questions) {
      const value = this.form.value[q_id];
      if (value !== null && value !== void 0) {
        answers.push({
          survey_id: +`${this.survey().id}`,
          question_id: +`${q_id}`,
          type: this.questions[q_id].type,
          answer_json: value
        });
      }
    }
    await lastValueFrom(ua(answers));
    notifySuccess("Successfully submitted survey answers.");
    this.success.set(true);
    this.loading.set("");
  }
  async _updateSurvey() {
    this.timeout("not_found", () => this.not_found.emit(true));
    if (!this.survey_id())
      return;
    this.loading.set("Loading survey details...");
    const survey = await lastValueFrom(va(this.survey_id()).pipe(catchError((_) => of(null))));
    if (!survey)
      return this.not_found.emit(true);
    this.survey.set(survey);
    await this._loadQuestions();
    this.clearTimeout("not_found");
  }
  async _loadQuestions() {
    if (!this.survey()?.pages.length)
      return;
    this.loading.set("Loading survey questions...");
    const requests = [];
    for (const page of this.survey().pages) {
      for (const question_id of page.question_order) {
        requests.push(pa(`${question_id}`));
      }
    }
    if (!requests.length)
      return;
    const questions = await lastValueFrom(forkJoin(requests));
    for (const q of questions) {
      this.questions[q.id] = q;
      if (q.type === "rating") {
        q.options = new Array(q.max_rating).fill(0).map((_, idx) => idx + 1);
      }
    }
    console.log("Questions:", questions);
    this._generateForm();
  }
  _generateForm() {
    const controls = {};
    for (const q_id in this.questions) {
      const v = this.questions[q_id].required ? [Validators.required] : [];
      switch (this.questions[q_id].type) {
        case "rating":
          controls[q_id] = new FormControl(null, v);
          break;
        case "text":
        case "comment":
          controls[q_id] = new FormControl("", v);
          break;
        case "dropdown":
          controls[q_id] = new FormControl("", v);
          break;
        case "radiogroup":
          controls[q_id] = new FormControl("", v);
          break;
        case "checkbox":
          controls[q_id] = new FormControl([], v);
          break;
      }
    }
    this.form = new FormGroup(controls);
    this.loading.set("");
  }
};
_SurveyOutletComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SurveyOutletComponent_BaseFactory;
  return function SurveyOutletComponent_Factory(__ngFactoryType__) {
    return (\u0275SurveyOutletComponent_BaseFactory || (\u0275SurveyOutletComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SurveyOutletComponent)))(__ngFactoryType__ || _SurveyOutletComponent);
  };
})();
_SurveyOutletComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SurveyOutletComponent, selectors: [["survey-outlet"]], inputs: { preview: [1, "preview"], survey_id: [1, "survey_id"], survey: [1, "survey"] }, outputs: { not_found: "not_found", survey_id: "survey_idChange", survey: "surveyChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "h-full", "w-full", "overflow-auto", "bg-base-100", "px-2"], [1, "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "min-h-[4.5rem]", "w-[calc(100%-1rem)]", "w-full", "max-w-[40rem]", "items-center", "justify-between", "rounded", "border-none", "bg-base-200", "px-4", "py-2"], [1, "text-xl", "font-medium", "capitalize"], ["auth", "", "alt", "Logo", 1, "h-12", "sm:block", 3, "source"], ["loading", "", 1, "mx-auto", "flex", "min-h-64", "w-[calc(100%-1rem)]", "w-full", "max-w-[40rem]", "flex-col", "items-center", "justify-center", "space-y-2", "space-y-4", "rounded", "border", "border-base-300", "p-4"], ["page", "", 1, "mx-auto", "w-[calc(100%-1rem)]", "w-full", "max-w-[40rem]", "space-y-2", "rounded", "border", "border-base-300", "p-4", 3, "formGroup"], [1, "text-lg", "font-medium"], [1, "sticky", "bottom-0", "z-10", "mx-auto", "my-2", "flex", "h-16", "w-[calc(100%-1rem)]", "w-full", "max-w-[40rem]", "items-center", "justify-end", "space-x-2", "rounded", "border-none", "bg-base-200", "p-2"], ["btn", "", "matRipple", "", 1, "inverse", "w-32", "bg-base-100"], ["btn", "", "matRipple", "", 1, "w-32", 3, "disabled"], ["btn", "", "matRipple", "", 1, "w-32"], [1, "py-2"], [1, "mb-2", "flex", "items-center", "justify-between"], [1, "font-medium"], [1, "rounded", "bg-warning", "px-2", "py-1", "font-mono", "text-[0.625rem]", "text-warning-content"], ["btn-grp", "", 1, "divide-x", "divide-secondary", "py-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], [3, "formControlName"], [1, "grid", "grid-cols-1", "sm:grid-cols-2"], ["matRipple", "", 1, "h-12", "w-12", "border-y", "border-secondary", "first:rounded-l", "first:border-l", "last:rounded-r", "last:!border-r", 3, "bg-secondary", "text-secondary-content"], ["matRipple", "", 1, "h-12", "w-12", "border-y", "border-secondary", "first:rounded-l", "first:border-l", "last:rounded-r", "last:!border-r", 3, "click"], ["matInput", "", 3, "formControlName", "placeholder"], [3, "formControlName", "placeholder"], [3, "value"], [3, "ngModel", "ngModelOptions"], [3, "ngModelChanges", "ngModel", "ngModelOptions"], ["btn", "", "matRipple", "", 1, "inverse", "w-32", "bg-base-100", 3, "click"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["diameter", "32"]], template: function SurveyOutletComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SurveyOutletComponent_Conditional_0_Template, 7, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.survey() ? 0 : -1);
  }
}, dependencies: [
  RouterModule,
  AuthenticatedImageDirective,
  MatRippleModule,
  MatRipple,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatRadioModule,
  MatRadioGroup,
  MatRadioButton,
  MatCheckboxModule,
  MatCheckbox,
  ReactiveFormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  FormsModule,
  NgModel,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=survey-outlet.component.css.map */"] });
var SurveyOutletComponent = _SurveyOutletComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyOutletComponent, [{
    type: Component,
    args: [{ selector: `survey-outlet`, template: `
        @if (survey()) {
            <div class="h-full w-full overflow-auto bg-base-100 px-2">
                <header
                    class="sticky top-0 z-10 mx-auto my-2 flex min-h-[4.5rem] w-[calc(100%-1rem)] w-full max-w-[40rem] items-center justify-between rounded border-none bg-base-200 px-4 py-2"
                >
                    <h2 class="text-xl font-medium capitalize">
                        {{ survey().title }}
                    </h2>
                    <img
                        auth
                        class="h-12 sm:block"
                        alt="Logo"
                        [source]="logo?.src || logo"
                    />
                </header>
                @if (!loading()) {
                    @if (success()) {
                        <main
                            loading
                            class="mx-auto flex min-h-64 w-[calc(100%-1rem)] w-full max-w-[40rem] flex-col items-center justify-center space-y-2 space-y-4 rounded border border-base-300 p-4"
                        >
                            <p>
                                {{
                                    'APP.CONCIERGE.SURVEY_COMPLETE' | translate
                                }}
                            </p>
                        </main>
                    } @else {
                        @if (form) {
                            <main
                                page
                                class="mx-auto w-[calc(100%-1rem)] w-full max-w-[40rem] space-y-2 rounded border border-base-300 p-4"
                                [formGroup]="form"
                            >
                                @let page = survey().pages[active_page()];
                                <h3 class="text-lg font-medium">
                                    {{ page.title }}
                                </h3>
                                @for (q_id of page.question_order; track q_id) {
                                    @let question = questions[q_id];
                                    @if (question) {
                                        <div class="py-2">
                                            <h4
                                                class="mb-2 flex items-center justify-between"
                                            >
                                                <div class="font-medium">
                                                    {{ question.title }}
                                                </div>
                                                @if (question.required) {
                                                    <span
                                                        class="rounded bg-warning px-2 py-1 font-mono text-[0.625rem] text-warning-content"
                                                        >{{
                                                            'COMMON.REQUIRED'
                                                                | translate
                                                        }}</span
                                                    >
                                                }
                                            </h4>
                                            @switch (question.type) {
                                                @case ('rating') {
                                                    <div
                                                        btn-grp
                                                        class="divide-x divide-secondary py-2"
                                                    >
                                                        @for (
                                                            idx of question.options;
                                                            track idx
                                                        ) {
                                                            <button
                                                                matRipple
                                                                class="h-12 w-12 border-y border-secondary first:rounded-l first:border-l last:rounded-r last:!border-r"
                                                                [class.bg-secondary]="
                                                                    form.value[
                                                                        question
                                                                            .id
                                                                    ] === idx
                                                                "
                                                                [class.text-secondary-content]="
                                                                    form.value[
                                                                        question
                                                                            .id
                                                                    ] === idx
                                                                "
                                                                (click)="
                                                                    setRating(
                                                                        question.id,
                                                                        idx
                                                                    )
                                                                "
                                                            >
                                                                {{ idx }}
                                                            </button>
                                                        }
                                                    </div>
                                                }
                                                @case ('text') {
                                                    <mat-form-field
                                                        appearance="outline"
                                                        class="no-subscript w-full"
                                                    >
                                                        <input
                                                            matInput
                                                            [formControlName]="
                                                                question.id
                                                            "
                                                            [placeholder]="
                                                                question.description ||
                                                                question.title
                                                            "
                                                        />
                                                    </mat-form-field>
                                                }
                                                @case ('comment') {
                                                    <mat-form-field
                                                        appearance="outline"
                                                        class="no-subscript w-full"
                                                    >
                                                        <textarea
                                                            matInput
                                                            [formControlName]="
                                                                question.id
                                                            "
                                                            [placeholder]="
                                                                question.description ||
                                                                question.title
                                                            "
                                                        ></textarea>
                                                    </mat-form-field>
                                                }
                                                @case ('dropdown') {
                                                    <mat-form-field
                                                        appearance="outline"
                                                        class="no-subscript w-full"
                                                    >
                                                        <mat-select
                                                            [formControlName]="
                                                                question.id
                                                            "
                                                            [placeholder]="
                                                                question.description ||
                                                                question.title
                                                            "
                                                        >
                                                            @for (
                                                                choice of question.choices;
                                                                track choice
                                                            ) {
                                                                <mat-option
                                                                    [value]="
                                                                        choice
                                                                    "
                                                                    >{{
                                                                        choice.text
                                                                    }}</mat-option
                                                                >
                                                            }
                                                        </mat-select>
                                                    </mat-form-field>
                                                }
                                                @case ('radiogroup') {
                                                    <mat-radio-group
                                                        [formControlName]="
                                                            question.id
                                                        "
                                                    >
                                                        <div
                                                            class="grid grid-cols-1 sm:grid-cols-2"
                                                        >
                                                            @for (
                                                                choice of question.choices;
                                                                track choice
                                                            ) {
                                                                <mat-radio-button
                                                                    [value]="
                                                                        choice
                                                                    "
                                                                    >{{
                                                                        choice.text
                                                                    }}</mat-radio-button
                                                                >
                                                            }
                                                        </div>
                                                    </mat-radio-group>
                                                }
                                                @case ('checkbox') {
                                                    <div
                                                        class="grid grid-cols-1 sm:grid-cols-2"
                                                    >
                                                        @for (
                                                            choice of question.choices;
                                                            track choice
                                                        ) {
                                                            <mat-checkbox
                                                                [ngModel]="
                                                                    form.value[
                                                                        question
                                                                            .id
                                                                    ].includes(
                                                                        choice.text
                                                                    )
                                                                "
                                                                [ngModelOptions]="{
                                                                    standalone: true,
                                                                }"
                                                                (ngModelChanges)="
                                                                    toggleOption(
                                                                        question.id,
                                                                        choice.text,
                                                                        $event
                                                                    )
                                                                "
                                                                >{{
                                                                    choice.text
                                                                }}</mat-checkbox
                                                            >
                                                        }
                                                    </div>
                                                }
                                                @default {}
                                            }
                                        </div>
                                    }
                                }
                            </main>
                            <footer
                                class="sticky bottom-0 z-10 mx-auto my-2 flex h-16 w-[calc(100%-1rem)] w-full max-w-[40rem] items-center justify-end space-x-2 rounded border-none bg-base-200 p-2"
                            >
                                @if (active_page() > 0) {
                                    <button
                                        btn
                                        matRipple
                                        class="inverse w-32 bg-base-100"
                                        (click)="previousPage()"
                                    >
                                        {{ 'COMMON.PREVIOUS' | translate }}
                                    </button>
                                }
                                @if (
                                    active_page() >= survey().pages.length - 1
                                ) {
                                    <button
                                        btn
                                        matRipple
                                        class="w-32"
                                        [disabled]="preview()"
                                        (click)="submitSurvey()"
                                    >
                                        {{ 'COMMON.SUBMIT' | translate }}
                                    </button>
                                } @else {
                                    <button
                                        btn
                                        matRipple
                                        class="w-32"
                                        (click)="nextPage()"
                                    >
                                        {{ 'COMMON.NEXT' | translate }}
                                    </button>
                                }
                            </footer>
                        }
                    }
                } @else {
                    <main
                        loading
                        class="mx-auto flex min-h-64 w-[calc(100%-1rem)] w-full max-w-[40rem] flex-col items-center justify-center space-y-2 space-y-4 rounded border border-base-300 p-4"
                    >
                        <mat-spinner diameter="32"></mat-spinner>
                        <p>{{ loading() }}</p>
                    </main>
                }
            </div>
        }
    `, imports: [
      RouterModule,
      AuthenticatedImageDirective,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatRadioModule,
      MatCheckboxModule,
      ReactiveFormsModule,
      FormsModule,
      MatProgressSpinnerModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/survey-outlet.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=survey-outlet.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SurveyOutletComponent, { className: "SurveyOutletComponent", filePath: "libs/components/src/lib/survey-outlet.component.ts", lineNumber: 341 });
})();

// apps/concierge/src/app/surveys/new-survey-widget.component.ts
var _c07 = (a0, a1, a2, a3) => ({ "bg-error": a0, "bg-warning": a1, "bg-info": a2, "bg-success": a3 });
var _c14 = (a0) => ({ width: a0 });
var _c2 = (a0, a1, a2, a3, a4) => ({ cx: a0, cy: a1, r: a2, stroke: "var(--b2)", "stroke-width": a3, "stroke-dasharray": a4 });
var _c3 = (a0, a1, a2, a3, a4, a5, a6) => ({ cx: a0, cy: a1, r: a2, stroke: a3, "stroke-width": a4, "stroke-dasharray": a5, "stroke-dashoffset": a6 });
var _c4 = (a0, a1) => ({ width: a0, "background-color": a1 });
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.id || $index;
function NewSurveyWidgetComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const answer_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", answer_r1.answer_json, " ");
  }
}
function NewSurveyWidgetComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, NewSurveyWidgetComponent_Conditional_6_For_2_Template, 2, 1, "div", 5, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.answer_list());
  }
}
function NewSurveyWidgetComponent_Conditional_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275element(5, "span", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "percent");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", item_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.name, " ");
    const percent_r4 = item_r3.percentage || 0;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(7, _c07, percent_r4 <= 25, percent_r4 > 25 && percent_r4 <= 50, percent_r4 > 50 && percent_r4 <= 75, percent_r4 > 75))("ngStyle", \u0275\u0275pureFunction1(12, _c14, percent_r4 + "%"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, item_r3.percentage / 100), " ");
  }
}
function NewSurveyWidgetComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NewSurveyWidgetComponent_Conditional_7_For_1_Template, 9, 14, "div", 6, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.selection_items());
  }
}
function NewSurveyWidgetComponent_Conditional_8_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275element(4, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "percent");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const \u0275$index_59_r6 = ctx.$index;
    const percent_r7 = item_r5.percentage || 0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275$index_59_r6 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(5, _c4, (percent_r7 || 0) + "%", percent_r7 <= 25 ? "var(--er)" : percent_r7 <= 50 ? "var(--wa)" : percent_r7 <= 75 ? "var(--in)" : "var(--su)"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, (percent_r7 || 0) / 100), " ");
  }
}
function NewSurveyWidgetComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 12)(2, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "circle", 15)(5, "circle", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 18);
    \u0275\u0275repeaterCreate(12, NewSurveyWidgetComponent_Conditional_8_For_13_Template, 8, 8, "div", 19, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const percent_r8 = ctx_r1.progress();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction5(7, _c2, ctx_r1.size / 2 + "px", ctx_r1.size / 2 + "px", (ctx_r1.size - ctx_r1.border_width) / 2 + "px", ctx_r1.border_width + "px", ctx_r1.circle() + "px"));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction7(13, _c3, ctx_r1.size / 2 + "px", ctx_r1.size / 2 + "px", (ctx_r1.size - ctx_r1.border_width) / 2 + "px", percent_r8 <= 0.25 ? "var(--er)" : percent_r8 <= 0.5 ? "var(--wa)" : percent_r8 <= 0.75 ? "var(--in)" : "var(--su)", ctx_r1.border_width + "px", ctx_r1.circle() + "px", ctx_r1.radius() + "px"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 4, ctx_r1.average_rating() || 0, "1.1"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.answer_list().length, " ratings");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.selection_items());
  }
}
var _NewSurveyWidgetComponent = class _NewSurveyWidgetComponent {
  constructor() {
    this.response = input();
    this.answer_list = computed(() => this.response().answers || []);
    this.selection_items = computed(() => {
      const choices = this.is_selection() ? this.response().question?.choices : new Array(this.response().question?.max_rating || 0).fill(0).map((_, i) => ({ text: i + 1 }));
      return choices?.map((choice) => ({
        id: choice.text,
        name: choice.text,
        percentage: this.answer_list().filter(({ answer_json }) => answer_json === choice.text || answer_json instanceof Array && answer_json.includes(choice.text)).length / this.answer_list().length * 100
      })) || [];
    });
    this.average_rating = computed(() => {
      const ratings = this.answer_list().map((answer) => +`${answer.answer_json}`);
      const sum = ratings.reduce((acc, val) => acc + val, 0);
      return Math.floor(sum / ratings.length * 10) / 10;
    });
    this.progress = computed(() => {
      return this.average_rating() / this.max_rate();
    });
    this.type = computed(() => this.response().question?.type || QuestionType.Empty);
    this.is_table = computed(() => this.type() === QuestionType.Comment_Box || this.type() === QuestionType.Single_Line_Text);
    this.is_selection = computed(() => this.type() === QuestionType.Drop_Down || this.type() === QuestionType.Radio_Group || this.type() === QuestionType.Check_Box);
    this.size = 7 * 16;
    this.border_width = 0.75 * 16;
    this.circle = computed(() => {
      return Math.round(2 * 3.14159 * (this.size - this.border_width) / 2);
    });
    this.radius = computed(() => {
      return Math.round(this.circle() * (1 - this.progress()));
    });
    this.max_rate = computed(() => this.response().question?.max_rating || 10);
  }
};
_NewSurveyWidgetComponent.\u0275fac = function NewSurveyWidgetComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewSurveyWidgetComponent)();
};
_NewSurveyWidgetComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewSurveyWidgetComponent, selectors: [["new-survey-widget"]], inputs: { response: [1, "response"] }, decls: 9, vars: 3, consts: [[1, "h-full", "space-y-2", "rounded", "border", "border-base-300", "bg-base-100", "p-4"], [1, "text-lg", "font-medium"], [1, "flex", "w-full", "justify-end"], [1, "space-y-2"], [1, "flex", "flex-row", "space-x-4", "p-4"], [1, "rounded", "bg-base-200", "p-2", "text-sm"], [1, "mx-4", "flex", "flex-1", "items-end", "pb-3", "pt-2"], [1, "w-px", "flex-1", "flex-col", "space-y-1"], [1, "flex-1", "truncate", 3, "matTooltip"], [1, "progress-bar", "h-1", "bg-base-200"], [1, "progress-bar-fill", "h-1", "justify-center", "rounded-lg", 3, "ngClass", "ngStyle"], [1, "w-16", "text-right", "text-2xl", "font-thin"], [1, "relative", "flex", "w-1/3", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "relative", "h-28", "w-28"], [1, "h-full", "w-full", "-rotate-90"], [3, "ngStyle"], [1, "progress-bar", 3, "ngStyle"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "text-4xl", "font-medium"], [1, "flex", "w-2/3", "flex-col-reverse"], [1, "flex", "w-full", "flex-row", "items-center", "space-x-4", "rounded-xl", "border", "border-base-100", "px-2", "hover:border-base-200"], [1, "w-5", "text-right"], ["progbar", "", 1, "h-2.5", "flex-1", "rounded-full", "bg-base-200"], [1, "h-2.5", "rounded-full", 3, "ngStyle"], [1, "flex", "w-6", "justify-end", "font-thin"]], template: function NewSurveyWidgetComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275conditionalCreate(6, NewSurveyWidgetComponent_Conditional_6_Template, 3, 0, "div", 3)(7, NewSurveyWidgetComponent_Conditional_7_Template, 2, 0)(8, NewSurveyWidgetComponent_Conditional_8_Template, 14, 21, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_0_0 = ctx.response().question) == null ? null : tmp_0_0.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.answer_list().length, " answers ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.is_table() ? 6 : ctx.is_selection() ? 7 : 8);
  }
}, dependencies: [CommonModule, NgClass, NgStyle, DecimalPipe, PercentPipe], styles: ["\n\nsvg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: transparent;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.5s ease-in-out;\n}\n/*# sourceMappingURL=new-survey-widget.component.css.map */"] });
var NewSurveyWidgetComponent = _NewSurveyWidgetComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewSurveyWidgetComponent, [{
    type: Component,
    args: [{ selector: "new-survey-widget", template: `
        <div
            class="h-full space-y-2 rounded border border-base-300 bg-base-100 p-4"
        >
            <h3 class="text-lg font-medium">
                {{ response().question?.title }}
            </h3>
            <div class="flex w-full justify-end">
                {{ answer_list().length }} answers
            </div>
            <div>
                @if (is_table()) {
                    <div class="space-y-2">
                        @for (answer of answer_list(); track answer.id) {
                            <div class="rounded bg-base-200 p-2 text-sm">
                                {{ answer.answer_json }}
                            </div>
                        }
                    </div>
                } @else if (is_selection()) {
                    @for (item of selection_items(); track item.id) {
                        <div class="mx-4 flex flex-1 items-end pb-3 pt-2">
                            <div class="w-px flex-1 flex-col space-y-1">
                                <div
                                    class="flex-1 truncate"
                                    [matTooltip]="item.name"
                                >
                                    {{ item.name }}
                                </div>
                                <div class="progress-bar h-1 bg-base-200">
                                    @let percent = item.percentage || 0;
                                    <span
                                        class="progress-bar-fill h-1 justify-center rounded-lg"
                                        [ngClass]="{
                                            'bg-error': percent <= 25,
                                            'bg-warning':
                                                percent > 25 && percent <= 50,
                                            'bg-info':
                                                percent > 50 && percent <= 75,
                                            'bg-success': percent > 75,
                                        }"
                                        [ngStyle]="{ width: percent + '%' }"
                                    ></span>
                                </div>
                            </div>
                            <div class="w-16 text-right text-2xl font-thin">
                                {{ item.percentage / 100 | percent }}
                            </div>
                        </div>
                    }
                } @else {
                    <div class="flex flex-row space-x-4 p-4">
                        <div
                            class="relative flex w-1/3 flex-col items-center justify-center space-y-2"
                        >
                            <div class="relative h-28 w-28">
                                @let percent = progress();
                                <svg class="h-full w-full -rotate-90">
                                    <circle
                                        [ngStyle]="{
                                            cx: size / 2 + 'px',
                                            cy: size / 2 + 'px',
                                            r: (size - border_width) / 2 + 'px',
                                            stroke: 'var(--b2)',
                                            'stroke-width': border_width + 'px',
                                            'stroke-dasharray': circle() + 'px',
                                        }"
                                    ></circle>
                                    <circle
                                        class="progress-bar"
                                        [ngStyle]="{
                                            cx: size / 2 + 'px',
                                            cy: size / 2 + 'px',
                                            r: (size - border_width) / 2 + 'px',
                                            stroke:
                                                percent <= 0.25
                                                    ? 'var(--er)'
                                                    : percent <= 0.5
                                                      ? 'var(--wa)'
                                                      : percent <= 0.75
                                                        ? 'var(--in)'
                                                        : 'var(--su)',
                                            'stroke-width': border_width + 'px',
                                            'stroke-dasharray': circle() + 'px',
                                            'stroke-dashoffset':
                                                radius() + 'px',
                                        }"
                                    ></circle>
                                </svg>
                                <div
                                    class="absolute inset-0 flex items-center justify-center text-4xl font-medium"
                                >
                                    {{ average_rating() || 0 | number: '1.1' }}
                                </div>
                            </div>
                            <div>{{ answer_list().length }} ratings</div>
                        </div>
                        <div class="flex w-2/3 flex-col-reverse">
                            @for (
                                item of selection_items();
                                track item.id || i;
                                let i = $index
                            ) {
                                <div
                                    class="flex w-full flex-row items-center space-x-4 rounded-xl border border-base-100 px-2 hover:border-base-200"
                                >
                                    @let percent = item.percentage || 0;
                                    <div class="w-5 text-right">
                                        {{ i + 1 }}
                                    </div>
                                    <div
                                        progbar
                                        class="h-2.5 flex-1 rounded-full bg-base-200"
                                    >
                                        <div
                                            class="h-2.5 rounded-full"
                                            [ngStyle]="{
                                                width: (percent || 0) + '%',
                                                'background-color':
                                                    percent <= 25
                                                        ? 'var(--er)'
                                                        : percent <= 50
                                                          ? 'var(--wa)'
                                                          : percent <= 75
                                                            ? 'var(--in)'
                                                            : 'var(--su)',
                                            }"
                                        ></div>
                                    </div>
                                    <div class="flex w-6 justify-end font-thin">
                                        {{ (percent || 0) / 100 | percent }}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    `, imports: [CommonModule], styles: ["/* angular:styles/component:css;965d5fc51260a806920905aacaca18fa5aacb5936de272c2e6d4d33f0826de44;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/surveys/new-survey-widget.component.ts */\nsvg circle {\n  fill: transparent;\n}\n.progress-bar {\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.5s ease-in-out;\n}\n/*# sourceMappingURL=new-survey-widget.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewSurveyWidgetComponent, { className: "NewSurveyWidgetComponent", filePath: "apps/concierge/src/app/surveys/new-survey-widget.component.ts", lineNumber: 162 });
})();

// apps/concierge/src/app/surveys/survey-builder.component.ts
var _c08 = (a0) => ["/surveys", "list", a0];
var _c15 = (a0) => [a0];
var _forTrack03 = ($index, $item) => $item.id;
function SurveyBuilderComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275listener("click", function SurveyBuilderComponent_mat_option_16_Template_mat_option_click_0_listener() {
      const b_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onBuildingClick(b_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r2 = ctx.$implicit;
    \u0275\u0275property("value", b_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r2.display_name || b_r2.name);
  }
}
function SurveyBuilderComponent_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r4 = ctx.$implicit;
    \u0275\u0275property("value", b_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r4.display_name || b_r4.name);
  }
}
function SurveyBuilderComponent_mat_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const op_r5 = ctx.$implicit;
    \u0275\u0275property("value", op_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", op_r5.name, " ");
  }
}
function SurveyBuilderComponent_Conditional_44_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-tab", 28);
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const \u0275$index_91_r8 = ctx.$index;
    \u0275\u0275property("label", page_r7.title || "Page " + (\u0275$index_91_r8 + 1));
  }
}
function SurveyBuilderComponent_Conditional_44_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Conditional_44_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removePage());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function SurveyBuilderComponent_Conditional_44_Conditional_17_For_1_Conditional_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 56);
  }
}
function SurveyBuilderComponent_Conditional_44_Conditional_17_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275template(1, SurveyBuilderComponent_Conditional_44_Conditional_17_For_1_Conditional_2_div_1_Template, 1, 0, "div", 49);
    \u0275\u0275elementStart(2, "div", 50)(3, "div", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 52)(6, "icon", 53);
    \u0275\u0275text(7, "drag_indicator");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 54);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Conditional_44_Conditional_17_For_1_Conditional_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_115_r11 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removePageQuestion(\u0275$index_115_r11));
    });
    \u0275\u0275elementStart(9, "icon", 53);
    \u0275\u0275text(10, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(11, "placeos-question", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_115_r11 = \u0275\u0275nextContext().$index;
    const quest_r12 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275$index_115_r11 + 1, " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("preview", true)("question", quest_r12);
  }
}
function SurveyBuilderComponent_Conditional_44_Conditional_17_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "question");
    \u0275\u0275conditionalCreate(2, SurveyBuilderComponent_Conditional_44_Conditional_17_For_1_Conditional_2_Template, 12, 3, "div", 48);
  }
  if (rf & 2) {
    const q_id_r13 = ctx.$implicit;
    const quest_r14 = \u0275\u0275storeLet(\u0275\u0275pipeBind2(1, 1, q_id_r13, \u0275\u0275nextContext(3).questions().length));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(quest_r14 ? 2 : -1);
  }
}
function SurveyBuilderComponent_Conditional_44_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SurveyBuilderComponent_Conditional_44_Conditional_17_For_1_Template, 3, 5, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const page_r15 = \u0275\u0275readContextLet(16);
    \u0275\u0275repeater(page_r15.question_order);
  }
}
function SurveyBuilderComponent_Conditional_44_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "icon", 57);
    \u0275\u0275text(2, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No questions added to this page yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " Drag and drop questions to from the right to start building your survey. ");
    \u0275\u0275elementEnd()();
  }
}
function SurveyBuilderComponent_Conditional_44_mat_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    \u0275\u0275property("value", item_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r16.name, " ");
  }
}
function SurveyBuilderComponent_Conditional_44_For_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 56);
  }
}
function SurveyBuilderComponent_Conditional_44_For_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, SurveyBuilderComponent_Conditional_44_For_43_div_1_Template, 1, 0, "div", 49);
    \u0275\u0275elementStart(2, "button", 58)(3, "icon");
    \u0275\u0275text(4, "drag_indicator");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 59)(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 60);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 61)(11, "icon");
    \u0275\u0275text(12, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-menu", null, 1)(15, "button", 62);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Conditional_44_For_43_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.duplicateQuestion(ctx_r2.q));
    });
    \u0275\u0275elementStart(16, "div", 25)(17, "icon", 53);
    \u0275\u0275text(18, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 62);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Conditional_44_For_43_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editQuestion(ctx_r2.q));
    });
    \u0275\u0275elementStart(23, "div", 25)(24, "icon", 53);
    \u0275\u0275text(25, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 62);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Conditional_44_For_43_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeQuestion(ctx_r2.q));
    });
    \u0275\u0275elementStart(30, "div", 25)(31, "icon", 63);
    \u0275\u0275text(32, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const question_r18 = ctx.$implicit;
    const actionsMenu_r19 = \u0275\u0275reference(14);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(question_r18.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.question_types[question_r18.type], " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", actionsMenu_r19);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 6, "COMMON.DUPLICATE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 8, "COMMON.EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 10, "COMMON.DELETE"), " ");
  }
}
function SurveyBuilderComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "mat-tab-group", 27);
    \u0275\u0275listener("selectedTabChange", function SurveyBuilderComponent_Conditional_44_Template_mat_tab_group_selectedTabChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange($event));
    });
    \u0275\u0275repeaterCreate(5, SurveyBuilderComponent_Conditional_44_For_6_Template, 1, 1, "mat-tab", 28, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 29);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Conditional_44_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addPage());
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 25)(11, "mat-form-field", 30);
    \u0275\u0275element(12, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, SurveyBuilderComponent_Conditional_44_Conditional_13_Template, 3, 0, "button", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 33, 0);
    \u0275\u0275listener("cdkDropListDropped", function SurveyBuilderComponent_Conditional_44_Template_div_cdkDropListDropped_14_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.drop($event));
    });
    \u0275\u0275declareLet(16);
    \u0275\u0275conditionalCreate(17, SurveyBuilderComponent_Conditional_44_Conditional_17_Template, 2, 0)(18, SurveyBuilderComponent_Conditional_44_Conditional_18_Template, 7, 0, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 35)(20, "div", 36)(21, "div", 37)(22, "h3", 38);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 39);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Conditional_44_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editQuestion());
    });
    \u0275\u0275elementStart(26, "icon");
    \u0275\u0275text(27, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 40)(29, "mat-form-field", 8)(30, "icon", 41);
    \u0275\u0275text(31, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 42);
    \u0275\u0275listener("ngModelChange", function SurveyBuilderComponent_Conditional_44_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearchChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-form-field", 8)(34, "mat-select", 43);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275listener("ngModelChange", function SurveyBuilderComponent_Conditional_44_Template_mat_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTypeChange($event));
    });
    \u0275\u0275elementStart(36, "mat-option", 44);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, SurveyBuilderComponent_Conditional_44_mat_option_39_Template, 2, 2, "mat-option", 13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 45);
    \u0275\u0275pipe(41, "async");
    \u0275\u0275repeaterCreate(42, SurveyBuilderComponent_Conditional_44_For_43_Template, 36, 12, "div", 46, _forTrack03);
    \u0275\u0275pipe(44, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const page_list_r20 = \u0275\u0275reference(15);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.page_forms[ctx_r2.active_page]);
    \u0275\u0275advance(3);
    \u0275\u0275property("selectedIndex", ctx_r2.active_page);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.form.value.pages);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r2.form.value.pages.length > 1 ? 13 : -1);
    \u0275\u0275advance(3);
    const page_r21 = \u0275\u0275storeLet(ctx_r2.page_forms[ctx_r2.active_page].value);
    \u0275\u0275advance();
    \u0275\u0275conditional((page_r21 == null ? null : page_r21.question_order.length) > 0 ? 17 : 18);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 13, "APP.CONCIERGE.SURVEY_QUESTION_HEADER"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", ctx_r2.search_text);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(35, 15, "APP.CONCIERGE.SURVEY_QUESTION_TYPES_ALL"))("ngModel", ctx_r2.selected_type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 17, "APP.CONCIERGE.SURVEY_QUESTION_TYPES_ALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.question_options);
    \u0275\u0275advance();
    \u0275\u0275property("cdkDropListData", \u0275\u0275pipeBind1(41, 19, ctx_r2.questions$))("cdkDropListConnectedTo", \u0275\u0275pureFunction1(23, _c15, page_list_r20));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(44, 21, ctx_r2.questions$));
  }
}
function SurveyBuilderComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "survey-outlet", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("survey", ctx_r2.form.value)("preview", true);
  }
}
function SurveyBuilderComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "mat-spinner", 65);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving survey details...");
    \u0275\u0275elementEnd()();
  }
}
var _SurveyBuilderComponent = class _SurveyBuilderComponent extends AsyncHandler {
  constructor(_org, _service, _route, _cdr) {
    super();
    this._org = _org;
    this._service = _service;
    this._route = _route;
    this._cdr = _cdr;
    this.view = "builder";
    this.active_page = 0;
    this.loading = false;
    this.selected_type = "";
    this.search_text = "";
    this.questions = signal([]);
    this.buildings$ = this._org.building_list;
    this.levels$ = this._org.active_levels;
    this.questions$ = this._service.filtered_questions$;
    this.trigger_types = TriggerOptions;
    this.question_types = QuestionTypeMap;
    this.question_options = QuestionTypeOptions;
    this.form = new FormGroup({
      id: new FormControl(""),
      title: new FormControl("", [Validators.required]),
      description: new FormControl(""),
      trigger: new FormControl(""),
      building_id: new FormControl(""),
      zone_id: new FormControl(""),
      pages: new FormControl([
        { title: "", description: "", question_order: [] }
      ])
    });
    this.page_forms = [
      new FormGroup({
        title: new FormControl("", []),
        description: new FormControl(""),
        question_order: new FormControl([])
      })
    ];
  }
  ngOnInit() {
    this.subscription("route.params", this._route.paramMap.subscribe((params) => {
      if (params.has("id")) {
        this._service.setSurvey(params.get("id"));
      }
    }));
    this.subscription("survey", this._service.survey$.subscribe((s) => {
      if (s) {
        this.form.patchValue(s);
        console.log("Survey loaded", s);
        while (s.pages.length > this.page_forms.length) {
          this.page_forms.push(new FormGroup({
            title: new FormControl("", []),
            description: new FormControl(""),
            question_order: new FormControl([])
          }));
        }
      }
    }));
    this.subscription("form_pages", this.form.valueChanges.subscribe(({ pages }) => {
      while (pages.length > this.page_forms.length) {
        this.page_forms.push(new FormGroup({
          title: new FormControl("", []),
          description: new FormControl(""),
          question_order: new FormControl([])
        }));
      }
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        this.page_forms[i].patchValue(page);
      }
    }));
    this.questions$.pipe(first((_) => _.length > 0)).subscribe((l) => this.timeout("questions", () => this.questions.set(l)));
  }
  onPageChange(event) {
    const index = event.index;
    this.active_page = index;
  }
  addPage() {
    const pages = this.form.value.pages;
    this.page_forms.push(new FormGroup({
      title: new FormControl("", []),
      description: new FormControl(""),
      question_order: new FormControl([])
    }));
    this.form.patchValue({
      pages: [
        ...pages,
        { title: "", description: "", question_order: [] }
      ]
    });
  }
  setBuilding(bld) {
    this._org.building = bld;
  }
  removeQuestion(q) {
    this._service.removeQuestion(q);
  }
  duplicateQuestion(q) {
    this._service.editQuestion(__spreadProps(__spreadValues({}, q), { id: void 0 }));
  }
  editQuestion(q) {
    this._service.editQuestion(q);
  }
  removePage() {
    const pages = this.form.value.pages;
    const page_form = this.page_forms[this.active_page];
    pages.splice(this.active_page, 1);
    if (this.active_page >= pages.length) {
      page_form.patchValue({
        title: "",
        description: "",
        question_order: []
      });
      this.active_page = pages.length - 1;
    }
    this.form.patchValue({ pages });
  }
  removePageQuestion(idx) {
    const page_form = this.page_forms[this.active_page];
    const order = page_form.get("question_order").value;
    order.splice(idx, 1);
    page_form.patchValue({ question_order: order });
  }
  async drop(event) {
    if (event.previousContainer === event.container) {
      const order = this.page_forms[this.active_page].get("question_order").value;
      moveItemInArray(order, event.previousIndex, event.currentIndex);
      this.page_forms[this.active_page].patchValue({
        question_order: order
      });
    } else {
      const questions = await nextValueFrom(this.questions$);
      const q_id = questions[event.previousIndex].id;
      const order = this.page_forms[this.active_page].get("question_order").value;
      order.splice(event.currentIndex, 0, q_id);
      this.page_forms[this.active_page].patchValue({
        question_order: order
      });
    }
  }
  onSearchChange(search_text) {
    this.search_text = search_text;
    this._service.setQuestionFilters({
      search_text,
      type: this.selected_type
    });
  }
  onTypeChange(type) {
    this.selected_type = type;
    this._service.setQuestionFilters({
      type,
      search_text: this.search_text
    });
  }
  async saveSurvey() {
    this.form.markAllAsTouched();
    if (!this.form.valid)
      return;
    this.loading = true;
    const page_count = this.form.value.pages?.length || 0;
    const pages = [];
    for (let i = 0; i < page_count; i++) {
      const page_form = this.page_forms[i];
      pages.push(page_form.value);
    }
    this.form.patchValue({ pages });
    const survey = this.form.value;
    const call = this.form.value.id ? Sa(survey) : ba(`${survey.id}`, survey);
    await lastValueFrom(call).catch((error) => {
      notifyError("Failed to save survey details. Error: ", error);
      throw error;
    });
    notifySuccess("Successfully saved survey details.");
    this.loading = false;
  }
};
_SurveyBuilderComponent.\u0275fac = function SurveyBuilderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SurveyBuilderComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(NewSurveyService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_SurveyBuilderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SurveyBuilderComponent, selectors: [["survey-builder"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 47, vars: 53, consts: [["page_list", "cdkDropList"], ["actionsMenu", "matMenu"], [1, "sticky", "top-0", "mb-2", "px-8"], ["header", "", 1, "flex", "items-center", "py-4"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "font", "flex", "flex-1", "flex-col", "text-2xl"], ["btn", "", "matRipple", "", 1, "w-32"], ["settings", "", 1, "mb-2", "flex", "space-x-2", 3, "formGroup"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["formControlName", "building_id", 3, "placeholder"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["formControlName", "zone_id", 3, "placeholder"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "trigger", 3, "placeholder"], ["details", "", 1, "mb-2", "flex", "space-x-2", 3, "formGroup"], ["matInput", "", "required", "", "formControlName", "title", 3, "placeholder"], ["matInput", "", "formControlName", "description", 3, "placeholder"], ["view-select", "", 1, "flex", "w-full", "items-center", "space-x-2", "rounded", "bg-base-200", "p-2"], ["matRipple", "", 1, "flex", "h-10", "flex-1", "items-center", "justify-center", "rounded", "hover:bg-base-300", 3, "click"], ["builder", "", 1, "flex", "h-px", "w-full", "flex-1", "space-x-2", "bg-base-200", "px-8", "py-2"], ["preview", "", 1, "h-px", "w-full", "flex-1"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "click", "value"], ["pages", "", 1, "sticky", "top-0", "h-full", "w-1/2", "flex-1", "space-y-2", "overflow-auto", 3, "formGroup"], [1, "flex", "items-center", "space-x-2"], [1, "relative", "h-[calc(3rem+2px)]", "flex-1", "overflow-hidden", "rounded", "border", "border-base-300", "bg-base-100"], [3, "selectedTabChange", "selectedIndex"], [3, "label"], ["icon", "", "matRipple", "", "matTooltip", "Add Page", 1, "h-12", "w-12", "rounded", "border", "border-base-300", "bg-base-100", 3, "click"], ["appearance", "outline", 1, "no-subscript", "w-1/2", "flex-1", "rounded", "bg-base-100"], ["matInput", "", "formControlName", "title", "placeholder", "Page Title"], ["icon", "", "matRipple", "", "matTooltip", "Remove Page", 1, "h-12", "w-12", "rounded", "border", "border-base-300", "bg-base-100", "text-error"], ["page-questions", "", "cdkDropList", "", 1, "space-y-2", 3, "cdkDropListDropped"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "p-12", "text-center", "opacity-30"], ["questions", "", 1, "h-full", "w-[20rem]", "space-y-2", "overflow-auto", "rounded", "border", "border-base-300", "bg-base-100", "pb-2", "shadow"], [1, "sticky", "top-0", "z-10", "bg-base-100"], [1, "flex", "items-center", "justify-between", "border-b", "border-base-200", "px-2", "py-1"], [1, "px-2", "font-medium"], ["icon", "", "matRipple", "", "matTooltip", "Add Question", 3, "click"], [1, "flex", "items-center", "justify-between", "space-x-2", "border-b", "border-base-200", "p-2"], ["matPrefix", "", 1, "relative", "-left-1", "text-2xl"], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "placeholder", "ngModel"], ["value", ""], ["cdkDropList", "", 1, "space-y-2", "px-2", 3, "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", 1, "relative", "flex", "w-full", "items-center", "rounded", "border", "border-base-200", "bg-base-200"], ["icon", "", "matRipple", "", "matTooltip", "Remove Page", 1, "h-12", "w-12", "rounded", "border", "border-base-300", "bg-base-100", "text-error", 3, "click"], ["cdkDrag", "", 1, "relative", "-ml-px", "flex"], ["class", "border-3 h-20 w-full rounded-lg border-dashed border-base-content bg-base-300 opacity-50", 4, "cdkDragPlaceholder"], [1, "relative", "left-px", "z-10", "flex", "flex-col", "items-center", "space-y-1"], [1, "relative", "left-px", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-l", "border-y", "border-l", "border-base-400", "bg-base-100", "p-2", "font-mono"], ["icon", "", "matRipple", "", "cdkDragHandle", "", "matTooltip", "Reorder Question", 1, "cursor-grab", "rounded-l", "rounded-r-none", "border-y", "border-l", "border-base-400", "bg-base-100"], [1, "text-xl"], ["icon", "", "matRipple", "", "matTooltip", "Remove Question", 1, "rounded-l", "rounded-r-none", "border-y", "border-l", "border-base-400", "bg-base-100", "text-error", 3, "click"], [1, "z-0", "flex-1", 3, "preview", "question"], [1, "border-3", "h-20", "w-full", "rounded-lg", "border-dashed", "border-base-content", "bg-base-300", "opacity-50"], [1, "text-8xl"], ["cdkDragHandle", "", "matRipple", "", "matTooltip", "Drag Question onto page", 1, "flex", "h-20", "h-full", "flex-col", "justify-center", "rounded", "bg-base-200", "p-1", "hover:cursor-move"], [1, "flex-1", "bg-base-100", "py-2", "pl-4", "pr-12"], [1, "text-sm", "opacity-40"], ["icon", "", "matRipple", "", 1, "absolute", "right-1", "top-1", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "text-xl", "text-error"], [3, "survey", "preview"], ["diameter", "48"]], template: function SurveyBuilderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "a", 4)(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 6);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 7)(13, "mat-form-field", 8)(14, "mat-select", 9);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275template(16, SurveyBuilderComponent_mat_option_16_Template, 2, 2, "mat-option", 10);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-form-field", 8)(19, "mat-select", 11);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "mat-option", 12);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, SurveyBuilderComponent_mat_option_24_Template, 2, 2, "mat-option", 13);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-form-field", 8)(27, "mat-select", 14);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275template(29, SurveyBuilderComponent_mat_option_29_Template, 2, 2, "mat-option", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 15)(31, "mat-form-field", 8);
    \u0275\u0275element(32, "input", 16);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-form-field", 8);
    \u0275\u0275element(35, "input", 17);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 18)(38, "button", 19);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Template_button_click_38_listener() {
      return ctx.view = "builder";
    });
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 19);
    \u0275\u0275listener("click", function SurveyBuilderComponent_Template_button_click_41_listener() {
      return ctx.view = "preview";
    });
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(44, SurveyBuilderComponent_Conditional_44_Template, 45, 25, "div", 20)(45, SurveyBuilderComponent_Conditional_45_Template, 2, 2, "div", 21);
    \u0275\u0275conditionalCreate(46, SurveyBuilderComponent_Conditional_46_Template, 4, 0, "div", 22);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(51, _c08, ctx.form.value.building_id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 27, ctx.form.value.id ? "APP.CONCIERGE.SURVEY_EDIT" : "APP.CONCIERGE.SURVEY_NEW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 29, "COMMON.SAVE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 31, "COMMON.BUILDING_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(17, 33, ctx.buildings$));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 35, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx.form.value.building_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 37, "COMMON.LEVEL_ALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(25, 39, ctx.levels$));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(28, 41, "COMMON.NONE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.trigger_types);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(33, 43, "FORM.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(36, 45, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-secondary", ctx.view === "builder")("text-secondary-content", ctx.view === "builder");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 47, "APP.CONCIERGE.SURVEY_BUILDER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-secondary", ctx.view === "preview")("text-secondary-content", ctx.view === "preview");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 49, "COMMON.PREVIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.view === "builder" ? 44 : 45);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.loading ? 46 : -1);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  AsyncPipe,
  RouterModule,
  RouterLink,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  NgModel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  MatRippleModule,
  MatRipple,
  MatFormFieldModule,
  MatFormField,
  MatPrefix,
  MatInputModule,
  MatInput,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatTooltipModule,
  MatTooltip,
  IconComponent,
  TranslatePipe,
  SurveyOutletComponent,
  DragDropModule,
  CdkDropList,
  CdkDrag,
  CdkDragHandle,
  CdkDragPlaceholder,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatTabsModule,
  MatTab,
  MatTabGroup,
  QuestionPipe,
  QuestionComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=survey-builder.component.css.map */"] });
var SurveyBuilderComponent = _SurveyBuilderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyBuilderComponent, [{
    type: Component,
    args: [{ selector: "survey-builder", template: `
        <div class="sticky top-0 mb-2 px-8">
            <div header class="flex items-center py-4">
                <a
                    icon
                    matRipple
                    [routerLink]="['/surveys', 'list', form.value.building_id]"
                >
                    <icon>arrow_back</icon>
                </a>
                <div class="font flex flex-1 flex-col text-2xl">
                    <h2>
                        {{
                            (form.value.id
                                ? 'APP.CONCIERGE.SURVEY_EDIT'
                                : 'APP.CONCIERGE.SURVEY_NEW'
                            ) | translate
                        }}
                    </h2>
                </div>
                <button btn matRipple class="w-32">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </div>
            <div settings class="mb-2 flex space-x-2" [formGroup]="form">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select
                        [placeholder]="'COMMON.BUILDING_SELECT' | translate"
                        formControlName="building_id"
                    >
                        <mat-option
                            *ngFor="let b of buildings$ | async"
                            [value]="b.id"
                            (click)="onBuildingClick(b)"
                            >{{ b.display_name || b.name }}</mat-option
                        >
                    </mat-select>
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select
                        [placeholder]="'COMMON.LEVEL_ALL' | translate"
                        formControlName="zone_id"
                    >
                        <mat-option [value]="form.value.building_id">
                            {{ 'COMMON.LEVEL_ALL' | translate }}
                        </mat-option>
                        <mat-option
                            *ngFor="let b of levels$ | async"
                            [value]="b.id"
                            >{{ b.display_name || b.name }}</mat-option
                        >
                    </mat-select>
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select
                        [placeholder]="'COMMON.NONE' | translate"
                        formControlName="trigger"
                    >
                        <mat-option
                            *ngFor="let op of trigger_types"
                            [value]="op.id"
                        >
                            {{ op.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div details class="mb-2 flex space-x-2" [formGroup]="form">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <input
                        matInput
                        required
                        [placeholder]="'FORM.TITLE' | translate"
                        formControlName="title"
                    />
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <input
                        matInput
                        [placeholder]="'COMMON.DESCRIPTION' | translate"
                        formControlName="description"
                    />
                </mat-form-field>
            </div>
            <div
                view-select
                class="flex w-full items-center space-x-2 rounded bg-base-200 p-2"
            >
                <button
                    matRipple
                    class="flex h-10 flex-1 items-center justify-center rounded hover:bg-base-300"
                    [class.bg-secondary]="view === 'builder'"
                    [class.text-secondary-content]="view === 'builder'"
                    (click)="view = 'builder'"
                >
                    {{ 'APP.CONCIERGE.SURVEY_BUILDER' | translate }}
                </button>
                <button
                    matRipple
                    class="flex h-10 flex-1 items-center justify-center rounded hover:bg-base-300"
                    [class.bg-secondary]="view === 'preview'"
                    [class.text-secondary-content]="view === 'preview'"
                    (click)="view = 'preview'"
                >
                    {{ 'COMMON.PREVIEW' | translate }}
                </button>
            </div>
        </div>
        @if (this.view === 'builder') {
            <div
                builder
                class="flex h-px w-full flex-1 space-x-2 bg-base-200 px-8 py-2"
            >
                <div
                    pages
                    class="sticky top-0 h-full w-1/2 flex-1 space-y-2 overflow-auto"
                    [formGroup]="page_forms[active_page]"
                >
                    <div class="flex items-center space-x-2">
                        <div
                            class="relative h-[calc(3rem+2px)] flex-1 overflow-hidden rounded border border-base-300 bg-base-100"
                        >
                            <mat-tab-group
                                [selectedIndex]="active_page"
                                (selectedTabChange)="onPageChange($event)"
                            >
                                @for (
                                    page of form.value.pages;
                                    track idx;
                                    let idx = $index
                                ) {
                                    <mat-tab
                                        [label]="
                                            page.title || 'Page ' + (idx + 1)
                                        "
                                    ></mat-tab>
                                }
                            </mat-tab-group>
                        </div>

                        <button
                            icon
                            matRipple
                            class="h-12 w-12 rounded border border-base-300 bg-base-100"
                            matTooltip="Add Page"
                            (click)="addPage()"
                        >
                            <icon>add</icon>
                        </button>
                    </div>
                    <div class="flex items-center space-x-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-1/2 flex-1 rounded bg-base-100"
                        >
                            <input
                                matInput
                                formControlName="title"
                                placeholder="Page Title"
                            />
                        </mat-form-field>
                        @if (form.value.pages.length > 1) {
                            <button
                                icon
                                matRipple
                                class="h-12 w-12 rounded border border-base-300 bg-base-100 text-error"
                                matTooltip="Remove Page"
                                (click)="removePage()"
                            >
                                <icon>delete</icon>
                            </button>
                        }
                    </div>
                    <div
                        page-questions
                        cdkDropList
                        #page_list="cdkDropList"
                        (cdkDropListDropped)="drop($event)"
                        class="space-y-2"
                    >
                        @let page = page_forms[active_page].value;
                        @if (page?.question_order.length > 0) {
                            @for (
                                q_id of page.question_order;
                                track q_id;
                                let idx = $index
                            ) {
                                @let quest =
                                    q_id | question: questions().length;
                                @if (quest) {
                                    <div cdkDrag class="relative -ml-px flex">
                                        <div
                                            class="border-3 h-20 w-full rounded-lg border-dashed border-base-content bg-base-300 opacity-50"
                                            *cdkDragPlaceholder
                                        ></div>
                                        <div
                                            class="relative left-px z-10 flex flex-col items-center space-y-1"
                                        >
                                            <div
                                                class="relative left-px flex h-10 w-10 items-center justify-center rounded-l border-y border-l border-base-400 bg-base-100 p-2 font-mono"
                                            >
                                                {{ idx + 1 }}
                                            </div>
                                            <button
                                                icon
                                                matRipple
                                                cdkDragHandle
                                                class="cursor-grab rounded-l rounded-r-none border-y border-l border-base-400 bg-base-100"
                                                matTooltip="Reorder Question"
                                            >
                                                <icon class="text-xl"
                                                    >drag_indicator</icon
                                                >
                                            </button>
                                            <button
                                                icon
                                                matRipple
                                                class="rounded-l rounded-r-none border-y border-l border-base-400 bg-base-100 text-error"
                                                matTooltip="Remove Question"
                                                (click)="
                                                    removePageQuestion(idx)
                                                "
                                            >
                                                <icon class="text-xl"
                                                    >delete</icon
                                                >
                                            </button>
                                        </div>
                                        <placeos-question
                                            class="z-0 flex-1"
                                            [preview]="true"
                                            [question]="quest"
                                        >
                                        </placeos-question>
                                    </div>
                                }
                            }
                        } @else {
                            <div
                                class="flex h-full w-full flex-col items-center justify-center space-y-4 p-12 text-center opacity-30"
                            >
                                <icon class="text-8xl">list</icon>
                                <p>No questions added to this page yet.</p>
                                <p>
                                    Drag and drop questions to from the right to
                                    start building your survey.
                                </p>
                            </div>
                        }
                    </div>
                </div>
                <div
                    questions
                    class="h-full w-[20rem] space-y-2 overflow-auto rounded border border-base-300 bg-base-100 pb-2 shadow"
                >
                    <div class="sticky top-0 z-10 bg-base-100">
                        <div
                            class="flex items-center justify-between border-b border-base-200 px-2 py-1"
                        >
                            <h3 class="px-2 font-medium">
                                {{
                                    'APP.CONCIERGE.SURVEY_QUESTION_HEADER'
                                        | translate
                                }}
                            </h3>
                            <button
                                icon
                                matRipple
                                matTooltip="Add Question"
                                (click)="editQuestion()"
                            >
                                <icon>add</icon>
                            </button>
                        </div>
                        <div
                            class="flex items-center justify-between space-x-2 border-b border-base-200 p-2"
                        >
                            <mat-form-field
                                class="no-subscript flex-1"
                                appearance="outline"
                            >
                                <icon
                                    class="relative -left-1 text-2xl"
                                    matPrefix
                                    >search</icon
                                >
                                <input
                                    matInput
                                    [ngModel]="search_text"
                                    (ngModelChange)="onSearchChange($event)"
                                    placeholder="Search..."
                                />
                            </mat-form-field>
                            <mat-form-field
                                class="no-subscript flex-1"
                                appearance="outline"
                            >
                                <mat-select
                                    [placeholder]="
                                        'APP.CONCIERGE.SURVEY_QUESTION_TYPES_ALL'
                                            | translate
                                    "
                                    [ngModel]="selected_type"
                                    (ngModelChange)="onTypeChange($event)"
                                >
                                    <mat-option value="">
                                        {{
                                            'APP.CONCIERGE.SURVEY_QUESTION_TYPES_ALL'
                                                | translate
                                        }}
                                    </mat-option>
                                    <mat-option
                                        *ngFor="let item of question_options"
                                        [value]="item.id"
                                    >
                                        {{ item.name }}
                                    </mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                    </div>
                    <div
                        class="space-y-2 px-2"
                        cdkDropList
                        [cdkDropListData]="questions$ | async"
                        [cdkDropListConnectedTo]="[page_list]"
                    >
                        @for (
                            question of questions$ | async;
                            track question.id
                        ) {
                            <div
                                class="relative flex w-full items-center rounded border border-base-200 bg-base-200"
                                cdkDrag
                            >
                                <div
                                    class="border-3 h-20 w-full rounded-lg border-dashed border-base-content bg-base-300 opacity-50"
                                    *cdkDragPlaceholder
                                ></div>
                                <button
                                    cdkDragHandle
                                    class="flex h-20 h-full flex-col justify-center rounded bg-base-200 p-1 hover:cursor-move"
                                    matRipple
                                    matTooltip="Drag Question onto page"
                                >
                                    <icon>drag_indicator</icon>
                                </button>
                                <div class="flex-1 bg-base-100 py-2 pl-4 pr-12">
                                    <div>{{ question.title }}</div>
                                    <div class="text-sm opacity-40">
                                        {{ question_types[question.type] }}
                                    </div>
                                </div>
                                <button
                                    icon
                                    matRipple
                                    class="absolute right-1 top-1"
                                    [matMenuTriggerFor]="actionsMenu"
                                >
                                    <icon>more_vert</icon>
                                </button>
                                <mat-menu #actionsMenu="matMenu">
                                    <button
                                        mat-menu-item
                                        (click)="duplicateQuestion(q)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-xl"
                                                >content_copy</icon
                                            >
                                            <div>
                                                {{
                                                    'COMMON.DUPLICATE'
                                                        | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                    <button
                                        mat-menu-item
                                        (click)="editQuestion(q)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-xl">edit</icon>
                                            <div>
                                                {{ 'COMMON.EDIT' | translate }}
                                            </div>
                                        </div>
                                    </button>
                                    <button
                                        mat-menu-item
                                        (click)="removeQuestion(q)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-xl text-error"
                                                >delete</icon
                                            >
                                            <div>
                                                {{
                                                    'COMMON.DELETE' | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                </mat-menu>
                            </div>
                        }
                    </div>
                </div>
            </div>
        } @else {
            <div preview class="h-px w-full flex-1">
                <survey-outlet
                    [survey]="form.value"
                    [preview]="true"
                ></survey-outlet>
            </div>
        }
        @if (loading) {
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner diameter="48"></mat-spinner>
                <p>Saving survey details...</p>
            </div>
        }
    `, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe,
      SurveyOutletComponent,
      DragDropModule,
      MatMenuModule,
      MatTabsModule,
      QuestionPipe,
      QuestionComponent
    ], styles: ["/* angular:styles/component:css;84d421d6fef93eef0f67860b99f41f2c65d8f21fd65b504097c9d7d840f02492;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/surveys/survey-builder.component.ts */\n:host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=survey-builder.component.css.map */\n"] }]
  }], () => [{ type: OrganisationService }, { type: NewSurveyService }, { type: ActivatedRoute }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SurveyBuilderComponent, { className: "SurveyBuilderComponent", filePath: "apps/concierge/src/app/surveys/survey-builder.component.ts", lineNumber: 534 });
})();

// apps/concierge/src/app/surveys/survey-listings.component.ts
var _c09 = () => ["/surveys"];
var _c16 = () => ["/surveys", "builder"];
var _c22 = (a0) => ({ building_id: a0 });
var _c32 = (a0) => ({ key: "title", name: a0 });
var _c42 = (a0, a1) => ({ key: "zone_id", name: a0, content: a1 });
var _c5 = (a0, a1) => ({ key: "trigger", name: a0, content: a1 });
var _c6 = () => ({ key: "id", name: "Link", show: false });
var _c7 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c8 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _c9 = (a0) => ["/surveys", "responses", a0];
var _c10 = (a0) => ["/surveys", "builder", a0];
var _c11 = (a0) => ["/surveys", "run", a0];
function SurveyListingsComponent_ng_template_22_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LEVEL_ALL"), " ");
  }
}
function SurveyListingsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "level");
    \u0275\u0275pipe(3, "level");
    \u0275\u0275conditionalCreate(4, SurveyListingsComponent_ng_template_22_Conditional_4_Template, 3, 3, "span", 17);
    \u0275\u0275pipe(5, "level");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const data_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = \u0275\u0275pipeBind1(2, 2, data_r1)) == null ? null : tmp_5_0.display_name) || ((tmp_5_0 = \u0275\u0275pipeBind1(3, 4, data_r1)) == null ? null : tmp_5_0.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(5, 6, data_r1) ? 4 : -1);
  }
}
function SurveyListingsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2, " ");
  }
}
function SurveyListingsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 20)(2, "icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 3)(6, "a", 21)(7, "div", 22)(8, "icon", 13);
    \u0275\u0275text(9, "analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "a", 21)(14, "div", 22)(15, "icon", 13);
    \u0275\u0275text(16, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "a", 23)(21, "div", 22)(22, "icon", 13);
    \u0275\u0275text(23, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "button", 24);
    \u0275\u0275listener("click", function SurveyListingsComponent_ng_template_26_Template_button_click_27_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.remove(row_r4));
    });
    \u0275\u0275elementStart(28, "div", 22)(29, "icon", 25);
    \u0275\u0275text(30, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    const actionsMenu_r6 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", actionsMenu_r6);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c9, row_r4.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "APP.CONCIERGE.SURVEY_RESPONSES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c10, row_r4.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 10, "APP.CONCIERGE.SURVEY_EDIT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c11, row_r4.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 12, "APP.CONCIERGE.SURVEY_TEST"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 14, "APP.CONCIERGE.SURVEY_REMOVE"));
  }
}
var _SurveyListingsComponent = class _SurveyListingsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._route = inject(ActivatedRoute);
    this._survey = inject(NewSurveyService);
    this.loading$ = this._survey.loading$;
    this.surveys$ = this._survey.building_surveys$;
  }
  get building() {
    return this._survey.building;
  }
  async ngOnInit() {
    this.subscription("route-param", this._route.paramMap.subscribe((params) => this._survey.setBuilding(params.get("id") || "")));
  }
  async remove(survey) {
    await this._survey.removeSurvey(survey);
  }
};
_SurveyListingsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SurveyListingsComponent_BaseFactory;
  return function SurveyListingsComponent_Factory(__ngFactoryType__) {
    return (\u0275SurveyListingsComponent_BaseFactory || (\u0275SurveyListingsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SurveyListingsComponent)))(__ngFactoryType__ || _SurveyListingsComponent);
  };
})();
_SurveyListingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SurveyListingsComponent, selectors: [["survey-listings"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 28, vars: 40, consts: [["level_template", ""], ["trigger_template", ""], ["action_template", ""], ["actionsMenu", "matMenu"], [1, "flex", "w-full", "items-center", "justify-between", "px-8", "py-4"], [1, "flex"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "mr-2", "flex"], [1, "flex", "flex-col"], [1, "text-2xl"], [1, "text-4xl"], ["btn", "", "matRipple", "", 1, "space-x-2", 3, "routerLink", "queryParams"], [1, "ml-4"], [1, "text-xl"], [1, "flex", "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], ["empty_message", "No surveys found. Click on <i>Add survey</i> to create new surveys for this building.", 1, "block", "w-full", "min-w-[36rem]", "text-sm", 3, "data", "columns", "sortable"], [1, "p-4"], [1, "opacity-30"], [1, "p-4", "capitalize"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink"], [1, "flex", "items-center", "space-x-2"], ["mat-menu-item", "", "target", "_blank", "rel", "noopener noreferer", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], [1, "text-xl", "text-error"]], template: function SurveyListingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "a", 6)(3, "icon", 7);
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "span", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "a", 11)(12, "span", 12);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "icon", 13);
    \u0275\u0275text(16, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 14);
    \u0275\u0275element(18, "simple-table", 15);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, SurveyListingsComponent_ng_template_22_Template, 6, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(24, SurveyListingsComponent_ng_template_24_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(26, SurveyListingsComponent_ng_template_26_Template, 34, 22, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const level_template_r7 = \u0275\u0275reference(23);
    const trigger_template_r8 = \u0275\u0275reference(25);
    const action_template_r9 = \u0275\u0275reference(27);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c09));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "APP.CONCIERGE.SURVEY_LIST_HEADER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx.building == null ? null : ctx.building.display_name) || (ctx.building == null ? null : ctx.building.name), " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(20, _c16))("queryParams", \u0275\u0275pureFunction1(21, _c22, ctx.building == null ? null : ctx.building.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "APP.CONCIERGE.SURVEY_ADD"));
    \u0275\u0275advance(5);
    \u0275\u0275property("data", ctx.surveys$)("columns", \u0275\u0275pureFunction5(34, _c8, \u0275\u0275pureFunction1(23, _c32, \u0275\u0275pipeBind1(19, 13, "FORM.TITLE")), \u0275\u0275pureFunction2(25, _c42, \u0275\u0275pipeBind1(20, 15, "RESOURCE.LEVEL"), level_template_r7), \u0275\u0275pureFunction2(28, _c5, \u0275\u0275pipeBind1(21, 17, "COMMON.TRIGGER"), trigger_template_r8), \u0275\u0275pureFunction0(31, _c6), \u0275\u0275pureFunction1(32, _c7, action_template_r9)))("sortable", true);
  }
}, dependencies: [RouterLink, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, SimpleTableComponent, TranslatePipe, LevelPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=survey-listings.component.css.map */"] });
var SurveyListingsComponent = _SurveyListingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyListingsComponent, [{
    type: Component,
    args: [{ selector: "survey-listings", template: `
        <div class="flex w-full items-center justify-between px-8 py-4">
            <div class="flex">
                <a icon matRipple [routerLink]="['/surveys']">
                    <icon class="mr-2 flex">arrow_back</icon>
                </a>
                <div class="flex flex-col">
                    <span class="text-2xl">{{
                        'APP.CONCIERGE.SURVEY_LIST_HEADER' | translate
                    }}</span>
                    <span class="text-4xl">
                        {{ building?.display_name || building?.name }}
                    </span>
                </div>
            </div>
            <a
                btn
                matRipple
                class="space-x-2"
                [routerLink]="['/surveys', 'builder']"
                [queryParams]="{ building_id: building?.id }"
            >
                <span class="ml-4">{{
                    'APP.CONCIERGE.SURVEY_ADD' | translate
                }}</span>
                <icon class="text-xl">add</icon>
            </a>
        </div>
        <div class="flex h-1/2 w-full flex-1 overflow-auto px-8">
            <simple-table
                class="block w-full min-w-[36rem] text-sm"
                [data]="surveys$"
                [columns]="[
                    { key: 'title', name: 'FORM.TITLE' | translate },
                    {
                        key: 'zone_id',
                        name: 'RESOURCE.LEVEL' | translate,
                        content: level_template,
                    },
                    {
                        key: 'trigger',
                        name: 'COMMON.TRIGGER' | translate,
                        content: trigger_template,
                    },
                    { key: 'id', name: 'Link', show: false },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.5rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
                empty_message="No surveys found. Click on <i>Add survey</i> to create new surveys for this building."
            ></simple-table>
        </div>
        <ng-template #level_template let-data="data">
            <div class="p-4">
                {{ (data | level)?.display_name || (data | level)?.name }}
                @if (!(data | level)) {
                    <span class="opacity-30">
                        {{ 'COMMON.LEVEL_ALL' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #trigger_template let-data="data">
            <div class="p-4 capitalize">
                {{ data }}
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-1">
                <button
                    icon
                    matRipple
                    class="h-12 w-12 rounded"
                    [matMenuTriggerFor]="actionsMenu"
                >
                    <icon>more_vert</icon>
                </button>
                <mat-menu #actionsMenu="matMenu">
                    <a
                        mat-menu-item
                        [routerLink]="['/surveys', 'responses', row.id]"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">analytics</icon>
                            <span>{{
                                'APP.CONCIERGE.SURVEY_RESPONSES' | translate
                            }}</span>
                        </div>
                    </a>
                    <a
                        mat-menu-item
                        [routerLink]="['/surveys', 'builder', row.id]"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit</icon>
                            <span>{{
                                'APP.CONCIERGE.SURVEY_EDIT' | translate
                            }}</span>
                        </div>
                    </a>
                    <a
                        mat-menu-item
                        [routerLink]="['/surveys', 'run', row.id]"
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">open_in_new</icon>
                            <span>{{
                                'APP.CONCIERGE.SURVEY_TEST' | translate
                            }}</span>
                        </div>
                    </a>
                    <button mat-menu-item (click)="remove(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl text-error"> delete </icon>
                            <span>{{
                                'APP.CONCIERGE.SURVEY_REMOVE' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `, standalone: false, styles: ["/* angular:styles/component:css;08c828c36224658230d6844bbbe8551e02a5c30c320aa5e48c90063783b9b8fa;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/surveys/survey-listings.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=survey-listings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SurveyListingsComponent, { className: "SurveyListingsComponent", filePath: "apps/concierge/src/app/surveys/survey-listings.component.ts", lineNumber: 153 });
})();

// apps/concierge/src/app/surveys/survey-responses.component.ts
var _c010 = (a0) => ["/surveys", "list", a0];
var _c17 = (a0, a1) => ({ id: a0, title: a1 });
function SurveyResponsesComponent_div_44_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const p_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, p_r3.title ? "APP.CONCIERGE.SURVEY_ANSWERS_PAGE_WITH_TITLE" : "APP.CONCIERGE.SURVEY_ANSWERS_PAGE", \u0275\u0275pureFunction2(4, _c17, i_r4 + 1, p_r3.title)), " ");
  }
}
function SurveyResponsesComponent_div_44_ng_container_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "new-survey-widget", 23);
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275property("response", r_r5);
  }
}
function SurveyResponsesComponent_div_44_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SurveyResponsesComponent_div_44_ng_container_1_div_1_Template, 3, 7, "div", 21);
    \u0275\u0275elementStart(2, "div", 22);
    \u0275\u0275repeaterCreate(3, SurveyResponsesComponent_div_44_ng_container_1_For_4_Template, 1, 1, "new-survey-widget", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const question_pages_r6 = \u0275\u0275readContextLet(42);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", question_pages_r6.length > 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(p_r3.responses);
  }
}
function SurveyResponsesComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, SurveyResponsesComponent_div_44_ng_container_1_Template, 5, 1, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const question_pages_r6 = \u0275\u0275readContextLet(42);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", question_pages_r6);
  }
}
function SurveyResponsesComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.SURVEY_ANSWERS_EMPTY"));
  }
}
function SurveyResponsesComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275element(2, "mat-spinner", 29);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "APP.CONCIERGE.SURVEY_ANSWERS_LOADING"));
  }
}
var _SurveyResponsesComponent = class _SurveyResponsesComponent extends AsyncHandler {
  get week_start() {
    return this._settings.get("app.week_start");
  }
  constructor(_settings, _route, _service) {
    super();
    this._settings = _settings;
    this._route = _route;
    this._service = _service;
    this.options$ = new BehaviorSubject({});
    this.loading$ = new BehaviorSubject("");
    this.survey$ = this._service.survey$;
    this.questions$ = this._service.survey_questions$;
    this.answers$ = combineLatest([
      this.survey$,
      this.options$
    ]).pipe(filter(([_]) => !!_), switchMap(([{ id }, { start, end }]) => {
      this.loading$.next(addStringKey(this.loading$.getValue(), "ANSWERS"));
      const q = {
        survey_id: id
      };
      if (start || end) {
        q.created_after = getUnixTime(startOfDay(start || Date.now()));
        q.created_before = getUnixTime(endOfDay(end || Date.now()));
      }
      return sa(q).pipe(catchError(() => of([])));
    }), tap(() => this.loading$.next(removeStringKey(this.loading$.getValue(), "ANSWERS"))), shareReplay(1), startWith([]));
    this.paged_responses$ = combineLatest([
      this.survey$,
      this.questions$,
      this.answers$
    ]).pipe(map(([survey, questions, answers]) => {
      return [
        survey,
        questions.map((item) => ({
          question: item,
          answers: answers.filter((a) => a.question_id === item.id)
        }))
      ];
    }), map(([survey, q_list]) => {
      const mapping = {};
      q_list.forEach((e) => mapping[e.question.id] = e);
      const paged = [];
      survey?.pages.forEach((p) => {
        const t = { title: p.title, responses: [] };
        p.question_order.forEach((q) => t.responses.push(mapping[q]));
        paged.push(t);
      });
      return paged;
    }));
  }
  ngOnInit() {
    this.subscription("params", this._route.paramMap.subscribe((params) => {
      this._service.setSurvey(params.get("id") || "");
    }));
  }
  setStartDate(date) {
    this.options$.next(__spreadProps(__spreadValues({}, this.options$.getValue()), { start: date }));
  }
  setEndDate(date) {
    this.options$.next(__spreadProps(__spreadValues({}, this.options$.getValue()), { end: date }));
  }
};
_SurveyResponsesComponent.\u0275fac = function SurveyResponsesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SurveyResponsesComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(NewSurveyService));
};
_SurveyResponsesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SurveyResponsesComponent, selectors: [["survey-responses"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 49, vars: 44, consts: [["startDate", ""], ["endDate", ""], ["empty_template", ""], [1, "flex", "w-full", "items-center", "justify-between", "pb-4", "pl-4", "pr-8", "pt-8"], [1, "flex", "flex-row"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "flex"], [1, "space-y-2"], [1, "mt-1", "text-2xl"], [1, "text-lg"], [3, "week_start"], [3, "ngModelChange", "ngModel"], [1, "mb-4", "flex", "justify-end", "space-x-4", "px-8"], [1, "flex", "flex-1", "flex-col", "items-center", "rounded", "border", "border-base-300", "p-4"], [1, "text-4xl"], [1, "flex", "flex-1", "flex-col", "items-center", "space-y-2", "rounded", "border", "border-base-300", "p-4"], [1, "font-mono", "text-xl", "capitalize"], ["class", "h-1/2 flex-1 overflow-auto border-t border-base-300 bg-base-200", 4, "ngIf", "ngIfElse"], ["class", "absolute inset-0 z-10 flex bg-base-100 opacity-60", 4, "ngIf"], [1, "h-1/2", "flex-1", "overflow-auto", "border-t", "border-base-300", "bg-base-200"], [4, "ngFor", "ngForOf"], ["class", "flex w-full px-8 pt-2 text-xl font-medium", 4, "ngIf"], [1, "grid", "w-full", "grid-cols-2", "gap-4", "px-6", "py-2", "xl:grid-cols-3"], [3, "response"], [1, "flex", "w-full", "px-8", "pt-2", "text-xl", "font-medium"], [1, "flex", "min-h-[10rem]", "w-full", "flex-col", "items-center", "justify-center"], [1, "text-lg", "opacity-30"], [1, "absolute", "inset-0", "z-10", "flex", "bg-base-100", "opacity-60"], [1, "m-auto", "flex", "flex-col", "items-center", "space-y-4"], [3, "diameter"]], template: function SurveyResponsesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 3)(1, "div", 4)(2, "a", 5);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "icon", 6);
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7)(7, "div", 8);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "date-range-field", 10)(14, "input", 11, 0);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275listener("ngModelChange", function SurveyResponsesComponent_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event ? ctx.setStartDate($event) : "");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 11, 1);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275listener("ngModelChange", function SurveyResponsesComponent_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event ? ctx.setEndDate($event) : "");
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 12)(21, "div", 13)(22, "h3");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 14);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 13)(29, "h3");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 14);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 15)(36, "h3");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 16);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275declareLet(42);
    \u0275\u0275pipe(43, "async");
    \u0275\u0275template(44, SurveyResponsesComponent_div_44_Template, 2, 1, "div", 17)(45, SurveyResponsesComponent_ng_template_45_Template, 4, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(47, SurveyResponsesComponent_div_47_Template, 6, 4, "div", 18);
    \u0275\u0275pipe(48, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_14_0;
    const empty_template_r7 = \u0275\u0275reference(46);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(42, _c010, (tmp_3_0 = \u0275\u0275pipeBind1(3, 15, ctx.survey$)) == null ? null : tmp_3_0.building_id));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 17, "APP.CONCIERGE.SURVEY_ANSWERS_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = \u0275\u0275pipeBind1(12, 19, ctx.survey$)) == null ? null : tmp_5_0.title) || "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("week_start", ctx.week_start);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(16, 21, ctx.options$).start);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(19, 23, ctx.options$).start);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 25, "APP.CONCIERGE.SURVEY_ANSWERS_QUESTIONS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_10_0 = \u0275\u0275pipeBind1(27, 27, ctx.questions$)) == null ? null : tmp_10_0.length) || 0, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 29, "APP.CONCIERGE.SURVEY_ANSWERS_ANSWERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_12_0 = \u0275\u0275pipeBind1(34, 31, ctx.answers$)) == null ? null : tmp_12_0.length) || 0, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 33, "APP.CONCIERGE.SURVEY_ANSWERS_TRIGGER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_14_0 = \u0275\u0275pipeBind1(41, 35, ctx.survey$)) == null ? null : tmp_14_0.trigger, " ");
    \u0275\u0275advance(2);
    const question_pages_r8 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(43, 37, ctx.paged_responses$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (question_pages_r8 == null ? null : question_pages_r8.length) > 0)("ngIfElse", empty_template_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(48, 40, ctx.loading$));
  }
}, dependencies: [NgForOf, NgIf, RouterLink, DefaultValueAccessor, NgControlStatus, NgModel, MatRipple, MatProgressSpinner, IconComponent, DateRangeFieldComponent, NewSurveyWidgetComponent, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n  overflow: auto;\n}\n/*# sourceMappingURL=survey-responses.component.css.map */"] });
var SurveyResponsesComponent = _SurveyResponsesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyResponsesComponent, [{
    type: Component,
    args: [{ selector: "survey-responses", template: `
        <header
            class="flex w-full items-center justify-between pb-4 pl-4 pr-8 pt-8"
        >
            <div class="flex flex-row">
                <a
                    icon
                    matRipple
                    [routerLink]="[
                        '/surveys',
                        'list',
                        (survey$ | async)?.building_id,
                    ]"
                >
                    <icon class="flex">arrow_back</icon>
                </a>
                <div class="space-y-2">
                    <div class="mt-1 text-2xl">
                        {{ 'APP.CONCIERGE.SURVEY_ANSWERS_HEADER' | translate }}
                    </div>
                    <div class="text-lg">
                        {{ (survey$ | async)?.title || '' }}
                    </div>
                </div>
            </div>
            <date-range-field [week_start]="week_start">
                <input
                    #startDate
                    [ngModel]="(options$ | async).start"
                    (ngModelChange)="$event ? setStartDate($event) : ''"
                />
                <input
                    #endDate
                    [ngModel]="(options$ | async).start"
                    (ngModelChange)="$event ? setEndDate($event) : ''"
                />
            </date-range-field>
        </header>
        <div class="mb-4 flex justify-end space-x-4 px-8">
            <div
                class="flex flex-1 flex-col items-center rounded border border-base-300 p-4"
            >
                <h3>
                    {{ 'APP.CONCIERGE.SURVEY_ANSWERS_QUESTIONS' | translate }}
                </h3>
                <p class="text-4xl">
                    {{ (questions$ | async)?.length || 0 }}
                </p>
            </div>
            <div
                class="flex flex-1 flex-col items-center rounded border border-base-300 p-4"
            >
                <h3>
                    {{ 'APP.CONCIERGE.SURVEY_ANSWERS_ANSWERS' | translate }}
                </h3>
                <p class="text-4xl">
                    {{ (answers$ | async)?.length || 0 }}
                </p>
            </div>
            <div
                class="flex flex-1 flex-col items-center space-y-2 rounded border border-base-300 p-4"
            >
                <h3>
                    {{ 'APP.CONCIERGE.SURVEY_ANSWERS_TRIGGER' | translate }}
                </h3>
                <p class="font-mono text-xl capitalize">
                    {{ (survey$ | async)?.trigger }}
                </p>
            </div>
        </div>
        @let question_pages = paged_responses$ | async;
        <div
            class="h-1/2 flex-1 overflow-auto border-t border-base-300 bg-base-200"
            *ngIf="question_pages?.length > 0; else empty_template"
        >
            <ng-container *ngFor="let p of question_pages; let i = index">
                <div
                    class="flex w-full px-8 pt-2 text-xl font-medium"
                    *ngIf="question_pages.length > 1"
                >
                    {{
                        (p.title
                            ? 'APP.CONCIERGE.SURVEY_ANSWERS_PAGE_WITH_TITLE'
                            : 'APP.CONCIERGE.SURVEY_ANSWERS_PAGE'
                        )
                            | translate
                                : {
                                      id: i + 1,
                                      title: p.title,
                                  }
                    }}
                </div>
                <div
                    class="grid w-full grid-cols-2 gap-4 px-6 py-2 xl:grid-cols-3"
                >
                    @for (r of p.responses; track r) {
                        <new-survey-widget [response]="r"></new-survey-widget>
                    }
                </div>
            </ng-container>
        </div>
        <ng-template #empty_template>
            <div
                class="flex min-h-[10rem] w-full flex-col items-center justify-center"
            >
                <span class="text-lg opacity-30">{{
                    'APP.CONCIERGE.SURVEY_ANSWERS_EMPTY' | translate
                }}</span>
            </div>
        </ng-template>
        <div
            *ngIf="loading$ | async"
            class="absolute inset-0 z-10 flex bg-base-100 opacity-60"
        >
            <div class="m-auto flex flex-col items-center space-y-4">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.SURVEY_ANSWERS_LOADING' | translate }}</p>
            </div>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;ddf427fa5ef2d323cf83604b74c758c2bceb9a566571792f5d59a5b9d55a108a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/surveys/survey-responses.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n  overflow: auto;\n}\n/*# sourceMappingURL=survey-responses.component.css.map */\n"] }]
  }], () => [{ type: SettingsService }, { type: ActivatedRoute }, { type: NewSurveyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SurveyResponsesComponent, { className: "SurveyResponsesComponent", filePath: "apps/concierge/src/app/surveys/survey-responses.component.ts", lineNumber: 159 });
})();

// apps/concierge/src/app/surveys/survey.component.ts
var _SurveyComponent = class _SurveyComponent {
};
_SurveyComponent.\u0275fac = function SurveyComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SurveyComponent)();
};
_SurveyComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SurveyComponent, selectors: [["app-survey"]], standalone: false, decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function SurveyComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "router-outlet");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [RouterOutlet, ApplicationTopbarComponent, ApplicationSidebarComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=survey.component.css.map */"] });
var SurveyComponent = _SurveyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyComponent, [{
    type: Component,
    args: [{ selector: "app-survey", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <router-outlet></router-outlet>
            </main>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;08c828c36224658230d6844bbbe8551e02a5c30c320aa5e48c90063783b9b8fa;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/surveys/survey.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=survey.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SurveyComponent, { className: "SurveyComponent", filePath: "apps/concierge/src/app/surveys/survey.component.ts", lineNumber: 27 });
})();

// apps/concierge/src/app/surveys/surveys.module.ts
var routes = [
  { path: "run/:id", component: SurveyOutletComponent },
  {
    path: "",
    component: SurveyComponent,
    children: [
      { path: "", component: BuildingListComponent },
      { path: "list/:id", component: SurveyListingsComponent },
      { path: "builder", component: SurveyBuilderComponent },
      { path: "builder/:id", component: SurveyBuilderComponent },
      { path: "responses/:id", component: SurveyResponsesComponent },
      { path: "**", pathMatch: "full", redirectTo: "" }
    ]
  },
  { path: "**", pathMatch: "full", redirectTo: "" }
];
var COMPONENTS = [
  SurveyComponent,
  BuildingListComponent,
  SurveyListingsComponent,
  SurveyResponsesComponent
];
var STANDALONE_COMPONENTS = [
  QuestionPipe,
  SurveyOutletComponent,
  SurveyBuilderComponent,
  NewSurveyWidgetComponent,
  QuestionComponent,
  QuestionModalComponent
];
var _SurveysModule = class _SurveysModule {
};
_SurveysModule.\u0275fac = function SurveysModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SurveysModule)();
};
_SurveysModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SurveysModule });
_SurveysModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  RouterModule.forChild(routes),
  MatDialogModule,
  MatCheckboxModule,
  FormsModule,
  ReactiveFormsModule,
  MatTabsModule,
  DragDropModule,
  MatSelectModule,
  MatSlideToggleModule,
  ComponentsModule,
  RouterModule,
  MatTableModule,
  MatMenuModule,
  MatFormFieldModule,
  UIModule,
  SurveyOutletComponent,
  SurveyBuilderComponent,
  NewSurveyWidgetComponent,
  QuestionComponent,
  QuestionModalComponent
] });
var SurveysModule = _SurveysModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveysModule, [{
    type: NgModule,
    args: [{
      declarations: [...COMPONENTS],
      imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatDialogModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        DragDropModule,
        MatSelectModule,
        MatSlideToggleModule,
        ComponentsModule,
        RouterModule,
        MatTableModule,
        MatMenuModule,
        MatFormFieldModule,
        UIModule,
        ...STANDALONE_COMPONENTS
      ]
    }]
  }], null, null);
})();
export {
  SurveysModule
};
//# sourceMappingURL=surveys.module-RKMFUWON.js.map
