(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-common-kobwebx-frontmatter'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-common-kobwebx-frontmatter'.");
    }
    globalThis['kobweb-common-kobwebx-frontmatter'] = factory(typeof globalThis['kobweb-common-kobwebx-frontmatter'] === 'undefined' ? {} : globalThis['kobweb-common-kobwebx-frontmatter'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var Unit_instance = kotlin_kotlin.$_$.g4;
  var protoOf = kotlin_kotlin.$_$.ob;
  var initMetadataForClass = kotlin_kotlin.$_$.pa;
  var initMetadataForCompanion = kotlin_kotlin.$_$.qa;
  var VOID = kotlin_kotlin.$_$.d;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c2;
  var contains = kotlin_kotlin.$_$.sc;
  var joinToString = kotlin_kotlin.$_$.o6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var charSequenceLength = kotlin_kotlin.$_$.da;
  var listOf = kotlin_kotlin.$_$.w6;
  var substringBefore = kotlin_kotlin.$_$.wd;
  var substringAfter = kotlin_kotlin.$_$.ud;
  var to = kotlin_kotlin.$_$.ig;
  var emptyList = kotlin_kotlin.$_$.c6;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Builder, 'Builder', Builder);
  initMetadataForCompanion(Companion);
  initMetadataForClass(FrontMatterElement, 'FrontMatterElement');
  initMetadataForClass(Scalar, 'Scalar', VOID, FrontMatterElement);
  initMetadataForClass(ValueMap, 'ValueMap', VOID, FrontMatterElement);
  initMetadataForClass(ValueList, 'ValueList', VOID, FrontMatterElement);
  //endregion
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.d3j_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Builder).e3j = function (key, value) {
    var tmp0 = this.d3j_1;
    // Inline function 'kotlin.collections.set' call
    var value_0 = new Scalar(value);
    tmp0.o2(key, value_0);
    return this;
  };
  protoOf(Builder).a29 = function () {
    return new ValueMap(this.d3j_1);
  };
  function FrontMatterElement$ValueMap$query$lambda(this$0) {
    return function (segment) {
      return this$0.f3j_1.k2(segment);
    };
  }
  function Companion() {
  }
  protoOf(Companion).g3j = function (populate) {
    var builder = new Builder();
    populate(builder);
    return builder.a29();
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function Scalar(scalar) {
    FrontMatterElement.call(this);
    this.h3j_1 = scalar;
  }
  protoOf(Scalar).i3j = function (path) {
    return this.j3j(path);
  };
  function ValueMap(map) {
    FrontMatterElement.call(this);
    this.f3j_1 = map;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.f3j_1.l2();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (contains(element, _Char___init__impl__6a9atx(46))) {
        destination.y(element);
      }
    }
    // Inline function 'kotlin.takeIf' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!destination.r()) {
      tmp = destination;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw IllegalArgumentException_init_$Create$('Kobweb FrontMatter keys do not allow periods in them. Got: [' + joinToString(tmp0_safe_receiver) + ']');
    }
  }
  protoOf(ValueMap).i3j = function (path) {
    return this.k3j(path, FrontMatterElement$ValueMap$query$lambda(this));
  };
  function ValueList() {
  }
  function FrontMatterElement$handleQuery$lambda(it) {
    return null;
  }
  function FrontMatterElement() {
  }
  protoOf(FrontMatterElement).k3j = function (path, processSegment) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(path) === 0)
      return this;
    var _destruct__k2r9zo = this.l3j(path);
    var segment = _destruct__k2r9zo.rf();
    var rest = _destruct__k2r9zo.sf();
    var tmp0_safe_receiver = processSegment(segment);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i3j(rest);
  };
  protoOf(FrontMatterElement).j3j = function (path, processSegment, $super) {
    var tmp;
    if (processSegment === VOID) {
      tmp = FrontMatterElement$handleQuery$lambda;
    } else {
      tmp = processSegment;
    }
    processSegment = tmp;
    return $super === VOID ? this.k3j(path, processSegment) : $super.k3j.call(this, path, processSegment);
  };
  protoOf(FrontMatterElement).bd = function (path) {
    var result = this.i3j(path);
    var tmp;
    if (result instanceof Scalar) {
      tmp = listOf(result.h3j_1);
    } else {
      if (result instanceof ValueList) {
        tmp = result.n3j();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  protoOf(FrontMatterElement).l3j = function (_this__u8e3s4) {
    var nextSegment = substringBefore(_this__u8e3s4, _Char___init__impl__6a9atx(46));
    var rest = substringAfter(_this__u8e3s4, _Char___init__impl__6a9atx(46), '');
    return to(nextSegment, rest);
  };
  protoOf(FrontMatterElement).m3j = function () {
    var tmp0_safe_receiver = this instanceof Scalar ? this : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h3j_1;
  };
  protoOf(FrontMatterElement).n3j = function () {
    var tmp0_safe_receiver = this instanceof ValueList ? this : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o3j_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp1_safe_receiver.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var tmp0_safe_receiver_0 = element.m3j();
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          destination.y(tmp0_safe_receiver_0);
        }
      }
      tmp = destination;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? emptyList() : tmp2_elvis_lhs;
  };
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-common-kobwebx-frontmatter.js.map
