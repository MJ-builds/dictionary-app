"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/DefinitionDisplay.js":
/*!*********************************************!*\
  !*** ./app/components/DefinitionDisplay.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DefinitionDisplay; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_WordContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/WordContext */ \"(app-client)/./app/context/WordContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction DefinitionDisplay() {\n    _s();\n    const { wordData , activeWord  } = (0,_context_WordContext__WEBPACK_IMPORTED_MODULE_2__.useWordContext)();\n    const data = wordData[0];\n    if (!wordData) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-between min-w-[350px] md:min-w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between w-full\",\n                children: [\n                    wordData.length > 0 && wordData[0].word,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Audio Button\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\DefinitionDisplay.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\DefinitionDisplay.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Placeholder: \".concat(wordData[0].phonetic)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\DefinitionDisplay.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\DefinitionDisplay.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(DefinitionDisplay, \"aU3bTDRM9i9ljZFUPNfgpzXbg0o=\", false, function() {\n    return [\n        _context_WordContext__WEBPACK_IMPORTED_MODULE_2__.useWordContext\n    ];\n});\n_c = DefinitionDisplay;\nvar _c;\n$RefreshReg$(_c, \"DefinitionDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvRGVmaW5pdGlvbkRpc3BsYXkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3QztBQUNnQjtBQUV6QyxTQUFTRyxvQkFBb0I7O0lBQzFDLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxXQUFVLEVBQUUsR0FBR0gsb0VBQWNBO0lBRS9DLE1BQU1JLE9BQU9GLFFBQVEsQ0FBQyxFQUFFO0lBRXhCLElBQUksQ0FBQ0EsVUFBVTtRQUNiLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztvQkFDWkosU0FBU0ssTUFBTSxHQUFHLEtBQUtMLFFBQVEsQ0FBQyxFQUFFLENBQUNNLElBQUk7a0NBQ3hDLDhEQUFDSDtrQ0FBSTs7Ozs7Ozs7Ozs7OzBCQUVQLDhEQUFDQTswQkFBSyxnQkFBcUMsT0FBckJILFFBQVEsQ0FBQyxFQUFFLENBQUNPLFFBQVE7Ozs7Ozs7Ozs7OztBQUdoRCxDQUFDO0dBbEJ1QlI7O1FBQ1dELGdFQUFjQTs7O0tBRHpCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9EZWZpbml0aW9uRGlzcGxheS5qcz80NzA4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlV29yZENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Xb3JkQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVmaW5pdGlvbkRpc3BsYXkoKSB7XHJcbiAgY29uc3QgeyB3b3JkRGF0YSwgYWN0aXZlV29yZCB9ID0gdXNlV29yZENvbnRleHQoKTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IHdvcmREYXRhWzBdO1xyXG5cclxuICBpZiAoIXdvcmREYXRhKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIG1pbi13LVszNTBweF0gbWQ6bWluLXctZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiPlxyXG4gICAgICAgIHt3b3JkRGF0YS5sZW5ndGggPiAwICYmIHdvcmREYXRhWzBdLndvcmR9XHJcbiAgICAgICAgPGRpdj5BdWRpbyBCdXR0b248L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+e2BQbGFjZWhvbGRlcjogJHt3b3JkRGF0YVswXS5waG9uZXRpY31gfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVdvcmRDb250ZXh0IiwiRGVmaW5pdGlvbkRpc3BsYXkiLCJ3b3JkRGF0YSIsImFjdGl2ZVdvcmQiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwid29yZCIsInBob25ldGljIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/DefinitionDisplay.js\n"));

/***/ })

});