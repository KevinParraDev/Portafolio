"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/knock-it-out",{

/***/ "./pages/knock-it-out.js":
/*!*******************************!*\
  !*** ./pages/knock-it-out.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_img_projects_kio_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/img//projects/kio.png */ \"./public/img/projects/kio.png\");\n/* harmony import */ var _public_img_projects_kio2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/img//projects/kio2.png */ \"./public/img/projects/kio2.png\");\n/* harmony import */ var _public_img_projects_kio3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/img//projects/kio3.png */ \"./public/img/projects/kio3.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Github = ()=>{\n    _s();\n    const [activeImage, setActiveImage] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);\n    const handleScreenshot = (value)=>{\n        setActiveImage(value);\n    };\n    const screenshots = [\n        _public_img_projects_kio_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _public_img_projects_kio2_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _public_img_projects_kio3_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"game\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Knock It Out: The Show\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"game-box\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: screenshots[activeImage],\n                                    alt: \"kio icon\",\n                                    quality: 100,\n                                    className: \"image-project\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"carrusel-lista\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: _public_img_projects_kio_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                            alt: \"kio icon\",\n                                            className: activeImage === 0 ? \"screenshot-active\" : \"screenshot\",\n                                            onClick: ()=>handleScreenshot(0)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: _public_img_projects_kio2_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                            alt: \"kio icon\",\n                                            className: activeImage === 1 ? \"screenshot-active\" : \"screenshot\",\n                                            onClick: ()=>handleScreenshot(1)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: _public_img_projects_kio3_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                            alt: \"kio icon\",\n                                            className: activeImage === 2 ? \"screenshot-active\" : \"screenshot\",\n                                            onClick: ()=>handleScreenshot(2)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Play Now!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"link\",\n                                    target: \"_blank\",\n                                    href: \"https://kevin-parra.itch.io/knock-it-out-the-show\",\n                                    children: \"Itch.io\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Repository\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"link\",\n                                    target: \"_blank\",\n                                    href: \"https://github.com/KevinParraDev/Knock-It-Out-The-Show\",\n                                    children: \"Github.com\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Desarrollo\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Este videojuego fue realizado para la Global Game Jam 2024: Sede Medell\\xedn, el tiempo de desarrollo del proyecto fue de 48 horas. En este proyecto tuve el papel de programador, artista 2D y game designer, en su desarrollo us\\xe9 el motor de videojuegos Unity, el lenguaje de programaci\\xf3n C# y los assets los hice en aseprite.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Roles\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"• Game Development \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 47\n                                        }, undefined),\n                                        \" • Game Desing \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 68\n                                        }, undefined),\n                                        \" • 2D Art \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 84\n                                        }, undefined),\n                                        \" • Animation\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kespa\\\\OneDrive\\\\Documents\\\\Proyectos\\\\Nextjs\\\\NEXT-SIMPLE-PORTFOLIO\\\\pages\\\\knock-it-out.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Github, \"ZjIyVGf22ebblVxrlWvqHjhNndQ=\");\n_c = Github;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Github);\nvar _c;\n$RefreshReg$(_c, \"Github\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9rbm9jay1pdC1vdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNYO0FBQ21CO0FBQ0M7QUFDQTtBQUNsQjtBQUVqQyxNQUFNTSxTQUFTOztJQUNYLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNSSxtQkFBbUIsQ0FBQ0M7UUFDdEJGLGVBQWVFO0lBQ25CO0lBRUEsTUFBTUMsY0FBYztRQUFDVCxvRUFBSUE7UUFBRUMscUVBQUlBO1FBQUVDLHFFQUFJQTtLQUFDO0lBRXRDLHFCQUNJLDhEQUFDSiwwREFBTUE7a0JBQ0gsNEVBQUNZO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDRjtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzs4Q0FDRyw4REFBQ1gsbURBQUtBO29DQUNGYyxLQUFLSixXQUFXLENBQUNKLFlBQVk7b0NBQzdCUyxLQUFJO29DQUNKQyxTQUFTO29DQUNUSixXQUFVOzs7Ozs7OENBRWQsOERBQUNEO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ1osbURBQUtBOzRDQUNGYyxLQUFLYixvRUFBSUE7NENBQ1RjLEtBQUk7NENBQ0pILFdBQVdOLGdCQUFnQixJQUFJLHNCQUFzQjs0Q0FDckRXLFNBQVMsSUFBTVQsaUJBQWlCOzs7Ozs7c0RBRXBDLDhEQUFDUixtREFBS0E7NENBQ0ZjLEtBQUtaLHFFQUFJQTs0Q0FDVGEsS0FBSTs0Q0FDSkgsV0FBV04sZ0JBQWdCLElBQUksc0JBQXNCOzRDQUNyRFcsU0FBUyxJQUFNVCxpQkFBaUI7Ozs7OztzREFFcEMsOERBQUNSLG1EQUFLQTs0Q0FDRmMsS0FBS1gscUVBQUlBOzRDQUNUWSxLQUFJOzRDQUNKSCxXQUFXTixnQkFBZ0IsSUFBSSxzQkFBc0I7NENBQ3JEVyxTQUFTLElBQU1ULGlCQUFpQjs7Ozs7Ozs7Ozs7OzhDQUt4Qyw4REFBQ1U7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0M7b0NBQUVQLFdBQVU7b0NBQU9RLFFBQU87b0NBQVNDLE1BQUs7OENBQW9EOzs7Ozs7OENBQzdGLDhEQUFDSDs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQztvQ0FBRVAsV0FBVTtvQ0FBT1EsUUFBTztvQ0FBU0MsTUFBSzs4Q0FBeUQ7Ozs7Ozs7Ozs7OztzQ0FFdEcsOERBQUNWOzs4Q0FFRyw4REFBQ087OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0k7OENBQUU7Ozs7Ozs4Q0FDSCw4REFBQ0o7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0k7O3dDQUFFO3NEQUFtQiw4REFBQ0M7Ozs7O3dDQUFLO3NEQUFlLDhEQUFDQTs7Ozs7d0NBQUs7c0RBQVUsOERBQUNBOzs7Ozt3Q0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpGO0dBN0RNbEI7S0FBQUE7QUErRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMva25vY2staXQtb3V0LmpzP2RkZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBraW8xIGZyb20gXCIuLi9wdWJsaWMvaW1nLy9wcm9qZWN0cy9raW8ucG5nXCJcclxuaW1wb3J0IGtpbzIgZnJvbSBcIi4uL3B1YmxpYy9pbWcvL3Byb2plY3RzL2tpbzIucG5nXCJcclxuaW1wb3J0IGtpbzMgZnJvbSBcIi4uL3B1YmxpYy9pbWcvL3Byb2plY3RzL2tpbzMucG5nXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEdpdGh1YiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFthY3RpdmVJbWFnZSwgc2V0QWN0aXZlSW1hZ2VdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTY3JlZW5zaG90ID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlSW1hZ2UodmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2NyZWVuc2hvdHMgPSBba2lvMSwga2lvMiwga2lvM107XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Lbm9jayBJdCBPdXQ6IFRoZSBTaG93PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c2NyZWVuc2hvdHNbYWN0aXZlSW1hZ2VdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwia2lvIGljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtcHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FycnVzZWwtbGlzdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17a2lvMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJraW8gaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVJbWFnZSA9PT0gMCA/IFwic2NyZWVuc2hvdC1hY3RpdmVcIiA6IFwic2NyZWVuc2hvdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNjcmVlbnNob3QoMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtraW8yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImtpbyBpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZUltYWdlID09PSAxID8gXCJzY3JlZW5zaG90LWFjdGl2ZVwiIDogXCJzY3JlZW5zaG90XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2NyZWVuc2hvdCgxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2tpbzN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwia2lvIGljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlSW1hZ2UgPT09IDIgPyBcInNjcmVlbnNob3QtYWN0aXZlXCIgOiBcInNjcmVlbnNob3RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTY3JlZW5zaG90KDIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDI+R2FtZSBEZXNjcmlwdGlvbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPktub2NrIEl0IE91dDogVGhlIFNob3cgaXMgYSAyRCBwbGF0Zm9ybWVyIGdhbWUgZm9yIHR3byBwbGF5ZXJzIGluIHdoaWNoIG9uZSBvZiB0aGVtIHdpbGwgdGFrZSBjb250cm9sIG9mIHRoZSBLbm9jayBJdCBPdXQgY29udGVzdGFudCwgd2hpbGUgdGhlIG90aGVyIHdpbGwgYmUgdGhlIGF1ZGllbmNlIG9mIHRoZSBzaG93LCB3aG8gd2lsbCBub3Qgb25seSBsYXVnaCBhdCB0aGUgY29udGVzdGFudCdzIG1pc3Rha2VzIGJ1dCBhbHNvIG1ha2UgdGhlaXIgbGlmZSBpbXBvc3NpYmxlIGJ5IHRocm93aW5nIHBpZXMgYXQgdGhlbSB0byBtYWtlIHRoZW0gZmFpbC48L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+UGxheSBOb3chPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2tldmluLXBhcnJhLml0Y2guaW8va25vY2staXQtb3V0LXRoZS1zaG93XCI+SXRjaC5pbzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlJlcG9zaXRvcnk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9LZXZpblBhcnJhRGV2L0tub2NrLUl0LU91dC1UaGUtU2hvd1wiPkdpdGh1Yi5jb208L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5EZXNhcnJvbGxvPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXN0ZSB2aWRlb2p1ZWdvIGZ1ZSByZWFsaXphZG8gcGFyYSBsYSBHbG9iYWwgR2FtZSBKYW0gMjAyNDogU2VkZSBNZWRlbGzDrW4sIGVsIHRpZW1wbyBkZSBkZXNhcnJvbGxvIGRlbCBwcm95ZWN0byBmdWUgZGUgNDggaG9yYXMuIEVuIGVzdGUgcHJveWVjdG8gdHV2ZSBlbCBwYXBlbCBkZSBwcm9ncmFtYWRvciwgYXJ0aXN0YSAyRCB5IGdhbWUgZGVzaWduZXIsIGVuIHN1IGRlc2Fycm9sbG8gdXPDqSBlbCBtb3RvciBkZSB2aWRlb2p1ZWdvcyBVbml0eSwgZWwgbGVuZ3VhamUgZGUgcHJvZ3JhbWFjacOzbiBDIyB5IGxvcyBhc3NldHMgbG9zIGhpY2UgZW4gYXNlcHJpdGUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Um9sZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7igKIgR2FtZSBEZXZlbG9wbWVudCA8YnIgLz4g4oCiIEdhbWUgRGVzaW5nIDxiciAvPiDigKIgMkQgQXJ0IDxiciAvPiDigKIgQW5pbWF0aW9uPC9wPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpdGh1YjsiXSwibmFtZXMiOlsiTGF5b3V0IiwiSW1hZ2UiLCJraW8xIiwia2lvMiIsImtpbzMiLCJ1c2VTdGF0ZSIsIkdpdGh1YiIsImFjdGl2ZUltYWdlIiwic2V0QWN0aXZlSW1hZ2UiLCJoYW5kbGVTY3JlZW5zaG90IiwidmFsdWUiLCJzY3JlZW5zaG90cyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3JjIiwiYWx0IiwicXVhbGl0eSIsIm9uQ2xpY2siLCJoMiIsImEiLCJ0YXJnZXQiLCJocmVmIiwicCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/knock-it-out.js\n"));

/***/ })

});