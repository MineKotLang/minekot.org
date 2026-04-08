(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './kobweb-frontend-browser-ext.js', './androidx-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./androidx-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    globalThis['kobweb-frontend-compose-html-ext'] = factory(typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined' ? {} : globalThis['kobweb-frontend-compose-html-ext'], globalThis['kotlin-kotlin-stdlib'], globalThis['html-html-core'], globalThis['kobweb-frontend-browser-ext'], globalThis['androidx-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_androidx_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.y7;
  var objectCreate = kotlin_kotlin.$_$.x7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var equals = kotlin_kotlin.$_$.b7;
  var hashCode = kotlin_kotlin.$_$.h7;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var initMetadataForClass = kotlin_kotlin.$_$.i7;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j7;
  var Color_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var toString = kotlin_kotlin.$_$.z7;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.j3;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var joinToString = kotlin_kotlin.$_$.w3;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var getStringHashCode = kotlin_kotlin.$_$.g7;
  var copyToArray = kotlin_kotlin.$_$.i3;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var lastOrNull = kotlin_kotlin.$_$.a4;
  var get_lastIndex = kotlin_kotlin.$_$.z3;
  var joinToString_0 = kotlin_kotlin.$_$.v3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ab;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var listOf = kotlin_kotlin.$_$.d4;
  var emptyList = kotlin_kotlin.$_$.l3;
  var addAll = kotlin_kotlin.$_$.w2;
  var ensureNotNull = kotlin_kotlin.$_$.ya;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var StyleSheet_init_$Create$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var CSSGroupingRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var listOfNotNull = kotlin_kotlin.$_$.c4;
  var initMetadataForInterface = kotlin_kotlin.$_$.l7;
  var THROW_CCE = kotlin_kotlin.$_$.sa;
  var isNumber = kotlin_kotlin.$_$.r7;
  var getKClassFromExpression = kotlin_kotlin.$_$.g8;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.c;
  var removeSuffix = kotlin_kotlin.$_$.k9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var charSequenceLength = kotlin_kotlin.$_$.x6;
  var charSequenceGet = kotlin_kotlin.$_$.w6;
  var isWhitespace = kotlin_kotlin.$_$.h9;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.u;
  var initMetadataForObject = kotlin_kotlin.$_$.n7;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var DisposableEffect = kotlin_androidx_compose_runtime_runtime.$_$.g;
  var ElementBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var isInterface = kotlin_kotlin.$_$.q7;
  var TagElement = kotlin_org_jetbrains_compose_html_html_core.$_$.j4;
  var to = kotlin_kotlin.$_$.fb;
  var KProperty1 = kotlin_kotlin.$_$.l8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.f7;
  var lazy = kotlin_kotlin.$_$.za;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var asList = kotlin_kotlin.$_$.hb;
  var Enum = kotlin_kotlin.$_$.ka;
  var charCodeAt = kotlin_kotlin.$_$.v6;
  var toString_0 = kotlin_kotlin.$_$.s1;
  var substring = kotlin_kotlin.$_$.v9;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ComparableAttrsScope, 'ComparableAttrsScope', ComparableAttrsScope_init_$Create$, VOID, [AttrsScope]);
  initMetadataForClass(DummyAttrsScope, 'DummyAttrsScope', DummyAttrsScope, VOID, [AttrsScope]);
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(ComparableStyleScope, 'ComparableStyleScope', ComparableStyleScope, VOID, [StyleScope]);
  initMetadataForClass(CssPropertyDeclaration, 'CssPropertyDeclaration');
  initMetadataForCompanion(Companion_6);
  initMetadataForCompanion(Companion_7);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(GridTrackBuilderInRepeat, 'GridTrackBuilderInRepeat');
  initMetadataForClass(GridTrackBuilder, 'GridTrackBuilder', GridTrackBuilder, GridTrackBuilderInRepeat);
  initMetadataForClass(GridEntry, 'GridEntry');
  initMetadataForClass(TrackSize, 'TrackSize', VOID, GridEntry);
  initMetadataForClass(FitContent, 'FitContent', VOID, TrackSize);
  initMetadataForClass(MinMax, 'MinMax', VOID, TrackSize);
  initMetadataForClass(Flex, 'Flex', VOID, TrackSize);
  initMetadataForClass(Inflexible, 'Inflexible', VOID, TrackSize);
  initMetadataForClass(Keyword, 'Keyword', VOID, Inflexible);
  initMetadataForClass(Fixed, 'Fixed', VOID, Inflexible);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(Repeat, 'Repeat', VOID, GridEntry);
  initMetadataForClass(Track, 'Track', VOID, Repeat);
  initMetadataForClass(Auto, 'Auto', VOID, Repeat);
  initMetadataForClass(LineNames, 'LineNames', VOID, GridEntry);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(GridBuilderInAuto, 'GridBuilderInAuto');
  initMetadataForClass(GridBuilder, 'GridBuilder', GridBuilder, GridBuilderInAuto);
  initMetadataForClass(CSSLayerRuleDeclaration, 'CSSLayerRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForCompanion(Companion_11);
  initMetadataForCompanion(Companion_12);
  initMetadataForCompanion(Companion_13);
  initMetadataForCompanion(Companion_14);
  initMetadataForCompanion(Companion_15);
  initMetadataForCompanion(Companion_16);
  function get_Visible() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'visible';
  }
  function get_Hidden() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'hidden';
  }
  function get_Auto() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'auto';
  }
  initMetadataForInterface(CssOverflowModeValues, 'CssOverflowModeValues');
  initMetadataForCompanion(Companion_17, VOID, [CssOverflowModeValues]);
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(CSSScopeRuleDeclaration, 'CSSScopeRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(StyleVariable, 'StyleVariable');
  initMetadataForClass(PropertyValue, 'PropertyValue', VOID, StyleVariable);
  initMetadataForClass(NumberValue, 'NumberValue', VOID, StyleVariable);
  initMetadataForClass(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider');
  initMetadataForClass(StyleVariableNumberProvider, 'StyleVariableNumberProvider');
  initMetadataForCompanion(Companion_20);
  initMetadataForCompanion(Companion_21);
  initMetadataForCompanion(Companion_22);
  initMetadataForCompanion(Companion_23);
  initMetadataForCompanion(Companion_24);
  initMetadataForCompanion(Companion_25);
  function unaryMinus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(-1 * ' + toString(_this__u8e3s4) + ')';
  }
  initMetadataForInterface(CalcScope, 'CalcScope');
  initMetadataForObject(CalcScopeInstance, 'CalcScopeInstance', VOID, VOID, [CalcScope]);
  initMetadataForCompanion(Companion_26);
  initMetadataForClass(GenericNamespacedElementBuilder, 'GenericNamespacedElementBuilder', VOID, VOID, [ElementBuilder]);
  initMetadataForCompanion(Companion_27);
  initMetadataForClass(GenericElementBuilder, 'GenericElementBuilder', VOID, VOID, [ElementBuilder]);
  initMetadataForCompanion(Companion_28);
  initMetadataForClass(SVGElementAttrsScope, 'SVGElementAttrsScope', VOID, VOID, [AttrsScope]);
  function stroke(value) {
    this.x2l('stroke', value.toString());
  }
  function strokeLineCap(value) {
    this.x2l('stroke-linecap', value.toString());
  }
  function strokeMiterLimit(value) {
    this.x2l('stroke-miterlimit', toString(value));
  }
  function strokeWidth(value) {
    this.x2l('stroke-width', toString(value));
  }
  function fill(value) {
    this.x2l('fill', value.toString());
  }
  function fill_0(id) {
    this.x2l('fill', _SvgId___get_urlReference__impl__ehpa8t(id));
  }
  initMetadataForInterface(SvgPresentationAttrs, 'SvgPresentationAttrs', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SVGGraphicalElementAttrsScope, 'SVGGraphicalElementAttrsScope', VOID, SVGElementAttrsScope, [SVGElementAttrsScope, SvgPresentationAttrs]);
  initMetadataForClass(SVGContainerElementAttrsScope, 'SVGContainerElementAttrsScope', VOID, SVGGraphicalElementAttrsScope);
  function height(value) {
    this.x2l('height', toString(value));
  }
  function width_0(value) {
    this.x2l('width', toString(value));
  }
  initMetadataForInterface(SvgLengthAttrs, 'SvgLengthAttrs', VOID, VOID, [AttrsScope]);
  function viewBox(x, y, width, height) {
    this.x2l('viewBox', toString(x) + ' ' + toString(y) + ' ' + toString(width) + ' ' + toString(height));
  }
  initMetadataForInterface(SvgViewBoxAttrs, 'SvgViewBoxAttrs', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SVGSvgAttrsScope, 'SVGSvgAttrsScope', VOID, SVGContainerElementAttrsScope, [SVGContainerElementAttrsScope, AttrsScope, SvgLengthAttrs, SvgViewBoxAttrs]);
  initMetadataForCompanion(Companion_29);
  initMetadataForClass(SVGGradientAttrsScope, 'SVGGradientAttrsScope', VOID, SVGElementAttrsScope);
  initMetadataForClass(SVGRadialGradientAttrsScope, 'SVGRadialGradientAttrsScope', VOID, SVGGradientAttrsScope);
  initMetadataForCompanion(Companion_30);
  initMetadataForClass(SVGPathAttrsScope, 'SVGPathAttrsScope', VOID, SVGGraphicalElementAttrsScope);
  initMetadataForClass(SVGTransformScope, 'SVGTransformScope');
  initMetadataForCompanion(Companion_31);
  initMetadataForClass(ViewBox, 'ViewBox');
  initMetadataForClass(SVGStrokeLineCap, 'SVGStrokeLineCap', VOID, Enum);
  initMetadataForCompanion(Companion_32);
  function cx(value) {
    this.x2l('cx', toString(value));
  }
  function cy(value) {
    this.x2l('cy', toString(value));
  }
  initMetadataForInterface(SvgCenterCoordinateAttrs, 'SvgCenterCoordinateAttrs', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SVGCircleAttrsScope, 'SVGCircleAttrsScope', VOID, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, SvgCenterCoordinateAttrs]);
  initMetadataForClass(SVGFillType, 'SVGFillType', VOID, Enum);
  initMetadataForClass(SVGStrokeType, 'SVGStrokeType', VOID, Enum);
  initMetadataForCompanion(Companion_33);
  initMetadataForClass(SVGDefsAttrsScope, 'SVGDefsAttrsScope', VOID, SVGElementAttrsScope);
  initMetadataForCompanion(Companion_34);
  initMetadataForClass(SVGStopAttrsScope, 'SVGStopAttrsScope', VOID, SVGElementAttrsScope);
  //endregion
  var com_varabyte_kobweb_compose_attributes_ComparableAttrsScope$stable;
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.q2u_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.r2u_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.s2u_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.t2u_1 = LinkedHashSet_init_$Create$();
    this.u2u_1 = null;
  }
  protoOf(ComparableAttrsScope).x2l = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.r2u_1.a2(attr, value);
    this.q2u_1.x2l(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).a2m = function (classes) {
    this.s2u_1.r(classes);
  };
  protoOf(ComparableAttrsScope).f2m = function (update, value) {
    this.q2u_1.f2m(update, value);
  };
  protoOf(ComparableAttrsScope).g2m = function (listener) {
    this.t2u_1.h(listener);
    this.q2u_1.g2m(listener);
  };
  protoOf(ComparableAttrsScope).z2l = function (builder) {
    var tmp0_elvis_lhs = this.u2u_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.u2u_1 = style;
    this.q2u_1.z2l(builder);
  };
  protoOf(ComparableAttrsScope).v2u = function (effect) {
    this.q2u_1.e2m(effect);
  };
  protoOf(ComparableAttrsScope).e2m = function (effect) {
    return this.v2u(effect);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.r2u_1, this.r2u_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.s2u_1, this.s2u_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.t2u_1, this.t2u_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.u2u_1, this.u2u_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.r2u_1);
    result = imul(31, result) + hashCode(this.s2u_1) | 0;
    result = imul(31, result) + hashCode(this.t2u_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.u2u_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).x2l = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).a2m = function (classes) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).f2m = function (update, value) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).g2m = function (listener) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).z2l = function (builder) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).v2u = function (effect) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).e2m = function (effect) {
    return this.v2u(effect);
  };
  var com_varabyte_kobweb_compose_attributes_SyntheticEventListener$stable;
  var com_varabyte_kobweb_compose_attributes_TransitionEventListener$stable;
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.x2l('aria-hidden', value.toString());
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.x2l('aria-disabled', value.toString());
  }
  function alignItems(_this__u8e3s4, alignItems) {
    _this__u8e3s4.j2o('align-items', alignItems);
  }
  function Companion() {
  }
  protoOf(Companion).w2u = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    _this__u8e3s4.j2o('justify-content', justifyContent);
  }
  function Companion_0() {
  }
  protoOf(Companion_0).w2u = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.j2o('justify-items', justifyItems);
  }
  function Companion_1() {
  }
  protoOf(Companion_1).w2u = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_1).x2u = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_1).y2u = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.j2o('justify-self', justifySelf);
  }
  function Companion_2() {
  }
  protoOf(Companion_2).w2u = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_2).x2u = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_2).y2u = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  var com_varabyte_kobweb_compose_css_BorderImageNumericBuilder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageSlice_Builder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageWidth_Builder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageOutset_Builder$stable;
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderLeft(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderLeft_0(_this__u8e3s4, borderLeft$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.j2o('border-color', color);
  }
  function borderColor_0(_this__u8e3s4, top, right, bottom, left) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      tmp = Color('currentColor');
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (right === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      tmp_0 = Color('currentColor');
    } else {
      tmp_0 = right;
    }
    right = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      tmp_1 = Color('currentColor');
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    var tmp_2;
    if (left === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      tmp_2 = Color('currentColor');
    } else {
      tmp_2 = left;
    }
    left = tmp_2;
    _this__u8e3s4.l2o('border-color', toString(top) + ' ' + toString(right) + ' ' + toString(bottom) + ' ' + toString(left));
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.l2o('border-style', lineStyle);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.j2o('border-width', width);
  }
  function borderTop(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderTop_0(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderBottom_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.j2o('border-bottom', this_0);
  }
  function borderLeft_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.j2o('border-left', this_0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.j2o('border-top', this_0);
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$borderBottom) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        width($this$borderBottom, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        style($this$borderBottom, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        color($this$borderBottom, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$borderLeft) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        width($this$borderLeft, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        style($this$borderLeft, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        color($this$borderLeft, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$borderTop) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        width($this$borderTop, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        style($this$borderTop, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        color($this$borderTop, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function Companion_3() {
  }
  protoOf(Companion_3).z2u = function (offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (inset) {
      this_0.m7('inset');
      this_0.n7(_Char___init__impl__6a9atx(32));
    }
    this_0.l7(offsetX);
    this_0.n7(_Char___init__impl__6a9atx(32));
    this_0.l7(offsetY);
    if (!(blurRadius == null)) {
      this_0.n7(_Char___init__impl__6a9atx(32));
      this_0.l7(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        this_0.n7(_Char___init__impl__6a9atx(32));
        this_0.n7(_Char___init__impl__6a9atx(48));
      }
      this_0.n7(_Char___init__impl__6a9atx(32));
      this_0.l7(spreadRadius);
    }
    if (!(color == null)) {
      this_0.n7(_Char___init__impl__6a9atx(32));
      this_0.l7(color);
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this_0.toString();
  };
  protoOf(Companion_3).a2v = function (offsetX, offsetY, blurRadius, spreadRadius, color, inset, $super) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    return $super === VOID ? this.z2u(offsetX, offsetY, blurRadius, spreadRadius, color, inset) : $super.z2u.call(this, offsetX, offsetY, blurRadius, spreadRadius, color, inset);
  };
  protoOf(Companion_3).b2v = function (shadows) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString(shadows);
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function Companion_4() {
  }
  protoOf(Companion_4).c2v = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'content-box';
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function boxShadow(_this__u8e3s4, boxShadow) {
    boxShadow_0(_this__u8e3s4, toString(boxShadow));
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, toString(boxSizing_0));
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.l2o('box-shadow', value);
  }
  var com_varabyte_kobweb_compose_css_Edge$stable;
  var com_varabyte_kobweb_compose_css_EdgeXOrCenter$stable;
  var com_varabyte_kobweb_compose_css_EdgeX$stable;
  var com_varabyte_kobweb_compose_css_CenterX$stable;
  var com_varabyte_kobweb_compose_css_EdgeXOffset$stable;
  var com_varabyte_kobweb_compose_css_EdgeYOrCenter$stable;
  var com_varabyte_kobweb_compose_css_EdgeY$stable;
  var com_varabyte_kobweb_compose_css_CenterY$stable;
  var com_varabyte_kobweb_compose_css_EdgeYOffset$stable;
  var com_varabyte_kobweb_compose_css_CSSPosition$stable;
  var com_varabyte_kobweb_compose_css_HueInterpolationMethod$stable;
  var com_varabyte_kobweb_compose_css_ColorInterpolationMethod_PolarColorSpace$stable;
  var com_varabyte_kobweb_compose_css_ColorInterpolationMethod$stable;
  function Companion_5() {
  }
  protoOf(Companion_5).d2v = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'light';
  };
  protoOf(Companion_5).e2v = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dark';
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function colorScheme(_this__u8e3s4, colorScheme) {
    _this__u8e3s4.j2o('color-scheme', colorScheme);
  }
  var com_varabyte_kobweb_compose_css_CssPropertyDeclaration$stable;
  var com_varabyte_kobweb_compose_css_ComparableStyleScope$stable;
  function com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter() {
    return com_varabyte_kobweb_compose_css_ComparableStyleScope$stable;
  }
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f2v_1 = ArrayList_init_$Create$();
    this.g2v_1 = this.f2v_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.h2v_1 = ArrayList_init_$Create$();
    this.i2v_1 = this.h2v_1;
  }
  protoOf(ComparableStyleScope).j2o = function (propertyName, value) {
    this.f2v_1.h(new CssPropertyDeclaration(propertyName, toString(value)));
  };
  protoOf(ComparableStyleScope).n2o = function (variableName, value) {
    this.h2v_1.h(new CssPropertyDeclaration(variableName, toString(value)));
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.g2v_1, other.g2v_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.i2v_1, other.i2v_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.g2v_1);
    result = imul(31, result) + hashCode(this.i2v_1) | 0;
    return result;
  };
  function CssPropertyDeclaration(name, value) {
    this.j2v_1 = name;
    this.k2v_1 = value;
  }
  protoOf(CssPropertyDeclaration).toString = function () {
    return 'CssPropertyDeclaration(name=' + this.j2v_1 + ', value=' + this.k2v_1 + ')';
  };
  protoOf(CssPropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.j2v_1);
    result = imul(result, 31) + getStringHashCode(this.k2v_1) | 0;
    return result;
  };
  protoOf(CssPropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CssPropertyDeclaration))
      return false;
    if (!(this.j2v_1 === other.j2v_1))
      return false;
    if (!(this.k2v_1 === other.k2v_1))
      return false;
    return true;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.g2v_1.l()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.i2v_1.l();
    }
    return tmp;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).l2v = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pointer';
  };
  protoOf(Companion_6).m2v = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'not-allowed';
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.j2o('cursor', cursor);
  }
  function Companion_7() {
  }
  protoOf(Companion_7).n2v = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function appearance(_this__u8e3s4, appearance) {
    _this__u8e3s4.j2o('appearance', appearance);
  }
  function Companion_8() {
  }
  protoOf(Companion_8).o2v = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '500';
  };
  protoOf(Companion_8).p2v = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '600';
  };
  protoOf(Companion_8).q2v = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bolder';
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.j2o('font-weight', weight);
  }
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_FitContent$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_MinMax$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Flex$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Inflexible$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Keyword$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Fixed$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_Repeat_Track$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_Repeat_Auto$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_Repeat$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_LineNames$stable;
  var com_varabyte_kobweb_compose_css_GridEntry$stable;
  var com_varabyte_kobweb_compose_css_GridTrackBuilderInRepeat$stable;
  var com_varabyte_kobweb_compose_css_GridTrackBuilder$stable;
  var com_varabyte_kobweb_compose_css_GridTemplate_SubgridBuilder$stable;
  var com_varabyte_kobweb_compose_css_GridBuilderInAuto$stable;
  var com_varabyte_kobweb_compose_css_GridBuilder$stable;
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
  }
  protoOf(GridTrackBuilder).s2v = function (count, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = this_0.t2v_1;
    var repeatTracks = copyToArray(this_1);
    this.t2v_1.h(Companion_instance_11.u2v(count, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.t2v_1 = ArrayList_init_$Create$();
  }
  protoOf(GridTrackBuilderInRepeat).v2v = function () {
    return Companion_instance_10.a2w();
  };
  protoOf(GridTrackBuilderInRepeat).w2v = function (track) {
    this.t2v_1.h(track);
  };
  protoOf(GridTrackBuilderInRepeat).x2v = function (value) {
    return this.w2v(Companion_instance_10.b2w(value));
  };
  protoOf(GridTrackBuilderInRepeat).y2v = function (min, max) {
    return this.w2v(Companion_instance_10.c2w(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).z2v = function (min, max) {
    return this.y2v(Companion_instance_10.d2w(min), Companion_instance_10.b2w(max));
  };
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    gridTemplateColumns(_this__u8e3s4, toTrackListString(this_0.t2v_1));
  }
  function FitContent() {
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min.toString() + ', ' + max.toString() + ')');
    this.f2w_1 = min;
    this.g2w_1 = max;
  }
  function Flex(value) {
    TrackSize.call(this, toString(value));
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
  }
  function Keyword(value) {
    Inflexible.call(this, value);
  }
  function Fixed(value) {
    Inflexible.call(this, toString(value));
  }
  function Companion_9() {
  }
  protoOf(Companion_9).a2w = function () {
    return new Keyword('min-content');
  };
  protoOf(Companion_9).d2w = function (value) {
    return new Fixed(value);
  };
  protoOf(Companion_9).b2w = function (value) {
    return new Flex(value);
  };
  protoOf(Companion_9).c2w = function (min, max) {
    return new MinMax(min, max);
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
  }
  function Auto() {
  }
  function TrackSize(value) {
    GridEntry.call(this, value);
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString_0(entries) + ')');
    this.i2w_1 = entries;
  }
  function LineNames(names) {
    GridEntry.call(this, joinToString(names, ' ', '[', ']'));
    this.k2w_1 = names;
  }
  function Companion_10() {
  }
  protoOf(Companion_10).u2v = function (count, entries) {
    return new Track(count, entries.slice());
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function GridEntry(value) {
    this.l2w_1 = value;
  }
  protoOf(GridEntry).toString = function () {
    return this.l2w_1;
  };
  function toTrackListString(_this__u8e3s4) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(_this__u8e3s4);
    return toTrackListString_0(tmp$ret$0);
  }
  function toTrackListString_0(_this__u8e3s4) {
    validate(_this__u8e3s4);
    // Inline function 'kotlin.collections.mutableListOf' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var acc = accumulator;
      var prev = lastOrNull(acc);
      var tmp;
      if (prev instanceof LineNames) {
        tmp = element instanceof LineNames;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp_0 = get_lastIndex(acc);
        var tmp0 = prev.k2w_1;
        // Inline function 'kotlin.collections.plus' call
        var elements = element.k2w_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = tmp0.concat(elements);
        acc.g2(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        acc.h(element);
      }
      accumulator = acc;
    }
    var tmp$ret$4 = accumulator;
    return joinToString_0(tmp$ret$4, ' ');
  }
  function validate(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp;
      if (element instanceof LineNames) {
        tmp = emptyList();
      } else {
        if (element instanceof TrackSize) {
          tmp = listOf(element);
        } else {
          if (element instanceof Repeat) {
            // Inline function 'kotlin.collections.filterIsInstance' call
            var tmp0 = element.i2w_1;
            // Inline function 'kotlin.collections.filterIsInstanceTo' call
            var destination_0 = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = tmp0.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = tmp0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                destination_0.h(element_0);
              }
            }
            // Inline function 'kotlin.also' call
            // Inline function 'kotlin.collections.isNotEmpty' call
            // Inline function 'kotlin.require' call
            if (!!destination_0.l()) {
              var message = 'repeat() must contain at least one track size';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
            tmp = destination_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var list = tmp;
      addAll(destination, list);
    }
    var trackSizes = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!trackSizes.l()) {
      var message_0 = 'You must specify at least one track size';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var inductionVariable_1 = 0;
    var last_1 = _this__u8e3s4.length;
    while (inductionVariable_1 < last_1) {
      var element_1 = _this__u8e3s4[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      if (element_1 instanceof Auto) {
        count = count + 1 | 0;
      }
    }
    var autoRepeatCount = count;
    if (autoRepeatCount === 0)
      return Unit_instance;
    // Inline function 'kotlin.require' call
    if (!(autoRepeatCount === 1)) {
      var message_1 = 'Only one auto-repeat call is allowed per track list';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = trackSizes.i();
    while (_iterator__ex2g4s.j()) {
      var element_2 = _iterator__ex2g4s.k();
      var tmp_0;
      if (element_2 instanceof Fixed) {
        tmp_0 = null;
      } else {
        if (element_2 instanceof FitContent) {
          tmp_0 = 'Cannot use fit-content with auto-repeat';
        } else {
          if (element_2 instanceof Flex) {
            tmp_0 = 'Cannot use flex values with auto-repeat';
          } else {
            if (element_2 instanceof Keyword) {
              tmp_0 = 'Cannot use keywords with auto-repeat';
            } else {
              if (element_2 instanceof MinMax) {
                var tmp_1;
                var tmp_2;
                var tmp_3 = element_2.f2w_1;
                if (!(tmp_3 instanceof Fixed)) {
                  var tmp_4 = element_2.g2w_1;
                  tmp_2 = !(tmp_4 instanceof Fixed);
                } else {
                  tmp_2 = false;
                }
                if (tmp_2) {
                  tmp_1 = 'Cannot use minmax with auto-repeat unless at least one of the values is a fixed value (a length or percentage)';
                } else {
                  tmp_1 = null;
                }
                tmp_0 = tmp_1;
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
      var errorMessage = tmp_0;
      // Inline function 'kotlin.require' call
      if (!(errorMessage == null)) {
        var message_2 = ensureNotNull(errorMessage);
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
  }
  function gridTemplateRows_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    gridTemplateRows(_this__u8e3s4, toTrackListString(this_0.t2v_1));
  }
  function grid(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    block(this_0);
    this_0.p2w(_this__u8e3s4);
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
  }
  function GridBuilderInAuto() {
    this.m2w_1 = null;
    this.n2w_1 = null;
    this.o2w_1 = null;
  }
  protoOf(GridBuilderInAuto).q2w = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    tmp.m2w_1 = this_0.t2v_1;
  };
  protoOf(GridBuilderInAuto).r2w = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    tmp.n2w_1 = this_0.t2v_1;
  };
  protoOf(GridBuilderInAuto).p2w = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.m2w_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      gridTemplateColumns(scope, toTrackListString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.n2w_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      gridTemplateRows(scope, toTrackListString(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.o2w_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.m2w_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        gridAutoColumns(scope, toTrackListString(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.n2w_1;
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        gridAutoRows(scope, toTrackListString(tmp1_safe_receiver_0));
        tmp = Unit_instance;
      }
    }
  };
  var com_varabyte_kobweb_compose_css_CSSLayerRuleDeclaration$stable;
  function layer(_this__u8e3s4, name, rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    rulesBuild(this_0);
    var rules = this_0.e2p();
    _this__u8e3s4.a2o(new CSSLayerRuleDeclaration(name, rules));
  }
  function CSSLayerRuleDeclaration(name, rules) {
    this.s2w_1 = name;
    this.t2w_1 = rules;
  }
  protoOf(CSSLayerRuleDeclaration).d2o = function () {
    return this.t2w_1;
  };
  protoOf(CSSLayerRuleDeclaration).t2n = function () {
    return '@layer ' + this.s2w_1;
  };
  protoOf(CSSLayerRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSLayerRuleDeclaration) {
      tmp = (this.s2w_1 === other.s2w_1 && equals(this.t2w_1, other.t2w_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function Companion_11() {
  }
  protoOf(Companion_11).u2w = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'middle';
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function marginBlock(_this__u8e3s4, both) {
    _this__u8e3s4.j2o('margin-block', both);
  }
  function marginBlockStart(_this__u8e3s4, value) {
    _this__u8e3s4.j2o('margin-block-start', value);
  }
  function marginBlockEnd(_this__u8e3s4, value) {
    _this__u8e3s4.j2o('margin-block-end', value);
  }
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.j2o('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    _this__u8e3s4.l2o('padding-inline', toString(start) + ' ' + toString(end));
  }
  function Companion_12() {
  }
  protoOf(Companion_12).n2v = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    return Companion_instance_13;
  }
  function listStyle(_this__u8e3s4, listStyle) {
    _this__u8e3s4.j2o('list-style', listStyle);
  }
  function ListStyle$Companion$of$lambda(it) {
    return toString(it);
  }
  function Companion_13() {
  }
  protoOf(Companion_13).v2w = function (type, position, image) {
    var tmp = listOfNotNull([type, position, image]);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString_0(tmp, ' ', VOID, VOID, VOID, VOID, ListStyle$Companion$of$lambda);
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  var com_varabyte_kobweb_compose_css_CSSMargin$stable;
  function Companion_14() {
  }
  protoOf(Companion_14).w2w = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'scale-down';
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.j2o('object-fit', objectFit);
  }
  function outline(_this__u8e3s4, outline) {
    _this__u8e3s4.j2o('outline', outline);
  }
  function Companion_15() {
  }
  protoOf(Companion_15).x2w = function (outlineWidth, outlineStyle, outlineColor) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString_0(listOfNotNull([outlineWidth, outlineStyle, outlineColor]), ' ');
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    return Companion_instance_16;
  }
  function Companion_16() {
  }
  protoOf(Companion_16).y2w = function (value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(value);
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    return Companion_instance_17;
  }
  function Companion_17() {
  }
  var Companion_instance_18;
  function Companion_getInstance_18() {
    return Companion_instance_18;
  }
  function overflowX(_this__u8e3s4, overflowX) {
    _this__u8e3s4.j2o('overflow-x', overflowX);
  }
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.j2o('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.j2o('overflow', overflow);
  }
  function CssOverflowModeValues() {
  }
  function Companion_18() {
  }
  protoOf(Companion_18).c2x = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'break-word';
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    return Companion_instance_19;
  }
  function overflowWrap(_this__u8e3s4, overflowWrap) {
    _this__u8e3s4.j2o('overflow-wrap', overflowWrap);
  }
  var com_varabyte_kobweb_compose_css_CSSScopeRuleDeclaration$stable;
  function scope(_this__u8e3s4, start, end, rulesBuild) {
    start = start === VOID ? null : start;
    end = end === VOID ? null : end;
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    rulesBuild(this_0);
    var rules = this_0.e2p();
    _this__u8e3s4.a2o(new CSSScopeRuleDeclaration(start, end, rules));
  }
  function CSSScopeRuleDeclaration(start, end, rules) {
    this.d2x_1 = start;
    this.e2x_1 = end;
    this.f2x_1 = rules;
  }
  protoOf(CSSScopeRuleDeclaration).d2o = function () {
    return this.f2x_1;
  };
  protoOf(CSSScopeRuleDeclaration).t2n = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.m7('@scope');
    if (!(this.d2x_1 == null)) {
      this_0.m7(' (' + this.d2x_1 + ')');
    }
    if (!(this.e2x_1 == null)) {
      this_0.m7(' to (' + this.e2x_1 + ')');
    }
    return this_0.toString();
  };
  protoOf(CSSScopeRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSScopeRuleDeclaration) {
      tmp = (this.d2x_1 == other.d2x_1 && this.e2x_1 == other.e2x_1 && equals(this.f2x_1, other.f2x_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function Companion_19() {
  }
  protoOf(Companion_19).g2x = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'smooth';
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    return Companion_instance_20;
  }
  function scrollBehavior(_this__u8e3s4, scrollBehavior) {
    _this__u8e3s4.j2o('scroll-behavior', scrollBehavior);
  }
  var com_varabyte_kobweb_compose_css_StyleVariable_PropertyValue$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable_NumberValue$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable_StringValue$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable$stable;
  var com_varabyte_kobweb_compose_css_StyleVariablePropertyProvider$stable;
  var com_varabyte_kobweb_compose_css_StyleVariableNumberProvider$stable;
  var com_varabyte_kobweb_compose_css_StyleVariableStringProvider$stable;
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
  }
  protoOf(PropertyValue).j2x = function (fallback) {
    return this.m2x(fallback);
  };
  protoOf(PropertyValue).n2x = function (fallback) {
    return this.j2x((fallback == null ? true : !(fallback == null)) ? fallback : THROW_CCE());
  };
  function NumberValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable.call(this, name, tmp, prefix);
  }
  protoOf(NumberValue).r2x = function (fallback) {
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.m2x(tmp);
  };
  protoOf(NumberValue).n2x = function (fallback) {
    return this.r2x((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StyleVariable(name, defaultFallback, prefix) {
    this.k2x_1 = defaultFallback;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.l2x_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
  }
  protoOf(StyleVariable).o2x = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.n2x(fallback) : $super.n2x.call(this, fallback);
  };
  protoOf(StyleVariable).m2x = function (fallback) {
    var tmp1_safe_receiver = fallback == null ? this.k2x_1 : fallback;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = ', ' + toString(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp;
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'var(--' + this.l2x_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.s2x_1 = defaultFallback;
    this.t2x_1 = prefix;
  }
  protoOf(StyleVariablePropertyProvider).u2x = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.s2x_1, this.t2x_1);
  };
  function StyleVariable_0(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariable_1(prefix) {
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(null, prefix);
  }
  function StyleVariable_2(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.v2x_1 = defaultFallback;
    this.w2x_1 = prefix;
  }
  protoOf(StyleVariableNumberProvider).u2x = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.v2x_1, this.w2x_1);
  };
  function StyleVariable_3(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.j2o('--' + variable.l2x_1, value);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (!(groupObject == null)) {
      this_0.m7(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).t9())), '-vars'), '-variables'));
      this_0.n7(_Char___init__impl__6a9atx(45));
    }
    this_0.m7(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return this_0.toString();
  }
  function Companion_20() {
  }
  protoOf(Companion_20).x2u = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    return Companion_instance_21;
  }
  function Companion_21() {
  }
  protoOf(Companion_21).x2x = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'underline';
  };
  protoOf(Companion_21).n2v = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    return Companion_instance_22;
  }
  function Companion_22() {
  }
  protoOf(Companion_22).n2v = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    return Companion_instance_23;
  }
  function Companion_23() {
  }
  protoOf(Companion_23).y2x = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'nowrap';
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    return Companion_instance_24;
  }
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.j2o('user-select', userSelect);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.j2o('text-align', textAlign);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(textDecorationLines.length === 0)) {
      _this__u8e3s4.l2o('text-decoration-line', joinToString(textDecorationLines, ' '));
    }
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.j2o('white-space', whiteSpace);
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.j2o('translate', tx);
  }
  function Companion_24() {
  }
  protoOf(Companion_24).z2x = function (property, duration, timingFunction, delay, behavior) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    this_0.h(toString(property));
    if (duration == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.h(toString(duration));
    }
    if (timingFunction == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.h(toString(timingFunction));
    }
    if (!(delay == null)) {
      if (duration == null) {
        this_0.h('0s');
      }
      this_0.h(toString(delay));
    }
    if (behavior == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.h(toString(behavior));
    }
    var tmp$ret$9 = this_0.s4();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString_0(tmp$ret$9, ' ');
  };
  protoOf(Companion_24).a2y = function (property, duration, timingFunction, delay, behavior) {
    return this.z2x(Companion_instance_26.b2y(property), duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_24).c2y = function (property, duration, timingFunction, delay, behavior, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    behavior = behavior === VOID ? null : behavior;
    return $super === VOID ? this.a2y(property, duration, timingFunction, delay, behavior) : $super.a2y.call(this, property, duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_24).d2y = function (transitions) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString(transitions);
  };
  protoOf(Companion_24).e2y = function (properties, duration, timingFunction, delay, behavior) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var _iterator__ex2g4s = properties.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var tmp$ret$0 = Companion_instance_25.a2y(item, duration, timingFunction, delay, behavior);
      destination.h(tmp$ret$0);
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString_0(destination);
  };
  protoOf(Companion_24).f2y = function (properties, duration, timingFunction, delay, behavior, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    behavior = behavior === VOID ? null : behavior;
    return $super === VOID ? this.e2y(properties, duration, timingFunction, delay, behavior) : $super.e2y.call(this, properties, duration, timingFunction, delay, behavior);
  };
  var Companion_instance_25;
  function Companion_getInstance_25() {
    return Companion_instance_25;
  }
  function transition(_this__u8e3s4, transition) {
    _this__u8e3s4.j2o('transition', transition);
  }
  function Companion_25() {
  }
  protoOf(Companion_25).b2y = function (customValue) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(customValue) > 0) {
      var tmp_0;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.text.none' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(customValue)) {
          var element = charSequenceGet(customValue, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (isWhitespace(element)) {
            tmp$ret$2 = false;
            break $l$block;
          }
        }
        tmp$ret$2 = true;
      }
      if (tmp$ret$2) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.text.contains' call
        tmp_0 = Regex_init_$Create$('\\(.+\\)').ob(customValue);
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'Invalid transition property name. A property shouldn\'t contain any spaces, but got "' + customValue + '".';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return customValue;
  };
  var Companion_instance_26;
  function Companion_getInstance_26() {
    return Companion_instance_26;
  }
  var com_varabyte_kobweb_compose_css_functions_CalcScope_CalcNum$stable;
  function calc(action) {
    // Inline function 'kotlin.with' call
    return action(CalcScopeInstance_instance);
  }
  function CalcScope() {
  }
  function CalcScopeInstance() {
  }
  var CalcScopeInstance_instance;
  function CalcScopeInstance_getInstance() {
    return CalcScopeInstance_instance;
  }
  var com_varabyte_kobweb_compose_css_functions_CSSFilter$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Simple$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Stop$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_StopRange$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Hint$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder$stable;
  var com_varabyte_kobweb_compose_css_functions_RepeatingGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient_Base$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient_ByDirection$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient_ByAngle$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Circle$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Ellipse$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_ConicGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSClamp$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSMin$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSMax$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSUrl$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Simple$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Disposable$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_KeysToEffect$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_Builder$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stable;
  function registerRefScope(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.n13();
    var tmp;
    if (false || it === Companion_getInstance().p12_1) {
      var value = registerRefScope$lambda;
      $composer_0.o13(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    registerRefScope_0(_this__u8e3s4, scope, tmp$ret$3, $composer_0, 384 | 14 & $changed | 112 & $changed);
  }
  function com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() {
    return com_varabyte_kobweb_compose_dom_ElementRefScope$stable;
  }
  function registerRefScope_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.w12(1100234072);
    if (scope == null) {
      $composer_0.x12();
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = scope.h2y_1.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = element.i2y_1;
      var tmp = copyToArray(this_0).slice();
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.s13(element) | (($changed & 896 ^ 384) > 256 && $composer_0.p13(transform) || ($changed & 384) === 256)) | $composer_0.s13(_this__u8e3s4));
      // Inline function 'kotlin.let' call
      var it = $composer_0.n13();
      var tmp_0;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = registerRefScope$lambda_0(element, transform, _this__u8e3s4);
        $composer_0.o13(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp$ret$4 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      DisposableEffect(tmp, tmp$ret$4, $composer_0, 0);
    }
    $composer_0.x12();
  }
  function registerRefScope$lambda(it) {
    return it;
  }
  function registerRefScope$lambda_0($keyedCallback, $transform, $this_registerRefScope) {
    return function ($this$DisposableEffect) {
      return $keyedCallback.j2y_1.k2y($this$DisposableEffect, $transform($this_registerRefScope.w2l($this$DisposableEffect)));
    };
  }
  var com_varabyte_kobweb_compose_dom_GenericElementBuilder$stable;
  var com_varabyte_kobweb_compose_dom_GenericNamespacedElementBuilder$stable;
  function GenericTag(name, namespace, attrs, content, $composer, $changed, $default) {
    var namespace_0 = {_v: namespace};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1162580906);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.p13(namespace_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 2048 : 1024);
    if ($composer_0.u13(!(($dirty & 1171) === 1170), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        namespace_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = null;
      }
      var tmp0_safe_receiver = namespace_0._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_getInstance_27().m2y(tmp0_safe_receiver, name);
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0 = tmp1_elvis_lhs == null ? Companion_getInstance_28().o2y(name) : tmp1_elvis_lhs;
      TagElement(isInterface(tmp_0, ElementBuilder) ? tmp_0 : THROW_CCE(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty >> 3 | 896 & $dirty >> 3);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver_0 = $composer_0.d13();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.z1n(GenericTag$lambda(name, namespace_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Companion_26() {
    Companion_instance_27 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.l2y_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_26).m2y = function (namespace, qualifiedName) {
    var tmp0 = this.l2y_1;
    // Inline function 'kotlin.collections.getOrPut' call
    var key = to(namespace, qualifiedName);
    var value = tmp0.w1(key);
    var tmp;
    if (value == null) {
      var answer = new GenericNamespacedElementBuilder(namespace, qualifiedName);
      tmp0.a2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_27;
  function Companion_getInstance_27() {
    if (Companion_instance_27 == null)
      new Companion_26();
    return Companion_instance_27;
  }
  function _get_element__z0t21h($this) {
    var tmp0 = $this.r2y_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('element', 1, tmp, GenericNamespacedElementBuilder$_get_element_$ref_eof03j(), null);
    return tmp0.t1();
  }
  function GenericNamespacedElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElementNS(this$0.p2y_1, this$0.q2y_1);
    };
  }
  function GenericNamespacedElementBuilder$_get_element_$ref_eof03j() {
    return function (p0) {
      return _get_element__z0t21h(p0);
    };
  }
  function GenericNamespacedElementBuilder(namespace, qualifiedName) {
    Companion_getInstance_27();
    this.p2y_1 = namespace;
    this.q2y_1 = qualifiedName;
    var tmp = this;
    tmp.r2y_1 = lazy(GenericNamespacedElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericNamespacedElementBuilder).g1x = function () {
    var tmp = _get_element__z0t21h(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Companion_27() {
    Companion_instance_28 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.n2y_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_27).o2y = function (name) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.n2y_1;
    var value = this_0.w1(name);
    var tmp;
    if (value == null) {
      var answer = new GenericElementBuilder(name);
      this_0.a2(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_28;
  function Companion_getInstance_28() {
    if (Companion_instance_28 == null)
      new Companion_27();
    return Companion_instance_28;
  }
  function _get_element__z0t21h_0($this) {
    var tmp0 = $this.t2y_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('element', 1, tmp, GenericElementBuilder$_get_element_$ref_4jw5ti(), null);
    return tmp0.t1();
  }
  function GenericElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.s2y_1);
    };
  }
  function GenericElementBuilder$_get_element_$ref_4jw5ti() {
    return function (p0) {
      return _get_element__z0t21h_0(p0);
    };
  }
  function GenericElementBuilder(name) {
    Companion_getInstance_28();
    this.s2y_1 = name;
    var tmp = this;
    tmp.t2y_1 = lazy(GenericElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericElementBuilder).g1x = function () {
    var tmp = _get_element__z0t21h_0(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function GenericTag_0(name, attrsStr, content, $composer, $changed, $default) {
    var attrsStr_0 = {_v: attrsStr};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1150610595);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.p13(attrsStr_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 256 : 128);
    if ($composer_0.u13(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        attrsStr_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      var tmp;
      if (attrsStr_0._v == null) {
        $composer_0.w12(293955015);
        $composer_0.x12();
        tmp = null;
      } else {
        $composer_0.w12(293955016);
        // Inline function 'kotlin.let' call
        var tmp0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(($dirty & 14) === 4 | ($dirty & 112) === 32);
        // Inline function 'kotlin.let' call
        var it = tmp0.n13();
        var tmp_0;
        if (invalid || it === Companion_getInstance().p12_1) {
          var value = GenericTag$lambda_0(name, attrsStr_0);
          tmp0.o13(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.x12();
        tmp = tmp1_group;
      }
      var attrs = tmp;
      GenericTag(name, null, attrs, content_0._v, $composer_0, 48 | 14 & $dirty | 7168 & $dirty << 3, 0);
    } else {
      $composer_0.h13();
    }
    var tmp2_safe_receiver = $composer_0.d13();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.z1n(GenericTag$lambda_1(name, attrsStr_0, content_0, $changed, $default));
    }
  }
  function GenericTag$lambda($name, $namespace, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag($name, $namespace._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function GenericTag$lambda_0($name, $attrsStr) {
    return function ($this$let) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var template = document.createElement('template');
      template.innerHTML = '<' + $name + ' ' + $attrsStr._v + '><\/' + $name + '>';
      var el = ensureNotNull(template.content.firstElementChild);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = asList(el.attributes).i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        $this$let.x2l(element.name, element.value);
      }
      return Unit_instance;
    };
  }
  function GenericTag$lambda_1($name, $attrsStr, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag_0($name, $attrsStr._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_dom_svg_SVGTransformScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_ViewBox$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGGraphicalElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGContainerElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGSvgAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGDefsAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGGradientAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGLinearGradientAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGRadialGradientAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGStopAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPatternAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGSymbolAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGUseAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGCircleAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGEllipseAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGGroupAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGImageAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGLineAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPathDataScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPathAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPolygonAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPolylineAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGRectAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGTextAttrsScope$stable;
  function Svg(attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1507789010);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      GenericTag('svg', 'http://www.w3.org/2000/svg', Companion_instance_29.u2y(attrs_0._v), content, $composer_0, 54 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Svg$lambda(attrs_0, content, $changed, $default));
    }
  }
  function SVGSvgAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      if (!($attrs == null))
        $attrs(new SVGSvgAttrsScope(_this__u8e3s4));
      return Unit_instance;
    };
  }
  function Companion_28() {
  }
  protoOf(Companion_28).u2y = function (attrs) {
    return SVGSvgAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_29;
  function Companion_getInstance_29() {
    return Companion_instance_29;
  }
  function SVGSvgAttrsScope(attrs) {
    SVGContainerElementAttrsScope.call(this, attrs);
  }
  function _SvgId___init__impl__pmt7ru(value) {
    return value;
  }
  function _SvgId___get_value__impl__pof1ma($this) {
    return $this;
  }
  function SvgId__toString_impl_l4ivdq($this) {
    return _SvgId___get_value__impl__pof1ma($this);
  }
  function _SvgId___get_urlReference__impl__ehpa8t($this) {
    return 'url(#' + _SvgId___get_value__impl__pof1ma($this) + ')';
  }
  function Defs(_this__u8e3s4, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-2047159186);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.s13(content) ? 256 : 128);
    if ($composer_0.u13(!(($dirty & 145) === 144), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      var tmp0_safe_receiver = attrs_0._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_instance_34.c2z(tmp0_safe_receiver);
      }
      GenericTag('defs', 'http://www.w3.org/2000/svg', tmp, content, $composer_0, 54 | 7168 & $dirty << 3, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver_0 = $composer_0.d13();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.z1n(Defs$lambda(_this__u8e3s4, attrs_0, content, $changed, $default));
    }
  }
  function RadialGradient(_this__u8e3s4, id, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1306791686);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.p13(_SvgId___get_value__impl__pof1ma(id)) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.s13(content) ? 2048 : 1024);
    if ($composer_0.u13(!(($dirty & 1169) === 1168), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      GenericTag('radialGradient', 'http://www.w3.org/2000/svg', Companion_instance_30.d2z(id, attrs_0._v), content, $composer_0, 54 | 7168 & $dirty, 0);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(RadialGradient$lambda(_this__u8e3s4, id, attrs_0, content, $changed, $default));
    }
  }
  function SVGRadialGradientAttrsScope$Companion$invoke$lambda($attrs, $id) {
    return function (_this__u8e3s4) {
      if (!($attrs == null)) {
        $attrs(new SVGRadialGradientAttrsScope($id, _this__u8e3s4));
      } else {
        _this__u8e3s4.c2m(SvgId__toString_impl_l4ivdq($id));
      }
      return Unit_instance;
    };
  }
  function Companion_29() {
  }
  protoOf(Companion_29).d2z = function (id, attrs) {
    return SVGRadialGradientAttrsScope$Companion$invoke$lambda(attrs, id);
  };
  var Companion_instance_30;
  function Companion_getInstance_30() {
    return Companion_instance_30;
  }
  function SVGRadialGradientAttrsScope(id, attrs) {
    SVGGradientAttrsScope.call(this, id, attrs);
  }
  protoOf(SVGRadialGradientAttrsScope).f2z = function (value) {
    this.x2l('cx', toString(value));
  };
  protoOf(SVGRadialGradientAttrsScope).g2z = function (value) {
    this.x2l('cy', toString(value));
  };
  protoOf(SVGRadialGradientAttrsScope).h2z = function (value) {
    this.x2l('r', toString(value));
  };
  function Stop(_this__u8e3s4, offset, stopColor, stopOpacity, $composer, $changed, $default) {
    var offset_0 = {_v: offset};
    var stopColor_0 = {_v: stopColor};
    var stopOpacity_0 = {_v: stopOpacity};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-504620912);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(offset_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.s13(stopColor_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.s13(stopOpacity_0._v) ? 2048 : 1024);
    if ($composer_0.u13(!(($dirty & 1171) === 1170), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        offset_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        stopColor_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        stopOpacity_0._v = null;
      }
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.s13(offset_0._v) | $composer_0.s13(stopColor_0._v)) | $composer_0.s13(stopOpacity_0._v));
      // Inline function 'kotlin.let' call
      var it = tmp0.n13();
      var tmp;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = Stop$lambda(offset_0, stopColor_0, stopOpacity_0);
        tmp0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      Stop_0(_this__u8e3s4, tmp$ret$3, $composer_0, 14 & $dirty);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Stop$lambda_0(_this__u8e3s4, offset_0, stopColor_0, stopOpacity_0, $changed, $default));
    }
  }
  function Path(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(275418487);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 17) === 16), $dirty & 1)) {
      var tmp = Companion_instance_31.i2z(attrs);
      GenericTag('path', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Path$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPathAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      $attrs(new SVGPathAttrsScope(_this__u8e3s4));
      return Unit_instance;
    };
  }
  function Companion_30() {
  }
  protoOf(Companion_30).i2z = function (attrs) {
    return SVGPathAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_31;
  function Companion_getInstance_31() {
    return Companion_instance_31;
  }
  function SVGPathAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGPathAttrsScope).k2z = function (value) {
    this.x2l('d', value);
  };
  function SVGTransformScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o2z_1 = ArrayList_init_$Create$();
  }
  protoOf(SVGTransformScope).p2z = function (x, y) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.m7('scale(' + toString(x));
    if (y == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.m7(' ' + toString(y));
    }
    this_0.m7(')');
    var tmp$ret$4 = this_0.toString();
    this.o2z_1.h(tmp$ret$4);
  };
  protoOf(SVGTransformScope).q2z = function (x, y, $super) {
    y = y === VOID ? null : y;
    var tmp;
    if ($super === VOID) {
      this.p2z(x, y);
      tmp = Unit_instance;
    } else {
      tmp = $super.p2z.call(this, x, y);
    }
    return tmp;
  };
  function Companion_31() {
  }
  protoOf(Companion_31).r2z = function (width, height) {
    return new ViewBox(0, 0, width, height);
  };
  protoOf(Companion_31).s2z = function (width, height, $super) {
    height = height === VOID ? width : height;
    return $super === VOID ? this.r2z(width, height) : $super.r2z.call(this, width, height);
  };
  var Companion_instance_32;
  function Companion_getInstance_32() {
    return Companion_instance_32;
  }
  function ViewBox(x, y, width, height) {
    this.t2z_1 = x;
    this.u2z_1 = y;
    this.v2z_1 = width;
    this.w2z_1 = height;
  }
  function com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter() {
    return com_varabyte_kobweb_compose_dom_svg_ViewBox$stable;
  }
  var SVGStrokeLineCap_Butt_instance;
  var SVGStrokeLineCap_Round_instance;
  var SVGStrokeLineCap_Square_instance;
  var SVGStrokeLineCap_entriesInitialized;
  function SVGStrokeLineCap_initEntries() {
    if (SVGStrokeLineCap_entriesInitialized)
      return Unit_instance;
    SVGStrokeLineCap_entriesInitialized = true;
    SVGStrokeLineCap_Butt_instance = new SVGStrokeLineCap('Butt', 0);
    SVGStrokeLineCap_Round_instance = new SVGStrokeLineCap('Round', 1);
    SVGStrokeLineCap_Square_instance = new SVGStrokeLineCap('Square', 2);
  }
  function SVGStrokeLineCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineCap).toString = function () {
    return toSvgValue(this);
  };
  function Circle(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-2079059220);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 17) === 16), $dirty & 1)) {
      var tmp = Companion_instance_33.x2z(attrs);
      GenericTag('circle', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Circle$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGCircleAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      $attrs(new SVGCircleAttrsScope(_this__u8e3s4));
      return Unit_instance;
    };
  }
  function Companion_32() {
  }
  protoOf(Companion_32).x2z = function (attrs) {
    return SVGCircleAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_33;
  function Companion_getInstance_33() {
    return Companion_instance_33;
  }
  function SVGCircleAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGCircleAttrsScope).z2z = function (value) {
    this.x2l('r', toString(value));
  };
  var SVGFillType_None_instance;
  var SVGFillType_CurrentColor_instance;
  var SVGFillType_entriesInitialized;
  function SVGFillType_initEntries() {
    if (SVGFillType_entriesInitialized)
      return Unit_instance;
    SVGFillType_entriesInitialized = true;
    SVGFillType_None_instance = new SVGFillType('None', 0);
    SVGFillType_CurrentColor_instance = new SVGFillType('CurrentColor', 1);
  }
  function SVGFillType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGFillType).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeType_None_instance;
  var SVGStrokeType_CurrentColor_instance;
  var SVGStrokeType_entriesInitialized;
  function SVGStrokeType_initEntries() {
    if (SVGStrokeType_entriesInitialized)
      return Unit_instance;
    SVGStrokeType_entriesInitialized = true;
    SVGStrokeType_None_instance = new SVGStrokeType('None', 0);
    SVGStrokeType_CurrentColor_instance = new SVGStrokeType('CurrentColor', 1);
  }
  function SVGStrokeType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeType).toString = function () {
    return toSvgValue(this);
  };
  function SVGContainerElementAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  function SvgLengthAttrs() {
  }
  function SvgViewBoxAttrs() {
  }
  function SVGDefsAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      $attrs(new SVGDefsAttrsScope(_this__u8e3s4));
      return Unit_instance;
    };
  }
  function Companion_33() {
  }
  protoOf(Companion_33).c2z = function (attrs) {
    return SVGDefsAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_34;
  function Companion_getInstance_34() {
    return Companion_instance_34;
  }
  function SVGDefsAttrsScope(attrs) {
    SVGElementAttrsScope.call(this, attrs);
  }
  function SVGGradientAttrsScope(id, attrs) {
    SVGElementAttrsScope.call(this, attrs.c2m(SvgId__toString_impl_l4ivdq(id)));
  }
  function Stop_0(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(527231098);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 17) === 16), $dirty & 1)) {
      var tmp = Companion_instance_35.b30(attrs);
      GenericTag('stop', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Stop$lambda_1(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGStopAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      $attrs(new SVGStopAttrsScope(_this__u8e3s4));
      return Unit_instance;
    };
  }
  function Companion_34() {
  }
  protoOf(Companion_34).b30 = function (attrs) {
    return SVGStopAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_35;
  function Companion_getInstance_35() {
    return Companion_instance_35;
  }
  function SVGStopAttrsScope(attrs) {
    SVGElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGStopAttrsScope).d30 = function (value) {
    this.x2l('offset', toString(value));
  };
  protoOf(SVGStopAttrsScope).e30 = function (value) {
    this.x2l('stop-color', toString(value));
  };
  protoOf(SVGStopAttrsScope).f30 = function (value) {
    this.x2l('stop-opacity', toString(value));
  };
  function SVGGraphicalElementAttrsScope(attrs) {
    SVGElementAttrsScope.call(this, attrs);
  }
  function toSvgValue(_this__u8e3s4) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var this_0 = _this__u8e3s4.k2_1;
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      // Inline function 'kotlin.text.lowercase' call
      var this_1 = charCodeAt(this_0, 0);
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4 = toString_0(this_1).toLowerCase();
      tmp = toString(tmp$ret$4) + substring(this_0, 1);
    } else {
      tmp = this_0;
    }
    return tmp;
  }
  function SvgCenterCoordinateAttrs() {
  }
  function SVGElementAttrsScope(attrs) {
    this.v2y_1 = attrs;
  }
  protoOf(SVGElementAttrsScope).l2z = function (transformScope) {
    var scope = new SVGTransformScope();
    transformScope(scope);
    this.x2l('transform', joinToString_0(scope.o2z_1, ' '));
  };
  protoOf(SVGElementAttrsScope).z2l = function (builder) {
    this.v2y_1.z2l(builder);
  };
  protoOf(SVGElementAttrsScope).a2m = function (classes) {
    this.v2y_1.a2m(classes);
  };
  protoOf(SVGElementAttrsScope).b2m = function (classes) {
    this.v2y_1.b2m(classes);
  };
  protoOf(SVGElementAttrsScope).c2m = function (value) {
    return this.v2y_1.c2m(value);
  };
  protoOf(SVGElementAttrsScope).d2m = function (value) {
    return this.v2y_1.d2m(value);
  };
  protoOf(SVGElementAttrsScope).v2u = function (effect) {
    this.v2y_1.e2m(effect);
  };
  protoOf(SVGElementAttrsScope).e2m = function (effect) {
    return this.v2u(effect);
  };
  protoOf(SVGElementAttrsScope).x2l = function (attr, value) {
    return this.v2y_1.x2l(attr, value);
  };
  protoOf(SVGElementAttrsScope).f2m = function (update, value) {
    this.v2y_1.f2m(update, value);
  };
  protoOf(SVGElementAttrsScope).g2m = function (listener) {
    this.v2y_1.g2m(listener);
  };
  protoOf(SVGElementAttrsScope).h2m = function (listener) {
    this.v2y_1.h2m(listener);
  };
  function SvgPresentationAttrs() {
  }
  function Svg$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Svg($attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Defs$lambda($this_Defs, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Defs($this_Defs, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function RadialGradient$lambda($this_RadialGradient, $id, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      RadialGradient($this_RadialGradient, $id, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Stop$lambda($offset, $stopColor, $stopOpacity) {
    return function ($this$Stop) {
      var tmp0_safe_receiver = $offset._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$Stop.d30(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $stopColor._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$Stop.e30(tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $stopOpacity._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$Stop.f30(tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function Stop$lambda_0($this_Stop, $offset, $stopColor, $stopOpacity, $$changed, $$default) {
    return function ($composer, $force) {
      Stop($this_Stop, $offset._v, $stopColor._v, $stopOpacity._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Path$lambda($this_Path, $attrs, $$changed) {
    return function ($composer, $force) {
      Path($this_Path, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Circle$lambda($this_Circle, $attrs, $$changed) {
    return function ($composer, $force) {
      Circle($this_Circle, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Stop$lambda_1($this_Stop, $attrs, $$changed) {
    return function ($composer, $force) {
      Stop_0($this_Stop, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SVGStrokeLineCap_Round_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Round_instance;
  }
  function SVGFillType_None_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_None_instance;
  }
  function SVGFillType_CurrentColor_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_CurrentColor_instance;
  }
  function SVGStrokeType_None_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_None_instance;
  }
  function SVGStrokeType_CurrentColor_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_CurrentColor_instance;
  }
  var com_varabyte_kobweb_compose_dom_svg_SVGFilterElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFilterElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFilterAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEBlendElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEBlendAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFECompositeElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFECompositeAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFloodElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFloodAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEImageElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEImageAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncAElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncRElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncGElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncBElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETileElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETileAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceAttrsScope$stable;
  var com_varabyte_kobweb_compose_events_SyntheticEvent$stable;
  var com_varabyte_kobweb_compose_events_SyntheticTransitionEvent$stable;
  //region block: post-declaration
  protoOf(ComparableAttrsScope).b2m = classes;
  protoOf(ComparableAttrsScope).c2m = id;
  protoOf(ComparableAttrsScope).d2m = tabIndex;
  protoOf(ComparableAttrsScope).h2m = onClick;
  protoOf(DummyAttrsScope).b2m = classes;
  protoOf(DummyAttrsScope).c2m = id;
  protoOf(DummyAttrsScope).d2m = tabIndex;
  protoOf(DummyAttrsScope).h2m = onClick;
  protoOf(ComparableStyleScope).l2o = property;
  protoOf(ComparableStyleScope).m2o = property_0;
  protoOf(ComparableStyleScope).o2o = variable;
  protoOf(Companion_17).z2w = get_Visible;
  protoOf(Companion_17).a2x = get_Hidden;
  protoOf(Companion_17).b2x = get_Auto;
  protoOf(CalcScopeInstance).g2y = unaryMinus;
  protoOf(SVGGraphicalElementAttrsScope).w2y = stroke;
  protoOf(SVGGraphicalElementAttrsScope).m2z = strokeLineCap;
  protoOf(SVGGraphicalElementAttrsScope).a30 = strokeMiterLimit;
  protoOf(SVGGraphicalElementAttrsScope).x2y = strokeWidth;
  protoOf(SVGGraphicalElementAttrsScope).y2y = fill;
  protoOf(SVGGraphicalElementAttrsScope).n2z = fill_0;
  protoOf(SVGSvgAttrsScope).z2y = height;
  protoOf(SVGSvgAttrsScope).a2z = width_0;
  protoOf(SVGSvgAttrsScope).b2z = viewBox;
  protoOf(SVGCircleAttrsScope).f2z = cx;
  protoOf(SVGCircleAttrsScope).g2z = cy;
  //endregion
  //region block: init
  com_varabyte_kobweb_compose_attributes_ComparableAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_attributes_SyntheticEventListener$stable = 0;
  com_varabyte_kobweb_compose_attributes_TransitionEventListener$stable = 0;
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  com_varabyte_kobweb_compose_css_BorderImageNumericBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageSlice_Builder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageWidth_Builder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageOutset_Builder$stable = 8;
  Companion_instance_4 = new Companion_3();
  Companion_instance_5 = new Companion_4();
  com_varabyte_kobweb_compose_css_Edge$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeXOrCenter$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeX$stable = 0;
  com_varabyte_kobweb_compose_css_CenterX$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeXOffset$stable = 8;
  com_varabyte_kobweb_compose_css_EdgeYOrCenter$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeY$stable = 0;
  com_varabyte_kobweb_compose_css_CenterY$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeYOffset$stable = 8;
  com_varabyte_kobweb_compose_css_CSSPosition$stable = 0;
  com_varabyte_kobweb_compose_css_HueInterpolationMethod$stable = 0;
  com_varabyte_kobweb_compose_css_ColorInterpolationMethod_PolarColorSpace$stable = 0;
  com_varabyte_kobweb_compose_css_ColorInterpolationMethod$stable = 0;
  Companion_instance_6 = new Companion_5();
  com_varabyte_kobweb_compose_css_CssPropertyDeclaration$stable = 0;
  com_varabyte_kobweb_compose_css_ComparableStyleScope$stable = 8;
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  Companion_instance_9 = new Companion_8();
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_FitContent$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_MinMax$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Flex$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Inflexible$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Keyword$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Fixed$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_Repeat_Track$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry_Repeat_Auto$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry_Repeat$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry_LineNames$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry$stable = 0;
  com_varabyte_kobweb_compose_css_GridTrackBuilderInRepeat$stable = 8;
  com_varabyte_kobweb_compose_css_GridTrackBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_GridTemplate_SubgridBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_GridBuilderInAuto$stable = 8;
  com_varabyte_kobweb_compose_css_GridBuilder$stable = 8;
  Companion_instance_10 = new Companion_9();
  Companion_instance_11 = new Companion_10();
  com_varabyte_kobweb_compose_css_CSSLayerRuleDeclaration$stable = 8;
  Companion_instance_12 = new Companion_11();
  Companion_instance_13 = new Companion_12();
  Companion_instance_14 = new Companion_13();
  com_varabyte_kobweb_compose_css_CSSMargin$stable = 8;
  Companion_instance_15 = new Companion_14();
  Companion_instance_16 = new Companion_15();
  Companion_instance_17 = new Companion_16();
  Companion_instance_18 = new Companion_17();
  Companion_instance_19 = new Companion_18();
  com_varabyte_kobweb_compose_css_CSSScopeRuleDeclaration$stable = 8;
  Companion_instance_20 = new Companion_19();
  com_varabyte_kobweb_compose_css_StyleVariable_PropertyValue$stable = 8;
  com_varabyte_kobweb_compose_css_StyleVariable_NumberValue$stable = 8;
  com_varabyte_kobweb_compose_css_StyleVariable_StringValue$stable = 8;
  com_varabyte_kobweb_compose_css_StyleVariable$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariablePropertyProvider$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariableNumberProvider$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariableStringProvider$stable = 0;
  Companion_instance_21 = new Companion_20();
  Companion_instance_22 = new Companion_21();
  Companion_instance_23 = new Companion_22();
  Companion_instance_24 = new Companion_23();
  Companion_instance_25 = new Companion_24();
  Companion_instance_26 = new Companion_25();
  com_varabyte_kobweb_compose_css_functions_CalcScope_CalcNum$stable = 8;
  CalcScopeInstance_instance = new CalcScopeInstance();
  com_varabyte_kobweb_compose_css_functions_CSSFilter$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Simple$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Stop$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_StopRange$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Hint$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_functions_RepeatingGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient_Base$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient_ByDirection$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient_ByAngle$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Circle$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Ellipse$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_ConicGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_CSSClamp$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSMin$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSMax$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSUrl$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Simple$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Disposable$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_KeysToEffect$stable = 8;
  com_varabyte_kobweb_compose_dom_ElementRefScope_Builder$stable = 8;
  com_varabyte_kobweb_compose_dom_ElementRefScope$stable = 8;
  com_varabyte_kobweb_compose_dom_GenericElementBuilder$stable = 8;
  com_varabyte_kobweb_compose_dom_GenericNamespacedElementBuilder$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGTransformScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGElementAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_ViewBox$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGGraphicalElementAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGContainerElementAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGSvgAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGDefsAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGGradientAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGLinearGradientAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGRadialGradientAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGStopAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPatternAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGSymbolAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGUseAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGCircleAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGEllipseAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGGroupAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGImageAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGLineAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPathDataScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPathAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPolygonAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPolylineAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGRectAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGTextAttrsScope$stable = 8;
  Companion_instance_29 = new Companion_28();
  Companion_instance_30 = new Companion_29();
  Companion_instance_31 = new Companion_30();
  Companion_instance_32 = new Companion_31();
  Companion_instance_33 = new Companion_32();
  Companion_instance_34 = new Companion_33();
  Companion_instance_35 = new Companion_34();
  com_varabyte_kobweb_compose_dom_svg_SVGFilterElementAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFilterElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFilterAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEBlendElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEBlendAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFECompositeElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFECompositeAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFloodElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFloodAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEImageElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEImageAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncAElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncRElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncGElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncBElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFETileElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFETileAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_events_SyntheticEvent$stable = 8;
  com_varabyte_kobweb_compose_events_SyntheticTransitionEvent$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = calc;
  _.$_$.b = ComparableStyleScope;
  _.$_$.c = NumberValue;
  _.$_$.d = StyleVariable_3;
  _.$_$.e = StyleVariable_2;
  _.$_$.f = StyleVariable_1;
  _.$_$.g = StyleVariable_0;
  _.$_$.h = alignItems;
  _.$_$.i = appearance;
  _.$_$.j = ariaDisabled;
  _.$_$.k = ariaHidden;
  _.$_$.l = borderBottom;
  _.$_$.m = borderColor;
  _.$_$.n = borderColor_0;
  _.$_$.o = borderLeft;
  _.$_$.p = borderStyle;
  _.$_$.q = borderTop;
  _.$_$.r = borderWidth;
  _.$_$.s = boxShadow;
  _.$_$.t = boxSizing_0;
  _.$_$.u = colorScheme;
  _.$_$.v = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter;
  _.$_$.w = cursor;
  _.$_$.x = fontWeight;
  _.$_$.y = gridTemplateColumns_0;
  _.$_$.z = gridTemplateRows_0;
  _.$_$.a1 = grid;
  _.$_$.b1 = isNotEmpty;
  _.$_$.c1 = justifyContent;
  _.$_$.d1 = justifyItems;
  _.$_$.e1 = justifySelf;
  _.$_$.f1 = layer;
  _.$_$.g1 = listStyle;
  _.$_$.h1 = marginBlockEnd;
  _.$_$.i1 = marginBlockStart;
  _.$_$.j1 = marginBlock;
  _.$_$.k1 = objectFit;
  _.$_$.l1 = outline;
  _.$_$.m1 = overflowWrap;
  _.$_$.n1 = overflowX;
  _.$_$.o1 = overflowY;
  _.$_$.p1 = overflow;
  _.$_$.q1 = paddingInline;
  _.$_$.r1 = scope;
  _.$_$.s1 = scrollBehavior;
  _.$_$.t1 = setVariable;
  _.$_$.u1 = textAlign;
  _.$_$.v1 = textDecorationLine;
  _.$_$.w1 = transition;
  _.$_$.x1 = translateX;
  _.$_$.y1 = userSelect;
  _.$_$.z1 = verticalAlign;
  _.$_$.a2 = whiteSpace;
  _.$_$.b2 = Circle;
  _.$_$.c2 = Defs;
  _.$_$.d2 = Path;
  _.$_$.e2 = RadialGradient;
  _.$_$.f2 = Stop;
  _.$_$.g2 = Svg;
  _.$_$.h2 = com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter;
  _.$_$.i2 = GenericTag_0;
  _.$_$.j2 = GenericTag;
  _.$_$.k2 = com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter;
  _.$_$.l2 = registerRefScope;
  _.$_$.m2 = SVGFillType_CurrentColor_getInstance;
  _.$_$.n2 = SVGFillType_None_getInstance;
  _.$_$.o2 = SVGStrokeLineCap_Round_getInstance;
  _.$_$.p2 = SVGStrokeType_CurrentColor_getInstance;
  _.$_$.q2 = SVGStrokeType_None_getInstance;
  _.$_$.r2 = ComparableAttrsScope_init_$Create$;
  _.$_$.s2 = _SvgId___init__impl__pmt7ru;
  _.$_$.t2 = Companion_instance_0;
  _.$_$.u2 = Companion_instance_8;
  _.$_$.v2 = Companion_instance_4;
  _.$_$.w2 = Companion_instance_5;
  _.$_$.x2 = Companion_instance_6;
  _.$_$.y2 = Companion_instance_7;
  _.$_$.z2 = Companion_instance_9;
  _.$_$.a3 = Companion_instance_1;
  _.$_$.b3 = Companion_instance_2;
  _.$_$.c3 = Companion_instance_3;
  _.$_$.d3 = Companion_instance_14;
  _.$_$.e3 = Companion_instance_13;
  _.$_$.f3 = Companion_instance_15;
  _.$_$.g3 = Companion_instance_16;
  _.$_$.h3 = Companion_instance_17;
  _.$_$.i3 = Companion_instance_18;
  _.$_$.j3 = Companion_instance_19;
  _.$_$.k3 = Companion_instance_20;
  _.$_$.l3 = Companion_instance_21;
  _.$_$.m3 = Companion_instance_22;
  _.$_$.n3 = Companion_instance_25;
  _.$_$.o3 = Companion_instance_23;
  _.$_$.p3 = Companion_instance_12;
  _.$_$.q3 = Companion_instance_24;
  _.$_$.r3 = Companion_instance_32;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
