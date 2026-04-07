(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './html-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-html-core'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    globalThis['html-html-core'] = factory(typeof globalThis['html-html-core'] === 'undefined' ? {} : globalThis['html-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['html-internal-html-core-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var protoOf = kotlin_kotlin.$_$.y7;
  var asList = kotlin_kotlin.$_$.y2;
  var initMetadataForInterface = kotlin_kotlin.$_$.l7;
  var VOID = kotlin_kotlin.$_$.c;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var addAll = kotlin_kotlin.$_$.v2;
  var initMetadataForClass = kotlin_kotlin.$_$.i7;
  var charSequenceLength = kotlin_kotlin.$_$.x6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var ensureNotNull = kotlin_kotlin.$_$.wa;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j7;
  var initMetadataForObject = kotlin_kotlin.$_$.n7;
  var toString = kotlin_kotlin.$_$.z7;
  var hashCode = kotlin_kotlin.$_$.h7;
  var equals = kotlin_kotlin.$_$.b7;
  var getStringHashCode = kotlin_kotlin.$_$.g7;
  var toString_0 = kotlin_kotlin.$_$.cb;
  var numberToDouble = kotlin_kotlin.$_$.v7;
  var getNumberHashCode = kotlin_kotlin.$_$.e7;
  var defineProp = kotlin_kotlin.$_$.z6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var isInterface = kotlin_kotlin.$_$.q7;
  var objectCreate = kotlin_kotlin.$_$.x7;
  var getBooleanHashCode = kotlin_kotlin.$_$.c7;
  var Collection = kotlin_kotlin.$_$.m2;
  var getKClassFromExpression = kotlin_kotlin.$_$.g8;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.q;
  var listOfNotNull = kotlin_kotlin.$_$.c4;
  var joinToString = kotlin_kotlin.$_$.v3;
  var joinToString_0 = kotlin_kotlin.$_$.w3;
  var contains = kotlin_kotlin.$_$.u8;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.v;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.p;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.qa;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_androidx_compose_runtime_runtime.$_$.a1;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.c1;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var DisposableEffect = kotlin_androidx_compose_runtime_runtime.$_$.i;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.x;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var emptyList = kotlin_kotlin.$_$.l3;
  var copyToArray = kotlin_kotlin.$_$.i3;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.x5;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.o;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var KProperty1 = kotlin_kotlin.$_$.l8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.f7;
  var lazy = kotlin_kotlin.$_$.xa;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var DisposableEffect_0 = kotlin_androidx_compose_runtime_runtime.$_$.h;
  //endregion
  //region block: pre-declaration
  function onClick(listener) {
    this.e2m(new MouseEventListener('click', listener));
  }
  initMetadataForInterface(EventsListenerScope, 'EventsListenerScope');
  function classes(classes) {
    return this.z2l(asList(classes));
  }
  function id(value) {
    return this.x2l('id', value);
  }
  function tabIndex(value) {
    return this.x2l('tabindex', value.toString());
  }
  initMetadataForInterface(AttrsScope, 'AttrsScope', VOID, VOID, [EventsListenerScope]);
  initMetadataForClass(AttrsScopeBuilder, 'AttrsScopeBuilder', AttrsScopeBuilder, VOID, [AttrsScope, EventsListenerScope]);
  initMetadataForClass(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', EventsListenerScopeBuilder, VOID, [EventsListenerScope]);
  initMetadataForClass(SyntheticEventListener, 'SyntheticEventListener');
  initMetadataForClass(MouseEventListener, 'MouseEventListener', VOID, SyntheticEventListener);
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(CSSKeyframe, 'CSSKeyframe');
  initMetadataForObject(From, 'From', VOID, CSSKeyframe);
  initMetadataForObject(To, 'To', VOID, CSSKeyframe);
  initMetadataForInterface(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration');
  initMetadataForClass(CSSKeyframeRuleDeclaration, 'CSSKeyframeRuleDeclaration', VOID, VOID, [CSSStyledRuleDeclaration]);
  initMetadataForClass(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration');
  initMetadataForClass(Raw, 'Raw');
  initMetadataForClass(MediaFeature, 'MediaFeature');
  initMetadataForInterface(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration');
  initMetadataForClass(CSSMediaRuleDeclaration, 'CSSMediaRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForClass(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', VOID, VOID, [CSSStyledRuleDeclaration]);
  function property(propertyName, value, important) {
    var message = '!important is not supported by this implementation';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function property_0(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.p2n(propertyName, value);
  }
  function property_1(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.p2n(propertyName, value);
  }
  function variable(variableName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.t2n(variableName, value);
  }
  initMetadataForInterface(StyleScope, 'StyleScope');
  initMetadataForInterface(StyleHolder, 'StyleHolder');
  initMetadataForClass(StyleScopeBuilder, 'StyleScopeBuilder', StyleScopeBuilder, VOID, [StyleScope, StyleHolder]);
  initMetadataForClass(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', CSSRuleBuilderImpl, StyleScopeBuilder, [StyleScope, StyleScopeBuilder]);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(CSSUnitValueTyped, 'CSSUnitValueTyped');
  initMetadataForObject(Color, 'Color');
  initMetadataForClass(StylePropertyDeclaration, 'StylePropertyDeclaration');
  initMetadataForCompanion(Companion_7);
  function add(selector, style) {
    this.g2n(new CSSStyleRuleDeclaration(selector, style));
  }
  initMetadataForInterface(CSSRulesHolder, 'CSSRulesHolder');
  function returnUniversalSelector() {
    return get_Universal();
  }
  function returnHoverSelector() {
    return this.q2o();
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  initMetadataForInterface(SelectorsScope, 'SelectorsScope');
  function invoke(_this__u8e3s4, cssRule) {
    this.n2o(new RawSelector(_this__u8e3s4), cssRule);
  }
  function style(_this__u8e3s4, cssRule) {
    this.n2o(new RawSelector(_this__u8e3s4), cssRule);
  }
  initMetadataForInterface(GenericStyleSheetBuilder, 'GenericStyleSheetBuilder', VOID, VOID, [CSSRulesHolder, SelectorsScope]);
  function style_0(selector, cssRule) {
    this.l2o(selector, buildCSSStyleRule(cssRule));
  }
  initMetadataForInterface(StyleSheetBuilder, 'StyleSheetBuilder', VOID, VOID, [CSSRulesHolder, GenericStyleSheetBuilder]);
  initMetadataForClass(StyleSheet, 'StyleSheet', StyleSheet_init_$Create$, VOID, [StyleSheetBuilder, CSSRulesHolder]);
  initMetadataForClass(CSSRulesHolderState, 'CSSRulesHolderState', CSSRulesHolderState, VOID, [CSSRulesHolder]);
  initMetadataForClass(CSSSelector, 'CSSSelector');
  initMetadataForClass(RawSelector, 'RawSelector', VOID, CSSSelector);
  initMetadataForClass(PseudoClassInternal, 'PseudoClassInternal', VOID, CSSSelector);
  initMetadataForClass(CSSBorder, 'CSSBorder', CSSBorder);
  initMetadataForClass(DomElementWrapper, 'DomElementWrapper', VOID, DomNodeWrapper);
  initMetadataForClass(ElementScopeBase, 'ElementScopeBase');
  initMetadataForClass(ElementScopeImpl, 'ElementScopeImpl', ElementScopeImpl, ElementScopeBase);
  initMetadataForInterface(ElementBuilder, 'ElementBuilder');
  initMetadataForClass(ElementBuilderImplementation, 'ElementBuilderImplementation', VOID, VOID, [ElementBuilder]);
  initMetadataForClass(Style$$inlined$run$2$2$1);
  initMetadataForClass(SyntheticEvent, 'SyntheticEvent');
  initMetadataForClass(SyntheticMouseEvent, 'SyntheticMouseEvent', VOID, SyntheticEvent);
  //endregion
  var setInputValue;
  var setTextAreaDefaultValue;
  var setCheckedValue;
  function href(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.x2l('href', value);
  }
  function alt(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.x2l('alt', value);
  }
  function src(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.x2l('src', value);
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_instance;
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  var properties_initialized_Attrs_kt_uypsku;
  function _init_properties_Attrs_kt__w5qjhs() {
    if (!properties_initialized_Attrs_kt_uypsku) {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function AttrsScope() {
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.g2m_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.h2m_1 = LinkedHashMap_init_$Create$();
    this.i2m_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.j2m_1 = ArrayList_init_$Create$();
    this.k2m_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.l2m_1 = ArrayList_init_$Create$();
  }
  protoOf(AttrsScopeBuilder).z2l = function (classes) {
    this.l2m_1.r(classes);
  };
  protoOf(AttrsScopeBuilder).a2m = function (classes) {
    addAll(this.l2m_1, classes);
  };
  protoOf(AttrsScopeBuilder).y2l = function (builder) {
    // Inline function 'kotlin.apply' call
    builder(this.i2m_1);
  };
  protoOf(AttrsScopeBuilder).d2m = function (effect) {
    this.k2m_1 = effect;
  };
  protoOf(AttrsScopeBuilder).x2l = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.h2m_1.a2(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).m2m = function () {
    return this.h2m_1;
  };
  protoOf(AttrsScopeBuilder).e2m = function (listener) {
    this.g2m_1.e2m(listener);
  };
  protoOf(AttrsScopeBuilder).f2m = function (listener) {
    this.g2m_1.f2m(listener);
  };
  var org_jetbrains_compose_web_attributes_EventsListenerScopeBuilder$stable;
  function EventsListenerScope() {
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n2m_1 = ArrayList_init_$Create$();
  }
  protoOf(EventsListenerScopeBuilder).e2m = function (listener) {
    this.n2m_1.h(listener);
  };
  protoOf(EventsListenerScopeBuilder).o2m = function () {
    return this.n2m_1;
  };
  var org_jetbrains_compose_web_attributes_InputType_Button$stable;
  var org_jetbrains_compose_web_attributes_InputType_Checkbox$stable;
  var org_jetbrains_compose_web_attributes_InputType_Color$stable;
  var org_jetbrains_compose_web_attributes_InputType_Date$stable;
  var org_jetbrains_compose_web_attributes_InputType_DateTimeLocal$stable;
  var org_jetbrains_compose_web_attributes_InputType_Email$stable;
  var org_jetbrains_compose_web_attributes_InputType_File$stable;
  var org_jetbrains_compose_web_attributes_InputType_Hidden$stable;
  var org_jetbrains_compose_web_attributes_InputType_Month$stable;
  var org_jetbrains_compose_web_attributes_InputType_Number$stable;
  var org_jetbrains_compose_web_attributes_InputType_Password$stable;
  var org_jetbrains_compose_web_attributes_InputType_Radio$stable;
  var org_jetbrains_compose_web_attributes_InputType_Range$stable;
  var org_jetbrains_compose_web_attributes_InputType_Search$stable;
  var org_jetbrains_compose_web_attributes_InputType_Submit$stable;
  var org_jetbrains_compose_web_attributes_InputType_Tel$stable;
  var org_jetbrains_compose_web_attributes_InputType_Text$stable;
  var org_jetbrains_compose_web_attributes_InputType_Time$stable;
  var org_jetbrains_compose_web_attributes_InputType_Url$stable;
  var org_jetbrains_compose_web_attributes_InputType_Week$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeWithStringValue$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeWithUnitValue$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeCheckedValue$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeNumberValue$stable;
  var org_jetbrains_compose_web_attributes_InputType$stable;
  var org_jetbrains_compose_web_attributes_DirType_Ltr$stable;
  var org_jetbrains_compose_web_attributes_DirType_Rtl$stable;
  var org_jetbrains_compose_web_attributes_DirType_Auto$stable;
  var org_jetbrains_compose_web_attributes_DirType$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Self$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Top$stable;
  var org_jetbrains_compose_web_attributes_ATarget$stable;
  var org_jetbrains_compose_web_attributes_ARel_Alternate$stable;
  var org_jetbrains_compose_web_attributes_ARel_Author$stable;
  var org_jetbrains_compose_web_attributes_ARel_Bookmark$stable;
  var org_jetbrains_compose_web_attributes_ARel_External$stable;
  var org_jetbrains_compose_web_attributes_ARel_Help$stable;
  var org_jetbrains_compose_web_attributes_ARel_License$stable;
  var org_jetbrains_compose_web_attributes_ARel_Next$stable;
  var org_jetbrains_compose_web_attributes_ARel_First$stable;
  var org_jetbrains_compose_web_attributes_ARel_Prev$stable;
  var org_jetbrains_compose_web_attributes_ARel_Last$stable;
  var org_jetbrains_compose_web_attributes_ARel_NoFollow$stable;
  var org_jetbrains_compose_web_attributes_ARel_NoOpener$stable;
  var org_jetbrains_compose_web_attributes_ARel_NoReferrer$stable;
  var org_jetbrains_compose_web_attributes_ARel_Opener$stable;
  var org_jetbrains_compose_web_attributes_ARel_Search$stable;
  var org_jetbrains_compose_web_attributes_ARel_Tag$stable;
  var org_jetbrains_compose_web_attributes_ARel_CustomARel$stable;
  var org_jetbrains_compose_web_attributes_ARel$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Self$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Top$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Self$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Top$stable;
  var org_jetbrains_compose_web_attributes_FormTarget$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Self$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Top$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget$stable;
  var org_jetbrains_compose_web_attributes_SyntheticEventListener$stable;
  var org_jetbrains_compose_web_attributes_AnimationEventListener$stable;
  var org_jetbrains_compose_web_attributes_MouseEventListener$stable;
  var org_jetbrains_compose_web_attributes_MouseWheelEventListener$stable;
  var org_jetbrains_compose_web_attributes_KeyboardEventListener$stable;
  var org_jetbrains_compose_web_attributes_FocusEventListener$stable;
  var org_jetbrains_compose_web_attributes_TouchEventListener$stable;
  var org_jetbrains_compose_web_attributes_DragEventListener$stable;
  var org_jetbrains_compose_web_attributes_ClipboardEventListener$stable;
  var org_jetbrains_compose_web_attributes_InputEventListener$stable;
  var org_jetbrains_compose_web_attributes_ChangeEventListener$stable;
  var org_jetbrains_compose_web_attributes_SelectEventListener$stable;
  function SyntheticEventListener(event, listener) {
    this.p2m_1 = event;
    this.q2m_1 = listener;
    this.r2m_1 = this.p2m_1;
  }
  protoOf(SyntheticEventListener).t1z = function () {
    return this.r2m_1;
  };
  protoOf(SyntheticEventListener).s2m = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.q2m_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.s2m(event);
  };
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(MouseEventListener).s2m = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.q2m_1(new SyntheticMouseEvent(event));
  };
  protoOf(MouseEventListener).handleEvent = function (event) {
    return this.s2m(event);
  };
  var org_jetbrains_compose_web_attributes_builders_InputAttrsScope$stable;
  function get_controlledInputsValuesWeakMap() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var tmp;
    if (element.type === 'radio') {
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = element.name;
      tmp = charSequenceLength(this_0) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().u1(element.name)) {
        var tmp0 = get_controlledRadioGroups();
        var tmp2 = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        // Inline function 'kotlin.collections.set' call
        var value = LinkedHashSet_init_$Create$();
        tmp0.a2(tmp2, value);
      }
      ensureNotNull(get_controlledRadioGroups().w1(element.name)).h(element);
    }
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function _init_properties_InternalControlledInputUtils_kt__h0qaxa() {
    if (!properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      // Inline function 'kotlin.js.unsafeCast' call
      controlledInputsValuesWeakMap = new WeakMap();
      // Inline function 'kotlin.collections.mutableMapOf' call
      controlledRadioGroups = LinkedHashMap_init_$Create$();
    }
  }
  var androidx_compose_web_attributes_SelectAttrsScope$stable;
  var org_jetbrains_compose_web_attributes_builders_TextAreaAttrsScope$stable;
  var org_jetbrains_compose_web_css_CSSKeyframesRule$stable;
  var org_jetbrains_compose_web_css_CSSBuilderImpl$stable;
  var org_jetbrains_compose_web_css_GridAutoFlow$stable;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  var org_jetbrains_compose_web_css_CSSKeyframesRuleDeclaration$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_From$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_To$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_Percentage$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_Combine$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe$stable;
  var org_jetbrains_compose_web_css_CSSKeyframeRuleDeclaration$stable;
  var org_jetbrains_compose_web_css_CSSKeyframesBuilder$stable;
  function From() {
    From_instance = this;
    CSSKeyframe.call(this);
  }
  protoOf(From).toString = function () {
    return 'from';
  };
  var From_instance;
  function From_getInstance() {
    if (From_instance == null)
      new From();
    return From_instance;
  }
  function To() {
    To_instance = this;
    CSSKeyframe.call(this);
  }
  protoOf(To).toString = function () {
    return 'to';
  };
  var To_instance;
  function To_getInstance() {
    if (To_instance == null)
      new To();
    return To_instance;
  }
  function CSSKeyframe() {
  }
  function CSSKeyframeRuleDeclaration(keyframe, style) {
    this.w2m_1 = keyframe;
    this.x2m_1 = style;
  }
  protoOf(CSSKeyframeRuleDeclaration).y2m = function () {
    return this.x2m_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).z2m = function () {
    return this.w2m_1.toString();
  };
  protoOf(CSSKeyframeRuleDeclaration).toString = function () {
    return 'CSSKeyframeRuleDeclaration(keyframe=' + this.w2m_1.toString() + ', style=' + toString(this.x2m_1) + ')';
  };
  protoOf(CSSKeyframeRuleDeclaration).hashCode = function () {
    var result = hashCode(this.w2m_1);
    result = imul(result, 31) + hashCode(this.x2m_1) | 0;
    return result;
  };
  protoOf(CSSKeyframeRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframeRuleDeclaration))
      return false;
    if (!equals(this.w2m_1, other.w2m_1))
      return false;
    if (!equals(this.x2m_1, other.x2m_1))
      return false;
    return true;
  };
  function CSSKeyframesRuleDeclaration(name, keys) {
    this.a2n_1 = name;
    this.b2n_1 = keys;
  }
  protoOf(CSSKeyframesRuleDeclaration).z2m = function () {
    return '@keyframes ' + this.a2n_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).toString = function () {
    return 'CSSKeyframesRuleDeclaration(name=' + this.a2n_1 + ', keys=' + toString(this.b2n_1) + ')';
  };
  protoOf(CSSKeyframesRuleDeclaration).hashCode = function () {
    var result = getStringHashCode(this.a2n_1);
    result = imul(result, 31) + hashCode(this.b2n_1) | 0;
    return result;
  };
  protoOf(CSSKeyframesRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframesRuleDeclaration))
      return false;
    if (!(this.a2n_1 === other.a2n_1))
      return false;
    if (!equals(this.b2n_1, other.b2n_1))
      return false;
    return true;
  };
  var org_jetbrains_compose_web_css_CSSMediaQuery_Raw$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_MediaType$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_MediaFeature$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_NotFeature$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_And$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Not$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Combine$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Only$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Or$stable;
  var org_jetbrains_compose_web_css_CSSMediaRuleDeclaration$stable;
  function Raw(string) {
    this.c2n_1 = string;
  }
  protoOf(Raw).toString = function () {
    return this.c2n_1;
  };
  protoOf(Raw).hashCode = function () {
    return getStringHashCode(this.c2n_1);
  };
  protoOf(Raw).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Raw))
      return false;
    if (!(this.c2n_1 === other.c2n_1))
      return false;
    return true;
  };
  function MediaFeature(name, value) {
    value = value === VOID ? null : value;
    this.d2n_1 = name;
    this.e2n_1 = value;
  }
  protoOf(MediaFeature).equals = function (other) {
    var tmp;
    if (other instanceof MediaFeature) {
      tmp = (this.d2n_1 === other.d2n_1 && toString_0(this.e2n_1) === toString_0(other.e2n_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MediaFeature).toString = function () {
    var tmp;
    if (this.e2n_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = ': ' + toString(this.e2n_1) + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '(' + this.d2n_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function media(_this__u8e3s4, query, rulesBuild) {
    media_0(_this__u8e3s4, new Raw(query), rulesBuild);
  }
  function media_0(_this__u8e3s4, query, rulesBuild) {
    var rules = _this__u8e3s4.f2n(rulesBuild);
    _this__u8e3s4.g2n(new CSSMediaRuleDeclaration(query, rules));
  }
  function CSSMediaRuleDeclaration(query, rules) {
    this.h2n_1 = query;
    this.i2n_1 = rules;
  }
  protoOf(CSSMediaRuleDeclaration).j2n = function () {
    return this.i2n_1;
  };
  protoOf(CSSMediaRuleDeclaration).z2m = function () {
    return '@media ' + toString(this.h2n_1);
  };
  protoOf(CSSMediaRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSMediaRuleDeclaration) {
      tmp = (equals(this.i2n_1, other.i2n_1) && equals(this.h2n_1, other.h2n_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  var org_jetbrains_compose_web_css_CSSCalcValue$stable;
  function unaryMinus(_this__u8e3s4) {
    return new CSSUnitValueTyped(-_this__u8e3s4.value, _this__u8e3s4.unit);
  }
  var org_jetbrains_compose_web_css_CSSRuleBuilderImpl$stable;
  var org_jetbrains_compose_web_css_CSSStyleRuleDeclaration$stable;
  function CSSGroupingRuleDeclaration() {
  }
  function CSSStyledRuleDeclaration() {
  }
  function buildCSSStyleRule(cssRule) {
    var builder = new CSSRuleBuilderImpl();
    cssRule(builder);
    return builder;
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.k2n_1 = selector;
    this.l2n_1 = style;
  }
  protoOf(CSSStyleRuleDeclaration).y2m = function () {
    return this.l2n_1;
  };
  protoOf(CSSStyleRuleDeclaration).z2m = function () {
    return this.k2n_1.m2n();
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + toString(this.k2n_1) + ', style=' + toString(this.l2n_1) + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.k2n_1);
    result = imul(result, 31) + hashCode(this.l2n_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    if (!equals(this.k2n_1, other.k2n_1))
      return false;
    if (!equals(this.l2n_1, other.l2n_1))
      return false;
    return true;
  };
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
  }
  var org_jetbrains_compose_web_css_CSSUnitValueTyped$stable;
  function Companion_6() {
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function get_cssRem(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.rem' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'rem');
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function get_em(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.em' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'em');
  }
  function get_fr(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.fr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'fr');
  }
  function get_ms(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.ms' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'ms');
  }
  function CSSUnitValueTyped(value, unit) {
    this.x2n_1 = value;
    this.y2n_1 = unit;
    delete this.value;
    delete this.unit;
  }
  protoOf(CSSUnitValueTyped).t1 = function () {
    return this.x2n_1;
  };
  protoOf(CSSUnitValueTyped).z2n = function () {
    return this.y2n_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.x2n_1 + toString(this.y2n_1);
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.x2n_1);
    result = imul(result, 31) + hashCode(this.y2n_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    if (!equals(this.x2n_1, other.x2n_1))
      return false;
    if (!equals(this.y2n_1, other.y2n_1))
      return false;
    return true;
  };
  var org_jetbrains_compose_web_css_Color_RGB$stable;
  var org_jetbrains_compose_web_css_Color_RGBA$stable;
  var org_jetbrains_compose_web_css_Color_HSL$stable;
  var org_jetbrains_compose_web_css_Color_HSLA$stable;
  var org_jetbrains_compose_web_css_Color$stable;
  function Color() {
  }
  var Color_instance;
  function Color_getInstance() {
    return Color_instance;
  }
  function Color_0(name) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return name;
  }
  var org_jetbrains_compose_web_css_CSSStyleVariable$stable;
  var org_jetbrains_compose_web_css_StyleScopeBuilder$stable;
  var org_jetbrains_compose_web_css_StylePropertyDeclaration$stable;
  function StyleScope() {
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n2n_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.o2n_1 = ArrayList_init_$Create$();
  }
  protoOf(StyleScopeBuilder).v2n = function () {
    return this.n2n_1;
  };
  protoOf(StyleScopeBuilder).w2n = function () {
    return this.o2n_1;
  };
  protoOf(StyleScopeBuilder).q2n = function (propertyName, value, important) {
    this.v2n().h(new StylePropertyDeclaration(propertyName, value, important));
  };
  protoOf(StyleScopeBuilder).p2n = function (propertyName, value) {
    this.q2n(propertyName, value, false);
  };
  protoOf(StyleScopeBuilder).t2n = function (variableName, value) {
    this.w2n().h(StylePropertyDeclaration_init_$Create$(variableName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = (nativeEquals(this.v2n(), other.v2n()) && nativeEquals(this.w2n(), other.w2n()));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function StyleHolder() {
  }
  function StylePropertyDeclaration_init_$Init$(name, value, $this) {
    StylePropertyDeclaration.call($this, name, value, false);
    return $this;
  }
  function StylePropertyDeclaration_init_$Create$(name, value) {
    return StylePropertyDeclaration_init_$Init$(name, value, objectCreate(protoOf(StylePropertyDeclaration)));
  }
  function StylePropertyDeclaration(name, value, important) {
    this.a2o_1 = name;
    this.b2o_1 = value;
    this.c2o_1 = important;
  }
  protoOf(StylePropertyDeclaration).le = function () {
    return this.a2o_1;
  };
  protoOf(StylePropertyDeclaration).me = function () {
    return this.b2o_1;
  };
  protoOf(StylePropertyDeclaration).d2o = function () {
    return this.c2o_1;
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.a2o_1 + ', value=' + toString(this.b2o_1) + ', important=' + this.c2o_1 + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.a2o_1);
    result = imul(result, 31) + hashCode(this.b2o_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.c2o_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    if (!(this.a2o_1 === other.a2o_1))
      return false;
    if (!equals(this.b2o_1, other.b2o_1))
      return false;
    if (!(this.c2o_1 === other.c2o_1))
      return false;
    return true;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.n() === properties.n()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = _this__u8e3s4.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var otherProp = properties.m(_unary__edvuaz);
        if (!(element.a2o_1 === otherProp.a2o_1 && element.c2o_1 === otherProp.c2o_1 && toString(element.b2o_1) === toString(otherProp.b2o_1))) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  var org_jetbrains_compose_web_css_CSSRulesHolderState$stable;
  var org_jetbrains_compose_web_css_StyleSheet_CSSSelfSelector$stable;
  var org_jetbrains_compose_web_css_StyleSheet$stable;
  function org_jetbrains_compose_web_css_StyleSheet$stableprop_getter() {
    return org_jetbrains_compose_web_css_StyleSheet$stable;
  }
  function StyleSheet_init_$Init$(rulesHolder, usePrefix, $this) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    usePrefix = usePrefix === VOID ? true : usePrefix;
    StyleSheet.call($this, usePrefix ? null : '', rulesHolder);
    return $this;
  }
  function StyleSheet_init_$Create$(rulesHolder, usePrefix) {
    return StyleSheet_init_$Init$(rulesHolder, usePrefix, objectCreate(protoOf(StyleSheet)));
  }
  function Companion_7() {
    this.e2o_1 = 0;
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function StyleSheet(customPrefix, rulesHolder) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    this.f2o_1 = rulesHolder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.g2o_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    tmp_0.h2o_1 = customPrefix == null ? '' + getKClassFromExpression(this).t9() + '-' : customPrefix;
    this.i2o_1 = customPrefix == null;
  }
  protoOf(StyleSheet).j2o = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    rulesBuild(this_0);
    return this_0.k2o();
  };
  protoOf(StyleSheet).f2n = function (rulesBuild) {
    return this.j2o(rulesBuild);
  };
  protoOf(StyleSheet).k2o = function () {
    return this.f2o_1.k2o();
  };
  protoOf(StyleSheet).g2n = function (cssRule) {
    this.f2o_1.g2n(cssRule);
  };
  protoOf(StyleSheet).l2o = function (selector, style) {
    this.f2o_1.l2o(selector, style);
  };
  protoOf(StyleSheet).n2o = function (selector, cssRule) {
    return this.m2o(selector, cssRule);
  };
  function CSSRulesHolderState() {
    this.r2o_1 = mutableStateListOf();
  }
  protoOf(CSSRulesHolderState).k2o = function () {
    return this.r2o_1;
  };
  protoOf(CSSRulesHolderState).g2n = function (cssRule) {
    this.r2o_1.bl(cssRule);
  };
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  var org_jetbrains_compose_web_css_PseudoClassInternal_Lang$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_NthChild$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_NthLastChild$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_NthOfType$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_NthLastOfType$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_Host$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_Not$stable;
  var org_jetbrains_compose_web_css_PseudoElementInternal_Slotted$stable;
  var org_jetbrains_compose_web_css_StyleSheetBuilderImpl$stable;
  function GenericStyleSheetBuilder() {
  }
  function StyleSheetBuilder() {
  }
  function CSSRulesHolder() {
  }
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.s2o_1 = selector;
  }
  protoOf(RawSelector).toString = function () {
    return this.s2o_1;
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.s2o_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    if (!(this.s2o_1 === other.s2o_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.t2o_1 = name;
  }
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = (this.t2o_1 === other.t2o_1 && this.u2o() == other.u2o());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).u2o = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.u2o();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.t2o_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
      org_jetbrains_compose_web_css_PseudoClassInternal_Lang$stable = 0;
      org_jetbrains_compose_web_css_PseudoClassInternal_NthChild$stable = 8;
      org_jetbrains_compose_web_css_PseudoClassInternal_NthLastChild$stable = 8;
      org_jetbrains_compose_web_css_PseudoClassInternal_NthOfType$stable = 8;
      org_jetbrains_compose_web_css_PseudoClassInternal_NthLastOfType$stable = 8;
      org_jetbrains_compose_web_css_PseudoClassInternal_Host$stable = 0;
      org_jetbrains_compose_web_css_PseudoClassInternal_Not$stable = 0;
      org_jetbrains_compose_web_css_PseudoElementInternal_Slotted$stable = 0;
      org_jetbrains_compose_web_css_StyleSheetBuilderImpl$stable = 8;
    }
  }
  var org_jetbrains_compose_web_css_CSSAnimation$stable;
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('background-color', value);
  }
  var org_jetbrains_compose_web_css_CSSBorder$stable;
  function border(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    border_0(_this__u8e3s4, border$lambda(width, style, color));
  }
  function borderRadius(_this__u8e3s4, r) {
    _this__u8e3s4.p2n('border-radius', r);
  }
  function CSSBorder() {
    this.v2o_1 = null;
    this.w2o_1 = null;
    this.x2o_1 = null;
  }
  protoOf(CSSBorder).equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.v2o_1, other.v2o_1) && equals(this.w2o_1, other.w2o_1) && equals(this.x2o_1, other.x2o_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSBorder).toString = function () {
    var values = listOfNotNull([this.v2o_1, this.w2o_1, this.x2o_1]);
    return joinToString(values, ' ');
  };
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.v2o_1 = size;
  }
  function style_1(_this__u8e3s4, style) {
    _this__u8e3s4.w2o_1 = style;
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.x2o_1 = color;
  }
  function border_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.p2n('border', this_0);
  }
  function border$lambda($width, $style, $color) {
    return function ($this$border) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        width($this$border, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        style_1($this$border, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        color($this$border, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function width_0(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('height', value);
  }
  function minWidth(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('min-width', value);
  }
  function minHeight(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('min-height', value);
  }
  function boxSizing(_this__u8e3s4, value) {
    _this__u8e3s4.r2n('box-sizing', value);
  }
  function maxWidth(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('max-width', value);
  }
  function color_0(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('color', value);
  }
  function flexGrow(_this__u8e3s4, value) {
    _this__u8e3s4.s2n('flex-grow', value);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.r2n('align-items', alignItems);
  }
  function alignSelf(_this__u8e3s4, alignSelf) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.r2n('align-self', alignSelf);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.r2n('flex-direction', flexDirection);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.r2n('justify-content', justifyContent);
  }
  function gap(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('gap', value);
  }
  function gridTemplateColumns(_this__u8e3s4, value) {
    _this__u8e3s4.r2n('grid-template-columns', value);
  }
  function gridRow(_this__u8e3s4, start, end) {
    _this__u8e3s4.r2n('grid-row', '' + start + ' / ' + end);
  }
  function gridTemplateRows(_this__u8e3s4, value) {
    _this__u8e3s4.r2n('grid-template-rows', value);
  }
  function gridArea(_this__u8e3s4, rowStart, columnStart) {
    _this__u8e3s4.r2n('grid-area', rowStart + ' / ' + columnStart);
  }
  function columnGap(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('column-gap', value);
  }
  function rowGap(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('row-gap', value);
  }
  function gridAutoColumns(_this__u8e3s4, value) {
    _this__u8e3s4.r2n('grid-auto-columns', value);
  }
  function gridAutoRows(_this__u8e3s4, value) {
    _this__u8e3s4.r2n('grid-auto-rows', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.r2n('margin', joinToString_0(value, ' '));
  }
  function marginBottom(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('margin-bottom', value);
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.r2n('padding', joinToString_0(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.r2n('position', position);
  }
  function top(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('top', value);
  }
  function left(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('left', value);
  }
  function right(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('right', value);
  }
  function bottom(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('bottom', value);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.r2n('display', displayStyle);
  }
  function opacity(_this__u8e3s4, value) {
    _this__u8e3s4.s2n('opacity', value);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.p2n('font-size', value);
  }
  function lineHeight(_this__u8e3s4, value) {
    _this__u8e3s4.r2n('line-height', value);
  }
  function textAlign(_this__u8e3s4, value) {
    _this__u8e3s4.r2n('text-align', value);
  }
  function fontFamily(_this__u8e3s4, value) {
    _this__u8e3s4.r2n('font-family', joinToString_0(value, ', ', VOID, VOID, VOID, VOID, fontFamily$lambda));
  }
  function fontWeight(_this__u8e3s4, value) {
    _this__u8e3s4.s2n('font-weight', value);
  }
  function fontFamily$lambda(it) {
    return contains(it, ' ') ? '"' + it + '"' : it;
  }
  var org_jetbrains_compose_web_css_Transition$stable;
  var org_jetbrains_compose_web_css_Transitions$stable;
  function CSSSelector() {
  }
  protoOf(CSSSelector).m2n = function () {
    return toString(this);
  };
  function TagElement(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-410614847);
    sourceInformation($composer_0, 'C(TagElement)P(2)111@3506L42,114@3642L1030:Base.kt#97hrze');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.p13(elementBuilder) : $composer_0.s13(elementBuilder)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(applyAttrs) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.s13(content) ? 256 : 128);
    if ($composer_0.u13(!(($dirty & 147) === 146), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-410614847, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement (Base.kt:110)');
      }
      sourceInformationMarkerStart($composer_0, 536130251, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value = new ElementScopeImpl();
        this_0.o13(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var scope = tmp0_group;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1356037561, 'CC(ComposeDomNode)P(3,2)32@1123L41,35@1232L20:Base.kt#97hrze');
      $composer_1.i13();
      if ($composer_1.r12()) {
        var tmp_1 = $composer_1;
        tmp_1.j13(TagElement$lambda(elementBuilder, scope));
      } else {
        $composer_1.k13();
      }
      var tmp0 = _SkippableUpdater___init__impl__4ft0t9($composer_1);
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -123012359, 'C:Base.kt#97hrze');
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.k2m_1;
      $composer_2.w12(-1389436843);
      sourceInformation($composer_2, '*127@4091L32,128@4168L42,129@4254L30,132@4405L39,134@4511L35');
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne(tmp0).u12(509942095);
      var $this$update = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne(tmp0));
      sourceInformationMarkerStart($composer_2, 1723456829, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_2.n13();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().p12_1) {
        var value_0 = DomElementWrapper$updateClasses$ref();
        $composer_2.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Updater__set_impl_v7kwss($this$update, attrsScope.l2m_1, tmp0_group_0);
      sourceInformationMarkerStart($composer_2, 1723459303, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_2.n13();
      var tmp_4;
      if (false || it_1 === Companion_getInstance().p12_1) {
        var value_1 = DomElementWrapper$updateStyleDeclarations$ref();
        $composer_2.o13(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Updater__set_impl_v7kwss($this$update, attrsScope.i2m_1, tmp1_group);
      var tmp_6 = attrsScope.m2m();
      sourceInformationMarkerStart($composer_2, 1723462043, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_2 = $composer_2.n13();
      var tmp_7;
      if (false || it_2 === Companion_getInstance().p12_1) {
        var value_2 = DomElementWrapper$updateAttrs$ref();
        $composer_2.o13(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Updater__set_impl_v7kwss($this$update, tmp_6, tmp2_group);
      var tmp_9 = attrsScope.g2m_1.o2m();
      sourceInformationMarkerStart($composer_2, 1723466884, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_3 = $composer_2.n13();
      var tmp_10;
      if (false || it_3 === Companion_getInstance().p12_1) {
        var value_3 = DomElementWrapper$updateEventListeners$ref();
        $composer_2.o13(value_3);
        tmp_10 = value_3;
      } else {
        tmp_10 = it_3;
      }
      var tmp_11 = tmp_10;
      var tmp3_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Updater__set_impl_v7kwss($this$update, tmp_9, tmp3_group);
      sourceInformationMarkerStart($composer_2, 1723470272, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_4 = $composer_2.n13();
      var tmp_12;
      if (false || it_4 === Companion_getInstance().p12_1) {
        var value_4 = DomElementWrapper$updateProperties$ref();
        $composer_2.o13(value_4);
        tmp_12 = value_4;
      } else {
        tmp_12 = it_4;
      }
      var tmp_13 = tmp_12;
      var tmp4_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Updater__set_impl_v7kwss($this$update, attrsScope.j2m_1, tmp4_group);
      _SkippableUpdater___get_composer__impl__6t7yne(tmp0).v12();
      $composer_2.x12();
      sourceInformationMarkerEnd($composer_2);
      $composer_1.u12(2058660585);
      var $changed_0 = 8 & 0 >> 3 | 14 & 0 >> 3 | 112 & 0 >> 6;
      var $composer_3 = $composer_1;
      sourceInformationMarkerStart($composer_3, -247057115, 'C:Base.kt#97hrze');
      if (content == null) {
        $composer_3.w12(-247048468);
        $composer_3.x12();
      } else {
        $composer_3.w12(-1670537291);
        sourceInformation($composer_3, '139@4644L12');
        content(scope, $composer_3, 14 & $changed_0 | 112 & $dirty >> 3);
        $composer_3.x12();
      }
      sourceInformationMarkerEnd($composer_3);
      $composer_1.v12();
      $composer_1.l13();
      sourceInformationMarkerEnd($composer_1);
      var tmp0_safe_receiver = refEffect;
      if (tmp0_safe_receiver == null) {
        $composer_0.w12(-558655727);
        $composer_0.x12();
      } else {
        $composer_0.w12(-558655726);
        sourceInformation($composer_0, '*144@4736L58,144@4713L81');
        // Inline function 'kotlin.let' call
        sourceInformationMarkerStart($composer_0, 263239824, 'CC(remember):Base.kt#9igjgp');
        var tmp0_0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.p13(tmp0_safe_receiver) | $composer_0.s13(scope));
        // Inline function 'kotlin.let' call
        var it_5 = tmp0_0.n13();
        var tmp_14;
        if (invalid || it_5 === Companion_getInstance().p12_1) {
          var value_5 = TagElement$lambda_0(tmp0_safe_receiver, scope);
          tmp0_0.o13(value_5);
          tmp_14 = value_5;
        } else {
          tmp_14 = it_5;
        }
        var tmp_15 = tmp_14;
        var tmp0_group_1 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DisposableEffect(null, tmp0_group_1, $composer_0, 6);
        $composer_0.x12();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp1_safe_receiver = $composer_0.d13();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.z1n(TagElement$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.z2o_1 = node;
    this.a2p_1 = emptyList();
  }
  protoOf(DomElementWrapper).m2k = function () {
    return this.z2o_1;
  };
  protoOf(DomElementWrapper).b2p = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.a2p_1.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      this.z2o_1.removeEventListener(element.t1z(), element);
    }
    this.a2p_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.a2p_1.i();
    while (_iterator__ex2g4s_0.j()) {
      var element_0 = _iterator__ex2g4s_0.k();
      this.z2o_1.addEventListener(element_0.t1z(), element_0);
    }
  };
  protoOf(DomElementWrapper).c2p = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = applicators.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var applicator = element.le();
      var item = element.me();
      applicator(this.z2o_1, item);
    }
  };
  protoOf(DomElementWrapper).d2p = function (styleApplier) {
    var tmp0_subject = this.z2o_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.z2o_1.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.z2o_1.style;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = styleApplier.v2n().i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var name = element.le();
        var value = element.me();
        var important = element.d2o();
        style.setProperty(name, toString(value), important ? 'important' : '');
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = styleApplier.w2n().i();
      while (_iterator__ex2g4s_0.j()) {
        var element_0 = _iterator__ex2g4s_0.k();
        var name_0 = element_0.le();
        var value_0 = element_0.me();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).e2p = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.z2o_1.getAttributeNames();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      switch (element) {
        case 'style':
        case 'class':
          break;
        default:
          this.z2o_1.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = attrs.z1().i();
    while (_iterator__ex2g4s.j()) {
      var element_0 = _iterator__ex2g4s.k();
      this.z2o_1.setAttribute(element_0.s1(), element_0.t1());
    }
  };
  protoOf(DomElementWrapper).f2p = function (classes) {
    this.z2o_1.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.l()) {
      var tmp = this.z2o_1.classList;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  function TagElement$lambda($elementBuilder, $scope) {
    return function () {
      var node = $elementBuilder.g1x();
      $scope.i2p(node);
      return new DomElementWrapper(node);
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.f2p(p1);
      return Unit_instance;
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.d2p(p1);
      return Unit_instance;
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.e2p(p1);
      return Unit_instance;
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.b2p(p1);
      return Unit_instance;
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.c2p(p1);
      return Unit_instance;
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$lambda_0($effect, $scope) {
    return function ($this$DisposableEffect) {
      return $effect($this$DisposableEffect, $scope.j2p());
    };
  }
  function TagElement$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_jetbrains_compose_web_dom_ElementScopeBase$stable;
  var org_jetbrains_compose_web_dom_ElementScopeImpl$stable;
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
  }
  protoOf(ElementScopeImpl).i2p = function (_set____db54di) {
    this.h2p_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).j2p = function () {
    var tmp = this.h2p_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).w2l = function (_this__u8e3s4) {
    return this.j2p();
  };
  function ElementScopeBase() {
    this.k2p_1 = 0;
  }
  var Address;
  function get_Article() {
    _init_properties_Elements_kt__eyv5nt();
    return Article;
  }
  var Article;
  var Aside;
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Param;
  var Picture;
  var Source;
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
  function get_A() {
    _init_properties_Elements_kt__eyv5nt();
    return A;
  }
  var A;
  var Input;
  function get_Button() {
    _init_properties_Elements_kt__eyv5nt();
    return Button;
  }
  var Button;
  function get_H1() {
    _init_properties_Elements_kt__eyv5nt();
    return H1;
  }
  var H1;
  function get_H2() {
    _init_properties_Elements_kt__eyv5nt();
    return H2;
  }
  var H2;
  function get_H3() {
    _init_properties_Elements_kt__eyv5nt();
    return H3;
  }
  var H3;
  function get_H4() {
    _init_properties_Elements_kt__eyv5nt();
    return H4;
  }
  var H4;
  var H5;
  var H6;
  function get_P() {
    _init_properties_Elements_kt__eyv5nt();
    return P;
  }
  var P;
  function get_Em() {
    _init_properties_Elements_kt__eyv5nt();
    return Em;
  }
  var Em;
  var I;
  var B;
  var Small;
  var Sup;
  var Sub;
  var Blockquote;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  var Br;
  function get_Ul() {
    _init_properties_Elements_kt__eyv5nt();
    return Ul;
  }
  var Ul;
  var Ol;
  function get_Li() {
    _init_properties_Elements_kt__eyv5nt();
    return Li;
  }
  var Li;
  function get_Img() {
    _init_properties_Elements_kt__eyv5nt();
    return Img;
  }
  var Img;
  var Form;
  var Select;
  var Option;
  var OptGroup;
  function get_Section() {
    _init_properties_Elements_kt__eyv5nt();
    return Section;
  }
  var Section;
  var TextArea;
  function get_Nav() {
    _init_properties_Elements_kt__eyv5nt();
    return Nav;
  }
  var Nav;
  function get_Pre() {
    _init_properties_Elements_kt__eyv5nt();
    return Pre;
  }
  var Pre;
  function get_Code() {
    _init_properties_Elements_kt__eyv5nt();
    return Code;
  }
  var Code;
  function get_Main() {
    _init_properties_Elements_kt__eyv5nt();
    return Main;
  }
  var Main;
  function get_Footer() {
    _init_properties_Elements_kt__eyv5nt();
    return Footer;
  }
  var Footer;
  function get_Hr() {
    _init_properties_Elements_kt__eyv5nt();
    return Hr;
  }
  var Hr;
  var Label;
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  var Tr;
  var Thead;
  var Th;
  var Td;
  var Tbody;
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function Text_0(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1813500779);
    sourceInformation($composer_0, 'C(Text)484@16497L47,483@16438L207:Elements.kt#97hrze');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(value) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1813500779, $dirty, -1, 'org.jetbrains.compose.web.dom.Text (Elements.kt:482)');
      }
      sourceInformationMarkerStart($composer_0, 982476452, 'CC(remember):Elements.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.n13();
      var tmp;
      if (false || it === Companion_getInstance().p12_1) {
        var value_0 = Text$lambda;
        this_0.o13(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'androidx.compose.runtime.ComposeNode' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1886828752, 'CC(ComposeNode):Composables.kt#9igjgp');
      var tmp_1 = $composer_1.q12();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_1.i13();
      if ($composer_1.r12()) {
        $composer_1.j13(tmp0_group);
      } else {
        $composer_1.k13();
      }
      var $this$ComposeNode = _Updater___init__impl__rbfxm8($composer_1);
      Updater__set_impl_v7kwss($this$ComposeNode, value, Text$lambda_0);
      $composer_1.l13();
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp1_safe_receiver = $composer_0.d13();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.z1n(Text$lambda_1(value, $changed));
    }
  }
  function Div_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-2046833685);
    sourceInformation($composer_0, 'C(Div)496@16785L101:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-2046833685, $dirty, -1, 'org.jetbrains.compose.web.dom.Div (Elements.kt:495)');
      }
      TagElement(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Div$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function ElementBuilder() {
  }
  function _get_el__ndc0ck($this) {
    var tmp0 = $this.m2p_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('el', 1, tmp, ElementBuilderImplementation$_get_el_$ref_ff87uu(), null);
    return tmp0.t1();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.l2p_1);
    };
  }
  function ElementBuilderImplementation$_get_el_$ref_ff87uu() {
    return function (p0) {
      return _get_el__ndc0ck(p0);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.l2p_1 = tagName;
    var tmp = this;
    tmp.m2p_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).g1x = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function H1_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1206885823);
    sourceInformation($composer_0, 'C(H1)533@17670L70:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1206885823, $dirty, -1, 'org.jetbrains.compose.web.dom.H1 (Elements.kt:533)');
      }
      TagElement(get_H1(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(H1$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function P_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1218237686);
    sourceInformation($composer_0, 'C(P)569@18939L69:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1218237686, $dirty, -1, 'org.jetbrains.compose.web.dom.P (Elements.kt:569)');
      }
      TagElement(get_P(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(P$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H2_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1233735936);
    sourceInformation($composer_0, 'C(H2)539@17881L70:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1233735936, $dirty, -1, 'org.jetbrains.compose.web.dom.H2 (Elements.kt:539)');
      }
      TagElement(get_H2(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(H2$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H3_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(620609601);
    sourceInformation($composer_0, 'C(H3)545@18092L70:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(620609601, $dirty, -1, 'org.jetbrains.compose.web.dom.H3 (Elements.kt:545)');
      }
      TagElement(get_H3(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(H3$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H4_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1820012158);
    sourceInformation($composer_0, 'C(H4)551@18303L70:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1820012158, $dirty, -1, 'org.jetbrains.compose.web.dom.H4 (Elements.kt:551)');
      }
      TagElement(get_H4(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(H4$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Ul_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1078935283);
    sourceInformation($composer_0, 'C(Ul)627@20899L70:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1078935283, $dirty, -1, 'org.jetbrains.compose.web.dom.Ul (Elements.kt:627)');
      }
      TagElement(get_Ul(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Ul$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Pre_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1869041539);
    sourceInformation($composer_0, 'C(Pre)799@25483L101:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1869041539, $dirty, -1, 'org.jetbrains.compose.web.dom.Pre (Elements.kt:798)');
      }
      TagElement(get_Pre(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Pre$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Code_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(654669923);
    sourceInformation($composer_0, 'C(Code)811@25719L102:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(654669923, $dirty, -1, 'org.jetbrains.compose.web.dom.Code (Elements.kt:810)');
      }
      TagElement(get_Code(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Code$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Li_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-18366605);
    sourceInformation($composer_0, 'C(Li)639@21307L70:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-18366605, $dirty, -1, 'org.jetbrains.compose.web.dom.Li (Elements.kt:639)');
      }
      TagElement(get_Li(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Li$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Em_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(143025246);
    sourceInformation($composer_0, 'C(Em)575@19135L70:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(143025246, $dirty, -1, 'org.jetbrains.compose.web.dom.Em (Elements.kt:575)');
      }
      TagElement(get_Em(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Em$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Footer_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1264215569);
    sourceInformation($composer_0, 'C(Footer)835@26195L104:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1264215569, $dirty, -1, 'org.jetbrains.compose.web.dom.Footer (Elements.kt:834)');
      }
      TagElement(get_Footer(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Footer$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function A_0(href, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var href_0 = {_v: href};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1783231114);
    sourceInformation($composer_0, 'C(A)P(2)511@17117L160,509@17056L254:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(href_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 256 : 128);
    if ($composer_0.u13(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        href_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1783231114, $dirty, -1, 'org.jetbrains.compose.web.dom.A (Elements.kt:508)');
      }
      var tmp = get_A();
      sourceInformationMarkerStart($composer_0, -6843510, 'CC(remember):Elements.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 14) === 4 | ($dirty & 112) === 32);
      // Inline function 'kotlin.let' call
      var it = tmp0.n13();
      var tmp_0;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = A$lambda(href_0, attrs_0);
        tmp0.o13(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TagElement(tmp, tmp0_group, content_0._v, $composer_0, 896 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp1_safe_receiver = $composer_0.d13();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.z1n(A$lambda_0(href_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Span_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1254704640);
    sourceInformation($composer_0, 'C(Span)617@20546L72:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1254704640, $dirty, -1, 'org.jetbrains.compose.web.dom.Span (Elements.kt:617)');
      }
      TagElement(get_Span(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Span$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Nav_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1921726723);
    sourceInformation($composer_0, 'C(Nav)788@25260L85:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1921726723, $dirty, -1, 'org.jetbrains.compose.web.dom.Nav (Elements.kt:788)');
      }
      TagElement(get_Nav(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Nav$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Button_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(686179432);
    sourceInformation($composer_0, 'C(Button)527@17455L74:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(686179432, $dirty, -1, 'org.jetbrains.compose.web.dom.Button (Elements.kt:527)');
      }
      TagElement(get_Button(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Button$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Img_0(src, alt, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var alt_0 = {_v: alt};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(140604733);
    sourceInformation($composer_0, 'C(Img)P(2)648@21554L92,646@21499L169:Elements.kt#97hrze');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p13(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.p13(alt_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 256 : 128);
    if ($composer_0.u13(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(140604733, $dirty, -1, 'org.jetbrains.compose.web.dom.Img (Elements.kt:646)');
      }
      var tmp = get_Img();
      sourceInformationMarkerStart($composer_0, 1977167545, 'CC(remember):Elements.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(($dirty & 14) === 4 | ($dirty & 112) === 32) | ($dirty & 896) === 256);
      // Inline function 'kotlin.let' call
      var it = tmp0.n13();
      var tmp_0;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = Img$lambda(src, alt_0, attrs_0);
        tmp0.o13(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TagElement(tmp, tmp0_group, null, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp1_safe_receiver = $composer_0.d13();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.z1n(Img$lambda_0(src, alt_0, attrs_0, $changed, $default));
    }
  }
  function Section_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-2128013761);
    sourceInformation($composer_0, 'C(Section)725@23207L89:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-2128013761, $dirty, -1, 'org.jetbrains.compose.web.dom.Section (Elements.kt:725)');
      }
      TagElement(get_Section(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Section$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Main_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1720209199);
    sourceInformation($composer_0, 'C(Main)823@25956L102:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1720209199, $dirty, -1, 'org.jetbrains.compose.web.dom.Main (Elements.kt:822)');
      }
      TagElement(get_Main(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Main$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Article_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(-1853093488);
    sourceInformation($composer_0, 'C(Article)197@10487L105:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(content_0._v) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1853093488, $dirty, -1, 'org.jetbrains.compose.web.dom.Article (Elements.kt:196)');
      }
      TagElement(get_Article(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Article$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Hr_0(attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(1499320512);
    sourceInformation($composer_0, 'C(Hr)846@26384L97:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(attrs_0._v) ? 4 : 2);
    if ($composer_0.u13(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1499320512, $dirty, -1, 'org.jetbrains.compose.web.dom.Hr (Elements.kt:845)');
      }
      TagElement(get_Hr(), attrs_0._v, null, $composer_0, 384 | 112 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp0_safe_receiver = $composer_0.d13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1n(Hr$lambda(attrs_0, $changed, $default));
    }
  }
  function Style_0(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c13(244974285);
    sourceInformation($composer_0, 'C(Style)1005@29808L92,1010@29908L272,1003@29743L437:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.s13(applyAttrs_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.s13(cssRules) ? 32 : 16);
    if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(244974285, $dirty, -1, 'org.jetbrains.compose.web.dom.Style (Elements.kt:1002)');
      }
      var tmp = get_Style();
      sourceInformationMarkerStart($composer_0, -802907287, 'CC(remember):Elements.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = tmp0.n13();
      var tmp_0;
      if (invalid || it === Companion_getInstance().p12_1) {
        var value = Style$lambda(applyAttrs_0);
        tmp0.o13(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(962227798, true, Style$lambda_0(cssRules), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.p13(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.n13();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance().p12_1) {
        var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.o13(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      TagElement(tmp, tmp0_group, tmp0_0, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h13();
    }
    var tmp1_safe_receiver = $composer_0.d13();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.z1n(Style$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    _init_properties_Elements_kt__eyv5nt();
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
  function Text$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$lambda_0($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.m2k();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_instance;
  }
  function Text$lambda_1($value, $$changed) {
    return function ($composer, $force) {
      Text_0($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Div$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H1$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H1_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function P$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      P_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H2$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H2_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H3$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H3_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H4$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H4_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Ul$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Ul_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Pre$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Pre_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Code$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Code_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Li$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Li_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Em$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Em_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Footer$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Footer_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function A$lambda($href, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($href._v == null)) {
        href($this$TagElement, $href._v);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function A$lambda_0($href, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      A_0($href._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Span$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Nav$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Nav_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Button$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Img$lambda($src, $alt, $attrs) {
    return function ($this$TagElement) {
      alt(src($this$TagElement, $src), $alt._v);
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Img$lambda_0($src, $alt, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Img_0($src, $alt._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Section$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Section_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Main$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Main_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Article$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Article_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Hr$lambda($attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Hr_0($attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Style$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Style$$inlined$run$2$2$1($cssStylesheet) {
    this.n2p_1 = $cssStylesheet;
  }
  protoOf(Style$$inlined$run$2$2$1).ts = function () {
    var tmp0_safe_receiver = this.n2p_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.w2l($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      if (cssStylesheet == null)
        null;
      else {
        setCSSRules(cssStylesheet, $cssRules);
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Style$$inlined$run$2$2$1(cssStylesheet);
    };
  }
  function Style$lambda_0($cssRules) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1011@29960L214,1011@29918L256:Elements.kt#97hrze');
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.p13($this$TagElement) : $composer_0.s13($this$TagElement)) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if ($composer_0.u13(!(($dirty & 19) === 18), $dirty & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $dirty, -1, 'org.jetbrains.compose.web.dom.Style.<anonymous> (Elements.kt:1011)');
        }
        var tmp_1 = $cssRules.n();
        sourceInformationMarkerStart($composer_0, 1282947116, 'CC(remember):Elements.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!((($dirty & 14) === 4 || (!(($dirty & 8) === 0) && $composer_0.s13($this$TagElement))) | $composer_0.s13($cssRules));
        // Inline function 'kotlin.let' call
        var it = $composer_0.n13();
        var tmp_2;
        if (invalid || it === Companion_getInstance().p12_1) {
          var value = Style$lambda$lambda($this$TagElement, $cssRules);
          $composer_0.o13(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DisposableEffect_0($cssRules, tmp_1, tmp0_group, $composer_0, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp_0 = tmp_4;
      } else {
        $composer_0.h13();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.a2a(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Style$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style_0($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function _init_properties_Elements_kt__eyv5nt() {
    if (!properties_initialized_Elements_kt_gtqiqv) {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Sup = new ElementBuilderImplementation('sup');
      Sub = new ElementBuilderImplementation('sub');
      Blockquote = new ElementBuilderImplementation('blockquote');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function stringPresentation(_this__u8e3s4, baseIndent, indent, delimiter) {
    baseIndent = baseIndent === VOID ? '' : baseIndent;
    indent = indent === VOID ? '    ' : indent;
    delimiter = delimiter === VOID ? '\n' : delimiter;
    var cssRuleDeclaration = _this__u8e3s4;
    // Inline function 'kotlin.collections.mutableListOf' call
    var strings = ArrayList_init_$Create$();
    strings.h(baseIndent + cssRuleDeclaration.z2m() + ' {');
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = cssRuleDeclaration.y2m().v2n().i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var name = element.le();
        var value = element.me();
        var important = element.d2o();
        strings.h(baseIndent + indent + name + ': ' + toString(value) + (important ? ' !important' : '') + ';');
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = cssRuleDeclaration.y2m().w2n().i();
      while (_iterator__ex2g4s_0.j()) {
        var element_0 = _iterator__ex2g4s_0.k();
        var name_0 = element_0.le();
        var value_0 = element_0.me();
        strings.h(baseIndent + indent + '--' + name_0 + ': ' + toString(value_0) + ';');
      }
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
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = cssRules.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.z2m() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_0(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function fillRule(cssRuleDeclaration, cssRule) {
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cssStyleRule = cssRule;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = cssRuleDeclaration.y2m().v2n().i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var name = element.le();
        var value = element.me();
        var important = element.d2o();
        setProperty(cssStyleRule.style, name, value, important);
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = cssRuleDeclaration.y2m().w2n().i();
      while (_iterator__ex2g4s_0.j()) {
        var element_0 = _iterator__ex2g4s_0.k();
        var name_0 = element_0.le();
        var value_0 = element_0.me();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_1 = cssRuleDeclaration.j2n().i();
        while (_iterator__ex2g4s_1.j()) {
          var element_1 = _iterator__ex2g4s_1.k();
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_2 = cssRuleDeclaration.b2n_1.i();
          while (_iterator__ex2g4s_2.j()) {
            var element_2 = _iterator__ex2g4s_2.k();
            addRule_2(cssGroupingRule_0, element_2);
          }
        }
      }
    }
  }
  function setProperty(style, name, value, important) {
    style.setProperty(name, toString(value), important ? 'important' : '');
  }
  function setVariable(style, name, value) {
    style.setProperty('--' + name, toString(value));
  }
  function addRule_1(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.z2m() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.z2m() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_3(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function addRule_4(_this__u8e3s4, cssRule) {
    // Inline function 'org.jetbrains.compose.web.css.appendRule' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
    return _this__u8e3s4.cssRules.item(_this__u8e3s4.cssRules.length - 1 | 0);
  }
  var org_jetbrains_compose_web_events_SyntheticAnimationEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticChangeEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticClipboardEvent$stable;
  var androidx_compose_web_events_SyntheticEvent$stable;
  function SyntheticEvent(nativeEvent) {
    this.o2p_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.p2p_1 = this.o2p_1.target;
    this.q2p_1 = this.o2p_1.bubbles;
    this.r2p_1 = this.o2p_1.cancelable;
    this.s2p_1 = this.o2p_1.composed;
    this.t2p_1 = this.o2p_1.currentTarget;
    this.u2p_1 = this.o2p_1.eventPhase;
    this.v2p_1 = this.o2p_1.defaultPrevented;
    this.w2p_1 = this.o2p_1.timeStamp;
    this.x2p_1 = this.o2p_1.type;
    this.y2p_1 = this.o2p_1.isTrusted;
  }
  protoOf(SyntheticEvent).z2p = function () {
    return this.o2p_1.preventDefault();
  };
  protoOf(SyntheticEvent).a2q = function () {
    return this.o2p_1.stopPropagation();
  };
  var org_jetbrains_compose_web_events_SyntheticFocusEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticInputEvent$stable;
  var androidx_compose_web_events_SyntheticMouseEvent$stable;
  var androidx_compose_web_events_SyntheticWheelEvent$stable;
  var androidx_compose_web_events_SyntheticDragEvent$stable;
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.m2q_1 = nativeEvent;
    this.n2q_1 = nativeEvent.altKey;
    this.o2q_1 = nativeEvent.button;
    this.p2q_1 = nativeEvent.buttons;
    this.q2q_1 = nativeEvent.clientX;
    this.r2q_1 = nativeEvent.clientY;
    this.s2q_1 = nativeEvent.ctrlKey;
    this.t2q_1 = nativeEvent.metaKey;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = nativeEvent.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.u2q_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = nativeEvent.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.v2q_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.w2q_1 = nativeEvent.offsetX;
    this.x2q_1 = nativeEvent.offsetY;
    this.y2q_1 = nativeEvent.pageX;
    this.z2q_1 = nativeEvent.pageY;
    this.a2r_1 = nativeEvent.region;
    this.b2r_1 = nativeEvent.relatedTarget;
    this.c2r_1 = nativeEvent.screenX;
    this.d2r_1 = nativeEvent.screenY;
    this.e2r_1 = nativeEvent.shiftKey;
    this.f2r_1 = nativeEvent.x;
    this.g2r_1 = nativeEvent.y;
  }
  var org_jetbrains_compose_web_events_SyntheticSelectEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticSubmitEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticTouchEvent$stable;
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).b2m = id;
  protoOf(AttrsScopeBuilder).c2m = tabIndex;
  protoOf(EventsListenerScopeBuilder).f2m = onClick;
  protoOf(StyleScopeBuilder).r2n = property_0;
  protoOf(StyleScopeBuilder).s2n = property_1;
  protoOf(StyleScopeBuilder).u2n = variable;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.t1();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.z2n();
  });
  protoOf(StyleSheet).m2o = style_0;
  protoOf(StyleSheet).o2o = style;
  protoOf(StyleSheet).p2o = invoke;
  protoOf(StyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheet).q2o = get_hover;
  protoOf(CSSRulesHolderState).l2o = add;
  //endregion
  //region block: init
  org_jetbrains_compose_web_attributes_EventsListenerScopeBuilder$stable = 8;
  org_jetbrains_compose_web_attributes_InputType_Button$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Checkbox$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Color$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Date$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_DateTimeLocal$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Email$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_File$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Hidden$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Month$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Number$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Password$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Radio$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Range$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Search$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Submit$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Tel$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Text$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Time$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Url$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Week$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeWithStringValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeWithUnitValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeCheckedValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeNumberValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType$stable = 0;
  org_jetbrains_compose_web_attributes_DirType_Ltr$stable = 0;
  org_jetbrains_compose_web_attributes_DirType_Rtl$stable = 0;
  org_jetbrains_compose_web_attributes_DirType_Auto$stable = 0;
  org_jetbrains_compose_web_attributes_DirType$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Alternate$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Author$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Bookmark$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_External$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Help$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_License$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Next$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_First$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Prev$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Last$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_NoFollow$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_NoOpener$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_NoReferrer$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Opener$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Search$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Tag$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_CustomARel$stable = 0;
  org_jetbrains_compose_web_attributes_ARel$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget$stable = 0;
  org_jetbrains_compose_web_attributes_SyntheticEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_AnimationEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_MouseEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_MouseWheelEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_KeyboardEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_FocusEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_TouchEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_DragEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_ClipboardEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_InputEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_ChangeEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_SelectEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_builders_InputAttrsScope$stable = 8;
  androidx_compose_web_attributes_SelectAttrsScope$stable = 8;
  org_jetbrains_compose_web_attributes_builders_TextAreaAttrsScope$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframesRule$stable = 8;
  org_jetbrains_compose_web_css_CSSBuilderImpl$stable = 8;
  org_jetbrains_compose_web_css_GridAutoFlow$stable = 0;
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  org_jetbrains_compose_web_css_CSSKeyframesRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframe_From$stable = 0;
  org_jetbrains_compose_web_css_CSSKeyframe_To$stable = 0;
  org_jetbrains_compose_web_css_CSSKeyframe_Percentage$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframe_Combine$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframe$stable = 0;
  org_jetbrains_compose_web_css_CSSKeyframeRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframesBuilder$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Raw$stable = 0;
  org_jetbrains_compose_web_css_CSSMediaQuery_MediaType$stable = 0;
  org_jetbrains_compose_web_css_CSSMediaQuery_MediaFeature$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_NotFeature$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_And$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Not$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Combine$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Only$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Or$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSCalcValue$stable = 8;
  org_jetbrains_compose_web_css_CSSRuleBuilderImpl$stable = 8;
  org_jetbrains_compose_web_css_CSSStyleRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSUnitValueTyped$stable = 0;
  Companion_instance_6 = new Companion_6();
  org_jetbrains_compose_web_css_Color_RGB$stable = 8;
  org_jetbrains_compose_web_css_Color_RGBA$stable = 8;
  org_jetbrains_compose_web_css_Color_HSL$stable = 8;
  org_jetbrains_compose_web_css_Color_HSLA$stable = 8;
  org_jetbrains_compose_web_css_Color$stable = 0;
  Color_instance = new Color();
  org_jetbrains_compose_web_css_CSSStyleVariable$stable = 0;
  org_jetbrains_compose_web_css_StyleScopeBuilder$stable = 8;
  org_jetbrains_compose_web_css_StylePropertyDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSRulesHolderState$stable = 0;
  org_jetbrains_compose_web_css_StyleSheet_CSSSelfSelector$stable = 8;
  org_jetbrains_compose_web_css_StyleSheet$stable = 8;
  Companion_instance_7 = new Companion_7();
  org_jetbrains_compose_web_css_CSSAnimation$stable = 8;
  org_jetbrains_compose_web_css_CSSBorder$stable = 8;
  org_jetbrains_compose_web_css_Transition$stable = 8;
  org_jetbrains_compose_web_css_Transitions$stable = 8;
  org_jetbrains_compose_web_dom_ElementScopeBase$stable = 8;
  org_jetbrains_compose_web_dom_ElementScopeImpl$stable = 8;
  org_jetbrains_compose_web_events_SyntheticAnimationEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticChangeEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticClipboardEvent$stable = 8;
  androidx_compose_web_events_SyntheticEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticFocusEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticInputEvent$stable = 8;
  androidx_compose_web_events_SyntheticMouseEvent$stable = 8;
  androidx_compose_web_events_SyntheticWheelEvent$stable = 8;
  androidx_compose_web_events_SyntheticDragEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticSelectEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticSubmitEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticTouchEvent$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = StyleSheet_init_$Init$;
  _.$_$.b = StyleSheet_init_$Create$;
  _.$_$.c = Companion_instance_2;
  _.$_$.d = Companion_instance_3;
  _.$_$.e = From_getInstance;
  _.$_$.f = To_getInstance;
  _.$_$.g = Color_instance;
  _.$_$.h = Companion_instance_0;
  _.$_$.i = Companion_instance_4;
  _.$_$.j = Companion_instance_5;
  _.$_$.k = Companion_instance;
  _.$_$.l = Companion_instance_1;
  _.$_$.m = classes;
  _.$_$.n = id;
  _.$_$.o = tabIndex;
  _.$_$.p = AttrsScope;
  _.$_$.q = onClick;
  _.$_$.r = CSSBorder;
  _.$_$.s = CSSGroupingRuleDeclaration;
  _.$_$.t = CSSKeyframeRuleDeclaration;
  _.$_$.u = CSSKeyframesRuleDeclaration;
  _.$_$.v = MediaFeature;
  _.$_$.w = Raw;
  _.$_$.x = CSSMediaRuleDeclaration;
  _.$_$.y = CSSStyledRuleDeclaration;
  _.$_$.z = Color_0;
  _.$_$.a1 = property_0;
  _.$_$.b1 = property_1;
  _.$_$.c1 = variable;
  _.$_$.d1 = StyleScopeBuilder;
  _.$_$.e1 = StyleScope;
  _.$_$.f1 = StyleSheet;
  _.$_$.g1 = alignItems;
  _.$_$.h1 = alignSelf;
  _.$_$.i1 = backgroundColor;
  _.$_$.j1 = borderRadius;
  _.$_$.k1 = border;
  _.$_$.l1 = bottom;
  _.$_$.m1 = boxSizing;
  _.$_$.n1 = color;
  _.$_$.o1 = color_0;
  _.$_$.p1 = columnGap;
  _.$_$.q1 = get_cssRem;
  _.$_$.r1 = display;
  _.$_$.s1 = get_em;
  _.$_$.t1 = flexDirection;
  _.$_$.u1 = flexGrow;
  _.$_$.v1 = fontFamily;
  _.$_$.w1 = fontSize;
  _.$_$.x1 = fontWeight;
  _.$_$.y1 = get_fr;
  _.$_$.z1 = gap;
  _.$_$.a2 = gridArea;
  _.$_$.b2 = gridAutoColumns;
  _.$_$.c2 = gridAutoRows;
  _.$_$.d2 = gridRow;
  _.$_$.e2 = gridTemplateColumns;
  _.$_$.f2 = gridTemplateRows;
  _.$_$.g2 = height;
  _.$_$.h2 = justifyContent;
  _.$_$.i2 = left;
  _.$_$.j2 = lineHeight;
  _.$_$.k2 = marginBottom;
  _.$_$.l2 = margin;
  _.$_$.m2 = maxWidth;
  _.$_$.n2 = media;
  _.$_$.o2 = minHeight;
  _.$_$.p2 = minWidth;
  _.$_$.q2 = get_ms;
  _.$_$.r2 = opacity;
  _.$_$.s2 = org_jetbrains_compose_web_css_StyleSheet$stableprop_getter;
  _.$_$.t2 = padding;
  _.$_$.u2 = get_percent;
  _.$_$.v2 = position;
  _.$_$.w2 = get_px;
  _.$_$.x2 = right;
  _.$_$.y2 = rowGap;
  _.$_$.z2 = style_1;
  _.$_$.a3 = textAlign;
  _.$_$.b3 = top;
  _.$_$.c3 = unaryMinus;
  _.$_$.d3 = get_vh;
  _.$_$.e3 = width_0;
  _.$_$.f3 = width;
  _.$_$.g3 = Article_0;
  _.$_$.h3 = A_0;
  _.$_$.i3 = Button_0;
  _.$_$.j3 = Code_0;
  _.$_$.k3 = Div_0;
  _.$_$.l3 = ElementBuilder;
  _.$_$.m3 = Em_0;
  _.$_$.n3 = Footer_0;
  _.$_$.o3 = H1_0;
  _.$_$.p3 = H2_0;
  _.$_$.q3 = H3_0;
  _.$_$.r3 = H4_0;
  _.$_$.s3 = Hr_0;
  _.$_$.t3 = Img_0;
  _.$_$.u3 = Li_0;
  _.$_$.v3 = Main_0;
  _.$_$.w3 = Nav_0;
  _.$_$.x3 = Pre_0;
  _.$_$.y3 = P_0;
  _.$_$.z3 = Section_0;
  _.$_$.a4 = Span_0;
  _.$_$.b4 = Style_0;
  _.$_$.c4 = TagElement;
  _.$_$.d4 = Text_0;
  _.$_$.e4 = Ul_0;
  _.$_$.f4 = stringPresentation;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
