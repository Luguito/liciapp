(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1342:function(module,exports){module.exports=function(hljs){var IDENT_RE="[A-Za-z_][0-9A-Za-z_]*",KEYWORDS={keyword:"if for while var new function do return void else break",literal:"BackSlash DoubleQuote false ForwardSlash Infinity NaN NewLine null PI SingleQuote Tab TextFormatting true undefined",built_in:"Abs Acos Angle Attachments Area AreaGeodetic Asin Atan Atan2 Average Bearing Boolean Buffer BufferGeodetic Ceil Centroid Clip Console Constrain Contains Cos Count Crosses Cut Date DateAdd DateDiff Day Decode DefaultValue Dictionary Difference Disjoint Distance DistanceGeodetic Distinct DomainCode DomainName Equals Exp Extent Feature FeatureSet FeatureSetByAssociation FeatureSetById FeatureSetByPortalItem FeatureSetByRelationshipName FeatureSetByTitle FeatureSetByUrl Filter First Floor Geometry GroupBy Guid HasKey Hour IIf IndexOf Intersection Intersects IsEmpty IsNan IsSelfIntersecting Length LengthGeodetic Log Max Mean Millisecond Min Minute Month MultiPartToSinglePart Multipoint NextSequenceValue Now Number OrderBy Overlaps Point Polygon Polyline Portal Pow Random Relate Reverse RingIsClockWise Round Second SetGeometry Sin Sort Sqrt Stdev Sum SymmetricDifference Tan Text Timestamp Today ToLocal Top Touches ToUTC TrackCurrentTime TrackGeometryWindow TrackIndex TrackStartTime TrackWindow TypeOf Union UrlEncode Variance Weekday When Within Year "},NUMBER={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:hljs.C_NUMBER_RE}],relevance:0},SUBST={className:"subst",begin:"\\$\\{",end:"\\}",keywords:KEYWORDS,contains:[]},TEMPLATE_STRING={className:"string",begin:"`",end:"`",contains:[hljs.BACKSLASH_ESCAPE,SUBST]};SUBST.contains=[hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,TEMPLATE_STRING,NUMBER,hljs.REGEXP_MODE];var PARAMS_CONTAINS=SUBST.contains.concat([hljs.C_BLOCK_COMMENT_MODE,hljs.C_LINE_COMMENT_MODE]);return{aliases:["arcade"],keywords:KEYWORDS,contains:[hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,TEMPLATE_STRING,hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,{className:"symbol",begin:"\\$[datastore|feature|layer|map|measure|sourcefeature|sourcelayer|targetfeature|targetlayer|value|view]+"},NUMBER,{begin:/[{,]\s*/,relevance:0,contains:[{begin:IDENT_RE+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:IDENT_RE,relevance:0}]}]},{begin:"("+hljs.RE_STARTERS_RE+"|\\b(return)\\b)\\s*",keywords:"return",contains:[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,hljs.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:IDENT_RE},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:KEYWORDS,contains:PARAMS_CONTAINS}]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[hljs.inherit(hljs.TITLE_MODE,{begin:IDENT_RE}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:PARAMS_CONTAINS}],illegal:/\[|%/},{begin:/\$[(.]/}],illegal:/#(?!!)/}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_arcade.4ebf18c1bce4199d1ffd.bundle.js.map