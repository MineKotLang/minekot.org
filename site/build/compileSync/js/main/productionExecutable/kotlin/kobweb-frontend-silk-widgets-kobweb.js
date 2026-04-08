(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-compose-html-ext.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-silk-foundation.js', './androidx-compose-runtime-runtime.js', './kobweb-frontend-kobweb-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./androidx-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-core.js'));
  else {
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    globalThis['kobweb-frontend-silk-widgets-kobweb'] = factory(typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['html-html-core'], globalThis['kobweb-frontend-silk-foundation'], globalThis['androidx-compose-runtime-runtime'], globalThis['kobweb-frontend-kobweb-core']);
  }
}(function (_, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_androidx_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_core) {
  'use strict';
  //region block: imports
  var get_BorderColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var KProperty1 = kotlin_kotlin.$_$.l8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.f7;
  var protoOf = kotlin_kotlin.$_$.y7;
  var initMetadataForObject = kotlin_kotlin.$_$.n7;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var listStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Companion_instance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b2;
  var VOID = kotlin_kotlin.$_$.c;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f3;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.sa;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var Anchor = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var get_link = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var get_visited = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m3;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var get_cssClass = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var KMutableProperty1 = kotlin_kotlin.$_$.j8;
  var initMetadataForClass = kotlin_kotlin.$_$.i7;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(TocVars, 'TocVars');
  initMetadataForObject(LinkVars, 'LinkVars');
  initMetadataForClass(MutableLink, 'MutableLink', VOID, ColorGroup);
  //endregion
  function get_TocStyle() {
    _init_properties_Toc_kt__9n5312();
    return TocStyle;
  }
  var TocStyle;
  function get_TocBorderedVariant() {
    _init_properties_Toc_kt__9n5312();
    return TocBorderedVariant;
  }
  var TocBorderedVariant;
  var com_varabyte_kobweb_silk_components_document_TocVars$stable;
  function TocVars$_get_BorderColor_$ref_d3lohz() {
    return function (p0) {
      return p0.z3f();
    };
  }
  function TocVars() {
    TocVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().o2x();
    tmp.w3q_1 = StyleVariable(tmp0_defaultFallback, 'silk');
  }
  protoOf(TocVars).z3f = function () {
    var tmp = KProperty1;
    return this.w3q_1.u2x(this, getPropertyCallableRef('BorderColor', 1, tmp, TocVars$_get_BorderColor_$ref_d3lohz(), null));
  };
  var TocVars_instance;
  function TocVars_getInstance() {
    if (TocVars_instance == null)
      new TocVars();
    return TocVars_instance;
  }
  function TocStyle$lambda($this$base) {
    _init_properties_Toc_kt__9n5312();
    return padding(textAlign(listStyle(Companion_instance, Companion_instance_0.n2v()), Companion_instance_1.x2u()), get_cssRem(0));
  }
  function TocBorderedVariant$lambda($this$addVariantBase) {
    _init_properties_Toc_kt__9n5312();
    var tmp = borderRadius(Companion_instance, get_px(5));
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding(border(tmp, tmp_0, 'solid', TocVars_getInstance().z3f().o2x()), get_cssRem(1));
  }
  var properties_initialized_Toc_kt_t9o4p4;
  function _init_properties_Toc_kt__9n5312() {
    if (!properties_initialized_Toc_kt_t9o4p4) {
      properties_initialized_Toc_kt_t9o4p4 = true;
      var tmp = Companion_instance_3;
      TocStyle = base(tmp, VOID, TocStyle$lambda);
      var tmp_0 = get_TocStyle();
      TocBorderedVariant = addVariantBase(tmp_0, VOID, TocBorderedVariant$lambda);
      com_varabyte_kobweb_silk_components_document_TocVars$stable = 8;
    }
  }
  function get_ImageStyle() {
    _init_properties_Image_kt__h9v8mh();
    return ImageStyle;
  }
  var ImageStyle;
  function get_FitWidthImageVariant() {
    _init_properties_Image_kt__h9v8mh();
    return FitWidthImageVariant;
  }
  var FitWidthImageVariant;
  function ImageStyle$lambda($this$CssStyle) {
    _init_properties_Image_kt__h9v8mh();
    return Unit_instance;
  }
  function FitWidthImageVariant$lambda($this$addVariantBase) {
    _init_properties_Image_kt__h9v8mh();
    return objectFit(width(Companion_instance, get_percent(100)), Companion_instance_4.w2w());
  }
  var properties_initialized_Image_kt_7kjzpx;
  function _init_properties_Image_kt__h9v8mh() {
    if (!properties_initialized_Image_kt_7kjzpx) {
      properties_initialized_Image_kt_7kjzpx = true;
      ImageStyle = CssStyle(VOID, ImageStyle$lambda);
      var tmp = get_ImageStyle();
      FitWidthImageVariant = addVariantBase(tmp, VOID, FitWidthImageVariant$lambda);
    }
  }
  function get_LinkStyle() {
    _init_properties_Link_kt__dm1ox2();
    return LinkStyle;
  }
  var LinkStyle;
  function get_UndecoratedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UndecoratedLinkVariant;
  }
  var UndecoratedLinkVariant;
  function get_UncoloredLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UncoloredLinkVariant;
  }
  var UncoloredLinkVariant;
  function get_AlwaysUnderlinedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return AlwaysUnderlinedLinkVariant;
  }
  var AlwaysUnderlinedLinkVariant;
  var com_varabyte_kobweb_silk_components_navigation_LinkVars$stable;
  function LinkVars$_get_DefaultColor_$ref_plujau() {
    return function (p0) {
      return p0.z3q();
    };
  }
  function LinkVars$_get_VisitedColor_$ref_j60201() {
    return function (p0) {
      return p0.a3r();
    };
  }
  function LinkVars() {
    LinkVars_instance = this;
    this.x3q_1 = StyleVariable_0('silk');
    this.y3q_1 = StyleVariable_0('silk');
  }
  protoOf(LinkVars).z3q = function () {
    var tmp = KProperty1;
    return this.x3q_1.u2x(this, getPropertyCallableRef('DefaultColor', 1, tmp, LinkVars$_get_DefaultColor_$ref_plujau(), null));
  };
  protoOf(LinkVars).a3r = function () {
    var tmp = KProperty1;
    return this.y3q_1.u2x(this, getPropertyCallableRef('VisitedColor', 1, tmp, LinkVars$_get_VisitedColor_$ref_j60201(), null));
  };
  var LinkVars_instance;
  function LinkVars_getInstance() {
    if (LinkVars_instance == null)
      new LinkVars();
    return LinkVars_instance;
  }
  function Link(path, modifier, variant, openInternalLinksStrategy, openExternalLinksStrategy, updateHistoryMode, ref, content, $composer, $changed, $default) {
    _init_properties_Link_kt__dm1ox2();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var updateHistoryMode_0 = {_v: updateHistoryMode};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-253586851);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(path) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.p13(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.p13(variant_0._v) : $composer_0.s13(variant_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = openInternalLinksStrategy_0._v;
      if (tmp_0.r13(tmpEnum == null ? -1 : tmpEnum.l2_1)) {
        tmp = 2048;
      } else {
        tmp = 1024;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0) {
      var tmp_1;
      var tmp_2 = $composer_0;
      var tmpEnum_0 = openExternalLinksStrategy_0._v;
      if (tmp_2.r13(tmpEnum_0 == null ? -1 : tmpEnum_0.l2_1)) {
        tmp_1 = 16384;
      } else {
        tmp_1 = 8192;
      }
      $dirty = $dirty | tmp_1;
    }
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0) {
      var tmp_3;
      var tmp_4 = $composer_0;
      var tmpEnum_1 = updateHistoryMode_0._v;
      if (tmp_4.r13(tmpEnum_1 == null ? -1 : tmpEnum_1.l2_1)) {
        tmp_3 = 131072;
      } else {
        tmp_3 = 65536;
      }
      $dirty = $dirty | tmp_3;
    }
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ((($changed & 2097152) === 0 ? $composer_0.p13(ref_0._v) : $composer_0.s13(ref_0._v)) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.s13(content) ? 8388608 : 4194304);
    if ($composer_0.u13(!(($dirty & 4793491) === 4793490), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        updateHistoryMode_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        ref_0._v = null;
      }
      var tmp_5 = toAttrs(toModifier(get_LinkStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).w33(modifier_0._v));
      var tmp_6 = openInternalLinksStrategy_0._v;
      var tmp_7 = openExternalLinksStrategy_0._v;
      var tmp_8 = updateHistoryMode_0._v;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(682923050, true, Link$lambda(ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.n13();
      var tmp_9;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.o13(value);
        tmp_9 = value;
      } else {
        tmp_9 = it;
      }
      var tmp_10 = tmp_9;
      var tmp0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Anchor(path, tmp_5, tmp_6, tmp_7, tmp_8, tmp0, $composer_0, 196608 | 14 & $dirty | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Link$lambda_0(path, modifier_0, variant_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, updateHistoryMode_0, ref_0, content, $changed, $default));
    }
  }
  function LinkStyle$lambda($this$CssStyle) {
    _init_properties_Link_kt__dm1ox2();
    $this$CssStyle.c39(LinkStyle$lambda$lambda);
    var tmp = get_link($this$CssStyle);
    $this$CssStyle.f3b(tmp, LinkStyle$lambda$lambda_0);
    var tmp_0 = get_visited($this$CssStyle);
    $this$CssStyle.f3b(tmp_0, LinkStyle$lambda$lambda_1);
    var tmp_1 = get_hover($this$CssStyle);
    $this$CssStyle.f3b(tmp_1, LinkStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function LinkStyle$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_5.n2v());
  }
  function LinkStyle$lambda$lambda_0() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_instance, LinkVars_getInstance().z3q().o2x());
  }
  function LinkStyle$lambda$lambda_1() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_instance, LinkVars_getInstance().a3r().o2x());
  }
  function LinkStyle$lambda$lambda_2() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_5.x2x());
  }
  function UndecoratedLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var tmp = get_hover($this$addVariant);
    $this$addVariant.f3b(tmp, UndecoratedLinkVariant$lambda$lambda);
    return Unit_instance;
  }
  function UndecoratedLinkVariant$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_5.n2v());
  }
  function UncoloredLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var colorModifier = color(Companion_instance, get_ColorVar().o2x());
    var tmp = get_link($this$addVariant);
    $this$addVariant.f3b(tmp, UncoloredLinkVariant$lambda$lambda(colorModifier));
    var tmp_0 = get_visited($this$addVariant);
    $this$addVariant.f3b(tmp_0, UncoloredLinkVariant$lambda$lambda_0(colorModifier));
    return Unit_instance;
  }
  function UncoloredLinkVariant$lambda$lambda($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function UncoloredLinkVariant$lambda$lambda_0($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function AlwaysUnderlinedLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    $this$addVariant.c39(AlwaysUnderlinedLinkVariant$lambda$lambda);
    return Unit_instance;
  }
  function AlwaysUnderlinedLinkVariant$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_5.x2x());
  }
  function Link$lambda($ref, $content) {
    return function ($this$Anchor, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Anchor, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      $content($composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Link$lambda_0($path, $modifier, $variant, $openInternalLinksStrategy, $openExternalLinksStrategy, $updateHistoryMode, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Link($path, $modifier._v, $variant._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $updateHistoryMode._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Link_kt_5x6v44;
  function _init_properties_Link_kt__dm1ox2() {
    if (!properties_initialized_Link_kt_5x6v44) {
      properties_initialized_Link_kt_5x6v44 = true;
      LinkStyle = CssStyle(VOID, LinkStyle$lambda);
      var tmp = get_LinkStyle();
      UndecoratedLinkVariant = addVariant(tmp, VOID, UndecoratedLinkVariant$lambda);
      var tmp_0 = get_LinkStyle();
      UncoloredLinkVariant = addVariant(tmp_0, VOID, UncoloredLinkVariant$lambda);
      var tmp_1 = get_LinkStyle();
      AlwaysUnderlinedLinkVariant = addVariant(tmp_1, VOID, AlwaysUnderlinedLinkVariant$lambda);
      com_varabyte_kobweb_silk_components_navigation_LinkVars$stable = 8;
    }
  }
  function initSilkWidgetsKobweb(ctx) {
    var mutableTheme = ctx.n37_1;
    // Inline function 'kotlin.apply' call
    var this_0 = mutableTheme.e38_1;
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.e3e_1;
    get_link_0(this_1).e3p(Colors_instance.l35(), Colors_instance.z35());
    // Inline function 'kotlin.apply' call
    var this_2 = this_0.f3e_1;
    get_link_0(this_2).e3p(Colors_instance.o35(), Colors_instance.c36());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_entries().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp = '.' + get_cssClass(element);
      registerStyleBase(ctx.m37_1, tmp, initSilkWidgetsKobweb$lambda(element));
    }
    mutableTheme.g38('silk-image', get_ImageStyle());
    mutableTheme.s3c('-fit-width', get_FitWidthImageVariant());
    mutableTheme.g38('silk-link', get_LinkStyle());
    mutableTheme.s3c('-uncolored', get_UncoloredLinkVariant());
    mutableTheme.s3c('-undecorated', get_UndecoratedLinkVariant());
    mutableTheme.s3c('-always-underlined', get_AlwaysUnderlinedLinkVariant());
    mutableTheme.g38('silk-toc', get_TocStyle());
    mutableTheme.s3c('-bordered', get_TocBorderedVariant());
  }
  function initSilkWidgetsKobweb$lambda($colorMode) {
    return function () {
      var palette = toPalette($colorMode);
      return setVariable(setVariable(Companion_instance, LinkVars_getInstance().z3q(), get_link_1(palette).f3p()), LinkVars_getInstance().a3r(), get_link_1(palette).f3r());
    };
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups_MutableLink$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups$stable;
  function SilkWidgetKobwebColorGroups$MutableLink$_get_default_$ref_q6ezpd() {
    return function (p0) {
      return p0.f3p();
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_set_default_$ref_ekavxv() {
    return function (p0, p1) {
      p0.q3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_get_default_$ref_q6ezpd_0() {
    return function (p0) {
      return p0.f3p();
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_set_default_$ref_ekavxv_0() {
    return function (p0, p1) {
      p0.q3p(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_get_visited_$ref_txpy16() {
    return function (p0) {
      return p0.f3r();
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_set_visited_$ref_aszxm2() {
    return function (p0, p1) {
      p0.g3r(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_get_visited_$ref_txpy16_0() {
    return function (p0) {
      return p0.f3r();
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_set_visited_$ref_aszxm2_0() {
    return function (p0, p1) {
      p0.g3r(p1);
      return Unit_instance;
    };
  }
  function MutableLink(palette) {
    ColorGroup.call(this, palette, 'link');
    this.d3r_1 = this.q3e();
    this.e3r_1 = this.q3e();
  }
  protoOf(MutableLink).q3p = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetKobwebColorGroups$MutableLink$_get_default_$ref_q6ezpd_0();
    return this.d3r_1.n3e(this, getPropertyCallableRef('default', 1, tmp, tmp_0, SilkWidgetKobwebColorGroups$MutableLink$_set_default_$ref_ekavxv_0()), _set____db54di);
  };
  protoOf(MutableLink).f3p = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetKobwebColorGroups$MutableLink$_get_default_$ref_q6ezpd();
    return this.d3r_1.u2x(this, getPropertyCallableRef('default', 1, tmp, tmp_0, SilkWidgetKobwebColorGroups$MutableLink$_set_default_$ref_ekavxv()));
  };
  protoOf(MutableLink).g3r = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetKobwebColorGroups$MutableLink$_get_visited_$ref_txpy16_0();
    return this.e3r_1.n3e(this, getPropertyCallableRef('visited', 1, tmp, tmp_0, SilkWidgetKobwebColorGroups$MutableLink$_set_visited_$ref_aszxm2_0()), _set____db54di);
  };
  protoOf(MutableLink).f3r = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetKobwebColorGroups$MutableLink$_get_visited_$ref_txpy16();
    return this.e3r_1.u2x(this, getPropertyCallableRef('visited', 1, tmp, tmp_0, SilkWidgetKobwebColorGroups$MutableLink$_set_visited_$ref_aszxm2()));
  };
  protoOf(MutableLink).e3p = function (default_0, visited) {
    this.q3p(default_0);
    this.g3r(visited);
  };
  function get_link_0(_this__u8e3s4) {
    _init_properties_SilkWidgetKobwebColorGroups_kt__t3jte2();
    return new MutableLink(_this__u8e3s4);
  }
  function get_link_1(_this__u8e3s4) {
    _init_properties_SilkWidgetKobwebColorGroups_kt__t3jte2();
    return get_link_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  var properties_initialized_SilkWidgetKobwebColorGroups_kt_ed8ye0;
  function _init_properties_SilkWidgetKobwebColorGroups_kt__t3jte2() {
    if (!properties_initialized_SilkWidgetKobwebColorGroups_kt_ed8ye0) {
      properties_initialized_SilkWidgetKobwebColorGroups_kt_ed8ye0 = true;
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups_MutableLink$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups$stable = 0;
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Link;
  _.$_$.b = initSilkWidgetsKobweb;
  _.$_$.c = get_link_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets-kobweb.js.map
