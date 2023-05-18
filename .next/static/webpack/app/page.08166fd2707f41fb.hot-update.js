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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_WordContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/WordContext */ \"(app-client)/./app/context/WordContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction SearchBar() {\n    _s();\n    const { wordData , activeWord , setActiveWord , fetchWordData  } = (0,_context_WordContext__WEBPACK_IMPORTED_MODULE_2__.useWordContext)();\n    /* this is just used in addition to only update internally before enter \r\n  is pressed or search button is clicked - else API refreshes on every keystroke */ const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onChangeHandler = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const onSubmitHandler = (e)=>{\n        setActiveWord(inputValue);\n        fetchWordData(inputValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between items-center mb-8 h-[64px] min-w-[350px] md:w-[737px] bg-[#F4F4F4] rounded-2xl \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"flex w-full\",\n            onSubmit: onSubmitHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row gap-5 pl-5 w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"bg-transparent grow outline-none placeholder-[#2D2D2D] placeholder-opacity-25\",\n                        value: inputValue,\n                        placeholder: \"Search for any word...\",\n                        onChange: onChangeHandler\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\SearchBar.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\SearchBar.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"pr-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"./assets/images/icon-search.svg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\SearchBar.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\SearchBar.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\SearchBar.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\components\\\\SearchBar.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(SearchBar, \"BlvzXFPDVSYQ4Y2kzYHevMr6D+s=\", false, function() {\n    return [\n        _context_WordContext__WEBPACK_IMPORTED_MODULE_2__.useWordContext\n    ];\n});\n_c = SearchBar;\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDd0M7QUFDZ0I7QUFFekMsU0FBU0csWUFBWTs7SUFDbEMsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLFdBQVUsRUFBRUMsY0FBYSxFQUFFQyxjQUFhLEVBQUUsR0FDMURMLG9FQUFjQTtJQUNoQjtpRkFDK0UsR0FDL0UsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1TLGtCQUFrQixDQUFDQyxJQUFNO1FBQzdCRixjQUFjRSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDOUI7SUFDQSxNQUFNQyxrQkFBa0IsQ0FBQ0gsSUFBTTtRQUM3QkwsY0FBY0U7UUFDZEQsY0FBY0M7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBS0QsV0FBVTtZQUFjRSxVQUFVSjs7OEJBQ3RDLDhEQUFDQztvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0c7d0JBQ0NILFdBQVU7d0JBQ1ZILE9BQU9MO3dCQUNQWSxhQUFZO3dCQUNaQyxVQUFVWDs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNZO29CQUFPTixXQUFVOzhCQUNoQiw0RUFBQ087d0JBQUlDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkIsQ0FBQztHQWhDdUJyQjs7UUFFcEJELGdFQUFjQTs7O0tBRk1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1NlYXJjaEJhci5qcz9hMGU1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlV29yZENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Xb3JkQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQmFyKCkge1xyXG4gIGNvbnN0IHsgd29yZERhdGEsIGFjdGl2ZVdvcmQsIHNldEFjdGl2ZVdvcmQsIGZldGNoV29yZERhdGEgfSA9XHJcbiAgICB1c2VXb3JkQ29udGV4dCgpO1xyXG4gIC8qIHRoaXMgaXMganVzdCB1c2VkIGluIGFkZGl0aW9uIHRvIG9ubHkgdXBkYXRlIGludGVybmFsbHkgYmVmb3JlIGVudGVyIFxyXG4gIGlzIHByZXNzZWQgb3Igc2VhcmNoIGJ1dHRvbiBpcyBjbGlja2VkIC0gZWxzZSBBUEkgcmVmcmVzaGVzIG9uIGV2ZXJ5IGtleXN0cm9rZSAqL1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0QWN0aXZlV29yZChpbnB1dFZhbHVlKTtcclxuICAgIGZldGNoV29yZERhdGEoaW5wdXRWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTggaC1bNjRweF0gbWluLXctWzM1MHB4XSBtZDp3LVs3MzdweF0gYmctWyNGNEY0RjRdIHJvdW5kZWQtMnhsIFwiPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiIG9uU3VibWl0PXtvblN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtNSBwbC01IHctZnVsbFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IGdyb3cgb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLVsjMkQyRDJEXSBwbGFjZWhvbGRlci1vcGFjaXR5LTI1XCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhbnkgd29yZC4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHItNVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvaWNvbi1zZWFyY2guc3ZnXCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVdvcmRDb250ZXh0IiwiU2VhcmNoQmFyIiwid29yZERhdGEiLCJhY3RpdmVXb3JkIiwic2V0QWN0aXZlV29yZCIsImZldGNoV29yZERhdGEiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIm9uQ2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0SGFuZGxlciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/SearchBar.js\n"));

/***/ })

});