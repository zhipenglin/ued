(self.webpackChunkued=self.webpackChunkued||[]).push([[136],{37596:(i,s,t)=>{"use strict";t.d(s,{Z:()=>r});const r={name:"Test",summary:"",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n</table>",example:{isFull:!1,className:"Test_0cbc6",style:"",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const {default:Test} = _Test;\nconst BaseExample = ()=>{\n    return <Test />;\n};\n\nrender(<BaseExample />);\n\n",scope:[{name:"_Test",packageName:"@components/Test",component:t(51024)}]}]}}},51024:(i,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var r=t(80184);const n=()=>(0,r.jsx)("div",{children:"unleash creativity"})},44692:(i,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var r=t(86122),n=t(84027),e=t(30624),a=t.n(e),o=t(51583),c=t(26181),p=t.n(c),j=t(66005),_=t(55198),S=t.n(_),l=t(80184);const y=a().Example,E=S()(j.withFetch,(0,n.createWithRemoteLoader)({modules:["Filter@fields","Filter@getFilterValue"]}))((i=>{let{remoteModules:s,data:t}=i;const{libs:e,libsMap:a}=(0,r.useMemo)((()=>{const i=t["remote-components"].map((i=>({label:i.name,value:i.name,version:Object.keys(i.versions).sort(((s,t)=>new Date(i.versions[t].time)-new Date(i.versions[s].time))).map((i=>({label:"v".concat(i),value:i})))}))),s=new Map(i.map((i=>[i.value,i])));return{libs:i,libsMap:s}}),[t]),[c,j]=s,[_,S]=(0,r.useState)([]),{id:E}=(0,o.useParams)(),x=j(_),h=x.libName||p()(e,"[0].value"),u=(0,r.useRef)(null),g=x.version,d=(0,r.useMemo)((()=>u.current!==h?(S((i=>i.filter((i=>{let{name:s}=i;return"version"!==s})))),u.current=h,p()(a.get(h),"version[0].value")):g||p()(a.get(h),"version[0].value")),[h,a,g]),{loading:m,error:C,remoteModules:P}=(0,n.useLoader)({modules:["".concat(h,"/").concat(d,":components")]});if(m)return null;if(C)return(0,l.jsx)(o.Navigate,{to:"/error?msg=\u52a0\u8f7d\u8fdc\u7a0b\u7ec4\u4ef6\u5e93\u53ef\u80fd\u4e0d\u7b26\u5408\u89c4\u8303\uff0c\u60a8\u53ef\u4ee5\u5411\u5f00\u53d1\u8005\u62a5\u544a\u8be5\u95ee\u9898",replace:!0});const[B]=P,{AdvancedSelectFilterItem:G}=c;return(0,l.jsx)(y,{baseUrl:"/ued/components",readme:B,pageProps:{titleExtra:"".concat(h,"/").concat(d,"@").concat(E),filter:{value:_,onChange:S,list:[[(0,l.jsx)(G,{label:"\u7ec4\u4ef6\u5e93",name:"libName",single:!0,api:{loader:()=>({pageData:e})}}),(0,l.jsx)(G,{label:"\u7248\u672c",name:"version",single:!0,api:{data:h,loader:i=>{let{data:s}=i;return{pageData:p()(a.get(s),"version",[])}}}})]]}}})})),x=(0,n.createWithRemoteLoader)({modules:["Global@usePreset"]})((i=>{let{remoteModules:s}=i;const[t]=s,{apis:r}=t();return(0,l.jsx)(E,{...Object.assign({},r.manifest.getDetail)})}))},7771:(i,s,t)=>{var r={"./Binary_Property/ASCII.js":75532,"./Binary_Property/ASCII_Hex_Digit.js":51444,"./Binary_Property/Alphabetic.js":77946,"./Binary_Property/Any.js":17375,"./Binary_Property/Assigned.js":10588,"./Binary_Property/Bidi_Control.js":98145,"./Binary_Property/Bidi_Mirrored.js":85184,"./Binary_Property/Case_Ignorable.js":5004,"./Binary_Property/Cased.js":14997,"./Binary_Property/Changes_When_Casefolded.js":36358,"./Binary_Property/Changes_When_Casemapped.js":82477,"./Binary_Property/Changes_When_Lowercased.js":64655,"./Binary_Property/Changes_When_NFKC_Casefolded.js":96616,"./Binary_Property/Changes_When_Titlecased.js":81356,"./Binary_Property/Changes_When_Uppercased.js":30783,"./Binary_Property/Dash.js":1026,"./Binary_Property/Default_Ignorable_Code_Point.js":64935,"./Binary_Property/Deprecated.js":29263,"./Binary_Property/Diacritic.js":66789,"./Binary_Property/Emoji.js":25716,"./Binary_Property/Emoji_Component.js":20910,"./Binary_Property/Emoji_Modifier.js":26235,"./Binary_Property/Emoji_Modifier_Base.js":51581,"./Binary_Property/Emoji_Presentation.js":34994,"./Binary_Property/Extended_Pictographic.js":79834,"./Binary_Property/Extender.js":8023,"./Binary_Property/Grapheme_Base.js":22933,"./Binary_Property/Grapheme_Extend.js":26243,"./Binary_Property/Hex_Digit.js":42892,"./Binary_Property/IDS_Binary_Operator.js":37799,"./Binary_Property/IDS_Trinary_Operator.js":33874,"./Binary_Property/ID_Continue.js":79406,"./Binary_Property/ID_Start.js":62960,"./Binary_Property/Ideographic.js":20954,"./Binary_Property/Join_Control.js":45293,"./Binary_Property/Logical_Order_Exception.js":9786,"./Binary_Property/Lowercase.js":11337,"./Binary_Property/Math.js":43877,"./Binary_Property/Noncharacter_Code_Point.js":64291,"./Binary_Property/Pattern_Syntax.js":14930,"./Binary_Property/Pattern_White_Space.js":43288,"./Binary_Property/Quotation_Mark.js":16178,"./Binary_Property/Radical.js":7120,"./Binary_Property/Regional_Indicator.js":84863,"./Binary_Property/Sentence_Terminal.js":63181,"./Binary_Property/Soft_Dotted.js":79478,"./Binary_Property/Terminal_Punctuation.js":59460,"./Binary_Property/Unified_Ideograph.js":61232,"./Binary_Property/Uppercase.js":19003,"./Binary_Property/Variation_Selector.js":6260,"./Binary_Property/White_Space.js":8216,"./Binary_Property/XID_Continue.js":45176,"./Binary_Property/XID_Start.js":50050,"./General_Category/Cased_Letter.js":85858,"./General_Category/Close_Punctuation.js":87219,"./General_Category/Connector_Punctuation.js":57463,"./General_Category/Control.js":7351,"./General_Category/Currency_Symbol.js":74040,"./General_Category/Dash_Punctuation.js":32834,"./General_Category/Decimal_Number.js":13387,"./General_Category/Enclosing_Mark.js":14404,"./General_Category/Final_Punctuation.js":83326,"./General_Category/Format.js":32241,"./General_Category/Initial_Punctuation.js":58682,"./General_Category/Letter.js":85543,"./General_Category/Letter_Number.js":8279,"./General_Category/Line_Separator.js":56370,"./General_Category/Lowercase_Letter.js":22788,"./General_Category/Mark.js":12454,"./General_Category/Math_Symbol.js":18715,"./General_Category/Modifier_Letter.js":33569,"./General_Category/Modifier_Symbol.js":18769,"./General_Category/Nonspacing_Mark.js":57184,"./General_Category/Number.js":49659,"./General_Category/Open_Punctuation.js":51584,"./General_Category/Other.js":89954,"./General_Category/Other_Letter.js":3291,"./General_Category/Other_Number.js":33772,"./General_Category/Other_Punctuation.js":25673,"./General_Category/Other_Symbol.js":68365,"./General_Category/Paragraph_Separator.js":69731,"./General_Category/Private_Use.js":79735,"./General_Category/Punctuation.js":58705,"./General_Category/Separator.js":52649,"./General_Category/Space_Separator.js":55051,"./General_Category/Spacing_Mark.js":26962,"./General_Category/Surrogate.js":76985,"./General_Category/Symbol.js":39215,"./General_Category/Titlecase_Letter.js":52830,"./General_Category/Unassigned.js":31860,"./General_Category/Uppercase_Letter.js":32420,"./Script/Adlam.js":66093,"./Script/Ahom.js":4112,"./Script/Anatolian_Hieroglyphs.js":4830,"./Script/Arabic.js":56594,"./Script/Armenian.js":56519,"./Script/Avestan.js":31533,"./Script/Balinese.js":56955,"./Script/Bamum.js":949,"./Script/Bassa_Vah.js":49197,"./Script/Batak.js":16311,"./Script/Bengali.js":75582,"./Script/Bhaiksuki.js":31873,"./Script/Bopomofo.js":27201,"./Script/Brahmi.js":57032,"./Script/Braille.js":36662,"./Script/Buginese.js":90080,"./Script/Buhid.js":8986,"./Script/Canadian_Aboriginal.js":98841,"./Script/Carian.js":12377,"./Script/Caucasian_Albanian.js":12080,"./Script/Chakma.js":50406,"./Script/Cham.js":68570,"./Script/Cherokee.js":45468,"./Script/Chorasmian.js":32553,"./Script/Common.js":4351,"./Script/Coptic.js":54444,"./Script/Cuneiform.js":57930,"./Script/Cypriot.js":97939,"./Script/Cypro_Minoan.js":98567,"./Script/Cyrillic.js":77624,"./Script/Deseret.js":3822,"./Script/Devanagari.js":13928,"./Script/Dives_Akuru.js":51445,"./Script/Dogra.js":69118,"./Script/Duployan.js":40480,"./Script/Egyptian_Hieroglyphs.js":96328,"./Script/Elbasan.js":44125,"./Script/Elymaic.js":72829,"./Script/Ethiopic.js":86161,"./Script/Georgian.js":28078,"./Script/Glagolitic.js":24582,"./Script/Gothic.js":52023,"./Script/Grantha.js":28325,"./Script/Greek.js":34867,"./Script/Gujarati.js":19116,"./Script/Gunjala_Gondi.js":52943,"./Script/Gurmukhi.js":74637,"./Script/Han.js":85069,"./Script/Hangul.js":18678,"./Script/Hanifi_Rohingya.js":44740,"./Script/Hanunoo.js":68335,"./Script/Hatran.js":96501,"./Script/Hebrew.js":88282,"./Script/Hiragana.js":99258,"./Script/Imperial_Aramaic.js":41152,"./Script/Inherited.js":67083,"./Script/Inscriptional_Pahlavi.js":4010,"./Script/Inscriptional_Parthian.js":14799,"./Script/Javanese.js":95393,"./Script/Kaithi.js":51885,"./Script/Kannada.js":34217,"./Script/Katakana.js":8648,"./Script/Kayah_Li.js":50027,"./Script/Kharoshthi.js":24297,"./Script/Khitan_Small_Script.js":18823,"./Script/Khmer.js":55173,"./Script/Khojki.js":15817,"./Script/Khudawadi.js":81663,"./Script/Lao.js":74571,"./Script/Latin.js":37777,"./Script/Lepcha.js":80994,"./Script/Limbu.js":89187,"./Script/Linear_A.js":32118,"./Script/Linear_B.js":72916,"./Script/Lisu.js":62118,"./Script/Lycian.js":59441,"./Script/Lydian.js":64613,"./Script/Mahajani.js":81374,"./Script/Makasar.js":48237,"./Script/Malayalam.js":42066,"./Script/Mandaic.js":67604,"./Script/Manichaean.js":44323,"./Script/Marchen.js":35527,"./Script/Masaram_Gondi.js":70530,"./Script/Medefaidrin.js":38611,"./Script/Meetei_Mayek.js":23493,"./Script/Mende_Kikakui.js":15205,"./Script/Meroitic_Cursive.js":57098,"./Script/Meroitic_Hieroglyphs.js":61538,"./Script/Miao.js":9876,"./Script/Modi.js":72648,"./Script/Mongolian.js":64227,"./Script/Mro.js":57145,"./Script/Multani.js":78500,"./Script/Myanmar.js":91444,"./Script/Nabataean.js":85102,"./Script/Nandinagari.js":53178,"./Script/New_Tai_Lue.js":98123,"./Script/Newa.js":68179,"./Script/Nko.js":84662,"./Script/Nushu.js":31157,"./Script/Nyiakeng_Puachue_Hmong.js":88999,"./Script/Ogham.js":65835,"./Script/Ol_Chiki.js":28906,"./Script/Old_Hungarian.js":28429,"./Script/Old_Italic.js":60965,"./Script/Old_North_Arabian.js":88198,"./Script/Old_Permic.js":69152,"./Script/Old_Persian.js":94941,"./Script/Old_Sogdian.js":60266,"./Script/Old_South_Arabian.js":72607,"./Script/Old_Turkic.js":5664,"./Script/Old_Uyghur.js":2901,"./Script/Oriya.js":35643,"./Script/Osage.js":63193,"./Script/Osmanya.js":97392,"./Script/Pahawh_Hmong.js":81893,"./Script/Palmyrene.js":26396,"./Script/Pau_Cin_Hau.js":42514,"./Script/Phags_Pa.js":72822,"./Script/Phoenician.js":93197,"./Script/Psalter_Pahlavi.js":71083,"./Script/Rejang.js":56278,"./Script/Runic.js":78645,"./Script/Samaritan.js":41896,"./Script/Saurashtra.js":19571,"./Script/Sharada.js":19180,"./Script/Shavian.js":87752,"./Script/Siddham.js":4229,"./Script/SignWriting.js":41938,"./Script/Sinhala.js":12142,"./Script/Sogdian.js":28681,"./Script/Sora_Sompeng.js":50303,"./Script/Soyombo.js":17239,"./Script/Sundanese.js":18671,"./Script/Syloti_Nagri.js":80230,"./Script/Syriac.js":69185,"./Script/Tagalog.js":15815,"./Script/Tagbanwa.js":29743,"./Script/Tai_Le.js":79935,"./Script/Tai_Tham.js":41089,"./Script/Tai_Viet.js":22170,"./Script/Takri.js":29859,"./Script/Tamil.js":41930,"./Script/Tangsa.js":42437,"./Script/Tangut.js":47555,"./Script/Telugu.js":42343,"./Script/Thaana.js":25252,"./Script/Thai.js":45968,"./Script/Tibetan.js":21918,"./Script/Tifinagh.js":19170,"./Script/Tirhuta.js":97974,"./Script/Toto.js":68147,"./Script/Ugaritic.js":34894,"./Script/Vai.js":72228,"./Script/Vithkuqi.js":56545,"./Script/Wancho.js":30314,"./Script/Warang_Citi.js":94654,"./Script/Yezidi.js":56142,"./Script/Yi.js":50753,"./Script/Zanabazar_Square.js":1103,"./Script_Extensions/Adlam.js":98624,"./Script_Extensions/Ahom.js":98290,"./Script_Extensions/Anatolian_Hieroglyphs.js":89446,"./Script_Extensions/Arabic.js":63681,"./Script_Extensions/Armenian.js":91916,"./Script_Extensions/Avestan.js":95666,"./Script_Extensions/Balinese.js":90157,"./Script_Extensions/Bamum.js":4370,"./Script_Extensions/Bassa_Vah.js":29137,"./Script_Extensions/Batak.js":57402,"./Script_Extensions/Bengali.js":1489,"./Script_Extensions/Bhaiksuki.js":10366,"./Script_Extensions/Bopomofo.js":87650,"./Script_Extensions/Brahmi.js":85871,"./Script_Extensions/Braille.js":30808,"./Script_Extensions/Buginese.js":27468,"./Script_Extensions/Buhid.js":3105,"./Script_Extensions/Canadian_Aboriginal.js":75109,"./Script_Extensions/Carian.js":90111,"./Script_Extensions/Caucasian_Albanian.js":26662,"./Script_Extensions/Chakma.js":82098,"./Script_Extensions/Cham.js":82910,"./Script_Extensions/Cherokee.js":12874,"./Script_Extensions/Chorasmian.js":91749,"./Script_Extensions/Common.js":71401,"./Script_Extensions/Coptic.js":36895,"./Script_Extensions/Cuneiform.js":27605,"./Script_Extensions/Cypriot.js":4059,"./Script_Extensions/Cypro_Minoan.js":24584,"./Script_Extensions/Cyrillic.js":69923,"./Script_Extensions/Deseret.js":9694,"./Script_Extensions/Devanagari.js":9032,"./Script_Extensions/Dives_Akuru.js":28084,"./Script_Extensions/Dogra.js":8793,"./Script_Extensions/Duployan.js":2194,"./Script_Extensions/Egyptian_Hieroglyphs.js":60562,"./Script_Extensions/Elbasan.js":58465,"./Script_Extensions/Elymaic.js":7064,"./Script_Extensions/Ethiopic.js":62607,"./Script_Extensions/Georgian.js":39691,"./Script_Extensions/Glagolitic.js":12863,"./Script_Extensions/Gothic.js":24612,"./Script_Extensions/Grantha.js":66821,"./Script_Extensions/Greek.js":51689,"./Script_Extensions/Gujarati.js":29766,"./Script_Extensions/Gunjala_Gondi.js":39903,"./Script_Extensions/Gurmukhi.js":76135,"./Script_Extensions/Han.js":1419,"./Script_Extensions/Hangul.js":40150,"./Script_Extensions/Hanifi_Rohingya.js":3870,"./Script_Extensions/Hanunoo.js":19047,"./Script_Extensions/Hatran.js":32762,"./Script_Extensions/Hebrew.js":27551,"./Script_Extensions/Hiragana.js":85355,"./Script_Extensions/Imperial_Aramaic.js":6978,"./Script_Extensions/Inherited.js":68536,"./Script_Extensions/Inscriptional_Pahlavi.js":31942,"./Script_Extensions/Inscriptional_Parthian.js":43388,"./Script_Extensions/Javanese.js":24024,"./Script_Extensions/Kaithi.js":20490,"./Script_Extensions/Kannada.js":41658,"./Script_Extensions/Katakana.js":18834,"./Script_Extensions/Kayah_Li.js":5446,"./Script_Extensions/Kharoshthi.js":75494,"./Script_Extensions/Khitan_Small_Script.js":22916,"./Script_Extensions/Khmer.js":42,"./Script_Extensions/Khojki.js":74447,"./Script_Extensions/Khudawadi.js":94509,"./Script_Extensions/Lao.js":27981,"./Script_Extensions/Latin.js":94562,"./Script_Extensions/Lepcha.js":58683,"./Script_Extensions/Limbu.js":31586,"./Script_Extensions/Linear_A.js":2578,"./Script_Extensions/Linear_B.js":87546,"./Script_Extensions/Lisu.js":1399,"./Script_Extensions/Lycian.js":59825,"./Script_Extensions/Lydian.js":42311,"./Script_Extensions/Mahajani.js":44476,"./Script_Extensions/Makasar.js":90821,"./Script_Extensions/Malayalam.js":32909,"./Script_Extensions/Mandaic.js":5412,"./Script_Extensions/Manichaean.js":46352,"./Script_Extensions/Marchen.js":70013,"./Script_Extensions/Masaram_Gondi.js":46685,"./Script_Extensions/Medefaidrin.js":64118,"./Script_Extensions/Meetei_Mayek.js":52762,"./Script_Extensions/Mende_Kikakui.js":87389,"./Script_Extensions/Meroitic_Cursive.js":38392,"./Script_Extensions/Meroitic_Hieroglyphs.js":2014,"./Script_Extensions/Miao.js":44482,"./Script_Extensions/Modi.js":44336,"./Script_Extensions/Mongolian.js":58477,"./Script_Extensions/Mro.js":62837,"./Script_Extensions/Multani.js":75361,"./Script_Extensions/Myanmar.js":65928,"./Script_Extensions/Nabataean.js":75292,"./Script_Extensions/Nandinagari.js":42325,"./Script_Extensions/New_Tai_Lue.js":21222,"./Script_Extensions/Newa.js":66422,"./Script_Extensions/Nko.js":1793,"./Script_Extensions/Nushu.js":38890,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":80211,"./Script_Extensions/Ogham.js":6507,"./Script_Extensions/Ol_Chiki.js":60772,"./Script_Extensions/Old_Hungarian.js":70010,"./Script_Extensions/Old_Italic.js":50060,"./Script_Extensions/Old_North_Arabian.js":69276,"./Script_Extensions/Old_Permic.js":4263,"./Script_Extensions/Old_Persian.js":61069,"./Script_Extensions/Old_Sogdian.js":10952,"./Script_Extensions/Old_South_Arabian.js":12828,"./Script_Extensions/Old_Turkic.js":16302,"./Script_Extensions/Old_Uyghur.js":65388,"./Script_Extensions/Oriya.js":31564,"./Script_Extensions/Osage.js":50994,"./Script_Extensions/Osmanya.js":69510,"./Script_Extensions/Pahawh_Hmong.js":86858,"./Script_Extensions/Palmyrene.js":33003,"./Script_Extensions/Pau_Cin_Hau.js":864,"./Script_Extensions/Phags_Pa.js":9785,"./Script_Extensions/Phoenician.js":82175,"./Script_Extensions/Psalter_Pahlavi.js":19664,"./Script_Extensions/Rejang.js":8733,"./Script_Extensions/Runic.js":18734,"./Script_Extensions/Samaritan.js":4559,"./Script_Extensions/Saurashtra.js":80845,"./Script_Extensions/Sharada.js":86308,"./Script_Extensions/Shavian.js":28266,"./Script_Extensions/Siddham.js":9266,"./Script_Extensions/SignWriting.js":74194,"./Script_Extensions/Sinhala.js":53576,"./Script_Extensions/Sogdian.js":22957,"./Script_Extensions/Sora_Sompeng.js":49587,"./Script_Extensions/Soyombo.js":61438,"./Script_Extensions/Sundanese.js":7223,"./Script_Extensions/Syloti_Nagri.js":68019,"./Script_Extensions/Syriac.js":75049,"./Script_Extensions/Tagalog.js":79919,"./Script_Extensions/Tagbanwa.js":20598,"./Script_Extensions/Tai_Le.js":28245,"./Script_Extensions/Tai_Tham.js":99975,"./Script_Extensions/Tai_Viet.js":66389,"./Script_Extensions/Takri.js":48036,"./Script_Extensions/Tamil.js":85276,"./Script_Extensions/Tangsa.js":3642,"./Script_Extensions/Tangut.js":67951,"./Script_Extensions/Telugu.js":2705,"./Script_Extensions/Thaana.js":72203,"./Script_Extensions/Thai.js":21043,"./Script_Extensions/Tibetan.js":18284,"./Script_Extensions/Tifinagh.js":92160,"./Script_Extensions/Tirhuta.js":15490,"./Script_Extensions/Toto.js":23341,"./Script_Extensions/Ugaritic.js":36291,"./Script_Extensions/Vai.js":54048,"./Script_Extensions/Vithkuqi.js":82609,"./Script_Extensions/Wancho.js":21984,"./Script_Extensions/Warang_Citi.js":43314,"./Script_Extensions/Yezidi.js":31655,"./Script_Extensions/Yi.js":38849,"./Script_Extensions/Zanabazar_Square.js":27156,"./index.js":14834,"./unicode-version.js":44146};function n(i){var s=e(i);return t(s)}function e(i){if(!t.o(r,i)){var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}return r[i]}n.keys=function(){return Object.keys(r)},n.resolve=e,i.exports=n,n.id=7771}}]);
//# sourceMappingURL=136.9b2234df.chunk.js.map