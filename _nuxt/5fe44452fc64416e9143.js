(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{189:function(t,n,e){var content=e(214);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(23).default)("0dc03bb4",content,!0,{sourceMap:!1})},213:function(t,n,e){"use strict";var o=e(189);e.n(o).a},214:function(t,n,e){(t.exports=e(22)(!1)).push([t.i,'.settings[data-v-2c38f442] {\n  margin-top: 1em;\n}\n.settings__group[data-v-2c38f442] {\n    margin-bottom: 2em;\n}\n.settings__group--flex[data-v-2c38f442] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n}\n.settings__theme[data-v-2c38f442] {\n    border: 1px solid #000;\n    margin: .5em 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    padding: .5em;\n    text-transform: capitalize;\n}\n.settings__theme--active[data-v-2c38f442] {\n      -webkit-box-shadow: 0 0 0 0.25em rgba(29, 101, 216, 0.7);\n              box-shadow: 0 0 0 0.25em rgba(29, 101, 216, 0.7);\n}\n\n/* The switch - the box around the slider */\n.switch[data-v-2c38f442] {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input[data-v-2c38f442] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider[data-v-2c38f442] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n.slider[data-v-2c38f442]:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\ninput:checked + .slider[data-v-2c38f442] {\n  background-color: #2196F3;\n}\ninput:focus + .slider[data-v-2c38f442] {\n  -webkit-box-shadow: 0 0 1px #2196F3;\n          box-shadow: 0 0 1px #2196F3;\n}\ninput:checked + .slider[data-v-2c38f442]:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round[data-v-2c38f442] {\n  border-radius: 34px;\n}\n.slider.round[data-v-2c38f442]:before {\n  border-radius: 50%;\n}\n',""])},245:function(t,n,e){"use strict";e.r(n);var o=e(5),r=(e(1),e(2),e(3),e(10)),l=e(4),c=e(62),d={name:"SettingsPage",head:function(){return this.metaHead},data:function(){return{themesAvailable:c.a.AVAILABLE_THEME,modelSettingTranslation:!0,modelSettingTafsir:!0}},computed:Object(o.a)({},Object(r.d)(["settingActiveTheme","settingShowTranslation","settingShowTafsir"]),{metaHead:function(){var title="Halaman Setelan | Qur'an Offline";return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}}}),mounted:function(){var t=this;this[l.default.SET_HEADER_TITLE](this.$t("setting")),setTimeout(function(){t.modelSettingTranslation=t.settingShowTranslation,t.modelSettingTafsir=t.settingShowTafsir},500)},methods:Object(o.a)({},Object(r.c)([l.default.SET_HEADER_TITLE]),Object(r.b)(["setActiveTheme","setSettingTranslation","setSettingTafsir"]),{onSelectTheme:function(t){this.setActiveTheme(t)},onChangeSettingTranslation:function(){this.setSettingTranslation(this.modelSettingTranslation)},onChangeSettingTafsir:function(){this.setSettingTafsir(this.modelSettingTafsir)}})},m=(e(213),e(12)),component=Object(m.a)(d,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"settings"},[e("div",{staticClass:"settings__group"},[e("label",{attrs:{for:"setting-translation"}},[t._v("\n          Pilih tema aplikasi\n        ")]),t._v(" "),e("div",{staticClass:"settings__themes"},t._l(t.themesAvailable,function(n){return e("div",{key:n.name,staticClass:"settings__theme",class:{"settings__theme--active":n.name===t.settingActiveTheme.name},style:{"background-color":n.bgColor,color:n.fgColor},on:{click:function(e){t.onSelectTheme(n)}}},[t._v("\n            "+t._s(n.name)+"\n          ")])}),0)]),t._v(" "),e("div",{staticClass:"settings__group settings__group--flex"},[e("label",{attrs:{for:"setting-translation"}},[t._v("\n          Tampilkan terjemah\n        ")]),t._v(" "),e("label",{staticClass:"switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.modelSettingTranslation,expression:"modelSettingTranslation"}],attrs:{id:"setting-translation",type:"checkbox",name:"translation"},domProps:{checked:Array.isArray(t.modelSettingTranslation)?t._i(t.modelSettingTranslation,null)>-1:t.modelSettingTranslation},on:{change:[function(n){var e=t.modelSettingTranslation,o=n.target,r=!!o.checked;if(Array.isArray(e)){var l=t._i(e,null);o.checked?l<0&&(t.modelSettingTranslation=e.concat([null])):l>-1&&(t.modelSettingTranslation=e.slice(0,l).concat(e.slice(l+1)))}else t.modelSettingTranslation=r},t.onChangeSettingTranslation]}}),t._v(" "),e("span",{staticClass:"slider round"})])]),t._v(" "),e("div",{staticClass:"settings__group settings__group--flex"},[e("label",{attrs:{for:"setting-tafsir"}},[t._v("\n          Tampilkan tafsir\n        ")]),t._v(" "),e("label",{staticClass:"switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.modelSettingTafsir,expression:"modelSettingTafsir"}],attrs:{id:"setting-tafsir",type:"checkbox",name:"translation"},domProps:{checked:Array.isArray(t.modelSettingTafsir)?t._i(t.modelSettingTafsir,null)>-1:t.modelSettingTafsir},on:{change:[function(n){var e=t.modelSettingTafsir,o=n.target,r=!!o.checked;if(Array.isArray(e)){var l=t._i(e,null);o.checked?l<0&&(t.modelSettingTafsir=e.concat([null])):l>-1&&(t.modelSettingTafsir=e.slice(0,l).concat(e.slice(l+1)))}else t.modelSettingTafsir=r},t.onChangeSettingTafsir]}}),t._v(" "),e("span",{staticClass:"slider round"})])])])])])},[],!1,null,"2c38f442",null);n.default=component.exports}}]);