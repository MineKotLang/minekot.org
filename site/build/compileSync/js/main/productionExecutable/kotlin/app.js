(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './html-internal-html-core-runtime.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-common-kobwebx-frontmatter.js', './kobweb-frontend-kobwebx-markdown.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-kobweb-silk.js', './kotlinx-coroutines-core.js', './kobweb-frontend-kobweb-compose.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./html-internal-html-core-runtime.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-common-kobwebx-frontmatter.js'), require('./kobweb-frontend-kobwebx-markdown.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-kobweb-compose.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'org.example.app:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'org.example.app:site'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'org.example.app:site'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'org.example.app:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'org.example.app:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'org.example.app:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'org.example.app:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'org.example.app:site'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'org.example.app:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'org.example.app:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'org.example.app:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'org.example.app:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'org.example.app:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'org.example.app:site'.");
    }
    if (typeof globalThis['kobweb-common-kobwebx-frontmatter'] === 'undefined') {
      throw new Error("Error loading module 'org.example.app:site'. Its dependency 'kobweb-common-kobwebx-frontmatter' was not found. Please, check whether 'kobweb-common-kobwebx-frontmatter' is loaded prior to 'org.example.app:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobwebx-markdown'] === 'undefined') {
      throw new Error("Error loading module 'org.example.app:site'. Its dependency 'kobweb-frontend-kobwebx-markdown' was not found. Please, check whether 'kobweb-frontend-kobwebx-markdown' is loaded prior to 'org.example.app:site'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'org.example.app:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'org.example.app:site'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'org.example.app:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'org.example.app:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'org.example.app:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'org.example.app:site'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'org.example.app:site'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'org.example.app:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'org.example.app:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'org.example.app:site'.");
    }
    globalThis['org.example.app:site'] = factory(typeof globalThis['org.example.app:site'] === 'undefined' ? {} : globalThis['org.example.app:site'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['kobweb-frontend-kobweb-core'], globalThis['kobweb-frontend-silk-foundation'], globalThis['html-internal-html-core-runtime'], globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kobweb-common-kobwebx-frontmatter'], globalThis['kobweb-frontend-kobwebx-markdown'], globalThis['html-html-core'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kobweb-frontend-kobweb-silk'], globalThis['kotlinx-coroutines-core'], globalThis['kobweb-frontend-kobweb-compose']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobwebx_kobwebx_frontmatter, kotlin_com_varabyte_kobwebx_kobwebx_markdown, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_kobweb_compose) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_androidx_compose_runtime_runtime.$_$.m;
  var CompositionLocalProvider = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var AppGlobals_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.k;
  var to = kotlin_kotlin.$_$.db;
  var mapOf = kotlin_kotlin.$_$.g4;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.l;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var removePrefix = kotlin_kotlin.$_$.j9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var charArrayOf = kotlin_kotlin.$_$.u6;
  var trimStart = kotlin_kotlin.$_$.ca;
  var remove = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var ensureNotNull = kotlin_kotlin.$_$.wa;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.qa;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var com_varabyte_kobweb_core_PageContext$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var DeferringHost = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.n7;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var VOID = kotlin_kotlin.$_$.c;
  var removeSuffix = kotlin_kotlin.$_$.k9;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var com_varabyte_kobweb_navigation_Router$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var compositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.n;
  var Companion_instance_0 = kotlin_com_varabyte_kobwebx_kobwebx_frontmatter.$_$.a;
  var MarkdownContext = kotlin_com_varabyte_kobwebx_kobwebx_markdown.$_$.a;
  var getKClass = kotlin_kotlin.$_$.h8;
  var H1 = kotlin_org_jetbrains_compose_html_html_core.$_$.o3;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var HorizontalDivider = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var H2 = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var H3 = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var H4 = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var Ul = kotlin_org_jetbrains_compose_html_html_core.$_$.e4;
  var Pre = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.d4;
  var Code = kotlin_org_jetbrains_compose_html_html_core.$_$.j3;
  var GenericTag = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var Li = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var Em = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.u5;
  var protoOf = kotlin_kotlin.$_$.y7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isInterface = kotlin_kotlin.$_$.q7;
  var initMetadataForLambda = kotlin_kotlin.$_$.m7;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c2;
  var LaunchedEffect = kotlin_androidx_compose_runtime_runtime.$_$.j;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var get_HorizontalDividerStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var modifyStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var get_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var ButtonVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.m;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k3;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b2;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var get_ButtonStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var initMetadataForClass = kotlin_kotlin.$_$.i7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ya;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w1;
  var ColorMode_LIGHT_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x1;
  var set_background = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var set_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.l;
  var set_border = kotlin_com_varabyte_kobweb_silk_widgets.$_$.j;
  var get_link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var get_markdown = kotlin_com_varabyte_kobwebx_kobwebx_markdown.$_$.b;
  var singleOrNull = kotlin_kotlin.$_$.t4;
  var toString = kotlin_kotlin.$_$.z7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var toAttrs = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z2;
  var fontWeight_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var overflowWrap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i3;
  var Companion_instance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var Companion_instance_11 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var toAttrs_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var getValue = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var gridTemplateRows = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v1;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var Stop = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var RadialGradient = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var _SvgId___init__impl__pmt7ru = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var Defs = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var gridRow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var TopStart_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var CenterHorizontally_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var Footer = kotlin_org_jetbrains_compose_html_html_core.$_$.n3;
  var A = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.a4;
  var rememberPageContext = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var Img = kotlin_org_jetbrains_compose_html_html_core.$_$.t3;
  var KMutableProperty0 = kotlin_kotlin.$_$.i8;
  var getLocalDelegateReference = kotlin_kotlin.$_$.d7;
  var Nav = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var getStringHashCode = kotlin_kotlin.$_$.g7;
  var hashCode = kotlin_kotlin.$_$.h7;
  var equals = kotlin_kotlin.$_$.b7;
  var listOf = kotlin_kotlin.$_$.e4;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c3;
  var mapCapacity = kotlin_kotlin.$_$.f4;
  var coerceAtLeast = kotlin_kotlin.$_$.b8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var Section = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var Main = kotlin_org_jetbrains_compose_html_html_core.$_$.v3;
  var padding_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var textAlign_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var getValue_0 = kotlin_kotlin.$_$.t3;
  var Article = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.s;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForObject(ComposableSingletons$AboutKt, 'ComposableSingletons$AboutKt');
  initMetadataForLambda(AppEntry$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AppEntry$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Brand, 'Brand', Brand);
  initMetadataForClass(SitePalette, 'SitePalette');
  initMetadataForObject(SitePalettes, 'SitePalettes');
  initMetadataForClass(PageLayoutData, 'PageLayoutData');
  initMetadataForObject(ComposableSingletons$PageLayoutKt, 'ComposableSingletons$PageLayoutKt');
  initMetadataForLambda(PageLayout$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$FooterKt, 'ComposableSingletons$FooterKt');
  initMetadataForObject(ComposableSingletons$NavHeaderKt, 'ComposableSingletons$NavHeaderKt');
  initMetadataForClass(DocEntry, 'DocEntry');
  initMetadataForClass(AddonSummary, 'AddonSummary');
  initMetadataForClass(AddonDetail, 'AddonDetail');
  initMetadataForClass(ScriptSnippet, 'ScriptSnippet');
  initMetadataForObject(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt');
  initMetadataForObject(ComposableSingletons$NotFoundKt, 'ComposableSingletons$NotFoundKt');
  initMetadataForObject(ComposableSingletons$AddonDetailPageKt, 'ComposableSingletons$AddonDetailPageKt');
  initMetadataForObject(ComposableSingletons$IndexKt_0, 'ComposableSingletons$IndexKt');
  initMetadataForObject(ComposableSingletons$IndexKt_1, 'ComposableSingletons$IndexKt');
  initMetadataForObject(ComposableSingletons$IndexKt_2, 'ComposableSingletons$IndexKt');
  //endregion
  function get_LayoutScopeLocal() {
    _init_properties_main_kt__ykjpl3();
    return LayoutScopeLocal;
  }
  var LayoutScopeLocal;
  function provideLayoutScope(layoutScope, content, $composer, $changed) {
    _init_properties_main_kt__ykjpl3();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-268603817);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.p13(layoutScope) : $composer_0.s13(layoutScope)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      CompositionLocalProvider(get_LayoutScopeLocal().u1n(layoutScope), content, $composer_0, androidx_compose_runtime_ProvidedValue$stableprop_getter() | 112 & $dirty);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(provideLayoutScope$lambda(layoutScope, content, $changed));
    }
  }
  function main() {
    _init_properties_main_kt__ykjpl3();
    AppGlobals_instance.b2z(mapOf(to('title', 'MineKot')));
    Companion_instance.a31('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.c32(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.e32(remove(Companion_instance, '/' + trimStart(removePrefix(window.location.href, window.origin), charArrayOf([_Char___init__impl__6a9atx(47)]))), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('_kobweb-root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable('_kobweb-root', ComposableLambda$invoke$ref_15(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1, p2) {
      p0.b2a(_this__u8e3s4, p0_0, p1, p2);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$1498945258$lambda(pageCtx, pageMethod, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.p13(pageCtx) : $composer_0.s13(pageCtx)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(pageMethod) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 147) === 146), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1761814108, true, ComposableSingletons$MainKt$lambda$1498945258$lambda$lambda(pageMethod, pageCtx), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.n13();
      var tmp;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      MarkdownLayout(tmp0, $composer_0, 6);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda$1498945258$lambda$lambda($pageMethod, $pageCtx) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $pageMethod($pageCtx, $composer_0, com_varabyte_kobweb_core_PageContext$stableprop_getter());
      } else {
        $composer_0.h13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0, p1, p2) {
      p0.b2a(_this__u8e3s4, p0_0, p1, p2);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$_1396482527$lambda_75hsrn(pageCtx, pageMethod, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.p13(pageCtx) : $composer_0.s13(pageCtx)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(pageMethod) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 147) === 146), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(605933002, true, ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda_v3zxsi(pageMethod, pageCtx), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.n13();
      var tmp;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      PageLayout(pageCtx, tmp0, $composer_0, 48 | com_varabyte_kobweb_core_PageContext$stableprop_getter() | 14 & $dirty);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda$lambda_6ermrn($pageMethod, $pageCtx) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $pageMethod($pageCtx, $composer_0, com_varabyte_kobweb_core_PageContext$stableprop_getter());
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
  function ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda_v3zxsi($pageMethod, $pageCtx) {
    return function ($this$_org_example_app_components_layouts_PageLayout, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.p13($this$_org_example_app_components_layouts_PageLayout) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1470159405, true, ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda$lambda_6ermrn($pageMethod, $pageCtx), $composer_0, 54);
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
        provideLayoutScope($this$_org_example_app_components_layouts_PageLayout, tmp0, $composer_0, 48 | 14 & $dirty);
        tmp_0 = Unit_instance;
      } else {
        $composer_0.h13();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$_521244896$lambda_jdp3wp(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 17) === 16), $changed & 1)) {
      HomePage($composer_0, 0);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$_1474002729$lambda_4qld8c(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 17) === 16), $changed & 1)) {
      AboutPage($composer_0, 0);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$19909720$lambda(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 17) === 16), $changed & 1)) {
      AddonsPage($composer_0, 0);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$1513822169$lambda(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 17) === 16), $changed & 1)) {
      Addon0001Page($composer_0, 0);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$_1287232678$lambda_esovni(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 17) === 16), $changed & 1)) {
      Addon0002Page($composer_0, 0);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$206679771$lambda(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 17) === 16), $changed & 1)) {
      Addon0003Page($composer_0, 0);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_10(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$1700592220$lambda(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 17) === 16), $changed & 1)) {
      DocsPage($composer_0, 0);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_11(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$_1100462627$lambda_ty3cjn(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 17) === 16), $changed & 1)) {
      NotFoundPage($composer_0, 0);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_12(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$393449822$lambda(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 17) === 16), $changed & 1)) {
      ScriptsPage($composer_0, 0);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_13(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$854823496$lambda(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(it) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-440954647, true, ComposableSingletons$MainKt$lambda$854823496$lambda$lambda(it), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value = ComposableLambda$invoke$ref_14(dispatchReceiver);
        $composer_1.o13(value);
        tmp = value;
      } else {
        tmp = it_0;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      DeferringHost(tmp0, $composer_0, 6);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda$854823496$lambda$lambda($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $it($composer_0, 0);
      } else {
        $composer_0.h13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.x3p_1 = ComposableLambda$invoke$ref(composableLambdaInstance(1498945258, false, ComposableSingletons$MainKt$lambda$1498945258$lambda));
    var tmp_0 = this;
    tmp_0.y3p_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1396482527, false, ComposableSingletons$MainKt$lambda$_1396482527$lambda_75hsrn));
    var tmp_1 = this;
    tmp_1.z3p_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-521244896, false, ComposableSingletons$MainKt$lambda$_521244896$lambda_jdp3wp));
    var tmp_2 = this;
    tmp_2.a3q_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1474002729, false, ComposableSingletons$MainKt$lambda$_1474002729$lambda_4qld8c));
    var tmp_3 = this;
    tmp_3.b3q_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(19909720, false, ComposableSingletons$MainKt$lambda$19909720$lambda));
    var tmp_4 = this;
    tmp_4.c3q_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(1513822169, false, ComposableSingletons$MainKt$lambda$1513822169$lambda));
    var tmp_5 = this;
    tmp_5.d3q_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-1287232678, false, ComposableSingletons$MainKt$lambda$_1287232678$lambda_esovni));
    var tmp_6 = this;
    tmp_6.e3q_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(206679771, false, ComposableSingletons$MainKt$lambda$206679771$lambda));
    var tmp_7 = this;
    tmp_7.f3q_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(1700592220, false, ComposableSingletons$MainKt$lambda$1700592220$lambda));
    var tmp_8 = this;
    tmp_8.g3q_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-1100462627, false, ComposableSingletons$MainKt$lambda$_1100462627$lambda_ty3cjn));
    var tmp_9 = this;
    tmp_9.h3q_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(393449822, false, ComposableSingletons$MainKt$lambda$393449822$lambda));
    var tmp_10 = this;
    tmp_10.i3q_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(854823496, false, ComposableSingletons$MainKt$lambda$854823496$lambda));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function LayoutScopeLocal$lambda() {
    _init_properties_main_kt__ykjpl3();
    return null;
  }
  function provideLayoutScope$lambda($layoutScope, $content, $$changed) {
    return function ($composer, $force) {
      provideLayoutScope($layoutScope, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function main$lambda(ctx) {
    _init_properties_main_kt__ykjpl3();
    ctx.d30_1.y31('org.example.app.components.layouts.MarkdownLayout', 'org.example.app.components.layouts.PageLayout', main$lambda$lambda, ComposableSingletons$MainKt_getInstance().x3p_1);
    ctx.d30_1.z31('org.example.app.components.layouts.PageLayout', VOID, VOID, ComposableSingletons$MainKt_getInstance().y3p_1);
    ctx.d30_1.b32('/', VOID, VOID, ComposableSingletons$MainKt_getInstance().z3p_1);
    ctx.d30_1.a32('/about', 'org.example.app.components.layouts.MarkdownLayout', main$lambda$lambda_0, ComposableSingletons$MainKt_getInstance().a3q_1);
    ctx.d30_1.b32('/addons/', VOID, VOID, ComposableSingletons$MainKt_getInstance().b3q_1);
    ctx.d30_1.b32('/addons/0001', VOID, VOID, ComposableSingletons$MainKt_getInstance().c3q_1);
    ctx.d30_1.b32('/addons/0002', VOID, VOID, ComposableSingletons$MainKt_getInstance().d3q_1);
    ctx.d30_1.b32('/addons/0003', VOID, VOID, ComposableSingletons$MainKt_getInstance().e3q_1);
    ctx.d30_1.b32('/docs/', VOID, VOID, ComposableSingletons$MainKt_getInstance().f3q_1);
    ctx.d30_1.b32('/not-found', VOID, VOID, ComposableSingletons$MainKt_getInstance().g3q_1);
    ctx.d30_1.b32('/scripts/', VOID, VOID, ComposableSingletons$MainKt_getInstance().h3q_1);
    return Unit_instance;
  }
  function main$lambda$lambda(ctx) {
    _init_properties_main_kt__ykjpl3();
    initMarkdownLayout(ctx);
    return Unit_instance;
  }
  function main$lambda$lambda_0(ctx) {
    _init_properties_main_kt__ykjpl3();
    initAboutPage(ctx);
    return Unit_instance;
  }
  function main$lambda_0($this$addRouteInterceptor) {
    _init_properties_main_kt__ykjpl3();
    $this$addRouteInterceptor.f32(removeSuffix(removeSuffix($this$addRouteInterceptor.q31_1, '.html'), '.htm'));
    return Unit_instance;
  }
  function main$lambda_1(ctx) {
    _init_properties_main_kt__ykjpl3();
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.d36_1.c3b('headline-text', get_HeadlineTextStyle());
    ctx.d36_1.c3b('subheadline-text', get_SubheadlineTextStyle());
    ctx.d36_1.c3b('markdown', get_MarkdownStyle());
    ctx.d36_1.c3b('page-content', get_PageContentStyle());
    ctx.d36_1.i3b('-circle', get_CircleButtonVariant());
    ctx.d36_1.i3b('-uncolored', get_UncoloredButtonVariant());
    initSiteStyles(ctx);
    initTheme(ctx);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function main$lambda$lambda_1($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
        $router.t31(ComposableSingletons$MainKt_getInstance().i3q_1, $composer_0, 6 | com_varabyte_kobweb_navigation_Router$stableprop_getter() << 3, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.h13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_16(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1190994075, true, main$lambda$lambda_1($router), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.n13();
      var tmp;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = ComposableLambda$invoke$ref_16(dispatchReceiver);
        $composer_1.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AppEntry(tmp0, $composer_0, 6);
      return Unit_instance;
    };
  }
  var properties_initialized_main_kt_ask6ij;
  function _init_properties_main_kt__ykjpl3() {
    if (!properties_initialized_main_kt_ask6ij) {
      properties_initialized_main_kt_ask6ij = true;
      LayoutScopeLocal = compositionLocalOf(VOID, LayoutScopeLocal$lambda);
    }
  }
  function mainWrapper() {
    main();
  }
  function initAboutPage(ctx) {
    var tmp0 = ctx.f30_1;
    var tmp = Companion_instance_0;
    // Inline function 'com.varabyte.kobweb.core.data.add' call
    var value = new MarkdownContext('About.md', tmp.v3d(initAboutPage$lambda));
    tmp0.a30(getKClass(MarkdownContext), value);
  }
  function AboutPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-120633928);
    if ($composer_0.u13(!($changed === 0), $changed & 1)) {
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = AboutPage$lambda;
        this_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      H1(tmp$ret$3, ComposableSingletons$AboutKt_getInstance().j3q_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().k3q_1, $composer_0, 48, 1);
      HorizontalDivider(null, null, $composer_0, 0, 3);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_1.n13();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().p12_1) {
        var value_0 = AboutPage$lambda_0;
        this_1.o13(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      H2(tmp$ret$7, ComposableSingletons$AboutKt_getInstance().l3q_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().m3q_1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_1 = this_2.n13();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().p12_1) {
        var value_1 = AboutPage$lambda_1;
        this_2.o13(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp$ret$11 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      H3(tmp$ret$11, ComposableSingletons$AboutKt_getInstance().n3q_1, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_2 = this_3.n13();
      var tmp_5;
      if (false || it_2 === Companion_getInstance().p12_1) {
        var value_2 = AboutPage$lambda_2;
        this_3.o13(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp$ret$15 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      H4(tmp$ret$15, ComposableSingletons$AboutKt_getInstance().o3q_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().q3q_1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_3 = this_4.n13();
      var tmp_7;
      if (false || it_3 === Companion_getInstance().p12_1) {
        var value_3 = AboutPage$lambda_3;
        this_4.o13(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp$ret$19 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      H4(tmp$ret$19, ComposableSingletons$AboutKt_getInstance().r3q_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().s3q_1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_4 = this_5.n13();
      var tmp_9;
      if (false || it_4 === Companion_getInstance().p12_1) {
        var value_4 = AboutPage$lambda_4;
        this_5.o13(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp$ret$23 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      H4(tmp$ret$23, ComposableSingletons$AboutKt_getInstance().t3q_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().u3q_1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_6 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_5 = this_6.n13();
      var tmp_11;
      if (false || it_5 === Companion_getInstance().p12_1) {
        var value_5 = AboutPage$lambda_5;
        this_6.o13(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmp$ret$27 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      H4(tmp$ret$27, ComposableSingletons$AboutKt_getInstance().v3q_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().w3q_1, $composer_0, 48, 1);
      Ul(null, ComposableSingletons$AboutKt_getInstance().d3r_1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_7 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_6 = this_7.n13();
      var tmp_13;
      if (false || it_6 === Companion_getInstance().p12_1) {
        var value_6 = AboutPage$lambda_6;
        this_7.o13(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var tmp$ret$31 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      H4(tmp$ret$31, ComposableSingletons$AboutKt_getInstance().e3r_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().i3r_1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_8 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_7 = this_8.n13();
      var tmp_15;
      if (false || it_7 === Companion_getInstance().p12_1) {
        var value_7 = AboutPage$lambda_7;
        this_8.o13(value_7);
        tmp_15 = value_7;
      } else {
        tmp_15 = it_7;
      }
      var tmp_16 = tmp_15;
      var tmp$ret$35 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      H4(tmp$ret$35, ComposableSingletons$AboutKt_getInstance().j3r_1, $composer_0, 54, 0);
      Ul(null, ComposableSingletons$AboutKt_getInstance().o3r_1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_9 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_8 = this_9.n13();
      var tmp_17;
      if (false || it_8 === Companion_getInstance().p12_1) {
        var value_8 = AboutPage$lambda_8;
        this_9.o13(value_8);
        tmp_17 = value_8;
      } else {
        tmp_17 = it_8;
      }
      var tmp_18 = tmp_17;
      var tmp$ret$39 = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      H3(tmp$ret$39, ComposableSingletons$AboutKt_getInstance().p3r_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().q3r_1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_10 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_9 = this_10.n13();
      var tmp_19;
      if (false || it_9 === Companion_getInstance().p12_1) {
        var value_9 = AboutPage$lambda_9;
        this_10.o13(value_9);
        tmp_19 = value_9;
      } else {
        tmp_19 = it_9;
      }
      var tmp_20 = tmp_19;
      var tmp$ret$43 = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      H4(tmp$ret$43, ComposableSingletons$AboutKt_getInstance().r3r_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().t3r_1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_11 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_10 = this_11.n13();
      var tmp_21;
      if (false || it_10 === Companion_getInstance().p12_1) {
        var value_10 = AboutPage$lambda_10;
        this_11.o13(value_10);
        tmp_21 = value_10;
      } else {
        tmp_21 = it_10;
      }
      var tmp_22 = tmp_21;
      var tmp$ret$47 = (tmp_22 == null ? true : !(tmp_22 == null)) ? tmp_22 : THROW_CCE();
      H4(tmp$ret$47, ComposableSingletons$AboutKt_getInstance().u3r_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().w3r_1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_12 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_11 = this_12.n13();
      var tmp_23;
      if (false || it_11 === Companion_getInstance().p12_1) {
        var value_11 = AboutPage$lambda_11;
        this_12.o13(value_11);
        tmp_23 = value_11;
      } else {
        tmp_23 = it_11;
      }
      var tmp_24 = tmp_23;
      var tmp$ret$51 = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
      H4(tmp$ret$51, ComposableSingletons$AboutKt_getInstance().x3r_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().b3s_1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_13 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_12 = this_13.n13();
      var tmp_25;
      if (false || it_12 === Companion_getInstance().p12_1) {
        var value_12 = AboutPage$lambda_12;
        this_13.o13(value_12);
        tmp_25 = value_12;
      } else {
        tmp_25 = it_12;
      }
      var tmp_26 = tmp_25;
      var tmp$ret$55 = (tmp_26 == null ? true : !(tmp_26 == null)) ? tmp_26 : THROW_CCE();
      H2(tmp$ret$55, ComposableSingletons$AboutKt_getInstance().c3s_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().e3s_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().f3s_1, $composer_0, 48, 1);
      Pre(null, ComposableSingletons$AboutKt_getInstance().h3s_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().i3s_1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_14 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_13 = this_14.n13();
      var tmp_27;
      if (false || it_13 === Companion_getInstance().p12_1) {
        var value_13 = AboutPage$lambda_13;
        this_14.o13(value_13);
        tmp_27 = value_13;
      } else {
        tmp_27 = it_13;
      }
      var tmp_28 = tmp_27;
      var tmp$ret$59 = (tmp_28 == null ? true : !(tmp_28 == null)) ? tmp_28 : THROW_CCE();
      H2(tmp$ret$59, ComposableSingletons$AboutKt_getInstance().j3s_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().k3s_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().o3s_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().p3s_1, $composer_0, 48, 1);
      Pre(null, ComposableSingletons$AboutKt_getInstance().r3s_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().t3s_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().u3s_1, $composer_0, 48, 1);
      Pre(null, ComposableSingletons$AboutKt_getInstance().w3s_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().x3s_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().z3s_1, $composer_0, 48, 1);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(AboutPage$lambda_14($changed));
    }
  }
  function ComposableLambda$invoke$ref_17(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1984207531$lambda_793xmo($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    Text('About this template', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_18(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_863562666$lambda_vkmlfm($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('This template is intended to both demonstrate some fundamentals of the Kobweb framework and act a starting point you can build your own site from.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_19(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$1144063446$lambda($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Learn', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_20(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_407715891$lambda_xfzv3s($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text("If this is your first time using Kobweb, please open this site's project in an IDE and take a few minutes to look around the code.", $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_21(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_22632873$lambda_pt0lep($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Files', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_22(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1189329192$lambda_mhq1mb($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('AppEntry.kt', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_23(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1156226033$lambda_k4t57n($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('@App', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_24(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1574412210$lambda_f9ktwf($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('This file declares a method that is an entry point for all pages on your site. You can rename the file and the method if you like. Kobweb searches for a single method at compile time annotated with ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().p3q_1, $composer_0, 48, 1);
    Text('.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_25(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$63265231$lambda($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('AppStyles.kt', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_26(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$1553858767$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('An example of declaring generally useful styles that can be used anywhere across the whole site. Otherwise, you normally declare styles close to the widget that uses them.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_27(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1103431088$lambda_esrfr7($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('SiteTheme.kt', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_28(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$387162448$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('An example of how to define some site-specific colors, effectively extending the palette provided by Silk.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_29(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$2024839889$lambda($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('components/', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_30(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_779533871$lambda_j4pnky($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('By convention, Kobweb codebases organize reusable site components under this folder. Within it, you have:', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_31(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1547501133$lambda_8jub30($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('layouts/', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_32(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1253383182$lambda_ndryw2($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().x3q_1, $composer_0, 48, 1);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$AboutKt$lambda$_1253383182$lambda$lambda_56k0xj;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    GenericTag('br', null, tmp_1, null, $composer_0, 390, 10);
    Text(' Represents top-level organization for pages', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda$_1253383182$lambda$lambda_56k0xj($this$GenericTag) {
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_33(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1068102756$lambda_i46d14($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('sections/', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_34(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1888593381$lambda_xuoq4a($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().z3q_1, $composer_0, 48, 1);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$AboutKt$lambda$_1888593381$lambda$lambda_r1axyp;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    GenericTag('br', null, tmp_1, null, $composer_0, 390, 10);
    Text(' Areas of content that appear across multiple pages (such as nav bars and footers)', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda$_1888593381$lambda$lambda_r1axyp($this$GenericTag) {
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_35(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$13705531$lambda($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('widgets/', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_36(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_806785094$lambda_2h44rh($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().b3r_1, $composer_0, 48, 1);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$AboutKt$lambda$_806785094$lambda$lambda_uijy5k;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    GenericTag('br', null, tmp_1, null, $composer_0, 390, 10);
    Text(' Home for low-level UI pieces that you can use around your site', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda$_806785094$lambda$lambda_uijy5k($this$GenericTag) {
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_37(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$167972387$lambda($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    Li(null, ComposableSingletons$AboutKt_getInstance().y3q_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AboutKt_getInstance().a3r_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AboutKt_getInstance().c3r_1, $composer_0, 48, 1);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_38(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$858143570$lambda($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('pages/', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_39(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1528044013$lambda_s1bmxe($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('@Composable', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_40(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$690882826$lambda($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('@Page', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_41(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_132798645$lambda_njdt1j($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('resources/markdown', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_42(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1946230190$lambda_iwqddx($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Any ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().f3r_1, $composer_0, 48, 1);
    Text(' under this folder additionally tagged with ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().g3r_1, $composer_0, 48, 1);
    Text(' will have a route generated for it automatically. Defining a page outside of this folder will be flagged as an error by the Kobweb Gradle plugin at compile time. Note that additional pages (like this one!) might live under the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().h3r_1, $composer_0, 48, 1);
    Text(' folder.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_43(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_308552749$lambda_v572xf($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('resources/', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_44(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_542586390$lambda_ayzsdq($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('public', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_45(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1363077015$lambda_jagisb($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().k3r_1, $composer_0, 48, 1);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$AboutKt$lambda$_1363077015$lambda$lambda_9iupw0;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    GenericTag('br', null, tmp_1, null, $composer_0, 390, 10);
    Text(' If you want to host any media on your site (such as an icon, an image, text configuration files, movies, fonts, etc.), you should put it under this folder.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda$_1363077015$lambda$lambda_9iupw0($this$GenericTag) {
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_46(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$597753235$lambda($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('markdown', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_47(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1914722222$lambda_tsijaw($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().m3r_1, $composer_0, 48, 1);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$AboutKt$lambda$_1914722222$lambda$lambda_2nwvv1;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    GenericTag('br', null, tmp_1, null, $composer_0, 390, 10);
    Text(' Any markdown discovered in here by Kobweb at compile time will be converted into pages on your site.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda$_1914722222$lambda$lambda_2nwvv1($this$GenericTag) {
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_48(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1239975334$lambda_x9tc56($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    Li(null, ComposableSingletons$AboutKt_getInstance().l3r_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AboutKt_getInstance().n3r_1, $composer_0, 48, 1);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_49(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$271963534$lambda($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Classes', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_50(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$1182040787$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('The Kobweb and Silk APIs introduce a lot of powerful concepts. Here are some of the most important ones to know about which you can find used throughout this template.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_51(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1475249068$lambda_mkykjm($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Modifier', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_52(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$433530645$lambda($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Modifier', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_53(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$15344468$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Kobweb introduces the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().s3r_1, $composer_0, 48, 1);
    Text(' keyword that Android developers will recognize from the Jetpack Compose API. In a webdev context, this is used for setting CSS styles and html attributes on elements in the page.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_54(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$1653021909$lambda($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('CssStyle', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_55(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_733165674$lambda_swwu72($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('CssStyle', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_56(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1151351851$lambda_2dmb1f($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Traditional HTML pages use CSS to style their UI. In Kobweb, these styles can be declared using the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().v3r_1, $composer_0, 48, 1);
    Text(' class in a Kotlin-idiomatic way. You can find examples of style blocks used throughout the template.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_57(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$486325590$lambda($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Keyframes', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_58(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1070171756$lambda_cjb2c9($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Keyframes', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_59(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1002916483$lambda_mx7ve4($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('CssStyle', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_60(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_767238308$lambda_k0lu58($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Modifier.animation(YourKeyframes.toAnimation(...))', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_61(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1149041355$lambda_l9kgq5($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('You can create animations by declaring keyframes for them, using ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().y3r_1, $composer_0, 48, 1);
    Text(' blocks to define them (similar to declaring ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().z3r_1, $composer_0, 48, 1);
    Text(' style blocks). Once defined, call ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().a3s_1, $composer_0, 48, 1);
    Text(' to reference them.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_62(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$480661837$lambda($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Starting Point', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_63(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1098683078$lambda_5lakps($this$Em, $composer, $changed) {
    var $composer_0 = $composer;
    Text('About', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_64(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$1979229622$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('This template aims to create some generally useful pieces that most sites will want to use. Making your own site could be as easy as deleting this ', $composer_0, 6);
    Em(null, ComposableSingletons$AboutKt_getInstance().d3s_1, $composer_0, 48, 1);
    Text(" page and working from there. However, you are welcome to modify or delete anything you find in the template that you don't plan to use in your final site.", $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_65(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$812533303$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text("If instead you'd like to start from scratch, you can run", $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_66(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$1311557770$lambda($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('$ kobweb create app/empty\n', $composer_0, 0);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_67(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$893371593$lambda($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().g3s_1, $composer_0, 48, 1);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_68(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_354163016$lambda_626gw1($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('which will create a new project with nothing inside of it except for a minimal, skeletal structure.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_69(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_686034482$lambda_d16g93($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Export and Deploy', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_70(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1520859335$lambda_v7ha71($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text("When you are ready to share your site with the world, you'll want to export it first. This will create a production snapshot of your site.", $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_71(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1470501058$lambda_ot0acl($this$Em, $composer, $changed) {
    var $composer_0 = $composer;
    Text('static layout', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_72(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$332658151$lambda($this$Em, $composer, $changed) {
    var $composer_0 = $composer;
    Text('full stack', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_73(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_569598676$lambda_px0jwf($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
      Text('read more about these choices here', $composer_0, 6);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_74(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$1607411642$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('There are two flavors of Kobweb sites: ', $composer_0, 6);
    Em(null, ComposableSingletons$AboutKt_getInstance().l3s_1, $composer_0, 48, 1);
    Text(' and ', $composer_0, 6);
    Em(null, ComposableSingletons$AboutKt_getInstance().m3s_1, $composer_0, 48, 1);
    Text('. You can ', $composer_0, 6);
    Link('https://kobweb.varabyte.com/docs/concepts/foundation/exporting#static-layout-vs-full-stack-sites', null, null, null, null, null, null, ComposableSingletons$AboutKt_getInstance().n3s_1, $composer_0, 12582918, 126);
    Text('.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_75(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$440715323$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('For most sites, a static layout site is what you want, so to do that, return to the command line and run:', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_76(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1766050047$lambda_9wdgpc($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('$ kobweb export --layout static\n', $composer_0, 0);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_77(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$83959680$lambda($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().q3s_1, $composer_0, 48, 1);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_78(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_647111397$lambda_vf1927($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('.kobweb/site', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_79(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_725980996$lambda_idspo9($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('After that runs for a little while, your production site should be generated! You can find the files under the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().s3s_1, $composer_0, 48, 1);
    Text(' folder.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_80(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1892677315$lambda_ld88hp($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Test it locally by running:', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_81(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$1362220930$lambda($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('$ kobweb run --layout static --env prod\n', $composer_0, 0);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_82(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1082736639$lambda_fzuc65($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().v3s_1, $composer_0, 48, 1);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_83(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$1235593662$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text("If you're satisfied, you can upload your site files to the static website host provider of your choice. Each provider has its own instructions for how it discovers your files, so please refer to their documentation.", $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_84(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$_838931898$lambda_uaj6uz($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
      Text('read this blog post', $composer_0, 6);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_85(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AboutKt$lambda$1338078420$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('You can ', $composer_0, 6);
    Link('https://bitspittle.dev/blog/2022/static-deploy', null, null, null, null, null, null, ComposableSingletons$AboutKt_getInstance().y3s_1, $composer_0, 12582918, 126);
    Text(' for some concrete examples of exporting a Kobweb site to two popular static website hosting providers.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt() {
    ComposableSingletons$AboutKt_instance = this;
    var tmp = this;
    tmp.j3q_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(-1984207531, false, ComposableSingletons$AboutKt$lambda$_1984207531$lambda_793xmo));
    var tmp_0 = this;
    tmp_0.k3q_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(-863562666, false, ComposableSingletons$AboutKt$lambda$_863562666$lambda_vkmlfm));
    var tmp_1 = this;
    tmp_1.l3q_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(1144063446, false, ComposableSingletons$AboutKt$lambda$1144063446$lambda));
    var tmp_2 = this;
    tmp_2.m3q_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(-407715891, false, ComposableSingletons$AboutKt$lambda$_407715891$lambda_xfzv3s));
    var tmp_3 = this;
    tmp_3.n3q_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(-22632873, false, ComposableSingletons$AboutKt$lambda$_22632873$lambda_pt0lep));
    var tmp_4 = this;
    tmp_4.o3q_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(-1189329192, false, ComposableSingletons$AboutKt$lambda$_1189329192$lambda_mhq1mb));
    var tmp_5 = this;
    tmp_5.p3q_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-1156226033, false, ComposableSingletons$AboutKt$lambda$_1156226033$lambda_k4t57n));
    var tmp_6 = this;
    tmp_6.q3q_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-1574412210, false, ComposableSingletons$AboutKt$lambda$_1574412210$lambda_f9ktwf));
    var tmp_7 = this;
    tmp_7.r3q_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(63265231, false, ComposableSingletons$AboutKt$lambda$63265231$lambda));
    var tmp_8 = this;
    tmp_8.s3q_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(1553858767, false, ComposableSingletons$AboutKt$lambda$1553858767$lambda));
    var tmp_9 = this;
    tmp_9.t3q_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-1103431088, false, ComposableSingletons$AboutKt$lambda$_1103431088$lambda_esrfr7));
    var tmp_10 = this;
    tmp_10.u3q_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(387162448, false, ComposableSingletons$AboutKt$lambda$387162448$lambda));
    var tmp_11 = this;
    tmp_11.v3q_1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(2024839889, false, ComposableSingletons$AboutKt$lambda$2024839889$lambda));
    var tmp_12 = this;
    tmp_12.w3q_1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(-779533871, false, ComposableSingletons$AboutKt$lambda$_779533871$lambda_j4pnky));
    var tmp_13 = this;
    tmp_13.x3q_1 = ComposableLambda$invoke$ref_31(composableLambdaInstance(-1547501133, false, ComposableSingletons$AboutKt$lambda$_1547501133$lambda_8jub30));
    var tmp_14 = this;
    tmp_14.y3q_1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(-1253383182, false, ComposableSingletons$AboutKt$lambda$_1253383182$lambda_ndryw2));
    var tmp_15 = this;
    tmp_15.z3q_1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(-1068102756, false, ComposableSingletons$AboutKt$lambda$_1068102756$lambda_i46d14));
    var tmp_16 = this;
    tmp_16.a3r_1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(-1888593381, false, ComposableSingletons$AboutKt$lambda$_1888593381$lambda_xuoq4a));
    var tmp_17 = this;
    tmp_17.b3r_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(13705531, false, ComposableSingletons$AboutKt$lambda$13705531$lambda));
    var tmp_18 = this;
    tmp_18.c3r_1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(-806785094, false, ComposableSingletons$AboutKt$lambda$_806785094$lambda_2h44rh));
    var tmp_19 = this;
    tmp_19.d3r_1 = ComposableLambda$invoke$ref_37(composableLambdaInstance(167972387, false, ComposableSingletons$AboutKt$lambda$167972387$lambda));
    var tmp_20 = this;
    tmp_20.e3r_1 = ComposableLambda$invoke$ref_38(composableLambdaInstance(858143570, false, ComposableSingletons$AboutKt$lambda$858143570$lambda));
    var tmp_21 = this;
    tmp_21.f3r_1 = ComposableLambda$invoke$ref_39(composableLambdaInstance(-1528044013, false, ComposableSingletons$AboutKt$lambda$_1528044013$lambda_s1bmxe));
    var tmp_22 = this;
    tmp_22.g3r_1 = ComposableLambda$invoke$ref_40(composableLambdaInstance(690882826, false, ComposableSingletons$AboutKt$lambda$690882826$lambda));
    var tmp_23 = this;
    tmp_23.h3r_1 = ComposableLambda$invoke$ref_41(composableLambdaInstance(-132798645, false, ComposableSingletons$AboutKt$lambda$_132798645$lambda_njdt1j));
    var tmp_24 = this;
    tmp_24.i3r_1 = ComposableLambda$invoke$ref_42(composableLambdaInstance(-1946230190, false, ComposableSingletons$AboutKt$lambda$_1946230190$lambda_iwqddx));
    var tmp_25 = this;
    tmp_25.j3r_1 = ComposableLambda$invoke$ref_43(composableLambdaInstance(-308552749, false, ComposableSingletons$AboutKt$lambda$_308552749$lambda_v572xf));
    var tmp_26 = this;
    tmp_26.k3r_1 = ComposableLambda$invoke$ref_44(composableLambdaInstance(-542586390, false, ComposableSingletons$AboutKt$lambda$_542586390$lambda_ayzsdq));
    var tmp_27 = this;
    tmp_27.l3r_1 = ComposableLambda$invoke$ref_45(composableLambdaInstance(-1363077015, false, ComposableSingletons$AboutKt$lambda$_1363077015$lambda_jagisb));
    var tmp_28 = this;
    tmp_28.m3r_1 = ComposableLambda$invoke$ref_46(composableLambdaInstance(597753235, false, ComposableSingletons$AboutKt$lambda$597753235$lambda));
    var tmp_29 = this;
    tmp_29.n3r_1 = ComposableLambda$invoke$ref_47(composableLambdaInstance(-1914722222, false, ComposableSingletons$AboutKt$lambda$_1914722222$lambda_tsijaw));
    var tmp_30 = this;
    tmp_30.o3r_1 = ComposableLambda$invoke$ref_48(composableLambdaInstance(-1239975334, false, ComposableSingletons$AboutKt$lambda$_1239975334$lambda_x9tc56));
    var tmp_31 = this;
    tmp_31.p3r_1 = ComposableLambda$invoke$ref_49(composableLambdaInstance(271963534, false, ComposableSingletons$AboutKt$lambda$271963534$lambda));
    var tmp_32 = this;
    tmp_32.q3r_1 = ComposableLambda$invoke$ref_50(composableLambdaInstance(1182040787, false, ComposableSingletons$AboutKt$lambda$1182040787$lambda));
    var tmp_33 = this;
    tmp_33.r3r_1 = ComposableLambda$invoke$ref_51(composableLambdaInstance(-1475249068, false, ComposableSingletons$AboutKt$lambda$_1475249068$lambda_mkykjm));
    var tmp_34 = this;
    tmp_34.s3r_1 = ComposableLambda$invoke$ref_52(composableLambdaInstance(433530645, false, ComposableSingletons$AboutKt$lambda$433530645$lambda));
    var tmp_35 = this;
    tmp_35.t3r_1 = ComposableLambda$invoke$ref_53(composableLambdaInstance(15344468, false, ComposableSingletons$AboutKt$lambda$15344468$lambda));
    var tmp_36 = this;
    tmp_36.u3r_1 = ComposableLambda$invoke$ref_54(composableLambdaInstance(1653021909, false, ComposableSingletons$AboutKt$lambda$1653021909$lambda));
    var tmp_37 = this;
    tmp_37.v3r_1 = ComposableLambda$invoke$ref_55(composableLambdaInstance(-733165674, false, ComposableSingletons$AboutKt$lambda$_733165674$lambda_swwu72));
    var tmp_38 = this;
    tmp_38.w3r_1 = ComposableLambda$invoke$ref_56(composableLambdaInstance(-1151351851, false, ComposableSingletons$AboutKt$lambda$_1151351851$lambda_2dmb1f));
    var tmp_39 = this;
    tmp_39.x3r_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(486325590, false, ComposableSingletons$AboutKt$lambda$486325590$lambda));
    var tmp_40 = this;
    tmp_40.y3r_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(-1070171756, false, ComposableSingletons$AboutKt$lambda$_1070171756$lambda_cjb2c9));
    var tmp_41 = this;
    tmp_41.z3r_1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(-1002916483, false, ComposableSingletons$AboutKt$lambda$_1002916483$lambda_mx7ve4));
    var tmp_42 = this;
    tmp_42.a3s_1 = ComposableLambda$invoke$ref_60(composableLambdaInstance(-767238308, false, ComposableSingletons$AboutKt$lambda$_767238308$lambda_k0lu58));
    var tmp_43 = this;
    tmp_43.b3s_1 = ComposableLambda$invoke$ref_61(composableLambdaInstance(-1149041355, false, ComposableSingletons$AboutKt$lambda$_1149041355$lambda_l9kgq5));
    var tmp_44 = this;
    tmp_44.c3s_1 = ComposableLambda$invoke$ref_62(composableLambdaInstance(480661837, false, ComposableSingletons$AboutKt$lambda$480661837$lambda));
    var tmp_45 = this;
    tmp_45.d3s_1 = ComposableLambda$invoke$ref_63(composableLambdaInstance(-1098683078, false, ComposableSingletons$AboutKt$lambda$_1098683078$lambda_5lakps));
    var tmp_46 = this;
    tmp_46.e3s_1 = ComposableLambda$invoke$ref_64(composableLambdaInstance(1979229622, false, ComposableSingletons$AboutKt$lambda$1979229622$lambda));
    var tmp_47 = this;
    tmp_47.f3s_1 = ComposableLambda$invoke$ref_65(composableLambdaInstance(812533303, false, ComposableSingletons$AboutKt$lambda$812533303$lambda));
    var tmp_48 = this;
    tmp_48.g3s_1 = ComposableLambda$invoke$ref_66(composableLambdaInstance(1311557770, false, ComposableSingletons$AboutKt$lambda$1311557770$lambda));
    var tmp_49 = this;
    tmp_49.h3s_1 = ComposableLambda$invoke$ref_67(composableLambdaInstance(893371593, false, ComposableSingletons$AboutKt$lambda$893371593$lambda));
    var tmp_50 = this;
    tmp_50.i3s_1 = ComposableLambda$invoke$ref_68(composableLambdaInstance(-354163016, false, ComposableSingletons$AboutKt$lambda$_354163016$lambda_626gw1));
    var tmp_51 = this;
    tmp_51.j3s_1 = ComposableLambda$invoke$ref_69(composableLambdaInstance(-686034482, false, ComposableSingletons$AboutKt$lambda$_686034482$lambda_d16g93));
    var tmp_52 = this;
    tmp_52.k3s_1 = ComposableLambda$invoke$ref_70(composableLambdaInstance(-1520859335, false, ComposableSingletons$AboutKt$lambda$_1520859335$lambda_v7ha71));
    var tmp_53 = this;
    tmp_53.l3s_1 = ComposableLambda$invoke$ref_71(composableLambdaInstance(-1470501058, false, ComposableSingletons$AboutKt$lambda$_1470501058$lambda_ot0acl));
    var tmp_54 = this;
    tmp_54.m3s_1 = ComposableLambda$invoke$ref_72(composableLambdaInstance(332658151, false, ComposableSingletons$AboutKt$lambda$332658151$lambda));
    var tmp_55 = this;
    tmp_55.n3s_1 = ComposableLambda$invoke$ref_73(composableLambdaInstance(-569598676, false, ComposableSingletons$AboutKt$lambda$_569598676$lambda_px0jwf));
    var tmp_56 = this;
    tmp_56.o3s_1 = ComposableLambda$invoke$ref_74(composableLambdaInstance(1607411642, false, ComposableSingletons$AboutKt$lambda$1607411642$lambda));
    var tmp_57 = this;
    tmp_57.p3s_1 = ComposableLambda$invoke$ref_75(composableLambdaInstance(440715323, false, ComposableSingletons$AboutKt$lambda$440715323$lambda));
    var tmp_58 = this;
    tmp_58.q3s_1 = ComposableLambda$invoke$ref_76(composableLambdaInstance(-1766050047, false, ComposableSingletons$AboutKt$lambda$_1766050047$lambda_9wdgpc));
    var tmp_59 = this;
    tmp_59.r3s_1 = ComposableLambda$invoke$ref_77(composableLambdaInstance(83959680, false, ComposableSingletons$AboutKt$lambda$83959680$lambda));
    var tmp_60 = this;
    tmp_60.s3s_1 = ComposableLambda$invoke$ref_78(composableLambdaInstance(-647111397, false, ComposableSingletons$AboutKt$lambda$_647111397$lambda_vf1927));
    var tmp_61 = this;
    tmp_61.t3s_1 = ComposableLambda$invoke$ref_79(composableLambdaInstance(-725980996, false, ComposableSingletons$AboutKt$lambda$_725980996$lambda_idspo9));
    var tmp_62 = this;
    tmp_62.u3s_1 = ComposableLambda$invoke$ref_80(composableLambdaInstance(-1892677315, false, ComposableSingletons$AboutKt$lambda$_1892677315$lambda_ld88hp));
    var tmp_63 = this;
    tmp_63.v3s_1 = ComposableLambda$invoke$ref_81(composableLambdaInstance(1362220930, false, ComposableSingletons$AboutKt$lambda$1362220930$lambda));
    var tmp_64 = this;
    tmp_64.w3s_1 = ComposableLambda$invoke$ref_82(composableLambdaInstance(-1082736639, false, ComposableSingletons$AboutKt$lambda$_1082736639$lambda_fzuc65));
    var tmp_65 = this;
    tmp_65.x3s_1 = ComposableLambda$invoke$ref_83(composableLambdaInstance(1235593662, false, ComposableSingletons$AboutKt$lambda$1235593662$lambda));
    var tmp_66 = this;
    tmp_66.y3s_1 = ComposableLambda$invoke$ref_84(composableLambdaInstance(-838931898, false, ComposableSingletons$AboutKt$lambda$_838931898$lambda_uaj6uz));
    var tmp_67 = this;
    tmp_67.z3s_1 = ComposableLambda$invoke$ref_85(composableLambdaInstance(1338078420, false, ComposableSingletons$AboutKt$lambda$1338078420$lambda));
  }
  var ComposableSingletons$AboutKt_instance;
  function ComposableSingletons$AboutKt_getInstance() {
    if (ComposableSingletons$AboutKt_instance == null)
      new ComposableSingletons$AboutKt();
    return ComposableSingletons$AboutKt_instance;
  }
  function initAboutPage$lambda($this$Builder) {
    $this$Builder.t3d('title', 'About');
    return Unit_instance;
  }
  function AboutPage$lambda($this$H1) {
    $this$H1.b2m('about-this-template');
    return Unit_instance;
  }
  function AboutPage$lambda_0($this$H2) {
    $this$H2.b2m('learn');
    return Unit_instance;
  }
  function AboutPage$lambda_1($this$H3) {
    $this$H3.b2m('files');
    return Unit_instance;
  }
  function AboutPage$lambda_2($this$H4) {
    $this$H4.b2m('appentry-kt');
    return Unit_instance;
  }
  function AboutPage$lambda_3($this$H4) {
    $this$H4.b2m('appstyles-kt');
    return Unit_instance;
  }
  function AboutPage$lambda_4($this$H4) {
    $this$H4.b2m('sitetheme-kt');
    return Unit_instance;
  }
  function AboutPage$lambda_5($this$H4) {
    $this$H4.b2m('components');
    return Unit_instance;
  }
  function AboutPage$lambda_6($this$H4) {
    $this$H4.b2m('pages');
    return Unit_instance;
  }
  function AboutPage$lambda_7($this$H4) {
    $this$H4.b2m('resources');
    return Unit_instance;
  }
  function AboutPage$lambda_8($this$H3) {
    $this$H3.b2m('classes');
    return Unit_instance;
  }
  function AboutPage$lambda_9($this$H4) {
    $this$H4.b2m('modifier');
    return Unit_instance;
  }
  function AboutPage$lambda_10($this$H4) {
    $this$H4.b2m('cssstyle');
    return Unit_instance;
  }
  function AboutPage$lambda_11($this$H4) {
    $this$H4.b2m('keyframes');
    return Unit_instance;
  }
  function AboutPage$lambda_12($this$H2) {
    $this$H2.b2m('starting-point');
    return Unit_instance;
  }
  function AboutPage$lambda_13($this$H2) {
    $this$H2.b2m('export-and-deploy');
    return Unit_instance;
  }
  function AboutPage$lambda_14($$changed) {
    return function ($composer, $force) {
      AboutPage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var listenersRegistered;
  function ensureStylesheetLoaded() {
    var tmp0_safe_receiver = document.head;
    var alreadyLoaded = !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.querySelector('link[data-minekot-styles]')) == null);
    if (alreadyLoaded)
      return Unit_instance;
    var tmp = document.createElement('link');
    var link = tmp instanceof HTMLLinkElement ? tmp : THROW_CCE();
    link.rel = 'stylesheet';
    link.href = '/styles.css';
    link.setAttribute('data-minekot-styles', 'true');
    var tmp1_safe_receiver = document.head;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.appendChild(link);
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-215587818);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(content) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1397338389, true, AppEntry$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.n13();
      var tmp;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = ComposableLambda$invoke$ref_87(dispatchReceiver);
        $composer_1.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SilkApp(tmp0, $composer_0, 6);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(AppEntry$lambda_0(content, $changed));
    }
  }
  function AppEntry$lambda$slambda($colorMode, resultContinuation) {
    this.i3t_1 = $colorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppEntry$lambda$slambda).e1r = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1r($this$LaunchedEffect, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(AppEntry$lambda$slambda).z8 = function (p1, $completion) {
    return this.e1r((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppEntry$lambda$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          var theme = this.i3t_1.k2_1.toLowerCase();
          var tmp0_safe_receiver = document.documentElement;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.setAttribute('data-theme', theme);
          }
          var tmp1_safe_receiver = document.body;
          if (tmp1_safe_receiver == null)
            null;
          else {
            tmp1_safe_receiver.setAttribute('data-theme', theme);
          }
          window.localStorage.setItem('minekot.theme', theme);
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
  protoOf(AppEntry$lambda$slambda).f1r = function ($this$LaunchedEffect, completion) {
    var i = new AppEntry$lambda$slambda(this.i3t_1, completion);
    i.j3t_1 = $this$LaunchedEffect;
    return i;
  };
  function AppEntry$lambda$slambda_0($colorMode, resultContinuation) {
    var i = new AppEntry$lambda$slambda($colorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1r($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppEntry$lambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppEntry$lambda$slambda_1).e1r = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1r($this$LaunchedEffect, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(AppEntry$lambda$slambda_1).z8 = function (p1, $completion) {
    return this.e1r((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppEntry$lambda$slambda_1).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          ensureStylesheetLoaded();
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
  protoOf(AppEntry$lambda$slambda_1).f1r = function ($this$LaunchedEffect, completion) {
    var i = new AppEntry$lambda$slambda_1(completion);
    i.s3t_1 = $this$LaunchedEffect;
    return i;
  };
  function AppEntry$lambda$slambda_2(resultContinuation) {
    var i = new AppEntry$lambda$slambda_1(resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1r($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppEntry$lambda$lambda($content) {
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
  function ComposableLambda$invoke$ref_86(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
        var colorMode = Companion_instance_1.j35($composer_0, 6);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.r13(colorMode.l2_1);
        // Inline function 'kotlin.let' call
        var it = $composer_0.n13();
        var tmp_0;
        if (invalid || it === Companion_getInstance().p12_1) {
          var value = AppEntry$lambda$slambda_0(colorMode, null);
          $composer_0.o13(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp$ret$3 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        LaunchedEffect(colorMode, tmp$ret$3, $composer_0, 0);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.n13();
        var tmp_2;
        if (false || it_0 === Companion_getInstance().p12_1) {
          var value_0 = AppEntry$lambda$slambda_2(null);
          $composer_0.o13(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp$ret$7 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        LaunchedEffect(Unit_instance, tmp$ret$7, $composer_0, 6);
        var tmp_4 = minHeight(toModifier(get_SmoothColorStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), get_vh(100));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-990392813, true, AppEntry$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.p13(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_1.n13();
        var tmp_5;
        if (invalid_0 || it_1 === Companion_getInstance().p12_1) {
          var value_1 = ComposableLambda$invoke$ref_86(dispatchReceiver);
          $composer_1.o13(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Surface(tmp_4, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp = Unit_instance;
      } else {
        $composer_0.h13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_87(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_HeadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return HeadlineTextStyle;
  }
  var HeadlineTextStyle;
  function get_SubheadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return SubheadlineTextStyle;
  }
  var SubheadlineTextStyle;
  function get_CircleButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return CircleButtonVariant;
  }
  var CircleButtonVariant;
  function get_UncoloredButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return UncoloredButtonVariant;
  }
  var UncoloredButtonVariant;
  function initSiteStyles(ctx) {
    _init_properties_AppStyles_kt__9fg0zz();
    ctx.c36_1.p37('html', initSiteStyles$lambda);
    registerStyleBase(ctx.c36_1, 'body', initSiteStyles$lambda_0);
    var tmp = get_HorizontalDividerStyle();
    modifyStyleBase(ctx.d36_1, tmp, VOID, initSiteStyles$lambda_1);
  }
  function HeadlineTextStyle$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(textAlign(fontSize(Companion_instance_2, get_cssRem(3)), Companion_instance_3.n2t()), 1.2);
  }
  function SubheadlineTextStyle$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return color(textAlign(fontSize(Companion_instance_2, get_cssRem(1)), Companion_instance_3.n2t()), get_color(toPalette($this$base.t39_1)).o33().l33(VOID, VOID, VOID, 0.8));
  }
  function CircleButtonVariant$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return borderRadius(padding(Companion_instance_2, get_px(0)), get_percent(50));
  }
  function UncoloredButtonVariant$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return setVariable(Companion_instance_2, ButtonVars_getInstance().v3g(), Colors_instance.y33());
  }
  function initSiteStyles$lambda($this$registerStyle) {
    _init_properties_AppStyles_kt__9fg0zz();
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = 'no-preference';
    var tmp = new MediaFeature('prefers-reduced-motion', tmp$ret$2);
    $this$registerStyle.v37(tmp, initSiteStyles$lambda$lambda);
    return Unit_instance;
  }
  function initSiteStyles$lambda$lambda() {
    _init_properties_AppStyles_kt__9fg0zz();
    return scrollBehavior(Companion_instance_2, Companion_instance_4.w2v());
  }
  function initSiteStyles$lambda_0() {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(fontSize(fontFamily(Companion_instance_2, ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']), get_px(18)), 1.5);
  }
  function initSiteStyles$lambda_1($this$modifyStyleBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return fillMaxWidth(Companion_instance_2);
  }
  var properties_initialized_AppStyles_kt_kq2bkd;
  function _init_properties_AppStyles_kt__9fg0zz() {
    if (!properties_initialized_AppStyles_kt_kq2bkd) {
      properties_initialized_AppStyles_kt_kq2bkd = true;
      var tmp = Companion_instance_5;
      HeadlineTextStyle = base(tmp, VOID, HeadlineTextStyle$lambda);
      var tmp_0 = Companion_instance_5;
      SubheadlineTextStyle = base(tmp_0, VOID, SubheadlineTextStyle$lambda);
      var tmp_1 = get_ButtonStyle();
      CircleButtonVariant = addVariantBase(tmp_1, VOID, CircleButtonVariant$lambda);
      var tmp_2 = get_ButtonStyle();
      UncoloredButtonVariant = addVariantBase(tmp_2, VOID, UncoloredButtonVariant$lambda);
    }
  }
  var org_example_app_SitePalette_Brand$stable;
  var org_example_app_SitePalette$stable;
  var org_example_app_SitePalettes$stable;
  function Brand(primary, accent) {
    primary = primary === VOID ? Companion_instance_6.v33(3965935) : primary;
    accent = accent === VOID ? Companion_instance_6.v33(15981403) : accent;
    this.t3t_1 = primary;
    this.u3t_1 = accent;
  }
  function SitePalette(nearBackground, cobweb, brand) {
    this.v3t_1 = nearBackground;
    this.w3t_1 = cobweb;
    this.x3t_1 = brand;
  }
  function SitePalettes() {
    SitePalettes_instance = this;
    this.y3t_1 = new SitePalette(Companion_instance_6.v33(16054010), Colors_instance.l34(), new Brand(Companion_instance_6.v33(3965935), Companion_instance_6.v33(16562691)));
    this.z3t_1 = new SitePalette(Companion_instance_6.v33(2303027), Colors_instance.l34().m33(), new Brand(Companion_instance_6.v33(13346551), Companion_instance_6.v33(13346551)));
  }
  var SitePalettes_instance;
  function SitePalettes_getInstance() {
    if (SitePalettes_instance == null)
      new SitePalettes();
    return SitePalettes_instance;
  }
  function toSitePalette(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.l2_1) {
      case 0:
        tmp = SitePalettes_getInstance().y3t_1;
        break;
      case 1:
        tmp = SitePalettes_getInstance().z3t_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function initTheme(ctx) {
    var tmp;
    try {
      var tmp0_elvis_lhs = window.localStorage.getItem('minekot.theme');
      tmp = tmp0_elvis_lhs == null ? 'dark' : tmp0_elvis_lhs;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_0 = 'dark';
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var storedTheme = tmp;
    ctx.b36_1.n37_1 = storedTheme === 'light' ? ColorMode_LIGHT_getInstance() : ColorMode_DARK_getInstance();
    set_background(ctx.d36_1.u36_1.u3c_1, Companion_instance_6.v33(15791359));
    set_color(ctx.d36_1.u36_1.u3c_1, Colors_instance.a34());
    set_background(ctx.d36_1.u36_1.v3c_1, Companion_instance_6.v33(1315873));
    set_color(ctx.d36_1.u36_1.v3c_1, Companion_instance_6.v33(13489908));
    set_border(ctx.d36_1.u36_1.v3c_1, Companion_instance_6.x33(133, 139, 166, 0.18));
    get_link(ctx.d36_1.u36_1.v3c_1).g3o(Companion_instance_6.v33(9024762));
    get_link(ctx.d36_1.u36_1.v3c_1).w3p(Companion_instance_6.v33(9024762));
  }
  function get_MarkdownStyle() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return MarkdownStyle;
  }
  var MarkdownStyle;
  function initMarkdownLayout(ctx) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    var tmp0_safe_receiver = ensureNotNull(get_markdown(ctx)).f3e_1.ec('title');
    var title = tmp0_safe_receiver == null ? null : singleOrNull(tmp0_safe_receiver);
    // Inline function 'kotlin.require' call
    if (!!(title == null)) {
      var message = 'Markdown file must set "title" in frontmatter';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0 = ctx.f30_1;
    // Inline function 'com.varabyte.kobweb.core.data.add' call
    var value = new PageLayoutData(title);
    tmp0.a30(getKClass(PageLayoutData), value);
  }
  function MarkdownLayout(content, $composer, $changed) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-584464285);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(content) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp = get_MarkdownStyle();
      var tmp_0 = toAttrs(tmp, null, $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter(), 1);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(53848610, true, MarkdownLayout$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.n13();
      var tmp_1;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = ComposableLambda$invoke$ref_88(dispatchReceiver);
        $composer_1.o13(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_0, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(MarkdownLayout$lambda_0(content, $changed));
    }
  }
  function MarkdownStyle$lambda($this$CssStyle) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$CssStyle.s37(MarkdownStyle$lambda$lambda);
    $this$CssStyle.u37('h1', MarkdownStyle$lambda$lambda_0);
    $this$CssStyle.u37('h2', MarkdownStyle$lambda$lambda_1);
    $this$CssStyle.u37('h3', MarkdownStyle$lambda$lambda_2);
    $this$CssStyle.u37('h4', MarkdownStyle$lambda$lambda_3);
    $this$CssStyle.u37('ul', MarkdownStyle$lambda$lambda_4);
    $this$CssStyle.u37(' :is(li,ol,ul)', MarkdownStyle$lambda$lambda_5);
    $this$CssStyle.u37('code', MarkdownStyle$lambda$lambda_6($this$CssStyle));
    $this$CssStyle.u37('pre', MarkdownStyle$lambda$lambda_7);
    $this$CssStyle.u37('pre > code', MarkdownStyle$lambda$lambda_8($this$CssStyle));
    return Unit_instance;
  }
  function MarkdownStyle$lambda$lambda() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return fillMaxSize(Companion_instance_2);
  }
  function MarkdownStyle$lambda$lambda_0() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return lineHeight(margin(fontWeight(fontSize(Companion_instance_2, get_cssRem(3)), 400), VOID, VOID, get_cssRem(2.5)), 1.2);
  }
  function MarkdownStyle$lambda$lambda_1() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(fontWeight(fontSize(Companion_instance_2, get_cssRem(3)), 300), get_cssRem(2));
  }
  function MarkdownStyle$lambda$lambda_2() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(fontWeight(fontSize(Companion_instance_2, get_cssRem(2.4)), 300), get_cssRem(1.5));
  }
  function MarkdownStyle$lambda$lambda_3() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(fontWeight_0(fontSize(Companion_instance_2, get_cssRem(1.2)), Companion_instance_7.g2u()), get_cssRem(1), VOID, get_cssRem(0.5));
  }
  function MarkdownStyle$lambda$lambda_4() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return overflowWrap(fillMaxWidth(Companion_instance_2), Companion_instance_8.s2v());
  }
  function MarkdownStyle$lambda$lambda_5() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(Companion_instance_2, VOID, VOID, get_cssRem(0.25));
  }
  function MarkdownStyle$lambda$lambda_6($this_CssStyle) {
    return function () {
      return fontWeight_0(color(Companion_instance_2, get_color(toPalette($this_CssStyle.a39_1)).o33().l33(VOID, VOID, VOID, 0.8)), Companion_instance_7.g2u());
    };
  }
  function MarkdownStyle$lambda$lambda_7() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return fillMaxWidth(margin(Companion_instance_2, get_cssRem(0.5), VOID, get_cssRem(2)));
  }
  function MarkdownStyle$lambda$lambda$lambda($this$overflow) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$overflow.h35(Companion_instance_9.r2v());
    return Unit_instance;
  }
  function MarkdownStyle$lambda$lambda_8($this_CssStyle) {
    return function () {
      var tmp = Companion_instance_2;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Block' call
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = backgroundColor(fillMaxWidth(display(tmp, 'block')), toSitePalette($this_CssStyle.a39_1).v3t_1);
      var tmp_1 = get_px(1);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = fontSize(padding(borderRadius(border(tmp_0, tmp_1, 'solid', get_color(toPalette($this_CssStyle.a39_1))), get_cssRem(0.25)), get_cssRem(0.5)), get_cssRem(1));
      return overflow(tmp_2, MarkdownStyle$lambda$lambda$lambda);
    };
  }
  function MarkdownLayout$lambda($content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $content($composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_88(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function MarkdownLayout$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      MarkdownLayout($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_MarkdownLayout_kt_c0ljiz;
  function _init_properties_MarkdownLayout_kt__1k3pk7() {
    if (!properties_initialized_MarkdownLayout_kt_c0ljiz) {
      properties_initialized_MarkdownLayout_kt_c0ljiz = true;
      MarkdownStyle = CssStyle(VOID, MarkdownStyle$lambda);
    }
  }
  function get_PageContentStyle() {
    _init_properties_PageLayout_kt__pf69s7();
    return PageContentStyle;
  }
  var PageContentStyle;
  var org_example_app_components_layouts_PageLayoutData$stable;
  function SvgCobweb(modifier, $composer, $changed) {
    _init_properties_PageLayout_kt__pf69s7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1405805726);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(modifier) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      var color = toSitePalette(Companion_instance_1.j35($composer_0, 6)).w3t_1;
      var tmp = maxWidth(modifier, get_percent(100));
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.n13();
      var tmp_0;
      if (false || it === Companion_getInstance().p12_1) {
        var value = SvgCobweb$lambda;
        this_0.o13(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp$ret$3 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      var tmp_2 = toAttrs_0(tmp, tmp$ret$3);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1676198964, true, SvgCobweb$lambda_0(color), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_92(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Svg(tmp_2, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(SvgCobweb$lambda_1(modifier, $changed));
    }
  }
  function PageLayoutData(title) {
    this.a3u_1 = title;
  }
  function PageLayout(ctx, content, $composer, $changed) {
    _init_properties_PageLayout_kt__pf69s7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-87651282);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.p13(ctx) : $composer_0.s13(ctx)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      // Inline function 'com.varabyte.kobweb.core.data.getValue' call
      var this_0 = ctx.g2z_1;
      var data = getValue(this_0, getKClass(PageLayoutData));
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.p13(data);
      // Inline function 'kotlin.let' call
      var it = tmp0.n13();
      var tmp;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = PageLayout$slambda_0(data, null);
        tmp0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$4 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      LaunchedEffect(data.a3u_1, tmp$ret$4, $composer_0, 0);
      var tmp_1 = minHeight(fillMaxWidth(Companion_instance_2), get_vh(100));
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_1.n13();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().p12_1) {
        var value_0 = PageLayout$lambda;
        this_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp$ret$8 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      var tmp_4 = gridTemplateRows(tmp_1, tmp$ret$8);
      var tmp_5 = Center_instance;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-308655564, true, PageLayout$lambda_0(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.n13();
      var tmp_6;
      if (invalid_0 || it_1 === Companion_getInstance().p12_1) {
        var value_1 = ComposableLambda$invoke$ref_95(dispatchReceiver);
        $composer_1.o13(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_4, tmp_5, null, tmp0_0, $composer_0, 3072 | com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter() << 3, 4);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(PageLayout$lambda_1(ctx, content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_89(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$PageLayoutKt$lambda$_2066276813$lambda_2h1u5d($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    Footer_0(null, $composer_0, 0, 1);
    return Unit_instance;
  }
  function ComposableSingletons$PageLayoutKt() {
    ComposableSingletons$PageLayoutKt_instance = this;
    var tmp = this;
    tmp.b3u_1 = ComposableLambda$invoke$ref_89(composableLambdaInstance(-2066276813, false, ComposableSingletons$PageLayoutKt$lambda$_2066276813$lambda_2h1u5d));
  }
  var ComposableSingletons$PageLayoutKt_instance;
  function ComposableSingletons$PageLayoutKt_getInstance() {
    if (ComposableSingletons$PageLayoutKt_instance == null)
      new ComposableSingletons$PageLayoutKt();
    return ComposableSingletons$PageLayoutKt_instance;
  }
  function PageContentStyle$lambda($this$CssStyle) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$CssStyle.s37(PageContentStyle$lambda$lambda);
    var tmp = Breakpoint_MD_getInstance();
    $this$CssStyle.u39(tmp, PageContentStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function PageContentStyle$lambda$lambda() {
    _init_properties_PageLayout_kt__pf69s7();
    var tmp0_$receiver = fillMaxSize(Companion_instance_2);
    var tmp1_leftRight = get_cssRem(2);
    var tmp2_top = get_cssRem(4);
    return padding_0(tmp0_$receiver, tmp2_top, tmp1_leftRight);
  }
  function PageContentStyle$lambda$lambda_0() {
    _init_properties_PageLayout_kt__pf69s7();
    return maxWidth(Companion_instance_2, get_cssRem(60));
  }
  function SvgCobweb$lambda($this$toAttrs) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$toAttrs.q2x(get_cssRem(25));
    $this$toAttrs.p2x(get_cssRem(20));
    return Unit_instance;
  }
  function SvgCobweb$lambda$lambda$lambda($this$RadialGradient) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$RadialGradient.v2x(0);
    $this$RadialGradient.w2x(0);
    $this$RadialGradient.x2x(get_percent(120));
    return Unit_instance;
  }
  function SvgCobweb$lambda$lambda$lambda_0($color) {
    return function ($this$RadialGradient, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = get_percent(50);
      Stop($this$RadialGradient, tmp, $color, null, $composer_0, 14 & $changed, 4);
      Stop($this$RadialGradient, get_percent(100), $color, 0.0, $composer_0, 3072 | 14 & $changed, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_90(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function SvgCobweb$lambda$lambda($cobwebFadeOutId, $color) {
    return function ($this$Defs, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = SvgCobweb$lambda$lambda$lambda;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1063110510, true, SvgCobweb$lambda$lambda$lambda_0($color), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_90(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      RadialGradient($this$Defs, $cobwebFadeOutId, tmp_1, tmp0, $composer_0, 3504 | 14 & $changed, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_91(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function SvgCobweb$lambda$lambda$lambda_1($this$transform) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$transform.g2y(0.6);
    return Unit_instance;
  }
  function SvgCobweb$lambda$lambda_0($cobwebFadeOutId) {
    return function ($this$Path) {
      $this$Path.a2y('M-19.5501 -131.516L37.5899-59.412C34.8649 -10.82 13.8419 26.38 -14.8001 60.62L-21.5161 58.86V78.18L-18.9591 78.852C-3.60911 123.917 -9.87111 169.679 -17.1391 217.146L-21.5151 219.193V239.823L-12.3351 235.529C-5.81911 246.236 1.32289 262.576 6.72489 276.859C10.0329 285.624 13.1183 294.472 15.9779 303.394L-21.5151 341.084V343.514H2.42689L30.9769 314.814C40.2469 314.451 72.7469 313.341 113.677 314.064C160.421 314.889 216.289 318.364 252.727 327.731L257.807 343.515H277.439L270.009 320.427C305.949 278.917 341.921 239.902 401.743 218.087L453.517 238.573V218.476L410.534 201.468C404.16 162.258 423.289 124.803 441.154 84.788L453.517 82.203V63.111L447.194 64.434L441.744 61.631C385.656 32.8 365.41 -16.36 348.444 -71.07L392.628 -131.516H369.478L330.878 -78.706C272.605 -77.452 218.403 -81.169 176.432 -116.496L174.158 -131.516H155.258L158.096 -112.766C130.96 -83.776 100.532 -64.812 53.5119 -69.41L4.29189 -131.516H-19.5521H-19.5501ZM180.367 -90.512C220.975 -64.208 268.865 -59.618 317.121 -59.882L283.981 -14.542C247.393 -14.146 214.125 -17.576 188.136 -39.18L180.367 -90.512ZM161.533 -90.072L169.823 -35.297C152.008 -16.681 132.529 -5.117 101.828 -8.443L68.7519 -50.18C107.345 -50.92 137.11 -67.324 161.532 -90.072H161.533ZM334.857 -52.48C350.393 -5.51302 371.907 40.21 419.407 70.242L367.639 81.062L366.823 80.645C329.553 61.5 316.378 29.005 304.888 -8.18501L304.172 -10.5L334.855 -52.48H334.857ZM54.1169 -38.562L88.5099 4.836C85.9869 34.419 73.1059 57.496 55.3699 79.043L4.96589 65.81C28.6799 36.036 47.6059 2.41699 54.1179 -38.563L54.1169 -38.562ZM191.965 -13.872C215.901 -0.177994 243.015 3.528 270.369 4.076L237.459 49.104C222.401 42.74 211.322 31.351 198.889 18.779L196.546 16.409L191.964 -13.871L191.965 -13.872ZM173.187 -13.062L178.779 23.893C167.603 31.393 154.343 36.043 139.733 39.385L116.831 10.488C139.541 9.093 157.926 -0.192001 173.187 -13.062ZM290.567 8.11099C300.313 37.266 313.713 66.128 341.147 86.601L285.219 98.291C272.222 87.109 265.242 73.557 258.063 58.401L256.393 54.871L290.567 8.11099ZM104.135 24.554L123.277 48.708L123.199 49.418C121.269 66.783 114.322 79.048 106.549 92.481L75.0129 84.201C88.2249 66.845 98.9529 47.373 104.133 24.554H104.135ZM181.809 43.907L187.821 83.649C184.26 84.3288 180.81 85.5 177.571 87.129L152.394 55.362C162.584 52.612 172.524 49.017 181.808 43.908L181.809 43.907ZM201.169 46.95C208.524 53.528 216.689 59.672 226.321 64.34L210.487 86.002C209.307 85.5035 208.103 85.0636 206.88 84.684L201.17 46.949L201.169 46.95ZM138.419 67.814L163.329 99.244C161.729 101.454 160.361 103.823 159.249 106.314L125.335 97.412C130.29 88.655 135.165 79.159 138.419 67.814ZM243.944 71.896C249.064 82.311 255.048 92.991 263.597 102.809L232.454 109.317C230.89 104.865 228.541 100.73 225.517 97.107L243.944 71.896ZM2.17189 84.4L51.0449 97.23C60.2719 125.445 56.8399 154.31 52.2449 184.678L3.17289 207.64C9.12289 167.493 13.4619 126.226 2.17189 84.4ZM418.314 89.562C403.381 122.197 388.2 156.295 390.881 193.692L347.141 176.385C343.541 151.369 355.917 126.94 367.866 100.107L418.316 89.563L418.314 89.562ZM71.7379 102.662L99.3519 109.91L99.9139 111.31C106.014 126.443 105.297 143.082 102.814 161.018L72.4959 175.203C75.7099 151.691 77.4719 127.39 71.7379 102.662ZM345.033 104.879C335.99 124.696 327.236 145.682 327.781 168.726L291.194 154.249C291.19 141.101 292.589 131.409 300.314 120.329L305.294 113.185L345.034 104.878L345.033 104.879ZM120.673 115.507L155.91 124.759C156.126 128.317 156.825 131.829 157.988 135.199L122.718 151.702C123.768 139.802 123.644 127.654 120.673 115.507ZM279.833 118.507C275.208 127.94 273.453 137.397 272.885 147.005L233.607 131.465C233.873 130.34 234.077 129.192 234.247 128.035L279.832 118.507H279.833ZM225.037 148.169L261.541 162.612C252.631 167.192 244.225 173.148 236.864 178.772C233.505 181.339 230.209 183.988 226.978 186.714L216.876 155.317C219.916 153.317 222.662 150.909 225.038 148.169H225.037ZM166.917 151.653L129.26 189.51C126.702 183.31 123.242 178.363 119.672 174.275L119.76 173.719L166.914 151.653H166.917ZM184.647 160.325C189.395 161.652 194.351 162.077 199.256 161.58L209.729 194.12C196.415 193.96 172.116 194.196 148.036 197.13L184.646 160.326L184.647 160.325ZM288.133 173.135L313.496 183.169C284.096 198.089 263.12 219.065 244.244 240.369L233.2 206.05C236.754 202.876 241.93 198.42 248.21 193.623C259.63 184.896 274.418 175.923 283.895 173.996L288.133 173.135ZM101.635 182.2L103.152 183.725C109 189.6 113.125 194.028 114.375 204.475L83.2319 235.783C82.8819 233.513 82.4939 231.153 82.0319 228.641C80.0219 217.691 77.5839 205.699 72.7069 195.737L101.635 182.202V182.2ZM337.563 192.693L376.781 208.211C327.358 230.711 293.866 264.895 263.331 299.681L250.896 261.034C274.999 233.196 298.569 207.418 337.564 192.694L337.563 192.693ZM55.5769 203.75C58.5789 210.587 61.7989 221.92 63.6529 232.016C65.2349 240.626 66.1529 248.096 66.6329 252.466L30.7509 288.541C28.6803 282.405 26.4966 276.307 24.2009 270.251C18.8269 256.035 12.2079 240.239 4.59089 227.611L55.5769 203.751V203.75ZM206.44 212.898C210.408 212.892 213.254 212.928 215.79 212.963L226.186 245.263C199.929 241.113 167.553 241.073 139.129 242.078C123.554 242.628 111.125 243.405 101.272 244.143L125.38 219.906L126.33 219.676C150.076 213.886 186.19 212.93 206.44 212.898ZM164.248 260.288C189.172 260.235 214.614 261.554 232.664 265.391L246.092 307.118C207.384 298.888 157.108 296.141 114.006 295.38C86.7839 294.898 64.7689 295.192 50.1359 295.553L80.9359 264.59C88.7009 263.833 111.646 261.748 139.789 260.754C147.689 260.474 155.939 260.304 164.247 260.287L164.248 260.288Z');
      $this$Path.b2y(SvgCobweb$lambda$lambda$lambda_1);
      $this$Path.d2y($cobwebFadeOutId);
      return Unit_instance;
    };
  }
  function SvgCobweb$lambda_0($color) {
    return function ($this$Svg, $composer, $changed) {
      var $composer_0 = $composer;
      var cobwebFadeOutId = _SvgId___init__impl__pmt7ru('cobweb-fade-out');
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1723217622, true, SvgCobweb$lambda$lambda(cobwebFadeOutId, $color), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.n13();
      var tmp;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = ComposableLambda$invoke$ref_91(dispatchReceiver);
        $composer_1.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Defs($this$Svg, null, tmp0, $composer_0, 384 | 14 & $changed, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.n13();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().p12_1) {
        var value_0 = SvgCobweb$lambda$lambda_0(cobwebFadeOutId);
        $composer_0.o13(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp$ret$10 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      Path($this$Svg, tmp$ret$10, $composer_0, 48 | 14 & $changed);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_92(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function SvgCobweb$lambda_1($modifier, $$changed) {
    return function ($composer, $force) {
      SvgCobweb($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PageLayout$slambda($data, resultContinuation) {
    this.k3u_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PageLayout$slambda).e1r = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1r($this$LaunchedEffect, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(PageLayout$slambda).z8 = function (p1, $completion) {
    return this.e1r((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PageLayout$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          document.title = 'Kobweb - ' + this.k3u_1.a3u_1;
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
  protoOf(PageLayout$slambda).f1r = function ($this$LaunchedEffect, completion) {
    var i = new PageLayout$slambda(this.k3u_1, completion);
    i.l3u_1 = $this$LaunchedEffect;
    return i;
  };
  function PageLayout$slambda_0($data, resultContinuation) {
    var i = new PageLayout$slambda($data, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1r($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PageLayout$lambda($this$gridTemplateRows) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$gridTemplateRows.n2u(get_fr(1));
    $this$gridTemplateRows.m2u($this$gridTemplateRows.l2u());
    return Unit_instance;
  }
  function PageLayout$lambda$lambda$lambda($content, $this_Column) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $content($this_Column, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_93(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function PageLayout$lambda$lambda($content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.p13($this$Column) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
        NavHeader('home', $composer_0, 6);
        var tmp_1 = get_PageContentStyle();
        var tmp_2 = toAttrs(tmp_1, null, $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter(), 1);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1566563242, true, PageLayout$lambda$lambda$lambda($content, $this$Column), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.p13(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.n13();
        var tmp_3;
        if (invalid || it === Companion_getInstance().p12_1) {
          var value = ComposableLambda$invoke$ref_93(dispatchReceiver);
          $composer_1.o13(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_2, tmp0, $composer_0, 48, 0);
        tmp_0 = Unit_instance;
      } else {
        $composer_0.h13();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_94(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function PageLayout$lambda_0($content) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.p13($this$Box) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
        SvgCobweb($this$Box.h32(gridRow(Companion_instance_2, 1), TopStart_instance), $composer_0, 0);
        var tmp_1 = gridRow(fillMaxSize(Companion_instance_2), 1);
        var tmp_2 = CenterHorizontally_instance;
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1637893845, true, PageLayout$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.p13(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.n13();
        var tmp_3;
        if (invalid || it === Companion_getInstance().p12_1) {
          var value = ComposableLambda$invoke$ref_94(dispatchReceiver);
          $composer_1.o13(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_1, null, tmp_2, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 10);
        Div(toAttrs_0(gridRow(fillMaxWidth(Companion_instance_2), 2)), ComposableSingletons$PageLayoutKt_getInstance().b3u_1, $composer_0, 48, 0);
        tmp_0 = Unit_instance;
      } else {
        $composer_0.h13();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_95(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function PageLayout$lambda_1($ctx, $content, $$changed) {
    return function ($composer, $force) {
      PageLayout($ctx, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_PageLayout_kt_piu0g5;
  function _init_properties_PageLayout_kt__pf69s7() {
    if (!properties_initialized_PageLayout_kt_piu0g5) {
      properties_initialized_PageLayout_kt_piu0g5 = true;
      PageContentStyle = CssStyle(VOID, PageContentStyle$lambda);
      org_example_app_components_layouts_PageLayoutData$stable = 0;
    }
  }
  function SiteScaffold(activePath, footerText, content, $composer, $changed, $default) {
    var footerText_0 = {_v: footerText};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(885527611);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(activePath) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.p13(footerText_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.s13(content) ? 256 : 128);
    if ($composer_0.u13(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        footerText_0._v = null;
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = SiteScaffold$lambda;
        this_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1596976326, true, SiteScaffold$lambda_0(activePath, content, footerText_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_96(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_1, tmp0, $composer_0, 54, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(SiteScaffold$lambda_1(activePath, footerText_0, content, $changed, $default));
    }
  }
  function SiteScaffold$lambda($this$Div) {
    $this$Div.a2m(['shell']);
    return Unit_instance;
  }
  function SiteScaffold$lambda_0($activePath, $content, $footerText) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      NavHeader($activePath, $composer_0, 0);
      $content($composer_0, 0);
      Footer_0($footerText._v, $composer_0, 0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_96(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function SiteScaffold$lambda_1($activePath, $footerText, $content, $$changed, $$default) {
    return function ($composer, $force) {
      SiteScaffold($activePath, $footerText._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Footer_0(text, $composer, $changed, $default) {
    var text_0 = {_v: text};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1986831390);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(text_0._v) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        text_0._v = null;
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = Footer$lambda;
        this_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1622628847, true, Footer$lambda_0(text_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_100(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Footer(tmp_1, tmp0, $composer_0, 54, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Footer$lambda_1(text_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_97(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$FooterKt$lambda$_240623937$lambda_au1s9k($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Github', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_98(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$FooterKt$lambda$30447183$lambda($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    Text(' | ', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_99(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$FooterKt$lambda$_815390104$lambda_8kb1zv($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Discord', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableSingletons$FooterKt() {
    ComposableSingletons$FooterKt_instance = this;
    var tmp = this;
    tmp.m3u_1 = ComposableLambda$invoke$ref_97(composableLambdaInstance(-240623937, false, ComposableSingletons$FooterKt$lambda$_240623937$lambda_au1s9k));
    var tmp_0 = this;
    tmp_0.n3u_1 = ComposableLambda$invoke$ref_98(composableLambdaInstance(30447183, false, ComposableSingletons$FooterKt$lambda$30447183$lambda));
    var tmp_1 = this;
    tmp_1.o3u_1 = ComposableLambda$invoke$ref_99(composableLambdaInstance(-815390104, false, ComposableSingletons$FooterKt$lambda$_815390104$lambda_8kb1zv));
  }
  var ComposableSingletons$FooterKt_instance;
  function ComposableSingletons$FooterKt_getInstance() {
    if (ComposableSingletons$FooterKt_instance == null)
      new ComposableSingletons$FooterKt();
    return ComposableSingletons$FooterKt_instance;
  }
  function Footer$lambda($this$Footer) {
    $this$Footer.a2m(['footer', 'container']);
    return Unit_instance;
  }
  function Footer$lambda$lambda($this$A) {
    $this$A.x2l('target', '_blank');
    $this$A.x2l('rel', 'noopener noreferrer');
    return Unit_instance;
  }
  function Footer$lambda$lambda_0($this$A) {
    $this$A.x2l('target', '_blank');
    $this$A.x2l('rel', 'noopener noreferrer');
    return Unit_instance;
  }
  function Footer$lambda_0($text) {
    return function ($this$Footer, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!($text._v == null)) {
        $composer_0.w12(120964335);
        Text($text._v, $composer_0, 0);
        $composer_0.x12();
        tmp = Unit_instance;
      } else {
        $composer_0.w12(121020166);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.n13();
        var tmp_0;
        if (false || it === Companion_getInstance().p12_1) {
          var value = Footer$lambda$lambda;
          $composer_0.o13(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp$ret$3 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        A('https://github.com/MineKotLang/', tmp$ret$3, ComposableSingletons$FooterKt_getInstance().m3u_1, $composer_0, 438, 0);
        Span(null, ComposableSingletons$FooterKt_getInstance().n3u_1, $composer_0, 48, 1);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.n13();
        var tmp_2;
        if (false || it_0 === Companion_getInstance().p12_1) {
          var value_0 = Footer$lambda$lambda_0;
          $composer_0.o13(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp$ret$7 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        A('https://discord.gg/ADD_IT_HERE_ON_RELEASE', tmp$ret$7, ComposableSingletons$FooterKt_getInstance().o3u_1, $composer_0, 438, 0);
        $composer_0.x12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_100(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Footer$lambda_1($text, $$changed, $$default) {
    return function ($composer, $force) {
      Footer_0($text._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function MainNavLink(path, label, isActive, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-463094245);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(path) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.p13(label) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.q13(isActive) ? 256 : 128);
    if ($composer_0.u13(!(($dirty & 147) === 146), $dirty & 1)) {
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 896) === 256;
      // Inline function 'kotlin.let' call
      var it = tmp0.n13();
      var tmp;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = MainNavLink$lambda(isActive);
        tmp0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1890808211, true, MainNavLink$lambda_0(label), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_104(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      A(path, tmp_1, tmp0_0, $composer_0, 384 | 14 & $dirty, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(MainNavLink$lambda_1(path, label, isActive, $changed));
    }
  }
  function NavHeader(activePath, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1920103014);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(activePath) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      var ctx = rememberPageContext($composer_0, 0);
      var colorMode$delegate = Companion_instance_1.m3b($composer_0, 6);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = NavHeader$lambda_1;
        this_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-853981031, true, NavHeader$lambda_2(colorMode$delegate, activePath), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_108(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_1, tmp0, $composer_0, 54, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(NavHeader$lambda_3(activePath, $changed));
    }
  }
  function ComposableLambda$invoke$ref_101(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda$_2085856988$lambda_b0q6py($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    Img('/favicon.ico', 'MineKot icon', null, $composer_0, 54, 4);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_102(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda$_1644122597$lambda_id21ay($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    Text('MineKot', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_103(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda$988319814$lambda($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$NavHeaderKt$lambda$988319814$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Span(tmp$ret$3, ComposableSingletons$NavHeaderKt_getInstance().p3u_1, $composer_0, 54, 0);
    Span(null, ComposableSingletons$NavHeaderKt_getInstance().q3u_1, $composer_0, 48, 1);
    return Unit_instance;
  }
  function ComposableSingletons$NavHeaderKt$lambda$988319814$lambda$lambda($this$Span) {
    $this$Span.a2m(['brand-mark']);
    return Unit_instance;
  }
  function ComposableSingletons$NavHeaderKt() {
    ComposableSingletons$NavHeaderKt_instance = this;
    var tmp = this;
    tmp.p3u_1 = ComposableLambda$invoke$ref_101(composableLambdaInstance(-2085856988, false, ComposableSingletons$NavHeaderKt$lambda$_2085856988$lambda_b0q6py));
    var tmp_0 = this;
    tmp_0.q3u_1 = ComposableLambda$invoke$ref_102(composableLambdaInstance(-1644122597, false, ComposableSingletons$NavHeaderKt$lambda$_1644122597$lambda_id21ay));
    var tmp_1 = this;
    tmp_1.r3u_1 = ComposableLambda$invoke$ref_103(composableLambdaInstance(988319814, false, ComposableSingletons$NavHeaderKt$lambda$988319814$lambda));
  }
  var ComposableSingletons$NavHeaderKt_instance;
  function ComposableSingletons$NavHeaderKt_getInstance() {
    if (ComposableSingletons$NavHeaderKt_instance == null)
      new ComposableSingletons$NavHeaderKt();
    return ComposableSingletons$NavHeaderKt_instance;
  }
  function MainNavLink$lambda($isActive) {
    return function ($this$A) {
      var tmp;
      if ($isActive) {
        $this$A.x2l('aria-current', 'page');
        tmp = Unit_instance;
      }
      $this$A.x2l('data-theme-nav', '');
      return Unit_instance;
    };
  }
  function MainNavLink$lambda_0($label) {
    return function ($this$A, $composer, $changed) {
      var $composer_0 = $composer;
      Text($label, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_104(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function MainNavLink$lambda_1($path, $label, $isActive, $$changed) {
    return function ($composer, $force) {
      MainNavLink($path, $label, $isActive, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function NavHeader$lambda($colorMode$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true);
    return $colorMode$delegate.t1();
  }
  function NavHeader$lambda_0($colorMode$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true);
    $colorMode$delegate.oy(_set____db54di);
    return Unit_instance;
  }
  function NavHeader$lambda_1($this$Div) {
    $this$Div.a2m(['topbar']);
    return Unit_instance;
  }
  function NavHeader$lambda$lambda($this$Div) {
    $this$Div.a2m(['container', 'topbar-inner']);
    return Unit_instance;
  }
  function NavHeader$lambda$lambda$lambda($this$A) {
    $this$A.a2m(['brand']);
    return Unit_instance;
  }
  function NavHeader$lambda$lambda$lambda_0($this$Nav) {
    $this$Nav.a2m(['nav']);
    $this$Nav.x2l('aria-label', 'Main');
    $this$Nav.y2l(NavHeader$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function NavHeader$lambda$lambda$lambda$lambda($this$style) {
    $this$style.r2n('margin-left', 'auto');
    return Unit_instance;
  }
  function NavHeader$lambda$lambda$lambda_1($activePath) {
    return function ($this$Nav, $composer, $changed) {
      var $composer_0 = $composer;
      MainNavLink('/', 'Home', $activePath === 'home', $composer_0, 54);
      MainNavLink('/docs/', 'Docs', $activePath === 'docs', $composer_0, 54);
      MainNavLink('/addons/', 'Addons', $activePath === 'addons', $composer_0, 54);
      MainNavLink('/scripts/', 'Scripts', $activePath === 'scripts', $composer_0, 54);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_105(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function NavHeader$lambda$lambda$lambda$lambda_0($colorMode$delegate) {
    return function (it) {
      NavHeader$lambda_0($colorMode$delegate, NavHeader$lambda($colorMode$delegate).m35());
      return Unit_instance;
    };
  }
  function NavHeader$lambda$lambda$lambda_2($colorMode$delegate) {
    return function ($this$Button) {
      $this$Button.a2m(['btn']);
      $this$Button.x2l('data-theme-toggle', '');
      $this$Button.f2m(NavHeader$lambda$lambda$lambda$lambda_0($colorMode$delegate));
      return Unit_instance;
    };
  }
  function NavHeader$lambda$lambda$lambda_3($colorMode$delegate) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      Text(NavHeader$lambda($colorMode$delegate).o3b() ? '\u2600\uFE0F' : '\uD83C\uDF19', $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_106(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function NavHeader$lambda$lambda_0($colorMode$delegate, $activePath) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = NavHeader$lambda$lambda$lambda;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      A('/', tmp$ret$3, ComposableSingletons$NavHeaderKt_getInstance().r3u_1, $composer_0, 438, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.n13();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().p12_1) {
        var value_0 = NavHeader$lambda$lambda$lambda_0;
        $composer_0.o13(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp_3 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1133364247, true, NavHeader$lambda$lambda$lambda_1($activePath), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.n13();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().p12_1) {
        var value_1 = ComposableLambda$invoke$ref_105(dispatchReceiver);
        $composer_1.o13(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Nav(tmp_3, tmp0, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.p13($colorMode$delegate);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_0.n13();
      var tmp_6;
      if (invalid_0 || it_2 === Companion_getInstance().p12_1) {
        var value_2 = NavHeader$lambda$lambda$lambda_2($colorMode$delegate);
        $composer_0.o13(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp_8 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(-913596962, true, NavHeader$lambda$lambda$lambda_3($colorMode$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_2.p13(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_3 = $composer_2.n13();
      var tmp_9;
      if (invalid_1 || it_3 === Companion_getInstance().p12_1) {
        var value_3 = ComposableLambda$invoke$ref_106(dispatchReceiver_0);
        $composer_2.o13(value_3);
        tmp_9 = value_3;
      } else {
        tmp_9 = it_3;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Button(tmp_8, tmp0_0, $composer_0, 48, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_107(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function NavHeader$lambda_2($colorMode$delegate, $activePath) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = NavHeader$lambda$lambda;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-820697640, true, NavHeader$lambda$lambda_0($colorMode$delegate, $activePath), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_107(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_1, tmp0, $composer_0, 54, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_108(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function NavHeader$lambda_3($activePath, $$changed) {
    return function ($composer, $force) {
      NavHeader($activePath, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var docsData;
  function get_addonSummaries() {
    _init_properties_SiteData_kt__4l8xm9();
    return addonSummaries;
  }
  var addonSummaries;
  function get_addonDetailsById() {
    _init_properties_SiteData_kt__4l8xm9();
    return addonDetailsById;
  }
  var addonDetailsById;
  function get_scriptSnippets() {
    _init_properties_SiteData_kt__4l8xm9();
    return scriptSnippets;
  }
  var scriptSnippets;
  var org_example_app_data_DocEntry$stable;
  var org_example_app_data_AddonSummary$stable;
  var org_example_app_data_AddonDetail$stable;
  var org_example_app_data_ScriptSnippet$stable;
  function DocEntry(id, type, title, typeLabel, description, syntaxCode, exampleCode) {
    this.s3u_1 = id;
    this.t3u_1 = type;
    this.u3u_1 = title;
    this.v3u_1 = typeLabel;
    this.w3u_1 = description;
    this.x3u_1 = syntaxCode;
    this.y3u_1 = exampleCode;
  }
  protoOf(DocEntry).toString = function () {
    return 'DocEntry(id=' + this.s3u_1 + ', type=' + this.t3u_1 + ', title=' + this.u3u_1 + ', typeLabel=' + this.v3u_1 + ', description=' + this.w3u_1 + ', syntaxCode=' + this.x3u_1 + ', exampleCode=' + this.y3u_1 + ')';
  };
  protoOf(DocEntry).hashCode = function () {
    var result = getStringHashCode(this.s3u_1);
    result = imul(result, 31) + getStringHashCode(this.t3u_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u3u_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v3u_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w3u_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.x3u_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y3u_1) | 0;
    return result;
  };
  protoOf(DocEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DocEntry))
      return false;
    if (!(this.s3u_1 === other.s3u_1))
      return false;
    if (!(this.t3u_1 === other.t3u_1))
      return false;
    if (!(this.u3u_1 === other.u3u_1))
      return false;
    if (!(this.v3u_1 === other.v3u_1))
      return false;
    if (!(this.w3u_1 === other.w3u_1))
      return false;
    if (!(this.x3u_1 === other.x3u_1))
      return false;
    if (!(this.y3u_1 === other.y3u_1))
      return false;
    return true;
  };
  function AddonSummary(id, title, description, downloadUrl) {
    this.z3u_1 = id;
    this.a3v_1 = title;
    this.b3v_1 = description;
    this.c3v_1 = downloadUrl;
  }
  protoOf(AddonSummary).toString = function () {
    return 'AddonSummary(id=' + this.z3u_1 + ', title=' + this.a3v_1 + ', description=' + this.b3v_1 + ', downloadUrl=' + this.c3v_1 + ')';
  };
  protoOf(AddonSummary).hashCode = function () {
    var result = getStringHashCode(this.z3u_1);
    result = imul(result, 31) + getStringHashCode(this.a3v_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b3v_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c3v_1) | 0;
    return result;
  };
  protoOf(AddonSummary).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AddonSummary))
      return false;
    if (!(this.z3u_1 === other.z3u_1))
      return false;
    if (!(this.a3v_1 === other.a3v_1))
      return false;
    if (!(this.b3v_1 === other.b3v_1))
      return false;
    if (!(this.c3v_1 === other.c3v_1))
      return false;
    return true;
  };
  function AddonDetail(id, title, description, repositoryUrl, downloadUrl, versions, dependencies) {
    this.d3v_1 = id;
    this.e3v_1 = title;
    this.f3v_1 = description;
    this.g3v_1 = repositoryUrl;
    this.h3v_1 = downloadUrl;
    this.i3v_1 = versions;
    this.j3v_1 = dependencies;
  }
  protoOf(AddonDetail).toString = function () {
    return 'AddonDetail(id=' + this.d3v_1 + ', title=' + this.e3v_1 + ', description=' + this.f3v_1 + ', repositoryUrl=' + this.g3v_1 + ', downloadUrl=' + this.h3v_1 + ', versions=' + toString(this.i3v_1) + ', dependencies=' + toString(this.j3v_1) + ')';
  };
  protoOf(AddonDetail).hashCode = function () {
    var result = getStringHashCode(this.d3v_1);
    result = imul(result, 31) + getStringHashCode(this.e3v_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f3v_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g3v_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h3v_1) | 0;
    result = imul(result, 31) + hashCode(this.i3v_1) | 0;
    result = imul(result, 31) + hashCode(this.j3v_1) | 0;
    return result;
  };
  protoOf(AddonDetail).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AddonDetail))
      return false;
    if (!(this.d3v_1 === other.d3v_1))
      return false;
    if (!(this.e3v_1 === other.e3v_1))
      return false;
    if (!(this.f3v_1 === other.f3v_1))
      return false;
    if (!(this.g3v_1 === other.g3v_1))
      return false;
    if (!(this.h3v_1 === other.h3v_1))
      return false;
    if (!equals(this.i3v_1, other.i3v_1))
      return false;
    if (!equals(this.j3v_1, other.j3v_1))
      return false;
    return true;
  };
  function ScriptSnippet(id, title, description, code) {
    this.k3v_1 = id;
    this.l3v_1 = title;
    this.m3v_1 = description;
    this.n3v_1 = code;
  }
  protoOf(ScriptSnippet).toString = function () {
    return 'ScriptSnippet(id=' + this.k3v_1 + ', title=' + this.l3v_1 + ', description=' + this.m3v_1 + ', code=' + this.n3v_1 + ')';
  };
  protoOf(ScriptSnippet).hashCode = function () {
    var result = getStringHashCode(this.k3v_1);
    result = imul(result, 31) + getStringHashCode(this.l3v_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m3v_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.n3v_1) | 0;
    return result;
  };
  protoOf(ScriptSnippet).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ScriptSnippet))
      return false;
    if (!(this.k3v_1 === other.k3v_1))
      return false;
    if (!(this.l3v_1 === other.l3v_1))
      return false;
    if (!(this.m3v_1 === other.m3v_1))
      return false;
    if (!(this.n3v_1 === other.n3v_1))
      return false;
    return true;
  };
  var properties_initialized_SiteData_kt_3piwel;
  function _init_properties_SiteData_kt__4l8xm9() {
    if (!properties_initialized_SiteData_kt_3piwel) {
      properties_initialized_SiteData_kt_3piwel = true;
      docsData = listOf([new DocEntry('1', 'Expressions', 'Placeholder Title 1', 'Expression', 'Placeholder description 1.', 'placeholder code 1', 'placeholder example 1'), new DocEntry('2', 'Effects', 'Placeholder Title 2', 'Effects', 'Placeholder description 2.', 'placeholder code 2', 'placeholder example 2'), new DocEntry('3', 'Conditions', 'Placeholder Title 3', 'Condition', 'Placeholder description 3.', 'placeholder code 3', 'placeholder example 3'), new DocEntry('4', 'Effects', 'Placeholder Title 4', 'Effects', 'Placeholder description 4.', 'placeholder code 4', 'placeholder example 4'), new DocEntry('5', 'Events', 'Placeholder Title 5', 'Event', 'Placeholder description 5.', 'placeholder code 5', 'placeholder example 5'), new DocEntry('6', 'Functions', 'Placeholder Title 6', 'Function', 'Placeholder description 6.', 'placeholder code 6', 'placeholder example 6')]);
      addonSummaries = listOf([new AddonSummary('0001', 'PLACEHOLDER', 'PLACEHOLDER', 'https://example.com/download'), new AddonSummary('0002', 'PLACEHOLDER', 'PLACEHOLDER', 'https://example.com/download'), new AddonSummary('0003', 'PLACEHOLDER', 'PLACEHOLDER', 'https://example.com/download')]);
      // Inline function 'kotlin.collections.associateBy' call
      var this_0 = listOf([new AddonDetail('0001', 'PLACEHOLDER', 'PLACEHOLDER', 'https://example.com/repository', 'https://example.com/download', listOf(['1.69', '1.68', '1.67']), listOf(['PLACEHOLDER', 'PLACEHOLDER'])), new AddonDetail('0002', 'PLACEHOLDER', 'PLACEHOLDER', 'https://example.com/repository', 'https://example.com/download', listOf(['1.69', '1.68', '1.67']), listOf(['PLACEHOLDER', 'PLACEHOLDER'])), new AddonDetail('0003', 'PLACEHOLDER', 'PLACEHOLDER', 'https://example.com/repository', 'https://example.com/download', listOf(['1.69', '1.68', '1.67']), listOf(['PLACEHOLDER', 'PLACEHOLDER']))]);
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
      // Inline function 'kotlin.collections.associateByTo' call
      var destination = LinkedHashMap_init_$Create$(capacity);
      var _iterator__ex2g4s = this_0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var tmp$ret$0 = element.d3v_1;
        destination.a2(tmp$ret$0, element);
      }
      addonDetailsById = destination;
      scriptSnippets = listOf([new ScriptSnippet('snippet-1', 'PLACEHOLDER', 'PLACEHOLDER', 'placeholder script snippet'), new ScriptSnippet('snippet-2', 'PLACEHOLDER', 'PLACEHOLDER', 'placeholder script snippet'), new ScriptSnippet('snippet-3', 'PLACEHOLDER', 'PLACEHOLDER', 'placeholder script snippet'), new ScriptSnippet('snippet-4', 'PLACEHOLDER', 'PLACEHOLDER', 'placeholder script snippet')]);
      org_example_app_data_DocEntry$stable = 0;
      org_example_app_data_AddonSummary$stable = 0;
      org_example_app_data_AddonDetail$stable = 8;
      org_example_app_data_ScriptSnippet$stable = 0;
    }
  }
  function HomePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-986398271);
    if ($composer_0.u13(!($changed === 0), $changed & 1)) {
      SiteScaffold('home', null, ComposableSingletons$IndexKt_getInstance().t3w_1, $composer_0, 390, 2);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(HomePage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_109(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$681318329$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Placeholder', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_110(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$750002160$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Placeholder', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_111(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_481290383$lambda_usyj5r($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Placeholder', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_112(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_1712582926$lambda_x4et0y($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Placeholder', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_113(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$233498298$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$233498298$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$IndexKt_getInstance().o3v_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.n13();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().p12_1) {
      var value_0 = ComposableSingletons$IndexKt$lambda$233498298$lambda$lambda_0;
      $composer_0.o13(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    Div(tmp$ret$7, ComposableSingletons$IndexKt_getInstance().p3v_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.n13();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().p12_1) {
      var value_1 = ComposableSingletons$IndexKt$lambda$233498298$lambda$lambda_1;
      $composer_0.o13(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp$ret$11 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    Div(tmp$ret$11, ComposableSingletons$IndexKt_getInstance().q3v_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_2 = $composer_0.n13();
    var tmp_5;
    if (false || it_2 === Companion_getInstance().p12_1) {
      var value_2 = ComposableSingletons$IndexKt$lambda$233498298$lambda$lambda_2;
      $composer_0.o13(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp$ret$15 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    Div(tmp$ret$15, ComposableSingletons$IndexKt_getInstance().r3v_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$233498298$lambda$lambda($this$Div) {
    $this$Div.a2m(['panel', 'placeholder-block', 'placeholder-block-large', 'fade-in']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$233498298$lambda$lambda_0($this$Div) {
    $this$Div.a2m(['panel', 'placeholder-block', 'fade-in']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$233498298$lambda$lambda_1($this$Div) {
    $this$Div.a2m(['panel', 'placeholder-block', 'fade-in']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$233498298$lambda$lambda_2($this$Div) {
    $this$Div.a2m(['panel', 'placeholder-block', 'fade-in']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_114(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$241788923$lambda($this$Section, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$241788923$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$IndexKt_getInstance().s3v_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$241788923$lambda$lambda($this$Div) {
    $this$Div.a2m(['container', 'placeholder-grid']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_115(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_1932132881$lambda_ri2wed($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Addons', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_116(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_1613185650$lambda_ht153($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Browse Community Addons', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_117(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_2018898930$lambda_utihr3($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Search community addons and open a dedicated page for each addon with versions and dependency info.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_118(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$1497102356$lambda($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Open Addons Search', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_119(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$1645619366$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$1645619366$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    A('/addons/', tmp$ret$3, ComposableSingletons$IndexKt_getInstance().x3v_1, $composer_0, 438, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$1645619366$lambda$lambda($this$A) {
    $this$A.a2m(['btn', 'primary']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_120(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$166067824$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$166067824$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$IndexKt_getInstance().u3v_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.n13();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().p12_1) {
      var value_0 = ComposableSingletons$IndexKt$lambda$166067824$lambda$lambda_0;
      $composer_0.o13(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    H2(tmp$ret$7, ComposableSingletons$IndexKt_getInstance().v3v_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.n13();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().p12_1) {
      var value_1 = ComposableSingletons$IndexKt$lambda$166067824$lambda$lambda_1;
      $composer_0.o13(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp$ret$11 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    P(tmp$ret$11, ComposableSingletons$IndexKt_getInstance().w3v_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_2 = $composer_0.n13();
    var tmp_5;
    if (false || it_2 === Companion_getInstance().p12_1) {
      var value_2 = ComposableSingletons$IndexKt$lambda$166067824$lambda$lambda_2;
      $composer_0.o13(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp$ret$15 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    Div(tmp$ret$15, ComposableSingletons$IndexKt_getInstance().y3v_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$166067824$lambda$lambda($this$Div) {
    $this$Div.a2m(['kicker']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$166067824$lambda$lambda_0($this$H2) {
    $this$H2.a2m(['panel-title']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$166067824$lambda$lambda_1($this$P) {
    $this$P.a2m(['helper']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$166067824$lambda$lambda_2($this$Div) {
    $this$Div.a2m(['addon-home-actions']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_121(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_692252367$lambda_4y5xnj($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$_692252367$lambda$lambda_bddr4k;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$IndexKt_getInstance().z3v_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$_692252367$lambda$lambda_bddr4k($this$Div) {
    $this$Div.a2m(['panel', 'addon-home-panel', 'fade-in']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_122(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_1314896334$lambda_2b8cht($this$Section, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$_1314896334$lambda$lambda_jc1o3w;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$IndexKt_getInstance().a3w_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$_1314896334$lambda$lambda_jc1o3w($this$Div) {
    $this$Div.a2m(['container']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_123(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_1759718800$lambda_knptvl($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Docs', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_124(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_1440771569$lambda_ah2rul($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Documentation Browser', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_125(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_1846484849$lambda_ov2g2b($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Browse syntax definitions, examples, and descriptions for events, conditions, effects, and more.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_126(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$1669516437$lambda($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Open Docs', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_127(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$1818033447$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$1818033447$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    A('/docs/', tmp$ret$3, ComposableSingletons$IndexKt_getInstance().f3w_1, $composer_0, 438, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$1818033447$lambda$lambda($this$A) {
    $this$A.a2m(['btn', 'primary']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_128(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$338481905$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$338481905$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$IndexKt_getInstance().c3w_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.n13();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().p12_1) {
      var value_0 = ComposableSingletons$IndexKt$lambda$338481905$lambda$lambda_0;
      $composer_0.o13(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    H2(tmp$ret$7, ComposableSingletons$IndexKt_getInstance().d3w_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.n13();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().p12_1) {
      var value_1 = ComposableSingletons$IndexKt$lambda$338481905$lambda$lambda_1;
      $composer_0.o13(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp$ret$11 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    P(tmp$ret$11, ComposableSingletons$IndexKt_getInstance().e3w_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_2 = $composer_0.n13();
    var tmp_5;
    if (false || it_2 === Companion_getInstance().p12_1) {
      var value_2 = ComposableSingletons$IndexKt$lambda$338481905$lambda$lambda_2;
      $composer_0.o13(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp$ret$15 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    Div(tmp$ret$15, ComposableSingletons$IndexKt_getInstance().g3w_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$338481905$lambda$lambda($this$Div) {
    $this$Div.a2m(['kicker']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$338481905$lambda$lambda_0($this$H2) {
    $this$H2.a2m(['panel-title']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$338481905$lambda$lambda_1($this$P) {
    $this$P.a2m(['helper']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$338481905$lambda$lambda_2($this$Div) {
    $this$Div.a2m(['addon-home-actions']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_129(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_519838286$lambda_qlrzz7($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$_519838286$lambda$lambda_fcmnc8;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$IndexKt_getInstance().h3w_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$_519838286$lambda$lambda_fcmnc8($this$Div) {
    $this$Div.a2m(['panel', 'addon-home-panel', 'fade-in']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_130(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_1142482253$lambda_etlhk3($this$Section, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$_1142482253$lambda$lambda_g57n2w;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$IndexKt_getInstance().i3w_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$_1142482253$lambda$lambda_g57n2w($this$Div) {
    $this$Div.a2m(['container']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_131(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_1587304719$lambda_uh0jo8($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Scripts', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_132(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_1268357488$lambda_p3ho8v($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Script Snippets', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_133(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_1674070768$lambda_7q8m0f($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Browse tiny reusable scripts and quick code examples.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_134(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$1841930518$lambda($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Open Scripts', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_135(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$1990447528$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$1990447528$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    A('/scripts/', tmp$ret$3, ComposableSingletons$IndexKt_getInstance().n3w_1, $composer_0, 438, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$1990447528$lambda$lambda($this$A) {
    $this$A.a2m(['btn', 'primary']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_136(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$510895986$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$510895986$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$IndexKt_getInstance().k3w_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.n13();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().p12_1) {
      var value_0 = ComposableSingletons$IndexKt$lambda$510895986$lambda$lambda_0;
      $composer_0.o13(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    H2(tmp$ret$7, ComposableSingletons$IndexKt_getInstance().l3w_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.n13();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().p12_1) {
      var value_1 = ComposableSingletons$IndexKt$lambda$510895986$lambda$lambda_1;
      $composer_0.o13(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp$ret$11 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    P(tmp$ret$11, ComposableSingletons$IndexKt_getInstance().m3w_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_2 = $composer_0.n13();
    var tmp_5;
    if (false || it_2 === Companion_getInstance().p12_1) {
      var value_2 = ComposableSingletons$IndexKt$lambda$510895986$lambda$lambda_2;
      $composer_0.o13(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp$ret$15 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    Div(tmp$ret$15, ComposableSingletons$IndexKt_getInstance().o3w_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$510895986$lambda$lambda($this$Div) {
    $this$Div.a2m(['kicker']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$510895986$lambda$lambda_0($this$H2) {
    $this$H2.a2m(['panel-title']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$510895986$lambda$lambda_1($this$P) {
    $this$P.a2m(['helper']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$510895986$lambda$lambda_2($this$Div) {
    $this$Div.a2m(['addon-home-actions']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_137(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_347424205$lambda_fqu6qs($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$_347424205$lambda$lambda_fnkljj;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$IndexKt_getInstance().p3w_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$_347424205$lambda$lambda_fnkljj($this$Div) {
    $this$Div.a2m(['panel', 'addon-home-panel', 'fade-in']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_138(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_970068172$lambda_wcfmt5($this$Section, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$_970068172$lambda$lambda_odnum4;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$IndexKt_getInstance().q3w_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$_970068172$lambda$lambda_odnum4($this$Div) {
    $this$Div.a2m(['container']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_139(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_2027002328$lambda_q8s0x3($this$Main, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$_2027002328$lambda$lambda_31f8mq;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Section(tmp$ret$3, ComposableSingletons$IndexKt_getInstance().t3v_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.n13();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().p12_1) {
      var value_0 = ComposableSingletons$IndexKt$lambda$_2027002328$lambda$lambda_31f8mq_0;
      $composer_0.o13(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    Section(tmp$ret$7, ComposableSingletons$IndexKt_getInstance().b3w_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.n13();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().p12_1) {
      var value_1 = ComposableSingletons$IndexKt$lambda$_2027002328$lambda$lambda_31f8mq_1;
      $composer_0.o13(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp$ret$11 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    Section(tmp$ret$11, ComposableSingletons$IndexKt_getInstance().j3w_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_2 = $composer_0.n13();
    var tmp_5;
    if (false || it_2 === Companion_getInstance().p12_1) {
      var value_2 = ComposableSingletons$IndexKt$lambda$_2027002328$lambda$lambda_31f8mq_2;
      $composer_0.o13(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp$ret$15 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    Section(tmp$ret$15, ComposableSingletons$IndexKt_getInstance().r3w_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$_2027002328$lambda$lambda_31f8mq($this$Section) {
    $this$Section.a2m(['hero']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$_2027002328$lambda$lambda_31f8mq_0($this$Section) {
    $this$Section.a2m(['page', 'addons-home']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$_2027002328$lambda$lambda_31f8mq_1($this$Section) {
    $this$Section.a2m(['page', 'addons-home']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$_2027002328$lambda$lambda_31f8mq_2($this$Section) {
    $this$Section.a2m(['page', 'addons-home']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_140(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$1338523861$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
      Main(null, ComposableSingletons$IndexKt_getInstance().s3w_1, $composer_0, 48, 1);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.o3v_1 = ComposableLambda$invoke$ref_109(composableLambdaInstance(681318329, false, ComposableSingletons$IndexKt$lambda$681318329$lambda));
    var tmp_0 = this;
    tmp_0.p3v_1 = ComposableLambda$invoke$ref_110(composableLambdaInstance(750002160, false, ComposableSingletons$IndexKt$lambda$750002160$lambda));
    var tmp_1 = this;
    tmp_1.q3v_1 = ComposableLambda$invoke$ref_111(composableLambdaInstance(-481290383, false, ComposableSingletons$IndexKt$lambda$_481290383$lambda_usyj5r));
    var tmp_2 = this;
    tmp_2.r3v_1 = ComposableLambda$invoke$ref_112(composableLambdaInstance(-1712582926, false, ComposableSingletons$IndexKt$lambda$_1712582926$lambda_x4et0y));
    var tmp_3 = this;
    tmp_3.s3v_1 = ComposableLambda$invoke$ref_113(composableLambdaInstance(233498298, false, ComposableSingletons$IndexKt$lambda$233498298$lambda));
    var tmp_4 = this;
    tmp_4.t3v_1 = ComposableLambda$invoke$ref_114(composableLambdaInstance(241788923, false, ComposableSingletons$IndexKt$lambda$241788923$lambda));
    var tmp_5 = this;
    tmp_5.u3v_1 = ComposableLambda$invoke$ref_115(composableLambdaInstance(-1932132881, false, ComposableSingletons$IndexKt$lambda$_1932132881$lambda_ri2wed));
    var tmp_6 = this;
    tmp_6.v3v_1 = ComposableLambda$invoke$ref_116(composableLambdaInstance(-1613185650, false, ComposableSingletons$IndexKt$lambda$_1613185650$lambda_ht153));
    var tmp_7 = this;
    tmp_7.w3v_1 = ComposableLambda$invoke$ref_117(composableLambdaInstance(-2018898930, false, ComposableSingletons$IndexKt$lambda$_2018898930$lambda_utihr3));
    var tmp_8 = this;
    tmp_8.x3v_1 = ComposableLambda$invoke$ref_118(composableLambdaInstance(1497102356, false, ComposableSingletons$IndexKt$lambda$1497102356$lambda));
    var tmp_9 = this;
    tmp_9.y3v_1 = ComposableLambda$invoke$ref_119(composableLambdaInstance(1645619366, false, ComposableSingletons$IndexKt$lambda$1645619366$lambda));
    var tmp_10 = this;
    tmp_10.z3v_1 = ComposableLambda$invoke$ref_120(composableLambdaInstance(166067824, false, ComposableSingletons$IndexKt$lambda$166067824$lambda));
    var tmp_11 = this;
    tmp_11.a3w_1 = ComposableLambda$invoke$ref_121(composableLambdaInstance(-692252367, false, ComposableSingletons$IndexKt$lambda$_692252367$lambda_4y5xnj));
    var tmp_12 = this;
    tmp_12.b3w_1 = ComposableLambda$invoke$ref_122(composableLambdaInstance(-1314896334, false, ComposableSingletons$IndexKt$lambda$_1314896334$lambda_2b8cht));
    var tmp_13 = this;
    tmp_13.c3w_1 = ComposableLambda$invoke$ref_123(composableLambdaInstance(-1759718800, false, ComposableSingletons$IndexKt$lambda$_1759718800$lambda_knptvl));
    var tmp_14 = this;
    tmp_14.d3w_1 = ComposableLambda$invoke$ref_124(composableLambdaInstance(-1440771569, false, ComposableSingletons$IndexKt$lambda$_1440771569$lambda_ah2rul));
    var tmp_15 = this;
    tmp_15.e3w_1 = ComposableLambda$invoke$ref_125(composableLambdaInstance(-1846484849, false, ComposableSingletons$IndexKt$lambda$_1846484849$lambda_ov2g2b));
    var tmp_16 = this;
    tmp_16.f3w_1 = ComposableLambda$invoke$ref_126(composableLambdaInstance(1669516437, false, ComposableSingletons$IndexKt$lambda$1669516437$lambda));
    var tmp_17 = this;
    tmp_17.g3w_1 = ComposableLambda$invoke$ref_127(composableLambdaInstance(1818033447, false, ComposableSingletons$IndexKt$lambda$1818033447$lambda));
    var tmp_18 = this;
    tmp_18.h3w_1 = ComposableLambda$invoke$ref_128(composableLambdaInstance(338481905, false, ComposableSingletons$IndexKt$lambda$338481905$lambda));
    var tmp_19 = this;
    tmp_19.i3w_1 = ComposableLambda$invoke$ref_129(composableLambdaInstance(-519838286, false, ComposableSingletons$IndexKt$lambda$_519838286$lambda_qlrzz7));
    var tmp_20 = this;
    tmp_20.j3w_1 = ComposableLambda$invoke$ref_130(composableLambdaInstance(-1142482253, false, ComposableSingletons$IndexKt$lambda$_1142482253$lambda_etlhk3));
    var tmp_21 = this;
    tmp_21.k3w_1 = ComposableLambda$invoke$ref_131(composableLambdaInstance(-1587304719, false, ComposableSingletons$IndexKt$lambda$_1587304719$lambda_uh0jo8));
    var tmp_22 = this;
    tmp_22.l3w_1 = ComposableLambda$invoke$ref_132(composableLambdaInstance(-1268357488, false, ComposableSingletons$IndexKt$lambda$_1268357488$lambda_p3ho8v));
    var tmp_23 = this;
    tmp_23.m3w_1 = ComposableLambda$invoke$ref_133(composableLambdaInstance(-1674070768, false, ComposableSingletons$IndexKt$lambda$_1674070768$lambda_7q8m0f));
    var tmp_24 = this;
    tmp_24.n3w_1 = ComposableLambda$invoke$ref_134(composableLambdaInstance(1841930518, false, ComposableSingletons$IndexKt$lambda$1841930518$lambda));
    var tmp_25 = this;
    tmp_25.o3w_1 = ComposableLambda$invoke$ref_135(composableLambdaInstance(1990447528, false, ComposableSingletons$IndexKt$lambda$1990447528$lambda));
    var tmp_26 = this;
    tmp_26.p3w_1 = ComposableLambda$invoke$ref_136(composableLambdaInstance(510895986, false, ComposableSingletons$IndexKt$lambda$510895986$lambda));
    var tmp_27 = this;
    tmp_27.q3w_1 = ComposableLambda$invoke$ref_137(composableLambdaInstance(-347424205, false, ComposableSingletons$IndexKt$lambda$_347424205$lambda_fqu6qs));
    var tmp_28 = this;
    tmp_28.r3w_1 = ComposableLambda$invoke$ref_138(composableLambdaInstance(-970068172, false, ComposableSingletons$IndexKt$lambda$_970068172$lambda_wcfmt5));
    var tmp_29 = this;
    tmp_29.s3w_1 = ComposableLambda$invoke$ref_139(composableLambdaInstance(-2027002328, false, ComposableSingletons$IndexKt$lambda$_2027002328$lambda_q8s0x3));
    var tmp_30 = this;
    tmp_30.t3w_1 = ComposableLambda$invoke$ref_140(composableLambdaInstance(1338523861, false, ComposableSingletons$IndexKt$lambda$1338523861$lambda));
  }
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$lambda($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function NotFoundPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(200536444);
    if ($composer_0.u13(!($changed === 0), $changed & 1)) {
      SiteScaffold('', null, ComposableSingletons$NotFoundKt_getInstance().a3x_1, $composer_0, 390, 2);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(NotFoundPage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_141(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$NotFoundKt$lambda$1615325319$lambda($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    Text('404 - Page Not Found', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_142(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$NotFoundKt$lambda$1980774822$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('The page you are looking for does not exist.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_143(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$NotFoundKt$lambda$_1128893308$lambda_9pd8a9($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    H1(null, ComposableSingletons$NotFoundKt_getInstance().u3w_1, $composer_0, 48, 1);
    P(null, ComposableSingletons$NotFoundKt_getInstance().v3w_1, $composer_0, 48, 1);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_144(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$NotFoundKt$lambda$1590817379$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$NotFoundKt$lambda$1590817379$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$NotFoundKt_getInstance().w3w_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$NotFoundKt$lambda$1590817379$lambda$lambda($this$Div) {
    $this$Div.a2m(['panel', 'fade-in']);
    $this$Div.y2l(ComposableSingletons$NotFoundKt$lambda$1590817379$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ComposableSingletons$NotFoundKt$lambda$1590817379$lambda$lambda$lambda($this$style) {
    padding_1($this$style, [get_cssRem(3)]);
    textAlign_0($this$style, 'center');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_145(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$NotFoundKt$lambda$1281144322$lambda($this$Section, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$NotFoundKt$lambda$1281144322$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$NotFoundKt_getInstance().x3w_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$NotFoundKt$lambda$1281144322$lambda$lambda($this$Div) {
    $this$Div.a2m(['container']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_146(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$NotFoundKt$lambda$_600646859$lambda_2a25su($this$Main, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$NotFoundKt$lambda$_600646859$lambda$lambda_qvoxwz;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Section(tmp$ret$3, ComposableSingletons$NotFoundKt_getInstance().y3w_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$NotFoundKt$lambda$_600646859$lambda$lambda_qvoxwz($this$Section) {
    $this$Section.a2m(['page']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_147(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$NotFoundKt$lambda$_656731160$lambda_muzyiz($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
      Main(null, ComposableSingletons$NotFoundKt_getInstance().z3w_1, $composer_0, 48, 1);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$NotFoundKt() {
    ComposableSingletons$NotFoundKt_instance = this;
    var tmp = this;
    tmp.u3w_1 = ComposableLambda$invoke$ref_141(composableLambdaInstance(1615325319, false, ComposableSingletons$NotFoundKt$lambda$1615325319$lambda));
    var tmp_0 = this;
    tmp_0.v3w_1 = ComposableLambda$invoke$ref_142(composableLambdaInstance(1980774822, false, ComposableSingletons$NotFoundKt$lambda$1980774822$lambda));
    var tmp_1 = this;
    tmp_1.w3w_1 = ComposableLambda$invoke$ref_143(composableLambdaInstance(-1128893308, false, ComposableSingletons$NotFoundKt$lambda$_1128893308$lambda_9pd8a9));
    var tmp_2 = this;
    tmp_2.x3w_1 = ComposableLambda$invoke$ref_144(composableLambdaInstance(1590817379, false, ComposableSingletons$NotFoundKt$lambda$1590817379$lambda));
    var tmp_3 = this;
    tmp_3.y3w_1 = ComposableLambda$invoke$ref_145(composableLambdaInstance(1281144322, false, ComposableSingletons$NotFoundKt$lambda$1281144322$lambda));
    var tmp_4 = this;
    tmp_4.z3w_1 = ComposableLambda$invoke$ref_146(composableLambdaInstance(-600646859, false, ComposableSingletons$NotFoundKt$lambda$_600646859$lambda_2a25su));
    var tmp_5 = this;
    tmp_5.a3x_1 = ComposableLambda$invoke$ref_147(composableLambdaInstance(-656731160, false, ComposableSingletons$NotFoundKt$lambda$_656731160$lambda_muzyiz));
  }
  var ComposableSingletons$NotFoundKt_instance;
  function ComposableSingletons$NotFoundKt_getInstance() {
    if (ComposableSingletons$NotFoundKt_instance == null)
      new ComposableSingletons$NotFoundKt();
    return ComposableSingletons$NotFoundKt_instance;
  }
  function NotFoundPage$lambda($$changed) {
    return function ($composer, $force) {
      NotFoundPage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Addon0001Page($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-819675943);
    if ($composer_0.u13(!($changed === 0), $changed & 1)) {
      AddonDetailPage(getValue_0(get_addonDetailsById(), '0001'), $composer_0, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Addon0001Page$lambda($changed));
    }
  }
  function Addon0001Page$lambda($$changed) {
    return function ($composer, $force) {
      Addon0001Page($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Addon0002Page($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1667473623);
    if ($composer_0.u13(!($changed === 0), $changed & 1)) {
      AddonDetailPage(getValue_0(get_addonDetailsById(), '0002'), $composer_0, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Addon0002Page$lambda($changed));
    }
  }
  function Addon0002Page$lambda($$changed) {
    return function ($composer, $force) {
      Addon0002Page($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Addon0003Page($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-140344107);
    if ($composer_0.u13(!($changed === 0), $changed & 1)) {
      AddonDetailPage(getValue_0(get_addonDetailsById(), '0003'), $composer_0, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Addon0003Page$lambda($changed));
    }
  }
  function Addon0003Page$lambda($$changed) {
    return function ($composer, $force) {
      Addon0003Page($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AddonDetailPage(addon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(817860559);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(addon) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(926160955, true, AddonDetailPage$lambda(addon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.n13();
      var tmp;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = ComposableLambda$invoke$ref_168(dispatchReceiver);
        $composer_1.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SiteScaffold('addons', 'Addon Details', tmp0, $composer_0, 438, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(AddonDetailPage$lambda_0(addon, $changed));
    }
  }
  function ComposableLambda$invoke$ref_148(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AddonDetailPageKt$lambda$921614039$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Addon', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_149(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AddonDetailPageKt$lambda$381565458$lambda($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Back to addons', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_150(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AddonDetailPageKt$lambda$110375867$lambda($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Open source page', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_151(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AddonDetailPageKt$lambda$_594484454$lambda_4q5pqq($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Download addon', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_152(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AddonDetailPageKt$lambda$762536613$lambda($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Latest Versions', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_153(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AddonDetailPageKt$lambda$1266727438$lambda($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Dependencies', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_154(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AddonDetailPageKt$lambda$_655615090$lambda_wvltj2($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Dependencies required by this addon.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableSingletons$AddonDetailPageKt() {
    ComposableSingletons$AddonDetailPageKt_instance = this;
    var tmp = this;
    tmp.b3x_1 = ComposableLambda$invoke$ref_148(composableLambdaInstance(921614039, false, ComposableSingletons$AddonDetailPageKt$lambda$921614039$lambda));
    var tmp_0 = this;
    tmp_0.c3x_1 = ComposableLambda$invoke$ref_149(composableLambdaInstance(381565458, false, ComposableSingletons$AddonDetailPageKt$lambda$381565458$lambda));
    var tmp_1 = this;
    tmp_1.d3x_1 = ComposableLambda$invoke$ref_150(composableLambdaInstance(110375867, false, ComposableSingletons$AddonDetailPageKt$lambda$110375867$lambda));
    var tmp_2 = this;
    tmp_2.e3x_1 = ComposableLambda$invoke$ref_151(composableLambdaInstance(-594484454, false, ComposableSingletons$AddonDetailPageKt$lambda$_594484454$lambda_4q5pqq));
    var tmp_3 = this;
    tmp_3.f3x_1 = ComposableLambda$invoke$ref_152(composableLambdaInstance(762536613, false, ComposableSingletons$AddonDetailPageKt$lambda$762536613$lambda));
    var tmp_4 = this;
    tmp_4.g3x_1 = ComposableLambda$invoke$ref_153(composableLambdaInstance(1266727438, false, ComposableSingletons$AddonDetailPageKt$lambda$1266727438$lambda));
    var tmp_5 = this;
    tmp_5.h3x_1 = ComposableLambda$invoke$ref_154(composableLambdaInstance(-655615090, false, ComposableSingletons$AddonDetailPageKt$lambda$_655615090$lambda_wvltj2));
  }
  var ComposableSingletons$AddonDetailPageKt_instance;
  function ComposableSingletons$AddonDetailPageKt_getInstance() {
    if (ComposableSingletons$AddonDetailPageKt_instance == null)
      new ComposableSingletons$AddonDetailPageKt();
    return ComposableSingletons$AddonDetailPageKt_instance;
  }
  function AddonDetailPage$lambda$lambda($this$Main) {
    $this$Main.a2m(['page']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda($this$Section) {
    $this$Section.a2m(['container', 'addon-detail-shell']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda($this$Div) {
    $this$Div.a2m(['panel', 'addon-detail-header', 'fade-in']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda($this$Div) {
    $this$Div.a2m(['kicker']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda_0($this$H1) {
    $this$H1.a2m(['workspace-title']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda_1($addon) {
    return function ($this$H1, $composer, $changed) {
      var $composer_0 = $composer;
      Text($addon.e3v_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_155(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda_2($this$P) {
    $this$P.a2m(['helper']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda_3($addon) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($addon.f3v_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_156(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda_4($this$Div) {
    $this$Div.a2m(['search-row']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda($this$A) {
    $this$A.a2m(['btn']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_0($this$A) {
    $this$A.a2m(['btn', 'primary']);
    $this$A.x2l('target', '_blank');
    $this$A.x2l('rel', 'noopener noreferrer');
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_1($this$A) {
    $this$A.a2m(['btn']);
    $this$A.x2l('target', '_blank');
    $this$A.x2l('rel', 'noopener noreferrer');
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda_5($addon) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      A('/addons/', tmp$ret$3, ComposableSingletons$AddonDetailPageKt_getInstance().c3x_1, $composer_0, 438, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.n13();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().p12_1) {
        var value_0 = AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_0;
        $composer_0.o13(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      A($addon.g3v_1, tmp$ret$7, ComposableSingletons$AddonDetailPageKt_getInstance().d3x_1, $composer_0, 432, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.n13();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().p12_1) {
        var value_1 = AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_1;
        $composer_0.o13(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp$ret$11 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      A($addon.h3v_1, tmp$ret$11, ComposableSingletons$AddonDetailPageKt_getInstance().e3x_1, $composer_0, 432, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_157(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda_0($addon) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = AddonDetailPage$lambda$lambda$lambda$lambda$lambda;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      Div(tmp$ret$3, ComposableSingletons$AddonDetailPageKt_getInstance().b3x_1, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.n13();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().p12_1) {
        var value_0 = AddonDetailPage$lambda$lambda$lambda$lambda$lambda_0;
        $composer_0.o13(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp_3 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-73590663, true, AddonDetailPage$lambda$lambda$lambda$lambda$lambda_1($addon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.n13();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().p12_1) {
        var value_1 = ComposableLambda$invoke$ref_155(dispatchReceiver);
        $composer_1.o13(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      H1(tmp_3, tmp0, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_2 = $composer_0.n13();
      var tmp_6;
      if (false || it_2 === Companion_getInstance().p12_1) {
        var value_2 = AddonDetailPage$lambda$lambda$lambda$lambda$lambda_2;
        $composer_0.o13(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp_8 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(2094992088, true, AddonDetailPage$lambda$lambda$lambda$lambda$lambda_3($addon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.p13(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_3 = $composer_2.n13();
      var tmp_9;
      if (invalid_0 || it_3 === Companion_getInstance().p12_1) {
        var value_3 = ComposableLambda$invoke$ref_156(dispatchReceiver_0);
        $composer_2.o13(value_3);
        tmp_9 = value_3;
      } else {
        tmp_9 = it_3;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      P(tmp_8, tmp0_0, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_4 = $composer_0.n13();
      var tmp_11;
      if (false || it_4 === Companion_getInstance().p12_1) {
        var value_4 = AddonDetailPage$lambda$lambda$lambda$lambda$lambda_4;
        $composer_0.o13(value_4);
        tmp_11 = value_4;
      } else {
        tmp_11 = it_4;
      }
      var tmp_12 = tmp_11;
      var tmp_13 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver_1 = rememberComposableLambda(-282145984, true, AddonDetailPage$lambda$lambda$lambda$lambda$lambda_5($addon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.p13(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      var it_5 = $composer_3.n13();
      var tmp_14;
      if (invalid_1 || it_5 === Companion_getInstance().p12_1) {
        var value_5 = ComposableLambda$invoke$ref_157(dispatchReceiver_1);
        $composer_3.o13(value_5);
        tmp_14 = value_5;
      } else {
        tmp_14 = it_5;
      }
      var tmp_15 = tmp_14;
      var tmp0_1 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Div(tmp_13, tmp0_1, $composer_0, 54, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_158(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda_1($this$Section) {
    $this$Section.a2m(['addon-meta-grid']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda_6($this$Div) {
    $this$Div.a2m(['panel', 'addon-meta-card', 'fade-in']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_2($this$H2) {
    $this$H2.a2m(['panel-title']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_3($this$Ul) {
    $this$Ul.a2m(['addon-list']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda($version) {
    return function ($this$Li, $composer, $changed) {
      var $composer_0 = $composer;
      Text($version, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_159(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_4($addon) {
    return function ($this$Ul, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $addon.i3v_1.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1848184809, true, AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.p13(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.n13();
        var tmp;
        if (invalid || it === Companion_getInstance().p12_1) {
          var value = ComposableLambda$invoke$ref_159(dispatchReceiver);
          $composer_1.o13(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Li(null, tmp0, $composer_0, 48, 1);
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_160(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda_7($addon) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_2;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      H2(tmp$ret$3, ComposableSingletons$AddonDetailPageKt_getInstance().f3x_1, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.n13();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().p12_1) {
        var value_0 = AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_3;
        $composer_0.o13(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp_3 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1564477448, true, AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_4($addon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.n13();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().p12_1) {
        var value_1 = ComposableLambda$invoke$ref_160(dispatchReceiver);
        $composer_1.o13(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Ul(tmp_3, tmp0, $composer_0, 54, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_161(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda_8($this$Div) {
    $this$Div.a2m(['panel', 'addon-meta-card', 'fade-in']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_5($this$H2) {
    $this$H2.a2m(['panel-title']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_6($this$P) {
    $this$P.a2m(['helper']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_7($this$Ul) {
    $this$Ul.a2m(['addon-list']);
    return Unit_instance;
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($dependency) {
    return function ($this$Li, $composer, $changed) {
      var $composer_0 = $composer;
      Text($dependency, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_162(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_8($addon) {
    return function ($this$Ul, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $addon.j3v_1.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(624341760, true, AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(element), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.p13(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.n13();
        var tmp;
        if (invalid || it === Companion_getInstance().p12_1) {
          var value = ComposableLambda$invoke$ref_162(dispatchReceiver);
          $composer_1.o13(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Li(null, tmp0, $composer_0, 48, 1);
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_163(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda$lambda_9($addon) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_5;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      H2(tmp$ret$3, ComposableSingletons$AddonDetailPageKt_getInstance().g3x_1, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.n13();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().p12_1) {
        var value_0 = AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_6;
        $composer_0.o13(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      P(tmp$ret$7, ComposableSingletons$AddonDetailPageKt_getInstance().h3x_1, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.n13();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().p12_1) {
        var value_1 = AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_7;
        $composer_0.o13(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp_5 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1610791263, true, AddonDetailPage$lambda$lambda$lambda$lambda$lambda$lambda_8($addon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_1.n13();
      var tmp_6;
      if (invalid || it_2 === Companion_getInstance().p12_1) {
        var value_2 = ComposableLambda$invoke$ref_163(dispatchReceiver);
        $composer_1.o13(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Ul(tmp_5, tmp0, $composer_0, 54, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_164(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AddonDetailPage$lambda$lambda$lambda$lambda_2($addon) {
    return function ($this$Section, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = AddonDetailPage$lambda$lambda$lambda$lambda$lambda_6;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1986238717, true, AddonDetailPage$lambda$lambda$lambda$lambda$lambda_7($addon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_161(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_1, tmp0, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.n13();
      var tmp_4;
      if (false || it_1 === Companion_getInstance().p12_1) {
        var value_1 = AddonDetailPage$lambda$lambda$lambda$lambda$lambda_8;
        $composer_0.o13(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp_6 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(1098522348, true, AddonDetailPage$lambda$lambda$lambda$lambda$lambda_9($addon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.p13(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_2.n13();
      var tmp_7;
      if (invalid_0 || it_2 === Companion_getInstance().p12_1) {
        var value_2 = ComposableLambda$invoke$ref_164(dispatchReceiver_0);
        $composer_2.o13(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp_6, tmp0_0, $composer_0, 54, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_165(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AddonDetailPage$lambda$lambda$lambda_0($addon) {
    return function ($this$Section, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = AddonDetailPage$lambda$lambda$lambda$lambda;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-239812554, true, AddonDetailPage$lambda$lambda$lambda$lambda_0($addon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_158(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_1, tmp0, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.n13();
      var tmp_4;
      if (false || it_1 === Companion_getInstance().p12_1) {
        var value_1 = AddonDetailPage$lambda$lambda$lambda$lambda_1;
        $composer_0.o13(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp_6 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(-177166110, true, AddonDetailPage$lambda$lambda$lambda$lambda_2($addon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.p13(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_2.n13();
      var tmp_7;
      if (invalid_0 || it_2 === Companion_getInstance().p12_1) {
        var value_2 = ComposableLambda$invoke$ref_165(dispatchReceiver_0);
        $composer_2.o13(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Section(tmp_6, tmp0_0, $composer_0, 54, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_166(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AddonDetailPage$lambda$lambda_0($addon) {
    return function ($this$Main, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = AddonDetailPage$lambda$lambda$lambda;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(267120469, true, AddonDetailPage$lambda$lambda$lambda_0($addon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_166(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Section(tmp_1, tmp0, $composer_0, 54, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_167(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AddonDetailPage$lambda($addon) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.n13();
        var tmp_0;
        if (false || it === Companion_getInstance().p12_1) {
          var value = AddonDetailPage$lambda$lambda;
          $composer_0.o13(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp_2 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-374138360, true, AddonDetailPage$lambda$lambda_0($addon), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.p13(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.n13();
        var tmp_3;
        if (invalid || it_0 === Companion_getInstance().p12_1) {
          var value_0 = ComposableLambda$invoke$ref_167(dispatchReceiver);
          $composer_1.o13(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Main(tmp_2, tmp0, $composer_0, 54, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.h13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_168(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function AddonDetailPage$lambda_0($addon, $$changed) {
    return function ($composer, $force) {
      AddonDetailPage($addon, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AddonsPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1600189146);
    if ($composer_0.u13(!($changed === 0), $changed & 1)) {
      SiteScaffold('addons', 'Community Addons', ComposableSingletons$IndexKt_getInstance_0().q3x_1, $composer_0, 438, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(AddonsPage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_169(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$434367069$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Addons', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_170(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_843370113$lambda_pldfhx($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Addons', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_171(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_80001796$lambda_7nveyg($this$Article, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$_80001796$lambda$lambda_6noxp9;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$IndexKt_getInstance_0().i3x_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.n13();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().p12_1) {
      var value_0 = ComposableSingletons$IndexKt$lambda$_80001796$lambda$lambda_6noxp9_0;
      $composer_0.o13(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    H1(tmp$ret$7, ComposableSingletons$IndexKt_getInstance_0().j3x_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$_80001796$lambda$lambda_6noxp9($this$Div) {
    $this$Div.a2m(['kicker']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$_80001796$lambda$lambda_6noxp9_0($this$H1) {
    $this$H1.a2m(['workspace-title']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_172(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$2145552729$lambda($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Open addon page', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_173(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_1605550832$lambda_lj835a($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Download', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_174(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$822721965$lambda($this$Section, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_addonSummaries().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(351444332, true, ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda_0(element), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_178(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Article(tmp_1, tmp0, $composer_0, 54, 0);
    }
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda($this$Article) {
    $this$Article.a2m(['panel', 'addon-result-card', 'fade-in']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda($this$H2) {
    $this$H2.a2m(['card-title']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda_0($addon) {
    return function ($this$H2, $composer, $changed) {
      var $composer_0 = $composer;
      Text($addon.a3v_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_175(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda_1($this$P) {
    $this$P.a2m(['helper']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda_2($addon) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($addon.b3v_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_176(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda_3($this$Div) {
    $this$Div.a2m(['search-row']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda$lambda($this$A) {
    $this$A.a2m(['btn']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda$lambda_0($this$A) {
    $this$A.a2m(['btn', 'primary']);
    $this$A.x2l('target', '_blank');
    $this$A.x2l('rel', 'noopener noreferrer');
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda_4($addon) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = '/addons/' + $addon.z3u_1;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp_0;
      if (false || it === Companion_getInstance().p12_1) {
        var value = ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda$lambda;
        $composer_0.o13(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp$ret$3 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      A(tmp, tmp$ret$3, ComposableSingletons$IndexKt_getInstance_0().l3x_1, $composer_0, 432, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.n13();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda$lambda_0;
        $composer_0.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp$ret$7 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      A($addon.c3v_1, tmp$ret$7, ComposableSingletons$IndexKt_getInstance_0().m3x_1, $composer_0, 432, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_177(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda_0($addon) {
    return function ($this$Article, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-209408630, true, ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda_0($addon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_175(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      H2(tmp_1, tmp0, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.n13();
      var tmp_4;
      if (false || it_1 === Companion_getInstance().p12_1) {
        var value_1 = ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda_1;
        $composer_0.o13(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp_6 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(89570314, true, ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda_2($addon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.p13(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_2.n13();
      var tmp_7;
      if (invalid_0 || it_2 === Companion_getInstance().p12_1) {
        var value_2 = ComposableLambda$invoke$ref_176(dispatchReceiver_0);
        $composer_2.o13(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      P(tmp_6, tmp0_0, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_3 = $composer_0.n13();
      var tmp_9;
      if (false || it_3 === Companion_getInstance().p12_1) {
        var value_3 = ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda_3;
        $composer_0.o13(value_3);
        tmp_9 = value_3;
      } else {
        tmp_9 = it_3;
      }
      var tmp_10 = tmp_9;
      var tmp_11 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver_1 = rememberComposableLambda(-2050405013, true, ComposableSingletons$IndexKt$lambda$822721965$lambda$lambda$lambda_4($addon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.p13(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      var it_4 = $composer_3.n13();
      var tmp_12;
      if (invalid_1 || it_4 === Companion_getInstance().p12_1) {
        var value_4 = ComposableLambda$invoke$ref_177(dispatchReceiver_1);
        $composer_3.o13(value_4);
        tmp_12 = value_4;
      } else {
        tmp_12 = it_4;
      }
      var tmp_13 = tmp_12;
      var tmp0_1 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Div(tmp_11, tmp0_1, $composer_0, 54, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_178(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_179(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$682274272$lambda($this$Section, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$682274272$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Article(tmp$ret$3, ComposableSingletons$IndexKt_getInstance_0().k3x_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.n13();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().p12_1) {
      var value_0 = ComposableSingletons$IndexKt$lambda$682274272$lambda$lambda_0;
      $composer_0.o13(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    Section(tmp$ret$7, ComposableSingletons$IndexKt_getInstance_0().n3x_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$682274272$lambda$lambda($this$Article) {
    $this$Article.a2m(['panel', 'addons-header']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$682274272$lambda$lambda_0($this$Section) {
    $this$Section.a2m(['addons-results']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_180(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$462180947$lambda($this$Main, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$462180947$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Section(tmp$ret$3, ComposableSingletons$IndexKt_getInstance_0().o3x_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$462180947$lambda$lambda($this$Section) {
    $this$Section.a2m(['container', 'addons-shell']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_181(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_1895224762$lambda_b6edgf($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = ComposableSingletons$IndexKt$lambda$_1895224762$lambda$lambda_t9y4k6;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      Main(tmp$ret$3, ComposableSingletons$IndexKt_getInstance_0().p3x_1, $composer_0, 54, 0);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$_1895224762$lambda$lambda_t9y4k6($this$Main) {
    $this$Main.a2m(['page']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt_0() {
    ComposableSingletons$IndexKt_instance_0 = this;
    var tmp = this;
    tmp.i3x_1 = ComposableLambda$invoke$ref_169(composableLambdaInstance(434367069, false, ComposableSingletons$IndexKt$lambda$434367069$lambda));
    var tmp_0 = this;
    tmp_0.j3x_1 = ComposableLambda$invoke$ref_170(composableLambdaInstance(-843370113, false, ComposableSingletons$IndexKt$lambda$_843370113$lambda_pldfhx));
    var tmp_1 = this;
    tmp_1.k3x_1 = ComposableLambda$invoke$ref_171(composableLambdaInstance(-80001796, false, ComposableSingletons$IndexKt$lambda$_80001796$lambda_7nveyg));
    var tmp_2 = this;
    tmp_2.l3x_1 = ComposableLambda$invoke$ref_172(composableLambdaInstance(2145552729, false, ComposableSingletons$IndexKt$lambda$2145552729$lambda));
    var tmp_3 = this;
    tmp_3.m3x_1 = ComposableLambda$invoke$ref_173(composableLambdaInstance(-1605550832, false, ComposableSingletons$IndexKt$lambda$_1605550832$lambda_lj835a));
    var tmp_4 = this;
    tmp_4.n3x_1 = ComposableLambda$invoke$ref_174(composableLambdaInstance(822721965, false, ComposableSingletons$IndexKt$lambda$822721965$lambda));
    var tmp_5 = this;
    tmp_5.o3x_1 = ComposableLambda$invoke$ref_179(composableLambdaInstance(682274272, false, ComposableSingletons$IndexKt$lambda$682274272$lambda));
    var tmp_6 = this;
    tmp_6.p3x_1 = ComposableLambda$invoke$ref_180(composableLambdaInstance(462180947, false, ComposableSingletons$IndexKt$lambda$462180947$lambda));
    var tmp_7 = this;
    tmp_7.q3x_1 = ComposableLambda$invoke$ref_181(composableLambdaInstance(-1895224762, false, ComposableSingletons$IndexKt$lambda$_1895224762$lambda_b6edgf));
  }
  var ComposableSingletons$IndexKt_instance_0;
  function ComposableSingletons$IndexKt_getInstance_0() {
    if (ComposableSingletons$IndexKt_instance_0 == null)
      new ComposableSingletons$IndexKt_0();
    return ComposableSingletons$IndexKt_instance_0;
  }
  function AddonsPage$lambda($$changed) {
    return function ($composer, $force) {
      AddonsPage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DocsPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(782068794);
    if ($composer_0.u13(!($changed === 0), $changed & 1)) {
      SiteScaffold('', null, ComposableSingletons$IndexKt_getInstance_1().x3x_1, $composer_0, 390, 2);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(DocsPage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_182(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$1829349893$lambda($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Not made yet bro :/', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_183(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$144815844$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('we gotta use some starlight shit', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_184(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_2034953918$lambda_sjvcyt($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    H1(null, ComposableSingletons$IndexKt_getInstance_1().r3x_1, $composer_0, 48, 1);
    P(null, ComposableSingletons$IndexKt_getInstance_1().s3x_1, $composer_0, 48, 1);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_185(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_16483615$lambda_9j0a31($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$_16483615$lambda$lambda_rpbz4o;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$IndexKt_getInstance_1().t3x_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$_16483615$lambda$lambda_rpbz4o($this$Div) {
    $this$Div.a2m(['panel', 'fade-in']);
    $this$Div.y2l(ComposableSingletons$IndexKt$lambda$_16483615$lambda$lambda$lambda_fnmwr7);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$_16483615$lambda$lambda$lambda_fnmwr7($this$style) {
    padding_1($this$style, [get_cssRem(3)]);
    textAlign_0($this$style, 'center');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_186(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$760846912$lambda($this$Section, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$760846912$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$IndexKt_getInstance_1().u3x_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$760846912$lambda$lambda($this$Div) {
    $this$Div.a2m(['container']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_187(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$1254977587$lambda($this$Main, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$1254977587$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Section(tmp$ret$3, ComposableSingletons$IndexKt_getInstance_1().v3x_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$1254977587$lambda$lambda($this$Section) {
    $this$Section.a2m(['page']);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_188(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$562182566$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
      Main(null, ComposableSingletons$IndexKt_getInstance_1().w3x_1, $composer_0, 48, 1);
    } else {
      $composer_0.h13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt_1() {
    ComposableSingletons$IndexKt_instance_1 = this;
    var tmp = this;
    tmp.r3x_1 = ComposableLambda$invoke$ref_182(composableLambdaInstance(1829349893, false, ComposableSingletons$IndexKt$lambda$1829349893$lambda));
    var tmp_0 = this;
    tmp_0.s3x_1 = ComposableLambda$invoke$ref_183(composableLambdaInstance(144815844, false, ComposableSingletons$IndexKt$lambda$144815844$lambda));
    var tmp_1 = this;
    tmp_1.t3x_1 = ComposableLambda$invoke$ref_184(composableLambdaInstance(-2034953918, false, ComposableSingletons$IndexKt$lambda$_2034953918$lambda_sjvcyt));
    var tmp_2 = this;
    tmp_2.u3x_1 = ComposableLambda$invoke$ref_185(composableLambdaInstance(-16483615, false, ComposableSingletons$IndexKt$lambda$_16483615$lambda_9j0a31));
    var tmp_3 = this;
    tmp_3.v3x_1 = ComposableLambda$invoke$ref_186(composableLambdaInstance(760846912, false, ComposableSingletons$IndexKt$lambda$760846912$lambda));
    var tmp_4 = this;
    tmp_4.w3x_1 = ComposableLambda$invoke$ref_187(composableLambdaInstance(1254977587, false, ComposableSingletons$IndexKt$lambda$1254977587$lambda));
    var tmp_5 = this;
    tmp_5.x3x_1 = ComposableLambda$invoke$ref_188(composableLambdaInstance(562182566, false, ComposableSingletons$IndexKt$lambda$562182566$lambda));
  }
  var ComposableSingletons$IndexKt_instance_1;
  function ComposableSingletons$IndexKt_getInstance_1() {
    if (ComposableSingletons$IndexKt_instance_1 == null)
      new ComposableSingletons$IndexKt_1();
    return ComposableSingletons$IndexKt_instance_1;
  }
  function DocsPage$lambda($$changed) {
    return function ($composer, $force) {
      DocsPage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ScriptsPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(987103016);
    if ($composer_0.u13(!($changed === 0), $changed & 1)) {
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = mutableStateOf(null);
        this_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var copiedId$delegate = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(558762900, true, ScriptsPage$lambda_1(copiedId$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_201(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SiteScaffold('scripts', 'Community Scripts', tmp0, $composer_0, 438, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(ScriptsPage$lambda_2($changed));
    }
  }
  function ComposableLambda$invoke$ref_189(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$1618551275$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Scripts', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_190(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$2073766029$lambda($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Scripts', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_191(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$1231311050$lambda($this$Article, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = ComposableSingletons$IndexKt$lambda$1231311050$lambda$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Div(tmp$ret$3, ComposableSingletons$IndexKt_getInstance_2().y3x_1, $composer_0, 54, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.n13();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().p12_1) {
      var value_0 = ComposableSingletons$IndexKt$lambda$1231311050$lambda$lambda_0;
      $composer_0.o13(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    H1(tmp$ret$7, ComposableSingletons$IndexKt_getInstance_2().z3x_1, $composer_0, 54, 0);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$1231311050$lambda$lambda($this$Div) {
    $this$Div.a2m(['kicker']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt$lambda$1231311050$lambda$lambda_0($this$H1) {
    $this$H1.a2m(['workspace-title']);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt_2() {
    ComposableSingletons$IndexKt_instance_2 = this;
    var tmp = this;
    tmp.y3x_1 = ComposableLambda$invoke$ref_189(composableLambdaInstance(1618551275, false, ComposableSingletons$IndexKt$lambda$1618551275$lambda));
    var tmp_0 = this;
    tmp_0.z3x_1 = ComposableLambda$invoke$ref_190(composableLambdaInstance(2073766029, false, ComposableSingletons$IndexKt$lambda$2073766029$lambda));
    var tmp_1 = this;
    tmp_1.a3y_1 = ComposableLambda$invoke$ref_191(composableLambdaInstance(1231311050, false, ComposableSingletons$IndexKt$lambda$1231311050$lambda));
  }
  var ComposableSingletons$IndexKt_instance_2;
  function ComposableSingletons$IndexKt_getInstance_2() {
    if (ComposableSingletons$IndexKt_instance_2 == null)
      new ComposableSingletons$IndexKt_2();
    return ComposableSingletons$IndexKt_instance_2;
  }
  function ScriptsPage$lambda($copiedId$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('copiedId', KMutableProperty0, true);
    return $copiedId$delegate.t1();
  }
  function ScriptsPage$lambda_0($copiedId$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('copiedId', KMutableProperty0, true);
    $copiedId$delegate.oy(_set____db54di);
    return Unit_instance;
  }
  function ScriptsPage$lambda$lambda($this$Main) {
    $this$Main.a2m(['page']);
    return Unit_instance;
  }
  function ScriptsPage$lambda$lambda$lambda($this$Section) {
    $this$Section.a2m(['container', 'addons-shell']);
    return Unit_instance;
  }
  function ScriptsPage$lambda$lambda$lambda$lambda($this$Article) {
    $this$Article.a2m(['panel', 'addons-header']);
    return Unit_instance;
  }
  function ScriptsPage$lambda$lambda$lambda$lambda_0($this$Section) {
    $this$Section.a2m(['addons-results']);
    return Unit_instance;
  }
  function ScriptsPage$lambda$lambda$lambda$lambda$lambda($this$Article) {
    $this$Article.a2m(['panel', 'addon-result-card', 'fade-in']);
    return Unit_instance;
  }
  function ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda($this$H2) {
    $this$H2.a2m(['card-title']);
    return Unit_instance;
  }
  function ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda_0($snippet) {
    return function ($this$H2, $composer, $changed) {
      var $composer_0 = $composer;
      Text($snippet.l3v_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_192(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda_1($this$P) {
    $this$P.a2m(['helper']);
    return Unit_instance;
  }
  function ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda_2($snippet) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($snippet.m3v_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_193(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda_3($this$Pre) {
    $this$Pre.a2m(['code-block']);
    return Unit_instance;
  }
  function ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda_4($snippet) {
    return function ($this$Pre, $composer, $changed) {
      var $composer_0 = $composer;
      Text($snippet.n3v_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_194(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda_5($this$Div) {
    $this$Div.a2m(['search-row']);
    return Unit_instance;
  }
  function ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($copiedId$delegate) {
    return function () {
      ScriptsPage$lambda_0($copiedId$delegate, null);
      return Unit_instance;
    };
  }
  function ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($snippet, $copiedId$delegate) {
    return function (it) {
      window.navigator.clipboard.writeText($snippet.n3v_1);
      ScriptsPage$lambda_0($copiedId$delegate, $snippet.k3v_1);
      var tmp = window;
      tmp.setTimeout(ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($copiedId$delegate), 1100);
      return Unit_instance;
    };
  }
  function ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda($snippet, $copiedId$delegate) {
    return function ($this$Button) {
      $this$Button.a2m(['btn', 'primary']);
      $this$Button.f2m(ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($snippet, $copiedId$delegate));
      return Unit_instance;
    };
  }
  function ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($snippet, $copiedId$delegate) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      Text(ScriptsPage$lambda($copiedId$delegate) === $snippet.k3v_1 ? 'Copied' : 'Copy', $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_195(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda_6($snippet, $copiedId$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.p13($snippet);
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda($snippet, $copiedId$delegate);
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(333145623, true, ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($snippet, $copiedId$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_195(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp_1, tmp0, $composer_0, 48, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_196(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ScriptsPage$lambda$lambda$lambda$lambda$lambda_0($snippet, $copiedId$delegate) {
    return function ($this$Article, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1729854174, true, ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda_0($snippet), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_192(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      H2(tmp_1, tmp0, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.n13();
      var tmp_4;
      if (false || it_1 === Companion_getInstance().p12_1) {
        var value_1 = ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda_1;
        $composer_0.o13(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp_6 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(849402974, true, ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda_2($snippet), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.p13(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_2.n13();
      var tmp_7;
      if (invalid_0 || it_2 === Companion_getInstance().p12_1) {
        var value_2 = ComposableLambda$invoke$ref_193(dispatchReceiver_0);
        $composer_2.o13(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      P(tmp_6, tmp0_0, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_3 = $composer_0.n13();
      var tmp_9;
      if (false || it_3 === Companion_getInstance().p12_1) {
        var value_3 = ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda_3;
        $composer_0.o13(value_3);
        tmp_9 = value_3;
      } else {
        tmp_9 = it_3;
      }
      var tmp_10 = tmp_9;
      var tmp_11 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver_1 = rememberComposableLambda(-1658655989, true, ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda_4($snippet), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.p13(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      var it_4 = $composer_3.n13();
      var tmp_12;
      if (invalid_1 || it_4 === Companion_getInstance().p12_1) {
        var value_4 = ComposableLambda$invoke$ref_194(dispatchReceiver_1);
        $composer_3.o13(value_4);
        tmp_12 = value_4;
      } else {
        tmp_12 = it_4;
      }
      var tmp_13 = tmp_12;
      var tmp0_1 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      sourceInformationMarkerEnd($composer_3);
      Pre(tmp_11, tmp0_1, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_5 = $composer_0.n13();
      var tmp_14;
      if (false || it_5 === Companion_getInstance().p12_1) {
        var value_5 = ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda_5;
        $composer_0.o13(value_5);
        tmp_14 = value_5;
      } else {
        tmp_14 = it_5;
      }
      var tmp_15 = tmp_14;
      var tmp_16 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver_2 = rememberComposableLambda(-955989155, true, ScriptsPage$lambda$lambda$lambda$lambda$lambda$lambda_6($snippet, $copiedId$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_4 = $composer_0;
      sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = $composer_4.p13(dispatchReceiver_2);
      // Inline function 'kotlin.let' call
      var it_6 = $composer_4.n13();
      var tmp_17;
      if (invalid_2 || it_6 === Companion_getInstance().p12_1) {
        var value_6 = ComposableLambda$invoke$ref_196(dispatchReceiver_2);
        $composer_4.o13(value_6);
        tmp_17 = value_6;
      } else {
        tmp_17 = it_6;
      }
      var tmp_18 = tmp_17;
      var tmp0_2 = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      sourceInformationMarkerEnd($composer_4);
      Div(tmp_16, tmp0_2, $composer_0, 54, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_197(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ScriptsPage$lambda$lambda$lambda$lambda_1($copiedId$delegate) {
    return function ($this$Section, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = get_scriptSnippets().i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.n13();
        var tmp;
        if (false || it === Companion_getInstance().p12_1) {
          var value = ScriptsPage$lambda$lambda$lambda$lambda$lambda;
          $composer_0.o13(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1617303620, true, ScriptsPage$lambda$lambda$lambda$lambda$lambda_0(element, $copiedId$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.p13(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.n13();
        var tmp_2;
        if (invalid || it_0 === Companion_getInstance().p12_1) {
          var value_0 = ComposableLambda$invoke$ref_197(dispatchReceiver);
          $composer_1.o13(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Article(tmp_1, tmp0, $composer_0, 54, 0);
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_198(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ScriptsPage$lambda$lambda$lambda_0($copiedId$delegate) {
    return function ($this$Section, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = ScriptsPage$lambda$lambda$lambda$lambda;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      Article(tmp$ret$3, ComposableSingletons$IndexKt_getInstance_2().a3y_1, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.n13();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ScriptsPage$lambda$lambda$lambda$lambda_0;
        $composer_0.o13(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp_3 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1165451579, true, ScriptsPage$lambda$lambda$lambda$lambda_1($copiedId$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.n13();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().p12_1) {
        var value_1 = ComposableLambda$invoke$ref_198(dispatchReceiver);
        $composer_1.o13(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Section(tmp_3, tmp0, $composer_0, 54, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_199(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ScriptsPage$lambda$lambda_0($copiedId$delegate) {
    return function ($this$Main, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = ScriptsPage$lambda$lambda$lambda;
        $composer_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-660795218, true, ScriptsPage$lambda$lambda$lambda_0($copiedId$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref_199(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Section(tmp_1, tmp0, $composer_0, 54, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_200(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ScriptsPage$lambda_1($copiedId$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.u13(!(($changed & 3) === 2), $changed & 1)) {
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.n13();
        var tmp_0;
        if (false || it === Companion_getInstance().p12_1) {
          var value = ScriptsPage$lambda$lambda;
          $composer_0.o13(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp_2 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1717083039, true, ScriptsPage$lambda$lambda_0($copiedId$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.p13(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.n13();
        var tmp_3;
        if (invalid || it_0 === Companion_getInstance().p12_1) {
          var value_0 = ComposableLambda$invoke$ref_200(dispatchReceiver);
          $composer_1.o13(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Main(tmp_2, tmp0, $composer_0, 54, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.h13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_201(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.s1h(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ScriptsPage$lambda_2($$changed) {
    return function ($composer, $force) {
      ScriptsPage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  //region block: init
  listenersRegistered = false;
  org_example_app_SitePalette_Brand$stable = 8;
  org_example_app_SitePalette$stable = 8;
  org_example_app_SitePalettes$stable = 8;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=app.js.map
