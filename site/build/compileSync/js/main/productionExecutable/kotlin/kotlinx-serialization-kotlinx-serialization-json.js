(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var protoOf = kotlin_kotlin.$_$.ob;
  var initMetadataForObject = kotlin_kotlin.$_$.ua;
  var VOID = kotlin_kotlin.$_$.d;
  var initMetadataForClass = kotlin_kotlin.$_$.pa;
  var toString = kotlin_kotlin.$_$.qb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var Unit_instance = kotlin_kotlin.$_$.g4;
  var charSequenceLength = kotlin_kotlin.$_$.da;
  var charSequenceGet = kotlin_kotlin.$_$.ca;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c2;
  var equals = kotlin_kotlin.$_$.ia;
  var toString_0 = kotlin_kotlin.$_$.hg;
  var Enum = kotlin_kotlin.$_$.we;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var initMetadataForInterface = kotlin_kotlin.$_$.sa;
  var initMetadataForCompanion = kotlin_kotlin.$_$.qa;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var hashCode = kotlin_kotlin.$_$.oa;
  var joinToString = kotlin_kotlin.$_$.o6;
  var THROW_CCE = kotlin_kotlin.$_$.ff;
  var KtMap = kotlin_kotlin.$_$.x4;
  var getKClassFromExpression = kotlin_kotlin.$_$.bc;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var getBooleanHashCode = kotlin_kotlin.$_$.ja;
  var getStringHashCode = kotlin_kotlin.$_$.na;
  var KtList = kotlin_kotlin.$_$.v4;
  var toDouble = kotlin_kotlin.$_$.ae;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.u3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var isInterface = kotlin_kotlin.$_$.db;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var KProperty1 = kotlin_kotlin.$_$.hc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ma;
  var lazy = kotlin_kotlin.$_$.bg;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var captureStack = kotlin_kotlin.$_$.y9;
  var charSequenceSubSequence = kotlin_kotlin.$_$.ea;
  var coerceAtLeast = kotlin_kotlin.$_$.tb;
  var coerceAtMost = kotlin_kotlin.$_$.ub;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var Collection = kotlin_kotlin.$_$.q4;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var singleOrNull = kotlin_kotlin.$_$.o7;
  var emptyMap = kotlin_kotlin.$_$.d6;
  var getValue = kotlin_kotlin.$_$.k6;
  var copyOf = kotlin_kotlin.$_$.x5;
  var arrayCopy = kotlin_kotlin.$_$.g5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.ue;
  var invoke = kotlin_kotlin.$_$.xf;
  var CoroutineImpl = kotlin_kotlin.$_$.t8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.ve;
  var Unit = kotlin_kotlin.$_$.pf;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e8;
  var initMetadataForLambda = kotlin_kotlin.$_$.ta;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ra;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var getKClass = kotlin_kotlin.$_$.cc;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var ensureNotNull = kotlin_kotlin.$_$.wf;
  var substringBefore = kotlin_kotlin.$_$.wd;
  var removeSuffix = kotlin_kotlin.$_$.ld;
  var substringAfter = kotlin_kotlin.$_$.ud;
  var contains = kotlin_kotlin.$_$.rc;
  var plus = kotlin_kotlin.$_$.dg;
  var missingFieldExceptionWithNewMessage = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var convertToByte = kotlin_kotlin.$_$.e9;
  var fromInt = kotlin_kotlin.$_$.i9;
  var equalsLong = kotlin_kotlin.$_$.h9;
  var convertToShort = kotlin_kotlin.$_$.g9;
  var convertToInt = kotlin_kotlin.$_$.f9;
  var IllegalArgumentException = kotlin_kotlin.$_$.ze;
  var isFinite = kotlin_kotlin.$_$.zf;
  var isFinite_0 = kotlin_kotlin.$_$.yf;
  var charCodeAt = kotlin_kotlin.$_$.ba;
  var toUInt = kotlin_kotlin.$_$.fe;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.s2;
  var toULong = kotlin_kotlin.$_$.ge;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.z2;
  var toUByte = kotlin_kotlin.$_$.ee;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.l2;
  var toUShort = kotlin_kotlin.$_$.he;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.g3;
  var Companion_getInstance = kotlin_kotlin.$_$.d4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.e4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.c4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.f4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var setOf = kotlin_kotlin.$_$.n7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.e2;
  var numberToChar = kotlin_kotlin.$_$.kb;
  var equals_0 = kotlin_kotlin.$_$.yc;
  var toString_1 = kotlin_kotlin.$_$.f2;
  var toByte = kotlin_kotlin.$_$.pb;
  var startsWith = kotlin_kotlin.$_$.rd;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var numberRangeToNumber = kotlin_kotlin.$_$.jb;
  var ClosedRange = kotlin_kotlin.$_$.sb;
  var contains_0 = kotlin_kotlin.$_$.wb;
  var single = kotlin_kotlin.$_$.od;
  var Char = kotlin_kotlin.$_$.se;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var emptySet = kotlin_kotlin.$_$.e6;
  var plus_0 = kotlin_kotlin.$_$.g7;
  var toInt = kotlin_kotlin.$_$.ce;
  var toList = kotlin_kotlin.$_$.u7;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var toNumber = kotlin_kotlin.$_$.t9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.cg;
  var last = kotlin_kotlin.$_$.u6;
  var removeLast = kotlin_kotlin.$_$.m7;
  var lastIndexOf = kotlin_kotlin.$_$.jd;
  var Long = kotlin_kotlin.$_$.bf;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.d2;
  var multiply = kotlin_kotlin.$_$.m9;
  var add = kotlin_kotlin.$_$.z8;
  var subtract = kotlin_kotlin.$_$.s9;
  var compare = kotlin_kotlin.$_$.d9;
  var numberToLong = kotlin_kotlin.$_$.o9;
  var negate = kotlin_kotlin.$_$.n9;
  var charArray = kotlin_kotlin.$_$.aa;
  var indexOf = kotlin_kotlin.$_$.ad;
  var indexOf_0 = kotlin_kotlin.$_$.bd;
  var substring = kotlin_kotlin.$_$.yd;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [JsonElement, KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
  initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
  initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.q4a_1 = configuration;
    this.r4a_1 = serializersModule;
    this.s4a_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).s3y = function () {
    return this.r4a_1;
  };
  protoOf(Json).t4a = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.i3v(), null);
    var result = input.c3y(deserializer);
    lexer.g4b();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.z4b();
    return new JsonImpl(conf, builder.y4b_1);
  }
  function JsonBuilder(json) {
    this.h4b_1 = json.q4a_1.a4c_1;
    this.i4b_1 = json.q4a_1.f4c_1;
    this.j4b_1 = json.q4a_1.b4c_1;
    this.k4b_1 = json.q4a_1.c4c_1;
    this.l4b_1 = json.q4a_1.e4c_1;
    this.m4b_1 = json.q4a_1.g4c_1;
    this.n4b_1 = json.q4a_1.h4c_1;
    this.o4b_1 = json.q4a_1.j4c_1;
    this.p4b_1 = json.q4a_1.q4c_1;
    this.q4b_1 = json.q4a_1.l4c_1;
    this.r4b_1 = json.q4a_1.m4c_1;
    this.s4b_1 = json.q4a_1.n4c_1;
    this.t4b_1 = json.q4a_1.o4c_1;
    this.u4b_1 = json.q4a_1.p4c_1;
    this.v4b_1 = json.q4a_1.k4c_1;
    this.w4b_1 = json.q4a_1.d4c_1;
    this.x4b_1 = json.q4a_1.i4c_1;
    this.y4b_1 = json.s3y();
  }
  protoOf(JsonBuilder).z4b = function () {
    if (this.x4b_1) {
      // Inline function 'kotlin.require' call
      if (!(this.o4b_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.p4b_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.l4b_1) {
      // Inline function 'kotlin.require' call
      if (!(this.m4b_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.m4b_1 === '    ')) {
      var tmp0 = this.m4b_1;
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$7 = false;
            break $l$block;
          }
        }
        tmp$ret$7 = true;
      }
      var allWhitespaces = tmp$ret$7;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.m4b_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.h4b_1, this.j4b_1, this.k4b_1, this.w4b_1, this.l4b_1, this.i4b_1, this.m4b_1, this.n4b_1, this.x4b_1, this.o4b_1, this.v4b_1, this.q4b_1, this.r4b_1, this.s4b_1, this.t4b_1, this.u4b_1, this.p4b_1);
  };
  function validateConfiguration($this) {
    if (equals($this.s3y(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.q4a_1);
    $this.s3y().y49(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonIgnoreUnknownKeys() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    this.a4c_1 = encodeDefaults;
    this.b4c_1 = ignoreUnknownKeys;
    this.c4c_1 = isLenient;
    this.d4c_1 = allowStructuredMapKeys;
    this.e4c_1 = prettyPrint;
    this.f4c_1 = explicitNulls;
    this.g4c_1 = prettyPrintIndent;
    this.h4c_1 = coerceInputValues;
    this.i4c_1 = useArrayPolymorphism;
    this.j4c_1 = classDiscriminator;
    this.k4c_1 = allowSpecialFloatingPointValues;
    this.l4c_1 = useAlternativeNames;
    this.m4c_1 = namingStrategy;
    this.n4c_1 = decodeEnumsCaseInsensitive;
    this.o4c_1 = allowTrailingComma;
    this.p4c_1 = allowComments;
    this.q4c_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.a4c_1 + ', ignoreUnknownKeys=' + this.b4c_1 + ', isLenient=' + this.c4c_1 + ', ' + ('allowStructuredMapKeys=' + this.d4c_1 + ', prettyPrint=' + this.e4c_1 + ', explicitNulls=' + this.f4c_1 + ', ') + ("prettyPrintIndent='" + this.g4c_1 + "', coerceInputValues=" + this.h4c_1 + ', useArrayPolymorphism=' + this.i4c_1 + ', ') + ("classDiscriminator='" + this.j4c_1 + "', allowSpecialFloatingPointValues=" + this.k4c_1 + ', ') + ('useAlternativeNames=' + this.l4c_1 + ', namingStrategy=' + toString_0(this.m4c_1) + ', decodeEnumsCaseInsensitive=' + this.n4c_1 + ', ') + ('allowTrailingComma=' + this.o4c_1 + ', allowComments=' + this.p4c_1 + ', classDiscriminatorMode=' + this.q4c_1.toString() + ')');
  };
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function JsonDecoder() {
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_3() {
    return Companion_instance;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.g2();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.h2();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.s(_Char___init__impl__6a9atx(58));
    this_0.w(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.t4c_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.t4c_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.t4c_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.t4c_1.n2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).r = function () {
    return this.t4c_1.r();
  };
  protoOf(JsonObject).u4c = function (key) {
    return this.t4c_1.i2(key);
  };
  protoOf(JsonObject).i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.u4c((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).v4c = function (value) {
    return this.t4c_1.j2(value);
  };
  protoOf(JsonObject).j2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.v4c(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).bd = function (key) {
    return this.t4c_1.k2(key);
  };
  protoOf(JsonObject).k2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.bd((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).a1 = function () {
    return this.t4c_1.a1();
  };
  protoOf(JsonObject).l2 = function () {
    return this.t4c_1.l2();
  };
  protoOf(JsonObject).m2 = function () {
    return this.t4c_1.m2();
  };
  protoOf(JsonObject).n2 = function () {
    return this.t4c_1.n2();
  };
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.w4c();
  };
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.w4c();
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.x4c_1 = 'null';
  }
  protoOf(JsonNull).w4c = function () {
    return this.x4c_1;
  };
  protoOf(JsonNull).y4c = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).a44 = function (typeParamsSerializers) {
    return this.y4c();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.z4c_1 = isString;
    this.a4d_1 = coerceToInlineType;
    this.b4d_1 = toString(body);
    if (!(this.a4d_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.a4d_1.m3w()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).w4c = function () {
    return this.b4d_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.z4c_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.b4d_1);
      tmp = this_0.toString();
    } else {
      tmp = this.b4d_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.z4c_1 === other.z4c_1))
      return false;
    if (!(this.b4d_1 === other.b4d_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.z4c_1);
    result = imul(31, result) + getStringHashCode(this.b4d_1) | 0;
    return result;
  };
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.c4d_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.c4d_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.c4d_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.c4d_1, ',', '[', ']');
  };
  protoOf(JsonArray).r = function () {
    return this.c4d_1.r();
  };
  protoOf(JsonArray).d4d = function (element) {
    return this.c4d_1.g1(element);
  };
  protoOf(JsonArray).g1 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.d4d(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).t = function () {
    return this.c4d_1.t();
  };
  protoOf(JsonArray).z = function (index) {
    return this.c4d_1.z(index);
  };
  protoOf(JsonArray).e4d = function (element) {
    return this.c4d_1.h1(element);
  };
  protoOf(JsonArray).h1 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.e4d(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).f1 = function (index) {
    return this.c4d_1.f1(index);
  };
  protoOf(JsonArray).a1 = function () {
    return this.c4d_1.a1();
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.w4c());
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return (new StringJsonLexer(_this__u8e3s4.w4c())).f4d();
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.w4c();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.w4c());
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.s3v('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.s3v('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.s3v('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.s3v('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.s3v('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().g4d_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().h4d_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().i4d_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().j4d_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().k4d_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.l4d_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).i3v = function () {
    return this.l4d_1;
  };
  protoOf(JsonElementSerializer).j3v = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.s4c();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.m4d_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).i3v();
    this.n4d_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).k3w = function () {
    return this.n4d_1;
  };
  protoOf(JsonObjectDescriptor).p3w = function (index) {
    return this.m4d_1.p3w(index);
  };
  protoOf(JsonObjectDescriptor).q3w = function (name) {
    return this.m4d_1.q3w(name);
  };
  protoOf(JsonObjectDescriptor).r3w = function (index) {
    return this.m4d_1.r3w(index);
  };
  protoOf(JsonObjectDescriptor).s3w = function (index) {
    return this.m4d_1.s3w(index);
  };
  protoOf(JsonObjectDescriptor).t3w = function (index) {
    return this.m4d_1.t3w(index);
  };
  protoOf(JsonObjectDescriptor).l3w = function () {
    return this.m4d_1.l3w();
  };
  protoOf(JsonObjectDescriptor).g3w = function () {
    return this.m4d_1.g3w();
  };
  protoOf(JsonObjectDescriptor).m3w = function () {
    return this.m4d_1.m3w();
  };
  protoOf(JsonObjectDescriptor).n3w = function () {
    return this.m4d_1.n3w();
  };
  protoOf(JsonObjectDescriptor).o3w = function () {
    return this.m4d_1.o3w();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.j4d_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).i3v = function () {
    return this.j4d_1;
  };
  protoOf(JsonObjectSerializer).j3v = function (decoder) {
    verify(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).j3v(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.g4d_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).i3v = function () {
    return this.g4d_1;
  };
  protoOf(JsonPrimitiveSerializer).j3v = function (decoder) {
    var result = asJsonDecoder(decoder).s4c();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result)), toString(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.h4d_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).i3v = function () {
    return this.h4d_1;
  };
  protoOf(JsonNullSerializer).j3v = function (decoder) {
    verify(decoder);
    if (decoder.p3x()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.q3x();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.o4d_1 = ListSerializer(JsonElementSerializer_getInstance()).i3v();
    this.p4d_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).k3w = function () {
    return this.p4d_1;
  };
  protoOf(JsonArrayDescriptor).p3w = function (index) {
    return this.o4d_1.p3w(index);
  };
  protoOf(JsonArrayDescriptor).q3w = function (name) {
    return this.o4d_1.q3w(name);
  };
  protoOf(JsonArrayDescriptor).r3w = function (index) {
    return this.o4d_1.r3w(index);
  };
  protoOf(JsonArrayDescriptor).s3w = function (index) {
    return this.o4d_1.s3w(index);
  };
  protoOf(JsonArrayDescriptor).t3w = function (index) {
    return this.o4d_1.t3w(index);
  };
  protoOf(JsonArrayDescriptor).l3w = function () {
    return this.o4d_1.l3w();
  };
  protoOf(JsonArrayDescriptor).g3w = function () {
    return this.o4d_1.g3w();
  };
  protoOf(JsonArrayDescriptor).m3w = function () {
    return this.o4d_1.m3w();
  };
  protoOf(JsonArrayDescriptor).n3w = function () {
    return this.o4d_1.n3w();
  };
  protoOf(JsonArrayDescriptor).o3w = function () {
    return this.o4d_1.o3w();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.k4d_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).i3v = function () {
    return this.k4d_1;
  };
  protoOf(JsonArraySerializer).j3v = function (decoder) {
    verify(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).j3v(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.i4d_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).i3v = function () {
    return this.i4d_1;
  };
  protoOf(JsonLiteralSerializer).j3v = function (decoder) {
    var result = asJsonDecoder(decoder).s4c();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result)), toString(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify(decoder) {
    asJsonDecoder(decoder);
  }
  function _get_original__l7ku1m($this) {
    var tmp0 = $this.q4d_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
    return tmp0.h2();
  }
  function defer$o$_get_original_$ref_3cje7k() {
    return function (p0) {
      return _get_original__l7ku1m(p0);
    };
  }
  function defer$1($deferred) {
    this.q4d_1 = lazy($deferred);
  }
  protoOf(defer$1).k3w = function () {
    return _get_original__l7ku1m(this).k3w();
  };
  protoOf(defer$1).l3w = function () {
    return _get_original__l7ku1m(this).l3w();
  };
  protoOf(defer$1).n3w = function () {
    return _get_original__l7ku1m(this).n3w();
  };
  protoOf(defer$1).p3w = function (index) {
    return _get_original__l7ku1m(this).p3w(index);
  };
  protoOf(defer$1).q3w = function (name) {
    return _get_original__l7ku1m(this).q3w(name);
  };
  protoOf(defer$1).r3w = function (index) {
    return _get_original__l7ku1m(this).r3w(index);
  };
  protoOf(defer$1).s3w = function (index) {
    return _get_original__l7ku1m(this).s3w(index);
  };
  protoOf(defer$1).t3w = function (index) {
    return _get_original__l7ku1m(this).t3w(index);
  };
  function readIfAbsent($this, descriptor, index) {
    $this.s4d_1 = (!descriptor.t3w(index) && descriptor.s3w(index).g3w());
    return $this.s4d_1;
  }
  function JsonElementMarker$readIfAbsent$ref(p0) {
    var l = function (_this__u8e3s4, p0_0) {
      var tmp0 = p0;
      return readIfAbsent(tmp0, _this__u8e3s4, p0_0);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.r4d_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.s4d_1 = false;
  }
  protoOf(JsonElementMarker).t4d = function (index) {
    this.r4d_1.n42(index);
  };
  protoOf(JsonElementMarker).u4d = function () {
    return this.r4d_1.o42();
  };
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
  }
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.v4d('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.c4b_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.w4d('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.k3w() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.l3w().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp2 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output)));
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  var JsonSerializationNamesKey;
  function ignoreUnknownKeys(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp;
    if (json.q4a_1.b4c_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.o3w();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.r();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonIgnoreUnknownKeys) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.q3w(name);
    if (!(index === -3))
      return index;
    if (!json.q4a_1.l4c_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.l3w(), CLASS_getInstance()) ? json.q4a_1.m4c_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.y4d(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.q4a_1.n4c_1 && equals(descriptor.l3w(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).k2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.n3w();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.r3w(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonNames) {
            destination.y(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z4d_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp1_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp1_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.p3w(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.a4e(_this__u8e3s4, i, _this__u8e3s4.p3w(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.r()) {
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.l3w(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).i2(name)) {
      throw new JsonDecodingException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.p3w(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.p3w(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.o2(name, index);
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.d4e_1, 2);
    $this.b4e_1 = copyOf($this.b4e_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.c4e_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.c4e_1 = newIndices;
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.b4e_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.c4e_1 = tmp_2;
    this.d4e_1 = -1;
  }
  protoOf(JsonPath).e4e = function (sd) {
    this.d4e_1 = this.d4e_1 + 1 | 0;
    var depth = this.d4e_1;
    if (depth === this.b4e_1.length) {
      resize(this);
    }
    this.b4e_1[depth] = sd;
  };
  protoOf(JsonPath).f4e = function (index) {
    this.c4e_1[this.d4e_1] = index;
  };
  protoOf(JsonPath).g4e = function (key) {
    var tmp;
    if (!(this.c4e_1[this.d4e_1] === -2)) {
      this.d4e_1 = this.d4e_1 + 1 | 0;
      tmp = this.d4e_1 === this.b4e_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.b4e_1[this.d4e_1] = key;
    this.c4e_1[this.d4e_1] = -2;
  };
  protoOf(JsonPath).h4e = function () {
    if (this.c4e_1[this.d4e_1] === -2) {
      this.b4e_1[this.d4e_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).i4e = function () {
    var depth = this.d4e_1;
    if (this.c4e_1[depth] === -2) {
      this.c4e_1[depth] = -1;
      this.d4e_1 = this.d4e_1 - 1 | 0;
    }
    if (!(this.d4e_1 === -1)) {
      this.d4e_1 = this.d4e_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).j4e = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('$');
    // Inline function 'kotlin.repeat' call
    var times = this.d4e_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.b4e_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.l3w(), LIST_getInstance())) {
            if (!(this.c4e_1[index] === -1)) {
              this_0.q('[');
              this_0.rb(this.c4e_1[index]);
              this_0.q(']');
            }
          } else {
            var idx = this.c4e_1[index];
            if (idx >= 0) {
              this_0.q('.');
              this_0.q(element.p3w(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.q('[');
            this_0.q("'");
            this_0.w(element);
            this_0.q("'");
            this_0.q(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.j4e();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.l3w();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.k4e_1)
      return Unit_instance;
    if (!$this.l4e_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function JsonSerializersModuleValidator(configuration) {
    this.k4e_1 = configuration.i4c_1;
    this.l4e_1 = !configuration.q4c_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).h4a = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).k4a = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.i3v();
    checkKind(this, descriptor, actualClass);
  };
  protoOf(JsonSerializersModuleValidator).l4a = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).m4a = function (baseClass, defaultDeserializerProvider) {
  };
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.m4e_1.q4e(6);
    if ($this.m4e_1.r4e() === 4) {
      $this.m4e_1.w4d('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.m4e_1.s4e()) {
      var key = $this.n4e_1 ? $this.m4e_1.u4e() : $this.m4e_1.t4e();
      $this.m4e_1.q4e(5);
      var element = $this.v4e();
      // Inline function 'kotlin.collections.set' call
      result.o2(key, element);
      lastToken = $this.m4e_1.w4e();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.m4e_1.w4d('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.m4e_1.q4e(7);
    } else if (lastToken === 4) {
      if (!$this.o4e_1) {
        invalidTrailingComma($this.m4e_1);
      }
      $this.m4e_1.q4e(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, _this__u8e3s4, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, _this__u8e3s4, $completion);
    tmp.z8_1 = Unit_instance;
    tmp.a9_1 = null;
    return tmp.f9();
  }
  function readArray($this) {
    var lastToken = $this.m4e_1.w4e();
    if ($this.m4e_1.r4e() === 4) {
      $this.m4e_1.w4d('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.m4e_1.s4e()) {
      var element = $this.v4e();
      result.y(element);
      lastToken = $this.m4e_1.w4e();
      if (!(lastToken === 4)) {
        var tmp0 = $this.m4e_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.c4b_1;
        if (!condition) {
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.w4d(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.m4e_1.q4e(9);
    } else if (lastToken === 4) {
      if (!$this.o4e_1) {
        invalidTrailingComma($this.m4e_1, 'array');
      }
      $this.m4e_1.q4e(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.n4e_1 || !isString) {
      tmp = $this.m4e_1.u4e();
    } else {
      tmp = $this.m4e_1.t4e();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.t4f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).x4f = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.y4f($this$DeepRecursiveFunction, it, $completion);
    tmp.z8_1 = Unit_instance;
    tmp.a9_1 = null;
    return tmp.f9();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).s9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.x4f(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).f9 = function () {
    var suspendResult = this.z8_1;
    $sm: do
      try {
        var tmp = this.x8_1;
        switch (tmp) {
          case 0:
            this.y8_1 = 3;
            var tmp0_subject = this.t4f_1.m4e_1.r4e();
            if (tmp0_subject === 1) {
              this.w4f_1 = readValue(this.t4f_1, true);
              this.x8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.w4f_1 = readValue(this.t4f_1, false);
                this.x8_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.x8_1 = 1;
                  suspendResult = readObject_0(this.t4f_1, this.u4f_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    this.w4f_1 = readArray(this.t4f_1);
                    this.x8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.t4f_1.m4e_1.w4d("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.w4f_1 = suspendResult;
            this.x8_1 = 2;
            continue $sm;
          case 2:
            return this.w4f_1;
          case 3:
            throw this.a9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.y8_1 === 3) {
          throw e;
        } else {
          this.x8_1 = this.y8_1;
          this.a9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).y4f = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.t4f_1, completion);
    i.u4f_1 = $this$DeepRecursiveFunction;
    i.v4f_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.x4f($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f4f_1 = _this__u8e3s4;
    this.g4f_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).f9 = function () {
    var suspendResult = this.z8_1;
    $sm: do
      try {
        var tmp = this.x8_1;
        switch (tmp) {
          case 0:
            this.y8_1 = 5;
            this.i4f_1 = this.f4f_1;
            this.j4f_1 = this.i4f_1.m4e_1.q4e(6);
            if (this.i4f_1.m4e_1.r4e() === 4) {
              this.i4f_1.m4e_1.w4d('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.h4f_1 = LinkedHashMap_init_$Create$();
            this.x8_1 = 1;
            continue $sm;
          case 1:
            if (!this.i4f_1.m4e_1.s4e()) {
              this.x8_1 = 4;
              continue $sm;
            }

            this.k4f_1 = this.i4f_1.n4e_1 ? this.i4f_1.m4e_1.u4e() : this.i4f_1.m4e_1.t4e();
            this.i4f_1.m4e_1.q4e(5);
            this.x8_1 = 2;
            suspendResult = this.g4f_1.gk(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.h4f_1;
            var key = this.k4f_1;
            tmp0.o2(key, element);
            this.j4f_1 = this.i4f_1.m4e_1.w4e();
            var tmp0_subject = this.j4f_1;
            if (tmp0_subject === 4) {
              this.x8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.x8_1 = 4;
                continue $sm;
              } else {
                this.i4f_1.m4e_1.w4d('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.x8_1 = 1;
            continue $sm;
          case 4:
            if (this.j4f_1 === 6) {
              this.i4f_1.m4e_1.q4e(7);
            } else if (this.j4f_1 === 4) {
              if (!this.i4f_1.o4e_1) {
                invalidTrailingComma(this.i4f_1.m4e_1);
              }
              this.i4f_1.m4e_1.q4e(7);
            }

            return new JsonObject(this.h4f_1);
          case 5:
            throw this.a9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.y8_1 === 5) {
          throw e;
        } else {
          this.x8_1 = this.y8_1;
          this.a9_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.m4e_1 = lexer;
    this.n4e_1 = configuration.c4c_1;
    this.o4e_1 = configuration.o4c_1;
    this.p4e_1 = 0;
  }
  protoOf(JsonTreeReader).v4e = function () {
    var token = this.m4e_1.r4e();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.p4e_1 = this.p4e_1 + 1 | 0;
      if (this.p4e_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.p4e_1 = this.p4e_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.m4e_1.w4d('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.o3w().t();
    while (_iterator__ex2g4s.u()) {
      var annotation = _iterator__ex2g4s.v();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.z4f_1;
    }
    return json.q4a_1.j4c_1;
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.x4d_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).a4g = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.x4d_1;
    var value_0 = this_0.k2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.o2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.o2(tmp2, value_1);
  };
  protoOf(DescriptorSchemaCache).y4d = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.b4g(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.a4g(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).b4g = function (descriptor, key) {
    var tmp0_safe_receiver = this.x4d_1.k2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.k2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.c4g_1 = discriminatorToSkip;
  }
  function trySkip($this, _this__u8e3s4, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.c4g_1 === unknownKey) {
      _this__u8e3s4.c4g_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.u3y(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.w4a_1.r4e() === 4) {
      $this.w4a_1.w4d('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.y4a_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.y4a_1 === -1)) {
        hasComma = $this.w4a_1.e4g();
      }
    } else {
      $this.w4a_1.d4g(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.w4a_1.s4e()) {
      if (decodingKey) {
        if ($this.y4a_1 === -1) {
          var tmp0 = $this.w4a_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.c4b_1;
          if (!condition) {
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.w4d(tmp$ret$0, position);
          }
        } else {
          var tmp0_0 = $this.w4a_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.c4b_1;
          if (!condition_0) {
            var tmp$ret$2 = 'Expected comma after the key-value pair';
            tmp0_0.w4d(tmp$ret$2, position_0);
          }
        }
      }
      $this.y4a_1 = $this.y4a_1 + 1 | 0;
      tmp = $this.y4a_1;
    } else {
      if (hasComma && !$this.u4a_1.q4a_1.o4c_1) {
        invalidTrailingComma($this.w4a_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.u4a_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.t3w(index);
      var elementDescriptor = descriptor.s3w(index);
      var tmp;
      if (isOptional && !elementDescriptor.g3w()) {
        tmp = $this.w4a_1.f4g(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.l3w(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.g3w()) {
          tmp_0 = $this.w4a_1.f4g(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.w4a_1.g4g($this.a4b_1.c4c_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.q4a_1.f4c_1 && elementDescriptor.g3w();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.w4a_1.t4e();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.w4a_1.e4g();
    while ($this.w4a_1.s4e()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.w4a_1.d4g(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.u4a_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.a4b_1.h4c_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.w4a_1.e4g();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.b4b_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.t4d(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, descriptor, key);
      }
    }
    if (hasComma && !$this.u4a_1.q4a_1.o4c_1) {
      invalidTrailingComma($this.w4a_1);
    }
    var tmp1_safe_receiver = $this.b4b_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.u4d();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.u4a_1) || trySkip($this, $this.z4a_1, key)) {
      $this.w4a_1.i4g($this.a4b_1.c4c_1);
    } else {
      $this.w4a_1.d4b_1.i4e();
      $this.w4a_1.h4g(key);
    }
    return $this.w4a_1.e4g();
  }
  function decodeListIndex($this) {
    var hasComma = $this.w4a_1.e4g();
    var tmp;
    if ($this.w4a_1.s4e()) {
      if (!($this.y4a_1 === -1) && !hasComma) {
        $this.w4a_1.w4d('Expected end of the array or comma');
      }
      $this.y4a_1 = $this.y4a_1 + 1 | 0;
      tmp = $this.y4a_1;
    } else {
      if (hasComma && !$this.u4a_1.q4a_1.o4c_1) {
        invalidTrailingComma($this.w4a_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.a4b_1.c4c_1) {
      tmp = $this.w4a_1.k4g();
    } else {
      tmp = $this.w4a_1.j4g();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.u4a_1 = json;
    this.v4a_1 = mode;
    this.w4a_1 = lexer;
    this.x4a_1 = this.u4a_1.s3y();
    this.y4a_1 = -1;
    this.z4a_1 = discriminatorHolder;
    this.a4b_1 = this.u4a_1.q4a_1;
    this.b4b_1 = this.a4b_1.f4c_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).r4c = function () {
    return this.u4a_1;
  };
  protoOf(StreamingJsonDecoder).s3y = function () {
    return this.x4a_1;
  };
  protoOf(StreamingJsonDecoder).s4c = function () {
    return (new JsonTreeReader(this.u4a_1.q4a_1, this.w4a_1)).v4e();
  };
  protoOf(StreamingJsonDecoder).c3y = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.u4a_1.q4a_1.i4c_1;
      }
      if (tmp) {
        return deserializer.j3v(this);
      }
      var discriminator = classDiscriminator(deserializer.i3v(), this.u4a_1);
      var tmp0_elvis_lhs = this.w4a_1.l4g(discriminator, this.a4b_1.c4c_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.r4c().q4a_1.i4c_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.j3v(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.i3v(), this.r4c());
          var tmp0 = this.s4c();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.i3v().k3w();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).o();
            var tmp_3 = getKClassFromExpression(tmp0).o();
            var tmp$ret$1 = this.w4a_1.d4b_1.j4e();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.bd(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4;
          try {
            tmp_4 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_5;
            if ($p instanceof SerializationException) {
              var it = $p;
              throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_4;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.r4c(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p) {
        var tmp_8;
        if ($p instanceof SerializationException) {
          var it_0 = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.w4a_1.w4d(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.z4a_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.j3v(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains(ensureNotNull(e.message), 'at path'))
          throw e;
        throw missingFieldExceptionWithNewMessage(e, plus(e.message, ' at path: ') + this.w4a_1.d4b_1.j4e());
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).d3y = function (descriptor) {
    var newMode = switchMode(this.u4a_1, descriptor);
    this.w4a_1.d4b_1.e4e(descriptor);
    this.w4a_1.d4g(newMode.o4g_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.z2_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.u4a_1, newMode, this.w4a_1, descriptor, this.z4a_1);
        break;
      default:
        var tmp_0;
        if (this.v4a_1.equals(newMode) && this.u4a_1.q4a_1.f4c_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.u4a_1, newMode, this.w4a_1, descriptor, this.z4a_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).e3y = function (descriptor) {
    if (descriptor.n3w() === 0 && ignoreUnknownKeys(descriptor, this.u4a_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.w4a_1.e4g() && !this.u4a_1.q4a_1.o4c_1) {
      invalidTrailingComma(this.w4a_1, '');
    }
    this.w4a_1.d4g(this.v4a_1.p4g_1);
    this.w4a_1.d4b_1.i4e();
  };
  protoOf(StreamingJsonDecoder).p3x = function () {
    var tmp;
    var tmp0_safe_receiver = this.b4b_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s4d_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.w4a_1.q4g();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).q3x = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).p3y = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.v4a_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.w4a_1.d4b_1.h4e();
    }
    var value = protoOf(AbstractDecoder).p3y.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.w4a_1.d4b_1.g4e(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).u3y = function (descriptor) {
    var index;
    switch (this.v4a_1.z2_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.v4a_1.equals(WriteMode_MAP_getInstance())) {
      this.w4a_1.d4b_1.f4e(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).r3x = function () {
    return this.w4a_1.r4g();
  };
  protoOf(StreamingJsonDecoder).s3x = function () {
    var value = this.w4a_1.s4g();
    if (!equalsLong(value, fromInt(convertToByte(value)))) {
      this.w4a_1.w4d("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  };
  protoOf(StreamingJsonDecoder).t3x = function () {
    var value = this.w4a_1.s4g();
    if (!equalsLong(value, fromInt(convertToShort(value)))) {
      this.w4a_1.w4d("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  };
  protoOf(StreamingJsonDecoder).u3x = function () {
    var value = this.w4a_1.s4g();
    if (!equalsLong(value, fromInt(convertToInt(value)))) {
      this.w4a_1.w4d("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).v3x = function () {
    return this.w4a_1.s4g();
  };
  protoOf(StreamingJsonDecoder).w3x = function () {
    var tmp0 = this.w4a_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4e();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.w4d("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.u4a_1.q4a_1.k4c_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.w4a_1, result);
  };
  protoOf(StreamingJsonDecoder).x3x = function () {
    var tmp0 = this.w4a_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4e();
      try {
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.w4d("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.u4a_1.q4a_1.k4c_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.w4a_1, result);
  };
  protoOf(StreamingJsonDecoder).y3x = function () {
    var string = this.w4a_1.u4e();
    if (!(string.length === 1)) {
      this.w4a_1.w4d("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).z3x = function () {
    var tmp;
    if (this.a4b_1.c4c_1) {
      tmp = this.w4a_1.k4g();
    } else {
      tmp = this.w4a_1.t4e();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).a3y = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.w4a_1, this.u4a_1) : protoOf(AbstractDecoder).a3y.call(this, descriptor);
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.t4g_1 = lexer;
    this.u4g_1 = json.s3y();
  }
  protoOf(JsonDecoderForUnsignedTypes).s3y = function () {
    return this.u4g_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).u3y = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).u3x = function () {
    var tmp0 = this.t4g_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4e();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.w4d("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).v3x = function () {
    var tmp0 = this.t4g_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4e();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.w4d("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).s3x = function () {
    var tmp0 = this.t4g_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4e();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.w4d("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).t3x = function () {
    var tmp0 = this.t4g_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4e();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.w4d("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.m3w() && get_unsignedNumberDescriptors().g1(_this__u8e3s4);
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_0(Companion_getInstance()).i3v(), serializer_1(Companion_getInstance_0()).i3v(), serializer_2(Companion_getInstance_1()).i3v(), serializer_3(Companion_getInstance_2()).i3v()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charCodeAt(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.pb(value, lastPos, i);
          _this__u8e3s4.q(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.pb(value, lastPos, value.length);
    else
      _this__u8e3s4.q(value);
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = Array(93);
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$1);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$12);
      ESCAPE_MARKERS = this_7;
    }
  }
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.i3v())).c3y(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.b4h(tag), toString($this.c4h()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.x4g_1 = json;
    this.y4g_1 = value;
    this.z4g_1 = polymorphicDiscriminator;
    this.a4h_1 = this.r4c().q4a_1;
  }
  protoOf(AbstractJsonTreeDecoder).r4c = function () {
    return this.x4g_1;
  };
  protoOf(AbstractJsonTreeDecoder).h2 = function () {
    return this.y4g_1;
  };
  protoOf(AbstractJsonTreeDecoder).s3y = function () {
    return this.r4c().s3y();
  };
  protoOf(AbstractJsonTreeDecoder).c4h = function () {
    var tmp0_safe_receiver = this.k48();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.d4h(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.h2() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).b4h = function (currentTag) {
    return this.m48() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).s4c = function () {
    return this.c4h();
  };
  protoOf(AbstractJsonTreeDecoder).c3y = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.r4c().q4a_1.i4c_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.j3v(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.i3v(), this.r4c());
      var tmp0 = this.s4c();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.i3v().k3w();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).o();
        var tmp_1 = getKClassFromExpression(tmp0).o();
        var tmp$ret$1 = this.m48();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.bd(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_2;
      try {
        tmp_2 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof SerializationException) {
          var it = $p;
          throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_2;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.r4c(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).l48 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).d3y = function (descriptor) {
    var currentObject = this.c4h();
    var tmp0_subject = descriptor.l3w();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.r4c();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.k3w();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).o();
        var tmp_3 = getKClassFromExpression(currentObject).o();
        var tmp$ret$0 = this.m48();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.r4c();
        var keyDescriptor = carrierDescriptor(descriptor.s3w(0), this_0.s3y());
        var keyKind = keyDescriptor.l3w();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.r4c();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.k3w();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).o();
            var tmp_8 = getKClassFromExpression(currentObject).o();
            var tmp$ret$3 = this.m48();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.q4a_1.d4c_1) {
            var tmp_9 = this.r4c();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.k3w();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).o();
              var tmp_11 = getKClassFromExpression(currentObject).o();
              var tmp$ret$7 = this.m48();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.r4c();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.k3w();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).o();
          var tmp_14 = getKClassFromExpression(currentObject).o();
          var tmp$ret$12 = this.m48();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.z4g_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).e3y = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).p3x = function () {
    var tmp = this.c4h();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).e4h = function (tag) {
    return !(this.d4h(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).o48 = function (tag) {
    return this.e4h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f4h = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.b4h(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).p48 = function (tag) {
    return this.f4h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g4h = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.b4h(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToByte(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$5;
  };
  protoOf(AbstractJsonTreeDecoder).q48 = function (tag) {
    return this.g4h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h4h = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.b4h(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToShort(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$5;
  };
  protoOf(AbstractJsonTreeDecoder).r48 = function (tag) {
    return this.h4h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i4h = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.b4h(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToInt(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$5;
  };
  protoOf(AbstractJsonTreeDecoder).s48 = function (tag) {
    return this.i4h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j4h = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.b4h(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).t48 = function (tag) {
    return this.j4h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k4h = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.b4h(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'float' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.r4c().q4a_1.k4c_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.c4h()));
  };
  protoOf(AbstractJsonTreeDecoder).u48 = function (tag) {
    return this.k4h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).l4h = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.b4h(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'double' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.r4c().q4a_1.k4c_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.c4h()));
  };
  protoOf(AbstractJsonTreeDecoder).v48 = function (tag) {
    return this.l4h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).m4h = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.d4h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.b4h(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.w4c()));
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1.s1_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).w48 = function (tag) {
    return this.m4h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n4h = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.d4h(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).o();
      var tmp_0 = getKClassFromExpression(value).o();
      var tmp$ret$0 = this.b4h(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.b4h(tag), toString(this.c4h()));
    if (!value_0.z4c_1 && !this.r4c().q4a_1.c4c_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.b4h(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.c4h()));
    }
    return value_0.b4d_1;
  };
  protoOf(AbstractJsonTreeDecoder).x48 = function (tag) {
    return this.n4h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).o4h = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.r4c();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.d4h(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.k3w();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).o();
        var tmp_2 = getKClassFromExpression(tmp2).o();
        var tmp$ret$0 = this.b4h(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.w4c());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.r4c());
    } else {
      tmp = protoOf(NamedValueDecoder).y48.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).y48 = function (tag, inlineDescriptor) {
    return this.o4h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).a3y = function (descriptor) {
    return !(this.k48() == null) ? protoOf(NamedValueDecoder).a3y.call(this, descriptor) : (new JsonPrimitiveDecoder(this.r4c(), this.h2(), this.z4g_1)).a3y(descriptor);
  };
  function setForceNull($this, descriptor, index) {
    $this.y4h_1 = (!$this.r4c().q4a_1.f4c_1 && !descriptor.t3w(index) && descriptor.s3w(index).g3w());
    return $this.y4h_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.v4h_1 = value;
    this.w4h_1 = polyDescriptor;
    this.x4h_1 = 0;
    this.y4h_1 = false;
  }
  protoOf(JsonTreeDecoder).h2 = function () {
    return this.v4h_1;
  };
  protoOf(JsonTreeDecoder).u3y = function (descriptor) {
    $l$loop: while (this.x4h_1 < descriptor.n3w()) {
      var _unary__edvuaz = this.x4h_1;
      this.x4h_1 = _unary__edvuaz + 1 | 0;
      var name = this.f48(descriptor, _unary__edvuaz);
      var index = this.x4h_1 - 1 | 0;
      this.y4h_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.h2();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).i2(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.a4h_1.h4c_1)
          return index;
        var tmp0 = this.r4c();
        var tmp$ret$3;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.t3w(index);
          var elementDescriptor = descriptor.s3w(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.g3w()) {
            var tmp_1 = this.z4h(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$3 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.l3w(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.g3w()) {
              var tmp_3 = this.z4h(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$3 = false;
              break $l$block_2;
            }
            var tmp_4 = this.z4h(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$3 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.q4a_1.f4c_1 && elementDescriptor.g3w();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$3 = true;
              break $l$block_2;
            }
          }
          tmp$ret$3 = false;
        }
        if (tmp$ret$3)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).p3x = function () {
    return !this.y4h_1 && protoOf(AbstractJsonTreeDecoder).p3x.call(this);
  };
  protoOf(JsonTreeDecoder).g48 = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.r4c());
    var baseName = descriptor.p3w(index);
    if (strategy == null) {
      if (!this.a4h_1.l4c_1)
        return baseName;
      if (this.h2().l2().g1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.r4c(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.h2().l2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (deserializationNamesMap_0.k2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.a4e(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).d4h = function (tag) {
    return getValue(this.h2(), tag);
  };
  protoOf(JsonTreeDecoder).z4h = function (tag) {
    return this.h2().bd(tag);
  };
  protoOf(JsonTreeDecoder).d3y = function (descriptor) {
    if (descriptor === this.w4h_1) {
      var tmp = this.r4c();
      var tmp2 = this.c4h();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.w4h_1.k3w();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).o();
        var tmp_1 = getKClassFromExpression(tmp2).o();
        var tmp$ret$0 = this.m48();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      return new JsonTreeDecoder(tmp, tmp2, this.z4g_1, this.w4h_1);
    }
    return protoOf(AbstractJsonTreeDecoder).d3y.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).e3y = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.r4c())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.l3w();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.r4c());
    var tmp_1;
    if (strategy == null && !this.a4h_1.l4c_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.r4c(), descriptor).l2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.r4c()).b4g(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.h2().l2().t();
    while (_iterator__ex2g4s.u()) {
      var key = _iterator__ex2g4s.v();
      if (!names.g1(key) && !(key === this.z4g_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.m48() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.h2().toString()))));
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.g4i_1 = value;
    this.h4i_1 = this.g4i_1.a1();
    this.i4i_1 = -1;
  }
  protoOf(JsonTreeListDecoder).h2 = function () {
    return this.g4i_1;
  };
  protoOf(JsonTreeListDecoder).g48 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).d4h = function (tag) {
    return this.g4i_1.z(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).u3y = function (descriptor) {
    while (this.i4i_1 < (this.h4i_1 - 1 | 0)) {
      this.i4i_1 = this.i4i_1 + 1 | 0;
      return this.i4i_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.p4i_1 = value;
    this.z48('primitive');
  }
  protoOf(JsonPrimitiveDecoder).h2 = function () {
    return this.p4i_1;
  };
  protoOf(JsonPrimitiveDecoder).u3y = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).d4h = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.p4i_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.a4j_1 = value;
    this.b4j_1 = toList(this.a4j_1.l2());
    this.c4j_1 = imul(this.b4j_1.a1(), 2);
    this.d4j_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).h2 = function () {
    return this.a4j_1;
  };
  protoOf(JsonTreeMapDecoder).g48 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.b4j_1.z(i);
  };
  protoOf(JsonTreeMapDecoder).u3y = function (descriptor) {
    while (this.d4j_1 < (this.c4j_1 - 1 | 0)) {
      this.d4j_1 = this.d4j_1 + 1 | 0;
      return this.d4j_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).d4h = function (tag) {
    return (this.d4j_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.a4j_1, tag);
  };
  protoOf(JsonTreeMapDecoder).e3y = function (descriptor) {
  };
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.o4g_1 = begin;
    this.p4g_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.l3w();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.s3w(0), _this__u8e3s4.s3y());
          var keyKind = keyDescriptor.l3w();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.q4a_1.d4c_1) {
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.l3w(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.m3w()) {
      tmp = carrierDescriptor(_this__u8e3s4.s3w(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.e4j(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.e4j(lastPosition, currentPosition);
    var result = $this.f4b_1.toString();
    $this.f4b_1.vb(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.e4b_1);
    $this.e4b_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.f4j(), $this.c4b_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.g4j(currentPosition);
    if (currentPosition === -1) {
      $this.w4d('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.f4j();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.f4j(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.w4d("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.f4b_1.s(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.c4b_1 = startPos;
      $this.h4j();
      if (($this.c4b_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.w4d('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.c4b_1);
    }
    $this.f4b_1.s(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.w4d("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.g4j(start);
    if (current >= charSequenceLength($this.f4j()) || current === -1) {
      $this.w4d('EOF');
    }
    var tmp = $this.f4j();
    var _unary__edvuaz = current;
    current = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(tmp, _unary__edvuaz);
    var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.w4d("Expected valid boolean literal prefix, but had '" + $this.u4e() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.f4j()) - current | 0) < literalSuffix.length) {
      $this.w4d('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.f4j(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.w4d("Expected valid boolean literal prefix, but had '" + $this.u4e() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.c4b_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.c4b_1 = 0;
    this.d4b_1 = new JsonPath();
    this.e4b_1 = null;
    this.f4b_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).h4j = function () {
  };
  protoOf(AbstractJsonLexer).e4g = function () {
    var current = this.i4j();
    var source = this.f4j();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.c4b_1 = this.c4b_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).j4j = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).g4b = function () {
    var nextToken = this.w4e();
    if (!(nextToken === 10)) {
      this.w4d('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.f4j(), this.c4b_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).q4e = function (expected) {
    var token = this.w4e();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.c4b_1 - 1 | 0 : this.c4b_1;
      var s = this.c4b_1 === charSequenceLength(this.f4j()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.f4j(), position));
      var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.w4d(tmp$ret$0, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).k4j = function (expected) {
    if (this.c4b_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.c4b_1;
        try {
          this.c4b_1 = this.c4b_1 - 1 | 0;
          tmp$ret$1 = this.u4e();
          break $l$block;
        }finally {
          this.c4b_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.v4d("Expected string literal but 'null' literal was found", this.c4b_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.c4b_1 - 1 | 0 : this.c4b_1;
    var s = this.c4b_1 === charSequenceLength(this.f4j()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.f4j(), position));
    var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.w4d(tmp$ret$2, position);
  };
  protoOf(AbstractJsonLexer).r4e = function () {
    var source = this.f4j();
    var cpos = this.c4b_1;
    $l$loop_0: while (true) {
      cpos = this.g4j(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.c4b_1 = cpos;
      return charToTokenClass(ch);
    }
    this.c4b_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).f4g = function (doConsume) {
    var current = this.i4j();
    current = this.g4j(current);
    var len = charSequenceLength(this.f4j()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.f4j(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.f4j(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.c4b_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).q4g = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.f4g(doConsume) : $super.f4g.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).g4g = function (isLenient) {
    var token = this.r4e();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.u4e();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.t4e();
    }
    var string = tmp;
    this.e4b_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).l4j = function () {
    this.e4b_1 = null;
  };
  protoOf(AbstractJsonLexer).m4j = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.f4j();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).t4e = function () {
    if (!(this.e4b_1 == null)) {
      return takePeeked(this);
    }
    return this.j4g();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.g4j(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.w4d('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.e4j(lastPosition, currentPosition);
          currentPosition = this.g4j(currentPosition);
          if (currentPosition === -1) {
            this.w4d('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.m4j(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.c4b_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).k4g = function () {
    var result = this.u4e();
    if (result === 'null' && wasUnquotedString(this)) {
      this.w4d("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).u4e = function () {
    if (!(this.e4b_1 == null)) {
      return takePeeked(this);
    }
    var current = this.i4j();
    if (current >= charSequenceLength(this.f4j()) || current === -1) {
      this.w4d('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.f4j(), current));
    if (token === 1) {
      return this.t4e();
    }
    if (!(token === 0)) {
      this.w4d('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.f4j(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.f4j(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.f4j())) {
        usedAppend = true;
        this.e4j(this.c4b_1, current);
        var eof = this.g4j(current);
        if (eof === -1) {
          this.c4b_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.m4j(this.c4b_1, current);
    } else {
      tmp = decodedString(this, this.c4b_1, current);
    }
    var result = tmp;
    this.c4b_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).e4j = function (fromIndex, toIndex) {
    this.f4b_1.pb(this.f4j(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).i4g = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.r4e();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.u4e();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.r4e();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.u4e();
        else
          this.j4g();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.y(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.c4b_1, 'found ] instead of } at path: ' + this.d4b_1.toString(), this.f4j());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.c4b_1, 'found } instead of ] at path: ' + this.d4b_1.toString(), this.f4j());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.w4d('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.w4e();
      if (tokenStack.a1() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.f4j()) + "', currentPosition=" + this.c4b_1 + ')';
  };
  protoOf(AbstractJsonLexer).h4g = function (key) {
    var processed = this.m4j(0, this.c4b_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw new JsonDecodingException("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.d4b_1.j4e() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.f4j(), lastIndexOf_0))));
  };
  protoOf(AbstractJsonLexer).v4d = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.d4b_1.j4e() + hintMessage, this.f4j());
  };
  protoOf(AbstractJsonLexer).w4d = function (message, position, hint, $super) {
    position = position === VOID ? this.c4b_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.v4d(message, position, hint) : $super.v4d.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).s4g = function () {
    var current = this.i4j();
    current = this.g4j(current);
    if (current >= charSequenceLength(this.f4j()) || current === -1) {
      this.w4d('EOF');
    }
    var tmp;
    if (charSequenceGet(this.f4j(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.f4j())) {
        this.w4d('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.f4j()))) {
      var ch = charSequenceGet(this.f4j(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.w4d('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.w4d("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.w4d("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.w4d("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.w4d("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = exponentAccumulator;
        // Inline function 'kotlin.Long.plus' call
        var this_1 = multiply(this_0, fromInt(10));
        exponentAccumulator = add(this_1, fromInt(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      var this_2 = accumulator;
      // Inline function 'kotlin.Long.minus' call
      var this_3 = multiply(this_2, fromInt(10));
      accumulator = subtract(this_3, fromInt(digit));
      if (compare(accumulator, new Long(0, 0)) > 0) {
        this.w4d('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.w4d('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.w4d('EOF');
      }
      if (!(charSequenceGet(this.f4j(), current) === _Char___init__impl__6a9atx(34))) {
        this.w4d('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.c4b_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(new Long(-1, 2147483647)) || doubleAccumulator < toNumber(new Long(0, -2147483648))) {
        this.w4d('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.w4d("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!equalsLong(accumulator, new Long(0, -2147483648))) {
      tmp_0 = negate(accumulator);
    } else {
      this.w4d('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).f4d = function () {
    var result = this.s4g();
    var next = this.w4e();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.c4b_1 - 1 | 0 : this.c4b_1;
      var s = this.c4b_1 === charSequenceLength(this.f4j()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.f4j(), position));
      var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.w4d(tmp$ret$0, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).r4g = function () {
    var current = this.i4j();
    if (current === charSequenceLength(this.f4j())) {
      this.w4d('EOF');
    }
    var tmp;
    if (charSequenceGet(this.f4j(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.c4b_1 === charSequenceLength(this.f4j())) {
        this.w4d('EOF');
      }
      if (!(charSequenceGet(this.f4j(), this.c4b_1) === _Char___init__impl__6a9atx(34))) {
        this.w4d('Expected closing quotation mark');
      }
      this.c4b_1 = this.c4b_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().o4j_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().n4j_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.n4j_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.o4j_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.n4j_1 = charArray(117);
    this.o4j_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source) {
    StringJsonLexer.call(this, source);
  }
  protoOf(StringJsonLexerWithComments).w4e = function () {
    var source = this.f4j();
    var cpos = this.i4j();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.c4b_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).s4e = function () {
    var current = this.i4j();
    if (current >= this.f4j().length || current === -1)
      return false;
    return this.j4j(charCodeAt(this.f4j(), current));
  };
  protoOf(StringJsonLexerWithComments).d4g = function (expected) {
    var source = this.f4j();
    var current = this.i4j();
    if (current >= source.length || current === -1) {
      this.c4b_1 = -1;
      this.k4j(expected);
    }
    var c = charCodeAt(source, current);
    this.c4b_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.k4j(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).r4e = function () {
    var source = this.f4j();
    var cpos = this.i4j();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.c4b_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).i4j = function () {
    var current = this.c4b_1;
    if (current === -1)
      return current;
    var source = this.f4j();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.c4b_1 = source.length;
            this.w4d('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.c4b_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.y4j_1 = source;
  }
  protoOf(StringJsonLexer).f4j = function () {
    return this.y4j_1;
  };
  protoOf(StringJsonLexer).g4j = function (position) {
    return position < this.f4j().length ? position : -1;
  };
  protoOf(StringJsonLexer).w4e = function () {
    var source = this.f4j();
    var cpos = this.c4b_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.c4b_1 = cpos;
      return charToTokenClass(c);
    }
    this.c4b_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).s4e = function () {
    var current = this.c4b_1;
    if (current === -1)
      return false;
    var source = this.f4j();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.c4b_1 = current;
      return this.j4j(c);
    }
    this.c4b_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).i4j = function () {
    var current = this.c4b_1;
    if (current === -1)
      return current;
    var source = this.f4j();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.c4b_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).d4g = function (expected) {
    if (this.c4b_1 === -1) {
      this.k4j(expected);
    }
    var source = this.f4j();
    var cpos = this.c4b_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.c4b_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.k4j(expected);
    }
    this.c4b_1 = -1;
    this.k4j(expected);
  };
  protoOf(StringJsonLexer).j4g = function () {
    this.d4g(_Char___init__impl__6a9atx(34));
    var current = this.c4b_1;
    var closingQuote = indexOf_0(this.f4j(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.u4e();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.c4b_1 - 1 | 0 : this.c4b_1;
      var s = this.c4b_1 === charSequenceLength(this.f4j()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.f4j(), position));
      var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.w4d(tmp$ret$0, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.f4j(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.f4j(), this.c4b_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.c4b_1 = closingQuote + 1 | 0;
    return substring(this.f4j(), current, closingQuote);
  };
  protoOf(StringJsonLexer).l4g = function (keyToMatch, isLenient) {
    var positionSnapshot = this.c4b_1;
    try {
      if (!(this.w4e() === 6))
        return null;
      var firstKey = this.g4g(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.l4j();
      if (!(this.w4e() === 5))
        return null;
      return this.g4g(isLenient);
    }finally {
      this.c4b_1 = positionSnapshot;
      this.l4j();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.q4a_1.p4c_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.s4a_1;
  }
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).g3w = get_isNullable;
  protoOf(defer$1).m3w = get_isInline;
  protoOf(defer$1).o3w = get_annotations;
  protoOf(JsonSerializersModuleValidator).j4a = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
