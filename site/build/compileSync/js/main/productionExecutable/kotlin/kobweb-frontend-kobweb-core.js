(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './androidx-compose-runtime-runtime.js', './kobweb-frontend-compose-html-ext.js', './kobweb-common-client-server-internal.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./androidx-compose-runtime-runtime.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-common-client-server-internal.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['kobweb-common-client-server-internal'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-common-client-server-internal' was not found. Please, check whether 'kobweb-common-client-server-internal' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    globalThis['kobweb-frontend-kobweb-core'] = factory(typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['html-html-core'], globalThis['androidx-compose-runtime-runtime'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kobweb-common-client-server-internal']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_androidx_compose_runtime_runtime, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_client_server_internal) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var org_jetbrains_compose_web_css_StyleSheet$stableprop_getter = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.i4;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var VOID = kotlin_kotlin.$_$.c;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f1;
  var protoOf = kotlin_kotlin.$_$.y7;
  var initMetadataForObject = kotlin_kotlin.$_$.n7;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var toString = kotlin_kotlin.$_$.z7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.x5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j7;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var initMetadataForClass = kotlin_kotlin.$_$.i7;
  var mapCapacity = kotlin_kotlin.$_$.f4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var substringAfterLast = kotlin_kotlin.$_$.r9;
  var plus = kotlin_kotlin.$_$.l4;
  var equals = kotlin_kotlin.$_$.b7;
  var getStringHashCode = kotlin_kotlin.$_$.g7;
  var hashCode = kotlin_kotlin.$_$.h7;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.w;
  var mutableStateMapOf = kotlin_androidx_compose_runtime_runtime.$_$.r;
  var ensureNotNull = kotlin_kotlin.$_$.ya;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.sa;
  var A = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var isBlank = kotlin_kotlin.$_$.c9;
  var startsWith = kotlin_kotlin.$_$.q9;
  var endsWith = kotlin_kotlin.$_$.z8;
  var startsWith_0 = kotlin_kotlin.$_$.p9;
  var dropLast = kotlin_kotlin.$_$.w8;
  var charSequenceLength = kotlin_kotlin.$_$.x6;
  var removePrefix = kotlin_kotlin.$_$.j9;
  var Enum = kotlin_kotlin.$_$.ka;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ab;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var joinToString = kotlin_kotlin.$_$.v3;
  var objectCreate = kotlin_kotlin.$_$.x7;
  var substringBefore = kotlin_kotlin.$_$.u9;
  var to = kotlin_kotlin.$_$.fb;
  var charArrayOf = kotlin_kotlin.$_$.u6;
  var trimStart = kotlin_kotlin.$_$.da;
  var substringAfter = kotlin_kotlin.$_$.t9;
  var split = kotlin_kotlin.$_$.o9;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.u;
  var drop = kotlin_kotlin.$_$.x8;
  var first = kotlin_kotlin.$_$.b9;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var split_0 = kotlin_kotlin.$_$.n9;
  var getOrNull = kotlin_kotlin.$_$.s3;
  var Exception = kotlin_kotlin.$_$.ma;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.z;
  var captureStack = kotlin_kotlin.$_$.t6;
  var emptyMap = kotlin_kotlin.$_$.m3;
  var last = kotlin_kotlin.$_$.b4;
  var DynamicNode = kotlin_com_varabyte_kobweb_client_server_internal.$_$.a;
  var toRouteString = kotlin_com_varabyte_kobweb_client_server_internal.$_$.c;
  var KMutableProperty1 = kotlin_kotlin.$_$.j8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var KtMap = kotlin_kotlin.$_$.p2;
  var isInterface = kotlin_kotlin.$_$.q7;
  var contains = kotlin_kotlin.$_$.u8;
  var DisposableEffect = kotlin_androidx_compose_runtime_runtime.$_$.i;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var asReversed = kotlin_kotlin.$_$.z2;
  var substringAfter_0 = kotlin_kotlin.$_$.s9;
  var RouteTree = kotlin_com_varabyte_kobweb_client_server_internal.$_$.b;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_androidx_compose_runtime_runtime.$_$.m;
  var CompositionLocalProvider = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var removeSuffix = kotlin_kotlin.$_$.k9;
  var contains_0 = kotlin_kotlin.$_$.v8;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.k4;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.a;
  var toMutableMap = kotlin_kotlin.$_$.a5;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var alignItems = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a3;
  var justifyContent = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(DefaultStyleSheet, 'DefaultStyleSheet', VOID, StyleSheet);
  initMetadataForObject(AppGlobals, 'AppGlobals');
  initMetadataForCompanion(Companion);
  initMetadataForClass(PageContext, 'PageContext');
  initMetadataForClass(RouteInfo, 'RouteInfo');
  initMetadataForClass(MutableData, 'MutableData', MutableData);
  initMetadataForClass(InitKobwebContext, 'InitKobwebContext');
  initMetadataForClass(InitRouteContext, 'InitRouteContext');
  initMetadataForClass(MutableKobwebConfig, 'MutableKobwebConfig', MutableKobwebConfig);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(MutableOpenLinkStrategies, 'MutableOpenLinkStrategies', MutableOpenLinkStrategies);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(BasePathImpl, 'BasePathImpl');
  initMetadataForClass(OpenLinkStrategy, 'OpenLinkStrategy', VOID, Enum);
  initMetadataForClass(PageData, 'PageData');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Route, 'Route');
  initMetadataForClass(RouteException, 'RouteException', VOID, Exception);
  initMetadataForClass(Router$renderActivePage$$inlined$run$2$2$2$1);
  initMetadataForClass(Router, 'Router', Router);
  initMetadataForObject(ComposableSingletons$RouterKt, 'ComposableSingletons$RouterKt');
  initMetadataForClass(RouteInterceptorScope, 'RouteInterceptorScope');
  initMetadataForClass(UpdateHistoryMode, 'UpdateHistoryMode', VOID, Enum);
  //endregion
  var com_varabyte_kobweb_core_DefaultStyleSheet$stable;
  function KobwebApp(content, $composer, $changed) {
    _init_properties_App_kt__fk8usv();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1293008755);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(content) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp0 = DefaultStyleSheet_getInstance();
      var tmp2 = $composer_0;
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      org_jetbrains_compose_web_css_StyleSheet$stableprop_getter();
      var $composer_1 = tmp2;
      sourceInformationMarkerStart($composer_1, -1196466140, 'CC(Style)166@5403L37:StyleSheet.kt#97hrcb');
      Style(null, tmp0.e2p(), $composer_1, 0, 1);
      sourceInformationMarkerEnd($composer_1);
      content($composer_0, 14 & $dirty);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(KobwebApp$lambda(content, $changed));
    }
  }
  function DefaultStyleSheet$lambda($this$layer) {
    $this$layer.i2p('html, body', DefaultStyleSheet$lambda$lambda);
    $this$layer.i2p('*', DefaultStyleSheet$lambda$lambda_0);
    return Unit_instance;
  }
  function DefaultStyleSheet$lambda$lambda($this$style) {
    padding($this$style, [get_px(0)]);
    margin($this$style, [get_px(0)]);
    return Unit_instance;
  }
  function DefaultStyleSheet$lambda$lambda_0($this$style) {
    boxSizing($this$style, 'border-box');
    return Unit_instance;
  }
  function DefaultStyleSheet() {
    DefaultStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    layer(this, 'reset', DefaultStyleSheet$lambda);
  }
  protoOf(DefaultStyleSheet).h2p = function (selector, cssRule) {
    return this.g2p(selector, cssRule);
  };
  var DefaultStyleSheet_instance;
  function DefaultStyleSheet_getInstance() {
    if (DefaultStyleSheet_instance == null)
      new DefaultStyleSheet();
    return DefaultStyleSheet_instance;
  }
  function KobwebApp$lambda($content, $$changed) {
    return function ($composer, $force) {
      KobwebApp($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_App_kt_kalemn;
  function _init_properties_App_kt__fk8usv() {
    if (!properties_initialized_App_kt_kalemn) {
      properties_initialized_App_kt_kalemn = true;
      com_varabyte_kobweb_core_DefaultStyleSheet$stable = org_jetbrains_compose_web_css_StyleSheet$stableprop_getter();
    }
  }
  var com_varabyte_kobweb_core_AppGlobals$stable;
  function AppGlobals() {
  }
  protoOf(AppGlobals).l30 = function (values) {
    // Inline function 'kotlin.check' call
    if (!!!(this.k30_1 == null)) {
      var message = 'Cannot initialize AppGlobals more than once';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.k30_1 = values;
  };
  var AppGlobals_instance;
  function AppGlobals_getInstance() {
    return AppGlobals_instance;
  }
  function get_PageContextLocal() {
    _init_properties_PageContext_kt__u2hiem();
    return PageContextLocal;
  }
  var PageContextLocal;
  var com_varabyte_kobweb_core_RouteInfo$stable;
  var com_varabyte_kobweb_core_PageContext$stable;
  function Companion() {
  }
  protoOf(Companion).n30 = function () {
    var tmp = this.m30_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('instance');
    }
  };
  protoOf(Companion).o30 = function (router, data) {
    this.m30_1 = new PageContext(router, data);
  };
  var Companion_instance_2;
  function Companion_getInstance_0() {
    return Companion_instance_2;
  }
  function PageContext(router, data) {
    this.p30_1 = router;
    this.q30_1 = data;
    this.r30_1 = mutableStateOf(null);
  }
  protoOf(PageContext).s30 = function (value) {
    this.r30_1.oy(value);
  };
  protoOf(PageContext).t30 = function () {
    var tmp0_elvis_lhs = this.r30_1.t1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'PageContext route info is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function RouteInfo(route, dynamicParams) {
    this.u30_1 = route;
    var tmp = this;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(dynamicParams.n()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = dynamicParams.z1().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp_0 = element.s1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.t1();
      var tmp$ret$2 = decodeURIComponent(value);
      destination.a2(tmp_0, tmp$ret$2);
    }
    tmp.v30_1 = destination;
    this.w30_1 = substringAfterLast(this.u30_1.d31_1, _Char___init__impl__6a9atx(47));
    this.x30_1 = this.u30_1.d31_1;
    this.y30_1 = plus(this.u30_1.e31_1, dynamicParams);
    this.z30_1 = this.u30_1.e31_1;
    this.a31_1 = this.u30_1.f31_1;
  }
  protoOf(RouteInfo).g31 = function () {
    return this.u30_1.toString();
  };
  protoOf(RouteInfo).toString = function () {
    return this.g31();
  };
  protoOf(RouteInfo).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof RouteInfo) {
      tmp_1 = other.x30_1 === this.x30_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.y30_1, this.y30_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.a31_1 == this.a31_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RouteInfo).hashCode = function () {
    var result = getStringHashCode(this.x30_1);
    result = imul(31, result) + hashCode(this.y30_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.a31_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RouteInfo).h31 = function (path, queryParams, fragment, dynamicParams) {
    return new RouteInfo(Route_init_$Create$(path, queryParams, fragment), dynamicParams);
  };
  protoOf(RouteInfo).i31 = function (path, queryParams, fragment, dynamicParams, $super) {
    path = path === VOID ? this.u30_1.d31_1 : path;
    queryParams = queryParams === VOID ? this.u30_1.e31_1 : queryParams;
    fragment = fragment === VOID ? this.u30_1.f31_1 : fragment;
    dynamicParams = dynamicParams === VOID ? this.v30_1 : dynamicParams;
    return $super === VOID ? this.h31(path, queryParams, fragment, dynamicParams) : $super.h31.call(this, path, queryParams, fragment, dynamicParams);
  };
  function com_varabyte_kobweb_core_PageContext$stableprop_getter() {
    return com_varabyte_kobweb_core_PageContext$stable;
  }
  function rememberPageContext($composer, $changed) {
    _init_properties_PageContext_kt__u2hiem();
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_PageContextLocal();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.v13(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp;
    if (tmp0 == null) {
      var message = 'PageContext is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0;
    }
    return tmp;
  }
  function PageContextLocal$lambda() {
    _init_properties_PageContext_kt__u2hiem();
    return null;
  }
  var properties_initialized_PageContext_kt_8ruj8w;
  function _init_properties_PageContext_kt__u2hiem() {
    if (!properties_initialized_PageContext_kt_8ruj8w) {
      properties_initialized_PageContext_kt_8ruj8w = true;
      PageContextLocal = staticCompositionLocalOf(PageContextLocal$lambda);
      com_varabyte_kobweb_core_RouteInfo$stable = 8;
      com_varabyte_kobweb_core_PageContext$stable = 8;
    }
  }
  var com_varabyte_kobweb_core_data_MutableData$stable;
  function MutableData() {
    this.j31_1 = mutableStateMapOf();
  }
  protoOf(MutableData).k31 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.j31_1.a2(key, value);
  };
  protoOf(MutableData).l31 = function (key) {
    var tmp = this.j31_1.w1(key);
    return !(tmp == null) ? tmp : null;
  };
  protoOf(MutableData).f2 = function () {
    this.j31_1.f2();
  };
  function getValue(_this__u8e3s4, key) {
    return ensureNotNull(_this__u8e3s4.l31(key));
  }
  var com_varabyte_kobweb_core_init_InitKobwebContext$stable;
  function initKobweb(router, init) {
    var config = new MutableKobwebConfig();
    init(new InitKobwebContext(config, router));
    set_MutableKobwebConfigInstance(config);
  }
  function InitKobwebContext(config, router) {
    this.m31_1 = config;
    this.n31_1 = router;
  }
  var com_varabyte_kobweb_core_init_InitRouteContext$stable;
  function InitRouteContext(route, data) {
    this.o31_1 = route;
    this.p31_1 = data;
  }
  function set_MutableKobwebConfigInstance(_set____db54di) {
    _init_properties_KobwebConfig_kt__rz30d4();
    MutableKobwebConfigInstance = _set____db54di;
  }
  function get_MutableKobwebConfigInstance() {
    _init_properties_KobwebConfig_kt__rz30d4();
    return MutableKobwebConfigInstance;
  }
  var MutableKobwebConfigInstance;
  var com_varabyte_kobweb_core_init_MutableOpenLinkStrategies$stable;
  var com_varabyte_kobweb_core_init_MutableKobwebConfig$stable;
  function MutableKobwebConfig() {
    this.q31_1 = new MutableOpenLinkStrategies();
  }
  protoOf(MutableKobwebConfig).r31 = function () {
    return this.q31_1;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).s31 = function () {
    return get_MutableKobwebConfigInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_1() {
    return Companion_instance_3;
  }
  function MutableOpenLinkStrategies(internal, external) {
    internal = internal === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : internal;
    external = external === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : external;
    this.t31_1 = internal;
    this.u31_1 = external;
  }
  protoOf(MutableOpenLinkStrategies).v31 = function () {
    return this.t31_1;
  };
  protoOf(MutableOpenLinkStrategies).w31 = function () {
    return this.u31_1;
  };
  var properties_initialized_KobwebConfig_kt_yaxikm;
  function _init_properties_KobwebConfig_kt__rz30d4() {
    if (!properties_initialized_KobwebConfig_kt_yaxikm) {
      properties_initialized_KobwebConfig_kt_yaxikm = true;
      MutableKobwebConfigInstance = new MutableKobwebConfig();
      com_varabyte_kobweb_core_init_MutableOpenLinkStrategies$stable = 8;
      com_varabyte_kobweb_core_init_MutableKobwebConfig$stable = 8;
    }
  }
  function Anchor(href, attrs, openInternalLinksStrategy, openExternalLinksStrategy, updateHistoryMode, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var updateHistoryMode_0 = {_v: updateHistoryMode};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1682374411);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(href) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = openInternalLinksStrategy_0._v;
      if (tmp_0.r13(tmpEnum == null ? -1 : tmpEnum.l2_1)) {
        tmp = 256;
      } else {
        tmp = 128;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0) {
      var tmp_1;
      var tmp_2 = $composer_0;
      var tmpEnum_0 = openExternalLinksStrategy_0._v;
      if (tmp_2.r13(tmpEnum_0 == null ? -1 : tmpEnum_0.l2_1)) {
        tmp_1 = 2048;
      } else {
        tmp_1 = 1024;
      }
      $dirty = $dirty | tmp_1;
    }
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0) {
      var tmp_3;
      var tmp_4 = $composer_0;
      var tmpEnum_1 = updateHistoryMode_0._v;
      if (tmp_4.r13(tmpEnum_1 == null ? -1 : tmpEnum_1.l2_1)) {
        tmp_3 = 16384;
      } else {
        tmp_3 = 8192;
      }
      $dirty = $dirty | tmp_3;
    }
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 131072 : 65536);
    if ($composer_0.u13(!(($dirty & 74899) === 74898), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        updateHistoryMode_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        content_0._v = null;
      }
      var ctx = rememberPageContext($composer_0, 0);
      var tmp_5 = Companion_instance_4.x31(href);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!(!!(!!(($dirty & 112) === 32 | ($dirty & 896) === 256) | ($dirty & 7168) === 2048) | $composer_0.s13(ctx)) | ($dirty & 14) === 4) | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      var it = tmp0.n13();
      var tmp_6;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = Anchor$lambda(attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, ctx, href, updateHistoryMode_0);
        tmp0.o13(value);
        tmp_6 = value;
      } else {
        tmp_6 = it;
      }
      var tmp_7 = tmp_6;
      var tmp$ret$3 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      A(tmp_5, tmp$ret$3, content_0._v, $composer_0, 896 & $dirty >> 9, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Anchor$lambda_0(href, attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, updateHistoryMode_0, content_0, $changed, $default));
    }
  }
  function Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode) {
    return function (evt) {
      var tmp0_elvis_lhs = $openInternalLinksStrategy._v;
      var openInternalLinksStrategy = tmp0_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_instance_3.s31().r31().v31()) : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = $openExternalLinksStrategy._v;
      var openExternalLinksStrategy = tmp1_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_instance_3.s31().r31().w31()) : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = $updateHistoryMode._v;
      $ctx.p30_1.j32($href, tmp2_elvis_lhs == null ? UpdateHistoryMode_PUSH_getInstance() : tmp2_elvis_lhs, openInternalLinksStrategy, openExternalLinksStrategy);
      evt.t2q();
      evt.u2q();
      return Unit_instance;
    };
  }
  function Anchor$lambda($attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode) {
    return function ($this$A) {
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$A);
      }
      $this$A.h2m(Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode));
      return Unit_instance;
    };
  }
  function Anchor$lambda_0($href, $attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $updateHistoryMode, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Anchor($href, $attrs._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $updateHistoryMode._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_navigation_BasePathImpl$stable;
  function Companion_1() {
  }
  protoOf(Companion_1).k32 = function (value) {
    Companion_instance_5.m32(new BasePathImpl(value));
  };
  protoOf(Companion_1).t1 = function () {
    return Companion_instance_5.o32().n32_1;
  };
  protoOf(Companion_1).x31 = function (path) {
    return Companion_instance_5.o32().x31(path);
  };
  var Companion_instance_4;
  function Companion_getInstance_2() {
    return Companion_instance_4;
  }
  function Companion_2() {
    this.l32_1 = null;
  }
  protoOf(Companion_2).m32 = function (value) {
    // Inline function 'kotlin.check' call
    if (!(this.l32_1 == null)) {
      var message = 'Cannot overwrite base path once set';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.l32_1 = value;
  };
  protoOf(Companion_2).p32 = function () {
    if (this.l32_1 == null) {
      this.l32_1 = new BasePathImpl('');
    }
    return this.l32_1;
  };
  protoOf(Companion_2).o32 = function () {
    return ensureNotNull(this.p32());
  };
  var Companion_instance_5;
  function Companion_getInstance_3() {
    return Companion_instance_5;
  }
  function BasePathImpl(value) {
    var tmp = this;
    // Inline function 'kotlin.takeIf' call
    var tmp_0;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp_0 = value;
    } else {
      tmp_0 = null;
    }
    var tmp0_safe_receiver = tmp_0;
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = startsWith(tmp0_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp0_safe_receiver : '/' + tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_2 = endsWith(tmp1_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp1_safe_receiver : tmp1_safe_receiver + '/';
    }
    var tmp2_elvis_lhs = tmp_2;
    tmp.n32_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  protoOf(BasePathImpl).x31 = function (path) {
    if (isBlank(this.n32_1))
      return path;
    if (!startsWith_0(path, '/'))
      return path;
    return dropLast(this.n32_1, 1) + path;
  };
  protoOf(BasePathImpl).toString = function () {
    return this.n32_1;
  };
  function remove(_this__u8e3s4, path) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.t1();
    if (charSequenceLength(this_0) > 0) {
      tmp = removePrefix(path, dropLast(_this__u8e3s4.t1(), 1));
    } else {
      tmp = path;
    }
    return tmp;
  }
  function prependIf(_this__u8e3s4, condition, path) {
    return condition ? _this__u8e3s4.x31(path) : path;
  }
  var OpenLinkStrategy_IN_PLACE_instance;
  var OpenLinkStrategy_IN_NEW_TAB_instance;
  var OpenLinkStrategy_entriesInitialized;
  function OpenLinkStrategy_initEntries() {
    if (OpenLinkStrategy_entriesInitialized)
      return Unit_instance;
    OpenLinkStrategy_entriesInitialized = true;
    OpenLinkStrategy_IN_PLACE_instance = new OpenLinkStrategy('IN_PLACE', 0);
    OpenLinkStrategy_IN_NEW_TAB_instance = new OpenLinkStrategy('IN_NEW_TAB', 1);
  }
  function OpenLinkStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function open(_this__u8e3s4, href, strategy) {
    switch (strategy.l2_1) {
      case 0:
        _this__u8e3s4.open(href, '_self');
        break;
      case 1:
        _this__u8e3s4.open(href, '_blank');
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
  }
  function toOpenLinkStrategy(_this__u8e3s4, default_0) {
    default_0 = default_0 === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : default_0;
    return _this__u8e3s4.c2s_1 || _this__u8e3s4.o2s_1 ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : default_0;
  }
  function OpenLinkStrategy_IN_PLACE_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_PLACE_instance;
  }
  function OpenLinkStrategy_IN_NEW_TAB_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_NEW_TAB_instance;
  }
  var com_varabyte_kobweb_navigation_PageData$stable;
  function PageData(pageMethod, routeInfo) {
    this.q32_1 = pageMethod;
    this.r32_1 = routeInfo;
  }
  var com_varabyte_kobweb_navigation_RouteException$stable;
  var com_varabyte_kobweb_navigation_Route$stable;
  function Route_init_$Init$(path, queryParams, fragment, $this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.m7(path);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!queryParams.l()) {
      this_0.n7(_Char___init__impl__6a9atx(63));
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(queryParams.n());
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = queryParams.z1().i();
      while (_iterator__ex2g4s.j()) {
        var item = _iterator__ex2g4s.k();
        // Inline function 'kotlin.collections.component1' call
        var key = item.s1();
        // Inline function 'kotlin.collections.component2' call
        var value = item.t1();
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        this_1.m7(key);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(value) > 0) {
          this_1.n7(_Char___init__impl__6a9atx(61));
          this_1.m7(value);
        }
        var tmp$ret$8 = this_1.toString();
        destination.h(tmp$ret$8);
      }
      this_0.m7(joinToString(destination, '&'));
    }
    if (!(fragment == null)) {
      this_0.n7(_Char___init__impl__6a9atx(35));
      this_0.m7(fragment);
    }
    var tmp$ret$13 = this_0.toString();
    Route.call($this, tmp$ret$13);
    return $this;
  }
  function Route_init_$Create$(path, queryParams, fragment) {
    return Route_init_$Init$(path, queryParams, fragment, objectCreate(protoOf(Route)));
  }
  function Companion_3() {
  }
  protoOf(Companion_3).s32 = function (pathQueryAndFragment) {
    var pathPart = substringBefore(substringBefore(pathQueryAndFragment, _Char___init__impl__6a9atx(63)), _Char___init__impl__6a9atx(35));
    return to(pathPart, removePrefix(pathQueryAndFragment, pathPart));
  };
  protoOf(Companion_3).t32 = function (url) {
    var tmp;
    if (!startsWith_0(url, '//')) {
      // Inline function 'kotlin.let' call
      var splitResult = split(url, ['://'], VOID, 2);
      tmp = splitResult.n() === 1 ? to('', splitResult.m(0)) : to(splitResult.m(0) + '://', trimStart(splitResult.m(1), charArrayOf([_Char___init__impl__6a9atx(47)])));
    } else {
      var withoutLeadingSlashes = trimStart(url, charArrayOf([_Char___init__impl__6a9atx(47)]));
      var domain = substringBefore(withoutLeadingSlashes, _Char___init__impl__6a9atx(47));
      tmp = to('//' + domain, substringAfter(withoutLeadingSlashes, domain));
    }
    var _destruct__k2r9zo = tmp;
    var prefix = _destruct__k2r9zo.le();
    var rest = _destruct__k2r9zo.me();
    var _destruct__k2r9zo_0 = this.s32(rest);
    var path = _destruct__k2r9zo_0.le();
    var queryAndFragment = _destruct__k2r9zo_0.me();
    // Inline function 'kotlin.text.replace' call
    return prefix + Regex_init_$Create$('//+').tb(path, '/') + queryAndFragment;
  };
  protoOf(Companion_3).u32 = function (path) {
    return !(this.f2k(path) == null);
  };
  protoOf(Companion_3).f2k = function (path) {
    var tmp;
    try {
      tmp = new Route(path);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof RouteException) {
        var _unused_var__etf5q3 = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_3).v32 = function (url) {
    var tmp0_elvis_lhs = this.f2k(removePrefix(url.href, url.origin));
    return tmp0_elvis_lhs == null ? new Route('') : tmp0_elvis_lhs;
  };
  var Companion_instance_6;
  function Companion_getInstance_4() {
    return Companion_instance_6;
  }
  function Route(pathQueryAndFragment) {
    var pathQueryAndFragment_0 = !startsWith_0(pathQueryAndFragment, '//') ? pathQueryAndFragment : 'https:' + pathQueryAndFragment;
    var tmp;
    try {
      new URL(pathQueryAndFragment_0);
      tmp = false;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_0 = true;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var isValidRoute = tmp;
    if (!isValidRoute) {
      throw new RouteException(pathQueryAndFragment_0);
    }
    this.b31_1 = Companion_instance_6.t32(pathQueryAndFragment);
    this.c31_1 = new URL(this.b31_1, 'http://unused.com');
    var isAbsolute = startsWith_0(this.b31_1, '/');
    var tmp_1 = this;
    var tmp_2;
    if (isAbsolute) {
      tmp_2 = this.c31_1.pathname;
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = drop(this.c31_1.pathname, 1);
      // Inline function 'kotlin.check' call
      if (!(first(this.c31_1.pathname) === _Char___init__impl__6a9atx(47))) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      tmp_2 = this_0;
    }
    tmp_1.d31_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.apply' call
    var this_1 = LinkedHashMap_init_$Create$_0();
    $l$block: {
      // Inline function 'kotlin.text.isEmpty' call
      var this_2 = this.c31_1.search;
      if (charSequenceLength(this_2) === 0) {
        break $l$block;
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = split_0(removePrefix(this.c31_1.search, '?'), charArrayOf([_Char___init__impl__6a9atx(38)])).i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var keyValue = split_0(element, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
        var key = keyValue.m(0);
        // Inline function 'kotlin.collections.elementAtOrNull' call
        var tmp0_safe_receiver = getOrNull(keyValue, 1);
        var tmp_4;
        if (tmp0_safe_receiver == null) {
          tmp_4 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_4 = decodeURIComponent(tmp0_safe_receiver);
        }
        var tmp1_elvis_lhs = tmp_4;
        // Inline function 'kotlin.collections.set' call
        var value = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        this_1.a2(key, value);
      }
    }
    tmp_3.e31_1 = this_1;
    var tmp_5 = this;
    // Inline function 'kotlin.takeIf' call
    var this_3 = this.c31_1.hash;
    var tmp_6;
    if (startsWith_0(this_3, '#')) {
      tmp_6 = this_3;
    } else {
      tmp_6 = null;
    }
    var tmp0_safe_receiver_0 = tmp_6;
    var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : removePrefix(tmp0_safe_receiver_0, '#');
    var tmp_7;
    if (tmp1_safe_receiver == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_7 = decodeURIComponent(tmp1_safe_receiver);
    }
    tmp_5.f31_1 = tmp_7;
  }
  protoOf(Route).w32 = function (path, queryParams, fragment) {
    return Route_init_$Create$(path, queryParams, fragment);
  };
  protoOf(Route).x32 = function (path, queryParams, fragment, $super) {
    path = path === VOID ? this.d31_1 : path;
    queryParams = queryParams === VOID ? this.e31_1 : queryParams;
    fragment = fragment === VOID ? this.f31_1 : fragment;
    return $super === VOID ? this.w32(path, queryParams, fragment) : $super.w32.call(this, path, queryParams, fragment);
  };
  protoOf(Route).toString = function () {
    return this.d31_1 + this.c31_1.search + this.c31_1.hash;
  };
  function RouteException(value) {
    Exception_init_$Init$('Failed to create a route. Routes should be valid URLs without a leading domain. Got: ' + value, this);
    captureStack(this, RouteException);
  }
  function createPageData(_this__u8e3s4, route, errorPageMethod) {
    var self_0 = _this__u8e3s4;
    var tmp0_elvis_lhs = self_0.n2u(route.d31_1, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new PageData(errorPageMethod, new RouteInfo(route, emptyMap()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolved = tmp;
    var tmp1_elvis_lhs = last(resolved).g2u_1.b2t();
    var pageMethod = tmp1_elvis_lhs == null ? errorPageMethod : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dynamicParams = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = resolved.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp_0 = element.g2u_1;
      if (tmp_0 instanceof DynamicNode) {
        var tmp2 = element.g2u_1.t1z();
        // Inline function 'kotlin.collections.set' call
        var value = element.h2u_1;
        dynamicParams.a2(tmp2, value);
      }
    }
    return new PageData(pageMethod, new RouteInfo(route.x32(toRouteString(resolved)), dynamicParams));
  }
  var com_varabyte_kobweb_navigation_RouteInterceptorScope$stable;
  var com_varabyte_kobweb_navigation_Router_RouteEntry$stable;
  var com_varabyte_kobweb_navigation_Router$stable;
  function _set_activePageMethod__f6z3vj($this, _set____db54di) {
    var tmp0 = $this.f32_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_activePageMethod_$ref_kzrggv_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('activePageMethod', 1, tmp, tmp_0, Router$_set_activePageMethod_$ref_yxu4h7_0());
    tmp0.oy(_set____db54di);
    return Unit_instance;
  }
  function _get_activePageMethod__dw5579($this) {
    var tmp0 = $this.f32_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_activePageMethod_$ref_kzrggv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('activePageMethod', 1, tmp, tmp_0, Router$_set_activePageMethod_$ref_yxu4h7());
    return tmp0.t1();
  }
  function _set_scrollRequest__vmu5bx($this, _set____db54di) {
    var tmp0 = $this.i32_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_scrollRequest_$ref_4bly9p_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('scrollRequest', 1, tmp, tmp_0, Router$_set_scrollRequest_$ref_he6y0n_0());
    tmp0.oy(_set____db54di);
    return Unit_instance;
  }
  function _get_scrollRequest__o6ie4v($this) {
    var tmp0 = $this.i32_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_scrollRequest_$ref_4bly9p();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('scrollRequest', 1, tmp, tmp_0, Router$_set_scrollRequest_$ref_he6y0n());
    return tmp0.t1();
  }
  function updatePageContext($this, _this__u8e3s4, pathQueryAndFragment) {
    if (startsWith_0(pathQueryAndFragment, '#')) {
      var routeInfo = _this__u8e3s4.r30_1.t1();
      if (!(routeInfo == null)) {
        _this__u8e3s4.r30_1.oy(routeInfo.i31(VOID, VOID, removePrefix(pathQueryAndFragment, '#')));
        return true;
      } else {
        return false;
      }
    }
    var route = Companion_instance_6.f2k(pathQueryAndFragment);
    var tmp;
    if (!(route == null)) {
      var data = createPageData($this.g32_1, route, $this.y31_1);
      var tmp0_safe_receiver = _this__u8e3s4.r30_1.t1();
      var previousRoutePath = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x30_1;
      _set_activePageMethod__f6z3vj($this, data.q32_1);
      _this__u8e3s4.s30(data.r32_1);
      if (!(previousRoutePath === route.d31_1)) {
        // Inline function 'kotlin.collections.mutableListOf' call
        var initRouteMethods = ArrayList_init_$Create$_0();
        var tmp0 = $this.d32_1;
        // Inline function 'kotlin.collections.get' call
        var key = _get_activePageMethod__dw5579($this);
        var tmp1_safe_receiver = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).w1(key);
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          initRouteMethods.h(tmp1_safe_receiver);
        }
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = $this.y32(data.q32_1).i();
        while (_iterator__ex2g4s.j()) {
          var element = _iterator__ex2g4s.k();
          var tmp0_safe_receiver_0 = $this.e32_1.w1(element);
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            initRouteMethods.h(tmp0_safe_receiver_0);
          }
        }
        $this.z31_1.f2();
        var ctx = new InitRouteContext(data.r32_1, $this.z31_1);
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = initRouteMethods.i();
        while (_iterator__ex2g4s_0.j()) {
          var element_0 = _iterator__ex2g4s_0.k();
          element_0(ctx);
        }
      }
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function normalize($this, _this__u8e3s4) {
    // Inline function 'kotlin.check' call
    if (!Companion_instance_6.u32(_this__u8e3s4)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    var hrefResolved = Companion_instance_6.v32(new URL(Companion_instance_6.t32(_this__u8e3s4), window.location.href)).toString();
    // Inline function 'kotlin.takeIf' call
    var this_0 = remove(Companion_instance_4, hrefResolved);
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var withoutPrefix = tmp0_elvis_lhs == null ? '/' : tmp0_elvis_lhs;
    var hadPrefix = !(withoutPrefix === hrefResolved);
    var tmp_0 = Companion_instance_4;
    var tmp0 = $this.h32_1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = (new Route(withoutPrefix)).toString();
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var acc = accumulator;
      var interceptor = new RouteInterceptorScope(acc);
      element(interceptor);
      accumulator = Companion_instance_6.t32(interceptor.g31());
    }
    var tmp$ret$5 = accumulator;
    return prependIf(tmp_0, hadPrefix, tmp$ret$5);
  }
  function includesHost($this, _this__u8e3s4) {
    return contains(_this__u8e3s4, '://') || startsWith_0(_this__u8e3s4, '//');
  }
  function resolvesToSameOrigin($this, _this__u8e3s4) {
    var resolvedUrl = new URL(_this__u8e3s4, window.location.href);
    return resolvedUrl.origin === window.location.origin;
  }
  function Router$_get_activePageMethod_$ref_kzrggv() {
    return function (p0) {
      return _get_activePageMethod__dw5579(p0);
    };
  }
  function Router$_set_activePageMethod_$ref_yxu4h7() {
    return function (p0, p1) {
      _set_activePageMethod__f6z3vj(p0, p1);
      return Unit_instance;
    };
  }
  function Router$_get_activePageMethod_$ref_kzrggv_0() {
    return function (p0) {
      return _get_activePageMethod__dw5579(p0);
    };
  }
  function Router$_set_activePageMethod_$ref_yxu4h7_0() {
    return function (p0, p1) {
      _set_activePageMethod__f6z3vj(p0, p1);
      return Unit_instance;
    };
  }
  function Router$_get_scrollRequest_$ref_4bly9p() {
    return function (p0) {
      return _get_scrollRequest__o6ie4v(p0);
    };
  }
  function Router$_set_scrollRequest_$ref_he6y0n() {
    return function (p0, p1) {
      _set_scrollRequest__vmu5bx(p0, p1);
      return Unit_instance;
    };
  }
  function Router$_get_scrollRequest_$ref_4bly9p_0() {
    return function (p0) {
      return _get_scrollRequest__o6ie4v(p0);
    };
  }
  function Router$_set_scrollRequest_$ref_he6y0n_0() {
    return function (p0, p1) {
      _set_scrollRequest__vmu5bx(p0, p1);
      return Unit_instance;
    };
  }
  function Router$lambda(this$0) {
    return function (it) {
      var tmp = Companion_instance_2.n30();
      // Inline function 'kotlin.let' call
      var it_0 = ensureNotNull(document.location);
      var tmp$ret$1 = removePrefix(it_0.href, it_0.origin);
      return updatePageContext(this$0, tmp, tmp$ret$1);
    };
  }
  function Router$renderActivePage$$inlined$run$2$2$2$1() {
  }
  protoOf(Router$renderActivePage$$inlined$run$2$2$2$1).ts = function () {
  };
  function Router$renderActivePage$lambda$lambda$lambda(this$0) {
    return function ($this$DisposableEffect) {
      var tmp0_safe_receiver = _get_scrollRequest__o6ie4v(this$0);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
      _set_scrollRequest__vmu5bx(this$0, null);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Router$renderActivePage$$inlined$run$2$2$2$1();
    };
  }
  function Router$renderActivePage$lambda$lambda$lambda_0($pageMethod) {
    return function (ctx, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y12(850244467, Companion_instance_2.n30().t30().x30_1);
      $pageMethod(ctx, $composer_0, 14 & $changed);
      $composer_0.z12();
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Router$renderActivePage$lambda$lambda$lambda_1($layout, $accum) {
    return function (ctx, $composer, $changed) {
      var $composer_0 = $composer;
      $layout(ctx, $accum, $composer_0, 14 & $changed);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Router$renderActivePage$lambda$lambda(this$0, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = _get_scrollRequest__o6ie4v(this$0);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.s13(this$0);
        // Inline function 'kotlin.let' call
        var it = $composer_0.n13();
        var tmp_1;
        if (invalid || it === Companion_getInstance().p12_1) {
          var value = Router$renderActivePage$lambda$lambda$lambda(this$0);
          $composer_0.o13(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp$ret$3 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        DisposableEffect(tmp_0, tmp$ret$3, $composer_0, 0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-973415845, true, Router$renderActivePage$lambda$lambda$lambda_0($pageMethod), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.p13(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.n13();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance().p12_1) {
          var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.o13(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        var keyedPageMethod = tmp0;
        $composer_0.w12(1960057240);
        // Inline function 'kotlin.collections.foldRight' call
        var this_0 = asReversed(this$0.y32($pageMethod));
        var accumulator = keyedPageMethod;
        if (!this_0.l()) {
          var iterator = this_0.s(this_0.n());
          while (iterator.u3()) {
            var tmp0_0 = iterator.w3();
            var accum = accumulator;
            // Inline function 'kotlin.run' call
            var dispatchReceiver_0 = rememberComposableLambda(1052452521, true, Router$renderActivePage$lambda$lambda$lambda_1(tmp0_0, accum), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_2 = $composer_0;
            sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_1 = $composer_2.p13(dispatchReceiver_0);
            // Inline function 'kotlin.let' call
            var it_1 = $composer_2.n13();
            var tmp_5;
            if (invalid_1 || it_1 === Companion_getInstance().p12_1) {
              var value_1 = ComposableLambda$invoke$ref_0(dispatchReceiver_0);
              $composer_2.o13(value_1);
              tmp_5 = value_1;
            } else {
              tmp_5 = it_1;
            }
            var tmp_6 = tmp_5;
            var tmp0_1 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
            sourceInformationMarkerEnd($composer_2);
            accumulator = tmp0_1;
          }
        }
        var tmp0_group = accumulator;
        $composer_0.x12();
        tmp = tmp0_group(Companion_instance_2.n30(), $composer_0, 0);
      } else {
        $composer_0.h13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function Router$renderActivePage$lambda($pageWrapper, this$0, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = $pageWrapper._v;
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1343210329, true, Router$renderActivePage$lambda$lambda(this$0, $pageMethod), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.p13(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.n13();
        var tmp_1;
        if (invalid || it === Companion_getInstance().p12_1) {
          var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
          $composer_1.o13(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        tmp = tmp_0(tmp0, $composer_0, 6);
      } else {
        $composer_0.h13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function Router$renderActivePage$lambda_0($tmp0_rcvr, $pageWrapper, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.d33($pageWrapper._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Router$tryRoutingTo$lambda() {
    var tmp = window;
    // Inline function 'org.w3c.dom.INSTANT' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'org.w3c.dom.ScrollToOptions' call
    var o = {};
    o['left'] = 0.0;
    o['top'] = 0.0;
    o['behavior'] = 'instant';
    tmp.scroll(o);
    return Unit_instance;
  }
  function Router$tryRoutingTo$lambda_0($url) {
    return function () {
      var tmp0_safe_receiver = document.getElementById(substringAfter_0($url, _Char___init__impl__6a9atx(35)));
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.scrollIntoView();
      }
      return Unit_instance;
    };
  }
  function Router() {
    this.y31_1 = ComposableSingletons$RouterKt_getInstance().f33_1;
    this.z31_1 = new MutableData();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.apply' call
    var this_0 = LinkedHashMap_init_$Create$_0();
    var tmp2 = 'com.varabyte.kobweb.core.layout.NoLayout';
    // Inline function 'kotlin.collections.set' call
    var value = ComposableSingletons$RouterKt_getInstance().g33_1;
    this_0.a2(tmp2, value);
    tmp.a32_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.apply' call
    var this_1 = LinkedHashMap_init_$Create$_0();
    var tmp2_0 = this.y31_1;
    // Inline function 'kotlin.collections.set' call
    var value_0 = 'com.varabyte.kobweb.core.layout.NoLayout';
    this_1.a2(tmp2_0, value_0);
    tmp_0.b32_1 = this_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.c32_1 = LinkedHashMap_init_$Create$_0();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.d32_1 = LinkedHashMap_init_$Create$_0();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.e32_1 = LinkedHashMap_init_$Create$_0();
    this.f32_1 = mutableStateOf(null);
    this.g32_1 = new RouteTree();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_4.h32_1 = ArrayList_init_$Create$_0();
    this.i32_1 = mutableStateOf(null);
    Companion_instance_2.o30(this, this.z31_1);
    var tmp_5 = window;
    tmp_5.onpopstate = Router$lambda(this);
  }
  protoOf(Router).y32 = function (_this__u8e3s4) {
    var tmp0_safe_receiver = this.b32_1.w1(_this__u8e3s4);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.a32_1.w1(tmp0_safe_receiver);
    }
    var layoutMethod = tmp;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    while (!(layoutMethod == null)) {
      this_0.h(layoutMethod);
      var tmp0_safe_receiver_0 = this.c32_1.w1(layoutMethod);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = this.a32_1.w1(tmp0_safe_receiver_0);
      }
      layoutMethod = tmp_0;
    }
    return this_0.s4();
  };
  protoOf(Router).d33 = function (pageWrapper, $composer, $changed, $default) {
    var pageWrapper_0 = {_v: pageWrapper};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(137063404);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(pageWrapper_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(this) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        pageWrapper_0._v = ComposableSingletons$RouterKt_getInstance().h33_1;
      }
      var tmp0_elvis_lhs = _get_activePageMethod__dw5579(this);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var message = "Make sure you have visited a page (via `navigateTo` or `tryRoutingTo`) at least once before calling 'renderActivePage'";
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var pageMethod = tmp;
      var tmp_0 = get_PageContextLocal().u1n(Companion_instance_2.n30());
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(248233772, true, Router$renderActivePage$lambda(pageWrapper_0, this, pageMethod), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.n13();
      var tmp_1;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.o13(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      CompositionLocalProvider(tmp_0, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
    } else {
      $composer_0.h13();
    }
    var tmp1_safe_receiver = $composer_0.d13();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.z1n(Router$renderActivePage$lambda_0(this, pageWrapper_0, $changed, $default));
    }
  };
  protoOf(Router).i33 = function (layoutId, parentLayoutId, initRouteMethod, layoutMethod) {
    // Inline function 'kotlin.collections.set' call
    this.a32_1.a2(layoutId, layoutMethod);
    if (parentLayoutId == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.c32_1.a2(layoutMethod, parentLayoutId);
    }
    if (initRouteMethod == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.e32_1.a2(layoutMethod, initRouteMethod);
    }
  };
  protoOf(Router).j33 = function (layoutId, parentLayoutId, initRouteMethod, layoutMethod, $super) {
    parentLayoutId = parentLayoutId === VOID ? null : parentLayoutId;
    initRouteMethod = initRouteMethod === VOID ? null : initRouteMethod;
    var tmp;
    if ($super === VOID) {
      this.i33(layoutId, parentLayoutId, initRouteMethod, layoutMethod);
      tmp = Unit_instance;
    } else {
      tmp = $super.i33.call(this, layoutId, parentLayoutId, initRouteMethod, layoutMethod);
    }
    return tmp;
  };
  protoOf(Router).k33 = function (route, layoutId, initRouteMethod, pageMethod) {
    // Inline function 'kotlin.require' call
    if (!(Companion_instance_6.u32(route) && startsWith(route, _Char___init__impl__6a9atx(47)))) {
      var message = 'Registration only allowed for internal, rooted routes, e.g. /example/path. Got: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!this.g32_1.p2u(Companion_instance_4.x31(route), pageMethod)) {
      var message_0 = 'Registration failure. Path is already registered: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (layoutId == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.b32_1.a2(pageMethod, layoutId);
    }
    if (initRouteMethod == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.d32_1.a2(pageMethod, initRouteMethod);
    }
  };
  protoOf(Router).l33 = function (route, layoutId, initRouteMethod, pageMethod, $super) {
    layoutId = layoutId === VOID ? null : layoutId;
    initRouteMethod = initRouteMethod === VOID ? null : initRouteMethod;
    var tmp;
    if ($super === VOID) {
      this.k33(route, layoutId, initRouteMethod, pageMethod);
      tmp = Unit_instance;
    } else {
      tmp = $super.k33.call(this, route, layoutId, initRouteMethod, pageMethod);
    }
    return tmp;
  };
  protoOf(Router).m33 = function (interceptor) {
    this.h32_1.h(interceptor);
  };
  protoOf(Router).n33 = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy, routeToErrorPageOnFail) {
    if (includesHost(this, pathQueryAndFragment))
      return false;
    var pathQueryAndFragment_0 = Companion_instance_4.x31(pathQueryAndFragment);
    if (Companion_instance_6.u32(pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = normalize(this, pathQueryAndFragment_0);
      // Inline function 'kotlin.run' call
      var _destruct__k2r9zo = Companion_instance_6.s32(pathQueryAndFragment_0);
      var pathPart = _destruct__k2r9zo.le();
      var queryAndFragmentPart = _destruct__k2r9zo.me();
      if (!(pathPart === '/')) {
        if (!this.g32_1.o2u(pathPart)) {
          if (endsWith(pathPart, _Char___init__impl__6a9atx(47))) {
            var withoutSlash = removeSuffix(pathPart, '/');
            if (this.g32_1.o2u(withoutSlash)) {
              pathQueryAndFragment_0 = withoutSlash + queryAndFragmentPart;
            }
          } else {
            var withSlash = pathPart + '/';
            if (this.g32_1.o2u(withSlash)) {
              pathQueryAndFragment_0 = withSlash + queryAndFragmentPart;
            }
          }
        }
      }
      if (!routeToErrorPageOnFail) {
        var pathPart_0 = Companion_instance_6.s32(pathQueryAndFragment_0).le();
        if (!this.g32_1.o2u(pathPart_0)) {
          return false;
        }
      }
    }
    if (!openLinkStrategy.equals(OpenLinkStrategy_IN_PLACE_getInstance())) {
      open(window, pathQueryAndFragment_0, openLinkStrategy);
      return true;
    }
    var tmp;
    if (updatePageContext(this, Companion_instance_2.n30(), pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = Companion_instance_2.n30().t30().x30_1 + Companion_instance_6.s32(pathQueryAndFragment_0).ke_1;
      // Inline function 'kotlin.let' call
      var url = window.location.origin + pathQueryAndFragment_0;
      var onNewPage = !(window.location.pathname === Companion_instance_6.v32(new URL(url)).d31_1);
      if (!(window.location.href === url)) {
        switch (updateHistoryMode.l2_1) {
          case 0:
            window.history.pushState(window.history.state, '', url);
            break;
          case 1:
            window.history.replaceState(window.history.state, '', url);
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        if (onNewPage) {
          _set_scrollRequest__vmu5bx(this, Router$tryRoutingTo$lambda);
        }
      }
      if (contains_0(url, _Char___init__impl__6a9atx(35))) {
        _set_scrollRequest__vmu5bx(this, Router$tryRoutingTo$lambda_0(url));
      }
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Router).o33 = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy, routeToErrorPageOnFail, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openLinkStrategy = openLinkStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openLinkStrategy;
    routeToErrorPageOnFail = routeToErrorPageOnFail === VOID ? true : routeToErrorPageOnFail;
    return $super === VOID ? this.n33(pathQueryAndFragment, updateHistoryMode, openLinkStrategy, routeToErrorPageOnFail) : $super.n33.call(this, pathQueryAndFragment, updateHistoryMode, openLinkStrategy, routeToErrorPageOnFail);
  };
  protoOf(Router).j32 = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy) {
    if (!this.n33(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, false)) {
      var tmp = window;
      var tmp_0 = Companion_instance_6.t32(pathQueryAndFragment);
      var tmp_1;
      if (resolvesToSameOrigin(this, pathQueryAndFragment)) {
        tmp_1 = openInternalLinksStrategy;
      } else {
        tmp_1 = openExternalLinksStrategy;
      }
      open(tmp, tmp_0, tmp_1);
    }
  };
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$RouterKt$lambda$215212537$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Page Not Found', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$RouterKt$lambda$_1582477545$lambda_kdntrc(ctx, $composer, $changed) {
    var $composer_0 = $composer;
    DefaultErrorPage($composer_0, 0);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0, p1, p2) {
      p0.b2a(_this__u8e3s4, p0_0, p1, p2);
      return Unit_instance;
    };
  }
  function ComposableSingletons$RouterKt$lambda$_1070949088$lambda_malff6(ctx, content, $composer, $changed) {
    var $composer_0 = $composer;
    content(ctx, $composer_0, 14 & $changed | 112 & $changed);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$RouterKt$lambda$_149473399$lambda_vw12th(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(it) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      it($composer_0, 14 & $dirty);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RouterKt() {
    ComposableSingletons$RouterKt_instance = this;
    var tmp = this;
    tmp.e33_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(215212537, false, ComposableSingletons$RouterKt$lambda$215212537$lambda));
    var tmp_0 = this;
    tmp_0.f33_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-1582477545, false, ComposableSingletons$RouterKt$lambda$_1582477545$lambda_kdntrc));
    var tmp_1 = this;
    tmp_1.g33_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1070949088, false, ComposableSingletons$RouterKt$lambda$_1070949088$lambda_malff6));
    var tmp_2 = this;
    tmp_2.h33_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-149473399, false, ComposableSingletons$RouterKt$lambda$_149473399$lambda_vw12th));
  }
  var ComposableSingletons$RouterKt_instance;
  function ComposableSingletons$RouterKt_getInstance() {
    if (ComposableSingletons$RouterKt_instance == null)
      new ComposableSingletons$RouterKt();
    return ComposableSingletons$RouterKt_instance;
  }
  function RouteInterceptorScope(pathQueryAndFragment) {
    this.z32_1 = new Route(pathQueryAndFragment);
    this.a33_1 = this.z32_1.d31_1;
    this.b33_1 = toMutableMap(this.z32_1.e31_1);
    this.c33_1 = this.z32_1.f31_1;
  }
  protoOf(RouteInterceptorScope).p33 = function (value) {
    this.a33_1 = startsWith(value, _Char___init__impl__6a9atx(47)) ? value : '/' + value;
  };
  protoOf(RouteInterceptorScope).g31 = function () {
    return Route_init_$Create$(this.a33_1, this.b33_1, this.c33_1).toString();
  };
  var UpdateHistoryMode_PUSH_instance;
  var UpdateHistoryMode_REPLACE_instance;
  var UpdateHistoryMode_entriesInitialized;
  function UpdateHistoryMode_initEntries() {
    if (UpdateHistoryMode_entriesInitialized)
      return Unit_instance;
    UpdateHistoryMode_entriesInitialized = true;
    UpdateHistoryMode_PUSH_instance = new UpdateHistoryMode('PUSH', 0);
    UpdateHistoryMode_REPLACE_instance = new UpdateHistoryMode('REPLACE', 1);
  }
  function UpdateHistoryMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DefaultErrorPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1831390232);
    if ($composer_0.u13(!($changed === 0), $changed & 1)) {
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = DefaultErrorPage$lambda;
        this_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      Div(tmp$ret$3, ComposableSingletons$RouterKt_getInstance().e33_1, $composer_0, 54, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(DefaultErrorPage$lambda_0($changed));
    }
  }
  function com_varabyte_kobweb_navigation_Router$stableprop_getter() {
    return com_varabyte_kobweb_navigation_Router$stable;
  }
  function DefaultErrorPage$lambda($this$Div) {
    $this$Div.z2l(DefaultErrorPage$lambda$lambda);
    return Unit_instance;
  }
  function DefaultErrorPage$lambda$lambda($this$style) {
    width($this$style, get_percent(100));
    height($this$style, get_vh(100));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    alignItems($this$style, Companion_instance_0.w2u());
    justifyContent($this$style, Companion_instance_1.w2u());
    return Unit_instance;
  }
  function DefaultErrorPage$lambda_0($$changed) {
    return function ($composer, $force) {
      DefaultErrorPage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function UpdateHistoryMode_PUSH_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_PUSH_instance;
  }
  function UpdateHistoryMode_REPLACE_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_REPLACE_instance;
  }
  var com_varabyte_kobweb_streams_ApiStreamListener_ConnectedContext$stable;
  var com_varabyte_kobweb_streams_ApiStreamListener_TextReceivedContext$stable;
  var com_varabyte_kobweb_streams_ApiStreamListener_DisconnectedContext$stable;
  var com_varabyte_kobweb_streams_ApiStream_WebSocketChannel$stable;
  var com_varabyte_kobweb_streams_ApiStream$stable;
  //region block: init
  com_varabyte_kobweb_core_AppGlobals$stable = 8;
  AppGlobals_instance = new AppGlobals();
  Companion_instance_2 = new Companion();
  com_varabyte_kobweb_core_data_MutableData$stable = 0;
  com_varabyte_kobweb_core_init_InitKobwebContext$stable = 8;
  com_varabyte_kobweb_core_init_InitRouteContext$stable = 8;
  Companion_instance_3 = new Companion_0();
  com_varabyte_kobweb_navigation_BasePathImpl$stable = 0;
  Companion_instance_4 = new Companion_1();
  Companion_instance_5 = new Companion_2();
  com_varabyte_kobweb_navigation_PageData$stable = 8;
  com_varabyte_kobweb_navigation_RouteException$stable = 8;
  com_varabyte_kobweb_navigation_Route$stable = 8;
  Companion_instance_6 = new Companion_3();
  com_varabyte_kobweb_navigation_RouteInterceptorScope$stable = 8;
  com_varabyte_kobweb_navigation_Router_RouteEntry$stable = 0;
  com_varabyte_kobweb_navigation_Router$stable = 8;
  com_varabyte_kobweb_streams_ApiStreamListener_ConnectedContext$stable = 8;
  com_varabyte_kobweb_streams_ApiStreamListener_TextReceivedContext$stable = 8;
  com_varabyte_kobweb_streams_ApiStreamListener_DisconnectedContext$stable = 8;
  com_varabyte_kobweb_streams_ApiStream_WebSocketChannel$stable = 8;
  com_varabyte_kobweb_streams_ApiStream$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = getValue;
  _.$_$.b = initKobweb;
  _.$_$.c = KobwebApp;
  _.$_$.d = com_varabyte_kobweb_core_PageContext$stableprop_getter;
  _.$_$.e = rememberPageContext;
  _.$_$.f = Anchor;
  _.$_$.g = Router;
  _.$_$.h = com_varabyte_kobweb_navigation_Router$stableprop_getter;
  _.$_$.i = remove;
  _.$_$.j = UpdateHistoryMode_REPLACE_getInstance;
  _.$_$.k = AppGlobals_instance;
  _.$_$.l = Companion_instance_4;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-core.js.map
