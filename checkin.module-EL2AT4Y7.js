import {
  CheckinStateService
} from "./chunk-5Z465343.js";
import {
  generateQRCode,
  showEventMetadata,
  updateEventMetadata
} from "./chunk-GBH7VLDH.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  Booking,
  CateringItem,
  CateringOrder,
  CdkPortal,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  ElementRef,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  MatCheckbox,
  MatCheckboxModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenuModule,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  OrganisationService,
  Overlay,
  Pipe,
  PortalModule,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SanitizePipe,
  SettingsService,
  TemplatePortalDirective,
  TranslatePipe,
  ViewEncapsulation,
  catchError,
  combineLatest,
  filter,
  first,
  firstValueFrom,
  hu,
  i18n,
  inject,
  input,
  io,
  lastValueFrom,
  log,
  map,
  nextValueFrom,
  notifyError,
  notifyInfo,
  notifySuccess,
  of,
  output,
  roundToNearestMinutes,
  saveBooking,
  setClassMetadata,
  shareReplay,
  signal,
  startOfMinute,
  startWith,
  switchMap,
  updateBooking,
  viewChild,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunctionV,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-G6SUCQQU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/visitor-kiosk/src/app/components/take-photo.component.ts
var _c0 = ["video"];
var _c1 = ["canvas"];
function TakePhotoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.VISITOR_KIOSK.PLEASE_WAIT"), " ");
  }
}
function TakePhotoComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function TakePhotoComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back.emit());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275listener("click", function TakePhotoComponent_Conditional_7_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.takePhoto());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.back_text() || \u0275\u0275pipeBind1(2, 2, "COMMON.BACK"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "APP.VISITOR_KIOSK.TAKE_PHOTO_ACTION"), " ");
  }
}
function TakePhotoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function TakePhotoComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelPhoto());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function TakePhotoComponent_Conditional_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.acceptPhoto());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "COMMON.ACCEPT"), " ");
  }
}
var _TakePhotoComponent = class _TakePhotoComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.back_text = input("");
    this.captured = output();
    this.back = output();
    this.has_photo = signal(false);
    this.loading = signal(false);
    this._video_el = viewChild("video");
    this._canvas_el = viewChild("canvas");
    this.constraints = {
      audio: false,
      video: {
        aspectRatio: { ideal: 1, exact: 1 }
      }
    };
    this.image_url = null;
  }
  ngOnInit() {
    this.loading.set(true);
    this.startCapture();
  }
  ngOnDestroy() {
    this.stopCapture();
  }
  async startCapture() {
    this.image_url = null;
    const stream = await navigator.mediaDevices?.getUserMedia(this.constraints);
    this._video_el().nativeElement.srcObject = stream;
    this.loading.set(false);
  }
  stopCapture() {
    const el = this._video_el().nativeElement;
    if (!el?.srcObject)
      return;
    const stream = el.srcObject;
    for (const track of stream.getVideoTracks()) {
      track.stop();
    }
  }
  takePhoto() {
    this.loading.set(true);
    const canvas = this._canvas_el().nativeElement;
    const ctx = canvas.getContext("2d");
    const vid_el = this._video_el().nativeElement;
    const { videoWidth, videoHeight } = vid_el;
    const cw = canvas.width;
    const ch = canvas.height;
    const min_dim = Math.min(videoWidth, videoHeight);
    const sw = Math.min(min_dim, canvas.width);
    const sh = Math.min(min_dim, canvas.height);
    const sx = (videoWidth - sw) / 2;
    const sy = (videoHeight - sh) / 2;
    ctx.drawImage(vid_el, sx, sy, sw, sh, 0, 0, cw, ch);
    this.has_photo.set(true);
    this.stopCapture();
    this.loading.set(false);
  }
  cancelPhoto() {
    this.loading.set(true);
    const canvas = this._canvas_el().nativeElement;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.has_photo.set(false);
    this.startCapture();
  }
  acceptPhoto() {
    const canvas = this._canvas_el().nativeElement;
    try {
      this.image_url = canvas.toDataURL("image/jpeg", 0.75);
      this.captured.emit(this.image_url);
    } catch (err) {
      console.error("Failed to convert canvas blob into JPEG image. Error: ", err);
      this.captured.emit(null);
      this.cancelPhoto();
    }
  }
};
_TakePhotoComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TakePhotoComponent_BaseFactory;
  return function TakePhotoComponent_Factory(__ngFactoryType__) {
    return (\u0275TakePhotoComponent_BaseFactory || (\u0275TakePhotoComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TakePhotoComponent)))(__ngFactoryType__ || _TakePhotoComponent);
  };
})();
_TakePhotoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TakePhotoComponent, selectors: [["a-take-photo"]], viewQuery: function TakePhotoComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._video_el, _c0, 5);
    \u0275\u0275viewQuerySignal(ctx._canvas_el, _c1, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance(2);
  }
}, inputs: { back_text: [1, "back_text"] }, outputs: { captured: "captured", back: "back" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 6, consts: [["video", ""], ["canvas", ""], ["name", "camera", 1, "relative", "flex", "h-[22rem]", "w-[22rem]", "flex-col", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border-2", "border-base-300", "bg-base-200"], ["id", "video", "autoplay", "", 1, "absolute", "left-1/2", "top-1/2", "mx-auto", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", "object-cover"], ["id", "canvas", "width", "400", "height", "400", 1, "absolute", "left-1/2", "top-1/2", "mx-auto", "h-full", "w-full", "-translate-x-1/2", "-translate-y-1/2", "object-cover"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "mt-4", "flex", "w-full", "items-center", "justify-center", "space-x-2"], ["diameter", "32"], [1, "text"], ["btn", "", "matRipple", "", 1, "inverse", "flex-1", 3, "click"], ["btn", "", "matRipple", "", 1, "take-photo", "flex-1", 3, "click"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"]], template: function TakePhotoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "video", 3, 0)(3, "canvas", 4, 1);
    \u0275\u0275conditionalCreate(5, TakePhotoComponent_Conditional_5_Template, 5, 3, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275conditionalCreate(7, TakePhotoComponent_Conditional_7_Template, 6, 6)(8, TakePhotoComponent_Conditional_8_Template, 6, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", ctx.has_photo());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-0", !ctx.has_photo());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.loading() ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.has_photo() ? 7 : 8);
  }
}, dependencies: [MatProgressSpinner, MatRipple, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[name=camera][_ngcontent-%COMP%] {\n  width: 22.5rem;\n  height: 25rem;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n/*# sourceMappingURL=take-photo.component.css.map */"] });
var TakePhotoComponent = _TakePhotoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TakePhotoComponent, [{
    type: Component,
    args: [{ selector: "a-take-photo", template: `
        <div
            name="camera"
            class="relative flex h-[22rem] w-[22rem] flex-col items-center justify-center overflow-hidden rounded-full border-2 border-base-300 bg-base-200"
        >
            <video
                id="video"
                #video
                autoplay
                [class.opacity-0]="has_photo()"
                class="absolute left-1/2 top-1/2 mx-auto min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
            ></video>
            <canvas
                id="canvas"
                #canvas
                width="400"
                height="400"
                class="absolute left-1/2 top-1/2 mx-auto h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                [class.opacity-0]="!has_photo()"
            ></canvas>
            @if (loading()) {
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <div class="text">
                        {{ 'APP.VISITOR_KIOSK.PLEASE_WAIT' | translate }}
                    </div>
                </div>
            }
        </div>
        <div class="mt-4 flex w-full items-center justify-center space-x-2">
            @if (!has_photo()) {
                <button
                    class="inverse flex-1"
                    btn
                    matRipple
                    (click)="back.emit()"
                >
                    {{ back_text() || ('COMMON.BACK' | translate) }}
                </button>
                <button
                    class="take-photo flex-1"
                    btn
                    matRipple
                    (click)="takePhoto()"
                >
                    {{ 'APP.VISITOR_KIOSK.TAKE_PHOTO_ACTION' | translate }}
                </button>
            } @else {
                <button
                    class="inverse flex-1"
                    btn
                    matRipple
                    (click)="cancelPhoto()"
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button btn matRipple class="flex-1" (click)="acceptPhoto()">
                    {{ 'COMMON.ACCEPT' | translate }}
                </button>
            }
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;c3948da5e7161cbc96cfea419181985b0f256ccc8ea2b8830ee9778602d63cb6;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/components/take-photo.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[name=camera] {\n  width: 22.5rem;\n  height: 25rem;\n}\nbutton {\n  width: 8rem;\n}\n/*# sourceMappingURL=take-photo.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TakePhotoComponent, { className: "TakePhotoComponent", filePath: "apps/visitor-kiosk/src/app/components/take-photo.component.ts", lineNumber: 99 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-covid.component.ts
var _c02 = ["checkin-covid", ""];
var _c12 = () => ["/welcome"];
var _CheckinCovidComponent = class _CheckinCovidComponent {
  constructor() {
    this._router = inject(Router);
    this._checkin = inject(CheckinStateService);
  }
  confirm() {
    if (!this.symptoms || !this.contact)
      return notifyError("Please select yes or no for each question");
    this._checkin.updateGuest({
      covid: this.contact === "true",
      symptoms: this.symptoms === "true"
    });
    if (this.symptoms === "false" && this.contact === "false") {
      this._router.navigate(["/checkin", "results"]);
    } else {
      this._checkin.setError("Please get tested for COVID-19 and self-isolate at home for 14 days");
      this._router.navigate(["/checkin", "error"]);
    }
  }
};
_CheckinCovidComponent.\u0275fac = function CheckinCovidComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinCovidComponent)();
};
_CheckinCovidComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinCovidComponent, selectors: [["", "checkin-covid", ""]], standalone: false, attrs: _c02, decls: 55, vars: 5, consts: [[1, "relative", "overflow-y-auto", "overflow-x-hidden", "rounded", "bg-base-100", "p-4"], [1, "mb-4", "text-xl", "font-medium"], [1, "list-inside", "list-decimal"], [1, "mb-4", "list-inside", "list-disc", "px-4"], ["aria-label", "Has Symptoms", 3, "ngModelChange", "ngModel"], ["value", "true"], ["value", "false", 1, "ml-4"], [1, "my-4"], ["aria-label", "COVID contact or self-isolated", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "right-0", "top-0", 3, "routerLink"]], template: function CheckinCovidComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2, "COVID Disclaimer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ol", 2)(4, "li");
    \u0275\u0275text(5, " Do you have any of the following symptoms?");
    \u0275\u0275element(6, "br")(7, "br");
    \u0275\u0275elementStart(8, "ul", 3)(9, "li");
    \u0275\u0275text(10, "Fever");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li");
    \u0275\u0275text(12, "Cough");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275text(14, "Shortness of breath");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, "Chills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "Body aches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li");
    \u0275\u0275text(20, "Sore or scratchy throat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "li");
    \u0275\u0275text(22, "Headache");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275text(24, "Runny nose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li");
    \u0275\u0275text(26, "Muscle pain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "li");
    \u0275\u0275text(28, "Vomitting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li");
    \u0275\u0275text(30, "Nausea");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li");
    \u0275\u0275text(32, "Diarrhoa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "Loss of taste or smell");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "mat-radio-group", 4);
    \u0275\u0275twoWayListener("ngModelChange", function CheckinCovidComponent_Template_mat_radio_group_ngModelChange_35_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.symptoms, $event) || (ctx.symptoms = $event);
      return $event;
    });
    \u0275\u0275elementStart(36, "mat-radio-button", 5);
    \u0275\u0275text(37, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "mat-radio-button", 6);
    \u0275\u0275text(39, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(40, "hr", 7);
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42, " Have you been in contact with a COVID-19 case in the last 14 days or been asked to self-isolate by a health offical?");
    \u0275\u0275element(43, "br")(44, "br");
    \u0275\u0275elementStart(45, "mat-radio-group", 8);
    \u0275\u0275twoWayListener("ngModelChange", function CheckinCovidComponent_Template_mat_radio_group_ngModelChange_45_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.contact, $event) || (ctx.contact = $event);
      return $event;
    });
    \u0275\u0275elementStart(46, "mat-radio-button", 5);
    \u0275\u0275text(47, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "mat-radio-button", 6);
    \u0275\u0275text(49, "No");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "button", 9);
    \u0275\u0275listener("click", function CheckinCovidComponent_Template_button_click_50_listener() {
      return ctx.confirm();
    });
    \u0275\u0275text(51, "Confirm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "a", 10)(53, "icon");
    \u0275\u0275text(54, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(35);
    \u0275\u0275twoWayProperty("ngModel", ctx.symptoms);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.contact);
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c12));
    \u0275\u0275attribute("disabled", !ctx.symptoms && !ctx.contact);
  }
}, dependencies: [NgControlStatus, NgModel, RouterLink, MatRipple, MatRadioGroup, MatRadioButton, IconComponent], styles: ["\n\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n  max-height: calc(100% - 2rem);\n}\nbutton[_ngcontent-%COMP%] {\n  margin: 1rem 11rem 0;\n  width: 8rem;\n}\n/*# sourceMappingURL=checkin-covid.component.css.map */"] });
var CheckinCovidComponent = _CheckinCovidComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinCovidComponent, [{
    type: Component,
    args: [{ selector: "[checkin-covid]", template: `
        <div
            class="relative overflow-y-auto overflow-x-hidden rounded bg-base-100 p-4"
        >
            <h3 class="mb-4 text-xl font-medium">COVID Disclaimer</h3>
            <ol class="list-inside list-decimal">
                <li>
                    Do you have any of the following symptoms?<br /><br />
                    <ul class="mb-4 list-inside list-disc px-4">
                        <li>Fever</li>
                        <li>Cough</li>
                        <li>Shortness of breath</li>
                        <li>Chills</li>
                        <li>Body aches</li>
                        <li>Sore or scratchy throat</li>
                        <li>Headache</li>
                        <li>Runny nose</li>
                        <li>Muscle pain</li>
                        <li>Vomitting</li>
                        <li>Nausea</li>
                        <li>Diarrhoa</li>
                        <li>Loss of taste or smell</li>
                    </ul>
                    <mat-radio-group
                        aria-label="Has Symptoms"
                        [(ngModel)]="symptoms"
                    >
                        <mat-radio-button value="true">Yes</mat-radio-button>
                        <mat-radio-button value="false" class="ml-4"
                            >No</mat-radio-button
                        >
                    </mat-radio-group>
                </li>
                <hr class="my-4" />
                <li>
                    Have you been in contact with a COVID-19 case in the last 14
                    days or been asked to self-isolate by a health offical?<br /><br />
                    <mat-radio-group
                        aria-label="COVID contact or self-isolated"
                        [(ngModel)]="contact"
                    >
                        <mat-radio-button value="true">Yes</mat-radio-button>
                        <mat-radio-button value="false" class="ml-4"
                            >No</mat-radio-button
                        >
                    </mat-radio-group>
                </li>
            </ol>
            <button btn matRipple (click)="confirm()">Confirm</button>
            <a
                icon
                matRipple
                [attr.disabled]="!symptoms && !contact"
                class="absolute right-0 top-0"
                [routerLink]="['/welcome']"
            >
                <icon>close</icon>
            </a>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;00ca51ab2b0fca9ea7629e0f0e281c691c3476e0efceaf2ab9b0d2c29f476cb0;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin-covid.component.ts */\n:host > div {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n  max-height: calc(100% - 2rem);\n}\nbutton {\n  margin: 1rem 11rem 0;\n  width: 8rem;\n}\n/*# sourceMappingURL=checkin-covid.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinCovidComponent, { className: "CheckinCovidComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-covid.component.ts", lineNumber: 84 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-details.component.ts
var _c03 = ["checkin-details", ""];
var _c13 = () => ["/welcome"];
function CheckinDetailsComponent_Conditional_0_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 17);
    \u0275\u0275element(5, "input", 18);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "BOOKINGS.VISITOR_PASS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "BOOKINGS.VISITOR_PASS_PLACEHOLDER"));
  }
}
function CheckinDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "h3", 2);
    \u0275\u0275text(3, "Confirm Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "label", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 5);
    \u0275\u0275element(9, "input", 6);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 3)(15, "label", 7);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-form-field", 5);
    \u0275\u0275element(19, "input", 8);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "mat-error");
    \u0275\u0275text(22, "Please enter your full name");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 3)(24, "label", 9);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-form-field", 5);
    \u0275\u0275element(28, "input", 10);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementStart(30, "mat-error");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 3)(34, "label", 9);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-form-field", 5);
    \u0275\u0275element(38, "input", 11);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 3)(41, "label", 12);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-form-field", 5);
    \u0275\u0275element(45, "input", 13);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(47, CheckinDetailsComponent_Conditional_0_Conditional_47_Template, 7, 6, "div", 3);
    \u0275\u0275elementStart(48, "button", 14);
    \u0275\u0275listener("click", function CheckinDetailsComponent_Conditional_0_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateGuest());
    });
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "a", 15)(52, "icon");
    \u0275\u0275text(53, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", \u0275\u0275pipeBind1(1, 16, ctx_r1.form));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 18, "APP.VISITOR_KIOSK.HOST"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 20, "APP.VISITOR_KIOSK.HOST"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 22, "APP.VISITOR_KIOSK.EMAIL_REQUIRED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 24, "APP.VISITOR_KIOSK.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 26, "APP.VISITOR_KIOSK.NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 28, "APP.VISITOR_KIOSK.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(29, 30, "APP.VISITOR_KIOSK.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 32, "APP.VISITOR_KIOSK.EMAIL_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 34, "APP.VISITOR_KIOSK.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(39, 36, "APP.VISITOR_KIOSK.PHONE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 38, "APP.VISITOR_KIOSK.ORGANISATION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(46, 40, "APP.VISITOR_KIOSK.ORGANISATION"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.allow_pass_number ? 47 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 42, "APP.VISITOR_KIOSK.CONTINUE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(44, _c13));
  }
}
function CheckinDetailsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 19);
    \u0275\u0275element(2, "mat-spinner", 20);
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.VISITOR_KIOSK.CHECKIN_LOADING"), " ");
  }
}
var _CheckinDetailsComponent = class _CheckinDetailsComponent {
  constructor() {
    this._checkin = inject(CheckinStateService);
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this.form = this._checkin.form;
    this.loading = false;
  }
  get induction_after_details() {
    return this._settings.get("app.induction_after_details");
  }
  get allow_pass_number() {
    return this._settings.get("app.allow_pass_number");
  }
  get allow_user_photo() {
    return this._settings.get("app.allow_user_photo") && this._settings.get("app.allow_printing_label") !== false;
  }
  async ngOnInit() {
    const form = await nextValueFrom(this.form.pipe(first()));
    const event = await nextValueFrom(this._checkin.event.pipe(first()));
    if (this._checkin.metadata === "registered") {
      this.updateGuest(false);
    } else {
      !form || !form.value.email ? this.previous() : "";
    }
  }
  async updateGuest(update = true) {
    this.loading = true;
    if (update)
      await this._checkin.updateGuest();
    const result = await this._checkin.checkinGuest().then(() => true).catch(() => false);
    this.loading = false;
    if (!result)
      return;
    if (this.induction_after_details) {
      this._router.navigate(["/checkin", "induction"]);
    } else {
      this._router.navigate([
        "/checkin",
        this.allow_user_photo ? "photo" : "results"
      ]);
    }
  }
  previous() {
    this._router.navigate(["/checkin", "scan"]);
  }
};
_CheckinDetailsComponent.\u0275fac = function CheckinDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinDetailsComponent)();
};
_CheckinDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinDetailsComponent, selectors: [["", "checkin-details", ""]], standalone: false, attrs: _c03, decls: 3, vars: 3, consts: [[1, "relative", "flex", "w-[36rem]", "flex-col", "items-center", "overflow-hidden", "rounded", "bg-base-100", "p-4", "shadow", 3, "formGroup"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], [1, "m-4", "text-2xl"], ["field", "", 1, "flex", "flex-col"], ["form", "host"], ["appearance", "outline"], ["matInput", "", "name", "host", "formControlName", "host", 3, "placeholder"], ["form", "name"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["form", "email"], ["matInput", "", "name", "email", "formControlName", "email", 3, "placeholder"], ["matInput", "", "name", "phone", "type", "tel", "formControlName", "phone", 3, "placeholder"], ["form", "org"], ["matInput", "", "name", "org", "formControlName", "organisation", 3, "placeholder"], ["next", "", "btn", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "right-0", "top-0", 3, "routerLink"], ["form", "pass"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "pass", "formControlName", "pass_number", 3, "placeholder"], [1, "flex", "flex-col", "items-center", "space-y-2", "rounded", "bg-base-100", "p-16", "shadow"], [3, "diameter"], [1, "my-4", "text-lg"]], template: function CheckinDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CheckinDetailsComponent_Conditional_0_Template, 54, 45, "form", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, CheckinDetailsComponent_Conditional_2_Template, 6, 4, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx.form) && !ctx.loading ? 0 : 2);
  }
}, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, MatProgressSpinner, MatRipple, MatFormField, MatError, MatInput, IconComponent, AsyncPipe, TranslatePipe], styles: ["\n\nform[_ngcontent-%COMP%] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n}\n[field][_ngcontent-%COMP%] {\n  width: calc(100% - 2rem);\n}\nbutton[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  width: 8rem;\n}\n/*# sourceMappingURL=checkin-details.component.css.map */"] });
var CheckinDetailsComponent = _CheckinDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinDetailsComponent, [{
    type: Component,
    args: [{ selector: "[checkin-details]", template: `
        @if ((form | async) && !loading) {
            <form
                [formGroup]="form | async"
                class="relative flex w-[36rem] flex-col items-center overflow-hidden rounded bg-base-100 p-4 shadow"
            >
                <h3 class="m-4 text-2xl">Confirm Details</h3>
                <div field class="flex flex-col">
                    <label form="host">{{
                        'APP.VISITOR_KIOSK.HOST' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="host"
                            formControlName="host"
                            [placeholder]="'APP.VISITOR_KIOSK.HOST' | translate"
                        />
                        <mat-error>
                            {{ 'APP.VISITOR_KIOSK.EMAIL_REQUIRED' | translate }}
                        </mat-error>
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="name">{{
                        'APP.VISITOR_KIOSK.NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            formControlName="name"
                            [placeholder]="'APP.VISITOR_KIOSK.NAME' | translate"
                        />
                        <mat-error>Please enter your full name</mat-error>
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="email">{{
                        'APP.VISITOR_KIOSK.NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="email"
                            formControlName="email"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.EMAIL' | translate
                            "
                        />
                        <mat-error>{{
                            'APP.VISITOR_KIOSK.EMAIL_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="email">{{
                        'APP.VISITOR_KIOSK.PHONE' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="phone"
                            type="tel"
                            formControlName="phone"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.PHONE' | translate
                            "
                        />
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="org">{{
                        'APP.VISITOR_KIOSK.ORGANISATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="org"
                            formControlName="organisation"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.ORGANISATION' | translate
                            "
                        />
                    </mat-form-field>
                </div>
                @if (allow_pass_number) {
                    <div field class="flex flex-col">
                        <label form="pass">
                            {{ 'BOOKINGS.VISITOR_PASS' | translate }}
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="pass"
                                formControlName="pass_number"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_PASS_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                }
                <button next btn matRipple (click)="updateGuest()">
                    {{ 'APP.VISITOR_KIOSK.CONTINUE' | translate }}
                </button>
                <a
                    icon
                    matRipple
                    class="absolute right-0 top-0"
                    [routerLink]="['/welcome']"
                >
                    <icon>close</icon>
                </a>
            </form>
        } @else {
            <div
                class="absolute inset-0 flex flex-col items-center justify-center"
            >
                <div
                    class="flex flex-col items-center space-y-2 rounded bg-base-100 p-16 shadow"
                >
                    <mat-spinner [diameter]="48"></mat-spinner>
                    <div class="my-4 text-lg">
                        {{ 'APP.VISITOR_KIOSK.CHECKIN_LOADING' | translate }}
                    </div>
                </div>
            </div>
        }
    `, standalone: false, styles: ["/* angular:styles/component:css;a33792e615dc48068535fd49c6ab78561fd4fd12d78fb032c7f5187e35f7c658;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin-details.component.ts */\nform {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n}\n[field] {\n  width: calc(100% - 2rem);\n}\nbutton {\n  margin-bottom: 1rem;\n  width: 8rem;\n}\n/*# sourceMappingURL=checkin-details.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinDetailsComponent, { className: "CheckinDetailsComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-details.component.ts", lineNumber: 159 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-error.component.ts
var _c04 = () => ["/welcome"];
function CheckinErrorComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.error));
  }
}
var _CheckinErrorComponent = class _CheckinErrorComponent {
  constructor() {
    this._checkin = inject(CheckinStateService);
    this.error = this._checkin.error;
  }
};
_CheckinErrorComponent.\u0275fac = function CheckinErrorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinErrorComponent)();
};
_CheckinErrorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinErrorComponent, selectors: [["checkin-error"]], standalone: false, decls: 10, vars: 8, consts: [[1, "relative", "m-4", "flex", "flex-col", "items-center", "space-y-4", "overflow-hidden", "rounded", "bg-base-100", "px-16", "py-4", "text-center", "shadow"], [1, "pb-2", "text-2xl"], ["btn", "", "matRipple", "", 1, "w-32", 3, "routerLink"]], template: function CheckinErrorComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2, "Please see reception.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CheckinErrorComponent_Conditional_3_Template, 3, 3, "p");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Our staff at reception will assist you.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 2);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(4, 3, ctx.error) ? 3 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c04));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "APP.VISITOR_KIOSK.CONFIRM"), " ");
  }
}, dependencies: [RouterLink, MatRipple, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 28rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-error.component.css.map */"] });
var CheckinErrorComponent = _CheckinErrorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinErrorComponent, [{
    type: Component,
    args: [{ selector: "checkin-error", template: `
        <div
            class="relative m-4 flex flex-col items-center space-y-4 overflow-hidden rounded bg-base-100 px-16 py-4 text-center shadow"
        >
            <h3 class="pb-2 text-2xl">Please see reception.</h3>
            @if (error | async) {
                <p>{{ error | async }}</p>
            }
            <p>Our staff at reception will assist you.</p>
            <a btn matRipple class="w-32" [routerLink]="['/welcome']">
                {{ 'APP.VISITOR_KIOSK.CONFIRM' | translate }}
            </a>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;34ad53ca058d4bf3dd80f3650a92e5ea3d6f6a240f4ad5727b63ca6d2e8f6f4b;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin-error.component.ts */\n:host > div {\n  width: 28rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-error.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinErrorComponent, { className: "CheckinErrorComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-error.component.ts", lineNumber: 30 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-induction.component.ts
var _c05 = ["checkin-induction", ""];
var _CheckinInductionComponent = class _CheckinInductionComponent {
  constructor() {
    this._checkin = inject(CheckinStateService);
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.event = this._checkin.event;
    this.agree = false;
    this.loading = false;
  }
  get induction_details() {
    return this._settings.get("app.induction_details");
  }
  get induction_after_details() {
    return this._settings.get("app.induction_after_details");
  }
  get allow_user_photo() {
    return this._settings.get("app.allow_user_photo") && this._settings.get("app.allow_printing_label") !== false;
  }
  get is_enabled() {
    return this._settings.get("app.induction_enabled") && this._settings.get("app.induction_details");
  }
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    const event = await this.event.pipe(first()).toPromise();
    if (!event)
      this._router.navigate(["/checkin"]);
    if (!this.is_enabled || event.induction === "accepted") {
      if (this.induction_after_details) {
        this._router.navigate(["/checkin", "results"]);
      } else {
        this._router.navigate(["/checkin", "details"]);
      }
    }
  }
  async decline() {
    this.loading = true;
    await this._checkin.declineInduction().catch((err) => {
      notifyError("Error declining induction", err);
      throw err;
    });
    this._checkin.setError("You have declined the induction.");
    notifyInfo("Induction declined successfully");
    this._router.navigate(["/checkin", "error"]);
  }
  async continue() {
    this.loading = true;
    await this._checkin.completeInduction().catch((err) => {
      notifyError("Error completing induction", err);
      throw err;
    });
    notifySuccess("Induction completed successfully");
    if (this.induction_after_details) {
      this._router.navigate([
        "/checkin",
        this.allow_user_photo ? "photo" : "results"
      ]);
    } else {
      this._router.navigate(["/checkin", "details"]);
    }
  }
};
_CheckinInductionComponent.\u0275fac = function CheckinInductionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinInductionComponent)();
};
_CheckinInductionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinInductionComponent, selectors: [["", "checkin-induction", ""]], standalone: false, attrs: _c05, decls: 16, vars: 15, consts: [[1, "relative", "flex", "w-[32rem]", "flex-col", "items-center", "overflow-hidden", "rounded", "bg-base-100", "p-4", "shadow"], [1, "my-4"], [1, "max-h-[50vh]", "w-full", "overflow-y-auto", "overflow-x-hidden", "whitespace-pre-wrap", "rounded", "border", "border-base-300", "p-4", "text-sm", "opacity-60"], [1, "my-4", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "clear", "w-32", "underline", 3, "click"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"]], template: function CheckinInductionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-checkbox", 3);
    \u0275\u0275twoWayListener("ngModelChange", function CheckinInductionComponent_Template_mat_checkbox_ngModelChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.agree, $event) || (ctx.agree = $event);
      return $event;
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 4)(10, "button", 5);
    \u0275\u0275listener("click", function CheckinInductionComponent_Template_button_click_10_listener() {
      return ctx.decline();
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 6);
    \u0275\u0275listener("click", function CheckinInductionComponent_Template_button_click_13_listener() {
      return ctx.continue();
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "APP.VISITOR_KIOSK.INDUCTION_MSG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.induction_details, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.agree);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 9, "APP.VISITOR_KIOSK.ACCEPT_TERMS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "APP.VISITOR_KIOSK.DECLINE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.agree);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 13, "APP.VISITOR_KIOSK.ACCEPT"), " ");
  }
}, dependencies: [NgControlStatus, NgModel, MatRipple, MatCheckbox, TranslatePipe], encapsulation: 2 });
var CheckinInductionComponent = _CheckinInductionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinInductionComponent, [{
    type: Component,
    args: [{ selector: "[checkin-induction]", template: `
        <div
            class="relative flex w-[32rem] flex-col items-center overflow-hidden rounded bg-base-100 p-4 shadow"
        >
            <p class="my-4">
                {{ 'APP.VISITOR_KIOSK.INDUCTION_MSG' | translate }}
            </p>
            <div
                class="max-h-[50vh] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap rounded border border-base-300 p-4 text-sm opacity-60"
            >
                {{ induction_details }}
            </div>
            <mat-checkbox [(ngModel)]="agree" class="my-4">
                {{ 'APP.VISITOR_KIOSK.ACCEPT_TERMS' | translate }}
            </mat-checkbox>
            <div class="flex items-center justify-center space-x-2">
                <button
                    btn
                    matRipple
                    class="clear w-32 underline"
                    (click)="decline()"
                >
                    {{ 'APP.VISITOR_KIOSK.DECLINE' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!agree"
                    (click)="continue()"
                >
                    {{ 'APP.VISITOR_KIOSK.ACCEPT' | translate }}
                </button>
            </div>
        </div>
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinInductionComponent, { className: "CheckinInductionComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-induction.component.ts", lineNumber: 54 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-photo.component.ts
function CheckinPhotoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-take-photo", 3);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("captured", function CheckinPhotoComponent_Conditional_0_Template_a_take_photo_captured_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handlePhoto($event));
    })("back", function CheckinPhotoComponent_Conditional_0_Template_a_take_photo_back_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.skip());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.VISITOR_KIOSK.TAKE_PHOTO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("back_text", \u0275\u0275pipeBind1(5, 4, "APP.VISITOR_KIOSK.SKIP"));
  }
}
function CheckinPhotoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 4);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.VISITOR_KIOSK.PRINT_LOADING"), " ");
  }
}
var _CheckinPhotoComponent = class _CheckinPhotoComponent {
  constructor() {
    this._checkin = inject(CheckinStateService);
    this._router = inject(Router);
    this.loading = false;
  }
  ngOnInit() {
    this.loading = false;
  }
  skip() {
    this._router.navigate(["/checkin", "results"]);
  }
  async handlePhoto(event) {
    if (!event)
      return notifyError("Error saving image, please try again");
    this.loading = true;
    this._checkin.setPhoto(event);
    this.loading = false;
    this._router.navigate(["/checkin", "results"]);
  }
};
_CheckinPhotoComponent.\u0275fac = function CheckinPhotoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinPhotoComponent)();
};
_CheckinPhotoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinPhotoComponent, selectors: [["checkin-photo"]], standalone: false, decls: 2, vars: 1, consts: [[1, "relative", "flex", "w-[24rem]", "flex-col", "items-center", "overflow-hidden", "rounded", "bg-base-100", "p-4", "shadow"], [1, "m-auto", "flex", "flex-col", "items-center"], [1, "mb-4", "text-xl"], [3, "captured", "back", "back_text"], [3, "diameter"], [1, "my-4", "text-lg", "text-white"]], template: function CheckinPhotoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CheckinPhotoComponent_Conditional_0_Template, 6, 6, "div", 0)(1, CheckinPhotoComponent_Conditional_1_Template, 5, 4, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.loading ? 0 : 1);
  }
}, dependencies: [MatProgressSpinner, TakePhotoComponent, TranslatePipe], encapsulation: 2 });
var CheckinPhotoComponent = _CheckinPhotoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinPhotoComponent, [{
    type: Component,
    args: [{ selector: "checkin-photo", template: `
        @if (!loading) {
            <div
                class="relative flex w-[24rem] flex-col items-center overflow-hidden rounded bg-base-100 p-4 shadow"
            >
                <h3 class="mb-4 text-xl">
                    {{ 'APP.VISITOR_KIOSK.TAKE_PHOTO' | translate }}
                </h3>
                <a-take-photo
                    (captured)="handlePhoto($event)"
                    [back_text]="'APP.VISITOR_KIOSK.SKIP' | translate"
                    (back)="skip()"
                ></a-take-photo>
            </div>
        } @else {
            <div class="m-auto flex flex-col items-center">
                <mat-spinner [diameter]="48"></mat-spinner>
                <div class="my-4 text-lg text-white">
                    {{ 'APP.VISITOR_KIOSK.PRINT_LOADING' | translate }}
                </div>
            </div>
        }
    `, standalone: false }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinPhotoComponent, { className: "CheckinPhotoComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-photo.component.ts", lineNumber: 34 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-preferences.component.ts
var _c06 = () => ["/welcome"];
function CheckinPreferencesComponent_Conditional_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("value", item_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.name, " ");
  }
}
function CheckinPreferencesComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, " You have already selected a beverage. ");
    \u0275\u0275elementEnd();
  }
}
function CheckinPreferencesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275declareLet(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "h3", 2);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 3)(7, "mat-form-field", 4)(8, "mat-select", 5);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function CheckinPreferencesComponent_Conditional_0_Template_mat_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.beverage, $event) || (ctx_r1.beverage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(10, CheckinPreferencesComponent_Conditional_0_For_11_Template, 2, 2, "mat-option", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, CheckinPreferencesComponent_Conditional_0_Conditional_13_Template, 2, 0, "div", 7);
    \u0275\u0275elementStart(14, "div", 8)(15, "button", 9);
    \u0275\u0275listener("click", function CheckinPreferencesComponent_Conditional_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.update());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "a", 10)(19, "icon");
    \u0275\u0275text(20, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    const has_beverage_r4 = !!((tmp_1_0 = \u0275\u0275pipeBind1(2, 7, ctx_r1.event)) == null ? null : tmp_1_0.extension_data.beverage);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, "APP.VISITOR_KIOSK.BEVERAGE_MSG"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.beverage);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 11, "APP.VISITOR_KIOSK.BEVERAGE_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(12, 13, ctx_r1.menu));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(has_beverage_r4 ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", has_beverage_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 15, ctx_r1.beverage ? "APP.VISITOR_KIOSK.SAVE" : "APP.VISITOR_KIOSK.CONTINUE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c06));
  }
}
function CheckinPreferencesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, ctx_r1.type() === "menu" ? "APP.VISITOR_KIOSK.BEVERAGE_MENU_LOADING" : "APP.VISITOR_KIOSK.BEVERAGE_LOADING"), " ");
  }
}
var _CheckinPreferencesComponent = class _CheckinPreferencesComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._checkin = inject(CheckinStateService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.loading = signal(false);
    this.type = signal("menu");
    this.event = this._checkin.event;
    this.menu = this._org.active_building.pipe(filter((_) => !!_), switchMap((bld) => hu(bld.id, "catering").pipe(catchError(() => of({ details: [] })), map(({ details }) => details instanceof Array ? details : []), map((menu) => menu.map((i) => new CateringItem(i))))), map((menu) => menu.filter((_) => (_.tags || []).find((_2) => _2.toLowerCase() === "drink" || _2.toLowerCase() === "drinks" || _2.toLowerCase() === "beverage"))), startWith([]), shareReplay(1));
  }
  ngOnInit() {
    this.loading.set(true);
    this.subscription("", this._route.queryParamMap.subscribe(async (params) => {
      if (params.has("email")) {
        await this._checkin.loadGuestAndEvent(params.get("email"), params.get("event_id")).catch((err) => {
          this.handleError("Unable to find visitor or a meeting associated with the given email address.");
          throw err;
        });
      }
      if (params.has("jwt"))
        io(params.get("jwt"));
    }));
    this.type.set("menu");
    this.timeout("event", () => {
      this.event.pipe(first()).subscribe((event) => {
        if (!event)
          return this.next();
        if (!event.linked_event) {
          log("CHECKIN", "Visitor booking does not support catering.", void 0, "info");
        }
      });
    }, 1e3);
    this.subscription("menu", this.menu.subscribe((l) => {
      if (l.length) {
        this.loading.set(false);
        this.clearTimeout("no_menu");
      } else {
        this.timeout("no_menu", () => {
          notifyError("No menu available");
          this.next();
        }, 1e3);
      }
    }));
  }
  async update() {
    this.type.set("save");
    if (!this.beverage)
      return this.next();
    this.loading.set(true);
    const booking = await nextValueFrom(this._checkin.event);
    if (!booking)
      return notifyError(i18n("APP.VISITOR_KIOSK.LOAD_ERROR"));
    await lastValueFrom(updateBooking(booking.id, __spreadProps(__spreadValues({}, booking.toJSON()), {
      extension_data: __spreadProps(__spreadValues({}, booking.extension_data), {
        beverage: this.beverage
      })
    })));
    if (booking.linked_event) {
      const event = booking.linked_event;
      const metadata = await lastValueFrom(showEventMetadata(event.event_id, event.system_id));
      const order_list = metadata.catering || [];
      let order = order_list.find((_) => _.caterer == this.beverage.caterer) || new CateringOrder({ caterer: this.beverage.caterer });
      order = await this._createCateringOrder(booking, order, event);
      await lastValueFrom(updateEventMetadata(event.event_id, event.system_id, __spreadProps(__spreadValues({}, metadata), {
        catering: [
          ...metadata.catering?.filter((_) => _.id !== order.id) || [],
          order
        ]
      }), { ical_uid: event.ical_uid }));
    } else {
      const standalone_location = this._settings.get("app.standalone_visitor_location");
      this._createCateringOrder(booking, booking.linked_bookings[0] ? booking.linked_bookings[0].extension_data.details : void 0, void 0, standalone_location);
    }
    notifySuccess(i18n("APP.VISITOR_KIOSK.BEVERAGE_SUCCESS"));
    this.loading.set(false);
    this.next();
  }
  next() {
    this._router.navigate(["/welcome"]);
  }
  handleError(message) {
    this._checkin.setError(message?.statusText || message);
    this._router.navigate(["/checkin", "error"]);
  }
  async _createCateringOrder(parent, old_order = new CateringOrder(), event, location) {
    const existing_item = old_order.items.find((_) => _.custom_id === this.beverage.custom_id);
    if (existing_item)
      existing_item.quantity += 1;
    const order = new CateringOrder(__spreadProps(__spreadValues({}, old_order), {
      caterer: this.beverage.caterer,
      items: existing_item ? [...old_order.items] : [
        ...old_order.items,
        new CateringItem(__spreadProps(__spreadValues({}, this.beverage), {
          quantity: 1
        }))
      ]
    }));
    const booking = new Booking({
      type: "catering-order",
      booking_type: "catering-order",
      date: parent.date,
      duration: parent.duration,
      description: parent.title,
      user_id: parent.user_id,
      user_email: parent.user_email,
      booked_by_email: parent.asset_id,
      asset_id: order.id,
      title: `Catering order for ${parent.user_name}`,
      attendees: [],
      approved: true,
      extension_data: {
        parent_id: parent.id,
        details: order,
        location: location || parent.location
      },
      parent_id: parent.id,
      zones: parent.zones,
      location: location || parent.location
    });
    const query = { booking_id: booking.id };
    if (event) {
      query.event_id = event.id;
      query.ical_uid = event.ical_uid;
    }
    await lastValueFrom(saveBooking(booking, query));
    return order;
  }
};
_CheckinPreferencesComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CheckinPreferencesComponent_BaseFactory;
  return function CheckinPreferencesComponent_Factory(__ngFactoryType__) {
    return (\u0275CheckinPreferencesComponent_BaseFactory || (\u0275CheckinPreferencesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CheckinPreferencesComponent)))(__ngFactoryType__ || _CheckinPreferencesComponent);
  };
})();
_CheckinPreferencesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinPreferencesComponent, selectors: [["checkin-preferences"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "relative", "flex", "w-[36rem]", "flex-col", "items-center", "overflow-hidden", "rounded", "bg-base-100", "p-4", "shadow"], [1, "relative", "flex", "h-[20rem]", "w-[28rem]", "flex-col", "items-center", "justify-center", "space-y-2", "overflow-hidden", "rounded", "bg-base-100", "p-8", "shadow"], [1, "mb-2", "w-full", "text-xl"], [1, "w-full"], ["appearance", "outline", 1, "w-full"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "rounded", "bg-warning", "px-2", "py-1", "text-warning-content"], [1, "flex", "w-full", "items-center", "justify-end"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], ["icon", "", "matRipple", "", 1, "absolute", "right-2", "top-2", 3, "routerLink"], [3, "diameter"]], template: function CheckinPreferencesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CheckinPreferencesComponent_Conditional_0_Template, 21, 18, "div", 0)(1, CheckinPreferencesComponent_Conditional_1_Template, 5, 4, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
  }
}, dependencies: [NgControlStatus, NgModel, RouterLink, MatProgressSpinner, MatRipple, MatFormField, MatSelect, MatOption, IconComponent, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-preferences.component.css.map */"] });
var CheckinPreferencesComponent = _CheckinPreferencesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinPreferencesComponent, [{
    type: Component,
    args: [{ selector: "checkin-preferences", template: `
        @if (!loading()) {
            <div
                class="relative flex w-[36rem] flex-col items-center overflow-hidden rounded bg-base-100 p-4 shadow"
            >
                @let has_beverage = !!(event | async)?.extension_data.beverage;
                <h3 class="mb-2 w-full text-xl">
                    {{ 'APP.VISITOR_KIOSK.BEVERAGE_MSG' | translate }}
                </h3>
                <div class="w-full">
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            [(ngModel)]="beverage"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.BEVERAGE_SELECT' | translate
                            "
                        >
                            @for (item of menu | async; track item) {
                                <mat-option [value]="item">
                                    {{ item.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                @if (has_beverage) {
                    <div
                        class="rounded bg-warning px-2 py-1 text-warning-content"
                    >
                        You have already selected a beverage.
                    </div>
                }
                <div class="flex w-full items-center justify-end">
                    <button
                        btn
                        matRipple
                        class="w-32"
                        [disabled]="has_beverage"
                        (click)="update()"
                    >
                        {{
                            (beverage
                                ? 'APP.VISITOR_KIOSK.SAVE'
                                : 'APP.VISITOR_KIOSK.CONTINUE'
                            ) | translate
                        }}
                    </button>
                </div>
                <a
                    icon
                    matRipple
                    class="absolute right-2 top-2"
                    [routerLink]="['/welcome']"
                >
                    <icon>close</icon>
                </a>
            </div>
        } @else {
            <div
                class="relative flex h-[20rem] w-[28rem] flex-col items-center justify-center space-y-2 overflow-hidden rounded bg-base-100 p-8 shadow"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <div>
                    {{
                        (type() === 'menu'
                            ? 'APP.VISITOR_KIOSK.BEVERAGE_MENU_LOADING'
                            : 'APP.VISITOR_KIOSK.BEVERAGE_LOADING'
                        ) | translate
                    }}
                </div>
            </div>
        }
    `, standalone: false, styles: ["/* angular:styles/component:css;45a1e70cbb4b993091add757337674b51f7e2cd5d8c6d8ffd9f9f0736356a592;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin-preferences.component.ts */\n:host > div {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-preferences.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinPreferencesComponent, { className: "CheckinPreferencesComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-preferences.component.ts", lineNumber: 123 });
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
          this.$overlay.firstElementChild.animate({ transform: [
            "scale(.98)",
            "scale(1.01)"
          ] }, { duration: 400, iterations: Infinity, direction: "alternate", easing: "ease-in-out" });
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
  static async hasCamera() {
    try {
      return !!(await _e.listCameras(false)).length;
    } catch (a) {
      return false;
    }
  }
  static async listCameras(a = false) {
    if (!navigator.mediaDevices) return [];
    let b = async () => (await navigator.mediaDevices.enumerateDevices()).filter((d) => "videoinput" === d.kind), c;
    try {
      a && (await b()).every((d) => !d.label) && (c = await navigator.mediaDevices.getUserMedia({ audio: false, video: true }));
    } catch (d) {
    }
    try {
      return (await b()).map((d, f) => ({ id: d.deviceId, label: d.label || (0 === f ? "Default Camera" : `Camera ${f + 1}`) }));
    } finally {
      c && (console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"), _e._stopVideoStream(c));
    }
  }
  async hasFlash() {
    let a;
    try {
      if (this.$video.srcObject) {
        if (!(this.$video.srcObject instanceof MediaStream)) return false;
        a = this.$video.srcObject;
      } else a = (await this._getCameraStream()).stream;
      return "torch" in a.getVideoTracks()[0].getSettings();
    } catch (b) {
      return false;
    } finally {
      a && a !== this.$video.srcObject && (console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"), _e._stopVideoStream(a));
    }
  }
  isFlashOn() {
    return this._flashOn;
  }
  async toggleFlash() {
    this._flashOn ? await this.turnFlashOff() : await this.turnFlashOn();
  }
  async turnFlashOn() {
    if (!this._flashOn && !this._destroyed && (this._flashOn = true, this._active && !this._paused)) try {
      if (!await this.hasFlash()) throw "No flash available";
      await this.$video.srcObject.getVideoTracks()[0].applyConstraints({ advanced: [{ torch: true }] });
    } catch (a) {
      throw this._flashOn = false, a;
    }
  }
  async turnFlashOff() {
    this._flashOn && (this._flashOn = false, await this._restartVideoStream());
  }
  destroy() {
    this.$video.removeEventListener("loadedmetadata", this._onLoadedMetaData);
    this.$video.removeEventListener("play", this._onPlay);
    document.removeEventListener(
      "visibilitychange",
      this._onVisibilityChange
    );
    window.removeEventListener("resize", this._updateOverlay);
    this._destroyed = true;
    this._flashOn = false;
    this.stop();
    _e._postWorkerMessage(this._qrEnginePromise, "close");
  }
  async start() {
    if (this._destroyed) throw Error("The QR scanner can not be started as it had been destroyed.");
    if (!this._active || this._paused) {
      if ("https:" !== window.location.protocol && console.warn("The camera stream is only accessible if the page is transferred via https."), this._active = true, !document.hidden) if (this._paused = false, this.$video.srcObject) await this.$video.play();
      else try {
        let { stream: a, facingMode: b } = await this._getCameraStream();
        !this._active || this._paused ? _e._stopVideoStream(a) : (this._setVideoMirror(b), this.$video.srcObject = a, await this.$video.play(), this._flashOn && (this._flashOn = false, this.turnFlashOn().catch(() => {
        })));
      } catch (a) {
        if (!this._paused) throw this._active = false, a;
      }
    }
  }
  stop() {
    this.pause();
    this._active = false;
  }
  async pause(a = false) {
    this._paused = true;
    if (!this._active) return true;
    this.$video.pause();
    this.$overlay && (this.$overlay.style.display = "none");
    let b = () => {
      this.$video.srcObject instanceof MediaStream && (_e._stopVideoStream(this.$video.srcObject), this.$video.srcObject = null);
    };
    if (a) return b(), true;
    await new Promise((c) => setTimeout(c, 300));
    if (!this._paused) return false;
    b();
    return true;
  }
  async setCamera(a) {
    a !== this._preferredCamera && (this._preferredCamera = a, await this._restartVideoStream());
  }
  static async scanImage(a, b, c, d, f = false, h = false) {
    let m, n = false;
    b && ("scanRegion" in b || "qrEngine" in b || "canvas" in b || "disallowCanvasResizing" in b || "alsoTryWithoutScanRegion" in b || "returnDetailedScanResult" in b) ? (m = b.scanRegion, c = b.qrEngine, d = b.canvas, f = b.disallowCanvasResizing || false, h = b.alsoTryWithoutScanRegion || false, n = true) : b || c || d || f || h ? console.warn("You're using a deprecated api for scanImage which will be removed in the future.") : console.warn("Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true.");
    b = !!c;
    try {
      let p, k;
      [c, p] = await Promise.all([c || _e.createQrEngine(), _e._loadImage(a)]);
      [d, k] = _e._drawToCanvas(p, m, d, f);
      let q;
      if (c instanceof Worker) {
        let g = c;
        b || _e._postWorkerMessageSync(g, "inversionMode", "both");
        q = await new Promise((l, v) => {
          let w, u, r, y = -1;
          u = (t) => {
            t.data.id === y && (g.removeEventListener("message", u), g.removeEventListener("error", r), clearTimeout(w), null !== t.data.data ? l({ data: t.data.data, cornerPoints: _e._convertPoints(t.data.cornerPoints, m) }) : v(_e.NO_QR_CODE_FOUND));
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
      } else q = await Promise.race([new Promise((g, l) => window.setTimeout(() => l("Scanner error: timeout"), 1e4)), (async () => {
        try {
          var [g] = await c.detect(d);
          if (!g) throw _e.NO_QR_CODE_FOUND;
          return { data: g.rawValue, cornerPoints: _e._convertPoints(g.cornerPoints, m) };
        } catch (l) {
          g = l.message || l;
          if (/not implemented|service unavailable/.test(g)) return _e._disableBarcodeDetector = true, _e.scanImage(a, { scanRegion: m, canvas: d, disallowCanvasResizing: f, alsoTryWithoutScanRegion: h });
          throw `Scanner error: ${g}`;
        }
      })()]);
      return n ? q : q.data;
    } catch (p) {
      if (!m || !h) throw p;
      let k = await _e.scanImage(a, { qrEngine: c, canvas: d, disallowCanvasResizing: f });
      return n ? k : k.data;
    } finally {
      b || _e._postWorkerMessage(c, "close");
    }
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
  static async createQrEngine(a) {
    a && console.warn("Specifying a worker path is not required and not supported anymore.");
    a = () => import("./qr-scanner-worker.min-WQ5Z743D.js").then((c) => c.createWorker());
    if (!(!_e._disableBarcodeDetector && "BarcodeDetector" in window && BarcodeDetector.getSupportedFormats && (await BarcodeDetector.getSupportedFormats()).includes("qr_code"))) return a();
    let b = navigator.userAgentData;
    return b && b.brands.some(({ brand: c }) => /Chromium/i.test(c)) && /mac ?OS/i.test(b.platform) && await b.getHighEntropyValues(["architecture", "platformVersion"]).then(({ architecture: c, platformVersion: d }) => /arm/i.test(c || "arm") && 13 <= parseInt(d || "13")).catch(() => true) ? a() : new BarcodeDetector({ formats: ["qr_code"] });
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
    return { x: Math.round((a.videoWidth - b) / 2), y: Math.round((a.videoHeight - b) / 2), width: b, height: b, downScaledWidth: this._legacyCanvasSize, downScaledHeight: this._legacyCanvasSize };
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
    !this._active || this.$video.paused || this.$video.ended || ("requestVideoFrameCallback" in this.$video ? this.$video.requestVideoFrameCallback.bind(this.$video) : requestAnimationFrame)(async () => {
      if (!(1 >= this.$video.readyState)) {
        var a = Date.now() - this._lastScanTimestamp, b = 1e3 / this._maxScansPerSecond;
        a < b && await new Promise((d) => setTimeout(d, b - a));
        this._lastScanTimestamp = Date.now();
        try {
          var c = await _e.scanImage(this.$video, { scanRegion: this._scanRegion, qrEngine: this._qrEnginePromise, canvas: this.$canvas });
        } catch (d) {
          if (!this._active) return;
          this._onDecodeError(d);
        }
        !_e._disableBarcodeDetector || await this._qrEnginePromise instanceof Worker || (this._qrEnginePromise = _e.createQrEngine());
        c ? (this._onDecode ? this._onDecode(c) : this._legacyOnDecode && this._legacyOnDecode(c.data), this.$codeOutlineHighlight && (clearTimeout(this._codeOutlineHighlightRemovalTimeout), this._codeOutlineHighlightRemovalTimeout = void 0, this.$codeOutlineHighlight.setAttribute("viewBox", `${this._scanRegion.x || 0} ${this._scanRegion.y || 0} ${this._scanRegion.width || this.$video.videoWidth} ${this._scanRegion.height || this.$video.videoHeight}`), this.$codeOutlineHighlight.firstElementChild.setAttribute(
          "points",
          c.cornerPoints.map(({ x: d, y: f }) => `${d},${f}`).join(" ")
        ), this.$codeOutlineHighlight.style.display = "")) : this.$codeOutlineHighlight && !this._codeOutlineHighlightRemovalTimeout && (this._codeOutlineHighlightRemovalTimeout = setTimeout(() => this.$codeOutlineHighlight.style.display = "none", 100));
      }
      this._scanFrame();
    });
  }
  _onDecodeError(a) {
    a !== _e.NO_QR_CODE_FOUND && console.log(a);
  }
  async _getCameraStream() {
    if (!navigator.mediaDevices) throw "Camera not found.";
    let a = /^(environment|user)$/.test(this._preferredCamera) ? "facingMode" : "deviceId", b = [{ width: { min: 1024 } }, { width: { min: 768 } }, {}], c = b.map((d) => Object.assign({}, d, { [a]: { exact: this._preferredCamera } }));
    for (let d of [...c, ...b]) try {
      let f = await navigator.mediaDevices.getUserMedia({ video: d, audio: false }), h = this._getFacingMode(f) || (d.facingMode ? this._preferredCamera : "environment" === this._preferredCamera ? "user" : "environment");
      return { stream: f, facingMode: h };
    } catch (f) {
    }
    throw "Camera not found.";
  }
  async _restartVideoStream() {
    let a = this._paused;
    await this.pause(true) && !a && this._active && await this.start();
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
    b = c.getContext("2d", { alpha: false });
    b.imageSmoothingEnabled = false;
    b.drawImage(a, f, h, m, n, 0, 0, c.width, c.height);
    return [c, b];
  }
  static async _loadImage(a) {
    if (a instanceof Image) return await _e._awaitImageLoad(a), a;
    if (a instanceof HTMLVideoElement || a instanceof HTMLCanvasElement || a instanceof SVGImageElement || "OffscreenCanvas" in window && a instanceof OffscreenCanvas || "ImageBitmap" in window && a instanceof ImageBitmap) return a;
    if (a instanceof File || a instanceof Blob || a instanceof URL || "string" === typeof a) {
      let b = new Image();
      b.src = a instanceof File || a instanceof Blob ? URL.createObjectURL(a) : a.toString();
      try {
        return await _e._awaitImageLoad(b), b;
      } finally {
        (a instanceof File || a instanceof Blob) && URL.revokeObjectURL(b.src);
      }
    } else throw "Unsupported image type.";
  }
  static async _awaitImageLoad(a) {
    a.complete && 0 !== a.naturalWidth || await new Promise((b, c) => {
      let d = (f) => {
        a.removeEventListener("load", d);
        a.removeEventListener("error", d);
        f instanceof ErrorEvent ? c("Image load error") : b();
      };
      a.addEventListener("load", d);
      a.addEventListener("error", d);
    });
  }
  static async _postWorkerMessage(a, b, c, d) {
    return _e._postWorkerMessageSync(await a, b, c, d);
  }
  static _postWorkerMessageSync(a, b, c, d) {
    if (!(a instanceof Worker)) return -1;
    let f = _e._workerMessageId++;
    a.postMessage({ id: f, type: b, data: c }, d);
    return f;
  }
};
e.DEFAULT_CANVAS_SIZE = 400;
e.NO_QR_CODE_FOUND = "No QR code found";
e._disableBarcodeDetector = false;
e._workerMessageId = 0;
var qr_scanner_min_default = e;

// apps/visitor-kiosk/src/app/checkin/checkin-qr-scan.component.ts
var _c07 = ["video"];
var _c14 = ["checkin-qr-scan", ""];
var _c2 = () => ["/welcome"];
var _CheckinQRScanComponent = class _CheckinQRScanComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._checkin = inject(CheckinStateService);
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this.checking_code = false;
    this._video_el = viewChild("video");
  }
  get is_induction_enabled() {
    return this._settings.get("app.induction_enabled") && this._settings.get("app.induction_details");
  }
  get induction_after_details() {
    return this._settings.get("app.induction_after_details");
  }
  ngAfterViewInit() {
    this._checkin.metadata = "";
    this.setupQRReader();
  }
  ngOnDestroy() {
    const _video_el = this._video_el();
    if (_video_el.nativeElement.srcObject) {
      _video_el.nativeElement.srcObject.getTracks().forEach((track) => track?.stop());
    }
    this._reader?.stop();
  }
  async checkQRCode(raw_text) {
    if (this.checking_code)
      return;
    this.timeout("check_qr_code", async () => {
      this._reader?.stop();
      this.checking_code = true;
      const chunks = raw_text.split(",");
      let [visit_block, system_id, event_id, host_email] = chunks;
      const [_, visitor_email] = visit_block.split(":");
      if (!visitor_email && !event_id) {
        notifyError("Invalid QRCode");
        this.setupQRReader();
        this.checking_code = false;
        return;
      }
      if (!/^\d+$/.test(event_id))
        event_id = void 0;
      await this._checkin.loadGuestAndEvent(visitor_email, event_id).catch((err) => {
        this.handleError(err.message || err);
        this.checking_code = false;
        throw err;
      });
      const event = await nextValueFrom(this._checkin.event);
      if (event.rejected) {
        this.handleError("Your meeting has been rejected.");
        this.checking_code = false;
        return;
      }
      if (event.checked_in_at) {
        this._router.navigate(["/checkin", "checkout"]);
        return;
      }
      if (event.checked_out_at) {
        this.handleError("Your meeting has already finished.");
        this.checking_code = false;
        return;
      }
      if (this.is_induction_enabled && event?.induction !== "accepted") {
        this._router.navigate(["/checkin", "induction"]);
      } else {
        this._router.navigate(["/checkin", "details"]);
      }
      this.checking_code = false;
    });
  }
  async checkEmail(email) {
    if (!email || !email.includes("@") || email.length < 5)
      return;
    await this._checkin.loadGuestAndEvent(email).catch((err) => {
      this.handleError("Unable to find visitor or a meeting associated with the given email address.");
      throw err;
    });
    const event = await nextValueFrom(this._checkin.event);
    if (event.checked_out_at) {
      this.handleError("Your meeting has already finished.");
      this.checking_code = false;
      return;
    }
    if (event.checked_in_at) {
      this._router.navigate(["/checkin", "checkout"]);
      return;
    }
    if (event.induction !== "accepted" && this.is_induction_enabled && !this.induction_after_details) {
      this._router.navigate(["/checkin", "induction"]);
    } else {
      this._router.navigate(["/checkin", "details"]);
    }
  }
  setupQRReader() {
    this.timeout("setup_qr_reader", () => {
      const _video_el = this._video_el();
      if (!_video_el?.nativeElement)
        return this.setupQRReader();
      if (navigator.mediaDevices?.getUserMedia && !_video_el.nativeElement.srcObject) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => this._video_el().nativeElement.srcObject = stream).catch((e2) => console.error("Unable to fetch media devices!", e2));
      }
      if (!qr_scanner_min_default)
        return;
      this._reader = new qr_scanner_min_default(_video_el.nativeElement, (r) => this.checkQRCode(r.data), {});
      this._reader.start();
    });
  }
  handleError(message) {
    this._checkin.setError(message?.statusText || message);
    this._router.navigate(["/checkin", "error"]);
  }
};
_CheckinQRScanComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CheckinQRScanComponent_BaseFactory;
  return function CheckinQRScanComponent_Factory(__ngFactoryType__) {
    return (\u0275CheckinQRScanComponent_BaseFactory || (\u0275CheckinQRScanComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CheckinQRScanComponent)))(__ngFactoryType__ || _CheckinQRScanComponent);
  };
})();
_CheckinQRScanComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinQRScanComponent, selectors: [["", "checkin-qr-scan", ""]], viewQuery: function CheckinQRScanComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._video_el, _c07, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c14, decls: 30, vars: 22, consts: [["video", ""], [1, "relative", "flex", "w-[36rem]", "flex-col", "items-center", "overflow-hidden", "rounded", "bg-base-100", "p-4", "shadow"], [1, "my-4"], [1, "flex", "w-full", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-px", "flex-1"], ["matInput", "", "placeholder", "Enter email...", "type", "email", "autocomplete", "off", 3, "ngModelChange", "blur", "keyup.enter", "ngModel"], ["btn", "", "matRipple", "", 3, "click"], [1, "relative", "mt-4", "overflow-hidden", "rounded", "border", "border-base-200", "bg-base-200"], [1, "absolute", "left-1/2", "top-1/2", "z-0", "flex", "-translate-x-1/2", "-translate-y-1/2", "flex-col", "items-center", "space-y-2", "opacity-30"], [1, "text-6xl"], [1, "text-center"], ["id", "qr-stream", "playsinline", "", "width", "640", "height", "480", "autoplay", "", 1, "relative", "z-10", "object-cover"], ["icon", "", "matRipple", "", 1, "absolute", "right-0", "top-0", 3, "routerLink"], [1, "relative", "flex", "flex-col", "items-center", "overflow-hidden", "rounded", "bg-base-100", "p-16", "shadow"], ["diameter", "32"]], template: function CheckinQRScanComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "p", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4)(6, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function CheckinQRScanComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function CheckinQRScanComponent_Template_input_blur_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.checkEmail(ctx.email));
    })("keyup.enter", function CheckinQRScanComponent_Template_input_keyup_enter_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.checkEmail(ctx.email));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 6);
    \u0275\u0275listener("click", function CheckinQRScanComponent_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.checkEmail(ctx.email));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "icon", 9);
    \u0275\u0275text(16, "videocam_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 10);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "video", 11, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 12)(23, "icon");
    \u0275\u0275text(24, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 13);
    \u0275\u0275element(26, "mat-spinner", 14);
    \u0275\u0275elementStart(27, "p", 2);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("hidden", ctx.checking_code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 11, "APP.VISITOR_KIOSK.QR_CODE_MSG"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 13, "APP.VISITOR_KIOSK.INVALID_EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 15, "APP.VISITOR_KIOSK.FIND_DETAILS"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 17, "APP.VISITOR_KIOSK.CAMERA_UNAVAILABLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c2));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("hidden", !ctx.checking_code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 19, "APP.VISITOR_KIOSK.LOADING_DETAILS"), " ");
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, MatProgressSpinner, MatRipple, MatFormField, MatError, MatInput, IconComponent, TranslatePipe], styles: ["\n\nvideo[_ngcontent-%COMP%] {\n  width: 34rem;\n  height: 24rem;\n}\na[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=checkin-qr-scan.component.css.map */"] });
var CheckinQRScanComponent = _CheckinQRScanComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinQRScanComponent, [{
    type: Component,
    args: [{ selector: "[checkin-qr-scan]", template: `
        <div
            class="relative flex w-[36rem] flex-col items-center overflow-hidden rounded bg-base-100 p-4 shadow"
            [class.hidden]="checking_code"
        >
            <p class="my-4">
                {{ 'APP.VISITOR_KIOSK.QR_CODE_MSG' | translate }}
            </p>
            <div class="flex w-full items-center space-x-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-px flex-1"
                >
                    <input
                        matInput
                        [(ngModel)]="email"
                        placeholder="Enter email..."
                        type="email"
                        autocomplete="off"
                        (blur)="checkEmail(email)"
                        (keyup.enter)="checkEmail(email)"
                    />
                    <mat-error>{{
                        'APP.VISITOR_KIOSK.INVALID_EMAIL' | translate
                    }}</mat-error>
                </mat-form-field>
                <button btn matRipple (click)="checkEmail(email)">
                    {{ 'APP.VISITOR_KIOSK.FIND_DETAILS' | translate }}
                </button>
            </div>
            <div
                class="relative mt-4 overflow-hidden rounded border border-base-200 bg-base-200"
            >
                <div
                    class="absolute left-1/2 top-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2 opacity-30"
                >
                    <icon class="text-6xl">videocam_off</icon>
                    <p class="text-center">
                        {{ 'APP.VISITOR_KIOSK.CAMERA_UNAVAILABLE' | translate }}
                    </p>
                </div>
                <video
                    #video
                    id="qr-stream"
                    playsinline
                    width="640"
                    height="480"
                    autoplay
                    class="relative z-10 object-cover"
                ></video>
            </div>
            <a
                icon
                matRipple
                class="absolute right-0 top-0"
                [routerLink]="['/welcome']"
            >
                <icon>close</icon>
            </a>
        </div>
        <div
            class="relative flex flex-col items-center overflow-hidden rounded bg-base-100 p-16 shadow"
            [class.hidden]="!checking_code"
        >
            <mat-spinner diameter="32"></mat-spinner>
            <p class="my-4">
                {{ 'APP.VISITOR_KIOSK.LOADING_DETAILS' | translate }}
            </p>
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;f8c4f94f51bad43854aa11f38704354ddfb3bca198dce0c82bd54a6e53c0dd17;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin-qr-scan.component.ts */\nvideo {\n  width: 34rem;\n  height: 24rem;\n}\na {\n  position: absolute;\n}\n/*# sourceMappingURL=checkin-qr-scan.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinQRScanComponent, { className: "CheckinQRScanComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-qr-scan.component.ts", lineNumber: 106 });
})();

// libs/components/src/lib/printable.component.ts
var _c08 = ["printable", ""];
var _c15 = ["*"];
function PrintableComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.content), \u0275\u0275sanitizeHtml);
  }
}
var _PrintableComponent = class _PrintableComponent extends AsyncHandler {
  constructor() {
    super();
    this._overlay = inject(Overlay);
    this._elem = inject(ElementRef);
    this.content = "";
    this._overlay_ref = null;
    this._portal = viewChild(CdkPortal);
  }
  ngOnInit() {
    this.open();
  }
  ngAfterViewInit() {
    this.content = this._elem.nativeElement.outerHTML;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.close();
  }
  open() {
    this.timeout("open", () => {
      if (this._overlay_ref)
        this.close();
      const _portal = this._portal();
      if (!_portal)
        return;
      const default_x = "end";
      const default_y = "top";
      this._overlay_ref = this._overlay.create({
        hasBackdrop: false,
        positionStrategy: this._overlay.position().flexibleConnectedTo(document.body).withPositions([
          {
            originX: default_x,
            originY: default_y,
            overlayX: default_x,
            overlayY: default_y
          }
        ])
      });
      this._overlay_ref.attach(_portal);
    }, 50);
  }
  close() {
    this.clearTimeout("open");
    if (this._overlay_ref) {
      this._overlay_ref.dispose();
      this._overlay_ref = null;
    }
  }
};
_PrintableComponent.\u0275fac = function PrintableComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrintableComponent)();
};
_PrintableComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrintableComponent, selectors: [["", "printable", ""]], viewQuery: function PrintableComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._portal, CdkPortal, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c08, ngContentSelectors: _c15, decls: 2, vars: 0, consts: [["cdk-portal", ""], ["printable-view", "", 1, "pointer-events-none", "fixed", "left-0", "top-0", "hidden", "flex-col", "items-end", "print:flex", 3, "innerHTML"]], template: function PrintableComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275projection(0);
    \u0275\u0275template(1, PrintableComponent_ng_template_1_Template, 2, 3, "ng-template", 0);
  }
}, dependencies: [SanitizePipe, PortalModule, TemplatePortalDirective], encapsulation: 2 });
var PrintableComponent = _PrintableComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrintableComponent, [{
    type: Component,
    args: [{
      selector: "[printable]",
      template: `
        <ng-content />

        <ng-template cdk-portal>
            <div
                printable-view
                class="pointer-events-none fixed left-0 top-0 hidden flex-col items-end print:flex"
                [innerHTML]="content | sanitize"
            ></div>
        </ng-template>
    `,
      imports: [SanitizePipe, PortalModule]
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrintableComponent, { className: "PrintableComponent", filePath: "libs/components/src/lib/printable.component.ts", lineNumber: 31 });
})();

// libs/components/src/lib/level.pipe.ts
var _LevelPipe = class _LevelPipe {
  constructor() {
    this._org = inject(OrganisationService);
  }
  transform(id) {
    return this._org.levelWithID(id instanceof Array ? id : [id]);
  }
};
_LevelPipe.\u0275fac = function LevelPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LevelPipe)();
};
_LevelPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "level", type: _LevelPipe, pure: true });
var LevelPipe = _LevelPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LevelPipe, [{
    type: Pipe,
    args: [{
      name: "level"
    }]
  }], null, null);
})();

// libs/components/src/lib/user-avatar.component.ts
function UserAvatarComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials, " ");
  }
}
function UserAvatarComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.user().photo);
  }
}
function UserAvatarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, UserAvatarComponent_Conditional_0_Conditional_1_Template, 2, 1, "div", 1)(2, UserAvatarComponent_Conditional_0_Conditional_2_Template, 1, 1, "img", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("user-id", ctx_r0.user().id);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.user().photo ? 1 : 2);
  }
}
var _UserAvatarComponent = class _UserAvatarComponent {
  constructor() {
    this.user = input(void 0);
  }
  get initials() {
    const user = this.user();
    if (!user)
      return "NA";
    const name = user.name || "";
    const parts = name.replace(/[()[\]\-+=\\/]+/gi, "").split(" ");
    return parts.length > 1 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : name.slice(0, 2);
  }
};
_UserAvatarComponent.\u0275fac = function UserAvatarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserAvatarComponent)();
};
_UserAvatarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvatarComponent, selectors: [["a-user-avatar"]], inputs: { user: [1, "user"] }, decls: 1, vars: 1, consts: [[1, "flex", "h-[2.5em]", "w-[2.5em]", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border-2", "border-base-100", "bg-base-200"], ["initials", "", 1, "uppercase", "text-base-content", "opacity-60"], ["auth", "", 1, "h-full", "w-full", "object-cover", "object-center", 3, "source"]], template: function UserAvatarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, UserAvatarComponent_Conditional_0_Template, 3, 2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.user() ? 0 : -1);
  }
}, dependencies: [AuthenticatedImageDirective], encapsulation: 2 });
var UserAvatarComponent = _UserAvatarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAvatarComponent, [{
    type: Component,
    args: [{ selector: "a-user-avatar", template: `
        @if (user()) {
            <div
                class="flex h-[2.5em] w-[2.5em] items-center justify-center overflow-hidden rounded-full border-2 border-base-100 bg-base-200"
                [attr.user-id]="user().id"
            >
                @if (!user().photo) {
                    <div
                        initials
                        class="uppercase text-base-content opacity-60"
                    >
                        {{ initials }}
                    </div>
                } @else {
                    <img
                        auth
                        class="h-full w-full object-cover object-center"
                        [source]="user().photo"
                    />
                }
            </div>
        }
    `, imports: [AuthenticatedImageDirective] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvatarComponent, { className: "UserAvatarComponent", filePath: "libs/components/src/lib/user-avatar.component.ts", lineNumber: 33 });
})();

// libs/users/src/lib/user-label.component.ts
var _c09 = (a0) => ({ title: a0 });
var _c16 = (a0) => ({ host_name: a0 });
var _c22 = (a0) => ({ location: a0 });
function UserLabelComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const level_r1 = \u0275\u0275readContextLet(17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "APP.VISITOR_KIOSK.LABEL_LOCATION", \u0275\u0275pureFunction1(4, _c22, level_r1.display_name || level_r1.name)), " ");
  }
}
function UserLabelComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.user()) == null ? null : tmp_2_0.pass_number);
  }
}
function UserLabelComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.user().qr_code, \u0275\u0275sanitizeUrl);
  }
}
var _UserLabelComponent = class _UserLabelComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this.user = input({});
  }
  get landscape() {
    return this._settings.get("app.label_landscape");
  }
  get logo() {
    return this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light");
  }
};
_UserLabelComponent.\u0275fac = function UserLabelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserLabelComponent)();
};
_UserLabelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserLabelComponent, selectors: [["user-label"]], inputs: { user: [1, "user"] }, decls: 33, vars: 43, consts: [[1, "user-label", "portrait", "relative", "m-2", "rounded-xl", "border", "border-neutral", "bg-base-100", "p-4"], [1, "flex", "h-full", "flex-col", "leading-tight"], [1, "mb-1", "flex", "h-20", "w-20", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border", "border-base-400", "bg-base-200", "text-4xl"], [3, "user"], [1, "mb-1", "text-2xl"], [1, "opacity-60"], [1, "absolute", "bottom-4", "left-4", "mt-2", "w-32", "rounded-lg", "border", "border-black", "px-2", "py-1", "text-center", "font-medium", "uppercase", "text-black"], [1, "absolute", "right-4", "top-4", "flex", "flex-col", "items-end", "space-y-2"], ["auth", "", "alt", "Logo", 1, "h-12", "object-contain", 3, "src"], [1, "text-right", "text-xs"], [1, "text-right"], [1, "absolute", "bottom-4", "right-4", "flex", "items-end"], [1, "text-right", "font-medium", "leading-tight"], [1, "relative", "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-lg", "border", "border-base-200"], [1, "h-14", "w-14", "object-contain", "object-center", 3, "src"]], template: function UserLabelComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "a-user-avatar", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 6);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 7);
    \u0275\u0275element(16, "img", 8);
    \u0275\u0275declareLet(17);
    \u0275\u0275pipe(18, "level");
    \u0275\u0275conditionalCreate(19, UserLabelComponent_Conditional_19_Template, 3, 6, "div", 9);
    \u0275\u0275elementStart(20, "pre", 10);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, UserLabelComponent_Conditional_22_Template, 2, 1, "pre", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 11)(24, "div", 12)(25, "div");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 13);
    \u0275\u0275conditionalCreate(32, UserLabelComponent_Conditional_32_Template, 1, 1, "img", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_10_0;
    let tmp_11_0;
    \u0275\u0275classProp("landscape", ctx.landscape);
    \u0275\u0275advance(3);
    \u0275\u0275property("user", ctx.user());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.user().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 22, "APP.VISITOR_KIOSK.LABEL_FOR", \u0275\u0275pureFunction1(39, _c09, (tmp_3_0 = ctx.user()) == null ? null : tmp_3_0.title)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 25, "APP.VISITOR_KIOSK.LABEL_HOST", \u0275\u0275pureFunction1(41, _c16, (tmp_4_0 = ctx.user()) == null ? null : tmp_4_0.host)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 28, "APP.VISITOR_KIOSK.VISITOR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("max-width", ctx.landscape ? "8rem" : "");
    \u0275\u0275property("src", (ctx.logo == null ? null : ctx.logo.src) || ctx.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    const level_r3 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(18, 30, ctx.user().zones));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(level_r3 ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_10_0 = ctx.user()) == null ? null : tmp_10_0.extra_details);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx.user()) == null ? null : tmp_11_0.pass_number) ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("space-x-2", !ctx.landscape)("space-y-2", ctx.landscape)("flex-col", ctx.landscape);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 33, ctx.user().date, "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 36, ctx.user().date, "mediumDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.user().qr_code ? 32 : -1);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  UserAvatarComponent,
  TranslatePipe,
  LevelPipe,
  AuthenticatedImageDirective
], styles: ["/* angular:styles/component:css;5c04361388d35df81bba08d5f28fa26d467424d6614f6aa9de2da6eea3b253d6;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/user-label.component.ts */\n:host {\n  font-size: 1cm;\n}\n.user-label.portrait {\n  width: 25rem;\n  height: 15rem;\n}\n.user-label.landscape {\n  width: 15rem;\n  height: 25rem;\n}\n/*# sourceMappingURL=user-label.component.css.map */\n"], encapsulation: 2 });
var UserLabelComponent = _UserLabelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserLabelComponent, [{
    type: Component,
    args: [{ selector: `user-label`, template: `
        <div
            class="user-label portrait relative m-2 rounded-xl border border-neutral bg-base-100 p-4"
            [class.landscape]="landscape"
        >
            <div class="flex h-full flex-col leading-tight">
                <div
                    class="mb-1 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-base-400 bg-base-200 text-4xl"
                >
                    <a-user-avatar [user]="user()"></a-user-avatar>
                </div>
                <div class="mb-1 text-2xl">{{ user().name }}</div>
                <div>
                    {{
                        'APP.VISITOR_KIOSK.LABEL_FOR'
                            | translate: { title: user()?.title }
                    }}
                </div>
                <div class="opacity-60">
                    {{
                        'APP.VISITOR_KIOSK.LABEL_HOST'
                            | translate
                                : {
                                      host_name: user()?.host,
                                  }
                    }}
                </div>
            </div>
            <div
                class="absolute bottom-4 left-4 mt-2 w-32 rounded-lg border border-black px-2 py-1 text-center font-medium uppercase text-black"
            >
                {{ 'APP.VISITOR_KIOSK.VISITOR' | translate }}
            </div>
            <div
                class="absolute right-4 top-4 flex flex-col items-end space-y-2"
            >
                <img
                    auth
                    class="h-12 object-contain"
                    [style.max-width]="landscape ? '8rem' : ''"
                    alt="Logo"
                    [src]="logo?.src || logo"
                />
                @let level = user().zones | level;
                @if (level) {
                    <div class="text-right text-xs">
                        {{
                            'APP.VISITOR_KIOSK.LABEL_LOCATION'
                                | translate
                                    : {
                                          location:
                                              level.display_name || level.name,
                                      }
                        }}
                    </div>
                }
                <pre class="text-right">{{ user()?.extra_details }}</pre>
                @if (user()?.pass_number) {
                    <pre class="text-right text-xs">{{
                        user()?.pass_number
                    }}</pre>
                }
            </div>
            <div
                class="absolute bottom-4 right-4 flex items-end"
                [class.space-x-2]="!landscape"
                [class.space-y-2]="landscape"
                [class.flex-col]="landscape"
            >
                <div class="text-right font-medium leading-tight">
                    <div>
                        {{ user().date | date: 'shortTime' }}
                    </div>
                    <div>
                        {{ user().date | date: 'mediumDate' }}
                    </div>
                </div>
                <div
                    class="relative flex h-16 w-16 items-center justify-center rounded-lg border border-base-200"
                >
                    @if (user().qr_code) {
                        <img
                            class="h-14 w-14 object-contain object-center"
                            [src]="user().qr_code"
                        />
                    }
                </div>
            </div>
        </div>
    `, encapsulation: ViewEncapsulation.None, imports: [
      CommonModule,
      UserAvatarComponent,
      TranslatePipe,
      LevelPipe,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;5c04361388d35df81bba08d5f28fa26d467424d6614f6aa9de2da6eea3b253d6;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/user-label.component.ts */\n:host {\n  font-size: 1cm;\n}\n.user-label.portrait {\n  width: 25rem;\n  height: 15rem;\n}\n.user-label.landscape {\n  width: 15rem;\n  height: 25rem;\n}\n/*# sourceMappingURL=user-label.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserLabelComponent, { className: "UserLabelComponent", filePath: "libs/users/src/lib/user-label.component.ts", lineNumber: 141 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-result.component.ts
var _c010 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({ name: a0, email: a1, photo: a2, title: a3, host: a4, zones: a5, date: a6, extra_details: a7, pass_number: a8, qr_code: a9 });
function CheckinResultsComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "user-label", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const ev_r2 = \u0275\u0275readContextLet(9);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("user", \u0275\u0275pureFunctionV(3, _c010, [(ev_r2 == null ? null : ev_r2.asset_name) || (ev_r2 == null ? null : ev_r2.description), ev_r2 == null ? null : ev_r2.asset_id, \u0275\u0275pipeBind1(2, 1, ctx_r2.photo), ev_r2 == null ? null : ev_r2.title, (ev_r2 == null ? null : ev_r2.user_name) || ev_r2.user_email, ev_r2 == null ? null : ev_r2.zones, (ev_r2 == null ? null : ev_r2.date) || ctx_r2.date, ev_r2 == null ? null : ev_r2.extension_data == null ? null : ev_r2.extension_data.extra_details, ev_r2 == null ? null : ev_r2.extension_data == null ? null : ev_r2.extension_data.pass_number, ctx_r2.qr_code]));
  }
}
function CheckinResultsComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function CheckinResultsComponent_Conditional_0_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.print());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.VISITOR_KIOSK.PRINT_LABEL"), " ");
  }
}
function CheckinResultsComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function CheckinResultsComponent_Conditional_0_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.next());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.VISITOR_KIOSK.BEVERAGES"), " ");
  }
}
function CheckinResultsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275declareLet(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "h3", 1);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 2);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275declareLet(9);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275conditionalCreate(11, CheckinResultsComponent_Conditional_0_Conditional_11_Template, 3, 14, "div", 3);
    \u0275\u0275elementStart(12, "div", 4);
    \u0275\u0275conditionalCreate(13, CheckinResultsComponent_Conditional_0_Conditional_13_Template, 3, 3, "button", 5);
    \u0275\u0275conditionalCreate(14, CheckinResultsComponent_Conditional_0_Conditional_14_Template, 3, 3, "button", 6);
    \u0275\u0275elementStart(15, "button", 7);
    \u0275\u0275listener("click", function CheckinResultsComponent_Conditional_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.done());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const details_r6 = \u0275\u0275pipeBind1(2, 6, ctx_r2.event);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 8, (details_r6.extension_data == null ? null : details_r6.extension_data.self_registered) ? "APP.VISITOR_KIOSK.CHECKED_IN_MSG_SELF_REG" : "APP.VISITOR_KIOSK.CHECKED_IN_MSG"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind2(8, 12, \u0275\u0275pipeBind1(7, 10, ctx_r2.result_template), "html"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275storeLet(\u0275\u0275pipeBind1(10, 15, ctx_r2.event));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.printing() ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.allow_printing_label ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.allow_beverages() ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 18, "APP.VISITOR_KIOSK.CONFIRM"), " ");
  }
}
var DEFAULT_TEMPLATE = `
<p class="text-center">
    Welcome, you have a meeting at {{ time }} with {{ host_name }}.
    <br />{{ host_name }} has been notified and will be with you shortly.
</p>
<p>{{ can_use_lift }}</p>
`;
var _CheckinResultsComponent = class _CheckinResultsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._date = inject(DatePipe);
    this._checkin = inject(CheckinStateService);
    this.qr_code = "";
    this.date = Date.now();
    this.zones = [];
    this.allow_beverages = signal(false);
    this.printing = signal(false);
    this.event = this._checkin.event;
    this.guest = this._checkin.guest;
    this.photo = this._checkin.photo;
    this.level = combineLatest([
      this.event,
      this._org.initialised
    ]).pipe(map(([_]) => _ ? this._org.levelWithID(_.zones) : null));
    this.result_template = combineLatest([
      this.event,
      this.guest
    ]).pipe(filter(([event, guest]) => !!event && !!guest), map(([event, guest]) => {
      let template = this._settings.get("app.checked_in_template");
      if (!template)
        template = DEFAULT_TEMPLATE;
      let updated_template = template.replace(/{{ title }}/g, event?.title || "").replace(/{{ room_name }}/g, event?.extension_data?.location_id || "").replace(/{{ host_name }}/g, event?.user_name || "").replace(/{{ host_email }}/g, event?.user_email || "").replace(/{{ visitor_name }}/g, guest?.name || "").replace(/{{ visitor_email }}/g, guest?.email || "").replace(/{{ can_use_lift }}/g, event?.extension_data?.can_use_lift ? `Please use the vistor access lift over there` : `Please wait in the lobby.`);
      try {
        const date = event.date || event.event_start * 1e3 || event.booking_start * 1e3 || startOfMinute(Date.now());
        updated_template = updated_template.replace(/{{ date }}/g, this._date.transform(date, "mediumDate")).replace(/{{ time }}/g, this._date.transform(date, this.time_format));
      } catch {
      }
      return updated_template;
    }), startWith(DEFAULT_TEMPLATE));
    this.print = () => {
      this.printing.set(true);
      this.qr_code = generateQRCode(this.e?.asset_id);
      this.timeout("print", () => window.print());
    };
  }
  get time_format() {
    return this._settings.time_format;
  }
  get now() {
    return startOfMinute(roundToNearestMinutes(Date.now(), { nearestTo: 5 }));
  }
  get logo() {
    return this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light");
  }
  get allow_printing_label() {
    return this._settings.get("app.allow_printing_label") !== false;
  }
  async ngOnInit() {
    const event = await firstValueFrom(this.event.pipe(first()));
    !event ? this.previous() : "";
    if (!event)
      return;
    this.date = event.date || event.booking_start * 1e3;
    this.zones = event.zones;
    this.e = event;
    const standalone_location = this._settings.get("app.standalone_visitor_location");
    this.allow_beverages.set(this._settings.get("app.allow_beverages") && (event.linked_event || standalone_location));
  }
  previous() {
    this._router.navigate(["/checkin"]);
  }
  done() {
    this._router.navigate(["/welcome"]);
  }
  async next() {
    const event = await nextValueFrom(this.event);
    const standalone_location = this._settings.get("app.standalone_visitor_location");
    this._settings.get("app.allow_beverages") && (event.linked_event || standalone_location) ? this._router.navigate(["/checkin", "preferences"]) : this._router.navigate(["/welcome"]);
  }
};
_CheckinResultsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CheckinResultsComponent_BaseFactory;
  return function CheckinResultsComponent_Factory(__ngFactoryType__) {
    return (\u0275CheckinResultsComponent_BaseFactory || (\u0275CheckinResultsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CheckinResultsComponent)))(__ngFactoryType__ || _CheckinResultsComponent);
  };
})();
_CheckinResultsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinResultsComponent, selectors: [["checkin-results"]], standalone: false, features: [\u0275\u0275ProvidersFeature([DatePipe]), \u0275\u0275InheritDefinitionFeature], decls: 2, vars: 3, consts: [[1, "relative", "flex", "w-[36rem]", "flex-col", "items-center", "space-y-4", "overflow-hidden", "rounded", "bg-base-100", "p-4", "shadow", "print:hidden"], [1, "text-xl"], [1, "", 3, "innerHTML"], ["printable", "", 1, "print-only"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "w-32"], ["btn", "", "matRipple", "", 1, "inverse", "w-32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "!text-base", 3, "user"], ["btn", "", "matRipple", "", 1, "inverse", "w-32", 3, "click"]], template: function CheckinResultsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CheckinResultsComponent_Conditional_0_Template, 18, 20, "div", 0);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx.event) ? 0 : -1);
  }
}, dependencies: [MatRipple, PrintableComponent, UserLabelComponent, AsyncPipe, TranslatePipe, SanitizePipe], styles: ["\n\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-result.component.css.map */"] });
var CheckinResultsComponent = _CheckinResultsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinResultsComponent, [{
    type: Component,
    args: [{ selector: "checkin-results", template: `
        @if (event | async) {
            <div
                class="relative flex w-[36rem] flex-col items-center space-y-4 overflow-hidden rounded bg-base-100 p-4 shadow print:hidden"
            >
                @let details = event | async;
                <h3 class="text-xl">
                    {{
                        (details.extension_data?.self_registered
                            ? 'APP.VISITOR_KIOSK.CHECKED_IN_MSG_SELF_REG'
                            : 'APP.VISITOR_KIOSK.CHECKED_IN_MSG'
                        ) | translate
                    }}
                </h3>
                <div
                    class=""
                    [innerHTML]="result_template | async | sanitize: 'html'"
                ></div>
                @let ev = event | async;
                @if (printing()) {
                    <div printable class="print-only">
                        <user-label
                            [user]="{
                                name: ev?.asset_name || ev?.description,
                                email: ev?.asset_id,
                                photo: photo | async,
                                title: ev?.title,
                                host: ev?.user_name || ev.user_email,
                                zones: ev?.zones,
                                date: ev?.date || date,
                                extra_details:
                                    ev?.extension_data?.extra_details,
                                pass_number: ev?.extension_data?.pass_number,
                                qr_code: qr_code,
                            }"
                            class="!text-base"
                        />
                    </div>
                }
                <div class="flex items-center space-x-2">
                    @if (allow_printing_label) {
                        <button btn matRipple class="w-32" (click)="print()">
                            {{ 'APP.VISITOR_KIOSK.PRINT_LABEL' | translate }}
                        </button>
                    }
                    @if (allow_beverages()) {
                        <button
                            btn
                            matRipple
                            class="inverse w-32"
                            (click)="next()"
                        >
                            {{ 'APP.VISITOR_KIOSK.BEVERAGES' | translate }}
                        </button>
                    }
                    <button btn matRipple class="w-32" (click)="done()">
                        {{ 'APP.VISITOR_KIOSK.CONFIRM' | translate }}
                    </button>
                </div>
            </div>
        }
    `, providers: [DatePipe], standalone: false, styles: ["/* angular:styles/component:css;45a1e70cbb4b993091add757337674b51f7e2cd5d8c6d8ffd9f9f0736356a592;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin-result.component.ts */\n:host > div {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-result.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinResultsComponent, { className: "CheckinResultsComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-result.component.ts", lineNumber: 94 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin.component.ts
var _c011 = ["app-checkin", ""];
var _CheckinComponent = class _CheckinComponent {
  constructor() {
    this._settings = inject(SettingsService);
  }
  get now() {
    return startOfMinute(/* @__PURE__ */ new Date());
  }
  get background() {
    return this._settings.get("app.welcome_background");
  }
};
_CheckinComponent.\u0275fac = function CheckinComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinComponent)();
};
_CheckinComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinComponent, selectors: [["", "app-checkin", ""]], standalone: false, attrs: _c011, decls: 8, vars: 10, consts: [[1, "absolute", "inset-0", "flex", "items-center", "p-8", "print:hidden"], [1, "z-10", "flex", "w-full", "flex-col", "justify-center", "space-y-8"], [1, "absolute", "right-4", "top-4", "text-2xl", "text-white"], ["src", "assets/img/building.png", 1, "absolute", "bottom-0", "right-0", "w-[60%]"]], template: function CheckinComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "img", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("background-image", "url(" + ctx.background + ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(5, 4, ctx.now, "mediumDate"), " ", \u0275\u0275pipeBind2(6, 7, ctx.now, "shortTime"), " ");
  }
}, dependencies: [RouterOutlet, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=checkin.component.css.map */"] });
var CheckinComponent = _CheckinComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinComponent, [{
    type: Component,
    args: [{ selector: "[app-checkin]", template: `
        <!-- <a-topbar-header class="w-full screen-only"></a-topbar-header> -->
        <div
            class="absolute inset-0 flex items-center p-8 print:hidden"
            [style.background-image]="'url(' + background + ')'"
        >
            <div class="z-10 flex w-full flex-col justify-center space-y-8">
                <router-outlet></router-outlet>
            </div>
            <div class="absolute right-4 top-4 text-2xl text-white">
                {{ now | date: 'mediumDate' }} {{ now | date: 'shortTime' }}
            </div>
            <img
                src="assets/img/building.png"
                class="absolute bottom-0 right-0 w-[60%]"
            />
        </div>
    `, standalone: false, styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=checkin.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinComponent, { className: "CheckinComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin.component.ts", lineNumber: 37 });
})();

// apps/visitor-kiosk/src/app/checkin/checkout.component.ts
var _c012 = () => ["/welcome"];
function CheckoutComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
    \u0275\u0275listener("click", function CheckoutComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkout());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "a", 6)(12, "icon");
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "APP.VISITOR_KIOSK.CHECKOUT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "APP.VISITOR_KIOSK.CHECKOUT_MSG"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, "COMMON.CHECK_OUT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c012));
  }
}
function CheckoutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.VISITOR_KIOSK.CHECKOUT_LOADING"), " ");
  }
}
var _CheckoutComponent = class _CheckoutComponent {
  constructor() {
    this._state = inject(CheckinStateService);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this.loading = false;
  }
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    const event = await this._state.event.pipe(first()).toPromise();
    if (!event)
      this._router.navigate(["/checkin"]);
  }
  async checkout() {
    this.loading = true;
    const result = await this._state.checkinGuest(false).then(() => true).catch(() => false);
    this.loading = false;
    if (!result)
      return;
    this._router.navigate(["/welcome"]);
    notifySuccess(i18n("APP.VISITOR_KIOSK.CHECKOUT_SUCCESS"));
  }
};
_CheckoutComponent.\u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckoutComponent)();
};
_CheckoutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], standalone: false, decls: 2, vars: 1, consts: [[1, "relative", "flex", "w-[28rem]", "flex-col", "items-center", "overflow-hidden", "rounded", "bg-base-100", "p-4", "shadow"], [1, "relative", "flex", "h-[20rem]", "w-[28rem]", "flex-col", "items-center", "justify-center", "space-y-2", "overflow-hidden", "rounded", "bg-base-100", "p-8", "shadow"], [1, "mb-2", "w-full", "text-xl"], [1, "mb-4", "mt-2", "w-full"], [1, "flex", "w-full", "items-center", "justify-end"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "right-2", "top-2", 3, "routerLink"], [3, "diameter"]], template: function CheckoutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CheckoutComponent_Conditional_0_Template, 14, 11, "div", 0)(1, CheckoutComponent_Conditional_1_Template, 5, 4, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.loading ? 0 : 1);
  }
}, dependencies: [RouterLink, MatProgressSpinner, MatRipple, IconComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
var CheckoutComponent = _CheckoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponent, [{
    type: Component,
    args: [{ selector: "app-checkout", template: `
        @if (!loading) {
            <div
                class="relative flex w-[28rem] flex-col items-center overflow-hidden rounded bg-base-100 p-4 shadow"
            >
                <h3 class="mb-2 w-full text-xl">
                    {{ 'APP.VISITOR_KIOSK.CHECKOUT' | translate }}
                </h3>
                <div class="mb-4 mt-2 w-full">
                    {{ 'APP.VISITOR_KIOSK.CHECKOUT_MSG' | translate }}
                </div>
                <div class="flex w-full items-center justify-end">
                    <button btn matRipple class="w-32" (click)="checkout()">
                        {{ 'COMMON.CHECK_OUT' | translate }}
                    </button>
                </div>
                <a
                    icon
                    matRipple
                    class="absolute right-2 top-2"
                    [routerLink]="['/welcome']"
                >
                    <icon>close</icon>
                </a>
            </div>
        } @else {
            <div
                class="relative flex h-[20rem] w-[28rem] flex-col items-center justify-center space-y-2 overflow-hidden rounded bg-base-100 p-8 shadow"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <div>
                    {{ 'APP.VISITOR_KIOSK.CHECKOUT_LOADING' | translate }}
                </div>
            </div>
        }
    `, standalone: false, styles: ["/* angular:styles/component:css;45a1e70cbb4b993091add757337674b51f7e2cd5d8c6d8ffd9f9f0736356a592;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkout.component.ts */\n:host > div {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkout.component.ts", lineNumber: 55 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin.module.ts
var ROUTES = [
  {
    path: "",
    component: CheckinComponent,
    children: [
      { path: "scan", component: CheckinQRScanComponent },
      { path: "details", component: CheckinDetailsComponent },
      { path: "preferences", component: CheckinPreferencesComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "photo", component: CheckinPhotoComponent },
      { path: "results", component: CheckinResultsComponent },
      { path: "error", component: CheckinErrorComponent },
      { path: "covid", component: CheckinCovidComponent },
      { path: "induction", component: CheckinInductionComponent },
      { path: "**", redirectTo: "scan" }
    ]
  },
  { path: "**", redirectTo: "" }
];
var MAT_MODULES = [
  MatProgressSpinnerModule,
  MatRippleModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule,
  MatCheckboxModule
];
var STANDALONE_COMPONENTS = [
  IconComponent,
  TranslatePipe,
  LevelPipe,
  UserAvatarComponent,
  PrintableComponent,
  SanitizePipe,
  UserLabelComponent
];
var _VisitorCheckinModule = class _VisitorCheckinModule {
};
_VisitorCheckinModule.\u0275fac = function VisitorCheckinModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorCheckinModule)();
};
_VisitorCheckinModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VisitorCheckinModule });
_VisitorCheckinModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forChild(ROUTES),
  MAT_MODULES,
  PrintableComponent,
  UserLabelComponent
] });
var VisitorCheckinModule = _VisitorCheckinModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorCheckinModule, [{
    type: NgModule,
    args: [{
      declarations: [
        CheckinComponent,
        CheckinResultsComponent,
        CheckinQRScanComponent,
        CheckinPreferencesComponent,
        CheckinPhotoComponent,
        CheckinDetailsComponent,
        CheckinErrorComponent,
        CheckinCovidComponent,
        CheckinInductionComponent,
        CheckoutComponent,
        TakePhotoComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        ...MAT_MODULES,
        ...STANDALONE_COMPONENTS
      ]
    }]
  }], null, null);
})();
export {
  VisitorCheckinModule
};
//# sourceMappingURL=checkin.module-EL2AT4Y7.js.map
