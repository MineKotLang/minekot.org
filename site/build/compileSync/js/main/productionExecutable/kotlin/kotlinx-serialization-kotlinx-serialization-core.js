(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ob;
  var initMetadataForInterface = kotlin_kotlin.$_$.sa;
  var VOID = kotlin_kotlin.$_$.d;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.u3;
  var Unit_instance = kotlin_kotlin.$_$.g4;
  var emptyList = kotlin_kotlin.$_$.c6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.ag;
  var KProperty1 = kotlin_kotlin.$_$.hc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ma;
  var toString = kotlin_kotlin.$_$.qb;
  var initMetadataForClass = kotlin_kotlin.$_$.pa;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.j1;
  var objectCreate = kotlin_kotlin.$_$.nb;
  var captureStack = kotlin_kotlin.$_$.y9;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.k1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.m1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ze;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.l5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var THROW_CCE = kotlin_kotlin.$_$.ff;
  var KClass = kotlin_kotlin.$_$.dc;
  var isInterface = kotlin_kotlin.$_$.db;
  var Triple = kotlin_kotlin.$_$.gf;
  var getKClass = kotlin_kotlin.$_$.cc;
  var Pair = kotlin_kotlin.$_$.cf;
  var Entry = kotlin_kotlin.$_$.w4;
  var KtMap = kotlin_kotlin.$_$.x4;
  var KtMutableMap = kotlin_kotlin.$_$.a5;
  var LinkedHashMap = kotlin_kotlin.$_$.t4;
  var HashMap = kotlin_kotlin.$_$.r4;
  var KtSet = kotlin_kotlin.$_$.d5;
  var KtMutableSet = kotlin_kotlin.$_$.b5;
  var LinkedHashSet = kotlin_kotlin.$_$.u4;
  var HashSet = kotlin_kotlin.$_$.s4;
  var Collection = kotlin_kotlin.$_$.q4;
  var KtList = kotlin_kotlin.$_$.v4;
  var KtMutableList = kotlin_kotlin.$_$.y4;
  var ArrayList = kotlin_kotlin.$_$.p4;
  var copyToArray = kotlin_kotlin.$_$.z5;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.j2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.i2;
  var Result = kotlin_kotlin.$_$.df;
  var ensureNotNull = kotlin_kotlin.$_$.wf;
  var equals = kotlin_kotlin.$_$.ia;
  var getStringHashCode = kotlin_kotlin.$_$.na;
  var isBlank = kotlin_kotlin.$_$.cd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var toList = kotlin_kotlin.$_$.v7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var toHashSet = kotlin_kotlin.$_$.t7;
  var toBooleanArray = kotlin_kotlin.$_$.s7;
  var withIndex = kotlin_kotlin.$_$.b8;
  var to = kotlin_kotlin.$_$.ig;
  var toMap = kotlin_kotlin.$_$.w7;
  var lazy_0 = kotlin_kotlin.$_$.bg;
  var contentEquals = kotlin_kotlin.$_$.o5;
  var initMetadataForObject = kotlin_kotlin.$_$.ua;
  var getKClassFromExpression = kotlin_kotlin.$_$.bc;
  var Long = kotlin_kotlin.$_$.bf;
  var Char = kotlin_kotlin.$_$.se;
  var Companion_getInstance = kotlin_kotlin.$_$.w3;
  var Duration = kotlin_kotlin.$_$.me;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.x3;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.y3;
  var toIntOrNull = kotlin_kotlin.$_$.be;
  var hashCode = kotlin_kotlin.$_$.oa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var asList = kotlin_kotlin.$_$.h5;
  var isArray = kotlin_kotlin.$_$.va;
  var until = kotlin_kotlin.$_$.yb;
  var step = kotlin_kotlin.$_$.xb;
  var getValue = kotlin_kotlin.$_$.k6;
  var longArray = kotlin_kotlin.$_$.ib;
  var initMetadataForCompanion = kotlin_kotlin.$_$.qa;
  var get_lastIndex = kotlin_kotlin.$_$.r6;
  var shiftLeft = kotlin_kotlin.$_$.p9;
  var bitwiseOr = kotlin_kotlin.$_$.b9;
  var equalsLong = kotlin_kotlin.$_$.h9;
  var invert = kotlin_kotlin.$_$.j9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.uf;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var toString_0 = kotlin_kotlin.$_$.hg;
  var KTypeParameter = kotlin_kotlin.$_$.ic;
  var booleanArray = kotlin_kotlin.$_$.x9;
  var emptyMap = kotlin_kotlin.$_$.d6;
  var contentHashCode = kotlin_kotlin.$_$.p5;
  var joinToString = kotlin_kotlin.$_$.o6;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.z3;
  var isCharArray = kotlin_kotlin.$_$.ya;
  var charArray = kotlin_kotlin.$_$.aa;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.q3;
  var isDoubleArray = kotlin_kotlin.$_$.ab;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.r3;
  var isFloatArray = kotlin_kotlin.$_$.bb;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.a4;
  var isLongArray = kotlin_kotlin.$_$.k9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.e4;
  var ULongArray = kotlin_kotlin.$_$.lf;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.a3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.y2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.s3;
  var isIntArray = kotlin_kotlin.$_$.cb;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.d4;
  var UIntArray = kotlin_kotlin.$_$.jf;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.t2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.r2;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.t3;
  var isShortArray = kotlin_kotlin.$_$.fb;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.f4;
  var UShortArray = kotlin_kotlin.$_$.nf;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.h3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.f3;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.p3;
  var isByteArray = kotlin_kotlin.$_$.xa;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.c4;
  var UByteArray = kotlin_kotlin.$_$.hf;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.n2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.k2;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.o3;
  var isBooleanArray = kotlin_kotlin.$_$.wa;
  var coerceAtLeast = kotlin_kotlin.$_$.tb;
  var copyOf = kotlin_kotlin.$_$.t5;
  var copyOf_0 = kotlin_kotlin.$_$.v5;
  var copyOf_1 = kotlin_kotlin.$_$.w5;
  var copyOf_2 = kotlin_kotlin.$_$.r5;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.d3;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.e3;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.b3;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.c3;
  var copyOf_3 = kotlin_kotlin.$_$.y5;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.w2;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.x2;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.u2;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.v2;
  var copyOf_4 = kotlin_kotlin.$_$.q5;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.k3;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.l3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.i3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.j3;
  var copyOf_5 = kotlin_kotlin.$_$.u5;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.p2;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.q2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.m2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.o2;
  var copyOf_6 = kotlin_kotlin.$_$.s5;
  var trimIndent = kotlin_kotlin.$_$.ie;
  var charSequenceLength = kotlin_kotlin.$_$.da;
  var lastOrNull = kotlin_kotlin.$_$.t6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.s6;
  var UInt = kotlin_kotlin.$_$.kf;
  var ULong = kotlin_kotlin.$_$.mf;
  var UByte = kotlin_kotlin.$_$.if;
  var UShort = kotlin_kotlin.$_$.of;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.cg;
  var get_indices = kotlin_kotlin.$_$.n6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var get_indices_0 = kotlin_kotlin.$_$.m6;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.v3;
  var get_longArrayClass = kotlin_kotlin.$_$.l9;
  var Unit = kotlin_kotlin.$_$.pf;
  var Instant = kotlin_kotlin.$_$.ne;
  var Uuid = kotlin_kotlin.$_$.qe;
  var mapOf = kotlin_kotlin.$_$.a7;
  var get_js = kotlin_kotlin.$_$.gb;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var Companion_instance = kotlin_kotlin.$_$.b4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.g2;
  var createFailure = kotlin_kotlin.$_$.vf;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.j3v(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.p3y(descriptor, index, deserializer, previousValue) : $super.p3y.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(InstantSerializer, 'InstantSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.h4a(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(createCache$1);
  initMetadataForClass(createParametrizedCache$1);
  //endregion
  function KSerializer() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.s3v('type', serializer_0(StringCompanionObject_instance).i3v());
      $this$buildSerialDescriptor.s3v('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.t3v_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.m3v_1 = this$0.u3v_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.t3v_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return function (p0) {
      return p0.i3v();
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.t3v_1 = baseClass;
    this.u3v_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.v3v_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).w3v = function () {
    return this.t3v_1;
  };
  protoOf(PolymorphicSerializer).i3v = function () {
    var tmp0 = this.v3v_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.h2();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.t3v_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.x3v(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.w3v());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    var tmp0_message = missingFields.a1() === 1 ? "Field '" + missingFields.z(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing";
    MissingFieldException.call($this, tmp0_message, null, missingFields, serialName);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(message, cause, missingFields, serialName) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.y3v_1 = missingFields;
    this.z3v_1 = serialName;
  }
  protoOf(MissingFieldException).a3w = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.y3v_1, this.z3v_1);
  };
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s = typeArguments.t();
      while (_iterator__ex2g4s.u()) {
        var item = _iterator__ex2g4s.v();
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.y(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.t();
      while (_iterator__ex2g4s_0.u()) {
        var item_0 = _iterator__ex2g4s_0.v();
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.y(tmp$ret$3);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.z(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.z(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.z(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.z(0), serializers.z(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.z(0), serializers.z(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.z(0), serializers.z(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.z(0), serializers.z(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.z(0), serializers.z(1), serializers.z(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.z(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.l();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.k();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$0 = typeOrThrow(item);
      destination.y(tmp$ret$0);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.r()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.c3w(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.b3w()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        var tmp_2;
        if (_Result___get_isFailure__impl__jpiriv(this_1)) {
          tmp_2 = null;
        } else {
          var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
          tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        }
        tmp_1 = tmp_2;
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_4;
    if (typeArguments.r()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.c3w(rootClass) : tmp0_elvis_lhs;
      var tmp_5;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp1_elvis_lhs;
      }
      tmp_4 = tmp_5;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_6;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var serializers = tmp_6;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.d3w(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_7;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_7 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_7 = tmp4_elvis_lhs;
      }
      tmp_4 = tmp_7;
    }
    var contextualSerializer = tmp_4;
    var tmp_8;
    if (contextualSerializer == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_8 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_8;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.z(0).j();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().e3w(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().e3w(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().f3w(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().f3w(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.z(0).j();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.z(0).j();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.i3v().g3w()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_5(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return InstantSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.h3w_1 = original;
    this.i3w_1 = kClass;
    this.j3w_1 = this.h3w_1.k3w() + '<' + this.i3w_1.o() + '>';
  }
  protoOf(ContextDescriptor).k3w = function () {
    return this.j3w_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.h3w_1, another.h3w_1) && another.i3w_1.equals(this.i3w_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.i3w_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.j3w_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.i3w_1) + ', original: ' + toString(this.h3w_1) + ')';
  };
  protoOf(ContextDescriptor).l3w = function () {
    return this.h3w_1.l3w();
  };
  protoOf(ContextDescriptor).g3w = function () {
    return this.h3w_1.g3w();
  };
  protoOf(ContextDescriptor).m3w = function () {
    return this.h3w_1.m3w();
  };
  protoOf(ContextDescriptor).n3w = function () {
    return this.h3w_1.n3w();
  };
  protoOf(ContextDescriptor).o3w = function () {
    return this.h3w_1.o3w();
  };
  protoOf(ContextDescriptor).p3w = function (index) {
    return this.h3w_1.p3w(index);
  };
  protoOf(ContextDescriptor).q3w = function (name) {
    return this.h3w_1.q3w(name);
  };
  protoOf(ContextDescriptor).r3w = function (index) {
    return this.h3w_1.r3w(index);
  };
  protoOf(ContextDescriptor).s3w = function (index) {
    return this.h3w_1.s3w(index);
  };
  protoOf(ContextDescriptor).t3w = function (index) {
    return this.h3w_1.t3w(index);
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.c3w(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.i3v();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.i3w_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.u3w_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementDescriptors$1($this_elementDescriptors) {
    this.y3w_1 = $this_elementDescriptors;
    this.x3w_1 = $this_elementDescriptors.n3w();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.x3w_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.y3w_1.n3w();
    var _unary__edvuaz = this.x3w_1;
    this.x3w_1 = _unary__edvuaz - 1 | 0;
    return this.y3w_1.s3w(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.z3w_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.z3w_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.n3v_1.a1(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.k3v_1 = serialName;
    this.l3v_1 = false;
    this.m3v_1 = emptyList();
    this.n3v_1 = ArrayList_init_$Create$_0();
    this.o3v_1 = HashSet_init_$Create$();
    this.p3v_1 = ArrayList_init_$Create$_0();
    this.q3v_1 = ArrayList_init_$Create$_0();
    this.r3v_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).a3x = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.o3v_1.y(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.k3v_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.n3v_1.y(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.p3v_1.y(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.q3v_1.y(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.r3v_1.y(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).s3v = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.a3x(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.a3x.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.m3x_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.h2();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.l3x_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return function (p0) {
      return _get__hashCode__tgwhef(p0);
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.b3x_1 = serialName;
    this.c3x_1 = kind;
    this.d3x_1 = elementsCount;
    this.e3x_1 = builder.m3v_1;
    this.f3x_1 = toHashSet(builder.n3v_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.n3v_1;
    tmp.g3x_1 = copyToArray(this_0);
    this.h3x_1 = compactArray(builder.p3v_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.q3v_1;
    tmp_0.i3x_1 = copyToArray(this_1);
    this.j3x_1 = toBooleanArray(builder.r3v_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.g3x_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = to(item.gf_1, item.ff_1);
      destination.y(tmp$ret$2);
    }
    tmp_1.k3x_1 = toMap(destination);
    this.l3x_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.m3x_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).k3w = function () {
    return this.b3x_1;
  };
  protoOf(SerialDescriptorImpl).l3w = function () {
    return this.c3x_1;
  };
  protoOf(SerialDescriptorImpl).n3w = function () {
    return this.d3x_1;
  };
  protoOf(SerialDescriptorImpl).o3w = function () {
    return this.e3x_1;
  };
  protoOf(SerialDescriptorImpl).n3x = function () {
    return this.f3x_1;
  };
  protoOf(SerialDescriptorImpl).p3w = function (index) {
    return getChecked(this.g3x_1, index);
  };
  protoOf(SerialDescriptorImpl).q3w = function (name) {
    var tmp0_elvis_lhs = this.k3x_1.k2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).r3w = function (index) {
    return getChecked(this.i3x_1, index);
  };
  protoOf(SerialDescriptorImpl).s3w = function (index) {
    return getChecked(this.h3x_1, index);
  };
  protoOf(SerialDescriptorImpl).t3w = function (index) {
    return getChecked_0(this.j3x_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.k3w() === other.k3w())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.l3x_1, other.l3x_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.n3w() === other.n3w())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.n3w();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.s3w(index).k3w() === other.s3w(index).k3w())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.s3w(index).l3w(), other.s3w(index).l3w())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    return toStringImpl(this);
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.n3v_1.a1(), toList(typeParameters), sdBuilder);
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).o());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).o3x = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).p3x = function () {
    return true;
  };
  protoOf(AbstractDecoder).q3x = function () {
    return null;
  };
  protoOf(AbstractDecoder).r3x = function () {
    var tmp = this.o3x();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).s3x = function () {
    var tmp = this.o3x();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).t3x = function () {
    var tmp = this.o3x();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).u3x = function () {
    var tmp = this.o3x();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).v3x = function () {
    var tmp = this.o3x();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).w3x = function () {
    var tmp = this.o3x();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).x3x = function () {
    var tmp = this.o3x();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).y3x = function () {
    var tmp = this.o3x();
    return tmp instanceof Char ? tmp.s1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).z3x = function () {
    var tmp = this.o3x();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).a3y = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).b3y = function (deserializer, previousValue) {
    return this.c3y(deserializer);
  };
  protoOf(AbstractDecoder).d3y = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).e3y = function (descriptor) {
  };
  protoOf(AbstractDecoder).f3y = function (descriptor, index) {
    return this.r3x();
  };
  protoOf(AbstractDecoder).g3y = function (descriptor, index) {
    return this.s3x();
  };
  protoOf(AbstractDecoder).h3y = function (descriptor, index) {
    return this.t3x();
  };
  protoOf(AbstractDecoder).i3y = function (descriptor, index) {
    return this.u3x();
  };
  protoOf(AbstractDecoder).j3y = function (descriptor, index) {
    return this.v3x();
  };
  protoOf(AbstractDecoder).k3y = function (descriptor, index) {
    return this.w3x();
  };
  protoOf(AbstractDecoder).l3y = function (descriptor, index) {
    return this.x3x();
  };
  protoOf(AbstractDecoder).m3y = function (descriptor, index) {
    return this.y3x();
  };
  protoOf(AbstractDecoder).n3y = function (descriptor, index) {
    return this.z3x();
  };
  protoOf(AbstractDecoder).o3y = function (descriptor, index) {
    return this.a3y(descriptor.s3w(index));
  };
  protoOf(AbstractDecoder).p3y = function (descriptor, index, deserializer, previousValue) {
    return this.b3y(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).r3y = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.i3v().g3w();
    var tmp;
    if (isNullabilitySupported || this.p3x()) {
      tmp = this.b3y(deserializer, previousValue);
    } else {
      tmp = this.q3x();
    }
    return tmp;
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.n3y($this.i3v(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.q3y($this.i3v(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).j3v = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.i3v();
    var composite = decoder.d3y(descriptor);
    var tmp$ret$0;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.t3y()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.u3y(this.i3v());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.n3y(this.i3v(), index);
            break;
          case 1:
            var tmp0 = klassName;
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (tmp0 == null) {
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer(this, composite, klassName);
            value = composite.q3y(this.i3v(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp0_0 = value;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0_0 == null) {
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp0_0;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.e3y(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).x3v = function (decoder, klassName) {
    return decoder.s3y().w3y(this.w3v(), klassName);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.x3y_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).i3v = function () {
    return this.x3y_1;
  };
  protoOf(NothingSerializer_0).j3v = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.y3y_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).i3v = function () {
    return this.y3y_1;
  };
  protoOf(DurationSerializer).z3y = function (decoder) {
    return Companion_getInstance().dj(decoder.z3x());
  };
  protoOf(DurationSerializer).j3v = function (decoder) {
    return new Duration(this.z3y(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.a3z_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).i3v = function () {
    return this.a3z_1;
  };
  protoOf(InstantSerializer).j3v = function (decoder) {
    return Companion_getInstance_0().pj(decoder.z3x());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.b3z_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).i3v = function () {
    return this.b3z_1;
  };
  protoOf(UuidSerializer).j3v = function (decoder) {
    return Companion_getInstance_1().vk(decoder.z3x());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).k3w = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).k3w = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).k3w = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).k3w = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.e3z_1 = elementDescriptor;
    this.f3z_1 = 1;
  }
  protoOf(ListLikeDescriptor).l3w = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).n3w = function () {
    return this.f3z_1;
  };
  protoOf(ListLikeDescriptor).p3w = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).q3w = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).t3w = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.k3w() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).r3w = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.k3w() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).s3w = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.k3w() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.e3z_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.e3z_1, other.e3z_1) && this.k3w() === other.k3w())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.e3z_1), 31) + getStringHashCode(this.k3w()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.k3w() + '(' + toString(this.e3z_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.k3z_1 = serialName;
    this.l3z_1 = keyDescriptor;
    this.m3z_1 = valueDescriptor;
    this.n3z_1 = 2;
  }
  protoOf(MapLikeDescriptor).k3w = function () {
    return this.k3z_1;
  };
  protoOf(MapLikeDescriptor).l3w = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).n3w = function () {
    return this.n3z_1;
  };
  protoOf(MapLikeDescriptor).p3w = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).q3w = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).t3w = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.k3w() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).r3w = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.k3w() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).s3w = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.k3w() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.l3z_1;
        break;
      case 1:
        tmp = this.m3z_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.k3w() === other.k3w()))
      return false;
    if (!equals(this.l3z_1, other.l3z_1))
      return false;
    if (!equals(this.m3z_1, other.m3z_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.k3w());
    result = imul(31, result) + hashCode(this.l3z_1) | 0;
    result = imul(31, result) + hashCode(this.m3z_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.k3w() + '(' + toString(this.l3z_1) + ', ' + toString(this.m3z_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.s3z_1 = primitive.k3w() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).k3w = function () {
    return this.s3z_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.u3z_1 = new ArrayListClassDesc(element.i3v());
  }
  protoOf(ArrayListSerializer).i3v = function () {
    return this.u3z_1;
  };
  protoOf(ArrayListSerializer).z28 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).v3z = function (_this__u8e3s4) {
    return _this__u8e3s4.a1();
  };
  protoOf(ArrayListSerializer).w3z = function (_this__u8e3s4) {
    return this.v3z(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).x3z = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).y3z = function (_this__u8e3s4) {
    return this.x3z(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).z3z = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).a40 = function (_this__u8e3s4) {
    return this.z3z((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).b40 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.o5(size);
  };
  protoOf(ArrayListSerializer).c40 = function (_this__u8e3s4, size) {
    return this.b40(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).d40 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.v2(index, element);
  };
  protoOf(ArrayListSerializer).e40 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.d40(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.l40_1 = new HashSetClassDesc(eSerializer.i3v());
  }
  protoOf(HashSetSerializer).i3v = function () {
    return this.l40_1;
  };
  protoOf(HashSetSerializer).z28 = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).m40 = function (_this__u8e3s4) {
    return _this__u8e3s4.a1();
  };
  protoOf(HashSetSerializer).w3z = function (_this__u8e3s4) {
    return this.m40(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).n40 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).y3z = function (_this__u8e3s4) {
    return this.n40(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).o40 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).a40 = function (_this__u8e3s4) {
    return this.o40((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).p40 = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).c40 = function (_this__u8e3s4, size) {
    return this.p40(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).q40 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.y(element);
  };
  protoOf(HashSetSerializer).e40 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.q40(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.s40_1 = new LinkedHashSetClassDesc(eSerializer.i3v());
  }
  protoOf(LinkedHashSetSerializer).i3v = function () {
    return this.s40_1;
  };
  protoOf(LinkedHashSetSerializer).z28 = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).t40 = function (_this__u8e3s4) {
    return _this__u8e3s4.a1();
  };
  protoOf(LinkedHashSetSerializer).w3z = function (_this__u8e3s4) {
    return this.t40(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).u40 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).y3z = function (_this__u8e3s4) {
    return this.u40(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).o40 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).a40 = function (_this__u8e3s4) {
    return this.o40((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).v40 = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).c40 = function (_this__u8e3s4, size) {
    return this.v40(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).w40 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.y(element);
  };
  protoOf(LinkedHashSetSerializer).e40 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.w40(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.z40_1 = new HashMapClassDesc(kSerializer.i3v(), vSerializer.i3v());
  }
  protoOf(HashMapSerializer).i3v = function () {
    return this.z40_1;
  };
  protoOf(HashMapSerializer).z28 = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).a41 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.a1(), 2);
  };
  protoOf(HashMapSerializer).w3z = function (_this__u8e3s4) {
    return this.a41(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).b41 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).y3z = function (_this__u8e3s4) {
    return this.b41(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).c41 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).a40 = function (_this__u8e3s4) {
    return this.c41((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).d41 = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).c40 = function (_this__u8e3s4, size) {
    return this.d41(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.k41_1 = new LinkedHashMapClassDesc(kSerializer.i3v(), vSerializer.i3v());
  }
  protoOf(LinkedHashMapSerializer).i3v = function () {
    return this.k41_1;
  };
  protoOf(LinkedHashMapSerializer).z28 = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).l41 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.a1(), 2);
  };
  protoOf(LinkedHashMapSerializer).w3z = function (_this__u8e3s4) {
    return this.l41(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).m41 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).y3z = function (_this__u8e3s4) {
    return this.m41(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).c41 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).a40 = function (_this__u8e3s4) {
    return this.c41((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).n41 = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).c40 = function (_this__u8e3s4, size) {
    return this.n41(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.p41_1 = kClass;
    this.q41_1 = new ArrayClassDesc(eSerializer.i3v());
  }
  protoOf(ReferenceArraySerializer).i3v = function () {
    return this.q41_1;
  };
  protoOf(ReferenceArraySerializer).z28 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).r41 = function (_this__u8e3s4) {
    return _this__u8e3s4.a1();
  };
  protoOf(ReferenceArraySerializer).w3z = function (_this__u8e3s4) {
    return this.r41(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).s41 = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.p41_1);
  };
  protoOf(ReferenceArraySerializer).y3z = function (_this__u8e3s4) {
    return this.s41(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).t41 = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).a40 = function (_this__u8e3s4) {
    return this.t41((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).u41 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.o5(size);
  };
  protoOf(ReferenceArraySerializer).c40 = function (_this__u8e3s4, size) {
    return this.u41(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).v41 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.v2(index, element);
  };
  protoOf(ReferenceArraySerializer).e40 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.v41(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.e41_1 = keySerializer;
    this.f41_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).g41 = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.k1_1;
    var last = progression.l1_1;
    var step_0 = progression.m1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.h41(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).g40 = function (decoder, builder, startIndex, size) {
    return this.g41(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).h41 = function (decoder, index, builder, checkIndex) {
    var key = decoder.q3y(this.i3v(), index, this.e41_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.u3y(this.i3v());
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.i2(key)) {
      var tmp_2 = this.f41_1.i3v().l3w();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.p3y(this.i3v(), vIndex, this.f41_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.q3y(this.i3v(), vIndex, this.f41_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.o2(key, value);
  };
  protoOf(MapLikeSerializer).h40 = function (decoder, index, builder, checkIndex) {
    return this.h41(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.f40_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).g40 = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.h40(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).h40 = function (decoder, index, builder, checkIndex) {
    this.e40(builder, index, decoder.q3y(this.i3v(), index, this.f40_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.v3y($this.i3v());
    $this.c40(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).j40 = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.a40(previous);
    var builder = tmp1_elvis_lhs == null ? this.z28() : tmp1_elvis_lhs;
    var startIndex = this.w3z(builder);
    var compositeDecoder = decoder.d3y(this.i3v());
    if (compositeDecoder.t3y()) {
      this.g40(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.u3y(this.i3v());
        if (index === -1)
          break $l$loop;
        this.i40(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.e3y(this.i3v());
    return this.y3z(builder);
  };
  protoOf(AbstractCollectionSerializer).j3v = function (decoder) {
    return this.j40(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).i40 = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.h40(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.h40.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.x41_1 = new PrimitiveArrayDescriptor(primitiveSerializer.i3v());
  }
  protoOf(PrimitiveArraySerializer).i3v = function () {
    return this.x41_1;
  };
  protoOf(PrimitiveArraySerializer).y41 = function (_this__u8e3s4) {
    return _this__u8e3s4.z41();
  };
  protoOf(PrimitiveArraySerializer).w3z = function (_this__u8e3s4) {
    return this.y41(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).a42 = function (_this__u8e3s4) {
    return _this__u8e3s4.b42();
  };
  protoOf(PrimitiveArraySerializer).y3z = function (_this__u8e3s4) {
    return this.a42(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).c42 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.d42(size);
  };
  protoOf(PrimitiveArraySerializer).c40 = function (_this__u8e3s4, size) {
    return this.c42(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).e42 = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).e40 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.e42(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).z28 = function () {
    return this.a40(this.f42());
  };
  protoOf(PrimitiveArraySerializer).j3v = function (decoder) {
    return this.j40(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).h42 = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.z41() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.d42(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.d42.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.i42_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = shiftLeft(new Long(-1, -1), elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.m42_1[slot] = bitwiseOr($this.m42_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.m42_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.m42_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.k42_1($this.j42_1, index)) {
            $this.m42_1[slot] = slotMarks;
            return index;
          }
        }
        $this.m42_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.j42_1 = descriptor;
    this.k42_1 = readIfAbsent;
    var elementsCount = this.j42_1.n3w();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
      }
      tmp.l42_1 = tmp_0;
      this.m42_1 = Companion_getInstance_8().i42_1;
    } else {
      this.l42_1 = new Long(0, 0);
      this.m42_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).n42 = function (index) {
    if (index < 64) {
      this.l42_1 = bitwiseOr(this.l42_1, shiftLeft(new Long(1, 0), index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).o42 = function () {
    var elementsCount = this.j42_1.n3w();
    while (!equalsLong(this.l42_1, new Long(-1, -1))) {
      var index = countTrailingZeroBits(invert(this.l42_1));
      this.l42_1 = bitwiseOr(this.l42_1, shiftLeft(new Long(1, 0), index));
      if (this.k42_1(this.j42_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.b43_1 = true;
  }
  protoOf(InlineClassDescriptor).m3w = function () {
    return this.b43_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.k3w() === other.k3w())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.b43_1 && contentEquals(this.o43(), other.o43()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.n3w() === other.n3w())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.n3w();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.s3w(index).k3w() === other.s3w(index).k3w())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.s3w(index).l3w(), other.s3w(index).l3w())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.q43_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).r43 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.q43_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).i3v = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).j3v = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.a3w(message);
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.t43_1 = OBJECT_getInstance();
    this.u43_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).l3w = function () {
    return this.t43_1;
  };
  protoOf(NothingSerialDescriptor).k3w = function () {
    return this.u43_1;
  };
  protoOf(NothingSerialDescriptor).n3w = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).p3w = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).q3w = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).t3w = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).s3w = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).r3w = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.u43_1) + imul(31, this.t43_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.v43_1 = serializer;
    this.w43_1 = new SerialDescriptorForNullable(this.v43_1.i3v());
  }
  protoOf(NullableSerializer).i3v = function () {
    return this.w43_1;
  };
  protoOf(NullableSerializer).j3v = function (decoder) {
    return decoder.p3x() ? decoder.c3y(this.v43_1) : decoder.q3x();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.v43_1, other.v43_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.v43_1);
  };
  function SerialDescriptorForNullable(original) {
    this.u3w_1 = original;
    this.v3w_1 = this.u3w_1.k3w() + '?';
    this.w3w_1 = cachedSerialNames(this.u3w_1);
  }
  protoOf(SerialDescriptorForNullable).k3w = function () {
    return this.v3w_1;
  };
  protoOf(SerialDescriptorForNullable).n3x = function () {
    return this.w3w_1;
  };
  protoOf(SerialDescriptorForNullable).g3w = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.u3w_1, other.u3w_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.u3w_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.u3w_1), 31);
  };
  protoOf(SerialDescriptorForNullable).l3w = function () {
    return this.u3w_1.l3w();
  };
  protoOf(SerialDescriptorForNullable).m3w = function () {
    return this.u3w_1.m3w();
  };
  protoOf(SerialDescriptorForNullable).n3w = function () {
    return this.u3w_1.n3w();
  };
  protoOf(SerialDescriptorForNullable).o3w = function () {
    return this.u3w_1.o3w();
  };
  protoOf(SerialDescriptorForNullable).p3w = function (index) {
    return this.u3w_1.p3w(index);
  };
  protoOf(SerialDescriptorForNullable).q3w = function (name) {
    return this.u3w_1.q3w(name);
  };
  protoOf(SerialDescriptorForNullable).r3w = function (index) {
    return this.u3w_1.r3w(index);
  };
  protoOf(SerialDescriptorForNullable).s3w = function (index) {
    return this.u3w_1.s3w(index);
  };
  protoOf(SerialDescriptorForNullable).t3w = function (index) {
    return this.u3w_1.t3w(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.m3v_1 = this$0.y43_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer$_get_descriptor_$ref_7z4xb6() {
    return function (p0) {
      return p0.i3v();
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.x43_1 = objectInstance;
    this.y43_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.z43_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).i3v = function () {
    var tmp0 = this.z43_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.h2();
  };
  protoOf(ObjectSerializer).j3v = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.i3v();
    var composite = decoder.d3y(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      if (composite.t3y()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.u3y(this.i3v());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.e3y(descriptor);
    return this.x43_1;
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.n3x();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.n3w());
    var inductionVariable = 0;
    var last = _this__u8e3s4.n3w();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.p3w(i);
        result.y(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.r())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.j();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0 = _this__u8e3s4.ci_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.ci_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.o();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.p3w(i);
          missingFields.y(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.k3w());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.l43_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.h2();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.n43_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.h2();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.g43_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.g43_1[i];
        indices.o2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.d43_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r43();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.d43_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s43();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0 = item.i3v();
          destination.y(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return function (p0) {
      return p0.o43();
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.o43());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.c43_1 = serialName;
    this.d43_1 = generatedSerializer;
    this.e43_1 = elementsCount;
    this.f43_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.e43_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.g43_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.e43_1;
    tmp_3.h43_1 = Array(size);
    this.i43_1 = null;
    this.j43_1 = booleanArray(this.e43_1);
    this.k43_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.l43_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.m43_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.n43_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).k3w = function () {
    return this.c43_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).n3w = function () {
    return this.e43_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).l3w = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).o3w = function () {
    var tmp0_elvis_lhs = this.i43_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).n3x = function () {
    return this.k43_1.l2();
  };
  protoOf(PluginGeneratedSerialDescriptor).o43 = function () {
    var tmp0 = this.m43_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.h2();
  };
  protoOf(PluginGeneratedSerialDescriptor).p43 = function (name, isOptional) {
    this.f43_1 = this.f43_1 + 1 | 0;
    this.g43_1[this.f43_1] = name;
    this.j43_1[this.f43_1] = isOptional;
    this.h43_1[this.f43_1] = null;
    if (this.f43_1 === (this.e43_1 - 1 | 0)) {
      this.k43_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).s3w = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).i3v();
  };
  protoOf(PluginGeneratedSerialDescriptor).t3w = function (index) {
    return getChecked_0(this.j43_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).r3w = function (index) {
    var tmp0_elvis_lhs = getChecked(this.h43_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).p3w = function (index) {
    return getChecked(this.g43_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).q3w = function (name) {
    var tmp0_elvis_lhs = this.k43_1.k2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.k3w() === other.k3w())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.o43(), other.o43())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.n3w() === other.n3w())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.n3w();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.s3w(index).k3w() === other.s3w(index).k3w())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.s3w(index).l3w(), other.s3w(index).l3w())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    return toStringImpl(this);
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.k3w());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.k3w();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.l3w();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.n3w());
    var tmp_0 = _this__u8e3s4.k3w() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.p3w(i) + ': ' + $this_toStringImpl.s3w(i).k3w();
    };
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  function SerializerFactory() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).d44 = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).a40 = function (_this__u8e3s4) {
    return this.d44((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).f42 = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).e44 = function (decoder, index, builder, checkIndex) {
    builder.h44(decoder.m3y(this.x41_1, index));
  };
  protoOf(CharArraySerializer_0).h40 = function (decoder, index, builder, checkIndex) {
    return this.e44(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).g42 = function (decoder, index, builder, checkIndex) {
    return this.e44(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).k44 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).a40 = function (_this__u8e3s4) {
    return this.k44((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).f42 = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).l44 = function (decoder, index, builder, checkIndex) {
    builder.o44(decoder.l3y(this.x41_1, index));
  };
  protoOf(DoubleArraySerializer_0).h40 = function (decoder, index, builder, checkIndex) {
    return this.l44(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).g42 = function (decoder, index, builder, checkIndex) {
    return this.l44(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).r44 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).a40 = function (_this__u8e3s4) {
    return this.r44((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).f42 = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).s44 = function (decoder, index, builder, checkIndex) {
    builder.v44(decoder.k3y(this.x41_1, index));
  };
  protoOf(FloatArraySerializer_0).h40 = function (decoder, index, builder, checkIndex) {
    return this.s44(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).g42 = function (decoder, index, builder, checkIndex) {
    return this.s44(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_3()));
  }
  protoOf(LongArraySerializer_0).y44 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).a40 = function (_this__u8e3s4) {
    return this.y44((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).f42 = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).z44 = function (decoder, index, builder, checkIndex) {
    builder.c45(decoder.j3y(this.x41_1, index));
  };
  protoOf(LongArraySerializer_0).h40 = function (decoder, index, builder, checkIndex) {
    return this.z44(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).g42 = function (decoder, index, builder, checkIndex) {
    return this.z44(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_4()));
  }
  protoOf(ULongArraySerializer_0).f45 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).a40 = function (_this__u8e3s4) {
    return this.f45(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.fm_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).g45 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).f42 = function () {
    return new ULongArray(this.g45());
  };
  protoOf(ULongArraySerializer_0).h45 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.o3y(this.x41_1, index).v3x();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.k45(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).h40 = function (decoder, index, builder, checkIndex) {
    return this.h45(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).g42 = function (decoder, index, builder, checkIndex) {
    return this.h45(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).n45 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).a40 = function (_this__u8e3s4) {
    return this.n45((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).f42 = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).o45 = function (decoder, index, builder, checkIndex) {
    builder.r45(decoder.i3y(this.x41_1, index));
  };
  protoOf(IntArraySerializer_0).h40 = function (decoder, index, builder, checkIndex) {
    return this.o45(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).g42 = function (decoder, index, builder, checkIndex) {
    return this.o45(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_5()));
  }
  protoOf(UIntArraySerializer_0).u45 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).a40 = function (_this__u8e3s4) {
    return this.u45(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.ul_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).v45 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).f42 = function () {
    return new UIntArray(this.v45());
  };
  protoOf(UIntArraySerializer_0).w45 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.o3y(this.x41_1, index).u3x();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.z45(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).h40 = function (decoder, index, builder, checkIndex) {
    return this.w45(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).g42 = function (decoder, index, builder, checkIndex) {
    return this.w45(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).c46 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).a40 = function (_this__u8e3s4) {
    return this.c46((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).f42 = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).d46 = function (decoder, index, builder, checkIndex) {
    builder.g46(decoder.h3y(this.x41_1, index));
  };
  protoOf(ShortArraySerializer_0).h40 = function (decoder, index, builder, checkIndex) {
    return this.d46(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).g42 = function (decoder, index, builder, checkIndex) {
    return this.d46(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_6()));
  }
  protoOf(UShortArraySerializer_0).j46 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).a40 = function (_this__u8e3s4) {
    return this.j46(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.qm_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).k46 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).f42 = function () {
    return new UShortArray(this.k46());
  };
  protoOf(UShortArraySerializer_0).l46 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.o3y(this.x41_1, index).t3x();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.o46(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).h40 = function (decoder, index, builder, checkIndex) {
    return this.l46(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).g42 = function (decoder, index, builder, checkIndex) {
    return this.l46(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).r46 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).a40 = function (_this__u8e3s4) {
    return this.r46((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).f42 = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).s46 = function (decoder, index, builder, checkIndex) {
    builder.v46(decoder.g3y(this.x41_1, index));
  };
  protoOf(ByteArraySerializer_0).h40 = function (decoder, index, builder, checkIndex) {
    return this.s46(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).g42 = function (decoder, index, builder, checkIndex) {
    return this.s46(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_7()));
  }
  protoOf(UByteArraySerializer_0).y46 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).a40 = function (_this__u8e3s4) {
    return this.y46(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.jl_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).z46 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).f42 = function () {
    return new UByteArray(this.z46());
  };
  protoOf(UByteArraySerializer_0).a47 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.o3y(this.x41_1, index).s3x();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.d47(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).h40 = function (decoder, index, builder, checkIndex) {
    return this.a47(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).g42 = function (decoder, index, builder, checkIndex) {
    return this.a47(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).g47 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).a40 = function (_this__u8e3s4) {
    return this.g47((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).f42 = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).h47 = function (decoder, index, builder, checkIndex) {
    builder.k47(decoder.f3y(this.x41_1, index));
  };
  protoOf(BooleanArraySerializer_0).h40 = function (decoder, index, builder, checkIndex) {
    return this.h47(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).g42 = function (decoder, index, builder, checkIndex) {
    return this.h47(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.f44_1 = bufferWithData;
    this.g44_1 = bufferWithData.length;
    this.d42(10);
  }
  protoOf(CharArrayBuilder).z41 = function () {
    return this.g44_1;
  };
  protoOf(CharArrayBuilder).d42 = function (requiredCapacity) {
    if (this.f44_1.length < requiredCapacity)
      this.f44_1 = copyOf(this.f44_1, coerceAtLeast(requiredCapacity, imul(this.f44_1.length, 2)));
  };
  protoOf(CharArrayBuilder).h44 = function (c) {
    this.h42();
    var tmp = this.f44_1;
    var _unary__edvuaz = this.g44_1;
    this.g44_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).b42 = function () {
    return copyOf(this.f44_1, this.g44_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.m44_1 = bufferWithData;
    this.n44_1 = bufferWithData.length;
    this.d42(10);
  }
  protoOf(DoubleArrayBuilder).z41 = function () {
    return this.n44_1;
  };
  protoOf(DoubleArrayBuilder).d42 = function (requiredCapacity) {
    if (this.m44_1.length < requiredCapacity)
      this.m44_1 = copyOf_0(this.m44_1, coerceAtLeast(requiredCapacity, imul(this.m44_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).o44 = function (c) {
    this.h42();
    var tmp = this.m44_1;
    var _unary__edvuaz = this.n44_1;
    this.n44_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).b42 = function () {
    return copyOf_0(this.m44_1, this.n44_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t44_1 = bufferWithData;
    this.u44_1 = bufferWithData.length;
    this.d42(10);
  }
  protoOf(FloatArrayBuilder).z41 = function () {
    return this.u44_1;
  };
  protoOf(FloatArrayBuilder).d42 = function (requiredCapacity) {
    if (this.t44_1.length < requiredCapacity)
      this.t44_1 = copyOf_1(this.t44_1, coerceAtLeast(requiredCapacity, imul(this.t44_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).v44 = function (c) {
    this.h42();
    var tmp = this.t44_1;
    var _unary__edvuaz = this.u44_1;
    this.u44_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).b42 = function () {
    return copyOf_1(this.t44_1, this.u44_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a45_1 = bufferWithData;
    this.b45_1 = bufferWithData.length;
    this.d42(10);
  }
  protoOf(LongArrayBuilder).z41 = function () {
    return this.b45_1;
  };
  protoOf(LongArrayBuilder).d42 = function (requiredCapacity) {
    if (this.a45_1.length < requiredCapacity)
      this.a45_1 = copyOf_2(this.a45_1, coerceAtLeast(requiredCapacity, imul(this.a45_1.length, 2)));
  };
  protoOf(LongArrayBuilder).c45 = function (c) {
    this.h42();
    var tmp = this.a45_1;
    var _unary__edvuaz = this.b45_1;
    this.b45_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).b42 = function () {
    return copyOf_2(this.a45_1, this.b45_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i45_1 = bufferWithData;
    this.j45_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.d42(10);
  }
  protoOf(ULongArrayBuilder).z41 = function () {
    return this.j45_1;
  };
  protoOf(ULongArrayBuilder).d42 = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.i45_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.i45_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.i45_1), 2));
      tmp.i45_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).k45 = function (c) {
    this.h42();
    var tmp = this.i45_1;
    var _unary__edvuaz = this.j45_1;
    this.j45_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).l47 = function () {
    var tmp0 = this.i45_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.j45_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).b42 = function () {
    return new ULongArray(this.l47());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.p45_1 = bufferWithData;
    this.q45_1 = bufferWithData.length;
    this.d42(10);
  }
  protoOf(IntArrayBuilder).z41 = function () {
    return this.q45_1;
  };
  protoOf(IntArrayBuilder).d42 = function (requiredCapacity) {
    if (this.p45_1.length < requiredCapacity)
      this.p45_1 = copyOf_3(this.p45_1, coerceAtLeast(requiredCapacity, imul(this.p45_1.length, 2)));
  };
  protoOf(IntArrayBuilder).r45 = function (c) {
    this.h42();
    var tmp = this.p45_1;
    var _unary__edvuaz = this.q45_1;
    this.q45_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).b42 = function () {
    return copyOf_3(this.p45_1, this.q45_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.x45_1 = bufferWithData;
    this.y45_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.d42(10);
  }
  protoOf(UIntArrayBuilder).z41 = function () {
    return this.y45_1;
  };
  protoOf(UIntArrayBuilder).d42 = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.x45_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.x45_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.x45_1), 2));
      tmp.x45_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).z45 = function (c) {
    this.h42();
    var tmp = this.x45_1;
    var _unary__edvuaz = this.y45_1;
    this.y45_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).m47 = function () {
    var tmp0 = this.x45_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.y45_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).b42 = function () {
    return new UIntArray(this.m47());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.e46_1 = bufferWithData;
    this.f46_1 = bufferWithData.length;
    this.d42(10);
  }
  protoOf(ShortArrayBuilder).z41 = function () {
    return this.f46_1;
  };
  protoOf(ShortArrayBuilder).d42 = function (requiredCapacity) {
    if (this.e46_1.length < requiredCapacity)
      this.e46_1 = copyOf_4(this.e46_1, coerceAtLeast(requiredCapacity, imul(this.e46_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).g46 = function (c) {
    this.h42();
    var tmp = this.e46_1;
    var _unary__edvuaz = this.f46_1;
    this.f46_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).b42 = function () {
    return copyOf_4(this.e46_1, this.f46_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.m46_1 = bufferWithData;
    this.n46_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.d42(10);
  }
  protoOf(UShortArrayBuilder).z41 = function () {
    return this.n46_1;
  };
  protoOf(UShortArrayBuilder).d42 = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.m46_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.m46_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.m46_1), 2));
      tmp.m46_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).o46 = function (c) {
    this.h42();
    var tmp = this.m46_1;
    var _unary__edvuaz = this.n46_1;
    this.n46_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).n47 = function () {
    var tmp0 = this.m46_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.n46_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).b42 = function () {
    return new UShortArray(this.n47());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t46_1 = bufferWithData;
    this.u46_1 = bufferWithData.length;
    this.d42(10);
  }
  protoOf(ByteArrayBuilder).z41 = function () {
    return this.u46_1;
  };
  protoOf(ByteArrayBuilder).d42 = function (requiredCapacity) {
    if (this.t46_1.length < requiredCapacity)
      this.t46_1 = copyOf_5(this.t46_1, coerceAtLeast(requiredCapacity, imul(this.t46_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).v46 = function (c) {
    this.h42();
    var tmp = this.t46_1;
    var _unary__edvuaz = this.u46_1;
    this.u46_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).b42 = function () {
    return copyOf_5(this.t46_1, this.u46_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.b47_1 = bufferWithData;
    this.c47_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.d42(10);
  }
  protoOf(UByteArrayBuilder).z41 = function () {
    return this.c47_1;
  };
  protoOf(UByteArrayBuilder).d42 = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.b47_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.b47_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.b47_1), 2));
      tmp.b47_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).d47 = function (c) {
    this.h42();
    var tmp = this.b47_1;
    var _unary__edvuaz = this.c47_1;
    this.c47_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).o47 = function () {
    var tmp0 = this.b47_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.c47_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).b42 = function () {
    return new UByteArray(this.o47());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i47_1 = bufferWithData;
    this.j47_1 = bufferWithData.length;
    this.d42(10);
  }
  protoOf(BooleanArrayBuilder).z41 = function () {
    return this.j47_1;
  };
  protoOf(BooleanArrayBuilder).d42 = function (requiredCapacity) {
    if (this.i47_1.length < requiredCapacity)
      this.i47_1 = copyOf_6(this.i47_1, coerceAtLeast(requiredCapacity, imul(this.i47_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).k47 = function (c) {
    this.h42();
    var tmp = this.i47_1;
    var _unary__edvuaz = this.j47_1;
    this.j47_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).b42 = function () {
    return copyOf_6(this.i47_1, this.j47_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.p47_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).i3v = function () {
    return this.p47_1;
  };
  protoOf(StringSerializer).j3v = function (decoder) {
    return decoder.z3x();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.q47_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.q47_1 = serialName;
    this.r47_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).k3w = function () {
    return this.q47_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).l3w = function () {
    return this.r47_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).n3w = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).p3w = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).q3w = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).t3w = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).s3w = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).r3w = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.q47_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.q47_1 === other.q47_1 && equals(this.r47_1, other.r47_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.q47_1) + imul(31, this.r47_1.hashCode()) | 0;
  };
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().k2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.s47_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).i3v = function () {
    return this.s47_1;
  };
  protoOf(IntSerializer).j3v = function (decoder) {
    return decoder.u3x();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.t47_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).i3v = function () {
    return this.t47_1;
  };
  protoOf(LongSerializer).j3v = function (decoder) {
    return decoder.v3x();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.u47_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).i3v = function () {
    return this.u47_1;
  };
  protoOf(ByteSerializer).j3v = function (decoder) {
    return decoder.s3x();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.v47_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).i3v = function () {
    return this.v47_1;
  };
  protoOf(ShortSerializer).j3v = function (decoder) {
    return decoder.t3x();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.w47_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).i3v = function () {
    return this.w47_1;
  };
  protoOf(CharSerializer).x47 = function (decoder) {
    return decoder.y3x();
  };
  protoOf(CharSerializer).j3v = function (decoder) {
    return new Char(this.x47(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.y47_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).i3v = function () {
    return this.y47_1;
  };
  protoOf(DoubleSerializer).j3v = function (decoder) {
    return decoder.x3x();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.z47_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).i3v = function () {
    return this.z47_1;
  };
  protoOf(FloatSerializer).j3v = function (decoder) {
    return decoder.w3x();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.a48_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).i3v = function () {
    return this.a48_1;
  };
  protoOf(BooleanSerializer).j3v = function (decoder) {
    return decoder.r3x();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.b48_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).i3v = function () {
    return this.b48_1.i3v();
  };
  protoOf(UnitSerializer).c48 = function (decoder) {
    this.b48_1.j3v(decoder);
  };
  protoOf(UnitSerializer).j3v = function (decoder) {
    this.c48(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().m2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.i3v().k3w();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).f48 = function (_this__u8e3s4, index) {
    return this.h48(this.g48(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).h48 = function (nestedName) {
    var tmp0_elvis_lhs = this.k48();
    return this.l48(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).g48 = function (descriptor, index) {
    return descriptor.p3w(index);
  };
  protoOf(NamedValueDecoder).l48 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).m48 = function () {
    return this.i48_1.r() ? '$' : joinToString(this.i48_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.z48(tag);
    var r = block();
    if (!$this.j48_1) {
      $this.a49();
    }
    $this.j48_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.b3y($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.i3v().g3w();
      var tmp;
      if (isNullabilitySupported || tmp0.p3x()) {
        tmp = this$0.b3y($deserializer, $previousValue);
      } else {
        tmp = tmp0.q3x();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.i48_1 = ArrayList_init_$Create$_0();
    this.j48_1 = false;
  }
  protoOf(TaggedDecoder).s3y = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).n48 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).o48 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).p48 = function (tag) {
    var tmp = this.n48(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).q48 = function (tag) {
    var tmp = this.n48(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).r48 = function (tag) {
    var tmp = this.n48(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).s48 = function (tag) {
    var tmp = this.n48(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t48 = function (tag) {
    var tmp = this.n48(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u48 = function (tag) {
    var tmp = this.n48(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).v48 = function (tag) {
    var tmp = this.n48(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w48 = function (tag) {
    var tmp = this.n48(tag);
    return tmp instanceof Char ? tmp.s1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).x48 = function (tag) {
    var tmp = this.n48(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y48 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.z48(tag);
    return this;
  };
  protoOf(TaggedDecoder).b3y = function (deserializer, previousValue) {
    return this.c3y(deserializer);
  };
  protoOf(TaggedDecoder).a3y = function (descriptor) {
    return this.y48(this.a49(), descriptor);
  };
  protoOf(TaggedDecoder).p3x = function () {
    var tmp0_elvis_lhs = this.k48();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.o48(currentTag);
  };
  protoOf(TaggedDecoder).q3x = function () {
    return null;
  };
  protoOf(TaggedDecoder).r3x = function () {
    return this.p48(this.a49());
  };
  protoOf(TaggedDecoder).s3x = function () {
    return this.q48(this.a49());
  };
  protoOf(TaggedDecoder).t3x = function () {
    return this.r48(this.a49());
  };
  protoOf(TaggedDecoder).u3x = function () {
    return this.s48(this.a49());
  };
  protoOf(TaggedDecoder).v3x = function () {
    return this.t48(this.a49());
  };
  protoOf(TaggedDecoder).w3x = function () {
    return this.u48(this.a49());
  };
  protoOf(TaggedDecoder).x3x = function () {
    return this.v48(this.a49());
  };
  protoOf(TaggedDecoder).y3x = function () {
    return this.w48(this.a49());
  };
  protoOf(TaggedDecoder).z3x = function () {
    return this.x48(this.a49());
  };
  protoOf(TaggedDecoder).d3y = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).e3y = function (descriptor) {
  };
  protoOf(TaggedDecoder).f3y = function (descriptor, index) {
    return this.p48(this.f48(descriptor, index));
  };
  protoOf(TaggedDecoder).g3y = function (descriptor, index) {
    return this.q48(this.f48(descriptor, index));
  };
  protoOf(TaggedDecoder).h3y = function (descriptor, index) {
    return this.r48(this.f48(descriptor, index));
  };
  protoOf(TaggedDecoder).i3y = function (descriptor, index) {
    return this.s48(this.f48(descriptor, index));
  };
  protoOf(TaggedDecoder).j3y = function (descriptor, index) {
    return this.t48(this.f48(descriptor, index));
  };
  protoOf(TaggedDecoder).k3y = function (descriptor, index) {
    return this.u48(this.f48(descriptor, index));
  };
  protoOf(TaggedDecoder).l3y = function (descriptor, index) {
    return this.v48(this.f48(descriptor, index));
  };
  protoOf(TaggedDecoder).m3y = function (descriptor, index) {
    return this.w48(this.f48(descriptor, index));
  };
  protoOf(TaggedDecoder).n3y = function (descriptor, index) {
    return this.x48(this.f48(descriptor, index));
  };
  protoOf(TaggedDecoder).o3y = function (descriptor, index) {
    return this.y48(this.f48(descriptor, index), descriptor.s3w(index));
  };
  protoOf(TaggedDecoder).p3y = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.f48(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).r3y = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.f48(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).k48 = function () {
    return lastOrNull(this.i48_1);
  };
  protoOf(TaggedDecoder).z48 = function (name) {
    this.i48_1.y(name);
  };
  protoOf(TaggedDecoder).a49 = function () {
    var r = this.i48_1.w2(get_lastIndex_0(this.i48_1));
    this.j48_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.b49_1 = key;
    this.c49_1 = value;
  }
  protoOf(MapEntry).g2 = function () {
    return this.b49_1;
  };
  protoOf(MapEntry).h2 = function () {
    return this.c49_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.b49_1) + ', value=' + toString_0(this.c49_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.b49_1 == null ? 0 : hashCode(this.b49_1);
    result = imul(result, 31) + (this.c49_1 == null ? 0 : hashCode(this.c49_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.b49_1, other.b49_1))
      return false;
    if (!equals(this.c49_1, other.c49_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.s3v('key', $keySerializer.i3v());
      $this$buildSerialDescriptor.s3v('value', $valueSerializer.i3v());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.f49_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).i3v = function () {
    return this.f49_1;
  };
  protoOf(MapEntrySerializer_0).g49 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.s3v('first', $keySerializer.i3v());
      $this$buildClassSerialDescriptor.s3v('second', $valueSerializer.i3v());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.l49_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).i3v = function () {
    return this.l49_1;
  };
  protoOf(PairSerializer_0).g49 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.q3y($this.p49_1, 0, $this.m49_1);
    var b = composite.q3y($this.p49_1, 1, $this.n49_1);
    var c = composite.q3y($this.p49_1, 2, $this.o49_1);
    composite.e3y($this.p49_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.u3y($this.p49_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.q3y($this.p49_1, 0, $this.m49_1);
          break;
        case 1:
          b = composite.q3y($this.p49_1, 1, $this.n49_1);
          break;
        case 2:
          c = composite.q3y($this.p49_1, 2, $this.o49_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.e3y($this.p49_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.s3v('first', this$0.m49_1.i3v());
      $this$buildClassSerialDescriptor.s3v('second', this$0.n49_1.i3v());
      $this$buildClassSerialDescriptor.s3v('third', this$0.o49_1.i3v());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.m49_1 = aSerializer;
    this.n49_1 = bSerializer;
    this.o49_1 = cSerializer;
    var tmp = this;
    tmp.p49_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).i3v = function () {
    return this.p49_1;
  };
  protoOf(TripleSerializer_0).j3v = function (decoder) {
    var composite = decoder.d3y(this.p49_1);
    if (composite.t3y()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.h49_1 = keySerializer;
    this.i49_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).j3v = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.i3v();
    var composite = decoder.d3y(descriptor);
    var tmp$ret$0;
    $l$block: {
      if (composite.t3y()) {
        var key = composite.q3y(this.i3v(), 0, this.h49_1);
        var value = composite.q3y(this.i3v(), 1, this.i49_1);
        tmp$ret$0 = this.g49(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.u3y(this.i3v());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.q3y(this.i3v(), 0, this.h49_1);
            break;
          case 1:
            value_0 = composite.q3y(this.i3v(), 1, this.i49_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.g49(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.e3y(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.q49_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_5(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).i3v = function () {
    return this.q49_1;
  };
  protoOf(UIntSerializer).r49 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.a3y(this.q49_1).u3x();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).j3v = function (decoder) {
    return new UInt(this.r49(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.s49_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_3()));
  }
  protoOf(ULongSerializer).i3v = function () {
    return this.s49_1;
  };
  protoOf(ULongSerializer).t49 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.a3y(this.s49_1).v3x();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).j3v = function (decoder) {
    return new ULong(this.t49(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.u49_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_7(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).i3v = function () {
    return this.u49_1;
  };
  protoOf(UByteSerializer).v49 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.a3y(this.u49_1).s3x();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).j3v = function (decoder) {
    return new UByte(this.v49(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.w49_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).i3v = function () {
    return this.w49_1;
  };
  protoOf(UShortSerializer).x49 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.a3y(this.w49_1).t3x();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).j3v = function (decoder) {
    return new UShort(this.x49(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).c3w = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.d3w(kClass, typeArgumentsSerializers) : $super.d3w.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.z49_1 = class2ContextualFactory;
    this.a4a_1 = polyBase2Serializers;
    this.b4a_1 = polyBase2DefaultSerializerProvider;
    this.c4a_1 = polyBase2NamedSerializers;
    this.d4a_1 = polyBase2DefaultDeserializerProvider;
    this.e4a_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).b3w = function () {
    return this.e4a_1;
  };
  protoOf(SerialModuleImpl).w3y = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.c4a_1.k2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).k2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.d4a_1.k2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).d3w = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.z49_1.k2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f4a(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).y49 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.z49_1.n2().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.g2();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.h2();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.i4a_1;
        collector.j4a(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.h4a(kclass, serial.g4a_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.a4a_1.n2().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.g2();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.h2();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.n2().t();
      while (_iterator__ex2g4s_1.u()) {
        var element_1 = _iterator__ex2g4s_1.v();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.g2();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.h2();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$11 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.k4a(tmp_1, tmp_2, tmp$ret$11);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.b4a_1.n2().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.g2();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.h2();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.l4a(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.d4a_1.n2().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.g2();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.h2();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.m4a(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.n4a_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.n4a_1.equals(tmp0_other_with_cast.n4a_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.n4a_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.n4a_1) + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterfaceHack(_this__u8e3s4);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().gb(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().jb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().eb(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().ob(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().db(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().nb(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_3())), to(get_longArrayClass(), LongArraySerializer()), to(getKClass(ULong), serializer_2(Companion_getInstance_4())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().bb(), serializer_5(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().mb(), IntArraySerializer()), to(getKClass(UInt), serializer_1(Companion_getInstance_5())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().ab(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().lb(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_6())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().za(), serializer_7(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().kb(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_7())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().ya(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().ib(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().xa(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().xa())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().xa()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().fb());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.a44(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function createCache$1($factory) {
    this.o4a_1 = $factory;
  }
  protoOf(createCache$1).e3w = function (key) {
    return this.o4a_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.p4a_1 = $factory;
  }
  protoOf(createParametrizedCache$1).f3w = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.p4a_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).g3w = get_isNullable;
  protoOf(SerialDescriptorImpl).m3w = get_isInline;
  protoOf(AbstractDecoder).q3y = decodeSerializableElement$default;
  protoOf(AbstractDecoder).c3y = decodeSerializableValue;
  protoOf(AbstractDecoder).t3y = decodeSequentially;
  protoOf(AbstractDecoder).v3y = decodeCollectionSize;
  protoOf(ListLikeDescriptor).g3w = get_isNullable;
  protoOf(ListLikeDescriptor).m3w = get_isInline;
  protoOf(ListLikeDescriptor).o3w = get_annotations;
  protoOf(MapLikeDescriptor).g3w = get_isNullable;
  protoOf(MapLikeDescriptor).m3w = get_isInline;
  protoOf(MapLikeDescriptor).o3w = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).g3w = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).m3w = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).s43 = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).g3w = get_isNullable;
  protoOf(NothingSerialDescriptor).m3w = get_isInline;
  protoOf(NothingSerialDescriptor).o3w = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).g3w = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).m3w = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).o3w = get_annotations;
  protoOf(TaggedDecoder).q3y = decodeSerializableElement$default;
  protoOf(TaggedDecoder).c3y = decodeSerializableValue;
  protoOf(TaggedDecoder).t3y = decodeSequentially;
  protoOf(TaggedDecoder).v3y = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SerializationException_init_$Init$_0;
  _.$_$.b = UnknownFieldException_init_$Create$;
  _.$_$.c = SEALED_getInstance;
  _.$_$.d = STRING_getInstance;
  _.$_$.e = CONTEXTUAL_getInstance;
  _.$_$.f = ENUM_getInstance;
  _.$_$.g = CLASS_getInstance;
  _.$_$.h = LIST_getInstance;
  _.$_$.i = MAP_getInstance;
  _.$_$.j = StringSerializer_getInstance;
  _.$_$.k = ListSerializer;
  _.$_$.l = MapSerializer;
  _.$_$.m = get_nullable;
  _.$_$.n = serializer_0;
  _.$_$.o = serializer_4;
  _.$_$.p = serializer_1;
  _.$_$.q = serializer_3;
  _.$_$.r = serializer_2;
  _.$_$.s = PolymorphicKind;
  _.$_$.t = PrimitiveKind;
  _.$_$.u = PrimitiveSerialDescriptor;
  _.$_$.v = get_annotations;
  _.$_$.w = get_isInline;
  _.$_$.x = get_isNullable;
  _.$_$.y = SerialDescriptor;
  _.$_$.z = ENUM;
  _.$_$.a1 = buildSerialDescriptor;
  _.$_$.b1 = getContextualDescriptor;
  _.$_$.c1 = AbstractDecoder;
  _.$_$.d1 = CompositeDecoder;
  _.$_$.e1 = Decoder;
  _.$_$.f1 = AbstractPolymorphicSerializer;
  _.$_$.g1 = ArrayListSerializer;
  _.$_$.h1 = ElementMarker;
  _.$_$.i1 = typeParametersSerializers;
  _.$_$.j1 = GeneratedSerializer;
  _.$_$.k1 = InlinePrimitiveDescriptor;
  _.$_$.l1 = NamedValueDecoder;
  _.$_$.m1 = PluginGeneratedSerialDescriptor;
  _.$_$.n1 = SerializerFactory;
  _.$_$.o1 = jsonCachedSerialNames;
  _.$_$.p1 = missingFieldExceptionWithNewMessage;
  _.$_$.q1 = throwMissingFieldException;
  _.$_$.r1 = EmptySerializersModule_0;
  _.$_$.s1 = contextual;
  _.$_$.t1 = SerializersModuleCollector;
  _.$_$.u1 = DeserializationStrategy;
  _.$_$.v1 = KSerializer;
  _.$_$.w1 = MissingFieldException;
  _.$_$.x1 = SerializationException;
  _.$_$.y1 = findPolymorphicSerializer;
  _.$_$.z1 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
