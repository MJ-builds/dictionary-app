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

/***/ "(app-client)/./app/context/WordContext.js":
/*!************************************!*\
  !*** ./app/context/WordContext.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WordProvider\": function() { return /* binding */ WordProvider; },\n/* harmony export */   \"useWordContext\": function() { return /* binding */ useWordContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ useWordContext,WordProvider auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n//create context\nconst WordContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useWordContext = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WordContext);\n};\n_s(useWordContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst WordProvider = (param)=>{\n    let { children  } = param;\n    _s1();\n    //getting data, depending on the searchword\n    const [wordData, setWordData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"null\");\n    //related to search - searchword itself\n    const [activeWord, setActiveWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"keyboard\");\n    //note for later: Sans-serif = inter, Serif = lora, Mono = inconsolata\n    const [currentFont, setCurrentFont] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Sans Serif\");\n    //for themes later on\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    const fetchWordData = (word)=>{\n        try {\n            const response = fetch(\"https://api.dictionaryapi.dev/api/v2/entries/en/\".concat(word));\n            const data = response.json();\n            setWordData(data);\n            console.log(data);\n        } catch (error) {\n            console.log(\"An error has occured\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WordContext.Provider, {\n        value: {\n            wordData,\n            activeWord,\n            setActiveWord,\n            currentFont,\n            theme,\n            fetchWordData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\context\\\\WordContext.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(WordProvider, \"+xz98jiSIeZ0anrj1Gw8loW8Wkk=\");\n_c = WordProvider;\nvar _c;\n$RefreshReg$(_c, \"WordProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbnRleHQvV29yZENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRTtBQUVuRSxnQkFBZ0I7QUFDaEIsTUFBTUksNEJBQWNILG9EQUFhQTtBQUUxQixNQUFNSSxpQkFBaUIsSUFBTTs7SUFDbEMsT0FBT0gsaURBQVVBLENBQUNFO0FBQ3BCLEVBQUU7R0FGV0M7QUFJTixNQUFNQyxlQUFlLFNBQWtCO1FBQWpCLEVBQUVDLFNBQVEsRUFBRTs7SUFDdkMsMkNBQTJDO0lBQzNDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6Qyx1Q0FBdUM7SUFDdkMsTUFBTSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzdDLHNFQUFzRTtJQUN0RSxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFDL0MscUJBQXFCO0lBQ3JCLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNYSxnQkFBZ0IsQ0FBQ0MsT0FBUztRQUM1QixJQUFJO1lBQ0EsTUFBTUMsV0FBV0MsTUFBTSxtREFBd0QsT0FBTEY7WUFDMUUsTUFBTUcsT0FBT0YsU0FBU0csSUFBSTtZQUMxQlosWUFBWVc7WUFDWkUsUUFBUUMsR0FBRyxDQUFDSDtRQUNoQixFQUFFLE9BQU9JLE9BQU87WUFDWkYsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkM7UUFDeEM7SUFDSjtJQUVGLHFCQUNFLDhEQUFDcEIsWUFBWXFCLFFBQVE7UUFDbkJDLE9BQU87WUFDTGxCO1lBQ0FFO1lBQ0FDO1lBQ0FDO1lBQ0FFO1lBQ0FFO1FBQ0Y7a0JBRUNUOzs7Ozs7QUFHUCxFQUFFO0lBbkNXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29udGV4dC9Xb3JkQ29udGV4dC5qcz9lYTE2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vL2NyZWF0ZSBjb250ZXh0XHJcbmNvbnN0IFdvcmRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVdvcmRDb250ZXh0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KFdvcmRDb250ZXh0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBXb3JkUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgLy9nZXR0aW5nIGRhdGEsIGRlcGVuZGluZyBvbiB0aGUgc2VhcmNod29yZFxyXG4gIGNvbnN0IFt3b3JkRGF0YSwgc2V0V29yZERhdGFdID0gdXNlU3RhdGUoJ251bGwnKTtcclxuICAvL3JlbGF0ZWQgdG8gc2VhcmNoIC0gc2VhcmNod29yZCBpdHNlbGZcclxuICBjb25zdCBbYWN0aXZlV29yZCwgc2V0QWN0aXZlV29yZF0gPSB1c2VTdGF0ZShcImtleWJvYXJkXCIpO1xyXG4gIC8vbm90ZSBmb3IgbGF0ZXI6IFNhbnMtc2VyaWYgPSBpbnRlciwgU2VyaWYgPSBsb3JhLCBNb25vID0gaW5jb25zb2xhdGFcclxuICBjb25zdCBbY3VycmVudEZvbnQsIHNldEN1cnJlbnRGb250XSA9IHVzZVN0YXRlKFwiU2FucyBTZXJpZlwiKTtcclxuICAvL2ZvciB0aGVtZXMgbGF0ZXIgb25cclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwibGlnaHRcIik7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hXb3JkRGF0YSA9ICh3b3JkKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaChgaHR0cHM6Ly9hcGkuZGljdGlvbmFyeWFwaS5kZXYvYXBpL3YyL2VudHJpZXMvZW4vJHt3b3JkfWApXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldFdvcmREYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFuIGVycm9yIGhhcyBvY2N1cmVkXCIsIGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXb3JkQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHdvcmREYXRhLFxyXG4gICAgICAgIGFjdGl2ZVdvcmQsXHJcbiAgICAgICAgc2V0QWN0aXZlV29yZCxcclxuICAgICAgICBjdXJyZW50Rm9udCxcclxuICAgICAgICB0aGVtZSxcclxuICAgICAgICBmZXRjaFdvcmREYXRhXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvV29yZENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIldvcmRDb250ZXh0IiwidXNlV29yZENvbnRleHQiLCJXb3JkUHJvdmlkZXIiLCJjaGlsZHJlbiIsIndvcmREYXRhIiwic2V0V29yZERhdGEiLCJhY3RpdmVXb3JkIiwic2V0QWN0aXZlV29yZCIsImN1cnJlbnRGb250Iiwic2V0Q3VycmVudEZvbnQiLCJ0aGVtZSIsInNldFRoZW1lIiwiZmV0Y2hXb3JkRGF0YSIsIndvcmQiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/context/WordContext.js\n"));

/***/ })

});