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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WordProvider\": function() { return /* binding */ WordProvider; },\n/* harmony export */   \"useWordContext\": function() { return /* binding */ useWordContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ useWordContext,WordProvider auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n//create context\nconst WordContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useWordContext = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WordContext);\n};\n_s(useWordContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst WordProvider = (param)=>{\n    let { children  } = param;\n    _s1();\n    //just setting a default word for now\n    const [wordData, setWordData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"null\");\n    const [word, setActiveWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"keyboard\");\n    //note for later: Sans-serif = inter, Serif = lora, Mono = inconsolata\n    const [currentFont, setCurrentFont] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Sans Serif\");\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    const fetchData = (word)=>{\n        try {\n            const response = fetch(\"https://api.dictionaryapi.dev/api/v2/entries/en/\".concat(word));\n            const data = response.json();\n            setWord(data);\n        } catch (error) {\n            console.log(\"An error has occured\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WordContext.Provider, {\n        value: {\n            word,\n            currentFont,\n            theme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pleas\\\\OneDrive\\\\Desktop\\\\CODE\\\\dictionary\\\\dictionary-app\\\\app\\\\context\\\\WordContext.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(WordProvider, \"BhuDmzi8nkiluWDVOk3qq3+KrZs=\");\n_c = WordProvider;\nvar _c;\n$RefreshReg$(_c, \"WordProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbnRleHQvV29yZENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRTtBQUVuRSxnQkFBZ0I7QUFDaEIsTUFBTUksNEJBQWNILG9EQUFhQTtBQUUxQixNQUFNSSxpQkFBaUIsSUFBTTs7SUFDbEMsT0FBT0gsaURBQVVBLENBQUNFO0FBQ3BCLEVBQUU7R0FGV0M7QUFJTixNQUFNQyxlQUFlLFNBQWtCO1FBQWpCLEVBQUVDLFNBQVEsRUFBRTs7SUFDdkMscUNBQXFDO0lBQ3JDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLE1BQU1DLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFDdkMsc0VBQXNFO0lBQ3RFLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFFakMsTUFBTWEsWUFBWSxDQUFDTixPQUFTO1FBQ3hCLElBQUk7WUFDQSxNQUFNTyxXQUFXQyxNQUFNLG1EQUF3RCxPQUFMUjtZQUMxRSxNQUFNUyxPQUFPRixTQUFTRyxJQUFJO1lBQzFCQyxRQUFRRjtRQUNaLEVBQUUsT0FBT0csT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUMsd0JBQXdCRjtRQUN4QztJQUNKO0lBRUYscUJBQ0UsOERBQUNsQixZQUFZcUIsUUFBUTtRQUNuQkMsT0FBTztZQUNMaEI7WUFDQUU7WUFDQUU7UUFDRjtrQkFFQ1A7Ozs7OztBQUdQLEVBQUU7SUE3QldEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb250ZXh0L1dvcmRDb250ZXh0LmpzP2VhMTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vY3JlYXRlIGNvbnRleHRcclxuY29uc3QgV29yZENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlV29yZENvbnRleHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoV29yZENvbnRleHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdvcmRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAvL2p1c3Qgc2V0dGluZyBhIGRlZmF1bHQgd29yZCBmb3Igbm93XHJcbiAgY29uc3QgW3dvcmREYXRhLCBzZXRXb3JkRGF0YV0gPSB1c2VTdGF0ZSgnbnVsbCcpO1xyXG4gIGNvbnN0IFt3b3JkLCBzZXRBY3RpdmVXb3JkXSA9IHVzZVN0YXRlKFwia2V5Ym9hcmRcIik7XHJcbiAgLy9ub3RlIGZvciBsYXRlcjogU2Fucy1zZXJpZiA9IGludGVyLCBTZXJpZiA9IGxvcmEsIE1vbm8gPSBpbmNvbnNvbGF0YVxyXG4gIGNvbnN0IFtjdXJyZW50Rm9udCwgc2V0Q3VycmVudEZvbnRdID0gdXNlU3RhdGUoXCJTYW5zIFNlcmlmXCIpO1xyXG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXCJsaWdodFwiKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSAod29yZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2goYGh0dHBzOi8vYXBpLmRpY3Rpb25hcnlhcGkuZGV2L2FwaS92Mi9lbnRyaWVzL2VuLyR7d29yZH1gKVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRXb3JkKGRhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQW4gZXJyb3IgaGFzIG9jY3VyZWRcIiwgZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdvcmRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgd29yZCxcclxuICAgICAgICBjdXJyZW50Rm9udCxcclxuICAgICAgICB0aGVtZSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Xb3JkQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiV29yZENvbnRleHQiLCJ1c2VXb3JkQ29udGV4dCIsIldvcmRQcm92aWRlciIsImNoaWxkcmVuIiwid29yZERhdGEiLCJzZXRXb3JkRGF0YSIsIndvcmQiLCJzZXRBY3RpdmVXb3JkIiwiY3VycmVudEZvbnQiLCJzZXRDdXJyZW50Rm9udCIsInRoZW1lIiwic2V0VGhlbWUiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJzZXRXb3JkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/context/WordContext.js\n"));

/***/ })

});