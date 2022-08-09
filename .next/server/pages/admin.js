"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/admin";
exports.ids = ["pages/admin"];
exports.modules = {

/***/ "./pages/admin/index.jsx":
/*!*******************************!*\
  !*** ./pages/admin/index.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n});\nconst getServerSideProps = context => {\n  const {\n    req: {\n      cookies\n    }\n  } = context;\n  const cookie = cookies['COLSON_ECOMMERCE_ADMIN'] || false;\n\n  if (!cookie) {\n    return {\n      redirect: {\n        destination: '/admin/login'\n      }\n    };\n  } else {\n    return {\n      redirect: {\n        destination: '/admin/home'\n      }\n    };\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUVBQWUsTUFBTTtBQUNqQixzQkFBTyw2SUFBUDtBQUNILENBRkQ7QUFJTyxNQUFNQSxrQkFBa0IsR0FBSUMsT0FBRCxJQUFhO0FBQzNDLFFBQU07QUFBQ0MsSUFBQUEsR0FBRyxFQUFFO0FBQUNDLE1BQUFBO0FBQUQ7QUFBTixNQUFtQkYsT0FBekI7QUFDQSxRQUFNRyxNQUFNLEdBQUdELE9BQU8sQ0FBQyx3QkFBRCxDQUFQLElBQXFDLEtBQXBEOztBQUVBLE1BQUcsQ0FBQ0MsTUFBSixFQUFXO0FBQ1AsV0FBTztBQUNIQyxNQUFBQSxRQUFRLEVBQUU7QUFDTkMsUUFBQUEsV0FBVyxFQUFFO0FBRFA7QUFEUCxLQUFQO0FBS0gsR0FORCxNQU9JO0FBQ0EsV0FBTztBQUNIRCxNQUFBQSxRQUFRLEVBQUU7QUFDTkMsUUFBQUEsV0FBVyxFQUFFO0FBRFA7QUFEUCxLQUFQO0FBS0g7QUFDSixDQWxCTSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FkbWluL2luZGV4LmpzeD81ZGJhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIHJldHVybiA8PjwvPlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHtyZXE6IHtjb29raWVzfX0gPSBjb250ZXh0XHJcbiAgICBjb25zdCBjb29raWUgPSBjb29raWVzWydDT0xTT05fRUNPTU1FUkNFX0FETUlOJ10gfHwgZmFsc2VcclxuXHJcbiAgICBpZighY29va2llKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvYWRtaW4vbG9naW4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9hZG1pbi9ob21lJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZXEiLCJjb29raWVzIiwiY29va2llIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/index.jsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/admin/index.jsx"));
module.exports = __webpack_exports__;

})();