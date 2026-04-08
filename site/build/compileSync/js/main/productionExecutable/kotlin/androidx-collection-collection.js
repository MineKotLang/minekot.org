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
  var VOID = kotlin_kotlin.$_$.d;
  var Unit_instance = kotlin_kotlin.$_$.g4;
  var protoOf = kotlin_kotlin.$_$.ob;
  var arrayCopy = kotlin_kotlin.$_$.g5;
  var copyOf = kotlin_kotlin.$_$.v5;
  var initMetadataForClass = kotlin_kotlin.$_$.pa;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var getNumberHashCode = kotlin_kotlin.$_$.la;
  var until = kotlin_kotlin.$_$.yb;
  var longArray = kotlin_kotlin.$_$.ib;
  var Long = kotlin_kotlin.$_$.bf;
  var fill = kotlin_kotlin.$_$.g6;
  var shiftLeft = kotlin_kotlin.$_$.p9;
  var invert = kotlin_kotlin.$_$.j9;
  var bitwiseAnd = kotlin_kotlin.$_$.a9;
  var bitwiseOr = kotlin_kotlin.$_$.b9;
  var shiftRightUnsigned = kotlin_kotlin.$_$.q9;
  var fromInt = kotlin_kotlin.$_$.i9;
  var negate = kotlin_kotlin.$_$.n9;
  var shiftRight = kotlin_kotlin.$_$.r9;
  var multiply = kotlin_kotlin.$_$.m9;
  var bitwiseXor = kotlin_kotlin.$_$.c9;
  var subtract = kotlin_kotlin.$_$.s9;
  var equalsLong = kotlin_kotlin.$_$.h9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.uf;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.y2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.z2;
  var ulongCompare = kotlin_kotlin.$_$.jg;
  var add = kotlin_kotlin.$_$.z8;
  var get_lastIndex = kotlin_kotlin.$_$.r6;
  var compare = kotlin_kotlin.$_$.d9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c2;
  var copyOf_0 = kotlin_kotlin.$_$.y5;
  var THROW_CCE = kotlin_kotlin.$_$.ff;
  var hashCode = kotlin_kotlin.$_$.oa;
  var equals = kotlin_kotlin.$_$.ia;
  var KtMutableList = kotlin_kotlin.$_$.y4;
  var checkIndexOverflow = kotlin_kotlin.$_$.k5;
  var fill_0 = kotlin_kotlin.$_$.h6;
  var toString = kotlin_kotlin.$_$.hg;
  var longArrayOf = kotlin_kotlin.$_$.hb;
  var CoroutineImpl = kotlin_kotlin.$_$.t8;
  var SequenceScope = kotlin_kotlin.$_$.jc;
  var numberRangeToNumber = kotlin_kotlin.$_$.jb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e8;
  var initMetadataForLambda = kotlin_kotlin.$_$.ta;
  var iterator = kotlin_kotlin.$_$.nc;
  var getKClassFromExpression = kotlin_kotlin.$_$.bc;
  var KtSet = kotlin_kotlin.$_$.d5;
  var KtMutableSet = kotlin_kotlin.$_$.b5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.t1;
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
  initMetadataForClass(MutableSetWrapper, 'MutableSetWrapper', VOID, SetWrapper, [SetWrapper, KtMutableSet]);
  //endregion
  function MutableDoubleList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    DoubleList.call(this, initialCapacity);
  }
  protoOf(MutableDoubleList).um = function (element) {
    this.o5(this.wm_1 + 1 | 0);
    this.vm_1[this.wm_1] = element;
    this.wm_1 = this.wm_1 + 1 | 0;
    return true;
  };
  protoOf(MutableDoubleList).xm = function (index, elements) {
    if (!(0 <= index ? index <= this.wm_1 : false)) {
      throwIndexOutOfBoundsException('');
    }
    // Inline function 'kotlin.collections.isEmpty' call
    if (elements.length === 0)
      return false;
    this.o5(this.wm_1 + elements.length | 0);
    var content = this.vm_1;
    if (!(index === this.wm_1)) {
      var tmp4 = index + elements.length | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.wm_1;
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
    this.wm_1 = this.wm_1 + elements.length | 0;
    return true;
  };
  protoOf(MutableDoubleList).o5 = function (capacity) {
    var oldContent = this.vm_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.vm_1 = copyOf(oldContent, newSize);
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
    tmp.vm_1 = tmp_0;
    this.wm_1 = 0;
  }
  protoOf(DoubleList).ym = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.x(prefix);
      // Inline function 'androidx.collection.DoubleList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.vm_1;
      var inductionVariable = 0;
      var last = this.wm_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.x(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.x(separator);
          }
          this_0.tb(element);
        }
         while (inductionVariable < last);
      this_0.x(postfix);
    }
    return this_0.toString();
  };
  protoOf(DoubleList).zm = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.ym(separator, prefix, postfix, limit, truncated) : $super.ym.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(DoubleList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.DoubleList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.vm_1;
    var inductionVariable = 0;
    var last = this.wm_1;
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
      tmp = !(other.wm_1 === this.wm_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.vm_1;
    var otherContent = other.vm_1;
    // Inline function 'androidx.collection.DoubleList.indices' call
    var progression = until(0, this.wm_1);
    var inductionVariable = progression.k1_1;
    var last = progression.l1_1;
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
    return this.zm(VOID, '[', ']');
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
    $this.dn_1 = newCapacity;
    initializeMetadata($this, newCapacity);
    $this.bn_1 = new Int32Array(newCapacity);
    $this.cn_1 = new Int32Array(newCapacity);
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
    tmp.an_1 = tmp_0;
    var tmp0 = $this.an_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth($this);
  }
  function initializeGrowth($this) {
    $this.kn_1 = loadedCapacity($this.ln()) - $this.en_1 | 0;
  }
  function findInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.dn_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.an_1;
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
        if ($this.bn_1[index] === key) {
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
    if ($this.kn_1 === 0) {
      var tmp0_0 = $this.an_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$11 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$11, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.mn();
      index_0 = findFirstAvailableSlot($this, hash1);
    }
    $this.en_1 = $this.en_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.kn_1;
    var tmp_3;
    var tmp0_1 = $this.an_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$13, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.kn_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.an_1;
    var tmp2 = $this.dn_1;
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
    var probeMask = $this.dn_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.an_1;
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
    this.kn_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntIntMap).nn = function (key, value) {
    var index = findInsertIndex(this, key);
    if (index < 0)
      index = ~index;
    this.bn_1[index] = key;
    this.cn_1[index] = value;
  };
  protoOf(MutableIntIntMap).mn = function () {
    var tmp;
    if (this.dn_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.en_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.dn_1;
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
      this.pn();
    } else {
      this.on(nextCapacity(this.dn_1));
    }
  };
  protoOf(MutableIntIntMap).pn = function () {
    var metadata = this.an_1;
    var capacity = this.dn_1;
    var keys = this.bn_1;
    var values = this.cn_1;
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
  protoOf(MutableIntIntMap).on = function (newCapacity) {
    var previousMetadata = this.an_1;
    var previousKeys = this.bn_1;
    var previousValues = this.cn_1;
    var previousCapacity = this.dn_1;
    initializeStorage(this, newCapacity);
    var newMetadata = this.an_1;
    var newKeys = this.bn_1;
    var newValues = this.cn_1;
    var capacity = this.dn_1;
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
    this.an_1 = get_EmptyGroup();
    this.bn_1 = get_EmptyIntArray();
    this.cn_1 = get_EmptyIntArray();
    this.dn_1 = 0;
    this.en_1 = 0;
  }
  protoOf(IntIntMap).ln = function () {
    return this.dn_1;
  };
  protoOf(IntIntMap).a1 = function () {
    return this.en_1;
  };
  protoOf(IntIntMap).r = function () {
    return this.en_1 === 0;
  };
  protoOf(IntIntMap).z = function (key) {
    var index = this.rn(key);
    if (index < 0) {
      throwNoSuchElementException('Cannot find value for key ' + key);
    }
    return this.cn_1[index];
  };
  protoOf(IntIntMap).qn = function (key) {
    return this.rn(key) >= 0;
  };
  protoOf(IntIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.bn_1;
    var v = this.cn_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.an_1;
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
    if (!(other.a1() === this.a1())) {
      return false;
    }
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.bn_1;
    var v = this.cn_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.an_1;
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
                  var index_0 = other.rn(tmp0);
                  if (index_0 < 0 || !(value_0 === other.cn_1[index_0])) {
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
    if (this.r()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().s(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.bn_1;
    var v = this.cn_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.an_1;
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
                  s.rb(tmp0);
                  s.q('=');
                  s.rb(value_0);
                  i = i + 1 | 0;
                  if (i < this.en_1) {
                    s.s(_Char___init__impl__6a9atx(44)).s(_Char___init__impl__6a9atx(32));
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
    return s.s(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(IntIntMap).rn = function (key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.dn_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.an_1;
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
        if (this.bn_1[index] === key) {
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
  protoOf(MutableIntList).un = function (element) {
    this.o5(this.wn_1 + 1 | 0);
    this.vn_1[this.wn_1] = element;
    this.wn_1 = this.wn_1 + 1 | 0;
    return true;
  };
  protoOf(MutableIntList).o5 = function (capacity) {
    var oldContent = this.vn_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.vn_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableIntList).w2 = function (index) {
    if (!(0 <= index ? index < this.wn_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.vn_1;
    var item = content[index];
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (!(index === (this.wn_1 - 1 | 0))) {
      var tmp6 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.wn_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, index, tmp6, endIndex);
    }
    this.wn_1 = this.wn_1 - 1 | 0;
    return item;
  };
  protoOf(MutableIntList).y4 = function (start, end) {
    if (!(0 <= start ? start <= this.wn_1 : false) || !(0 <= end ? end <= this.wn_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    if (end < start) {
      throwIllegalArgumentException('The end index must be < start index');
    }
    if (!(end === start)) {
      if (end < this.wn_1) {
        var tmp0 = this.vn_1;
        var tmp2 = this.vn_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = this.wn_1;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = tmp0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, tmp2, start, end, endIndex);
      }
      this.wn_1 = this.wn_1 - (end - start | 0) | 0;
    }
  };
  protoOf(MutableIntList).xn = function (index, element) {
    if (!(0 <= index ? index < this.wn_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.vn_1;
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
    tmp.vn_1 = tmp_0;
    this.wn_1 = 0;
  }
  protoOf(IntList).yn = function () {
    // Inline function 'androidx.collection.IntList.isEmpty' call
    if (this.wn_1 === 0) {
      throwNoSuchElementException('IntList is empty.');
    }
    return this.vn_1[0];
  };
  protoOf(IntList).z = function (index) {
    if (!(0 <= index ? index < this.wn_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    return this.vn_1[index];
  };
  protoOf(IntList).zn = function () {
    // Inline function 'androidx.collection.IntList.isEmpty' call
    if (this.wn_1 === 0) {
      throwNoSuchElementException('IntList is empty.');
    }
    var tmp = this.vn_1;
    // Inline function 'androidx.collection.IntList.lastIndex' call
    return tmp[this.wn_1 - 1 | 0];
  };
  protoOf(IntList).ym = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.x(prefix);
      // Inline function 'androidx.collection.IntList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.vn_1;
      var inductionVariable = 0;
      var last = this.wn_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.x(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.x(separator);
          }
          this_0.rb(element);
        }
         while (inductionVariable < last);
      this_0.x(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntList).ao = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.ym(separator, prefix, postfix, limit, truncated) : $super.ym.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.IntList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.vn_1;
    var inductionVariable = 0;
    var last = this.wn_1;
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
      tmp = !(other.wn_1 === this.wn_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.vn_1;
    var otherContent = other.vn_1;
    // Inline function 'androidx.collection.IntList.indices' call
    var progression = until(0, this.wn_1);
    var inductionVariable = progression.k1_1;
    var last = progression.l1_1;
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
    return this.ao(VOID, '[', ']');
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
    $this.eo_1 = newCapacity;
    initializeMetadata_0($this, newCapacity);
    $this.co_1 = new Int32Array(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.do_1 = Array(newCapacity);
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
    tmp.bo_1 = tmp_0;
    var tmp0 = $this.bo_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_0($this);
  }
  function initializeGrowth_0($this) {
    $this.lo_1 = loadedCapacity($this.ln()) - $this.fo_1 | 0;
  }
  function findAbsoluteInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.eo_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.bo_1;
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
        if ($this.co_1[index] === key) {
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
    if ($this.lo_1 === 0) {
      var tmp0_0 = $this.bo_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$11 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$11, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.mn();
      index_0 = findFirstAvailableSlot_0($this, hash1);
    }
    $this.fo_1 = $this.fo_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.lo_1;
    var tmp_3;
    var tmp0_1 = $this.bo_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$13, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.lo_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.bo_1;
    var tmp2 = $this.eo_1;
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
    var probeMask = $this.eo_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.bo_1;
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
    this.lo_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_0(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntObjectMap).mo = function (key, value) {
    var index = findAbsoluteInsertIndex(this, key);
    this.co_1[index] = key;
    this.do_1[index] = value;
  };
  protoOf(MutableIntObjectMap).no = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.eo_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.bo_1;
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
          if (this.co_1[index] === key) {
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
      return this.oo(index_0);
    }
    return null;
  };
  protoOf(MutableIntObjectMap).oo = function (index) {
    this.fo_1 = this.fo_1 - 1 | 0;
    var tmp0 = this.bo_1;
    var tmp2 = this.eo_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    var oldValue = this.do_1[index];
    this.do_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableIntObjectMap).mn = function () {
    var tmp;
    if (this.eo_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.fo_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.eo_1;
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
      this.pn();
    } else {
      this.on(nextCapacity(this.eo_1));
    }
  };
  protoOf(MutableIntObjectMap).pn = function () {
    var metadata = this.bo_1;
    var capacity = this.eo_1;
    var keys = this.co_1;
    var values = this.do_1;
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
  protoOf(MutableIntObjectMap).on = function (newCapacity) {
    var previousMetadata = this.bo_1;
    var previousKeys = this.co_1;
    var previousValues = this.do_1;
    var previousCapacity = this.eo_1;
    initializeStorage_0(this, newCapacity);
    var newMetadata = this.bo_1;
    var newKeys = this.co_1;
    var newValues = this.do_1;
    var capacity = this.eo_1;
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
    this.bo_1 = get_EmptyGroup();
    this.co_1 = get_EmptyIntArray();
    this.do_1 = get_EMPTY_OBJECTS();
    this.eo_1 = 0;
    this.fo_1 = 0;
  }
  protoOf(IntObjectMap).ln = function () {
    return this.eo_1;
  };
  protoOf(IntObjectMap).a1 = function () {
    return this.fo_1;
  };
  protoOf(IntObjectMap).r = function () {
    return this.fo_1 === 0;
  };
  protoOf(IntObjectMap).z = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.eo_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.bo_1;
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
          if (this.co_1[index] === key) {
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
      var tmp_1 = this.do_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(IntObjectMap).qn = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.eo_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.bo_1;
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
          if (this.co_1[index] === key) {
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
    var k = this.co_1;
    var v = this.do_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.bo_1;
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
    if (!(other.a1() === this.a1())) {
      return false;
    }
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.co_1;
    var v = this.do_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.bo_1;
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
                    if (!(other.z(tmp0) == null) || !other.qn(tmp0)) {
                      return false;
                    }
                  } else if (!equals(value_0, other.z(tmp0))) {
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
    if (this.r()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().s(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.co_1;
    var v = this.do_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.bo_1;
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
                  s.rb(tmp0);
                  s.q('=');
                  s.w(value_0 === this ? '(this)' : value_0);
                  i = i + 1 | 0;
                  if (i < this.fo_1) {
                    s.s(_Char___init__impl__6a9atx(44)).s(_Char___init__impl__6a9atx(32));
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
    return s.s(_Char___init__impl__6a9atx(125)).toString();
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
    $this.ro_1 = newCapacity;
    initializeMetadata_1($this, newCapacity);
    $this.qo_1 = new Int32Array(newCapacity);
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
    tmp.po_1 = tmp_0;
    var tmp0 = $this.po_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_1($this);
  }
  function initializeGrowth_1($this) {
    $this.xo_1 = loadedCapacity($this.ln()) - $this.so_1 | 0;
  }
  function removeElementAt($this, index) {
    $this.so_1 = $this.so_1 - 1 | 0;
    var tmp0 = $this.po_1;
    var tmp2 = $this.ro_1;
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
    var probeMask = $this.ro_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.po_1;
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
        if ($this.qo_1[index] === element) {
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
    if ($this.xo_1 === 0) {
      var tmp0_0 = $this.po_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$11 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$11, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.mn();
      index_0 = findFirstAvailableSlot_1($this, hash1);
    }
    $this.so_1 = $this.so_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.xo_1;
    var tmp_3;
    var tmp0_1 = $this.po_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$13, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.xo_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.po_1;
    var tmp2 = $this.ro_1;
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
    var probeMask = $this.ro_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.po_1;
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
    this.xo_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_1(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntSet).un = function (element) {
    var oldSize = this.so_1;
    var index = findAbsoluteInsertIndex_0(this, element);
    this.qo_1[index] = element;
    return !(this.so_1 === oldSize);
  };
  protoOf(MutableIntSet).no = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ro_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.po_1;
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
          if (this.qo_1[index] === element) {
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
  protoOf(MutableIntSet).mn = function () {
    var tmp;
    if (this.ro_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.so_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.ro_1;
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
      this.pn();
    } else {
      this.on(nextCapacity(this.ro_1));
    }
  };
  protoOf(MutableIntSet).pn = function () {
    var metadata = this.po_1;
    var capacity = this.ro_1;
    var elements = this.qo_1;
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
  protoOf(MutableIntSet).on = function (newCapacity) {
    var previousMetadata = this.po_1;
    var previousElements = this.qo_1;
    var previousCapacity = this.ro_1;
    initializeStorage_1(this, newCapacity);
    var newMetadata = this.po_1;
    var newElements = this.qo_1;
    var capacity = this.ro_1;
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
    this.po_1 = get_EmptyGroup();
    this.qo_1 = get_EmptyIntArray();
    this.ro_1 = 0;
    this.so_1 = 0;
  }
  protoOf(IntSet).ln = function () {
    return this.ro_1;
  };
  protoOf(IntSet).wh = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ro_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.po_1;
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
          if (this.qo_1[index] === element) {
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
  protoOf(IntSet).ym = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.x(prefix);
      var index = 0;
      // Inline function 'androidx.collection.IntSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.qo_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.po_1;
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
                      this_0.x(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.x(separator);
                    }
                    this_0.rb(element);
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
      this_0.x(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntSet).yo = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.ym(separator, prefix, postfix, limit, truncated) : $super.ym.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.qo_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.po_1;
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
    if (!(other.so_1 === this.so_1)) {
      return false;
    }
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.qo_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.po_1;
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
                  if (!other.wh(element)) {
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
    return this.yo(VOID, '[', ']');
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
    this.zo_1 = get_EmptyGroup();
    this.ap_1 = get_EMPTY_OBJECTS();
    this.bp_1 = get_EmptyIntArray();
    this.cp_1 = 0;
    this.dp_1 = 0;
  }
  protoOf(ObjectIntMap).ln = function () {
    return this.cp_1;
  };
  protoOf(ObjectIntMap).a1 = function () {
    return this.dp_1;
  };
  protoOf(ObjectIntMap).r = function () {
    return this.dp_1 === 0;
  };
  protoOf(ObjectIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.ap_1;
    var v = this.bp_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.zo_1;
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
    if (!(other.a1() === this.a1())) {
      return false;
    }
    var o = other instanceof ObjectIntMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.ap_1;
    var v = this.bp_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.zo_1;
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
                  var index_0 = o.ep(tmp0);
                  if (index_0 < 0 || !(value_0 === o.bp_1[index_0])) {
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
    if (this.r()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().s(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.ap_1;
    var v = this.bp_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.zo_1;
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
                  s.w(tmp0 === this ? '(this)' : tmp0);
                  s.q('=');
                  s.rb(value_0);
                  i = i + 1 | 0;
                  if (i < this.dp_1) {
                    s.s(_Char___init__impl__6a9atx(44)).s(_Char___init__impl__6a9atx(32));
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
    return s.s(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectIntMap).ep = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.cp_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.zo_1;
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
        if (equals(this.ap_1[index], key)) {
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
    $this.cp_1 = newCapacity;
    initializeMetadata_2($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.ap_1 = Array(newCapacity);
    $this.bp_1 = new Int32Array(newCapacity);
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
    tmp.zo_1 = tmp_0;
    var tmp0 = $this.zo_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_2($this);
  }
  function initializeGrowth_2($this) {
    $this.kp_1 = loadedCapacity($this.ln()) - $this.dp_1 | 0;
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
    var probeMask = $this.cp_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.zo_1;
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
        if (equals($this.ap_1[index], key)) {
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
    if ($this.kp_1 === 0) {
      var tmp0_0 = $this.zo_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.mn();
      index_0 = findFirstAvailableSlot_2($this, hash1);
    }
    $this.dp_1 = $this.dp_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.kp_1;
    var tmp_3;
    var tmp0_1 = $this.zo_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.kp_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.zo_1;
    var tmp2 = $this.cp_1;
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
    var probeMask = $this.cp_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.zo_1;
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
    this.kp_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_2(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectIntMap).lp = function (key, value, default_0) {
    var index = findIndex(this, key);
    var previous = default_0;
    if (index < 0) {
      index = ~index;
    } else {
      previous = this.bp_1[index];
    }
    this.ap_1[index] = key;
    this.bp_1[index] = value;
    return previous;
  };
  protoOf(MutableObjectIntMap).mp = function (index) {
    this.dp_1 = this.dp_1 - 1 | 0;
    var tmp0 = this.zo_1;
    var tmp2 = this.cp_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.ap_1[index] = null;
  };
  protoOf(MutableObjectIntMap).mn = function () {
    var tmp;
    if (this.cp_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.dp_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.cp_1;
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
      this.pn();
    } else {
      this.on(nextCapacity(this.cp_1));
    }
  };
  protoOf(MutableObjectIntMap).pn = function () {
    var metadata = this.zo_1;
    var capacity = this.cp_1;
    var keys = this.ap_1;
    var values = this.bp_1;
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
  protoOf(MutableObjectIntMap).on = function (newCapacity) {
    var previousMetadata = this.zo_1;
    var previousKeys = this.ap_1;
    var previousValues = this.bp_1;
    var previousCapacity = this.cp_1;
    initializeStorage_2(this, newCapacity);
    var newMetadata = this.zo_1;
    var newKeys = this.ap_1;
    var newValues = this.bp_1;
    var capacity = this.cp_1;
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
    throwIndexOutOfBoundsException('Index ' + index + ' must be in 0..' + $this.op_1);
  }
  function MutableObjectListIterator(list, index) {
    this.pp_1 = list;
    this.qp_1 = index - 1 | 0;
  }
  protoOf(MutableObjectListIterator).u = function () {
    return this.qp_1 < (this.pp_1.a1() - 1 | 0);
  };
  protoOf(MutableObjectListIterator).v = function () {
    this.qp_1 = this.qp_1 + 1 | 0;
    return this.pp_1.z(this.qp_1);
  };
  protoOf(MutableObjectListIterator).f4 = function () {
    this.pp_1.w2(this.qp_1);
    this.qp_1 = this.qp_1 - 1 | 0;
  };
  protoOf(MutableObjectListIterator).p4 = function () {
    return this.qp_1 >= 0;
  };
  protoOf(MutableObjectListIterator).q4 = function () {
    return this.qp_1 + 1 | 0;
  };
  protoOf(MutableObjectListIterator).r4 = function () {
    var tmp1 = this.qp_1;
    this.qp_1 = tmp1 - 1 | 0;
    return this.pp_1.z(tmp1);
  };
  protoOf(MutableObjectListIterator).s4 = function () {
    return this.qp_1;
  };
  function ObjectListMutableList(objectList) {
    this.rp_1 = objectList;
  }
  protoOf(ObjectListMutableList).a1 = function () {
    return this.rp_1.a1();
  };
  protoOf(ObjectListMutableList).ef = function (element) {
    return this.rp_1.g1(element);
  };
  protoOf(ObjectListMutableList).g1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.ef((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).z = function (index) {
    checkIndex(this, index);
    return this.rp_1.z(index);
  };
  protoOf(ObjectListMutableList).sp = function (element) {
    return this.rp_1.h1(element);
  };
  protoOf(ObjectListMutableList).h1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.sp((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).r = function () {
    return this.rp_1.r();
  };
  protoOf(ObjectListMutableList).t = function () {
    return new MutableObjectListIterator(this, 0);
  };
  protoOf(ObjectListMutableList).tp = function (element) {
    return this.rp_1.y(element);
  };
  protoOf(ObjectListMutableList).y = function (element) {
    return this.tp((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).xp = function (index, element) {
    return this.rp_1.v2(index, element);
  };
  protoOf(ObjectListMutableList).v2 = function (index, element) {
    return this.xp(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).yp = function (index, elements) {
    return this.rp_1.s2(index, elements);
  };
  protoOf(ObjectListMutableList).s2 = function (index, elements) {
    return this.yp(index, elements);
  };
  protoOf(ObjectListMutableList).zp = function (elements) {
    return this.rp_1.aq(elements);
  };
  protoOf(ObjectListMutableList).e1 = function (elements) {
    return this.zp(elements);
  };
  protoOf(ObjectListMutableList).t2 = function () {
    return this.rp_1.t2();
  };
  protoOf(ObjectListMutableList).f1 = function (index) {
    return new MutableObjectListIterator(this, index);
  };
  protoOf(ObjectListMutableList).bq = function (element) {
    return this.rp_1.r2(element);
  };
  protoOf(ObjectListMutableList).r2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.bq((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ObjectListMutableList).w2 = function (index) {
    checkIndex(this, index);
    return this.rp_1.w2(index);
  };
  protoOf(ObjectListMutableList).cq = function (index, element) {
    checkIndex(this, index);
    return this.rp_1.u2(index, element);
  };
  protoOf(ObjectListMutableList).u2 = function (index, element) {
    return this.cq(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function MutableObjectList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    ObjectList.call(this, initialCapacity);
    this.wp_1 = null;
  }
  protoOf(MutableObjectList).y = function (element) {
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.op_1 + 1 | 0;
    var oldContent = this.np_1;
    if (oldContent.length < capacity) {
      this.dq(capacity, oldContent);
    }
    this.np_1[this.op_1] = element;
    this.op_1 = this.op_1 + 1 | 0;
    return true;
  };
  protoOf(MutableObjectList).v2 = function (index, element) {
    if (!(0 <= index ? index <= this.op_1 : false)) {
      throwIndexOutOfBoundsInclusiveException(this, index);
    }
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.op_1 + 1 | 0;
    var oldContent = this.np_1;
    if (oldContent.length < capacity) {
      this.dq(capacity, oldContent);
    }
    var content = this.np_1;
    if (!(index === this.op_1)) {
      var tmp4 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.op_1;
      arrayCopy(content, content, tmp4, index, endIndex);
    }
    content[index] = element;
    this.op_1 = this.op_1 + 1 | 0;
  };
  protoOf(MutableObjectList).s2 = function (index, elements) {
    if (!(0 <= index ? index <= this.op_1 : false)) {
      throwIndexOutOfBoundsInclusiveException(this, index);
    }
    if (elements.r())
      return false;
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.op_1 + elements.a1() | 0;
    var oldContent = this.np_1;
    if (oldContent.length < capacity) {
      this.dq(capacity, oldContent);
    }
    var content = this.np_1;
    if (!(index === this.op_1)) {
      var tmp4 = index + elements.a1() | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.op_1;
      arrayCopy(content, content, tmp4, index, endIndex);
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index_0 = 0;
    var _iterator__ex2g4s = elements.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var _unary__edvuaz = index_0;
      index_0 = _unary__edvuaz + 1 | 0;
      content[index + checkIndexOverflow(_unary__edvuaz) | 0] = item;
    }
    this.op_1 = this.op_1 + elements.a1() | 0;
    return true;
  };
  protoOf(MutableObjectList).eq = function (elements) {
    var oldSize = this.op_1;
    this.fq(elements);
    return !(oldSize === this.op_1);
  };
  protoOf(MutableObjectList).aq = function (elements) {
    var oldSize = this.op_1;
    this.gq(elements);
    return !(oldSize === this.op_1);
  };
  protoOf(MutableObjectList).fq = function (elements) {
    if (elements.r())
      return Unit_instance;
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.op_1 + elements.op_1 | 0;
    var oldContent = this.np_1;
    if (oldContent.length < capacity) {
      this.dq(capacity, oldContent);
    }
    var content = this.np_1;
    var tmp0 = elements.np_1;
    var tmp4 = this.op_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = elements.op_1;
    arrayCopy(tmp0, content, tmp4, 0, endIndex);
    this.op_1 = this.op_1 + elements.op_1 | 0;
  };
  protoOf(MutableObjectList).gq = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
      this.y(element);
    }
  };
  protoOf(MutableObjectList).t2 = function () {
    fill_0(this.np_1, null, 0, this.op_1);
    this.op_1 = 0;
  };
  protoOf(MutableObjectList).dq = function (capacity, oldContent) {
    var oldSize = oldContent.length;
    // Inline function 'kotlin.math.max' call
    var b = imul(oldSize, 3) / 2 | 0;
    var newSize = Math.max(capacity, b);
    // Inline function 'kotlin.arrayOfNulls' call
    var newContent = Array(newSize);
    var tmp = this;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(oldContent, newContent, 0, 0, oldSize);
    tmp.np_1 = newContent;
  };
  protoOf(MutableObjectList).r2 = function (element) {
    var index = this.h1(element);
    if (index >= 0) {
      this.w2(index);
      return true;
    }
    return false;
  };
  protoOf(MutableObjectList).w2 = function (index) {
    if (!(0 <= index ? index < this.op_1 : false)) {
      this.hq(index);
    }
    var content = this.np_1;
    var element = content[index];
    // Inline function 'androidx.collection.ObjectList.lastIndex' call
    if (!(index === (this.op_1 - 1 | 0))) {
      var tmp6 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.op_1;
      arrayCopy(content, content, index, tmp6, endIndex);
    }
    this.op_1 = this.op_1 - 1 | 0;
    content[this.op_1] = null;
    return (element == null ? true : !(element == null)) ? element : THROW_CCE();
  };
  protoOf(MutableObjectList).u2 = function (index, element) {
    if (!(0 <= index ? index < this.op_1 : false)) {
      this.hq(index);
    }
    var content = this.np_1;
    var old = content[index];
    content[index] = element;
    return (old == null ? true : !(old == null)) ? old : THROW_CCE();
  };
  protoOf(MutableObjectList).iq = function () {
    var tmp0_elvis_lhs = this.wp_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ObjectListMutableList(this);
      this.wp_1 = this_0;
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
    tmp.np_1 = tmp_0;
    this.op_1 = 0;
  }
  protoOf(ObjectList).a1 = function () {
    return this.op_1;
  };
  protoOf(ObjectList).g1 = function (element) {
    return this.h1(element) >= 0;
  };
  protoOf(ObjectList).yn = function () {
    if (this.r()) {
      throwNoSuchElementException('ObjectList is empty.');
    }
    var tmp = this.np_1[0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ObjectList).z = function (index) {
    if (!(0 <= index ? index < this.op_1 : false)) {
      this.hq(index);
    }
    var tmp = this.np_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ObjectList).hq = function (index) {
    // Inline function 'androidx.collection.ObjectList.lastIndex' call
    var tmp$ret$0 = this.op_1 - 1 | 0;
    throwIndexOutOfBoundsException('Index ' + index + ' must be in 0..' + tmp$ret$0);
  };
  protoOf(ObjectList).h1 = function (element) {
    if (element == null) {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.np_1;
      var inductionVariable = 0;
      var last = this.op_1;
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
      var content_0 = this.np_1;
      var inductionVariable_0 = 0;
      var last_0 = this.op_1;
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
  protoOf(ObjectList).r = function () {
    return this.op_1 === 0;
  };
  protoOf(ObjectList).jq = function () {
    return !(this.op_1 === 0);
  };
  protoOf(ObjectList).kq = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.x(prefix);
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.np_1;
      var inductionVariable = 0;
      var last = this.op_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = content[i];
          var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          if (i === limit) {
            this_0.x(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.x(separator);
          }
          if (transform == null) {
            this_0.w(element);
          } else {
            this_0.x(transform(element));
          }
        }
         while (inductionVariable < last);
      this_0.x(postfix);
    }
    return this_0.toString();
  };
  protoOf(ObjectList).lq = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.kq(separator, prefix, postfix, limit, truncated, transform) : $super.kq.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ObjectList).hashCode = function () {
    var hashCode_0 = 0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.np_1;
    var inductionVariable = 0;
    var last = this.op_1;
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
      tmp = !(other.op_1 === this.op_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.np_1;
    var otherContent = other.np_1;
    // Inline function 'androidx.collection.ObjectList.indices' call
    var progression = until(0, this.op_1);
    var inductionVariable = progression.k1_1;
    var last = progression.l1_1;
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
    return this.lq(VOID, '[', ']', VOID, VOID, ObjectList$toString$lambda(this));
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
    list.y(element1);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.y(element2);
    return list;
  }
  function objectListOf(element1) {
    _init_properties_ObjectList_kt__fnapct();
    return mutableObjectListOf_0(element1);
  }
  function checkIndex(_this__u8e3s4, index) {
    _init_properties_ObjectList_kt__fnapct();
    var size = _this__u8e3s4.a1();
    if (index < 0 || index >= size) {
      throwIndexOutOfBoundsException('Index ' + index + ' is out of bounds. The list has ' + size + ' elements.');
    }
  }
  function mutableObjectListOf_0(element1) {
    _init_properties_ObjectList_kt__fnapct();
    var list = new MutableObjectList(1);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.y(element1);
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
    $this.pq_1 = newCapacity;
    initializeMetadata_3($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = Array(newCapacity);
    }
    tmp_0.nq_1 = tmp_1;
    var tmp_2 = $this;
    var tmp_3;
    if (newCapacity === 0) {
      tmp_3 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_3 = Array(newCapacity);
    }
    tmp_2.oq_1 = tmp_3;
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
    tmp.mq_1 = tmp_0;
    initializeGrowth_3($this);
  }
  function initializeGrowth_3($this) {
    $this.wq_1 = loadedCapacity($this.ln()) - $this.qq_1 | 0;
  }
  function findFirstAvailableSlot_3($this, hash1) {
    var probeMask = $this.pq_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.mq_1;
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
    this.wq_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_3(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterMap).xq = function (key, value) {
    // Inline function 'kotlin.let' call
    var index = this.yq(key);
    var index_0 = index < 0 ? ~index : index;
    this.nq_1[index_0] = key;
    this.oq_1[index_0] = value;
  };
  protoOf(MutableScatterMap).p2 = function (key) {
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
      var probeMask = this.pq_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.mq_1;
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
          if (equals(this.nq_1[index], key)) {
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
      return this.oo(index_0);
    }
    return null;
  };
  protoOf(MutableScatterMap).oo = function (index) {
    this.qq_1 = this.qq_1 - 1 | 0;
    var tmp0 = this.mq_1;
    var tmp2 = this.pq_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.nq_1[index] = null;
    var oldValue = this.oq_1[index];
    this.oq_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableScatterMap).t2 = function () {
    this.qq_1 = 0;
    if (!(this.mq_1 === get_EmptyGroup())) {
      fill(this.mq_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.mq_1;
      var tmp2 = this.pq_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.oq_1, null, 0, this.pq_1);
    fill_0(this.nq_1, null, 0, this.pq_1);
    initializeGrowth_3(this);
  };
  protoOf(MutableScatterMap).yq = function (key) {
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
    var probeMask = this.pq_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.mq_1;
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
        if (equals(this.nq_1[index], key)) {
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
    if (this.wq_1 === 0) {
      var tmp0_0 = this.mq_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.mn();
      index_0 = findFirstAvailableSlot_3(this, hash1);
    }
    this.qq_1 = this.qq_1 + 1 | 0;
    var tmp_1 = this;
    var tmp_2 = this.wq_1;
    var tmp_3;
    var tmp0_1 = this.mq_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.wq_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = this.mq_1;
    var tmp2 = this.pq_1;
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
  protoOf(MutableScatterMap).mn = function () {
    var tmp;
    if (this.pq_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.qq_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.pq_1;
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
      this.pn();
    } else {
      this.on(nextCapacity(this.pq_1));
    }
  };
  protoOf(MutableScatterMap).pn = function () {
    var metadata = this.mq_1;
    var capacity = this.pq_1;
    var keys = this.nq_1;
    var values = this.oq_1;
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
  protoOf(MutableScatterMap).on = function (newCapacity) {
    var previousMetadata = this.mq_1;
    var previousKeys = this.nq_1;
    var previousValues = this.oq_1;
    var previousCapacity = this.pq_1;
    initializeStorage_3(this, newCapacity);
    var newMetadata = this.mq_1;
    var newKeys = this.nq_1;
    var newValues = this.oq_1;
    var capacity = this.pq_1;
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
    this.mq_1 = get_EmptyGroup();
    this.nq_1 = get_EMPTY_OBJECTS();
    this.oq_1 = get_EMPTY_OBJECTS();
    this.pq_1 = 0;
    this.qq_1 = 0;
  }
  protoOf(ScatterMap).ln = function () {
    return this.pq_1;
  };
  protoOf(ScatterMap).a1 = function () {
    return this.qq_1;
  };
  protoOf(ScatterMap).r = function () {
    return this.qq_1 === 0;
  };
  protoOf(ScatterMap).jq = function () {
    return !(this.qq_1 === 0);
  };
  protoOf(ScatterMap).k2 = function (key) {
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
      var probeMask = this.pq_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.mq_1;
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
          if (equals(this.nq_1[index], key)) {
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
      var tmp_1 = this.oq_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(ScatterMap).w5 = function (key) {
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
      var probeMask = this.pq_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.mq_1;
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
          if (equals(this.nq_1[index], key)) {
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
  protoOf(ScatterMap).i2 = function (key) {
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
      var probeMask = this.pq_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.mq_1;
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
          if (equals(this.nq_1[index], key)) {
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
    var k = this.nq_1;
    var v = this.oq_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.mq_1;
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
    if (!(other.a1() === this.a1())) {
      return false;
    }
    var o = other instanceof ScatterMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.nq_1;
    var v = this.oq_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.mq_1;
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
                    if (!(o.k2(tmp0) == null) || !o.i2(tmp0)) {
                      return false;
                    }
                  } else if (!equals(value_0, o.k2(tmp0))) {
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
    if (this.r()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().s(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.nq_1;
    var v = this.oq_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.mq_1;
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
                  s.w(tmp0 === this ? '(this)' : tmp0);
                  s.q('=');
                  s.w(value_0 === this ? '(this)' : value_0);
                  i = i + 1 | 0;
                  if (i < this.qq_1) {
                    s.s(_Char___init__impl__6a9atx(44)).s(_Char___init__impl__6a9atx(32));
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
    return s.s(_Char___init__impl__6a9atx(125)).toString();
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
    this.zq_1 = get_EmptyGroup();
    this.ar_1 = get_EMPTY_OBJECTS();
    this.br_1 = 0;
    this.cr_1 = 0;
  }
  protoOf(ScatterSet).ln = function () {
    return this.br_1;
  };
  protoOf(ScatterSet).a1 = function () {
    return this.cr_1;
  };
  protoOf(ScatterSet).r = function () {
    return this.cr_1 === 0;
  };
  protoOf(ScatterSet).jq = function () {
    return !(this.cr_1 === 0);
  };
  protoOf(ScatterSet).g1 = function (element) {
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
      var probeMask = this.br_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.zq_1;
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
          if (equals(this.ar_1[index], element)) {
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
  protoOf(ScatterSet).kq = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.x(prefix);
      var index = 0;
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var elements = this.ar_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.zq_1;
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
                      this_0.x(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.x(separator);
                    }
                    if (transform == null) {
                      this_0.w(element);
                    } else {
                      this_0.x(transform(element));
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
      this_0.x(postfix);
    }
    return this_0.toString();
  };
  protoOf(ScatterSet).dr = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.kq(separator, prefix, postfix, limit, truncated, transform) : $super.kq.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ScatterSet).hashCode = function () {
    var hash = this.br_1;
    hash = imul(31, hash) + this.cr_1 | 0;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.ar_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.zq_1;
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
    if (!(other.a1() === this.a1())) {
      return false;
    }
    var o = other instanceof ScatterSet ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.ar_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.zq_1;
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
                  if (!o.g1(element)) {
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
    return this.dr(VOID, '[', ']', VOID, VOID, ScatterSet$toString$lambda(this));
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
    $this.br_1 = newCapacity;
    initializeMetadata_4($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = Array(newCapacity);
    }
    tmp_0.ar_1 = tmp_1;
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
    tmp.zq_1 = tmp_0;
    var tmp0 = $this.zq_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_4($this);
  }
  function initializeGrowth_4($this) {
    $this.ir_1 = loadedCapacity($this.ln()) - $this.cr_1 | 0;
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
    var probeMask = $this.br_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.zq_1;
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
        if (equals($this.ar_1[index], element)) {
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
    if ($this.ir_1 === 0) {
      var tmp0_0 = $this.zq_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.mn();
      index_0 = findFirstAvailableSlot_4($this, hash1);
    }
    $this.cr_1 = $this.cr_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.ir_1;
    var tmp_3;
    var tmp0_1 = $this.zq_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.ir_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.zq_1;
    var tmp2 = $this.br_1;
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
    var probeMask = $this.br_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.zq_1;
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
    this.ir_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$1 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    initializeStorage_4(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterSet).y = function (element) {
    var oldSize = this.a1();
    var index = findAbsoluteInsertIndex_1(this, element);
    this.ar_1[index] = element;
    return !(this.a1() === oldSize);
  };
  protoOf(MutableScatterSet).jr = function (element) {
    var index = findAbsoluteInsertIndex_1(this, element);
    this.ar_1[index] = element;
  };
  protoOf(MutableScatterSet).aq = function (elements) {
    var oldSize = this.a1();
    this.gq(elements);
    return !(oldSize === this.a1());
  };
  protoOf(MutableScatterSet).kr = function (elements) {
    var oldSize = this.a1();
    this.lr(elements);
    return !(oldSize === this.a1());
  };
  protoOf(MutableScatterSet).gq = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      this.jr(element);
    }
  };
  protoOf(MutableScatterSet).lr = function (elements) {
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements_0 = elements.ar_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = elements.zq_1;
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
                  this.jr(element);
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
  protoOf(MutableScatterSet).r2 = function (element) {
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
      var probeMask = this.br_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.zq_1;
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
          if (equals(this.ar_1[index], element)) {
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
      this.mr(index_0);
    }
    return exists;
  };
  protoOf(MutableScatterSet).mr = function (index) {
    this.cr_1 = this.cr_1 - 1 | 0;
    var tmp0 = this.zq_1;
    var tmp2 = this.br_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.ar_1[index] = null;
  };
  protoOf(MutableScatterSet).t2 = function () {
    this.cr_1 = 0;
    if (!(this.zq_1 === get_EmptyGroup())) {
      fill(this.zq_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.zq_1;
      var tmp2 = this.br_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.ar_1, null, 0, this.br_1);
    initializeGrowth_4(this);
  };
  protoOf(MutableScatterSet).mn = function () {
    var tmp;
    if (this.br_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.cr_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.br_1;
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
      this.pn();
    } else {
      this.on(nextCapacity(this.br_1));
    }
  };
  protoOf(MutableScatterSet).pn = function () {
    var metadata = this.zq_1;
    var capacity = this.br_1;
    var elements = this.ar_1;
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
  protoOf(MutableScatterSet).on = function (newCapacity) {
    var previousMetadata = this.zq_1;
    var previousElements = this.ar_1;
    var previousCapacity = this.br_1;
    initializeStorage_4(this, newCapacity);
    var newMetadata = this.zq_1;
    var newElements = this.ar_1;
    var capacity = this.br_1;
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
  protoOf(MutableScatterSet).nr = function () {
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
    this_0.jr(element1);
    this_0.jr(element2);
    return this_0;
  }
  function SetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.wr_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetWrapper$iterator$slambda).hs = function ($this$iterator, $completion) {
    var tmp = this.is($this$iterator, $completion);
    tmp.z8_1 = Unit_instance;
    tmp.a9_1 = null;
    return tmp.f9();
  };
  protoOf(SetWrapper$iterator$slambda).r9 = function (p1, $completion) {
    return this.hs(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SetWrapper$iterator$slambda).f9 = function () {
    var suspendResult = this.z8_1;
    $sm: do
      try {
        var tmp = this.x8_1;
        switch (tmp) {
          case 0:
            this.y8_1 = 11;
            var this_0 = this.wr_1.js_1;
            this.as_1 = this_0.ar_1;
            this.gs_1 = this_0;
            this.x8_1 = 1;
            continue $sm;
          case 1:
            this.es_1 = this.gs_1.zq_1;
            this.ds_1 = this.es_1.length - 2 | 0;
            this.fs_1 = numberRangeToNumber(0, this.ds_1).t();
            this.x8_1 = 2;
            continue $sm;
          case 2:
            if (!this.fs_1.u()) {
              this.x8_1 = 9;
              continue $sm;
            }

            this.bs_1 = this.fs_1.v();
            this.zr_1 = this.es_1[this.bs_1];
            var this_1 = this.zr_1;
            if (!equalsLong(bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144)), new Long(-2139062144, -2139062144))) {
              this.yr_1 = 8 - (~(this.bs_1 - this.ds_1 | 0) >>> 31 | 0) | 0;
              this.cs_1 = until(0, this.yr_1).t();
              this.x8_1 = 3;
              continue $sm;
            } else {
              this.x8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.cs_1.u()) {
              this.x8_1 = 6;
              continue $sm;
            }

            var j = this.cs_1.v();
            var value = bitwiseAnd(this.zr_1, new Long(255, 0));
            if (compare(value, new Long(128, 0)) < 0) {
              var index = (this.bs_1 << 3) + j | 0;
              var tmp_0 = this.as_1[index];
              var element = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
              this.x8_1 = 4;
              suspendResult = this.xr_1.xf(element, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.x8_1 = 5;
              continue $sm;
            }

          case 4:
            this.x8_1 = 5;
            continue $sm;
          case 5:
            this.zr_1 = shiftRight(this.zr_1, 8);
            this.x8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.yr_1 === 8)) {
              this.x8_1 = 10;
              continue $sm;
            } else {
              this.x8_1 = 7;
              continue $sm;
            }

          case 7:
            this.x8_1 = 8;
            continue $sm;
          case 8:
            this.x8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.x8_1 = 1;
              continue $sm;
            }

            this.x8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.a9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.y8_1 === 11) {
          throw e;
        } else {
          this.x8_1 = this.y8_1;
          this.a9_1 = e;
        }
      }
     while (true);
  };
  protoOf(SetWrapper$iterator$slambda).is = function ($this$iterator, completion) {
    var i = new SetWrapper$iterator$slambda(this.wr_1, completion);
    i.xr_1 = $this$iterator;
    return i;
  };
  function SetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.hs($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetWrapper(parent) {
    this.js_1 = parent;
  }
  protoOf(SetWrapper).a1 = function () {
    return this.js_1.cr_1;
  };
  protoOf(SetWrapper).f2 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (!this.js_1.g1(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SetWrapper).g1 = function (element) {
    return this.js_1.g1(element);
  };
  protoOf(SetWrapper).r = function () {
    return this.js_1.r();
  };
  protoOf(SetWrapper).t = function () {
    return iterator(SetWrapper$iterator$slambda_0(this, null));
  };
  protoOf(SetWrapper).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof SetWrapper))
      THROW_CCE();
    return this.js_1.equals(other.js_1);
  };
  protoOf(SetWrapper).hashCode = function () {
    return this.js_1.hashCode();
  };
  protoOf(SetWrapper).toString = function () {
    return this.js_1.toString();
  };
  function MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation) {
    this.ss_1 = this$0;
    this.ts_1 = this$1;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).hs = function ($this$iterator, $completion) {
    var tmp = this.is($this$iterator, $completion);
    tmp.z8_1 = Unit_instance;
    tmp.a9_1 = null;
    return tmp.f9();
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).r9 = function (p1, $completion) {
    return this.hs(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).f9 = function () {
    var suspendResult = this.z8_1;
    $sm: do
      try {
        var tmp = this.x8_1;
        switch (tmp) {
          case 0:
            this.y8_1 = 11;
            this.ct_1 = this.ss_1.et_1;
            this.x8_1 = 1;
            continue $sm;
          case 1:
            this.at_1 = this.ct_1.zq_1;
            this.zs_1 = this.at_1.length - 2 | 0;
            this.bt_1 = numberRangeToNumber(0, this.zs_1).t();
            this.x8_1 = 2;
            continue $sm;
          case 2:
            if (!this.bt_1.u()) {
              this.x8_1 = 9;
              continue $sm;
            }

            this.xs_1 = this.bt_1.v();
            this.ws_1 = this.at_1[this.xs_1];
            var this_0 = this.ws_1;
            if (!equalsLong(bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144)), new Long(-2139062144, -2139062144))) {
              this.vs_1 = 8 - (~(this.xs_1 - this.zs_1 | 0) >>> 31 | 0) | 0;
              this.ys_1 = until(0, this.vs_1).t();
              this.x8_1 = 3;
              continue $sm;
            } else {
              this.x8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.ys_1.u()) {
              this.x8_1 = 6;
              continue $sm;
            }

            var j = this.ys_1.v();
            var value = bitwiseAnd(this.ws_1, new Long(255, 0));
            if (compare(value, new Long(128, 0)) < 0) {
              var index = (this.xs_1 << 3) + j | 0;
              this.ts_1.ft_1 = index;
              this.x8_1 = 4;
              var tmp_0 = this.ss_1.et_1.ar_1[index];
              suspendResult = this.us_1.xf((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.x8_1 = 5;
              continue $sm;
            }

          case 4:
            this.x8_1 = 5;
            continue $sm;
          case 5:
            this.ws_1 = shiftRight(this.ws_1, 8);
            this.x8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.vs_1 === 8)) {
              this.x8_1 = 10;
              continue $sm;
            } else {
              this.x8_1 = 7;
              continue $sm;
            }

          case 7:
            this.x8_1 = 8;
            continue $sm;
          case 8:
            this.x8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.x8_1 = 1;
              continue $sm;
            }

            this.x8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.a9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.y8_1 === 11) {
          throw e;
        } else {
          this.x8_1 = this.y8_1;
          this.a9_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).is = function ($this$iterator, completion) {
    var i = new MutableSetWrapper$iterator$o$iterator$slambda(this.ss_1, this.ts_1, completion);
    i.us_1 = $this$iterator;
    return i;
  };
  function MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this$1, resultContinuation) {
    var i = new MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.hs($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableSetWrapper$iterator$1(this$0) {
    this.ht_1 = this$0;
    this.ft_1 = -1;
    var tmp = this;
    tmp.gt_1 = iterator(MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this, null));
  }
  protoOf(MutableSetWrapper$iterator$1).u = function () {
    return this.gt_1.u();
  };
  protoOf(MutableSetWrapper$iterator$1).v = function () {
    return this.gt_1.v();
  };
  protoOf(MutableSetWrapper$iterator$1).f4 = function () {
    if (!(this.ft_1 === -1)) {
      this.ht_1.et_1.mr(this.ft_1);
      this.ft_1 = -1;
    }
  };
  function MutableSetWrapper(parent) {
    SetWrapper.call(this, parent);
    this.et_1 = parent;
  }
  protoOf(MutableSetWrapper).y = function (element) {
    return this.et_1.y(element);
  };
  protoOf(MutableSetWrapper).e1 = function (elements) {
    return this.et_1.aq(elements);
  };
  protoOf(MutableSetWrapper).t = function () {
    return new MutableSetWrapper$iterator$1(this);
  };
  protoOf(MutableSetWrapper).r2 = function (element) {
    return this.et_1.r2(element);
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
