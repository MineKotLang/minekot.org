(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var protoOf = kotlin_kotlin.$_$.y7;
  var THROW_CCE = kotlin_kotlin.$_$.sa;
  var Element = kotlin_kotlin.$_$.s5;
  var Continuation = kotlin_kotlin.$_$.o5;
  var initMetadataForClass = kotlin_kotlin.$_$.i7;
  var VOID = kotlin_kotlin.$_$.c;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.z1;
  var Key_instance = kotlin_kotlin.$_$.y1;
  var equals = kotlin_kotlin.$_$.b7;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.g5;
  var toString = kotlin_kotlin.$_$.z7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var intercepted = kotlin_kotlin.$_$.h5;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.f5;
  var initMetadataForInterface = kotlin_kotlin.$_$.l7;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var isInterface = kotlin_kotlin.$_$.q7;
  var toString_0 = kotlin_kotlin.$_$.eb;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.n7;
  var hashCode = kotlin_kotlin.$_$.h7;
  var Companion_instance = kotlin_kotlin.$_$.b2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.t1;
  var createFailure = kotlin_kotlin.$_$.xa;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.q;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.u1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.v1;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.k5;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.j5;
  var get = kotlin_kotlin.$_$.l5;
  var minusKey = kotlin_kotlin.$_$.m5;
  var ContinuationInterceptor = kotlin_kotlin.$_$.n5;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var addSuppressed = kotlin_kotlin.$_$.ua;
  var Enum = kotlin_kotlin.$_$.ka;
  var startCoroutine = kotlin_kotlin.$_$.v5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ab;
  var Long = kotlin_kotlin.$_$.pa;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.f;
  var compare = kotlin_kotlin.$_$.e6;
  var add = kotlin_kotlin.$_$.a6;
  var subtract = kotlin_kotlin.$_$.o6;
  var RuntimeException = kotlin_kotlin.$_$.ra;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.l1;
  var captureStack = kotlin_kotlin.$_$.t6;
  var Error_0 = kotlin_kotlin.$_$.la;
  var Error_init_$Init$ = kotlin_kotlin.$_$.y;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.x5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var CancellationException = kotlin_kotlin.$_$.e5;
  var ArrayList = kotlin_kotlin.$_$.l2;
  var CoroutineImpl = kotlin_kotlin.$_$.u5;
  var SequenceScope = kotlin_kotlin.$_$.m8;
  var initMetadataForLambda = kotlin_kotlin.$_$.m7;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var sequence = kotlin_kotlin.$_$.s8;
  var plus = kotlin_kotlin.$_$.t5;
  var get_0 = kotlin_kotlin.$_$.q5;
  var fold = kotlin_kotlin.$_$.p5;
  var minusKey_0 = kotlin_kotlin.$_$.r5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v;
  var anyToString = kotlin_kotlin.$_$.r6;
  var UnsupportedOperationException = kotlin_kotlin.$_$.ta;
  var Exception = kotlin_kotlin.$_$.ma;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.a1;
  var defineProp = kotlin_kotlin.$_$.z6;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.i5;
  var getKClassFromExpression = kotlin_kotlin.$_$.g8;
  var removeFirstOrNull = kotlin_kotlin.$_$.p4;
  var KtMutableList = kotlin_kotlin.$_$.q2;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.r;
  var ensureNotNull = kotlin_kotlin.$_$.ya;
  var getStringHashCode = kotlin_kotlin.$_$.g7;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.l;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.k1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Element], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Element, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [JobSupport, Element, Continuation, CoroutineScope], [0]);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(DispatchedCoroutine, 'DispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.nr(cause) : $super.nr.call(this, cause);
  }
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [DispatchedTask, CancellableContinuation]);
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForInterface(CancelHandler, 'CancelHandler', VOID, VOID, [NotCompleted]);
  initMetadataForClass(UserSupplied, 'UserSupplied', VOID, VOID, [CancelHandler]);
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode', LockFreeLinkedListNode);
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(JobNode, 'JobNode', VOID, LockFreeLinkedListNode, [LockFreeLinkedListNode, Incomplete]);
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobNode);
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_1, 'Key');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle');
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [SynchronizedObject, Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForLambda(JobSupport$_get_children_$slambda_k839f8, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [JobSupport, Element], [0]);
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(LockFreeLinkedListHead, 'LockFreeLinkedListHead', LockFreeLinkedListHead, LockFreeLinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LockFreeLinkedListHead, [LockFreeLinkedListHead, Incomplete]);
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobNode);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobNode);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForClass(AbstractSharedFlow, 'AbstractSharedFlow', VOID, SynchronizedObject);
  initMetadataForClass(StateFlowImpl, 'StateFlowImpl', VOID, AbstractSharedFlow, VOID, [1]);
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForClass(DispatchException, 'DispatchException', VOID, Exception);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtMutableList]);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, VOID, [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, VOID, [1]);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(UndispatchedCoroutine, 'UndispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForClass(ListClosed, 'ListClosed', VOID, LockFreeLinkedListNode);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.wo(parentContext.s8(Key_instance_2));
    }
    this.zo_1 = parentContext.ig(this);
  }
  protoOf(AbstractCoroutine).l8 = function () {
    return this.zo_1;
  };
  protoOf(AbstractCoroutine).ap = function () {
    return this.zo_1;
  };
  protoOf(AbstractCoroutine).bp = function () {
    return protoOf(JobSupport).bp.call(this);
  };
  protoOf(AbstractCoroutine).cp = function (value) {
  };
  protoOf(AbstractCoroutine).dp = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).ep = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).fp = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.dp(state.gp_1, state.ip());
    } else {
      this.cp((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).q8 = function (result) {
    var state = this.jp(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.kp(state);
  };
  protoOf(AbstractCoroutine).kp = function (state) {
    return this.lp(state);
  };
  protoOf(AbstractCoroutine).mp = function (exception) {
    handleCoroutineException(this.zo_1, exception);
  };
  protoOf(AbstractCoroutine).np = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.zo_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).np.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).np.call(this);
  };
  protoOf(AbstractCoroutine).op = function (start, receiver, block) {
    start.rp(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.uq() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.op(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    var tmp$ret$0;
    $l$block_0: {
      var oldContext = $completion.l8();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.s8(Key_instance), oldContext.s8(Key_instance))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        coroutine_0.zo_1;
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.ar();
    }
    return tmp$ret$0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).sq = function (exception) {
    handleCoroutineException(this.zo_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.hr_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).xp = function () {
    startCoroutineCancellable_0(this.hr_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.zq_1;
    while (true) {
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.zq_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.zq_1;
    while (true) {
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.zq_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.zq_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).lp = function (state) {
    this.kp(state);
  };
  protoOf(DispatchedCoroutine).kp = function (state) {
    if (tryResume(this))
      return Unit_instance;
    resumeCancellableWith(intercepted(this.lr_1), recoverResult(state, this.lr_1));
  };
  protoOf(DispatchedCoroutine).ar = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.up());
    if (state instanceof CompletedExceptionally)
      throw state.gp_1;
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  function CancellableContinuation() {
  }
  function invokeOnCancellation(_this__u8e3s4, handler) {
    var tmp;
    if (_this__u8e3s4 instanceof CancellableContinuationImpl) {
      _this__u8e3s4.wr(handler);
      tmp = Unit_instance;
    } else {
      throw UnsupportedOperationException_init_$Create$('third-party implementation of CancellableContinuation is not supported');
    }
    return tmp;
  }
  function _get_parentHandle__f8dcex($this) {
    return $this.vr_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.up();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.es_1)) {
      var tmp_0 = $this.rr_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).ds();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.rr_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.fs(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.tr_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    if (!!(index === 536870911)) {
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      segment.gs(index, cause, $this.l8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.l8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.tr_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.tr_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.tr_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.tr_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.l8().s8(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, VOID, new ChildContinuation($this));
    $this.vr_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.ur_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.ur_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (!(state == null) ? isInterface(state, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.ps()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.gp_1;
              if (isInterface(handler, CancelHandler)) {
                $this.ms(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.is_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.ns()) {
                $this.ms(handler, state.ls_1);
                return Unit_instance;
              }
              var update = state.os(VOID, handler);
              if ($this.ur_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.ur_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = isInterface(state, CancelHandler);
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, isInterface(state, CancelHandler) ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonReusable($this) {
    if (!isReusable($this)) {
      $this.qs();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.rr_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.sr_1 = this.rr_1.l8();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$1 = (0 << 29) + 536870911 | 0;
    tmp.tr_1 = atomic$int$1(tmp$ret$1);
    this.ur_1 = atomic$ref$1(Active_instance);
    this.vr_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).rs = function () {
    return this.rr_1;
  };
  protoOf(CancellableContinuationImpl).l8 = function () {
    return this.sr_1;
  };
  protoOf(CancellableContinuationImpl).up = function () {
    return this.ur_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).vp = function () {
    var tmp = this.up();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).ss = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.vp()) {
      handle.ts();
      this.vr_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).us = function () {
    return this.up();
  };
  protoOf(CancellableContinuationImpl).vs = function (takenState, cause) {
    var this_0 = this.ur_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            if (!!state.ns()) {
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.os(VOID, VOID, VOID, VOID, cause);
            if (this.ur_1.atomicfu$compareAndSet(state, update)) {
              state.ws(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.ur_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).nr = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ur_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false))
          return false;
        var tmp;
        if (isInterface(tmp0, CancelHandler)) {
          tmp = true;
        } else {
          tmp = tmp0 instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.ur_1.atomicfu$compareAndSet(tmp0, update)) {
          break $l$block;
        }
        if (isInterface(tmp0, CancelHandler)) {
          this.ms(tmp0, cause);
        } else {
          if (tmp0 instanceof Segment) {
            callSegmentOnCancellation(this, tmp0, cause);
          }
        }
        detachChildIfNonReusable(this);
        dispatchResume(this, this.es_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).xs = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.nr(cause);
    detachChildIfNonReusable(this);
  };
  protoOf(CancellableContinuationImpl).ms = function (handler, cause) {
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      handler.ys(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.l8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).zs = function (onCancellation, cause, value) {
    try {
      onCancellation(cause, value, this.l8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.l8(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).at = function (parent) {
    return parent.yp();
  };
  protoOf(CancellableContinuationImpl).ar = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.bt();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.bt();
    }
    var state = this.up();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.gp_1, this);
    if (get_isCancellableMode(this.es_1)) {
      var job = this.l8().s8(Key_instance_2);
      if (!(job == null) && !job.bp()) {
        var cause = job.yp();
        this.vs(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.ct(state);
  };
  protoOf(CancellableContinuationImpl).bt = function () {
    var tmp = this.rr_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dt(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.qs();
    this.nr(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).q8 = function (result) {
    return this.et(toState(result, this), this.es_1);
  };
  protoOf(CancellableContinuationImpl).pr = function (handler) {
    return invokeOnCancellation(this, new UserSupplied(handler));
  };
  protoOf(CancellableContinuationImpl).wr = function (handler) {
    return invokeOnCancellationImpl(this, handler);
  };
  protoOf(CancellableContinuationImpl).ft = function (proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ur_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState(this, tmp0, proposedUpdate, resumeMode, onCancellation, null);
          if (!this.ur_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonReusable(this);
          dispatchResume(this, resumeMode);
          return Unit_instance;
        } else {
          if (tmp0 instanceof CancelledContinuation) {
            if (tmp0.jt()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                this.zs(onCancellation, tmp0.gp_1, proposedUpdate);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError(this, proposedUpdate);
      }
    }
  };
  protoOf(CancellableContinuationImpl).et = function (proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    if ($super === VOID) {
      this.ft(proposedUpdate, resumeMode, onCancellation);
      tmp = Unit_instance;
    } else {
      tmp = $super.ft.call(this, proposedUpdate, resumeMode, onCancellation);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).qs = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.ts();
    this.vr_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).ct = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.hs_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).kt = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).kt.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.rr_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.lt() + '(' + toDebugString(this.rr_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).lt = function () {
    return 'CancellableContinuation';
  };
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function NotCompleted() {
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.hs_1 = result;
    this.is_1 = cancelHandler;
    this.js_1 = onCancellation;
    this.ks_1 = idempotentResume;
    this.ls_1 = cancelCause;
  }
  protoOf(CompletedContinuation).ns = function () {
    return !(this.ls_1 == null);
  };
  protoOf(CompletedContinuation).ws = function (cont, cause) {
    var tmp0_safe_receiver = this.is_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.ms(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.js_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.zs(tmp1_safe_receiver, cause, this.hs_1);
    }
  };
  protoOf(CompletedContinuation).ot = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).os = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.hs_1 : result;
    cancelHandler = cancelHandler === VOID ? this.is_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.js_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.ks_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.ls_1 : cancelCause;
    return $super === VOID ? this.ot(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.ot.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.hs_1) + ', cancelHandler=' + toString_0(this.is_1) + ', onCancellation=' + toString_0(this.js_1) + ', idempotentResume=' + toString_0(this.ks_1) + ', cancelCause=' + toString_0(this.ls_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.hs_1 == null ? 0 : hashCode(this.hs_1);
    result = imul(result, 31) + (this.is_1 == null ? 0 : hashCode(this.is_1)) | 0;
    result = imul(result, 31) + (this.js_1 == null ? 0 : hashCode(this.js_1)) | 0;
    result = imul(result, 31) + (this.ks_1 == null ? 0 : hashCode(this.ks_1)) | 0;
    result = imul(result, 31) + (this.ls_1 == null ? 0 : hashCode(this.ls_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.hs_1, tmp0_other_with_cast.hs_1))
      return false;
    if (!equals(this.is_1, tmp0_other_with_cast.is_1))
      return false;
    if (!equals(this.js_1, tmp0_other_with_cast.js_1))
      return false;
    if (!equals(this.ks_1, tmp0_other_with_cast.ks_1))
      return false;
    if (!equals(this.ls_1, tmp0_other_with_cast.ls_1))
      return false;
    return true;
  };
  function UserSupplied(handler) {
    this.pt_1 = handler;
  }
  protoOf(UserSupplied).ys = function (cause) {
    this.pt_1(cause);
  };
  protoOf(UserSupplied).toString = function () {
    return 'CancelHandler.UserSupplied[' + get_classSimpleName(this.pt_1) + '@' + get_hexAddress(this) + ']';
  };
  function CancelHandler() {
  }
  function ChildContinuation(child) {
    JobNode.call(this);
    this.ut_1 = child;
  }
  protoOf(ChildContinuation).vt = function () {
    return true;
  };
  protoOf(ChildContinuation).ys = function (cause) {
    this.ut_1.xs(this.ut_1.at(this.au()));
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.gp_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = (state == null ? true : !(state == null)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(value);
    }
    return tmp;
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.gp_1 = cause;
    this.hp_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).ip = function () {
    return this.hp_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).ps = function () {
    return this.hp_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.gp_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.it_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).jt = function () {
    return this.it_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).ju = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).t8 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).u8 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.lu();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    var tmp;
    if (exception instanceof DispatchException) {
      tmp = exception.mu_1;
    } else {
      tmp = exception;
    }
    var reportException = tmp;
    try {
      var tmp0_safe_receiver = context.s8(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp0_safe_receiver.nu(context, reportException);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(reportException, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, reportException);
  }
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.s8(Key_instance_2) == null) ? context : context.ig(Job()));
  }
  function coroutineScope(block, $completion) {
    var coroutine = new ScopeCoroutine($completion.l8(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).rp = function (block, receiver, completion) {
    var tmp;
    switch (this.l2_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).uq = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.pu_1 = new Long(0, 0);
    this.qu_1 = false;
    this.ru_1 = null;
  }
  protoOf(EventLoop).su = function () {
    var tmp0_elvis_lhs = this.ru_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.vd();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.mt();
    return true;
  };
  protoOf(EventLoop).tu = function (task) {
    var tmp0_elvis_lhs = this.ru_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      this.ru_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.td(task);
  };
  protoOf(EventLoop).uu = function () {
    return compare(this.pu_1, delta(this, true)) >= 0;
  };
  protoOf(EventLoop).vu = function () {
    var tmp0_safe_receiver = this.ru_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).wu = function (unconfined) {
    this.pu_1 = add(this.pu_1, delta(this, unconfined));
    if (!unconfined)
      this.qu_1 = true;
  };
  protoOf(EventLoop).xu = function (unconfined) {
    this.pu_1 = subtract(this.pu_1, delta(this, unconfined));
    if (compare(this.pu_1, new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.qu_1) {
      this.yu();
    }
  };
  protoOf(EventLoop).yu = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.zu_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).av = function () {
    var tmp0_elvis_lhs = this.zu_1.cv();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      ThreadLocalEventLoop_getInstance().zu_1.dv(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function Job(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.s8(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Current context doesn't contain Job in it: " + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.s8(Key_instance_2);
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).ts = function () {
  };
  protoOf(NonDisposableHandle).jq = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function invokeOnCompletion(_this__u8e3s4, invokeImmediately, handler) {
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.dq(invokeImmediately, handler);
    } else {
      var tmp_0 = handler.vt();
      tmp = _this__u8e3s4.cq(tmp_0, invokeImmediately, JobNode$invoke$ref(handler));
    }
    return tmp;
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.bp())
      throw _this__u8e3s4.yp();
  }
  function ParentJob() {
  }
  function cancel(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.gq(CancellationException_0(message, cause));
  }
  function JobNode$invoke$ref(p0) {
    var l = function (_this__u8e3s4) {
      p0.ys(_this__u8e3s4);
      return Unit_instance;
    };
    l.callableName = 'invoke';
    return l;
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ev_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function JobNode() {
    LockFreeLinkedListNode.call(this);
  }
  protoOf(JobNode).au = function () {
    var tmp = this.zt_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).bp = function () {
    return true;
  };
  protoOf(JobNode).bu = function () {
    return null;
  };
  protoOf(JobNode).ts = function () {
    return this.au().eq(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.au()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.iv_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.iv_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gp_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    wasCancelling = state.jv();
    var exceptions = state.kv(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.sq(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).ps();
      }
    }
    if (!wasCancelling) {
      $this.pq(finalException);
    }
    $this.fp(finalState);
    var casSuccess = $this.uo_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.l()) {
      if (state.jv()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.ep() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = exceptions.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.m(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = exceptions.i();
        while (_iterator__ex2g4s_0.j()) {
          var element_0 = _iterator__ex2g4s_0.k();
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.n() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.n());
    var unwrappedCause = unwrap(rootCause);
    var _iterator__ex2g4s = exceptions.i();
    while (_iterator__ex2g4s.j()) {
      var exception = _iterator__ex2g4s.k();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.h(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.uo_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.pq(null);
    $this.fp(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.tp();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      tmp0_safe_receiver.ts();
      $this.sp(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.gp_1;
    if (state instanceof JobNode) {
      try {
        state.ys(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.mp(new CompletionHandlerException('Exception in completion handler ' + state.toString() + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.bu();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion($this, tmp2_safe_receiver, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.pq(cause);
    list.lv(4);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = list.cu_1;
    while (!equals(cur, list)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = node.vt();
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.ys(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp_0 = tmp0_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.cu_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.mp(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.qq())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.tp();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.jq(cause) || isCancellation;
  }
  function notifyCompletion($this, _this__u8e3s4, cause) {
    _this__u8e3s4.lv(1);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = _this__u8e3s4.cu_1;
    while (!equals(cur, _this__u8e3s4)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = true;
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.ys(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp_0 = tmp0_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.cu_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.mp(tmp0_safe_receiver_0);
    }
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.nv_1)
        return 0;
      if (!$this.uo_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.xp();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.uo_1.atomicfu$compareAndSet(state, state.mv_1))
          return -1;
        $this.xp();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.nv_1 ? list : new InactiveNodeList(list);
    $this.uo_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.hu(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
    var list = state.cu_1;
    $this.uo_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.up();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.ov();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.ep() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).lq();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = $this.up();
      $l$block: {
        if (tmp0 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          if (tmp0.pv())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0.jv();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0.qv(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp0.rv();
          var tmp_0;
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            notifyCancelling($this, tmp0.fv_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0 == null) ? isInterface(tmp0, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0.bp()) {
              if (tryMakeCancelling($this, tmp0, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString(tmp0);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp0_elvis_lhs = state.bu();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.uo_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.ov())
      return get_COMPLETING_ALREADY();
    finishing.sv(true);
    if (!(finishing === state)) {
      if (!$this.uo_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.jv();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      finishing.qv(tmp0_safe_receiver.gp_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.rv();
    var tmp_0;
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    if (notifyRootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      notifyCancelling($this, list, notifyRootCause);
    }
    var child = nextChild($this, list);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    list.lv(2);
    var anotherChild = nextChild($this, list);
    if (!(anotherChild == null) && tryWaitForChild($this, finishing, anotherChild, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js($this, _this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gp_1;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.xv_1, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild($this_0, child_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = nextChild_0;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild($this, lastChild);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    state.fv_1.lv(2);
    var waitChildAgain = nextChild($this, lastChild);
    if (!(waitChildAgain == null) && tryWaitForChild($this, state, waitChildAgain, proposedUpdate)) {
      return Unit_instance;
    }
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.lp(finalState);
  }
  function nextChild($this, _this__u8e3s4) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (!cur.eu_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.prevNode' call
      cur = cur.du_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
      cur = cur.cu_1;
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (cur.eu_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.jv() ? 'Cancelling' : state.ov() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.bp() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.fv_1 = list;
    this.gv_1 = atomic$boolean$1(isCompleting);
    this.hv_1 = atomic$ref$1(rootCause);
    this.iv_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).bu = function () {
    return this.fv_1;
  };
  protoOf(Finishing).sv = function (value) {
    this.gv_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).ov = function () {
    return this.gv_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).yv = function (value) {
    this.hv_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).rv = function () {
    return this.hv_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).pv = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).jv = function () {
    return !(this.rv() == null);
  };
  protoOf(Finishing).bp = function () {
    return this.rv() == null;
  };
  protoOf(Finishing).kv = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        this_0.h(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.rv();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      list.h2(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.h(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).qv = function (exception) {
    var rootCause = this.rv();
    if (rootCause == null) {
      this.yv(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        this_0.h(eh);
        this_0.h(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).h(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.jv() + ', completing=' + this.ov() + ', rootCause=' + toString_0(this.rv()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.fv_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.dw_1 = parent;
    this.ew_1 = state;
    this.fw_1 = child;
    this.gw_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).vt = function () {
    return false;
  };
  protoOf(ChildCompletion).ys = function (cause) {
    continueCompleting(this.dw_1, this.ew_1, this.fw_1, this.gw_1);
  };
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.pw_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).uw = function ($this$sequence, $completion) {
    var tmp = this.vw($this$sequence, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).z8 = function (p1, $completion) {
    return this.uw(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 8;
            var state = this.pw_1.up();
            if (state instanceof ChildHandleNode) {
              this.f8_1 = 6;
              suspendResult = this.qw_1.re(state.xv_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!(state == null) ? isInterface(state, Incomplete) : false) {
                var tmp0_safe_receiver = state.bu();
                if (tmp0_safe_receiver == null) {
                  this.rw_1 = null;
                  this.f8_1 = 5;
                  continue $sm;
                } else {
                  this.tw_1 = tmp0_safe_receiver;
                  this.sw_1 = this.tw_1.cu_1;
                  this.f8_1 = 1;
                  continue $sm;
                }
              } else {
                this.f8_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.sw_1, this.tw_1)) {
              this.f8_1 = 4;
              continue $sm;
            }

            var it = this.sw_1;
            if (it instanceof ChildHandleNode) {
              this.f8_1 = 2;
              suspendResult = this.qw_1.re(it.xv_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f8_1 = 3;
              continue $sm;
            }

          case 2:
            this.f8_1 = 3;
            continue $sm;
          case 3:
            this.sw_1 = this.sw_1.cu_1;
            this.f8_1 = 1;
            continue $sm;
          case 4:
            var tmp_0 = this;
            tmp_0.rw_1 = Unit_instance;
            this.f8_1 = 5;
            continue $sm;
          case 5:
            this.f8_1 = 7;
            continue $sm;
          case 6:
            this.f8_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 8) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).vw = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.pw_1, completion);
    i.qw_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.uw($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.uo_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.vo_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).s1 = function () {
    return Key_instance_2;
  };
  protoOf(JobSupport).sp = function (value) {
    this.vo_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).tp = function () {
    return this.vo_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).wo = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.sp(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.wp();
    var handle = parent.oq(this);
    this.sp(handle);
    if (this.vp()) {
      handle.ts();
      this.sp(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).up = function () {
    return this.uo_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).bp = function () {
    var state = this.up();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.bp();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).vp = function () {
    var tmp = this.up();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).wp = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.up();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).xp = function () {
  };
  protoOf(JobSupport).yp = function () {
    var state = this.up();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.rv();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.zp(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.aq(state.gp_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).zp = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.ep() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).aq = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.zp(_this__u8e3s4, message) : $super.zp.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).bq = function (handler) {
    return this.dq(true, new InvokeOnCompletion(handler));
  };
  protoOf(JobSupport).cq = function (onCancelling, invokeImmediately, handler) {
    var tmp;
    if (onCancelling) {
      tmp = new InvokeOnCancelling(handler);
    } else {
      tmp = new InvokeOnCompletion(handler);
    }
    return this.dq(invokeImmediately, tmp);
  };
  protoOf(JobSupport).dq = function (invokeImmediately, node) {
    node.zt_1 = this;
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.up();
        if (state instanceof Empty) {
          if (state.nv_1) {
            if (this.uo_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.bu();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var tmp;
              if (node.vt()) {
                var tmp0_safe_receiver = state instanceof Finishing ? state : null;
                var rootCause = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rv();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = list.fu(node, 5);
                } else {
                  if (invokeImmediately) {
                    node.ys(rootCause);
                  }
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_0;
              } else {
                tmp = list.fu(node, 1);
              }
              if (tmp) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$0 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$0;
    if (added)
      return node;
    else if (invokeImmediately) {
      var tmp_1 = this.up();
      var tmp0_safe_receiver_0 = tmp_1 instanceof CompletedExceptionally ? tmp_1 : null;
      node.ys(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.gp_1);
    }
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).eq = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.up();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.uo_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.bu() == null)) {
            node.gu();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).fq = function () {
    return false;
  };
  protoOf(JobSupport).gq = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.ep() : null, null, this);
    } else {
      tmp = cause;
    }
    this.hq(tmp);
  };
  protoOf(JobSupport).ep = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).hq = function (cause) {
    this.kq(cause);
  };
  protoOf(JobSupport).iq = function (parentJob) {
    this.kq(parentJob);
  };
  protoOf(JobSupport).jq = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.kq(cause) && this.rq();
  };
  protoOf(JobSupport).kq = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.fq()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.lp(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).lq = function () {
    var state = this.up();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.rv();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.gp_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).mq = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.up();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.lp(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).jp = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.up();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(this, proposedUpdate));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).nq = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).oq = function (child) {
    // Inline function 'kotlin.also' call
    var this_0 = new ChildHandleNode(child);
    this_0.zt_1 = this;
    var node = this_0;
    var tmp$ret$2;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.up();
        if (state instanceof Empty) {
          if (state.nv_1) {
            if (this.uo_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$2 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.bu();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var addedBeforeCancellation = list.fu(node, 7);
              var tmp;
              if (addedBeforeCancellation) {
                tmp = true;
              } else {
                var addedBeforeCompletion = list.fu(node, 3);
                var latestState = this.up();
                var tmp_0;
                if (latestState instanceof Finishing) {
                  tmp_0 = latestState.rv();
                } else {
                  // Inline function 'kotlinx.coroutines.assert' call
                  var tmp0_safe_receiver = latestState instanceof CompletedExceptionally ? latestState : null;
                  tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gp_1;
                }
                var rootCause = tmp_0;
                node.ys(rootCause);
                var tmp_1;
                if (addedBeforeCompletion) {
                  // Inline function 'kotlinx.coroutines.assert' call
                  tmp_1 = true;
                } else {
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_1;
              }
              if (tmp) {
                tmp$ret$2 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$2 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$2;
    if (added)
      return node;
    var tmp_2 = this.up();
    var tmp0_safe_receiver_0 = tmp_2 instanceof CompletedExceptionally ? tmp_2 : null;
    node.ys(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.gp_1);
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).mp = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).pq = function (cause) {
  };
  protoOf(JobSupport).qq = function () {
    return false;
  };
  protoOf(JobSupport).rq = function () {
    return true;
  };
  protoOf(JobSupport).sq = function (exception) {
    return false;
  };
  protoOf(JobSupport).fp = function (state) {
  };
  protoOf(JobSupport).lp = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.tq() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).tq = function () {
    return this.np() + '{' + stateString(this, this.up()) + '}';
  };
  protoOf(JobSupport).np = function () {
    return get_classSimpleName(this);
  };
  function handlesExceptionF($this) {
    var tmp = $this.tp();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.au();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.rq())
        return true;
      var tmp_1 = parentJob.tp();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.au();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.wo(parent);
    this.yw_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).fq = function () {
    return true;
  };
  protoOf(JobImpl).rq = function () {
    return this.yw_1;
  };
  function Empty(isActive) {
    this.nv_1 = isActive;
  }
  protoOf(Empty).bp = function () {
    return this.nv_1;
  };
  protoOf(Empty).bu = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.nv_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function IncompleteStateBox(state) {
    this.ev_1 = state;
  }
  function NodeList() {
    LockFreeLinkedListHead.call(this);
  }
  protoOf(NodeList).bp = function () {
    return true;
  };
  protoOf(NodeList).bu = function () {
    return this;
  };
  protoOf(NodeList).cx = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.m7('List{');
    this_0.m7(state);
    this_0.m7('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = this.cu_1;
    while (!equals(cur, this)) {
      var node = cur;
      if (node instanceof JobNode) {
        if (first) {
          first = false;
        } else
          this_0.m7(', ');
        this_0.l7(node);
      }
      cur = cur.cu_1;
    }
    this_0.m7(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.cx('Active') : protoOf(LockFreeLinkedListHead).toString.call(this);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function InactiveNodeList(list) {
    this.mv_1 = list;
  }
  protoOf(InactiveNodeList).bu = function () {
    return this.mv_1;
  };
  protoOf(InactiveNodeList).bp = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.mv_1.cx('New') : anyToString(this);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.hx_1 = handler;
  }
  protoOf(InvokeOnCompletion).vt = function () {
    return false;
  };
  protoOf(InvokeOnCompletion).ys = function (cause) {
    return this.hx_1(cause);
  };
  function InvokeOnCancelling(handler) {
    JobNode.call(this);
    this.mx_1 = handler;
    this.nx_1 = atomic$boolean$1(false);
  }
  protoOf(InvokeOnCancelling).vt = function () {
    return true;
  };
  protoOf(InvokeOnCancelling).ys = function (cause) {
    if (this.nx_1.atomicfu$compareAndSet(false, true))
      this.mx_1(cause);
  };
  function ChildHandleNode(childJob) {
    JobNode.call(this);
    this.xv_1 = childJob;
  }
  protoOf(ChildHandleNode).vt = function () {
    return true;
  };
  protoOf(ChildHandleNode).ys = function (cause) {
    return this.xv_1.iq(this.au());
  };
  protoOf(ChildHandleNode).jq = function (cause) {
    return this.au().jq(cause);
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.qx();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).qx = function () {
    var main = Dispatchers_getInstance().vx();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.px();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).jq = function (cause) {
    return false;
  };
  function TimeoutCancellationException() {
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).ju = function (context) {
    return false;
  };
  protoOf(Unconfined).ku = function (context, block) {
    var yieldContext = context.s8(Key_instance_3);
    if (!(yieldContext == null)) {
      yieldContext.by_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function updateState($this, expectedState, newState) {
    var curSequence;
    var curSlots;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var oldState = $this.gy_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) && !equals(oldState, expectedState))
      return false;
    if (equals(oldState, newState))
      return true;
    $this.gy_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.hy_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.hy_1 = curSequence;
    } else {
      $this.hy_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.iy_1;
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (element == null)
            null;
          else {
            element.ny();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      if ($this.hy_1 === curSequence) {
        $this.hy_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.hy_1;
      curSlots = $this.iy_1;
    }
  }
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.gy_1 = atomic$ref$1(initialState);
    this.hy_1 = 0;
  }
  protoOf(StateFlowImpl).oy = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).t1 = function () {
    var tmp0 = get_NULL();
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var value = this.gy_1.kotlinx$atomicfu$value;
    var tmp;
    if (value === tmp0) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).py = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function AbstractSharedFlow() {
    SynchronizedObject.call(this);
    this.iy_1 = null;
    this.jy_1 = 0;
    this.ky_1 = 0;
    this.ly_1 = null;
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function get_value(_this__u8e3s4) {
    return _this__u8e3s4.cv();
  }
  function Segment() {
  }
  function ConcurrentLinkedListNode() {
  }
  function handleUncaughtCoroutineException(context, exception) {
    var _iterator__ex2g4s = get_platformExceptionHandlers().i();
    while (_iterator__ex2g4s.j()) {
      var handler = _iterator__ex2g4s.k();
      try {
        handler.nu(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _unused_var__etf5q3 = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith' call
      var state = toState_0(result);
      if (safeIsDispatchNeeded(_this__u8e3s4.yr_1, _this__u8e3s4.l8())) {
        _this__u8e3s4.as_1 = state;
        _this__u8e3s4.es_1 = 1;
        safeDispatch(_this__u8e3s4.yr_1, _this__u8e3s4.l8(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().av();
          if (false && eventLoop.vu()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.uu()) {
            _this__u8e3s4.as_1 = state;
            _this__u8e3s4.es_1 = 1;
            eventLoop.tu(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.wu(true);
            try {
              var tmp$ret$4;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.l8().s8(Key_instance_2);
                if (!(job == null) && !job.bp()) {
                  var cause = job.yp();
                  _this__u8e3s4.vs(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.q8(tmp$ret$2);
                  tmp$ret$4 = true;
                  break $l$block_0;
                }
                tmp$ret$4 = false;
              }
              if (!tmp$ret$4) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.zr_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.bs_1;
                _this__u8e3s4.zr_1.q8(result);
              }
              $l$loop: while (eventLoop.su()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.nt(e);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.xu(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_instance;
    } else {
      _this__u8e3s4.q8(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.cs_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.yr_1 = dispatcher;
    this.zr_1 = continuation;
    this.as_1 = get_UNDEFINED();
    this.bs_1 = threadContextElements(this.l8());
    this.cs_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).ds = function () {
    return !(this.cs_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).ry = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.cs_1;
    while (true) {
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).lu = function () {
    this.ry();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.qs();
    }
  };
  protoOf(DispatchedContinuation).dt = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.cs_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.cs_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!this.cs_1.atomicfu$compareAndSet(state, null)) {
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          // Inline function 'kotlin.error' call
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).fs = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.cs_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.cs_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.cs_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).us = function () {
    var state = this.as_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.as_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).rs = function () {
    return this;
  };
  protoOf(DispatchedContinuation).q8 = function (result) {
    var state = toState_0(result);
    if (safeIsDispatchNeeded(this.yr_1, this.l8())) {
      this.as_1 = state;
      this.es_1 = 0;
      safeDispatch(this.yr_1, this.l8(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().av();
        if (false && eventLoop.vu()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.uu()) {
          this.as_1 = state;
          this.es_1 = 0;
          eventLoop.tu(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.wu(true);
          try {
            this.l8();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.bs_1;
            this.zr_1.q8(result);
            $l$loop: while (eventLoop.su()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.nt(e);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.xu(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.yr_1.toString() + ', ' + toDebugString(this.zr_1) + ']';
  };
  protoOf(DispatchedContinuation).l8 = function () {
    return this.zr_1.l8();
  };
  function safeDispatch(_this__u8e3s4, context, runnable) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    try {
      _this__u8e3s4.ku(context, runnable);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        throw new DispatchException(e, _this__u8e3s4, context);
      } else {
        throw $p;
      }
    }
  }
  function safeIsDispatchNeeded(_this__u8e3s4, context) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    try {
      return _this__u8e3s4.ju(context);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        throw new DispatchException(e, _this__u8e3s4, context);
      } else {
        throw $p;
      }
    }
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.es_1 = resumeMode;
  }
  protoOf(DispatchedTask).vs = function (takenState, cause) {
  };
  protoOf(DispatchedTask).ct = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).kt = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gp_1;
  };
  protoOf(DispatchedTask).mt = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    try {
      var tmp = this.rs();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.zr_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.bs_1;
      var context = continuation.l8();
      var state = this.us();
      var exception = this.kt(state);
      var job = exception == null && get_isCancellableMode(this.es_1) ? context.s8(Key_instance_2) : null;
      if (!(job == null) && !job.bp()) {
        var cause = job.yp();
        this.vs(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.q8(tmp$ret$1);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.q8(tmp$ret$3);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.ct(state);
          var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
          continuation.q8(tmp$ret$5);
        }
      }
    } catch ($p) {
      if ($p instanceof DispatchException) {
        var e = $p;
        handleCoroutineException(this.rs().l8(), e.mu_1);
      } else {
        if ($p instanceof Error) {
          var e_0 = $p;
          this.nt(e_0);
        } else {
          throw $p;
        }
      }
    }
  };
  protoOf(DispatchedTask).nt = function (exception) {
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", exception);
    handleCoroutineException(this.rs().l8(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.rs();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.es_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.yr_1;
      var context = delegate.l8();
      if (safeIsDispatchNeeded(dispatcher, context)) {
        safeDispatch(dispatcher, context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function DispatchException(cause, dispatcher, context) {
    Exception_init_$Init$('Coroutine dispatcher ' + dispatcher.toString() + ' threw an exception, context = ' + toString(context), cause, this);
    captureStack(this, DispatchException);
    this.mu_1 = cause;
    delete this.cause;
  }
  protoOf(DispatchException).f = function () {
    return this.mu_1;
  };
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().av();
    if (eventLoop.uu()) {
      eventLoop.tu(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.wu(true);
      try {
        resume(_this__u8e3s4, _this__u8e3s4.rs(), true);
        $l$loop: while (eventLoop.su()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.nt(e);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.xu(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.us();
    var exception = _this__u8e3s4.kt(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.ct(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      this_0.zr_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.bs_1;
      this_0.zr_1.q8(result);
    } else {
      delegate.q8(result);
    }
  }
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.lr_1 = uCont;
  }
  protoOf(ScopeCoroutine).qq = function () {
    return true;
  };
  protoOf(ScopeCoroutine).lp = function (state) {
    resumeCancellableWith(intercepted(this.lr_1), recoverResult(state, this.lr_1));
  };
  protoOf(ScopeCoroutine).mr = function () {
  };
  protoOf(ScopeCoroutine).kp = function (state) {
    this.lr_1.q8(recoverResult(state, this.lr_1));
  };
  function ContextScope(context) {
    this.sy_1 = context;
  }
  protoOf(ContextScope).ap = function () {
    return this.sy_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.sy_1) + ')';
  };
  function Symbol(symbol) {
    this.ty_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.ty_1 + '>';
  };
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp, tmp$ret$0);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp, tmp$ret$0);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(fatalCompletion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function dispatcherFailure(completion, e) {
    var tmp;
    if (e instanceof DispatchException) {
      tmp = e.mu_1;
    } else {
      tmp = e;
    }
    var reportException = tmp;
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(reportException));
    completion.q8(tmp$ret$0);
    throw reportException;
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    return startUndspatched(_this__u8e3s4, true, receiver, block);
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      // Inline function 'kotlinx.coroutines.withCoroutineContext' call
      actualCompletion.l8();
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineResumed' call
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_1;
        if (e instanceof DispatchException) {
          tmp_1 = e.mu_1;
        } else {
          tmp_1 = e;
        }
        var reportException = tmp_1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$5 = _Result___init__impl__xyqfz8(createFailure(reportException));
        actualCompletion.q8(tmp$ret$5);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
      var tmp$ret$7 = _Result___init__impl__xyqfz8(value_0);
      actualCompletion.q8(tmp$ret$7);
    }
  }
  function startUndspatched(_this__u8e3s4, alwaysRethrow, receiver, block) {
    var tmp;
    try {
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof DispatchException) {
        var e = $p;
        dispatchExceptionAndMakeCompleting(_this__u8e3s4, e);
      } else {
        if ($p instanceof Error) {
          var e_0 = $p;
          tmp_0 = new CompletedExceptionally(e_0);
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var result = tmp;
    if (result === get_COROUTINE_SUSPENDED())
      return get_COROUTINE_SUSPENDED();
    var state = _this__u8e3s4.jp(result);
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return get_COROUTINE_SUSPENDED();
    _this__u8e3s4.mr();
    var tmp_1;
    if (state instanceof CompletedExceptionally) {
      var tmp_2;
      if (alwaysRethrow || notOwnTimeout(_this__u8e3s4, state.gp_1)) {
        throw recoverStackTrace(state.gp_1, _this__u8e3s4.lr_1);
      } else {
        if (result instanceof CompletedExceptionally) {
          throw recoverStackTrace(result.gp_1, _this__u8e3s4.lr_1);
        } else {
          tmp_2 = result;
        }
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = unboxState(state);
    }
    return tmp_1;
  }
  function dispatchExceptionAndMakeCompleting(_this__u8e3s4, e) {
    _this__u8e3s4.mq(new CompletedExceptionally(e.mu_1));
    throw recoverStackTrace(e.mu_1, _this__u8e3s4.lr_1);
  }
  function notOwnTimeout(_this__u8e3s4, cause) {
    var tmp;
    if (!(cause instanceof TimeoutCancellationException)) {
      tmp = true;
    } else {
      tmp = !(cause.uy_1 === _this__u8e3s4);
    }
    return tmp;
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).t9();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.cz_1 && event.data == this$0.dz_1) {
        event.stopPropagation();
        this$0.yy();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.yy();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.cz_1 = window_0;
    this.dz_1 = 'dispatchCoroutine';
    this.cz_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).ez = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).fz = function () {
    this.cz_1.postMessage(this.dz_1, '*');
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).rz = function () {
    process.nextTick(this.yz_1.wz_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.yy();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.vz_1 = dispatcher;
    var tmp = this;
    tmp.wz_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).ez = function () {
    this.vz_1.rz();
  };
  protoOf(ScheduledMessageQueue).fz = function () {
    setTimeout(this.wz_1, 0);
  };
  protoOf(ScheduledMessageQueue).zz = function (timeout) {
    setTimeout(this.wz_1, timeout);
  };
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function propagateExceptionFinalResort(exception) {
    console.error(exception.toString());
  }
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).ku = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.f10_1 = window_0;
    this.g10_1 = new WindowMessageQueue(this.f10_1);
  }
  protoOf(WindowDispatcher).ku = function (context, block) {
    return this.g10_1.gz(block);
  };
  function MessageQueue() {
    this.vy_1 = ArrayDeque_init_$Create$();
    this.wy_1 = 16;
    this.xy_1 = false;
  }
  protoOf(MessageQueue).gz = function (element) {
    this.hz(element);
    if (!this.xy_1) {
      this.xy_1 = true;
      this.ez();
    }
  };
  protoOf(MessageQueue).yy = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.wy_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.mt();
        }
         while (inductionVariable < times);
    }finally {
      if (this.l()) {
        this.xy_1 = false;
      } else {
        this.fz();
      }
    }
  };
  protoOf(MessageQueue).hz = function (element) {
    return this.vy_1.h(element);
  };
  protoOf(MessageQueue).h = function (element) {
    return this.hz((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).iz = function (index, element) {
    this.vy_1.h2(index, element);
  };
  protoOf(MessageQueue).h2 = function (index, element) {
    return this.iz(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).jz = function (element) {
    return this.vy_1.d2(element);
  };
  protoOf(MessageQueue).d2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.jz((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).kz = function (elements) {
    return this.vy_1.r(elements);
  };
  protoOf(MessageQueue).r = function (elements) {
    return this.kz(elements);
  };
  protoOf(MessageQueue).lz = function (index, elements) {
    return this.vy_1.e2(index, elements);
  };
  protoOf(MessageQueue).e2 = function (index, elements) {
    return this.lz(index, elements);
  };
  protoOf(MessageQueue).f2 = function () {
    this.vy_1.f2();
  };
  protoOf(MessageQueue).mz = function (index, element) {
    return this.vy_1.g2(index, element);
  };
  protoOf(MessageQueue).g2 = function (index, element) {
    return this.mz(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).i2 = function (index) {
    return this.vy_1.i2(index);
  };
  protoOf(MessageQueue).s = function (index) {
    return this.vy_1.s(index);
  };
  protoOf(MessageQueue).l = function () {
    return this.vy_1.l();
  };
  protoOf(MessageQueue).nz = function (element) {
    return this.vy_1.t(element);
  };
  protoOf(MessageQueue).t = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.nz((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).i = function () {
    return this.vy_1.i();
  };
  protoOf(MessageQueue).m = function (index) {
    return this.vy_1.m(index);
  };
  protoOf(MessageQueue).oz = function (element) {
    return this.vy_1.u(element);
  };
  protoOf(MessageQueue).u = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.oz((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).n = function () {
    return this.vy_1.pd_1;
  };
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).rz = function () {
    this.yz_1.zz(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.yz_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).ku = function (context, block) {
    this.yz_1.gz(block);
  };
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.ap().ig(context);
    return !(combined === Dispatchers_getInstance().rx_1) && combined.s8(Key_instance) == null ? combined.ig(Dispatchers_getInstance().rx_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.ig(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).kp = function (state) {
    return this.lr_1.q8(recoverResult(state, this.lr_1));
  };
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.rx_1 = createDefaultDispatcher();
    this.sx_1 = Unconfined_getInstance();
    this.tx_1 = new JsMainDispatcher(this.rx_1, false);
    this.ux_1 = null;
  }
  protoOf(Dispatchers).vx = function () {
    var tmp0_elvis_lhs = this.ux_1;
    return tmp0_elvis_lhs == null ? this.tx_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.o10_1 = delegate;
    this.p10_1 = invokeImmediately;
    this.q10_1 = this.p10_1 ? this : new JsMainDispatcher(this.o10_1, true);
  }
  protoOf(JsMainDispatcher).px = function () {
    return this.q10_1;
  };
  protoOf(JsMainDispatcher).ju = function (context) {
    return !this.p10_1;
  };
  protoOf(JsMainDispatcher).ku = function (context, block) {
    return this.o10_1.ku(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.qx();
    return tmp0_elvis_lhs == null ? this.o10_1.toString() : tmp0_elvis_lhs;
  };
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    captureStack(this, JobCancellationException);
    this.r10_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.r10_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.r10_1, this.r10_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.r10_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function CancellationException_0(message, cause) {
    return CancellationException_init_$Create$_0(message, cause);
  }
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function LockFreeLinkedListNode() {
    this.cu_1 = this;
    this.du_1 = this;
    this.eu_1 = false;
  }
  protoOf(LockFreeLinkedListNode).fu = function (node, permissionsBitmask) {
    var prev = this.du_1;
    var tmp;
    if (prev instanceof ListClosed) {
      tmp = ((prev.v10_1 & permissionsBitmask) === 0 && prev.fu(node, permissionsBitmask));
    } else {
      node.cu_1 = this;
      node.du_1 = prev;
      prev.cu_1 = node;
      this.du_1 = node;
      tmp = true;
    }
    return tmp;
  };
  protoOf(LockFreeLinkedListNode).lv = function (forbiddenElementsBit) {
    this.fu(new ListClosed(forbiddenElementsBit), forbiddenElementsBit);
  };
  protoOf(LockFreeLinkedListNode).gu = function () {
    if (this.eu_1)
      return false;
    var prev = this.du_1;
    var next = this.cu_1;
    prev.cu_1 = next;
    next.du_1 = prev;
    this.eu_1 = true;
    return true;
  };
  protoOf(LockFreeLinkedListNode).hu = function (node) {
    if (!(this.cu_1 === this))
      return false;
    this.fu(node, -2147483648);
    return true;
  };
  function LockFreeLinkedListHead() {
    LockFreeLinkedListNode.call(this);
  }
  function ListClosed(forbiddenElementsBitmask) {
    LockFreeLinkedListNode.call(this);
    this.v10_1 = forbiddenElementsBitmask;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function unwrap(exception) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.bv_1 = null;
  }
  protoOf(CommonThreadLocal).cv = function () {
    var tmp = this.bv_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).dv = function (value) {
    this.bv_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).ig = plus;
  protoOf(JobSupport).s8 = get_0;
  protoOf(JobSupport).hg = fold;
  protoOf(JobSupport).gg = minusKey_0;
  protoOf(CancellableContinuationImpl).or = cancel$default;
  protoOf(CoroutineDispatcher).s8 = get;
  protoOf(CoroutineDispatcher).gg = minusKey;
  defineProp(protoOf(DispatchException), 'cause', function () {
    return this.f();
  });
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_3 = new Key_2();
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.b = coroutineScope;
  _.$_$.c = withContext;
  _.$_$.d = Key_instance_1;
  _.$_$.e = Key_instance_2;
  _.$_$.f = MutableStateFlow;
  _.$_$.g = CancellableContinuationImpl;
  _.$_$.h = CoroutineDispatcher;
  _.$_$.i = CoroutineScope_0;
  _.$_$.j = CoroutineScope;
  _.$_$.k = Job;
  _.$_$.l = SupervisorJob;
  _.$_$.m = cancel;
  _.$_$.n = get_job;
  _.$_$.o = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
