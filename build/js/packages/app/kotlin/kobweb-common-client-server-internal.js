(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-common-client-server-internal'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-common-client-server-internal'.");
    }
    globalThis['kobweb-common-client-server-internal'] = factory(typeof globalThis['kobweb-common-client-server-internal'] === 'undefined' ? {} : globalThis['kobweb-common-client-server-internal'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var Enum = kotlin_kotlin.$_$.ja;
  var protoOf = kotlin_kotlin.$_$.y7;
  var initMetadataForClass = kotlin_kotlin.$_$.i7;
  var VOID = kotlin_kotlin.$_$.c;
  var listOf = kotlin_kotlin.$_$.d4;
  var removeSurrounding = kotlin_kotlin.$_$.l9;
  var removeSuffix = kotlin_kotlin.$_$.k9;
  var endsWith = kotlin_kotlin.$_$.a9;
  var removePrefix = kotlin_kotlin.$_$.j9;
  var startsWith = kotlin_kotlin.$_$.p9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j7;
  var getStringHashCode = kotlin_kotlin.$_$.g7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var toString = kotlin_kotlin.$_$.z7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var first = kotlin_kotlin.$_$.r3;
  var drop = kotlin_kotlin.$_$.k3;
  var to = kotlin_kotlin.$_$.db;
  var joinToString = kotlin_kotlin.$_$.v3;
  var emptyList = kotlin_kotlin.$_$.l3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ya;
  var plus = kotlin_kotlin.$_$.n4;
  var charSequenceLength = kotlin_kotlin.$_$.x6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var charArrayOf = kotlin_kotlin.$_$.u6;
  var split = kotlin_kotlin.$_$.n9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var startsWith_0 = kotlin_kotlin.$_$.q9;
  var toMutableList = kotlin_kotlin.$_$.z4;
  var removeFirst = kotlin_kotlin.$_$.q4;
  var endsWith_0 = kotlin_kotlin.$_$.z8;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AcceptResult, 'AcceptResult', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Info, 'Info');
  initMetadataForClass(Match, 'Match', VOID, Enum);
  initMetadataForClass(Node, 'Node');
  initMetadataForClass(RootNode, 'RootNode', RootNode, Node);
  initMetadataForClass(ChildNode, 'ChildNode', VOID, Node);
  initMetadataForClass(StaticNode, 'StaticNode', VOID, ChildNode);
  initMetadataForClass(DynamicNode, 'DynamicNode', VOID, ChildNode);
  initMetadataForClass(ResolvedEntry, 'ResolvedEntry');
  initMetadataForClass(RouteTree, 'RouteTree', RouteTree);
  //endregion
  var AcceptResult_NONE_instance;
  var AcceptResult_SINGLE_instance;
  var AcceptResult_ALL_instance;
  var AcceptResult_entriesInitialized;
  function AcceptResult_initEntries() {
    if (AcceptResult_entriesInitialized)
      return Unit_instance;
    AcceptResult_entriesInitialized = true;
    AcceptResult_NONE_instance = new AcceptResult('NONE', 0);
    AcceptResult_SINGLE_instance = new AcceptResult('SINGLE', 1);
    AcceptResult_ALL_instance = new AcceptResult('ALL', 2);
  }
  function AcceptResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function resolve$createResolvedEntry(this$0, consumedPart) {
    return listOf(new ResolvedEntry(this$0, consumedPart));
  }
  function AcceptResult_NONE_getInstance() {
    AcceptResult_initEntries();
    return AcceptResult_NONE_instance;
  }
  function AcceptResult_SINGLE_getInstance() {
    AcceptResult_initEntries();
    return AcceptResult_SINGLE_instance;
  }
  function AcceptResult_ALL_getInstance() {
    AcceptResult_initEntries();
    return AcceptResult_ALL_instance;
  }
  function Companion() {
  }
  protoOf(Companion).h2r = function (routeSegment) {
    if (!isDynamicSegment(routeSegment))
      return null;
    var name = routeSegment;
    name = removeSurrounding(name, '{', '}');
    var tmp;
    if (startsWith(name, '...')) {
      name = removePrefix(name, '...');
      var tmp_0;
      if (endsWith(name, '?')) {
        name = removeSuffix(name, '?');
        tmp_0 = Match_REST_OPTIONAL_getInstance();
      } else {
        tmp_0 = Match_REST_getInstance();
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (endsWith(name, '?')) {
        name = removeSuffix(name, '?');
        tmp_1 = Match_SINGLE_OPTIONAL_getInstance();
      } else {
        tmp_1 = Match_SINGLE_getInstance();
      }
      tmp = tmp_1;
    }
    var match = tmp;
    return new Info(name, match);
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  var Match_SINGLE_instance;
  var Match_SINGLE_OPTIONAL_instance;
  var Match_REST_instance;
  var Match_REST_OPTIONAL_instance;
  var Match_entriesInitialized;
  function Match_initEntries() {
    if (Match_entriesInitialized)
      return Unit_instance;
    Match_entriesInitialized = true;
    Match_SINGLE_instance = new Match('SINGLE', 0);
    Match_SINGLE_OPTIONAL_instance = new Match('SINGLE_OPTIONAL', 1);
    Match_REST_instance = new Match('REST', 2);
    Match_REST_OPTIONAL_instance = new Match('REST_OPTIONAL', 3);
  }
  function Info(name, match) {
    this.i2r_1 = name;
    this.j2r_1 = match;
  }
  protoOf(Info).toString = function () {
    return 'Info(name=' + this.i2r_1 + ', match=' + this.j2r_1.toString() + ')';
  };
  protoOf(Info).hashCode = function () {
    var result = getStringHashCode(this.i2r_1);
    result = imul(result, 31) + this.j2r_1.hashCode() | 0;
    return result;
  };
  protoOf(Info).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Info))
      return false;
    if (!(this.i2r_1 === other.i2r_1))
      return false;
    if (!this.j2r_1.equals(other.j2r_1))
      return false;
    return true;
  };
  function Match(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Match_SINGLE_getInstance() {
    Match_initEntries();
    return Match_SINGLE_instance;
  }
  function Match_SINGLE_OPTIONAL_getInstance() {
    Match_initEntries();
    return Match_SINGLE_OPTIONAL_instance;
  }
  function Match_REST_getInstance() {
    Match_initEntries();
    return Match_REST_instance;
  }
  function Match_REST_OPTIONAL_getInstance() {
    Match_initEntries();
    return Match_REST_OPTIONAL_instance;
  }
  function Node(parent, sourceRouteSegment) {
    parent = parent === VOID ? null : parent;
    this.k2r_1 = parent;
    this.l2r_1 = sourceRouteSegment;
    this.m2r_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n2r_1 = ArrayList_init_$Create$();
    this.o2r_1 = null;
    this.p2r_1 = this.l2r_1;
    this.q2r_1 = false;
  }
  protoOf(Node).r2r = function () {
    return this.m2r_1;
  };
  protoOf(Node).nq = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    this_0.r(this.n2r_1);
    var tmp0_safe_receiver = this.o2r_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.h(tmp0_safe_receiver);
    }
    return this_0.s4();
  };
  protoOf(Node).t1z = function () {
    return this.p2r_1;
  };
  protoOf(Node).s2r = function () {
    return this.q2r_1;
  };
  protoOf(Node).v2r = function (routeSegment) {
    var tmp0 = this.nq();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (element.u2r(routeSegment)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(Node).w2r = function (routeSegment) {
    // Inline function 'kotlin.check' call
    if (!(this.v2r(routeSegment) == null)) {
      var message = 'Node.createChild called unexpectedly. Please report this issue.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.s2r()) {
      var message_0 = 'User attempted to register an invalid route. "' + this.l2r_1 + '" must be the last segment of the route, but it was followed by "' + routeSegment + '".';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp;
    if (isDynamicSegment(routeSegment)) {
      // Inline function 'kotlin.also' call
      var this_0 = new DynamicNode(this, routeSegment);
      this.o2r_1 = this_0;
      tmp = this_0;
    } else {
      // Inline function 'kotlin.also' call
      var this_1 = new StaticNode(this, routeSegment);
      this.n2r_1.h(this_1);
      tmp = this_1;
    }
    return tmp;
  };
  protoOf(Node).x2r = function (routeSegments) {
    var consumeResult = this.t2r(routeSegments);
    var tmp;
    switch (consumeResult.l2_1) {
      case 0:
        return null;
      case 1:
        tmp = to(first(routeSegments), drop(routeSegments, 1));
        break;
      case 2:
        tmp = to(joinToString(routeSegments, '/'), emptyList());
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var _destruct__k2r9zo = tmp;
    var consumedPart = _destruct__k2r9zo.le();
    var remainingSegments = _destruct__k2r9zo.me();
    if (remainingSegments.l() && this.r2r() == null)
      return null;
    if (remainingSegments.l())
      return resolve$createResolvedEntry(this, consumedPart);
    var tmp0 = this.nq();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var result = element.x2r(remainingSegments);
        if (!(result == null)) {
          tmp$ret$1 = result;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_safe_receiver = tmp$ret$1;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = plus(resolve$createResolvedEntry(this, consumedPart), tmp1_safe_receiver);
    }
    return tmp_0;
  };
  function RootNode() {
    Node.call(this, null, '');
  }
  protoOf(RootNode).u2r = function (routeSegment) {
    // Inline function 'kotlin.text.isEmpty' call
    return charSequenceLength(routeSegment) === 0;
  };
  protoOf(RootNode).t2r = function (routeSegments) {
    // Inline function 'kotlin.check' call
    if (!(first(routeSegments) === '')) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    return AcceptResult_SINGLE_getInstance();
  };
  function ChildNode(parent, sourceRouteSegment) {
    Node.call(this, parent, sourceRouteSegment);
  }
  function StaticNode(parent, sourceRouteSegment) {
    ChildNode.call(this, parent, sourceRouteSegment);
  }
  protoOf(StaticNode).u2r = function (routeSegment) {
    return routeSegment === this.l2r_1;
  };
  protoOf(StaticNode).t2r = function (routeSegments) {
    if (this.u2r(first(routeSegments)))
      return AcceptResult_SINGLE_getInstance();
    return AcceptResult_NONE_getInstance();
  };
  function DynamicNode(parent, sourceRouteSegment) {
    ChildNode.call(this, parent, sourceRouteSegment);
    var tmp = this;
    var tmp0_elvis_lhs = Companion_instance.h2r(sourceRouteSegment);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var message = 'Expected a dynamic route segment here, but got "' + sourceRouteSegment + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.t2s_1 = tmp_0;
    this.u2s_1 = this.t2s_1.i2r_1;
    this.v2s_1 = !this.t2s_1.j2r_1.equals(Match_SINGLE_getInstance());
  }
  protoOf(DynamicNode).t1z = function () {
    return this.u2s_1;
  };
  protoOf(DynamicNode).s2r = function () {
    return this.v2s_1;
  };
  protoOf(DynamicNode).u2r = function (routeSegment) {
    var tmp0_safe_receiver = Companion_instance.h2r(routeSegment);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!this.t2s_1.equals(tmp0_safe_receiver)) {
        // Inline function 'kotlin.error' call
        var message = 'User is attempting to register a dynamic route that conflicts with another dynamic route already set up. "' + routeSegment + '" is being registered but "' + this.l2r_1 + '" already exists.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return true;
    }
    return false;
  };
  protoOf(DynamicNode).t2r = function (routeSegments) {
    var tmp;
    switch (this.t2s_1.j2r_1.l2_1) {
      case 0:
        tmp = !(first(routeSegments) === '') ? AcceptResult_SINGLE_getInstance() : AcceptResult_NONE_getInstance();
        break;
      case 1:
        tmp = AcceptResult_SINGLE_getInstance();
        break;
      case 2:
        tmp = !(first(routeSegments) === '') ? AcceptResult_ALL_getInstance() : AcceptResult_NONE_getInstance();
        break;
      case 3:
        tmp = AcceptResult_ALL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function ResolvedEntry(node, capturedRouteSegment) {
    this.w2s_1 = node;
    this.x2s_1 = capturedRouteSegment;
  }
  function resolveWithoutRedirects($this, route) {
    return $this.y2s_1.x2r(split(route, charArrayOf([_Char___init__impl__6a9atx(47)])));
  }
  function resolveAllowingRedirects($this, route) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = route;
    var _iterator__ex2g4s = $this.z2s_1.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var route_0 = accumulator;
      var tmp0_elvis_lhs = element.c2t(route_0);
      accumulator = tmp0_elvis_lhs == null ? route_0 : tmp0_elvis_lhs;
    }
    var redirectedRoute = accumulator;
    return resolveWithoutRedirects($this, redirectedRoute);
  }
  function checkRoute($this, route) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!$this.y2s_1.nq().l()) {
      var message = "No routes were ever registered. This is unexpected and probably means no `@Page` was defined (or pages were defined in the wrong place where Kobweb couldn't discover them).";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!startsWith_0(route, _Char___init__impl__6a9atx(47))) {
      var message_0 = 'When checking a route, it must begin with a slash. Got: "' + route + '"';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp0_elvis_lhs = resolveAllowingRedirects($this, route);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolvedNodes = tmp;
    return toRouteString(resolvedNodes);
  }
  function RouteTree() {
    this.y2s_1 = new RootNode();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z2s_1 = ArrayList_init_$Create$();
  }
  protoOf(RouteTree).d2t = function (route, allowRedirects) {
    return allowRedirects ? resolveAllowingRedirects(this, route) : resolveWithoutRedirects(this, route);
  };
  protoOf(RouteTree).e2t = function (route) {
    return !(checkRoute(this, route) == null);
  };
  protoOf(RouteTree).f2t = function (route, data) {
    var routeSegments = toMutableList(split(route, charArrayOf([_Char___init__impl__6a9atx(47)])));
    var currNode = this.y2s_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!this.y2s_1.u2r(removeFirst(routeSegments))) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!routeSegments.l()) {
        break $l$loop;
      }
      var nextRouteSegment = removeFirst(routeSegments);
      var tmp0_elvis_lhs = currNode.v2r(nextRouteSegment);
      currNode = tmp0_elvis_lhs == null ? currNode.w2r(nextRouteSegment) : tmp0_elvis_lhs;
    }
    if (!(currNode.r2r() == null))
      return false;
    currNode.m2r_1 = data;
    return true;
  };
  function toRouteString(_this__u8e3s4) {
    return joinToString(_this__u8e3s4, '/', VOID, VOID, VOID, VOID, toRouteString$lambda);
  }
  function isDynamicSegment(_this__u8e3s4) {
    return startsWith_0(_this__u8e3s4, _Char___init__impl__6a9atx(123)) && endsWith_0(_this__u8e3s4, _Char___init__impl__6a9atx(125));
  }
  function toRouteString$lambda(it) {
    return it.x2s_1;
  }
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DynamicNode;
  _.$_$.b = RouteTree;
  _.$_$.c = toRouteString;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-common-client-server-internal.js.map
