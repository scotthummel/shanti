webpackJsonp([2],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _StaffMember = __webpack_require__(156);

var _StaffMember2 = _interopRequireDefault(_StaffMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    data: function data() {
        return {
            staff: [],
            loading: false
        };
    },

    methods: {
        getStaff: function getStaff() {
            var _this = this;

            this.loading = true;

            http.get('/staff')
            //.use(saCache)
            .then(function (response) {
                _this.staff = response.body.staff;
                _this.loading = false;
            })['catch'](function (error) {
                console.error(error);
            });
        }
    },
    mounted: function mounted() {
        this.loading = true;
        this.getStaff();
    },

    components: {
        'psg-staff-member': _StaffMember2['default']
    }
}; //
//
//
//
//
//
//
//
//

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TextToSpeech = __webpack_require__(6);

var _TextToSpeech2 = _interopRequireDefault(_TextToSpeech);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    data: function data() {
        return {
            loading: false
        };
    },

    props: ['member'],
    methods: {
        contact: function contact(firstName, lastName, title, email, phone) {
            return firstName + ' ' + lastName + ' ' + title + ' ' + email + ' ' + phone;
        }
    },
    components: {
        'psg-speak': _TextToSpeech2['default']
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Staff = __webpack_require__(155);

var _Staff2 = _interopRequireDefault(_Staff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    data: function data() {
        return {
            article: {
                headline: this.$cookie.get('language') === 'es' ? 'Personal' : 'Staff',
                subhead: this.$cookie.get('language') === 'es' ? 'Nuestro equipo' : 'Our Team',
                callout: this.$cookie.get('language') === 'es' ? 'Nuestro talentoso y diverso equipo ha brindado apoyo a muchas personas infectadas o afectadas por el VIH / SIDA a lo largo de los años. A través de estos esfuerzos, muchas vidas se han transformado, personal y clientes.' : 'Our talented and diverse team has provided support for many people infected with or affected by HIV/AIDS over the years. Through these efforts, many lives have been transformed, both staff and clients.'
            },
            staff: [],
            loading: false
        };
    },

    components: {
        'psg-staff': _Staff2['default']
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(115),
  /* template */
  __webpack_require__(194),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/brianwebb/Development/exponential/clients/shanti/resources/assets/js/components/contact/Staff.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Staff.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72d5db94", Component.options)
  } else {
    hotAPI.reload("data-v-72d5db94", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(116),
  /* template */
  __webpack_require__(202),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/brianwebb/Development/exponential/clients/shanti/resources/assets/js/components/contact/StaffMember.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] StaffMember.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a6382520", Component.options)
  } else {
    hotAPI.reload("data-v-a6382520", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('psg-page', {
    attrs: {
      "article": _vm.article,
      "loading": _vm.loading
    }
  }, [_c('div', {
    attrs: {
      "slot": "copy"
    },
    slot: "copy"
  }, [_c('psg-staff'), _vm._v(" "), _c('p', [_vm._v("Professional photography by "), _c('a', {
    attrs: {
      "href": "https://www.facebook.com/irisphotographyllc/",
      "target": "blank"
    }
  }, [_vm._v("Iris Photography, LLC")]), _vm._v(". Other photos from archives.")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://www.facebook.com/irisphotographyllc/",
      "target": "blank"
    }
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/img/iris.png",
      "alt": "Iris Photography",
      "width": "20%"
    }
  })])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1d35e242", module.exports)
  }
}

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "text-center"
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "fa fa-refresh fa-spin fa-5x color"
  })]), _vm._v(" "), _vm._l((_vm.staff), function(member, index) {
    return _c('psg-staff-member', {
      key: "index",
      attrs: {
        "member": member
      }
    })
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-72d5db94", module.exports)
  }
}

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row",
    staticStyle: {
      "margin-bottom": "20px"
    },
    attrs: {
      "loading": _vm.loading
    }
  }, [(_vm.member.staff) ? _c('div', [(_vm.member.staff.image) ? _c('div', [_c('div', {
    staticClass: "col-md-4"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": '/uploads/staff/' + _vm.member.staff.image,
      "alt": _vm.member.first_name + ' ' + _vm.member.last_name
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-8"
  }, [_c('h3', [_vm._v(_vm._s(_vm.member.first_name) + " " + _vm._s(_vm.member.last_name))]), _vm._v(" "), _c('h5', [_vm._v(_vm._s(_vm.member.staff.title))]), _vm._v(" "), _c('div', {
    staticClass: "team-member"
  }, [_c('div', {
    staticClass: "team-links"
  }, [(_vm.member.email && !_vm.member.staff.hide_email) ? _c('div', [_c('a', {
    attrs: {
      "href": 'mailto:' + _vm.member.email
    }
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  }), _vm._v(" " + _vm._s(_vm.member.email))])]) : _vm._e(), _vm._v(" "), (_vm.member.extension && _vm.member.phone_number) ? _c('div', [_c('a', {
    attrs: {
      "href": 'tel:' + _vm.member.phone_number + ' x' + _vm.member.extension
    }
  }, [_c('i', {
    staticClass: "fa fa-phone"
  }), _vm._v(" " + _vm._s(_vm.member.phone_number) + " x" + _vm._s(_vm.member.extension))])]) : _vm._e(), _vm._v(" "), (!_vm.member.extension && _vm.member.phone_number) ? _c('div', [_c('a', {
    attrs: {
      "href": 'tel:' + _vm.member.phone_number
    }
  }, [_c('i', {
    staticClass: "fa fa-phone"
  }), _vm._v(" " + _vm._s(_vm.member.phone_number))])]) : _vm._e()])]), _vm._v(" "), _c('psg-speak', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    attrs: {
      "text": _vm.contact(_vm.member.first_name, _vm.member.last_name, _vm.member.staff.title, _vm.member.email, _vm.member.phone_number),
      "primary": "true"
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), (_vm.member.staff.bio) ? _c('div', [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.member.staff.bio)
    }
  }), _vm._v(" "), _c('psg-speak', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    attrs: {
      "text": _vm.member.staff.bio
    }
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.member.staff.bio) ? _c('div', [_c('p', [_vm._v("Profile information is unavailable.")]), _vm._v(" "), _c('psg-speak', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    attrs: {
      "text": "Profile information is unavailable.",
      "primary": "true"
    }
  })], 1) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), (!_vm.member.staff.image) ? _c('div', [(_vm.member.staff.bio) ? _c('div', [_c('div', {
    staticClass: "col-md-4"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/img/no-avatar.png",
      "alt": _vm.member.first_name + ' ' + _vm.member.last_name
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-8"
  }, [_c('h3', [_vm._v(_vm._s(_vm.member.first_name) + " " + _vm._s(_vm.member.last_name))]), _vm._v(" "), _c('h5', [_vm._v(_vm._s(_vm.member.staff.title))]), _vm._v(" "), _c('div', {
    staticClass: "team-links"
  }, [(_vm.member.email && !_vm.member.staff.hide_email) ? _c('div', [_c('a', {
    attrs: {
      "href": 'mailto:' + _vm.member.email
    }
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  }), _vm._v(" " + _vm._s(_vm.member.email))])]) : _vm._e(), _vm._v(" "), (_vm.member.extension && _vm.member.phone_number) ? _c('div', [_c('a', {
    attrs: {
      "href": 'tel:' + _vm.member.phone_number + ' x' + _vm.member.extension
    }
  }, [_c('i', {
    staticClass: "fa fa-phone"
  }), _vm._v(" " + _vm._s(_vm.member.phone_number) + " x" + _vm._s(_vm.member.extension))])]) : _vm._e(), _vm._v(" "), (!_vm.member.extension && _vm.member.phone_number) ? _c('div', [_c('a', {
    attrs: {
      "href": 'tel:' + _vm.member.phone_number
    }
  }, [_c('i', {
    staticClass: "fa fa-phone"
  }), _vm._v(" " + _vm._s(_vm.member.phone_number))])]) : _vm._e()]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.member.staff.bio)
    }
  }), _vm._v(" "), _c('psg-speak', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    attrs: {
      "text": _vm.member.staff.bio,
      "primary": "true"
    }
  })], 1)]) : _vm._e()]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('hr')])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a6382520", module.exports)
  }
}

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(143),
  /* template */
  __webpack_require__(177),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/brianwebb/Development/exponential/clients/shanti/resources/assets/js/views/contact/Staff.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Staff.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d35e242", Component.options)
  } else {
    hotAPI.reload("data-v-1d35e242", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});