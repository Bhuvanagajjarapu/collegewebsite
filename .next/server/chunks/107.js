exports.id = 107;
exports.ids = [107];
exports.modules = {

/***/ 6784:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": "branches_sidebar__D6Otx",
	"closed": "branches_closed__7lTYb",
	"toggleButton": "branches_toggleButton__U6_lb"
};


/***/ }),

/***/ 5705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _branches_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6784);
/* harmony import */ var _branches_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_branches_module_css__WEBPACK_IMPORTED_MODULE_2__);
// Sidebar.js



function Sidebar({ setSelectedBranch  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: (_branches_module_css__WEBPACK_IMPORTED_MODULE_2___default().sidebar),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    onClick: ()=>setSelectedBranch("Hyderabad"),
                    style: {
                        cursor: "pointer"
                    },
                    children: "Hyderabad"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    onClick: ()=>setSelectedBranch("Bhimavaram"),
                    style: {
                        cursor: "pointer"
                    },
                    children: "Bhimavaram"
                })
            ]
        })
    });
}


/***/ })

};
;