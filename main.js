import {
  $s,
  ANIMATION_MODULE_TYPE,
  APP_INITIALIZER,
  AUTO_STYLE,
  ActivatedRoute,
  AnimationGroupPlayer,
  AnimationMetadataType,
  ApplicationRef,
  AsyncHandler,
  AuthorisedUserGuard,
  BasePortalOutlet,
  BreakpointObserver,
  Breakpoints,
  BrowserModule,
  COMMA,
  CdkPortalOutlet,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ChatComponent,
  Clipboard,
  Component,
  ComponentPortal,
  DOCUMENT,
  Directive,
  DomRendererFactory2,
  ENTER,
  ElementRef,
  ErrorHandler,
  Et,
  GlobalBannerComponent,
  GlobalLoadingComponent,
  GoogleAnalyticsService,
  HotkeysService,
  HttpErrorResponse,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  Jt,
  LOCALE_ID,
  LiveAnnouncer,
  LocaleService,
  MAT_CHIPS_DEFAULT_OPTIONS,
  MapsPeopleService,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  Mt,
  NEVER,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Ne,
  NgIf,
  NgModule,
  NgZone,
  Nn,
  NoopAnimationPlayer,
  OrganisationService,
  Overlay,
  OverlayConfig,
  OverlayModule,
  Platform,
  PortalModule,
  Qt,
  RedirectComponent,
  RendererFactory2,
  ResolveEnd,
  Router,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  SettingsService,
  Subject,
  Subscription,
  TemplatePortal,
  TemplateRef,
  UIModule,
  UnauthorisedComponent,
  VERSION,
  ViewChild,
  ViewEncapsulation,
  Xo,
  Xt,
  Y,
  Yt,
  _IdGenerator,
  __async,
  __export,
  __objRest,
  __spreadProps,
  __spreadValues,
  addDays,
  addHours,
  addMinutes,
  addSeconds,
  afterRender,
  capitalizeFirstLetter,
  concat,
  currentUser,
  current_user,
  defer,
  delay,
  differenceInMinutes,
  enableProdMode,
  filter,
  first,
  flatten,
  from,
  fromEvent,
  generateMockSpace,
  getUnixTime,
  gs,
  hasNewVersion,
  hn,
  inject,
  isBefore,
  isMobileSafari,
  ka,
  lastValueFrom,
  ln,
  log,
  makeEnvironmentProviders,
  map,
  merge,
  no,
  notifySuccess,
  of,
  padString,
  platformBrowser,
  pr,
  predictableRandomInt,
  provideHttpClient,
  publish,
  randomInt,
  randomString,
  registerLocaleData,
  requestScreenWakeLock,
  rn,
  sequence,
  set,
  setAppName,
  setClassMetadata,
  setHours,
  setInternalUserDomain,
  setNotifyOutlet,
  setTranslationService,
  setupCache,
  setupPlace,
  startOfDay,
  style,
  subDays,
  subMinutes,
  switchMap,
  take,
  takeUntil,
  tap,
  throwError,
  timePeriodsIntersect,
  unique,
  withInterceptorsFromDi,
  ɵPRE_STYLE,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-QRLSRTMX.js";

// node_modules/@angular/animations/fesm2022/browser.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e2, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e2.element, e2.triggerName, e2.fromState, e2.toState, phaseName || e2.phaseName, totalTime == void 0 ? e2.totalTime : totalTime, disabled);
  const data = e2["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map2, key, defaultValue) {
  let value = map2.get(key);
  if (!value) {
    map2.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes, duration, delay2, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay2);
  }
  static \u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationDriver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoopAnimationDriver,
    factory: _NoopAnimationDriver.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  /**
   * @deprecated Use the NoopAnimationDriver class.
   */
  static NOOP = new NoopAnimationDriver();
};
var AnimationStyleNormalizer = class {
};
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number") return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2) return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay2 = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ""
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay2 = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay2 < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay: delay2,
    easing
  };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1) return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = /* @__PURE__ */ new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay2) {
  return duration === 0 || delay2 === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = /* @__PURE__ */ new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  _driver;
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n2) => {
          stateDef.name = n2;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = /* @__PURE__ */ new Map();
  options = null;
  unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  constructor(errors) {
    this.errors = errors;
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay2, easing) {
  return {
    duration,
    delay: delay2,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay2, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay: delay2,
    totalTime: duration + delay2,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  _map = /* @__PURE__ */ new Map();
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = /* @__PURE__ */ new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = /* @__PURE__ */ new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay2 = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay2);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay2, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay2 = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay2);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay2 = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay2);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay2 = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay2) {
        innerContext.delayNextStep(delay2);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay2 = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay2 && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay2) {
        innerContext.delayNextStep(delay2);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay2 = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay2 = maxTime - delay2;
        break;
      case "full":
        delay2 = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay2) {
      timeline.delayNextStep(delay2);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  _driver;
  element;
  subInstructions;
  _enterClassName;
  _leaveClassName;
  errors;
  timelines;
  parentContext = null;
  currentTimeline;
  currentAnimateTimings = null;
  previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
  subContextCount = 0;
  options = {};
  currentQueryIndex = 0;
  currentQueryTotal = 0;
  currentStaggerTime = 0;
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay2) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay2 != null ? delay2 : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay2) {
    if (delay2 > 0) {
      this.currentTimeline.delayNextStep(delay2);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  _driver;
  element;
  startTime;
  _elementTimelineStylesLookup;
  duration = 0;
  easing = null;
  _previousKeyframe = /* @__PURE__ */ new Map();
  _currentKeyframe = /* @__PURE__ */ new Map();
  _keyframes = /* @__PURE__ */ new Map();
  _styleSummary = /* @__PURE__ */ new Map();
  _localTimelineStyles = /* @__PURE__ */ new Map();
  _globalTimelineStyles;
  _pendingStyles = /* @__PURE__ */ new Map();
  _backFill = /* @__PURE__ */ new Map();
  _currentEmptyStepKeyframe = null;
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay2) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay2);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay2;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  keyframes;
  preStyleProps;
  postStyleProps;
  _stretchStartingKeyframe;
  timings;
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay: delay2,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay2) {
      const newKeyframes = [];
      const totalTime = duration + delay2;
      const startingGap = delay2 / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay2 + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay2 = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay2, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  _triggerName;
  ast;
  _stateStyles;
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  styles;
  defaultParams;
  normalizer;
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = /* @__PURE__ */ new Map();
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states, this._normalizer);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = new ElementInstructionMap();
var TimelineAnimationEngine = class {
  bodyNode;
  _driver;
  _normalizer;
  _animations = /* @__PURE__ */ new Map();
  _playersById = /* @__PURE__ */ new Map();
  players = [];
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnRegister(warnings);
        }
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  namespaceId;
  value;
  options;
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  id;
  hostElement;
  _engine;
  players = [];
  _triggers = /* @__PURE__ */ new Map();
  _queue = [];
  _elementListeners = /* @__PURE__ */ new Map();
  _hostClassName;
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback) return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  bodyNode;
  driver;
  _normalizer;
  players = [];
  newHostElements = /* @__PURE__ */ new Map();
  playersByElement = /* @__PURE__ */ new Map();
  playersByQueriedElement = /* @__PURE__ */ new Map();
  statesByElement = /* @__PURE__ */ new Map();
  disabledNodes = /* @__PURE__ */ new Set();
  totalAnimations = 0;
  totalQueuedPlayers = 0;
  _namespaceLookup = {};
  _namespaceList = [];
  _flushFns = [];
  _whenQuietFns = [];
  namespacesByHostElement = /* @__PURE__ */ new Map();
  collectedEnterElements = [];
  collectedLeaveElements = [];
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  namespaceId;
  triggerName;
  element;
  _player = new NoopAnimationPlayer();
  _containsRealPlayer = false;
  _queuedCallbacks = /* @__PURE__ */ new Map();
  destroyed = false;
  parentPlayer = null;
  markedForDestroy = false;
  disabled = false;
  queued = true;
  totalTime = 0;
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map2, key, value) {
  let currentValues = map2.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map2.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnTriggerBuild(name, warnings);
        }
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  _element;
  _startStyles;
  _endStyles;
  static initialStylesByElement = /* @__PURE__ */ new WeakMap();
  _state = 0;
  _initialStyles;
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  element;
  keyframes;
  options;
  _specialStyles;
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _duration;
  _delay;
  _initialized = false;
  _finished = false;
  _started = false;
  _destroyed = false;
  _finalKeyframe;
  // the following original fns are persistent copies of the _onStartFns and _onDoneFns
  // and are used to reset the fns to their original values upon reset()
  // (since the _onStartFns and _onDoneFns get deleted after they are called)
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  // using non-null assertion because it's re(set) by init();
  domPlayer;
  time = 0;
  parentPlayer = null;
  currentSnapshot = /* @__PURE__ */ new Map();
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return;
    this._initialized = true;
    const keyframes = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    this.domPlayer.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      this.domPlayer.removeEventListener("finish", onFinish);
    });
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes, options) {
    return element.animate(this._convertKeyframesToObject(keyframes), options);
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (this.domPlayer === void 0) {
      this.init();
    }
    this.domPlayer.currentTime = p * this.time;
  }
  getPosition() {
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay2, easing, previousPlayers = []) {
    const fill2 = delay2 == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay: delay2,
      fill: fill2
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay2)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  namespaceId;
  delegate;
  engine;
  _onDestroy;
  // We need to explicitly type this property because of an api-extractor bug
  // See https://github.com/microsoft/rushstack/issues/4390
  \u0275type = 0;
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    return this.delegate.listen(target, eventName, callback, options);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  factory;
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback, options) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var AnimationRendererFactory = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = /* @__PURE__ */ new Map();
  _cdRecurDepth = 0;
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this.engine.flush();
    this.delegate.componentReplaced?.(componentId);
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [
  // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
  {
    provide: AnimationDriver,
    useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
  },
  {
    provide: ANIMATION_MODULE_TYPE,
    useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
  },
  ...SHARED_ANIMATION_PROVIDERS
];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```ts
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NoopAnimationsModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
function errorObservable(message) {
  return defer(() => throwError(new Error(message)));
}
var NgswCommChannel = class {
  serviceWorker;
  worker;
  registration;
  events;
  constructor(serviceWorker) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = errorObservable(ERR_SW_NOT_SUPPORTED);
    } else {
      const controllerChangeEvents = fromEvent(serviceWorker, "controllerchange");
      const controllerChanges = controllerChangeEvents.pipe(map(() => serviceWorker.controller));
      const currentController = defer(() => of(serviceWorker.controller));
      const controllerWithChanges = concat(currentController, controllerChanges);
      this.worker = controllerWithChanges.pipe(filter((c) => !!c));
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration()));
      const rawEvents = fromEvent(serviceWorker, "message");
      const rawEventPayload = rawEvents.pipe(map((event) => event.data));
      const eventsUnconnected = rawEventPayload.pipe(filter((event) => event && event.type));
      const events = eventsUnconnected.pipe(publish());
      events.connect();
      this.events = events;
    }
  }
  postMessage(action, payload) {
    return this.worker.pipe(take(1), tap((sw) => {
      sw.postMessage(__spreadValues({
        action
      }, payload));
    })).toPromise().then(() => void 0);
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn2;
    if (typeof type === "string") {
      filterFn2 = (event) => event.type === type;
    } else {
      filterFn2 = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn2));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
      if (event.result !== void 0) {
        return event.result;
      }
      throw new Error(event.error);
    })).toPromise();
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var SwPush = class _SwPush {
  sw;
  /**
   * Emits the payloads of the received push notification messages.
   */
  messages;
  /**
   * Emits the payloads of the received push notification messages as well as the action the user
   * interacted with. If no action was used the `action` property contains an empty string `''`.
   *
   * Note that the `notification` property does **not** contain a
   * [Notification][Mozilla Notification] object but rather a
   * [NotificationOptions](https://notifications.spec.whatwg.org/#dictdef-notificationoptions)
   * object that also includes the `title` of the [Notification][Mozilla Notification] object.
   *
   * [Mozilla Notification]: https://developer.mozilla.org/en-US/docs/Web/API/Notification
   */
  notificationClicks;
  /**
   * Emits the currently active
   * [PushSubscription](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription)
   * associated to the Service Worker registration or `null` if there is no subscription.
   */
  subscription;
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  pushManager = null;
  subscriptionChanges = new Subject();
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.messages = NEVER;
      this.notificationClicks = NEVER;
      this.subscription = NEVER;
      return;
    }
    this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
    this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
    this.subscription = merge(workerDrivenSubscriptions, this.subscriptionChanges);
  }
  /**
   * Subscribes to Web Push Notifications,
   * after requesting and receiving user permission.
   *
   * @param options An object containing the `serverPublicKey` string.
   * @returns A Promise that resolves to the new subscription object.
   */
  requestSubscription(options) {
    if (!this.sw.isEnabled || this.pushManager === null) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }
    pushOptions.applicationServerKey = applicationServerKey;
    return this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).toPromise().then((sub) => {
      this.subscriptionChanges.next(sub);
      return sub;
    });
  }
  /**
   * Unsubscribes from Service Worker push notifications.
   *
   * @returns A Promise that is resolved when the operation succeeds, or is rejected if there is no
   *          active subscription or the unsubscribe operation fails.
   */
  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const doUnsubscribe = (sub) => {
      if (sub === null) {
        throw new Error("Not subscribed to push notifications.");
      }
      return sub.unsubscribe().then((success) => {
        if (!success) {
          throw new Error("Unsubscribe failed!");
        }
        this.subscriptionChanges.next(null);
      });
    };
    return this.subscription.pipe(take(1), switchMap(doUnsubscribe)).toPromise();
  }
  decodeBase64(input) {
    return atob(input);
  }
  static \u0275fac = function SwPush_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwPush)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwPush,
    factory: _SwPush.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SwUpdate = class _SwUpdate {
  sw;
  /**
   * Emits a `VersionDetectedEvent` event whenever a new version is detected on the server.
   *
   * Emits a `VersionInstallationFailedEvent` event whenever checking for or downloading a new
   * version fails.
   *
   * Emits a `VersionReadyEvent` event whenever a new version has been downloaded and is ready for
   * activation.
   */
  versionUpdates;
  /**
   * Emits an `UnrecoverableStateEvent` event whenever the version of the app used by the service
   * worker to serve this client is in a broken state that cannot be recovered from without a full
   * page reload.
   */
  unrecoverable;
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.versionUpdates = NEVER;
      this.unrecoverable = NEVER;
      return;
    }
    this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
  }
  /**
   * Checks for an update and waits until the new version is downloaded from the server and ready
   * for activation.
   *
   * @returns a promise that
   * - resolves to `true` if a new version was found and is ready to be activated.
   * - resolves to `false` if no new version was found
   * - rejects if any error occurs
   */
  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
      nonce
    }, nonce);
  }
  /**
   * Updates the current client (i.e. browser tab) to the latest version that is ready for
   * activation.
   *
   * In most cases, you should not use this method and instead should update a client by reloading
   * the page.
   *
   * <div class="docs-alert docs-alert-important">
   *
   * Updating a client without reloading can easily result in a broken application due to a version
   * mismatch between the application shell and other page resources,
   * such as lazy-loaded chunks, whose filenames may change between
   * versions.
   *
   * Only use this method, if you are certain it is safe for your specific use case.
   *
   * </div>
   *
   * @returns a promise that
   *  - resolves to `true` if an update was activated successfully
   *  - resolves to `false` if no update was available (for example, the client was already on the
   *    latest version).
   *  - rejects if any error occurs
   */
  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
      nonce
    }, nonce);
  }
  static \u0275fac = function SwUpdate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwUpdate,
    factory: _SwUpdate.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SCRIPT = new InjectionToken(ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer(injector, script, options) {
  return () => {
    if (false) {
      return;
    }
    if (!("serviceWorker" in navigator && options.enabled !== false)) {
      return;
    }
    const ngZone = injector.get(NgZone);
    const appRef = injector.get(ApplicationRef);
    ngZone.runOutsideAngular(() => {
      const sw = navigator.serviceWorker;
      const onControllerChange = () => sw.controller?.postMessage({
        action: "INITIALIZE"
      });
      sw.addEventListener("controllerchange", onControllerChange);
      appRef.onDestroy(() => {
        sw.removeEventListener("controllerchange", onControllerChange);
      });
    });
    let readyToRegister$;
    if (typeof options.registrationStrategy === "function") {
      readyToRegister$ = options.registrationStrategy();
    } else {
      const [strategy, ...args] = (options.registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister$ = of(null);
          break;
        case "registerWithDelay":
          readyToRegister$ = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          const whenStable$ = from(injector.get(ApplicationRef).whenStable());
          readyToRegister$ = !args[0] ? whenStable$ : merge(whenStable$, delayWithTimeout(+args[0]));
          break;
        default:
          throw new Error(`Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    ngZone.runOutsideAngular(() => readyToRegister$.pipe(take(1)).subscribe(() => navigator.serviceWorker.register(script, {
      scope: options.scope
    }).catch((err) => console.error("Service worker registration failed with:", err))));
  };
}
function delayWithTimeout(timeout) {
  return of(null).pipe(delay(timeout));
}
function ngswCommChannelFactory(opts) {
  const isBrowser2 = true;
  return new NgswCommChannel(isBrowser2 && opts.enabled !== false ? navigator.serviceWorker : void 0);
}
var SwRegistrationOptions = class {
  /**
   * Whether the ServiceWorker will be registered and the related services (such as `SwPush` and
   * `SwUpdate`) will attempt to communicate and interact with it.
   *
   * Default: true
   */
  enabled;
  /**
   * A URL that defines the ServiceWorker's registration scope; that is, what range of URLs it can
   * control. It will be used when calling
   * [ServiceWorkerContainer#register()](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register).
   */
  scope;
  /**
   * Defines the ServiceWorker registration strategy, which determines when it will be registered
   * with the browser.
   *
   * The default behavior of registering once the application stabilizes (i.e. as soon as there are
   * no pending micro- and macro-tasks) is designed to register the ServiceWorker as soon as
   * possible but without affecting the application's first time load.
   *
   * Still, there might be cases where you want more control over when the ServiceWorker is
   * registered (for example, there might be a long-running timeout or polling interval, preventing
   * the app from stabilizing). The available option are:
   *
   * - `registerWhenStable:<timeout>`: Register as soon as the application stabilizes (no pending
   *     micro-/macro-tasks) but no later than `<timeout>` milliseconds. If the app hasn't
   *     stabilized after `<timeout>` milliseconds (for example, due to a recurrent asynchronous
   *     task), the ServiceWorker will be registered anyway.
   *     If `<timeout>` is omitted, the ServiceWorker will only be registered once the app
   *     stabilizes.
   * - `registerImmediately`: Register immediately.
   * - `registerWithDelay:<timeout>`: Register with a delay of `<timeout>` milliseconds. For
   *     example, use `registerWithDelay:5000` to register the ServiceWorker after 5 seconds. If
   *     `<timeout>` is omitted, is defaults to `0`, which will register the ServiceWorker as soon
   *     as possible but still asynchronously, once all pending micro-tasks are completed.
   * - An Observable factory function: A function that returns an `Observable`.
   *     The function will be used at runtime to obtain and subscribe to the `Observable` and the
   *     ServiceWorker will be registered as soon as the first value is emitted.
   *
   * Default: 'registerWhenStable:30000'
   */
  registrationStrategy;
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory,
    deps: [SwRegistrationOptions]
  }, {
    provide: APP_INITIALIZER,
    useFactory: ngswAppInitializer,
    deps: [Injector, SCRIPT, SwRegistrationOptions],
    multi: true
  }]);
}
var ServiceWorkerModule = class _ServiceWorkerModule {
  /**
   * Register the given Angular Service Worker script.
   *
   * If `enabled` is set to `false` in the given options, the module will behave as if service
   * workers are not supported by the browser, and the service worker will not be registered.
   */
  static register(script, options = {}) {
    return {
      ngModule: _ServiceWorkerModule,
      providers: [provideServiceWorker(script, options)]
    };
  }
  static \u0275fac = function ServiceWorkerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceWorkerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ServiceWorkerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [SwPush, SwUpdate]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
    type: NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/snack-bar.mjs
function SimpleSnackBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
    \u0275\u0275listener("click", function SimpleSnackBar_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.action());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.action, " ");
  }
}
var _c0 = ["label"];
function MatSnackBarContainer_ng_template_4_Template(rf, ctx) {
}
var MAX_TIMEOUT = Math.pow(2, 31) - 1;
var MatSnackBarRef = class {
  _overlayRef;
  /** The instance of the component making up the content of the snack bar. */
  instance;
  /**
   * The instance of the component making up the content of the snack bar.
   * @docs-private
   */
  containerInstance;
  /** Subject for notifying the user that the snack bar has been dismissed. */
  _afterDismissed = new Subject();
  /** Subject for notifying the user that the snack bar has opened and appeared. */
  _afterOpened = new Subject();
  /** Subject for notifying the user that the snack bar action was called. */
  _onAction = new Subject();
  /**
   * Timeout ID for the duration setTimeout call. Used to clear the timeout if the snackbar is
   * dismissed before the duration passes.
   */
  _durationTimeoutId;
  /** Whether the snack bar was dismissed using the action button. */
  _dismissedByAction = false;
  constructor(containerInstance, _overlayRef) {
    this._overlayRef = _overlayRef;
    this.containerInstance = containerInstance;
    containerInstance._onExit.subscribe(() => this._finishDismiss());
  }
  /** Dismisses the snack bar. */
  dismiss() {
    if (!this._afterDismissed.closed) {
      this.containerInstance.exit();
    }
    clearTimeout(this._durationTimeoutId);
  }
  /** Marks the snackbar action clicked. */
  dismissWithAction() {
    if (!this._onAction.closed) {
      this._dismissedByAction = true;
      this._onAction.next();
      this._onAction.complete();
      this.dismiss();
    }
    clearTimeout(this._durationTimeoutId);
  }
  /**
   * Marks the snackbar action clicked.
   * @deprecated Use `dismissWithAction` instead.
   * @breaking-change 8.0.0
   */
  closeWithAction() {
    this.dismissWithAction();
  }
  /** Dismisses the snack bar after some duration */
  _dismissAfter(duration) {
    this._durationTimeoutId = setTimeout(() => this.dismiss(), Math.min(duration, MAX_TIMEOUT));
  }
  /** Marks the snackbar as opened */
  _open() {
    if (!this._afterOpened.closed) {
      this._afterOpened.next();
      this._afterOpened.complete();
    }
  }
  /** Cleans up the DOM after closing. */
  _finishDismiss() {
    this._overlayRef.dispose();
    if (!this._onAction.closed) {
      this._onAction.complete();
    }
    this._afterDismissed.next({
      dismissedByAction: this._dismissedByAction
    });
    this._afterDismissed.complete();
    this._dismissedByAction = false;
  }
  /** Gets an observable that is notified when the snack bar is finished closing. */
  afterDismissed() {
    return this._afterDismissed;
  }
  /** Gets an observable that is notified when the snack bar has opened and appeared. */
  afterOpened() {
    return this.containerInstance._onEnter;
  }
  /** Gets an observable that is notified when the snack bar action is called. */
  onAction() {
    return this._onAction;
  }
};
var MAT_SNACK_BAR_DATA = new InjectionToken("MatSnackBarData");
var MatSnackBarConfig = class {
  /** The politeness level for the MatAriaLiveAnnouncer announcement. */
  politeness = "assertive";
  /**
   * Message to be announced by the LiveAnnouncer. When opening a snackbar without a custom
   * component or template, the announcement message will default to the specified message.
   */
  announcementMessage = "";
  /**
   * The view container that serves as the parent for the snackbar for the purposes of dependency
   * injection. Note: this does not affect where the snackbar is inserted in the DOM.
   */
  viewContainerRef;
  /** The length of time in milliseconds to wait before automatically dismissing the snack bar. */
  duration = 0;
  /** Extra CSS classes to be added to the snack bar container. */
  panelClass;
  /** Text layout direction for the snack bar. */
  direction;
  /** Data being injected into the child component. */
  data = null;
  /** The horizontal position to place the snack bar. */
  horizontalPosition = "center";
  /** The vertical position to place the snack bar. */
  verticalPosition = "bottom";
};
var MatSnackBarLabel = class _MatSnackBarLabel {
  static \u0275fac = function MatSnackBarLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBarLabel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSnackBarLabel,
    selectors: [["", "matSnackBarLabel", ""]],
    hostAttrs: [1, "mat-mdc-snack-bar-label", "mdc-snackbar__label"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarLabel, [{
    type: Directive,
    args: [{
      selector: `[matSnackBarLabel]`,
      host: {
        "class": "mat-mdc-snack-bar-label mdc-snackbar__label"
      }
    }]
  }], null, null);
})();
var MatSnackBarActions = class _MatSnackBarActions {
  static \u0275fac = function MatSnackBarActions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBarActions)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSnackBarActions,
    selectors: [["", "matSnackBarActions", ""]],
    hostAttrs: [1, "mat-mdc-snack-bar-actions", "mdc-snackbar__actions"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarActions, [{
    type: Directive,
    args: [{
      selector: `[matSnackBarActions]`,
      host: {
        "class": "mat-mdc-snack-bar-actions mdc-snackbar__actions"
      }
    }]
  }], null, null);
})();
var MatSnackBarAction = class _MatSnackBarAction {
  static \u0275fac = function MatSnackBarAction_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBarAction)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSnackBarAction,
    selectors: [["", "matSnackBarAction", ""]],
    hostAttrs: [1, "mat-mdc-snack-bar-action", "mdc-snackbar__action"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarAction, [{
    type: Directive,
    args: [{
      selector: `[matSnackBarAction]`,
      host: {
        "class": "mat-mdc-snack-bar-action mdc-snackbar__action"
      }
    }]
  }], null, null);
})();
var SimpleSnackBar = class _SimpleSnackBar {
  snackBarRef = inject(MatSnackBarRef);
  data = inject(MAT_SNACK_BAR_DATA);
  constructor() {
  }
  /** Performs the action on the snack bar. */
  action() {
    this.snackBarRef.dismissWithAction();
  }
  /** If the action button should be shown. */
  get hasAction() {
    return !!this.data.action;
  }
  static \u0275fac = function SimpleSnackBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SimpleSnackBar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SimpleSnackBar,
    selectors: [["simple-snack-bar"]],
    hostAttrs: [1, "mat-mdc-simple-snack-bar"],
    exportAs: ["matSnackBar"],
    decls: 3,
    vars: 2,
    consts: [["matSnackBarLabel", ""], ["matSnackBarActions", ""], ["mat-button", "", "matSnackBarAction", "", 3, "click"]],
    template: function SimpleSnackBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, SimpleSnackBar_Conditional_2_Template, 3, 1, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.data.message, "\n");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasAction ? 2 : -1);
      }
    },
    dependencies: [MatButton, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
    styles: [".mat-mdc-simple-snack-bar{display:flex}"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimpleSnackBar, [{
    type: Component,
    args: [{
      selector: "simple-snack-bar",
      exportAs: "matSnackBar",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatButton, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
      host: {
        "class": "mat-mdc-simple-snack-bar"
      },
      template: '<div matSnackBarLabel>\n  {{data.message}}\n</div>\n\n@if (hasAction) {\n  <div matSnackBarActions>\n    <button mat-button matSnackBarAction (click)="action()">\n      {{data.action}}\n    </button>\n  </div>\n}\n',
      styles: [".mat-mdc-simple-snack-bar{display:flex}"]
    }]
  }], () => [], null);
})();
var ENTER_ANIMATION = "_mat-snack-bar-enter";
var EXIT_ANIMATION = "_mat-snack-bar-exit";
var MatSnackBarContainer = class _MatSnackBarContainer extends BasePortalOutlet {
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _platform = inject(Platform);
  _rendersRef;
  _animationsDisabled = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  }) === "NoopAnimations";
  snackBarConfig = inject(MatSnackBarConfig);
  _document = inject(DOCUMENT);
  _trackedModals = /* @__PURE__ */ new Set();
  _enterFallback;
  _exitFallback;
  _renders = new Subject();
  /** The number of milliseconds to wait before announcing the snack bar's content. */
  _announceDelay = 150;
  /** The timeout for announcing the snack bar's content. */
  _announceTimeoutId;
  /** Whether the component has been destroyed. */
  _destroyed = false;
  /** The portal outlet inside of this container into which the snack bar content will be loaded. */
  _portalOutlet;
  /** Subject for notifying that the snack bar has announced to screen readers. */
  _onAnnounce = new Subject();
  /** Subject for notifying that the snack bar has exited from view. */
  _onExit = new Subject();
  /** Subject for notifying that the snack bar has finished entering the view. */
  _onEnter = new Subject();
  /** The state of the snack bar animations. */
  _animationState = "void";
  /** aria-live value for the live region. */
  _live;
  /**
   * Element that will have the `mdc-snackbar__label` class applied if the attached component
   * or template does not have it. This ensures that the appropriate structure, typography, and
   * color is applied to the attached view.
   */
  _label;
  /**
   * Role of the live region. This is only for Firefox as there is a known issue where Firefox +
   * JAWS does not read out aria-live message.
   */
  _role;
  /** Unique ID of the aria-live element. */
  _liveElementId = inject(_IdGenerator).getId("mat-snack-bar-container-live-");
  constructor() {
    super();
    const config = this.snackBarConfig;
    if (config.politeness === "assertive" && !config.announcementMessage) {
      this._live = "assertive";
    } else if (config.politeness === "off") {
      this._live = "off";
    } else {
      this._live = "polite";
    }
    if (this._platform.FIREFOX) {
      if (this._live === "polite") {
        this._role = "status";
      }
      if (this._live === "assertive") {
        this._role = "alert";
      }
    }
    this._rendersRef = afterRender(() => this._renders.next(), {
      manualCleanup: true
    });
  }
  /** Attach a component portal as content to this snack bar container. */
  attachComponentPortal(portal) {
    this._assertNotAttached();
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._afterPortalAttached();
    return result;
  }
  /** Attach a template portal as content to this snack bar container. */
  attachTemplatePortal(portal) {
    this._assertNotAttached();
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._afterPortalAttached();
    return result;
  }
  /**
   * Attaches a DOM portal to the snack bar container.
   * @deprecated To be turned into a method.
   * @breaking-change 10.0.0
   */
  attachDomPortal = (portal) => {
    this._assertNotAttached();
    const result = this._portalOutlet.attachDomPortal(portal);
    this._afterPortalAttached();
    return result;
  };
  /** Handle end of animations, updating the state of the snackbar. */
  onAnimationEnd(animationName) {
    if (animationName === EXIT_ANIMATION) {
      this._completeExit();
    } else if (animationName === ENTER_ANIMATION) {
      clearTimeout(this._enterFallback);
      this._ngZone.run(() => {
        this._onEnter.next();
        this._onEnter.complete();
      });
    }
  }
  /** Begin animation of snack bar entrance into view. */
  enter() {
    if (!this._destroyed) {
      this._animationState = "visible";
      this._changeDetectorRef.markForCheck();
      this._changeDetectorRef.detectChanges();
      this._screenReaderAnnounce();
      if (this._animationsDisabled) {
        this._renders.pipe(take(1)).subscribe(() => {
          this._ngZone.run(() => queueMicrotask(() => this.onAnimationEnd(ENTER_ANIMATION)));
        });
      } else {
        clearTimeout(this._enterFallback);
        this._enterFallback = setTimeout(() => {
          this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible");
          this.onAnimationEnd(ENTER_ANIMATION);
        }, 200);
      }
    }
  }
  /** Begin animation of the snack bar exiting from view. */
  exit() {
    if (this._destroyed) {
      return of(void 0);
    }
    this._ngZone.run(() => {
      this._animationState = "hidden";
      this._changeDetectorRef.markForCheck();
      this._elementRef.nativeElement.setAttribute("mat-exit", "");
      clearTimeout(this._announceTimeoutId);
      if (this._animationsDisabled) {
        this._renders.pipe(take(1)).subscribe(() => {
          this._ngZone.run(() => queueMicrotask(() => this.onAnimationEnd(EXIT_ANIMATION)));
        });
      } else {
        clearTimeout(this._exitFallback);
        this._exitFallback = setTimeout(() => this.onAnimationEnd(EXIT_ANIMATION), 200);
      }
    });
    return this._onExit;
  }
  /** Makes sure the exit callbacks have been invoked when the element is destroyed. */
  ngOnDestroy() {
    this._destroyed = true;
    this._clearFromModals();
    this._completeExit();
    this._renders.complete();
    this._rendersRef.destroy();
  }
  _completeExit() {
    clearTimeout(this._exitFallback);
    queueMicrotask(() => {
      this._onExit.next();
      this._onExit.complete();
    });
  }
  /**
   * Called after the portal contents have been attached. Can be
   * used to modify the DOM once it's guaranteed to be in place.
   */
  _afterPortalAttached() {
    const element = this._elementRef.nativeElement;
    const panelClasses = this.snackBarConfig.panelClass;
    if (panelClasses) {
      if (Array.isArray(panelClasses)) {
        panelClasses.forEach((cssClass) => element.classList.add(cssClass));
      } else {
        element.classList.add(panelClasses);
      }
    }
    this._exposeToModals();
    const label = this._label.nativeElement;
    const labelClass = "mdc-snackbar__label";
    label.classList.toggle(labelClass, !label.querySelector(`.${labelClass}`));
  }
  /**
   * Some browsers won't expose the accessibility node of the live element if there is an
   * `aria-modal` and the live element is outside of it. This method works around the issue by
   * pointing the `aria-owns` of all modals to the live element.
   */
  _exposeToModals() {
    const id = this._liveElementId;
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute("aria-owns");
      this._trackedModals.add(modal);
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
  /** Clears the references to the live element from any modals it was added to. */
  _clearFromModals() {
    this._trackedModals.forEach((modal) => {
      const ariaOwns = modal.getAttribute("aria-owns");
      if (ariaOwns) {
        const newValue = ariaOwns.replace(this._liveElementId, "").trim();
        if (newValue.length > 0) {
          modal.setAttribute("aria-owns", newValue);
        } else {
          modal.removeAttribute("aria-owns");
        }
      }
    });
    this._trackedModals.clear();
  }
  /** Asserts that no content is already attached to the container. */
  _assertNotAttached() {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Attempting to attach snack bar content after content is already attached");
    }
  }
  /**
   * Starts a timeout to move the snack bar content to the live region so screen readers will
   * announce it.
   */
  _screenReaderAnnounce() {
    if (this._announceTimeoutId) {
      return;
    }
    this._ngZone.runOutsideAngular(() => {
      this._announceTimeoutId = setTimeout(() => {
        if (this._destroyed) {
          return;
        }
        const element = this._elementRef.nativeElement;
        const inertElement = element.querySelector("[aria-hidden]");
        const liveElement = element.querySelector("[aria-live]");
        if (inertElement && liveElement) {
          let focusedElement = null;
          if (this._platform.isBrowser && document.activeElement instanceof HTMLElement && inertElement.contains(document.activeElement)) {
            focusedElement = document.activeElement;
          }
          inertElement.removeAttribute("aria-hidden");
          liveElement.appendChild(inertElement);
          focusedElement?.focus();
          this._onAnnounce.next();
          this._onAnnounce.complete();
        }
      }, this._announceDelay);
    });
  }
  static \u0275fac = function MatSnackBarContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBarContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSnackBarContainer,
    selectors: [["mat-snack-bar-container"]],
    viewQuery: function MatSnackBarContainer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkPortalOutlet, 7);
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalOutlet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._label = _t.first);
      }
    },
    hostAttrs: [1, "mdc-snackbar", "mat-mdc-snack-bar-container"],
    hostVars: 6,
    hostBindings: function MatSnackBarContainer_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("animationend", function MatSnackBarContainer_animationend_HostBindingHandler($event) {
          return ctx.onAnimationEnd($event.animationName);
        })("animationcancel", function MatSnackBarContainer_animationcancel_HostBindingHandler($event) {
          return ctx.onAnimationEnd($event.animationName);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-snack-bar-container-enter", ctx._animationState === "visible")("mat-snack-bar-container-exit", ctx._animationState === "hidden")("mat-snack-bar-container-animations-enabled", !ctx._animationsDisabled);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 3,
    consts: [["label", ""], [1, "mdc-snackbar__surface", "mat-mdc-snackbar-surface"], [1, "mat-mdc-snack-bar-label"], ["aria-hidden", "true"], ["cdkPortalOutlet", ""]],
    template: function MatSnackBarContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2, 0)(3, "div", 3);
        \u0275\u0275template(4, MatSnackBarContainer_ng_template_4_Template, 0, 0, "ng-template", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "div");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275attribute("aria-live", ctx._live)("role", ctx._role)("id", ctx._liveElementId);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: ["@keyframes _mat-snack-bar-enter{from{transform:scale(0.8);opacity:0}to{transform:scale(1);opacity:1}}@keyframes _mat-snack-bar-exit{from{opacity:1}to{opacity:0}}.mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-snack-bar-container-animations-enabled{opacity:0}.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible{opacity:1}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter{animation:_mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit{animation:_mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}@media(forced-colors: active){.mat-mdc-snackbar-surface{outline:solid 1px}}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mdc-snackbar-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mdc-snackbar-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mdc-snackbar-container-color, var(--mat-sys-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mdc-snackbar-supporting-text-font, var(--mat-sys-body-medium-font));font-size:var(--mdc-snackbar-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mdc-snackbar-supporting-text-weight, var(--mat-sys-body-medium-weight));line-height:var(--mdc-snackbar-supporting-text-line-height, var(--mat-sys-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarContainer, [{
    type: Component,
    args: [{
      selector: "mat-snack-bar-container",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkPortalOutlet],
      host: {
        "class": "mdc-snackbar mat-mdc-snack-bar-container",
        "[class.mat-snack-bar-container-enter]": '_animationState === "visible"',
        "[class.mat-snack-bar-container-exit]": '_animationState === "hidden"',
        "[class.mat-snack-bar-container-animations-enabled]": "!_animationsDisabled",
        "(animationend)": "onAnimationEnd($event.animationName)",
        "(animationcancel)": "onAnimationEnd($event.animationName)"
      },
      template: '<div class="mdc-snackbar__surface mat-mdc-snackbar-surface">\n  <!--\n    This outer label wrapper will have the class `mdc-snackbar__label` applied if\n    the attached template/component does not contain it.\n  -->\n  <div class="mat-mdc-snack-bar-label" #label>\n    <!-- Initialy holds the snack bar content, will be empty after announcing to screen readers. -->\n    <div aria-hidden="true">\n      <ng-template cdkPortalOutlet />\n    </div>\n\n    <!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->\n    <div [attr.aria-live]="_live" [attr.role]="_role" [attr.id]="_liveElementId"></div>\n  </div>\n</div>\n',
      styles: ["@keyframes _mat-snack-bar-enter{from{transform:scale(0.8);opacity:0}to{transform:scale(1);opacity:1}}@keyframes _mat-snack-bar-exit{from{opacity:1}to{opacity:0}}.mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-snack-bar-container-animations-enabled{opacity:0}.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible{opacity:1}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter{animation:_mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit{animation:_mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}@media(forced-colors: active){.mat-mdc-snackbar-surface{outline:solid 1px}}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mdc-snackbar-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mdc-snackbar-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mdc-snackbar-container-color, var(--mat-sys-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mdc-snackbar-supporting-text-font, var(--mat-sys-body-medium-font));font-size:var(--mdc-snackbar-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mdc-snackbar-supporting-text-weight, var(--mat-sys-body-medium-weight));line-height:var(--mdc-snackbar-supporting-text-line-height, var(--mat-sys-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}"]
    }]
  }], () => [], {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }],
    _label: [{
      type: ViewChild,
      args: ["label", {
        static: true
      }]
    }]
  });
})();
function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
  return new MatSnackBarConfig();
}
var MAT_SNACK_BAR_DEFAULT_OPTIONS = new InjectionToken("mat-snack-bar-default-options", {
  providedIn: "root",
  factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY
});
var MatSnackBar = class _MatSnackBar {
  _overlay = inject(Overlay);
  _live = inject(LiveAnnouncer);
  _injector = inject(Injector);
  _breakpointObserver = inject(BreakpointObserver);
  _parentSnackBar = inject(_MatSnackBar, {
    optional: true,
    skipSelf: true
  });
  _defaultConfig = inject(MAT_SNACK_BAR_DEFAULT_OPTIONS);
  /**
   * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
   * If there is a parent snack-bar service, all operations should delegate to that parent
   * via `_openedSnackBarRef`.
   */
  _snackBarRefAtThisLevel = null;
  /** The component that should be rendered as the snack bar's simple component. */
  simpleSnackBarComponent = SimpleSnackBar;
  /** The container component that attaches the provided template or component. */
  snackBarContainerComponent = MatSnackBarContainer;
  /** The CSS class to apply for handset mode. */
  handsetCssClass = "mat-mdc-snack-bar-handset";
  /** Reference to the currently opened snackbar at *any* level. */
  get _openedSnackBarRef() {
    const parent = this._parentSnackBar;
    return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
  }
  set _openedSnackBarRef(value) {
    if (this._parentSnackBar) {
      this._parentSnackBar._openedSnackBarRef = value;
    } else {
      this._snackBarRefAtThisLevel = value;
    }
  }
  constructor() {
  }
  /**
   * Creates and dispatches a snack bar with a custom component for the content, removing any
   * currently opened snack bars.
   *
   * @param component Component to be instantiated.
   * @param config Extra configuration for the snack bar.
   */
  openFromComponent(component, config) {
    return this._attach(component, config);
  }
  /**
   * Creates and dispatches a snack bar with a custom template for the content, removing any
   * currently opened snack bars.
   *
   * @param template Template to be instantiated.
   * @param config Extra configuration for the snack bar.
   */
  openFromTemplate(template, config) {
    return this._attach(template, config);
  }
  /**
   * Opens a snackbar with a message and an optional action.
   * @param message The message to show in the snackbar.
   * @param action The label for the snackbar action.
   * @param config Additional configuration options for the snackbar.
   */
  open(message, action = "", config) {
    const _config = __spreadValues(__spreadValues({}, this._defaultConfig), config);
    _config.data = {
      message,
      action
    };
    if (_config.announcementMessage === message) {
      _config.announcementMessage = void 0;
    }
    return this.openFromComponent(this.simpleSnackBarComponent, _config);
  }
  /**
   * Dismisses the currently-visible snack bar.
   */
  dismiss() {
    if (this._openedSnackBarRef) {
      this._openedSnackBarRef.dismiss();
    }
  }
  ngOnDestroy() {
    if (this._snackBarRefAtThisLevel) {
      this._snackBarRefAtThisLevel.dismiss();
    }
  }
  /**
   * Attaches the snack bar container component to the overlay.
   */
  _attachSnackBarContainer(overlayRef, config) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarConfig,
        useValue: config
      }]
    });
    const containerPortal = new ComponentPortal(this.snackBarContainerComponent, config.viewContainerRef, injector);
    const containerRef = overlayRef.attach(containerPortal);
    containerRef.instance.snackBarConfig = config;
    return containerRef.instance;
  }
  /**
   * Places a new component or a template as the content of the snack bar container.
   */
  _attach(content, userConfig) {
    const config = __spreadValues(__spreadValues(__spreadValues({}, new MatSnackBarConfig()), this._defaultConfig), userConfig);
    const overlayRef = this._createOverlay(config);
    const container = this._attachSnackBarContainer(overlayRef, config);
    const snackBarRef = new MatSnackBarRef(container, overlayRef);
    if (content instanceof TemplateRef) {
      const portal = new TemplatePortal(content, null, {
        $implicit: config.data,
        snackBarRef
      });
      snackBarRef.instance = container.attachTemplatePortal(portal);
    } else {
      const injector = this._createInjector(config, snackBarRef);
      const portal = new ComponentPortal(content, void 0, injector);
      const contentRef = container.attachComponentPortal(portal);
      snackBarRef.instance = contentRef.instance;
    }
    this._breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe(takeUntil(overlayRef.detachments())).subscribe((state) => {
      overlayRef.overlayElement.classList.toggle(this.handsetCssClass, state.matches);
    });
    if (config.announcementMessage) {
      container._onAnnounce.subscribe(() => {
        this._live.announce(config.announcementMessage, config.politeness);
      });
    }
    this._animateSnackBar(snackBarRef, config);
    this._openedSnackBarRef = snackBarRef;
    return this._openedSnackBarRef;
  }
  /** Animates the old snack bar out and the new one in. */
  _animateSnackBar(snackBarRef, config) {
    snackBarRef.afterDismissed().subscribe(() => {
      if (this._openedSnackBarRef == snackBarRef) {
        this._openedSnackBarRef = null;
      }
      if (config.announcementMessage) {
        this._live.clear();
      }
    });
    if (config.duration && config.duration > 0) {
      snackBarRef.afterOpened().subscribe(() => snackBarRef._dismissAfter(config.duration));
    }
    if (this._openedSnackBarRef) {
      this._openedSnackBarRef.afterDismissed().subscribe(() => {
        snackBarRef.containerInstance.enter();
      });
      this._openedSnackBarRef.dismiss();
    } else {
      snackBarRef.containerInstance.enter();
    }
  }
  /**
   * Creates a new overlay and places it in the correct location.
   * @param config The user-specified snack bar config.
   */
  _createOverlay(config) {
    const overlayConfig = new OverlayConfig();
    overlayConfig.direction = config.direction;
    let positionStrategy = this._overlay.position().global();
    const isRtl = config.direction === "rtl";
    const isLeft = config.horizontalPosition === "left" || config.horizontalPosition === "start" && !isRtl || config.horizontalPosition === "end" && isRtl;
    const isRight = !isLeft && config.horizontalPosition !== "center";
    if (isLeft) {
      positionStrategy.left("0");
    } else if (isRight) {
      positionStrategy.right("0");
    } else {
      positionStrategy.centerHorizontally();
    }
    if (config.verticalPosition === "top") {
      positionStrategy.top("0");
    } else {
      positionStrategy.bottom("0");
    }
    overlayConfig.positionStrategy = positionStrategy;
    return this._overlay.create(overlayConfig);
  }
  /**
   * Creates an injector to be used inside of a snack bar component.
   * @param config Config that was used to create the snack bar.
   * @param snackBarRef Reference to the snack bar.
   */
  _createInjector(config, snackBarRef) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    return Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarRef,
        useValue: snackBarRef
      }, {
        provide: MAT_SNACK_BAR_DATA,
        useValue: config.data
      }]
    });
  }
  static \u0275fac = function MatSnackBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBar)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatSnackBar,
    factory: _MatSnackBar.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBar, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var DIRECTIVES = [MatSnackBarContainer, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction];
var MatSnackBarModule = class _MatSnackBarModule {
  static \u0275fac = function MatSnackBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSnackBarModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MatSnackBar],
    imports: [OverlayModule, PortalModule, MatButtonModule, MatCommonModule, SimpleSnackBar, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, MatButtonModule, MatCommonModule, SimpleSnackBar, ...DIRECTIVES],
      exports: [MatCommonModule, ...DIRECTIVES],
      providers: [MatSnackBar]
    }]
  }], null, null);
})();

// node_modules/date-fns/subSeconds.js
function subSeconds(date, amount, options) {
  return addSeconds(date, -amount, options);
}

// libs/mocks/src/mocks.ts
var mocks_exports = {};
__export(mocks_exports, {
  default: () => mocks_default
});

// libs/mocks/src/lib/api/assets.data.ts
var MOCK_CATEGORIES = [
  { id: "1", name: "Technology" },
  { id: "2", name: "Furniture" },
  { id: "3", name: "Stationary" },
  { id: "4", name: "Other" }
];
var MOCK_PRODUCTS = [
  { id: "1", name: "iPad", category_id: "1", brand: "Apple", barcode: "123" },
  {
    id: "2",
    name: "iPhone",
    category_id: "1",
    brand: "Apple",
    barcode: "456",
    images: []
  },
  {
    id: "3",
    name: "iWatch",
    category_id: "1",
    brand: "Apple",
    barcode: "789"
  },
  {
    id: "4",
    name: "Chair",
    category_id: "2",
    brand: "Herman Miller",
    barcode: "101"
  },
  {
    id: "5",
    name: "Lounge",
    category_id: "2",
    brand: "Ikea",
    barcode: "102"
  },
  { id: "6", name: "Table", category_id: "2", brand: "Ikea", barcode: "103" },
  { id: "7", name: "Couch", category_id: "2", brand: "Ikea", barcode: "104" },
  {
    id: "8",
    name: "Test Item",
    category_id: "4",
    brand: "Test Brand",
    barcode: "105"
  },
  {
    id: "9",
    name: "Notepad",
    category_id: "3",
    brand: "J.Burrows",
    barcode: "106"
  },
  {
    id: "10",
    name: "Whiteboard Markers",
    category_id: "3",
    brand: "Artline",
    barcode: "107"
  },
  {
    id: "11",
    name: "Whiteboard",
    category_id: "2",
    brand: "Ikea",
    barcode: "108"
  }
];
var MOCK_ASSETS = Array(100).fill(null).map((_, i) => ({
  id: `asset-${i}`,
  name: `Asset ${i}`,
  type_id: MOCK_PRODUCTS[i % MOCK_PRODUCTS.length].id,
  description: `This is asset ${i}`,
  model_number: `Model ${i}`,
  serial_number: `Serial ${i}`,
  identifier: `Identifier ${i}`,
  other_data: {},
  purchase_order_id: `purchase-order-${i}`
}));
var MOCK_PURCHASE_ORDERS = Array(100).fill(null).map((_, i) => ({
  id: `purchase-order-${i}`,
  order_number: `Order ${i}`,
  invoice_number: `Invoice ${i}`,
  purchase_date: getUnixTime(Date.now()),
  expected_service_start_date: getUnixTime(Date.now()),
  expected_service_end_date: getUnixTime(Date.now() + 1e9)
}));

// libs/mocks/src/lib/api/assets.mock.ts
var BASE_PATH = "/api/engine/v2";
var ASSET_MOCKS = registerMocks();
var update = (dataset) => (id, data) => {
  const index = dataset.findIndex((e2) => e2.id === id);
  if (index < 0)
    throw {
      status: 404,
      message: `Unable to find booking with ID ${id}`
    };
  const new_event = __spreadValues({}, data);
  dataset.splice(index, 1, new_event);
  return new_event;
};
function registerMocks() {
  $s({
    path: `${BASE_PATH}/asset_categories`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const events = MOCK_CATEGORIES;
      return events;
    }
  });
  $s({
    path: `${BASE_PATH}/asset_categories/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_CATEGORIES.find((e2) => e2.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  $s({
    path: `${BASE_PATH}/asset_categories`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-category-${predictableRandomInt(999)}`
      });
      MOCK_CATEGORIES.push(new_event);
      return new_event;
    }
  });
  $s({
    path: `${BASE_PATH}/asset_categories/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_CATEGORIES)(req.route_params.id, __spreadValues({}, req.body))
  });
  $s({
    path: `${BASE_PATH}/asset_categories/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_CATEGORIES.findIndex((e2) => e2.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      MOCK_CATEGORIES.splice(index, 1);
      return;
    }
  });
  $s({
    path: `${BASE_PATH}/asset_types`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const events = MOCK_PRODUCTS;
      return events;
    }
  });
  $s({
    path: `${BASE_PATH}/asset_types/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_PRODUCTS.find((e2) => e2.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  $s({
    path: `${BASE_PATH}/asset_types`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-product-${predictableRandomInt(999)}`
      });
      MOCK_PRODUCTS.push(new_event);
      return new_event;
    }
  });
  $s({
    path: `${BASE_PATH}/asset_types/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_PRODUCTS)(req.route_params.id, __spreadValues({}, req.body))
  });
  $s({
    path: `${BASE_PATH}/asset_types/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_PRODUCTS.findIndex((e2) => e2.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      MOCK_PRODUCTS.splice(index, 1);
      return;
    }
  });
  $s({
    path: `${BASE_PATH}/asset_purchase_orders`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const events = MOCK_PURCHASE_ORDERS;
      return events;
    }
  });
  $s({
    path: `${BASE_PATH}/asset_purchase_orders/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_PURCHASE_ORDERS.find((e2) => e2.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  $s({
    path: `${BASE_PATH}/asset_purchase_orders`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-purchase-order-${predictableRandomInt(999)}`
      });
      MOCK_PURCHASE_ORDERS.push(new_event);
      return new_event;
    }
  });
  $s({
    path: `${BASE_PATH}/asset_purchase_orders/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_PURCHASE_ORDERS)(req.route_params.id, __spreadValues({}, req.body))
  });
  $s({
    path: `${BASE_PATH}/asset_purchase_orders/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_PURCHASE_ORDERS.findIndex((e2) => e2.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find purchase order with ID ${req.route_params.id}`
        };
      MOCK_PURCHASE_ORDERS.splice(index, 1);
      return;
    }
  });
  $s({
    path: `${BASE_PATH}/assets`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const events = MOCK_ASSETS;
      return events;
    }
  });
  $s({
    path: `${BASE_PATH}/assets/:id`,
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_ASSETS.find((e2) => e2.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  $s({
    path: `${BASE_PATH}/assets`,
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-asset-${predictableRandomInt(999)}`
      });
      MOCK_ASSETS.push(new_event);
      return new_event;
    }
  });
  $s({
    path: `${BASE_PATH}/assets/:id`,
    metadata: {},
    method: "PUT",
    callback: (req) => update(MOCK_ASSETS)(req.route_params.id, __spreadValues({}, req.body))
  });
  $s({
    path: `${BASE_PATH}/assets/:id`,
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_ASSETS.findIndex((e2) => e2.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      MOCK_ASSETS.splice(index, 1);
      return;
    }
  });
}

// libs/mocks/src/lib/api/spaces.data.ts
var randomSpaceFeatures = () => {
  const f = ["Whiteboard", "VidConf", "Projector", "Views"];
  const numFeatures = predictableRandomInt(f.length + 1);
  const res = [];
  for (let i = 0; i < numFeatures; i++) {
    res.push(f[predictableRandomInt(f.length)]);
  }
  return res.filter((el, i, r2) => r2.indexOf(el) === i);
};
var MOCK_SPACES = [
  {
    name: "1.01 Operations Room",
    map_id: "area-1.01-status",
    zones: ["bld-01", "bld-01_lvl-1", "zone-EmWFTjuYExK"]
  },
  {
    name: "1.03 Sydney Boardroom",
    map_id: "area-1.03-status",
    zones: ["bld-01", "bld-01_lvl-1", "zone-EmWFTjuYExK"]
  },
  {
    name: "1.04 The Studio",
    map_id: "area-1.04-status",
    zones: ["bld-01", "bld-01_lvl-1", "zone-EmWFTjuYExK"]
  },
  {
    name: "Jam Board",
    map_id: "area-1.02-status",
    zones: ["bld-01", "bld-01_lvl-1", "zone-EmWFTjuYExK"]
  },
  {
    name: "G.01 Cisco Room",
    map_id: "area-G.01-status",
    zones: ["bld-01", "bld-01_lvl-1", "zone-EmWFTjuYExK"]
  },
  {
    name: "G.02 The Lab",
    map_id: "area-G.02-status",
    zones: ["bld-01", "bld-01_lvl-1", "zone-EmWFTjuYExK"]
  },
  {
    name: "Conference Room 2.01",
    map_id: "area-2.01-status",
    zones: ["bld-02", "bld-02_lvl-2", "zone-EmWFTjuYExK"]
  },
  {
    name: "Conference Room 2.02",
    map_id: "area-2.02-status",
    zones: ["bld-02", "bld-02_lvl-2", "zone-EmWFTjuYExK"]
  },
  {
    name: "Conference Room 3.01",
    map_id: "area-3.01-status",
    zones: ["bld-02", "bld-02_lvl-3", "zone-EmWFTjuYExK"]
  },
  {
    name: "Conference Room 3.02",
    map_id: "area-3.02-status",
    zones: ["bld-02", "bld-02_lvl-3", "zone-EmWFTjuYExK"]
  },
  {
    name: "Conference Room 3.03",
    map_id: "area-3.03-status",
    zones: ["bld-02", "bld-02_lvl-3", "zone-EmWFTjuYExK"]
  },
  //MapsIndoors mock spaces
  {
    name: "Boardroom 1",
    map_id: "12beee0d06a1475293aadd9f",
    zones: ["bld-01", "bld-01_lvl-1", "zone-EmWFTjuYExK"],
    level: {
      id: "bld-01_lvl-1",
      parent_id: "bld-01",
      name: "Level 1",
      display_name: "Level 1",
      capacity: 5,
      number: "",
      map_id: "12beee0d06a1475293aadd9f",
      tags: [""],
      setting: {},
      images: [""],
      locations: { id: "", name: "" }
    }
  },
  {
    name: "Boardroom 2",
    map_id: "dd2dec8c291a4fb7995bff3c",
    zones: ["bld-01", "bld-01_lvl-1", "zone-EmWFTjuYExK"],
    level: {
      id: "bld-01_lvl-1",
      parent_id: "bld-01",
      name: "Level 1",
      display_name: "Level 1",
      capacity: 5,
      number: "",
      map_id: "dd2dec8c291a4fb7995bff3c",
      tags: [""],
      setting: {},
      images: [""],
      locations: { id: "", name: "" }
    }
  },
  {
    name: "Boardroom 3",
    map_id: "23bc6cf392c842d69abc71bf",
    zones: ["bld-01", "bld-01_lvl-1", "zone-EmWFTjuYExK"],
    level: {
      id: "bld-01_lvl-1",
      parent_id: "bld-01",
      name: "Level 1",
      display_name: "Level 1",
      capacity: 5,
      number: "",
      map_id: "23bc6cf392c842d69abc71bf",
      tags: [""],
      setting: {},
      images: [""],
      locations: { id: "", name: "" }
    }
  },
  {
    name: "Boardroom 4",
    map_id: "696971dbc50a4c66a7f5356a",
    zones: ["bld-01", "bld-01_lvl-1", "zone-EmWFTjuYExK"],
    level: {
      id: "bld-01_lvl-1",
      parent_id: "bld-01",
      name: "Level 1",
      display_name: "Level 1",
      capacity: 5,
      number: "",
      map_id: "23bc6cf392c842d69abc71bf",
      tags: [""],
      setting: {},
      images: [""],
      locations: { id: "", name: "" }
    }
  },
  {
    name: "Boardroom 5",
    map_id: "58cc74c5dd4249148674a191",
    zones: ["bld-01", "bld-01_lvl-1", "zone-EmWFTjuYExK"],
    level: {
      id: "bld-01_lvl-1",
      parent_id: "bld-01",
      name: "Level 1",
      display_name: "Level 1",
      capacity: 5,
      number: "",
      map_id: "23bc6cf392c842d69abc71bf",
      tags: [""],
      setting: {},
      images: [""],
      locations: { id: "", name: "" }
    }
  },
  {
    name: "Boardroom 6",
    map_id: "a4c02df953f34e5dad26c95f",
    zones: ["bld-01", "bld-01_lvl-1", "zone-EmWFTjuYExK"]
  },
  {
    name: "Boardroom 7",
    map_id: "23bc6cf392c842d69abc71bf",
    zones: ["bld-02", "bld-02_lvl-3", "zone-EmWFTjuYExK"]
  },
  {
    name: "Boardroom 8",
    map_id: "21a49f92c5924d2f9b39934b",
    zones: ["bld-02", "bld-02_lvl-3", "zone-EmWFTjuYExK"]
  },
  {
    name: "Boardroom 9",
    map_id: "0d3f964712ec4d36b9776449",
    zones: ["bld-02", "bld-02_lvl-3", "zone-EmWFTjuYExK"]
  },
  {
    name: "Boardroom 10",
    map_id: "7c01d7766a38488b8813347c",
    zones: ["bld-02", "bld-02_lvl-3", "zone-EmWFTjuYExK"]
  },
  {
    name: "Boardroom 11",
    map_id: "9e9efbe702bb4d91a2615c06",
    zones: ["bld-02", "bld-02_lvl-3", "zone-EmWFTjuYExK"]
  },
  {
    name: "Boardroom 12",
    map_id: "66161113fff74d8780daeb2e",
    zones: ["bld-02", "bld-02_lvl-3", "zone-EmWFTjuYExK"]
  }
].map((d) => generateMockSpace(__spreadProps(__spreadValues({}, d), {
  features: randomSpaceFeatures(),
  images: [
    "https://webcdn.executivecentre.com/wp-content/uploads/sites/39/2020/10/img-meetingroomrental_hire.jpg"
  ]
})));

// libs/mocks/src/lib/api/common.mock.ts
var DOMAIN = "place.tech";

// libs/mocks/src/lib/api/users.data.ts
var PREDEF_USERS = [
  "Jonathan McFarlane",
  "Alex Sorafumo",
  "Jim Doe",
  "Cristina Boston",
  "Jeremy West",
  "Viv Briffa",
  "Candy Russo",
  "Jeff Wiz",
  "Sravani Kotha",
  "Kim Burgess",
  "Caspian Baska",
  "Stephen Von Takach",
  "Cameron Reeves",
  "Shane Boseley"
];
var ACTIVE_USER = {
  id: "current",
  name: "PlaceOS - Demo User",
  email: "dev@place.tech",
  groups: ["deals", "user"],
  sys_admin: true
};
var MOCK_STAFF = PREDEF_USERS.map((name, i) => ({
  id: `user-${i + 1}`,
  name: `${name} (PlaceOS)`,
  email: `${name.split(" ").join(".").toLowerCase()}@${DOMAIN}`
})).concat([ACTIVE_USER]);
var MOCK_GUESTS = PREDEF_USERS.map((name, i) => ({
  id: `guest-${i + 1}`,
  name: `${name} (External)`,
  email: `${name.split(" ").join(".").toLowerCase()}@guest.${DOMAIN}`,
  visit_expected: predictableRandomInt(99999) % 2 === 0,
  extension_data: predictableRandomInt(99999) % 3 === 0 ? {
    vaccination_proof: {
      url: "https://fonts.gstatic.com/s/i/materialicons/verified/v11/24px.svg"
    },
    id_data: {
      url: "https://fonts.gstatic.com/s/i/materialicons/fingerprint/v12/24px.svg"
    }
  } : {}
}));

// libs/mocks/src/lib/api/zone.data.ts
var MOCK_ORGS = [
  {
    created_at: 1587057070,
    updated_at: 1587692680,
    name: "PlaceOS",
    description: "",
    tags: ["org"],
    count: 0,
    capacity: 0,
    parent_id: "",
    triggers: [],
    id: "zone-EmWFTjuYExK"
  }
];
var MOCK_BUILDINGS = [
  {
    name: "Sydney",
    description: "",
    tags: ["building"],
    count: 0,
    capacity: 0,
    parent_id: "zone-EmWFTjuYExK",
    triggers: [],
    id: "bld-01",
    levels: ["lvl-G", "lvl-1"]
  },
  {
    name: "Brisbane",
    description: "",
    tags: ["building"],
    count: 0,
    capacity: 0,
    parent_id: "zone-EmWFTjuYExK",
    triggers: [],
    id: "bld-02",
    levels: ["lvl-2", "lvl-3"]
  }
];
var MOCK_ZONES = [];
var mockLevel = (id, idx, building, num = "10") => {
  let map_id = id.substr(4);
  map_id = `assets/maps/level_${num}.svg`;
  return {
    id: `${building.id}_${id}`,
    name: `Level ${id.endsWith("00") ? "G" : id.split("-")[1]}`,
    parent_id: building.id,
    description: "",
    tags: ["level"],
    map_id,
    code: "level code 12",
    type: "staff floor",
    count: 5,
    capacity: 30,
    location: "optional lat,long",
    display_name: ""
  };
};
var MOCK_LEVELS = MOCK_BUILDINGS.map((bld) => bld.levels.map((level, idx) => mockLevel(level, idx, bld, level.split("-")[1]))).reduce((p, c) => p.concat(c), [
  // {
  //     id: 'test',
  //     parent_id: 'bld-01',
  //     name: 'Test',
  //     map_id: 'assets/maps/test.svg',
  // },
  {
    id: "level-p1",
    parent_id: "bld-01",
    name: "Level P1",
    tags: ["level", "parking"],
    map_id: "assets/maps/level_P1.svg"
  }
]);

// libs/mocks/src/lib/api/bookings.data.ts
var EVENT_TIME = set(subDays(Date.now(), 3), {
  hours: 7,
  minutes: 0,
  seconds: 0,
  milliseconds: 0
});
var nextEventTime = (save = false) => {
  const next = addMinutes(EVENT_TIME, (predictableRandomInt(8) + 1) * 15);
  if (save)
    EVENT_TIME = addMinutes(next, 60);
  return getUnixTime(next);
};
var TYPES = [
  "desk",
  "parking",
  "asset-request",
  "visitor",
  "locker",
  "group-event"
];
var TRACKING = ["in_storage", "in_transit", "at_location"];
var MOCK_BOOKINGS = new Array(300).fill(0).map((_, index) => {
  const throw_away = predictableRandomInt(999999) % 3 === 0;
  const user = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)] || {};
  const type = TYPES[predictableRandomInt(TYPES.length)];
  const bld = MOCK_BUILDINGS[predictableRandomInt(MOCK_BUILDINGS.length)];
  const lvls = MOCK_LEVELS.filter((_2) => _2.parent_id === bld?.id);
  const lvl = lvls[predictableRandomInt(lvls.length)];
  const lvl_spaces = MOCK_SPACES.filter((_2) => _2.zones.includes(lvl?.id)) || [];
  const approved = predictableRandomInt(999999) % 4;
  const approver = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
  const guest = MOCK_GUESTS[predictableRandomInt(MOCK_GUESTS.length)];
  const asset_count = predictableRandomInt(3, 1);
  const position = padString(index % 18 + 1 + Math.floor(index / 18) * 100, 3);
  return {
    id: `booking-${index}`,
    booking_start: nextEventTime(true),
    booking_end: nextEventTime(),
    user_id: user.id,
    user_name: user.name,
    user_email: user.email,
    booked_by_name: user.name,
    booked_by_email: user.email,
    asset_id: type === "visitor" ? guest.email : type === "parking" ? `park-${position}` : `desk-${lvl?.id}-${index}`,
    asset_name: type === "visitor" ? guest.name : type === "parking" ? position : `${lvl?.id}-${index}`,
    description: type === "visitor" ? guest.name : type === "parking" ? position : `Desk ${index}`,
    title: `${capitalizeFirstLetter(type)} Booking ${index}`,
    type,
    booking_type: type,
    attendees: [],
    checked_in: predictableRandomInt(999999) % 3 === 0,
    access: predictableRandomInt(999999) % 3 === 0,
    approved: approved === 0,
    rejected: approved === 1,
    permission: type === "group-event" ? "OPEN" : "PRIVATE",
    approver_id: approved === 0 ? approver.id : "",
    approver_name: approved === 0 ? approver.name : "",
    approver_email: approved === 0 ? approver.email : "",
    zones: [bld?.id, type === "parking" ? "level-p1" : lvl?.id],
    extension_data: {
      map_id: `table-10.00${index}`,
      plate_number: randomString(8, "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),
      assets: new Array(asset_count).fill(0).map((_2) => __spreadProps(__spreadValues({}, MOCK_ASSETS[predictableRandomInt(asset_count)]), {
        amount: predictableRandomInt(5, 1)
      })),
      tracking: approved === 0 ? TRACKING[predictableRandomInt(TRACKING.length)] : "in_storage",
      space_id: lvl_spaces[predictableRandomInt(lvl_spaces.length)]?.id
    }
  };
});

// libs/mocks/src/lib/api/bookings.mock.ts
var BOOKING_MOCKS = registerMocks2();
function registerMocks2() {
  $s({
    path: "/api/staff/v1/bookings",
    metadata: {},
    method: "GET",
    callback: (_) => {
      const events = MOCK_BOOKINGS.filter((event) => timePeriodsIntersect(+_.query_params.period_start, +_.query_params.period_end, event.booking_start, event.booking_end) && (event.type === _.query_params.type || event.booking_type === _.query_params.type));
      return events;
    }
  });
  $s({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "GET",
    callback: (_) => {
      const event = MOCK_BOOKINGS.find((e2) => e2.id === _.route_params.id);
      if (!event)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      return event;
    }
  });
  $s({
    path: "/api/staff/v1/bookings/:id/attendee",
    metadata: {},
    method: "POST",
    callback: (_) => {
      const event = MOCK_BOOKINGS.find((e2) => e2.id === _.route_params.id);
      if (!event) {
        throw {
          status: 404,
          message: `Unable to find booking with ID ${_.route_params.id}`
        };
      }
      const user = {
        id: _.body.id,
        name: _.body.name,
        email: _.body.email,
        checked_in: false
      };
      event.attendees.push(user);
      return user;
    }
  });
  $s({
    path: "/api/staff/v1/bookings/:id/guests/:email/check_in",
    metadata: {},
    method: "POST",
    callback: (_) => {
      const { id, email } = _.route_params;
      const event = MOCK_BOOKINGS.find((e2) => e2.id === id);
      if (!event) {
        throw {
          status: 404,
          message: `Unable to find booking with ID ${id}`
        };
      }
      const guest = event.attendees.find((_2) => _2.email === decodeURIComponent(email));
      if (!guest) {
        throw {
          status: 404,
          message: `Unable to find guest with email ${email}`
        };
      }
      guest.checked_in = _.query_params.state === "true";
      return guest;
    }
  });
  $s({
    path: "/api/staff/v1/bookings/:id/attendee/:email",
    metadata: {},
    method: "DELETE",
    callback: (_) => {
      const { id, email } = _.route_params;
      const event = MOCK_BOOKINGS.find((e2) => e2.id === id);
      if (!event) {
        throw {
          status: 404,
          message: `Unable to find booking with ID ${id}`
        };
      }
      event.attendees = event.attendees.filter((_2) => _2.email !== decodeURIComponent(email));
      return event;
    }
  });
  $s({
    path: "/api/staff/v1/bookings",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-booking-${predictableRandomInt(999)}`
      });
      MOCK_BOOKINGS.push(new_event);
      return new_event;
    }
  });
  const updateBooking = (id, data) => {
    const index = MOCK_BOOKINGS.findIndex((e2) => e2.id === id);
    if (index < 0)
      throw {
        status: 404,
        message: `Unable to find booking with ID ${id}`
      };
    const new_event = __spreadValues({}, data);
    MOCK_BOOKINGS.splice(index, 1, new_event);
    return new_event;
  };
  $s({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "PUT",
    callback: (req) => updateBooking(req.route_params.id, __spreadValues({}, req.body))
  });
  $s({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "PATCH",
    callback: (req) => updateBooking(req.route_params.id, __spreadValues({}, req.body))
  });
  $s({
    path: "/api/staff/v1/bookings/:id/approve",
    metadata: {},
    method: "POST",
    callback: (req) => updateBooking(req.route_params.id, __spreadProps(__spreadValues({}, req.body), {
      approved: true,
      rejected: false
    }))
  });
  $s({
    path: "/api/staff/v1/bookings/:id/reject",
    metadata: {},
    method: "POST",
    callback: (req) => updateBooking(req.route_params.id, __spreadProps(__spreadValues({}, req.body), {
      approved: false,
      rejected: true
    }))
  });
  $s({
    path: "/api/staff/v1/bookings/:id/check_in",
    metadata: {},
    method: "POST",
    callback: (req) => updateBooking(req.route_params.id, __spreadProps(__spreadValues({}, req.body), {
      checked_in: req.query_params.state === "true"
    }))
  });
  $s({
    path: "/api/staff/v1/bookings/:id",
    metadata: {},
    method: "DELETE",
    callback: (req) => {
      const index = MOCK_BOOKINGS.findIndex((e2) => e2.id === req.route_params.id);
      if (index < 0)
        throw {
          status: 404,
          message: `Unable to find booking with ID ${req.route_params.id}`
        };
      MOCK_BOOKINGS.splice(index, 1);
      return;
    }
  });
}

// libs/mocks/src/lib/api/catering.data.ts
var MOCK_MENU = [
  {
    id: "item-1",
    name: "Coffee",
    unit_price: 200,
    category: "Drinks",
    tags: ["drink", "Contains Nuts", "Contains Dairy"],
    options: [
      { id: "opt-1", name: "Cappacino", group: "type" },
      { id: "opt-2", name: "Latte", group: "type" },
      { id: "opt-3", name: "1 Sugar", group: "sugars", unit_price: 20 },
      { id: "opt-4", name: "2 Sugar", group: "sugars", unit_price: 20 },
      { id: "opt-5", name: "3 Sugar", group: "sugars", unit_price: 20 },
      { id: "opt-6", name: "4 Sugar", group: "sugars", unit_price: 20 }
    ]
  },
  {
    id: "item-2",
    name: "Soda",
    unit_price: 160,
    category: "Drinks",
    tags: ["drink"],
    options: [
      { id: "opt-1", name: "Pepsi", group: "type" },
      { id: "opt-2", name: "Sunkist", group: "type" },
      { id: "opt-3", name: "Solo", group: "type" },
      { id: "opt-4", name: "Dr Pepper", group: "type" }
    ]
  },
  { id: "item-3", name: "Water", unit_price: 100, category: "Drinks" },
  {
    id: "item-4",
    name: "Muffin",
    unit_price: 160,
    category: "Snacks",
    options: [
      { id: "opt-1", name: "Choc Chip", group: "type" },
      { id: "opt-2", name: "Banana", group: "type" },
      { id: "opt-3", name: "Blueberry", group: "type" }
    ]
  },
  {
    id: "item-5",
    name: "Cookies",
    unit_price: 400,
    category: "Snacks",
    options: [
      { id: "opt-1", name: "Choc Chip", group: "type" },
      { id: "opt-2", name: "Macadamia", group: "type" },
      { id: "opt-3", name: "Dark Choc", group: "type" }
    ]
  },
  {
    id: "item-6",
    name: "Fish & Chips",
    unit_price: 250,
    category: "Simple Meals",
    options: [
      {
        id: "opt-1",
        name: "Tomato Sauce",
        group: "sauce",
        unit_price: 30
      },
      { id: "opt-2", name: "BBQ Sauce", group: "sauce", unit_price: 35 },
      {
        id: "opt-3",
        name: "Tartare Sause",
        group: "sauce",
        unit_price: 40
      },
      {
        id: "opt-4",
        name: "Garlic Aoili Sauce",
        group: "sauce",
        unit_price: 50
      }
    ]
  },
  {
    id: "item-7",
    name: "Sandwich",
    unit_price: 300,
    category: "Simple Meals",
    options: [
      { id: "opt-1", name: "Ham & Cheese", group: "type" },
      { id: "opt-2", name: "Chicken", group: "type" },
      { id: "opt-3", name: "Fairy Bread", group: "type" }
    ]
  }
];
function generateCateringOrder(event) {
  const duration = differenceInMinutes(event.event_start, event.event_end);
  const mx = predictableRandomInt(MOCK_MENU.length);
  return {
    id: `order-${predictableRandomInt(999999)}`,
    event_id: event.id,
    invoice_number: `I${predictableRandomInt(999999)}`,
    charge_code: `C${predictableRandomInt(9999)}`,
    deliver_at: addMinutes(event.event_start * 1e3, predictableRandomInt(Math.floor(duration / 5)) * 5),
    notes: predictableRandomInt(99999999) % 2 === 0 ? "Test notes" : "",
    items: new Array(3).fill(0).map((_, idx) => __spreadProps(__spreadValues({}, MOCK_MENU[mx * idx % MOCK_MENU.length]), {
      options: [],
      quantity: predictableRandomInt(10, 1)
    }))
  };
}

// libs/mocks/src/lib/api/events.data.ts
var EVENT_TIME2 = setHours(startOfDay(Date.now()), 7);
var nextEventTime2 = (save = false) => {
  const next = addMinutes(EVENT_TIME2, (predictableRandomInt(8) + 1) * 15);
  if (save) {
    EVENT_TIME2 = next;
  }
  return getUnixTime(next);
};
var event_status = ["tentative", "confirmed", "cancelled"];
var randomStatus = () => {
  const rnd = predictableRandomInt(10);
  return rnd < 2 ? event_status[2] : rnd < 5 ? event_status[0] : event_status[1];
};
var MOCK_EVENTS = new Array(200).fill(0).map((_, index) => {
  const PEOPLE = MOCK_STAFF.concat(MOCK_GUESTS);
  let attendees = new Array(predictableRandomInt(8, 1)).fill(0).map(() => PEOPLE[predictableRandomInt(PEOPLE.length)]);
  attendees.sort((a, b) => (a.visit_expected ? 0 : -1) - (b.visit_expected ? 0 : -1));
  const space = MOCK_SPACES[predictableRandomInt(MOCK_SPACES.length)];
  attendees = attendees.concat(__spreadProps(__spreadValues({}, space), { resource: true }));
  if (predictableRandomInt(9999) % 2 === 0)
    attendees.unshift(ACTIVE_USER);
  else
    attendees.unshift(MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)]);
  attendees = unique(attendees, "email") || [{}];
  const event_start = nextEventTime2(true);
  const event_end = nextEventTime2();
  const meeting_url = predictableRandomInt(9999) % 3 === 0 ? "https://meet.place.tech" : "";
  return {
    id: `cal-event-${index}`,
    status: randomStatus(),
    host: attendees[0].email,
    calendar: "calendar_id",
    creator: "optional@fake.com",
    attendees: (unique(attendees, "email") || []).map((_2, idx) => __spreadProps(__spreadValues({}, _2), {
      organizer: idx === 0,
      checked_in: predictableRandomInt(99999) % 2 === 0,
      response_status: predictableRandomInt(99999) % 2 === 0 ? "accepted" : predictableRandomInt(99999) % 6 === 0 ? "declined" : "tentative"
    })),
    title: `Some Meeting ${index}`,
    body: `A Description`,
    private: false,
    event_start,
    event_end,
    timezone: "Australia/Sydney",
    all_day: false,
    location: `${space?.name}`,
    recurring: false,
    recurrence: {},
    attachments: {},
    system: space,
    meeting_url,
    meeting_id: meeting_url ? `m${predictableRandomInt(9999)}` : "",
    meeting_provider: meeting_url ? "PlaceOS" : "",
    extension_data: {
      catering: predictableRandomInt(99999) % 4 === 0 ? [
        generateCateringOrder({
          id: `cal-event-${index}`,
          event_start,
          event_end
        })
      ] : [],
      setup: predictableRandomInt(4) * 5,
      breakdown: predictableRandomInt(4) * 5
    }
  };
});
var event_spaces = {};
MOCK_EVENTS.forEach((event) => {
  if (!event_spaces[event.system?.id]) {
    event_spaces[event.system?.id] = [];
  }
  event_spaces[event.system?.id].push(event);
});

// libs/mocks/src/lib/api/calendars.mock.ts
var CALENDAR_MOCKS = registerMocks3();
function registerMocks3() {
  $s({
    path: "/api/staff/v1/calendars",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const user = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      const user2 = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      const user3 = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
      return [
        {
          id: ACTIVE_USER.email,
          summary: ACTIVE_USER.name,
          primary: true,
          can_edit: true,
          hidden: false
        },
        {
          id: user.email,
          summary: user.name,
          primary: false,
          can_edit: true,
          hidden: false
        },
        {
          id: user2.email,
          summary: user2.name,
          primary: false,
          can_edit: false,
          hidden: false
        },
        {
          id: user3.email,
          summary: user3.name,
          primary: false,
          can_edit: false,
          hidden: true
        }
      ];
    }
  });
  const handleSpaceAvailability = (request) => {
    const start = +request.query_params.period_start;
    const end = +request.query_params.period_end;
    const zones = (request.query_params.zone_ids || "").split(",").filter((i) => !!i);
    const systems = (request.query_params.system_ids || "").split(",").filter((i) => !!i);
    const spaces = MOCK_SPACES.filter((space) => zones.length ? zones.reduce((has, zone) => has && space.zones.includes(zone), true) : systems.length ? systems.includes(space.id) : true).filter((space) => {
      const bookings = MOCK_EVENTS.filter((event) => event.attendees.find((user) => user.id === space.id));
      for (const event of bookings) {
        if (timePeriodsIntersect(start, end, event.event_start, event.event_end))
          return false;
      }
      return true;
    });
    return spaces;
  };
  $s({
    path: "/api/staff/v1/calendars/availability",
    metadata: {},
    method: "GET",
    callback: (request) => handleSpaceAvailability(request).map((_) => ({
      resource: _
    }))
  });
  $s({
    path: "/api/staff/v1/calendars/free_busy",
    metadata: {},
    method: "GET",
    callback: (request) => handleSpaceAvailability(request).map((_) => ({
      resource: _
    }))
  });
}

// libs/mocks/src/lib/api/events.mock.ts
var EVENT_MOCKS = registerMocks4();
function registerMocks4() {
  $s({
    path: "/api/staff/v1/events",
    metadata: {},
    method: "GET",
    callback: (_) => {
      let events = MOCK_EVENTS;
      if (!_.query_params.zone_ids) {
        events = events.filter((event) => !!event.attendees.find((user) => user.email === ACTIVE_USER.email));
      }
      if (_.query_params.period_start) {
        events = events.filter((e2) => timePeriodsIntersect(+_.query_params.period_start, +_.query_params.period_end, e2.event_start, e2.event_end));
      }
      return events;
    }
  });
  $s({
    path: "/api/staff/v1/events",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const new_event = __spreadProps(__spreadValues({}, request.body), {
        id: `-cal-event-${predictableRandomInt(999)}`
      });
      new_event.attendees = [
        MOCK_STAFF.find((_) => _.email === new_event.host),
        ...new_event.attendees || []
      ];
      new_event.attendees.forEach((user) => {
        if (user.zones)
          user.resource = true;
      });
      if (new_event.system) {
        new_event.attendees = [
          ...new_event.attendees || [],
          __spreadProps(__spreadValues({}, new_event.system), { resource: true })
        ];
      }
      MOCK_EVENTS.push(new_event);
      const system = Xo(new_event.system?.id);
      system?.Bookings[0]?.$poll_bookings();
      return new_event;
    }
  });
  $s({
    path: "/api/staff/v1/events/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const item = MOCK_EVENTS.find((event) => event.id === request.route_params.id);
      if (item) {
        return item;
      }
      throw { status: 404, message: "Event not found" };
    }
  });
  $s({
    path: "/api/staff/v1/events/:id",
    metadata: {},
    method: "DELETE",
    callback: (request) => {
      const index = MOCK_EVENTS.findIndex((event) => event.id === request.route_params.id);
      if (index > 0) {
        if (MOCK_EVENTS[index].host === ACTIVE_USER.email) {
          MOCK_EVENTS.splice(index, 1);
        } else {
          const user = MOCK_EVENTS[index].attendees.find((_) => _.email === ACTIVE_USER.email);
          user.response_status = "declined";
        }
        return;
      }
      throw { status: 404, message: "Event not found" };
    }
  });
  $s({
    path: "/api/staff/v1/events/:id",
    metadata: {},
    method: "PATCH",
    callback: (request) => {
      const index = MOCK_EVENTS.findIndex((event) => event.id === request.route_params.id);
      if (index >= 0) {
        return MOCK_EVENTS.splice(index, 1, request.body);
      }
      throw { status: 404, message: "Event not found" };
    }
  });
  $s({
    path: "/api/staff/v1/events/:id/guests/:email/checkin",
    metadata: {},
    method: "POST",
    callback: (request) => {
      const event = MOCK_EVENTS.find((event2) => event2.id === request.route_params.id);
      if (event) {
        const checked_in = event.extension_data.checked_in || [];
        event.extension_data.checked_in = checked_in.concat([
          request.route_params.email
        ]);
        return event;
      }
      throw { status: 404, message: "Guest not found" };
    }
  });
}

// libs/mocks/src/lib/api/surveys.mock.ts
var SURVEY_MOCKS = registerMocks5();
var MOCK_SURVEYS = new Array(20).fill(0).map(() => createMockSurvey());
var MOCK_SURVEY_QUESTIONS = new Array(20).fill(0).map(() => createMockSurveyQuestion());
var MOCK_SURVEY_ANSWERS = flatten(MOCK_SURVEYS.map((_) => new Array(20).fill(0).map(() => createMockSurveyAnswer(_))));
function createMockSurvey(survey) {
  const id = predictableRandomInt(999999, 0);
  const bld = MOCK_BUILDINGS[predictableRandomInt(MOCK_BUILDINGS.length, 0)];
  return __spreadValues({
    id,
    title: `Survey ${id}`,
    description: "",
    trigger: "none",
    pages: [],
    zone_id: bld?.id,
    building_id: bld?.id,
    created_at: getUnixTime(Date.now()),
    updated_at: getUnixTime(Date.now())
  }, survey || {});
}
function createMockSurveyAnswer(survey) {
  const id = predictableRandomInt(999999, 0);
  return {
    id,
    survey_id: survey.id,
    question_id: predictableRandomInt(999999, 0),
    answer_json: predictableRandomInt(10, 0),
    type: "rating",
    created_at: getUnixTime(Date.now()),
    updated_at: getUnixTime(Date.now())
  };
}
function createMockSurveyQuestion() {
  const id = predictableRandomInt(999999, 0);
  return {
    id,
    type: "text",
    title: `Question ${id}`,
    options: {},
    required: false,
    choices: {},
    tags: [],
    deleted: false,
    created_at: getUnixTime(Date.now()),
    updated_at: getUnixTime(Date.now())
  };
}
function registerMocks5() {
  $s({
    path: "/api/staff/v1/surveys",
    metadata: {},
    method: "GET",
    callback: (request) => {
      return request.query_params?.building_id ? MOCK_SURVEYS.filter((_) => _.zone_id === request.query_params.building_id) : MOCK_SURVEYS;
    }
  });
  $s({
    path: "/api/staff/v1/surveys/answers",
    metadata: {},
    method: "GET",
    callback: (request) => {
      return request.query_params?.survey_id ? MOCK_SURVEY_ANSWERS.filter((_) => _.survey_id === request.query_params.survey_id) : MOCK_SURVEY_ANSWERS;
    }
  });
  $s({
    path: "/api/staff/v1/surveys/questions",
    metadata: {},
    method: "GET",
    callback: (request) => {
      return request.query_params?.id ? MOCK_SURVEY_QUESTIONS.filter((_) => _.id === +request.query_params.id) : MOCK_SURVEY_QUESTIONS;
    }
  });
  $s({
    path: "/api/staff/v1/surveys/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      console.log("Surveys:", MOCK_SURVEYS);
      const survey = MOCK_SURVEYS.find((_) => _.id === +request.route_params.id);
      if (!survey)
        throw { status: 404 };
      return survey;
    }
  });
}

// libs/mocks/src/lib/realtime/camera.ts
var CameraTilt;
(function(CameraTilt2) {
  CameraTilt2[CameraTilt2["Down"] = 0] = "Down";
  CameraTilt2[CameraTilt2["Up"] = 1] = "Up";
  CameraTilt2[CameraTilt2["Stop"] = 2] = "Stop";
})(CameraTilt || (CameraTilt = {}));
var CameraPan;
(function(CameraPan2) {
  CameraPan2[CameraPan2["Left"] = 0] = "Left";
  CameraPan2[CameraPan2["Right"] = 1] = "Right";
  CameraPan2[CameraPan2["Stop"] = 2] = "Stop";
})(CameraPan || (CameraPan = {}));
var CameraModule = class {
  constructor(_) {
    this.presets = ["Preset One", "Preset 2", "Preset Three"];
  }
  $pan(dir) {
  }
  $tilt(tilt) {
  }
  $recall(name) {
  }
  $save_preset(name) {
  }
};
var createCameraModule = (space, overrides = {}) => new CameraModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/capture.ts
var interval;
var CaptureModule = class {
  constructor(_) {
    this.status = "stopped";
    this.live = false;
    this.remaining = randomInt(24 * 60 * 60);
  }
  $start() {
    this.status = "playing";
    interval = setInterval(() => {
      if (this.remaining < 1)
        clearInterval(interval);
      this.remaining = this.remaining - 1;
      this.current = this.current + 1;
    }, 3e3);
  }
  $pause() {
    this.status = "paused";
    clearInterval(interval);
  }
  $resume() {
    this.$start();
  }
  $stop() {
    this.status = "stopped";
    this.current = 0;
    clearInterval(interval);
  }
};
var createCaptureModule = (space, overrides = {}) => new CaptureModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/contact-tracing.ts
var CONTACT_EVENTS = {};
var filterFn = (start, end) => (itm) => {
  return timePeriodsIntersect(start, end, itm.contact_time, itm.contact_time);
};
var ContactTracingModule = class {
  constructor(_) {
  }
  $close_contacts(email, user, start, end) {
    if (!CONTACT_EVENTS[email])
      CONTACT_EVENTS[email] = [];
    if (CONTACT_EVENTS[email].length)
      return CONTACT_EVENTS[email].filter(filterFn(start, end));
    const events = [];
    const beginning = addDays(start * 1e3, -10);
    const ending = addDays(end * 1e3, 10);
    let date = new Date(beginning);
    while (isBefore(date, ending)) {
      new Array(randomInt(4)).fill(0).map((_) => ({
        mac_address: randomString(10),
        contact_time: getUnixTime(setHours(date, randomInt(11) + 7)),
        duration: randomInt(60) * 60,
        username: MOCK_STAFF[randomInt(MOCK_STAFF.length)].email
      })).forEach((e2) => events.push(e2));
      date = addDays(date, 1);
    }
    CONTACT_EVENTS[email] = events;
    return CONTACT_EVENTS[email].filter(filterFn(start, end));
  }
};
var createContactTracingModule = (space, overrides = {}) => new ContactTracingModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/control.ts
var RoomModule = class {
  constructor(_data) {
    this.help = {
      help: {
        title: "Help",
        content: `
# Using the asset browser

## Activating the menu
The 5 finger touch can be actvated by placing 4 fingers and your thumb on the screen, or quickly double-tapping the screen. Activation through double tap will leave the menu on-screen. To close tap the \u2018X\u2019.

## Selecting a menu item
Leaving at least one finger on the screen, drag your finger to the icon to select.

## Home Menu
The home menu allows you to access files and navigate to content and presentations via the Launcher.

## Connect and stream your laptop or access the CMS to add files
Plug your laptop into the HDMI to stream it to the screen, or access the CMS to add your own content and create custom presentations.

<video></video>

1. Test1
2. Test2
3. Test3
            `
      },
      "laptop-help": {
        icon: "web_asset",
        title: "Asset Browser",
        content: `# Test 2`
      }
    };
    this.tabs = [
      {
        icon: "laptop",
        name: "Laptop",
        type: "Laptop"
      },
      {
        icon: "call",
        name: "VC",
        inputs: ["VidConf_1"],
        help: "vidconf-help",
        controls: "vidconf-controls"
      }
    ];
    this.volume = 0;
    this.name = _data.name || "Test Module";
    this.connected = _data.connected ?? true;
    this.active = _data.active || false;
    this.input_list = _data.input_list;
    this.output_list = _data.output_list;
    this.env_sources = _data.env_sources || [];
    this.inputs = Object.keys(this.input_list || {}) || [];
    this.outputs = Object.keys(this.output_list || {}) || [];
    this.available_outputs = this.outputs;
    const types = unique(this.env_sources.map((_) => _.type)) || [];
    types.forEach((t) => this[`${t}`] = this.env_sources.filter((_) => _.type === t).map((_) => _.id));
    this.env_sources.forEach((source) => this[`${source.type}/${source.id}`] = source);
    this.inputs.forEach((key) => this[`input/${key}`] = this.input_list[key]);
    this.outputs.forEach((key) => this[`output/${key}`] = this.output_list[key]);
  }
  $power(state = true) {
    this.active = state;
  }
  /** Shares a signal source with the room and any connected remote participants. */
  $share() {
  }
  /**
   * Connect a signal source to a signal output, or set of outputs. Any intermediate
   * device interactions are handled internally. For example, on a system using a small
   * presentation switcher and a display, routing a laptop input will select the
   * appropriate input on the switcher, and select the appropriate input on the display.
   *
   * This includes all routable signal types - in addition to the above example, this may
   * be interacting with an audio DSP to add a microphone feed to an output zone, or
   * connecting a USB HID input device with a specific output.
   **/
  $route(input, output) {
    if (this.inputs.includes(input) && this.outputs.includes(output)) {
      this.$updateState(input, {
        routes: unique([
          ...this.input_list[input].routes || [],
          output
        ])
      });
      this.$updateState(output, {
        source: input,
        following: input
      });
    }
  }
  /**
   * Remove a signal source from a signal output.
   * Predominantly intended for outputs that support more than one simultaneous input source
   * (mixed audio zone, or display capable of compositing multiple video sources).
   **/
  $unroute() {
  }
  /**
   * Establish a call (either phone or video) with a remote participant.
   * This may be a peer-to-peer connection or a wider group via an external bridging service.
   **/
  $connect() {
  }
  /** End a call with a remote participant. */
  $disconnect() {
  }
  /**
   * Bind the current system to another PlaceOS controlled space, relinquishing local control.
   * This may be used for an education pod that pairs with a wider classroom or a room being
   * used as an overflow from a primary event space.
   **/
  $link() {
  }
  /**
   * Join the current system with another PlaceOS controlled space, sharing control and signal IO.
   * Examples of usage would be a set of rooms with moveable walls. N-way merges supported.
   **/
  $merge() {
  }
  /** Separate from a linked or merged system. */
  $split() {
  }
  /**
   * Display an alert visible to participants in the space. This may occur as a screen overlay,
   * on a control interface, a bot post in a chat space associated with the current meeting or
   * other modalities depending on hardware capability.
   **/
  $notify() {
  }
  /**
   * Place the room into a predefined operation mode. This may include executing an arbitrary
   * set of device interactions, changing metadata associated with the system itself (changing
   * available input or output nodes), or other configurable actions designed to transition
   * the space to a specific state.
   **/
  $preset() {
  }
  /**
   * Set the volume for a signal node in the space. This can include outputs as well as inputs
   * where supported (e.g. microphone). If unspecified, default is to interact with a ‘primary’
   * output node.
   **/
  $volume(value, source = "all") {
    if (source === "all") {
      this.volume = value;
    }
  }
  /** Interact with audio muting on supporting signal nodes within the space. */
  $mute(state = true, source = "all") {
    this.$updateState(source, { mute: state });
  }
  /**
   * Activates or deactivates a signal mute for the associated IO. If this is not possible,
   * (e.g. unsupported by the device) an error is returned.
   **/
  $unmute(source = "all") {
    this.$mute(false, source);
  }
  /**
   * Wrapper for an arbitrary set of control points defined in system configuration.
   * Each of these may map to control options available on a sibling module and take one of two forms:
   *  - Continuous value within a range (temperature set point 16.0...28.0 degrees, lighting level 0...100)
   *  - Set of possible states (lighting high/med/low, blind up/down, electrochromic glass clear/opaque)
   *
   * System state provides the ability to introspect configured points for both control limits and current value.
   **/
  $environment(id, state) {
    const source = this.env_sources.find((_) => _.id === id);
    if (source) {
      this[`${source.type}/${source.id}`] = __spreadProps(__spreadValues({}, source), { state });
    }
  }
  /** Locks an IO node. Prevents any route changes that include this until unlocked. */
  $lock(source) {
    this.$updateState(source, { locked: true });
  }
  /** Unlocks an IO node. */
  $unlock(source) {
    this.$updateState(source, { locked: false });
  }
  $updateState(source, data) {
    if (this[`input/${source}`]) {
      this[`input/${source}`] = __spreadValues(__spreadValues({}, this[`input/${source}`]), data);
      this.input_list[source] = __spreadValues(__spreadValues({}, this[`input/${source}`]), data);
    } else if (this[`output/${source}`]) {
      this[`output/${source}`] = __spreadValues(__spreadValues({}, this[`output/${source}`]), data);
      this.output_list[source] = __spreadValues(__spreadValues({}, this[`output/${source}`]), data);
    }
  }
};
var input_list = {
  Mic1: {
    name: "Lectern Mic",
    type: "Microphone",
    mod: "Microphone_1"
  },
  Mic2: {
    name: "Lapel Mic",
    type: "Microphone",
    mod: "Microphone_2"
  },
  Mic3: {
    name: "Handheld Mic",
    type: "Microphone",
    mod: "Microphone_3"
  },
  PC1: {
    name: "PC-1",
    type: "PC"
  },
  PC2: {
    name: "PC-2",
    type: "PC"
  },
  PC3: {
    name: "PC-3",
    type: "PC"
  },
  PC4: {
    name: "PC-4",
    type: "PC"
  },
  HDMI: {
    name: "Laptop HDMI",
    type: "Laptop"
  },
  VGA: {
    name: "Laptop VGA",
    type: "Laptop"
  },
  Camera1: {
    name: "Camera Rear",
    type: "Camera",
    mod: "Camera_1"
  },
  Camera2: {
    name: "Camera Front",
    type: "Camera",
    mod: "Camera_2"
  },
  Camera3: {
    name: "Camera Rear 2",
    type: "Camera",
    mod: "Camera_3"
  },
  Camera4: {
    name: "Camera Front 2",
    type: "Camera",
    mod: "Camera_4"
  },
  TV1: {
    name: "IPTV 1",
    type: "TV",
    mod: "IPTV_1"
  },
  VC1: {
    name: "Video Conference 1",
    type: "VC",
    mod: "VidConf_1"
  }
};
var output_list = {
  Display1: {
    name: "Screen 1",
    type: "Display",
    source: "PC1",
    mod: "Display_1"
  },
  Display2: {
    name: "Screen 2",
    type: "Display",
    mod: "Display_2"
  },
  Display5: {
    name: "TV 1",
    type: "Display",
    mod: "Display_5",
    source: "TV1"
  }
};
var env_sources = [
  {
    id: "light1",
    name: "Lighting",
    type: "lights",
    states: ["Off", "Presentation", "Meeting", "Full"],
    state: "Off"
  },
  {
    id: "blind1",
    name: "Blinds",
    type: "blinds",
    states: ["Off", "Presentation", "Meeting"],
    state: "Off"
  },
  {
    id: "screen1",
    name: "Screen",
    type: "screen",
    states: ["Up", "Down"],
    state: "Down"
  }
];
var createSystemModule = (space, overrides = {}) => new RoomModule(__spreadValues(__spreadProps(__spreadValues({}, space), {
  input_list,
  output_list,
  env_sources
}), overrides));

// node_modules/ts-md5/dist/esm/md5.js
var Md5 = class _Md5 {
  constructor() {
    this._dataLength = 0;
    this._bufferLength = 0;
    this._state = new Int32Array(4);
    this._buffer = new ArrayBuffer(68);
    this._buffer8 = new Uint8Array(this._buffer, 0, 68);
    this._buffer32 = new Uint32Array(this._buffer, 0, 17);
    this.start();
  }
  static hashStr(str, raw = false) {
    return this.onePassHasher.start().appendStr(str).end(raw);
  }
  static hashAsciiStr(str, raw = false) {
    return this.onePassHasher.start().appendAsciiStr(str).end(raw);
  }
  static _hex(x) {
    const hc = _Md5.hexChars;
    const ho = _Md5.hexOut;
    let n2;
    let offset;
    let j;
    let i;
    for (i = 0; i < 4; i += 1) {
      offset = i * 8;
      n2 = x[i];
      for (j = 0; j < 8; j += 2) {
        ho[offset + 1 + j] = hc.charAt(n2 & 15);
        n2 >>>= 4;
        ho[offset + 0 + j] = hc.charAt(n2 & 15);
        n2 >>>= 4;
      }
    }
    return ho.join("");
  }
  static _md5cycle(x, k) {
    let a = x[0];
    let b = x[1];
    let c = x[2];
    let d = x[3];
    a += (b & c | ~b & d) + k[0] - 680876936 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[1] - 389564586 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[2] + 606105819 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[4] - 176418897 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[7] - 45705983 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[10] - 42063 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[13] - 40341101 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & d | c & ~d) + k[1] - 165796510 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[11] + 643717713 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[0] - 373897302 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[5] - 701558691 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[10] + 38016083 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[15] - 660478335 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[4] - 405537848 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[9] + 568446438 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[3] - 187363961 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[2] - 51403784 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b ^ c ^ d) + k[5] - 378558 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[14] - 35309556 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[7] - 155497632 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[13] + 681279174 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[0] - 358537222 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[3] - 722521979 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[6] + 76029189 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[9] - 640364487 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[12] - 421815835 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[15] + 530742520 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[2] - 995338651 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    x[0] = a + x[0] | 0;
    x[1] = b + x[1] | 0;
    x[2] = c + x[2] | 0;
    x[3] = d + x[3] | 0;
  }
  /**
   * Initialise buffer to be hashed
   */
  start() {
    this._dataLength = 0;
    this._bufferLength = 0;
    this._state.set(_Md5.stateIdentity);
    return this;
  }
  // Char to code point to to array conversion:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
  /**
   * Append a UTF-8 string to the hash buffer
   * @param str String to append
   */
  appendStr(str) {
    const buf8 = this._buffer8;
    const buf32 = this._buffer32;
    let bufLen = this._bufferLength;
    let code;
    let i;
    for (i = 0; i < str.length; i += 1) {
      code = str.charCodeAt(i);
      if (code < 128) {
        buf8[bufLen++] = code;
      } else if (code < 2048) {
        buf8[bufLen++] = (code >>> 6) + 192;
        buf8[bufLen++] = code & 63 | 128;
      } else if (code < 55296 || code > 56319) {
        buf8[bufLen++] = (code >>> 12) + 224;
        buf8[bufLen++] = code >>> 6 & 63 | 128;
        buf8[bufLen++] = code & 63 | 128;
      } else {
        code = (code - 55296) * 1024 + (str.charCodeAt(++i) - 56320) + 65536;
        if (code > 1114111) {
          throw new Error("Unicode standard supports code points up to U+10FFFF");
        }
        buf8[bufLen++] = (code >>> 18) + 240;
        buf8[bufLen++] = code >>> 12 & 63 | 128;
        buf8[bufLen++] = code >>> 6 & 63 | 128;
        buf8[bufLen++] = code & 63 | 128;
      }
      if (bufLen >= 64) {
        this._dataLength += 64;
        _Md5._md5cycle(this._state, buf32);
        bufLen -= 64;
        buf32[0] = buf32[16];
      }
    }
    this._bufferLength = bufLen;
    return this;
  }
  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  appendAsciiStr(str) {
    const buf8 = this._buffer8;
    const buf32 = this._buffer32;
    let bufLen = this._bufferLength;
    let i;
    let j = 0;
    for (; ; ) {
      i = Math.min(str.length - j, 64 - bufLen);
      while (i--) {
        buf8[bufLen++] = str.charCodeAt(j++);
      }
      if (bufLen < 64) {
        break;
      }
      this._dataLength += 64;
      _Md5._md5cycle(this._state, buf32);
      bufLen = 0;
    }
    this._bufferLength = bufLen;
    return this;
  }
  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  appendByteArray(input) {
    const buf8 = this._buffer8;
    const buf32 = this._buffer32;
    let bufLen = this._bufferLength;
    let i;
    let j = 0;
    for (; ; ) {
      i = Math.min(input.length - j, 64 - bufLen);
      while (i--) {
        buf8[bufLen++] = input[j++];
      }
      if (bufLen < 64) {
        break;
      }
      this._dataLength += 64;
      _Md5._md5cycle(this._state, buf32);
      bufLen = 0;
    }
    this._bufferLength = bufLen;
    return this;
  }
  /**
   * Get the state of the hash buffer
   */
  getState() {
    const s = this._state;
    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [s[0], s[1], s[2], s[3]]
    };
  }
  /**
   * Override the current state of the hash buffer
   * @param state New hash buffer state
   */
  setState(state) {
    const buf = state.buffer;
    const x = state.state;
    const s = this._state;
    let i;
    this._dataLength = state.length;
    this._bufferLength = state.buflen;
    s[0] = x[0];
    s[1] = x[1];
    s[2] = x[2];
    s[3] = x[3];
    for (i = 0; i < buf.length; i += 1) {
      this._buffer8[i] = buf.charCodeAt(i);
    }
  }
  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  end(raw = false) {
    const bufLen = this._bufferLength;
    const buf8 = this._buffer8;
    const buf32 = this._buffer32;
    const i = (bufLen >> 2) + 1;
    this._dataLength += bufLen;
    const dataBitsLen = this._dataLength * 8;
    buf8[bufLen] = 128;
    buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
    buf32.set(_Md5.buffer32Identity.subarray(i), i);
    if (bufLen > 55) {
      _Md5._md5cycle(this._state, buf32);
      buf32.set(_Md5.buffer32Identity);
    }
    if (dataBitsLen <= 4294967295) {
      buf32[14] = dataBitsLen;
    } else {
      const matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
      if (matches === null) {
        return;
      }
      const lo = parseInt(matches[2], 16);
      const hi = parseInt(matches[1], 16) || 0;
      buf32[14] = lo;
      buf32[15] = hi;
    }
    _Md5._md5cycle(this._state, buf32);
    return raw ? this._state : _Md5._hex(this._state);
  }
};
Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
Md5.hexChars = "0123456789abcdef";
Md5.hexOut = [];
Md5.onePassHasher = new Md5();
if (Md5.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592") {
  throw new Error("Md5 self test failed.");
}

// libs/mocks/src/lib/realtime/desks.ts
var MockAreaManagementModule = class {
  constructor() {
    this.overview = {};
    this.emergency_contacts = {
      "First Aid": MOCK_STAFF.filter((_) => predictableRandomInt(9999) % 5 === 0),
      "Fire Warden": MOCK_STAFF.filter((_) => predictableRandomInt(9999) % 5 === 0)
    };
  }
  $locate_user(email, username) {
  }
  $update() {
    updateLocations(this, MOCK_LEVELS);
  }
};
var MAC_LOOKUP = {};
var MockLocationServicesModule = class {
  $check_ownership_of(mac_address) {
    if (!MAC_LOOKUP[mac_address]) {
      const staff = randomInt(999999) % 3 === 0 ? MOCK_STAFF[randomInt(MOCK_STAFF.length)] : { name: "" };
      MAC_LOOKUP[mac_address] = { assigned_to: staff.name };
    }
    return MAC_LOOKUP[mac_address];
  }
  $locate_user(email, username) {
    return [
      {
        type: "wireless",
        position: { x: 0.5, y: 0.5 },
        level: MOCK_LEVELS[randomInt(MOCK_LEVELS.length)].id,
        priority: 0
      }
    ];
  }
};
function padZero(no2, len = 3) {
  let str = `${no2}`;
  while (str.length < len) {
    str = "0" + str;
  }
  return str;
}
function createAreaManagementModule(space, overrides = {}) {
  const mod = new MockAreaManagementModule();
  for (const lvl of MOCK_LEVELS) {
    mod.overview[lvl.id] = {
      desk_count: 100,
      desk_usage: 0,
      device_capacity: 100,
      device_count: 0,
      estimated_people: 0,
      percentage_use: 0,
      recommendation: 1e4
    };
    mod[`${lvl.id}:desk_ids`] = new Array(mod.overview[lvl.id].desk_count).fill(0).map((_, idx) => `table-${lvl.number}.${padZero(idx)}`);
    mod[`${lvl.id}`] = { value: [] };
    mod[`${lvl.id}:areas`] = {
      value: [
        {
          area_id: "zone-10.B",
          count: randomInt(100),
          name: ".L1 IFS IT"
        },
        {
          area_id: "zone-10.A",
          count: randomInt(100),
          name: ".L1 IFS IT"
        },
        {
          area_id: "zone-10.C",
          count: randomInt(50),
          name: ".L1 IFS IT"
        },
        {
          area_id: "zone-02.D",
          count: randomInt(100),
          name: "Quite Work"
        },
        {
          area_id: "zone-02.B",
          count: randomInt(100),
          name: "Meeting Area A"
        },
        {
          area_id: "zone-02.A",
          count: randomInt(100),
          name: "Meeting Area B"
        },
        {
          area_id: "zone-02.C",
          count: randomInt(50),
          name: "Casual Work"
        }
      ]
    };
  }
  return mod;
}
function updateLocations(mod, levels) {
  for (const lvl of levels) {
    mod[lvl.id] = {
      value: new Array(predictableRandomInt(20)).fill(0).map(() => generateLocation(lvl, mod[`${lvl.id}:desk_ids`]))
    };
    for (const area of mod[`${lvl.id}:areas`].value) {
      area.count = randomInt(100);
    }
    mod[`${lvl.id}:areas`] = __spreadValues({}, mod[`${lvl.id}:areas`]);
  }
}
function generateLocation(lvl, desks, users = MOCK_STAFF) {
  const fixed = predictableRandomInt(9999) % 3 === 0;
  const usr = (users || [])[predictableRandomInt((users || [])?.length)]?.email;
  return fixed ? {
    location: "desk",
    at_location: predictableRandomInt(9999) % 2 !== 0,
    map_id: desks[predictableRandomInt(desks.length)],
    mac: Md5?.hashStr(usr || ""),
    level: lvl.id,
    building: lvl.parent_id
  } : {
    location: "wireless",
    coordinates_from: "bottom-left",
    x: predictableRandomInt(1e3) / 10,
    y: predictableRandomInt(1e3) / 10,
    lon: 55.27476066828535,
    lat: 25.20106100633537,
    s2_cell_id: "3e5f4281459c",
    mac: Md5?.hashStr(usr || ""),
    variance: 9.62534032222287,
    last_seen: Math.floor((/* @__PURE__ */ new Date()).valueOf() / 1e3),
    map_width: 100,
    map_height: 100
  };
}

// libs/mocks/src/lib/realtime/display.ts
var DisplayModule = class {
  $mute(state = true) {
    this.mute = state;
  }
  $volume(value) {
    this.volume = value;
  }
  constructor(_) {
    this.volume = randomInt(100);
  }
};
var createDisplayModule = (space, overrides = {}) => new DisplayModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/events.ts
var MockBookingModule = class {
  constructor(space, _data) {
    this.time_zone = "Australia/Sydney";
    this.disable_book_now = false;
    this.disable_end_meeting = false;
    this.bookings = [];
    this.pending_period = 0;
    this.pending_before = 0;
    this.control_ui = "";
    this.catering_ui = "";
    this.last_booking_started = 0;
    this.current_booking = null;
    this.next_booking = null;
    this.room_image = "assets/boardroom.jpg";
    this.status = "free";
    this._space = null;
    this._space = space;
  }
  /** Start the meeting at the given time */
  $start_meeting(t) {
    this.last_booking_started = t;
  }
  /** End the meeting at the given time */
  $end_meeting(t) {
  }
  /** Book meeting for the current time */
  $book_now(len, t, o) {
  }
  $poll_bookings() {
    updateBookings(this._space, this);
  }
};
var createBookingsModule = (space, overrides = {}) => new MockBookingModule(space, overrides);
function updateBookings(space, mod) {
  const bookings = MOCK_EVENTS.filter((event) => event.attendees?.find((u7) => u7.email === space.email || u7.id === space.id || event.system?.id === space.id)) || [];
  bookings.sort((a, b) => a.event_start - b.event_start);
  mod.bookings = bookings;
  mod.current_booking = bookings.find((_) => timePeriodsIntersect(Date.now(), Date.now(), _.event_start * 1e3, _.event_end * 1e3));
  mod.next_booking = bookings.find((_) => _.event_start * 1e3 > Date.now());
  const date = /* @__PURE__ */ new Date();
  const { current_booking, next_booking } = mod;
  const start = new Date((current_booking || next_booking)?.event_start);
  const pending = timePeriodsIntersect(date.valueOf(), date.valueOf(), subSeconds(start, mod.pending_before).valueOf(), addSeconds(start, mod.pending_period).valueOf());
  mod.status = space?.bookable ? current_booking ? "busy" : pending ? "pending" : "free" : "not-bookable";
}

// libs/mocks/src/lib/realtime/locker-locations.ts
var LockerLocationsModule = class {
  constructor(data) {
  }
  $lockers_allocated_to_me(...args) {
    return [
      {
        location: "locker",
        bank_id: "977cb758-4e42-4292-848a-4821f2fb4d74",
        locker_id: "adda7802-dfd7-467c-b369-d73394ad7084",
        locker_name: "0.105",
        allocated: true,
        group_id: "6c246e35-4a73-475a-8725-0676d78167f4"
      }
    ];
  }
};
var createLockerLocationsModule = (details, overrides = {}) => new LockerLocationsModule(__spreadValues(__spreadValues({}, details), overrides));

// libs/mocks/src/lib/realtime/meeting.ts
var MeetingPushModule = class {
  constructor(data) {
    this.supported_meeting_url = "https://meet.";
  }
  $econtrol(...args) {
  }
};
var createMeetingPushModule = (details, overrides = {}) => new MeetingPushModule(__spreadValues(__spreadValues({}, details), overrides));

// libs/mocks/src/lib/realtime/microphone.ts
var MicrophoneModule = class {
  $mute(state = true) {
    this.mute = state;
  }
  $volume(value) {
    this.volume = value;
  }
  constructor(_) {
    this.volume = randomInt(100);
  }
};
var createMicrophoneModule = (space, overrides = {}) => new MicrophoneModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/payments.ts
var PaymentsModule = class {
  $list_payment_methods(type) {
  }
  $add_payment_method(type, details) {
  }
  $get_product_prices(id, period) {
    return [12e3, 60];
  }
  $create_payment_intent(amount, source) {
    return randomString(12);
  }
  $confirm_payment_intent(id) {
  }
  $cancel_payment_intent(id) {
  }
  $create_customer(...args) {
    return `stripe-${randomInt(9999999, 1e6)}`;
  }
  constructor(_) {
  }
};
var createPaymentsModule = (space, overrides = {}) => new PaymentsModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/realtime/video-conference.ts
var VideoConferenceModule = class {
  $show_camera_pip(visible) {
    this.selfview = visible;
  }
  $mic_mute(visible) {
    this.mic_mute = visible;
  }
  $presentation_mode(state) {
    this.presentation_mode = state;
  }
  $hangup() {
  }
  $call_place_on_hold() {
    for (const key in this.calls) {
      if (this.calls[key].Status) {
        this.calls[key].Status = "OnHold";
        this.calls = __spreadValues({}, this.calls);
        return;
      }
    }
  }
  $call_resume() {
    for (const key in this.calls) {
      if (this.calls[key].Status) {
        this.calls[key].Status = "Idle";
        this.calls = __spreadValues({}, this.calls);
        return;
      }
    }
  }
  $video_layout(layout) {
    this.video_layout = layout;
  }
  $dtmf_send(digit) {
  }
  $dial(dial_number) {
    return new Promise((r2) => setTimeout(() => r2(), 1e3));
  }
  constructor(_) {
    this.mic_mute = false;
    this.selfview = false;
    this.video_layout = "Auto";
    this.presentation_mode = "None";
    this.calls = {
      test: {
        Status: "Connected"
      }
    };
  }
};
var createVideoConferenceModule = (space = {}, overrides = {}) => new VideoConferenceModule(__spreadValues(__spreadValues({}, space), overrides));

// libs/mocks/src/lib/systems-bindings.mock.ts
function createSystem(space) {
  ka(space.id, {
    System: [createSystemModule(space)],
    Bookings: [createBookingsModule(space)],
    ContactTracing: [createContactTracingModule(space)],
    AreaManagement: [createAreaManagementModule(space)],
    LocationServices: [new MockLocationServicesModule()],
    Camera: new Array(10).fill(0).map((_) => createCameraModule(space)),
    Display: new Array(10).fill(0).map((_) => createDisplayModule(space)),
    Microphone: new Array(10).fill(0).map((_) => createMicrophoneModule(space)),
    Capture: [createCaptureModule(space)],
    MeetingPush: [createMeetingPushModule()],
    VidConf: [createVideoConferenceModule()],
    Payment: [createPaymentsModule(space)],
    LockerLocations: [createLockerLocationsModule()]
  });
  const system = Xo(space.id);
  system.Bookings[0].$poll_bookings();
  setInterval(() => system.Bookings[0].$poll_bookings(), 30 * 1e3);
  system.AreaManagement[0].$update();
  setInterval(() => system.AreaManagement[0].$update(), 30 * 1e3);
}

// libs/mocks/src/lib/api/systems.mock.ts
var SYSTEM_MOCKS = registerMocks6();
function registerMocks6() {
  MOCK_SPACES.forEach((space, index) => createSystem(space));
  $s({
    path: "/api/engine/v2/systems",
    metadata: {},
    method: "GET",
    callback: (request) => {
      return request.query_params?.zone_id ? MOCK_SPACES.filter((_) => _.zones.includes(request.query_params.zone_id)) : MOCK_SPACES;
    }
  });
  $s({
    path: "/api/engine/v2/systems/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const space = MOCK_SPACES.find((_) => _.id === request.route_params.id);
      if (!space)
        throw { status: 404 };
      return space;
    }
  });
}

// libs/mocks/src/lib/api/users.mock.ts
var USER_MOCKS = registerMocks7();
function registerMocks7() {
  $s({
    path: "/api/engine/v2/users/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.route_params.id === "current") {
        return ACTIVE_USER;
      }
      const person = MOCK_STAFF.find((user) => user.email === request.route_params.id);
      if (person) {
        return person;
      }
      throw { status: 404, message: "User not found" };
    }
  });
  $s({
    path: "/api/staff/v1/people",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params.q) {
        const search = request.query_params.q.toLowerCase();
        return MOCK_STAFF.filter(({ name, email }) => {
          return name.toLowerCase().includes(search) || email.toLowerCase().includes(search);
        });
      }
      return MOCK_STAFF;
    }
  });
  $s({
    path: "/api/staff/v1/people/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const id = decodeURIComponent(request.route_params.id);
      const person = MOCK_STAFF.find((user) => user.email === id);
      if (person) {
        return __spreadProps(__spreadValues({}, person), {
          location: generateLocation2()
        });
      }
      throw { status: 404, message: "User not found" };
    }
  });
  $s({
    path: "/api/staff/v1/guests",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params.q) {
        const search = request.query_params.q.toLowerCase();
        return MOCK_GUESTS.filter((user) => user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search));
      }
      return MOCK_STAFF;
    }
  });
  $s({
    path: "/api/staff/v1/guests/:email",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const email = decodeURIComponent(request.route_params.email);
      const person = MOCK_GUESTS.find((user) => user.email === email);
      if (person)
        return person;
      throw { status: 404, message: "Guest not found" };
    }
  });
  $s({
    path: "/api/staff/v1/guests/:email/meetings",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.route_params.email) {
        const email = request.route_params.email.toLowerCase();
        const events = MOCK_EVENTS.filter((event) => event.attendees.find((user) => user.email.toLowerCase() === email));
        return events;
      }
      throw {
        status: 404,
        message: `Unable to find meetings with guest with email ${request.route_params.email}`
      };
    }
  });
  const LOCATION_TYPES = [
    "meeting",
    "desk_id",
    "laptop",
    "mobile",
    "geo",
    "none"
  ];
  function generateLocation2() {
    const type = LOCATION_TYPES[predictableRandomInt(LOCATION_TYPES.length)];
    const level = MOCK_LEVELS[predictableRandomInt(MOCK_LEVELS.length)];
    const level_spaces = MOCK_SPACES.filter((s) => s.zones.includes(level.id));
    const space = level_spaces[predictableRandomInt(level_spaces.length)] || {};
    const location2 = {};
    switch (type) {
      case "meeting":
        location2.meeting = {
          building: level.parent_id,
          level: level.id,
          system: space.id,
          map_id: space.map_id,
          event_id: ""
        };
        break;
      case "desk_id":
        location2.meeting = {
          building: level.parent_id,
          level: level.id,
          map_id: space.map_id,
          checked_in: getUnixTime(Date.now())
        };
        break;
      case "laptop":
      case "mobile":
        location2[type] = {
          building: level.parent_id,
          level: level.id,
          x: +predictableRandomInt(1e4),
          y: +predictableRandomInt(5e3),
          last_seen: getUnixTime(subMinutes(Date.now(), predictableRandomInt(60)))
        };
        break;
      case "geo":
        location2.geo = {
          lat: predictableRandomInt(180) - 90,
          lon: predictableRandomInt(360) - 180,
          last_seen: getUnixTime(subMinutes(Date.now(), predictableRandomInt(60)))
        };
        break;
    }
    return location2;
  }
}

// libs/mocks/src/lib/api/zones.mock.ts
var MOCK_METADATA = {
  current: {
    contacts: {
      name: "contacts",
      description: "",
      details: [
        {
          id: "user-1",
          name: "Jonathan McFarlane (PlaceOS)",
          email: "jon@place.tech",
          first_name: "Jonathan",
          last_name: "McFarlane"
        },
        {
          id: "user-1",
          name: "Alex Sorafumo (PlaceOS)",
          email: "alex@place.tech",
          first_name: "Alex",
          last_name: "Sorafumo"
        }
      ]
    }
  }
};
var PARKING_SPACES = {};
var LOCKERS = {};
var ZONE_MOCKS = registerMocks8();
function registerMocks8() {
  $s({
    path: "/api/engine/v2/zones",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params.tags === "org") {
        return MOCK_ORGS;
      } else if (request.query_params.tags === "region") {
        return [];
      } else if (request.query_params.tags === "building") {
        return MOCK_BUILDINGS;
      } else if (request.query_params.tags === "level") {
        return MOCK_LEVELS;
      } else if (request.query_params.tags) {
        return MOCK_ZONES.filter((_) => _.tags.includes(request.query_params.tags));
      }
      throw { status: 404, message: "Zones not found" };
    }
  });
  $s({
    path: "/api/engine/v2/settings",
    metadata: {},
    method: "GET",
    callback: (request) => []
  });
  $s({
    path: "/api/engine/v2/settings/:id",
    metadata: {},
    method: "GET",
    callback: (request) => ({})
  });
  $s({
    path: "/api/engine/v2/metadata/:id",
    metadata: {},
    method: "GET",
    callback: (request) => {
      if (request.query_params.name === "bindings") {
        return {
          bindings: {
            details: {
              area_management: "space-0",
              location_services: "space-0",
              contact_tracing: "space-0",
              lockers: "space-0"
              // payments: 'space-0',
            }
          }
        };
      }
      if (request.query_params.name === "catering") {
        return {
          catering: {
            details: MOCK_MENU
          }
        };
      }
      if (request.query_params.name === "parking-spaces") {
        const parts = request.route_params.id.split("-");
        const id = parts[parts.length - 1];
        return generateParkingSpaces(id);
      }
      if (request.query_params.name === "lockers") {
        const parts = request.route_params.id.split("-");
        const id = parts[parts.length - 1];
        return generateLockers(id);
      }
      if (request.query_params.name === "desks") {
        const parts = request.route_params.id.split("-");
        const id = parts[parts.length - 1];
        return generateMockDeskMetadata(id);
      }
      if (request.query_params.name === "charge_codes") {
        const parts = request.route_params.id.split("-");
        const id = parts[parts.length - 1];
        return {
          charge_codes: {
            details: new Array(30).fill(0).map((_, idx) => `C-${idx}`)
          }
        };
      }
      if (request.query_params.name === "map_regions") {
        return {
          map_regions: {
            details: {
              areas: [
                {
                  id: "zone-10.A",
                  properties: {
                    capacity: 100,
                    label_location: { x: 0.36, y: 0.33 }
                    // draw_polygon: true
                  },
                  geometry: {
                    coordinates: [
                      [0, 0],
                      [0, 0.5],
                      [0.5, 0.5],
                      [0.5, 0]
                    ]
                  }
                },
                {
                  id: "zone-10.B",
                  properties: {
                    capacity: 100,
                    label_location: { x: 0.76, y: 0.33 }
                  }
                },
                {
                  id: "zone-10.C",
                  properties: {
                    capacity: 100,
                    label_location: { x: 0.63, y: 0.77 }
                  }
                }
              ]
            }
          }
        };
      }
      if (MOCK_METADATA[request.route_params.id] && MOCK_METADATA[request.route_params.id][request.query_params.name]) {
        return MOCK_METADATA[request.route_params.id];
      } else if (MOCK_METADATA[request.route_params.id] && !request.query_params.name) {
        return MOCK_METADATA[request.route_params.id] || {};
      }
      return {};
    }
  });
  $s({
    path: "/api/engine/v2/metadata/:id",
    metadata: {},
    method: "PATCH",
    callback: (request) => {
      if (!MOCK_METADATA[request.route_params.id])
        MOCK_METADATA[request.route_params.id] = {};
      MOCK_METADATA[request.route_params.id][request.body.name] = request.body;
      return request.body;
    }
  });
  $s({
    path: "/api/engine/v2/metadata/:id",
    metadata: {},
    method: "PUT",
    callback: (request) => {
      if (!MOCK_METADATA[request.route_params.id])
        MOCK_METADATA[request.route_params.id] = {};
      MOCK_METADATA[request.route_params.id][request.body.name] = request.body;
      return request.body;
    }
  });
  const DESK_FEATURES = ["sit_to_stand", "single_monitor", "dual_monitor"];
  function generateMockDeskMetadata(id) {
    return {
      desks: {
        details: new Array(30).fill(0).map((_, idx) => ({
          id: `table-${padString(id, 2)}.${padString(idx + 1, 3)}`,
          name: `Desk ${id}.${padString(idx + 1, 3)}`,
          bookable: predictableRandomInt(9999) % 4 !== 0,
          groups: predictableRandomInt(9999) % 4 === 0 ? ["test-1"] : [],
          features: DESK_FEATURES.filter((_2) => predictableRandomInt(99999) % 3 === 0)
        }))
      }
    };
  }
  function generateParkingSpaces(id) {
    if (!PARKING_SPACES[id]) {
      PARKING_SPACES[id] = {
        "parking-spaces": {
          details: new Array(18 * 6).fill(0).map((_, idx) => {
            const position = padString(idx % 18 + Math.floor(idx / 18) * 100, 3);
            const assignee = predictableRandomInt(9999) % 4 === 0 ? MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)] : {};
            return {
              id: `park-${position}`,
              map_id: `park-${position}`,
              name: `${position}`,
              bookable: predictableRandomInt(9999) % 4 !== 0,
              assigned_to: assignee.email || "",
              assigned_name: assignee.name || ""
            };
          })
        }
      };
    }
    return PARKING_SPACES[id];
  }
  function generateLockers(id) {
    if (!LOCKERS[id]) {
      LOCKERS[id] = {
        lockers: {
          details: new Array(6).fill(0).map((_, idx) => {
            const position = padString(idx + 1, 2);
            const assignee = predictableRandomInt(9999) % 4 === 0 ? MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)] : {};
            return {
              id: `locker-bank-${id}.${position}`,
              map_id: `bank-${id}.${position}`,
              level_id: `lvl-02`,
              name: `Bank ${position}`,
              height: 3,
              lockers: new Array(18).fill(0).map((_2, idx2) => ({
                id: `locker-${position}.${padString(idx2 + 1, 3)}`,
                name: `Locker ${idx2 + 1}`,
                accessible: predictableRandomInt(9999) % 2 !== 0,
                bookable: predictableRandomInt(9999) % 4 !== 0,
                position: [idx2 % 6, Math.floor(idx2 / 6)],
                size: [1, 1]
              }))
            };
          })
        }
      };
    }
    return LOCKERS[id];
  }
  $s({
    path: "/api/engine/v2/metadata/:id/children",
    metadata: {},
    method: "GET",
    callback: (request) => {
      const zone = MOCK_BUILDINGS.find((_) => _.id === request.route_params.id);
      if (!zone)
        throw {
          status: 404,
          message: `Unable to find zone with id "${request.route_params.id}"`
        };
      return MOCK_LEVELS.filter((_) => _.parent_id === zone.id).map((lvl) => {
        const parts = lvl.id.split("-");
        const id = parts[parts.length - 1];
        return {
          zone: lvl,
          metadata: request.query_params.name === "parking-spaces" ? generateParkingSpaces(id) : request.query_params.name === "lockers" ? generateLockers(id) : generateMockDeskMetadata(id)
        };
      });
    }
  });
}

// libs/mocks/src/mocks.ts
var mocks_default = {
  ZONE_MOCKS,
  USER_MOCKS,
  SYSTEM_MOCKS,
  EVENT_MOCKS,
  CALENDAR_MOCKS,
  BOOKING_MOCKS,
  ASSET_MOCKS,
  SURVEY_MOCKS
};
log("MOCKS", "Mocks included with application.");

// node_modules/@sentry/core/build/esm/debug-build.js
var DEBUG_BUILD = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;

// node_modules/@sentry/core/build/esm/utils-hoist/version.js
var SDK_VERSION = "9.19.0";

// node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js
var GLOBAL_OBJ = globalThis;

// node_modules/@sentry/core/build/esm/carrier.js
function getMainCarrier() {
  getSentryCarrier(GLOBAL_OBJ);
  return GLOBAL_OBJ;
}
function getSentryCarrier(carrier) {
  const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
  __SENTRY__.version = __SENTRY__.version || SDK_VERSION;
  return __SENTRY__[SDK_VERSION] = __SENTRY__[SDK_VERSION] || {};
}
function getGlobalSingleton(name, creator, obj = GLOBAL_OBJ) {
  const __SENTRY__ = obj.__SENTRY__ = obj.__SENTRY__ || {};
  const carrier = __SENTRY__[SDK_VERSION] = __SENTRY__[SDK_VERSION] || {};
  return carrier[name] || (carrier[name] = creator());
}

// node_modules/@sentry/core/build/esm/utils-hoist/is.js
var objectToString = Object.prototype.toString;
function isError(wat) {
  switch (objectToString.call(wat)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return true;
    default:
      return isInstanceOf(wat, Error);
  }
}
function isBuiltin(wat, className) {
  return objectToString.call(wat) === `[object ${className}]`;
}
function isErrorEvent(wat) {
  return isBuiltin(wat, "ErrorEvent");
}
function isDOMError(wat) {
  return isBuiltin(wat, "DOMError");
}
function isDOMException(wat) {
  return isBuiltin(wat, "DOMException");
}
function isString(wat) {
  return isBuiltin(wat, "String");
}
function isParameterizedString(wat) {
  return typeof wat === "object" && wat !== null && "__sentry_template_string__" in wat && "__sentry_template_values__" in wat;
}
function isPrimitive(wat) {
  return wat === null || isParameterizedString(wat) || typeof wat !== "object" && typeof wat !== "function";
}
function isPlainObject(wat) {
  return isBuiltin(wat, "Object");
}
function isEvent(wat) {
  return typeof Event !== "undefined" && isInstanceOf(wat, Event);
}
function isElement(wat) {
  return typeof Element !== "undefined" && isInstanceOf(wat, Element);
}
function isRegExp(wat) {
  return isBuiltin(wat, "RegExp");
}
function isThenable(wat) {
  return Boolean(wat?.then && typeof wat.then === "function");
}
function isSyntheticEvent(wat) {
  return isPlainObject(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
}
function isInstanceOf(wat, base) {
  try {
    return wat instanceof base;
  } catch (_e) {
    return false;
  }
}
function isVueViewModel(wat) {
  return !!(typeof wat === "object" && wat !== null && (wat.__isVue || wat._isVue));
}
function isRequest(request) {
  return typeof Request !== "undefined" && isInstanceOf(request, Request);
}

// node_modules/@sentry/core/build/esm/utils-hoist/browser.js
var WINDOW = GLOBAL_OBJ;
var DEFAULT_MAX_STRING_LENGTH = 80;
function htmlTreeAsString(elem, options = {}) {
  if (!elem) {
    return "<unknown>";
  }
  try {
    let currentElem = elem;
    const MAX_TRAVERSE_HEIGHT = 5;
    const out = [];
    let height = 0;
    let len = 0;
    const separator = " > ";
    const sepLength = separator.length;
    let nextStr;
    const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
    const maxStringLength = !Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
    while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
      nextStr = _htmlElementAsString(currentElem, keyAttrs);
      if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength) {
        break;
      }
      out.push(nextStr);
      len += nextStr.length;
      currentElem = currentElem.parentNode;
    }
    return out.reverse().join(separator);
  } catch (_oO) {
    return "<unknown>";
  }
}
function _htmlElementAsString(el, keyAttrs) {
  const elem = el;
  const out = [];
  if (!elem?.tagName) {
    return "";
  }
  if (WINDOW.HTMLElement) {
    if (elem instanceof HTMLElement && elem.dataset) {
      if (elem.dataset["sentryComponent"]) {
        return elem.dataset["sentryComponent"];
      }
      if (elem.dataset["sentryElement"]) {
        return elem.dataset["sentryElement"];
      }
    }
  }
  out.push(elem.tagName.toLowerCase());
  const keyAttrPairs = keyAttrs?.length ? keyAttrs.filter((keyAttr) => elem.getAttribute(keyAttr)).map((keyAttr) => [keyAttr, elem.getAttribute(keyAttr)]) : null;
  if (keyAttrPairs?.length) {
    keyAttrPairs.forEach((keyAttrPair) => {
      out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
    });
  } else {
    if (elem.id) {
      out.push(`#${elem.id}`);
    }
    const className = elem.className;
    if (className && isString(className)) {
      const classes = className.split(/\s+/);
      for (const c of classes) {
        out.push(`.${c}`);
      }
    }
  }
  const allowedAttrs = ["aria-label", "type", "name", "title", "alt"];
  for (const k of allowedAttrs) {
    const attr = elem.getAttribute(k);
    if (attr) {
      out.push(`[${k}="${attr}"]`);
    }
  }
  return out.join("");
}
function getLocationHref() {
  try {
    return WINDOW.document.location.href;
  } catch (oO) {
    return "";
  }
}
function getComponentName(elem) {
  if (!WINDOW.HTMLElement) {
    return null;
  }
  let currentElem = elem;
  const MAX_TRAVERSE_HEIGHT = 5;
  for (let i = 0; i < MAX_TRAVERSE_HEIGHT; i++) {
    if (!currentElem) {
      return null;
    }
    if (currentElem instanceof HTMLElement) {
      if (currentElem.dataset["sentryComponent"]) {
        return currentElem.dataset["sentryComponent"];
      }
      if (currentElem.dataset["sentryElement"]) {
        return currentElem.dataset["sentryElement"];
      }
    }
    currentElem = currentElem.parentNode;
  }
  return null;
}

// node_modules/@sentry/core/build/esm/utils-hoist/logger.js
var PREFIX = "Sentry Logger ";
var CONSOLE_LEVELS = ["debug", "info", "warn", "error", "log", "assert", "trace"];
var originalConsoleMethods = {};
function consoleSandbox(callback) {
  if (!("console" in GLOBAL_OBJ)) {
    return callback();
  }
  const console2 = GLOBAL_OBJ.console;
  const wrappedFuncs = {};
  const wrappedLevels = Object.keys(originalConsoleMethods);
  wrappedLevels.forEach((level) => {
    const originalConsoleMethod = originalConsoleMethods[level];
    wrappedFuncs[level] = console2[level];
    console2[level] = originalConsoleMethod;
  });
  try {
    return callback();
  } finally {
    wrappedLevels.forEach((level) => {
      console2[level] = wrappedFuncs[level];
    });
  }
}
function makeLogger() {
  let enabled = false;
  const logger3 = {
    enable: () => {
      enabled = true;
    },
    disable: () => {
      enabled = false;
    },
    isEnabled: () => enabled
  };
  if (DEBUG_BUILD) {
    CONSOLE_LEVELS.forEach((name) => {
      logger3[name] = (...args) => {
        if (enabled) {
          consoleSandbox(() => {
            GLOBAL_OBJ.console[name](`${PREFIX}[${name}]:`, ...args);
          });
        }
      };
    });
  } else {
    CONSOLE_LEVELS.forEach((name) => {
      logger3[name] = () => void 0;
    });
  }
  return logger3;
}
var logger = getGlobalSingleton("logger", makeLogger);

// node_modules/@sentry/core/build/esm/utils-hoist/string.js
function truncate(str, max = 0) {
  if (typeof str !== "string" || max === 0) {
    return str;
  }
  return str.length <= max ? str : `${str.slice(0, max)}...`;
}
function safeJoin(input, delimiter) {
  if (!Array.isArray(input)) {
    return "";
  }
  const output = [];
  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    try {
      if (isVueViewModel(value)) {
        output.push("[VueViewModel]");
      } else {
        output.push(String(value));
      }
    } catch (e2) {
      output.push("[value cannot be serialized]");
    }
  }
  return output.join(delimiter);
}
function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
  if (!isString(value)) {
    return false;
  }
  if (isRegExp(pattern)) {
    return pattern.test(value);
  }
  if (isString(pattern)) {
    return requireExactStringMatch ? value === pattern : value.includes(pattern);
  }
  return false;
}
function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
  return patterns.some((pattern) => isMatchingPattern(testString, pattern, requireExactStringMatch));
}

// node_modules/@sentry/core/build/esm/utils-hoist/object.js
function fill(source, name, replacementFactory) {
  if (!(name in source)) {
    return;
  }
  const original = source[name];
  if (typeof original !== "function") {
    return;
  }
  const wrapped = replacementFactory(original);
  if (typeof wrapped === "function") {
    markFunctionWrapped(wrapped, original);
  }
  try {
    source[name] = wrapped;
  } catch {
    DEBUG_BUILD && logger.log(`Failed to replace method "${name}" in object`, source);
  }
}
function addNonEnumerableProperty(obj, name, value) {
  try {
    Object.defineProperty(obj, name, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value,
      writable: true,
      configurable: true
    });
  } catch (o_O) {
    DEBUG_BUILD && logger.log(`Failed to add non-enumerable property "${name}" to object`, obj);
  }
}
function markFunctionWrapped(wrapped, original) {
  try {
    const proto = original.prototype || {};
    wrapped.prototype = original.prototype = proto;
    addNonEnumerableProperty(wrapped, "__sentry_original__", original);
  } catch (o_O) {
  }
}
function getOriginalFunction(func) {
  return func.__sentry_original__;
}
function convertToPlainObject(value) {
  if (isError(value)) {
    return __spreadValues({
      message: value.message,
      name: value.name,
      stack: value.stack
    }, getOwnProperties(value));
  } else if (isEvent(value)) {
    const newObj = __spreadValues({
      type: value.type,
      target: serializeEventTarget(value.target),
      currentTarget: serializeEventTarget(value.currentTarget)
    }, getOwnProperties(value));
    if (typeof CustomEvent !== "undefined" && isInstanceOf(value, CustomEvent)) {
      newObj.detail = value.detail;
    }
    return newObj;
  } else {
    return value;
  }
}
function serializeEventTarget(target) {
  try {
    return isElement(target) ? htmlTreeAsString(target) : Object.prototype.toString.call(target);
  } catch (_oO) {
    return "<unknown>";
  }
}
function getOwnProperties(obj) {
  if (typeof obj === "object" && obj !== null) {
    const extractedProps = {};
    for (const property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        extractedProps[property] = obj[property];
      }
    }
    return extractedProps;
  } else {
    return {};
  }
}
function extractExceptionKeysForMessage(exception, maxLength = 40) {
  const keys = Object.keys(convertToPlainObject(exception));
  keys.sort();
  const firstKey = keys[0];
  if (!firstKey) {
    return "[object has no keys]";
  }
  if (firstKey.length >= maxLength) {
    return truncate(firstKey, maxLength);
  }
  for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
    const serialized = keys.slice(0, includedKeys).join(", ");
    if (serialized.length > maxLength) {
      continue;
    }
    if (includedKeys === keys.length) {
      return serialized;
    }
    return truncate(serialized, maxLength);
  }
  return "";
}

// node_modules/@sentry/core/build/esm/utils-hoist/misc.js
function getCrypto() {
  const gbl = GLOBAL_OBJ;
  return gbl.crypto || gbl.msCrypto;
}
function uuid4(crypto = getCrypto()) {
  let getRandomByte = () => Math.random() * 16;
  try {
    if (crypto?.randomUUID) {
      return crypto.randomUUID().replace(/-/g, "");
    }
    if (crypto?.getRandomValues) {
      getRandomByte = () => {
        const typedArray = new Uint8Array(1);
        crypto.getRandomValues(typedArray);
        return typedArray[0];
      };
    }
  } catch (_) {
  }
  return ("10000000100040008000" + 1e11).replace(/[018]/g, (c) => (
    // eslint-disable-next-line no-bitwise
    (c ^ (getRandomByte() & 15) >> c / 4).toString(16)
  ));
}
function getFirstException(event) {
  return event.exception?.values?.[0];
}
function getEventDescription(event) {
  const {
    message,
    event_id: eventId
  } = event;
  if (message) {
    return message;
  }
  const firstException = getFirstException(event);
  if (firstException) {
    if (firstException.type && firstException.value) {
      return `${firstException.type}: ${firstException.value}`;
    }
    return firstException.type || firstException.value || eventId || "<unknown>";
  }
  return eventId || "<unknown>";
}
function addExceptionTypeValue(event, value, type) {
  const exception = event.exception = event.exception || {};
  const values = exception.values = exception.values || [];
  const firstException = values[0] = values[0] || {};
  if (!firstException.value) {
    firstException.value = value || "";
  }
  if (!firstException.type) {
    firstException.type = type || "Error";
  }
}
function addExceptionMechanism(event, newMechanism) {
  const firstException = getFirstException(event);
  if (!firstException) {
    return;
  }
  const defaultMechanism = {
    type: "generic",
    handled: true
  };
  const currentMechanism = firstException.mechanism;
  firstException.mechanism = __spreadValues(__spreadValues(__spreadValues({}, defaultMechanism), currentMechanism), newMechanism);
  if (newMechanism && "data" in newMechanism) {
    const mergedData = __spreadValues(__spreadValues({}, currentMechanism?.data), newMechanism.data);
    firstException.mechanism.data = mergedData;
  }
}
function checkOrSetAlreadyCaught(exception) {
  if (isAlreadyCaptured(exception)) {
    return true;
  }
  try {
    addNonEnumerableProperty(exception, "__sentry_captured__", true);
  } catch (err) {
  }
  return false;
}
function isAlreadyCaptured(exception) {
  try {
    return exception.__sentry_captured__;
  } catch {
  }
}

// node_modules/@sentry/core/build/esm/utils-hoist/time.js
var ONE_SECOND_IN_MS = 1e3;
function dateTimestampInSeconds() {
  return Date.now() / ONE_SECOND_IN_MS;
}
function createUnixTimestampInSecondsFunc() {
  const {
    performance: performance2
  } = GLOBAL_OBJ;
  if (!performance2?.now) {
    return dateTimestampInSeconds;
  }
  const approxStartingTimeOrigin = Date.now() - performance2.now();
  const timeOrigin = performance2.timeOrigin == void 0 ? approxStartingTimeOrigin : performance2.timeOrigin;
  return () => {
    return (timeOrigin + performance2.now()) / ONE_SECOND_IN_MS;
  };
}
var timestampInSeconds = createUnixTimestampInSecondsFunc();
var cachedTimeOrigin;
function getBrowserTimeOrigin() {
  const {
    performance: performance2
  } = GLOBAL_OBJ;
  if (!performance2?.now) {
    return [void 0, "none"];
  }
  const threshold = 3600 * 1e3;
  const performanceNow = performance2.now();
  const dateNow = Date.now();
  const timeOriginDelta = performance2.timeOrigin ? Math.abs(performance2.timeOrigin + performanceNow - dateNow) : threshold;
  const timeOriginIsReliable = timeOriginDelta < threshold;
  const navigationStart = performance2.timing?.navigationStart;
  const hasNavigationStart = typeof navigationStart === "number";
  const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
  const navigationStartIsReliable = navigationStartDelta < threshold;
  if (timeOriginIsReliable || navigationStartIsReliable) {
    if (timeOriginDelta <= navigationStartDelta) {
      return [performance2.timeOrigin, "timeOrigin"];
    } else {
      return [navigationStart, "navigationStart"];
    }
  }
  return [dateNow, "dateNow"];
}
function browserPerformanceTimeOrigin() {
  if (!cachedTimeOrigin) {
    cachedTimeOrigin = getBrowserTimeOrigin();
  }
  return cachedTimeOrigin[0];
}

// node_modules/@sentry/core/build/esm/session.js
function makeSession(context) {
  const startingTime = timestampInSeconds();
  const session = {
    sid: uuid4(),
    init: true,
    timestamp: startingTime,
    started: startingTime,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => sessionToJSON(session)
  };
  if (context) {
    updateSession(session, context);
  }
  return session;
}
function updateSession(session, context = {}) {
  if (context.user) {
    if (!session.ipAddress && context.user.ip_address) {
      session.ipAddress = context.user.ip_address;
    }
    if (!session.did && !context.did) {
      session.did = context.user.id || context.user.email || context.user.username;
    }
  }
  session.timestamp = context.timestamp || timestampInSeconds();
  if (context.abnormal_mechanism) {
    session.abnormal_mechanism = context.abnormal_mechanism;
  }
  if (context.ignoreDuration) {
    session.ignoreDuration = context.ignoreDuration;
  }
  if (context.sid) {
    session.sid = context.sid.length === 32 ? context.sid : uuid4();
  }
  if (context.init !== void 0) {
    session.init = context.init;
  }
  if (!session.did && context.did) {
    session.did = `${context.did}`;
  }
  if (typeof context.started === "number") {
    session.started = context.started;
  }
  if (session.ignoreDuration) {
    session.duration = void 0;
  } else if (typeof context.duration === "number") {
    session.duration = context.duration;
  } else {
    const duration = session.timestamp - session.started;
    session.duration = duration >= 0 ? duration : 0;
  }
  if (context.release) {
    session.release = context.release;
  }
  if (context.environment) {
    session.environment = context.environment;
  }
  if (!session.ipAddress && context.ipAddress) {
    session.ipAddress = context.ipAddress;
  }
  if (!session.userAgent && context.userAgent) {
    session.userAgent = context.userAgent;
  }
  if (typeof context.errors === "number") {
    session.errors = context.errors;
  }
  if (context.status) {
    session.status = context.status;
  }
}
function closeSession(session, status) {
  let context = {};
  if (status) {
    context = {
      status
    };
  } else if (session.status === "ok") {
    context = {
      status: "exited"
    };
  }
  updateSession(session, context);
}
function sessionToJSON(session) {
  return {
    sid: `${session.sid}`,
    init: session.init,
    // Make sure that sec is converted to ms for date constructor
    started: new Date(session.started * 1e3).toISOString(),
    timestamp: new Date(session.timestamp * 1e3).toISOString(),
    status: session.status,
    errors: session.errors,
    did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : void 0,
    duration: session.duration,
    abnormal_mechanism: session.abnormal_mechanism,
    attrs: {
      release: session.release,
      environment: session.environment,
      ip_address: session.ipAddress,
      user_agent: session.userAgent
    }
  };
}

// node_modules/@sentry/core/build/esm/utils/merge.js
function merge2(initialObj, mergeObj, levels = 2) {
  if (!mergeObj || typeof mergeObj !== "object" || levels <= 0) {
    return mergeObj;
  }
  if (initialObj && Object.keys(mergeObj).length === 0) {
    return initialObj;
  }
  const output = __spreadValues({}, initialObj);
  for (const key in mergeObj) {
    if (Object.prototype.hasOwnProperty.call(mergeObj, key)) {
      output[key] = merge2(output[key], mergeObj[key], levels - 1);
    }
  }
  return output;
}

// node_modules/@sentry/core/build/esm/utils/spanOnScope.js
var SCOPE_SPAN_FIELD = "_sentrySpan";
function _setSpanForScope(scope, span) {
  if (span) {
    addNonEnumerableProperty(scope, SCOPE_SPAN_FIELD, span);
  } else {
    delete scope[SCOPE_SPAN_FIELD];
  }
}
function _getSpanForScope(scope) {
  return scope[SCOPE_SPAN_FIELD];
}

// node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js
function generateTraceId() {
  return uuid4();
}
function generateSpanId() {
  return uuid4().substring(16);
}

// node_modules/@sentry/core/build/esm/scope.js
var DEFAULT_MAX_BREADCRUMBS = 100;
var Scope = class _Scope {
  /** Flag if notifying is happening. */
  /** Callback for client to receive scope changes. */
  /** Callback list that will be called during event processing. */
  /** Array of breadcrumbs. */
  /** User */
  /** Tags */
  /** Extra */
  /** Contexts */
  /** Attachments */
  /** Propagation Context for distributed tracing */
  /**
   * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
   * sent to Sentry
   */
  /** Fingerprint */
  /** Severity */
  /**
   * Transaction Name
   *
   * IMPORTANT: The transaction name on the scope has nothing to do with root spans/transaction objects.
   * It's purpose is to assign a transaction to the scope that's added to non-transaction events.
   */
  /** Session */
  /** The client on this scope */
  /** Contains the last event id of a captured event.  */
  // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.
  constructor() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    this._propagationContext = {
      traceId: generateTraceId(),
      sampleRand: Math.random()
    };
  }
  /**
   * Clone all data from this scope into a new scope.
   */
  clone() {
    const newScope = new _Scope();
    newScope._breadcrumbs = [...this._breadcrumbs];
    newScope._tags = __spreadValues({}, this._tags);
    newScope._extra = __spreadValues({}, this._extra);
    newScope._contexts = __spreadValues({}, this._contexts);
    if (this._contexts.flags) {
      newScope._contexts.flags = {
        values: [...this._contexts.flags.values]
      };
    }
    newScope._user = this._user;
    newScope._level = this._level;
    newScope._session = this._session;
    newScope._transactionName = this._transactionName;
    newScope._fingerprint = this._fingerprint;
    newScope._eventProcessors = [...this._eventProcessors];
    newScope._attachments = [...this._attachments];
    newScope._sdkProcessingMetadata = __spreadValues({}, this._sdkProcessingMetadata);
    newScope._propagationContext = __spreadValues({}, this._propagationContext);
    newScope._client = this._client;
    newScope._lastEventId = this._lastEventId;
    _setSpanForScope(newScope, _getSpanForScope(this));
    return newScope;
  }
  /**
   * Update the client assigned to this scope.
   * Note that not every scope will have a client assigned - isolation scopes & the global scope will generally not have a client,
   * as well as manually created scopes.
   */
  setClient(client) {
    this._client = client;
  }
  /**
   * Set the ID of the last captured error event.
   * This is generally only captured on the isolation scope.
   */
  setLastEventId(lastEventId2) {
    this._lastEventId = lastEventId2;
  }
  /**
   * Get the client assigned to this scope.
   */
  getClient() {
    return this._client;
  }
  /**
   * Get the ID of the last captured error event.
   * This is generally only available on the isolation scope.
   */
  lastEventId() {
    return this._lastEventId;
  }
  /**
   * @inheritDoc
   */
  addScopeListener(callback) {
    this._scopeListeners.push(callback);
  }
  /**
   * Add an event processor that will be called before an event is sent.
   */
  addEventProcessor(callback) {
    this._eventProcessors.push(callback);
    return this;
  }
  /**
   * Set the user for this scope.
   * Set to `null` to unset the user.
   */
  setUser(user) {
    this._user = user || {
      email: void 0,
      id: void 0,
      ip_address: void 0,
      username: void 0
    };
    if (this._session) {
      updateSession(this._session, {
        user
      });
    }
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Get the user from this scope.
   */
  getUser() {
    return this._user;
  }
  /**
   * Set an object that will be merged into existing tags on the scope,
   * and will be sent as tags data with the event.
   */
  setTags(tags) {
    this._tags = __spreadValues(__spreadValues({}, this._tags), tags);
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Set a single tag that will be sent as tags data with the event.
   */
  setTag(key, value) {
    this._tags = __spreadProps(__spreadValues({}, this._tags), {
      [key]: value
    });
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Set an object that will be merged into existing extra on the scope,
   * and will be sent as extra data with the event.
   */
  setExtras(extras) {
    this._extra = __spreadValues(__spreadValues({}, this._extra), extras);
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Set a single key:value extra entry that will be sent as extra data with the event.
   */
  setExtra(key, extra) {
    this._extra = __spreadProps(__spreadValues({}, this._extra), {
      [key]: extra
    });
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Sets the fingerprint on the scope to send with the events.
   * @param {string[]} fingerprint Fingerprint to group events in Sentry.
   */
  setFingerprint(fingerprint) {
    this._fingerprint = fingerprint;
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Sets the level on the scope for future events.
   */
  setLevel(level) {
    this._level = level;
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Sets the transaction name on the scope so that the name of e.g. taken server route or
   * the page location is attached to future events.
   *
   * IMPORTANT: Calling this function does NOT change the name of the currently active
   * root span. If you want to change the name of the active root span, use
   * `Sentry.updateSpanName(rootSpan, 'new name')` instead.
   *
   * By default, the SDK updates the scope's transaction name automatically on sensible
   * occasions, such as a page navigation or when handling a new request on the server.
   */
  setTransactionName(name) {
    this._transactionName = name;
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Sets context data with the given name.
   * Data passed as context will be normalized. You can also pass `null` to unset the context.
   * Note that context data will not be merged - calling `setContext` will overwrite an existing context with the same key.
   */
  setContext(key, context) {
    if (context === null) {
      delete this._contexts[key];
    } else {
      this._contexts[key] = context;
    }
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Set the session for the scope.
   */
  setSession(session) {
    if (!session) {
      delete this._session;
    } else {
      this._session = session;
    }
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Get the session from the scope.
   */
  getSession() {
    return this._session;
  }
  /**
   * Updates the scope with provided data. Can work in three variations:
   * - plain object containing updatable attributes
   * - Scope instance that'll extract the attributes from
   * - callback function that'll receive the current scope as an argument and allow for modifications
   */
  update(captureContext) {
    if (!captureContext) {
      return this;
    }
    const scopeToMerge = typeof captureContext === "function" ? captureContext(this) : captureContext;
    const scopeInstance = scopeToMerge instanceof _Scope ? scopeToMerge.getScopeData() : isPlainObject(scopeToMerge) ? captureContext : void 0;
    const {
      tags,
      extra,
      user,
      contexts,
      level,
      fingerprint = [],
      propagationContext
    } = scopeInstance || {};
    this._tags = __spreadValues(__spreadValues({}, this._tags), tags);
    this._extra = __spreadValues(__spreadValues({}, this._extra), extra);
    this._contexts = __spreadValues(__spreadValues({}, this._contexts), contexts);
    if (user && Object.keys(user).length) {
      this._user = user;
    }
    if (level) {
      this._level = level;
    }
    if (fingerprint.length) {
      this._fingerprint = fingerprint;
    }
    if (propagationContext) {
      this._propagationContext = propagationContext;
    }
    return this;
  }
  /**
   * Clears the current scope and resets its properties.
   * Note: The client will not be cleared.
   */
  clear() {
    this._breadcrumbs = [];
    this._tags = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = void 0;
    this._transactionName = void 0;
    this._fingerprint = void 0;
    this._session = void 0;
    _setSpanForScope(this, void 0);
    this._attachments = [];
    this.setPropagationContext({
      traceId: generateTraceId(),
      sampleRand: Math.random()
    });
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Adds a breadcrumb to the scope.
   * By default, the last 100 breadcrumbs are kept.
   */
  addBreadcrumb(breadcrumb, maxBreadcrumbs) {
    const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
    if (maxCrumbs <= 0) {
      return this;
    }
    const mergedBreadcrumb = __spreadProps(__spreadValues({
      timestamp: dateTimestampInSeconds()
    }, breadcrumb), {
      // Breadcrumb messages can theoretically be infinitely large and they're held in memory so we truncate them not to leak (too much) memory
      message: breadcrumb.message ? truncate(breadcrumb.message, 2048) : breadcrumb.message
    });
    this._breadcrumbs.push(mergedBreadcrumb);
    if (this._breadcrumbs.length > maxCrumbs) {
      this._breadcrumbs = this._breadcrumbs.slice(-maxCrumbs);
      this._client?.recordDroppedEvent("buffer_overflow", "log_item");
    }
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Get the last breadcrumb of the scope.
   */
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  /**
   * Clear all breadcrumbs from the scope.
   */
  clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }
  /**
   * Add an attachment to the scope.
   */
  addAttachment(attachment) {
    this._attachments.push(attachment);
    return this;
  }
  /**
   * Clear all attachments from the scope.
   */
  clearAttachments() {
    this._attachments = [];
    return this;
  }
  /**
   * Get the data of this scope, which should be applied to an event during processing.
   */
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: _getSpanForScope(this)
    };
  }
  /**
   * Add data which will be accessible during event processing but won't get sent to Sentry.
   */
  setSDKProcessingMetadata(newData) {
    this._sdkProcessingMetadata = merge2(this._sdkProcessingMetadata, newData, 2);
    return this;
  }
  /**
   * Add propagation context to the scope, used for distributed tracing
   */
  setPropagationContext(context) {
    this._propagationContext = context;
    return this;
  }
  /**
   * Get propagation context from the scope, used for distributed tracing
   */
  getPropagationContext() {
    return this._propagationContext;
  }
  /**
   * Capture an exception for this scope.
   *
   * @returns {string} The id of the captured Sentry event.
   */
  captureException(exception, hint) {
    const eventId = hint?.event_id || uuid4();
    if (!this._client) {
      logger.warn("No client configured on scope - will not capture exception!");
      return eventId;
    }
    const syntheticException = new Error("Sentry syntheticException");
    this._client.captureException(exception, __spreadProps(__spreadValues({
      originalException: exception,
      syntheticException
    }, hint), {
      event_id: eventId
    }), this);
    return eventId;
  }
  /**
   * Capture a message for this scope.
   *
   * @returns {string} The id of the captured message.
   */
  captureMessage(message, level, hint) {
    const eventId = hint?.event_id || uuid4();
    if (!this._client) {
      logger.warn("No client configured on scope - will not capture message!");
      return eventId;
    }
    const syntheticException = new Error(message);
    this._client.captureMessage(message, level, __spreadProps(__spreadValues({
      originalException: message,
      syntheticException
    }, hint), {
      event_id: eventId
    }), this);
    return eventId;
  }
  /**
   * Capture a Sentry event for this scope.
   *
   * @returns {string} The id of the captured event.
   */
  captureEvent(event, hint) {
    const eventId = hint?.event_id || uuid4();
    if (!this._client) {
      logger.warn("No client configured on scope - will not capture event!");
      return eventId;
    }
    this._client.captureEvent(event, __spreadProps(__spreadValues({}, hint), {
      event_id: eventId
    }), this);
    return eventId;
  }
  /**
   * This will be called on every set call.
   */
  _notifyScopeListeners() {
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach((callback) => {
        callback(this);
      });
      this._notifyingListeners = false;
    }
  }
};

// node_modules/@sentry/core/build/esm/defaultScopes.js
function getDefaultCurrentScope() {
  return getGlobalSingleton("defaultCurrentScope", () => new Scope());
}
function getDefaultIsolationScope() {
  return getGlobalSingleton("defaultIsolationScope", () => new Scope());
}

// node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js
var AsyncContextStack = class {
  constructor(scope, isolationScope) {
    let assignedScope;
    if (!scope) {
      assignedScope = new Scope();
    } else {
      assignedScope = scope;
    }
    let assignedIsolationScope;
    if (!isolationScope) {
      assignedIsolationScope = new Scope();
    } else {
      assignedIsolationScope = isolationScope;
    }
    this._stack = [{
      scope: assignedScope
    }];
    this._isolationScope = assignedIsolationScope;
  }
  /**
   * Fork a scope for the stack.
   */
  withScope(callback) {
    const scope = this._pushScope();
    let maybePromiseResult;
    try {
      maybePromiseResult = callback(scope);
    } catch (e2) {
      this._popScope();
      throw e2;
    }
    if (isThenable(maybePromiseResult)) {
      return maybePromiseResult.then((res) => {
        this._popScope();
        return res;
      }, (e2) => {
        this._popScope();
        throw e2;
      });
    }
    this._popScope();
    return maybePromiseResult;
  }
  /**
   * Get the client of the stack.
   */
  getClient() {
    return this.getStackTop().client;
  }
  /**
   * Returns the scope of the top stack.
   */
  getScope() {
    return this.getStackTop().scope;
  }
  /**
   * Get the isolation scope for the stack.
   */
  getIsolationScope() {
    return this._isolationScope;
  }
  /**
   * Returns the topmost scope layer in the order domain > local > process.
   */
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  /**
   * Push a scope to the stack.
   */
  _pushScope() {
    const scope = this.getScope().clone();
    this._stack.push({
      client: this.getClient(),
      scope
    });
    return scope;
  }
  /**
   * Pop a scope from the stack.
   */
  _popScope() {
    if (this._stack.length <= 1) return false;
    return !!this._stack.pop();
  }
};
function getAsyncContextStack() {
  const registry = getMainCarrier();
  const sentry = getSentryCarrier(registry);
  return sentry.stack = sentry.stack || new AsyncContextStack(getDefaultCurrentScope(), getDefaultIsolationScope());
}
function withScope(callback) {
  return getAsyncContextStack().withScope(callback);
}
function withSetScope(scope, callback) {
  const stack = getAsyncContextStack();
  return stack.withScope(() => {
    stack.getStackTop().scope = scope;
    return callback(scope);
  });
}
function withIsolationScope(callback) {
  return getAsyncContextStack().withScope(() => {
    return callback(getAsyncContextStack().getIsolationScope());
  });
}
function getStackAsyncContextStrategy() {
  return {
    withIsolationScope,
    withScope,
    withSetScope,
    withSetIsolationScope: (_isolationScope, callback) => {
      return withIsolationScope(callback);
    },
    getCurrentScope: () => getAsyncContextStack().getScope(),
    getIsolationScope: () => getAsyncContextStack().getIsolationScope()
  };
}

// node_modules/@sentry/core/build/esm/asyncContext/index.js
function getAsyncContextStrategy(carrier) {
  const sentry = getSentryCarrier(carrier);
  if (sentry.acs) {
    return sentry.acs;
  }
  return getStackAsyncContextStrategy();
}

// node_modules/@sentry/core/build/esm/currentScopes.js
function getCurrentScope() {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  return acs.getCurrentScope();
}
function getIsolationScope() {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  return acs.getIsolationScope();
}
function getGlobalScope() {
  return getGlobalSingleton("globalScope", () => new Scope());
}
function withScope2(...rest) {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (rest.length === 2) {
    const [scope, callback] = rest;
    if (!scope) {
      return acs.withScope(callback);
    }
    return acs.withSetScope(scope, callback);
  }
  return acs.withScope(rest[0]);
}
function getClient() {
  return getCurrentScope().getClient();
}
function getTraceContextFromScope(scope) {
  const propagationContext = scope.getPropagationContext();
  const {
    traceId,
    parentSpanId,
    propagationSpanId
  } = propagationContext;
  const traceContext = {
    trace_id: traceId,
    span_id: propagationSpanId || generateSpanId()
  };
  if (parentSpanId) {
    traceContext.parent_span_id = parentSpanId;
  }
  return traceContext;
}

// node_modules/@sentry/core/build/esm/semanticAttributes.js
var SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = "sentry.source";
var SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = "sentry.sample_rate";
var SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE = "sentry.previous_trace_sample_rate";
var SEMANTIC_ATTRIBUTE_SENTRY_OP = "sentry.op";
var SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = "sentry.origin";
var SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON = "sentry.idle_span_finish_reason";
var SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT = "sentry.measurement_unit";
var SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE = "sentry.measurement_value";
var SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = "sentry.custom_span_name";
var SEMANTIC_ATTRIBUTE_PROFILE_ID = "sentry.profile_id";
var SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME = "sentry.exclusive_time";
var SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE = "sentry.link.type";

// node_modules/@sentry/core/build/esm/tracing/spanstatus.js
var SPAN_STATUS_UNSET = 0;
var SPAN_STATUS_OK = 1;
var SPAN_STATUS_ERROR = 2;
function getSpanStatusFromHttpCode(httpStatus) {
  if (httpStatus < 400 && httpStatus >= 100) {
    return {
      code: SPAN_STATUS_OK
    };
  }
  if (httpStatus >= 400 && httpStatus < 500) {
    switch (httpStatus) {
      case 401:
        return {
          code: SPAN_STATUS_ERROR,
          message: "unauthenticated"
        };
      case 403:
        return {
          code: SPAN_STATUS_ERROR,
          message: "permission_denied"
        };
      case 404:
        return {
          code: SPAN_STATUS_ERROR,
          message: "not_found"
        };
      case 409:
        return {
          code: SPAN_STATUS_ERROR,
          message: "already_exists"
        };
      case 413:
        return {
          code: SPAN_STATUS_ERROR,
          message: "failed_precondition"
        };
      case 429:
        return {
          code: SPAN_STATUS_ERROR,
          message: "resource_exhausted"
        };
      case 499:
        return {
          code: SPAN_STATUS_ERROR,
          message: "cancelled"
        };
      default:
        return {
          code: SPAN_STATUS_ERROR,
          message: "invalid_argument"
        };
    }
  }
  if (httpStatus >= 500 && httpStatus < 600) {
    switch (httpStatus) {
      case 501:
        return {
          code: SPAN_STATUS_ERROR,
          message: "unimplemented"
        };
      case 503:
        return {
          code: SPAN_STATUS_ERROR,
          message: "unavailable"
        };
      case 504:
        return {
          code: SPAN_STATUS_ERROR,
          message: "deadline_exceeded"
        };
      default:
        return {
          code: SPAN_STATUS_ERROR,
          message: "internal_error"
        };
    }
  }
  return {
    code: SPAN_STATUS_ERROR,
    message: "unknown_error"
  };
}
function setHttpStatus(span, httpStatus) {
  span.setAttribute("http.response.status_code", httpStatus);
  const spanStatus = getSpanStatusFromHttpCode(httpStatus);
  if (spanStatus.message !== "unknown_error") {
    span.setStatus(spanStatus);
  }
}

// node_modules/@sentry/core/build/esm/tracing/utils.js
var SCOPE_ON_START_SPAN_FIELD = "_sentryScope";
var ISOLATION_SCOPE_ON_START_SPAN_FIELD = "_sentryIsolationScope";
function setCapturedScopesOnSpan(span, scope, isolationScope) {
  if (span) {
    addNonEnumerableProperty(span, ISOLATION_SCOPE_ON_START_SPAN_FIELD, isolationScope);
    addNonEnumerableProperty(span, SCOPE_ON_START_SPAN_FIELD, scope);
  }
}
function getCapturedScopesOnSpan(span) {
  return {
    scope: span[SCOPE_ON_START_SPAN_FIELD],
    isolationScope: span[ISOLATION_SCOPE_ON_START_SPAN_FIELD]
  };
}

// node_modules/@sentry/core/build/esm/utils/parseSampleRate.js
function parseSampleRate(sampleRate) {
  if (typeof sampleRate === "boolean") {
    return Number(sampleRate);
  }
  const rate = typeof sampleRate === "string" ? parseFloat(sampleRate) : sampleRate;
  if (typeof rate !== "number" || isNaN(rate) || rate < 0 || rate > 1) {
    return void 0;
  }
  return rate;
}

// node_modules/@sentry/core/build/esm/utils-hoist/baggage.js
var SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
var SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;
var MAX_BAGGAGE_STRING_LENGTH = 8192;
function baggageHeaderToDynamicSamplingContext(baggageHeader) {
  const baggageObject = parseBaggageHeader(baggageHeader);
  if (!baggageObject) {
    return void 0;
  }
  const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
    if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
      const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
      acc[nonPrefixedKey] = value;
    }
    return acc;
  }, {});
  if (Object.keys(dynamicSamplingContext).length > 0) {
    return dynamicSamplingContext;
  } else {
    return void 0;
  }
}
function dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext) {
  if (!dynamicSamplingContext) {
    return void 0;
  }
  const sentryPrefixedDSC = Object.entries(dynamicSamplingContext).reduce((acc, [dscKey, dscValue]) => {
    if (dscValue) {
      acc[`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`] = dscValue;
    }
    return acc;
  }, {});
  return objectToBaggageHeader(sentryPrefixedDSC);
}
function parseBaggageHeader(baggageHeader) {
  if (!baggageHeader || !isString(baggageHeader) && !Array.isArray(baggageHeader)) {
    return void 0;
  }
  if (Array.isArray(baggageHeader)) {
    return baggageHeader.reduce((acc, curr) => {
      const currBaggageObject = baggageHeaderToObject(curr);
      Object.entries(currBaggageObject).forEach(([key, value]) => {
        acc[key] = value;
      });
      return acc;
    }, {});
  }
  return baggageHeaderToObject(baggageHeader);
}
function baggageHeaderToObject(baggageHeader) {
  return baggageHeader.split(",").map((baggageEntry) => baggageEntry.split("=").map((keyOrValue) => {
    try {
      return decodeURIComponent(keyOrValue.trim());
    } catch {
      return;
    }
  })).reduce((acc, [key, value]) => {
    if (key && value) {
      acc[key] = value;
    }
    return acc;
  }, {});
}
function objectToBaggageHeader(object) {
  if (Object.keys(object).length === 0) {
    return void 0;
  }
  return Object.entries(object).reduce((baggageHeader, [objectKey, objectValue], currentIndex) => {
    const baggageEntry = `${encodeURIComponent(objectKey)}=${encodeURIComponent(objectValue)}`;
    const newBaggageHeader = currentIndex === 0 ? baggageEntry : `${baggageHeader},${baggageEntry}`;
    if (newBaggageHeader.length > MAX_BAGGAGE_STRING_LENGTH) {
      DEBUG_BUILD && logger.warn(`Not adding key: ${objectKey} with val: ${objectValue} to baggage header due to exceeding baggage size limits.`);
      return baggageHeader;
    } else {
      return newBaggageHeader;
    }
  }, "");
}

// node_modules/@sentry/core/build/esm/utils-hoist/tracing.js
var TRACEPARENT_REGEXP = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
function extractTraceparentData(traceparent) {
  if (!traceparent) {
    return void 0;
  }
  const matches = traceparent.match(TRACEPARENT_REGEXP);
  if (!matches) {
    return void 0;
  }
  let parentSampled;
  if (matches[3] === "1") {
    parentSampled = true;
  } else if (matches[3] === "0") {
    parentSampled = false;
  }
  return {
    traceId: matches[1],
    parentSampled,
    parentSpanId: matches[2]
  };
}
function propagationContextFromHeaders(sentryTrace, baggage) {
  const traceparentData = extractTraceparentData(sentryTrace);
  const dynamicSamplingContext = baggageHeaderToDynamicSamplingContext(baggage);
  if (!traceparentData?.traceId) {
    return {
      traceId: generateTraceId(),
      sampleRand: Math.random()
    };
  }
  const sampleRand = getSampleRandFromTraceparentAndDsc(traceparentData, dynamicSamplingContext);
  if (dynamicSamplingContext) {
    dynamicSamplingContext.sample_rand = sampleRand.toString();
  }
  const {
    traceId,
    parentSpanId,
    parentSampled
  } = traceparentData;
  return {
    traceId,
    parentSpanId,
    sampled: parentSampled,
    dsc: dynamicSamplingContext || {},
    // If we have traceparent data but no DSC it means we are not head of trace and we must freeze it
    sampleRand
  };
}
function generateSentryTraceHeader(traceId = generateTraceId(), spanId = generateSpanId(), sampled) {
  let sampledString = "";
  if (sampled !== void 0) {
    sampledString = sampled ? "-1" : "-0";
  }
  return `${traceId}-${spanId}${sampledString}`;
}
function getSampleRandFromTraceparentAndDsc(traceparentData, dsc) {
  const parsedSampleRand = parseSampleRate(dsc?.sample_rand);
  if (parsedSampleRand !== void 0) {
    return parsedSampleRand;
  }
  const parsedSampleRate = parseSampleRate(dsc?.sample_rate);
  if (parsedSampleRate && traceparentData?.parentSampled !== void 0) {
    return traceparentData.parentSampled ? (
      // Returns a sample rand with positive sampling decision [0, sampleRate)
      Math.random() * parsedSampleRate
    ) : (
      // Returns a sample rand with negative sampling decision [sampleRate, 1)
      parsedSampleRate + Math.random() * (1 - parsedSampleRate)
    );
  } else {
    return Math.random();
  }
}

// node_modules/@sentry/core/build/esm/utils/spanUtils.js
var TRACE_FLAG_NONE = 0;
var TRACE_FLAG_SAMPLED = 1;
var hasShownSpanDropWarning = false;
function spanToTransactionTraceContext(span) {
  const {
    spanId: span_id,
    traceId: trace_id
  } = span.spanContext();
  const {
    data,
    op,
    parent_span_id,
    status,
    origin,
    links
  } = spanToJSON(span);
  return {
    parent_span_id,
    span_id,
    trace_id,
    data,
    op,
    status,
    origin,
    links
  };
}
function spanToTraceContext(span) {
  const {
    spanId,
    traceId: trace_id,
    isRemote
  } = span.spanContext();
  const parent_span_id = isRemote ? spanId : spanToJSON(span).parent_span_id;
  const scope = getCapturedScopesOnSpan(span).scope;
  const span_id = isRemote ? scope?.getPropagationContext().propagationSpanId || generateSpanId() : spanId;
  return {
    parent_span_id,
    span_id,
    trace_id
  };
}
function spanToTraceHeader(span) {
  const {
    traceId,
    spanId
  } = span.spanContext();
  const sampled = spanIsSampled(span);
  return generateSentryTraceHeader(traceId, spanId, sampled);
}
function convertSpanLinksForEnvelope(links) {
  if (links && links.length > 0) {
    return links.map((_a) => {
      var _b = _a, {
        context: _c
      } = _b, _d = _c, {
        spanId,
        traceId,
        traceFlags
      } = _d, restContext = __objRest(_d, [
        "spanId",
        "traceId",
        "traceFlags"
      ]), {
        attributes
      } = _b;
      return __spreadValues({
        span_id: spanId,
        trace_id: traceId,
        sampled: traceFlags === TRACE_FLAG_SAMPLED,
        attributes
      }, restContext);
    });
  } else {
    return void 0;
  }
}
function spanTimeInputToSeconds(input) {
  if (typeof input === "number") {
    return ensureTimestampInSeconds(input);
  }
  if (Array.isArray(input)) {
    return input[0] + input[1] / 1e9;
  }
  if (input instanceof Date) {
    return ensureTimestampInSeconds(input.getTime());
  }
  return timestampInSeconds();
}
function ensureTimestampInSeconds(timestamp) {
  const isMs = timestamp > 9999999999;
  return isMs ? timestamp / 1e3 : timestamp;
}
function spanToJSON(span) {
  if (spanIsSentrySpan(span)) {
    return span.getSpanJSON();
  }
  const {
    spanId: span_id,
    traceId: trace_id
  } = span.spanContext();
  if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
    const {
      attributes,
      startTime,
      name,
      endTime,
      status,
      links
    } = span;
    const parentSpanId = "parentSpanId" in span ? span.parentSpanId : "parentSpanContext" in span ? span.parentSpanContext?.spanId : void 0;
    return {
      span_id,
      trace_id,
      data: attributes,
      description: name,
      parent_span_id: parentSpanId,
      start_timestamp: spanTimeInputToSeconds(startTime),
      // This is [0,0] by default in OTEL, in which case we want to interpret this as no end time
      timestamp: spanTimeInputToSeconds(endTime) || void 0,
      status: getStatusMessage(status),
      op: attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
      origin: attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
      links: convertSpanLinksForEnvelope(links)
    };
  }
  return {
    span_id,
    trace_id,
    start_timestamp: 0,
    data: {}
  };
}
function spanIsOpenTelemetrySdkTraceBaseSpan(span) {
  const castSpan = span;
  return !!castSpan.attributes && !!castSpan.startTime && !!castSpan.name && !!castSpan.endTime && !!castSpan.status;
}
function spanIsSentrySpan(span) {
  return typeof span.getSpanJSON === "function";
}
function spanIsSampled(span) {
  const {
    traceFlags
  } = span.spanContext();
  return traceFlags === TRACE_FLAG_SAMPLED;
}
function getStatusMessage(status) {
  if (!status || status.code === SPAN_STATUS_UNSET) {
    return void 0;
  }
  if (status.code === SPAN_STATUS_OK) {
    return "ok";
  }
  return status.message || "unknown_error";
}
var CHILD_SPANS_FIELD = "_sentryChildSpans";
var ROOT_SPAN_FIELD = "_sentryRootSpan";
function addChildSpanToSpan(span, childSpan) {
  const rootSpan = span[ROOT_SPAN_FIELD] || span;
  addNonEnumerableProperty(childSpan, ROOT_SPAN_FIELD, rootSpan);
  if (span[CHILD_SPANS_FIELD]) {
    span[CHILD_SPANS_FIELD].add(childSpan);
  } else {
    addNonEnumerableProperty(span, CHILD_SPANS_FIELD, /* @__PURE__ */ new Set([childSpan]));
  }
}
function removeChildSpanFromSpan(span, childSpan) {
  if (span[CHILD_SPANS_FIELD]) {
    span[CHILD_SPANS_FIELD].delete(childSpan);
  }
}
function getSpanDescendants(span) {
  const resultSet = /* @__PURE__ */ new Set();
  function addSpanChildren(span2) {
    if (resultSet.has(span2)) {
      return;
    } else if (spanIsSampled(span2)) {
      resultSet.add(span2);
      const childSpans = span2[CHILD_SPANS_FIELD] ? Array.from(span2[CHILD_SPANS_FIELD]) : [];
      for (const childSpan of childSpans) {
        addSpanChildren(childSpan);
      }
    }
  }
  addSpanChildren(span);
  return Array.from(resultSet);
}
function getRootSpan(span) {
  return span[ROOT_SPAN_FIELD] || span;
}
function getActiveSpan() {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (acs.getActiveSpan) {
    return acs.getActiveSpan();
  }
  return _getSpanForScope(getCurrentScope());
}
function showSpanDropWarning() {
  if (!hasShownSpanDropWarning) {
    consoleSandbox(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.");
    });
    hasShownSpanDropWarning = true;
  }
}

// node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js
var STACKTRACE_FRAME_LIMIT = 50;
var UNKNOWN_FUNCTION = "?";
var WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
var STRIP_FRAME_REGEXP = /captureMessage|captureException/;
function createStackParser(...parsers) {
  const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map((p) => p[1]);
  return (stack, skipFirstLines = 0, framesToPop = 0) => {
    const frames = [];
    const lines = stack.split("\n");
    for (let i = skipFirstLines; i < lines.length; i++) {
      const line = lines[i];
      if (line.length > 1024) {
        continue;
      }
      const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
      if (cleanedLine.match(/\S*Error: /)) {
        continue;
      }
      for (const parser of sortedParsers) {
        const frame = parser(cleanedLine);
        if (frame) {
          frames.push(frame);
          break;
        }
      }
      if (frames.length >= STACKTRACE_FRAME_LIMIT + framesToPop) {
        break;
      }
    }
    return stripSentryFramesAndReverse(frames.slice(framesToPop));
  };
}
function stackParserFromStackParserOptions(stackParser) {
  if (Array.isArray(stackParser)) {
    return createStackParser(...stackParser);
  }
  return stackParser;
}
function stripSentryFramesAndReverse(stack) {
  if (!stack.length) {
    return [];
  }
  const localStack = Array.from(stack);
  if (/sentryWrapped/.test(getLastStackFrame(localStack).function || "")) {
    localStack.pop();
  }
  localStack.reverse();
  if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
    localStack.pop();
    if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
      localStack.pop();
    }
  }
  return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map((frame) => __spreadProps(__spreadValues({}, frame), {
    filename: frame.filename || getLastStackFrame(localStack).filename,
    function: frame.function || UNKNOWN_FUNCTION
  }));
}
function getLastStackFrame(arr) {
  return arr[arr.length - 1] || {};
}
var defaultFunctionName = "<anonymous>";
function getFunctionName(fn) {
  try {
    if (!fn || typeof fn !== "function") {
      return defaultFunctionName;
    }
    return fn.name || defaultFunctionName;
  } catch (e2) {
    return defaultFunctionName;
  }
}
function getFramesFromEvent(event) {
  const exception = event.exception;
  if (exception) {
    const frames = [];
    try {
      exception.values.forEach((value) => {
        if (value.stacktrace.frames) {
          frames.push(...value.stacktrace.frames);
        }
      });
      return frames;
    } catch (_oO) {
      return void 0;
    }
  }
  return void 0;
}

// node_modules/@sentry/core/build/esm/utils-hoist/instrument/handlers.js
var handlers = {};
var instrumented = {};
function addHandler(type, handler) {
  handlers[type] = handlers[type] || [];
  handlers[type].push(handler);
}
function maybeInstrument(type, instrumentFn) {
  if (!instrumented[type]) {
    instrumented[type] = true;
    try {
      instrumentFn();
    } catch (e2) {
      DEBUG_BUILD && logger.error(`Error while instrumenting ${type}`, e2);
    }
  }
}
function triggerHandlers(type, data) {
  const typeHandlers = type && handlers[type];
  if (!typeHandlers) {
    return;
  }
  for (const handler of typeHandlers) {
    try {
      handler(data);
    } catch (e2) {
      DEBUG_BUILD && logger.error(`Error while triggering instrumentation handler.
Type: ${type}
Name: ${getFunctionName(handler)}
Error:`, e2);
    }
  }
}

// node_modules/@sentry/core/build/esm/utils-hoist/instrument/globalError.js
var _oldOnErrorHandler = null;
function addGlobalErrorInstrumentationHandler(handler) {
  const type = "error";
  addHandler(type, handler);
  maybeInstrument(type, instrumentError);
}
function instrumentError() {
  _oldOnErrorHandler = GLOBAL_OBJ.onerror;
  GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const handlerData = {
      column,
      error,
      line,
      msg,
      url
    };
    triggerHandlers("error", handlerData);
    if (_oldOnErrorHandler) {
      return _oldOnErrorHandler.apply(this, arguments);
    }
    return false;
  };
  GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}

// node_modules/@sentry/core/build/esm/utils-hoist/instrument/globalUnhandledRejection.js
var _oldOnUnhandledRejectionHandler = null;
function addGlobalUnhandledRejectionInstrumentationHandler(handler) {
  const type = "unhandledrejection";
  addHandler(type, handler);
  maybeInstrument(type, instrumentUnhandledRejection);
}
function instrumentUnhandledRejection() {
  _oldOnUnhandledRejectionHandler = GLOBAL_OBJ.onunhandledrejection;
  GLOBAL_OBJ.onunhandledrejection = function(e2) {
    const handlerData = e2;
    triggerHandlers("unhandledrejection", handlerData);
    if (_oldOnUnhandledRejectionHandler) {
      return _oldOnUnhandledRejectionHandler.apply(this, arguments);
    }
    return true;
  };
  GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}

// node_modules/@sentry/core/build/esm/tracing/errors.js
var errorsInstrumented = false;
function registerSpanErrorInstrumentation() {
  if (errorsInstrumented) {
    return;
  }
  errorsInstrumented = true;
  addGlobalErrorInstrumentationHandler(errorCallback);
  addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
}
function errorCallback() {
  const activeSpan = getActiveSpan();
  const rootSpan = activeSpan && getRootSpan(activeSpan);
  if (rootSpan) {
    const message = "internal_error";
    DEBUG_BUILD && logger.log(`[Tracing] Root span: ${message} -> Global error occurred`);
    rootSpan.setStatus({
      code: SPAN_STATUS_ERROR,
      message
    });
  }
}
errorCallback.tag = "sentry_tracingErrorCallback";

// node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js
function hasSpansEnabled(maybeOptions) {
  if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const options = maybeOptions || getClient()?.getOptions();
  return !!options && // Note: This check is `!= null`, meaning "nullish". `0` is not "nullish", `undefined` and `null` are. (This comment was brought to you by 15 minutes of questioning life)
  (options.tracesSampleRate != null || !!options.tracesSampler);
}

// node_modules/@sentry/core/build/esm/constants.js
var DEFAULT_ENVIRONMENT = "production";

// node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js
var FROZEN_DSC_FIELD = "_frozenDsc";
function freezeDscOnSpan(span, dsc) {
  const spanWithMaybeDsc = span;
  addNonEnumerableProperty(spanWithMaybeDsc, FROZEN_DSC_FIELD, dsc);
}
function getDynamicSamplingContextFromClient(trace_id, client) {
  const options = client.getOptions();
  const {
    publicKey: public_key
  } = client.getDsn() || {};
  const dsc = {
    environment: options.environment || DEFAULT_ENVIRONMENT,
    release: options.release,
    public_key,
    trace_id
  };
  client.emit("createDsc", dsc);
  return dsc;
}
function getDynamicSamplingContextFromScope(client, scope) {
  const propagationContext = scope.getPropagationContext();
  return propagationContext.dsc || getDynamicSamplingContextFromClient(propagationContext.traceId, client);
}
function getDynamicSamplingContextFromSpan(span) {
  const client = getClient();
  if (!client) {
    return {};
  }
  const rootSpan = getRootSpan(span);
  const rootSpanJson = spanToJSON(rootSpan);
  const rootSpanAttributes = rootSpanJson.data;
  const traceState = rootSpan.spanContext().traceState;
  const rootSpanSampleRate = traceState?.get("sentry.sample_rate") ?? rootSpanAttributes[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] ?? rootSpanAttributes[SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE];
  function applyLocalSampleRateToDsc(dsc2) {
    if (typeof rootSpanSampleRate === "number" || typeof rootSpanSampleRate === "string") {
      dsc2.sample_rate = `${rootSpanSampleRate}`;
    }
    return dsc2;
  }
  const frozenDsc = rootSpan[FROZEN_DSC_FIELD];
  if (frozenDsc) {
    return applyLocalSampleRateToDsc(frozenDsc);
  }
  const traceStateDsc = traceState?.get("sentry.dsc");
  const dscOnTraceState = traceStateDsc && baggageHeaderToDynamicSamplingContext(traceStateDsc);
  if (dscOnTraceState) {
    return applyLocalSampleRateToDsc(dscOnTraceState);
  }
  const dsc = getDynamicSamplingContextFromClient(span.spanContext().traceId, client);
  const source = rootSpanAttributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
  const name = rootSpanJson.description;
  if (source !== "url" && name) {
    dsc.transaction = name;
  }
  if (hasSpansEnabled()) {
    dsc.sampled = String(spanIsSampled(rootSpan));
    dsc.sample_rand = // In OTEL we store the sample rand on the trace state because we cannot access scopes for NonRecordingSpans
    // The Sentry OTEL SpanSampler takes care of writing the sample rand on the root span
    traceState?.get("sentry.sample_rand") ?? // On all other platforms we can actually get the scopes from a root span (we use this as a fallback)
    getCapturedScopesOnSpan(rootSpan).scope?.getPropagationContext().sampleRand.toString();
  }
  applyLocalSampleRateToDsc(dsc);
  client.emit("createDsc", dsc, rootSpan);
  return dsc;
}

// node_modules/@sentry/core/build/esm/tracing/sentryNonRecordingSpan.js
var SentryNonRecordingSpan = class {
  constructor(spanContext = {}) {
    this._traceId = spanContext.traceId || generateTraceId();
    this._spanId = spanContext.spanId || generateSpanId();
  }
  /** @inheritdoc */
  spanContext() {
    return {
      spanId: this._spanId,
      traceId: this._traceId,
      traceFlags: TRACE_FLAG_NONE
    };
  }
  /** @inheritdoc */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  end(_timestamp) {
  }
  /** @inheritdoc */
  setAttribute(_key, _value) {
    return this;
  }
  /** @inheritdoc */
  setAttributes(_values) {
    return this;
  }
  /** @inheritdoc */
  setStatus(_status) {
    return this;
  }
  /** @inheritdoc */
  updateName(_name) {
    return this;
  }
  /** @inheritdoc */
  isRecording() {
    return false;
  }
  /** @inheritdoc */
  addEvent(_name, _attributesOrStartTime, _startTime) {
    return this;
  }
  /** @inheritDoc */
  addLink(_link) {
    return this;
  }
  /** @inheritDoc */
  addLinks(_links) {
    return this;
  }
  /**
   * This should generally not be used,
   * but we need it for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
  recordException(_exception, _time) {
  }
};

// node_modules/@sentry/core/build/esm/tracing/logSpans.js
function logSpanStart(span) {
  if (!DEBUG_BUILD) return;
  const {
    description = "< unknown name >",
    op = "< unknown op >",
    parent_span_id: parentSpanId
  } = spanToJSON(span);
  const {
    spanId
  } = span.spanContext();
  const sampled = spanIsSampled(span);
  const rootSpan = getRootSpan(span);
  const isRootSpan = rootSpan === span;
  const header = `[Tracing] Starting ${sampled ? "sampled" : "unsampled"} ${isRootSpan ? "root " : ""}span`;
  const infoParts = [`op: ${op}`, `name: ${description}`, `ID: ${spanId}`];
  if (parentSpanId) {
    infoParts.push(`parent ID: ${parentSpanId}`);
  }
  if (!isRootSpan) {
    const {
      op: op2,
      description: description2
    } = spanToJSON(rootSpan);
    infoParts.push(`root ID: ${rootSpan.spanContext().spanId}`);
    if (op2) {
      infoParts.push(`root op: ${op2}`);
    }
    if (description2) {
      infoParts.push(`root description: ${description2}`);
    }
  }
  logger.log(`${header}
  ${infoParts.join("\n  ")}`);
}
function logSpanEnd(span) {
  if (!DEBUG_BUILD) return;
  const {
    description = "< unknown name >",
    op = "< unknown op >"
  } = spanToJSON(span);
  const {
    spanId
  } = span.spanContext();
  const rootSpan = getRootSpan(span);
  const isRootSpan = rootSpan === span;
  const msg = `[Tracing] Finishing "${op}" ${isRootSpan ? "root " : ""}span "${description}" with ID ${spanId}`;
  logger.log(msg);
}

// node_modules/@sentry/core/build/esm/tracing/sampling.js
function sampleSpan(options, samplingContext, sampleRand) {
  if (!hasSpansEnabled(options)) {
    return [false];
  }
  let localSampleRateWasApplied = void 0;
  let sampleRate;
  if (typeof options.tracesSampler === "function") {
    sampleRate = options.tracesSampler(__spreadProps(__spreadValues({}, samplingContext), {
      inheritOrSampleWith: (fallbackSampleRate) => {
        if (typeof samplingContext.parentSampleRate === "number") {
          return samplingContext.parentSampleRate;
        }
        if (typeof samplingContext.parentSampled === "boolean") {
          return Number(samplingContext.parentSampled);
        }
        return fallbackSampleRate;
      }
    }));
    localSampleRateWasApplied = true;
  } else if (samplingContext.parentSampled !== void 0) {
    sampleRate = samplingContext.parentSampled;
  } else if (typeof options.tracesSampleRate !== "undefined") {
    sampleRate = options.tracesSampleRate;
    localSampleRateWasApplied = true;
  }
  const parsedSampleRate = parseSampleRate(sampleRate);
  if (parsedSampleRate === void 0) {
    DEBUG_BUILD && logger.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(sampleRate)} of type ${JSON.stringify(typeof sampleRate)}.`);
    return [false];
  }
  if (!parsedSampleRate) {
    DEBUG_BUILD && logger.log(`[Tracing] Discarding transaction because ${typeof options.tracesSampler === "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`);
    return [false, parsedSampleRate, localSampleRateWasApplied];
  }
  const shouldSample = sampleRand < parsedSampleRate;
  if (!shouldSample) {
    DEBUG_BUILD && logger.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(sampleRate)})`);
  }
  return [shouldSample, parsedSampleRate, localSampleRateWasApplied];
}

// node_modules/@sentry/core/build/esm/utils-hoist/dsn.js
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
  return protocol === "http" || protocol === "https";
}
function dsnToString(dsn, withPassword = false) {
  const {
    host,
    path,
    pass,
    port,
    projectId,
    protocol,
    publicKey
  } = dsn;
  return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
}
function dsnFromString(str) {
  const match = DSN_REGEX.exec(str);
  if (!match) {
    consoleSandbox(() => {
      console.error(`Invalid Sentry Dsn: ${str}`);
    });
    return void 0;
  }
  const [protocol, publicKey, pass = "", host = "", port = "", lastPath = ""] = match.slice(1);
  let path = "";
  let projectId = lastPath;
  const split = projectId.split("/");
  if (split.length > 1) {
    path = split.slice(0, -1).join("/");
    projectId = split.pop();
  }
  if (projectId) {
    const projectMatch = projectId.match(/^\d+/);
    if (projectMatch) {
      projectId = projectMatch[0];
    }
  }
  return dsnFromComponents({
    host,
    pass,
    path,
    projectId,
    port,
    protocol,
    publicKey
  });
}
function dsnFromComponents(components) {
  return {
    protocol: components.protocol,
    publicKey: components.publicKey || "",
    pass: components.pass || "",
    host: components.host,
    port: components.port || "",
    path: components.path || "",
    projectId: components.projectId
  };
}
function validateDsn(dsn) {
  if (!DEBUG_BUILD) {
    return true;
  }
  const {
    port,
    projectId,
    protocol
  } = dsn;
  const requiredComponents = ["protocol", "publicKey", "host", "projectId"];
  const hasMissingRequiredComponent = requiredComponents.find((component) => {
    if (!dsn[component]) {
      logger.error(`Invalid Sentry Dsn: ${component} missing`);
      return true;
    }
    return false;
  });
  if (hasMissingRequiredComponent) {
    return false;
  }
  if (!projectId.match(/^\d+$/)) {
    logger.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
    return false;
  }
  if (!isValidProtocol(protocol)) {
    logger.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
    return false;
  }
  if (port && isNaN(parseInt(port, 10))) {
    logger.error(`Invalid Sentry Dsn: Invalid port ${port}`);
    return false;
  }
  return true;
}
function makeDsn(from2) {
  const components = typeof from2 === "string" ? dsnFromString(from2) : dsnFromComponents(from2);
  if (!components || !validateDsn(components)) {
    return void 0;
  }
  return components;
}

// node_modules/@sentry/core/build/esm/utils-hoist/normalize.js
function normalize(input, depth = 100, maxProperties = Infinity) {
  try {
    return visit("", input, depth, maxProperties);
  } catch (err) {
    return {
      ERROR: `**non-serializable** (${err})`
    };
  }
}
function normalizeToSize(object, depth = 3, maxSize = 100 * 1024) {
  const normalized = normalize(object, depth);
  if (jsonSize(normalized) > maxSize) {
    return normalizeToSize(object, depth - 1, maxSize);
  }
  return normalized;
}
function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
  const [memoize, unmemoize] = memo;
  if (value == null || // this matches null and undefined -> eqeq not eqeqeq
  ["boolean", "string"].includes(typeof value) || typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  const stringified = stringifyValue(key, value);
  if (!stringified.startsWith("[object ")) {
    return stringified;
  }
  if (value["__sentry_skip_normalization__"]) {
    return value;
  }
  const remainingDepth = typeof value["__sentry_override_normalization_depth__"] === "number" ? value["__sentry_override_normalization_depth__"] : depth;
  if (remainingDepth === 0) {
    return stringified.replace("object ", "");
  }
  if (memoize(value)) {
    return "[Circular ~]";
  }
  const valueWithToJSON = value;
  if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") {
    try {
      const jsonValue = valueWithToJSON.toJSON();
      return visit("", jsonValue, remainingDepth - 1, maxProperties, memo);
    } catch (err) {
    }
  }
  const normalized = Array.isArray(value) ? [] : {};
  let numAdded = 0;
  const visitable = convertToPlainObject(value);
  for (const visitKey in visitable) {
    if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
      continue;
    }
    if (numAdded >= maxProperties) {
      normalized[visitKey] = "[MaxProperties ~]";
      break;
    }
    const visitValue = visitable[visitKey];
    normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);
    numAdded++;
  }
  unmemoize(value);
  return normalized;
}
function stringifyValue(key, value) {
  try {
    if (key === "domain" && value && typeof value === "object" && value._events) {
      return "[Domain]";
    }
    if (key === "domainEmitter") {
      return "[DomainEmitter]";
    }
    if (typeof global !== "undefined" && value === global) {
      return "[Global]";
    }
    if (typeof window !== "undefined" && value === window) {
      return "[Window]";
    }
    if (typeof document !== "undefined" && value === document) {
      return "[Document]";
    }
    if (isVueViewModel(value)) {
      return "[VueViewModel]";
    }
    if (isSyntheticEvent(value)) {
      return "[SyntheticEvent]";
    }
    if (typeof value === "number" && !Number.isFinite(value)) {
      return `[${value}]`;
    }
    if (typeof value === "function") {
      return `[Function: ${getFunctionName(value)}]`;
    }
    if (typeof value === "symbol") {
      return `[${String(value)}]`;
    }
    if (typeof value === "bigint") {
      return `[BigInt: ${String(value)}]`;
    }
    const objName = getConstructorName(value);
    if (/^HTML(\w*)Element$/.test(objName)) {
      return `[HTMLElement: ${objName}]`;
    }
    return `[object ${objName}]`;
  } catch (err) {
    return `**non-serializable** (${err})`;
  }
}
function getConstructorName(value) {
  const prototype = Object.getPrototypeOf(value);
  return prototype?.constructor ? prototype.constructor.name : "null prototype";
}
function utf8Length(value) {
  return ~-encodeURI(value).split(/%..|./).length;
}
function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}
function memoBuilder() {
  const inner = /* @__PURE__ */ new WeakSet();
  function memoize(obj) {
    if (inner.has(obj)) {
      return true;
    }
    inner.add(obj);
    return false;
  }
  function unmemoize(obj) {
    inner.delete(obj);
  }
  return [memoize, unmemoize];
}

// node_modules/@sentry/core/build/esm/utils-hoist/envelope.js
function createEnvelope(headers, items = []) {
  return [headers, items];
}
function addItemToEnvelope(envelope, newItem) {
  const [headers, items] = envelope;
  return [headers, [...items, newItem]];
}
function forEachEnvelopeItem(envelope, callback) {
  const envelopeItems = envelope[1];
  for (const envelopeItem of envelopeItems) {
    const envelopeItemType = envelopeItem[0].type;
    const result = callback(envelopeItem, envelopeItemType);
    if (result) {
      return true;
    }
  }
  return false;
}
function encodeUTF8(input) {
  const carrier = getSentryCarrier(GLOBAL_OBJ);
  return carrier.encodePolyfill ? carrier.encodePolyfill(input) : new TextEncoder().encode(input);
}
function serializeEnvelope(envelope) {
  const [envHeaders, items] = envelope;
  let parts = JSON.stringify(envHeaders);
  function append(next) {
    if (typeof parts === "string") {
      parts = typeof next === "string" ? parts + next : [encodeUTF8(parts), next];
    } else {
      parts.push(typeof next === "string" ? encodeUTF8(next) : next);
    }
  }
  for (const item of items) {
    const [itemHeaders, payload] = item;
    append(`
${JSON.stringify(itemHeaders)}
`);
    if (typeof payload === "string" || payload instanceof Uint8Array) {
      append(payload);
    } else {
      let stringifiedPayload;
      try {
        stringifiedPayload = JSON.stringify(payload);
      } catch (e2) {
        stringifiedPayload = JSON.stringify(normalize(payload));
      }
      append(stringifiedPayload);
    }
  }
  return typeof parts === "string" ? parts : concatBuffers(parts);
}
function concatBuffers(buffers) {
  const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
  const merged = new Uint8Array(totalLength);
  let offset = 0;
  for (const buffer of buffers) {
    merged.set(buffer, offset);
    offset += buffer.length;
  }
  return merged;
}
function createSpanEnvelopeItem(spanJson) {
  const spanHeaders = {
    type: "span"
  };
  return [spanHeaders, spanJson];
}
function createAttachmentEnvelopeItem(attachment) {
  const buffer = typeof attachment.data === "string" ? encodeUTF8(attachment.data) : attachment.data;
  return [{
    type: "attachment",
    length: buffer.length,
    filename: attachment.filename,
    content_type: attachment.contentType,
    attachment_type: attachment.attachmentType
  }, buffer];
}
var ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  span: "span",
  raw_security: "security",
  log: "log_item"
};
function envelopeItemTypeToDataCategory(type) {
  return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
}
function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
  if (!metadataOrEvent?.sdk) {
    return;
  }
  const {
    name,
    version
  } = metadataOrEvent.sdk;
  return {
    name,
    version
  };
}
function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
  const dynamicSamplingContext = event.sdkProcessingMetadata?.dynamicSamplingContext;
  return __spreadValues(__spreadValues(__spreadValues({
    event_id: event.event_id,
    sent_at: (/* @__PURE__ */ new Date()).toISOString()
  }, sdkInfo && {
    sdk: sdkInfo
  }), !!tunnel && dsn && {
    dsn: dsnToString(dsn)
  }), dynamicSamplingContext && {
    trace: dynamicSamplingContext
  });
}

// node_modules/@sentry/core/build/esm/envelope.js
function enhanceEventWithSdkInfo(event, sdkInfo) {
  if (!sdkInfo) {
    return event;
  }
  event.sdk = event.sdk || {};
  event.sdk.name = event.sdk.name || sdkInfo.name;
  event.sdk.version = event.sdk.version || sdkInfo.version;
  event.sdk.integrations = [...event.sdk.integrations || [], ...sdkInfo.integrations || []];
  event.sdk.packages = [...event.sdk.packages || [], ...sdkInfo.packages || []];
  return event;
}
function createSessionEnvelope(session, dsn, metadata, tunnel) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const envelopeHeaders = __spreadValues(__spreadValues({
    sent_at: (/* @__PURE__ */ new Date()).toISOString()
  }, sdkInfo && {
    sdk: sdkInfo
  }), !!tunnel && dsn && {
    dsn: dsnToString(dsn)
  });
  const envelopeItem = "aggregates" in session ? [{
    type: "sessions"
  }, session] : [{
    type: "session"
  }, session.toJSON()];
  return createEnvelope(envelopeHeaders, [envelopeItem]);
}
function createEventEnvelope(event, dsn, metadata, tunnel) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const eventType = event.type && event.type !== "replay_event" ? event.type : "event";
  enhanceEventWithSdkInfo(event, metadata?.sdk);
  const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
  delete event.sdkProcessingMetadata;
  const eventItem = [{
    type: eventType
  }, event];
  return createEnvelope(envelopeHeaders, [eventItem]);
}
function createSpanEnvelope(spans, client) {
  function dscHasRequiredProps(dsc2) {
    return !!dsc2.trace_id && !!dsc2.public_key;
  }
  const dsc = getDynamicSamplingContextFromSpan(spans[0]);
  const dsn = client?.getDsn();
  const tunnel = client?.getOptions().tunnel;
  const headers = __spreadValues(__spreadValues({
    sent_at: (/* @__PURE__ */ new Date()).toISOString()
  }, dscHasRequiredProps(dsc) && {
    trace: dsc
  }), !!tunnel && dsn && {
    dsn: dsnToString(dsn)
  });
  const beforeSendSpan = client?.getOptions().beforeSendSpan;
  const convertToSpanJSON = beforeSendSpan ? (span) => {
    const spanJson = spanToJSON(span);
    const processedSpan = beforeSendSpan(spanJson);
    if (!processedSpan) {
      showSpanDropWarning();
      return spanJson;
    }
    return processedSpan;
  } : spanToJSON;
  const items = [];
  for (const span of spans) {
    const spanJson = convertToSpanJSON(span);
    if (spanJson) {
      items.push(createSpanEnvelopeItem(spanJson));
    }
  }
  return createEnvelope(headers, items);
}

// node_modules/@sentry/core/build/esm/tracing/measurement.js
function setMeasurement(name, value, unit, activeSpan = getActiveSpan()) {
  const rootSpan = activeSpan && getRootSpan(activeSpan);
  if (rootSpan) {
    DEBUG_BUILD && logger.log(`[Measurement] Setting measurement on root span: ${name} = ${value} ${unit}`);
    rootSpan.addEvent(name, {
      [SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: value,
      [SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: unit
    });
  }
}
function timedEventsToMeasurements(events) {
  if (!events || events.length === 0) {
    return void 0;
  }
  const measurements = {};
  events.forEach((event) => {
    const attributes = event.attributes || {};
    const unit = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
    const value = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
    if (typeof unit === "string" && typeof value === "number") {
      measurements[event.name] = {
        value,
        unit
      };
    }
  });
  return measurements;
}

// node_modules/@sentry/core/build/esm/tracing/sentrySpan.js
var MAX_SPAN_COUNT = 1e3;
var SentrySpan = class {
  /** Epoch timestamp in seconds when the span started. */
  /** Epoch timestamp in seconds when the span ended. */
  /** Internal keeper of the status */
  /** The timed events added to this span. */
  /** if true, treat span as a standalone span (not part of a transaction) */
  /**
   * You should never call the constructor manually, always use `Sentry.startSpan()`
   * or other span methods.
   * @internal
   * @hideconstructor
   * @hidden
   */
  constructor(spanContext = {}) {
    this._traceId = spanContext.traceId || generateTraceId();
    this._spanId = spanContext.spanId || generateSpanId();
    this._startTime = spanContext.startTimestamp || timestampInSeconds();
    this._links = spanContext.links;
    this._attributes = {};
    this.setAttributes(__spreadValues({
      [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual",
      [SEMANTIC_ATTRIBUTE_SENTRY_OP]: spanContext.op
    }, spanContext.attributes));
    this._name = spanContext.name;
    if (spanContext.parentSpanId) {
      this._parentSpanId = spanContext.parentSpanId;
    }
    if ("sampled" in spanContext) {
      this._sampled = spanContext.sampled;
    }
    if (spanContext.endTimestamp) {
      this._endTime = spanContext.endTimestamp;
    }
    this._events = [];
    this._isStandaloneSpan = spanContext.isStandalone;
    if (this._endTime) {
      this._onSpanEnded();
    }
  }
  /** @inheritDoc */
  addLink(link) {
    if (this._links) {
      this._links.push(link);
    } else {
      this._links = [link];
    }
    return this;
  }
  /** @inheritDoc */
  addLinks(links) {
    if (this._links) {
      this._links.push(...links);
    } else {
      this._links = links;
    }
    return this;
  }
  /**
   * This should generally not be used,
   * but it is needed for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
  recordException(_exception, _time) {
  }
  /** @inheritdoc */
  spanContext() {
    const {
      _spanId: spanId,
      _traceId: traceId,
      _sampled: sampled
    } = this;
    return {
      spanId,
      traceId,
      traceFlags: sampled ? TRACE_FLAG_SAMPLED : TRACE_FLAG_NONE
    };
  }
  /** @inheritdoc */
  setAttribute(key, value) {
    if (value === void 0) {
      delete this._attributes[key];
    } else {
      this._attributes[key] = value;
    }
    return this;
  }
  /** @inheritdoc */
  setAttributes(attributes) {
    Object.keys(attributes).forEach((key) => this.setAttribute(key, attributes[key]));
    return this;
  }
  /**
   * This should generally not be used,
   * but we need it for browser tracing where we want to adjust the start time afterwards.
   * USE THIS WITH CAUTION!
   *
   * @hidden
   * @internal
   */
  updateStartTime(timeInput) {
    this._startTime = spanTimeInputToSeconds(timeInput);
  }
  /**
   * @inheritDoc
   */
  setStatus(value) {
    this._status = value;
    return this;
  }
  /**
   * @inheritDoc
   */
  updateName(name) {
    this._name = name;
    this.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom");
    return this;
  }
  /** @inheritdoc */
  end(endTimestamp) {
    if (this._endTime) {
      return;
    }
    this._endTime = spanTimeInputToSeconds(endTimestamp);
    logSpanEnd(this);
    this._onSpanEnded();
  }
  /**
   * Get JSON representation of this span.
   *
   * @hidden
   * @internal This method is purely for internal purposes and should not be used outside
   * of SDK code. If you need to get a JSON representation of a span,
   * use `spanToJSON(span)` instead.
   */
  getSpanJSON() {
    return {
      data: this._attributes,
      description: this._name,
      op: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: getStatusMessage(this._status),
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
      profile_id: this._attributes[SEMANTIC_ATTRIBUTE_PROFILE_ID],
      exclusive_time: this._attributes[SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
      measurements: timedEventsToMeasurements(this._events),
      is_segment: this._isStandaloneSpan && getRootSpan(this) === this || void 0,
      segment_id: this._isStandaloneSpan ? getRootSpan(this).spanContext().spanId : void 0,
      links: convertSpanLinksForEnvelope(this._links)
    };
  }
  /** @inheritdoc */
  isRecording() {
    return !this._endTime && !!this._sampled;
  }
  /**
   * @inheritdoc
   */
  addEvent(name, attributesOrStartTime, startTime) {
    DEBUG_BUILD && logger.log("[Tracing] Adding an event to span:", name);
    const time = isSpanTimeInput(attributesOrStartTime) ? attributesOrStartTime : startTime || timestampInSeconds();
    const attributes = isSpanTimeInput(attributesOrStartTime) ? {} : attributesOrStartTime || {};
    const event = {
      name,
      time: spanTimeInputToSeconds(time),
      attributes
    };
    this._events.push(event);
    return this;
  }
  /**
   * This method should generally not be used,
   * but for now we need a way to publicly check if the `_isStandaloneSpan` flag is set.
   * USE THIS WITH CAUTION!
   * @internal
   * @hidden
   * @experimental
   */
  isStandaloneSpan() {
    return !!this._isStandaloneSpan;
  }
  /** Emit `spanEnd` when the span is ended. */
  _onSpanEnded() {
    const client = getClient();
    if (client) {
      client.emit("spanEnd", this);
    }
    const isSegmentSpan = this._isStandaloneSpan || this === getRootSpan(this);
    if (!isSegmentSpan) {
      return;
    }
    if (this._isStandaloneSpan) {
      if (this._sampled) {
        sendSpanEnvelope(createSpanEnvelope([this], client));
      } else {
        DEBUG_BUILD && logger.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
        if (client) {
          client.recordDroppedEvent("sample_rate", "span");
        }
      }
      return;
    }
    const transactionEvent = this._convertSpanToTransaction();
    if (transactionEvent) {
      const scope = getCapturedScopesOnSpan(this).scope || getCurrentScope();
      scope.captureEvent(transactionEvent);
    }
  }
  /**
   * Finish the transaction & prepare the event to send to Sentry.
   */
  _convertSpanToTransaction() {
    if (!isFullFinishedSpan(spanToJSON(this))) {
      return void 0;
    }
    if (!this._name) {
      DEBUG_BUILD && logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
      this._name = "<unlabeled transaction>";
    }
    const {
      scope: capturedSpanScope,
      isolationScope: capturedSpanIsolationScope
    } = getCapturedScopesOnSpan(this);
    if (this._sampled !== true) {
      return void 0;
    }
    const finishedSpans = getSpanDescendants(this).filter((span) => span !== this && !isStandaloneSpan(span));
    const spans = finishedSpans.map((span) => spanToJSON(span)).filter(isFullFinishedSpan);
    const source = this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    delete this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    spans.forEach((span) => {
      delete span.data[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    });
    const transaction = __spreadValues({
      contexts: {
        trace: spanToTransactionTraceContext(this)
      },
      spans: (
        // spans.sort() mutates the array, but `spans` is already a copy so we can safely do this here
        // we do not use spans anymore after this point
        spans.length > MAX_SPAN_COUNT ? spans.sort((a, b) => a.start_timestamp - b.start_timestamp).slice(0, MAX_SPAN_COUNT) : spans
      ),
      start_timestamp: this._startTime,
      timestamp: this._endTime,
      transaction: this._name,
      type: "transaction",
      sdkProcessingMetadata: {
        capturedSpanScope,
        capturedSpanIsolationScope,
        dynamicSamplingContext: getDynamicSamplingContextFromSpan(this)
      }
    }, source && {
      transaction_info: {
        source
      }
    });
    const measurements = timedEventsToMeasurements(this._events);
    const hasMeasurements = measurements && Object.keys(measurements).length;
    if (hasMeasurements) {
      DEBUG_BUILD && logger.log("[Measurements] Adding measurements to transaction event", JSON.stringify(measurements, void 0, 2));
      transaction.measurements = measurements;
    }
    return transaction;
  }
};
function isSpanTimeInput(value) {
  return value && typeof value === "number" || value instanceof Date || Array.isArray(value);
}
function isFullFinishedSpan(input) {
  return !!input.start_timestamp && !!input.timestamp && !!input.span_id && !!input.trace_id;
}
function isStandaloneSpan(span) {
  return span instanceof SentrySpan && span.isStandaloneSpan();
}
function sendSpanEnvelope(envelope) {
  const client = getClient();
  if (!client) {
    return;
  }
  const spanItems = envelope[1];
  if (!spanItems || spanItems.length === 0) {
    client.recordDroppedEvent("before_send", "span");
    return;
  }
  client.sendEnvelope(envelope);
}

// node_modules/@sentry/core/build/esm/tracing/trace.js
var SUPPRESS_TRACING_KEY = "__SENTRY_SUPPRESS_TRACING__";
function startInactiveSpan(options) {
  const acs = getAcs();
  if (acs.startInactiveSpan) {
    return acs.startInactiveSpan(options);
  }
  const spanArguments = parseSentrySpanArguments(options);
  const {
    forceTransaction,
    parentSpan: customParentSpan
  } = options;
  const wrapper = options.scope ? (callback) => withScope2(options.scope, callback) : customParentSpan !== void 0 ? (callback) => withActiveSpan(customParentSpan, callback) : (callback) => callback();
  return wrapper(() => {
    const scope = getCurrentScope();
    const parentSpan = getParentSpan(scope);
    const shouldSkipSpan = options.onlyIfParent && !parentSpan;
    if (shouldSkipSpan) {
      return new SentryNonRecordingSpan();
    }
    return createChildOrRootSpan({
      parentSpan,
      spanArguments,
      forceTransaction,
      scope
    });
  });
}
function withActiveSpan(span, callback) {
  const acs = getAcs();
  if (acs.withActiveSpan) {
    return acs.withActiveSpan(span, callback);
  }
  return withScope2((scope) => {
    _setSpanForScope(scope, span || void 0);
    return callback(scope);
  });
}
function createChildOrRootSpan({
  parentSpan,
  spanArguments,
  forceTransaction,
  scope
}) {
  if (!hasSpansEnabled()) {
    const span2 = new SentryNonRecordingSpan();
    if (forceTransaction || !parentSpan) {
      const dsc = __spreadValues({
        sampled: "false",
        sample_rate: "0",
        transaction: spanArguments.name
      }, getDynamicSamplingContextFromSpan(span2));
      freezeDscOnSpan(span2, dsc);
    }
    return span2;
  }
  const isolationScope = getIsolationScope();
  let span;
  if (parentSpan && !forceTransaction) {
    span = _startChildSpan(parentSpan, scope, spanArguments);
    addChildSpanToSpan(parentSpan, span);
  } else if (parentSpan) {
    const dsc = getDynamicSamplingContextFromSpan(parentSpan);
    const {
      traceId,
      spanId: parentSpanId
    } = parentSpan.spanContext();
    const parentSampled = spanIsSampled(parentSpan);
    span = _startRootSpan(__spreadValues({
      traceId,
      parentSpanId
    }, spanArguments), scope, parentSampled);
    freezeDscOnSpan(span, dsc);
  } else {
    const {
      traceId,
      dsc,
      parentSpanId,
      sampled: parentSampled
    } = __spreadValues(__spreadValues({}, isolationScope.getPropagationContext()), scope.getPropagationContext());
    span = _startRootSpan(__spreadValues({
      traceId,
      parentSpanId
    }, spanArguments), scope, parentSampled);
    if (dsc) {
      freezeDscOnSpan(span, dsc);
    }
  }
  logSpanStart(span);
  setCapturedScopesOnSpan(span, scope, isolationScope);
  return span;
}
function parseSentrySpanArguments(options) {
  const exp = options.experimental || {};
  const initialCtx = __spreadValues({
    isStandalone: exp.standalone
  }, options);
  if (options.startTime) {
    const ctx = __spreadValues({}, initialCtx);
    ctx.startTimestamp = spanTimeInputToSeconds(options.startTime);
    delete ctx.startTime;
    return ctx;
  }
  return initialCtx;
}
function getAcs() {
  const carrier = getMainCarrier();
  return getAsyncContextStrategy(carrier);
}
function _startRootSpan(spanArguments, scope, parentSampled) {
  const client = getClient();
  const options = client?.getOptions() || {};
  const {
    name = ""
  } = spanArguments;
  const mutableSpanSamplingData = {
    spanAttributes: __spreadValues({}, spanArguments.attributes),
    spanName: name,
    parentSampled
  };
  client?.emit("beforeSampling", mutableSpanSamplingData, {
    decision: false
  });
  const finalParentSampled = mutableSpanSamplingData.parentSampled ?? parentSampled;
  const finalAttributes = mutableSpanSamplingData.spanAttributes;
  const currentPropagationContext = scope.getPropagationContext();
  const [sampled, sampleRate, localSampleRateWasApplied] = scope.getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY] ? [false] : sampleSpan(options, {
    name,
    parentSampled: finalParentSampled,
    attributes: finalAttributes,
    parentSampleRate: parseSampleRate(currentPropagationContext.dsc?.sample_rate)
  }, currentPropagationContext.sampleRand);
  const rootSpan = new SentrySpan(__spreadProps(__spreadValues({}, spanArguments), {
    attributes: __spreadValues({
      [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
      [SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: sampleRate !== void 0 && localSampleRateWasApplied ? sampleRate : void 0
    }, finalAttributes),
    sampled
  }));
  if (!sampled && client) {
    DEBUG_BUILD && logger.log("[Tracing] Discarding root span because its trace was not chosen to be sampled.");
    client.recordDroppedEvent("sample_rate", "transaction");
  }
  if (client) {
    client.emit("spanStart", rootSpan);
  }
  return rootSpan;
}
function _startChildSpan(parentSpan, scope, spanArguments) {
  const {
    spanId,
    traceId
  } = parentSpan.spanContext();
  const sampled = scope.getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY] ? false : spanIsSampled(parentSpan);
  const childSpan = sampled ? new SentrySpan(__spreadProps(__spreadValues({}, spanArguments), {
    parentSpanId: spanId,
    traceId,
    sampled
  })) : new SentryNonRecordingSpan({
    traceId
  });
  addChildSpanToSpan(parentSpan, childSpan);
  const client = getClient();
  if (client) {
    client.emit("spanStart", childSpan);
    if (spanArguments.endTimestamp) {
      client.emit("spanEnd", childSpan);
    }
  }
  return childSpan;
}
function getParentSpan(scope) {
  const span = _getSpanForScope(scope);
  if (!span) {
    return void 0;
  }
  const client = getClient();
  const options = client ? client.getOptions() : {};
  if (options.parentSpanIsAlwaysRootSpan) {
    return getRootSpan(span);
  }
  return span;
}

// node_modules/@sentry/core/build/esm/tracing/idleSpan.js
var TRACING_DEFAULTS = {
  idleTimeout: 1e3,
  finalTimeout: 3e4,
  childSpanTimeout: 15e3
};
var FINISH_REASON_HEARTBEAT_FAILED = "heartbeatFailed";
var FINISH_REASON_IDLE_TIMEOUT = "idleTimeout";
var FINISH_REASON_FINAL_TIMEOUT = "finalTimeout";
var FINISH_REASON_EXTERNAL_FINISH = "externalFinish";
function startIdleSpan(startSpanOptions, options = {}) {
  const activities = /* @__PURE__ */ new Map();
  let _finished = false;
  let _idleTimeoutID;
  let _finishReason = FINISH_REASON_EXTERNAL_FINISH;
  let _autoFinishAllowed = !options.disableAutoFinish;
  const _cleanupHooks = [];
  const {
    idleTimeout = TRACING_DEFAULTS.idleTimeout,
    finalTimeout = TRACING_DEFAULTS.finalTimeout,
    childSpanTimeout = TRACING_DEFAULTS.childSpanTimeout,
    beforeSpanEnd
  } = options;
  const client = getClient();
  if (!client || !hasSpansEnabled()) {
    const span2 = new SentryNonRecordingSpan();
    const dsc = __spreadValues({
      sample_rate: "0",
      sampled: "false"
    }, getDynamicSamplingContextFromSpan(span2));
    freezeDscOnSpan(span2, dsc);
    return span2;
  }
  const scope = getCurrentScope();
  const previousActiveSpan = getActiveSpan();
  const span = _startIdleSpan(startSpanOptions);
  span.end = new Proxy(span.end, {
    apply(target, thisArg, args) {
      if (beforeSpanEnd) {
        beforeSpanEnd(span);
      }
      if (thisArg instanceof SentryNonRecordingSpan) {
        return;
      }
      const [definedEndTimestamp, ...rest] = args;
      const timestamp = definedEndTimestamp || timestampInSeconds();
      const spanEndTimestamp = spanTimeInputToSeconds(timestamp);
      const spans = getSpanDescendants(span).filter((child) => child !== span);
      if (!spans.length) {
        onIdleSpanEnded(spanEndTimestamp);
        return Reflect.apply(target, thisArg, [spanEndTimestamp, ...rest]);
      }
      const childEndTimestamps = spans.map((span2) => spanToJSON(span2).timestamp).filter((timestamp2) => !!timestamp2);
      const latestSpanEndTimestamp = childEndTimestamps.length ? Math.max(...childEndTimestamps) : void 0;
      const spanStartTimestamp = spanToJSON(span).start_timestamp;
      const endTimestamp = Math.min(spanStartTimestamp ? spanStartTimestamp + finalTimeout / 1e3 : Infinity, Math.max(spanStartTimestamp || -Infinity, Math.min(spanEndTimestamp, latestSpanEndTimestamp || Infinity)));
      onIdleSpanEnded(endTimestamp);
      return Reflect.apply(target, thisArg, [endTimestamp, ...rest]);
    }
  });
  function _cancelIdleTimeout() {
    if (_idleTimeoutID) {
      clearTimeout(_idleTimeoutID);
      _idleTimeoutID = void 0;
    }
  }
  function _restartIdleTimeout(endTimestamp) {
    _cancelIdleTimeout();
    _idleTimeoutID = setTimeout(() => {
      if (!_finished && activities.size === 0 && _autoFinishAllowed) {
        _finishReason = FINISH_REASON_IDLE_TIMEOUT;
        span.end(endTimestamp);
      }
    }, idleTimeout);
  }
  function _restartChildSpanTimeout(endTimestamp) {
    _idleTimeoutID = setTimeout(() => {
      if (!_finished && _autoFinishAllowed) {
        _finishReason = FINISH_REASON_HEARTBEAT_FAILED;
        span.end(endTimestamp);
      }
    }, childSpanTimeout);
  }
  function _pushActivity(spanId) {
    _cancelIdleTimeout();
    activities.set(spanId, true);
    const endTimestamp = timestampInSeconds();
    _restartChildSpanTimeout(endTimestamp + childSpanTimeout / 1e3);
  }
  function _popActivity(spanId) {
    if (activities.has(spanId)) {
      activities.delete(spanId);
    }
    if (activities.size === 0) {
      const endTimestamp = timestampInSeconds();
      _restartIdleTimeout(endTimestamp + idleTimeout / 1e3);
    }
  }
  function onIdleSpanEnded(endTimestamp) {
    _finished = true;
    activities.clear();
    _cleanupHooks.forEach((cleanup) => cleanup());
    _setSpanForScope(scope, previousActiveSpan);
    const spanJSON = spanToJSON(span);
    const {
      start_timestamp: startTimestamp
    } = spanJSON;
    if (!startTimestamp) {
      return;
    }
    const attributes = spanJSON.data;
    if (!attributes[SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON]) {
      span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, _finishReason);
    }
    logger.log(`[Tracing] Idle span "${spanJSON.op}" finished`);
    const childSpans = getSpanDescendants(span).filter((child) => child !== span);
    let discardedSpans = 0;
    childSpans.forEach((childSpan) => {
      if (childSpan.isRecording()) {
        childSpan.setStatus({
          code: SPAN_STATUS_ERROR,
          message: "cancelled"
        });
        childSpan.end(endTimestamp);
        DEBUG_BUILD && logger.log("[Tracing] Cancelling span since span ended early", JSON.stringify(childSpan, void 0, 2));
      }
      const childSpanJSON = spanToJSON(childSpan);
      const {
        timestamp: childEndTimestamp = 0,
        start_timestamp: childStartTimestamp = 0
      } = childSpanJSON;
      const spanStartedBeforeIdleSpanEnd = childStartTimestamp <= endTimestamp;
      const timeoutWithMarginOfError = (finalTimeout + idleTimeout) / 1e3;
      const spanEndedBeforeFinalTimeout = childEndTimestamp - childStartTimestamp <= timeoutWithMarginOfError;
      if (DEBUG_BUILD) {
        const stringifiedSpan = JSON.stringify(childSpan, void 0, 2);
        if (!spanStartedBeforeIdleSpanEnd) {
          logger.log("[Tracing] Discarding span since it happened after idle span was finished", stringifiedSpan);
        } else if (!spanEndedBeforeFinalTimeout) {
          logger.log("[Tracing] Discarding span since it finished after idle span final timeout", stringifiedSpan);
        }
      }
      if (!spanEndedBeforeFinalTimeout || !spanStartedBeforeIdleSpanEnd) {
        removeChildSpanFromSpan(span, childSpan);
        discardedSpans++;
      }
    });
    if (discardedSpans > 0) {
      span.setAttribute("sentry.idle_span_discarded_spans", discardedSpans);
    }
  }
  _cleanupHooks.push(client.on("spanStart", (startedSpan) => {
    if (_finished || startedSpan === span || !!spanToJSON(startedSpan).timestamp) {
      return;
    }
    const allSpans = getSpanDescendants(span);
    if (allSpans.includes(startedSpan)) {
      _pushActivity(startedSpan.spanContext().spanId);
    }
  }));
  _cleanupHooks.push(client.on("spanEnd", (endedSpan) => {
    if (_finished) {
      return;
    }
    _popActivity(endedSpan.spanContext().spanId);
  }));
  _cleanupHooks.push(client.on("idleSpanEnableAutoFinish", (spanToAllowAutoFinish) => {
    if (spanToAllowAutoFinish === span) {
      _autoFinishAllowed = true;
      _restartIdleTimeout();
      if (activities.size) {
        _restartChildSpanTimeout();
      }
    }
  }));
  if (!options.disableAutoFinish) {
    _restartIdleTimeout();
  }
  setTimeout(() => {
    if (!_finished) {
      span.setStatus({
        code: SPAN_STATUS_ERROR,
        message: "deadline_exceeded"
      });
      _finishReason = FINISH_REASON_FINAL_TIMEOUT;
      span.end();
    }
  }, finalTimeout);
  return span;
}
function _startIdleSpan(options) {
  const span = startInactiveSpan(options);
  _setSpanForScope(getCurrentScope(), span);
  DEBUG_BUILD && logger.log("[Tracing] Started span is an idle span");
  return span;
}

// node_modules/@sentry/core/build/esm/utils-hoist/syncpromise.js
var States;
(function(States2) {
  const PENDING = 0;
  States2[States2["PENDING"] = PENDING] = "PENDING";
  const RESOLVED = 1;
  States2[States2["RESOLVED"] = RESOLVED] = "RESOLVED";
  const REJECTED = 2;
  States2[States2["REJECTED"] = REJECTED] = "REJECTED";
})(States || (States = {}));
function resolvedSyncPromise(value) {
  return new SyncPromise((resolve) => {
    resolve(value);
  });
}
function rejectedSyncPromise(reason) {
  return new SyncPromise((_, reject) => {
    reject(reason);
  });
}
var SyncPromise = class _SyncPromise {
  constructor(executor) {
    this._state = States.PENDING;
    this._handlers = [];
    this._runExecutor(executor);
  }
  /** @inheritdoc */
  then(onfulfilled, onrejected) {
    return new _SyncPromise((resolve, reject) => {
      this._handlers.push([false, (result) => {
        if (!onfulfilled) {
          resolve(result);
        } else {
          try {
            resolve(onfulfilled(result));
          } catch (e2) {
            reject(e2);
          }
        }
      }, (reason) => {
        if (!onrejected) {
          reject(reason);
        } else {
          try {
            resolve(onrejected(reason));
          } catch (e2) {
            reject(e2);
          }
        }
      }]);
      this._executeHandlers();
    });
  }
  /** @inheritdoc */
  catch(onrejected) {
    return this.then((val) => val, onrejected);
  }
  /** @inheritdoc */
  finally(onfinally) {
    return new _SyncPromise((resolve, reject) => {
      let val;
      let isRejected;
      return this.then((value) => {
        isRejected = false;
        val = value;
        if (onfinally) {
          onfinally();
        }
      }, (reason) => {
        isRejected = true;
        val = reason;
        if (onfinally) {
          onfinally();
        }
      }).then(() => {
        if (isRejected) {
          reject(val);
          return;
        }
        resolve(val);
      });
    });
  }
  /** Excute the resolve/reject handlers. */
  _executeHandlers() {
    if (this._state === States.PENDING) {
      return;
    }
    const cachedHandlers = this._handlers.slice();
    this._handlers = [];
    cachedHandlers.forEach((handler) => {
      if (handler[0]) {
        return;
      }
      if (this._state === States.RESOLVED) {
        handler[1](this._value);
      }
      if (this._state === States.REJECTED) {
        handler[2](this._value);
      }
      handler[0] = true;
    });
  }
  /** Run the executor for the SyncPromise. */
  _runExecutor(executor) {
    const setResult = (state, value) => {
      if (this._state !== States.PENDING) {
        return;
      }
      if (isThenable(value)) {
        void value.then(resolve, reject);
        return;
      }
      this._state = state;
      this._value = value;
      this._executeHandlers();
    };
    const resolve = (value) => {
      setResult(States.RESOLVED, value);
    };
    const reject = (reason) => {
      setResult(States.REJECTED, reason);
    };
    try {
      executor(resolve, reject);
    } catch (e2) {
      reject(e2);
    }
  }
};

// node_modules/@sentry/core/build/esm/eventProcessors.js
function notifyEventProcessors(processors, event, hint, index = 0) {
  return new SyncPromise((resolve, reject) => {
    const processor = processors[index];
    if (event === null || typeof processor !== "function") {
      resolve(event);
    } else {
      const result = processor(__spreadValues({}, event), hint);
      DEBUG_BUILD && processor.id && result === null && logger.log(`Event processor "${processor.id}" dropped event`);
      if (isThenable(result)) {
        void result.then((final) => notifyEventProcessors(processors, final, hint, index + 1).then(resolve)).then(null, reject);
      } else {
        void notifyEventProcessors(processors, result, hint, index + 1).then(resolve).then(null, reject);
      }
    }
  });
}

// node_modules/@sentry/core/build/esm/utils-hoist/debug-ids.js
var parsedStackResults;
var lastKeysCount;
var cachedFilenameDebugIds;
function getFilenameToDebugIdMap(stackParser) {
  const debugIdMap = GLOBAL_OBJ._sentryDebugIds;
  if (!debugIdMap) {
    return {};
  }
  const debugIdKeys = Object.keys(debugIdMap);
  if (cachedFilenameDebugIds && debugIdKeys.length === lastKeysCount) {
    return cachedFilenameDebugIds;
  }
  lastKeysCount = debugIdKeys.length;
  cachedFilenameDebugIds = debugIdKeys.reduce((acc, stackKey) => {
    if (!parsedStackResults) {
      parsedStackResults = {};
    }
    const result = parsedStackResults[stackKey];
    if (result) {
      acc[result[0]] = result[1];
    } else {
      const parsedStack = stackParser(stackKey);
      for (let i = parsedStack.length - 1; i >= 0; i--) {
        const stackFrame = parsedStack[i];
        const filename = stackFrame?.filename;
        const debugId = debugIdMap[stackKey];
        if (filename && debugId) {
          acc[filename] = debugId;
          parsedStackResults[stackKey] = [filename, debugId];
          break;
        }
      }
    }
    return acc;
  }, {});
  return cachedFilenameDebugIds;
}

// node_modules/@sentry/core/build/esm/utils/applyScopeDataToEvent.js
function applyScopeDataToEvent(event, data) {
  const {
    fingerprint,
    span,
    breadcrumbs,
    sdkProcessingMetadata
  } = data;
  applyDataToEvent(event, data);
  if (span) {
    applySpanToEvent(event, span);
  }
  applyFingerprintToEvent(event, fingerprint);
  applyBreadcrumbsToEvent(event, breadcrumbs);
  applySdkMetadataToEvent(event, sdkProcessingMetadata);
}
function mergeScopeData(data, mergeData) {
  const {
    extra,
    tags,
    user,
    contexts,
    level,
    sdkProcessingMetadata,
    breadcrumbs,
    fingerprint,
    eventProcessors,
    attachments,
    propagationContext,
    transactionName,
    span
  } = mergeData;
  mergeAndOverwriteScopeData(data, "extra", extra);
  mergeAndOverwriteScopeData(data, "tags", tags);
  mergeAndOverwriteScopeData(data, "user", user);
  mergeAndOverwriteScopeData(data, "contexts", contexts);
  data.sdkProcessingMetadata = merge2(data.sdkProcessingMetadata, sdkProcessingMetadata, 2);
  if (level) {
    data.level = level;
  }
  if (transactionName) {
    data.transactionName = transactionName;
  }
  if (span) {
    data.span = span;
  }
  if (breadcrumbs.length) {
    data.breadcrumbs = [...data.breadcrumbs, ...breadcrumbs];
  }
  if (fingerprint.length) {
    data.fingerprint = [...data.fingerprint, ...fingerprint];
  }
  if (eventProcessors.length) {
    data.eventProcessors = [...data.eventProcessors, ...eventProcessors];
  }
  if (attachments.length) {
    data.attachments = [...data.attachments, ...attachments];
  }
  data.propagationContext = __spreadValues(__spreadValues({}, data.propagationContext), propagationContext);
}
function mergeAndOverwriteScopeData(data, prop, mergeVal) {
  data[prop] = merge2(data[prop], mergeVal, 1);
}
function applyDataToEvent(event, data) {
  const {
    extra,
    tags,
    user,
    contexts,
    level,
    transactionName
  } = data;
  if (Object.keys(extra).length) {
    event.extra = __spreadValues(__spreadValues({}, extra), event.extra);
  }
  if (Object.keys(tags).length) {
    event.tags = __spreadValues(__spreadValues({}, tags), event.tags);
  }
  if (Object.keys(user).length) {
    event.user = __spreadValues(__spreadValues({}, user), event.user);
  }
  if (Object.keys(contexts).length) {
    event.contexts = __spreadValues(__spreadValues({}, contexts), event.contexts);
  }
  if (level) {
    event.level = level;
  }
  if (transactionName && event.type !== "transaction") {
    event.transaction = transactionName;
  }
}
function applyBreadcrumbsToEvent(event, breadcrumbs) {
  const mergedBreadcrumbs = [...event.breadcrumbs || [], ...breadcrumbs];
  event.breadcrumbs = mergedBreadcrumbs.length ? mergedBreadcrumbs : void 0;
}
function applySdkMetadataToEvent(event, sdkProcessingMetadata) {
  event.sdkProcessingMetadata = __spreadValues(__spreadValues({}, event.sdkProcessingMetadata), sdkProcessingMetadata);
}
function applySpanToEvent(event, span) {
  event.contexts = __spreadValues({
    trace: spanToTraceContext(span)
  }, event.contexts);
  event.sdkProcessingMetadata = __spreadValues({
    dynamicSamplingContext: getDynamicSamplingContextFromSpan(span)
  }, event.sdkProcessingMetadata);
  const rootSpan = getRootSpan(span);
  const transactionName = spanToJSON(rootSpan).description;
  if (transactionName && !event.transaction && event.type === "transaction") {
    event.transaction = transactionName;
  }
}
function applyFingerprintToEvent(event, fingerprint) {
  event.fingerprint = event.fingerprint ? Array.isArray(event.fingerprint) ? event.fingerprint : [event.fingerprint] : [];
  if (fingerprint) {
    event.fingerprint = event.fingerprint.concat(fingerprint);
  }
  if (!event.fingerprint.length) {
    delete event.fingerprint;
  }
}

// node_modules/@sentry/core/build/esm/utils/prepareEvent.js
function prepareEvent(options, event, hint, scope, client, isolationScope) {
  const {
    normalizeDepth = 3,
    normalizeMaxBreadth = 1e3
  } = options;
  const prepared = __spreadProps(__spreadValues({}, event), {
    event_id: event.event_id || hint.event_id || uuid4(),
    timestamp: event.timestamp || dateTimestampInSeconds()
  });
  const integrations = hint.integrations || options.integrations.map((i) => i.name);
  applyClientOptions(prepared, options);
  applyIntegrationsMetadata(prepared, integrations);
  if (client) {
    client.emit("applyFrameMetadata", event);
  }
  if (event.type === void 0) {
    applyDebugIds(prepared, options.stackParser);
  }
  const finalScope = getFinalScope(scope, hint.captureContext);
  if (hint.mechanism) {
    addExceptionMechanism(prepared, hint.mechanism);
  }
  const clientEventProcessors = client ? client.getEventProcessors() : [];
  const data = getGlobalScope().getScopeData();
  if (isolationScope) {
    const isolationData = isolationScope.getScopeData();
    mergeScopeData(data, isolationData);
  }
  if (finalScope) {
    const finalScopeData = finalScope.getScopeData();
    mergeScopeData(data, finalScopeData);
  }
  const attachments = [...hint.attachments || [], ...data.attachments];
  if (attachments.length) {
    hint.attachments = attachments;
  }
  applyScopeDataToEvent(prepared, data);
  const eventProcessors = [
    ...clientEventProcessors,
    // Run scope event processors _after_ all other processors
    ...data.eventProcessors
  ];
  const result = notifyEventProcessors(eventProcessors, prepared, hint);
  return result.then((evt) => {
    if (evt) {
      applyDebugMeta(evt);
    }
    if (typeof normalizeDepth === "number" && normalizeDepth > 0) {
      return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
    }
    return evt;
  });
}
function applyClientOptions(event, options) {
  const {
    environment: environment2,
    release,
    dist,
    maxValueLength = 250
  } = options;
  event.environment = event.environment || environment2 || DEFAULT_ENVIRONMENT;
  if (!event.release && release) {
    event.release = release;
  }
  if (!event.dist && dist) {
    event.dist = dist;
  }
  const request = event.request;
  if (request?.url) {
    request.url = truncate(request.url, maxValueLength);
  }
}
function applyDebugIds(event, stackParser) {
  const filenameDebugIdMap = getFilenameToDebugIdMap(stackParser);
  event.exception?.values?.forEach((exception) => {
    exception.stacktrace?.frames?.forEach((frame) => {
      if (frame.filename) {
        frame.debug_id = filenameDebugIdMap[frame.filename];
      }
    });
  });
}
function applyDebugMeta(event) {
  const filenameDebugIdMap = {};
  event.exception?.values?.forEach((exception) => {
    exception.stacktrace?.frames?.forEach((frame) => {
      if (frame.debug_id) {
        if (frame.abs_path) {
          filenameDebugIdMap[frame.abs_path] = frame.debug_id;
        } else if (frame.filename) {
          filenameDebugIdMap[frame.filename] = frame.debug_id;
        }
        delete frame.debug_id;
      }
    });
  });
  if (Object.keys(filenameDebugIdMap).length === 0) {
    return;
  }
  event.debug_meta = event.debug_meta || {};
  event.debug_meta.images = event.debug_meta.images || [];
  const images = event.debug_meta.images;
  Object.entries(filenameDebugIdMap).forEach(([filename, debug_id]) => {
    images.push({
      type: "sourcemap",
      code_file: filename,
      debug_id
    });
  });
}
function applyIntegrationsMetadata(event, integrationNames) {
  if (integrationNames.length > 0) {
    event.sdk = event.sdk || {};
    event.sdk.integrations = [...event.sdk.integrations || [], ...integrationNames];
  }
}
function normalizeEvent(event, depth, maxBreadth) {
  if (!event) {
    return null;
  }
  const normalized = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, event), event.breadcrumbs && {
    breadcrumbs: event.breadcrumbs.map((b) => __spreadValues(__spreadValues({}, b), b.data && {
      data: normalize(b.data, depth, maxBreadth)
    }))
  }), event.user && {
    user: normalize(event.user, depth, maxBreadth)
  }), event.contexts && {
    contexts: normalize(event.contexts, depth, maxBreadth)
  }), event.extra && {
    extra: normalize(event.extra, depth, maxBreadth)
  });
  if (event.contexts?.trace && normalized.contexts) {
    normalized.contexts.trace = event.contexts.trace;
    if (event.contexts.trace.data) {
      normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
    }
  }
  if (event.spans) {
    normalized.spans = event.spans.map((span) => {
      return __spreadValues(__spreadValues({}, span), span.data && {
        data: normalize(span.data, depth, maxBreadth)
      });
    });
  }
  if (event.contexts?.flags && normalized.contexts) {
    normalized.contexts.flags = normalize(event.contexts.flags, 3, maxBreadth);
  }
  return normalized;
}
function getFinalScope(scope, captureContext) {
  if (!captureContext) {
    return scope;
  }
  const finalScope = scope ? scope.clone() : new Scope();
  finalScope.update(captureContext);
  return finalScope;
}
function parseEventHintOrCaptureContext(hint) {
  if (!hint) {
    return void 0;
  }
  if (hintIsScopeOrFunction(hint)) {
    return {
      captureContext: hint
    };
  }
  if (hintIsScopeContext(hint)) {
    return {
      captureContext: hint
    };
  }
  return hint;
}
function hintIsScopeOrFunction(hint) {
  return hint instanceof Scope || typeof hint === "function";
}
var captureContextKeys = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];
function hintIsScopeContext(hint) {
  return Object.keys(hint).some((key) => captureContextKeys.includes(key));
}

// node_modules/@sentry/core/build/esm/exports.js
function captureException(exception, hint) {
  return getCurrentScope().captureException(exception, parseEventHintOrCaptureContext(hint));
}
function captureEvent(event, hint) {
  return getCurrentScope().captureEvent(event, hint);
}
function setContext(name, context) {
  getIsolationScope().setContext(name, context);
}
function lastEventId() {
  return getIsolationScope().lastEventId();
}
function isEnabled() {
  const client = getClient();
  return client?.getOptions().enabled !== false && !!client?.getTransport();
}
function addEventProcessor(callback) {
  getIsolationScope().addEventProcessor(callback);
}
function startSession(context) {
  const isolationScope = getIsolationScope();
  const currentScope = getCurrentScope();
  const {
    userAgent
  } = GLOBAL_OBJ.navigator || {};
  const session = makeSession(__spreadValues(__spreadValues({
    user: currentScope.getUser() || isolationScope.getUser()
  }, userAgent && {
    userAgent
  }), context));
  const currentSession = isolationScope.getSession();
  if (currentSession?.status === "ok") {
    updateSession(currentSession, {
      status: "exited"
    });
  }
  endSession();
  isolationScope.setSession(session);
  return session;
}
function endSession() {
  const isolationScope = getIsolationScope();
  const currentScope = getCurrentScope();
  const session = currentScope.getSession() || isolationScope.getSession();
  if (session) {
    closeSession(session);
  }
  _sendSessionUpdate();
  isolationScope.setSession();
}
function _sendSessionUpdate() {
  const isolationScope = getIsolationScope();
  const client = getClient();
  const session = isolationScope.getSession();
  if (session && client) {
    client.captureSession(session);
  }
}
function captureSession(end = false) {
  if (end) {
    endSession();
    return;
  }
  _sendSessionUpdate();
}

// node_modules/@sentry/core/build/esm/api.js
var SENTRY_API_VERSION = "7";
function getBaseApiEndpoint(dsn) {
  const protocol = dsn.protocol ? `${dsn.protocol}:` : "";
  const port = dsn.port ? `:${dsn.port}` : "";
  return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
}
function _getIngestEndpoint(dsn) {
  return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
}
function _encodedAuth(dsn, sdkInfo) {
  const params = {
    sentry_version: SENTRY_API_VERSION
  };
  if (dsn.publicKey) {
    params.sentry_key = dsn.publicKey;
  }
  if (sdkInfo) {
    params.sentry_client = `${sdkInfo.name}/${sdkInfo.version}`;
  }
  return new URLSearchParams(params).toString();
}
function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnel, sdkInfo) {
  return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
}
function getReportDialogEndpoint(dsnLike, dialogOptions) {
  const dsn = makeDsn(dsnLike);
  if (!dsn) {
    return "";
  }
  const endpoint = `${getBaseApiEndpoint(dsn)}embed/error-page/`;
  let encodedOptions = `dsn=${dsnToString(dsn)}`;
  for (const key in dialogOptions) {
    if (key === "dsn") {
      continue;
    }
    if (key === "onClose") {
      continue;
    }
    if (key === "user") {
      const user = dialogOptions.user;
      if (!user) {
        continue;
      }
      if (user.name) {
        encodedOptions += `&name=${encodeURIComponent(user.name)}`;
      }
      if (user.email) {
        encodedOptions += `&email=${encodeURIComponent(user.email)}`;
      }
    } else {
      encodedOptions += `&${encodeURIComponent(key)}=${encodeURIComponent(dialogOptions[key])}`;
    }
  }
  return `${endpoint}?${encodedOptions}`;
}

// node_modules/@sentry/core/build/esm/integration.js
var installedIntegrations = [];
function filterDuplicates(integrations) {
  const integrationsByName = {};
  integrations.forEach((currentInstance) => {
    const {
      name
    } = currentInstance;
    const existingInstance = integrationsByName[name];
    if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
      return;
    }
    integrationsByName[name] = currentInstance;
  });
  return Object.values(integrationsByName);
}
function getIntegrationsToSetup(options) {
  const defaultIntegrations = options.defaultIntegrations || [];
  const userIntegrations = options.integrations;
  defaultIntegrations.forEach((integration) => {
    integration.isDefaultInstance = true;
  });
  let integrations;
  if (Array.isArray(userIntegrations)) {
    integrations = [...defaultIntegrations, ...userIntegrations];
  } else if (typeof userIntegrations === "function") {
    const resolvedUserIntegrations = userIntegrations(defaultIntegrations);
    integrations = Array.isArray(resolvedUserIntegrations) ? resolvedUserIntegrations : [resolvedUserIntegrations];
  } else {
    integrations = defaultIntegrations;
  }
  return filterDuplicates(integrations);
}
function setupIntegrations(client, integrations) {
  const integrationIndex = {};
  integrations.forEach((integration) => {
    if (integration) {
      setupIntegration(client, integration, integrationIndex);
    }
  });
  return integrationIndex;
}
function afterSetupIntegrations(client, integrations) {
  for (const integration of integrations) {
    if (integration?.afterAllSetup) {
      integration.afterAllSetup(client);
    }
  }
}
function setupIntegration(client, integration, integrationIndex) {
  if (integrationIndex[integration.name]) {
    DEBUG_BUILD && logger.log(`Integration skipped because it was already installed: ${integration.name}`);
    return;
  }
  integrationIndex[integration.name] = integration;
  if (installedIntegrations.indexOf(integration.name) === -1 && typeof integration.setupOnce === "function") {
    integration.setupOnce();
    installedIntegrations.push(integration.name);
  }
  if (integration.setup && typeof integration.setup === "function") {
    integration.setup(client);
  }
  if (typeof integration.preprocessEvent === "function") {
    const callback = integration.preprocessEvent.bind(integration);
    client.on("preprocessEvent", (event, hint) => callback(event, hint, client));
  }
  if (typeof integration.processEvent === "function") {
    const callback = integration.processEvent.bind(integration);
    const processor = Object.assign((event, hint) => callback(event, hint, client), {
      id: integration.name
    });
    client.addEventProcessor(processor);
  }
  DEBUG_BUILD && logger.log(`Integration installed: ${integration.name}`);
}
function defineIntegration(fn) {
  return fn;
}

// node_modules/@sentry/core/build/esm/utils/eventUtils.js
function getPossibleEventMessages(event) {
  const possibleMessages = [];
  if (event.message) {
    possibleMessages.push(event.message);
  }
  try {
    const lastException = event.exception.values[event.exception.values.length - 1];
    if (lastException?.value) {
      possibleMessages.push(lastException.value);
      if (lastException.type) {
        possibleMessages.push(`${lastException.type}: ${lastException.value}`);
      }
    }
  } catch (e2) {
  }
  return possibleMessages;
}

// node_modules/@sentry/core/build/esm/utils/transactionEvent.js
function convertTransactionEventToSpanJson(event) {
  const {
    trace_id,
    parent_span_id,
    span_id,
    status,
    origin,
    data,
    op
  } = event.contexts?.trace ?? {};
  return {
    data: data ?? {},
    description: event.transaction,
    op,
    parent_span_id,
    span_id: span_id ?? "",
    start_timestamp: event.start_timestamp ?? 0,
    status,
    timestamp: event.timestamp,
    trace_id: trace_id ?? "",
    origin,
    profile_id: data?.[SEMANTIC_ATTRIBUTE_PROFILE_ID],
    exclusive_time: data?.[SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
    measurements: event.measurements,
    is_segment: true
  };
}
function convertSpanJsonToTransactionEvent(span) {
  return {
    type: "transaction",
    timestamp: span.timestamp,
    start_timestamp: span.start_timestamp,
    transaction: span.description,
    contexts: {
      trace: {
        trace_id: span.trace_id,
        span_id: span.span_id,
        parent_span_id: span.parent_span_id,
        op: span.op,
        status: span.status,
        origin: span.origin,
        data: __spreadValues(__spreadValues(__spreadValues({}, span.data), span.profile_id && {
          [SEMANTIC_ATTRIBUTE_PROFILE_ID]: span.profile_id
        }), span.exclusive_time && {
          [SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: span.exclusive_time
        })
      }
    },
    measurements: span.measurements
  };
}

// node_modules/@sentry/core/build/esm/utils-hoist/clientreport.js
function createClientReportEnvelope(discarded_events, dsn, timestamp) {
  const clientReportItem = [{
    type: "client_report"
  }, {
    timestamp: timestamp || dateTimestampInSeconds(),
    discarded_events
  }];
  return createEnvelope(dsn ? {
    dsn
  } : {}, [clientReportItem]);
}

// node_modules/@sentry/core/build/esm/client.js
var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
var MISSING_RELEASE_FOR_SESSION_ERROR = "Discarded session because of missing or non-string release";
var INTERNAL_ERROR_SYMBOL = Symbol.for("SentryInternalError");
var DO_NOT_SEND_EVENT_SYMBOL = Symbol.for("SentryDoNotSendEventError");
function _makeInternalError(message) {
  return {
    message,
    [INTERNAL_ERROR_SYMBOL]: true
  };
}
function _makeDoNotSendEventError(message) {
  return {
    message,
    [DO_NOT_SEND_EVENT_SYMBOL]: true
  };
}
function _isInternalError(error) {
  return !!error && typeof error === "object" && INTERNAL_ERROR_SYMBOL in error;
}
function _isDoNotSendEventError(error) {
  return !!error && typeof error === "object" && DO_NOT_SEND_EVENT_SYMBOL in error;
}
var Client = class {
  /** Options passed to the SDK. */
  /** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */
  /** Array of set up integrations. */
  /** Number of calls being processed */
  /** Holds flushable  */
  // eslint-disable-next-line @typescript-eslint/ban-types
  /**
   * Initializes this client instance.
   *
   * @param options Options for the client.
   */
  constructor(options) {
    this._options = options;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    if (options.dsn) {
      this._dsn = makeDsn(options.dsn);
    } else {
      DEBUG_BUILD && logger.warn("No DSN provided, client will not send events.");
    }
    if (this._dsn) {
      const url = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, options.tunnel, options._metadata ? options._metadata.sdk : void 0);
      this._transport = options.transport(__spreadProps(__spreadValues({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this)
      }, options.transportOptions), {
        url
      }));
    }
  }
  /**
   * Captures an exception event and sends it to Sentry.
   *
   * Unlike `captureException` exported from every SDK, this method requires that you pass it the current scope.
   */
  captureException(exception, hint, scope) {
    const eventId = uuid4();
    if (checkOrSetAlreadyCaught(exception)) {
      DEBUG_BUILD && logger.log(ALREADY_SEEN_ERROR);
      return eventId;
    }
    const hintWithEventId = __spreadValues({
      event_id: eventId
    }, hint);
    this._process(this.eventFromException(exception, hintWithEventId).then((event) => this._captureEvent(event, hintWithEventId, scope)));
    return hintWithEventId.event_id;
  }
  /**
   * Captures a message event and sends it to Sentry.
   *
   * Unlike `captureMessage` exported from every SDK, this method requires that you pass it the current scope.
   */
  captureMessage(message, level, hint, currentScope) {
    const hintWithEventId = __spreadValues({
      event_id: uuid4()
    }, hint);
    const eventMessage = isParameterizedString(message) ? message : String(message);
    const promisedEvent = isPrimitive(message) ? this.eventFromMessage(eventMessage, level, hintWithEventId) : this.eventFromException(message, hintWithEventId);
    this._process(promisedEvent.then((event) => this._captureEvent(event, hintWithEventId, currentScope)));
    return hintWithEventId.event_id;
  }
  /**
   * Captures a manually created event and sends it to Sentry.
   *
   * Unlike `captureEvent` exported from every SDK, this method requires that you pass it the current scope.
   */
  captureEvent(event, hint, currentScope) {
    const eventId = uuid4();
    if (hint?.originalException && checkOrSetAlreadyCaught(hint.originalException)) {
      DEBUG_BUILD && logger.log(ALREADY_SEEN_ERROR);
      return eventId;
    }
    const hintWithEventId = __spreadValues({
      event_id: eventId
    }, hint);
    const sdkProcessingMetadata = event.sdkProcessingMetadata || {};
    const capturedSpanScope = sdkProcessingMetadata.capturedSpanScope;
    const capturedSpanIsolationScope = sdkProcessingMetadata.capturedSpanIsolationScope;
    this._process(this._captureEvent(event, hintWithEventId, capturedSpanScope || currentScope, capturedSpanIsolationScope));
    return hintWithEventId.event_id;
  }
  /**
   * Captures a session.
   */
  captureSession(session) {
    this.sendSession(session);
    updateSession(session, {
      init: false
    });
  }
  /**
   * Create a cron monitor check in and send it to Sentry. This method is not available on all clients.
   *
   * @param checkIn An object that describes a check in.
   * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
   * to create a monitor automatically when sending a check in.
   * @param scope An optional scope containing event metadata.
   * @returns A string representing the id of the check in.
   */
  /**
   * Get the current Dsn.
   */
  getDsn() {
    return this._dsn;
  }
  /**
   * Get the current options.
   */
  getOptions() {
    return this._options;
  }
  /**
   * Get the SDK metadata.
   * @see SdkMetadata
   */
  getSdkMetadata() {
    return this._options._metadata;
  }
  /**
   * Returns the transport that is used by the client.
   * Please note that the transport gets lazy initialized so it will only be there once the first event has been sent.
   */
  getTransport() {
    return this._transport;
  }
  /**
   * Wait for all events to be sent or the timeout to expire, whichever comes first.
   *
   * @param timeout Maximum time in ms the client should wait for events to be flushed. Omitting this parameter will
   *   cause the client to wait until all events are sent before resolving the promise.
   * @returns A promise that will resolve with `true` if all events are sent before the timeout, or `false` if there are
   * still events in the queue when the timeout is reached.
   */
  flush(timeout) {
    const transport = this._transport;
    if (transport) {
      this.emit("flush");
      return this._isClientDoneProcessing(timeout).then((clientFinished) => {
        return transport.flush(timeout).then((transportFlushed) => clientFinished && transportFlushed);
      });
    } else {
      return resolvedSyncPromise(true);
    }
  }
  /**
   * Flush the event queue and set the client to `enabled = false`. See {@link Client.flush}.
   *
   * @param {number} timeout Maximum time in ms the client should wait before shutting down. Omitting this parameter will cause
   *   the client to wait until all events are sent before disabling itself.
   * @returns {Promise<boolean>} A promise which resolves to `true` if the flush completes successfully before the timeout, or `false` if
   * it doesn't.
   */
  close(timeout) {
    return this.flush(timeout).then((result) => {
      this.getOptions().enabled = false;
      this.emit("close");
      return result;
    });
  }
  /**
   * Get all installed event processors.
   */
  getEventProcessors() {
    return this._eventProcessors;
  }
  /**
   * Adds an event processor that applies to any event processed by this client.
   */
  addEventProcessor(eventProcessor) {
    this._eventProcessors.push(eventProcessor);
  }
  /**
   * Initialize this client.
   * Call this after the client was set on a scope.
   */
  init() {
    if (this._isEnabled() || // Force integrations to be setup even if no DSN was set when we have
    // Spotlight enabled. This is particularly important for browser as we
    // don't support the `spotlight` option there and rely on the users
    // adding the `spotlightBrowserIntegration()` to their integrations which
    // wouldn't get initialized with the check below when there's no DSN set.
    this._options.integrations.some(({
      name
    }) => name.startsWith("Spotlight"))) {
      this._setupIntegrations();
    }
  }
  /**
   * Gets an installed integration by its name.
   *
   * @returns {Integration|undefined} The installed integration or `undefined` if no integration with that `name` was installed.
   */
  getIntegrationByName(integrationName) {
    return this._integrations[integrationName];
  }
  /**
   * Add an integration to the client.
   * This can be used to e.g. lazy load integrations.
   * In most cases, this should not be necessary,
   * and you're better off just passing the integrations via `integrations: []` at initialization time.
   * However, if you find the need to conditionally load & add an integration, you can use `addIntegration` to do so.
   */
  addIntegration(integration) {
    const isAlreadyInstalled = this._integrations[integration.name];
    setupIntegration(this, integration, this._integrations);
    if (!isAlreadyInstalled) {
      afterSetupIntegrations(this, [integration]);
    }
  }
  /**
   * Send a fully prepared event to Sentry.
   */
  sendEvent(event, hint = {}) {
    this.emit("beforeSendEvent", event, hint);
    let env = createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);
    for (const attachment of hint.attachments || []) {
      env = addItemToEnvelope(env, createAttachmentEnvelopeItem(attachment));
    }
    const promise = this.sendEnvelope(env);
    if (promise) {
      promise.then((sendResponse) => this.emit("afterSendEvent", event, sendResponse), null);
    }
  }
  /**
   * Send a session or session aggregrates to Sentry.
   */
  sendSession(session) {
    const {
      release: clientReleaseOption,
      environment: clientEnvironmentOption = DEFAULT_ENVIRONMENT
    } = this._options;
    if ("aggregates" in session) {
      const sessionAttrs = session.attrs || {};
      if (!sessionAttrs.release && !clientReleaseOption) {
        DEBUG_BUILD && logger.warn(MISSING_RELEASE_FOR_SESSION_ERROR);
        return;
      }
      sessionAttrs.release = sessionAttrs.release || clientReleaseOption;
      sessionAttrs.environment = sessionAttrs.environment || clientEnvironmentOption;
      session.attrs = sessionAttrs;
    } else {
      if (!session.release && !clientReleaseOption) {
        DEBUG_BUILD && logger.warn(MISSING_RELEASE_FOR_SESSION_ERROR);
        return;
      }
      session.release = session.release || clientReleaseOption;
      session.environment = session.environment || clientEnvironmentOption;
    }
    this.emit("beforeSendSession", session);
    const env = createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(env);
  }
  /**
   * Record on the client that an event got dropped (ie, an event that will not be sent to Sentry).
   */
  recordDroppedEvent(reason, category, count = 1) {
    if (this._options.sendClientReports) {
      const key = `${reason}:${category}`;
      DEBUG_BUILD && logger.log(`Recording outcome: "${key}"${count > 1 ? ` (${count} times)` : ""}`);
      this._outcomes[key] = (this._outcomes[key] || 0) + count;
    }
  }
  /* eslint-disable @typescript-eslint/unified-signatures */
  /**
   * Register a callback for whenever a span is started.
   * Receives the span as argument.
   * @returns {() => void} A function that, when executed, removes the registered callback.
   */
  /**
   * Register a hook on this client.
   */
  on(hook, callback) {
    const hooks = this._hooks[hook] = this._hooks[hook] || [];
    hooks.push(callback);
    return () => {
      const cbIndex = hooks.indexOf(callback);
      if (cbIndex > -1) {
        hooks.splice(cbIndex, 1);
      }
    };
  }
  /** Fire a hook whenever a span starts. */
  /**
   * Emit a hook that was previously registered via `on()`.
   */
  emit(hook, ...rest) {
    const callbacks = this._hooks[hook];
    if (callbacks) {
      callbacks.forEach((callback) => callback(...rest));
    }
  }
  /**
   * Send an envelope to Sentry.
   */
  sendEnvelope(envelope) {
    this.emit("beforeEnvelope", envelope);
    if (this._isEnabled() && this._transport) {
      return this._transport.send(envelope).then(null, (reason) => {
        DEBUG_BUILD && logger.error("Error while sending envelope:", reason);
        return reason;
      });
    }
    DEBUG_BUILD && logger.error("Transport disabled");
    return resolvedSyncPromise({});
  }
  /* eslint-enable @typescript-eslint/unified-signatures */
  /** Setup integrations for this client. */
  _setupIntegrations() {
    const {
      integrations
    } = this._options;
    this._integrations = setupIntegrations(this, integrations);
    afterSetupIntegrations(this, integrations);
  }
  /** Updates existing session based on the provided event */
  _updateSessionFromEvent(session, event) {
    let crashed = event.level === "fatal";
    let errored = false;
    const exceptions = event.exception?.values;
    if (exceptions) {
      errored = true;
      for (const ex of exceptions) {
        const mechanism = ex.mechanism;
        if (mechanism?.handled === false) {
          crashed = true;
          break;
        }
      }
    }
    const sessionNonTerminal = session.status === "ok";
    const shouldUpdateAndSend = sessionNonTerminal && session.errors === 0 || sessionNonTerminal && crashed;
    if (shouldUpdateAndSend) {
      updateSession(session, __spreadProps(__spreadValues({}, crashed && {
        status: "crashed"
      }), {
        errors: session.errors || Number(errored || crashed)
      }));
      this.captureSession(session);
    }
  }
  /**
   * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
   * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
   * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
   * `false` otherwise
   */
  _isClientDoneProcessing(timeout) {
    return new SyncPromise((resolve) => {
      let ticked = 0;
      const tick = 1;
      const interval2 = setInterval(() => {
        if (this._numProcessing == 0) {
          clearInterval(interval2);
          resolve(true);
        } else {
          ticked += tick;
          if (timeout && ticked >= timeout) {
            clearInterval(interval2);
            resolve(false);
          }
        }
      }, tick);
    });
  }
  /** Determines whether this SDK is enabled and a transport is present. */
  _isEnabled() {
    return this.getOptions().enabled !== false && this._transport !== void 0;
  }
  /**
   * Adds common information to events.
   *
   * The information includes release and environment from `options`,
   * breadcrumbs and context (extra, tags and user) from the scope.
   *
   * Information that is already present in the event is never overwritten. For
   * nested objects, such as the context, keys are merged.
   *
   * @param event The original event.
   * @param hint May contain additional information about the original exception.
   * @param currentScope A scope containing event metadata.
   * @returns A new event with more information.
   */
  _prepareEvent(event, hint, currentScope, isolationScope) {
    const options = this.getOptions();
    const integrations = Object.keys(this._integrations);
    if (!hint.integrations && integrations?.length) {
      hint.integrations = integrations;
    }
    this.emit("preprocessEvent", event, hint);
    if (!event.type) {
      isolationScope.setLastEventId(event.event_id || hint.event_id);
    }
    return prepareEvent(options, event, hint, currentScope, this, isolationScope).then((evt) => {
      if (evt === null) {
        return evt;
      }
      this.emit("postprocessEvent", evt, hint);
      evt.contexts = __spreadValues({
        trace: getTraceContextFromScope(currentScope)
      }, evt.contexts);
      const dynamicSamplingContext = getDynamicSamplingContextFromScope(this, currentScope);
      evt.sdkProcessingMetadata = __spreadValues({
        dynamicSamplingContext
      }, evt.sdkProcessingMetadata);
      return evt;
    });
  }
  /**
   * Processes the event and logs an error in case of rejection
   * @param event
   * @param hint
   * @param scope
   */
  _captureEvent(event, hint = {}, currentScope = getCurrentScope(), isolationScope = getIsolationScope()) {
    if (DEBUG_BUILD && isErrorEvent2(event)) {
      logger.log(`Captured error event \`${getPossibleEventMessages(event)[0] || "<unknown>"}\``);
    }
    return this._processEvent(event, hint, currentScope, isolationScope).then((finalEvent) => {
      return finalEvent.event_id;
    }, (reason) => {
      if (DEBUG_BUILD) {
        if (_isDoNotSendEventError(reason)) {
          logger.log(reason.message);
        } else if (_isInternalError(reason)) {
          logger.warn(reason.message);
        } else {
          logger.warn(reason);
        }
      }
      return void 0;
    });
  }
  /**
   * Processes an event (either error or message) and sends it to Sentry.
   *
   * This also adds breadcrumbs and context information to the event. However,
   * platform specific meta data (such as the User's IP address) must be added
   * by the SDK implementor.
   *
   *
   * @param event The event to send to Sentry.
   * @param hint May contain additional information about the original exception.
   * @param currentScope A scope containing event metadata.
   * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
   */
  _processEvent(event, hint, currentScope, isolationScope) {
    const options = this.getOptions();
    const {
      sampleRate
    } = options;
    const isTransaction = isTransactionEvent(event);
    const isError2 = isErrorEvent2(event);
    const eventType = event.type || "error";
    const beforeSendLabel = `before send for type \`${eventType}\``;
    const parsedSampleRate = typeof sampleRate === "undefined" ? void 0 : parseSampleRate(sampleRate);
    if (isError2 && typeof parsedSampleRate === "number" && Math.random() > parsedSampleRate) {
      this.recordDroppedEvent("sample_rate", "error");
      return rejectedSyncPromise(_makeDoNotSendEventError(`Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`));
    }
    const dataCategory = eventType === "replay_event" ? "replay" : eventType;
    return this._prepareEvent(event, hint, currentScope, isolationScope).then((prepared) => {
      if (prepared === null) {
        this.recordDroppedEvent("event_processor", dataCategory);
        throw _makeDoNotSendEventError("An event processor returned `null`, will not send event.");
      }
      const isInternalException = hint.data && hint.data.__sentry__ === true;
      if (isInternalException) {
        return prepared;
      }
      const result = processBeforeSend(this, options, prepared, hint);
      return _validateBeforeSendResult(result, beforeSendLabel);
    }).then((processedEvent) => {
      if (processedEvent === null) {
        this.recordDroppedEvent("before_send", dataCategory);
        if (isTransaction) {
          const spans = event.spans || [];
          const spanCount = 1 + spans.length;
          this.recordDroppedEvent("before_send", "span", spanCount);
        }
        throw _makeDoNotSendEventError(`${beforeSendLabel} returned \`null\`, will not send event.`);
      }
      const session = currentScope.getSession() || isolationScope.getSession();
      if (isError2 && session) {
        this._updateSessionFromEvent(session, processedEvent);
      }
      if (isTransaction) {
        const spanCountBefore = processedEvent.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
        const spanCountAfter = processedEvent.spans ? processedEvent.spans.length : 0;
        const droppedSpanCount = spanCountBefore - spanCountAfter;
        if (droppedSpanCount > 0) {
          this.recordDroppedEvent("before_send", "span", droppedSpanCount);
        }
      }
      const transactionInfo = processedEvent.transaction_info;
      if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
        const source = "custom";
        processedEvent.transaction_info = __spreadProps(__spreadValues({}, transactionInfo), {
          source
        });
      }
      this.sendEvent(processedEvent, hint);
      return processedEvent;
    }).then(null, (reason) => {
      if (_isDoNotSendEventError(reason) || _isInternalError(reason)) {
        throw reason;
      }
      this.captureException(reason, {
        data: {
          __sentry__: true
        },
        originalException: reason
      });
      throw _makeInternalError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${reason}`);
    });
  }
  /**
   * Occupies the client with processing and event
   */
  _process(promise) {
    this._numProcessing++;
    void promise.then((value) => {
      this._numProcessing--;
      return value;
    }, (reason) => {
      this._numProcessing--;
      return reason;
    });
  }
  /**
   * Clears outcomes on this client and returns them.
   */
  _clearOutcomes() {
    const outcomes = this._outcomes;
    this._outcomes = {};
    return Object.entries(outcomes).map(([key, quantity]) => {
      const [reason, category] = key.split(":");
      return {
        reason,
        category,
        quantity
      };
    });
  }
  /**
   * Sends client reports as an envelope.
   */
  _flushOutcomes() {
    DEBUG_BUILD && logger.log("Flushing outcomes...");
    const outcomes = this._clearOutcomes();
    if (outcomes.length === 0) {
      DEBUG_BUILD && logger.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      DEBUG_BUILD && logger.log("No dsn provided, will not send outcomes");
      return;
    }
    DEBUG_BUILD && logger.log("Sending outcomes:", outcomes);
    const envelope = createClientReportEnvelope(outcomes, this._options.tunnel && dsnToString(this._dsn));
    this.sendEnvelope(envelope);
  }
  /**
   * Creates an {@link Event} from all inputs to `captureException` and non-primitive inputs to `captureMessage`.
   */
};
function _validateBeforeSendResult(beforeSendResult, beforeSendLabel) {
  const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
  if (isThenable(beforeSendResult)) {
    return beforeSendResult.then((event) => {
      if (!isPlainObject(event) && event !== null) {
        throw _makeInternalError(invalidValueError);
      }
      return event;
    }, (e2) => {
      throw _makeInternalError(`${beforeSendLabel} rejected with ${e2}`);
    });
  } else if (!isPlainObject(beforeSendResult) && beforeSendResult !== null) {
    throw _makeInternalError(invalidValueError);
  }
  return beforeSendResult;
}
function processBeforeSend(client, options, event, hint) {
  const {
    beforeSend,
    beforeSendTransaction,
    beforeSendSpan
  } = options;
  let processedEvent = event;
  if (isErrorEvent2(processedEvent) && beforeSend) {
    return beforeSend(processedEvent, hint);
  }
  if (isTransactionEvent(processedEvent)) {
    if (beforeSendSpan) {
      const processedRootSpanJson = beforeSendSpan(convertTransactionEventToSpanJson(processedEvent));
      if (!processedRootSpanJson) {
        showSpanDropWarning();
      } else {
        processedEvent = merge2(event, convertSpanJsonToTransactionEvent(processedRootSpanJson));
      }
      if (processedEvent.spans) {
        const processedSpans = [];
        for (const span of processedEvent.spans) {
          const processedSpan = beforeSendSpan(span);
          if (!processedSpan) {
            showSpanDropWarning();
            processedSpans.push(span);
          } else {
            processedSpans.push(processedSpan);
          }
        }
        processedEvent.spans = processedSpans;
      }
    }
    if (beforeSendTransaction) {
      if (processedEvent.spans) {
        const spanCountBefore = processedEvent.spans.length;
        processedEvent.sdkProcessingMetadata = __spreadProps(__spreadValues({}, event.sdkProcessingMetadata), {
          spanCountBeforeProcessing: spanCountBefore
        });
      }
      return beforeSendTransaction(processedEvent, hint);
    }
  }
  return processedEvent;
}
function isErrorEvent2(event) {
  return event.type === void 0;
}
function isTransactionEvent(event) {
  return event.type === "transaction";
}

// node_modules/@sentry/core/build/esm/logs/envelope.js
function createLogContainerEnvelopeItem(items) {
  return [{
    type: "log",
    item_count: items.length,
    content_type: "application/vnd.sentry.items.log+json"
  }, {
    items
  }];
}
function createLogEnvelope(logs, metadata, tunnel, dsn) {
  const headers = {};
  if (metadata?.sdk) {
    headers.sdk = {
      name: metadata.sdk.name,
      version: metadata.sdk.version
    };
  }
  if (!!tunnel && !!dsn) {
    headers.dsn = dsnToString(dsn);
  }
  return createEnvelope(headers, [createLogContainerEnvelopeItem(logs)]);
}

// node_modules/@sentry/core/build/esm/logs/exports.js
GLOBAL_OBJ._sentryClientToLogBufferMap = /* @__PURE__ */ new WeakMap();
function _INTERNAL_flushLogsBuffer(client, maybeLogBuffer) {
  const logBuffer = maybeLogBuffer ?? _INTERNAL_getLogBuffer(client) ?? [];
  if (logBuffer.length === 0) {
    return;
  }
  const clientOptions = client.getOptions();
  const envelope = createLogEnvelope(logBuffer, clientOptions._metadata, clientOptions.tunnel, client.getDsn());
  GLOBAL_OBJ._sentryClientToLogBufferMap?.set(client, []);
  client.emit("flushLogs");
  client.sendEnvelope(envelope);
}
function _INTERNAL_getLogBuffer(client) {
  return GLOBAL_OBJ._sentryClientToLogBufferMap?.get(client);
}

// node_modules/@sentry/core/build/esm/sdk.js
function initAndBind(clientClass, options) {
  if (options.debug === true) {
    if (DEBUG_BUILD) {
      logger.enable();
    } else {
      consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const scope = getCurrentScope();
  scope.update(options.initialScope);
  const client = new clientClass(options);
  setCurrentClient(client);
  client.init();
  return client;
}
function setCurrentClient(client) {
  getCurrentScope().setClient(client);
}

// node_modules/@sentry/core/build/esm/utils-hoist/promisebuffer.js
var SENTRY_BUFFER_FULL_ERROR = Symbol.for("SentryBufferFullError");
function makePromiseBuffer(limit) {
  const buffer = [];
  function isReady() {
    return limit === void 0 || buffer.length < limit;
  }
  function remove(task) {
    return buffer.splice(buffer.indexOf(task), 1)[0] || Promise.resolve(void 0);
  }
  function add(taskProducer) {
    if (!isReady()) {
      return rejectedSyncPromise(SENTRY_BUFFER_FULL_ERROR);
    }
    const task = taskProducer();
    if (buffer.indexOf(task) === -1) {
      buffer.push(task);
    }
    void task.then(() => remove(task)).then(null, () => remove(task).then(null, () => {
    }));
    return task;
  }
  function drain(timeout) {
    return new SyncPromise((resolve, reject) => {
      let counter = buffer.length;
      if (!counter) {
        return resolve(true);
      }
      const capturedSetTimeout = setTimeout(() => {
        if (timeout && timeout > 0) {
          resolve(false);
        }
      }, timeout);
      buffer.forEach((item) => {
        void resolvedSyncPromise(item).then(() => {
          if (!--counter) {
            clearTimeout(capturedSetTimeout);
            resolve(true);
          }
        }, reject);
      });
    });
  }
  return {
    $: buffer,
    add,
    drain
  };
}

// node_modules/@sentry/core/build/esm/utils-hoist/ratelimit.js
var DEFAULT_RETRY_AFTER = 60 * 1e3;
function parseRetryAfterHeader(header, now = Date.now()) {
  const headerDelay = parseInt(`${header}`, 10);
  if (!isNaN(headerDelay)) {
    return headerDelay * 1e3;
  }
  const headerDate = Date.parse(`${header}`);
  if (!isNaN(headerDate)) {
    return headerDate - now;
  }
  return DEFAULT_RETRY_AFTER;
}
function disabledUntil(limits, dataCategory) {
  return limits[dataCategory] || limits.all || 0;
}
function isRateLimited(limits, dataCategory, now = Date.now()) {
  return disabledUntil(limits, dataCategory) > now;
}
function updateRateLimits(limits, {
  statusCode,
  headers
}, now = Date.now()) {
  const updatedRateLimits = __spreadValues({}, limits);
  const rateLimitHeader = headers?.["x-sentry-rate-limits"];
  const retryAfterHeader = headers?.["retry-after"];
  if (rateLimitHeader) {
    for (const limit of rateLimitHeader.trim().split(",")) {
      const [retryAfter, categories, , , namespaces] = limit.split(":", 5);
      const headerDelay = parseInt(retryAfter, 10);
      const delay2 = (!isNaN(headerDelay) ? headerDelay : 60) * 1e3;
      if (!categories) {
        updatedRateLimits.all = now + delay2;
      } else {
        for (const category of categories.split(";")) {
          if (category === "metric_bucket") {
            if (!namespaces || namespaces.split(";").includes("custom")) {
              updatedRateLimits[category] = now + delay2;
            }
          } else {
            updatedRateLimits[category] = now + delay2;
          }
        }
      }
    }
  } else if (retryAfterHeader) {
    updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
  } else if (statusCode === 429) {
    updatedRateLimits.all = now + 60 * 1e3;
  }
  return updatedRateLimits;
}

// node_modules/@sentry/core/build/esm/transports/base.js
var DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
function createTransport(options, makeRequest, buffer = makePromiseBuffer(options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE)) {
  let rateLimits = {};
  const flush2 = (timeout) => buffer.drain(timeout);
  function send(envelope) {
    const filteredEnvelopeItems = [];
    forEachEnvelopeItem(envelope, (item, type) => {
      const dataCategory = envelopeItemTypeToDataCategory(type);
      if (isRateLimited(rateLimits, dataCategory)) {
        options.recordDroppedEvent("ratelimit_backoff", dataCategory);
      } else {
        filteredEnvelopeItems.push(item);
      }
    });
    if (filteredEnvelopeItems.length === 0) {
      return resolvedSyncPromise({});
    }
    const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems);
    const recordEnvelopeLoss = (reason) => {
      forEachEnvelopeItem(filteredEnvelope, (item, type) => {
        options.recordDroppedEvent(reason, envelopeItemTypeToDataCategory(type));
      });
    };
    const requestTask = () => makeRequest({
      body: serializeEnvelope(filteredEnvelope)
    }).then((response) => {
      if (response.statusCode !== void 0 && (response.statusCode < 200 || response.statusCode >= 300)) {
        DEBUG_BUILD && logger.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
      }
      rateLimits = updateRateLimits(rateLimits, response);
      return response;
    }, (error) => {
      recordEnvelopeLoss("network_error");
      DEBUG_BUILD && logger.error("Encountered error running transport request:", error);
      throw error;
    });
    return buffer.add(requestTask).then((result) => result, (error) => {
      if (error === SENTRY_BUFFER_FULL_ERROR) {
        DEBUG_BUILD && logger.error("Skipped sending event because buffer is full.");
        recordEnvelopeLoss("queue_overflow");
        return resolvedSyncPromise({});
      } else {
        throw error;
      }
    });
  }
  return {
    send,
    flush: flush2
  };
}

// node_modules/@sentry/core/build/esm/utils/isSentryRequestUrl.js
function isSentryRequestUrl(url, client) {
  const dsn = client?.getDsn();
  const tunnel = client?.getOptions().tunnel;
  return checkDsn(url, dsn) || checkTunnel(url, tunnel);
}
function checkTunnel(url, tunnel) {
  if (!tunnel) {
    return false;
  }
  return removeTrailingSlash(url) === removeTrailingSlash(tunnel);
}
function checkDsn(url, dsn) {
  return dsn ? url.includes(dsn.host) : false;
}
function removeTrailingSlash(str) {
  return str[str.length - 1] === "/" ? str.slice(0, -1) : str;
}

// node_modules/@sentry/core/build/esm/utils/ipAddress.js
function addAutoIpAddressToUser(objWithMaybeUser) {
  if (objWithMaybeUser.user?.ip_address === void 0) {
    objWithMaybeUser.user = __spreadProps(__spreadValues({}, objWithMaybeUser.user), {
      ip_address: "{{auto}}"
    });
  }
}
function addAutoIpAddressToSession(session) {
  if ("aggregates" in session) {
    if (session.attrs?.["ip_address"] === void 0) {
      session.attrs = __spreadProps(__spreadValues({}, session.attrs), {
        ip_address: "{{auto}}"
      });
    }
  } else {
    if (session.ipAddress === void 0) {
      session.ipAddress = "{{auto}}";
    }
  }
}

// node_modules/@sentry/core/build/esm/utils/sdkMetadata.js
function applySdkMetadata(options, name, names = [name], source = "npm") {
  const metadata = options._metadata || {};
  if (!metadata.sdk) {
    metadata.sdk = {
      name: `sentry.javascript.${name}`,
      packages: names.map((name2) => ({
        name: `${source}:@sentry/${name2}`,
        version: SDK_VERSION
      })),
      version: SDK_VERSION
    };
  }
  options._metadata = metadata;
}

// node_modules/@sentry/core/build/esm/utils/traceData.js
function getTraceData(options = {}) {
  const client = getClient();
  if (!isEnabled() || !client) {
    return {};
  }
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (acs.getTraceData) {
    return acs.getTraceData(options);
  }
  const scope = getCurrentScope();
  const span = options.span || getActiveSpan();
  const sentryTrace = span ? spanToTraceHeader(span) : scopeToTraceHeader(scope);
  const dsc = span ? getDynamicSamplingContextFromSpan(span) : getDynamicSamplingContextFromScope(client, scope);
  const baggage = dynamicSamplingContextToSentryBaggageHeader(dsc);
  const isValidSentryTraceHeader = TRACEPARENT_REGEXP.test(sentryTrace);
  if (!isValidSentryTraceHeader) {
    logger.warn("Invalid sentry-trace data. Cannot generate trace data");
    return {};
  }
  return {
    "sentry-trace": sentryTrace,
    baggage
  };
}
function scopeToTraceHeader(scope) {
  const {
    traceId,
    sampled,
    propagationSpanId
  } = scope.getPropagationContext();
  return generateSentryTraceHeader(traceId, propagationSpanId, sampled);
}

// node_modules/@sentry/core/build/esm/breadcrumbs.js
var DEFAULT_BREADCRUMBS = 100;
function addBreadcrumb(breadcrumb, hint) {
  const client = getClient();
  const isolationScope = getIsolationScope();
  if (!client) return;
  const {
    beforeBreadcrumb = null,
    maxBreadcrumbs = DEFAULT_BREADCRUMBS
  } = client.getOptions();
  if (maxBreadcrumbs <= 0) return;
  const timestamp = dateTimestampInSeconds();
  const mergedBreadcrumb = __spreadValues({
    timestamp
  }, breadcrumb);
  const finalBreadcrumb = beforeBreadcrumb ? consoleSandbox(() => beforeBreadcrumb(mergedBreadcrumb, hint)) : mergedBreadcrumb;
  if (finalBreadcrumb === null) return;
  if (client.emit) {
    client.emit("beforeAddBreadcrumb", finalBreadcrumb, hint);
  }
  isolationScope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
}

// node_modules/@sentry/core/build/esm/integrations/functiontostring.js
var originalFunctionToString;
var INTEGRATION_NAME = "FunctionToString";
var SETUP_CLIENTS = /* @__PURE__ */ new WeakMap();
var _functionToStringIntegration = () => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      originalFunctionToString = Function.prototype.toString;
      try {
        Function.prototype.toString = function(...args) {
          const originalFunction = getOriginalFunction(this);
          const context = SETUP_CLIENTS.has(getClient()) && originalFunction !== void 0 ? originalFunction : this;
          return originalFunctionToString.apply(context, args);
        };
      } catch {
      }
    },
    setup(client) {
      SETUP_CLIENTS.set(client, true);
    }
  };
};
var functionToStringIntegration = defineIntegration(_functionToStringIntegration);

// node_modules/@sentry/core/build/esm/integrations/eventFilters.js
var DEFAULT_IGNORE_ERRORS = [
  /^Script error\.?$/,
  /^Javascript error: Script error\.? on line 0$/,
  /^ResizeObserver loop completed with undelivered notifications.$/,
  // The browser logs this when a ResizeObserver handler takes a bit longer. Usually this is not an actual issue though. It indicates slowness.
  /^Cannot redefine property: googletag$/,
  // This is thrown when google tag manager is used in combination with an ad blocker
  /^Can't find variable: gmo$/,
  // Error from Google Search App https://issuetracker.google.com/issues/396043331
  /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
  // Random error that happens but not actionable or noticeable to end-users.
  `can't redefine non-configurable property "solana"`,
  // Probably a browser extension or custom browser (Brave) throwing this error
  "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
  // Error thrown by GTM, seemingly not affecting end-users
  "Can't find variable: _AutofillCallbackHandler",
  // Unactionable error in instagram webview https://developers.facebook.com/community/threads/320013549791141/
  /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
  // unactionable error from CEFSharp, a .NET library that embeds chromium in .NET apps
  /^Java exception was raised during method invocation$/
  // error from Facebook Mobile browser (https://github.com/getsentry/sentry-javascript/issues/15065)
];
var INTEGRATION_NAME2 = "EventFilters";
var eventFiltersIntegration = defineIntegration((options = {}) => {
  let mergedOptions;
  return {
    name: INTEGRATION_NAME2,
    setup(client) {
      const clientOptions = client.getOptions();
      mergedOptions = _mergeOptions(options, clientOptions);
    },
    processEvent(event, _hint, client) {
      if (!mergedOptions) {
        const clientOptions = client.getOptions();
        mergedOptions = _mergeOptions(options, clientOptions);
      }
      return _shouldDropEvent(event, mergedOptions) ? null : event;
    }
  };
});
var inboundFiltersIntegration = defineIntegration((options = {}) => {
  return __spreadProps(__spreadValues({}, eventFiltersIntegration(options)), {
    name: "InboundFilters"
  });
});
function _mergeOptions(internalOptions = {}, clientOptions = {}) {
  return {
    allowUrls: [...internalOptions.allowUrls || [], ...clientOptions.allowUrls || []],
    denyUrls: [...internalOptions.denyUrls || [], ...clientOptions.denyUrls || []],
    ignoreErrors: [...internalOptions.ignoreErrors || [], ...clientOptions.ignoreErrors || [], ...internalOptions.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS],
    ignoreTransactions: [...internalOptions.ignoreTransactions || [], ...clientOptions.ignoreTransactions || []]
  };
}
function _shouldDropEvent(event, options) {
  if (!event.type) {
    if (_isIgnoredError(event, options.ignoreErrors)) {
      DEBUG_BUILD && logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${getEventDescription(event)}`);
      return true;
    }
    if (_isUselessError(event)) {
      DEBUG_BUILD && logger.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${getEventDescription(event)}`);
      return true;
    }
    if (_isDeniedUrl(event, options.denyUrls)) {
      DEBUG_BUILD && logger.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${getEventDescription(event)}.
Url: ${_getEventFilterUrl(event)}`);
      return true;
    }
    if (!_isAllowedUrl(event, options.allowUrls)) {
      DEBUG_BUILD && logger.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${getEventDescription(event)}.
Url: ${_getEventFilterUrl(event)}`);
      return true;
    }
  } else if (event.type === "transaction") {
    if (_isIgnoredTransaction(event, options.ignoreTransactions)) {
      DEBUG_BUILD && logger.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${getEventDescription(event)}`);
      return true;
    }
  }
  return false;
}
function _isIgnoredError(event, ignoreErrors) {
  if (!ignoreErrors?.length) {
    return false;
  }
  return getPossibleEventMessages(event).some((message) => stringMatchesSomePattern(message, ignoreErrors));
}
function _isIgnoredTransaction(event, ignoreTransactions) {
  if (!ignoreTransactions?.length) {
    return false;
  }
  const name = event.transaction;
  return name ? stringMatchesSomePattern(name, ignoreTransactions) : false;
}
function _isDeniedUrl(event, denyUrls) {
  if (!denyUrls?.length) {
    return false;
  }
  const url = _getEventFilterUrl(event);
  return !url ? false : stringMatchesSomePattern(url, denyUrls);
}
function _isAllowedUrl(event, allowUrls) {
  if (!allowUrls?.length) {
    return true;
  }
  const url = _getEventFilterUrl(event);
  return !url ? true : stringMatchesSomePattern(url, allowUrls);
}
function _getLastValidUrl(frames = []) {
  for (let i = frames.length - 1; i >= 0; i--) {
    const frame = frames[i];
    if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") {
      return frame.filename || null;
    }
  }
  return null;
}
function _getEventFilterUrl(event) {
  try {
    const rootException = [...event.exception?.values ?? []].reverse().find((value) => value.mechanism?.parent_id === void 0 && value.stacktrace?.frames?.length);
    const frames = rootException?.stacktrace?.frames;
    return frames ? _getLastValidUrl(frames) : null;
  } catch (oO) {
    DEBUG_BUILD && logger.error(`Cannot extract url for event ${getEventDescription(event)}`);
    return null;
  }
}
function _isUselessError(event) {
  if (!event.exception?.values?.length) {
    return false;
  }
  return (
    // No top-level message
    !event.message && // There are no exception values that have a stacktrace, a non-generic-Error type or value
    !event.exception.values.some((value) => value.stacktrace || value.type && value.type !== "Error" || value.value)
  );
}

// node_modules/@sentry/core/build/esm/utils-hoist/aggregate-errors.js
function applyAggregateErrorsToEvent(exceptionFromErrorImplementation, parser, key, limit, event, hint) {
  if (!event.exception?.values || !hint || !isInstanceOf(hint.originalException, Error)) {
    return;
  }
  const originalException = event.exception.values.length > 0 ? event.exception.values[event.exception.values.length - 1] : void 0;
  if (originalException) {
    event.exception.values = aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, hint.originalException, key, event.exception.values, originalException, 0);
  }
}
function aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, error, key, prevExceptions, exception, exceptionId) {
  if (prevExceptions.length >= limit + 1) {
    return prevExceptions;
  }
  let newExceptions = [...prevExceptions];
  if (isInstanceOf(error[key], Error)) {
    applyExceptionGroupFieldsForParentException(exception, exceptionId);
    const newException = exceptionFromErrorImplementation(parser, error[key]);
    const newExceptionId = newExceptions.length;
    applyExceptionGroupFieldsForChildException(newException, key, newExceptionId, exceptionId);
    newExceptions = aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, error[key], key, [newException, ...newExceptions], newException, newExceptionId);
  }
  if (Array.isArray(error.errors)) {
    error.errors.forEach((childError, i) => {
      if (isInstanceOf(childError, Error)) {
        applyExceptionGroupFieldsForParentException(exception, exceptionId);
        const newException = exceptionFromErrorImplementation(parser, childError);
        const newExceptionId = newExceptions.length;
        applyExceptionGroupFieldsForChildException(newException, `errors[${i}]`, newExceptionId, exceptionId);
        newExceptions = aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, childError, key, [newException, ...newExceptions], newException, newExceptionId);
      }
    });
  }
  return newExceptions;
}
function applyExceptionGroupFieldsForParentException(exception, exceptionId) {
  exception.mechanism = exception.mechanism || {
    type: "generic",
    handled: true
  };
  exception.mechanism = __spreadProps(__spreadValues(__spreadValues({}, exception.mechanism), exception.type === "AggregateError" && {
    is_exception_group: true
  }), {
    exception_id: exceptionId
  });
}
function applyExceptionGroupFieldsForChildException(exception, source, exceptionId, parentId) {
  exception.mechanism = exception.mechanism || {
    type: "generic",
    handled: true
  };
  exception.mechanism = __spreadProps(__spreadValues({}, exception.mechanism), {
    type: "chained",
    source,
    exception_id: exceptionId,
    parent_id: parentId
  });
}

// node_modules/@sentry/core/build/esm/utils-hoist/instrument/console.js
function addConsoleInstrumentationHandler(handler) {
  const type = "console";
  addHandler(type, handler);
  maybeInstrument(type, instrumentConsole);
}
function instrumentConsole() {
  if (!("console" in GLOBAL_OBJ)) {
    return;
  }
  CONSOLE_LEVELS.forEach(function(level) {
    if (!(level in GLOBAL_OBJ.console)) {
      return;
    }
    fill(GLOBAL_OBJ.console, level, function(originalConsoleMethod) {
      originalConsoleMethods[level] = originalConsoleMethod;
      return function(...args) {
        const handlerData = {
          args,
          level
        };
        triggerHandlers("console", handlerData);
        const log2 = originalConsoleMethods[level];
        log2?.apply(GLOBAL_OBJ.console, args);
      };
    });
  });
}

// node_modules/@sentry/core/build/esm/utils-hoist/severity.js
function severityLevelFromString(level) {
  return level === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(level) ? level : "log";
}

// node_modules/@sentry/core/build/esm/integrations/dedupe.js
var INTEGRATION_NAME3 = "Dedupe";
var _dedupeIntegration = () => {
  let previousEvent;
  return {
    name: INTEGRATION_NAME3,
    processEvent(currentEvent) {
      if (currentEvent.type) {
        return currentEvent;
      }
      try {
        if (_shouldDropEvent2(currentEvent, previousEvent)) {
          DEBUG_BUILD && logger.warn("Event dropped due to being a duplicate of previously captured event.");
          return null;
        }
      } catch (_oO) {
      }
      return previousEvent = currentEvent;
    }
  };
};
var dedupeIntegration = defineIntegration(_dedupeIntegration);
function _shouldDropEvent2(currentEvent, previousEvent) {
  if (!previousEvent) {
    return false;
  }
  if (_isSameMessageEvent(currentEvent, previousEvent)) {
    return true;
  }
  if (_isSameExceptionEvent(currentEvent, previousEvent)) {
    return true;
  }
  return false;
}
function _isSameMessageEvent(currentEvent, previousEvent) {
  const currentMessage = currentEvent.message;
  const previousMessage = previousEvent.message;
  if (!currentMessage && !previousMessage) {
    return false;
  }
  if (currentMessage && !previousMessage || !currentMessage && previousMessage) {
    return false;
  }
  if (currentMessage !== previousMessage) {
    return false;
  }
  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }
  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }
  return true;
}
function _isSameExceptionEvent(currentEvent, previousEvent) {
  const previousException = _getExceptionFromEvent(previousEvent);
  const currentException = _getExceptionFromEvent(currentEvent);
  if (!previousException || !currentException) {
    return false;
  }
  if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
    return false;
  }
  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }
  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }
  return true;
}
function _isSameStacktrace(currentEvent, previousEvent) {
  let currentFrames = getFramesFromEvent(currentEvent);
  let previousFrames = getFramesFromEvent(previousEvent);
  if (!currentFrames && !previousFrames) {
    return true;
  }
  if (currentFrames && !previousFrames || !currentFrames && previousFrames) {
    return false;
  }
  currentFrames = currentFrames;
  previousFrames = previousFrames;
  if (previousFrames.length !== currentFrames.length) {
    return false;
  }
  for (let i = 0; i < previousFrames.length; i++) {
    const frameA = previousFrames[i];
    const frameB = currentFrames[i];
    if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) {
      return false;
    }
  }
  return true;
}
function _isSameFingerprint(currentEvent, previousEvent) {
  let currentFingerprint = currentEvent.fingerprint;
  let previousFingerprint = previousEvent.fingerprint;
  if (!currentFingerprint && !previousFingerprint) {
    return true;
  }
  if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) {
    return false;
  }
  currentFingerprint = currentFingerprint;
  previousFingerprint = previousFingerprint;
  try {
    return !!(currentFingerprint.join("") === previousFingerprint.join(""));
  } catch (_oO) {
    return false;
  }
}
function _getExceptionFromEvent(event) {
  return event.exception?.values && event.exception.values[0];
}

// node_modules/@sentry/core/build/esm/utils-hoist/url.js
var DEFAULT_BASE_URL = "thismessage:/";
function isURLObjectRelative(url) {
  return "isRelative" in url;
}
function parseStringToURLObject(url, urlBase) {
  const isRelative = url.indexOf("://") <= 0 && url.indexOf("//") !== 0;
  const base = urlBase ?? (isRelative ? DEFAULT_BASE_URL : void 0);
  try {
    if ("canParse" in URL && !URL.canParse(url, base)) {
      return void 0;
    }
    const fullUrlObject = new URL(url, base);
    if (isRelative) {
      return {
        isRelative,
        pathname: fullUrlObject.pathname,
        search: fullUrlObject.search,
        hash: fullUrlObject.hash
      };
    }
    return fullUrlObject;
  } catch {
  }
  return void 0;
}
function getSanitizedUrlStringFromUrlObject(url) {
  if (isURLObjectRelative(url)) {
    return url.pathname;
  }
  const newUrl = new URL(url);
  newUrl.search = "";
  newUrl.hash = "";
  if (["80", "443"].includes(newUrl.port)) {
    newUrl.port = "";
  }
  if (newUrl.password) {
    newUrl.password = "%filtered%";
  }
  if (newUrl.username) {
    newUrl.username = "%filtered%";
  }
  return newUrl.toString();
}
function parseUrl(url) {
  if (!url) {
    return {};
  }
  const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!match) {
    return {};
  }
  const query = match[6] || "";
  const fragment = match[8] || "";
  return {
    host: match[4],
    path: match[5],
    protocol: match[2],
    search: query,
    hash: fragment,
    relative: match[5] + query + fragment
    // everything minus origin
  };
}
function stripUrlQueryAndFragment(urlPath) {
  return urlPath.split(/[?#]/, 1)[0];
}

// node_modules/@sentry/core/build/esm/fetch.js
function instrumentFetchRequest(handlerData, shouldCreateSpan, shouldAttachHeaders2, spans, spanOrigin = "auto.http.browser") {
  if (!handlerData.fetchData) {
    return void 0;
  }
  const {
    method,
    url
  } = handlerData.fetchData;
  const shouldCreateSpanResult = hasSpansEnabled() && shouldCreateSpan(url);
  if (handlerData.endTimestamp && shouldCreateSpanResult) {
    const spanId = handlerData.fetchData.__span;
    if (!spanId) return;
    const span2 = spans[spanId];
    if (span2) {
      endSpan(span2, handlerData);
      delete spans[spanId];
    }
    return void 0;
  }
  const hasParent = !!getActiveSpan();
  const span = shouldCreateSpanResult && hasParent ? startInactiveSpan(getSpanStartOptions(url, method, spanOrigin)) : new SentryNonRecordingSpan();
  handlerData.fetchData.__span = span.spanContext().spanId;
  spans[span.spanContext().spanId] = span;
  if (shouldAttachHeaders2(handlerData.fetchData.url)) {
    const request = handlerData.args[0];
    const options = handlerData.args[1] || {};
    const headers = _addTracingHeadersToFetchRequest(
      request,
      options,
      // If performance is disabled (TWP) or there's no active root span (pageload/navigation/interaction),
      // we do not want to use the span as base for the trace headers,
      // which means that the headers will be generated from the scope and the sampling decision is deferred
      hasSpansEnabled() && hasParent ? span : void 0
    );
    if (headers) {
      handlerData.args[1] = options;
      options.headers = headers;
    }
  }
  const client = getClient();
  if (client) {
    const fetchHint = {
      input: handlerData.args,
      response: handlerData.response,
      startTimestamp: handlerData.startTimestamp,
      endTimestamp: handlerData.endTimestamp
    };
    client.emit("beforeOutgoingRequestSpan", span, fetchHint);
  }
  return span;
}
function _addTracingHeadersToFetchRequest(request, fetchOptionsObj, span) {
  const traceHeaders = getTraceData({
    span
  });
  const sentryTrace = traceHeaders["sentry-trace"];
  const baggage = traceHeaders.baggage;
  if (!sentryTrace) {
    return void 0;
  }
  const originalHeaders = fetchOptionsObj.headers || (isRequest(request) ? request.headers : void 0);
  if (!originalHeaders) {
    return __spreadValues({}, traceHeaders);
  } else if (isHeaders(originalHeaders)) {
    const newHeaders = new Headers(originalHeaders);
    if (!newHeaders.get("sentry-trace")) {
      newHeaders.set("sentry-trace", sentryTrace);
    }
    if (baggage) {
      const prevBaggageHeader = newHeaders.get("baggage");
      if (!prevBaggageHeader) {
        newHeaders.set("baggage", baggage);
      } else if (!baggageHeaderHasSentryBaggageValues(prevBaggageHeader)) {
        newHeaders.set("baggage", `${prevBaggageHeader},${baggage}`);
      }
    }
    return newHeaders;
  } else if (Array.isArray(originalHeaders)) {
    const newHeaders = [...originalHeaders];
    if (!originalHeaders.find((header) => header[0] === "sentry-trace")) {
      newHeaders.push(["sentry-trace", sentryTrace]);
    }
    const prevBaggageHeaderWithSentryValues = originalHeaders.find((header) => header[0] === "baggage" && baggageHeaderHasSentryBaggageValues(header[1]));
    if (baggage && !prevBaggageHeaderWithSentryValues) {
      newHeaders.push(["baggage", baggage]);
    }
    return newHeaders;
  } else {
    const existingSentryTraceHeader = "sentry-trace" in originalHeaders ? originalHeaders["sentry-trace"] : void 0;
    const existingBaggageHeader = "baggage" in originalHeaders ? originalHeaders.baggage : void 0;
    const newBaggageHeaders = existingBaggageHeader ? Array.isArray(existingBaggageHeader) ? [...existingBaggageHeader] : [existingBaggageHeader] : [];
    const prevBaggageHeaderWithSentryValues = existingBaggageHeader && (Array.isArray(existingBaggageHeader) ? existingBaggageHeader.find((headerItem) => baggageHeaderHasSentryBaggageValues(headerItem)) : baggageHeaderHasSentryBaggageValues(existingBaggageHeader));
    if (baggage && !prevBaggageHeaderWithSentryValues) {
      newBaggageHeaders.push(baggage);
    }
    return __spreadProps(__spreadValues({}, originalHeaders), {
      "sentry-trace": existingSentryTraceHeader ?? sentryTrace,
      baggage: newBaggageHeaders.length > 0 ? newBaggageHeaders.join(",") : void 0
    });
  }
}
function endSpan(span, handlerData) {
  if (handlerData.response) {
    setHttpStatus(span, handlerData.response.status);
    const contentLength = handlerData.response?.headers && handlerData.response.headers.get("content-length");
    if (contentLength) {
      const contentLengthNum = parseInt(contentLength);
      if (contentLengthNum > 0) {
        span.setAttribute("http.response_content_length", contentLengthNum);
      }
    }
  } else if (handlerData.error) {
    span.setStatus({
      code: SPAN_STATUS_ERROR,
      message: "internal_error"
    });
  }
  span.end();
}
function baggageHeaderHasSentryBaggageValues(baggageHeader) {
  return baggageHeader.split(",").some((baggageEntry) => baggageEntry.trim().startsWith(SENTRY_BAGGAGE_KEY_PREFIX));
}
function isHeaders(headers) {
  return typeof Headers !== "undefined" && isInstanceOf(headers, Headers);
}
function getSpanStartOptions(url, method, spanOrigin) {
  const parsedUrl = parseStringToURLObject(url);
  return {
    name: parsedUrl ? `${method} ${getSanitizedUrlStringFromUrlObject(parsedUrl)}` : method,
    attributes: getFetchSpanAttributes(url, parsedUrl, method, spanOrigin)
  };
}
function getFetchSpanAttributes(url, parsedUrl, method, spanOrigin) {
  const attributes = {
    url,
    type: "fetch",
    "http.method": method,
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: spanOrigin,
    [SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client"
  };
  if (parsedUrl) {
    if (!isURLObjectRelative(parsedUrl)) {
      attributes["http.url"] = parsedUrl.href;
      attributes["server.address"] = parsedUrl.host;
    }
    if (parsedUrl.search) {
      attributes["http.query"] = parsedUrl.search;
    }
    if (parsedUrl.hash) {
      attributes["http.fragment"] = parsedUrl.hash;
    }
  }
  return attributes;
}

// node_modules/@sentry/core/build/esm/utils-hoist/breadcrumb-log-level.js
function getBreadcrumbLogLevelFromHttpStatusCode(statusCode) {
  if (statusCode === void 0) {
    return void 0;
  } else if (statusCode >= 400 && statusCode < 500) {
    return "warning";
  } else if (statusCode >= 500) {
    return "error";
  } else {
    return void 0;
  }
}

// node_modules/@sentry/core/build/esm/utils-hoist/supports.js
var WINDOW2 = GLOBAL_OBJ;
function supportsHistory() {
  return "history" in WINDOW2 && !!WINDOW2.history;
}
function supportsFetch() {
  if (!("fetch" in WINDOW2)) {
    return false;
  }
  try {
    new Headers();
    new Request("http://www.example.com");
    new Response();
    return true;
  } catch (e2) {
    return false;
  }
}
function isNativeFunction(func) {
  return func && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
function supportsNativeFetch() {
  if (typeof EdgeRuntime === "string") {
    return true;
  }
  if (!supportsFetch()) {
    return false;
  }
  if (isNativeFunction(WINDOW2.fetch)) {
    return true;
  }
  let result = false;
  const doc = WINDOW2.document;
  if (doc && typeof doc.createElement === "function") {
    try {
      const sandbox = doc.createElement("iframe");
      sandbox.hidden = true;
      doc.head.appendChild(sandbox);
      if (sandbox.contentWindow?.fetch) {
        result = isNativeFunction(sandbox.contentWindow.fetch);
      }
      doc.head.removeChild(sandbox);
    } catch (err) {
      DEBUG_BUILD && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
    }
  }
  return result;
}

// node_modules/@sentry/core/build/esm/utils-hoist/instrument/fetch.js
function addFetchInstrumentationHandler(handler, skipNativeFetchCheck) {
  const type = "fetch";
  addHandler(type, handler);
  maybeInstrument(type, () => instrumentFetch(void 0, skipNativeFetchCheck));
}
function addFetchEndInstrumentationHandler(handler) {
  const type = "fetch-body-resolved";
  addHandler(type, handler);
  maybeInstrument(type, () => instrumentFetch(streamHandler));
}
function instrumentFetch(onFetchResolved, skipNativeFetchCheck = false) {
  if (skipNativeFetchCheck && !supportsNativeFetch()) {
    return;
  }
  fill(GLOBAL_OBJ, "fetch", function(originalFetch) {
    return function(...args) {
      const virtualError = new Error();
      const {
        method,
        url
      } = parseFetchArgs(args);
      const handlerData = {
        args,
        fetchData: {
          method,
          url
        },
        startTimestamp: timestampInSeconds() * 1e3,
        // // Adding the error to be able to fingerprint the failed fetch event in HttpClient instrumentation
        virtualError,
        headers: getHeadersFromFetchArgs(args)
      };
      if (!onFetchResolved) {
        triggerHandlers("fetch", __spreadValues({}, handlerData));
      }
      return originalFetch.apply(GLOBAL_OBJ, args).then((response) => __async(this, null, function* () {
        if (onFetchResolved) {
          onFetchResolved(response);
        } else {
          triggerHandlers("fetch", __spreadProps(__spreadValues({}, handlerData), {
            endTimestamp: timestampInSeconds() * 1e3,
            response
          }));
        }
        return response;
      }), (error) => {
        triggerHandlers("fetch", __spreadProps(__spreadValues({}, handlerData), {
          endTimestamp: timestampInSeconds() * 1e3,
          error
        }));
        if (isError(error) && error.stack === void 0) {
          error.stack = virtualError.stack;
          addNonEnumerableProperty(error, "framesToPop", 1);
        }
        if (error instanceof TypeError && (error.message === "Failed to fetch" || error.message === "Load failed" || error.message === "NetworkError when attempting to fetch resource.")) {
          try {
            const url2 = new URL(handlerData.fetchData.url);
            error.message = `${error.message} (${url2.host})`;
          } catch {
          }
        }
        throw error;
      });
    };
  });
}
function resolveResponse(res, onFinishedResolving) {
  return __async(this, null, function* () {
    if (res?.body) {
      const body = res.body;
      const responseReader = body.getReader();
      const maxFetchDurationTimeout = setTimeout(
        () => {
          body.cancel().then(null, () => {
          });
        },
        90 * 1e3
        // 90s
      );
      let readingActive = true;
      while (readingActive) {
        let chunkTimeout;
        try {
          chunkTimeout = setTimeout(() => {
            body.cancel().then(null, () => {
            });
          }, 5e3);
          const {
            done
          } = yield responseReader.read();
          clearTimeout(chunkTimeout);
          if (done) {
            onFinishedResolving();
            readingActive = false;
          }
        } catch (error) {
          readingActive = false;
        } finally {
          clearTimeout(chunkTimeout);
        }
      }
      clearTimeout(maxFetchDurationTimeout);
      responseReader.releaseLock();
      body.cancel().then(null, () => {
      });
    }
  });
}
function streamHandler(response) {
  let clonedResponseForResolving;
  try {
    clonedResponseForResolving = response.clone();
  } catch {
    return;
  }
  resolveResponse(clonedResponseForResolving, () => {
    triggerHandlers("fetch-body-resolved", {
      endTimestamp: timestampInSeconds() * 1e3,
      response
    });
  });
}
function hasProp(obj, prop) {
  return !!obj && typeof obj === "object" && !!obj[prop];
}
function getUrlFromResource(resource) {
  if (typeof resource === "string") {
    return resource;
  }
  if (!resource) {
    return "";
  }
  if (hasProp(resource, "url")) {
    return resource.url;
  }
  if (resource.toString) {
    return resource.toString();
  }
  return "";
}
function parseFetchArgs(fetchArgs) {
  if (fetchArgs.length === 0) {
    return {
      method: "GET",
      url: ""
    };
  }
  if (fetchArgs.length === 2) {
    const [url, options] = fetchArgs;
    return {
      url: getUrlFromResource(url),
      method: hasProp(options, "method") ? String(options.method).toUpperCase() : "GET"
    };
  }
  const arg = fetchArgs[0];
  return {
    url: getUrlFromResource(arg),
    method: hasProp(arg, "method") ? String(arg.method).toUpperCase() : "GET"
  };
}
function getHeadersFromFetchArgs(fetchArgs) {
  const [requestArgument, optionsArgument] = fetchArgs;
  try {
    if (typeof optionsArgument === "object" && optionsArgument !== null && "headers" in optionsArgument && optionsArgument.headers) {
      return new Headers(optionsArgument.headers);
    }
    if (isRequest(requestArgument)) {
      return new Headers(requestArgument.headers);
    }
  } catch {
  }
  return;
}

// node_modules/@sentry/core/build/esm/utils-hoist/env.js
function isBrowserBundle() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function getSDKSource() {
  return "npm";
}

// node_modules/@sentry/core/build/esm/utils-hoist/node.js
function isNodeEnv() {
  return !isBrowserBundle() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
}

// node_modules/@sentry/core/build/esm/utils-hoist/isBrowser.js
function isBrowser() {
  return typeof window !== "undefined" && (!isNodeEnv() || isElectronNodeRenderer());
}
function isElectronNodeRenderer() {
  const process2 = GLOBAL_OBJ.process;
  return process2?.type === "renderer";
}

// node_modules/@sentry/browser/build/npm/esm/helpers.js
var WINDOW3 = GLOBAL_OBJ;
var ignoreOnError = 0;
function shouldIgnoreOnError() {
  return ignoreOnError > 0;
}
function ignoreNextOnError() {
  ignoreOnError++;
  setTimeout(() => {
    ignoreOnError--;
  });
}
function wrap(fn, options = {}) {
  function isFunction(fn2) {
    return typeof fn2 === "function";
  }
  if (!isFunction(fn)) {
    return fn;
  }
  try {
    const wrapper = fn.__sentry_wrapped__;
    if (wrapper) {
      if (typeof wrapper === "function") {
        return wrapper;
      } else {
        return fn;
      }
    }
    if (getOriginalFunction(fn)) {
      return fn;
    }
  } catch (e2) {
    return fn;
  }
  const sentryWrapped = function(...args) {
    try {
      const wrappedArguments = args.map((arg) => wrap(arg, options));
      return fn.apply(this, wrappedArguments);
    } catch (ex) {
      ignoreNextOnError();
      withScope2((scope) => {
        scope.addEventProcessor((event) => {
          if (options.mechanism) {
            addExceptionTypeValue(event, void 0, void 0);
            addExceptionMechanism(event, options.mechanism);
          }
          event.extra = __spreadProps(__spreadValues({}, event.extra), {
            arguments: args
          });
          return event;
        });
        captureException(ex);
      });
      throw ex;
    }
  };
  try {
    for (const property in fn) {
      if (Object.prototype.hasOwnProperty.call(fn, property)) {
        sentryWrapped[property] = fn[property];
      }
    }
  } catch {
  }
  markFunctionWrapped(sentryWrapped, fn);
  addNonEnumerableProperty(fn, "__sentry_wrapped__", sentryWrapped);
  try {
    const descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, "name");
    if (descriptor.configurable) {
      Object.defineProperty(sentryWrapped, "name", {
        get() {
          return fn.name;
        }
      });
    }
  } catch {
  }
  return sentryWrapped;
}

// node_modules/@sentry/browser/build/npm/esm/eventbuilder.js
function exceptionFromError(stackParser, ex) {
  const frames = parseStackFrames(stackParser, ex);
  const exception = {
    type: extractType(ex),
    value: extractMessage(ex)
  };
  if (frames.length) {
    exception.stacktrace = {
      frames
    };
  }
  if (exception.type === void 0 && exception.value === "") {
    exception.value = "Unrecoverable error caught";
  }
  return exception;
}
function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
  const client = getClient();
  const normalizeDepth = client?.getOptions().normalizeDepth;
  const errorFromProp = getErrorPropertyFromObject(exception);
  const extra = {
    __serialized__: normalizeToSize(exception, normalizeDepth)
  };
  if (errorFromProp) {
    return {
      exception: {
        values: [exceptionFromError(stackParser, errorFromProp)]
      },
      extra
    };
  }
  const event = {
    exception: {
      values: [{
        type: isEvent(exception) ? exception.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
        value: getNonErrorObjectExceptionValue(exception, {
          isUnhandledRejection
        })
      }]
    },
    extra
  };
  if (syntheticException) {
    const frames = parseStackFrames(stackParser, syntheticException);
    if (frames.length) {
      event.exception.values[0].stacktrace = {
        frames
      };
    }
  }
  return event;
}
function eventFromError(stackParser, ex) {
  return {
    exception: {
      values: [exceptionFromError(stackParser, ex)]
    }
  };
}
function parseStackFrames(stackParser, ex) {
  const stacktrace = ex.stacktrace || ex.stack || "";
  const skipLines = getSkipFirstStackStringLines(ex);
  const framesToPop = getPopFirstTopFrames(ex);
  try {
    return stackParser(stacktrace, skipLines, framesToPop);
  } catch (e2) {
  }
  return [];
}
var reactMinifiedRegexp = /Minified React error #\d+;/i;
function getSkipFirstStackStringLines(ex) {
  if (ex && reactMinifiedRegexp.test(ex.message)) {
    return 1;
  }
  return 0;
}
function getPopFirstTopFrames(ex) {
  if (typeof ex.framesToPop === "number") {
    return ex.framesToPop;
  }
  return 0;
}
function isWebAssemblyException(exception) {
  if (typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined") {
    return exception instanceof WebAssembly.Exception;
  } else {
    return false;
  }
}
function extractType(ex) {
  const name = ex?.name;
  if (!name && isWebAssemblyException(ex)) {
    const hasTypeInMessage = ex.message && Array.isArray(ex.message) && ex.message.length == 2;
    return hasTypeInMessage ? ex.message[0] : "WebAssembly.Exception";
  }
  return name;
}
function extractMessage(ex) {
  const message = ex?.message;
  if (isWebAssemblyException(ex)) {
    if (Array.isArray(ex.message) && ex.message.length == 2) {
      return ex.message[1];
    }
    return "wasm exception";
  }
  if (!message) {
    return "No error message";
  }
  if (message.error && typeof message.error.message === "string") {
    return message.error.message;
  }
  return message;
}
function eventFromException(stackParser, exception, hint, attachStacktrace) {
  const syntheticException = hint?.syntheticException || void 0;
  const event = eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace);
  addExceptionMechanism(event);
  event.level = "error";
  if (hint?.event_id) {
    event.event_id = hint.event_id;
  }
  return resolvedSyncPromise(event);
}
function eventFromMessage(stackParser, message, level = "info", hint, attachStacktrace) {
  const syntheticException = hint?.syntheticException || void 0;
  const event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
  event.level = level;
  if (hint?.event_id) {
    event.event_id = hint.event_id;
  }
  return resolvedSyncPromise(event);
}
function eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
  let event;
  if (isErrorEvent(exception) && exception.error) {
    const errorEvent = exception;
    return eventFromError(stackParser, errorEvent.error);
  }
  if (isDOMError(exception) || isDOMException(exception)) {
    const domException = exception;
    if ("stack" in exception) {
      event = eventFromError(stackParser, exception);
    } else {
      const name = domException.name || (isDOMError(domException) ? "DOMError" : "DOMException");
      const message = domException.message ? `${name}: ${domException.message}` : name;
      event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
      addExceptionTypeValue(event, message);
    }
    if ("code" in domException) {
      event.tags = __spreadProps(__spreadValues({}, event.tags), {
        "DOMException.code": `${domException.code}`
      });
    }
    return event;
  }
  if (isError(exception)) {
    return eventFromError(stackParser, exception);
  }
  if (isPlainObject(exception) || isEvent(exception)) {
    const objectException = exception;
    event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
    addExceptionMechanism(event, {
      synthetic: true
    });
    return event;
  }
  event = eventFromString(stackParser, exception, syntheticException, attachStacktrace);
  addExceptionTypeValue(event, `${exception}`, void 0);
  addExceptionMechanism(event, {
    synthetic: true
  });
  return event;
}
function eventFromString(stackParser, message, syntheticException, attachStacktrace) {
  const event = {};
  if (attachStacktrace && syntheticException) {
    const frames = parseStackFrames(stackParser, syntheticException);
    if (frames.length) {
      event.exception = {
        values: [{
          value: message,
          stacktrace: {
            frames
          }
        }]
      };
    }
    addExceptionMechanism(event, {
      synthetic: true
    });
  }
  if (isParameterizedString(message)) {
    const {
      __sentry_template_string__,
      __sentry_template_values__
    } = message;
    event.logentry = {
      message: __sentry_template_string__,
      params: __sentry_template_values__
    };
    return event;
  }
  event.message = message;
  return event;
}
function getNonErrorObjectExceptionValue(exception, {
  isUnhandledRejection
}) {
  const keys = extractExceptionKeysForMessage(exception);
  const captureType = isUnhandledRejection ? "promise rejection" : "exception";
  if (isErrorEvent(exception)) {
    return `Event \`ErrorEvent\` captured as ${captureType} with message \`${exception.message}\``;
  }
  if (isEvent(exception)) {
    const className = getObjectClassName(exception);
    return `Event \`${className}\` (type=${exception.type}) captured as ${captureType}`;
  }
  return `Object captured as ${captureType} with keys: ${keys}`;
}
function getObjectClassName(obj) {
  try {
    const prototype = Object.getPrototypeOf(obj);
    return prototype ? prototype.constructor.name : void 0;
  } catch (e2) {
  }
}
function getErrorPropertyFromObject(obj) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      const value = obj[prop];
      if (value instanceof Error) {
        return value;
      }
    }
  }
  return void 0;
}

// node_modules/@sentry/browser/build/npm/esm/client.js
var DEFAULT_FLUSH_INTERVAL = 5e3;
var BrowserClient = class extends Client {
  /**
   * Creates a new Browser SDK instance.
   *
   * @param options Configuration options for this SDK.
   */
  constructor(options) {
    const opts = __spreadValues({
      // We default this to true, as it is the safer scenario
      parentSpanIsAlwaysRootSpan: true
    }, options);
    const sdkSource = WINDOW3.SENTRY_SDK_SOURCE || getSDKSource();
    applySdkMetadata(opts, "browser", ["browser"], sdkSource);
    super(opts);
    const client = this;
    const {
      sendDefaultPii,
      _experiments
    } = client._options;
    const enableLogs = _experiments?.enableLogs;
    if (opts.sendClientReports && WINDOW3.document) {
      WINDOW3.document.addEventListener("visibilitychange", () => {
        if (WINDOW3.document.visibilityState === "hidden") {
          this._flushOutcomes();
          if (enableLogs) {
            _INTERNAL_flushLogsBuffer(client);
          }
        }
      });
    }
    if (enableLogs) {
      client.on("flush", () => {
        _INTERNAL_flushLogsBuffer(client);
      });
      client.on("afterCaptureLog", () => {
        if (client._logFlushIdleTimeout) {
          clearTimeout(client._logFlushIdleTimeout);
        }
        client._logFlushIdleTimeout = setTimeout(() => {
          _INTERNAL_flushLogsBuffer(client);
        }, DEFAULT_FLUSH_INTERVAL);
      });
    }
    if (sendDefaultPii) {
      client.on("postprocessEvent", addAutoIpAddressToUser);
      client.on("beforeSendSession", addAutoIpAddressToSession);
    }
  }
  /**
   * @inheritDoc
   */
  eventFromException(exception, hint) {
    return eventFromException(this._options.stackParser, exception, hint, this._options.attachStacktrace);
  }
  /**
   * @inheritDoc
   */
  eventFromMessage(message, level = "info", hint) {
    return eventFromMessage(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
  }
  /**
   * @inheritDoc
   */
  _prepareEvent(event, hint, currentScope, isolationScope) {
    event.platform = event.platform || "javascript";
    return super._prepareEvent(event, hint, currentScope, isolationScope);
  }
};

// node_modules/@sentry-internal/browser-utils/build/esm/debug-build.js
var DEBUG_BUILD2 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/bindReporter.js
var getRating = (value, thresholds) => {
  if (value > thresholds[1]) {
    return "poor";
  }
  if (value > thresholds[0]) {
    return "needs-improvement";
  }
  return "good";
};
var bindReporter = (callback, metric, thresholds, reportAllChanges) => {
  let prevValue;
  let delta;
  return (forceReport) => {
    if (metric.value >= 0) {
      if (forceReport || reportAllChanges) {
        delta = metric.value - (prevValue || 0);
        if (delta || prevValue === void 0) {
          prevValue = metric.value;
          metric.delta = delta;
          metric.rating = getRating(metric.value, thresholds);
          callback(metric);
        }
      }
    }
  };
};

// node_modules/@sentry-internal/browser-utils/build/esm/types.js
var WINDOW4 = GLOBAL_OBJ;

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/generateUniqueID.js
var generateUniqueID = () => {
  return `v4-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getNavigationEntry.js
var getNavigationEntry = (checkResponseStart = true) => {
  const navigationEntry = WINDOW4.performance?.getEntriesByType?.("navigation")[0];
  if (
    // sentry-specific change:
    // We don't want to check for responseStart for our own use of `getNavigationEntry`
    !checkResponseStart || navigationEntry && navigationEntry.responseStart > 0 && navigationEntry.responseStart < performance.now()
  ) {
    return navigationEntry;
  }
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js
var getActivationStart = () => {
  const navEntry = getNavigationEntry();
  return navEntry?.activationStart || 0;
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/initMetric.js
var initMetric = (name, value) => {
  const navEntry = getNavigationEntry();
  let navigationType = "navigate";
  if (navEntry) {
    if (WINDOW4.document?.prerendering || getActivationStart() > 0) {
      navigationType = "prerender";
    } else if (WINDOW4.document?.wasDiscarded) {
      navigationType = "restore";
    } else if (navEntry.type) {
      navigationType = navEntry.type.replace(/_/g, "-");
    }
  }
  const entries = [];
  return {
    name,
    value: typeof value === "undefined" ? -1 : value,
    rating: "good",
    // If needed, will be updated when reported. `const` to keep the type from widening to `string`.
    delta: 0,
    entries,
    id: generateUniqueID(),
    navigationType
  };
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/observe.js
var observe = (type, callback, opts) => {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(type)) {
      const po2 = new PerformanceObserver((list) => {
        Promise.resolve().then(() => {
          callback(list.getEntries());
        });
      });
      po2.observe(Object.assign({
        type,
        buffered: true
      }, opts || {}));
      return po2;
    }
  } catch (e2) {
  }
  return;
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/onHidden.js
var onHidden = (cb) => {
  const onHiddenOrPageHide = (event) => {
    if (event.type === "pagehide" || WINDOW4.document?.visibilityState === "hidden") {
      cb(event);
    }
  };
  if (WINDOW4.document) {
    addEventListener("visibilitychange", onHiddenOrPageHide, true);
    addEventListener("pagehide", onHiddenOrPageHide, true);
  }
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/runOnce.js
var runOnce = (cb) => {
  let called = false;
  return () => {
    if (!called) {
      cb();
      called = true;
    }
  };
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getVisibilityWatcher.js
var firstHiddenTime = -1;
var initHiddenTime = () => {
  return WINDOW4.document.visibilityState === "hidden" && !WINDOW4.document.prerendering ? 0 : Infinity;
};
var onVisibilityUpdate = (event) => {
  if (WINDOW4.document.visibilityState === "hidden" && firstHiddenTime > -1) {
    firstHiddenTime = event.type === "visibilitychange" ? event.timeStamp : 0;
    removeChangeListeners();
  }
};
var addChangeListeners = () => {
  addEventListener("visibilitychange", onVisibilityUpdate, true);
  addEventListener("prerenderingchange", onVisibilityUpdate, true);
};
var removeChangeListeners = () => {
  removeEventListener("visibilitychange", onVisibilityUpdate, true);
  removeEventListener("prerenderingchange", onVisibilityUpdate, true);
};
var getVisibilityWatcher = () => {
  if (WINDOW4.document && firstHiddenTime < 0) {
    firstHiddenTime = initHiddenTime();
    addChangeListeners();
  }
  return {
    get firstHiddenTime() {
      return firstHiddenTime;
    }
  };
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/whenActivated.js
var whenActivated = (callback) => {
  if (WINDOW4.document?.prerendering) {
    addEventListener("prerenderingchange", () => callback(), true);
  } else {
    callback();
  }
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/onFCP.js
var FCPThresholds = [1800, 3e3];
var onFCP = (onReport, opts = {}) => {
  whenActivated(() => {
    const visibilityWatcher = getVisibilityWatcher();
    const metric = initMetric("FCP");
    let report;
    const handleEntries = (entries) => {
      entries.forEach((entry) => {
        if (entry.name === "first-contentful-paint") {
          po2.disconnect();
          if (entry.startTime < visibilityWatcher.firstHiddenTime) {
            metric.value = Math.max(entry.startTime - getActivationStart(), 0);
            metric.entries.push(entry);
            report(true);
          }
        }
      });
    };
    const po2 = observe("paint", handleEntries);
    if (po2) {
      report = bindReporter(onReport, metric, FCPThresholds, opts.reportAllChanges);
    }
  });
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/getCLS.js
var CLSThresholds = [0.1, 0.25];
var onCLS = (onReport, opts = {}) => {
  onFCP(runOnce(() => {
    const metric = initMetric("CLS", 0);
    let report;
    let sessionValue = 0;
    let sessionEntries = [];
    const handleEntries = (entries) => {
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          const firstSessionEntry = sessionEntries[0];
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
          if (sessionValue && firstSessionEntry && lastSessionEntry && entry.startTime - lastSessionEntry.startTime < 1e3 && entry.startTime - firstSessionEntry.startTime < 5e3) {
            sessionValue += entry.value;
            sessionEntries.push(entry);
          } else {
            sessionValue = entry.value;
            sessionEntries = [entry];
          }
        }
      });
      if (sessionValue > metric.value) {
        metric.value = sessionValue;
        metric.entries = sessionEntries;
        report();
      }
    };
    const po2 = observe("layout-shift", handleEntries);
    if (po2) {
      report = bindReporter(onReport, metric, CLSThresholds, opts.reportAllChanges);
      onHidden(() => {
        handleEntries(po2.takeRecords());
        report(true);
      });
      setTimeout(report, 0);
    }
  }));
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/getFID.js
var FIDThresholds = [100, 300];
var onFID = (onReport, opts = {}) => {
  whenActivated(() => {
    const visibilityWatcher = getVisibilityWatcher();
    const metric = initMetric("FID");
    let report;
    const handleEntry = (entry) => {
      if (entry.startTime < visibilityWatcher.firstHiddenTime) {
        metric.value = entry.processingStart - entry.startTime;
        metric.entries.push(entry);
        report(true);
      }
    };
    const handleEntries = (entries) => {
      entries.forEach(handleEntry);
    };
    const po2 = observe("first-input", handleEntries);
    report = bindReporter(onReport, metric, FIDThresholds, opts.reportAllChanges);
    if (po2) {
      onHidden(runOnce(() => {
        handleEntries(po2.takeRecords());
        po2.disconnect();
      }));
    }
  });
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/polyfills/interactionCountPolyfill.js
var interactionCountEstimate = 0;
var minKnownInteractionId = Infinity;
var maxKnownInteractionId = 0;
var updateEstimate = (entries) => {
  entries.forEach((e2) => {
    if (e2.interactionId) {
      minKnownInteractionId = Math.min(minKnownInteractionId, e2.interactionId);
      maxKnownInteractionId = Math.max(maxKnownInteractionId, e2.interactionId);
      interactionCountEstimate = maxKnownInteractionId ? (maxKnownInteractionId - minKnownInteractionId) / 7 + 1 : 0;
    }
  });
};
var po;
var getInteractionCount = () => {
  return po ? interactionCountEstimate : performance.interactionCount || 0;
};
var initInteractionCountPolyfill = () => {
  if ("interactionCount" in performance || po) return;
  po = observe("event", updateEstimate, {
    type: "event",
    buffered: true,
    durationThreshold: 0
  });
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/interactions.js
var longestInteractionList = [];
var longestInteractionMap = /* @__PURE__ */ new Map();
var DEFAULT_DURATION_THRESHOLD = 40;
var prevInteractionCount = 0;
var getInteractionCountForNavigation = () => {
  return getInteractionCount() - prevInteractionCount;
};
var estimateP98LongestInteraction = () => {
  const candidateInteractionIndex = Math.min(longestInteractionList.length - 1, Math.floor(getInteractionCountForNavigation() / 50));
  return longestInteractionList[candidateInteractionIndex];
};
var MAX_INTERACTIONS_TO_CONSIDER = 10;
var entryPreProcessingCallbacks = [];
var processInteractionEntry = (entry) => {
  entryPreProcessingCallbacks.forEach((cb) => cb(entry));
  if (!(entry.interactionId || entry.entryType === "first-input")) return;
  const minLongestInteraction = longestInteractionList[longestInteractionList.length - 1];
  const existingInteraction = longestInteractionMap.get(entry.interactionId);
  if (existingInteraction || longestInteractionList.length < MAX_INTERACTIONS_TO_CONSIDER || minLongestInteraction && entry.duration > minLongestInteraction.latency) {
    if (existingInteraction) {
      if (entry.duration > existingInteraction.latency) {
        existingInteraction.entries = [entry];
        existingInteraction.latency = entry.duration;
      } else if (entry.duration === existingInteraction.latency && entry.startTime === existingInteraction.entries[0]?.startTime) {
        existingInteraction.entries.push(entry);
      }
    } else {
      const interaction = {
        id: entry.interactionId,
        latency: entry.duration,
        entries: [entry]
      };
      longestInteractionMap.set(interaction.id, interaction);
      longestInteractionList.push(interaction);
    }
    longestInteractionList.sort((a, b) => b.latency - a.latency);
    if (longestInteractionList.length > MAX_INTERACTIONS_TO_CONSIDER) {
      longestInteractionList.splice(MAX_INTERACTIONS_TO_CONSIDER).forEach((i) => longestInteractionMap.delete(i.id));
    }
  }
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/whenIdle.js
var whenIdle = (cb) => {
  const rIC = WINDOW4.requestIdleCallback || WINDOW4.setTimeout;
  let handle = -1;
  cb = runOnce(cb);
  if (WINDOW4.document?.visibilityState === "hidden") {
    cb();
  } else {
    handle = rIC(cb);
    onHidden(cb);
  }
  return handle;
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/getINP.js
var INPThresholds = [200, 500];
var onINP = (onReport, opts = {}) => {
  if (!("PerformanceEventTiming" in WINDOW4 && "interactionId" in PerformanceEventTiming.prototype)) {
    return;
  }
  whenActivated(() => {
    initInteractionCountPolyfill();
    const metric = initMetric("INP");
    let report;
    const handleEntries = (entries) => {
      whenIdle(() => {
        entries.forEach(processInteractionEntry);
        const inp = estimateP98LongestInteraction();
        if (inp && inp.latency !== metric.value) {
          metric.value = inp.latency;
          metric.entries = inp.entries;
          report();
        }
      });
    };
    const po2 = observe("event", handleEntries, {
      // Event Timing entries have their durations rounded to the nearest 8ms,
      // so a duration of 40ms would be any event that spans 2.5 or more frames
      // at 60Hz. This threshold is chosen to strike a balance between usefulness
      // and performance. Running this callback for any interaction that spans
      // just one or two frames is likely not worth the insight that could be
      // gained.
      durationThreshold: opts.durationThreshold != null ? opts.durationThreshold : DEFAULT_DURATION_THRESHOLD
    });
    report = bindReporter(onReport, metric, INPThresholds, opts.reportAllChanges);
    if (po2) {
      po2.observe({
        type: "first-input",
        buffered: true
      });
      onHidden(() => {
        handleEntries(po2.takeRecords());
        report(true);
      });
    }
  });
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/getLCP.js
var LCPThresholds = [2500, 4e3];
var reportedMetricIDs = {};
var onLCP = (onReport, opts = {}) => {
  whenActivated(() => {
    const visibilityWatcher = getVisibilityWatcher();
    const metric = initMetric("LCP");
    let report;
    const handleEntries = (entries) => {
      if (!opts.reportAllChanges) {
        entries = entries.slice(-1);
      }
      entries.forEach((entry) => {
        if (entry.startTime < visibilityWatcher.firstHiddenTime) {
          metric.value = Math.max(entry.startTime - getActivationStart(), 0);
          metric.entries = [entry];
          report();
        }
      });
    };
    const po2 = observe("largest-contentful-paint", handleEntries);
    if (po2) {
      report = bindReporter(onReport, metric, LCPThresholds, opts.reportAllChanges);
      const stopListening = runOnce(() => {
        if (!reportedMetricIDs[metric.id]) {
          handleEntries(po2.takeRecords());
          po2.disconnect();
          reportedMetricIDs[metric.id] = true;
          report(true);
        }
      });
      ["keydown", "click"].forEach((type) => {
        if (WINDOW4.document) {
          addEventListener(type, () => whenIdle(stopListening), {
            once: true,
            capture: true
          });
        }
      });
      onHidden(stopListening);
    }
  });
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/onTTFB.js
var TTFBThresholds = [800, 1800];
var whenReady = (callback) => {
  if (WINDOW4.document?.prerendering) {
    whenActivated(() => whenReady(callback));
  } else if (WINDOW4.document?.readyState !== "complete") {
    addEventListener("load", () => whenReady(callback), true);
  } else {
    setTimeout(callback, 0);
  }
};
var onTTFB = (onReport, opts = {}) => {
  const metric = initMetric("TTFB");
  const report = bindReporter(onReport, metric, TTFBThresholds, opts.reportAllChanges);
  whenReady(() => {
    const navigationEntry = getNavigationEntry();
    if (navigationEntry) {
      metric.value = Math.max(navigationEntry.responseStart - getActivationStart(), 0);
      metric.entries = [navigationEntry];
      report(true);
    }
  });
};

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/instrument.js
var handlers2 = {};
var instrumented2 = {};
var _previousCls;
var _previousFid;
var _previousLcp;
var _previousTtfb;
var _previousInp;
function addClsInstrumentationHandler(callback, stopOnCallback = false) {
  return addMetricObserver("cls", callback, instrumentCls, _previousCls, stopOnCallback);
}
function addLcpInstrumentationHandler(callback, stopOnCallback = false) {
  return addMetricObserver("lcp", callback, instrumentLcp, _previousLcp, stopOnCallback);
}
function addFidInstrumentationHandler(callback) {
  return addMetricObserver("fid", callback, instrumentFid, _previousFid);
}
function addTtfbInstrumentationHandler(callback) {
  return addMetricObserver("ttfb", callback, instrumentTtfb, _previousTtfb);
}
function addInpInstrumentationHandler(callback) {
  return addMetricObserver("inp", callback, instrumentInp, _previousInp);
}
function addPerformanceInstrumentationHandler(type, callback) {
  addHandler2(type, callback);
  if (!instrumented2[type]) {
    instrumentPerformanceObserver(type);
    instrumented2[type] = true;
  }
  return getCleanupCallback(type, callback);
}
function triggerHandlers2(type, data) {
  const typeHandlers = handlers2[type];
  if (!typeHandlers?.length) {
    return;
  }
  for (const handler of typeHandlers) {
    try {
      handler(data);
    } catch (e2) {
      DEBUG_BUILD2 && logger.error(`Error while triggering instrumentation handler.
Type: ${type}
Name: ${getFunctionName(handler)}
Error:`, e2);
    }
  }
}
function instrumentCls() {
  return onCLS(
    (metric) => {
      triggerHandlers2("cls", {
        metric
      });
      _previousCls = metric;
    },
    // We want the callback to be called whenever the CLS value updates.
    // By default, the callback is only called when the tab goes to the background.
    {
      reportAllChanges: true
    }
  );
}
function instrumentFid() {
  return onFID((metric) => {
    triggerHandlers2("fid", {
      metric
    });
    _previousFid = metric;
  });
}
function instrumentLcp() {
  return onLCP(
    (metric) => {
      triggerHandlers2("lcp", {
        metric
      });
      _previousLcp = metric;
    },
    // We want the callback to be called whenever the LCP value updates.
    // By default, the callback is only called when the tab goes to the background.
    {
      reportAllChanges: true
    }
  );
}
function instrumentTtfb() {
  return onTTFB((metric) => {
    triggerHandlers2("ttfb", {
      metric
    });
    _previousTtfb = metric;
  });
}
function instrumentInp() {
  return onINP((metric) => {
    triggerHandlers2("inp", {
      metric
    });
    _previousInp = metric;
  });
}
function addMetricObserver(type, callback, instrumentFn, previousValue, stopOnCallback = false) {
  addHandler2(type, callback);
  let stopListening;
  if (!instrumented2[type]) {
    stopListening = instrumentFn();
    instrumented2[type] = true;
  }
  if (previousValue) {
    callback({
      metric: previousValue
    });
  }
  return getCleanupCallback(type, callback, stopOnCallback ? stopListening : void 0);
}
function instrumentPerformanceObserver(type) {
  const options = {};
  if (type === "event") {
    options.durationThreshold = 0;
  }
  observe(type, (entries) => {
    triggerHandlers2(type, {
      entries
    });
  }, options);
}
function addHandler2(type, handler) {
  handlers2[type] = handlers2[type] || [];
  handlers2[type].push(handler);
}
function getCleanupCallback(type, callback, stopListening) {
  return () => {
    if (stopListening) {
      stopListening();
    }
    const typeHandlers = handlers2[type];
    if (!typeHandlers) {
      return;
    }
    const index = typeHandlers.indexOf(callback);
    if (index !== -1) {
      typeHandlers.splice(index, 1);
    }
  };
}
function isPerformanceEventTiming(entry) {
  return "duration" in entry;
}

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/utils.js
function isMeasurementValue(value) {
  return typeof value === "number" && isFinite(value);
}
function startAndEndSpan(parentSpan, startTimeInSeconds, endTime, _a) {
  var ctx = __objRest(_a, []);
  const parentStartTime = spanToJSON(parentSpan).start_timestamp;
  if (parentStartTime && parentStartTime > startTimeInSeconds) {
    if (typeof parentSpan.updateStartTime === "function") {
      parentSpan.updateStartTime(startTimeInSeconds);
    }
  }
  return withActiveSpan(parentSpan, () => {
    const span = startInactiveSpan(__spreadValues({
      startTime: startTimeInSeconds
    }, ctx));
    if (span) {
      span.end(endTime);
    }
    return span;
  });
}
function startStandaloneWebVitalSpan(options) {
  const client = getClient();
  if (!client) {
    return;
  }
  const {
    name,
    transaction,
    attributes: passedAttributes,
    startTime
  } = options;
  const {
    release,
    environment: environment2,
    sendDefaultPii
  } = client.getOptions();
  const replay = client.getIntegrationByName("Replay");
  const replayId = replay?.getReplayId();
  const scope = getCurrentScope();
  const user = scope.getUser();
  const userDisplay = user !== void 0 ? user.email || user.id || user.ip_address : void 0;
  let profileId;
  try {
    profileId = scope.getScopeData().contexts.profile.profile_id;
  } catch {
  }
  const attributes = __spreadValues({
    release,
    environment: environment2,
    user: userDisplay || void 0,
    profile_id: profileId || void 0,
    replay_id: replayId || void 0,
    transaction,
    // Web vital score calculation relies on the user agent to account for different
    // browsers setting different thresholds for what is considered a good/meh/bad value.
    // For example: Chrome vs. Chrome Mobile
    "user_agent.original": WINDOW4.navigator?.userAgent,
    // This tells Sentry to infer the IP address from the request
    "client.address": sendDefaultPii ? "{{auto}}" : void 0
  }, passedAttributes);
  return startInactiveSpan({
    name,
    attributes,
    startTime,
    experimental: {
      standalone: true
    }
  });
}
function getBrowserPerformanceAPI() {
  return WINDOW4.addEventListener && WINDOW4.performance;
}
function msToSec(time) {
  return time / 1e3;
}
function extractNetworkProtocol(nextHopProtocol) {
  let name = "unknown";
  let version = "unknown";
  let _name = "";
  for (const char of nextHopProtocol) {
    if (char === "/") {
      [name, version] = nextHopProtocol.split("/");
      break;
    }
    if (!isNaN(Number(char))) {
      name = _name === "h" ? "http" : _name;
      version = nextHopProtocol.split(_name)[1];
      break;
    }
    _name += char;
  }
  if (_name === nextHopProtocol) {
    name = _name;
  }
  return {
    name,
    version
  };
}

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/cls.js
function trackClsAsStandaloneSpan() {
  let standaloneCLsValue = 0;
  let standaloneClsEntry;
  let pageloadSpanId;
  if (!supportsLayoutShift()) {
    return;
  }
  let sentSpan = false;
  function _collectClsOnce() {
    if (sentSpan) {
      return;
    }
    sentSpan = true;
    if (pageloadSpanId) {
      sendStandaloneClsSpan(standaloneCLsValue, standaloneClsEntry, pageloadSpanId);
    }
    cleanupClsHandler();
  }
  const cleanupClsHandler = addClsInstrumentationHandler(({
    metric
  }) => {
    const entry = metric.entries[metric.entries.length - 1];
    if (!entry) {
      return;
    }
    standaloneCLsValue = metric.value;
    standaloneClsEntry = entry;
  }, true);
  onHidden(() => {
    _collectClsOnce();
  });
  setTimeout(() => {
    const client = getClient();
    if (!client) {
      return;
    }
    const unsubscribeStartNavigation = client.on("startNavigationSpan", () => {
      _collectClsOnce();
      unsubscribeStartNavigation?.();
    });
    const activeSpan = getActiveSpan();
    if (activeSpan) {
      const rootSpan = getRootSpan(activeSpan);
      const spanJSON = spanToJSON(rootSpan);
      if (spanJSON.op === "pageload") {
        pageloadSpanId = rootSpan.spanContext().spanId;
      }
    }
  }, 0);
}
function sendStandaloneClsSpan(clsValue, entry, pageloadSpanId) {
  DEBUG_BUILD2 && logger.log(`Sending CLS span (${clsValue})`);
  const startTime = msToSec((browserPerformanceTimeOrigin() || 0) + (entry?.startTime || 0));
  const routeName = getCurrentScope().getScopeData().transactionName;
  const name = entry ? htmlTreeAsString(entry.sources[0]?.node) : "Layout shift";
  const attributes = {
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.cls",
    [SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.cls",
    [SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: entry?.duration || 0,
    // attach the pageload span id to the CLS span so that we can link them in the UI
    "sentry.pageload.span_id": pageloadSpanId
  };
  const span = startStandaloneWebVitalSpan({
    name,
    transaction: routeName,
    attributes,
    startTime
  });
  if (span) {
    span.addEvent("cls", {
      [SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "",
      [SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: clsValue
    });
    span.end(startTime);
  }
}
function supportsLayoutShift() {
  try {
    return PerformanceObserver.supportedEntryTypes.includes("layout-shift");
  } catch {
    return false;
  }
}

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/browserMetrics.js
var MAX_INT_AS_BYTES = 2147483647;
var _performanceCursor = 0;
var _measurements = {};
var _lcpEntry;
var _clsEntry;
function startTrackingWebVitals({
  recordClsStandaloneSpans
}) {
  const performance2 = getBrowserPerformanceAPI();
  if (performance2 && browserPerformanceTimeOrigin()) {
    if (performance2.mark) {
      WINDOW4.performance.mark("sentry-tracing-init");
    }
    const fidCleanupCallback = _trackFID();
    const lcpCleanupCallback = _trackLCP();
    const ttfbCleanupCallback = _trackTtfb();
    const clsCleanupCallback = recordClsStandaloneSpans ? trackClsAsStandaloneSpan() : _trackCLS();
    return () => {
      fidCleanupCallback();
      lcpCleanupCallback();
      ttfbCleanupCallback();
      clsCleanupCallback?.();
    };
  }
  return () => void 0;
}
function startTrackingLongTasks() {
  addPerformanceInstrumentationHandler("longtask", ({
    entries
  }) => {
    const parent = getActiveSpan();
    if (!parent) {
      return;
    }
    const {
      op: parentOp,
      start_timestamp: parentStartTimestamp
    } = spanToJSON(parent);
    for (const entry of entries) {
      const startTime = msToSec(browserPerformanceTimeOrigin() + entry.startTime);
      const duration = msToSec(entry.duration);
      if (parentOp === "navigation" && parentStartTimestamp && startTime < parentStartTimestamp) {
        continue;
      }
      startAndEndSpan(parent, startTime, startTime + duration, {
        name: "Main UI thread blocked",
        op: "ui.long-task",
        attributes: {
          [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
        }
      });
    }
  });
}
function startTrackingLongAnimationFrames() {
  const observer = new PerformanceObserver((list) => {
    const parent = getActiveSpan();
    if (!parent) {
      return;
    }
    for (const entry of list.getEntries()) {
      if (!entry.scripts[0]) {
        continue;
      }
      const startTime = msToSec(browserPerformanceTimeOrigin() + entry.startTime);
      const {
        start_timestamp: parentStartTimestamp,
        op: parentOp
      } = spanToJSON(parent);
      if (parentOp === "navigation" && parentStartTimestamp && startTime < parentStartTimestamp) {
        continue;
      }
      const duration = msToSec(entry.duration);
      const attributes = {
        [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
      };
      const initialScript = entry.scripts[0];
      const {
        invoker,
        invokerType,
        sourceURL,
        sourceFunctionName,
        sourceCharPosition
      } = initialScript;
      attributes["browser.script.invoker"] = invoker;
      attributes["browser.script.invoker_type"] = invokerType;
      if (sourceURL) {
        attributes["code.filepath"] = sourceURL;
      }
      if (sourceFunctionName) {
        attributes["code.function"] = sourceFunctionName;
      }
      if (sourceCharPosition !== -1) {
        attributes["browser.script.source_char_position"] = sourceCharPosition;
      }
      startAndEndSpan(parent, startTime, startTime + duration, {
        name: "Main UI thread blocked",
        op: "ui.long-animation-frame",
        attributes
      });
    }
  });
  observer.observe({
    type: "long-animation-frame",
    buffered: true
  });
}
function startTrackingInteractions() {
  addPerformanceInstrumentationHandler("event", ({
    entries
  }) => {
    const parent = getActiveSpan();
    if (!parent) {
      return;
    }
    for (const entry of entries) {
      if (entry.name === "click") {
        const startTime = msToSec(browserPerformanceTimeOrigin() + entry.startTime);
        const duration = msToSec(entry.duration);
        const spanOptions = {
          name: htmlTreeAsString(entry.target),
          op: `ui.interaction.${entry.name}`,
          startTime,
          attributes: {
            [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
          }
        };
        const componentName = getComponentName(entry.target);
        if (componentName) {
          spanOptions.attributes["ui.component_name"] = componentName;
        }
        startAndEndSpan(parent, startTime, startTime + duration, spanOptions);
      }
    }
  });
}
function _trackCLS() {
  return addClsInstrumentationHandler(({
    metric
  }) => {
    const entry = metric.entries[metric.entries.length - 1];
    if (!entry) {
      return;
    }
    _measurements["cls"] = {
      value: metric.value,
      unit: ""
    };
    _clsEntry = entry;
  }, true);
}
function _trackLCP() {
  return addLcpInstrumentationHandler(({
    metric
  }) => {
    const entry = metric.entries[metric.entries.length - 1];
    if (!entry) {
      return;
    }
    _measurements["lcp"] = {
      value: metric.value,
      unit: "millisecond"
    };
    _lcpEntry = entry;
  }, true);
}
function _trackFID() {
  return addFidInstrumentationHandler(({
    metric
  }) => {
    const entry = metric.entries[metric.entries.length - 1];
    if (!entry) {
      return;
    }
    const timeOrigin = msToSec(browserPerformanceTimeOrigin());
    const startTime = msToSec(entry.startTime);
    _measurements["fid"] = {
      value: metric.value,
      unit: "millisecond"
    };
    _measurements["mark.fid"] = {
      value: timeOrigin + startTime,
      unit: "second"
    };
  });
}
function _trackTtfb() {
  return addTtfbInstrumentationHandler(({
    metric
  }) => {
    const entry = metric.entries[metric.entries.length - 1];
    if (!entry) {
      return;
    }
    _measurements["ttfb"] = {
      value: metric.value,
      unit: "millisecond"
    };
  });
}
function addPerformanceEntries(span, options) {
  const performance2 = getBrowserPerformanceAPI();
  const origin = browserPerformanceTimeOrigin();
  if (!performance2?.getEntries || !origin) {
    return;
  }
  const timeOrigin = msToSec(origin);
  const performanceEntries = performance2.getEntries();
  const {
    op,
    start_timestamp: transactionStartTime
  } = spanToJSON(span);
  performanceEntries.slice(_performanceCursor).forEach((entry) => {
    const startTime = msToSec(entry.startTime);
    const duration = msToSec(
      // Inexplicably, Chrome sometimes emits a negative duration. We need to work around this.
      // There is a SO post attempting to explain this, but it leaves one with open questions: https://stackoverflow.com/questions/23191918/peformance-getentries-and-negative-duration-display
      // The way we clamp the value is probably not accurate, since we have observed this happen for things that may take a while to load, like for example the replay worker.
      // TODO: Investigate why this happens and how to properly mitigate. For now, this is a workaround to prevent transactions being dropped due to negative duration spans.
      Math.max(0, entry.duration)
    );
    if (op === "navigation" && transactionStartTime && timeOrigin + startTime < transactionStartTime) {
      return;
    }
    switch (entry.entryType) {
      case "navigation": {
        _addNavigationSpans(span, entry, timeOrigin);
        break;
      }
      case "mark":
      case "paint":
      case "measure": {
        _addMeasureSpans(span, entry, startTime, duration, timeOrigin);
        const firstHidden = getVisibilityWatcher();
        const shouldRecord = entry.startTime < firstHidden.firstHiddenTime;
        if (entry.name === "first-paint" && shouldRecord) {
          _measurements["fp"] = {
            value: entry.startTime,
            unit: "millisecond"
          };
        }
        if (entry.name === "first-contentful-paint" && shouldRecord) {
          _measurements["fcp"] = {
            value: entry.startTime,
            unit: "millisecond"
          };
        }
        break;
      }
      case "resource": {
        _addResourceSpans(span, entry, entry.name, startTime, duration, timeOrigin);
        break;
      }
    }
  });
  _performanceCursor = Math.max(performanceEntries.length - 1, 0);
  _trackNavigator(span);
  if (op === "pageload") {
    _addTtfbRequestTimeToMeasurements(_measurements);
    const fidMark = _measurements["mark.fid"];
    if (fidMark && _measurements["fid"]) {
      startAndEndSpan(span, fidMark.value, fidMark.value + msToSec(_measurements["fid"].value), {
        name: "first input delay",
        op: "ui.action",
        attributes: {
          [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
        }
      });
      delete _measurements["mark.fid"];
    }
    if (!("fcp" in _measurements) || !options.recordClsOnPageloadSpan) {
      delete _measurements.cls;
    }
    Object.entries(_measurements).forEach(([measurementName, measurement]) => {
      setMeasurement(measurementName, measurement.value, measurement.unit);
    });
    span.setAttribute("performance.timeOrigin", timeOrigin);
    span.setAttribute("performance.activationStart", getActivationStart());
    _setWebVitalAttributes(span);
  }
  _lcpEntry = void 0;
  _clsEntry = void 0;
  _measurements = {};
}
function _addMeasureSpans(span, entry, startTime, duration, timeOrigin) {
  const navEntry = getNavigationEntry(false);
  const requestTime = msToSec(navEntry ? navEntry.requestStart : 0);
  const measureStartTimestamp = timeOrigin + Math.max(startTime, requestTime);
  const startTimeStamp = timeOrigin + startTime;
  const measureEndTimestamp = startTimeStamp + duration;
  const attributes = {
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.resource.browser.metrics"
  };
  if (measureStartTimestamp !== startTimeStamp) {
    attributes["sentry.browser.measure_happened_before_request"] = true;
    attributes["sentry.browser.measure_start_time"] = measureStartTimestamp;
  }
  if (measureStartTimestamp <= measureEndTimestamp) {
    startAndEndSpan(span, measureStartTimestamp, measureEndTimestamp, {
      name: entry.name,
      op: entry.entryType,
      attributes
    });
  }
}
function _addNavigationSpans(span, entry, timeOrigin) {
  ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((event) => {
    _addPerformanceNavigationTiming(span, entry, event, timeOrigin);
  });
  _addPerformanceNavigationTiming(span, entry, "secureConnection", timeOrigin, "TLS/SSL");
  _addPerformanceNavigationTiming(span, entry, "fetch", timeOrigin, "cache");
  _addPerformanceNavigationTiming(span, entry, "domainLookup", timeOrigin, "DNS");
  _addRequest(span, entry, timeOrigin);
}
function _addPerformanceNavigationTiming(span, entry, event, timeOrigin, name = event) {
  const eventEnd = _getEndPropertyNameForNavigationTiming(event);
  const end = entry[eventEnd];
  const start = entry[`${event}Start`];
  if (!start || !end) {
    return;
  }
  startAndEndSpan(span, timeOrigin + msToSec(start), timeOrigin + msToSec(end), {
    op: `browser.${name}`,
    name: entry.name,
    attributes: __spreadValues({
      [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
    }, event === "redirect" && entry.redirectCount != null ? {
      "http.redirect_count": entry.redirectCount
    } : {})
  });
}
function _getEndPropertyNameForNavigationTiming(event) {
  if (event === "secureConnection") {
    return "connectEnd";
  }
  if (event === "fetch") {
    return "domainLookupStart";
  }
  return `${event}End`;
}
function _addRequest(span, entry, timeOrigin) {
  const requestStartTimestamp = timeOrigin + msToSec(entry.requestStart);
  const responseEndTimestamp = timeOrigin + msToSec(entry.responseEnd);
  const responseStartTimestamp = timeOrigin + msToSec(entry.responseStart);
  if (entry.responseEnd) {
    startAndEndSpan(span, requestStartTimestamp, responseEndTimestamp, {
      op: "browser.request",
      name: entry.name,
      attributes: {
        [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
      }
    });
    startAndEndSpan(span, responseStartTimestamp, responseEndTimestamp, {
      op: "browser.response",
      name: entry.name,
      attributes: {
        [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
      }
    });
  }
}
function _addResourceSpans(span, entry, resourceUrl, startTime, duration, timeOrigin) {
  if (entry.initiatorType === "xmlhttprequest" || entry.initiatorType === "fetch") {
    return;
  }
  const parsedUrl = parseUrl(resourceUrl);
  const attributes = {
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.resource.browser.metrics"
  };
  setResourceEntrySizeData(attributes, entry, "transferSize", "http.response_transfer_size");
  setResourceEntrySizeData(attributes, entry, "encodedBodySize", "http.response_content_length");
  setResourceEntrySizeData(attributes, entry, "decodedBodySize", "http.decoded_response_content_length");
  const deliveryType = entry.deliveryType;
  if (deliveryType != null) {
    attributes["http.response_delivery_type"] = deliveryType;
  }
  const renderBlockingStatus = entry.renderBlockingStatus;
  if (renderBlockingStatus) {
    attributes["resource.render_blocking_status"] = renderBlockingStatus;
  }
  if (parsedUrl.protocol) {
    attributes["url.scheme"] = parsedUrl.protocol.split(":").pop();
  }
  if (parsedUrl.host) {
    attributes["server.address"] = parsedUrl.host;
  }
  attributes["url.same_origin"] = resourceUrl.includes(WINDOW4.location.origin);
  const {
    name,
    version
  } = extractNetworkProtocol(entry.nextHopProtocol);
  attributes["network.protocol.name"] = name;
  attributes["network.protocol.version"] = version;
  const startTimestamp = timeOrigin + startTime;
  const endTimestamp = startTimestamp + duration;
  startAndEndSpan(span, startTimestamp, endTimestamp, {
    name: resourceUrl.replace(WINDOW4.location.origin, ""),
    op: entry.initiatorType ? `resource.${entry.initiatorType}` : "resource.other",
    attributes
  });
}
function _trackNavigator(span) {
  const navigator2 = WINDOW4.navigator;
  if (!navigator2) {
    return;
  }
  const connection = navigator2.connection;
  if (connection) {
    if (connection.effectiveType) {
      span.setAttribute("effectiveConnectionType", connection.effectiveType);
    }
    if (connection.type) {
      span.setAttribute("connectionType", connection.type);
    }
    if (isMeasurementValue(connection.rtt)) {
      _measurements["connection.rtt"] = {
        value: connection.rtt,
        unit: "millisecond"
      };
    }
  }
  if (isMeasurementValue(navigator2.deviceMemory)) {
    span.setAttribute("deviceMemory", `${navigator2.deviceMemory} GB`);
  }
  if (isMeasurementValue(navigator2.hardwareConcurrency)) {
    span.setAttribute("hardwareConcurrency", String(navigator2.hardwareConcurrency));
  }
}
function _setWebVitalAttributes(span) {
  if (_lcpEntry) {
    if (_lcpEntry.element) {
      span.setAttribute("lcp.element", htmlTreeAsString(_lcpEntry.element));
    }
    if (_lcpEntry.id) {
      span.setAttribute("lcp.id", _lcpEntry.id);
    }
    if (_lcpEntry.url) {
      span.setAttribute("lcp.url", _lcpEntry.url.trim().slice(0, 200));
    }
    if (_lcpEntry.loadTime != null) {
      span.setAttribute("lcp.loadTime", _lcpEntry.loadTime);
    }
    if (_lcpEntry.renderTime != null) {
      span.setAttribute("lcp.renderTime", _lcpEntry.renderTime);
    }
    span.setAttribute("lcp.size", _lcpEntry.size);
  }
  if (_clsEntry?.sources) {
    _clsEntry.sources.forEach((source, index) => span.setAttribute(`cls.source.${index + 1}`, htmlTreeAsString(source.node)));
  }
}
function setResourceEntrySizeData(attributes, entry, key, dataKey) {
  const entryVal = entry[key];
  if (entryVal != null && entryVal < MAX_INT_AS_BYTES) {
    attributes[dataKey] = entryVal;
  }
}
function _addTtfbRequestTimeToMeasurements(_measurements2) {
  const navEntry = getNavigationEntry(false);
  if (!navEntry) {
    return;
  }
  const {
    responseStart,
    requestStart
  } = navEntry;
  if (requestStart <= responseStart) {
    _measurements2["ttfb.requestTime"] = {
      value: responseStart - requestStart,
      unit: "millisecond"
    };
  }
}

// node_modules/@sentry-internal/browser-utils/build/esm/instrument/dom.js
var DEBOUNCE_DURATION = 1e3;
var debounceTimerID;
var lastCapturedEventType;
var lastCapturedEventTargetId;
function addClickKeypressInstrumentationHandler(handler) {
  const type = "dom";
  addHandler(type, handler);
  maybeInstrument(type, instrumentDOM);
}
function instrumentDOM() {
  if (!WINDOW4.document) {
    return;
  }
  const triggerDOMHandler = triggerHandlers.bind(null, "dom");
  const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
  WINDOW4.document.addEventListener("click", globalDOMEventHandler, false);
  WINDOW4.document.addEventListener("keypress", globalDOMEventHandler, false);
  ["EventTarget", "Node"].forEach((target) => {
    const globalObject = WINDOW4;
    const proto = globalObject[target]?.prototype;
    if (!proto?.hasOwnProperty?.("addEventListener")) {
      return;
    }
    fill(proto, "addEventListener", function(originalAddEventListener) {
      return function(type, listener, options) {
        if (type === "click" || type == "keypress") {
          try {
            const handlers4 = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
            const handlerForType = handlers4[type] = handlers4[type] || {
              refCount: 0
            };
            if (!handlerForType.handler) {
              const handler = makeDOMEventHandler(triggerDOMHandler);
              handlerForType.handler = handler;
              originalAddEventListener.call(this, type, handler, options);
            }
            handlerForType.refCount++;
          } catch (e2) {
          }
        }
        return originalAddEventListener.call(this, type, listener, options);
      };
    });
    fill(proto, "removeEventListener", function(originalRemoveEventListener) {
      return function(type, listener, options) {
        if (type === "click" || type == "keypress") {
          try {
            const handlers4 = this.__sentry_instrumentation_handlers__ || {};
            const handlerForType = handlers4[type];
            if (handlerForType) {
              handlerForType.refCount--;
              if (handlerForType.refCount <= 0) {
                originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                handlerForType.handler = void 0;
                delete handlers4[type];
              }
              if (Object.keys(handlers4).length === 0) {
                delete this.__sentry_instrumentation_handlers__;
              }
            }
          } catch (e2) {
          }
        }
        return originalRemoveEventListener.call(this, type, listener, options);
      };
    });
  });
}
function isSimilarToLastCapturedEvent(event) {
  if (event.type !== lastCapturedEventType) {
    return false;
  }
  try {
    if (!event.target || event.target._sentryId !== lastCapturedEventTargetId) {
      return false;
    }
  } catch (e2) {
  }
  return true;
}
function shouldSkipDOMEvent(eventType, target) {
  if (eventType !== "keypress") {
    return false;
  }
  if (!target?.tagName) {
    return true;
  }
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
    return false;
  }
  return true;
}
function makeDOMEventHandler(handler, globalListener = false) {
  return (event) => {
    if (!event || event["_sentryCaptured"]) {
      return;
    }
    const target = getEventTarget(event);
    if (shouldSkipDOMEvent(event.type, target)) {
      return;
    }
    addNonEnumerableProperty(event, "_sentryCaptured", true);
    if (target && !target._sentryId) {
      addNonEnumerableProperty(target, "_sentryId", uuid4());
    }
    const name = event.type === "keypress" ? "input" : event.type;
    if (!isSimilarToLastCapturedEvent(event)) {
      const handlerData = {
        event,
        name,
        global: globalListener
      };
      handler(handlerData);
      lastCapturedEventType = event.type;
      lastCapturedEventTargetId = target ? target._sentryId : void 0;
    }
    clearTimeout(debounceTimerID);
    debounceTimerID = WINDOW4.setTimeout(() => {
      lastCapturedEventTargetId = void 0;
      lastCapturedEventType = void 0;
    }, DEBOUNCE_DURATION);
  };
}
function getEventTarget(event) {
  try {
    return event.target;
  } catch (e2) {
    return null;
  }
}

// node_modules/@sentry-internal/browser-utils/build/esm/instrument/history.js
var lastHref;
function addHistoryInstrumentationHandler(handler) {
  const type = "history";
  addHandler(type, handler);
  maybeInstrument(type, instrumentHistory);
}
function instrumentHistory() {
  WINDOW4.addEventListener("popstate", () => {
    const to = WINDOW4.location.href;
    const from2 = lastHref;
    lastHref = to;
    if (from2 === to) {
      return;
    }
    const handlerData = {
      from: from2,
      to
    };
    triggerHandlers("history", handlerData);
  });
  if (!supportsHistory()) {
    return;
  }
  function historyReplacementFunction(originalHistoryFunction) {
    return function(...args) {
      const url = args.length > 2 ? args[2] : void 0;
      if (url) {
        const from2 = lastHref;
        const to = String(url);
        lastHref = to;
        if (from2 === to) {
          return originalHistoryFunction.apply(this, args);
        }
        const handlerData = {
          from: from2,
          to
        };
        triggerHandlers("history", handlerData);
      }
      return originalHistoryFunction.apply(this, args);
    };
  }
  fill(WINDOW4.history, "pushState", historyReplacementFunction);
  fill(WINDOW4.history, "replaceState", historyReplacementFunction);
}

// node_modules/@sentry-internal/browser-utils/build/esm/getNativeImplementation.js
var cachedImplementations = {};
function getNativeImplementation(name) {
  const cached = cachedImplementations[name];
  if (cached) {
    return cached;
  }
  let impl = WINDOW4[name];
  if (isNativeFunction(impl)) {
    return cachedImplementations[name] = impl.bind(WINDOW4);
  }
  const document2 = WINDOW4.document;
  if (document2 && typeof document2.createElement === "function") {
    try {
      const sandbox = document2.createElement("iframe");
      sandbox.hidden = true;
      document2.head.appendChild(sandbox);
      const contentWindow = sandbox.contentWindow;
      if (contentWindow?.[name]) {
        impl = contentWindow[name];
      }
      document2.head.removeChild(sandbox);
    } catch (e2) {
      DEBUG_BUILD2 && logger.warn(`Could not create sandbox iframe for ${name} check, bailing to window.${name}: `, e2);
    }
  }
  if (!impl) {
    return impl;
  }
  return cachedImplementations[name] = impl.bind(WINDOW4);
}
function clearCachedImplementation(name) {
  cachedImplementations[name] = void 0;
}
function setTimeout2(...rest) {
  return getNativeImplementation("setTimeout")(...rest);
}

// node_modules/@sentry-internal/browser-utils/build/esm/instrument/xhr.js
var SENTRY_XHR_DATA_KEY = "__sentry_xhr_v3__";
function addXhrInstrumentationHandler(handler) {
  const type = "xhr";
  addHandler(type, handler);
  maybeInstrument(type, instrumentXHR);
}
function instrumentXHR() {
  if (!WINDOW4.XMLHttpRequest) {
    return;
  }
  const xhrproto = XMLHttpRequest.prototype;
  xhrproto.open = new Proxy(xhrproto.open, {
    apply(originalOpen, xhrOpenThisArg, xhrOpenArgArray) {
      const virtualError = new Error();
      const startTimestamp = timestampInSeconds() * 1e3;
      const method = isString(xhrOpenArgArray[0]) ? xhrOpenArgArray[0].toUpperCase() : void 0;
      const url = parseXhrUrlArg(xhrOpenArgArray[1]);
      if (!method || !url) {
        return originalOpen.apply(xhrOpenThisArg, xhrOpenArgArray);
      }
      xhrOpenThisArg[SENTRY_XHR_DATA_KEY] = {
        method,
        url,
        request_headers: {}
      };
      if (method === "POST" && url.match(/sentry_key/)) {
        xhrOpenThisArg.__sentry_own_request__ = true;
      }
      const onreadystatechangeHandler = () => {
        const xhrInfo = xhrOpenThisArg[SENTRY_XHR_DATA_KEY];
        if (!xhrInfo) {
          return;
        }
        if (xhrOpenThisArg.readyState === 4) {
          try {
            xhrInfo.status_code = xhrOpenThisArg.status;
          } catch (e2) {
          }
          const handlerData = {
            endTimestamp: timestampInSeconds() * 1e3,
            startTimestamp,
            xhr: xhrOpenThisArg,
            virtualError
          };
          triggerHandlers("xhr", handlerData);
        }
      };
      if ("onreadystatechange" in xhrOpenThisArg && typeof xhrOpenThisArg.onreadystatechange === "function") {
        xhrOpenThisArg.onreadystatechange = new Proxy(xhrOpenThisArg.onreadystatechange, {
          apply(originalOnreadystatechange, onreadystatechangeThisArg, onreadystatechangeArgArray) {
            onreadystatechangeHandler();
            return originalOnreadystatechange.apply(onreadystatechangeThisArg, onreadystatechangeArgArray);
          }
        });
      } else {
        xhrOpenThisArg.addEventListener("readystatechange", onreadystatechangeHandler);
      }
      xhrOpenThisArg.setRequestHeader = new Proxy(xhrOpenThisArg.setRequestHeader, {
        apply(originalSetRequestHeader, setRequestHeaderThisArg, setRequestHeaderArgArray) {
          const [header, value] = setRequestHeaderArgArray;
          const xhrInfo = setRequestHeaderThisArg[SENTRY_XHR_DATA_KEY];
          if (xhrInfo && isString(header) && isString(value)) {
            xhrInfo.request_headers[header.toLowerCase()] = value;
          }
          return originalSetRequestHeader.apply(setRequestHeaderThisArg, setRequestHeaderArgArray);
        }
      });
      return originalOpen.apply(xhrOpenThisArg, xhrOpenArgArray);
    }
  });
  xhrproto.send = new Proxy(xhrproto.send, {
    apply(originalSend, sendThisArg, sendArgArray) {
      const sentryXhrData = sendThisArg[SENTRY_XHR_DATA_KEY];
      if (!sentryXhrData) {
        return originalSend.apply(sendThisArg, sendArgArray);
      }
      if (sendArgArray[0] !== void 0) {
        sentryXhrData.body = sendArgArray[0];
      }
      const handlerData = {
        startTimestamp: timestampInSeconds() * 1e3,
        xhr: sendThisArg
      };
      triggerHandlers("xhr", handlerData);
      return originalSend.apply(sendThisArg, sendArgArray);
    }
  });
}
function parseXhrUrlArg(url) {
  if (isString(url)) {
    return url;
  }
  try {
    return url.toString();
  } catch {
  }
  return void 0;
}

// node_modules/@sentry-internal/browser-utils/build/esm/networkUtils.js
function serializeFormData(formData) {
  return new URLSearchParams(formData).toString();
}
function getBodyString(body, _logger = logger) {
  try {
    if (typeof body === "string") {
      return [body];
    }
    if (body instanceof URLSearchParams) {
      return [body.toString()];
    }
    if (body instanceof FormData) {
      return [serializeFormData(body)];
    }
    if (!body) {
      return [void 0];
    }
  } catch (error) {
    DEBUG_BUILD2 && _logger.error(error, "Failed to serialize body", body);
    return [void 0, "BODY_PARSE_ERROR"];
  }
  DEBUG_BUILD2 && _logger.info("Skipping network body because of body type", body);
  return [void 0, "UNPARSEABLE_BODY_TYPE"];
}
function getFetchRequestArgBody(fetchArgs = []) {
  if (fetchArgs.length !== 2 || typeof fetchArgs[1] !== "object") {
    return void 0;
  }
  return fetchArgs[1].body;
}

// node_modules/@sentry-internal/browser-utils/build/esm/metrics/inp.js
var LAST_INTERACTIONS = [];
var INTERACTIONS_SPAN_MAP = /* @__PURE__ */ new Map();
function startTrackingINP() {
  const performance2 = getBrowserPerformanceAPI();
  if (performance2 && browserPerformanceTimeOrigin()) {
    const inpCallback = _trackINP();
    return () => {
      inpCallback();
    };
  }
  return () => void 0;
}
var INP_ENTRY_MAP = {
  click: "click",
  pointerdown: "click",
  pointerup: "click",
  mousedown: "click",
  mouseup: "click",
  touchstart: "click",
  touchend: "click",
  mouseover: "hover",
  mouseout: "hover",
  mouseenter: "hover",
  mouseleave: "hover",
  pointerover: "hover",
  pointerout: "hover",
  pointerenter: "hover",
  pointerleave: "hover",
  dragstart: "drag",
  dragend: "drag",
  drag: "drag",
  dragenter: "drag",
  dragleave: "drag",
  dragover: "drag",
  drop: "drag",
  keydown: "press",
  keyup: "press",
  keypress: "press",
  input: "press"
};
function _trackINP() {
  return addInpInstrumentationHandler(({
    metric
  }) => {
    if (metric.value == void 0) {
      return;
    }
    const entry = metric.entries.find((entry2) => entry2.duration === metric.value && INP_ENTRY_MAP[entry2.name]);
    if (!entry) {
      return;
    }
    const {
      interactionId
    } = entry;
    const interactionType = INP_ENTRY_MAP[entry.name];
    const startTime = msToSec(browserPerformanceTimeOrigin() + entry.startTime);
    const duration = msToSec(metric.value);
    const activeSpan = getActiveSpan();
    const rootSpan = activeSpan ? getRootSpan(activeSpan) : void 0;
    const cachedSpan = interactionId != null ? INTERACTIONS_SPAN_MAP.get(interactionId) : void 0;
    const spanToUse = cachedSpan || rootSpan;
    const routeName = spanToUse ? spanToJSON(spanToUse).description : getCurrentScope().getScopeData().transactionName;
    const name = htmlTreeAsString(entry.target);
    const attributes = {
      [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.inp",
      [SEMANTIC_ATTRIBUTE_SENTRY_OP]: `ui.interaction.${interactionType}`,
      [SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: entry.duration
    };
    const span = startStandaloneWebVitalSpan({
      name,
      transaction: routeName,
      attributes,
      startTime
    });
    if (span) {
      span.addEvent("inp", {
        [SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "millisecond",
        [SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: metric.value
      });
      span.end(startTime + duration);
    }
  });
}
function registerInpInteractionListener() {
  const handleEntries = ({
    entries
  }) => {
    const activeSpan = getActiveSpan();
    const activeRootSpan = activeSpan && getRootSpan(activeSpan);
    entries.forEach((entry) => {
      if (!isPerformanceEventTiming(entry) || !activeRootSpan) {
        return;
      }
      const interactionId = entry.interactionId;
      if (interactionId == null) {
        return;
      }
      if (INTERACTIONS_SPAN_MAP.has(interactionId)) {
        return;
      }
      if (LAST_INTERACTIONS.length > 10) {
        const last = LAST_INTERACTIONS.shift();
        INTERACTIONS_SPAN_MAP.delete(last);
      }
      LAST_INTERACTIONS.push(interactionId);
      INTERACTIONS_SPAN_MAP.set(interactionId, activeRootSpan);
    });
  };
  addPerformanceInstrumentationHandler("event", handleEntries);
  addPerformanceInstrumentationHandler("first-input", handleEntries);
}

// node_modules/@sentry/browser/build/npm/esm/transports/fetch.js
function makeFetchTransport(options, nativeFetch = getNativeImplementation("fetch")) {
  let pendingBodySize = 0;
  let pendingCount = 0;
  function makeRequest(request) {
    const requestSize = request.body.length;
    pendingBodySize += requestSize;
    pendingCount++;
    const requestOptions = __spreadValues({
      body: request.body,
      method: "POST",
      referrerPolicy: "strict-origin",
      headers: options.headers,
      // Outgoing requests are usually cancelled when navigating to a different page, causing a "TypeError: Failed to
      // fetch" error and sending a "network_error" client-outcome - in Chrome, the request status shows "(cancelled)".
      // The `keepalive` flag keeps outgoing requests alive, even when switching pages. We want this since we're
      // frequently sending events right before the user is switching pages (eg. when finishing navigation transactions).
      // Gotchas:
      // - `keepalive` isn't supported by Firefox
      // - As per spec (https://fetch.spec.whatwg.org/#http-network-or-cache-fetch):
      //   If the sum of contentLength and inflightKeepaliveBytes is greater than 64 kibibytes, then return a network error.
      //   We will therefore only activate the flag when we're below that limit.
      // There is also a limit of requests that can be open at the same time, so we also limit this to 15
      // See https://github.com/getsentry/sentry-javascript/pull/7553 for details
      keepalive: pendingBodySize <= 6e4 && pendingCount < 15
    }, options.fetchOptions);
    if (!nativeFetch) {
      clearCachedImplementation("fetch");
      return rejectedSyncPromise("No fetch implementation available");
    }
    try {
      return nativeFetch(options.url, requestOptions).then((response) => {
        pendingBodySize -= requestSize;
        pendingCount--;
        return {
          statusCode: response.status,
          headers: {
            "x-sentry-rate-limits": response.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": response.headers.get("Retry-After")
          }
        };
      });
    } catch (e2) {
      clearCachedImplementation("fetch");
      pendingBodySize -= requestSize;
      pendingCount--;
      return rejectedSyncPromise(e2);
    }
  }
  return createTransport(options, makeRequest);
}

// node_modules/@sentry/browser/build/npm/esm/stack-parsers.js
var CHROME_PRIORITY = 30;
var GECKO_PRIORITY = 50;
function createFrame(filename, func, lineno, colno) {
  const frame = {
    filename,
    function: func === "<anonymous>" ? UNKNOWN_FUNCTION : func,
    in_app: true
    // All browser frames are considered in_app
  };
  if (lineno !== void 0) {
    frame.lineno = lineno;
  }
  if (colno !== void 0) {
    frame.colno = colno;
  }
  return frame;
}
var chromeRegexNoFnName = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
var chromeRegex = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
var chromeStackParserFn = (line) => {
  const noFnParts = chromeRegexNoFnName.exec(line);
  if (noFnParts) {
    const [, filename, line2, col] = noFnParts;
    return createFrame(filename, UNKNOWN_FUNCTION, +line2, +col);
  }
  const parts = chromeRegex.exec(line);
  if (parts) {
    const isEval = parts[2] && parts[2].indexOf("eval") === 0;
    if (isEval) {
      const subMatch = chromeEvalRegex.exec(parts[2]);
      if (subMatch) {
        parts[2] = subMatch[1];
        parts[3] = subMatch[2];
        parts[4] = subMatch[3];
      }
    }
    const [func, filename] = extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]);
    return createFrame(filename, func, parts[3] ? +parts[3] : void 0, parts[4] ? +parts[4] : void 0);
  }
  return;
};
var chromeStackLineParser = [CHROME_PRIORITY, chromeStackParserFn];
var geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var gecko = (line) => {
  const parts = geckoREgex.exec(line);
  if (parts) {
    const isEval = parts[3] && parts[3].indexOf(" > eval") > -1;
    if (isEval) {
      const subMatch = geckoEvalRegex.exec(parts[3]);
      if (subMatch) {
        parts[1] = parts[1] || "eval";
        parts[3] = subMatch[1];
        parts[4] = subMatch[2];
        parts[5] = "";
      }
    }
    let filename = parts[3];
    let func = parts[1] || UNKNOWN_FUNCTION;
    [func, filename] = extractSafariExtensionDetails(func, filename);
    return createFrame(filename, func, parts[4] ? +parts[4] : void 0, parts[5] ? +parts[5] : void 0);
  }
  return;
};
var geckoStackLineParser = [GECKO_PRIORITY, gecko];
var defaultStackLineParsers = [chromeStackLineParser, geckoStackLineParser];
var defaultStackParser = createStackParser(...defaultStackLineParsers);
var extractSafariExtensionDetails = (func, filename) => {
  const isSafariExtension = func.indexOf("safari-extension") !== -1;
  const isSafariWebExtension = func.indexOf("safari-web-extension") !== -1;
  return isSafariExtension || isSafariWebExtension ? [func.indexOf("@") !== -1 ? func.split("@")[0] : UNKNOWN_FUNCTION, isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`] : [func, filename];
};

// node_modules/@sentry/browser/build/npm/esm/debug-build.js
var DEBUG_BUILD3 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;

// node_modules/@sentry/browser/build/npm/esm/integrations/breadcrumbs.js
var MAX_ALLOWED_STRING_LENGTH = 1024;
var INTEGRATION_NAME4 = "Breadcrumbs";
var _breadcrumbsIntegration = (options = {}) => {
  const _options = __spreadValues({
    console: true,
    dom: true,
    fetch: true,
    history: true,
    sentry: true,
    xhr: true
  }, options);
  return {
    name: INTEGRATION_NAME4,
    setup(client) {
      if (_options.console) {
        addConsoleInstrumentationHandler(_getConsoleBreadcrumbHandler(client));
      }
      if (_options.dom) {
        addClickKeypressInstrumentationHandler(_getDomBreadcrumbHandler(client, _options.dom));
      }
      if (_options.xhr) {
        addXhrInstrumentationHandler(_getXhrBreadcrumbHandler(client));
      }
      if (_options.fetch) {
        addFetchInstrumentationHandler(_getFetchBreadcrumbHandler(client));
      }
      if (_options.history) {
        addHistoryInstrumentationHandler(_getHistoryBreadcrumbHandler(client));
      }
      if (_options.sentry) {
        client.on("beforeSendEvent", _getSentryBreadcrumbHandler(client));
      }
    }
  };
};
var breadcrumbsIntegration = defineIntegration(_breadcrumbsIntegration);
function _getSentryBreadcrumbHandler(client) {
  return function addSentryBreadcrumb(event) {
    if (getClient() !== client) {
      return;
    }
    addBreadcrumb({
      category: `sentry.${event.type === "transaction" ? "transaction" : "event"}`,
      event_id: event.event_id,
      level: event.level,
      message: getEventDescription(event)
    }, {
      event
    });
  };
}
function _getDomBreadcrumbHandler(client, dom) {
  return function _innerDomBreadcrumb(handlerData) {
    if (getClient() !== client) {
      return;
    }
    let target;
    let componentName;
    let keyAttrs = typeof dom === "object" ? dom.serializeAttribute : void 0;
    let maxStringLength = typeof dom === "object" && typeof dom.maxStringLength === "number" ? dom.maxStringLength : void 0;
    if (maxStringLength && maxStringLength > MAX_ALLOWED_STRING_LENGTH) {
      DEBUG_BUILD3 && logger.warn(`\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${maxStringLength} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`);
      maxStringLength = MAX_ALLOWED_STRING_LENGTH;
    }
    if (typeof keyAttrs === "string") {
      keyAttrs = [keyAttrs];
    }
    try {
      const event = handlerData.event;
      const element = _isEvent(event) ? event.target : event;
      target = htmlTreeAsString(element, {
        keyAttrs,
        maxStringLength
      });
      componentName = getComponentName(element);
    } catch (e2) {
      target = "<unknown>";
    }
    if (target.length === 0) {
      return;
    }
    const breadcrumb = {
      category: `ui.${handlerData.name}`,
      message: target
    };
    if (componentName) {
      breadcrumb.data = {
        "ui.component_name": componentName
      };
    }
    addBreadcrumb(breadcrumb, {
      event: handlerData.event,
      name: handlerData.name,
      global: handlerData.global
    });
  };
}
function _getConsoleBreadcrumbHandler(client) {
  return function _consoleBreadcrumb(handlerData) {
    if (getClient() !== client) {
      return;
    }
    const breadcrumb = {
      category: "console",
      data: {
        arguments: handlerData.args,
        logger: "console"
      },
      level: severityLevelFromString(handlerData.level),
      message: safeJoin(handlerData.args, " ")
    };
    if (handlerData.level === "assert") {
      if (handlerData.args[0] === false) {
        breadcrumb.message = `Assertion failed: ${safeJoin(handlerData.args.slice(1), " ") || "console.assert"}`;
        breadcrumb.data.arguments = handlerData.args.slice(1);
      } else {
        return;
      }
    }
    addBreadcrumb(breadcrumb, {
      input: handlerData.args,
      level: handlerData.level
    });
  };
}
function _getXhrBreadcrumbHandler(client) {
  return function _xhrBreadcrumb(handlerData) {
    if (getClient() !== client) {
      return;
    }
    const {
      startTimestamp,
      endTimestamp
    } = handlerData;
    const sentryXhrData = handlerData.xhr[SENTRY_XHR_DATA_KEY];
    if (!startTimestamp || !endTimestamp || !sentryXhrData) {
      return;
    }
    const {
      method,
      url,
      status_code,
      body
    } = sentryXhrData;
    const data = {
      method,
      url,
      status_code
    };
    const hint = {
      xhr: handlerData.xhr,
      input: body,
      startTimestamp,
      endTimestamp
    };
    const breadcrumb = {
      category: "xhr",
      data,
      type: "http",
      level: getBreadcrumbLogLevelFromHttpStatusCode(status_code)
    };
    client.emit("beforeOutgoingRequestBreadcrumb", breadcrumb, hint);
    addBreadcrumb(breadcrumb, hint);
  };
}
function _getFetchBreadcrumbHandler(client) {
  return function _fetchBreadcrumb(handlerData) {
    if (getClient() !== client) {
      return;
    }
    const {
      startTimestamp,
      endTimestamp
    } = handlerData;
    if (!endTimestamp) {
      return;
    }
    if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === "POST") {
      return;
    }
    ({
      method: handlerData.fetchData.method,
      url: handlerData.fetchData.url
    });
    if (handlerData.error) {
      const data = handlerData.fetchData;
      const hint = {
        data: handlerData.error,
        input: handlerData.args,
        startTimestamp,
        endTimestamp
      };
      const breadcrumb = {
        category: "fetch",
        data,
        level: "error",
        type: "http"
      };
      client.emit("beforeOutgoingRequestBreadcrumb", breadcrumb, hint);
      addBreadcrumb(breadcrumb, hint);
    } else {
      const response = handlerData.response;
      const data = __spreadProps(__spreadValues({}, handlerData.fetchData), {
        status_code: response?.status
      });
      handlerData.fetchData.request_body_size;
      handlerData.fetchData.response_body_size;
      response?.status;
      const hint = {
        input: handlerData.args,
        response,
        startTimestamp,
        endTimestamp
      };
      const breadcrumb = {
        category: "fetch",
        data,
        type: "http",
        level: getBreadcrumbLogLevelFromHttpStatusCode(data.status_code)
      };
      client.emit("beforeOutgoingRequestBreadcrumb", breadcrumb, hint);
      addBreadcrumb(breadcrumb, hint);
    }
  };
}
function _getHistoryBreadcrumbHandler(client) {
  return function _historyBreadcrumb(handlerData) {
    if (getClient() !== client) {
      return;
    }
    let from2 = handlerData.from;
    let to = handlerData.to;
    const parsedLoc = parseUrl(WINDOW3.location.href);
    let parsedFrom = from2 ? parseUrl(from2) : void 0;
    const parsedTo = parseUrl(to);
    if (!parsedFrom?.path) {
      parsedFrom = parsedLoc;
    }
    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
      to = parsedTo.relative;
    }
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
      from2 = parsedFrom.relative;
    }
    addBreadcrumb({
      category: "navigation",
      data: {
        from: from2,
        to
      }
    });
  };
}
function _isEvent(event) {
  return !!event && !!event.target;
}

// node_modules/@sentry/browser/build/npm/esm/integrations/browserapierrors.js
var DEFAULT_EVENT_TARGET = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
var INTEGRATION_NAME5 = "BrowserApiErrors";
var _browserApiErrorsIntegration = (options = {}) => {
  const _options = __spreadValues({
    XMLHttpRequest: true,
    eventTarget: true,
    requestAnimationFrame: true,
    setInterval: true,
    setTimeout: true
  }, options);
  return {
    name: INTEGRATION_NAME5,
    // TODO: This currently only works for the first client this is setup
    // We may want to adjust this to check for client etc.
    setupOnce() {
      if (_options.setTimeout) {
        fill(WINDOW3, "setTimeout", _wrapTimeFunction);
      }
      if (_options.setInterval) {
        fill(WINDOW3, "setInterval", _wrapTimeFunction);
      }
      if (_options.requestAnimationFrame) {
        fill(WINDOW3, "requestAnimationFrame", _wrapRAF);
      }
      if (_options.XMLHttpRequest && "XMLHttpRequest" in WINDOW3) {
        fill(XMLHttpRequest.prototype, "send", _wrapXHR);
      }
      const eventTargetOption = _options.eventTarget;
      if (eventTargetOption) {
        const eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
        eventTarget.forEach(_wrapEventTarget);
      }
    }
  };
};
var browserApiErrorsIntegration = defineIntegration(_browserApiErrorsIntegration);
function _wrapTimeFunction(original) {
  return function(...args) {
    const originalCallback = args[0];
    args[0] = wrap(originalCallback, {
      mechanism: {
        data: {
          function: getFunctionName(original)
        },
        handled: false,
        type: "instrument"
      }
    });
    return original.apply(this, args);
  };
}
function _wrapRAF(original) {
  return function(callback) {
    return original.apply(this, [wrap(callback, {
      mechanism: {
        data: {
          function: "requestAnimationFrame",
          handler: getFunctionName(original)
        },
        handled: false,
        type: "instrument"
      }
    })]);
  };
}
function _wrapXHR(originalSend) {
  return function(...args) {
    const xhr = this;
    const xmlHttpRequestProps = ["onload", "onerror", "onprogress", "onreadystatechange"];
    xmlHttpRequestProps.forEach((prop) => {
      if (prop in xhr && typeof xhr[prop] === "function") {
        fill(xhr, prop, function(original) {
          const wrapOptions = {
            mechanism: {
              data: {
                function: prop,
                handler: getFunctionName(original)
              },
              handled: false,
              type: "instrument"
            }
          };
          const originalFunction = getOriginalFunction(original);
          if (originalFunction) {
            wrapOptions.mechanism.data.handler = getFunctionName(originalFunction);
          }
          return wrap(original, wrapOptions);
        });
      }
    });
    return originalSend.apply(this, args);
  };
}
function _wrapEventTarget(target) {
  const globalObject = WINDOW3;
  const proto = globalObject[target]?.prototype;
  if (!proto?.hasOwnProperty?.("addEventListener")) {
    return;
  }
  fill(proto, "addEventListener", function(original) {
    return function(eventName, fn, options) {
      try {
        if (isEventListenerObject(fn)) {
          fn.handleEvent = wrap(fn.handleEvent, {
            mechanism: {
              data: {
                function: "handleEvent",
                handler: getFunctionName(fn),
                target
              },
              handled: false,
              type: "instrument"
            }
          });
        }
      } catch {
      }
      return original.apply(this, [eventName, wrap(fn, {
        mechanism: {
          data: {
            function: "addEventListener",
            handler: getFunctionName(fn),
            target
          },
          handled: false,
          type: "instrument"
        }
      }), options]);
    };
  });
  fill(proto, "removeEventListener", function(originalRemoveEventListener) {
    return function(eventName, fn, options) {
      try {
        const originalEventHandler = fn.__sentry_wrapped__;
        if (originalEventHandler) {
          originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
        }
      } catch (e2) {
      }
      return originalRemoveEventListener.call(this, eventName, fn, options);
    };
  });
}
function isEventListenerObject(obj) {
  return typeof obj.handleEvent === "function";
}

// node_modules/@sentry/browser/build/npm/esm/integrations/browsersession.js
var browserSessionIntegration = defineIntegration(() => {
  return {
    name: "BrowserSession",
    setupOnce() {
      if (typeof WINDOW3.document === "undefined") {
        DEBUG_BUILD3 && logger.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
        return;
      }
      startSession({
        ignoreDuration: true
      });
      captureSession();
      addHistoryInstrumentationHandler(({
        from: from2,
        to
      }) => {
        if (from2 !== void 0 && from2 !== to) {
          startSession({
            ignoreDuration: true
          });
          captureSession();
        }
      });
    }
  };
});

// node_modules/@sentry/browser/build/npm/esm/integrations/globalhandlers.js
var INTEGRATION_NAME6 = "GlobalHandlers";
var _globalHandlersIntegration = (options = {}) => {
  const _options = __spreadValues({
    onerror: true,
    onunhandledrejection: true
  }, options);
  return {
    name: INTEGRATION_NAME6,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(client) {
      if (_options.onerror) {
        _installGlobalOnErrorHandler(client);
        globalHandlerLog("onerror");
      }
      if (_options.onunhandledrejection) {
        _installGlobalOnUnhandledRejectionHandler(client);
        globalHandlerLog("onunhandledrejection");
      }
    }
  };
};
var globalHandlersIntegration = defineIntegration(_globalHandlersIntegration);
function _installGlobalOnErrorHandler(client) {
  addGlobalErrorInstrumentationHandler((data) => {
    const {
      stackParser,
      attachStacktrace
    } = getOptions();
    if (getClient() !== client || shouldIgnoreOnError()) {
      return;
    }
    const {
      msg,
      url,
      line,
      column,
      error
    } = data;
    const event = _enhanceEventWithInitialFrame(eventFromUnknownInput(stackParser, error || msg, void 0, attachStacktrace, false), url, line, column);
    event.level = "error";
    captureEvent(event, {
      originalException: error,
      mechanism: {
        handled: false,
        type: "onerror"
      }
    });
  });
}
function _installGlobalOnUnhandledRejectionHandler(client) {
  addGlobalUnhandledRejectionInstrumentationHandler((e2) => {
    const {
      stackParser,
      attachStacktrace
    } = getOptions();
    if (getClient() !== client || shouldIgnoreOnError()) {
      return;
    }
    const error = _getUnhandledRejectionError(e2);
    const event = isPrimitive(error) ? _eventFromRejectionWithPrimitive(error) : eventFromUnknownInput(stackParser, error, void 0, attachStacktrace, true);
    event.level = "error";
    captureEvent(event, {
      originalException: error,
      mechanism: {
        handled: false,
        type: "onunhandledrejection"
      }
    });
  });
}
function _getUnhandledRejectionError(error) {
  if (isPrimitive(error)) {
    return error;
  }
  try {
    if ("reason" in error) {
      return error.reason;
    }
    if ("detail" in error && "reason" in error.detail) {
      return error.detail.reason;
    }
  } catch {
  }
  return error;
}
function _eventFromRejectionWithPrimitive(reason) {
  return {
    exception: {
      values: [{
        type: "UnhandledRejection",
        // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
        value: `Non-Error promise rejection captured with value: ${String(reason)}`
      }]
    }
  };
}
function _enhanceEventWithInitialFrame(event, url, line, column) {
  const e2 = event.exception = event.exception || {};
  const ev = e2.values = e2.values || [];
  const ev0 = ev[0] = ev[0] || {};
  const ev0s = ev0.stacktrace = ev0.stacktrace || {};
  const ev0sf = ev0s.frames = ev0s.frames || [];
  const colno = column;
  const lineno = line;
  const filename = isString(url) && url.length > 0 ? url : getLocationHref();
  if (ev0sf.length === 0) {
    ev0sf.push({
      colno,
      filename,
      function: UNKNOWN_FUNCTION,
      in_app: true,
      lineno
    });
  }
  return event;
}
function globalHandlerLog(type) {
  DEBUG_BUILD3 && logger.log(`Global Handler attached: ${type}`);
}
function getOptions() {
  const client = getClient();
  const options = client?.getOptions() || {
    stackParser: () => [],
    attachStacktrace: false
  };
  return options;
}

// node_modules/@sentry/browser/build/npm/esm/integrations/httpcontext.js
var httpContextIntegration = defineIntegration(() => {
  return {
    name: "HttpContext",
    preprocessEvent(event) {
      if (!WINDOW3.navigator && !WINDOW3.location && !WINDOW3.document) {
        return;
      }
      const url = event.request?.url || getLocationHref();
      const {
        referrer
      } = WINDOW3.document || {};
      const {
        userAgent
      } = WINDOW3.navigator || {};
      const headers = __spreadValues(__spreadValues(__spreadValues({}, event.request?.headers), referrer && {
        Referer: referrer
      }), userAgent && {
        "User-Agent": userAgent
      });
      const request = __spreadProps(__spreadValues(__spreadValues({}, event.request), url && {
        url
      }), {
        headers
      });
      event.request = request;
    }
  };
});

// node_modules/@sentry/browser/build/npm/esm/integrations/linkederrors.js
var DEFAULT_KEY = "cause";
var DEFAULT_LIMIT = 5;
var INTEGRATION_NAME7 = "LinkedErrors";
var _linkedErrorsIntegration = (options = {}) => {
  const limit = options.limit || DEFAULT_LIMIT;
  const key = options.key || DEFAULT_KEY;
  return {
    name: INTEGRATION_NAME7,
    preprocessEvent(event, hint, client) {
      const options2 = client.getOptions();
      applyAggregateErrorsToEvent(
        // This differs from the LinkedErrors integration in core by using a different exceptionFromError function
        exceptionFromError,
        options2.stackParser,
        key,
        limit,
        event,
        hint
      );
    }
  };
};
var linkedErrorsIntegration = defineIntegration(_linkedErrorsIntegration);

// node_modules/@sentry/browser/build/npm/esm/sdk.js
function getDefaultIntegrations(_options) {
  return [
    // TODO(v10): Replace with `eventFiltersIntegration` once we remove the deprecated `inboundFiltersIntegration`
    // eslint-disable-next-line deprecation/deprecation
    inboundFiltersIntegration(),
    functionToStringIntegration(),
    browserApiErrorsIntegration(),
    breadcrumbsIntegration(),
    globalHandlersIntegration(),
    linkedErrorsIntegration(),
    dedupeIntegration(),
    httpContextIntegration(),
    browserSessionIntegration()
  ];
}
function applyDefaultOptions(optionsArg = {}) {
  const defaultOptions = {
    defaultIntegrations: getDefaultIntegrations(),
    release: typeof __SENTRY_RELEASE__ === "string" ? __SENTRY_RELEASE__ : WINDOW3.SENTRY_RELEASE?.id,
    // This supports the variable that sentry-webpack-plugin injects
    sendClientReports: true
  };
  return __spreadValues(__spreadValues({}, defaultOptions), dropTopLevelUndefinedKeys(optionsArg));
}
function dropTopLevelUndefinedKeys(obj) {
  const mutatetedObj = {};
  for (const k of Object.getOwnPropertyNames(obj)) {
    const key = k;
    if (obj[key] !== void 0) {
      mutatetedObj[key] = obj[key];
    }
  }
  return mutatetedObj;
}
function shouldShowBrowserExtensionError() {
  const windowWithMaybeExtension = typeof WINDOW3.window !== "undefined" && WINDOW3;
  if (!windowWithMaybeExtension) {
    return false;
  }
  const extensionKey = windowWithMaybeExtension.chrome ? "chrome" : "browser";
  const extensionObject = windowWithMaybeExtension[extensionKey];
  const runtimeId = extensionObject?.runtime?.id;
  const href = getLocationHref() || "";
  const extensionProtocols = ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"];
  const isDedicatedExtensionPage = !!runtimeId && WINDOW3 === WINDOW3.top && extensionProtocols.some((protocol) => href.startsWith(`${protocol}//`));
  const isNWjs = typeof windowWithMaybeExtension.nw !== "undefined";
  return !!runtimeId && !isDedicatedExtensionPage && !isNWjs;
}
function init(browserOptions = {}) {
  const options = applyDefaultOptions(browserOptions);
  if (!options.skipBrowserExtensionCheck && shouldShowBrowserExtensionError()) {
    if (DEBUG_BUILD3) {
      consoleSandbox(() => {
        console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
      });
    }
    return;
  }
  if (DEBUG_BUILD3 && !supportsFetch()) {
    logger.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.");
  }
  const clientOptions = __spreadProps(__spreadValues({}, options), {
    stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
    integrations: getIntegrationsToSetup(options),
    transport: options.transport || makeFetchTransport
  });
  return initAndBind(BrowserClient, clientOptions);
}
function showReportDialog(options = {}) {
  if (!WINDOW3.document) {
    DEBUG_BUILD3 && logger.error("Global document not defined in showReportDialog call");
    return;
  }
  const scope = getCurrentScope();
  const client = scope.getClient();
  const dsn = client?.getDsn();
  if (!dsn) {
    DEBUG_BUILD3 && logger.error("DSN not configured for showReportDialog call");
    return;
  }
  if (scope) {
    options.user = __spreadValues(__spreadValues({}, scope.getUser()), options.user);
  }
  if (!options.eventId) {
    const eventId = lastEventId();
    if (eventId) {
      options.eventId = eventId;
    }
  }
  const script = WINDOW3.document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = getReportDialogEndpoint(dsn, options);
  if (options.onLoad) {
    script.onload = options.onLoad;
  }
  const {
    onClose
  } = options;
  if (onClose) {
    const reportDialogClosedMessageHandler = (event) => {
      if (event.data === "__sentry_reportdialog_closed__") {
        try {
          onClose();
        } finally {
          WINDOW3.removeEventListener("message", reportDialogClosedMessageHandler);
        }
      }
    };
    WINDOW3.addEventListener("message", reportDialogClosedMessageHandler);
  }
  const injectionPoint = WINDOW3.document.head || WINDOW3.document.body;
  if (injectionPoint) {
    injectionPoint.appendChild(script);
  } else {
    DEBUG_BUILD3 && logger.error("Not injecting report dialog. No injection point found in HTML");
  }
}

// node_modules/@sentry-internal/replay/build/npm/esm/index.js
var WINDOW5 = GLOBAL_OBJ;
var REPLAY_SESSION_KEY = "sentryReplaySession";
var REPLAY_EVENT_NAME = "replay_event";
var UNABLE_TO_SEND_REPLAY = "Unable to send Replay";
var SESSION_IDLE_PAUSE_DURATION = 3e5;
var SESSION_IDLE_EXPIRE_DURATION = 9e5;
var DEFAULT_FLUSH_MIN_DELAY = 5e3;
var DEFAULT_FLUSH_MAX_DELAY = 5500;
var BUFFER_CHECKOUT_TIME = 6e4;
var RETRY_BASE_INTERVAL = 5e3;
var RETRY_MAX_COUNT = 3;
var NETWORK_BODY_MAX_SIZE = 15e4;
var CONSOLE_ARG_MAX_SIZE = 5e3;
var SLOW_CLICK_THRESHOLD = 3e3;
var SLOW_CLICK_SCROLL_TIMEOUT = 300;
var REPLAY_MAX_EVENT_BUFFER_SIZE = 2e7;
var MIN_REPLAY_DURATION = 4999;
var MIN_REPLAY_DURATION_LIMIT = 15e3;
var MAX_REPLAY_DURATION = 36e5;
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
var NodeType$2 = /* @__PURE__ */ ((NodeType2) => {
  NodeType2[NodeType2["Document"] = 0] = "Document";
  NodeType2[NodeType2["DocumentType"] = 1] = "DocumentType";
  NodeType2[NodeType2["Element"] = 2] = "Element";
  NodeType2[NodeType2["Text"] = 3] = "Text";
  NodeType2[NodeType2["CDATA"] = 4] = "CDATA";
  NodeType2[NodeType2["Comment"] = 5] = "Comment";
  return NodeType2;
})(NodeType$2 || {});
function isElement$1(n2) {
  return n2.nodeType === n2.ELEMENT_NODE;
}
function isShadowRoot(n2) {
  const host = n2?.host;
  return Boolean(host?.shadowRoot === n2);
}
function isNativeShadowDom(shadowRoot) {
  return Object.prototype.toString.call(shadowRoot) === "[object ShadowRoot]";
}
function fixBrowserCompatibilityIssuesInCSS(cssText) {
  if (cssText.includes(" background-clip: text;") && !cssText.includes(" -webkit-background-clip: text;")) {
    cssText = cssText.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;");
  }
  return cssText;
}
function escapeImportStatement(rule) {
  const {
    cssText
  } = rule;
  if (cssText.split('"').length < 3) return cssText;
  const statement = ["@import", `url(${JSON.stringify(rule.href)})`];
  if (rule.layerName === "") {
    statement.push(`layer`);
  } else if (rule.layerName) {
    statement.push(`layer(${rule.layerName})`);
  }
  if (rule.supportsText) {
    statement.push(`supports(${rule.supportsText})`);
  }
  if (rule.media.length) {
    statement.push(rule.media.mediaText);
  }
  return statement.join(" ") + ";";
}
function stringifyStylesheet(s2) {
  try {
    const rules2 = s2.rules || s2.cssRules;
    return rules2 ? fixBrowserCompatibilityIssuesInCSS(Array.from(rules2, stringifyRule).join("")) : null;
  } catch (error) {
    return null;
  }
}
function fixAllCssProperty(rule) {
  let styles = "";
  for (let i2 = 0; i2 < rule.style.length; i2++) {
    const styleDeclaration = rule.style;
    const attribute = styleDeclaration[i2];
    const isImportant = styleDeclaration.getPropertyPriority(attribute);
    styles += `${attribute}:${styleDeclaration.getPropertyValue(attribute)}${isImportant ? ` !important` : ""};`;
  }
  return `${rule.selectorText} { ${styles} }`;
}
function stringifyRule(rule) {
  let importStringified;
  if (isCSSImportRule(rule)) {
    try {
      importStringified = // for same-origin stylesheets,
      // we can access the imported stylesheet rules directly
      stringifyStylesheet(rule.styleSheet) || // work around browser issues with the raw string `@import url(...)` statement
      escapeImportStatement(rule);
    } catch (error) {
    }
  } else if (isCSSStyleRule(rule)) {
    let cssText = rule.cssText;
    const needsSafariColonFix = rule.selectorText.includes(":");
    const needsAllFix = typeof rule.style["all"] === "string" && rule.style["all"];
    if (needsAllFix) {
      cssText = fixAllCssProperty(rule);
    }
    if (needsSafariColonFix) {
      cssText = fixSafariColons(cssText);
    }
    if (needsSafariColonFix || needsAllFix) {
      return cssText;
    }
  }
  return importStringified || rule.cssText;
}
function fixSafariColons(cssStringified) {
  const regex = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return cssStringified.replace(regex, "$1\\$2");
}
function isCSSImportRule(rule) {
  return "styleSheet" in rule;
}
function isCSSStyleRule(rule) {
  return "selectorText" in rule;
}
var Mirror = class {
  constructor() {
    __publicField$1(this, "idNodeMap", /* @__PURE__ */ new Map());
    __publicField$1(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
  }
  getId(n2) {
    if (!n2) return -1;
    const id = this.getMeta(n2)?.id;
    return id ?? -1;
  }
  getNode(id) {
    return this.idNodeMap.get(id) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(n2) {
    return this.nodeMetaMap.get(n2) || null;
  }
  // removes the node from idNodeMap
  // doesn't remove the node from nodeMetaMap
  removeNodeFromMap(n2) {
    const id = this.getId(n2);
    this.idNodeMap.delete(id);
    if (n2.childNodes) {
      n2.childNodes.forEach((childNode) => this.removeNodeFromMap(childNode));
    }
  }
  has(id) {
    return this.idNodeMap.has(id);
  }
  hasNode(node) {
    return this.nodeMetaMap.has(node);
  }
  add(n2, meta) {
    const id = meta.id;
    this.idNodeMap.set(id, n2);
    this.nodeMetaMap.set(n2, meta);
  }
  replace(id, n2) {
    const oldNode = this.getNode(id);
    if (oldNode) {
      const meta = this.nodeMetaMap.get(oldNode);
      if (meta) this.nodeMetaMap.set(n2, meta);
    }
    this.idNodeMap.set(id, n2);
  }
  reset() {
    this.idNodeMap = /* @__PURE__ */ new Map();
    this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
  }
};
function createMirror$2() {
  return new Mirror();
}
function shouldMaskInput({
  maskInputOptions,
  tagName,
  type
}) {
  if (tagName === "OPTION") {
    tagName = "SELECT";
  }
  return Boolean(maskInputOptions[tagName.toLowerCase()] || type && maskInputOptions[type] || type === "password" || // Default to "text" option for inputs without a "type" attribute defined
  tagName === "INPUT" && !type && maskInputOptions["text"]);
}
function maskInputValue({
  isMasked,
  element,
  value,
  maskInputFn
}) {
  let text = value || "";
  if (!isMasked) {
    return text;
  }
  if (maskInputFn) {
    text = maskInputFn(text, element);
  }
  return "*".repeat(text.length);
}
function toLowerCase(str) {
  return str.toLowerCase();
}
function toUpperCase(str) {
  return str.toUpperCase();
}
var ORIGINAL_ATTRIBUTE_NAME = "__rrweb_original__";
function is2DCanvasBlank(canvas) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return true;
  const chunkSize = 50;
  for (let x = 0; x < canvas.width; x += chunkSize) {
    for (let y = 0; y < canvas.height; y += chunkSize) {
      const getImageData = ctx.getImageData;
      const originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData ? getImageData[ORIGINAL_ATTRIBUTE_NAME] : getImageData;
      const pixelBuffer = new Uint32Array(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        originalGetImageData.call(ctx, x, y, Math.min(chunkSize, canvas.width - x), Math.min(chunkSize, canvas.height - y)).data.buffer
      );
      if (pixelBuffer.some((pixel) => pixel !== 0)) return false;
    }
  }
  return true;
}
function getInputType(element) {
  const type = element.type;
  return element.hasAttribute("data-rr-is-password") ? "password" : type ? (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    toLowerCase(type)
  ) : null;
}
function getInputValue(el, tagName, type) {
  if (tagName === "INPUT" && (type === "radio" || type === "checkbox")) {
    return el.getAttribute("value") || "";
  }
  return el.value;
}
function extractFileExtension(path, baseURL) {
  let url;
  try {
    url = new URL(path, baseURL ?? window.location.href);
  } catch (err) {
    return null;
  }
  const regex = /\.([0-9a-z]+)(?:$)/i;
  const match = url.pathname.match(regex);
  return match?.[1] ?? null;
}
var cachedImplementations$1 = {};
function getImplementation$1(name) {
  const cached = cachedImplementations$1[name];
  if (cached) {
    return cached;
  }
  const document2 = window.document;
  let impl = window[name];
  if (document2 && typeof document2.createElement === "function") {
    try {
      const sandbox = document2.createElement("iframe");
      sandbox.hidden = true;
      document2.head.appendChild(sandbox);
      const contentWindow = sandbox.contentWindow;
      if (contentWindow && contentWindow[name]) {
        impl = // eslint-disable-next-line @typescript-eslint/unbound-method
        contentWindow[name];
      }
      document2.head.removeChild(sandbox);
    } catch (e2) {
    }
  }
  return cachedImplementations$1[name] = impl.bind(window);
}
function setTimeout$2(...rest) {
  return getImplementation$1("setTimeout")(...rest);
}
function clearTimeout$1(...rest) {
  return getImplementation$1("clearTimeout")(...rest);
}
function getIframeContentDocument(iframe) {
  try {
    return iframe.contentDocument;
  } catch (e2) {
  }
}
var _id = 1;
var tagNameRegex = new RegExp("[^a-z0-9-_:]");
var IGNORED_NODE = -2;
function genId() {
  return _id++;
}
function getValidTagName$1(element) {
  if (element instanceof HTMLFormElement) {
    return "form";
  }
  const processedTagName = toLowerCase(element.tagName);
  if (tagNameRegex.test(processedTagName)) {
    return "div";
  }
  return processedTagName;
}
function extractOrigin(url) {
  let origin = "";
  if (url.indexOf("//") > -1) {
    origin = url.split("/").slice(0, 3).join("/");
  } else {
    origin = url.split("/")[0];
  }
  origin = origin.split("?")[0];
  return origin;
}
var canvasService;
var canvasCtx;
var URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
var URL_PROTOCOL_MATCH = /^(?:[a-z+]+:)?\/\//i;
var URL_WWW_MATCH = /^www\..*/i;
var DATA_URI = /^(data:)([^,]*),(.*)/i;
function absoluteToStylesheet(cssText, href) {
  return (cssText || "").replace(URL_IN_CSS_REF, (origin, quote1, path1, quote2, path2, path3) => {
    const filePath = path1 || path2 || path3;
    const maybeQuote = quote1 || quote2 || "";
    if (!filePath) {
      return origin;
    }
    if (URL_PROTOCOL_MATCH.test(filePath) || URL_WWW_MATCH.test(filePath)) {
      return `url(${maybeQuote}${filePath}${maybeQuote})`;
    }
    if (DATA_URI.test(filePath)) {
      return `url(${maybeQuote}${filePath}${maybeQuote})`;
    }
    if (filePath[0] === "/") {
      return `url(${maybeQuote}${extractOrigin(href) + filePath}${maybeQuote})`;
    }
    const stack = href.split("/");
    const parts = filePath.split("/");
    stack.pop();
    for (const part of parts) {
      if (part === ".") {
        continue;
      } else if (part === "..") {
        stack.pop();
      } else {
        stack.push(part);
      }
    }
    return `url(${maybeQuote}${stack.join("/")}${maybeQuote})`;
  });
}
var SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
var SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
  if (attributeValue.trim() === "") {
    return attributeValue;
  }
  let pos = 0;
  function collectCharacters(regEx) {
    let chars2;
    const match = regEx.exec(attributeValue.substring(pos));
    if (match) {
      chars2 = match[0];
      pos += chars2.length;
      return chars2;
    }
    return "";
  }
  const output = [];
  while (true) {
    collectCharacters(SRCSET_COMMAS_OR_SPACES);
    if (pos >= attributeValue.length) {
      break;
    }
    let url = collectCharacters(SRCSET_NOT_SPACES);
    if (url.slice(-1) === ",") {
      url = absoluteToDoc(doc, url.substring(0, url.length - 1));
      output.push(url);
    } else {
      let descriptorsStr = "";
      url = absoluteToDoc(doc, url);
      let inParens = false;
      while (true) {
        const c2 = attributeValue.charAt(pos);
        if (c2 === "") {
          output.push((url + descriptorsStr).trim());
          break;
        } else if (!inParens) {
          if (c2 === ",") {
            pos += 1;
            output.push((url + descriptorsStr).trim());
            break;
          } else if (c2 === "(") {
            inParens = true;
          }
        } else {
          if (c2 === ")") {
            inParens = false;
          }
        }
        descriptorsStr += c2;
        pos += 1;
      }
    }
  }
  return output.join(", ");
}
var cachedDocument = /* @__PURE__ */ new WeakMap();
function absoluteToDoc(doc, attributeValue) {
  if (!attributeValue || attributeValue.trim() === "") {
    return attributeValue;
  }
  return getHref(doc, attributeValue);
}
function isSVGElement(el) {
  return Boolean(el.tagName === "svg" || el.ownerSVGElement);
}
function getHref(doc, customHref) {
  let a2 = cachedDocument.get(doc);
  if (!a2) {
    a2 = doc.createElement("a");
    cachedDocument.set(doc, a2);
  }
  if (!customHref) {
    customHref = "";
  } else if (customHref.startsWith("blob:") || customHref.startsWith("data:")) {
    return customHref;
  }
  a2.setAttribute("href", customHref);
  return a2.href;
}
function transformAttribute(doc, tagName, name, value, element, maskAttributeFn) {
  if (!value) {
    return value;
  }
  if (name === "src" || name === "href" && !(tagName === "use" && value[0] === "#")) {
    return absoluteToDoc(doc, value);
  } else if (name === "xlink:href" && value[0] !== "#") {
    return absoluteToDoc(doc, value);
  } else if (name === "background" && (tagName === "table" || tagName === "td" || tagName === "th")) {
    return absoluteToDoc(doc, value);
  } else if (name === "srcset") {
    return getAbsoluteSrcsetString(doc, value);
  } else if (name === "style") {
    return absoluteToStylesheet(value, getHref(doc));
  } else if (tagName === "object" && name === "data") {
    return absoluteToDoc(doc, value);
  }
  if (typeof maskAttributeFn === "function") {
    return maskAttributeFn(name, value, element);
  }
  return value;
}
function ignoreAttribute(tagName, name, _value) {
  return (tagName === "video" || tagName === "audio") && name === "autoplay";
}
function _isBlockedElement(element, blockClass, blockSelector, unblockSelector) {
  try {
    if (unblockSelector && element.matches(unblockSelector)) {
      return false;
    }
    if (typeof blockClass === "string") {
      if (element.classList.contains(blockClass)) {
        return true;
      }
    } else {
      for (let eIndex = element.classList.length; eIndex--; ) {
        const className = element.classList[eIndex];
        if (blockClass.test(className)) {
          return true;
        }
      }
    }
    if (blockSelector) {
      return element.matches(blockSelector);
    }
  } catch (e2) {
  }
  return false;
}
function elementClassMatchesRegex(el, regex) {
  for (let eIndex = el.classList.length; eIndex--; ) {
    const className = el.classList[eIndex];
    if (regex.test(className)) {
      return true;
    }
  }
  return false;
}
function distanceToMatch(node, matchPredicate, limit = Infinity, distance = 0) {
  if (!node) return -1;
  if (node.nodeType !== node.ELEMENT_NODE) return -1;
  if (distance > limit) return -1;
  if (matchPredicate(node)) return distance;
  return distanceToMatch(node.parentNode, matchPredicate, limit, distance + 1);
}
function createMatchPredicate(className, selector) {
  return (node) => {
    const el = node;
    if (el === null) return false;
    try {
      if (className) {
        if (typeof className === "string") {
          if (el.matches(`.${className}`)) return true;
        } else if (elementClassMatchesRegex(el, className)) {
          return true;
        }
      }
      if (selector && el.matches(selector)) return true;
      return false;
    } catch {
      return false;
    }
  };
}
function needMaskingText(node, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, maskAllText) {
  try {
    const el = node.nodeType === node.ELEMENT_NODE ? node : node.parentElement;
    if (el === null) return false;
    if (el.tagName === "INPUT") {
      const autocomplete = el.getAttribute("autocomplete");
      const disallowedAutocompleteValues = ["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"];
      if (disallowedAutocompleteValues.includes(autocomplete)) {
        return true;
      }
    }
    let maskDistance = -1;
    let unmaskDistance = -1;
    if (maskAllText) {
      unmaskDistance = distanceToMatch(el, createMatchPredicate(unmaskTextClass, unmaskTextSelector));
      if (unmaskDistance < 0) {
        return true;
      }
      maskDistance = distanceToMatch(el, createMatchPredicate(maskTextClass, maskTextSelector), unmaskDistance >= 0 ? unmaskDistance : Infinity);
    } else {
      maskDistance = distanceToMatch(el, createMatchPredicate(maskTextClass, maskTextSelector));
      if (maskDistance < 0) {
        return false;
      }
      unmaskDistance = distanceToMatch(el, createMatchPredicate(unmaskTextClass, unmaskTextSelector), maskDistance >= 0 ? maskDistance : Infinity);
    }
    return maskDistance >= 0 ? unmaskDistance >= 0 ? maskDistance <= unmaskDistance : true : unmaskDistance >= 0 ? false : !!maskAllText;
  } catch (e2) {
  }
  return !!maskAllText;
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
  const win = iframeEl.contentWindow;
  if (!win) {
    return;
  }
  let fired = false;
  let readyState;
  try {
    readyState = win.document.readyState;
  } catch (error) {
    return;
  }
  if (readyState !== "complete") {
    const timer = setTimeout$2(() => {
      if (!fired) {
        listener();
        fired = true;
      }
    }, iframeLoadTimeout);
    iframeEl.addEventListener("load", () => {
      clearTimeout$1(timer);
      fired = true;
      listener();
    });
    return;
  }
  const blankUrl = "about:blank";
  if (win.location.href !== blankUrl || iframeEl.src === blankUrl || iframeEl.src === "") {
    setTimeout$2(listener, 0);
    return iframeEl.addEventListener("load", listener);
  }
  iframeEl.addEventListener("load", listener);
}
function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
  let fired = false;
  let styleSheetLoaded;
  try {
    styleSheetLoaded = link.sheet;
  } catch (error) {
    return;
  }
  if (styleSheetLoaded) return;
  const timer = setTimeout$2(() => {
    if (!fired) {
      listener();
      fired = true;
    }
  }, styleSheetLoadTimeout);
  link.addEventListener("load", () => {
    clearTimeout$1(timer);
    fired = true;
    listener();
  });
}
function serializeNode(n2, options) {
  const {
    doc,
    mirror: mirror2,
    blockClass,
    blockSelector,
    unblockSelector,
    maskAllText,
    maskAttributeFn,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    inlineStylesheet,
    maskInputOptions = {},
    maskTextFn,
    maskInputFn,
    dataURLOptions = {},
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement = false
  } = options;
  const rootId = getRootId(doc, mirror2);
  switch (n2.nodeType) {
    case n2.DOCUMENT_NODE:
      if (n2.compatMode !== "CSS1Compat") {
        return {
          type: NodeType$2.Document,
          childNodes: [],
          compatMode: n2.compatMode
          // probably "BackCompat"
        };
      } else {
        return {
          type: NodeType$2.Document,
          childNodes: []
        };
      }
    case n2.DOCUMENT_TYPE_NODE:
      return {
        type: NodeType$2.DocumentType,
        name: n2.name,
        publicId: n2.publicId,
        systemId: n2.systemId,
        rootId
      };
    case n2.ELEMENT_NODE:
      return serializeElementNode(n2, {
        doc,
        blockClass,
        blockSelector,
        unblockSelector,
        inlineStylesheet,
        maskAttributeFn,
        maskInputOptions,
        maskInputFn,
        dataURLOptions,
        inlineImages,
        recordCanvas,
        keepIframeSrcFn,
        newlyAddedElement,
        rootId,
        maskTextClass,
        unmaskTextClass,
        maskTextSelector,
        unmaskTextSelector
      });
    case n2.TEXT_NODE:
      return serializeTextNode(n2, {
        doc,
        maskAllText,
        maskTextClass,
        unmaskTextClass,
        maskTextSelector,
        unmaskTextSelector,
        maskTextFn,
        maskInputOptions,
        maskInputFn,
        rootId
      });
    case n2.CDATA_SECTION_NODE:
      return {
        type: NodeType$2.CDATA,
        textContent: "",
        rootId
      };
    case n2.COMMENT_NODE:
      return {
        type: NodeType$2.Comment,
        textContent: n2.textContent || "",
        rootId
      };
    default:
      return false;
  }
}
function getRootId(doc, mirror2) {
  if (!mirror2.hasNode(doc)) return void 0;
  const docId = mirror2.getId(doc);
  return docId === 1 ? void 0 : docId;
}
function serializeTextNode(n2, options) {
  const {
    maskAllText,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    maskTextFn,
    maskInputOptions,
    maskInputFn,
    rootId
  } = options;
  const parentTagName = n2.parentNode && n2.parentNode.tagName;
  let textContent = n2.textContent;
  const isStyle = parentTagName === "STYLE" ? true : void 0;
  const isScript = parentTagName === "SCRIPT" ? true : void 0;
  const isTextarea = parentTagName === "TEXTAREA" ? true : void 0;
  if (isStyle && textContent) {
    try {
      if (n2.nextSibling || n2.previousSibling) {
      } else if (n2.parentNode.sheet?.cssRules) {
        textContent = stringifyStylesheet(n2.parentNode.sheet);
      }
    } catch (err) {
      console.warn(`Cannot get CSS styles from text's parentNode. Error: ${err}`, n2);
    }
    textContent = absoluteToStylesheet(textContent, getHref(options.doc));
  }
  if (isScript) {
    textContent = "SCRIPT_PLACEHOLDER";
  }
  const forceMask = needMaskingText(n2, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, maskAllText);
  if (!isStyle && !isScript && !isTextarea && textContent && forceMask) {
    textContent = maskTextFn ? maskTextFn(textContent, n2.parentElement) : textContent.replace(/[\S]/g, "*");
  }
  if (isTextarea && textContent && (maskInputOptions.textarea || forceMask)) {
    textContent = maskInputFn ? maskInputFn(textContent, n2.parentNode) : textContent.replace(/[\S]/g, "*");
  }
  if (parentTagName === "OPTION" && textContent) {
    const isInputMasked = shouldMaskInput({
      type: null,
      tagName: parentTagName,
      maskInputOptions
    });
    textContent = maskInputValue({
      isMasked: needMaskingText(n2, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, isInputMasked),
      element: n2,
      value: textContent,
      maskInputFn
    });
  }
  return {
    type: NodeType$2.Text,
    textContent: textContent || "",
    isStyle,
    rootId
  };
}
function serializeElementNode(n2, options) {
  const {
    doc,
    blockClass,
    blockSelector,
    unblockSelector,
    inlineStylesheet,
    maskInputOptions = {},
    maskAttributeFn,
    maskInputFn,
    dataURLOptions = {},
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement = false,
    rootId,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector
  } = options;
  const needBlock = _isBlockedElement(n2, blockClass, blockSelector, unblockSelector);
  const tagName = getValidTagName$1(n2);
  let attributes2 = {};
  const len = n2.attributes.length;
  for (let i2 = 0; i2 < len; i2++) {
    const attr = n2.attributes[i2];
    if (attr.name && !ignoreAttribute(tagName, attr.name, attr.value)) {
      attributes2[attr.name] = transformAttribute(doc, tagName, toLowerCase(attr.name), attr.value, n2, maskAttributeFn);
    }
  }
  if (tagName === "link" && inlineStylesheet) {
    const stylesheet = Array.from(doc.styleSheets).find((s2) => {
      return s2.href === n2.href;
    });
    let cssText = null;
    if (stylesheet) {
      cssText = stringifyStylesheet(stylesheet);
    }
    if (cssText) {
      attributes2.rel = null;
      attributes2.href = null;
      attributes2.crossorigin = null;
      attributes2._cssText = absoluteToStylesheet(cssText, stylesheet.href);
    }
  }
  if (tagName === "style" && n2.sheet && // TODO: Currently we only try to get dynamic stylesheet when it is an empty style element
  !(n2.innerText || n2.textContent || "").trim().length) {
    const cssText = stringifyStylesheet(n2.sheet);
    if (cssText) {
      attributes2._cssText = absoluteToStylesheet(cssText, getHref(doc));
    }
  }
  if (tagName === "input" || tagName === "textarea" || tagName === "select" || tagName === "option") {
    const el = n2;
    const type = getInputType(el);
    const value = getInputValue(el, toUpperCase(tagName), type);
    const checked = el.checked;
    if (type !== "submit" && type !== "button" && value) {
      const forceMask = needMaskingText(el, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, shouldMaskInput({
        type,
        tagName: toUpperCase(tagName),
        maskInputOptions
      }));
      attributes2.value = maskInputValue({
        isMasked: forceMask,
        element: el,
        value,
        maskInputFn
      });
    }
    if (checked) {
      attributes2.checked = checked;
    }
  }
  if (tagName === "option") {
    if (n2.selected && !maskInputOptions["select"]) {
      attributes2.selected = true;
    } else {
      delete attributes2.selected;
    }
  }
  if (tagName === "canvas" && recordCanvas) {
    if (n2.__context === "2d") {
      if (!is2DCanvasBlank(n2)) {
        attributes2.rr_dataURL = n2.toDataURL(dataURLOptions.type, dataURLOptions.quality);
      }
    } else if (!("__context" in n2)) {
      const canvasDataURL = n2.toDataURL(dataURLOptions.type, dataURLOptions.quality);
      const blankCanvas = doc.createElement("canvas");
      blankCanvas.width = n2.width;
      blankCanvas.height = n2.height;
      const blankCanvasDataURL = blankCanvas.toDataURL(dataURLOptions.type, dataURLOptions.quality);
      if (canvasDataURL !== blankCanvasDataURL) {
        attributes2.rr_dataURL = canvasDataURL;
      }
    }
  }
  if (tagName === "img" && inlineImages) {
    if (!canvasService) {
      canvasService = doc.createElement("canvas");
      canvasCtx = canvasService.getContext("2d");
    }
    const image = n2;
    const imageSrc = image.currentSrc || image.getAttribute("src") || "<unknown-src>";
    const priorCrossOrigin = image.crossOrigin;
    const recordInlineImage = () => {
      image.removeEventListener("load", recordInlineImage);
      try {
        canvasService.width = image.naturalWidth;
        canvasService.height = image.naturalHeight;
        canvasCtx.drawImage(image, 0, 0);
        attributes2.rr_dataURL = canvasService.toDataURL(dataURLOptions.type, dataURLOptions.quality);
      } catch (err) {
        if (image.crossOrigin !== "anonymous") {
          image.crossOrigin = "anonymous";
          if (image.complete && image.naturalWidth !== 0) recordInlineImage();
          else image.addEventListener("load", recordInlineImage);
          return;
        } else {
          console.warn(`Cannot inline img src=${imageSrc}! Error: ${err}`);
        }
      }
      if (image.crossOrigin === "anonymous") {
        priorCrossOrigin ? attributes2.crossOrigin = priorCrossOrigin : image.removeAttribute("crossorigin");
      }
    };
    if (image.complete && image.naturalWidth !== 0) recordInlineImage();
    else image.addEventListener("load", recordInlineImage);
  }
  if (tagName === "audio" || tagName === "video") {
    attributes2.rr_mediaState = n2.paused ? "paused" : "played";
    attributes2.rr_mediaCurrentTime = n2.currentTime;
  }
  if (!newlyAddedElement) {
    if (n2.scrollLeft) {
      attributes2.rr_scrollLeft = n2.scrollLeft;
    }
    if (n2.scrollTop) {
      attributes2.rr_scrollTop = n2.scrollTop;
    }
  }
  if (needBlock) {
    const {
      width,
      height
    } = n2.getBoundingClientRect();
    attributes2 = {
      class: attributes2.class,
      rr_width: `${width}px`,
      rr_height: `${height}px`
    };
  }
  if (tagName === "iframe" && !keepIframeSrcFn(attributes2.src)) {
    if (!needBlock && !getIframeContentDocument(n2)) {
      attributes2.rr_src = attributes2.src;
    }
    delete attributes2.src;
  }
  let isCustomElement;
  try {
    if (customElements.get(tagName)) isCustomElement = true;
  } catch (e2) {
  }
  return {
    type: NodeType$2.Element,
    tagName,
    attributes: attributes2,
    childNodes: [],
    isSVG: isSVGElement(n2) || void 0,
    needBlock,
    rootId,
    isCustom: isCustomElement
  };
}
function lowerIfExists(maybeAttr) {
  if (maybeAttr === void 0 || maybeAttr === null) {
    return "";
  } else {
    return maybeAttr.toLowerCase();
  }
}
function slimDOMExcluded(sn, slimDOMOptions) {
  if (slimDOMOptions.comment && sn.type === NodeType$2.Comment) {
    return true;
  } else if (sn.type === NodeType$2.Element) {
    if (slimDOMOptions.script && // script tag
    (sn.tagName === "script" || // (module)preload link
    sn.tagName === "link" && (sn.attributes.rel === "preload" || sn.attributes.rel === "modulepreload") || // prefetch link
    sn.tagName === "link" && sn.attributes.rel === "prefetch" && typeof sn.attributes.href === "string" && extractFileExtension(sn.attributes.href) === "js")) {
      return true;
    } else if (slimDOMOptions.headFavicon && (sn.tagName === "link" && sn.attributes.rel === "shortcut icon" || sn.tagName === "meta" && (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) || lowerIfExists(sn.attributes.name) === "application-name" || lowerIfExists(sn.attributes.rel) === "icon" || lowerIfExists(sn.attributes.rel) === "apple-touch-icon" || lowerIfExists(sn.attributes.rel) === "shortcut icon"))) {
      return true;
    } else if (sn.tagName === "meta") {
      if (slimDOMOptions.headMetaDescKeywords && lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
        return true;
      } else if (slimDOMOptions.headMetaSocial && (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) || // og = opengraph (facebook)
      lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) || lowerIfExists(sn.attributes.name) === "pinterest")) {
        return true;
      } else if (slimDOMOptions.headMetaRobots && (lowerIfExists(sn.attributes.name) === "robots" || lowerIfExists(sn.attributes.name) === "googlebot" || lowerIfExists(sn.attributes.name) === "bingbot")) {
        return true;
      } else if (slimDOMOptions.headMetaHttpEquiv && sn.attributes["http-equiv"] !== void 0) {
        return true;
      } else if (slimDOMOptions.headMetaAuthorship && (lowerIfExists(sn.attributes.name) === "author" || lowerIfExists(sn.attributes.name) === "generator" || lowerIfExists(sn.attributes.name) === "framework" || lowerIfExists(sn.attributes.name) === "publisher" || lowerIfExists(sn.attributes.name) === "progid" || lowerIfExists(sn.attributes.property).match(/^article:/) || lowerIfExists(sn.attributes.property).match(/^product:/))) {
        return true;
      } else if (slimDOMOptions.headMetaVerification && (lowerIfExists(sn.attributes.name) === "google-site-verification" || lowerIfExists(sn.attributes.name) === "yandex-verification" || lowerIfExists(sn.attributes.name) === "csrf-token" || lowerIfExists(sn.attributes.name) === "p:domain_verify" || lowerIfExists(sn.attributes.name) === "verify-v1" || lowerIfExists(sn.attributes.name) === "verification" || lowerIfExists(sn.attributes.name) === "shopify-checkout-api-token")) {
        return true;
      }
    }
  }
  return false;
}
function serializeNodeWithId(n2, options) {
  const {
    doc,
    mirror: mirror2,
    blockClass,
    blockSelector,
    unblockSelector,
    maskAllText,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    skipChild = false,
    inlineStylesheet = true,
    maskInputOptions = {},
    maskAttributeFn,
    maskTextFn,
    maskInputFn,
    slimDOMOptions,
    dataURLOptions = {},
    inlineImages = false,
    recordCanvas = false,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout = 5e3,
    onStylesheetLoad,
    stylesheetLoadTimeout = 5e3,
    keepIframeSrcFn = () => false,
    newlyAddedElement = false
  } = options;
  let {
    preserveWhiteSpace = true
  } = options;
  const _serializedNode = serializeNode(n2, {
    doc,
    mirror: mirror2,
    blockClass,
    blockSelector,
    maskAllText,
    unblockSelector,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    inlineStylesheet,
    maskInputOptions,
    maskAttributeFn,
    maskTextFn,
    maskInputFn,
    dataURLOptions,
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement
  });
  if (!_serializedNode) {
    console.warn(n2, "not serialized");
    return null;
  }
  let id;
  if (mirror2.hasNode(n2)) {
    id = mirror2.getId(n2);
  } else if (slimDOMExcluded(_serializedNode, slimDOMOptions) || !preserveWhiteSpace && _serializedNode.type === NodeType$2.Text && !_serializedNode.isStyle && !_serializedNode.textContent.replace(/^\s+|\s+$/gm, "").length) {
    id = IGNORED_NODE;
  } else {
    id = genId();
  }
  const serializedNode2 = Object.assign(_serializedNode, {
    id
  });
  mirror2.add(n2, serializedNode2);
  if (id === IGNORED_NODE) {
    return null;
  }
  if (onSerialize) {
    onSerialize(n2);
  }
  let recordChild = !skipChild;
  if (serializedNode2.type === NodeType$2.Element) {
    recordChild = recordChild && !serializedNode2.needBlock;
    delete serializedNode2.needBlock;
    const shadowRoot = n2.shadowRoot;
    if (shadowRoot && isNativeShadowDom(shadowRoot)) serializedNode2.isShadowHost = true;
  }
  if ((serializedNode2.type === NodeType$2.Document || serializedNode2.type === NodeType$2.Element) && recordChild) {
    if (slimDOMOptions.headWhitespace && serializedNode2.type === NodeType$2.Element && serializedNode2.tagName === "head") {
      preserveWhiteSpace = false;
    }
    const bypassOptions = {
      doc,
      mirror: mirror2,
      blockClass,
      blockSelector,
      maskAllText,
      unblockSelector,
      maskTextClass,
      unmaskTextClass,
      maskTextSelector,
      unmaskTextSelector,
      skipChild,
      inlineStylesheet,
      maskInputOptions,
      maskAttributeFn,
      maskTextFn,
      maskInputFn,
      slimDOMOptions,
      dataURLOptions,
      inlineImages,
      recordCanvas,
      preserveWhiteSpace,
      onSerialize,
      onIframeLoad,
      iframeLoadTimeout,
      onStylesheetLoad,
      stylesheetLoadTimeout,
      keepIframeSrcFn
    };
    for (const childN of Array.from(n2.childNodes)) {
      const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
      if (serializedChildNode) {
        serializedNode2.childNodes.push(serializedChildNode);
      }
    }
    if (isElement$1(n2) && n2.shadowRoot) {
      for (const childN of Array.from(n2.shadowRoot.childNodes)) {
        const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
        if (serializedChildNode) {
          isNativeShadowDom(n2.shadowRoot) && (serializedChildNode.isShadow = true);
          serializedNode2.childNodes.push(serializedChildNode);
        }
      }
    }
  }
  if (n2.parentNode && isShadowRoot(n2.parentNode) && isNativeShadowDom(n2.parentNode)) {
    serializedNode2.isShadow = true;
  }
  if (serializedNode2.type === NodeType$2.Element && serializedNode2.tagName === "iframe" && !_isBlockedElement(n2, blockClass, blockSelector, unblockSelector)) {
    onceIframeLoaded(n2, () => {
      const iframeDoc = getIframeContentDocument(n2);
      if (iframeDoc && onIframeLoad) {
        const serializedIframeNode = serializeNodeWithId(iframeDoc, {
          doc: iframeDoc,
          mirror: mirror2,
          blockClass,
          blockSelector,
          unblockSelector,
          maskAllText,
          maskTextClass,
          unmaskTextClass,
          maskTextSelector,
          unmaskTextSelector,
          skipChild: false,
          inlineStylesheet,
          maskInputOptions,
          maskAttributeFn,
          maskTextFn,
          maskInputFn,
          slimDOMOptions,
          dataURLOptions,
          inlineImages,
          recordCanvas,
          preserveWhiteSpace,
          onSerialize,
          onIframeLoad,
          iframeLoadTimeout,
          onStylesheetLoad,
          stylesheetLoadTimeout,
          keepIframeSrcFn
        });
        if (serializedIframeNode) {
          onIframeLoad(n2, serializedIframeNode);
        }
      }
    }, iframeLoadTimeout);
  }
  if (serializedNode2.type === NodeType$2.Element && serializedNode2.tagName === "link" && typeof serializedNode2.attributes.rel === "string" && (serializedNode2.attributes.rel === "stylesheet" || serializedNode2.attributes.rel === "preload" && typeof serializedNode2.attributes.href === "string" && extractFileExtension(serializedNode2.attributes.href) === "css")) {
    onceStylesheetLoaded(n2, () => {
      if (onStylesheetLoad) {
        const serializedLinkNode = serializeNodeWithId(n2, {
          doc,
          mirror: mirror2,
          blockClass,
          blockSelector,
          unblockSelector,
          maskAllText,
          maskTextClass,
          unmaskTextClass,
          maskTextSelector,
          unmaskTextSelector,
          skipChild: false,
          inlineStylesheet,
          maskInputOptions,
          maskAttributeFn,
          maskTextFn,
          maskInputFn,
          slimDOMOptions,
          dataURLOptions,
          inlineImages,
          recordCanvas,
          preserveWhiteSpace,
          onSerialize,
          onIframeLoad,
          iframeLoadTimeout,
          onStylesheetLoad,
          stylesheetLoadTimeout,
          keepIframeSrcFn
        });
        if (serializedLinkNode) {
          onStylesheetLoad(n2, serializedLinkNode);
        }
      }
    }, stylesheetLoadTimeout);
  }
  return serializedNode2;
}
function snapshot(n2, options) {
  const {
    mirror: mirror2 = new Mirror(),
    blockClass = "rr-block",
    blockSelector = null,
    unblockSelector = null,
    maskAllText = false,
    maskTextClass = "rr-mask",
    unmaskTextClass = null,
    maskTextSelector = null,
    unmaskTextSelector = null,
    inlineStylesheet = true,
    inlineImages = false,
    recordCanvas = false,
    maskAllInputs = false,
    maskAttributeFn,
    maskTextFn,
    maskInputFn,
    slimDOM = false,
    dataURLOptions,
    preserveWhiteSpace,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout,
    onStylesheetLoad,
    stylesheetLoadTimeout,
    keepIframeSrcFn = () => false
  } = options || {};
  const maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true
  } : maskAllInputs === false ? {} : maskAllInputs;
  const slimDOMOptions = slimDOM === true || slimDOM === "all" ? (
    // if true: set of sensible options that should not throw away any information
    {
      script: true,
      comment: true,
      headFavicon: true,
      headWhitespace: true,
      headMetaDescKeywords: slimDOM === "all",
      // destructive
      headMetaSocial: true,
      headMetaRobots: true,
      headMetaHttpEquiv: true,
      headMetaAuthorship: true,
      headMetaVerification: true
    }
  ) : slimDOM === false ? {} : slimDOM;
  return serializeNodeWithId(n2, {
    doc: n2,
    mirror: mirror2,
    blockClass,
    blockSelector,
    unblockSelector,
    maskAllText,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    skipChild: false,
    inlineStylesheet,
    maskInputOptions,
    maskAttributeFn,
    maskTextFn,
    maskInputFn,
    slimDOMOptions,
    dataURLOptions,
    inlineImages,
    recordCanvas,
    preserveWhiteSpace,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout,
    onStylesheetLoad,
    stylesheetLoadTimeout,
    keepIframeSrcFn,
    newlyAddedElement: false
  });
}
function on(type, fn, target = document) {
  const options = {
    capture: true,
    passive: true
  };
  target.addEventListener(type, fn, options);
  return () => target.removeEventListener(type, fn, options);
}
var DEPARTED_MIRROR_ACCESS_WARNING = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
var _mirror = {
  map: {},
  getId() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return -1;
  },
  getNode() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return null;
  },
  removeNodeFromMap() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
  },
  has() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return false;
  },
  reset() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
  }
};
if (typeof window !== "undefined" && window.Proxy && window.Reflect) {
  _mirror = new Proxy(_mirror, {
    get(target, prop, receiver) {
      if (prop === "map") {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}
function throttle$1(func, wait, options = {}) {
  let timeout = null;
  let previous = 0;
  return function(...args) {
    const now = Date.now();
    if (!previous && options.leading === false) {
      previous = now;
    }
    const remaining = wait - (now - previous);
    const context = this;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout$2(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout$1(() => {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        func.apply(context, args);
      }, remaining);
    }
  };
}
function hookSetter(target, key, d, isRevoked, win = window) {
  const original = win.Object.getOwnPropertyDescriptor(target, key);
  win.Object.defineProperty(target, key, isRevoked ? d : {
    set(value) {
      setTimeout$1(() => {
        d.set.call(this, value);
      }, 0);
      if (original && original.set) {
        original.set.call(this, value);
      }
    }
  });
  return () => hookSetter(target, key, original || {}, true);
}
function patch(source, name, replacement) {
  try {
    if (!(name in source)) {
      return () => {
      };
    }
    const original = source[name];
    const wrapped = replacement(original);
    if (typeof wrapped === "function") {
      wrapped.prototype = wrapped.prototype || {};
      Object.defineProperties(wrapped, {
        __rrweb_original__: {
          enumerable: false,
          value: original
        }
      });
    }
    source[name] = wrapped;
    return () => {
      source[name] = original;
    };
  } catch {
    return () => {
    };
  }
}
var nowTimestamp = Date.now;
if (!/* @__PURE__ */ /[1-9][0-9]{12}/.test(Date.now().toString())) {
  nowTimestamp = () => (/* @__PURE__ */ new Date()).getTime();
}
function getWindowScroll(win) {
  const doc = win.document;
  return {
    left: doc.scrollingElement ? doc.scrollingElement.scrollLeft : win.pageXOffset !== void 0 ? win.pageXOffset : doc?.documentElement.scrollLeft || doc?.body?.parentElement?.scrollLeft || doc?.body?.scrollLeft || 0,
    top: doc.scrollingElement ? doc.scrollingElement.scrollTop : win.pageYOffset !== void 0 ? win.pageYOffset : doc?.documentElement.scrollTop || doc?.body?.parentElement?.scrollTop || doc?.body?.scrollTop || 0
  };
}
function getWindowHeight() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}
function getWindowWidth() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}
function closestElementOfNode(node) {
  if (!node) {
    return null;
  }
  try {
    const el = node.nodeType === node.ELEMENT_NODE ? node : node.parentElement;
    return el;
  } catch (error) {
    return null;
  }
}
function isBlocked(node, blockClass, blockSelector, unblockSelector, checkAncestors) {
  if (!node) {
    return false;
  }
  const el = closestElementOfNode(node);
  if (!el) {
    return false;
  }
  const blockedPredicate = createMatchPredicate(blockClass, blockSelector);
  if (!checkAncestors) {
    const isUnblocked = unblockSelector && el.matches(unblockSelector);
    return blockedPredicate(el) && !isUnblocked;
  }
  const blockDistance = distanceToMatch(el, blockedPredicate);
  let unblockDistance = -1;
  if (blockDistance < 0) {
    return false;
  }
  if (unblockSelector) {
    unblockDistance = distanceToMatch(el, createMatchPredicate(null, unblockSelector));
  }
  if (blockDistance > -1 && unblockDistance < 0) {
    return true;
  }
  return blockDistance < unblockDistance;
}
function isSerialized(n2, mirror2) {
  return mirror2.getId(n2) !== -1;
}
function isIgnored(n2, mirror2) {
  return mirror2.getId(n2) === IGNORED_NODE;
}
function isAncestorRemoved(target, mirror2) {
  if (isShadowRoot(target)) {
    return false;
  }
  const id = mirror2.getId(target);
  if (!mirror2.has(id)) {
    return true;
  }
  if (target.parentNode && target.parentNode.nodeType === target.DOCUMENT_NODE) {
    return false;
  }
  if (!target.parentNode) {
    return true;
  }
  return isAncestorRemoved(target.parentNode, mirror2);
}
function legacy_isTouchEvent(event) {
  return Boolean(event.changedTouches);
}
function polyfill$1(win = window) {
  if ("NodeList" in win && !win.NodeList.prototype.forEach) {
    win.NodeList.prototype.forEach = Array.prototype.forEach;
  }
  if ("DOMTokenList" in win && !win.DOMTokenList.prototype.forEach) {
    win.DOMTokenList.prototype.forEach = Array.prototype.forEach;
  }
  if (!Node.prototype.contains) {
    Node.prototype.contains = (...args) => {
      let node = args[0];
      if (!(0 in args)) {
        throw new TypeError("1 argument is required");
      }
      do {
        if (this === node) {
          return true;
        }
      } while (node = node && node.parentNode);
      return false;
    };
  }
}
function isSerializedIframe(n2, mirror2) {
  return Boolean(n2.nodeName === "IFRAME" && mirror2.getMeta(n2));
}
function isSerializedStylesheet(n2, mirror2) {
  return Boolean(n2.nodeName === "LINK" && n2.nodeType === n2.ELEMENT_NODE && n2.getAttribute && n2.getAttribute("rel") === "stylesheet" && mirror2.getMeta(n2));
}
function hasShadowRoot(n2) {
  return Boolean(n2?.shadowRoot);
}
var StyleSheetMirror = class {
  constructor() {
    this.id = 1;
    this.styleIDMap = /* @__PURE__ */ new WeakMap();
    this.idStyleMap = /* @__PURE__ */ new Map();
  }
  getId(stylesheet) {
    return this.styleIDMap.get(stylesheet) ?? -1;
  }
  has(stylesheet) {
    return this.styleIDMap.has(stylesheet);
  }
  /**
   * @returns If the stylesheet is in the mirror, returns the id of the stylesheet. If not, return the new assigned id.
   */
  add(stylesheet, id) {
    if (this.has(stylesheet)) return this.getId(stylesheet);
    let newId;
    if (id === void 0) {
      newId = this.id++;
    } else newId = id;
    this.styleIDMap.set(stylesheet, newId);
    this.idStyleMap.set(newId, stylesheet);
    return newId;
  }
  getStyle(id) {
    return this.idStyleMap.get(id) || null;
  }
  reset() {
    this.styleIDMap = /* @__PURE__ */ new WeakMap();
    this.idStyleMap = /* @__PURE__ */ new Map();
    this.id = 1;
  }
  generateId() {
    return this.id++;
  }
};
function getShadowHost(n2) {
  let shadowHost = null;
  if (n2.getRootNode?.()?.nodeType === Node.DOCUMENT_FRAGMENT_NODE && n2.getRootNode().host) shadowHost = n2.getRootNode().host;
  return shadowHost;
}
function getRootShadowHost(n2) {
  let rootShadowHost = n2;
  let shadowHost;
  while (shadowHost = getShadowHost(rootShadowHost)) rootShadowHost = shadowHost;
  return rootShadowHost;
}
function shadowHostInDom(n2) {
  const doc = n2.ownerDocument;
  if (!doc) return false;
  const shadowHost = getRootShadowHost(n2);
  return doc.contains(shadowHost);
}
function inDom(n2) {
  const doc = n2.ownerDocument;
  if (!doc) return false;
  return doc.contains(n2) || shadowHostInDom(n2);
}
var cachedImplementations2 = {};
function getImplementation(name) {
  const cached = cachedImplementations2[name];
  if (cached) {
    return cached;
  }
  const document2 = window.document;
  let impl = window[name];
  if (document2 && typeof document2.createElement === "function") {
    try {
      const sandbox = document2.createElement("iframe");
      sandbox.hidden = true;
      document2.head.appendChild(sandbox);
      const contentWindow = sandbox.contentWindow;
      if (contentWindow && contentWindow[name]) {
        impl = // eslint-disable-next-line @typescript-eslint/unbound-method
        contentWindow[name];
      }
      document2.head.removeChild(sandbox);
    } catch (e2) {
    }
  }
  return cachedImplementations2[name] = impl.bind(window);
}
function onRequestAnimationFrame(...rest) {
  return getImplementation("requestAnimationFrame")(...rest);
}
function setTimeout$1(...rest) {
  return getImplementation("setTimeout")(...rest);
}
function clearTimeout$2(...rest) {
  return getImplementation("clearTimeout")(...rest);
}
var EventType = /* @__PURE__ */ ((EventType2) => {
  EventType2[EventType2["DomContentLoaded"] = 0] = "DomContentLoaded";
  EventType2[EventType2["Load"] = 1] = "Load";
  EventType2[EventType2["FullSnapshot"] = 2] = "FullSnapshot";
  EventType2[EventType2["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
  EventType2[EventType2["Meta"] = 4] = "Meta";
  EventType2[EventType2["Custom"] = 5] = "Custom";
  EventType2[EventType2["Plugin"] = 6] = "Plugin";
  return EventType2;
})(EventType || {});
var IncrementalSource = /* @__PURE__ */ ((IncrementalSource2) => {
  IncrementalSource2[IncrementalSource2["Mutation"] = 0] = "Mutation";
  IncrementalSource2[IncrementalSource2["MouseMove"] = 1] = "MouseMove";
  IncrementalSource2[IncrementalSource2["MouseInteraction"] = 2] = "MouseInteraction";
  IncrementalSource2[IncrementalSource2["Scroll"] = 3] = "Scroll";
  IncrementalSource2[IncrementalSource2["ViewportResize"] = 4] = "ViewportResize";
  IncrementalSource2[IncrementalSource2["Input"] = 5] = "Input";
  IncrementalSource2[IncrementalSource2["TouchMove"] = 6] = "TouchMove";
  IncrementalSource2[IncrementalSource2["MediaInteraction"] = 7] = "MediaInteraction";
  IncrementalSource2[IncrementalSource2["StyleSheetRule"] = 8] = "StyleSheetRule";
  IncrementalSource2[IncrementalSource2["CanvasMutation"] = 9] = "CanvasMutation";
  IncrementalSource2[IncrementalSource2["Font"] = 10] = "Font";
  IncrementalSource2[IncrementalSource2["Log"] = 11] = "Log";
  IncrementalSource2[IncrementalSource2["Drag"] = 12] = "Drag";
  IncrementalSource2[IncrementalSource2["StyleDeclaration"] = 13] = "StyleDeclaration";
  IncrementalSource2[IncrementalSource2["Selection"] = 14] = "Selection";
  IncrementalSource2[IncrementalSource2["AdoptedStyleSheet"] = 15] = "AdoptedStyleSheet";
  IncrementalSource2[IncrementalSource2["CustomElement"] = 16] = "CustomElement";
  return IncrementalSource2;
})(IncrementalSource || {});
var MouseInteractions = /* @__PURE__ */ ((MouseInteractions2) => {
  MouseInteractions2[MouseInteractions2["MouseUp"] = 0] = "MouseUp";
  MouseInteractions2[MouseInteractions2["MouseDown"] = 1] = "MouseDown";
  MouseInteractions2[MouseInteractions2["Click"] = 2] = "Click";
  MouseInteractions2[MouseInteractions2["ContextMenu"] = 3] = "ContextMenu";
  MouseInteractions2[MouseInteractions2["DblClick"] = 4] = "DblClick";
  MouseInteractions2[MouseInteractions2["Focus"] = 5] = "Focus";
  MouseInteractions2[MouseInteractions2["Blur"] = 6] = "Blur";
  MouseInteractions2[MouseInteractions2["TouchStart"] = 7] = "TouchStart";
  MouseInteractions2[MouseInteractions2["TouchMove_Departed"] = 8] = "TouchMove_Departed";
  MouseInteractions2[MouseInteractions2["TouchEnd"] = 9] = "TouchEnd";
  MouseInteractions2[MouseInteractions2["TouchCancel"] = 10] = "TouchCancel";
  return MouseInteractions2;
})(MouseInteractions || {});
var PointerTypes = /* @__PURE__ */ ((PointerTypes2) => {
  PointerTypes2[PointerTypes2["Mouse"] = 0] = "Mouse";
  PointerTypes2[PointerTypes2["Pen"] = 1] = "Pen";
  PointerTypes2[PointerTypes2["Touch"] = 2] = "Touch";
  return PointerTypes2;
})(PointerTypes || {});
var MediaInteractions = /* @__PURE__ */ ((MediaInteractions2) => {
  MediaInteractions2[MediaInteractions2["Play"] = 0] = "Play";
  MediaInteractions2[MediaInteractions2["Pause"] = 1] = "Pause";
  MediaInteractions2[MediaInteractions2["Seeked"] = 2] = "Seeked";
  MediaInteractions2[MediaInteractions2["VolumeChange"] = 3] = "VolumeChange";
  MediaInteractions2[MediaInteractions2["RateChange"] = 4] = "RateChange";
  return MediaInteractions2;
})(MediaInteractions || {});
function getIFrameContentDocument(iframe) {
  try {
    return iframe.contentDocument;
  } catch (e2) {
  }
}
function getIFrameContentWindow(iframe) {
  try {
    return iframe.contentWindow;
  } catch (e2) {
  }
}
function isNodeInLinkedList(n2) {
  return "__ln" in n2;
}
var DoubleLinkedList = class {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  get(position) {
    if (position >= this.length) {
      throw new Error("Position outside of list range");
    }
    let current = this.head;
    for (let index = 0; index < position; index++) {
      current = current?.next || null;
    }
    return current;
  }
  addNode(n2) {
    const node = {
      value: n2,
      previous: null,
      next: null
    };
    n2.__ln = node;
    if (n2.previousSibling && isNodeInLinkedList(n2.previousSibling)) {
      const current = n2.previousSibling.__ln.next;
      node.next = current;
      node.previous = n2.previousSibling.__ln;
      n2.previousSibling.__ln.next = node;
      if (current) {
        current.previous = node;
      }
    } else if (n2.nextSibling && isNodeInLinkedList(n2.nextSibling) && n2.nextSibling.__ln.previous) {
      const current = n2.nextSibling.__ln.previous;
      node.previous = current;
      node.next = n2.nextSibling.__ln;
      n2.nextSibling.__ln.previous = node;
      if (current) {
        current.next = node;
      }
    } else {
      if (this.head) {
        this.head.previous = node;
      }
      node.next = this.head;
      this.head = node;
    }
    if (node.next === null) {
      this.tail = node;
    }
    this.length++;
  }
  removeNode(n2) {
    const current = n2.__ln;
    if (!this.head) {
      return;
    }
    if (!current.previous) {
      this.head = current.next;
      if (this.head) {
        this.head.previous = null;
      } else {
        this.tail = null;
      }
    } else {
      current.previous.next = current.next;
      if (current.next) {
        current.next.previous = current.previous;
      } else {
        this.tail = current.previous;
      }
    }
    if (n2.__ln) {
      delete n2.__ln;
    }
    this.length--;
  }
};
var moveKey = (id, parentId) => `${id}@${parentId}`;
var MutationBuffer = class {
  constructor() {
    this.frozen = false;
    this.locked = false;
    this.texts = [];
    this.attributes = [];
    this.attributeMap = /* @__PURE__ */ new WeakMap();
    this.removes = [];
    this.mapRemoves = [];
    this.movedMap = {};
    this.addedSet = /* @__PURE__ */ new Set();
    this.movedSet = /* @__PURE__ */ new Set();
    this.droppedSet = /* @__PURE__ */ new Set();
    this.processMutations = (mutations) => {
      mutations.forEach(this.processMutation);
      this.emit();
    };
    this.emit = () => {
      if (this.frozen || this.locked) {
        return;
      }
      const adds = [];
      const addedIds = /* @__PURE__ */ new Set();
      const addList = new DoubleLinkedList();
      const getNextId = (n2) => {
        let ns = n2;
        let nextId = IGNORED_NODE;
        while (nextId === IGNORED_NODE) {
          ns = ns && ns.nextSibling;
          nextId = ns && this.mirror.getId(ns);
        }
        return nextId;
      };
      const pushAdd = (n2) => {
        if (!n2.parentNode || !inDom(n2)) {
          return;
        }
        const parentId = isShadowRoot(n2.parentNode) ? this.mirror.getId(getShadowHost(n2)) : this.mirror.getId(n2.parentNode);
        const nextId = getNextId(n2);
        if (parentId === -1 || nextId === -1) {
          return addList.addNode(n2);
        }
        const sn = serializeNodeWithId(n2, {
          doc: this.doc,
          mirror: this.mirror,
          blockClass: this.blockClass,
          blockSelector: this.blockSelector,
          maskAllText: this.maskAllText,
          unblockSelector: this.unblockSelector,
          maskTextClass: this.maskTextClass,
          unmaskTextClass: this.unmaskTextClass,
          maskTextSelector: this.maskTextSelector,
          unmaskTextSelector: this.unmaskTextSelector,
          skipChild: true,
          newlyAddedElement: true,
          inlineStylesheet: this.inlineStylesheet,
          maskInputOptions: this.maskInputOptions,
          maskAttributeFn: this.maskAttributeFn,
          maskTextFn: this.maskTextFn,
          maskInputFn: this.maskInputFn,
          slimDOMOptions: this.slimDOMOptions,
          dataURLOptions: this.dataURLOptions,
          recordCanvas: this.recordCanvas,
          inlineImages: this.inlineImages,
          onSerialize: (currentN) => {
            if (isSerializedIframe(currentN, this.mirror) && !isBlocked(currentN, this.blockClass, this.blockSelector, this.unblockSelector, false)) {
              this.iframeManager.addIframe(currentN);
            }
            if (isSerializedStylesheet(currentN, this.mirror)) {
              this.stylesheetManager.trackLinkElement(currentN);
            }
            if (hasShadowRoot(n2)) {
              this.shadowDomManager.addShadowRoot(n2.shadowRoot, this.doc);
            }
          },
          onIframeLoad: (iframe, childSn) => {
            if (isBlocked(iframe, this.blockClass, this.blockSelector, this.unblockSelector, false)) {
              return;
            }
            this.iframeManager.attachIframe(iframe, childSn);
            if (iframe.contentWindow) {
              this.canvasManager.addWindow(iframe.contentWindow);
            }
            this.shadowDomManager.observeAttachShadow(iframe);
          },
          onStylesheetLoad: (link, childSn) => {
            this.stylesheetManager.attachLinkElement(link, childSn);
          }
        });
        if (sn) {
          adds.push({
            parentId,
            nextId,
            node: sn
          });
          addedIds.add(sn.id);
        }
      };
      while (this.mapRemoves.length) {
        this.mirror.removeNodeFromMap(this.mapRemoves.shift());
      }
      for (const n2 of this.movedSet) {
        if (isParentRemoved(this.removes, n2, this.mirror) && !this.movedSet.has(n2.parentNode)) {
          continue;
        }
        pushAdd(n2);
      }
      for (const n2 of this.addedSet) {
        if (!isAncestorInSet(this.droppedSet, n2) && !isParentRemoved(this.removes, n2, this.mirror)) {
          pushAdd(n2);
        } else if (isAncestorInSet(this.movedSet, n2)) {
          pushAdd(n2);
        } else {
          this.droppedSet.add(n2);
        }
      }
      let candidate = null;
      while (addList.length) {
        let node = null;
        if (candidate) {
          const parentId = this.mirror.getId(candidate.value.parentNode);
          const nextId = getNextId(candidate.value);
          if (parentId !== -1 && nextId !== -1) {
            node = candidate;
          }
        }
        if (!node) {
          let tailNode = addList.tail;
          while (tailNode) {
            const _node = tailNode;
            tailNode = tailNode.previous;
            if (_node) {
              const parentId = this.mirror.getId(_node.value.parentNode);
              const nextId = getNextId(_node.value);
              if (nextId === -1) continue;
              else if (parentId !== -1) {
                node = _node;
                break;
              } else {
                const unhandledNode = _node.value;
                if (unhandledNode.parentNode && unhandledNode.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const shadowHost = unhandledNode.parentNode.host;
                  const parentId2 = this.mirror.getId(shadowHost);
                  if (parentId2 !== -1) {
                    node = _node;
                    break;
                  }
                }
              }
            }
          }
        }
        if (!node) {
          while (addList.head) {
            addList.removeNode(addList.head.value);
          }
          break;
        }
        candidate = node.previous;
        addList.removeNode(node.value);
        pushAdd(node.value);
      }
      const payload = {
        texts: this.texts.map((text) => ({
          id: this.mirror.getId(text.node),
          value: text.value
        })).filter((text) => !addedIds.has(text.id)).filter((text) => this.mirror.has(text.id)),
        attributes: this.attributes.map((attribute) => {
          const {
            attributes
          } = attribute;
          if (typeof attributes.style === "string") {
            const diffAsStr = JSON.stringify(attribute.styleDiff);
            const unchangedAsStr = JSON.stringify(attribute._unchangedStyles);
            if (diffAsStr.length < attributes.style.length) {
              if ((diffAsStr + unchangedAsStr).split("var(").length === attributes.style.split("var(").length) {
                attributes.style = attribute.styleDiff;
              }
            }
          }
          return {
            id: this.mirror.getId(attribute.node),
            attributes
          };
        }).filter((attribute) => !addedIds.has(attribute.id)).filter((attribute) => this.mirror.has(attribute.id)),
        removes: this.removes,
        adds
      };
      if (!payload.texts.length && !payload.attributes.length && !payload.removes.length && !payload.adds.length) {
        return;
      }
      this.texts = [];
      this.attributes = [];
      this.attributeMap = /* @__PURE__ */ new WeakMap();
      this.removes = [];
      this.addedSet = /* @__PURE__ */ new Set();
      this.movedSet = /* @__PURE__ */ new Set();
      this.droppedSet = /* @__PURE__ */ new Set();
      this.movedMap = {};
      this.mutationCb(payload);
    };
    this.processMutation = (m) => {
      if (isIgnored(m.target, this.mirror)) {
        return;
      }
      switch (m.type) {
        case "characterData": {
          const value = m.target.textContent;
          if (!isBlocked(m.target, this.blockClass, this.blockSelector, this.unblockSelector, false) && value !== m.oldValue) {
            this.texts.push({
              value: needMaskingText(m.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && value ? this.maskTextFn ? this.maskTextFn(value, closestElementOfNode(m.target)) : value.replace(/[\S]/g, "*") : value,
              node: m.target
            });
          }
          break;
        }
        case "attributes": {
          const target = m.target;
          let attributeName = m.attributeName;
          let value = m.target.getAttribute(attributeName);
          if (attributeName === "value") {
            const type = getInputType(target);
            const tagName = target.tagName;
            value = getInputValue(target, tagName, type);
            const isInputMasked = shouldMaskInput({
              maskInputOptions: this.maskInputOptions,
              tagName,
              type
            });
            const forceMask = needMaskingText(m.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, isInputMasked);
            value = maskInputValue({
              isMasked: forceMask,
              element: target,
              value,
              maskInputFn: this.maskInputFn
            });
          }
          if (isBlocked(m.target, this.blockClass, this.blockSelector, this.unblockSelector, false) || value === m.oldValue) {
            return;
          }
          let item = this.attributeMap.get(m.target);
          if (target.tagName === "IFRAME" && attributeName === "src" && !this.keepIframeSrcFn(value)) {
            const iframeDoc = getIFrameContentDocument(target);
            if (!iframeDoc) {
              attributeName = "rr_src";
            } else {
              return;
            }
          }
          if (!item) {
            item = {
              node: m.target,
              attributes: {},
              styleDiff: {},
              _unchangedStyles: {}
            };
            this.attributes.push(item);
            this.attributeMap.set(m.target, item);
          }
          if (attributeName === "type" && target.tagName === "INPUT" && (m.oldValue || "").toLowerCase() === "password") {
            target.setAttribute("data-rr-is-password", "true");
          }
          if (!ignoreAttribute(target.tagName, attributeName)) {
            item.attributes[attributeName] = transformAttribute(this.doc, toLowerCase(target.tagName), toLowerCase(attributeName), value, target, this.maskAttributeFn);
            if (attributeName === "style") {
              if (!this.unattachedDoc) {
                try {
                  this.unattachedDoc = document.implementation.createHTMLDocument();
                } catch (e2) {
                  this.unattachedDoc = this.doc;
                }
              }
              const old = this.unattachedDoc.createElement("span");
              if (m.oldValue) {
                old.setAttribute("style", m.oldValue);
              }
              for (const pname of Array.from(target.style)) {
                const newValue = target.style.getPropertyValue(pname);
                const newPriority = target.style.getPropertyPriority(pname);
                if (newValue !== old.style.getPropertyValue(pname) || newPriority !== old.style.getPropertyPriority(pname)) {
                  if (newPriority === "") {
                    item.styleDiff[pname] = newValue;
                  } else {
                    item.styleDiff[pname] = [newValue, newPriority];
                  }
                } else {
                  item._unchangedStyles[pname] = [newValue, newPriority];
                }
              }
              for (const pname of Array.from(old.style)) {
                if (target.style.getPropertyValue(pname) === "") {
                  item.styleDiff[pname] = false;
                }
              }
            }
          }
          break;
        }
        case "childList": {
          if (isBlocked(m.target, this.blockClass, this.blockSelector, this.unblockSelector, true)) {
            return;
          }
          m.addedNodes.forEach((n2) => this.genAdds(n2, m.target));
          m.removedNodes.forEach((n2) => {
            const nodeId = this.mirror.getId(n2);
            const parentId = isShadowRoot(m.target) ? this.mirror.getId(m.target.host) : this.mirror.getId(m.target);
            if (isBlocked(m.target, this.blockClass, this.blockSelector, this.unblockSelector, false) || isIgnored(n2, this.mirror) || !isSerialized(n2, this.mirror)) {
              return;
            }
            if (this.addedSet.has(n2)) {
              deepDelete(this.addedSet, n2);
              this.droppedSet.add(n2);
            } else if (this.addedSet.has(m.target) && nodeId === -1) ;
            else if (isAncestorRemoved(m.target, this.mirror)) ;
            else if (this.movedSet.has(n2) && this.movedMap[moveKey(nodeId, parentId)]) {
              deepDelete(this.movedSet, n2);
            } else {
              this.removes.push({
                parentId,
                id: nodeId,
                isShadow: isShadowRoot(m.target) && isNativeShadowDom(m.target) ? true : void 0
              });
            }
            this.mapRemoves.push(n2);
          });
          break;
        }
      }
    };
    this.genAdds = (n2, target) => {
      if (this.processedNodeManager.inOtherBuffer(n2, this)) return;
      if (this.addedSet.has(n2) || this.movedSet.has(n2)) return;
      if (this.mirror.hasNode(n2)) {
        if (isIgnored(n2, this.mirror)) {
          return;
        }
        this.movedSet.add(n2);
        let targetId = null;
        if (target && this.mirror.hasNode(target)) {
          targetId = this.mirror.getId(target);
        }
        if (targetId && targetId !== -1) {
          this.movedMap[moveKey(this.mirror.getId(n2), targetId)] = true;
        }
      } else {
        this.addedSet.add(n2);
        this.droppedSet.delete(n2);
      }
      if (!isBlocked(n2, this.blockClass, this.blockSelector, this.unblockSelector, false)) {
        n2.childNodes.forEach((childN) => this.genAdds(childN));
        if (hasShadowRoot(n2)) {
          n2.shadowRoot.childNodes.forEach((childN) => {
            this.processedNodeManager.add(childN, this);
            this.genAdds(childN, n2);
          });
        }
      }
    };
  }
  init(options) {
    ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((key) => {
      this[key] = options[key];
    });
  }
  freeze() {
    this.frozen = true;
    this.canvasManager.freeze();
  }
  unfreeze() {
    this.frozen = false;
    this.canvasManager.unfreeze();
    this.emit();
  }
  isFrozen() {
    return this.frozen;
  }
  lock() {
    this.locked = true;
    this.canvasManager.lock();
  }
  unlock() {
    this.locked = false;
    this.canvasManager.unlock();
    this.emit();
  }
  reset() {
    this.shadowDomManager.reset();
    this.canvasManager.reset();
  }
};
function deepDelete(addsSet, n2) {
  addsSet.delete(n2);
  n2.childNodes.forEach((childN) => deepDelete(addsSet, childN));
}
function isParentRemoved(removes, n2, mirror2) {
  if (removes.length === 0) return false;
  return _isParentRemoved(removes, n2, mirror2);
}
function _isParentRemoved(removes, n2, mirror2) {
  let node = n2.parentNode;
  while (node) {
    const parentId = mirror2.getId(node);
    if (removes.some((r2) => r2.id === parentId)) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
function isAncestorInSet(set2, n2) {
  if (set2.size === 0) return false;
  return _isAncestorInSet(set2, n2);
}
function _isAncestorInSet(set2, n2) {
  const {
    parentNode
  } = n2;
  if (!parentNode) {
    return false;
  }
  if (set2.has(parentNode)) {
    return true;
  }
  return _isAncestorInSet(set2, parentNode);
}
var errorHandler;
function registerErrorHandler(handler) {
  errorHandler = handler;
}
function unregisterErrorHandler() {
  errorHandler = void 0;
}
var callbackWrapper = (cb) => {
  if (!errorHandler) {
    return cb;
  }
  const rrwebWrapped = (...rest) => {
    try {
      return cb(...rest);
    } catch (error) {
      if (errorHandler && errorHandler(error) === true) {
        return () => {
        };
      }
      throw error;
    }
  };
  return rrwebWrapped;
};
var mutationBuffers = [];
function getEventTarget2(event) {
  try {
    if ("composedPath" in event) {
      const path = event.composedPath();
      if (path.length) {
        return path[0];
      }
    } else if ("path" in event && event.path.length) {
      return event.path[0];
    }
  } catch {
  }
  return event && event.target;
}
function initMutationObserver(options, rootEl) {
  const mutationBuffer = new MutationBuffer();
  mutationBuffers.push(mutationBuffer);
  mutationBuffer.init(options);
  let mutationObserverCtor = window.MutationObserver || /**
  * Some websites may disable MutationObserver by removing it from the window object.
  * If someone is using rrweb to build a browser extention or things like it, they
  * could not change the website's code but can have an opportunity to inject some
  * code before the website executing its JS logic.
  * Then they can do this to store the native MutationObserver:
  * window.__rrMutationObserver = MutationObserver
  */
  window.__rrMutationObserver;
  const angularZoneSymbol = window?.Zone?.__symbol__?.("MutationObserver");
  if (angularZoneSymbol && window[angularZoneSymbol]) {
    mutationObserverCtor = window[angularZoneSymbol];
  }
  const observer = new mutationObserverCtor(callbackWrapper((mutations) => {
    if (options.onMutation && options.onMutation(mutations) === false) {
      return;
    }
    mutationBuffer.processMutations.bind(mutationBuffer)(mutations);
  }));
  observer.observe(rootEl, {
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true
  });
  return observer;
}
function initMoveObserver({
  mousemoveCb,
  sampling,
  doc,
  mirror: mirror2
}) {
  if (sampling.mousemove === false) {
    return () => {
    };
  }
  const threshold = typeof sampling.mousemove === "number" ? sampling.mousemove : 50;
  const callbackThreshold = typeof sampling.mousemoveCallback === "number" ? sampling.mousemoveCallback : 500;
  let positions = [];
  let timeBaseline;
  const wrappedCb = throttle$1(callbackWrapper((source) => {
    const totalOffset = Date.now() - timeBaseline;
    mousemoveCb(positions.map((p) => {
      p.timeOffset -= totalOffset;
      return p;
    }), source);
    positions = [];
    timeBaseline = null;
  }), callbackThreshold);
  const updatePosition = callbackWrapper(throttle$1(callbackWrapper((evt) => {
    const target = getEventTarget2(evt);
    const {
      clientX,
      clientY
    } = legacy_isTouchEvent(evt) ? evt.changedTouches[0] : evt;
    if (!timeBaseline) {
      timeBaseline = nowTimestamp();
    }
    positions.push({
      x: clientX,
      y: clientY,
      id: mirror2.getId(target),
      timeOffset: nowTimestamp() - timeBaseline
    });
    wrappedCb(typeof DragEvent !== "undefined" && evt instanceof DragEvent ? IncrementalSource.Drag : evt instanceof MouseEvent ? IncrementalSource.MouseMove : IncrementalSource.TouchMove);
  }), threshold, {
    trailing: false
  }));
  const handlers4 = [on("mousemove", updatePosition, doc), on("touchmove", updatePosition, doc), on("drag", updatePosition, doc)];
  return callbackWrapper(() => {
    handlers4.forEach((h) => h());
  });
}
function initMouseInteractionObserver({
  mouseInteractionCb,
  doc,
  mirror: mirror2,
  blockClass,
  blockSelector,
  unblockSelector,
  sampling
}) {
  if (sampling.mouseInteraction === false) {
    return () => {
    };
  }
  const disableMap = sampling.mouseInteraction === true || sampling.mouseInteraction === void 0 ? {} : sampling.mouseInteraction;
  const handlers4 = [];
  let currentPointerType = null;
  const getHandler = (eventKey) => {
    return (event) => {
      const target = getEventTarget2(event);
      if (isBlocked(target, blockClass, blockSelector, unblockSelector, true)) {
        return;
      }
      let pointerType = null;
      let thisEventKey = eventKey;
      if ("pointerType" in event) {
        switch (event.pointerType) {
          case "mouse":
            pointerType = PointerTypes.Mouse;
            break;
          case "touch":
            pointerType = PointerTypes.Touch;
            break;
          case "pen":
            pointerType = PointerTypes.Pen;
            break;
        }
        if (pointerType === PointerTypes.Touch) {
          if (MouseInteractions[eventKey] === MouseInteractions.MouseDown) {
            thisEventKey = "TouchStart";
          } else if (MouseInteractions[eventKey] === MouseInteractions.MouseUp) {
            thisEventKey = "TouchEnd";
          }
        } else if (pointerType === PointerTypes.Pen) ;
      } else if (legacy_isTouchEvent(event)) {
        pointerType = PointerTypes.Touch;
      }
      if (pointerType !== null) {
        currentPointerType = pointerType;
        if (thisEventKey.startsWith("Touch") && pointerType === PointerTypes.Touch || thisEventKey.startsWith("Mouse") && pointerType === PointerTypes.Mouse) {
          pointerType = null;
        }
      } else if (MouseInteractions[eventKey] === MouseInteractions.Click) {
        pointerType = currentPointerType;
        currentPointerType = null;
      }
      const e2 = legacy_isTouchEvent(event) ? event.changedTouches[0] : event;
      if (!e2) {
        return;
      }
      const id = mirror2.getId(target);
      const {
        clientX,
        clientY
      } = e2;
      callbackWrapper(mouseInteractionCb)(__spreadValues({
        type: MouseInteractions[thisEventKey],
        id,
        x: clientX,
        y: clientY
      }, pointerType !== null && {
        pointerType
      }));
    };
  };
  Object.keys(MouseInteractions).filter((key) => Number.isNaN(Number(key)) && !key.endsWith("_Departed") && disableMap[key] !== false).forEach((eventKey) => {
    let eventName = toLowerCase(eventKey);
    const handler = getHandler(eventKey);
    if (window.PointerEvent) {
      switch (MouseInteractions[eventKey]) {
        case MouseInteractions.MouseDown:
        case MouseInteractions.MouseUp:
          eventName = eventName.replace("mouse", "pointer");
          break;
        case MouseInteractions.TouchStart:
        case MouseInteractions.TouchEnd:
          return;
      }
    }
    handlers4.push(on(eventName, handler, doc));
  });
  return callbackWrapper(() => {
    handlers4.forEach((h) => h());
  });
}
function initScrollObserver({
  scrollCb,
  doc,
  mirror: mirror2,
  blockClass,
  blockSelector,
  unblockSelector,
  sampling
}) {
  const updatePosition = callbackWrapper(throttle$1(callbackWrapper((evt) => {
    const target = getEventTarget2(evt);
    if (!target || isBlocked(target, blockClass, blockSelector, unblockSelector, true)) {
      return;
    }
    const id = mirror2.getId(target);
    if (target === doc && doc.defaultView) {
      const scrollLeftTop = getWindowScroll(doc.defaultView);
      scrollCb({
        id,
        x: scrollLeftTop.left,
        y: scrollLeftTop.top
      });
    } else {
      scrollCb({
        id,
        x: target.scrollLeft,
        y: target.scrollTop
      });
    }
  }), sampling.scroll || 100));
  return on("scroll", updatePosition, doc);
}
function initViewportResizeObserver({
  viewportResizeCb
}, {
  win
}) {
  let lastH = -1;
  let lastW = -1;
  const updateDimension = callbackWrapper(throttle$1(callbackWrapper(() => {
    const height = getWindowHeight();
    const width = getWindowWidth();
    if (lastH !== height || lastW !== width) {
      viewportResizeCb({
        width: Number(width),
        height: Number(height)
      });
      lastH = height;
      lastW = width;
    }
  }), 200));
  return on("resize", updateDimension, win);
}
var INPUT_TAGS = ["INPUT", "TEXTAREA", "SELECT"];
var lastInputValueMap = /* @__PURE__ */ new WeakMap();
function initInputObserver({
  inputCb,
  doc,
  mirror: mirror2,
  blockClass,
  blockSelector,
  unblockSelector,
  ignoreClass,
  ignoreSelector,
  maskInputOptions,
  maskInputFn,
  sampling,
  userTriggeredOnInput,
  maskTextClass,
  unmaskTextClass,
  maskTextSelector,
  unmaskTextSelector
}) {
  function eventHandler(event) {
    let target = getEventTarget2(event);
    const userTriggered = event.isTrusted;
    const tagName = target && toUpperCase(target.tagName);
    if (tagName === "OPTION") target = target.parentElement;
    if (!target || !tagName || INPUT_TAGS.indexOf(tagName) < 0 || isBlocked(target, blockClass, blockSelector, unblockSelector, true)) {
      return;
    }
    const el = target;
    if (el.classList.contains(ignoreClass) || ignoreSelector && el.matches(ignoreSelector)) {
      return;
    }
    const type = getInputType(target);
    let text = getInputValue(el, tagName, type);
    let isChecked = false;
    const isInputMasked = shouldMaskInput({
      maskInputOptions,
      tagName,
      type
    });
    const forceMask = needMaskingText(target, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, isInputMasked);
    if (type === "radio" || type === "checkbox") {
      isChecked = target.checked;
    }
    text = maskInputValue({
      isMasked: forceMask,
      element: target,
      value: text,
      maskInputFn
    });
    cbWithDedup(target, userTriggeredOnInput ? {
      text,
      isChecked,
      userTriggered
    } : {
      text,
      isChecked
    });
    const name = target.name;
    if (type === "radio" && name && isChecked) {
      doc.querySelectorAll(`input[type="radio"][name="${name}"]`).forEach((el2) => {
        if (el2 !== target) {
          const text2 = maskInputValue({
            // share mask behavior of `target`
            isMasked: forceMask,
            element: el2,
            value: getInputValue(el2, tagName, type),
            maskInputFn
          });
          cbWithDedup(el2, userTriggeredOnInput ? {
            text: text2,
            isChecked: !isChecked,
            userTriggered: false
          } : {
            text: text2,
            isChecked: !isChecked
          });
        }
      });
    }
  }
  function cbWithDedup(target, v2) {
    const lastInputValue = lastInputValueMap.get(target);
    if (!lastInputValue || lastInputValue.text !== v2.text || lastInputValue.isChecked !== v2.isChecked) {
      lastInputValueMap.set(target, v2);
      const id = mirror2.getId(target);
      callbackWrapper(inputCb)(__spreadProps(__spreadValues({}, v2), {
        id
      }));
    }
  }
  const events = sampling.input === "last" ? ["change"] : ["input", "change"];
  const handlers4 = events.map((eventName) => on(eventName, callbackWrapper(eventHandler), doc));
  const currentWindow = doc.defaultView;
  if (!currentWindow) {
    return () => {
      handlers4.forEach((h) => h());
    };
  }
  const propertyDescriptor = currentWindow.Object.getOwnPropertyDescriptor(currentWindow.HTMLInputElement.prototype, "value");
  const hookProperties = [
    [currentWindow.HTMLInputElement.prototype, "value"],
    [currentWindow.HTMLInputElement.prototype, "checked"],
    [currentWindow.HTMLSelectElement.prototype, "value"],
    [currentWindow.HTMLTextAreaElement.prototype, "value"],
    // Some UI library use selectedIndex to set select value
    [currentWindow.HTMLSelectElement.prototype, "selectedIndex"],
    [currentWindow.HTMLOptionElement.prototype, "selected"]
  ];
  if (propertyDescriptor && propertyDescriptor.set) {
    handlers4.push(...hookProperties.map((p) => hookSetter(p[0], p[1], {
      set() {
        callbackWrapper(eventHandler)({
          target: this,
          isTrusted: false
          // userTriggered to false as this could well be programmatic
        });
      }
    }, false, currentWindow)));
  }
  return callbackWrapper(() => {
    handlers4.forEach((h) => h());
  });
}
function getNestedCSSRulePositions(rule) {
  const positions = [];
  function recurse(childRule, pos) {
    if (hasNestedCSSRule("CSSGroupingRule") && childRule.parentRule instanceof CSSGroupingRule || hasNestedCSSRule("CSSMediaRule") && childRule.parentRule instanceof CSSMediaRule || hasNestedCSSRule("CSSSupportsRule") && childRule.parentRule instanceof CSSSupportsRule || hasNestedCSSRule("CSSConditionRule") && childRule.parentRule instanceof CSSConditionRule) {
      const rules2 = Array.from(childRule.parentRule.cssRules);
      const index = rules2.indexOf(childRule);
      pos.unshift(index);
    } else if (childRule.parentStyleSheet) {
      const rules2 = Array.from(childRule.parentStyleSheet.cssRules);
      const index = rules2.indexOf(childRule);
      pos.unshift(index);
    }
    return pos;
  }
  return recurse(rule, positions);
}
function getIdAndStyleId(sheet, mirror2, styleMirror) {
  let id, styleId;
  if (!sheet) return {};
  if (sheet.ownerNode) id = mirror2.getId(sheet.ownerNode);
  else styleId = styleMirror.getId(sheet);
  return {
    styleId,
    id
  };
}
function initStyleSheetObserver({
  styleSheetRuleCb,
  mirror: mirror2,
  stylesheetManager
}, {
  win
}) {
  if (!win.CSSStyleSheet || !win.CSSStyleSheet.prototype) {
    return () => {
    };
  }
  const insertRule = win.CSSStyleSheet.prototype.insertRule;
  win.CSSStyleSheet.prototype.insertRule = new Proxy(insertRule, {
    apply: callbackWrapper((target, thisArg, argumentsList) => {
      const [rule, index] = argumentsList;
      const {
        id,
        styleId
      } = getIdAndStyleId(thisArg, mirror2, stylesheetManager.styleMirror);
      if (id && id !== -1 || styleId && styleId !== -1) {
        styleSheetRuleCb({
          id,
          styleId,
          adds: [{
            rule,
            index
          }]
        });
      }
      return target.apply(thisArg, argumentsList);
    })
  });
  const deleteRule = win.CSSStyleSheet.prototype.deleteRule;
  win.CSSStyleSheet.prototype.deleteRule = new Proxy(deleteRule, {
    apply: callbackWrapper((target, thisArg, argumentsList) => {
      const [index] = argumentsList;
      const {
        id,
        styleId
      } = getIdAndStyleId(thisArg, mirror2, stylesheetManager.styleMirror);
      if (id && id !== -1 || styleId && styleId !== -1) {
        styleSheetRuleCb({
          id,
          styleId,
          removes: [{
            index
          }]
        });
      }
      return target.apply(thisArg, argumentsList);
    })
  });
  let replace;
  if (win.CSSStyleSheet.prototype.replace) {
    replace = win.CSSStyleSheet.prototype.replace;
    win.CSSStyleSheet.prototype.replace = new Proxy(replace, {
      apply: callbackWrapper((target, thisArg, argumentsList) => {
        const [text] = argumentsList;
        const {
          id,
          styleId
        } = getIdAndStyleId(thisArg, mirror2, stylesheetManager.styleMirror);
        if (id && id !== -1 || styleId && styleId !== -1) {
          styleSheetRuleCb({
            id,
            styleId,
            replace: text
          });
        }
        return target.apply(thisArg, argumentsList);
      })
    });
  }
  let replaceSync;
  if (win.CSSStyleSheet.prototype.replaceSync) {
    replaceSync = win.CSSStyleSheet.prototype.replaceSync;
    win.CSSStyleSheet.prototype.replaceSync = new Proxy(replaceSync, {
      apply: callbackWrapper((target, thisArg, argumentsList) => {
        const [text] = argumentsList;
        const {
          id,
          styleId
        } = getIdAndStyleId(thisArg, mirror2, stylesheetManager.styleMirror);
        if (id && id !== -1 || styleId && styleId !== -1) {
          styleSheetRuleCb({
            id,
            styleId,
            replaceSync: text
          });
        }
        return target.apply(thisArg, argumentsList);
      })
    });
  }
  const supportedNestedCSSRuleTypes = {};
  if (canMonkeyPatchNestedCSSRule("CSSGroupingRule")) {
    supportedNestedCSSRuleTypes.CSSGroupingRule = win.CSSGroupingRule;
  } else {
    if (canMonkeyPatchNestedCSSRule("CSSMediaRule")) {
      supportedNestedCSSRuleTypes.CSSMediaRule = win.CSSMediaRule;
    }
    if (canMonkeyPatchNestedCSSRule("CSSConditionRule")) {
      supportedNestedCSSRuleTypes.CSSConditionRule = win.CSSConditionRule;
    }
    if (canMonkeyPatchNestedCSSRule("CSSSupportsRule")) {
      supportedNestedCSSRuleTypes.CSSSupportsRule = win.CSSSupportsRule;
    }
  }
  const unmodifiedFunctions = {};
  Object.entries(supportedNestedCSSRuleTypes).forEach(([typeKey, type]) => {
    unmodifiedFunctions[typeKey] = {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      insertRule: type.prototype.insertRule,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      deleteRule: type.prototype.deleteRule
    };
    type.prototype.insertRule = new Proxy(unmodifiedFunctions[typeKey].insertRule, {
      apply: callbackWrapper((target, thisArg, argumentsList) => {
        const [rule, index] = argumentsList;
        const {
          id,
          styleId
        } = getIdAndStyleId(thisArg.parentStyleSheet, mirror2, stylesheetManager.styleMirror);
        if (id && id !== -1 || styleId && styleId !== -1) {
          styleSheetRuleCb({
            id,
            styleId,
            adds: [{
              rule,
              index: [
                ...getNestedCSSRulePositions(thisArg),
                index || 0
                // defaults to 0
              ]
            }]
          });
        }
        return target.apply(thisArg, argumentsList);
      })
    });
    type.prototype.deleteRule = new Proxy(unmodifiedFunctions[typeKey].deleteRule, {
      apply: callbackWrapper((target, thisArg, argumentsList) => {
        const [index] = argumentsList;
        const {
          id,
          styleId
        } = getIdAndStyleId(thisArg.parentStyleSheet, mirror2, stylesheetManager.styleMirror);
        if (id && id !== -1 || styleId && styleId !== -1) {
          styleSheetRuleCb({
            id,
            styleId,
            removes: [{
              index: [...getNestedCSSRulePositions(thisArg), index]
            }]
          });
        }
        return target.apply(thisArg, argumentsList);
      })
    });
  });
  return callbackWrapper(() => {
    win.CSSStyleSheet.prototype.insertRule = insertRule;
    win.CSSStyleSheet.prototype.deleteRule = deleteRule;
    replace && (win.CSSStyleSheet.prototype.replace = replace);
    replaceSync && (win.CSSStyleSheet.prototype.replaceSync = replaceSync);
    Object.entries(supportedNestedCSSRuleTypes).forEach(([typeKey, type]) => {
      type.prototype.insertRule = unmodifiedFunctions[typeKey].insertRule;
      type.prototype.deleteRule = unmodifiedFunctions[typeKey].deleteRule;
    });
  });
}
function initAdoptedStyleSheetObserver({
  mirror: mirror2,
  stylesheetManager
}, host) {
  let hostId = null;
  if (host.nodeName === "#document") hostId = mirror2.getId(host);
  else hostId = mirror2.getId(host.host);
  const patchTarget = host.nodeName === "#document" ? host.defaultView?.Document : host.ownerDocument?.defaultView?.ShadowRoot;
  const originalPropertyDescriptor = patchTarget?.prototype ? Object.getOwnPropertyDescriptor(patchTarget?.prototype, "adoptedStyleSheets") : void 0;
  if (hostId === null || hostId === -1 || !patchTarget || !originalPropertyDescriptor) return () => {
  };
  Object.defineProperty(host, "adoptedStyleSheets", {
    configurable: originalPropertyDescriptor.configurable,
    enumerable: originalPropertyDescriptor.enumerable,
    get() {
      return originalPropertyDescriptor.get?.call(this);
    },
    set(sheets) {
      const result = originalPropertyDescriptor.set?.call(this, sheets);
      if (hostId !== null && hostId !== -1) {
        try {
          stylesheetManager.adoptStyleSheets(sheets, hostId);
        } catch (e2) {
        }
      }
      return result;
    }
  });
  return callbackWrapper(() => {
    Object.defineProperty(host, "adoptedStyleSheets", {
      configurable: originalPropertyDescriptor.configurable,
      enumerable: originalPropertyDescriptor.enumerable,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      get: originalPropertyDescriptor.get,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      set: originalPropertyDescriptor.set
    });
  });
}
function initStyleDeclarationObserver({
  styleDeclarationCb,
  mirror: mirror2,
  ignoreCSSAttributes,
  stylesheetManager
}, {
  win
}) {
  const setProperty = win.CSSStyleDeclaration.prototype.setProperty;
  win.CSSStyleDeclaration.prototype.setProperty = new Proxy(setProperty, {
    apply: callbackWrapper((target, thisArg, argumentsList) => {
      const [property, value, priority] = argumentsList;
      if (ignoreCSSAttributes.has(property)) {
        return setProperty.apply(thisArg, [property, value, priority]);
      }
      const {
        id,
        styleId
      } = getIdAndStyleId(thisArg.parentRule?.parentStyleSheet, mirror2, stylesheetManager.styleMirror);
      if (id && id !== -1 || styleId && styleId !== -1) {
        styleDeclarationCb({
          id,
          styleId,
          set: {
            property,
            value,
            priority
          },
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          index: getNestedCSSRulePositions(thisArg.parentRule)
        });
      }
      return target.apply(thisArg, argumentsList);
    })
  });
  const removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
  win.CSSStyleDeclaration.prototype.removeProperty = new Proxy(removeProperty, {
    apply: callbackWrapper((target, thisArg, argumentsList) => {
      const [property] = argumentsList;
      if (ignoreCSSAttributes.has(property)) {
        return removeProperty.apply(thisArg, [property]);
      }
      const {
        id,
        styleId
      } = getIdAndStyleId(thisArg.parentRule?.parentStyleSheet, mirror2, stylesheetManager.styleMirror);
      if (id && id !== -1 || styleId && styleId !== -1) {
        styleDeclarationCb({
          id,
          styleId,
          remove: {
            property
          },
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          index: getNestedCSSRulePositions(thisArg.parentRule)
        });
      }
      return target.apply(thisArg, argumentsList);
    })
  });
  return callbackWrapper(() => {
    win.CSSStyleDeclaration.prototype.setProperty = setProperty;
    win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
  });
}
function initMediaInteractionObserver({
  mediaInteractionCb,
  blockClass,
  blockSelector,
  unblockSelector,
  mirror: mirror2,
  sampling,
  doc
}) {
  const handler = callbackWrapper((type) => throttle$1(callbackWrapper((event) => {
    const target = getEventTarget2(event);
    if (!target || isBlocked(target, blockClass, blockSelector, unblockSelector, true)) {
      return;
    }
    const {
      currentTime,
      volume,
      muted,
      playbackRate
    } = target;
    mediaInteractionCb({
      type,
      id: mirror2.getId(target),
      currentTime,
      volume,
      muted,
      playbackRate
    });
  }), sampling.media || 500));
  const handlers4 = [on("play", handler(MediaInteractions.Play), doc), on("pause", handler(MediaInteractions.Pause), doc), on("seeked", handler(MediaInteractions.Seeked), doc), on("volumechange", handler(MediaInteractions.VolumeChange), doc), on("ratechange", handler(MediaInteractions.RateChange), doc)];
  return callbackWrapper(() => {
    handlers4.forEach((h) => h());
  });
}
function initFontObserver({
  fontCb,
  doc
}) {
  const win = doc.defaultView;
  if (!win) {
    return () => {
    };
  }
  const handlers4 = [];
  const fontMap = /* @__PURE__ */ new WeakMap();
  const originalFontFace = win.FontFace;
  win.FontFace = function FontFace2(family, source, descriptors) {
    const fontFace = new originalFontFace(family, source, descriptors);
    fontMap.set(fontFace, {
      family,
      buffer: typeof source !== "string",
      descriptors,
      fontSource: typeof source === "string" ? source : JSON.stringify(Array.from(new Uint8Array(source)))
    });
    return fontFace;
  };
  const restoreHandler = patch(doc.fonts, "add", function(original) {
    return function(fontFace) {
      setTimeout$1(callbackWrapper(() => {
        const p = fontMap.get(fontFace);
        if (p) {
          fontCb(p);
          fontMap.delete(fontFace);
        }
      }), 0);
      return original.apply(this, [fontFace]);
    };
  });
  handlers4.push(() => {
    win.FontFace = originalFontFace;
  });
  handlers4.push(restoreHandler);
  return callbackWrapper(() => {
    handlers4.forEach((h) => h());
  });
}
function initSelectionObserver(param) {
  const {
    doc,
    mirror: mirror2,
    blockClass,
    blockSelector,
    unblockSelector,
    selectionCb
  } = param;
  let collapsed = true;
  const updateSelection = callbackWrapper(() => {
    const selection = doc.getSelection();
    if (!selection || collapsed && selection?.isCollapsed) return;
    collapsed = selection.isCollapsed || false;
    const ranges = [];
    const count = selection.rangeCount || 0;
    for (let i2 = 0; i2 < count; i2++) {
      const range = selection.getRangeAt(i2);
      const {
        startContainer,
        startOffset,
        endContainer,
        endOffset
      } = range;
      const blocked = isBlocked(startContainer, blockClass, blockSelector, unblockSelector, true) || isBlocked(endContainer, blockClass, blockSelector, unblockSelector, true);
      if (blocked) continue;
      ranges.push({
        start: mirror2.getId(startContainer),
        startOffset,
        end: mirror2.getId(endContainer),
        endOffset
      });
    }
    selectionCb({
      ranges
    });
  });
  updateSelection();
  return on("selectionchange", updateSelection);
}
function initCustomElementObserver({
  doc,
  customElementCb
}) {
  const win = doc.defaultView;
  if (!win || !win.customElements) return () => {
  };
  const restoreHandler = patch(win.customElements, "define", function(original) {
    return function(name, constructor, options) {
      try {
        customElementCb({
          define: {
            name
          }
        });
      } catch (e2) {
      }
      return original.apply(this, [name, constructor, options]);
    };
  });
  return restoreHandler;
}
function initObservers(o2, _hooks = {}) {
  const currentWindow = o2.doc.defaultView;
  if (!currentWindow) {
    return () => {
    };
  }
  let mutationObserver;
  if (o2.recordDOM) {
    mutationObserver = initMutationObserver(o2, o2.doc);
  }
  const mousemoveHandler = initMoveObserver(o2);
  const mouseInteractionHandler = initMouseInteractionObserver(o2);
  const scrollHandler = initScrollObserver(o2);
  const viewportResizeHandler = initViewportResizeObserver(o2, {
    win: currentWindow
  });
  const inputHandler = initInputObserver(o2);
  const mediaInteractionHandler = initMediaInteractionObserver(o2);
  let styleSheetObserver = () => {
  };
  let adoptedStyleSheetObserver = () => {
  };
  let styleDeclarationObserver = () => {
  };
  let fontObserver = () => {
  };
  if (o2.recordDOM) {
    styleSheetObserver = initStyleSheetObserver(o2, {
      win: currentWindow
    });
    adoptedStyleSheetObserver = initAdoptedStyleSheetObserver(o2, o2.doc);
    styleDeclarationObserver = initStyleDeclarationObserver(o2, {
      win: currentWindow
    });
    if (o2.collectFonts) {
      fontObserver = initFontObserver(o2);
    }
  }
  const selectionObserver = initSelectionObserver(o2);
  const customElementObserver = initCustomElementObserver(o2);
  const pluginHandlers = [];
  for (const plugin of o2.plugins) {
    pluginHandlers.push(plugin.observer(plugin.callback, currentWindow, plugin.options));
  }
  return callbackWrapper(() => {
    mutationBuffers.forEach((b) => b.reset());
    mutationObserver?.disconnect();
    mousemoveHandler();
    mouseInteractionHandler();
    scrollHandler();
    viewportResizeHandler();
    inputHandler();
    mediaInteractionHandler();
    styleSheetObserver();
    adoptedStyleSheetObserver();
    styleDeclarationObserver();
    fontObserver();
    selectionObserver();
    customElementObserver();
    pluginHandlers.forEach((h) => h());
  });
}
function hasNestedCSSRule(prop) {
  return typeof window[prop] !== "undefined";
}
function canMonkeyPatchNestedCSSRule(prop) {
  return Boolean(typeof window[prop] !== "undefined" && // Note: Generally, this check _shouldn't_ be necessary
  // However, in some scenarios (e.g. jsdom) this can sometimes fail, so we check for it here
  window[prop].prototype && "insertRule" in window[prop].prototype && "deleteRule" in window[prop].prototype);
}
var CrossOriginIframeMirror = class {
  constructor(generateIdFn) {
    this.generateIdFn = generateIdFn;
    this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap();
    this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
  }
  getId(iframe, remoteId, idToRemoteMap, remoteToIdMap) {
    const idToRemoteIdMap = idToRemoteMap || this.getIdToRemoteIdMap(iframe);
    const remoteIdToIdMap = remoteToIdMap || this.getRemoteIdToIdMap(iframe);
    let id = idToRemoteIdMap.get(remoteId);
    if (!id) {
      id = this.generateIdFn();
      idToRemoteIdMap.set(remoteId, id);
      remoteIdToIdMap.set(id, remoteId);
    }
    return id;
  }
  getIds(iframe, remoteId) {
    const idToRemoteIdMap = this.getIdToRemoteIdMap(iframe);
    const remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
    return remoteId.map((id) => this.getId(iframe, id, idToRemoteIdMap, remoteIdToIdMap));
  }
  getRemoteId(iframe, id, map2) {
    const remoteIdToIdMap = map2 || this.getRemoteIdToIdMap(iframe);
    if (typeof id !== "number") return id;
    const remoteId = remoteIdToIdMap.get(id);
    if (!remoteId) return -1;
    return remoteId;
  }
  getRemoteIds(iframe, ids) {
    const remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
    return ids.map((id) => this.getRemoteId(iframe, id, remoteIdToIdMap));
  }
  reset(iframe) {
    if (!iframe) {
      this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap();
      this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
      return;
    }
    this.iframeIdToRemoteIdMap.delete(iframe);
    this.iframeRemoteIdToIdMap.delete(iframe);
  }
  getIdToRemoteIdMap(iframe) {
    let idToRemoteIdMap = this.iframeIdToRemoteIdMap.get(iframe);
    if (!idToRemoteIdMap) {
      idToRemoteIdMap = /* @__PURE__ */ new Map();
      this.iframeIdToRemoteIdMap.set(iframe, idToRemoteIdMap);
    }
    return idToRemoteIdMap;
  }
  getRemoteIdToIdMap(iframe) {
    let remoteIdToIdMap = this.iframeRemoteIdToIdMap.get(iframe);
    if (!remoteIdToIdMap) {
      remoteIdToIdMap = /* @__PURE__ */ new Map();
      this.iframeRemoteIdToIdMap.set(iframe, remoteIdToIdMap);
    }
    return remoteIdToIdMap;
  }
};
var IframeManagerNoop = class {
  constructor() {
    this.crossOriginIframeMirror = new CrossOriginIframeMirror(genId);
    this.crossOriginIframeRootIdMap = /* @__PURE__ */ new WeakMap();
  }
  addIframe() {
  }
  addLoadListener() {
  }
  attachIframe() {
  }
};
var IframeManager = class {
  constructor(options) {
    this.iframes = /* @__PURE__ */ new WeakMap();
    this.crossOriginIframeMap = /* @__PURE__ */ new WeakMap();
    this.crossOriginIframeMirror = new CrossOriginIframeMirror(genId);
    this.crossOriginIframeRootIdMap = /* @__PURE__ */ new WeakMap();
    this.mutationCb = options.mutationCb;
    this.wrappedEmit = options.wrappedEmit;
    this.stylesheetManager = options.stylesheetManager;
    this.recordCrossOriginIframes = options.recordCrossOriginIframes;
    this.crossOriginIframeStyleMirror = new CrossOriginIframeMirror(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror));
    this.mirror = options.mirror;
    if (this.recordCrossOriginIframes) {
      window.addEventListener("message", this.handleMessage.bind(this));
    }
  }
  addIframe(iframeEl) {
    this.iframes.set(iframeEl, true);
    if (iframeEl.contentWindow) this.crossOriginIframeMap.set(iframeEl.contentWindow, iframeEl);
  }
  addLoadListener(cb) {
    this.loadListener = cb;
  }
  attachIframe(iframeEl, childSn) {
    this.mutationCb({
      adds: [{
        parentId: this.mirror.getId(iframeEl),
        nextId: null,
        node: childSn
      }],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: true
    });
    if (this.recordCrossOriginIframes) iframeEl.contentWindow?.addEventListener("message", this.handleMessage.bind(this));
    this.loadListener?.(iframeEl);
    const iframeDoc = getIFrameContentDocument(iframeEl);
    if (iframeDoc && iframeDoc.adoptedStyleSheets && iframeDoc.adoptedStyleSheets.length > 0) this.stylesheetManager.adoptStyleSheets(iframeDoc.adoptedStyleSheets, this.mirror.getId(iframeDoc));
  }
  handleMessage(message) {
    const crossOriginMessageEvent = message;
    if (crossOriginMessageEvent.data.type !== "rrweb" || // To filter out the rrweb messages which are forwarded by some sites.
    crossOriginMessageEvent.origin !== crossOriginMessageEvent.data.origin) return;
    const iframeSourceWindow = message.source;
    if (!iframeSourceWindow) return;
    const iframeEl = this.crossOriginIframeMap.get(message.source);
    if (!iframeEl) return;
    const transformedEvent = this.transformCrossOriginEvent(iframeEl, crossOriginMessageEvent.data.event);
    if (transformedEvent) this.wrappedEmit(transformedEvent, crossOriginMessageEvent.data.isCheckout);
  }
  transformCrossOriginEvent(iframeEl, e2) {
    switch (e2.type) {
      case EventType.FullSnapshot: {
        this.crossOriginIframeMirror.reset(iframeEl);
        this.crossOriginIframeStyleMirror.reset(iframeEl);
        this.replaceIdOnNode(e2.data.node, iframeEl);
        const rootId = e2.data.node.id;
        this.crossOriginIframeRootIdMap.set(iframeEl, rootId);
        this.patchRootIdOnNode(e2.data.node, rootId);
        return {
          timestamp: e2.timestamp,
          type: EventType.IncrementalSnapshot,
          data: {
            source: IncrementalSource.Mutation,
            adds: [{
              parentId: this.mirror.getId(iframeEl),
              nextId: null,
              node: e2.data.node
            }],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: true
          }
        };
      }
      case EventType.Meta:
      case EventType.Load:
      case EventType.DomContentLoaded: {
        return false;
      }
      case EventType.Plugin: {
        return e2;
      }
      case EventType.Custom: {
        this.replaceIds(e2.data.payload, iframeEl, ["id", "parentId", "previousId", "nextId"]);
        return e2;
      }
      case EventType.IncrementalSnapshot: {
        switch (e2.data.source) {
          case IncrementalSource.Mutation: {
            e2.data.adds.forEach((n2) => {
              this.replaceIds(n2, iframeEl, ["parentId", "nextId", "previousId"]);
              this.replaceIdOnNode(n2.node, iframeEl);
              const rootId = this.crossOriginIframeRootIdMap.get(iframeEl);
              rootId && this.patchRootIdOnNode(n2.node, rootId);
            });
            e2.data.removes.forEach((n2) => {
              this.replaceIds(n2, iframeEl, ["parentId", "id"]);
            });
            e2.data.attributes.forEach((n2) => {
              this.replaceIds(n2, iframeEl, ["id"]);
            });
            e2.data.texts.forEach((n2) => {
              this.replaceIds(n2, iframeEl, ["id"]);
            });
            return e2;
          }
          case IncrementalSource.Drag:
          case IncrementalSource.TouchMove:
          case IncrementalSource.MouseMove: {
            e2.data.positions.forEach((p) => {
              this.replaceIds(p, iframeEl, ["id"]);
            });
            return e2;
          }
          case IncrementalSource.ViewportResize: {
            return false;
          }
          case IncrementalSource.MediaInteraction:
          case IncrementalSource.MouseInteraction:
          case IncrementalSource.Scroll:
          case IncrementalSource.CanvasMutation:
          case IncrementalSource.Input: {
            this.replaceIds(e2.data, iframeEl, ["id"]);
            return e2;
          }
          case IncrementalSource.StyleSheetRule:
          case IncrementalSource.StyleDeclaration: {
            this.replaceIds(e2.data, iframeEl, ["id"]);
            this.replaceStyleIds(e2.data, iframeEl, ["styleId"]);
            return e2;
          }
          case IncrementalSource.Font: {
            return e2;
          }
          case IncrementalSource.Selection: {
            e2.data.ranges.forEach((range) => {
              this.replaceIds(range, iframeEl, ["start", "end"]);
            });
            return e2;
          }
          case IncrementalSource.AdoptedStyleSheet: {
            this.replaceIds(e2.data, iframeEl, ["id"]);
            this.replaceStyleIds(e2.data, iframeEl, ["styleIds"]);
            e2.data.styles?.forEach((style2) => {
              this.replaceStyleIds(style2, iframeEl, ["styleId"]);
            });
            return e2;
          }
        }
      }
    }
    return false;
  }
  replace(iframeMirror, obj, iframeEl, keys) {
    for (const key of keys) {
      if (!Array.isArray(obj[key]) && typeof obj[key] !== "number") continue;
      if (Array.isArray(obj[key])) {
        obj[key] = iframeMirror.getIds(iframeEl, obj[key]);
      } else {
        obj[key] = iframeMirror.getId(iframeEl, obj[key]);
      }
    }
    return obj;
  }
  replaceIds(obj, iframeEl, keys) {
    return this.replace(this.crossOriginIframeMirror, obj, iframeEl, keys);
  }
  replaceStyleIds(obj, iframeEl, keys) {
    return this.replace(this.crossOriginIframeStyleMirror, obj, iframeEl, keys);
  }
  replaceIdOnNode(node, iframeEl) {
    this.replaceIds(node, iframeEl, ["id", "rootId"]);
    if ("childNodes" in node) {
      node.childNodes.forEach((child) => {
        this.replaceIdOnNode(child, iframeEl);
      });
    }
  }
  patchRootIdOnNode(node, rootId) {
    if (node.type !== NodeType$2.Document && !node.rootId) node.rootId = rootId;
    if ("childNodes" in node) {
      node.childNodes.forEach((child) => {
        this.patchRootIdOnNode(child, rootId);
      });
    }
  }
};
var ShadowDomManagerNoop = class {
  init() {
  }
  addShadowRoot() {
  }
  observeAttachShadow() {
  }
  reset() {
  }
};
var ShadowDomManager = class {
  constructor(options) {
    this.shadowDoms = /* @__PURE__ */ new WeakSet();
    this.restoreHandlers = [];
    this.mutationCb = options.mutationCb;
    this.scrollCb = options.scrollCb;
    this.bypassOptions = options.bypassOptions;
    this.mirror = options.mirror;
    this.init();
  }
  init() {
    this.reset();
    this.patchAttachShadow(Element, document);
  }
  addShadowRoot(shadowRoot, doc) {
    if (!isNativeShadowDom(shadowRoot)) return;
    if (this.shadowDoms.has(shadowRoot)) return;
    this.shadowDoms.add(shadowRoot);
    this.bypassOptions.canvasManager.addShadowRoot(shadowRoot);
    const observer = initMutationObserver(__spreadProps(__spreadValues({}, this.bypassOptions), {
      doc,
      mutationCb: this.mutationCb,
      mirror: this.mirror,
      shadowDomManager: this
    }), shadowRoot);
    this.restoreHandlers.push(() => observer.disconnect());
    this.restoreHandlers.push(initScrollObserver(__spreadProps(__spreadValues({}, this.bypassOptions), {
      scrollCb: this.scrollCb,
      // https://gist.github.com/praveenpuglia/0832da687ed5a5d7a0907046c9ef1813
      // scroll is not allowed to pass the boundary, so we need to listen the shadow document
      doc: shadowRoot,
      mirror: this.mirror
    })));
    setTimeout$1(() => {
      if (shadowRoot.adoptedStyleSheets && shadowRoot.adoptedStyleSheets.length > 0) this.bypassOptions.stylesheetManager.adoptStyleSheets(shadowRoot.adoptedStyleSheets, this.mirror.getId(shadowRoot.host));
      this.restoreHandlers.push(initAdoptedStyleSheetObserver({
        mirror: this.mirror,
        stylesheetManager: this.bypassOptions.stylesheetManager
      }, shadowRoot));
    }, 0);
  }
  /**
   * Monkey patch 'attachShadow' of an IFrameElement to observe newly added shadow doms.
   */
  observeAttachShadow(iframeElement) {
    const iframeDoc = getIFrameContentDocument(iframeElement);
    const iframeWindow = getIFrameContentWindow(iframeElement);
    if (!iframeDoc || !iframeWindow) return;
    this.patchAttachShadow(iframeWindow.Element, iframeDoc);
  }
  /**
   * Patch 'attachShadow' to observe newly added shadow doms.
   */
  patchAttachShadow(element, doc) {
    const manager = this;
    this.restoreHandlers.push(patch(element.prototype, "attachShadow", function(original) {
      return function(option) {
        const shadowRoot = original.call(this, option);
        if (this.shadowRoot && inDom(this)) manager.addShadowRoot(this.shadowRoot, doc);
        return shadowRoot;
      };
    }));
  }
  reset() {
    this.restoreHandlers.forEach((handler) => {
      try {
        handler();
      } catch (e2) {
      }
    });
    this.restoreHandlers = [];
    this.shadowDoms = /* @__PURE__ */ new WeakSet();
    this.bypassOptions.canvasManager.resetShadowRoots();
  }
};
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (i$1 = 0; i$1 < chars.length; i$1++) {
  lookup[chars.charCodeAt(i$1)] = i$1;
}
var i$1;
var CanvasManagerNoop = class {
  reset() {
  }
  freeze() {
  }
  unfreeze() {
  }
  lock() {
  }
  unlock() {
  }
  snapshot() {
  }
  addWindow() {
  }
  addShadowRoot() {
  }
  resetShadowRoots() {
  }
};
var StylesheetManager = class {
  constructor(options) {
    this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
    this.styleMirror = new StyleSheetMirror();
    this.mutationCb = options.mutationCb;
    this.adoptedStyleSheetCb = options.adoptedStyleSheetCb;
  }
  attachLinkElement(linkEl, childSn) {
    if ("_cssText" in childSn.attributes) this.mutationCb({
      adds: [],
      removes: [],
      texts: [],
      attributes: [{
        id: childSn.id,
        attributes: childSn.attributes
      }]
    });
    this.trackLinkElement(linkEl);
  }
  trackLinkElement(linkEl) {
    if (this.trackedLinkElements.has(linkEl)) return;
    this.trackedLinkElements.add(linkEl);
    this.trackStylesheetInLinkElement(linkEl);
  }
  adoptStyleSheets(sheets, hostId) {
    if (sheets.length === 0) return;
    const adoptedStyleSheetData = {
      id: hostId,
      styleIds: []
    };
    const styles = [];
    for (const sheet of sheets) {
      let styleId;
      if (!this.styleMirror.has(sheet)) {
        styleId = this.styleMirror.add(sheet);
        styles.push({
          styleId,
          rules: Array.from(sheet.rules || CSSRule, (r2, index) => ({
            rule: stringifyRule(r2),
            index
          }))
        });
      } else styleId = this.styleMirror.getId(sheet);
      adoptedStyleSheetData.styleIds.push(styleId);
    }
    if (styles.length > 0) adoptedStyleSheetData.styles = styles;
    this.adoptedStyleSheetCb(adoptedStyleSheetData);
  }
  reset() {
    this.styleMirror.reset();
    this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
  }
  // TODO: take snapshot on stylesheet reload by applying event listener
  trackStylesheetInLinkElement(_linkEl) {
  }
};
var ProcessedNodeManager = class {
  constructor() {
    this.nodeMap = /* @__PURE__ */ new WeakMap();
    this.active = false;
  }
  inOtherBuffer(node, thisBuffer) {
    const buffers = this.nodeMap.get(node);
    return buffers && Array.from(buffers).some((buffer) => buffer !== thisBuffer);
  }
  add(node, buffer) {
    if (!this.active) {
      this.active = true;
      onRequestAnimationFrame(() => {
        this.nodeMap = /* @__PURE__ */ new WeakMap();
        this.active = false;
      });
    }
    this.nodeMap.set(node, (this.nodeMap.get(node) || /* @__PURE__ */ new Set()).add(buffer));
  }
  destroy() {
  }
};
var wrappedEmit;
var _takeFullSnapshot;
try {
  if (Array.from([1], (x) => x * 2)[0] !== 2) {
    const cleanFrame = document.createElement("iframe");
    document.body.appendChild(cleanFrame);
    Array.from = cleanFrame.contentWindow?.Array.from || Array.from;
    document.body.removeChild(cleanFrame);
  }
} catch (err) {
  console.debug("Unable to override Array.from", err);
}
var mirror = createMirror$2();
function record(options = {}) {
  const {
    emit,
    checkoutEveryNms,
    checkoutEveryNth,
    blockClass = "rr-block",
    blockSelector = null,
    unblockSelector = null,
    ignoreClass = "rr-ignore",
    ignoreSelector = null,
    maskAllText = false,
    maskTextClass = "rr-mask",
    unmaskTextClass = null,
    maskTextSelector = null,
    unmaskTextSelector = null,
    inlineStylesheet = true,
    maskAllInputs,
    maskInputOptions: _maskInputOptions,
    slimDOMOptions: _slimDOMOptions,
    maskAttributeFn,
    maskInputFn,
    maskTextFn,
    maxCanvasSize = null,
    packFn,
    sampling = {},
    dataURLOptions = {},
    mousemoveWait,
    recordDOM = true,
    recordCanvas = false,
    recordCrossOriginIframes = false,
    recordAfter = options.recordAfter === "DOMContentLoaded" ? options.recordAfter : "load",
    userTriggeredOnInput = false,
    collectFonts = false,
    inlineImages = false,
    plugins,
    keepIframeSrcFn = () => false,
    ignoreCSSAttributes = /* @__PURE__ */ new Set([]),
    errorHandler: errorHandler2,
    onMutation,
    getCanvasManager
  } = options;
  registerErrorHandler(errorHandler2);
  const inEmittingFrame = recordCrossOriginIframes ? window.parent === window : true;
  let passEmitsToParent = false;
  if (!inEmittingFrame) {
    try {
      if (window.parent.document) {
        passEmitsToParent = false;
      }
    } catch (e2) {
      passEmitsToParent = true;
    }
  }
  if (inEmittingFrame && !emit) {
    throw new Error("emit function is required");
  }
  if (!inEmittingFrame && !passEmitsToParent) {
    return () => {
    };
  }
  if (mousemoveWait !== void 0 && sampling.mousemove === void 0) {
    sampling.mousemove = mousemoveWait;
  }
  mirror.reset();
  const maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true,
    radio: true,
    checkbox: true
  } : _maskInputOptions !== void 0 ? _maskInputOptions : {};
  const slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === "all" ? {
    script: true,
    comment: true,
    headFavicon: true,
    headWhitespace: true,
    headMetaSocial: true,
    headMetaRobots: true,
    headMetaHttpEquiv: true,
    headMetaVerification: true,
    // the following are off for slimDOMOptions === true,
    // as they destroy some (hidden) info:
    headMetaAuthorship: _slimDOMOptions === "all",
    headMetaDescKeywords: _slimDOMOptions === "all"
  } : _slimDOMOptions ? _slimDOMOptions : {};
  polyfill$1();
  let lastFullSnapshotEvent;
  let incrementalSnapshotCount = 0;
  const eventProcessor = (e2) => {
    for (const plugin of plugins || []) {
      if (plugin.eventProcessor) {
        e2 = plugin.eventProcessor(e2);
      }
    }
    if (packFn && // Disable packing events which will be emitted to parent frames.
    !passEmitsToParent) {
      e2 = packFn(e2);
    }
    return e2;
  };
  wrappedEmit = (r2, isCheckout) => {
    const e2 = r2;
    e2.timestamp = nowTimestamp();
    if (mutationBuffers[0]?.isFrozen() && e2.type !== EventType.FullSnapshot && !(e2.type === EventType.IncrementalSnapshot && e2.data.source === IncrementalSource.Mutation)) {
      mutationBuffers.forEach((buf) => buf.unfreeze());
    }
    if (inEmittingFrame) {
      emit?.(eventProcessor(e2), isCheckout);
    } else if (passEmitsToParent) {
      const message = {
        type: "rrweb",
        event: eventProcessor(e2),
        origin: window.location.origin,
        isCheckout
      };
      window.parent.postMessage(message, "*");
    }
    if (e2.type === EventType.FullSnapshot) {
      lastFullSnapshotEvent = e2;
      incrementalSnapshotCount = 0;
    } else if (e2.type === EventType.IncrementalSnapshot) {
      if (e2.data.source === IncrementalSource.Mutation && e2.data.isAttachIframe) {
        return;
      }
      incrementalSnapshotCount++;
      const exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
      const exceedTime = checkoutEveryNms && lastFullSnapshotEvent && e2.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;
      if (exceedCount || exceedTime) {
        takeFullSnapshot2(true);
      }
    }
  };
  const wrappedMutationEmit = (m) => {
    wrappedEmit({
      type: EventType.IncrementalSnapshot,
      data: __spreadValues({
        source: IncrementalSource.Mutation
      }, m)
    });
  };
  const wrappedScrollEmit = (p) => wrappedEmit({
    type: EventType.IncrementalSnapshot,
    data: __spreadValues({
      source: IncrementalSource.Scroll
    }, p)
  });
  const wrappedCanvasMutationEmit = (p) => wrappedEmit({
    type: EventType.IncrementalSnapshot,
    data: __spreadValues({
      source: IncrementalSource.CanvasMutation
    }, p)
  });
  const wrappedAdoptedStyleSheetEmit = (a2) => wrappedEmit({
    type: EventType.IncrementalSnapshot,
    data: __spreadValues({
      source: IncrementalSource.AdoptedStyleSheet
    }, a2)
  });
  const stylesheetManager = new StylesheetManager({
    mutationCb: wrappedMutationEmit,
    adoptedStyleSheetCb: wrappedAdoptedStyleSheetEmit
  });
  const iframeManager = typeof __RRWEB_EXCLUDE_IFRAME__ === "boolean" && __RRWEB_EXCLUDE_IFRAME__ ? new IframeManagerNoop() : new IframeManager({
    mirror,
    mutationCb: wrappedMutationEmit,
    stylesheetManager,
    recordCrossOriginIframes,
    wrappedEmit
  });
  for (const plugin of plugins || []) {
    if (plugin.getMirror) plugin.getMirror({
      nodeMirror: mirror,
      crossOriginIframeMirror: iframeManager.crossOriginIframeMirror,
      crossOriginIframeStyleMirror: iframeManager.crossOriginIframeStyleMirror
    });
  }
  const processedNodeManager = new ProcessedNodeManager();
  const canvasManager = _getCanvasManager(getCanvasManager, {
    mirror,
    win: window,
    mutationCb: (p) => wrappedEmit({
      type: EventType.IncrementalSnapshot,
      data: __spreadValues({
        source: IncrementalSource.CanvasMutation
      }, p)
    }),
    recordCanvas,
    blockClass,
    blockSelector,
    unblockSelector,
    maxCanvasSize,
    sampling: sampling["canvas"],
    dataURLOptions,
    errorHandler: errorHandler2
  });
  const shadowDomManager = typeof __RRWEB_EXCLUDE_SHADOW_DOM__ === "boolean" && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new ShadowDomManagerNoop() : new ShadowDomManager({
    mutationCb: wrappedMutationEmit,
    scrollCb: wrappedScrollEmit,
    bypassOptions: {
      onMutation,
      blockClass,
      blockSelector,
      unblockSelector,
      maskAllText,
      maskTextClass,
      unmaskTextClass,
      maskTextSelector,
      unmaskTextSelector,
      inlineStylesheet,
      maskInputOptions,
      dataURLOptions,
      maskAttributeFn,
      maskTextFn,
      maskInputFn,
      recordCanvas,
      inlineImages,
      sampling,
      slimDOMOptions,
      iframeManager,
      stylesheetManager,
      canvasManager,
      keepIframeSrcFn,
      processedNodeManager
    },
    mirror
  });
  const takeFullSnapshot2 = (isCheckout = false) => {
    if (!recordDOM) {
      return;
    }
    wrappedEmit({
      type: EventType.Meta,
      data: {
        href: window.location.href,
        width: getWindowWidth(),
        height: getWindowHeight()
      }
    }, isCheckout);
    stylesheetManager.reset();
    shadowDomManager.init();
    mutationBuffers.forEach((buf) => buf.lock());
    const node = snapshot(document, {
      mirror,
      blockClass,
      blockSelector,
      unblockSelector,
      maskAllText,
      maskTextClass,
      unmaskTextClass,
      maskTextSelector,
      unmaskTextSelector,
      inlineStylesheet,
      maskAllInputs: maskInputOptions,
      maskAttributeFn,
      maskInputFn,
      maskTextFn,
      slimDOM: slimDOMOptions,
      dataURLOptions,
      recordCanvas,
      inlineImages,
      onSerialize: (n2) => {
        if (isSerializedIframe(n2, mirror)) {
          iframeManager.addIframe(n2);
        }
        if (isSerializedStylesheet(n2, mirror)) {
          stylesheetManager.trackLinkElement(n2);
        }
        if (hasShadowRoot(n2)) {
          shadowDomManager.addShadowRoot(n2.shadowRoot, document);
        }
      },
      onIframeLoad: (iframe, childSn) => {
        iframeManager.attachIframe(iframe, childSn);
        if (iframe.contentWindow) {
          canvasManager.addWindow(iframe.contentWindow);
        }
        shadowDomManager.observeAttachShadow(iframe);
      },
      onStylesheetLoad: (linkEl, childSn) => {
        stylesheetManager.attachLinkElement(linkEl, childSn);
      },
      keepIframeSrcFn
    });
    if (!node) {
      return console.warn("Failed to snapshot the document");
    }
    wrappedEmit({
      type: EventType.FullSnapshot,
      data: {
        node,
        initialOffset: getWindowScroll(window)
      }
    });
    mutationBuffers.forEach((buf) => buf.unlock());
    if (document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0) stylesheetManager.adoptStyleSheets(document.adoptedStyleSheets, mirror.getId(document));
  };
  _takeFullSnapshot = takeFullSnapshot2;
  try {
    const handlers4 = [];
    const observe2 = (doc) => {
      return callbackWrapper(initObservers)({
        onMutation,
        mutationCb: wrappedMutationEmit,
        mousemoveCb: (positions, source) => wrappedEmit({
          type: EventType.IncrementalSnapshot,
          data: {
            source,
            positions
          }
        }),
        mouseInteractionCb: (d) => wrappedEmit({
          type: EventType.IncrementalSnapshot,
          data: __spreadValues({
            source: IncrementalSource.MouseInteraction
          }, d)
        }),
        scrollCb: wrappedScrollEmit,
        viewportResizeCb: (d) => wrappedEmit({
          type: EventType.IncrementalSnapshot,
          data: __spreadValues({
            source: IncrementalSource.ViewportResize
          }, d)
        }),
        inputCb: (v2) => wrappedEmit({
          type: EventType.IncrementalSnapshot,
          data: __spreadValues({
            source: IncrementalSource.Input
          }, v2)
        }),
        mediaInteractionCb: (p) => wrappedEmit({
          type: EventType.IncrementalSnapshot,
          data: __spreadValues({
            source: IncrementalSource.MediaInteraction
          }, p)
        }),
        styleSheetRuleCb: (r2) => wrappedEmit({
          type: EventType.IncrementalSnapshot,
          data: __spreadValues({
            source: IncrementalSource.StyleSheetRule
          }, r2)
        }),
        styleDeclarationCb: (r2) => wrappedEmit({
          type: EventType.IncrementalSnapshot,
          data: __spreadValues({
            source: IncrementalSource.StyleDeclaration
          }, r2)
        }),
        canvasMutationCb: wrappedCanvasMutationEmit,
        fontCb: (p) => wrappedEmit({
          type: EventType.IncrementalSnapshot,
          data: __spreadValues({
            source: IncrementalSource.Font
          }, p)
        }),
        selectionCb: (p) => {
          wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: __spreadValues({
              source: IncrementalSource.Selection
            }, p)
          });
        },
        customElementCb: (c2) => {
          wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: __spreadValues({
              source: IncrementalSource.CustomElement
            }, c2)
          });
        },
        blockClass,
        ignoreClass,
        ignoreSelector,
        maskAllText,
        maskTextClass,
        unmaskTextClass,
        maskTextSelector,
        unmaskTextSelector,
        maskInputOptions,
        inlineStylesheet,
        sampling,
        recordDOM,
        recordCanvas,
        inlineImages,
        userTriggeredOnInput,
        collectFonts,
        doc,
        maskAttributeFn,
        maskInputFn,
        maskTextFn,
        keepIframeSrcFn,
        blockSelector,
        unblockSelector,
        slimDOMOptions,
        dataURLOptions,
        mirror,
        iframeManager,
        stylesheetManager,
        shadowDomManager,
        processedNodeManager,
        canvasManager,
        ignoreCSSAttributes,
        plugins: plugins?.filter((p) => p.observer)?.map((p) => ({
          observer: p.observer,
          options: p.options,
          callback: (payload) => wrappedEmit({
            type: EventType.Plugin,
            data: {
              plugin: p.name,
              payload
            }
          })
        })) || []
      }, {});
    };
    iframeManager.addLoadListener((iframeEl) => {
      try {
        handlers4.push(observe2(iframeEl.contentDocument));
      } catch (error) {
        console.warn(error);
      }
    });
    const init3 = () => {
      takeFullSnapshot2();
      handlers4.push(observe2(document));
    };
    if (document.readyState === "interactive" || document.readyState === "complete") {
      init3();
    } else {
      handlers4.push(on("DOMContentLoaded", () => {
        wrappedEmit({
          type: EventType.DomContentLoaded,
          data: {}
        });
        if (recordAfter === "DOMContentLoaded") init3();
      }));
      handlers4.push(on("load", () => {
        wrappedEmit({
          type: EventType.Load,
          data: {}
        });
        if (recordAfter === "load") init3();
      }, window));
    }
    return () => {
      handlers4.forEach((h) => h());
      processedNodeManager.destroy();
      _takeFullSnapshot = void 0;
      unregisterErrorHandler();
    };
  } catch (error) {
    console.warn(error);
  }
}
function takeFullSnapshot(isCheckout) {
  if (!_takeFullSnapshot) {
    throw new Error("please take full snapshot after start recording");
  }
  _takeFullSnapshot(isCheckout);
}
record.mirror = mirror;
record.takeFullSnapshot = takeFullSnapshot;
function _getCanvasManager(getCanvasManagerFn, options) {
  try {
    return getCanvasManagerFn ? getCanvasManagerFn(options) : new CanvasManagerNoop();
  } catch {
    console.warn("Unable to initialize CanvasManager");
    return new CanvasManagerNoop();
  }
}
var n;
!function(t2) {
  t2[t2.NotStarted = 0] = "NotStarted", t2[t2.Running = 1] = "Running", t2[t2.Stopped = 2] = "Stopped";
}(n || (n = {}));
var ReplayEventTypeIncrementalSnapshot = 3;
var ReplayEventTypeCustom = 5;
function timestampToMs(timestamp) {
  const isMs = timestamp > 9999999999;
  return isMs ? timestamp : timestamp * 1e3;
}
function timestampToS(timestamp) {
  const isMs = timestamp > 9999999999;
  return isMs ? timestamp / 1e3 : timestamp;
}
function addBreadcrumbEvent(replay, breadcrumb) {
  if (breadcrumb.category === "sentry.transaction") {
    return;
  }
  if (["ui.click", "ui.input"].includes(breadcrumb.category)) {
    replay.triggerUserActivity();
  } else {
    replay.checkAndHandleExpiredSession();
  }
  replay.addUpdate(() => {
    replay.throttledAddEvent({
      type: EventType.Custom,
      // TODO: We were converting from ms to seconds for breadcrumbs, spans,
      // but maybe we should just keep them as milliseconds
      timestamp: (breadcrumb.timestamp || 0) * 1e3,
      data: {
        tag: "breadcrumb",
        // normalize to max. 10 depth and 1_000 properties per object
        payload: normalize(breadcrumb, 10, 1e3)
      }
    });
    return breadcrumb.category === "console";
  });
}
var INTERACTIVE_SELECTOR = "button,a";
function getClosestInteractive(element) {
  const closestInteractive = element.closest(INTERACTIVE_SELECTOR);
  return closestInteractive || element;
}
function getClickTargetNode(event) {
  const target = getTargetNode(event);
  if (!target || !(target instanceof Element)) {
    return target;
  }
  return getClosestInteractive(target);
}
function getTargetNode(event) {
  if (isEventWithTarget(event)) {
    return event.target;
  }
  return event;
}
function isEventWithTarget(event) {
  return typeof event === "object" && !!event && "target" in event;
}
var handlers3;
function onWindowOpen(cb) {
  if (!handlers3) {
    handlers3 = [];
    monkeyPatchWindowOpen();
  }
  handlers3.push(cb);
  return () => {
    const pos = handlers3 ? handlers3.indexOf(cb) : -1;
    if (pos > -1) {
      handlers3.splice(pos, 1);
    }
  };
}
function monkeyPatchWindowOpen() {
  fill(WINDOW5, "open", function(originalWindowOpen) {
    return function(...args) {
      if (handlers3) {
        try {
          handlers3.forEach((handler) => handler());
        } catch (e2) {
        }
      }
      return originalWindowOpen.apply(WINDOW5, args);
    };
  });
}
var IncrementalMutationSources = /* @__PURE__ */ new Set([IncrementalSource.Mutation, IncrementalSource.StyleSheetRule, IncrementalSource.StyleDeclaration, IncrementalSource.AdoptedStyleSheet, IncrementalSource.CanvasMutation, IncrementalSource.Selection, IncrementalSource.MediaInteraction]);
function handleClick(clickDetector, clickBreadcrumb, node) {
  clickDetector.handleClick(clickBreadcrumb, node);
}
var ClickDetector = class {
  // protected for testing
  constructor(replay, slowClickConfig, _addBreadcrumbEvent = addBreadcrumbEvent) {
    this._lastMutation = 0;
    this._lastScroll = 0;
    this._clicks = [];
    this._timeout = slowClickConfig.timeout / 1e3;
    this._threshold = slowClickConfig.threshold / 1e3;
    this._scrollTimeout = slowClickConfig.scrollTimeout / 1e3;
    this._replay = replay;
    this._ignoreSelector = slowClickConfig.ignoreSelector;
    this._addBreadcrumbEvent = _addBreadcrumbEvent;
  }
  /** Register click detection handlers on mutation or scroll. */
  addListeners() {
    const cleanupWindowOpen = onWindowOpen(() => {
      this._lastMutation = nowInSeconds();
    });
    this._teardown = () => {
      cleanupWindowOpen();
      this._clicks = [];
      this._lastMutation = 0;
      this._lastScroll = 0;
    };
  }
  /** Clean up listeners. */
  removeListeners() {
    if (this._teardown) {
      this._teardown();
    }
    if (this._checkClickTimeout) {
      clearTimeout(this._checkClickTimeout);
    }
  }
  /** @inheritDoc */
  handleClick(breadcrumb, node) {
    if (ignoreElement(node, this._ignoreSelector) || !isClickBreadcrumb(breadcrumb)) {
      return;
    }
    const newClick = {
      timestamp: timestampToS(breadcrumb.timestamp),
      clickBreadcrumb: breadcrumb,
      // Set this to 0 so we know it originates from the click breadcrumb
      clickCount: 0,
      node
    };
    if (this._clicks.some((click) => click.node === newClick.node && Math.abs(click.timestamp - newClick.timestamp) < 1)) {
      return;
    }
    this._clicks.push(newClick);
    if (this._clicks.length === 1) {
      this._scheduleCheckClicks();
    }
  }
  /** @inheritDoc */
  registerMutation(timestamp = Date.now()) {
    this._lastMutation = timestampToS(timestamp);
  }
  /** @inheritDoc */
  registerScroll(timestamp = Date.now()) {
    this._lastScroll = timestampToS(timestamp);
  }
  /** @inheritDoc */
  registerClick(element) {
    const node = getClosestInteractive(element);
    this._handleMultiClick(node);
  }
  /** Count multiple clicks on elements. */
  _handleMultiClick(node) {
    this._getClicks(node).forEach((click) => {
      click.clickCount++;
    });
  }
  /** Get all pending clicks for a given node. */
  _getClicks(node) {
    return this._clicks.filter((click) => click.node === node);
  }
  /** Check the clicks that happened. */
  _checkClicks() {
    const timedOutClicks = [];
    const now = nowInSeconds();
    this._clicks.forEach((click) => {
      if (!click.mutationAfter && this._lastMutation) {
        click.mutationAfter = click.timestamp <= this._lastMutation ? this._lastMutation - click.timestamp : void 0;
      }
      if (!click.scrollAfter && this._lastScroll) {
        click.scrollAfter = click.timestamp <= this._lastScroll ? this._lastScroll - click.timestamp : void 0;
      }
      if (click.timestamp + this._timeout <= now) {
        timedOutClicks.push(click);
      }
    });
    for (const click of timedOutClicks) {
      const pos = this._clicks.indexOf(click);
      if (pos > -1) {
        this._generateBreadcrumbs(click);
        this._clicks.splice(pos, 1);
      }
    }
    if (this._clicks.length) {
      this._scheduleCheckClicks();
    }
  }
  /** Generate matching breadcrumb(s) for the click. */
  _generateBreadcrumbs(click) {
    const replay = this._replay;
    const hadScroll = click.scrollAfter && click.scrollAfter <= this._scrollTimeout;
    const hadMutation = click.mutationAfter && click.mutationAfter <= this._threshold;
    const isSlowClick = !hadScroll && !hadMutation;
    const {
      clickCount,
      clickBreadcrumb
    } = click;
    if (isSlowClick) {
      const timeAfterClickMs = Math.min(click.mutationAfter || this._timeout, this._timeout) * 1e3;
      const endReason = timeAfterClickMs < this._timeout * 1e3 ? "mutation" : "timeout";
      const breadcrumb = {
        type: "default",
        message: clickBreadcrumb.message,
        timestamp: clickBreadcrumb.timestamp,
        category: "ui.slowClickDetected",
        data: __spreadProps(__spreadValues({}, clickBreadcrumb.data), {
          url: WINDOW5.location.href,
          route: replay.getCurrentRoute(),
          timeAfterClickMs,
          endReason,
          // If clickCount === 0, it means multiClick was not correctly captured here
          // - we still want to send 1 in this case
          clickCount: clickCount || 1
        })
      };
      this._addBreadcrumbEvent(replay, breadcrumb);
      return;
    }
    if (clickCount > 1) {
      const breadcrumb = {
        type: "default",
        message: clickBreadcrumb.message,
        timestamp: clickBreadcrumb.timestamp,
        category: "ui.multiClick",
        data: __spreadProps(__spreadValues({}, clickBreadcrumb.data), {
          url: WINDOW5.location.href,
          route: replay.getCurrentRoute(),
          clickCount,
          metric: true
        })
      };
      this._addBreadcrumbEvent(replay, breadcrumb);
    }
  }
  /** Schedule to check current clicks. */
  _scheduleCheckClicks() {
    if (this._checkClickTimeout) {
      clearTimeout(this._checkClickTimeout);
    }
    this._checkClickTimeout = setTimeout2(() => this._checkClicks(), 1e3);
  }
};
var SLOW_CLICK_TAGS = ["A", "BUTTON", "INPUT"];
function ignoreElement(node, ignoreSelector) {
  if (!SLOW_CLICK_TAGS.includes(node.tagName)) {
    return true;
  }
  if (node.tagName === "INPUT" && !["submit", "button"].includes(node.getAttribute("type") || "")) {
    return true;
  }
  if (node.tagName === "A" && (node.hasAttribute("download") || node.hasAttribute("target") && node.getAttribute("target") !== "_self")) {
    return true;
  }
  if (ignoreSelector && node.matches(ignoreSelector)) {
    return true;
  }
  return false;
}
function isClickBreadcrumb(breadcrumb) {
  return !!(breadcrumb.data && typeof breadcrumb.data.nodeId === "number" && breadcrumb.timestamp);
}
function nowInSeconds() {
  return Date.now() / 1e3;
}
function updateClickDetectorForRecordingEvent(clickDetector, event) {
  try {
    if (!isIncrementalEvent(event)) {
      return;
    }
    const {
      source
    } = event.data;
    if (IncrementalMutationSources.has(source)) {
      clickDetector.registerMutation(event.timestamp);
    }
    if (source === IncrementalSource.Scroll) {
      clickDetector.registerScroll(event.timestamp);
    }
    if (isIncrementalMouseInteraction(event)) {
      const {
        type,
        id
      } = event.data;
      const node = record.mirror.getNode(id);
      if (node instanceof HTMLElement && type === MouseInteractions.Click) {
        clickDetector.registerClick(node);
      }
    }
  } catch {
  }
}
function isIncrementalEvent(event) {
  return event.type === ReplayEventTypeIncrementalSnapshot;
}
function isIncrementalMouseInteraction(event) {
  return event.data.source === IncrementalSource.MouseInteraction;
}
function createBreadcrumb(breadcrumb) {
  return __spreadValues({
    timestamp: Date.now() / 1e3,
    type: "default"
  }, breadcrumb);
}
var NodeType = /* @__PURE__ */ ((NodeType2) => {
  NodeType2[NodeType2["Document"] = 0] = "Document";
  NodeType2[NodeType2["DocumentType"] = 1] = "DocumentType";
  NodeType2[NodeType2["Element"] = 2] = "Element";
  NodeType2[NodeType2["Text"] = 3] = "Text";
  NodeType2[NodeType2["CDATA"] = 4] = "CDATA";
  NodeType2[NodeType2["Comment"] = 5] = "Comment";
  return NodeType2;
})(NodeType || {});
var ATTRIBUTES_TO_RECORD = /* @__PURE__ */ new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);
function getAttributesToRecord(attributes) {
  const obj = {};
  if (!attributes["data-sentry-component"] && attributes["data-sentry-element"]) {
    attributes["data-sentry-component"] = attributes["data-sentry-element"];
  }
  for (const key in attributes) {
    if (ATTRIBUTES_TO_RECORD.has(key)) {
      let normalizedKey = key;
      if (key === "data-testid" || key === "data-test-id") {
        normalizedKey = "testId";
      }
      obj[normalizedKey] = attributes[key];
    }
  }
  return obj;
}
var handleDomListener = (replay) => {
  return (handlerData) => {
    if (!replay.isEnabled()) {
      return;
    }
    const result = handleDom(handlerData);
    if (!result) {
      return;
    }
    const isClick = handlerData.name === "click";
    const event = isClick ? handlerData.event : void 0;
    if (isClick && replay.clickDetector && event && event.target && !event.altKey && !event.metaKey && !event.ctrlKey && !event.shiftKey) {
      handleClick(replay.clickDetector, result, getClickTargetNode(handlerData.event));
    }
    addBreadcrumbEvent(replay, result);
  };
};
function getBaseDomBreadcrumb(target, message) {
  const nodeId = record.mirror.getId(target);
  const node = nodeId && record.mirror.getNode(nodeId);
  const meta = node && record.mirror.getMeta(node);
  const element = meta && isElement2(meta) ? meta : null;
  return {
    message,
    data: element ? {
      nodeId,
      node: {
        id: nodeId,
        tagName: element.tagName,
        textContent: Array.from(element.childNodes).map((node2) => node2.type === NodeType.Text && node2.textContent).filter(Boolean).map((text) => text.trim()).join(""),
        attributes: getAttributesToRecord(element.attributes)
      }
    } : {}
  };
}
function handleDom(handlerData) {
  const {
    target,
    message
  } = getDomTarget(handlerData);
  return createBreadcrumb(__spreadValues({
    category: `ui.${handlerData.name}`
  }, getBaseDomBreadcrumb(target, message)));
}
function getDomTarget(handlerData) {
  const isClick = handlerData.name === "click";
  let message;
  let target = null;
  try {
    target = isClick ? getClickTargetNode(handlerData.event) : getTargetNode(handlerData.event);
    message = htmlTreeAsString(target, {
      maxStringLength: 200
    }) || "<unknown>";
  } catch (e2) {
    message = "<unknown>";
  }
  return {
    target,
    message
  };
}
function isElement2(node) {
  return node.type === NodeType.Element;
}
function handleKeyboardEvent(replay, event) {
  if (!replay.isEnabled()) {
    return;
  }
  replay.updateUserActivity();
  const breadcrumb = getKeyboardBreadcrumb(event);
  if (!breadcrumb) {
    return;
  }
  addBreadcrumbEvent(replay, breadcrumb);
}
function getKeyboardBreadcrumb(event) {
  const {
    metaKey,
    shiftKey,
    ctrlKey,
    altKey,
    key,
    target
  } = event;
  if (!target || isInputElement(target) || !key) {
    return null;
  }
  const hasModifierKey = metaKey || ctrlKey || altKey;
  const isCharacterKey = key.length === 1;
  if (!hasModifierKey && isCharacterKey) {
    return null;
  }
  const message = htmlTreeAsString(target, {
    maxStringLength: 200
  }) || "<unknown>";
  const baseBreadcrumb = getBaseDomBreadcrumb(target, message);
  return createBreadcrumb({
    category: "ui.keyDown",
    message,
    data: __spreadProps(__spreadValues({}, baseBreadcrumb.data), {
      metaKey,
      shiftKey,
      ctrlKey,
      altKey,
      key
    })
  });
}
function isInputElement(target) {
  return target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;
}
var ENTRY_TYPES = {
  // @ts-expect-error TODO: entry type does not fit the create* functions entry type
  resource: createResourceEntry,
  paint: createPaintEntry,
  // @ts-expect-error TODO: entry type does not fit the create* functions entry type
  navigation: createNavigationEntry
};
function webVitalHandler(getter, replay) {
  return ({
    metric
  }) => void replay.replayPerformanceEntries.push(getter(metric));
}
function createPerformanceEntries(entries) {
  return entries.map(createPerformanceEntry).filter(Boolean);
}
function createPerformanceEntry(entry) {
  const entryType = ENTRY_TYPES[entry.entryType];
  if (!entryType) {
    return null;
  }
  return entryType(entry);
}
function getAbsoluteTime(time) {
  return ((browserPerformanceTimeOrigin() || WINDOW5.performance.timeOrigin) + time) / 1e3;
}
function createPaintEntry(entry) {
  const {
    duration,
    entryType,
    name,
    startTime
  } = entry;
  const start = getAbsoluteTime(startTime);
  return {
    type: entryType,
    name,
    start,
    end: start + duration,
    data: void 0
  };
}
function createNavigationEntry(entry) {
  const {
    entryType,
    name,
    decodedBodySize,
    duration,
    domComplete,
    encodedBodySize,
    domContentLoadedEventStart,
    domContentLoadedEventEnd,
    domInteractive,
    loadEventStart,
    loadEventEnd,
    redirectCount,
    startTime,
    transferSize,
    type
  } = entry;
  if (duration === 0) {
    return null;
  }
  return {
    type: `${entryType}.${type}`,
    start: getAbsoluteTime(startTime),
    end: getAbsoluteTime(domComplete),
    name,
    data: {
      size: transferSize,
      decodedBodySize,
      encodedBodySize,
      duration,
      domInteractive,
      domContentLoadedEventStart,
      domContentLoadedEventEnd,
      loadEventStart,
      loadEventEnd,
      domComplete,
      redirectCount
    }
  };
}
function createResourceEntry(entry) {
  const {
    entryType,
    initiatorType,
    name,
    responseEnd,
    startTime,
    decodedBodySize,
    encodedBodySize,
    responseStatus,
    transferSize
  } = entry;
  if (["fetch", "xmlhttprequest"].includes(initiatorType)) {
    return null;
  }
  return {
    type: `${entryType}.${initiatorType}`,
    start: getAbsoluteTime(startTime),
    end: getAbsoluteTime(responseEnd),
    name,
    data: {
      size: transferSize,
      statusCode: responseStatus,
      decodedBodySize,
      encodedBodySize
    }
  };
}
function getLargestContentfulPaint(metric) {
  const lastEntry = metric.entries[metric.entries.length - 1];
  const node = lastEntry?.element ? [lastEntry.element] : void 0;
  return getWebVital(metric, "largest-contentful-paint", node);
}
function isLayoutShift(entry) {
  return entry.sources !== void 0;
}
function getCumulativeLayoutShift(metric) {
  const layoutShifts = [];
  const nodes = [];
  for (const entry of metric.entries) {
    if (isLayoutShift(entry)) {
      const nodeIds = [];
      for (const source of entry.sources) {
        if (source.node) {
          nodes.push(source.node);
          const nodeId = record.mirror.getId(source.node);
          if (nodeId) {
            nodeIds.push(nodeId);
          }
        }
      }
      layoutShifts.push({
        value: entry.value,
        nodeIds: nodeIds.length ? nodeIds : void 0
      });
    }
  }
  return getWebVital(metric, "cumulative-layout-shift", nodes, layoutShifts);
}
function getFirstInputDelay(metric) {
  const lastEntry = metric.entries[metric.entries.length - 1];
  const node = lastEntry?.target ? [lastEntry.target] : void 0;
  return getWebVital(metric, "first-input-delay", node);
}
function getInteractionToNextPaint(metric) {
  const lastEntry = metric.entries[metric.entries.length - 1];
  const node = lastEntry?.target ? [lastEntry.target] : void 0;
  return getWebVital(metric, "interaction-to-next-paint", node);
}
function getWebVital(metric, name, nodes, attributions) {
  const value = metric.value;
  const rating = metric.rating;
  const end = getAbsoluteTime(value);
  return {
    type: "web-vital",
    name,
    start: end,
    end,
    data: {
      value,
      size: value,
      rating,
      nodeIds: nodes ? nodes.map((node) => record.mirror.getId(node)) : void 0,
      attributions
    }
  };
}
function setupPerformanceObserver(replay) {
  function addPerformanceEntry(entry) {
    if (!replay.performanceEntries.includes(entry)) {
      replay.performanceEntries.push(entry);
    }
  }
  function onEntries({
    entries
  }) {
    entries.forEach(addPerformanceEntry);
  }
  const clearCallbacks = [];
  ["navigation", "paint", "resource"].forEach((type) => {
    clearCallbacks.push(addPerformanceInstrumentationHandler(type, onEntries));
  });
  clearCallbacks.push(addLcpInstrumentationHandler(webVitalHandler(getLargestContentfulPaint, replay)), addClsInstrumentationHandler(webVitalHandler(getCumulativeLayoutShift, replay)), addFidInstrumentationHandler(webVitalHandler(getFirstInputDelay, replay)), addInpInstrumentationHandler(webVitalHandler(getInteractionToNextPaint, replay)));
  return () => {
    clearCallbacks.forEach((clearCallback) => clearCallback());
  };
}
var DEBUG_BUILD4 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
var r = `var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new n(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new r(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,s=0,a=new n(r);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new n(r);for(s=1;s<r;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new n(1<<r);var f=15-r;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=r-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new n(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s:s,f:r[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new n(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort((function(t,n){return p[n.s]-p[t.s]||t.f-n.f}));s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=r;++h)if(t[h]==s&&h!=r)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=r[s];return 8*(i+4+e)},U=function(t,r,a,o,h,f,l,u,c,v,m){z(r,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,s=0|r.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=r[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(n.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(s),32768),this.s.z=n.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t.prototype.flush=function(){G.prototype.flush.call(this)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(J)return J.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=n.charCodeAt(o);f<128||r?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&n.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),s=i.length;return q(i,n),j(i,s-8,r.d()),j(i,s-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});`;
function e() {
  const e2 = new Blob([r]);
  return URL.createObjectURL(e2);
}
var CONSOLE_LEVELS2 = ["info", "warn", "error", "log"];
var PREFIX2 = "[Replay] ";
function _addBreadcrumb(message, level = "info") {
  addBreadcrumb({
    category: "console",
    data: {
      logger: "replay"
    },
    level,
    message: `${PREFIX2}${message}`
  }, {
    level
  });
}
function makeReplayLogger() {
  let _capture = false;
  let _trace = false;
  const _logger = {
    exception: () => void 0,
    infoTick: () => void 0,
    setConfig: (opts) => {
      _capture = !!opts.captureExceptions;
      _trace = !!opts.traceInternals;
    }
  };
  if (DEBUG_BUILD4) {
    CONSOLE_LEVELS2.forEach((name) => {
      _logger[name] = (...args) => {
        logger[name](PREFIX2, ...args);
        if (_trace) {
          _addBreadcrumb(args.join(""), severityLevelFromString(name));
        }
      };
    });
    _logger.exception = (error, ...message) => {
      if (message.length && _logger.error) {
        _logger.error(...message);
      }
      logger.error(PREFIX2, error);
      if (_capture) {
        captureException(error);
      } else if (_trace) {
        _addBreadcrumb(error, "error");
      }
    };
    _logger.infoTick = (...args) => {
      logger.info(PREFIX2, ...args);
      if (_trace) {
        setTimeout(() => _addBreadcrumb(args[0]), 0);
      }
    };
  } else {
    CONSOLE_LEVELS2.forEach((name) => {
      _logger[name] = () => void 0;
    });
  }
  return _logger;
}
var logger2 = makeReplayLogger();
var EventBufferSizeExceededError = class extends Error {
  constructor() {
    super(`Event buffer exceeded maximum size of ${REPLAY_MAX_EVENT_BUFFER_SIZE}.`);
  }
};
var EventBufferArray = class {
  /** All the events that are buffered to be sent. */
  /** @inheritdoc */
  /** @inheritdoc */
  constructor() {
    this.events = [];
    this._totalSize = 0;
    this.hasCheckout = false;
    this.waitForCheckout = false;
  }
  /** @inheritdoc */
  get hasEvents() {
    return this.events.length > 0;
  }
  /** @inheritdoc */
  get type() {
    return "sync";
  }
  /** @inheritdoc */
  destroy() {
    this.events = [];
  }
  /** @inheritdoc */
  addEvent(event) {
    return __async(this, null, function* () {
      const eventSize = JSON.stringify(event).length;
      this._totalSize += eventSize;
      if (this._totalSize > REPLAY_MAX_EVENT_BUFFER_SIZE) {
        throw new EventBufferSizeExceededError();
      }
      this.events.push(event);
    });
  }
  /** @inheritdoc */
  finish() {
    return new Promise((resolve) => {
      const eventsRet = this.events;
      this.clear();
      resolve(JSON.stringify(eventsRet));
    });
  }
  /** @inheritdoc */
  clear() {
    this.events = [];
    this._totalSize = 0;
    this.hasCheckout = false;
  }
  /** @inheritdoc */
  getEarliestTimestamp() {
    const timestamp = this.events.map((event) => event.timestamp).sort()[0];
    if (!timestamp) {
      return null;
    }
    return timestampToMs(timestamp);
  }
};
var WorkerHandler = class {
  constructor(worker) {
    this._worker = worker;
    this._id = 0;
  }
  /**
   * Ensure the worker is ready (or not).
   * This will either resolve when the worker is ready, or reject if an error occurred.
   */
  ensureReady() {
    if (this._ensureReadyPromise) {
      return this._ensureReadyPromise;
    }
    this._ensureReadyPromise = new Promise((resolve, reject) => {
      this._worker.addEventListener("message", ({
        data
      }) => {
        if (data.success) {
          resolve();
        } else {
          reject();
        }
      }, {
        once: true
      });
      this._worker.addEventListener("error", (error) => {
        reject(error);
      }, {
        once: true
      });
    });
    return this._ensureReadyPromise;
  }
  /**
   * Destroy the worker.
   */
  destroy() {
    DEBUG_BUILD4 && logger2.info("Destroying compression worker");
    this._worker.terminate();
  }
  /**
   * Post message to worker and wait for response before resolving promise.
   */
  postMessage(method, arg) {
    const id = this._getAndIncrementId();
    return new Promise((resolve, reject) => {
      const listener = ({
        data
      }) => {
        const response = data;
        if (response.method !== method) {
          return;
        }
        if (response.id !== id) {
          return;
        }
        this._worker.removeEventListener("message", listener);
        if (!response.success) {
          DEBUG_BUILD4 && logger2.error("Error in compression worker: ", response.response);
          reject(new Error("Error in compression worker"));
          return;
        }
        resolve(response.response);
      };
      this._worker.addEventListener("message", listener);
      this._worker.postMessage({
        id,
        method,
        arg
      });
    });
  }
  /** Get the current ID and increment it for the next call. */
  _getAndIncrementId() {
    return this._id++;
  }
};
var EventBufferCompressionWorker = class {
  /** @inheritdoc */
  /** @inheritdoc */
  constructor(worker) {
    this._worker = new WorkerHandler(worker);
    this._earliestTimestamp = null;
    this._totalSize = 0;
    this.hasCheckout = false;
    this.waitForCheckout = false;
  }
  /** @inheritdoc */
  get hasEvents() {
    return !!this._earliestTimestamp;
  }
  /** @inheritdoc */
  get type() {
    return "worker";
  }
  /**
   * Ensure the worker is ready (or not).
   * This will either resolve when the worker is ready, or reject if an error occurred.
   */
  ensureReady() {
    return this._worker.ensureReady();
  }
  /**
   * Destroy the event buffer.
   */
  destroy() {
    this._worker.destroy();
  }
  /**
   * Add an event to the event buffer.
   *
   * Returns true if event was successfully received and processed by worker.
   */
  addEvent(event) {
    const timestamp = timestampToMs(event.timestamp);
    if (!this._earliestTimestamp || timestamp < this._earliestTimestamp) {
      this._earliestTimestamp = timestamp;
    }
    const data = JSON.stringify(event);
    this._totalSize += data.length;
    if (this._totalSize > REPLAY_MAX_EVENT_BUFFER_SIZE) {
      return Promise.reject(new EventBufferSizeExceededError());
    }
    return this._sendEventToWorker(data);
  }
  /**
   * Finish the event buffer and return the compressed data.
   */
  finish() {
    return this._finishRequest();
  }
  /** @inheritdoc */
  clear() {
    this._earliestTimestamp = null;
    this._totalSize = 0;
    this.hasCheckout = false;
    this._worker.postMessage("clear").then(null, (e2) => {
      DEBUG_BUILD4 && logger2.exception(e2, 'Sending "clear" message to worker failed', e2);
    });
  }
  /** @inheritdoc */
  getEarliestTimestamp() {
    return this._earliestTimestamp;
  }
  /**
   * Send the event to the worker.
   */
  _sendEventToWorker(data) {
    return this._worker.postMessage("addEvent", data);
  }
  /**
   * Finish the request and return the compressed data from the worker.
   */
  _finishRequest() {
    return __async(this, null, function* () {
      const response = yield this._worker.postMessage("finish");
      this._earliestTimestamp = null;
      this._totalSize = 0;
      return response;
    });
  }
};
var EventBufferProxy = class {
  constructor(worker) {
    this._fallback = new EventBufferArray();
    this._compression = new EventBufferCompressionWorker(worker);
    this._used = this._fallback;
    this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded();
  }
  /** @inheritdoc */
  get waitForCheckout() {
    return this._used.waitForCheckout;
  }
  /** @inheritdoc */
  get type() {
    return this._used.type;
  }
  /** @inheritDoc */
  get hasEvents() {
    return this._used.hasEvents;
  }
  /** @inheritdoc */
  get hasCheckout() {
    return this._used.hasCheckout;
  }
  /** @inheritdoc */
  set hasCheckout(value) {
    this._used.hasCheckout = value;
  }
  /** @inheritdoc */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  set waitForCheckout(value) {
    this._used.waitForCheckout = value;
  }
  /** @inheritDoc */
  destroy() {
    this._fallback.destroy();
    this._compression.destroy();
  }
  /** @inheritdoc */
  clear() {
    return this._used.clear();
  }
  /** @inheritdoc */
  getEarliestTimestamp() {
    return this._used.getEarliestTimestamp();
  }
  /**
   * Add an event to the event buffer.
   *
   * Returns true if event was successfully added.
   */
  addEvent(event) {
    return this._used.addEvent(event);
  }
  /** @inheritDoc */
  finish() {
    return __async(this, null, function* () {
      yield this.ensureWorkerIsLoaded();
      return this._used.finish();
    });
  }
  /** Ensure the worker has loaded. */
  ensureWorkerIsLoaded() {
    return this._ensureWorkerIsLoadedPromise;
  }
  /** Actually check if the worker has been loaded. */
  _ensureWorkerIsLoaded() {
    return __async(this, null, function* () {
      try {
        yield this._compression.ensureReady();
      } catch (error) {
        DEBUG_BUILD4 && logger2.exception(error, "Failed to load the compression worker, falling back to simple buffer");
        return;
      }
      yield this._switchToCompressionWorker();
    });
  }
  /** Switch the used buffer to the compression worker. */
  _switchToCompressionWorker() {
    return __async(this, null, function* () {
      const {
        events,
        hasCheckout,
        waitForCheckout
      } = this._fallback;
      const addEventPromises = [];
      for (const event of events) {
        addEventPromises.push(this._compression.addEvent(event));
      }
      this._compression.hasCheckout = hasCheckout;
      this._compression.waitForCheckout = waitForCheckout;
      this._used = this._compression;
      try {
        yield Promise.all(addEventPromises);
        this._fallback.clear();
      } catch (error) {
        DEBUG_BUILD4 && logger2.exception(error, "Failed to add events when switching buffers.");
      }
    });
  }
};
function createEventBuffer({
  useCompression,
  workerUrl: customWorkerUrl
}) {
  if (useCompression && // eslint-disable-next-line no-restricted-globals
  window.Worker) {
    const worker = _loadWorker(customWorkerUrl);
    if (worker) {
      return worker;
    }
  }
  DEBUG_BUILD4 && logger2.info("Using simple buffer");
  return new EventBufferArray();
}
function _loadWorker(customWorkerUrl) {
  try {
    const workerUrl = customWorkerUrl || _getWorkerUrl();
    if (!workerUrl) {
      return;
    }
    DEBUG_BUILD4 && logger2.info(`Using compression worker${customWorkerUrl ? ` from ${customWorkerUrl}` : ""}`);
    const worker = new Worker(workerUrl);
    return new EventBufferProxy(worker);
  } catch (error) {
    DEBUG_BUILD4 && logger2.exception(error, "Failed to create compression worker");
  }
}
function _getWorkerUrl() {
  if (typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ === "undefined" || !__SENTRY_EXCLUDE_REPLAY_WORKER__) {
    return e();
  }
  return "";
}
function hasSessionStorage() {
  try {
    return "sessionStorage" in WINDOW5 && !!WINDOW5.sessionStorage;
  } catch {
    return false;
  }
}
function clearSession(replay) {
  deleteSession();
  replay.session = void 0;
}
function deleteSession() {
  if (!hasSessionStorage()) {
    return;
  }
  try {
    WINDOW5.sessionStorage.removeItem(REPLAY_SESSION_KEY);
  } catch {
  }
}
function isSampled(sampleRate) {
  if (sampleRate === void 0) {
    return false;
  }
  return Math.random() < sampleRate;
}
function saveSession(session) {
  if (!hasSessionStorage()) {
    return;
  }
  try {
    WINDOW5.sessionStorage.setItem(REPLAY_SESSION_KEY, JSON.stringify(session));
  } catch {
  }
}
function makeSession2(session) {
  const now = Date.now();
  const id = session.id || uuid4();
  const started = session.started || now;
  const lastActivity = session.lastActivity || now;
  const segmentId = session.segmentId || 0;
  const sampled = session.sampled;
  const previousSessionId = session.previousSessionId;
  return {
    id,
    started,
    lastActivity,
    segmentId,
    sampled,
    previousSessionId
  };
}
function getSessionSampleType(sessionSampleRate, allowBuffering) {
  return isSampled(sessionSampleRate) ? "session" : allowBuffering ? "buffer" : false;
}
function createSession({
  sessionSampleRate,
  allowBuffering,
  stickySession = false
}, {
  previousSessionId
} = {}) {
  const sampled = getSessionSampleType(sessionSampleRate, allowBuffering);
  const session = makeSession2({
    sampled,
    previousSessionId
  });
  if (stickySession) {
    saveSession(session);
  }
  return session;
}
function fetchSession() {
  if (!hasSessionStorage()) {
    return null;
  }
  try {
    const sessionStringFromStorage = WINDOW5.sessionStorage.getItem(REPLAY_SESSION_KEY);
    if (!sessionStringFromStorage) {
      return null;
    }
    const sessionObj = JSON.parse(sessionStringFromStorage);
    DEBUG_BUILD4 && logger2.infoTick("Loading existing session");
    return makeSession2(sessionObj);
  } catch {
    return null;
  }
}
function isExpired(initialTime, expiry, targetTime = +/* @__PURE__ */ new Date()) {
  if (initialTime === null || expiry === void 0 || expiry < 0) {
    return true;
  }
  if (expiry === 0) {
    return false;
  }
  return initialTime + expiry <= targetTime;
}
function isSessionExpired(session, {
  maxReplayDuration,
  sessionIdleExpire,
  targetTime = Date.now()
}) {
  return (
    // First, check that maximum session length has not been exceeded
    isExpired(session.started, maxReplayDuration, targetTime) || // check that the idle timeout has not been exceeded (i.e. user has
    // performed an action within the last `sessionIdleExpire` ms)
    isExpired(session.lastActivity, sessionIdleExpire, targetTime)
  );
}
function shouldRefreshSession(session, {
  sessionIdleExpire,
  maxReplayDuration
}) {
  if (!isSessionExpired(session, {
    sessionIdleExpire,
    maxReplayDuration
  })) {
    return false;
  }
  if (session.sampled === "buffer" && session.segmentId === 0) {
    return false;
  }
  return true;
}
function loadOrCreateSession({
  sessionIdleExpire,
  maxReplayDuration,
  previousSessionId
}, sessionOptions) {
  const existingSession = sessionOptions.stickySession && fetchSession();
  if (!existingSession) {
    DEBUG_BUILD4 && logger2.infoTick("Creating new session");
    return createSession(sessionOptions, {
      previousSessionId
    });
  }
  if (!shouldRefreshSession(existingSession, {
    sessionIdleExpire,
    maxReplayDuration
  })) {
    return existingSession;
  }
  DEBUG_BUILD4 && logger2.infoTick("Session in sessionStorage is expired, creating new one...");
  return createSession(sessionOptions, {
    previousSessionId: existingSession.id
  });
}
function isCustomEvent(event) {
  return event.type === EventType.Custom;
}
function addEventSync(replay, event, isCheckout) {
  if (!shouldAddEvent(replay, event)) {
    return false;
  }
  _addEvent(replay, event, isCheckout);
  return true;
}
function addEvent(replay, event, isCheckout) {
  if (!shouldAddEvent(replay, event)) {
    return Promise.resolve(null);
  }
  return _addEvent(replay, event, isCheckout);
}
function _addEvent(replay, event, isCheckout) {
  return __async(this, null, function* () {
    const {
      eventBuffer
    } = replay;
    if (!eventBuffer || eventBuffer.waitForCheckout && !isCheckout) {
      return null;
    }
    const isBufferMode = replay.recordingMode === "buffer";
    try {
      if (isCheckout && isBufferMode) {
        eventBuffer.clear();
      }
      if (isCheckout) {
        eventBuffer.hasCheckout = true;
        eventBuffer.waitForCheckout = false;
      }
      const replayOptions = replay.getOptions();
      const eventAfterPossibleCallback = maybeApplyCallback(event, replayOptions.beforeAddRecordingEvent);
      if (!eventAfterPossibleCallback) {
        return;
      }
      return yield eventBuffer.addEvent(eventAfterPossibleCallback);
    } catch (error) {
      const isExceeded = error && error instanceof EventBufferSizeExceededError;
      const reason = isExceeded ? "addEventSizeExceeded" : "addEvent";
      if (isExceeded && isBufferMode) {
        eventBuffer.clear();
        eventBuffer.waitForCheckout = true;
        return null;
      }
      replay.handleException(error);
      yield replay.stop({
        reason
      });
      const client = getClient();
      if (client) {
        client.recordDroppedEvent("internal_sdk_error", "replay");
      }
    }
  });
}
function shouldAddEvent(replay, event) {
  if (!replay.eventBuffer || replay.isPaused() || !replay.isEnabled()) {
    return false;
  }
  const timestampInMs = timestampToMs(event.timestamp);
  if (timestampInMs + replay.timeouts.sessionIdlePause < Date.now()) {
    return false;
  }
  if (timestampInMs > replay.getContext().initialTimestamp + replay.getOptions().maxReplayDuration) {
    DEBUG_BUILD4 && logger2.infoTick(`Skipping event with timestamp ${timestampInMs} because it is after maxReplayDuration`);
    return false;
  }
  return true;
}
function maybeApplyCallback(event, callback) {
  try {
    if (typeof callback === "function" && isCustomEvent(event)) {
      return callback(event);
    }
  } catch (error) {
    DEBUG_BUILD4 && logger2.exception(error, "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event...");
    return null;
  }
  return event;
}
function isErrorEvent3(event) {
  return !event.type;
}
function isTransactionEvent2(event) {
  return event.type === "transaction";
}
function isReplayEvent(event) {
  return event.type === "replay_event";
}
function isFeedbackEvent(event) {
  return event.type === "feedback";
}
function handleAfterSendEvent(replay) {
  return (event, sendResponse) => {
    if (!replay.isEnabled() || !isErrorEvent3(event) && !isTransactionEvent2(event)) {
      return;
    }
    const statusCode = sendResponse?.statusCode;
    if (!statusCode || statusCode < 200 || statusCode >= 300) {
      return;
    }
    if (isTransactionEvent2(event)) {
      handleTransactionEvent(replay, event);
      return;
    }
    handleErrorEvent(replay, event);
  };
}
function handleTransactionEvent(replay, event) {
  const replayContext = replay.getContext();
  if (event.contexts?.trace?.trace_id && replayContext.traceIds.size < 100) {
    replayContext.traceIds.add(event.contexts.trace.trace_id);
  }
}
function handleErrorEvent(replay, event) {
  const replayContext = replay.getContext();
  if (event.event_id && replayContext.errorIds.size < 100) {
    replayContext.errorIds.add(event.event_id);
  }
  if (replay.recordingMode !== "buffer" || !event.tags || !event.tags.replayId) {
    return;
  }
  const {
    beforeErrorSampling
  } = replay.getOptions();
  if (typeof beforeErrorSampling === "function" && !beforeErrorSampling(event)) {
    return;
  }
  setTimeout2(() => __async(this, null, function* () {
    try {
      yield replay.sendBufferedReplayOrFlush();
    } catch (err) {
      replay.handleException(err);
    }
  }));
}
function handleBeforeSendEvent(replay) {
  return (event) => {
    if (!replay.isEnabled() || !isErrorEvent3(event)) {
      return;
    }
    handleHydrationError(replay, event);
  };
}
function handleHydrationError(replay, event) {
  const exceptionValue = event.exception?.values?.[0]?.value;
  if (typeof exceptionValue !== "string") {
    return;
  }
  if (
    // Only matches errors in production builds of react-dom
    // Example https://reactjs.org/docs/error-decoder.html?invariant=423
    // With newer React versions, the messages changed to a different website https://react.dev/errors/418
    exceptionValue.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || // Development builds of react-dom
    // Error 1: Hydration failed because the initial UI does not match what was rendered on the server.
    // Error 2: Text content does not match server-rendered HTML. Warning: Text content did not match.
    exceptionValue.match(/(does not match server-rendered HTML|Hydration failed because)/i)
  ) {
    const breadcrumb = createBreadcrumb({
      category: "replay.hydrate-error",
      data: {
        url: getLocationHref()
      }
    });
    addBreadcrumbEvent(replay, breadcrumb);
  }
}
function handleBreadcrumbs(replay) {
  const client = getClient();
  if (!client) {
    return;
  }
  client.on("beforeAddBreadcrumb", (breadcrumb) => beforeAddBreadcrumb(replay, breadcrumb));
}
function beforeAddBreadcrumb(replay, breadcrumb) {
  if (!replay.isEnabled() || !isBreadcrumbWithCategory(breadcrumb)) {
    return;
  }
  const result = normalizeBreadcrumb(breadcrumb);
  if (result) {
    addBreadcrumbEvent(replay, result);
  }
}
function normalizeBreadcrumb(breadcrumb) {
  if (!isBreadcrumbWithCategory(breadcrumb) || [
    // fetch & xhr are handled separately,in handleNetworkBreadcrumbs
    "fetch",
    "xhr",
    // These two are breadcrumbs for emitted sentry events, we don't care about them
    "sentry.event",
    "sentry.transaction"
  ].includes(breadcrumb.category) || // We capture UI breadcrumbs separately
  breadcrumb.category.startsWith("ui.")) {
    return null;
  }
  if (breadcrumb.category === "console") {
    return normalizeConsoleBreadcrumb(breadcrumb);
  }
  return createBreadcrumb(breadcrumb);
}
function normalizeConsoleBreadcrumb(breadcrumb) {
  const args = breadcrumb.data?.arguments;
  if (!Array.isArray(args) || args.length === 0) {
    return createBreadcrumb(breadcrumb);
  }
  let isTruncated = false;
  const normalizedArgs = args.map((arg) => {
    if (!arg) {
      return arg;
    }
    if (typeof arg === "string") {
      if (arg.length > CONSOLE_ARG_MAX_SIZE) {
        isTruncated = true;
        return `${arg.slice(0, CONSOLE_ARG_MAX_SIZE)}\u2026`;
      }
      return arg;
    }
    if (typeof arg === "object") {
      try {
        const normalizedArg = normalize(arg, 7);
        const stringified = JSON.stringify(normalizedArg);
        if (stringified.length > CONSOLE_ARG_MAX_SIZE) {
          isTruncated = true;
          return `${JSON.stringify(normalizedArg, null, 2).slice(0, CONSOLE_ARG_MAX_SIZE)}\u2026`;
        }
        return normalizedArg;
      } catch {
      }
    }
    return arg;
  });
  return createBreadcrumb(__spreadProps(__spreadValues({}, breadcrumb), {
    data: __spreadValues(__spreadProps(__spreadValues({}, breadcrumb.data), {
      arguments: normalizedArgs
    }), isTruncated ? {
      _meta: {
        warnings: ["CONSOLE_ARG_TRUNCATED"]
      }
    } : {})
  }));
}
function isBreadcrumbWithCategory(breadcrumb) {
  return !!breadcrumb.category;
}
function isRrwebError(event, hint) {
  if (event.type || !event.exception || !event.exception.values || !event.exception.values.length) {
    return false;
  }
  if (hint.originalException?.__rrweb__) {
    return true;
  }
  return false;
}
function resetReplayIdOnDynamicSamplingContext() {
  const dsc = getCurrentScope().getPropagationContext().dsc;
  if (dsc) {
    delete dsc.replay_id;
  }
  const activeSpan = getActiveSpan();
  if (activeSpan) {
    const dsc2 = getDynamicSamplingContextFromSpan(activeSpan);
    delete dsc2.replay_id;
  }
}
function addFeedbackBreadcrumb(replay, event) {
  replay.triggerUserActivity();
  replay.addUpdate(() => {
    if (!event.timestamp) {
      return true;
    }
    replay.throttledAddEvent({
      type: EventType.Custom,
      timestamp: event.timestamp * 1e3,
      data: {
        tag: "breadcrumb",
        payload: {
          timestamp: event.timestamp,
          type: "default",
          category: "sentry.feedback",
          data: {
            feedbackId: event.event_id
          }
        }
      }
    });
    return false;
  });
}
function shouldSampleForBufferEvent(replay, event) {
  if (replay.recordingMode !== "buffer") {
    return false;
  }
  if (event.message === UNABLE_TO_SEND_REPLAY) {
    return false;
  }
  if (!event.exception || event.type) {
    return false;
  }
  return isSampled(replay.getOptions().errorSampleRate);
}
function handleGlobalEventListener(replay) {
  return Object.assign((event, hint) => {
    if (!replay.isEnabled() || replay.isPaused()) {
      return event;
    }
    if (isReplayEvent(event)) {
      delete event.breadcrumbs;
      return event;
    }
    if (!isErrorEvent3(event) && !isTransactionEvent2(event) && !isFeedbackEvent(event)) {
      return event;
    }
    const isSessionActive = replay.checkAndHandleExpiredSession();
    if (!isSessionActive) {
      resetReplayIdOnDynamicSamplingContext();
      return event;
    }
    if (isFeedbackEvent(event)) {
      replay.flush();
      event.contexts.feedback.replay_id = replay.getSessionId();
      addFeedbackBreadcrumb(replay, event);
      return event;
    }
    if (isRrwebError(event, hint) && !replay.getOptions()._experiments.captureExceptions) {
      DEBUG_BUILD4 && logger2.log("Ignoring error from rrweb internals", event);
      return null;
    }
    const isErrorEventSampled = shouldSampleForBufferEvent(replay, event);
    const shouldTagReplayId = isErrorEventSampled || replay.recordingMode === "session";
    if (shouldTagReplayId) {
      event.tags = __spreadProps(__spreadValues({}, event.tags), {
        replayId: replay.getSessionId()
      });
    }
    return event;
  }, {
    id: "Replay"
  });
}
function createPerformanceSpans(replay, entries) {
  return entries.map(({
    type,
    start,
    end,
    name,
    data
  }) => {
    const response = replay.throttledAddEvent({
      type: EventType.Custom,
      timestamp: start,
      data: {
        tag: "performanceSpan",
        payload: {
          op: type,
          description: name,
          startTimestamp: start,
          endTimestamp: end,
          data
        }
      }
    });
    return typeof response === "string" ? Promise.resolve(null) : response;
  });
}
function handleHistory(handlerData) {
  const {
    from: from2,
    to
  } = handlerData;
  const now = Date.now() / 1e3;
  return {
    type: "navigation.push",
    start: now,
    end: now,
    name: to,
    data: {
      previous: from2
    }
  };
}
function handleHistorySpanListener(replay) {
  return (handlerData) => {
    if (!replay.isEnabled()) {
      return;
    }
    const result = handleHistory(handlerData);
    if (result === null) {
      return;
    }
    replay.getContext().urls.push(result.name);
    replay.triggerUserActivity();
    replay.addUpdate(() => {
      createPerformanceSpans(replay, [result]);
      return false;
    });
  };
}
function shouldFilterRequest(replay, url) {
  if (DEBUG_BUILD4 && replay.getOptions()._experiments.traceInternals) {
    return false;
  }
  return isSentryRequestUrl(url, getClient());
}
function addNetworkBreadcrumb(replay, result) {
  if (!replay.isEnabled()) {
    return;
  }
  if (result === null) {
    return;
  }
  if (shouldFilterRequest(replay, result.name)) {
    return;
  }
  replay.addUpdate(() => {
    createPerformanceSpans(replay, [result]);
    return true;
  });
}
function getBodySize(body) {
  if (!body) {
    return void 0;
  }
  const textEncoder = new TextEncoder();
  try {
    if (typeof body === "string") {
      return textEncoder.encode(body).length;
    }
    if (body instanceof URLSearchParams) {
      return textEncoder.encode(body.toString()).length;
    }
    if (body instanceof FormData) {
      const formDataStr = serializeFormData(body);
      return textEncoder.encode(formDataStr).length;
    }
    if (body instanceof Blob) {
      return body.size;
    }
    if (body instanceof ArrayBuffer) {
      return body.byteLength;
    }
  } catch {
  }
  return void 0;
}
function parseContentLengthHeader(header) {
  if (!header) {
    return void 0;
  }
  const size = parseInt(header, 10);
  return isNaN(size) ? void 0 : size;
}
function mergeWarning(info, warning) {
  if (!info) {
    return {
      headers: {},
      size: void 0,
      _meta: {
        warnings: [warning]
      }
    };
  }
  const newMeta = __spreadValues({}, info._meta);
  const existingWarnings = newMeta.warnings || [];
  newMeta.warnings = [...existingWarnings, warning];
  info._meta = newMeta;
  return info;
}
function makeNetworkReplayBreadcrumb(type, data) {
  if (!data) {
    return null;
  }
  const {
    startTimestamp,
    endTimestamp,
    url,
    method,
    statusCode,
    request,
    response
  } = data;
  const result = {
    type,
    start: startTimestamp / 1e3,
    end: endTimestamp / 1e3,
    name: url,
    data: {
      method,
      statusCode,
      request,
      response
    }
  };
  return result;
}
function buildSkippedNetworkRequestOrResponse(bodySize) {
  return {
    headers: {},
    size: bodySize,
    _meta: {
      warnings: ["URL_SKIPPED"]
    }
  };
}
function buildNetworkRequestOrResponse(headers, bodySize, body) {
  if (!bodySize && Object.keys(headers).length === 0) {
    return void 0;
  }
  if (!bodySize) {
    return {
      headers
    };
  }
  if (!body) {
    return {
      headers,
      size: bodySize
    };
  }
  const info = {
    headers,
    size: bodySize
  };
  const {
    body: normalizedBody,
    warnings
  } = normalizeNetworkBody(body);
  info.body = normalizedBody;
  if (warnings?.length) {
    info._meta = {
      warnings
    };
  }
  return info;
}
function getAllowedHeaders(headers, allowedHeaders) {
  return Object.entries(headers).reduce((filteredHeaders, [key, value]) => {
    const normalizedKey = key.toLowerCase();
    if (allowedHeaders.includes(normalizedKey) && headers[key]) {
      filteredHeaders[normalizedKey] = value;
    }
    return filteredHeaders;
  }, {});
}
function normalizeNetworkBody(body) {
  if (!body || typeof body !== "string") {
    return {
      body
    };
  }
  const exceedsSizeLimit = body.length > NETWORK_BODY_MAX_SIZE;
  const isProbablyJson = _strIsProbablyJson(body);
  if (exceedsSizeLimit) {
    const truncatedBody = body.slice(0, NETWORK_BODY_MAX_SIZE);
    if (isProbablyJson) {
      return {
        body: truncatedBody,
        warnings: ["MAYBE_JSON_TRUNCATED"]
      };
    }
    return {
      body: `${truncatedBody}\u2026`,
      warnings: ["TEXT_TRUNCATED"]
    };
  }
  if (isProbablyJson) {
    try {
      const jsonBody = JSON.parse(body);
      return {
        body: jsonBody
      };
    } catch {
    }
  }
  return {
    body
  };
}
function _strIsProbablyJson(str) {
  const first2 = str[0];
  const last = str[str.length - 1];
  return first2 === "[" && last === "]" || first2 === "{" && last === "}";
}
function urlMatches(url, urls) {
  const fullUrl = getFullUrl(url);
  return stringMatchesSomePattern(fullUrl, urls);
}
function getFullUrl(url, baseURI = WINDOW5.document.baseURI) {
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith(WINDOW5.location.origin)) {
    return url;
  }
  const fixedUrl = new URL(url, baseURI);
  if (fixedUrl.origin !== new URL(baseURI).origin) {
    return url;
  }
  const fullUrl = fixedUrl.href;
  if (!url.endsWith("/") && fullUrl.endsWith("/")) {
    return fullUrl.slice(0, -1);
  }
  return fullUrl;
}
function captureFetchBreadcrumbToReplay(breadcrumb, hint, options) {
  return __async(this, null, function* () {
    try {
      const data = yield _prepareFetchData(breadcrumb, hint, options);
      const result = makeNetworkReplayBreadcrumb("resource.fetch", data);
      addNetworkBreadcrumb(options.replay, result);
    } catch (error) {
      DEBUG_BUILD4 && logger2.exception(error, "Failed to capture fetch breadcrumb");
    }
  });
}
function enrichFetchBreadcrumb(breadcrumb, hint) {
  const {
    input,
    response
  } = hint;
  const body = input ? getFetchRequestArgBody(input) : void 0;
  const reqSize = getBodySize(body);
  const resSize = response ? parseContentLengthHeader(response.headers.get("content-length")) : void 0;
  if (reqSize !== void 0) {
    breadcrumb.data.request_body_size = reqSize;
  }
  if (resSize !== void 0) {
    breadcrumb.data.response_body_size = resSize;
  }
}
function _prepareFetchData(breadcrumb, hint, options) {
  return __async(this, null, function* () {
    const now = Date.now();
    const {
      startTimestamp = now,
      endTimestamp = now
    } = hint;
    const {
      url,
      method,
      status_code: statusCode = 0,
      request_body_size: requestBodySize,
      response_body_size: responseBodySize
    } = breadcrumb.data;
    const captureDetails = urlMatches(url, options.networkDetailAllowUrls) && !urlMatches(url, options.networkDetailDenyUrls);
    const request = captureDetails ? _getRequestInfo(options, hint.input, requestBodySize) : buildSkippedNetworkRequestOrResponse(requestBodySize);
    const response = yield _getResponseInfo(captureDetails, options, hint.response, responseBodySize);
    return {
      startTimestamp,
      endTimestamp,
      url,
      method,
      statusCode,
      request,
      response
    };
  });
}
function _getRequestInfo({
  networkCaptureBodies,
  networkRequestHeaders
}, input, requestBodySize) {
  const headers = input ? getRequestHeaders(input, networkRequestHeaders) : {};
  if (!networkCaptureBodies) {
    return buildNetworkRequestOrResponse(headers, requestBodySize, void 0);
  }
  const requestBody = getFetchRequestArgBody(input);
  const [bodyStr, warning] = getBodyString(requestBody, logger2);
  const data = buildNetworkRequestOrResponse(headers, requestBodySize, bodyStr);
  if (warning) {
    return mergeWarning(data, warning);
  }
  return data;
}
function _getResponseInfo(_0, _1, _2, _3) {
  return __async(this, arguments, function* (captureDetails, {
    networkCaptureBodies,
    networkResponseHeaders
  }, response, responseBodySize) {
    if (!captureDetails && responseBodySize !== void 0) {
      return buildSkippedNetworkRequestOrResponse(responseBodySize);
    }
    const headers = response ? getAllHeaders(response.headers, networkResponseHeaders) : {};
    if (!response || !networkCaptureBodies && responseBodySize !== void 0) {
      return buildNetworkRequestOrResponse(headers, responseBodySize, void 0);
    }
    const [bodyText, warning] = yield _parseFetchResponseBody(response);
    const result = getResponseData(bodyText, {
      networkCaptureBodies,
      responseBodySize,
      captureDetails,
      headers
    });
    if (warning) {
      return mergeWarning(result, warning);
    }
    return result;
  });
}
function getResponseData(bodyText, {
  networkCaptureBodies,
  responseBodySize,
  captureDetails,
  headers
}) {
  try {
    const size = bodyText?.length && responseBodySize === void 0 ? getBodySize(bodyText) : responseBodySize;
    if (!captureDetails) {
      return buildSkippedNetworkRequestOrResponse(size);
    }
    if (networkCaptureBodies) {
      return buildNetworkRequestOrResponse(headers, size, bodyText);
    }
    return buildNetworkRequestOrResponse(headers, size, void 0);
  } catch (error) {
    DEBUG_BUILD4 && logger2.exception(error, "Failed to serialize response body");
    return buildNetworkRequestOrResponse(headers, responseBodySize, void 0);
  }
}
function _parseFetchResponseBody(response) {
  return __async(this, null, function* () {
    const res = _tryCloneResponse(response);
    if (!res) {
      return [void 0, "BODY_PARSE_ERROR"];
    }
    try {
      const text = yield _tryGetResponseText(res);
      return [text];
    } catch (error) {
      if (error instanceof Error && error.message.indexOf("Timeout") > -1) {
        DEBUG_BUILD4 && logger2.warn("Parsing text body from response timed out");
        return [void 0, "BODY_PARSE_TIMEOUT"];
      }
      DEBUG_BUILD4 && logger2.exception(error, "Failed to get text body from response");
      return [void 0, "BODY_PARSE_ERROR"];
    }
  });
}
function getAllHeaders(headers, allowedHeaders) {
  const allHeaders = {};
  allowedHeaders.forEach((header) => {
    if (headers.get(header)) {
      allHeaders[header] = headers.get(header);
    }
  });
  return allHeaders;
}
function getRequestHeaders(fetchArgs, allowedHeaders) {
  if (fetchArgs.length === 1 && typeof fetchArgs[0] !== "string") {
    return getHeadersFromOptions(fetchArgs[0], allowedHeaders);
  }
  if (fetchArgs.length === 2) {
    return getHeadersFromOptions(fetchArgs[1], allowedHeaders);
  }
  return {};
}
function getHeadersFromOptions(input, allowedHeaders) {
  if (!input) {
    return {};
  }
  const headers = input.headers;
  if (!headers) {
    return {};
  }
  if (headers instanceof Headers) {
    return getAllHeaders(headers, allowedHeaders);
  }
  if (Array.isArray(headers)) {
    return {};
  }
  return getAllowedHeaders(headers, allowedHeaders);
}
function _tryCloneResponse(response) {
  try {
    return response.clone();
  } catch (error) {
    DEBUG_BUILD4 && logger2.exception(error, "Failed to clone response body");
  }
}
function _tryGetResponseText(response) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout2(() => reject(new Error("Timeout while trying to read response body")), 500);
    _getResponseText(response).then((txt) => resolve(txt), (reason) => reject(reason)).finally(() => clearTimeout(timeout));
  });
}
function _getResponseText(response) {
  return __async(this, null, function* () {
    return yield response.text();
  });
}
function captureXhrBreadcrumbToReplay(breadcrumb, hint, options) {
  return __async(this, null, function* () {
    try {
      const data = _prepareXhrData(breadcrumb, hint, options);
      const result = makeNetworkReplayBreadcrumb("resource.xhr", data);
      addNetworkBreadcrumb(options.replay, result);
    } catch (error) {
      DEBUG_BUILD4 && logger2.exception(error, "Failed to capture xhr breadcrumb");
    }
  });
}
function enrichXhrBreadcrumb(breadcrumb, hint) {
  const {
    xhr,
    input
  } = hint;
  if (!xhr) {
    return;
  }
  const reqSize = getBodySize(input);
  const resSize = xhr.getResponseHeader("content-length") ? parseContentLengthHeader(xhr.getResponseHeader("content-length")) : _getBodySize(xhr.response, xhr.responseType);
  if (reqSize !== void 0) {
    breadcrumb.data.request_body_size = reqSize;
  }
  if (resSize !== void 0) {
    breadcrumb.data.response_body_size = resSize;
  }
}
function _prepareXhrData(breadcrumb, hint, options) {
  const now = Date.now();
  const {
    startTimestamp = now,
    endTimestamp = now,
    input,
    xhr
  } = hint;
  const {
    url,
    method,
    status_code: statusCode = 0,
    request_body_size: requestBodySize,
    response_body_size: responseBodySize
  } = breadcrumb.data;
  if (!url) {
    return null;
  }
  if (!xhr || !urlMatches(url, options.networkDetailAllowUrls) || urlMatches(url, options.networkDetailDenyUrls)) {
    const request2 = buildSkippedNetworkRequestOrResponse(requestBodySize);
    const response2 = buildSkippedNetworkRequestOrResponse(responseBodySize);
    return {
      startTimestamp,
      endTimestamp,
      url,
      method,
      statusCode,
      request: request2,
      response: response2
    };
  }
  const xhrInfo = xhr[SENTRY_XHR_DATA_KEY];
  const networkRequestHeaders = xhrInfo ? getAllowedHeaders(xhrInfo.request_headers, options.networkRequestHeaders) : {};
  const networkResponseHeaders = getAllowedHeaders(getResponseHeaders(xhr), options.networkResponseHeaders);
  const [requestBody, requestWarning] = options.networkCaptureBodies ? getBodyString(input, logger2) : [void 0];
  const [responseBody, responseWarning] = options.networkCaptureBodies ? _getXhrResponseBody(xhr) : [void 0];
  const request = buildNetworkRequestOrResponse(networkRequestHeaders, requestBodySize, requestBody);
  const response = buildNetworkRequestOrResponse(networkResponseHeaders, responseBodySize, responseBody);
  return {
    startTimestamp,
    endTimestamp,
    url,
    method,
    statusCode,
    request: requestWarning ? mergeWarning(request, requestWarning) : request,
    response: responseWarning ? mergeWarning(response, responseWarning) : response
  };
}
function getResponseHeaders(xhr) {
  const headers = xhr.getAllResponseHeaders();
  if (!headers) {
    return {};
  }
  return headers.split("\r\n").reduce((acc, line) => {
    const [key, value] = line.split(": ");
    if (value) {
      acc[key.toLowerCase()] = value;
    }
    return acc;
  }, {});
}
function _getXhrResponseBody(xhr) {
  const errors = [];
  try {
    return [xhr.responseText];
  } catch (e2) {
    errors.push(e2);
  }
  try {
    return _parseXhrResponse(xhr.response, xhr.responseType);
  } catch (e2) {
    errors.push(e2);
  }
  DEBUG_BUILD4 && logger2.warn("Failed to get xhr response body", ...errors);
  return [void 0];
}
function _parseXhrResponse(body, responseType) {
  try {
    if (typeof body === "string") {
      return [body];
    }
    if (body instanceof Document) {
      return [body.body.outerHTML];
    }
    if (responseType === "json" && body && typeof body === "object") {
      return [JSON.stringify(body)];
    }
    if (!body) {
      return [void 0];
    }
  } catch (error) {
    DEBUG_BUILD4 && logger2.exception(error, "Failed to serialize body", body);
    return [void 0, "BODY_PARSE_ERROR"];
  }
  DEBUG_BUILD4 && logger2.info("Skipping network body because of body type", body);
  return [void 0, "UNPARSEABLE_BODY_TYPE"];
}
function _getBodySize(body, responseType) {
  try {
    const bodyStr = responseType === "json" && body && typeof body === "object" ? JSON.stringify(body) : body;
    return getBodySize(bodyStr);
  } catch {
    return void 0;
  }
}
function handleNetworkBreadcrumbs(replay) {
  const client = getClient();
  try {
    const {
      networkDetailAllowUrls,
      networkDetailDenyUrls,
      networkCaptureBodies,
      networkRequestHeaders,
      networkResponseHeaders
    } = replay.getOptions();
    const options = {
      replay,
      networkDetailAllowUrls,
      networkDetailDenyUrls,
      networkCaptureBodies,
      networkRequestHeaders,
      networkResponseHeaders
    };
    if (client) {
      client.on("beforeAddBreadcrumb", (breadcrumb, hint) => beforeAddNetworkBreadcrumb(options, breadcrumb, hint));
    }
  } catch {
  }
}
function beforeAddNetworkBreadcrumb(options, breadcrumb, hint) {
  if (!breadcrumb.data) {
    return;
  }
  try {
    if (_isXhrBreadcrumb(breadcrumb) && _isXhrHint(hint)) {
      enrichXhrBreadcrumb(breadcrumb, hint);
      captureXhrBreadcrumbToReplay(breadcrumb, hint, options);
    }
    if (_isFetchBreadcrumb(breadcrumb) && _isFetchHint(hint)) {
      enrichFetchBreadcrumb(breadcrumb, hint);
      captureFetchBreadcrumbToReplay(breadcrumb, hint, options);
    }
  } catch (e2) {
    DEBUG_BUILD4 && logger2.exception(e2, "Error when enriching network breadcrumb");
  }
}
function _isXhrBreadcrumb(breadcrumb) {
  return breadcrumb.category === "xhr";
}
function _isFetchBreadcrumb(breadcrumb) {
  return breadcrumb.category === "fetch";
}
function _isXhrHint(hint) {
  return hint?.xhr;
}
function _isFetchHint(hint) {
  return hint?.response;
}
function addGlobalListeners(replay, {
  autoFlushOnFeedback
}) {
  const client = getClient();
  addClickKeypressInstrumentationHandler(handleDomListener(replay));
  addHistoryInstrumentationHandler(handleHistorySpanListener(replay));
  handleBreadcrumbs(replay);
  handleNetworkBreadcrumbs(replay);
  const eventProcessor = handleGlobalEventListener(replay);
  addEventProcessor(eventProcessor);
  if (client) {
    client.on("beforeSendEvent", handleBeforeSendEvent(replay));
    client.on("afterSendEvent", handleAfterSendEvent(replay));
    client.on("createDsc", (dsc) => {
      const replayId = replay.getSessionId();
      if (replayId && replay.isEnabled() && replay.recordingMode === "session") {
        const isSessionActive = replay.checkAndHandleExpiredSession();
        if (isSessionActive) {
          dsc.replay_id = replayId;
        }
      }
    });
    client.on("spanStart", (span) => {
      replay.lastActiveSpan = span;
    });
    client.on("spanEnd", (span) => {
      replay.lastActiveSpan = span;
    });
    client.on("beforeSendFeedback", (feedbackEvent, options) => __async(this, null, function* () {
      const replayId = replay.getSessionId();
      if (options?.includeReplay && replay.isEnabled() && replayId && feedbackEvent.contexts?.feedback) {
        if (feedbackEvent.contexts.feedback.source === "api" && autoFlushOnFeedback) {
          yield replay.flush();
        }
        feedbackEvent.contexts.feedback.replay_id = replayId;
      }
    }));
    if (autoFlushOnFeedback) {
      client.on("openFeedbackWidget", () => __async(this, null, function* () {
        yield replay.flush();
      }));
    }
  }
}
function addMemoryEntry(replay) {
  return __async(this, null, function* () {
    try {
      return Promise.all(createPerformanceSpans(replay, [
        // @ts-expect-error memory doesn't exist on type Performance as the API is non-standard (we check that it exists above)
        createMemoryEntry(WINDOW5.performance.memory)
      ]));
    } catch (error) {
      return [];
    }
  });
}
function createMemoryEntry(memoryEntry) {
  const {
    jsHeapSizeLimit,
    totalJSHeapSize,
    usedJSHeapSize
  } = memoryEntry;
  const time = Date.now() / 1e3;
  return {
    type: "memory",
    name: "memory",
    start: time,
    end: time,
    data: {
      memory: {
        jsHeapSizeLimit,
        totalJSHeapSize,
        usedJSHeapSize
      }
    }
  };
}
function debounce(func, wait, options) {
  let callbackReturnValue;
  let timerId;
  let maxTimerId;
  const maxWait = options?.maxWait ? Math.max(options.maxWait, wait) : 0;
  function invokeFunc() {
    cancelTimers();
    callbackReturnValue = func();
    return callbackReturnValue;
  }
  function cancelTimers() {
    timerId !== void 0 && clearTimeout(timerId);
    maxTimerId !== void 0 && clearTimeout(maxTimerId);
    timerId = maxTimerId = void 0;
  }
  function flush2() {
    if (timerId !== void 0 || maxTimerId !== void 0) {
      return invokeFunc();
    }
    return callbackReturnValue;
  }
  function debounced() {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout2(invokeFunc, wait);
    if (maxWait && maxTimerId === void 0) {
      maxTimerId = setTimeout2(invokeFunc, maxWait);
    }
    return callbackReturnValue;
  }
  debounced.cancel = cancelTimers;
  debounced.flush = flush2;
  return debounced;
}
var NAVIGATOR = GLOBAL_OBJ.navigator;
function getRecordingSamplingOptions() {
  if (/iPhone|iPad|iPod/i.test(NAVIGATOR?.userAgent ?? "") || /Macintosh/i.test(NAVIGATOR?.userAgent ?? "") && NAVIGATOR?.maxTouchPoints && NAVIGATOR?.maxTouchPoints > 1) {
    return {
      sampling: {
        mousemove: false
      }
    };
  }
  return {};
}
function getHandleRecordingEmit(replay) {
  let hadFirstEvent = false;
  return (event, _isCheckout) => {
    if (!replay.checkAndHandleExpiredSession()) {
      DEBUG_BUILD4 && logger2.warn("Received replay event after session expired.");
      return;
    }
    const isCheckout = _isCheckout || !hadFirstEvent;
    hadFirstEvent = true;
    if (replay.clickDetector) {
      updateClickDetectorForRecordingEvent(replay.clickDetector, event);
    }
    replay.addUpdate(() => {
      if (replay.recordingMode === "buffer" && isCheckout) {
        replay.setInitialState();
      }
      if (!addEventSync(replay, event, isCheckout)) {
        return true;
      }
      if (!isCheckout) {
        return false;
      }
      const session = replay.session;
      addSettingsEvent(replay, isCheckout);
      if (replay.recordingMode === "buffer" && session && replay.eventBuffer) {
        const earliestEvent = replay.eventBuffer.getEarliestTimestamp();
        if (earliestEvent) {
          DEBUG_BUILD4 && logger2.info(`Updating session start time to earliest event in buffer to ${new Date(earliestEvent)}`);
          session.started = earliestEvent;
          if (replay.getOptions().stickySession) {
            saveSession(session);
          }
        }
      }
      if (session?.previousSessionId) {
        return true;
      }
      if (replay.recordingMode === "session") {
        void replay.flush();
      }
      return true;
    });
  };
}
function createOptionsEvent(replay) {
  const options = replay.getOptions();
  return {
    type: EventType.Custom,
    timestamp: Date.now(),
    data: {
      tag: "options",
      payload: {
        shouldRecordCanvas: replay.isRecordingCanvas(),
        sessionSampleRate: options.sessionSampleRate,
        errorSampleRate: options.errorSampleRate,
        useCompressionOption: options.useCompression,
        blockAllMedia: options.blockAllMedia,
        maskAllText: options.maskAllText,
        maskAllInputs: options.maskAllInputs,
        useCompression: replay.eventBuffer ? replay.eventBuffer.type === "worker" : false,
        networkDetailHasUrls: options.networkDetailAllowUrls.length > 0,
        networkCaptureBodies: options.networkCaptureBodies,
        networkRequestHasHeaders: options.networkRequestHeaders.length > 0,
        networkResponseHasHeaders: options.networkResponseHeaders.length > 0
      }
    }
  };
}
function addSettingsEvent(replay, isCheckout) {
  if (!isCheckout || !replay.session || replay.session.segmentId !== 0) {
    return;
  }
  addEventSync(replay, createOptionsEvent(replay), false);
}
function createReplayEnvelope(replayEvent, recordingData, dsn, tunnel) {
  return createEnvelope(createEventEnvelopeHeaders(replayEvent, getSdkMetadataForEnvelopeHeader(replayEvent), tunnel, dsn), [[{
    type: "replay_event"
  }, replayEvent], [{
    type: "replay_recording",
    // If string then we need to encode to UTF8, otherwise will have
    // wrong size. TextEncoder has similar browser support to
    // MutationObserver, although it does not accept IE11.
    length: typeof recordingData === "string" ? new TextEncoder().encode(recordingData).length : recordingData.length
  }, recordingData]]);
}
function prepareRecordingData({
  recordingData,
  headers
}) {
  let payloadWithSequence;
  const replayHeaders = `${JSON.stringify(headers)}
`;
  if (typeof recordingData === "string") {
    payloadWithSequence = `${replayHeaders}${recordingData}`;
  } else {
    const enc = new TextEncoder();
    const sequence2 = enc.encode(replayHeaders);
    payloadWithSequence = new Uint8Array(sequence2.length + recordingData.length);
    payloadWithSequence.set(sequence2);
    payloadWithSequence.set(recordingData, sequence2.length);
  }
  return payloadWithSequence;
}
function prepareReplayEvent(_0) {
  return __async(this, arguments, function* ({
    client,
    scope,
    replayId: event_id,
    event
  }) {
    const integrations = typeof client["_integrations"] === "object" && client["_integrations"] !== null && !Array.isArray(client["_integrations"]) ? Object.keys(client["_integrations"]) : void 0;
    const eventHint = {
      event_id,
      integrations
    };
    client.emit("preprocessEvent", event, eventHint);
    const preparedEvent = yield prepareEvent(client.getOptions(), event, eventHint, scope, client, getIsolationScope());
    if (!preparedEvent) {
      return null;
    }
    client.emit("postprocessEvent", preparedEvent, eventHint);
    preparedEvent.platform = preparedEvent.platform || "javascript";
    const metadata = client.getSdkMetadata();
    const {
      name,
      version
    } = metadata?.sdk || {};
    preparedEvent.sdk = __spreadProps(__spreadValues({}, preparedEvent.sdk), {
      name: name || "sentry.javascript.unknown",
      version: version || "0.0.0"
    });
    return preparedEvent;
  });
}
function sendReplayRequest(_0) {
  return __async(this, arguments, function* ({
    recordingData,
    replayId,
    segmentId: segment_id,
    eventContext,
    timestamp,
    session
  }) {
    const preparedRecordingData = prepareRecordingData({
      recordingData,
      headers: {
        segment_id
      }
    });
    const {
      urls,
      errorIds,
      traceIds,
      initialTimestamp
    } = eventContext;
    const client = getClient();
    const scope = getCurrentScope();
    const transport = client?.getTransport();
    const dsn = client?.getDsn();
    if (!client || !transport || !dsn || !session.sampled) {
      return resolvedSyncPromise({});
    }
    const baseEvent = {
      type: REPLAY_EVENT_NAME,
      replay_start_timestamp: initialTimestamp / 1e3,
      timestamp: timestamp / 1e3,
      error_ids: errorIds,
      trace_ids: traceIds,
      urls,
      replay_id: replayId,
      segment_id,
      replay_type: session.sampled
    };
    const replayEvent = yield prepareReplayEvent({
      scope,
      client,
      replayId,
      event: baseEvent
    });
    if (!replayEvent) {
      client.recordDroppedEvent("event_processor", "replay");
      DEBUG_BUILD4 && logger2.info("An event processor returned `null`, will not send event.");
      return resolvedSyncPromise({});
    }
    delete replayEvent.sdkProcessingMetadata;
    const envelope = createReplayEnvelope(replayEvent, preparedRecordingData, dsn, client.getOptions().tunnel);
    let response;
    try {
      response = yield transport.send(envelope);
    } catch (err) {
      const error = new Error(UNABLE_TO_SEND_REPLAY);
      try {
        error.cause = err;
      } catch {
      }
      throw error;
    }
    if (typeof response.statusCode === "number" && (response.statusCode < 200 || response.statusCode >= 300)) {
      throw new TransportStatusCodeError(response.statusCode);
    }
    const rateLimits = updateRateLimits({}, response);
    if (isRateLimited(rateLimits, "replay")) {
      throw new RateLimitError(rateLimits);
    }
    return response;
  });
}
var TransportStatusCodeError = class extends Error {
  constructor(statusCode) {
    super(`Transport returned status code ${statusCode}`);
  }
};
var RateLimitError = class extends Error {
  constructor(rateLimits) {
    super("Rate limit hit");
    this.rateLimits = rateLimits;
  }
};
function sendReplay(_0) {
  return __async(this, arguments, function* (replayData, retryConfig = {
    count: 0,
    interval: RETRY_BASE_INTERVAL
  }) {
    const {
      recordingData,
      onError
    } = replayData;
    if (!recordingData.length) {
      return;
    }
    try {
      yield sendReplayRequest(replayData);
      return true;
    } catch (err) {
      if (err instanceof TransportStatusCodeError || err instanceof RateLimitError) {
        throw err;
      }
      setContext("Replays", {
        _retryCount: retryConfig.count
      });
      if (onError) {
        onError(err);
      }
      if (retryConfig.count >= RETRY_MAX_COUNT) {
        const error = new Error(`${UNABLE_TO_SEND_REPLAY} - max retries exceeded`);
        try {
          error.cause = err;
        } catch {
        }
        throw error;
      }
      retryConfig.interval *= ++retryConfig.count;
      return new Promise((resolve, reject) => {
        setTimeout2(() => __async(this, null, function* () {
          try {
            yield sendReplay(replayData, retryConfig);
            resolve(true);
          } catch (err2) {
            reject(err2);
          }
        }), retryConfig.interval);
      });
    }
  });
}
var THROTTLED = "__THROTTLED";
var SKIPPED = "__SKIPPED";
function throttle(fn, maxCount, durationSeconds) {
  const counter = /* @__PURE__ */ new Map();
  const _cleanup = (now) => {
    const threshold = now - durationSeconds;
    counter.forEach((_value, key) => {
      if (key < threshold) {
        counter.delete(key);
      }
    });
  };
  const _getTotalCount = () => {
    return [...counter.values()].reduce((a, b) => a + b, 0);
  };
  let isThrottled = false;
  return (...rest) => {
    const now = Math.floor(Date.now() / 1e3);
    _cleanup(now);
    if (_getTotalCount() >= maxCount) {
      const wasThrottled = isThrottled;
      isThrottled = true;
      return wasThrottled ? SKIPPED : THROTTLED;
    }
    isThrottled = false;
    const count = counter.get(now) || 0;
    counter.set(now, count + 1);
    return fn(...rest);
  };
}
var ReplayContainer = class {
  /**
   * Recording can happen in one of two modes:
   *   - session: Record the whole session, sending it continuously
   *   - buffer: Always keep the last 60s of recording, requires:
   *     - having replaysOnErrorSampleRate > 0 to capture replay when an error occurs
   *     - or calling `flush()` to send the replay
   */
  /**
   * The current or last active span.
   * This is only available when performance is enabled.
   */
  /**
   * These are here so we can overwrite them in tests etc.
   * @hidden
   */
  /** The replay has to be manually started, because no sample rate (neither session or error) was provided. */
  /**
   * Options to pass to `rrweb.record()`
   */
  /**
   * Timestamp of the last user activity. This lives across sessions.
   */
  /**
   * Is the integration currently active?
   */
  /**
   * Paused is a state where:
   * - DOM Recording is not listening at all
   * - Nothing will be added to event buffer (e.g. core SDK events)
   */
  /**
   * Have we attached listeners to the core SDK?
   * Note we have to track this as there is no way to remove instrumentation handlers.
   */
  /**
   * Function to stop recording
   */
  /**
   * Internal use for canvas recording options
   */
  /**
   * Handle when visibility of the page content changes. Opening a new tab will
   * cause the state to change to hidden because of content of current page will
   * be hidden. Likewise, moving a different window to cover the contents of the
   * page will also trigger a change to a hidden state.
   */
  /**
   * Handle when page is blurred
   */
  /**
   * Handle when page is focused
   */
  /** Ensure page remains active when a key is pressed. */
  constructor({
    options,
    recordingOptions
  }) {
    this.eventBuffer = null;
    this.performanceEntries = [];
    this.replayPerformanceEntries = [];
    this.recordingMode = "session";
    this.timeouts = {
      sessionIdlePause: SESSION_IDLE_PAUSE_DURATION,
      sessionIdleExpire: SESSION_IDLE_EXPIRE_DURATION
    };
    this._lastActivity = Date.now();
    this._isEnabled = false;
    this._isPaused = false;
    this._requiresManualStart = false;
    this._hasInitializedCoreListeners = false;
    this._context = {
      errorIds: /* @__PURE__ */ new Set(),
      traceIds: /* @__PURE__ */ new Set(),
      urls: [],
      initialTimestamp: Date.now(),
      initialUrl: ""
    };
    this._recordingOptions = recordingOptions;
    this._options = options;
    this._debouncedFlush = debounce(() => this._flush(), this._options.flushMinDelay, {
      maxWait: this._options.flushMaxDelay
    });
    this._throttledAddEvent = throttle(
      (event, isCheckout) => addEvent(this, event, isCheckout),
      // Max 300 events...
      300,
      // ... per 5s
      5
    );
    const {
      slowClickTimeout,
      slowClickIgnoreSelectors
    } = this.getOptions();
    const slowClickConfig = slowClickTimeout ? {
      threshold: Math.min(SLOW_CLICK_THRESHOLD, slowClickTimeout),
      timeout: slowClickTimeout,
      scrollTimeout: SLOW_CLICK_SCROLL_TIMEOUT,
      ignoreSelector: slowClickIgnoreSelectors ? slowClickIgnoreSelectors.join(",") : ""
    } : void 0;
    if (slowClickConfig) {
      this.clickDetector = new ClickDetector(this, slowClickConfig);
    }
    if (DEBUG_BUILD4) {
      const experiments = options._experiments;
      logger2.setConfig({
        captureExceptions: !!experiments.captureExceptions,
        traceInternals: !!experiments.traceInternals
      });
    }
    this._handleVisibilityChange = () => {
      if (WINDOW5.document.visibilityState === "visible") {
        this._doChangeToForegroundTasks();
      } else {
        this._doChangeToBackgroundTasks();
      }
    };
    this._handleWindowBlur = () => {
      const breadcrumb = createBreadcrumb({
        category: "ui.blur"
      });
      this._doChangeToBackgroundTasks(breadcrumb);
    };
    this._handleWindowFocus = () => {
      const breadcrumb = createBreadcrumb({
        category: "ui.focus"
      });
      this._doChangeToForegroundTasks(breadcrumb);
    };
    this._handleKeyboardEvent = (event) => {
      handleKeyboardEvent(this, event);
    };
  }
  /** Get the event context. */
  getContext() {
    return this._context;
  }
  /** If recording is currently enabled. */
  isEnabled() {
    return this._isEnabled;
  }
  /** If recording is currently paused. */
  isPaused() {
    return this._isPaused;
  }
  /**
   * Determine if canvas recording is enabled
   */
  isRecordingCanvas() {
    return Boolean(this._canvas);
  }
  /** Get the replay integration options. */
  getOptions() {
    return this._options;
  }
  /** A wrapper to conditionally capture exceptions. */
  handleException(error) {
    DEBUG_BUILD4 && logger2.exception(error);
    if (this._options.onError) {
      this._options.onError(error);
    }
  }
  /**
   * Initializes the plugin based on sampling configuration. Should not be
   * called outside of constructor.
   */
  initializeSampling(previousSessionId) {
    const {
      errorSampleRate,
      sessionSampleRate
    } = this._options;
    const requiresManualStart = errorSampleRate <= 0 && sessionSampleRate <= 0;
    this._requiresManualStart = requiresManualStart;
    if (requiresManualStart) {
      return;
    }
    this._initializeSessionForSampling(previousSessionId);
    if (!this.session) {
      DEBUG_BUILD4 && logger2.exception(new Error("Unable to initialize and create session"));
      return;
    }
    if (this.session.sampled === false) {
      return;
    }
    this.recordingMode = this.session.sampled === "buffer" && this.session.segmentId === 0 ? "buffer" : "session";
    DEBUG_BUILD4 && logger2.infoTick(`Starting replay in ${this.recordingMode} mode`);
    this._initializeRecording();
  }
  /**
   * Start a replay regardless of sampling rate. Calling this will always
   * create a new session. Will log a message if replay is already in progress.
   *
   * Creates or loads a session, attaches listeners to varying events (DOM,
   * _performanceObserver, Recording, Sentry SDK, etc)
   */
  start() {
    if (this._isEnabled && this.recordingMode === "session") {
      DEBUG_BUILD4 && logger2.info("Recording is already in progress");
      return;
    }
    if (this._isEnabled && this.recordingMode === "buffer") {
      DEBUG_BUILD4 && logger2.info("Buffering is in progress, call `flush()` to save the replay");
      return;
    }
    DEBUG_BUILD4 && logger2.infoTick("Starting replay in session mode");
    this._updateUserActivity();
    const session = loadOrCreateSession({
      maxReplayDuration: this._options.maxReplayDuration,
      sessionIdleExpire: this.timeouts.sessionIdleExpire
    }, {
      stickySession: this._options.stickySession,
      // This is intentional: create a new session-based replay when calling `start()`
      sessionSampleRate: 1,
      allowBuffering: false
    });
    this.session = session;
    this._initializeRecording();
  }
  /**
   * Start replay buffering. Buffers until `flush()` is called or, if
   * `replaysOnErrorSampleRate` > 0, an error occurs.
   */
  startBuffering() {
    if (this._isEnabled) {
      DEBUG_BUILD4 && logger2.info("Buffering is in progress, call `flush()` to save the replay");
      return;
    }
    DEBUG_BUILD4 && logger2.infoTick("Starting replay in buffer mode");
    const session = loadOrCreateSession({
      sessionIdleExpire: this.timeouts.sessionIdleExpire,
      maxReplayDuration: this._options.maxReplayDuration
    }, {
      stickySession: this._options.stickySession,
      sessionSampleRate: 0,
      allowBuffering: true
    });
    this.session = session;
    this.recordingMode = "buffer";
    this._initializeRecording();
  }
  /**
   * Start recording.
   *
   * Note that this will cause a new DOM checkout
   */
  startRecording() {
    try {
      const canvasOptions = this._canvas;
      this._stopRecording = record(__spreadValues(__spreadProps(__spreadValues(__spreadProps(__spreadValues(__spreadValues({}, this._recordingOptions), this.recordingMode === "buffer" ? {
        checkoutEveryNms: BUFFER_CHECKOUT_TIME
      } : (
        // Otherwise, use experimental option w/ min checkout time of 6 minutes
        // This is to improve playback seeking as there could potentially be
        // less mutations to process in the worse cases.
        //
        // checkout by "N" events is probably ideal, but means we have less
        // control about the number of checkouts we make (which generally
        // increases replay size)
        this._options._experiments.continuousCheckout && {
          // Minimum checkout time is 6 minutes
          checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
        }
      )), {
        emit: getHandleRecordingEmit(this)
      }), getRecordingSamplingOptions()), {
        onMutation: this._onMutationHandler.bind(this)
      }), canvasOptions ? {
        recordCanvas: canvasOptions.recordCanvas,
        getCanvasManager: canvasOptions.getCanvasManager,
        sampling: canvasOptions.sampling,
        dataURLOptions: canvasOptions.dataURLOptions
      } : {}));
    } catch (err) {
      this.handleException(err);
    }
  }
  /**
   * Stops the recording, if it was running.
   *
   * Returns true if it was previously stopped, or is now stopped,
   * otherwise false.
   */
  stopRecording() {
    try {
      if (this._stopRecording) {
        this._stopRecording();
        this._stopRecording = void 0;
      }
      return true;
    } catch (err) {
      this.handleException(err);
      return false;
    }
  }
  /**
   * Currently, this needs to be manually called (e.g. for tests). Sentry SDK
   * does not support a teardown
   */
  stop() {
    return __async(this, arguments, function* ({
      forceFlush = false,
      reason
    } = {}) {
      if (!this._isEnabled) {
        return;
      }
      this._isEnabled = false;
      try {
        DEBUG_BUILD4 && logger2.info(`Stopping Replay${reason ? ` triggered by ${reason}` : ""}`);
        resetReplayIdOnDynamicSamplingContext();
        this._removeListeners();
        this.stopRecording();
        this._debouncedFlush.cancel();
        if (forceFlush) {
          yield this._flush({
            force: true
          });
        }
        this.eventBuffer?.destroy();
        this.eventBuffer = null;
        clearSession(this);
      } catch (err) {
        this.handleException(err);
      }
    });
  }
  /**
   * Pause some replay functionality. See comments for `_isPaused`.
   * This differs from stop as this only stops DOM recording, it is
   * not as thorough of a shutdown as `stop()`.
   */
  pause() {
    if (this._isPaused) {
      return;
    }
    this._isPaused = true;
    this.stopRecording();
    DEBUG_BUILD4 && logger2.info("Pausing replay");
  }
  /**
   * Resumes recording, see notes for `pause().
   *
   * Note that calling `startRecording()` here will cause a
   * new DOM checkout.`
   */
  resume() {
    if (!this._isPaused || !this._checkSession()) {
      return;
    }
    this._isPaused = false;
    this.startRecording();
    DEBUG_BUILD4 && logger2.info("Resuming replay");
  }
  /**
   * If not in "session" recording mode, flush event buffer which will create a new replay.
   * Unless `continueRecording` is false, the replay will continue to record and
   * behave as a "session"-based replay.
   *
   * Otherwise, queue up a flush.
   */
  sendBufferedReplayOrFlush() {
    return __async(this, arguments, function* ({
      continueRecording = true
    } = {}) {
      if (this.recordingMode === "session") {
        return this.flushImmediate();
      }
      const activityTime = Date.now();
      DEBUG_BUILD4 && logger2.info("Converting buffer to session");
      yield this.flushImmediate();
      const hasStoppedRecording = this.stopRecording();
      if (!continueRecording || !hasStoppedRecording) {
        return;
      }
      if (this.recordingMode === "session") {
        return;
      }
      this.recordingMode = "session";
      if (this.session) {
        this._updateUserActivity(activityTime);
        this._updateSessionActivity(activityTime);
        this._maybeSaveSession();
      }
      this.startRecording();
    });
  }
  /**
   * We want to batch uploads of replay events. Save events only if
   * `<flushMinDelay>` milliseconds have elapsed since the last event
   * *OR* if `<flushMaxDelay>` milliseconds have elapsed.
   *
   * Accepts a callback to perform side-effects and returns true to stop batch
   * processing and hand back control to caller.
   */
  addUpdate(cb) {
    const cbResult = cb();
    if (this.recordingMode === "buffer") {
      return;
    }
    if (cbResult === true) {
      return;
    }
    this._debouncedFlush();
  }
  /**
   * Updates the user activity timestamp and resumes recording. This should be
   * called in an event handler for a user action that we consider as the user
   * being "active" (e.g. a mouse click).
   */
  triggerUserActivity() {
    this._updateUserActivity();
    if (!this._stopRecording) {
      if (!this._checkSession()) {
        return;
      }
      this.resume();
      return;
    }
    this.checkAndHandleExpiredSession();
    this._updateSessionActivity();
  }
  /**
   * Updates the user activity timestamp *without* resuming
   * recording. Some user events (e.g. keydown) can be create
   * low-value replays that only contain the keypress as a
   * breadcrumb. Instead this would require other events to
   * create a new replay after a session has expired.
   */
  updateUserActivity() {
    this._updateUserActivity();
    this._updateSessionActivity();
  }
  /**
   * Only flush if `this.recordingMode === 'session'`
   */
  conditionalFlush() {
    if (this.recordingMode === "buffer") {
      return Promise.resolve();
    }
    return this.flushImmediate();
  }
  /**
   * Flush using debounce flush
   */
  flush() {
    return this._debouncedFlush();
  }
  /**
   * Always flush via `_debouncedFlush` so that we do not have flushes triggered
   * from calling both `flush` and `_debouncedFlush`. Otherwise, there could be
   * cases of multiple flushes happening closely together.
   */
  flushImmediate() {
    this._debouncedFlush();
    return this._debouncedFlush.flush();
  }
  /**
   * Cancels queued up flushes.
   */
  cancelFlush() {
    this._debouncedFlush.cancel();
  }
  /** Get the current session (=replay) ID */
  getSessionId() {
    return this.session?.id;
  }
  /**
   * Checks if recording should be stopped due to user inactivity. Otherwise
   * check if session is expired and create a new session if so. Triggers a new
   * full snapshot on new session.
   *
   * Returns true if session is not expired, false otherwise.
   * @hidden
   */
  checkAndHandleExpiredSession() {
    if (this._lastActivity && isExpired(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && this.session.sampled === "session") {
      this.pause();
      return;
    }
    if (!this._checkSession()) {
      return false;
    }
    return true;
  }
  /**
   * Capture some initial state that can change throughout the lifespan of the
   * replay. This is required because otherwise they would be captured at the
   * first flush.
   */
  setInitialState() {
    const urlPath = `${WINDOW5.location.pathname}${WINDOW5.location.hash}${WINDOW5.location.search}`;
    const url = `${WINDOW5.location.origin}${urlPath}`;
    this.performanceEntries = [];
    this.replayPerformanceEntries = [];
    this._clearContext();
    this._context.initialUrl = url;
    this._context.initialTimestamp = Date.now();
    this._context.urls.push(url);
  }
  /**
   * Add a breadcrumb event, that may be throttled.
   * If it was throttled, we add a custom breadcrumb to indicate that.
   */
  throttledAddEvent(event, isCheckout) {
    const res = this._throttledAddEvent(event, isCheckout);
    if (res === THROTTLED) {
      const breadcrumb = createBreadcrumb({
        category: "replay.throttled"
      });
      this.addUpdate(() => {
        return !addEventSync(this, {
          type: ReplayEventTypeCustom,
          timestamp: breadcrumb.timestamp || 0,
          data: {
            tag: "breadcrumb",
            payload: breadcrumb,
            metric: true
          }
        });
      });
    }
    return res;
  }
  /**
   * This will get the parametrized route name of the current page.
   * This is only available if performance is enabled, and if an instrumented router is used.
   */
  getCurrentRoute() {
    const lastActiveSpan = this.lastActiveSpan || getActiveSpan();
    const lastRootSpan = lastActiveSpan && getRootSpan(lastActiveSpan);
    const attributes = lastRootSpan && spanToJSON(lastRootSpan).data || {};
    const source = attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    if (!lastRootSpan || !source || !["route", "custom"].includes(source)) {
      return void 0;
    }
    return spanToJSON(lastRootSpan).description;
  }
  /**
   * Initialize and start all listeners to varying events (DOM,
   * Performance Observer, Recording, Sentry SDK, etc)
   */
  _initializeRecording() {
    this.setInitialState();
    this._updateSessionActivity();
    this.eventBuffer = createEventBuffer({
      useCompression: this._options.useCompression,
      workerUrl: this._options.workerUrl
    });
    this._removeListeners();
    this._addListeners();
    this._isEnabled = true;
    this._isPaused = false;
    this.startRecording();
  }
  /**
   * Loads (or refreshes) the current session.
   */
  _initializeSessionForSampling(previousSessionId) {
    const allowBuffering = this._options.errorSampleRate > 0;
    const session = loadOrCreateSession({
      sessionIdleExpire: this.timeouts.sessionIdleExpire,
      maxReplayDuration: this._options.maxReplayDuration,
      previousSessionId
    }, {
      stickySession: this._options.stickySession,
      sessionSampleRate: this._options.sessionSampleRate,
      allowBuffering
    });
    this.session = session;
  }
  /**
   * Checks and potentially refreshes the current session.
   * Returns false if session is not recorded.
   */
  _checkSession() {
    if (!this.session) {
      return false;
    }
    const currentSession = this.session;
    if (shouldRefreshSession(currentSession, {
      sessionIdleExpire: this.timeouts.sessionIdleExpire,
      maxReplayDuration: this._options.maxReplayDuration
    })) {
      this._refreshSession(currentSession);
      return false;
    }
    return true;
  }
  /**
   * Refresh a session with a new one.
   * This stops the current session (without forcing a flush, as that would never work since we are expired),
   * and then does a new sampling based on the refreshed session.
   */
  _refreshSession(session) {
    return __async(this, null, function* () {
      if (!this._isEnabled) {
        return;
      }
      yield this.stop({
        reason: "refresh session"
      });
      this.initializeSampling(session.id);
    });
  }
  /**
   * Adds listeners to record events for the replay
   */
  _addListeners() {
    try {
      WINDOW5.document.addEventListener("visibilitychange", this._handleVisibilityChange);
      WINDOW5.addEventListener("blur", this._handleWindowBlur);
      WINDOW5.addEventListener("focus", this._handleWindowFocus);
      WINDOW5.addEventListener("keydown", this._handleKeyboardEvent);
      if (this.clickDetector) {
        this.clickDetector.addListeners();
      }
      if (!this._hasInitializedCoreListeners) {
        addGlobalListeners(this, {
          autoFlushOnFeedback: this._options._experiments.autoFlushOnFeedback
        });
        this._hasInitializedCoreListeners = true;
      }
    } catch (err) {
      this.handleException(err);
    }
    this._performanceCleanupCallback = setupPerformanceObserver(this);
  }
  /**
   * Cleans up listeners that were created in `_addListeners`
   */
  _removeListeners() {
    try {
      WINDOW5.document.removeEventListener("visibilitychange", this._handleVisibilityChange);
      WINDOW5.removeEventListener("blur", this._handleWindowBlur);
      WINDOW5.removeEventListener("focus", this._handleWindowFocus);
      WINDOW5.removeEventListener("keydown", this._handleKeyboardEvent);
      if (this.clickDetector) {
        this.clickDetector.removeListeners();
      }
      if (this._performanceCleanupCallback) {
        this._performanceCleanupCallback();
      }
    } catch (err) {
      this.handleException(err);
    }
  }
  /**
   * Tasks to run when we consider a page to be hidden (via blurring and/or visibility)
   */
  _doChangeToBackgroundTasks(breadcrumb) {
    if (!this.session) {
      return;
    }
    const expired = isSessionExpired(this.session, {
      maxReplayDuration: this._options.maxReplayDuration,
      sessionIdleExpire: this.timeouts.sessionIdleExpire
    });
    if (expired) {
      return;
    }
    if (breadcrumb) {
      this._createCustomBreadcrumb(breadcrumb);
    }
    void this.conditionalFlush();
  }
  /**
   * Tasks to run when we consider a page to be visible (via focus and/or visibility)
   */
  _doChangeToForegroundTasks(breadcrumb) {
    if (!this.session) {
      return;
    }
    const isSessionActive = this.checkAndHandleExpiredSession();
    if (!isSessionActive) {
      DEBUG_BUILD4 && logger2.info("Document has become active, but session has expired");
      return;
    }
    if (breadcrumb) {
      this._createCustomBreadcrumb(breadcrumb);
    }
  }
  /**
   * Update user activity (across session lifespans)
   */
  _updateUserActivity(_lastActivity = Date.now()) {
    this._lastActivity = _lastActivity;
  }
  /**
   * Updates the session's last activity timestamp
   */
  _updateSessionActivity(_lastActivity = Date.now()) {
    if (this.session) {
      this.session.lastActivity = _lastActivity;
      this._maybeSaveSession();
    }
  }
  /**
   * Helper to create (and buffer) a replay breadcrumb from a core SDK breadcrumb
   */
  _createCustomBreadcrumb(breadcrumb) {
    this.addUpdate(() => {
      this.throttledAddEvent({
        type: EventType.Custom,
        timestamp: breadcrumb.timestamp || 0,
        data: {
          tag: "breadcrumb",
          payload: breadcrumb
        }
      });
    });
  }
  /**
   * Observed performance events are added to `this.performanceEntries`. These
   * are included in the replay event before it is finished and sent to Sentry.
   */
  _addPerformanceEntries() {
    let performanceEntries = createPerformanceEntries(this.performanceEntries).concat(this.replayPerformanceEntries);
    this.performanceEntries = [];
    this.replayPerformanceEntries = [];
    if (this._requiresManualStart) {
      const initialTimestampInSeconds = this._context.initialTimestamp / 1e3;
      performanceEntries = performanceEntries.filter((entry) => entry.start >= initialTimestampInSeconds);
    }
    return Promise.all(createPerformanceSpans(this, performanceEntries));
  }
  /**
   * Clear _context
   */
  _clearContext() {
    this._context.errorIds.clear();
    this._context.traceIds.clear();
    this._context.urls = [];
  }
  /** Update the initial timestamp based on the buffer content. */
  _updateInitialTimestampFromEventBuffer() {
    const {
      session,
      eventBuffer
    } = this;
    if (!session || !eventBuffer || this._requiresManualStart) {
      return;
    }
    if (session.segmentId) {
      return;
    }
    const earliestEvent = eventBuffer.getEarliestTimestamp();
    if (earliestEvent && earliestEvent < this._context.initialTimestamp) {
      this._context.initialTimestamp = earliestEvent;
    }
  }
  /**
   * Return and clear _context
   */
  _popEventContext() {
    const _context = {
      initialTimestamp: this._context.initialTimestamp,
      initialUrl: this._context.initialUrl,
      errorIds: Array.from(this._context.errorIds),
      traceIds: Array.from(this._context.traceIds),
      urls: this._context.urls
    };
    this._clearContext();
    return _context;
  }
  /**
   * Flushes replay event buffer to Sentry.
   *
   * Performance events are only added right before flushing - this is
   * due to the buffered performance observer events.
   *
   * Should never be called directly, only by `flush`
   */
  _runFlush() {
    return __async(this, null, function* () {
      const replayId = this.getSessionId();
      if (!this.session || !this.eventBuffer || !replayId) {
        DEBUG_BUILD4 && logger2.error("No session or eventBuffer found to flush.");
        return;
      }
      yield this._addPerformanceEntries();
      if (!this.eventBuffer?.hasEvents) {
        return;
      }
      yield addMemoryEntry(this);
      if (!this.eventBuffer) {
        return;
      }
      if (replayId !== this.getSessionId()) {
        return;
      }
      try {
        this._updateInitialTimestampFromEventBuffer();
        const timestamp = Date.now();
        if (timestamp - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) {
          throw new Error("Session is too long, not sending replay");
        }
        const eventContext = this._popEventContext();
        const segmentId = this.session.segmentId++;
        this._maybeSaveSession();
        const recordingData = yield this.eventBuffer.finish();
        yield sendReplay({
          replayId,
          recordingData,
          segmentId,
          eventContext,
          session: this.session,
          timestamp,
          onError: (err) => this.handleException(err)
        });
      } catch (err) {
        this.handleException(err);
        this.stop({
          reason: "sendReplay"
        });
        const client = getClient();
        if (client) {
          const dropReason = err instanceof RateLimitError ? "ratelimit_backoff" : "send_error";
          client.recordDroppedEvent(dropReason, "replay");
        }
      }
    });
  }
  /**
   * Flush recording data to Sentry. Creates a lock so that only a single flush
   * can be active at a time. Do not call this directly.
   */
  _flush() {
    return __async(this, arguments, function* ({
      force = false
    } = {}) {
      if (!this._isEnabled && !force) {
        return;
      }
      if (!this.checkAndHandleExpiredSession()) {
        DEBUG_BUILD4 && logger2.error("Attempting to finish replay event after session expired.");
        return;
      }
      if (!this.session) {
        return;
      }
      const start = this.session.started;
      const now = Date.now();
      const duration = now - start;
      this._debouncedFlush.cancel();
      const tooShort = duration < this._options.minReplayDuration;
      const tooLong = duration > this._options.maxReplayDuration + 5e3;
      if (tooShort || tooLong) {
        DEBUG_BUILD4 && logger2.info(`Session duration (${Math.floor(duration / 1e3)}s) is too ${tooShort ? "short" : "long"}, not sending replay.`);
        if (tooShort) {
          this._debouncedFlush();
        }
        return;
      }
      const eventBuffer = this.eventBuffer;
      if (eventBuffer && this.session.segmentId === 0 && !eventBuffer.hasCheckout) {
        DEBUG_BUILD4 && logger2.info("Flushing initial segment without checkout.");
      }
      const _flushInProgress = !!this._flushLock;
      if (!this._flushLock) {
        this._flushLock = this._runFlush();
      }
      try {
        yield this._flushLock;
      } catch (err) {
        this.handleException(err);
      } finally {
        this._flushLock = void 0;
        if (_flushInProgress) {
          this._debouncedFlush();
        }
      }
    });
  }
  /** Save the session, if it is sticky */
  _maybeSaveSession() {
    if (this.session && this._options.stickySession) {
      saveSession(this.session);
    }
  }
  /** Handler for rrweb.record.onMutation */
  _onMutationHandler(mutations) {
    const count = mutations.length;
    const mutationLimit = this._options.mutationLimit;
    const mutationBreadcrumbLimit = this._options.mutationBreadcrumbLimit;
    const overMutationLimit = mutationLimit && count > mutationLimit;
    if (count > mutationBreadcrumbLimit || overMutationLimit) {
      const breadcrumb = createBreadcrumb({
        category: "replay.mutations",
        data: {
          count,
          limit: overMutationLimit
        }
      });
      this._createCustomBreadcrumb(breadcrumb);
    }
    if (overMutationLimit) {
      this.stop({
        reason: "mutationLimit",
        forceFlush: this.recordingMode === "session"
      });
      return false;
    }
    return true;
  }
};
function getOption(selectors, defaultSelectors) {
  return [
    ...selectors,
    // sentry defaults
    ...defaultSelectors
  ].join(",");
}
function getPrivacyOptions({
  mask,
  unmask,
  block,
  unblock,
  ignore
}) {
  const defaultBlockedElements = ["base", "iframe[srcdoc]:not([src])"];
  const maskSelector = getOption(mask, [".sentry-mask", "[data-sentry-mask]"]);
  const unmaskSelector = getOption(unmask, []);
  const options = {
    // We are making the decision to make text and input selectors the same
    maskTextSelector: maskSelector,
    unmaskTextSelector: unmaskSelector,
    blockSelector: getOption(block, [".sentry-block", "[data-sentry-block]", ...defaultBlockedElements]),
    unblockSelector: getOption(unblock, []),
    ignoreSelector: getOption(ignore, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
  };
  return options;
}
function maskAttribute({
  el,
  key,
  maskAttributes,
  maskAllText,
  privacyOptions,
  value
}) {
  if (!maskAllText) {
    return value;
  }
  if (privacyOptions.unmaskTextSelector && el.matches(privacyOptions.unmaskTextSelector)) {
    return value;
  }
  if (maskAttributes.includes(key) || // Need to mask `value` attribute for `<input>` if it's a button-like
  // type
  key === "value" && el.tagName === "INPUT" && ["submit", "button"].includes(el.getAttribute("type") || "")) {
    return value.replace(/[\S]/g, "*");
  }
  return value;
}
var MEDIA_SELECTORS = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]';
var DEFAULT_NETWORK_HEADERS = ["content-length", "content-type", "accept"];
var _initialized = false;
var replayIntegration = (options) => {
  return new Replay(options);
};
var Replay = class {
  /**
   * @inheritDoc
   */
  /**
   * Options to pass to `rrweb.record()`
   */
  /**
   * Initial options passed to the replay integration, merged with default values.
   * Note: `sessionSampleRate` and `errorSampleRate` are not required here, as they
   * can only be finally set when setupOnce() is called.
   *
   * @private
   */
  constructor({
    flushMinDelay = DEFAULT_FLUSH_MIN_DELAY,
    flushMaxDelay = DEFAULT_FLUSH_MAX_DELAY,
    minReplayDuration = MIN_REPLAY_DURATION,
    maxReplayDuration = MAX_REPLAY_DURATION,
    stickySession = true,
    useCompression = true,
    workerUrl,
    _experiments = {},
    maskAllText = true,
    maskAllInputs = true,
    blockAllMedia = true,
    mutationBreadcrumbLimit = 750,
    mutationLimit = 1e4,
    slowClickTimeout = 7e3,
    slowClickIgnoreSelectors = [],
    networkDetailAllowUrls = [],
    networkDetailDenyUrls = [],
    networkCaptureBodies = true,
    networkRequestHeaders = [],
    networkResponseHeaders = [],
    mask = [],
    maskAttributes = ["title", "placeholder"],
    unmask = [],
    block = [],
    unblock = [],
    ignore = [],
    maskFn,
    beforeAddRecordingEvent,
    beforeErrorSampling,
    onError
  } = {}) {
    this.name = "Replay";
    const privacyOptions = getPrivacyOptions({
      mask,
      unmask,
      block,
      unblock,
      ignore
    });
    this._recordingOptions = __spreadProps(__spreadValues({
      maskAllInputs,
      maskAllText,
      maskInputOptions: {
        password: true
      },
      maskTextFn: maskFn,
      maskInputFn: maskFn,
      maskAttributeFn: (key, value, el) => maskAttribute({
        maskAttributes,
        maskAllText,
        privacyOptions,
        key,
        value,
        el
      })
    }, privacyOptions), {
      // Our defaults
      slimDOMOptions: "all",
      inlineStylesheet: true,
      // Disable inline images as it will increase segment/replay size
      inlineImages: false,
      // collect fonts, but be aware that `sentry.io` needs to be an allowed
      // origin for playback
      collectFonts: true,
      errorHandler: (err) => {
        try {
          err.__rrweb__ = true;
        } catch (error) {
        }
      },
      // experimental support for recording iframes from different origins
      recordCrossOriginIframes: Boolean(_experiments.recordCrossOriginIframes)
    });
    this._initialOptions = {
      flushMinDelay,
      flushMaxDelay,
      minReplayDuration: Math.min(minReplayDuration, MIN_REPLAY_DURATION_LIMIT),
      maxReplayDuration: Math.min(maxReplayDuration, MAX_REPLAY_DURATION),
      stickySession,
      useCompression,
      workerUrl,
      blockAllMedia,
      maskAllInputs,
      maskAllText,
      mutationBreadcrumbLimit,
      mutationLimit,
      slowClickTimeout,
      slowClickIgnoreSelectors,
      networkDetailAllowUrls,
      networkDetailDenyUrls,
      networkCaptureBodies,
      networkRequestHeaders: _getMergedNetworkHeaders(networkRequestHeaders),
      networkResponseHeaders: _getMergedNetworkHeaders(networkResponseHeaders),
      beforeAddRecordingEvent,
      beforeErrorSampling,
      onError,
      _experiments
    };
    if (this._initialOptions.blockAllMedia) {
      this._recordingOptions.blockSelector = !this._recordingOptions.blockSelector ? MEDIA_SELECTORS : `${this._recordingOptions.blockSelector},${MEDIA_SELECTORS}`;
    }
    if (this._isInitialized && isBrowser()) {
      throw new Error("Multiple Sentry Session Replay instances are not supported");
    }
    this._isInitialized = true;
  }
  /** If replay has already been initialized */
  get _isInitialized() {
    return _initialized;
  }
  /** Update _isInitialized */
  set _isInitialized(value) {
    _initialized = value;
  }
  /**
   * Setup and initialize replay container
   */
  afterAllSetup(client) {
    if (!isBrowser() || this._replay) {
      return;
    }
    this._setup(client);
    this._initialize(client);
  }
  /**
   * Start a replay regardless of sampling rate. Calling this will always
   * create a new session. Will log a message if replay is already in progress.
   *
   * Creates or loads a session, attaches listeners to varying events (DOM,
   * PerformanceObserver, Recording, Sentry SDK, etc)
   */
  start() {
    if (!this._replay) {
      return;
    }
    this._replay.start();
  }
  /**
   * Start replay buffering. Buffers until `flush()` is called or, if
   * `replaysOnErrorSampleRate` > 0, until an error occurs.
   */
  startBuffering() {
    if (!this._replay) {
      return;
    }
    this._replay.startBuffering();
  }
  /**
   * Currently, this needs to be manually called (e.g. for tests). Sentry SDK
   * does not support a teardown
   */
  stop() {
    if (!this._replay) {
      return Promise.resolve();
    }
    return this._replay.stop({
      forceFlush: this._replay.recordingMode === "session"
    });
  }
  /**
   * If not in "session" recording mode, flush event buffer which will create a new replay.
   * If replay is not enabled, a new session replay is started.
   * Unless `continueRecording` is false, the replay will continue to record and
   * behave as a "session"-based replay.
   *
   * Otherwise, queue up a flush.
   */
  flush(options) {
    if (!this._replay) {
      return Promise.resolve();
    }
    if (!this._replay.isEnabled()) {
      this._replay.start();
      return Promise.resolve();
    }
    return this._replay.sendBufferedReplayOrFlush(options);
  }
  /**
   * Get the current session ID.
   */
  getReplayId() {
    if (!this._replay?.isEnabled()) {
      return;
    }
    return this._replay.getSessionId();
  }
  /**
   * Get the current recording mode. This can be either `session` or `buffer`.
   *
   * `session`: Recording the whole session, sending it continuously
   * `buffer`: Always keeping the last 60s of recording, requires:
   *   - having replaysOnErrorSampleRate > 0 to capture replay when an error occurs
   *   - or calling `flush()` to send the replay
   */
  getRecordingMode() {
    if (!this._replay?.isEnabled()) {
      return;
    }
    return this._replay.recordingMode;
  }
  /**
   * Initializes replay.
   */
  _initialize(client) {
    if (!this._replay) {
      return;
    }
    this._maybeLoadFromReplayCanvasIntegration(client);
    this._replay.initializeSampling();
  }
  /** Setup the integration. */
  _setup(client) {
    const finalOptions = loadReplayOptionsFromClient(this._initialOptions, client);
    this._replay = new ReplayContainer({
      options: finalOptions,
      recordingOptions: this._recordingOptions
    });
  }
  /** Get canvas options from ReplayCanvas integration, if it is also added. */
  _maybeLoadFromReplayCanvasIntegration(client) {
    try {
      const canvasIntegration = client.getIntegrationByName("ReplayCanvas");
      if (!canvasIntegration) {
        return;
      }
      this._replay["_canvas"] = canvasIntegration.getOptions();
    } catch {
    }
  }
};
function loadReplayOptionsFromClient(initialOptions, client) {
  const opt = client.getOptions();
  const finalOptions = __spreadValues({
    sessionSampleRate: 0,
    errorSampleRate: 0
  }, initialOptions);
  const replaysSessionSampleRate = parseSampleRate(opt.replaysSessionSampleRate);
  const replaysOnErrorSampleRate = parseSampleRate(opt.replaysOnErrorSampleRate);
  if (replaysSessionSampleRate == null && replaysOnErrorSampleRate == null) {
    consoleSandbox(() => {
      console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.");
    });
  }
  if (replaysSessionSampleRate != null) {
    finalOptions.sessionSampleRate = replaysSessionSampleRate;
  }
  if (replaysOnErrorSampleRate != null) {
    finalOptions.errorSampleRate = replaysOnErrorSampleRate;
  }
  return finalOptions;
}
function _getMergedNetworkHeaders(headers) {
  return [...DEFAULT_NETWORK_HEADERS, ...headers.map((header) => header.toLowerCase())];
}

// node_modules/@sentry/browser/build/npm/esm/tracing/request.js
var responseToSpanId = /* @__PURE__ */ new WeakMap();
var spanIdToEndTimestamp = /* @__PURE__ */ new Map();
var defaultRequestInstrumentationOptions = {
  traceFetch: true,
  traceXHR: true,
  enableHTTPTimings: true,
  trackFetchStreamPerformance: false
};
function instrumentOutgoingRequests(client, _options) {
  const {
    traceFetch,
    traceXHR,
    trackFetchStreamPerformance,
    shouldCreateSpanForRequest,
    enableHTTPTimings,
    tracePropagationTargets,
    onRequestSpanStart
  } = __spreadValues(__spreadValues({}, defaultRequestInstrumentationOptions), _options);
  const shouldCreateSpan = typeof shouldCreateSpanForRequest === "function" ? shouldCreateSpanForRequest : (_) => true;
  const shouldAttachHeadersWithTargets = (url) => shouldAttachHeaders(url, tracePropagationTargets);
  const spans = {};
  if (traceFetch) {
    client.addEventProcessor((event) => {
      if (event.type === "transaction" && event.spans) {
        event.spans.forEach((span) => {
          if (span.op === "http.client") {
            const updatedTimestamp = spanIdToEndTimestamp.get(span.span_id);
            if (updatedTimestamp) {
              span.timestamp = updatedTimestamp / 1e3;
              spanIdToEndTimestamp.delete(span.span_id);
            }
          }
        });
      }
      return event;
    });
    if (trackFetchStreamPerformance) {
      addFetchEndInstrumentationHandler((handlerData) => {
        if (handlerData.response) {
          const span = responseToSpanId.get(handlerData.response);
          if (span && handlerData.endTimestamp) {
            spanIdToEndTimestamp.set(span, handlerData.endTimestamp);
          }
        }
      });
    }
    addFetchInstrumentationHandler((handlerData) => {
      const createdSpan = instrumentFetchRequest(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
      if (handlerData.response && handlerData.fetchData.__span) {
        responseToSpanId.set(handlerData.response, handlerData.fetchData.__span);
      }
      if (createdSpan) {
        const fullUrl = getFullURL(handlerData.fetchData.url);
        const host = fullUrl ? parseUrl(fullUrl).host : void 0;
        createdSpan.setAttributes({
          "http.url": fullUrl,
          "server.address": host
        });
        if (enableHTTPTimings) {
          addHTTPTimings(createdSpan);
        }
        onRequestSpanStart?.(createdSpan, {
          headers: handlerData.headers
        });
      }
    });
  }
  if (traceXHR) {
    addXhrInstrumentationHandler((handlerData) => {
      const createdSpan = xhrCallback(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
      if (createdSpan) {
        if (enableHTTPTimings) {
          addHTTPTimings(createdSpan);
        }
        let headers;
        try {
          headers = new Headers(handlerData.xhr.__sentry_xhr_v3__?.request_headers);
        } catch {
        }
        onRequestSpanStart?.(createdSpan, {
          headers
        });
      }
    });
  }
}
function isPerformanceResourceTiming(entry) {
  return entry.entryType === "resource" && "initiatorType" in entry && typeof entry.nextHopProtocol === "string" && (entry.initiatorType === "fetch" || entry.initiatorType === "xmlhttprequest");
}
function addHTTPTimings(span) {
  const {
    url
  } = spanToJSON(span).data;
  if (!url || typeof url !== "string") {
    return;
  }
  const cleanup = addPerformanceInstrumentationHandler("resource", ({
    entries
  }) => {
    entries.forEach((entry) => {
      if (isPerformanceResourceTiming(entry) && entry.name.endsWith(url)) {
        const spanData = resourceTimingEntryToSpanData(entry);
        spanData.forEach((data) => span.setAttribute(...data));
        setTimeout(cleanup);
      }
    });
  });
}
function getAbsoluteTime2(time = 0) {
  return ((browserPerformanceTimeOrigin() || performance.timeOrigin) + time) / 1e3;
}
function resourceTimingEntryToSpanData(resourceTiming) {
  const {
    name,
    version
  } = extractNetworkProtocol(resourceTiming.nextHopProtocol);
  const timingSpanData = [];
  timingSpanData.push(["network.protocol.version", version], ["network.protocol.name", name]);
  if (!browserPerformanceTimeOrigin()) {
    return timingSpanData;
  }
  return [...timingSpanData, ["http.request.redirect_start", getAbsoluteTime2(resourceTiming.redirectStart)], ["http.request.fetch_start", getAbsoluteTime2(resourceTiming.fetchStart)], ["http.request.domain_lookup_start", getAbsoluteTime2(resourceTiming.domainLookupStart)], ["http.request.domain_lookup_end", getAbsoluteTime2(resourceTiming.domainLookupEnd)], ["http.request.connect_start", getAbsoluteTime2(resourceTiming.connectStart)], ["http.request.secure_connection_start", getAbsoluteTime2(resourceTiming.secureConnectionStart)], ["http.request.connection_end", getAbsoluteTime2(resourceTiming.connectEnd)], ["http.request.request_start", getAbsoluteTime2(resourceTiming.requestStart)], ["http.request.response_start", getAbsoluteTime2(resourceTiming.responseStart)], ["http.request.response_end", getAbsoluteTime2(resourceTiming.responseEnd)]];
}
function shouldAttachHeaders(targetUrl, tracePropagationTargets) {
  const href = getLocationHref();
  if (!href) {
    const isRelativeSameOriginRequest = !!targetUrl.match(/^\/(?!\/)/);
    if (!tracePropagationTargets) {
      return isRelativeSameOriginRequest;
    } else {
      return stringMatchesSomePattern(targetUrl, tracePropagationTargets);
    }
  } else {
    let resolvedUrl;
    let currentOrigin;
    try {
      resolvedUrl = new URL(targetUrl, href);
      currentOrigin = new URL(href).origin;
    } catch (e2) {
      return false;
    }
    const isSameOriginRequest = resolvedUrl.origin === currentOrigin;
    if (!tracePropagationTargets) {
      return isSameOriginRequest;
    } else {
      return stringMatchesSomePattern(resolvedUrl.toString(), tracePropagationTargets) || isSameOriginRequest && stringMatchesSomePattern(resolvedUrl.pathname, tracePropagationTargets);
    }
  }
}
function xhrCallback(handlerData, shouldCreateSpan, shouldAttachHeaders2, spans) {
  const xhr = handlerData.xhr;
  const sentryXhrData = xhr?.[SENTRY_XHR_DATA_KEY];
  if (!xhr || xhr.__sentry_own_request__ || !sentryXhrData) {
    return void 0;
  }
  const {
    url,
    method
  } = sentryXhrData;
  const shouldCreateSpanResult = hasSpansEnabled() && shouldCreateSpan(url);
  if (handlerData.endTimestamp && shouldCreateSpanResult) {
    const spanId = xhr.__sentry_xhr_span_id__;
    if (!spanId) return;
    const span2 = spans[spanId];
    if (span2 && sentryXhrData.status_code !== void 0) {
      setHttpStatus(span2, sentryXhrData.status_code);
      span2.end();
      delete spans[spanId];
    }
    return void 0;
  }
  const fullUrl = getFullURL(url);
  const parsedUrl = fullUrl ? parseUrl(fullUrl) : parseUrl(url);
  const urlForSpanName = stripUrlQueryAndFragment(url);
  const hasParent = !!getActiveSpan();
  const span = shouldCreateSpanResult && hasParent ? startInactiveSpan({
    name: `${method} ${urlForSpanName}`,
    attributes: __spreadValues(__spreadValues({
      url,
      type: "xhr",
      "http.method": method,
      "http.url": fullUrl,
      "server.address": parsedUrl?.host,
      [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser",
      [SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client"
    }, parsedUrl?.search && {
      "http.query": parsedUrl?.search
    }), parsedUrl?.hash && {
      "http.fragment": parsedUrl?.hash
    })
  }) : new SentryNonRecordingSpan();
  xhr.__sentry_xhr_span_id__ = span.spanContext().spanId;
  spans[xhr.__sentry_xhr_span_id__] = span;
  if (shouldAttachHeaders2(url)) {
    addTracingHeadersToXhrRequest(
      xhr,
      // If performance is disabled (TWP) or there's no active root span (pageload/navigation/interaction),
      // we do not want to use the span as base for the trace headers,
      // which means that the headers will be generated from the scope and the sampling decision is deferred
      hasSpansEnabled() && hasParent ? span : void 0
    );
  }
  const client = getClient();
  if (client) {
    client.emit("beforeOutgoingRequestSpan", span, handlerData);
  }
  return span;
}
function addTracingHeadersToXhrRequest(xhr, span) {
  const {
    "sentry-trace": sentryTrace,
    baggage
  } = getTraceData({
    span
  });
  if (sentryTrace) {
    setHeaderOnXhr(xhr, sentryTrace, baggage);
  }
}
function setHeaderOnXhr(xhr, sentryTraceHeader, sentryBaggageHeader) {
  const originalHeaders = xhr.__sentry_xhr_v3__?.request_headers;
  if (originalHeaders?.["sentry-trace"]) {
    return;
  }
  try {
    xhr.setRequestHeader("sentry-trace", sentryTraceHeader);
    if (sentryBaggageHeader) {
      const originalBaggageHeader = originalHeaders?.["baggage"];
      if (!originalBaggageHeader || !baggageHeaderHasSentryValues(originalBaggageHeader)) {
        xhr.setRequestHeader("baggage", sentryBaggageHeader);
      }
    }
  } catch (_) {
  }
}
function baggageHeaderHasSentryValues(baggageHeader) {
  return baggageHeader.split(",").some((value) => value.trim().startsWith("sentry-"));
}
function getFullURL(url) {
  try {
    const parsed = new URL(url, WINDOW3.location.origin);
    return parsed.href;
  } catch {
    return void 0;
  }
}

// node_modules/@sentry/browser/build/npm/esm/tracing/backgroundtab.js
function registerBackgroundTabDetection() {
  if (WINDOW3.document) {
    WINDOW3.document.addEventListener("visibilitychange", () => {
      const activeSpan = getActiveSpan();
      if (!activeSpan) {
        return;
      }
      const rootSpan = getRootSpan(activeSpan);
      if (WINDOW3.document.hidden && rootSpan) {
        const cancelledStatus = "cancelled";
        const {
          op,
          status
        } = spanToJSON(rootSpan);
        if (DEBUG_BUILD3) {
          logger.log(`[Tracing] Transaction: ${cancelledStatus} -> since tab moved to the background, op: ${op}`);
        }
        if (!status) {
          rootSpan.setStatus({
            code: SPAN_STATUS_ERROR,
            message: cancelledStatus
          });
        }
        rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
        rootSpan.end();
      }
    });
  } else {
    DEBUG_BUILD3 && logger.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
}

// node_modules/@sentry/browser/build/npm/esm/tracing/linkedTraces.js
var PREVIOUS_TRACE_MAX_DURATION = 3600;
var PREVIOUS_TRACE_KEY = "sentry_previous_trace";
var PREVIOUS_TRACE_TMP_SPAN_ATTRIBUTE = "sentry.previous_trace";
function linkTraces(client, {
  linkPreviousTrace,
  consistentTraceSampling
}) {
  const useSessionStorage = linkPreviousTrace === "session-storage";
  let inMemoryPreviousTraceInfo = useSessionStorage ? getPreviousTraceFromSessionStorage() : void 0;
  client.on("spanStart", (span) => {
    if (getRootSpan(span) !== span) {
      return;
    }
    const oldPropagationContext = getCurrentScope().getPropagationContext();
    inMemoryPreviousTraceInfo = addPreviousTraceSpanLink(inMemoryPreviousTraceInfo, span, oldPropagationContext);
    if (useSessionStorage) {
      storePreviousTraceInSessionStorage(inMemoryPreviousTraceInfo);
    }
  });
  let isFirstTraceOnPageload = true;
  if (consistentTraceSampling) {
    client.on("beforeSampling", (mutableSamplingContextData) => {
      if (!inMemoryPreviousTraceInfo) {
        return;
      }
      const scope = getCurrentScope();
      const currentPropagationContext = scope.getPropagationContext();
      if (isFirstTraceOnPageload && currentPropagationContext.parentSpanId) {
        isFirstTraceOnPageload = false;
        return;
      }
      scope.setPropagationContext(__spreadProps(__spreadValues({}, currentPropagationContext), {
        dsc: __spreadProps(__spreadValues({}, currentPropagationContext.dsc), {
          sample_rate: String(inMemoryPreviousTraceInfo.sampleRate),
          sampled: String(spanContextSampled(inMemoryPreviousTraceInfo.spanContext))
        }),
        sampleRand: inMemoryPreviousTraceInfo.sampleRand
      }));
      mutableSamplingContextData.parentSampled = spanContextSampled(inMemoryPreviousTraceInfo.spanContext);
      mutableSamplingContextData.parentSampleRate = inMemoryPreviousTraceInfo.sampleRate;
      mutableSamplingContextData.spanAttributes = __spreadProps(__spreadValues({}, mutableSamplingContextData.spanAttributes), {
        [SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE]: inMemoryPreviousTraceInfo.sampleRate
      });
    });
  }
}
function addPreviousTraceSpanLink(previousTraceInfo, span, oldPropagationContext) {
  const spanJson = spanToJSON(span);
  function getSampleRate() {
    try {
      return Number(oldPropagationContext.dsc?.sample_rate) ?? Number(spanJson.data?.[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]);
    } catch {
      return 0;
    }
  }
  const updatedPreviousTraceInfo = {
    spanContext: span.spanContext(),
    startTimestamp: spanJson.start_timestamp,
    sampleRate: getSampleRate(),
    sampleRand: oldPropagationContext.sampleRand
  };
  if (!previousTraceInfo) {
    return updatedPreviousTraceInfo;
  }
  const previousTraceSpanCtx = previousTraceInfo.spanContext;
  if (previousTraceSpanCtx.traceId === spanJson.trace_id) {
    return previousTraceInfo;
  }
  if (Date.now() / 1e3 - previousTraceInfo.startTimestamp <= PREVIOUS_TRACE_MAX_DURATION) {
    if (DEBUG_BUILD3) {
      logger.info(`Adding previous_trace ${previousTraceSpanCtx} link to span ${__spreadValues({
        op: spanJson.op
      }, span.spanContext())}`);
    }
    span.addLink({
      context: previousTraceSpanCtx,
      attributes: {
        [SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE]: "previous_trace"
      }
    });
    span.setAttribute(PREVIOUS_TRACE_TMP_SPAN_ATTRIBUTE, `${previousTraceSpanCtx.traceId}-${previousTraceSpanCtx.spanId}-${spanContextSampled(previousTraceSpanCtx) ? 1 : 0}`);
  }
  return updatedPreviousTraceInfo;
}
function storePreviousTraceInSessionStorage(previousTraceInfo) {
  try {
    WINDOW3.sessionStorage.setItem(PREVIOUS_TRACE_KEY, JSON.stringify(previousTraceInfo));
  } catch (e2) {
    DEBUG_BUILD3 && logger.warn("Could not store previous trace in sessionStorage", e2);
  }
}
function getPreviousTraceFromSessionStorage() {
  try {
    const previousTraceInfo = WINDOW3.sessionStorage?.getItem(PREVIOUS_TRACE_KEY);
    return JSON.parse(previousTraceInfo);
  } catch (e2) {
    return void 0;
  }
}
function spanContextSampled(ctx) {
  return ctx.traceFlags === 1;
}

// node_modules/@sentry/browser/build/npm/esm/tracing/browserTracingIntegration.js
var BROWSER_TRACING_INTEGRATION_ID = "BrowserTracing";
var DEFAULT_BROWSER_TRACING_OPTIONS = __spreadValues(__spreadProps(__spreadValues({}, TRACING_DEFAULTS), {
  instrumentNavigation: true,
  instrumentPageLoad: true,
  markBackgroundSpan: true,
  enableLongTask: true,
  enableLongAnimationFrame: true,
  enableInp: true,
  linkPreviousTrace: "in-memory",
  consistentTraceSampling: false,
  _experiments: {}
}), defaultRequestInstrumentationOptions);
var _hasBeenInitialized = false;
var browserTracingIntegration = (_options = {}) => {
  if (_hasBeenInitialized) {
    consoleSandbox(() => {
      console.warn("Multiple browserTracingIntegration instances are not supported.");
    });
  }
  _hasBeenInitialized = true;
  const optionalWindowDocument = WINDOW3.document;
  registerSpanErrorInstrumentation();
  const {
    enableInp,
    enableLongTask,
    enableLongAnimationFrame,
    _experiments: {
      enableInteractions,
      enableStandaloneClsSpans
    },
    beforeStartSpan,
    idleTimeout,
    finalTimeout,
    childSpanTimeout,
    markBackgroundSpan,
    traceFetch,
    traceXHR,
    trackFetchStreamPerformance,
    shouldCreateSpanForRequest,
    enableHTTPTimings,
    instrumentPageLoad,
    instrumentNavigation,
    linkPreviousTrace,
    consistentTraceSampling,
    onRequestSpanStart
  } = __spreadValues(__spreadValues({}, DEFAULT_BROWSER_TRACING_OPTIONS), _options);
  const _collectWebVitals = startTrackingWebVitals({
    recordClsStandaloneSpans: enableStandaloneClsSpans || false
  });
  if (enableInp) {
    startTrackingINP();
  }
  if (enableLongAnimationFrame && GLOBAL_OBJ.PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")) {
    startTrackingLongAnimationFrames();
  } else if (enableLongTask) {
    startTrackingLongTasks();
  }
  if (enableInteractions) {
    startTrackingInteractions();
  }
  const latestRoute = {
    name: void 0,
    source: void 0
  };
  function _createRouteSpan(client, startSpanOptions) {
    const isPageloadTransaction = startSpanOptions.op === "pageload";
    const finalStartSpanOptions = beforeStartSpan ? beforeStartSpan(startSpanOptions) : startSpanOptions;
    const attributes = finalStartSpanOptions.attributes || {};
    if (startSpanOptions.name !== finalStartSpanOptions.name) {
      attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "custom";
      finalStartSpanOptions.attributes = attributes;
    }
    latestRoute.name = finalStartSpanOptions.name;
    latestRoute.source = attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    const idleSpan = startIdleSpan(finalStartSpanOptions, {
      idleTimeout,
      finalTimeout,
      childSpanTimeout,
      // should wait for finish signal if it's a pageload transaction
      disableAutoFinish: isPageloadTransaction,
      beforeSpanEnd: (span) => {
        _collectWebVitals();
        addPerformanceEntries(span, {
          recordClsOnPageloadSpan: !enableStandaloneClsSpans
        });
        setActiveIdleSpan(client, void 0);
        const scope = getCurrentScope();
        const oldPropagationContext = scope.getPropagationContext();
        scope.setPropagationContext(__spreadProps(__spreadValues({}, oldPropagationContext), {
          traceId: idleSpan.spanContext().traceId,
          sampled: spanIsSampled(idleSpan),
          dsc: getDynamicSamplingContextFromSpan(span)
        }));
      }
    });
    setActiveIdleSpan(client, idleSpan);
    function emitFinish() {
      if (optionalWindowDocument && ["interactive", "complete"].includes(optionalWindowDocument.readyState)) {
        client.emit("idleSpanEnableAutoFinish", idleSpan);
      }
    }
    if (isPageloadTransaction && optionalWindowDocument) {
      optionalWindowDocument.addEventListener("readystatechange", () => {
        emitFinish();
      });
      emitFinish();
    }
  }
  return {
    name: BROWSER_TRACING_INTEGRATION_ID,
    afterAllSetup(client) {
      let startingUrl = getLocationHref();
      function maybeEndActiveSpan() {
        const activeSpan = getActiveIdleSpan(client);
        if (activeSpan && !spanToJSON(activeSpan).timestamp) {
          DEBUG_BUILD3 && logger.log(`[Tracing] Finishing current active span with op: ${spanToJSON(activeSpan).op}`);
          activeSpan.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "cancelled");
          activeSpan.end();
        }
      }
      client.on("startNavigationSpan", (startSpanOptions) => {
        if (getClient() !== client) {
          return;
        }
        maybeEndActiveSpan();
        getIsolationScope().setPropagationContext({
          traceId: generateTraceId(),
          sampleRand: Math.random()
        });
        getCurrentScope().setPropagationContext({
          traceId: generateTraceId(),
          sampleRand: Math.random()
        });
        _createRouteSpan(client, __spreadValues({
          op: "navigation"
        }, startSpanOptions));
      });
      client.on("startPageLoadSpan", (startSpanOptions, traceOptions = {}) => {
        if (getClient() !== client) {
          return;
        }
        maybeEndActiveSpan();
        const sentryTrace = traceOptions.sentryTrace || getMetaContent("sentry-trace");
        const baggage = traceOptions.baggage || getMetaContent("baggage");
        const propagationContext = propagationContextFromHeaders(sentryTrace, baggage);
        getCurrentScope().setPropagationContext(propagationContext);
        _createRouteSpan(client, __spreadValues({
          op: "pageload"
        }, startSpanOptions));
      });
      if (linkPreviousTrace !== "off") {
        linkTraces(client, {
          linkPreviousTrace,
          consistentTraceSampling
        });
      }
      if (WINDOW3.location) {
        if (instrumentPageLoad) {
          const origin = browserPerformanceTimeOrigin();
          startBrowserTracingPageLoadSpan(client, {
            name: WINDOW3.location.pathname,
            // pageload should always start at timeOrigin (and needs to be in s, not ms)
            startTime: origin ? origin / 1e3 : void 0,
            attributes: {
              [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
              [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.browser"
            }
          });
        }
        if (instrumentNavigation) {
          addHistoryInstrumentationHandler(({
            to,
            from: from2
          }) => {
            if (from2 === void 0 && startingUrl?.indexOf(to) !== -1) {
              startingUrl = void 0;
              return;
            }
            if (from2 !== to) {
              startingUrl = void 0;
              startBrowserTracingNavigationSpan(client, {
                name: WINDOW3.location.pathname,
                attributes: {
                  [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
                  [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.browser"
                }
              });
            }
          });
        }
      }
      if (markBackgroundSpan) {
        registerBackgroundTabDetection();
      }
      if (enableInteractions) {
        registerInteractionListener(client, idleTimeout, finalTimeout, childSpanTimeout, latestRoute);
      }
      if (enableInp) {
        registerInpInteractionListener();
      }
      instrumentOutgoingRequests(client, {
        traceFetch,
        traceXHR,
        trackFetchStreamPerformance,
        tracePropagationTargets: client.getOptions().tracePropagationTargets,
        shouldCreateSpanForRequest,
        enableHTTPTimings,
        onRequestSpanStart
      });
    }
  };
};
function startBrowserTracingPageLoadSpan(client, spanOptions, traceOptions) {
  client.emit("startPageLoadSpan", spanOptions, traceOptions);
  getCurrentScope().setTransactionName(spanOptions.name);
  return getActiveIdleSpan(client);
}
function startBrowserTracingNavigationSpan(client, spanOptions) {
  client.emit("startNavigationSpan", spanOptions);
  getCurrentScope().setTransactionName(spanOptions.name);
  return getActiveIdleSpan(client);
}
function getMetaContent(metaName) {
  const optionalWindowDocument = WINDOW3.document;
  const metaTag = optionalWindowDocument?.querySelector(`meta[name=${metaName}]`);
  return metaTag?.getAttribute("content") || void 0;
}
function registerInteractionListener(client, idleTimeout, finalTimeout, childSpanTimeout, latestRoute) {
  const optionalWindowDocument = WINDOW3.document;
  let inflightInteractionSpan;
  const registerInteractionTransaction = () => {
    const op = "ui.action.click";
    const activeIdleSpan = getActiveIdleSpan(client);
    if (activeIdleSpan) {
      const currentRootSpanOp = spanToJSON(activeIdleSpan).op;
      if (["navigation", "pageload"].includes(currentRootSpanOp)) {
        DEBUG_BUILD3 && logger.warn(`[Tracing] Did not create ${op} span because a pageload or navigation span is in progress.`);
        return void 0;
      }
    }
    if (inflightInteractionSpan) {
      inflightInteractionSpan.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "interactionInterrupted");
      inflightInteractionSpan.end();
      inflightInteractionSpan = void 0;
    }
    if (!latestRoute.name) {
      DEBUG_BUILD3 && logger.warn(`[Tracing] Did not create ${op} transaction because _latestRouteName is missing.`);
      return void 0;
    }
    inflightInteractionSpan = startIdleSpan({
      name: latestRoute.name,
      op,
      attributes: {
        [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: latestRoute.source || "url"
      }
    }, {
      idleTimeout,
      finalTimeout,
      childSpanTimeout
    });
  };
  if (optionalWindowDocument) {
    addEventListener("click", registerInteractionTransaction, {
      once: false,
      capture: true
    });
  }
}
var ACTIVE_IDLE_SPAN_PROPERTY = "_sentry_idleSpan";
function getActiveIdleSpan(client) {
  return client[ACTIVE_IDLE_SPAN_PROPERTY];
}
function setActiveIdleSpan(client, span) {
  addNonEnumerableProperty(client, ACTIVE_IDLE_SPAN_PROPERTY, span);
}

// node_modules/@sentry/angular/fesm2020/sentry-angular.mjs
var IS_DEBUG_BUILD = typeof __SENTRY_DEBUG__ === "undefined" ? true : __SENTRY_DEBUG__;
function getDefaultIntegrations2(_options = {}) {
  return [
    // TODO(v10): Replace with `eventFiltersIntegration` once we remove the deprecated `inboundFiltersIntegration`
    // eslint-disable-next-line deprecation/deprecation
    inboundFiltersIntegration(),
    functionToStringIntegration(),
    breadcrumbsIntegration(),
    globalHandlersIntegration(),
    linkedErrorsIntegration(),
    dedupeIntegration(),
    httpContextIntegration(),
    browserSessionIntegration()
  ];
}
function init2(options) {
  const opts = __spreadValues({
    defaultIntegrations: getDefaultIntegrations2()
  }, options);
  applySdkMetadata(opts, "angular");
  checkAndSetAngularVersion();
  return init(opts);
}
function checkAndSetAngularVersion() {
  const ANGULAR_MINIMUM_VERSION = 14;
  const angularVersion = VERSION?.major && parseInt(VERSION.major, 10);
  if (angularVersion) {
    if (angularVersion < ANGULAR_MINIMUM_VERSION) {
      IS_DEBUG_BUILD && logger.warn(`This Sentry SDK does not officially support Angular ${angularVersion}.`, `This SDK only supports Angular ${ANGULAR_MINIMUM_VERSION} and above.`, "If you're using lower Angular versions, check the Angular Version Compatibility table in our docs: https://docs.sentry.io/platforms/javascript/guides/angular/#angular-version-compatibility.", "Otherwise, please consider upgrading your Angular version.");
    }
    setContext("angular", {
      version: angularVersion
    });
  }
}
var isNgZoneEnabled = typeof Zone !== "undefined" && Zone.root?.run;
function runOutsideAngular(callback) {
  return isNgZoneEnabled ? Zone.root.run(callback) : callback();
}
function tryToUnwrapZonejsError(error) {
  return error && error.ngOriginalError ? error.ngOriginalError : error;
}
function extractHttpModuleError(error) {
  if (isErrorOrErrorLikeObject(error.error)) {
    return error.error;
  }
  if (typeof ErrorEvent !== "undefined" && error.error instanceof ErrorEvent && error.error.message) {
    return error.error.message;
  }
  if (typeof error.error === "string") {
    return `Server returned code ${error.status} with body "${error.error}"`;
  }
  return error.message;
}
function isErrorOrErrorLikeObject(value) {
  if (value instanceof Error) {
    return true;
  }
  if (value === null || typeof value !== "object") {
    return false;
  }
  const candidate = value;
  return isString(candidate.name) && isString(candidate.message) && (void 0 === candidate.stack || isString(candidate.stack));
}
var SentryErrorHandler = class {
  constructor(options) {
    this._options = __spreadValues({
      logErrors: true
    }, options);
  }
  /**
   * Method executed when the injector is destroyed.
   */
  ngOnDestroy() {
    if (this._removeAfterSendEventListener) {
      this._removeAfterSendEventListener();
    }
  }
  /**
   * Method called for every value captured through the ErrorHandler
   */
  handleError(error) {
    const extractedError = this._extractError(error) || "Handled unknown error";
    const eventId = runOutsideAngular(() => captureException(extractedError, {
      mechanism: {
        type: "angular",
        handled: false
      }
    }));
    if (this._options.logErrors) {
      consoleSandbox(() => console.error(extractedError));
    }
    if (this._options.showDialog) {
      const client = getClient();
      if (client && !this._removeAfterSendEventListener) {
        this._removeAfterSendEventListener = client.on("afterSendEvent", (event) => {
          if (!event.type && event.event_id) {
            runOutsideAngular(() => {
              showReportDialog(__spreadProps(__spreadValues({}, this._options.dialogOptions), {
                eventId: event.event_id
              }));
            });
          }
        });
      } else if (!client) {
        runOutsideAngular(() => {
          showReportDialog(__spreadProps(__spreadValues({}, this._options.dialogOptions), {
            eventId
          }));
        });
      }
    }
  }
  /**
   * Used to pull a desired value that will be used to capture an event out of the raw value captured by ErrorHandler.
   */
  _extractError(error) {
    if (this._options.extractor) {
      const defaultExtractor = this._defaultExtractor.bind(this);
      return this._options.extractor(error, defaultExtractor);
    }
    return this._defaultExtractor(error);
  }
  /**
   * Default implementation of error extraction that handles default error wrapping, HTTP responses, ErrorEvent and few other known cases.
   */
  _defaultExtractor(errorCandidate) {
    const error = tryToUnwrapZonejsError(errorCandidate);
    if (error instanceof HttpErrorResponse) {
      return extractHttpModuleError(error);
    }
    if (typeof error === "string" || isErrorOrErrorLikeObject(error)) {
      return error;
    }
    return null;
  }
};
SentryErrorHandler.\u0275fac = function SentryErrorHandler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SentryErrorHandler)(\u0275\u0275inject("errorHandlerOptions"));
};
SentryErrorHandler.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: SentryErrorHandler,
  factory: SentryErrorHandler.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SentryErrorHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: ["errorHandlerOptions"]
      }]
    }];
  }, null);
})();
function createErrorHandler(config) {
  return new SentryErrorHandler(config);
}
var ANGULAR_ROUTING_OP = "ui.angular.routing";
var ANGULAR_INIT_OP = "ui.angular.init";
var instrumentationInitialized;
function browserTracingIntegration2(options = {}) {
  if (options.instrumentNavigation !== false) {
    instrumentationInitialized = true;
  }
  return browserTracingIntegration(__spreadProps(__spreadValues({}, options), {
    instrumentNavigation: false
  }));
}
function _updateSpanAttributesForParametrizedUrl(route, span) {
  const attributes = span && spanToJSON(span).data || {};
  if (span && attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === "url") {
    span.updateName(route);
    span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "route");
    span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, `auto.${spanToJSON(span).op}.angular`);
  }
}
var TraceService = class {
  constructor(_router) {
    this._router = _router;
    this.navStart$ = this._router.events.pipe(filter((event) => event instanceof NavigationStart), tap((navigationEvent) => {
      if (!instrumentationInitialized) {
        IS_DEBUG_BUILD && logger.error("Angular integration has tracing enabled, but Tracing integration is not configured");
        return;
      }
      if (this._routingSpan) {
        this._routingSpan.end();
        this._routingSpan = null;
      }
      const client = getClient();
      const strippedUrl = stripUrlQueryAndFragment(navigationEvent.url);
      if (client) {
        if (!this._isPageloadOngoing()) {
          runOutsideAngular(() => {
            startBrowserTracingNavigationSpan(client, {
              name: strippedUrl,
              attributes: {
                [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.angular",
                [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url"
              }
            });
          });
        } else {
          this._pageloadOngoing = false;
        }
        this._routingSpan = runOutsideAngular(() => startInactiveSpan({
          name: `${navigationEvent.url}`,
          op: ANGULAR_ROUTING_OP,
          attributes: __spreadValues({
            [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.angular",
            [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
            url: strippedUrl
          }, navigationEvent.navigationTrigger && {
            navigationTrigger: navigationEvent.navigationTrigger
          })
        })) || null;
        return;
      }
    }));
    this.resEnd$ = this._router.events.pipe(filter((event) => event instanceof ResolveEnd), tap((event) => {
      const route = getParameterizedRouteFromSnapshot(event.state.root);
      if (route) {
        getCurrentScope().setTransactionName(route);
      }
      const activeSpan = getActiveSpan();
      const rootSpan = activeSpan && getRootSpan(activeSpan);
      _updateSpanAttributesForParametrizedUrl(route, rootSpan);
    }));
    this.navEnd$ = this._router.events.pipe(filter((event) => event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError), tap(() => {
      if (this._routingSpan) {
        runOutsideAngular(() => {
          this._routingSpan.end();
        });
        this._routingSpan = null;
      }
    }));
    this._routingSpan = null;
    this._pageloadOngoing = true;
    this._subscription = new Subscription();
    this._subscription.add(this.navStart$.subscribe());
    this._subscription.add(this.resEnd$.subscribe());
    this._subscription.add(this.navEnd$.subscribe());
  }
  /**
   * This is used to prevent memory leaks when the root view is created and destroyed multiple times,
   * since `subscribe` callbacks capture `this` and prevent many resources from being GC'd.
   */
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
  /**
   * We only _avoid_ creating a navigation root span in one case:
   *
   * There is an ongoing pageload span AND the router didn't yet emit the first navigation start event
   *
   * The first navigation start event will create the child routing span
   * and update the pageload root span name on ResolveEnd.
   *
   * There's an edge case we need to avoid here: If the router fires the first navigation start event
   * _after_ the pageload root span finished. This is why we check for the pageload root span.
   * Possible real-world scenario: Angular application and/or router is bootstrapped after the pageload
   * idle root span finished
   *
   * The overall rationale is:
   * - if we already avoided creating a navigation root span once, we don't avoid it again
   *   (i.e. set `_pageloadOngoing` to `false`)
   * - if `_pageloadOngoing` is already `false`, create a navigation root span
   * - if there's no active/pageload root span, create a navigation root span
   * - only if there's an ongoing pageload root span AND `_pageloadOngoing` is still `true,
   *   don't create a navigation root span
   */
  _isPageloadOngoing() {
    if (!this._pageloadOngoing) {
      return false;
    }
    const activeSpan = getActiveSpan();
    if (!activeSpan) {
      this._pageloadOngoing = false;
      return false;
    }
    const rootSpan = getRootSpan(activeSpan);
    this._pageloadOngoing = spanToJSON(rootSpan).op === "pageload";
    return this._pageloadOngoing;
  }
};
TraceService.\u0275fac = function TraceService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TraceService)(\u0275\u0275inject(Router));
};
TraceService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: TraceService,
  factory: TraceService.\u0275fac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TraceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Router
    }];
  }, null);
})();
var TraceDirective = class {
  constructor(_host) {
    this._host = _host;
  }
  /**
   * Implementation of OnInit lifecycle method
   * @inheritdoc
   */
  ngOnInit() {
    if (!this.componentName) {
      this.componentName = this._host.nativeElement.tagName.toLowerCase();
    }
    if (getActiveSpan()) {
      this._tracingSpan = runOutsideAngular(() => startInactiveSpan({
        name: `<${this.componentName}>`,
        op: ANGULAR_INIT_OP,
        attributes: {
          [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.angular.trace_directive"
        }
      }));
    }
  }
  /**
   * Implementation of AfterViewInit lifecycle method
   * @inheritdoc
   */
  ngAfterViewInit() {
    const span = this._tracingSpan;
    if (span) {
      runOutsideAngular(() => span.end());
    }
  }
};
TraceDirective.\u0275fac = function TraceDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TraceDirective)(\u0275\u0275directiveInject(ElementRef));
};
TraceDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: TraceDirective,
  selectors: [["", "trace", ""]],
  inputs: {
    componentName: [0, "trace", "componentName"]
  },
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TraceDirective, [{
    type: Directive,
    args: [{
      selector: "[trace]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    componentName: [{
      type: Input,
      args: ["trace"]
    }]
  });
})();
var TraceModule = class {
};
TraceModule.\u0275fac = function TraceModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TraceModule)();
};
TraceModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: TraceModule
});
TraceModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TraceModule, [{
    type: NgModule,
    args: [{
      declarations: [TraceDirective],
      exports: [TraceDirective]
    }]
  }], null, null);
})();
function getParameterizedRouteFromSnapshot(route) {
  const parts = [];
  let currentRoute = route?.firstChild;
  while (currentRoute) {
    const path = currentRoute?.routeConfig && currentRoute.routeConfig.path;
    if (path === null || path === void 0) {
      break;
    }
    parts.push(path);
    currentRoute = currentRoute.firstChild;
  }
  const fullPath = parts.filter((part) => part).join("/");
  return fullPath ? `/${fullPath}/` : "/";
}

// libs/components/src/lib/app.component.ts
function AppComponent_global_chat_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "global-chat");
  }
}
var START_QUERY = location.search;
function initSentry(dsn, sample_rate = 0.1) {
  if (!dsn)
    return;
  init2({
    dsn,
    integrations: [
      browserTracingIntegration2(),
      replayIntegration({
        maskAllText: false,
        blockAllMedia: false
      })
    ],
    // Performance Monitoring
    tracesSampleRate: 1,
    //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: [
      "localhost",
      /^https:\/\/[a-zA-Z0-9_-]*\.[a-zA-Z0-9]*\/api/,
      /^https:\/\/[a-zA-Z0-9_-]*\.placeos\.run*\/api/
    ],
    // Session Replay
    replaysSessionSampleRate: sample_rate,
    // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1
    // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
}
var AppComponent = class _AppComponent extends AsyncHandler {
  get debug() {
    return window.debug && this._settings.get("app.allow_debugging") === true;
  }
  get has_chat() {
    return this._settings.get("app.chat.enabled");
  }
  constructor(_analytics, _settings, _org, _cache, _snackbar, _hotkey, _clipboard, _route, _router, _maps, _tracing, _locale) {
    super();
    this._analytics = _analytics;
    this._settings = _settings;
    this._org = _org;
    this._cache = _cache;
    this._snackbar = _snackbar;
    this._hotkey = _hotkey;
    this._clipboard = _clipboard;
    this._route = _route;
    this._router = _router;
    this._maps = _maps;
    this._tracing = _tracing;
    this._locale = _locale;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      log("APP", "MOCKS:", mocks_exports);
      this._hotkey.listen(["Control", "Alt", "Shift", "KeyM"], () => {
        localStorage.setItem("mock", `${localStorage.getItem("mock") !== "true"}`);
        location.reload();
      });
      this._hotkey.listen(["Control", "Alt", "Shift", "KeyD"], () => {
        this._settings.saveUserSetting("dark_mode", !this._settings.get("dark_mode"));
        notifySuccess("Toggled dark mode.");
      });
      this._hotkey.listen(["Control", "Alt", "Shift", "KeyC"], () => {
        this._clipboard.copy(`${Y()}|${rn()}`);
        notifySuccess("Successfully copied token.");
      });
      this._hotkey.listen(["Control", "Alt", "Shift", "KeyV"], () => {
        navigator.clipboard?.readText().then((tkn) => this._pasteToken(tkn));
      });
      window.pasteToken = (t) => this._pasteToken(t);
      this._route.queryParamMap.subscribe((params) => {
        if (params.has("hide_nav"))
          localStorage.setItem("PlaceOS.hide_nav", "true");
        if (params.has("lang")) {
          const locale = params.get("lang");
          this._locale?.setLocale(locale);
          localStorage.setItem("PLACEOS.locale", locale);
        }
        if (params.has("x-api-key")) {
          gs(params.get("x-api-key"));
        }
      });
      setNotifyOutlet(this._snackbar);
      setTranslationService(this._locale);
      yield lastValueFrom(this._settings.initialised.pipe(first((_) => _)));
      setAppName(this._settings.get("app.short_name"));
      const settings = this._settings.get("composer") || {};
      settings.mock = !!this._settings.get("mock") || location.origin.includes("demo.place.tech");
      if (START_QUERY) {
        const query = Ne(START_QUERY.substring(1));
        this._router.navigate([], {
          relativeTo: this._route,
          queryParams: query
        });
      }
      yield setupPlace(settings).catch((_) => console.error(_));
      yield lastValueFrom(this._org.initialised.pipe(first((_) => _)));
      if (this._locale) {
        this._locale.zone_id = this._org.organisation.id;
        this._locale.init();
      }
      setupCache(this._cache);
      if (!settings.local_login) {
        this.timeout("wait_for_user", () => this.onInitError(), 30 * 1e3);
      }
      yield lastValueFrom(current_user.pipe(first((_) => !!_)));
      this.clearTimeout("wait_for_user");
      this._initLocale();
      setInternalUserDomain(this._settings.get("app.internal_user_domain") || `@${currentUser()?.email?.split("@")[1]}`);
      this._initAnalytics();
      initSentry(this._settings.get("app.sentry_dsn"));
      try {
        this._setSafariHeaders();
        this._initUploads();
        this._initFixedDevice();
      } catch {
        log("APP", "Failed to initialise background services.", void 0, "warn");
      }
    });
  }
  onInitError() {
    if (ln() || currentUser()?.is_logged_in)
      return;
    hn();
    location.reload();
  }
  _initAnalytics() {
    const tracking_id = this._settings.get("app.analytics.tracking_id");
    if (!tracking_id)
      return;
    this._analytics.init(tracking_id);
    this._analytics.load(tracking_id);
    this._analytics.setUser(currentUser().id);
  }
  _initLocale() {
    try {
      let locale = localStorage.getItem("PLACEOS.locale");
      const locales = this._settings.get("app.locales") || [];
      if (locale) {
        this._locale?.setLocale(locale);
      } else {
        const list = navigator.languages;
        for (const lang of list) {
          locale = locales.find((_) => _.id === lang);
          if (!locale)
            locale = locales.find((_) => lang.includes(_.id));
          if (locale) {
            this._locale?.setLocale(lang);
            localStorage.setItem("PLACEOS.locale", lang);
            break;
          }
        }
      }
    } catch {
      log("APP", "Failed to initialise locale service.", void 0, "warn");
    }
  }
  _pasteToken(tkn) {
    const parts = tkn.split("|");
    const id = no();
    localStorage.setItem(`${id}_access_token`, `${parts[0]}`);
    localStorage.setItem(`${id}_refresh_token`, `${parts[1]}`);
    localStorage.setItem(`${id}_expires_at`, `${addHours(/* @__PURE__ */ new Date(), 6).valueOf()}`);
    notifySuccess("Successfully pasted token.");
    setTimeout(() => location.reload(), 2e3);
  }
  _checkReload() {
    if (!hasNewVersion())
      return;
    location.reload();
    this.timeout("reload", () => location.href = `${location.origin}${location.pathname}`);
  }
  _setSafariHeaders() {
    if (isMobileSafari())
      return;
    const tkn = Y();
    Nn(tkn === "x-api-key" ? { "x-api-key": Et() } : { Authorization: `Bearer ${tkn}` });
  }
  _initUploads(tries = 1) {
    if (!this._settings.get("app.has_uploads"))
      return;
    this.timeout("init_uploads", () => {
      try {
        Mt({
          auto_start: true,
          token: Y(),
          endpoint: "/api/engine/v2/uploads",
          worker_url: "assets/md5_worker.js",
          providers: [Xt, Jt, Yt, Qt]
        });
      } catch (e2) {
        this.timeout("init_uploads", () => this._initUploads(tries += 1), 1e3 * tries);
      }
    });
  }
  _initFixedDevice() {
    return __async(this, null, function* () {
      if (!pr())
        return;
      this.interval("auto-update-version", () => this._checkReload(), 15 * 1e3);
      yield requestScreenWakeLock();
    });
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(GoogleAnalyticsService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SwUpdate), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(HotkeysService), \u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MapsPeopleService), \u0275\u0275directiveInject(TraceService), \u0275\u0275directiveInject(LocaleService, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 1, consts: [[1, "relative", "h-1/2", "w-full", "flex-1"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "global-banner");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, AppComponent_global_chat_3_Template, 1, 0, "global-chat", 1);
        \u0275\u0275element(4, "global-loading");
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.has_chat);
      }
    }, dependencies: [NgIf, RouterOutlet, GlobalBannerComponent, GlobalLoadingComponent, ChatComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "libs/components/src/lib/app.component.ts", lineNumber: 111 });
})();

// apps/concierge/src/environments/environment.ts
var environment = {
  production: false
};

// apps/concierge/src/app/app-routing.module.ts
var routes = [
  { path: "-", component: RedirectComponent },
  { path: "unauthorised", component: UnauthorisedComponent },
  {
    path: "book/rooms",
    loadChildren: () => import("./day-view.module-PLF5DOEE.js").then((m) => m.DayViewModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "facilities",
    loadChildren: () => import("./facilities.module-ADWD3NSL.js").then((m) => m.FacilitiesModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "book/visitors",
    loadChildren: () => import("./visitors.module-VXF3J5UY.js").then((m) => m.VisitorsModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "book/assets",
    loadChildren: () => import("./asset-manager.module-X7WFBQ7G.js").then((m) => m.AppAssetManangerModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "book/desks",
    loadChildren: () => import("./desks.module-GTJJUFUZ.js").then((m) => m.DesksModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "book/lockers",
    loadChildren: () => import("./lockers.module-BAIPWK2S.js").then((m) => m.LockersModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "reports",
    loadChildren: () => import("./reports.module-YJZTH5XH.js").then((m) => m.ReportsModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "entertainment/events",
    loadChildren: () => import("./events.module-EARMDVIC.js").then((m) => m.EventsModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "users/staff",
    loadChildren: () => import("./staff.module-JQ7E745R.js").then((m) => m.StaffModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "book/catering",
    loadChildren: () => import("./catering.module-SRM73OKN.js").then((m) => m.CateringModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "points-management",
    loadChildren: () => import("./points.module-LI4X7II6.js").then((m) => m.PointsModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "book/parking",
    loadChildren: () => import("./parking.module-KNNJTOAE.js").then((m) => m.AppParkingModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "surveys",
    loadChildren: () => import("./surveys.module-UMMYS76B.js").then((m) => m.SurveysModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "room-management",
    loadChildren: () => import("./room-manager.module-5EQ2MYLN.js").then((m) => m.RoomManagerModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "level-management",
    loadChildren: () => import("./level-manager.module-X55ITTX5.js").then((m) => m.LevelManagerModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "building-management",
    loadChildren: () => import("./building-manager.module-K4SUDX37.js").then((m) => m.BuildingManagerModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "region-management",
    loadChildren: () => import("./region-manager.module-U5A2BNXA.js").then((m) => m.RegionManagerModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "email-templates",
    loadChildren: () => import("./email-templates.module-DDWENJ4C.js").then((m) => m.EmailTemplatesModule)
  },
  {
    path: "points-of-interest",
    loadChildren: () => import("./poi-manager.module-B6OOAJID.js").then((m) => m.POIManagerModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "url-management",
    loadChildren: () => import("./url-manager.module-ATP7WPXO.js").then((m) => m.UrlManagerModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  {
    path: "signage",
    loadChildren: () => import("./signage.module-K6GET2TS.js").then((m) => m.SignageModule),
    canActivate: [AuthorisedUserGuard],
    canLoad: [AuthorisedUserGuard]
  },
  { path: "**", redirectTo: "-" }
];
var AppRoutingModule = class _AppRoutingModule {
  static {
    this.\u0275fac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes, { useHash: true }), RouterModule] });
  }
};

// node_modules/@angular/common/locales/ar.mjs
var u = void 0;
function plural(val) {
  const n2 = val;
  if (n2 === 0) return 0;
  if (n2 === 1) return 1;
  if (n2 === 2) return 2;
  if (n2 % 100 === Math.floor(n2 % 100) && n2 % 100 >= 3 && n2 % 100 <= 10) return 3;
  if (n2 % 100 === Math.floor(n2 % 100) && n2 % 100 >= 11 && n2 % 100 <= 99) return 4;
  return 5;
}
var ar_default = ["ar", [["\u0635", "\u0645"], u, u], [["\u0635", "\u0645"], u, ["\u0635\u0628\u0627\u062D\u064B\u0627", "\u0645\u0633\u0627\u0621\u064B"]], [["\u062D", "\u0646", "\u062B", "\u0631", "\u062E", "\u062C", "\u0633"], ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0627\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"], u, ["\u0623\u062D\u062F", "\u0625\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"]], u, [["\u064A", "\u0641", "\u0645", "\u0623", "\u0648", "\u0646", "\u0644", "\u063A", "\u0633", "\u0643", "\u0628", "\u062F"], ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"], u], u, [["\u0642.\u0645", "\u0645"], u, ["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F", "\u0645\u064A\u0644\u0627\u062F\u064A"]], 6, [5, 6], ["d\u200F/M\u200F/y", "dd\u200F/MM\u200F/y", "d MMMM y", "EEEE\u060C d MMMM y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", u, "{1} \u0641\u064A {0}", u], [".", ",", ";", "\u200E%\u200E", "\u200E+", "\u200E-", "E", "\xD7", "\u2030", "\u221E", "\u0644\u064A\u0633\xA0\u0631\u0642\u0645\u064B\u0627", ":"], ["#,##0.###", "#,##0%", "\xA4\xA0#,##0.00", "#E0"], "EGP", "\u062C.\u0645.\u200F", "\u062C\u0646\u064A\u0647 \u0645\u0635\u0631\u064A", {
  "AED": ["\u062F.\u0625.\u200F"],
  "ARS": [u, "AR$"],
  "AUD": ["AU$"],
  "BBD": [u, "BB$"],
  "BHD": ["\u062F.\u0628.\u200F"],
  "BMD": [u, "BM$"],
  "BND": [u, "BN$"],
  "BSD": [u, "BS$"],
  "BYN": [u, "\u0440."],
  "BZD": [u, "BZ$"],
  "CAD": ["CA$"],
  "CLP": [u, "CL$"],
  "CNY": ["CN\xA5"],
  "COP": [u, "CO$"],
  "CUP": [u, "CU$"],
  "DOP": [u, "DO$"],
  "DZD": ["\u062F.\u062C.\u200F"],
  "EGP": ["\u062C.\u0645.\u200F", "E\xA3"],
  "FJD": [u, "FJ$"],
  "GBP": ["UK\xA3"],
  "GYD": [u, "GY$"],
  "HKD": ["HK$"],
  "IQD": ["\u062F.\u0639.\u200F"],
  "IRR": ["\u0631.\u0625."],
  "JMD": [u, "JM$"],
  "JOD": ["\u062F.\u0623.\u200F"],
  "JPY": ["JP\xA5"],
  "KWD": ["\u062F.\u0643.\u200F"],
  "KYD": [u, "KY$"],
  "LBP": ["\u0644.\u0644.\u200F", "L\xA3"],
  "LRD": [u, "$LR"],
  "LYD": ["\u062F.\u0644.\u200F"],
  "MAD": ["\u062F.\u0645.\u200F"],
  "MRU": ["\u0623.\u0645."],
  "MXN": ["MX$"],
  "NZD": ["NZ$"],
  "OMR": ["\u0631.\u0639.\u200F"],
  "PHP": [u, "\u20B1"],
  "QAR": ["\u0631.\u0642.\u200F"],
  "SAR": ["\u0631.\u0633.\u200F"],
  "SBD": [u, "SB$"],
  "SDD": ["\u062F.\u0633.\u200F"],
  "SDG": ["\u062C.\u0633."],
  "SRD": [u, "SR$"],
  "SYP": ["\u0644.\u0633.\u200F", "\xA3"],
  "THB": ["\u0E3F"],
  "TND": ["\u062F.\u062A.\u200F"],
  "TTD": [u, "TT$"],
  "TWD": ["NT$"],
  "USD": ["US$"],
  "UYU": [u, "UY$"],
  "YER": ["\u0631.\u064A.\u200F"]
}, "rtl", plural];

// node_modules/@angular/common/locales/es.mjs
var u2 = void 0;
function plural2(val) {
  const n2 = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e2 = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (n2 === 1) return 1;
  if (e2 === 0 && !(i === 0) && i % 1e6 === 0 && v === 0 || !(e2 >= 0 && e2 <= 5)) return 4;
  return 5;
}
var es_default = ["es", [["a.\xA0m.", "p.\xA0m."], u2, u2], u2, [["D", "L", "M", "X", "J", "V", "S"], ["dom", "lun", "mar", "mi\xE9", "jue", "vie", "s\xE1b"], ["domingo", "lunes", "martes", "mi\xE9rcoles", "jueves", "viernes", "s\xE1bado"], ["DO", "LU", "MA", "MI", "JU", "VI", "SA"]], u2, [["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"], ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]], u2, [["a. C.", "d. C."], u2, ["antes de Cristo", "despu\xE9s de Cristo"]], 1, [6, 0], ["d/M/yy", "d MMM y", "d 'de' MMMM 'de' y", "EEEE, d 'de' MMMM 'de' y"], ["H:mm", "H:mm:ss", "H:mm:ss z", "H:mm:ss (zzzz)"], ["{1}, {0}", u2, u2, u2], [",", ".", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0\xA0%", "#,##0.00\xA0\xA4", "#E0"], "EUR", "\u20AC", "euro", {
  "AUD": [u2, "$"],
  "BRL": [u2, "R$"],
  "BYN": [u2, "\u0440."],
  "CAD": [u2, "$"],
  "CNY": [u2, "\xA5"],
  "EGP": [],
  "ESP": ["\u20A7"],
  "GBP": [u2, "\xA3"],
  "HKD": [u2, "$"],
  "ILS": [u2, "\u20AA"],
  "INR": [u2, "\u20B9"],
  "JPY": [u2, "\xA5"],
  "KRW": [u2, "\u20A9"],
  "MXN": [u2, "$"],
  "NZD": [u2, "$"],
  "PHP": [u2, "\u20B1"],
  "RON": [u2, "L"],
  "THB": ["\u0E3F"],
  "TWD": [u2, "NT$"],
  "USD": ["US$", "$"],
  "XAF": [],
  "XCD": [u2, "$"],
  "XOF": []
}, "ltr", plural2];

// node_modules/@angular/common/locales/fr.mjs
var u3 = void 0;
function plural3(val) {
  const n2 = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e2 = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (i === 0 || i === 1) return 1;
  if (e2 === 0 && !(i === 0) && i % 1e6 === 0 && v === 0 || !(e2 >= 0 && e2 <= 5)) return 4;
  return 5;
}
var fr_default = ["fr", [["AM", "PM"], u3, u3], u3, [["D", "L", "M", "M", "J", "V", "S"], ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], ["di", "lu", "ma", "me", "je", "ve", "sa"]], u3, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["janv.", "f\xE9vr.", "mars", "avr.", "mai", "juin", "juil.", "ao\xFBt", "sept.", "oct.", "nov.", "d\xE9c."], ["janvier", "f\xE9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xFBt", "septembre", "octobre", "novembre", "d\xE9cembre"]], u3, [["av. J.-C.", "ap. J.-C."], u3, ["avant J\xE9sus-Christ", "apr\xE8s J\xE9sus-Christ"]], 1, [6, 0], ["dd/MM/y", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", "{1}, {0}", "{1} '\xE0' {0}", u3], [",", "\u202F", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0\xA0%", "#,##0.00\xA0\xA4", "#E0"], "EUR", "\u20AC", "euro", {
  "ARS": ["$AR", "$"],
  "AUD": ["$AU", "$"],
  "BEF": ["FB"],
  "BMD": ["$BM", "$"],
  "BND": ["$BN", "$"],
  "BYN": [u3, "\u0440."],
  "BZD": ["$BZ", "$"],
  "CAD": ["$CA", "$"],
  "CLP": ["$CL", "$"],
  "CNY": [u3, "\xA5"],
  "COP": ["$CO", "$"],
  "CYP": ["\xA3CY"],
  "EGP": [u3, "\xA3E"],
  "FJD": ["$FJ", "$"],
  "FKP": ["\xA3FK", "\xA3"],
  "FRF": ["F"],
  "GBP": ["\xA3GB", "\xA3"],
  "GIP": ["\xA3GI", "\xA3"],
  "HKD": [u3, "$"],
  "IEP": ["\xA3IE"],
  "ILP": ["\xA3IL"],
  "ITL": ["\u20A4IT"],
  "JPY": [u3, "\xA5"],
  "KMF": [u3, "FC"],
  "LBP": ["\xA3LB", "\xA3L"],
  "MTP": ["\xA3MT"],
  "MXN": ["$MX", "$"],
  "NAD": ["$NA", "$"],
  "NIO": [u3, "$C"],
  "NZD": ["$NZ", "$"],
  "PHP": [u3, "\u20B1"],
  "RHD": ["$RH"],
  "RON": [u3, "L"],
  "RWF": [u3, "FR"],
  "SBD": ["$SB", "$"],
  "SGD": ["$SG", "$"],
  "SRD": ["$SR", "$"],
  "TOP": [u3, "$T"],
  "TTD": ["$TT", "$"],
  "TWD": [u3, "NT$"],
  "USD": ["$US", "$"],
  "UYU": ["$UY", "$"],
  "WST": ["$WS"],
  "XCD": [u3, "$"],
  "XPF": ["FCFP"],
  "ZMW": [u3, "Kw"]
}, "ltr", plural3];

// node_modules/@angular/common/locales/it.mjs
var u4 = void 0;
function plural4(val) {
  const n2 = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e2 = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (i === 1 && v === 0) return 1;
  if (e2 === 0 && !(i === 0) && i % 1e6 === 0 && v === 0 || !(e2 >= 0 && e2 <= 5)) return 4;
  return 5;
}
var it_default = ["it", [["m.", "p."], ["AM", "PM"], u4], u4, [["D", "L", "M", "M", "G", "V", "S"], ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], ["domenica", "luned\xEC", "marted\xEC", "mercoled\xEC", "gioved\xEC", "venerd\xEC", "sabato"], ["dom", "lun", "mar", "mer", "gio", "ven", "sab"]], u4, [["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"], ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]], u4, [["aC", "dC"], ["a.C.", "d.C."], ["avanti Cristo", "dopo Cristo"]], 1, [6, 0], ["dd/MM/yy", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1}, {0}", u4, "{1} {0}", u4], [",", ".", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "#,##0.00\xA0\xA4", "#E0"], "EUR", "\u20AC", "euro", {
  "BRL": [u4, "R$"],
  "BYN": [u4, "Br"],
  "EGP": [u4, "\xA3E"],
  "HKD": [u4, "$"],
  "INR": [u4, "\u20B9"],
  "JPY": [u4, "\xA5"],
  "KRW": [u4, "\u20A9"],
  "MXN": [u4, "$"],
  "NOK": [u4, "NKr"],
  "THB": ["\u0E3F"],
  "TWD": [u4, "NT$"],
  "USD": [u4, "$"],
  "VND": [u4, "\u20AB"]
}, "ltr", plural4];

// node_modules/@angular/common/locales/ja.mjs
var u5 = void 0;
function plural5(val) {
  const n2 = val;
  return 5;
}
var ja_default = ["ja", [["\u5348\u524D", "\u5348\u5F8C"], u5, u5], u5, [["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"], u5, ["\u65E5\u66DC\u65E5", "\u6708\u66DC\u65E5", "\u706B\u66DC\u65E5", "\u6C34\u66DC\u65E5", "\u6728\u66DC\u65E5", "\u91D1\u66DC\u65E5", "\u571F\u66DC\u65E5"], ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"]], u5, [["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], u5], u5, [["BC", "AD"], ["\u7D00\u5143\u524D", "\u897F\u66A6"], u5], 0, [6, 0], ["y/MM/dd", u5, "y\u5E74M\u6708d\u65E5", "y\u5E74M\u6708d\u65E5EEEE"], ["H:mm", "H:mm:ss", "H:mm:ss z", "H\u6642mm\u5206ss\u79D2 zzzz"], ["{1} {0}", u5, u5, u5], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "JPY", "\uFFE5", "\u65E5\u672C\u5186", {
  "BYN": [u5, "\u0440."],
  "CNY": ["\u5143", "\uFFE5"],
  "JPY": ["\uFFE5"],
  "PHP": [u5, "\u20B1"],
  "RON": [u5, "\u30EC\u30A4"],
  "XXX": []
}, "ltr", plural5];

// node_modules/@angular/common/locales/zh.mjs
var u6 = void 0;
function plural6(val) {
  const n2 = val;
  return 5;
}
var zh_default = ["zh", [["\u4E0A\u5348", "\u4E0B\u5348"], u6, u6], u6, [["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"], ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"], ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"]], u6, [["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"]], u6, [["\u516C\u5143\u524D", "\u516C\u5143"], u6, u6], 0, [6, 0], ["y/M/d", "y\u5E74M\u6708d\u65E5", u6, "y\u5E74M\u6708d\u65E5EEEE"], ["HH:mm", "HH:mm:ss", "z HH:mm:ss", "zzzz HH:mm:ss"], ["{1} {0}", u6, u6, u6], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "CNY", "\xA5", "\u4EBA\u6C11\u5E01", {
  "AUD": ["AU$", "$"],
  "BYN": [u6, "\u0440."],
  "CNY": ["\xA5"],
  "ILR": ["ILS"],
  "JPY": ["JP\xA5", "\xA5"],
  "KRW": ["\uFFE6", "\u20A9"],
  "PHP": [u6, "\u20B1"],
  "RUR": [u6, "\u0440."],
  "TWD": ["NT$"],
  "USD": ["US$", "$"],
  "XXX": []
}, "ltr", plural6];

// apps/concierge/src/app/app.module.ts
var AppModule = class _AppModule {
  constructor() {
    registerLocaleData(fr_default);
    registerLocaleData(ar_default);
    registerLocaleData(ja_default);
    registerLocaleData(zh_default);
    registerLocaleData(es_default);
    registerLocaleData(it_default);
  }
  static {
    this.\u0275fac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
      {
        provide: MAT_CHIPS_DEFAULT_OPTIONS,
        useValue: {
          separatorKeyCodes: [ENTER, COMMA]
        }
      },
      {
        provide: ErrorHandler,
        useValue: createErrorHandler({
          showDialog: false
        })
      },
      {
        provide: TraceService,
        deps: [Router]
      },
      {
        provide: LOCALE_ID,
        deps: [LocaleService],
        useFactory: (localeService) => localeService.locale
      },
      provideHttpClient(withInterceptorsFromDi())
    ], imports: [
      BrowserModule,
      AppRoutingModule,
      MatSnackBarModule,
      BrowserAnimationsModule,
      UIModule,
      ServiceWorkerModule.register("ngsw-worker.js", {
        enabled: environment.production
      })
    ] });
  }
};

// apps/concierge/src/main.ts
if (environment.production) {
  enableProdMode();
}
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));
/*! Bundled license information:

@angular/animations/fesm2022/browser.mjs:
  (**
   * @license Angular v19.2.1
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v19.2.1
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/service-worker/fesm2022/service-worker.mjs:
  (**
   * @license Angular v19.2.1
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)

@angular/common/locales/ar.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)

@angular/common/locales/es.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)

@angular/common/locales/fr.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)

@angular/common/locales/it.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)

@angular/common/locales/ja.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)

@angular/common/locales/zh.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=main.js.map
