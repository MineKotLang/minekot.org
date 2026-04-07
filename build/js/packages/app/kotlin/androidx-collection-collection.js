(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-collection-collection'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-collection-collection'.");
    }
    globalThis['androidx-collection-collection'] = factory(typeof globalThis['androidx-collection-collection'] === 'undefined' ? {} : globalThis['androidx-collection-collection'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var clz32 = Math.clz32;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var protoOf = kotlin_kotlin.$_$.y7;
  var arrayCopy = kotlin_kotlin.$_$.x2;
  var copyOf = kotlin_kotlin.$_$.f3;
  var initMetadataForClass = kotlin_kotlin.$_$.i7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v;
  var getNumberHashCode = kotlin_kotlin.$_$.e7;
  var until = kotlin_kotlin.$_$.f8;
  var longArray = kotlin_kotlin.$_$.t7;
  var Long = kotlin_kotlin.$_$.oa;
  var fill = kotlin_kotlin.$_$.p3;
  var shiftLeft = kotlin_kotlin.$_$.l6;
  var invert = kotlin_kotlin.$_$.i6;
  var bitwiseAnd = kotlin_kotlin.$_$.b6;
  var bitwiseOr = kotlin_kotlin.$_$.c6;
  var shiftRightUnsigned = kotlin_kotlin.$_$.m6;
  var fromInt = kotlin_kotlin.$_$.h6;
  var negate = kotlin_kotlin.$_$.k6;
  var shiftRight = kotlin_kotlin.$_$.n6;
  var multiply = kotlin_kotlin.$_$.j6;
  var bitwiseXor = kotlin_kotlin.$_$.d6;
  var subtract = kotlin_kotlin.$_$.o6;
  var equalsLong = kotlin_kotlin.$_$.g6;
  var countTrailingZeroBits = kotlin_kotlin.$_$.ua;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.w1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.x1;
  var ulongCompare = kotlin_kotlin.$_$.eb;
  var add = kotlin_kotlin.$_$.a6;
  var get_lastIndex = kotlin_kotlin.$_$.y3;
  var compare = kotlin_kotlin.$_$.e6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var copyOf_0 = kotlin_kotlin.$_$.h3;
  var THROW_CCE = kotlin_kotlin.$_$.qa;
  var hashCode = kotlin_kotlin.$_$.h7;
  var equals = kotlin_kotlin.$_$.b7;
  var KtMutableList = kotlin_kotlin.$_$.q2;
  var checkIndexOverflow = kotlin_kotlin.$_$.b3;
  var fill_0 = kotlin_kotlin.$_$.q3;
  var toString = kotlin_kotlin.$_$.cb;
  var longArrayOf = kotlin_kotlin.$_$.s7;
  var CoroutineImpl = kotlin_kotlin.$_$.u5;
  var SequenceScope = kotlin_kotlin.$_$.m8;
  var numberRangeToNumber = kotlin_kotlin.$_$.u7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.f5;
  var initMetadataForLambda = kotlin_kotlin.$_$.m7;
  var iterator = kotlin_kotlin.$_$.q8;
  var getKClassFromExpression = kotlin_kotlin.$_$.g8;
  var KtSet = kotlin_kotlin.$_$.u2;
  var Collection = kotlin_kotlin.$_$.m2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.i1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DoubleList, 'DoubleList');
  initMetadataForClass(MutableDoubleList, 'MutableDoubleList', MutableDoubleList, DoubleList);
  initMetadataForClass(IntIntMap, 'IntIntMap');
  initMetadataForClass(MutableIntIntMap, 'MutableIntIntMap', MutableIntIntMap, IntIntMap);
  initMetadataForClass(IntList, 'IntList');
  initMetadataForClass(MutableIntList, 'MutableIntList', MutableIntList, IntList);
  initMetadataForClass(IntObjectMap, 'IntObjectMap');
  initMetadataForClass(MutableIntObjectMap, 'MutableIntObjectMap', MutableIntObjectMap, IntObjectMap);
  initMetadataForClass(IntSet, 'IntSet');
  initMetadataForClass(MutableIntSet, 'MutableIntSet', MutableIntSet, IntSet);
  initMetadataForClass(ObjectIntMap, 'ObjectIntMap');
  initMetadataForClass(MutableObjectIntMap, 'MutableObjectIntMap', MutableObjectIntMap, ObjectIntMap);
  initMetadataForClass(MutableObjectListIterator, 'MutableObjectListIterator');
  initMetadataForClass(ObjectListMutableList, 'ObjectListMutableList', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ObjectList, 'ObjectList');
  initMetadataForClass(MutableObjectList, 'MutableObjectList', MutableObjectList, ObjectList);
  initMetadataForClass(ScatterMap, 'ScatterMap');
  initMetadataForClass(MutableScatterMap, 'MutableScatterMap', MutableScatterMap, ScatterMap);
  initMetadataForClass(ScatterSet, 'ScatterSet');
  initMetadataForClass(MutableScatterSet, 'MutableScatterSet', MutableScatterSet, ScatterSet);
  initMetadataForLambda(SetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SetWrapper, 'SetWrapper', VOID, VOID, [KtSet]);
  initMetadataForLambda(MutableSetWrapper$iterator$o$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutableSetWrapper$iterator$1);
  initMetadataForClass(MutableSetWrapper, 'MutableSetWrapper', VOID, SetWrapper, [SetWrapper, KtSet, Collection]);
  //endregion
  function MutableDoubleList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    DoubleList.call(this, initialCapacity);
  }
  protoOf(MutableDoubleList).ai = function (element) {
    this.di(this.ci_1 + 1 | 0);
    this.bi_1[this.ci_1] = element;
    this.ci_1 = this.ci_1 + 1 | 0;
    return true;
  };
  protoOf(MutableDoubleList).ei = function (index, elements) {
    if (!(0 <= index ? index <= this.ci_1 : false)) {
      throwIndexOutOfBoundsException('');
    }
    // Inline function 'kotlin.collections.isEmpty' call
    if (elements.length === 0)
      return false;
    this.di(this.ci_1 + elements.length | 0);
    var content = this.bi_1;
    if (!(index === this.ci_1)) {
      var tmp4 = index + elements.length | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.ci_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, tmp4, index, endIndex);
    }
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = elements.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = elements;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, content, index, 0, endIndex_0);
    this.ci_1 = this.ci_1 + elements.length | 0;
    return true;
  };
  protoOf(MutableDoubleList).di = function (capacity) {
    var oldContent = this.bi_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.bi_1 = copyOf(oldContent, newSize);
    }
  };
  function DoubleList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyDoubleArray();
    } else {
      tmp_0 = new Float64Array(initialCapacity);
    }
    tmp.bi_1 = tmp_0;
    this.ci_1 = 0;
  }
  protoOf(DoubleList).fi = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.g(prefix);
      // Inline function 'androidx.collection.DoubleList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.bi_1;
      var inductionVariable = 0;
      var last = this.ci_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.g(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.g(separator);
          }
          this_0.za(element);
        }
         while (inductionVariable < last);
      this_0.g(postfix);
    }
    return this_0.toString();
  };
  protoOf(DoubleList).gi = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.fi(separator, prefix, postfix, limit, truncated) : $super.fi.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(DoubleList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.DoubleList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.bi_1;
    var inductionVariable = 0;
    var last = this.ci_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = content[i];
        hashCode = hashCode + imul(31, getNumberHashCode(element)) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(DoubleList).equals = function (other) {
    var tmp;
    if (!(other instanceof DoubleList)) {
      tmp = true;
    } else {
      tmp = !(other.ci_1 === this.ci_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.bi_1;
    var otherContent = other.bi_1;
    // Inline function 'androidx.collection.DoubleList.indices' call
    var progression = until(0, this.ci_1);
    var inductionVariable = progression.x_1;
    var last = progression.y_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(content[i] === otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(DoubleList).toString = function () {
    return this.gi(VOID, '[', ']');
  };
  function get_EmptyDoubleArray() {
    _init_properties_DoubleSet_kt__4b4k9t();
    return EmptyDoubleArray;
  }
  var EmptyDoubleArray;
  var properties_initialized_DoubleSet_kt_kcrj8h;
  function _init_properties_DoubleSet_kt__4b4k9t() {
    if (!properties_initialized_DoubleSet_kt_kcrj8h) {
      properties_initialized_DoubleSet_kt_kcrj8h = true;
      EmptyDoubleArray = new Float64Array(0);
    }
  }
  function initializeStorage($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.ki_1 = newCapacity;
    initializeMetadata($this, newCapacity);
    $this.ii_1 = new Int32Array(newCapacity);
    $this.ji_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.hi_1 = tmp_0;
    var tmp0 = $this.hi_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth($this);
  }
  function initializeGrowth($this) {
    $this.ri_1 = loadedCapacity($this.si()) - $this.li_1 | 0;
  }
  function findInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.ki_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.hi_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$4 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$4);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if ($this.ii_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot($this, hash1);
    var tmp_0;
    if ($this.ri_1 === 0) {
      var tmp0_0 = $this.hi_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$11 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$11, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.ti();
      index_0 = findFirstAvailableSlot($this, hash1);
    }
    $this.li_1 = $this.li_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.ri_1;
    var tmp_3;
    var tmp0_1 = $this.hi_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$13, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.ri_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.hi_1;
    var tmp2 = $this.ki_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot($this, hash1) {
    var probeMask = $this.ki_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.hi_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntIntMap.call(this);
    this.ri_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntIntMap).ui = function (key, value) {
    var index = findInsertIndex(this, key);
    if (index < 0)
      index = ~index;
    this.ii_1[index] = key;
    this.ji_1[index] = value;
  };
  protoOf(MutableIntIntMap).ti = function () {
    var tmp;
    if (this.ki_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.li_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.ki_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.wi();
    } else {
      this.vi(nextCapacity(this.ki_1));
    }
  };
  protoOf(MutableIntIntMap).wi = function () {
    var metadata = this.hi_1;
    var capacity = this.ki_1;
    var keys = this.ii_1;
    var values = this.ji_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = keys[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = 0;
        values[targetIndex] = values[index];
        values[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth(this);
  };
  protoOf(MutableIntIntMap).vi = function (newCapacity) {
    var previousMetadata = this.hi_1;
    var previousKeys = this.ii_1;
    var previousValues = this.ji_1;
    var previousCapacity = this.ki_1;
    initializeStorage(this, newCapacity);
    var newMetadata = this.hi_1;
    var newKeys = this.ii_1;
    var newValues = this.ji_1;
    var capacity = this.ki_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$0 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$0, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function IntIntMap() {
    this.hi_1 = get_EmptyGroup();
    this.ii_1 = get_EmptyIntArray();
    this.ji_1 = get_EmptyIntArray();
    this.ki_1 = 0;
    this.li_1 = 0;
  }
  protoOf(IntIntMap).si = function () {
    return this.ki_1;
  };
  protoOf(IntIntMap).n = function () {
    return this.li_1;
  };
  protoOf(IntIntMap).l = function () {
    return this.li_1 === 0;
  };
  protoOf(IntIntMap).m = function (key) {
    var index = this.yi(key);
    if (index < 0) {
      throwNoSuchElementException('Cannot find value for key ' + key);
    }
    return this.ji_1[index];
  };
  protoOf(IntIntMap).xi = function (key) {
    return this.yi(key) >= 0;
  };
  protoOf(IntIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.ii_1;
    var v = this.ji_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.hi_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  hash = hash + (k[index] ^ v[index]) | 0;
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntIntMap)) {
      return false;
    }
    if (!(other.n() === this.n())) {
      return false;
    }
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.ii_1;
    var v = this.ji_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.hi_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  var index_0 = other.yi(tmp0);
                  if (index_0 < 0 || !(value_0 === other.ji_1[index_0])) {
                    return false;
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntIntMap).toString = function () {
    if (this.l()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().n7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.ii_1;
    var v = this.ji_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.hi_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  s.xa(tmp0);
                  s.m7('=');
                  s.xa(value_0);
                  i = i + 1 | 0;
                  if (i < this.li_1) {
                    s.n7(_Char___init__impl__6a9atx(44)).n7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.n7(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(IntIntMap).yi = function (key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.ki_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.hi_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$4 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$4);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (this.ii_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function MutableIntList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    IntList.call(this, initialCapacity);
  }
  protoOf(MutableIntList).bj = function (element) {
    this.di(this.dj_1 + 1 | 0);
    this.cj_1[this.dj_1] = element;
    this.dj_1 = this.dj_1 + 1 | 0;
    return true;
  };
  protoOf(MutableIntList).di = function (capacity) {
    var oldContent = this.cj_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.cj_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableIntList).i2 = function (index) {
    if (!(0 <= index ? index < this.dj_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.cj_1;
    var item = content[index];
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (!(index === (this.dj_1 - 1 | 0))) {
      var tmp6 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.dj_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, index, tmp6, endIndex);
    }
    this.dj_1 = this.dj_1 - 1 | 0;
    return item;
  };
  protoOf(MutableIntList).d4 = function (start, end) {
    if (!(0 <= start ? start <= this.dj_1 : false) || !(0 <= end ? end <= this.dj_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    if (end < start) {
      throwIllegalArgumentException('The end index must be < start index');
    }
    if (!(end === start)) {
      if (end < this.dj_1) {
        var tmp0 = this.cj_1;
        var tmp2 = this.cj_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = this.dj_1;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = tmp0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, tmp2, start, end, endIndex);
      }
      this.dj_1 = this.dj_1 - (end - start | 0) | 0;
    }
  };
  protoOf(MutableIntList).ej = function (index, element) {
    if (!(0 <= index ? index < this.dj_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.cj_1;
    var old = content[index];
    content[index] = element;
    return old;
  };
  function IntList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyIntArray();
    } else {
      tmp_0 = new Int32Array(initialCapacity);
    }
    tmp.cj_1 = tmp_0;
    this.dj_1 = 0;
  }
  protoOf(IntList).fj = function () {
    // Inline function 'androidx.collection.IntList.isEmpty' call
    if (this.dj_1 === 0) {
      throwNoSuchElementException('IntList is empty.');
    }
    return this.cj_1[0];
  };
  protoOf(IntList).m = function (index) {
    if (!(0 <= index ? index < this.dj_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    return this.cj_1[index];
  };
  protoOf(IntList).gj = function () {
    // Inline function 'androidx.collection.IntList.isEmpty' call
    if (this.dj_1 === 0) {
      throwNoSuchElementException('IntList is empty.');
    }
    var tmp = this.cj_1;
    // Inline function 'androidx.collection.IntList.lastIndex' call
    return tmp[this.dj_1 - 1 | 0];
  };
  protoOf(IntList).fi = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.g(prefix);
      // Inline function 'androidx.collection.IntList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.cj_1;
      var inductionVariable = 0;
      var last = this.dj_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.g(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.g(separator);
          }
          this_0.xa(element);
        }
         while (inductionVariable < last);
      this_0.g(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntList).hj = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.fi(separator, prefix, postfix, limit, truncated) : $super.fi.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.IntList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.cj_1;
    var inductionVariable = 0;
    var last = this.dj_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = content[i];
        hashCode = hashCode + imul(31, element) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(IntList).equals = function (other) {
    var tmp;
    if (!(other instanceof IntList)) {
      tmp = true;
    } else {
      tmp = !(other.dj_1 === this.dj_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.cj_1;
    var otherContent = other.cj_1;
    // Inline function 'androidx.collection.IntList.indices' call
    var progression = until(0, this.dj_1);
    var inductionVariable = progression.x_1;
    var last = progression.y_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(content[i] === otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(IntList).toString = function () {
    return this.hj(VOID, '[', ']');
  };
  function initializeStorage_0($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.lj_1 = newCapacity;
    initializeMetadata_0($this, newCapacity);
    $this.jj_1 = new Int32Array(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.kj_1 = Array(newCapacity);
  }
  function initializeMetadata_0($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.ij_1 = tmp_0;
    var tmp0 = $this.ij_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_0($this);
  }
  function initializeGrowth_0($this) {
    $this.sj_1 = loadedCapacity($this.si()) - $this.mj_1 | 0;
  }
  function findAbsoluteInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.lj_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.ij_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$4 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$4);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if ($this.jj_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_0($this, hash1);
    var tmp_0;
    if ($this.sj_1 === 0) {
      var tmp0_0 = $this.ij_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$11 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$11, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.ti();
      index_0 = findFirstAvailableSlot_0($this, hash1);
    }
    $this.mj_1 = $this.mj_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.sj_1;
    var tmp_3;
    var tmp0_1 = $this.ij_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$13, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.sj_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.ij_1;
    var tmp2 = $this.lj_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_0($this, hash1) {
    var probeMask = $this.lj_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.ij_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntObjectMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntObjectMap.call(this);
    this.sj_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_0(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntObjectMap).tj = function (key, value) {
    var index = findAbsoluteInsertIndex(this, key);
    this.jj_1[index] = key;
    this.kj_1[index] = value;
  };
  protoOf(MutableIntObjectMap).uj = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.lj_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ij_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$4 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$4);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.jj_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    if (index_0 >= 0) {
      return this.vj(index_0);
    }
    return null;
  };
  protoOf(MutableIntObjectMap).vj = function (index) {
    this.mj_1 = this.mj_1 - 1 | 0;
    var tmp0 = this.ij_1;
    var tmp2 = this.lj_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    var oldValue = this.kj_1[index];
    this.kj_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableIntObjectMap).ti = function () {
    var tmp;
    if (this.lj_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.mj_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.lj_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.wi();
    } else {
      this.vi(nextCapacity(this.lj_1));
    }
  };
  protoOf(MutableIntObjectMap).wi = function () {
    var metadata = this.ij_1;
    var capacity = this.lj_1;
    var keys = this.jj_1;
    var values = this.kj_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = keys[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_0(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = 0;
        values[targetIndex] = values[index];
        values[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_0(this);
  };
  protoOf(MutableIntObjectMap).vi = function (newCapacity) {
    var previousMetadata = this.ij_1;
    var previousKeys = this.jj_1;
    var previousValues = this.kj_1;
    var previousCapacity = this.lj_1;
    initializeStorage_0(this, newCapacity);
    var newMetadata = this.ij_1;
    var newKeys = this.jj_1;
    var newValues = this.kj_1;
    var capacity = this.lj_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$0 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$0, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_0(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function IntObjectMap() {
    this.ij_1 = get_EmptyGroup();
    this.jj_1 = get_EmptyIntArray();
    this.kj_1 = get_EMPTY_OBJECTS();
    this.lj_1 = 0;
    this.mj_1 = 0;
  }
  protoOf(IntObjectMap).si = function () {
    return this.lj_1;
  };
  protoOf(IntObjectMap).n = function () {
    return this.mj_1;
  };
  protoOf(IntObjectMap).l = function () {
    return this.mj_1 === 0;
  };
  protoOf(IntObjectMap).m = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.lj_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ij_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$4 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$4);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.jj_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.kj_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(IntObjectMap).xi = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.lj_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ij_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$4 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$4);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.jj_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntObjectMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.jj_1;
    var v = this.kj_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.ij_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp0 = k[index];
                  var tmp = v[index];
                  var tmp_0 = hash;
                  var tmp_1 = tmp0;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_0 + (tmp_1 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntObjectMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntObjectMap)) {
      return false;
    }
    if (!(other.n() === this.n())) {
      return false;
    }
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.jj_1;
    var v = this.kj_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.ij_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp0 = k[index];
                  var tmp = v[index];
                  var value_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (value_0 == null) {
                    if (!(other.m(tmp0) == null) || !other.xi(tmp0)) {
                      return false;
                    }
                  } else if (!equals(value_0, other.m(tmp0))) {
                    return false;
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntObjectMap).toString = function () {
    if (this.l()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().n7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.jj_1;
    var v = this.kj_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.ij_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var tmp = v[index];
                  var value_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  s.xa(tmp0);
                  s.m7('=');
                  s.l7(value_0 === this ? '(this)' : value_0);
                  i = i + 1 | 0;
                  if (i < this.mj_1) {
                    s.n7(_Char___init__impl__6a9atx(44)).n7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.n7(_Char___init__impl__6a9atx(125)).toString();
  };
  var EmptyIntSet;
  function get_EmptyIntArray() {
    _init_properties_IntSet_kt__km4dgt();
    return EmptyIntArray;
  }
  var EmptyIntArray;
  function initializeStorage_1($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.yj_1 = newCapacity;
    initializeMetadata_1($this, newCapacity);
    $this.xj_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_1($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.wj_1 = tmp_0;
    var tmp0 = $this.wj_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_1($this);
  }
  function initializeGrowth_1($this) {
    $this.ek_1 = loadedCapacity($this.si()) - $this.zj_1 | 0;
  }
  function removeElementAt($this, index) {
    $this.zj_1 = $this.zj_1 - 1 | 0;
    var tmp0 = $this.wj_1;
    var tmp2 = $this.yj_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
  }
  function findAbsoluteInsertIndex_0($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.yj_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.wj_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$4 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$4);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if ($this.xj_1[index] === element) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_1($this, hash1);
    var tmp_0;
    if ($this.ek_1 === 0) {
      var tmp0_0 = $this.wj_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$11 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$11, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.ti();
      index_0 = findFirstAvailableSlot_1($this, hash1);
    }
    $this.zj_1 = $this.zj_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.ek_1;
    var tmp_3;
    var tmp0_1 = $this.wj_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$13, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.ek_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.wj_1;
    var tmp2 = $this.yj_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_1($this, hash1) {
    var probeMask = $this.yj_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.wj_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntSet.call(this);
    this.ek_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_1(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntSet).bj = function (element) {
    var oldSize = this.zj_1;
    var index = findAbsoluteInsertIndex_0(this, element);
    this.xj_1[index] = element;
    return !(this.zj_1 === oldSize);
  };
  protoOf(MutableIntSet).uj = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.yj_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.wj_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$4 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$4);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.xj_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var exists = index_0 >= 0;
    if (exists) {
      removeElementAt(this, index_0);
    }
    return exists;
  };
  protoOf(MutableIntSet).ti = function () {
    var tmp;
    if (this.yj_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.zj_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.yj_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.wi();
    } else {
      this.vi(nextCapacity(this.yj_1));
    }
  };
  protoOf(MutableIntSet).wi = function () {
    var metadata = this.wj_1;
    var capacity = this.yj_1;
    var elements = this.xj_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = elements[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_1(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        elements[targetIndex] = elements[index];
        elements[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_1(this);
  };
  protoOf(MutableIntSet).vi = function (newCapacity) {
    var previousMetadata = this.wj_1;
    var previousElements = this.xj_1;
    var previousCapacity = this.yj_1;
    initializeStorage_1(this, newCapacity);
    var newMetadata = this.wj_1;
    var newElements = this.xj_1;
    var capacity = this.yj_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$0 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$0, new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousElement, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_1(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function mutableIntSetOf() {
    _init_properties_IntSet_kt__km4dgt();
    return new MutableIntSet();
  }
  function IntSet() {
    this.wj_1 = get_EmptyGroup();
    this.xj_1 = get_EmptyIntArray();
    this.yj_1 = 0;
    this.zj_1 = 0;
  }
  protoOf(IntSet).si = function () {
    return this.yj_1;
  };
  protoOf(IntSet).fk = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.yj_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.wj_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$4 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$4);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.xj_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntSet).fi = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.g(prefix);
      var index = 0;
      // Inline function 'androidx.collection.IntSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.xj_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.wj_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value = bitwiseAnd(slot, new Long(255, 0));
                  if (compare(value, new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.g(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.g(separator);
                    }
                    this_0.xa(element);
                    index = index + 1 | 0;
                  }
                  slot = shiftRight(slot, 8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.g(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntSet).gk = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.fi(separator, prefix, postfix, limit, truncated) : $super.fi.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.xj_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.wj_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  hash = hash + k[index] | 0;
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntSet)) {
      return false;
    }
    if (!(other.zj_1 === this.zj_1)) {
      return false;
    }
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.xj_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.wj_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var element = k[index];
                  if (!other.fk(element)) {
                    return false;
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntSet).toString = function () {
    return this.gk(VOID, '[', ']');
  };
  var properties_initialized_IntSet_kt_za7tcl;
  function _init_properties_IntSet_kt__km4dgt() {
    if (!properties_initialized_IntSet_kt_za7tcl) {
      properties_initialized_IntSet_kt_za7tcl = true;
      EmptyIntSet = new MutableIntSet(0);
      EmptyIntArray = new Int32Array(0);
    }
  }
  function ObjectIntMap() {
    this.hk_1 = get_EmptyGroup();
    this.ik_1 = get_EMPTY_OBJECTS();
    this.jk_1 = get_EmptyIntArray();
    this.kk_1 = 0;
    this.lk_1 = 0;
  }
  protoOf(ObjectIntMap).si = function () {
    return this.kk_1;
  };
  protoOf(ObjectIntMap).n = function () {
    return this.lk_1;
  };
  protoOf(ObjectIntMap).l = function () {
    return this.lk_1 === 0;
  };
  protoOf(ObjectIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.ik_1;
    var v = this.jk_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.hk_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp0 == null ? null : hashCode(tmp0);
                  hash = tmp_0 + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ v[index]) | 0;
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ObjectIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectIntMap)) {
      return false;
    }
    if (!(other.n() === this.n())) {
      return false;
    }
    var o = other instanceof ObjectIntMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.ik_1;
    var v = this.jk_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.hk_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value_0 = v[index];
                  var index_0 = o.mk(tmp0);
                  if (index_0 < 0 || !(value_0 === o.jk_1[index_0])) {
                    return false;
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ObjectIntMap).toString = function () {
    if (this.l()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().n7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.ik_1;
    var v = this.jk_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.hk_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value_0 = v[index];
                  s.l7(tmp0 === this ? '(this)' : tmp0);
                  s.m7('=');
                  s.xa(value_0);
                  i = i + 1 | 0;
                  if (i < this.lk_1) {
                    s.n7(_Char___init__impl__6a9atx(44)).n7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.n7(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectIntMap).mk = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.kk_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.hk_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals(this.ik_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function initializeStorage_2($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.kk_1 = newCapacity;
    initializeMetadata_2($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.ik_1 = Array(newCapacity);
    $this.jk_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_2($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.hk_1 = tmp_0;
    var tmp0 = $this.hk_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_2($this);
  }
  function initializeGrowth_2($this) {
    $this.sk_1 = loadedCapacity($this.si()) - $this.lk_1 | 0;
  }
  function findIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.kk_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.hk_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals($this.ik_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_2($this, hash1);
    var tmp_0;
    if ($this.sk_1 === 0) {
      var tmp0_0 = $this.hk_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.ti();
      index_0 = findFirstAvailableSlot_2($this, hash1);
    }
    $this.lk_1 = $this.lk_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.sk_1;
    var tmp_3;
    var tmp0_1 = $this.hk_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.sk_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.hk_1;
    var tmp2 = $this.kk_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot_2($this, hash1) {
    var probeMask = $this.kk_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.hk_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableObjectIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectIntMap.call(this);
    this.sk_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_2(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectIntMap).tk = function (key, value, default_0) {
    var index = findIndex(this, key);
    var previous = default_0;
    if (index < 0) {
      index = ~index;
    } else {
      previous = this.jk_1[index];
    }
    this.ik_1[index] = key;
    this.jk_1[index] = value;
    return previous;
  };
  protoOf(MutableObjectIntMap).uk = function (index) {
    this.lk_1 = this.lk_1 - 1 | 0;
    var tmp0 = this.hk_1;
    var tmp2 = this.kk_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.ik_1[index] = null;
  };
  protoOf(MutableObjectIntMap).ti = function () {
    var tmp;
    if (this.kk_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.lk_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.kk_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.wi();
    } else {
      this.vi(nextCapacity(this.kk_1));
    }
  };
  protoOf(MutableObjectIntMap).wi = function () {
    var metadata = this.hk_1;
    var capacity = this.kk_1;
    var keys = this.ik_1;
    var values = this.jk_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = keys[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_2(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = null;
        values[targetIndex] = values[index];
        values[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_2(this);
  };
  protoOf(MutableObjectIntMap).vi = function (newCapacity) {
    var previousMetadata = this.hk_1;
    var previousKeys = this.ik_1;
    var previousValues = this.jk_1;
    var previousCapacity = this.kk_1;
    initializeStorage_2(this, newCapacity);
    var newMetadata = this.hk_1;
    var newKeys = this.ik_1;
    var newValues = this.jk_1;
    var capacity = this.kk_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$0 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$0, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_2(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function get_EmptyArray() {
    _init_properties_ObjectList_kt__fnapct();
    return EmptyArray;
  }
  var EmptyArray;
  function get_EmptyObjectList() {
    _init_properties_ObjectList_kt__fnapct();
    return EmptyObjectList;
  }
  var EmptyObjectList;
  function throwIndexOutOfBoundsInclusiveException($this, index) {
    throwIndexOutOfBoundsException('Index ' + index + ' must be in 0..' + $this.wk_1);
  }
  function MutableObjectListIterator(list, index) {
    this.xk_1 = list;
    this.yk_1 = index - 1 | 0;
  }
  protoOf(MutableObjectListIterator).j = function () {
    return this.yk_1 < (this.xk_1.n() - 1 | 0);
  };
  protoOf(MutableObjectListIterator).k = function () {
    this.yk_1 = this.yk_1 + 1 | 0;
    return this.xk_1.m(this.yk_1);
  };
  protoOf(MutableObjectListIterator).k3 = function () {
    this.xk_1.i2(this.yk_1);
    this.yk_1 = this.yk_1 - 1 | 0;
  };
  protoOf(MutableObjectListIterator).u3 = function () {
    return this.yk_1 >= 0;
  };
  protoOf(MutableObjectListIterator).v3 = function () {
    return this.yk_1 + 1 | 0;
  };
  protoOf(MutableObjectListIterator).w3 = function () {
    var tmp1 = this.yk_1;
    this.yk_1 = tmp1 - 1 | 0;
    return this.xk_1.m(tmp1);
  };
  protoOf(MutableObjectListIterator).x3 = function () {
    return this.yk_1;
  };
  function ObjectListMutableList(objectList) {
    this.zk_1 = objectList;
  }
  protoOf(ObjectListMutableList).n = function () {
    return this.zk_1.n();
  };
  protoOf(ObjectListMutableList).de = function (element) {
    return this.zk_1.t(element);
  };
  protoOf(ObjectListMutableList).t = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.de((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).m = function (index) {
    checkIndex(this, index);
    return this.zk_1.m(index);
  };
  protoOf(ObjectListMutableList).al = function (element) {
    return this.zk_1.u(element);
  };
  protoOf(ObjectListMutableList).u = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.al((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).l = function () {
    return this.zk_1.l();
  };
  protoOf(ObjectListMutableList).i = function () {
    return new MutableObjectListIterator(this, 0);
  };
  protoOf(ObjectListMutableList).bl = function (element) {
    return this.zk_1.h(element);
  };
  protoOf(ObjectListMutableList).h = function (element) {
    return this.bl((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).fl = function (index, element) {
    return this.zk_1.h2(index, element);
  };
  protoOf(ObjectListMutableList).h2 = function (index, element) {
    return this.fl(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).gl = function (index, elements) {
    return this.zk_1.e2(index, elements);
  };
  protoOf(ObjectListMutableList).e2 = function (index, elements) {
    return this.gl(index, elements);
  };
  protoOf(ObjectListMutableList).hl = function (elements) {
    return this.zk_1.il(elements);
  };
  protoOf(ObjectListMutableList).r = function (elements) {
    return this.hl(elements);
  };
  protoOf(ObjectListMutableList).f2 = function () {
    return this.zk_1.f2();
  };
  protoOf(ObjectListMutableList).s = function (index) {
    return new MutableObjectListIterator(this, index);
  };
  protoOf(ObjectListMutableList).jl = function (element) {
    return this.zk_1.d2(element);
  };
  protoOf(ObjectListMutableList).d2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.jl((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).i2 = function (index) {
    checkIndex(this, index);
    return this.zk_1.i2(index);
  };
  protoOf(ObjectListMutableList).kl = function (index, element) {
    checkIndex(this, index);
    return this.zk_1.g2(index, element);
  };
  protoOf(ObjectListMutableList).g2 = function (index, element) {
    return this.kl(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function MutableObjectList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    ObjectList.call(this, initialCapacity);
    this.el_1 = null;
  }
  protoOf(MutableObjectList).h = function (element) {
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.wk_1 + 1 | 0;
    var oldContent = this.vk_1;
    if (oldContent.length < capacity) {
      this.ll(capacity, oldContent);
    }
    this.vk_1[this.wk_1] = element;
    this.wk_1 = this.wk_1 + 1 | 0;
    return true;
  };
  protoOf(MutableObjectList).h2 = function (index, element) {
    if (!(0 <= index ? index <= this.wk_1 : false)) {
      throwIndexOutOfBoundsInclusiveException(this, index);
    }
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.wk_1 + 1 | 0;
    var oldContent = this.vk_1;
    if (oldContent.length < capacity) {
      this.ll(capacity, oldContent);
    }
    var content = this.vk_1;
    if (!(index === this.wk_1)) {
      var tmp4 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.wk_1;
      arrayCopy(content, content, tmp4, index, endIndex);
    }
    content[index] = element;
    this.wk_1 = this.wk_1 + 1 | 0;
  };
  protoOf(MutableObjectList).e2 = function (index, elements) {
    if (!(0 <= index ? index <= this.wk_1 : false)) {
      throwIndexOutOfBoundsInclusiveException(this, index);
    }
    if (elements.l())
      return false;
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.wk_1 + elements.n() | 0;
    var oldContent = this.vk_1;
    if (oldContent.length < capacity) {
      this.ll(capacity, oldContent);
    }
    var content = this.vk_1;
    if (!(index === this.wk_1)) {
      var tmp4 = index + elements.n() | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.wk_1;
      arrayCopy(content, content, tmp4, index, endIndex);
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index_0 = 0;
    var _iterator__ex2g4s = elements.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var _unary__edvuaz = index_0;
      index_0 = _unary__edvuaz + 1 | 0;
      content[index + checkIndexOverflow(_unary__edvuaz) | 0] = item;
    }
    this.wk_1 = this.wk_1 + elements.n() | 0;
    return true;
  };
  protoOf(MutableObjectList).ml = function (elements) {
    var oldSize = this.wk_1;
    this.nl(elements);
    return !(oldSize === this.wk_1);
  };
  protoOf(MutableObjectList).il = function (elements) {
    var oldSize = this.wk_1;
    this.ol(elements);
    return !(oldSize === this.wk_1);
  };
  protoOf(MutableObjectList).nl = function (elements) {
    if (elements.l())
      return Unit_instance;
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.wk_1 + elements.wk_1 | 0;
    var oldContent = this.vk_1;
    if (oldContent.length < capacity) {
      this.ll(capacity, oldContent);
    }
    var content = this.vk_1;
    var tmp0 = elements.vk_1;
    var tmp4 = this.wk_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = elements.wk_1;
    arrayCopy(tmp0, content, tmp4, 0, endIndex);
    this.wk_1 = this.wk_1 + elements.wk_1 | 0;
  };
  protoOf(MutableObjectList).ol = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
      this.h(element);
    }
  };
  protoOf(MutableObjectList).f2 = function () {
    fill_0(this.vk_1, null, 0, this.wk_1);
    this.wk_1 = 0;
  };
  protoOf(MutableObjectList).ll = function (capacity, oldContent) {
    var oldSize = oldContent.length;
    // Inline function 'kotlin.math.max' call
    var b = imul(oldSize, 3) / 2 | 0;
    var newSize = Math.max(capacity, b);
    // Inline function 'kotlin.arrayOfNulls' call
    var newContent = Array(newSize);
    var tmp = this;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(oldContent, newContent, 0, 0, oldSize);
    tmp.vk_1 = newContent;
  };
  protoOf(MutableObjectList).d2 = function (element) {
    var index = this.u(element);
    if (index >= 0) {
      this.i2(index);
      return true;
    }
    return false;
  };
  protoOf(MutableObjectList).i2 = function (index) {
    if (!(0 <= index ? index < this.wk_1 : false)) {
      this.pl(index);
    }
    var content = this.vk_1;
    var element = content[index];
    // Inline function 'androidx.collection.ObjectList.lastIndex' call
    if (!(index === (this.wk_1 - 1 | 0))) {
      var tmp6 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.wk_1;
      arrayCopy(content, content, index, tmp6, endIndex);
    }
    this.wk_1 = this.wk_1 - 1 | 0;
    content[this.wk_1] = null;
    return (element == null ? true : !(element == null)) ? element : THROW_CCE();
  };
  protoOf(MutableObjectList).g2 = function (index, element) {
    if (!(0 <= index ? index < this.wk_1 : false)) {
      this.pl(index);
    }
    var content = this.vk_1;
    var old = content[index];
    content[index] = element;
    return (old == null ? true : !(old == null)) ? old : THROW_CCE();
  };
  protoOf(MutableObjectList).ql = function () {
    var tmp0_elvis_lhs = this.el_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ObjectListMutableList(this);
      this.el_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function ObjectList$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString(element);
      }
      return tmp;
    };
  }
  function ObjectList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyArray();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_0 = Array(initialCapacity);
    }
    tmp.vk_1 = tmp_0;
    this.wk_1 = 0;
  }
  protoOf(ObjectList).n = function () {
    return this.wk_1;
  };
  protoOf(ObjectList).t = function (element) {
    return this.u(element) >= 0;
  };
  protoOf(ObjectList).fj = function () {
    if (this.l()) {
      throwNoSuchElementException('ObjectList is empty.');
    }
    var tmp = this.vk_1[0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ObjectList).m = function (index) {
    if (!(0 <= index ? index < this.wk_1 : false)) {
      this.pl(index);
    }
    var tmp = this.vk_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ObjectList).pl = function (index) {
    // Inline function 'androidx.collection.ObjectList.lastIndex' call
    var tmp$ret$0 = this.wk_1 - 1 | 0;
    throwIndexOutOfBoundsException('Index ' + index + ' must be in 0..' + tmp$ret$0);
  };
  protoOf(ObjectList).u = function (element) {
    if (element == null) {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.vk_1;
      var inductionVariable = 0;
      var last = this.wk_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = content[i];
          if (((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()) == null) {
            return i;
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content_0 = this.vk_1;
      var inductionVariable_0 = 0;
      var last_0 = this.wk_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp_0 = content_0[i_0];
          var item = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          if (equals(element, item)) {
            return i_0;
          }
        }
         while (inductionVariable_0 < last_0);
    }
    return -1;
  };
  protoOf(ObjectList).l = function () {
    return this.wk_1 === 0;
  };
  protoOf(ObjectList).rl = function () {
    return !(this.wk_1 === 0);
  };
  protoOf(ObjectList).sl = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.g(prefix);
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.vk_1;
      var inductionVariable = 0;
      var last = this.wk_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = content[i];
          var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          if (i === limit) {
            this_0.g(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.g(separator);
          }
          if (transform == null) {
            this_0.l7(element);
          } else {
            this_0.g(transform(element));
          }
        }
         while (inductionVariable < last);
      this_0.g(postfix);
    }
    return this_0.toString();
  };
  protoOf(ObjectList).tl = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.sl(separator, prefix, postfix, limit, truncated, transform) : $super.sl.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ObjectList).hashCode = function () {
    var hashCode_0 = 0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.vk_1;
    var inductionVariable = 0;
    var last = this.wk_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = content[i];
        var tmp_0 = hashCode_0;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        hashCode_0 = tmp_0 + imul(31, tmp$ret$1) | 0;
      }
       while (inductionVariable < last);
    return hashCode_0;
  };
  protoOf(ObjectList).equals = function (other) {
    var tmp;
    if (!(other instanceof ObjectList)) {
      tmp = true;
    } else {
      tmp = !(other.wk_1 === this.wk_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.vk_1;
    var otherContent = other.vk_1;
    // Inline function 'androidx.collection.ObjectList.indices' call
    var progression = until(0, this.wk_1);
    var inductionVariable = progression.x_1;
    var last = progression.y_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(content[i], otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(ObjectList).toString = function () {
    return this.tl(VOID, '[', ']', VOID, VOID, ObjectList$toString$lambda(this));
  };
  function emptyObjectList() {
    _init_properties_ObjectList_kt__fnapct();
    var tmp = get_EmptyObjectList();
    return tmp instanceof ObjectList ? tmp : THROW_CCE();
  }
  function mutableObjectListOf(element1, element2) {
    _init_properties_ObjectList_kt__fnapct();
    var list = new MutableObjectList(2);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.h(element1);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.h(element2);
    return list;
  }
  function objectListOf(element1) {
    _init_properties_ObjectList_kt__fnapct();
    return mutableObjectListOf_0(element1);
  }
  function checkIndex(_this__u8e3s4, index) {
    _init_properties_ObjectList_kt__fnapct();
    var size = _this__u8e3s4.n();
    if (index < 0 || index >= size) {
      throwIndexOutOfBoundsException('Index ' + index + ' is out of bounds. The list has ' + size + ' elements.');
    }
  }
  function mutableObjectListOf_0(element1) {
    _init_properties_ObjectList_kt__fnapct();
    var list = new MutableObjectList(1);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.h(element1);
    return list;
  }
  var properties_initialized_ObjectList_kt_7isazj;
  function _init_properties_ObjectList_kt__fnapct() {
    if (!properties_initialized_ObjectList_kt_7isazj) {
      properties_initialized_ObjectList_kt_7isazj = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EmptyArray = Array(0);
      EmptyObjectList = new MutableObjectList(0);
    }
  }
  function get_EmptyGroup() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyGroup;
  }
  var EmptyGroup;
  function get_EmptyScatterMap() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyScatterMap;
  }
  var EmptyScatterMap;
  function initializeStorage_3($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.math.max' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.xl_1 = newCapacity;
    initializeMetadata_3($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = Array(newCapacity);
    }
    tmp_0.vl_1 = tmp_1;
    var tmp_2 = $this;
    var tmp_3;
    if (newCapacity === 0) {
      tmp_3 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_3 = Array(newCapacity);
    }
    tmp_2.wl_1 = tmp_3;
  }
  function initializeMetadata_3($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = capacity >> 3;
      var b = (capacity & 7) << 3;
      this_0[i] = bitwiseOr(bitwiseAnd(this_0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
      tmp_0 = this_0;
    }
    tmp.ul_1 = tmp_0;
    initializeGrowth_3($this);
  }
  function initializeGrowth_3($this) {
    $this.em_1 = loadedCapacity($this.si()) - $this.yl_1 | 0;
  }
  function findFirstAvailableSlot_3($this, hash1) {
    var probeMask = $this.xl_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.ul_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableScatterMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterMap.call(this);
    this.em_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_3(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterMap).fm = function (key, value) {
    // Inline function 'kotlin.let' call
    var index = this.gm(key);
    var index_0 = index < 0 ? ~index : index;
    this.vl_1[index_0] = key;
    this.wl_1[index_0] = value;
  };
  protoOf(MutableScatterMap).b2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.xl_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ul_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$5 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$5);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.vl_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    if (index_0 >= 0) {
      return this.vj(index_0);
    }
    return null;
  };
  protoOf(MutableScatterMap).vj = function (index) {
    this.yl_1 = this.yl_1 - 1 | 0;
    var tmp0 = this.ul_1;
    var tmp2 = this.xl_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.vl_1[index] = null;
    var oldValue = this.wl_1[index];
    this.wl_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableScatterMap).f2 = function () {
    this.yl_1 = 0;
    if (!(this.ul_1 === get_EmptyGroup())) {
      fill(this.ul_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.ul_1;
      var tmp2 = this.xl_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.wl_1, null, 0, this.xl_1);
    fill_0(this.vl_1, null, 0, this.xl_1);
    initializeGrowth_3(this);
  };
  protoOf(MutableScatterMap).gm = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.xl_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.ul_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals(this.vl_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_3(this, hash1);
    var tmp_0;
    if (this.em_1 === 0) {
      var tmp0_0 = this.ul_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.ti();
      index_0 = findFirstAvailableSlot_3(this, hash1);
    }
    this.yl_1 = this.yl_1 + 1 | 0;
    var tmp_1 = this;
    var tmp_2 = this.em_1;
    var tmp_3;
    var tmp0_1 = this.ul_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.em_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = this.ul_1;
    var tmp2 = this.xl_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return ~index_0;
  };
  protoOf(MutableScatterMap).ti = function () {
    var tmp;
    if (this.xl_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.yl_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.xl_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.wi();
    } else {
      this.vi(nextCapacity(this.xl_1));
    }
  };
  protoOf(MutableScatterMap).wi = function () {
    var metadata = this.ul_1;
    var capacity = this.xl_1;
    var keys = this.vl_1;
    var values = this.wl_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = keys[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_3(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = metadata[0];
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = null;
        values[targetIndex] = values[index];
        values[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = metadata[0];
      index = index + 1 | 0;
    }
    initializeGrowth_3(this);
  };
  protoOf(MutableScatterMap).vi = function (newCapacity) {
    var previousMetadata = this.ul_1;
    var previousKeys = this.vl_1;
    var previousValues = this.wl_1;
    var previousCapacity = this.xl_1;
    initializeStorage_3(this, newCapacity);
    var newMetadata = this.ul_1;
    var newKeys = this.vl_1;
    var newValues = this.wl_1;
    var capacity = this.xl_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$0 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$0, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_3(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function ScatterMap() {
    this.ul_1 = get_EmptyGroup();
    this.vl_1 = get_EMPTY_OBJECTS();
    this.wl_1 = get_EMPTY_OBJECTS();
    this.xl_1 = 0;
    this.yl_1 = 0;
  }
  protoOf(ScatterMap).si = function () {
    return this.xl_1;
  };
  protoOf(ScatterMap).n = function () {
    return this.yl_1;
  };
  protoOf(ScatterMap).l = function () {
    return this.yl_1 === 0;
  };
  protoOf(ScatterMap).rl = function () {
    return !(this.yl_1 === 0);
  };
  protoOf(ScatterMap).w1 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.xl_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ul_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$5 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$5);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.vl_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.wl_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(ScatterMap).a5 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.xl_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ul_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$5 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$5);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.vl_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterMap).u1 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.xl_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ul_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$5 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$5);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.vl_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.vl_1;
    var v = this.wl_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.ul_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp0 == null ? null : hashCode(tmp0);
                  var tmp_2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs_0 = value_0 == null ? null : hashCode(value_0);
                  hash = tmp_1 + (tmp_2 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0)) | 0;
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ScatterMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterMap)) {
      return false;
    }
    if (!(other.n() === this.n())) {
      return false;
    }
    var o = other instanceof ScatterMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.vl_1;
    var v = this.wl_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.ul_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  if (value_0 == null) {
                    if (!(o.w1(tmp0) == null) || !o.u1(tmp0)) {
                      return false;
                    }
                  } else if (!equals(value_0, o.w1(tmp0))) {
                    return false;
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ScatterMap).toString = function () {
    if (this.l()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().n7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.vl_1;
    var v = this.wl_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.ul_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$0 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$0, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp = k[index];
                  var tmp0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  s.l7(tmp0 === this ? '(this)' : tmp0);
                  s.m7('=');
                  s.l7(value_0 === this ? '(this)' : value_0);
                  i = i + 1 | 0;
                  if (i < this.yl_1) {
                    s.n7(_Char___init__impl__6a9atx(44)).n7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.n7(_Char___init__impl__6a9atx(125)).toString();
  };
  function emptyScatterMap() {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp = get_EmptyScatterMap();
    return tmp instanceof ScatterMap ? tmp : THROW_CCE();
  }
  function mutableScatterMapOf() {
    _init_properties_ScatterMap_kt__cygxb2();
    return new MutableScatterMap();
  }
  function unloadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 8;
    }
    return capacity + ((capacity - 1 | 0) / 7 | 0) | 0;
  }
  function normalizeCapacity(n) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (n > 0) {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = -1 >>> clz32(n) | 0;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function loadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 6;
    }
    return capacity - (capacity / 8 | 0) | 0;
  }
  function nextCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (capacity === 0) {
      tmp = 6;
    } else {
      tmp = imul(capacity, 2) + 1 | 0;
    }
    return tmp;
  }
  var properties_initialized_ScatterMap_kt_apzngg;
  function _init_properties_ScatterMap_kt__cygxb2() {
    if (!properties_initialized_ScatterMap_kt_apzngg) {
      properties_initialized_ScatterMap_kt_apzngg = true;
      // Inline function 'kotlin.longArrayOf' call
      EmptyGroup = longArrayOf([new Long(-2139062017, -2139062144), new Long(-1, -1)]);
      EmptyScatterMap = new MutableScatterMap(0);
    }
  }
  var EmptyScatterSet;
  function ScatterSet$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString(element);
      }
      return tmp;
    };
  }
  function ScatterSet() {
    this.hm_1 = get_EmptyGroup();
    this.im_1 = get_EMPTY_OBJECTS();
    this.jm_1 = 0;
    this.km_1 = 0;
  }
  protoOf(ScatterSet).si = function () {
    return this.jm_1;
  };
  protoOf(ScatterSet).n = function () {
    return this.km_1;
  };
  protoOf(ScatterSet).l = function () {
    return this.km_1 === 0;
  };
  protoOf(ScatterSet).rl = function () {
    return !(this.km_1 === 0);
  };
  protoOf(ScatterSet).t = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.jm_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.hm_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$5 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$5);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.im_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterSet).sl = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.g(prefix);
      var index = 0;
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var elements = this.im_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.hm_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value = bitwiseAnd(slot, new Long(255, 0));
                  if (compare(value, new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    var tmp = elements[index_0];
                    var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    if (index === limit) {
                      this_0.g(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.g(separator);
                    }
                    if (transform == null) {
                      this_0.l7(element);
                    } else {
                      this_0.g(transform(element));
                    }
                    index = index + 1 | 0;
                  }
                  slot = shiftRight(slot, 8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.g(postfix);
    }
    return this_0.toString();
  };
  protoOf(ScatterSet).lm = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.sl(separator, prefix, postfix, limit, truncated, transform) : $super.sl.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ScatterSet).hashCode = function () {
    var hash = this.jm_1;
    hash = imul(31, hash) + this.km_1 | 0;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.im_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.hm_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = elements[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!equals(element, this)) {
                    var tmp_0 = hash;
                    // Inline function 'kotlin.hashCode' call
                    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
                    hash = tmp_0 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ScatterSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterSet)) {
      return false;
    }
    if (!(other.n() === this.n())) {
      return false;
    }
    var o = other instanceof ScatterSet ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.im_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.hm_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = elements[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!o.t(element)) {
                    return false;
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ScatterSet).toString = function () {
    return this.lm(VOID, '[', ']', VOID, VOID, ScatterSet$toString$lambda(this));
  };
  function initializeStorage_4($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.jm_1 = newCapacity;
    initializeMetadata_4($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = Array(newCapacity);
    }
    tmp_0.im_1 = tmp_1;
  }
  function initializeMetadata_4($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.hm_1 = tmp_0;
    var tmp0 = $this.hm_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_4($this);
  }
  function initializeGrowth_4($this) {
    $this.qm_1 = loadedCapacity($this.si()) - $this.km_1 | 0;
  }
  function findAbsoluteInsertIndex_1($this, element) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.jm_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.hm_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals($this.im_1[index], element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_4($this, hash1);
    var tmp_0;
    if ($this.qm_1 === 0) {
      var tmp0_0 = $this.hm_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.ti();
      index_0 = findFirstAvailableSlot_4($this, hash1);
    }
    $this.km_1 = $this.km_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.qm_1;
    var tmp_3;
    var tmp0_1 = $this.hm_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.qm_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.hm_1;
    var tmp2 = $this.jm_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_4($this, hash1) {
    var probeMask = $this.jm_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.hm_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableScatterSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterSet.call(this);
    this.qm_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_4(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterSet).h = function (element) {
    var oldSize = this.n();
    var index = findAbsoluteInsertIndex_1(this, element);
    this.im_1[index] = element;
    return !(this.n() === oldSize);
  };
  protoOf(MutableScatterSet).rm = function (element) {
    var index = findAbsoluteInsertIndex_1(this, element);
    this.im_1[index] = element;
  };
  protoOf(MutableScatterSet).il = function (elements) {
    var oldSize = this.n();
    this.ol(elements);
    return !(oldSize === this.n());
  };
  protoOf(MutableScatterSet).sm = function (elements) {
    var oldSize = this.n();
    this.tm(elements);
    return !(oldSize === this.n());
  };
  protoOf(MutableScatterSet).ol = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      this.rm(element);
    }
  };
  protoOf(MutableScatterSet).tm = function (elements) {
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements_0 = elements.im_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = elements.hm_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp = elements_0[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  this.rm(element);
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  protoOf(MutableScatterSet).d2 = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.jm_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.hm_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$5 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$5);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.im_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var exists = index_0 >= 0;
    if (exists) {
      this.um(index_0);
    }
    return exists;
  };
  protoOf(MutableScatterSet).um = function (index) {
    this.km_1 = this.km_1 - 1 | 0;
    var tmp0 = this.hm_1;
    var tmp2 = this.jm_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.im_1[index] = null;
  };
  protoOf(MutableScatterSet).f2 = function () {
    this.km_1 = 0;
    if (!(this.hm_1 === get_EmptyGroup())) {
      fill(this.hm_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.hm_1;
      var tmp2 = this.jm_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.im_1, null, 0, this.jm_1);
    initializeGrowth_4(this);
  };
  protoOf(MutableScatterSet).ti = function () {
    var tmp;
    if (this.jm_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.km_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.jm_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.wi();
    } else {
      this.vi(nextCapacity(this.jm_1));
    }
  };
  protoOf(MutableScatterSet).wi = function () {
    var metadata = this.hm_1;
    var capacity = this.jm_1;
    var elements = this.im_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = elements[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_4(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        elements[targetIndex] = elements[index];
        elements[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_4(this);
  };
  protoOf(MutableScatterSet).vi = function (newCapacity) {
    var previousMetadata = this.hm_1;
    var previousElements = this.im_1;
    var previousCapacity = this.jm_1;
    initializeStorage_4(this, newCapacity);
    var newMetadata = this.hm_1;
    var newElements = this.im_1;
    var capacity = this.jm_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$0 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$0, new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousElement == null ? null : hashCode(previousElement);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_4(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  protoOf(MutableScatterSet).vm = function () {
    return new MutableSetWrapper(this);
  };
  function mutableScatterSetOf() {
    _init_properties_ScatterSet_kt__vy48mc();
    return new MutableScatterSet();
  }
  function mutableScatterSetOf_0(element1, element2) {
    _init_properties_ScatterSet_kt__vy48mc();
    // Inline function 'kotlin.apply' call
    var this_0 = new MutableScatterSet(2);
    this_0.rm(element1);
    this_0.rm(element2);
    return this_0;
  }
  function SetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.en_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetWrapper$iterator$slambda).pn = function ($this$iterator, $completion) {
    var tmp = this.qn($this$iterator, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(SetWrapper$iterator$slambda).z8 = function (p1, $completion) {
    return this.pn(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SetWrapper$iterator$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 11;
            var this_0 = this.en_1.rn_1;
            this.in_1 = this_0.im_1;
            this.on_1 = this_0;
            this.f8_1 = 1;
            continue $sm;
          case 1:
            this.mn_1 = this.on_1.hm_1;
            this.ln_1 = this.mn_1.length - 2 | 0;
            this.nn_1 = numberRangeToNumber(0, this.ln_1).i();
            this.f8_1 = 2;
            continue $sm;
          case 2:
            if (!this.nn_1.j()) {
              this.f8_1 = 9;
              continue $sm;
            }

            this.jn_1 = this.nn_1.k();
            this.hn_1 = this.mn_1[this.jn_1];
            var this_1 = this.hn_1;
            if (!equalsLong(bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144)), new Long(-2139062144, -2139062144))) {
              this.gn_1 = 8 - (~(this.jn_1 - this.ln_1 | 0) >>> 31 | 0) | 0;
              this.kn_1 = until(0, this.gn_1).i();
              this.f8_1 = 3;
              continue $sm;
            } else {
              this.f8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.kn_1.j()) {
              this.f8_1 = 6;
              continue $sm;
            }

            var j = this.kn_1.k();
            var value = bitwiseAnd(this.hn_1, new Long(255, 0));
            if (compare(value, new Long(128, 0)) < 0) {
              var index = (this.jn_1 << 3) + j | 0;
              var tmp_0 = this.in_1[index];
              var element = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
              this.f8_1 = 4;
              suspendResult = this.fn_1.re(element, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f8_1 = 5;
              continue $sm;
            }

          case 4:
            this.f8_1 = 5;
            continue $sm;
          case 5:
            this.hn_1 = shiftRight(this.hn_1, 8);
            this.f8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.gn_1 === 8)) {
              this.f8_1 = 10;
              continue $sm;
            } else {
              this.f8_1 = 7;
              continue $sm;
            }

          case 7:
            this.f8_1 = 8;
            continue $sm;
          case 8:
            this.f8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.f8_1 = 1;
              continue $sm;
            }

            this.f8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 11) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SetWrapper$iterator$slambda).qn = function ($this$iterator, completion) {
    var i = new SetWrapper$iterator$slambda(this.en_1, completion);
    i.fn_1 = $this$iterator;
    return i;
  };
  function SetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.pn($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetWrapper(parent) {
    this.rn_1 = parent;
  }
  protoOf(SetWrapper).n = function () {
    return this.rn_1.km_1;
  };
  protoOf(SetWrapper).r1 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (!this.rn_1.t(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SetWrapper).t = function (element) {
    return this.rn_1.t(element);
  };
  protoOf(SetWrapper).l = function () {
    return this.rn_1.l();
  };
  protoOf(SetWrapper).i = function () {
    return iterator(SetWrapper$iterator$slambda_0(this, null));
  };
  protoOf(SetWrapper).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof SetWrapper))
      THROW_CCE();
    return this.rn_1.equals(other.rn_1);
  };
  protoOf(SetWrapper).hashCode = function () {
    return this.rn_1.hashCode();
  };
  protoOf(SetWrapper).toString = function () {
    return this.rn_1.toString();
  };
  function MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation) {
    this.ao_1 = this$0;
    this.bo_1 = this$1;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).pn = function ($this$iterator, $completion) {
    var tmp = this.qn($this$iterator, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).z8 = function (p1, $completion) {
    return this.pn(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 11;
            this.ko_1 = this.ao_1.mo_1;
            this.f8_1 = 1;
            continue $sm;
          case 1:
            this.io_1 = this.ko_1.hm_1;
            this.ho_1 = this.io_1.length - 2 | 0;
            this.jo_1 = numberRangeToNumber(0, this.ho_1).i();
            this.f8_1 = 2;
            continue $sm;
          case 2:
            if (!this.jo_1.j()) {
              this.f8_1 = 9;
              continue $sm;
            }

            this.fo_1 = this.jo_1.k();
            this.eo_1 = this.io_1[this.fo_1];
            var this_0 = this.eo_1;
            if (!equalsLong(bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144)), new Long(-2139062144, -2139062144))) {
              this.do_1 = 8 - (~(this.fo_1 - this.ho_1 | 0) >>> 31 | 0) | 0;
              this.go_1 = until(0, this.do_1).i();
              this.f8_1 = 3;
              continue $sm;
            } else {
              this.f8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.go_1.j()) {
              this.f8_1 = 6;
              continue $sm;
            }

            var j = this.go_1.k();
            var value = bitwiseAnd(this.eo_1, new Long(255, 0));
            if (compare(value, new Long(128, 0)) < 0) {
              var index = (this.fo_1 << 3) + j | 0;
              this.bo_1.no_1 = index;
              this.f8_1 = 4;
              var tmp_0 = this.ao_1.mo_1.im_1[index];
              suspendResult = this.co_1.re((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f8_1 = 5;
              continue $sm;
            }

          case 4:
            this.f8_1 = 5;
            continue $sm;
          case 5:
            this.eo_1 = shiftRight(this.eo_1, 8);
            this.f8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.do_1 === 8)) {
              this.f8_1 = 10;
              continue $sm;
            } else {
              this.f8_1 = 7;
              continue $sm;
            }

          case 7:
            this.f8_1 = 8;
            continue $sm;
          case 8:
            this.f8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.f8_1 = 1;
              continue $sm;
            }

            this.f8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 11) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).qn = function ($this$iterator, completion) {
    var i = new MutableSetWrapper$iterator$o$iterator$slambda(this.ao_1, this.bo_1, completion);
    i.co_1 = $this$iterator;
    return i;
  };
  function MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this$1, resultContinuation) {
    var i = new MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.pn($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableSetWrapper$iterator$1(this$0) {
    this.po_1 = this$0;
    this.no_1 = -1;
    var tmp = this;
    tmp.oo_1 = iterator(MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this, null));
  }
  protoOf(MutableSetWrapper$iterator$1).j = function () {
    return this.oo_1.j();
  };
  protoOf(MutableSetWrapper$iterator$1).k = function () {
    return this.oo_1.k();
  };
  protoOf(MutableSetWrapper$iterator$1).k3 = function () {
    if (!(this.no_1 === -1)) {
      this.po_1.mo_1.um(this.no_1);
      this.no_1 = -1;
    }
  };
  function MutableSetWrapper(parent) {
    SetWrapper.call(this, parent);
    this.mo_1 = parent;
  }
  protoOf(MutableSetWrapper).h = function (element) {
    return this.mo_1.h(element);
  };
  protoOf(MutableSetWrapper).r = function (elements) {
    return this.mo_1.il(elements);
  };
  protoOf(MutableSetWrapper).i = function () {
    return new MutableSetWrapper$iterator$1(this);
  };
  protoOf(MutableSetWrapper).d2 = function (element) {
    return this.mo_1.d2(element);
  };
  var properties_initialized_ScatterSet_kt_dmj456;
  function _init_properties_ScatterSet_kt__vy48mc() {
    if (!properties_initialized_ScatterSet_kt_dmj456) {
      properties_initialized_ScatterSet_kt_dmj456 = true;
      EmptyScatterSet = new MutableScatterSet(0);
    }
  }
  var EMPTY_INTS;
  var EMPTY_LONGS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      EMPTY_LONGS = longArray(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = Array(0);
    }
  }
  function throwIndexOutOfBoundsException(message) {
    throw IndexOutOfBoundsException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function throwNoSuchElementException(message) {
    throw NoSuchElementException_init_$Create$(message);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MutableDoubleList;
  _.$_$.b = MutableIntIntMap;
  _.$_$.c = MutableIntList;
  _.$_$.d = MutableIntObjectMap;
  _.$_$.e = MutableIntSet;
  _.$_$.f = MutableObjectIntMap;
  _.$_$.g = MutableObjectList;
  _.$_$.h = MutableScatterMap;
  _.$_$.i = MutableScatterSet;
  _.$_$.j = ObjectList;
  _.$_$.k = ScatterSet;
  _.$_$.l = emptyObjectList;
  _.$_$.m = emptyScatterMap;
  _.$_$.n = mutableIntSetOf;
  _.$_$.o = mutableObjectListOf;
  _.$_$.p = mutableScatterMapOf;
  _.$_$.q = mutableScatterSetOf_0;
  _.$_$.r = mutableScatterSetOf;
  _.$_$.s = objectListOf;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-collection-collection.js.map
