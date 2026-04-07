(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-browser-ext.js', './kobweb-frontend-kobweb-compose.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-browser-ext.js'), require('./kobweb-frontend-kobweb-compose.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    globalThis['kobweb-frontend-silk-foundation'] = factory(typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-foundation'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['html-html-core'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kobweb-frontend-browser-ext'], globalThis['kobweb-frontend-kobweb-compose']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_browser_ext, kotlin_com_varabyte_kobweb_kobweb_compose) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.qa;
  var DisposableEffect = kotlin_androidx_compose_runtime_runtime.$_$.i;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var protoOf = kotlin_kotlin.$_$.y7;
  var initMetadataForClass = kotlin_kotlin.$_$.i7;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var org_jetbrains_compose_web_css_StyleSheet$stableprop_getter = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var GenericTag = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var VOID = kotlin_kotlin.$_$.c;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var stringPresentation = kotlin_org_jetbrains_compose_html_html_core.$_$.f4;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var CSSGroupingRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var isInterface = kotlin_kotlin.$_$.q7;
  var toString = kotlin_kotlin.$_$.z7;
  var CSSStyledRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var joinToString = kotlin_kotlin.$_$.v3;
  var DisposableEffect_0 = kotlin_androidx_compose_runtime_runtime.$_$.h;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.n7;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.q;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_androidx_compose_runtime_runtime.$_$.m;
  var CompositionLocalProvider = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.a;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.w;
  var toSet = kotlin_kotlin.$_$.b5;
  var minus = kotlin_kotlin.$_$.i4;
  var to = kotlin_kotlin.$_$.db;
  var scope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r1;
  var invokeLater = kotlin_com_varabyte_kobweb_browser_ext.$_$.b;
  var asList = kotlin_kotlin.$_$.fb;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f1;
  var asSequence = kotlin_kotlin.$_$.a3;
  var flatMap = kotlin_kotlin.$_$.p8;
  var filter = kotlin_kotlin.$_$.o8;
  var Sequence = kotlin_kotlin.$_$.n8;
  var map = kotlin_kotlin.$_$.r8;
  var toSet_0 = kotlin_kotlin.$_$.t8;
  var subtract = kotlin_kotlin.$_$.w4;
  var sorted = kotlin_kotlin.$_$.v4;
  var trimIndent = kotlin_kotlin.$_$.aa;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j7;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var KtMap = kotlin_kotlin.$_$.p2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var CssIdent = kotlin_com_varabyte_kobweb_browser_ext.$_$.a;
  var enumEntries = kotlin_kotlin.$_$.w5;
  var Enum = kotlin_kotlin.$_$.ja;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ya;
  var toList = kotlin_kotlin.$_$.x4;
  var listOfNotNull = kotlin_kotlin.$_$.c4;
  var addAll = kotlin_kotlin.$_$.w2;
  var listOf = kotlin_kotlin.$_$.d4;
  var emptyList = kotlin_kotlin.$_$.l3;
  var listOf_0 = kotlin_kotlin.$_$.e4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v;
  var charSequenceLength = kotlin_kotlin.$_$.x6;
  var mapCapacity = kotlin_kotlin.$_$.f4;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_browser_ext.$_$.d;
  var removePrefix = kotlin_kotlin.$_$.j9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var trimMargin = kotlin_kotlin.$_$.ba;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b1;
  var mutableListOf = kotlin_kotlin.$_$.j4;
  var plus = kotlin_kotlin.$_$.m4;
  var initMetadataForInterface = kotlin_kotlin.$_$.l7;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var equals = kotlin_kotlin.$_$.b7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var substringAfterLast = kotlin_kotlin.$_$.r9;
  var copyToArray = kotlin_kotlin.$_$.i3;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var toList_0 = kotlin_kotlin.$_$.y4;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v;
  var objectCreate = kotlin_kotlin.$_$.x7;
  var getStringHashCode = kotlin_kotlin.$_$.g7;
  var isBlank = kotlin_kotlin.$_$.c9;
  var first = kotlin_kotlin.$_$.b9;
  var Char = kotlin_kotlin.$_$.ha;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r2;
  var setOf = kotlin_kotlin.$_$.s4;
  var distinct = kotlin_kotlin.$_$.j3;
  var lazy = kotlin_kotlin.$_$.xa;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var hashCode = kotlin_kotlin.$_$.h7;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var GenericTag_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var CSSMediaRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var plus_0 = kotlin_kotlin.$_$.n4;
  var toMutableList = kotlin_kotlin.$_$.z4;
  var joinToString_0 = kotlin_kotlin.$_$.w3;
  var getKClass = kotlin_kotlin.$_$.h8;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var startsWith = kotlin_kotlin.$_$.q9;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var getValue = kotlin_kotlin.$_$.t3;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var KProperty0 = kotlin_kotlin.$_$.k8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.f7;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var endsWith = kotlin_kotlin.$_$.y8;
  var removeSuffix = kotlin_kotlin.$_$.k9;
  var compositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.n;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var ensureNotNull = kotlin_kotlin.$_$.wa;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ColorModeAware$$inlined$cache$2$1);
  initMetadataForClass(CustomStyle$$inlined$run$2$2$1);
  initMetadataForObject(SilkStyleSheet, 'SilkStyleSheet', VOID, StyleSheet);
  initMetadataForClass(DeferredComposablesState, 'DeferredComposablesState', DeferredComposablesState);
  initMetadataForObject(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt');
  initMetadataForClass(InitSilkContext, 'InitSilkContext');
  initMetadataForClass(MutableSilkConfig, 'MutableSilkConfig', MutableSilkConfig);
  initMetadataForCompanion(Companion);
  initMetadataForClass(StyleScope, 'StyleScope');
  initMetadataForClass(SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1, VOID, VOID, StyleScope);
  initMetadataForObject(SilkStylesheetInstance, 'SilkStylesheetInstance');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ColorModeStrategy, 'ColorModeStrategy', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CssRule, 'CssRule');
  initMetadataForClass(NonMediaCssRule, 'NonMediaCssRule', VOID, CssRule);
  initMetadataForClass(OfAttributeSelector, 'OfAttributeSelector', VOID, NonMediaCssRule);
  initMetadataForClass(OfPseudoClass, 'OfPseudoClass', VOID, NonMediaCssRule);
  initMetadataForClass(OfPseudoElement, 'OfPseudoElement', VOID, NonMediaCssRule);
  initMetadataForClass(CompositeOpen, 'CompositeOpen', VOID, NonMediaCssRule);
  initMetadataForClass(CssStyle, 'CssStyle');
  initMetadataForClass(Restricted, 'Restricted', VOID, CssStyle);
  initMetadataForClass(Base, 'Base', VOID, Restricted);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(CssStyleBaseScope, 'CssStyleBaseScope');
  initMetadataForInterface(ComponentKind, 'ComponentKind');
  initMetadataForClass(CssStyleScope, 'CssStyleScope', VOID, StyleScope);
  initMetadataForInterface(GeneralKind, 'GeneralKind');
  initMetadataForInterface(RestrictedKind, 'RestrictedKind');
  initMetadataForClass(Light, 'Light');
  initMetadataForClass(Dark, 'Dark');
  initMetadataForClass(ColorAgnostic, 'ColorAgnostic');
  initMetadataForClass(ColorAware, 'ColorAware');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SimpleCssStyle, 'SimpleCssStyle', VOID, CssStyle);
  initMetadataForClass(ImmutableCssStyle, 'ImmutableCssStyle');
  initMetadataForClass(ExtendingCssStyle, 'ExtendingCssStyle', VOID, CssStyle);
  initMetadataForClass(CssStyle$3, VOID, VOID, CssStyle);
  initMetadataForClass(CssStyle$6, VOID, VOID, CssStyle);
  initMetadataForClass(base$3, VOID, VOID, CssStyle);
  initMetadataForClass(CssStyle$7, VOID, VOID, CssStyle);
  initMetadataForClass(CssStyleVariant, 'CssStyleVariant');
  initMetadataForClass(CompositeCssStyleVariant, 'CompositeCssStyleVariant', VOID, CssStyleVariant);
  initMetadataForClass(SimpleCssStyleVariant$1, VOID, VOID, CssStyle);
  initMetadataForClass(SimpleCssStyleVariant, 'SimpleCssStyleVariant', VOID, CssStyleVariant);
  initMetadataForClass(ExtendingCssStyleVariant, 'ExtendingCssStyleVariant', VOID, SimpleCssStyleVariant);
  initMetadataForClass(addVariant$3, VOID, VOID, CssStyle);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Key, 'Key');
  initMetadataForClass(CssModifier, 'CssModifier');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Keyframes, 'Keyframes');
  initMetadataForClass(KeyframesBuilder, 'KeyframesBuilder');
  initMetadataForClass(Breakpoint, 'Breakpoint', VOID, Enum);
  initMetadataForClass(ComposableSingletons$BreakpointConditionsKt$lambda$321895361$3$$inlined$cache$2$1);
  initMetadataForObject(ComposableSingletons$BreakpointConditionsKt, 'ComposableSingletons$BreakpointConditionsKt');
  initMetadataForClass(BreakpointValues, 'BreakpointValues');
  initMetadataForClass(BreakpointUnitValue, 'BreakpointUnitValue');
  initMetadataForClass(Rem, 'Rem', VOID, BreakpointUnitValue);
  initMetadataForClass(LayerListBuilder, 'LayerListBuilder', LayerListBuilder);
  initMetadataForClass(SilkLayer, 'SilkLayer', VOID, Enum);
  initMetadataForClass(MutableSilkTheme$replaceStyle$newStyle$1, VOID, VOID, CssStyle);
  initMetadataForClass(MutableSilkTheme, 'MutableSilkTheme', MutableSilkTheme);
  initMetadataForClass(ImmutableSilkTheme, 'ImmutableSilkTheme');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(ColorMode, 'ColorMode', VOID, Enum);
  initMetadataForObject(Red, 'Red');
  initMetadataForObject(Blue, 'Blue');
  initMetadataForObject(Gray, 'Gray');
  function get(colorMode) {
    var tmp;
    switch (colorMode.l2_1) {
      case 0:
        tmp = this.w3c();
        break;
      case 1:
        tmp = this.x3c();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  initMetadataForInterface(Palettes, 'Palettes');
  initMetadataForClass(MutablePalettes, 'MutablePalettes', MutablePalettes, VOID, [Palettes]);
  function getValue_0(key) {
    return ensureNotNull(this.ec(key));
  }
  initMetadataForInterface(Palette, 'Palette');
  initMetadataForClass(EntryDelegate, 'EntryDelegate');
  initMetadataForClass(ColorGroup, 'ColorGroup');
  initMetadataForClass(MutablePalette, 'MutablePalette', MutablePalette, VOID, [Palette]);
  initMetadataForClass(RectF, 'RectF', RectF_init_$Create$);
  initMetadataForClass(Path, 'Path');
  initMetadataForClass(InsetPath, 'InsetPath', VOID, Path);
  //endregion
  function ColorModeAware(element, $composer, $changed, $default) {
    var element_0 = {_v: element};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1268289190);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.s13(element_0._v) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      $composer_0.a13();
      if (($changed & 1) === 0 || $composer_0.s12()) {
        if (!(($default & 1) === 0)) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          element_0._v = document.documentElement;
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.h13();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.b13();
      var colorMode = Companion_instance_9.j35($composer_0, 6);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.s13(element_0._v) | $composer_0.r13(colorMode.l2_1));
      // Inline function 'kotlin.let' call
      var it = tmp0.n13();
      var tmp;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = ColorModeAware$lambda(element_0, colorMode);
        tmp0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$5 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      DisposableEffect(colorMode, tmp$ret$5, $composer_0, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(ColorModeAware$lambda_0(element_0, $changed, $default));
    }
  }
  function setStyleFor(_this__u8e3s4, colorMode) {
    removeClass(_this__u8e3s4, [get_cssClass(colorMode.m35())]);
    addClass(_this__u8e3s4, [get_cssClass(colorMode)]);
  }
  function ColorModeAware$$inlined$cache$2$1($element, $colorMode) {
    this.n35_1 = $element;
    this.o35_1 = $colorMode;
  }
  protoOf(ColorModeAware$$inlined$cache$2$1).ts = function () {
    removeClass(this.n35_1._v, [get_cssClass(this.o35_1)]);
  };
  function ColorModeAware$lambda($element, $colorMode) {
    return function ($this$DisposableEffect) {
      setStyleFor($element._v, $colorMode);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new ColorModeAware$$inlined$cache$2$1($element, $colorMode);
    };
  }
  function ColorModeAware$lambda_0($element, $$changed, $$default) {
    return function ($composer, $force) {
      ColorModeAware($element._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SilkFoundationStyles(initSilk_0, $composer, $changed, $default) {
    var initSilk_1 = {_v: initSilk_0};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(67758577);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(initSilk_1._v) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        var it = this_0.n13();
        var tmp;
        if (false || it === Companion_getInstance().p12_1) {
          var value = SilkFoundationStyles$lambda;
          this_0.o13(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        initSilk_1._v = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      }
      $composer_0.y12(691485527, Unit_instance);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = tmp0.n13();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value_0 = SilkFoundationStyles$lambda_0(initSilk_1);
        tmp0.o13(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      initSilk(tmp$ret$7);
      $composer_0.z12();
      CustomStyle(SilkStyleSheet_getInstance(), $composer_0, org_jetbrains_compose_web_css_StyleSheet$stableprop_getter());
      SilkBreakpointDisplayStyles($composer_0, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(SilkFoundationStyles$lambda_1(initSilk_1, $changed, $default));
    }
  }
  function CustomStyle(styleSheet, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(205150148);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(styleSheet) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1279859299, true, CustomStyle$lambda(styleSheet), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.n13();
      var tmp;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      GenericTag('style', null, null, tmp0, $composer_0, 3078, 6);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(CustomStyle$lambda_0(styleSheet, $changed));
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = cssRules.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      addRule(_this__u8e3s4, customStringPresentation(element));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.cssRules.length;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < times);
  }
  function addRule(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function customStringPresentation(_this__u8e3s4, baseIndent, indent, delimiter) {
    baseIndent = baseIndent === VOID ? '' : baseIndent;
    indent = indent === VOID ? '    ' : indent;
    delimiter = delimiter === VOID ? '\n' : delimiter;
    var cssRuleDeclaration = _this__u8e3s4;
    // Inline function 'kotlin.collections.mutableListOf' call
    var strings = ArrayList_init_$Create$();
    strings.h(baseIndent + cssRuleDeclaration.z2m() + ' {');
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = document.createElement('div').style;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = cssRuleDeclaration.y2m().v2n().i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var name = element.le();
        var value = element.me();
        style.setProperty(name, toString(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = cssRuleDeclaration.y2m().w2n().i();
      while (_iterator__ex2g4s_0.j()) {
        var element_0 = _iterator__ex2g4s_0.k();
        var name_0 = element_0.le();
        var value_0 = element_0.me();
        style.setProperty(name_0, toString(value_0));
      }
      strings.h(baseIndent + indent + style.cssText);
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_1 = cssRuleDeclaration.j2n().i();
        while (_iterator__ex2g4s_1.j()) {
          var element_1 = _iterator__ex2g4s_1.k();
          strings.h(stringPresentation(element_1, baseIndent + indent, indent, delimiter));
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_2 = cssRuleDeclaration.b2n_1.i();
          while (_iterator__ex2g4s_2.j()) {
            var element_2 = _iterator__ex2g4s_2.k();
            strings.h(stringPresentation(element_2, baseIndent + indent, indent, delimiter));
          }
        }
      }
    }
    strings.h(baseIndent + '}');
    return joinToString(strings, delimiter);
  }
  function SilkFoundationStyles$lambda(it) {
    return Unit_instance;
  }
  function SilkFoundationStyles$lambda_0($initSilk) {
    return function (ctx) {
      $initSilk._v(ctx);
      return Unit_instance;
    };
  }
  function SilkFoundationStyles$lambda_1($initSilk, $$changed, $$default) {
    return function ($composer, $force) {
      SilkFoundationStyles($initSilk._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function CustomStyle$$inlined$run$2$2$1($cssStylesheet) {
    this.p35_1 = $cssStylesheet;
  }
  protoOf(CustomStyle$$inlined$run$2$2$1).ts = function () {
    var tmp0_safe_receiver = this.p35_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function CustomStyle$lambda$lambda($this_GenericTag, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_GenericTag.w2l($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      if (cssStylesheet == null)
        null;
      else {
        setCSSRules(cssStylesheet, $cssRules);
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new CustomStyle$$inlined$run$2$2$1(cssStylesheet);
    };
  }
  function CustomStyle$lambda($styleSheet) {
    return function ($this$GenericTag, $composer, $changed) {
      var $composer_0 = $composer;
      var cssRules = $styleSheet.k2o();
      var tmp = cssRules.n();
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.s13($this$GenericTag) | $composer_0.s13(cssRules));
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp_0;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = CustomStyle$lambda$lambda($this$GenericTag, cssRules);
        $composer_0.o13(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp$ret$3 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      DisposableEffect_0(cssRules, tmp, tmp$ret$3, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function CustomStyle$lambda_0($styleSheet, $$changed) {
    return function ($composer, $force) {
      CustomStyle($styleSheet, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
  }
  protoOf(SilkStyleSheet).n2o = function (selector, cssRule) {
    return this.m2o(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle;
  }
  var SpanTextStyle;
  function SpanTextStyle$lambda($this$CssStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_instance;
  }
  var properties_initialized_SpanText_kt_kccny1;
  function _init_properties_SpanText_kt__upt1hl() {
    if (!properties_initialized_SpanText_kt_kccny1) {
      properties_initialized_SpanText_kt_kccny1 = true;
      SpanTextStyle = CssStyle_0(VOID, SpanTextStyle$lambda);
    }
  }
  function get_LocalDeferred() {
    _init_properties_Deferred_kt__im2yn();
    return LocalDeferred;
  }
  var LocalDeferred;
  function DeferredComposablesState$forEach$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.x35($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DeferredComposablesState() {
    this.u35_1 = -1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.v35_1 = ArrayList_init_$Create$();
    this.w35_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).x35 = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(2018041013);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(render) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(this) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = this.w35_1.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        render(element, $composer_0, 112 & $dirty << 3);
      }
    } else {
      $composer_0.h13();
    }
    var tmp1_safe_receiver = $composer_0.d13();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.z1n(DeferredComposablesState$forEach$lambda(this, render, $changed));
    }
  };
  function DeferringHost(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1578083138);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(content) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      var state = new DeferredComposablesState();
      var tmp = get_LocalDeferred().u1n(state);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-2083084670, true, DeferringHost$lambda(content, state), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.n13();
      var tmp_0;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.o13(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      CompositionLocalProvider(tmp, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(DeferringHost$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$DeferredKt$lambda$431504263$lambda(entry, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp0_safe_receiver = entry.y35_1;
    if (tmp0_safe_receiver == null) {
      $composer_0.w12(106674529);
      $composer_0.x12();
    } else {
      $composer_0.w12(106674530);
      // Inline function 'kotlin.let' call
      DeferringHost(tmp0_safe_receiver, $composer_0, 0);
      $composer_0.x12();
    }
    return Unit_instance;
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.a36_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(431504263, false, ComposableSingletons$DeferredKt$lambda$431504263$lambda));
  }
  var ComposableSingletons$DeferredKt_instance;
  function ComposableSingletons$DeferredKt_getInstance() {
    if (ComposableSingletons$DeferredKt_instance == null)
      new ComposableSingletons$DeferredKt();
    return ComposableSingletons$DeferredKt_instance;
  }
  function LocalDeferred$lambda() {
    _init_properties_Deferred_kt__im2yn();
    // Inline function 'kotlin.error' call
    var message = 'Attempting to defer rendering without calling `DeferringHost`, a required pre-requisite.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function DeferringHost$lambda($content, $state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
        $content($composer_0, 0);
        $state.x35(ComposableSingletons$DeferredKt_getInstance().a36_1, $composer_0, 6);
        tmp = Unit_instance;
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
  function DeferringHost$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      DeferringHost($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Deferred_kt_1ab2bj;
  function _init_properties_Deferred_kt__im2yn() {
    if (!properties_initialized_Deferred_kt_1ab2bj) {
      properties_initialized_Deferred_kt_1ab2bj = true;
      LocalDeferred = staticCompositionLocalOf(LocalDeferred$lambda);
    }
  }
  function set_additionalSilkInitialization(_set____db54di) {
    _init_properties_InitSilk_kt__vukue3();
    additionalSilkInitialization = _set____db54di;
  }
  function get_additionalSilkInitialization() {
    _init_properties_InitSilk_kt__vukue3();
    return additionalSilkInitialization;
  }
  var additionalSilkInitialization;
  var com_varabyte_kobweb_silk_init_InitSilkContext$stable;
  function InitSilkContext(config, stylesheet, theme) {
    this.b36_1 = config;
    this.c36_1 = stylesheet;
    this.d36_1 = theme;
  }
  function initSilk(additionalInit) {
    var tmp;
    if (additionalInit === VOID) {
      tmp = initSilk$lambda;
    } else {
      tmp = additionalInit;
    }
    additionalInit = tmp;
    _init_properties_InitSilk_kt__vukue3();
    var mutableTheme = new MutableSilkTheme();
    var config = new MutableSilkConfig();
    mutableTheme.w36('silk-span-text', get_SpanTextStyle());
    var ctx = new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme);
    additionalInit(ctx);
    get_additionalSilkInitialization()(ctx);
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    get_SilkTheme().c37(SilkStylesheetInstance_getInstance());
    SilkStylesheetInstance_getInstance().g37(SilkStyleSheet_getInstance());
    get_SilkTheme().h37(SilkStyleSheet_getInstance());
    // Inline function 'kotlin.run' call
    var registeredCssLayers = toSet(SilkStylesheetInstance_getInstance().f37_1.k37());
    var finalCssLayers = getLayersWithCompat(Companion_getInstance_1().m37_1, registeredCssLayers);
    var _destruct__k2r9zo = to(finalCssLayers, minus(finalCssLayers, registeredCssLayers));
    var finalCssLayers_0 = _destruct__k2r9zo.le();
    var compatCssLayers = _destruct__k2r9zo.me();
    // Inline function 'kotlin.run' call
    $l$block: {
      if (compatCssLayers.l()) {
        break $l$block;
      }
      // Inline function 'kotlin.check' call
      if (!Companion_getInstance_1().m37_1.equals(ColorModeStrategy_BOTH_getInstance())) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      var tmp_0 = SilkStyleSheet_getInstance();
      scope(tmp_0, '*', VOID, initSilk$lambda_0(compatCssLayers));
    }
    var tmp_1 = window;
    invokeLater(tmp_1, initSilk$lambda_1(finalCssLayers_0));
  }
  function get_localStyleSheets(_this__u8e3s4) {
    _init_properties_InitSilk_kt__vukue3();
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = asList(_this__u8e3s4.styleSheets);
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (element instanceof CSSStyleSheet) {
        destination.h(element);
      }
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = destination.i();
    while (_iterator__ex2g4s_0.j()) {
      var element_0 = _iterator__ex2g4s_0.k();
      if (element_0.href == null) {
        destination_0.h(element_0);
      }
    }
    return destination_0;
  }
  function additionalSilkInitialization$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda$lambda($this$layer) {
    _init_properties_InitSilk_kt__vukue3();
    $this$layer.o2o(':scope', initSilk$lambda$lambda$lambda);
    return Unit_instance;
  }
  function initSilk$lambda$lambda$lambda($this$style) {
    _init_properties_InitSilk_kt__vukue3();
    $this$style.r2n('all', 'revert-layer');
    return Unit_instance;
  }
  function initSilk$lambda_0($compatCssLayers) {
    return function ($this$scope) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $compatCssLayers.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        layer($this$scope, element, initSilk$lambda$lambda);
      }
      return Unit_instance;
    };
  }
  function initSilk$lambda$lambda_0(it) {
    _init_properties_InitSilk_kt__vukue3();
    return asSequence(asList(it.cssRules));
  }
  function initSilk$lambda$lambda_1(it) {
    _init_properties_InitSilk_kt__vukue3();
    return it instanceof CSSLayerBlockRule;
  }
  function initSilk$lambda$lambda_2(it) {
    _init_properties_InitSilk_kt__vukue3();
    return it.name;
  }
  function initSilk$lambda$lambda_3(it) {
    _init_properties_InitSilk_kt__vukue3();
    return '"' + it + '"';
  }
  function initSilk$lambda_1($finalCssLayers) {
    return function () {
      // Inline function 'kotlin.run' call
      var tmp = asSequence(get_localStyleSheets(document));
      // Inline function 'kotlin.sequences.filterIsInstance' call
      var this_0 = flatMap(tmp, initSilk$lambda$lambda_0);
      var tmp_0 = filter(this_0, initSilk$lambda$lambda_1);
      var tmp_1 = isInterface(tmp_0, Sequence) ? tmp_0 : THROW_CCE();
      var referencedCssLayers = toSet_0(map(tmp_1, initSilk$lambda$lambda_2));
      var unregisteredLayers = subtract(referencedCssLayers, $finalCssLayers);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!unregisteredLayers.l()) {
        var tmp_2 = console;
        var tmp_3 = sorted(unregisteredLayers);
        tmp_2.warn(trimIndent('\n                        One or more CSS layer(s) were referenced in code but not registered.\n                        \n                        Please add initialization to your project like:\n                        ```\n                        @InitSilk\n                        fun initSilk(ctx: InitSilkContext) {\n                           ctx.stylesheet.cssLayers.add(' + joinToString(tmp_3, VOID, VOID, VOID, VOID, VOID, initSilk$lambda$lambda_3) + ')\n                        }\n                        ```\n                        (but change the order of the layers to match your desired priority).\n                        \n                        If you are not the developer of this website, consider reporting this message to them.\n                    '));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = get_localStyleSheets(document).i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        element.insertRule('@layer ' + joinToString($finalCssLayers) + ';', 0);
      }
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilk_kt_8x89gn;
  function _init_properties_InitSilk_kt__vukue3() {
    if (!properties_initialized_InitSilk_kt_8x89gn) {
      properties_initialized_InitSilk_kt_8x89gn = true;
      additionalSilkInitialization = additionalSilkInitialization$lambda;
      com_varabyte_kobweb_silk_init_InitSilkContext$stable = 8;
    }
  }
  function set_MutableSilkConfigInstance(_set____db54di) {
    _init_properties_SilkConfig_kt__z9kok7();
    MutableSilkConfigInstance = _set____db54di;
  }
  function get_MutableSilkConfigInstance() {
    _init_properties_SilkConfig_kt__z9kok7();
    return MutableSilkConfigInstance;
  }
  var MutableSilkConfigInstance;
  var com_varabyte_kobweb_silk_init_MutableSilkConfig$stable;
  function MutableSilkConfig() {
    this.n37_1 = ColorMode_LIGHT_getInstance();
  }
  protoOf(MutableSilkConfig).o37 = function () {
    return this.n37_1;
  };
  function Companion() {
  }
  protoOf(Companion).i30 = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_2;
  function Companion_getInstance_0() {
    return Companion_instance_2;
  }
  var properties_initialized_SilkConfig_kt_bfwaef;
  function _init_properties_SilkConfig_kt__z9kok7() {
    if (!properties_initialized_SilkConfig_kt_bfwaef) {
      properties_initialized_SilkConfig_kt_bfwaef = true;
      MutableSilkConfigInstance = new MutableSilkConfig();
      com_varabyte_kobweb_silk_init_MutableSilkConfig$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_init_CssStyleRegistrarImpl_Entry$stable;
  var com_varabyte_kobweb_silk_init_SilkStylesheetInstance$stable;
  function registerStyleBase(_this__u8e3s4, cssSelector, init) {
    _this__u8e3s4.p37(cssSelector, registerStyleBase$lambda(init));
  }
  function assertNoAttributeModifiers($this, _this__u8e3s4, selectorName) {
    var simpleStyleScope = new SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1();
    _this__u8e3s4(simpleStyleScope);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = simpleStyleScope.r37_1.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      assertNoAttributes(element, selectorName, SilkStylesheetInstance$assertNoAttributeModifiers$lambda(selectorName));
    }
  }
  function SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1() {
    StyleScope.call(this);
  }
  function SilkStylesheetInstance$assertNoAttributeModifiers$lambda($selectorName) {
    return function () {
      return 'Please search your `@InitSilk` code for a line like `ctx.stylesheet.registerStyle("' + $selectorName + '")` and remove the offending attribute(s).';
    };
  }
  function SilkStylesheetInstance$registerStyle$lambda($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.w12(-1866964764);
    $composer_0.x12();
    return Companion_instance;
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.d37_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.e37_1 = LinkedHashMap_init_$Create$();
    this.f37_1 = new LayerListBuilder();
  }
  protoOf(SilkStylesheetInstance).p37 = function (cssSelector, init) {
    this.d37_1.h(new SimpleCssStyle(cssSelector, init, SilkStylesheetInstance$registerStyle$lambda, null));
  };
  protoOf(SilkStylesheetInstance).w37 = function (name, build) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.e37_1;
    // Inline function 'kotlin.require' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).u1(name)) {
      var message = 'User is registering duplicate keyframe name: ' + name;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.e37_1.a2(name, build);
  };
  protoOf(SilkStylesheetInstance).g37 = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.d37_1.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp = SilkStylesheetInstance_getInstance();
      var tmp_0 = element.x37_1;
      assertNoAttributeModifiers(tmp, typeof tmp_0 === 'function' ? tmp_0 : THROW_CCE(), element.b38_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.d37_1.i();
    while (_iterator__ex2g4s_0.j()) {
      var element_0 = _iterator__ex2g4s_0.k();
      element_0.d38(siteStyleSheet);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_1 = this.e37_1.z1().i();
    while (_iterator__ex2g4s_1.j()) {
      var element_1 = _iterator__ex2g4s_1.k();
      // Inline function 'kotlin.collections.component1' call
      var name = element_1.s1();
      // Inline function 'kotlin.collections.component2' call
      var build = element_1.t1();
      // Inline function 'kotlin.apply' call
      var this_0 = new KeyframesBuilder(ColorMode_LIGHT_getInstance());
      build(this_0);
      var lightBuilder = this_0;
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(ColorMode_DARK_getInstance());
      build(this_1);
      var darkBuilder = this_1;
      if (lightBuilder.equals(darkBuilder)) {
        lightBuilder.g38(siteStyleSheet, name);
      } else {
        var ident = new CssIdent(name);
        lightBuilder.g38(siteStyleSheet, suffixedWith(ident, ColorMode_LIGHT_getInstance()).g2k_1);
        darkBuilder.g38(siteStyleSheet, suffixedWith(ident, ColorMode_DARK_getInstance()).g2k_1);
      }
    }
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  function registerStyleBase$lambda$lambda($init) {
    return function () {
      return $init();
    };
  }
  function registerStyleBase$lambda($init) {
    return function ($this$registerStyle) {
      $this$registerStyle.s37(registerStyleBase$lambda$lambda($init));
      return Unit_instance;
    };
  }
  function get_CSSScopeSupport() {
    _init_properties_ColorModeStrategy_kt__fbrwlj();
    return CSSScopeSupport;
  }
  var CSSScopeSupport;
  function get_useScope(_this__u8e3s4) {
    _init_properties_ColorModeStrategy_kt__fbrwlj();
    return !_this__u8e3s4.equals(ColorModeStrategy_SUFFIX_getInstance());
  }
  var ColorModeStrategy_SCOPE_instance;
  var ColorModeStrategy_SUFFIX_instance;
  var ColorModeStrategy_BOTH_instance;
  function Companion_0() {
    Companion_instance_3 = this;
    this.l37_1 = (new URLSearchParams(window.location.search)).get('_kobwebColorModeStrategy');
    var tmp = this;
    var tmp_0;
    if (!get_CSSScopeSupport()) {
      tmp_0 = ColorModeStrategy_SUFFIX_getInstance();
    } else {
      var tmp0 = get_entries();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.i();
        while (_iterator__ex2g4s.j()) {
          var element = _iterator__ex2g4s.k();
          if (element.k2_1 === Companion_getInstance_1().l37_1) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$1;
      tmp_0 = tmp0_elvis_lhs == null ? ColorModeStrategy_SCOPE_getInstance() : tmp0_elvis_lhs;
    }
    tmp.m37_1 = tmp_0;
  }
  var Companion_instance_3;
  function Companion_getInstance_1() {
    ColorModeStrategy_initEntries();
    if (Companion_instance_3 == null)
      new Companion_0();
    return Companion_instance_3;
  }
  function values() {
    return [ColorModeStrategy_SCOPE_getInstance(), ColorModeStrategy_SUFFIX_getInstance(), ColorModeStrategy_BOTH_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var ColorModeStrategy_entriesInitialized;
  function ColorModeStrategy_initEntries() {
    if (ColorModeStrategy_entriesInitialized)
      return Unit_instance;
    ColorModeStrategy_entriesInitialized = true;
    ColorModeStrategy_SCOPE_instance = new ColorModeStrategy('SCOPE', 0);
    ColorModeStrategy_SUFFIX_instance = new ColorModeStrategy('SUFFIX', 1);
    ColorModeStrategy_BOTH_instance = new ColorModeStrategy('BOTH', 2);
    Companion_getInstance_1();
  }
  var $ENTRIES;
  function ColorModeStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_useSuffix(_this__u8e3s4) {
    _init_properties_ColorModeStrategy_kt__fbrwlj();
    return !_this__u8e3s4.equals(ColorModeStrategy_SCOPE_getInstance());
  }
  function suffixedStyleLayer(_this__u8e3s4, layer) {
    _init_properties_ColorModeStrategy_kt__fbrwlj();
    var tmp;
    switch (_this__u8e3s4.l2_1) {
      case 0:
      case 1:
        tmp = layer;
        break;
      case 2:
        var tmp_0;
        if (layer == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = layer + '-compat';
        }

        tmp = tmp_0;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function getLayersWithCompat(_this__u8e3s4, layers) {
    _init_properties_ColorModeStrategy_kt__fbrwlj();
    var tmp;
    switch (_this__u8e3s4.l2_1) {
      case 0:
      case 1:
        tmp = toList(layers);
        break;
      case 2:
        // Inline function 'kotlin.collections.flatMap' call

        // Inline function 'kotlin.collections.flatMapTo' call

        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = layers.i();
        while (_iterator__ex2g4s.j()) {
          var element = _iterator__ex2g4s.k();
          var list = listOfNotNull([suffixedStyleLayer(_this__u8e3s4, element), element]);
          addAll(destination, list);
        }

        tmp = destination;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ColorModeStrategy_SCOPE_getInstance() {
    ColorModeStrategy_initEntries();
    return ColorModeStrategy_SCOPE_instance;
  }
  function ColorModeStrategy_SUFFIX_getInstance() {
    ColorModeStrategy_initEntries();
    return ColorModeStrategy_SUFFIX_instance;
  }
  function ColorModeStrategy_BOTH_getInstance() {
    ColorModeStrategy_initEntries();
    return ColorModeStrategy_BOTH_instance;
  }
  var properties_initialized_ColorModeStrategy_kt_cflytl;
  function _init_properties_ColorModeStrategy_kt__fbrwlj() {
    if (!properties_initialized_ColorModeStrategy_kt_cflytl) {
      properties_initialized_ColorModeStrategy_kt_cflytl = true;
      CSSScopeSupport = typeof CSSScopeRule != 'undefined';
    }
  }
  var com_varabyte_kobweb_silk_style_CssRule_OfMedia$stable;
  var com_varabyte_kobweb_silk_style_CssRule_NonMediaCssRule$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfAttributeSelector$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfPseudoClass$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfPseudoElement$stable;
  var com_varabyte_kobweb_silk_style_CssRule_CompositeOpen$stable;
  var com_varabyte_kobweb_silk_style_CssRule_CompositeClosed$stable;
  var com_varabyte_kobweb_silk_style_CssRule$stable;
  function Companion_1() {
  }
  protoOf(Companion_1).h38 = function (pseudoClass, params) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = params.length;
    while (inductionVariable < last) {
      var element = params[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp0_safe_receiver = element.j38();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.h(tmp0_safe_receiver);
      }
    }
    return new OfPseudoClass(pseudoClass + '(' + joinToString(destination) + ')');
  };
  var Companion_instance_4;
  function Companion_getInstance_2() {
    return Companion_instance_4;
  }
  function NonMediaCssRule() {
    CssRule.call(this);
  }
  function OfAttributeSelector(attributeSelector) {
    NonMediaCssRule.call(this);
    this.o38_1 = attributeSelector;
  }
  protoOf(OfAttributeSelector).j38 = function () {
    return this.m38(listOf(this), emptyList(), null);
  };
  function OfPseudoClass(pseudoClass) {
    NonMediaCssRule.call(this);
    this.q38_1 = pseudoClass;
  }
  protoOf(OfPseudoClass).j38 = function () {
    return this.m38(emptyList(), listOf(this), null);
  };
  protoOf(OfPseudoClass).r38 = function (other) {
    return new CompositeOpen(null, emptyList(), listOf_0([this, other]));
  };
  function OfPseudoElement(pseudoElement) {
    NonMediaCssRule.call(this);
    this.t38_1 = pseudoElement;
  }
  protoOf(OfPseudoElement).j38 = function () {
    return this.m38(emptyList(), emptyList(), this);
  };
  function CompositeOpen(mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this);
    this.v38_1 = mediaQuery;
    this.w38_1 = attributeSelectors;
    this.x38_1 = pseudoClasses;
  }
  protoOf(CompositeOpen).l38 = function () {
    return this.v38_1;
  };
  protoOf(CompositeOpen).j38 = function () {
    return this.m38(this.w38_1, this.x38_1, null);
  };
  function CssRule() {
    this.i38_1 = null;
  }
  protoOf(CssRule).k38 = function (target, createModifier) {
    target.t37(this.l38(), this.j38(), createModifier);
  };
  protoOf(CssRule).l38 = function () {
    return this.i38_1;
  };
  protoOf(CssRule).j38 = function () {
    return null;
  };
  protoOf(CssRule).m38 = function (attributeSelectors, pseudoClasses, pseudoElement) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = attributeSelectors.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      this_0.m7('[' + element.o38_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = pseudoClasses.i();
    while (_iterator__ex2g4s_0.j()) {
      var element_0 = _iterator__ex2g4s_0.k();
      this_0.m7(':' + element_0.q38_1);
    }
    if (!(pseudoElement == null)) {
      this_0.m7('::' + pseudoElement.t38_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_1 = this_0.toString();
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp = this_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  var com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stable;
  var com_varabyte_kobweb_silk_style_CssStyle_Restricted$stable;
  var com_varabyte_kobweb_silk_style_CssStyle$stable;
  var com_varabyte_kobweb_silk_style_SimpleCssStyle$stable;
  var com_varabyte_kobweb_silk_style_ExtendingCssStyle$stable;
  var com_varabyte_kobweb_silk_style_ImmutableCssStyle$stable;
  var com_varabyte_kobweb_silk_style_CssStyleScope$stable;
  var com_varabyte_kobweb_silk_style_CssStyleBaseScope$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_Light$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_Dark$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_ColorAgnostic$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_ColorAware$stable;
  function Base_init_$Init$(init, extraModifier, $this) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$Base$_init_$lambda_wfn4zd_1;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    Base.call($this, CssStyle$Restricted$Base$_init_$lambda_wfn4zd_2(init), extraModifier);
    return $this;
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.w12(906014673);
    $composer_0.x12();
    return Companion_instance;
  }
  function CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, $this) {
    return function () {
      return $init(new CssStyleBaseScope($this.a39_1));
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_0($init) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.s37(CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, _this__u8e3s4));
      return Unit_instance;
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_1($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.w12(293000442);
    $composer_0.x12();
    return Companion_instance;
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_2($init) {
    return function (_this__u8e3s4) {
      return $init;
    };
  }
  function Base(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$Base$_init_$lambda_wfn4zd;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    Restricted.call(this, CssStyle$Restricted$Base$_init_$lambda_wfn4zd_0(init), extraModifier);
  }
  function CssStyle$Restricted$_init_$lambda_tv1gbe($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.w12(1908519190);
    $composer_0.x12();
    return Companion_instance;
  }
  function Restricted(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$_init_$lambda_tv1gbe;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    CssStyle.call(this, init, extraModifier);
  }
  function addStyles($this, _this__u8e3s4, cssRule, styles) {
    _this__u8e3s4.o2o(cssRule, CssStyle$addStyles$lambda(styles));
  }
  function withSuffixedSelectorName($this, selectorBaseName, group, handler) {
    if (group instanceof Light)
      handler(withSuffixedSelectorName$suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.h39_1);
    else {
      if (group instanceof Dark)
        handler(withSuffixedSelectorName$suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.g39_1);
      else {
        if (group instanceof ColorAgnostic)
          handler(selectorBaseName, group.f39_1);
        else {
          if (group instanceof ColorAware) {
            handler(withSuffixedSelectorName$suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.d39_1);
            handler(withSuffixedSelectorName$suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.e39_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
  }
  function withColorModeScope($this, _this__u8e3s4, selector, group, handler) {
    var inScopeSelector = ':where(&)' + selector + ', ' + selector;
    if (group instanceof Light) {
      var tmp = ColorMode_LIGHT_getInstance();
      withColorModeScope$scope(_this__u8e3s4, tmp, CssStyle$withColorModeScope$lambda(handler, inScopeSelector, group));
    } else {
      if (group instanceof Dark) {
        var tmp_0 = ColorMode_DARK_getInstance();
        withColorModeScope$scope(_this__u8e3s4, tmp_0, CssStyle$withColorModeScope$lambda_0(handler, inScopeSelector, group));
      } else {
        if (group instanceof ColorAgnostic) {
          if (!($this instanceof SimpleCssStyle)) {
            var tmp_1 = get_entries_2();
            var tmp_2 = joinToString(tmp_1, ', ', VOID, VOID, VOID, VOID, CssStyle$withColorModeScope$lambda_1);
            scope(_this__u8e3s4, tmp_2, VOID, CssStyle$withColorModeScope$lambda_2(handler, inScopeSelector, group));
          } else {
            handler(_this__u8e3s4, selector, group.f39_1);
          }
        } else {
          if (group instanceof ColorAware) {
            var tmp_3 = ColorMode_LIGHT_getInstance();
            withColorModeScope$scope(_this__u8e3s4, tmp_3, CssStyle$withColorModeScope$lambda_3(handler, inScopeSelector, group));
            var tmp_4 = ColorMode_DARK_getInstance();
            withColorModeScope$scope(_this__u8e3s4, tmp_4, CssStyle$withColorModeScope$lambda_4(handler, inScopeSelector, group));
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
  }
  function mergeCssModifiers($this, _this__u8e3s4, init) {
    // Inline function 'kotlin.apply' call
    init(_this__u8e3s4);
    // Inline function 'kotlin.collections.groupBy' call
    var tmp0 = _this__u8e3s4.r37_1;
    // Inline function 'kotlin.collections.groupByTo' call
    var destination = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var key = element.s1();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.w1(key);
      var tmp;
      if (value == null) {
        var answer = ArrayList_init_$Create$();
        destination.a2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.h(element);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.n()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = destination.z1().i();
    while (_iterator__ex2g4s_0.j()) {
      var element_0 = _iterator__ex2g4s_0.k();
      var tmp_0 = element_0.s1();
      // Inline function 'kotlin.collections.component2' call
      var group = element_0.t1();
      // Inline function 'kotlin.collections.reduce' call
      var iterator = group.i();
      if (!iterator.j())
        throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
      var accumulator = iterator.k();
      while (iterator.j()) {
        var tmp0_0 = accumulator;
        var curr = iterator.k();
        accumulator = tmp0_0.l39(curr);
      }
      var tmp$ret$10 = accumulator;
      destination_0.a2(tmp_0, tmp$ret$10);
    }
    return destination_0;
  }
  function assertNoAttributeModifiers_0($this, _this__u8e3s4, selectorName, layer) {
    // Inline function 'kotlin.collections.onEach' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = _this__u8e3s4.z1().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.component2' call
      var cssModifier = element.t1();
      assertNoAttributes(cssModifier, selectorName, CssStyle$assertNoAttributeModifiers$lambda(layer));
    }
    return _this__u8e3s4;
  }
  function Companion_2() {
  }
  var Companion_instance_5;
  function Companion_getInstance_3() {
    return Companion_instance_5;
  }
  function CssStyle$_init_$lambda_598xul($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.w12(-1204013637);
    $composer_0.x12();
    return Companion_instance;
  }
  function CssStyle$addStyles$lambda($styles) {
    return function ($this$style) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $styles.w2t_1.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        $this$style.r2n(element.z2t_1, element.a2u_1);
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = $styles.y2t_1.i();
      while (_iterator__ex2g4s_0.j()) {
        var element_0 = _iterator__ex2g4s_0.k();
        $this$style.u2n(element_0.z2t_1, element_0.a2u_1);
      }
      return Unit_instance;
    };
  }
  function withSuffixedSelectorName$suffixedWith(_this__u8e3s4, colorMode) {
    var tmp0_safe_receiver = Companion_instance_0.f2k(removePrefix(_this__u8e3s4, '.'));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : suffixedWith(tmp0_safe_receiver, colorMode);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.g2k_1;
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = '.' + tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp;
    return tmp3_elvis_lhs == null ? _this__u8e3s4 : tmp3_elvis_lhs;
  }
  function withColorModeScope$scope($this_withColorModeScope, colorMode, rulesBuild) {
    scope($this_withColorModeScope, '.' + get_cssClass(colorMode), '.' + get_cssClass(colorMode.m35()), rulesBuild);
  }
  function CssStyle$withColorModeScope$lambda($handler, $inScopeSelector, $group) {
    return function ($this$scope) {
      $handler($this$scope, $inScopeSelector, $group.h39_1);
      return Unit_instance;
    };
  }
  function CssStyle$withColorModeScope$lambda_0($handler, $inScopeSelector, $group) {
    return function ($this$scope) {
      $handler($this$scope, $inScopeSelector, $group.g39_1);
      return Unit_instance;
    };
  }
  function CssStyle$withColorModeScope$lambda_1(it) {
    return '.' + get_cssClass(it);
  }
  function CssStyle$withColorModeScope$lambda_2($handler, $inScopeSelector, $group) {
    return function ($this$scope) {
      $handler($this$scope, $inScopeSelector, $group.f39_1);
      return Unit_instance;
    };
  }
  function CssStyle$withColorModeScope$lambda_3($handler, $inScopeSelector, $group) {
    return function ($this$scope) {
      $handler($this$scope, $inScopeSelector, $group.d39_1);
      return Unit_instance;
    };
  }
  function CssStyle$withColorModeScope$lambda_4($handler, $inScopeSelector, $group) {
    return function ($this$scope) {
      $handler($this$scope, $inScopeSelector, $group.e39_1);
      return Unit_instance;
    };
  }
  function CssStyle$assertNoAttributeModifiers$lambda($layer) {
    return function () {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      var styleDeclaration = $layer === SilkLayer_COMPONENT_VARIANTS_getInstance().o39_1 ? 'val SomeExampleVariant = ExampleStyle.addVariant' : $layer === SilkLayer_COMPONENT_STYLES_getInstance().o39_1 ? 'val ExampleStyle = CssStyle<ExampleKind>' : 'val ExampleStyle = CssStyle';
      // Inline function 'kotlin.text.appendLine' call
      var value = 'Please move Modifiers associated with attributes to the `extraModifier` parameter.';
      // Inline function 'kotlin.text.appendLine' call
      this_0.m7(value).n7(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      this_0.n7(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_0 = 'An example of how to fix this (e.g. if the offending attribute was `tab-index`):';
      // Inline function 'kotlin.text.appendLine' call
      this_0.m7(value_0).n7(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_1 = trimMargin('\n                        |   // Before\n                        |   ' + styleDeclaration + ' {\n                        |       base {\n                        |          Modifier\n                        |              .backgroundColor(Colors.Magenta))\n                        |              .tabIndex(0) // <-- The offending attribute modifier\n                        |       }\n                        |   }\n                        |\n                        |   // After\n                        |   ' + styleDeclaration + '(extraModifier = Modifier.tabIndex(0)) {\n                        |       base {\n                        |           Modifier.backgroundColor(Colors.Magenta)\n                        |       }\n                        |   }\n                        ');
      // Inline function 'kotlin.text.appendLine' call
      this_0.m7(value_1).n7(_Char___init__impl__6a9atx(10));
      return this_0.toString();
    };
  }
  function addStylesInto$mediaOrInPlace(_this__u8e3s4, query, rulesBuild) {
    if (query == null) {
      // Inline function 'kotlin.apply' call
      rulesBuild(_this__u8e3s4);
    } else {
      media(_this__u8e3s4, query, rulesBuild);
    }
  }
  function addStylesInto$layerOrInPlace(_this__u8e3s4, name, rulesBuild) {
    if (name == null) {
      // Inline function 'kotlin.apply' call
      rulesBuild(_this__u8e3s4);
    } else {
      layer(_this__u8e3s4, name, rulesBuild);
    }
  }
  function CssStyle$addStylesInto$lambda$lambda(this$0, $selector, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles(this$0, $this$layerOrInPlace, $selector, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda($layer, this$0) {
    return function ($this$withColorModeScope, selector, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        addStylesInto$layerOrInPlace($this$withColorModeScope, $layer, CssStyle$addStylesInto$lambda$lambda(this$0, selector, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda_0(this$0, $name, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles(this$0, $this$layerOrInPlace, $name, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda_0($classNames, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.h(name);
        var tmp_0 = suffixedStyleLayer(Companion_getInstance_1().m37_1, $layer);
        addStylesInto$layerOrInPlace($styleSheet, tmp_0, CssStyle$addStylesInto$lambda$lambda_0(this$0, name, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $selector, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles(this$0, $this$layerOrInPlace, $selector, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda_1($layer, this$0, $selector, $styles) {
    return function ($this$mediaOrInPlace) {
      addStylesInto$layerOrInPlace($this$mediaOrInPlace, $layer, CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $selector, $styles));
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda_1($cssRuleKey, $layer, this$0) {
    return function ($this$withColorModeScope, selector, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        addStylesInto$mediaOrInPlace($this$withColorModeScope, $cssRuleKey.p39_1, CssStyle$addStylesInto$lambda$lambda_1($layer, this$0, selector, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda$lambda_0(this$0, $cssRule, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles(this$0, $this$layerOrInPlace, $cssRule, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda_2($layer, this$0, $cssRule, $styles) {
    return function ($this$mediaOrInPlace) {
      var tmp = suffixedStyleLayer(Companion_getInstance_1().m37_1, $layer);
      addStylesInto$layerOrInPlace($this$mediaOrInPlace, tmp, CssStyle$addStylesInto$lambda$lambda$lambda_0(this$0, $cssRule, $styles));
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda_2($classNames, $cssRuleKey, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.h(name);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = $cssRuleKey.q39_1;
        var cssRule = name + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        addStylesInto$mediaOrInPlace($styleSheet, $cssRuleKey.p39_1, CssStyle$addStylesInto$lambda$lambda_2($layer, this$0, cssRule, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$_init_$lambda_598xul;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    this.x37_1 = init;
    this.y37_1 = extraModifier;
  }
  protoOf(CssStyle).b39 = function (selector, styleSheet, layer) {
    var classNames = mutableListOf([selector]);
    var lightModifiers = assertNoAttributeModifiers_0(this, mergeCssModifiers(this, new CssStyleScope(ColorMode_LIGHT_getInstance()), this.x37_1), selector, layer);
    var darkModifiers = assertNoAttributeModifiers_0(this, mergeCssModifiers(this, new CssStyleScope(ColorMode_DARK_getInstance()), this.x37_1), selector, layer);
    var tmp = Companion_instance_6;
    var tmp0_safe_receiver = lightModifiers.w1(Companion_getInstance_5().r39_1);
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i39_1;
    var tmp1_safe_receiver = darkModifiers.w1(Companion_getInstance_5().r39_1);
    var tmp2_safe_receiver = tmp.s39(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i39_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (get_useScope(Companion_getInstance_1().m37_1)) {
        withColorModeScope(this, styleSheet, selector, tmp2_safe_receiver, CssStyle$addStylesInto$lambda(layer, this));
      }
      if (get_useSuffix(Companion_getInstance_1().m37_1)) {
        withSuffixedSelectorName(this, selector, tmp2_safe_receiver, CssStyle$addStylesInto$lambda_0(classNames, styleSheet, layer, this));
      }
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = plus(lightModifiers.x1(), darkModifiers.x1());
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (!element.equals(Companion_getInstance_5().r39_1)) {
        destination.h(element);
      }
    }
    var allCssRuleKeys = destination;
    var _iterator__ex2g4s_0 = allCssRuleKeys.i();
    $l$loop: while (_iterator__ex2g4s_0.j()) {
      var cssRuleKey = _iterator__ex2g4s_0.k();
      var tmp_1 = Companion_instance_6;
      var tmp3_safe_receiver = lightModifiers.w1(cssRuleKey);
      var tmp_2 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.i39_1;
      var tmp4_safe_receiver = darkModifiers.w1(cssRuleKey);
      var tmp5_elvis_lhs = tmp_1.s39(tmp_2, tmp4_safe_receiver == null ? null : tmp4_safe_receiver.i39_1);
      var tmp_3;
      if (tmp5_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp_3 = tmp5_elvis_lhs;
      }
      var group = tmp_3;
      if (get_useScope(Companion_getInstance_1().m37_1)) {
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = cssRuleKey.q39_1;
        var tmp_4 = selector + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        withColorModeScope(this, styleSheet, tmp_4, group, CssStyle$addStylesInto$lambda_1(cssRuleKey, layer, this));
      }
      if (get_useSuffix(Companion_getInstance_1().m37_1)) {
        withSuffixedSelectorName(this, selector, group, CssStyle$addStylesInto$lambda_2(classNames, cssRuleKey, styleSheet, layer, this));
      }
    }
    return _ClassSelectors___init__impl__tbnzdx(classNames);
  };
  protoOf(CssStyle).c39 = function (classSelectors) {
    return new ImmutableCssStyle(classSelectors, this.y37_1);
  };
  function base(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    _init_properties_CssStyle_kt__srbhji();
    return base_2(_this__u8e3s4, base$lambda(extraModifier), init);
  }
  function CssStyleBaseScope(colorMode) {
    this.t39_1 = colorMode;
  }
  function ComponentKind() {
  }
  function CssStyle_0(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    _init_properties_CssStyle_kt__srbhji();
    return new CssStyle$3(init, extraModifier);
  }
  function CssStyleScope(colorMode) {
    StyleScope.call(this);
    this.a39_1 = colorMode;
  }
  function CssStyle_1(extraModifier, init) {
    _init_properties_CssStyle_kt__srbhji();
    return new CssStyle$6(init, extraModifier);
  }
  function com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter() {
    return com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stable;
  }
  function GeneralKind() {
  }
  function base_0(_this__u8e3s4, extraModifier, init) {
    _init_properties_CssStyle_kt__srbhji();
    return new base$3(extraModifier, init);
  }
  function base_1(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    _init_properties_CssStyle_kt__srbhji();
    return base_0(_this__u8e3s4, base$lambda_0(extraModifier), init);
  }
  function RestrictedKind() {
  }
  function Light(styles) {
    this.h39_1 = styles;
  }
  function Dark(styles) {
    this.g39_1 = styles;
  }
  function ColorAgnostic(styles) {
    this.f39_1 = styles;
  }
  function ColorAware(lightStyles, darkStyles) {
    this.d39_1 = lightStyles;
    this.e39_1 = darkStyles;
  }
  function Companion_3() {
  }
  protoOf(Companion_3).s39 = function (lightModifiers, darkModifiers) {
    var tmp;
    if (lightModifiers == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.apply' call
      var this_0 = new ComparableStyleScope();
      toStyles(lightModifiers)(this_0);
      tmp = this_0;
    }
    var lightStyles = tmp;
    var tmp_0;
    if (darkModifiers == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      toStyles(darkModifiers)(this_1);
      tmp_0 = this_1;
    }
    var darkStyles = tmp_0;
    if (lightStyles == null && darkStyles == null)
      return null;
    if (!(lightStyles == null) && darkStyles == null)
      return new Light(lightStyles);
    if (lightStyles == null && !(darkStyles == null))
      return new Dark(darkStyles);
    // Inline function 'kotlin.check' call
    if (!(!(lightStyles == null) && !(darkStyles == null))) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    var tmp_1;
    if (equals(lightStyles, darkStyles)) {
      tmp_1 = new ColorAgnostic(lightStyles);
    } else {
      tmp_1 = new ColorAware(lightStyles, darkStyles);
    }
    return tmp_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_4() {
    return Companion_instance_6;
  }
  function SimpleCssStyle(selector, init, extraModifier, layer) {
    CssStyle.call(this, init, extraModifier);
    this.b38_1 = selector;
    this.c38_1 = layer;
  }
  protoOf(SimpleCssStyle).d38 = function (styleSheet) {
    this.b39(this.b38_1, styleSheet, this.c38_1);
  };
  function _ClassSelectors___init__impl__tbnzdx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _ClassSelectors___get_classNames__impl__eyto04($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _get_value__a43j40($this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var tmp$ret$0 = substringAfterLast(item, _Char___init__impl__6a9atx(46));
      destination.h(tmp$ret$0);
    }
    return destination;
  }
  function ImmutableCssStyle(classSelectors, extraModifier) {
    this.w39_1 = extraModifier;
    this.x39_1 = toSet(_ClassSelectors___get_classNames__impl__eyto04(classSelectors));
  }
  protoOf(ImmutableCssStyle).y39 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.w12(-1357650385);
    // Inline function 'kotlin.collections.filterNot' call
    var tmp0 = this.x39_1;
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (!isSuffixedWith(new CssIdent(element), Companion_instance_9.j35($composer_0, 6).m35())) {
        destination.h(element);
      }
    }
    $composer_0.x12();
    var currentClassNames = destination;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!currentClassNames.l()) {
      var tmp_0 = Companion_instance;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$4 = copyToArray(currentClassNames);
      tmp = classNames(tmp_0, tmp$ret$4.slice());
    } else {
      tmp = Companion_instance;
    }
    return tmp.m32(this.w39_1($composer_0, 0));
  };
  function base_2(_this__u8e3s4, extraModifier, init) {
    _init_properties_CssStyle_kt__srbhji();
    return CssStyle_1(extraModifier, base$lambda_1(init));
  }
  function toModifier(_this__u8e3s4, variants, $composer, $changed) {
    _init_properties_CssStyle_kt__srbhji();
    var $composer_0 = $composer;
    var tmp = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    var tmp0_safe_receiver = combine(toList_0(variants));
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      $composer_0.w12(-303432124);
      $composer_0.x12();
      tmp_0 = null;
    } else {
      $composer_0.w12(-2087998115);
      var tmp1_group = tmp0_safe_receiver.z39($composer_0, 0);
      $composer_0.x12();
      tmp_0 = tmp1_group;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp.m32(tmp1_elvis_lhs == null ? Companion_instance : tmp1_elvis_lhs);
  }
  function ExtendingCssStyle() {
  }
  function _toModifier(_this__u8e3s4, $composer, $changed) {
    _init_properties_CssStyle_kt__srbhji();
    var $composer_0 = $composer;
    var tmp0_safe_receiver = get_SilkTheme().b37_1.w1(_this__u8e3s4);
    var tmp;
    if (tmp0_safe_receiver == null) {
      $composer_0.w12(4742520);
      $composer_0.x12();
      tmp = null;
    } else {
      $composer_0.w12(554342313);
      var tmp1_group = tmp0_safe_receiver.y39($composer_0, 0);
      $composer_0.x12();
      tmp = tmp1_group;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Failed to convert a CssStyle to a modifier. Double check that the style was declared at the top-level of your file or registered manually via an `@InitSilk` method.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function toModifier_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_CssStyle_kt__srbhji();
    var $composer_0 = $composer;
    return _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
  }
  function com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() {
    return com_varabyte_kobweb_silk_style_CssStyle$stable;
  }
  function CssStyle_2(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    _init_properties_CssStyle_kt__srbhji();
    return new CssStyle$7(init, extraModifier);
  }
  function toAttrs_0(_this__u8e3s4, finalHandler, $composer, $changed, $default) {
    _init_properties_CssStyle_kt__srbhji();
    var finalHandler_0 = finalHandler;
    var $composer_0 = $composer;
    if (!(($default & 1) === 0))
      finalHandler_0 = null;
    return toAttrs(toModifier_0(_this__u8e3s4, $composer_0, 14 & $changed), finalHandler_0);
  }
  function base$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.w12(-2139862911);
      var tmp0 = $extraModifier;
      $composer_0.x12();
      return tmp0;
    };
  }
  function CssStyle$o$_init_$lambda_60e9n6($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.w12(-256215983);
      var tmp0 = $extraModifier;
      $composer_0.x12();
      return tmp0;
    };
  }
  function CssStyle$3($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6($extraModifier));
  }
  function CssStyle$6($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function base$o$_init_$lambda$lambda_d0jdie($this, $init) {
    return function () {
      var tmp0 = new CssStyleBaseScope($this.a39_1);
      // Inline function 'kotlin.let' call
      return $init(tmp0);
    };
  }
  function base$o$_init_$lambda_5dljwv($init) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.s37(base$o$_init_$lambda$lambda_d0jdie(_this__u8e3s4, $init));
      return Unit_instance;
    };
  }
  function base$3($extraModifier, $init) {
    CssStyle.call(this, base$o$_init_$lambda_5dljwv($init), $extraModifier);
  }
  function base$lambda_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.w12(-2139862911);
      var tmp0 = $extraModifier;
      $composer_0.x12();
      return tmp0;
    };
  }
  function base$lambda$lambda($this_CssStyle, $init) {
    return function () {
      var tmp0 = new CssStyleBaseScope($this_CssStyle.a39_1);
      // Inline function 'kotlin.let' call
      return $init(tmp0);
    };
  }
  function base$lambda_1($init) {
    return function ($this$CssStyle) {
      $this$CssStyle.s37(base$lambda$lambda($this$CssStyle, $init));
      return Unit_instance;
    };
  }
  function CssStyle$o$_init_$lambda_60e9n6_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.w12(-256215983);
      var tmp0 = $extraModifier;
      $composer_0.x12();
      return tmp0;
    };
  }
  function CssStyle$7($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6_0($extraModifier));
  }
  var properties_initialized_CssStyle_kt_y9xggg;
  function _init_properties_CssStyle_kt__srbhji() {
    if (!properties_initialized_CssStyle_kt_y9xggg) {
      properties_initialized_CssStyle_kt_y9xggg = true;
      com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stable = 0;
      com_varabyte_kobweb_silk_style_CssStyle_Restricted$stable = 0;
      com_varabyte_kobweb_silk_style_CssStyle$stable = 0;
      com_varabyte_kobweb_silk_style_SimpleCssStyle$stable = 0;
      com_varabyte_kobweb_silk_style_ExtendingCssStyle$stable = 0;
      com_varabyte_kobweb_silk_style_ImmutableCssStyle$stable = 8;
      com_varabyte_kobweb_silk_style_CssStyleScope$stable = 8;
      com_varabyte_kobweb_silk_style_CssStyleBaseScope$stable = 0;
      com_varabyte_kobweb_silk_style_StyleGroup_Light$stable = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter();
      com_varabyte_kobweb_silk_style_StyleGroup_Dark$stable = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter();
      com_varabyte_kobweb_silk_style_StyleGroup_ColorAgnostic$stable = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter();
      com_varabyte_kobweb_silk_style_StyleGroup_ColorAware$stable = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter() | com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter();
    }
  }
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stable;
  var com_varabyte_kobweb_silk_style_SimpleCssStyleVariant$stable;
  var com_varabyte_kobweb_silk_style_ExtendingCssStyleVariant$stable;
  function CssStyleVariant() {
  }
  protoOf(CssStyleVariant).a3a = function (next) {
    return new CompositeCssStyleVariant(this, next);
  };
  function addVariantBase(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return addVariantBase_0(_this__u8e3s4, addVariantBase$lambda(extraModifier), init);
  }
  function addVariant(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return addVariant_0(_this__u8e3s4, addVariant$lambda(extraModifier), init);
  }
  function com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() {
    return com_varabyte_kobweb_silk_style_CssStyleVariant$stable;
  }
  function CompositeCssStyleVariant(head, tail) {
    CssStyleVariant.call(this);
    this.b3a_1 = head;
    this.c3a_1 = tail;
  }
  protoOf(CompositeCssStyleVariant).z39 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.w12(1761922567);
    var tmp0 = this.b3a_1.z39($composer_0, 0).m32(this.c3a_1.z39($composer_0, 0));
    $composer_0.x12();
    return tmp0;
  };
  function addVariantBase_0(_this__u8e3s4, extraModifier, init) {
    return SimpleCssStyleVariant_init_$Create$(addVariantBase$lambda_0(init), extraModifier, _this__u8e3s4);
  }
  function addVariant_0(_this__u8e3s4, extraModifier, init) {
    return new SimpleCssStyleVariant(new addVariant$3(init, extraModifier), _this__u8e3s4);
  }
  function SimpleCssStyleVariant_init_$Init$(init, extraModifier, baseStyle, $this) {
    SimpleCssStyleVariant.call($this, new SimpleCssStyleVariant$1(init, extraModifier), baseStyle);
    return $this;
  }
  function SimpleCssStyleVariant_init_$Create$(init, extraModifier, baseStyle) {
    return SimpleCssStyleVariant_init_$Init$(init, extraModifier, baseStyle, objectCreate(protoOf(SimpleCssStyleVariant)));
  }
  function SimpleCssStyleVariant$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function SimpleCssStyleVariant(cssStyle, baseStyle) {
    CssStyleVariant.call(this);
    this.d3a_1 = cssStyle;
    this.e3a_1 = baseStyle;
  }
  protoOf(SimpleCssStyleVariant).z39 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.w12(-1935545974);
    var tmp0 = toModifier(this.d3a_1, [], $composer_0, 0);
    $composer_0.x12();
    return tmp0;
  };
  function ExtendingCssStyleVariant() {
  }
  function combine(_this__u8e3s4) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.reduceOrNull' call
      var iterator = _this__u8e3s4.i();
      if (!iterator.j()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var accumulator = iterator.k();
      while (iterator.j()) {
        var tmp0 = accumulator;
        var variant = iterator.k();
        var tmp;
        if (!(tmp0 == null) && !(variant == null)) {
          tmp = tmp0.a3a(variant);
        } else {
          tmp = tmp0 == null ? variant : tmp0;
        }
        accumulator = tmp;
      }
      tmp$ret$0 = accumulator;
    }
    return tmp$ret$0;
  }
  function addVariantBase$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.w12(754846533);
      var tmp0 = $extraModifier;
      $composer_0.x12();
      return tmp0;
    };
  }
  function addVariant$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.w12(1967918819);
      var tmp0 = $extraModifier;
      $composer_0.x12();
      return tmp0;
    };
  }
  function addVariantBase$lambda$lambda($this_SimpleCssStyleVariant, $init) {
    return function () {
      var tmp0 = new CssStyleBaseScope($this_SimpleCssStyleVariant.a39_1);
      // Inline function 'kotlin.let' call
      return $init(tmp0);
    };
  }
  function addVariantBase$lambda_0($init) {
    return function ($this$SimpleCssStyleVariant) {
      $this$SimpleCssStyleVariant.s37(addVariantBase$lambda$lambda($this$SimpleCssStyleVariant, $init));
      return Unit_instance;
    };
  }
  function addVariant$3($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function get_selectorSeparators() {
    _init_properties_StyleScope_kt__rik58j();
    return selectorSeparators;
  }
  var selectorSeparators;
  var com_varabyte_kobweb_silk_style_StyleScope$stable;
  var com_varabyte_kobweb_silk_style_CssModifier_Key$stable;
  var com_varabyte_kobweb_silk_style_CssModifier$stable;
  function StyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.q37_1 = ArrayList_init_$Create$();
    this.r37_1 = this.q37_1;
  }
  protoOf(StyleScope).s37 = function (createModifier) {
    this.q37_1.h(new CssModifier(createModifier()));
  };
  protoOf(StyleScope).t37 = function (mediaQuery, suffix, createModifier) {
    this.q37_1.h(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleScope).u37 = function (suffix, createModifier) {
    this.q37_1.h(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleScope).v37 = function (mediaQuery, createModifier) {
    this.q37_1.h(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleScope).u39 = function (_this__u8e3s4, createModifier) {
    this.v37(_this__u8e3s4.f3a(), createModifier);
  };
  protoOf(StyleScope).v39 = function (_this__u8e3s4, createModifier) {
    _this__u8e3s4.k38(this, createModifier);
  };
  function Companion_4() {
    Companion_instance_7 = this;
    this.r39_1 = new Key(null, null);
  }
  var Companion_instance_7;
  function Companion_getInstance_5() {
    if (Companion_instance_7 == null)
      new Companion_4();
    return Companion_instance_7;
  }
  function Key(mediaQuery, suffix) {
    this.p39_1 = mediaQuery;
    this.q39_1 = suffix;
  }
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.p39_1 + ', suffix=' + this.q39_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.p39_1 == null ? 0 : getStringHashCode(this.p39_1);
    result = imul(result, 31) + (this.q39_1 == null ? 0 : getStringHashCode(this.q39_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    if (!(this.p39_1 == other.p39_1))
      return false;
    if (!(this.q39_1 == other.q39_1))
      return false;
    return true;
  };
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_5();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.i39_1 = modifier;
    this.j39_1 = mediaQuery;
    var tmp = this;
    var tmp_0;
    if (suffix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_1;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(suffix)) {
        tmp_1 = suffix;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_2 = !get_selectorSeparators().t(new Char(first(tmp1_safe_receiver))) ? ' ' + tmp1_safe_receiver : tmp1_safe_receiver;
    }
    tmp.k39_1 = tmp_2;
  }
  protoOf(CssModifier).l39 = function (other) {
    // Inline function 'kotlin.check' call
    if (!(!(this === other) && equals(this.j39_1, other.j39_1) && this.k39_1 == other.k39_1)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    return new CssModifier(this.i39_1.m32(other.i39_1), this.j39_1, this.k39_1);
  };
  protoOf(CssModifier).s1 = function () {
    var tmp0_safe_receiver = this.j39_1;
    return new Key(tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver), this.k39_1);
  };
  function assertNoAttributes(_this__u8e3s4, selectorName, lazyExtraContext) {
    _init_properties_StyleScope_kt__rik58j();
    var attrsScope = ComparableAttrsScope_init_$Create$();
    toAttrs(_this__u8e3s4.i39_1)(attrsScope);
    if (attrsScope.h2t_1.l())
      return Unit_instance;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.text.appendLine' call
    var value = 'Style block declarations cannot contain Modifiers that specify attributes. Only style modifiers are allowed here.';
    // Inline function 'kotlin.text.appendLine' call
    this_0.m7(value).n7(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    this_0.n7(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = 'Details:';
    // Inline function 'kotlin.text.appendLine' call
    this_0.m7(value_0).n7(_Char___init__impl__6a9atx(10));
    this_0.m7('\tCSS rule: ');
    this_0.m7('"');
    if (!(_this__u8e3s4.j39_1 == null)) {
      this_0.m7('@media ' + toString(_this__u8e3s4.j39_1) + ' { ');
    }
    this_0.m7(selectorName);
    if (!(_this__u8e3s4.k39_1 == null)) {
      this_0.m7(_this__u8e3s4.k39_1);
    }
    if (!(_this__u8e3s4.j39_1 == null)) {
      this_0.m7(' }');
    }
    // Inline function 'kotlin.text.appendLine' call
    // Inline function 'kotlin.text.appendLine' call
    this_0.m7('"').n7(_Char___init__impl__6a9atx(10));
    var tmp = attrsScope.h2t_1.x1();
    // Inline function 'kotlin.text.appendLine' call
    var value_1 = '\tAttribute(s): ' + joinToString(tmp, ', ', VOID, VOID, VOID, VOID, assertNoAttributes$lambda);
    // Inline function 'kotlin.text.appendLine' call
    this_0.m7(value_1).n7(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    this_0.n7(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_2 = lazyExtraContext();
    // Inline function 'kotlin.text.appendLine' call
    this_0.m7(value_2).n7(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.error' call
    var message = this_0.toString();
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function assertNoAttributes$lambda(it) {
    _init_properties_StyleScope_kt__rik58j();
    return '"' + it + '"';
  }
  var properties_initialized_StyleScope_kt_8wepyz;
  function _init_properties_StyleScope_kt__rik58j() {
    if (!properties_initialized_StyleScope_kt_8wepyz) {
      properties_initialized_StyleScope_kt_8wepyz = true;
      selectorSeparators = setOf([new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(91))]);
      com_varabyte_kobweb_silk_style_StyleScope$stable = 8;
      com_varabyte_kobweb_silk_style_CssModifier_Key$stable = 0;
      com_varabyte_kobweb_silk_style_CssModifier$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_style_animation_KeyframesBuilder$stable;
  var com_varabyte_kobweb_silk_style_animation_Keyframes$stable;
  function Companion_5() {
  }
  protoOf(Companion_5).g3a = function (build) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = listOf_0([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(item);
      build(this_1);
      destination.h(this_1);
    }
    // Inline function 'kotlin.collections.count' call
    return distinct(destination).n() === 1;
  };
  var Companion_instance_8;
  function Companion_getInstance_6() {
    return Companion_instance_8;
  }
  function Keyframes$usesColorMode$delegate$lambda(this$0) {
    return function () {
      return !Companion_instance_8.g3a(this$0.h3a_1);
    };
  }
  function Keyframes(init) {
    this.h3a_1 = init;
    var tmp = this;
    tmp.i3a_1 = lazy(Keyframes$usesColorMode$delegate$lambda(this));
  }
  function _get_comparableKeyframeStyles__erog4h($this) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = $this.f38_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.n()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_0.z1().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp = element.s1();
      // Inline function 'kotlin.collections.component2' call
      var modifier = element.t1();
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      toStyles(modifier)(this_1);
      destination.a2(tmp, this_1);
    }
    return destination;
  }
  function KeyframesBuilder(colorMode) {
    this.e38_1 = colorMode;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.f38_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(KeyframesBuilder).j3a = function (createStyle) {
    var tmp0 = this.f38_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var pair = to(From_getInstance(), createStyle());
    tmp0.a2(pair.je_1, pair.ke_1);
  };
  protoOf(KeyframesBuilder).k3a = function (createStyle) {
    var tmp0 = this.f38_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var pair = to(To_getInstance(), createStyle());
    tmp0.a2(pair.je_1, pair.ke_1);
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other || equals(_get_comparableKeyframeStyles__erog4h(this), _get_comparableKeyframeStyles__erog4h(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(_get_comparableKeyframeStyles__erog4h(this));
  };
  protoOf(KeyframesBuilder).g38 = function (stylesheet, keyframesName) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.f38_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.n());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.z1().i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.component1' call
      var keyframe = item.s1();
      // Inline function 'kotlin.collections.component2' call
      var modifier = item.t1();
      var styles = toStyles(modifier);
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      var tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      destination.h(tmp$ret$3);
    }
    var keyframeRules = destination;
    stylesheet.g2n(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  var com_varabyte_kobweb_silk_style_breakpoint_Breakpoint_Range$stable;
  var Breakpoint_ZERO_instance;
  var Breakpoint_SM_instance;
  var Breakpoint_MD_instance;
  var Breakpoint_LG_instance;
  var Breakpoint_XL_instance;
  var Breakpoint_XXL_instance;
  function values_0() {
    return [Breakpoint_ZERO_getInstance(), Breakpoint_SM_getInstance(), Breakpoint_MD_getInstance(), Breakpoint_LG_getInstance(), Breakpoint_XL_getInstance(), Breakpoint_XXL_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_instance;
    Breakpoint_entriesInitialized = true;
    Breakpoint_ZERO_instance = new Breakpoint('ZERO', 0);
    Breakpoint_SM_instance = new Breakpoint('SM', 1);
    Breakpoint_MD_instance = new Breakpoint('MD', 2);
    Breakpoint_LG_instance = new Breakpoint('LG', 3);
    Breakpoint_XL_instance = new Breakpoint('XL', 4);
    Breakpoint_XXL_instance = new Breakpoint('XXL', 5);
  }
  var $ENTRIES_0;
  function Breakpoint(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Breakpoint).f3a = function () {
    return new MediaFeature('min-width', toWidth(this));
  };
  function Breakpoint_ZERO_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_ZERO_instance;
  }
  function Breakpoint_SM_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_SM_instance;
  }
  function Breakpoint_MD_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_MD_instance;
  }
  function Breakpoint_LG_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_LG_instance;
  }
  function Breakpoint_XL_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_XL_instance;
  }
  function Breakpoint_XXL_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_XXL_instance;
  }
  function SilkBreakpointDisplayStyles($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1560920665);
    if ($composer_0.u13(!($changed === 0), $changed & 1)) {
      GenericTag_0('style', null, ComposableSingletons$BreakpointConditionsKt_getInstance().n3a_1, $composer_0, 390, 2);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(SilkBreakpointDisplayStyles$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$BreakpointConditionsKt$lambda$321895361$lambda($this$GenericTag, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.s13($this$GenericTag);
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (invalid || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$BreakpointConditionsKt$lambda$321895361$lambda$lambda($this$GenericTag);
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    DisposableEffect(Unit_instance, tmp$ret$3, $composer_0, 6);
    return Unit_instance;
  }
  function ComposableSingletons$BreakpointConditionsKt$lambda$321895361$3$$inlined$cache$2$1($cssStylesheet) {
    this.o3a_1 = $cssStylesheet;
  }
  protoOf(ComposableSingletons$BreakpointConditionsKt$lambda$321895361$3$$inlined$cache$2$1).ts = function () {
    var tmp0_safe_receiver = this.o3a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function ComposableSingletons$BreakpointConditionsKt$lambda$321895361$lambda$lambda($this_GenericTag) {
    return function ($this$DisposableEffect) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = $this_GenericTag.w2l($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = get_entries_0().i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var breakpointQuery = (new CSSMediaRuleDeclaration(element.f3a(), emptyList())).z2m();
        var invertBreakpointQuery = (new CSSMediaRuleDeclaration(invert(element.f3a()), emptyList())).z2m();
        if (cssStylesheet == null)
          null;
        else
          addRule(cssStylesheet, invertBreakpointQuery + ' { .' + get_displayIfAtLeastClass(element) + ' { display: none !important; } }');
        if (cssStylesheet == null)
          null;
        else
          addRule(cssStylesheet, breakpointQuery + ' { .' + get_displayUntilClass(element) + ' { display: none !important; } }');
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new ComposableSingletons$BreakpointConditionsKt$lambda$321895361$3$$inlined$cache$2$1(cssStylesheet);
    };
  }
  function ComposableSingletons$BreakpointConditionsKt() {
    ComposableSingletons$BreakpointConditionsKt_instance = this;
    var tmp = this;
    tmp.n3a_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(321895361, false, ComposableSingletons$BreakpointConditionsKt$lambda$321895361$lambda));
  }
  var ComposableSingletons$BreakpointConditionsKt_instance;
  function ComposableSingletons$BreakpointConditionsKt_getInstance() {
    if (ComposableSingletons$BreakpointConditionsKt_instance == null)
      new ComposableSingletons$BreakpointConditionsKt();
    return ComposableSingletons$BreakpointConditionsKt_instance;
  }
  function invert(_this__u8e3s4) {
    return new Raw('not all and ' + toString(_this__u8e3s4));
  }
  function get_displayIfAtLeastClass(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'silk-display-if-at-least-' + _this__u8e3s4.k2_1.toLowerCase();
  }
  function get_displayUntilClass(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'silk-display-until-' + _this__u8e3s4.k2_1.toLowerCase();
  }
  function SilkBreakpointDisplayStyles$lambda($$changed) {
    return function ($composer, $force) {
      SilkBreakpointDisplayStyles($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Px$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Em$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Rem$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointValues$stable;
  function BreakpointValues(sm, md, lg, xl, xxl) {
    this.p3a_1 = sm;
    this.q3a_1 = md;
    this.r3a_1 = lg;
    this.s3a_1 = xl;
    this.t3a_1 = xxl;
  }
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + toString(this.p3a_1) + ', md=' + toString(this.q3a_1) + ', lg=' + toString(this.r3a_1) + ', xl=' + toString(this.s3a_1) + ', xxl=' + toString(this.t3a_1) + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.p3a_1);
    result = imul(result, 31) + hashCode(this.q3a_1) | 0;
    result = imul(result, 31) + hashCode(this.r3a_1) | 0;
    result = imul(result, 31) + hashCode(this.s3a_1) | 0;
    result = imul(result, 31) + hashCode(this.t3a_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    if (!equals(this.p3a_1, other.p3a_1))
      return false;
    if (!equals(this.q3a_1, other.q3a_1))
      return false;
    if (!equals(this.r3a_1, other.r3a_1))
      return false;
    if (!equals(this.s3a_1, other.s3a_1))
      return false;
    if (!equals(this.t3a_1, other.t3a_1))
      return false;
    return true;
  };
  function BreakpointSizes(sm, md, lg, xl, xxl) {
    xxl = xxl === VOID ? xl : xxl;
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl), new Rem(xxl));
  }
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
  }
  function BreakpointUnitValue(width) {
    this.u3a_1 = width;
  }
  var com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stable;
  var com_varabyte_kobweb_silk_style_layer_LayerListBuilder$stable;
  function LayerListBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.i37_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_entries_1();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var tmp$ret$1 = item.o39_1;
      destination.h(tmp$ret$1);
    }
    tmp_0.j37_1 = destination;
  }
  protoOf(LayerListBuilder).k37 = function () {
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = this.i37_1.w1(null);
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var layersToProcess = toMutableList(plus_0(this.j37_1, tmp$ret$0));
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!layersToProcess.l()) {
        break $l$loop;
      }
      var currLayer = layersToProcess.i2(0);
      this_0.h(currLayer);
      var tmp0_safe_receiver = this.i37_1.w1(currLayer);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        layersToProcess.e2(0, tmp0_safe_receiver);
      }
    }
    return this_0.s4();
  };
  var SilkLayer_RESET_instance;
  var SilkLayer_KOBWEB_COMPOSE_instance;
  var SilkLayer_BASE_instance;
  var SilkLayer_COMPONENT_STYLES_instance;
  var SilkLayer_COMPONENT_VARIANTS_instance;
  var SilkLayer_RESTRICTED_STYLES_instance;
  var SilkLayer_GENERAL_STYLES_instance;
  function values_1() {
    return [SilkLayer_RESET_getInstance(), SilkLayer_KOBWEB_COMPOSE_getInstance(), SilkLayer_BASE_getInstance(), SilkLayer_COMPONENT_STYLES_getInstance(), SilkLayer_COMPONENT_VARIANTS_getInstance(), SilkLayer_RESTRICTED_STYLES_getInstance(), SilkLayer_GENERAL_STYLES_getInstance()];
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var SilkLayer_entriesInitialized;
  function SilkLayer_initEntries() {
    if (SilkLayer_entriesInitialized)
      return Unit_instance;
    SilkLayer_entriesInitialized = true;
    SilkLayer_RESET_instance = new SilkLayer('RESET', 0, 'reset');
    SilkLayer_KOBWEB_COMPOSE_instance = new SilkLayer('KOBWEB_COMPOSE', 1, 'kobweb-compose');
    SilkLayer_BASE_instance = new SilkLayer('BASE', 2, 'base');
    SilkLayer_COMPONENT_STYLES_instance = new SilkLayer('COMPONENT_STYLES', 3, 'component-styles');
    SilkLayer_COMPONENT_VARIANTS_instance = new SilkLayer('COMPONENT_VARIANTS', 4, 'component-variants');
    SilkLayer_RESTRICTED_STYLES_instance = new SilkLayer('RESTRICTED_STYLES', 5, 'restricted-styles');
    SilkLayer_GENERAL_STYLES_instance = new SilkLayer('GENERAL_STYLES', 6, 'general-styles');
  }
  var $ENTRIES_1;
  function SilkLayer(name, ordinal, layerName) {
    Enum.call(this, name, ordinal);
    this.o39_1 = layerName;
  }
  function SilkLayer_RESET_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_RESET_instance;
  }
  function SilkLayer_KOBWEB_COMPOSE_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_KOBWEB_COMPOSE_instance;
  }
  function SilkLayer_BASE_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_BASE_instance;
  }
  function SilkLayer_COMPONENT_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_COMPONENT_STYLES_instance;
  }
  function SilkLayer_COMPONENT_VARIANTS_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_COMPONENT_VARIANTS_instance;
  }
  function SilkLayer_RESTRICTED_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_RESTRICTED_STYLES_instance;
  }
  function SilkLayer_GENERAL_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_GENERAL_STYLES_instance;
  }
  function descendants(_this__u8e3s4, elements, createModifier) {
    return _this__u8e3s4.u37(' :is(' + joinToString_0(elements) + ')', createModifier);
  }
  function get_link(_this__u8e3s4) {
    return new OfPseudoClass('link');
  }
  function get_visited(_this__u8e3s4) {
    return new OfPseudoClass('visited');
  }
  function get_hover(_this__u8e3s4) {
    return new OfPseudoClass('hover');
  }
  function get_ariaDisabled(_this__u8e3s4) {
    return new OfAttributeSelector('aria-disabled="true"');
  }
  function not(_this__u8e3s4, params) {
    return Companion_instance_4.h38('not', params.slice());
  }
  function get_active(_this__u8e3s4) {
    return new OfPseudoClass('active');
  }
  function get_focusVisible(_this__u8e3s4) {
    return new OfPseudoClass('focus-visible');
  }
  function get_placeholder(_this__u8e3s4) {
    return new OfPseudoElement('placeholder');
  }
  function get_ariaInvalid(_this__u8e3s4) {
    return new OfAttributeSelector('aria-invalid="true"');
  }
  function get_disabled(_this__u8e3s4) {
    return new OfPseudoClass('disabled');
  }
  function set__SilkTheme(_set____db54di) {
    _SilkTheme = _set____db54di;
  }
  var _SilkTheme;
  var com_varabyte_kobweb_silk_theme_MutableSilkTheme$stable;
  var com_varabyte_kobweb_silk_theme_ImmutableSilkTheme$stable;
  function _registerStyle($this, name, style, kind, layer) {
    // Inline function 'kotlin.let' call
    var it = $this.f36_1.w1(name);
    // Inline function 'kotlin.check' call
    if (!(it == null || it === style)) {
      var message = trimIndent('\n                Attempting to register a second CssStyle with a name that\'s already used: "' + name + '"\n\n                If this was an intentional override, you should use `replaceStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    $this.e36_1.a2(name, style);
    // Inline function 'kotlin.collections.set' call
    $this.i36_1.a2(style, name);
    var tmp;
    if (layer == null) {
      var tmp_0;
      if (kind.equals(getKClass(ComponentKind))) {
        tmp_0 = SilkLayer_COMPONENT_STYLES_getInstance();
      } else if (kind.equals(getKClass(RestrictedKind))) {
        tmp_0 = SilkLayer_RESTRICTED_STYLES_getInstance();
      } else if (kind.equals(getKClass(GeneralKind))) {
        tmp_0 = SilkLayer_GENERAL_STYLES_getInstance();
      } else {
        var message_0 = 'Unknown kind: ' + toString(kind);
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      tmp = tmp_0.o39_1;
    } else {
      tmp = layer;
    }
    var finalLayer = tmp;
    // Inline function 'kotlin.takeIf' call
    var tmp_1;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(finalLayer) > 0) {
      tmp_1 = finalLayer;
    } else {
      tmp_1 = null;
    }
    var tmp2_safe_receiver = tmp_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      $this.k36_1.a2(name, tmp2_safe_receiver);
    }
    if (style instanceof ExtendingCssStyle) {
      // Inline function 'kotlin.collections.getOrPut' call
      var this_0 = $this.o36_1;
      var value = this_0.w1(style);
      var tmp_2;
      if (value == null) {
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$();
        this_0.a2(style, answer);
        tmp_2 = answer;
      } else {
        tmp_2 = value;
      }
      tmp_2.h(style.x3a_1);
    }
  }
  function updateReplaced($this, originalStyle, newStyle) {
    // Inline function 'kotlin.collections.set' call
    $this.m36_1.a2(originalStyle, newStyle);
    var tmp0_safe_receiver = $this.o36_1.b2(originalStyle);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      $this.o36_1.a2(newStyle, tmp0_safe_receiver);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.o36_1.y1().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (element.d2(originalStyle)) {
        element.h(newStyle);
      }
    }
  }
  function MutableSilkTheme$replaceStyle$newStyle$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function MutableSilkTheme() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.e36_1 = LinkedHashMap_init_$Create$();
    this.f36_1 = this.e36_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.g36_1 = LinkedHashMap_init_$Create$();
    this.h36_1 = this.g36_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.i36_1 = LinkedHashMap_init_$Create$();
    this.j36_1 = this.i36_1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.k36_1 = LinkedHashMap_init_$Create$();
    this.l36_1 = this.k36_1;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.m36_1 = LinkedHashMap_init_$Create$();
    this.n36_1 = this.m36_1;
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.o36_1 = LinkedHashMap_init_$Create$();
    this.p36_1 = this.o36_1;
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.q36_1 = LinkedHashMap_init_$Create$();
    this.r36_1 = this.q36_1;
    var tmp_6 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_6.s36_1 = LinkedHashMap_init_$Create$();
    this.t36_1 = this.s36_1;
    this.u36_1 = new MutablePalettes();
    this.v36_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80), get_cssRem(96));
  }
  protoOf(MutableSilkTheme).y3a = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(ComponentKind), layer);
  };
  protoOf(MutableSilkTheme).w36 = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.y3a(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.y3a.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).z3a = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(RestrictedKind), layer);
  };
  protoOf(MutableSilkTheme).a3b = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.z3a(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.z3a.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).b3b = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(GeneralKind), layer);
  };
  protoOf(MutableSilkTheme).c3b = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.b3b(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.b3b.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).d3b = function (style, extraModifier, init) {
    var tmp0_elvis_lhs = this.j36_1.w1(style);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Attempting to replace a CSS style that was never registered.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var name = tmp;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.n36_1;
    // Inline function 'kotlin.check' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).u1(style)) {
      var message_0 = 'Attempting to override style "' + name + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var newStyle = new MutableSilkTheme$replaceStyle$newStyle$1(init, extraModifier);
    // Inline function 'kotlin.collections.set' call
    this.e36_1.a2(name, newStyle);
    // Inline function 'kotlin.collections.set' call
    this.i36_1.a2(newStyle, name);
    updateReplaced(this, style, newStyle);
  };
  protoOf(MutableSilkTheme).e3b = function (name, variant, layer) {
    var tmp0_elvis_lhs = variant instanceof SimpleCssStyleVariant ? variant : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'You can only register variants created by `addVariant` or `addVariantBase`.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var simpleVariant = tmp;
    var tmp_0;
    if (startsWith(name, _Char___init__impl__6a9atx(45))) {
      var tmp1_elvis_lhs = this.j36_1.w1(simpleVariant.e3a_1);
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var message_0 = 'When registering variant "' + name + '", somehow its base style was not registered correctly. This is not expected, so please report the issue.';
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var baseStyleName = tmp_1;
      tmp_0 = baseStyleName + name;
    } else {
      tmp_0 = name;
    }
    var name_0 = tmp_0;
    // Inline function 'kotlin.let' call
    var it = this.h36_1.w1(name_0);
    // Inline function 'kotlin.check' call
    if (!(it == null || it === variant)) {
      var message_1 = trimIndent('\n            Attempting to register a second variant with a name that\'s already used: "' + name_0 + "\"\n\n            This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n            consider filing an issue at https://github.com/varabyte/kobweb/issues\n        ");
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.set' call
    this.g36_1.a2(name_0, variant);
    var tmp0 = this.i36_1;
    // Inline function 'kotlin.collections.set' call
    var key = variant.d3a_1;
    tmp0.a2(key, name_0);
    // Inline function 'kotlin.takeIf' call
    var this_0 = layer == null ? SilkLayer_COMPONENT_VARIANTS_getInstance().o39_1 : layer;
    var tmp_2;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp_2 = this_0;
    } else {
      tmp_2 = null;
    }
    var finalLayer = tmp_2;
    if (finalLayer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.k36_1.a2(name_0, finalLayer);
    }
    if (variant instanceof ExtendingCssStyleVariant) {
      var tmp0_0 = this.o36_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var key_0 = variant.d3a_1;
      var value = tmp0_0.w1(key_0);
      var tmp_3;
      if (value == null) {
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$();
        tmp0_0.a2(key_0, answer);
        tmp_3 = answer;
      } else {
        tmp_3 = value;
      }
      tmp_3.h(variant.h3b_1.d3a_1);
    }
  };
  protoOf(MutableSilkTheme).i3b = function (name, variant, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.e3b(name, variant, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.e3b.call(this, name, variant, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).j3b = function (name, keyframes) {
    // Inline function 'kotlin.let' call
    var it = this.q36_1.w1(name);
    // Inline function 'kotlin.check' call
    if (!(it == null || it === keyframes)) {
      var message = trimIndent('\n                Attempting to register a second keyframes with a name that\'s already used: "' + name + '"\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.q36_1.a2(name, keyframes);
    // Inline function 'kotlin.collections.set' call
    this.s36_1.a2(keyframes, name);
  };
  function registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, style) {
    if (visited.t(style))
      return Unit_instance;
    visited.h(style);
    var tmp0_safe_receiver = $dependencies.w1(style);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp0_safe_receiver.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, element);
      }
    }
    orderedStyles.h(style);
  }
  function registerStylesInto$orderStyles(styles, dependencies) {
    if (dependencies.l())
      return styles;
    // Inline function 'kotlin.collections.mutableListOf' call
    var orderedStyles = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = styles.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      registerStylesInto$orderStyles$visit(visited, dependencies, orderedStyles, element);
    }
    return orderedStyles;
  }
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.x36_1 = mutableSilkTheme;
    var tmp = this;
    var tmp_0 = this.x36_1.u36_1;
    tmp.y36_1 = isInterface(tmp_0, Palettes) ? tmp_0 : THROW_CCE();
    this.z36_1 = this.x36_1.v36_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.a37_1 = LinkedHashMap_init_$Create$();
    this.b37_1 = this.a37_1;
  }
  protoOf(ImmutableSilkTheme).k3b = function (name) {
    return !(this.x36_1.f36_1.w1(name) == null);
  };
  protoOf(ImmutableSilkTheme).l3b = function (style) {
    return this.x36_1.j36_1.w1(style);
  };
  protoOf(ImmutableSilkTheme).c37 = function (silkStyleSheet) {
    // Inline function 'kotlin.check' call
    if (!!(_SilkTheme == null)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.x36_1.r36_1.z1().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.component1' call
      var name = element.s1();
      // Inline function 'kotlin.collections.component2' call
      var keyframes = element.t1();
      silkStyleSheet.w37(name, keyframes.h3a_1);
    }
  };
  protoOf(ImmutableSilkTheme).h37 = function (stylesheet) {
    // Inline function 'kotlin.check' call
    if (!!(_SilkTheme == null)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    var tmp = this.x36_1.f36_1.y1();
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = this.x36_1.h36_1.y1();
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (element instanceof SimpleCssStyleVariant) {
        destination.h(element);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
    var _iterator__ex2g4s_0 = destination.i();
    while (_iterator__ex2g4s_0.j()) {
      var item = _iterator__ex2g4s_0.k();
      var tmp$ret$3 = item.d3a_1;
      destination_0.h(tmp$ret$3);
    }
    var allCssStyles = plus_0(tmp, destination_0);
    var allCssStylesSorted = registerStylesInto$orderStyles(allCssStyles, this.x36_1.p36_1);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = allCssStylesSorted.i();
    while (_iterator__ex2g4s_1.j()) {
      var element_0 = _iterator__ex2g4s_1.k();
      var className = this.l3b(element_0);
      // Inline function 'kotlin.collections.get' call
      var this_0 = this.x36_1.l36_1;
      var layer = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).w1(className);
      var classSelectors = element_0.b39('.' + className, stylesheet, layer);
      var tmp0_0 = this.a37_1;
      // Inline function 'kotlin.collections.set' call
      var value = element_0.c39(classSelectors);
      tmp0_0.a2(element_0, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.x36_1.n36_1.z1().i();
    while (_iterator__ex2g4s_2.j()) {
      var element_1 = _iterator__ex2g4s_2.k();
      // Inline function 'kotlin.collections.component1' call
      var originalStyle = element_1.s1();
      // Inline function 'kotlin.collections.component2' call
      var overrideStyle = element_1.t1();
      var tmp0_1 = this.a37_1;
      // Inline function 'kotlin.collections.set' call
      var value_0 = getValue(this.a37_1, overrideStyle);
      tmp0_1.a2(originalStyle, value_0);
    }
  };
  function get_SilkTheme() {
    var tmp0_elvis_lhs = _SilkTheme;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "You can't access SilkTheme before first calling `prepareSilkFoundation` (or `SilkApp`, which calls it)";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function modifyStyleBase(_this__u8e3s4, style, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    modifyStyleBase_0(_this__u8e3s4, style, modifyStyleBase$lambda(extraModifier), init);
  }
  function modifyStyleBase_0(_this__u8e3s4, style, extraModifier, init) {
    modifyStyle(_this__u8e3s4, style, extraModifier, modifyStyleBase$lambda_0(init));
  }
  function modifyStyle(_this__u8e3s4, style, extraModifier, init) {
    var tmp0_elvis_lhs = _this__u8e3s4.j36_1.w1(style);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Attempting to modify a style that was never registered.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var styleName = tmp;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = _this__u8e3s4.f36_1;
    // Inline function 'kotlin.check' call
    if (!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).u1(styleName)) {
      var message_0 = 'Attempting to modify a style that was never registered: "' + styleName + '"';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var existingExtraModifier = style.y37_1;
    var existingInit = style.x37_1;
    var tmp_0 = modifyStyle$lambda(existingExtraModifier, extraModifier);
    _this__u8e3s4.d3b(style, tmp_0, modifyStyle$lambda_0(existingInit, init));
  }
  function modifyStyleBase$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.w12(-308722568);
      var tmp0 = $extraModifier;
      $composer_0.x12();
      return tmp0;
    };
  }
  function modifyStyleBase$lambda$lambda($this_modifyStyle, $init) {
    return function () {
      var tmp0 = new CssStyleBaseScope($this_modifyStyle.a39_1);
      // Inline function 'kotlin.let' call
      return $init(tmp0);
    };
  }
  function modifyStyleBase$lambda_0($init) {
    return function ($this$modifyStyle) {
      $this$modifyStyle.s37(modifyStyleBase$lambda$lambda($this$modifyStyle, $init));
      return Unit_instance;
    };
  }
  function modifyStyle$lambda($existingExtraModifier, $extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.w12(114003212);
      var tmp0 = $existingExtraModifier($composer_0, 0).m32($extraModifier($composer_0, 0));
      $composer_0.x12();
      return tmp0;
    };
  }
  function modifyStyle$lambda_0($existingInit, $init) {
    return function ($this$replaceStyle) {
      $existingInit($this$replaceStyle);
      $init($this$replaceStyle);
      return Unit_instance;
    };
  }
  function toWidth(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u3a_1;
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.l2_1) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().z36_1.p3a_1;
        break;
      case 2:
        tmp = get_SilkTheme().z36_1.q3a_1;
        break;
      case 3:
        tmp = get_SilkTheme().z36_1.r3a_1;
        break;
      case 4:
        tmp = get_SilkTheme().z36_1.s3a_1;
        break;
      case 5:
        tmp = get_SilkTheme().z36_1.t3a_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_rootColorModeState() {
    _init_properties_ColorMode_kt__lz79sc();
    var tmp0 = rootColorModeState$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('rootColorModeState', 0, tmp, _get_rootColorModeState_$ref_qbjldf(), null);
    return tmp0.t1();
  }
  var rootColorModeState$delegate;
  function get_LocalColorMode() {
    _init_properties_ColorMode_kt__lz79sc();
    return LocalColorMode;
  }
  var LocalColorMode;
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function Companion_6() {
  }
  protoOf(Companion_6).m3b = function ($composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.v13(this_0);
    sourceInformationMarkerEnd($composer_1);
    return tmp0;
  };
  protoOf(Companion_6).j35 = function ($composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.v13(this_0);
    sourceInformationMarkerEnd($composer_1);
    return tmp0.t1();
  };
  var Companion_instance_9;
  function Companion_getInstance_7() {
    return Companion_instance_9;
  }
  function values_2() {
    return [ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()];
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_instance;
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
  }
  var $ENTRIES_2;
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorMode).n3b = function () {
    return this.equals(ColorMode_LIGHT_getInstance());
  };
  protoOf(ColorMode).o3b = function () {
    return this.equals(ColorMode_DARK_getInstance());
  };
  protoOf(ColorMode).m35 = function () {
    var tmp;
    switch (this.l2_1) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorMode).p3b = function () {
    return get_LocalColorMode().u1n(mutableStateOf(this));
  };
  function suffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    var tmp = withColorModeSuffixRemoved(_this__u8e3s4);
    return tmp.h2k(suffixedWith$lambda(colorMode));
  }
  function get_cssClass(_this__u8e3s4) {
    _init_properties_ColorMode_kt__lz79sc();
    var tmp;
    switch (_this__u8e3s4.l2_1) {
      case 0:
        tmp = 'silk-light';
        break;
      case 1:
        tmp = 'silk-dark';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function isSuffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    return endsWith(_this__u8e3s4, toSuffix(colorMode));
  }
  function withColorModeSuffixRemoved(_this__u8e3s4) {
    _init_properties_ColorMode_kt__lz79sc();
    var tmp0_safe_receiver = get_colorModeSuffix(_this__u8e3s4);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = _this__u8e3s4.h2k(withColorModeSuffixRemoved$lambda(tmp0_safe_receiver));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function toSuffix(_this__u8e3s4) {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return '_' + _this__u8e3s4.k2_1.toLowerCase();
  }
  function get_colorModeSuffix(_this__u8e3s4) {
    _init_properties_ColorMode_kt__lz79sc();
    var self_0 = _this__u8e3s4;
    var tmp0 = get_entries_2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (isSuffixedWith(self_0, element)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function rootColorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_instance_2.i30().o37());
  }
  function _get_rootColorModeState_$ref_qbjldf() {
    return function () {
      return get_rootColorModeState();
    };
  }
  function LocalColorMode$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return get_rootColorModeState();
  }
  function suffixedWith$lambda($colorMode) {
    return function ($this$renamed) {
      return $this$renamed + toSuffix($colorMode);
    };
  }
  function withColorModeSuffixRemoved$lambda($colorMode) {
    return function ($this$renamed) {
      return removeSuffix($this$renamed, toSuffix($colorMode));
    };
  }
  function ColorMode_LIGHT_getInstance() {
    ColorMode_initEntries();
    return ColorMode_LIGHT_instance;
  }
  function ColorMode_DARK_getInstance() {
    ColorMode_initEntries();
    return ColorMode_DARK_instance;
  }
  var properties_initialized_ColorMode_kt_kbhp7u;
  function _init_properties_ColorMode_kt__lz79sc() {
    if (!properties_initialized_ColorMode_kt_kbhp7u) {
      properties_initialized_ColorMode_kt_kbhp7u = true;
      rootColorModeState$delegate = lazy(rootColorModeState$delegate$lambda);
      LocalColorMode = compositionLocalOf(VOID, LocalColorMode$lambda);
    }
  }
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Monochrome$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Red$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Pink$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Purple$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_DeepPurple$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Indigo$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Blue$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_LightBlue$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Cyan$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Teal$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Green$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_LightGreen$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Lime$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Yellow$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Amber$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Orange$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_DeepOrange$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Brown$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Gray$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes_BlueGray$stable;
  var com_varabyte_kobweb_silk_theme_colors_ColorPalettes$stable;
  function Red() {
    Red_instance = this;
    this.q3b_1 = Companion_instance_1.v33(16772078);
    this.r3b_1 = Companion_instance_1.v33(16764370);
    this.s3b_1 = Companion_instance_1.v33(15702682);
    this.t3b_1 = Companion_instance_1.v33(15037299);
    this.u3b_1 = Companion_instance_1.v33(15684432);
    this.v3b_1 = Companion_instance_1.v33(16007990);
    this.w3b_1 = Companion_instance_1.v33(15022389);
    this.x3b_1 = Companion_instance_1.v33(13840175);
    this.y3b_1 = Companion_instance_1.v33(12986408);
    this.z3b_1 = Companion_instance_1.v33(12000284);
  }
  var Red_instance;
  function Red_getInstance() {
    if (Red_instance == null)
      new Red();
    return Red_instance;
  }
  function Blue() {
    Blue_instance = this;
    this.a3c_1 = Companion_instance_1.v33(14938877);
    this.b3c_1 = Companion_instance_1.v33(12312315);
    this.c3c_1 = Companion_instance_1.v33(9489145);
    this.d3c_1 = Companion_instance_1.v33(6600182);
    this.e3c_1 = Companion_instance_1.v33(4367861);
    this.f3c_1 = Companion_instance_1.v33(2201331);
    this.g3c_1 = Companion_instance_1.v33(2001125);
    this.h3c_1 = Companion_instance_1.v33(1668818);
    this.i3c_1 = Companion_instance_1.v33(1402304);
    this.j3c_1 = Companion_instance_1.v33(870305);
  }
  var Blue_instance;
  function Blue_getInstance() {
    if (Blue_instance == null)
      new Blue();
    return Blue_instance;
  }
  function Gray() {
    Gray_instance = this;
    this.k3c_1 = Companion_instance_1.v33(16448250);
    this.l3c_1 = Companion_instance_1.v33(16119285);
    this.m3c_1 = Companion_instance_1.v33(15658734);
    this.n3c_1 = Companion_instance_1.v33(14737632);
    this.o3c_1 = Companion_instance_1.v33(12434877);
    this.p3c_1 = Companion_instance_1.v33(10395294);
    this.q3c_1 = Companion_instance_1.v33(7697781);
    this.r3c_1 = Companion_instance_1.v33(6381921);
    this.s3c_1 = Companion_instance_1.v33(4342338);
    this.t3c_1 = Companion_instance_1.v33(2171169);
  }
  var Gray_instance;
  function Gray_getInstance() {
    if (Gray_instance == null)
      new Gray();
    return Gray_instance;
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalettes$stable;
  function com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() {
    return com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stable;
  }
  function com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() {
    return com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable;
  }
  function MutablePalettes() {
    this.u3c_1 = new MutablePalette();
    this.v3c_1 = new MutablePalette();
  }
  protoOf(MutablePalettes).w3c = function () {
    return this.u3c_1;
  };
  protoOf(MutablePalettes).x3c = function () {
    return this.v3c_1;
  };
  function Palettes() {
  }
  function Palette() {
  }
  function EntryDelegate(palette, prefix) {
    prefix = prefix === VOID ? null : prefix;
    this.a3d_1 = palette;
    this.b3d_1 = prefix;
  }
  protoOf(EntryDelegate).k2w = function (thisRef, property) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.b3d_1;
    var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return getValue(this.a3d_1.c3d_1, tmp$ret$0 + property.callableName);
  };
  protoOf(EntryDelegate).d3d = function (thisRef, property, value) {
    var tmp0 = this.a3d_1.c3d_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.b3d_1;
    // Inline function 'kotlin.collections.set' call
    var key = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + property.callableName;
    tmp0.a2(key, value);
  };
  function ColorGroup(palette, groupName) {
    this.e3d_1 = palette;
    this.f3d_1 = groupName;
  }
  protoOf(ColorGroup).g3d = function () {
    return new EntryDelegate(this.e3d_1, this.f3d_1 + '.');
  };
  function MutablePalette() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.c3d_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(MutablePalette).ec = function (key) {
    return this.c3d_1.w1(key);
  };
  protoOf(MutablePalette).h3d = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.c3d_1.a2(key, value);
  };
  function toPalette(_this__u8e3s4) {
    return get_SilkTheme().y36_1.y3c(_this__u8e3s4);
  }
  var com_varabyte_kobweb_silk_theme_shapes_Path$stable;
  var com_varabyte_kobweb_silk_theme_shapes_CirclePath$stable;
  var com_varabyte_kobweb_silk_theme_shapes_PolygonPath$stable;
  var com_varabyte_kobweb_silk_theme_shapes_InsetPath$stable;
  var com_varabyte_kobweb_silk_theme_shapes_RectF$stable;
  var com_varabyte_kobweb_silk_theme_shapes_Rect$stable;
  var com_varabyte_kobweb_silk_theme_shapes_CircleF$stable;
  var com_varabyte_kobweb_silk_theme_shapes_Circle$stable;
  var com_varabyte_kobweb_silk_theme_shapes_PolygonF$stable;
  var com_varabyte_kobweb_silk_theme_shapes_Polygon$stable;
  function clip(_this__u8e3s4, shape) {
    var tmp0_safe_receiver = shape.i3d();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = styleModifier(_this__u8e3s4, clip$lambda(tmp0_safe_receiver));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function RectF_init_$Init$($this) {
    RectF_init_$Init$_0(get_px(0), $this);
    return $this;
  }
  function RectF_init_$Create$() {
    return RectF_init_$Init$(objectCreate(protoOf(RectF)));
  }
  function RectF_init_$Init$_0(cornerRadius, $this) {
    RectF.call($this, to(0.0, 0.0), to(100.0, 100.0), cornerRadius);
    return $this;
  }
  function RectF_init_$Init$_1(side, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(side, side), from100(to(side, side)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_0(side, cornerRadius) {
    return RectF_init_$Init$_1(side, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF(topLeft, botRight, cornerRadius) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    this.j3d_1 = topLeft;
    this.k3d_1 = botRight;
    this.l3d_1 = cornerRadius;
  }
  protoOf(RectF).i3d = function () {
    var tmp;
    if (!(this.j3d_1.je_1 === 0.0) || !(this.j3d_1.ke_1 === 0.0) || !(this.k3d_1.je_1 === 100.0) || !(this.k3d_1.ke_1 === 100.0) || !equals(this.l3d_1, get_px(0))) {
      tmp = new InsetPath(this.j3d_1, this.k3d_1, this.l3d_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Path() {
  }
  protoOf(Path).n3d = function (_this__u8e3s4) {
    return toString(_this__u8e3s4) + '%';
  };
  protoOf(Path).o3d = function (_this__u8e3s4) {
    return toString(_this__u8e3s4.je_1) + '% ' + toString(_this__u8e3s4.ke_1) + '%';
  };
  function from100(_this__u8e3s4) {
    return to(100.0 - _this__u8e3s4.je_1, 100.0 - _this__u8e3s4.ke_1);
  }
  function InsetPath(topLeft, botRight, roundness) {
    roundness = roundness === VOID ? get_px(0) : roundness;
    Path.call(this);
    this.p3d_1 = topLeft;
    this.q3d_1 = roundness;
    this.r3d_1 = from100(botRight);
  }
  protoOf(InsetPath).m3d = function () {
    // Inline function 'kotlin.takeIf' call
    var this_0 = this.q3d_1;
    var tmp;
    if (!equals(this_0, get_px(0))) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = 'round ' + toString(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    var roundnessPart = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var left = this.p3d_1.je_1;
    var top = this.p3d_1.ke_1;
    var right = this.r3d_1.je_1;
    var bottom = this.r3d_1.ke_1;
    var insetPart = left === top && right === bottom && left === right ? this.n3d(left) : left === right && top === bottom ? this.o3d(to(top, left)) : this.n3d(top) + ' ' + this.n3d(right) + ' ' + this.n3d(bottom) + ' ' + this.n3d(left);
    return 'inset(' + insetPart + roundnessPart + ')';
  };
  function clip$lambda($path) {
    return function ($this$styleModifier) {
      $this$styleModifier.r2n('clip-path', $path.m3d());
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(MutablePalettes).y3c = get;
  protoOf(MutablePalette).z3c = getValue_0;
  //endregion
  //region block: init
  Companion_instance_2 = new Companion();
  com_varabyte_kobweb_silk_init_CssStyleRegistrarImpl_Entry$stable = 0;
  com_varabyte_kobweb_silk_init_SilkStylesheetInstance$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_OfMedia$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_NonMediaCssRule$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_OfAttributeSelector$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_OfPseudoClass$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_OfPseudoElement$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_CompositeOpen$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_CompositeClosed$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule$stable = 8;
  Companion_instance_4 = new Companion_1();
  Companion_instance_5 = new Companion_2();
  Companion_instance_6 = new Companion_3();
  com_varabyte_kobweb_silk_style_CssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_SimpleCssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_ExtendingCssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_animation_KeyframesBuilder$stable = 8;
  com_varabyte_kobweb_silk_style_animation_Keyframes$stable = 8;
  Companion_instance_8 = new Companion_5();
  com_varabyte_kobweb_silk_style_breakpoint_Breakpoint_Range$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Px$stable = 8;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Em$stable = 8;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Rem$stable = 8;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointValues$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stable = 0;
  com_varabyte_kobweb_silk_style_layer_LayerListBuilder$stable = 8;
  _SilkTheme = null;
  com_varabyte_kobweb_silk_theme_MutableSilkTheme$stable = 8;
  com_varabyte_kobweb_silk_theme_ImmutableSilkTheme$stable = 8;
  Companion_instance_9 = new Companion_6();
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Monochrome$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Red$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Pink$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Purple$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_DeepPurple$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Indigo$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Blue$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_LightBlue$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Cyan$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Teal$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Green$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_LightGreen$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Lime$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Yellow$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Amber$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Orange$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_DeepOrange$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Brown$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_Gray$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes_BlueGray$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_ColorPalettes$stable = 0;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalettes$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_Path$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_CirclePath$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_PolygonPath$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_InsetPath$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_RectF$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_Rect$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_CircleF$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_Circle$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_PolygonF$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_Polygon$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DeferringHost;
  _.$_$.b = set_additionalSilkInitialization;
  _.$_$.c = registerStyleBase;
  _.$_$.d = Keyframes;
  _.$_$.e = get_entries_0;
  _.$_$.f = get_active;
  _.$_$.g = get_ariaDisabled;
  _.$_$.h = get_ariaInvalid;
  _.$_$.i = descendants;
  _.$_$.j = get_disabled;
  _.$_$.k = get_focusVisible;
  _.$_$.l = get_hover;
  _.$_$.m = get_link;
  _.$_$.n = not;
  _.$_$.o = get_placeholder;
  _.$_$.p = get_visited;
  _.$_$.q = Base;
  _.$_$.r = CssStyle_2;
  _.$_$.s = CssStyle_0;
  _.$_$.t = CssStyle_1;
  _.$_$.u = addVariantBase;
  _.$_$.v = addVariant;
  _.$_$.w = base_0;
  _.$_$.x = base_1;
  _.$_$.y = base;
  _.$_$.z = com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter;
  _.$_$.a1 = com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter;
  _.$_$.b1 = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter;
  _.$_$.c1 = toAttrs_0;
  _.$_$.d1 = toModifier;
  _.$_$.e1 = toModifier_0;
  _.$_$.f1 = get_useScope;
  _.$_$.g1 = ColorGroup;
  _.$_$.h1 = MutablePalette;
  _.$_$.i1 = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter;
  _.$_$.j1 = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter;
  _.$_$.k1 = toPalette;
  _.$_$.l1 = get_entries_2;
  _.$_$.m1 = get_cssClass;
  _.$_$.n1 = isSuffixedWith;
  _.$_$.o1 = suffixedWith;
  _.$_$.p1 = withColorModeSuffixRemoved;
  _.$_$.q1 = clip;
  _.$_$.r1 = get_SilkTheme;
  _.$_$.s1 = modifyStyleBase;
  _.$_$.t1 = ColorModeAware;
  _.$_$.u1 = SilkFoundationStyles;
  _.$_$.v1 = Breakpoint_MD_getInstance;
  _.$_$.w1 = ColorMode_DARK_getInstance;
  _.$_$.x1 = ColorMode_LIGHT_getInstance;
  _.$_$.y1 = Base_init_$Init$;
  _.$_$.z1 = RectF_init_$Create$_0;
  _.$_$.a2 = Companion_getInstance_1;
  _.$_$.b2 = Companion_instance_5;
  _.$_$.c2 = Companion_instance_9;
  _.$_$.d2 = Blue_getInstance;
  _.$_$.e2 = Gray_getInstance;
  _.$_$.f2 = Red_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-foundation.js.map
