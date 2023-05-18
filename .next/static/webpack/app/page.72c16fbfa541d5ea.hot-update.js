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

/***/ "(app-client)/./app/components/SearchBar.js":
/*!*************************************!*\
  !*** ./app/components/SearchBar.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_WordContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/WordContext */ \"(app-client)/./app/context/WordContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction SearchBar() {\n    _s();\n    const { wordData , setActiveWord , fetchWordData  } = (0,_context_WordContext__WEBPACK_IMPORTED_MODULE_2__.useWordContext)();\n    /* this is just used in addition to only update internally before enter \r\n  is pressed or search button is clicked - else API refreshes on every keystroke */ const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onChangeHandler = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const onSubmitHandler = (e)=>{\n        e.preventDefault();\n        setActiveWord(inputValue);\n        fetchWordData(inputValue);\n    };\n    if (!wordData) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between items-center mb-8 h-[64px] min-w-[350px] md:w-[737px] bg-[#F4F4F4] rounded-2xl \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"flex w-full\",\n            onSubmit: onSubmitHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row gap-5 pl-5 w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"bg-transparent grow outline-none placeholder-[#2D2D2D] placeholder-opacity-25\",\n                        value: inputValue,\n                        placeholder: \"Search for any word...\",\n                        onChange: onChangeHandler\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\SearchBar.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\SearchBar.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"pr-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"./assets/images/icon-search.svg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\SearchBar.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\SearchBar.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\SearchBar.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\SearchBar.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(SearchBar, \"+gJVf48J659mNbsxM3cBjRWvXfs=\", false, function() {\n    return [\n        _context_WordContext__WEBPACK_IMPORTED_MODULE_2__.useWordContext\n    ];\n});\n_c = SearchBar;\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDd0M7QUFDZ0I7QUFFekMsU0FBU0csWUFBWTs7SUFDbEMsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLGNBQWEsRUFBRUMsY0FBYSxFQUFFLEdBQzlDSixvRUFBY0E7SUFDaEI7aUZBQytFLEdBQy9FLE1BQU0sQ0FBQ0ssWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNUSxrQkFBa0IsQ0FBQ0MsSUFBTTtRQUM3QkYsY0FBY0UsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzlCO0lBQ0EsTUFBTUMsa0JBQWtCLENBQUNILElBQU07UUFDN0JBLEVBQUVJLGNBQWM7UUFDaEJULGNBQWNFO1FBQ2RELGNBQWNDO0lBQ2hCO0lBRUEsSUFBSSxDQUFDSCxVQUFVO1FBQ2IsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFLRCxXQUFVO1lBQWNFLFVBQVVMOzs4QkFDdEMsOERBQUNFO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRzt3QkFDQ0gsV0FBVTt3QkFDVkosT0FBT0w7d0JBQ1BhLGFBQVk7d0JBQ1pDLFVBQVVaOzs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ2E7b0JBQU9OLFdBQVU7OEJBQ2hCLDRFQUFDTzt3QkFBSUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuQixDQUFDO0dBckN1QnJCOztRQUVwQkQsZ0VBQWNBOzs7S0FGTUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzP2EwZTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VXb3JkQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1dvcmRDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hCYXIoKSB7XHJcbiAgY29uc3QgeyB3b3JkRGF0YSwgc2V0QWN0aXZlV29yZCwgZmV0Y2hXb3JkRGF0YSB9ID1cclxuICAgIHVzZVdvcmRDb250ZXh0KCk7XHJcbiAgLyogdGhpcyBpcyBqdXN0IHVzZWQgaW4gYWRkaXRpb24gdG8gb25seSB1cGRhdGUgaW50ZXJuYWxseSBiZWZvcmUgZW50ZXIgXHJcbiAgaXMgcHJlc3NlZCBvciBzZWFyY2ggYnV0dG9uIGlzIGNsaWNrZWQgLSBlbHNlIEFQSSByZWZyZXNoZXMgb24gZXZlcnkga2V5c3Ryb2tlICovXHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRBY3RpdmVXb3JkKGlucHV0VmFsdWUpO1xyXG4gICAgZmV0Y2hXb3JkRGF0YShpbnB1dFZhbHVlKTtcclxuICB9O1xyXG5cclxuICBpZiAoIXdvcmREYXRhKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi04IGgtWzY0cHhdIG1pbi13LVszNTBweF0gbWQ6dy1bNzM3cHhdIGJnLVsjRjRGNEY0XSByb3VuZGVkLTJ4bCBcIj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGxcIiBvblN1Ym1pdD17b25TdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTUgcGwtNSB3LWZ1bGxcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBncm93IG91dGxpbmUtbm9uZSBwbGFjZWhvbGRlci1bIzJEMkQyRF0gcGxhY2Vob2xkZXItb3BhY2l0eS0yNVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYW55IHdvcmQuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByLTVcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2ljb24tc2VhcmNoLnN2Z1wiIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VXb3JkQ29udGV4dCIsIlNlYXJjaEJhciIsIndvcmREYXRhIiwic2V0QWN0aXZlV29yZCIsImZldGNoV29yZERhdGEiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIm9uQ2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/SearchBar.js\n"));

/***/ })

});