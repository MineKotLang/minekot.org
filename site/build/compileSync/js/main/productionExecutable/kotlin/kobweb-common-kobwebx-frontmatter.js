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
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var protoOf = kotlin_kotlin.$_$.y7;
  var initMetadataForClass = kotlin_kotlin.$_$.i7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j7;
  var VOID = kotlin_kotlin.$_$.c;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var contains = kotlin_kotlin.$_$.v8;
  var joinToString = kotlin_kotlin.$_$.v3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var charSequenceLength = kotlin_kotlin.$_$.x6;
  var listOf = kotlin_kotlin.$_$.d4;
  var substringBefore = kotlin_kotlin.$_$.u9;
  var substringAfter = kotlin_kotlin.$_$.s9;
  var to = kotlin_kotlin.$_$.fb;
  var emptyList = kotlin_kotlin.$_$.l3;
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
    tmp.c3f_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Builder).d3f = function (key, value) {
    var tmp0 = this.c3f_1;
    // Inline function 'kotlin.collections.set' call
    var value_0 = new Scalar(value);
    tmp0.a2(key, value_0);
    return this;
  };
  protoOf(Builder).k24 = function () {
    return new ValueMap(this.c3f_1);
  };
  function FrontMatterElement$ValueMap$query$lambda(this$0) {
    return function (segment) {
      return this$0.e3f_1.w1(segment);
    };
  }
  function Companion() {
  }
  protoOf(Companion).f3f = function (populate) {
    var builder = new Builder();
    populate(builder);
    return builder.k24();
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function Scalar(scalar) {
    FrontMatterElement.call(this);
    this.g3f_1 = scalar;
  }
  protoOf(Scalar).h3f = function (path) {
    return this.i3f(path);
  };
  function ValueMap(map) {
    FrontMatterElement.call(this);
    this.e3f_1 = map;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.e3f_1.x1();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (contains(element, _Char___init__impl__6a9atx(46))) {
        destination.h(element);
      }
    }
    // Inline function 'kotlin.takeIf' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!destination.l()) {
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
  protoOf(ValueMap).h3f = function (path) {
    return this.j3f(path, FrontMatterElement$ValueMap$query$lambda(this));
  };
  function ValueList() {
  }
  function FrontMatterElement$handleQuery$lambda(it) {
    return null;
  }
  function FrontMatterElement() {
  }
  protoOf(FrontMatterElement).j3f = function (path, processSegment) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(path) === 0)
      return this;
    var _destruct__k2r9zo = this.k3f(path);
    var segment = _destruct__k2r9zo.le();
    var rest = _destruct__k2r9zo.me();
    var tmp0_safe_receiver = processSegment(segment);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h3f(rest);
  };
  protoOf(FrontMatterElement).i3f = function (path, processSegment, $super) {
    var tmp;
    if (processSegment === VOID) {
      tmp = FrontMatterElement$handleQuery$lambda;
    } else {
      tmp = processSegment;
    }
    processSegment = tmp;
    return $super === VOID ? this.j3f(path, processSegment) : $super.j3f.call(this, path, processSegment);
  };
  protoOf(FrontMatterElement).ec = function (path) {
    var result = this.h3f(path);
    var tmp;
    if (result instanceof Scalar) {
      tmp = listOf(result.g3f_1);
    } else {
      if (result instanceof ValueList) {
        tmp = result.m3f();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  protoOf(FrontMatterElement).k3f = function (_this__u8e3s4) {
    var nextSegment = substringBefore(_this__u8e3s4, _Char___init__impl__6a9atx(46));
    var rest = substringAfter(_this__u8e3s4, _Char___init__impl__6a9atx(46), '');
    return to(nextSegment, rest);
  };
  protoOf(FrontMatterElement).l3f = function () {
    var tmp0_safe_receiver = this instanceof Scalar ? this : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g3f_1;
  };
  protoOf(FrontMatterElement).m3f = function () {
    var tmp0_safe_receiver = this instanceof ValueList ? this : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n3f_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp1_safe_receiver.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var tmp0_safe_receiver_0 = element.l3f();
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          destination.h(tmp0_safe_receiver_0);
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
