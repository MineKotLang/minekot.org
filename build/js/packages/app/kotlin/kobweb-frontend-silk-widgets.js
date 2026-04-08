(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-silk-foundation.js', './androidx-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-silk-foundation.js'), require('./androidx-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    globalThis['kobweb-frontend-silk-widgets'] = factory(typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['html-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-silk-foundation'], globalThis['androidx-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core'], globalThis['kobweb-frontend-browser-ext']);
  }
}(function (_, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var KProperty1 = kotlin_kotlin.$_$.l8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.f7;
  var protoOf = kotlin_kotlin.$_$.y7;
  var initMetadataForObject = kotlin_kotlin.$_$.n7;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n3;
  var listOf = kotlin_kotlin.$_$.e4;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o3;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var VOID = kotlin_kotlin.$_$.c;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i3;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b2;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var CssStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var objectCreate = kotlin_kotlin.$_$.x7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j7;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var Base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var initMetadataForClass = kotlin_kotlin.$_$.i7;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.a;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var marginBlock = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var Companion_instance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var alignItems = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Companion_instance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var descendants = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var marginBlock_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var Base_init_$Init$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y1;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p3;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var boxShadow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var Companion_instance_13 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var Companion_instance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z1;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var Companion_instance_15 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w2;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var Companion_instance_16 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r3;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.sa;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var Circle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var SVGStrokeLineCap_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var overflow_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ab;
  var SVGStrokeType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var SVGFillType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n2;
  var SVGFillType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var SVGStrokeType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var Hr = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c3;
  var mapCapacity = kotlin_kotlin.$_$.f4;
  var coerceAtLeast = kotlin_kotlin.$_$.b8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var get_cssClass = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a2;
  var get_useScope = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_androidx_compose_runtime_runtime.$_$.m;
  var CompositionLocalProvider = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var KMutableProperty0 = kotlin_kotlin.$_$.i8;
  var getLocalDelegateReference = kotlin_kotlin.$_$.d7;
  var CoroutineImpl = kotlin_kotlin.$_$.u5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isInterface = kotlin_kotlin.$_$.q7;
  var asList = kotlin_kotlin.$_$.hb;
  var CssIdent = kotlin_com_varabyte_kobweb_browser_ext.$_$.a;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var isSuffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var get_SilkTheme = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var withColorModeSuffixRemoved = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var initMetadataForLambda = kotlin_kotlin.$_$.m7;
  var Companion_instance_17 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c2;
  var LaunchedEffect = kotlin_androidx_compose_runtime_runtime.$_$.k;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d2;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e2;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f2;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var get_entries_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var Companion_instance_18 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var colorScheme = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var KProperty0 = kotlin_kotlin.$_$.k8;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var KMutableProperty1 = kotlin_kotlin.$_$.j8;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(TabVars, 'TabVars');
  initMetadataForObject(CalloutVars, 'CalloutVars');
  initMetadataForCompanion(Companion);
  initMetadataForClass(CalloutType, 'CalloutType', VOID, Base);
  initMetadataForObject(ComposableSingletons$CalloutKt, 'ComposableSingletons$CalloutKt');
  initMetadataForObject(ButtonVars, 'ButtonVars');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ButtonSize, 'ButtonSize', VOID, Base);
  initMetadataForObject(CheckboxVars, 'CheckboxVars');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CheckboxSize, 'CheckboxSize', VOID, Base);
  initMetadataForObject(InputVars, 'InputVars');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(InputSize, 'InputSize', VOID, Base);
  initMetadataForObject(SwitchVars, 'SwitchVars');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SwitchSize, 'SwitchSize', VOID, Base);
  initMetadataForObject(ComposableSingletons$ExclaimIconKt, 'ComposableSingletons$ExclaimIconKt');
  initMetadataForObject(ComposableSingletons$InfoIconKt, 'ComposableSingletons$InfoIconKt');
  initMetadataForObject(ComposableSingletons$LightbulbIconKt, 'ComposableSingletons$LightbulbIconKt');
  initMetadataForObject(ComposableSingletons$QuestionIconKt, 'ComposableSingletons$QuestionIconKt');
  initMetadataForObject(ComposableSingletons$QuoteIconKt, 'ComposableSingletons$QuoteIconKt');
  initMetadataForObject(ComposableSingletons$StopIconKt, 'ComposableSingletons$StopIconKt');
  initMetadataForObject(ComposableSingletons$WarningIconKt, 'ComposableSingletons$WarningIconKt');
  initMetadataForClass(Fill, 'Fill', Fill);
  initMetadataForClass(Stroke, 'Stroke', Stroke);
  initMetadataForObject(DividerVars, 'DividerVars');
  initMetadataForObject(SurfaceVars, 'SurfaceVars');
  initMetadataForClass(Surface$$inlined$cache$2$2$1);
  initMetadataForLambda(Surface$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(OverlayVars, 'OverlayVars');
  initMetadataForObject(PopupVars, 'PopupVars');
  initMetadataForObject(TooltipVars, 'TooltipVars');
  initMetadataForObject(TransitionDurationVars, 'TransitionDurationVars');
  initMetadataForObject(FontSizeVars, 'FontSizeVars');
  initMetadataForObject(BorderRadiusVars, 'BorderRadiusVars');
  initMetadataForClass(MutableButton, 'MutableButton', VOID, ColorGroup);
  initMetadataForClass(MutableCallout, 'MutableCallout', VOID, ColorGroup);
  initMetadataForClass(MutableCheckbox, 'MutableCheckbox', VOID, ColorGroup);
  initMetadataForClass(MutableInput, 'MutableInput', VOID, ColorGroup);
  initMetadataForClass(MutableSwitch, 'MutableSwitch', VOID, ColorGroup);
  initMetadataForClass(MutableTab, 'MutableTab', VOID, ColorGroup);
  initMetadataForClass(MutableTooltip, 'MutableTooltip', VOID, ColorGroup);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle;
  }
  var TabsStyle;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle;
  }
  var TabsTabRowStyle;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle;
  }
  var TabsTabStyle;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle;
  }
  var TabsPanelStyle;
  var com_varabyte_kobweb_silk_components_disclosure_TabVars$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_PanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable;
  function TabVars$_get_Color_$ref_chk8zq() {
    return function (p0) {
      return p0.y3f();
    };
  }
  function TabVars$_get_BorderColor_$ref_tz611i() {
    return function (p0) {
      return p0.z3f();
    };
  }
  function TabVars$_get_BackgroundColor_$ref_b468g8() {
    return function (p0) {
      return p0.a3g();
    };
  }
  function TabVars$_get_DisabledBackgroundColor_$ref_r6n4kk() {
    return function (p0) {
      return p0.b3g();
    };
  }
  function TabVars$_get_HoverBackgroundColor_$ref_y2gnb8() {
    return function (p0) {
      return p0.c3g();
    };
  }
  function TabVars$_get_PressedBackgroundColor_$ref_yty52() {
    return function (p0) {
      return p0.d3g();
    };
  }
  function TabVars$_get_BorderThickness_$ref_94q7qj() {
    return function (p0) {
      return p0.e3g();
    };
  }
  function TabVars$_get_ColorTransitionDuration_$ref_2jc6z3() {
    return function (p0) {
      return p0.f3g();
    };
  }
  function TabVars() {
    TabVars_instance = this;
    this.q3f_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().o2x();
    tmp.r3f_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.s3f_1 = StyleVariable('silk');
    this.t3f_1 = StyleVariable('silk');
    this.u3f_1 = StyleVariable('silk');
    this.v3f_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.w3f_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().o3g().o2x();
    tmp_1.x3f_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(TabVars).y3f = function () {
    var tmp = KProperty1;
    return this.q3f_1.u2x(this, getPropertyCallableRef('Color', 1, tmp, TabVars$_get_Color_$ref_chk8zq(), null));
  };
  protoOf(TabVars).z3f = function () {
    var tmp = KProperty1;
    return this.r3f_1.u2x(this, getPropertyCallableRef('BorderColor', 1, tmp, TabVars$_get_BorderColor_$ref_tz611i(), null));
  };
  protoOf(TabVars).a3g = function () {
    var tmp = KProperty1;
    return this.s3f_1.u2x(this, getPropertyCallableRef('BackgroundColor', 1, tmp, TabVars$_get_BackgroundColor_$ref_b468g8(), null));
  };
  protoOf(TabVars).b3g = function () {
    var tmp = KProperty1;
    return this.t3f_1.u2x(this, getPropertyCallableRef('DisabledBackgroundColor', 1, tmp, TabVars$_get_DisabledBackgroundColor_$ref_r6n4kk(), null));
  };
  protoOf(TabVars).c3g = function () {
    var tmp = KProperty1;
    return this.u3f_1.u2x(this, getPropertyCallableRef('HoverBackgroundColor', 1, tmp, TabVars$_get_HoverBackgroundColor_$ref_y2gnb8(), null));
  };
  protoOf(TabVars).d3g = function () {
    var tmp = KProperty1;
    return this.v3f_1.u2x(this, getPropertyCallableRef('PressedBackgroundColor', 1, tmp, TabVars$_get_PressedBackgroundColor_$ref_yty52(), null));
  };
  protoOf(TabVars).e3g = function () {
    var tmp = KProperty1;
    return this.w3f_1.u2x(this, getPropertyCallableRef('BorderThickness', 1, tmp, TabVars$_get_BorderThickness_$ref_94q7qj(), null));
  };
  protoOf(TabVars).f3g = function () {
    var tmp = KProperty1;
    return this.x3f_1.u2x(this, getPropertyCallableRef('ColorTransitionDuration', 1, tmp, TabVars$_get_ColorTransitionDuration_$ref_2jc6z3(), null));
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$lambda($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_instance;
  }
  function TabsTabRowStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_instance);
    var tmp_0 = TabVars_getInstance().e3g().o2x();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().z3f().o2x());
  }
  function TabsTabStyle$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.w12(2044107546);
    var tmp0 = tabIndex(Companion_instance, 0);
    $composer_0.x12();
    return tmp0;
  }
  function TabsTabStyle$lambda_0($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$CssStyle.c39(TabsTabStyle$lambda$lambda);
    var tmp = get_ariaDisabled($this$CssStyle);
    $this$CssStyle.f3b(tmp, TabsTabStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle).b3a(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.f3b(tmp_0, TabsTabStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).b3a(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.f3b(tmp_1, TabsTabStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function TabsTabStyle$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_instance, Companion_instance_1.l2v()), Companion_instance_2.f2y(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().f3g().o2x())), TabVars_getInstance().a3g().o2x()), TabVars_getInstance().y3f().o2x()), Companion_instance_3.n2v()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().e3g().o2x();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().z3f().o2x());
  }
  function TabsTabStyle$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.g2y(TabVars_getInstance().e3g().o2x());
  }
  function TabsTabStyle$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_instance, TabVars_getInstance().b3g().o2x()), Companion_instance_1.m2v());
  }
  function TabsTabStyle$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().c3g().o2x());
  }
  function TabsTabStyle$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().d3g().o2x());
  }
  function TabsPanelStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_instance, get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$lambda$lambda);
  }
  function TabsPanelStyle$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.s36(Companion_instance_4.b2x());
    return Unit_instance;
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle = CssStyle(VOID, TabsStyle$lambda);
      var tmp = Companion_instance_5;
      TabsTabRowStyle = base(tmp, VOID, TabsTabRowStyle$lambda);
      var tmp_0 = TabsTabStyle$lambda;
      TabsTabStyle = CssStyle_0(tmp_0, TabsTabStyle$lambda_0);
      var tmp_1 = Companion_instance_5;
      TabsPanelStyle = base(tmp_1, VOID, TabsPanelStyle$lambda);
      com_varabyte_kobweb_silk_components_disclosure_TabVars$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabData$stable = 0;
      com_varabyte_kobweb_silk_components_disclosure_PanelData$stable = 0;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable = 0;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable = 8;
    }
  }
  function get_CalloutStyle() {
    _init_properties_Callout_kt__ksu682();
    return CalloutStyle;
  }
  var CalloutStyle;
  function get_LeftBorderedCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return LeftBorderedCalloutVariant;
  }
  var LeftBorderedCalloutVariant;
  function get_LeftBorderedFilledCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return LeftBorderedFilledCalloutVariant;
  }
  var LeftBorderedFilledCalloutVariant;
  function get_OutlinedCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return OutlinedCalloutVariant;
  }
  var OutlinedCalloutVariant;
  function get_OutlinedFilledCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return OutlinedFilledCalloutVariant;
  }
  var OutlinedFilledCalloutVariant;
  function get_MatchingLinkCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return MatchingLinkCalloutVariant;
  }
  var MatchingLinkCalloutVariant;
  var com_varabyte_kobweb_silk_components_display_CalloutVars$stable;
  var com_varabyte_kobweb_silk_components_display_CalloutType$stable;
  var com_varabyte_kobweb_silk_components_display_CalloutDefaults$stable;
  function CalloutVars$_get_Color_$ref_c79x0r() {
    return function (p0) {
      return p0.y3f();
    };
  }
  function CalloutVars$_get_BackgroundColor_$ref_6qzwbh() {
    return function (p0) {
      return p0.a3g();
    };
  }
  function CalloutVars$_get_TitleFontSize_$ref_d27e7k() {
    return function (p0) {
      return p0.u3g();
    };
  }
  function CalloutVars$_get_TitleGap_$ref_ygrq2s() {
    return function (p0) {
      return p0.v3g();
    };
  }
  function CalloutVars$_get_TitleLineHeight_$ref_1mexdx() {
    return function (p0) {
      return p0.w3g();
    };
  }
  function CalloutVars() {
    CalloutVars_instance = this;
    this.p3g_1 = StyleVariable('silk');
    this.q3g_1 = StyleVariable('silk');
    this.r3g_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.5);
    tmp.s3g_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.t3g_1 = StyleVariable_2(1, 'silk');
  }
  protoOf(CalloutVars).y3f = function () {
    var tmp = KProperty1;
    return this.p3g_1.u2x(this, getPropertyCallableRef('Color', 1, tmp, CalloutVars$_get_Color_$ref_c79x0r(), null));
  };
  protoOf(CalloutVars).a3g = function () {
    var tmp = KProperty1;
    return this.q3g_1.u2x(this, getPropertyCallableRef('BackgroundColor', 1, tmp, CalloutVars$_get_BackgroundColor_$ref_6qzwbh(), null));
  };
  protoOf(CalloutVars).u3g = function () {
    var tmp = KProperty1;
    return this.r3g_1.u2x(this, getPropertyCallableRef('TitleFontSize', 1, tmp, CalloutVars$_get_TitleFontSize_$ref_d27e7k(), null));
  };
  protoOf(CalloutVars).v3g = function () {
    var tmp = KProperty1;
    return this.s3g_1.u2x(this, getPropertyCallableRef('TitleGap', 1, tmp, CalloutVars$_get_TitleGap_$ref_ygrq2s(), null));
  };
  protoOf(CalloutVars).w3g = function () {
    var tmp = KProperty1;
    return this.t3g_1.u2x(this, getPropertyCallableRef('TitleLineHeight', 1, tmp, CalloutVars$_get_TitleLineHeight_$ref_1mexdx(), null));
  };
  var CalloutVars_instance;
  function CalloutVars_getInstance() {
    if (CalloutVars_instance == null)
      new CalloutVars();
    return CalloutVars_instance;
  }
  function removeEdgeParagraphSpacing(_this__u8e3s4) {
    _init_properties_Callout_kt__ksu682();
    _this__u8e3s4.e39(' > .callout-body > p:first-child', removeEdgeParagraphSpacing$lambda);
    _this__u8e3s4.e39(' > .callout-body > p:last-child', removeEdgeParagraphSpacing$lambda_0);
  }
  function CalloutType$Companion$CAUTION$lambda(it) {
    return get_callout_0(toPalette(it)).x3g();
  }
  function CalloutType$Companion$IMPORTANT$lambda(it) {
    return get_callout_0(toPalette(it)).y3g();
  }
  function CalloutType$Companion$NOTE$lambda(it) {
    return get_callout_0(toPalette(it)).z3g();
  }
  function CalloutType$Companion$QUESTION$lambda(it) {
    return get_callout_0(toPalette(it)).a3h();
  }
  function CalloutType$Companion$QUOTE$lambda(it) {
    return get_callout_0(toPalette(it)).b3h();
  }
  function CalloutType$Companion$TIP$lambda(it) {
    return get_callout_0(toPalette(it)).c3h();
  }
  function CalloutType$Companion$WARNING$lambda(it) {
    return get_callout_0(toPalette(it)).d3h();
  }
  function CalloutType_init_$Init$(icon, label, provideColor, $this) {
    var tmp = CalloutType$_init_$lambda_4upqpt_0(provideColor);
    CalloutType.call($this, icon, label, tmp, CalloutType$_init_$lambda_4upqpt_1(provideColor));
    return $this;
  }
  function CalloutType_init_$Create$(icon, label, provideColor) {
    return CalloutType_init_$Init$(icon, label, provideColor, objectCreate(protoOf(CalloutType)));
  }
  function Companion() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = ComposableSingletons$CalloutKt_getInstance().e3h_1;
    tmp.l3h_1 = CalloutType_init_$Create$(tmp_0, 'Caution', CalloutType$Companion$CAUTION$lambda);
    var tmp_1 = this;
    var tmp_2 = ComposableSingletons$CalloutKt_getInstance().f3h_1;
    tmp_1.m3h_1 = CalloutType_init_$Create$(tmp_2, 'Important', CalloutType$Companion$IMPORTANT$lambda);
    var tmp_3 = this;
    var tmp_4 = ComposableSingletons$CalloutKt_getInstance().g3h_1;
    tmp_3.n3h_1 = CalloutType_init_$Create$(tmp_4, 'Note', CalloutType$Companion$NOTE$lambda);
    var tmp_5 = this;
    var tmp_6 = ComposableSingletons$CalloutKt_getInstance().h3h_1;
    tmp_5.o3h_1 = CalloutType_init_$Create$(tmp_6, 'Question', CalloutType$Companion$QUESTION$lambda);
    var tmp_7 = this;
    var tmp_8 = ComposableSingletons$CalloutKt_getInstance().i3h_1;
    tmp_7.p3h_1 = CalloutType_init_$Create$(tmp_8, 'Quote', CalloutType$Companion$QUOTE$lambda);
    var tmp_9 = this;
    var tmp_10 = ComposableSingletons$CalloutKt_getInstance().j3h_1;
    tmp_9.q3h_1 = CalloutType_init_$Create$(tmp_10, 'Tip', CalloutType$Companion$TIP$lambda);
    var tmp_11 = this;
    var tmp_12 = ComposableSingletons$CalloutKt_getInstance().k3h_1;
    tmp_11.r3h_1 = CalloutType_init_$Create$(tmp_12, 'Warning', CalloutType$Companion$WARNING$lambda);
  }
  var Companion_instance_19;
  function Companion_getInstance_1() {
    if (Companion_instance_19 == null)
      new Companion();
    return Companion_instance_19;
  }
  function CalloutType$_init_$lambda_4upqpt($provideColor, $provideBackgroundColor) {
    return function (_this__u8e3s4) {
      return setVariable(setVariable(Companion_instance, CalloutVars_getInstance().y3f(), $provideColor(_this__u8e3s4.d3b_1)), CalloutVars_getInstance().a3g(), $provideBackgroundColor(_this__u8e3s4.d3b_1));
    };
  }
  function CalloutType$_init_$lambda_4upqpt_0($provideColor) {
    return function (it) {
      return $provideColor(it);
    };
  }
  function CalloutType$_init_$lambda_4upqpt_1($provideColor) {
    return function (it) {
      return $provideColor(it).y34().v34(VOID, VOID, VOID, it.x3c() ? 0.15 : 0.2);
    };
  }
  function CalloutType(icon, label, provideColor, provideBackgroundColor) {
    Companion_getInstance_1();
    Base.call(this, CalloutType$_init_$lambda_4upqpt(provideColor, provideBackgroundColor));
    this.u3h_1 = icon;
    this.v3h_1 = label;
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$CalloutKt$lambda$1105541261$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
      StopIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_700737724$lambda_78p56o($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
      ExclaimIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_1510536654$lambda_g5bhof($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
      InfoIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_2086387290$lambda_cn27wu($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
      QuestionIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$CalloutKt$lambda$1974337438$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
      QuoteIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_613517763$lambda_5n9r8($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
      LightbulbIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$CalloutKt$lambda$2087814270$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
      WarningIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CalloutKt() {
    ComposableSingletons$CalloutKt_instance = this;
    var tmp = this;
    tmp.e3h_1 = ComposableLambda$invoke$ref(composableLambdaInstance(1105541261, false, ComposableSingletons$CalloutKt$lambda$1105541261$lambda));
    var tmp_0 = this;
    tmp_0.f3h_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-700737724, false, ComposableSingletons$CalloutKt$lambda$_700737724$lambda_78p56o));
    var tmp_1 = this;
    tmp_1.g3h_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1510536654, false, ComposableSingletons$CalloutKt$lambda$_1510536654$lambda_g5bhof));
    var tmp_2 = this;
    tmp_2.h3h_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-2086387290, false, ComposableSingletons$CalloutKt$lambda$_2086387290$lambda_cn27wu));
    var tmp_3 = this;
    tmp_3.i3h_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(1974337438, false, ComposableSingletons$CalloutKt$lambda$1974337438$lambda));
    var tmp_4 = this;
    tmp_4.j3h_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-613517763, false, ComposableSingletons$CalloutKt$lambda$_613517763$lambda_5n9r8));
    var tmp_5 = this;
    tmp_5.k3h_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(2087814270, false, ComposableSingletons$CalloutKt$lambda$2087814270$lambda));
  }
  var ComposableSingletons$CalloutKt_instance;
  function ComposableSingletons$CalloutKt_getInstance() {
    if (ComposableSingletons$CalloutKt_instance == null)
      new ComposableSingletons$CalloutKt();
    return ComposableSingletons$CalloutKt_instance;
  }
  function CalloutStyle$lambda($this$CssStyle) {
    _init_properties_Callout_kt__ksu682();
    $this$CssStyle.c39(CalloutStyle$lambda$lambda);
    $this$CssStyle.e39(' >.callout-title', CalloutStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function CalloutStyle$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return marginBlock(textAlign(Companion_instance, Companion_instance_6.x2u()), get_em(1));
  }
  function CalloutStyle$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return lineHeight(gap(fontSize(fontWeight(alignItems(display(tmp, 'flex'), Companion_instance_8.w2u()), Companion_instance_9.o2v()), CalloutVars_getInstance().u3g().o2x()), CalloutVars_getInstance().v3g().o2x()), CalloutVars_getInstance().w3g().o2x());
  }
  function LeftBorderedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.c39(LeftBorderedCalloutVariant$lambda$lambda);
    $this$addVariant.e39(' >.callout-title', LeftBorderedCalloutVariant$lambda$lambda_0);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_instance;
  }
  function LeftBorderedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding_0(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().y3f().o2x()), get_cssRem(0.5), get_cssRem(1));
  }
  function LeftBorderedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().y3f().o2x());
    return margin_0(tmp, LeftBorderedCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.m36(get_cssRem(1));
    return Unit_instance;
  }
  function LeftBorderedFilledCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.c39(LeftBorderedFilledCalloutVariant$lambda$lambda);
    $this$addVariant.e39(' >.callout-title', LeftBorderedFilledCalloutVariant$lambda$lambda_0);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_instance;
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(padding_0(borderRadius(backgroundColor(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().y3f().o2x()), CalloutVars_getInstance().a3g().o2x()), get_px(4)), get_cssRem(0.75), get_cssRem(1)), [Companion_instance_10.a2v(get_px(0), get_px(1), get_px(2), VOID, Colors_instance.k35().v34(VOID, VOID, VOID, 0.12)), Companion_instance_10.a2v(get_px(0), get_px(3), get_px(10), VOID, Colors_instance.k35().v34(VOID, VOID, VOID, 0.08))]);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().y3f().o2x());
    return margin_0(tmp, LeftBorderedFilledCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.m36(get_cssRem(0.75));
    return Unit_instance;
  }
  function OutlinedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.c39(OutlinedCalloutVariant$lambda$lambda);
    $this$addVariant.e39(' >.callout-title', OutlinedCalloutVariant$lambda$lambda_0);
    $this$addVariant.e39(' .callout-icon', OutlinedCalloutVariant$lambda$lambda_1);
    $this$addVariant.e39(' >.callout-body', OutlinedCalloutVariant$lambda$lambda_2);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_instance;
  }
  function OutlinedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderRadius(border(tmp, tmp_0, 'solid', CalloutVars_getInstance().y3f().o2x()), get_cssRem(0.2));
  }
  function OutlinedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(backgroundColor(Companion_instance, CalloutVars_getInstance().a3g().o2x()), get_cssRem(0.75), get_cssRem(0.75));
  }
  function OutlinedCalloutVariant$lambda$lambda_1() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_instance, CalloutVars_getInstance().y3f().o2x());
  }
  function OutlinedCalloutVariant$lambda$lambda_2() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(Companion_instance, get_cssRem(0.75), get_cssRem(0.75));
  }
  function OutlinedFilledCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.c39(OutlinedFilledCalloutVariant$lambda$lambda);
    $this$addVariant.e39(' >.callout-title', OutlinedFilledCalloutVariant$lambda$lambda_0);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_instance;
  }
  function OutlinedFilledCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding(borderRadius(backgroundColor(border(tmp, tmp_0, 'solid', CalloutVars_getInstance().y3f().o2x()), CalloutVars_getInstance().a3g().o2x()), get_px(4)), get_cssRem(0.75));
  }
  function OutlinedFilledCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().y3f().o2x());
    return margin_0(tmp, OutlinedFilledCalloutVariant$lambda$lambda$lambda);
  }
  function OutlinedFilledCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.m36(get_cssRem(0.75));
    return Unit_instance;
  }
  function MatchingLinkCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    descendants($this$addVariant, [':any-link'], MatchingLinkCalloutVariant$lambda$lambda);
    return Unit_instance;
  }
  function MatchingLinkCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_instance, CalloutVars_getInstance().y3f().o2x());
  }
  function removeEdgeParagraphSpacing$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    return marginBlock_0(tmp, removeEdgeParagraphSpacing$lambda$lambda);
  }
  function removeEdgeParagraphSpacing$lambda$lambda($this$marginBlock) {
    _init_properties_Callout_kt__ksu682();
    $this$marginBlock.o36(get_px(0));
    return Unit_instance;
  }
  function removeEdgeParagraphSpacing$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    return marginBlock_0(tmp, removeEdgeParagraphSpacing$lambda$lambda_0);
  }
  function removeEdgeParagraphSpacing$lambda$lambda_0($this$marginBlock) {
    _init_properties_Callout_kt__ksu682();
    $this$marginBlock.p36(get_px(0));
    return Unit_instance;
  }
  var properties_initialized_Callout_kt_nor0bk;
  function _init_properties_Callout_kt__ksu682() {
    if (!properties_initialized_Callout_kt_nor0bk) {
      properties_initialized_Callout_kt_nor0bk = true;
      CalloutStyle = CssStyle(VOID, CalloutStyle$lambda);
      var tmp = get_CalloutStyle();
      LeftBorderedCalloutVariant = addVariant(tmp, VOID, LeftBorderedCalloutVariant$lambda);
      var tmp_0 = get_CalloutStyle();
      LeftBorderedFilledCalloutVariant = addVariant(tmp_0, VOID, LeftBorderedFilledCalloutVariant$lambda);
      var tmp_1 = get_CalloutStyle();
      OutlinedCalloutVariant = addVariant(tmp_1, VOID, OutlinedCalloutVariant$lambda);
      var tmp_2 = get_CalloutStyle();
      OutlinedFilledCalloutVariant = addVariant(tmp_2, VOID, OutlinedFilledCalloutVariant$lambda);
      var tmp_3 = get_CalloutStyle();
      MatchingLinkCalloutVariant = addVariant(tmp_3, VOID, MatchingLinkCalloutVariant$lambda);
      com_varabyte_kobweb_silk_components_display_CalloutVars$stable = 8;
      com_varabyte_kobweb_silk_components_display_CalloutType$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
      com_varabyte_kobweb_silk_components_display_CalloutDefaults$stable = com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter();
    }
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle;
  }
  var ButtonStyle;
  var com_varabyte_kobweb_silk_components_forms_ButtonVars$stable;
  var com_varabyte_kobweb_silk_components_forms_ButtonSize$stable;
  function ButtonVars$_get_BackgroundDefaultColor_$ref_p4munk() {
    return function (p0) {
      return p0.f3i();
    };
  }
  function ButtonVars$_get_BackgroundFocusColor_$ref_4ogjpj() {
    return function (p0) {
      return p0.g3i();
    };
  }
  function ButtonVars$_get_BackgroundHoverColor_$ref_sxwca3() {
    return function (p0) {
      return p0.h3i();
    };
  }
  function ButtonVars$_get_BackgroundPressedColor_$ref_ig9prj() {
    return function (p0) {
      return p0.i3i();
    };
  }
  function ButtonVars$_get_Color_$ref_90hsrb() {
    return function (p0) {
      return p0.y3f();
    };
  }
  function ButtonVars$_get_ColorTransitionDuration_$ref_7uf2ku() {
    return function (p0) {
      return p0.f3g();
    };
  }
  function ButtonVars$_get_FontSize_$ref_o5ikts() {
    return function (p0) {
      return p0.j3i();
    };
  }
  function ButtonVars$_get_Height_$ref_re4w87() {
    return function (p0) {
      return p0.k3i();
    };
  }
  function ButtonVars$_get_PaddingHorizontal_$ref_uqasd7() {
    return function (p0) {
      return p0.l3i();
    };
  }
  function ButtonVars() {
    ButtonVars_instance = this;
    this.w3h_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().o2x();
    tmp.x3h_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.y3h_1 = StyleVariable('silk');
    this.z3h_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().o2x();
    tmp_0.a3i_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().o3g().o2x();
    tmp_1.b3i_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.c3i_1 = StyleVariable('silk');
    this.d3i_1 = StyleVariable('silk');
    this.e3i_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).f3i = function () {
    var tmp = KProperty1;
    return this.w3h_1.u2x(this, getPropertyCallableRef('BackgroundDefaultColor', 1, tmp, ButtonVars$_get_BackgroundDefaultColor_$ref_p4munk(), null));
  };
  protoOf(ButtonVars).g3i = function () {
    var tmp = KProperty1;
    return this.x3h_1.u2x(this, getPropertyCallableRef('BackgroundFocusColor', 1, tmp, ButtonVars$_get_BackgroundFocusColor_$ref_4ogjpj(), null));
  };
  protoOf(ButtonVars).h3i = function () {
    var tmp = KProperty1;
    return this.y3h_1.u2x(this, getPropertyCallableRef('BackgroundHoverColor', 1, tmp, ButtonVars$_get_BackgroundHoverColor_$ref_sxwca3(), null));
  };
  protoOf(ButtonVars).i3i = function () {
    var tmp = KProperty1;
    return this.z3h_1.u2x(this, getPropertyCallableRef('BackgroundPressedColor', 1, tmp, ButtonVars$_get_BackgroundPressedColor_$ref_ig9prj(), null));
  };
  protoOf(ButtonVars).y3f = function () {
    var tmp = KProperty1;
    return this.a3i_1.u2x(this, getPropertyCallableRef('Color', 1, tmp, ButtonVars$_get_Color_$ref_90hsrb(), null));
  };
  protoOf(ButtonVars).f3g = function () {
    var tmp = KProperty1;
    return this.b3i_1.u2x(this, getPropertyCallableRef('ColorTransitionDuration', 1, tmp, ButtonVars$_get_ColorTransitionDuration_$ref_7uf2ku(), null));
  };
  protoOf(ButtonVars).j3i = function () {
    var tmp = KProperty1;
    return this.c3i_1.u2x(this, getPropertyCallableRef('FontSize', 1, tmp, ButtonVars$_get_FontSize_$ref_o5ikts(), null));
  };
  protoOf(ButtonVars).k3i = function () {
    var tmp = KProperty1;
    return this.d3i_1.u2x(this, getPropertyCallableRef('Height', 1, tmp, ButtonVars$_get_Height_$ref_re4w87(), null));
  };
  protoOf(ButtonVars).l3i = function () {
    var tmp = KProperty1;
    return this.e3i_1.u2x(this, getPropertyCallableRef('PaddingHorizontal', 1, tmp, ButtonVars$_get_PaddingHorizontal_$ref_uqasd7(), null));
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function Companion_0() {
    Companion_instance_20 = this;
    this.m3i_1 = new ButtonSize(FontSizeVars_getInstance().u3i().o2x(), get_cssRem(1.5), get_cssRem(0.5));
    this.n3i_1 = new ButtonSize(FontSizeVars_getInstance().v3i().o2x(), get_cssRem(2), get_cssRem(0.75));
    this.o3i_1 = new ButtonSize(FontSizeVars_getInstance().w3i().o2x(), get_cssRem(2.5), get_cssRem(1));
    this.p3i_1 = new ButtonSize(FontSizeVars_getInstance().x3i().o2x(), get_cssRem(3), get_cssRem(1.5));
  }
  var Companion_instance_20;
  function Companion_getInstance_2() {
    if (Companion_instance_20 == null)
      new Companion_0();
    return Companion_instance_20;
  }
  function ButtonSize(fontSize, height, horizontalPadding) {
    Companion_getInstance_2();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().j3i(), fontSize), ButtonVars_getInstance().k3i(), height), ButtonVars_getInstance().l3i(), horizontalPadding), VOID, this);
  }
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_Button_kt__2845m6();
    $this$CssStyle.c39(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).b3a(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.f3b(tmp, ButtonStyle$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$CssStyle).b3a(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.f3b(tmp_0, ButtonStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).b3a(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.f3b(tmp_1, ButtonStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_instance, ButtonVars_getInstance().y3f().o2x()), ButtonVars_getInstance().f3i().o2x()), 1.2), ButtonVars_getInstance().k3i().o2x()), ButtonVars_getInstance().k3i().o2x()), ButtonVars_getInstance().j3i().o2x()), Companion_instance_9.p2v()), Companion_instance_11.y2x()), VOID, ButtonVars_getInstance().l3i().o2x()), Companion_instance_12.u2w()), get_cssRem(0.375));
    return transition_0(userSelect(border_0(tmp, ButtonStyle$lambda$lambda$lambda), Companion_instance_3.n2v()), [Companion_instance_2.c2y('background-color', ButtonVars_getInstance().f3g().o2x())]);
  }
  function ButtonStyle$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.k36(get_px(0));
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_instance, ButtonVars_getInstance().h3i().o2x()), Companion_instance_1.l2v());
  }
  function ButtonStyle$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_instance;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(outline(tmp, tmp_0, 'solid', Colors_instance.i35()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().g3i().o2x());
  }
  function ButtonStyle$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_instance, ButtonVars_getInstance().i3i().o2x());
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (!properties_initialized_Button_kt_yov184) {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle = CssStyle(VOID, ButtonStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_ButtonVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_ButtonSize$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
    }
  }
  function get_CheckboxStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxStyle;
  }
  var CheckboxStyle;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim;
  }
  var CheckboxEnabledAnim;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle;
  }
  var CheckboxIconContainerStyle;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant;
  }
  var UncheckedCheckboxIconContainerVariant;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant;
  }
  var CheckedCheckboxIconContainerVariant;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle;
  }
  var CheckboxIconStyle;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant;
  }
  var CheckboxInputVariant;
  var com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable;
  function CheckboxVars$_get_BorderColor_$ref_a3dxo() {
    return function (p0) {
      return p0.z3f();
    };
  }
  function CheckboxVars$_get_BorderRadius_$ref_auagi9() {
    return function (p0) {
      return p0.m3j();
    };
  }
  function CheckboxVars$_get_BorderWidth_$ref_n68vn5() {
    return function (p0) {
      return p0.n3j();
    };
  }
  function CheckboxVars$_get_Size_$ref_kbhccu() {
    return function (p0) {
      return p0.o3j();
    };
  }
  function CheckboxVars$_get_Spacing_$ref_o74arc() {
    return function (p0) {
      return p0.p3j();
    };
  }
  function CheckboxVars$_get_FontSize_$ref_zfsngh() {
    return function (p0) {
      return p0.j3i();
    };
  }
  function CheckboxVars$_get_IconSize_$ref_estx9n() {
    return function (p0) {
      return p0.q3j();
    };
  }
  function CheckboxVars$_get_FocusOutlineColor_$ref_rvq14e() {
    return function (p0) {
      return p0.r3j();
    };
  }
  function CheckboxVars$_get_FocusOutlineSpread_$ref_i3390y() {
    return function (p0) {
      return p0.s3j();
    };
  }
  function CheckboxVars$_get_UncheckedBackgroundColor_$ref_6v46fc() {
    return function (p0) {
      return p0.t3j();
    };
  }
  function CheckboxVars$_get_IconColor_$ref_yfe0ch() {
    return function (p0) {
      return p0.u3j();
    };
  }
  function CheckboxVars$_get_IconBackgroundColor_$ref_eer9lb() {
    return function (p0) {
      return p0.v3j();
    };
  }
  function CheckboxVars$_get_IconBackgroundHoverColor_$ref_olfszl() {
    return function (p0) {
      return p0.w3j();
    };
  }
  function CheckboxVars$_get_TransitionDuration_$ref_mdqjzu() {
    return function (p0) {
      return p0.x3j();
    };
  }
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().o2x();
    tmp.y3i_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.z3i_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.a3j_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    this.b3j_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.c3j_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.d3j_1 = StyleVariable('silk');
    this.e3j_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().o2x();
    tmp_3.f3j_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.g3j_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    this.h3j_1 = StyleVariable('silk');
    this.i3j_1 = StyleVariable('silk');
    this.j3j_1 = StyleVariable('silk');
    this.k3j_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().y3j().o2x();
    tmp_5.l3j_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(CheckboxVars).z3f = function () {
    var tmp = KProperty1;
    return this.y3i_1.u2x(this, getPropertyCallableRef('BorderColor', 1, tmp, CheckboxVars$_get_BorderColor_$ref_a3dxo(), null));
  };
  protoOf(CheckboxVars).m3j = function () {
    var tmp = KProperty1;
    return this.z3i_1.u2x(this, getPropertyCallableRef('BorderRadius', 1, tmp, CheckboxVars$_get_BorderRadius_$ref_auagi9(), null));
  };
  protoOf(CheckboxVars).n3j = function () {
    var tmp = KProperty1;
    return this.a3j_1.u2x(this, getPropertyCallableRef('BorderWidth', 1, tmp, CheckboxVars$_get_BorderWidth_$ref_n68vn5(), null));
  };
  protoOf(CheckboxVars).o3j = function () {
    var tmp = KProperty1;
    return this.b3j_1.u2x(this, getPropertyCallableRef('Size', 1, tmp, CheckboxVars$_get_Size_$ref_kbhccu(), null));
  };
  protoOf(CheckboxVars).p3j = function () {
    var tmp = KProperty1;
    return this.c3j_1.u2x(this, getPropertyCallableRef('Spacing', 1, tmp, CheckboxVars$_get_Spacing_$ref_o74arc(), null));
  };
  protoOf(CheckboxVars).j3i = function () {
    var tmp = KProperty1;
    return this.d3j_1.u2x(this, getPropertyCallableRef('FontSize', 1, tmp, CheckboxVars$_get_FontSize_$ref_zfsngh(), null));
  };
  protoOf(CheckboxVars).q3j = function () {
    var tmp = KProperty1;
    return this.e3j_1.u2x(this, getPropertyCallableRef('IconSize', 1, tmp, CheckboxVars$_get_IconSize_$ref_estx9n(), null));
  };
  protoOf(CheckboxVars).r3j = function () {
    var tmp = KProperty1;
    return this.f3j_1.u2x(this, getPropertyCallableRef('FocusOutlineColor', 1, tmp, CheckboxVars$_get_FocusOutlineColor_$ref_rvq14e(), null));
  };
  protoOf(CheckboxVars).s3j = function () {
    var tmp = KProperty1;
    return this.g3j_1.u2x(this, getPropertyCallableRef('FocusOutlineSpread', 1, tmp, CheckboxVars$_get_FocusOutlineSpread_$ref_i3390y(), null));
  };
  protoOf(CheckboxVars).t3j = function () {
    var tmp = KProperty1;
    return this.h3j_1.u2x(this, getPropertyCallableRef('UncheckedBackgroundColor', 1, tmp, CheckboxVars$_get_UncheckedBackgroundColor_$ref_6v46fc(), null));
  };
  protoOf(CheckboxVars).u3j = function () {
    var tmp = KProperty1;
    return this.i3j_1.u2x(this, getPropertyCallableRef('IconColor', 1, tmp, CheckboxVars$_get_IconColor_$ref_yfe0ch(), null));
  };
  protoOf(CheckboxVars).v3j = function () {
    var tmp = KProperty1;
    return this.j3j_1.u2x(this, getPropertyCallableRef('IconBackgroundColor', 1, tmp, CheckboxVars$_get_IconBackgroundColor_$ref_eer9lb(), null));
  };
  protoOf(CheckboxVars).w3j = function () {
    var tmp = KProperty1;
    return this.k3j_1.u2x(this, getPropertyCallableRef('IconBackgroundHoverColor', 1, tmp, CheckboxVars$_get_IconBackgroundHoverColor_$ref_olfszl(), null));
  };
  protoOf(CheckboxVars).x3j = function () {
    var tmp = KProperty1;
    return this.l3j_1.u2x(this, getPropertyCallableRef('TransitionDuration', 1, tmp, CheckboxVars$_get_TransitionDuration_$ref_mdqjzu(), null));
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function Companion_1() {
    Companion_instance_21 = this;
    this.z3j_1 = new CheckboxSize(get_cssRem(0.875), get_cssRem(0.45), FontSizeVars_getInstance().v3i().o2x());
    this.a3k_1 = new CheckboxSize(get_cssRem(1), get_cssRem(0.625), FontSizeVars_getInstance().w3i().o2x());
    this.b3k_1 = new CheckboxSize(get_cssRem(1.25), get_cssRem(0.8), FontSizeVars_getInstance().x3i().o2x());
  }
  var Companion_instance_21;
  function Companion_getInstance_3() {
    if (Companion_instance_21 == null)
      new Companion_1();
    return Companion_instance_21;
  }
  function CheckboxSize(boxSize, iconSize, fontSize) {
    Companion_getInstance_3();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, CheckboxVars_getInstance().o3j(), boxSize), CheckboxVars_getInstance().q3j(), iconSize), CheckboxVars_getInstance().j3i(), fontSize), VOID, this);
  }
  function CheckboxStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.c39(CheckboxStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_instance, CheckboxVars_getInstance().p3j().o2x()), Companion_instance_3.n2v()), CheckboxVars_getInstance().j3i().o2x()), Companion_instance_1.l2v());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.t3b(CheckboxEnabledAnim$lambda$lambda);
    $this$Keyframes.u3b(CheckboxEnabledAnim$lambda$lambda_0);
    return Unit_instance;
  }
  function CheckboxEnabledAnim$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 0);
  }
  function CheckboxEnabledAnim$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 1);
  }
  function CheckboxIconContainerStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.c39(CheckboxIconContainerStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxIconContainerStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_instance, CheckboxVars_getInstance().q3j().o2x()), CheckboxVars_getInstance().o3j().o2x());
    var tmp_0 = CheckboxVars_getInstance().n3j().o2x();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(borderRadius(border(tmp, tmp_0, 'solid', CheckboxVars_getInstance().z3f().o2x()), CheckboxVars_getInstance().m3j().o2x()), Companion_instance_2.f2y(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().x3j().o2x()));
  }
  function UncheckedCheckboxIconContainerVariant$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_instance, CheckboxVars_getInstance().t3j().o2x());
  }
  function CheckedCheckboxIconContainerVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.c39(CheckedCheckboxIconContainerVariant$lambda$lambda);
    return Unit_instance;
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_instance, CheckboxVars_getInstance().v3j().o2x());
    return border_0(tmp, CheckedCheckboxIconContainerVariant$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.g36(CheckboxVars_getInstance().v3j().o2x());
    return Unit_instance;
  }
  function CheckboxIconStyle$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_instance, CheckboxVars_getInstance().o3j().o2x()), CheckboxVars_getInstance().u3j().o2x());
  }
  function CheckboxInputVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.c39(CheckboxInputVariant$lambda$lambda);
    $this$addVariant.e39(':focus-visible + *', CheckboxInputVariant$lambda$lambda_0);
    $this$addVariant.e39(':not([aria-disabled]):hover + *', CheckboxInputVariant$lambda$lambda_1);
    return Unit_instance;
  }
  function CheckboxInputVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow_0(Companion_instance, VOID, VOID, VOID, CheckboxVars_getInstance().s3j().o2x(), CheckboxVars_getInstance().r3j().o2x());
  }
  function CheckboxInputVariant$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_instance, CheckboxVars_getInstance().v3j(), CheckboxVars_getInstance().w3j().o2x());
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp = rowClasses(Companion_instance, VOID, CenterVertically_instance);
      CheckboxStyle = CssStyle(tmp, CheckboxStyle$lambda);
      CheckboxEnabledAnim = new Keyframes(CheckboxEnabledAnim$lambda);
      CheckboxIconContainerStyle = CssStyle(VOID, CheckboxIconContainerStyle$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant = addVariantBase(tmp_0, VOID, UncheckedCheckboxIconContainerVariant$lambda);
      var tmp_1 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant = addVariant(tmp_1, VOID, CheckedCheckboxIconContainerVariant$lambda);
      var tmp_2 = Companion_instance_5;
      CheckboxIconStyle = base(tmp_2, VOID, CheckboxIconStyle$lambda);
      var tmp_3 = get_InputStyle();
      CheckboxInputVariant = addVariant(tmp_3, VOID, CheckboxInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
      com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
      com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable = 0;
    }
  }
  function get_HiddenInputModifier() {
    _init_properties_Input_kt__b04mg8();
    return HiddenInputModifier;
  }
  var HiddenInputModifier;
  function get_InputGroupStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputGroupStyle;
  }
  var InputGroupStyle;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle;
  }
  var InputStyle;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant;
  }
  var OutlinedInputVariant;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant;
  }
  var FilledInputVariant;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant;
  }
  var FlushedInputVariant;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant;
  }
  var UnstyledInputVariant;
  var com_varabyte_kobweb_silk_components_forms_InputDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_InputVars$stable;
  var com_varabyte_kobweb_silk_components_forms_InputParams$stable;
  var com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable;
  var com_varabyte_kobweb_silk_components_forms_InputSize$stable;
  function InputVars$_get_BorderColor_$ref_2lp9kr() {
    return function (p0) {
      return p0.z3f();
    };
  }
  function InputVars$_get_BorderRadius_$ref_t6une2() {
    return function (p0) {
      return p0.m3j();
    };
  }
  function InputVars$_get_BorderFocusColor_$ref_h84gjz() {
    return function (p0) {
      return p0.s3k();
    };
  }
  function InputVars$_get_BorderHoverColor_$ref_71bc0l() {
    return function (p0) {
      return p0.t3k();
    };
  }
  function InputVars$_get_BorderInvalidColor_$ref_nnzjrk() {
    return function (p0) {
      return p0.u3k();
    };
  }
  function InputVars$_get_ColorTransitionDuration_$ref_bo92hm() {
    return function (p0) {
      return p0.f3g();
    };
  }
  function InputVars$_get_FilledColor_$ref_xjpdgx() {
    return function (p0) {
      return p0.v3k();
    };
  }
  function InputVars$_get_FilledHoverColor_$ref_ae4fhd() {
    return function (p0) {
      return p0.w3k();
    };
  }
  function InputVars$_get_FilledFocusColor_$ref_ynk81x() {
    return function (p0) {
      return p0.x3k();
    };
  }
  function InputVars$_get_FontSize_$ref_4vtdgo() {
    return function (p0) {
      return p0.j3i();
    };
  }
  function InputVars$_get_Height_$ref_qojn9d() {
    return function (p0) {
      return p0.k3i();
    };
  }
  function InputVars$_get_Padding_$ref_z3xou9() {
    return function (p0) {
      return p0.y3k();
    };
  }
  function InputVars$_get_PlaceholderOpacity_$ref_a9qjzk() {
    return function (p0) {
      return p0.z3k();
    };
  }
  function InputVars$_get_PlaceholderColor_$ref_7qanko() {
    return function (p0) {
      return p0.a3l();
    };
  }
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().o2x();
    tmp.c3k_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.d3k_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().o2x();
    tmp_0.e3k_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.f3k_1 = StyleVariable('silk');
    this.g3k_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().o3g().o2x();
    tmp_1.h3k_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.i3k_1 = StyleVariable('silk');
    this.j3k_1 = StyleVariable('silk');
    this.k3k_1 = StyleVariable('silk');
    this.l3k_1 = StyleVariable('silk');
    this.m3k_1 = StyleVariable('silk');
    this.n3k_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().o2x();
    tmp_2.o3k_1 = StyleVariable_2(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().o2x();
    tmp_3.p3k_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.q3k_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.r3k_1 = StyleVariable_0(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(InputVars).z3f = function () {
    var tmp = KProperty1;
    return this.c3k_1.u2x(this, getPropertyCallableRef('BorderColor', 1, tmp, InputVars$_get_BorderColor_$ref_2lp9kr(), null));
  };
  protoOf(InputVars).m3j = function () {
    var tmp = KProperty1;
    return this.d3k_1.u2x(this, getPropertyCallableRef('BorderRadius', 1, tmp, InputVars$_get_BorderRadius_$ref_t6une2(), null));
  };
  protoOf(InputVars).s3k = function () {
    var tmp = KProperty1;
    return this.e3k_1.u2x(this, getPropertyCallableRef('BorderFocusColor', 1, tmp, InputVars$_get_BorderFocusColor_$ref_h84gjz(), null));
  };
  protoOf(InputVars).t3k = function () {
    var tmp = KProperty1;
    return this.f3k_1.u2x(this, getPropertyCallableRef('BorderHoverColor', 1, tmp, InputVars$_get_BorderHoverColor_$ref_71bc0l(), null));
  };
  protoOf(InputVars).u3k = function () {
    var tmp = KProperty1;
    return this.g3k_1.u2x(this, getPropertyCallableRef('BorderInvalidColor', 1, tmp, InputVars$_get_BorderInvalidColor_$ref_nnzjrk(), null));
  };
  protoOf(InputVars).f3g = function () {
    var tmp = KProperty1;
    return this.h3k_1.u2x(this, getPropertyCallableRef('ColorTransitionDuration', 1, tmp, InputVars$_get_ColorTransitionDuration_$ref_bo92hm(), null));
  };
  protoOf(InputVars).v3k = function () {
    var tmp = KProperty1;
    return this.i3k_1.u2x(this, getPropertyCallableRef('FilledColor', 1, tmp, InputVars$_get_FilledColor_$ref_xjpdgx(), null));
  };
  protoOf(InputVars).w3k = function () {
    var tmp = KProperty1;
    return this.j3k_1.u2x(this, getPropertyCallableRef('FilledHoverColor', 1, tmp, InputVars$_get_FilledHoverColor_$ref_ae4fhd(), null));
  };
  protoOf(InputVars).x3k = function () {
    var tmp = KProperty1;
    return this.k3k_1.u2x(this, getPropertyCallableRef('FilledFocusColor', 1, tmp, InputVars$_get_FilledFocusColor_$ref_ynk81x(), null));
  };
  protoOf(InputVars).j3i = function () {
    var tmp = KProperty1;
    return this.l3k_1.u2x(this, getPropertyCallableRef('FontSize', 1, tmp, InputVars$_get_FontSize_$ref_4vtdgo(), null));
  };
  protoOf(InputVars).k3i = function () {
    var tmp = KProperty1;
    return this.m3k_1.u2x(this, getPropertyCallableRef('Height', 1, tmp, InputVars$_get_Height_$ref_qojn9d(), null));
  };
  protoOf(InputVars).y3k = function () {
    var tmp = KProperty1;
    return this.n3k_1.u2x(this, getPropertyCallableRef('Padding', 1, tmp, InputVars$_get_Padding_$ref_z3xou9(), null));
  };
  protoOf(InputVars).z3k = function () {
    var tmp = KProperty1;
    return this.o3k_1.u2x(this, getPropertyCallableRef('PlaceholderOpacity', 1, tmp, InputVars$_get_PlaceholderOpacity_$ref_a9qjzk(), null));
  };
  protoOf(InputVars).a3l = function () {
    var tmp = KProperty1;
    return this.p3k_1.u2x(this, getPropertyCallableRef('PlaceholderColor', 1, tmp, InputVars$_get_PlaceholderColor_$ref_7qanko(), null));
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().y3k().o2x();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function Companion_2() {
    Companion_instance_22 = this;
    this.b3l_1 = new InputSize(FontSizeVars_getInstance().u3i().o2x(), get_cssRem(1.25), get_cssRem(0.375), BorderRadiusVars_getInstance().u3i().o2x());
    this.c3l_1 = new InputSize(FontSizeVars_getInstance().v3i().o2x(), get_cssRem(1.75), get_cssRem(0.5), BorderRadiusVars_getInstance().v3i().o2x());
    this.d3l_1 = new InputSize(FontSizeVars_getInstance().w3i().o2x(), get_cssRem(2.25), get_cssRem(0.625), BorderRadiusVars_getInstance().w3i().o2x());
    this.e3l_1 = new InputSize(FontSizeVars_getInstance().x3i().o2x(), get_cssRem(2.5), get_cssRem(0.75), BorderRadiusVars_getInstance().w3i().o2x());
  }
  var Companion_instance_22;
  function Companion_getInstance_4() {
    if (Companion_instance_22 == null)
      new Companion_2();
    return Companion_instance_22;
  }
  function InputSize(fontSize, height, padding, borderRadius) {
    Companion_getInstance_4();
    Base_init_$Init$(setVariable(setVariable(setVariable(setVariable(Companion_instance, InputVars_getInstance().j3i(), fontSize), InputVars_getInstance().k3i(), height), InputVars_getInstance().y3k(), padding), InputVars_getInstance().m3j(), borderRadius), VOID, this);
  }
  function InputGroupStyle$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.i35());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border(tmp_1, tmp_2, 'solid', Colors_instance.i35()), InputVars_getInstance().m3j().o2x()), InputVars_getInstance().j3i().o2x());
  }
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$CssStyle.c39(InputStyle$lambda$lambda);
    var tmp = get_placeholder($this$CssStyle);
    $this$CssStyle.f3b(tmp, InputStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function InputStyle$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_instance, Companion_instance_14.n2v()), get_ColorVar().o2x()), InputVars_getInstance().k3i().o2x()), InputVars_getInstance().j3i().o2x()), Colors_instance.i35());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.i35());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp_1, tmp_2, 'solid', Colors_instance.i35()), Companion_instance_2.f2y(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().f3g().o2x()));
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_instance, InputVars_getInstance().z3k().o2x()), InputVars_getInstance().a3l().o2x());
  }
  function OutlinedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.c39(OutlinedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    $this$addVariant.f3b(tmp, OutlinedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).b3a(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.f3b(tmp_0, OutlinedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).b3a(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.f3b(tmp_1, OutlinedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(border(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_instance), InputVars_getInstance().m3j().o2x());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', InputVars_getInstance().z3f().o2x());
  }
  function OutlinedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().u3k().o2x());
  }
  function OutlinedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border_0(tmp, OutlinedInputVariant$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.g36(InputVars_getInstance().t3k().o2x());
    return Unit_instance;
  }
  function OutlinedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().s3k().o2x());
  }
  function FilledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.c39(FilledInputVariant$lambda$lambda);
    var tmp = get_hover($this$addVariant).b3a(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.f3b(tmp, FilledInputVariant$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    $this$addVariant.f3b(tmp_0, FilledInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).b3a(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.f3b(tmp_1, FilledInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function FilledInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.g36($color);
      return Unit_instance;
    };
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FilledInputVariant$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_instance), InputVars_getInstance().v3k().o2x()), InputVars_getInstance().m3j().o2x());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Colors_instance.i35());
  }
  function FilledInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_instance, InputVars_getInstance().w3k().o2x());
  }
  function FilledInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_instance, InputVars_getInstance().u3k().o2x());
  }
  function FilledInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_instance, InputVars_getInstance().x3k().o2x()), InputVars_getInstance().s3k().o2x());
  }
  function FlushedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.c39(FlushedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    $this$addVariant.f3b(tmp, FlushedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).b3a(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.f3b(tmp_0, FlushedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).b3a(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.f3b(tmp_1, FlushedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function FlushedInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.g36($color);
      return Unit_instance;
    };
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FlushedInputVariant$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().z3f().o2x());
  }
  function FlushedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().u3k().o2x());
  }
  function FlushedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border_0(tmp, FlushedInputVariant$lambda$lambda$lambda);
  }
  function FlushedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.g36(InputVars_getInstance().t3k().o2x());
    return Unit_instance;
  }
  function FlushedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().s3k().o2x());
  }
  function UnstyledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_1(size(border(Companion_instance, get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_instance_4.a2x()), Companion_instance_11.y2x());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_instance_5;
      InputGroupStyle = base(tmp_0, VOID, InputGroupStyle$lambda);
      InputStyle = CssStyle(VOID, InputStyle$lambda);
      var tmp_1 = get_InputStyle();
      OutlinedInputVariant = addVariant(tmp_1, VOID, OutlinedInputVariant$lambda);
      var tmp_2 = get_InputStyle();
      FilledInputVariant = addVariant(tmp_2, VOID, FilledInputVariant$lambda);
      var tmp_3 = get_InputStyle();
      FlushedInputVariant = addVariant(tmp_3, VOID, FlushedInputVariant$lambda);
      var tmp_4 = get_InputStyle();
      UnstyledInputVariant = addVariant(tmp_4, VOID, UnstyledInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_InputDefaults$stable = com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
      com_varabyte_kobweb_silk_components_forms_InputVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputParams$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputSize$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
    }
  }
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle;
  }
  var SwitchStyle;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle;
  }
  var SwitchTrackStyle;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant;
  }
  var SwitchInputVariant;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle;
  }
  var SwitchThumbStyle;
  var com_varabyte_kobweb_silk_components_forms_SwitchVars$stable;
  var com_varabyte_kobweb_silk_components_forms_SwitchSize$stable;
  function SwitchVars$_get_BorderRadius_$ref_6ja2gw() {
    return function (p0) {
      return p0.m3j();
    };
  }
  function SwitchVars$_get_TrackWidth_$ref_ivpddp() {
    return function (p0) {
      return p0.s3l();
    };
  }
  function SwitchVars$_get_TrackHeight_$ref_eiptze() {
    return function (p0) {
      return p0.t3l();
    };
  }
  function SwitchVars$_get_TrackPadding_$ref_d8tr4o() {
    return function (p0) {
      return p0.u3l();
    };
  }
  function SwitchVars$_get_TrackBackgroundColor_$ref_jnuze4() {
    return function (p0) {
      return p0.v3l();
    };
  }
  function SwitchVars$_get_FocusColor_$ref_72ulnx() {
    return function (p0) {
      return p0.w3l();
    };
  }
  function SwitchVars$_get_ThumbOffset_$ref_5e86z1() {
    return function (p0) {
      return p0.x3l();
    };
  }
  function SwitchVars$_get_ThumbColor_$ref_jy53rl() {
    return function (p0) {
      return p0.y3l();
    };
  }
  function SwitchVars$_get_TransitionDuration_$ref_o1aprp() {
    return function (p0) {
      return p0.x3j();
    };
  }
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.j3l_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.k3l_1 = StyleVariable('silk');
    this.l3l_1 = StyleVariable('silk');
    this.m3l_1 = StyleVariable('silk');
    this.n3l_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().o2x();
    tmp_0.o3l_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.p3l_1 = StyleVariable('silk');
    this.q3l_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().z3l().o2x();
    tmp_1.r3l_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(SwitchVars).m3j = function () {
    var tmp = KProperty1;
    return this.j3l_1.u2x(this, getPropertyCallableRef('BorderRadius', 1, tmp, SwitchVars$_get_BorderRadius_$ref_6ja2gw(), null));
  };
  protoOf(SwitchVars).s3l = function () {
    var tmp = KProperty1;
    return this.k3l_1.u2x(this, getPropertyCallableRef('TrackWidth', 1, tmp, SwitchVars$_get_TrackWidth_$ref_ivpddp(), null));
  };
  protoOf(SwitchVars).t3l = function () {
    var tmp = KProperty1;
    return this.l3l_1.u2x(this, getPropertyCallableRef('TrackHeight', 1, tmp, SwitchVars$_get_TrackHeight_$ref_eiptze(), null));
  };
  protoOf(SwitchVars).u3l = function () {
    var tmp = KProperty1;
    return this.m3l_1.u2x(this, getPropertyCallableRef('TrackPadding', 1, tmp, SwitchVars$_get_TrackPadding_$ref_d8tr4o(), null));
  };
  protoOf(SwitchVars).v3l = function () {
    var tmp = KProperty1;
    return this.n3l_1.u2x(this, getPropertyCallableRef('TrackBackgroundColor', 1, tmp, SwitchVars$_get_TrackBackgroundColor_$ref_jnuze4(), null));
  };
  protoOf(SwitchVars).w3l = function () {
    var tmp = KProperty1;
    return this.o3l_1.u2x(this, getPropertyCallableRef('FocusColor', 1, tmp, SwitchVars$_get_FocusColor_$ref_72ulnx(), null));
  };
  protoOf(SwitchVars).x3l = function () {
    var tmp = KProperty1;
    return this.p3l_1.u2x(this, getPropertyCallableRef('ThumbOffset', 1, tmp, SwitchVars$_get_ThumbOffset_$ref_5e86z1(), null));
  };
  protoOf(SwitchVars).y3l = function () {
    var tmp = KProperty1;
    return this.q3l_1.u2x(this, getPropertyCallableRef('ThumbColor', 1, tmp, SwitchVars$_get_ThumbColor_$ref_jy53rl(), null));
  };
  protoOf(SwitchVars).x3j = function () {
    var tmp = KProperty1;
    return this.r3l_1.u2x(this, getPropertyCallableRef('TransitionDuration', 1, tmp, SwitchVars$_get_TransitionDuration_$ref_o1aprp(), null));
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function Companion_3() {
    Companion_instance_23 = this;
    this.a3m_1 = new SwitchSize(get_cssRem(1.375), get_cssRem(0.75));
    this.b3m_1 = new SwitchSize(get_cssRem(1.875), get_cssRem(1));
    this.c3m_1 = new SwitchSize(get_cssRem(2.875), get_cssRem(1.5));
  }
  var Companion_instance_23;
  function Companion_getInstance_5() {
    if (Companion_instance_23 == null)
      new Companion_3();
    return Companion_instance_23;
  }
  function SwitchSize(width, height, padding) {
    Companion_getInstance_5();
    padding = padding === VOID ? get_cssRem(0.188) : padding;
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, SwitchVars_getInstance().s3l(), width), SwitchVars_getInstance().t3l(), height), SwitchVars_getInstance().u3l(), padding), VOID, this);
  }
  function SwitchStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function SwitchTrackStyle$lambda($this$CssStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$CssStyle.c39(SwitchTrackStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).b3a(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.f3b(tmp, SwitchTrackStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchTrackStyle$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition_0(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_instance, SwitchVars_getInstance().s3l().o2x()), SwitchVars_getInstance().s3l().o2x()), SwitchVars_getInstance().t3l().o2x()), SwitchVars_getInstance().t3l().o2x()), SwitchVars_getInstance().u3l().o2x()), SwitchVars_getInstance().m3j().o2x()), SwitchVars_getInstance().v3l().o2x()), [Companion_instance_2.c2y('background-color', SwitchVars_getInstance().x3j().o2x())]), Companion_instance_15.c2v());
  }
  function SwitchTrackStyle$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_instance, Companion_instance_1.l2v());
  }
  function SwitchInputVariant$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.c39(SwitchInputVariant$lambda$lambda);
    $this$addVariant.e39(':focus-visible + *', SwitchInputVariant$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchInputVariant$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow_0(Companion_instance, VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().w3l().o2x());
  }
  function SwitchThumbStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition_0(translateX(backgroundColor(borderRadius(size(Companion_instance, SwitchVars_getInstance().t3l().o2x()), SwitchVars_getInstance().m3j().o2x()), SwitchVars_getInstance().y3l().o2x()), SwitchVars_getInstance().x3l().o2x()), [Companion_instance_2.c2y('translate', SwitchVars_getInstance().x3j().o2x())]);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp = Companion_instance_5;
      SwitchStyle = base(tmp, VOID, SwitchStyle$lambda);
      var tmp_0 = ariaHidden(tabIndex(Companion_instance, -1));
      SwitchTrackStyle = CssStyle(tmp_0, SwitchTrackStyle$lambda);
      var tmp_1 = get_InputStyle();
      SwitchInputVariant = addVariant(tmp_1, VOID, SwitchInputVariant$lambda);
      var tmp_2 = Companion_instance_5;
      SwitchThumbStyle = base(tmp_2, VOID, SwitchThumbStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_SwitchVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_SwitchSize$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle;
  }
  var CanvasStyle;
  var com_varabyte_kobweb_silk_components_graphics_RenderScope$stable;
  var com_varabyte_kobweb_silk_components_graphics_CanvasRepainter$stable;
  function CanvasStyle$lambda($this$CssStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_instance;
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (!properties_initialized_Canvas_kt_i28dei) {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle = CssStyle(VOID, CanvasStyle$lambda);
      com_varabyte_kobweb_silk_components_graphics_RenderScope$stable = 0;
      com_varabyte_kobweb_silk_components_graphics_CanvasRepainter$stable = 8;
    }
  }
  function ExclaimIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1482883947);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(modifier_0._v) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.s2z(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$ExclaimIconKt_getInstance().d3m_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(ExclaimIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda_ieignf($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda$lambda_6t7l8g;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda$lambda_6t7l8g($this$Path) {
    $this$Path.k2z('M 0 1.75 C 0 0.784 0.784 0 1.75 0 h 12.5 C 15.216 0 16 0.784 16 1.75 v 9.5 A 1.75 1.75 0 0 1 14.25 13 H 8.06 l -2.573 2.573 A 1.458 1.458 0 0 1 3 14.543 V 13 H 1.75 A 1.75 1.75 0 0 1 0 11.25 Z m 1.75 -0.25 a 0.25 0.25 0 0 0 -0.25 0.25 v 9.5 c 0 0.138 0.112 0.25 0.25 0.25 h 2 a 0.75 0.75 0 0 1 0.75 0.75 v 2.19 l 2.72 -2.72 a 0.749 0.749 0 0 1 0.53 -0.22 h 6.5 a 0.25 0.25 0 0 0 0.25 -0.25 v -9.5 a 0.25 0.25 0 0 0 -0.25 -0.25 Z m 7 2.25 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 9 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_instance;
  }
  function ComposableSingletons$ExclaimIconKt() {
    ComposableSingletons$ExclaimIconKt_instance = this;
    var tmp = this;
    tmp.d3m_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-675482057, false, ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda_ieignf));
  }
  var ComposableSingletons$ExclaimIconKt_instance;
  function ComposableSingletons$ExclaimIconKt_getInstance() {
    if (ComposableSingletons$ExclaimIconKt_instance == null)
      new ComposableSingletons$ExclaimIconKt();
    return ComposableSingletons$ExclaimIconKt_instance;
  }
  function ExclaimIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      ExclaimIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function InfoIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(197779673);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(modifier_0._v) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.s2z(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$InfoIconKt_getInstance().e3m_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(InfoIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$InfoIconKt$lambda$_954934107$lambda_jf0t4a($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$InfoIconKt$lambda$_954934107$lambda$lambda_hfr7b3;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$InfoIconKt$lambda$_954934107$lambda$lambda_hfr7b3($this$Path) {
    $this$Path.k2z('M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z');
    return Unit_instance;
  }
  function ComposableSingletons$InfoIconKt() {
    ComposableSingletons$InfoIconKt_instance = this;
    var tmp = this;
    tmp.e3m_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-954934107, false, ComposableSingletons$InfoIconKt$lambda$_954934107$lambda_jf0t4a));
  }
  var ComposableSingletons$InfoIconKt_instance;
  function ComposableSingletons$InfoIconKt_getInstance() {
    if (ComposableSingletons$InfoIconKt_instance == null)
      new ComposableSingletons$InfoIconKt();
    return ComposableSingletons$InfoIconKt_instance;
  }
  function InfoIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      InfoIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function LightbulbIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1309236181);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(modifier_0._v) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.s2z(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$LightbulbIconKt_getInstance().f3m_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(LightbulbIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_8(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda$lambda($this$Path) {
    $this$Path.k2z('M 8 1.5 c -2.363 0 -4 1.69 -4 3.75 c 0 0.984 0.424 1.625 0.984 2.304 l 0.214 0.253 c 0.223 0.264 0.47 0.556 0.673 0.848 c 0.284 0.411 0.537 0.896 0.621 1.49 a 0.75 0.75 0 0 1 -1.484 0.211 c -0.04 -0.282 -0.163 -0.547 -0.37 -0.847 a 8.456 8.456 0 0 0 -0.542 -0.68 c -0.084 -0.1 -0.173 -0.205 -0.268 -0.32 C 3.201 7.75 2.5 6.766 2.5 5.25 C 2.5 2.31 4.863 0 8 0 s 5.5 2.31 5.5 5.25 c 0 1.516 -0.701 2.5 -1.328 3.259 c -0.095 0.115 -0.184 0.22 -0.268 0.319 c -0.207 0.245 -0.383 0.453 -0.541 0.681 c -0.208 0.3 -0.33 0.565 -0.37 0.847 a 0.751 0.751 0 0 1 -1.485 -0.212 c 0.084 -0.593 0.337 -1.078 0.621 -1.489 c 0.203 -0.292 0.45 -0.584 0.673 -0.848 c 0.075 -0.088 0.147 -0.173 0.213 -0.253 c 0.561 -0.679 0.985 -1.32 0.985 -2.304 c 0 -2.06 -1.637 -3.75 -4 -3.75 Z M 5.75 12 h 4.5 a 0.75 0.75 0 0 1 0 1.5 h -4.5 a 0.75 0.75 0 0 1 0 -1.5 Z M 6 15.25 a 0.75 0.75 0 0 1 0.75 -0.75 h 2.5 a 0.75 0.75 0 0 1 0 1.5 h -2.5 a 0.75 0.75 0 0 1 -0.75 -0.75 Z');
    return Unit_instance;
  }
  function ComposableSingletons$LightbulbIconKt() {
    ComposableSingletons$LightbulbIconKt_instance = this;
    var tmp = this;
    tmp.f3m_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(977424631, false, ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda));
  }
  var ComposableSingletons$LightbulbIconKt_instance;
  function ComposableSingletons$LightbulbIconKt_getInstance() {
    if (ComposableSingletons$LightbulbIconKt_instance == null)
      new ComposableSingletons$LightbulbIconKt();
    return ComposableSingletons$LightbulbIconKt_instance;
  }
  function LightbulbIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      LightbulbIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function QuestionIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1830362903);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(modifier_0._v) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      createIcon(null, null, new Stroke(2), toAttrs(modifier_0._v), ComposableSingletons$QuestionIconKt_getInstance().g3m_1, $composer_0, 24576, 3);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(QuestionIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_9(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda_b59ksy($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.n13();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().p12_1) {
      var value_0 = ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_0;
      $composer_0.o13(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    Path($this$createIcon, tmp$ret$7, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.n13();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().p12_1) {
      var value_1 = ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_1;
      $composer_0.o13(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp$ret$11 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    Circle($this$createIcon, tmp$ret$11, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj($this$Path) {
    $this$Path.m2z(SVGStrokeLineCap_Round_getInstance());
    $this$Path.k2z('M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25');
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_0($this$Path) {
    $this$Path.m2z(SVGStrokeLineCap_Round_getInstance());
    $this$Path.k2z('M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0');
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_1($this$Circle) {
    $this$Circle.a30(10);
    $this$Circle.f2z(12);
    $this$Circle.g2z(12);
    $this$Circle.z2z(11.25);
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt() {
    ComposableSingletons$QuestionIconKt_instance = this;
    var tmp = this;
    tmp.g3m_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-1550888779, false, ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda_b59ksy));
  }
  var ComposableSingletons$QuestionIconKt_instance;
  function ComposableSingletons$QuestionIconKt_getInstance() {
    if (ComposableSingletons$QuestionIconKt_instance == null)
      new ComposableSingletons$QuestionIconKt();
    return ComposableSingletons$QuestionIconKt_instance;
  }
  function QuestionIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuestionIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function QuoteIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1516926133);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(modifier_0._v) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.s2z(300);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$QuoteIconKt_getInstance().h3m_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(QuoteIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_10(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda_5akkrz($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda$lambda_1v3ns4;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda$lambda_1v3ns4($this$Path) {
    $this$Path.k2z('m175.6 204.73 22.19 46.49C258.61 223.15 278 189.49 278 151.18V48.78H175.6v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55zm-153.6 0 22.19 46.49c60.83-28.07 80.21-61.73 80.21-100.04V48.78H22v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55z');
    return Unit_instance;
  }
  function ComposableSingletons$QuoteIconKt() {
    ComposableSingletons$QuoteIconKt_instance = this;
    var tmp = this;
    tmp.h3m_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-1173306345, false, ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda_5akkrz));
  }
  var ComposableSingletons$QuoteIconKt_instance;
  function ComposableSingletons$QuoteIconKt_getInstance() {
    if (ComposableSingletons$QuoteIconKt_instance == null)
      new ComposableSingletons$QuoteIconKt();
    return ComposableSingletons$QuoteIconKt_instance;
  }
  function QuoteIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuoteIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function StopIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(637478449);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(modifier_0._v) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.s2z(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$StopIconKt_getInstance().i3m_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(StopIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_11(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$StopIconKt$lambda$_515235331$lambda_6se70q($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$StopIconKt$lambda$_515235331$lambda$lambda_u1w1jf;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$StopIconKt$lambda$_515235331$lambda$lambda_u1w1jf($this$Path) {
    $this$Path.k2z('M 4.47 0.22 A 0.749 0.749 0 0 1 5 0 h 6 c 0.199 0 0.389 0.079 0.53 0.22 l 4.25 4.25 c 0.141 0.14 0.22 0.331 0.22 0.53 v 6 a 0.749 0.749 0 0 1 -0.22 0.53 l -4.25 4.25 A 0.749 0.749 0 0 1 11 16 H 5 a 0.749 0.749 0 0 1 -0.53 -0.22 L 0.22 11.53 A 0.749 0.749 0 0 1 0 11 V 5 c 0 -0.199 0.079 -0.389 0.22 -0.53 Z m 0.84 1.28 L 1.5 5.31 v 5.38 l 3.81 3.81 h 5.38 l 3.81 -3.81 V 5.31 L 10.69 1.5 Z M 8 4 a 0.75 0.75 0 0 1 0.75 0.75 v 3.5 a 0.75 0.75 0 0 1 -1.5 0 v -3.5 A 0.75 0.75 0 0 1 8 4 Z m 0 8 a 1 1 0 1 1 0 -2 a 1 1 0 0 1 0 2 Z');
    return Unit_instance;
  }
  function ComposableSingletons$StopIconKt() {
    ComposableSingletons$StopIconKt_instance = this;
    var tmp = this;
    tmp.i3m_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-515235331, false, ComposableSingletons$StopIconKt$lambda$_515235331$lambda_6se70q));
  }
  var ComposableSingletons$StopIconKt_instance;
  function ComposableSingletons$StopIconKt_getInstance() {
    if (ComposableSingletons$StopIconKt_instance == null)
      new ComposableSingletons$StopIconKt();
    return ComposableSingletons$StopIconKt_instance;
  }
  function StopIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      StopIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function WarningIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1461404811);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(modifier_0._v) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.s2z(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$WarningIconKt_getInstance().j3m_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(WarningIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_12(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$WarningIconKt$lambda$_696961193$lambda_qp68sm($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$WarningIconKt$lambda$_696961193$lambda$lambda_cg9gpn;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$WarningIconKt$lambda$_696961193$lambda$lambda_cg9gpn($this$Path) {
    $this$Path.k2z('M 6.457 1.047 c 0.659 -1.234 2.427 -1.234 3.086 0 l 6.082 11.378 A 1.75 1.75 0 0 1 14.082 15 H 1.918 a 1.75 1.75 0 0 1 -1.543 -2.575 Z m 1.763 0.707 a 0.25 0.25 0 0 0 -0.44 0 L 1.698 13.132 a 0.25 0.25 0 0 0 0.22 0.368 h 12.164 a 0.25 0.25 0 0 0 0.22 -0.368 Z m 0.53 3.996 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 11 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_instance;
  }
  function ComposableSingletons$WarningIconKt() {
    ComposableSingletons$WarningIconKt_instance = this;
    var tmp = this;
    tmp.j3m_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-696961193, false, ComposableSingletons$WarningIconKt$lambda$_696961193$lambda_qp68sm));
  }
  var ComposableSingletons$WarningIconKt_instance;
  function ComposableSingletons$WarningIconKt_getInstance() {
    if (ComposableSingletons$WarningIconKt_instance == null)
      new ComposableSingletons$WarningIconKt();
    return ComposableSingletons$WarningIconKt_instance;
  }
  function WarningIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      WarningIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable;
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable;
  function createIcon(viewBox, width, renderStyle, attrs, content, $composer, $changed, $default) {
    var viewBox_0 = {_v: viewBox};
    var width_0 = {_v: width};
    var renderStyle_0 = {_v: renderStyle};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1506534634);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && (($changed & 8) === 0 ? $composer_0.p13(viewBox_0._v) : $composer_0.s13(viewBox_0._v)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.s13(width_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && (($changed & 512) === 0 ? $composer_0.p13(renderStyle_0._v) : $composer_0.s13(renderStyle_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.s13(content) ? 16384 : 8192);
    if ($composer_0.u13(!(($dirty & 9363) === 9362), $dirty & 1)) {
      $composer_0.a13();
      if (($changed & 1) === 0 || $composer_0.s12()) {
        if (!(($default & 1) === 0)) {
          viewBox_0._v = Companion_instance_16.s2z(24);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          width_0._v = get_em(1);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          renderStyle_0._v = new Stroke();
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          attrs_0._v = null;
        }
      } else {
        $composer_0.h13();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.b13();
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!($composer_0.s13(width_0._v) | (($dirty & 14 ^ 6) > 4 && $composer_0.s13(viewBox_0._v) || ($dirty & 6) === 4)) | (($dirty & 896 ^ 384) > 256 && $composer_0.s13(renderStyle_0._v) || ($dirty & 384) === 256)) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      var it = tmp0.n13();
      var tmp;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = createIcon$lambda(width_0, viewBox_0, renderStyle_0, attrs_0);
        tmp0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      Svg(tmp$ret$3, content, $composer_0, 112 & $dirty >> 9, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(createIcon$lambda_0(viewBox_0, width_0, renderStyle_0, attrs_0, content, $changed, $default));
    }
  }
  function Fill() {
  }
  function Stroke(strokeWidth) {
    strokeWidth = strokeWidth === VOID ? null : strokeWidth;
    this.k3m_1 = strokeWidth;
  }
  function createIcon$lambda$lambda($this$style) {
    overflow_1($this$style, Companion_instance_4.z2w());
    return Unit_instance;
  }
  function createIcon$lambda($width, $viewBox, $renderStyle, $attrs) {
    return function ($this$Svg) {
      var tmp0_safe_receiver = $width._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$Svg.a2z(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $viewBox._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$Svg.b2z(tmp1_safe_receiver.t2z_1, tmp1_safe_receiver.u2z_1, tmp1_safe_receiver.v2z_1, tmp1_safe_receiver.w2z_1);
      }
      var tmp2_safe_receiver = $renderStyle._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp;
        if (tmp2_safe_receiver instanceof Fill) {
          $this$Svg.y2y(SVGFillType_CurrentColor_getInstance());
          $this$Svg.w2y(SVGStrokeType_None_getInstance());
          tmp = Unit_instance;
        } else {
          if (tmp2_safe_receiver instanceof Stroke) {
            $this$Svg.w2y(SVGStrokeType_CurrentColor_getInstance());
            $this$Svg.y2y(SVGFillType_None_getInstance());
            var tmp1_safe_receiver_0 = tmp2_safe_receiver.k3m_1;
            var tmp_0;
            if (tmp1_safe_receiver_0 == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              $this$Svg.x2y(tmp1_safe_receiver_0);
              tmp_0 = Unit_instance;
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      $this$Svg.z2l(createIcon$lambda$lambda);
      var tmp3_safe_receiver = $attrs._v;
      if (tmp3_safe_receiver == null)
        null;
      else
        tmp3_safe_receiver($this$Svg);
      return Unit_instance;
    };
  }
  function createIcon$lambda_0($viewBox, $width, $renderStyle, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      createIcon($viewBox._v, $width._v, $renderStyle._v, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_HorizontalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return HorizontalDividerStyle;
  }
  var HorizontalDividerStyle;
  function get_VerticalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return VerticalDividerStyle;
  }
  var VerticalDividerStyle;
  var com_varabyte_kobweb_silk_components_layout_DividerVars$stable;
  function DividerVars$_get_Color_$ref_qjroxu() {
    return function (p0) {
      return p0.y3f();
    };
  }
  function DividerVars$_get_Length_$ref_k75zgt() {
    return function (p0) {
      return p0.n3m();
    };
  }
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().o2x();
    tmp.l3m_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_percent(90);
    tmp_0.m3m_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(DividerVars).y3f = function () {
    var tmp = KProperty1;
    return this.l3m_1.u2x(this, getPropertyCallableRef('Color', 1, tmp, DividerVars$_get_Color_$ref_qjroxu(), null));
  };
  protoOf(DividerVars).n3m = function () {
    var tmp = KProperty1;
    return this.m3m_1.u2x(this, getPropertyCallableRef('Length', 1, tmp, DividerVars$_get_Length_$ref_k75zgt(), null));
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function HorizontalDivider(modifier, variant, $composer, $changed, $default) {
    _init_properties_Divider_kt__8b5dnr();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-490066360);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.p13(variant_0._v) : $composer_0.s13(variant_0._v)) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        variant_0._v = null;
      }
      Hr(toAttrs(toModifier(get_HorizontalDividerStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).w33(modifier_0._v)), $composer_0, 0, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(HorizontalDivider$lambda(modifier_0, variant_0, $changed, $default));
    }
  }
  function HorizontalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = border(Companion_instance, get_px(0));
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().y3f().o2x()), DividerVars_getInstance().n3m().o2x());
  }
  function VerticalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = border(Companion_instance, get_px(0));
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().y3f().o2x()), DividerVars_getInstance().n3m().o2x());
  }
  function HorizontalDivider$lambda($modifier, $variant, $$changed, $$default) {
    return function ($composer, $force) {
      HorizontalDivider($modifier._v, $variant._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_instance_5;
      HorizontalDividerStyle = base(tmp, VOID, HorizontalDividerStyle$lambda);
      var tmp_0 = Companion_instance_5;
      VerticalDividerStyle = base(tmp_0, VOID, VerticalDividerStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_DividerVars$stable = 8;
    }
  }
  function get_columnVariables() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return columnVariables;
  }
  var columnVariables;
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle;
  }
  var SimpleGridStyle;
  function SimpleGridStyle$lambda($this$CssStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$CssStyle.c39(SimpleGridStyle$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = get_columnVariables().z1().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.s1();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.t1();
      $this$CssStyle.e3b(breakpoint, SimpleGridStyle$lambda$lambda_0(variable));
    }
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.x2v(get_fr(1));
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.o2x();
      $this$gridTemplateColumns.s2v(tmp, SimpleGridStyle$lambda$lambda$lambda$lambda);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_instance;
      return gridTemplateColumns(tmp, SimpleGridStyle$lambda$lambda$lambda($variable));
    };
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (!properties_initialized_SimpleGrid_kt_fum19i) {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      // Inline function 'kotlin.collections.associateWith' call
      var this_0 = get_entries();
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var _iterator__ex2g4s = this_0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.k2_1.toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.a2(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle = CssStyle(VOID, SimpleGridStyle$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle;
  }
  var SurfaceStyle;
  var com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable;
  function SurfaceVars$_get_BackgroundColor_$ref_ysiqw0() {
    return function (p0) {
      return p0.a3g();
    };
  }
  function SurfaceVars$_get_Color_$ref_yzfonm() {
    return function (p0) {
      return p0.y3f();
    };
  }
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().o2x();
    tmp.o3m_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().o2x();
    tmp_0.p3m_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(SurfaceVars).a3g = function () {
    var tmp = KProperty1;
    return this.o3m_1.u2x(this, getPropertyCallableRef('BackgroundColor', 1, tmp, SurfaceVars$_get_BackgroundColor_$ref_ysiqw0(), null));
  };
  protoOf(SurfaceVars).y3f = function () {
    var tmp = KProperty1;
    return this.p3m_1.u2x(this, getPropertyCallableRef('Color', 1, tmp, SurfaceVars$_get_Color_$ref_yzfonm(), null));
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function Surface(modifier, variant, colorModeOverride, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var colorModeOverride_0 = {_v: colorModeOverride};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-2017137850);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.p13(variant_0._v) : $composer_0.s13(variant_0._v)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = colorModeOverride_0._v;
      if (tmp_0.r13(tmpEnum == null ? -1 : tmpEnum.l2_1)) {
        tmp = 256;
      } else {
        tmp = 128;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.p13(ref_0._v) : $composer_0.s13(ref_0._v)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.s13(content) ? 16384 : 8192);
    if ($composer_0.u13(!(($dirty & 9363) === 9362), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        colorModeOverride_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      var tmp0 = toModifier(get_SurfaceStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).w33(modifier_0._v);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_1;
      if (!(colorModeOverride_0._v == null)) {
        tmp_1 = classNames(Companion_instance, [get_cssClass(colorModeOverride_0._v)]);
      } else {
        tmp_1 = Companion_instance;
      }
      var surfaceModifier = tmp0.w33(tmp_1);
      if (colorModeOverride_0._v == null || get_useScope(Companion_getInstance_0().w38_1)) {
        $composer_0.w12(-1665744441);
        var tmp_2 = toAttrs(surfaceModifier);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(555341228, true, Surface$lambda(ref_0, colorModeOverride_0, content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.p13(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.n13();
        var tmp_3;
        if (invalid || it === Companion_getInstance().p12_1) {
          var value = ComposableLambda$invoke$ref_14(dispatchReceiver);
          $composer_1.o13(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_2, tmp0_0, $composer_0, 48, 0);
        $composer_0.x12();
      } else {
        $composer_0.w12(-1665336667);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        var it_0 = this_0.n13();
        var tmp_5;
        if (false || it_0 === Companion_getInstance().p12_1) {
          var value_0 = mutableStateOf(null);
          this_0.o13(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var surfaceElement$delegate = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        // Inline function 'kotlin.let' call
        var it_1 = this_1.n13();
        var tmp_7;
        if (false || it_1 === Companion_getInstance().p12_1) {
          var value_1 = Surface$lambda_2(surfaceElement$delegate);
          this_1.o13(value_1);
          tmp_7 = value_1;
        } else {
          tmp_7 = it_1;
        }
        var tmp_8 = tmp_7;
        var tmp$ret$16 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        var tmp_9 = toAttrs(surfaceModifier, tmp$ret$16);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(-189574461, true, Surface$lambda_3(ref_0, colorModeOverride_0, surfaceElement$delegate, content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.p13(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_2 = $composer_2.n13();
        var tmp_10;
        if (invalid_0 || it_2 === Companion_getInstance().p12_1) {
          var value_2 = ComposableLambda$invoke$ref_16(dispatchReceiver_0);
          $composer_2.o13(value_2);
          tmp_10 = value_2;
        } else {
          tmp_10 = it_2;
        }
        var tmp_11 = tmp_10;
        var tmp0_1 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp_9, tmp0_1, $composer_0, 48, 0);
        $composer_0.x12();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Surface$lambda_4(modifier_0, variant_0, colorModeOverride_0, ref_0, content, $changed, $default));
    }
  }
  function SurfaceStyle$lambda($this$CssStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$CssStyle.c39(SurfaceStyle$lambda$lambda);
    return Unit_instance;
  }
  function SurfaceStyle$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_instance, SurfaceVars_getInstance().a3g().o2x()), SurfaceVars_getInstance().y3f().o2x());
  }
  function Surface$lambda$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.h13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_13(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function Surface$lambda($ref, $colorModeOverride, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      var tmp;
      if (!($colorModeOverride._v == null)) {
        $composer_0.w12(-43418289);
        var tmp_0 = $colorModeOverride._v.z3c();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-152149391, true, Surface$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.p13(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.n13();
        var tmp_1;
        if (invalid || it === Companion_getInstance().p12_1) {
          var value = ComposableLambda$invoke$ref_13(dispatchReceiver);
          $composer_1.o13(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        CompositionLocalProvider(tmp_0, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
        $composer_0.x12();
        tmp = Unit_instance;
      } else {
        $composer_0.w12(-43281331);
        $content($composer_0, 0);
        $composer_0.x12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Surface$lambda_0($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true);
    return $surfaceElement$delegate.t1();
  }
  function Surface$lambda_1($surfaceElement$delegate, _set____db54di) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true);
    $surfaceElement$delegate.oy(_set____db54di);
    return Unit_instance;
  }
  function Surface$$inlined$cache$2$2$1() {
  }
  protoOf(Surface$$inlined$cache$2$2$1).ts = function () {
  };
  function Surface$lambda$lambda_0($surfaceElement$delegate) {
    return function ($this$ref, it) {
      Surface$lambda_1($surfaceElement$delegate, it);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Surface$$inlined$cache$2$2$1();
    };
  }
  function Surface$lambda_2($surfaceElement$delegate) {
    return function ($this$toAttrs) {
      $this$toAttrs.e2m(Surface$lambda$lambda_0($surfaceElement$delegate));
      return Unit_instance;
    };
  }
  function Surface$lambda$slambda($surfaceElement, $colorModeOverride, resultContinuation) {
    this.y3m_1 = $surfaceElement;
    this.z3m_1 = $colorModeOverride;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$slambda).e1r = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1r($this$LaunchedEffect, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(Surface$lambda$slambda).z8 = function (p1, $completion) {
    return this.e1r((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          var _iterator__ex2g4s = asList(this.y3m_1.classList).i();
          while (_iterator__ex2g4s.j()) {
            var element = _iterator__ex2g4s.k();
            var ident = new CssIdent(element);
            if (isSuffixedWith(ident, this.z3m_1._v.w36()) && get_SilkTheme().u3c(withColorModeSuffixRemoved(ident).g2k_1)) {
              this.y3m_1.classList.replace(element, suffixedWith(ident, this.z3m_1._v).g2k_1);
            }
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$lambda$slambda).f1r = function ($this$LaunchedEffect, completion) {
    var i = new Surface$lambda$slambda(this.y3m_1, this.z3m_1, completion);
    i.a3n_1 = $this$LaunchedEffect;
    return i;
  };
  function Surface$lambda$slambda_0($surfaceElement, $colorModeOverride, resultContinuation) {
    var i = new Surface$lambda$slambda($surfaceElement, $colorModeOverride, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1r($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda$lambda_1($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.h13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_15(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function Surface$lambda_3($ref, $colorModeOverride, $surfaceElement$delegate, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      var tmp0_safe_receiver = Surface$lambda_0($surfaceElement$delegate);
      if (tmp0_safe_receiver == null) {
        $composer_0.w12(269355054);
        $composer_0.x12();
      } else {
        $composer_0.w12(269355055);
        // Inline function 'kotlin.let' call
        var parentColorMode = Companion_instance_17.t36($composer_0, 6);
        var tmp = $colorModeOverride._v;
        var tmp_0 = $composer_0.s13(tmp0_safe_receiver);
        var tmp_1 = $composer_0;
        var tmpEnum = $colorModeOverride._v;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(tmp_0 | tmp_1.r13(tmpEnum == null ? -1 : tmpEnum.l2_1));
        // Inline function 'kotlin.let' call
        var it = $composer_0.n13();
        var tmp_2;
        if (invalid || it === Companion_getInstance().p12_1) {
          var value = Surface$lambda$slambda_0(tmp0_safe_receiver, $colorModeOverride, null);
          $composer_0.o13(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp$ret$3 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        LaunchedEffect(parentColorMode, tmp, tmp$ret$3, $composer_0, 0);
        var tmp_4 = $colorModeOverride._v.z3c();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1144900937, true, Surface$lambda$lambda_1($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.p13(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.n13();
        var tmp_5;
        if (invalid_0 || it_0 === Companion_getInstance().p12_1) {
          var value_0 = ComposableLambda$invoke$ref_15(dispatchReceiver);
          $composer_1.o13(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        CompositionLocalProvider(tmp_4, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
        $composer_0.x12();
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_16(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Surface$lambda_4($modifier, $variant, $colorModeOverride, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface($modifier._v, $variant._v, $colorModeOverride._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle = CssStyle(VOID, SurfaceStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable;
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle;
  }
  var OverlayStyle;
  var com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable;
  function OverlayVars$_get_BackgroundColor_$ref_jn4iwz() {
    return function (p0) {
      return p0.a3g();
    };
  }
  function OverlayVars() {
    OverlayVars_instance = this;
    this.b3n_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).a3g = function () {
    var tmp = KProperty1;
    return this.b3n_1.u2x(this, getPropertyCallableRef('BackgroundColor', 1, tmp, OverlayVars$_get_BackgroundColor_$ref_jn4iwz(), null));
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function OverlayStyle$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_instance, OverlayVars_getInstance().a3g().o2x());
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_instance_5;
      OverlayStyle = base(tmp, VOID, OverlayStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable;
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle;
  }
  var PopupStyle;
  var com_varabyte_kobweb_silk_components_overlay_PopupVars$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupScope$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable;
  function PopupVars$_get_TransitionDuration_$ref_94payl() {
    return function (p0) {
      return p0.x3j();
    };
  }
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().z3l().o2x();
    tmp.c3n_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
  }
  protoOf(PopupVars).x3j = function () {
    var tmp = KProperty1;
    return this.c3n_1.u2x(this, getPropertyCallableRef('TransitionDuration', 1, tmp, PopupVars$_get_TransitionDuration_$ref_94payl(), null));
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function PopupStyle$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition_0(Companion_instance, [Companion_instance_2.c2y('opacity', PopupVars_getInstance().x3j().o2x())]);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_instance_5;
      PopupStyle = base(tmp, VOID, PopupStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_PopupVars$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupScope$stable = 0;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable = 0;
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle;
  }
  var TooltipStyle;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle;
  }
  var TooltipArrowStyle;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant;
  }
  var TopLeftTooltipArrowVariant;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant;
  }
  var TopTooltipArrowVariant;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant;
  }
  var TopRightTooltipArrowVariant;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant;
  }
  var LeftTopTooltipArrowVariant;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant;
  }
  var LeftTooltipArrowVariant;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant;
  }
  var LeftBottomTooltipArrowVariant;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant;
  }
  var RightTopTooltipArrowVariant;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant;
  }
  var RightTooltipArrowVariant;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant;
  }
  var RightBottomTooltipArrowVariant;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant;
  }
  var BottomLeftTooltipArrowVariant;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant;
  }
  var BottomTooltipArrowVariant;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant;
  }
  var BottomRightTooltipArrowVariant;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  var com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable;
  function TooltipVars$_get_BackgroundColor_$ref_y3bglm() {
    return function (p0) {
      return p0.a3g();
    };
  }
  function TooltipVars$_get_Color_$ref_gf06w8() {
    return function (p0) {
      return p0.y3f();
    };
  }
  function TooltipVars() {
    TooltipVars_instance = this;
    this.d3n_1 = StyleVariable('silk');
    this.e3n_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).a3g = function () {
    var tmp = KProperty1;
    return this.d3n_1.u2x(this, getPropertyCallableRef('BackgroundColor', 1, tmp, TooltipVars$_get_BackgroundColor_$ref_y3bglm(), null));
  };
  protoOf(TooltipVars).y3f = function () {
    var tmp = KProperty1;
    return this.e3n_1.u2x(this, getPropertyCallableRef('Color', 1, tmp, TooltipVars$_get_Color_$ref_gf06w8(), null));
  };
  var TooltipVars_instance;
  function TooltipVars_getInstance() {
    if (TooltipVars_instance == null)
      new TooltipVars();
    return TooltipVars_instance;
  }
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return border_0(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return border_0(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return border_0(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return border_0(_this__u8e3s4, triangleUp$lambda(color));
  }
  function TooltipStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().a3g().o2x()), TooltipVars_getInstance().y3f().o2x()), get_px(6));
  }
  function TooltipArrowStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border_0(tmp_0, TooltipArrowStyle$lambda$lambda);
  }
  function TooltipArrowStyle$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.k36(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.j36('solid');
    return Unit_instance;
  }
  function TopLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_2(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().a3g().o2x());
  }
  function TopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_2(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().a3g().o2x());
  }
  function TopRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_2(Companion_instance, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().a3g().o2x());
  }
  function LeftTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_instance, get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().a3g().o2x());
  }
  function LeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().a3g().o2x());
  }
  function LeftBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_2(Companion_instance, VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().a3g().o2x());
  }
  function RightTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_instance, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().a3g().o2x());
  }
  function RightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().a3g().o2x());
  }
  function RightBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_2(Companion_instance, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().a3g().o2x());
  }
  function BottomLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().a3g().o2x());
  }
  function BottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().a3g().o2x());
  }
  function BottomRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_2(Companion_instance, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().a3g().o2x());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_instance, get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$border) {
      $this$border.i36(Colors_instance.i35(), Colors_instance.i35(), $color, Colors_instance.i35());
      return Unit_instance;
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$border) {
      $this$border.i36(Colors_instance.i35(), $color, Colors_instance.i35(), Colors_instance.i35());
      return Unit_instance;
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$border) {
      $this$border.i36(Colors_instance.i35(), Colors_instance.i35(), Colors_instance.i35(), $color);
      return Unit_instance;
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$border) {
      $this$border.i36($color, Colors_instance.i35(), Colors_instance.i35(), Colors_instance.i35());
      return Unit_instance;
    };
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_instance_5;
      TooltipStyle = base(tmp, VOID, TooltipStyle$lambda);
      var tmp_0 = Companion_instance_5;
      TooltipArrowStyle = base(tmp_0, VOID, TooltipArrowStyle$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$lambda);
      var tmp_13 = Companion_instance_5;
      TooltipTextContainerStyle = base(tmp_13, VOID, TooltipTextContainerStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable = 8;
    }
  }
  function initSilkWidgets(ctx) {
    var mutableTheme = ctx.n37_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.n37_1.e38_1;
    var focusOutline = Blue_getInstance().p3d_1.y34().v34(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().z3d_1;
    // Inline function 'kotlin.run' call
    var color = Colors_instance.k35();
    set_background(this_0.e3e_1, Colors_instance.d36());
    set_color(this_0.e3e_1, color);
    set_border(this_0.e3e_1, color.v34(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.e3e_1, focusOutline);
    set_overlay(this_0.e3e_1, color.v34(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.e3e_1, placeholder);
    var buttonBase = Colors_instance.d36().x34(0.2);
    get_button(this_0.e3e_1).l3n(buttonBase, buttonBase.x34(0.2), Colors_instance.m35(), buttonBase.x34(0.4));
    get_callout(this_0.e3e_1).v3n(Colors_instance.n35(), Colors_instance.r35(), Colors_instance.t35(), Colors_instance.b36(), Colors_instance.u35(), Colors_instance.x35(), Colors_instance.q35());
    get_checkbox(this_0.e3e_1).b3o(Blue_getInstance().p3d_1, Blue_getInstance().q3d_1, Colors_instance.d36());
    var inputFilled = Gray_getInstance().w3d_1;
    var tmp0_$this = get_input(this_0.e3e_1);
    var tmp1_filledFocus = Colors_instance.i35();
    var tmp2_hoveredBorder = Gray_getInstance().z3d_1;
    var tmp3_invalidBorder = Red_getInstance().j3d_1;
    var tmp4_filledHover = inputFilled.x34(0.1);
    tmp0_$this.j3o(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = get_switch(this_0.e3e_1);
    var tmp6_thumb = Colors_instance.d36();
    var tmp7_backgroundOn = Colors_instance.t35();
    var tmp8_backgroundOff = Colors_instance.v35();
    tmp5_$this.b3o(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    get_tab(this_0.e3e_1).z3o(Colors_instance.k35(), Colors_instance.d36(), Colors_instance.m35(), VOID, VOID, Colors_instance.v35(), Colors_instance.e36(), Colors_instance.d36());
    get_tooltip(this_0.e3e_1).e3p(get_color_0(this_0.e3e_1), get_background(this_0.e3e_1));
    // Inline function 'kotlin.run' call
    var color_0 = Colors_instance.d36();
    set_background(this_0.f3e_1, Colors_instance.k35());
    set_color(this_0.f3e_1, color_0);
    set_border(this_0.f3e_1, color_0.v34(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.f3e_1, focusOutline);
    set_overlay(this_0.f3e_1, color_0.v34(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.f3e_1, placeholder);
    var buttonBase_0 = lightened(Colors_instance.k35(), 0.2);
    get_button(this_0.f3e_1).l3n(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_instance.w35(), lightened(buttonBase_0, 0.4));
    get_callout(this_0.f3e_1).v3n(Colors_instance.a36(), get_callout(this_0.e3e_1).y3g(), get_callout(this_0.e3e_1).z3g(), Colors_instance.j35(), get_callout(this_0.e3e_1).b3h(), get_callout(this_0.e3e_1).c3h(), Colors_instance.y35());
    get_checkbox(this_0.f3e_1).b3o(Blue_getInstance().m3d_1, Blue_getInstance().n3d_1, Colors_instance.k35());
    var inputFilled_0 = Gray_getInstance().d3e_1;
    var tmp0_$this_0 = get_input(this_0.f3e_1);
    var tmp1_filledFocus_0 = Colors_instance.i35();
    var tmp2_hoveredBorder_0 = Gray_getInstance().a3e_1;
    var tmp3_invalidBorder_0 = Red_getInstance().d3d_1;
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.j3o(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = get_switch(this_0.f3e_1);
    var tmp6_thumb_0 = Colors_instance.d36();
    var tmp7_backgroundOn_0 = Colors_instance.w35();
    var tmp8_backgroundOff_0 = Colors_instance.p35();
    tmp5_$this_0.b3o(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    get_tab(this_0.f3e_1).z3o(Colors_instance.d36(), Colors_instance.k35(), Colors_instance.w35(), VOID, VOID, Colors_instance.s35(), Colors_instance.p35(), Colors_instance.k35());
    get_tooltip(this_0.f3e_1).e3p(get_color_0(this_0.f3e_1), get_background(this_0.f3e_1));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_entries_0().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp = '.' + get_cssClass(element);
      registerStyleBase(ctx.m37_1, tmp, initSilkWidgets$lambda(element));
    }
    mutableTheme.g38('silk-input', get_InputStyle());
    mutableTheme.s3c('-outlined', get_OutlinedInputVariant());
    mutableTheme.s3c('-filled', get_FilledInputVariant());
    mutableTheme.s3c('-flushed', get_FlushedInputVariant());
    mutableTheme.s3c('-unstyled', get_UnstyledInputVariant());
    mutableTheme.g38('silk-input-group', get_InputGroupStyle());
    mutableTheme.m3c('silk-disabled', get_DisabledStyle());
    mutableTheme.m3c('silk-smooth-color', get_SmoothColorStyle());
    mutableTheme.g38('silk-button', get_ButtonStyle());
    mutableTheme.g38('silk-canvas', get_CanvasStyle());
    mutableTheme.g38('silk-callout', get_CalloutStyle());
    mutableTheme.s3c('-left-bordered', get_LeftBorderedCalloutVariant());
    mutableTheme.s3c('-left-bordered-filled', get_LeftBorderedFilledCalloutVariant());
    mutableTheme.s3c('-outlined', get_OutlinedCalloutVariant());
    mutableTheme.s3c('-outlined-filled', get_OutlinedFilledCalloutVariant());
    mutableTheme.s3c('-matching-link', get_MatchingLinkCalloutVariant());
    mutableTheme.g38('silk-checkbox', get_CheckboxStyle());
    mutableTheme.s3c('-checkbox', get_CheckboxInputVariant());
    mutableTheme.g38('silk-checkbox-icon-container', get_CheckboxIconContainerStyle());
    mutableTheme.g38('silk-checkbox-icon', get_CheckboxIconStyle());
    mutableTheme.s3c('-checked', get_CheckedCheckboxIconContainerVariant());
    mutableTheme.s3c('-unchecked', get_UncheckedCheckboxIconContainerVariant());
    mutableTheme.g38('silk-overlay', get_OverlayStyle());
    mutableTheme.g38('silk-popup', get_PopupStyle());
    mutableTheme.g38('silk-simple-grid', get_SimpleGridStyle());
    mutableTheme.g38('silk-surface', get_SurfaceStyle());
    mutableTheme.g38('silk-horizontal-divider', get_HorizontalDividerStyle());
    mutableTheme.g38('silk-vertical-divider', get_VerticalDividerStyle());
    mutableTheme.g38('silk-switch', get_SwitchStyle());
    mutableTheme.g38('silk-switch-track', get_SwitchTrackStyle());
    mutableTheme.g38('silk-switch-thumb', get_SwitchThumbStyle());
    mutableTheme.s3c('-switch', get_SwitchInputVariant());
    mutableTheme.g38('silk-tabs', get_TabsStyle());
    mutableTheme.g38('silk-tabs-tab-row', get_TabsTabRowStyle());
    mutableTheme.g38('silk-tabs-tab', get_TabsTabStyle());
    mutableTheme.g38('silk-tabs-panel', get_TabsPanelStyle());
    mutableTheme.g38('silk-tooltip-arrow', get_TooltipArrowStyle());
    mutableTheme.s3c('-top-left', get_TopLeftTooltipArrowVariant());
    mutableTheme.s3c('-top', get_TopTooltipArrowVariant());
    mutableTheme.s3c('-top-right', get_TopRightTooltipArrowVariant());
    mutableTheme.s3c('-left-top', get_LeftTopTooltipArrowVariant());
    mutableTheme.s3c('-left', get_LeftTooltipArrowVariant());
    mutableTheme.s3c('-left-bottom', get_LeftBottomTooltipArrowVariant());
    mutableTheme.s3c('-right-top', get_RightTopTooltipArrowVariant());
    mutableTheme.s3c('-right', get_RightTooltipArrowVariant());
    mutableTheme.s3c('-right-bottom', get_RightBottomTooltipArrowVariant());
    mutableTheme.s3c('-bottom-left', get_BottomLeftTooltipArrowVariant());
    mutableTheme.s3c('-bottom', get_BottomTooltipArrowVariant());
    mutableTheme.s3c('-bottom-right', get_BottomRightTooltipArrowVariant());
    mutableTheme.g38('silk-tooltip', get_TooltipStyle());
    mutableTheme.g38('silk-tooltip-text', get_TooltipTextContainerStyle());
    mutableTheme.t3c('silk-checkbox-enabled', get_CheckboxEnabledAnim());
    mutableTheme.k3c('silk-button-size_xs', Companion_getInstance_2().m3i_1);
    mutableTheme.k3c('silk-button-size_sm', Companion_getInstance_2().n3i_1);
    mutableTheme.k3c('silk-button-size_md', Companion_getInstance_2().o3i_1);
    mutableTheme.k3c('silk-button-size_lg', Companion_getInstance_2().p3i_1);
    mutableTheme.k3c('silk-checkbox-size_sm', Companion_getInstance_3().z3j_1);
    mutableTheme.k3c('silk-checkbox-size_md', Companion_getInstance_3().a3k_1);
    mutableTheme.k3c('silk-checkbox-size_lg', Companion_getInstance_3().b3k_1);
    mutableTheme.k3c('silk-input-size_xs', Companion_getInstance_4().b3l_1);
    mutableTheme.k3c('silk-input-size_sm', Companion_getInstance_4().c3l_1);
    mutableTheme.k3c('silk-input-size_md', Companion_getInstance_4().d3l_1);
    mutableTheme.k3c('silk-input-size_lg', Companion_getInstance_4().e3l_1);
    mutableTheme.k3c('silk-switch-size_sm', Companion_getInstance_5().a3m_1);
    mutableTheme.k3c('silk-switch-size_md', Companion_getInstance_5().b3m_1);
    mutableTheme.k3c('silk-switch-size_lg', Companion_getInstance_5().c3m_1);
    mutableTheme.k3c('silk-callout-type_caution', Companion_getInstance_1().l3h_1);
    mutableTheme.k3c('silk-callout-type_important', Companion_getInstance_1().m3h_1);
    mutableTheme.k3c('silk-callout-type_note', Companion_getInstance_1().n3h_1);
    mutableTheme.k3c('silk-callout-type_question', Companion_getInstance_1().o3h_1);
    mutableTheme.k3c('silk-callout-type_quote', Companion_getInstance_1().p3h_1);
    mutableTheme.k3c('silk-callout-type_tip', Companion_getInstance_1().q3h_1);
    mutableTheme.k3c('silk-callout-type_warning', Companion_getInstance_1().r3h_1);
  }
  function silkColorsModifier(colorMode) {
    var palette = toPalette(colorMode);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(colorScheme(Companion_instance, colorMode.x3c() ? Companion_instance_18.d2v() : Companion_instance_18.e2v()), get_BackgroundColorVar(), get_background_0(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().f3i(), get_button_0(palette).f3p()), ButtonVars_getInstance().h3i(), get_button_0(palette).k2p()), ButtonVars_getInstance().i3i(), get_button_0(palette).g3p()), CheckboxVars_getInstance().v3j(), get_checkbox_0(palette).h3p()), CheckboxVars_getInstance().w3j(), get_checkbox_0(palette).k2p()), CheckboxVars_getInstance().u3j(), get_checkbox_0(palette).i3p()), InputVars_getInstance().t3k(), get_input_0(palette).j3p()), InputVars_getInstance().u3k(), get_input_0(palette).k3p()), InputVars_getInstance().v3k(), get_input_0(palette).l3p()), InputVars_getInstance().w3k(), get_input_0(palette).m3p()), InputVars_getInstance().x3k(), get_input_0(palette).n3p()), OverlayVars_getInstance().a3g(), get_overlay(palette)), SwitchVars_getInstance().y3l(), get_switch_0(palette).o3p()), TabVars_getInstance().y3f(), get_tab_0(palette).i3p()), TabVars_getInstance().a3g(), get_tab_0(palette).h3p()), TabVars_getInstance().b3g(), get_tab_0(palette).p3p()), TabVars_getInstance().c3g(), get_tab_0(palette).k2p()), TabVars_getInstance().d3g(), get_tab_0(palette).g3p()), TooltipVars_getInstance().a3g(), get_tooltip_0(palette).h3p()), TooltipVars_getInstance().y3f(), get_tooltip_0(palette).i3p());
  }
  function initSilkWidgets$lambda($colorMode) {
    return function () {
      return silkColorsModifier($colorMode);
    };
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle;
  }
  var DisabledStyle;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    var tmp = KProperty0;
    return SmoothColorTransitionDurationVar$delegate.u2x(null, getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, tmp, _get_SmoothColorTransitionDurationVar_$ref_eamzbj(), null));
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle;
  }
  var SmoothColorStyle;
  function DisabledStyle$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.w12(812442038);
    var tmp0 = tabIndex(ariaDisabled(Companion_instance), -1);
    $composer_0.x12();
    return tmp0;
  }
  function DisabledStyle$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_instance, 0.5), Companion_instance_1.m2v());
  }
  function _get_SmoothColorTransitionDurationVar_$ref_eamzbj() {
    return function () {
      return get_SmoothColorTransitionDurationVar();
    };
  }
  function SmoothColorStyle$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition_0(Companion_instance, [Companion_instance_2.c2y('background-color', get_SmoothColorTransitionDurationVar().o2x())]);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_instance_5;
      var tmp_0 = DisabledStyle$lambda;
      DisabledStyle = base_0(tmp, tmp_0, DisabledStyle$lambda_0);
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().o3g().o2x();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_instance_5;
      SmoothColorStyle = base_1(tmp_1, VOID, SmoothColorStyle$lambda);
    }
  }
  var com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable;
  var com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable;
  function TransitionDurationVars$_get_VeryFast_$ref_cu0uvd() {
    return function (p0) {
      return p0.y3j();
    };
  }
  function TransitionDurationVars$_get_Fast_$ref_vg87kd() {
    return function (p0) {
      return p0.z3l();
    };
  }
  function TransitionDurationVars$_get_Normal_$ref_e4nae6() {
    return function (p0) {
      return p0.o3g();
    };
  }
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.g3g_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.h3g_1 = StyleVariable_1(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.i3g_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.j3g_1 = StyleVariable_1(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.k3g_1 = StyleVariable_1(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.l3g_1 = StyleVariable_1(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.m3g_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.n3g_1 = StyleVariable_1(tmp0_defaultFallback_6, 'silk');
  }
  protoOf(TransitionDurationVars).y3j = function () {
    var tmp = KProperty1;
    return this.i3g_1.u2x(this, getPropertyCallableRef('VeryFast', 1, tmp, TransitionDurationVars$_get_VeryFast_$ref_cu0uvd(), null));
  };
  protoOf(TransitionDurationVars).z3l = function () {
    var tmp = KProperty1;
    return this.j3g_1.u2x(this, getPropertyCallableRef('Fast', 1, tmp, TransitionDurationVars$_get_Fast_$ref_vg87kd(), null));
  };
  protoOf(TransitionDurationVars).o3g = function () {
    var tmp = KProperty1;
    return this.k3g_1.u2x(this, getPropertyCallableRef('Normal', 1, tmp, TransitionDurationVars$_get_Normal_$ref_e4nae6(), null));
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return BackgroundColorVar$delegate.u2x(null, getPropertyCallableRef('BackgroundColorVar', 0, tmp, _get_BackgroundColorVar_$ref_pnobug(), null));
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return ColorVar$delegate.u2x(null, getPropertyCallableRef('ColorVar', 0, tmp, _get_ColorVar_$ref_cclgba(), null));
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return BorderColorVar$delegate.u2x(null, getPropertyCallableRef('BorderColorVar', 0, tmp, _get_BorderColorVar_$ref_280m9i(), null));
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return FocusOutlineColorVar$delegate.u2x(null, getPropertyCallableRef('FocusOutlineColorVar', 0, tmp, _get_FocusOutlineColorVar_$ref_r81ezw(), null));
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return PlaceholderOpacityVar$delegate.u2x(null, getPropertyCallableRef('PlaceholderOpacityVar', 0, tmp, _get_PlaceholderOpacityVar_$ref_6cr8i9(), null));
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return PlaceholderColorVar$delegate.u2x(null, getPropertyCallableRef('PlaceholderColorVar', 0, tmp, _get_PlaceholderColorVar_$ref_is1luf(), null));
  }
  var PlaceholderColorVar$delegate;
  function _get_BackgroundColorVar_$ref_pnobug() {
    return function () {
      return get_BackgroundColorVar();
    };
  }
  function _get_ColorVar_$ref_cclgba() {
    return function () {
      return get_ColorVar();
    };
  }
  function _get_BorderColorVar_$ref_280m9i() {
    return function () {
      return get_BorderColorVar();
    };
  }
  function _get_FocusOutlineColorVar_$ref_r81ezw() {
    return function () {
      return get_FocusOutlineColorVar();
    };
  }
  function _get_PlaceholderOpacityVar_$ref_6cr8i9() {
    return function () {
      return get_PlaceholderOpacityVar();
    };
  }
  function _get_PlaceholderColorVar_$ref_is1luf() {
    return function () {
      return get_PlaceholderColorVar();
    };
  }
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar$delegate = StyleVariable('silk');
      ColorVar$delegate = StyleVariable('silk');
      BorderColorVar$delegate = StyleVariable('silk');
      FocusOutlineColorVar$delegate = StyleVariable('silk');
      PlaceholderOpacityVar$delegate = StyleVariable_2(1.0, 'silk');
      PlaceholderColorVar$delegate = StyleVariable('silk');
    }
  }
  var com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable;
  var com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable;
  function FontSizeVars$_get_XS_$ref_g2g1y1() {
    return function (p0) {
      return p0.u3i();
    };
  }
  function FontSizeVars$_get_SM_$ref_l9l5g8() {
    return function (p0) {
      return p0.v3i();
    };
  }
  function FontSizeVars$_get_MD_$ref_sgunm3() {
    return function (p0) {
      return p0.w3i();
    };
  }
  function FontSizeVars$_get_LG_$ref_f7l8kn() {
    return function (p0) {
      return p0.x3i();
    };
  }
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.75);
    tmp.q3i_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.r3i_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.s3i_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.t3i_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(FontSizeVars).u3i = function () {
    var tmp = KProperty1;
    return this.q3i_1.u2x(this, getPropertyCallableRef('XS', 1, tmp, FontSizeVars$_get_XS_$ref_g2g1y1(), null));
  };
  protoOf(FontSizeVars).v3i = function () {
    var tmp = KProperty1;
    return this.r3i_1.u2x(this, getPropertyCallableRef('SM', 1, tmp, FontSizeVars$_get_SM_$ref_l9l5g8(), null));
  };
  protoOf(FontSizeVars).w3i = function () {
    var tmp = KProperty1;
    return this.s3i_1.u2x(this, getPropertyCallableRef('MD', 1, tmp, FontSizeVars$_get_MD_$ref_sgunm3(), null));
  };
  protoOf(FontSizeVars).x3i = function () {
    var tmp = KProperty1;
    return this.t3i_1.u2x(this, getPropertyCallableRef('LG', 1, tmp, FontSizeVars$_get_LG_$ref_f7l8kn(), null));
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function BorderRadiusVars$_get_XS_$ref_y88cg7() {
    return function (p0) {
      return p0.u3i();
    };
  }
  function BorderRadiusVars$_get_SM_$ref_vlqm0q() {
    return function (p0) {
      return p0.v3i();
    };
  }
  function BorderRadiusVars$_get_MD_$ref_ab2d3x() {
    return function (p0) {
      return p0.w3i();
    };
  }
  function BorderRadiusVars() {
    BorderRadiusVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.125);
    tmp.f3l_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.25);
    tmp_0.g3l_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.375);
    tmp_1.h3l_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.i3l_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(BorderRadiusVars).u3i = function () {
    var tmp = KProperty1;
    return this.f3l_1.u2x(this, getPropertyCallableRef('XS', 1, tmp, BorderRadiusVars$_get_XS_$ref_y88cg7(), null));
  };
  protoOf(BorderRadiusVars).v3i = function () {
    var tmp = KProperty1;
    return this.g3l_1.u2x(this, getPropertyCallableRef('SM', 1, tmp, BorderRadiusVars$_get_SM_$ref_vlqm0q(), null));
  };
  protoOf(BorderRadiusVars).w3i = function () {
    var tmp = KProperty1;
    return this.h3l_1.u2x(this, getPropertyCallableRef('MD', 1, tmp, BorderRadiusVars$_get_MD_$ref_ab2d3x(), null));
  };
  var BorderRadiusVars_instance;
  function BorderRadiusVars_getInstance() {
    if (BorderRadiusVars_instance == null)
      new BorderRadiusVars();
    return BorderRadiusVars_instance;
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCallout$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable;
  function get_color(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.j3e('color');
  }
  function set_background(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.r3e('background', value);
  }
  function get_background(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.j3e('background');
  }
  function set_color(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.r3e('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.j3e('color');
  }
  function set_border(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.r3e('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.r3e('focusOutline', value);
  }
  function set_overlay(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.r3e('overlay', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.r3e('placeholder', value);
  }
  function SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f() {
    return function (p0) {
      return p0.f3p();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt() {
    return function (p0, p1) {
      p0.q3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f_0() {
    return function (p0) {
      return p0.f3p();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt_0() {
    return function (p0, p1) {
      p0.q3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma() {
    return function (p0) {
      return p0.k2p();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa() {
    return function (p0, p1) {
      p0.r3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma_0() {
    return function (p0) {
      return p0.k2p();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa_0() {
    return function (p0, p1) {
      p0.r3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm() {
    return function (p0) {
      return p0.s3p();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy() {
    return function (p0, p1) {
      p0.t3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm_0() {
    return function (p0) {
      return p0.s3p();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy_0() {
    return function (p0, p1) {
      p0.t3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc() {
    return function (p0) {
      return p0.g3p();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww() {
    return function (p0, p1) {
      p0.u3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc_0() {
    return function (p0) {
      return p0.g3p();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww_0() {
    return function (p0, p1) {
      p0.u3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj() {
    return function (p0) {
      return p0.x3g();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f() {
    return function (p0, p1) {
      p0.v3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj_0() {
    return function (p0) {
      return p0.x3g();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f_0() {
    return function (p0, p1) {
      p0.v3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm() {
    return function (p0) {
      return p0.y3g();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy() {
    return function (p0, p1) {
      p0.w3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm_0() {
    return function (p0) {
      return p0.y3g();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy_0() {
    return function (p0, p1) {
      p0.w3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78() {
    return function (p0) {
      return p0.z3g();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg() {
    return function (p0, p1) {
      p0.x3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78_0() {
    return function (p0) {
      return p0.z3g();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg_0() {
    return function (p0, p1) {
      p0.x3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw() {
    return function (p0) {
      return p0.a3h();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698() {
    return function (p0, p1) {
      p0.y3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw_0() {
    return function (p0) {
      return p0.a3h();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698_0() {
    return function (p0, p1) {
      p0.y3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4() {
    return function (p0) {
      return p0.b3h();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg() {
    return function (p0, p1) {
      p0.z3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4_0() {
    return function (p0) {
      return p0.b3h();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg_0() {
    return function (p0, p1) {
      p0.z3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr() {
    return function (p0) {
      return p0.c3h();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9() {
    return function (p0, p1) {
      p0.a3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr_0() {
    return function (p0) {
      return p0.c3h();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9_0() {
    return function (p0, p1) {
      p0.a3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao() {
    return function (p0) {
      return p0.d3h();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk() {
    return function (p0, p1) {
      p0.b3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao_0() {
    return function (p0) {
      return p0.d3h();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk_0() {
    return function (p0, p1) {
      p0.b3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7() {
    return function (p0) {
      return p0.h3p();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh() {
    return function (p0, p1) {
      p0.c3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7_0() {
    return function (p0) {
      return p0.h3p();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh_0() {
    return function (p0, p1) {
      p0.c3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib() {
    return function (p0) {
      return p0.k2p();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r() {
    return function (p0, p1) {
      p0.r3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib_0() {
    return function (p0) {
      return p0.k2p();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r_0() {
    return function (p0, p1) {
      p0.r3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw() {
    return function (p0) {
      return p0.i3p();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo() {
    return function (p0, p1) {
      p0.d3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw_0() {
    return function (p0) {
      return p0.i3p();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo_0() {
    return function (p0, p1) {
      p0.d3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb() {
    return function (p0) {
      return p0.j3p();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h() {
    return function (p0, p1) {
      p0.e3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb_0() {
    return function (p0) {
      return p0.j3p();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h_0() {
    return function (p0, p1) {
      p0.e3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p() {
    return function (p0) {
      return p0.k3p();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n() {
    return function (p0, p1) {
      p0.f3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p_0() {
    return function (p0) {
      return p0.k3p();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n_0() {
    return function (p0, p1) {
      p0.f3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e() {
    return function (p0) {
      return p0.l3p();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u() {
    return function (p0, p1) {
      p0.g3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e_0() {
    return function (p0) {
      return p0.l3p();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u_0() {
    return function (p0, p1) {
      p0.g3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0() {
    return function (p0) {
      return p0.m3p();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k() {
    return function (p0, p1) {
      p0.h3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0_0() {
    return function (p0) {
      return p0.m3p();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k_0() {
    return function (p0, p1) {
      p0.h3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo() {
    return function (p0) {
      return p0.n3p();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8() {
    return function (p0, p1) {
      p0.i3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo_0() {
    return function (p0) {
      return p0.n3p();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8_0() {
    return function (p0, p1) {
      p0.i3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf() {
    return function (p0) {
      return p0.j3q();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx() {
    return function (p0, p1) {
      p0.k3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf_0() {
    return function (p0) {
      return p0.j3q();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx_0() {
    return function (p0, p1) {
      p0.k3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d() {
    return function (p0) {
      return p0.l3q();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1() {
    return function (p0, p1) {
      p0.m3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d_0() {
    return function (p0) {
      return p0.l3q();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1_0() {
    return function (p0, p1) {
      p0.m3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq() {
    return function (p0) {
      return p0.o3p();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu() {
    return function (p0, p1) {
      p0.n3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq_0() {
    return function (p0) {
      return p0.o3p();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu_0() {
    return function (p0, p1) {
      p0.n3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q() {
    return function (p0) {
      return p0.i3p();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u() {
    return function (p0, p1) {
      p0.d3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q_0() {
    return function (p0) {
      return p0.i3p();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u_0() {
    return function (p0, p1) {
      p0.d3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v() {
    return function (p0) {
      return p0.h3p();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f() {
    return function (p0, p1) {
      p0.c3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v_0() {
    return function (p0) {
      return p0.h3p();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f_0() {
    return function (p0, p1) {
      p0.c3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z() {
    return function (p0) {
      return p0.o3q();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn() {
    return function (p0, p1) {
      p0.p3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z_0() {
    return function (p0) {
      return p0.o3q();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn_0() {
    return function (p0, p1) {
      p0.p3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4() {
    return function (p0) {
      return p0.q3q();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc() {
    return function (p0, p1) {
      p0.r3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4_0() {
    return function (p0) {
      return p0.q3q();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc_0() {
    return function (p0, p1) {
      p0.r3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2() {
    return function (p0) {
      return p0.s3q();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da() {
    return function (p0, p1) {
      p0.t3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2_0() {
    return function (p0) {
      return p0.s3q();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da_0() {
    return function (p0, p1) {
      p0.t3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7() {
    return function (p0) {
      return p0.k2p();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d() {
    return function (p0, p1) {
      p0.r3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7_0() {
    return function (p0) {
      return p0.k2p();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d_0() {
    return function (p0, p1) {
      p0.r3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz() {
    return function (p0) {
      return p0.g3p();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx() {
    return function (p0, p1) {
      p0.u3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz_0() {
    return function (p0) {
      return p0.g3p();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx_0() {
    return function (p0, p1) {
      p0.u3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb() {
    return function (p0) {
      return p0.p3p();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif() {
    return function (p0, p1) {
      p0.u3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb_0() {
    return function (p0) {
      return p0.p3p();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif_0() {
    return function (p0, p1) {
      p0.u3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1() {
    return function (p0) {
      return p0.h3p();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl() {
    return function (p0, p1) {
      p0.c3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1_0() {
    return function (p0) {
      return p0.h3p();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl_0() {
    return function (p0, p1) {
      p0.c3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s() {
    return function (p0) {
      return p0.i3p();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds() {
    return function (p0, p1) {
      p0.d3q(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s_0() {
    return function (p0) {
      return p0.i3p();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds_0() {
    return function (p0, p1) {
      p0.d3q(p1);
      return Unit_instance;
    };
  }
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.h3n_1 = this.q3e();
    this.i3n_1 = this.q3e();
    this.j3n_1 = this.q3e();
    this.k3n_1 = this.q3e();
  }
  protoOf(MutableButton).q3p = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f_0();
    return this.h3n_1.n3e(this, getPropertyCallableRef('default', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt_0()), _set____db54di);
  };
  protoOf(MutableButton).f3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f();
    return this.h3n_1.u2x(this, getPropertyCallableRef('default', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt()));
  };
  protoOf(MutableButton).r3p = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma_0();
    return this.i3n_1.n3e(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa_0()), _set____db54di);
  };
  protoOf(MutableButton).k2p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma();
    return this.i3n_1.u2x(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa()));
  };
  protoOf(MutableButton).t3p = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm_0();
    return this.j3n_1.n3e(this, getPropertyCallableRef('focus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy_0()), _set____db54di);
  };
  protoOf(MutableButton).s3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm();
    return this.j3n_1.u2x(this, getPropertyCallableRef('focus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy()));
  };
  protoOf(MutableButton).u3p = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc_0();
    return this.k3n_1.n3e(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww_0()), _set____db54di);
  };
  protoOf(MutableButton).g3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc();
    return this.k3n_1.u2x(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww()));
  };
  protoOf(MutableButton).l3n = function (default_0, hover, focus, pressed) {
    this.q3p(default_0);
    this.r3p(hover);
    this.t3p(focus);
    this.u3p(pressed);
  };
  function MutableCallout(palette) {
    ColorGroup.call(this, palette, 'callout');
    this.o3n_1 = this.q3e();
    this.p3n_1 = this.q3e();
    this.q3n_1 = this.q3e();
    this.r3n_1 = this.q3e();
    this.s3n_1 = this.q3e();
    this.t3n_1 = this.q3e();
    this.u3n_1 = this.q3e();
  }
  protoOf(MutableCallout).v3p = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj_0();
    return this.o3n_1.n3e(this, getPropertyCallableRef('caution', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f_0()), _set____db54di);
  };
  protoOf(MutableCallout).x3g = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj();
    return this.o3n_1.u2x(this, getPropertyCallableRef('caution', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f()));
  };
  protoOf(MutableCallout).w3p = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm_0();
    return this.p3n_1.n3e(this, getPropertyCallableRef('important', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy_0()), _set____db54di);
  };
  protoOf(MutableCallout).y3g = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm();
    return this.p3n_1.u2x(this, getPropertyCallableRef('important', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy()));
  };
  protoOf(MutableCallout).x3p = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78_0();
    return this.q3n_1.n3e(this, getPropertyCallableRef('note', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg_0()), _set____db54di);
  };
  protoOf(MutableCallout).z3g = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78();
    return this.q3n_1.u2x(this, getPropertyCallableRef('note', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg()));
  };
  protoOf(MutableCallout).y3p = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw_0();
    return this.r3n_1.n3e(this, getPropertyCallableRef('question', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698_0()), _set____db54di);
  };
  protoOf(MutableCallout).a3h = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw();
    return this.r3n_1.u2x(this, getPropertyCallableRef('question', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698()));
  };
  protoOf(MutableCallout).z3p = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4_0();
    return this.s3n_1.n3e(this, getPropertyCallableRef('quote', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg_0()), _set____db54di);
  };
  protoOf(MutableCallout).b3h = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4();
    return this.s3n_1.u2x(this, getPropertyCallableRef('quote', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg()));
  };
  protoOf(MutableCallout).a3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr_0();
    return this.t3n_1.n3e(this, getPropertyCallableRef('tip', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9_0()), _set____db54di);
  };
  protoOf(MutableCallout).c3h = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr();
    return this.t3n_1.u2x(this, getPropertyCallableRef('tip', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9()));
  };
  protoOf(MutableCallout).b3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao_0();
    return this.u3n_1.n3e(this, getPropertyCallableRef('warning', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk_0()), _set____db54di);
  };
  protoOf(MutableCallout).d3h = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao();
    return this.u3n_1.u2x(this, getPropertyCallableRef('warning', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk()));
  };
  protoOf(MutableCallout).v3n = function (caution, important, note, question, quote, tip, warning) {
    this.v3p(caution);
    this.w3p(important);
    this.x3p(note);
    this.y3p(question);
    this.z3p(quote);
    this.a3q(tip);
    this.b3q(warning);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.y3n_1 = this.q3e();
    this.z3n_1 = this.q3e();
    this.a3o_1 = this.q3e();
  }
  protoOf(MutableCheckbox).c3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7_0();
    return this.y3n_1.n3e(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh_0()), _set____db54di);
  };
  protoOf(MutableCheckbox).h3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7();
    return this.y3n_1.u2x(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh()));
  };
  protoOf(MutableCheckbox).r3p = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib_0();
    return this.z3n_1.n3e(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r_0()), _set____db54di);
  };
  protoOf(MutableCheckbox).k2p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib();
    return this.z3n_1.u2x(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r()));
  };
  protoOf(MutableCheckbox).d3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw_0();
    return this.a3o_1.n3e(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo_0()), _set____db54di);
  };
  protoOf(MutableCheckbox).i3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw();
    return this.a3o_1.u2x(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo()));
  };
  protoOf(MutableCheckbox).b3o = function (background, hover, color) {
    this.c3q(background);
    this.r3p(hover);
    this.d3q(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.e3o_1 = this.q3e();
    this.f3o_1 = this.q3e();
    this.g3o_1 = this.q3e();
    this.h3o_1 = this.q3e();
    this.i3o_1 = this.q3e();
  }
  protoOf(MutableInput).e3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb_0();
    return this.e3o_1.n3e(this, getPropertyCallableRef('hoveredBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h_0()), _set____db54di);
  };
  protoOf(MutableInput).j3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb();
    return this.e3o_1.u2x(this, getPropertyCallableRef('hoveredBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h()));
  };
  protoOf(MutableInput).f3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p_0();
    return this.f3o_1.n3e(this, getPropertyCallableRef('invalidBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n_0()), _set____db54di);
  };
  protoOf(MutableInput).k3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p();
    return this.f3o_1.u2x(this, getPropertyCallableRef('invalidBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n()));
  };
  protoOf(MutableInput).g3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e_0();
    return this.g3o_1.n3e(this, getPropertyCallableRef('filled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u_0()), _set____db54di);
  };
  protoOf(MutableInput).l3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e();
    return this.g3o_1.u2x(this, getPropertyCallableRef('filled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u()));
  };
  protoOf(MutableInput).h3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0_0();
    return this.h3o_1.n3e(this, getPropertyCallableRef('filledHover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k_0()), _set____db54di);
  };
  protoOf(MutableInput).m3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0();
    return this.h3o_1.u2x(this, getPropertyCallableRef('filledHover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k()));
  };
  protoOf(MutableInput).i3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo_0();
    return this.i3o_1.n3e(this, getPropertyCallableRef('filledFocus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8_0()), _set____db54di);
  };
  protoOf(MutableInput).n3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo();
    return this.i3o_1.u2x(this, getPropertyCallableRef('filledFocus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8()));
  };
  protoOf(MutableInput).j3o = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.e3q(hoveredBorder);
    this.f3q(invalidBorder);
    this.g3q(filled);
    this.h3q(filledHover);
    this.i3q(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.m3o_1 = this.q3e();
    this.n3o_1 = this.q3e();
    this.o3o_1 = this.q3e();
  }
  protoOf(MutableSwitch).k3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf_0();
    return this.m3o_1.n3e(this, getPropertyCallableRef('backgroundOn', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx_0()), _set____db54di);
  };
  protoOf(MutableSwitch).j3q = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf();
    return this.m3o_1.u2x(this, getPropertyCallableRef('backgroundOn', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx()));
  };
  protoOf(MutableSwitch).m3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d_0();
    return this.n3o_1.n3e(this, getPropertyCallableRef('backgroundOff', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1_0()), _set____db54di);
  };
  protoOf(MutableSwitch).l3q = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d();
    return this.n3o_1.u2x(this, getPropertyCallableRef('backgroundOff', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1()));
  };
  protoOf(MutableSwitch).n3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq_0();
    return this.o3o_1.n3e(this, getPropertyCallableRef('thumb', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu_0()), _set____db54di);
  };
  protoOf(MutableSwitch).o3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq();
    return this.o3o_1.u2x(this, getPropertyCallableRef('thumb', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu()));
  };
  protoOf(MutableSwitch).b3o = function (backgroundOn, backgroundOff, thumb) {
    this.k3q(backgroundOn);
    this.m3q(backgroundOff);
    this.n3q(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.r3o_1 = this.q3e();
    this.s3o_1 = this.q3e();
    this.t3o_1 = this.q3e();
    this.u3o_1 = this.q3e();
    this.v3o_1 = this.q3e();
    this.w3o_1 = this.q3e();
    this.x3o_1 = this.q3e();
    this.y3o_1 = this.q3e();
  }
  protoOf(MutableTab).d3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q_0();
    return this.r3o_1.n3e(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u_0()), _set____db54di);
  };
  protoOf(MutableTab).i3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q();
    return this.r3o_1.u2x(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u()));
  };
  protoOf(MutableTab).c3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v_0();
    return this.s3o_1.n3e(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f_0()), _set____db54di);
  };
  protoOf(MutableTab).h3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v();
    return this.s3o_1.u2x(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f()));
  };
  protoOf(MutableTab).p3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z_0();
    return this.t3o_1.n3e(this, getPropertyCallableRef('selectedColor', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn_0()), _set____db54di);
  };
  protoOf(MutableTab).o3q = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z();
    return this.t3o_1.u2x(this, getPropertyCallableRef('selectedColor', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn()));
  };
  protoOf(MutableTab).r3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4_0();
    return this.u3o_1.n3e(this, getPropertyCallableRef('selectedBackground', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc_0()), _set____db54di);
  };
  protoOf(MutableTab).q3q = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4();
    return this.u3o_1.u2x(this, getPropertyCallableRef('selectedBackground', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc()));
  };
  protoOf(MutableTab).t3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2_0();
    return this.v3o_1.n3e(this, getPropertyCallableRef('selectedBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da_0()), _set____db54di);
  };
  protoOf(MutableTab).s3q = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2();
    return this.v3o_1.u2x(this, getPropertyCallableRef('selectedBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da()));
  };
  protoOf(MutableTab).r3p = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7_0();
    return this.w3o_1.n3e(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d_0()), _set____db54di);
  };
  protoOf(MutableTab).k2p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7();
    return this.w3o_1.u2x(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d()));
  };
  protoOf(MutableTab).u3p = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz_0();
    return this.x3o_1.n3e(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx_0()), _set____db54di);
  };
  protoOf(MutableTab).g3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz();
    return this.x3o_1.u2x(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx()));
  };
  protoOf(MutableTab).u3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb_0();
    return this.y3o_1.n3e(this, getPropertyCallableRef('disabled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif_0()), _set____db54di);
  };
  protoOf(MutableTab).p3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb();
    return this.y3o_1.u2x(this, getPropertyCallableRef('disabled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif()));
  };
  protoOf(MutableTab).v3q = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.d3q(color);
    this.c3q(background);
    this.p3q(selectedColor);
    this.r3q(selectedBackground);
    this.t3q(selectedBorder);
    this.r3p(hover);
    this.u3p(pressed);
    this.u3q(disabled);
  };
  protoOf(MutableTab).z3o = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.v3q(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_instance;
    } else {
      tmp = $super.v3q.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.c3p_1 = this.q3e();
    this.d3p_1 = this.q3e();
  }
  protoOf(MutableTooltip).c3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1_0();
    return this.c3p_1.n3e(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl_0()), _set____db54di);
  };
  protoOf(MutableTooltip).h3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1();
    return this.c3p_1.u2x(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl()));
  };
  protoOf(MutableTooltip).d3q = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s_0();
    return this.d3p_1.n3e(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds_0()), _set____db54di);
  };
  protoOf(MutableTooltip).i3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s();
    return this.d3p_1.u2x(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds()));
  };
  protoOf(MutableTooltip).e3p = function (background, color) {
    this.c3q(background);
    this.d3q(color);
  };
  function get_button(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableButton(_this__u8e3s4);
  }
  function get_callout(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCallout(_this__u8e3s4);
  }
  function get_checkbox(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_input(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableInput(_this__u8e3s4);
  }
  function get_switch(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_tab(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTab(_this__u8e3s4);
  }
  function get_tooltip(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTooltip(_this__u8e3s4);
  }
  function get_background_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.j3e('background');
  }
  function get_border(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.j3e('border');
  }
  function get_focusOutline(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.j3e('focusOutline');
  }
  function get_placeholder_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.j3e('placeholder');
  }
  function get_button_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_button(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_checkbox(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_input_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_input(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_overlay(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.j3e('overlay');
  }
  function get_switch_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_switch(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tab(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tooltip_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tooltip(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_callout_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_callout(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  var properties_initialized_SilkWidgetColorGroups_kt_1mdo2;
  function _init_properties_SilkWidgetColorGroups_kt__mh2tbg() {
    if (!properties_initialized_SilkWidgetColorGroups_kt_1mdo2) {
      properties_initialized_SilkWidgetColorGroups_kt_1mdo2 = true;
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCallout$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable = 0;
    }
  }
  //region block: init
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable = 0;
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable = 8;
  com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable = 8;
  com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_ButtonStyle;
  _.$_$.b = get_HorizontalDividerStyle;
  _.$_$.c = HorizontalDivider;
  _.$_$.d = Surface;
  _.$_$.e = initSilkWidgets;
  _.$_$.f = get_SmoothColorStyle;
  _.$_$.g = get_BorderColorVar;
  _.$_$.h = get_ColorVar;
  _.$_$.i = set_background;
  _.$_$.j = set_border;
  _.$_$.k = get_color;
  _.$_$.l = set_color;
  _.$_$.m = ButtonVars_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
