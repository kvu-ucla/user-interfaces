import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  Injectable,
  LevelPipe,
  MAT_DIALOG_DATA,
  MapShowElementComponent,
  MatChipsModule,
  MatDialog,
  MatDialogRef,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatRipple,
  MatSelect,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  OrganisationService,
  PrintableComponent,
  RouterModule,
  SafePipe,
  SelectMapItemModalComponent,
  SettingsService,
  SettingsToggleComponent,
  SharedSpacesModule,
  SharedUsersModule,
  SimpleTableComponent,
  TranslatePipe,
  UIModule,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  createShortURL,
  flatten,
  fu,
  generateQRCode,
  getInvalidFields,
  hu,
  inject,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  randomString,
  setClassMetadata,
  shareReplay,
  switchMap,
  updateShortURL,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4TBOCXR6.js";

// apps/concierge/src/app/poi-manager/poi-modal.component.ts
var _c0 = () => ({ standalone: true });
function POIModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 4);
    \u0275\u0275element(7, "input", 14);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 4, "FORM.NAME"));
  }
}
function POIModalComponent_Conditional_5_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r3 = ctx.$implicit;
    \u0275\u0275property("value", bld_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r3.display_name, " ");
  }
}
function POIModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 4)(7, "mat-select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function POIModalComponent_Conditional_5_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.building, $event) || (ctx_r1.building = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(8, POIModalComponent_Conditional_5_For_9_Template, 2, 2, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "RESOURCE.BUILDING"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.building);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(10, 5, ctx_r1.building_list));
  }
}
function POIModalComponent_Conditional_7_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r4 = ctx.$implicit;
    \u0275\u0275property("value", level_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r4.display_name, " ");
  }
}
function POIModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 4)(7, "mat-select", 19);
    \u0275\u0275repeaterCreate(8, POIModalComponent_Conditional_7_For_9_Template, 2, 2, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RESOURCE.LEVEL"));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(10, 3, ctx_r1.level_list));
  }
}
function POIModalComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-form-field", 20);
    \u0275\u0275element(2, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 22);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("click", function POIModalComponent_Conditional_22_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectPOIfromMap());
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "place");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.POI_MAP_SELECT"));
  }
}
function POIModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-form-field", 23)(2, "input", 24);
    \u0275\u0275listener("ngModelChange", function POIModalComponent_Conditional_23_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ location: [$event, ctx_r1.form.value.location[1]] }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-form-field", 23)(4, "input", 25);
    \u0275\u0275listener("ngModelChange", function POIModalComponent_Conditional_23_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ location: [ctx_r1.form.value.location[0], $event] }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.location[0])("ngModelOptions", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.value.location[1])("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
  }
}
var _POIModalComponent = class _POIModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.loading = false;
    this.location_type = this._data?.location instanceof Array ? "coordinates" : "map_id";
    this.building_list = this._org.building_list;
    this.level_list = this._org.active_levels;
    this.form = new FormGroup({
      id: new FormControl(this._data?.id || ""),
      name: new FormControl(this._data?.name || "", [Validators.required]),
      level_id: new FormControl(this._data?.level_id || "", [
        Validators.required
      ]),
      location: new FormControl(this._data?.location || "", [
        Validators.required
      ]),
      can_search: new FormControl(this._data?.can_search ?? false)
    });
  }
  get building() {
    return this._org.building;
  }
  set building(value) {
    this._org.building = value;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (!this.form.value.level_id) {
        const levels = yield nextValueFrom(this.level_list);
        if (levels.length)
          this.form.patchValue({ level_id: levels[0].id });
      }
    });
  }
  selectPOIfromMap() {
    const ref = this._dialog.open(SelectMapItemModalComponent, {
      data: __spreadValues(__spreadValues({}, this._data), this.form.getRawValue())
    });
    ref.afterClosed().subscribe((d) => {
      if (!d)
        return;
      this.form.patchValue({
        location: d,
        level_id: ref.componentInstance.level?.id
      });
    });
  }
  save() {
    return __async(this, null, function* () {
      if (!this.form.valid) {
        return notifyError(`Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`);
      }
      const data = this.form.getRawValue();
      if (!data.id)
        data.id = `POI-${randomString(8)}`;
      data.short_link_id = this._data?.short_link_id;
      const path = this._settings.get("app.kiosk_url_path") || "/map-kiosk";
      const public_key = this._settings.get("app.short_url_public_key");
      const location2 = typeof data.location === "string" ? data.location : data.location.join(",");
      let uri = `${path}/#/explore?level=${data.level_id}&locate=${location2}&public=true`;
      if (public_key)
        uri += `&x-api-key=${public_key}`;
      if (!data.short_link_id) {
        const { id } = yield createShortURL({
          name: data.name,
          description: `Point of Interest: ${data.name}`,
          uri: `${window.location.origin}/auth/login?continue=${encodeURIComponent(uri)}`
        }).toPromise();
        data.short_link_id = id;
      } else {
        yield updateShortURL(data.short_link_id, {
          id: data.short_link_id,
          name: data.name,
          description: `Point of Interest: ${data.name}`,
          uri: `${window.location.origin}/auth/login?continue=${encodeURIComponent(uri)}`
        }).toPromise();
      }
      this.loading = true;
      const old_metadata = yield fu(this._org.organisation.id, "points-of-interest", {}).toPromise();
      const metadata = old_metadata.details || {};
      if (!metadata[data.level_id])
        metadata[data.level_id] = [];
      if (this._data?.id) {
        for (const lvl in metadata) {
          if (metadata[lvl])
            metadata[lvl] = metadata[lvl].filter((_) => _.id !== data.id);
        }
      }
      metadata[data.level_id] = [
        ...metadata[data.level_id].filter((_) => _.id !== data.id),
        data
      ].sort((a, b) => a.name.localeCompare(b.name));
      const resp = yield hu(this._org.organisation.id, {
        name: "points-of-interest",
        details: metadata,
        description: "Point of Interests for maps"
      }).toPromise().catch((e) => notifyError(e));
      if (resp.id)
        this._dialog_ref.close(resp);
      this.loading = false;
    });
  }
};
_POIModalComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275POIModalComponent_BaseFactory;
  return function POIModalComponent_Factory(__ngFactoryType__) {
    return (\u0275POIModalComponent_BaseFactory || (\u0275POIModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_POIModalComponent)))(__ngFactoryType__ || _POIModalComponent);
  };
})();
_POIModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _POIModalComponent, selectors: [["poi-modal"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 28, vars: 29, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], [1, "flex", "flex-col"], ["for", "location"], ["appearance", "outline"], ["placeholder", "Location Type", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "map_id"], ["value", "coordinates"], [1, "flex", "items-center", "space-x-4", "pb-2"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-4", "pt-2"], ["formControlName", "can_search", 1, "flex-1", 3, "name"], [1, "flex-1"], ["for", "name"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "building"], ["placeholder", "Select Building", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["for", "level"], ["formControlName", "level_id", "placeholder", "Select Level"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", "name", "location", "placeholder", "Location", "formControlName", "location"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-secondary", "text-secondary", 3, "click", "matTooltip"], ["appearance", "outline", 1, "flex-1"], ["matInput", "", "name", "latitude", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matInput", "", "name", "longitude", 3, "ngModelChange", "ngModel", "ngModelOptions"]], template: function POIModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("confirm", function POIModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.save();
    });
    \u0275\u0275elementStart(3, "form", 1);
    \u0275\u0275conditionalCreate(4, POIModalComponent_Conditional_4_Template, 9, 6, "div", 2);
    \u0275\u0275conditionalCreate(5, POIModalComponent_Conditional_5_Template, 11, 8, "div", 2);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275conditionalCreate(7, POIModalComponent_Conditional_7_Template, 11, 5, "div", 2);
    \u0275\u0275elementStart(8, "div", 2)(9, "label", 3);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 4)(15, "mat-select", 5);
    \u0275\u0275twoWayListener("ngModelChange", function POIModalComponent_Template_mat_select_ngModelChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.location_type, $event) || (ctx.location_type = $event);
      return $event;
    });
    \u0275\u0275elementStart(16, "mat-option", 6);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-option", 7);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(22, POIModalComponent_Conditional_22_Template, 7, 3, "div", 8);
    \u0275\u0275conditionalCreate(23, POIModalComponent_Conditional_23_Template, 5, 6, "div", 9);
    \u0275\u0275elementStart(24, "div", 10);
    \u0275\u0275element(25, "settings-toggle", 11);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275element(27, "div", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 14, ctx.form.value.id ? "APP.CONCIERGE.POI_EDIT" : "APP.CONCIERGE.POI_NEW"))("loading", ctx.loading ? \u0275\u0275pipeBind1(2, 16, "APP.CONCIERGE.POI_SAVING") : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.name ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = \u0275\u0275pipeBind1(6, 18, ctx.building_list)) == null ? null : tmp_4_0.length) > 1 ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.form.controls.level_id ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 20, "COMMON.LOCATION"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.location_type);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(28, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 22, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 24, "EXPLORE.COORDINATES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.location_type === "map_id" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.location_type === "coordinates" ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(26, 26, "APP.CONCIERGE.POI_SEARCHABLE"));
  }
}, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, MatFormField, MatInput, MatSelect, MatOption, MatTooltip, MatRipple, FormGroupDirective, FormControlName, IconComponent, SettingsToggleComponent, FullscreenModalShellComponent, AsyncPipe, TranslatePipe], encapsulation: 2 });
var POIModalComponent = _POIModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(POIModalComponent, [{
    type: Component,
    args: [{ selector: "poi-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.POI_EDIT'
                    : 'APP.CONCIERGE.POI_NEW'
                ) | translate
            "
            (confirm)="save()"
            [loading]="loading ? ('APP.CONCIERGE.POI_SAVING' | translate) : ''"
        >
            <form [formGroup]="form">
                @if (form.controls.name) {
                    <div class="flex flex-col">
                        <label for="name">
                            {{ 'FORM.NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="name"
                                [placeholder]="'FORM.NAME' | translate"
                                formControlName="name"
                            />
                        </mat-form-field>
                    </div>
                }
                @if ((building_list | async)?.length > 1) {
                    <div class="flex flex-col">
                        <label for="building">
                            {{ 'RESOURCE.BUILDING' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [(ngModel)]="building"
                                [ngModelOptions]="{ standalone: true }"
                                placeholder="Select Building"
                            >
                                @for (bld of building_list | async; track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.level_id) {
                    <div class="flex flex-col">
                        <label for="level">
                            {{ 'RESOURCE.LEVEL' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                formControlName="level_id"
                                placeholder="Select Level"
                            >
                                @for (
                                    level of level_list | async;
                                    track level
                                ) {
                                    <mat-option [value]="level.id">
                                        {{ level.display_name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="location">
                        {{ 'COMMON.LOCATION' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [(ngModel)]="location_type"
                            [ngModelOptions]="{ standalone: true }"
                            placeholder="Location Type"
                        >
                            <mat-option value="map_id">{{
                                'EXPLORE.MAP_ID' | translate
                            }}</mat-option>
                            <mat-option value="coordinates">
                                {{ 'EXPLORE.COORDINATES' | translate }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    @if (location_type === 'map_id') {
                        <div class="flex items-center space-x-4 pb-2">
                            <mat-form-field
                                class="no-subscript"
                                appearance="outline"
                            >
                                <input
                                    matInput
                                    name="location"
                                    placeholder="Location"
                                    formControlName="location"
                                />
                            </mat-form-field>
                            <button
                                icon
                                matRipple
                                class="h-12 w-12 rounded border border-secondary text-secondary"
                                [matTooltip]="
                                    'APP.CONCIERGE.POI_MAP_SELECT' | translate
                                "
                                (click)="selectPOIfromMap()"
                            >
                                <icon>place</icon>
                            </button>
                        </div>
                    }
                    @if (location_type === 'coordinates') {
                        <div class="flex items-center space-x-2">
                            <mat-form-field appearance="outline" class="flex-1">
                                <input
                                    matInput
                                    name="latitude"
                                    [ngModel]="form.value.location[0]"
                                    (ngModelChange)="
                                        form.patchValue({
                                            location: [
                                                $event,
                                                form.value.location[1],
                                            ],
                                        })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                            <mat-form-field appearance="outline" class="flex-1">
                                <input
                                    matInput
                                    name="longitude"
                                    [ngModel]="form.value.location[1]"
                                    (ngModelChange)="
                                        form.patchValue({
                                            location: [
                                                form.value.location[0],
                                                $event,
                                            ],
                                        })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                        </div>
                    }
                    <div class="flex items-center space-x-4 pt-2">
                        <settings-toggle
                            class="flex-1"
                            [name]="'APP.CONCIERGE.POI_SEARCHABLE' | translate"
                            formControlName="can_search"
                        >
                        </settings-toggle>
                        <div class="flex-1"></div>
                    </div>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(POIModalComponent, { className: "POIModalComponent", filePath: "apps/concierge/src/app/poi-manager/poi-modal.component.ts", lineNumber: 190 });
})();

// apps/concierge/src/app/poi-manager/poi-management.service.ts
var _POIManagementService = class _POIManagementService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._options = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this._features = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(switchMap(() => fu(this._org.organisation.id, "points-of-interest").pipe(catchError((_) => of({ details: {} })))), map((_) => {
      const mapping = _.details || {};
      const levels = this._org.levelsForBuilding(this._org.building);
      const list = flatten(levels.map((lvl) => mapping[lvl.id] || []));
      return list;
    }), shareReplay(1));
    this.filtered_features = combineLatest([
      this._features,
      this._options
    ]).pipe(map(([list, options]) => {
      if (options.search) {
        list = list.filter((_) => _.name.toLowerCase().includes(options.search.toLowerCase()));
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
  editPointOfInterest(poi) {
    const ref = this._dialog.open(POIModalComponent, {
      data: poi
    });
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
  }
  removePointOfInterest(poi) {
    return __async(this, null, function* () {
      const ref = yield openConfirmModal({
        title: "Remove Point of Interest",
        content: `Are you sure you want to remove the point of interest "${poi.name}"?`,
        icon: { content: "delete_forever" },
        confirm_text: "Remove"
      }, this._dialog);
      if (ref.reason !== "done")
        return ref.close();
      ref.loading("Removing point of interest...");
      const old_metadata = yield fu(this._org.organisation.id, "points-of-interest").toPromise();
      const metadata = old_metadata.details || {};
      for (const lvl in metadata) {
        if (metadata[lvl])
          metadata[lvl] = metadata[lvl].filter((_) => _.id !== poi.id);
      }
      yield hu(this._org.organisation.id, {
        name: "points-of-interest",
        details: metadata,
        description: ""
      }).toPromise().catch((e) => {
        notifyError(e);
        ref.close();
        throw e;
      });
      notifySuccess("Successfully removed point of interest.");
      ref.close();
      this._change.next(Date.now());
    });
  }
};
_POIManagementService.\u0275fac = function POIManagementService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _POIManagementService)();
};
_POIManagementService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _POIManagementService, factory: _POIManagementService.\u0275fac, providedIn: "root" });
var POIManagementService = _POIManagementService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(POIManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/poi-manager/poi-list.component.ts
var _c02 = (a0) => ({ key: "name", name: a0 });
var _c1 = (a0, a1) => ({ key: "level_id", name: a0, content: a1, size: "12rem", sortable: false });
var _c2 = (a0) => ({ key: "location", name: a0, size: "10rem" });
var _c3 = (a0, a1) => ({ key: "can_search", name: a0, size: "7rem", content: a1 });
var _c4 = (a0) => ({ key: "actions", name: " ", content: a0, size: "9.5rem", sortable: false });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function POIListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "level");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const row_r1 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = \u0275\u0275pipeBind1(2, 1, row_r1.level_id)) == null ? null : tmp_5_0.display_name) || "Unknown", " ");
  }
}
function POIListComponent_ng_template_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function POIListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, POIListComponent_ng_template_9_Conditional_0_Template, 3, 0, "div", 9);
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275conditional(data_r2 ? 0 : -1);
  }
}
function POIListComponent_ng_template_11_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "a", 21);
    \u0275\u0275pipe(3, "safe");
    \u0275\u0275element(4, "img", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_ng_template_11_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.print());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(3, 4, row_r4.qr_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", row_r4.qr_code, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.name || row_r4.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "APP.CONCIERGE.POI_PRINT_QR"), " ");
  }
}
function POIListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_Template_button_click_3_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.loadQrCode(row_r4));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "qr_code");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 11);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "button", 13);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_Template_button_click_8_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.loadPublicQrCode(row_r4));
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "qr_code");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, POIListComponent_ng_template_11_ng_template_11_Template, 10, 9, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(13, "button", 14)(14, "icon");
    \u0275\u0275text(15, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-menu", null, 4)(18, "button", 15);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_Template_button_click_18_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.edit(row_r4));
    });
    \u0275\u0275elementStart(19, "div", 16)(20, "icon");
    \u0275\u0275text(21, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "button", 15);
    \u0275\u0275listener("click", function POIListComponent_ng_template_11_Template_button_click_25_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.remove(row_r4));
    });
    \u0275\u0275elementStart(26, "div", 17)(27, "icon", 18);
    \u0275\u0275text(28, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    const qr_menu_r7 = \u0275\u0275reference(12);
    const menu_r8 = \u0275\u0275reference(17);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 8, "APP.CONCIERGE.POI_PRIVATE_QR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("content", qr_menu_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 10, "APP.CONCIERGE.POI_PUBLIC_QR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !row_r4.short_link_id)("content", qr_menu_r7);
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 12, "APP.CONCIERGE.POI_EDIT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 14, "APP.CONCIERGE.POI_REMOVE"));
  }
}
var _POIListComponent = class _POIListComponent {
  constructor() {
    this._manager = inject(POIManagementService);
    this._settings = inject(SettingsService);
    this.features = this._manager.filtered_features;
    this.edit = (region) => this._manager.editPointOfInterest(region);
    this.remove = (region) => this._manager.removePointOfInterest(region);
  }
  get kiosk_url() {
    const path = this._settings.get("app.kiosk_url_path") || "/map-kiosk";
    return `${window.location.origin}${path}`;
  }
  loadQrCode(item) {
    const location2 = typeof item.location === "string" ? item.location : item.location.join(",");
    const link = `${this.kiosk_url}/#/explore?level=${encodeURIComponent(item.level_id)}&locate=${encodeURIComponent(location2)}`;
    item.qr_link = link;
    item.qr_code = generateQRCode(link);
  }
  loadPublicQrCode(item) {
    const link = `${location.origin}/r/${item.short_link_id.split("-")[1]}`;
    item.qr_link = link;
    item.qr_code = generateQRCode(link);
  }
  print() {
    window.print();
  }
};
_POIListComponent.\u0275fac = function POIListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _POIListComponent)();
};
_POIListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _POIListComponent, selectors: [["poi-list"]], standalone: false, decls: 13, vars: 29, consts: [["level_template", ""], ["bool_template", ""], ["action_template", ""], ["qr_menu", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], ["empty_message", "No Points of Interest found.", 1, "block", "min-w-[48rem]", "text-sm", 3, "data", "columns", "sortable"], [1, "h-12", "w-full"], [1, "p-4"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded", "bg-success", "text-2xl", "text-success-content"], [1, "mx-auto", "flex", "w-full", "justify-end", "space-x-2", "px-4", "py-2"], [3, "matTooltip"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "content"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "click", "disabled", "content"], ["btn", "", "icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-red-500", "flex", "items-center", "space-x-2"], [1, "text-error"], [1, "rounded", "bg-base-100", "py-2", "shadow"], ["printable", "", 1, ""], ["target", "_blank", "ref", "noopener noreferrer", 1, "mx-4", "my-2", "block", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2", 3, "href"], [1, "w-48", 3, "src"], [1, "mx-4", "mt-2", "w-[calc(100%-2rem)]", "rounded", "bg-base-200", "p-2", "text-center", "font-mono", "text-sm"], ["btn", "", "matRipple", "", 1, "mx-4", "my-2", "w-[calc(100%-2rem)]", 3, "click"]], template: function POIListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "simple-table", 6);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275element(6, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, POIListComponent_ng_template_7_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, POIListComponent_ng_template_9_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, POIListComponent_ng_template_11_Template, 32, 16, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const level_template_r9 = \u0275\u0275reference(8);
    const bool_template_r10 = \u0275\u0275reference(10);
    const action_template_r11 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.features)("columns", \u0275\u0275pureFunction5(23, _c5, \u0275\u0275pureFunction1(11, _c02, \u0275\u0275pipeBind1(2, 3, "FORM.NAME")), \u0275\u0275pureFunction2(13, _c1, \u0275\u0275pipeBind1(3, 5, "RESOURCE.LEVEL"), level_template_r9), \u0275\u0275pureFunction1(16, _c2, \u0275\u0275pipeBind1(4, 7, "COMMON.LOCATION")), \u0275\u0275pureFunction2(18, _c3, \u0275\u0275pipeBind1(5, 9, "APP.CONCIERGE.POI_SEARCHABLE"), bool_template_r10), \u0275\u0275pureFunction1(21, _c4, action_template_r11)))("sortable", true);
  }
}, dependencies: [MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, CustomTooltipComponent, SimpleTableComponent, PrintableComponent, TranslatePipe, SafePipe, LevelPipe], encapsulation: 2 });
var POIListComponent = _POIListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(POIListComponent, [{
    type: Component,
    args: [{ selector: "poi-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block min-w-[48rem] text-sm"
                [data]="features"
                empty_message="No Points of Interest found."
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'level_id',
                        name: 'RESOURCE.LEVEL' | translate,
                        content: level_template,
                        size: '12rem',
                        sortable: false,
                    },
                    {
                        key: 'location',
                        name: 'COMMON.LOCATION' | translate,
                        size: '10rem',
                    },
                    {
                        key: 'can_search',
                        name: 'APP.CONCIERGE.POI_SEARCHABLE' | translate,
                        size: '7rem',
                        content: bool_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '9.5rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-12 w-full"></div>
        </div>
        <ng-template #level_template let-row="row">
            <div class="p-4">
                {{ (row.level_id | level)?.display_name || 'Unknown' }}
            </div>
        </ng-template>
        <ng-template #bool_template let-data="data">
            @if (data) {
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content"
                >
                    <icon>done</icon>
                </div>
            }
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex w-full justify-end space-x-2 px-4 py-2">
                <div [matTooltip]="'APP.CONCIERGE.POI_PRIVATE_QR' | translate">
                    <button
                        icon
                        matRipple
                        customTooltip
                        [content]="qr_menu"
                        (click)="loadQrCode(row)"
                    >
                        <icon>qr_code</icon>
                    </button>
                </div>
                <div [matTooltip]="'APP.CONCIERGE.POI_PUBLIC_QR' | translate">
                    <button
                        icon
                        matRipple
                        customTooltip
                        [disabled]="!row.short_link_id"
                        [content]="qr_menu"
                        (click)="loadPublicQrCode(row)"
                    >
                        <icon>qr_code</icon>
                    </button>
                </div>
                <ng-template #qr_menu>
                    <div class="rounded bg-base-100 py-2 shadow">
                        <div class="" printable>
                            <a
                                [href]="row.qr_link | safe: 'url'"
                                target="_blank"
                                ref="noopener noreferrer"
                                class="mx-4 my-2 block rounded-lg border border-base-200 bg-base-100 p-2"
                            >
                                <img class="w-48" [src]="row.qr_code" />
                            </a>
                            <div
                                class="mx-4 mt-2 w-[calc(100%-2rem)] rounded bg-base-200 p-2 text-center font-mono text-sm"
                            >
                                {{ row.name || row.id }}
                            </div>
                        </div>
                        <button
                            btn
                            matRipple
                            class="mx-4 my-2 w-[calc(100%-2rem)]"
                            (click)="print()"
                        >
                            {{ 'APP.CONCIERGE.POI_PRINT_QR' | translate }}
                        </button>
                    </div>
                </ng-template>
                <button btn icon matRipple [matMenuTriggerFor]="menu">
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="edit(row)">
                        <div class="flex items-center space-x-2">
                            <icon>edit</icon>
                            <span>{{
                                'APP.CONCIERGE.POI_EDIT' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="remove(row)">
                        <div class="text-red-500 flex items-center space-x-2">
                            <icon class="text-error">delete</icon>
                            <span>{{
                                'APP.CONCIERGE.POI_REMOVE' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(POIListComponent, { className: "POIListComponent", filePath: "apps/concierge/src/app/poi-manager/poi-list.component.ts", lineNumber: 142 });
})();

// apps/concierge/src/app/poi-manager/poi-manager.component.ts
var _c03 = ["app-poi-manager", ""];
var _c12 = () => ({ standalone: true });
function POIManagerComponent_Conditional_12_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
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
function POIManagerComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-form-field", 7)(2, "mat-select", 8);
    \u0275\u0275listener("ngModelChange", function POIManagerComponent_Conditional_12_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.building = $event);
    });
    \u0275\u0275repeaterCreate(3, POIManagerComponent_Conditional_12_For_4_Template, 2, 2, "mat-option", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.building)("ngModelOptions", \u0275\u0275pureFunction0(5, _c12))("placeholder", (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name));
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 3, ctx_r1.buildings));
  }
}
var _POIManagerComponent = class _POIManagerComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._state = inject(POIManagementService);
    this._settings = inject(SettingsService);
    this.new = () => this._state.editPointOfInterest();
    this.buildings = this._org.active_buildings;
  }
  get building() {
    return this._org.building;
  }
  set building(bld) {
    this._org.building = bld;
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
};
_POIManagerComponent.\u0275fac = function POIManagerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _POIManagerComponent)();
};
_POIManagerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _POIManagerComponent, selectors: [["", "app-poi-manager", ""]], standalone: false, attrs: _c03, decls: 15, vars: 13, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "items-center", "justify-between", "px-8", "py-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "click"], [1, "mb-2", "flex", "items-center", "justify-between", "px-8"], [1, "relative", "block", "h-1/2", "w-full", "flex-1"], ["appearance", "outline", 1, "w-64"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"]], template: function POIManagerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1)(4, "header", 2);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "h2", 3);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 4);
    \u0275\u0275listener("click", function POIManagerComponent_Template_button_click_9_listener() {
      return ctx.new();
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, POIManagerComponent_Conditional_12_Template, 6, 6, "div", 5);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275element(14, "poi-list", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_3_0;
    \u0275\u0275advance(4);
    \u0275\u0275classProp("mb-2", !ctx.use_region || ((tmp_0_0 = \u0275\u0275pipeBind1(5, 5, ctx.buildings)) == null ? null : tmp_0_0.length) <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "APP.CONCIERGE.POI_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "APP.CONCIERGE.POI_ADD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.use_region && ((tmp_3_0 = \u0275\u0275pipeBind1(13, 11, ctx.buildings)) == null ? null : tmp_3_0.length) > 1 ? 12 : -1);
  }
}, dependencies: [NgControlStatus, NgModel, ApplicationTopbarComponent, ApplicationSidebarComponent, MatFormField, MatSelect, MatOption, MatRipple, POIListComponent, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=poi-manager.component.css.map */"] });
var POIManagerComponent = _POIManagerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(POIManagerComponent, [{
    type: Component,
    args: [{ selector: "[app-poi-manager]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="flex items-center justify-between px-8 py-8"
                    [class.mb-2]="
                        !use_region || (buildings | async)?.length <= 1
                    "
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.POI_HEADER' | translate }}
                    </h2>
                    <button btn matRipple (click)="new()">
                        {{ 'APP.CONCIERGE.POI_ADD' | translate }}
                    </button>
                </header>
                @if (use_region && (buildings | async)?.length > 1) {
                    <div class="mb-2 flex items-center justify-between px-8">
                        <mat-form-field appearance="outline" class="w-64">
                            <mat-select
                                name="building"
                                [ngModel]="building"
                                (ngModelChange)="building = $event"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    building?.display_name || building?.name
                                "
                            >
                                @for (bld of buildings | async; track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                <poi-list class="relative block h-1/2 w-full flex-1"></poi-list>
            </main>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;dd45660a96c490516c2f2104d17b5d40ade70328f67ef5d45dcf89ed7685333a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/poi-manager/poi-manager.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nsidebar {\n  height: 100%;\n}\nmain {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=poi-manager.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(POIManagerComponent, { className: "POIManagerComponent", filePath: "apps/concierge/src/app/poi-manager/poi-manager.component.ts", lineNumber: 76 });
})();

// apps/concierge/src/app/poi-manager/poi-manager.module.ts
var ROUTES = [{ path: "", component: POIManagerComponent }];
var _POIManagerModule = class _POIManagerModule {
};
_POIManagerModule.\u0275fac = function POIManagerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _POIManagerModule)();
};
_POIManagerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _POIManagerModule });
_POIManagerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  SharedSpacesModule,
  SharedUsersModule,
  MatChipsModule,
  RouterModule.forChild(ROUTES)
] });
var POIManagerModule = _POIManagerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(POIManagerModule, [{
    type: NgModule,
    args: [{
      declarations: [
        POIManagerComponent,
        POIListComponent,
        POIModalComponent,
        MapShowElementComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedSpacesModule,
        SharedUsersModule,
        MatChipsModule,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  POIManagerModule
};
//# sourceMappingURL=poi-manager.module-W4M274YZ.js.map
